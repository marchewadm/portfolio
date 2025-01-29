<script setup lang="ts">
const route = useRoute();

const isMediumScreen = useMediaQuery("(min-width: 1024px)");

const { data: selectedWorks } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").order("createdAt", "DESC").all();
});
</script>

<template>
  <SectionSubPageBase class="w-full">
    <TypographyHeading class="mb-3">
      Selected Works
    </TypographyHeading>
    <template v-if="selectedWorks">
      <template v-if="!isMediumScreen">
        <article
          v-for="(selectedWork, index) in selectedWorks"
          :key="selectedWork.path"
        >
          <TypographyTitle>
            {{ selectedWork.title }}
          </TypographyTitle>
          <TypographyParagraph class="text-foreground-lighter">
            {{ selectedWork.subtitle }}
          </TypographyParagraph>
          <div
            v-if="selectedWork.demoUrl || selectedWork.sourceCodeUrl"
            class="
              mt-2 flex flex-col gap-y-2 place-self-start

              md:gap-y-3
            "
          >
            <LinkIconExternal
              v-if="selectedWork.demoUrl"
              icon-name="world-www"
              :href="selectedWork.demoUrl"
            >
              Try out the demo
            </LinkIconExternal>
            <LinkIconExternal
              v-if="selectedWork.sourceCodeUrl"
              icon-name="brand-github"
              :href="selectedWork.sourceCodeUrl"
            >
              View source code on GitHub
            </LinkIconExternal>
          </div>
          <NuxtImg
            class="
              mb-2 mt-3 h-52 w-full rounded-xl object-cover grayscale
              transition-all duration-300

              hover:grayscale-0

              lg:h-[500px]

              md:mt-4 md:h-96
            "
            loading="lazy"
            :src="selectedWork.image"
            :alt="selectedWork.alt"
          />
          <TypographyParagraph class="mb-3 text-justify">
            {{ selectedWork.description }}
          </TypographyParagraph>
          <ButtonVariant
            class="
              mx-auto w-full

              md:w-fit
            "
            variant="secondary"
            :href="selectedWork.path"
          >
            Read more
          </ButtonVariant>
          <div
            class="
              flex flex-wrap gap-2 pt-3

              md:pt-4
            "
            :class="{ 'border-b border-decorative mb-3 pb-3': index !== selectedWorks.length - 1 }"
          >
            <ButtonTag
              v-for="technology in selectedWork.technologies"
              :key="technology.name"
              :href="technology.homepageUrl"
              render-as="link"
              variant="filled"
            >
              {{ technology.name }}
            </ButtonTag>
          </div>
        </article>
      </template>
      <template v-else>
        <div class="grid gap-y-12">
          <article
            v-for="(selectedWork, index) in selectedWorks"
            :key="selectedWork.path"
            class="grid grid-cols-2 grid-rows-1 gap-x-12"
          >
            <div
              class="flex flex-col"
              :class="index % 2 !== 0 ? 'order-2' : 'order-1'"
            >
              <TypographyTitle>
                {{ selectedWork.title }}
              </TypographyTitle>
              <TypographyParagraph class="text-foreground-lighter">
                {{ selectedWork.subtitle }}
              </TypographyParagraph>
              <div
                v-if="selectedWork.demoUrl || selectedWork.sourceCodeUrl"
                class="
                  mt-2 flex flex-col gap-y-2 place-self-start

                  md:gap-y-3
                "
              >
                <LinkIconExternal
                  v-if="selectedWork.demoUrl"
                  icon-name="world-www"
                  :href="selectedWork.demoUrl"
                >
                  Try out the demo
                </LinkIconExternal>
                <LinkIconExternal
                  v-if="selectedWork.sourceCodeUrl"
                  icon-name="brand-github"
                  :href="selectedWork.sourceCodeUrl"
                >
                  View source code on GitHub
                </LinkIconExternal>
              </div>
              <TypographyParagraph class="my-3 text-justify">
                {{ selectedWork.description }}
              </TypographyParagraph>
              <ButtonVariant
                class="
                  mx-auto w-full

                  md:w-fit
                "
                variant="secondary"
                :href="selectedWork.path"
              >
                Read more
              </ButtonVariant>
            </div>
            <div
              class="flex flex-col"
              :class="index % 2 !== 0 ? 'order-1' : 'order-2'"
            >
              <NuxtImg
                class="
                  mb-3 h-80 w-full rounded-xl object-cover grayscale
                  transition-all duration-300

                  hover:grayscale-0
                "
                loading="lazy"
                :src="selectedWork.image"
                :alt="selectedWork.alt"
              />
              <div class="mt-auto flex flex-wrap gap-2">
                <ButtonTag
                  v-for="technology in selectedWork.technologies"
                  :key="technology.name"
                  :href="technology.homepageUrl"
                  render-as="link"
                  variant="filled"
                >
                  {{ technology.name }}
                </ButtonTag>
              </div>
            </div>
          </article>
        </div>
      </template>
    </template>
  </SectionSubPageBase>
</template>
