import { mapState, mapMutations, mapActions } from 'vuex'
import RULES from './rules'

export default {
  components: {
    
  },
  data() {
    return {
      rules: RULES,
      locations:[
        {
          id: 0,
          name: 'Medellin',
          region: 'Ant.'
        },
        {
          id: 1,
          name: 'Cali',
          region: 'Valle'
        },
        {
          id:2,
          name: 'Villavicencio',
          region: 'Meta'
        },
        {
          id:3,
          name: 'Bogotá',
          region: 'D.C.'
        },
      ],
      form : {
        posted: new Date(),
        location: '',
        price: null
      }
    }
  },
  methods: {
    ...mapMutations([
      'hideNewCar'
    ]),
    ...mapActions([             
      'addNewCar'
    ]),
    createCar() {
      this.$refs['form'].validate((valid) => {
        if(valid){
          this.addNewCar(this.form)
          this.hideCreateCar()
        }
      })
    },
    hideCreateCar() {
      this.hideNewCar()
    }
  },
  computed: {
    ...mapState(
    ['showNewCar']
    ),
  }
}