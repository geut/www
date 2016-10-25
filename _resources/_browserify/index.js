import { default as drawLogo } from './components/logo';
import { default as drawTitle } from './components/title';
import { fadeNav, startScroll } from './components/nav';
import contactForm from './components/contact-form';

drawLogo()
    .then(drawTitle)
    .then(fadeNav);

startScroll();

contactForm();
