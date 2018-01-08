<template>
  <div class="navigation">
    <Menu theme="light" @on-select="route">
      <Submenu v-for="nav in navData" :key="nav.key" :name="nav.key">
        <template slot="title">
          {{nav.name}}
        </template>
        <Menu-item v-for="item in nav.children" :key="item.key" :name="item.key">
          {{item.name}}
        </Menu-item>
      </Submenu>
    </Menu>
    <img src="../lib/img/silence2.jpg" />
    <img src="../lib/img/tiger2.jpg" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      navData: [
        {
          key: "javascript",
          name: "I love javascript",
          children: [
            {
              key: "js-note",
              name: "Js Notes"
            },
            {
              key: "d3-js",
              name: "D3.js"
            },
            {
              key: "three-js",
              name: "Three.js"
            },
            {
              key: "node-js",
              name: "About node.js"
            }
          ]
        },
        {
          key: "Java",
          name: "I hate java",
          children: [
            {
              key: "java-note",
              name: "Java Notes"
            }
          ]
        },
        {
          key: "life",
          name: "About life",
          children: [
            {
              key: "girl",
              name: "Who's that girl"
            },
            {
              key: "life-note",
              name: "Life Notes"
            }
          ]
        },
        {
          key: "yxz",
          name: "英雄志相关",
          children: [
            {
              key: "cruel-dog",
              name: "天在看，犬在吠"
            },
            {
              key: "yzqtszp",
              name: "云在青天水在瓶"
            },
            {
              key: "hmctdzy",
              name: "花满池塘得自由"
            }
          ]
        },
        {
          key: "tszy",
          name: "他山之玉",
          children: [
            {
              key: "sub-tszy",
              name: "他山之玉",
            }
          ]
        }
      ],
      openKey:'javascript'
    };
  },
  methods: {
    route: function(key) {
      alert(key)
      console.log(key)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  width: 240px;
  background-color: rgb(245, 245, 245);
}
.navigation img{
  width:240px;
  height:180px;
  display: block;
  padding-top:10px;
}
</style>
