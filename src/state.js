import {ALL_KEYS} from './const';
import fromPairs from 'lodash-es/fromPairs';

export const mergeState = function (keys = ALL_KEYS, ...state) {
  return {
    keys: keys,
    ...fromPairs(Object.values(keys).map(key => [
      key
    ])),

    [IS_LOADING]: false,
    [CURRENT_PAGE]: 1,
    [PER_PAGE]: 10,

    ...state
  };
};
