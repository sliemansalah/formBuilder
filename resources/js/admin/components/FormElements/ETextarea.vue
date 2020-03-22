<template>
  <div>
    <el-input 
    type="textarea"
    :size="size"
    v-model="model" 
    :placeholder="placeholder" 
    @input="$emit('input',model)"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder","size"],
  data() {
    return {
      model: ""
    };
  },
};
</script>

<style>
</style>