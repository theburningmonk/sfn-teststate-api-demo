require('../steps/init')
const given = require('../steps/given')
const when = require('../steps/when')

describe('When the input is "1"', () => {
  it('"Task 1" should be the next state', async () => {
    const { definition, roleArn } = await given.a_state_machine(process.env.MyStateMachineArn)
    const choice = definition.States['Choice 1']
    const resp = await when.we_invoke_a_state(choice, { choice: "1" }, roleArn)
    expect(resp.nextState).toEqual('Task 1')
  })
})

describe('When the input is "2"', () => {
  it('"Task 2" should be the next state', async () => {
    const { definition, roleArn } = await given.a_state_machine(process.env.MyStateMachineArn)
    const choice = definition.States['Choice 1']
    const resp = await when.we_invoke_a_state(choice, { choice: "2" }, roleArn)
    expect(resp.nextState).toEqual('Task 2')
  })
})
