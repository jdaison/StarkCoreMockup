import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [
      {
        id: 0,
        posted: new Date('2019-01-01'),
        location: 'Medellin - Ant, 12345',
        price: 250
      },
      {
        id: 1,
        posted: new Date('2019-02-15'),
        location: 'Bogotá - D.C, 67890',
        price: 300
      },
      {
        id: 2,
        posted: new Date('2019-03-24'),
        location: 'Cartagena - Bol, 54321',
        price: 100
      },
    ],
    showNewCar : false
  },
  mutations: {
    showNewCar(state) {
      state.showNewCar = true
    },
    hideNewCar(state) {
      state.showNewCar = false
    },
    addNewCar(state,value) {
      state.cars.push(value)
    },

  },
  getters: { 
    showNewCar: state => state.showNewCar,
    cars: state => state.cars,
    countCars: state => state.cars.length
  },
  actions: {
    addNewCar(context,value){
      context.commit('addNewCar', { ...value, id: context.getters.countCars})
    }
  }
});
