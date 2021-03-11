// Este es el punto de entrada de tu aplicacion

import { routes, rootDiv, onNavigate } from "./routes.js";

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

window.onNavigate = onNavigate;
