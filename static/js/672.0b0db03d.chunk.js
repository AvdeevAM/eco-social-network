"use strict";(self.webpackChunkeco_social_network=self.webpackChunkeco_social_network||[]).push([[672],{9625:function(e,s,a){a.d(s,{e:function(){return m}});var n=a(1413),i=a(5671),o=a(3144),t=a(136),r=a(3668),d=a(2791),g=a(6871),c=a(8687),l=a(184),u=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){(0,t.Z)(d,s);var a=(0,r.Z)(d);function d(){return(0,i.Z)(this,d),a.apply(this,arguments)}return(0,o.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,n.Z)({},this.props)):(0,l.jsx)(g.Fg,{to:"/login"})}}]),d}(d.Component);return(0,c.$j)(u)(s)}},5672:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var n=a(8687),i=a(7781),o=a(9625),t=a(2906),r=(a(2791),{dialogs:"Dialogs_dialogs__BGMuL",dialogsItems:"Dialogs_dialogsItems__fuaVX",active:"Dialogs_active__sxp3s",messages:"Dialogs_messages__cxlwV",mineMessage:"Dialogs_mineMessage__jIqqq",newMessage:"Dialogs_newMessage__OAP42",error:"Dialogs_error__MCd1B"}),d=a(4942),g=a(1694),c=a.n(g),l=a(184),u=function(e){return(0,l.jsxs)("div",{className:c()((0,d.Z)({},r.mineMessage,!0===e.message.isMine),r.dialog),children:[(0,l.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147142.png",alt:""}),e.message.message]})},m=a(3504),h=function(e){var s="/dialogs/"+e.id;return(0,l.jsxs)("div",{className:r.dialog+" "+r.active,children:[(0,l.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147144.png",alt:""}),(0,l.jsx)(m.OL,{to:s,children:e.name})]})},f=a(5705),_=a(132),p=a(2413),x=function(e){return(0,l.jsx)(f.J9,{onSubmit:e.addNewMessage,initialValues:{},validationSchema:e.messageSchema,children:function(e){var s=e.handleSubmit,a=e.isValid,n=e.dirty,i=e.errors,o=e.touched;return(0,l.jsxs)(f.l0,{onSubmit:s,className:r.newMessage,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(f.gN,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message"}),o.newMessageBody&&i.newMessageBody&&(0,l.jsx)("p",{className:r.error,children:i.newMessageBody})]}),(0,l.jsx)("div",{children:(0,p.a)(void 0,"Send message","submit",{disabled:!a&&!n&&o.newMessageBody})})]})}})},j=function(e){var s=e.messagesPage.dialogs.map((function(e){return(0,l.jsx)(h,{name:e.name,id:e.id},e.id)})),a=e.messagesPage.messages.map((function(e){return(0,l.jsx)(u,{message:e},e.id)})),n=_.Ry().shape({newMessageBody:_.Z_().max(15,"Message is too long").required("Type text to send message")});return(0,l.jsxs)("div",{className:r.dialogs,children:[(0,l.jsx)("div",{className:r.dialogsItems,children:s}),(0,l.jsxs)("div",{className:r.messages,children:[a,(0,l.jsx)(x,{addNewMessage:function(s,a){var n=a.resetForm;e.sendMessage(s.newMessageBody),n({values:{newMessageBody:""}})},messageSchema:n})]})]})},v=(0,i.qC)((0,n.$j)((function(e){return{messagesPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,t.$)(s))}}})),o.e)(j)}}]);
//# sourceMappingURL=672.0b0db03d.chunk.js.map