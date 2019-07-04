import {ALL_KEYS, IS_LOADING, CURRENT_PAGE, PER_PAGE} from './const';
import fromPairs from 'lodash-es/fromPairs';

export const mergeState = function (keys = ALL_KEYS, ...state) {
  return {
    keys: keys,
    ...fromPairs(Object.values(keys).map(key => [
      key
    ])),

    [keys[IS_LOADING]]: false,
    [keys[CURRENT_PAGE]]: 1,
    [keys[PER_PAGE]]: 10,

    ...state
  };
};
