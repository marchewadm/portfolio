<template>
  <div
    class="
      absolute h-full w-full

      [mask-image:_linear-gradient(to_bottom,_transparent_0,_white_60px,white_calc(100%-60px),_transparent_100%)]
    "
  >
    <NuxtParticles
      id="ts-particles-link"
      class="h-full w-full"
      :options="PARTICLES_CONFIG"
    />
  </div>
</template>
