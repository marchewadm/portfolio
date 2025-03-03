<template>
  <nav
    v-for="section in NAVIGATION_DATA"
    :key="section.title"
  >
    <AccordionItem :value="section.title">
      <AccordionHeader as-child>
        <AccordionTrigger as-child>
          <div class="group flex cursor-pointer justify-between">
            <TypographyTitle>
              {{ section.title }}
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
            v-for="link in section.links"
            :key="link.text"
          >
            <ButtonNavigation
              :href="link.href"
              :target="link.target"
              :title="link.title"
            >
              {{ link.text }}
            </ButtonNavigation>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
    <div class="border-b pt-3 border-decorative" />
  </nav>
</template>
