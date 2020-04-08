'use strict'

// logs execution times for both async and sync functions
async function execTime(fn, fnName, ...params) {
  const start = process.hrtime()
  const response = await fn(...params)
  const end = process.hrtime(start)
  console.log(
    `\n\n[${fnName || fn.name}][EXECUTION_TIME]:${(end[0] * 1000000000 +
      end[1]) /
      1000000} ms`
  )
  return response
}

module.exports.execTime = execTime
