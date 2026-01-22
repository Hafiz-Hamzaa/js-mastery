let btn = document.querySelector('button')
let body = document.querySelector('body')
let h2 = document.querySelector('h2')

btn.addEventListener('click', () => {
  let hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')

  body.style.backgroundColor = hexColor
  h2.textContent = hexColor

  // text contrast auto
  h2.style.color = getTextColor(hexColor)
})

function getTextColor(hex) {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  let brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 150 ? 'black' : 'white'
}
