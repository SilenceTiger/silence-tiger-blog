<template>
  <div class="paper">
    <div class="paper-title">
    你不知道的JavaScript
    </div>
    <div class="paper-content">
     <p class="normal">看完就写！</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "Js",
  data() {
    return {};
  },
  methods: {
    route: function(item) {}
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
  margin-bottom: 10px;
}
.paper-content p {
  font-size: 16px;
}
.paper-content .normal {
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
