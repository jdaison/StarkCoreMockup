
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
    }
  }
}