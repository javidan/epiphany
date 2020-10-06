<template>
  <div class="container">
    <Questionarie v-bind:questionarie="questinaries[0]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Questionarie from '@/components/Questionarie'

export default {
  name: 'Home',
  components: {
    Questionarie
  },
  methods: {
  },
  data: () => ({
    questinaries: [
      {
        id: 1,
        title: 'How you feel about this quote',
        questions: [
          {
            id: 1,
            title: 'thats no moon, thats space station...',
            image: require('@/assets/img_statement_1.png')
          },
          {
            id: 2,
            title: 'Use the force luke...',
            image: require('@/assets/img_statement_2.png')
          },
          {
            id: 3,
            title: 'may force be with you...',
            image: require('@/assets/img_statement_3.png')
          }
        ],
        type:"multiple",
        choices: [
          {
            id: 1,
            title: 'hiss',
            image: require('@/assets/img_cat_supersad.png')
          },
          {
            id: 2,
            title: 'meow',
            image: require('@/assets/img_cat_neutral.png')
          },
          {
            id: 3,
            title: 'frr',
            image: require('@/assets/img_cat_happy.png')
          }
        ]
      }
    ]
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
  }
</style>