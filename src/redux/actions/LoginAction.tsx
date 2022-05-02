export const postLogAcc = (payload: any) => (dispatch: any) => {

  const formatDate = (date: any) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
  }
  const date = new Date();

  const data = {
    email: payload.email,
    firstName: payload.firstName,
    lastName: payload.lastName,
    time: formatDate(date)
  }

  const url = 'https://data-hosting.herokuapp.com/loginSesh'
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json().then(item => {
    localStorage.setItem("userAcc", JSON.stringify(item))
  }))

}