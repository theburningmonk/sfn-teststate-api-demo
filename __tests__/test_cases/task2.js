require('../steps/init')
const given = require('../steps/given')
const when = require('../steps/when')

describe('When the task errors', () => {
  it('"Task 3" should be the next state', async () => {
    const { definition, roleArn } = await given.a_state_machine(process.env.MyStateMachineArn)
    const choice = definition.States['Task 2']
    const resp = await when.we_invoke_a_state(choice, { ErrorProbability: 1 }, roleArn)
    expect(resp.status).toEqual('CAUGHT_ERROR')
    expect(resp.nextState).toEqual('Task 3')
  })
})

describe('When the task succeeds', () => {
  it('The execution should end', async () => {
    const { definition, roleArn } = await given.a_state_machine(process.env.MyStateMachineArn)
    const choice = definition.States['Task 2']
    const resp = await when.we_invoke_a_state(choice, { ErrorProbability: 0 }, roleArn)
    expect(resp.nextState).toBeUndefined()    
    expect(resp.status).toEqual('SUCCEEDED')
  })
})
