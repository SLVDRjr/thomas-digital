const bars = document.querySelector('.navbars')
const mobileNav = document.querySelector('.mobile__nav--links')
const mobileLinks = document.querySelectorAll('.mobile__nav--link')
const overlay = document.querySelector('.header__overlay')

const removeActive = () => {
  if(overlay.classList.contains('active')){
    overlay.classList.remove('active')
  }
}

const removeScroll = () => {
  if(document.body.classList.contains('no-scroll')){
    document.body.classList.remove('no-scroll')
  }
}

// mobile nav
bars.addEventListener('click', () => {
  overlay.classList.toggle('active')
  document.body.classList.toggle('no-scroll')
  const visibility = mobileNav.getAttribute('data-visible')

  if(visibility === 'false'){
    mobileNav.setAttribute('data-visible', true)
    bars.setAttribute('aria-expanded', true)
  }else{
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
  }
})

window.addEventListener('resize', () => {
  removeScroll()
  if(window.innerWidth > 768){
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
    removeActive()
  }
})

// close mobile nav when mobile link is clicked
mobileLinks.forEach(mobileLink => {
  mobileLink.addEventListener('click', () => {
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
    removeScroll()
    removeActive()
  })
})

// close mobile nav when clicked outside
window.addEventListener('click', e => {
  if(e.target === overlay){
    removeScroll()
    if(window.innerWidth < 768){
      mobileNav.setAttribute('data-visible', false)
      bars.setAttribute('aria-expanded', false)
      removeActive()
    }
  }
})

const pageHeader = document.querySelector('.page__header')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scroll-watcher', '')
pageHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver(entries => {
  pageHeader.classList.toggle('sticking', !entries[0].isIntersecting)
})

navObserver.observe(scrollWatcher)

// Hero Slider
$('.slider').slick({
  dots: false,
  arrows: true,
  prevArrow:'<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:'<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ],
});

// Testimonials Slider
$('.testimonials__slider').slick({
  dots: false,
  arrows: true,
  prevArrow:'<button class="slick-prev testimonial-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:'<button class="slick-next testimonial-next"><i class="fa-solid fa-chevron-right"></i></button>',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ],
});

// Blog Slider
$('.blog__slider').slick({
  dots: false,
  arrows: true,
  prevArrow:'<button class="slick-prev blog-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:'<button class="slick-next blog-next"><i class="fa-solid fa-chevron-right"></i></button>',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
});

// Core Values Slider
$('.core__values--slider').slick({
  dots: false,
  arrows: true,
  prevArrow:'<button class="slick-prev core-values-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:'<button class="slick-next core-values-next"><i class="fa-solid fa-chevron-right"></i></button>',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ],
});

const accordionTriggers = document.querySelectorAll('.accordion__trigger')
const accordionItem = document.querySelector('.jobs__list--item')

accordionTriggers.forEach(accordionTrigger => {
  accordionTrigger.addEventListener('click', () => {
    accordionTrigger.classList.toggle('triggered')

    let panel = accordionTrigger.nextElementSibling
    panel.classList.contains('expanded') ? panel.classList.remove('expanded') : panel.classList.add('expanded')
  })
})


