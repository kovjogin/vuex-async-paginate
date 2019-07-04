import {ALL_KEYS} from './const';
import {mergeMutations} from './mutations';
import {mergeGetters} from './getters';
import {mergeActions} from './actions';
import {mergeState} from './state';

/**
 * @merge - Объект с ключами [state, mutations, actions, getters] - необязательный
 * @namespaced - нужно ли создавать область видимости Vuex
 * @vars - модификация переменных отвечающих за пагинацию
 *
 * **/
export const createStore = function (merge = {}, namespaced = true, vars = {}) {
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
