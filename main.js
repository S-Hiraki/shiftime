new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    currentTime: 'Error',
    timerObj: null,
    form_toggle: true,
    shift_H: 0,
    shift_M: 0,
    shift_S: 0,
  },
  methods: {
    updateTime(event) {
//      this.currentTime = moment().format("kk:mm:ss")
//      this.currentTime.add('hours', 5).format()
      this.currentTime = moment().add(this.shift_H, 'hours').add(this.shift_M,'minutes').add(this.shift_S, 'seconds').format("kk:mm:ss")
    },
    shitTime() {
//      this.currentTime.add('minutes', 5).format()
    },
    hideForm() {
      this.form_toggle = false
//      alert('DDDD')
    },
  },
  created(){
//    this.currentTime = moment().format("kk:mm:ss")
    setInterval(() => this.updateTime(), 200)
  }
})
