webpackJsonp([16],{"0MpA":function(t,e,n){e=t.exports=n("l95E")(!1),e.push([t.i,".titleBar[data-v-07a677a1]{background:#6cc;height:44px;line-height:44px;text-align:center;color:#fff}.pannel[data-v-07a677a1]{position:relative;overflow:hidden;background:#fff;color:#666;padding:10px}",""])},DnKK:function(t,e,n){"use strict";function a(t){n("k9mc")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("R7pL"),i=n("aAzn"),c=n("X4nt"),r=a,s=c(o.a,i.a,!1,r,"data-v-07a677a1",null);e.default=s.exports},R7pL:function(t,e,n){"use strict";e.a={data:function(){return{content:""}},created:function(){document.title="信息费交易声明",this.getStatement()},methods:{getStatement:function(){var t=this,e=this.__WEBSERVER__+"content/findFreeContentListByTopicCode",n={code:this.$route.query.code||"Statement",Authorization:this.$route.query.Authorization};this.$http.get(e,{params:n}).then(function(e){200==e.body.code&&(t.content=e.body.data[0].content)})}}}},aAzn:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"pannel"},[n("div",{staticClass:"agreement",domProps:{innerHTML:t._s(t.content)}})])])},o=[],i={render:a,staticRenderFns:o};e.a=i},k9mc:function(t,e,n){var a=n("0MpA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("df67be58",a,!0)}});