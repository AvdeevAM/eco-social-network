"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[672],{9625:function(e,s,a){a.d(s,{e:function(){return m}});var n=a(1413),i=a(5671),t=a(3144),r=a(136),o=a(3668),d=a(2791),g=a(6871),c=a(8687),l=a(184),u=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){(0,r.Z)(d,s);var a=(0,o.Z)(d);function d(){return(0,i.Z)(this,d),a.apply(this,arguments)}return(0,t.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,n.Z)({},this.props)):(0,l.jsx)(g.Fg,{to:"/login"})}}]),d}(d.Component);return(0,c.$j)(u)(s)}},5672:function(e,s,a){a.r(s),a.d(s,{default:function(){return f}});var n=a(8687),i=a(7781),t=a(9625),r=a(2906),o=(a(2791),{dialogs:"Dialogs_dialogs__BGMuL",dialogsItems:"Dialogs_dialogsItems__fuaVX",active:"Dialogs_active__sxp3s",messages:"Dialogs_messages__cxlwV",mineMessage:"Dialogs_mineMessage__jIqqq",newMessage:"Dialogs_newMessage__OAP42",error:"Dialogs_error__MCd1B"}),d=a(184),g=function(e){return!0===e.message.isMine?(0,d.jsxs)("div",{className:o.dialog+" "+o.mineMessage,children:[(0,d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147142.png",alt:""}),e.message.message]}):(0,d.jsxs)("div",{className:o.dialog,children:[(0,d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147144.png",alt:""}),e.message.message]})},c=a(3504),l=function(e){var s="/dialogs/"+e.id;return(0,d.jsxs)("div",{className:o.dialog+" "+o.active,children:[(0,d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147144.png",alt:""}),(0,d.jsx)(c.OL,{to:s,children:e.name})]})},u=a(5705),m=a(132),h=function(e){return(0,d.jsx)(u.J9,{onSubmit:e.addNewMessage,initialValues:{},validationSchema:e.messageSchema,children:function(e){var s=e.handleSubmit,a=e.isValid,n=e.dirty,i=e.errors,t=e.touched;return(0,d.jsxs)(u.l0,{onSubmit:s,className:o.newMessage,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(u.gN,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message"}),t.newMessageBody&&i.newMessageBody&&(0,d.jsx)("p",{className:o.error,children:i.newMessageBody})]}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{disabled:!a&&!n&&t.newMessageBody,type:"submit",children:"Send message"})})]})}})},p=function(e){var s=e.messagesPage.dialogs.map((function(e){return(0,d.jsx)(l,{name:e.name,id:e.id},e.id)})),a=e.messagesPage.messages.map((function(e){return(0,d.jsx)(g,{message:e},e.id)})),n=m.Ry().shape({newMessageBody:m.Z_().max(10,"Message is too long").required("Type text to send message")});return(0,d.jsxs)("div",{className:o.dialogs,children:[(0,d.jsx)("div",{className:o.dialogsItems,children:s}),(0,d.jsxs)("div",{className:o.messages,children:[a,(0,d.jsx)(h,{addNewMessage:function(s){e.sendMessage(s.newMessageBody)},messageSchema:n})]})]})},f=(0,i.qC)((0,n.$j)((function(e){return{messagesPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,r.$)(s))}}})),t.e)(p)}}]);
//# sourceMappingURL=672.54e9f0bc.chunk.js.map