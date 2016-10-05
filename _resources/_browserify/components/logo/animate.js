import velocity from 'velocity-animate';

function drawPath(element) {

    element.setAttribute('stroke-dasharray', element.getTotalLength());
    element.setAttribute('stroke-dashoffset', element.getTotalLength());

    if ( !element.dataset ) {
        // weird FF,old browsers fix
        element.dataset = {};
        element.dataset.start = element.attributes.getNamedItem( 'data-start' ).value;
        element.dataset.duration = element.attributes.getNamedItem( 'data-duration' ).value;
    }

    return velocity(element, {
        strokeDashoffset: 0
    }, {
        easing: 'easeInOutQuad',
        delay: parseInt(element.dataset.start),
        duration: parseInt(element.dataset.duration)
    });
}

function fillPath(element) {
    return velocity(element, {
        fillOpacity: 1,
        fill: element.getAttribute('fill'),
        stroke: element.getAttribute('fill')
    });
}

const animate = {
    fill(paths) {
        const fills = [];
        for (let path of paths) {
            fills.push(fillPath(path));
        }

        return Promise.all(fills).then(() => paths);
    },

    draw(logo) {
        const paths = logo.getElementsByTagName('path');
        const draws = [];
        for (let path of paths) {
            draws.push(drawPath(path));
        }

        return Promise.all(draws).then(() => paths);
    }
};

export default animate;
