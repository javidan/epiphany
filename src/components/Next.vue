<template>
  <div class="next" v-on:click="nextClicked">
    <font-awesome-icon size="1x" icon="chevron-right" :style="{ color: 'white' }"/>
  </div>
</template>

<script>
export default {
  name: "Next",
  methods:{
    nextClicked(){
      this.$emit("click")
    }
  }
}
</script>

<style lang="scss" scoped>
.next{
  background: #C6C6C6;
  padding: 9px 14px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  margin-left: 10px;

  @media only screen and (max-width: 600px) {
    margin: 10px;
    text-align: center;
  }
}
</style>