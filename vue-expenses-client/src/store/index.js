import Vue from 'vue';
import Vuex from 'vuex';
import { alert } from '@/store/alert';
import { loader } from '@/store/loader';
import { account } from '@/store/account';
import { expensetypes } from '@/store/expensetypes';
import { expensecategories } from '@/store/expensecategories';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        alert,
        loader,
        account,
        expensetypes,
        expensecategories
    }
});

export default store;