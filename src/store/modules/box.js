export default {
  state: {
    boxSpace: [
      {
        id: 1,
        cats: [],
        boxes: [],
        food: {
          image: 'fish',
          isEaten: false,
        },
      },
    ],
  },
  mutations: {
    addCatInBox(state, payload) {
      state.boxSpace.map((box) => findBoxById(box, payload.id))[0].cats.push(payload.cat)
    },
    addBoxInBox(state, payload) {
      state.boxSpace.map((box) => findBoxById(box, payload.id))[0].boxes.push(payload.box)
    },
    catEatFood(state, payload) {
      console.log(payload)
      state.boxSpace.map((box) => findBoxById(box, payload.id))[0].food.isEaten = true
    },
  },
  actions: {},
  getters: {
    getBoxSpace: (state) => {
      return state.boxSpace
    },
  },
}

function findBoxById(box, id) {
  if (box.id === id) {
    return box
  }

  const found = box.boxes.map((box) => findBoxById(box, id))
  return found.filter(Boolean)[0]
}
