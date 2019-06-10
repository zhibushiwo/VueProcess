<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,body,#app{
  height: 100%;
  width: 100%
}
li{
  list-style: none;
}
html, body, div, span, applet, object, iframe, 
h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, acronym, address, big, 
cite, code, del, dfn, em, font, img, 
ins, kbd, q, s, samp, small, strike, 
strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, 
fieldset, form, label, legend, 
table, caption, tbody, tfoot, thead, tr, th, td, 
center, u, b, i { 
    margin: 0; 
    padding: 0; 
    border: 0; 
    outline: 0; 
    font-weight: normal; 
    font-style: normal; 
    font-size: 100%; 
    font-family: inherit; 
    vertical-align: baseline 
}
.main .el-card__header{
  padding: 8px 20px;
}
.main .el-card__body{
  padding: 6px
}
.main .el-input-group__append{
  background-color: #409EFF;
  color: #fff
} 
#app .el-main{
  padding: 10px;
}
.clear{
  clear: both;
}
</style>
