<template>
  <div>
    <el-button @click="type='card'" type="primary">Card</el-button>
    <el-button @click="type='border-card'" type="success">Border Card</el-button>
<br><br>
  <el-tabs :type="type" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
data() {
      return {
        activeName: 'first',
        type:'card'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>

</style>