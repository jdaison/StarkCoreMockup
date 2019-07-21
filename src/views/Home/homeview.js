
import Car from "../../components/car/Car.vue";
export default {
  components: {
    Car,
  },
  data() {
    return {
      cars: [
        {
          id:1,
          posted:'2019-01-01',
          location: 'Medellin - Ant, 12345',
          price: 250
        },
        {
          id:2,
          posted: '2019-02-15',
          location: 'Bogotá - D.C, 67890',
          price: 300
        },
        {
          id:3, 
          posted: '2019-03-24',
          location: 'Cartagena - Bol, 54321',
          price: 100
        },
      ]
    }
  },
  methods: {
  }
};