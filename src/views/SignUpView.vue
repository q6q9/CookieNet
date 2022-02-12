<template>
  <section class="p-0">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p
                    class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 d-flex justify-content-end align-items-center"
                  >
                    NEW Cookaa
                    <img
                      class="new-cookie"
                      src="/assets/img/cookies-svgrepo-com.svg"
                    />
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c"
                          >Your Name</label
                        >
                        <input
                          v-model="name"
                          placeholder="Cucumber"
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c"
                          >Your Email</label
                        >
                        <input
                          v-model="email"
                          placeholder="kiwi@hell.net"
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
                          v-model="password"
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd"
                          >Repeat your password</label
                        >
                        <input
                          v-model="passwordConfirm"
                          type="password"
                          id="form3Example4cd"
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
                        @click="signUp()"
                        type="button"
                        class="btn btn-primary btn-lg"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
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
import axios from "axios";

export default defineComponent({
  name: "SignUpView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    signUp() {
      let url = import.meta.env.VITE_API_URL;
      if (typeof url !== "string") {
        alert("Error: not exist API_URL");
        return;
      }

      interface AuthToken {
        token: string;
      }

      axios
        .post<AuthToken>(url + "/auth/sign-up", {
          name: this.name,
          email: this.email,
          password: this.password,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          let authToken = response.data;
          if (typeof authToken !== "string") {
            alert(123)
            return;
          }
          this.$cookies.set("authToken", authToken);
          this.$store.commit("setAuthToken", authToken);
        })
        .catch(function (error) {
          if (error.response.status === 422)
            alert(error.response.data.message)
        });
    },
  },
});
</script>
<style lang="scss" scoped>
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";

i {
  margin-top: 30px;
}

.new-cookie {
  width: 10vh;

  @media (min-width: 2000px) {
    width: 68px;
  }
}
</style>
