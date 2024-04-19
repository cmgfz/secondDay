<script>
import Header from './Header.vue'
import Main from './Main.vue'
export default{
    components: { Header,Main },
}
</script>
<template>
    <Header/>
    <Main/>
    <div class="bottom clearfix">
        <ul>
            <li>关于盈盈网</li>
            <li>About Yinyin Network</li>
            <li>网络文化经营许可证：xxxxx</li>
        </ul>
    </div>
</template>
<style>
/*定义清除浮动的类clearfix,在需要的地方进行引用*/
.clearfix::after{
    clear:both;
    content:"";
    display:block;
    height: 0;
    visibility: hidden;
}
/*底部样式*/
.bottom{
    height: 30px;
    width:100%;
    position:fixed;
    bottom: 0;
    left: 0;
}
.bottom li{
    float:left;
    line-height:30px;
    color:#bbb;
    margin:0 120px;
}
</style>