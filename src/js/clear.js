export function clear() {
    const divs = document.querySelectorAll('.present');
    divs.forEach((div) => {
        div.remove();
    })
};