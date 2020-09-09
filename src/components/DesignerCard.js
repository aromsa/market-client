import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign'
import { updateFavDesigners } from "../redux/action";
import { connect } from 'react-redux'
import Colors from '../styles/colors'


const colors = {
  transparent: 'transparent',
  white: '#fff',
  // heartColor: '#e92f3c',
  heartColor: Colors.primary,
  textPrimary: '#515151',
  black: '#000', 
}

const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

class DesignerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
    this.lastPress = 0
  }

  componentDidMount(){
    if (this.props.like === true) {
      this.setState(prevState => ({ liked: !prevState.liked }))
    } 
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
          this.props.updateFavDesigners(this.props.buyer.buyer.id, this.props.id, this.state.liked)
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
    // this.addLike()
  }

  // addLike = () => {
  //   this.props.updateFavDesigners(this.props.buyer.buyer.id, this.props.id, this.state.liked) 
  // }

  handleOnPressLike = () => {
    this.smallAnimatedIcon.bounceIn()
    this.setState(prevState => ({ liked: !prevState.liked }))
    this.props.updateFavDesigners(this.props.buyer.buyer.id, this.props.id, this.state.liked) 
  }

  heartColor = () => {
    if(this.props.like === true ) {
      return colors.heartColor
    } else {
      return colors.white
    }
  }

  handleSelectDesigner = () => {
    this.props.handleSelectDesigner()
  }

  render() {    
    const { liked } = this.state

    const card = { 
      designer: this.props.designer,
      photo: {uri : this.props.photo },
    }

    // console.log("DC PROPS: ", this.props)
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
          resizeMode="cover"
          // resizeMode="contain"
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
            <Text style={styles.text}>Designer:  </Text>
            <Text
            onPress={this.handleSelectDesigner}
            style={[styles.text, styles.textPhotographer]}>{card.designer}</Text>
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
  return {updateFavDesigners: (buyerid, id, liked) => dispatch(updateFavDesigners(buyerid, id, liked))}
}

export default connect(msp, mdp)(DesignerCard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    height: 345,
    width: 300,
    maxWidth: '80%',
    justifyContent: 'center',
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
    height: 280,
    width: '92%'
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
    opacity: 0
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
    flexDirection: 'row',
    textAlign: 'left',
    paddingTop: 0
  }
})
