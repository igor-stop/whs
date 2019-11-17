<template>
  <div id="app">
    <img src="img/bc.jpg" alt="aa">
    <p>asdf</p>
    <h1>{{ firstName + ' ' + lastName }}</h1>
    <button @click="
                  firstName = randomInteger(fNames); 
                  lastName = randomInteger(lNames)" 
                  >Сгенерировать имя</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      firstName: 'Benedict',
      lastName: 'Cumberbetch',
      fNames: [
        'Бандерлог',
        'Беннихилл',
        'Бергамот',
        'Баралгин',
        'Бенефис',
        'Беломор',
        'Бандероль',
        'Будапешт',
        'Барбарис',
        'Баклажан',
        'Бабблгам',
        'Бекмамбет',
        'Бледножоп',
        'Бартикрауч',
        'Бамблби',
        'Бадминтон',
        'Букингем',
        'Баттлфилд',
        'Боромир',
        'Бугимен',
        'Бубенец',
        'Базилик',
        'Бенадрил',
        'Буббалех',
        'Бургеркинг',
        'Бранденбург',
        'Бандерштадт',
        'Бэтмобиль',
        'Бутират',
        'Барбекю',
        'Бондарчук',
        'Барабас',
        'Буккаке',
        'Бодибилд',
        'Бандикам',
        'Бандерснэч',
        'Батлшип',
        'Бутерброд',
        'Бегемот'
      ],
      lNames: [
        'Кукумбер',
        'Казантип',
        'Джонникэш',
        'Киберскотч',
        'Купидон',
        'Карабас',
        'Корвалол',
        'Кулумбэк',
        'Кандибобер',
        'Когтевран',
        'Коленвал',
        'Контерстрайк',
        'Глиномес',
        'Трахтенберг',
        'Драмнбейс',
        'Чеддерчиз',
        'Кабачок',
        'Комбикорм',
        'Канифоль',
        'Курткобейн',
        'Контрабас',
        'Ковралин',
        'Киберсвитч',
        'Каучсёрф',
        'Керосин',
        'Кардашьян',
        'Кантрисайд',
        'Кандидат',
        'Камуфляж',
        'Кантрироад',
        'Киндерсюрприз',
        'Калейдоскоп',
        'Кисегач',
        'Витамин',
        'Чикенстрипс',
        'Стикерпак',
        'Каламбур'
      ]
    }
  },
  methods: {
    randomInteger(arr) {
      var rand = Math.floor(Math.random() * arr.length);
      rand = Math.floor(rand);
      return arr[rand];
  }

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
