<template>
  <div class="mt-32 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center">
      <h1 class="text-5xl font-bold">Sen Hangi Siyah Poposun?</h1>
      <p>Bütün sorular mizah amaçlıdır.</p>
    </div>
    <Transition>
      <div
        v-if="TestStarted == true"
        class="mt-12 w-2/5 flex flex-col items-center p-5 rounded-xl bg-gray-300"
      >
        <h1 class="text-3xl font-semibold">
          {{ Questions[CurrentQuestion].title }} {{ CurrentQuestion + 1 }}/{{
            Questions.length
          }}
        </h1>
        <div class="mt-4 grid grid-cols-2 gap-4 w-full">
          <button
            v-for="(item, index) in Questions[CurrentQuestion].options"
            :key="index"
            @click="SelectOption(item)"
            class="bg-emerald-600 py-1 rounded-lg font-medium"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
      <div v-else-if="TestStarted == false" class="mt-12">
        <button
          @click="TestStarted = true"
          class="bg-emerald-600 py-2 p-3 rounded-lg font-medium"
        >
          Teste Başla!
        </button>
      </div>
      <div v-else class="mt-12 w-2/5 flex flex-col items-center">
        <div
          class="w-full flex flex-col items-center gap-4 bg-gray-300 p-5 rounded-xl"
        >
          <h1 class="text-3xl font-semibold">Puan: {{ Point }}</h1>
          <div
            :style="{
              backgroundImage: `url(/${Results[SiyahPopoId].image})`,
            }"
            class="h-36 w-36 rounded bg-cover"
          ></div>
          <h1 class="text-2xl font-semibold">
            {{ Results[SiyahPopoId].name }}
          </h1>
          <p>{{ Results[SiyahPopoId].desciption }}</p>
        </div>
        <button
          @click="Restart"
          class="mt-8 bg-emerald-600 py-2 p-3 rounded-lg font-medium"
        >
          Tekrar Dene
        </button>
      </div>
    </Transition>
  </div>
</template>

<script lang="js">
import { Howl, Howler } from 'howler'

export default {
    data() {
        return {
            TestStarted: false,
            CurrentQuestion: 0,
            SiyahPopoId: 0,
            Point: 0,
            Questions: [
                {
                    title: 'Hangisini izlemekten hoşlanırsın?',
                    options: [
                        {
                            label: 'Hobbit Emo',
                            point: 10
                        },
                        {
                            label: 'Baran Kuş',
                            point: 0
                        },
                        {
                            label: 'Düşen Ekmek',
                            point: 20
                        },
                        {
                            label: 'Siyah Popo',
                            point: 30
                        }
                    ]
                },
                {
                    title: 'Burcun Ney?',
                    options: [
                        {
                            label: 'Akrep',
                            point: 0
                        },
                        {
                            label: 'Yay',
                            point: 10
                        },
                        {
                            label: 'Kangal',
                            point: 30
                        },
                        {
                            label: 'Ahmet Kaya',
                            point: 20
                        }
                    ]
                },
                {
                    title: 'Bunlardan Hangisi?',
                    options: [
                        {
                            label: 'Pastaya oturup aleti yemek.',
                            point: 0
                        },
                        {
                            label: 'Alete oturup pastayı yemek.',
                            point: 30
                        }
                    ]
                },
                {
                    title: 'Bunlardan Hangisiyle Seyahat Etmek İstersin?',
                    options: [
                        {
                            label: 'Lüks Artvin',
                            point: 30
                        },
                        {
                            label: 'Tuncelililer',
                            point: 20
                        },
                        {
                            label: 'Van Yolu',
                            point: 10
                        },
                        {
                            label: 'İETT',
                            point: 0
                        }
                    ]
                },
                {
                    title: 'Vergi Veriyor musun?',
                    options: [
                        {
                            label: 'Evet',
                            point: 30,
                        },
                        {
                            label: 'Hayır',
                            point: 0,
                            sound: 'siren.mp3'
                        }
                    ]
                },
                {
                    title: 'Seçimlerde Oyunu Kime Vereceksin?',
                    options: [
                        {
                            label: 'Erdoğan',
                            point: 30
                        },
                        {
                            label: 'Eray',
                            point: 20
                        },
                        {
                            label: 'Hobbit Aga',
                            point: 10
                        },
                        {
                            label: 'Bone',
                            point: 0
                        }
                    ]
                },
                {
                    title: 'Hangisi döver?',
                    options: [
                        {
                            label: 'Kangal',
                            point: 0,
                            sound: 'yeri_yok_abi.mp3'
                        },
                        {
                            label: 'Drogba formalı çocuk',
                            fake: true
                        },
                    ]
                },
                {
                    title: 'En Sevdiğin Renk Hangisi?',
                    options: [
                        {
                            label: 'Mavi',
                            point: 30
                        },
                        {
                            label: 'Yeşil',
                            point: 20
                        },
                        {
                            label: 'Sarı',
                            point: 10
                        },
                        {
                            label: 'Kırmızı',
                            point: 0
                        }
                    ]
                },
                {
                    title: '100K Dolar İçin Vurdurur Musun?',
                    options: [
                        {
                            label: 'Evet',
                            point: 30
                        },
                        {
                            label: 'Hayır',
                            point: 0
                        }
                    ]
                }
            ],
            Results: [
                {
                    name: 'Hiçbirşeyelayıkolmayanlaralayıkolankadın',
                    desciption: 'Dostum o kadar kötü seçimler yapın ki sen hiçbir siyah popoya layık değilsin. Sana karşı saygım azaldı aga.',
                    image: 'hicbirşeyelayıkolmayanlaralayıkolankadın.png'
                },
                {
                    name: 'Yürüyen Popolar',
                    desciption: 'Sende bu abilerimiz gibi yürüyüş yapmayı ihmal etme. Unutma başarılı olmanın sırrı sağlıklı bir hayat yaşamaktır. Sana karşı saygım arttı aga.',
                    image: 'yuruyen_popolar.png'
                },
                {
                    name: 'İp Atlayan Popo',
                    desciption: 'Sağlıklı yaşam için en iyi aktivitelerden biri ip atlamaktır. Sende ip atla ve siyah popolar arasında yerini al. Sana karşı saygım arttı aga.',
                    image: 'ip_atlayan_popo.png'
                },
                {
                    name: 'Sallanan Popo',
                    desciption: 'Mükemmel seçim. Siyah popolar arasında en iyisi. Sana karşı saygım arttı aga.',
                    image: 'sallanan_popo.png'
                },
                {
                    name: 'Ağlayan Popo',
                    desciption: 'Bazen üzülüp ağlasakta siyah popolar bizi ayakta tutuyor. Sana karşı saygım arttı aga.',
                    image: 'aglayan_popo.png'
                }
            ]
        }
    },
    methods: {
        SelectOption(data) {
            if (data.fake) {
                alert('Bence birdaha düşün!!')
            } else {
                if (this.CurrentQuestion < this.Questions.length-1) {
                    this.CurrentQuestion = this.CurrentQuestion + 1
                    this.Point = this.Point + data.point
                } else {
                    this.TestStarted = null
                    this.CurrentQuestion = 0
                    this.SiyahPopoId = Math.ceil(((this.Point-0)/((this.Questions.length-1)*30))*(this.Results.length-1))
                    if (this.SiyahPopoId > this.Results.length-1) this.SiyahPopoId = this.Results.length-1
                    setTimeout(() => {
                        new Howl({
                            src: ['sen_aski_anlamaz_bilmez.mp3']
                        }).volume(0.5).play();
                    }, 1000);
                }
                if (data.sound) {
                    new Howl({
                        src: [data.sound]
                    }).volume(1).play();
                }
            }
        },
        Restart() {
            this.CurrentQuestion = 0
            this.TestStarted = true
            this.Point = 0
        }
    }
}
</script>
