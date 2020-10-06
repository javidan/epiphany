<template>
  <div>
    <div v-bind:style="{ backgroundImage: `url(${getCurrentQuestion.image})` }" class="question" />
  </div>
</template>


<script>
export default {
  name: "Questions",
  computed: {
    getCurrentQuestion(){
      return this.questions[this.currentQuestion]
    }
  },
  data: () => ({
  }),
  props: {
    questions: {
      type: Array,
      default: () => []
    },
    currentQuestion:{
      type: Number
    }
  }
}
</script>


<style lang="scss" scoped>
  .question{
    box-sizing: border-box;
    height: 200px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
    background-color: #48B0E3;
  }
</style>