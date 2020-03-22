<template>
  <div>
      <h1>Dynamic form</h1>
      <form-builder 
      :config="formConfig"
      ></form-builder>
  </div>
</template>

<script>
import Config from '../../components/config/form.json';

export default {
name:"DynamicForm",
computed:{
    formConfig(){
        return Config;
    }
},
}
</script>

<style>

</style>