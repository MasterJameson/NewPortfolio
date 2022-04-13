export const postAccount = (payload: any) => (dispatch: any) => {
  console.log('payload', payload)
  const data = {
    id: payload.id,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
  }
  const url = `http://localhost:3001/accounts`
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}