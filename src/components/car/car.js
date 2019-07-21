
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
  }
}