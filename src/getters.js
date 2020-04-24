import { ALL_KEYS, CURRENT_PAGE, DATA, FAIL_RESPONSE, FILTER, META, SUCCESS_RESPONSE, PER_PAGE, TOTAL_ITEMS,TOTAL_PAGES } from './const';
import fromPairs from 'lodash-es/fromPairs';
import isObject from 'lodash-es/isObject';
import isArray from 'lodash-es/isArray';


export const mergeGetters = function (keys = ALL_KEYS, getters) {
  const FILTER_KEY = keys[FILTER];
  const META_KEY = keys[META];
  const DATA_KEY = keys[DATA];
  const SUCCESS_RESPONSE_KEY = keys[SUCCESS_RESPONSE];
  const FAIL_RESPONSE_KEY = keys[FAIL_RESPONSE];

  return {
    ...fromPairs(Object.values(keys).map(key => [
      key,
      (state) => state[key]
    ])),

    keys: (state) => keys,

    [DATA_KEY]: (state) => isArray(state[DATA_KEY]) ? state[DATA_KEY] : {},
    [FILTER_KEY]: (state) => isObject(state[FILTER_KEY]) ? state[FILTER_KEY] : {},
    [SUCCESS_RESPONSE_KEY]: (state) => isObject(state[SUCCESS_RESPONSE_KEY]) ? state[SUCCESS_RESPONSE_KEY] : {},
    [FAIL_RESPONSE_KEY]: (state) => isObject(state[FAIL_RESPONSE_KEY]) ? state[FAIL_RESPONSE_KEY] : {},

    [META_KEY]: (state) => isObject(state[META_KEY]) ? state[META_KEY] : {
      [keys[CURRENT_PAGE]] : 1,
      [keys[PER_PAGE]] : 10,
      [keys[TOTAL_ITEMS]] : 0,
      [keys[TOTAL_PAGES]] : 1,
    },

    ...getters
  };
};
