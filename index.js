import {ALL_KEYS} from './src/const';
import {mergeMutations} from './src/mutations';
import {mergeGetters} from './src/getters';
import {mergeActions} from './src/actions';
import {mergeState} from './src/state';

/**
 * @merge - Объект с ключами [state, mutations, actions, getters] - необязательный
 * @namespaced - нужно ли создавать область видимости Vuex
 * @vars - модификация переменных отвечающих за пагинацию
 *
 * **/
const createStore = function (merge = {}, namespaced = true, vars = {}) {
  const {mutations = {}, getters = {}, actions = {}, state = {}, ...other} = merge;
  const keys = {
    ...ALL_KEYS,
    ...vars
  };

  return {
    namespaced: namespaced,
    state: mergeState(keys, state),
    mutations: mergeMutations(keys, mutations),
    getters: mergeGetters(keys, getters),
    actions: mergeActions(keys, actions),
    ...other
  };

};

export {
  createStore
};
