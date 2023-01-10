const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log('scroll');
  if (window.scrollY > 500) {
    //hide badge
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    }); 

    //스크롤 버튼 보이기 
    gsap.to(toTopEl, .2, {
      x:0
    })
   
  } else {
    // show badge
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display: 'block'

    })
    //스크롤 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    })
  }
}, 300));
// _.throttle(함수, 시간)

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});



//순차적으로 visual 보여지게 해주기 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,
    opacity: 1
  });

});
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데로 보이기 
  loop : true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination : {
    el: '.promotion .swiper-pagination',//페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  } 
});
new Swiper('.awards .swiper-container', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  }else {
    promotionEl.classList.remove('hide');
  }
});

//random variable
function random(min, max) {
  return parseFloat((Math.random()* (min - max) + min).toFixed(2))
};

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), // 애니메이션 시간
    { // option
      y: size,
      repeat : -1,
      yoyo : true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});

/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear();
