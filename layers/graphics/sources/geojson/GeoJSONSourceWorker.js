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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/awaiterHelper","../../../../request","../../../../core/Error","../../../../core/promiseUtils","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./geojson","../support/clientSideDefaults","../support/sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],(function(e,t,i,r,n,s,o,a,u,l,d,p,c,y,f,h,m,g,F,b){Object.defineProperty(t,"__esModule",{value:!0});var I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},v=function(){function e(){this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return n(this,void 0,void 0,(function(){var t,n,a,u,m,v,E,_,j,T,q,x,R,S,D,w,O,k,Q,A,G,P,C,Z,M,U;return i(this,(function(i){switch(i.label){case 0:return t=[],[4,this._checkProjection(e.spatialReference)];case 1:return i.sent(),n=null,e.url?[4,s(e.url,{responseType:"json"})]:[3,4];case 2:return a=i.sent(),n=a.data,[4,f.validateGeoJSON(n)];case 3:i.sent(),i.label=4;case 4:if(u=f.inferLayerProperties(n,{geometryType:e.geometryType}),m=e.fields||u.fields||[],v=null!=e.hasZ?e.hasZ:u.hasZ,E=u.geometryType,_=e.objectIdField||("number"===u.objectIdFieldType?u.objectIdFieldName:"OBJECTID")||"OBJECTID",j=e.spatialReference||l.WGS84,T=e.timeInfo,!E)throw new o("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");for("string"===u.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),m===u.fields&&u.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}}),_&&(q=null,m.some((function(e){return e.name===_&&(q=e,!0)}))?(q.type="esriFieldTypeOID",q.editable=!1,q.nullable=!1):m.unshift({alias:_,name:_,type:"esriFieldTypeOID",editable:!1,nullable:!1})),x=0,R=m;x<R.length;x++){if(null==(O=R[x]).name&&(O.name=O.alias),null==O.alias&&(O.alias=O.name),!O.name)throw new o("geojson-layer:invalid-field-name","field name is missing",{field:O});if(O.name===_&&(O.type="esriFieldTypeOID"),-1===F.kebabDict.jsonValues.indexOf(O.type))throw new o("geojson-layer:invalid-field-type",'invalid type for field "'+O.name+'"',{field:O})}for(S={},this._requiredFields=[],D=0,w=m;D<w.length;D++)"esriFieldTypeOID"!==(O=w[D]).type&&"esriFieldTypeGlobalID"!==O.type&&(O.editable=null==O.editable||!!O.editable,O.nullable=null==O.nullable||!!O.nullable,k=b.getFieldDefaultValue(O),O.nullable||void 0!==k?S[O.name]=k:this._requiredFields.push(O));if(this._fieldsIndex=new g(m),T&&(T.startTimeField&&((Q=this._fieldsIndex.get(T.startTimeField))?(T.startTimeField=Q.name,Q.type="esriFieldTypeDate"):T.startTimeField=null),T.endTimeField&&((A=this._fieldsIndex.get(T.endTimeField))?(T.endTimeField=A.name,A.type="esriFieldTypeDate"):T.endTimeField=null),T.trackIdField&&((G=this._fieldsIndex.get(T.trackIdField))?T.trackIdField=G.name:(T.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))),T.startTimeField||T.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:T}}),T=null)),P={warnings:t,featureErrors:[],layerDefinition:r({},I,{drawingInfo:h.createDrawingInfo(E),templates:h.createDefaultTemplate(S),extent:null,geometryType:E,objectIdField:_,fields:m,hasZ:!!v,timeInfo:T})},this._queryEngine=new y.default({fields:m,geometryType:E,hasM:!1,hasZ:v,objectIdField:_,spatialReference:j,timeInfo:T,featureStore:new p.default({geometryType:E,hasM:!1,hasZ:v})}),this._createDefaultAttributes=h.createDefaultAttributesFunction(S,_),this._nextObjectId=u.maxObjectId+1,C=f.createOptimizedFeatures(n,{geometryType:E,hasZ:v,objectIdFieldName:"number"===u.objectIdFieldType?_:null}),!l.equals(j,l.WGS84))for(Z=0,M=C;Z<M.length;Z++)(U=M[Z]).geometry&&(U.geometry=d.convertFromGeometry(c.project(d.convertToGeometry(U.geometry,E,v,!1),l.WGS84,j)));return this._loadInitialFeatures(P,C),[2,P]}}))}))},e.prototype.applyEdits=function(e){return n(this,void 0,void 0,(function(){var t,r,n;return i(this,(function(i){switch(i.label){case 0:return t=this._queryEngine,r=t.spatialReference,n=t.geometryType,[4,a.all([m.loadGeometryEngineForSimplify(n),c.checkProjectionSupport(e.adds,r),c.checkProjectionSupport(e.updates,r)])];case 1:return i.sent(),[2,this._applyEdits(e)]}}))}))},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,(function(){return i(this,(function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]}))}))},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,(function(){return i(this,(function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]}))}))},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,(function(){return i(this,(function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]}))}))},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,(function(){return i(this,(function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]}))}))},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,r=i.featureStore,n=i.objectIdField,s=[],o=0,a=t;o<a.length;o++){var u=a[o],l=this._createDefaultAttributes(),d=m.mixAttributes(this._fieldsIndex,this._requiredFields,l,u.attributes,!0,e.warnings);d?e.featureErrors.push(d):(this._assignObjectId(l,u.attributes,!0),u.attributes=l,u.objectId=l[n],s.push(u))}if(r.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var p=this._queryEngine.timeExtent,c=p.start,y=p.end;e.layerDefinition.timeInfo.timeExtent=[c,y]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var s=0,o=r;s<o.length;s++){var a=o[s];n.deleteResults.push(m.createFeatureEditSuccessResult(a))}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,o=r.hasZ,a=r.objectIdField,l=r.spatialReference,p=r.featureStore,y=[],f=0,h=t;f<h.length;f++){var g=h[f];if(g.geometry&&n!==u.getJsonType(g.geometry))i.push(m.createFeatureEditErrorResult("Incorrect geometry type."));else{var F=this._createDefaultAttributes(),b=m.mixAttributes(this._fieldsIndex,this._requiredFields,F,g.attributes);if(b)i.push(b);else{if(this._assignObjectId(F,g.attributes),g.attributes=F,null!=g.uid){var I=g.attributes[a];e.uidToObjectId[g.uid]=I}g.geometry&&(g.geometry=c.project(m.simplify(g.geometry,l),g.geometry.spatialReference,l)),y.push(g),i.push(m.createFeatureEditSuccessResult(g.attributes[a]))}}}p.addMany(d.convertFromFeatures([],y,n,o,s,a))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,o=r.hasZ,a=r.objectIdField,l=r.spatialReference,p=r.featureStore,y=0,f=t;y<f.length;y++){var h=f[y],g=h.attributes,F=h.geometry,b=g&&g[a];if(null!=b)if(p.has(b)){var I=d.convertToFeature(p.getFeature(b),n,o,s);if(F){if(n!==u.getJsonType(F)){i.push(m.createFeatureEditErrorResult("Incorrect geometry type."));continue}I.geometry=c.project(m.simplify(F,l),F.spatialReference,l)}if(g){var v=m.mixAttributes(this._fieldsIndex,this._requiredFields,I.attributes,g);if(v){i.push(v);continue}}p.add(d.convertFromFeature(I,n,o,s,a)),i.push(m.createFeatureEditSuccessResult(b))}else i.push(m.createFeatureEditErrorResult("Feature with object id "+b+" missing"));else i.push(m.createFeatureEditErrorResult("Identifier field "+a+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;i&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++},e.prototype._checkProjection=function(e){return n(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,c.checkProjectionSupport(l.WGS84,e)];case 1:return t.sent(),[3,3];case 2:throw t.sent(),new o("geojson-layer","Projection not supported");case 3:return[2]}}))}))},e}();t.default=v}));