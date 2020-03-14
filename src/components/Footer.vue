<template>
  <footer class="footer mt-auto py-3 border-top">
    <div class="row sitemap">
      <div class="col-6 col-md sitemap-col">
        <ul class="list-unstyled text-small">
          <h5>Menu</h5>
          <li>
            <a class="text-muted" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li>
            <a class="text-muted" href="/categories">Categories</a>
          </li>
          <li>
            <a class="text-muted" href="/random">Random</a>
          </li>
          <li>
            <a class="text-muted" href="/about">About</a>
          </li>
        </ul>
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

<style scoped>
.footer {
  bottom: 0;
  left: 0;
  right: 0;
  float: left;
  width: 100%;
}

#footer-credit {
  font-size: 12px;
}

.sitemap {
  text-align: left;
  margin-left: 15px;
}

.sitemap-col {
  margin-left: auto;
  margin-right: auto;
}
</style>
