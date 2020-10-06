<template>
  <div>
    <carousel :per-page="1" :paginationEnabled="false" :navigate-to="this.currentQuestion" :mouse-drag="false">
      <slide v-for="question in questions" v-bind:key="question.id">
        <div class="img-container">
          <div v-bind:style="{ backgroundImage: `url(${question.image})` }" class="question" />
        </div>
      </slide>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Questions",
  computed: {
    getCurrentQuestion(){
      return this.questions[this.currentQuestion]
    }
  },
  data: () => ({
  }),
  components:{
    Carousel,
    Slide
  },
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
  .img-container{
    padding: 10px 20px
  }
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