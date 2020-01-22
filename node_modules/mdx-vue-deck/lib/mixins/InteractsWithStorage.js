"use strict";

require("core-js/modules/es.parse-int");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var keys = {
  page: 'mdx-deck-page',
  step: 'mdx-deck-step'
};
var _default = {
  data: function data() {
    return {
      focused: true
    };
  },
  mounted: function mounted() {
    window.addEventListener('focus', this.handleFocus);
    window.addEventListener('blur', this.handleBlur);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('focus', this.handleFocus);
    window.removeEventListener('blur', this.handleBlur);
  },
  watch: {
    '$store.state.currentPage': function $storeStateCurrentPage(page) {
      if (!this.focused) return;
      localStorage.setItem(keys.page, page);
    },
    '$store.state.step': function $storeStateStep(step) {
      localStorage.setItem(keys.step, step);
    },
    focused: {
      immediate: true,
      handler: function handler(focused) {
        if (!focused) {
          window.addEventListener('storage', this.handleStorageChange);
        } else {
          window.removeEventListener('storage', this.handleStorageChange);
        }
      }
    }
  },
  methods: {
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    handleStorageChange: function handleStorageChange(e) {
      var n = parseInt(e.newValue, 10);
      if (isNaN(n)) return;

      switch (e.key) {
        case keys.page:
          this.$router.push({
            name: 'home',
            params: {
              page: n
            }
          });
          break;

        case keys.step:
          this.$store.commit('setStep', n);
          break;

        default:
          break;
      }
    }
  }
};
exports.default = _default;