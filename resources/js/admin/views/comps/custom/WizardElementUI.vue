<template>
  <div>
      
<div v-if="active<3">
    <el-steps :active="active" finish-status="success">
  <el-step title="Step 1" icon="el-icon-edit" description="Step1"></el-step>
  <el-step title="Step 2" icon="el-icon-upload" description="Step1"></el-step>
  <el-step title="Step 3" icon="el-icon-picture" description="Step1"></el-step>
</el-steps>

    <br>
      <el-card v-if="active==0">
          <h3>Step 1 start</h3>
      <p>this is step 1</p>
      </el-card>

  <el-card v-if="active==1">
          <h3>Step 2 start</h3>
      <p>Hello with step 2</p>
      </el-card>

        <el-card v-if="active==2">
          <h3>Step 3 start</h3>
      <p>Great! you are now on step 3</p>
      </el-card>

<el-button style="margin-top: 12px;" @click="next">Next step</el-button>
  </div>
  <div v-else>
      <h3>Steps Finish</h3>
      <el-button style="margin-top: 12px;" @click="next">Reset</el-button>
  </div>
      
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style>

</style>