module.exports.handler = async () => {
  const successProbability = input.successProbability || 0.5

  if (Math.random() < successProbability) {
    return {
      isSuccess: true
    }
  } else {
    return {
      isSuccess: false
    }
  }
}