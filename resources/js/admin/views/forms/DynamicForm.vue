<template>
  <div>
      <h1>Dynamic form</h1>
      <form-builder 
      :config="fields"
      ></form-builder>
  </div>
</template>

<script>
// import Config from '../../components/config/form.json';

export default {
name:"DynamicForm",
data(){
   return {
        fields: [
    {
        "type": "EInput",
        "label": "First Name",
        "name" :"firstname",
        "valid":"firstname",
        "placeholder":"Enter First Name",
        "icon":"el-icon-user-solid",
        "isDisabled":false,
        "size":"small"
    },
    {
        "type": "EInput",
        "label": "Last Name",
        "name" :"lastname",
        "valid" :"lastname",
        "placeholder":"Enter Last Name",
        "clearable":true,
        "size":"small"
    },
    {
        "type": "EInputNum",
        "label": "Age",
        "name" :"age",
        "valid":"age",
        "placeholder":"Enter Age",
        "clearable":true,
        "size":"small"
    },
    {
        "type": "EInput",
        "label": "Email",
        "name" :"email",
        "valid" :"email",
        "placeholder":"Enter Email",
        "clearable":false,
        "icon":"el-icon-message",
        "isDisabled":false,
        "size":"small"
    },
    {
        "type": "EInput",
        "label": "Password",
        "name" :"password",
        "valid":"password",
        "placeholder":"Enter Password",
        "clearable":true,
        "icon":"el-icon-key",
        "isPassword": true,
        "size":"small"
    },
    {
        "type": "EDate",
        "label": "Date",
        "name" :"date",
        "valid":"date",
        "placeholder":"Enter Date",
        "clearable":true,
        "icon":"el-icon-date"
    },
    {
        "type": "ETime",
        "label": "Time",
        "name" :"time",
        "valid":"time",
        "placeholder":"Enter Time",
        "clearable":true,
        "icon":"el-icon-time"
    },
    {
        "type": "ETextarea",
        "label": "Details",
        "name" :"details",
        "valid":"details",
        "size":"small",
        "placeholder":"Enter your details"
    },
    
    {
        "type": "ECheckbox",
        "label": "Do you like Vuejs?",
        "name" :"likeVue",
        "valid":"likeVue"
    },
    {
        "type": "ESwitch",
        "label": "Do you like AngularJs?",
        "name" :"likeAngular",
        "valid":"likeAngular",
        "activeColor":"#13ce66",
        "inActiveColor":"gray"
    },
    {
        "type": "ERadio",
        "label": "Best Framework",
        "name" :"bestframework",
        "valid":"bestframework",
        "params": {
            "options": [
                {
                    "value": "1",
                    "label": "VueJS"
                },
                {
                    "value": "2",
                    "label": "ReactJS"
                },
                {
                    "value": "3",
                    "label": "AngularJS"
                }
            ]
        }
    },

    {
        "type": "ESelect",
        "label": "Best Channels",
        "name" :"bestchannels",
        "valid":"bestchannels",
        "placeholder":"Select best channels",
        "clearable":true,
        "multiple":true,
        "search":true,
        "size":"small",
        "params": {
            "options": [
                {
                    "value": "1",
                    "label": "Maxiumeliano"
                },
                {
                    "value": "2",
                    "label": "ElzeroSchool"
                },
                {
                    "value": "3",
                    "label": "KhaledElsadani"
                }
            ]
        }
    },
    {
        "type": "EUpload",
        "label": "Upload file",
        "name" :"upload",
        "drag":true,
        "multiple":true,
        "autoUpload":false,
        "action":"post action here.."
    },
    {
        "type": "EAddMore",
        "label": "Add More",
        "name" :"addmore",
        "size":"small",
        "width":"300px",
        "placeholder":"Enter Name",
        "placeholder2":"Enter Age"
    }
    
]
   };
},
// computed:{
//     formConfig(){
//         return Config;
//     }
// },
}
</script>

<style>

</style>