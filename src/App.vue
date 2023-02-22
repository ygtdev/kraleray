<template>
  <main>
    <Transition>
      <div
        v-show="ShowPopup"
        class="fixed h-full w-full flex items-center justify-center bg-black/80 z-50"
      >
        <div
          class="relative w-1/5 p-4 flex items-center gap-5 rounded-md bg-white"
        >
          <div
            @click="ShowPopup = false"
            class="absolute top-3 right-3 bg-red-500 h-5 w-5 rounded flex items-center justify-center cursor-pointer"
          >
            <i class="fa-solid fa-xmark text-white"></i>
          </div>
          <img src="/eray_19.png" class="h-24 w-24 rounded" />
          <div>
            <h1 class="text-xl font-bold text-red-600">
              Eray 19 yaşında ve 2km uzakta!!
            </h1>
            <p class="text-lg font-medium">Bebeğim yanıma gelsene. 👄</p>
          </div>
        </div>
      </div>
    </Transition>
    <nav class="h-16 px-96 flex items-center justify-between bg-purple-800">
      <a href="/" class="text-2xl text-white font-bold">Kral Eray</a>
      <div class="flex gap-6">
        <RouterLink to="/" class="text-white font-medium">Ana Sayfa</RouterLink>
        <RouterLink to="/news" class="text-white font-medium"
          >Haberler</RouterLink
        >
        <RouterLink to="/timer" class="text-white font-medium"
          >Zamanlayıcılar</RouterLink
        >
        <RouterLink to="/team" class="text-white font-medium"
          >Ekibimiz</RouterLink
        >
        <RouterLink to="/test" class="text-white font-medium"
          >Sen Hangisisin?</RouterLink
        >
      </div>
    </nav>
    <RouterView />
    <footer
      class="mt-32 py-16 flex flex-col items-center justify-center bg-neutral-900"
    >
      <h1 class="text-2xl text-white font-medium italic">
        "Oğlum senin kafanı döverim."
      </h1>
      <h1 class="text-white/60">
        <a
          href="https://discord.com/users/150612752610754560"
          target="_blank"
          class="text-emerald-600 underline"
          >COOL#0356</a
        >
        ve
        <a
          href="https://discord.com/users/479734218419601418"
          target="_blank"
          class="text-emerald-600 underline"
          >Euratis#1122</a
        >
        tarafından
        <a
          href="https://www.twitch.tv/eray"
          target="_blank"
          class="text-pink-600 underline"
          v-tippy="{
            content: 'Asla Tıklama',
          }"
          >erayın kalbi</a
        >
        kullanılarak geliştirildi.
      </h1>
    </footer>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      ShowPopup: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.ShowPopup = true;
    }, Math.round(Math.random() * 20000));
  },
};
</script>

<style>
body {
  font-family: "Rajdhani", sans-serif;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
