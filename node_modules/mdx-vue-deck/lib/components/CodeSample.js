"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var md = require('markdown-it')();

var prettifyXml = require('prettify-xml');

var getChildrenTextContent = function getChildrenTextContent(children) {
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  var classAttr = arguments.length > 2 ? arguments[2] : undefined;
  return children.map(function (node) {
    return node.children ? getChildrenTextContent(node.children, node.tag, node.data ? node.data.class : '') : "<".concat(tag, " class=\"").concat(classAttr, "\">").concat(node.text, "</").concat(tag, ">");
  }).join('');
};

var getCodeEl = function getCodeEl(createElement, slots, _ref) {
  var lineNumbers = _ref.lineNumbers;

  if (slots.default[1]) {
    var codeLanguageClass = slots.default[1].children[0].data.className;
    return createElement('div', {
      attrs: {
        class: "".concat(codeLanguageClass)
      }
    }, [slots.default[1]]);
  } else {
    var prettyHTML = prettifyXml(getChildrenTextContent(slots.default), {
      indent: 4,
      newline: '\n    '
    });
    var codeHTML = md.render("\n    ".concat(prettyHTML, "\n    "));
    return createElement('div', {
      attrs: {
        class: "language-html ".concat(lineNumbers ? 'line-numbers' : '')
      },
      domProps: {
        innerHTML: codeHTML
      }
    });
  }
};

var _default = {
  render: function render(createElement) {
    return createElement('div', {
      attrs: {
        class: 'relative w-full max-w-3xl overflow-hidden mb-8'
      }
    }, [createElement('div', {
      attrs: {
        class: 'bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4'
      }
    }, [this.$slots.default[0]]), createElement('div', {
      attrs: {
        class: 'rounded-b-lg bg-gray-800'
      }
    }, [getCodeEl(createElement, this.$slots, {
      lineNumbers: this.$attrs.lineNumbers || false
    })])]);
  }
};
exports.default = _default;