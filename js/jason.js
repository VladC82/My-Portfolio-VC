function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    document.getElementById("top-nav-bar").style.background = "#000000";
  else {
    document.getElementById("top-nav-bar").style.background = "none";
  }
}
