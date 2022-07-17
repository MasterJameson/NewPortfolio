export const ACTIVE_USER = 'ACTIVE_USER'
export const REMOVE_ACTIVE_USER = 'REMOVE_ACTIVE_USER'

export const postLogAcc = (payload: any) => (dispatch: any) => {

  const url = 'https://data-hosting.herokuapp.com/loginSesh'
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(response => response.json().then(data => {
    localStorage.setItem("userAcc", JSON.stringify(data))
    dispatch({
      type: ACTIVE_USER,
      data: data
    })
  }))

}

export const removeLog =  () => {
  return {
    type: REMOVE_ACTIVE_USER,
  }
}