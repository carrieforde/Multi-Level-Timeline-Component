import preload from '../data.json';
import Component from './component';
import './sass/main.scss';

const component = new Component(preload, '#app'); // eslint-disable-line no-unused-vars

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('ai-humanity-theme');
});
