<template>
  <div class="flex min-h-screen flex-col">
    <HeaderMain />
    <main class="flex flex-grow flex-col overflow-hidden">
      <slot />
    </main>
    <FooterMain />
  </div>
</template>
