<template>
  <footer class="footer mt-auto py-3 border-top">
    <div class="row sitemap">
      <div class="col-6 col-md sitemap-col">
        <div class="list-unstyled text-small">
          <h5>Menu</h5>
          <div class="navbar-nav">
            <router-link
              class="nav-link text-muted footer-nav"
              :to="{ name: 'Home' }"
              >Home<span class="sr-only">(current)</span></router-link
            >
            <router-link
              class="nav-link text-muted footer-nav"
              :to="{ name: 'Categories' }"
              >Categories</router-link
            >
            <router-link
              class="nav-link text-muted footer-nav"
              :to="{ name: 'Random' }"
              >Random</router-link
            >
            <router-link
              class="nav-link text-muted footer-nav"
              :to="{ name: 'About' }"
              >About</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-6 col-md sitemap-col">
        <h5>Connect</h5>
        <ul class="list-unstyled text-small">
          <li>
            <a class="text-muted" href="https://linkedin.com/in/ichmarah"
              >LinkedIn</a
            >
          </li>
          <li>
            <a class="text-muted" href="https://github.com/ichmarah">Github</a>
          </li>
          <li>
            <a class="text-muted" href="https://twitter.com/ichmarah"
              >Twitter</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div id="footer-credit">
      Developed by Ichmarah, {{ date.getFullYear() }}
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Footer extends Vue {
  date: Date = new Date()
}
</script>

<style lang="css" scoped>
.footer {
  left: 0;
  right: 0;
  float: left;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 2.5rem;
}

#footer-credit {
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer-nav {
  padding-bottom: 0;
  padding-top: 0;
}

.sitemap {
  text-align: left;
  margin-left: 12.5%;
  padding-bottom: 1px;
}

.sitemap-col {
  margin-left: auto;
  margin-right: auto;
}

/* Media query breakpoint */
@media (min-width: 768px) {
  .sitemap {
    margin-left: 0 !important;
    width: 250px;
  }
}
</style>
