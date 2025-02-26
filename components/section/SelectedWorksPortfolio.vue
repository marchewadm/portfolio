<script setup lang="ts">
const route = useRoute();

const isMediumScreen = useMediaQuery("(min-width: 1024px)");

const { data: selectedWorks } = await useAsyncData(route.path, () => {
  return queryCollection("selectedWorks").order("createdAt", "DESC").all();
});
</script>

<template>
  <SectionSubPageBase class="w-full">
    <TypographyHeading
      id="section-selected-works-portfolio"
      class="mb-3 opacity-0"
      data-aos="fade-up"
    >
      Selected Works
    </TypographyHeading>
    <template v-if="selectedWorks">
      <template v-if="!isMediumScreen">
        <article
          v-for="(selectedWork, index) in selectedWorks"
          :key="selectedWork.path"
        >
          <TypographyTitle
            class="opacity-0"
            data-aos="fade-up"
          >
            {{ selectedWork.title }}
          </TypographyTitle>
          <TypographyParagraph
            class="text-foreground-lighter opacity-0"
            data-aos="fade-up"
          >
            {{ selectedWork.subtitle }}
          </TypographyParagraph>
          <div
            class="opacity-0"
            data-aos="fade-up"
          >
            <ul
              v-if="selectedWork.demoUrl || selectedWork.sourceCodeUrl"
              class="
                mt-2 flex flex-col gap-y-2 place-self-start

                md:gap-y-3
              "
            >
              <li v-if="selectedWork.demoUrl">
                <LinkIconExternal
                  icon-name="world-www"
                  title="Try out the demo in a new tab"
                  :href="selectedWork.demoUrl"
                >
                  Try out the demo
                </LinkIconExternal>
              </li>
              <li v-if="selectedWork.sourceCodeUrl">
                <LinkIconExternal
                  icon-name="brand-github"
                  title="Explore the source code on GitHub in a new tab"
                  :href="selectedWork.sourceCodeUrl"
                >
                  View source code on GitHub
                </LinkIconExternal>
              </li>
            </ul>
            <NuxtLink
              :to="selectedWork.path"
              class="group mb-2 mt-3 block overflow-hidden rounded-xl"
            >
              <NuxtImg
                class="
                  h-52 w-full rounded-xl object-cover grayscale transition-all
                  duration-300

                  group-focus-visible:scale-110 group-focus-visible:grayscale-0

                  hover:scale-110 hover:grayscale-0

                  lg:h-[500px]

                  md:mt-4 md:h-96
                "
                loading="lazy"
                :src="selectedWork.image"
                :alt="selectedWork.alt"
              />
            </NuxtLink>
          </div>
          <TypographyParagraph
            class="mb-3 text-justify opacity-0"
            data-aos="fade-up"
          >
            {{ selectedWork.description }}
          </TypographyParagraph>
          <div
            class="opacity-0"
            data-aos="fade-up"
          >
            <ButtonVariant
              class="
                mx-auto w-full

                md:w-fit
              "
              variant="secondary"
              :href="selectedWork.path"
              :title="`Read more about ${selectedWork.title}`"
            >
              More details
            </ButtonVariant>
          </div>
          <ul
            class="
              flex flex-wrap gap-2 pt-3 opacity-0

              md:pt-4
            "
            :class="{ 'border-b border-decorative mb-3 pb-3': index !== selectedWorks.length - 1 }"
            data-aos="fade-up"
          >
            <li
              v-for="(technology, idx) in selectedWork.technologies"
              :key="technology.name"
              data-aos="zoom-in"
              :data-aos-delay="idx * 100"
            >
              <ButtonTag
                variant="filled"
                class="inline-block"
                :href="technology.homepageUrl"
                :title="`Open the ${technology.name} website in a new tab`"
              >
                {{ technology.name }}
              </ButtonTag>
            </li>
          </ul>
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
              <TypographyTitle
                class="opacity-0"
                data-aos="fade-up"
              >
                {{ selectedWork.title }}
              </TypographyTitle>
              <TypographyParagraph
                class="text-foreground-lighter opacity-0"
                data-aos="fade-up"
              >
                {{ selectedWork.subtitle }}
              </TypographyParagraph>
              <ul
                v-if="selectedWork.demoUrl || selectedWork.sourceCodeUrl"
                class="
                  mt-2 flex flex-col gap-y-2 place-self-start

                  md:gap-y-3
                "
              >
                <li
                  v-if="selectedWork.demoUrl"
                  class="opacity-0"
                  data-aos="fade-up"
                >
                  <LinkIconExternal
                    icon-name="world-www"
                    title="Try out the demo in a new tab"
                    :href="selectedWork.demoUrl"
                  >
                    Try out the demo
                  </LinkIconExternal>
                </li>
                <li
                  v-if="selectedWork.sourceCodeUrl"
                  class="opacity-0"
                  data-aos="fade-up"
                >
                  <LinkIconExternal
                    icon-name="brand-github"
                    title="Explore the source code on GitHub in a new tab"
                    :href="selectedWork.sourceCodeUrl"
                  >
                    View source code on GitHub
                  </LinkIconExternal>
                </li>
              </ul>
              <TypographyParagraph
                class="my-3 text-justify opacity-0"
                data-aos="fade-up"
              >
                {{ selectedWork.description }}
              </TypographyParagraph>
              <div
                class="
                  mx-auto w-full opacity-0

                  md:w-fit
                "
                data-aos="fade-up"
              >
                <ButtonVariant
                  variant="secondary"
                  :href="selectedWork.path"
                  :title="`Read more about ${selectedWork.title}`"
                >
                  More details
                </ButtonVariant>
              </div>
            </div>
            <div
              class="flex flex-col opacity-0"
              :class="index % 2 !== 0 ? 'order-1' : 'order-2'"
              data-aos="fade-up"
            >
              <NuxtLink
                :to="selectedWork.path"
                class="group mb-3 overflow-hidden rounded-xl"
              >
                <NuxtImg
                  class="
                    h-80 w-full rounded-xl object-cover grayscale transition-all
                    duration-300

                    group-focus-visible:scale-110
                    group-focus-visible:grayscale-0

                    hover:scale-110 hover:grayscale-0
                  "
                  loading="lazy"
                  :src="selectedWork.image"
                  :alt="selectedWork.alt"
                />
              </NuxtLink>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="(technology, idx) in selectedWork.technologies"
                  :key="technology.name"
                  data-aos="zoom-in"
                  :data-aos-delay="idx * 100"
                >
                  <ButtonTag
                    variant="filled"
                    class="inline-block"
                    :href="technology.homepageUrl"
                    :title="`Open the ${technology.name} website in a new tab`"
                  >
                    {{ technology.name }}
                  </ButtonTag>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </template>
    </template>
  </SectionSubPageBase>
</template>
