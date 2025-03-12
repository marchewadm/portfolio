<template>
  <AccordionRoot
    class="flex w-full flex-col gap-y-3"
    type="single"
    :collapsible="true"
  >
    <nav
      v-for="section in NAVIGATION_DATA"
      :key="section.title"
      class="border-b pb-3 border-decorative"
    >
      <AccordionItem :value="section.title">
        <AccordionHeader as-child>
          <AccordionTrigger
            class="
              group flex w-full cursor-pointer items-center justify-between
            "
          >
            <TypographyTitle as-tag="span">
              {{ section.title }}
            </TypographyTitle>
            <IconAccordionToggle />
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
              <LinkMuted
                :href="link.href"
                :target="link.target"
                :title="link.title"
              >
                {{ link.text }}
              </LinkMuted>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </nav>
  </AccordionRoot>
</template>
