<template>
    <div class="mt-32 flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold">Zamanlayıcılar</h1>
        <p>(Bunlar sadece ibaret halüsinasyondan bir.)</p>
        <div>
            <div v-for="(item, index) in Timers" :key="index" class="mt-12 flex items-center gap-6">
                <img :src="item.img" class="h-32 rounded">
                <div>
                    <h1 class="text-2xl font-medium">{{ item.label }}</h1>
                    <h1 class="w-80">{{ item.timerText }}</h1>
                </div>
            </div>
            <!-- <div class="mt-12 flex items-center gap-6">
                <img src="/traktor.png"  class="h-32">
                <div>
                    <h1 class="text-2xl font-medium">Traktör çekilişine kalan süre;</h1>
                    <h1>13 gün, 16 saat, 23 dakika, 47 saniye</h1>
                </div>
            </div>
            <div class="mt-12 flex items-center gap-6">
                <img src="/luks_artvin.png" class="h-32 rounded">
                <div>
                    <h1 class="text-2xl font-medium">Lüks Artvin çekilişine kalan süre;</h1>
                    <h1>13 gün, 16 saat, 23 dakika, 47 saniye</h1>
                </div>
            </div>
            <div class="mt-12 flex items-center gap-6">
                <img src="/siyah_popo.png" class="h-32 rounded">
                <div>
                    <h1 class="text-2xl font-medium">Siyah popo çekilişine kalan süre;</h1>
                    <h1>13 gün, 16 saat, 23 dakika, 47 saniye</h1>
                </div>
            </div>
            <div class="mt-12 flex items-center gap-6">
                <img src="/ruzgar_gulu.png" class="h-32 rounded">
                <div>
                    <h1 class="text-2xl font-medium">Rüzgar gülü çekilişine kalan süre;</h1>
                    <h1>13 gün, 16 saat, 23 dakika, 47 saniye</h1>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script lang="js">
    import moment from 'moment'

    export default {
        data() {
            return {
                Timers: [
                    {
                        label: 'Traktör çekilişine kalan süre;',
                        img: 'traktor.png',
                        date: 'Sun Dec 24 2023 05:27:56 GMT+0300 (GMT+03:00)',
                        timerText: ''
                    },
                    {
                        label: 'Lüks Artvin çekilişine kalan süre;',
                        img: 'luks_artvin.png',
                        date: 'Wed Aug 09 2023 05:07:16 GMT+0300 (GMT+03:00)',
                        timerText: ''
                    },
                    {
                        label: 'Siyah popo çekilişine kalan süre;',
                        img: 'siyah_popo.png',
                        date: 'Sat Apr 01 2023 05:27:26 GMT+0300 (GMT+03:00)',
                        timerText: ''
                    },
                    {
                        label: 'Rüzgar gülü çekilişine kalan süre;',
                        img: 'ruzgar_gulu.png',
                        date: 'Tue Jul 16 2024 01:24:52 GMT+0300 (GMT+03:00)',
                        timerText: ''
                    },
                ]
            }
        },
        mounted() {
            this.Timers.forEach((item, index) => {
                var eventTime = moment(item.date);
                var currentTime = moment();
                var diffTime = eventTime - currentTime;
                var duration = moment.duration(diffTime*1000, 'milliseconds');
                var interval = 1000;

                setInterval(function(){
                    duration = moment.duration(duration - interval, 'milliseconds');
                    item.timerText = `${duration.years()} yıl, ${duration.months()} ay, ${duration.days()} gün, ${duration.hours()} saat, ${duration.minutes()} dakika, ${duration.seconds()} saniye`
                }, interval);
            })
        }
    }
</script>