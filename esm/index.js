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

export default fn => {
  let index;
  const counter = [];
  const stack = [];
  const effect = () => {
    const i = index.current;
    if (0 < i) {
      if (stack.length < i) {
        stack.splice(i);
        counter.splice(i);
      }
      index.current = 0;
    }
  };
  return augmentor(function () {
    index = useRef(0);
    const {current} = index;
    useEffect(effect);
    if (current === stack.length) {
      const cb = augmentor(fn);
      stack.push(cb);
      counter.push(cb);
    }
    if (stack[current] !== counter[current])
      stack[current] = counter[current] = augmentor(fn);
    return stack[index.current++].apply(this, arguments);
  });
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
