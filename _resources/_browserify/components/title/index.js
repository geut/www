import velocity from 'velocity-animate';

export default function draw() {
    const element = document.querySelector('#title');
    const geut = element.querySelector('.geut .word');
    const studio = element.querySelector('.studio');

    const show = {
        o: {
            easing: 'easeInOutQuad',
            duration: 500,
            sequenceQueue: false
        },
        p: {
            opacity: 1
        }
    };

    const sequence = [
        { e: geut, o: {delay: 300, ...show.o}, p: show.p },
        { e: studio, o: {delay: 300, ...show.o}, p: show.p }
    ];

    return Promise.all(
        sequence.map((anim) => velocity(anim.e, anim.p, anim.o))
    );
}
