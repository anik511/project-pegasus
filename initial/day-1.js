var app = new Vue({ 
  el: '#app',
  data: {
      message: false,
      input: null,
  },
  methods: {
    showMassage(){
      console.log('showMassage', this.input);
      this.message = !this.message;
    }
  }
});