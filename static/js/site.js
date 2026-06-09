(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  var key = "wzj-theme";
  var saved = localStorage.getItem(key);

  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }

  if (button) {
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(key, next);
    });
  }
})();
