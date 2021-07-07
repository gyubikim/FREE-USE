<template>
  <p>Full name : {{fullname}}</p>
  <button type="button" @click="changename">이름변경</button>
</template>

<script>


export default {
  data(){
    return {
      firstname:'Gyubi',
      lastname:'kim',
      fullname:''
    };
  },
  watch: {
    firstname() {
     this.fullname=this.firstname+' '+this.lastname;
    },
    lastname(){
     this.fullname=this.firstname+' '+this.lastname;
    }
  },
  methods:{
    changename(){
      this.firstname = 'Seoyoung';
    }
  }
  
};
</script>

