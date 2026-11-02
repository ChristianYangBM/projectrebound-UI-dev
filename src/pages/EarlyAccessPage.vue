<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BrandMark from '../components/BrandMark.vue'
import WaitlistForm from '../components/WaitlistForm.vue'
</script>
<template><div class="early-page"><header class="early-header page-wrap"><RouterLink class="brand-link" to="/"><BrandMark /><span>REBOUND</span></RouterLink><RouterLink class="back-link" to="/">Back to Rebound</RouterLink></header><main class="early-main page-wrap"><div><h1>A better way to run your book business is on the way.</h1><p>Join the early-access list for product previews, launch updates, and opportunities to help shape Rebound.</p><div class="early-form"><strong>Get launch updates and early access.</strong><WaitlistForm compact source="early_access" /></div><small>No spam. Unsubscribe anytime.</small></div><div class="early-books" aria-label="From scan to sale"><span>FROM SCAN</span><div><b>SCAN</b><i>9780465050659</i></div><div class="cobalt"><b>SOURCE</b><i>PROFIT + ROI</i></div><div><b>LIST</b><i>INVENTORY READY</i></div><div><b>SELL</b><i>ONE CONNECTED FLOW</i></div><p>One place to make the call, track the copy, and understand the result.</p></div></main></div></template>
