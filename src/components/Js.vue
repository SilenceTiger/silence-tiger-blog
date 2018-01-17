<template>
  <div class="home">
    <div class="paper-modal" v-for="item in jsList" :key="item.id" @click="route(item)">
      <img :src="item.imgSrc" class="paper-img-modal" />
      <div class="paper-title-modal">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Js",
  data() {
    return {
      jsList:[{
        id:1,
        title:'three.js初探（1）',
        imgSrc:'/static/imgs/tiger2.jpg',
        route:'/js/1'
      },{
        id:2,
        title:'three.js窥探',
        imgSrc:'/static/imgs/silence2.jpg',
        route:'/js/2'
      },{
        id:3,
        title:'使用express搭建简易的mock server',
        imgSrc:'/static/imgs/mock.png',
        route:'/js/3'
      },{
        id:4,
        title:'你不知道的Js',
        imgSrc:'/static/imgs/你不知道的JavaScript下.jpg',
        route:'/js/4'
      }]
    }
  },
  methods: {
    route: function(item) {
      this.$router.push(item.route)
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
