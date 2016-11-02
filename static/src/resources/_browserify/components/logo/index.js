import animate from './animate';

export default function draw() {
    const element = document.querySelector('#logo');
    return animate
        .draw(element)
        .then(animate.fill);
};
