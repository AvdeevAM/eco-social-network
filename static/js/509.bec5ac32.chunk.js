"use strict";(self.webpackChunkeco_social_network=self.webpackChunkeco_social_network||[]).push([[509],{9625:function(e,o,t){t.d(o,{e:function(){return h}});var s=t(1413),r=t(5671),i=t(3144),n=t(136),a=t(3668),l=t(2791),u=t(6871),c=t(8687),d=t(184),p=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var o=function(o){(0,n.Z)(l,o);var t=(0,a.Z)(l);function l(){return(0,r.Z)(this,l),t.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,s.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(p)(o)}},8509:function(e,o,t){t.r(o),t.d(o,{default:function(){return C}});var s=t(1413),r=t(5671),i=t(3144),n=t(136),a=t(3668),l=t(2791),u=t(8687),c=t(6508),d={postsBlock:"MyPosts_postsBlock__v3+cd",posts:"MyPosts_posts__vpq1W"},p="Post_item__gptSG",h=t(184),f=function(e){return(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147142.png",alt:""}),e.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["like ",e.likesCount]})})]})},m=t(5705),x=t(132),j=t(1948),v=t(2413),b=function(e){return(0,h.jsx)(m.J9,{onSubmit:e.addPost,initialValues:{},validationSchema:e.postSchema,children:function(e){var o=e.handleSubmit,t=e.isValid,s=e.dirty,r=e.touched,i=e.errors;return(0,h.jsxs)(m.l0,{onSubmit:o,className:d.newMessage,children:[(0,j.Gr)("textarea","newPostText","Type new post"),r.newPostText&&i.newPostText&&(0,h.jsx)("p",{className:d.error,children:i.newPostText}),(0,v.a)(void 0,"Add post","submit",{disabled:!t&&!s&&r.newMessageBody})]})}})},g=function(e){var o=e.posts.map((function(e){return(0,h.jsx)(f,{message:e.message,likesCount:e.likesCount},e.id)})),t=x.Ry().shape({newPostText:x.Z_().max(10,"Message is too long").required("Type text to send message")});return(0,h.jsxs)("div",{className:d.postsBlock,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)("div",{children:(0,h.jsx)(b,{addPost:function(o,t){var s=t.resetForm;e.addPost(o.newPostText),s({values:{newPostText:""}})},postSchema:t})}),(0,h.jsx)("div",{className:d.posts,children:o})]})},_=(0,u.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(o){e((0,c.Wl)(o))}}}))(g),k=t(885),P=t(1628),S={descriptionBlock:"ProfileInfo_descriptionBlock__XH+mM",contacts:"ProfileInfo_contacts__EHL5j",lookingForAJob:"ProfileInfo_lookingForAJob__eXd3+",profilePhoto:"ProfileInfo_profilePhoto__XFo7Q",error:"ProfileInfo_error__DbbRi",imageUploadWrapper:"ProfileInfo_imageUploadWrapper__08W6k",imageUploadInput:"ProfileInfo_imageUploadInput__6Z68v",imageUploadLabel:"ProfileInfo_imageUploadLabel__o9BDE"},N=t(7437),Z=t(2422),y=function(e){var o=(0,l.useState)(!1),t=(0,k.Z)(o,2),s=t[0],r=t[1],i=(0,l.useState)(e.status),n=(0,k.Z)(i,2),a=n[0],u=n[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Status"}),":",!s&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"--------------"})}),s&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(a)},value:a})})]})},w=t(9857),q=function(e){var o=e.contactName,t=e.contactValue;return(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:o}),": ",t]})},T=function(e){var o=x.Ry().shape({fullName:x.Z_().min(3,"Too Short!").max(25,"Too Long!").required("Required"),aboutMe:x.Z_().min(3,"Too Short!").max(35,"Too Long!").required("Required"),contacts:x.Ry({facebook:x.Z_().min(3,"Too Short!").required("Required"),website:x.Z_().min(3,"Too Short!").required("Required"),vk:x.Z_().min(3,"Too Short!").required("Required"),twitter:x.Z_().min(3,"Too Short!").required("Required"),instagram:x.Z_().min(3,"Too Short!").required("Required"),youtube:x.Z_().min(3,"Too Short!").required("Required"),github:x.Z_().min(3,"Too Short!").required("Required"),mainLink:x.Z_().min(3,"Too Short!").required("Required")})});return(0,h.jsx)(m.J9,{onSubmit:e.saveProfileInfoData,initialValues:(0,s.Z)({},e.profile),validationSchema:o,children:function(o){return(0,h.jsxs)(m.l0,{onSubmit:o.handleSubmit,children:[o.status,(0,v.a)(void 0,"Save","submit",{props:null}),(0,h.jsxs)("div",{className:S.fullName,children:[(0,h.jsx)("b",{children:"Full name"}),": ",(0,j.Gr)("input","fullName","Full name"),o.errors.fullName&&(0,h.jsx)("p",{className:S.error,children:o.errors.fullName})]}),(0,h.jsxs)("div",{className:S.aboutMe,children:[(0,h.jsx)("b",{children:"About me"}),": ",(0,j.Gr)("input","aboutMe","About me"),o.errors.aboutMe&&(0,h.jsx)("p",{className:S.error,children:o.errors.aboutMe})]}),(0,h.jsx)("b",{children:"Contacts"}),":",(0,h.jsx)("div",{className:S.contacts,children:Object.keys(e.profile.contacts).map((function(e){var t,s;return(0,h.jsxs)("div",{children:[e,": ",(0,j.Gr)("input","contacts."+e,e),(null===(t=o.errors.contacts)||void 0===t?void 0:t[e])&&(0,h.jsx)("p",{className:S.error,children:null===(s=o.errors.contacts)||void 0===s?void 0:s[e]})]},e)}))}),(0,h.jsxs)("div",{className:S.lookingForAJob,children:[(0,h.jsx)("b",{children:"Looking for a job right now:"}),(0,j.Gr)("input","lookingForAJob",null,{type:"checkbox"})]}),(0,h.jsxs)("div",{className:S.lookingForAJobDescription,children:[(0,h.jsx)("b",{children:"Job description"}),":"," ",(0,j.Gr)("input","lookingForAJobDescription","Describe the job you are looking for..."),(0,h.jsx)("p",{className:S.error,children:o.errors.lookingForAJobDescription})]})]})}})},A=function(e){return(0,h.jsxs)("div",{children:[e.isOwner&&(0,v.a)(void 0,"Edit","button",{onClick:e.switchOnEditMode}),(0,h.jsxs)("div",{className:S.aboutMe,children:[(0,h.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]}),(0,h.jsx)("b",{children:"Contacts"}),":",(0,h.jsx)("div",{className:S.contacts,children:Object.keys(e.profile.contacts).map((function(o){return(0,h.jsx)(q,{contactName:o,contactValue:e.profile.contacts[o]},o)}))}),(0,h.jsxs)("div",{className:S.lookingForAJob,children:[(0,h.jsx)("b",{children:"Looking for a job right now:"}),(0,h.jsx)("img",{src:!0===e.profile.lookingForAJob?N:Z,alt:""})]}),e.profile.lookingForAJob&&(0,h.jsxs)("div",{className:S.lookingForAJobDescription,children:[(0,h.jsx)("b",{children:"Job description"}),": ",e.profile.lookingForAJobDescription]})]})},D=function(e){var o=(0,l.useState)(!1),t=(0,k.Z)(o,2),r=t[0],i=t[1];if(!e.profile)return(0,h.jsx)(P.Z,{});return(0,h.jsxs)("div",{className:S.descriptionBlock,children:[(0,h.jsx)("div",{children:(0,h.jsx)("h2",{children:e.profile.fullName})}),(0,h.jsx)("img",{className:S.profilePhoto,src:e.profile.photos.large||w,alt:""}),e.isOwner&&(0,h.jsxs)("div",{className:S.imageUploadWrapper,children:[(0,h.jsx)("label",{className:S.imageUploadLabel,htmlFor:"imageUpload",children:"Change picture"}),(0,h.jsx)("input",{className:S.imageUploadInput,type:"file",name:"imageUpload",onChange:function(o){o.target.files.length&&e.savePhoto(o.target.files[0])}})]}),(0,h.jsx)(y,{status:e.status,updateStatus:e.updateStatus}),r?(0,h.jsx)(T,(0,s.Z)((0,s.Z)({},e),{},{saveProfileInfoData:function(o,t){e.saveData(o,t.setSubmitting,t.setStatus),t.setSubmitting(!0),i(!1)}})):(0,h.jsx)(A,(0,s.Z)((0,s.Z)({},e),{},{switchOnEditMode:function(){i(!0)}}))]})},F=function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)(D,{saveData:e.saveData,isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),(0,h.jsx)(_,{})]})},U=t(9625),I=t(7781),J=t(5841),M=function(e){(0,n.Z)(t,e);var o=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),o.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e;null!==this.props.match&&(e=this.props.match.params.userId||this.props.authorizedUserId),e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){e.match!==this.props.match&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(F,(0,s.Z)((0,s.Z)({},this.props),{},{saveData:this.props.saveData,isOwner:!this.props.match,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),C=(0,I.qC)((0,u.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.userId}}),{getUserProfile:c.et,getUserStatus:c.Tq,updateStatus:c.Nf,savePhoto:c.Ju,saveData:c.OH}),J.W,U.e)(M)},2422:function(e,o,t){e.exports=t.p+"static/media/symbol_no.463407a87d2defb65cce.png"},7437:function(e,o,t){e.exports=t.p+"static/media/symbol_yes.d39139e3013efddfb742.png"}}]);
//# sourceMappingURL=509.bec5ac32.chunk.js.map