<template>
  <div>
    <el-form-item  :prop="valid">
    <el-input-number 
    :style="Inputstyle"
    :size="size"
    :show-password="isPassword"
    :clearable="clearable"
    :prefix-icon="icon"
    type="text"
    v-model="model" 
    :placeholder="placeholder" 
    @change="$emit('input',model)"
    :disabled="isDisabled" />
  </el-form-item>
  
  </div>
</template>

<script>
export default {
  props: ["placeholder","clearable","icon","isPassword","isDisabled","valid","size","width"],
  data() {
    return {
      model: ""
    };
  },
  computed:{
    Inputstyle(){
     return {
        width:this.width
     }
    }
  },
  mounted() {
    // console.log(this.placeholder)
  }
};
</script>

<style>
</style>