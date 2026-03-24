<template>
  <div class="app-container world" id="world">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M63K7CJN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Rotation display -->
<!-- <div id="rotation-info">
  X <span id="rx-val">0°</span> &nbsp; Y <span id="ry-val">0°</span> &nbsp; Z <span id="rz-val">0°</span>
</div> -->

<!-- Gizmo -->
<!-- <div id="gizmo-container">
  <canvas id="gizmo-canvas" width="120" height="120"></canvas>
</div>

<button id="reset-btn">Reset</button> -->

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


const initMatrix = () => {
  // ── State ──────────────────────────────────────────────────────
  let rotX = 0, rotY = 0, rotZ = 0;
  const world = document.getElementById('world');
  const canvas = document.getElementById('gizmo-canvas');
  const ctx = canvas.getContext('2d');
  const rxVal = document.getElementById('rx-val');
  const ryVal = document.getElementById('ry-val');
  const rzVal = document.getElementById('rz-val');

  // ── Apply rotation ─────────────────────────────────────────────
  function applyRotation() {
    world.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
    rxVal.textContent = Math.round(rotX) + '°';
    ryVal.textContent = Math.round(rotY) + '°';
    rzVal.textContent = Math.round(rotZ) + '°';
    drawGizmo();
  }

  // ── Gizmo drawing ──────────────────────────────────────────────
  const CX = 60, CY = 60, R = 44;

  function project3D(x, y, z) {
    // Apply current rotation to get screen coords
    const rx = rotX * Math.PI / 180;
    const ry = rotY * Math.PI / 180;
    const rz = rotZ * Math.PI / 180;

    // Rotate around Y
    let x1 = x * Math.cos(ry) + z * Math.sin(ry);
    let y1 = y;
    let z1 = -x * Math.sin(ry) + z * Math.cos(ry);

    // Rotate around X
    let x2 = x1;
    let y2 = y1 * Math.cos(rx) - z1 * Math.sin(rx);
    let z2 = y1 * Math.sin(rx) + z1 * Math.cos(rx);

    // Rotate around Z
    let x3 = x2 * Math.cos(rz) - y2 * Math.sin(rz);
    let y3 = x2 * Math.sin(rz) + y2 * Math.cos(rz);

    return { sx: CX + x3 * R, sy: CY - y3 * R, depth: z2 };
  }

  const axes = [
    { dir: [1,0,0], neg: [-1,0,0], color: '#e85555', negColor: '#7a2222', label: 'X', negLabel: '-X' },
    { dir: [0,1,0], neg: [0,-1,0], color: '#7ac943', negColor: '#3a5a1a', label: 'Y', negLabel: '-Y' },
    { dir: [0,0,1], neg: [0,0,-1], color: '#4d9fff', negColor: '#1a3a7a', label: 'Z', negLabel: '-Z' },
  ];

  // Store clickable axis endpoints for interaction
  let axisEndpoints = [];

  function drawGizmo() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 120 * dpr;
    canvas.height = 120 * dpr;
    canvas.style.width = '120px';
    canvas.style.height = '120px';
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, 120, 120);

    // Background circle
    ctx.beginPath();
    ctx.arc(CX, CY, 52, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(20,20,20,0.85)';
    ctx.fill();
    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 1;
    ctx.stroke();

    axisEndpoints = [];

    // Collect all segments with depth for sorting
    const segments = [];

    for (const ax of axes) {
      const tip = project3D(...ax.dir);
      const neg = project3D(...ax.neg);
      const origin = { sx: CX, sy: CY, depth: 0 };

      segments.push({ from: origin, to: tip, color: ax.color, label: ax.label, isNeg: false, axis: ax });
      segments.push({ from: origin, to: neg, color: ax.negColor, label: ax.negLabel, isNeg: true, axis: ax });

      axisEndpoints.push({ sx: tip.sx, sy: tip.sy, label: ax.label, rotTarget: ax.dir });
      axisEndpoints.push({ sx: neg.sx, sy: neg.sy, label: ax.negLabel, rotTarget: ax.neg });
    }

    // Sort by depth (paint back to front)
    segments.sort((a, b) => a.to.depth - b.to.depth);

    for (const seg of segments) {
      // Line
      ctx.beginPath();
      ctx.moveTo(seg.from.sx, seg.from.sy);
      ctx.lineTo(seg.to.sx, seg.to.sy);
      ctx.strokeStyle = seg.color;
      ctx.lineWidth = seg.isNeg ? 1.5 : 2.5;
      ctx.globalAlpha = seg.isNeg ? 0.4 : 1;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Dot at tip
      const dotR = seg.isNeg ? 5 : 8;
      ctx.beginPath();
      ctx.arc(seg.to.sx, seg.to.sy, dotR, 0, Math.PI * 2);
      ctx.fillStyle = seg.color;
      ctx.globalAlpha = seg.isNeg ? 0.35 : 1;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Label
      if (!seg.isNeg) {
        ctx.font = `600 9px "JetBrains Mono", monospace`;
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(seg.label, seg.to.sx, seg.to.sy);
      }
    }

    // Center dot
    ctx.beginPath();
    ctx.arc(CX, CY, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#888';
    ctx.fill();
  }

  // ── Gizmo click to snap to axis ────────────────────────────────
  const snapTargets = {
    'X':  { x: 0,   y: -90, z: 0  },
    '-X': { x: 0,   y: 90,  z: 0  },
    'Y':  { x: 90,  y: 0,   z: 0  },
    '-Y': { x: -90, y: 0,   z: 0  },
    'Z':  { x: 0,   y: 0,   z: 0  },
    '-Z': { x: 180, y: 0,   z: 0  },
  };

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    for (const ep of axisEndpoints) {
      const dist = Math.hypot(mx - ep.sx, my - ep.sy);
      if (dist < 14) {
        const target = snapTargets[ep.label];
        if (target) animateSnap(target.x, target.y, target.z);
        return;
      }
    }

    // Click on gizmo area but not an axis — allow drag on gizmo
  });

  // ── Gizmo drag ─────────────────────────────────────────────────
  let gizmoDragging = false;
  let gizmoLastX = 0, gizmoLastY = 0;

  canvas.addEventListener('mousedown', (e) => {
    gizmoDragging = true;
    gizmoLastX = e.clientX;
    gizmoLastY = e.clientY;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!gizmoDragging) return;
    const dx = e.clientX - gizmoLastX;
    const dy = e.clientY - gizmoLastY;
    gizmoLastX = e.clientX;
    gizmoLastY = e.clientY;

    rotY += dx * 0.5;
    rotX -= dy * 0.5;
    applyRotation();
  });

  window.addEventListener('mouseup', () => { gizmoDragging = false; });

  // ── Touch support for gizmo ────────────────────────────────────
  let touchLastX = 0, touchLastY = 0;

  canvas.addEventListener('touchstart', (e) => {
    touchLastX = e.touches[0].clientX;
    touchLastY = e.touches[0].clientY;
    gizmoDragging = true;
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!gizmoDragging) return;
    const dx = e.touches[0].clientX - touchLastX;
    const dy = e.touches[0].clientY - touchLastY;
    touchLastX = e.touches[0].clientX;
    touchLastY = e.touches[0].clientY;
    rotY += dx * 0.5;
    rotX -= dy * 0.5;
    applyRotation();
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchend', () => { gizmoDragging = false; });

  // ── Smooth snap animation ──────────────────────────────────────
  function animateSnap(tx, ty, tz) {
    const startX = rotX, startY = rotY, startZ = rotZ;
    const duration = 400;
    const start = performance.now();

    function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const e = ease(t);
      rotX = startX + (tx - startX) * e;
      rotY = startY + (ty - startY) * e;
      rotZ = startZ + (tz - startZ) * e;
      applyRotation();
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // ── Reset ──────────────────────────────────────────────────────
  document.getElementById('reset-btn').addEventListener('click', () => {
    animateSnap(0, 0, 0);
  });

  // ── Init ───────────────────────────────────────────────────────
  applyRotation();
}

// onMounted(() => initMatrix());


</script>

<style lang="scss">
@import "style/main.scss";
  /* ── Blender Gizmo ── */
  #gizmo-container {
    position: fixed;
    top: 7rem;
    right: 2rem;
    z-index: 1000;
    user-select: none;
  }

  #gizmo-canvas {
    width: 120px;
    height: 120px;
    cursor: pointer;
  }

</style>