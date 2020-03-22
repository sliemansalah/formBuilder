<template>
  <div>
    <el-form-item :prop="valid">
      <el-switch
        v-model="model"
        :active-color="activeColor"
        :inactive-color="inActiveColor"
        @input="$emit('input',model)"
      ></el-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: [
    "activeColor",
    "inActiveColor",
    "valid",
  ],
  data() {
    return {
      model: false
    };
  },
};
</script>

<style>
</style>