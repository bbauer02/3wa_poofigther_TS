import './style.css'
import typescriptLogo from './typescript.svg'
import { Warrior } from './class/Warrior';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" alt="TypeScript Logo" />
    <h1>POO FIGHTERS</h1>
  </div>
`
