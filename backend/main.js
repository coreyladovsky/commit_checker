require('dotenv').config();
const axios = require('axios')

let { USERNAME, PASSWORD, NODE_ENV } = process.env;
const main = () => {
    console.log(USERNAME)
  axios({
    method: "get",
    url: "https://api.github.com/repos/xpectro93/webfinal/commits",
    auth: {
      username: USERNAME,
      password: PASSWORD
    }
  }).then(response => {
      console.log(response)
  })
  .catch(err => {
    console.log(err)
  });
}

main()