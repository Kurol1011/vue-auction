import {createStore} from "vuex";
import {dataModule} from "@/store/dataModule"
import {authModule} from "@/store/authModule";
export default createStore({
    modules:{
        global_data: dataModule,
        auth_data:authModule
    }
})