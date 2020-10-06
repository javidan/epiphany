<template>
  <div>
    <div class="star-rating">
      <div class="rating">
        <span v-on:click="rate(5)">☆</span>
        <span v-on:click="rate(4)">☆</span>
        <span v-on:click="rate(3)">☆</span>
        <span v-on:click="rate(2)">☆</span>
        <span v-on:click="rate(1)">☆</span>
      </div>
      <div class="legend">
        <div class="left">Does Not fit at all</div>
        <div class="right">fits very well</div>
      </div>
    </div>
  </div>
</template>


<script>


export default {
  name: "StarRating",
  props:{
    choices: Array,
    madeChoices: Number,
  },
  components:{
  },
  data: ()=>({
    userChoices: []
  }),
  methods:{
    rate(rating){
      this.userChoices = [rating]
      this.submitChoice()
    },
    submitChoice(){
      const choices = [...this.userChoices]
      this.userChoices=[]
      this.$emit("choice-made", choices)
    }
  }
}
</script>

<style lang="scss" scoped>
.star-rating{
  padding: 30px 0;
  text-align: center;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: center;
  font-size: 40px;
  color: white;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
  cursor: pointer;
  margin-right: 15px;
}
.rating > span:hover,
.rating > span:hover ~ span {
  color: transparent;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
   left: 0; 
   color: gold;
}

.legend{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: white;
  margin-top: 7px;
}

</style>