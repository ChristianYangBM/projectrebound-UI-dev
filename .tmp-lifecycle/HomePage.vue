<script setup lang="ts">
import MarketingLayout from '../components/MarketingLayout.vue'
import WaitlistForm from '../components/WaitlistForm.vue'

const stages = [
  { title: 'Scan', copy: 'One physical book is scanned for instant identification.' },
  { title: 'Evaluate', copy: 'Condition and value are evaluated with clear sample data.' },
  { title: 'Inventory', copy: 'The book joins live inventory with one unique record.' },
  { title: 'List', copy: 'It is prepared for connected storefronts in one flow.' },
  { title: 'Sell', copy: 'When it sells, fulfillment closes the loop.' },
]
</script>

<template>
  <MarketingLayout>
    <section class="factory-hero" aria-labelledby="factory-title">
      <div class="factory-heading">
        <h1 id="factory-title">Every book. One connected business.</h1>
        <i aria-hidden="true"></i>
        <p>Rebound is the lifecycle-driven operating platform for book resellers.<br>From intake to payout — all in one connected flow.</p>
      </div>

      <div class="factory-stage">
        <img src="/assets/rebound-lifecycle-factory.png" width="2048" height="819" alt="An illustrated cutaway book warehouse showing one used book moving through five operational stages">
        <ol class="factory-labels">
          <li v-for="stage in stages" :key="stage.title"><span>{{ stage.title }}</span></li>
        </ol>
      </div>

      <ol class="factory-explainer">
        <li v-for="(stage, index) in stages" :key="stage.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h2>{{ stage.title }}</h2>
          <p>{{ stage.copy }}</p>
        </li>
      </ol>

      <div class="factory-cta">
        <a class="button-primary" href="#lifecycle-access">Get early access <span aria-hidden="true">→</span></a>
        <small>CONCEPT PREVIEW · SAMPLE DATA</small>
      </div>
    </section>

    <section class="factory-thesis page-wrap">
      <div><span>ONE PHYSICAL COPY</span><h2>A continuous record,<br>from shelf to sale.</h2></div>
      <div><p>Each decision becomes part of the book’s operating history. The reseller sees where it came from, what it cost, where it is listed, how pricing changed, and how the sale finished.</p><a href="#lifecycle-access">Join the preview list →</a></div>
    </section>

    <section id="lifecycle-access" class="factory-signup">
      <div class="page-wrap factory-signup-grid">
        <div><span>EARLY ACCESS</span><h2>Bring your books<br>into one flow.</h2><p>Get product previews and launch updates as Rebound moves toward release.</p></div>
        <WaitlistForm source="lifecycle_option_homepage" />
      </div>
    </section>
  </MarketingLayout>
</template>
