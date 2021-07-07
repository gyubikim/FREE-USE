<template>
  <p>Full name : {{fullName}}</p>
</template>

<script>


export default {
  data(){
    return {
      firstname:'Gyubi',
      lastname:'kim'
    };
  },
  computed: {
    fullName() {
      return this.firstname+' '+this.lastname;
    }
  }
  
};
</script>

