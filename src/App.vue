<script lang="ts">
import TemplateHeader from "@/components/templates/TemplateHeader.vue";
import PreLoader from "@/components/PreLoader.vue";
import { defineComponent } from "vue";

const APP_NAME = import.meta.env.VITE_APP_NAME;

export default defineComponent({
  name: "App",
  data() {
    return {
      isRouted: false,
    };
  },
  components: { PreLoader, TemplateHeader },
  mounted() {
    console.log(PreLoader);
    setTimeout(() => {
      this.isRouted = false;
    }, 1000);
  },
  watch: {
    $route() {
      this.isRouted = true;
      setTimeout(() => {
        this.isRouted = false;
      }, 1000);
    },
  },
});
</script>

<template>
  <div v-if="!isRouted" class="template">
    <div class="wrapper d-flex flex-column">
      <TemplateHeader />
      <main id="main">
        <section class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Inner Page</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Inner Page</li>
              </ol>
            </div>
          </div>
        </section>

        <section class="inner-page">
          <div class="container">
            <RouterView />
          </div>
        </section>
      </main>

      <footer id="footer">
        <div class="container footer-bottom clearfix py-4">
          <div class="copyright">
            &copy; Copyright <strong><span>CookieNet</span></strong
            >. All Rights Reserved 2022
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">evsvmx</a>
          </div>
        </div>
      </footer>
    </div>
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
  <div
    v-if="isRouted"
    style="
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 0;
      left: 0px;
      top: 0px;
    "
  >
    <PreLoader />
  </div>
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
