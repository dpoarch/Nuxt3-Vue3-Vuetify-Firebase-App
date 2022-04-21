<template>
<v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Nuxt3-Vuetify-Firebase-Auth</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col
             
              cols="12"
            >

            <div class="container mt-6" v-if="!firebaseUser">
              <div class="column is-half is-offset-one-quarter">
                <v-card class="mx-auto">
                <AuthFirebase
                  title="Register"
                  @submit="register"
                  :form="registerForm"
                  :message="registerMessage"
                  v-if="showRegisterForm"
                />
                </v-card>

                <v-card class="mx-auto">
                <AuthFirebase
                  title="Sign in"
                  @submit="signin"
                  :form="signinForm"
                  v-if="!firebaseUser && !showRegisterForm"
                />
                </v-card>
              </div>
              <div class="level">
                <div class="level-item has-text-centered">
                   <v-btn @click="showRegisterForm = !showRegisterForm">
                     {{ toggleButtonText }}
                   </v-btn>
                </div>
              </div>
            </div>
            <NuxtPage v-if="firebaseUser" />
           
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>

  <div>
    
  </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
const showRegisterForm = ref(false);
const registerMessage = ref();
const registerForm = ref({ email: "", password: "" });
const signinForm = ref({ email: "", password: "" });

const toggleButtonText = computed(() => {
  return showRegisterForm.value ? "Go to Sign in" : "Go to Register";
});

const signin = () => {
  signInUser(signinForm.value.email, signinForm.value.password);
  signinForm.value = { email: "", password: "" };
};

const register = async () => {
  console.log(registerForm.value);
  const credentials = await createUser(
    registerForm.value.email,
    registerForm.value.password
  );
  registerForm.value = { email: "", password: "" };

  if (credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`;
    setTimeout(() => {
      registerMessage.value = "";
    }, 3000);
  }
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
</style>
