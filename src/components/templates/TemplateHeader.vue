<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <RouterLink
          to="/"
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <div class="d-flex">
            <img class="img-logo" src="/assets/img/cookie-svgrepo-com.svg" />
            <h1 class="logo">ookieNet</h1>
          </div>
        </RouterLink>
        <ul
          class="nav col-12 col-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <RouterLink to="/" class="nav-link px-2 text-secondary"
              >Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="nav-link px-2 text-secondary"
              >About
            </RouterLink>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <RouterLink to="/login" class="btn btn-outline-light me-2"
            >Login
          </RouterLink>
          <RouterLink to="/sign-up" class="btn btn-warning"
            >Sign-up
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TemplateHeader",
});
</script>

<style scoped></style>
