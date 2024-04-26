<script setup lang="ts">
const props = defineProps(["submitLabel", "title", "fields"]);

const { sessionThemes } = await GqlSessionThemes();

type Field = {
  id: string;
  label: string;
  required: boolean;
  name: string;
  placeholder: string;
  sessionTypeSelector: boolean;
  uploadImage: boolean;
};

const loading = ref(false);
const result = ref(false);

const enhancedFormData = props.fields.map((field: Field) => {
  return {
    ...field,
    val: "",
  };
});

const formData = ref(enhancedFormData);

async function formSubmit() {
  loading.value = true;
  const response = await $fetch("/api/session", {
    method: "POST",
    body: formData.value,
  });

  loading.value = false;
  if (response) {
    result.value = "Thank you for submitting your session.";
  }
}
</script>

<template>
  <div class="mb-10 p-12 mx-auto border border-primary max-w-screen-lg">
    <h3 v-if="title" class="text-3xl font-bold mb-12">
      {{ title }}
    </h3>

    <form @submit.prevent="formSubmit">
      <div class="mb-8" v-for="(field, index) in formData" :key="field.id">
        <label
          class="block text-xs mb-2"
          :class="{ 'text-neutral-400': result }"
        >
          {{ field.label }} <span v-if="field.required">*</span>
        </label>

        <template v-if="field.sessionTypeSelector">
          <select
            :name="field.name"
            :required="field.required"
            v-model="formData[index].val"
            :placeholder="field.placeholder"
            :disabled="result"
            class="w-full p-2 bg-neutral-50 rounded-sm border border-neutral-400 text-lg disabled:text-neutral-400 disabled:border-neutral-200"
          >
            <option disabled value="">{{ field.placeholder }}</option>

            <option
              v-for="theme in sessionThemes"
              :key="theme.id"
              :value="theme.id"
            >
              {{ theme.theme }}
            </option>
          </select>
        </template>
        <template v-if="!field.sessionTypeSelector">
          <input
            type="text"
            :name="field.name"
            :required="field.required"
            :disabled="result"
            v-model="formData[index].val"
            class="w-full h-12 px-3 py-4 bg-neutral-50 rounded-sm border border-neutral-400 text-lg disabled:text-neutral-400 disabled:border-neutral-200"
            :placeholder="field.placeholder"
          />
        </template>
      </div>
      <div class="mt-12 flex justify-end">
        <template v-if="!result">
          <button class="cta">
            <template v-if="loading">Sending...</template>
            <template v-else>{{ submitLabel }}</template>
          </button>
        </template>
        <template v-else>
          {{ result }}
        </template>
      </div>
    </form>
  </div>
</template>
