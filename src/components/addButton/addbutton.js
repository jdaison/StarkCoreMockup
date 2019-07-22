
import { mapMutations } from 'vuex'

export default {
  components: {
    
  },
  props: {
   
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations([
      'showNewCar'
    ]),
    addCar: function () {
      this.showNewCar(true)
    }
  }
}