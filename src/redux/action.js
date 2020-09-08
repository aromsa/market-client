export const updateFavDesigners = (buyerid, id, boolean) => {
  // console.log("BEFORE FETCH: ", boolean, typeof id)
  return function (dispatch) {
  let url = "http://localhost:3000/favorite_designers"
    if (boolean === true) {
      fetch(`${url}/${id}`,{ 
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(buyerObj => dispatch({ type: "update favs", payload: buyerObj}))
    } else if (boolean === false) {
      // console.log("designer id: ", designerid)
      fetch (url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          "buyer_id": buyerid,
          "designer_id": id
        })
      })
      .then(response => response.json())
      .then(buyerObj => dispatch({ type: "update favs", payload: buyerObj}))
    }
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

export const getStyles = () => {
  return function (dispatch) {
    // console.log("FETCH 1: ")
    fetch("http://localhost:3000/styles")
    .then(r => r.json())
    .then(styles => dispatch({ type: "getStyles", payload: styles}))
  }
}

export const newSelectedStyle = (buyerid, styleid) => {
  let ssUrl = 'http://localhost:3000/selected_styles'
  fetch (ssUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({
      "buyer_id": buyerid,
      "style_id": styleid
    })
  })
  .then(response => response.json())
  .then(buyerObj => dispatch({ type: "update ss", payload: buyerObj}))
  }
