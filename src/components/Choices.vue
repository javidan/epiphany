<template>
  <div>
    <div class="choices">
      <div class="option" v-bind:key="choice.id" v-for="choice in choices">
        <div class="choice" v-bind:class="{ active: isActiveChoice(choice.id) }" v-on:click="setChoice(choice)">
          <img v-bind:src="choice.image">
        </div>
        {{ choice.title }}
      </div>
    </div>
    <div class="submit" v-if="isMultiple()">
      <button v-on:click="submitChoice">Submit</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Choices",
  props:{
    choices: Array,
    madeChoices: Number,
    type: String
  },
  data: ()=>({
    userChoices: []
  }),
  methods:{
    isMultiple(){
      return this.type == "multiple"
    },
    submitChoice(){
      const choices = [...this.userChoices]
      this.userChoices=[]
      this.$emit("choice-made", choices)
    },
    setChoice(choice){
      let prevChoice = this.userChoices.indexOf(choice.id);
      if(prevChoice != -1){
        this.userChoices.splice(prevChoice, 1)  
      }else{
        this.userChoices.push(choice.id)
      }
      
      if(!this.isMultiple()) this.submitChoice()

    },
    isActiveChoice(choiceId){
      return this.userChoices.includes(choiceId) || this.choices.includes(choiceId)
    }
  }
}
</script>

<style lang="scss" scoped>

  .choices{
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .option{
    text-align: center;
    padding: 10px;
    color: white;
  }
  .active{
    background: rgb(221, 221, 221) !important;
  }
  .choice{
    width: 70px;
    height: 70px;
    background: white;
    border-radius: 7px;
    box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.53);
    cursor: pointer;

    &:hover{
      background: rgb(221, 221, 221);
    }

    >img{
      max-width: 100%;
    }
  }

  .submit{
    text-align: center;
    padding: 5px;

    >button, >button:focus{
      border: 0;
      outline: none;
      cursor: pointer;
      background: #F65486;
      border-radius: 5px;
      padding: 5px 10px; 
      color: white 
    }
  }


</style>