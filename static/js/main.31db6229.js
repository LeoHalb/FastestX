(()=>{var e={9361:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>J});var n=a(467),i=a(5544),r=a(6665),l=a(9558),s=a(6283),o=a(3929),d=a(5991),c=a(7640),u=a(5708),f=a(530),g=a(7074),h=a(8833),m=a(1171),p=a(3117),y=a(8966),v=a(1063),x=a(9972),j=a(6773),b=a(8511),w=a(1385),_=a(4467),S=a(5149),k=a(8359),O=a(7869),L=a(9887),M=a(2232),C=a(8878),I=a(302),N=(a(1297),a(397)),T=function(e){var t=(0,C.polygonCenter)(e.positions.fastestLatlng.length>0?e.positions.fastestLatlng:e.positions.latlng,I.EPSG3857),a=[{shapeType:"polyline",color:"#123123",id:"1",positions:e.positions.latlng.map((function(e){return{lat:e[0],lng:e[1]}}))}];e.positions.fastestLatlng.length>0&&a.push({shapeType:"polyline",color:"#fc5200",id:"2",positions:e.positions.fastestLatlng.map((function(e){return{lat:e[0],lng:e[1]}}))});var n={lat:t.lat,lng:t.lng};return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(u.default,{style:{width:"100%",height:"260px"},children:(0,N.jsx)(M.ExpoLeaflet,{loadingIndicator:function(){return(0,N.jsx)(f.default,{})},onMessage:function(){},mapCenterPosition:n,mapLayers:[{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',baseLayerIsChecked:!0,baseLayerName:"OpenStreetMap",layerType:"TileLayer",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}],mapOptions:{zoomControl:!1},mapShapes:a})})})};function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){(0,_.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e){(0,r.useEffect)((function(){b.default.configureNext(b.default.Presets.easeInEaseOut),x(!1),d(void 0),M(e.distanceMeasure),A(e.timeMeasure),m(!1),D({latlng:[],fastestLatlng:[]})}),[e.distanceMeasure,e.timeMeasure]);var t=(0,r.useState)(void 0),a=(0,i.default)(t,2),l=a[0],d=a[1],c=(0,r.useState)(!1),g=(0,i.default)(c,2),h=g[0],m=g[1],p=(0,r.useState)(!1),y=(0,i.default)(p,2),v=y[0],x=y[1],j=(0,r.useState)("1000"),w=(0,i.default)(j,2),_=w[0],M=w[1],C=(0,r.useState)(""),I=(0,i.default)(C,2),$=I[0],A=I[1],F=(0,r.useState)({latlng:[],fastestLatlng:[]}),R=(0,i.default)(F,2),E=R[0],D=R[1];function W(){return(W=(0,n.default)((function*(){var t={start:{distance:0,time:0},end:{distance:0,time:0},distance:0,time:999999999999999,heartrate:0,elevation:{gain:0,loss:0},range:{start:0,end:0}};if("0"===_||"0"===$||""===_&&""===$){var a,n;m(!0);var i=yield U(e.activity.id),r=null==(a=i.altitude)?void 0:a.data,s=null==(n=i.latlng)?void 0:n.data;(null==s?void 0:s.length)>0&&D({latlng:s,fastestLatlng:[]}),e.activity.total_elevation_loss=Math.round(null==r?void 0:r.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),d(t),m(!1)}else if(l||"0"===_||""===_||!1!==h){if(!l&&"0"!==$&&""!==$&&!1===h){var o,c,u,f,g;m(!0);var p=yield U(e.activity.id),y=null==(o=p.altitude)?void 0:o.data,v=null==(c=p.distance)?void 0:c.data,x=null==(u=p.time)?void 0:u.data,j=null==(f=p.heartrate)?void 0:f.data,w=null==(g=p.latlng)?void 0:g.data;w&&D(z(z({},E),{},{latlng:w}));var S=t;if(e.activity.total_elevation_gain=Math.round(null==y?void 0:y.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==y?void 0:y.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),$>=e.activity.elapsed_time)return d(void 0),D({latlng:w,fastestLatlng:[]}),void m(!1);if(v&&x){for(var k=x.slice(-1)-$,O=function*(e){var t=x.indexOf(x.slice(e).find((function(t){return t-x[e]>=$})));if(-1!==t){var a={distance:Math.round(10*(v[t]-v[e]))/10,time:x[t]-x[e],range:{start:e,end:t}};(a.time<S.time||a.time===S.time&&a.distance>S.distance)&&(S=a)}},L=0;x[L]<k;L++)yield*O(L);if(S){S.start={distance:v[S.range.start],time:x[S.range.start]},S.end={distance:v[S.range.end],time:x[S.range.end]},S.pace=B(Math.round(1e3/(v[S.range.end]-v[S.range.start])*(x[S.range.end]-x[S.range.start]))),S.heartrate=Math.round((null==j?void 0:j.slice(S.range.start,S.range.end+1).reduce((function(e,t){return e+t}),0))/(null==j?void 0:j.slice(S.range.start,S.range.end+1).length));var M=null==y?void 0:y.slice(S.range.start,S.range.end+1);S.elevation={gain:Math.round(null==M?void 0:M.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),loss:Math.round(null==M?void 0:M.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0))}}if((null==w?void 0:w.length)>0){var C=[];S&&(C=w.slice(S.range.start,S.range.end+1)),D({latlng:w,fastestLatlng:C})}m(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),d(S===t?void 0:S)}else d(void 0)}}else{var I,N,T,A,P;m(!0);var F=yield U(e.activity.id),R=null==(I=F.altitude)?void 0:I.data,W=null==(N=F.distance)?void 0:N.data,X=null==(T=F.time)?void 0:T.data,H=null==(A=F.heartrate)?void 0:A.data,J=null==(P=F.latlng)?void 0:P.data,q=t;if(e.activity.total_elevation_gain=Math.round(null==R?void 0:R.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==R?void 0:R.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),_>=e.activity.distance)return d(void 0),D({latlng:J,fastestLatlng:[]}),void m(!1);if(W&&X){for(var V=W.slice(-1)-_,G=function*(e){var t=W.indexOf(W.slice(e).find((function(t){return t-W[e]>=_})));if(-1!==t){var a={distance:Math.round(10*(W[t]-W[e]))/10,time:X[t]-X[e],range:{start:e,end:t}};(a.time<q.time||a.time===q.time&&a.distance>q.distance)&&(q=a)}},K=0;W[K]<V;K++)yield*G(K);if(q){q.start={distance:W[q.range.start],time:X[q.range.start]},q.end={distance:W[q.range.end],time:X[q.range.end]},q.pace=B(Math.round(1e3/(W[q.range.end]-W[q.range.start])*(X[q.range.end]-X[q.range.start]))),q.heartrate=Math.round((null==H?void 0:H.slice(q.range.start,q.range.end+1).reduce((function(e,t){return e+t}),0))/(null==H?void 0:H.slice(q.range.start,q.range.end+1).length));var Q=null==R?void 0:R.slice(q.range.start,q.range.end+1);q.elevation={gain:Math.round(null==Q?void 0:Q.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),loss:Math.round(null==Q?void 0:Q.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0))}}if((null==J?void 0:J.length)>0){var Y=[];q&&(Y=J.slice(q.range.start,q.range.end+1)),D({latlng:J,fastestLatlng:Y})}m(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),d(q===t?void 0:q)}else d(void 0)}}))).apply(this,arguments)}function B(e){var t=Math.floor(e/3600),a=e-3600*t,n=Math.floor(a/60);return`${0!==t?`${t}:`<10?`0${t}:`:`${t}:`:""}${n<10?`0${n}`:n}:${(a=e-60*n-3600*t)<10?`0${a}`:a} ${t>0?"h":"min"}`}function U(e){return X.apply(this,arguments)}function X(){return(X=(0,n.default)((function*(t){return fetch(`https://www.strava.com/api/v3/activities/${t}/streams?access_token=${e.credentials.accessToken}&keys=time,distance,heartrate,altitude,latlng&key_by_type=true`).then((function(e){return e.json()}))}))).apply(this,arguments)}return(0,N.jsxs)(u.default,{style:P.item,onPress:function(){!function(){W.apply(this,arguments)}(e.activity),b.default.configureNext(b.default.Presets.easeInEaseOut),x(!v)},children:[(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${e.activity.name}`}),(0,N.jsx)(s.default,{children:`${new Date(e.activity.start_date).toLocaleDateString()}`}),(0,N.jsx)(u.default,{onPress:function(){return L.openURL(`https://www.strava.com/activities/${e.activity.id}`)},children:(0,N.jsx)(s.default,{style:{color:"blue",textDecorationColor:"blue",textDecorationLine:"underline"},children:"View on Strava"})}),v?(0,N.jsxs)(o.default,{style:{width:"100%"},children:[(0,N.jsx)(o.default,{style:P.separator}),h?(0,N.jsx)(f.default,{color:"black"}):(0,N.jsx)((function(){var t,a,n;return void 0===l||"0"===_||"0"===$||""===_&&""===$&&!h?(0,N.jsxs)(o.default,{style:P.modalContainer,children:[(0,N.jsxs)(o.default,{style:[P.modalLine,{justifyContent:"space-evenly"}],children:[(0,N.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,N.jsx)(S.default,{style:{textAlign:"center",alignSelf:"center"},name:"timer",size:28}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,N.jsx)(O.default,{style:{textAlign:"center",alignSelf:"center"},name:"map-marker-distance",size:28}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,N.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,N.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,N.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[m]"})]}),(0,N.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${B(e.activity.elapsed_time)}`}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:Math.round(e.activity.distance/10)/100+" km"}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${B(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`${Math.round(e.activity.average_heartrate)}`}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,N.jsx)(s.default,{style:[P.name,{textAlign:"center"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]})]}),(null==(t=E.latlng)?void 0:t.length)>0?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o.default,{style:{width:"100%"},children:(0,N.jsx)(o.default,{style:P.separator})}),(0,N.jsx)(T,{positions:E})]}):(0,N.jsx)(N.Fragment,{})]}):l?(0,N.jsxs)(o.default,{style:P.modalContainer,children:[(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${l.distance} m`}),(0,N.jsx)(O.default,{style:{display:"flex",alignItems:"center"},name:"map-marker-distance",size:28}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:Math.round(e.activity.distance/10)/100+" km"})]}),(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${B(l.time)}`}),(0,N.jsx)(S.default,{style:{display:"flex",alignItems:"center"},name:"timer",size:28}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${B(e.activity.elapsed_time)}`})]}),(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${l.pace.replace(" min","").replace(" h","")}`}),(0,N.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${B(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`})]}),(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:""+Math.round((l.end.distance-l.start.distance)/(l.end.time-l.start.time)*3.6*10)/10}),(0,N.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(l.heartrate)&&(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`${l.heartrate}`}),(0,N.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${Math.round(e.activity.average_heartrate)}`})]}),!isNaN(l.elevation.gain)&&!isNaN(l.elevation.loss)&&(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex"}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:`+${l.elevation.gain} / -${l.elevation.loss}`}),(0,N.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[m]"}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]}),(0,N.jsx)(o.default,{style:{width:"100%"},children:(0,N.jsx)(o.default,{style:P.separator})}),(null==(a=E.latlng)?void 0:a.length)>0?(0,N.jsx)(T,{positions:E}):(0,N.jsx)(N.Fragment,{}),(0,N.jsxs)(o.default,{style:[P.modalLine,{display:"flex",marginTop:(null==(n=E.latlng)?void 0:n.length)>0?8:0}],children:[(0,N.jsx)(s.default,{style:[P.name,{flex:1,marginRight:"auto"}],children:Math.round(l.start.distance)/1e3+" km"}),(0,N.jsx)(k.default,{style:{display:"flex",alignItems:"center"},name:"at",size:24}),(0,N.jsx)(s.default,{style:[P.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${B(l.start.time)}`})]})]}):h?(0,N.jsx)(f.default,{color:"black"}):null}),{})]}):null]})}var P=l.default.create({item:{marginHorizontal:16,marginTop:16,alignItems:"center",backgroundColor:"#fc5200",borderRadius:20,padding:10,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},modalContainer:{flex:1,justifyContent:"center",alignItems:"center"},modal:{width:"90%",marginLeft:"5%",backgroundColor:"#fc5200",borderRadius:20,padding:35,alignItems:"center",justifyContent:"center",boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4,elevation:5},modalLine:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},separator:{height:2,backgroundColor:"black",marginTop:8,marginBottom:8},name:{fontSize:24}});function F(e){var t=(0,r.useState)([]),a=(0,i.default)(t,2),l=a[0],d=a[1],c=(0,r.useState)(!1),g=(0,i.default)(c,2),h=g[0],m=g[1],p=(0,r.useState)(!0),y=(0,i.default)(p,2),v=y[0],_=y[1],S=(0,r.useState)(1),k=(0,i.default)(S,2),O=k[0],L=k[1],M=(0,r.useState)("1000"),C=(0,i.default)(M,2),I=C[0],T=C[1],$=(0,r.useState)(""),z=(0,i.default)($,2),P=z[0],F=z[1];function E(e){return D.apply(this,arguments)}function D(){return(D=(0,n.default)((function*(t){t?m(!0):_(!0),fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${e.credentials.accessToken}&per_page=10&page=${t?1:O}`).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){return e.isExpanded=!1})),d(t?e:l.concat(e)),L(O+1)})).catch((function(e){return console.log(e)})).finally((function(){m(!1),_(!1)}))}))).apply(this,arguments)}(0,r.useEffect)((function(){void 0!==e.credentials.accessToken&&E(!1)}),[e.credentials]);return(0,N.jsx)(N.Fragment,{children:v&&0===l.length?(0,N.jsx)(f.default,{style:{marginTop:16},size:"large",color:"black"}):(0,N.jsx)(x.default,{style:{alignSelf:"center",width:"100%",maxWidth:700},data:l,renderItem:function(t){var a=t.item;return(0,N.jsx)(A,{activity:a,distanceMeasure:I,timeMeasure:P,credentials:e.credentials})},keyExtractor:function(e){return e.id},keyboardDismissMode:"onDrag",onRefresh:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),E(!0)},refreshing:h,ListHeaderComponent:(0,N.jsxs)(o.default,{style:R.item,children:[(0,N.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,N.jsx)(s.default,{style:{fontSize:24},children:"Distance [m]"}),(0,N.jsx)(j.default,{style:R.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(parseInt(t))?(F(""),T("0")):(F(""),T(parseInt(t).toString()))},value:I.toString()})]}),(0,N.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between",marginTop:5},children:[(0,N.jsx)(s.default,{style:{fontSize:24},children:"Time [s]"}),(0,N.jsx)(j.default,{style:R.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(parseInt(t))?(T(""),F("0")):(T(""),F(parseInt(t).toString()))},value:P.toString()})]})]}),ListFooterComponent:(0,N.jsx)(u.default,{style:[R.item,{marginBottom:16,alignItems:"center"}],onPress:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),E(!1)},children:v?(0,N.jsx)(f.default,{style:{marginTop:14,marginBottom:14},color:"black"}):(0,N.jsxs)(o.default,{style:{flexDirection:"row",marginTop:8,marginBottom:8},children:[(0,N.jsx)(w.default,{name:"reload-circle",size:28,color:"black"}),(0,N.jsx)(s.default,{style:{fontSize:24},children:" Load more"})]})})})})}var R=l.default.create({item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}}),E=a(4081),D=a(1087),W=a(4056),B=a(2858),U=a(6787),X=a(3718);y.maybeCompleteAuthSession();var H={authorizationEndpoint:"https://www.strava.com/oauth/mobile/authorize",tokenEndpoint:"https://eou0f5t5ol4avvx.m.pipedream.net",revocationEndpoint:"https://www.strava.com/oauth/deauthorize"};function J(){var e=(0,r.useState)(!1),t=(0,i.default)(e,2),a=t[0],l=t[1],y=(0,r.useState)({}),x=(0,i.default)(y,2),j=x[0],b=x[1],w=(0,r.useState)(!0),_=(0,i.default)(w,2),S=_[0],k=_[1],O=(0,r.useState)(""),L=(0,i.default)(O,2),M=L[0],C=L[1],I=(0,r.useState)(!1),T=(0,i.default)(I,2),$=T[0],z=T[1],A=function(){var e=(0,n.default)((function*(){(0,v.exchangeCodeAsync)({clientId:null==J?void 0:J.clientId,redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:null==V?void 0:V.params.code},H).then((function(e){b(e),D.default.setItem("strava_credentials",JSON.stringify(e)),k(!1),l(!0)})).catch((function(){C("rate_limit"),k(!1)}))}));return function(){return e.apply(this,arguments)}}(),P=(0,v.useAuthRequest)({clientId:"80072",scopes:["activity:read_all"],redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"})},H),R=(0,i.default)(P,3),J=R[0],V=R[1],G=R[2],K=function(){var e=(0,n.default)((function*(){yield fetch(`https://www.strava.com/oauth/deauthorize?access_token=${j.accessToken}`,{method:"POST"}),yield D.default.removeItem("strava_credentials"),b({}),l(!1),k(!1)}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){k(!0);var e=function(){var e=(0,n.default)((function*(){return yield D.default.getItem("strava_credentials")}));return function(){return e.apply(this,arguments)}}(),t=JSON.parse(yield e());if(null!==(yield t)){if(!v.TokenResponse.isTokenFresh(t)){var a=yield(0,v.refreshAsync)({clientId:"80072",refreshToken:t.refreshToken},H);return b(a),yield D.default.setItem("strava_credentials",JSON.stringify(a)),l(!0),void k(!1)}return b(t),l(!0),void k(!1)}l(!1),k(!1)}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,r.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){k(!0),z(!0);var e=new URLSearchParams(window.location.search),t={};for(var a of e){var n=(0,i.default)(a,2),r=n[0],s=n[1];t[r]=s}var o=location.href.split("?")[0];window.history.pushState("object",document.title,o),void 0!==t.code&&void 0!==t.scope&&void 0!==t.state?"read,activity:read_all"===t.scope||"activity:read_all,read"===t.scope?(0,v.exchangeCodeAsync)({clientId:"80072",redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:t.code},H).then((function(e){b(e),D.default.setItem("strava_credentials",JSON.stringify(e)),k(!1),C(""),l(!0)})).catch((function(){C("rate_limit"),k(!1),l(!1)})):(C("wrong_scope"),k(!1),l(!1)):void 0!==t.error?(C("wrong_scope"),k(!1),l(!1)):(C(""),k(!1),l(!1))}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,r.useEffect)((function(){"success"===(null==V?void 0:V.type)?"read,activity:read_all"===(null==V?void 0:V.params.scope)||"activity:read_all,read"===(null==V?void 0:V.params.scope)?(C(""),A()):(C("wrong_scope"),k(!1)):"error"===(null==V?void 0:V.type)?(C("wrong_scope"),k(!1)):null===J||$||(C(""),k(!1))}),[V]),(0,r.useEffect)((function(){console.log({Platform:d.default,loggedIn:a,credentials:j,loading:S,errorState:M,request:J,response:V})})),"android"===d.default.OS&&c.default.setLayoutAnimationEnabledExperimental(!0),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(p.default,{backgroundColor:"#fc5200"}),(0,N.jsx)(h.SafeAreaProvider,{children:(0,N.jsxs)(m.SafeAreaView,{style:{flex:1},children:[(0,N.jsx)(o.default,{style:[q.topBar,{flexDirection:"row",justifyContent:"center"}],children:(0,N.jsxs)(o.default,{style:{alignItems:"center",flexDirection:"row",width:"100%",maxWidth:700,justifyContent:"space-between"},children:[(0,N.jsx)(s.default,{style:q.title,children:"FastestX"}),a&&!M&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g.Image,{style:{height:43,width:104},contentFit:"contain",source:W}),(0,N.jsx)(u.default,{onPress:function(){k(!0),K()},style:{marginRight:16,justifyContent:"center"},children:(0,N.jsx)(E.default,{name:"logout",size:24,color:"black"})})]})]})}),S?(0,N.jsxs)(o.default,{style:{marginTop:16,justifyContent:"space-between",flex:1},children:[(0,N.jsx)(f.default,{size:"large",color:"black"}),(0,N.jsx)(g.Image,{style:{width:"100%",height:63,marginTop:16},contentFit:"contain",source:U})]}):a&&!M?(0,N.jsx)(F,{credentials:j}):(0,N.jsxs)(o.default,{style:{flex:1,justifyContent:"space-between",alignSelf:"stretch",justifySelf:"stretch"},children:[(0,N.jsxs)(o.default,{children:["wrong_scope"===M?(0,N.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center"},children:"FastestX needs the permission to read all of your activities' data to work."}):(0,N.jsx)(N.Fragment,{}),"rate_limit"===M?(0,N.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center"},children:"FastestX reached it's usage limit. It will work again tomorrow."}):(0,N.jsx)(N.Fragment,{}),(0,N.jsx)(u.default,{style:{marginTop:16},onPress:function(){k(!0),G()},children:(0,N.jsx)(g.Image,{style:{height:48},contentFit:"contain",source:B})}),(0,N.jsx)(o.default,{style:{marginTop:16},children:(0,N.jsx)(s.default,{style:{textAlign:"center"},children:"Log in to see your activities"})}),(0,N.jsx)(g.Image,{style:{height:500,marginTop:16},contentFit:"contain",source:X})]}),(!a||M)&&(0,N.jsx)(g.Image,{style:{width:"100%",height:63},contentFit:"contain",source:U})]})]})})]})}var q=l.default.create({container:{display:"flex"},topBar:{height:43,backgroundColor:"#fc5200"},title:{paddingLeft:16,fontSize:32},item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}})},6787:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_light.761875a979df9ddcff63.svg"},4056:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_white.a3a1cb97b4c52945cd53.svg"},2858:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/btn_strava_connectwith_orange.d61a51baedcfa2ed1280.svg"},3718:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/demo.a225dedf09db6a0446c9.jpg"},2634:()=>{}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,(()=>{var e=[];a.O=(t,n,i,r)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,i,r]=e[c],s=!0,o=0;o<n.length;o++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](n[o])))?n.splice(o--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/FastestX/",(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[l,s,o]=n,d=0;if(l.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(o)var c=o(a)}for(t&&t(n);d<l.length;d++)r=l[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[941],(()=>a(605)));var n=a.O(void 0,[941],(()=>a(5036)));n=a.O(n)})();
//# sourceMappingURL=main.31db6229.js.map