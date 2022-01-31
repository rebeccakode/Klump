	<template>

  <div>
      <div class="hamburger-menu">
  <ion-icon name="menu-outline" id="hamburger-icon"></ion-icon>
</div>
<div class="sidebar" id="sidebars">
  <div class="close-icon" id="close" onclick="closeNav() ">
    <ion-icon name="close-outline"></ion-icon>
  </div>

  <ul class="links">
    <li class="link active">
      <a href="#">
        <ion-icon name="home-outline" class="icon"></ion-icon>Home
      </a>
    </li>
    <li class="link">
      <a href="#">
        <ion-icon name="analytics-outline" class="icon"></ion-icon>Dashboard
      </a>
    </li>
    <li class="link">
      <a href="#">
        <ion-icon name="eye-outline" class="icon"></ion-icon>Overview
      </a>
    </li>
    <li class="link">
      <a href="#">
        <ion-icon name="person-outline" class="icon"></ion-icon>About
      </a>
    </li>
    <li class="link">
      <a href="#">
        <ion-icon name="mail-outline" class="icon"></ion-icon>Contact
      </a>
    </li>
    <li class="link">
      <a href="#">
        <ion-icon name="key-outline" class="icon"></ion-icon>Account
      </a>
    </li>
    <li class="link">
      <a href="#">
        <ion-icon name="settings-outline" class="icon"></ion-icon>Setting
      </a>
    </li>
  </ul>
</div>
  </div>
</template>

<script>
 const hamburgerMenu = document.getElementById("hamburger-icon");
const link = document.querySelectorAll(".link");
const closeBtn = document.getElementById("close");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Menu
hamburgerMenu.addEventListener("click", function () {
  const sidebar = document.getElementById("sidebars");
  sidebar.classList.toggle("toggle");
});

//   close icon
function closeNav() {
  const sidebar = document.getElementById("sidebars");
  sidebar.classList.toggle("toggle");
}

</script>


