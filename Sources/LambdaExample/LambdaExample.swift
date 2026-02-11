import AWSLambdaRuntime

// in this example we are receiving and responding with JSON structures

// the data structure to represent the input parameter
struct HelloRequest: Decodable {
  let name: String?
  let age: Int?
}

// the data structure to represent the output response
struct HelloResponse: Encodable {
  let greetings: String
}

// the Lambda runtime
let runtime = LambdaRuntime {
  (event: HelloRequest, context: LambdaContext) in

  let name = event.name ?? "unknown"
  let ageMessage = event.age == nil ? "unknown" : (event.age! > 30 ? "younger" : "older")
  let message = "Hello \(name). You look \(ageMessage) than your age."

  return HelloResponse(
    greetings: message
  )
}

// start the loop
try await runtime.run()
