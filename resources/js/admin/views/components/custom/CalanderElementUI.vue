<template>
  <div>
      <el-calendar v-model="value"></el-calendar>
      <hr>
      <el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
<hr>
<el-calendar :range="['2020-02-04', '2020-02-24']">
</el-calendar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
<style>
.is-selected {
    color: #1989FA;
  }
</style>