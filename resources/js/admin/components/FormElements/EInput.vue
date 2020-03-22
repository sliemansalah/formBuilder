<template>
  <div>
    <el-input 
    :clearable="clearable"
    :prefix-icon="icon"
    type="text"
    v-model="model" 
    :placeholder="placeholder" 
    @input="$emit('input',model)" />
  </div>
</template>

<script>
export default {
  props: ["placeholder","clearable","icon"],
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