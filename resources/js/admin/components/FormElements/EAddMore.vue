<template>
  <div>
    <el-button @click="addnew()" type="success">
      <i class="fa fa-plus"></i> Add New
    </el-button>
    <br />
    <br />
    <div class="mt-15" v-for="(item,key) in list" :key="key">
      <el-input
        :style="Inputstyle"
        :size="size"
        :show-password="isPassword"
        :clearable="clearable"
        :prefix-icon="icon"
        type="text"
        v-model="item.val"
        :placeholder="placeholder"
        @input="$emit('input',list)"
        :disabled="isDisabled"
      />
      <el-input-number
        :style="Inputstyle"
        :size="size"
        :show-password="isPassword"
        :clearable="clearable"
        :prefix-icon="icon"
        :placeholder="placeholder2"
        type="text"
        v-model="item.val2"
        @change="$emit('input',list)"
        :disabled="isDisabled"
      />
      <el-rate 
      class="inline ml-15"
  v-model="item.val3"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>
      <i @click="remove(key)" class="fa fa-trash"></i>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: [
    "placeholder",
    "placeholder2",
    "clearable",
    "icon",
    "isPassword",
    "isDisabled",
    "valid",
    "size",
    "width"
  ],
  data() {
    return {
      list: [],
    };
  },
  computed: {
    Inputstyle() {
      return {
        width: this.width
      };
    }
  },
  methods: {
    addnew() {
      this.list.push({
        val: null,
        val2: null,
        val3:null
      });
    },
    remove(i) {
      this.list.splice(i, 1);
    }
  },
  mounted() {
    this.addnew();
  }
};
</script>

<style>
.inline{display: inline-block;}
.mt-15 {margin-top: 15px;}
.ml-15{margin-left: 15px;}
</style>