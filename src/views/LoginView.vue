<template>
  <section class="p-0">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div
                  class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 div-form"
                >
                  <p
                    class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 d-flex justify-content-center align-items-center"
                  >
                    Hi Cookaa
                    <img
                      class="donut"
                      src="/assets/img/donut-doughnut-sweet-dessert-food-fastfood-svgrepo-com.svg"
                    />
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c"
                          >Email</label
                        >
                        <input
                          v-model="form.email"
                          placeholder="banana@paradise.net"
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                        <input
                          v-model="form.password"
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                      <router-link to="/" class="text-decoration-none">
                        Forgot your password?
                      </router-link>
                    </div>

                    <div class="d-flex justify-content-center mb-3 mb-lg-4">
                      <button
                        @click="signIn"
                        type="button"
                        class="btn btn-outline-dark btn-lg"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-end flex-column order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="img-fluid"
                    alt="Phone image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type UserSignInForm from "@/forms/UserSignInForm";
import axios from "axios";
import AuthService from "@/services/AuthService";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      form: {} as UserSignInForm,
    };
  },
  methods: {
    signIn() {
      axios
        .post<string>("/auth/sign-in", {
          ...this.form,
        })
        .then((response) => {
          const authToken = response.data;
          AuthService.setAuthTokenInCookies(authToken);
          AuthService.setUserByAuthToken(authToken);
        })
        .catch(function (error) {
          if (error.response.status === 422) alert(error.response.data.message);
          else if (error.response.status === 401)
            alert("Incorrect email or password");
          else
            alert(
              `Unknown error: ${error.response.status} - ${
                error.response.data.message ||
                JSON.stringify(error.response.data.message)
              }`
            );
        });
    },
  },
});
</script>
<style lang="scss" scoped>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";

form {
  position: relative;
  z-index: 4;
}

.div-form {
  min-height: 59vh;
}

.card-body {
  max-height: 600px;
  @media (max-width: 1000px) {
    max-height: 900px;
  }
}

i {
  margin-top: 30px;
}

input {
  position: relative;
  z-index: 3;
}

.donut {
  position: relative;
  z-index: 2;
  width: 100px;
  transform: rotate(260deg);
}

.img-fluid {
  margin-left: -200px;
  @media (max-width: 1000px) {
    margin-right: 50px;
    position: relative;
  }
  @media (min-width: 2000px) {
    width: 600px;
    position: relative;
  }
  width: 60%;
  z-index: 1;
  position: absolute;
}

.new-cookie {
  width: 10vh;

  @media (min-width: 2000px) {
    width: 68px;
  }
}
</style>
