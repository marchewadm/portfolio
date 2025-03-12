<script setup lang="ts">
import type { BaseButtonVariant, IconName } from "~/types/common";

type Props = BaseButtonVariant & IconName & {
  animation?: "bounce-right" | "spin";
};

const { animation } = defineProps<Props>();

const animationClasses = computed(() => ({
  "group-focus-visible:animate-bounce-right group-hover:animate-bounce-right": animation === "bounce-right",
  "animate-spin": animation === "spin",
}));
</script>

<template>
  <BaseButtonVariant
    class="group items-center gap-x-2"
    :href="href"
    :title="title"
    :variant="variant"
    :target="target"
  >
    <span>
      <slot />
    </span>
    <BaseIcon
      :icon-name="iconName"
      :class="animationClasses"
    />
  </BaseButtonVariant>
</template>
