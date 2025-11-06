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
  gtag('js', new Date());

  gtag('config', 'G-FQLNE5QQDP', {
    debug: true
  });

  gtag('event', 'page_view', { testing: "test" })
  gtag('event', 'testing', { testing: "test" })
}, 5000);

useHead({
  title: "Testing",
  script: [{ src: "https://www.googletagmanager.com/gtag/js?id=G-FQLNE5QQDP" }]
})
</script>
