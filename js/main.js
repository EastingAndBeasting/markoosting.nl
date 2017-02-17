window.onload = function () {
  var loadbtn = document.getElementById("loadbtn");
  var loadstate = false;

  setTimeout(function() {
    hideLoadingScreen();
  }, 1500);
}

function animationHandler() {
  // Get the loadingscreen wrapper + revealer effect and main content
  var loadingscreen = document.getElementById("loadingscreen");
  var revealer = document.getElementById("revealer");

  // Get the window size and calculate the diagonal
  var widthVal, heightVal, pageDiagonal;
  var winsize = { width : window.innerWidth, height : window.innerHeight };
  var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
  widthVal = heightVal = pageDiagonal + 'px';

  // Set revealer width/height and transform
  transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0,' + pageDiagonal + 'px,0)';
  revealer.style.width = widthVal;
  revealer.style.height = heightVal;
  revealer.style.transform = transform;
}

function showLoadingScreen() {
  loadingscreen.classList.remove("loading-done");
  loadingscreen.classList.add("loading");
  main.classList.remove("loading-done");
}

function hideLoadingScreen() {
  animationHandler();
  loadingscreen.classList.remove("loading");
  loadingscreen.classList.add("loading-done");
  main.classList.add("loading-done");
}
