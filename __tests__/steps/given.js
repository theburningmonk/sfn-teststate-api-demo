const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn")
const client = new SFNClient()

const a_state_machine = async (stateMachineArn) => {
  const command = new DescribeStateMachineCommand({ 
    stateMachineArn
  })
  const resp = await client.send(command)
  
  return {
    definition: JSON.parse(resp.definition),
    roleArn: resp.roleArn
  }
}

module.exports = {
  a_state_machine
}
