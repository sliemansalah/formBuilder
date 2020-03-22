<template>
  <span v-if="bgClr" class="m-badge" :style="setBadgeStyle">
    <span :style="'color:'+clr">{{val}}</span>
  </span>
  <span  v-else class="m-badge m-badge--light m-badge--bordered m-badge-bordered--info" :style="setBadgeStyle">
    <span :style="'color:'+clr">{{val}}</span>
  </span>
</template>

<script>
export default {
props:['bgClr','val','clr','bdClr'],
data(){
return {
  colors:{
    danger:"#F4516C",
    success:'#2CA189',
    warning:'#FFB822',
    info:'#36A3F7',
    primary:'#5867DD',
    metal:'#ADAFC6',
    brand:'#564EC0',
    focus:'#840AD9',
  }
}
},
computed:{
  setBadgeStyle(){
    let bgClr = '';
    let bdClr = '';
    if(this.colors[this.bgClr] !=undefined){
        bgClr = this.colors[this.bgClr];
          return { backgroundColor:bgClr}
    }
    if(this.colors[this.bdClr] !=undefined){
        bdClr = this.colors[this.bdClr];
          return { borderColor:bdClr}
    }
    else if(this.bdClr){
      return { borderColor:this.bdClr} 
    }
    else {
      return { backgroundColor:this.bgClr}
    }
 
  }
}
  
}
</script>

<style>

</style>