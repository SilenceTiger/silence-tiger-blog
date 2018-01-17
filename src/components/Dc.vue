<template>
  <div class="home">
    <div class="paper-modal" v-for="item in jsList" :key="item.id" @click="zoomify($event)">
      <img :src="item.imgSrc" class="paper-img-modal" />
      <div class="paper-title-modal">
        {{item.title}}
      </div>
    </div>

    <big-img v-if="showImg" :imgSrc="imgSrc" v-on:clickit="closeImg"></big-img>
  </div>
</template>

<script>
import DesignChart from '../papers/dcpaper/DesignChart'
export default {
  name: "Js",
  components:{
    'big-img' : DesignChart
  },
  data() {
    return {
      jsList:[{
        id:1,
        title:'大屏首页',
        imgSrc:'/static/imgs/designChart/screen-home.png',
      },{
        id:2,
        title:'运行状态可视化',
        imgSrc:'/static/imgs/designChart/screen-running.png',
      },{
        id:3,
        title:'专业部门统计可视化',
        imgSrc:'/static/imgs/designChart/screen-dispose.png',
      },{
        id:4,
        title:'受理部门统计可视化（1）',
        imgSrc:'/static/imgs/designChart/screen-accept1.png',
      },{
        id:5,
        title:'受理部门统计可视化（2）',
        imgSrc:'/static/imgs/designChart/screen-accept2.png',
      },{
        id:6,
        title:'部件管理专题（1）',
        imgSrc:'/static/imgs/designChart/sjs1.png',
      },{
        id:7,
        title:'部件管理专题（2）',
        imgSrc:'/static/imgs/designChart/sjs2.png',
      },{
        id:8,
        title:'部件管理专题（3）',
        imgSrc:'/static/imgs/designChart/sjs3.png',
      }],
      showImg:false,
      imgSrc:''
    }
  },
  methods: {
    zoomify(e) {
      this.showImg = true
      this.imgSrc = e.target.currentSrc
    },
    closeImg(){
      this.showImg = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    background-color: blueviolet;
  }
  .paper-modal{
    width:300px;
    height: 200px;
    background-color: rgb(230,230,230);
    float: left;
    margin-left:20px;
    margin-top:20px;
    box-shadow: 5px 5px 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .paper-img-modal{
    width:280px;
    height:150px;
    margin-left:10px;
    margin-top:10px;
    display: block;
  }
  .paper-title-modal{
    font-size:16px;
    font-weight: bold;
    width:280px;
    margin-left:15px;
    margin-right:15px;
    margin-top:3px;
    line-height: 33px;
    word-break: break-all;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    -webkit-text-overflow:ellipsis;
   -moz-text-overflow:ellipsis;
  }

</style>
