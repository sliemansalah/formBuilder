<template>
  <div>
    <el-form ref="ruleForm" :model="formValues" :rules="runValid?rules:null">
      <div v-for="(field, key) in config" :key="key">
        <label>{{ field.label }}</label>
        <!-- v-bind="field" inside component for bind all values -->

        <component
           v-bind="field"
          :is="field.type"
          @input="updateField(field.name, $event)"
        ></component>
      </div>
      <div>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ["config"],
  data() {
    return {
      runValid:false,
      formValues: {},
      rules: {
        firstname: [
          {
            required: true,
            message: "Please input First Name",
            trigger: "blur"
          },
          { min: 3, message: "Length should be at least 3", trigger: "blur" }
        ],
        lastname: [
          {
            required: true,
            message: "Please input Last Name",
            trigger: "blur"
          },
          { max: 10, message: "Length should be at most 10", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            message: "Please Input email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            pattern:
              "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
            message:
              "password must be characters and numbers with length 6 at least",
            trigger: "blur"
          }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        time: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change"
          }
        ],
        bestframework: [
          {
            required: true,
            message: "Please select best framework",
            trigger: "blur"
          }
        ],
        bestchannels: [
          {
            required: true,
            message: "Please select best channels",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    updateField(field, value) {
      this.formValues[field] = value;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(this.formValues);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    this.config.map(f => {
      Vue.set(this.formValues, f.name, null);
    });
  }
};
</script>

<style>
</style>