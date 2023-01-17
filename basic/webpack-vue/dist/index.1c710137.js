/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "window.Vue"
const external_window_Vue_namespaceObject = window.Vue;
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "demo" }
const _hoisted_2 = { class: "text" }

;
  
/* harmony default export */ const Appvue_type_script_setup_true_lang_js = ({
  __name: 'App',
  setup(__props) {

  const state = (0,external_window_Vue_namespaceObject.reactive)({
    count: 0
  });
  const onClick = () => {
    state.count ++;
  }

return (_ctx, _cache) => {
  return ((0,external_window_Vue_namespaceObject.openBlock)(), (0,external_window_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [
    (0,external_window_Vue_namespaceObject.createElementVNode)("div", _hoisted_2, "Count: " + (0,external_window_Vue_namespaceObject.toDisplayString)(state.count), 1),
    (0,external_window_Vue_namespaceObject.createElementVNode)("button", {
      class: "btn",
      onClick: onClick
    }, "Add")
  ]))
}
}

});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/App.vue



;

const __exports__ = Appvue_type_script_setup_true_lang_js;

/* harmony default export */ const App = (__exports__);
;// CONCATENATED MODULE: ./src/index.js



const app = (0,external_window_Vue_namespaceObject.createApp)(App)
app.mount('#app')

/******/ })()
;