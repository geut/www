import velocity from 'velocity-animate';

export default function draw() {
    const element = document.querySelector('#title');
    const characters = element.querySelectorAll('.word span');
    const studio = element.querySelector('.studio');

    const showGeut = {
        o: {
            easing: 'easeInOutQuad',
            duration: 500,
            sequenceQueue: false
        },
        p: {
            opacity: 1
        }
    };
    const showStudio = {
        o: {
            easing: 'easeInOutQuad',
            duration: 500,
            sequenceQueue: false
        },
        p: {
            opacity: 1
        }
    };
    const reduceGeut = {
        o: {
            duration: 500,
            sequenceQueue: false
        },
        p: {
            marginLeft: '0px',
            marginRight: '0px'
        }
    };

    const sequence = [
        { e: characters[0], ...showGeut },
        { e: characters[1], o: {delay: 100, ...showGeut.o}, p: showGeut.p },
        { e: characters[2], o: {delay: 200, ...showGeut.o}, p: showGeut.p },
        { e: characters[3], o: {delay: 300, ...showGeut.o}, p: showGeut.p },
        { e: studio, o: {delay: 300, ...showStudio.o}, p: showStudio.p },
        { e: characters[0], o: reduceGeut.o, p: reduceGeut.p },
        { e: characters[1], o: {delay: 30, ...reduceGeut.o}, p: reduceGeut.p },
        { e: characters[2], o: {delay: 60, ...reduceGeut.o}, p: reduceGeut.p },
        { e: characters[3], o: {delay: 90, ...reduceGeut.o}, p: reduceGeut.p },
    ];

    return Promise.all(
        sequence.map((anim) => velocity(anim.e, anim.p, anim.o))
    );
}
