<template>
  <div class="navigation">
    <Menu mode="horizontal" theme="light" active-name="new-paper" @on-select="route">
      <MenuItem v-for="item in navigation" :key="item.name" :name="item.name">
        <Icon :type="item.icon"></Icon>
        {{item.displayName}}
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navigation:[{
        name:'new-paper',
        icon:'ios-paper',
        displayName:'读书笔记'
      },{
        name:'javascript',
        icon:'ios-heart',
        displayName:'javascript'
      },{
        name:'design-chart',
        icon:'stats-bars',
        displayName:'我的设计图'
      }]
    };
  },
  methods: {
    route: function(name) {
      switch(name){
        case 'new-paper':this.$router.push('/home');break;
        case 'javascript':this.$router.push('/js');break;
        case 'design-chart':this.$router.push('/dc');break;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  width: 100%;
  height: 50px;
}
.ivu-menu-horizontal{
  height: 50px;
  line-height: 50px;
}
</style>
