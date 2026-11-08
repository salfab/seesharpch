var US=Object.defineProperty;var LS=(Vt,Ht,Nn)=>Ht in Vt?US(Vt,Ht,{enumerable:!0,configurable:!0,writable:!0,value:Nn}):Vt[Ht]=Nn;var Ty=(Vt,Ht,Nn)=>LS(Vt,typeof Ht!="symbol"?Ht+"":Ht,Nn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Vt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Nn=Object.getOwnPropertyNames,Cy=Object.prototype.hasOwnProperty,ky=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),J=(e,t)=>()=>(e&&(t=e(e=0)),t),zn=(e,t)=>{for(var n in t)Vt(e,n,{get:t[n],enumerable:!0})},Ay=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Nn(t))!Cy.call(e,i)&&i!==n&&Vt(e,i,{get:()=>t[i],enumerable:!(r=Ht(t,i))||r.enumerable});return e},Yn=e=>Ay(Vt({},"__esModule",{value:!0}),e),Xn,nn,Bn,Fa,Ga,Wa=J(()=>{Xn=new Map,nn=[],Bn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Xn.get(e);if(r===void 0)Xn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=nn.indexOf(e);i!==-1&&nn.splice(i,1);for(let o=0;o<nn.length;o++)if(Xn.get(nn[o]).priority<=n){nn.splice(o,0,e);return}nn.push(e)}return}throw new TypeError("not a valid backend")},Fa=async e=>{let t=Xn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ga=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?nn:n,i,o=[],s=new Set;for(let u of r){let l=await Fa(u);typeof l=="string"?o.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of o)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let a=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?a:Reflect.get(u,l)})]}}),Ry=J(()=>{Wa()}),qa,Oy=J(()=>{qa="1.27.0"}),ki,tt,Va=J(()=>{Oy(),ki="warning",tt={wasm:{},webgl:{},webgpu:{},versions:{common:qa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ki=e}},get logLevel(){return ki}},Object.defineProperty(tt,"logLevel",{enumerable:!0})}),Pe,Ny=J(()=>{Va(),Pe=tt}),Ha,ja,zy=J(()=>{Ha=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",a=t==null?void 0:t.norm,u,l;a===void 0||a.mean===void 0?u=[255,255,255,255]:typeof a.mean=="number"?u=[a.mean,a.mean,a.mean,a.mean]:(u=[a.mean[0],a.mean[1],a.mean[2],0],a.mean[3]!==void 0&&(u[3]=a.mean[3])),a===void 0||a.bias===void 0?l=[0,0,0,0]:typeof a.bias=="number"?l=[a.bias,a.bias,a.bias,a.bias]:(l=[a.bias[0],a.bias[1],a.bias[2],0],a.bias[3]!==void 0&&(l[3]=a.bias[3]));let c=o*i,d=0,h=c,g=c*2,f=-1;s==="RGBA"?(d=0,h=c,g=c*2,f=c*3):s==="RGB"?(d=0,h=c,g=c*2):s==="RBG"&&(d=0,g=c,h=c*2);for(let y=0;y<o;y++)for(let w=0;w<i;w++){let b=(e.data[d++]-l[0])*u[0],x=(e.data[h++]-l[1])*u[1],T=(e.data[g++]-l[2])*u[2],S=f===-1?255:(e.data[f++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+T+","+S+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ja=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,o,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],s=e.dims[3]):(i=e.dims[3],o=e.dims[2],s=e.dims[1]);let a=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let d=o*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,g=0,f=1,y=2,w=3,b=0,x=d,T=d*2,S=-1;a==="RGBA"?(b=0,x=d,T=d*2,S=d*3):a==="RGB"?(b=0,x=d,T=d*2):a==="RBG"&&(b=0,T=d,x=d*2),r=n.createImageData(i,o);for(let E=0;E<o*i;g+=h,f+=h,y+=h,w+=h,E++)r.data[g]=(e.data[b++]-c[0])*l[0],r.data[f]=(e.data[x++]-c[1])*l[1],r.data[y]=(e.data[T++]-c[2])*l[2],r.data[w]=S===-1?255:(e.data[S++]-c[3])*l[3]}else throw new Error("Can not access image data");return r}}),Tr,Ka,Ya,Xa,Qa,Za,By=J(()=>{Ri(),Tr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},o,s;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let a=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,h=0,g=1,f=2,y=3,w=0,b=l,x=l*2,T=-1;a==="RGB"&&(d=3,h=0,g=1,f=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let S=0;S<l;S++,h+=d,f+=d,g+=d,y+=d)c[w++]=(e[h]+s[0])/o[0],c[b++]=(e[g]+s[1])/o[1],c[x++]=(e[f]+s[2])/o[2],T!==-1&&y!==-1&&(c[T++]=(e[y]+s[3])/o[3]);return u==="RGBA"?new ht("float32",c,[1,4,n,r]):new ht("float32",c,[1,3,n,r])},Ka=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",s,a=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let h=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(a=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");a.tensorFormat="RGBA",a.height=h,a.width=g}else a.tensorFormat="RGBA",a.height=h,a.width=g;d.drawImage(e,0,0),s=d.getImageData(0,0,g,h).data}else throw new Error("Can not access image data")}else if(r){let c,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,d=t.resizedWidth):(c=e.height,d=e.width),t!==void 0&&(a=t),a.format="RGBA",a.height=c,a.width=d,t!==void 0){let h=u();h.width=d,h.height=c;let g=l(h);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let d=l(c);if(d!=null){let h=e.height,g=e.width;return d.drawImage(e,0,0,g,h),s=d.getImageData(0,0,g,h).data,a.height=h,a.width=g,Tr(s,a)}else throw new Error("Can not access image data")}else{if(o)return new Promise((c,d)=>{let h=u(),g=l(h);if(!e||!g)return d();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{h.width=f.width,h.height=f.height,g.drawImage(f,0,0,h.width,h.height);let y=g.getImageData(0,0,h.width,h.height);a.height=h.height,a.width=h.width,c(Tr(y.data,a))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Tr(s,a);throw new Error("Input data provided is not supported - aborted tensor creation")},Ya=(e,t)=>{let{width:n,height:r,download:i,dispose:o}=t,s=[1,r,n,4];return new ht({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:o})},Xa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new ht({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:o})},Qa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new ht({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:o})},Za=(e,t,n)=>new ht({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),mn,Qn,Ai,Ja,Py=J(()=>{mn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ai=!1,Ja=()=>{if(!Ai){Ai=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(mn.set("int64",BigInt64Array),Qn.set(BigInt64Array,"int64")),t&&(mn.set("uint64",BigUint64Array),Qn.set(BigUint64Array,"uint64")),r?(mn.set("float16",n),Qn.set(n,"float16")):mn.set("float16",Uint16Array)}}}),eu,tu,Dy=J(()=>{Ri(),eu=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},tu=(e,t)=>{switch(e.location){case"cpu":return new ht(e.type,e.data,t);case"cpu-pinned":return new ht({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ht({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ht({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ht({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ht,Ri=J(()=>{zy(),By(),Py(),Dy(),ht=class{constructor(e,t,n){Ja();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=mn.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,a;if(typeof e=="string")if(r=e,a=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=mn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(a=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=Qn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(a===void 0)a=[s.length];else if(!Array.isArray(a))throw new TypeError("A tensor's dims must be a number array");i=a,this.cpuData=s,this.dataLocation="cpu"}let o=eu(i);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=o}static async fromImage(e,t){return Ka(e,t)}static fromTexture(e,t){return Ya(e,t)}static fromGpuBuffer(e,t){return Xa(e,t)}static fromMLTensor(e,t){return Qa(e,t)}static fromPinnedBuffer(e,t,n){return Za(e,t,n)}toDataURL(e){return Ha(this,e)}toImageData(e){return ja(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return tu(this,e)}}}),Fe,nu=J(()=>{Ri(),Fe=ht}),Mr,Oi,Bt,xt,gn,yn,ru=J(()=>{Va(),Mr=(e,t)=>{(typeof tt.trace>"u"?!tt.wasm.trace:!tt.trace)||console.timeStamp(`${e}::ORT::${t}`)},Oi=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let o=0;o<n.length;o++){if(r&&!n[o].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Mr("CPU",s);return}n[o].includes("TRACE_FUNC")&&(r=!0)}},Bt=e=>{(typeof tt.trace>"u"?!tt.wasm.trace:!tt.trace)||Oi("BEGIN",e)},xt=e=>{(typeof tt.trace>"u"?!tt.wasm.trace:!tt.trace)||Oi("END",e)},gn=e=>{(typeof tt.trace>"u"?!tt.wasm.trace:!tt.trace)||console.time(`ORT::${e}`)},yn=e=>{(typeof tt.trace>"u"?!tt.wasm.trace:!tt.trace)||console.timeEnd(`ORT::${e}`)}}),iu,Uy=J(()=>{Wa(),nu(),ru(),iu=class My{constructor(t){this.handler=t}async run(t,n,r){Bt(),gn("InferenceSession.run");let i={},o={};if(typeof t!="object"||t===null||t instanceof Fe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Fe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(c.indexOf(d)!==-1){let h=n[d];(h===null||h instanceof Fe)&&(l=!0,s=!1,i[d]=h)}if(l){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let a=await this.handler.run(t,i,o),u={};for(let l in a)if(Object.hasOwnProperty.call(a,l)){let c=a[l];c instanceof Fe?u[l]=c:u[l]=new Fe(c.type,c.data,c.dims)}return yn("InferenceSession.run"),xt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Bt(),gn("InferenceSession.create");let o,s={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,d=0,h=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-d,typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||d+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(c,d,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[a,u]=await Ga(s),l=await a.createInferenceSessionHandler(o,u);return yn("InferenceSession.create"),xt(),new My(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ir,Ly=J(()=>{Uy(),Ir=iu}),Fy=J(()=>{}),Gy=J(()=>{}),Wy=J(()=>{}),qy=J(()=>{}),Vy={};zn(Vy,{InferenceSession:()=>Ir,TRACE:()=>Mr,TRACE_EVENT_BEGIN:()=>gn,TRACE_EVENT_END:()=>yn,TRACE_FUNC_BEGIN:()=>Bt,TRACE_FUNC_END:()=>xt,Tensor:()=>Fe,env:()=>Pe,registerBackend:()=>Bn});var wt=J(()=>{Ry(),Ny(),Ly(),nu(),Fy(),Gy(),ru(),Wy(),qy()}),Ni=J(()=>{}),ou={};zn(ou,{default:()=>su});var zi,Bi,su,Hy=J(()=>{var e;Ff(),wn(),Gi(),zi="ort-wasm-proxy-worker",Bi=((e=globalThis.self)==null?void 0:e.name)===zi,Bi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Vi(r.wasm).then(()=>{rs(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:o}=r;is(o,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,o=jr(i);postMessage({type:n,out:o});break}case"create":{let{model:i,options:o}=r;ss(i,o).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":as(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:o,inputs:s,outputIndices:a,options:u}=r;ls(i,o,s,a,new Array(a.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ds([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":cs(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),su=Bi?null:t=>new Worker(t??ft,{type:"module",name:zi})}),au={};zn(au,{default:()=>lu});async function uu(e={}){var Sy,Ey;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Sy=self.name)==null?void 0:Sy.startsWith("em-pthread"));t.mountExternalData=(p,m)=>{p.startsWith("./")&&(p=p.substring(2)),(t.Xc||(t.Xc=new Map)).set(p,m)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=p=>async(...m)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:m[0],errors:[]},M=await p(...m);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let k=_.errors;if(0<k.length){let D=await Promise.all(k);if(D=D.filter(q=>q),0<D.length)throw Error(D.join(`
`))}return M}finally{t.Yc=null}};t.jsepInit=(p,m)=>{if(p==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=m;let $=t.dd;t.jsepRegisterBuffer=(_,M,k,D)=>$.registerBuffer(_,M,k,D),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,M,k)=>$.createDownloader(_,M,k),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,M)=>{$.upload(_,M)}}else if(p==="webnn"){let $=m[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=m.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,M)=>$.createMLTensorDownloader(_,M),t.webnnRegisterMLTensor=(_,M,k,D)=>$.registerMLTensor(_,M,k,D),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,M,k,D,q,te)=>$.registerMLConstant(_,M,k,D,q,t.Xc,te),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let s=()=>{let p=m=>(...$)=>{let _=Wt;return $=m(...$),Wt!=_?new Promise((M,k)=>{Ia={resolve:M,reject:k}}):$};(()=>{for(let m of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[m]=p(t[m])})(),o!==void 0&&(t._OrtRun=o(t._OrtRun),t._OrtRunWithBinding=o(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var a,u,l=(p,m)=>{throw m},c=self.location.href,d="";if(n||r){try{d=new URL(".",c).href}catch{}r&&(u=p=>{var m=new XMLHttpRequest;return m.open("GET",p,!1),m.responseType="arraybuffer",m.send(null),new Uint8Array(m.response)}),a=async p=>{if(C(p))return new Promise(($,_)=>{var M=new XMLHttpRequest;M.open("GET",p,!0),M.responseType="arraybuffer",M.onload=()=>{M.status==200||M.status==0&&M.response?$(M.response):_(M.status)},M.onerror=_,M.send(null)});var m=await fetch(p,{credentials:"same-origin"});if(m.ok)return m.arrayBuffer();throw Error(m.status+" : "+m.url)}}var h,g,f,y,w,b,x=console.log.bind(console),T=console.error.bind(console),S=x,E=T,I=!1,C=p=>p.startsWith("file://");function v(){se.buffer!=z.buffer&&O()}if(i){let p=function(m){try{var $=m.data,_=$.Sc;if(_==="load"){let M=[];self.onmessage=k=>M.push(k),b=()=>{postMessage({Sc:"loaded"});for(let k of M)p(k);self.onmessage=p};for(let k of $.xd)t[k]&&!t[k].proxy||(t[k]=(...D)=>{postMessage({Sc:"callHandler",wd:k,args:D})},k=="print"&&(S=t[k]),k=="printErr"&&(E=t[k]));se=$.Od,O(),g=$.Pd,X(),Ii()}else if(_==="run"){(function(M){var k=(v(),W)[M+52>>>2>>>0];M=(v(),W)[M+56>>>2>>>0],N0(k,k-M),Ie(k)})($.Rc),Oa($.Rc,0,0,1,0,0),ue(),Ea($.Rc),R||(I0(),R=!0);try{Be($.Md,$.bd)}catch(M){if(M!="unwind")throw M}}else $.target!=="setimmediate"&&(_==="checkMailbox"?R&&$i():_&&(E(`worker: received unknown command ${_}`),E($)))}catch(M){throw C0(),M}};var R=!1;self.onunhandledrejection=m=>{throw m.reason||m},self.onmessage=p}var z,Y,U,G,N,W,K,Z,me,L,ee,A=!1;function O(){var p=se.buffer;t.HEAP8=z=new Int8Array(p),U=new Int16Array(p),t.HEAPU8=Y=new Uint8Array(p),G=new Uint16Array(p),t.HEAP32=N=new Int32Array(p),t.HEAPU32=W=new Uint32Array(p),K=new Float32Array(p),Z=new Float64Array(p),me=new BigInt64Array(p),L=new BigUint64Array(p)}function P(){A=!0,i?b():tn.sb()}function B(p){throw E(p="Aborted("+p+")"),I=!0,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),w==null||w(p),p}function V(){return{a:{ma:eS,gb:J3,g:Se,J:ot,f:Ot,o:Nt,h:dn,ha:br,b:jn,T:mi,Ha:yi,n:ba,$:Vg,Xa:Hg,Da:jg,Fa:Kg,Ya:Yg,Va:Xg,Oa:Qg,Ua:Zg,ka:Jg,Ea:e0,Ba:t0,Wa:n0,Ca:r0,bb:Fv,ea:Gv,wa:Wv,ua:Vv,da:jv,O:Kv,H:Yv,va:Xv,_:r3,xa:i3,Ra:o3,za:a3,Ia:u3,sa:l3,fa:c3,Qa:Ea,_a:d3,R:m3,r:b3,c:va,hb:$3,y:x3,M:v3,D:S3,l:E3,s:d0,ib:T3,I:M3,S:I3,j:C3,u:k3,q:A3,k:R3,La:O3,Ma:N3,Na:z3,Ja:m0,Ka:g0,ta:y0,db:P3,ab:U3,v:L3,aa:F3,ga:G3,$a:D3,W:W3,Za:q3,Aa:V3,F:B3,U:H3,la:Ti,ya:K3,fb:j3,eb:Y3,Sa:$0,Ta:x0,Ga:re,V:v0,ja:S0,Pa:E0,ia:T0,kb:BS,na:AS,lb:zS,oa:kS,G:$S,e:iS,t:nS,w:tS,B:fS,mb:MS,K:wS,x:aS,pa:IS,Y:RS,ba:TS,nb:ES,ob:SS,P:mS,qa:vS,pb:xS,N:_S,Z:CS,d:rS,A:sS,m:oS,jb:PS,p:lS,z:cS,C:uS,E:dS,L:gS,qb:bS,Q:OS,ca:yS,X:NS,rb:hS,ra:pS,i:Q3,a:se,cb:Xe}}}async function X(){function p(_,M){var k=tn=_.exports;_={};for(let[D,q]of Object.entries(k))typeof q=="function"?(k=p3(q),_[D]=k):_[D]=q;return tn=_,tn=(function(){var D=tn,q=oe=>Ee=>oe(Ee)>>>0,te=oe=>()=>oe()>>>0;return(D=Object.assign({},D)).tb=q(D.tb),D.Xb=te(D.Xb),D.Zb=q(D.Zb),D.lc=q(D.lc),D.mc=te(D.mc),D.qc=q(D.qc),D})(),ae.push(tn._b),M0=(_=tn).tb,I0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Mi=_.Xb,qt=t._free=_.Yb,vr=t._malloc=_.Zb,Oa=_.ac,C0=_.bc,k0=_.cc,A0=_.dc,Na=_.ec,R0=_.fc,O0=_.gc,ke=_.hc,Sr=_.ic,N0=_.jc,Ie=_.kc,za=_.lc,Ce=_.mc,z0=_.nc,Ba=_.oc,B0=_.pc,P0=_.qc,D0=_.rc,Pa=_.sc,U0=_.tc,L0=_.uc,F0=_.vc,G0=_.wc,W0=_.xc,q0=_.yc,V0=_.zc,H0=_.Ac,j0=_.Bc,K0=_.Cc,Y0=_.Dc,X0=_.Ec,Q0=_.Fc,Z0=_.Gc,J0=_.Hc,ey=_.Ic,ty=_.Jc,ny=_.Kc,ry=_.Lc,iy=_.Mc,oy=_.Nc,sy=_.Pc,ay=_.Qc,uy=_.$c,ly=_.ad,cy=_.fd,dy=_.jd,py=_.kd,hy=_.ld,fy=_.md,my=_.nd,gy=_.od,yy=_.pd,wy=_.qd,_y=_.vd,by=_.Td,$y=_.Ud,xy=_.Vd,vy=_.Wd,g=M,tn}var m,$=V();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(M,k)=>{_(p(M,k))})}):i?p(new WebAssembly.Instance(g,V()),g):(ee??(ee=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),m=await(async function(_){var M=ee;if(!h&&!C(M))try{var k=fetch(M,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,_)}catch(D){E(`wasm streaming compile failed: ${D}`),E("falling back to ArrayBuffer instantiation")}return(async function(D,q){try{var te=await(async function(oe){if(!h)try{var Ee=await a(oe);return new Uint8Array(Ee)}catch{}if(oe==ee&&h)oe=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(D);return await WebAssembly.instantiate(te,q)}catch(oe){E(`failed to asynchronously prepare wasm: ${oe}`),B(oe)}})(M,_)})($),p(m.instance,m.module))}class Q{constructor(m){Ty(this,"name","ExitStatus");this.message=`Program terminated with exit(${m})`,this.status=m}}var ne=p=>{p.terminate(),p.onmessage=()=>{}},ye=[],ve=0,Te=null,Le=p=>{le.length==0&&(ie(),de(le[0]));var m=le.pop();if(!m)return 6;j.push(m),he[p.Rc]=m,m.Rc=p.Rc;var $={Sc:"run",Md:p.Ld,bd:p.bd,Rc:p.Rc};return m.postMessage($,p.rd),0},ge=0,we=(p,m,...$)=>{var _,M=16*$.length,k=Ce(),D=za(M),q=D>>>3;for(_ of $)typeof _=="bigint"?((v(),me)[q++>>>0]=1n,(v(),me)[q++>>>0]=_):((v(),me)[q++>>>0]=0n,(v(),Z)[q++>>>0]=_);return p=k0(p,0,M,D,m),Ie(k),p};function Xe(p){if(i)return we(0,1,p);if(f=p,!(0<ge)){for(var m of j)ne(m);for(m of le)ne(m);le=[],j=[],he={},I=!0}l(0,new Q(p))}function yt(p){if(i)return we(1,0,p);re(p)}var re=p=>{if(f=p,i)throw yt(p),"unwind";Xe(p)},le=[],j=[],ae=[],he={},be=p=>{var m=p.Rc;delete he[m],le.push(p),j.splice(j.indexOf(p),1),p.Rc=0,A0(m)};function ue(){ae.forEach(p=>p())}var de=p=>new Promise(m=>{p.onmessage=M=>{var k=M.data;if(M=k.Sc,k.Zc&&k.Zc!=Mi()){var D=he[k.Zc];D?D.postMessage(k,k.rd):E(`Internal error! Worker sent a message "${M}" to target pthread ${k.Zc}, but that thread no longer exists!`)}else M==="checkMailbox"?$i():M==="spawnThread"?Le(k):M==="cleanupThread"?bi(()=>{be(he[k.Nd])}):M==="loaded"?(p.loaded=!0,m(p)):k.target==="setimmediate"?p.postMessage(k):M==="uncaughtException"?p.onerror(k.error):M==="callHandler"?t[k.wd](...k.args):M&&E(`worker sent an unknown command ${M}`)},p.onerror=M=>{throw E(`worker sent an error! ${M.filename}:${M.lineno}: ${M.message}`),M};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);p.postMessage({Sc:"load",xd:_,Od:se,Pd:g})});function ie(){var p=new Worker((()=>{let m=URL;return self.location.href>"file:"&&self.location.href<"file;"?new m("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});le.push(p)}var se,Be=(p,m)=>{ge=0,p=Pa(p,m),0<ge?f=p:Na(p)},Ge=[],Me=0;function Se(p){var m=new He(p>>>=0);return(v(),z)[m.Tc+12>>>0]==0&&(Ze(m,!0),Me--),We(m,!1),Ge.push(m),P0(p)}var Ke=0,ot=()=>{ke(0,0);var p=Ge.pop();z0(p.cd),Ke=0};function Ze(p,m){m=m?1:0,(v(),z)[p.Tc+12>>>0]=m}function We(p,m){m=m?1:0,(v(),z)[p.Tc+13>>>0]=m}class He{constructor(m){this.cd=m,this.Tc=m-24}}var Ft=p=>{var m=Ke;if(!m)return Sr(0),0;var $=new He(m);(v(),W)[$.Tc+16>>>2>>>0]=m;var _=(v(),W)[$.Tc+4>>>2>>>0];if(!_)return Sr(0),m;for(var M of p){if(M===0||M===_)break;if(B0(M,_,$.Tc+16))return Sr(M),m}return Sr(_),m};function Ot(){return Ft([])}function Nt(p){return Ft([p>>>0])}function dn(p,m,$,_){return Ft([p>>>0,m>>>0,$>>>0,_>>>0])}var br=()=>{var p=Ge.pop();p||B("no exception to throw");var m=p.cd;throw(v(),z)[p.Tc+13>>>0]==0&&(Ge.push(p),We(p,!0),Ze(p,!1),Me++),Ba(m),Ke=m};function jn(p,m,$){var _=new He(p>>>=0);throw m>>>=0,$>>>=0,(v(),W)[_.Tc+16>>>2>>>0]=0,(v(),W)[_.Tc+4>>>2>>>0]=m,(v(),W)[_.Tc+8>>>2>>>0]=$,Ba(p),Me++,Ke=p}var mi=()=>Me;function gi(p,m,$,_){return i?we(2,1,p,m,$,_):yi(p,m,$,_)}function yi(p,m,$,_){if(p>>>=0,m>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var M=[];return i&&M.length===0?gi(p,m,$,_):(p={Ld:$,Rc:p,bd:_,rd:M},i?(p.Sc="spawnThread",postMessage(p,M),0):Le(p))}function ba(p){throw Ke||(Ke=p>>>0),Ke}var wi=globalThis.TextDecoder&&new TextDecoder,$r=(p,m,$,_)=>{if($=m+$,_)return $;for(;p[m]&&!(m>=$);)++m;return m},qg=(p,m=0,$,_)=>{if(16<($=$r(p,m>>>=0,$,_))-m&&p.buffer&&wi)return wi.decode(p.buffer instanceof ArrayBuffer?p.subarray(m,$):p.slice(m,$));for(_="";m<$;){var M=p[m++];if(128&M){var k=63&p[m++];if((224&M)==192)_+=String.fromCharCode((31&M)<<6|k);else{var D=63&p[m++];65536>(M=(240&M)==224?(15&M)<<12|k<<6|D:(7&M)<<18|k<<12|D<<6|63&p[m++])?_+=String.fromCharCode(M):(M-=65536,_+=String.fromCharCode(55296|M>>10,56320|1023&M))}}else _+=String.fromCharCode(M)}return _},Je=(p,m,$)=>(p>>>=0)?qg((v(),Y),p,m,$):"";function Vg(p,m,$){return i?we(3,1,p,m,$):0}function Hg(p,m){if(i)return we(4,1,p,m)}function jg(p,m){if(i)return we(5,1,p,m)}function Kg(p,m,$){if(i)return we(6,1,p,m,$)}function Yg(p,m,$){return i?we(7,1,p,m,$):0}function Xg(p,m){if(i)return we(8,1,p,m)}function Qg(p,m,$){if(i)return we(9,1,p,m,$)}function Zg(p,m,$,_){if(i)return we(10,1,p,m,$,_)}function Jg(p,m,$,_){if(i)return we(11,1,p,m,$,_)}function e0(p,m,$,_){if(i)return we(12,1,p,m,$,_)}function t0(p){if(i)return we(13,1,p)}function n0(p,m){if(i)return we(14,1,p,m)}function r0(p,m,$){if(i)return we(15,1,p,m,$)}var Fv=()=>B(""),Gt=p=>{p>>>=0;for(var m="";;){var $=(v(),Y)[p++>>>0];if(!$)return m;m+=String.fromCharCode($)}},$a={},xa={},Kn=class extends Error{constructor(p){super(p),this.name="BindingError"}};function en(p,m,$={}){return(function(_,M,k={}){var D=M.name;if(!_)throw new Kn(`type "${D}" must have a positive integer typeid pointer`);if(xa.hasOwnProperty(_)){if(k.yd)return;throw new Kn(`Cannot register type '${D}' twice`)}xa[_]=M,$a.hasOwnProperty(_)&&(M=$a[_],delete $a[_],M.forEach(q=>q()))})(p,m,$)}var i0=(p,m,$)=>{switch(m){case 1:return $?_=>(v(),z)[_>>>0]:_=>(v(),Y)[_>>>0];case 2:return $?_=>(v(),U)[_>>>1>>>0]:_=>(v(),G)[_>>>1>>>0];case 4:return $?_=>(v(),N)[_>>>2>>>0]:_=>(v(),W)[_>>>2>>>0];case 8:return $?_=>(v(),me)[_>>>3>>>0]:_=>(v(),L)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${m}): ${p}`)}};function Gv(p,m,$,_,M){p>>>=0,$>>>=0,m=Gt(m>>>0);let k=D=>D;if(_=_===0n){let D=8*$;k=q=>BigInt.asUintN(D,q),M=k(M)}en(p,{name:m,Oc:k,Vc:(D,q)=>(typeof q=="number"&&(q=BigInt(q)),q),Uc:i0(m,$,!_),Wc:null})}function Wv(p,m,$,_){en(p>>>=0,{name:m=Gt(m>>>0),Oc:function(M){return!!M},Vc:function(M,k){return k?$:_},Uc:function(M){return this.Oc((v(),Y)[M>>>0])},Wc:null})}var o0=[],Rn=[0,1,,1,null,1,!0,1,!1,1];function va(p){9<(p>>>=0)&&--Rn[p+1]===0&&(Rn[p]=void 0,o0.push(p))}var $t=p=>{if(!p)throw new Kn(`Cannot use deleted val. handle = ${p}`);return Rn[p]},zt=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let m=o0.pop()||Rn.length;return Rn[m]=p,Rn[m+1]=1,m}};function Sa(p){return this.Oc((v(),W)[p>>>2>>>0])}var qv={name:"emscripten::val",Oc:p=>{var m=$t(p);return va(p),m},Vc:(p,m)=>zt(m),Uc:Sa,Wc:null};function Vv(p){return en(p>>>0,qv)}var Hv=(p,m)=>{switch(m){case 4:return function($){return this.Oc((v(),K)[$>>>2>>>0])};case 8:return function($){return this.Oc((v(),Z)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${m}): ${p}`)}};function jv(p,m,$){$>>>=0,en(p>>>=0,{name:m=Gt(m>>>0),Oc:_=>_,Vc:(_,M)=>M,Uc:Hv(m,$),Wc:null})}function Kv(p,m,$,_,M){p>>>=0,$>>>=0,m=Gt(m>>>0);let k=q=>q;if(_===0){var D=32-8*$;k=q=>q<<D>>>D,M=k(M)}en(p,{name:m,Oc:k,Vc:(q,te)=>te,Uc:i0(m,$,_!==0),Wc:null})}function Yv(p,m,$){function _(k){var D=(v(),W)[k>>>2>>>0];return k=(v(),W)[k+4>>>2>>>0],new M((v(),z).buffer,k,D)}var M=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][m];en(p>>>=0,{name:$=Gt($>>>0),Oc:_,Uc:_},{yd:!0})}var pn=(p,m,$)=>{var _=(v(),Y);if(m>>>=0,0<$){var M=m;$=m+$-1;for(var k=0;k<p.length;++k){var D=p.codePointAt(k);if(127>=D){if(m>=$)break;_[m++>>>0]=D}else if(2047>=D){if(m+1>=$)break;_[m++>>>0]=192|D>>6,_[m++>>>0]=128|63&D}else if(65535>=D){if(m+2>=$)break;_[m++>>>0]=224|D>>12,_[m++>>>0]=128|D>>6&63,_[m++>>>0]=128|63&D}else{if(m+3>=$)break;_[m++>>>0]=240|D>>18,_[m++>>>0]=128|D>>12&63,_[m++>>>0]=128|D>>6&63,_[m++>>>0]=128|63&D,k++}}_[m>>>0]=0,p=m-M}else p=0;return p},_i=p=>{for(var m=0,$=0;$<p.length;++$){var _=p.charCodeAt($);127>=_?m++:2047>=_?m+=2:55296<=_&&57343>=_?(m+=4,++$):m+=3}return m};function Xv(p,m){en(p>>>=0,{name:m=Gt(m>>>0),Oc($){var _=(v(),W)[$>>>2>>>0];return _=Je($+4,_,!0),qt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var M=typeof _=="string";if(!(M||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Kn("Cannot pass non-string to std::string");var k=M?_i(_):_.length,D=vr(4+k+1),q=D+4;return(v(),W)[D>>>2>>>0]=k,M?pn(_,q,k+1):(v(),Y).set(_,q>>>0),$!==null&&$.push(qt,D),D},Uc:Sa,Wc($){qt($)}})}var s0=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Qv=(p,m,$)=>{if(p>>>=1,16<(m=$r((v(),G),p,m/2,$))-p&&s0)return s0.decode((v(),G).slice(p,m));for($="";p<m;++p){var _=(v(),G)[p>>>0];$+=String.fromCharCode(_)}return $},Zv=(p,m,$)=>{if($??($=2147483647),2>$)return 0;var _=m;$=($-=2)<2*p.length?$/2:p.length;for(var M=0;M<$;++M){var k=p.charCodeAt(M);(v(),U)[m>>>1>>>0]=k,m+=2}return(v(),U)[m>>>1>>>0]=0,m-_},Jv=p=>2*p.length,e3=(p,m,$)=>{var _="";p>>>=2;for(var M=0;!(M>=m/4);M++){var k=(v(),W)[p+M>>>0];if(!k&&!$)break;_+=String.fromCodePoint(k)}return _},t3=(p,m,$)=>{if(m>>>=0,$??($=2147483647),4>$)return 0;var _=m;$=_+$-4;for(var M=0;M<p.length;++M){var k=p.codePointAt(M);if(65535<k&&M++,(v(),N)[m>>>2>>>0]=k,(m+=4)+4>$)break}return(v(),N)[m>>>2>>>0]=0,m-_},n3=p=>{for(var m=0,$=0;$<p.length;++$)65535<p.codePointAt($)&&$++,m+=4;return m};function r3(p,m,$){if(p>>>=0,m>>>=0,$=Gt($>>>=0),m===2)var _=Qv,M=Zv,k=Jv;else _=e3,M=t3,k=n3;en(p,{name:$,Oc:D=>{var q=(v(),W)[D>>>2>>>0];return q=_(D+4,q*m,!0),qt(D),q},Vc:(D,q)=>{if(typeof q!="string")throw new Kn(`Cannot pass non-string to C++ string type ${$}`);var te=k(q),oe=vr(4+te+m);return(v(),W)[oe>>>2>>>0]=te/m,M(q,oe+4,te+m),D!==null&&D.push(qt,oe),oe},Uc:Sa,Wc(D){qt(D)}})}function i3(p,m){en(p>>>=0,{zd:!0,name:m=Gt(m>>>0),Oc:()=>{},Vc:()=>{}})}function o3(p){Oa(p>>>0,!r,1,!n,131072,!1),ue()}var bi=p=>{if(!I)try{if(p(),!(0<ge))try{i?Mi()&&Na(f):re(f)}catch(m){m instanceof Q||m=="unwind"||l(0,m)}}catch(m){m instanceof Q||m=="unwind"||l(0,m)}},s3=!Atomics.waitAsync||((Ey=globalThis.navigator)==null?void 0:Ey.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ea(p){p>>>=0,s3||(Atomics.waitAsync((v(),N),p>>>2,p).value.then($i),p+=128,Atomics.store((v(),N),p>>>2,1))}var $i=()=>bi(()=>{var p=Mi();p&&(Ea(p),O0())});function a3(p,m){(p>>>=0)==m>>>0?setTimeout($i):i?postMessage({Zc:p,Sc:"checkMailbox"}):(p=he[p])&&p.postMessage({Sc:"checkMailbox"})}var Ta=[];function u3(p,m,$,_,M){for(m>>>=0,M>>>=0,Ta.length=0,$=M>>>3,_=M+_>>>3;$<_;){var k;k=(v(),me)[$++>>>0]?(v(),me)[$++>>>0]:(v(),Z)[$++>>>0],Ta.push(k)}return(m?Da[m]:Z3[p])(...Ta)}var l3=()=>{ge=0};function c3(p){p>>>=0,i?postMessage({Sc:"cleanupThread",Nd:p}):be(he[p])}function d3(p){}var xi=p=>{try{p()}catch(m){B(m)}};function p3(p){var m=(...$)=>{vi.push(p);try{return p(...$)}finally{I||(vi.pop(),Wt&&hn===1&&vi.length===0&&(hn=0,ge+=1,xi($y),typeof Fibers<"u"&&Fibers.Zd()))}};return l0.set(p,m),m}var hn=0,Wt=null,a0=0,vi=[],Ma=new Map,u0=new Map,l0=new Map,h3=0,Ia=null,f3=[],c0=p=>(function(m){if(!I){if(hn===0){var $=!1,_=!1;m((M=0)=>{if(!I&&(a0=M,$=!0,_)){hn=2,xi(()=>xy(Wt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),M=!1;try{var k=(function(){var te=(v(),N)[Wt+8>>>2>>>0];return te=u0.get(te),te=l0.get(te),--ge,te()})()}catch(te){k=te,M=!0}var D=!1;if(!Wt){var q=Ia;q&&(Ia=null,(M?q.reject:q.resolve)(k),D=!0)}if(M&&!D)throw k}}),_=!0,$||(hn=1,Wt=(function(){var M=vr(65548),k=M+12;if((v(),W)[M>>>2>>>0]=k,(v(),W)[M+4>>>2>>>0]=k+65536,k=vi[0],!Ma.has(k)){var D=h3++;Ma.set(k,D),u0.set(D,k)}return k=Ma.get(k),(v(),N)[M+8>>>2>>>0]=k,M})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),xi(()=>by(Wt)))}else hn===2?(hn=0,xi(vy),qt(Wt),Wt=null,f3.forEach(bi)):B(`invalid state: ${hn}`);return a0}})(m=>{p().then(m)});function m3(p){return p>>>=0,c0(async()=>{var m=await $t(p);return zt(m)})}var Ca=[],g3=p=>{var m=Ca.length;return Ca.push(p),m},y3=(p,m)=>{for(var $=Array(p),_=0;_<p;++_){var M=_,k=(v(),W)[m+4*_>>>2>>>0],D=xa[k];if(D===void 0)throw p=`parameter ${_}`,k=M0(k),m=Gt(k),qt(k),new Kn(`${p} has unknown type ${m}`);$[M]=D}return $},w3=(p,m,$)=>{var _=[];return p=p(_,$),_.length&&((v(),W)[m>>>2>>>0]=zt(_)),p},_3={},Si=p=>{var m=_3[p];return m===void 0?Gt(p):m};function b3(p,m,$){var[_,...M]=y3(p,m>>>0);m=_.Vc.bind(_);var k=M.map(te=>te.Uc.bind(te));p--;var D={toValue:$t};switch(p=k.map((te,oe)=>{var Ee=`argFromPtr${oe}`;return D[Ee]=te,`${Ee}(args${oe?"+"+8*oe:""})`}),$){case 0:var q="toValue(handle)";break;case 2:q="new (toValue(handle))";break;case 3:q="";break;case 1:D.getStringOrSymbol=Si,q="toValue(handle)[getStringOrSymbol(methodName)]"}return q+=`(${p})`,_.zd||(D.toReturnWire=m,D.emval_returnValue=w3,q=`return emval_returnValue(toReturnWire, destructorsRef, ${q})`),q=`return function (handle, methodName, destructorsRef, args) {
  ${q}
  }`,$=new Function(Object.keys(D),q)(...Object.values(D)),q=`methodCaller<(${M.map(te=>te.name)}) => ${_.name}>`,g3(Object.defineProperty($,"name",{value:q}))}function $3(p,m){return m>>>=0,(p=$t(p>>>0))==$t(m)}function x3(p){return(p>>>=0)?(p=Si(p),zt(globalThis[p])):zt(globalThis)}function v3(p){return p=Si(p>>>0),zt(t[p])}function S3(p,m){return m>>>=0,p=$t(p>>>0),m=$t(m),zt(p[m])}function E3(p){9<(p>>>=0)&&(Rn[p+1]+=1)}function d0(p,m,$,_,M){return Ca[p>>>0](m>>>0,$>>>0,_>>>0,M>>>0)}function T3(p,m,$,_,M){return d0(p>>>0,m>>>0,$>>>0,_>>>0,M>>>0)}function M3(){return zt([])}function I3(p){p=$t(p>>>0);for(var m=Array(p.length),$=0;$<p.length;$++)m[$]=p[$];return zt(m)}function C3(p){return zt(Si(p>>>0))}function k3(){return zt({})}function A3(p){for(var m=$t(p>>>=0);m.length;){var $=m.pop();m.pop()($)}va(p)}function R3(p,m,$){m>>>=0,$>>>=0,p=$t(p>>>0),m=$t(m),$=$t($),p[m]=$}function O3(p,m){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),m>>>=0,p=new Date(1e3*p),(v(),N)[m>>>2>>>0]=p.getUTCSeconds(),(v(),N)[m+4>>>2>>>0]=p.getUTCMinutes(),(v(),N)[m+8>>>2>>>0]=p.getUTCHours(),(v(),N)[m+12>>>2>>>0]=p.getUTCDate(),(v(),N)[m+16>>>2>>>0]=p.getUTCMonth(),(v(),N)[m+20>>>2>>>0]=p.getUTCFullYear()-1900,(v(),N)[m+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),N)[m+28>>>2>>>0]=p}var p0=p=>p%4==0&&(p%100!=0||p%400==0),h0=[0,31,60,91,121,152,182,213,244,274,305,335],f0=[0,31,59,90,120,151,181,212,243,273,304,334];function N3(p,m){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),m>>>=0,p=new Date(1e3*p),(v(),N)[m>>>2>>>0]=p.getSeconds(),(v(),N)[m+4>>>2>>>0]=p.getMinutes(),(v(),N)[m+8>>>2>>>0]=p.getHours(),(v(),N)[m+12>>>2>>>0]=p.getDate(),(v(),N)[m+16>>>2>>>0]=p.getMonth(),(v(),N)[m+20>>>2>>>0]=p.getFullYear()-1900,(v(),N)[m+24>>>2>>>0]=p.getDay();var $=(p0(p.getFullYear())?h0:f0)[p.getMonth()]+p.getDate()-1|0;(v(),N)[m+28>>>2>>>0]=$,(v(),N)[m+36>>>2>>>0]=-60*p.getTimezoneOffset(),$=new Date(p.getFullYear(),6,1).getTimezoneOffset();var _=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|($!=_&&p.getTimezoneOffset()==Math.min(_,$)),(v(),N)[m+32>>>2>>>0]=p}function z3(p){p>>>=0;var m=new Date((v(),N)[p+20>>>2>>>0]+1900,(v(),N)[p+16>>>2>>>0],(v(),N)[p+12>>>2>>>0],(v(),N)[p+8>>>2>>>0],(v(),N)[p+4>>>2>>>0],(v(),N)[p>>>2>>>0],0),$=(v(),N)[p+32>>>2>>>0],_=m.getTimezoneOffset(),M=new Date(m.getFullYear(),6,1).getTimezoneOffset(),k=new Date(m.getFullYear(),0,1).getTimezoneOffset(),D=Math.min(k,M);return 0>$?(v(),N)[p+32>>>2>>>0]=+(M!=k&&D==_):0<$!=(D==_)&&(M=Math.max(k,M),m.setTime(m.getTime()+6e4*((0<$?D:M)-_))),(v(),N)[p+24>>>2>>>0]=m.getDay(),$=(p0(m.getFullYear())?h0:f0)[m.getMonth()]+m.getDate()-1|0,(v(),N)[p+28>>>2>>>0]=$,(v(),N)[p>>>2>>>0]=m.getSeconds(),(v(),N)[p+4>>>2>>>0]=m.getMinutes(),(v(),N)[p+8>>>2>>>0]=m.getHours(),(v(),N)[p+12>>>2>>>0]=m.getDate(),(v(),N)[p+16>>>2>>>0]=m.getMonth(),(v(),N)[p+20>>>2>>>0]=m.getYear(),p=m.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function m0(p,m,$,_,M,k,D){return i?we(16,1,p,m,$,_,M,k,D):-52}function g0(p,m,$,_,M,k){if(i)return we(17,1,p,m,$,_,M,k)}var xr={},B3=()=>performance.timeOrigin+performance.now();function y0(p,m){if(i)return we(18,1,p,m);if(xr[p]&&(clearTimeout(xr[p].id),delete xr[p]),!m)return 0;var $=setTimeout(()=>{delete xr[p],bi(()=>R0(p,performance.timeOrigin+performance.now()))},m);return xr[p]={id:$,Yd:m},0}function P3(p,m,$,_){p>>>=0,m>>>=0,$>>>=0,_>>>=0;var M=new Date().getFullYear(),k=new Date(M,0,1).getTimezoneOffset();M=new Date(M,6,1).getTimezoneOffset();var D=Math.max(k,M);(v(),W)[p>>>2>>>0]=60*D,(v(),N)[m>>>2>>>0]=+(k!=M),p=(m=q=>{var te=Math.abs(q);return`UTC${0<=q?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(k),m=m(M),M<k?(pn(p,$,17),pn(m,_,17)):(pn(p,_,17),pn(m,$,17))}var D3=()=>Date.now();function U3(p,m,$){return $>>>=0,0<=p&&3>=p?(p===0?p=Date.now():p=performance.timeOrigin+performance.now(),p=Math.round(1e6*p),(v(),me)[$>>>3>>>0]=BigInt(p),0):28}var ka=[],w0=(p,m)=>{ka.length=0;for(var $;$=(v(),Y)[p++>>>0];){var _=$!=105;m+=(_&=$!=112)&&m%8?4:0,ka.push($==112?(v(),W)[m>>>2>>>0]:$==106?(v(),me)[m>>>3>>>0]:$==105?(v(),N)[m>>>2>>>0]:(v(),Z)[m>>>3>>>0]),m+=_?8:4}return ka};function L3(p,m,$){return p>>>=0,m=w0(m>>>0,$>>>0),Da[p](...m)}function F3(p,m,$){return p>>>=0,m=w0(m>>>0,$>>>0),Da[p](...m)}var G3=()=>{};function W3(p,m){return E(Je(p>>>0,m>>>0))}var q3=()=>{throw ge+=1,"unwind"};function V3(){return 4294901760}var H3=()=>navigator.hardwareConcurrency,On={},Ei=p=>{var m;return(m=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(p))?+m[1]:(m=/:(\d+):\d+(?:\)|$)/.exec(p))?2147483648|+m[1]:0},_0=p=>{for(var m of p)(p=Ei(m))&&(On[p]=m)};function j3(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),_0(p),On.gd=Ei(p[3]),On.Jd=p,On.gd}function Ti(p){if(!(p=On[p>>>0]))return 0;var m;if(m=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(p))p=m[1];else if(m=/^\s+at (.*) \(.*\)$/.exec(p))p=m[1];else{if(!(m=/^(.+?)@/.exec(p)))return 0;p=m[1]}qt(Ti.hd??0),m=_i(p)+1;var $=vr(m);return $&&pn(p,$,m),Ti.hd=$,Ti.hd}function K3(p){p>>>=0;var m=(v(),Y).length;if(p<=m||4294901760<p)return!1;for(var $=1;4>=$;$*=2){var _=m*(1+.2/$);_=Math.min(_,p+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(p,_)/65536))-se.buffer.byteLength+65535)/65536|0;try{se.grow(_),O();var M=1;break e}catch{}M=void 0}if(M)return!0}return!1}function Y3(p,m,$){if(p>>>=0,m>>>=0,On.gd==p)var _=On.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),_0(_);for(var M=3;_[M]&&Ei(_[M])!=p;)++M;for(p=0;p<$&&_[p+M];++p)(v(),N)[m+4*p>>>2>>>0]=Ei(_[p+M]);return p}var Aa,Ra={},b0=()=>{var _;if(!Aa){var p,m={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in Ra)Ra[p]===void 0?delete m[p]:m[p]=Ra[p];var $=[];for(p in m)$.push(`${p}=${m[p]}`);Aa=$}return Aa};function $0(p,m){if(i)return we(19,1,p,m);p>>>=0,m>>>=0;var $,_=0,M=0;for($ of b0()){var k=m+_;(v(),W)[p+M>>>2>>>0]=k,_+=pn($,k,1/0)+1,M+=4}return 0}function x0(p,m){if(i)return we(20,1,p,m);p>>>=0,m>>>=0;var $=b0();for(var _ of((v(),W)[p>>>2>>>0]=$.length,p=0,$))p+=_i(_)+1;return(v(),W)[m>>>2>>>0]=p,0}function v0(p){return i?we(21,1,p):52}function S0(p,m,$,_){return i?we(22,1,p,m,$,_):52}function E0(p,m,$,_){return i?we(23,1,p,m,$,_):70}var X3=[null,[],[]];function T0(p,m,$,_){if(i)return we(24,1,p,m,$,_);m>>>=0,$>>>=0,_>>>=0;for(var M=0,k=0;k<$;k++){var D=(v(),W)[m>>>2>>>0],q=(v(),W)[m+4>>>2>>>0];m+=8;for(var te=0;te<q;te++){var oe=p,Ee=(v(),Y)[D+te>>>0],Re=X3[oe];Ee===0||Ee===10?((oe===1?S:E)(qg(Re)),Re.length=0):Re.push(Ee)}M+=q}return(v(),W)[_>>>2>>>0]=M,0}function Q3(p){return p>>>0}i||(function(){for(var p=t.numThreads-1;p--;)ie();ye.push(async()=>{var m=(async function(){if(!i)return Promise.all(le.map(de))})();ve++,await m,--ve==0&&Te&&(m=Te,Te=null,m())})})(),i||(se=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),O()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>Ce(),t.stackRestore=p=>Ie(p),t.stackAlloc=p=>za(p),t.setValue=function(p,m,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(v(),z)[p>>>0]=m;break;case"i16":(v(),U)[p>>>1>>>0]=m;break;case"i32":(v(),N)[p>>>2>>>0]=m;break;case"i64":(v(),me)[p>>>3>>>0]=BigInt(m);break;case"float":(v(),K)[p>>>2>>>0]=m;break;case"double":(v(),Z)[p>>>3>>>0]=m;break;case"*":(v(),W)[p>>>2>>>0]=m;break;default:B(`invalid type for setValue: ${$}`)}},t.getValue=function(p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":return(v(),z)[p>>>0];case"i16":return(v(),U)[p>>>1>>>0];case"i32":return(v(),N)[p>>>2>>>0];case"i64":return(v(),me)[p>>>3>>>0];case"float":return(v(),K)[p>>>2>>>0];case"double":return(v(),Z)[p>>>3>>>0];case"*":return(v(),W)[p>>>2>>>0];default:B(`invalid type for getValue: ${m}`)}},t.UTF8ToString=Je,t.stringToUTF8=pn,t.lengthBytesUTF8=_i;var M0,I0,Mi,qt,vr,Oa,C0,k0,A0,Na,R0,O0,ke,Sr,N0,Ie,za,Ce,z0,Ba,B0,P0,D0,Pa,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,oy,sy,ay,uy,ly,cy,dy,py,hy,fy,my,gy,yy,wy,_y,by,$y,xy,vy,tn,Z3=[Xe,yt,gi,Vg,Hg,jg,Kg,Yg,Xg,Qg,Zg,Jg,e0,t0,n0,r0,m0,g0,y0,$0,x0,v0,S0,E0,T0],Da={1003524:(p,m,$,_,M)=>{if(t===void 0||!t.Xc)return 1;if((p=Je(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=t.Xc.get(p)))return 2;if(m=Number(m>>>0),$=Number($>>>0),_=Number(_>>>0),m+$>p.byteLength)return 3;try{let k=p.subarray(m,m+$);switch(M){case 0:(v(),Y).set(k,_>>>0);break;case 1:t.Qd?t.Qd(_,k):t.Id(_,k);break;default:return 4}return 0}catch{return 4}},1004348:(p,m,$)=>{t.td(p,(v(),Y).subarray(m>>>0,m+$>>>0))},1004412:()=>t.Sd(),1004454:p=>{t.sd(p)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:p=>t.Ad(p),1004609:p=>t.Ed(p),1004641:(p,m,$)=>{t.ed(Number(p),Number(m),Number($),!0)},1004704:(p,m,$)=>{t.ed(Number(p),Number(m),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:p=>{t.$b("Abs",p,void 0)},1004869:p=>{t.$b("Neg",p,void 0)},1004920:p=>{t.$b("Floor",p,void 0)},1004973:p=>{t.$b("Ceil",p,void 0)},1005025:p=>{t.$b("Reciprocal",p,void 0)},1005083:p=>{t.$b("Sqrt",p,void 0)},1005135:p=>{t.$b("Exp",p,void 0)},1005186:p=>{t.$b("Erf",p,void 0)},1005237:p=>{t.$b("Sigmoid",p,void 0)},1005292:(p,m,$)=>{t.$b("HardSigmoid",p,{alpha:m,beta:$})},1005371:p=>{t.$b("Log",p,void 0)},1005422:p=>{t.$b("Sin",p,void 0)},1005473:p=>{t.$b("Cos",p,void 0)},1005524:p=>{t.$b("Tan",p,void 0)},1005575:p=>{t.$b("Asin",p,void 0)},1005627:p=>{t.$b("Acos",p,void 0)},1005679:p=>{t.$b("Atan",p,void 0)},1005731:p=>{t.$b("Sinh",p,void 0)},1005783:p=>{t.$b("Cosh",p,void 0)},1005835:p=>{t.$b("Asinh",p,void 0)},1005888:p=>{t.$b("Acosh",p,void 0)},1005941:p=>{t.$b("Atanh",p,void 0)},1005994:p=>{t.$b("Tanh",p,void 0)},1006046:p=>{t.$b("Not",p,void 0)},1006097:(p,m,$)=>{t.$b("Clip",p,{min:m,max:$})},1006166:p=>{t.$b("Clip",p,void 0)},1006218:(p,m)=>{t.$b("Elu",p,{alpha:m})},1006276:p=>{t.$b("Gelu",p,void 0)},1006328:p=>{t.$b("Relu",p,void 0)},1006380:(p,m)=>{t.$b("LeakyRelu",p,{alpha:m})},1006444:(p,m)=>{t.$b("ThresholdedRelu",p,{alpha:m})},1006514:(p,m)=>{t.$b("Cast",p,{to:m})},1006572:p=>{t.$b("Add",p,void 0)},1006623:p=>{t.$b("Sub",p,void 0)},1006674:p=>{t.$b("Mul",p,void 0)},1006725:p=>{t.$b("Div",p,void 0)},1006776:p=>{t.$b("Pow",p,void 0)},1006827:p=>{t.$b("Equal",p,void 0)},1006880:p=>{t.$b("Greater",p,void 0)},1006935:p=>{t.$b("GreaterOrEqual",p,void 0)},1006997:p=>{t.$b("Less",p,void 0)},1007049:p=>{t.$b("LessOrEqual",p,void 0)},1007108:(p,m,$,_,M)=>{t.$b("ReduceMean",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1007283:(p,m,$,_,M)=>{t.$b("ReduceMax",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1007457:(p,m,$,_,M)=>{t.$b("ReduceMin",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1007631:(p,m,$,_,M)=>{t.$b("ReduceProd",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1007806:(p,m,$,_,M)=>{t.$b("ReduceSum",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1007980:(p,m,$,_,M)=>{t.$b("ReduceL1",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1008153:(p,m,$,_,M)=>{t.$b("ReduceL2",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1008326:(p,m,$,_,M)=>{t.$b("ReduceLogSum",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1008503:(p,m,$,_,M)=>{t.$b("ReduceSumSquare",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1008683:(p,m,$,_,M)=>{t.$b("ReduceLogSumExp",p,{keepDims:!!m,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1008863:p=>{t.$b("Where",p,void 0)},1008916:(p,m,$)=>{t.$b("Transpose",p,{perm:m?Array.from((v(),N).subarray(Number(m)>>>0,Number($)>>>0)):[]})},1009040:(p,m,$,_)=>{t.$b("DepthToSpace",p,{blocksize:m,mode:Je($),format:_?"NHWC":"NCHW"})},1009173:(p,m,$,_)=>{t.$b("DepthToSpace",p,{blocksize:m,mode:Je($),format:_?"NHWC":"NCHW"})},1009306:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe,fn)=>{t.$b("ConvTranspose",p,{format:te?"NHWC":"NCHW",autoPad:m,dilations:[$],group:_,kernelShape:[M],pads:[k,D],strides:[q],wIsConst:()=>!!(v(),z)[oe>>>0],outputPadding:Ee?Array.from((v(),N).subarray(Number(Ee)>>>0,Number(Re)>>>0)):[],outputShape:De?Array.from((v(),N).subarray(Number(De)>>>0,Number(qe)>>>0)):[],activation:Je(fn)})},1009739:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe)=>{t.$b("ConvTranspose",p,{format:q?"NHWC":"NCHW",autoPad:m,dilations:Array.from((v(),N).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),N).subarray(Number(M)>>>0,(Number(M)>>>0)+2>>>0)),pads:Array.from((v(),N).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),N).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(v(),z)[te>>>0],outputPadding:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],outputShape:Re?Array.from((v(),N).subarray(Number(Re)>>>0,Number(De)>>>0)):[],activation:Je(qe)})},1010400:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe,fn)=>{t.$b("ConvTranspose",p,{format:te?"NHWC":"NCHW",autoPad:m,dilations:[$],group:_,kernelShape:[M],pads:[k,D],strides:[q],wIsConst:()=>!!(v(),z)[oe>>>0],outputPadding:Ee?Array.from((v(),N).subarray(Number(Ee)>>>0,Number(Re)>>>0)):[],outputShape:De?Array.from((v(),N).subarray(Number(De)>>>0,Number(qe)>>>0)):[],activation:Je(fn)})},1010833:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe)=>{t.$b("ConvTranspose",p,{format:q?"NHWC":"NCHW",autoPad:m,dilations:Array.from((v(),N).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),N).subarray(Number(M)>>>0,(Number(M)>>>0)+2>>>0)),pads:Array.from((v(),N).subarray(Number(k)>>>0,(Number(k)>>>0)+4>>>0)),strides:Array.from((v(),N).subarray(Number(D)>>>0,(Number(D)>>>0)+2>>>0)),wIsConst:()=>!!(v(),z)[te>>>0],outputPadding:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],outputShape:Re?Array.from((v(),N).subarray(Number(Re)>>>0,Number(De)>>>0)):[],activation:Je(qe)})},1011494:(p,m)=>{t.$b("GlobalAveragePool",p,{format:m?"NHWC":"NCHW"})},1011585:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe)=>{t.$b("AveragePool",p,{format:qe?"NHWC":"NCHW",auto_pad:m,ceil_mode:$,count_include_pad:_,storage_order:M,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],strides:Re?Array.from((v(),N).subarray(Number(Re)>>>0,Number(De)>>>0)):[]})},1012064:(p,m)=>{t.$b("GlobalAveragePool",p,{format:m?"NHWC":"NCHW"})},1012155:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe)=>{t.$b("AveragePool",p,{format:qe?"NHWC":"NCHW",auto_pad:m,ceil_mode:$,count_include_pad:_,storage_order:M,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],strides:Re?Array.from((v(),N).subarray(Number(Re)>>>0,Number(De)>>>0)):[]})},1012634:(p,m)=>{t.$b("GlobalMaxPool",p,{format:m?"NHWC":"NCHW"})},1012721:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe)=>{t.$b("MaxPool",p,{format:qe?"NHWC":"NCHW",auto_pad:m,ceil_mode:$,count_include_pad:_,storage_order:M,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],strides:Re?Array.from((v(),N).subarray(Number(Re)>>>0,Number(De)>>>0)):[]})},1013196:(p,m)=>{t.$b("GlobalMaxPool",p,{format:m?"NHWC":"NCHW"})},1013283:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe)=>{t.$b("MaxPool",p,{format:qe?"NHWC":"NCHW",auto_pad:m,ceil_mode:$,count_include_pad:_,storage_order:M,dilations:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],kernel_shape:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],strides:Re?Array.from((v(),N).subarray(Number(Re)>>>0,Number(De)>>>0)):[]})},1013758:(p,m,$,_,M)=>{t.$b("Gemm",p,{alpha:m,beta:$,transA:_,transB:M})},1013862:p=>{t.$b("MatMul",p,void 0)},1013916:(p,m,$,_)=>{t.$b("ArgMax",p,{keepDims:!!m,selectLastIndex:!!$,axis:_})},1014024:(p,m,$,_)=>{t.$b("ArgMin",p,{keepDims:!!m,selectLastIndex:!!$,axis:_})},1014132:(p,m)=>{t.$b("Softmax",p,{axis:m})},1014195:(p,m)=>{t.$b("Concat",p,{axis:m})},1014255:(p,m,$,_,M)=>{t.$b("Split",p,{axis:m,numOutputs:$,splitSizes:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1014411:p=>{t.$b("Expand",p,void 0)},1014465:(p,m)=>{t.$b("Gather",p,{axis:Number(m)})},1014536:(p,m)=>{t.$b("GatherElements",p,{axis:Number(m)})},1014615:(p,m)=>{t.$b("GatherND",p,{batch_dims:Number(m)})},1014694:(p,m,$,_,M,k,D,q,te,oe,Ee)=>{t.$b("Resize",p,{antialias:m,axes:$?Array.from((v(),N).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Je(M),cubicCoeffA:k,excludeOutside:D,extrapolationValue:q,keepAspectRatioPolicy:Je(te),mode:Je(oe),nearestMode:Je(Ee)})},1015056:(p,m,$,_,M,k,D)=>{t.$b("Slice",p,{starts:m?Array.from((v(),N).subarray(Number(m)>>>0,Number($)>>>0)):[],ends:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[],axes:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[]})},1015320:p=>{t.$b("Tile",p,void 0)},1015372:(p,m,$)=>{t.$b("InstanceNormalization",p,{epsilon:m,format:$?"NHWC":"NCHW"})},1015486:(p,m,$)=>{t.$b("InstanceNormalization",p,{epsilon:m,format:$?"NHWC":"NCHW"})},1015600:p=>{t.$b("Range",p,void 0)},1015653:(p,m)=>{t.$b("Einsum",p,{equation:Je(m)})},1015734:(p,m,$,_,M)=>{t.$b("Pad",p,{mode:m,value:$,pads:_?Array.from((v(),N).subarray(Number(_)>>>0,Number(M)>>>0)):[]})},1015877:(p,m,$,_,M,k)=>{t.$b("BatchNormalization",p,{epsilon:m,momentum:$,spatial:!!M,trainingMode:!!_,format:k?"NHWC":"NCHW"})},1016046:(p,m,$,_,M,k)=>{t.$b("BatchNormalization",p,{epsilon:m,momentum:$,spatial:!!M,trainingMode:!!_,format:k?"NHWC":"NCHW"})},1016215:(p,m,$)=>{t.$b("CumSum",p,{exclusive:Number(m),reverse:Number($)})},1016312:(p,m,$)=>{t.$b("DequantizeLinear",p,{axis:m,blockSize:$})},1016402:(p,m,$,_,M)=>{t.$b("GridSample",p,{align_corners:m,mode:Je($),padding_mode:Je(_),format:M?"NHWC":"NCHW"})},1016572:(p,m,$,_,M)=>{t.$b("GridSample",p,{align_corners:m,mode:Je($),padding_mode:Je(_),format:M?"NHWC":"NCHW"})},1016742:(p,m)=>{t.$b("ScatterND",p,{reduction:Je(m)})},1016827:(p,m,$,_,M,k,D,q,te)=>{t.$b("Attention",p,{numHeads:m,isUnidirectional:$,maskFilterValue:_,scale:M,doRotary:k,qkvHiddenSizes:D?Array.from((v(),N).subarray(Number(q)>>>0,Number(q)+D>>>0)):[],pastPresentShareBuffer:!!te})},1017099:p=>{t.$b("BiasAdd",p,void 0)},1017154:p=>{t.$b("BiasSplitGelu",p,void 0)},1017215:p=>{t.$b("FastGelu",p,void 0)},1017271:(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe,fn,Ua)=>{t.$b("Conv",p,{format:Re?"NHWC":"NCHW",auto_pad:m,dilations:$?Array.from((v(),N).subarray(Number($)>>>0,Number(_)>>>0)):[],group:M,kernel_shape:k?Array.from((v(),N).subarray(Number(k)>>>0,Number(D)>>>0)):[],pads:q?Array.from((v(),N).subarray(Number(q)>>>0,Number(te)>>>0)):[],strides:oe?Array.from((v(),N).subarray(Number(oe)>>>0,Number(Ee)>>>0)):[],w_is_const:()=>!!(v(),z)[Number(De)>>>0],activation:Je(qe),activation_params:fn?Array.from((v(),K).subarray(Number(fn)>>>0,Number(Ua)>>>0)):[]})},1017855:p=>{t.$b("Gelu",p,void 0)},1017907:(p,m,$,_,M,k,D,q,te)=>{t.$b("GroupQueryAttention",p,{numHeads:m,kvNumHeads:$,scale:_,softcap:M,doRotary:k,rotaryInterleaved:D,smoothSoftmax:q,localWindowSize:te})},1018124:(p,m,$,_)=>{t.$b("LayerNormalization",p,{axis:m,epsilon:$,simplified:!!_})},1018235:(p,m,$,_)=>{t.$b("LayerNormalization",p,{axis:m,epsilon:$,simplified:!!_})},1018346:(p,m,$,_,M,k)=>{t.$b("MatMulNBits",p,{k:m,n:$,accuracyLevel:_,bits:M,blockSize:k})},1018473:(p,m,$,_,M,k)=>{t.$b("MultiHeadAttention",p,{numHeads:m,isUnidirectional:$,maskFilterValue:_,scale:M,doRotary:k})},1018632:(p,m)=>{t.$b("QuickGelu",p,{alpha:m})},1018696:(p,m,$,_,M)=>{t.$b("RotaryEmbedding",p,{interleaved:!!m,numHeads:$,rotaryEmbeddingDim:_,scale:M})},1018835:(p,m,$)=>{t.$b("SkipLayerNormalization",p,{epsilon:m,simplified:!!$})},1018937:(p,m,$)=>{t.$b("SkipLayerNormalization",p,{epsilon:m,simplified:!!$})},1019039:(p,m,$,_)=>{t.$b("GatherBlockQuantized",p,{gatherAxis:m,quantizeAxis:$,blockSize:_})},1019160:p=>{t.Fd(p)},1019194:(p,m)=>t.Hd(Number(p),Number(m),t.Yc.Kd,t.Yc.errors)};function J3(p,m,$){return c0(async()=>{await t.Dd(Number(p),Number(m),Number($))})}function eS(){return typeof wasmOffsetConverter<"u"}function tS(p,m,$,_){var M=Ce();try{return H0(p,m,$,_)}catch(k){if(Ie(M),k!==k+0)throw k;ke(1,0)}}function nS(p,m,$){var _=Ce();try{return G0(p,m,$)}catch(M){if(Ie(_),M!==M+0)throw M;ke(1,0)}}function rS(p){var m=Ce();try{U0(p)}catch($){if(Ie(m),$!==$+0)throw $;ke(1,0)}}function iS(p,m){var $=Ce();try{return Pa(p,m)}catch(_){if(Ie($),_!==_+0)throw _;ke(1,0)}}function oS(p,m,$){var _=Ce();try{D0(p,m,$)}catch(M){if(Ie(_),M!==M+0)throw M;ke(1,0)}}function sS(p,m){var $=Ce();try{j0(p,m)}catch(_){if(Ie($),_!==_+0)throw _;ke(1,0)}}function aS(p,m,$,_,M,k,D){var q=Ce();try{return q0(p,m,$,_,M,k,D)}catch(te){if(Ie(q),te!==te+0)throw te;ke(1,0)}}function uS(p,m,$,_,M,k){var D=Ce();try{L0(p,m,$,_,M,k)}catch(q){if(Ie(D),q!==q+0)throw q;ke(1,0)}}function lS(p,m,$,_){var M=Ce();try{V0(p,m,$,_)}catch(k){if(Ie(M),k!==k+0)throw k;ke(1,0)}}function cS(p,m,$,_,M){var k=Ce();try{F0(p,m,$,_,M)}catch(D){if(Ie(k),D!==D+0)throw D;ke(1,0)}}function dS(p,m,$,_,M,k,D){var q=Ce();try{Y0(p,m,$,_,M,k,D)}catch(te){if(Ie(q),te!==te+0)throw te;ke(1,0)}}function pS(p,m,$,_,M,k,D){var q=Ce();try{X0(p,m,$,_,M,k,D)}catch(te){if(Ie(q),te!==te+0)throw te;ke(1,0)}}function hS(p,m,$,_,M,k,D,q){var te=Ce();try{ey(p,m,$,_,M,k,D,q)}catch(oe){if(Ie(te),oe!==oe+0)throw oe;ke(1,0)}}function fS(p,m,$,_,M){var k=Ce();try{return K0(p,m,$,_,M)}catch(D){if(Ie(k),D!==D+0)throw D;ke(1,0)}}function mS(p,m,$){var _=Ce();try{return ty(p,m,$)}catch(M){if(Ie(_),M!==M+0)throw M;ke(1,0)}}function gS(p,m,$,_,M,k,D,q){var te=Ce();try{ny(p,m,$,_,M,k,D,q)}catch(oe){if(Ie(te),oe!==oe+0)throw oe;ke(1,0)}}function yS(p,m,$,_,M,k,D,q,te,oe,Ee,Re){var De=Ce();try{Q0(p,m,$,_,M,k,D,q,te,oe,Ee,Re)}catch(qe){if(Ie(De),qe!==qe+0)throw qe;ke(1,0)}}function wS(p,m,$,_,M,k){var D=Ce();try{return Z0(p,m,$,_,M,k)}catch(q){if(Ie(D),q!==q+0)throw q;ke(1,0)}}function _S(p,m,$){var _=Ce();try{return ry(p,m,$)}catch(M){if(Ie(_),M!==M+0)throw M;return ke(1,0),0n}}function bS(p,m,$,_,M,k,D,q,te){var oe=Ce();try{W0(p,m,$,_,M,k,D,q,te)}catch(Ee){if(Ie(oe),Ee!==Ee+0)throw Ee;ke(1,0)}}function $S(p){var m=Ce();try{return iy(p)}catch($){if(Ie(m),$!==$+0)throw $;ke(1,0)}}function xS(p,m){var $=Ce();try{return _y(p,m)}catch(_){if(Ie($),_!==_+0)throw _;return ke(1,0),0n}}function vS(p){var m=Ce();try{return oy(p)}catch($){if(Ie(m),$!==$+0)throw $;return ke(1,0),0n}}function SS(p,m,$,_){var M=Ce();try{return dy(p,m,$,_)}catch(k){if(Ie(M),k!==k+0)throw k;ke(1,0)}}function ES(p,m,$,_,M){var k=Ce();try{return py(p,m,$,_,M)}catch(D){if(Ie(k),D!==D+0)throw D;ke(1,0)}}function TS(p,m,$,_,M,k){var D=Ce();try{return hy(p,m,$,_,M,k)}catch(q){if(Ie(D),q!==q+0)throw q;ke(1,0)}}function MS(p,m,$,_,M,k){var D=Ce();try{return fy(p,m,$,_,M,k)}catch(q){if(Ie(D),q!==q+0)throw q;ke(1,0)}}function IS(p,m,$,_,M,k,D,q){var te=Ce();try{return J0(p,m,$,_,M,k,D,q)}catch(oe){if(Ie(te),oe!==oe+0)throw oe;ke(1,0)}}function CS(p,m,$,_,M){var k=Ce();try{return my(p,m,$,_,M)}catch(D){if(Ie(k),D!==D+0)throw D;return ke(1,0),0n}}function kS(p,m,$,_){var M=Ce();try{return gy(p,m,$,_)}catch(k){if(Ie(M),k!==k+0)throw k;ke(1,0)}}function AS(p,m,$,_){var M=Ce();try{return yy(p,m,$,_)}catch(k){if(Ie(M),k!==k+0)throw k;ke(1,0)}}function RS(p,m,$,_,M,k,D,q,te,oe,Ee,Re){var De=Ce();try{return wy(p,m,$,_,M,k,D,q,te,oe,Ee,Re)}catch(qe){if(Ie(De),qe!==qe+0)throw qe;ke(1,0)}}function OS(p,m,$,_,M,k,D,q,te,oe,Ee){var Re=Ce();try{ly(p,m,$,_,M,k,D,q,te,oe,Ee)}catch(De){if(Ie(Re),De!==De+0)throw De;ke(1,0)}}function NS(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe,fn,Ua){var DS=Ce();try{cy(p,m,$,_,M,k,D,q,te,oe,Ee,Re,De,qe,fn,Ua)}catch(La){if(Ie(DS),La!==La+0)throw La;ke(1,0)}}function zS(p,m,$){var _=Ce();try{return sy(p,m,$)}catch(M){if(Ie(_),M!==M+0)throw M;ke(1,0)}}function BS(p,m,$){var _=Ce();try{return ay(p,m,$)}catch(M){if(Ie(_),M!==M+0)throw M;ke(1,0)}}function PS(p,m,$,_){var M=Ce();try{uy(p,m,$,_)}catch(k){if(Ie(M),k!==k+0)throw k;ke(1,0)}}function Ii(){if(0<ve)Te=Ii;else if(i)y==null||y(t),P();else{for(var p=ye;0<p.length;)p.shift()(t);0<ve?Te=Ii:(t.calledRun=!0,I||(P(),y==null||y(t)))}}return i||(tn=await X(),Ii()),t.PTR_SIZE=4,A?t:new Promise((p,m)=>{y=p,w=m})}var lu,cu,jy=J(()=>{var e,t;lu=uu,cu=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),cu&&uu()}),Pi,Di,du,ft,pu,Cr,hu,fu,Ui,mu,Li,gu,Fi,yu,Gi=J(()=>{Ni(),Pi=typeof location>"u"?void 0:location.origin,Di=self.location.href>"file:"&&self.location.href<"file;",du=()=>{{if(Di){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Pi).href}return self.location.href}},ft=du(),pu=()=>{if(ft&&!ft.startsWith("blob:"))return ft.substring(0,ft.lastIndexOf("/")+1)},Cr=(e,t)=>{try{let n=t??ft;return(n?new URL(e,n):new URL(e)).origin===Pi}catch{return!1}},hu=(e,t)=>{let n=t??ft;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},fu=(e,t)=>`${t??"./"}${e}`,Ui=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},mu=async e=>(await import(e)).default,Li=(Hy(),Yn(ou)).default,gu=async()=>{if(!ft)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Cr(ft))return[void 0,Li()];let e=await Ui(ft);return[e,Li(e)]},Fi=(jy(),Yn(au)).default,yu=async(e,t,n,r)=>{let i=Fi&&!(e||t);if(i)if(ft)i=Cr(ft)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Fi];{let o="ort-wasm-simd-threaded.jsep.mjs",s=e??hu(o,t),a=n&&s&&!Cr(s,t),u=a?await Ui(s):s??fu(o,t);return[a?u:void 0,await mu(u)]}}}),Wi,kr,Zn,qi,wu,_u,bu,Vi,Ue,wn=J(()=>{Gi(),kr=!1,Zn=!1,qi=!1,wu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_u=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},bu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Vi=async e=>{if(kr)return Promise.resolve();if(Zn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(qi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!bu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!_u())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=wu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,a=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,c=e.wasmBinary,[d,h]=await yu(a,o,n>1,!!c||!!l),g=!1,f=[];if(t>0&&f.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),f.push(new Promise((y,w)=>{let b={numThreads:n};if(c)b.wasmBinary=c,b.locateFile=x=>x;else if(l||o)b.locateFile=x=>l??o+x;else if(a&&a.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,a).href;else if(d){let x=pu();x&&(b.locateFile=T=>x+T)}h(b).then(x=>{Zn=!1,kr=!0,Wi=x,y(),d&&URL.revokeObjectURL(d)},x=>{Zn=!1,qi=!0,w(x)})})),await Promise.race(f),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ue=()=>{if(kr&&Wi)return Wi;throw new Error("WebAssembly is not initialized yet.")}}),vt,Ar,ze,Hi=J(()=>{wn(),vt=(e,t)=>{let n=Ue(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Ar=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,o])=>{let s=t?t+i:i;if(typeof o=="object")Ar(o,s+".",n,r);else if(typeof o=="string"||typeof o=="number")r(s,o.toString());else if(typeof o=="boolean")r(s,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},ze=e=>{let t=Ue(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let o=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),a=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(n)}}}),$u,Ky=J(()=>{wn(),Hi(),$u=e=>{let t=Ue(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=vt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),n===0&&ze("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ar(e.extra,"",new WeakSet,(s,a)=>{let u=vt(s,r),l=vt(a,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&ze(`Can't set a run config entry: ${s} - ${a}.`)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),o}}}),xu,vu,Su,_n,Eu,Tu,Yy=J(()=>{wn(),Hi(),xu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Su=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},_n=(e,t,n,r)=>{let i=vt(t,r),o=vt(n,r);Ue()._OrtAddSessionConfigEntry(e,i,o)!==0&&ze(`Can't set a session config entry: ${t} - ${n}.`)},Eu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let o=typeof i=="string"?i:i.name,s=[];switch(o){case"webnn":if(o="WEBNN",_n(e,"session.disable_quant_qdq","1",n),_n(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&_n(e,"deviceType",d,n)}break;case"webgpu":if(o="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);_n(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let a=vt(o,n),u=s.length,l=0,c=0;if(u>0){l=Ue()._malloc(u*Ue().PTR_SIZE),n.push(l),c=Ue()._malloc(u*Ue().PTR_SIZE),n.push(c);for(let d=0;d<u;d++)Ue().setValue(l+d*Ue().PTR_SIZE,s[d][0],"*"),Ue().setValue(c+d*Ue().PTR_SIZE,s[d][1],"*")}await Ue()._OrtAppendExecutionProvider(e,a,l,c,u)!==0&&ze(`Can't append execution provider: ${o}.`)}},Tu=async e=>{let t=Ue(),n=0,r=[],i=e||{};Su(i);try{let o=xu(i.graphOptimizationLevel??"all"),s=vu(i.executionMode??"sequential"),a=typeof i.logId=="string"?vt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof i.optimizedModelFilePath=="string"?vt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,a,u,l,c),n===0&&ze("Can't create session options."),i.executionProviders&&await Eu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);_n(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,h]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let g=vt(d,r);t._OrtAddFreeDimensionOverride(n,g,h)!==0&&ze(`Can't set a free dimension override: ${d} - ${h}.`)}return i.extra!==void 0&&Ar(i.extra,"",new WeakSet,(d,h)=>{_n(n,d,h,r)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ze("Can't release session options."),r.forEach(s=>t._free(s)),o}}}),bn,jt,$n,Rr,Or,ji,Ki,Yi,_e=J(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},$n=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return n>0?Math.ceil(r*n):void 0},Rr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Or=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ji=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ki=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Xi,Mu=J(()=>{Ni(),Xi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(a){if(a instanceof RangeError){let u=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw a}let s=0;for(;;){let{done:a,value:u}=await i.read();if(a)break;let l=u.byteLength;new Uint8Array(o,s,l).set(u),s+=l}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Iu,Cu,ku,Au,Qi,Ru,Ae,Kt=J(()=>{_e(),Iu=["V","I","W","E","F"],Cu=(e,t)=>{console.log(`[${Iu[e]},${new Date().toISOString()}]${t}`)},Qi=(e,t)=>{ku=e,Au=t},Ru=(e,t)=>{let n=Or(e),r=Or(ku);n>=r&&Cu(n,typeof t=="function"?t():t)},Ae=(...e)=>{Au&&Ru(...e)}}),Ou,Pn,F,Nr,Nu,zu,Bu,$e=J(()=>{Ou=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Pn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),s=new Array(o);if(n){if(r<2||i<2)return;let a=Ou.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(a===void 0)return;[s[o-2],s[o-1]]=a}for(let a=n?3:1;a<=o;a++){let u=r-a<0?1:e[r-a],l=i-a<0?1:t[i-a];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)s[o-a]=Math.max(u,l);else{if(c>1)return;s[o-a]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},F=class Ci{static size(t){return Ci.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),o=r-1;for(;o>=0;){if(t[o]%n===0){i[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,n/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ci.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ci.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let o=n;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,o)=>i+n[o]+n[o+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Nr=class Er{static adjustPoolAttributes(t,n,r,i,o,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let a=0;a<n.length-2;a++)a>=r.length?r.push(n[a+2]):r[a]=n[a+2];for(let a=0;a<r.length;a++)if(a<i.length){if(i[a]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let a=0;a<r.length;a++)if(a<o.length){if(o[a]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let a=0;a<r.length*2;a++)if(a<s.length){if(s[a]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let a=0;a<r.length;a++){if(r[a]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[a]>=r[a]||s[a+r.length]>=r[a])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,o,s,a){if(a){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Er.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],o,u,u+t.length-2,a)}}static computePoolOutputShape(t,n,r,i,o,s,a){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Er.computeShapeHelper(t,n,u,r,i,o,s,a),u}static computeConvOutputShape(t,n,r,i,o,s,a){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Er.computeShapeHelper(!1,t,u,r,i,o,s,a),u}static computeShapeHelper(t,n,r,i,o,s,a,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Er.adjustPadAndReturnShape(n[l+2],i[l],o[l],s[l],a,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,o,s,a,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return o[s]=0,o[a]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return o[s]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),o[a]=c-o[s],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[s]+o[a]-l)/n+1)}},Nu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,s,a;t?(o=e[1],s=e[0]):(o=e[0],s=e[1]);let u=-1;if(r?(a=n[0],u=1):(a=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(o<=0||a<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Pn.isValidBroadcast(i,[o,a]))throw new Error("gemm: invalid bias shape for broadcast");return[o,a,s]}},zu=-34028234663852886e22,Bu=34028234663852886e22}),Zi,Pu=J(()=>{_e(),Zi=(e,t)=>new(Rr(t))(e)}),Ji,eo,to,Du,no,Uu,ro,io,oo,Lu,Fu,Xy=J(()=>{_e(),Kt(),Ji=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),eo=(e,t)=>{if(t==="int32")return e;let n=Ji.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,o=new(Rr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let a=0;a<i;a++){let u=o[a];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[a]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(a=>a>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(o,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},to=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Du=1,no=()=>Du++,Uu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ro=(e,t)=>{let n=Ji.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},io=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:o,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=o,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ro(this.dataType,this.tensorShape)}destroy(){Ae("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=to(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},oo=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),s;if(!(o!=null&&o.input.dataTypes.includes(t))){if(s=Uu.get(t),!s||(o==null?void 0:o.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);Ae("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==ro(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=eo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ae("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?to(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Lu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=no();return this.tensorTrackersById.set(e,new oo(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ae("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ae("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),o=no(),s=new io({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(o,new oo(this,s)),this.externalTensors.add(s),o}async getCachedTensor(e,t,n,r,i,o,s){let a=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(a,t,n)){Ae("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Ae("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await a.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:o});return new io({sessionId:e,context:a,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Fu=(...e)=>new Lu(...e)}),Jn,Gu,Wu,Qy=J(()=>{_e(),wn(),Pu(),Xy(),Kt(),Jn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Gu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,o)=>i===r[o]&&e[i]===t[i])},Wu=class{constructor(e){this.tensorManager=Fu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ae("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ae("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ae("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Gu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ae("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let o=Jn.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,i)}async createTemporaryTensor(e,t,n){Ae("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Jn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ue().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ae("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Zi(n,t)}}registerMLTensor(e,t,n,r){let i=Jn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,i,r);return Ae("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,r,i,o,s=!1){if(!o)throw new Error("External mounted files are not available.");let a=e;e.startsWith("./")&&(a=e.substring(2));let u=o.get(a);if(!u)throw new Error(`File with name ${a} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(s){let d=eo(new Uint8Array(l),"int64");c=new Int32Array(d.buffer),i.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ae("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Jn.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),so=J(()=>{}),ao,zr,Br,qu,Vu,uo,lo,Hu,ju,Zy=J(()=>{Kt(),so(),ao=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),zr=[],Br=e=>Math.ceil(Number(e)/16)*16,qu=e=>{for(let t=0;t<zr.length;t++){let n=zr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Vu=1,uo=()=>Vu++,lo=async(e,t,n,r)=>{let i=Br(n),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let a=o.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(a,0,n)),u}else return new Uint8Array(a.slice(0,n))}finally{o.destroy()}},Hu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ao)zr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,o=Br(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let a=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=a.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),a.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(a,0,s.gpuData.buffer,0,o),this.backend.device.queue.submit([l.finish()]),a.destroy(),Ae("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Br(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ae("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=uo();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ae("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ae("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=qu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let a=(i?this.freeBuffers:this.freeUniformBuffers).get(n);a?a.length>0?r=a.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:uo(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Ae("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ae("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await lo(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ao.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ae("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ju=(...e)=>new Hu(...e)}),Ku,Ne,Ye=J(()=>{Ku=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new Ku(e)}),Dn,Pr,et,st,fe,je,co,Un,rn,pe,er,H,ce,Yu,po,Xu,Qu,xe=J(()=>{_e(),$e(),Dn=64,Pr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},et=(e,t=1)=>{let n=Pr(e,t);return typeof n=="string"?n:n[0]},st=(e,t=1)=>{let n=Pr(e,t);return typeof n=="string"?n:n[1]},fe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:F.computeStrides(n)})}),t},je=e=>e%4===0?4:e%2===0?2:1,co=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Un=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,rn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,er=(e,t,n,r,i)=>{let o=typeof n=="number",s=o?n:n.length,a=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=Pr(t,i),c=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],h={indices:u,value:c,storage:d,tensor:t},g=A=>typeof A=="string"?A:`${A}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=o?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let A=0;A<s-1;A++)x+=`
    let dim${A} = current / ${pe(b,A,s)};
    let rest${A} = current % ${pe(b,A,s)};
    indices[${A}] = dim${A};
    current = rest${A};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=A=>(f.offsetToIndices=!0,s<2?A:`o2i_${e}(${A})`),E=[];if(s>=2)for(let A=s-1;A>=0;A--)E.push(`${pe(b,A,s)} * (indices[${A}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=A=>(f.indicesToOffset=!0,s<2?A:`i2o_${e}(${A})`),v=(...A)=>s===0?"0u":`${h.indices}(${A.map(g).join(",")})`,R=(A,O)=>s<2?`${A}`:`${pe(A,O,s)}`,z=(A,O,P)=>s<2?`${A}=${P};`:`${pe(A,O,s)}=${P};`,Y={},U=(A,O)=>{f.broadcastedIndicesToOffset=!0;let P=`${O.name}broadcastedIndicesTo${e}Offset`;if(P in Y)return`${P}(${A})`;let B=[];for(let V=s-1;V>=0;V--){let X=O.indicesGet("outputIndices",V+O.rank-s);B.push(`${R(b,V)} * (${X} % ${R(w,V)})`)}return Y[P]=`fn ${P}(outputIndices: ${O.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${P}(${A})`},G=(A,O)=>(()=>{if(h.storage===h.value)return`${e}[${A}]=${O};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${A}]=vec2<u32>(u32(${O}), select(0u, 0xFFFFFFFFu, ${O} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${A}]=vec2<u32>(u32(${O}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${A}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${O}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),N=A=>(()=>{if(h.storage===h.value)return`${e}[${A}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${A}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${A}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${A}] & 0xFFu), bool(${e}[${A}] & 0xFF00u), bool(${e}[${A}] & 0xFF0000u), bool(${e}[${A}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),W=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${N(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let A=a.map(P=>`d${P}: u32`).join(", "),O=a.map(P=>`d${P}`).join(", ");return`
  fn get_${e}(${A}) -> ${c} {
    return get_${e}ByIndices(${v(O)});
  }`})(),Z=(...A)=>{if(A.length!==s)throw new Error(`indices length must be ${s}`);let O=A.map(g).join(",");return s===0?N("0u"):s===1?N(O[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}(${O})`)},me=A=>s<2?N(A):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}ByIndices(${A})`),L=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,ee=s<2?"":(()=>{let A=a.map(P=>`d${P}: u32`).join(", "),O=a.map(P=>`d${P}`).join(", ");return`
  fn set_${e}(${A}, value: ${c}) {
    set_${e}ByIndices(${v(O)}, value);
  }`})();return{impl:()=>{let A=[],O=!1;return f.offsetToIndices&&(A.push(T),O=!0),f.indicesToOffset&&(A.push(I),O=!0),f.broadcastedIndicesToOffset&&(Object.values(Y).forEach(P=>A.push(P)),O=!0),f.set&&(A.push(ee),O=!0),f.setByIndices&&(A.push(L),O=!0),f.get&&(A.push(K),O=!0),f.getByIndices&&(A.push(W),O=!0),!o&&O&&A.unshift(`const ${w} = ${h.indices}(${n.join(",")});`,`const ${b} = ${h.indices}(${F.computeStrides(n).join(",")});`),A.join(`
`)},type:h,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:U,indices:v,indicesGet:R,indicesSet:z,set:(...A)=>{if(A.length!==s+1)throw new Error(`indices length must be ${s}`);let O=A[s];if(typeof O!="string")throw new Error("value must be string");let P=A.slice(0,s).map(g).join(",");return s===0?G("0u",O):s===1?G(P[0],O):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}(${P}, ${O})`)},setByOffset:G,setByIndices:(A,O)=>s<2?G(A,O):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}ByIndices(${A}, ${O});`),get:Z,getByOffset:N,getByIndices:me,usage:r,name:e,strides:b,shape:w,rank:s}},H=(e,t,n,r=1)=>er(e,t,n,"input",r),ce=(e,t,n,r=1)=>er(e,t,n,"output",r),Yu=(e,t,n)=>er(e,t,n,"atomicOutput",1),po=(e,t,n,r=1)=>er(e,t,n,"internal",r),Xu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Dn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${o}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Qu=(e,t)=>new Xu(e,t)}),Zu,ho,Ju,el,tl,nl,mt,rl,il,on=J(()=>{_e(),$e(),Ye(),xe(),Zu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ho=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ju=(e,t)=>F.sortBasedOnPerm(e,ho(e.length,t)),el=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},tl=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},nl=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},mt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ho(r,t),o=Ju(e.dims,i),s=e.dims,a=o,u=r<2||nl(i,e.dims),l;if(u)return l=f=>{let y=H("input",n,s,4),w=ce("output",n,a,4);return`
  ${f.registerUniform("output_size","u32").declareVariables(y,w)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let f=F.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(f/4)}]}},getShaderSource:l};let{newShape:c,newPerm:d}=tl(e.dims,i),h=F.areEqual(d,[2,3,1]),g=F.areEqual(d,[3,1,2]);if(c.length===2||h||g){s=h?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,a=[s[1],s[0]];let f=16;return l=y=>{let w=H("a",n,s.length),b=ce("output",n,a.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${f+1}>, ${f}>;
  ${y.mainStart([f,f,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${f} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${f}u + local_id.x;
    let input_row = workgroup_id_x * ${f}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${f}u + local_id.x;
    let output_row = workgroup_id_y * ${f}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=F.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(a[1]/f),y:Math.ceil(a[0]/f)},programUniforms:[{type:12,data:y},...fe(s,a)]}},getShaderSource:l}}return l=f=>{let y=H("a",n,s.length),w=ce("output",n,a.length);return`
  ${f.registerUniform("output_size","u32").declareVariables(y,w)}

  ${el(i,r,y,w)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let f=F.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...fe(s,a)]}},getShaderSource:l}},rl=(e,t)=>{Zu(e.inputs,t.perm),e.compute(mt(e.inputs[0],t.perm))},il=e=>Ne({perm:e.perm})}),ol,sl,al,ul,ll,cl,dl,pl,hl,fl,St,ml,gl,yl,wl,_l,bl,$l,xl,vl,Sl,Jy=J(()=>{_e(),$e(),xe(),mo(),on(),ol={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},sl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},al={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ul={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},ll=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},cl=(e,t)=>{let n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);let i=t.map(o=>e[o]);return[n,i]},dl=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(e[i++]):r.push(1);return r},pl=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},hl=(e,t)=>{let n=[];if(!pl(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},fl=(e,t,n,r,i,o,s)=>{let a=n[0].dims,u=F.size(o),l=F.size(s),c=H("_A",n[0].dataType,a),d=ce("output",i,o),h=64;u===1&&(h=256);let g=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,f=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,d)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${al[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${ol[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${sl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${ul[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},St=(e,t,n,r)=>{let i=e.inputs.length===1?n:fo(e.inputs,n),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((g,f)=>f));let s=F.normalizeAxes(o,e.inputs[0].dims.length),a=s,u=e.inputs[0],l=hl(a,e.inputs[0].dims.length);l.length>0&&(u=e.compute(mt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],a=ll(a.length,u.dims.length));let[c,d]=cl(u.dims,a),h=c;i.keepDims&&(h=dl(c,s)),e.compute(fl(t,i.cacheKey,[u],r,e.inputs[0].dataType,h,d),{inputs:[u]})},ml=(e,t)=>{St(e,"ReduceMeanShared",t,"mean")},gl=(e,t)=>{St(e,"ReduceL1Shared",t,"l1")},yl=(e,t)=>{St(e,"ReduceL2Shared",t,"l2")},wl=(e,t)=>{St(e,"ReduceLogSumExpShared",t,"logSumExp")},_l=(e,t)=>{St(e,"ReduceMaxShared",t,"max")},bl=(e,t)=>{St(e,"ReduceMinShared",t,"min")},$l=(e,t)=>{St(e,"ReduceProdShared",t,"prod")},xl=(e,t)=>{St(e,"ReduceSumShared",t,"sum")},vl=(e,t)=>{St(e,"ReduceSumSquareShared",t,"sumSquare")},Sl=(e,t)=>{St(e,"ReduceLogSumShared",t,"logSum")}}),Et,El,Dr,fo,Tt,Tl,Ml,Il,Cl,kl,Al,Rl,Ol,Nl,zl,Mt,Bl,Pl,Dl,Ul,Ll,Fl,Gl,Wl,ql,Vl,mo=J(()=>{_e(),$e(),Ye(),xe(),Jy(),Et=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},El=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Dr=(e,t,n,r,i,o,s=!1,a=!1)=>{let u=[],l=n[0].dims,c=l.length,d=F.normalizeAxes(i,c),h=!a&&d.length===0;l.forEach((y,w)=>{h||d.indexOf(w)>=0?s&&u.push(1):u.push(y)});let g=u.length,f=F.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=H("_A",n[0].dataType,c),x=ce("output",o,g),T=r(b,x,d),S=T[2];for(let E=0,I=0;E<c;E++)h||d.indexOf(E)>=0?(s&&I++,S=`for(var j${E}: u32 = 0; j${E} < ${l[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${b.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(w.push(`${b.indicesSet("input_indices",E,x.indicesGet("output_indices",I))};`),I++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...fe(l,u)]})}},fo=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Ne({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Tt=(e,t,n,r)=>{let i=e.inputs,o=i.length===1?n:fo(i,n);e.compute(Dr(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?El:r,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},Tl=(e,t)=>{Et(e.inputs),Tt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Ml=(e,t)=>{Et(e.inputs),Tt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Il=(e,t)=>{Et(e.inputs),Tt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Cl=(e,t)=>{Et(e.inputs),Tt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},kl=(e,t)=>{Et(e.inputs),Tt(e,"ReduceMax",t,(n,r,i)=>{let o=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&o.push(n.indicesSet("input_indices",s,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Al=(e,t)=>{Et(e.inputs),Tt(e,"ReduceMean",t,(n,r,i)=>{let o=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(o*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},Rl=(e,t)=>{Et(e.inputs),Tt(e,"ReduceMin",t,(n,r,i)=>{let o=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Ol=(e,t)=>{Et(e.inputs),Tt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Nl=(e,t)=>{Et(e.inputs),Tt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},zl=(e,t)=>{Et(e.inputs),Tt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Mt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:i*=e[o];return i<32&&r>1024},Bl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Al(e,t):ml(e,t)},Pl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):gl(e,t)},Dl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Il(e,t):yl(e,t)},Ul=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cl(e,t):wl(e,t)},Ll=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?kl(e,t):_l(e,t)},Fl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rl(e,t):bl(e,t)},Gl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ol(e,t):$l(e,t)},Wl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nl(e,t):xl(e,t)},ql=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zl(e,t):vl(e,t)},Vl=(e,t)=>{Mt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tl(e,t):Sl(e,t)}}),go,Hl,jl,yo,ew=J(()=>{_e(),Ye(),mo(),go=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Hl=(e,t)=>{go(e.inputs);let n=(r,i,o)=>{let s=[];for(let a=0;a<r.rank;a++)(o.indexOf(a)>=0||o.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Dr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},jl=(e,t)=>{go(e.inputs);let n=(r,i,o)=>{let s=[];for(let a=0;a<r.rank;a++)(o.indexOf(a)>=0||o.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Dr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},yo=e=>Ne(e)}),Kl,Ur,Yl,Xl,Ql,tr,Zl,Jl,wo=J(()=>{_e(),$e(),so(),xe(),Kl=(e,t)=>{let n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5];if(s&&a)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,h=d,g=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let f=l;if(d!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+h+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(h!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let w=f+y,b=-1,x=0;if(o)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(a){if(a.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(a.dims[0]!==u||a.dims[1]!==t.numHeads||a.dims[2]!==l||a.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:f,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:d,vHiddenSize:g,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ur=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Yl=(e,t,n,r,i,o,s,a)=>{let u=je(s?1:o),l=64,c=o/u;c<l&&(l=32);let d=Math.ceil(o/u/l),h=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:d}],g=et(e.dataType,u),f=st(1,u),y=["type"];s&&y.push("type"),a&&y.push("type");let w=b=>{let x=ce("x",e.dataType,e.dims,u),T=[x],S=s?H("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let E=a?H("total_sequence_length_input",a.dataType,a.dims):void 0;E&&T.push(E);let I=st(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(C).declareVariables(...T)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ur(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${f}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${x.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${g};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:h})}},Xl=(e,t,n,r,i,o,s,a,u)=>{let l=s+o.kvSequenceLength,c=[o.batchSize,o.numHeads,o.sequenceLength,l],d=e>1&&r,h=o.kvNumHeads?o.kvNumHeads:o.numHeads,g=d?[o.batchSize,h,l,o.headSize]:void 0,f=o.nReps?o.nReps:1,y=o.scale===0?1/Math.sqrt(o.headSize):o.scale,w=je(o.headSize),b=o.headSize/w,x=12,T={x:Math.ceil(l/x),y:Math.ceil(o.sequenceLength/x),z:o.batchSize*o.numHeads},S=[{type:12,data:o.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:o.kvSequenceLength},{type:12,data:f}],E=d&&r&&F.size(r.dims)>0,I=["type","type"];E&&I.push("type"),i&&I.push("type"),a&&I.push("type"),u&&I.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];d&&C.push({dims:g,dataType:t.dataType,gpuDataType:0});let v=R=>{let z=H("q",t.dataType,t.dims,w),Y=H("key",n.dataType,n.dims,w),U=[z,Y];if(E){let L=H("past_key",r.dataType,r.dims,w);U.push(L)}i&&U.push(H("attention_bias",i.dataType,i.dims));let G=a?H("seq_lens",a.dataType,a.dims):void 0;G&&U.push(G);let N=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;N&&U.push(N);let W=ce("output",t.dataType,c),K=[W];d&&K.push(ce("present_key",t.dataType,g,w));let Z=st(1,w),me=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${z.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${z.type.storage}, ${x*x}>;
  ${R.registerUniforms(me).declareVariables(...U,...K)}
  ${R.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ur(G,N,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},Ql=(e,t,n,r,i,o,s=void 0,a=void 0)=>{let u=o+i.kvSequenceLength,l=i.nReps?i.nReps:1,c=i.vHiddenSize*l,d=e>1&&r,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=d?[i.batchSize,h,u,i.headSize]:void 0,f=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&F.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),a&&T.push("type");let S=[{dims:f,dataType:t.dataType,gpuDataType:0}];d&&S.push({dims:g,dataType:t.dataType,gpuDataType:0});let E=I=>{let C=H("probs",t.dataType,t.dims),v=H("v",n.dataType,n.dims),R=[C,v];x&&R.push(H("past_value",r.dataType,r.dims));let z=s?H("seq_lens",s.dataType,s.dims):void 0;s&&R.push(z);let Y=a?H("total_sequence_length_input",a.dataType,a.dims):void 0;a&&R.push(Y);let U=[ce("output",t.dataType,f)];d&&U.push(ce("present_value",t.dataType,g));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${C.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${C.type.value}, ${y*y}>;
  ${I.registerUniforms(G).declareVariables(...R,...U)}
  ${I.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ur(z,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:b}),getShaderSource:E}},tr=(e,t,n,r,i,o,s,a,u,l,c=void 0,d=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(a?1:0)),g=h>1?s:void 0,f=h>1?a:void 0,y=h>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&F.size(u.dims)>0?u:void 0,x=[t,n];g&&F.size(g.dims)>0&&x.push(g),b&&x.push(b),c&&x.push(c),d&&x.push(d);let T=e.compute(Xl(h,t,n,g,b,l,y,c,d),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Yl(T,l.batchSize,l.numHeads,y,l.sequenceLength,w,c,d),{inputs:c&&d?[T,c,d]:[T],outputs:[]});let S=[T,r];f&&F.size(f.dims)>0&&S.push(f),c&&S.push(c),d&&S.push(d),e.compute(Ql(h,T,r,f,l,y,c,d),{inputs:S,outputs:h>1?[0,2]:[0]})},Zl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,s=12,a={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=d=>{let h=ce("output_q",u[0].dataType,n),g=ce("output_k",u[0].dataType,n),f=ce("output_v",u[0].dataType,n),y=H("input",u[0].dataType,u[0].dims),w=H("weight",u[1].dataType,u[1].dims),b=H("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${d.registerUniforms(T).declareVariables(y,w,b,h,g,f)}
  ${d.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${x}(0);
    var valueK = ${x}(0);
    var valueV = ${x}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:a,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Jl=(e,t)=>{let n=Kl(e.inputs,t),[r,i,o]=Zl(e,n);return tr(e,r,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),ec,tc,nc,rc,tw=J(()=>{wt(),_e(),$e(),Ye(),xe(),ec=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,o)=>{let s=i.length;if(s!==r.length)throw new Error(`${o}: num dimensions != ${s}`);i.forEach((a,u)=>{if(a!==r[u])throw new Error(`${o}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},tc=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,o=e[0].dims,s=r?je(o[o.length-1]):1,a=i==="NHWC"&&o.length>1?s:1,u=F.size(o)/s,l=r,c=l?o.length:o,d=H("x",e[0].dataType,e[0].dims,s),h=H("scale",e[1].dataType,e[1].dims,a),g=H("bias",e[2].dataType,e[2].dims,a),f=H("inputMean",e[3].dataType,e[3].dims,a),y=H("inputVar",e[4].dataType,e[4].dims,a),w=ce("y",e[0].dataType,c,s),b=()=>{let T="";if(r)T=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let S=1;S<h.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(d,h,g,f,y,w)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...fe(o)]:[{type:12,data:u}]})}},nc=e=>Ne(e),rc=(e,t)=>{let{inputs:n,outputCount:r}=e,i=nc({...t,outputCount:r});if(Pe.webgpu.validateInputContent&&ec(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(tc(n,i))}}),ic,oc,sc,nw=J(()=>{$e(),xe(),ic=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},oc=e=>{let t=e[0].dims,n=e[0].dims[2],r=F.size(t)/4,i=e[0].dataType,o=H("input",i,t,4),s=H("bias",i,[n],4),a=H("residual",i,t,4),u=ce("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(o,s,a,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${a.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},sc=e=>{ic(e.inputs),e.compute(oc(e.inputs))}}),ac,Oe,uc,lc,cc,dc,pc,hc,fc,mc,gc,yc,wc,_c,bc,$c,nr,xc,Lr,vc,Sc,Ec,Tc,Mc,Ic,Cc,kc,Ac,Rc,Oc,Nc,zc,Bc,Pc,Dc,_o,Uc,bo,$o,Lc,Fc,Gc,Wc,qc,Vc,xo=J(()=>{_e(),$e(),Ye(),xe(),ac=(e,t,n,r,i,o,s)=>{let a=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=H("inputData",n,[a],4),c=ce("outputData",r,[a],4),d=[{name:"vec_size",type:"u32"}];return s&&d.push(...s),`
      ${e.registerUniforms(d).declareVariables(l,c)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},Oe=(e,t,n,r,i,o=e.dataType,s,a)=>{let u=[{type:12,data:Math.ceil(F.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>ac(l,F.size(e.dims),e.dataType,o,n,r,a),getRunData:l=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(F.size(l[0].dims)/64/4)},programUniforms:u})}},uc=e=>{e.compute(Oe(e.inputs[0],"Abs","abs"))},lc=e=>{e.compute(Oe(e.inputs[0],"Acos","acos"))},cc=e=>{e.compute(Oe(e.inputs[0],"Acosh","acosh"))},dc=e=>{e.compute(Oe(e.inputs[0],"Asin","asin"))},pc=e=>{e.compute(Oe(e.inputs[0],"Asinh","asinh"))},hc=e=>{e.compute(Oe(e.inputs[0],"Atan","atan"))},fc=e=>{e.compute(Oe(e.inputs[0],"Atanh","atanh"))},mc=e=>Ne(e),gc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Oe(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},yc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:n})},wc=(e,t)=>{let n=t||yc(e.inputs),r=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},_c=e=>{e.compute(Oe(e.inputs[0],"Ceil","ceil"))},bc=e=>{e.compute(Oe(e.inputs[0],"Cos","cos"))},$c=e=>{e.compute(Oe(e.inputs[0],"Cosh","cosh"))},nr=e=>Ne(e),xc=(e,t)=>{let n=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Lr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,vc=e=>{let t=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Lr(t)))},Sc=e=>{e.compute(Oe(e.inputs[0],"Exp","exp"))},Ec=e=>{e.compute(Oe(e.inputs[0],"Floor","floor"))},Tc=e=>{let t=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Lr(t)))},Mc=(e,t)=>{let n=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Ic=e=>{e.compute(Oe(e.inputs[0],"Not",t=>`!${t}`))},Cc=e=>{e.compute(Oe(e.inputs[0],"Neg",t=>`-${t}`))},kc=e=>{e.compute(Oe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ac=e=>{let t=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Rc=e=>{e.compute(Oe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Oc=e=>Ne(e),Nc=(e,t)=>{let n=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},zc=e=>{e.compute(Oe(e.inputs[0],"Sin","sin"))},Bc=e=>{e.compute(Oe(e.inputs[0],"Sinh","sinh"))},Pc=e=>{e.compute(Oe(e.inputs[0],"Sqrt","sqrt"))},Dc=e=>{e.compute(Oe(e.inputs[0],"Tan","tan"))},_o=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Uc=e=>{e.compute(Oe(e.inputs[0],"Tanh",_o))},bo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${_o("v")};
}
`,$o=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Lc=e=>{let t=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"FastGelu",$o,bo(t),void 0,e.inputs[0].dataType))},Fc=(e,t)=>{let n=st(e.inputs[0].dataType);return e.compute(Oe(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Gc=e=>{e.compute(Oe(e.inputs[0],"Log","log"))},Wc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,qc=e=>`quick_gelu_impl(${e})`,Vc=(e,t)=>{let n=st(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"QuickGelu",qc,Wc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Hc,jc,Kc,rw=J(()=>{$e(),xe(),xo(),Hc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},jc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=H("input",e[0].dataType,e[0].dims,4),r=H("bias",e[0].dataType,[e[0].dims[2]],4),i=ce("output",e[0].dataType,t,4),o=F.size(t)/4,s=et(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:a=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${a.declareVariables(n,r,i)}

  ${Lr(s)}

  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Kc=e=>{Hc(e.inputs),e.compute(jc(e.inputs))}}),Yc,Xc,It,Qc,Zc,Jc,ed,td,nd,rd,id,od,sd,iw=J(()=>{_e(),$e(),xe(),Yc=(e,t,n,r,i,o,s,a,u,l,c,d)=>{let h,g;typeof a=="string"?h=g=(x,T)=>`${a}((${x}),(${T}))`:typeof a=="function"?h=g=a:(h=a.scalar,g=a.vector);let f=ce("outputData",c,r.length,4),y=H("aData",u,t.length,4),w=H("bData",l,n.length,4),b;if(i)if(o){let x=F.size(t)===1,T=F.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;x||T?b=f.setByOffset("global_idx",g(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${f.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",f)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",f)};
            ${f.setByOffset("global_idx",g(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=f.setByOffset("global_idx",g(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,S,E="")=>{let I=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${f.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,f)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,f)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${E}(${h(I,C)});
          `};c===9?b=`
            var data = vec4<u32>(0);
            ${x("data",0,"u32")}
            ${x("data",1,"u32")}
            ${x("data",2,"u32")}
            ${x("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:b=`
            ${x("outputData[global_idx]",0)}
            ${x("outputData[global_idx]",1)}
            ${x("outputData[global_idx]",2)}
            ${x("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,f)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},Xc=(e,t,n,r,i,o,s=n.dataType)=>{let a=n.dims.map(Number),u=r.dims.map(Number),l=!F.areEqual(a,u),c=a,d=F.size(a),h=!1,g=!1,f=[l];if(l){let y=Pn.calcShape(a,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=F.size(c);let w=F.size(a)===1,b=F.size(u)===1,x=a.length>0&&a[a.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;f.push(w),f.push(b),f.push(x),f.push(T);let S=1;for(let E=1;E<c.length;E++){let I=a[a.length-E],C=u[u.length-E];if(I===C)S*=I;else break}S%4===0?(g=!0,h=!0):(w||b||x||T)&&(h=!0)}else h=!0;return f.push(h),{name:e,shaderCache:{hint:t+f.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Yc(y,a,u,c,h,l,g,i,n.dataType,r.dataType,s,o),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(F.size(c)/4)},...fe(a,u,c)]})}},It=(e,t,n,r,i,o)=>{e.compute(Xc(t,i??"",e.inputs[0],e.inputs[1],n,r,o))},Qc=e=>{It(e,"Add",(t,n)=>`${t}+${n}`)},Zc=e=>{It(e,"Div",(t,n)=>`${t}/${n}`)},Jc=e=>{It(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},ed=e=>{It(e,"Mul",(t,n)=>`${t}*${n}`)},td=e=>{let t=H("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;It(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},nd=e=>{It(e,"Sub",(t,n)=>`${t}-${n}`)},rd=e=>{It(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},id=e=>{It(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},od=e=>{It(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},sd=e=>{It(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),ad,ud,ld,cd,dd,pd,ow=J(()=>{_e(),$e(),Ye(),xe(),ad=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,o=r.dims.length;e.forEach((s,a)=>{if(a!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==o)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},ud=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ld=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(o):i===0?r.push(`if (inputIndex == ${i}u) { ${o} }`):i===n-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${i}) { ${o} }`)}return r.join(`
`)},cd=(e,t,n,r)=>{let i=F.size(n),o=new Array(e.length),s=new Array(e.length),a=0,u=[],l=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)a+=e[y].dims[t],o[y]=a,l.push(e[y].dims.length),s[y]=H(`input${y}`,r,l[y]),u.push("rank"),c.push({type:12,data:o[y]});for(let y=0;y<e.length;++y)c.push(...fe(e[y].dims));c.push(...fe(n));let d=ce("output",r,n.length),h=d.indicesGet("indices",t),g=Array.from(Array(o.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),f=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...s,d)})()}

  ${ud(o.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${g});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ld(s,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:f}},dd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=F.normalizeAxis(t.axis,r.length);ad(n,i);let o=r.slice();o[i]=n.reduce((a,u)=>a+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(a=>F.size(a.dims)>0);e.compute(cd(s,i,o,n[0].dataType),{inputs:s})},pd=e=>Ne({axis:e.axis})}),xn,vn,Sn,vo,En=J(()=>{_e(),$e(),xn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},vo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[zu,Bu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),nt,hd,So=J(()=>{nt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},hd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),fd,sw=J(()=>{fd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,Eo,To=J(()=>{_e(),$e(),xe(),En(),rr=(e,t,n,r,i)=>{let o=r-n;return`
      ${Array.from({length:n}).map((s,a)=>`
      if (${pe(t.shape,a,t.rank)} != 1) {
        ${t.indicesSet(e,a,pe(i,a+o,r))}
      } else {
        ${t.indicesSet(e,a,0)}
      }`).join("")}
`},Eo=(e,t,n,r,i=!1,o)=>{let s=e[0].dims,a=e[1].dims,u=s[s.length-2],l=a[a.length-1],c=s[s.length-1],d=je(l),h=je(c),g=je(u),f=F.size(n)/d/g,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[F.size(w),u,l],x=[{type:12,data:f},{type:12,data:u},{type:12,data:l},{type:12,data:c}];vn(t,x),x.push(...fe(w,s,a)),y&&x.push(...fe(e[2].dims)),x.push(...fe(b));let T=S=>{let E=po("batch_dims",e[0].dataType,w.length),I=H("a",e[0].dataType,s.length,h),C=H("b",e[1].dataType,a.length,d),v=ce("output",e[0].dataType,b.length,d),R=et(v.type.tensor),z=xn(t,v.type.value,R),Y=[I,C],U="";if(y){let W=i?d:1;Y.push(H("bias",e[2].dataType,e[2].dims.length,W)),U=`${i?`value += bias[col / ${W}];`:`value += ${v.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,G);let N=()=>{let W=`var a_data: ${I.type.value};`;for(let K=0;K<h;K++)W+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${d}];`;for(let K=0;K<g;K++){W+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let Z=0;Z<h;Z++)W+=`
            values[${K}] = fma(${C.type.value}(a_data${h===1?"":`[${Z}]`}), b_data${Z}, values[${K}]);
`}return W};return`
  ${S.registerUniforms(G).registerInternalVariables(E).declareVariables(...Y,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${rr("a_indices",I,I.rank-2,E.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${rr("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${N()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${U}
      ${z}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${h};${g};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:x}),getShaderSource:T}}}),md,gd,Mo,Io,yd,Co,wd,Fr,ko=J(()=>{_e(),$e(),xe(),En(),To(),So(),md=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,gd=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Mo=(e,t,n="f32",r,i=!1,o=32,s=!1,a=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=i?u:o,d=i?o:u,h=c/t[0],g=o/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${n}>, ${c/h}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(a/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${a}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${md(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${gd(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Io=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,yd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Co=(e,t,n="f32",r,i=!1,o=32,s=!1,a=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],d=i?l:o,h=i?o:l;if(!(h%t[1]===0&&d%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let g=h/t[1],f=d/t[0],y=o/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Io(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${f};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${f}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Io(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${yd(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${c}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(a/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${a}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},wd=(e,t,n,r,i=!1)=>{let[o,s,a,u]=r,l=et(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${nt(e,l)} {
      var value = ${nt(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${rr("aIndices",s,s.rank-2,o.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${nt(e,l)} {
      var value = ${nt(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${a.type.indices};
        ${rr("bIndices",a,a.rank-2,o.rank,"batchIndices")}
        ${a.indicesSet("bIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("bIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${nt(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${nt(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Fr=(e,t,n,r,i=!1,o)=>{let s=e[0].dims,a=e[1].dims,u=s.slice(0,-2),l=a.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),d=F.size(c),h=s[s.length-2],g=s[s.length-1],f=a[a.length-1],y=g%4===0&&f%4===0,w=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(f/b[0]/w[0]),Math.ceil(h/b[1]/w[1]),Math.ceil(d/b[2]/w[2])],T=y?4:1,S=[...u,h,g/T],E=S.length,I=[...l,g,f/T],C=I.length,v=[d,h,f/T],R=[{type:6,data:h},{type:6,data:f},{type:6,data:g}];vn(t,R),R.push(...fe(c,S,I));let z=["rank","rank"],Y=e.length>2;Y&&(R.push(...fe(e[2].dims)),z.push("rank")),R.push(...fe(v));let U=G=>{let N=c.length,W=po("batchDims",e[0].dataType,N,1),K=et(e[0].dataType),Z=H("a",e[0].dataType,E,T),me=H("b",e[1].dataType,C,T),L=ce("result",e[0].dataType,v.length,T),ee=[Z,me];if(Y){let V=i?T:1;ee.push(H("bias",e[2].dataType,e[2].dims.length,V))}let A=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,A);let O=et(L.type.tensor),P=xn(t,L.type.value,O),B=wd(T,Y,P,[W,Z,me,L],i);return`
  ${G.registerUniforms(A).registerInternalVariables(W).declareVariables(...ee,L)}
  ${B}
  ${y?Mo(w,b,K,W):Co(w,b,K,W)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:U}}}),_d,bd,aw=J(()=>{_e(),Kt(),xe(),En(),So(),sw(),ko(),_d=(e,t,n,r,i=!1,o,s=4,a=4,u=4,l="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},d=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",b=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${nt(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${nt(s,l)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${nt(s,l)}(0.0);`,S=e?r&&n?d(a):`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(a)}
    }
    return ${nt(a,l)}(0.0);`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(a)}
    }
    return ${nt(a,l)}(0.0);`,E=nt(u,l),I=nt(e?s:a,l),C=nt(e?a:s,l),v=xn(o,E,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${hd(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},bd=(e,t,n,r,i,o,s,a,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],d=n[0],h=l?n[2]:n[3],g=l?n[1]:n[2],f=l?n[3]:n[1],y=l&&(c%4===0||c%3===0)&&f%4===0,w=l?f:h*g,b=l?h*g:f,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/x[0]/T[0]),Math.ceil(b/x[1]/T[1]),Math.ceil(d/x[2]/T[2])];Ae("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=y?l&&c%4!==0?3:4:1,I=x[1]*T[1],C=x[0]*T[0],v=Math.max(x[0]*E,x[1]),R=r%I===0,z=i%C===0,Y=o%v===0,U=y?[E,4,4]:[1,1,1],G=[{type:6,data:r},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vn(t,G),G.push(...fe(e[0].dims,e[1].dims));let N=["rank","rank"];s&&(G.push(...fe(e[2].dims)),N.push("rank")),G.push(...fe(n));let W=K=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,Z);let me=y?4:1,L=et(e[0].dataType),ee=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${L}>`:L}) {
        result[flatIndex] = ${y?`vec4<${L}>`:L}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${L}>`:L}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,A=H("x",e[0].dataType,e[0].dims.length,E===3?1:E),O=H("w",e[1].dataType,e[1].dims.length,me),P=[A,O],B=ce("result",e[0].dataType,n.length,me);if(s){let V=H("bias",e[2].dataType,e[2].dims.length,me);P.push(V),ee+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${L}>`:L} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${fd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(Z).declareVariables(...P,B)}
        ${ee}
        ${_d(l,R,z,Y,s,t,U[0],U[1],U[2],L)}
        ${y?Mo(T,x,L,void 0,!l,v):Co(T,x,L,void 0,!l,v,!1,void 0,a)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${R};${z};${Y};${I};${C};${v}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:G}),getShaderSource:W}}}),$d,Ao,ir,xd,Ro,vd,Sd,Ed,uw=J(()=>{_e(),Kt(),$e(),xe(),En(),So(),$d=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ao=e=>typeof e=="number"?[e,e,e]:e,ir=(e,t)=>t<=1?e:e+(e-1)*(t-1),xd=(e,t,n,r=1)=>{let i=ir(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ro=(e,t,n,r,i)=>{i==null&&(i=xd(e,t[0],r[0]));let o=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(o[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return o},vd=(e,t,n,r,i,o,s,a,u,l)=>{let c,d,h,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let f=Ro([t,n,r,1],[a,u,l],1,[i,o,s],e);d=f[0],h=f[1],g=f[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let f=Ro([t,n,r,1],[a,u,l],1,[i,o,s],e[0]);d=f[0],h=f[1],g=f[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),h=Math.ceil(n/o),g=Math.ceil(r/s);let f=(d-1)*i+a-t,y=(h-1)*o+u-n,w=(g-1)*s+l-r,b=Math.floor(f/2),x=f-b,T=Math.floor(y/2),S=y-T,E=Math.floor(w/2),I=w-E;c={top:T,bottom:S,left:E,right:I,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:d,outHeight:h,outWidth:g}},Sd=(e,t,n,r,i,o=!1,s="channelsLast")=>{let a,u,l,c,d;if(s==="channelsLast")[a,u,l,c,d]=e;else if(s==="channelsFirst")[a,d,u,l,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,g,f,y]=t,[w,b,x]=Ao(n),[T,S,E]=Ao(r),I=ir(g,T),C=ir(f,S),v=ir(y,E),{padInfo:R,outDepth:z,outHeight:Y,outWidth:U}=vd(i,u,l,c,w,b,x,I,C,v),G=o?h*d:h,N=[0,0,0,0,0];return s==="channelsFirst"?N=[a,G,z,Y,U]:s==="channelsLast"&&(N=[a,z,Y,U,G]),{batchSize:a,dataFormat:s,inDepth:u,inHeight:l,inWidth:c,inChannels:d,outDepth:z,outHeight:Y,outWidth:U,outChannels:G,padInfo:R,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:g,filterHeight:f,filterWidth:y,effectiveFilterDepth:I,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:E,inShape:e,outShape:N,filterShape:t}},Ed=(e,t,n,r,i,o)=>{let s=o==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let a=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil($d(u.x.map(w=>n[w]))/a[0]),1,1];Ae("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,d=F.size(n),h=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];vn(t,h),h.push(...fe(e[0].dims,e[1].dims));let g=["rank","rank"],f=e.length===3;f&&(h.push(...fe(e[2].dims)),g.push("rank")),h.push(...fe(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,b);let x=1,T=et(e[0].dataType),S=H("x",e[0].dataType,e[0].dims.length,c),E=H("W",e[1].dataType,e[1].dims.length,x),I=[S,E],C=ce("result",e[0].dataType,n.length,x),v="";if(f){let Y=H("bias",e[2].dataType,e[2].dims.length,x);I.push(Y),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?pe("coords",4,5):pe("coords",1,5)}];
        }`}let R=nt(c,T),z=xn(t,R,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...I,C)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,S.rank)};
              let d2 = ${s?pe("coords",S.rank-1,S.rank):pe("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?pe("coords",1,S.rank):pe("coords",2,S.rank)},
              ${s?pe("coords",2,S.rank):pe("coords",3,S.rank)},
              ${s?pe("coords",3,S.rank):pe("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?pe("uniforms.x_shape",1,S.rank):pe("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?pe("uniforms.x_shape",2,S.rank):pe("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?pe("uniforms.x_shape",3,S.rank):pe("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?pe("uniforms.x_shape",4,S.rank):pe("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?"value = value + getBiasByOutputCoords(coords)":""};
              ${z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${f}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),Td,Md,lw=J(()=>{_e(),$e(),xe(),En(),Td=(e,t,n,r)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",s=e[0].dims,a=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],c=l/t.group,d=u&&c>=4?je(l):1,h=F.size(n)/d,g=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];vn(t,g),g.push(...fe(s,[a[0],a[1],a[2],a[3]/d]));let f=i?["rank","rank","rank"]:["rank","rank"];g.push(...fe([n[0],n[1],n[2],n[3]/d]));let y=w=>{let b=ce("output",e[0].dataType,n.length,d),x=et(b.type.tensor),T=xn(t,b.type.value,x),S=H("x",e[0].dataType,s.length),E=H("w",e[1].dataType,a.length,d),I=[S,E];i&&I.push(H("b",e[2].dataType,e[2].dims,d));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,C);let v=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(C).declareVariables(...I,b)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${v}
    ${o}
    ${T}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},Md=(e,t,n,r)=>{let i=e.length>2,o=je(n[3]),s=je(n[2]),a=F.size(n)/o/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],c=[n[0],n[1],n[2],n[3]/o],d=[{type:12,data:a},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vn(t,d),d.push(...fe(u,l,c));let h=(s-1)*t.strides[1]+l[1],g=f=>{let y=ce("output",e[0].dataType,c.length,o),w=et(y.type.tensor),b=xn(t,y.type.value,w),x=H("x",e[0].dataType,u.length,o),T=H("w",e[1].dataType,l.length,o),S=[x,T];i&&S.push(H("b",e[2].dataType,e[2].dims,o));let E=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,I),`
  ${f.registerUniforms(I).declareVariables(...S,y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${h}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${s};${h};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:g}}}),Id,Gr,Cd,Wr,Oo,No,kd,Ad,zo,cw=J(()=>{$e(),aw(),uw(),ko(),lw(),En(),To(),on(),Id=(e,t,n,r,i,o)=>{let s=e[0],a=e.slice(o?1:2,o?3:4),u=a.length,l=t[0],c=t.slice(2).map((h,g)=>h+(h-1)*(n[g]-1)),d=a.map((h,g)=>h+r[g]+r[g+u]).map((h,g)=>Math.floor((h-c[g]+i[g])/i[g]));return d.splice(0,0,s),d.splice(o?3:1,0,l),d},Gr=[2,3,1,0],Cd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Wr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let r=e.pads.slice();Nr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Oo=e=>{let t=vo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,s=e.kernel_shape,a=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:o,kernelShape:s,pads:a,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},No=(e,t,n,r)=>{let i=n.format==="NHWC",o=Id(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let I=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(mt(t[1],Gr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),I.push(C)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Md(I,n,o,r),{inputs:I}):e.compute(Td(I,n,o,r),{inputs:I});return}let s=t.length===3,a=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],c=t[1].dims[2],d=t[1].dims[3],h=o[i?1:2],g=o[i?2:3],f=o[i?3:1],y=i&&c===a&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||c===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let I=o[0],C,v,R,z=[];if(i){let G=e.kernelCustomData.wT??e.compute(mt(t[1],Gr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),y){let N=a*u*l;C=t[0].reshape([1,I,N]),v=G.reshape([1,N,f]),R=[1,I,f]}else C=t[0].reshape([I,a*u,l]),v=G.reshape([1,l,f]),R=[I,h*g,f];z.push(C),z.push(v)}else C=t[0].reshape([I,l,a*u]),v=t[1].reshape([1,f,l]),R=[I,f,h*g],z.push(v),z.push(C);s&&z.push(t[2]);let Y=R[2],U=z[0].dims[z[0].dims.length-1];Y<8&&U<8?e.compute(Eo(z,n,o,R,i,r),{inputs:z}):e.compute(Fr(z,n,o,R,i,r),{inputs:z});return}let w=!0,b=e.kernelCustomData.wT??e.compute(mt(t[1],Gr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];s&&x.push(t[2]);let T=i?h*g:f,S=i?f:h*g,E=c*d*l;e.compute(bd(x,n,o,T,S,E,s,w,r),{inputs:x})},kd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),s=[1].concat(t.dilations),a=[1].concat(t.kernelShape),u=Wr({...t,pads:i,strides:o,dilations:s,kernelShape:a},r);No(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Ad=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Wr(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=Sd(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,r);e.compute(Ed(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},zo=(e,t)=>{if(Cd(e.inputs,t),e.inputs[0].dims.length===3)kd(e,t);else if(e.inputs[0].dims.length===5)Ad(e,e.inputs,t);else{let n=Wr(t,e.inputs);No(e,e.inputs,n)}}}),Rd,dw=J(()=>{_e(),Kt(),$e(),xe(),Rd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,o=t.format==="NHWC",s=t.group,a=e[1].dims,u=a[2]/s,l=a[3],c=o?je(u):1,d=o&&l===1&&u>=4,h=d?Math.floor(u/4)*4:Math.floor(u/c)*c,g=u-h,f=o?je(l):1,y=o?l===1?c:f:1,w=F.size(i)/f,b=[Math.ceil(w/64),1,1];Ae("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],E=[t.dilations[0],t.dilations[1]],I=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],C=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:w},{type:12,data:T},{type:12,data:S},{type:12,data:E},{type:12,data:I},{type:6,data:C},{type:12,data:h},{type:12,data:u},{type:12,data:l},...fe(e[0].dims,e[1].dims)];r&&(v.push(...fe(e[2].dims)),x.push("rank")),v.push(...fe(i));let R=z=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],U=et(e[0].dataType),G=o?1:2,N=o?2:3,W=o?3:1,K=H("W",e[1].dataType,e[1].dims.length,y),Z=H("Dy",e[0].dataType,e[0].dims.length,c),me=[Z,K];r&&me.push(H("bias",e[2].dataType,[i[W]].length,f));let L=ce("result",e[0].dataType,i.length,f),ee=()=>{let P="";if(d)c===4?P+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?P+=`
          dotProd = dotProd + dot(vec4<${U}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${U}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(P+=`
          dotProd = dotProd + dot(vec4<${U}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${U}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(P+=`
                  let xValue = ${o?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,c===1)P+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)P+=`
            let wValue${B} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return P},A=()=>{if(g===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let P="";if(c===1){P+="dotProd = dotProd";for(let B=0;B<g;B++)P+=`
            + ${Z.getByOffset(`x_offset + ${B}`)} * ${K.getByOffset(`w_offset + ${B}`)}`;P+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);P+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return P},O=`
            let outputIndices = ${L.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${L.indicesGet("outputIndices",0)};
            let d1 = ${L.indicesGet("outputIndices",W)};
            let r = ${L.indicesGet("outputIndices",G)};
            let c = ${L.indicesGet("outputIndices",N)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${L.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${U}(dyRCorner) + ${U}(wR)) / ${U}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${U}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${U}(dyCCorner) + ${U}(wC)) / ${U}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${U}(uniforms.Dy_shape[${N}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:c}) {
                  ${ee()}
                  inputChannel = inputChannel + ${d?4:c};
                }
                ${A()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${f}]`:""};
            ${L.setByOffset("global_idx","value")};
          `;return`
    ${z.registerUniforms(Y).declareVariables(...me,L)}
      ${z.mainStart()}
      ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${O}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${y}${f}${d}${g}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),Od,Nd,zd,Bo,Bd,Pd,Po,Dd,Ud,pw=J(()=>{dw(),En(),on(),Od=(e,t,n,r,i,o)=>(e-1)*t+n+(r-1)*i+1-o,Nd=(e,t,n,r,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=o,n[i]=e-o):t==="SAME_LOWER"&&(n[r]=e-o,n[i]=o)},zd=(e,t,n,r,i,o,s,a,u,l)=>{let c=e.length-2,d=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let h=e[0],g=t[a?3:1]*i;for(let f=0,y=e.length-c-(a?1:0);f<c;++f,++y){let w=e[y],b=d?w*s[f]:l[f],x=Od(w,s[f],o[f],t[y],n[f],b);Nd(x,r,o,f,f+c),d&&l.push(s[f]*(w-1)+u[f]+(t[y]-1)*n[f]+1-o[f]-o[f+c])}l.splice(0,0,h),l.splice(a?3:1,0,g)},Bo=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,h)=>d*h,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),s=e.outputPadding.slice(),a=t[0].dims,u=e.dilations.slice();if(u.reduce((d,h)=>d+h,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,h)=>d+h,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}zd(a,n,u,e.autoPad,e.group,i,l,r,s,o);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:s,outputShape:o,dilations:u,strides:l}),c},Bd=e=>{let t=vo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group??1,s=e.kernelShape,a=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:o,kernelShape:s,outputPadding:c,outputShape:d,pads:a,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Pd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((s,a)=>s+a,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((s,a)=>s+a,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((s,a)=>s+a,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((s,a)=>s+a,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Po=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(mt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(Rd(o,n,r),{inputs:o})},Dd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let a=t.pads;a.length===0&&(a=[0,0]),a=[0,a[0],0,a[1]],s=[1].concat(s),o=[1].concat(o),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Bo({...t,pads:a,strides:s,dilations:o,kernelShape:i,outputPadding:u},r);Po(e,r,l,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Ud=(e,t)=>{if(Pd(e.inputs,t),e.inputs[0].dims.length===3)Dd(e,t);else{let n=Bo(t,e.inputs);Po(e,e.inputs,n)}}}),Ld,Fd,Gd,hw=J(()=>{_e(),$e(),Ye(),xe(),Ld=(e,t,n,r)=>{let i=F.size(t),o=t.length,s=H("input",e,o),a=ce("output",e,o),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=F.normalizeAxis(u,o),c=d=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=pe("uniforms.input_shape","uniforms.axis",o),f=r.reverse?h+(r.exclusive?" + 1":""):"0",y=r.reverse?g:h+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,a)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${a.offsetToIndices("global_idx")};
                  var sum = ${a.type.value}(0);
                  let first : i32 = ${f};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${a.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...fe(t,t)]}),getShaderSource:c}},Fd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Ld(r,n,i,t),{inputs:[0]})},Gd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Ne({exclusive:t,reverse:n})}}),Wd,qd,Vd,Hd,jd,fw=J(()=>{_e(),$e(),Ye(),xe(),Wd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},qd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)i.push(n.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},Vd=(e,t)=>{let n,r,i,o,s,a,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([n,r,i,o]=e.dims,s=c?[n,r,i,l,l,o/l**2]:[n,r,i,o/l**2,l,l],a=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[n,l,l,o/l**2,r,i]:[n,o/l**2,l,l,r,i],a=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(s),h=d.dims.length,g=e.dataType,f=H("a",g,h),y=ce("output",g,h),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(f,y)}

  ${qd(a,h,f,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,o/l**2]:[n,o/l**2,r*l,i*l],T=F.size(x),S=d.dims,E=F.sortBasedOnPerm(S,a);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...fe(S,E)]}},getShaderSource:w}},Hd=(e,t)=>{Wd(e.inputs),e.compute(Vd(e.inputs[0],t))},jd=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),qr,or,Do,Kd,Yd,Xd,Qd,Uo,Zd,Jd,ep,mw=J(()=>{_e(),$e(),Ye(),xe(),qr="[a-zA-Z]|\\.\\.\\.",or="("+qr+")+",Do="^"+or+"$",Kd="("+or+",)*"+or,Yd="^"+Kd+"$",Xd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Qd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Yd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,s)=>{let a=e[s].dims.slice();if(!o.match(RegExp(Do)))throw new Error("Invalid LHS term");let u=this.processTerm(o,!0,a,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([o,s])=>s.count===1||o==="...").map(([o])=>o).join("");else if(!r.match(RegExp(or)))throw new Error("Invalid RHS");(i=r.match(RegExp(qr,"g")))==null||i.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(o);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,o=!1,s=[],a=0;if(!e.match(RegExp(Do))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(qr,"g")),l=new Xd(r);return u==null||u.forEach((c,d)=>{if(c==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let h=i-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(a,a+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let f=String.fromCharCode(48+g);l.addSymbol(f,d+g),this.addSymbol(f,n[a++],r)}}else l.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[a++],r)}),l}},Uo=e=>e+"_max",Zd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,c)=>H(`input${c}`,t,l)),o=F.size(r),s=ce("output",t,r.length),a=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let c=[],d="var prod = 1.0;",h="var sum = 0.0;",g="sum += prod;",f=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,E)=>{var I;if(n.rhs.symbolToIndices.has(E)){let C=(I=n.rhs.symbolToIndices.get(E))==null?void 0:I[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let z=v.symbolToIndices.get(E);if(z===void 0)throw new Error("Invalid symbol error");z.forEach(Y=>{c.push(`${i[R].indicesSet(`input${R}Indices`,Y,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(z=>{f.push(`${i[v].indicesSet(`input${v}Indices`,z,`${E}`)}`)}),b.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Uo(E)}; ${E}++) {`),w.push("}")});let T=x?[...c,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,h,...y,...f,d,...b,g,...w];return`
            ${l.registerUniforms(a.map(S=>({name:`${Uo(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=a.filter(d=>n.symbolToInfo.has(d)).map(d=>{var h;return{type:12,data:((h=n.symbolToInfo.get(d))==null?void 0:h.dimValue)||0}});l.push({type:12,data:o});let c=e.map((d,h)=>[...fe(d)]).reduce((d,h)=>d.concat(h),l);return c.push(...fe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}},getShaderSource:u}},Jd=(e,t)=>{let n=new Qd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((o,s)=>o.dims);e.compute(Zd(i,e.inputs[0].dataType,n,r))},ep=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),tp,Lo,np,rp,ip,gw=J(()=>{_e(),$e(),xe(),tp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Lo=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},np=(e,t)=>e.length>t.length?Lo(e,t):Lo(t,e),rp=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=np(t,n),i=e[0].dataType,o=i===9||F.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,a=o||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(F.size(r)/a),l=d=>{let h=H("input",i,t.length,s),g=ce("output",i,r.length,a),f;if(i===9){let y=(w,b,x="")=>`
          let outputIndices${b} = ${g.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${h.broadcastedIndicesToOffset(`outputIndices${b}`,g)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${w}[${b}] = ${x}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;f=`
        let outputOffset = global_idx * ${a};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else f=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${a}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${f}`},c=[{type:12,data:u},...fe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${a}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},ip=e=>{tp(e.inputs),e.compute(rp(e.inputs),{inputs:[0]})}}),op,sp,yw=J(()=>{_e(),$e(),xe(),xo(),op=e=>{let t=e[0].dataType,n=F.size(e[0].dims),r=F.size(e[1].dims),i=r%4===0,o=s=>{let a=H("x",t,[1],4),u=H("bias",t,[1],4),l=ce("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${u.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,h=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${a.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(a,u,l)}

    ${bo(st(t))}

    ${s.mainStart(Dn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${a.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",$o("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Dn/4)}})}},sp=e=>{e.inputs.length<2||F.size(e.inputs[1].dims)===0?Lc(e):e.compute(op(e.inputs))}}),ap,up,lp,cp,ww=J(()=>{_e(),$e(),Ye(),xe(),ap=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},up=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=F.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(o,1,...r);let a=n[o],u=e[0].dataType===9?4:1,l=Math.ceil(F.size(s)/u),c=[{type:12,data:l},{type:6,data:a},{type:12,data:o},...fe(e[0].dims,e[1].dims,s)],d=h=>{let g=H("data",e[0].dataType,e[0].dims.length,u),f=H("inputIndices",e[1].dataType,e[1].dims.length),y=ce("output",e[0].dataType,s.length,u),w=x=>{let T=r.length,S=`var indicesIndices${x}  = ${f.type.indices}(0);`;for(let E=0;E<T;E++)S+=`${T>1?`indicesIndices${x}[${E}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${E}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${f.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${g.type.indices};
        `;for(let E=0,I=0;E<i;E++)E===o?(S+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = u32(idx${x});`,I+=T):(S+=`${i>1?`dataIndices${x}[${E}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${I}]`:`outputIndices${x}`};`,I++);return S},b;if(e[0].dataType===9){let x=(T,S,E="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${g.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${E}(${g.getByOffset(`index${S}`)}[component${S}]);
        `;b=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${x("value",0,"u32")}
        ${x("value",1,"u32")}
        ${x("value",2,"u32")}
        ${x("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else b=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,f,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:d}},lp=e=>Ne({axis:e.axis}),cp=(e,t)=>{let n=e.inputs;ap(n),e.compute(up(e.inputs,t))}}),dp,pp,hp,_w=J(()=>{_e(),$e(),xe(),dp=(e,t,n,r,i,o,s,a,u)=>{let l=[{type:12,data:o},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:12,data:u}],c=[o];l.push(...fe(t.dims,c));let d=h=>{let g=H("indices_data",t.dataType,t.dims.length),f=ce("input_slice_offsets_data",12,1,1),y=[g,f],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(...y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},pp=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,o=n[1].dims,s=o[o.length-1],a=F.sizeToDimension(o,o.length-1),u=F.sizeFromDimension(r,t.batchDims+s),l=F.sizeToDimension(r,t.batchDims),c=F.sizeFromDimension(r,t.batchDims),d=a/l,h=new Array(s),g=u;for(let S=0;S<s;++S)h[s-1-S]=g,g*=r[t.batchDims+s-1-S];let f=dp(e,n[1],h,t.batchDims,r,a,d,c,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=o.slice(0,-1).concat(r.slice(y)),b=F.size(w),x=[{type:12,data:b},{type:12,data:u},...fe(n[0].dims,f.dims,w)],T=S=>{let E=H("data",n[0].dataType,n[0].dims.length),I=H("slice_offsets",12,f.dims.length),C=ce("output",n[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,I,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],f]})},hp=e=>({batchDims:e.batch_dims,cacheKey:""})}),fp,mp,gp,yp,bw=J(()=>{_e(),$e(),Ye(),xe(),fp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=F.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],o=e[2],s=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((a,u)=>u===n?Math.ceil(a/r)===o.dims[u]:a===o.dims[u]).reduce((a,u)=>a&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==o.dims.length||!s.dims.map((a,u)=>a===o.dims[u]).reduce((a,u)=>a&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},mp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=F.normalizeAxis(t.gatherAxis,i),s=F.normalizeAxis(t.quantizeAxis,i),a=n.slice(0);a.splice(o,1,...r);let u=F.size(a),l=e[2].dataType,c=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:s},{type:12,data:o},{type:12,data:t.blockSize},...fe(...e.map((g,f)=>g.dims),a)],h=g=>{let f=H("data",e[0].dataType,e[0].dims.length),y=H("inputIndices",e[1].dataType,e[1].dims.length),w=H("scales",e[2].dataType,e[2].dims.length),b=e.length>3?H("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=ce("output",l,a.length),T=[f,y,w];b&&T.push(b);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(S).declareVariables(...T,x)}
        ${g.mainStart()}
        let output_indices = ${x.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${x.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${x.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${f.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${x.indicesGet("output_indices","i")};
          ${f.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[o]};
        }
        ${f.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${a.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${f.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${f.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${f.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${b?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${b.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${b.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${st(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,f)=>f!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,f)=>"rank")},getRunData:()=>({outputs:[{dims:a,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h}},gp=(e,t)=>{let n=e.inputs;fp(n,t),e.compute(mp(e.inputs,t))},yp=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),wp,_p,bp,$p,$w=J(()=>{_e(),$e(),Ye(),xe(),wp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},_p=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,o=e[1].dims,s=e[1].dataType,a=F.normalizeAxis(t.axis,i),u=n[a],l=o.slice(0),c=F.size(l),d=H("input",r,i),h=H("indicesInput",s,o.length),g=ce("output",r,l.length),f=[{type:12,data:c},{type:6,data:u},{type:12,data:a}];return f.push(...fe(n,o,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,h,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},bp=e=>Ne({axis:e.axis}),$p=(e,t)=>{let n=e.inputs;wp(n),e.compute(_p(e.inputs,t))}}),xp,vp,Sp,Ep,xw=J(()=>{_e(),$e(),xe(),xp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},vp=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,o,s]=Nu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),a=[i,o];if(!a)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(o/u),c=Math.ceil(i/u),d=!0,h=F.size(a),g=[{type:12,data:d?l:h},{type:12,data:i},{type:12,data:o},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],f=["type","type"];e.length===3&&(g.push(...fe(e[2].dims)),f.push("rank")),g.push(...fe(a));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=H("a",e[0].dataType,e[0].dims),E=H("b",e[1].dataType,e[1].dims),I=S.type.value,C=null,v=[S,E];e.length===3&&(C=H("c",e[2].dataType,e[2].dims.length),v.push(C));let R=ce("output",e[0].dataType,a.length);v.push(R);let z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(z).declareVariables(...v)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${I}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=H("a",e[0].dataType,e[0].dims),T=H("b",e[1].dataType,e[1].dims),S=null,E=[x,T];e.length===3&&(S=H("c",e[2].dataType,e[2].dims.length),E.push(S));let I=ce("output",e[0].dataType,a.length);E.push(I);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let z=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:g}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},Sp=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Ep=(e,t)=>{xp(e.inputs),e.compute(vp(e.inputs,t))}}),Pt,Yt,Tn,Mn,Tp,Mp,Ip,Cp,kp,Ap,Rp,Op,Np,zp,vw=J(()=>{_e(),$e(),Ye(),xe(),[Pt,Yt,Tn,Mn]=[0,1,2,3],Tp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Mp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Ip=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Cp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,kp=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ap=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Pt}] = batch;
     indices[${Yt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Tn}] = u32(r);
            indices[${Mn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Tn}] = u32(clamp(r, 0, H - 1));
          indices[${Mn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Tn}] = gs_reflect(r, border[1], border[3]);
          indices[${Mn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Rp=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Pt}], indices[${Yt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Pt}], indices[${Yt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Pt}], indices[${Yt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Pt}], indices[${Yt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Pt}], indices[${Yt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Pt}], indices[${Yt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Op=(e,t)=>{let n=H("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=H("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Pt,Yt,Tn,Mn]=[0,3,1,2]);let s=ce("output",e[0].dataType,o.length),a=n.type.value,u=F.size(o),l=[{type:12,data:u},...fe(e[0].dims,r,o)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${Mp}
  ${Ip(a)}
  ${Cp(t)}
  ${kp(t)}
  ${Ap(n,a,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Tn}]);
      let W_in = i32(uniforms.x_shape[${Mn}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Pt}], indices[${Tn}], indices[${Mn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Rp(s,a,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let h=F.size(o);return{outputs:[{dims:o,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:c}},Np=(e,t)=>{Tp(e.inputs),e.compute(Op(e.inputs,t))},zp=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),lt,Bp,Pp,Fo,Dp,sr,Up,Lp=J(()=>{_e(),$e(),Ye(),so(),wo(),xe(),on(),lt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Bp=(e,t)=>{let n=e[0],r=lt(e,1),i=lt(e,2),o=lt(e,3),s=lt(e,4),a=lt(e,5),u=lt(e,6),l=lt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],d=n.dims[1],h=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],g=d,f=0,y=0,w=Math.floor(h/t.numHeads);if(u&&l&&F.size(u.dims)&&F.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=u.dims[2],y=u.dims[2]}else if(u&&F.size(u.dims)||l&&F.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&F.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,g=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(o&&F.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=f+g,T=0;if(s&&F.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===c?T=1:C[0]===3*c+2&&(T=3):C.length===2&&C[0]===c&&C[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=h;if(i&&F.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let I=!1;if(s&&F.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(a&&F.size(a.dims)>0){if(a.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(a.dims[0]!==c||a.dims[1]!==t.numHeads||a.dims[2]!==d||a.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:g,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:I,passPastInKv:S,qkvFormat:b}},Pp=e=>Ne({...e}),Fo=Ne({perm:[0,2,1,3]}),Dp=(e,t,n,r,i,o,s)=>{let a=[r,i,o],u=F.size(a),l=[{type:12,data:u},{type:12,data:s},{type:12,data:o}],c=d=>{let h=ce("qkv_with_bias",t.dataType,a),g=H("qkv",t.dataType,a),f=H("bias",n.dataType,a),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(g,f,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},sr=(e,t,n,r,i,o,s,a)=>{let u=o;if(s&&F.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Dp(e,o,s,t,r,n*i,a),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(mt(u,Fo.perm),{inputs:[u],outputs:[-1]})[0]}else return o.dims.length===3&&(u=o.reshape([t,r,n,i])),n===1||r===1?u:e.compute(mt(u,Fo.perm),{inputs:[u],outputs:[-1]})[0]},Up=(e,t)=>{let n=Bp(e.inputs,t),r=e.inputs[0],i=lt(e.inputs,1),o=lt(e.inputs,2),s=lt(e.inputs,3),a=lt(e.inputs,4),u=lt(e.inputs,5),l=lt(e.inputs,6),c=lt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&o&&i.dims.length===4&&o.dims.length===4,h=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(d)return tr(e,h,i,o,a,void 0,l,c,u,n);if(!i||!o)throw new Error("key and value must be provided");let g=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),f=sr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,s,2*n.hiddenSize);tr(e,h,g,f,a,void 0,l,c,u,n)}}),Fp,Gp,Wp,qp,Go,Vp,Hp,jp=J(()=>{_e(),$e(),Ye(),xe(),Fp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Gp=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Ne({numOutputs:r,axis:t.axis,splitSizes:n})},Wp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,qp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Go=(e,t)=>{let n=e[0].dims,r=F.size(n),i=e[0].dataType,o=F.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),a=H("input",i,n.length),u=new Array(t.numOutputs),l=[],c=[],d=0,h=[{type:12,data:r}];for(let f=0;f<t.numOutputs;f++){d+=t.splitSizes[f],u[f]=d;let y=n.slice();y[o]=t.splitSizes[f],c.push(y),s[f]=ce(`output${f}`,i,y.length),l.push({dims:c[f],dataType:e[0].dataType})}h.push({type:12,data:u},...fe(n,...c));let g=f=>`
  ${f.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(a,...s)}
  ${Wp(u.length)}
  ${qp(s)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${a.offsetToIndices("global_idx")};
    var index = ${a.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${a.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Vp=(e,t)=>{Fp(e.inputs);let n=e.inputs.length===1?t:Gp(e.inputs,t);e.compute(Go(e.inputs,n),{inputs:[0]})},Hp=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Ne({axis:t,numOutputs:r,splitSizes:n})}}),Kp,Vr,Yp,Xp=J(()=>{_e(),$e(),Ye(),xe(),Kp=(e,t)=>{let[n,r,i,o]=e,{numHeads:s,rotaryEmbeddingDim:a}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!F.areEqual(r.dims,[])&&!F.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!F.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(a>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],c=i.dims[0],d=F.sizeFromDimension(n.dims,1)/l,h=a===0?i.dims[1]*2:d/s;if(a>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==i.dims[1]&&a/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Vr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:o}=t,s=e[0].dims[0],a=F.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=a/u,c=e[2].dims[1],d=i===0?c*2:l/r,h=new Array(s,u,l/d,d-c),g=F.computeStrides(h),f=[{type:1,data:o},{type:12,data:h},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[a,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[a,d,u*d,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=H("input",e[0].dataType,e[0].dims.length),x=H("position_ids",e[1].dataType,e[1].dims.length),T=H("cos_cache",e[2].dataType,e[2].dims.length),S=H("sin_cache",e[3].dataType,e[3].dims.length),E=ce("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${w.declareVariables(b,x,T,S,E)}

        ${w.mainStart(Dn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",ce("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${b.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(h)/Dn)},programUniforms:f})}},Yp=(e,t)=>{Kp(e.inputs,t),e.compute(Vr(e.inputs,t))}}),Qp,Zp,Wo,Jp,eh,Sw=J(()=>{Ye(),_e(),wo(),Lp(),jp(),on(),Xp(),xe(),Qp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],o=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let a=!1,u=n.dims[0],l=n.dims[1],c=n.dims.length===3?a?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,h=0,g=!r||r.dims.length===0,f=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=f*t.numHeads);let y=o&&o.dims.length!==0,w=s&&s.dims.length!==0;if(y&&o.dims.length===4&&o.dims[0]===u&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===f)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=o.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==f)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==f)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,T=!1,S=t.kvNumHeads?f*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let I=E.dims.reduce((C,v)=>C*v,1);if(I!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${I}.`);for(let C=0;C<E.dims.length;C++)if(E.dims[C]!==1&&E.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${E.dims[C]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:f,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:b}},Zp=Ne({perm:[0,2,1,3]}),Wo=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(mt(r,Zp.perm),{inputs:[r],outputs:[-1]})[0]),r},Jp=(e,t,n,r)=>{let i=7,o=["type","type"],s=[e*t],a=e*t,u=[{type:12,data:a},{type:12,data:t},{type:12,data:e}],l=c=>{let d=H("seq_lens",n.dataType,n.dims),h=H("total_seq_lens",r.dataType,r.dims),g=ce("pos_ids",i,s),f=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(f).declareVariables(d,h,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${d.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:l}},eh=(e,t)=>{var S;let n=Qp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,a=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Ne({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[h,g,f]=!i&&!o?e.compute(Go([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,o],y,w;if(t.doRotary){let E=e.compute(Jp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],I=e.inputs[7],C=e.inputs[8],v=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[h,E,I,C],z=[-1];y=e.compute(Vr(R,v),{inputs:R,outputs:z})[0],R.splice(0,1,g);let Y=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Vr(R,Y),{inputs:R,outputs:z})[0]}let b=sr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:h,void 0,0),x=Wo(e,t.doRotary?w:g,n),T=Wo(e,f,n);tr(e,b,x,T,void 0,void 0,s,a,void 0,n,u,l)}}),qo,th,nh,rh,Ew=J(()=>{_e(),$e(),on(),xe(),qo=(e,t,n,r,i,o,s,a)=>{let u=je(o),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,d=i*s,h=64;d===1&&(h=256);let g=[i,s,o/u],f=[i,s,2],y=["rank","type","type"],w=[];w.push(...fe(g,f));let b=x=>{let T=H("x",t.dataType,3,u),S=H("scale",n.dataType,n.dims),E=H("bias",r.dataType,r.dims),I=ce("output",1,3,2),C=[T,S,E,I];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${x.declareVariables(...C)}
  ${x.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${rn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${rn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${a}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${a};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:f,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},th=(e,t,n)=>{let r=t[0].dims,i=r,o=2,s=r[0],a=r[1],u=F.sizeFromDimension(r,o),l=je(u),c=F.size(i)/l,d=qo(e,t[0],t[1],t[2],s,u,a,n.epsilon),h=[s,a,u/l],g=[s,a],f=["type","none"],y=w=>{let b=H("x",t[0].dataType,h.length,l),x=H("scale_shift",1,g.length,2),T=ce("output",t[0].dataType,h.length,l),S=[b,x,T];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...fe(h,g,h)]}),getShaderSource:y},{inputs:[t[0],d]})},nh=(e,t,n)=>{let r=t[0].dims,i=r,o=r[0],s=r[r.length-1],a=F.sizeFromDimension(r,1)/s,u=je(s),l=F.size(i)/u,c=[{type:12,data:a},{type:12,data:Math.floor(s/u)}],d=["type","type"],h=!1,g=[0,r.length-1];for(let b=0;b<r.length-2;b++)h=h||r[b+1]!==1,g.push(b+1);h=h&&r[r.length-1]!==1;let f=h?e.compute(mt(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[g[x]])),y=qo(e,f,t[1],t[2],o,a,s,n.epsilon),w=b=>{let x=et(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${v}))`;case 2:return`vec2<${x}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=H("input",t[0].dataType,t[0].dims,u),I=ce("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},rh=(e,t)=>{t.format==="NHWC"?nh(e,e.inputs,t):th(e,e.inputs,t)}}),ih,oh,sh,Tw=J(()=>{_e(),$e(),xe(),ih=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},oh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,o=e[1],s=!r&&e[2],a=i,u=F.normalizeAxis(t.axis,i.length),l=F.sizeToDimension(i,u),c=F.sizeFromDimension(i,u),d=F.size(o.dims),h=s?F.size(s.dims):0;if(d!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${h}`);let g=[];for(let E=0;E<i.length;++E)E<u?g.push(i[E]):g.push(1);let f=je(c),y=["type","type"],w=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/f)},{type:1,data:t.epsilon}];s&&y.push("type");let b=n>1,x=n>2,T=E=>{let I=et(e[0].dataType),C=[H("x",e[0].dataType,e[0].dims,f),H("scale",o.dataType,o.dims,f)];s&&C.push(H("bias",s.dataType,s.dims,f)),C.push(ce("output",e[0].dataType,a,f)),b&&C.push(ce("mean_data_output",1,g)),x&&C.push(ce("inv_std_output",1,g));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${co("f32",f)};
    var mean_square_vector = ${co("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Un(I,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${rn("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${rn("mean_square_vector",f)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Un(I,f,"x[j + offset]")};
      let f32scale = ${Un(I,f,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Un(I,f,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:a,dataType:e[0].dataType}];return b&&S.push({dims:g,dataType:1}),x&&S.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:T}},sh=(e,t)=>{ih(e.inputs),e.compute(oh(e.inputs,t,e.outputCount))}}),ah,uh,Mw=J(()=>{$e(),To(),ko(),ah=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},uh=e=>{ah(e.inputs);let t=Pn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Eo(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=F.size(e.inputs[0].dims.slice(0,-2)),s=F.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&s===1){let a=e.inputs[0].reshape([1,o,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,o,n],c=[a,u];e.compute(Fr(c,{activation:""},t,l),{inputs:c})}else e.compute(Fr(e.inputs,{activation:""},t))}}}),lh,ch,dh,ph,hh,Iw=J(()=>{_e(),$e(),Ye(),xe(),lh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,s=e[1];if(!F.areEqual(s.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let a=e[2].dims;if(F.size(a)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(F.size(u)!==l)throw new Error("zeroPoints input size error.")}},ch=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,s=t.n,a=n.slice(0,r-2),u=F.size(a),l=e[1].dims[2]/4,c=e[0].dataType,d=je(t.k),h=je(l),g=je(s),f=a.concat([i,s]),y=i>1&&s/g%2===0?2:1,w=F.size(f)/g/y,b=64,x=[],T=[u,i,o/d],S=F.convertShape(e[1].dims).slice();S.splice(-1,1,l/h),x.push(...fe(T)),x.push(...fe(S)),x.push(...fe(e[2].dims)),e.length===4&&x.push(...fe(F.convertShape(e[3].dims)));let E=[u,i,s/g];x.push(...fe(E));let I=C=>{let v=T.length,R=H("a",e[0].dataType,v,d),z=H("b",12,S.length,h),Y=H("scales",e[2].dataType,e[2].dims.length),U=[R,z,Y],G=e.length===4?H("zero_points",12,e[3].dims.length):void 0;G&&U.push(G);let N=E.length,W=ce("output",e[0].dataType,N,g),K=et(e[0].dataType),Z=(()=>{switch(d){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${d}-component is not supported.`)}})(),me=Math.floor(32/t.bits),L=Math.floor(me/8),ee=()=>{let P="";for(let B=0;B<L;B++){let V=B*t.bits*4,X=V+t.bits;P+=`
          // reuse a data (pass ${B})
            var input_offset${B>0?B:""} = ${B===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${B>0?B:""}: ${Z};
            for (var j${B>0?B:""}: u32 = 0; j${B>0?B:""} < ${8/d}; j${B>0?B:""}++) {
              a_data${B>0?B:""}[j${B>0?B:""}] = ${R.getByOffset(`input_offset${B>0?B:""}`)};
              input_offset${B>0?B:""}++;
            }
          `;for(let Q=0;Q<g*y;Q++)P+=`
            b_value = ${h===1?`b${Q}_data`:`b${Q}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${B*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${V}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${X}u) & b_mask);`}
            b_quantized_values = ${Z}(${Array.from({length:4},(ne,ye)=>`${K}(b_value_lower[${ye}]), ${K}(b_value_upper[${ye}])`).join(", ")});
            b_dequantized_values = ${d===1?`${Z}(${Array.from({length:8},(ne,ye)=>`(b_quantized_values[${ye}] - ${G?`zero_point${Q}`:"zero_point"}) * scale${Q}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${G?`zero_point${Q}`:"zero_point"}`).join(",")})) * scale${Q};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(Q/g)}]${g>1?`[${Q%g}]`:""} += ${Array.from({length:8/d},(ne,ye)=>`${d===1?`a_data${B>0?B:""}[${ye}] * b_dequantized_values[${ye}]`:`dot(a_data${B>0?B:""}[${ye}], b_dequantized_values[${ye}])`}`).join(" + ")};
          `}return P},A=()=>{let P=`
            var col_index = col * ${g};
            ${G?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let B=0;B<g*y;B++)P+=`
            let scale${B} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return P},O=()=>{let P=`col_index = col * ${g};`;for(let B=0;B<g*y;B++)P+=`
            let b${B}_data = ${z.getByIndices(`${z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return P+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,P};return`
        var<workgroup> workgroup_shared: array<${W.type.value}, ${y*b}>;
        ${C.declareVariables(...U,W)}
        ${C.mainStart([b,1,1])}
          let output_indices = ${W.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${A()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${O()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${ee()}
                word_offset += ${me/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${W.setByIndices(`${W.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${h};${g};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:c}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:I}},dh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,s=t.n,a=n.slice(0,r-2),u=F.size(a),l=e[1].dims[2]/4,c=e[0].dataType,d=je(t.k),h=je(l),g=a.concat([i,s]),f=128,y=s%8===0?8:s%4===0?4:1,w=f/y,b=Math.floor(32/t.bits),x=w*h*b,T=x/d,S=x/t.blockSize,E=F.size(g)/y,I=[],C=[u,i,o/d],v=F.convertShape(e[1].dims).slice();v.splice(-1,1,l/h),I.push(...fe(C)),I.push(...fe(v)),I.push(...fe(e[2].dims)),e.length===4&&I.push(...fe(F.convertShape(e[3].dims)));let R=[u,i,s];I.push(...fe(R));let z=Y=>{let U=C.length,G=H("a",e[0].dataType,U,d),N=H("b",12,v.length,h),W=H("scales",e[2].dataType,e[2].dims.length),K=[G,N,W],Z=e.length===4?H("zero_points",12,e[3].dims.length):void 0;Z&&K.push(Z);let me=R.length,L=ce("output",e[0].dataType,me),ee=et(e[0].dataType),A=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${w}>, ${y}>;
        ${Y.declareVariables(...K,L)}
        ${Y.mainStart([w,y,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${f})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${Z?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ee}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ee}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${W.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${N.getByIndices(`${N.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let O=Math.floor(b/8),P="";for(let B=0;B<O;B++){let V=B*t.bits*4,X=V+t.bits;P+=`
              ${A()}
              {${t.bits===2?`
                let half_word = b_value >> ${B*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${V}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${X}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ee}>(${Array.from({length:4},(Q,ne)=>`${ee}(b_value_lower[${ne}]), ${ee}(b_value_upper[${ne}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ee}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Q,ne)=>`${`dot(a_data${ne}, b_dequantized_values[${ne}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return P})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${h};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:E},programUniforms:I}),getShaderSource:z}},ph=(e,t)=>{lh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(dh(e.inputs,t)):e.compute(ch(e.inputs,t))},hh=e=>Ne(e)}),fh,mh,gh,yh,wh,_h,bh,$h,xh,Cw=J(()=>{_e(),$e(),xe(),fh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},mh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${pe("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${pe("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},gh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${pe("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${pe("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${pe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},yh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${pe("uniforms.x_shape",i,t)})) {
                  k = i32(${pe("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${pe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},wh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${pe("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${pe("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${pe("uniforms.x_shape",i,t)})) {
                  k -= i32(${pe("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${pe("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},_h=(e,t,n)=>{switch(n.mode){case 0:return mh(e,t,n.pads.length);case 1:return gh(e,t,n.pads.length);case 2:return yh(e,t,n.pads.length);case 3:return wh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},bh=(e,t)=>{let n=F.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=F.size(n),o=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&o.push({type:s?e[2].dataType:1,data:t.value}),o.push(...fe(e[0].dims,n));let a=["rank"],u=l=>{let c=ce("output",e[0].dataType,n.length),d=H("x",e[0].dataType,r.length),h=d.type.value,g=_h(c,r.length,t),f=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&f.push({name:"constant_value",type:s?h:"f32"}),`
            ${l.registerUniforms(f).declareVariables(d,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(n)/64)},programUniforms:o}),getShaderSource:u}},$h=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let a=e[3].getBigInt64Array();for(let u=0;u<a.length;u++)o[Number(a[u])]=Number(n[u]),o[Number(a[u])+i]=Number(n[u+a.length])}else n.forEach((a,u)=>o[Number(u)]=Number(a));let s=[];return o.forEach(a=>s.push(a)),{mode:t.mode,value:r,pads:s}}else return t},xh=(e,t)=>{fh(e.inputs);let n=$h(e.inputs,t);e.compute(bh(e.inputs,n),{inputs:[0]})}}),ar,Vo,Ho,jo,Ko,vh,Sh,Yo,Xo,Eh,Th,Qo,Mh,Ih,Zo,Ch,kh,Ah,Rh,kw=J(()=>{wt(),_e(),$e(),xe(),ar=e=>{if(Pe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Vo=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),a=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();Nr.adjustPoolAttributes(n,i,s,a,u,l);let c=Nr.computePoolOutputShape(n,i,a,u,s,l,t.autoPad),d=Object.assign({},t);o?Object.assign(d,{kernelShape:s,strides:a,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:s,strides:a,pads:l,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[d,r?h:c]},Ho=(e,t)=>{let n=t.format==="NHWC",r=F.size(e),i=F.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let a=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],d=!!(l+c);o.push({type:12,data:a},{type:12,data:u},{type:12,data:l},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],f=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];h=!!(y+w),o.push({type:12,data:g},{type:12,data:f},{type:12,data:y},{type:12,data:w}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,s,!0,d,h]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let a=F.computeStrides(t.kernelShape);o.push({type:12,data:a},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:a.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[o,s,!!u,!1,!1]}},jo=(e,t,n,r,i,o,s,a,u,l,c,d)=>{let h=i.format==="NHWC",g=t.type.value,f=ce("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(h?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,i.kernelShape.length===2){let T=n-(h?3:2);d?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,b=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var value = ${g}(${a});
              var pad = 0;
              ${w}
              ${y}
              ${b}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,b="";return l?b=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${a});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${pe("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${pe("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${pe("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${pe("uniforms.pads","j - 2u",w)};
                  ${b}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ko=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,vh=e=>`${Ko(e)};${e.countIncludePad}`,Sh=e=>`${Ko(e)};${e.storageOrder};${e.dilations}`,Yo=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Xo=(e,t,n,r)=>{let[i,o]=Vo(t,r,n),s=H("x",t.dataType,t.dims.length),a=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${a}(uniforms.kernelSize);`:l+=`value /= ${a}(i32(uniforms.kernelSize) - pad);`;let[c,d,h,g,f]=Ho(o,i);c.push(...fe(t.dims,o));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(o)/64)},programUniforms:c}),getShaderSource:w=>jo(w,s,t.dims.length,o.length,i,u,l,0,d,h,g,f)}},Eh=e=>{let t=e.count_include_pad!==0,n=Yo(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:vh(r)}},Th=(e,t)=>{ar(e.inputs),e.compute(Xo("AveragePool",e.inputs[0],!1,t))},Qo={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Mh=e=>{let t=e.format;return{format:t,...Qo,cacheKey:t}},Ih=(e,t)=>{ar(e.inputs),e.compute(Xo("GlobalAveragePool",e.inputs[0],!0,t))},Zo=(e,t,n,r)=>{let[i,o]=Vo(t,r,n),s=`
      value = max(x_val, value);
    `,a="",u=H("x",t.dataType,t.dims.length),l=["rank"],[c,d,h,g,f]=Ho(o,i);return c.push(...fe(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${h};${g};${f}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(o)/64)},programUniforms:c}),getShaderSource:y=>jo(y,u,t.dims.length,o.length,i,s,a,t.dataType===10?-65504:-1e5,d,h,g,f)}},Ch=(e,t)=>{ar(e.inputs),e.compute(Zo("MaxPool",e.inputs[0],!1,t))},kh=e=>{let t=e.storage_order,n=e.dilations,r=Yo(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Sh(i)}},Ah=e=>{let t=e.format;return{format:t,...Qo,cacheKey:t}},Rh=(e,t)=>{ar(e.inputs),e.compute(Zo("GlobalMaxPool",e.inputs[0],!0,t))}}),Oh,Nh,zh,Bh,Aw=J(()=>{_e(),$e(),Ye(),xe(),Oh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Nh=(e,t)=>{let n=F.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,o=e[0].dims,s=e[1].dataType,a=F.size(o),u=r===3||r===2,l=u?[Math.ceil(F.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,d=e.length>2?e[2]:void 0,h=d?u?[Math.ceil(F.size(d.dims)/4)]:d.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,f=g===!1&&c.length===1,y=je(a),w=g&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,T=H("input",u?12:r,l.length,x),S=H("scale",s,c.length),E=d?H("zero_point",u?12:r,h.length):void 0,I=ce("output",s,o.length,b),C=[T,S];E&&C.push(E);let v=[l,c];d&&v.push(h);let R=[{type:12,data:a/b},{type:12,data:n},{type:12,data:t.blockSize},...fe(...v,o)],z=Y=>{let U=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(U).declareVariables(...C,I)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${S.getByOffset("0")}`:f?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:f?u?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:z,getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:Math.ceil(a/b/64),y:1,z:1},programUniforms:R})}},zh=(e,t)=>{Oh(e.inputs,t),e.compute(Nh(e.inputs,t))},Bh=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),Ph,Dh,Uh,Rw=J(()=>{wt(),_e(),xe(),Ph=(e,t,n)=>{let r=e===t,i=e<t&&n<0,o=e>t&&n>0;if(r||i||o)throw new Error("Range these inputs' contents are invalid.")},Dh=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),o=[i],s=i,a=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...fe(o)],u=l=>{let c=ce("output",r,o.length),d=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(h).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:a})}},Uh=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Pe.webgpu.validateInputContent&&Ph(t,n,r),e.compute(Dh(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Lh,Fh,Gh,Wh,Ow=J(()=>{_e(),$e(),Ye(),xe(),Lh=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${o}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${o}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Fh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,o=1,s=Math.ceil(F.sizeToDimension(r,r.length-1)/o),a=r[r.length-1],u=F.sizeFromDimension(n,a),l=[{type:12,data:s},{type:12,data:a},{type:12,data:u},...fe(e[1].dims,e[2].dims,i)],c=d=>{let h=H("indices",e[1].dataType,e[1].dims.length),g=H("updates",e[2].dataType,e[2].dims.length,o),f=t.reduction!=="none"&&t.reduction!==""?Yu("output",e[0].dataType,i.length):ce("output",e[0].dataType,i.length,o);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,g,f)}
      ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Lh(t.reduction,"output[data_offset + i]","value",f.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:c}},Gh=e=>Ne({reduction:e.reduction}),Wh=(e,t)=>{e.compute(Fh(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),qh,Vh,Hh,Jo,jh,Kh,Yh,Xh,Qh,Zh,Jh,ef,es,tf,nf,rf,of,sf,af,uf,Nw=J(()=>{_e(),$e(),Ye(),xe(),qh=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Vh=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,o)=>r[i]=e[o]),r},Hh=(e,t,n,r,i,o)=>{let[s,a,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>o.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(a>0&&e.length>a&&e[a].dims.length===1&&e[a].dims[0]>0){if(e[a].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");qh(r,t),t.axes.length>0&&Vh(r,t.axes,l).forEach((c,d)=>r[d]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Jo=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,jh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Jo("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Jo("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Kh=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Yh=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,s)=>{r[o]=i[s],r[s+n]=i[t.length+s]}),r):i},Xh=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(o=>i.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,s)=>i[o]=n[s])}else n.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,s)=>Math.round(o*t[s]))}return i},Qh=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=r),n.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),i.forEach((o,s)=>i[s]=Math.round(o*t[s]))),i},Zh=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${pe("uniforms.scales","i",r)};
        var roi_low = ${pe("uniforms.roi","i",i)};
        var roi_hi = ${pe("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${pe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Jh=(e,t,n,r,i,o,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",o)};
          var roi_hi = ${pe("uniforms.roi",`i + ${n.length}`,o)};
          var input_shape_i = ${pe("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,ef=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,es=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",tf=(e,t,n,r,i)=>{let[o,s,a,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",a,`max(0, min(col, ${n[a]} - 1))`)};
      ${es(e,u,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${a}];
      ${r?`if (row < 0 || row > (${n[s]} - 1) || col < 0 || col > (${n[a]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[s]} - 1));
      col = max(0, min(col, ${n[a]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},nf=(e,t,n,r,i,o,s,a,u,l)=>{let c=n.length===2,[d,h]=c?[0,1]:[2,3],g=e.type.value,f=y=>{let w=y===d?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${o[y]}, ${o[y]} + ${n.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${a} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${g} = originalIdx + ${g}(i);
          if (${w} < 0 || ${w} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:a?`return ${u};`:`${w} = max(0, min(${w}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
          data[i + 1] = ${y===d?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(d)};
    ${f(h)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},rf=(e,t,n,r,i)=>{let[o,s,a,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",a,`max(0, min(height, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${es(e,l,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${a}];
      var width:${c} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[s]} - 1) || height < 0 || height > (${n[a]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[s]} - 1));
      height = max(0, min(height, ${n[a]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},of=(e,t,n,r,i,o)=>{let s=e.dims,a=Yh(o,t.axes,s.length),u=Xh(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Qh(s,l,t)));let c=ce("output",e.dataType,u.length),d=H("input",e.dataType,s.length),h=F.size(u),g=s.length===u.length&&s.every((x,T)=>x===u[T]),f=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,b=x=>`
      ${g?"":`
      ${jh(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ef(d,s)};
              ${Kh(t.nearestMode,n,w)};
              ${Jh(d,c,s,u,l.length,a.length,f)};
              `;case"linear":return`
              ${Zh(c,s,u,l.length,a.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${tf(d,c,s,f,y)}`;if(s.length===3||s.length===5)return`${rf(d,c,s,f,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${nf(d,c,s,u,l,a,t.cubicCoeffA,f,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",a.length).declareVariables(d,c)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${a.length>0?a:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:a},...fe(s,u)]})}},sf=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},af=(e,t)=>{let n=[],r=[],i=[],o=sf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Hh(e.inputs,t,o,n,r,i),e.compute(of(e.inputs[0],t,o,n,r,i),{inputs:[0]})},uf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,s=e.extrapolationValue,a=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:o,extrapolationValue:s,keepAspectRatioPolicy:a,mode:u,nearestMode:l})}}),lf,cf,df,zw=J(()=>{_e(),$e(),xe(),lf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},cf=(e,t,n,r)=>{let i=t.simplified,o=e[0].dims,s=F.size(o),a=o,u=s,l=o.slice(-1)[0],c=r?o.slice(0,-1).concat(1):[],d=!i&&e.length>3,h=e.length>4,g=r&&n>1,f=r&&n>2,y=n>3,w=64,b=je(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],T=E=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[H("x",e[0].dataType,e[0].dims,b),H("skip",e[1].dataType,e[1].dims,b),H("gamma",e[2].dataType,e[2].dims,b)];d&&C.push(H("beta",e[3].dataType,e[3].dims,b)),h&&C.push(H("bias",e[4].dataType,e[4].dims,b)),C.push(ce("output",e[0].dataType,a,b)),g&&C.push(ce("mean_output",1,c)),f&&C.push(ce("inv_std_output",1,c)),y&&C.push(ce("input_skip_bias_sum",e[0].dataType,a,b));let v=et(e[0].dataType),R=et(1,b);return`

      ${E.registerUniforms(I).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${w}>;
      var<workgroup> sum_squared_shared : array<${R}, ${w}>;

      ${E.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Un(v,b,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${rn("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${rn("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${f?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:a,dataType:e[0].dataType}];return n>1&&S.push({dims:c,dataType:1}),n>2&&S.push({dims:c,dataType:1}),n>3&&S.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${g};${f};${y}`,inputDependencies:e.map((E,I)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},df=(e,t)=>{lf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(cf(e.inputs,t,e.outputCount,!1),{outputs:n})}}),pf,ur,hf,ts,ff,mf,gf,yf,Bw=J(()=>{_e(),$e(),Ye(),xe(),pf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},ur=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},hf=(e,t)=>{if(e.length>1){let n=ur(e,1),r=ur(e,2),i=ur(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ne({starts:n,ends:r,axes:i})}else return t},ts=(e,t,n,r,i)=>{let o=e;return e<0&&(o+=n[r[t]]),i[t]<0?Math.max(0,Math.min(o,n[r[t]]-1)):Math.max(0,Math.min(o,n[r[t]]))},ff=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${pe("uniforms.input_shape","i",n.length)};
            let steps_i = ${pe("uniforms.steps","i",n.length)};
            let signs_i = ${pe("uniforms.signs","i",n.length)};
            let starts_i = ${pe("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,mf=(e,t)=>{let n=e[0].dims,r=F.size(n),i=t.axes.length>0?F.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=ur(e,4);o.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let s=t.starts.map((b,x)=>ts(b,x,n,i,o)),a=t.ends.map((b,x)=>ts(b,x,n,i,o));if(i.length!==s.length||i.length!==a.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(s.splice(b,0,0),a.splice(b,0,n[b]),o.splice(b,0,1));let u=o.map(b=>Math.sign(b));o.forEach((b,x,T)=>{if(b<0){let S=(a[x]-s[x])/b,E=s[x],I=E+S*o[x];s[x]=I,a[x]=E,T[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((a[b]-s[b])/o[b])});let c={dims:l,dataType:e[0].dataType},d=ce("output",e[0].dataType,l.length),h=H("input",e[0].dataType,e[0].dims.length),g=F.size(l),f=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:o.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:u},{type:12,data:o},...fe(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(f).declareVariables(h,d)}
        ${ff(h,d,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},gf=(e,t)=>{pf(e.inputs,t);let n=hf(e.inputs,t);e.compute(mf(e.inputs,n),{inputs:[0]})},yf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Ne({starts:t,ends:n,axes:r})}}),wf,_f,bf,$f,Pw=J(()=>{_e(),$e(),Ye(),on(),xe(),wf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},_f=(e,t)=>{let n=e.inputs[0],r=n.dims,i=F.size(r),o=r.length,s=F.normalizeAxis(t.axis,o),a=s<r.length-1,u,l=[];a?(l=Array.from({length:o},(C,v)=>v),l[s]=o-1,l[o-1]=s,u=e.compute(mt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,d=c[o-1],h=i/d,g=je(d),f=d/g,y=64;h===1&&(y=256);let w=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,b=H("x",u.dataType,u.dims,g),x=ce("result",u.dataType,u.dims,g),T=b.type.value,S=et(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(b,x)}
      ${C.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${w("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${rn("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${g};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:f}]}),getShaderSource:E},{inputs:[u],outputs:[a?-1:0]})[0];a&&e.compute(mt(I,l),{inputs:[I]})},bf=(e,t)=>{wf(e.inputs),_f(e,t)},$f=e=>Ne({axis:e.axis})}),ns,xf,vf,Sf,Ef,Dw=J(()=>{_e(),$e(),xe(),ns=e=>Array.from(e.getBigInt64Array(),Number),xf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ns(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},vf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Sf=(e,t)=>{let n=e[0].dims,r=t??ns(e[1]),i=vf(n,r),o=F.size(i),s=e[0].dataType,a=H("input",s,n.length),u=ce("output",s,i.length),l=c=>`
      const inputShape = ${a.indices(...n)};
      ${c.registerUniform("output_size","u32").declareVariables(a,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${a.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${a.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${a.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",a.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...fe(e[0].dims,i)]}),getShaderSource:l}},Ef=e=>{xf(e.inputs),e.compute(Sf(e.inputs),{inputs:[0]})}}),Tf,Mf,If,Uw=J(()=>{_e(),$e(),xe(),Tf=(e,t,n,r,i)=>{let o=ce("output_data",i,n.length,4),s=H("a_data",t[1].dataType,t[1].dims.length,4),a=H("b_data",t[2].dataType,t[2].dims.length,4),u=H("c_data",t[0].dataType,t[0].dims.length,4),l,c=(d,h,g)=>`select(${h}, ${d}, ${g})`;if(!r)l=o.setByOffset("global_idx",c(s.getByOffset("global_idx"),a.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(h,g,f="")=>{let y=`a_data[index_a${g}][component_a${g}]`,w=`b_data[index_b${g}][component_b${g}]`,b=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${o.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,o)};
            let offset_b${g} = ${a.broadcastedIndicesToOffset(`output_indices${g}`,o)};
            let offset_c${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,o)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${h}[${g}] = ${f}(${c(y,w,b)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${d("data",0,"u32")}
            ${d("data",1,"u32")}
            ${d("data",2,"u32")}
            ${d("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${d("output_data[global_idx]",0)}
            ${d("output_data[global_idx]",1)}
            ${d("output_data[global_idx]",2)}
            ${d("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,a,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Mf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,o=!(F.areEqual(t,n)&&F.areEqual(n,r)),s=t,a=F.size(t);if(o){let l=Pn.calcShape(Pn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,a=F.size(s)}let u=Math.ceil(a/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Tf(l,e,s,o,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64/4)},programUniforms:[{type:12,data:u},...fe(r,t,n,s)]})}},If=e=>{e.compute(Mf(e.inputs))}}),Cf,Lw=J(()=>{ew(),wo(),tw(),nw(),rw(),iw(),ow(),cw(),pw(),hw(),fw(),mw(),gw(),yw(),ww(),_w(),bw(),$w(),xw(),vw(),Sw(),Ew(),Tw(),Mw(),Iw(),Lp(),Cw(),kw(),Aw(),Rw(),Ow(),mo(),Nw(),Xp(),zw(),Bw(),Pw(),jp(),Dw(),on(),xo(),Uw(),Cf=new Map([["Abs",[uc]],["Acos",[lc]],["Acosh",[cc]],["Add",[Qc]],["ArgMax",[jl,yo]],["ArgMin",[Hl,yo]],["Asin",[dc]],["Asinh",[pc]],["Atan",[hc]],["Atanh",[fc]],["Attention",[Jl]],["AveragePool",[Th,Eh]],["BatchNormalization",[rc]],["BiasAdd",[sc]],["BiasSplitGelu",[Kc]],["Cast",[gc,mc]],["Ceil",[_c]],["Clip",[wc]],["Concat",[dd,pd]],["Conv",[zo,Oo]],["ConvTranspose",[Ud,Bd]],["Cos",[bc]],["Cosh",[$c]],["CumSum",[Fd,Gd]],["DepthToSpace",[Hd,jd]],["DequantizeLinear",[zh,Bh]],["Div",[Zc]],["Einsum",[Jd,ep]],["Elu",[xc,nr]],["Equal",[Jc]],["Erf",[vc]],["Exp",[Sc]],["Expand",[ip]],["FastGelu",[sp]],["Floor",[Ec]],["FusedConv",[zo,Oo]],["Gather",[cp,lp]],["GatherElements",[$p,bp]],["GatherBlockQuantized",[gp,yp]],["GatherND",[pp,hp]],["Gelu",[Tc]],["Gemm",[Ep,Sp]],["GlobalAveragePool",[Ih,Mh]],["GlobalMaxPool",[Rh,Ah]],["Greater",[rd]],["GreaterOrEqual",[od]],["GridSample",[Np,zp]],["GroupQueryAttention",[eh]],["HardSigmoid",[Nc,Oc]],["InstanceNormalization",[rh]],["LayerNormalization",[sh]],["LeakyRelu",[Mc,nr]],["Less",[id]],["LessOrEqual",[sd]],["Log",[Gc]],["MatMul",[uh]],["MatMulNBits",[ph,hh]],["MaxPool",[Ch,kh]],["Mul",[ed]],["MultiHeadAttention",[Up,Pp]],["Neg",[Cc]],["Not",[Ic]],["Pad",[xh]],["Pow",[td]],["QuickGelu",[Vc,nr]],["Range",[Uh]],["Reciprocal",[kc]],["ReduceMin",[Fl]],["ReduceMean",[Bl]],["ReduceMax",[Ll]],["ReduceSum",[Wl]],["ReduceProd",[Gl]],["ReduceL1",[Pl]],["ReduceL2",[Dl]],["ReduceLogSum",[Vl]],["ReduceLogSumExp",[Ul]],["ReduceSumSquare",[ql]],["Relu",[Ac]],["Resize",[af,uf]],["RotaryEmbedding",[Yp]],["ScatterND",[Wh,Gh]],["Sigmoid",[Rc]],["Sin",[zc]],["Sinh",[Bc]],["Slice",[gf,yf]],["SkipLayerNormalization",[df]],["Split",[Vp,Hp]],["Sqrt",[Pc]],["Softmax",[bf,$f]],["Sub",[nd]],["Tan",[Dc]],["Tanh",[Uc]],["ThresholdedRelu",[Fc,nr]],["Tile",[Ef]],["Transpose",[rl,il]],["Where",[If]]])}),kf,Fw=J(()=>{wt(),Kt(),xe(),kf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Bt(e.programInfo.name);let o=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let a=[];for(let l of t)a.push({binding:a.length,resource:{buffer:l.buffer}});for(let l of n)a.push({binding:a.length,resource:{buffer:l.buffer}});i&&a.push({binding:a.length,resource:i});let u=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:a,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),xt(e.programInfo.name)}dispose(){}build(e,t){Bt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Qu(t,this.backend.device.limits),o=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${o}`,a=n.createShaderModule({code:s,label:e.name});Ae("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:a,entryPoint:"main"},layout:"auto",label:e.name});return xt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let o=t*n*r,s=Math.ceil(Math.sqrt(o));if(s>i){if(s=Math.ceil(Math.cbrt(o)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Af={};zn(Af,{WebGpuBackend:()=>zf});var Rf,Of,Nf,zf,Gw=J(()=>{wt(),_e(),Kt(),Pu(),Zy(),Lw(),Fw(),Rf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let o=e[r].dims.length;n.push(`${i};${o}`);break}case"dims":{let o=e[r].dims.join(",");n.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Of=(e,t,n)=>{var i,o;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Rf(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Nf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},zf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=a=>t.features.has(a)&&n.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let o=t,s=t.info??(typeof o.requestAdapterInfo=="function"?await o.requestAdapterInfo():void 0);this.adapterInfo=new Nf(s),this.gpuDataManager=ju(this),this.programManager=new kf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qi(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Bt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],s=o.kernelId,a=this.kernels.get(s),u=a.kernelType,l=a.kernelName,c=o.programName,d=o.inputTensorViews,h=o.outputTensorViews,g=t[i*2],f=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),w=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(b=>({dims:b.dims,dataType:jt(b.dataType)})),outputsMetadata:h.map(b=>({dims:b.dims,dataType:jt(b.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:w});else{let b="";d.forEach((T,S)=>{b+=`input[${S}]: [${T.dims}] | ${jt(T.dataType)}, `});let x="";h.forEach((T,S)=>{x+=`output[${S}]: [${T.dims}] | ${jt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${c}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Mr("GPU",`${c}::${g}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),xt()}run(e,t,n,r,i,o){Bt(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:a,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=n.length===0?a.map((x,T)=>T):n;if(c.length!==a.length)throw new Error(`Output size ${c.length} must be equal to ${a.length}.`);let d=[],h=[];for(let x=0;x<a.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=o)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let T=c[x]===-1,S=c[x]===-2,E=T||S?i(a[x].dataType,a[x].dims):r(c[x],a[x].dataType,a[x].dims);if(d.push(E),E.data===0)continue;let I=this.gpuDataManager.get(E.data);if(!I)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(I),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(I)}h.push(I)}if(s.length!==t.length||h.length!==d.length){if(h.length===0)return xt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(l){let x=0,T=[];l.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,z,Y;C.type===10?(Y=v.length>4?16:v.length>2?8:v.length*R,z=v.length>4?16:R*v.length):(Y=v.length<=2?v.length*R:16,z=16),x=Math.ceil(x/Y)*Y,T.push(x);let U=C.type===10?8:4;x+=v.length>4?Math.ceil(v.length/U)*z:v.length*R});let S=16;x=Math.ceil(x/S)*S;let E=new ArrayBuffer(x);l.forEach((C,v)=>{let R=T[v],z=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,R,z.length).set(z);else if(C.type===12)new Uint32Array(E,R,z.length).set(z);else if(C.type===10)new Uint16Array(E,R,z.length).set(z);else if(C.type===1)new Float32Array(E,R,z.length).set(z);else throw new Error(`Unsupported uniform type: ${jt(C.type)}`)});let I=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,E,0,x),this.gpuDataManager.release(I.id),g={offset:0,size:x,buffer:I.buffer}}let f=this.programManager.normalizeDispatchGroupSize(u),y=f[1]===1&&f[2]===1,w=Of(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,f),this.programManager.setArtifact(w,b),Ae("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],S=T.type,E=typeof T.data=="number"?1:T.data.length,[I,C]=b.uniformVariablesInfo[x];if(S!==I||E!==C)throw new Error(`Uniform variable ${x} mismatch: expect type ${I} with size ${C}, got type ${S} with size ${E} in program "${b.programInfo.name}".`)}}if(Ae("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${f[0]}x${f[1]}x${f[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,s,h,f,g),xt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Cf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,o=r.kernelName,s=r.kernelEntry,a=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,a[0]&&(a[1]=a[0](a[1]),a[0]=void 0),Ae("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,a[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${o}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,o);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await lo(this,e,t);return Zi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ae("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ae("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ae("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Bf={};zn(Bf,{init:()=>Df});var Hr,Pf,Df,Ww=J(()=>{_e(),Kt(),$e(),Qy(),Hr=class Iy{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(F.size(t)!==F.size(this.dims))throw new Error("Invalid new shape");return new Iy(this.module,this.dataType,this.data,t)}},Pf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,o));let s=Number(e.getValue(r*i++,o));this.outputCount=Number(e.getValue(r*i++,o)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,o));let a=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,o)),c=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,o)),h=[];for(let g=0;g<d;g++)h.push(Number(e.getValue(r*i++,o)));a.push(new Hr(e,l,c,h))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(a=>typeof a=="number"?this.inputs[a]:a))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(a,u,l)=>new Hr(this.module,u,this.output(a,l),l),o=(a,u)=>{let l=$n(a,u);if(!l)throw new Error(`Unsupported data type: ${a}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new Hr(this.module,a,c,u)};return this.backend.run(e,n,r,i,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(o+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Df=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(Gw(),Yn(Af)).WebGpuBackend,s=new o;await s.initialize(n,r),i("webgpu",[s,a=>s.alloc(Number(a)),a=>s.free(a),(a,u,l,c=!1)=>{if(c)Ae("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(a)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(a),Number(u));else{Ae("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(a)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(a>>>0),Number(a>>>0)+Number(l));s.upload(Number(u),d)}},async(a,u,l)=>{Ae("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${u}, size=${l}`),await s.download(Number(a),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(a,u,l)=>s.createKernel(a,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),a=>s.releaseKernel(a),(a,u,l,c)=>{Ae("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${a}, contextDataOffset=${u}`);let d=new Pf(t,s,Number(u));return s.computeKernel(Number(a),d,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let o=new Wu(n);i("webnn",[o,()=>o.reserveTensorId(),s=>o.releaseTensorId(s),async(s,a,u,l,c)=>o.ensureTensor(s,a,u,l,c),(s,a)=>{o.uploadTensor(s,a)},async(s,a)=>o.downloadTensor(s,a),(s,a)=>o.registerMLContext(s,a),!!n.trace])}}}),Uf,rs,is,sn,Lf,os,jr,ss,as,us,ls,cs,ds,Ff=J(()=>{wt(),Ky(),Yy(),_e(),wn(),Hi(),Mu(),Uf=(e,t)=>{Ue()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},rs=async e=>{Uf(e.wasm.numThreads,Or(e.logLevel))},is=async(e,t)=>{var r,i;(i=(r=Ue()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(Ww(),Yn(Bf)).init;t==="webgpu"&&await o("webgpu",Ue(),e,n),t==="webnn"&&await o("webnn",Ue(),e)}},sn=new Map,Lf=e=>{let t=Ue(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ze("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+r,o))]}finally{t.stackRestore(n)}},os=(e,t)=>{let n=Ue(),r=n.stackSave(),i=0;try{let o=n.PTR_SIZE,s=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,s,s+o)!==0&&ze("Can't get session input/output metadata.");let a=Number(n.getValue(s,"*"));i=Number(n.getValue(s+o,"*"));let u=n.HEAP32[i/4];if(u===0)return[a,0];let l=n.HEAPU32[i/4+1],c=[];for(let d=0;d<l;d++){let h=Number(n.getValue(i+8+d*o,"*"));c.push(h!==0?n.UTF8ToString(h):Number(n.getValue(i+8+(d+l)*o,"*")))}return[a,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},jr=e=>{let t=Ue(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ss=async(e,t)=>{var d,h,g,f;let n,r,i=Ue();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=jr(e);let o=0,s=0,a=0,u=[],l=[],c=[];try{if([s,u]=await Tu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let z=typeof R=="string"?R:R.path;v.push(Xi(typeof R=="string"?R:R.data).then(Y=>{i.mountExternalData(z,Y)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,z=R==null?void 0:R.context,Y=R==null?void 0:R.gpuDevice,U=R==null?void 0:R.deviceType,G=R==null?void 0:R.powerPreference;z?i.currentContext=z:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:U,powerPreference:G})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(n,r,s),(d=i.webgpuOnCreateSession)==null||d.call(i,o),o===0&&ze("Can't create a session."),(h=i.jsepOnCreateSession)==null||h.call(i),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Lf(o),b=!!(t!=null&&t.enableGraphCapture),x=[],T=[],S=[],E=[],I=[];for(let v=0;v<y;v++){let[R,z,Y]=os(o,v);R===0&&ze("Can't get an input name."),l.push(R);let U=i.UTF8ToString(R);x.push(U),S.push(z===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:jt(z),shape:Y})}for(let v=0;v<w;v++){let[R,z,Y]=os(o,v+y);R===0&&ze("Can't get an output name."),c.push(R);let U=i.UTF8ToString(R);T.push(U),E.push(z===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:jt(z),shape:Y});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){I.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[U])??"cpu",N=i.webnnIsGraphOutput;if(G==="cpu"&&N&&N(o,U)){I.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(b&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(G)}}let C=null;return I.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(a=i._OrtCreateBinding(o),a===0&&ze("Can't create IO binding."),C={handle:a,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Yi(v))}),sn.set(o,[o,l,c,C,b,!1]),[o,x,T,S,E]}catch(y){throw l.forEach(w=>i._OrtFree(w)),c.forEach(w=>i._OrtFree(w)),a!==0&&i._OrtReleaseBinding(a)!==0&&ze("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&ze("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&ze("Can't release session options."),u.forEach(y=>i._free(y)),(f=i.unmountExternalData)==null||f.call(i)}},as=e=>{var u,l,c;let t=Ue(),n=sn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,o,s,a]=n;s&&(a&&t._OrtClearBoundOutputs(s.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ze("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&ze("Can't release session."),sn.delete(e)},us=async(e,t,n,r,i,o,s=!1)=>{if(!e){t.push(0);return}let a=Ue(),u=a.PTR_SIZE,l=e[0],c=e[1],d=e[3],h=d,g,f;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let b=e[2].gpuBuffer;f=$n(bn(l),c);{let x=a.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=x(r,o,b,f)}}else if(d==="ml-tensor"){let b=e[2].mlTensor;f=$n(bn(l),c);let x=a.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=x(r,b,bn(l),c)}else{let b=e[2];if(Array.isArray(b)){f=u*b.length,g=a._malloc(f),n.push(g);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);a.setValue(g+x*u,vt(b[x],n),"*")}}else{let x=a.webnnIsGraphInput,T=a.webnnIsGraphOutput;if(l!=="string"&&x&&T){let S=a.UTF8ToString(i);if(x(r,S)||T(r,S)){let E=bn(l);f=$n(E,c),h="ml-tensor";let I=a.webnnCreateTemporaryTensor,C=a.webnnUploadTensor;if(!I||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await I(r,E,c);C(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),g=v}else f=b.byteLength,g=a._malloc(f),n.push(g),a.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,f),g)}else f=b.byteLength,g=a._malloc(f),n.push(g),a.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,f),g)}}let y=a.stackSave(),w=a.stackAlloc(4*c.length);try{c.forEach((x,T)=>a.setValue(w+T*u,x,u===4?"i32":"i64"));let b=a._OrtCreateTensor(bn(l),g,f,w,c.length,Yi(h));b===0&&ze(`Can't create tensor for input/output. session=${r}, index=${o}.`),t.push(b)}finally{a.stackRestore(y)}},ls=async(e,t,n,r,i,o)=>{var U,G,N,W;let s=Ue(),a=s.PTR_SIZE,u=sn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],d=u[2],h=u[3],g=u[4],f=u[5],y=t.length,w=r.length,b=0,x=[],T=[],S=[],E=[],I=[],C=s.stackSave(),v=s.stackAlloc(y*a),R=s.stackAlloc(y*a),z=s.stackAlloc(w*a),Y=s.stackAlloc(w*a);try{[b,x]=$u(o),gn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)await us(n[L],T,E,e,c[t[L]],t[L],g);for(let L=0;L<w;L++)await us(i[L],S,E,e,d[r[L]],y+r[L],g);yn("wasm prepareInputOutputTensor");for(let L=0;L<y;L++)s.setValue(v+L*a,T[L],"*"),s.setValue(R+L*a,c[t[L]],"*");for(let L=0;L<w;L++)s.setValue(z+L*a,S[L],"*"),s.setValue(Y+L*a,d[r[L]],"*");if(h&&!f){let{handle:L,outputPreferredLocations:ee,outputPreferredLocationsEncoded:A}=h;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);gn("wasm bindInputsOutputs");for(let O=0;O<y;O++){let P=t[O];await s._OrtBindInput(L,c[P],T[O])!==0&&ze(`Can't bind input[${O}] for session=${e}.`)}for(let O=0;O<w;O++){let P=r[O];(U=i[O])!=null&&U[3]?(I.push(S[O]),s._OrtBindOutput(L,d[P],S[O],0)!==0&&ze(`Can't bind pre-allocated output[${O}] for session=${e}.`)):s._OrtBindOutput(L,d[P],0,A[P])!==0&&ze(`Can't bind output[${O}] to ${ee[O]} for session=${e}.`)}yn("wasm bindInputsOutputs"),sn.set(e,[l,c,d,h,g,!0])}(G=s.jsepOnRunStart)==null||G.call(s,l),(N=s.webnnOnRunStart)==null||N.call(s,l);let K;h?K=await s._OrtRunWithBinding(l,h.handle,w,z,b):K=await s._OrtRun(l,R,v,y,Y,w,z,b),K!==0&&ze("failed to call OrtRun().");let Z=[],me=[];gn("wasm ProcessOutputTensor");for(let L=0;L<w;L++){let ee=Number(s.getValue(z+L*a,"*"));if(ee===S[L]||I.includes(S[L])){Z.push(i[L]),ee!==S[L]&&s._OrtReleaseTensor(ee)!==0&&ze("Can't release tensor.");continue}let A=s.stackSave(),O=s.stackAlloc(4*a),P=!1,B,V=0;try{s._OrtGetTensorData(ee,O,O+a,O+2*a,O+3*a)!==0&&ze(`Can't access output tensor data on index ${L}.`);let X=a===4?"i32":"i64",Q=Number(s.getValue(O,X));V=s.getValue(O+a,"*");let ne=s.getValue(O+a*2,"*"),ye=Number(s.getValue(O+a*3,X)),ve=[];for(let ge=0;ge<ye;ge++)ve.push(Number(s.getValue(ne+ge*a,X)));s._OrtFree(ne)!==0&&ze("Can't free memory for tensor dims.");let Te=ve.reduce((ge,we)=>ge*we,1);B=jt(Q);let Le=h==null?void 0:h.outputPreferredLocations[r[L]];if(B==="string"){if(Le==="gpu-buffer"||Le==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ge=[];for(let we=0;we<Te;we++){let Xe=s.getValue(V+we*a,"*"),yt=s.getValue(V+(we+1)*a,"*"),re=we===Te-1?void 0:yt-Xe;ge.push(s.UTF8ToString(Xe,re))}Z.push([B,ve,ge,"cpu"])}else if(Le==="gpu-buffer"&&Te>0){let ge=s.jsepGetBuffer;if(!ge)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let we=ge(V),Xe=$n(Q,Te);if(Xe===void 0||!ji(B))throw new Error(`Unsupported data type: ${B}`);P=!0,Z.push([B,ve,{gpuBuffer:we,download:s.jsepCreateDownloader(we,Xe,B),dispose:()=>{s._OrtReleaseTensor(ee)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(Le==="ml-tensor"&&Te>0){let ge=s.webnnEnsureTensor,we=s.webnnIsGraphInputOutputTypeSupported;if(!ge||!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if($n(Q,Te)===void 0||!Ki(B))throw new Error(`Unsupported data type: ${B}`);if(!we(e,B,!1))throw new Error(`preferredLocation "ml-tensor" for ${B} output is not supported by current WebNN Context.`);let Xe=await ge(e,V,Q,ve,!1);P=!0,Z.push([B,ve,{mlTensor:Xe,download:s.webnnCreateMLTensorDownloader(V,B),dispose:()=>{s.webnnReleaseTensorId(V),s._OrtReleaseTensor(ee)}},"ml-tensor"])}else if(Le==="ml-tensor-cpu-output"&&Te>0){let ge=s.webnnCreateMLTensorDownloader(V,B)(),we=Z.length;P=!0,me.push((async()=>{let Xe=[we,await ge];return s.webnnReleaseTensorId(V),s._OrtReleaseTensor(ee),Xe})()),Z.push([B,ve,[],"cpu"])}else{let ge=Rr(B),we=new ge(Te);new Uint8Array(we.buffer,we.byteOffset,we.byteLength).set(s.HEAPU8.subarray(V,V+we.byteLength)),Z.push([B,ve,we,"cpu"])}}finally{s.stackRestore(A),B==="string"&&V&&s._free(V),P||s._OrtReleaseTensor(ee)}}h&&!g&&(s._OrtClearBoundOutputs(h.handle)!==0&&ze("Can't clear bound outputs."),sn.set(e,[l,c,d,h,g,!1]));for(let[L,ee]of await Promise.all(me))Z[L][2]=ee;return yn("wasm ProcessOutputTensor"),Z}finally{(W=s.webnnOnRunEnd)==null||W.call(s,l),s.stackRestore(C),T.forEach(K=>s._OrtReleaseTensor(K)),S.forEach(K=>s._OrtReleaseTensor(K)),E.forEach(K=>s._free(K)),b!==0&&s._OrtReleaseRunOptions(b),x.forEach(K=>s._free(K))}},cs=e=>{let t=Ue(),n=sn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},ds=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),an,ct,Ln,lr,cr,Kr,ps,Yr,In,Cn,Gf,Wf,qf,Vf,Hf,jf,Kf,Yf,Xf=J(()=>{wt(),Ff(),wn(),Gi(),an=()=>!!Pe.wasm.proxy&&typeof document<"u",Ln=!1,lr=!1,cr=!1,Yr=new Map,In=(e,t)=>{let n=Yr.get(e);n?n.push(t):Yr.set(e,[t])},Cn=()=>{if(Ln||!lr||cr||!ct)throw new Error("worker not ready")},Gf=e=>{switch(e.data.type){case"init-wasm":Ln=!1,e.data.err?(cr=!0,ps[1](e.data.err)):(lr=!0,ps[0]()),Kr&&(URL.revokeObjectURL(Kr),Kr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Yr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Wf=async()=>{if(!lr){if(Ln)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(Ln=!0,an())return new Promise((e,t)=>{ct==null||ct.terminate(),gu().then(([n,r])=>{try{ct=r,ct.onerror=o=>t(o),ct.onmessage=Gf,ps=[e,t];let i={type:"init-wasm",in:Pe};!i.in.wasm.wasmPaths&&(n||Di)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ct.postMessage(i),Kr=n}catch(i){t(i)}},t)});try{await Vi(Pe.wasm),await rs(Pe),lr=!0}catch(e){throw cr=!0,e}finally{Ln=!1}}},qf=async e=>{if(an())return Cn(),new Promise((t,n)=>{In("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Pe}};ct.postMessage(r)});await is(Pe,e)},Vf=async e=>an()?(Cn(),new Promise((t,n)=>{In("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ct.postMessage(r,[e.buffer])})):jr(e),Hf=async(e,t)=>{if(an()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Cn(),new Promise((n,r)=>{In("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),ct.postMessage(i,o)})}else return ss(e,t)},jf=async e=>{if(an())return Cn(),new Promise((t,n)=>{In("release",[t,n]);let r={type:"release",in:e};ct.postMessage(r)});as(e)},Kf=async(e,t,n,r,i,o)=>{if(an()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Cn(),new Promise((s,a)=>{In("run",[s,a]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:o}};ct.postMessage(l,ds(u))})}else return ls(e,t,n,r,i,o)},Yf=async e=>{if(an())return Cn(),new Promise((t,n)=>{In("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ct.postMessage(r)});cs(e)}}),hs,Qf,Zf,qw=J(()=>{wt(),Xf(),_e(),Ni(),Mu(),hs=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Qf=e=>{switch(e[3]){case"cpu":return new Fe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ji(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Fe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Ki(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Fe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Zf=class{async fetchModelAndCopyToWasmMemory(e){return Vf(await Xi(e))}async loadModel(e,t){Bt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Hf(n,t),xt()}async dispose(){return jf(this.sessionId)}async run(e,t,n){Bt();let r=[],i=[];Object.entries(e).forEach(d=>{let h=d[0],g=d[1],f=this.inputNames.indexOf(h);if(f===-1)throw new Error(`invalid input '${h}'`);r.push(g),i.push(f)});let o=[],s=[];Object.entries(t).forEach(d=>{let h=d[0],g=d[1],f=this.outputNames.indexOf(h);if(f===-1)throw new Error(`invalid output '${h}'`);o.push(g),s.push(f)});let a=r.map((d,h)=>hs(d,()=>`input "${this.inputNames[i[h]]}"`)),u=o.map((d,h)=>d?hs(d,()=>`output "${this.outputNames[s[h]]}"`):null),l=await Kf(this.sessionId,i,a,s,u,n),c={};for(let d=0;d<l.length;d++)c[this.outputNames[s[d]]]=o[d]??Qf(l[d]);return xt(),c}startProfiling(){}endProfiling(){Yf(this.sessionId)}}}),Jf={};zn(Jf,{OnnxruntimeWebAssemblyBackend:()=>ms,initializeFlags:()=>fs,wasmBackend:()=>em});var fs,ms,em,Vw=J(()=>{wt(),Xf(),qw(),fs=()=>{(typeof Pe.wasm.initTimeout!="number"||Pe.wasm.initTimeout<0)&&(Pe.wasm.initTimeout=0);let e=Pe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Pe.wasm.simd=!1),typeof Pe.wasm.proxy!="boolean"&&(Pe.wasm.proxy=!1),typeof Pe.wasm.trace!="boolean"&&(Pe.wasm.trace=!1),typeof Pe.wasm.numThreads!="number"||!Number.isInteger(Pe.wasm.numThreads)||Pe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Pe.wasm.numThreads=1;else{let t=typeof navigator>"u"?ky("node:os").cpus().length:navigator.hardwareConcurrency;Pe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ms=class{async init(e){fs(),await Wf(),await qf(e)}async createInferenceSessionHandler(e,t){let n=new Zf;return await n.loadModel(e,t),n}},em=new ms});wt(),wt(),wt();var Hw="1.27.0";{let e=(Vw(),Yn(Jf)).wasmBackend;Bn("webgpu",e,5),Bn("webnn",e,5),Bn("cpu",e,10),Bn("wasm",e,10)}Object.defineProperty(Pe.versions,"web",{value:Hw,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xr=new Map;function tm(e,t){const n=Xr.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,Xr.set(e,n)}function at(e,t){const n=performance.now();try{return t()}finally{tm(e,performance.now()-n)}}async function rt(e,t){const n=performance.now();try{return await t()}finally{tm(e,performance.now()-n)}}function jw(){return[...Xr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Kw(){Xr.clear()}const Yw=new Map([["starting the on-device engine…","Démarrage du moteur…"],["reading pixels…","Lecture de la photo…"],["card banners…","Détection des cartes…"],["progress tokens…","Jetons de progrès…"],["coins…","Comptage des pièces…"],["identifying wonders…","Identification des merveilles…"],["identifying guilds…","Identification des guildes…"],["laurels…","Lecture des points de victoire…"],["wonder names…","Lecture des noms de merveilles…"],["searching occluded wonders…","Recherche des merveilles masquées…"],["seconde passe merveilles (crop de cité)…","Seconde passe sur les merveilles…"],["revote built (crop de cité)…","Vérification des merveilles construites…"],["military pawn…","Position du pion militaire…"]]),Xw=new Map([["left","Cité de gauche"],["right","Cité de droite"],["board","Piste militaire"]]),Qw=/^(left|right|board|both) photo (\d+)\/(\d+): (.+)$/;function nm(e){const t=Yw.get(e);if(t!==void 0)return t;const n=/^registering (.+)…$/.exec(e);if(n!==null)return`Recalage de ${n[1]}…`;const r=/^wonder names: rotation (\d+)°…$/.exec(e);return r!==null?`Lecture des noms de merveilles — rotation ${r[1]}°…`:e}function Zw(e){const t=Qw.exec(e);if(t===null)return nm(e);const[,n,r,i,o]=t,s=nm(o);if(n==="both")return s;const a=Xw.get(n)??n,u=i==="1"?"":` (${r}/${i})`;return`${a}${u} — ${s}`}function Jw(e,t,n,r){const i=t*n,o=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return o.set(e),o;for(let s=0;s<i;s+=1)o[s*4]=e[s*r],o[s*4+1]=e[s*r+1],o[s*4+2]=e[s*r+2],o[s*4+3]=255;return o}function ut(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Fn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function rm(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,a)=>s-a),r=t/100*(n.length-1),i=Math.floor(r),o=Math.ceil(r);return i===o?n[i]:n[i]*(o-r)+n[o]*(r-i)}const e_=114;function t_(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),o=Math.round(e*i),s=Math.round(t*i);return{scale:i,padX:Math.floor((n-o)/2),padY:Math.floor((n-s)/2),resizedWidth:o,resizedHeight:s}}function gs(e,t,n){const{width:r,height:i,channels:o,data:s}=e,a=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=(c+.5)*l-.5,h=Math.max(0,Math.min(i-1,Math.floor(d))),g=Math.min(i-1,h+1),f=Math.max(0,Math.min(1,d-h));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),T=Math.max(0,Math.min(1,w-b)),S=(h*r+b)*o,E=(h*r+x)*o,I=(g*r+b)*o,C=(g*r+x)*o,v=(c*t+y)*3;for(let R=0;R<3;R++){const z=s[S+R]*(1-T)+s[E+R]*T,Y=s[I+R]*(1-T)+s[C+R]*T;a[v+R]=Math.min(255,Math.max(0,Math.round(z*(1-f)+Y*f)))}}}return a}function Gn(e,t,n){const{width:r,height:i,channels:o,data:s}=e,a=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let c=0;c<n;c++){const d=c*l,h=Math.min((c+1)*l,i);for(let g=0;g<t;g++){const f=g*u,y=Math.min((g+1)*u,r);let w=0,b=0,x=0,T=0;for(let E=Math.floor(d);E<h;E++){const I=Math.min(E+1,h)-Math.max(E,d);if(!(I<=0))for(let C=Math.floor(f);C<y;C++){const v=Math.min(C+1,y)-Math.max(C,f);if(v<=0)continue;const R=v*I,z=(E*r+C)*o;w+=s[z]*R,b+=s[z+1]*R,x+=s[z+2]*R,T+=R}}const S=(c*t+g)*3;a[S]=Math.min(255,Math.max(0,ut(w/T))),a[S+1]=Math.min(255,Math.max(0,ut(b/T))),a[S+2]=Math.min(255,Math.max(0,ut(x/T)))}}return a}function im(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function dr(e,t,n){const{width:r,height:i,channels:o,data:s}=e,a=new Uint8Array(t*n*3),u=r/t,l=i/n,c=h=>Math.max(0,Math.min(r-1,h)),d=h=>Math.max(0,Math.min(i-1,h));for(let h=0;h<n;h++){const g=(h+.5)*l-.5,f=Math.floor(g),y=im(g-f);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),T=im(b-x),S=(h*t+w)*3;for(let E=0;E<3;E++){let I=0;for(let C=0;C<4;C++){const v=d(f-1+C)*r;let R=0;for(let z=0;z<4;z++)R+=T[z]*s[(v+c(x-1+z))*o+E];I+=y[C]*R}a[S+E]=Math.min(255,Math.max(0,Math.round(I)))}}}return a}function Qr(e,t,n=1){const r=t_(e.width,e.height,t,n),i=gs(e,r.resizedWidth,r.resizedHeight),o=t*t,s=new Float32Array(3*o).fill(e_/255);for(let a=0;a<r.resizedHeight;a++){const u=(a+r.padY)*t+r.padX,l=a*r.resizedWidth;for(let c=0;c<r.resizedWidth;c++){const d=(l+c)*3,h=u+c;s[h]=i[d]/255,s[o+h]=i[d+1]/255,s[2*o+h]=i[d+2]/255}}return{tensor:s,params:r}}function om(e,t,n,r){const i=[],o=Math.floor(e.length/6);for(let s=0;s<o;s++){const a=e[s*6],u=e[s*6+1],l=e[s*6+2],c=e[s*6+3],d=e[s*6+4],h=e[s*6+5];if(d<n)continue;const g=Math.round(h);if(g<0||g>=r)continue;const f=(a-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(c-t.padY)/t.scale;i.push({classIndex:g,confidence:d,box:[Math.trunc(f),Math.trunc(y),Math.trunc(w-f),Math.trunc(b-y)],boxFloat:[f,y,w-f,b-y]})}return i}const pr=.8,sm=.65,n_=110,r_=1280;function i_(e,t,n){if(n==null)return pr;if(n.length===0)return sm;const r=Math.max(e,t);if(!(r>0))return pr;const i=r_/r,o=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(o.length===0)return pr;const s=o.length;return(s%2===1?o[(s-1)/2]:(o[s/2-1]+o[s/2])/2)>=n_?sm:pr}const am=.25,um=.6;function o_(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),o=Math.trunc(Number(n[2])),s=Math.trunc(Number(n[3]));if(![r,i,o,s].every(b=>Number.isFinite(b)))return null;const a=o-r,u=s-i;if(a<=0||u<=0)return null;const l=Math.trunc(a*(a>=u?am:um)),c=Math.trunc(u*(a>=u?um:am)),d=Math.max(0,r-l),h=Math.max(0,i-c),g=Math.min(Math.trunc(e),o+l),f=Math.min(Math.trunc(t),s+c),y=g-d,w=f-h;return y<=0||w<=0?null:{x:d,y:h,width:y,height:w}}const lm=3,s_=.15,a_=.6;function ys(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function cm(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function u_(e,t,n){try{const r=Math.trunc(Number(n)),i=n!=null&&Number.isFinite(r)&&r!==0;if(!e||e.length<2)return null;const o=[Number(e[0][0]),Number(e[0][1])],s=[Number(e[1][0]),Number(e[1][1])];if(![...o,...s].every(E=>Number.isFinite(E)))return null;const a=ys(o,s);if(!(a>0))return null;const u=[];for(const E of t??[]){const I=Math.trunc(Number(E.n));if(!Number.isFinite(I)||I<lm)continue;const C=cm(E.poly);C!==null&&u.push({owner:E.owner,c:C,n:I,d0:0,d1:0,ecart:0})}if(u.length<2)return null;u.sort((E,I)=>I.n-E.n);const l=u.slice(0,2);let c=!1;u.length>2&&l[1].n>0&&(c=u[2].n/l[1].n>a_);for(const E of l)E.d0=ys(E.c,o),E.d1=ys(E.c,s),E.ecart=Math.abs(E.d0-E.d1);const d=[...l].sort((E,I)=>I.ecart-E.ecart),h=d[0],g=d[1],f=h.d0<h.d1?0:1,y=r>0?1:0,w=i?f===y?h:g:null,b=i?f===y?g:h:null,x=f===1?h.owner:g.owner,T=f===1?g.owner:h.owner,S=h.ecart/a<s_;return{favoredOwner:(b==null?void 0:b.owner)??null,threatenedOwner:(w==null?void 0:w.owner)??null,ownerAtEnd0:T,ownerAtEnd1:x,distance:i?Math.abs(r):null,ambiguous:!!(S||c)}}catch{return null}}function l_(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}function c_(e){try{const t=[];for(const u of e??[]){const l=Number(u==null?void 0:u.n);if(!Number.isFinite(l)||l<lm)continue;const c=cm(u.poly);c!==null&&t.push({owner:u.owner,c,n:l})}if(t.length<2)return null;t.sort((u,l)=>l.n-u.n);const[n,r]=t;if(n.owner===r.owner)return null;const i=Math.abs(n.c[0]-r.c[0]);if(Math.abs(n.c[1]-r.c[1])>i){const[u,l]=n.c[1]<r.c[1]?[n,r]:[r,n];return{left:u.owner,right:l.owner}}const[s,a]=n.c[0]<r.c[0]?[n,r]:[r,n];return{left:s.owner,right:a.owner}}catch{return null}}const d_=10.6;function p_(e,t,n){if(!Number.isFinite(n)||n<=0)return null;const r=Number(e[0])-Number(t[0]),i=Number(e[1])-Number(t[1]),o=Math.hypot(r,i);return!Number.isFinite(o)||o<=0||o/n<d_?null:[Number(e[0]),Number(e[1])]}const h_=.6;function dm(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++){if(e[o*6+4]<n)continue;const a=(e[o*6]-t.padX)/t.scale,u=(e[o*6+1]-t.padY)/t.scale,l=(e[o*6+2]-t.padX)/t.scale,c=(e[o*6+3]-t.padY)/t.scale,d=ut((a+l)/2),h=ut((u+c)/2),g=ut((l-a+(c-u))/4);g>=1&&r.push({cx:d,cy:h,r:g})}return r}function f_(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(h_*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function m_(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Fn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),o=Math.floor(r.cy/t);return i!==o?i-o:n.cx-r.cx})}function pm(e,t,n){const r=dm(e,t,n);return r.length===0?[]:m_(f_(r))}const g_=2.5,y_=3;function hm(e){if(e.length<y_)return[...e];const t=e.map(i=>i.r).sort((i,o)=>i-o),n=t.length,r=n%2?t[(n-1)/2]:(t[n/2-1]+t[n/2])/2;return e.filter(i=>i.r<=g_*r)}function fm(e,t,n){return dm(e,t,n)}function ws(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++)e[o*6+4]<n||r.push([(e[o*6]-t.padX)/t.scale,(e[o*6+1]-t.padY)/t.scale,(e[o*6+2]-t.padX)/t.scale,(e[o*6+3]-t.padY)/t.scale]);return r}const w_=.5,__=.7,b_=.55;function _s(e){const t=e.map(([n,r,i,o])=>Math.min(i-n,o-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function mm(e){if(e.length===0)return[];const t=(w_*_s(e))**2,n=[];for(const i of e){const o=(i[0]+i[2])/2,s=(i[1]+i[3])/2,a=n.find(u=>(u.cx-o)**2+(u.cy-s)**2<=t);if(a===void 0)n.push({cx:o,cy:s,boxes:[i]});else{a.boxes.push(i);const u=a.boxes.length;a.cx=(a.cx*(u-1)+o)/u,a.cy=(a.cy*(u-1)+s)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Fn(i.map(o=>o[0]))),Math.trunc(Fn(i.map(o=>o[1]))),Math.trunc(Fn(i.map(o=>o[2]))),Math.trunc(Fn(i.map(o=>o[3])))]);if(r.length>=2){const i=_s(r),o=r.map(()=>!0);for(let s=0;s<r.length;s++)if(o[s])for(let a=s+1;a<r.length;a++){if(!o[a])continue;const u=r[s],l=r[a],c=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),h=c*d,g=(u[2]-u[0])*(u[3]-u[1]),f=(l[2]-l[0])*(l[3]-l[1]);if(h>=__*Math.min(g,f)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(o[y<=w?a:s]=!1,!o[s])break}}r=r.filter((s,a)=>o[a])}if(r.length>=3){const i=_s(r);r=r.filter(([o,s,a,u])=>Math.min(a-o,u-s)>=b_*i)}return r}const gm=.7;function $_(e,t){const n=Math.max(e[0],t[0]),r=Math.max(e[1],t[1]),i=Math.min(e[2],t[2]),o=Math.min(e[3],t[3]);if(i<=n||o<=r)return 0;const s=(i-n)*(o-r),a=(e[2]-e[0])*(e[3]-e[1]),u=(t[2]-t[0])*(t[3]-t[1]),l=a+u-s;return l>0?s/l:0}function ym(e,t,n,r,i,o=gm){return x_(e,t,n,r,i,o).map(s=>s.box)}function x_(e,t,n,r,i,o=gm){const s=t-4;if(s<=0||n<=0)return[];const a=[];for(let l=0;l<n;l+=1){let c=0,d=0;for(let h=0;h<s;h+=1){const g=e[(4+h)*n+l];g>c&&(c=g,d=h)}c<i||a.push({box:[(e[l]-r.padX)/r.scale,(e[n+l]-r.padY)/r.scale,(e[2*n+l]-r.padX)/r.scale,(e[3*n+l]-r.padY)/r.scale],score:c,cls:d})}a.sort((l,c)=>c.score-l.score);const u=[];for(const l of a){let c=!1;for(const d of u)if(d.cls===l.cls&&$_(d.box,l.box)>o){c=!0;break}c||u.push(l)}return u}const bs=["brown","grey","blue","green","yellow","red","purple"],wm={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},v_=.7;function $s(e){const t=e.map((i,o)=>o).sort((i,o)=>e[o].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const o=e[i],[s,a,u,l]=o.box;let c=!1;for(const d of r){const h=e[d];if(h.family===null||o.family===null||h.family!==o.family)continue;const[g,f,y,w]=h.box,b=Math.max(0,Math.min(s+u,g+y)-Math.max(s,g)),x=Math.max(0,Math.min(a+l,f+w)-Math.max(a,f)),T=Math.max(1,Math.min(u*l,y*w));if(b*x>=v_*T){c=!0;break}}c?n.add(i):r.push(i)}return e.filter((i,o)=>!n.has(o))}const S_=.3;function Zr(e,t,n,r=bs.length,i){const o=r<=1,s=o||i===void 0?n:Math.min(n,i),a=om(e,t,s,r).filter(u=>u.confidence>=n||bs[u.classIndex]==="purple").map(u=>{const l=o?null:bs[u.classIndex];return{color:l,family:l===null?null:wm[l],box:u.box,confidence:u.confidence}});return o?a:$s(a)}const E_=8,T_=.8,_m=1.25;function M_(e){if(e.length<E_)return[];const t=[],n=[];for(const s of e){const[,,a,u]=s.box;a>u*_m?t.push(s):u>a*_m&&n.push(s)}const[r,i,o]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<T_*e.length||i.length===0?[]:i.filter(s=>s.family!==null&&s.color!==null).map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${o} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const I_=2.25,bm=8;function C_(e){if(e.length<bm)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,h)=>d-h),r=I_*n[Math.floor(n.length/2)],i=r*r,o=e.map((d,h)=>h),s=d=>{for(;o[d]!==d;)o[d]=o[o[d]],d=o[d];return d};for(let d=0;d<e.length;d++)for(let h=d+1;h<e.length;h++){const g=t[d][0]-t[h][0],f=t[d][1]-t[h][1];g*g+f*f<=i&&(o[s(d)]=s(h))}const a=new Map;for(let d=0;d<e.length;d++){const h=s(d);a.set(h,[...a.get(h)??[],d])}let u=[];for(const d of a.values())d.length>u.length&&(u=d);if(u.length<bm||u.length===e.length)return[];const l=new Set(u),c=e.map((d,h)=>h).filter(d=>!l.has(d));return c.filter(d=>e[d].family!==null&&e[d].color!==null).map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${c.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const Qe={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5,classes:7},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function Ct(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,s=r===0?0:Math.round(255*o/r);if(o===0)return{h:0,s,v:r};let a;return r===e?a=60*(t-n)/o:r===t?a=120+60*(n-e)/o:a=240+60*(e-t)/o,a<0&&(a+=360),{h:Math.round(a/2),s,v:r}}const k_=.42,A_=22,R_=43,O_=120,N_=1.5,z_=.72,B_=110,$m=3;function hr(e,t,n){const{width:r,height:i,channels:o,data:s}=e;if(r<4||i<4)return 0;const a=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*k_);if(l<1)return 0;let c=0;for(let d=0;d<i;d++)for(let h=0;h<r;h++){if((h-a)**2+(d-u)**2>l*l)continue;const g=(d*r+h)*o,f=s[g],y=s[g+1],w=s[g+2];!t&&f>=250&&y>=250&&w>=250||(n(f,y,w),c+=1)}return c}function P_(e){let t=0,n=0,r=0,i=hr(e,!1,(o,s,a)=>{const u=Ct(o,s,a);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=hr(e,!0,(o,s,a)=>{const u=Ct(o,s,a);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function D_(e){let t=0,n=0,r=hr(e,!1,(o,s)=>{t+=o,n+=s});if(r===0&&(r=hr(e,!0,(o,s)=>{t+=o,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function U_(e){let t=0;const n=hr(e,!0,(r,i,o)=>{t+=Ct(r,i,o).s});return n===0?null:t/n}function L_(e){const t=P_(e);if(t===null||t.s<=A_)return 1;if(t.s>=O_){const n=D_(e);return n!==null&&n>=N_?6:3}return t.s>=R_?3:6}function F_(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,a)=>s-a);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,a)=>e[s].r-e[a].r),o=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>o.get(s))}function G_(e,t){const n=[...t];if(e.length<$m||t.length!==e.length)return n;const r=e.map(s=>U_(s)),i=r.filter(s=>s!==null);if(i.length<$m)return n;const o=Fn(i);return o<=0||r.forEach((s,a)=>{s!==null&&n[a]!==1&&s<z_*o&&s<B_&&(n[a]=1)}),n}function xs(e,t){const{cx:n,cy:r,r:i}=t,o=Math.max(0,n-i),s=Math.max(0,r-i),a=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,a-o),c=Math.max(0,u-s),d=new Uint8Array(l*c*3);for(let h=0;h<c;h++)for(let g=0;g<l;g++){const f=(h*l+g)*3;if((g+o-n)**2+(h+s-r)**2<=i*i){const w=((h+s)*e.width+(g+o))*e.channels;d[f]=e.data[w],d[f+1]=e.data[w+1],d[f+2]=e.data[w+2]}else d[f]=255,d[f+1]=255,d[f+2]=255}return{width:l,height:c,channels:3,data:d}}function W_(e,t){const n=t.map(o=>xs(e,o)),r=n.map(o=>L_(o)),i=F_(t,r);return G_(n,i)}function q_(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n);for(let s=0,a=0;s<o.length;s++,a+=r)o[s]=i[a]*4899+i[a+1]*9617+i[a+2]*1868+8192>>14;return{width:t,height:n,data:o}}function xm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,o=e.height/n;for(let s=0;s<n;s++){const a=s*o,u=Math.min((s+1)*o,e.height);for(let l=0;l<t;l++){const c=l*i,d=Math.min((l+1)*i,e.width);let h=0,g=0;for(let f=Math.floor(a);f<u;f++){const y=Math.min(f+1,u)-Math.max(f,a);if(!(y<=0))for(let w=Math.floor(c);w<d;w++){const b=Math.min(w+1,d)-Math.max(w,c);b<=0||(h+=e.data[f*e.width+w]*b*y,g+=b*y)}}r[s*t+l]=Math.min(255,Math.max(0,ut(h/g)))}}return{width:t,height:n,data:r}}function V_(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const o=255/(n-t[r]),s=new Uint8Array(256);let a=0;for(let u=r+1;u<256;u++)a+=t[u],s[u]=Math.min(255,Math.max(0,ut(a*o)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function H_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let s=0;s<t;s++){let a=!0;for(let u=-1;u<=1&&a;u++)for(let l=-1;l<=1;l++){const c=s+l,d=o+u;if(!(c<0||c>=t||d<0||d>=n)&&r[d*t+c]===0){a=!1;break}}i[o*t+s]=a&&r[o*t+s]>0?255:0}return{width:t,height:n,data:i}}function j_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let s=0;s<t;s++){let a=!1;for(let u=-1;u<=1&&!a;u++)for(let l=-1;l<=1;l++){const c=s+l,d=o+u;if(c>=0&&c<t&&d>=0&&d<n&&r[d*t+c]>0){a=!0;break}}i[o*t+s]=a?255:0}return{width:t,height:n,data:i}}function vm(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),o=[],s=new Int32Array(t*n);let a=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,c=0;s[c++]=u,i[u]=a;let d=0,h=0,g=0;for(;l<c;){const f=s[l++],y=f%t,w=f/t|0;d+=1,h+=y,g+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const T=y+x,S=w+b;if(T<0||T>=t||S<0||S>=n)continue;const E=S*t+T;r[E]>0&&i[E]===0&&(i[E]=a,s[c++]=E)}}o[a]={area:d,centroidX:h/d,centroidY:g/d},a+=1}return{labels:i,stats:o}}function K_(e,t,n){return Sm(Float32Array.from(e.data),e.width,t,n)}function Sm(e,t,n,r){const i=new Float32Array(t*t),o=t/2,s=-n*Math.PI/180,a=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let c=0;c<t;c++){const d=c-o,h=l-o,g=a*d-u*h+o,f=u*d+a*h+o,y=Math.floor(g),w=Math.floor(f),b=g-y,x=f-w,T=(I,C)=>I>=0&&I<t&&C>=0&&C<t?e[C*t+I]:r,S=T(y,w)*(1-b)+T(y+1,w)*b,E=T(y,w+1)*(1-b)+T(y+1,w+1)*b;i[l*t+c]=S*(1-x)+E*x}return i}const Y_=.9,X_=.34,Q_=[.55,.6,.66,.72],Z_=22,J_=88,eb=35,Wn=28,vs=4,tb=Array.from({length:15},(e,t)=>-21+t*3),Em=[-2,0,2],nb=3,rb=.3;function ib(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function ob(e){let t=e.width,n=-1,r=e.height,i=-1,o=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(o+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(o<8)return null;const s=n-t+1,a=i-r+1,u=Math.max(a,s),l=new Uint8Array(u*u),c=Math.floor((u-s)/2),d=Math.floor((u-a)/2);for(let y=0;y<a;y++)for(let w=0;w<s;w++)l[(y+d)*u+(w+c)]=e.data[(y+r)*e.width+(w+t)];const h=Wn-2*vs,g=xm({width:u,height:u,data:l},h,h),f=new Float32Array(Wn*Wn);for(let y=0;y<h;y++)for(let w=0;w<h;w++)f[(y+vs)*Wn+(w+vs)]=g.data[y*h+w]>110?1:0;return f}function sb(e,t){const{width:n,height:r,channels:i,data:o}=e,s=Math.floor(r/2),a=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*X_);if(u<4)return null;const l=s-u,c=a-u,d=2*u,h=2*u;if(d<6||h<6)return null;const g=new Int16Array(d*h),f=new Int16Array(d*h),y=new Int16Array(d*h),w=new Uint8Array(d*h),b=[],x=Math.min(d,h)/2;for(let L=0;L<d;L++)for(let ee=0;ee<h;ee++){const A=((L+l)*n+(ee+c))*i,{h:O,s:P,v:B}=Ct(o[A],o[A+1],o[A+2]),V=L*h+ee;g[V]=O,f[V]=P,y[V]=B,Math.sqrt((ee-h/2)**2+(L-d/2)**2)/x<=t&&(w[V]=1,b.push(B))}if(b.length<16)return null;const T=rm(b,55);let S=0,E=0,I=0;const C=L=>g[L]>=Z_&&g[L]<=J_&&f[L]>=eb,v=L=>y[L]>=T&&f[L]<=95&&!C(L)&&w[L]===1;for(let L=0;L<d*h;L++)w[L]===1&&(I+=1,y[L]>=130&&!C(L)&&(S+=1),v(L)&&(E+=1));const R=S>.5*I&&E<.15*I,z=new Uint8Array(d*h);if(R){const L=rm(b,45);for(let ee=0;ee<d*h;ee++)z[ee]=w[ee]===1&&y[ee]<=L?255:0}else for(let L=0;L<d*h;L++)z[L]=v(L)?255:0;const Y={width:h,height:d,data:z},U=H_(Y);let G=vm(U),N=G;if(G.stats.length<=1&&(G=vm(Y),N=G,G.stats.length<=1))return null;const W=Math.min(d,h)/2;let K=0,Z=-1;for(let L=1;L<N.stats.length;L++){const ee=N.stats[L];if(ee===void 0)continue;const A=Math.hypot(ee.centroidX-h/2,ee.centroidY-d/2)/W,O=ee.area*(1-.6*Math.min(A,1));O>Z&&(Z=O,K=L)}if(K===0)return null;const me=new Uint8Array(d*h);for(let L=0;L<d*h;L++)me[L]=N.labels[L]===K?255:0;return ob(j_({width:h,height:d,data:me}))}function ab(e,t,n,r,i,o){const s=Wn;let a=0,u=0;for(let l=0;l<s;l++){const c=l-o;if(!(c<0||c>=s))for(let d=0;d<s;d++){const h=d-i;if(h<0||h>=s)continue;const g=e[c*s+h];g!==0&&(u+=g,a+=g*n[l*s+d])}}return a/(u+r-a+1e-6)}function ub(e,t){const n=t.reduce((i,o)=>i+o,0);let r=-1;for(const i of tb){const o=i===0?e:Sm(e,Wn,i,0),s=o.reduce((a,u)=>a+u,0);for(const a of Em)for(const u of Em){const l=ab(o,s,t,n,a,u);l>r&&(r=l)}}return r}function lb(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of Q_){const a=sb(e,s);if(a!==null)for(const{label:u,bits:l}of t)n.push([ub(a,l),u])}if(n.length===0)return[null,0];if(n.sort((s,a)=>a[0]-s[0]),n[0][0]<rb)return[null,0];const r=new Map;for(const[s,a]of n.slice(0,nb))r.set(a,(r.get(a)??0)+s);let i=0,o=-1;for(const[s,a]of r)a>o&&(o=a,i=s);return[i,n[0][0]]}function Xt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:o,data:s}=e,a=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(a*u*o);for(let c=0;c<i;c++)for(let d=0;d<r;d++){let h,g;n===1?(h=i-1-c,g=d):n===2?(h=r-1-d,g=i-1-c):(h=c,g=r-1-d);const f=(c*r+d)*o,y=(g*a+h)*o;for(let w=0;w<o;w++)l[y+w]=s[f+w]}return{width:a,height:u,channels:o,data:l}}const cb=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,cb)*255));return e})();const db=5e3,pb=.75,hb=15,Tm=1.25,Mm=2.4,fb=.003,mb=.85,gb=2600,yb=2,Ss=.3,Im=.1,Cm=.012,wb=22,km=.5,Am=.12;function dt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let o=0,s=t.width*t.height;o<s;o++)r[o*3]=t.data[o*i],r[o*3+1]=t.data[o*i+1],r[o*3+2]=t.data[o*i+2];return n}function _b(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,c]=e[u],[d,h]=e[(u+1)%4];r+=l*h-d*c}const i=Math.abs(r/2)/(t*n);if(i<fb||i>mb)return!1;const o=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),s=Math.min(...o);if(s<1)return!1;const a=Math.max(...o)/s;return a>=Tm&&a<=Mm}function bb(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function $b(e,t,n,r){const i=n.width,o=n.height,s=Math.max(8,Math.trunc(Ss*i)),a=i+2*s,u=o+2*s;if(a*u>4e7)return null;const l=r.map(U=>[U[0],U[1],U[2]-s*(U[0]+U[1])+0]);for(let U=0;U<3;U++)l[U][2]=r[U][2]-s*r[U][0]-s*r[U][1];const c=dt(e,t),d=new e.Mat,h=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(c,d,h,new e.Size(a,u),e.WARP_INVERSE_MAP);const g=new e.Mat;e.cvtColor(d,g,e.COLOR_RGB2Lab),c.delete(),h.delete();const f=g.data,y=Math.max(4,Math.trunc(s/3)),w=[[],[],[]],b=(U,G)=>{const N=(G*a+U)*3;w[0].push(f[N]),w[1].push(f[N+1]),w[2].push(f[N+2])};for(let U=0;U<u;U++)for(let G=0;G<a;G++)(U<y||U>=u-y||G<y||G>=a-y)&&b(G,U);const x=U=>{U.sort((N,W)=>N-W);const G=U.length>>1;return U.length%2?U[G]:(U[G-1]+U[G])/2},T=[x(w[0]),x(w[1]),x(w[2])],S=(U,G)=>{const N=(G*a+U)*3,W=f[N]-T[0],K=f[N+1]-T[1],Z=f[N+2]-T[2];return Math.sqrt(W*W+K*K+Z*Z)>wb},E=Math.max(6,Math.trunc(Im*i)),I=Math.max(6,Math.trunc(Im*o)),C=Math.max(2,Math.trunc(Cm*i)),v=Math.max(2,Math.trunc(Cm*o)),R=U=>{let G=0,N=0;for(const W of U)N=W?N+1:0,N>G&&(G=N);return G/Math.max(1,U.length)},z=U=>{let G,N,W,K,Z;if(U==="L"?(G=s,N=s+o,W=Math.max(0,s-C-E),K=Math.max(0,s-C),Z=!1):U==="R"?(G=s,N=s+o,W=s+i+C,K=Math.min(a,s+i+C+E),Z=!1):(G=Math.max(0,s-v-I),N=Math.max(0,s-v),W=s,K=s+i,Z=!0),N<=G||K<=W)return 0;const me=[];if(Z)for(let L=W;L<K;L++){let ee=0;for(let A=G;A<N;A++)S(L,A)&&ee++;me.push(ee/(N-G)>km)}else for(let L=G;L<N;L++){let ee=0;for(let A=W;A<K;A++)S(A,L)&&ee++;me.push(ee/(K-W)>km)}return R(me)},Y={L:z("L"),R:z("R"),T:z("T")};return d.delete(),g.delete(),Y}const Rm=.5;function xb(e){return e!==null&&e.R>=Am?["R"]:[]}function Om(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),o=.5*(r+i),s=Ss*o;if(!(s>0))return null;const a=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],T=n[b];let S=-(T[1]-x[1]),E=T[0]-x[0];const I=(x[0]+T[0])/2,C=(x[1]+T[1])/2;S*(I-a)+E*(C-u)<0&&(S=-S,E=-E);const v=Math.hypot(S,E);v<=1e-6||(S=S/v*s,E=E/v*s,c.push([x[0]+S,x[1]+E],[T[0]+S,T[1]+E]))}const d=c.map(y=>y[0]),h=c.map(y=>y[1]),g=Math.round(Math.min(...d)),f=Math.round(Math.min(...h));return{x:g,y:f,width:Math.round(Math.max(...d))-g,height:Math.round(Math.max(...h))-f}}const vb=.88;function Es(e,t,n,r){if(r.length!==4)return null;const i=n.width,o=n.height,s=Math.max(8,Math.trunc(Ss*i)),a=i+2*s,u=o+2*s;if(a*u>4e7)return null;const l=s+Math.trunc(i*vb),c=a-l;if(c<1)return null;const d=dt(e,t),h=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o]),g=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),f=e.getPerspectiveTransform(h,g),y=[...f.data64F],w=[0,1,2].flatMap(C=>[y[C*3],y[C*3+1],y[C*3+2]-s*y[C*3]-s*y[C*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(d,x,b,new e.Size(a,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,c,u)),S=new e.Mat;T.copyTo(S);const E=S.data,I=new Uint8ClampedArray(c*u*3);I.set(E.subarray(0,I.length));for(const C of[d,h,g,f,b,x,T,S])try{C.delete()}catch{}return{width:c,height:u,channels:3,data:I}}function Sb(e,t,n,r){const[i,o,s,a]=r;if(s<8||a<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*a),c=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+s+u)),h=Math.max(0,Math.trunc(o-l)),g=Math.min(n.height,Math.trunc(o+a+l));if(d-c<8||g-h<8)return null;const f=Math.max(n.width,n.height)<gb?yb:1,y=dt(e,n),w=dt(e,t),b=y.roi(new e.Rect(c,h,d-c,g-h)),x=new e.Mat;f!==1?e.resize(b,x,new e.Size(0,0),f,f,e.INTER_CUBIC):b.copyTo(x);const T=new e.Mat,S=new e.Mat;e.cvtColor(w,T,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const E=new e.ORB(db),I=new e.KeyPointVector,C=new e.KeyPointVector,v=new e.Mat,R=new e.Mat,z=new e.Mat,Y=[y,w,b,x,T,S,I,C,v,R,z],U=X=>{for(const Q of Y)try{Q.delete()}catch{}try{E.delete()}catch{}return X};if(E.detectAndCompute(T,z,I,v),E.detectAndCompute(S,z,C,R),v.rows<8||R.rows<8)return U(null);const G=new e.BFMatcher(e.NORM_HAMMING),N=new e.DMatchVectorVector;G.knnMatch(v,R,N,2);const W=[],K=[];for(let X=0;X<N.size();X++){const Q=N.get(X);if(Q.size()===2){const ne=Q.get(0),ye=Q.get(1);if(ne.distance<pb*ye.distance){const ve=I.get(ne.queryIdx).pt,Te=C.get(ne.trainIdx).pt;W.push(ve.x,ve.y),K.push(Te.x,Te.y)}}}if(N.delete(),G.delete(),W.length/2<8)return U(null);const Z=e.matFromArray(W.length/2,1,e.CV_32FC2,W),me=e.matFromArray(K.length/2,1,e.CV_32FC2,K),L=new e.Mat,ee=e.findHomography(Z,me,e.RANSAC,5,L);let A=0;for(let X=0;X<L.rows;X++)A+=L.data[X];const O=ee.rows===3?[...ee.data64F]:null;if(Z.delete(),me.delete(),L.delete(),ee.delete(),O===null||A<hb)return U(null);const P=1/f,B=[[P,0,c],[0,P,h],[0,0,1]],V=[0,1,2].map(X=>[0,1,2].map(Q=>B[X][0]*O[Q]+B[X][1]*O[3+Q]+B[X][2]*O[6+Q]));return U({H:V,inliers:A})}const Eb=620;function Tb(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Mb(e,t,n,r){const i=Nm(e,t,n,r);if(i!==null)return i;try{const[o,s,a,u]=r.map(E=>Math.trunc(E));if(Math.min(a,u)>=Eb||a<=0||u<=0)return null;const l=Math.trunc(a*.25),c=Math.trunc(u*.25),d=Math.max(0,o-l),h=Math.max(0,s-c),g=Math.min(t.width,o+a+l),f=Math.min(t.height,s+u+c);if(g<=d||f<=h)return null;const y=dt(e,t),w=y.roi(new e.Rect(d,h,g-d,f-h)),b=new e.Mat;e.resize(w,b,new e.Size((g-d)*2,(f-h)*2),0,0,e.INTER_CUBIC);const x=Tb(e,b);for(const E of[y,w,b])try{E.delete()}catch{}const T=[(o-d)*2,(s-h)*2,a*2,u*2],S=Nm(e,x,n,T);return S===null?null:{...S,footprint:S.footprint.map(([E,I])=>[E*.5+d,I*.5+h])}}catch{return null}}function Nm(e,t,n,r){const i=Sb(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>bb(i.H,b,x));if(!_b(s,t.width,t.height))return null;const a=dt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(a,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const c=dt(e,n),d=new e.Mat,h=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(c,h,e.COLOR_RGB2GRAY);const g=new e.Mat;e.matchTemplate(d,h,g,e.TM_CCOEFF_NORMED);const f=g.data32F[0];for(const b of[a,u,l,c,d,h,g])try{b.delete()}catch{}if(f<Rm)return null;const y=$b(e,t,n,i.H);if(y===null)return null;const w=xb(y);return{built:Math.max(y.L,y.R,y.T)>=Am,footprint:s,overflow:w,edgeScores:y,inliers:i.inliers}}const Ib=.3,Cb=.3;function kb(e,t){const n=e.filter(o=>o.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(o=>{const{L:s,R:a,T:u}=o.edgeScores;return Math.min(s,a,u)>=Ib}),i=[];return e.forEach((o,s)=>{if(!o.built||o.edgeScores===null)return;const{L:a,R:u,T:l}=o.edgeScores,c=Math.max(a,u,l)<Cb;if(!r&&!c)return;t.some(([h,g])=>h>=o.zone.x0&&h<=o.zone.x1&&g>=o.zone.y0&&g<=o.zone.y1)||i.push(s)}),i}const _t=128,kn=.5;function Ab(e,t){return e!==null?e>=kn:t.length>0&&t.reduce((n,r)=>n+r,0)*2>t.length}function Jr(e){const t=Gn(e,_t,_t),n=_t*_t,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function Ts(e){const t=e[1]??0;return{built:t>=kn,prob:t}}const fr=120,mr=179,Rb=1.3,Ob=3.6,Nb=.45,zb=6e-4,Bb=.02,Pb=6e3,Db=.78,Ub=1.25,Lb=2.4,Fb=.05,Gb=1.5,Wb=.5,qb=.9,Vb=150,Hb=18,jb=34,Kb=90,Yb=130,Xb=.13,Qb=.15,ei="magistrates-guild",Ms="merchants-guild";function Zb(e,t){const n=dt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[fr,30,40,0]),o=new e.Mat(r.rows,r.cols,r.type(),[mr,255,205,255]),s=new e.Mat;e.inRange(r,i,o,s),r.delete(),i.delete(),o.delete();const a=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const c=new e.Mat,d=new e.Mat,h=new e.Mat,g=e.connectedComponentsWithStats(l,c,d,h,8);l.delete(),c.delete(),h.delete();const f=t.width*t.height,y=[];for(let w=1;w<g;w++){const b=d.intAt(w,0),x=d.intAt(w,1),T=d.intAt(w,2),S=d.intAt(w,3),E=d.intAt(w,4),I=E/f;I<zb||I>Bb||E/Math.max(T*S,1)<Nb||y.push({x:b,y:x,w:T,h:S})}return d.delete(),{blobs:y,mask:a,maskWidth:t.width}}function Jb(e,t,n,r,i,o,s){const a=e,u=o,l=s,c=i;if(!c.gray){const P=dt(e,r);c.gray=new a.Mat,a.cvtColor(P,c.gray,a.COLOR_RGB2GRAY),P.delete(),c.k=new a.KeyPointVector,c.d=new a.Mat;const B=new a.Mat;u.detectAndCompute(c.gray,B,c.k,c.d),B.delete()}const d=n,h=new a.Mat,g=new a.KeyPointVector,f=new a.Mat;u.detectAndCompute(d,h,g,f),h.delete();const y=P=>(g.delete(),f.delete(),P);if(c.d.rows<8||f.rows<8)return y(null);const w=new a.DMatchVectorVector;l.knnMatch(c.d,f,w,2);const b=[],x=[];for(let P=0;P<w.size();P++){const B=w.get(P);if(B.size()===2){const V=B.get(0);if(V.distance<Db*B.get(1).distance){const X=c.k.get(V.queryIdx).pt,Q=g.get(V.trainIdx).pt;b.push(X.x,X.y),x.push(Q.x,Q.y)}}}if(w.delete(),b.length/2<8)return y(null);const T=a.matFromArray(b.length/2,1,a.CV_32FC2,b),S=a.matFromArray(x.length/2,1,a.CV_32FC2,x),E=new a.Mat,I=a.findHomography(T,S,a.RANSAC,5,E);if(T.delete(),S.delete(),E.delete(),I.rows!==3)return I.delete(),y(null);const C=[...I.data64F],v=(P,B)=>{const V=C[6]*P+C[7]*B+C[8];return[(C[0]*P+C[1]*B+C[2])/V,(C[3]*P+C[4]*B+C[5])/V]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([P,B])=>v(P,B));if(R.some(P=>!Number.isFinite(P[0])||!Number.isFinite(P[1])))return I.delete(),y(null);const z=R.map((P,B)=>{const V=R[(B+1)%4];return Math.hypot(V[0]-P[0],V[1]-P[1])}),Y=Math.min(...z);if(Y<1)return I.delete(),y(null);const U=Math.max(...z)/Y;let G=0;for(let P=0;P<4;P++){const[B,V]=R[P],[X,Q]=R[(P+1)%4];G+=B*Q-X*V}const N=t,W=Math.abs(G/2)/(N.rows*N.cols);if(U<Ub||U>Lb||W<Fb||W>Gb)return I.delete(),y(null);const K=new a.Mat;a.warpPerspective(N,K,I,new a.Size(r.width,r.height),a.WARP_INVERSE_MAP),I.delete();const Z=new a.Mat;a.cvtColor(K,Z,a.COLOR_RGB2GRAY),K.delete();const me=Math.trunc(r.height/2),L=Z.roi(new a.Rect(0,0,r.width,me)),ee=c.gray.roi(new a.Rect(0,0,r.width,me)),A=new a.Mat;a.matchTemplate(L,ee,A,a.TM_CCOEFF_NORMED);const O=A.data32F[0];return L.delete(),ee.delete(),A.delete(),Z.delete(),y(O)}function e1(e,t,n){let r,i;if(n===ei)r=Ms,i=Xb;else if(n===Ms)r=ei,i=Qb;else return null;const{x:o,y:s,w:a,h:u}=t;if(a<8||u<8)return null;const l=Math.trunc(a/2);let c=0,d=null;for(const[h,g]of[[0,l],[l,a]]){let f=0,y=0;for(let b=s;b<s+u;b++)for(let x=o+h;x<o+g;x++){const T=(b*e.width+x)*e.channels,{h:S,s:E,v:I}=Ct(e.data[T],e.data[T+1],e.data[T+2]);if(S>=fr&&S<=mr&&E>=30&&E<=170&&I<=170)continue;f++,(r===Ms?S>=Hb&&S<=jb&&E>=Kb&&I>=Yb:S>=95&&S<=130&&E>=80)&&y++}if(f<20)continue;const w=y/f;w>c&&(c=w,d={x:o+h,y:s,w:g-h,h:u})}return c>=i&&d!==null?{id:r,box:d}:null}const t1=1.7,n1=140,r1=170,i1=.2,o1=.1,zm=240,Bm=80,Pm=60,s1=50,Dm="scientists-guild",Um="tacticians-guild",ti=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function a1(e,t,n){const{x:r,y:i,w:o,h:s}=n,a=new Float32Array(s);for(let S=0;S<s;S++){let E=0;for(let I=0;I<o;I++)e[(i+S)*t+r+I]>0&&E++;a[S]=E/o}const u=[];for(let S=0;S<s;S++)a[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],c=u[u.length-1],d=c-l;if(d<5)return[];const h=o/d;if(h<Rb||h>Ob)return[];if(h>=t1)return[{x:r,y:i+l,w:o,h:d}];const g=new Float32Array(s),f=.3*(8*.5-1)+.8,y=[];let w=0;for(let S=-4;S<=4;S++){const E=Math.exp(-(S*S)/(2*f*f));y.push(E),w+=E}for(let S=0;S<s;S++){let E=0;for(let I=-4;I<=4;I++){const C=Math.min(s-1,Math.max(0,S+I));E+=a[C]*y[I+4]}g[S]=E/w}const b=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let T=l+Math.trunc(d/2);if(x>b){let S=1/0;for(let E=b;E<x;E++)g[E]<S&&(S=g[E],T=E)}return[{x:r,y:i+l,w:o,h:T-l},{x:r,y:i+T,w:o,h:c-T}]}function u1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),o=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),a=Math.max(0,o-r),u=new Uint8Array(s*a*3);for(let l=0;l<a;l++)for(let c=0;c<s;c++){const d=((r+l)*e.width+n+c)*e.channels,h=(l*s+c)*3;u[h]=e.data[d],u[h+1]=e.data[d+1],u[h+2]=e.data[d+2]}return{width:s,height:a,channels:3,data:u}}function l1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const o=r*e.channels,{h:s,s:a,v:u}=Ct(e.data[o],e.data[o+1],e.data[o+2]);a>=40&&u>=40&&u<=205&&(t++,s>=n1&&s<=r1&&n++)}return t===0?0:n/t}function c1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:o,s,v:a}=Ct(e.data[i],e.data[i+1],e.data[i+2]);!(o>=fr&&o<=mr)&&s>=70&&a>=50&&t++}return n===0?0:t/n}function Lm(e,t){const n=dt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(zm,Bm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:zm,height:Bm,channels:3,data:i}}function d1(e){const t=e.width*e.height,n=[0,0,0];for(let o=0;o<t;o++){const s=o*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let o=0;o<t;o++){const s=o*e.channels;for(let a=0;a<3;a++){const u=n[a]>1e-6?r/n[a]:1;i[o*3+a]=Math.max(0,Math.min(255,Math.round(e.data[s+a]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Fm(e,t){const n=d1(t),r=n.width*n.height,i=new Uint8Array(r);let o=0;for(let f=0;f<r;f++){const y=f*3,{h:w,s:b,v:x}=Ct(n.data[y],n.data[y+1],n.data[y+2]);!(w>=fr&&w<=mr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[f]=1,o++)}const s=o<20,a=dt(e,n),u=new e.Mat;e.cvtColor(a,u,e.COLOR_RGB2Lab),a.delete();const l=u.data;let c=0,d=0,h=0,g=0;for(let f=0;f<r;f++)!s&&i[f]===0||(c+=l[f*3]*100/255,d+=l[f*3+1]-128,h+=l[f*3+2]-128,g++);return u.delete(),g===0?[0,0,0]:[c/g,d/g,h/g]}function p1(e){let t=0,n=0,r=0,i=0,o=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h:c,s:d,v:h}=Ct(e.data[l],e.data[l+1],e.data[l+2]);c>=fr&&c<=mr&&d>=30&&d<=170&&h<=170||(t++,d>=70&&h>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&h>=80&&o++))}const a=Math.max(t,1);return{blue:n/a,green:r/a,red:i/a,gold:o/a}}function h1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:o,s,v:a}=Ct(e.data[i],e.data[i+1],e.data[i+2]);s>=Pm&&a>=s1?(o>=95&&o<=128&&n.blue++,o>=35&&o<=85&&n.green++,(o<=8||o>=170)&&n.red++,o>=18&&o<=34&&n.gold++,o>=4&&o<=17&&a<150&&n.brown++):s<Pm&&a>=70&&a<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function f1(e,t){let n=0,r=0;for(let a=0;a<e.length;a++)n+=e[a],r+=t[a];n/=e.length,r/=t.length;let i=0,o=0,s=0;for(let a=0;a<e.length;a++){const u=e[a]-n,l=t[a]-r;i+=u*l,o+=u*u,s+=l*l}return i/(Math.sqrt(o*s)+1e-6)}function Gm(e,t){const n=dt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function m1(e,t){const n=new Map,r=new Map;for(const[i,o]of t){const s=Lm(e,o);n.set(i,Gm(e,s)),ti.includes(i)&&r.set(i,Fm(e,s))}return{gray:n,warmLab:r}}function g1(e,t,n){const r=Lm(e,t),i=p1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ei;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Dm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Um;const o=h1(r),s={blue:o.blue,green:o.green,red:o.red,gold:o.gold,browngrey:o.brown+o.grey};let a="blue";for(const l of Object.keys(s))s[l]>s[a]&&(a=l);if(s[a]<=0)return"";let u;if(a==="blue")u=ei;else if(a==="green")u=Dm;else if(a==="red")u=Um;else{const l=Gm(e,r);let c="",d=-2;for(const h of ti){const g=n.gray.get(h);if(g===void 0)continue;const f=f1(l,g);f>d&&(d=f,c=h)}u=c||ti[0]}if(ti.includes(u)&&n.warmLab.size>0){const l=Fm(e,r);let c=u,d=1/0;for(const[h,g]of n.warmLab){const f=Math.hypot(l[0]-g[0],l[1]-g[1],l[2]-g[2]);f<d&&(d=f,c=h)}return c}return u}function y1(e,t,n,r,i){var y;const o=[],{blobs:s,mask:a,maskWidth:u}=Zb(e,t);if(s.length===0||n.size===0)return o;const l=e,c=new l.ORB(Pb),d=new l.BFMatcher(l.NORM_HAMMING),h=new Map;for(const w of n.keys())h.set(w,{});const g=dt(e,t);let f=null;try{for(const w of s){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),T=Math.max(Vb,Math.trunc(qb*Math.max(w.w,w.h))),S=Math.max(0,b-T),E=Math.max(0,x-T),I=Math.min(t.width,b+T),C=Math.min(t.height,x+T);if(I-S<16||C-E<16)continue;const v=g.roi(new l.Rect(S,E,I-S,C-E)),R=new l.Mat;l.cvtColor(v,R,l.COLOR_RGB2GRAY);let z=null,Y=-2;for(const[W,K]of n){if(r!==void 0&&Date.now()>r)break;const Z=Jb(e,v,R,K,h.get(W),c,d);Z!==null&&Z>Y&&(Y=Z,z=W)}v.delete(),R.delete();const U=new Set;if(z!==null&&Y>=Wb){o.push({id:z,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),U.add(z);const W=e1(t,w,z);W&&(o.push({id:W.id,boundingBox:{x:W.box.x,y:W.box.y,width:W.box.w,height:W.box.h},confidence:.9}),U.add(W.id))}if(i===void 0||i.size===0)continue;const G=a1(a,u,w);if(G.length!==2)continue;const N=G.map(W=>u1(t,W));if(!N.some(W=>W.width*W.height===0||c1(W)<o1))for(let W=0;W<G.length;W++){const K=N[W];if(l1(K)<i1)continue;f===null&&(f=m1(e,i));const Z=g1(e,K,f);if(Z&&!U.has(Z)){U.add(Z);const me=G[W];o.push({id:Z,boundingBox:{x:me.x,y:me.y,width:me.w,height:me.h},confidence:1})}}}}finally{g.delete();for(const w of h.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{c.delete(),d.delete()}catch{}}return o}const Wm=128,w1=.56,_1=15,b1=.58,$1=70,x1=50,v1=.12,S1=.2,E1=.1,T1=.17,qm=.15;function M1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),o=>o.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Vm(e,t){const{width:n,height:r,channels:i,data:o}=e,s=Math.floor(n/2),a=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),c=Math.max(0,a-u),d=Math.min(n,s+u),h=Math.min(r,a+u),g=d-l,f=h-c,y=new Uint8Array(g*f*i);for(let w=0;w<f;w++){const b=((w+c)*n+l)*i;y.set(o.subarray(b,b+g*i),w*g*i)}return{width:g,height:f,channels:i,data:y}}function I1(e){const t=Vm(e,w1),n=q_(t),r=xm(n,Wm,Wm);return V_(r)}function C1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let o=0,s=0,a=0;for(let u=0;u<n;u++){const l=e[u]-r,c=t[u]-i;o+=l*c,s+=l*l,a+=c*c}return o/(Math.sqrt(s*a)+1e-6)}function k1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Vm(e,b1),{width:r,height:i,channels:o,data:s}=n,a=r*i||1;let u=0,l=0;for(let h=0;h<r*i;h++){const g=h*o,{h:f,s:y,v:w}=Ct(s[g],s[g+1],s[g+2]);y>=$1&&w>=x1&&(f>=95&&f<=130&&(u+=1),(f<=8||f>=170)&&(l+=1))}const c=u/a,d=l/a;return c>=v1&&t.set("masonry",qm*Math.min(1,c/S1)),d>=E1&&t.set("strategy",qm*Math.min(1,d/T1)),t}function A1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=I1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,o=[];for(let l=0;l<360;l+=_1)o.push(K_(n,l,i));const s=new Map;for(const[l,c]of t){let d=-1/0;for(const h of o){const g=C1(h,c);g>d&&(d=g)}s.set(l,d)}for(const[l,c]of k1(e))c>0&&s.has(l)&&s.set(l,s.get(l)+c);let a="",u=-1/0;for(const[l,c]of s)c>u&&(a=l,u=c);return[a,u]}const un=224,R1=[.485,.456,.406],O1=[.229,.224,.225];function N1(e){const t=gs(e,un,un),n=un*un,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=(t[i*3+o]/255-R1[o])/O1[o];return r}function z1(e){const t=3*un*un,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(N1(Xt(e,r)),r*t);return n}function B1(e){const t=e,n=Array.isArray(t==null?void 0:t.classes)?t.classes.map(String):[],r=Array.isArray(t==null?void 0:t.rejets)?t.rejets.map(String):[];if(n.length===0||r.length===0||!r.every(i=>n.includes(i)))throw new Error("token_classifier_classes.json : fiche absente ou incohérente");return typeof(t==null?void 0:t.empreinte_modele)=="string"?{classes:n,rejets:r,empreinte_modele:t.empreinte_modele}:{classes:n,rejets:r}}function P1(e,t){const n=t.classes.length,r=e.length/n;if(!Number.isInteger(r)||r<1)throw new Error(`token_classifier : ${e.length} probabilités pour ${n} classes`);let i=0,o=-1;for(let a=0;a<n;a++){let u=0;for(let c=0;c<r;c++)u+=e[c*n+a];const l=u/r;l>o&&(o=l,i=a)}const s=t.classes[i];return{id:t.rejets.includes(s)?null:s,p:o}}const qn=96,D1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],U1=.45;function L1(e){const t=gs(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function F1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=U1?D1[t]??"":"",prob:n}}const Qt=128,G1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],W1=.5;let Hm=null;function q1(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError(`seuil merveilles hors bornes : ${e}`);Hm=e}function jm(){return Hm??W1}let Km=null;function V1(e){if(!Array.isArray(e)||e.length===0||!e.includes("other"))throw new RangeError("classes merveilles invalides (liste vide ou sans `other`)");Km=[...e]}function H1(){return Km??G1}const j1=[["__inverse",2],["__trois_quarts",1],["__quart",3]];function K1(e){for(const[t,n]of j1)if(e.endsWith(t))return[e.slice(0,-t.length),n];return[e,0]}function Y1(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n*3);for(let s=0;s<t*n;s++)for(let a=0;a<3;a++)o[s*3+a]=i[s*r+a];return o}function X1(e){const t=Math.min(Qt/e.width,Qt/e.height),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),i=n===e.width&&r===e.height?Y1(e):t<1?Gn(e,n,r):dr(e,n,r),o=Qt*Qt,s=new Float32Array(3*o);s.fill(114/255);const a=Math.floor((Qt-r)/2),u=Math.floor((Qt-n)/2);for(let l=0;l<r;l++)for(let c=0;c<n;c++){const d=(l*n+c)*3,h=(l+a)*Qt+(c+u);for(let g=0;g<3;g++)s[g*o+h]=i[d+g]/255}return s}async function Q1(e,t){const{index:n,prob:r}=Z1(await t(X1(e))),[i,o]=K1(H1()[n]??"");return r<jm()||i==="other"||i===""?{id:"",prob:r,decalage:0}:{id:i,prob:r,decalage:o}}function Z1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}const Dt=96,J1=[1,2,3,4,5,6,7],Ym=.8,e2=.99;function t2(e){const t=dr(e,e.width*2,e.height*2),n=e.width*2<Dt&&e.height*2<Dt,r={width:e.width*2,height:e.height*2,channels:3,data:t},i=n?dr(r,Dt,Dt):Gn(r,Dt,Dt),o=Dt*Dt,s=new Float32Array(3*o);for(let a=0;a<o;a++)for(let u=0;u<3;u++)s[u*o+a]=i[a*3+u]/255;return s}function n2(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:J1[t],prob:e[t]}}const ln=128,Xm=.35,r2=["fp","laurel"],i2=.85,Vn=40;function o2(e){const r=(e.width<ln&&e.height<ln?dr:Gn)(e,ln,ln),i=ln*ln,o=new Float32Array(3*i);for(let s=0;s<i;s++)for(let a=0;a<3;a++)o[a*i+s]=r[s*3+a]/255;return o}function s2(e){return e[r2.indexOf("fp")]}const cn=128,a2=.15,gr=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],ni=7,Qm=.9;function u2(e,t,n){const[r,i,o,s]=e.map(Number);if(!(o>1)||!(s>1))return null;const a=r+o/2,u=i+s/2,l=Math.max(o,s)*(1+2*a2),c=Math.max(0,ut(a-l/2)),d=Math.max(0,ut(u-l/2)),h=Math.min(t,ut(a+l/2)),g=Math.min(n,ut(u+l/2));return h-c<8||g-d<8?null:{x:c,y:d,w:h-c,h:g-d}}function l2(e){const r=(e.width<cn&&e.height<cn?dr:Gn)(e,cn,cn),i=cn*cn,o=new Float32Array(3*i);for(let s=0;s<i;s++)for(let a=0;a<3;a++)o[a*i+s]=r[s*3+a]/255;return o}function c2(e){let t=0;for(let o=1;o<gr.length;o++)e[o]>e[t]&&(t=o);const n=e[t],r=t>=ni;let i=0;for(let o=1;o<ni;o++)e[o]>e[i]&&(i=o);return{className:gr[t],probability:n,rejected:r&&n>=Qm,bestColour:gr[i]}}function d2(e,t){const n=e.color,r={...e,classColor:t.className,classColorProba:Math.round(t.probability*1e4)/1e4};if(n==null||t.className===n)return r;const o=gr.indexOf(t.className)<ni?`le classifieur préfère ${t.className} (P=${t.probability.toFixed(3)}) là où le détecteur lit ${n}`:`le classifieur penche pour ${t.className} (P=${t.probability.toFixed(3)}, sous le seuil de rejet de ${Qm.toFixed(2)}) là où le détecteur lit ${n}`;return e.suspect?r:{...r,suspect:!0,suspectReason:o}}const ri=3,p2=2.2,h2=.3,f2=.65,m2=3,g2=1.3,y2=.77;function Zm(e,t,n){const[r,i,o,s]=e,a=[];return r<=ri&&a.push("gauche"),i<=ri&&a.push("haut"),r+o>=t-ri&&a.push("droit"),i+s>=n-ri&&a.push("bas"),a}function Jm(e){const t=e[3]/Math.max(e[2],1);return t>=g2?"portrait":t<=y2?"paysage":null}function Is(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function w2(e,t,n){for(const[r,i,o,s]of e??[])if(Math.max(Math.abs(o-r)/Math.max(t,1),Math.abs(s-i)/Math.max(n,1))>f2)return!0;return!1}function _2(e,t,n,r,i){try{const o=[...e],s=o.filter(w=>Zm(w.box,r,i).length>0);if(s.length===0)return{kept:o,dropped:[],suspects:[]};const a=o.filter(w=>!s.includes(w)),u=w=>({kept:a,dropped:s.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(w2(n,r,i))return u("photo-piste");if(a.length<m2)return t>0?u("photo-merveilles"):{kept:o,dropped:[],suspects:s.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(s.length>(a.length+s.length)/3)return u("debordement-structurel");const l=Is(a.map(w=>w.box[2]*w.box[3])),c=Is(a.map(w=>w.box[2])),d=Is(a.map(w=>w.box[3])),h=new Set(a.map(w=>Jm(w.box)).filter(w=>w!==null)),g=[...a],f=[],y=[];for(const w of s){const b=Zm(w.box,r,i),[,,x,T]=w.box,S=l>0?x*T/l:0,E=[];(b.includes("gauche")||b.includes("droit"))&&E.push(c>0?x/c:1),(b.includes("haut")||b.includes("bas"))&&E.push(d>0?T/d:1);const I=E.length>0?Math.min(...E):1,C=Jm(w.box);S>p2?f.push({banner:w,edgeReason:"bord-grosse"}):I<h2?f.push({banner:w,edgeReason:"bord-tronquee"}):C!==null&&h.size>0&&!h.has(C)?f.push({banner:w,edgeReason:"bord-orientation-adverse"}):(g.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:g,dropped:f,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const b2=.45,$2=.35,x2=.8,v2=.9;function eg(e,t){const n=Math.max(0,Math.min(e[0]+e[2],t[0]+t[2])-Math.max(e[0],t[0])),r=Math.max(0,Math.min(e[1]+e[3],t[1]+t[3])-Math.max(e[1],t[1]));return n*r/Math.max(1,Math.min(e[2]*e[3],t[2]*t[3]))}function S2(e){const t=new Map;return e.forEach((n,r)=>{if(n.color===null||n.confidence>=x2)return;const i=[];e.forEach((o,s)=>{s!==r&&o.color===n.color&&o.confidence>=v2&&eg(n.box,o.box)>=b2&&i.push(s)});for(let o=0;o<i.length&&!t.has(r);o++)for(let s=o+1;s<i.length;s++)if(eg(e[i[o]].box,e[i[s]].box)<=$2){t.set(r,[i[o],i[s]]);break}}),t}function E2(e,t){if(t.length!==e.length)throw new Error(`propriétaires (${t.length}) et bannières (${e.length}) ne sont pas alignés`);const n=S2(e);return{gardees:e.filter((r,i)=>!n.has(i)),proprietaires:t.filter((r,i)=>!n.has(i)),retirees:n}}const T2=.8,Cs=.05,tg=.5,M2=.2;function ng(e,t){const n=Math.max(0,Math.min(e[0]+e[2],t[0]+t[2])-Math.max(e[0],t[0])),r=Math.max(0,Math.min(e[1]+e[3],t[1]+t[3])-Math.max(e[1],t[1])),i=n*r;return i<=0?0:i/(e[2]*e[3]+t[2]*t[3]-i)}function I2(e,t){const n=Math.max(0,Math.min(e[0]+e[2],t[0]+t[2])-Math.max(e[0],t[0])),r=Math.max(0,Math.min(e[1]+e[3],t[1]+t[3])-Math.max(e[1],t[1]));return n*r/Math.max(1,e[2]*e[3])}function C2(e,t){const n=e[0]+e[2]/2,r=e[1]+e[3]/2;return t[0]<=n&&n<=t[2]&&t[1]<=r&&r<=t[3]}function k2(e,t){const n=[];for(const r of e)r.confidence>=Cs&&n.push({box:[r.box[0]+t[0],r.box[1]+t[1],r.box[2],r.box[3]],confidence:r.confidence,classe:r.classIndex});return n}function A2(e,t){const n={abstention:null,candidates:[],nonVues:[],porteuses:[],retirees:new Map,gardees:new Map},r=[];if(t.forEach((a,u)=>{(a.detections===null||a.detections===void 0)&&r.push(u)}),r.length>0)return n.abstention=`zoom en panne sur le(s) crop(s) ${JSON.stringify(r)} : la règle ne retire rien`,n;const i=t.map(a=>a.crop),o=[];for(const a of t)for(const u of a.detections)u.confidence>=Cs&&o.push(u);e.forEach((a,u)=>{a.confidence<T2&&i.some(l=>C2(a.box,l))&&n.candidates.push(u)});for(const a of n.candidates){let u=!1;for(const l of o)if(ng(l.box,e[a].box)>=tg){u=!0;break}u||n.nonVues.push(a)}const s=new Set(n.nonVues);e.forEach((a,u)=>{s.has(u)||n.porteuses.push(u)});for(const a of n.nonVues){const u=[];for(const l of o){if(I2(e[a].box,l.box)<=M2)continue;let c=null,d=-1;for(const h of n.porteuses){if(h===a)continue;const g=ng(l.box,e[h].box);g>d&&(c=h,d=g)}u.push({box:[...l.box],confidence:l.confidence,classe:l.classe,porteuse:d>=tg?c:null,iou:Math.max(0,d)})}u.every(l=>l.porteuse!==null)?n.retirees.set(a,{dessous:u}):n.gardees.set(a,{dessous:u})}return n}function R2(e,t){return A2(e,t).retirees}function O2(e,t,n){if(t.length!==e.length)throw new Error(`propriétaires (${t.length}) et bannières (${e.length}) ne sont pas alignés`);const r=R2(e,n);return{gardees:e.filter((i,o)=>!r.has(o)),proprietaires:t.filter((i,o)=>!r.has(o)),retirees:r}}const N2=.9,z2=.9,rg="retire",B2="sans_avis",P2="aucune_contredite",D2="deux_contredites",U2="preference_tierce",L2=gr.slice(0,ni);function F2(e,t){const n=Math.max(0,Math.min(e[0]+e[2],t[0]+t[2])-Math.max(e[0],t[0])),r=Math.max(0,Math.min(e[1]+e[3],t[1]+t[3])-Math.max(e[1],t[1]));return n*r/Math.max(1,Math.min(e[2]*e[3],t[2]*t[3]))}function G2(e){const t=e.classColor,n=e.classColorProba;return t==null||n===null||n===void 0?null:[String(t),Number(n)]}function W2(e,t){return t!==null&&L2.includes(t[0])&&t[0]!==e.color&&t[1]>=z2}function q2(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n].color;if(r!=null)for(let i=n+1;i<e.length;i++){const o=e[i].color;if(o==null||o===r)continue;const s=F2(e[n].box,e[i].box);s>=N2&&t.push([n,i,s])}}return t}function V2(e){const t={abstention:null,paires:[],retirees:new Map},n=e.map(i=>G2(i)),r=e.map((i,o)=>W2(i,n[o]??null));for(const[i,o,s]of q2(e)){let a,u=null,l=null;const c=n[i]??null,d=n[o]??null;if(c===null||d===null)a=B2;else if(r[i]&&r[o])a=D2;else if(!r[i]&&!r[o])a=P2;else{const h=r[i]?i:o,g=r[i]?o:i;if((r[i]?c:d)[0]===e[g].color){a=rg,u=h,l=g;const y=t.retirees.get(h);y?y.push(g):t.retirees.set(h,[g])}else a=U2}t.paires.push({i,j:o,couverture:s,avis:[c,d],decision:a,retiree:u,temoin:l})}return t}function H2(e,t){if(t.length!==e.length)throw new Error(`propriétaires (${t.length}) et bannières (${e.length}) ne sont pas alignés`);const n=V2(e);return{gardees:e.filter((r,i)=>!n.retirees.has(i)),proprietaires:t.filter((r,i)=>!n.retirees.has(i)),retirees:n.retirees,paires:n.paires}}function j2(e,t){const n=(r,i)=>{const o=e[r],s=i===null?"sans avis":`${i[0]} ${i[1].toFixed(3)}`;return`#${r} ${o.color} ${o.confidence.toFixed(3)} [${o.box.join(", ")}] (BC13 ${s})`};return t.map(r=>`${r.decision===rg?`retire #${r.retiree}, témoin #${r.temoin}`:r.decision} : ${n(r.i,r.avis[0])} / ${n(r.j,r.avis[1])}, couverture ${r.couverture.toFixed(2)}`)}const K2=1,Y2=1.5;function X2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function Q2(e,t,n,r){const i=r[0]-n[0],o=r[1]-n[1],s=Math.hypot(i,o);if(s<=0)return null;const a=((e-n[0])*i+(t-n[1])*o)/(s*s);return[Math.abs((e-n[0])*o-(t-n[1])*i)/s,Math.abs(a-.5)*s]}function Z2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function J2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,o,s,a]=t,u=i+s/2,l=o+a/2;let c=null;for(const[h,g]of X2(e)){const f=Q2(u,l,h,g);f!==null&&(c===null||f[0]<c[0])&&(c=f)}if(c===null)return null;const d=Z2(e);return d===null?null:{distBord:c[0]/r,decalLat:c[1]/r,perpendiculaire:d!==s>a}}catch{return null}}function e$(e,t,n,r=K2,i=Y2){const o=[];for(const[s,a]of t??[]){const u=J2(e,a,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||o.push([u.decalLat,s]))}return o.length===0?null:(o.sort((s,a)=>s[0]-a[0]||s[1]-a[1]),o[0][1])}const bt=64,ig=.5,t$=[.67,1.24];function og(e,t,n,r){const i=Math.max(0,t-r),o=Math.max(0,n-r),s=Math.min(e.width,t+r),a=Math.min(e.height,n+r),u=s-i,l=a-o;if(u<=0||l<=0)return null;const c=e.channels,d=new Uint8ClampedArray(u*l*3),h=r*r;for(let w=0;w<l;w++){const b=o+w,x=b-n;for(let T=0;T<u;T++){const S=i+T,E=S-t,I=(w*u+T)*3;if(E*E+x*x<=h){const C=(b*e.width+S)*c;d[I]=e.data[C],d[I+1]=e.data[C+1],d[I+2]=e.data[C+2]}else d[I]=255,d[I+1]=255,d[I+2]=255}}const g=Gn({width:u,height:l,channels:3,data:d},bt,bt),f=bt*bt,y=new Float32Array(3*f);for(let w=0;w<f;w++)for(let b=0;b<3;b++)y[b*f+w]=g[w*3+b]/255;return y}function n$(e){return e[1]}const ii=[1,3,6],r$=.5;function i$(e){if(e.length!==ii.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:ii[t],prob:e[t]}}function o$(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&ii.includes(i.denomination)&&i.prob>=r$?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const s$=2.25,yr=3,a$=1.15,u$=.5,l$=2.5,c$=.75,d$=2.25,p$=1.3,h$=.77;function oi(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function f$(e){const t=Array.from(new Map(e.map(o=>[`${o[0]},${o[1]}`,o])).values());if(t.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),t.length<=2)return t;const n=(o,s,a)=>(s[0]-o[0])*(a[1]-o[1])-(s[1]-o[1])*(a[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(const o of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return[...r.slice(0,-1),...i.slice(0,-1)]}function sg(e,t,n){let r=!1;const i=n.length;for(let o=0;o<i;o+=1){const[s,a]=n[o],[u,l]=n[(o+1)%i];if(a>t!=l>t){const c=(u-s)*(t-a)/(l-a)+s;e<c&&(r=!r)}}return r}function ag(e,t,n){if(n.length>=3&&sg(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let o=0;o<i;o+=1){const[s,a]=n[o],[u,l]=n[i>1?(o+1)%i:o],c=u-s,d=l-a,h=c*c+d*d,g=h===0?0:Math.max(0,Math.min(1,((e-s)*c+(t-a)*d)/h));r=Math.min(r,Math.hypot(e-(s+g*c),t-(a+g*d)))}return r}function m$(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function g$(e,t,n){const[r,i]=e,o=t[0]-r,s=t[1]-i;if(o===0&&s===0)return!1;const[a,u,l,c]=n;let d=0,h=1;const g=[[-o,r-a],[o,l-r],[-s,i-u],[s,c-i]];for(const[f,y]of g){if(f===0){if(y<0)return!1;continue}const w=y/f;if(f<0?d=Math.max(d,w):h=Math.min(h,w),d>h)return!1}return d>=h?!1:d>=.1&&h<=.95||h-d>=.15}const ks=e=>e.box[3]/Math.max(1,e.box[2]),Zt=e=>ks(e)>a$,Hn=e=>ks(e)>=p$||ks(e)<=h$;function As(e){const[t,n,r,i]=e.box;if(r>=i){const s=7*i;return[t,n-s,r,i+2*s]}const o=7*r;return[t-o,n,r+2*o,i]}function ug(e,t,n,r,i){const o=new Set(t),s=[...e.map((A,O)=>({box:[A[0],A[1],A[2],A[3]],kind:o.has(O)?"card":"tucked",src:["banner",O]})),...n.map((A,O)=>({box:[A[0],A[1],A[2],A[3]],kind:"wonder",src:["wonder",O]}))],a=e.map(()=>"player"),u=n.map(()=>"player");if(s.length===0)return{bannerOwner:a,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",nearestOwner:()=>"player",pointInside:()=>"none"};const l=s.map(A=>[A.box[0]+A.box[2]/2,A.box[1]+A.box[3]/2]);let c=s.filter(A=>A.kind!=="wonder").map(A=>Math.hypot(A.box[2],A.box[3])).sort((A,O)=>A-O);c.length===0&&(c=s.map(A=>Math.hypot(A.box[2],A.box[3])).sort((A,O)=>A-O));const d=c[Math.floor(c.length/2)],h=(s$*d)**2,g=s.map((A,O)=>O),f=A=>{let O=A;for(;g[O]!==O;)g[O]=g[g[O]],O=g[O];return O},y=s.map((A,O)=>A.kind==="card"?O:-1).filter(A=>A>=0),w=s.map((A,O)=>A.kind!=="card"?O:-1).filter(A=>A>=0);for(let A=0;A<y.length;A+=1)for(let O=A+1;O<y.length;O+=1){const P=y[A],B=y[O],V=s[P],X=s[B];if(Hn(V)&&Hn(X)&&Zt(V)!==Zt(X))continue;const Q=l[P][0]-l[B][0],ne=l[P][1]-l[B][1],ye=Q*Q+ne*ne;let ve=ye<=h;!ve&&Hn(V)&&Hn(X)&&Zt(V)===Zt(X)&&ye<=(4*d)**2&&(ve=oi(As(V),As(X))<=.5*d),ve&&(g[f(P)]=f(B))}for(let A=0;A<w.length;A+=1)for(let O=A+1;O<w.length;O+=1){const P=w[A],B=w[O];oi(s[P].box,s[B].box)<=c$*d&&(g[f(P)]=f(B))}const b=new Map;for(const A of w){const O=f(A);b.set(O,[...b.get(O)??[],A])}const x=new Map;for(const A of y){const O=f(A);x.set(O,[...x.get(O)??[],A])}for(const A of b.values()){const O=A.filter(Q=>s[Q].kind==="wonder"&&Hn(s[Q])).map(Q=>Zt(s[Q])),P=O.length>0?O.filter(Boolean).length*2>O.length:null;let B=[];const V=[];for(const[Q,ne]of x){let ye=Number.POSITIVE_INFINITY;for(const Le of A)for(const ge of ne)ye=Math.min(ye,oi(s[Le].box,s[ge].box));if(ye>d$*d)continue;const Te=ne.filter(Le=>Zt(s[Le])).length/ne.length>=.5;V.push([Q,ye,Te]),!(P!==null&&Te!==P)&&B.push([Q,ye,Te])}if(B.length===0&&V.length===1&&(B=V),B.length===0)continue;const X=new Set(B.map(Q=>Q[2]));if(B.length>=2&&X.size===1&&P!==null){const Q=B[0][0];for(const[ne]of B.slice(1))g[f(ne)]=f(Q);g[f(A[0])]=f(Q)}else{const Q=B.reduce((ne,ye)=>ye[1]<ne[1]?ye:ne);g[f(A[0])]=f(Q[0])}}let T=new Map;for(let A=0;A<s.length;A+=1){const O=f(A);T.set(O,[...T.get(O)??[],A])}const S=s.map((A,O)=>A.kind==="wonder"?O:-1).filter(A=>A>=0);if(S.length>0){const A=(P,B)=>{const[V,X,Q,ne]=As(s[P]),[ye,ve,Te,Le]=s[B].box,ge=Math.max(0,Math.min(V+Q,ye+Te)-Math.max(V,ye)),we=Math.max(0,Math.min(X+ne,ve+Le)-Math.max(X,ve));return ge*we>=.9*s[P].box[2]*s[P].box[3]},O=new Map;for(let P=0;P<s.length;P+=1)if(!(s[P].kind!=="card"||!Hn(s[P])))for(const B of S){const V=oi(s[P].box,s[B].box);if(V<=.8*d&&Zt(s[P])!==Zt(s[B])&&A(P,B)){const X=O.get(B);(!X||V<X[1])&&O.set(B,[P,V])}}for(const[P,[B]]of O){const V=f(P);for(const[X,Q]of T){const ne=Q.indexOf(B);if(ne>=0&&X!==V){Q.splice(ne,1),T.set(V,[...T.get(V)??[],B]),s[B].kind="tucked";break}}}T=new Map([...T].filter(([,P])=>P.length>0))}const E=A=>A.filter(O=>s[O].kind==="card").length,I=A=>{const O=A.filter(P=>s[P].kind==="card"||s[P].kind==="wonder");return O.length===0?null:O.filter(P=>Zt(s[P])).length/O.length},C=A=>[A.reduce((O,P)=>O+l[P][0],0)/A.length,A.reduce((O,P)=>O+l[P][1],0)/A.length],v=[i[0]/2,i[1]/2],R=[...T.values()].sort((A,O)=>{const P=E(A),B=E(O);if(P!==B)return B-P;const V=Math.hypot(C(A)[0]-v[0],C(A)[1]-v[1]),X=Math.hypot(C(O)[0]-v[0],C(O)[1]-v[1]);return V-X}),z=C(R[0]),Y=I(R[0]),U=R.map((A,O)=>{if(O===0||E(A)<yr)return"player";const P=I(A),B=P!==null&&Y!==null&&Math.abs(P-Y)>=u$,V=C(A),X=r.some(Q=>g$(z,V,Q));return B||X?"opponent":"player"});if(!U.includes("opponent")){const A=V=>V.reduce((X,Q)=>X+(s[Q].kind==="wonder"?1:0),0),O=U.map((V,X)=>X).filter(V=>V>0&&E(R[V])>=yr),P=U.map((V,X)=>X).filter(V=>V>0&&E(R[V])<yr&&A(R[V])>=2);let B=[...O];if(O.length>0){const V=new Map([...O,...P].map(ne=>[ne,C(R[ne])])),X=(ne,ye)=>(ne[0]-ye[0])**2+(ne[1]-ye[1])**2;if(!O.every((ne,ye)=>O.slice(ye+1).every(ve=>X(V.get(ne),V.get(ve))<Math.min(X(V.get(ne),z),X(V.get(ve),z)))))B=[];else for(const ne of P){let ye=0,ve=X(V.get(ne),z);for(const Te of O){const Le=X(V.get(ne),V.get(Te));Le<ve&&(ve=Le,ye=Te)}ye!==0&&B.push(ne)}}B.reduce((V,X)=>V+A(R[X]),0)<1&&(B=[]),B.length>0&&(E(R[0])<2*yr||B.reduce((V,X)=>V+E(R[X]),0)<2*yr)&&(B=[]);for(const V of B)U[V]="opponent"}const G=[],N=[];let W=!1;R.forEach((A,O)=>{const P=U[O];P==="opponent"&&(W=!0);const B=[],V=[];for(const X of A){const[Q,ne,ye,ve]=s[X].box;B.push([Q,ne],[Q+ye,ne],[Q,ne+ve],[Q+ye,ne+ve]),V.push(s[X].box);const[Te,Le]=s[X].src;Te==="banner"?a[Le]=P:u[Le]=P}G.push([P,f$(B)]),N.push([P,V])});const K=(A,O,P)=>Math.min(...N[P][1].map(B=>m$(A,O,B))),Z=(A,O)=>G.map(([,P],B)=>P.length>=3&&sg(A,O,P)?B:-1).filter(P=>P>=0),me=(A,O)=>{if(G.length===0)return"player";const P=d>0?l$*d:Number.POSITIVE_INFINITY,B=Z(A,O);if(B.length>0){const Q=B.reduce((ne,ye)=>K(A,O,ye)<K(A,O,ne)?ye:ne);return G[Q][0]}let V=-1,X=Number.POSITIVE_INFINITY;return G.forEach(([,Q],ne)=>{const ye=ag(A,O,Q);ye<X&&(V=ne,X=ye)}),V>=0&&X<=P?G[V][0]:"none"},L=(A,O)=>{if(G.length===0)return"none";const P=Z(A,O);if(P.length===0)return"none";const B=P.reduce((V,X)=>K(A,O,X)<K(A,O,V)?X:V);return G[B][0]},ee=(A,O)=>{if(G.length===0)return"player";const P=me(A,O);if(P!=="none")return P;let B=0,V=Number.POSITIVE_INFINITY;return G.forEach(([,X],Q)=>{const ne=ag(A,O,X);ne<V&&(B=Q,V=ne)}),G[B][0]};return{bannerOwner:a,wonderOwner:u,opponentFound:W,hulls:G,hullBoxCounts:N.map(([,A])=>A.length),pointOwner:me,pointInside:L,nearestOwner:ee}}const y$=3,w$=2;function _$(e,t=y$){const n=e.length,r=Array.from({length:n},(s,a)=>a),i=s=>{for(;r[s]!==s;)r[s]=r[r[s]],s=r[s];return s};for(let s=0;s<n;s+=1)for(let a=s+1;a<n;a+=1){const u=e[s],l=e[a],c=Number(u.center[0]),d=Number(u.center[1]),h=Number(l.center[0]),g=Number(l.center[1]),f=Number(u.radius??0),y=Number(l.radius??0);![c,d,h,g,f,y].every(Number.isFinite)||f<=0||y<=0||Math.hypot(c-h,d-g)<=t*(f+y)&&(r[i(s)]=i(a))}const o=new Map;for(let s=0;s<n;s+=1){const a=i(s);o.has(a)||o.set(a,[]),o.get(a).push(s)}return[...o.values()]}function b$(e,t,n){const r=Number(n[0]),i=Number(n[1]),o=Number(n[2]),s=Number(n[3]),a=Math.max(Math.min(r,o)-e,0,e-Math.max(r,o)),u=Math.max(Math.min(i,s)-t,0,t-Math.max(i,s));return Math.hypot(a,u)}function Rs(e,t,n,r){const i=new Set(e.filter(s=>t.pointOwner(Number(s.center[0]),Number(s.center[1]))===n));if(i.size===0)return[];const o=[];for(const s of _$(e)){const a=s.map(y=>e[y]),u=a.filter(y=>i.has(y));if(u.length===0)continue;let l=0,c=0,d=0;for(const y of a){const w=Number(y.center[0]),b=Number(y.center[1]);c+=w,d+=b,t.pointInside(w,b)===n&&(l+=1)}const h=c/a.length,g=d/a.length,f=r&&r.length>0?Math.min(...r.map(y=>b$(h,g,y))):0;o.push({cle:[...s].sort((y,w)=>y-w).join(","),membres:a,miens:u,inside:l,dPiste:f,centre:[h,g],valeur:u.reduce((y,w)=>y+(Number(w.denomination??0)||0),0)})}return o}function lg(e){return e.membres.length>=w$?e.inside:0}function $$(e){return e.reduce((t,n)=>{const r=lg(t),i=lg(n),o=[r>0?1:0,r/t.membres.length,t.dPiste,t.valeur],s=[i>0?1:0,i/n.membres.length,n.dPiste,n.valeur];for(let a=0;a<4;a+=1){if(s[a]>o[a])return n;if(s[a]<o[a])return t}return t})}function x$(e,t,n,r){const[i,o]=e.centre,s={};for(const c of["player","opponent"]){const d=Rs(t,n,c,r).filter(h=>h.cle!==e.cle);s[c]=d.length===0?1/0:Math.min(...d.map(h=>Math.hypot(i-h.centre[0],o-h.centre[1])))}if(s.player!==s.opponent)return s.player>s.opponent?"player":"opponent";const a=c=>{const d=Rs(t,n,c,r).find(h=>h.cle===e.cle);return d?[d.inside,d.dPiste,d.valeur]:[-1,-1,-1]},u=a("player"),l=a("opponent");for(let c=0;c<3;c+=1){if(u[c]>l[c])return"player";if(u[c]<l[c])return"opponent"}return"player"}function v$(e,t,n){const r={player:[],opponent:[]},i={};for(const s of["player","opponent"]){const a=Rs(e,t,s,n);a.length>0&&(i[s]=$$(a))}const o=Object.keys(i);if(o.length===0)return r;if(o.length===2&&i.player.cle===i.opponent.cle){const s=x$(i.player,e,t,n);return r[s]=i[s].membres,r}for(const s of o)r[s]=i[s].membres;return r}function S$(e,t,n,r){const i=()=>e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n);try{return v$(e,t,r)[n]??[]}catch{try{return i()}catch{return[...e]}}}const E$=1280,T$=80,M$=3,I$=3,C$=.3,k$=2.4,A$=1,R$=5.2,O$=5;function Os(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function N$(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=C$&&r/n<=k$&&i/n>=A$&&i/n<=R$&&i/r<=O$}function z$(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*E$/r<T$}function B$(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(a=>a[0]),o=r.poly.map(a=>a[1]),s=Math.max(1,i.length);return{hull:r,cx:i.reduce((a,u)=>a+u,0)/s,cy:o.reduce((a,u)=>a+u,0)/s,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),o=Number(r[1]),s=Number(r[2]),a=Number(r[3]);if(![i,o,s,a].every(Number.isFinite))continue;const u=i+s/2,l=o+a/2;let c=n[0],d=1/0;for(const h of n){const g=(u-h.cx)**2+(l-h.cy)**2;g<d&&(d=g,c=h)}c.extra.push([i,o],[i+s,o+a])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function P$(e,t,n,r,i=[]){const o=Os(n);if(!z$(e,t,o))return[];const s=r.filter(l=>l.n>=I$&&l.poly.length>0).slice().sort((l,c)=>c.n-l.n).slice(0,2),a=Math.round(o*M$),u=[];for(const l of B$(s,i)){const c=l.poly.map(w=>w[0]),d=l.poly.map(w=>w[1]);if(c.length===0)continue;const h=Math.max(0,Math.trunc(Math.min(...c))-a),g=Math.max(0,Math.trunc(Math.min(...d))-a),f=Math.min(e,Math.trunc(Math.max(...c))+a),y=Math.min(t,Math.trunc(Math.max(...d))+a);f>h&&y>g&&u.push([h,g,f,y])}return u}function D$(e,t,n){if(!e||e.length<4)return null;const[r,i,o,s]=[e[0],e[1],e[2],e[3]];return N$(o,s,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(o),Math.round(s)]:null}const U$=.5,L$=.8;function F$(e,t){const n=[];for(const{crop:r,jetons:i}of e)for(const o of i){if(!(o.confidence>=U$))continue;const s={cx:Math.trunc(o.cx)+r[0],cy:Math.trunc(o.cy)+r[1],r:Math.trunc(o.r),id:o.id,confidence:o.confidence};[...t,...n].some(u=>Math.hypot(s.cx-u.cx,s.cy-u.cy)<=L$*Math.max(s.r,Math.trunc(u.r)))||n.push(s)}return n}const G$=1.1,W$=3.2,q$=20,V$=.5,H$=1280,j$=.18,cg=28,K$=.6,Y$=.3;function X$(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let s=0;s<30;s++){const a=e.filter(c=>c<=r),u=e.filter(c=>c>r);if(a.length===0||u.length===0)return[e.map((c,d)=>d)];const l=(a.reduce((c,d)=>c+d,0)/a.length+u.reduce((c,d)=>c+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],o=[];return e.forEach((s,a)=>(s<=r?i:o).push(a)),[i,o]}function Q$(e,t,n=G$){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const o=e.map(l=>l[0]+l[2]/2),s=e.map(l=>l[1]+l[3]/2),a=Math.max(...o)-Math.min(...o)>Math.max(...s)-Math.min(...s)?o:s,u=[];for(const l of X$(a)){if(l.length===0)continue;const c=l.map(R=>e[R]),d=c.map(R=>Math.min(R[2],R[3])).sort((R,z)=>R-z),h=d[Math.trunc(d.length/2)],g=W$*h,f=Math.max(0,Math.min(...c.map(R=>R[0]))-g),y=Math.max(0,Math.min(...c.map(R=>R[1]))-g),w=Math.min(r,Math.max(...c.map(R=>R[0]+R[2]))+g),b=Math.min(i,Math.max(...c.map(R=>R[1]+R[3]))+g),x=Math.max(w-f,b-y);if(x<=0)continue;const T=V$*h*H$/x,S=T>0?Math.max(1,Math.ceil(q$/T)):1;if(S===1){u.push([Math.trunc(f),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const E=w-f>=b-y,C=(E?w-f:b-y)/S,v=C*(1+j$);for(let R=0;R<S;R++){let z=(E?f:y)+R*C-(v-C)/2;z=Math.max(E?f:y,z);const Y=Math.min(E?w:b,z+v);u.push(E?[Math.trunc(z),Math.trunc(y),Math.trunc(Y),Math.trunc(b)]:[Math.trunc(f),Math.trunc(z),Math.trunc(w),Math.trunc(Y)])}}return u.filter(([l,c,d,h])=>Math.max(r,i)/Math.max(1,Math.max(d-l,h-c))>=n)}function Z$(e,t,n,r=cg){const[i,o]=n,s=e;for(const[a,u,l,c]of t){const d=(a+l)/2+i,h=(u+c)/2+o,g=Math.min(l-a,c-u);s.some(([y,w,b,x])=>{const T=d-(y+b)/2,S=h-(w+x)/2,E=Math.min(b-y,x-w),I=g>0&&E>0?Math.min(r,K$*Math.min(g,E)):r;return Math.hypot(T,S)<=I})||s.push([a+i,u+o,l+i,c+o])}return s}async function J$(e,t,n=cg){const r=[];for(let i=0;i<e.length;i++){const o=e[i],s=[];for(const a of o.boxes)await t(a,i)||s.push([a[0],a[1],a[2],a[3]]);Z$(r,s,o.offset,n)}return r}function ex(e,t,n,r=Y$){for(const i of n){const o=r*Math.min(i[2],i[3]);if(i[0]-o<=e&&e<=i[0]+i[2]+o&&i[1]-o<=t&&t<=i[1]+i[3]+o)return!0}return!1}function tx(e,t,n){return n.some(([r,i,o,s])=>r<=e&&e<=o&&i<=t&&t<=s)}function nx(e,t,n,r){return n.length===0?!1:tx(e,t,n)&&!ex(e,t,r)}const dg=4,pg=8,si=5,An="base-game rule";function Ut(e,t){return{code:e,message:t,severity:"warning"}}function Ns(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function rx(e,t=""){const n=e.filter(s=>!!s),r=t||"a player",i=[];n.length>dg&&i.push(Ut("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${dg} (${An}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const o=Ns(n);return o.length>0&&i.push(Ut("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${o.join(", ")}. Only one copy of each wonder exists (${An}), so one of the two readings is wrong.`)),i}function ix(e){const t=[],n=Object.entries(e).map(([i,o])=>[i,new Set(o.filter(s=>!!s))]),r=Object.values(e).reduce((i,o)=>i+o.filter(Boolean).length,0);r>pg&&t.push(Ut("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${pg} are in play (${An}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[o,s]=n[i];for(let a=i+1;a<n.length;a++){const[u,l]=n[a],c=[...s].filter(d=>l.has(d)).sort();c.length>0&&t.push(Ut("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${o} and ${u}): ${c.join(", ")} — the city split misread one of them.`))}}return t}function ox(e,t=null){const n=[],r=Object.values(e).flatMap(o=>o.filter(s=>!!s));r.length>si&&n.push(Ut("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${si} are in play (${An}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Ns(r);if(i.length>0&&n.push(Ut("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${An}).`)),t!==null){const o=t.filter(Boolean),s=r.length+o.length;s!==si&&n.push(Ut("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${s}, but exactly ${si} are in play (${An}) — one is missing or one was counted twice.`));const a=new Set(o),u=[...new Set(r.filter(l=>a.has(l)))].sort();u.length>0&&n.push(Ut("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function sx(e,t=""){const n=t||"a player",r=[],i=e.filter(s=>!s).length;i>0&&r.push(Ut("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const o=Ns(e.filter(s=>!!s));return o.length>0&&r.push(Ut("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${o.join(", ")}. Only one copy of each guild exists (${An}).`)),r}const ax=.25,ux=.45;function lx(e,t,n,r,i){const o=Math.cos(i),s=Math.sin(i),a=[n/2*o,n/2*s],u=[-r/2*s,r/2*o],c=[...[[e+a[0]+u[0],t+a[1]+u[1]],[e+a[0]-u[0],t+a[1]-u[1]],[e-a[0]-u[0],t-a[1]-u[1]],[e-a[0]+u[0],t-a[1]+u[1]]]].reverse();return[c[1],c[2],c[3],c[0]]}function zs(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function hg(e,t){const n=zs(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function cx(e,t,n){const r=zs(e,t),i=zs(e,n),o=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,o,!0))}finally{r.delete(),i.delete(),o.delete()}}function dx(e,t,n=ux){const r=[...t].sort((o,s)=>s.confidence-o.confidence),i=[];for(const o of r){let s=!1;for(const a of i){const u=cx(e,o.quad,a.quad);if(u<=0)continue;const l=hg(e,o.quad)+hg(e,a.quad)-u;if(u/Math.max(1e-6,l)>=n){s=!0;break}}s||i.push(o)}return i}function px(e,t,n,r,i=ax){const o=[];for(let s=0;s<n;s++){const a=t[4*n+s];if(a<i)continue;const l=lx(t[s],t[n+s],t[2*n+s],t[3*n+s],t[5*n+s]).map(c=>[(c[0]-r.padX)/r.scale,(c[1]-r.padY)/r.scale]);o.push({quad:l,confidence:a})}return dx(e,o)}const hx=128,fx=88;function mx(e,t,n,r=hx,i=fx){const o=new e.Mat(t.height,t.width,e.CV_8UC3),s=o.data,a=t.channels;for(let h=0,g=t.width*t.height;h<g;h++)s[h*3]=t.data[h*a],s[h*3+1]=t.data[h*a+1],s[h*3+2]=t.data[h*a+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(h=>[h[0],h[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),c=e.getPerspectiveTransform(u,l),d=new e.Mat;try{return e.warpPerspective(o,d,c,new e.Size(r,i)),{data:new Uint8Array(d.data),width:r,height:i,channels:3}}finally{o.delete(),u.delete(),l.delete(),c.delete(),d.delete()}}function gx(e,t){const n=(Math.trunc(t)%4+4)%4;return[0,1,2,3].map(r=>e[(r-n+4)%4])}const yx=[.05634,.11216,.16849,.22436,.28022,.33392,.39134,.44551,.50148,.55744,.61316,.66823,.72368,.77827,.83382,.88871,.94369],fg={g:.41754,d:.58658,pliure:.50148},wx=.25,_x=.25,bx=9;function $x(e,t){const n=[0,1,2].map(o=>[0,1,2].map(s=>e.reduce((a,u)=>a+u[o]*u[s],0))),r=[0,1,2].map(o=>e.reduce((s,a,u)=>s+a[o]*t[u],0));for(let o=0;o<3;o++){let s=o;for(let a=o+1;a<3;a++)Math.abs(n[a][o])>Math.abs(n[s][o])&&(s=a);if(Math.abs(n[s][o])<1e-300)return null;[n[o],n[s]]=[n[s],n[o]],[r[o],r[s]]=[r[s],r[o]];for(let a=o+1;a<3;a++){const u=n[a][o]/n[o][o];for(let l=o;l<3;l++)n[a][l]=n[a][l]-u*n[o][l];r[a]=r[a]-u*r[o]}}const i=[0,0,0];for(let o=2;o>=0;o--){let s=r[o];for(let a=o+1;a<3;a++)s-=n[o][a]*i[a];i[o]=s/n[o][o]}return i}function xx(e,t,n,r){try{const i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1]));if(!(i>0))return null;const o=(n[0]-t[0])/i,s=(n[1]-t[1])/i,a=(y,w)=>((y-t[0])*o+(w-t[1])*s)/i,u=new Map,l=[["g","laurier2",-1.5],["d","laurier2",1.5],["pliure","pliure",0]];for(const[y,w,b]of l){let x=null;for(const[T,S,E]of r[w]??[]){const I=a(T,S);E>=wx&&Math.abs(I-(b+9)/18)<=1/18&&(x===null||E>x[0]||E===x[0]&&I>x[1])&&(x=[E,I])}x!==null&&u.set(y,x[1])}const c=[...u.keys()];let d=null;for(;c.length>0;){const y=[0,1,...c.map(v=>fg[v])],w=[0,1,...c.map(v=>u.get(v))],b=$x(y.map((v,R)=>[v,1,-v*w[R]]),w);if(b===null){d=null;break}const[x,T,S]=b,E=v=>(x*v+T)/(S*v+1);d=E;let I=c[0],C=-1;for(const v of c){const R=Math.abs(E(fg[v])-u.get(v))*18;R>C&&(I=v,C=R)}if(C<=_x||c.length===1)break;c.splice(c.indexOf(I),1),d=null}const h=[0,...yx.map((y,w)=>d!==null?d(y):(w-8+9)/18),1],g=a(e[0],e[1]);let f=0;for(let y=1;y<h.length;y++)Math.abs(h[y]-g)<Math.abs(h[f]-g)&&(f=y);return f-bx}catch{return null}}const vx=320,Sx=2,Ex=.25,Tx=50,mg=[.5,2];function Mx(e,t){if(e.length!==4||t.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;const n=u=>{let l=0;for(let c=0;c<4;c++){const[d,h]=u[c],[g,f]=u[(c+1)%4];l+=d*f-g*h}return Math.abs(l/2)},r=n(t),i=n(e)/r;if(!(r>0&&i>=mg[0]&&i<=mg[1]))return!1;const o=e.map((u,l)=>{const c=e[(l+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),s=Math.min(...o);if(s<1)return!1;const a=Math.max(...o)/s;return a>=Tm&&a<=Mm}function Ix(e,t){const n=vx,r=ut(n*t.height/t.width),i=dt(e,t),o=new e.Mat,s=new e.Mat,a=new e.Mat;try{e.cvtColor(i,o,e.COLOR_RGB2GRAY),e.resize(o,s,new e.Size(n,r),0,0,e.INTER_AREA),s.convertTo(a,e.CV_32F)}finally{i.delete(),o.delete(),s.delete()}return{mat:a,w:n,h:r}}function Cx(e,t,n,r,i,o){const s=i-n,a=o-r,u=new e.Mat(a,s,e.CV_8UC3),l=u.data,c=t.channels;for(let h=0;h<a;h++){let g=((r+h)*t.width+n)*c,f=h*s*3;for(let y=0;y<s;y++,g+=c,f+=3)l[f]=t.data[g],l[f+1]=t.data[g+1],l[f+2]=t.data[g+2]}const d=new e.Mat;return e.cvtColor(u,d,e.COLOR_RGB2GRAY),u.delete(),d}function gg(e,t){const n=[];for(let r=0;r<3;r++)for(let i=0;i<3;i++)n.push(e[r*3]*t[i]+e[r*3+1]*t[3+i]+e[r*3+2]*t[6+i]);return n}function kx(e,t,n){let r=e[6]*t+e[7]*n+e[8];return Math.abs(r)<=11920928955078125e-23?[0,0]:(r=1/r,[Math.fround((e[0]*t+e[1]*n+e[2])*r),Math.fround((e[3]*t+e[4]*n+e[5])*r)])}function Ax(e,t,n,r){const{w:i,h:o}=r,s=n.map(([y,w])=>[Math.fround(y),Math.fround(w)]);let a=Math.floor(Math.min(...s.map(y=>y[0]))),u=Math.floor(Math.min(...s.map(y=>y[1]))),l=Math.ceil(Math.max(...s.map(y=>y[0]))),c=Math.ceil(Math.max(...s.map(y=>y[1])));const d=Math.trunc(.1*Math.max(l-a,c-u));if(a=Math.max(0,a-d),u=Math.max(0,u-d),l=Math.min(t.width,l+d),c=Math.min(t.height,c+d),l-a<2||c-u<2)return null;const h=Math.min(1,2*i/Math.max(1,l-a)),g=[],f=y=>(g.push(y),y);try{const y=f(e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o])),w=f(e.matFromArray(4,1,e.CV_32FC2,s.flatMap(U=>[U[0],U[1]]))),b=[...f(e.getPerspectiveTransform(y,w)).data64F];let x=f(Cx(e,t,a,u,l,c));if(h<1){const U=f(new e.Mat);e.resize(x,U,new e.Size(0,0),h,h,e.INTER_AREA),x=U}const T=[h,0,-h*a,0,h,-h*u,0,0,1],S=f(e.matFromArray(3,3,e.CV_64F,gg(T,b))),E=f(new e.Mat);e.warpPerspective(x,E,S,new e.Size(i,o),e.INTER_LINEAR|e.WARP_INVERSE_MAP);const I=f(new e.Mat);E.convertTo(I,e.CV_32F);const C=f(e.Mat.eye(3,3,e.CV_32F)),v=new e.TermCriteria(e.TermCriteria_COUNT+e.TermCriteria_EPS,Tx,1e-6);let R;try{R=e.findTransformECC(r.mat,I,C,e.MOTION_HOMOGRAPHY,v,f(new e.Mat),5)}catch{return null}const z=gg(b,[...C.data32F]);return{quad:[[0,0],[i,0],[i,o],[0,o]].map(([U,G])=>kx(z,U,G)),cc:R}}finally{for(const y of g)try{y.delete()}catch{}}}function Rx(e,t,n,r){let i=null;try{return i=Ix(e,n),Ox(e,t,i,r)}catch{return null}finally{i==null||i.mat.delete()}}function Ox(e,t,n,r){try{if(r.length!==4)return null;const i=r.map(([u,l])=>[Math.fround(u),Math.fround(l)]),o=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(!(o>0))return null;let s=i,a=!1;for(let u=0;u<Sx;u++){const l=Ax(e,t,s,n);if(l===null)break;const c=l.quad,d=Math.max(...c.map(([h,g],f)=>Math.hypot(h-i[f][0],g-i[f][1])));if(!Mx(c,i)||d/o>Ex||l.cc<Rm)break;s=c,a=!0}return a?s:null}catch{return null}}const Nx=.8;function zx(e){const{data:t,channels:n}=e,r=e.width*e.height;if(r===0||t.length<r*n)return null;let i=0,o=0,s=0;for(let a=0;a<r*n;a+=n)i+=t[a],o+=t[a+1],s+=t[a+2];return i/=r,o/=r,s/=r,{rapport:o/Math.max(1,Math.min(i,s)),r:i,g:o,b:s}}function Bx(e){const t=zx(e);return t===null||t.rapport>=Nx?null:`éclairage coloré détecté (vert ${t.g.toFixed(0)} contre rouge ${t.r.toFixed(0)} et bleu ${t.b.toFixed(0)}) : sous une lumière LED colorée, les lauriers, les bannières et les merveilles ne sont plus reconnus correctement — les comptes ET les couleurs des cartes peuvent être faux. Reprends la photo en lumière blanche.`}const Px=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],Dx=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],Ux=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],Lx=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],Fx=[...Dx,...Ux,...Lx,...Px];Object.fromEntries(Fx.map(e=>[e.id,e]));const Gx=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const yg=.2,Wx=.3,Bs={total:0,idDiff:0,verdictDiff:0},Lt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},ai={total:0,memeK:0,memeKInverse:0,detail:[]},qx=!0;function Vx(e,t,n){for(const r of e){let i=!1;for(let o=0,s=r.length-1;o<r.length;s=o++){const a=r[o],u=r[s];a[1]>n!=u[1]>n&&t<(u[0]-a[0])*(n-a[1])/(u[1]-a[1])+a[0]&&(i=!i)}if(i)return r.map(o=>[o[0],o[1]])}return null}async function Hx(e,t,n,r,i=[0,1,2,3]){const[o,s,a,u]=t;if(a<=0||u<=0)return null;const l=Math.round(a*yg),c=Math.round(u*yg),d=Math.max(0,Math.round(o-l)),h=Math.max(0,Math.round(s-c)),g=Math.min(e.width,Math.round(o+a+l)),f=Math.min(e.height,Math.round(s+u+c)),y=g-d,w=f-h;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let E=0;E<w;E++){const I=((h+E)*e.width+d)*b;x.set(e.data.subarray(I,I+y*b),E*y*b)}const T={width:y,height:w,channels:b,data:x};let S=null;for(const E of i){const I=E===0?T:Xt(T,E),C=I.width,v=C-Math.floor(Wx*C),R=C-v;if(R<=0)continue;const z=new Uint8ClampedArray(R*I.height*I.channels);for(let W=0;W<I.height;W++){const K=(W*C+v)*I.channels;z.set(I.data.subarray(K,K+R*I.channels),W*R*I.channels)}const Y={width:R,height:I.height,channels:I.channels,data:z},U=Jr(Y),N=(await n.run({[n.inputNames[0]]:new Fe("float32",U,[1,3,_t,_t])}))[n.outputNames[0]].data[1]??0;r&&(r[E]=N),S=S===null?N:Math.max(S,N)}return S}async function jx(e,t,n,r,i,o,s=[],a){var w;const u=async b=>(await r.run({[r.inputNames[0]]:new Fe("float32",b,[1,3,Qt,Qt])}))[r.outputNames[0]].data,l=e.obbQuads===void 0?null:await rt("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(b){return console.warn("[wonders-obb] détection échouée, repli ORB :",b),null}});a!==void 0&&(a.n=l===null?0:l.length);const c=l===null?[]:l.map(b=>{const x=b.map(([I])=>I),T=b.map(([,I])=>I),S=Math.min(...x),E=Math.min(...T);return[Math.round(S),Math.round(E),Math.round(Math.max(...x)-S),Math.round(Math.max(...T)-E)]}),d=s.length===0?c:c.filter(([b,x,T,S])=>{const E=b+T/2,I=x+S/2;return!s.some(C=>{const v=C.x+C.width/2,R=C.y+C.height/2,z=.5*Math.min(C.width,C.height);return(E-v)**2+(I-R)**2<z*z})}),h=new Map;for(const b of d){const[x,T,S,E]=b;if(S<=0||E<=0)continue;const I=l===null?null:Vx(l,x+S/2,T+E/2);if(I===null||e.redresserQuad===void 0)continue;let C=I;const v=at("identify: redressement du quad",()=>e.redresserQuad(n,C)),R=jm(),{id:z,prob:Y,decalage:U}=await rt("classifieur merveille (1 lecture)",()=>Q1(v,u));if(z===""||Y<R)continue;U&&(C=gx(C,U).map(N=>[N[0],N[1]]));const G=h.get(z);(G===void 0||Y>G.prob)&&h.set(z,{prob:Y,box:b,quad:C})}const g=[],f=await e.tuckClassifier(),y=await e.tuckBoxClassifier();for(const[b,{prob:x,box:T,quad:S}]of h){const[E,I,C,v]=T;let R={x:Math.round(E),y:Math.round(I),width:Math.round(C),height:Math.round(v)},z=null,Y=[],U=null;if(S!==null){z=S;const O=z.map(X=>X[0]),P=z.map(X=>X[1]),B=Math.max(0,Math.round(Math.min(...O))),V=Math.max(0,Math.round(Math.min(...P)));if(R={x:B,y:V,width:Math.min(n.width,Math.round(Math.max(...O)))-B,height:Math.min(n.height,Math.round(Math.max(...P)))-V},f!==null)try{const X=await e.wonderRef(b),Q=z,ne=X===null||Q===null?null:at("identify: bande droite #63",()=>Es(t,n,X,Q));if(ne!==null){const ye=at("identify: preprocess tuck",()=>Jr(ne)),ve=await f.run({[f.inputNames[0]]:new Fe("float32",ye,[1,3,_t,_t])});if(U=Ts(ve[f.outputNames[0]].data).prob,e.merveilleEcc===!0&&X!==null&&Q!==null){const Te=at("identify: ECC recalage du quad",()=>Rx(t,n,X,Q));if(Te!==null){const Le=await rt("identify: ECC relecture WT",async()=>{const ge=Es(t,n,X,Te);if(ge===null)return null;const we=await f.run({[f.inputNames[0]]:new Fe("float32",Jr(ge),[1,3,_t,_t])});return Ts(we[f.outputNames[0]].data).prob});Le!==null&&(U=Le)}}Y=U>=kn?["R"]:[]}}catch{}}else if(Date.now()<i)try{const O=await rt("chargement refs merveilles",()=>e.wonderRef(b));if(O!==null){const P=at("ORB registration (merveille)",()=>Mb(t,n,O,T));if(P!==null){z=P.footprint,Y=P.overflow;const B=z.map(ne=>ne[0]),V=z.map(ne=>ne[1]),X=Math.max(0,Math.round(Math.min(...B))),Q=Math.max(0,Math.round(Math.min(...V)));if(R={x:X,y:Q,width:Math.min(n.width,Math.round(Math.max(...B)))-X,height:Math.min(n.height,Math.round(Math.max(...V)))-Q},f!==null)try{const ne=z,ye=ne===null?null:at("identify: bande droite #63",()=>Es(t,n,O,ne));if(ye!==null){const ve=at("identify: preprocess tuck",()=>Jr(ye)),Te=await f.run({[f.inputNames[0]]:new Fe("float32",ve,[1,3,_t,_t])});U=Ts(Te[f.outputNames[0]].data).prob}}catch{}}}}catch(O){console.warn(`[wonders-cls] ${b} registration failed:`,O)}const G=z!==null?Om(z,Y):null,N=S!==null&&z!==null?Om(z,["R"]):null,W=[];if(U!==null&&W.push(U>=kn?1:0),y!==null)try{let O=[0,1,2,3];if(S!==null){const V=S[1][1]-S[0][1],X=S[1][0]-S[0][0],Q=(Math.round(Math.atan2(V,X)*180/Math.PI/90)%4+4)%4;O=[(0+Q)%4,(2+Q)%4]}const P=[0,0,0,0],B=await rt("identify: sonde marges (#68)",()=>Hx(n,T,y,P,O));if(B!==null&&(W.push(B>=kn?1:0),S!==null)){const V=S[1][1]-S[0][1],X=S[1][0]-S[0][0],Q=(Math.round(Math.atan2(V,X)*180/Math.PI/90)%4+4)%4,ne=Math.max(P[(0+Q)%4],P[(2+Q)%4]);Lt.total+=1;const ye=B>=kn?1:0,ve=ne>=kn?1:0;ye===1&&(Lt.positifs4+=1),ve===1&&(Lt.positifs2+=1),ye!==ve&&(Lt.divergent+=1,Lt.detail.push(`${b.slice(0,12)}:v4=${ye}/v2=${ve} p=[${P.map(Te=>Te.toFixed(2)).join(",")}]kQ${Q}`))}}catch{}const K=N??G??R,Z=o.some(O=>{const P=O.box[0]+O.box[2]/2,B=O.box[1]+O.box[3]/2;return P>=K.x&&P<=K.x+K.width&&B>=K.y&&B<=K.y+K.height});W.push(Z?1:0);const me=Ab(U,W),L=G??(me&&N!==null?N:null),ee={id:b,name:((w=Gx[b])==null?void 0:w.name)??b,builtWithCardUnderneath:me,boundingBox:R,confidence:Math.round(x*1e4)/1e4,...L?{tuckRegion:L}:{}},A=L??R;g.push({obj:ee,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height},quad:z,region:L})}return g}const wg="pawn_ends_brut.onnx";function Kx(e,t,n){if(t===n)return e;const r=`${t}: `;return e.message.startsWith(r)?{...e,message:`${n}: ${e.message.slice(r.length)}`}:e}const it="/7wd-scorer/models/",Ps=[];let kt=null;function Yx(){Ps.length=0,kt=null}function Xx(e){const t=performance.now();kt!==null&&Ps.push({nom:kt.nom,ms:Math.round(t-kt.debut)}),kt={nom:e,debut:t}}function _g(){const e=[...Ps];kt!==null&&e.push({nom:`${kt.nom} (en cours)`,ms:Math.round(performance.now()-kt.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function bg(){const e={};for(const t of Object.keys(Qe))e[Qe[t].onnx]=li.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of pt)e[t]=n;return e}function Qx(){var e,t;return Ds(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:Pe.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let $g=!1;const ui=new Map;function Ds(){var e;$g||(Pe.wasm.wasmPaths="/7wd-scorer/ort/",Pe.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,$g=!0)}const li=new Set;let Us=0;function xg(e){return Us+=1,e.finally(()=>{Us-=1})}function Zx(){return Us>0}function Jx(e){Ds();let t=ui.get(e);return t===void 0&&(t=xg(rt(`session: 1er chargement ${Qe[e].onnx}`,()=>Ir.create(`${it}${Qe[e].onnx}`,{executionProviders:li.has(e)?["wasm"]:["webgpu","wasm"]}))),ui.set(e,t),t.catch(()=>ui.delete(e))),t}const pt=new Map;let wr=0,_r=0;const ci=new Map;function Ls(e){const t=(kt==null?void 0:kt.nom)??"(hors etage)";ci.set(t,(ci.get(t)??0)+e)}function ev(){return[...ci.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let Fs=0;function tv(){return{ms:Math.round(wr),appels:_r,preparationMs:Math.round(Fs)}}function nv(){wr=0,_r=0,Fs=0,Kw(),ci.clear(),Pv()}const vg=new Set(["coin_yolo.onnx","token_yolo.onnx"]),Gs=new Set;let Ws=null;async function rv(e){if(Ws)return await Ws.catch(()=>{}),e();const t=e();return Ws=t.catch(()=>{}),t}async function qs(e,t){return rv(()=>Ir.create(`${it}${e}`,{executionProviders:t?["webgpu"]:["wasm"]}))}async function gt(e){return xg(rt(`session: 1er chargement ${e}`,()=>iv(e)))}async function iv(e){Ds();const t=!vg.has(e)&&!Gs.has(e);let n=null;if(t)try{n=await qs(e,!0),pt.set(e,"webgpu")}catch(s){Gs.add(e),pt.set(e,`wasm (webgpu refuse a la creation: ${String(s).slice(0,60)})`)}else pt.set(e,vg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await qs(e,!1)}catch(s){return pt.set(e,`ECHEC wasm: ${String(s).slice(0,160)}`),null}let r=n,i=pt.get(e)==="webgpu";const o=async(s,...a)=>{const u=performance.now();try{const l=await r.run(s,...a),c=performance.now()-u;return wr+=c,Ls(c),_r+=1,l}catch(l){if(!i)throw l;Gs.add(e),pt.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await qs(e,!1);const c=await r.run(s,...a),d=performance.now()-u;return wr+=d,Ls(d),_r+=1,c}};return new Proxy(r,{get(s,a,u){if(a==="run")return o;const l=Reflect.get(r,a,u);return typeof l=="function"?l.bind(r):l}})}let Vs=null,Hs=null;const ov=.65,sv=3e4;let js=null;function Ks(){return js===null&&(js=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),js}const Sg=new Map;function Ys(e){let t=Sg.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${it}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),o=new OffscreenCanvas(r.width,r.height).getContext("2d");o.drawImage(r,0,0);const s=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),Sg.set(e,t)),t}function av(e){return Ys(`wonder-refs/${e}.jpg`)}const Eg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function uv(){const e=new Map;for(const t of Eg){const n=await Ys(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function lv(){const e=new Map;for(const t of Eg){const n=await Ys(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}function Tg(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const o=(d,h)=>i===1?[h,r-1-d]:i===2?[n-1-d,r-1-h]:[n-1-h,d],s=[o(e.x,e.y),o(e.x+e.width,e.y+e.height)],a=s.map(d=>d[0]),u=s.map(d=>d[1]),l=Math.min(...a),c=Math.min(...u);return{x:l,y:c,width:Math.max(...a)-l,height:Math.max(...u)-c}}function cv(){return Hs===null&&(Hs=fetch(`${it}laurel_gallery.json`).then(async e=>e.ok?ib(await e.json()):[]).catch(()=>[])),Hs}function dv(e,t,n,r){return at("crop",()=>pv(e,t,n,r))}function pv(e,t,n,r){return Jt(e,t-r,n-r,2*r,2*r)}function Jt(e,t,n,r,i){return at("crop",()=>hv(e,t,n,r,i))}function hv(e,t,n,r,i){const o=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),a=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,a-o),c=Math.max(0,u-s),d=new Uint8Array(l*c*3);for(let h=0;h<c;h++)for(let g=0;g<l;g++){const f=((h+s)*e.width+(g+o))*e.channels,y=(h*l+g)*3;d[y]=e.data[f],d[y+1]=e.data[f+1],d[y+2]=e.data[f+2]}return{width:l,height:c,channels:3,data:d}}function fv(){return Vs===null&&(Vs=fetch(`${it}token_templates.json`).then(async e=>e.ok?M1(await e.json()):new Map).catch(()=>new Map)),Vs}let Xs=null;function Qs(){return Xs===null&&(Xs=(async()=>{try{const e=await fetch(`${it}token_classifier_classes.json`);if(!e.ok)return null;const t=B1(await e.json()),n=await gt("token_classifier.onnx");return n===null?null:{session:n,fiche:t}}catch{return null}})()),Xs}let Zs=null;function Js(){return Zs===null&&(Zs=(async()=>{try{return(await fetch(`${it}guild_classifier.onnx`,{method:"HEAD"})).ok?await gt("guild_classifier.onnx"):null}catch{return null}})()),Zs}let ea=null;function ta(){return ea===null&&(ea=(async()=>{try{return(await fetch(`${it}laurel_digit.onnx`,{method:"HEAD"})).ok?await gt("laurel_digit.onnx"):null}catch{return null}})()),ea}let na=null,ra=null;function ia(){return ra===null&&(ra=(async()=>{try{return(await fetch(`${it}banner_class.onnx`,{method:"HEAD"})).ok?await gt("banner_class.onnx"):null}catch{return null}})()),ra}const mv=.7;function gv(e,t){const[n,r,i,o]=e,[s,a,u,l]=t;if(i<=0||o<=0||u<=0||l<=0)return!1;const c=Math.max(0,Math.min(n+i,s+u)-Math.max(n,s)),d=Math.max(0,Math.min(r+o,a+l)-Math.max(r,a));return c*d>=mv*Math.max(1,Math.min(i*o,u*l))}async function Mg(e,t,n){if(t.length===0)return t;const r=await ia();if(r===null)return t;const i=[];for(const o of t)try{const s=u2(o.box,e.width,e.height);if(s===null){i.push(o);continue}const a=Jt(e,s.x,s.y,s.w,s.h),u=l2(a),l=await r.run({[r.inputNames[0]]:new Fe("float32",u,[1,3,cn,cn])}),c=c2(l[r.outputNames[0]].data);if(c.rejected)n==null||n.push({box:o.box,className:c.className});else{const d=o;if(d.color===null||d.color===void 0){const h=c.bestColour;i.push({...d,color:h,family:wm[h]})}else i.push(d2(d,c))}}catch{i.push(o)}return i}function oa(){return na===null&&(na=(async()=>{try{return(await fetch(`${it}laurel_filter.onnx`,{method:"HEAD"})).ok?await gt("laurel_filter.onnx"):null}catch{return null}})()),na}async function yv(e,t,n){let[r,i,o,s]=t,a=o-r,u=s-i;if(a<=0||u<=0)return null;if(a<Vn){const w=Math.floor((r+o)/2);r=w-Math.floor(Vn/2),o=w+Math.floor(Vn/2),a=o-r}if(u<Vn){const w=Math.floor((i+s)/2);i=w-Math.floor(Vn/2),s=w+Math.floor(Vn/2),u=s-i}const l=Math.trunc(Xm*a),c=Math.trunc(Xm*u),d=Math.max(0,r-l),h=Math.max(0,i-c),g=Math.min(e.width,o+l),f=Math.min(e.height,s+c),y=Jt(e,d,h,g-d,f-h);if(y.width<=0||y.height<=0)return null;try{const w=o2(y),b=await n.run({[n.inputNames[0]]:new Fe("float32",w,[1,3,ln,ln])});return s2(b[n.outputNames[0]].data)}catch{return null}}let sa=null;function aa(){return sa===null&&(sa=(async()=>{try{return(await fetch(`${it}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await gt("coin_filter_cnn.onnx"):null}catch{return null}})()),sa}let ua=null;function la(){return ua===null&&(ua=(async()=>{try{return(await fetch(`${it}coin_denom.onnx`,{method:"HEAD"})).ok?await gt("coin_denom.onnx"):null}catch{return null}})()),ua}async function wv(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=og(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*bt*bt);r.forEach((u,l)=>i.set(u,l*u.length));const s=(await n.run({[n.inputNames[0]]:new Fe("float32",i,[t.length,3,bt,bt])}))[n.outputNames[0]].data,a=ii.length;return t.map((u,l)=>i$(s.subarray(l*a,l*a+a)))}catch{return null}}async function _v(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let g=0;g<t.length;g++){const f=og(e,Math.round(t[g].cx),Math.round(t[g].cy),Math.round(u[g]));if(f===null)return null;l.push(f)}const c=new Float32Array(t.length*3*bt*bt);l.forEach((g,f)=>c.set(g,f*g.length));const h=(await n.run({[n.inputNames[0]]:new Fe("float32",c,[t.length,3,bt,bt])}))[n.outputNames[0]].data;return t.map((g,f)=>n$(h.subarray(f*2,f*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const o=t.map(u=>u.r).sort((u,l)=>u-l),s=o.length%2===1?o[(o.length-1)/2]:(o[o.length/2-1]+o[o.length/2])/2,a=Math.trunc(s);if(a>=8){const u=await r(t.map(()=>a));if(u!==null)return i.map((l,c)=>Math.max(l,u[c]))}return i}catch{return null}}let ca=null;function da(){return ca===null&&(ca=(async()=>{try{return(await fetch(`${it}tuck_classifier.onnx`,{method:"HEAD"})).ok?await gt("tuck_classifier.onnx"):null}catch{return null}})()),ca}const Ig=.1;let pa=null;function di(){return pa===null&&(pa=(async()=>{try{return(await fetch(`${it}track_band_brut.onnx`,{method:"HEAD"})).ok?await gt("track_band_brut.onnx"):null}catch{return null}})()),pa}async function Cg(e,t,n){try{const r=Qr(t,1280,i_(t.width,t.height,n)),o=(await e.run({[e.inputNames[0]]:new Fe("float32",r.tensor,[1,3,1280,1280])}))[e.outputNames[0]];return ym(o.data,o.dims[1]??0,o.dims[2]??0,r.params,Ig)}catch{return[]}}let ha=null;const bv=.4;function $v(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function xv(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const o=i.tuckRegion;o&&r.push(o)}return n.length===0&&r.length===0?e:e.filter(i=>{const o=i.boundingBox;if(!o)return!0;const s=o.x+o.width/2,a=o.y+o.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&a>=u.y&&a<=u.y+u.height||$v(o,u)>=bv)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&a>=u.y&&a<=u.y+u.height)return!1;return!0})}function fa(){return ha===null&&(ha=(async()=>{try{return(await fetch(`${it}tuck_box.onnx`,{method:"HEAD"})).ok?await gt("tuck_box.onnx"):null}catch{return null}})()),ha}let ma=null;function ga(){return ma===null&&(ma=(async()=>{try{return(await fetch(`${it}wonder_classifier.onnx`,{method:"HEAD"})).ok?(await vv(),await gt("wonder_classifier.onnx")):null}catch{return null}})()),ma}let kg=!1;async function vv(){if(kg)return;const e=await(await fetch(`${it}wonder_classifier_seuil.json`)).json();q1(Number(e.seuil)),V1(e.classes),kg=!0}let Ag=null,Rg=null;async function Sv(e){var d;Ag??(Ag=gt("wonder_obb.onnx"));const t=await Ag;if(t===null)return null;const n=await Ks();if(n===null)return null;Rg=n;const{tensor:r,params:i}=Qr(e,1024),s=(await t.run({[t.inputNames[0]]:new Fe("float32",r,[1,3,1024,1024])}))[t.outputNames[0]],a=s.dims[s.dims.length-1],u=s.data;let l=0;for(let h=0;h<a;h++){const g=u[4*a+h];g>l&&(l=g)}const c=px(n,u,a,i);return pt.set("wonder_obb.onnx",`${pt.get("wonder_obb.onnx")??"?"} | dims=${s.dims} scoreMax=${l.toFixed(4)} dets=${c.length} q0=${(d=c[0])!=null&&d.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${i.scale.toFixed(4)} pad=${i.padX},${i.padY}`),c.map(h=>h.quad.map(g=>[g[0],g[1]]))}const Ev={wonderRef:av,tuckClassifier:da,tuckBoxClassifier:fa,obbQuads:Sv,redresserQuad:(e,t)=>mx(Rg,e,t),merveilleEcc:qx};async function Og(e,t){const n=await Qs();if(n!==null)try{const r=z1(e),i=new Fe("float32",r,[4,3,un,un]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:a,p:u}=P1(s,n.fiche);return a===null?["",-1]:[a,u]}catch{}return A1(e,t)}const Ng=new WeakMap;async function pi(e){const t=Ng.get(e);if(t!==void 0)return await t;const n=rt("decodage image",()=>Tv(e));return Ng.set(e,n),await n}async function Tv(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",o=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${o}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const zg=new WeakMap;async function At(e,t){let n=zg.get(t);n===void 0&&(n=new Map,zg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=Mv(e,t);return n.set(e,i),await i}async function Mv(e,t){const n=Qe[e],r=performance.now(),{tensor:i,params:o}=Qr(t,n.input);Fs+=performance.now()-r;const s=async()=>{const a=await Jx(e),u={[a.inputNames[0]]:new Fe("float32",i,[1,3,n.input,n.input])},l=performance.now(),c=await a.run(u),d=performance.now()-l;wr+=d,Ls(d),_r+=1;const h=c[a.outputNames[0]];return{rows:new Float32Array(h.data),params:o}};try{return await s()}catch(a){if(li.has(e))throw a;return li.add(e),ui.delete(e),await s()}}const Iv=6,Cv=4,kv=5,Av=2;async function Rv(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await pi(e),r=await At("banner",n),i=Zr(r.rows,r.params,Qe.banner.conf,Qe.banner.classes);if(t.banners=i.length,i.length>=Iv)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const o=await At("laurel",n),s=ws(o.rows,o.params,Qe.laurel.conf);if(t.laurels=s.length,s.length>=Cv)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const a=await At("coin",n),u=pm(a.rows,a.params,Qe.coin.conf);return t.coins=u.length,u.length>=kv?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Av?{...t,kind:"board",confidence:.4}:t}function Ov(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Bg(e,t,n,r,i,o,s,a){let u=0;const l=Bx(e);l!==null&&t.push({code:"POOR_IMAGE_QUALITY",message:`${i}: ${l}`}),r(`${i}: card banners…`,.04);const c=await At("banner",e),d=Zr(c.rows,c.params,Qe.banner.conf,Qe.banner.classes),h=[],g=await Mg(e,d,h),f=h.filter(re=>re.className==="objet_hors_jeu").map(re=>re.box);let y=$s(g).filter(re=>re.color!==null&&re.family!==null);r(`${i}: progress tokens…`,.08);let w=[];const b=await di();b!==null&&(w=await Cg(b,e,y)),w.length>0&&y.length>0&&(y=y.filter(re=>{const le=re.box[0]+re.box[2]/2,j=re.box[1]+re.box[3]/2;return!w.some(([ae,he,be,ue])=>Math.min(ae,be)<=le&&le<=Math.max(ae,be)&&Math.min(he,ue)<=j&&j<=Math.max(he,ue))}));const x=await At("token",e),T=await fv(),S=[],E=[];for(const re of hm(fm(x.rows,x.params,Qe.token.conf))){if(E.push({cx:re.cx,cy:re.cy,r:re.r}),w.some(([ae,he,be,ue])=>re.cx>=ae&&re.cx<=be&&re.cy>=he&&re.cy<=ue))continue;const[le,j]=await Og(xs(e,re),T);le===""&&j<0?E.pop():le===""?u+=1:!S.some(ae=>ae.id===le)&&!a.some(ae=>ae.id===le)&&S.push({id:le,center:[re.cx,re.cy],radius:re.r,confidence:Math.round(j*1e4)/1e4})}r(`${i}: coins…`,.14);const I=await At("coin",e),C=pm(I.rows,I.params,Qe.coin.conf).filter(re=>!E.some(le=>(re.cx-le.cx)**2+(re.cy-le.cy)**2<=re.r*re.r)),v=await aa(),R=v!==null?await _v(e,C,v):null,z=(R!==null?C.filter((re,le)=>R[le]>=ig).map(re=>re.r):[]).sort((re,le)=>re-le),Y=z.length>0?z.length%2===1?z[(z.length-1)/2]:(z[z.length/2-1]+z[z.length/2])/2:null,[U,G]=t$,N=C.map((re,le)=>{const j=R!==null?R[le]:null;return j===null||j>=ig?"keep":Y!==null&&Y>0&&re.r/Y>=U&&re.r/Y<=G?"suspect":"drop"}),W=C.filter((re,le)=>N[le]==="keep"),K=W_(e,W),Z=await la(),me=Z!==null?await wv(e,W,Z):null,L=o$(K,me??K.map(()=>null));L.map(re=>re.value);const ee=[];let A=0;if(C.forEach((re,le)=>{if(N[le]==="drop")return;if(N[le]==="suspect"){const ae=R[le];ee.push({denomination:null,center:[re.cx,re.cy],radius:re.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${ae.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const j=L[A++];ee.push({denomination:j.value,center:[re.cx,re.cy],radius:re.r,denomSource:j.source??"colour"})}),C.length>0&&ee.length===0&&t.push({code:"LOW_CONFIDENCE",message:`${n}: ${C.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ee.length>=2){const re=ee.map(j=>j.radius).sort((j,ae)=>j-ae),le=re.length%2===1?re[(re.length-1)/2]:(re[re.length/2-1]+re[re.length/2])/2;if(le>0)for(const j of ee)j.radius/le>2&&(j.suspect=!0,j.suspectReason=`radius ${j.radius}px is ${(j.radius/le).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(ee.length>=2)for(let re=0;re<ee.length;re+=1)for(let le=re+1;le<ee.length;le+=1){const j=ee[re],ae=ee[le],he=Math.hypot(j.center[0]-ae.center[0],j.center[1]-ae.center[1]);if(he<1.1*Math.min(j.radius,ae.radius))for(const be of[j,ae])be.suspect||(be.suspect=!0,be.suspectReason=`almost concentric with another coin (${he.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const O=[],P=[],B=[],V=Date.now()+sv;let X=null;const Q=[];let ne=!1;const ye={n:0},ve=await ga();if(ve!==null&&(X=await rt("opencv.js (chargement)",()=>Ks()),X!==null)){r(`${i}: identifying wonders…`,.35);const re=await rt("identifyWondersByClassifier",()=>jx(Ev,X,e,ve,V,y,[],ye));for(const le of re)O.some(j=>j.id===le.obj.id)||s.some(j=>j.id===le.obj.id)||(O.push(le.obj),Q.push({obj:le.obj,edgeScores:le.edgeScores,zone:le.zone}),P.push(le.zone),B.push({quad:le.quad,region:le.region}));ne=re.length>0}if(!ne){const re=kb(Q.map(le=>({built:le.obj.builtWithCardUnderneath,edgeScores:le.edgeScores,zone:le.zone})),y.map(le=>[le.box[0]+le.box[2]/2,le.box[1]+le.box[3]/2]));for(const le of re){const j=Q[le];j.obj.builtWithCardUnderneath=!1,t.push({code:"INCONSISTENT_STATE",message:`${n}: wonder '${j.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(y.length>0){const le=new Set(re);for(let j=0;j<Q.length;j++){const ae=Q[j];if(le.has(j)||!ae.obj.builtWithCardUnderneath)continue;const he=ae.obj.tuckRegion;if(he===void 0)continue;if(!y.some(ue=>{const de=ue.box[0]+ue.box[2]/2,ie=ue.box[1]+ue.box[3]/2;return de>=he.x&&de<=he.x+he.width&&ie>=he.y&&ie<=he.y+he.height})){const ue=ae.obj;ue.builtWithCardUnderneath=!1,ue.suspect=!0,ue.suspectReason="built-unconfirmed"}}}}let Te=[];const Le=async()=>{let re=O.slice();const le=[];y.forEach((ue,de)=>{const ie=ue.box[0]+ue.box[2]/2,se=ue.box[1]+ue.box[3]/2;P.some(Be=>ie>=Be.x0&&ie<=Be.x1&&se>=Be.y0&&se<=Be.y1)||le.push(de)});const j=[],ae=[];re.forEach((ue,de)=>{const ie=ue.boundingBox;ie&&ie.width>0&&(j.push(de),ae.push([ie.x,ie.y,ie.width,ie.height]))});const he=ue=>{const de=[];return ue.forEach((ie,se)=>{const Be=ie.box[0]+ie.box[2]/2,Ge=ie.box[1]+ie.box[3]/2;P.some(Me=>Be>=Me.x0&&Be<=Me.x1&&Ge>=Me.y0&&Ge<=Me.y1)||de.push(se)}),de};let be=ug(y.map(ue=>ue.box),le,ae,w,[e.width,e.height]);try{const ue=P$(e.width,e.height,y.map(de=>de.box),be.hulls.map(([de,ie],se)=>({owner:de,poly:ie,n:be.hullBoxCounts[se]??0})),ae);if(Te=ue.map(de=>({crop:de,detections:null})),ue.length>0){const de=Os(y.map(se=>se.box)),ie=[];for(const[se,Be]of ue.entries()){const[Ge,Me,Se,Ke]=Be,ot=Jt(e,Ge,Me,Se-Ge,Ke-Me);if(ot.width<=0||ot.height<=0)continue;const Ze=await At("banner",ot);Te[se]={crop:Be,detections:k2(om(Ze.rows,Ze.params,Cs,Qe.banner.classes),Be)};for(const We of Zr(Ze.rows,Ze.params,Qe.banner.conf,Qe.banner.classes,S_)){const He=D$(We.box,Be,de);He&&ie.push({...We,box:He})}}if(ie.length>0){const se=Se=>Se.color!==null&&f.some(Ke=>gv(Se.box,Ke)),Be=new Map((await Mg(e,ie.filter(Se=>!se(Se)))).map(Se=>[Se.box.slice(0,4).join(","),Se])),Ge=ie.map(Se=>se(Se)?Se:Be.get(Se.box.slice(0,4).join(","))).filter(Se=>Se!==void 0&&Se.color!==null&&Se.family!==null),Me=$s([...y,...Ge]);if(Me.length>y.length){const Se=ug(Me.map(Ke=>Ke.box),he(Me),ae,w,[e.width,e.height]);y=Me,be=Se}}}try{if(ue.length>0){const de=[];for(const ie of ue){const[se,Be,Ge,Me]=ie,Se=Jt(e,se,Be,Ge-se,Me-Be);if(Se.width<=0||Se.height<=0)continue;const Ke=await At("token",Se),ot=[];for(const Ze of hm(fm(Ke.rows,Ke.params,Qe.token.conf))){const[We,He]=await Og(xs(Se,Ze),T);We===""&&He<0||ot.push({cx:Ze.cx,cy:Ze.cy,r:Ze.r,id:We,confidence:He})}de.push({crop:ie,jetons:ot})}for(const ie of F$(de,E))E.push({cx:ie.cx,cy:ie.cy,r:ie.r}),!w.some(([se,Be,Ge,Me])=>ie.cx>=se&&ie.cx<=Ge&&ie.cy>=Be&&ie.cy<=Me)&&(ie.id===""?u+=1:!S.some(se=>se.id===ie.id)&&!a.some(se=>se.id===ie.id)&&S.push({id:ie.id,center:[ie.cx,ie.cy],radius:ie.r,confidence:Math.round(ie.confidence*1e4)/1e4}))}}catch(de){console.warn("[T1 jetons des cités] skipped:",de)}}catch(ue){console.warn("[#129 city-rescan] skipped:",ue)}return o!==void 0&&(o.hulls=be.hulls.map(([ue,de],ie)=>({owner:ue,poly:de,n:be.hullBoxCounts[ie]??0})),o.bandBoxes=w,o.image=e),{split:be,photoWonders:re,splitWonderIdx:j}};let ge=null;try{ge=await Le()}catch(re){console.warn("[city-split] failed (side unfiltered):",re)}ge!==null&&ge.split.bannerOwner.length!==y.length&&(console.warn("[city-split] partage désaligné sur les bannières : côté non filtré"),ge=null);const we=E2(y,ge!==null?ge.split.bannerOwner:y.map(()=>"player"));we.retirees.size>0&&(y=we.gardees,ge!==null&&(ge={...ge,split:{...ge.split,bannerOwner:we.proprietaires}}));const Xe=O2(y,ge!==null?ge.split.bannerOwner:y.map(()=>"player"),Te);Xe.retirees.size>0&&(y=Xe.gardees,ge!==null&&(ge={...ge,split:{...ge.split,bannerOwner:Xe.proprietaires}}));const yt=H2(y,ge!==null?ge.split.bannerOwner:y.map(()=>"player"));return yt.paires.length>0&&console.debug(`[B19 arbitre BC13] ${i} :
  ${j2(y,yt.paires).join(`
  `)}`),yt.retirees.size>0&&(y=yt.gardees,ge!==null&&(ge={...ge,split:{...ge.split,bannerOwner:yt.proprietaires}})),{bannerDetections:y,photoCoins:ee,photoTokenDiscs:E,discs:C,bandBoxes:w,bandSession:b,wonderFootprints:P,wonderTuckGates:B,photoTokensList:S,geo:ge,cv:X,regDeadline:V,unidentifiedTokens:u}}async function Pg(e,t,n,r,i,o,s,a,u,l){let c=e.bannerDetections,d=e.cv;const{photoCoins:h,photoTokenDiscs:g,discs:f,bandBoxes:y,bandSession:w,wonderFootprints:b,wonderTuckGates:x,photoTokensList:T,geo:S,regDeadline:E}=e,I={},C=[],v=[];let R=0;const z=[];let Y=0,U=0;const G=[],N=[],W=[],K=t==="opponent";let Z=(j,ae)=>!K,me=(j,ae)=>!K,L=null;if(S!==null)try{const{split:j,photoWonders:ae,splitWonderIdx:he}=S;Z=(ie,se)=>j.pointOwner(ie,se)==="opponent"===K;const be=K?"opponent":"player";if(me=(ie,se)=>j.pointOwner(ie,se)===be,n){const ie=j;L=se=>new Set(S$(se,ie,be,y))}c=c.filter((ie,se)=>j.bannerOwner[se]==="opponent"===K);const ue=ae.map(()=>"player");he.forEach((ie,se)=>{ue[ie]=j.wonderOwner[se]});const de=[];ae.forEach((ie,se)=>{ue[se]==="opponent"===K&&de.push(ie)});for(const ie of de)N.push(ie);b.length=0;for(const ie of de){const se=ie.tuckRegion??ie.boundingBox;se&&b.push({x0:se.x,y0:se.y,x1:se.x+se.width,y1:se.y+se.height})}for(const ie of T)j.nearestOwner(ie.center[0],ie.center[1])==="opponent"===K&&W.push(ie)}catch(j){console.warn("[city-split] failed (side unfiltered):",j)}const ee=L!==null?L(h):null;for(const j of h)(ee!==null?!ee.has(j):!me(j.center[0],j.center[1]))||(R+=j.denomination??0,v.push(j));const A=new Set,O=[],P=Os(c.map(j=>j.box));x.forEach((j,ae)=>{if(j.quad===null||j.region===null){const de=b[ae];de&&O.push(de);return}const he=j.region,be=[];c.forEach((de,ie)=>{const se=de.box[0]+de.box[2]/2,Be=de.box[1]+de.box[3]/2;se>=he.x&&se<=he.x+he.width&&Be>=he.y&&Be<=he.y+he.height&&be.push([ie,de.box])});const ue=e$(j.quad,be,P);ue!==null&&A.add(ue)});let B=[],V=0;c.forEach((j,ae)=>{if(A.has(ae)){U+=1,V+=1;return}const he=j.box[0]+j.box[2]/2,be=j.box[1]+j.box[3]/2;if(O.some(ue=>he>=ue.x0&&he<=ue.x1&&be>=ue.y0&&be<=ue.y1)){U+=1,V+=1;return}B.push(j)});const X=_2(B,V,y,o.width,o.height);B=X.kept;for(const j of B)I[j.family]=(I[j.family]??0)+1,Y+=1;const Q=M_(B),ne=new Set(Q.map(j=>j.box.join(",")));for(const j of C_(B))ne.has(j.box.join(","))||(Q.push(j),ne.add(j.box.join(",")));for(const j of X.suspects)ne.has(j.box.join(","))||(Q.push(j),ne.add(j.box.join(",")));for(const j of Q)G.push(j);if(B.some(j=>j.family==="guild")){const j=await Js();if(j!==null){a(`${u}: identifying guilds…`,.75);for(const ae of B)if(ae.family==="guild")try{const[he,be,ue,de]=ae.box,ie=Jt(o,he,be,ue,de),se=L1(ie),Be={[j.inputNames[0]]:new Fe("float32",se,[1,3,qn,qn])},Me=(await j.run(Be))[j.outputNames[0]].data,{id:Se,prob:Ke}=F1(Me);Se!==""&&!z.some(ot=>ot.id===Se)&&!l.some(ot=>ot.id===Se)&&z.push({id:Se,boundingBox:{x:he,y:be,width:ue,height:de},confidence:Math.round(Ke*1e4)/1e4})}catch(he){console.warn("[guild-cls] failed:",he)}}else if(Date.now()<E)try{const ae=d??await Ks();if(ae!==null){const he=await uv();if(he.size>0){a(`${u}: identifying guilds…`,.75);const be=await lv();for(const ue of y1(ae,o,he,E,be))!z.some(de=>de.id===ue.id)&&!l.some(de=>de.id===ue.id)&&z.push(ue)}}}catch(ae){console.warn("[guilds-reg] failed:",ae)}}a(`${u}: laurels…`,.8);const ve=await rt("laurier: chargement galerie gabarits",()=>cv()),Te=[];for(const j of[0]){const ae=j===0?o:Xt(o,j),he=await rt("laurier: passe PLEINE photo",()=>At("laurel",ae));for(const[be,ue,de,ie]of at("laurier: decodage YOLO (JS)",()=>ws(he.rows,he.params,Qe.laurel.conf))){const se=Tg({x:be,y:ue,width:de-be,height:ie-ue},j,o.width,o.height);Te.push([se.x,se.y,se.x+se.width,se.y+se.height])}}const Le=[{boxes:at("laurier: dedup",()=>mm(Te)),offset:[0,0]}],ge=[o],we=[];try{const j=Q$(c.map(ae=>ae.box),[o.width,o.height]);pt.set("_tta.onnx",`total=${Bs.total} idDiff=${Bs.idDiff} verdictDiff=${Bs.verdictDiff}`),pt.set("_marge2.onnx",`total=${Lt.total} pos4=${Lt.positifs4} pos2=${Lt.positifs2} divergent=${Lt.divergent} `+Lt.detail.slice(0,10).join(" | ")),pt.set("_ttaObb.onnx",`total=${ai.total} memeK=${ai.memeK} inv=${ai.memeKInverse} `+ai.detail.slice(0,12).join(" ")),pt.set("_tuilage.onnx",`groupes=? tuiles=${j.length} bannieres=${c.length} image=${o.width}x${o.height}`);for(const[ae,he,be,ue]of j){const de=Jt(o,ae,he,be-ae,ue-he);if(de.width<=0||de.height<=0)continue;const ie=[];for(const se of[0]){const Be=se===0?de:Xt(de,se),Ge=await rt("laurier: passe par TUILE (#113)",()=>At("laurel",Be));for(const[Me,Se,Ke,ot]of at("laurier: decodage YOLO (JS)",()=>ws(Ge.rows,Ge.params,Qe.laurel.conf))){const Ze=Tg({x:Me,y:Se,width:Ke-Me,height:ot-Se},se,de.width,de.height);ie.push([Ze.x,Ze.y,Ze.x+Ze.width,Ze.y+Ze.height])}}if(Le.push({boxes:mm(ie),offset:[ae,he]}),ge.push(de),w!==null)try{const se=await rt("laurier: bande de piste sur tuile (#114)",async()=>{const Me=Qr(de,1280,pr);return{sortie:await w.run({[w.inputNames[0]]:new Fe("float32",Me.tensor,[1,3,1280,1280])}),params:Me.params}}),Be={params:se.params},Ge=se.sortie[w.outputNames[0]];for(const[Me,Se,Ke,ot]of ym(Ge.data,Ge.dims[1]??0,Ge.dims[2]??0,Be.params,Ig))we.push([Me+ae,Se+he,Ke+ae,ot+he])}catch{}}}catch(j){console.warn("[laurel-containers] failed:",j)}const[Xe,yt]=await rt("laurier: 1er contact des 2 ResNet (89,6 Mo)",()=>Promise.all([ta(),oa()]));let re=await J$(Le,async(j,ae)=>{if(yt===null)return!1;const he=ge[ae]??o,be=await rt("laurier: filtre FP (#49)",()=>yv(he,[Math.trunc(j[0]),Math.trunc(j[1]),Math.trunc(j[2]),Math.trunc(j[3])],yt));return be!==null&&be>=i2});const le=[...y,...we];re=re.filter(([j,ae,he,be])=>!nx((j+he)/2,(ae+be)/2,le,c.map(ue=>ue.box)));for(const[j,ae,he,be]of re){const ue=Math.trunc((j+he)/2),de=Math.trunc((ae+be)/2);if([...g,...f].some(We=>(ue-We.cx)**2+(de-We.cy)**2<=We.r*We.r)||!Z(ue,de))continue;const se=Math.min(Math.trunc(he-j),Math.trunc(be-ae)),Be=Math.max(6,Math.trunc(Math.max(he-j,be-ae)*Y_)),Ge=dv(o,ue,de,Be);let Me=null,Se=0,Ke=!1;if(Xe!==null&&se>=6){const We=Jt(o,Math.trunc(j),Math.trunc(ae),Math.trunc(he-j),Math.trunc(be-ae)),He=async dn=>{let br=null,jn=0;for(const mi of dn){const gi=mi===0?We:Xt(We,mi),yi=t2(gi),ba=await rt("laurier: lecture chiffre (CNN)",()=>Xe.run({[Xe.inputNames[0]]:new Fe("float32",yi,[1,3,Dt,Dt])})),{value:wi,prob:$r}=n2(ba[Xe.outputNames[0]].data);if($r>jn&&(br=wi,jn=$r),br!==null&&jn>=e2)break}return{v:br,p:jn}},Ft=await He([0,2]);let Ot=Ft.v,Nt=Ft.p;if(Ot===null||Nt<Ym){const dn=await He([1,3]);dn.v!==null&&dn.p>Nt&&(Ot=dn.v,Nt=dn.p)}Ot!==null&&Nt>=Ym&&(Me=Ot,Se=Nt)}if(Me===null&&se>=6){const We=new Map;for(const He of[0,1,2,3]){const Ft=He===0?Ge:Xt(Ge,He),[Ot,Nt]=at("laurier: lecteur GABARITS (repli, JS pur)",()=>lb(Ft,ve));Ot!==null&&(We.set(Ot,Math.max(We.get(Ot)??0,Nt)),Nt>Se&&(Me=Ot,Se=Nt))}Me!==null&&Se<ov&&(Me=null),Ke=Me!==null&&[...We.entries()].some(([He,Ft])=>He!==Me&&Ft>=Se-.1)}const ot=b.some(We=>ue>=We.x0&&ue<=We.x1&&de>=We.y0&&de<=We.y1),Ze=[...z,...l].some(We=>{const He=We.boundingBox;return He!==void 0&&ue>=He.x&&ue<=He.x+He.width&&de>=He.y&&de<=He.y+He.height});C.push({value:Me,valueRead:Me!==null,center:[Math.round((j+he)/2),Math.round((ae+be)/2)],boundingBox:{x:Math.trunc(j),y:Math.trunc(ae),width:Math.trunc(he-j),height:Math.trunc(be-ae)},confidence:Math.round(Se*1e4)/1e4,excluded:ot||Ze,photoIndex:i-1,...Ke?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}return{byFamily:I,laurels:C,coins:v,coinTotal:R,guilds:z,bannerCount:Y,tuckedExcluded:U,bannerSuspects:G,cityWondersKept:N,cityTokensKept:W}}function Dg(){return{byFamily:{},laurels:[],coins:[],progressTokens:[],wonders:[],guilds:[],bannerSuspects:[],coinTotal:0,unidentifiedTokens:0,bannerCount:0,tuckedExcluded:0}}function Ug(e,t){for(const n of t.cityWondersKept)e.wonders.push(n);for(const n of t.cityTokensKept)e.progressTokens.push(n);for(const n of t.coins)e.coins.push(n);e.coinTotal+=t.coinTotal;for(const n of t.laurels)e.laurels.push(n);for(const n of t.guilds)e.guilds.push(n);for(const n of t.bannerSuspects)e.bannerSuspects.push(n);e.bannerCount+=t.bannerCount,e.tuckedExcluded+=t.tuckedExcluded;for(const[n,r]of Object.entries(t.byFamily))e.byFamily[n]=(e.byFamily[n]??0)+r}function Lg(e,t,n){const{byFamily:r,laurels:i,coins:o,progressTokens:s,wonders:a,guilds:u,bannerSuspects:l,coinTotal:c,unidentifiedTokens:d,bannerCount:h,tuckedExcluded:g}=e;g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):h>0&&a.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const f=r.guild??0;f!==u.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${f} purple banner(s) counted but ${u.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+u.map(T=>T.id).join(", ")+" — confirm in the review."});const y=a.filter(T=>T.boundingBox.width===0);if(y.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${y.map(T=>T.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${a.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),d>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${d} token disc(s) found but not identified — pick them in the review below.`}),s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+s.map(T=>T.id).join(", ")+" — confirm in the review."}),o.length>0){const T=o.filter(E=>E.denomSource==="cnn").length,S=o.length-T;n.push({code:"LOW_CONFIDENCE",message:S===0?`${t}: coins read as ${c} from ${o.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${c} from ${o.length} tile(s) — ${T} by the learned model, ${S} by metal COLOUR alone (the model abstained); confirm the total.`})}const w=xv(u,a);for(const T of[...rx(a.map(S=>S.id),t),...sx(w.map(S=>S.id),t)])n.push({code:"INCONSISTENT_STATE",message:T.message});const b=i.filter(T=>!T.excluded),x=b.filter(T=>T.valueRead);return{...Ov(),wonders:a,guilds:w,progressTokens:s,laurels:i,cardVictoryPoints:{value:x.reduce((T,S)=>T+(S.value??0),0),laurelsKept:b.length,laurelsUnread:b.length-x.length,complete:b.length===x.length},cardCounts:{byFamily:r,source:h>0?"yolo":"none",tuckedExcluded:g,...l.length>0?{suspects:l}:{}},coins:{total:c,confidence:o.length>0?.5:0,source:o.length===0?"none":o.some(T=>T.denomSource==="cnn")?"local-cnn":"local-colour",coins:o}}}async function Nv(e,t,n,r,i=()=>{},o="player",s,a=!1){const u=Dg();let l=0;for(const c of e){l+=1;const d=`${t} photo ${l}/${e.length}`;r(`${d}: reading pixels…`,.01);const h=await pi(c),g=await Bg(h,n,t,r,d,s,u.wonders,u.progressTokens);u.unidentifiedTokens+=g.unidentifiedTokens;const f=await Pg(g,o,a,t,l,h,n,r,d,u.guilds);Ug(u,f),i()}return Lg(u,t,n)}const Rt=1280,zv=.3,hi=9;let ya=null;function fi(){return ya===null&&(ya=(async()=>{try{return(await fetch(`${it}${wg}`,{method:"HEAD"})).ok?await gt(wg):null}catch{return null}})()),ya}function Bv(e){const t=Rt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),o=i.getContext("2d",{willReadFrequently:!0}),s=Jw(e.data,e.width,e.height,e.channels);o.putImageData(new ImageData(s,e.width,e.height),0,0);const u=new OffscreenCanvas(Rt,Rt).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Rt,Rt),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Rt,Rt),c=Rt*Rt,d=new Float32Array(3*c);for(let h=0;h<c;h+=1)d[h]=l[h*4]/255,d[c+h]=l[h*4+1]/255,d[2*c+h]=l[h*4+2]/255;return{tensor:d,r:t}}const Ve={appels:0,inferences:0,bandes:0,detail:[],premiereGagne:null,classes:new Set};function Pv(){Ve.appels=0,Ve.inferences=0,Ve.bandes=0,Ve.detail=[],Ve.premiereGagne=null,Ve.classes=new Set}function Fg(){pt.set("_pion.onnx",`appels=${Ve.appels} inferences=${Ve.inferences} bandes=${Ve.bandes} premiereGagne=${Ve.premiereGagne??"n/a"} classes=${Ve.classes.size===0?"aucune":[...Ve.classes].sort().join(",")}${Dv()} | ${Ve.detail.join(" ")}`)}function Dv(){const e=Ve.classes,t=(e.has(1)?1:0)+(e.has(2)?1:0);return e.size===0?" (piste illisible)":e.has(0)&&t===2?" (tout vu)":!e.has(0)&&t===2?" (PION manquant, geometrie disponible)":e.has(0)&&t===1?" (pion a la capitale : il masque un medaillon — TRAITE par #82)":e.has(0)&&t===0?" (pion seul, aucun medaillon)":" (un seul medaillon, pas de pion)"}async function wa(e,t){Ve.inferences+=1;const{tensor:n,r}=at("pion: mise en tenseur 1280x1280",()=>Bv(t)),o=(await e.run({[e.inputNames[0]]:new Fe("float32",n,[1,3,Rt,Rt])}))[e.outputNames[0]],s=o.data,a=o.dims[2]??0,u=(o.dims[1]??4)-4,l=at("pion: depouillement des ancres brutes",()=>{const c=new Map;for(let d=0;d<u;d+=1){const h=(4+d)*a;let g=-1,f=zv;for(let y=0;y<a;y+=1){const w=s[h+y];w>=f&&(f=w,g=y)}if(g>=0){const y=(s[g]+s[2*a+g])/2/r,w=(s[a+g]+s[3*a+g])/2/r,b=(s[2*a+g]-s[g])/r,x=(s[3*a+g]-s[a+g])/r;c.set(d,{conf:f,cx:y,cy:w,diam:(b+x)/2})}}return c});for(const c of l.keys())Ve.classes.add(c);return l}async function _a(e,t,n){const r=Ve.inferences,i=`a${Ve.appels}`;Ve.appels+=1;const o=await rt("pion: UNE passe (les 4 rotations)",()=>Uv(e,t,n));return Ve.detail.push(`${i}:${Ve.inferences-r}inf conf=${o===null?"rien":o.confidence.toFixed(2)}`),Fg(),o}async function Uv(e,t,n){let r=null;const i=1.8;for(const E of n??[0,1,2,3]){const I=E===0?t:at("pion: rotation de l'image",()=>Xt(t,E)),C=await wa(e,I);if(C.has(0)&&C.has(1)&&C.has(2)){const v=C.get(0).conf+C.get(1).conf+C.get(2).conf;if((r===null||v>r.score)&&(r={score:v,det:C,k:E}),v>=i)break}}if(r===null)for(const E of n??[0,1,2,3]){const I=E===0?t:Xt(t,E),C=await wa(e,I);if(C.has(1)&&C.has(2)){const v=C.get(1).conf+C.get(2).conf;(r===null||v>r.score)&&(r={score:v,det:C,k:E})}}let o=!1;if(r===null)for(const E of n??[0,1,2,3]){const I=E===0?t:Xt(t,E),C=await wa(e,I),v=C.get(0);if(v===void 0)continue;const R=C.has(1)&&!C.has(2)?1:!C.has(1)&&C.has(2)?2:null;if(R===null)continue;const z=C.get(R),Y=p_([v.cx,v.cy],[z.cx,z.cy],z.diam);if(Y===null)continue;const U=v.conf+z.conf;if(r===null||U>r.score){const G=new Map(C);G.set(R===2?1:2,{conf:z.conf,cx:Y[0],cy:Y[1],diam:z.diam}),r={score:U,det:G,k:E},o=!0}}if(r===null)return null;const s=!r.det.has(0),a=r.det.get(0)??{conf:0,cx:0,cy:0},u=r.det.get(1),l=r.det.get(2),c=l.cx-u.cx,d=l.cy-u.cy,h=(u.cx+l.cx)/2,g=(u.cy+l.cy)/2,f=c*c+d*d;if(f<=0)return null;const y=((a.cx-h)*c+(a.cy-g)*d)/f*(2*hi);let w=s?0:Math.min(hi,Math.max(-hi,ut(y)));const b=r.det.reperes;if(!s&&b!==void 0){const E=xx([a.cx,a.cy],[u.cx,u.cy],[l.cx,l.cy],b);E!==null&&(w=E)}const x=s?0:Math.min(a.conf,u.conf,l.conf),T=(E,I)=>{const C=r.k%4;return C===0?[E,I]:C===1?[I,t.height-1-E]:C===2?[t.width-1-E,t.height-1-I]:[t.width-1-I,E]},S=[u,l].map(E=>{const[I,C]=T(E.cx,E.cy);return[ut(I),ut(C)]});return{position:w,confidence:Math.round(x*1e4)/1e4,ends:S,k:r.k,found:!s,endOccluded:o}}async function Gg(e,t,n){let r=null,i=null;for(const o of n){const s=o_(t.width,t.height,o);if(s===null)continue;const a=Jt(t,s.x,s.y,s.width,s.height);if(a.width===0||a.height===0)continue;Ve.bandes+=1;const u=await _a(e,a,i===null?void 0:[i]);u!==null&&i===null&&(i=u.k),u!==null&&(Ve.premiereGagne===null?Ve.premiereGagne=!0:r!==null&&u.confidence>r.confidence&&(Ve.premiereGagne=!1),Fg()),u!==null&&(r===null||u.confidence>r.confidence)&&(r={...u,ends:u.ends.map(([l,c])=>[l+s.x,c+s.y])})}return r}function Wg(){const e=[Qs,Js,ta,ia,oa,aa,la,da,di,fa,ga,fi];for(const t of e)try{Promise.resolve(t()).catch(()=>{})}catch{}}async function Lv(e,t){Wg();const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let o=0;const s=(f,y=0)=>{t(f,i>0?Math.min(.99,(o+y)/i):void 0)},a=()=>{o+=1};for(const f of["left","right"]){const y=e[f];y.length>0&&(r[f]=await Nv(y,f,n,s,a))}let u=null,l=null;if(e.both!==void 0){const f={},y=await pi(e.both),w=await Bg(y,n,"both",s,"both photo 1/1",f,[],[]),b={player:[],opponent:[]},x=async(I,C)=>{const v=Dg();v.unidentifiedTokens+=w.unidentifiedTokens;const R=b[I];return Ug(v,await Pg(w,I,!0,C,1,y,R,s,`${C} photo 1/1`,v.guilds)),a(),Lg(v,C,R)},T={player:await x("player","left"),opponent:await x("opponent","right")};if(s("military pawn…",.95),f.image!==void 0)try{const I=await fi();I!==null&&(f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await Gg(I,f.image,f.bandBoxes)),u===null&&(u=await _a(I,f.image)))}catch(I){console.warn("[#125] both-photo pawn read failed:",I)}u!==null&&(l=u_(u.ends,f.hulls??[],u.position));const S=l!==null&&!l.ambiguous?l_(l):null;let E={left:"player"};if(S!==null)E={left:S.left,right:S.right},r.left=T[S.left],r.right=T[S.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`});else{const I=c_(f.hulls??[]);I!==null?(E={left:I.left,right:I.right},r.left=T[I.left],r.right=T[I.right],n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: no readable military track, so LEFT and RIGHT were taken from the PHOTO LAYOUT (cities stacked vertically -> the TOP one is left; side by side -> the LEFTMOST one is left). Swap them in the review if the seating is the other way around."})):(r.left=T.player,r.right=T.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: neither the military track nor the photo layout could tell the two cities apart — LEFT and RIGHT are UNDECIDED and must be checked in the review."}))}for(const I of["player","opponent"]){const C=I==="player"?"left":"right",v=E.left===I?"left":"right";for(const R of b[I])n.push(Kx(R,C,v))}}{const f={},y={};for(const w of["left","right"]){const b=r[w];b!=null&&(f[w]=b.wonders.map(x=>x.id),y[w]=b.progressTokens.map(x=>x.id))}for(const w of[...ix(f),...ox(y)])n.push({code:"INCONSISTENT_STATE",message:w.message})}let c={conflictPawnPosition:0,found:!1,confidence:0},d=!1;if(e.board!==void 0)try{const f=await pi(e.board),y=await fi();if(y!==null){let w=await _a(y,f);if(w===null){const b=await di();if(b!==null){const x=await At("banner",f),T=Zr(x.rows,x.params,Qe.banner.conf,Qe.banner.classes),S=await Cg(b,f,T);w=await Gg(y,f,S)}}w!==null&&(c={conflictPawnPosition:w.position,found:w.found,confidence:w.confidence},d=w.endOccluded,n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${w.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}else u!==null&&l!==null&&(c={conflictPawnPosition:u.position,found:u.found,confidence:u.confidence},d=u.endOccluded);if(d&&c.found&&n.push({code:"LOW_CONFIDENCE",message:`The conflict pawn appears to SIT ON its end medallion (the capital), which hides it from the detector: position ${c.conflictPawnPosition} was DEDUCED from the track length, not read end to end. Confirm it — at this distance it decides a military supremacy.`}),!c.found){const f=x=>{var T,S;return Number(((S=(T=x==null?void 0:x.cardCounts)==null?void 0:T.byFamily)==null?void 0:S.military)??0)},y=f(r.left),w=f(r.right),b=Math.abs(y-w);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:b>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${y} military cards and the other ${w}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const h=c.conflictPawnPosition,g=Math.abs(h)>=hi?{type:"military",winner:h>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:c,outcome:g,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data;let r=null;const i=(o,s)=>{Xx(o);const a=Zx()?"Initialisation des modèles de vision…":Zw(o);self.postMessage({id:t,progress:a,...s!==void 0?{fraction:s}:{},...o!==r?{perfPartiel:{providers:bg(),etapes:_g(),etapeCourante:a}}:{}}),r=o};(async()=>{try{if(n==="ping"){self.postMessage({id:t,ok:!0,result:{pong:!0}});return}if(n==="prechauffer"){Wg(),await Promise.allSettled([Qs(),Js(),ta(),ia(),oa(),aa(),la(),da(),di(),fa(),ga(),fi()]),self.postMessage({id:t,ok:!0,result:{prechauffe:!0}});return}n==="recognize"&&i("starting the on-device engine…",0),Yx(),nv();const o=performance.now(),s=n==="classify"?await Rv(e.data.file):await Lv(e.data.payload,i);self.postMessage({id:t,ok:!0,result:s,perf:{etapes:_g(),providers:bg(),runtime:Qx(),inference:tv(),famillesJs:jw(),inferenceParEtape:ev(),totalMs:Math.round(performance.now()-o)}})}catch(o){self.postMessage({id:t,ok:!1,error:String(o)})}})()}})();
