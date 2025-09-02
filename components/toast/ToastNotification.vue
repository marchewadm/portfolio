<script setup lang="ts">
const toastStore = useToastStore();

const { isToastOpen, toastMessage, toastType } = storeToRefs(toastStore);

const toastTitle = computed(() => toastType.value === "success" ? "Success!" : "Oh no! Something went wrong.");

const variantClasses = computed(() => ({
  "bg-white border border-decorative": toastType.value === "success",
  "bg-red-500 text-on-primary": toastType.value === "error",
}));
</script>

<template>
  <ToastProvider :duration="5000">
    <ToastRoot
      v-model:open="isToastOpen"
      class="
        grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md
        p-[15px]
        shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]

        [grid-template-areas:_'title_action'_'description_action']

        data-[state=closed]:animate-hide

        data-[state=open]:animate-slideIn

        data-[swipe=cancel]:translate-x-0
        data-[swipe=cancel]:transition-[transform_200ms_ease-out]

        data-[swipe=end]:animate-swipeOut

        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
      "
      :class="variantClasses"
    >
      <ToastTitle
        class="
          mb-1

          [grid-area:_title]
        "
      >
        <p class="font-medium tracking-tight">
          {{ toastTitle }}
        </p>
      </ToastTitle>
      <ToastDescription
        class="
          m-0

          [grid-area:_description]
        "
      >
        <p
          class="text-sm font-light tracking-tight"
        >
          {{ toastMessage }}
        </p>
      </ToastDescription>
      <ToastClose
        class="mb-1 flex items-center justify-center"
        aria-label="Close"
      >
        <BaseIcon
          icon-name="x"
          variant="sm"
          aria-hidden="true"
        />
      </ToastClose>
    </ToastRoot>

    <ToastViewport
      class="
        fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[450px] max-w-[100vw]
        list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none

        [--viewport-padding:_25px]
      "
    />
  </ToastProvider>
</template>
