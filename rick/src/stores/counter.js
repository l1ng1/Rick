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
        totalEpisPages:0,
        totalCharPages:0,
        totalLocPages:0,
    }),
    getters:{
        getCurrChar(state){return state.currentChar},
        getCurrEpisode(state){return state.currentEpisode},
        getCurrLocation(state){return state.currentLocation},
        getCurrList(state){
            return state.currentList
        },
    },
    actions:{

        ///запрос на сервер
        async getChars(){
            let CharReq = await fetch('https://rickandmortyapi.com/api/character?page='+this.charPg,{});
            let CharRes = await CharReq.json();
            this.totalCharPages = CharRes.info.pages;
            this.currentList = CharRes.results;
        },
        async getEpisodes(){
            let EpisReq = await fetch('https://rickandmortyapi.com/api/episode?page='+this.episPg,{});
            let EpisRes = await EpisReq.json();
            this.totalEpisPages = EpisRes.info.pages;
            this.currentList = EpisRes.results;
            console.log(this.currentList);
        },
        async getCharByUrl(urls){
            let a = await Promise.all(urls.map(url => fetch(url)));
            let data = await Promise.all(a.map(response => response.json()));
            return data;
        },
        async getLocations(){
            let LocReq = await fetch('https://rickandmortyapi.com/api/location?page='+this.locationPg,{});
            let LocRes = await LocReq.json();
            this.totalLocPages = LocRes.info.pages;
            this.currentList = LocRes.results;
            console.log(LocRes);
        },


        ///выбраный персонаж,эпизод,локация
        setCurrChar(char){
            this.currentChar = char;
        },
        setCurrEpisode(epis){
            this.currentEpisode = epis;
        },
        setCurrLoc(loc){
            this.currentLocation = loc;
        },

        ///Работа с страницами
        charPgPlus(){
            if(this.charPg != this.totalCharPages){
                this.charPg++;
            }
            else return;
        },
        charPgMinus(){
            if(this.charPg !== 0){
                this.charPg=this.charPg - 1;
            }
            else return
        },
        EpisPgPlus(){
            if(this.episPg != this.totalEpisPages){
                this.episPg = this.episPg + 1;
                console.log("+")
            }
            else return;
        },
        EpisPgMinus(){
            if(this.episPg == 1) return;
            this.episPg =this.episPg - 1;
            console.log("-");       
        },
        locPgPlus(){
            if(this.locationPg != this.totalLocPages){
                this.locationPg = this.locationPg + 1;
            }
            else return;
        },
        locPgMinus(){
            if(this.locationPg == 1) return;
            this.locationPg =this.locationPg - 1;     
        }

    }
})
