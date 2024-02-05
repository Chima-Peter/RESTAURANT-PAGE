import image from '../images/glass-cocktail.svg';
export const Service = (function () {
    const content = document.querySelector('#content');

    const tab = () => {
        const mainDiv1 = document.createElement('div');
        const mainDiv2 = document.createElement('div');
        const mainDiv = document.createElement('div');
        for (let i = 0; i < 3; i++) {
            const tabDiv = document.createElement('div');
            const header = document.createElement('h3');
            const paragraph = document.createElement('p');
            const myImageDiv = document.createElement('div');
            const myImage = new Image();
            myImage.src = image;
            myImage.classList.add('tabImage');
            myImageDiv.appendChild(myImage);
            myImageDiv.classList.add('tabImageDIv');
            header.textContent = 'EVENT NAME';
            paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
            tabDiv.appendChild(myImageDiv);
            tabDiv.appendChild(header);
            tabDiv.appendChild(paragraph);
            tabDiv.classList.add('tabDiv');
            mainDiv1.appendChild(tabDiv);
        };
        for (let i = 0; i < 3; i++) {
            const tabDiv = document.createElement('div');
            const header = document.createElement('h3');
            const paragraph = document.createElement('p');
            const myImageDiv = document.createElement('div');
            const myImage = new Image();
            myImage.src = image;
            myImage.classList.add('tabImage');
            myImageDiv.appendChild(myImage);
            myImageDiv.classList.add('tabImageDIv');
            header.textContent = 'EVENT NAME';
            paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
            tabDiv.appendChild(myImageDiv);
            tabDiv.appendChild(header);
            tabDiv.appendChild(paragraph);
            tabDiv.classList.add('tabDiv');
            mainDiv2.appendChild(tabDiv);
        };
        mainDiv1.classList.add('mainDiv1');
        mainDiv2.classList.add('mainDiv1');
        mainDiv.classList.add('mainDiv');
        mainDiv.appendChild(mainDiv1);
        mainDiv.appendChild(mainDiv2);
        content.appendChild(mainDiv); 
        first();
    }
    
    const first = () => {
        const firstDiv = document.createElement('div');
        const paraDiv = document.createElement('div');
        const firstHeader = document.createElement('h4');
        const firstParagraph = document.createElement('p');
        const secondParagraph = document.createElement('p');
        const firstButton = document.createElement('button');

        firstHeader.textContent = 'Only The Freshest Ingredients';
        firstParagraph.textContent = 'Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
        secondParagraph.textContent = 'Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. '
        firstButton.textContent = 'PLACE AN ORDER';

        firstDiv.appendChild(firstHeader);
        paraDiv.appendChild(firstParagraph);
        paraDiv.appendChild(secondParagraph);
        firstDiv.appendChild(paraDiv);
        firstDiv.appendChild(firstButton);

        firstDiv.classList.add('present');
        firstDiv.classList.add('firstServiceDiv');

        content.appendChild(firstDiv);
    }
    return { first };
})();