import '../css/style.css';
import image from '../images/image8.jpg'

export const Home = (function() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const imageDiv = document.createElement('div');
    const wrapper = document.createElement('div');
    const nameDiv = document.createElement('div');
    const name = document.createElement('h2');
    const smallName = document.createElement('h4');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const myImg = new Image();
    myImg.src = image;
    imageDiv.appendChild(myImg);
    myImg.classList.add('homeImageDiv');
    name.textContent = 'Rice';
    smallName.textContent = 'BOWL';
    nameDiv.appendChild(name);
    nameDiv.appendChild(smallName);
    paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
    button.textContent = 'VIEW OUR MENU';
    wrapper.appendChild(nameDiv);
    wrapper.appendChild(paragraph);
    wrapper.appendChild(button);
    wrapper.classList.add('homeWrapper')
    container.appendChild(wrapper);
    container.appendChild(imageDiv)

    const run = () => {
        container.classList.add('homeContainer')
        content.appendChild(container);
    }
    return { run }
})();