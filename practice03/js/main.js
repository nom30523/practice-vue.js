// var vm1 = new Vue({
//   el: '#app1',
//   data: {
//     message: 'インスタンス１'
//   }
// });

// vm1.message = '書き換えられました'

// var vm2 = new Vue({
//   el: '#app2',
//   data: {
//     message: 'インスタンス２'
//   },
//   methods: {
//     changeMessage: function() {
//       vm1.message = 'インスタンス２から変えました'
//     }
//   }
// });


var data = {
  message: 'こんにちは',
  name: 'のむら'
}

var vm = new Vue({
  // el: '#app',
  data: data,
  computed: {
    myData: function() {
      return this.$data
    }
  },
  methods: {
    changeMessage: function() {
      this.message = '変えました'
    }
  }
});

vm.$mount('#app');
