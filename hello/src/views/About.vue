<template>
  <div class="about">
    <button @click="dianji">点击</button>
  </div>
  
</template>
<script>
   import api from '../../request/api'
   

export default {
  data () {
    return {
      
    }
  },
  methods: {
    dianji(){
    var params = {
          key: '01eecf5976fce06686e5f323d90b041e',
          num:'10'
        }
api.login(params).then(res=>{
  console.log(res)
})
     
    }
  }
}
</script>
