const pomodoroTimer = document.querySelector('#pomodoro-timer')

const startButton = document.querySelector('#pomodoro-start')
const pauseButton = document.querySelector('#pomodoro-pause')
const stopButton = document.querySelector('#pomodoro-stop')

startButton.addEventListener('click', () => {
  toggleClock()
})

pauseButton.addEventListener('click', () => {
  toggleClock()
})

stopButton.addEventListener('click', () => {
  toggleClock(true)
})