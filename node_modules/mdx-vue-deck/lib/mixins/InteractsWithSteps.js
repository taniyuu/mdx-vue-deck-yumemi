"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.string.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      componentPage: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var deckEl = _this.$el.closest('.markdown');

      if (deckEl) {
        _this.componentPage = Array.from(deckEl.parentElement.children).indexOf(deckEl) + 1;
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.commit('setSteps', 0);
  },
  watch: {
    active: function active(value) {
      if (value) {
        this.$store.commit('setSteps', this.steps);
      }
    },
    step: function step(_step) {
      if (this.active) {
        history.pushState({}, '', "/#/".concat(this.currentPage).concat(_step ? ".".concat(_step) : ''));
      }
    }
  },
  computed: {
    currentPage: function currentPage() {
      return parseInt(this.$route.params.page);
    },
    active: function active() {
      return this.currentPage === this.componentPage;
    },
    step: function step() {
      return this.$store.state.step || 0;
    }
  }
};
exports.default = _default;