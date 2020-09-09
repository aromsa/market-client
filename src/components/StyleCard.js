import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign'
import { newSelectedStyle } from "../redux/action";
import Colors from '../styles/colors'
// import { styleDetails } from "../../App"

const colors = {
  transparent: 'transparent',
  white: '#fff',
  // heartColor: '#e92f3c',
  heartColor: Colors.primary,
  textPrimary: '#515151',
  black: '#000', 
}

const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

class StyleCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
    this.lastPress = 0
  }

  componentDidMount(){
    // if (this.props.like === true) {
    //   this.setState(prevState => ({ liked: !prevState.liked }))
    // } 
    // console.log(this.props.buyer.buyer.selected_styles)
    // console.log(this.props.id)

    let favs = this.props.buyer.buyer.selected_styles
    // console.log(favs)
    // let filterDesigners = designers.filter( designer => !favs.some(fav => fav.id === designer.id))
    favs.map(style => {
      if (style.style.id === this.props.id){
        // console.log(style.id, this.props.id)
        this.setState(prevState => ({ liked: !prevState.liked }))
      }
    //   if (this.props.like === true) {
    //   this.setState(prevState => ({ liked: !prevState.liked }))
    //  }
    })
  }

  handleLargeAnimatedIconRef = (ref) => {
    this.largeAnimatedIcon = ref
  }

  handleSmallAnimatedIconRef = (ref) => {
    this.smallAnimatedIcon = ref
  }

  animateIcon = () => {
    const { liked } = this.state
    this.largeAnimatedIcon.stopAnimation()

    if (liked) {
      this.largeAnimatedIcon.bounceIn()
        .then(() => this.largeAnimatedIcon.bounceOut())
      this.smallAnimatedIcon.pulse(200)
    } else {
      this.largeAnimatedIcon.bounceIn()
        .then(() => {
          this.largeAnimatedIcon.bounceOut()
          this.smallAnimatedIcon.bounceIn()
    this.props.newSelectedStyle(this.props.buyer.buyer.id, this.props.id)

        })
        .then(() => {
          if (!liked) {
            this.setState(prevState => ({ liked: !prevState.liked }))
          }
        })
    }
  }

  handleOnPress = () => {
    const time = new Date().getTime()
    const delta = time - this.lastPress
    const doublePressDelay = 400

    if (delta < doublePressDelay) {
      this.animateIcon()
    }
    this.lastPress = time
  }

  handleOnPressLike = (e) => {
    this.smallAnimatedIcon.bounceIn()
    this.setState(prevState => ({ liked: !prevState.liked }))
    this.props.newSelectedStyle(this.props.buyer.buyer.id, this.props.id)
  }

  heartColor = () => {
    if(this.props.like === true ) {
      return colors.heartColor
    } else {
      return colors.white
    }
  }

  handleSelectStyle = () => {
    // console.log(this.props.id)
    this.props.handleSelectStyle(this.props.id)
  }

  // handleSelectStyle = () => {
  //   console.log("clicked")
  //   // this.props.handleSelectDesigner()
  //   // console.log("clicked: ", this.props)
  //   this.props.navigation.navigate('Style Detail Page')
  //   // this.props.styleDetails(this.props)
  // }

  render() {    
    const { liked } = this.state

    const card = { 
      style: this.props.style,
      photo: {uri : this.props.photo },
      size: this.props.size,
      retail: this.props.retail
    }

    // console.log("DC PROPS: ", this.props.styleDetails)
    return (
      <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.card}
        onPress={this.handleOnPress}
      >
        <AnimatedIcon
          ref={this.handleLargeAnimatedIconRef}
          name="heart"
          color={colors.white}
          size={80}
          style={styles.animatedIcon}
          duration={500}
          delay={200}
        />
        <Image
          style={styles.image}
          source={card.photo}
          // resizeMode="cover"
          resizeMode="contain"
        />
        <View style={styles.photoDescriptionContainer}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.handleOnPressLike}
          >
            <AnimatedIcon
              ref={this.handleSmallAnimatedIconRef}
              name={liked ? 'heart' : 'hearto'}
              color={liked ? colors.heartColor : colors.textPrimary}
              size={18}
              style={styles.icon}
            />
          </TouchableOpacity >
          <View style={styles.textContainer}>
            <Text onPress={this.handleSelectStyle}
            style={[styles.text, styles.textPhotographer]}>{card.style}</Text>
          
          {/* <Text style={styles.text}>Designer:  </Text> */}
          <Text style={styles.text}>Size: {card.size} </Text>
          <Text style={styles.text}>${card.retail}</Text>
          
          </View>
        </View>
      </TouchableOpacity>
      </View>

    )
  }
}

const msp = (state) => {
  return {buyer: state.buyer}
}

const mdp = (dispatch) => {
  return {newSelectedStyle: (buyerid, styleid) => dispatch(newSelectedStyle(buyerid, styleid))}
}

export default connect(msp, mdp)(StyleCard)

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2
  },
  image: {
    marginTop: 10,
    height: '70%',
    width: '100%'
  },
  photoDescriptionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10
  },
  icon: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animatedIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 160,
    opacity: 0,
    paddingBottom: 110
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    backgroundColor: colors.transparent,
    color: colors.textPrimary
  },
  textPhotographer: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    flexDirection: 'column',
    textAlign: 'left',
    paddingTop: 0,
    flexWrap: 'wrap',
  }
})