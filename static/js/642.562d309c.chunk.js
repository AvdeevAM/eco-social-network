"use strict";(self.webpackChunkeco_social_network=self.webpackChunkeco_social_network||[]).push([[642],{8642:function(e,s,a){a.r(s),a.d(s,{default:function(){return S}});var n=a(8687),i=a(7781),o=a(9625),t=a(2906),l=(a(2791),"Dialogs_dialogs__BGMuL"),r="Dialogs_dialogsItemsWrapper__1z1YX",g="Dialogs_dialogsItems__fuaVX",c="Dialogs_messagesBlock__AR5Cb",d="Dialogs_dialog__YaCvB",m="Dialogs_messageItem__hrm7m",u="Dialogs_mineMessage__jIqqq",_="Dialogs_messageItemText__JurHC",h="Dialogs_newMessage__OAP42",x="Dialogs_error__MCd1B",j=a(4942),v=a(1694),f=a.n(v),p=a(9857),M=a(184),w=function(e){var s=e.message.isMine?e.authPhoto?e.authPhoto:p:"https://cdn-icons-png.flaticon.com/512/147/147142.png";return(0,M.jsxs)("div",{className:f()((0,j.Z)({},u,!0===e.message.isMine),m),children:[(0,M.jsx)("img",{src:s,alt:""}),(0,M.jsx)("div",{className:_,children:e.message.message})]})},D="DialogsItems_dialog__IiVl2",N="DialogsItems_active__r+1MD",y=a(3504),B=function(e){var s="/dialogs/"+e.id;return(0,M.jsxs)(y.OL,{to:s,className:function(e){return e.isActive?D+" "+N:D+" "},children:[(0,M.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147144.png",alt:""}),(0,M.jsx)("div",{children:e.name.length>21?e.name.substring(0,18)+"...":e.name})]})},b=a(5705),P=a(132),I=a(2413),k=function(e){return(0,M.jsx)(b.J9,{onSubmit:e.addNewMessage,initialValues:{newMessageBody:""},validationSchema:e.messageSchema,children:function(e){var s=e.handleSubmit,a=e.isValid,n=e.dirty,i=e.errors;return(0,M.jsxs)(b.l0,{onSubmit:s,className:h,children:[(0,M.jsxs)("div",{children:[(0,M.jsx)(b.gN,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message"}),i.newMessageBody&&(0,M.jsx)("p",{className:x,children:i.newMessageBody})]}),(0,I.a)(null,"Send message","submit",{disabled:!(a&&n)})]})}})},C=function(e){var s=e.messagesPage.dialogs.map((function(e){return(0,M.jsx)(B,{name:e.name,id:e.id},e.id)})),a=e.messagesPage.messages.map((function(s){return(0,M.jsx)(w,{message:s,authPhoto:e.authPhoto},s.id)})),n=P.Ry().shape({newMessageBody:P.Z_().min(1,"type text to send message").max(15,"caution: your message is too long to be sent")});return(0,M.jsxs)("div",{className:l,children:[(0,M.jsx)("div",{className:r,children:(0,M.jsx)("div",{className:g,children:s})}),(0,M.jsxs)("div",{className:c,children:[(0,M.jsx)("div",{className:d,children:a}),(0,M.jsx)("div",{children:(0,M.jsx)(k,{addNewMessage:function(s,a){var n=a.resetForm;e.sendMessage(s.newMessageBody),n({values:{newMessageBody:""}})},messageSchema:n})})]})]})},S=(0,i.qC)((0,n.$j)((function(e){return{messagesPage:e.dialogsPage,authPhoto:e.auth.photo}}),(function(e){return{sendMessage:function(s){e((0,t.$)(s))}}})),o.e)(C)}}]);
//# sourceMappingURL=642.562d309c.chunk.js.map