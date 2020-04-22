new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    number: 0,
    ok: false,
    html: '<h1>h1です</h1>',
    url: 'https://www.google.com/?hl=ja',
    x: 0,
    y: 0,
    event: 'click'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    },
    sayHi: function() {
      return this.message;
    },
    countUp: function() {
      this.number += 1;
    },
    changeMousePosition: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    myAlert: function() {
      alert('アラート！');
    }
  }
});
