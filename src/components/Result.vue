<template>
  <div class="result-pane">
    <div class="result-status">
      <div class="finish">
      <font-awesome-icon size="3x" icon="check" :style="{ color: 'green' }"/>
      </div>
    </div>
    
    <div class="results">
      <h2 class="title">Your Answers</h2>
      <div v-for="result in results" :key="result.id">
        <div class="question"> {{ result.question}}</div>
        <div class="answer">
          <div v-if="isChoice()">
            {{result.answer}}  
          </div>

          <div v-if="!isChoice()">
            <div v-if="result.answer == -1">
              Not Answered
            </div>
            <div v-if="result.answer != -1">
              <span class="star selected" v-bind:key="n" v-for="n in result.answer">☆</span>
              <span class="star" v-bind:key="n+5" v-for="n in 5-result.answer">☆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Result",
  props: ["questions", "choices", "userChoices", "type"],
  methods: {
    isChoice(){
      return this.type != "star"
    },
    choiceAnswers(question){
      return this.choices.filter((choice) => this.userChoices[question.id] && this.userChoices[question.id].includes(choice.id))
                    .map((choice)=>choice.title).join(", ") || "Not Answered"
    },
    starAnswers(question){
      const choice = this.userChoices[question.id]
      return choice ? choice[0] : -1
    }
  },
  computed: {

   
    results(){
      
      const result = this.questions.map((question)=>({
        question: question.title,
        id: question.id,
        type: this.type,
        answer: this.isChoice() ? this.choiceAnswers(question) : this.starAnswers(question)
      }))

      return result
    }
  }
}
</script>

<style lang="scss" scoped>

.result-pane{
  background: #48B0E3;
  padding:25px 15px 3px 15px;
  
}
.result-status{
  display: flex;
  justify-content: center;
}
.finish{
  background: white;
  box-shadow: 0px 0px 14px 9px rgba(18,138,7,1);
  box-sizing: border-box;
  padding: 5px

}

.title{
  color: white;
  border-bottom: 1px dashed white;
  margin-bottom: 10px;
}
.results{
  margin: 30px 0;
  text-align: center;
}

.question{
  text-align: center;
  border-radius: 5px;
  background: white;
  margin-bottom: 4px;
  padding: 2px 4px;
  text-overflow: ellipsis;
}

.answer{
  display: inline-block;
  border-radius: 5px;
  background: #F65486;
  margin-bottom: 8px;
  padding: 2px 10px;
  color: white
}

.star{
  display: inline-block;
  margin-right: 3px;
  color: #d3809b;

  &.selected{
   color: gold;
  }
}

</style>