export const dataModule = {
    state: () => ({
        //наши данные
        auctionItems: [
            {id:75,title:'Nissan GTR',description:'The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R),' +
                    ' is a sports car and grand tourer produced by Nissan, unveiled in 2007.[3][4][5] ' +
                    'It is the successor to the Nissan Skyline GT-R, a high-performance variant of the Nissan' +
                    ' Skyline. Although this model was the sixth-generation to bear the GT-R name, it is no' +
                    ' longer part of the Skyline line-up. The GT-R is built on' +
                    ' the PM platform, which is derived from the FM platform used in the Skyline and the Nissan Z models.',initialPrice: 12000},
            {id:76,title:'Supra mk4',description:'The Toyota Supra (Japanese: トヨタ・スープラ, Hepburn: Toyota Sūpura) is a sports' +
                    ' car and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978.'+
                    'The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation' +
                    ' has been produced since March 2019 and went on sale in May 2019.[4] The styling of the original Supra ' +
                    ' derived from the Toyota Celica, but it was both longer and wider.[5] Starting in mid-1986, the A70 Supra' +
                    ' became a separate model from the Celica. In turn, Toyota also stopped using the prefix Celica and named' +
                    ' the car Supra.[6] Owing to the similarity and past of the Celicas name, it is frequently mistaken for'
                ,initialPrice: 15000},
            {id:77,title:'Toyota Trueno ae86',description:'The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R),' +
                    ' is a sports car and grand tourer produced by Nissan, unveiled in 2007.[3][4][5] ' +
                    'It is the successor to the Nissan Skyline GT-R, a high-performance variant of the Nissan' +
                    ' Skyline. Although this model was the sixth-generation to bear the GT-R name, it is no' +
                    ' longer part of the Skyline line-up. The GT-R is built on' +
                    ' the PM platform, which is derived from the FM platform used in the Skyline and the Nissan Z models.',initialPrice: 7500},

        ]
    }),
    getters:{
        //наши кэшируемые методы всяческие computed и обязательно должны что то возвращать
        getAuctionItems(){
            return state.auctionItems;
        }
    },
    mutations:{
        //с помощью мутации меняем наши state наши данные
    },
    actions:{
        //функции которые внутри себя используют мутации напрямую из экшнево стейты менять не стоит
        // сайд эффекты работа с серваком
    },
    namespaced: true // всё что заключено в модуль буте иметь определенное пространство имен
}