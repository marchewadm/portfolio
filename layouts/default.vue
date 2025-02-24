<template>
  <div class="flex min-h-screen flex-col">
    <NavigationMainWrapper />
    <main class="flex flex-grow flex-col overflow-hidden">
      <slot />
    </main>
    <FooterWrapper />
  </div>
</template>
