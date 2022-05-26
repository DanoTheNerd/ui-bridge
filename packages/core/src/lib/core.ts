/// <reference path="./core.d.ts" />

export const FRAGMENT = '__FRAGMENT__';

export const DOM = (tag: any, props: any, ...childs: any[]) => {
  return typeof tag === 'function' ? tag(props, childs) : {
    tag,
    props,
    childs,
  };
};

(self as any).DOM = DOM;
(self as any).FRAGMENT = FRAGMENT;
