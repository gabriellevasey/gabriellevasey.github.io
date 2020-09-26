"use strict";
const abouttag = document.querySelector('header');
const researchtag = document.querySelector('research');
const teachingtag = document.querySelector('teaching');
const myroot = document.querySelector('#nav li.currentabout a t');
const mycurrentresearch = document.querySelector('nav li.currentresearch a ');
const mycurrentteaching = document.querySelector('nav li.currentteaching a ');

let scrolled = () => {
  let dec = scrollY / (abouttag.scrollHeight - innerHeight );
  return Math.floor(500)
}

addEventListener('scroll', () => {
  myroot.style.setProperty('background', scrolled() > 50 ? "var(--color1)" : "var(--color2)");
})
