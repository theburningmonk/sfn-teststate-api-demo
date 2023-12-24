const { SFNClient, TestStateCommand } = require("@aws-sdk/client-sfn")
const client = new SFNClient()

const we_invoke_a_state = async (state, input, roleArn) => {
  const command = new TestStateCommand({ 
    definition: JSON.stringify(state),
    input: JSON.stringify(input),
    roleArn
  })

  const response = await client.send(command)
  return response
}

module.exports = {
  we_invoke_a_state
}