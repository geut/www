import velocity from 'velocity-animate';
import { default as drawLogo } from './components/logo';
import { default as drawTitle } from './components/title';

drawLogo(document.querySelector('#logo'))
    .then(() => drawTitle(document.querySelector('#title')))
    .then(() => velocity(document.querySelector('.hero nav'), 'fadeIn'));
