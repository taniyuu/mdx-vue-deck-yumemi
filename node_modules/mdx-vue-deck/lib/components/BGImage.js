"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: ['src'],
  render: function render(createElement) {
    return createElement('div', {
      attrs: {
        class: 'w-full'
      }
    }, [createElement('img', {
      attrs: {
        class: 'mx-auto h-full',
        src: this.src
      }
    })]);
  }
};
exports.default = _default;