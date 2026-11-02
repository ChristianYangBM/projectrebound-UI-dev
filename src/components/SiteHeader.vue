<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import BrandMark from './BrandMark.vue'
const open = ref(false)
const close = () => { open.value = false }
const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header class="site-nav-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <nav class="site-nav page-wrap" aria-label="Primary navigation">
      <RouterLink class="brand-link" to="/" aria-label="Rebound home" @click="close"><BrandMark /><span>REBOUND</span><small>A CONNECTED OPERATING<br>PLATFORM FOR BOOK RESELLERS</small></RouterLink>
      <button class="nav-toggle" type="button" :aria-expanded="open" aria-controls="nav-menu" aria-label="Toggle navigation" @click="open = !open"><span></span><span></span></button>
      <div id="nav-menu" class="site-nav-links" :class="{ open }">
        <RouterLink to="/product" @click="close">Product</RouterLink>
        <RouterLink to="/how-it-works" @click="close">Workflow</RouterLink>
        <RouterLink to="/features" @click="close">Resources</RouterLink>
        <RouterLink to="/login" @click="close">Log in</RouterLink>
        <RouterLink class="nav-cta" to="/early-access" @click="close">Get early access <span aria-hidden="true">→</span></RouterLink>
      </div>
    </nav>
  </header>
</template>
