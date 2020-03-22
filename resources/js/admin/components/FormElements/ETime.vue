<template>
  <div>
    <el-form-item  :prop="valid">
    <el-time-picker 
    style="width:100%;"
     type="date" 
    :clearable="clearable"
    :prefix-icon="icon" 
    :placeholder="placeholder"
    :disabled="isDisabled" 
    v-model="model"
    @input="$emit('input',model)"
    ></el-time-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: ["placeholder","clearable","icon","isDisabled","valid"],
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