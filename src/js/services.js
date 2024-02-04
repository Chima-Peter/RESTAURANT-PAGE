export const Service = (function () {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'whitesmoke';
    const content = document.querySelector('#content');
    
    const first = () => {
        const firstDiv = document.createElement('div');
        const firstHeader = document.createElement('h4');
        const firstParagraph = document.createElement('p');
        const firstButton = document.createElement('button');

        firstHeader.textContent = 'Only The Freshest Ingredients';
        firstParagraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quod quas nam aliquam aperiam illo modi totam porro tempora. Laborum aperiam itaque commodi minima expedita recusandae saepe, illum magni qui.'
        firstButton.textContent = 'PLACE AN ORDER';

        firstDiv.appendChild(firstHeader);
        firstDiv.appendChild(firstParagraph);
        firstDiv.appendChild(firstButton);

        firstDiv.classList.add('present');
        firstDiv.classList.add('firstServiceDiv');

        content.appendChild(firstDiv);
    }
    return { first };
})();