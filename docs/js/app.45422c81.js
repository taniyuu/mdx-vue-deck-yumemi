(function(e){function t(t){for(var a,l,p=t[0],u=t[1],i=t[2],h=0,m=[];h<p.length;h++)l=p[h],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);s&&s(t);while(m.length)m.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,p=1;p<r.length;p++){var u=r[p];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={app:0},o=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/mdx-vue-deck-yumemi/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],u=p.push.bind(p);p.push=t,p=p.slice();for(var i=0;i<p.length;i++)t(p[i]);var s=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},d42d:function(e,t,r){"use strict";var a,n=r("a000"),o=r.n(n),l=r("b85e"),p=r("69f1"),u=r("b5ad"),i=r("8697"),s={},h="div";function m(e){var t=e.components,r=Object(l["a"])(e,["components"]);return a(h,o()([{},s,{},r,{attrs:{components:t,mdxType:"MDXLayout"}}]),[a("h2",["Vue版mdx-deckがあったので使ってみた"]),a("p",["taniyuu"]),a("hr"),a("h1",["自己紹介"]),a("ul",[a("li",{attrs:{parentName:"ul"}},["taniyuu twitterは",a("a",o()([{attrs:{parentName:"li"}},{href:"https://twitter.com/zone_tanichan"}]),["@zone_tanichan"]),a("ul",{attrs:{parentName:"li"}},[a("li",{attrs:{parentName:"ul"}},["社会人3年目、26歳"]),a("li",{attrs:{parentName:"ul"}},["2019.10〜Vue.jsを仕事で触り始めました。"]),a("li",{attrs:{parentName:"ul"}},["それまでは8割サーバサイド、書いてjQuery"])])])]),a("hr"),a("h1",["TL;DR"]),a("hr"),a("h1",["Vue.jsとMarkdownで"]),a("h1",["スライドが作れるようになりました🎉"]),a("ul",[a("li",{attrs:{parentName:"ul"}},[a("a",o()([{attrs:{parentName:"li"}},{href:"https://github.com/godkinmo/mdx-vue-deck/"}]),["https://github.com/godkinmo/mdx-vue-deck/"])])]),a("hr"),a("h1",["サンプルの受け売り"]),a("hr"),a("h1",["箇条書きのアニメーション部品"]),a(u["a"],{attrs:{mdxType:"Appear"}},[a("li",{class:"text-blue-700"},["One"]),a("li",["Two"]),a("li",["Three"])]),a("hr"),a(i["a"],{attrs:{lang:"javascript",steps:[{lines:[3],notes:"Import the Apollo Client"},{lines:[4],notes:"Import Vue Apollo for using Apollo with vue"},{lines:[7,8,9,10,11],notes:"Create the provider and give it the URL"},{lines:[14],notes:"Tell Vue to use Apollo"},{lines:[15,16,17,18,19],notes:"Mount Vue"}],code:'\nimport Vue from "vue"\nimport App from "./App"\nimport ApolloClient from "apollo-boost"\nimport VueApollo from "vue-apollo"\n\n\nconst apolloProvider = new VueApollo({\n  defaultClient: new ApolloClient({\n    uri: "https://api.graphcms.com/simple/v1/awesomeTalksClone"\n  })\n})\n\n\nVue.use(VueApollo)\nnew Vue({\n  el: "#app",\n  provide: apolloProvider.provide(),\n  render: h => h(App)\n})\n  ',mdxType:"CodeSurfer"}}),a("hr"),a("h1",["プレゼンテーションモードまである！"]),a("p",["option + P"]),a("hr"),a("h1",["紹介はここまで"]),a("p",["あとは、時間があれば流しながらそもそもこれって何？を説明する。"]),a("hr"),a("h1",["MDXとは"]),a("hr"),a("h1",[a("a",{attrs:{href:"https://mdxjs.com/",target:"_blank"}},["Markdown for the component era"])]),a("ul",[a("li",{attrs:{parentName:"ul"}},["MarkdownでJSXを使えるようにしたもの"])]),a("hr"),a("h1",["🤔"]),a("hr"),a("h1",["JSXとは"]),a("hr"),a("h1",["5分調べたが…"]),a("ul",[a("li",{attrs:{parentName:"ul"}},["基本的にはReactでお目にかかるものであると。",a("ul",{attrs:{parentName:"li"}},[a("li",{attrs:{parentName:"ul"}},["でもReactで重宝されてるだけで、別にそれ専用のものではないと。"])])]),a("li",{attrs:{parentName:"ul"}},["ネットで調べてもスマートな回答がなかった…",a("ul",{attrs:{parentName:"li"}},[a("li",{attrs:{parentName:"ul"}},["twitterでもいいので教えてください。"])])])]),a("hr"),a("h1",["メリット"]),a("hr"),a("h1",["やっぱりVue.jsで動いてること！"]),a("ul",[a("li",{attrs:{parentName:"ul"}},["Markdown記法になれた人からすると、ドキュメント作りと相関がある！"]),a("li",{attrs:{parentName:"ul"}},["それがこんな感じでヌルヌル動いてくれると嬉しい。"])]),a("hr"),a("h1",["デメリット"]),a("hr"),a("p",[a("img",{attrs:{src:"https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/416137/610e43da-f65b-44df-1b64-9fbea5f2179a.jpeg"}})]),a("hr"),a("h1",["環境構築が大変だった"]),a("ul",[a("li",{attrs:{parentName:"ul"}},["軽い気持ちで",a("code",{attrs:{parentName:"li"}},["npm install"]),"で行けるだろうと思っていた",a("ul",{attrs:{parentName:"li"}},[a("li",{attrs:{parentName:"ul"}},["Macだとまさかの",a("code",{attrs:{parentName:"li"}},["node-gyp"]),"->Xcode必須、windowsは一応",a("code",{attrs:{parentName:"li"}},["wsl"]),"で動かせました。"]),a("li",{attrs:{parentName:"ul"}},["でも発表するために解決してやるぞ！というモチベが上がった。"]),a("li",{attrs:{parentName:"ul"}},["貢献したい気持ちになった。"])])])]),a("hr"),a("h1",["まとめ"]),a("ul",[a("li",{attrs:{parentName:"ul"}},["みなさんVue.jsでスライド作りましょう！"])]),a("h1",["Future Work"]),a("ul",[a("li",{attrs:{parentName:"ul"}},["まだまだ未熟なので本家ではできてる機能を作ってみる",a("ul",{attrs:{parentName:"li"}},[a("li",{attrs:{parentName:"ul"}},[a("code",{attrs:{parentName:"li"}},["build"]),"時の出力フォルダ指定できるようにする(大事)"]),a("li",{attrs:{parentName:"ul"}},["なぜかmarkdownのリンクが押せない"]),a("li",{attrs:{parentName:"ul"}},["and so on..."])])])]),a("hr"),a("h1",["The END"]),a("hr")])}m.isMDXComponent=!0,t["a"]={name:"Mdx",render:function(e){return a=p["a"].bind({vueCreateElement:e}),m({})}}}});
//# sourceMappingURL=app.45422c81.js.map