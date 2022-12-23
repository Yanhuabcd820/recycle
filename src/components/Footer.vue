<script>
export default {};
</script>
<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-left-deco">
          <div class="footer-left-deco2"></div>
        </div>
        <div class="footer-left-info">
          點子倉庫資訊有限公司 | 伯納廣告設計工作室<br />
          borna marketing design studio<br />
          TEL.+886-2-25062910<br />
          FAX.+886-2-25062912<br />
          <a href="mailto:service@borna.com.tw" target="_blank"
            >email.service@borna.com.tw</a
          >
        </div>
      </div>
      <div class="footer-right">©2022 Borna</div>
    </div>
  </footer>
</template>

<style scoped>
/* footer */
footer {
  width: 85%;
  margin: 0 auto;
  border-top: 1px solid #aaa;
  padding: 35px 0px 54px 0px;
}
.footer-line-100 {
  width: 100%;
  padding: 35px 10%;
  box-sizing: border-box;
}

@media screen and (min-width: 768px) {
  footer {
    width: 90%;
  }
}

@media screen and (min-width: 1650px) {
  footer {
    width: 1650px;
  }
}

footer > .footer-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (min-width: 1650px) {
  footer > .footer-content {
    width: 1000px;
  }
}

@media screen and (min-width: 480px) {
  footer > .footer-content {
    flex-direction: row;
  }
}

footer > .footer-content > .footer-left {
  width: 306px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media screen and (min-width: 480px) {
  footer > .footer-content > .footer-left {
    flex-direction: row;
  }
}

footer > .footer-content > .footer-left > .footer-left-deco {
  content: "";
  display: inline-block;
  clear: both;
  width: 66px;
  height: 6px;
  background-color: #ddd;
  border-radius: 100px;
  position: relative;
  margin-top: 5px;
}

footer > .footer-content > .footer-left > .footer-left-deco::before {
  content: "";
  display: inline-block;
  clear: both;
  width: 6px;
  height: 6px;
  background-color: #aaa;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
}

footer
  > .footer-content
  > .footer-left
  > .footer-left-deco
  > .footer-left-deco2 {
  content: "";
  display: inline-block;
  clear: both;
  width: 6px;
  height: 6px;
  background-color: #3e3d4d;
  border-radius: 100px;
  position: absolute;
  top: 0px;
  right: 2px;
}

footer
  > .footer-content
  > .footer-left
  > .footer-left-deco
  > .footer-left-deco2::before {
  content: "";
  display: inline-block;
  clear: both;
  width: 6px;
  height: 6px;
  background-color: #646470;
  border-radius: 100px;
  position: absolute;
  top: 0px;
  right: 13px;
}

footer > .footer-content > .footer-left > .footer-left-info {
  font-size: 12px;
  color: #999;
  line-height: 18px;
}

footer > .footer-content > .footer-left > .footer-left-info > a {
  color: #999;
  text-decoration: none;
}

footer > .footer-content > .footer-right {
  font-size: 12px;
  color: #999;
  text-align: right;
  padding-top: 30px;
}

@media screen and (min-width: 480px) {
  footer > .footer-content > .footer-right {
    text-align: left;
    padding-top: 0px;
  }
}
</style>
