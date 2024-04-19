<script>
import Product from '../views/Product.vue'
export default{
    components: { Product }
}
</script>
<template>
    <div class="main">
        <div class="mainLeft">
            <ul>
                <li>
                    <span>性别:</span>
                    <div><input id="male" type="checkbox" name="sex" value="male"><label for="male">男</label></div>
                    <div><input id="female" type="checkbox" name="sex" value="female"><label for="female">女</label></div>
                </li>
                <li>
                    <span>价格:</span>
                    <div><input id="cheap" type="checkbox" name="cost" value="cheap"><label for="cheap">200元以下</label></div>
                    <div><input id="mid" type="checkbox" name="cost" value="mid"><label for="mid">200-1000元</label></div>
                    <div><input id="expensive" type="checkbox" name="cost" value="expensive"><label for="expensive">1000元以上</label></div>
                </li>
                <li>
                    <span>种类:</span>
                    <div><input id="clothes" type="checkbox" name="category" value="clothes"><label for="clothes">衣服</label></div>
                    <div><input id="pants" type="checkbox" name="category" value="pants"><label for="pants">裤子</label></div>
                    <div><input id="shoes" type="checkbox" name="category" value="shoes"><label for="shoes">鞋子</label></div>
                </li>
            </ul>
        </div>
        <div class="mainRight">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
</template>
<style>
/*中间内容区样式*/
.main{
    width:100%;
    height:800px;
    background-color: red;
}
.main .mainLeft{
    width: 300px;
    height:100%;
    background-color: green;
    float:left;
}
.main .mainRight{
    margin-left:200px;
    height: 100%;
    background-color: lightblue;
}
.main li::first-line{
    font-size: 24px;
}
.main li{
    /* display: block; */
    margin-top:20px;
    margin-left:20px;

}
</style>