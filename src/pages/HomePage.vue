<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MarketingLayout from '../components/MarketingLayout.vue'
import WaitlistForm from '../components/WaitlistForm.vue'

const stages = [
  { number: '01', title: 'Scan', note: 'Capture details from the physical book.', mark: '⌁' },
  { number: '02', title: 'Evaluate', note: 'Assess condition, edition, and estimated value.', mark: '≋' },
  { number: '03', title: 'Inventory', note: 'Keep every copy organized and in sync.', mark: '▤' },
  { number: '04', title: 'List', note: 'Publish offers to your marketplaces.', mark: '□' },
  { number: '05', title: 'Reprice', note: 'Stay competitive with pricing rules.', mark: '◇' },
  { number: '06', title: 'Sell', note: 'Track orders and manage fulfillment.', mark: '▧' },
]

const recordRows = [
  ['Edition', 'First edition · Sample'],
  ['Publisher', 'Independent press'],
  ['Condition', 'Very good (VG)'],
  ['Identifier', 'Sample record 001'],
  ['Est. value', '$42 — $58'],
  ['Provenance', 'Illustrative collection'],
]
</script>

<template>
  <MarketingLayout>
    <section class="catalogue-hero" aria-labelledby="home-title">
      <div class="catalogue-intro">
        <div class="lot-rule"><span>LOT 001</span><i></i><small>CONCEPT PREVIEW · SAMPLE DATA</small></div>
        <h1 id="home-title">Every book.<br>Every decision.<br><em>One connected<br>business.</em></h1>
        <p>Rebound is a connected operating platform for book resellers, following each physical book from scan through evaluation, inventory, listing, repricing, sale, and fulfillment.</p>
        <div class="catalogue-actions">
          <a class="button-primary" href="#early-access">Get early access <span aria-hidden="true">→</span></a>
          <small>CONCEPT PREVIEW · SAMPLE DATA<br>NOT A REAL LISTING</small>
        </div>
      </div>

      <figure class="specimen-figure">
        <div class="specimen-label"><span>LOT 001</span><small>LITERATURE — SAMPLE RECORD</small></div>
        <div class="book-stage">
          <p class="annotation annotation-top">Original dust jacket<br>(sample state)</p>
          <p class="annotation annotation-left">Visible wear,<br>small chips</p>
          <img src="/assets/rebound-rare-book.png" width="1024" height="1536" alt="A concept rendering of an aged navy collectible book with an Art Deco city illustration">
          <p class="annotation annotation-right">A distinctive copy.<br>One connected record.</p>
        </div>
        <figcaption>Illustrative product concept. Book details and values are sample data.</figcaption>
      </figure>

      <aside class="catalogue-record" aria-label="Illustrative book record">
        <div class="record-heading">
          <div><h2>The Night Archive</h2><p>Illustrative title</p></div>
          <span>CONCEPT<br>PREVIEW</span>
        </div>
        <dl>
          <div v-for="[term, description] in recordRows" :key="term"><dt>{{ term }}</dt><dd>{{ description }}</dd></div>
        </dl>
        <div class="record-lifecycle">
          <strong>Lifecycle</strong>
          <ol>
            <li class="complete">Scanned <time>Jan 12</time></li>
            <li class="complete">Evaluated <time>Jan 12</time></li>
            <li class="active">Added to inventory <time>Jan 13</time></li>
            <li>Listed <time>—</time></li>
            <li>Repriced <time>—</time></li>
            <li>Sold <time>—</time></li>
          </ol>
        </div>
      </aside>
    </section>

    <section class="catalogue-lifecycle" aria-label="The Rebound lifecycle">
      <article v-for="stage in stages" :key="stage.number">
        <div><span>{{ stage.number }}</span><h2>{{ stage.title }}</h2></div>
        <b aria-hidden="true">{{ stage.mark }}</b>
        <p>{{ stage.note }}</p>
      </article>
    </section>

    <section class="catalogue-story page-wrap">
      <div>
        <p class="story-label">THE CONNECTED RECORD</p>
        <h2>Follow the book,<br>not the software.</h2>
      </div>
      <div>
        <p>Scanning, pricing, inventory, listings, and fulfillment should not feel like separate businesses. Rebound keeps each decision attached to the same physical copy.</p>
        <RouterLink to="/product">Explore the product <span aria-hidden="true">→</span></RouterLink>
      </div>
    </section>

    <section id="early-access" class="catalogue-signup">
      <div class="page-wrap signup-grid">
        <div><span>PRIVATE PREVIEW LIST</span><h2>Be first in line<br>for the next lot.</h2><p>Join for product previews, build notes, and launch updates. No invented countdowns. No inbox clutter.</p></div>
        <div><WaitlistForm source="homepage_catalogue" /><small>Early product access is not guaranteed. We’ll only email you about Rebound.</small></div>
      </div>
    </section>
  </MarketingLayout>
</template>
