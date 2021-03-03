// Este es el punto de entrada de tu aplicacion

<<<<<<< HEAD
import { routes, rootDiv, onNavigate } from "./routes.js";
=======
myFunction();
*/
import { routes, rootDiv, onNavigate } from './routes.js';
>>>>>>> 82c30adc3baaa9d515ffcc70287796eddd6e5b46

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;

<<<<<<< HEAD
const home = document.getElementById("home");
const me = document.getElementById("me");
const loginButton = document.getElementById("login");
const register = document.getElementById("register");

home.addEventListener("click", () => {
  onNavigate("/home");
  return false;
});

me.addEventListener("click", () => {
  onNavigate("/me");
  return false;
});

loginButton.addEventListener("click", () => {
  onNavigate("/");
  return false;
});

register.addEventListener("click", () => {
  onNavigate("/register");
=======
const home = document.getElementById('home');
const me = document.getElementById('me');
const loginButton = document.getElementById('login');
const register = document.getElementById('register');

home.addEventListener('click', () => {
  onNavigate('/home');
  return false;
});

me.addEventListener('click', () => {
  onNavigate('/me');
  return false;
});

loginButton.addEventListener('click', () => {
  onNavigate('/');
  return false;
});

register.addEventListener('click', () => {
  onNavigate('/register');
>>>>>>> 82c30adc3baaa9d515ffcc70287796eddd6e5b46
  return false;
});
