<script lang="ts" setup>
const { $preview } = useNuxtApp();
const stage = $preview ? "DRAFT" : "PUBLISHED";
const { navigation } = await GqlNavigation({ stage });

const navigationItems = computed(() => {
  return navigation?.navigationItem;
});

function getUrl(item: any) {
  if (!item) {
    return false;
  }

  if (item.externalLink) {
    return item.externalLink;
  } else {
    if (item.page && item.page.slug === "home") {
      return "/";
    } else {
      return item.page?.slug || "";
    }
  }
}

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>
<template>
  <header
    class="px-6 xl:px-0 h-[120px] md:h-[160]px flex justify-between py-10 items-center relative z-10"
  >
    <nuxt-link to="/" aria-label="Home" class="block w-[330px] h-[80px]">
      <Logo class="hidden md:block w-[331px] h-[81px]" />
      <LogoMobile class="md:hidden w-[108px] mt-2" />
    </nuxt-link>

    <div class="flex items-center">
      <ul
        v-if="navigationItems"
        class="absolute top-[120px] text-center xl:text-left left-0 w-full z-20 bg-white xl:static xl:w-auto xl:bg-none xl:flex"
        :class="{ hidden: !open }"
      >
        <li>
          <LogoWords class="xl:hidden w-[215px] h-[36px] mx-auto mb-2" />
        </li>
        <li v-for="item in navigationItems" :key="item.id" class="py-3 xl:py-0">
          <nuxt-link
            v-if="item?.page || item?.externalLink"
            :to="getUrl(item)"
            :target="item.externalLink ? '_blank' : '_self'"
            class="font-bold text-xl leading-7 tracking-wide"
            :class="item.highlighted ? 'cta xl:mr-10' : 'xl:mr-10'"
          >
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link
        target="_blank"
        class="cta"
        v-if="navigation?.ticketsUrl"
        :to="navigation?.ticketsUrl"
      >
        {{ navigation?.ticketsLabel }}
      </nuxt-link>

      <button
        class="ml-8 nav-toggle relative w-16 h-[50px] bg-white xl:hidden transform transition duration-500 ease-in-out"
        :class="open ? 'open' : ''"
        @click="toggle()"
      >
        <span class="sr-only">Open main menu</span>
        <div class="block w-16 h-[50px]">
          <span
            class="line-1 translate-y-0 absolute block h-1 w-16 transform bg-primary transition duration-500 ease-in-out"
          ></span>
          <span
            class="line-2 translate-y-6 absolute block h-1 w-16 transform bg-primary transition duration-500 ease-in-out"
          ></span>
          <span
            class="line-3 translate-y-12 absolute block h-1 w-16 transform bg-primary transition duration-500 ease-in-out"
          ></span>
        </div>
      </button>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.nav-toggle.open {
  transform: translateY(18px);
}
.nav-toggle.open .line-1 {
  transform: rotate(45deg) translateY(0px);
}

.nav-toggle.open .line-2 {
  opacity: 0;
}

.nav-toggle.open .line-3 {
  transform: rotate(-45deg) translateY(0px);
}

a.router-link-active.router-link-exact-active {
  @apply !text-secondary !underline;
}
</style>
