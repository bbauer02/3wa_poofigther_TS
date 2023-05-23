import './style.css'
import typescriptLogo from './typescript.svg'

import { Game } from '../src/class/Game';


const game = new Game();



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" alt="TypeScript Logo" />
    <h1>POO FIGHTERS</h1>
  </div>
`
