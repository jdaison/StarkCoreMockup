export default {
  components: {

  },
  props: {
   
  },
  data() {
    return {
      isHomeActive:false,
      isMsgActive: false,
      isWishListActive: false,
      isSettingActive: false,
      isMyAccountActive: false,
      clickItem: ''
    }
  },
  methods: {
    resetMenu(){
      this.isHomeActive= false
      this.isMsgActive= false
      this.isWishListActive= false
      this.isSettingActive= false
      this.isMyAccountActive= false
    },
    toggleMenu(event) {
      let targetId = event.currentTarget.id;
      switch (targetId) {
        case 'home':
          this.resetMenu()
          this.isHomeActive= true
          this.$router.push({ path: '/home' })
          break;
        case 'messages':
          this.resetMenu()
          this.isMsgActive= true
          this.$router.push({ path: '/messages' })
          break;
        case 'wishlist':
          this.resetMenu()
          this.isWishListActive = true         
          break;
        case 'settings':
          this.resetMenu()
          this.isSettingActive = true         
          break;
        case 'account':
          this.resetMenu()
          this.isMyAccountActive = true        
          break; 
        default:
          break;
      }
    },
  }
}