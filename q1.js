const axios = require("axios");

const getUser = async (userId) => {
  try{
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users/"+userId);
    return resp.data.name
  }
  catch (error){
    return "INVALID USER ID"
  }
  
}

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

module.exports = getUser;
