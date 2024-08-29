window.addEventListener(
  "scroll",
  function (e) {
    const navbar = document.getElementById("navbar");
    console.log(window.scrollY);

    if (window.scrollY >= 50) {
      // 当滚动超过50像素时
      navbar.style.position = "fixed"; // 变为固定位置
      document.querySelector("#navbar > div > nav > div").style.backgroundColor = "rgba(255, 255, 255, 1)"; // 设置不透明度
      document.querySelector("#navbar > div > nav > div").style.padding = "15px 25px 15px 25px";
      document.querySelector("#navbar > div > nav > div").style.margin = "-15px 0 0 0";
      document.querySelector("#navbar > div > nav > div").style.boxShadow = "0 0 20px 11px rgba(56, 66, 77, 0.1)";
    } else {
      navbar.style.position = "unset";
      document.querySelector("#navbar > div > nav > div").style.backgroundColor = "rgba(0, 0, 0, 0)";
      document.querySelector("#navbar > div > nav > div").style.padding = "unset";
      document.querySelector("#navbar > div > nav > div").style.margin = "unset";
      document.querySelector("#navbar > div > nav > div").style.boxShadow = "unset";
    }
  },
  { passive: true }
);

var menu = 0;
function ToggleMobileMenu() {
  if (menu % 2 == 0) {
    document.querySelector("body > header > div.nav-area > div > div").style.top = "-40px";
  } else {
    document.querySelector("body > header > div.nav-area > div > div").style.top = "-350px";
  }
  menu++;
}
