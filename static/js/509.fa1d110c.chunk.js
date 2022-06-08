"use strict";(self.webpackChunkeco_social_network=self.webpackChunkeco_social_network||[]).push([[509],{9625:function(e,t,s){s.d(t,{e:function(){return p}});var o=s(1413),r=s(5671),i=s(3144),n=s(136),a=s(3668),u=s(2791),c=s(6871),l=s(8687),d=s(184),h=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){(0,n.Z)(u,t);var s=(0,a.Z)(u);function u(){return(0,r.Z)(this,u),s.apply(this,arguments)}return(0,i.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,o.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)(h)(t)}},8509:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var o=s(1413),r=s(5671),i=s(3144),n=s(136),a=s(3668),u=s(2791),c=s(8687),l=s(6508),d={postsBlock:"MyPosts_postsBlock__v3+cd",posts:"MyPosts_posts__vpq1W"},h="Post_item__gptSG",p=s(184),f=function(e){return(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/147/147142.png",alt:""}),e.message,(0,p.jsx)("div",{children:(0,p.jsxs)("span",{children:["like ",e.likesCount]})})]})},m=s(5705),x=s(132),j=function(e){return(0,p.jsx)(m.J9,{onSubmit:e.addPost,initialValues:{},validationSchema:e.postSchema,children:function(e){var t=e.handleSubmit,s=e.isValid,o=e.dirty,r=e.touched,i=e.errors;return(0,p.jsxs)(m.l0,{onSubmit:t,className:d.newMessage,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(m.gN,{component:"textarea",placeholder:"Type new post",name:"newPostText"}),r.newPostText&&i.newPostText&&(0,p.jsx)("p",{className:d.error,children:i.newPostText})]}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{disabled:!s&&!o,type:"submit",children:"Add post"})})]})}})},v=function(e){var t=e.posts.map((function(e){return(0,p.jsx)(f,{message:e.message,likesCount:e.likesCount},e.id)})),s=x.Ry().shape({newPostText:x.Z_().max(10,"Message is too long").required("Type text to send message")});return(0,p.jsxs)("div",{className:d.postsBlock,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)("div",{children:(0,p.jsx)(j,{addPost:function(t){e.addPost(t.newPostText)},postSchema:s})}),(0,p.jsx)("div",{className:d.posts,children:t})]})},b=(0,c.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e((0,l.Wl)(t))}}}))(v),g=s(885),k=s(1628),_={descriptionBlock:"ProfileInfo_descriptionBlock__XH+mM",contacts:"ProfileInfo_contacts__EHL5j",lookingForAJob:"ProfileInfo_lookingForAJob__eXd3+",profilePhoto:"ProfileInfo_profilePhoto__XFo7Q",error:"ProfileInfo_error__DbbRi"},S=s(7437),P=s(2422),Z=function(e){var t=(0,u.useState)(!1),s=(0,g.Z)(t,2),o=s[0],r=s[1],i=(0,u.useState)(e.status),n=(0,g.Z)(i,2),a=n[0],c=n[1];(0,u.useEffect)((function(){c(e.status)}),[e.status]);return(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Status"}),":",!o&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"--------------"})}),o&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(a)},value:a})})]})},N=s(9857),y=function(e){var t=e.contactName,s=e.contactValue;return(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:t}),": ",s]})},q=s(1948),w=function(e){var t=x.Ry().shape({fullName:x.Z_().min(3,"Too Short!").max(25,"Too Long!").required("Required"),aboutMe:x.Z_().min(3,"Too Short!").max(35,"Too Long!").required("Required"),contacts:x.Ry({facebook:x.Z_().min(3,"Too Short!").required("Required"),website:x.Z_().min(3,"Too Short!").required("Required"),vk:x.Z_().min(3,"Too Short!").required("Required"),twitter:x.Z_().min(3,"Too Short!").required("Required"),instagram:x.Z_().min(3,"Too Short!").required("Required"),youtube:x.Z_().min(3,"Too Short!").required("Required"),github:x.Z_().min(3,"Too Short!").required("Required"),mainLink:x.Z_().min(3,"Too Short!").required("Required")})});return(0,p.jsx)(m.J9,{onSubmit:e.saveProfileInfoData,initialValues:(0,o.Z)({},e.profile),validationSchema:t,children:function(t){return(0,p.jsxs)(m.l0,{onSubmit:t.handleSubmit,children:[t.status,(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"submit",children:"Save"})}),(0,p.jsxs)("div",{className:_.fullName,children:[(0,p.jsx)("b",{children:"Full name"}),": ",(0,q.Gr)("input","fullName","Full name"),t.errors.fullName&&(0,p.jsx)("p",{className:_.error,children:t.errors.fullName})]}),(0,p.jsxs)("div",{className:_.aboutMe,children:[(0,p.jsx)("b",{children:"About me"}),": ",(0,q.Gr)("input","aboutMe","About me"),t.errors.aboutMe&&(0,p.jsx)("p",{className:_.error,children:t.errors.aboutMe})]}),(0,p.jsx)("b",{children:"Contacts"}),":",(0,p.jsx)("div",{className:_.contacts,children:Object.keys(e.profile.contacts).map((function(e){var s,o;return(0,p.jsxs)("div",{children:[e,": ",(0,q.Gr)("input","contacts."+e,e),(null===(s=t.errors.contacts)||void 0===s?void 0:s[e])&&(0,p.jsx)("p",{className:_.error,children:null===(o=t.errors.contacts)||void 0===o?void 0:o[e]})]},e)}))}),(0,p.jsxs)("div",{className:_.lookingForAJob,children:[(0,p.jsx)("b",{children:"Looking for a job right now:"}),(0,q.Gr)("input","lookingForAJob",null,{type:"checkbox"})]}),(0,p.jsxs)("div",{className:_.lookingForAJobDescription,children:[(0,p.jsx)("b",{children:"Job description"}),":"," ",(0,q.Gr)("input","lookingForAJobDescription","Describe the job you are looking for..."),(0,p.jsx)("p",{className:_.error,children:t.errors.lookingForAJobDescription})]})]})}})},T=function(e){return(0,p.jsxs)("div",{children:[e.isOwner&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:e.switchOnEditMode,children:"Edit"})}),(0,p.jsxs)("div",{className:_.aboutMe,children:[(0,p.jsx)("b",{children:"About me"}),": ",e.profile.aboutMe]}),(0,p.jsx)("b",{children:"Contacts"}),":",(0,p.jsx)("div",{className:_.contacts,children:Object.keys(e.profile.contacts).map((function(t){return(0,p.jsx)(y,{contactName:t,contactValue:e.profile.contacts[t]},t)}))}),(0,p.jsxs)("div",{className:_.lookingForAJob,children:[(0,p.jsx)("b",{children:"Looking for a job right now:"}),(0,p.jsx)("img",{src:!0===e.profile.lookingForAJob?S:P,alt:""})]}),e.profile.lookingForAJob&&(0,p.jsxs)("div",{className:_.lookingForAJobDescription,children:[(0,p.jsx)("b",{children:"Job description"}),": ",e.profile.lookingForAJobDescription]})]})},A=function(e){var t=(0,u.useState)(!1),s=(0,g.Z)(t,2),r=s[0],i=s[1];if(!e.profile)return(0,p.jsx)(k.Z,{});return(0,p.jsxs)("div",{className:_.descriptionBlock,children:[(0,p.jsx)("div",{children:(0,p.jsx)("h2",{children:e.profile.fullName})}),(0,p.jsx)("img",{className:_.profilePhoto,src:e.profile.photos.large||N,alt:""}),e.isOwner&&(0,p.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),(0,p.jsx)(Z,{status:e.status,updateStatus:e.updateStatus}),r?(0,p.jsx)(w,(0,o.Z)((0,o.Z)({},e),{},{saveProfileInfoData:function(t,s){e.saveData(t,s.setSubmitting,s.setStatus),s.setSubmitting(!0),i(!1)}})):(0,p.jsx)(T,(0,o.Z)((0,o.Z)({},e),{},{switchOnEditMode:function(){i(!0)}}))]})},D=function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)(A,{saveData:e.saveData,isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),(0,p.jsx)(b,{})]})},F=s(9625),J=s(7781),M=s(5841),C=function(e){(0,n.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,r.Z)(this,s),t.apply(this,arguments)}return(0,i.Z)(s,[{key:"refreshProfile",value:function(){var e;null!==this.props.match&&(e=this.props.match.params.userId||this.props.authorizedUserId),e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){e.match!==this.props.match&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(D,(0,o.Z)((0,o.Z)({},this.props),{},{saveData:this.props.saveData,isOwner:!this.props.match,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(u.Component),R=(0,J.qC)((0,c.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.userId}}),{getUserProfile:l.et,getUserStatus:l.Tq,updateStatus:l.Nf,savePhoto:l.Ju,saveData:l.OH}),M.W,F.e)(C)},2422:function(e,t,s){e.exports=s.p+"static/media/symbol_no.463407a87d2defb65cce.png"},7437:function(e,t,s){e.exports=s.p+"static/media/symbol_yes.d39139e3013efddfb742.png"}}]);
//# sourceMappingURL=509.fa1d110c.chunk.js.map