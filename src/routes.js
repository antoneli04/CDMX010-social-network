let routes = {};

let firebaseClient = null;
export const loadRoutesAndFirebase = (routesFromMain, firebaseFromMain) => {
  routes = routesFromMain;
  firebaseClient = firebaseFromMain;
};

export const rootDiv = document.getElementById("root");
// rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  const conponent = routes[pathname];
  conponent(rootDiv, firebaseClient);
};
