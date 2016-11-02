import velocity from 'velocity-animate';

export default function draw() {
    const element = document.querySelector('#title');

    return velocity(element, {
        opacity: 1
    }, {
        easing: 'easeInOutQuad',
        duration: 500,
        sequenceQueue: false
    });
}
