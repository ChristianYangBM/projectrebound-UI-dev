<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BrandMark from './components/BrandMark.vue'
import WaitlistForm from './components/WaitlistForm.vue'

const menuOpen = ref(false)
const currentYear = new Date().getFullYear()

const features = [
  { icon: 'scan', title: 'Fast ISBN Scanning', text: 'Evaluate books quickly with barcode, ISBN, and planned Bluetooth scanner support.' },
  { icon: 'pulse', title: 'Real-Time Market Insights', text: 'Compare pricing, offers, rank, velocity, and Buy Box signals in one focused view.' },
  { icon: 'calc', title: 'Profit & ROI Calculations', text: 'Model estimated fees, net profit, and ROI before deciding what belongs in your cart.' },
  { icon: 'box', title: 'Inventory Management', text: 'Track condition, storage location, receiving, and each book’s inventory lifecycle.' },
  { icon: 'tag', title: 'Listing & Repricing Tools', text: 'Support FBA and merchant-fulfilled listing workflows with future automated repricing.' },
  { icon: 'chart', title: 'Analytics & Team Workflows', text: 'Understand sourcing performance and coordinate teams across multiple locations.' },
]

const workflow = ['Scan', 'Evaluate', 'Purchase', 'Inventory', 'List', 'Sell']

function closeMenu() { menuOpen.value = false }
function handleKey(event: KeyboardEvent) { if (event.key === 'Escape') closeMenu() }
onMounted(() => window.addEventListener('keydown', handleKey))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))
</script>

<template>
  <div class="site-shell">
    <header class="nav-shell">
      <nav class="nav container" aria-label="Main navigation">
        <a href="#top" class="wordmark" aria-label="Rebound home" @click="closeMenu"><BrandMark />REBOUND</a>

        <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
          <span></span><span></span>
        </button>

        <div id="mobile-menu" class="nav-links" :class="{ open: menuOpen }">
          <a href="#features" @click="closeMenu">Features</a>
          <a href="#how-it-works" @click="closeMenu">How It Works</a>
          <a href="#early-access" @click="closeMenu">Early Access</a>
          <a href="#early-access" class="button small" @click="closeMenu">Join Waitlist <span>→</span></a>
        </div>
      </nav>
    </header>

    <main id="top">
      <section class="hero container">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span> Built for book resellers</p>
          <h1>Scan smarter.<br />Source better.<br /><em>Sell more.</em></h1>
          <p class="hero-lede">Meet Rebound—the next-generation platform being designed to help book resellers scan inventory, evaluate profitability, manage listings, and grow their business. All in one place.</p>
          <WaitlistForm compact source="hero" />
          <p class="microcopy">Coming soon. Join the waitlist to be among the first to know.</p>
        </div>

        <div class="product-stage reveal delay-1" aria-label="Concept preview of the planned Rebound scanning experience">
          <div class="concept-label">CONCEPT PREVIEW</div>
          <div class="app-window">
            <div class="app-bar">
              <span class="app-logo"><BrandMark /> REBOUND</span>
              <span class="status-dot">Scanner connected</span>
            </div>
            <div class="app-content">
              <aside>
                <span class="aside-active"><i></i>Scan</span>
                <span><i></i>Inventory</span>
                <span><i></i>Listings</span>
                <span><i></i>Analytics</span>
              </aside>
              <div class="scan-panel">
                <div class="scan-header"><div><small>LAST SCAN</small><strong>The Design of Everyday Things</strong><p>Don Norman · ISBN 9780465050659</p></div><span class="decision">BUY</span></div>
                <div class="metric-grid">
                  <div><small>BUY COST</small><strong>$4.00</strong></div>
                  <div><small>LIST PRICE</small><strong>$24.95</strong></div>
                  <div class="accent"><small>EST. PROFIT</small><strong>$11.48</strong></div>
                  <div><small>ROI</small><strong>287%</strong></div>
                </div>
                <div class="market-row"><span>Marketplace snapshot</span><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><strong>Strong</strong></div>
                <div class="scan-action"><span class="barcode">▥ ▥▥ ▥ ▥▥▥ ▥</span><button>Scan next book <span>→</span></button></div>
              </div>
            </div>
          </div>
          <div class="floating-stat stat-profit"><small>Estimated net</small><strong>+$11.48</strong><span>after fees</span></div>
          <div class="floating-stat stat-rank"><small>Sales signal</small><strong>Strong</strong><span>market velocity</span></div>
        </div>
      </section>

      <section class="tool-problem section-pad">
        <div class="container">
          <div class="section-heading centered">
            <p class="eyebrow centered-eye"><span></span> ONE CONNECTED WORKFLOW</p>
            <h2>Book reselling shouldn’t require five different tools.</h2>
            <p>Scanning, price research, profitability math, inventory, and listings are often split across disconnected apps. Rebound is being built to bring the workflow together.</p>
          </div>
          <div class="solution-grid">
            <article><span class="card-number">01</span><div class="icon-tile">⌁</div><h3>Scan with Confidence</h3><p>Quickly evaluate books using marketplace information, pricing insights, and estimated profitability.</p></article>
            <article><span class="card-number">02</span><div class="icon-tile">▦</div><h3>Manage Everything</h3><p>Organize inventory, track books through their lifecycle, and simplify day-to-day operations.</p></article>
            <article><span class="card-number">03</span><div class="icon-tile">↗</div><h3>Grow with Better Data</h3><p>Use sourcing insights, performance metrics, and analytics to make better business decisions.</p></article>
          </div>
        </div>
      </section>

      <section id="features" class="features section-pad container">
        <div class="section-heading split-heading">
          <div><p class="eyebrow"><span></span> PLANNED CAPABILITIES</p><h2>Everything you need.<br />One platform.</h2></div>
          <p>Rebound is being designed as the connected operating system for serious book-reselling workflows—from the first scan through the final sale.</p>
        </div>
        <div class="feature-grid">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-top"><span class="feature-icon" :data-icon="feature.icon"></span><span class="planned">PLANNED</span></div>
            <h3>{{ feature.title }}</h3><p>{{ feature.text }}</p>
          </article>
        </div>
      </section>

      <section id="how-it-works" class="workflow-section section-pad">
        <div class="container">
          <div class="section-heading centered light-heading">
            <p class="eyebrow centered-eye"><span></span> THE FULL LIFECYCLE</p>
            <h2>From first scan to final sale.</h2>
            <p>Rebound is being built to support the entire book-resale process—not just the moment a barcode is scanned.</p>
          </div>
          <div class="workflow" role="list" aria-label="Planned Rebound workflow">
            <div v-for="(step, index) in workflow" :key="step" class="workflow-step" role="listitem">
              <span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step }}</strong><i v-if="index < workflow.length - 1">→</i>
            </div>
          </div>
        </div>
      </section>

      <section id="early-access" class="waitlist-section section-pad">
        <div class="waitlist-glow"></div>
        <div class="container waitlist-inner">
          <div class="section-heading centered light-heading">
            <p class="eyebrow centered-eye"><span></span> EARLY ACCESS</p>
            <h2>Be first to Rebound.</h2>
            <p>We’re building something new for the book-reselling community. Join for product updates, launch announcements, and opportunities to help shape Rebound.</p>
          </div>
          <WaitlistForm source="early_access" />
        </div>
      </section>
    </main>

    <footer>
      <div class="container footer-inner">
        <div><a href="#top" class="wordmark"><BrandMark />REBOUND</a><p>Give every book another chapter.</p></div>
        <div class="footer-links"><a href="#" aria-label="Privacy Policy placeholder">Privacy Policy <small>(coming soon)</small></a><span>Contact <small>(address coming soon)</small></span></div>
        <p class="copyright">© {{ currentYear }} Rebound. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
