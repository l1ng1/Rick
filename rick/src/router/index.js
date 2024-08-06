import { createRouter, createWebHistory } from 'vue-router'
import charComp from '@/components/charComp.vue'
import charCard from '@/components/charCard.vue'
import EpisodeComp from '@/components/episodeComp.vue'
import episodeCard from '@/components/episodeCard.vue';
import locComp from '@/components/locComp.vue';
import locCard from '@/components/locCard.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:charComp,
    },
    {
      path:'/currentCharacter',
      component:charCard
    },
    {
      path:'/episodes',
      component:EpisodeComp
    },
    {
      path:'/currentEpisode',
      component:episodeCard
    },
    {
      path:'/locations',
      component:locComp
    },
    {
      path:'/currentLocation',
      component:locCard,
    }
  
  ]
})

export default router
