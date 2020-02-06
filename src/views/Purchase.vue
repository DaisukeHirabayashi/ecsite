<template>
  <div class="purchase">
    <PurchaseForm :formData="formData" />
  </div>
</template>
<script>
import PurchaseForm from "../components/PurchaseForm.vue";
export default {
  components: {
    PurchaseForm
  },
  data() {
    return {
      formData: [
        {
          displayname: "配達先住所",
          formText: "",
          placeholder: "Address",
          rules: [v => !!v || "Address is required"]
        },
        {
          displayname: "お届け希望日時",
          formText: "",
          placeholder: "Deliver Day",
          rules: [v => !!v || "Deliver Day is required"]
        },
        {
          displayname: "電話番号",
          formText: "",
          placeholder: "Phone Number",
          rules: [v => !!v || "Phone Number is required"]
        }
      ]
    };
  }
};
</script>
