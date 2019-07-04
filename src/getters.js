import {ALL_KEYS} from './const';
import fromPairs from 'lodash-es/fromPairs';

export const mergeGetters = function (keys = ALL_KEYS, getters) {
  return {
    ...fromPairs(Object.values(keys).map(key => [
      key,
      (state) => state[key]
    ])),

    ...getters
  };
};
