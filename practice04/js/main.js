// Vue.component('my-component', {
//   data: function() {
//     return {
//       number: 12
//     }
//   },
//   template: '<p>いいね({{ number }})<button @click="pulus">+1</button></p>',
//   methods: {
//     pulus: function() {
//       this.number += 1
//     }
//   }
// });

var component = {
  data: function() {
    return {
      number: 12
    }
  },
  template: '<p>いいね({{ number }})<button @click="pulus">+1</button></p>',
  methods: {
    pulus: function() {
      this.number += 1
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'my-component': component
  }
});

new Vue({
  el: '#app2',
});
