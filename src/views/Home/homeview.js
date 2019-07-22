
import Car from "../../components/car/Car.vue";
import AddButton from "../../components/addButton/AddButton.vue";
import AddCar from "../../components/addCar/AddCar.vue";
import { mapState, mapGetters} from 'vuex'

export default {
  components: {
    Car, AddButton, AddCar
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapState([
      'cars',
      'showNewCar'
    ]),
    ...mapGetters([
      'countCars'
    ]),
  }
};