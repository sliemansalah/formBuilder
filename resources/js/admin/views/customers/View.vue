<template>
  <div>
    <h3 class="m-subheader__title">Customers</h3>
      <button @click="filterShown=true" class="btn btn-success" v-if="!filterShown">Show Filters</button>
        <button @click="filterShown=false;" class="btn btn-danger" v-else>Hide Filters</button>
        <br><br>
      <v-filter v-if="filterShown" @filter="filterMe"></v-filter>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table striped bordered condensed"
      :search-options="search"
      :sort-options="sort"
      :pagination-options="page"
    >
      <div @click="add" slot="table-actions">
        <v-header  addbtn="Add Customers"></v-header>
      </div>

      <template slot="table-row" slot-scope="props">
        <component v-if="props.column.component" 
                   :is="tableRowComponent(props.column)"
                   :vprops="props"
                   @del="del"
                   @edit="edit">
                   </component>
        </template>

        <div slot="emptystate"
             class="text-center">
             <v-empty></v-empty>
         </div>
    </vue-good-table>

    <customer-form
      ref="customerForm"
      :customerFormStatus="customerFormStatus"
      @save="addNewCustomer"
      @update="updateCustomer"
    ></customer-form>
  </div>
</template>
<script>
import axios from "axios";
var _ = require("lodash");
export default {
  computed : {
  
  },
  data() {
    return {
      filterShown:false,
      search: {
        enabled: true,
        trigger: "enter",
        skipDiacritics: true,
        placeholder: "Search this table"
      },
      sort: {
        enabled: true,
        initialSortBy: [
          { field: "name", type: "asc" },
          { field: "age", type: "desc" }
        ]
      },
      page: {
        enabled: true,
        mode: "pages",
        perPage: 5,
        position: "down",
        perPageDropdown: [1, 5, 10],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: "Next",
        prevLabel: "Prev",
        rowsPerPageLabel: "Rows per page",
        ofLabel: "Of",
        pageLabel: "Page", // for 'pages' mode
        allLabel: "All"
      },
      customerFormStatus: "add",
      customers: [],
      customerID: null,
      local: false,
      searchQuery: "",
      columns: [
        {
          label: "ID",
          field: "id",
          type: "number",
        },
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Age",
          field: "age",
          type: "number",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Skills",
          field: "jsonSkills",
        },
        {
          label: "status",
          field: "status",
          component : "v-status",
          type:"number",
        },
        {
          label: "Actions",
          field: "actions",
          component : "v-action"
        }
      ],
      rows: []
    };
  },
  methods: {
      tableRowComponent (column){
      return column.component
    } ,
    getCustomers() {
      axios.get("/api/customers").then(res => {
        this.customers = res.data.data;
        this.customers.forEach(data => {
          delete data.skills;
          delete data.created_at;
          delete data.updated_at;
          data.jsonSkills = this.skillsFilter(data.jsonSkills);
        });
        this.rows = this.customers;
        this.filterData();
      });
    },
    filterData(){
      /* 
      Filters Examples:
      /customers?id=1
      /customers?name=so
      /customers?email=sli
      /customers?age=26
      /customers?jsonSkills=re
      /customers?status=1
      */
      let filters = []; 
        for(let q in this.$route.query) { 
         filters = [];
        this.rows.forEach(d => {
        if(d[q].toString().toLowerCase().includes(this.$route.query[q].toString().toLowerCase()) ) {
        filters.push(d)
        }
      });
      this.rows=filters;
        }
    },
    edit(res) {
      this.customerFormStatus = "edit";
      this.$refs.customerForm.clear();
      this.fillCustomer(res);
      this.customerID = res.id;
    },
    fillCustomer(res) {
      
      this.$refs.customerForm.customer.name = res.name;
      this.$refs.customerForm.customer.email = res.email;
      this.$refs.customerForm.customer.age = res.age;
      if (res.jsonSkills.includes("angular")) {
        this.$refs.customerForm.customer.skills.angular = true;
      }
      if (res.jsonSkills.includes("vue")) {
        this.$refs.customerForm.customer.skills.vue = true;
      }
      if (res.jsonSkills.includes("react")) {
        this.$refs.customerForm.customer.skills.react = true;
      }
      this.$refs.customerForm.customer.status = res.status;
    },
    del(row) {
      let id = row.id;
      swal({
        title: "Delete Customer",
        text: "Are you need delete customer",
        icon: "success",
        confirmButtonText: "<span>Yes</span>",
        showCancelButton: !0,
        cancelButtonText: "<span>No, thanks</span>"
      }).then(result => {
        if (result.value) {
          axios.delete("/api/customers/" + id).then(res => {
            swal(
              "Customer Remove",
              "Customer was removed successfully!",
              "info"
            );
            this.getCustomers();
          });
        }
      });
    },
    add() {
      this.customerID = null;
      this.customerFormStatus = "add";
      this.$refs.customerForm.clear();
    },
    filterMe(data){
      data[0].q!=='remove'?
      this.$router.push('/customers?'+data[0].q+'=' + data[0].filterString):
      this.$router.push('/customers');
      this.getCustomers();
    },
    addNewCustomer(data) {
      let customer_add = {
        name: data.name,
        age: data.age,
        email: data.email,
        skills: data.skills,
        status:data.status,
      };
      this.customers.push(customer_add);
      axios.post(`/api/customers`, customer_add).then(response => {
        swal("Add Customer!", "Customer Added Successfully!", "success");
        this.getCustomers();
      });
    },
    updateCustomer(data) {
      let customer_add = {
        name: data.name,
        age: data.age,
        email: data.email,
        skills: data.skills,
        status:data.status,
      };

      axios
        .put(`/api/customers/` + this.customerID, customer_add)
        .then(response => {
          swal("Update Customer!", "Customer Updated Successfully!", "success");
          this.getCustomers();
        });
    },
    skillsFilter(skills) {
      let data = "";
      _.forEach(skills, function(value, key) {
        if (value) {
          data += value + "/";
        }
      });
      data = data.substring(0, data.length - 1);
      return data;
    }
  },
  mounted() {
    this.getCustomers();    
  }
};
</script>

<style>
.custom-btn {
  padding: 7px 22px;
}
.w-200{
  width: 250px !important;
}
</style>
