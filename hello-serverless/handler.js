'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.add = async (event) => {
  let {num1,num2} = JSON.parse(event.body)
  let output = {
    num1: num1,
    num2: num2,
    result: num1 + num2
  }
  console.log(output)
  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.add1 = async (event) => {
  let {num1,num2} = event
  return num1 + num2
  };
  module.exports.multiply = async (event) => {
    let {num1,num2} = event
    return num1 * num2
    };