$(document).ready(function(){
    $('.slider__wrapper').slick({
        prevArrow:"<i class='fas fa-angle-right slick-prev'></i>",
        nextArrow:"<i class='fas fa-angle-left slick-next'></i>",
        loop:true,
        nav:true
    });

    $('.client__slider').slick({
        slidesToShow: 4,
        prevArrow:"<i class='fas fa-angle-right slick-next'></i>",
        nextArrow:"<i class='fas fa-angle-left slick-prev'></i>",
  });


  $('.testimonial__slider').slick({
    slidesToShow: 2,
    prevArrow:"<i class='fas fa-angle-right slick-next'></i>",
    nextArrow:"<i class='fas fa-angle-left slick-prev'></i>",
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

