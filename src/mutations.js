import {ALL_KEYS} from './const';
import fromPairs from 'lodash-es/fromPairs';

export const mergeMutations = function (keys = ALL_KEYS, mutations) {
  return {
    ...fromPairs(Object.values(keys).map(key => [
      key,
      (state, value) => state[key] = value
    ])),

    ...mutations
  };
};
