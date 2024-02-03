import  "../css/style.css";
import { Home } from './home';
import { clear } from './clear';
import { Service } from './services'

const buttons = document.querySelectorAll("button");

Home.welcome();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clear();
        if (button.textContent === 'HOME') {
            Home.welcome();
        } else if (button.textContent === 'SERVICES') {
            Service.first();
        }
    })
});