import anime from 'animejs/lib/anime.es.js';
import Typewriter from 'typewriter-effect/dist/core';
import {Howl} from 'howler';

const seq2 = {
    namespace: 'seq2',
    afterEnter() {
      
    },
    beforeEnter() {

        const catscream = new Howl({
            src: ['./resources/cat_scream.mp3'],
            html5: true,
            volume: 0.6,
          });
          
        catscream.play();
        
        /* Animacion Texto Titulo */
        var title = document.getElementById('title');
        var titleWriter = new Typewriter(title, {
            delay: 50
        });

        titleWriter.typeString('El gato te muerde y huye.')
            .start();

        /* Animacion Texto Parrafo */
        anime.timeline()
            .add({
                targets: 'p',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: 3000,
            });

        /* Animacion Botones */
        anime.timeline()
            .add({
                targets: '.buttons',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: 6000,
            });

        /* Animacion Imagena */
        anime.timeline().add({
            targets: '.cover',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: 4000,

        })
    }
}

export default seq2;