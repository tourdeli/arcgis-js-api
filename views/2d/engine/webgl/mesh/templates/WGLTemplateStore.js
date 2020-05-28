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

define(["require","exports","../../../../../../core/tsSupport/awaiterHelper","../../../../../../core/tsSupport/generatorHelper","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/promiseUtils","../../../../../../symbols/support/defaults","./WGLDynamicLineTemplate","./WGLDynamicMarkerTemplate","./WGLDynamicTextTemplate","./WGLFillTemplate","./WGLLineTemplate","./WGLMarkerTemplate","./WGLTextTemplate","../../util/Lock","../../util/Result","../../../../layers/features/textUtils"],(function(e,t,r,i,o,n,s,a,c,u,l,h,p,m,f,_,d,y){Object.defineProperty(t,"__esModule",{value:!0});var T=n.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),v=new Array;function M(e,t){var r=e.length;return e.push(null),t.then((function(t){return e[r]=t})),e}function I(e){return!!(1&e)}t.isDynamicId=I;var b=function(){function e(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new _.default,this._fetchResource=e,this._joinOnUTurn=t}return Object.defineProperty(e.prototype,"_markerError",{get:function(){return this._errorTemplates.marker[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_fillError",{get:function(){return this._errorTemplates.fill[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_lineError",{get:function(){return this._errorTemplates.line[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_textError",{get:function(){return this._errorTemplates.line[0]},enumerable:!0,configurable:!0}),e.prototype.createTemplateGroup=function(e,t,r){this._initErrorTemplates();var i=e.hash();if(this._symbolToTemplate.has(i)&&"expanded-cim"!==e.type)return this._symbolToTemplate.get(i);var o=new Array;t&&this._createMeshTemplates(o,t,r,!0),this._createMeshTemplates(o,e,r,!1);var n=this._createGroupId("expanded-cim"===e.type);return this._idToTemplateGroup.set(n,o),this._symbolToTemplate.set(i,n),n},e.prototype.getTemplateGroup=function(e){return this._idToTemplateGroup.has(e)?this._idToTemplateGroup.get(e):v},e.prototype.getDynamicTemplateGroup=function(e){return this._idToTemplateGroup.has(e)?(I(e)||T.error("mapview-template-store","Id "+e+" does not refer to a dynamic template"),this._idToTemplateGroup.get(e)):v},e.prototype.getMosaicItem=function(e,t,r){var i=this,o=this._createTemplateId(),n=s.create((function(e){return i._idToResolver.set(o,e)})),a=t?e.toJSON():e;return this._fetchQueue.push({symbol:a,id:o,glyphIds:r}),n},e.prototype.finalize=function(e){return this._fetchQueue.length||this._lock.isHeld()?_.withLock(this._lock,this._fetchAllQueuedResources.bind(this),e):s.resolve()},e.prototype._initErrorTemplates=function(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],a.errorPolygonSymbol2D,null,!1),marker:this._createMeshTemplates([],a.errorPointSymbol2D,null,!1),line:this._createMeshTemplates([],a.errorPolylineSymbol2D,null,!1)})},e.prototype._fetchAllQueuedResources=function(e){var t=this;if(!this._fetchQueue.length)return s.resolve();var r=this._fetchQueue,i=this._cimAnalyses;return this._fetchQueue=[],this._cimAnalyses=[],s.all(i).then((function(){return t._fetchResource(r,e).then((function(e){for(var r=0,i=e;r<i.length;r++){var o=i[r],n=o.id,s=o.mosaicItem;t._idToResolver.get(n)(s),t._idToResolver.delete(n)}}))})).catch((function(e){s.isAbortError(e)?t._fetchQueue=t._fetchQueue.concat(r):T.error(new o("mapview-template-store","Unable to fetch requested texture resources",e))}))},e.prototype._createGroupId=function(e){return this._idCounter++<<1|(e?1:0)},e.prototype._createTemplateId=function(){return this._templateIdCounter++},e.prototype._createSMS=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return[4,this.getMosaicItem(e,!0)];case 1:return r=i.sent().spriteMosaicItem,d.ok(r,T)?[2,m.default.fromSimpleMarker(t,e,r)]:[2,this._markerError]}}))}))},e.prototype._createPMS=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return[4,this.getMosaicItem(e,!0)];case 1:return r=i.sent().spriteMosaicItem,d.ok(r,T)?[2,m.default.fromPictureMarker(t,e,r)]:[2,this._markerError]}}))}))},e.prototype._createSFS=function(e,t,o){return r(this,void 0,void 0,(function(){var r,n;return i(this,(function(i){switch(i.label){case 0:return[4,this.getMosaicItem(e,!0)];case 1:return r=i.sent().spriteMosaicItem,n=e,d.ok(r,T)?[2,h.default.fromSimpleFill(t,n,r,o)]:[2,this._fillError]}}))}))},e.prototype._createPFS=function(e,t,o){return r(this,void 0,void 0,(function(){var r,n;return i(this,(function(i){switch(i.label){case 0:return[4,this.getMosaicItem(e,!0)];case 1:return r=i.sent().spriteMosaicItem,n=e,d.ok(r,T)?[2,h.default.fromPictureFill(t,n,r,o)]:[2,this._fillError]}}))}))},e.prototype._createSLS=function(e,t,o){return r(this,void 0,void 0,(function(){var r,n;return i(this,(function(i){switch(i.label){case 0:return[4,this.getMosaicItem(e,!0)];case 1:return r=i.sent().spriteMosaicItem,n=e,d.ok(r,T)?[2,p.default.fromSimpleLine(t,o,n,r,this._joinOnUTurn)]:[2,this._lineError]}}))}))},e.prototype._createTS=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return[4,this.getMosaicItem(e,!0)];case 1:return r=i.sent().glyphMosaicItems,[2,f.default.fromText(t,e,r)]}}))}))},e.prototype._createCIMText=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return"function"==typeof e.materialHash?[2,s.resolve(l.default.fromCIMText(t,e))]:[4,this.getMosaicItem(e.cim,!1,y.codepoints(e.text))];case 1:return r=i.sent().glyphMosaicItems,e.cim.mosaicHash=e.materialHash,d.ok(r,T)?[2,f.default.fromCIMText(t,e,r)]:[2,this._textError]}}))}))},e.prototype._createCIMFill=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return e.materialHash,e.cim.mosaicHash=e.materialHash,[4,this.getMosaicItem(e.cim,!1)];case 1:return r=i.sent().spriteMosaicItem,d.ok(r,T)?[2,h.default.fromCIMFill(t,e,r,!1)]:[2,this._fillError]}}))}))},e.prototype._createCIMLine=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return"function"==typeof e.materialHash?[2,s.resolve(c.default.fromCIMLine(t,e))]:(e.cim.mosaicHash=e.materialHash,[4,this.getMosaicItem(e.cim,!1)]);case 1:return r=i.sent().spriteMosaicItem,d.ok(r,T)?[2,p.default.fromCIMLine(t,e,r,!1,this._joinOnUTurn)]:[2,this._lineError]}}))}))},e.prototype._createCIMMarker=function(e,t){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return"function"==typeof e.materialHash?[2,s.resolve(u.default.fromCIMMarker(t,e))]:(e.cim.mosaicHash=e.materialHash,[4,this.getMosaicItem(e.cim,!1)]);case 1:return r=i.sent().spriteMosaicItem,d.ok(r,T)?[2,m.default.fromCIMMarker(t,e,r)]:[2,this._markerError]}}))}))},e.prototype._createCIM=function(e,t){return r(this,void 0,void 0,(function(){var r,o,n=this;return i(this,(function(i){if(r=e.templateHash,this._cimTemplateCache.has(r))return[2,this._cimTemplateCache.get(r)];switch(e.type){case"marker":o=this._createCIMMarker(e,t);break;case"line":o=this._createCIMLine(e,t);break;case"fill":o=this._createCIMFill(e,t);break;case"text":o=this._createCIMText(e,t)}return o.then((function(e){return n._cimTemplateCache.set(r,e)})),[2,o]}))}))},e.prototype._createMeshTemplates=function(e,t,r,i){if(-1!==t.type.indexOf("3d"))return T.error("3D symbols are not supported with MapView"),e;switch(t.type){case"cim":return T.error(new o("mapview-bad-type","Found a cim type not yet expanded")),e;case"expanded-cim":for(var n=0,s=t.layers;n<s.length;n++){var a=s[n];M(e,this._createCIM(a,r))}return e;case"simple-marker":return M(e,this._createSMS(t,r));case"picture-marker":return M(e,this._createPMS(t,r));case"simple-fill":var c=t;return M(e,this._createSFS(c,r,i)),c.outline&&M(e,this._createSLS(c.outline,r,!0)),e;case"picture-fill":var u=t;return M(e,this._createPFS(u,r,i)),u.outline&&M(e,this._createSLS(u.outline,r,!0)),e;case"simple-line":return M(e,this._createSLS(t,r,!1));case"text":return M(e,this._createTS(t,r));default:return T.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}},e}();t.WGLTemplateStore=b}));