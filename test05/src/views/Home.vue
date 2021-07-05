<template>
<input type="text" v-model.number="num1">
<input type="text" v-model="num1">
<button @click="changeValue()">값 변경</button>
<select v-model="city" @change="getSelectValue">
  <option value="02">서울</option>
  <option value="064">제주</option>
  <option value="022">부산</option>
</select>
<button @click="getSelectValue">셀렉트시티버튼</button>
<!-- <div>선택한 지역:{{selCity}}</div> -->
 <img v-bind:src="logo">
 <textarea v-model="msg"></textarea>
 <input type="text" v-model="txt1">
 <button v-bind:disabled="txt1==''">조회</button>
 <div><img v-bind:src="main"></div>
 <div v-html="htmlString0"></div>
 <div v-html="htmlString1"></div>
  <div><img v-bind:src="pink"></div><br><div><img v-bind:src="Yellow"></div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      logo: "https://cdn.shopify.com/s/files/1/0231/6137/2752/files/logo_410x.jpg?v=1573431073",
    main:"https://i.shgcdn.com/011108a3-b3e0-4e62-9627-9b8ab27c0d00/-/format/auto/-/preview/3000x3000/-/quality/best/",
    htmlString0:"<h2>New Collections</h2>",
    htmlString1:"<p>Cuteness Overload</p>",
    pink:"https://i.shgcdn.com/8cc96055-9d7e-4c90-acc3-42b2d15ca9c8/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    yellow:"https://i.shgcdn.com/f59dc46f-2d28-4990-84a3-e7be636a925c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    msg:"여러 줄을 입력할 수 있는 텍스트 에리아 테스트박스당~!",
    txt1:"",
    city:"064",
    
    // selCity:[],
    getSelectValue(){
      console.log(this.city);
    }
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeValue(){
      this.txt1="dslfhsdihf";
    }
  },
};
</script>