<template>
  <div>
    <div
      class="modal fade"
      id="m_modal_5"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              v-if="customerFormStatus=='add'"
              class="modal-title"
              id="exampleModalLabel"
            >New Customer</h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">Edit Customer</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form-builder :config="formConfig"></form-builder>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              v-if="customerFormStatus=='add'"
              @click="save"
              data-dismiss="modal"
              type="button"
              class="btn btn-primary"
            >Add</button>
            <button
              v-else
              @click="update"
              data-dismiss="modal"
              type="button"
              class="btn btn-primary"
            >Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from "../../components/config/customerForm.json";

export default {
  props: {
    customerFormStatus: String,
    Config,
  },
  data() {
    return {
      customer: {
        name: "",
        age: 0,
        email: "",
        skills: {
          angular: false,
          react: false,
          vue: false
        },
        status: false
      }
    };
  },
  computed: {
    formConfig() {
      return Config;
    }
  },
  methods: {
    save() {
      this.customer = this.$children[0].formValues;
      this.$emit("save", this.customer);
      this.clear();
    },
    update() {
      this.customer = this.$children[0].formValues;
      this.$emit("update", this.customer);
      this.clear();
    },
    clear() {
      this.customer = {
        name: "",
        age: 0,
        email: "",
        skills: {
          angular: false,
          react: false,
          vue: false
        },
        status: false
      };
    }
  }
};
</script>

<style>
</style>