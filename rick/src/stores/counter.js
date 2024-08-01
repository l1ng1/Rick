import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
    state:()=>({
        currentChar:[],
        currentEpisode:[],
        currentLocation:[],
        currentList:[],
        charPg:1,
        episPg:1,
        locationPg:1,
    }),
    getters:{
        getCurrChar(state){return state.currentChar},
        getCurrEpisode(state){return state.currentEpisode},
        getCurrLocation(state){return state.currentLocation},
        getCurrList(state){
            console.log(state.currentList)
            return state.currentList
        },
    },
    actions:{
        async getChars(){
            let CharReq = await fetch('https://rickandmortyapi.com/api/character?page='+this.charPg,{});
            let CharRes = await CharReq.json();
            this.currentList = CharRes.results;
            console.log(this.currentList);
        },
        setCurrChar(char){
            this.currentChar = char;
        },
        async getEpisodes(){
            let EpisReq = await fetch('https://rickandmortyapi.com/api/episode',{});
            let EpisRes = await EpisReq.json();
            this.currentList = EpisRes.results;
        },
        setCurrEpisode(epis){
            this.currentEpisode = epis;
        },
        async getCharByUrl(urls){
            let a = await Promise.all(urls.map(url => fetch(url)));
            let data = await Promise.all(a.map(response => response.json()));
            return data;
        },
        charPgPlus(){
            this.charPg++;
        },
        charPgMinus(){
            if(this.charPg !== 0){
                this.charPg=this.charPg - 1;
                console.log(this.charPg);
            }
            return
            
        }


    }
})
