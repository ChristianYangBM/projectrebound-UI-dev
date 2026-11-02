<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BrandMark from './BrandMark.vue'
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="marketing-footer"><div class="page-wrap footer-grid">
    <div class="footer-intro"><RouterLink class="brand-link inverse" to="/"><BrandMark /><span>REBOUND</span></RouterLink><p>Every book. Every decision. One connected business.</p></div>
    <div class="footer-links"><div><strong>Product</strong><RouterLink to="/product">Overview</RouterLink><RouterLink to="/features">Features</RouterLink><RouterLink to="/how-it-works">How it works</RouterLink></div><div><strong>Access</strong><RouterLink to="/early-access">Early access</RouterLink><RouterLink to="/login">Log in</RouterLink><RouterLink to="/privacy">Privacy</RouterLink></div></div>
    <p class="footer-meta">© {{ currentYear }} Rebound. Product in development.</p>
  </div></footer>
</template>
