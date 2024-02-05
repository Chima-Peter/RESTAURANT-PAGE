import '../css/style.css';
import image from '../images/image4.jpg';

export const Contact = (function() {
    const content = document.querySelector('#content');

    const first = () => {
        const contactDiv = document.createElement('div');
        const wrapper = document.createElement('div');
        const name = document.createElement('h2');
        const paragraph = document.createElement('p');
        const button = document.createElement('button');
        const contactImgDiv = document.createElement('div');
        const contactImg = new Image();


        name.textContent = 'Contact Us';
        paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
        button.textContent = 'EMAIL US';
        wrapper.appendChild(name);
        wrapper.appendChild(paragraph);
        wrapper.appendChild(button);
        wrapper.classList.add('contactWrapper');
        contactDiv.appendChild(wrapper);


        contactImg.src = image;
        contactImg.classList.add('contactImg');
        contactImgDiv.classList.add('contactImgDiv');
        contactImgDiv.appendChild(contactImg);

        contactDiv.classList.add('contactDiv');
        contactDiv.classList.add('present');
        contactDiv.appendChild(contactImgDiv);
        content.appendChild(contactDiv);
    }
    return { first };
})();