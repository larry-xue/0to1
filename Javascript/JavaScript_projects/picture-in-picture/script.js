const startBtn = document.querySelector('#startBtn');

async function captureScreen() {
  try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia()
      console.log(captureStream)
  } catch (err) {
    console.error(err);
  }
  return captureScreen
}

startBtn.addEventListener('click', () => {
})

captureScreen()