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
    event: 'click',
    isActive: true,
    color: 'red',
    bg: 'bg-blue',
    styleObject: {
      color: 'red',
      'background-color': 'blue'
    },
    baseObject: {
      fontSize: '60px'
    }
  },
  computed: {
    lessThanThree: function() {
      return this.number > 3 ? '3より上' : '3以下';
    },
    classObject: function() {
      return {
        red: this.isActive,
        'bg-blue': !this.isActive
      }
    }
  },
  watch: {
    number: function() {
      const vm = this;
      setTimeout(function() {
        vm.number = 0
      }, 3000)
    }
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
