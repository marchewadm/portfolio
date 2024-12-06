<script setup lang="ts">
const options = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {
    color: {
      value: COLORS.surface,
    },
  },
  particles: {
    color: {
      value: COLORS["decorative-lightest"],
    },
    links: {
      color: COLORS["decorative-lightest"],
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 50,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};
</script>

<template>
  <div class="absolute h-full w-full">
    <NuxtParticles
      id="ts-particles-link"
      class="h-full w-full"
      :options="options"
    />
  </div>
</template>
