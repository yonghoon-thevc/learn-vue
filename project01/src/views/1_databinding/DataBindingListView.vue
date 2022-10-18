<template>
  <div>
    <div>
      <select name="" id="">
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문 수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.drinkId" v-for="drink in drinkList">
            <th>{{ drink.drinkId }}</th>
            <th>{{ drink.drinkName }}</th>
            <th>{{ drink.price }}</th>
            <th><input type="number" name="" id="" v-model="drink.qty" /></th>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '음료2',
          price: 7030,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '음료3',
          price: 7010,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '음료4',
          price: 7030,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '음료5',
          price: 7200,
          qty: 1
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
