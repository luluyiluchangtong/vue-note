import Axios from "axios";

//  按住 axios
axios.get('...', {
  params: {
    ID: 112345
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})


axios.post('...', {
  params: {
    ID: 1234
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

function getUserAcount() {
  return axios.get('...')
}

function getUserPermissions() {
  return axios.get('...')
}

axios.all([getUserAcount(), getUserPermissions()]).then(axios, spread((acc, per) => {
  console.log(acc)
  console.log(per)
}))
