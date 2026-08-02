import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from './assets/logo.svg'
import headerBackground from './assets/header_background.jpg'
import headerCover from './assets/header_bg_cover.png'
import aboutImage from './assets/about.jpg'
import antwerpSixImage from './assets/antwerp_six.jpg'
import carousel1 from './assets/carousel1.jpg'
import carousel2 from './assets/carousel2.jpg'
import carousel3 from './assets/carousel3.jpg'
import carousel4 from './assets/carousel4.jpg'
import carousel5 from './assets/carousel5.jpg'

gsap.registerPlugin(ScrollTrigger)

document.querySelector('#app').innerHTML = `
<div class="site-header">
  <nav class="nav-bar">
    <img src="${logo}" class="logo" alt="MoMu logo">
    <button class="hamburger" type="button" aria-label="Open menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <section class="hero">
    <img class="hero-bg" src="${headerBackground}" alt="">
    <h1 class="hero-title">Marina<br>Yee</h1>
    <img class="hero-cover" src="${headerCover}" alt="">
  </section>
</div>

<section class="quote-section">
  <p class="quote">Seeing value where others saw waste.</p>
</section>

<section class="about">
  <img class="about-img" src="${aboutImage}" alt="">
  <h2 class="about-title">About Marina</h2>
  <p class="about-text">Fashion often celebrates the new. Every season brings new collections, trends and silhouettes, encouraging us to replace what came before. Marina Yee chose a different path. Instead of starting with new fabrics, she worked with garments that had already been worn and forgotten.</p>
  <p class="about-text">She believed clothing carries history through its materials, construction and signs of wear. Rather than hiding those traces, she made them part of the design. Long before upcycling and slow fashion became familiar terms, Marina Yee showed that creativity doesn't have to begin with something new.</p>
</section>

<section class="carousel">
  <div class="carousel-track">
    <img class="carousel-item" src="${carousel1}" alt="">
    <img class="carousel-item" src="${carousel2}" alt="">
    <img class="carousel-item" src="${carousel3}" alt="">
    <img class="carousel-item" src="${carousel4}" alt="">
    <img class="carousel-item" src="${carousel5}" alt="">
  </div>
</section>

<section class="about">
  <h2 class="about-title">The Antwerp Six</h2>
  <p class="about-text">Although they emerged as one generation, each member of the Antwerp Six developed a distinct creative vision. While others explored bold colours, tailoring or theatrical silhouettes, Marina Yee followed her own path. Her work centred on reconstruction, craftsmanship and giving existing garments a second life.</p>
  <img class="about-banner" src="${antwerpSixImage}" alt="">
</section>
`

const track = document.querySelector('.carousel-track')
const getScrollAmount = () => track.scrollWidth - window.innerWidth

gsap.to(track, {
  x: () => -getScrollAmount(),
  ease: 'none',
  scrollTrigger: {
    trigger: '.carousel',
    start: 'top top',
    end: () => '+=' + getScrollAmount(),
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
})
