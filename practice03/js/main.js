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


// var data = {
//   message: 'こんにちは',
//   name: 'のむら'
// }

// var vm = new Vue({
//   data: data,
//   computed: {
//     myData: function() {
//       return this.$data
//     }
//   },
//   methods: {
//     changeMessage: function() {
//       this.message = '変えました'
//     }
//   }
// });
// vm.$mount('#app');

// new Vue({
//   data: {
//     name: 'のむら'
//   },
//   template: '<h1>こんにちは{{ name }}さん</h1>'
// }).$mount('#app2');

// new Vue({
//   data: {
//     name: 'のむら'  
//   },
//   render: function(createElement) {
//     return createElement('h1', 'こんにちは' + this.name);
//   }
// }).$mount('#app3');

// new Vue({
//   data: {
//     name: 'のむら'  
//   },
//   beforeCreate: function() {
//     console.log('beforeCreate');
//   },
//   created: function() {
//     console.log('created');
//   },
//   beforeMount: function() {
//     console.log('beforeMount');
//   },
//   mounted: function() {
//     console.log('mounted');
//   },
//   beforeUpdate: function() {
//     console.log('beforeUpdate');
//   },
//   updated: function() {
//     console.log('updated');
//   },
//   beforeDestroy: function() {
//     console.log('beforeDestroy');
//   },
//   destroyed: function() {
//     console.log('destroyed');
//   },
//   methods: {
//     destroy: function() {
//       this.$destroy();
//     }
//   }
// }).$mount('#app4');

Vue.component('hello', {
  template: '<p>こんにちは</p>'
});

new Vue({
  el: '#app5'
});

new Vue({
  el: '#app6'
});

