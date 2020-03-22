<template>
  <div>
    <slot-child>
      <p>I'm injected content from the parent!</p>
      <p>I can still bind to data in the parent's scope, like this! 
    <span style="color:red;">{{myVariable}}</span>
    </p>

     <div slot="top">
            <h3>I am on top</h3>
            <el-button type="primary">Button top</el-button>
        </div>

        <div slot="bottom">
            <h3>I am on bottom</h3>
            <el-button type="success">Button bottom</el-button>
        </div>

    </slot-child>
  </div>
</template>

<script>
export default {
data() {
    return {
      myVariable: `I'm just a lonely old variable.`
    }
  }
}
</script>

<style>

</style>