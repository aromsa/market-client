import { combineReducers } from 'redux'
// import React, { useState } from 'react'
import { Alert} from 'react-native'

const defaultState = {
    buyer: null,
    designers: []
}

const buyerReducer = ( state = defaultState, action) => {
  console.log("reducer", action.type)
  switch (action.type) {
    case "getBuyer":
      // console.log("reducer: ")
      if (action.payload.message){
        Alert.alert(action.payload.message)
        return {...state, buyer: null}
      }else{
      
        return {...state, buyer: action.payload.buyer}
      }
     case "update favs":
      // console.log(action.payload.buyer)
      return {...state, buyer: action.payload.buyer}
    default:
      return state
  }
}

const designerReducer = ( state = defaultState, action) => {
  switch (action.type) {
    case "getDesigners":
      // console.log("DesignerReducer: ", action.payload)
      return {...state, designers: action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({
    buyer: buyerReducer,
    designers: designerReducer
})

export default rootReducer