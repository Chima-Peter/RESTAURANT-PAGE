import  "../css/style.css";
import { Home } from './home';

const button = document.querySelector("button");

button.addEventListener('click', () => {
    Home.run();
});