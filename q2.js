const axios = require("axios");

const getTodo = async (todoId) => {
  try{
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + todoId
    );
    const todoData = resp.data;

    const userResp = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + todoData.userId
    );
    const user = userResp.data;

    const result = {
      owner: user.name,
      title: todoData.title,
      completed: todoData.completed,
    };

    return result;
  
  }
  catch (error){
    return "INVALID TODO ID"
  }
  
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

module.exports = getTodo;