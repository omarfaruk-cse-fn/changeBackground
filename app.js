const changeColour = document.getElementById('btnColor')

function getRandomColour(n) {
  return Math.floor(Math.random() * n)
}

changeColour.addEventListener('click', function () {
  const redColour = getRandomColour(255)
  const greenColour = getRandomColour(255)
  const blueColour = getRandomColour(255)
  document.body.style.backgroundColor = `rgb(${redColour},${greenColour},${blueColour})`

})