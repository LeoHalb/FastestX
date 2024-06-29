(()=>{var e={9361:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V});var n=a(467),i=a(5544),l=a(6665),r=a(9558),s=a(6283),o=a(3929),d=a(5991),c=a(7640),u=a(5708),f=a(530),g=a(7074),h=a(8833),m=a(1171),p=a(3117),y=a(8966),v=a(1063),x=a(9972),j=a(6773),b=a(8511),w=a(1385),_=a(4467),S=a(5149),k=a(8359),O=a(7869),M=a(9887),C=a(2232),I=a(8589),N=a(1107),z=(a(1297),a(9491)),P=a(6825),T=a(397);P.Map.include({getSize:function(){return new L.Point(260,260)}});var $=function(e){var t=[[new z.Polyline(e.positions.latlng).getBounds().pad(.2)._southWest.lat,new z.Polyline(e.positions.latlng).getBounds().pad(.2)._southWest.lng],[new z.Polyline(e.positions.latlng).getBounds().pad(.2)._northEast.lat,new z.Polyline(e.positions.latlng).getBounds().pad(.2)._northEast.lng]],a=new P.Map(document.createElement("div"),{center:[0,0],zoom:0}).fitBounds(new z.Polyline(e.positions.latlng).getBounds()).getZoom(),n=(0,I.centroid)(e.positions.latlng,N.EPSG3857),i=[{shapeType:"polyline",color:"#123123",id:"1",positions:e.positions.latlng.map((function(e){return{lat:e[0],lng:e[1]}}))}];e.positions.fastestLatlng.length>0&&i.push({shapeType:"polyline",color:"#fc5200",id:"2",positions:e.positions.fastestLatlng.map((function(e){return{lat:e[0],lng:e[1]}}))});var l={zoomControl:!1,minZoom:1,maxBounds:t},r={lat:n.lat,lng:n.lng};return(0,T.jsx)(u.default,{style:{width:"100%",height:"260px"},children:(0,T.jsx)(C.ExpoLeaflet,{loadingIndicator:function(){return(0,T.jsx)(f.default,{})},onMessage:function(){},mapCenterPosition:r,mapLayers:[{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',baseLayerIsChecked:!0,baseLayerName:"OpenStreetMap",layerType:"TileLayer",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}],mapOptions:l,mapShapes:i,maxZoom:18,zoom:a<=18?a:18})})};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){(0,_.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function E(e){(0,l.useEffect)((function(){b.default.configureNext(b.default.Presets.easeInEaseOut),x(!1),d(void 0),L(e.distanceMeasure),z(e.timeMeasure),m(!1),D({latlng:[],fastestLatlng:[]})}),[e.distanceMeasure,e.timeMeasure]);var t=(0,l.useState)(void 0),a=(0,i.default)(t,2),r=a[0],d=a[1],c=(0,l.useState)(!1),g=(0,i.default)(c,2),h=g[0],m=g[1],p=(0,l.useState)(!1),y=(0,i.default)(p,2),v=y[0],x=y[1],j=(0,l.useState)("1000"),w=(0,i.default)(j,2),_=w[0],L=w[1],C=(0,l.useState)(""),I=(0,i.default)(C,2),N=I[0],z=I[1],P=(0,l.useState)({latlng:[],fastestLatlng:[]}),A=(0,i.default)(P,2),E=A[0],D=A[1];function B(){return(B=(0,n.default)((function*(){var t={start:{distance:0,time:0},end:{distance:0,time:0},distance:0,time:999999999999999,heartrate:0,elevation:{gain:0,loss:0},range:{start:0,end:0}};if("0"===_||"0"===N||""===_&&""===N){var a,n;m(!0);var i=yield U(e.activity.id),l=null==(a=i.altitude)?void 0:a.data,s=null==(n=i.latlng)?void 0:n.data;(null==s?void 0:s.length)>0&&D({latlng:s,fastestLatlng:[]}),e.activity.total_elevation_loss=Math.round(null==l?void 0:l.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),d(t),m(!1)}else if(r||"0"===_||""===_||!1!==h){if(!r&&"0"!==N&&""!==N&&!1===h){var o,c,u,f,g;m(!0);var p=yield U(e.activity.id),y=null==(o=p.altitude)?void 0:o.data,v=null==(c=p.distance)?void 0:c.data,x=null==(u=p.time)?void 0:u.data,j=null==(f=p.heartrate)?void 0:f.data,w=null==(g=p.latlng)?void 0:g.data;w&&D(R(R({},E),{},{latlng:w}));var S=t;if(e.activity.total_elevation_gain=Math.round(null==y?void 0:y.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==y?void 0:y.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),N>=e.activity.elapsed_time)return d(void 0),D({latlng:w,fastestLatlng:[]}),void m(!1);if(v&&x){for(var k=x.slice(-1)-N,O=function*(e){var t=x.indexOf(x.slice(e).find((function(t){return t-x[e]>=N})));if(-1!==t){var a={distance:Math.round(10*(v[t]-v[e]))/10,time:x[t]-x[e],range:{start:e,end:t}};(a.time<S.time||a.time===S.time&&a.distance>S.distance)&&(S=a)}},L=0;x[L]<k;L++)yield*O(L);if(S){S.start={distance:v[S.range.start],time:x[S.range.start]},S.end={distance:v[S.range.end],time:x[S.range.end]},S.pace=W(Math.round(1e3/(v[S.range.end]-v[S.range.start])*(x[S.range.end]-x[S.range.start]))),S.heartrate=Math.round((null==j?void 0:j.slice(S.range.start,S.range.end+1).reduce((function(e,t){return e+t}),0))/(null==j?void 0:j.slice(S.range.start,S.range.end+1).length));var M=null==y?void 0:y.slice(S.range.start,S.range.end+1);S.elevation={gain:Math.round(null==M?void 0:M.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),loss:Math.round(null==M?void 0:M.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0))}}if((null==w?void 0:w.length)>0){var C=[];S&&(C=w.slice(S.range.start,S.range.end+1)),D({latlng:w,fastestLatlng:C})}m(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),d(S===t?void 0:S)}else d(void 0)}}else{var I,z,P,T,$;m(!0);var A=yield U(e.activity.id),F=null==(I=A.altitude)?void 0:I.data,B=null==(z=A.distance)?void 0:z.data,X=null==(P=A.time)?void 0:P.data,H=null==(T=A.heartrate)?void 0:T.data,q=null==($=A.latlng)?void 0:$.data,J=t;if(e.activity.total_elevation_gain=Math.round(null==F?void 0:F.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),e.activity.total_elevation_loss=Math.round(null==F?void 0:F.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0)),_>=e.activity.distance)return d(void 0),D({latlng:q,fastestLatlng:[]}),void m(!1);if(B&&X){for(var Z=B.slice(-1)-_,V=function*(e){var t=B.indexOf(B.slice(e).find((function(t){return t-B[e]>=_})));if(-1!==t){var a={distance:Math.round(10*(B[t]-B[e]))/10,time:X[t]-X[e],range:{start:e,end:t}};(a.time<J.time||a.time===J.time&&a.distance>J.distance)&&(J=a)}},G=0;B[G]<Z;G++)yield*V(G);if(J){J.start={distance:B[J.range.start],time:X[J.range.start]},J.end={distance:B[J.range.end],time:X[J.range.end]},J.pace=W(Math.round(1e3/(B[J.range.end]-B[J.range.start])*(X[J.range.end]-X[J.range.start]))),J.heartrate=Math.round((null==H?void 0:H.slice(J.range.start,J.range.end+1).reduce((function(e,t){return e+t}),0))/(null==H?void 0:H.slice(J.range.start,J.range.end+1).length));var K=null==F?void 0:F.slice(J.range.start,J.range.end+1);J.elevation={gain:Math.round(null==K?void 0:K.reduce((function(e,t,a,n){return t>n[a-1]?e+t-n[a-1]:e+0}),0)),loss:Math.round(null==K?void 0:K.reduce((function(e,t,a,n){return t<n[a-1]?e+n[a-1]-t:e+0}),0))}}if((null==q?void 0:q.length)>0){var Q=[];J&&(Q=q.slice(J.range.start,J.range.end+1)),D({latlng:q,fastestLatlng:Q})}m(!1),b.default.configureNext(b.default.Presets.easeInEaseOut),d(J===t?void 0:J)}else d(void 0)}}))).apply(this,arguments)}function W(e){var t=Math.floor(e/3600),a=e-3600*t,n=Math.floor(a/60);return`${0!==t?`${t}:`<10?`0${t}:`:`${t}:`:""}${n<10?`0${n}`:n}:${(a=e-60*n-3600*t)<10?`0${a}`:a} ${t>0?"h":"min"}`}function U(e){return X.apply(this,arguments)}function X(){return(X=(0,n.default)((function*(t){return fetch(`https://www.strava.com/api/v3/activities/${t}/streams?access_token=${e.credentials.accessToken}&keys=time,distance,heartrate,altitude,latlng&key_by_type=true`).then((function(e){return e.json()}))}))).apply(this,arguments)}return(0,T.jsxs)(u.default,{style:F.item,onPress:function(){!function(){B.apply(this,arguments)}(e.activity),b.default.configureNext(b.default.Presets.easeInEaseOut),x(!v)},children:[(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:`${e.activity.name}`}),(0,T.jsx)(s.default,{children:`${new Date(e.activity.start_date).toLocaleDateString()}`}),(0,T.jsx)(u.default,{onPress:function(){return M.openURL(`https://www.strava.com/activities/${e.activity.id}`)},children:(0,T.jsx)(s.default,{style:{color:"blue",textDecorationColor:"blue",textDecorationLine:"underline"},children:"View on Strava"})}),v?(0,T.jsxs)(o.default,{style:{width:"100%"},children:[(0,T.jsx)(o.default,{style:F.separator}),h?(0,T.jsx)(f.default,{color:"black"}):(0,T.jsx)((function(){var t,a,n;return void 0===r||"0"===_||"0"===N||""===_&&""===N&&!h?(0,T.jsxs)(o.default,{style:F.modalContainer,children:[(0,T.jsxs)(o.default,{style:[F.modalLine,{justifyContent:"space-evenly"}],children:[(0,T.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,T.jsx)(S.default,{style:{textAlign:"center",alignSelf:"center"},name:"timer",size:28}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,T.jsx)(O.default,{style:{textAlign:"center",alignSelf:"center"},name:"map-marker-distance",size:28}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,T.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,T.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,T.jsx)(s.default,{style:{display:"flex",textAlign:"center",alignSelf:"center",fontSize:22,fontWeight:"bold"},children:"[m]"})]}),(0,T.jsxs)(o.default,{children:[!isNaN(e.activity.elapsed_time)&&0!==e.activity.elapsed_time&&(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:`${W(e.activity.elapsed_time)}`}),!isNaN(e.activity.distance)&&0!==e.activity.distance&&(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:Math.round(e.activity.distance/10)/100+" km"}),!isNaN(e.activity.average_speed)&&0!==e.activity.average_speed&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:`${W(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(e.activity.average_heartrate)&&0!==e.activity.average_heartrate&&(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:`${Math.round(e.activity.average_heartrate)}`}),!isNaN(e.activity.total_elevation_gain)&&0!==e.activity.total_elevation_gain&&(0,T.jsx)(s.default,{style:[F.name,{textAlign:"center"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]})]}),(null==(t=E.latlng)?void 0:t.length)>0?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(o.default,{style:{width:"100%"},children:(0,T.jsx)(o.default,{style:F.separator})}),(0,T.jsx)($,{positions:E})]}):(0,T.jsx)(T.Fragment,{})]}):r?(0,T.jsxs)(o.default,{style:F.modalContainer,children:[(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex"}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:`${r.distance} m`}),(0,T.jsx)(O.default,{style:{display:"flex",alignItems:"center"},name:"map-marker-distance",size:28}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:Math.round(e.activity.distance/10)/100+" km"})]}),(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex"}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:`${W(r.time)}`}),(0,T.jsx)(S.default,{style:{display:"flex",alignItems:"center"},name:"timer",size:28}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${W(e.activity.elapsed_time)}`})]}),(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex"}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:`${r.pace.replace(" min","").replace(" h","")}`}),(0,T.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[min/km]"}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${W(Math.round(1e3/e.activity.average_speed)).replace(" min","").replace(" h","")}`})]}),(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex"}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:""+Math.round((r.end.distance-r.start.distance)/(r.end.time-r.start.time)*3.6*10)/10}),(0,T.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[km/h]"}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:""+Math.round(3.6*e.activity.average_speed*10)/10})]}),!isNaN(r.heartrate)&&(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex"}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:`${r.heartrate}`}),(0,T.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[bpm]"}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${Math.round(e.activity.average_heartrate)}`})]}),!isNaN(r.elevation.gain)&&!isNaN(r.elevation.loss)&&(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex"}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:`+${r.elevation.gain} / -${r.elevation.loss}`}),(0,T.jsx)(s.default,{style:{display:"flex",alignItems:"center",fontSize:22,fontWeight:"bold"},children:"[m]"}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`+${e.activity.total_elevation_gain} / -${e.activity.total_elevation_loss}`})]}),(0,T.jsx)(o.default,{style:{width:"100%"},children:(0,T.jsx)(o.default,{style:F.separator})}),(null==(a=E.latlng)?void 0:a.length)>0?(0,T.jsx)($,{positions:E}):(0,T.jsx)(T.Fragment,{}),(0,T.jsxs)(o.default,{style:[F.modalLine,{display:"flex",marginTop:(null==(n=E.latlng)?void 0:n.length)>0?8:0}],children:[(0,T.jsx)(s.default,{style:[F.name,{flex:1,marginRight:"auto"}],children:Math.round(r.start.distance)/1e3+" km"}),(0,T.jsx)(k.default,{style:{display:"flex",alignItems:"center"},name:"at",size:24}),(0,T.jsx)(s.default,{style:[F.name,{textAlign:"right",flex:1,marginLeft:"auto"}],children:`${W(r.start.time)}`})]})]}):h?(0,T.jsx)(f.default,{color:"black"}):null}),{})]}):null]})}var F=r.default.create({item:{marginHorizontal:16,marginTop:16,alignItems:"center",backgroundColor:"#fc5200",borderRadius:20,padding:10,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},modalContainer:{flex:1,justifyContent:"center",alignItems:"center"},modal:{width:"90%",marginLeft:"5%",backgroundColor:"#fc5200",borderRadius:20,padding:35,alignItems:"center",justifyContent:"center",boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4,elevation:5},modalLine:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},separator:{height:2,backgroundColor:"black",marginTop:8,marginBottom:8},name:{fontSize:24}});function D(e){var t=(0,l.useState)([]),a=(0,i.default)(t,2),r=a[0],d=a[1],c=(0,l.useState)(!1),g=(0,i.default)(c,2),h=g[0],m=g[1],p=(0,l.useState)(!0),y=(0,i.default)(p,2),v=y[0],_=y[1],S=(0,l.useState)(1),k=(0,i.default)(S,2),O=k[0],L=k[1],M=(0,l.useState)("1000"),C=(0,i.default)(M,2),I=C[0],N=C[1],z=(0,l.useState)(""),P=(0,i.default)(z,2),$=P[0],A=P[1];function R(e){return F.apply(this,arguments)}function F(){return(F=(0,n.default)((function*(t){t?m(!0):_(!0),fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${e.credentials.accessToken}&per_page=10&page=${t?1:O}`).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){return e.isExpanded=!1})),d(t?e:r.concat(e)),L(O+1)})).catch((function(e){return console.log(e)})).finally((function(){m(!1),_(!1)}))}))).apply(this,arguments)}(0,l.useEffect)((function(){void 0!==e.credentials.accessToken&&R(!1)}),[e.credentials]);return(0,T.jsx)(T.Fragment,{children:v&&0===r.length?(0,T.jsx)(f.default,{style:{marginTop:16},size:"large",color:"black"}):(0,T.jsx)(x.default,{style:{alignSelf:"center",width:"100%",maxWidth:700},data:r,renderItem:function(t){var a=t.item;return(0,T.jsx)(E,{activity:a,distanceMeasure:I,timeMeasure:$,credentials:e.credentials})},keyExtractor:function(e){return e.id},keyboardDismissMode:"onDrag",onRefresh:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),R(!0)},refreshing:h,ListHeaderComponent:(0,T.jsxs)(o.default,{style:B.item,children:[(0,T.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,T.jsx)(s.default,{style:{fontSize:24},children:"Distance [m]"}),(0,T.jsx)(j.default,{style:B.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(parseInt(t))?(A(""),N("0")):(A(""),N(parseInt(t).toString()))},value:I.toString()})]}),(0,T.jsxs)(o.default,{style:{flexDirection:"row",justifyContent:"space-between",marginTop:5},children:[(0,T.jsx)(s.default,{style:{fontSize:24},children:"Time [s]"}),(0,T.jsx)(j.default,{style:B.input,contextMenuHidden:!0,selectionColor:"#fc5200",inputMode:"numeric",onChangeText:function(e){var t=e.replace(/[^0-9]/g,"");isNaN(parseInt(t))?(N(""),A("0")):(N(""),A(parseInt(t).toString()))},value:$.toString()})]})]}),ListFooterComponent:(0,T.jsx)(u.default,{style:[B.item,{marginBottom:16,alignItems:"center"}],onPress:function(){b.default.configureNext(b.default.Presets.easeInEaseOut),R(!1)},children:v?(0,T.jsx)(f.default,{style:{marginTop:14,marginBottom:14},color:"black"}):(0,T.jsxs)(o.default,{style:{flexDirection:"row",marginTop:8,marginBottom:8},children:[(0,T.jsx)(w.default,{name:"reload-circle",size:28,color:"black"}),(0,T.jsx)(s.default,{style:{fontSize:24},children:" Load more"})]})})})})}var B=r.default.create({item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}}),W=a(4081),U=a(1087),X=a(4056),H=a(2858),q=a(6787),J=a(8082);y.maybeCompleteAuthSession();var Z={authorizationEndpoint:"https://www.strava.com/oauth/mobile/authorize",tokenEndpoint:"https://eou0f5t5ol4avvx.m.pipedream.net",revocationEndpoint:"https://www.strava.com/oauth/deauthorize"};function V(){var e=(0,l.useState)(!1),t=(0,i.default)(e,2),a=t[0],r=t[1],y=(0,l.useState)({}),x=(0,i.default)(y,2),j=x[0],b=x[1],w=(0,l.useState)(!0),_=(0,i.default)(w,2),S=_[0],k=_[1],O=(0,l.useState)(""),L=(0,i.default)(O,2),C=L[0],I=L[1],N=(0,l.useState)(!1),z=(0,i.default)(N,2),P=z[0],$=z[1],A=function(){var e=(0,n.default)((function*(){(0,v.exchangeCodeAsync)({clientId:null==F?void 0:F.clientId,redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:null==B?void 0:B.params.code},Z).then((function(e){b(e),U.default.setItem("strava_credentials",JSON.stringify(e)),k(!1),r(!0)})).catch((function(){I("rate_limit"),k(!1)}))}));return function(){return e.apply(this,arguments)}}(),R=(0,v.useAuthRequest)({clientId:"80072",scopes:["activity:read_all"],redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"})},Z),E=(0,i.default)(R,3),F=E[0],B=E[1],V=E[2],K=function(){var e=(0,n.default)((function*(){b({}),r(!1),yield fetch(`https://www.strava.com/oauth/deauthorize?access_token=${j.accessToken}`,{method:"POST"}),yield U.default.removeItem("strava_credentials")}));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){k(!0);var e=function(){var e=(0,n.default)((function*(){return yield U.default.getItem("strava_credentials")}));return function(){return e.apply(this,arguments)}}(),t=JSON.parse(yield e());if(null!==(yield t)){if(!v.TokenResponse.isTokenFresh(t)){var a=yield(0,v.refreshAsync)({clientId:"80072",refreshToken:t.refreshToken},Z);return b(a),yield U.default.setItem("strava_credentials",JSON.stringify(a)),r(!0),void k(!1)}return b(t),r(!0),void k(!1)}r(!1),k(!1)}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){var e=function(){var e=(0,n.default)((function*(){k(!0),$(!0);var e=new URLSearchParams(window.location.search),t={};for(var a of e){var n=(0,i.default)(a,2),l=n[0],s=n[1];t[l]=s}var o=location.href.split("?")[0];window.history.pushState("object",document.title,o),void 0!==t.code&&void 0!==t.scope&&void 0!==t.state?"read,activity:read_all"===t.scope||"activity:read_all,read"===t.scope?(0,v.exchangeCodeAsync)({clientId:"80072",redirectUri:(0,v.makeRedirectUri)({scheme:"fastestx",path:"FastestX"}),code:t.code},Z).then((function(e){b(e),U.default.setItem("strava_credentials",JSON.stringify(e)),k(!1),I(""),r(!0)})).catch((function(){I("rate_limit"),k(!1),r(!1)})):(I("wrong_scope"),k(!1),r(!1)):void 0!==t.error?(I("wrong_scope"),k(!1),r(!1)):(I(""),k(!1),r(!1))}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){"success"===(null==B?void 0:B.type)?"read,activity:read_all"===(null==B?void 0:B.params.scope)||"activity:read_all,read"===(null==B?void 0:B.params.scope)?(I(""),A()):(I("wrong_scope"),k(!1)):"error"===(null==B?void 0:B.type)?(I("wrong_scope"),k(!1)):null===F||P||(I(""),k(!1))}),[B]),(0,l.useEffect)((function(){console.log({Platform:d.default,loggedIn:a,credentials:j,loading:S,errorState:C,request:F,response:B})})),"android"===d.default.OS&&c.default.setLayoutAnimationEnabledExperimental(!0),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(p.default,{backgroundColor:"#fc5200"}),(0,T.jsx)(h.SafeAreaProvider,{children:(0,T.jsxs)(m.SafeAreaView,{style:{flex:1},children:[(0,T.jsx)(o.default,{style:[G.topBar,{flexDirection:"row",justifyContent:"center"}],children:(0,T.jsxs)(o.default,{style:{alignItems:"center",flexDirection:"row",width:"100%",maxWidth:700,justifyContent:"space-between"},children:[(0,T.jsx)(s.default,{style:G.title,children:"FastestX"}),!(a&&!C)&&(0,T.jsx)(u.default,{onPress:function(){M.openURL("https://github.com/LeoHalb/FastestX")},style:{marginRight:16,justifyContent:"center"},children:(0,T.jsx)(W.default,{name:"questioncircleo",size:24,color:"black"})}),a&&!C&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(g.Image,{style:{height:43,width:104},contentFit:"contain",source:X}),(0,T.jsx)(u.default,{onPress:function(){M.openURL("https://github.com/LeoHalb/FastestX")},style:{marginRight:16,justifyContent:"center"},children:(0,T.jsx)(W.default,{name:"questioncircleo",size:24,color:"black"})}),(0,T.jsx)(u.default,{onPress:function(){K()},style:{marginRight:16,justifyContent:"center"},children:(0,T.jsx)(W.default,{name:"logout",size:24,color:"black"})})]})]})}),S?(0,T.jsxs)(o.default,{style:{marginTop:16,justifyContent:"space-between",flex:1},children:[(0,T.jsx)(f.default,{size:"large",color:"black"}),(0,T.jsx)(g.Image,{style:{width:"100%",height:63,marginTop:16},contentFit:"contain",source:q})]}):a&&!C?(0,T.jsx)(D,{credentials:j}):(0,T.jsxs)(o.default,{style:{flex:1,justifyContent:"space-between",alignSelf:"stretch",justifySelf:"stretch"},children:[(0,T.jsxs)(o.default,{children:["wrong_scope"===C?(0,T.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center"},children:"FastestX needs the permission to read all of your activities' data to work."}):(0,T.jsx)(T.Fragment,{}),"rate_limit"===C?(0,T.jsx)(s.default,{style:{width:"90%",marginLeft:"5%",marginTop:16,color:"red",textAlign:"center"},children:"FastestX reached it's usage limit. It will work again tomorrow."}):(0,T.jsx)(T.Fragment,{}),(0,T.jsx)(u.default,{style:{marginTop:16},onPress:function(){k(!0),V()},children:(0,T.jsx)(g.Image,{style:{height:48},contentFit:"contain",source:H})}),(0,T.jsx)(o.default,{style:{marginTop:16},children:(0,T.jsx)(s.default,{style:{textAlign:"center"},children:"Log in to see your activities"})}),(0,T.jsx)(g.Image,{style:{height:500,marginTop:16},contentFit:"contain",source:J})]}),(!a||C)&&(0,T.jsx)(g.Image,{style:{width:"100%",height:63},contentFit:"contain",source:q})]})]})})]})}var G=r.default.create({container:{display:"flex"},topBar:{height:43,backgroundColor:"#fc5200"},title:{paddingLeft:16,fontSize:32},item:{marginHorizontal:16,marginTop:16,backgroundColor:"#fc5200",borderRadius:20,padding:16,elevation:2,boxShadowColor:"#000",boxShadowOffset:{width:0,height:2},boxShadowOpacity:.25,boxShadowRadius:4},input:{backgroundColor:"white",width:100,fontSize:24,textAlign:"center",borderRadius:10}})},6787:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_light.761875a979df9ddcff63.svg"},4056:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/api_logo_pwrdBy_strava_stack_white.a3a1cb97b4c52945cd53.svg"},2858:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/btn_strava_connectwith_orange.d61a51baedcfa2ed1280.svg"},8082:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/demo.9c9a14b6fe0c3bd5f6ff.png"},2634:()=>{}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=e,(()=>{var e=[];a.O=(t,n,i,l)=>{if(!n){var r=1/0;for(c=0;c<e.length;c++){for(var[n,i,l]=e[c],s=!0,o=0;o<n.length;o++)(!1&l||r>=l)&&Object.keys(a.O).every((e=>a.O[e](n[o])))?n.splice(o--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,i,l]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/FastestX/",(()=>{var e={792:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,l,[r,s,o]=n,d=0;if(r.some((t=>0!==e[t]))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(o)var c=o(a)}for(t&&t(n);d<r.length;d++)l=r[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[759],(()=>a(605)));var n=a.O(void 0,[759],(()=>a(5036)));n=a.O(n)})();
//# sourceMappingURL=main.fd375c3f.js.map