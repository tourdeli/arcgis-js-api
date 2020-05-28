// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../Color","../../core/Logger","../../core/promiseUtils","../../core/string","../../support/arcadeOnDemand","./CIMSymbolHelper","./enums","./SDFHelper","../../views/2d/arcade/utils"],(function(e,t,r,n,i,o,a,s,l,c,u,f,m,h){Object.defineProperty(t,"__esModule",{value:!0});var p=a.getLogger("esri.symbols.cim.cimAnalyzer"),y=["size","rotation","offsetX","offsetY","color","outlineColor","outlineWidth"],d=["materialHash","rotation","offsetX","offsetY"];function v(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function g(e){switch(e){case"Butt":return f.CapType.BUTT;case"Square":return f.CapType.SQUARE;case"Round":default:return f.CapType.ROUND}}function S(e){switch(e){case"Bevel":return f.JoinType.BEVEL;case"Miter":return f.JoinType.MITER;case"Round":default:return f.JoinType.ROUND}}function b(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function C(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function O(e,t,i,o,a,s){return n(this,void 0,void 0,(function(){var n,l,c,m,h,y;return r(this,(function(r){switch(r.label){case 0:if(!e)return[2];if(!(n=e.symbolLayers))return[2];c=u.CIMSymbolHelper.getSize(e),"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(l=f.Alignment.MAP),m=n.length,r.label=1;case 1:if(!m--)return[3,23];if(!(h=n[m])||!1===h.enable)return[3,1];switch(y=[],u.OverrideHelper.findApplicableOverrides(h,t,y),h.type){case"CIMSolidFill":return[3,2];case"CIMPictureFill":return[3,4];case"CIMHatchFill":return[3,6];case"CIMGradientFill":return[3,8];case"CIMSolidStroke":return[3,10];case"CIMPictureStroke":return[3,12];case"CIMGradientStroke":return[3,14];case"CIMCharacterMarker":return[3,16];case"CIMPictureMarker":return[3,17];case"CIMVectorMarker":return[3,19]}return[3,21];case 2:return[4,H(h,y,o,a)];case 3:return r.sent(),[3,22];case 4:return[4,N(h,y,o,a)];case 5:return r.sent(),[3,22];case 6:return[4,w(h,y,o,a)];case 7:return r.sent(),[3,22];case 8:return[4,M(h,y,o,a)];case 9:return r.sent(),[3,22];case 10:return[4,k(h,y,o,a,"CIMPolygonSymbol"===e.type,c)];case 11:return r.sent(),[3,22];case 12:return[4,I(h,y,o,a,"CIMPolygonSymbol"===e.type,c)];case 13:return r.sent(),[3,22];case 14:return[4,L(h,y,o,a,"CIMPolygonSymbol"===e.type,c)];case 15:return r.sent(),[3,22];case 16:return[3,22];case 17:return[4,P(h,y,o,a,l,c)];case 18:return r.sent(),[3,22];case 19:return[4,x(h,y,i,o,a,l,c,s)];case 20:return r.sent(),[3,22];case 21:p.error("Cannot analyze CIM layer",h.type),r.label=22;case 22:return[3,1];case 23:return[2]}}))}))}function H(e,t,i,o){return n(this,void 0,void 0,(function(){var n,a,s,c,u,f;return r(this,(function(r){switch(r.label){case 0:return n=e.primitiveName,a=v(e.color),s=l.numericHash(JSON.stringify(e)).toString(),u=(c=o).push,f={type:"fill",templateHash:s,materialHash:0===t.length?s:function(){return s},cim:e,materialOverrides:null,colorLocked:e.colorLocked},[4,A(n,"Color",t,i,a,Y)];case 1:return u.apply(c,[(f.color=r.sent(),f.height=0,f.angle=0,f.offsetX=0,f.offsetY=0,f.scaleX=1,f)]),[2]}}))}))}function N(e,t,i,o){return n(this,void 0,void 0,(function(){var n,a,s,c,u,f,m;return r(this,(function(r){switch(r.label){case 0:return n=e.primitiveName,a=v(e.tintColor),s=l.numericHash(JSON.stringify(e)).toString(),c=l.numericHash(""+e.url+JSON.stringify(e.colorSubstitutions)).toString(),f=(u=o).push,m={type:"fill",templateHash:s,materialHash:0===t.length?c:function(){return c},cim:e,materialOverrides:null,colorLocked:e.colorLocked},[4,A(n,"TintColor",t,i,a,Y)];case 1:return m.color=r.sent(),[4,A(n,"Height",t,i,e.height)];case 2:return m.height=r.sent(),[4,A(n,"ScaleX",t,i,e.scaleX)];case 3:return m.scaleX=r.sent(),[4,A(n,"Rotation",t,i,e.rotation)];case 4:return m.angle=r.sent(),[4,A(n,"OffsetX",t,i,e.offsetX)];case 5:return m.offsetX=r.sent(),[4,A(n,"OffsetY",t,i,e.offsetY)];case 6:return f.apply(u,[(m.offsetY=r.sent(),m)]),[2]}}))}))}function w(e,t,i,o){return n(this,void 0,void 0,(function(){var n,a,s,c,u,f,m,h;return r(this,(function(r){switch(r.label){case 0:return n=["Rotation","OffsetX","OffsetY"],a=t.filter((function(t){return t.primitiveName!==e.primitiveName&&-1===n.indexOf(t.propertyName)})),s=e.primitiveName,c=l.numericHash(JSON.stringify(e)).toString(),f=(u=o).push,m={type:"fill",templateHash:c},0!==t.length?[3,1]:(h=c,[3,3]);case 1:return[4,W(c,a,i)];case 2:h=r.sent(),r.label=3;case 3:return m.materialHash=h,m.cim=e,m.materialOverrides=a,m.colorLocked=e.colorLocked,m.color={r:128,g:128,b:128,a:1},m.height=0,m.scaleX=1,[4,A(s,"Rotation",t,i,e.rotation)];case 4:return m.angle=r.sent(),[4,A(s,"OffsetX",t,i,e.offsetX)];case 5:return m.offsetX=r.sent(),[4,A(s,"OffsetY",t,i,e.offsetY)];case 6:return f.apply(u,[(m.offsetY=r.sent(),m)]),[2]}}))}))}function M(e,t,i,o){return n(this,void 0,void 0,(function(){var n,a,s,c,u;return r(this,(function(r){switch(r.label){case 0:return n=l.numericHash(JSON.stringify(e)).toString(),s=(a=o).push,c={type:"fill",templateHash:n},0!==t.length?[3,1]:(u=n,[3,3]);case 1:return[4,W(n,t,i)];case 2:u=r.sent(),r.label=3;case 3:return s.apply(a,[(c.materialHash=u,c.cim=e,c.materialOverrides=null,c.colorLocked=e.colorLocked,c.color={r:128,g:128,b:128,a:1},c.height=0,c.angle=0,c.offsetX=0,c.offsetY=0,c.scaleX=1,c)]),[2]}}))}))}function k(e,t,i,o,a,s){return n(this,void 0,void 0,(function(){var n,c,u,f,m,h,p,y,d,b;return r(this,(function(r){switch(r.label){case 0:return n=l.numericHash(JSON.stringify(e)).toString(),c=e.primitiveName,u=v(e.color),f=void 0!==e.width?e.width:4,m=g(e.capStyle),h=S(e.joinStyle),p=e.miterLimit,d=(y=o).push,b={type:"line",templateHash:n,materialHash:0===t.length?n:function(){return n},cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked},[4,A(c,"Color",t,i,u,Y)];case 1:return b.color=r.sent(),[4,A(c,"Width",t,i,f)];case 2:return b.width=r.sent(),[4,A(c,"CapStyle",t,i,m)];case 3:return b.cap=r.sent(),[4,A(c,"JoinStyle",t,i,h)];case 4:return b.join=r.sent(),[4,A(c,"MiterLimit",t,i,p)];case 5:return d.apply(y,[(b.miterLimit=r.sent(),b.referenceWidth=s,b.zOrder=R(e.name),b.isDashed=!1,b)]),[2]}}))}))}function I(e,t,i,o,a,s){return n(this,void 0,void 0,(function(){var n,c,u,f,m,h,p,y,d,b,C;return r(this,(function(r){switch(r.label){case 0:return n=l.numericHash(""+e.url+JSON.stringify(e.colorSubstitutions)).toString(),c=e.primitiveName,u=v(e.tintColor),f=void 0!==e.width?e.width:4,m=g(e.capStyle),h=S(e.joinStyle),p=e.miterLimit,y=l.numericHash(JSON.stringify(e)).toString(),b=(d=o).push,C={type:"line",templateHash:y,materialHash:0===t.length?n:function(){return n},cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked},[4,A(c,"TintColor",t,i,u,Y)];case 1:return C.color=r.sent(),[4,A(c,"Width",t,i,f)];case 2:return C.width=r.sent(),[4,A(c,"CapStyle",t,i,m)];case 3:return C.cap=r.sent(),[4,A(c,"JoinStyle",t,i,h)];case 4:return C.join=r.sent(),[4,A(c,"MiterLimit",t,i,p)];case 5:return b.apply(d,[(C.miterLimit=r.sent(),C.referenceWidth=s,C.zOrder=R(e.name),C.isDashed=!1,C)]),[2]}}))}))}function L(e,t,i,o,a,s){return n(this,void 0,void 0,(function(){var n,c,u,f,m,h,p,y,d,v;return r(this,(function(r){switch(r.label){case 0:return n=e.primitiveName,c=void 0!==e.width?e.width:4,u=g(e.capStyle),f=S(e.joinStyle),m=e.miterLimit,h=l.numericHash(JSON.stringify(e)).toString(),y=(p=o).push,d={type:"line",templateHash:h},0!==t.length?[3,1]:(v=h,[3,3]);case 1:return[4,W(h,t,i)];case 2:v=r.sent(),r.label=3;case 3:return d.materialHash=v,d.cim=e,d.materialOverrides=null,d.isOutline=a,d.colorLocked=e.colorLocked,d.color={r:128,g:128,b:128,a:1},[4,A(n,"Width",t,i,c)];case 4:return d.width=r.sent(),[4,A(n,"CapStyle",t,i,u)];case 5:return d.cap=r.sent(),[4,A(n,"JoinStyle",t,i,f)];case 6:return d.join=r.sent(),[4,A(n,"MiterLimit",t,i,m)];case 7:return y.apply(p,[(d.miterLimit=r.sent(),d.referenceWidth=s,d.zOrder=R(e.name),d.isDashed=!1,d)]),[2]}}))}))}function P(e,t,i,o,a,s){return n(this,void 0,void 0,(function(){var n,c,u,f,m,h,p,y,d,g,S,b,C,O,H,N;return r(this,(function(r){switch(r.label){case 0:for(n=e.primitiveName,c=e.size,u=e.scaleX,f=e.rotation,m=e.offsetX,h=e.offsetY,p=v(e.tintColor),y=l.numericHash(""+e.url+JSON.stringify(e.colorSubstitutions)).toString(),d=!1,g="",S=0,b=t;S<b.length;S++)(C=b[S]).primitiveName===n&&(void 0!==C.value?g+="|"+C.primitiveName+"|"+C.propertyName+"|"+JSON.stringify(C.value):C.valueExpressionInfo&&(d=!0));return H=(O=o).push,N={type:"marker",templateHash:l.numericHash(JSON.stringify(e)+g).toString(),materialHash:d?function(){return y}:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,scaleSymbolsProportionally:!1,alignment:a,anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits},[4,A(n,"Size",t,i,c)];case 1:return N.size=r.sent(),[4,A(n,"ScaleX",t,i,u)];case 2:return N.scaleX=r.sent(),[4,A(n,"Rotation",t,i,f)];case 3:return N.rotation=r.sent(),[4,A(n,"OffsetX",t,i,m)];case 4:return N.offsetX=r.sent(),[4,A(n,"OffsetY",t,i,h)];case 5:return N.offsetY=r.sent(),[4,A(n,"TintColor",t,i,p,Y)];case 6:return H.apply(O,[(N.color=r.sent(),N.outlineColor={r:0,g:0,b:0,a:0},N.outlineWidth=0,N.frameHeight=0,N.rotateClockwise=e.rotateClockwise,N.referenceSize=s,N.sizeRatio=1,N)]),[2]}}))}))}function x(e,t,i,o,a,l,c,u){return n(this,void 0,void 0,(function(){var n,f,m,h,p,y,d,v;return r(this,(function(r){switch(r.label){case 0:if(!(n=e.markerGraphics))return[2];for(f=0,e.scaleSymbolsProportionally&&(m=e.frame)&&(f=m.ymax-m.ymin),h=[],p=0,y=n;p<y.length;p++)if(d=y[p]){if(!(v=d.symbol))continue;switch(v.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":h.push(z(e,d,t,o,a,l,c,f,u));break;case"CIMTextSymbol":h.push(X(e,d,t,i,o,a,l,c,f))}}return[4,s.all(h)];case 1:return r.sent(),[2]}}))}))}function X(e,t,o,a,s,c,f,m,h){return n(this,void 0,void 0,(function(){var n,p,y,d,g,S,O,H,N,w,M,k,I,L,P,x,X,z,J,R,Y,T,W,E;return r(this,(function(r){switch(r.label){case 0:if(n=[],u.OverrideHelper.findApplicableOverrides(t,o,n),!("x"in(p=t.geometry)&&"y"in p))return[2];for(y=t.symbol,d=(D=y).underline?"underline":D.strikethrough?"line-through":"none",g=function(e){var t="normal",r="normal";if(e){var n=e.toLowerCase();-1!==n.indexOf("italic")?t="italic":-1!==n.indexOf("oblique")&&(t="oblique"),-1!==n.indexOf("bold")?r="bold":-1!==n.indexOf("light")&&(r="lighter")}return{style:t,weight:r}}(y.fontStyleName),y.font=i({family:y.fontFamilyName,decoration:d},g),S=e.frame,O=p.x-.5*(S.xmin+S.xmax),H=p.y-.5*(S.ymin+S.ymax),N=e.size/h,w=e.primitiveName,M=(y.height||0)*N,k=y.angle||0,I=((y.offsetX||0)+O)*N,L=((y.offsetY||0)+H)*N,P=v(u.CIMSymbolHelper.getFillColor(y)),x=v(u.CIMSymbolHelper.getStrokeColor(y)),(X=u.CIMSymbolHelper.getStrokeWidth(y))||(x=v(u.CIMSymbolHelper.getFillColor(y.haloSymbol)),X=y.haloSize*N),z="",J=0,R=o;J<R.length;J++)(Y=R[J]).primitiveName===w&&void 0!==Y.value&&(z+="|"+Y.primitiveName+"|"+Y.propertyName+"|"+JSON.stringify(Y.value));return W=(T=c).push,E={type:"text",templateHash:l.numericHash(JSON.stringify(t)+z).toString(),materialHash:function(){return l.numericHash(JSON.stringify(y.font)).toString()},cim:y,materialOverrides:null,colorLocked:e.colorLocked,alignment:f,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:y.fontFamilyName,decoration:"none",weight:"normal",style:"normal"},[4,A(w,"Height",o,s,M)];case 1:return E.size=r.sent(),[4,A(w,"Rotation",o,s,k)];case 2:return E.angle=r.sent(),[4,A(w,"OffsetX",o,s,I)];case 3:return E.offsetX=r.sent(),[4,A(w,"OffsetY",o,s,L)];case 4:return W.apply(T,[(E.offsetY=r.sent(),E.horizontalAlignment=b(y.horizontalAlignment),E.verticalAlignment=C(y.verticalAlignment),E.text=F(a,t.textString,y.textCase),E.color=P,E.outlineColor=x,E.outlineSize=X,E.referenceSize=m,E.sizeRatio=1,E)]),[2]}var D}))}))}function z(e,t,i,o,a,c,f,h,p){return n(this,void 0,void 0,(function(){var n,d,g,S,b,C;return r(this,(function(O){switch(O.label){case 0:if(n=t.symbol,!(d=t.geometry))return[2];if(g=m.getExtent(d),"CIMTextSymbol"===n.type)return[2];if(!(S=n.symbolLayers))return[2];b=S.length,C=function(){var n,C,O,H,N,w,M,k,I,L,P,x,X,z,R,T,F,W,E,D,U,j,B,q,G,_;return r(this,(function(r){switch(r.label){case 0:return(n=S[b])&&!1!==n.enable?p?[4,J(e,t,i,o,a,c,f,h)]:[3,2]:[2,"continue"];case 1:return r.sent(),[2,"continue"];case 2:switch(n.type){case"CIMSolidFill":case"CIMSolidStroke":return[3,3]}return[3,5];case 3:if(C=m.getSDFMetrics(g,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),O=C[0],H=C[1],N=C[2],w="CIMSolidFill"===n.type,M={type:"sdf",geom:d,asFill:w},k=e.primitiveName,I=e.size,L=e.rotation,P=e.offsetX,x=e.offsetY,X=n.primitiveName,z=v(w?u.CIMSymbolHelper.getFillColor(n):u.CIMSymbolHelper.getStrokeColor(n)),R=w?{r:0,g:0,b:0,a:0}:v(u.CIMSymbolHelper.getStrokeColor(n)),T=u.CIMSymbolHelper.getStrokeWidth(n),!w&&!T)return[3,6];for(F=!1,W="",E=0,D=i;E<D.length;E++)(U=D[E]).primitiveName!==X&&U.primitiveName!==k||(void 0!==U.value?W+="|"+U.primitiveName+"|"+U.propertyName+"|"+JSON.stringify(U.value):U.valueExpressionInfo&&(F=!0));return j=l.numericHash(JSON.stringify(M)).toString(),B=l.numericHash(JSON.stringify(n)+JSON.stringify(t)+W).toString(),q={type:"marker",templateHash:B,materialHash:F?function(){return j}:j,cim:M,materialOverrides:null,colorLocked:e.colorLocked,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:H,y:N},isAbsoluteAnchorPoint:!1,size:null,scaleX:1,rotation:null,offsetX:null,offsetY:null,color:null,outlineColor:w?{r:0,g:0,b:0,a:0}:null,outlineWidth:w?0:null,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:O},G=[A(k,"Size",i,o,I),A(k,"Rotation",i,o,L),A(k,"OffsetX",i,o,P),A(k,"OffsetY",i,o,x),A(X,"Color",i,o,z,Y),A(X,"Color",i,o,R,Y),A(X,"Width",i,o,T)],[4,s.all(G)];case 4:return _=r.sent(),y.forEach((function(e,t){null===q[e]&&(q[e]=_[t])})),a.push(q),[3,6];case 5:return J(e,t,i,o,a,c,f,h),[3,6];case 6:return[2]}}))},O.label=1;case 1:return b--?[5,C()]:[3,3];case 2:return O.sent(),[3,1];case 3:return[2]}}))}))}function J(e,t,i,o,a,c,f,m){return n(this,void 0,void 0,(function(){var n,h,p,y,v,g,S,b,C,O,H,N,w,M,k;return r(this,(function(r){switch(r.label){case 0:return n=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}(e,t),[],p=["Rotation","OffsetX","OffsetY"],h=i.filter((function(t){return t.primitiveName!==e.primitiveName||-1===p.indexOf(t.propertyName)})),y=u.CIMSymbolHelper.getTextureAnchor(n),v=y[0],g=y[1],S=JSON.stringify(n),b=e.primitiveName,C=e.rotation,O=e.offsetX,H=e.offsetY,N=l.numericHash(JSON.stringify(n)).toString(),w={type:"marker",templateHash:N,materialHash:0===h.length?N:null,cim:n,materialOverrides:h,colorLocked:e.colorLocked,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:c,anchorPoint:{x:v,y:g},isAbsoluteAnchorPoint:!1,size:e.size,scaleX:1,rotation:null,offsetX:null,offsetY:null,color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:m,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:1},M=[W(S,h,o),A(b,"Rotation",i,o,C),A(b,"OffsetX",i,o,O),A(b,"OffsetY",i,o,H)],[4,s.all(M)];case 1:return k=r.sent(),d.forEach((function(e,t){null===w[e]&&(w[e]=k[t])})),a.push(w),[2]}}))}))}function R(e){if(e&&0===e.indexOf("Level_")){var t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function Y(e){if(!e||0===e.length)return null;var t=new o(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function A(e,t,i,o,a,s){return n(this,void 0,void 0,(function(){var n,l,u,f,m;return r(this,(function(p){switch(p.label){case 0:if(!e)return[3,4];n=function(n){var i,l,u;return r(this,(function(r){switch(r.label){case 0:return n.primitiveName!==e||n.propertyName!==t?[3,2]:void 0!==n.value?[2,{value:s?s(n.value):n.value}]:(i=n.valueExpressionInfo)?(l=i.expression,[4,c.createRendererExpression(l,o.spatialReference,o.fields)]):[3,2];case 1:return u=r.sent(),[2,{value:function(e,t,r){var n=h.callWithFeature(u,e,{$view:r},o.geometryType,t);return null!==n&&s&&(n=s(n)),null!==n?n:a}}];case 2:return[2]}}))},l=0,u=i,p.label=1;case 1:return l<u.length?(f=u[l],[5,n(f)]):[3,4];case 2:if("object"==typeof(m=p.sent()))return[2,m.value];p.label=3;case 3:return l++,[3,1];case 4:return[2,a]}}))}))}function T(e,t){switch(t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function F(e,t,r){if(!e||-1===t.indexOf("["))return T(t,r);var n=function(e){for(var t=e.length;t--;)if(-1===" /-,\n".indexOf(e.charAt(t)))return!1;return!0},i=[],o=0,a=-1;do{if((a=t.indexOf("[",o))>=o){if(a>o){var s=t.substr(o,a-o);i.push([s,null,n(s)])}if(o=a+1,(a=t.indexOf("]",o))>=o){if(a>o){var l=e[t.substr(o,a-o)];l&&i.push([null,l,!1])}o=a+1}}}while(-1!==a);if(o<t.length-1){s=t.substr(o);i.push([s,null,n(s)])}return function(e){for(var t="",n=null,o=0,a=i;o<a.length;o++){var s=a[o],l=s[0],c=s[1],u=s[2];if(l)u?n=l:(n&&(t+=n,n=null),t+=l);else{var f=e.attributes[c];f&&(n&&(t+=n,n=null),t+=f)}}return T(t,r)}}function W(e,t,i){return n(this,void 0,void 0,(function(){var n,o,a,s;return r(this,(function(f){switch(f.label){case 0:n=function(e){var t,n,o;return r(this,(function(r){switch(r.label){case 0:return(t=e.valueExpressionInfo)?(n=t.expression,[4,c.createRendererExpression(n,i.spatialReference,i.fields)]):[3,2];case 1:o=r.sent(),e.fn=function(e,t,r){return h.callWithFeature(o,e,{$view:r},i.geometryType,t)},r.label=2;case 2:return[2]}}))},o=0,a=t,f.label=1;case 1:return o<a.length?(s=a[o],[5,n(s)]):[3,4];case 2:f.sent(),f.label=3;case 3:return o++,[3,1];case 4:return[2,function(r,n,i){for(var o=0,a=t;o<a.length;o++){var s=a[o];s.fn&&(s.value=s.fn(r,n,i))}return l.numericHash(e+u.OverrideHelper.buildOverrideKey(t)).toString()}]}}))}))}t.analyzeCIMSymbol=function(e,t,i,o,a){return n(this,void 0,void 0,(function(){var n,s,l;return r(this,(function(r){switch(r.label){case 0:if(n=o||[],!e)return[2,n];switch("CIMSymbolReference"===e.type?(s=e.symbol,l=e.primitiveOverrides):(s=e,l=null),s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":return[3,1];case"CIMTextSymbol":return[3,3]}return[3,4];case 1:return[4,O(s,l,t,i,n,a)];case 2:return r.sent(),[3,4];case 3:return[3,4];case 4:return[2,n]}}))}))},t.analyzeCIMResource=function(e,t){if(!t||0===t.length)return e;var r=JSON.parse(JSON.stringify(e));return u.OverrideHelper.applyOverrides(r,t),r}}));