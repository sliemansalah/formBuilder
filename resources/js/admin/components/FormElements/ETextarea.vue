<template>
  <div>
    <el-input 
    type="textarea"
    v-model="model" 
    :placeholder="placeholder" 
    @input="$emit('input',model)"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder"],
  data() {
    return {
      model: ""
    };
  },
};
</script>

<style>
</style>