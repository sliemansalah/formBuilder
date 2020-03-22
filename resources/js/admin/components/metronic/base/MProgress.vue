<template>
  <div>
     <div class="progress">
	  <div class="progress-bar" 
      role="progressbar" 
      :style="SetStyle" 
      :aria-valuenow="val" 
      aria-valuemin="0" 
      aria-valuemax="100"></div>
	 </div>
  </div>
</template>

<script>
export default {
props:["val","bgClr"],
computed:{
    SetStyle(){
        return {
            width: this.val +"%",
            backgroundColor:this.bgClr
        }
    }
}
}
</script>

<style>

</style>