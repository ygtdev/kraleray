<template>
    <div class="flex flex-col gap-32">
        <div class="h-96 bg-center bg-[url(/banner.png)]">
            <div class="h-full w-full flex flex-col items-center justify-center bg-purple-800/20 backdrop-blur">
                <h1 class="text-8xl text-white font-medium">Kral Eray</h1>
                <p class="text-2xl text-white/80 font-medium">Sosyal Medya Hizmetleri</p>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div @click="PlaySound" v-tippy="{
                content: 'Bana Bas'
            }" class="flex items-center gap-5 hover:bg-gray-300 hover:scale-105 transition p-8 rounded-2xl cursor-pointer">
                <img src="/pp/eray.png" class="h-44 w-44 rounded-full">
                <div>
                    <h1 class="text-xl font-medium">Kenar Can Özeray</h1>
                    <h1 class="text-4xl font-bold">"Kalite Tecavü."</h1>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-5xl font-medium">Hizmetlerimiz</h1>
            <div class="mt-2 flex flex-col items-center">
                <p class="text-2xl text-gray-500/80 font-medium"><span class="text-black">-</span> Sizin için en uygun siyah popoyu bulabiliriz.</p>
                <p class="text-2xl text-gray-500/80 font-medium"><span class="text-black">-</span> Sizin için akşam 9-10 halı sahasına adam bulabiliriz.</p>
                <p class="text-2xl text-gray-500/80 font-medium"><span class="text-black">-</span> Sizin için bir Lüks Artvin bileti alabiliriz.</p>
                <div>
                    <p class="text-2xl text-gray-500/80 font-medium"><span class="text-black">-</span> Size istediğiniz ayak fotoğrafını atabiliriz. Örnekler;</p>
                    <div class="flex gap-2 justify-center">
                        <div class="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/ayak_1.png)]"></div>
                        <div class="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/ayak_2.png)]"></div>
                        <div class="h-24 w-24 rounded-lg bg-cover bg-center bg-[url(/ayak_3.png)]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Howl, Howler } from 'howler'

    export default {
        methods: {
            PlaySound() {
                new Howl({
                    src: ['/kalite.mp3']
                }).volume(0.5).play();
            }
        }
    }
</script>