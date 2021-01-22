(this["webpackJsonpJose-Antonio_LoverBus"]=this["webpackJsonpJose-Antonio_LoverBus"]||[]).push([[0],{143:function(e,t,n){},207:function(e,t,n){},230:function(e,t,n){},298:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),i=n.n(r),s=n(41),c=n.n(s),o=n(154),l=n(19),u=n(28),d=n(115),j=n(172),b=n(30),p=n(44),m=n.n(p),O=n(155),h=n(80),x=(n(207),n(208),n(31)),f=n(310),g=n.n(f);function v(){var e=Object(x.a)(["\n  query signIn (\n    $username: String!\n    $password: String!\n  ) {\n    signIn(\n        username: $username\n        password: $password\n    )\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(x.a)(["\n  query Plan (\n    $_id: ID!\n  ) {\n    Plan(\n        _id: $_id\n    ){\n      username\n      title\n      spots\n      _id\n    }\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(x.a)(["\n  query UserPlan (\n    $_userId: ID!\n  ) {\n    UserPlan(\n        _userId: $_userId\n    ){\n    username\n    title\n    spots{\n      _id\n      startTime\n      endTime\n      location{\n        properties{\n          title\n          description\n        }\n        geometry{\n          coordinates\n        }\n        _id\n      }\n    }\n    _id\n  }\n}\n"]);return y=function(){return e},e}function k(){var e=Object(x.a)(["\n  query Marker (\n    $username: String!\n  ) {\n    Marker(\n        username: $username\n    ){\n      username\n      properties{\n        title\n        description\n      }\n      geometry{\n        coordinates\n      }\n      _id        \n    }\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(x.a)(["\n  query Username(\n    $_id: ID!\n  ) {\n    Username(_id: $_id)\n  }\n"]);return S=function(){return e},e}var P=g()(S()),I=g()(k()),N=g()(y()),C=(g()(w()),g()(v()));function M(){var e=Object(x.a)(["\n  mutation signUp(\n    $username: String!\n    $password: String!\n  ) {\n    signUp(\n      username: $username\n      password: $password\n    )\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(x.a)(["\n  mutation updateSpotEndTime(\n    $_id: ID!\n    $time: String!\n  ) {\n    updateSpotEndTime(\n      _id: $_id\n      time: $time\n    )\n  }\n"]);return T=function(){return e},e}function D(){var e=Object(x.a)(["\n  mutation updateSpotStartTime(\n    $_id: ID!\n    $time: String!\n  ) {\n    updateSpotStartTime(\n      _id: $_id\n      time: $time   \n    )\n  }\n"]);return D=function(){return e},e}function E(){var e=Object(x.a)(["\n  mutation deleteSpot(\n    $_id: ID!\n  ) {\n    deleteSpot(\n      _id: $_id\n    )\n  }\n"]);return E=function(){return e},e}function L(){var e=Object(x.a)(["\n  mutation newSpot(\n    $planID: ID!\n    $markerID: ID!\n  ) {\n    newSpot(\n      planID: $planID\n      markerID: $markerID\n    )\n  }\n"]);return L=function(){return e},e}function A(){var e=Object(x.a)(["\n  mutation deletePlan(\n    $_id: ID!\n  ) {\n    deletePlan(\n      _id: $_id\n    )\n  }\n"]);return A=function(){return e},e}function R(){var e=Object(x.a)(["\n  mutation renamePlan(\n    $_id: ID!\n    $newTitle: String!\n  ) {\n    renamePlan(\n      _id: $_id\n      title: $newTitle\n    ) {\n      title\n    }\n  }\n"]);return R=function(){return e},e}function _(){var e=Object(x.a)(["\n  mutation newPlan(\n    $username: String!\n    $title: String!\n  ) {\n    newPlan(\n      username: $username\n      title: $title\n    )\n  }\n"]);return _=function(){return e},e}function H(){var e=Object(x.a)(["\n  mutation updateMarker(\n    $_id: ID!\n    $newTitle: String\n    $newDescription: String\n  ) {\n    updateMarker(\n      _id: $_id \n      newTitle: $newTitle\n      newDescription: $newDescription\n    )\n  }\n"]);return H=function(){return e},e}function U(){var e=Object(x.a)(["\n  mutation deleteMarker(\n    $_id: ID!\n  ) {\n    deleteMarker(\n      _id: $_id\n    )\n  }\n"]);return U=function(){return e},e}function Y(){var e=Object(x.a)(["\n  mutation addMarker(\n    $username: String!\n    $title: String!\n    $coordinates: [Float!]!\n    $description: String\n  ) {\n    addMarker(\n      marker: {\n        username: $username\n        title: $title\n        coordinates: $coordinates\n        description: $description\n      }\n    )\n  }\n"]);return Y=function(){return e},e}var $=g()(Y()),q=g()(U()),F=g()(H()),G=g()(_()),V=(g()(R()),g()(A())),X=g()(L()),K=g()(E()),W=g()(D()),Z=g()(T()),z=g()(M());function J(){var e=Object(x.a)(["\nsubscription subscribePlan($username: String!)\n{\n  subscribePlan(username:$username){\n    mutation\n    data{\n      username\n      title\n      spots{\n        startTime\n        endTime\n        location{\n          username\n          properties{\n            title\n            description\n          }\n          geometry{\n            coordinates\n          }\n          _id\n        }\n        _id\n      }\n      _id\n    }\n  }\n}\n"]);return J=function(){return e},e}function Q(){var e=Object(x.a)(["\nsubscription subscribeMarker ($username: String!) {\n    subscribeMarker (username: $username) {\n        mutation\n        data {\n            username\n            properties{\n                title\n                description\n            }\n            geometry{\n                coordinates\n            }\n            _id\n        }\n    }\n}\n"]);return Q=function(){return e},e}var B=g()(Q()),ee=g()(J());m.a.accessToken="pk.eyJ1Ijoic21hcnRoZXJjdWxlcyIsImEiOiJja2p6Z3NmaTEwN2RkMnNtZmVwdDdvb3N1In0.-qqamKKJShiY2mZm8EoOxA";var te=function(e){var t=e.username,n=e.markerCallback,i=e.insertionMode,s=e.setInsertionMode,c=(e.title,e.setTitle),o=(e.description,e.setDescription),u=Object(r.useState)({lng:121.55,lat:25.05,zoom:12}),p=Object(l.a)(u,2),x=p[0],f=p[1],g=Object(b.b)(I,{variables:{username:t}}),v=(g.subscribeMarker,Object(j.a)(g,["subscribeMarker"]),Object(r.useState)(null)),w=Object(l.a)(v,2),y=w[0],k=w[1],S=Object(r.useRef)(null),P=Object(b.b)(I,{variables:{username:t}}),N=P.data,C=P.subscribeToMore,M=Object(r.useState)(null),T=Object(l.a)(M,2),D=T[0],E=T[1],L=function(e){E(e),n(e)},A=Object(r.useState)(0),R=Object(l.a)(A,2),_=(R[0],R[1]),H=Object(r.useState)(!1),U=Object(l.a)(H,2),Y=U[0],$=U[1];Object(r.useEffect)((function(){y||function(e){var t=e.setMap,n=e.mapContainer,a=new m.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:[x.lng,x.lat],zoom:x.zoom});a.on("move",(function(){f({lng:a.getCenter().lng.toFixed(4),lat:a.getCenter().lat.toFixed(4),zoom:a.getZoom().toFixed(2)}),_(4)})),a.on("load",(function(){t(a),a.resize()}));var r=new O({accessToken:m.a.accessToken,mapboxgl:m.a});a.geocoder=r,a.addControl(r)}({setMap:k,mapContainer:S})}),[y]),Object(r.useEffect)((function(){y&&y.geocoder.on("result",(function(){D&&(D.geocoderResult||i)&&D.remove(),s(!1),c(JSON.parse(y.geocoder.lastSelected).place_name);var e=y.geocoder.mapMarker._lngLat;y.geocoder.mapMarker.remove();var t=(new m.a.Marker).setLngLat(e).addTo(y);t.geocoderResult=!0,L(t)}))}),[y,D]),Object(r.useEffect)((function(){if(y&&i){var e=function(e){D&&D.remove();var t=(new m.a.Marker).setLngLat([e.lngLat.lng,e.lngLat.lat]).addTo(y);c(""),o(""),L(t)};return y.once("click",e),function(){y.off("click",e)}}}),[y,i,D]),y&&N&&!Y&&($(!0),N.Marker.map((function(e){var t=e.geometry.coordinates,n=(new m.a.Popup).setHTML("<h3>".concat(e.properties.title,"<h3><p>").concat(e.properties.description,"</p>")),a=(new m.a.Marker).setLngLat(t).setPopup(n).addTo(y);a._id=e._id,a.getElement().addEventListener("click",(function(){L(a),c(e.properties.title),o(e.properties.description)}))}))),Object(r.useEffect)((function(){C&&y&&C({document:B,variables:{username:t},updateQuery:function(e,t){var n=t.subscriptionData.data.subscribeMarker;switch(n.mutation){case"NEW":var a=n.data.geometry.coordinates,r=(new m.a.Popup).setHTML("<h3>".concat(n.data.properties.title,"<h3><p>").concat(n.data.properties.description,"</p>")),i=(new m.a.Marker).setLngLat(a).setPopup(r).addTo(y);return i._id=n.data._id,i.getElement().addEventListener("click",(function(){L(i),c(n.data.properties.title),o(n.data.properties.description)})),{Marker:[].concat(Object(d.a)(e.Marker),[n.data])};case"DELETE":return{Marker:e.Marker.filter((function(e){return e._id!==n.data._id}))};case"UPDATE":return{Marker:e.Marker.map((function(e){return e._id!==n.data._id?e:n.data}))};default:console.log("Warning: unknown mutation ".concat(n.mutation))}}})}),[y]);var q=i?"green":"white";return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"sidebarStyle",children:Object(a.jsxs)("div",{children:["Longitude: ",x.lng," | Latitude: ",x.lat," | Zoom: ",x.zoom," "]})}),Object(a.jsx)(h.a,{style:{position:"relative",right:"0px","background-color":q},onClick:function(){D&&(i||D.geocoderResult)&&D.remove(),L(null),s(!i)},children:"+"}),Object(a.jsx)("div",{ref:function(e){return S.current=e},className:"mapContainer"})]})},ne=n(61),ae=n.n(ne),re=n(88),ie=(n(84),n(311)),se=n(314),ce=n(313),oe=n(315),le=n(160),ue=n.n(le);function de(e){var t=Object(b.b)(N,{variables:{_userId:e}}),n=t.data,a=t.error,i=t.subscribeToMore,s=Object(b.b)(P,{variables:{_id:e}}).data,c=s?s.Username:"",o=n?n.UserPlan:[];return Object(r.useEffect)((function(){i({document:ee,variables:{username:c},updateQuery:function(e,t){var n=t.subscriptionData.data.subscribePlan,a=e?e.UserPlan:[];switch(n.mutation){case"NEW":return{UserPlan:[].concat(Object(d.a)(a),[n.data])};case"DELETE":return{UserPlan:e.UserPlan.filter((function(e){return e._id!==n.data._id}))};case"UPDATE":return{UserPlan:e.UserPlan.map((function(e){return e.title!==n.data.title?e:n.data}))};default:console.log("Warning: unknown mutation ".concat(n.mutation))}}})}),[c,i]),{plan:o,error:a,username:c}}ie.a.Header,ie.a.Content,ie.a.Footer,ie.a.Sider;var je="NEW_ITEM",be=oe.a.Option,pe=function(e){var t=e.username,n=e.plan,r=e.list1Value,i=e.setList1Value,s=e.showList1,c=e.setshowList1,o=(e.planId,e.setPlanId),u=n.map((function(e){return e.title})),d=Object(b.a)(G),j=Object(l.a)(d,1)[0],p=function(e){i(e);var t=n.filter((function(t){return t.title===e}))[0]._id;o(t)},m=function(){var e=Object(re.a)(ae.a.mark((function e(n){var a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=n.trim(),!u.includes(n)){e.next=6;break}c(!1),p(n),e.next=12;break;case 6:return c(!1),e.next=9,j({variables:{username:t,title:n}});case 9:a=e.sent,o(a.data.newPlan),i(n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=u.map((function(e){return Object(a.jsx)(be,{children:e},e)}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)(oe.a,{value:r,style:{width:100},onChange:function(e){e!==je?p(e):c(!0)},children:[O,Object(a.jsx)(be,{value:je,children:"+ New Plan"})]}),Object(a.jsx)(ue.a,{show:s,title:"Add New Plan",text:"Enter new Plan Name",showCancelButton:!0,type:"input",inputPlaceholder:"Enter Plan Name",animation:"slide-from-top",validationMsg:"Please enter a name!",onConfirm:m,onCancel:function(){c(!1)},onEscapeKey:function(){c(!1)},onOutsideClick:function(){c(!1)}})]})},me=function(e){var t=e.username,n=e.currentMarker,i=e.setCurrentMarker,s=(e.markerContentCallback,e.insertionMode),c=e.plan,o=e.title,u=e.setTitle,d=e.description,j=e.setDescription,p=Object(r.useState)(""),O=Object(l.a)(p,2),x=O[0],f=O[1],g=Object(r.useState)(""),v=Object(l.a)(g,2),w=v[0],y=v[1],k=Object(r.useState)(!1),S=Object(l.a)(k,2),P=S[0],I=S[1],N=Object(b.a)(X),C=Object(l.a)(N,1)[0],M=Object(b.a)(q),T=Object(l.a)(M,1)[0],D=Object(b.a)(F),E=Object(l.a)(D,1)[0],L=Object(b.a)($),A=Object(l.a)(L,1)[0],R=function(){var e=Object(re.a)(ae.a.mark((function e(){var a,r,i,c,l,b,p;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return alert("select a marker to add"),e.abrupt("return");case 3:if(""===o&&u("Untitled"),""===d&&j("No description"),a=""===o?"Untitled":o,r=""===d?"No description":d,i=n._lngLat,c=i.lng,l=i.lat,b=n._id,!n.geocoderResult){e.next=17;break}return e.next=12,A({variables:{username:t,title:a,coordinates:[n._lngLat.lng,n._lngLat.lat],description:r}});case 12:b=e.sent,n.geocoderResult=null,b=b.data.addMarker,e.next=26;break;case 17:if(!s){e.next=24;break}return e.next=20,A({variables:{username:t,title:a,coordinates:[c,l],description:r}});case 20:b=(b=e.sent).data.addMarker,e.next=26;break;case 24:E({variables:{_id:b,newTitle:a,newDescription:r}}),n.getPopup()?n.getPopup().setHTML("<h3>".concat(a,"<h3><p>").concat(r,"</p>")):(p=(new m.a.Popup).setHTML("<h3>".concat(a,"<h3><p>").concat(r,"</p>")),n.setPopup(p));case 26:""!==b&&""!==x&&C({variables:{planID:x,markerID:b}});case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=se.a.TextArea;return Object(a.jsxs)(ce.a,{title:"Add New Marker",children:[Object(a.jsx)(ce.a,{type:"inner",title:"Title",children:Object(a.jsx)(se.a,{placeholder:"set your plan title",allowClear:!0,onChange:function(e){u(e.target.value)},value:o})}),Object(a.jsx)(ce.a,{style:{marginTop:16},type:"inner",title:"Descriptions",children:Object(a.jsx)(_,{TextArea:!0,rows:4,placeholder:"set your plan descriptions",allowClear:!0,value:d,onChange:function(e){j(e.target.value)}})}),Object(a.jsx)(ce.a,{style:{marginTop:16},type:"inner",title:"My Plan List",children:Object(a.jsx)(pe,{plan:c,list1Value:w,setList1Value:y,showList1:P,setshowList1:I,username:t,planId:x,setPlanId:f})}),Object(a.jsx)("br",{}),s||!n?null:Object(a.jsx)("div",{children:Object(a.jsx)(h.a,{size:"small",onClick:function(){var e=n._id;T({variables:{_id:e}}),n.remove(),i(null)},style:{position:"absolute",right:"90px",bottom:"10px"},children:"Delete"})}),Object(a.jsx)("div",{children:Object(a.jsx)(h.a,{size:"small",onClick:R,style:{position:"absolute",right:"25px",bottom:"10px"},children:"Save"})})]})},Oe=(ie.a.Header,ie.a.Content,ie.a.Footer,ie.a.Sider,se.a.Search,n(135)),he=n(316),xe=n(320),fe=n(321),ge=n(322),ve=(n(143),Oe.a.SubMenu,ie.a.Header),we=ie.a.Content,ye=(ie.a.Footer,ie.a.Sider),ke=(oe.a.Option,function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),s=n[0],c=n[1],d=Object(r.useState)(""),j=Object(l.a)(d,2),b=j[0],p=j[1],m=de(e.match.params.userId),O=m.plan,h=(m.error,m.username),x=Object(r.useState)(null),f=Object(l.a)(x,2),g=f[0],v=f[1],w=Object(r.useState)(!1),y=Object(l.a)(w,2),k=y[0],S=y[1],P=Object(r.useState)(!1),I=Object(l.a)(P,2),N=I[0],C=I[1],M=Object(u.e)();return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(ie.a,{style:{minWidth:"1000px"},children:[Object(a.jsxs)(ve,{className:"header",style:{color:"white",fontSize:"20px"},children:["Tour Map",Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(Oe.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(a.jsx)(Oe.a.Item,{icon:Object(a.jsx)(xe.a,{}),style:{position:"absolute",width:"150px",textAlign:"center",right:"0%"},onClick:function(){C(!N)},children:h},"4")})]}),Object(a.jsxs)(ie.a,{children:[Object(a.jsx)(ye,{height:500,width:200,className:"site-layout-background",children:Object(a.jsx)(me,{username:h,currentMarker:g,plan:O,insertionMode:k,title:s,setTitle:c,description:b,setDescription:p,setCurrentMarker:v})}),Object(a.jsxs)(ie.a,{style:{padding:"0 24px 24px"},children:[Object(a.jsx)(he.a,{style:{margin:"16px 0"},children:Object(a.jsx)(he.a.Item,{children:"Home"})}),Object(a.jsxs)(we,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:[Object(a.jsx)(te,{username:h,markerCallback:function(e){v(e)},insertionMode:k,title:s,setTitle:c,description:b,setInsertionMode:function(e){S(e)},setDescription:p}),N?Object(a.jsx)("div",{style:{position:"absolute",width:"150px",textAlign:"center",top:"65px",right:"0%",hidden:"true"},zindex:-1,children:Object(a.jsxs)(Oe.a,{theme:"blue",mode:"vertical",children:[Object(a.jsx)(Oe.a.Item,{icon:Object(a.jsx)(fe.a,{}),style:{margin:"0px",textAlign:"left",position:"relative",left:"23px"},onClick:function(){M.push("".concat(M.location.pathname,"/TourPlan"))},children:"Tour Plan"},"1"),Object(a.jsx)(Oe.a.Item,{icon:Object(a.jsx)(ge.a,{}),style:Object(o.a)({left:"0px",textAlign:"left",position:"relative"},"left","23px"),onClick:function(){M.push("/")},children:"Logout"},"2")]})}):null]})]})]})]})})}),Se=n(317),Pe=n(312),Ie=n(82),Ne=n(51),Ce=(n(230),n.p+"static/media/place-of-destination.803d6944.png"),Me=n.p+"static/media/bucket_list.e3f28f8a.jpg",Te=Oe.a.SubMenu,De=ie.a.Header,Ee=ie.a.Content,Le=(ie.a.Footer,ie.a.Sider);var Ae=n(319),Re=n(323);n(298);var _e=n(69),He=n(81),Ue=n(318),Ye=n(36),$e=n(38),qe=n(171),Fe=n(165),Ge=n(8),Ve=new qe.a({uri:"https://jose-antonio-lover-bus-server.herokuapp.com/"}),Xe=new Fe.a({uri:"wss://jose-antonio-lover-bus-server.herokuapp.com/",options:{reconnect:!0}}),Ke=Object($e.d)((function(e){var t=e.query,n=Object(Ge.l)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),Xe,Ve),We=new He.a({link:Ke,cache:(new Ue.a).restore({})});c.a.render(Object(a.jsx)(Ye.a,{client:We,children:Object(a.jsxs)(_e.a,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),o=Object(l.a)(c,2),d=o[0],j=o[1],p=Object(r.useState)(!1),m=Object(l.a)(p,2),O=m[0],x=m[1],f=Object(b.b)(C,{variables:{username:n,password:d}}),g=f.data,v=f.error,w=Object(b.a)(z),y=Object(l.a)(w,1)[0],k=Object(r.useState)(""),S=Object(l.a)(k,2),P=S[0],I=S[1],N=Object(r.useState)(""),M=Object(l.a)(N,2),T=M[0],D=M[1],E=Object(r.useState)(""),L=Object(l.a)(E,2),A=L[0],R=L[1],_=Object(r.useState)(!1),H=Object(l.a)(_,2),U=(H[0],H[1],Object(u.e)());Object(r.useEffect)((function(){g&&U.push("/".concat(g.signIn))}),[g]),Object(r.useEffect)((function(){v&&n&&alert(v.message)}),[v]);var Y=function(e){13===e.keyCode&&$()},$=function(){var e=Object(re.a)(ae.a.mark((function e(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==P){e.next=3;break}return alert("Please enter username"),e.abrupt("return");case 3:if(""!==T){e.next=6;break}return alert("Please enter password"),e.abrupt("return");case 6:if(""!==A){e.next=9;break}return alert("Please retype password"),e.abrupt("return");case 9:if(T===A){e.next=12;break}return alert("Password mismatch"),e.abrupt("return");case 12:return e.prev=12,e.next=15,y({variables:{username:P,password:T}});case 15:alert("Welcome to join us, ".concat(P,"!")),x(!1),e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(12),alert(e.t0),e.abrupt("return");case 23:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("div",{className:"login-background",children:Object(a.jsx)("div",{className:"login-root",children:Object(a.jsxs)("div",{className:"login-section",children:[Object(a.jsx)("h5",{className:"login-title",children:"Welcome to Jose Antonio LoverBus !"}),Object(a.jsxs)(Pe.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){s(e.username),j(e.password)},children:[Object(a.jsx)(Pe.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(a.jsx)(se.a,{prefix:Object(a.jsx)(xe.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(a.jsx)(Pe.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(a.jsx)(se.a,{prefix:Object(a.jsx)(Re.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(a.jsx)(Pe.a.Item,{children:Object(a.jsx)(Pe.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(a.jsx)(Ae.a,{children:"Remember me"})})}),Object(a.jsxs)(Pe.a.Item,{children:[Object(a.jsx)(h.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or",Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("a",{className:"register-link",onClick:function(){return x(!0)},children:"Register Now"}),Object(a.jsx)(Se.a,{title:"Create a new account",width:360,onClose:function(){return x(!1)},visible:O,bodyStyle:{paddingBottom:80},footer:Object(a.jsxs)("div",{style:{textAlign:"right"},children:[Object(a.jsx)(h.a,{onClick:function(){return x(!1)},style:{marginRight:8},children:"Cancel"}),Object(a.jsx)(h.a,{onClick:$,type:"primary",children:"Submit"})]}),children:Object(a.jsxs)(Pe.a,{layout:"vertical",hideRequiredMark:!0,children:[Object(a.jsx)(Ie.a,{gutter:16,children:Object(a.jsx)(Ne.a,{children:Object(a.jsx)(Pe.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please enter username"}],children:Object(a.jsx)(se.a,{placeholder:"Please enter username",onChange:function(e){return I(e.target.value)},onKeyUp:Y})})})}),Object(a.jsx)(Ie.a,{gutter:16,children:Object(a.jsx)(Ne.a,{children:Object(a.jsx)(Pe.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please enter password"}],children:Object(a.jsx)(se.a,{placeholder:"Please enter password",type:"password",onChange:function(e){return D(e.target.value)},onKeyUp:Y})})})}),Object(a.jsx)(Ie.a,{gutter:16,children:Object(a.jsx)(Ne.a,{children:Object(a.jsx)(Pe.a.Item,{name:"Retype password",label:"Retype Password",rules:[{required:!0,message:"Please retype password"}],children:Object(a.jsx)(se.a,{placeholder:"Please retype your password",type:"password",onChange:function(e){return R(e.target.value)},onKeyUp:Y})})})})]})})]})]})]})]})})})})}}),Object(a.jsx)(u.a,{exact:!0,path:"/:userId",component:ke}),Object(a.jsx)(u.a,{exact:!0,path:"/:userId/TourPlan",component:function(e){var t=de(e.match.params.userId),n=t.plan,s=(t.error,t.username),c=Object(b.a)(V),o=Object(l.a)(c,1)[0],d=Object(b.a)(K),j=Object(l.a)(d,1)[0],p=Object(b.a)(W),m=Object(l.a)(p,1)[0],O=Object(b.a)(Z),x=Object(l.a)(O,1)[0],f=Object(r.useState)(!1),g=Object(l.a)(f,2),v=g[0],w=g[1],y=Object(r.useState)(!0),k=Object(l.a)(y,2),S=k[0],P=k[1],I=Object(r.useState)(0),N=Object(l.a)(I,2),C=N[0],M=N[1],T=Object(r.useState)(0),D=Object(l.a)(T,2),E=D[0],L=D[1],A=Object(r.useState)(!0),R=Object(l.a)(A,2),_=R[0],H=R[1],U=Object(r.useState)(!1),Y=Object(l.a)(U,2),$=Y[0],q=Y[1],F=Object(r.useState)(""),G=Object(l.a)(F,2),X=G[0],z=G[1],J=Object(r.useState)(""),Q=Object(l.a)(J,2),B=Q[0],ee=Q[1],te=Object(u.e)(),ne=function(e){if(e.target.validity.valid){var t=e.target.value+":00Z";z(t)}},ae=function(e){if(e.target.validity.valid){var t=e.target.value+":00Z";ee(t)}};return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(ie.a,{children:[Object(a.jsxs)(De,{className:"header",style:{color:"white",fontSize:"20px",margin:"0px"},children:["Tour Plan",Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(Oe.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(a.jsx)(Oe.a.Item,{icon:Object(a.jsx)(xe.a,{}),style:{position:"absolute",width:"150px",textAlign:"center",right:"0%"},onClick:function(){w(!v)},children:s},"4")})]}),Object(a.jsxs)(ie.a,{className:"middle",children:[Object(a.jsx)(Le,{height:500,width:200,className:"site-layout-background",children:Object(a.jsx)(Oe.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:Object(a.jsx)(Te,{icon:Object(a.jsx)(fe.a,{}),title:"My Plans",children:n.map((function(e,t){var r=e.title;return Object(a.jsxs)(Oe.a.Item,{onClick:function(){M(t),H(!1)},style:{display:"flex",alignItems:"center"},children:[r,Object(a.jsx)(h.a,{className:"deletePlan",type:"dashed",size:"small",style:{position:"absolute",right:"10px",fontSize:"5px"},onClick:function(){o({variables:{_id:n[t]._id}}),P(!S)},children:"x"})]})}))},"sub1")})}),Object(a.jsxs)(ie.a,{style:{padding:"0 24px 24px"},children:[Object(a.jsxs)(he.a,{style:{margin:"16px 0"},children:[Object(a.jsx)(he.a.Item,{children:"Home"}),Object(a.jsx)(he.a.Item,{children:"Plan List"}),n&&0!==n.length?Object(a.jsx)(he.a.Item,{children:n[C].title}):Object(a.jsx)(he.a.Item,{})]}),Object(a.jsxs)(Ee,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:[_&&n&&0!==n.length?Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("h3",{style:{margin:"0px",position:"relative",left:"0px"},children:"Choose a Plan in the Left"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{style:{width:"100px"},src:"data:image/png;base64,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",alt:"pointLeft"})]}):Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("div",{className:"table-title",children:n&&0!==n.length?Object(a.jsxs)("h3",{style:{margin:"0px",position:"relative",left:"0px"},children:[" ",n[C].title," "]}):Object(a.jsx)("h3",{})}),n&&0!==n.length?Object(a.jsx)(i.a.Fragment,{children:0!==n[C].spots.length?Object(a.jsxs)("table",{className:"table-fill",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"spot-title",children:"Title"}),Object(a.jsx)("th",{className:"spot-description",children:"Description"}),Object(a.jsx)("th",{children:"Time"}),Object(a.jsx)("th",{className:"spot-button"})]})}),Object(a.jsx)("tbody",{children:n[C].spots.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"spot-title",children:[" ",e.location.properties.title," "]}),Object(a.jsxs)("td",{className:"spot-description",children:[" ",e.location.properties.description," "]}),Object(a.jsxs)("td",{className:"spot-time",children:[Object(a.jsx)("p",{children:new Date(e.startTime).toLocaleString()}),Object(a.jsx)("p",{className:"timeto",children:"to"}),Object(a.jsx)("p",{children:new Date(e.endTime).toLocaleString()})]}),Object(a.jsxs)("td",{className:"spot-button",children:[Object(a.jsx)(h.a,{onClick:function(){q(!0),L(t)},style:{width:"100px",textAlign:"center",fontSize:"10px"},children:" Edit Time"}),Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(Se.a,{title:n[C].spots[E].location.properties.title,width:360,onClose:function(){q(!1)},visible:$,bodyStyle:{paddingBottom:80},footer:Object(a.jsxs)("div",{style:{textAlign:"right"},children:[Object(a.jsx)(h.a,{onClick:function(){q(!1)},style:{marginRight:8},children:"Cancel"}),Object(a.jsx)(h.a,{onClick:function(){m({variables:{_id:n[C].spots[E]._id,time:new Date(X).toString()}}),x({variables:{_id:n[C].spots[E]._id,time:new Date(B).toString()}}),q(!1),console.log(new Date(X).toString(),new Date(B).toString())},type:"primary",children:"Change Time"})]}),children:Object(a.jsxs)(Pe.a,{layout:"vertical",hideRequiredMark:!0,children:[Object(a.jsx)(Ie.a,{gutter:16,children:Object(a.jsx)(Ne.a,{children:Object(a.jsx)(Pe.a.Item,{name:"Start time",label:"Start time",rules:[{required:!0,message:"Please enter new start time"}],children:Object(a.jsx)("input",{type:"datetime-local",name:"start time",value:(X||"").toString().substring(0,16),onChange:ne})})})}),Object(a.jsx)(Ie.a,{gutter:16,children:Object(a.jsx)(Ne.a,{children:Object(a.jsx)(Pe.a.Item,{name:"End time",label:"End time",rules:[{required:!0,message:"Please enter new end time"}],children:Object(a.jsx)("input",{type:"datetime-local",name:"end time",value:(B||"").toString().substring(0,16),onChange:ae})})})})]})})}),Object(a.jsx)(h.a,{onClick:function(){P(!S),j({variables:{_id:n[C].spots[E]._id}})},style:{width:"100px",textAlign:"center",fontSize:"10px"},children:" Delete Spot"})]})]},t)}))})]}):Object(a.jsxs)("div",{className:"table-title",style:{textAlign:"center"},children:[Object(a.jsx)("h2",{style:{fontFamily:"fantasy"},children:" No Spot Right Now "}),Object(a.jsx)("img",{src:Ce,alt:"Background"})]})}):Object(a.jsxs)("div",{className:"table-title",style:{textAlign:"center"},children:[Object(a.jsx)("h2",{style:{fontFamily:"fantasy"},children:" No Plan Right Now "}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{src:Me,alt:"Bucket List",style:{width:"500px"}})]})]}),v?Object(a.jsx)("div",{style:{position:"absolute",width:"150px",textAlign:"center",top:"65px",right:"0%",hidden:"true"},zindex:-1,children:Object(a.jsxs)(Oe.a,{theme:"blue",mode:"vertical",children:[Object(a.jsx)(Oe.a.Item,{icon:Object(a.jsx)(fe.a,{}),style:{margin:"0px",textAlign:"left",position:"relative",left:"23px"},onClick:function(){te.push("/".concat(e.match.params.userId))},children:"Tour Map"},"1"),Object(a.jsx)(Oe.a.Item,{icon:Object(a.jsx)(ge.a,{}),style:{margin:"0px",textAlign:"left",position:"relative",left:"23px"},onClick:function(){te.push("/")},children:"logout"},"2")]})}):null]})]})]})]})})}})]})}),document.getElementById("root"))}},[[306,1,2]]]);
//# sourceMappingURL=main.654e5825.chunk.js.map