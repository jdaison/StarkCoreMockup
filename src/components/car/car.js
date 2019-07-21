
export default {
  components: {
    
  },
  props: {
    posted: {
      required: true,
      type: Date,
    },
    location: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    }       
  },
  data() {
    return {

    }
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
      ).format( value )
    },
    formatDate(value) {
      return value.toLocaleDateString("en-US",
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}