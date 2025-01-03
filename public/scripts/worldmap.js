// On document ready (vanilla JS)
document.addEventListener("DOMContentLoaded", function () {
  var anchors = document.querySelectorAll("a[title]");
  for (let i = anchors.length - 1; i >= 0; i--) {
    anchors[i].addEventListener("mouseenter", function (e) {
      anchors[i].setAttribute("data-title", anchors[i].title);
      anchors[i].removeAttribute("title");
    });
    anchors[i].addEventListener("mouseleave", function (e) {
      anchors[i].title = anchors[i].getAttribute("data-title");
      anchors[i].removeAttribute("data-title");
    });
  }
});
