<template>
  <div>
      <div v-for="(field, key) in config" :key="key">
          <label>{{ field.label }}</label>
          <!-- v-bind="field" inside component for bind all values -->
          <component
          :isDisabled="field.isDisabled"
          :isPassword="field.isPassword"
          :icon="field.icon"
          :placeholder="field.placeholder"
          :clearable="field.isClear"
          :is="field.type"
          :name="field.name"
          :params="field.params"
          @input="updateField(field.name, $event)"
          :data-vv-as="field.label"
          >
          </component>
      </div>
      <div>
          <button 
          class="btn btn-primary"
          type="submit"
          @click="submit()"
          >Submit</button>
      </div>
<!-- 
      {{ formValues }} -->
  </div>
</template>

<script>
import Vue from 'vue';
import Input from '../FormElements/Input';
import EInput from '../FormElements/EInput';
import ETextarea from '../FormElements/ETextarea';
import ECheckbox from '../FormElements/ECheckbox';
import ERadio from '../FormElements/ERadio';

import Checkbox from '../FormElements/Checkbox';
import RadioButton from '../FormElements/RadioButton';

export default {
    props:['config'],
    data(){
        return {
            formValues:{}
        }
    },
    methods:{
        updateField(field,value){
            this.formValues[field] = value;
        },
        submit(){
            console.log(this.formValues);
        }
    },
    components:{
        EInput,
        ETextarea,
        ECheckbox,
        ERadio,
        Input,
        Checkbox,
        RadioButton
    },
    created(){
        this.config.map(f =>{
            Vue.set(this.formValues, f.name, null)
        })
    }
}
</script>

<style>

</style>