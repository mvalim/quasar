module.exports=function(t){function n(e){if(i[e])return i[e].exports;var s=i[e]={exports:{},id:e,loaded:!1};return t[e].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var i={};return n.m=t,n.c=i,n.p="",n(0)}({0:function(t,n,i){t.exports=i(125)},125:function(t,n,i){"use strict";var e=i(126);t.exports={template:e,data:{visible:!0},methods:{toggleVisibility:function(){this.visible=!this.visible}},ready:function(){quasar.current.layout.vm.$data.title="Vue Transitions"}}},126:function(t,n){t.exports='<h2>"Slide" Transition</h2>\n\n<p>\n  Click/Tap on the button below to see the transition in action.\n</p>\n<p>\n  <button class="primary" @click="toggleVisibility()">Toggle</button>\n</p>\n\n<p>\n  <img\n    class="responsive"\n    v-show="visible"\n    transition="slide"\n    src="assets/quasar.jpg"\n  >\n</p>\n'}});