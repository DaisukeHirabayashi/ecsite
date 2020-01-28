<template>
  <div class="purchaseform">
    <v-container pa-10>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <template v-for="(step, n) in smallStep">
            <v-stepper-step
              :key="`${n + 1}-step`"
              :complete="e1 > n + 1"
              :step="n + 1"
            >
              Step {{ n + 1 }}<small>{{ step }}</small>
            </v-stepper-step>

            <v-divider v-if="n + 1 !== steps" :key="n + 1"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            v-for="(formdata, n) in formData"
            :key="`${n + 1}-content`"
            :step="n + 1"
          >
            <v-card-title
              >{{ formdata.displayname }}を入力してください</v-card-title
            >
            <v-text-field
              :label="formdata.placeholder"
              v-model="formdata.formText"
              :rules="formdata.rules"
            >
            </v-text-field>
            <v-btn
              color="primary"
              :disabled="!formdata.formText"
              @click="nextStep(n + 1)"
            >
              Continue
            </v-btn>
            <v-btn v-if="n + 1 !== 1" text @click="previousStep(n + 1)"
              >Cancel</v-btn
            >
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card class="mb-12" height="200px" elevation="3">
              <v-card-title>確認画面</v-card-title>
              <v-card-text v-for="confirmData in formData" :key="confirmData"
                >{{ confirmData.displayname }}:{{
                  confirmData.formText
                }}</v-card-text
              >
            </v-card>
            <v-btn color="primary" @click="complete()">確定する</v-btn>
            <v-spacer />
            <v-btn color="red" @click="e1 = 1">
              Reset
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    formData: Array
  },
  data() {
    return {
      e1: 1,
      steps: 4,
      address: "",
      smallStep: ["配達先住所", "お届け希望日時", "電話番号", "確認画面"]
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },
  methods: {
    nextStep(n) {
      this.e1 = n + 1;
    },
    previousStep(n) {
      this.e1 = n - 1;
    },
    complete() {
      document.location.href = "./success";
    }
  }
};
</script>
