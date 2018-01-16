<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <BlogNavigation></BlogNavigation>
    <!-- <p v-highlight>
      <pre>
        <code class="javascript" v-html="html"></code>
      </pre>
    </p> -->
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'
import BlogNavigation from './components/BlogNavigation'
// import * as d3 from "d3";
// import * as three from "three";
// console.log(d3);
// console.log(three);
export default {
  name: "app",
  components:{BlogHeader,BlogNavigation},
  data() {
    return {
      html: `function selectionSort(arr){
              var minIndex, temp, len = arr.length;
              for(var i=0; i < len; i++){
                  minIndex = i;
                  for(var j=i+1; j < len; j++){
                      if(arr[j] < arr[minIndex]){
                          minIndex = j;
                      }
                  }
                  temp = arr[i];
                  arr[i] = arr[minIndex];
                  arr[minIndex] = temp;
              }
              return arr;
          }
          var num = new Array;
          num = [1,5,2,8,4,9,3,0,4];
          console.log(selectionSort(num));`
    };
  }
};
</script>

<style>
  body{
    width:100%;
    height:100%;
    background-color:#f0f0f0;
    overflow: hidden;
  }
  .view-container{
    overflow-y: auto;
    position: absolute;
    top:130px;
    bottom:0;
    width:100%;
    padding-bottom: 30px;
  }
</style>
