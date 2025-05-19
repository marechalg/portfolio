import { adLog } from './functions';
import { ACCENT_COLOR } from './const';

const burger = document.getElementById('burger');

// Reset burger on load
document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.setItem('isDeployed', false);
})

burger.onclick = () => {
    sessionStorage.setItem('isDeployed', !sessionStorage.getItem('isDeployed'))

    if (sessionStorage.getItem('isDeployed')) {
        // Remove superfluous div
        for (let i = 0; i < 3; i++) {
            burger.children[i].style.setProperty('display', 'none');
        }

        // Treat final divs to create an accent color cross
        for (let i = 2; i < 5; i++) {
            const child = burger.children[i];
            child.style.setProperty('background-color', ACCENT_COLOR);
            child.style.setProperty('width', '2em');
            child.style.setProperty('position', 'absolute');
            child.style.setProperty('align-self', 'center');
            child.style.setProperty('margin-top', '1em')
        }

        // Transform first div
        burger.children[3].style.setProperty('transform', 'rotate(45deg)');

        // Transform last div
        burger.children[4].style.setProperty('transform', 'rotate(-45deg)');
    } else {
        location.reload();
    }
}

adLog('log', 'test');