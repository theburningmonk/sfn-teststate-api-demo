module.exports.handler = async (input) => {
  const errorProbability = input.ErrorProbability || 0.5

  if (Math.random() < errorProbability) {
    throw new Error('oops')
  }
}