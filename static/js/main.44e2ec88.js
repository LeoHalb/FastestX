(()=>{var e={9280:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var i=a(5861),n=a(9439),r=a(5004),l=a(668),s=a(1054),o=a(9385),d=a(2152),c=a(4913),u=a(5326),f=a(229),h=a(14),g=a(1232),m=a(6028),y=a(3426),v=a(758),x=a(9540),p=a(1420),j=a(6591),w=a(5951),b=a(4504),_=a(1935),S=a(8441),k=a(6901),A=a(8219),M=a(2629);function C(e){(0,r.useEffect)((function(){w.default.configureNext(w.default.Presets.easeInEaseOut),p(!1),d(""),O(e.distanceMeasure),z(e.timeMeasure)}),[e.distanceMeasure,e.timeMeasure]);var t=(0,r.useState)(""),a=(0,n.default)(t,2),l=a[0],d=a[1],c=(0,r.useState)(!1),h=(0,n.default)(c,2),g=h[0],m=h[1],y=(0,r.useState)(!1),v=(0,n.default)(y,2),x=v[0],p=v[1],j=(0,r.useState)("1000"),b=(0,n.default)(j,2),C=b[0],O=b[1],I=(0,r.useState)(""),T=(0,n.default)(I,2),$=T[0],z=T[1];function L(){return(L=(0,i.default)((function*(){var t={start:{distance:0,time:0},end:{distance:0,time:0},distance:0,time:999999999999999,heartrate:0,elevation:{gain:0,loss:0},range:{start:0,end:0}};if(0===C||0===$)d(t);else if(l||"0"===C||""===C||!1!==g){if(!l&&"0"!==$&&""!==$&&!1===g){var a,i,n,r;m(!0);var s=yield P(e.activity.id),o=null==(a=s.altitude)?void 0:a.data,c=null==(i=s.distance)?void 0:i.data,u=null==(n=s.time)?void 0:n.data,f=null==(r=s.heartrate)?void 0:r.data,h=t;if(e.activity.total_elevation_gain=Math.round(null==o?void 0:o.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==o?void 0:o.reduce((function(e,t,a,i){return t<i[a-1]?e+i[a-1]-t:e+0}),0)),$>=e.activity.elapsed_time)return void d(void 0);if(c&&u){for(var y=u.slice(-1)-$,v=function*(e){var t=u.indexOf(u.slice(e).find((function(t){return t-u[e]>=$})));if(-1!==t){var a={distance:Math.round(10*(c[t]-c[e]))/10,time:u[t]-u[e],range:{start:e,end:t}};(a.time<h.time||a.time===h.time&&a.distance>h.distance)&&(h=a)}},x=0;u[x]<y;x++)yield*v(x);if(h){h.start={distance:c[h.range.start],time:u[h.range.start]},h.end={distance:c[h.range.end],time:u[h.range.end]},h.pace=R(Math.round(1e3/(c[h.range.end]-c[h.range.start])*(u[h.range.end]-u[h.range.start]))),h.heartrate=Math.round((null==f?void 0:f.slice(h.range.start,h.range.end+1).reduce((function(e,t){return e+t}),0))/(null==f?void 0:f.slice(h.range.start,h.range.end+1).length));var p=null==o?void 0:o.slice(h.range.start,h.range.end+1);h.elevation={gain:Math.round(null==p?void 0:p.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),loss:Math.round(null==p?void 0:p.reduce((function(e,t,a,i){return t<i[a-1]?e+i[a-1]-t:e+0}),0))}}m(!1),w.default.configureNext(w.default.Presets.easeInEaseOut),d(h===t?void 0:h)}else d(void 0)}}else{var j,b,_,S;m(!0);var k=yield P(e.activity.id),A=null==(j=k.altitude)?void 0:j.data,M=null==(b=k.distance)?void 0:b.data,N=null==(_=k.time)?void 0:_.data,O=null==(S=k.heartrate)?void 0:S.data,I=t;if(e.activity.total_elevation_gain=Math.round(null==A?void 0:A.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==A?void 0:A.reduce((function(e,t,a,i){return t<i[a-1]?e+i[a-1]-t:e+0}),0)),C>=e.activity.distance)return void d(void 0);if(M&&N){for(var T=M.slice(-1)-C,z=function*(e){var t=M.indexOf(M.slice(e).find((function(t){return t-M[e]>=C})));if(-1!==t){var a={distance:Math.round(10*(M[t]-M[e]))/10,time:N[t]-N[e],range:{start:e,end:t}};(a.time<I.time||a.time===I.time&&a.distance>I.distance)&&(I=a)}},L=0;M[L]<T;L++)yield*z(L);if(I){I.start={distance:M[I.range.start],time:N[I.range.start]},I.end={distance:M[I.range.end],time:N[I.range.end]},I.pace=R(Math.round(1e3/(M[I.range.end]-M[I.range.start])*(N[I.range.end]-N[I.range.start]))),I.heartrate=Math.round((null==O?void 0:O.slice(I.range.start,I.range.end+1).reduce((function(e,t){return e+t}),0))/(null==O?void 0:O.slice(I.range.start,I.range.end+1).length));var E=null==A?void 0:A.slice(I.range.start,I.range.end+1);I.elevation={gain:Math.round(null==E?void 0:E.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),loss:Math.round(null==E?void 0:E.reduce((function(e,t,a,i){return t<i[a-1]?e+i[a-1]-t:e+0}),0))}}m(!1),w.default.configureNext(w.default.Presets.easeInEaseOut),d(I===t?void 0:I)}else d(void 0)}}))).apply(this,arguments)}function R(e){var t=Math.floor(e/3600),a=e-3600*t,i=Math.floor(a/60);return`${0!==t?`${t}:`<10?`0${t}:`:`${t}:`:""}${i<10?`0${i}`:i}:${(a=e-60*i-3600*t)<10?`0${a}`:a} ${t>0?"h":"min"}`}function P(e){return E.apply(this,arguments)}function E(){return(E=(0,i.default)((function*(t){return fetch(`https://www.strava.com/api/v3/activities/${t}/streams?access_token=${e.credentials.accessToken}&keys=time,distance,heartrate,altitude&key_by_type=true`).then((function(e){return e.json()}))}))).apply(this,arguments)}return(0,M.jsxs)(u.default,{style:N.item,onPress:function(){!function(){L.apply(this,arguments)}(e.activity),w.default.configureNext(w.default.Presets.easeInEaseOut),p(!x)},children:[(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:`${e.activity.name}`}),(0,M.jsx)(s.default,{children:`${new Date(e.activity.start_date).toLocaleDateString()}`}),(0,M.jsx)(u.default,{onPress:function(){return A.openURL(`https://www.strava.com/activities/${e.activity.id}`)},children:(0,M.jsx)(s.default,{style:{color:"blue",textDecorationColor:"blue",textDecorationLine:"underline"},children:"View on Strava"})}),x&&"0"!==C&&"0"!==$?(0,M.jsxs)(o.default,{style:{width:"100%"},children:[(0,M.jsx)(o.default,{style:N.separator}),(0,M.jsx)((function(){return void 0===l||"0"===C||"0"===$?(0,M.jsx)(o.default,{style:N.modalContainer,children:(0,M.jsxs)(o.default,{style:[N.modalLine,{justifyContent:"space-evenly"}],children:[(0,M.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,M.jsx)(_.default,{style:{textAlign:"center",alignSelf:"center"},name:"timer",size:28}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,M.jsx)(k.default,{style:{textAlign:"center",alignSelf:"center"},name:"map-marker-distance",size:28}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,M.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,M.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,M.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[m]"})]}),(0,M.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:`${R(e.activity.elapsed_time)}`}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:Math.round(e.activity.distance/10)/100+" km"}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:`${R(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:`${Math.round(e.activity.average_heartrate)}`}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,M.jsx)(s.default,{style:[N.name,{textAlign:"center"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]})]})}):l?(0,M.jsxs)(o.default,{style:N.modalContainer,children:[(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:`${l.distance} m`}),(0,M.jsx)(k.default,{style:{display:"flex",alignItems:"center"},name:"map-marker-distance",size:28}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:Math.round(e.activity.distance/10)/100+" km"})]}),(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:`${R(l.time)}`}),(0,M.jsx)(_.default,{style:{display:"flex",alignItems:"center"},name:"timer",size:28}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${R(e.activity.elapsed_time)}`})]}),(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:`${l.pace.replace(" min","").replace(" h","")}`}),(0,M.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${R(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`})]}),(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:""+Math.round((l.end.distance-l.start.distance)/(l.end.time-l.start.time)*3.6*10)/10}),(0,M.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(l.heartrate)&&(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:`${l.heartrate}`}),(0,M.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${Math.round(e.activity.average_heartrate)}`})]}),!isNaN(l.elevation.gain)&&!isNaN(l.elevation.loss)&&(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:`+${l.elevation.gain} / -${l.elevation.loss}`}),(0,M.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[m]"}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]}),(0,M.jsx)(o.default,{style:{width:"100%"},children:(0,M.jsx)(o.default,{style:N.separator})}),(0,M.jsxs)(o.default,{style:[N.modalLine,{display:"flex"}],children:[(0,M.jsx)(s.default,{style:[N.name,{flex:1,marginRight:"auto"}],children:Math.round(l.start.distance)/1e3+" km"}),(0,M.jsx)(S.default,{style:{display:"flex",alignItems:"center"},name:"at",size:24}),(0,M.jsx)(s.default,{style:[N.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${R(l.start.time)}`})]})]}):g?(0,M.jsx)(f.default,{color:"black"}):null}),{})]}):null]})}var N=l.default.create({item:{marginHorizontal:16,marginTop:16,alignItems:"center",backgroundColor:"#fc5200",borderRadius:20,padding:10,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},modalContainer:{flex:1,justifyContent:"center",alignItems:"center"},modal:{width:"90%",marginLeft:"5%",backgroundColor:"#fc5200",borderRadius:20,padding:35,alignItems:"center",justifyContent:"center",boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4,elevation:5},modalLine:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},separator:{height:2,backgroundColor:"black",marginTop:8,marginBottom:8},name:{fontSize:24}});function O(e){var t=(0,r.useState)([]),a=(0,n.default)(t,2),l=a[0],d=a[1],c=(0,r.useState)(!1),h=(0,n.default)(c,2),g=h[0],m=h[1],y=(0,r.useState)(!0),v=(0,n.default)(y,2),x=v[0],_=v[1],S=(0,r.useState)(1),k=(0,n.default)(S,2),A=k[0],N=k[1],O=(0,r.useState)("1000"),T=(0,n.default)(O,2),$=T[0],z=T[1],L=(0,r.useState)(""),R=(0,n.default)(L,2),P=R[0],E=R[1];function F(e){return D.apply(this,arguments)}function D(){return(D=(0,i.default)((function*(t){t?m(!0):_(!0),fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${e.credentials.accessToken}&per_page=10&page=${t?1:A}`).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){return e.isExpanded=!1})),d(t?e:l.concat(e)),N(A+1)})).catch((function(e){return console.log(e)})).finally((function(){m(!1),_(!1)}))}))).apply(this,arguments)}return(0,r.useEffect)((function(){void 0!==e.credentials.accessToken&&F(!1)}),[e.credentials]),(0,M.jsx)(M.Fragment,{children:x&&0===l.length?(0,M.jsx)(f.default,{style:{marginTop:16},size:"large",color:"black"}):(0,M.jsx)(p.default,{style:{alignSelf:"center",width:"100%",maxWidth:700},data:l,renderItem:function(t){var a=t.item;return(0,M.jsx)(C,{activity:a,distanceMeasure:$,timeMeasure:P,credentials:e.credentials})},keyExtractor:function(e){return e.id},keyboardDismissMode:"onDrag",onRefresh:function(){w.default.configureNext(w.default.Presets.easeInEaseOut),F(!0)},refreshing:g,ListHeaderComponent:(0,M.jsxs)(o.default,{style:I.item,children:[(0,M.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,M.jsx)(s.default,{style:{fontSize:24},children:"Distance [m]"}),(0,M.jsx)(j.default,{style:I.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(t)?z(0):E(""),z(t)},value:$.toString()})]}),(0,M.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between",marginTop:5},children:[(0,M.jsx)(s.default,{style:{fontSize:24},children:"Time [s]"}),(0,M.jsx)(j.default,{style:I.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(t)?E(""):z(""),E(t)},value:P.toString()})]})]}),ListFooterComponent:(0,M.jsx)(u.default,{style:[I.item,{marginBottom:16,alignItems:"center"}],onPress:function(){w.default.configureNext(w.default.Presets.easeInEaseOut),F(!1)},children:x?(0,M.jsx)(f.default,{style:{marginTop:19,marginBottom:19},color:"black"}):(0,M.jsxs)(o.default,{style:{flexDirection:"row",marginTop:13,marginBottom:13},children:[(0,M.jsx)(b.default,{name:"reload-circle",size:28,color:"black"}),(0,M.jsx)(s.default,{style:{fontSize:24},children:" Load more"})]})})})})}var I=l.default.create({item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}}),T=a(6566),$=a(3757),z=a(3804);v.maybeCompleteAuthSession();var L={authorizationEndpoint:"https://www.strava.com/oauth/mobile/authorize",tokenEndpoint:"https://www.strava.com/oauth/token",revocationEndpoint:"https://www.strava.com/oauth/deauthorize"};function R(){var e=(0,r.useState)(!1),t=(0,n.default)(e,2),l=t[0],v=t[1],p=(0,r.useState)({}),j=(0,n.default)(p,2),w=j[0],b=j[1],_=(0,r.useState)(!0),S=(0,n.default)(_,2),k=S[0],A=S[1],C=(0,r.useState)(""),N=(0,n.default)(C,2),I=N[0],R=N[1],E=(0,r.useState)(!1),F=(0,n.default)(E,2),D=F[0],W=F[1],B=function(){var e=(0,i.default)((function*(){(0,x.exchangeCodeAsync)({clientId:null==X?void 0:X.clientId,redirectUri:(0,x.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:null==q?void 0:q.params.code,extraParams:{client_secret:"07913394e9ea497df3bd6f9b824f666370d9c8f4"}},L).catch((function(e){return R("rate_limit"),A(!1),e})).then((function(e){"web"!==d.default.OS&&T.setItemAsync("credentials",JSON.stringify(e)),b(e),A(!1)}))}));return function(){return e.apply(this,arguments)}}(),U=(0,x.useAuthRequest)({clientId:"80072",scopes:["activity:read_all"],redirectUri:(0,x.makeRedirectUri)({scheme:"fastestx",path:"FastestX"})},L),H=(0,n.default)(U,3),X=H[0],q=H[1],J=H[2],V=function(){var e=(0,i.default)((function*(){"web"!==d.default.OS&&(yield T.deleteItemAsync("credentials")),yield fetch(`https://www.strava.com/oauth/deauthorize?access_token=${w.accessToken}`,{method:"POST"}),v(!1),A(!1)}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){var e=function(){var e=(0,i.default)((function*(){A(!0);var e=function(){var e=(0,i.default)((function*(){return yield T.isAvailableAsync("credentials")}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,i.default)((function*(){return yield T.getItemAsync("credentials")}));return function(){return e.apply(this,arguments)}}(),a=JSON.parse(yield t());if((yield e())&&null!==a){if(!x.TokenResponse.isTokenFresh(a)){var n=yield(0,x.refreshAsync)({clientId:"80072",refreshToken:a.refreshToken},L);return b(n),v(!0),void A(!1)}b(a),v(!0),A(!1)}}));return function(){return e.apply(this,arguments)}}();"web"!==d.default.OS&&e()}),[]),(0,r.useEffect)((function(){var e=function(){var e=(0,i.default)((function*(){A(!0),W(!0);var e=new URLSearchParams(window.location.search),t={};for(var a of e){var i=(0,n.default)(a,2),r=i[0],l=i[1];t[r]=l}var s=location.href.split("?")[0];if(window.history.pushState("object",document.title,s),void 0!==t.code&&void 0!==t.scope&&void 0!==t.state)if("read,activity:read_all"===t.scope||"activity:read_all,read"===t.scope)var o=yield(0,x.exchangeCodeAsync)({clientId:"80072",redirectUri:(0,x.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:t.code,extraParams:{client_secret:"07913394e9ea497df3bd6f9b824f666370d9c8f4"}},L).then((function(){b(o),A(!1),R(""),v(!0)})).catch((function(){R("rate_limit"),A(!1)}));else R("wrong_scope"),A(!1);else void 0!==t.error?(R("wrong_scope"),A(!1)):(R(""),A(!1))}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,r.useEffect)((function(){"success"===(null==q?void 0:q.type)?"read,activity:read_all"===(null==q?void 0:q.params.scope)||"activity:read_all,read"===(null==q?void 0:q.params.scope)?(R(""),B(),v(!0)):(R("wrong_scope"),A(!1)):"error"===(null==q?void 0:q.type)?(R("wrong_scope"),A(!1)):null===X||D||(R(""),A(!1))}),[q]),(0,r.useEffect)((function(){var e=function(){var e=(0,i.default)((function*(){var e=yield z.getDeviceTypeAsync();console.log({Platform:d.default,loggedIn:l,credentials:w,loading:k,errorState:I,request:X,response:q,deviceType:e})}));return function(){return e.apply(this,arguments)}}();e()})),"android"===d.default.OS&&c.default.setLayoutAnimationEnabledExperimental(!0),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(y.default,{backgroundColor:"#fc5200"}),(0,M.jsx)(g.SafeAreaProvider,{children:(0,M.jsxs)(m.SafeAreaView,{style:{flex:1},children:[(0,M.jsx)(o.default,{style:[P.topBar,{flexDirection:"row",justifyContent:"center"}],children:(0,M.jsxs)(o.default,{style:{alignItems:"center",flexDirection:"row",width:"100%",maxWidth:700,justifyContent:"space-between"},children:[(0,M.jsx)(s.default,{style:P.title,children:"FastestX"}),l&&!I&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(h.Image,{cachePolicy:"memory-disk",style:{height:43,width:104},contentFit:"contain",source:a(1104)}),(0,M.jsx)(u.default,{onPress:function(){A(!0),V()},style:{marginRight:16,justifyContent:"center"},children:(0,M.jsx)($.default,{name:"logout",size:24,color:"black"})})]})]})}),k?(0,M.jsxs)(o.default,{style:{marginTop:16,justifyContent:"space-between",flex:1},children:[(0,M.jsx)(f.default,{size:"large",color:"black"}),(0,M.jsx)(h.Image,{cachePolicy:"memory-disk",style:{width:"100%",height:63,marginTop:16},contentFit:"contain",source:a(1036)})]}):l&&!I?(0,M.jsx)(O,{credentials:w}):(0,M.jsxs)(o.default,{style:{flex:1,justifyContent:"space-between",alignSelf:"stretch",justifySelf:"stretch"},children:[(0,M.jsxs)(o.default,{children:["wrong_scope"===I?(0,M.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center",textAlign:"center"},children:"This app needs the permission to read all of your activities' data to work."}):(0,M.jsx)(M.Fragment,{}),"rate_limit"===I?(0,M.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center",textAlign:"center"},children:"This app reached it's rate limit. It will work again tomorrow."}):(0,M.jsx)(M.Fragment,{}),(0,M.jsx)(u.default,{style:{marginTop:16},onPress:function(){A(!0),J()},children:(0,M.jsx)(h.Image,{cachePolicy:"memory-disk",style:{height:48},contentFit:"contain",source:a(9513)})}),(0,M.jsx)(o.default,{style:{marginTop:16},children:(0,M.jsx)(s.default,{style:{textAlign:"center"},children:"Log in to see your activities"})})]}),(!l||I)&&(0,M.jsx)(h.Image,{cachePolicy:"memory-disk",style:{width:"100%",height:63},contentFit:"contain",source:a(1036)})]})]})})]})}var P=l.default.create({container:{display:"flex"},topBar:{height:43,backgroundColor:"#fc5200"},title:{paddingLeft:16,fontSize:32},item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}})},1036:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_light.761875a979df9ddcff63.svg"},1104:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_white.a3a1cb97b4c52945cd53.svg"},9513:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/btn_strava_connectwith_orange.d61a51baedcfa2ed1280.svg"},4654:()=>{}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,a.amdO={},(()=>{var e=[];a.O=(t,i,n,r)=>{if(!i){var l=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],s=!0,o=0;o<i.length;o++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](i[o])))?i.splice(o--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/FastestX/",(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[l,s,o]=i,d=0;if(l.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(o)var c=o(a)}for(t&&t(i);d<l.length;d++)r=l[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},i=self.webpackChunkweb=self.webpackChunkweb||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[954],(()=>a(6271)));i=a.O(i)})();
//# sourceMappingURL=main.44e2ec88.js.map