<!doctype html>
<html>
<head>
<?php include('page_meta.php'); ?>
</head>

<body>

<div class="pageWrap">
  
  <div class="topBar">
    <span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="topArea">
    <div class="comment">
      我是一個熱愛網頁設計的女生。
    </div>
    <div class="author">
      <img src="assets/images/author.png" height="150" width="150" alt="">
      <h1>鄭于庭</h1>
      <span>Yu-Ting Cheng</span>
    </div>
    <a href="#" title="了解我" class="btn">
      <span>關於我</span>
      <span><i class="fa fa-arrow-down"></i></span>
    </a>
  </div>

  <nav id="nav" class="tabsWrap">
    <ul class="ulSet tabs">
      <li>
        <a href="#" title="關於我">
          <i class="fa fa-street-view"></i><span>關於我</span>
        </a>
      </li>
      <li>
        <a href="#" title="履歷表">
          <i class="fa fa-graduation-cap"></i><span>履歷表</span>
        </a>
      </li>
      <li>
        <a href="#" title="作品集">
          <i class="fa fa-folder-open"></i><span>作品集</span>
        </a>
      </li>
      <li>
        <a href="#" title="隨手記">
          <i class="fa fa-coffee"></i><span>隨手記</span>
        </a>
      </li>
      <li>
        <a href="#" title="聯絡我">
          <i class="fa fa-envelope"></i><span>聯絡我</span>
        </a>
      </li>
    </ul>
  </nav>

  <div id="mainWrap">

    <!-- 關於我 -->
    <div id="about" class="paneBox">
      <div class="area leftArea">
        <div class="author"><img src="assets/images/author.png" height="150" width="150" alt=""></div>
      </div>
      <div class="area rightArea">
        <div class="title">你好，我是鄭于庭！</div>
        <div class="notice">
          從事網頁前端設計工作已有4年以上的經驗，非常熱愛HTML、CSS與jQuery，對於前端技術的研究都積極學習。<br><br>
          網站設計的美感已累積相當多經驗，也有程式語言的基礎概念，在專案中能與他人合作並良好溝通，成為視覺設計師與後端工程師中間的橋樑。
        </div>
      </div>
      <div class="gap"></div>
      <div class="subjectBar">
        <div class="icon"><i class="fa fa-book"></i></div>
        <div class="txt">個人資料</div>
      </div>
      <table class="tabSet tabIdentity">
        <tr>
          <th>姓名</th>
          <td>鄭于庭</td>
        </tr>
        <tr>
          <th>生日</th>
          <td>1986/12/06</td>
        </tr>
        <tr>
          <th>現居</th>
          <td>台中市大甲區</td>
        </tr>
        <tr>
          <th>手機</th>
          <td>0989730432</td>
        </tr>
        <tr>
          <th>信箱</th>
          <td>fishtoyo@gmail.com</td>
        </tr>
        <tr>
          <th>網站</th>
          <td><a href="#" title="www.fishtoyo.com">www.fishtoyo.com</a></td>
        </tr>
      </table>
      <div class="subjectBar">
        <div class="icon"><i class="fa fa-diamond"></i></div>
        <div class="txt">基礎技能</div>
      </div>
      <ul class="ulSet ulSkill">
        <li><i class="fa fa-check"></i>PSD 切片製作成 HTML</li>
        <li><i class="fa fa-check"></i>CSS 撰寫與設計</li>
        <li><i class="fa fa-check"></i>RWD 自適應版型製作</li>
        <li><i class="fa fa-check"></i>jQuery 效果撰寫、套件搭配</li>
        <li><i class="fa fa-check"></i>了解各瀏覽器的屬性支援度</li> 
      </ul>
      <div class="subjectBar">
        <div class="icon"><i class="fa fa-pie-chart"></i></div>
        <div class="txt">專案型態</div>
      </div>
      <ul class="ulSet ulCases">
        <li>
          <span><i class="fa fa-star fa-fw"></span></i>
          <strong>130</strong> 件專案 / <strong>40</strong> 個月
        </li>
        <li>
          <span><i class="fa fa-shopping-cart fa-fw"></i></span>
          <strong>30</strong> 件購物
        </li>
        <li>
          <span><i class="fa fa-camera-retro fa-fw"></i></span>
          <strong>30</strong> 件形象
        </li>
        <li>
          <span><i class="fa fa-users fa-fw"></i></span>
          <strong>30</strong> 件企業
        </li>
      </ul>
    </div>

    <!-- 履歷表 -->
    <div id="resume" class="paneBox">
      履歷表
    </div>

    <!-- 作品集 -->
    <div id="work" class="paneBox">
      作品集
    </div>

    <!-- 隨手記 -->
    <div id="blog" class="paneBox">
      隨手記
    </div>

    <!-- 聯絡我 -->
    <div id="contact" class="paneBox">
      聯絡我
    </div>

  </div>

</div>

<!--[if lt IE 9]>
<script src="assets/js/plugins/jQuery/jquery-1.11.1.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<script src="assets/js/plugins/jQuery/jquery-2.1.1.min.js"></script>
<!--<![endif]-->
<script src="assets/js/plugins/jQuery/jquery.mobile-1.4.4.custom.min.js"></script>
<script src="assets/js/plugins/jQuery/jquery.tools-1.1.2.min.js"></script>
<script src="assets/js/common.js"></script>
<script>
$(document).ready(function() {
  $('ul.tabs').tabs('#mainWrap > .paneBox');
});
</script>
</body>
</html>