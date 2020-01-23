<template>
  <div class="RegisterForm">
    <form class="p-3">
      <v-card-title>{{ formData.displayname }}</v-card-title>
      <v-text-field
        :label="formData.placeholder"
        v-model="formData.formText"
        :rules="formData.rules"
      >
      </v-text-field>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    formData: Object
  }
};
</script>
