import {
  ALL_KEYS,
  IS_LOADING,
  CURRENT_PAGE,
  PER_PAGE,
  IS_SUCCESS_RESPONSE,
  IS_FAIL_RESPONSE
} from './const';
import fromPairs from 'lodash-es/fromPairs';

export const mergeState = function(keys = ALL_KEYS, state) {
  return {
    keys: keys,
    ...fromPairs(Object.values(keys).map(key => [key])),

    [keys[IS_LOADING]]: false,
    [keys[CURRENT_PAGE]]: 1,
    [keys[PER_PAGE]]: 10,
    [keys[IS_SUCCESS_RESPONSE]]: false,
    [keys[IS_FAIL_RESPONSE]]: false,

    ...state
  };
};
