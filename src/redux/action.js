import { Alert, Linking} from 'react-native'

export const getDesigners = () => {

  return function (dispatch) {
    // console.log("FETCH 1: ")
    fetch("http://localhost:3000/designers")
    .then(r => r.json())
    .then(obj => 
      dispatch({ type: "getDesigners", payload: obj}))
  }
}


export const getBuyer = (buyerObj) => {
  return function (dispatch) {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/buyers/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(buyerObj)
    })
    .then(r => r.json())
    
    .then(obj => 

      dispatch({ type: "getBuyer", payload: obj}))
  }
  
}


// {
//       // console.log("ACTION: ", obj.buyer.id)
//       if (obj.buyer.id === undefined){
//         Alert.alert(obj.message)
//       }else{
//         // Alert.alert(obj.message)
//         console.log("true")
//       }

