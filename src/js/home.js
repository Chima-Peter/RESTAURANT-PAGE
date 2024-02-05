import '../css/style.css';
import image from '../images/image3.jpg';
import cake from '../images/image5.jpg';

export const Home = (function() {
    const content = document.querySelector('#content');

    const welcome = () => {
        const container = document.createElement('div');
        const imageDiv = document.createElement('div');
        const wrapper = document.createElement('div');
        const nameDiv = document.createElement('div');
        const name = document.createElement('h2');
        const secondName = document.createElement('h2');
        const paragraph = document.createElement('p');
        const button = document.createElement('button');
        const myImg = new Image();

        name.textContent = 'Fresh Flavours';
        secondName.textContent = 'Creative Catering';
        nameDiv.appendChild(name);
        nameDiv.appendChild(secondName);
        paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
        button.textContent = 'VIEW OUR MENU';
        wrapper.appendChild(nameDiv);
        wrapper.appendChild(paragraph);
        wrapper.appendChild(button);
        wrapper.classList.add('homeWrapper');
        container.appendChild(wrapper);

        myImg.src = image;
        imageDiv.appendChild(myImg);
        myImg.classList.add('homeImage');
        imageDiv.classList.add('homeImageDiv');
        container.appendChild(imageDiv);


        container.classList.add('homeContainer');
        container.classList.add('present')
        content.appendChild(container);
        about();
    }

    const about = () => {
        const aboutWrapper = document.createElement('div');
        const aboutImg = document.createElement('div');
        const aboutContainer = document.createElement('div');
        const name = document.createElement('h4');
        const text1 = document.createElement('p');
        const text2 = document.createElement('p');
        const button = document.createElement('button');

        const myImg = new Image();
        myImg.src = cake;
        aboutImg.appendChild(myImg);
        myImg.classList.add('aboutImg');
        aboutImg.classList.add('aboutImgDiv')

        name.textContent = 'About Us';
        text1.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam "
        text2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
        button.textContent = 'READ MORE'; 
        
        aboutContainer.appendChild(name);
        aboutContainer.appendChild(text1);
        aboutContainer.appendChild(text2);
        aboutContainer.appendChild(button);
        aboutContainer.classList.add('aboutContainer')

        aboutWrapper.appendChild(aboutImg);
        aboutWrapper.classList.add('aboutWrapper');
        aboutWrapper.classList.add('present');
        aboutWrapper.appendChild(aboutContainer);

        content.appendChild(aboutWrapper)
    }
    return { welcome }
})();