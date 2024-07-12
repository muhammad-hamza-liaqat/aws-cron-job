/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

// export const cronJobHandler = async (event, context) => {

//   console.log("inside cronJobHandler");
//   console.log("cron job exceuted at: ", new Date().toISOString());

//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({ message: "cron job exceuted" })
//   };

//   return response;
// };

export const cronJobHandler = async (event, context)=>{
  const time = new Date();
  console.log(`cron job exceuted at ${time}`);
  return {
    statusCode: 200,
    body: JSON.stringify({message: "cron job exceuted!"})
  }
}