<template>
  <div>
    <el-input 
    :show-password="isPassword"
    :clearable="clearable"
    :prefix-icon="icon"
    type="text"
    v-model="model" 
    :placeholder="placeholder" 
    @input="$emit('input',model)"
    :disabled="isDisabled" />
  </div>
</template>

<script>
export default {
  props: ["placeholder","clearable","icon","isPassword","isDisabled"],
  data() {
    return {
      model: ""
    };
  },
  mounted() {
    // console.log(this.placeholder)
  }
};
</script>

<style>
</style>