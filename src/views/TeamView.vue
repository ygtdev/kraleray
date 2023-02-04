<template>
    <div class="mt-32 flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold">Ekibimiz</h1>
        <p>(Varsa bakmasın kusura unuttuğum.)</p>
        <div class="mt-12 w-1/2 grid grid-cols-4 gap-3">
            <div v-for="(item, index) in Team" :key="index">
                <div v-if="item.sound" @click="PlaySound(item.sound)" v-tippy="{
                    content: 'Bana Bas'
                }" class="p-8 flex flex-col items-center gap-4 rounded-lg bg-gray-200 transition cursor-pointer hover:scale-105">
                    <div :style="{
                        backgroundImage: `url(/pp/${item.image})`
                    }" class="cursor-pointer h-32 w-32 rounded-full bg-cover"></div>
                    <div class="flex flex-col items-center">
                        <p class="leading-none text-sm">{{ item.role }}</p>
                        <h1 class="text-xl font-bold leading-none">{{ item.name }}</h1>
                    </div>
                </div>
                <div v-else class="p-8 flex flex-col items-center gap-4 rounded-lg bg-gray-200 transition cursor-pointer hover:scale-105">
                    <div :style="{
                        backgroundImage: `url(/pp/${item.image})`
                    }" class="cursor-pointer h-32 w-32 rounded-full bg-cover"></div>
                    <div class="flex flex-col items-center">
                        <p class="leading-none text-sm">{{ item.role }}</p>
                        <h1 class="text-xl font-bold leading-none">{{ item.name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    import { Howl, Howler } from 'howler'

    export default {
        data() {
            return {
                Team: [
                    {
                        name: 'Kenar Can Özeray',
                        role: 'Kurucu',
                        image: 'eray.png',
                        sound: 'eray.mp3'
                    },
                    {
                        name: 'Ebonivon',
                        role: 'İçerik Yöneticisi',
                        sound: 'ebo.mp3',
                        image: 'ebo.png'
                    },
                    {
                        name: 'Amberk',
                        role: 'Sağlıklı Yaşam Koçu',
                        sound: 'ayberk.mp3',
                        image: 'ayberk.png'
                    },
                    {
                        name: 'Lüks Artvin',
                        role: 'Lojistik Sorumlusu',
                        sound: 'luks_artvin.mp3',
                        image: 'luks_artvin.png'
                    },
                    {
                        name: 'Order',
                        role: 'Elektronik Kadın Sorumlusu',
                        image: 'order.png'
                    },
                    {
                        name: 'KF',
                        role: 'Bilgisayarcı',
                        image: 'kf.png'
                    },
                    {
                        name: 'BoneSaures',
                        role: 'Türkçe Öğretmeni',
                        sound: 'bone.mp3',
                        image: 'bone.png'
                    },
                    {
                        name: 'Hobbit Emo',
                        role: 'Profesyonel Oyuncu',
                        image: 'hobbitemo.png'
                    },
                    {
                        name: 'Koltuk',
                        role: 'Profesyonel Oyuncu',
                        image: 'koltuk.png'
                    },
                    {
                        name: 'Malatyalı Yaro',
                        role: 'Kadın Kolları Başkanı',
                        image: 'yaren.png'
                    },
                    {
                        name: 'Baran Kuş',
                        role: 'CikcikTV Kurucusu',
                        image: 'barankus.png'
                    },
                    {
                        name: 'Rahmican',
                        role: 'Kurt Adam',
                        image: 'rahmican.png'
                    },
                    {
                        name: 'BarisYTB',
                        role: 'NPC',
                        image: 'barisytb.png'
                    },
                    {
                        name: 'Ali Mert',
                        role: 'NPC',
                        image: 'alixmert.png'
                    },
                    {
                        name: 'Ali Çetinkaya',
                        role: 'Hızlı Ve Aceleci',
                        sound: 'alicetinkaya.mp3',
                        image: 'alicetinkaya.png'
                    }
                ]
            }
        },
        methods: {
            PlaySound(sound) {
                new Howl({
                    src: [`/sounds/${sound}`]
                }).volume(0.5).play();
            }
        }
    }
</script>