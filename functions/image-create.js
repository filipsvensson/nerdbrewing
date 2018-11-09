/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  /* parse the string body into a useable JS object */
  const image = JSON.parse(event.body)
  console.log("Function `image-create` invoked", image)

    /* Success! return the response with statusCode 200 */
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(image)
  })

}
