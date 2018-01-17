<template>
  <div class="paper">
    <div class="paper-title">
      three.js初探（1）
    </div>
    <div class="paper-content">
     <p class="normal">官方示例，可以将代码拷贝到本地运行哈！重要的代码都有注释，一起开始3D之旅吧！</p>
     <p v-highlight><pre><code class="html" >&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;My first Three.js app&lt;/title&gt;
    &lt;style&gt;
        body {
            margin: 0;
        }

        canvas {
            width: 100%;
            height: 100%
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;script src="https://cdn.bootcss.com/three.js/r83/three.js"&gt;&lt;/script&gt;
    &lt;script&gt;
        //three.js
        //其实就像拍电影
        //1.首先总要要摄影机吧  camera 
        //2.布置场景 scene
        //3.场景中的东西 cube , 需要将cube添加至场景 scene.add(cube)
        //4.渲染器 renderer 可以理解为后期导演剪辑，怎么去播放这个片子(借助于场景于照相机) renderer.render(scene,camera);
        var scene = new THREE.Scene();   //创建一个场景
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);   //远景照相机

        var renderer = new THREE.WebGLRenderer();  //渲染器
        renderer.setSize(window.innerWidth, window.innerHeight);  //设置渲染的空间大小
        document.body.appendChild(renderer.domElement);  //将渲染器添加在dom中

        var geometry = new THREE.BoxGeometry(1, 2, 3);   //创建一个立方体  x,y,z轴上的宽度
        var material = new THREE.MeshBasicMaterial({   //材料 MeshBasicMaterial是一种材料类型
            color: 0xff0000
        });
        var cube = new THREE.Mesh(geometry, material); //用立方体 和 材料 创建一个cube
        scene.add(cube);    //在场景中添加cube

        camera.position.z = 5;   //设置照相机位置

        var render = function () {
            requestAnimationFrame(render);   //相当于setInterval 性能上更好 ,60帧的渲染频率

            cube.rotation.x += 0.01;    //cube x方向上的旋转角度
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        render();
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Js",
  data() {
    return {
    }
  },
  methods: {
    route: function(item) {
      
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
.paper-content p{
  font-size:16px
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
