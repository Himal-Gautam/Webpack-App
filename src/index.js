import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementsById('laughImg')
laughImg.src = laughing

console.log(generateJoke())