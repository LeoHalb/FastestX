(()=>{var e={9280:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var i=a(5861),n=a(9439),r=a(5004),l=a(668),s=a(1054),d=a(9385),o=a(2152),c=a(4913),u=a(5326),f=a(229),h=a(14),g=a(1232),m=a(6028),y=a(3426),x=a(758),v=a(9540),p=a(1420),j=a(6591),b=a(5951),w=a(4504),S=a(1935),_=a(8441),k=a(6901),M=a(8219),C=a(2629);function N(e){(0,r.useEffect)((function(){b.default.configureNext(b.default.Presets.easeInEaseOut),p(!1),o(""),O(e.distanceMeasure),T(e.timeMeasure)}),[e.distanceMeasure,e.timeMeasure]);var t=(0,r.useState)(""),a=(0,n.default)(t,2),l=a[0],o=a[1],c=(0,r.useState)(!1),h=(0,n.default)(c,2),g=h[0],m=h[1],y=(0,r.useState)(!1),x=(0,n.default)(y,2),v=x[0],p=x[1],j=(0,r.useState)("1000"),w=(0,n.default)(j,2),N=w[0],O=w[1],$=(0,r.useState)(""),z=(0,n.default)($,2),I=z[0],T=z[1];function L(){return(L=(0,i.default)((function*(){var t={start:{distance:0,time:0},end:{distance:0,time:0},distance:0,time:999999999999999,heartrate:0,elevation:{gain:0,loss:0},range:{start:0,end:0}};if(0===N||0===I)o(t);else if(l||"0"===N||""===N||!1!==g){if(!l&&"0"!==I&&""!==I&&!1===g){var a,i,n,r;m(!0);var s=yield P(e.activity.id),d=null==(a=s.altitude)?void 0:a.data,c=null==(i=s.distance)?void 0:i.data,u=null==(n=s.time)?void 0:n.data,f=null==(r=s.heartrate)?void 0:r.data,h=t;if(e.activity.total_elevation_gain=Math.round(null==d?void 0:d.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),I>=e.activity.elapsed_time)return void o(void 0);if(c&&u){for(var y=u.slice(-1)-I,x=function*(e){var t=u.indexOf(u.slice(e).find((function(t){return t-u[e]>=I})));if(-1!==t){var a={distance:Math.round(10*(c[t]-c[e]))/10,time:u[t]-u[e],range:{start:e,end:t}};(a.time<h.time||a.time===h.time&&a.distance>h.distance)&&(h=a)}},v=0;u[v]<y;v++)yield*x(v);if(h){h.start={distance:c[h.range.start],time:u[h.range.start]},h.end={distance:c[h.range.end],time:u[h.range.end]},h.pace=R(Math.round(1e3/(c[h.range.end]-c[h.range.start])*(u[h.range.end]-u[h.range.start]))),h.heartrate=Math.round((null==f?void 0:f.slice(h.range.start,h.range.end+1).reduce((function(e,t){return e+t}),0))/(null==f?void 0:f.slice(h.range.start,h.range.end+1).length));var p=null==d?void 0:d.slice(h.range.start,h.range.end+1);h.elevation={gain:Math.round(null==p?void 0:p.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),loss:Math.round(null==p?void 0:p.reduce((function(e,t,a,i){return t<i[a-1]?e+i[a-1]-t:e+0}),0))}}m(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),o(h===t?void 0:h)}else o(void 0)}}else{var j,w,S,_;m(!0);var k=yield P(e.activity.id),M=null==(j=k.altitude)?void 0:j.data,C=null==(w=k.distance)?void 0:w.data,A=null==(S=k.time)?void 0:S.data,O=null==(_=k.heartrate)?void 0:_.data,$=t;if(e.activity.total_elevation_gain=Math.round(null==M?void 0:M.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),N>=e.activity.distance)return void o(void 0);if(C&&A){for(var z=C.slice(-1)-N,T=function*(e){var t=C.indexOf(C.slice(e).find((function(t){return t-C[e]>=N})));if(-1!==t){var a={distance:Math.round(10*(C[t]-C[e]))/10,time:A[t]-A[e],range:{start:e,end:t}};(a.time<$.time||a.time===$.time&&a.distance>$.distance)&&($=a)}},L=0;C[L]<z;L++)yield*T(L);if($){$.start={distance:C[$.range.start],time:A[$.range.start]},$.end={distance:C[$.range.end],time:A[$.range.end]},$.pace=R(Math.round(1e3/(C[$.range.end]-C[$.range.start])*(A[$.range.end]-A[$.range.start]))),$.heartrate=Math.round((null==O?void 0:O.slice($.range.start,$.range.end+1).reduce((function(e,t){return e+t}),0))/(null==O?void 0:O.slice($.range.start,$.range.end+1).length));var E=null==M?void 0:M.slice($.range.start,$.range.end+1);$.elevation={gain:Math.round(null==E?void 0:E.reduce((function(e,t,a,i){return t>i[a-1]?e+t-i[a-1]:e+0}),0)),loss:Math.round(null==E?void 0:E.reduce((function(e,t,a,i){return t<i[a-1]?e+i[a-1]-t:e+0}),0))}}m(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),o($===t?void 0:$)}else o(void 0)}}))).apply(this,arguments)}function R(e){var t=Math.floor(e/3600),a=e-3600*t,i=Math.floor(a/60);return`${0!==t?`${t}:`<10?`0${t}:`:`${t}:`:""}${i<10?`0${i}`:i}:${(a=e-60*i-3600*t)<10?`0${a}`:a} ${t>0?"h":"min"}`}function P(e){return E.apply(this,arguments)}function E(){return(E=(0,i.default)((function*(t){return fetch(`https://www.strava.com/api/v3/activities/${t}/streams?access_token=${e.credentials.accessToken}&keys=time,distance,heartrate,altitude&key_by_type=true`).then((function(e){return e.json()}))}))).apply(this,arguments)}return(0,C.jsxs)(u.default,{style:A.item,onPress:function(){!function(){L.apply(this,arguments)}(e.activity),b.default.configureNext(b.default.Presets.easeInEaseOut),p(!v)},children:[(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:`${e.activity.name}`}),(0,C.jsx)(s.default,{children:`${new Date(e.activity.start_date).toLocaleDateString()}`}),(0,C.jsx)(u.default,{onPress:function(){return M.openURL(`https://www.strava.com/activities/${e.activity.id}`)},children:(0,C.jsx)(s.default,{style:{color:"blue",textDecorationColor:"blue",textDecorationLine:"underline"},children:"View on Strava"})}),v&&"0"!==N&&"0"!==I?(0,C.jsxs)(d.default,{style:{width:"100%"},children:[(0,C.jsx)(d.default,{style:A.separator}),(0,C.jsx)((function(){return void 0===l||"0"===N||"0"===I?(0,C.jsx)(d.default,{style:A.modalContainer,children:(0,C.jsxs)(d.default,{style:[A.modalLine,{justifyContent:"space-evenly"}],children:[(0,C.jsxs)(d.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,C.jsx)(S.default,{style:{textAlign:"center",alignSelf:"center"},name:"timer",size:28}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,C.jsx)(k.default,{style:{textAlign:"center",alignSelf:"center"},name:"map-marker-distance",size:28}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,C.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,C.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,C.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[m]"})]}),(0,C.jsxs)(d.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:`${R(e.activity.elapsed_time)}`}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:Math.round(e.activity.distance/10)/100+" km"}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:`${R(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:`${Math.round(e.activity.average_heartrate)}`}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,C.jsx)(s.default,{style:[A.name,{textAlign:"center"}],children:`+${e.activity.total_elevation_gain}`})]})]})}):l?(0,C.jsxs)(d.default,{style:A.modalContainer,children:[(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:`${l.distance} m`}),(0,C.jsx)(k.default,{style:{display:"flex",alignItems:"center"},name:"map-marker-distance",size:28}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:Math.round(e.activity.distance/10)/100+" km"})]}),(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:`${R(l.time)}`}),(0,C.jsx)(S.default,{style:{display:"flex",alignItems:"center"},name:"timer",size:28}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${R(e.activity.elapsed_time)}`})]}),(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:`${l.pace.replace(" min","").replace(" h","")}`}),(0,C.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${R(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`})]}),(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:""+Math.round((l.end.distance-l.start.distance)/(l.end.time-l.start.time)*3.6*10)/10}),(0,C.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:""+Math.round(e.activity.distance/10)/100})]}),!isNaN(l.heartrate)&&(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:`${l.heartrate}`}),(0,C.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${Math.round(e.activity.average_heartrate)}`})]}),!isNaN(l.elevation.gain)&&!isNaN(l.elevation.loss)&&(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:`+${l.elevation.gain} / -${l.elevation.loss}`}),(0,C.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[m]"}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`+${Math.round(e.activity.total_elevation_gain)}`})]}),(0,C.jsx)(d.default,{style:{width:"100%"},children:(0,C.jsx)(d.default,{style:A.separator})}),(0,C.jsxs)(d.default,{style:[A.modalLine,{display:"flex"}],children:[(0,C.jsx)(s.default,{style:[A.name,{flex:1,marginRight:"auto"}],children:Math.round(l.start.distance)/1e3+" km"}),(0,C.jsx)(_.default,{style:{display:"flex",alignItems:"center"},name:"at",size:24}),(0,C.jsx)(s.default,{style:[A.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${R(l.start.time)}`})]})]}):g?(0,C.jsx)(f.default,{color:"black"}):null}),{})]}):null]})}var A=l.default.create({item:{marginHorizontal:16,marginTop:16,alignItems:"center",backgroundColor:"#fc5200",borderRadius:20,padding:10,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},modalContainer:{flex:1,justifyContent:"center",alignItems:"center"},modal:{width:"90%",marginLeft:"5%",backgroundColor:"#fc5200",borderRadius:20,padding:35,alignItems:"center",justifyContent:"center",boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4,elevation:5},modalLine:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},separator:{height:2,backgroundColor:"black",marginTop:8,marginBottom:8},name:{fontSize:24}});function O(e){var t=(0,r.useState)([]),a=(0,n.default)(t,2),l=a[0],o=a[1],c=(0,r.useState)(!1),h=(0,n.default)(c,2),g=h[0],m=h[1],y=(0,r.useState)(!0),x=(0,n.default)(y,2),v=x[0],S=x[1],_=(0,r.useState)(1),k=(0,n.default)(_,2),M=k[0],A=k[1],O=(0,r.useState)("1000"),z=(0,n.default)(O,2),I=z[0],T=z[1],L=(0,r.useState)(""),R=(0,n.default)(L,2),P=R[0],E=R[1];function F(e){return D.apply(this,arguments)}function D(){return(D=(0,i.default)((function*(t){t?m(!0):S(!0),fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${e.credentials.accessToken}&per_page=10&page=${t?1:M}`).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){return e.isExpanded=!1})),o(t?e:l.concat(e)),A(M+1)})).catch((function(e){return console.log(e)})).finally((function(){m(!1),S(!1)}))}))).apply(this,arguments)}return(0,r.useEffect)((function(){void 0!==e.credentials.accessToken&&F(!1)}),[e.credentials]),(0,C.jsx)(C.Fragment,{children:v&&0===l.length?(0,C.jsx)(f.default,{style:{marginTop:16},size:"large",color:"black"}):(0,C.jsx)(p.default,{style:{alignSelf:"center",width:"100%",maxWidth:700},data:l,renderItem:function(t){var a=t.item;return(0,C.jsx)(N,{activity:a,distanceMeasure:I,timeMeasure:P,credentials:e.credentials})},keyExtractor:function(e){return e.id},keyboardDismissMode:"onDrag",onRefresh:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),F(!0)},refreshing:g,ListHeaderComponent:(0,C.jsxs)(d.default,{style:$.item,children:[(0,C.jsxs)(d.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,C.jsx)(s.default,{style:{fontSize:24},children:"Distance [m]"}),(0,C.jsx)(j.default,{style:$.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(t)?T(0):E(""),T(t)},value:I.toString()})]}),(0,C.jsxs)(d.default,{style:{flexDirection:"row",justifyContent:"space-between",marginTop:5},children:[(0,C.jsx)(s.default,{style:{fontSize:24},children:"Time [s]"}),(0,C.jsx)(j.default,{style:$.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(t)?E(""):T(""),E(t)},value:P.toString()})]})]}),ListFooterComponent:(0,C.jsx)(u.default,{style:[$.item,{marginBottom:16,alignItems:"center"}],onPress:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),F(!1)},children:v?(0,C.jsx)(f.default,{style:{marginTop:19,marginBottom:19},color:"black"}):(0,C.jsxs)(d.default,{style:{flexDirection:"row",marginTop:13,marginBottom:13},children:[(0,C.jsx)(w.default,{name:"reload-circle",size:28,color:"black"}),(0,C.jsx)(s.default,{style:{fontSize:24},children:" Load more"})]})})})})}var $=l.default.create({item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}}),z=a(6566),I=a(3757);x.maybeCompleteAuthSession();var T={authorizationEndpoint:"https://www.strava.com/oauth/mobile/authorize",tokenEndpoint:"https://eou0f5t5ol4avvx.m.pipedream.net",revocationEndpoint:"https://www.strava.com/oauth/deauthorize"};function L(){var e=(0,r.useState)(!1),t=(0,n.default)(e,2),l=t[0],x=t[1],p=(0,r.useState)({}),j=(0,n.default)(p,2),b=j[0],w=j[1],S=(0,r.useState)(!1),_=(0,n.default)(S,2),k=_[0],M=_[1],N=(0,r.useState)(""),A=(0,n.default)(N,2),$=A[0],L=A[1];(0,r.useEffect)((function(){var e=function(){var e=(0,i.default)((function*(){M(!0);var e=function(){var e=(0,i.default)((function*(){return yield z.isAvailableAsync("credentials")}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,i.default)((function*(){return yield z.getItemAsync("credentials")}));return function(){return e.apply(this,arguments)}}(),a=JSON.parse(yield t());if((yield e())&&null!==a){if(!v.TokenResponse.isTokenFresh(a)){var n=yield(0,v.refreshAsync)({clientId:"80072",refreshToken:a.refreshToken},T);return w(n),x(!0),void M(!1)}w(a),x(!0),M(!1)}}));return function(){return e.apply(this,arguments)}}();e()}),[]);var P=(0,v.useAuthRequest)({clientId:"80072",scopes:["activity:read_all"],redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"})},T),E=(0,n.default)(P,3),F=E[0],D=E[1],W=E[2];function B(){return(B=(0,i.default)((function*(){var e=yield(0,v.exchangeCodeAsync)({clientId:null==F?void 0:F.clientId,redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:null==D?void 0:D.params.code},T);"web"!==o.default.OS&&(yield z.setItemAsync("credentials",JSON.stringify(e))),w(e),M(!1)}))).apply(this,arguments)}(0,r.useEffect)((function(){"success"===(null==D?void 0:D.type)?"read,activity:read_all"===(null==D?void 0:D.params.scope)||"activity:read_all,read"===(null==D?void 0:D.params.scope)?(L(""),function(){B.apply(this,arguments)}(),x(!0)):(L("wrong_scope"),M(!1)):"error"===(null==D?void 0:D.type)?(L(null==D?void 0:D.params.error),M(!1)):(L(""),M(!1))}),[D]);var H=function(){var e=(0,i.default)((function*(){"web"!==o.default.OS&&(yield z.deleteItemAsync("credentials")),yield fetch(`https://www.strava.com/oauth/deauthorize?access_token=${b.accessToken}`,{method:"POST"}),x(!1),M(!1)}));return function(){return e.apply(this,arguments)}}();return"android"===o.default.OS&&c.default.setLayoutAnimationEnabledExperimental(!0),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y.default,{backgroundColor:"#fc5200"}),(0,C.jsx)(g.SafeAreaProvider,{children:(0,C.jsxs)(m.SafeAreaView,{style:{flex:1},children:[(0,C.jsx)(d.default,{style:[R.topBar,{flexDirection:"row",justifyContent:"center"}],children:(0,C.jsxs)(d.default,{style:{alignItems:"center",flexDirection:"row",width:"100%",maxWidth:700,justifyContent:"space-between"},children:[(0,C.jsx)(s.default,{style:R.title,children:"FastestX"}),l&&!$&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h.Image,{cachePolicy:"memory-disk",style:{height:43,width:104},contentFit:"contain",source:a(1104)}),(0,C.jsx)(u.default,{onPress:function(){M(!0),H()},style:{marginRight:16,justifyContent:"center"},children:(0,C.jsx)(I.default,{name:"logout",size:24,color:"black"})})]})]})}),!l&&k?(0,C.jsxs)(d.default,{style:{marginTop:16,justifyContent:"space-between",flex:1},children:[(0,C.jsx)(f.default,{size:"large",color:"black"}),(0,C.jsx)(h.Image,{cachePolicy:"memory-disk",style:{width:"100%",height:63,marginTop:16},contentFit:"contain",source:a(1036)})]}):l?(0,C.jsx)(O,{credentials:b}):(0,C.jsxs)(d.default,{style:{flex:1,justifyContent:"space-between",alignSelf:"stretch",justifySelf:"stretch"},children:[(0,C.jsxs)(d.default,{children:[$?(0,C.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center",textAlign:"center"},children:"This app needs the permission to read all of your activities' data to work."}):(0,C.jsx)(C.Fragment,{}),(0,C.jsx)(u.default,{style:{marginTop:16},onPress:function(){M(!0),W()},children:(0,C.jsx)(h.Image,{cachePolicy:"memory-disk",style:{height:48},contentFit:"contain",source:a(9513)})}),(0,C.jsx)(d.default,{style:{marginTop:16},children:(0,C.jsx)(s.default,{style:{textAlign:"center"},children:"Log in to see your activities"})})]}),(!l||$)&&(0,C.jsx)(h.Image,{cachePolicy:"memory-disk",style:{width:"100%",height:63},contentFit:"contain",source:a(1036)})]})]})})]})}var R=l.default.create({container:{display:"flex"},topBar:{height:43,backgroundColor:"#fc5200"},title:{paddingLeft:16,fontSize:32},item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}})},1036:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_light.761875a979df9ddcff63.svg"},1104:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_white.a3a1cb97b4c52945cd53.svg"},9513:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/btn_strava_connectwith_orange.d61a51baedcfa2ed1280.svg"},4654:()=>{}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,(()=>{var e=[];a.O=(t,i,n,r)=>{if(!i){var l=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],s=!0,d=0;d<i.length;d++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](i[d])))?i.splice(d--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var o=n();void 0!==o&&(t=o)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/FastestX/",(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[l,s,d]=i,o=0;if(l.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(d)var c=d(a)}for(t&&t(i);o<l.length;o++)r=l[o],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},i=self.webpackChunkweb=self.webpackChunkweb||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[451],(()=>a(6271)));i=a.O(i)})();
//# sourceMappingURL=main.b5d99317.js.map