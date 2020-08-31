import { combineReducers } from 'redux'
// import React, { useState } from 'react'
import { Alert} from 'react-native'

const defaultState = {
    buyer: null,
    designers: []
}

const buyerReducer = ( state = defaultState, action) => {
  switch (action.type) {
    case "getBuyer":
      // console.log("reducer: ")
      if (action.payload.message){
        Alert.alert(action.payload.message)
        return {...state, buyer: null}
      }else{
        return {...state, buyer: action.payload.buyer}
      }
    default:
      return state
  }
}

const designerReducer = ( state = defaultState, action) => {
  switch (action.type) {
    case "getDesigner":
      return {...state, designers: action.payload.designers}
    default:
      return state
  }
}

const rootReducer = combineReducers({
    buyer: buyerReducer,
    designers: designerReducer
})

export default rootReducer