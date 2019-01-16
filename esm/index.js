import augmentor, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'dom-augmentor';

import {render, hook} from 'lighterhtml';

const {html, svg} = hook(useRef);
export default fn => function () {
  return augmentor(fn).apply(this, arguments);
};

export {
  render, html, svg,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
};
