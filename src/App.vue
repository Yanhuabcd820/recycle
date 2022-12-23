<script>
import Chart from "@/views/Chart.vue";
import Chart2 from "@/views/Chart2.vue";
export default {
  name: "App",
  components: {
    Chart,
    Chart2,
  },
};
</script>
<template>
  <router-view></router-view>
</template>

<style>
.content {
  width: 100%;
  padding-top: 60px;
}

.toup {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 100%;
  z-index: 99999999;
}

@media screen and (min-width: 370px) {
  .toup {
    position: fixed;
    right: 40px;
    bottom: 40px;
  }
}

.toup > .toup-bar {
  position: absolute;
  top: 50%;
  left: calc((100% - 18px) / 2);
  width: 18px;
  height: 2px;
  background-color: #555;
}

.toup > .toup-bar1 {
  transform: translateX(6px) translateY(-2px) rotate(45deg);
}

.toup > .toup-bar2 {
  transform: translateX(-6px) translateY(-2px) rotate(-45deg);
}

.content > .title {
  width: 85%;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 30px;
  color: #000;
}

@media screen and (min-width: 768px) {
  .content > .title {
    width: 90%;
  }
}
/* 
@media screen and (min-width: 1200px) {
  .content > .title {
    width: 100%;
  }
} */

@media screen and (min-width: 1650px) {
  .content > .title {
    width: 1650px;
    margin-bottom: 20px;
  }
}

.content > .title > a {
  color: #000;
  text-decoration: none;
}

.content > .title > span.title-deco {
  content: "";
  display: block;
  clear: both;
  width: 110px;
  height: 10px;
  background-color: #bddc04;
  border-radius: 100px;
  margin-left: 0px;
  margin-top: 30px;
  position: relative;
  animation: title-deco 1s;
  opacity: 1;
}

@keyframes title-deco {
  0% {
    width: 0px;
    opacity: 0;
  }

  100% {
    width: 110px;
    opacity: 1;
  }
}

@media screen and (min-width: 768px) {
  .content > .title > span.title-deco {
    display: inline-block;
    margin-left: 20px;
  }
}

.content > .title > span.title-deco::before {
  content: "";
  display: inline-block;
  clear: both;
  width: 10px;
  height: 10px;
  background-color: #73c92d;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  animation: title-deco-before 0.5s;
}

@keyframes title-deco-before {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.content > .title > span.title-deco::after {
  content: "";
  display: inline-block;
  clear: both;
  width: 10px;
  height: 10px;
  background-color: #73c92d;
  border-radius: 100px;
  position: absolute;
  top: 0px;
  right: 3px;
  animation: title-deco-after 0.5s 0.5s alternate 2 forwards;
}

@keyframes title-deco-after {
  0% {
    right: 3px;
  }

  100% {
    right: 53px;
  }
}

.content > .title > span.title-deco > span.title-deco2 {
  content: "";
  display: inline-block;
  clear: both;
  width: 10px;
  height: 10px;
  background-color: #e7f0ac;
  border-radius: 100px;
  position: absolute;
  top: 0px;
  right: 21px;
  animation: title-deco2 0.5s 0.5s alternate 2 forwards;
}

@keyframes title-deco2 {
  0% {
    right: 60px;
  }

  100% {
    right: 21px;
  }
}

.content > .col {
  width: 85%;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .content > .col {
    width: 90%;
  }
}

@media screen and (min-width: 1650px) {
  .content > .col {
    width: 1000px;
  }
}

.content > .col > .col-2 {
  padding: 50px 0px 40px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid #aaa;
  width: 100%;
}

.content > .col > .reverse {
  padding: 40px 0px 50px 0px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  border-bottom: 1px solid #aaa;
  width: 100%;
}

.content > .col > .border-top {
  border-top: 1px solid #aaa;
}

.content > .col > .col-2 > .no-line {
  border-bottom: 0px solid #aaa;
}

.content > .col > .col-2-end {
  padding: 0px 0px 40px 0px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  border-bottom: 1px solid #aaa;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .content > .col > .col-2 {
    padding: 50px 0px 40px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
    width: 100%;
  }
}

.content > .col > .no-line {
  border-bottom: 0px solid #aaa;
}

.content > .col > .col-2 > .col-2-left {
  width: 100%;
  font-size: 16px;
}

.content > .col > .col-2 > .col-2-left {
  padding-top: 30px;
}

@media screen and (min-width: 768px) {
  .content > .col > .col-2 > .col-2-left {
    padding-top: 0px;
  }
}

.content > .col > .col-2 > .col-2-left-end {
  padding-top: 50px;
}

@media screen and (min-width: 768px) {
  .content > .col > .col-2 > .col-2-left {
    width: 60%;
  }

  .content > .col > .col-2 > .col-2-left-end {
    padding-top: 0px;
  }
}

.content > .col > .col-2 > .col-2-left > h3,
.content > .col > .col-1 > h3 {
  font-weight: bold;
  line-height: 21px;
  color: #000;
}

.content > .col > .col-2 > .col-2-left > h3.service-title {
  font-weight: normal;
  line-height: 38px;
  font-size: 30px;
  color: #000;
}

.content > .col > .col-2 > .col-2-left > p,
.content > .col > .col-2 > .col-2-right > p,
.content > .col > .col-1 > p {
  padding-top: 23px;
  line-height: 28px;
  text-align: justify;
}

.content > .col > .col-2 > .col-2-right > p {
  text-align: left;
}

.content > .col > .col-1 > p.eng,
.content > .col > .col-2 > .col-2-left > p.eng {
  text-align: left;
}

.content > .col > .col-2 > .col-2-left > .process-text {
  font-size: 12px;
  line-height: 16px;
  color: #aaa;
}

.content > .col > .col-2 > .col-2-right {
  width: 100%;
  padding-top: 30px;
}

.content > .col > .col-2 > .col-2-service-right {
  padding-top: 0px;
}

.content > .col > .col-2 > .col-2-right-end {
  padding-top: 0px;
}

.content > .col > .col-2 > .col-2-right > img {
  width: 100%;
  vertical-align: top;
  border: 1px solid #888;
}

@media screen and (min-width: 768px) {
  .content > .col > .col-2 > .col-2-right {
    width: 35%;
    padding-top: 0px;
  }
}

.content > .col > .col-1 {
  padding: 30px 0px 40px 0px;
  border-bottom: 1px solid #aaa;
}

.content > .col > .no-line {
  border-bottom: 0px solid #aaa;
}
</style>
