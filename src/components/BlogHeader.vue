<template>
    <div id="blog-header">
      <img src="../lib/img/tiger.png" class="blog-tiger-icon"/>
    </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "hello world"
    };
  },
  mounted() {
    var width = document.getElementById("blog-header").clientWidth;
    var height = document.getElementById("blog-header").clientHeight;
    var i = 0;

    var svg = d3
      .select("#blog-header")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "rgba(0,0,0,0)")
      .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

    function particle() {
      var m = d3.mouse(this);
      svg
        .insert("circle", "rect")
        .attr("cx", m[0])
        .attr("cy", m[1])
        .attr("r", 1e-6)
        .attr("fill", "rgba(0,0,0,0)")
        .attr("stroke-width",1.5)
        .style("stroke", d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style("stroke-opacity", 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr("r", 100)
        .style("stroke-opacity", 1e-6)
        .remove();

      d3.event.preventDefault();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blog-header {
  height: 80px;
  width: 100%;
  background: #222;
  position: relative;
}
.blog-tiger-icon{
  position: absolute;
  bottom:15px;
  left:5px;
  height: 50px;
}
</style>
