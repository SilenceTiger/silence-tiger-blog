<template>
  <div class="paper">
    <div class="paper-title">
      使用express搭建简易的mock server
    </div>
    <div class="paper-content">
      <p class="normal">在前后端分离的趋势下，因为后端开发滞后的缘故，前端开发者常常会为得不到数据而 苦恼。通常的情况是，前端开发者使用死数据来进行页面的开发，而为了代码尽量少的修改， 又会写一大堆的 json 数据，like this：</p>
      <img :src="manyJson" class="paper-img-style-1" />
      <p class="normal">编写这样的json数据费时费力，而且效果还不是很好，比如有的请求接口相同，需要根据查询参数不同返回不同结构的数据，这个时候，不仅要构造大量的json数据，而且在对接的时候还要大量修改代码，得不偿失。 mock.js为这种情况带来了改变，其可以通过简单的代码生成前端开发者需要的测试数据，like this：</p>
      <p v-highlight><pre><code class="javascript">var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
  // Mock响应模板
  Mock.mock('http://test.com', {
    "user|1-3": [{   // 随机生成1到3个数组元素
        'name': '@cname',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    },{
        'gf': '@cname'
    }]
});</code></pre></p>
    <p class="normal">具体的使用方式可以参考官方<a targetUrl="https://github.com/nuysoft/Mock/wiki" @click="openWin">wiki</a>，这里分享一个mock.js的<a targetUrl="https://segmentfault.com/a/1190000008839142#articleHeader1" @click="openWin">使用指南</a>。</p>
    <p class="normal">下面，我们使用 node 的开发框架 express 来搭建一个简易的 mock-server(假设 node 已经安装)。首先，新建一个工程目录，编写 package.json，like this:</p>
    <p v-highlight><pre><code class="javascript">{
    "name":"my-mock-server",
    "description":"my-mock-server",
    "version":"0.0.1",
    "private":true,
    "dependencies":{
        "express":"4.x"
        }
}</code></pre></p>
    <p class="normal">使用npm install or cnpm install(假如你已经安装了cnpm)来下载相关的modules。在工程目录上创建入口文件index.js，一个存放静态资源文件的文件夹public，和一个存放路由信息与返回数据的文件夹serverInterface，这个时候你的项目目录如下：</p>
    <img :src="struct" class="paper-img-style-2" />
    <p class="normal">在开始编写之前，需要安装两个依赖——mockjs和supervisor(supervisor并不是必须的，他是一个热启动插件，修改任何代码，保存的时候会直接生效，不需要使用node index.js进行重新启动，命令如下：</p>
    <p v-highlight><pre><code class="javascript">cnpm install -g supervisor
cnpm install mockjs --save-dev</code></pre></p>
    <p class="normal">然后可以开始index.js的编写了。先写一个最简单的服务，看看express是否成功启动。</p>
    <p v-highlight><pre><code class="javascript">let path = require('path')
let express = require('express')
let app = express()
      
//设置路由配置
app.get('/',function(req,res){
    res.send('welcome to my mock-server')
})
      
let server = app.listen(8888,function(){
    console.log('app listening at http://localhost:8888')
})
      </code></pre></p>
    <p class="normal">使用supervisor index.js(node index.js也可)，在游览器中输入localhost:8888，查看express服务是否启动。</p>
    <p class="normal">没有问题之后我们继续编写。为了不把所有的路由代码和返回数据都写在index.js里面，需要设置一些路由信息，我将一些路由信息和需要返回的数据写在了serverInterface/basicdata.js中，这样如果多个模块需要测试数据，只需要在serverInterface文件夹下添加相应的js文件即可。在index.js中写下如下内容。</p>
    <p v-highlight><pre><code class="javascript">app.use(express.static('public'))
app.use('/basicdata',require('./serverInterface/basicdata.js'))</code></pre></p>
    <p class="normal">然后进行basicdata.js的编写。</p>
    <p v-highlight><pre><code class="javascript">let express = require('express')
let Mock = require('mockjs')
let router = express.Router()
router.get('/default', function (req, res) {
    res.json(Mock.mock({
        "status": 200,
        "data|1-9": [{
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }))
})
module.exports = router</code></pre></p>
    <p class="normal">可以尝试访问localhost:8888/basicdata/default看看是否有返回数据，express路由的更多细节可以查看<a targetUrl="http://www.expressjs.com.cn" @click="openWin">express官网</a>。这样一个基础的mock-server就搭建好了。</p>
    <p class="normal">最后，别忘了对跨域请求进行处理。</p>
    <p v-highlight><pre><code class="javascript">/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});</code></pre></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Js",
  data() {
    return {
      manyJson: "/static/imgs/mockServer/manyJson.png",
      struct: "/static/imgs/mockServer/struct.png",
    };
  },
  methods: {
    route: function(item) {
      this.$route.push(item.route);
    },
    openWin(e){
      window.open(e.target.getAttribute('targetUrl'))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paper {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
}
.paper-title {
  text-align: center;
  font-size: 26px;
  margin-top: 10px;
  margin-bottom:10px
}
.paper-content .normal{
  font-size: 16px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-indent: 2em;
}
.paper-img-style-1 {
  display: block;
  width: 300px;
  margin: 10px auto;
}
.paper-img-style-2 {
  display: block;
  width: 200px;
  margin: 10px auto;
}
</style>
