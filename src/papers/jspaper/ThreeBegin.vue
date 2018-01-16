<template>
  <div class="home">
    ABC
  </div>
</template>

<script>
export default {
  name: "Js",
  data() {
    return {
      jsList:[{
        id:1,
        title:'three.js入门',
        imgSrc:'/static/imgs/tiger2.jpg',
        route:'/js/1'
      },{
        id:2,
        title:'three.js窥探',
        imgSrc:'/static/imgs/silence2.jpg',
        route:'/js/2'
      }]
    }
  },
  methods: {
    route: function(item) {
      this.$route.push(item.route)
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
    line-height: 28px;
    word-break: break-all;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    -webkit-text-overflow:ellipsis;
   -moz-text-overflow:ellipsis;
  }

</style>
