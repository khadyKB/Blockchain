(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,n){e.exports=n(431)},238:function(e,t,n){},240:function(e,t,n){},431:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(238),n(81)),i=n(82),s=n(88),u=n(83),m=n(89),d=n(437),p=n(439),g=n(435),h=(n(240),n(68)),E=n.n(h),f=n(27),b=n.n(f),v=n(7),y=n.n(v),j=n(43),O=n(438),x=r.a.createContext(),C=Object(O.a)(y()(function(e){return{main:Object(j.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useContext)(x);return n.state.address||n.getAccount().then(function(t){console.log(t),t&&(n.setAddress(t.address),n.getBalance().then(function(t){n.setBalance(t.balance),e.history.push("/")}))}),r.a.createElement("main",{className:t.main},r.a.createElement(E.a,null),r.a.createElement(b.a,{className:t.paper},"R\xe9cup\xe9ration de votre compte ..."))})),w=n(3),S=n(20),k=n(15),N=n(25),B=n(69),T=n.n(B),A=Object(S.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(T.a,{className:t.progress}))}),M=Object(S.withStyles)(function(e){return{root:Object(N.a)({width:"100%",overflowX:"auto"},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),table:{minWidth:700}}})(function(e){var t=e.classes,n=e.transactions,a=!!e.isLoading&&e.isLoading;return r.a.createElement(w.r,{className:t.root},r.a.createElement(w.w,{className:t.table},r.a.createElement(w.z,null,r.a.createElement(w.A,null,r.a.createElement(w.y,{numeric:!0},"Montant"),r.a.createElement(w.y,null,"De"),r.a.createElement(w.y,null,"Id de la transaction"))),r.a.createElement(w.x,null,a?r.a.createElement(w.A,null,r.a.createElement(w.y,{colSpan:3,style:{textAlign:"center"}},r.a.createElement(A,null))):0===n.length?r.a.createElement(w.A,null,r.a.createElement(w.y,{colSpan:3,style:{textAlign:"center"}},r.a.createElement(w.C,{variant:"body2",component:"div"},"Aucune transaction"))):n.map(function(e){return r.a.createElement(w.A,{key:e.txOutId},r.a.createElement(w.y,{numeric:!0},e.amount),r.a.createElement(w.y,null,e.address),r.a.createElement(w.y,null,e.txOutId))}))))}),D=r.a.createContext(),I=Object(S.withStyles)(function(e){return{root:Object(N.a)({width:"100%",overflowX:"auto"},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),pageHeader:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},table:{minWidth:700}}})(function(e){var t=e.classes,n=Object(a.useState)(),c=Object(k.a)(n,2),l=c[0],o=c[1],i=Object(a.useContext)(D);return l||i.getMyHistory().then(function(e){return o(e.unspentTxOuts.reverse().slice(0,10))}),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.e,null),r.a.createElement(w.C,{className:t.pageHeader,variant:"h4",gutterBottom:!0,component:"h3"},"Mes derni\xe8res transactions recu"),r.a.createElement(M,{transactions:l,isLoading:!l}))}),L=Object(S.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center"}})(function(e){var t=Object(a.useContext)(x);return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.C,{variant:"h3",gutterBottom:!0,component:"h3"},"Tableau de bord"),r.a.createElement(w.C,{component:"div",variant:"body1",gutterBottom:!0},"Nombre de jeton EZMoney : ",t.state.balance),r.a.createElement(I,null))}),P=n(436),H=n(6),W=n.n(H),F=n(186),q=n.n(F),z=n(187),R=n.n(z),V=n(87),X=n.n(V),G=n(188),J=n.n(G),U=n(182),Z=n.n(U),$=n(183),K=n.n($),Q=n(184),Y=n.n(Q),_=n(185),ee=n.n(_),te=n(434),ne=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(te.a,{to:this.props.to,style:{textDecoration:"none"}},r.a.createElement(w.o,{button:!0},r.a.createElement(w.p,null,this.props.icon),r.a.createElement(w.q,{primary:this.props.text})))}}]),t}(a.Component),ae=r.a.createElement("div",null,r.a.createElement(ne,{icon:r.a.createElement(Z.a,null),to:"/",text:"Tableau de bord"}),r.a.createElement(ne,{icon:r.a.createElement(K.a,null),to:"/send",text:"Envoyer"}),r.a.createElement(ne,{icon:r.a.createElement(Y.a,null),to:"/receive",text:"Recevoir"}),r.a.createElement(ne,{icon:r.a.createElement(ee.a,null),to:"/buy",text:"Acheter des tokens"})),re=new Worker("miner.js"),ce=Object(O.a)(Object(S.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,paddingBottom:"50px",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(j.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useContext)(x),c=(Object(a.useContext)(D),Object(a.useState)(!0)),l=Object(k.a)(c,2),o=l[0],i=l[1],s=Object(a.useState)(!1),u=Object(k.a)(s,2),m=u[0],d=u[1];setTimeout(function(){n.getBalance().then(function(e){n.setBalance(e.balance)})},1e4);return r.a.createElement("div",{className:t.root},r.a.createElement(w.d,null),r.a.createElement(w.a,{position:"absolute",className:W()(t.appBar,o&&t.appBarShift)},r.a.createElement(w.B,{disableGutters:!o,className:t.toolbar},r.a.createElement(w.j,{color:"inherit","aria-label":"Open drawer",onClick:function(e){return i(!0)},className:W()(t.menuButton,o&&t.menuButtonHidden)},r.a.createElement(q.a,null)),r.a.createElement(w.C,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Home"),r.a.createElement(w.C,{color:"inherit"},"Minage ?",r.a.createElement(w.v,{checked:m,onChange:function(e){return function(e){d(e.target.checked),e.target.checked?(re.postMessage({launch:!0,miningUrl:"http://localhost:3001/mineBlock"}),re.onmessage=function(e){}):re.postMessage({launch:!1})}(e)},inputProps:{"aria-label":"secondary checkbox"}})),r.a.createElement(w.C,{color:"inherit"},r.a.createElement(w.b,{badgeContent:n.state.balance?n.state.balance:0,color:"secondary"},r.a.createElement(X.a,null))))),r.a.createElement(w.f,{variant:"permanent",classes:{paper:W()(t.drawerPaper,!o&&t.drawerPaperClose)},open:o},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(w.j,{onClick:function(e){return i(!1)}},r.a.createElement(R.a,null))),r.a.createElement("div",null,r.a.createElement(w.e,null),r.a.createElement(w.n,null,ae),r.a.createElement(w.e,null)),r.a.createElement("div",null,r.a.createElement(w.e,null),r.a.createElement(w.o,{button:!0,onClick:function(t){return n.logout(),void e.history.push("/")}},r.a.createElement(w.p,null,r.a.createElement(J.a,null)),r.a.createElement(w.q,{primary:"Se d\xe9connecter"})))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),e.children))})),le=function(e){return Object(a.useContext)(x).isAuthenticated()?r.a.createElement(ce,null,r.a.createElement(p.a,null,e.children)):r.a.createElement(P.a,{to:"/login"})},oe=n(54),ie="http://localhost:3001",se=function(e){var t=Object(a.useState)(0),n=Object(k.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(),i=Object(k.a)(o,2),s=i[0],u=i[1];return r.a.createElement(x.Provider,{value:{isAuthenticated:function(){return!!s},logout:function(){u(null),window.close()},getAccount:function(){return fetch(ie+"/address").then(function(e){return e.json()})},getBalance:function(){return fetch(ie+"/balance").then(function(e){return e.json()})},state:{balance:c,address:s},setAddress:u,setBalance:l}},e.children)},ue=function(e){var t=Object(a.useState)([]),n=Object(k.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(!1),i=Object(k.a)(o,2),s=i[0],u=(i[1],Object(a.useContext)(x));return r.a.createElement(D.Provider,{value:{findAll:function(){return fetch("http://localhost:3001/blocks").then(function(e){var t=e.json();return l(t),t})},getMyTransactions:function(){return fetch("http://localhost:3001/myTransaction").then(function(e){return e.json()})},getTransactions:function(){return c},getMyUnspentTxOuts:function(){return fetch("http://localhost:3001/myUnspentTransactionOutputs").then(function(e){return e.json()})},getMyHistory:function(){return console.log("myHistory"),fetch("http://localhost:3001/address/"+u.state.address).then(function(e){return e.json()})},sendTransaction:function(e,t){return fetch("http://localhost:3001/sendTransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:e,amount:t})}).then(function(e){return e.json()})},mineBlock:function(){return fetch("http://localhost:3001/mineBlock",{method:"POST"}).then(function(e){return e.json()})},state:{isLoading:s,list:c}}},e.children)},me=Object(S.withStyles)(function(e){return{root:Object(N.a)({width:"100%",overflowX:"auto"},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),table:{minWidth:700}}})(function(e){var t=e.classes,n=e.transactions,a=!!e.isLoading&&e.isLoading;return r.a.createElement(w.r,{className:t.root},r.a.createElement(w.w,{className:t.table},r.a.createElement(w.z,null,r.a.createElement(w.A,null,r.a.createElement(w.y,null,"Montant"),r.a.createElement(w.y,null,"A"))),r.a.createElement(w.x,null,a?r.a.createElement(w.A,null,r.a.createElement(w.y,{colSpan:3,style:{textAlign:"center"}},r.a.createElement(A,null))):0===n.length?r.a.createElement(w.A,null,r.a.createElement(w.y,{colSpan:3,style:{textAlign:"center"}},r.a.createElement(w.C,{variant:"body2",component:"div"},"Aucune transaction"))):n.map(function(e,t){return r.a.createElement(w.A,{key:t},r.a.createElement(w.y,{numeric:!0},e.amount),r.a.createElement(w.y,null,e.address))}))))}),de=n(29),pe=n.n(de),ge=n(71),he=n.n(ge),Ee=n(75),fe=n.n(Ee),be=n(73),ve=n.n(be),ye=n(74),je=n.n(ye),Oe=n(72),xe=n.n(Oe),Ce=n(76),we=n.n(Ce)()()(function(e){var t=e.fullScreen;return r.a.createElement(he.a,{fullScreen:t,open:e.open,onClose:function(t){return e.toggleDisplay(!1)},"aria-labelledby":"responsive-dialog-title"},r.a.createElement(xe.a,{id:"responsive-dialog-title"},"Confirmation requise"),r.a.createElement(ve.a,null,r.a.createElement(je.a,null,e.text?e.text:"Etes-vous s\xfbr de vouloir r\xe9aliser cette op\xe9ration ?")),r.a.createElement(fe.a,null,r.a.createElement(pe.a,{onClick:function(t){return e.toggleDisplay(!1)},color:"primary"},"Annuler"),r.a.createElement(pe.a,{onClick:function(t){return e.toggleDisplay(!0)},color:"primary",autoFocus:!0},"Confirmer")))}),Se=n(194),ke=n(189),Ne=n.n(ke),Be=n(191),Te=n.n(Be),Ae=n(192),Me=n.n(Ae),De=n(193),Ie=n.n(De),Le=n(127),Pe=n.n(Le),He=n(128),We=n.n(He),Fe=n(52),qe=n.n(Fe),ze=n(53),Re=n.n(ze),Ve=n(190),Xe=n.n(Ve),Ge={success:Ne.a,warning:Xe.a,error:Te.a,info:Me.a};var Je=Object(S.withStyles)(function(e){return{success:{backgroundColor:Pe.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:We.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,n=e.className,a=e.message,c=e.onClose,l=e.variant,o=Object(Se.a)(e,["classes","className","message","onClose","variant"]),i=Ge[l];return r.a.createElement(Re.a,Object.assign({className:W()(t[l],n),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(i,{className:W()(t.icon,t.iconVariant)}),a),action:[r.a.createElement(qe.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:c},r.a.createElement(Ie.a,{className:t.icon}))]},o))}),Ue=Object(S.withStyles)(function(e){return{paper:{marginTop:5*e.spacing.unit,display:"flex",width:"50%",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center"},input:{width:"60%"},title:{marginTop:"".concat(8*e.spacing.unit,"px"),marginBottom:"".concat(3*e.spacing.unit,"px")}}})(function(e){var t=Object(a.useContext)(D),n=Object(a.useState)(),c=Object(k.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(""),s=Object(k.a)(i,2),u=s[0],m=s[1],d=Object(a.useState)(0),p=Object(k.a)(d,2),g=p[0],h=p[1],E=Object(a.useState)({open:!1,text:"",variant:""}),f=Object(k.a)(E,2),b=f[0],v=f[1],y=Object(a.useState)(!1),j=Object(k.a)(y,2),O=j[0],x=j[1],C=e.classes,S=function(e,t){"clickaway"!==t&&v(Object(N.a)({},b,{open:!1}))};return l||function e(){t.getMyTransactions().then(function(t){o(t.reverse()),setTimeout(e,5e3)})}(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(w.C,{variant:"h4",component:"div"},"Envoyer de l'argent"),r.a.createElement(w.r,{className:C.paper},r.a.createElement("form",{className:C.form,onSubmit:function(e){e.preventDefault(),x(!0)}},r.a.createElement(w.g,{margin:"normal",className:C.input,required:!0},r.a.createElement(w.m,{htmlFor:"recipient"},"Destinataire"),r.a.createElement(w.k,{id:"recipient",name:"recipient",onChange:function(e){return m(e.target.value)},value:u,autoFocus:!0})),r.a.createElement(w.g,{margin:"normal",className:C.input,required:!0},r.a.createElement(w.m,{htmlFor:"montant"},"Montant"),r.a.createElement(w.k,{id:"montant",name:"montant",type:"number",inputProps:{min:0,step:.01},onChange:function(e){return h(parseFloat(e.target.value))},value:g,endAdornment:r.a.createElement(w.l,{position:"start"},r.a.createElement(X.a,null))})),r.a.createElement(w.c,{type:"submit",variant:"contained",color:"secondary",style:{width:"50%"},disabled:!(g&&u&&0!==g)},"Envoyer"))),r.a.createElement(w.e,null),r.a.createElement(w.C,{variant:"h4",component:"div",className:C.title},"Mes envois"," "),r.a.createElement(w.C,{variant:"caption",component:"span"},"Les envois en attente de validation ne sont pas affich\xe9"),r.a.createElement(me,{transactions:l,isLoading:!l})),r.a.createElement(we,{open:O,toggleDisplay:function(e){x(!1),v(Object(N.a)({},b,{open:!1})),!0===e?(console.log(u,g),t.sendTransaction(u,g).then(function(e){v(e?{text:"Op\xe9ration r\xe9ussie",variant:"success",open:!0}:{text:"Op\xe9ration \xe9chou\xe9e, veuillez recommencer",variant:"error",open:!0})})):console.log("Annuler")},text:"Etes-vous s\xfbr de vouloir envoyer ".concat(g," tokens ?")}),r.a.createElement(w.u,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:b.open,autoHideDuration:3e3,onClose:S},r.a.createElement(Je,{onClose:S,variant:b.variant,message:b.text})))}),Ze=Object(S.withStyles)(function(e){return{pageHeader:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(function(e){var t=e.classes,n=Object(a.useState)(),c=Object(k.a)(n,2),l=c[0],o=c[1],i=Object(a.useContext)(D);return l||i.getMyHistory().then(function(e){return o(e.unspentTxOuts.reverse())}),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.e,null),r.a.createElement(w.C,{className:t.pageHeader,variant:"h4",gutterBottom:!0,component:"h3"},"Transactions re\xe7ues"),r.a.createElement(M,{transactions:l,isLoading:!l}))}),$e=n(77),Ke=n.n($e),Qe=n(78),Ye=n.n(Qe),_e=n(79),et=n.n(_e),tt=n(22),nt=n.n(tt);var at=Object(S.withStyles)(function(e){return{root:{width:"90%"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(function(e){var t=e.activeStep,n=e.handleNext,a=e.handleBack,c=e.stepContent,l=e.classes,o=e.canNext,i=["S\xe9lectionner le montant d\xe9sir\xe9","Entrer vos coordonn\xe9es bancaires"];return r.a.createElement("div",{className:l.root},r.a.createElement(Ke.a,{activeStep:t},i.map(function(e,t){return r.a.createElement(Ye.a,Object.assign({key:e},{}),r.a.createElement(et.a,{},e))})),r.a.createElement("div",null,t===i.length?r.a.createElement("div",null,r.a.createElement(nt.a,{className:l.instructions},"Merci de votre achat nous vous livrerons vos jetons dans lesplus bref d\xe9lais")):r.a.createElement("div",null,c,r.a.createElement("div",null,r.a.createElement(pe.a,{disabled:0===t,onClick:a,className:l.button},"Pr\xe9c\xe9dent"),r.a.createElement(pe.a,{variant:"contained",color:"primary",onClick:n,disabled:o(),className:l.button},t===i.length-1?"Termin\xe9":"Suivant")))))}),rt=Object(S.withStyles)(function(e){return{formControl:{margin:3*e.spacing.unit},group:{margin:e.spacing.unit}}})(function(e){var t=e.handleChange,n=e.selected,a=e.classes;return r.a.createElement(w.g,{component:"fieldset",className:a.formControl},r.a.createElement(w.i,{component:"legend"},"Choisissez une offre"),r.a.createElement(w.t,{"aria-label":"Choice",name:"choice1",className:a.group,value:n,onChange:t},r.a.createElement(w.h,{value:"50",control:r.a.createElement(w.s,null),label:"50 jetons"}),r.a.createElement(w.h,{value:"100",control:r.a.createElement(w.s,null),label:"100 jetons"}),r.a.createElement(w.h,{value:"150",control:r.a.createElement(w.s,null),label:"150 jetons"}),r.a.createElement(w.h,{value:"300",control:r.a.createElement(w.s,null),label:"300 jetons"})))}),ct=n(30),lt=n.n(ct),ot=n(34),it=n.n(ot),st=n(70),ut=n.n(st),mt=n(80),dt=n.n(mt),pt=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt.a,{variant:"h6",gutterBottom:!0},"Payment method"),r.a.createElement(lt.a,{container:!0,spacing:5},r.a.createElement(lt.a,{item:!0,xs:12,md:6},r.a.createElement(it.a,{required:!0,id:"cardName",label:"Nom su rla crate",fullWidth:!0})),r.a.createElement(lt.a,{item:!0,xs:12,md:6},r.a.createElement(it.a,{required:!0,id:"cardNumber",label:"Num\xe9ro",fullWidth:!0})),r.a.createElement(lt.a,{item:!0,xs:12,md:6},r.a.createElement(it.a,{required:!0,id:"expDate",label:"Date d'expiration",fullWidth:!0})),r.a.createElement(lt.a,{item:!0,xs:12,md:6},r.a.createElement(it.a,{required:!0,id:"cvv",label:"CVV",helperText:"Les 3 chiffres au dos de votre cartes",fullWidth:!0})),r.a.createElement(lt.a,{item:!0,xs:12},r.a.createElement(ut.a,{control:r.a.createElement(dt.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Se souvenir de ma carte ?"}))))},gt=Object(S.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center"}})(function(e){Object(a.useContext)(x);var t=r.a.useState(0),n=Object(k.a)(t,2),c=n[0],l=n[1],o=r.a.useState(),i=Object(k.a)(o,2),s=i[0],u=i[1],m=r.a.useState(),d=Object(k.a)(m,2),p=d[0],g=d[1];return r.a.createElement(at,{handleBack:function(){l(function(e){return e-1})},handleNext:function(){l(function(e){return e+1})},activeStep:c,stepContent:function(){switch(c){case 0:return r.a.createElement(rt,{selected:s,handleChange:function(e){return u(e.target.value)}});case 1:return r.a.createElement(pt,{paymentInfomation:p,handleChange:function(e){return g(e)}});default:return r.a.createElement(w.C,null,"Erreur")}}(),canNext:function(){switch(c){case 0:return!s;case 1:default:return!0}}})}),ht=Object(S.createMuiTheme)({palette:{primary:oe.deepPurple,secondary:oe.blue},typography:{useNextVariants:!0}}),Et=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.MuiThemeProvider,{theme:ht},r.a.createElement(d.a,null,r.a.createElement(se,null,r.a.createElement(ue,null,r.a.createElement(p.a,null,r.a.createElement(g.a,{path:"/login",component:C}),r.a.createElement(le,null,r.a.createElement(g.a,{path:"/home",component:L}),r.a.createElement(g.a,{path:"/send",component:Ue}),r.a.createElement(g.a,{path:"/receive",component:Ze}),r.a.createElement(g.a,{path:"/buy",component:gt}),r.a.createElement(g.a,{component:L})))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[233,2,1]]]);
//# sourceMappingURL=main.6408d6e5.chunk.js.map