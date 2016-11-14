window.onload = function () {
  setTimeout(function() {
    loadPage();
  }, 1000);
}

function loadPage() {
  // Get the pageload wrapper + revealer effect and main content
  var pageload = document.getElementById("pageload");
  var revealer = document.getElementById("revealer");
  var main = document.getElementById("main");

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

  // Trigger animations by adding class names
  pageload.className += "loading-done";
  main.className += "loading-main";
}
