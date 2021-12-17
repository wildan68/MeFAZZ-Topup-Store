import { createStore } from "vuex";
import config from "./config";
import func from "./func";
import login from "./login";
import getUser from "./getUser";
import getUserProfil from "./getUserProfil";
import editUserProfil from "./editUserProfil";
import register from "./register";
import session from "./session";
import plFreeFire from "./item_list/freefire";
import plPubgm from "./item_list/pubgm";

export default createStore({
    modules: {
        config,
        func,
        login,
        getUserProfil,
        getUser,
        editUserProfil,
        register,
        session,
        plFreeFire,
        plPubgm,
    }
});