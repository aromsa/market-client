import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign'
import { updateFavDesigners } from "../redux/action";
import { connect } from 'react-redux'

const colors = {
  transparent: 'transparent',
  white: '#fff',
  heartColor: '#e92f3c',
  textPrimary: '#515151',
  black: '#000', 
}

// const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

class StyleDetailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      style: {},
      img: 'https://i.postimg.cc/jSDCsdNh/Screen-Shot-2020-08-27-at-1-55-48-PM.png'
    }
    // this.lastPress = 0
  }

  componentDidMount(){
    // console.log(this.props.styles.styles.map(style => style.style_name))
    this.props.styles.styles.map(style => {
      if (style.id === this.props.route.params.styleid) {
        this.setState({
          style: style,
          img: style.images[0].img
        })
      }
    })
    // this.props.route.params.styleid
    // if (this.props.like === true) {
    //   this.setState(prevState => ({ liked: !prevState.liked }))
    // } 
  }

  // handleLargeAnimatedIconRef = (ref) => {
  //   this.largeAnimatedIcon = ref
  // }

  // handleSmallAnimatedIconRef = (ref) => {
  //   this.smallAnimatedIcon = ref
  // }

  // animateIcon = () => {
  //   const { liked } = this.state
  //   this.largeAnimatedIcon.stopAnimation()

  //   if (liked) {
  //     this.largeAnimatedIcon.bounceIn()
  //       .then(() => this.largeAnimatedIcon.bounceOut())
  //     this.smallAnimatedIcon.pulse(200)
  //   } else {
  //     this.largeAnimatedIcon.bounceIn()
  //       .then(() => {
  //         this.largeAnimatedIcon.bounceOut()
  //         this.smallAnimatedIcon.bounceIn()
  //       })
  //       .then(() => {
  //         if (!liked) {
  //           this.setState(prevState => ({ liked: !prevState.liked }))
  //         }
  //       })
  //   }
  // }

  // handleOnPress = () => {
  //   const time = new Date().getTime()
  //   const delta = time - this.lastPress
  //   const doublePressDelay = 400

  //   if (delta < doublePressDelay) {
  //     this.animateIcon()
  //   }
  //   this.lastPress = time
  // }

  // handleOnPressLike = () => {
  //   this.smallAnimatedIcon.bounceIn()
  //   this.setState(prevState => ({ liked: !prevState.liked }))
  //   this.props.updateFavDesigners(this.props.buyer.buyer.id, this.props.id, this.state.liked) 
  // }

  // heartColor = () => {
  //   if(this.props.like === true ) {
  //     return colors.heartColor
  //   } else {
  //     return colors.white
  //   }
  // }

  // handleSelectDesigner = () => {
  //   this.props.handleSelectDesigner()
  // }

  render() {    
    const { liked } = this.state
// console.log(this.state.img)
    // let img = this.state.images[0]
    const card = { 
      style_name: this.state.style.style_name,
      style_number: this.state.style.style_number,
      color: this.state.style.color,
      size: this.state.style.size,
      fabric: this.state.style.fabric,
      ws: this.state.style.wholesale,
      rt: this.state.style.retail,
      photo: {uri : this.state.img },
    }

    // console.log("SDC PROPS: ", this.state.style)
    return (
      <View style={styles.container}>
      <TouchableOpacity
        // activeOpacity={1}
        style={styles.card}
        // onPress={this.handleOnPress}
      >
        {/* <AnimatedIcon
          ref={this.handleLargeAnimatedIconRef}
          name="heart"
          color={colors.white}
          size={80}
          style={styles.animatedIcon}
          duration={500}
          delay={200}
        /> */}
        <Image
          style={styles.image}
          source={card.photo}
          // resizeMode="cover"
          resizeMode="contain"
        />
        <View style={styles.photoDescriptionContainer}
        >
          {/* <TouchableOpacity
            activeOpacity={1}
            onPress={this.handleOnPressLike}
          > */}
            {/* <AnimatedIcon
              ref={this.handleSmallAnimatedIconRef}
              name={liked ? 'heart' : 'hearto'}
              color={liked ? colors.heartColor : colors.textPrimary}
              size={18}
              style={styles.icon}
            />
          </TouchableOpacity > */}
          <View style={styles.styleContainer}>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Style Name:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>{card.style_name}
            </Text>
          </View>

          <View style={styles.textContainer}>
          <Text style={styles.text}>Style Number:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>{card.style_number}
            </Text>
            </View>

            <View style={styles.textContainer}>
          <Text style={styles.text}>Color:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>{card.color}
            </Text>
            </View>

            <View style={styles.textContainer}>
          <Text style={styles.text}>Size:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>{card.size}
            </Text>
            </View>

            <View style={styles.textContainer}>
          <Text style={styles.text}>Fabric:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>{card.fabric}
            </Text>
            </View>

            <View style={styles.textContainer}>
          <Text style={styles.text}>WS:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>${card.ws}
            </Text>
            <Text style={styles.text}>RT:  </Text>
            <Text
            style={[styles.text, styles.textPhotographer]}>${card.rt}
            </Text>
            </View>

            </View>

        </View>
      </TouchableOpacity>
      </View>

    )
  }
}

const msp = (state) => {
  return {styles: state.styles}
}

export default connect(msp)(StyleDetailPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: '90%',
    width: 400,
    maxWidth: '90%',
    marginBottom: 50,
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
    height: 450,
    width: '92%'
  },
  // photoDescriptionContainer: {
  //   width: '80%',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   // paddingTop: 15,
  //   paddingBottom: 10
  // },
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
    // justifyContent: 'space-evenly', 
    flexDirection: 'row',
    textAlign: 'left',
    paddingTop: 20
  },
  styleContainer: {
    // flexDirection: 'row',
    textAlign: 'left',
    paddingTop: 0
    
  }
})
