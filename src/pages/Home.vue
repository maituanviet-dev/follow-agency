<script setup>
import Layout from '../components/Layout.vue';
import Hero from '../components/sections/Hero.vue';
import HowWeGet from '../components/sections/HowWeGet.vue';
import HowWeWork from '../components/sections/HowWeWork.vue';
import Pricing from '../components/sections/Pricing.vue';
import WhyChooseUs from '../components/sections/WhyChooseUs.vue';
import FAQs from '../components/Faqs.vue';
</script>

<template>
  <Layout>
    <Hero />
    <HowWeWork />
    <HowWeGet />
    <WhyChooseUs />
    <Pricing />
    <FAQs :showNumber="4" />
  </Layout>
</template>
