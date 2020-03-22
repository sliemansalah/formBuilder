<template>
  <div>
    <el-form-item :prop="valid">
      <label v-for="(option,key) in options" :key="key">
        <el-radio
          v-model="radio"
          :label="option.value"
          @input="$emit('input',option.value)"
        >{{ option.label }}</el-radio>
      </label>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: ["name", "params","valid"],
  data() {
    return {
      radio: ""
    };
  },
  computed: {
    options() {
      return this.params.options;
    }
  }
};
</script>

<style>
</style>