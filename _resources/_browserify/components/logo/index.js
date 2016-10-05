import animate from './animate';

export default function draw(element) {
    return animate
        .draw(element)
        .then(animate.fill);
};
