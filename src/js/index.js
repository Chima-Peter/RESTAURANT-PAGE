import  "../css/style.css";
import { Home } from './home';
import { clear } from './clear';
import { Service } from './services'

const body = document.querySelector('body')
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

Home.welcome();
button1.id = 'active';

button1.addEventListener('click', () => {
    button1.id = 'active';
    button2.id = '';
    button3.id = '';
    body.style.backgroundColor = 'white';
    clear();
    Home.welcome();
});
button2.addEventListener('click', () => {
    button2.id = 'active';
    button1.id = '';
    button3.id = '';
    body.style.backgroundColor = 'whitesmoke';
    clear();
    Service.first();
});
button3.addEventListener('click', () => {
    button3.id = 'active';
    button2.id = '';
    button1.id = '';
    body.style.backgroundColor = 'white';
    clear();
    Home.welcome();
});