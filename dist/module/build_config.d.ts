import { GetterTree, ActionTree, MutationTree, ModuleTree } from "vuex";
export interface StateConfig {
    nonStrictObject?: Array<string>;
}
interface BuildConfig {
    config?: StateConfig;
    state: Function;
    getters?: GetterTree<any, any>;
    actions?: ActionTree<any, any>;
    mutations?: MutationTree<any>;
    modules?: ModuleTree<any>;
}
export default BuildConfig;