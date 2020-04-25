new Vue({
  el: '#app',
  data: {
    ok: false,
    maybeOk: true,
    fruits: ['りんご', 'バナナ', 'ぶどう'],
    object: {
      firstName: '太郎',
      lastName: '田中',
      age: 27
    }
  },
  methods: {
    remove: function() {
      this.fruits.shift();
    }
  }
});