<script>
export default {};
</script>
<template>
  <div id="up"></div>
  <header>
    <a class="toup" id="goTop" href="#up">
      <span class="toup-bar toup-bar1"></span>
      <span class="toup-bar toup-bar2"></span>
    </a>
    <input type="checkbox" name="" id="controller" />
    <div class="wrap">
      <div class="nav-wrap">
        <div class="logo">
          <a href="index.html"
            ><img
              src="~@/assets/images/logo-header-union.svg"
              alt="BORNA DESIGN 伯納廣告設計工作室"
          /></a>
          <h1>Borna Marketing Design 伯納廣告設計工作室</h1>
        </div>
        <label for="controller" class="menu">
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar3"></span>
        </label>
        <div class="navigation">
          <router-link to="/Talks">
            <span class="dot"></span>
            <span class="dot2"></span>we talks</router-link
          >
          <router-link to="/About">
            <span class="dot"></span>
            <span class="dot2"></span>about us</router-link
          >
          <router-link to="/Works">
            <span class="dot"></span>
            <span class="dot2"></span>works</router-link
          >
          <router-link to="/Service">
            <span class="dot"></span>
            <span class="dot2"></span>service</router-link
          >
          <router-link to="/Contact">
            <span class="dot"></span>
            <span class="dot2"></span>contact</router-link
          >
          <router-link to="/Join">
            <span class="dot"></span>
            <span class="dot2"></span>join us</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* header */
img {
  vertical-align: top;
}

header > .wrap {
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #aaa;
}

@media screen and (min-width: 1650px) {
  header > .wrap {
    width: 1650px;
  }
}

header > .wrap > .nav-wrap {
  width: 85%;
  margin: 0 auto;
  padding: 18px 0px 21px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

@media screen and (min-width: 768px) {
  header > .wrap > .nav-wrap {
    width: 90%;
  }
}

@media screen and (min-width: 1650px) {
  header > .wrap > .nav-wrap {
    width: 100%;
    padding: 18px 0px 21px 0px;
  }
}

.logo {
  width: 230px;
  position: relative;
}

@media screen and (min-width: 375px) {
  .logo {
    width: 270px;
  }
}

@media screen and (min-width: 540px) {
  .logo {
    width: 350px;
  }
}

@media screen and (min-width: 1024px) {
  .logo {
    width: 400px;
  }
}

.logo > img {
  width: 100%;
  vertical-align: top;
}

.logo > h1 {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

header > .wrap > .nav-wrap > .menu {
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: block;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 888;
}

@media screen and (min-width: 540px) {
  header > .wrap > .nav-wrap > .menu {
    top: 20px;
    right: 40px;
  }
}

@media screen and (min-width: 922px) {
  header > .wrap > .nav-wrap > .menu {
    display: none;
  }
}

header > .wrap > .nav-wrap > .menu > .bar {
  position: absolute;
  top: 50%;
  left: 6px;
  width: 28px;
  height: 2px;
  background-color: #000;
}

header > .wrap > .nav-wrap > .menu > .bar2 {
  position: absolute;
  opacity: 1;
}

header > .wrap > .nav-wrap > .menu > .bar1 {
  position: absolute;
  transform: translateY(-10px) rotate(0deg);
}

header > .wrap > .nav-wrap > .menu > .bar3 {
  position: absolute;
  transform: translateY(9px) rotate(0deg);
}

#controller {
  position: absolute;
  z-index: -5555;
  opacity: 0;
}

#controller:checked ~ .wrap > .nav-wrap > .menu > .bar2 {
  opacity: 0;
}

#controller:checked ~ .wrap > .nav-wrap > .menu > .bar1 {
  transform: translateY(0px) rotate(45deg);
}

#controller:checked ~ .wrap > .nav-wrap > .menu > .bar3 {
  transform: translateY(0px) rotate(135deg);
}

header > .wrap > .nav-wrap > .navigation {
  display: none;
  align-items: flex-end;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  padding-top: 80px;
  z-index: 555;
}

#controller:checked ~ .wrap > .nav-wrap > .navigation {
  display: flex;
}

@media screen and (min-width: 922px) {
  header > .wrap > .nav-wrap > .navigation {
    display: flex;
    flex-direction: row;
    position: static;
    width: 480px;
    padding-top: 0px;
  }
}

@media screen and (min-width: 1280px) {
  header > .wrap > .nav-wrap > .navigation {
    width: 600px;
  }
}

header > .wrap > .nav-wrap > .navigation > a {
  font-size: 16px;
  color: #aaa;
  padding: 15px 10px 21px 10px;
  text-decoration: none;
  position: relative;
  margin: 5px auto 5px auto;
}

@media screen and (min-width: 992px) {
  header > .wrap > .nav-wrap > .navigation > a {
    margin: 0 auto;
  }
}

@media screen and (min-width: 1280px) {
  header > .wrap > .nav-wrap > .navigation > a {
    padding: 15px 20px 21px 20px;
  }
}

header > .wrap > .nav-wrap > .navigation > a:hover,
header > .wrap > .nav-wrap > .navigation > a.touch,
header > .wrap > .nav-wrap > .navigation > .router-link-active,
header > .wrap > .nav-wrap > .navigation > .router-link-exact-active {
  color: #000;
  transition: color 1s;
}

@media screen and (min-width: 768px) {
  header > .wrap > .nav-wrap > .navigation > a:hover > span.dot::before,
  header > .wrap > .nav-wrap > .navigation > a.touch > span.dot::before,
  header
    > .wrap
    > .nav-wrap
    > .navigation
    > .router-link-active
    > span.dot::before,
  header
    > .wrap
    > .nav-wrap
    > .navigation
    > .router-link-exact-active
    > span.dot::before {
    content: "";
    display: inline-block;
    clear: both;
    width: calc(100% - 30px);
    height: 6px;
    background-color: #bddc04;
    border-radius: 100px;
    position: absolute;
    top: 47px;
    left: 15px;
    animation: dot1-1 0.5s forwards;
    -moz-animation: dot1-1 0.5s forwards;
    opacity: 0;
  }

  @keyframes dot1-1 {
    0% {
      width: 0px;
      opacity: 0;
    }

    100% {
      width: calc(100% - 30px);
      opacity: 1;
    }
  }

  header > .wrap .nav-wrap > .navigation > a:hover > span.dot::after {
    content: "";
    display: inline-block;
    clear: both;
    width: 6px;
    height: 6px;
    background-color: #73c92d;
    border-radius: 100px;
    position: absolute;
    top: 47px;
    left: 15px;
    animation: dot1-2 0.5s forwards;
    -moz-animation: dot1-2 0.5s forwards;
    opacity: 0;
  }

  @keyframes dot1-2 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  header > .wrap .nav-wrap > .navigation > a:hover > span.dot2::before {
    content: "";
    display: inline-block;
    clear: both;
    width: 6px;
    height: 6px;
    background-color: #73c92d;
    border-radius: 100px;
    position: absolute;
    top: 47px;
    right: calc(15px + 2.7%);
    opacity: 1;
    animation: dot2-1 0.5s 0.5s alternate 2 backwards;
    -moz-animation: dot2-1 0.5s 0.5s alternate 2 backwards;
  }

  @keyframes dot2-1 {
    0% {
      right: calc(15px + 2.7%);
      opacity: 0;
    }

    100% {
      right: 48.1%;
      opacity: 1;
    }
  }

  header > .wrap .nav-wrap > .navigation > a:hover > span.dot2::after {
    content: "";
    display: inline-block;
    clear: both;
    width: 6px;
    height: 6px;
    background-color: #e7f0ac;
    border-radius: 100px;
    position: absolute;
    top: 47px;
    right: 54.5%;
    opacity: 1;
    animation: dot2-2 0.5s 0.5s alternate 2 backwards;
    -moz-animation: dot2-2 0.5s 0.5s alternate 2 backwards;
  }

  @keyframes dot2-2 {
    0% {
      right: 54.5%;
      opacity: 0;
    }

    100% {
      right: 19%;
      opacity: 1;
    }
  }
}

header > .wrap .nav-wrap > .navigation > a.icon-fb {
  background: url("~@/assets/images/icon-fb.jpg") no-repeat center center;
  width: 12px;
  height: 25px;
  padding: 15px 0px 25px 15px;
}

header > .wrap .nav-wrap > .navigation > a.icon-fb:hover {
  background: url("~@/assets/images/icon-fb-hover.jpg") no-repeat center center;
}

.icon-fb-s {
  width: 90px;
  line-height: 21px;
  position: relative;
  padding-top: 45px;
  cursor: pointer;
}

.icon-fb-s span {
  color: #999;
  font-size: 14px;
}

.icon-fb-s-img {
  background: url("~@/assets/images/icon-fb-s.jpg") no-repeat center center;
  width: 9px;
  height: 20px;
  float: left;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-bottom: 10px;
  cursor: pointer;
}

.icon-fb-s:hover span {
  color: #bfdd00;
}

.icon-fb-s:hover .icon-fb-s-img {
  background: url("~@/assets/images/icon-fb-s-hover.jpg") no-repeat center
    center;
}

.content {
  width: 100%;
  padding-top: 60px;
}
</style>
