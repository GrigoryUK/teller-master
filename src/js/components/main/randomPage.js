import $ from 'jquery'
import { gsap } from 'gsap'
import { isDesktop, isMobile, isTablet } from '../../functions/check-viewport'

export default function randomPage() {
  const container = document.querySelector('.randomPage__container');

  if (container) {
    const containerOne = $( ".container-one" );
    const containerTwo = $( ".container-two" );
    const ButtonOne = $( ".randomPage__start-button" );
    const ButtonTwo = $( ".randomPage__images-button" );
    const ButtonTest = $( ".test-button" );
    const containerImages = $( ".randomPage__images-container" );

    const colorHover = '#fa5245';

    ButtonOne.on( "click", function() {
        containerOne.fadeOut( "slow", function() {
          containerTwo.fadeIn( "slow", function() {
            AnimFrame()
          });
        });
    });

    ButtonTwo.on( "click", function() {
      containerOne.fadeOut( "slow", function() {
        containerTwo.fadeIn( "slow", function() {
          AnimFrameImages()
        });
      });
    });





    function AnimFrame() {
      const tl = gsap.timeline({ defaults: { duration: 0.7 } });
      tl.to(containerImages,{opacity: 1, y: 0})

      tl.progress(0)

      return tl
    }

    async function AnimFrameImages() {
      const tl = gsap.timeline({ defaults: { duration: 0.7 } });
      if (isDesktop()) {
        tl.to(containerImages,{opacity: 0, y: '20%'})
      }
      if (isTablet() || isMobile()) {
        tl.to(containerImages,{opacity: 0, y: '-10%'})
      }
      // убрать вот эту функцию и написать свою
      tl.add(setRandomImage())
      if (isDesktop()) {
        tl.to(containerImages,{opacity: 1, y: '0'})
      }
      if (isTablet() || isMobile()) {
        tl.to(containerImages,{opacity: 1, y: '0'})
      }
      tl.progress(0)

      return tl
    }

    async function setRandomImage() {
      const data = await logJSONDataOne()
      const dataTwo = await logJSONDataTwo()
      const imageLeft = $('.randomPage__image-left')
      const imageRight = $('.randomPage__image-right')
      setTimeout(() => {
        imageLeft.find('.randomPage__image-title').text(data.title)
        imageRight.find('.randomPage__image-title').text(dataTwo.title)
        imageLeft.find('img').attr("src", `${data.url}`);
        imageRight.find('img').attr("src", `${dataTwo.url}`);
      }, 500)
    }





    async function logJSONDataTwo() {
      let randomNumber = getRandomInt(1, 40);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomNumber}`);

      return await response.json()
    }

    async function logJSONDataOne() {
      let randomNumber = getRandomInt(1, 40);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${randomNumber}`);

      return await response.json()
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }




  }


}
