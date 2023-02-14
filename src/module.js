function sleep(time=1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function start() {
  console.log('First')
  await sleep(2000)
  console.log('Second')
}

start()
