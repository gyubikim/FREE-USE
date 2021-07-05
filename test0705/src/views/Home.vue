<template>
  <div>
    <button @click="inputAmount(coin)" :key="coin" v-for="coin in coins">{{ coin }}원 투입</button>
    <br/>
    <label>음료자판기 잔돈:</label>
    <input type="text" v-model="total_vending_amount" readonly/>
    <label>투입금액:</label>
    <input type="text" v-model="total_input_amount" readonly/>
    <label>내지갑:</label>
    <input type="text" v-model="total_customer_amount" readonly/>
    <br/>
    <button :class="{active: drink.price <= total_input_amount}" 
    :key="drink.drinkId" v-for="drink in drinkList">
    {{drink.drinkName}} {{drink.price}}원, 재고수:{{drink.stock}}
    </button>
    <div
    style="
    width: 100%;
    height: 150px;
    overflow-y:auto;
    border: 2px solid #222;
    "
    >
    <p :key="i" v-for="(msg,i) in messsageList">{{msg}}</p>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      coins: [100,500,1000],
      total_vending_amount: 1000,
      total_input_amount:0,
      total_customer_amount:10000,
      messsageList:[],
      drinkList: [{

        drinkId: "1",

        drinkName: "코카콜라",

        price: 700,

        stock: 5

      },

      {

        drinkId: "2",

        drinkName: "오렌지주스",

        price: 1200,

        stock: 5

      },

      {

        drinkId: "3",

        drinkName: "커피",

        price: 500,

        stock: 5

      },

      {

        drinkId: "4",

        drinkName: "물",

        price: 700,

        stock: 5

      },

      {

        drinkId: "5",

        drinkName: "보리차",

        price: 1200,

        stock: 5

      },

      {

        drinkId: "6",

        drinkName: "포카리",

        price: 1000,

        stock: 5

      },

      {

        drinkId: "7",

        drinkName: "뽀로로",

        price: 1300,

        stock: 5

      }

    ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    inputAmount(amount) {
      if (amount <= this.total_customer_amount){
        this.total_input_amount+=amount;
        this.total_customer_amount -=amount;
        this.total_vending_amount +=amount;

        this.messsageList.push(`${amount} 이 투입되었습니다.`);
        this.messsageList.push(`총 투입 금액은 ${this.total_input_amount}입니다.`);
        this.messsageList.push(`당신의 지갑에는 ${this.total_customer_amount}이 남아 있습니다.`);
      } else {
        this.messsageList.push(`내 지갑에 남아 있는 돈이 ${this.total_customer_amount}입니다.`);
        this.messsageList.push(`${amount}를 투입할 수 없습니다.`);

      
       

      
    }
   
  },
  rwquestDrink(drinkId){

  }
};
</script>
<style  scoped>
.active {
  background-color: yellow;
}
</style>