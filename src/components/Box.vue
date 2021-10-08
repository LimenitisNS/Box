<template>
  <div class="Box">
    <div v-for="cat in box.cats" :key="cat.id">
      <span>{{ cat.name }}</span>
    </div>
    <Box v-for="innerBox in box.boxes" :key="innerBox.id" :box="innerBox" />
    <button class="add-button-cat" @click="eatFood">
      <img
        v-if="!box.food.isEaten"
        :src="require(`../assets/${box.food.image}.png`)"
        width="32"
        height="32"
      />
      <img v-else src="../assets/dish-washing.png" width="32" height="32" />
    </button>
    <button class="add-button-cat" @click="addCat">
      <img src="../assets/cat.svg" width="32" height="32" alt="cat" />
    </button>
    <button class="add-button-box" @click="addBox">
      <img src="../assets/box.svg" width="32" height="32" alt="box" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Box',
  props: {
    box: Object,
    default: () => ({}),
  },
  methods: {
    ...mapMutations(['addCatInBox', 'addBoxInBox', 'catEatFood']),
    addCat() {
      this.addCatInBox({
        id: this.box.id,
        cat: {
          id: Math.random().toString(36).substr(2),
          name: prompt('Имя кота'),
        },
      })
    },
    addBox() {
      const food = ['fish', 'sausage', 'sour-cream']

      this.addBoxInBox({
        id: this.box.id,
        box: {
          id: Math.random().toString(36).substr(2),
          cats: [],
          boxes: [],
          food: {
            image: food[Math.floor(Math.random() * 3)],
            isEaten: false,
          },
        },
      })
    },
    eatFood() {
      this.catEatFood({
        id: this.box.id,
      })
    },
  },
}
</script>

<style scoped>
.Box {
  width: 170px;
  min-height: 170px;
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
  background-color: white;
}

.add-button-cat {
  background: url('../assets/cat.svg') white;
}

.add-button-box {
  background: url('../assets/box.svg') white no-repeat;
}

.add-button-cat,
.add-button-box {
  margin-left: 5px;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>