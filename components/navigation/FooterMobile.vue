<script setup lang="ts">
type Props = {
  sectionName: string;
  sectionId: string;
  links: Array<{
    name: string;
    href?: string;
    target?: string;
  }>;
};

const { links } = defineProps<Props>();

const normalizedLinks = links.map(({ name, href = "#", target = "_self" }) => ({
  name,
  href,
  target,
}));
</script>

<template>
  <nav>
    <AccordionItem :value="sectionId">
      <AccordionHeader as-child>
        <AccordionTrigger as-child>
          <div class="group flex cursor-pointer justify-between">
            <TypographyTitle>
              {{ sectionName }}
            </TypographyTitle>
            <IconBase
              class="
                text-decorative transition-transform duration-300

                group-data-[state=open]:rotate-180
              "
              icon-name="chevron-down"
            />
          </div>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="
          overflow-hidden

          data-[state=closed]:animate-slide-up

          data-[state=open]:animate-slide-down
        "
      >
        <ul class="mt-3 grid grid-cols-2 gap-2">
          <li
            v-for="link in normalizedLinks"
            :key="link.name"
          >
            <NuxtLink
              class="font-light tracking-tight text-foreground-lighter"
              :to="link.href"
              :target="link.target"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <div class="border-b pt-3 border-decorative" />
  </nav>
</template>
