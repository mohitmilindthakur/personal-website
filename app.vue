<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
import "@/assets/scss/main.scss";
setTimeout(() => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('ecommerce_purchase', new Date());

  gtag('purchase', 'testing');
});

useHead({
  title: "Testing",
  script: [{ src: "https://www.googletagmanager.com/gtag/js?id=G-FQLNE5QQDP" }]
})
</script>
