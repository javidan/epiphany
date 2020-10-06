<template>
  <div class="container">
    <div class="questionarie">
      <div class="title">{{ questionarie.title }}</div>

      <div v-if="showResult">
        <Result v-bind:questions="questionarie.questions" 
                v-bind:choices="questionarie.choices" 
                v-bind:userChoices="choices"
                v-bind:type="questionarie.type"
        />
      </div>

      <div class="question-block" v-if="!showResult">
        <Questions v-bind:questions="questionarie.questions" v-bind:currentQuestion="currentQuestionIndex()"/>
        <Choices v-if="!isStar()" v-bind:madeChoices="madeChoices" 
                 v-bind:choices="questionarie.choices" 
                 v-on:choice-made="choiceMade"
                 v-bind:type="questionarie.type"
        />
        <StarRating v-if="isStar()" v-bind:madeChoices="madeChoices" 
                 v-bind:choices="questionarie.choices" 
                 v-on:choice-made="choiceMade"
                 v-bind:type="questionarie.type"
        />
      </div>
    </div>
    <Next v-on:click="nextQuestion" v-if="!showResult"/>
  </div>
</template>

<script>

import Questions from '@/components/Questions'
import Choices from '@/components/Choices'
import Result from '@/components/Result'
import Next from '@/components/Next'
import StarRating from '@/components/StarRating'

export default {
  name: 'Questionarie',
  components: {
    Questions,
    Choices,
    Result,
    Next,
    StarRating
  },
  props: ['questionarie'],
  methods: {
    nextQuestion(){
      const len =  this.questionarie.questions.length
      this.currentQuestion++
      if(this.currentQuestion >= len){
        this.currentQuestion = 0
        this.showResult = true
      }
    },
    isStar(){
      return this.questionarie.type === "star"
    },
    currentQuestionId(){
      return this.questionarie.questions[this.currentQuestion].id
    },
    choiceMade(choiceId){
      this.choices = {
        ...this.choices, 
        ...{
          [this.currentQuestionId()]: choiceId
        }
      }

      this.nextQuestion()
    },
    currentQuestionIndex(){
      return this.currentQuestion
    }
  },
  computed: {
    madeChoices(){
      return this.choices[this.currentQuestionId()]
    }
  },
  data: () => ({
    currentQuestion: 0,
    showResult: false,
    choices: {}
  })
}
</script>


<style lang="scss" scoped>
  .container{
    flex: 1;
    display: flex;
    background: url(https://source.unsplash.com/daily) center center;
    background-size: cover;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
     flex-direction: column;
     align-items: stretch !important;
    }
  }

  .questionarie{
    flex-basis: 40%;
    max-width: 500px;
    flex: 1;
    @media only screen and (max-width: 600px) {
     flex-basis: unset;
     max-width: none;
    }
  }

  .title{
    padding: 5px;
    border-radius: 3px 3px 0 0;
    text-align: center;
    background: #6BBBE8;
    border-bottom: 1px solid #81D3FD;
    color: white;
  }

  .question-block{
    background: #48B0E3;
    padding: 7px;
  }
</style>