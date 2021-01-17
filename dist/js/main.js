$(document).ready(function(){
    $('.slider__wrapper').slick({
        prevArrow:"<i class='fas fa-angle-right slick-prev'></i>",
        nextArrow:"<i class='fas fa-angle-left slick-next'></i>",
        loop:true,
        nav:true,
        responsive: [
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $('.client__slider').slick({
        slidesToShow: 4,
        prevArrow:"<i class='fas fa-angle-right slick-next'></i>",
        nextArrow:"<i class='fas fa-angle-left slick-prev'></i>",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
  });


  $('.testimonial__slider').slick({
    slidesToShow: 2,
    loop:true,
    prevArrow:"<i class='fas fa-angle-right slick-next'></i>",
    nextArrow:"<i class='fas fa-angle-left slick-prev'></i>",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow:1
        }
      }
    ]
});





  const questions = document.querySelectorAll('.faq__box__question');

  faqOpen();


  function faqOpen(){
    questions.forEach((question) => {
        question.addEventListener('click', ()=>{
            faqClose();
            question.classList.add('open');
            question.nextElementSibling.classList.add('active')
        })
    })
  }


 function faqClose(){
    questions.forEach((question) => {
        question.nextElementSibling.classList.remove('active');
        question.classList.remove('open');
    })
  }
});




// function delay(n) {
//   n = n || 1000;
//   return new Promise((done) => {
//       setTimeout(()=>{
//           done();
//       }, n)
//   });
// }

// function pageTransition() {
//   var tl = gsap.timeline();

//   tl.to(".loading-screen", {
//       duration: .5,
//       width: "100%",
//       left:"0%",
//       ease: 'Ease.easeInOut'
//   });

//   tl.to('.loading-screen', {
//       duration: 1,
//       width: "100%",
//       left:"100%",
//       ease: 'Ease.easeInOut',
//       delay: .4
//   });

//   tl.set('.loading-screen', {
//       left: "-100%"
//   })
// }

// // function contentAnimation(){
// //   var tl = gsap.timeline();
// //   tl.from('.banner_anime', {
// //       duration: 1,
// //       y: 30,
// //       opacity: 0,
// //       stagger: 0.4,
// //       delay:0.1

// //   });
// // }


//   barba.init({
//       sync:true,
//       transitions: [
//           {
//               async leave(data) {
//                   const done = this.async();
//                   pageTransition();
//                   await delay(1000)
//                   done();
//               },
  
//               async enter(data) {
//                  // contentAnimation();
//               },
  
//               async once(data) {
//                  // contentAnimation();
//               }
//           }
//       ]
//   })







//Menu 
const menu = document.querySelector('nav');
const menuBtn = document.querySelector('#menuBtn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuBtn.classList.toggle('open');

  if(menuBtn.classList.contains('open')) {
    menuBtn.innerHTML = "<span>EX<br>IT</span>"
  } else {
    menuBtn.innerHTML = "<span>ME<br>NU</span>"
  }
})

// GSAP!!

// gsap.to(".about__wrapperbox img", {
//   scrollTrigger: ".about", // start the animation when ".box" enters the viewport (once)
//   start: "top center", // when the top of the trigger hits the top of the viewport
//   end: "+=500", // end after scrolling 500px beyond the start
  
// // });
// gsap.from('.banner_anime', {opacity: 0, duration: .8, y: -100, stagger: 0.5})
// gsap.from('.banner__slider', {opacity: 0, duration: .8, x: 300})
// gsap.from('.anime_halftone', {opacity:0,  duration: 2,  stagger: 1, delay: 1 })
// gsap.from('.banner__socmed li', {opacity:0, y: -40, stagger:0.5, delay: 1.3})
// gsap.from('.btn__scroll',{opacity:0,  delay: 2.5})

// let aboutTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.about__wrapperbox',
//     start: 'top center'
//   }
// });

// aboutTl.from('.about__wrapperbox img', {opacity:0, y: 200})
// aboutTl.from('.anime_about', {opacity:0, x: -100, stagger:0.2,})


// let serviceTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.service',
//     start: 'top bottom'
//   }
// });

// serviceTl.from('.anime_services', {opacity:0, y: 200, stagger: 0.2} )
// serviceTl.from('.anime_services_box', {opacity:0, y: -200, stagger: 0.6} )


// let faqTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.faq',
//     start: 'top bottom'
//   }
// });


// faqTl.from('.anime_faq_box', {opacity:0, y: -200, stagger: 0.4} )
// faqTl.from('.anime_faq', {opacity:0, y: 100 } )


// let testimonialTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.testimonial__grid',
//     start: 'top center'
//   }
// });


// testimonialTl.from('.anime_testimonial_sidebar',  {opacity:0, x: -200} )
// testimonialTl.from('.anime_testimonial_slider',  {opacity:0, x: 200 , stagger: 0.2 } )


// let ctaTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.cta__content',
//     start: 'top center'
//   }
// });
// testimonialTl.from('.anime_cta',  {opacity:0, y: -200,  stagger: 0.2} )

