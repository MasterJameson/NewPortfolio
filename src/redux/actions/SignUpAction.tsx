export const GET_ACCOUNT = 'GET_ACCOUNT'
export const POST_ACCOUNT = 'POST_ACCOUNT'

export const postAccount = (payload: any) => (dispatch: any) => {
  const data = {
    id: payload.id,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
  }
  const url = `https://data-hosting.herokuapp.com/accounts`
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data =>{ 
    dispatch({
      type: POST_ACCOUNT,
      data: data
    })
  })
}

export const getAccount = () => (dispatch: any) => {
  const url = `https://data-hosting.herokuapp.com/accounts`
  fetch(url, {
    method: "GET",
  }).then(res => res.json().then(data => {
    dispatch({
      type: GET_ACCOUNT,
      data: data
    })
  }))
}

