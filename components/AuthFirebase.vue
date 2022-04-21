<template>
  <v-card-text>
    <p class="text-h4 text--primary mb-5">
        {{ title }}
      </p>
    <!-- <h2 class="mb-5 title is-4 has-text-black">{{ title }}</h2> -->
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
         <v-text-field
            v-model="form.email"
            type="email"
            hint="At least 8 characters"
            single-line
            label="user@gmail.com"
            placeholder="user@gmail.com"
            variant="outlined"
            autocomplete="false"
          ></v-text-field>
      </div>
    </div>
    <div class="field">
      <div>
        <label class="label">Password</label>
        <div class="control">


           <v-text-field
            v-model="form.password"
            type="password"
            hint="At least 8 characters"
            single-line
            label="Password"
            placeholder="Password"
            variant="outlined"
            autocomplete="false"
          ></v-text-field>
          
        </div>
      </div>
    </div>

    <div v-if="message" class="has-text-success p-3">
      {{ message }}
    </div>
    <v-card-actions>
      <v-btn
      size="large"
        variant="outlined"
        color="deep-purple accent-4"
        @click="$emit('submit')"
      >
        {{ title }}
      </v-btn>
    </v-card-actions>
  </v-card-text>
  
</template>

<script setup>
const props = defineProps({
  form: Object,
  title: String,
  message: String
});
</script>

<style scoped></style>