export const GET_PRODUCTLIST = 'GET_PRODUCTLIST'

export const getProductList = () => (dispatch: any) => {
  const url = `https://data-hosting.herokuapp.com/productList`
  fetch(url, {
    method: "GET", mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json().then(data => {
    dispatch({
      type: GET_PRODUCTLIST,
      data: data
    })
  }))
}