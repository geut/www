import { default as drawLogo } from './components/logo';
import { default as drawTitle } from './components/title';
import { fadeNav, startScroll } from './components/nav';

drawLogo()
    .then(drawTitle)
    .then(fadeNav);

startScroll();
