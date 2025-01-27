<template>
  <div class="flex min-h-screen flex-col">
    <NavigationMainWrapper />
    <main class="flex flex-grow flex-col">
      <slot />
    </main>
    <FooterWrapper />
  </div>
</template>
