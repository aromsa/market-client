export const updateFavDesigners = (id, boolean) => {
  // console.log("BEFORE FETCH: ", boolean, typeof id)
  let url = "http://localhost:3000/favorite_designers"
  if (boolean === true) {
    fetch(`${url}/${id}`,{ 
      method: 'DELETE'
    })
    .then(response => response.json())
    // .then(obj => console.log("AFTER FETCH: ", obj))
  }
} 

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
    .then(obj => dispatch({ type: "getBuyer", payload: obj}))
  }
}
