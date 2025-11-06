<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M63K7CJN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
</template>

<script setup>
import "@/assets/scss/main.scss";
import { onMounted } from "vue";
onMounted(() => {
  setTimeout(() => {
    window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'G-FQLNE5QQDP', {
    //   debug: true
    // });

    // gtag('event', 'page_view', { testing: "test" })
    // gtag('event', 'testing', { testing: "test" })
    window.dataLayer.push({ event: 'google-tag1', test: 'testing'});
    window.dataLayer.push({ event: 'hello', test: 'testing'});
  }, 5000);

})
useHead({
  script: [ { body: false, innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M63K7CJN');` }]
})
</script>
