// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../layers/support/LOD"],function(e,t,o,r,i,a,s){var n=c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._lodByScale={},t._scales=[],t.effectiveLODs=null,t.effectiveMinZoom=-1,t.effectiveMaxZoom=-1,t.effectiveMinScale=0,t.effectiveMaxScale=0,t.enabled=!0,t.lods=null,t.minZoom=-1,t.maxZoom=-1,t.minScale=0,t.maxScale=0,t.snapToZoom=!0,t}return o(t,e),t.prototype.initialize=function(){var e=this,t=this,o=t.lods,r=t.minScale,i=t.maxScale,a=t.minZoom,s=t.maxZoom,n=-1,c=-1,l=!1,f=!1;if(0!==r&&0!==i&&i>r&&(m=[i,r],r=m[0],i=m[1]),!o||!o.length)return this._set("effectiveMinScale",r),void this._set("effectiveMaxScale",i);o=o.map(function(e){return e.clone()}),o.sort(function(e,t){return t.scale-e.scale}),o.forEach(function(e,t){return e.level=t});for(var p,h=0,u=o;h<u.length;h++){var v=u[h];!l&&r>0&&r>=v.scale&&(n=v.level,l=!0),!f&&i>0&&i>=v.scale&&(c=p?p.level:-1,f=!0),p=v}-1===a&&(a=0===r?0:n),-1===s&&(s=0===i?o.length-1:c),a=Math.max(a,0),a=Math.min(a,o.length-1),s=Math.max(s,0),s=Math.min(s,o.length-1),a>s&&(y=[s,a],a=y[0],s=y[1]),r=o[a].scale,i=o[s].scale,o.splice(0,a),o.splice(s-a+1,o.length),o.forEach(function(t,o){e._lodByScale[t.scale]=t,e._scales[o]=t.scale}),this._set("effectiveLODs",o),this._set("effectiveMinZoom",a),this._set("effectiveMaxZoom",s),this._set("effectiveMinScale",r),this._set("effectiveMaxScale",i);var m,y},t.prototype.constrain=function(e,t){if(!this.enabled||t&&e.scale===t.scale)return e;var o=this.effectiveMinScale,r=this.effectiveMaxScale,i=e.targetGeometry,a=t&&t.targetGeometry,s=0!==r&&e.scale<r,n=0!==o&&e.scale>o;if(s||n){var c=n?o:r;if(a){var l=(c-t.scale)/(e.scale-t.scale);i.x=a.x+(i.x-a.x)*l,i.y=a.y+(i.y-a.y)*l}e.scale=c}return this.snapToZoom&&this.effectiveLODs&&(e.scale=this._getClosestScale(e.scale)),e},t.prototype.fit=function(e){if(!this.effectiveLODs)return this.constrain(e,null);var t=e.scale,o=Math.round(this.scaleToZoom(t)),r=Math.abs(o-Math.round(o));return r>.95?e.scale=this.snapToPreviousScale(t):e.scale=this.zoomToScale(Math.round(o)),e},t.prototype.zoomToScale=function(e){if(!this.effectiveLODs)return 0;e-=this.effectiveMinZoom,e=Math.max(0,e);var t=this._scales;if(0>=e)return t[0];if(e>=t.length)return t[t.length-1];var o=Math.round(e-.5),r=Math.round(e);return t[r]+(r-e)*(t[o]-t[r])},t.prototype.scaleToZoom=function(e){if(!this.effectiveLODs)return-1;var t,o,r=this._scales,i=0,a=r.length-1;for(i;a>i;i++){if(t=r[i],o=r[i+1],e>=t)return i+this.effectiveMinZoom;if(o===e)return i+1+this.effectiveMinZoom;if(t>e&&e>o)return i+1-(e-o)/(t-o)+this.effectiveMinZoom}return i},t.prototype.snapToClosestScale=function(e){if(!this.effectiveLODs)return e;var t=this.scaleToZoom(e);return this.zoomToScale(Math.round(t))},t.prototype.snapToNextScale=function(e,t){if(void 0===t&&(t=.5),!this.effectiveLODs)return e*t;var o=Math.round(this.scaleToZoom(e));return this.zoomToScale(o+1)},t.prototype.snapToPreviousScale=function(e,t){if(void 0===t&&(t=2),!this.effectiveLODs)return e*t;var o=Math.round(this.scaleToZoom(e));return this.zoomToScale(o-1)},t.prototype.clone=function(){return new c({enabled:this.enabled,lods:this.lods,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale})},t.prototype._getClosestScale=function(e){return this._lodByScale[e]?this._lodByScale[e].scale:(e=this._scales.reduce(function(t,o,r,i){return Math.abs(o-e)<=Math.abs(t-e)?o:t},this._scales[0]),this._lodByScale[e].scale)},t}(i.declared(a));r([i.property({readOnly:!0})],n.prototype,"effectiveLODs",void 0),r([i.property({readOnly:!0})],n.prototype,"effectiveMinZoom",void 0),r([i.property({readOnly:!0})],n.prototype,"effectiveMaxZoom",void 0),r([i.property({readOnly:!0})],n.prototype,"effectiveMinScale",void 0),r([i.property({readOnly:!0})],n.prototype,"effectiveMaxScale",void 0),r([i.property()],n.prototype,"enabled",void 0),r([i.property({type:[s]})],n.prototype,"lods",void 0),r([i.property()],n.prototype,"minZoom",void 0),r([i.property()],n.prototype,"maxZoom",void 0),r([i.property()],n.prototype,"minScale",void 0),r([i.property()],n.prototype,"maxScale",void 0),r([i.property()],n.prototype,"snapToZoom",void 0),n=c=r([i.subclass("esri.views.2d.constraints.ZoomConstraint")],n);var c;return n});