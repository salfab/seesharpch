var W_=Object.defineProperty;var V_=(nt,it,qt)=>it in nt?W_(nt,it,{enumerable:!0,configurable:!0,writable:!0,value:qt}):nt[it]=qt;var Ff=(nt,it,qt)=>V_(nt,typeof it!="symbol"?it+"":it,qt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var nt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyNames,Xf=Object.prototype.hasOwnProperty,Zf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),Wt=(e,t)=>{for(var r in t)nt(e,r,{get:t[r],enumerable:!0})},Yf=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of qt(t))!Xf.call(e,i)&&i!==r&&nt(e,i,{get:()=>t[i],enumerable:!(n=it(t,i))||n.enumerable});return e},Yt=e=>Yf(nt({},"__esModule",{value:!0}),e),Qt,pt,Vt,wa,$a,va=L(()=>{Qt=new Map,pt=[],Vt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=Qt.get(e);if(n===void 0)Qt.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=pt.indexOf(e);i!==-1&&pt.splice(i,1);for(let s=0;s<pt.length;s++)if(Qt.get(pt[s]).priority<=r){pt.splice(s,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},wa=async e=>{let t=Qt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},$a=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?pt:r,i,s=[],a=new Set;for(let l of n){let d=await wa(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Qf=L(()=>{va()}),xa,Jf=L(()=>{xa="1.27.0"}),on,Ie,Sa=L(()=>{Jf(),on="warning",Ie={wasm:{},webgl:{},webgpu:{},versions:{common:xa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);on=e}},get logLevel(){return on}},Object.defineProperty(Ie,"logLevel",{enumerable:!0})}),_e,em=L(()=>{Sa(),_e=Ie}),Ta,ka,tm=L(()=>{Ta=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let h=s*i,c=0,m=h,y=h*2,_=-1;a==="RGBA"?(c=0,m=h,y=h*2,_=h*3):a==="RGB"?(c=0,m=h,y=h*2):a==="RBG"&&(c=0,y=h,m=h*2);for(let b=0;b<s;b++)for(let S=0;S<i;S++){let $=(e.data[c++]-d[0])*l[0],w=(e.data[m++]-d[1])*l[1],k=(e.data[y++]-d[2])*l[2],T=_===-1?255:(e.data[_++]-d[3])*l[3];n.fillStyle="rgba("+$+","+w+","+k+","+T+")",n.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ka=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,h;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let c=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,y=0,_=1,b=2,S=3,$=0,w=c,k=c*2,T=-1;u==="RGBA"?($=0,w=c,k=c*2,T=c*3):u==="RGB"?($=0,w=c,k=c*2):u==="RBG"&&($=0,k=c,w=c*2),n=r.createImageData(i,s);for(let E=0;E<s*i;y+=m,_+=m,b+=m,S+=m,E++)n.data[y]=(e.data[$++]-h[0])*d[0],n.data[_]=(e.data[w++]-h[1])*d[1],n.data[b]=(e.data[k++]-h[2])*d[2],n.data[S]=T===-1?255:(e.data[T++]-h[3])*d[3]}else throw new Error("Can not access image data");return n}}),vr,Ia,Ea,za,Ca,Aa,rm=L(()=>{ln(),vr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,h=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),c=4,m=0,y=1,_=2,b=3,S=0,$=d,w=d*2,k=-1;u==="RGB"&&(c=3,m=0,y=1,_=2,b=-1),l==="RGBA"?k=d*3:l==="RBG"?(S=0,w=d,$=d*2):l==="BGR"&&(w=0,$=d,S=d*2);for(let T=0;T<d;T++,m+=c,_+=c,y+=c,b+=c)h[S++]=(e[m]+a[0])/s[0],h[$++]=(e[y]+a[1])/s[1],h[w++]=(e[_]+a[2])/s[2],k!==-1&&b!==-1&&(h[k++]=(e[b]+a[3])/s[3]);return l==="RGBA"?new Be("float32",h,[1,4,r,n]):new Be("float32",h,[1,3,r,n])},Ia=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let m=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=m,u.width=y}else u.tensorFormat="RGBA",u.height=m,u.width=y;c.drawImage(e,0,0),a=c.getImageData(0,0,y,m).data}else throw new Error("Can not access image data")}else if(n){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=h,u.width=c,t!==void 0){let m=l();m.width=c,m.height=h;let y=d(m);if(y!=null)y.putImageData(e,0,0),a=y.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let c=d(h);if(c!=null){let m=e.height,y=e.width;return c.drawImage(e,0,0,y,m),a=c.getImageData(0,0,y,m).data,u.height=m,u.width=y,vr(a,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,c)=>{let m=l(),y=d(m);if(!e||!y)return c();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{m.width=_.width,m.height=_.height,y.drawImage(_,0,0,m.width,m.height);let b=y.getImageData(0,0,m.width,m.height);u.height=m.height,u.width=m.width,h(vr(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return vr(a,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Ea=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},za=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},Ca=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},Aa=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),vt,Jt,un,Oa,nm=L(()=>{vt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Jt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),un=!1,Oa=()=>{if(!un){un=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(vt.set("int64",BigInt64Array),Jt.set(BigInt64Array,"int64")),t&&(vt.set("uint64",BigUint64Array),Jt.set(BigUint64Array,"uint64")),n?(vt.set("float16",r),Jt.set(r,"float16")):vt.set("float16",Uint16Array)}}}),Ra,Ma,im=L(()=>{ln(),Ra=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Ma=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,ln=L(()=>{tm(),rm(),nm(),im(),Be=class{constructor(e,t,r){Oa();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=vt.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,u;if(typeof e=="string")if(n=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=vt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=Jt.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(u===void 0)u=[a.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");i=u,this.cpuData=a,this.dataLocation="cpu"}let s=Ra(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return Ia(e,t)}static fromTexture(e,t){return Ea(e,t)}static fromGpuBuffer(e,t){return za(e,t)}static fromMLTensor(e,t){return Ca(e,t)}static fromPinnedBuffer(e,t,r){return Aa(e,t,r)}toDataURL(e){return Ta(this,e)}toImageData(e){return ka(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ma(this,e)}}}),Ve,Ba=L(()=>{ln(),Ve=Be}),xr,dn,Qe,Ge,xt,St,Na=L(()=>{Sa(),xr=(e,t)=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeStamp(`${e}::ORT::${t}`)},dn=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let s=0;s<r.length;s++){if(n&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),xr("CPU",a);return}r[s].includes("TRACE_FUNC")&&(n=!0)}},Qe=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||dn("BEGIN",e)},Ge=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||dn("END",e)},xt=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.time(`ORT::${e}`)},St=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeEnd(`ORT::${e}`)}}),Da,am=L(()=>{va(),Ba(),Na(),Da=class jf{constructor(t){this.handler=t}async run(t,r,n){Qe(),xt("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Ve||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ve)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(r);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let m=r[c];(m===null||m instanceof Ve)&&(d=!0,a=!1,i[c]=m)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let u=await this.handler.run(t,i,s),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let h=u[d];h instanceof Ve?l[d]=h:l[d]=new Ve(h.type,h.data,h.dims)}return St("InferenceSession.run"),Ge(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){Qe(),xt("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,m=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(m=t.byteLength-c,typeof n=="number"){if(m=n,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||c+m>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,c,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await $a(a),d=await u.createInferenceSessionHandler(s,l);return St("InferenceSession.create"),Ge(),new jf(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),pn,sm=L(()=>{am(),pn=Da}),om=L(()=>{}),um=L(()=>{}),lm=L(()=>{}),dm=L(()=>{}),pm={};Wt(pm,{InferenceSession:()=>pn,TRACE:()=>xr,TRACE_EVENT_BEGIN:()=>xt,TRACE_EVENT_END:()=>St,TRACE_FUNC_BEGIN:()=>Qe,TRACE_FUNC_END:()=>Ge,Tensor:()=>Ve,env:()=>_e,registerBackend:()=>Vt});var qe=L(()=>{Qf(),em(),sm(),Ba(),om(),um(),Na(),lm(),dm()}),cn=L(()=>{}),Ua={};Wt(Ua,{default:()=>Pa});var hn,fn,Pa,cm=L(()=>{var e;wc(),Tt(),wn(),hn="ort-wasm-proxy-worker",fn=((e=globalThis.self)==null?void 0:e.name)===hn,fn&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":xn(n.wasm).then(()=>{Mi(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=n;Bi(s,i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:i}=n,s=Wr(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=n;Di(i,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":Ui(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:u,options:l}=n;Li(i,s,a,u,new Array(u.length).fill(null),l).then(d=>{d.some(h=>h[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Wi([...a,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":qi(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),Pa=fn?null:t=>new Worker(t??Ne,{type:"module",name:hn})}),La={};Wt(La,{default:()=>Wa});async function qa(e={}){var Gf,Hf;var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&((Gf=self.name)==null?void 0:Gf.startsWith("em-pthread"));t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=o=>async(...p)=>{var g;try{if(t.Yc)throw Error("Session already started");let f=t.Yc={Kd:p[0],errors:[]},x=await o(...p);if(t.Yc!==f)throw Error("Session mismatch");(g=t.dd)==null||g.flush();let I=f.errors;if(0<I.length){let z=await Promise.all(I);if(z=z.filter(B=>B),0<z.length)throw Error(z.join(`
`))}return x}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let g=t.dd;t.jsepRegisterBuffer=(f,x,I,z)=>g.registerBuffer(f,x,I,z),t.jsepGetBuffer=f=>g.getBuffer(f),t.jsepCreateDownloader=(f,x,I)=>g.createDownloader(f,x,I),t.jsepOnCreateSession=f=>{g.onCreateSession(f)},t.jsepOnReleaseSession=f=>{g.onReleaseSession(f)},t.jsepOnRunStart=f=>g.onRunStart(f),t.Id=(f,x)=>{g.upload(f,x)}}else if(o==="webnn"){let g=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>g.onRunStart(f),t.webnnOnRunEnd=g.onRunEnd.bind(g),t.webnnOnReleaseSession=f=>{g.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,x)=>g.createMLTensorDownloader(f,x),t.webnnRegisterMLTensor=(f,x,I,z)=>g.registerMLTensor(f,x,I,z),t.webnnCreateMLContext=f=>g.createMLContext(f),t.webnnRegisterMLConstant=(f,x,I,z,B,V)=>g.registerMLConstant(f,x,I,z,B,t.Xc,V),t.webnnRegisterGraphInput=g.registerGraphInput.bind(g),t.webnnIsGraphInput=g.isGraphInput.bind(g),t.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),t.webnnIsGraphOutput=g.isGraphOutput.bind(g),t.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),t.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let a=()=>{let o=p=>(...g)=>{let f=tt;return g=p(...g),tt!=f?new Promise((x,I)=>{oa={resolve:x,reject:I}}):g};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var u,l,d=(o,p)=>{throw p},h=self.location.href,c="";if(r||n){try{c=new URL(".",h).href}catch{}n&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(A(o))return new Promise((g,f)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?g(x.response):f(x.status)},x.onerror=f,x.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var m,y,_,b,S,$,w=console.log.bind(console),k=console.error.bind(console),T=w,E=k,C=!1,A=o=>o.startsWith("file://");function v(){_t.buffer!=U.buffer&&G()}if(i){let o=function(p){try{var g=p.data,f=g.Sc;if(f==="load"){let x=[];self.onmessage=I=>x.push(I),$=()=>{postMessage({Sc:"loaded"});for(let I of x)o(I);self.onmessage=o};for(let I of g.xd)t[I]&&!t[I].proxy||(t[I]=(...z)=>{postMessage({Sc:"callHandler",wd:I,args:z})},I=="print"&&(T=t[I]),I=="printErr"&&(E=t[I]));_t=g.Od,G(),y=g.Pd,Ue(),an()}else if(f==="run"){(function(x){var I=(v(),X)[x+52>>>2>>>0];x=(v(),X)[x+56>>>2>>>0],Jh(I,I-x),oe(I)})(g.Rc),ca(g.Rc,0,0,1,0,0),eh(),ia(g.Rc),O||(jh(),O=!0);try{M0(g.Md,g.bd)}catch(x){if(x!="unwind")throw x}}else g.target!=="setimmediate"&&(f==="checkMailbox"?O&&Yr():f&&(E(`worker: received unknown command ${f}`),E(g)))}catch(x){throw Kh(),x}};var O=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var U,W,H,F,R,X,j,Q,ce,D,te,P=!1;function G(){var o=_t.buffer;t.HEAP8=U=new Int8Array(o),H=new Int16Array(o),t.HEAPU8=W=new Uint8Array(o),F=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=X=new Uint32Array(o),j=new Float32Array(o),Q=new Float64Array(o),ce=new BigInt64Array(o),D=new BigUint64Array(o)}function Z(){P=!0,i?$():dt.sb()}function q(o){throw E(o="Aborted("+o+")"),C=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function pe(){return{a:{ma:n_,gb:r_,g:B0,J:N0,f:D0,o:U0,h:P0,ha:L0,b:q0,T:W0,Ha:sh,n:V0,$:dh,Xa:ph,Da:ch,Fa:hh,Ya:fh,Va:mh,Oa:gh,Ua:yh,ka:_h,Ea:bh,Ba:wh,Wa:$h,Ca:vh,bb:G0,ea:H0,wa:F0,ua:K0,da:Z0,O:Y0,H:Q0,va:J0,_:sy,xa:oy,Ra:uy,za:dy,Ia:py,sa:cy,fa:hy,Qa:ia,_a:fy,R:_y,r:xy,c:ra,hb:Sy,y:Ty,M:ky,D:Iy,l:Ey,s:Ch,ib:zy,I:Cy,S:Ay,j:Oy,u:Ry,q:My,k:By,La:Ny,Ma:Dy,Na:Uy,Ja:Mh,Ka:Bh,ta:Nh,db:Ly,ab:Wy,v:Vy,aa:Gy,ga:Hy,$a:qy,W:Fy,Za:jy,Aa:Ky,F:Py,U:Xy,la:rn,ya:Yy,fb:Zy,eb:Qy,Sa:Lh,Ta:qh,Ga:gr,V:Wh,ja:Vh,Pa:Gh,ia:Hh,kb:P_,na:M_,lb:U_,oa:R_,G:S_,e:o_,t:a_,w:i_,B:y_,mb:C_,K:$_,x:d_,pa:A_,Y:B_,ba:z_,nb:E_,ob:I_,P:__,qa:k_,pb:T_,N:v_,Z:O_,d:s_,A:l_,m:u_,jb:L_,p:c_,z:h_,C:p_,E:f_,L:b_,qb:x_,Q:N_,ca:w_,X:D_,rb:g_,ra:m_,i:e_,a:_t,cb:Le}}}async function Ue(){function o(f,x){var I=dt=f.exports;f={};for(let[z,B]of Object.entries(I))typeof B=="function"?(I=my(B),f[z]=I):f[z]=B;return dt=f,dt=(function(){var z=dt,B=K=>se=>K(se)>>>0,V=K=>()=>K()>>>0;return(z=Object.assign({},z)).tb=B(z.tb),z.Xb=V(z.Xb),z.Zb=B(z.Zb),z.lc=B(z.lc),z.mc=V(z.mc),z.qc=B(z.qc),z})(),Qc.push(dt._b),Fh=(f=dt).tb,jh=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,nn=f.Xb,rt=t._free=f.Yb,br=t._malloc=f.Zb,ca=f.ac,Kh=f.bc,Xh=f.cc,Zh=f.dc,ha=f.ec,Yh=f.fc,Qh=f.gc,le=f.hc,wr=f.ic,Jh=f.jc,oe=f.kc,fa=f.lc,ue=f.mc,ef=f.nc,ma=f.oc,tf=f.pc,rf=f.qc,nf=f.rc,ga=f.sc,af=f.tc,sf=f.uc,of=f.vc,uf=f.wc,lf=f.xc,df=f.yc,pf=f.zc,cf=f.Ac,hf=f.Bc,ff=f.Cc,mf=f.Dc,gf=f.Ec,yf=f.Fc,_f=f.Gc,bf=f.Hc,wf=f.Ic,$f=f.Jc,vf=f.Kc,xf=f.Lc,Sf=f.Mc,Tf=f.Nc,kf=f.Pc,If=f.Qc,Ef=f.$c,zf=f.ad,Cf=f.fd,Af=f.jd,Of=f.kd,Rf=f.ld,Mf=f.md,Bf=f.nd,Nf=f.od,Df=f.pd,Uf=f.qd,Pf=f.vd,Lf=f.Td,qf=f.Ud,Wf=f.Vd,Vf=f.Wd,y=x,dt}var p,g=pe();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(g,(x,I)=>{f(o(x,I))})}):i?o(new WebAssembly.Instance(y,pe()),y):(te??(te=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),p=await(async function(f){var x=te;if(!m&&!A(x))try{var I=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,f)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,B){try{var V=await(async function(K){if(!m)try{var se=await u(K);return new Uint8Array(se)}catch{}if(K==te&&m)K=new Uint8Array(m);else{if(!l)throw"both async and sync fetching of the wasm failed";K=l(K)}return K})(z);return await WebAssembly.instantiate(V,B)}catch(K){E(`failed to asynchronously prepare wasm: ${K}`),q(K)}})(x,f)})(g),o(p.instance,p.module))}class Se{constructor(p){Ff(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Oe=o=>{o.terminate(),o.onmessage=()=>{}},Re=[],Pe=0,Me=null,gt=o=>{yt.length==0&&(rh(),th(yt[0]));var p=yt.pop();if(!p)return 6;yr.push(p),Ut[o.Rc]=p,p.Rc=o.Rc;var g={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(g,o.rd),0},we=0,ie=(o,p,...g)=>{var f,x=16*g.length,I=ue(),z=fa(x),B=z>>>3;for(f of g)typeof f=="bigint"?((v(),ce)[B++>>>0]=1n,(v(),ce)[B++>>>0]=f):((v(),ce)[B++>>>0]=0n,(v(),Q)[B++>>>0]=f);return o=Xh(o,0,x,z,p),oe(I),o};function Le(o){if(i)return ie(0,1,o);if(_=o,!(0<we)){for(var p of yr)Oe(p);for(p of yt)Oe(p);yt=[],yr=[],Ut={},C=!0}d(0,new Se(o))}function Fr(o){if(i)return ie(1,0,o);gr(o)}var gr=o=>{if(_=o,i)throw Fr(o),"unwind";Le(o)},yt=[],yr=[],Qc=[],Ut={},Jc=o=>{var p=o.Rc;delete Ut[p],yt.push(o),yr.splice(yr.indexOf(o),1),o.Rc=0,Zh(p)};function eh(){Qc.forEach(o=>o())}var th=o=>new Promise(p=>{o.onmessage=x=>{var I=x.data;if(x=I.Sc,I.Zc&&I.Zc!=nn()){var z=Ut[I.Zc];z?z.postMessage(I,I.rd):E(`Internal error! Worker sent a message "${x}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?Yr():x==="spawnThread"?gt(I):x==="cleanupThread"?Zr(()=>{Jc(Ut[I.Nd])}):x==="loaded"?(o.loaded=!0,p(o)):I.target==="setimmediate"?o.postMessage(I):x==="uncaughtException"?o.onerror(I.error):x==="callHandler"?t[I.wd](...I.args):x&&E(`worker sent an unknown command ${x}`)},o.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,f=[];for(g of[])t.propertyIsEnumerable(g)&&f.push(g);o.postMessage({Sc:"load",xd:f,Od:_t,Pd:y})});function rh(){var o=new Worker((()=>{let p=URL;return self.location.href>"file:"&&self.location.href<"file;"?new p("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});yt.push(o)}var _t,M0=(o,p)=>{we=0,o=ga(o,p),0<we?_=o:ha(o)},jr=[],Kr=0;function B0(o){var p=new Qi(o>>>=0);return(v(),U)[p.Tc+12>>>0]==0&&(nh(p,!0),Kr--),ih(p,!1),jr.push(p),rf(o)}var Xt=0,N0=()=>{le(0,0);var o=jr.pop();ef(o.cd),Xt=0};function nh(o,p){p=p?1:0,(v(),U)[o.Tc+12>>>0]=p}function ih(o,p){p=p?1:0,(v(),U)[o.Tc+13>>>0]=p}class Qi{constructor(p){this.cd=p,this.Tc=p-24}}var Ji=o=>{var p=Xt;if(!p)return wr(0),0;var g=new Qi(p);(v(),X)[g.Tc+16>>>2>>>0]=p;var f=(v(),X)[g.Tc+4>>>2>>>0];if(!f)return wr(0),p;for(var x of o){if(x===0||x===f)break;if(tf(x,f,g.Tc+16))return wr(x),p}return wr(f),p};function D0(){return Ji([])}function U0(o){return Ji([o>>>0])}function P0(o,p,g,f){return Ji([o>>>0,p>>>0,g>>>0,f>>>0])}var L0=()=>{var o=jr.pop();o||q("no exception to throw");var p=o.cd;throw(v(),U)[o.Tc+13>>>0]==0&&(jr.push(o),ih(o,!0),nh(o,!1),Kr++),ma(p),Xt=p};function q0(o,p,g){var f=new Qi(o>>>=0);throw p>>>=0,g>>>=0,(v(),X)[f.Tc+16>>>2>>>0]=0,(v(),X)[f.Tc+4>>>2>>>0]=p,(v(),X)[f.Tc+8>>>2>>>0]=g,ma(o),Kr++,Xt=o}var W0=()=>Kr;function ah(o,p,g,f){return i?ie(2,1,o,p,g,f):sh(o,p,g,f)}function sh(o,p,g,f){if(o>>>=0,p>>>=0,g>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return i&&x.length===0?ah(o,p,g,f):(o={Ld:g,Rc:o,bd:f,rd:x},i?(o.Sc="spawnThread",postMessage(o,x),0):gt(o))}function V0(o){throw Xt||(Xt=o>>>0),Xt}var oh=globalThis.TextDecoder&&new TextDecoder,uh=(o,p,g,f)=>{if(g=p+g,f)return g;for(;o[p]&&!(p>=g);)++p;return p},lh=(o,p=0,g,f)=>{if(16<(g=uh(o,p>>>=0,g,f))-p&&o.buffer&&oh)return oh.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,g):o.slice(p,g));for(f="";p<g;){var x=o[p++];if(128&x){var I=63&o[p++];if((224&x)==192)f+=String.fromCharCode((31&x)<<6|I);else{var z=63&o[p++];65536>(x=(240&x)==224?(15&x)<<12|I<<6|z:(7&x)<<18|I<<12|z<<6|63&o[p++])?f+=String.fromCharCode(x):(x-=65536,f+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else f+=String.fromCharCode(x)}return f},Te=(o,p,g)=>(o>>>=0)?lh((v(),W),o,p,g):"";function dh(o,p,g){return i?ie(3,1,o,p,g):0}function ph(o,p){if(i)return ie(4,1,o,p)}function ch(o,p){if(i)return ie(5,1,o,p)}function hh(o,p,g){if(i)return ie(6,1,o,p,g)}function fh(o,p,g){return i?ie(7,1,o,p,g):0}function mh(o,p){if(i)return ie(8,1,o,p)}function gh(o,p,g){if(i)return ie(9,1,o,p,g)}function yh(o,p,g,f){if(i)return ie(10,1,o,p,g,f)}function _h(o,p,g,f){if(i)return ie(11,1,o,p,g,f)}function bh(o,p,g,f){if(i)return ie(12,1,o,p,g,f)}function wh(o){if(i)return ie(13,1,o)}function $h(o,p){if(i)return ie(14,1,o,p)}function vh(o,p,g){if(i)return ie(15,1,o,p,g)}var G0=()=>q(""),et=o=>{o>>>=0;for(var p="";;){var g=(v(),W)[o++>>>0];if(!g)return p;p+=String.fromCharCode(g)}},ea={},ta={},Zt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function lt(o,p,g={}){return(function(f,x,I={}){var z=x.name;if(!f)throw new Zt(`type "${z}" must have a positive integer typeid pointer`);if(ta.hasOwnProperty(f)){if(I.yd)return;throw new Zt(`Cannot register type '${z}' twice`)}ta[f]=x,ea.hasOwnProperty(f)&&(x=ea[f],delete ea[f],x.forEach(B=>B()))})(o,p,g)}var xh=(o,p,g)=>{switch(p){case 1:return g?f=>(v(),U)[f>>>0]:f=>(v(),W)[f>>>0];case 2:return g?f=>(v(),H)[f>>>1>>>0]:f=>(v(),F)[f>>>1>>>0];case 4:return g?f=>(v(),R)[f>>>2>>>0]:f=>(v(),X)[f>>>2>>>0];case 8:return g?f=>(v(),ce)[f>>>3>>>0]:f=>(v(),D)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function H0(o,p,g,f,x){o>>>=0,g>>>=0,p=et(p>>>0);let I=z=>z;if(f=f===0n){let z=8*g;I=B=>BigInt.asUintN(z,B),x=I(x)}lt(o,{name:p,Oc:I,Vc:(z,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:xh(p,g,!f),Wc:null})}function F0(o,p,g,f){lt(o>>>=0,{name:p=et(p>>>0),Oc:function(x){return!!x},Vc:function(x,I){return I?g:f},Uc:function(x){return this.Oc((v(),W)[x>>>0])},Wc:null})}var Sh=[],Pt=[0,1,,1,null,1,!0,1,!1,1];function ra(o){9<(o>>>=0)&&--Pt[o+1]===0&&(Pt[o]=void 0,Sh.push(o))}var We=o=>{if(!o)throw new Zt(`Cannot use deleted val. handle = ${o}`);return Pt[o]},Ye=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Sh.pop()||Pt.length;return Pt[p]=o,Pt[p+1]=1,p}};function na(o){return this.Oc((v(),X)[o>>>2>>>0])}var j0={name:"emscripten::val",Oc:o=>{var p=We(o);return ra(o),p},Vc:(o,p)=>Ye(p),Uc:na,Wc:null};function K0(o){return lt(o>>>0,j0)}var X0=(o,p)=>{switch(p){case 4:return function(g){return this.Oc((v(),j)[g>>>2>>>0])};case 8:return function(g){return this.Oc((v(),Q)[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Z0(o,p,g){g>>>=0,lt(o>>>=0,{name:p=et(p>>>0),Oc:f=>f,Vc:(f,x)=>x,Uc:X0(p,g),Wc:null})}function Y0(o,p,g,f,x){o>>>=0,g>>>=0,p=et(p>>>0);let I=B=>B;if(f===0){var z=32-8*g;I=B=>B<<z>>>z,x=I(x)}lt(o,{name:p,Oc:I,Vc:(B,V)=>V,Uc:xh(p,g,f!==0),Wc:null})}function Q0(o,p,g){function f(I){var z=(v(),X)[I>>>2>>>0];return I=(v(),X)[I+4>>>2>>>0],new x((v(),U).buffer,I,z)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];lt(o>>>=0,{name:g=et(g>>>0),Oc:f,Uc:f},{yd:!0})}var bt=(o,p,g)=>{var f=(v(),W);if(p>>>=0,0<g){var x=p;g=p+g-1;for(var I=0;I<o.length;++I){var z=o.codePointAt(I);if(127>=z){if(p>=g)break;f[p++>>>0]=z}else if(2047>=z){if(p+1>=g)break;f[p++>>>0]=192|z>>6,f[p++>>>0]=128|63&z}else if(65535>=z){if(p+2>=g)break;f[p++>>>0]=224|z>>12,f[p++>>>0]=128|z>>6&63,f[p++>>>0]=128|63&z}else{if(p+3>=g)break;f[p++>>>0]=240|z>>18,f[p++>>>0]=128|z>>12&63,f[p++>>>0]=128|z>>6&63,f[p++>>>0]=128|63&z,I++}}f[p>>>0]=0,o=p-x}else o=0;return o},Xr=o=>{for(var p=0,g=0;g<o.length;++g){var f=o.charCodeAt(g);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++g):p+=3}return p};function J0(o,p){lt(o>>>=0,{name:p=et(p>>>0),Oc(g){var f=(v(),X)[g>>>2>>>0];return f=Te(g+4,f,!0),rt(g),f},Vc(g,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var x=typeof f=="string";if(!(x||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Zt("Cannot pass non-string to std::string");var I=x?Xr(f):f.length,z=br(4+I+1),B=z+4;return(v(),X)[z>>>2>>>0]=I,x?bt(f,B,I+1):(v(),W).set(f,B>>>0),g!==null&&g.push(rt,z),z},Uc:na,Wc(g){rt(g)}})}var Th=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,ey=(o,p,g)=>{if(o>>>=1,16<(p=uh((v(),F),o,p/2,g))-o&&Th)return Th.decode((v(),F).slice(o,p));for(g="";o<p;++o){var f=(v(),F)[o>>>0];g+=String.fromCharCode(f)}return g},ty=(o,p,g)=>{if(g??(g=2147483647),2>g)return 0;var f=p;g=(g-=2)<2*o.length?g/2:o.length;for(var x=0;x<g;++x){var I=o.charCodeAt(x);(v(),H)[p>>>1>>>0]=I,p+=2}return(v(),H)[p>>>1>>>0]=0,p-f},ry=o=>2*o.length,ny=(o,p,g)=>{var f="";o>>>=2;for(var x=0;!(x>=p/4);x++){var I=(v(),X)[o+x>>>0];if(!I&&!g)break;f+=String.fromCodePoint(I)}return f},iy=(o,p,g)=>{if(p>>>=0,g??(g=2147483647),4>g)return 0;var f=p;g=f+g-4;for(var x=0;x<o.length;++x){var I=o.codePointAt(x);if(65535<I&&x++,(v(),R)[p>>>2>>>0]=I,(p+=4)+4>g)break}return(v(),R)[p>>>2>>>0]=0,p-f},ay=o=>{for(var p=0,g=0;g<o.length;++g)65535<o.codePointAt(g)&&g++,p+=4;return p};function sy(o,p,g){if(o>>>=0,p>>>=0,g=et(g>>>=0),p===2)var f=ey,x=ty,I=ry;else f=ny,x=iy,I=ay;lt(o,{name:g,Oc:z=>{var B=(v(),X)[z>>>2>>>0];return B=f(z+4,B*p,!0),rt(z),B},Vc:(z,B)=>{if(typeof B!="string")throw new Zt(`Cannot pass non-string to C++ string type ${g}`);var V=I(B),K=br(4+V+p);return(v(),X)[K>>>2>>>0]=V/p,x(B,K+4,V+p),z!==null&&z.push(rt,K),K},Uc:na,Wc(z){rt(z)}})}function oy(o,p){lt(o>>>=0,{zd:!0,name:p=et(p>>>0),Oc:()=>{},Vc:()=>{}})}function uy(o){ca(o>>>0,!n,1,!r,131072,!1),eh()}var Zr=o=>{if(!C)try{if(o(),!(0<we))try{i?nn()&&ha(_):gr(_)}catch(p){p instanceof Se||p=="unwind"||d(0,p)}}catch(p){p instanceof Se||p=="unwind"||d(0,p)}},ly=!Atomics.waitAsync||((Hf=globalThis.navigator)==null?void 0:Hf.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ia(o){o>>>=0,ly||(Atomics.waitAsync((v(),R),o>>>2,o).value.then(Yr),o+=128,Atomics.store((v(),R),o>>>2,1))}var Yr=()=>Zr(()=>{var o=nn();o&&(ia(o),Qh())});function dy(o,p){(o>>>=0)==p>>>0?setTimeout(Yr):i?postMessage({Zc:o,Sc:"checkMailbox"}):(o=Ut[o])&&o.postMessage({Sc:"checkMailbox"})}var aa=[];function py(o,p,g,f,x){for(p>>>=0,x>>>=0,aa.length=0,g=x>>>3,f=x+f>>>3;g<f;){var I;I=(v(),ce)[g++>>>0]?(v(),ce)[g++>>>0]:(v(),Q)[g++>>>0],aa.push(I)}return(p?ya[p]:t_[o])(...aa)}var cy=()=>{we=0};function hy(o){o>>>=0,i?postMessage({Sc:"cleanupThread",Nd:o}):Jc(Ut[o])}function fy(o){}var Qr=o=>{try{o()}catch(p){q(p)}};function my(o){var p=(...g)=>{Jr.push(o);try{return o(...g)}finally{C||(Jr.pop(),tt&&wt===1&&Jr.length===0&&(wt=0,we+=1,Qr(qf),typeof Fibers<"u"&&Fibers.Zd()))}};return Eh.set(o,p),p}var wt=0,tt=null,kh=0,Jr=[],sa=new Map,Ih=new Map,Eh=new Map,gy=0,oa=null,yy=[],zh=o=>(function(p){if(!C){if(wt===0){var g=!1,f=!1;p((x=0)=>{if(!C&&(kh=x,g=!0,f)){wt=2,Qr(()=>Wf(tt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var I=(function(){var V=(v(),R)[tt+8>>>2>>>0];return V=Ih.get(V),V=Eh.get(V),--we,V()})()}catch(V){I=V,x=!0}var z=!1;if(!tt){var B=oa;B&&(oa=null,(x?B.reject:B.resolve)(I),z=!0)}if(x&&!z)throw I}}),f=!0,g||(wt=1,tt=(function(){var x=br(65548),I=x+12;if((v(),X)[x>>>2>>>0]=I,(v(),X)[x+4>>>2>>>0]=I+65536,I=Jr[0],!sa.has(I)){var z=gy++;sa.set(I,z),Ih.set(z,I)}return I=sa.get(I),(v(),R)[x+8>>>2>>>0]=I,x})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Qr(()=>Lf(tt)))}else wt===2?(wt=0,Qr(Vf),rt(tt),tt=null,yy.forEach(Zr)):q(`invalid state: ${wt}`);return kh}})(p=>{o().then(p)});function _y(o){return o>>>=0,zh(async()=>{var p=await We(o);return Ye(p)})}var ua=[],by=o=>{var p=ua.length;return ua.push(o),p},wy=(o,p)=>{for(var g=Array(o),f=0;f<o;++f){var x=f,I=(v(),X)[p+4*f>>>2>>>0],z=ta[I];if(z===void 0)throw o=`parameter ${f}`,I=Fh(I),p=et(I),rt(I),new Zt(`${o} has unknown type ${p}`);g[x]=z}return g},$y=(o,p,g)=>{var f=[];return o=o(f,g),f.length&&((v(),X)[p>>>2>>>0]=Ye(f)),o},vy={},en=o=>{var p=vy[o];return p===void 0?et(o):p};function xy(o,p,g){var[f,...x]=wy(o,p>>>0);p=f.Vc.bind(f);var I=x.map(V=>V.Uc.bind(V));o--;var z={toValue:We};switch(o=I.map((V,K)=>{var se=`argFromPtr${K}`;return z[se]=V,`${se}(args${K?"+"+8*K:""})`}),g){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:z.getStringOrSymbol=en,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,f.zd||(z.toReturnWire=p,z.emval_returnValue=$y,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,g=new Function(Object.keys(z),B)(...Object.values(z)),B=`methodCaller<(${x.map(V=>V.name)}) => ${f.name}>`,by(Object.defineProperty(g,"name",{value:B}))}function Sy(o,p){return p>>>=0,(o=We(o>>>0))==We(p)}function Ty(o){return(o>>>=0)?(o=en(o),Ye(globalThis[o])):Ye(globalThis)}function ky(o){return o=en(o>>>0),Ye(t[o])}function Iy(o,p){return p>>>=0,o=We(o>>>0),p=We(p),Ye(o[p])}function Ey(o){9<(o>>>=0)&&(Pt[o+1]+=1)}function Ch(o,p,g,f,x){return ua[o>>>0](p>>>0,g>>>0,f>>>0,x>>>0)}function zy(o,p,g,f,x){return Ch(o>>>0,p>>>0,g>>>0,f>>>0,x>>>0)}function Cy(){return Ye([])}function Ay(o){o=We(o>>>0);for(var p=Array(o.length),g=0;g<o.length;g++)p[g]=o[g];return Ye(p)}function Oy(o){return Ye(en(o>>>0))}function Ry(){return Ye({})}function My(o){for(var p=We(o>>>=0);p.length;){var g=p.pop();p.pop()(g)}ra(o)}function By(o,p,g){p>>>=0,g>>>=0,o=We(o>>>0),p=We(p),g=We(g),o[p]=g}function Ny(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),(v(),R)[p>>>2>>>0]=o.getUTCSeconds(),(v(),R)[p+4>>>2>>>0]=o.getUTCMinutes(),(v(),R)[p+8>>>2>>>0]=o.getUTCHours(),(v(),R)[p+12>>>2>>>0]=o.getUTCDate(),(v(),R)[p+16>>>2>>>0]=o.getUTCMonth(),(v(),R)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,(v(),R)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),R)[p+28>>>2>>>0]=o}var Ah=o=>o%4==0&&(o%100!=0||o%400==0),Oh=[0,31,60,91,121,152,182,213,244,274,305,335],Rh=[0,31,59,90,120,151,181,212,243,273,304,334];function Dy(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),(v(),R)[p>>>2>>>0]=o.getSeconds(),(v(),R)[p+4>>>2>>>0]=o.getMinutes(),(v(),R)[p+8>>>2>>>0]=o.getHours(),(v(),R)[p+12>>>2>>>0]=o.getDate(),(v(),R)[p+16>>>2>>>0]=o.getMonth(),(v(),R)[p+20>>>2>>>0]=o.getFullYear()-1900,(v(),R)[p+24>>>2>>>0]=o.getDay();var g=(Ah(o.getFullYear())?Oh:Rh)[o.getMonth()]+o.getDate()-1|0;(v(),R)[p+28>>>2>>>0]=g,(v(),R)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),g=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(g!=f&&o.getTimezoneOffset()==Math.min(f,g)),(v(),R)[p+32>>>2>>>0]=o}function Uy(o){o>>>=0;var p=new Date((v(),R)[o+20>>>2>>>0]+1900,(v(),R)[o+16>>>2>>>0],(v(),R)[o+12>>>2>>>0],(v(),R)[o+8>>>2>>>0],(v(),R)[o+4>>>2>>>0],(v(),R)[o>>>2>>>0],0),g=(v(),R)[o+32>>>2>>>0],f=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(I,x);return 0>g?(v(),R)[o+32>>>2>>>0]=+(x!=I&&z==f):0<g!=(z==f)&&(x=Math.max(I,x),p.setTime(p.getTime()+6e4*((0<g?z:x)-f))),(v(),R)[o+24>>>2>>>0]=p.getDay(),g=(Ah(p.getFullYear())?Oh:Rh)[p.getMonth()]+p.getDate()-1|0,(v(),R)[o+28>>>2>>>0]=g,(v(),R)[o>>>2>>>0]=p.getSeconds(),(v(),R)[o+4>>>2>>>0]=p.getMinutes(),(v(),R)[o+8>>>2>>>0]=p.getHours(),(v(),R)[o+12>>>2>>>0]=p.getDate(),(v(),R)[o+16>>>2>>>0]=p.getMonth(),(v(),R)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Mh(o,p,g,f,x,I,z){return i?ie(16,1,o,p,g,f,x,I,z):-52}function Bh(o,p,g,f,x,I){if(i)return ie(17,1,o,p,g,f,x,I)}var _r={},Py=()=>performance.timeOrigin+performance.now();function Nh(o,p){if(i)return ie(18,1,o,p);if(_r[o]&&(clearTimeout(_r[o].id),delete _r[o]),!p)return 0;var g=setTimeout(()=>{delete _r[o],Zr(()=>Yh(o,performance.timeOrigin+performance.now()))},p);return _r[o]={id:g,Yd:p},0}function Ly(o,p,g,f){o>>>=0,p>>>=0,g>>>=0,f>>>=0;var x=new Date().getFullYear(),I=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var z=Math.max(I,x);(v(),X)[o>>>2>>>0]=60*z,(v(),R)[p>>>2>>>0]=+(I!=x),o=(p=B=>{var V=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(V/60)).padStart(2,"0")}${String(V%60).padStart(2,"0")}`})(I),p=p(x),x<I?(bt(o,g,17),bt(p,f,17)):(bt(o,f,17),bt(p,g,17))}var qy=()=>Date.now();function Wy(o,p,g){return g>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(v(),ce)[g>>>3>>>0]=BigInt(o),0):28}var la=[],Dh=(o,p)=>{la.length=0;for(var g;g=(v(),W)[o++>>>0];){var f=g!=105;p+=(f&=g!=112)&&p%8?4:0,la.push(g==112?(v(),X)[p>>>2>>>0]:g==106?(v(),ce)[p>>>3>>>0]:g==105?(v(),R)[p>>>2>>>0]:(v(),Q)[p>>>3>>>0]),p+=f?8:4}return la};function Vy(o,p,g){return o>>>=0,p=Dh(p>>>0,g>>>0),ya[o](...p)}function Gy(o,p,g){return o>>>=0,p=Dh(p>>>0,g>>>0),ya[o](...p)}var Hy=()=>{};function Fy(o,p){return E(Te(o>>>0,p>>>0))}var jy=()=>{throw we+=1,"unwind"};function Ky(){return 4294901760}var Xy=()=>navigator.hardwareConcurrency,Lt={},tn=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},Uh=o=>{for(var p of o)(o=tn(p))&&(Lt[o]=p)};function Zy(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Uh(o),Lt.gd=tn(o[3]),Lt.Jd=o,Lt.gd}function rn(o){if(!(o=Lt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}rt(rn.hd??0),p=Xr(o)+1;var g=br(p);return g&&bt(o,g,p),rn.hd=g,rn.hd}function Yy(o){o>>>=0;var p=(v(),W).length;if(o<=p||4294901760<o)return!1;for(var g=1;4>=g;g*=2){var f=p*(1+.2/g);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-_t.buffer.byteLength+65535)/65536|0;try{_t.grow(f),G();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function Qy(o,p,g){if(o>>>=0,p>>>=0,Lt.gd==o)var f=Lt.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),Uh(f);for(var x=3;f[x]&&tn(f[x])!=o;)++x;for(o=0;o<g&&f[o+x];++o)(v(),R)[p+4*o>>>2>>>0]=tn(f[o+x]);return o}var da,pa={},Ph=()=>{var f;if(!da){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((f=globalThis.navigator)==null?void 0:f.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in pa)pa[o]===void 0?delete p[o]:p[o]=pa[o];var g=[];for(o in p)g.push(`${o}=${p[o]}`);da=g}return da};function Lh(o,p){if(i)return ie(19,1,o,p);o>>>=0,p>>>=0;var g,f=0,x=0;for(g of Ph()){var I=p+f;(v(),X)[o+x>>>2>>>0]=I,f+=bt(g,I,1/0)+1,x+=4}return 0}function qh(o,p){if(i)return ie(20,1,o,p);o>>>=0,p>>>=0;var g=Ph();for(var f of((v(),X)[o>>>2>>>0]=g.length,o=0,g))o+=Xr(f)+1;return(v(),X)[p>>>2>>>0]=o,0}function Wh(o){return i?ie(21,1,o):52}function Vh(o,p,g,f){return i?ie(22,1,o,p,g,f):52}function Gh(o,p,g,f){return i?ie(23,1,o,p,g,f):70}var Jy=[null,[],[]];function Hh(o,p,g,f){if(i)return ie(24,1,o,p,g,f);p>>>=0,g>>>=0,f>>>=0;for(var x=0,I=0;I<g;I++){var z=(v(),X)[p>>>2>>>0],B=(v(),X)[p+4>>>2>>>0];p+=8;for(var V=0;V<B;V++){var K=o,se=(v(),W)[z+V>>>0],he=Jy[K];se===0||se===10?((K===1?T:E)(lh(he)),he.length=0):he.push(se)}x+=B}return(v(),X)[f>>>2>>>0]=x,0}function e_(o){return o>>>0}i||(function(){for(var o=t.numThreads-1;o--;)rh();Re.push(async()=>{var p=(async function(){if(!i)return Promise.all(yt.map(th))})();Pe++,await p,--Pe==0&&Me&&(p=Me,Me=null,p())})})(),i||(_t=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),G()),t.wasmBinary&&(m=t.wasmBinary),t.stackSave=()=>ue(),t.stackRestore=o=>oe(o),t.stackAlloc=o=>fa(o),t.setValue=function(o,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":(v(),U)[o>>>0]=p;break;case"i16":(v(),H)[o>>>1>>>0]=p;break;case"i32":(v(),R)[o>>>2>>>0]=p;break;case"i64":(v(),ce)[o>>>3>>>0]=BigInt(p);break;case"float":(v(),j)[o>>>2>>>0]=p;break;case"double":(v(),Q)[o>>>3>>>0]=p;break;case"*":(v(),X)[o>>>2>>>0]=p;break;default:q(`invalid type for setValue: ${g}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(v(),U)[o>>>0];case"i16":return(v(),H)[o>>>1>>>0];case"i32":return(v(),R)[o>>>2>>>0];case"i64":return(v(),ce)[o>>>3>>>0];case"float":return(v(),j)[o>>>2>>>0];case"double":return(v(),Q)[o>>>3>>>0];case"*":return(v(),X)[o>>>2>>>0];default:q(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Te,t.stringToUTF8=bt,t.lengthBytesUTF8=Xr;var Fh,jh,nn,rt,br,ca,Kh,Xh,Zh,ha,Yh,Qh,le,wr,Jh,oe,fa,ue,ef,ma,tf,rf,nf,ga,af,sf,of,uf,lf,df,pf,cf,hf,ff,mf,gf,yf,_f,bf,wf,$f,vf,xf,Sf,Tf,kf,If,Ef,zf,Cf,Af,Of,Rf,Mf,Bf,Nf,Df,Uf,Pf,Lf,qf,Wf,Vf,dt,t_=[Le,Fr,ah,dh,ph,ch,hh,fh,mh,gh,yh,_h,bh,wh,$h,vh,Mh,Bh,Nh,Lh,qh,Wh,Vh,Gh,Hh],ya={1003524:(o,p,g,f,x)=>{if(t===void 0||!t.Xc)return 1;if((o=Te(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),f=Number(f>>>0),p+g>o.byteLength)return 3;try{let I=o.subarray(p,p+g);switch(x){case 0:(v(),W).set(I,f>>>0);break;case 1:t.Qd?t.Qd(f,I):t.Id(f,I);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,g)=>{t.td(o,(v(),W).subarray(p>>>0,p+g>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,g)=>{t.ed(Number(o),Number(p),Number(g),!0)},1004704:(o,p,g)=>{t.ed(Number(o),Number(p),Number(g))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,g)=>{t.$b("HardSigmoid",o,{alpha:p,beta:g})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,g)=>{t.$b("Clip",o,{min:p,max:g})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,g,f,x)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007283:(o,p,g,f,x)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007457:(o,p,g,f,x)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007631:(o,p,g,f,x)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007806:(o,p,g,f,x)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007980:(o,p,g,f,x)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008153:(o,p,g,f,x)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008326:(o,p,g,f,x)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008503:(o,p,g,f,x)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008683:(o,p,g,f,x)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,g)=>{t.$b("Transpose",o,{perm:p?Array.from((v(),R).subarray(Number(p)>>>0,Number(g)>>>0)):[]})},1009040:(o,p,g,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Te(g),format:f?"NHWC":"NCHW"})},1009173:(o,p,g,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Te(g),format:f?"NHWC":"NCHW"})},1009306:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e,$t)=>{t.$b("ConvTranspose",o,{format:V?"NHWC":"NCHW",autoPad:p,dilations:[g],group:f,kernelShape:[x],pads:[I,z],strides:[B],wIsConst:()=>!!(v(),U)[K>>>0],outputPadding:se?Array.from((v(),R).subarray(Number(se)>>>0,Number(he)>>>0)):[],outputShape:ye?Array.from((v(),R).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:Te($t)})},1009739:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from((v(),R).subarray(Number(g)>>>0,(Number(g)>>>0)+2>>>0)),group:f,kernelShape:Array.from((v(),R).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),U)[V>>>0],outputPadding:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:he?Array.from((v(),R).subarray(Number(he)>>>0,Number(ye)>>>0)):[],activation:Te($e)})},1010400:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e,$t)=>{t.$b("ConvTranspose",o,{format:V?"NHWC":"NCHW",autoPad:p,dilations:[g],group:f,kernelShape:[x],pads:[I,z],strides:[B],wIsConst:()=>!!(v(),U)[K>>>0],outputPadding:se?Array.from((v(),R).subarray(Number(se)>>>0,Number(he)>>>0)):[],outputShape:ye?Array.from((v(),R).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:Te($t)})},1010833:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from((v(),R).subarray(Number(g)>>>0,(Number(g)>>>0)+2>>>0)),group:f,kernelShape:Array.from((v(),R).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),U)[V>>>0],outputPadding:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:he?Array.from((v(),R).subarray(Number(he)>>>0,Number(ye)>>>0)):[],activation:Te($e)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e)=>{t.$b("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:f,storage_order:x,dilations:I?Array.from((v(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((v(),R).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e)=>{t.$b("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:f,storage_order:x,dilations:I?Array.from((v(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((v(),R).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e)=>{t.$b("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:f,storage_order:x,dilations:I?Array.from((v(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((v(),R).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e)=>{t.$b("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:f,storage_order:x,dilations:I?Array.from((v(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((v(),R).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1013758:(o,p,g,f,x)=>{t.$b("Gemm",o,{alpha:p,beta:g,transA:f,transB:x})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,g,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!g,axis:f})},1014024:(o,p,g,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!g,axis:f})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,g,f,x)=>{t.$b("Split",o,{axis:p,numOutputs:g,splitSizes:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,g,f,x,I,z,B,V,K,se)=>{t.$b("Resize",o,{antialias:p,axes:g?Array.from((v(),R).subarray(Number(g)>>>0,Number(f)>>>0)):[],coordinateTransformMode:Te(x),cubicCoeffA:I,excludeOutside:z,extrapolationValue:B,keepAspectRatioPolicy:Te(V),mode:Te(K),nearestMode:Te(se)})},1015056:(o,p,g,f,x,I,z)=>{t.$b("Slice",o,{starts:p?Array.from((v(),R).subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[],axes:I?Array.from((v(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,g)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:g?"NHWC":"NCHW"})},1015486:(o,p,g)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:g?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:Te(p)})},1015734:(o,p,g,f,x)=>{t.$b("Pad",o,{mode:p,value:g,pads:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1015877:(o,p,g,f,x,I)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!f,format:I?"NHWC":"NCHW"})},1016046:(o,p,g,f,x,I)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!f,format:I?"NHWC":"NCHW"})},1016215:(o,p,g)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(g)})},1016312:(o,p,g)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:g})},1016402:(o,p,g,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Te(g),padding_mode:Te(f),format:x?"NHWC":"NCHW"})},1016572:(o,p,g,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Te(g),padding_mode:Te(f),format:x?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:Te(p)})},1016827:(o,p,g,f,x,I,z,B,V)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:g,maskFilterValue:f,scale:x,doRotary:I,qkvHiddenSizes:z?Array.from((v(),R).subarray(Number(B)>>>0,Number(B)+z>>>0)):[],pastPresentShareBuffer:!!V})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e,$t,_a)=>{t.$b("Conv",o,{format:he?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from((v(),R).subarray(Number(g)>>>0,Number(f)>>>0)):[],group:x,kernel_shape:I?Array.from((v(),R).subarray(Number(I)>>>0,Number(z)>>>0)):[],pads:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(V)>>>0)):[],strides:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(v(),U)[Number(ye)>>>0],activation:Te($e),activation_params:$t?Array.from((v(),j).subarray(Number($t)>>>0,Number(_a)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,g,f,x,I,z,B,V)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:g,scale:f,softcap:x,doRotary:I,rotaryInterleaved:z,smoothSoftmax:B,localWindowSize:V})},1018124:(o,p,g,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:g,simplified:!!f})},1018235:(o,p,g,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:g,simplified:!!f})},1018346:(o,p,g,f,x,I)=>{t.$b("MatMulNBits",o,{k:p,n:g,accuracyLevel:f,bits:x,blockSize:I})},1018473:(o,p,g,f,x,I)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:g,maskFilterValue:f,scale:x,doRotary:I})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,g,f,x)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:f,scale:x})},1018835:(o,p,g)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!g})},1018937:(o,p,g)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!g})},1019039:(o,p,g,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:g,blockSize:f})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function r_(o,p,g){return zh(async()=>{await t.Dd(Number(o),Number(p),Number(g))})}function n_(){return typeof wasmOffsetConverter<"u"}function i_(o,p,g,f){var x=ue();try{return cf(o,p,g,f)}catch(I){if(oe(x),I!==I+0)throw I;le(1,0)}}function a_(o,p,g){var f=ue();try{return uf(o,p,g)}catch(x){if(oe(f),x!==x+0)throw x;le(1,0)}}function s_(o){var p=ue();try{af(o)}catch(g){if(oe(p),g!==g+0)throw g;le(1,0)}}function o_(o,p){var g=ue();try{return ga(o,p)}catch(f){if(oe(g),f!==f+0)throw f;le(1,0)}}function u_(o,p,g){var f=ue();try{nf(o,p,g)}catch(x){if(oe(f),x!==x+0)throw x;le(1,0)}}function l_(o,p){var g=ue();try{hf(o,p)}catch(f){if(oe(g),f!==f+0)throw f;le(1,0)}}function d_(o,p,g,f,x,I,z){var B=ue();try{return df(o,p,g,f,x,I,z)}catch(V){if(oe(B),V!==V+0)throw V;le(1,0)}}function p_(o,p,g,f,x,I){var z=ue();try{sf(o,p,g,f,x,I)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function c_(o,p,g,f){var x=ue();try{pf(o,p,g,f)}catch(I){if(oe(x),I!==I+0)throw I;le(1,0)}}function h_(o,p,g,f,x){var I=ue();try{of(o,p,g,f,x)}catch(z){if(oe(I),z!==z+0)throw z;le(1,0)}}function f_(o,p,g,f,x,I,z){var B=ue();try{mf(o,p,g,f,x,I,z)}catch(V){if(oe(B),V!==V+0)throw V;le(1,0)}}function m_(o,p,g,f,x,I,z){var B=ue();try{gf(o,p,g,f,x,I,z)}catch(V){if(oe(B),V!==V+0)throw V;le(1,0)}}function g_(o,p,g,f,x,I,z,B){var V=ue();try{wf(o,p,g,f,x,I,z,B)}catch(K){if(oe(V),K!==K+0)throw K;le(1,0)}}function y_(o,p,g,f,x){var I=ue();try{return ff(o,p,g,f,x)}catch(z){if(oe(I),z!==z+0)throw z;le(1,0)}}function __(o,p,g){var f=ue();try{return $f(o,p,g)}catch(x){if(oe(f),x!==x+0)throw x;le(1,0)}}function b_(o,p,g,f,x,I,z,B){var V=ue();try{vf(o,p,g,f,x,I,z,B)}catch(K){if(oe(V),K!==K+0)throw K;le(1,0)}}function w_(o,p,g,f,x,I,z,B,V,K,se,he){var ye=ue();try{yf(o,p,g,f,x,I,z,B,V,K,se,he)}catch($e){if(oe(ye),$e!==$e+0)throw $e;le(1,0)}}function $_(o,p,g,f,x,I){var z=ue();try{return _f(o,p,g,f,x,I)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function v_(o,p,g){var f=ue();try{return xf(o,p,g)}catch(x){if(oe(f),x!==x+0)throw x;return le(1,0),0n}}function x_(o,p,g,f,x,I,z,B,V){var K=ue();try{lf(o,p,g,f,x,I,z,B,V)}catch(se){if(oe(K),se!==se+0)throw se;le(1,0)}}function S_(o){var p=ue();try{return Sf(o)}catch(g){if(oe(p),g!==g+0)throw g;le(1,0)}}function T_(o,p){var g=ue();try{return Pf(o,p)}catch(f){if(oe(g),f!==f+0)throw f;return le(1,0),0n}}function k_(o){var p=ue();try{return Tf(o)}catch(g){if(oe(p),g!==g+0)throw g;return le(1,0),0n}}function I_(o,p,g,f){var x=ue();try{return Af(o,p,g,f)}catch(I){if(oe(x),I!==I+0)throw I;le(1,0)}}function E_(o,p,g,f,x){var I=ue();try{return Of(o,p,g,f,x)}catch(z){if(oe(I),z!==z+0)throw z;le(1,0)}}function z_(o,p,g,f,x,I){var z=ue();try{return Rf(o,p,g,f,x,I)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function C_(o,p,g,f,x,I){var z=ue();try{return Mf(o,p,g,f,x,I)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function A_(o,p,g,f,x,I,z,B){var V=ue();try{return bf(o,p,g,f,x,I,z,B)}catch(K){if(oe(V),K!==K+0)throw K;le(1,0)}}function O_(o,p,g,f,x){var I=ue();try{return Bf(o,p,g,f,x)}catch(z){if(oe(I),z!==z+0)throw z;return le(1,0),0n}}function R_(o,p,g,f){var x=ue();try{return Nf(o,p,g,f)}catch(I){if(oe(x),I!==I+0)throw I;le(1,0)}}function M_(o,p,g,f){var x=ue();try{return Df(o,p,g,f)}catch(I){if(oe(x),I!==I+0)throw I;le(1,0)}}function B_(o,p,g,f,x,I,z,B,V,K,se,he){var ye=ue();try{return Uf(o,p,g,f,x,I,z,B,V,K,se,he)}catch($e){if(oe(ye),$e!==$e+0)throw $e;le(1,0)}}function N_(o,p,g,f,x,I,z,B,V,K,se){var he=ue();try{zf(o,p,g,f,x,I,z,B,V,K,se)}catch(ye){if(oe(he),ye!==ye+0)throw ye;le(1,0)}}function D_(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e,$t,_a){var q_=ue();try{Cf(o,p,g,f,x,I,z,B,V,K,se,he,ye,$e,$t,_a)}catch(ba){if(oe(q_),ba!==ba+0)throw ba;le(1,0)}}function U_(o,p,g){var f=ue();try{return kf(o,p,g)}catch(x){if(oe(f),x!==x+0)throw x;le(1,0)}}function P_(o,p,g){var f=ue();try{return If(o,p,g)}catch(x){if(oe(f),x!==x+0)throw x;le(1,0)}}function L_(o,p,g,f){var x=ue();try{Ef(o,p,g,f)}catch(I){if(oe(x),I!==I+0)throw I;le(1,0)}}function an(){if(0<Pe)Me=an;else if(i)b==null||b(t),Z();else{for(var o=Re;0<o.length;)o.shift()(t);0<Pe?Me=an:(t.calledRun=!0,C||(Z(),b==null||b(t)))}}return i||(dt=await Ue(),an()),t.PTR_SIZE=4,P?t:new Promise((o,p)=>{b=o,S=p})}var Wa,Va,hm=L(()=>{var e,t;Wa=qa,Va=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Va&&qa()}),mn,gn,Ga,Ne,Ha,Sr,Fa,ja,yn,Ka,_n,Xa,bn,Za,wn=L(()=>{cn(),mn=typeof location>"u"?void 0:location.origin,gn=self.location.href>"file:"&&self.location.href<"file;",Ga=()=>{{if(gn){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,mn).href}return self.location.href}},Ne=Ga(),Ha=()=>{if(Ne&&!Ne.startsWith("blob:"))return Ne.substring(0,Ne.lastIndexOf("/")+1)},Sr=(e,t)=>{try{let r=t??Ne;return(r?new URL(e,r):new URL(e)).origin===mn}catch{return!1}},Fa=(e,t)=>{let r=t??Ne;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},ja=(e,t)=>`${t??"./"}${e}`,yn=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ka=async e=>(await import(e)).default,_n=(cm(),Yt(Ua)).default,Xa=async()=>{if(!Ne)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Sr(Ne))return[void 0,_n()];let e=await yn(Ne);return[e,_n(e)]},bn=(hm(),Yt(La)).default,Za=async(e,t,r,n)=>{let i=bn&&!(e||t);if(i)if(Ne)i=Sr(Ne)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,bn];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Fa(s,t),u=r&&a&&!Sr(a,t),l=u?await yn(a):a??ja(s,t);return[u?l:void 0,await Ka(l)]}}}),$n,Tr,er,vn,Ya,Qa,Ja,xn,be,Tt=L(()=>{wn(),Tr=!1,er=!1,vn=!1,Ya=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Qa=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ja=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},xn=async e=>{if(Tr)return Promise.resolve();if(er)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(vn)throw new Error("previous call to 'initializeWebAssembly()' failed.");er=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ja())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Qa())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=Ya();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,u=(a==null?void 0:a.href)??a,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,h=e.wasmBinary,[c,m]=await Za(u,s,r>1,!!h||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,S)=>{let $={numThreads:r};if(h)$.wasmBinary=h,$.locateFile=w=>w;else if(d||s)$.locateFile=w=>d??s+w;else if(u&&u.indexOf("blob:")!==0)$.locateFile=w=>new URL(w,u).href;else if(c){let w=Ha();w&&($.locateFile=k=>w+k)}m($).then(w=>{er=!1,Tr=!0,$n=w,b(),c&&URL.revokeObjectURL(c)},w=>{er=!1,vn=!0,S(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Tr&&$n)return $n;throw new Error("WebAssembly is not initialized yet.")}}),He,kr,ge,Sn=L(()=>{Tt(),He=(e,t)=>{let r=be(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},kr=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")kr(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ge=e=>{let t=be(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),u=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),es,fm=L(()=>{Tt(),Sn(),es=e=>{let t=be(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=He(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&ge("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&kr(e.extra,"",new WeakSet,(a,u)=>{let l=He(a,n),d=He(u,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&ge(`Can't set a run config entry: ${a} - ${u}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),ts,rs,ns,kt,is,as,mm=L(()=>{Tt(),Sn(),ts=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},rs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ns=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},kt=(e,t,r,n)=>{let i=He(t,n),s=He(r,n);be()._OrtAddSessionConfigEntry(e,i,s)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},is=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",kt(e,"session.disable_quant_qdq","1",r),kt(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&kt(e,"deviceType",c,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);kt(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let u=He(s,r),l=a.length,d=0,h=0;if(l>0){d=be()._malloc(l*be().PTR_SIZE),r.push(d),h=be()._malloc(l*be().PTR_SIZE),r.push(h);for(let c=0;c<l;c++)be().setValue(d+c*be().PTR_SIZE,a[c][0],"*"),be().setValue(h+c*be().PTR_SIZE,a[c][1],"*")}await be()._OrtAppendExecutionProvider(e,u,d,h,l)!==0&&ge(`Can't append execution provider: ${s}.`)}},as=async e=>{let t=be(),r=0,n=[],i=e||{};ns(i);try{let s=ts(i.graphOptimizationLevel??"all"),a=rs(i.executionMode??"sequential"),u=typeof i.logId=="string"?He(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof i.optimizedModelFilePath=="string"?He(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,u,l,d,h),r===0&&ge("Can't create session options."),i.executionProviders&&await is(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);kt(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[c,m]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let y=He(c,n);t._OrtAddFreeDimensionOverride(r,y,m)!==0&&ge(`Can't set a free dimension override: ${c} - ${m}.`)}return i.extra!==void 0&&kr(i.extra,"",new WeakSet,(c,m)=>{kt(r,c,m,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),It,at,Et,Ir,Er,Tn,kn,In,re=L(()=>{It=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},at=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Et=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},Ir=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Er=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Tn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",kn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",In=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),En,ss=L(()=>{cn(),En=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(u){if(u instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let a=0;for(;;){let{done:u,value:l}=await i.read();if(u)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),os,us,ls,ds,zn,ps,de,st=L(()=>{re(),os=["V","I","W","E","F"],us=(e,t)=>{console.log(`[${os[e]},${new Date().toISOString()}]${t}`)},zn=(e,t)=>{ls=e,ds=t},ps=(e,t)=>{let r=Er(e),n=Er(ls);r>=n&&us(r,typeof t=="function"?t():t)},de=(...e)=>{ds&&ps(...e)}}),cs,Gt,M,zr,hs,fs,ms,ne=L(()=>{cs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Gt=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let u=cs.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(u===void 0)return;[a[s-2],a[s-1]]=u}for(let u=r?3:1;u<=s;u++){let l=n-u<0?1:e[n-u],d=i-u<0?1:t[i-u];if(l!==d&&l>1&&d>1)return;let h=Math.max(l,d);if(l&&d)a[s-u]=Math.max(l,d);else{if(h>1)return;a[s-u]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},M=class sn{static size(t){return sn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return sn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return sn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},zr=class $r{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=n.length?n.push(r[u+2]):n[u]=r[u+2];for(let u=0;u<n.length;u++)if(u<i.length){if(i[u]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let u=0;u<n.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<n.length*2;u++)if(u<a.length){if(a[u]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let u=0;u<n.length;u++){if(n[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[u]>=n[u]||a[u+n.length]>=n[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)$r.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,n,i,s,a,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return $r.computeShapeHelper(t,r,l,n,i,s,a,u),l}static computeConvOutputShape(t,r,n,i,s,a,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return $r.computeShapeHelper(!1,t,l,n,i,s,a,u),l}static computeShapeHelper(t,r,n,i,s,a,u,l){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push($r.adjustPadAndReturnShape(r[d+2],i[d],s[d],a[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,n,i,s,a,u,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),s[u]=h-s[a],Math.floor((t+h-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[u]-d)/r+1)}},hs=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,u;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(u=r[0],l=1):(u=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||u<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Gt.isValidBroadcast(i,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,a]}},fs=-34028234663852886e22,ms=34028234663852886e22}),Cn,gs=L(()=>{re(),Cn=(e,t)=>new(Ir(t))(e)}),An,On,Rn,ys,Mn,_s,Bn,Nn,Dn,bs,ws,gm=L(()=>{re(),st(),An=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),On=(e,t)=>{if(t==="int32")return e;let r=An.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(Ir(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let u=0;u<i;u++){let l=s[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[u]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Rn=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ys=1,Mn=()=>ys++,_s=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Bn=(e,t)=>{let r=An.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Nn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Bn(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Rn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Dn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=_s.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Bn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=On(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Rn(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},bs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Mn();return this.tensorTrackersById.set(e,new Dn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=Mn(),a=new Nn({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new Dn(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let u=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let c=this.freeTensors.splice(d,1)[0];return c.sessionId=e,c}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new Nn({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ws=(...e)=>new bs(...e)}),tr,$s,vs,ym=L(()=>{re(),Tt(),gs(),gm(),st(),tr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),$s=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},vs=class{constructor(e){this.tensorManager=ws(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,zn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>$s(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=tr.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=tr.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Cn(r,t)}}registerMLTensor(e,t,r,n){let i=tr.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,n,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=s.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(d);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":h=new Int32Array(d);break;case"uint32":h=new Uint32Array(d);break;case"int64":if(a){let c=On(new Uint8Array(d),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(d);break;case"uint64":h=new BigUint64Array(d);break;case"int8":h=new Int8Array(d);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=tr.get(It(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!(i!=null&&i.input.dataTypes.includes(n)):!!(i!=null&&i.output.dataTypes.includes(n))}flush(){}}}),Un=L(()=>{}),Pn,Cr,Ar,xs,Ss,Ln,qn,Ts,ks,_m=L(()=>{st(),Un(),Pn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cr=[],Ar=e=>Math.ceil(Number(e)/16)*16,xs=e=>{for(let t=0;t<Cr.length;t++){let r=Cr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ss=1,Ln=()=>Ss++,qn=async(e,t,r,n)=>{let i=Ar(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{s.destroy()}},Ts=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Pn)Cr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=Ar(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,n,i)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ar(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Ln();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=xs(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let u=(i?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?n=u.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:Ln(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await qn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Pn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ks=(...e)=>new Ts(...e)}),Is,me,xe=L(()=>{Is=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},me=e=>new Is(e)}),Ht,Or,ke,ze,ee,ve,Wn,Ft,ct,J,rr,N,Y,Es,Vn,zs,Cs,ae=L(()=>{re(),ne(),Ht=64,Or=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ke=(e,t=1)=>{let r=Or(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=Or(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:M.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,Wn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ft=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ct=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,J=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,rr=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,u=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Or(t,i),h=typeof d=="string"?d:d[1],c=typeof d=="string"?d:d[0],m={indices:l,value:h,storage:c,tensor:t},y=P=>typeof P=="string"?P:`${P}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",S=`${b}${e}_shape`,$=`${b}${e}_strides`,w="";for(let P=0;P<a-1;P++)w+=`
    let dim${P} = current / ${J($,P,a)};
    let rest${P} = current % ${J($,P,a)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;w+=`indices[${a-1}] = current;`;let k=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${w}
    return indices;
  }`,T=P=>(_.offsetToIndices=!0,a<2?P:`o2i_${e}(${P})`),E=[];if(a>=2)for(let P=a-1;P>=0;P--)E.push(`${J($,P,a)} * (indices[${P}])`);let C=a<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=P=>(_.indicesToOffset=!0,a<2?P:`i2o_${e}(${P})`),v=(...P)=>a===0?"0u":`${m.indices}(${P.map(y).join(",")})`,O=(P,G)=>a<2?`${P}`:`${J(P,G,a)}`,U=(P,G,Z)=>a<2?`${P}=${Z};`:`${J(P,G,a)}=${Z};`,W={},H=(P,G)=>{_.broadcastedIndicesToOffset=!0;let Z=`${G.name}broadcastedIndicesTo${e}Offset`;if(Z in W)return`${Z}(${P})`;let q=[];for(let pe=a-1;pe>=0;pe--){let Ue=G.indicesGet("outputIndices",pe+G.rank-a);q.push(`${O($,pe)} * (${Ue} % ${O(S,pe)})`)}return W[Z]=`fn ${Z}(outputIndices: ${G.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${Z}(${P})`},F=(P,G)=>(()=>{if(m.storage===m.value)return`${e}[${P}]=${G};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${G}), select(0u, 0xFFFFFFFFu, ${G} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${G}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${G}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),R=P=>(()=>{if(m.storage===m.value)return`${e}[${P}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${P}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${P}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),X=a<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${h} {
    return ${R(`i2o_${e}(indices)`)};
  }`,j=a<2?"":(()=>{let P=u.map(Z=>`d${Z}: u32`).join(", "),G=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${P}) -> ${h} {
    return get_${e}ByIndices(${v(G)});
  }`})(),Q=(...P)=>{if(P.length!==a)throw new Error(`indices length must be ${a}`);let G=P.map(y).join(",");return a===0?R("0u"):a===1?R(G[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${G})`)},ce=P=>a<2?R(P):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${P})`),D=a<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${h}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,te=a<2?"":(()=>{let P=u.map(Z=>`d${Z}: u32`).join(", "),G=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${P}, value: ${h}) {
    set_${e}ByIndices(${v(G)}, value);
  }`})();return{impl:()=>{let P=[],G=!1;return _.offsetToIndices&&(P.push(k),G=!0),_.indicesToOffset&&(P.push(C),G=!0),_.broadcastedIndicesToOffset&&(Object.values(W).forEach(Z=>P.push(Z)),G=!0),_.set&&(P.push(te),G=!0),_.setByIndices&&(P.push(D),G=!0),_.get&&(P.push(j),G=!0),_.getByIndices&&(P.push(X),G=!0),!s&&G&&P.unshift(`const ${S} = ${m.indices}(${r.join(",")});`,`const ${$} = ${m.indices}(${M.computeStrides(r).join(",")});`),P.join(`
`)},type:m,offsetToIndices:T,indicesToOffset:A,broadcastedIndicesToOffset:H,indices:v,indicesGet:O,indicesSet:U,set:(...P)=>{if(P.length!==a+1)throw new Error(`indices length must be ${a}`);let G=P[a];if(typeof G!="string")throw new Error("value must be string");let Z=P.slice(0,a).map(y).join(",");return a===0?F("0u",G):a===1?F(Z[0],G):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Z}, ${G})`)},setByOffset:F,setByIndices:(P,G)=>a<2?F(P,G):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${G});`),get:Q,getByOffset:R,getByIndices:ce,usage:n,name:e,strides:$,shape:S,rank:a}},N=(e,t,r,n=1)=>rr(e,t,r,"input",n),Y=(e,t,r,n=1)=>rr(e,t,r,"output",n),Es=(e,t,r)=>rr(e,t,r,"atomicOutput",1),Vn=(e,t,r,n=1)=>rr(e,t,r,"internal",n),zs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ht){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Cs=(e,t)=>new zs(e,t)}),As,Gn,Os,Rs,Ms,Bs,De,Ns,Ds,ht=L(()=>{re(),ne(),xe(),ae(),As=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Os=(e,t)=>M.sortBasedOnPerm(e,Gn(e.length,t)),Rs=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Ms=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Bs=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},De=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Gn(n,t),s=Os(e.dims,i),a=e.dims,u=s,l=n<2||Bs(i,e.dims),d;if(l)return d=_=>{let b=N("input",r,a,4),S=Y("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=M.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:h,newPerm:c}=Ms(e.dims,i),m=M.areEqual(c,[2,3,1]),y=M.areEqual(c,[3,1,2]);if(h.length===2||m||y){a=m?[h[0],h[1]*h[2]]:y?[h[0]*h[1],h[2]]:h,u=[a[1],a[0]];let _=16;return d=b=>{let S=N("a",r,a.length),$=Y("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=M.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...ee(a,u)]}},getShaderSource:d}}return d=_=>{let b=N("a",r,a.length),S=Y("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}

  ${Rs(i,n,b,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=M.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ee(a,u)]}},getShaderSource:d}},Ns=(e,t)=>{As(e.inputs,t.perm),e.compute(De(e.inputs[0],t.perm))},Ds=e=>me({perm:e.perm})}),Us,Ps,Ls,qs,Ws,Vs,Gs,Hs,Fs,js,Fe,Ks,Xs,Zs,Ys,Qs,Js,eo,to,ro,no,bm=L(()=>{re(),ne(),ae(),Fn(),ht(),Us={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ps={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ls={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},qs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ws=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Vs=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Gs=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},Hs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Fs=(e,t)=>{let r=[];if(!Hs(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},js=(e,t,r,n,i,s,a)=>{let u=r[0].dims,l=M.size(s),d=M.size(a),h=N("_A",r[0].dataType,u),c=Y("output",i,s),m=64;l===1&&(m=256);let y=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ls[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Us[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ps[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${n==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${qs[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Fe=(e,t,r,n)=>{let i=e.inputs.length===1?r:Hn(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let a=M.normalizeAxes(s,e.inputs[0].dims.length),u=a,l=e.inputs[0],d=Fs(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(De(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Ws(u.length,l.dims.length));let[h,c]=Vs(l.dims,u),m=h;i.keepDims&&(m=Gs(h,a)),e.compute(js(t,i.cacheKey,[l],n,e.inputs[0].dataType,m,c),{inputs:[l]})},Ks=(e,t)=>{Fe(e,"ReduceMeanShared",t,"mean")},Xs=(e,t)=>{Fe(e,"ReduceL1Shared",t,"l1")},Zs=(e,t)=>{Fe(e,"ReduceL2Shared",t,"l2")},Ys=(e,t)=>{Fe(e,"ReduceLogSumExpShared",t,"logSumExp")},Qs=(e,t)=>{Fe(e,"ReduceMaxShared",t,"max")},Js=(e,t)=>{Fe(e,"ReduceMinShared",t,"min")},eo=(e,t)=>{Fe(e,"ReduceProdShared",t,"prod")},to=(e,t)=>{Fe(e,"ReduceSumShared",t,"sum")},ro=(e,t)=>{Fe(e,"ReduceSumSquareShared",t,"sumSquare")},no=(e,t)=>{Fe(e,"ReduceLogSumShared",t,"logSum")}}),je,io,Rr,Hn,Ke,ao,so,oo,uo,lo,po,co,ho,fo,mo,Xe,go,yo,_o,bo,wo,$o,vo,xo,So,To,Fn=L(()=>{re(),ne(),xe(),ae(),bm(),je=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},io=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Rr=(e,t,r,n,i,s,a=!1,u=!1)=>{let l=[],d=r[0].dims,h=d.length,c=M.normalizeAxes(i,h),m=!u&&c.length===0;d.forEach((b,S)=>{m||c.indexOf(S)>=0?a&&l.push(1):l.push(b)});let y=l.length,_=M.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],$=N("_A",r[0].dataType,h),w=Y("output",s,y),k=n($,w,c),T=k[2];for(let E=0,C=0;E<h;E++)m||c.indexOf(E)>=0?(a&&C++,T=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${$.indicesSet("input_indices",E,`j${E}`)}
                  ${T}
                }`):(S.push(`${$.indicesSet("input_indices",E,w.indicesGet("output_indices",C))};`),C++);return`

        ${b.registerUniform("output_size","u32").declareVariables($,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${T}
          ${k[3]}
          ${k.length===4?w.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ee(d,l)]})}},Hn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ke=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:Hn(i,r);e.compute(Rr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?io:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},ao=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},so=(e,t)=>{je(e.inputs),Ke(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},oo=(e,t)=>{je(e.inputs),Ke(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},uo=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},lo=(e,t)=>{je(e.inputs),Ke(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},po=(e,t)=>{je(e.inputs),Ke(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},co=(e,t)=>{je(e.inputs),Ke(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ho=(e,t)=>{je(e.inputs),Ke(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},fo=(e,t)=>{je(e.inputs),Ke(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},mo=(e,t)=>{je(e.inputs),Ke(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Xe=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},go=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?po(e,t):Ks(e,t)},yo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Xs(e,t)},_o=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Zs(e,t)},bo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Ys(e,t)},wo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):Qs(e,t)},$o=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?co(e,t):Js(e,t)},vo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ho(e,t):eo(e,t)},xo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fo(e,t):to(e,t)},So=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mo(e,t):ro(e,t)},To=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):no(e,t)}}),jn,ko,Io,Kn,wm=L(()=>{re(),xe(),Fn(),jn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},ko=(e,t)=>{jn(e.inputs);let r=(n,i,s)=>{let a=[];for(let u=0;u<n.rank;u++)(s.indexOf(u)>=0||s.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Rr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Io=(e,t)=>{jn(e.inputs);let r=(n,i,s)=>{let a=[];for(let u=0;u<n.rank;u++)(s.indexOf(u)>=0||s.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Rr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Kn=e=>me(e)}),Eo,Mr,zo,Co,Ao,nr,Oo,Ro,Xn=L(()=>{re(),ne(),Un(),ae(),Eo=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],u=e[5];if(a&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],h=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,m=c,y=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(c!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+m+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(a){if(m!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=a.dims[3])}let S=_+b,$=-1,w=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:c,vHiddenSize:y,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Mr=(e,t,r)=>t&&e?`
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
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,zo=(e,t,r,n,i,s,a,u)=>{let l=ve(a?1:s),d=64,h=s/l;h<d&&(d=32);let c=Math.ceil(s/l/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:h},{type:12,data:c}],y=ke(e.dataType,l),_=ze(1,l),b=["type"];a&&b.push("type"),u&&b.push("type");let S=$=>{let w=Y("x",e.dataType,e.dims,l),k=[w],T=a?N("seq_lens",a.dataType,a.dims):void 0;T&&k.push(T);let E=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;E&&k.push(E);let C=ze(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(A).declareVariables(...k)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Mr(T,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:m})}},Co=(e,t,r,n,i,s,a,u,l)=>{let d=a+s.kvSequenceLength,h=[s.batchSize,s.numHeads,s.sequenceLength,d],c=e>1&&n,m=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=c?[s.batchSize,m,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,S=ve(s.headSize),$=s.headSize/S,w=12,k={x:Math.ceil(d/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},T=[{type:12,data:s.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=c&&n&&M.size(n.dims)>0,C=["type","type"];E&&C.push("type"),i&&C.push("type"),u&&C.push("type"),l&&C.push("type");let A=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&A.push({dims:y,dataType:t.dataType,gpuDataType:0});let v=O=>{let U=N("q",t.dataType,t.dims,S),W=N("key",r.dataType,r.dims,S),H=[U,W];if(E){let D=N("past_key",n.dataType,n.dims,S);H.push(D)}i&&H.push(N("attention_bias",i.dataType,i.dims));let F=u?N("seq_lens",u.dataType,u.dims):void 0;F&&H.push(F);let R=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;R&&H.push(R);let X=Y("output",t.dataType,h),j=[X];c&&j.push(Y("present_key",t.dataType,y,S));let Q=ze(1,S),ce=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${U.type.storage}, ${w*w}>;
  ${O.registerUniforms(ce).declareVariables(...H,...j)}
  ${O.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Mr(F,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${X.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${i!==void 0};${n!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:A,dispatchGroup:k,programUniforms:T}),getShaderSource:v}},Ao=(e,t,r,n,i,s,a=void 0,u=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,h=i.vHiddenSize*d,c=e>1&&n,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=c?[i.batchSize,m,l,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,h],b=12,S={x:Math.ceil(i.vHeadSize/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],w=c&&n&&M.size(n.dims)>0,k=["type","type"];w&&k.push("type"),a&&k.push("type"),u&&k.push("type");let T=[{dims:_,dataType:t.dataType,gpuDataType:0}];c&&T.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=C=>{let A=N("probs",t.dataType,t.dims),v=N("v",r.dataType,r.dims),O=[A,v];w&&O.push(N("past_value",n.dataType,n.dims));let U=a?N("seq_lens",a.dataType,a.dims):void 0;a&&O.push(U);let W=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;u&&O.push(W);let H=[Y("output",t.dataType,_)];c&&H.push(Y("present_value",t.dataType,y));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${A.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${A.type.value}, ${b*b}>;
  ${C.registerUniforms(F).declareVariables(...O,...H)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Mr(U,W,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:$}),getShaderSource:E}},nr=(e,t,r,n,i,s,a,u,l,d,h=void 0,c=void 0)=>{let m=Math.min(e.outputCount,1+(a?1:0)+(u?1:0)),y=m>1?a:void 0,_=m>1?u:void 0,b=m>1?d.pastSequenceLength:0,S=b+d.kvSequenceLength,$=l&&M.size(l.dims)>0?l:void 0,w=[t,r];y&&M.size(y.dims)>0&&w.push(y),$&&w.push($),h&&w.push(h),c&&w.push(c);let k=e.compute(Co(m,t,r,y,$,d,b,h,c),{inputs:w,outputs:m>1?[-1,1]:[-1]})[0];e.compute(zo(k,d.batchSize,d.numHeads,b,d.sequenceLength,S,h,c),{inputs:h&&c?[k,h,c]:[k],outputs:[]});let T=[k,n];_&&M.size(_.dims)>0&&T.push(_),h&&T.push(h),c&&T.push(c),e.compute(Ao(m,k,n,_,d,b,h,c),{inputs:T,outputs:m>1?[0,2]:[0]})},Oo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,u={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let m=Y("output_q",l[0].dataType,r),y=Y("output_k",l[0].dataType,r),_=Y("output_v",l[0].dataType,r),b=N("input",l[0].dataType,l[0].dims),S=N("weight",l[1].dataType,l[1].dims),$=N("bias",l[2].dataType,l[2].dims),w=b.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${w}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${w}, ${a*a}>;
  var<workgroup> tileWeightK: array<${w}, ${a*a}>;
  var<workgroup> tileWeightV: array<${w}, ${a*a}>;
  ${c.registerUniforms(k).declareVariables(b,S,$,m,y,_)}
  ${c.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Ro=(e,t)=>{let r=Eo(e.inputs,t),[n,i,s]=Oo(e,r);return nr(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Mo,Bo,No,Do,$m=L(()=>{qe(),re(),ne(),xe(),ae(),Mo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((u,l)=>{if(u!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Bo=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?ve(s[s.length-1]):1,u=i==="NHWC"&&s.length>1?a:1,l=M.size(s)/a,d=n,h=d?s.length:s,c=N("x",e[0].dataType,e[0].dims,a),m=N("scale",e[1].dataType,e[1].dims,u),y=N("bias",e[2].dataType,e[2].dims,u),_=N("inputMean",e[3].dataType,e[3].dims,u),b=N("inputVar",e[4].dataType,e[4].dims,u),S=Y("y",e[0].dataType,h,a),$=()=>{let k="";if(n)k=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")k=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let T=1;T<m.rank;T++)k+=`cIndices[${T}] = outputIndices[${T}];`;k+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return k},w=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(c,m,y,_,b,S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${a}`)};
    ${$()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ee(s)]:[{type:12,data:l}]})}},No=e=>me(e),Do=(e,t)=>{let{inputs:r,outputCount:n}=e,i=No({...t,outputCount:n});if(_e.webgpu.validateInputContent&&Mo(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Bo(r,i))}}),Uo,Po,Lo,vm=L(()=>{ne(),ae(),Uo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Po=e=>{let t=e[0].dims,r=e[0].dims[2],n=M.size(t)/4,i=e[0].dataType,s=N("input",i,t,4),a=N("bias",i,[r],4),u=N("residual",i,t,4),l=Y("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Lo=e=>{Uo(e.inputs),e.compute(Po(e.inputs))}}),qo,fe,Wo,Vo,Go,Ho,Fo,jo,Ko,Xo,Zo,Yo,Qo,Jo,eu,tu,ir,ru,Br,nu,iu,au,su,ou,uu,lu,du,pu,cu,hu,fu,mu,gu,yu,_u,Zn,bu,Yn,Qn,wu,$u,vu,xu,Su,Tu,Jn=L(()=>{re(),ne(),xe(),ae(),qo=(e,t,r,n,i,s,a)=>{let u=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=N("inputData",r,[u],4),h=Y("outputData",n,[u],4),c=[{name:"vec_size",type:"u32"}];return a&&c.push(...a),`
      ${e.registerUniforms(c).declareVariables(d,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},fe=(e,t,r,n,i,s=e.dataType,a,u)=>{let l=[{type:12,data:Math.ceil(M.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>qo(d,M.size(e.dims),e.dataType,s,r,n,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(M.size(d[0].dims)/64/4)},programUniforms:l})}},Wo=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},Vo=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},Go=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},Ho=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},Fo=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},jo=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},Ko=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},Xo=e=>me(e),Zo=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Yo=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return me({min:t,max:r})},Qo=(e,t)=>{let r=t||Yo(e.inputs),n=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},Jo=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},eu=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},tu=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},ir=e=>me(e),ru=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Br=(e="f32")=>`
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
}`,nu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Br(t)))},iu=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},au=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},su=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Br(t)))},ou=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},uu=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},lu=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},du=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},pu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},cu=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},hu=e=>me(e),fu=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},mu=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},gu=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},yu=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},_u=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},Zn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,bu=e=>{e.compute(fe(e.inputs[0],"Tanh",Zn))},Yn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Zn("v")};
}
`,Qn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,wu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",Qn,Yn(t),void 0,e.inputs[0].dataType))},$u=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},vu=e=>{e.compute(fe(e.inputs[0],"Log","log"))},xu=(e,t)=>`
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
`,Su=e=>`quick_gelu_impl(${e})`,Tu=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",Su,xu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ku,Iu,Eu,xm=L(()=>{ne(),ae(),Jn(),ku=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Iu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),n=N("bias",e[0].dataType,[e[0].dims[2]],4),i=Y("output",e[0].dataType,t,4),s=M.size(t)/4,a=ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,n,i)}

  ${Br(a)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Eu=e=>{ku(e.inputs),e.compute(Iu(e.inputs))}}),zu,Cu,Ze,Au,Ou,Ru,Mu,Bu,Nu,Du,Uu,Pu,Lu,Sm=L(()=>{re(),ne(),ae(),zu=(e,t,r,n,i,s,a,u,l,d,h,c)=>{let m,y;typeof u=="string"?m=y=(w,k)=>`${u}((${w}),(${k}))`:typeof u=="function"?m=y=u:(m=u.scalar,y=u.vector);let _=Y("outputData",h,n.length,4),b=N("aData",l,t.length,4),S=N("bData",d,r.length,4),$;if(i)if(s){let w=M.size(t)===1,k=M.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||k?$=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):$=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(a||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(k,T,E="")=>{let C=`aData[indexA${T}][componentA${T}]`,A=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${_.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${k}[${T}] = ${E}(${m(C,A)});
          `};h===9?$=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,_)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Cu=(e,t,r,n,i,s,a=r.dataType)=>{let u=r.dims.map(Number),l=n.dims.map(Number),d=!M.areEqual(u,l),h=u,c=M.size(u),m=!1,y=!1,_=[d];if(d){let b=Gt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),c=M.size(h);let S=M.size(u)===1,$=M.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push($),_.push(w),_.push(k);let T=1;for(let E=1;E<h.length;E++){let C=u[u.length-E],A=l[l.length-E];if(C===A)T*=C;else break}T%4===0?(y=!0,m=!0):(S||$||w||k)&&(m=!0)}else m=!0;return _.push(m),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>zu(b,u,l,h,m,d,y,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:h,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(M.size(h)/4)},...ee(u,l,h)]})}},Ze=(e,t,r,n,i,s)=>{e.compute(Cu(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},Au=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Ou=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},Ru=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Mu=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},Bu=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},Nu=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},Du=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Uu=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Pu=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Lu=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),qu,Wu,Vu,Gu,Hu,Fu,Tm=L(()=>{re(),ne(),xe(),ae(),qu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,u)=>{if(u!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Wu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Vu=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Gu=(e,t,r,n)=>{let i=M.size(r),s=new Array(e.length),a=new Array(e.length),u=0,l=[],d=[],h=[{type:12,data:i}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],s[b]=u,d.push(e[b].dims.length),a[b]=N(`input${b}`,n,d[b]),l.push("rank"),h.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)h.push(...ee(e[b].dims));h.push(...ee(r));let c=Y("output",n,r.length),m=c.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...a,c)})()}

  ${Wu(s.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Vu(a,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:_}},Hu=(e,t)=>{let r=e.inputs,n=r[0].dims,i=M.normalizeAxis(t.axis,n.length);qu(r,i);let s=n.slice();s[i]=r.reduce((u,l)=>u+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(u=>M.size(u.dims)>0);e.compute(Gu(a,i,s,r[0].dataType),{inputs:a})},Fu=e=>me({axis:e.axis})}),zt,Ct,At,ei,Ot=L(()=>{re(),ne(),zt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ct=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},At=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ei=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[fs,ms];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ee,ju,ti=L(()=>{Ee=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ju=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ku,km=L(()=>{Ku=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ar,ri,ni=L(()=>{re(),ne(),ae(),Ot(),ar=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,u)=>`
      if (${J(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,J(i,u+s,n))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},ri=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,u=e[1].dims,l=a[a.length-2],d=u[u.length-1],h=a[a.length-1],c=ve(d),m=ve(h),y=ve(l),_=M.size(r)/c/y,b=e.length>2,S=n?n.slice(0,-2):r.slice(0,-2),$=[M.size(S),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:h}];Ct(t,w),w.push(...ee(S,a,u)),b&&w.push(...ee(e[2].dims)),w.push(...ee($));let k=T=>{let E=Vn("batch_dims",e[0].dataType,S.length),C=N("a",e[0].dataType,a.length,m),A=N("b",e[1].dataType,u.length,c),v=Y("output",e[0].dataType,$.length,c),O=ke(v.type.tensor),U=zt(t,v.type.value,O),W=[C,A],H="";if(b){let X=i?c:1;W.push(N("bias",e[2].dataType,e[2].dims.length,X)),H=`${i?`value += bias[col / ${X}];`:`value += ${v.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];At(t,F);let R=()=>{let X=`var a_data: ${C.type.value};`;for(let j=0;j<m;j++)X+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${c}];`;for(let j=0;j<y;j++){X+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${m}];`;for(let Q=0;Q<m;Q++)X+=`
            values[${j}] = fma(${A.type.value}(a_data${m===1?"":`[${Q}]`}), b_data${Q}, values[${j}]);
`}return X};return`
  ${T.registerUniforms(F).registerInternalVariables(E).declareVariables(...W,v)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${ar("a_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${ar("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${R()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${H}
      ${U}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${m};${y};${i}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:k}}}),Xu,Zu,ii,ai,Yu,si,Qu,Nr,oi=L(()=>{re(),ne(),ae(),Ot(),ni(),ti(),Xu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Zu=(e,t)=>e?`
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
        }`,ii=(e,t,r="f32",n,i=!1,s=32,a=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],h=i?l:s,c=i?s:l,m=h/t[0],y=s/t[1];if(!((i&&m===4&&e[1]===4||!i&&(m===3||m===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${h/m}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Xu(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Zu(i,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ai=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Yu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",si=(e,t,r="f32",n,i=!1,s=32,a=!1,u=32,l=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],c=i?d:s,m=i?s:d;if(!(m%t[1]===0&&c%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=m/t[1],_=c/t[0],b=s/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${ai(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ai(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Yu(i)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${c}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Qu=(e,t,r,n,i=!1)=>{let[s,a,u,l]=n,d=ke(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${ar("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${ar("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ee(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ee(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Nr=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,u=e[1].dims,l=a.slice(0,-2),d=u.slice(0,-2),h=n?n.slice(0,-2):r.slice(0,-2),c=M.size(h),m=a[a.length-2],y=a[a.length-1],_=u[u.length-1],b=y%4===0&&_%4===0,S=m<=8?[4,1,1]:[4,4,1],$=[8,8,1],w=[Math.ceil(_/$[0]/S[0]),Math.ceil(m/$[1]/S[1]),Math.ceil(c/$[2]/S[2])],k=b?4:1,T=[...l,m,y/k],E=T.length,C=[...d,y,_/k],A=C.length,v=[c,m,_/k],O=[{type:6,data:m},{type:6,data:_},{type:6,data:y}];Ct(t,O),O.push(...ee(h,T,C));let U=["rank","rank"],W=e.length>2;W&&(O.push(...ee(e[2].dims)),U.push("rank")),O.push(...ee(v));let H=F=>{let R=h.length,X=Vn("batchDims",e[0].dataType,R,1),j=ke(e[0].dataType),Q=N("a",e[0].dataType,E,k),ce=N("b",e[1].dataType,A,k),D=Y("result",e[0].dataType,v.length,k),te=[Q,ce];if(W){let pe=i?k:1;te.push(N("bias",e[2].dataType,e[2].dims.length,pe))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];At(t,P);let G=ke(D.type.tensor),Z=zt(t,D.type.value,G),q=Qu(k,W,Z,[X,Q,ce,D],i);return`
  ${F.registerUniforms(P).registerInternalVariables(X).declareVariables(...te,D)}
  ${q}
  ${b?ii(S,$,j,X):si(S,$,j,X)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${i}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:O}),getShaderSource:H}}}),Ju,el,Im=L(()=>{re(),st(),ae(),Ot(),ti(),km(),oi(),Ju=(e,t,r,n,i=!1,s,a=4,u=4,l=4,d="f32")=>{let h=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},c=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",$=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ee(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(a)}
    }
    return resData;`,k=e?t&&n?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ee(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ee(a,d)}(0.0);`,T=e?n&&r?c(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(u)}
    }
    return ${Ee(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(u)}
    }
    return ${Ee(u,d)}(0.0);`,E=Ee(l,d),C=Ee(e?a:u,d),A=Ee(e?u:a,d),v=zt(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?k:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?T:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${ju(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},el=(e,t,r,n,i,s,a,u,l)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],c=r[0],m=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(h%4===0||h%3===0)&&_%4===0,S=d?_:m*y,$=d?m*y:_,w=[8,8,1],k=n<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/w[0]/k[0]),Math.ceil($/w[1]/k[1]),Math.ceil(c/w[2]/k[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let E=b?d&&h%4!==0?3:4:1,C=w[1]*k[1],A=w[0]*k[0],v=Math.max(w[0]*E,w[1]),O=n%C===0,U=i%A===0,W=s%v===0,H=b?[E,4,4]:[1,1,1],F=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ct(t,F),F.push(...ee(e[0].dims,e[1].dims));let R=["rank","rank"];a&&(F.push(...ee(e[2].dims)),R.push("rank")),F.push(...ee(r));let X=j=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];At(t,Q);let ce=b?4:1,D=ke(e[0].dataType),te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${D}>`:D}) {
        result[flatIndex] = ${b?`vec4<${D}>`:D}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${D}>`:D}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,P=N("x",e[0].dataType,e[0].dims.length,E===3?1:E),G=N("w",e[1].dataType,e[1].dims.length,ce),Z=[P,G],q=Y("result",e[0].dataType,r.length,ce);if(a){let pe=N("bias",e[2].dataType,e[2].dims.length,ce);Z.push(pe),te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${D}>`:D} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Ku("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(Q).declareVariables(...Z,q)}
        ${te}
        ${Ju(d,O,U,W,a,t,H[0],H[1],H[2],D)}
        ${b?ii(k,w,D,void 0,!d,v):si(k,w,D,void 0,!d,v,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${O};${U};${W};${C};${A};${v}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:F}),getShaderSource:X}}}),tl,ui,sr,rl,li,nl,il,al,Em=L(()=>{re(),st(),ne(),ae(),Ot(),ti(),tl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ui=e=>typeof e=="number"?[e,e,e]:e,sr=(e,t)=>t<=1?e:e+(e-1)*(t-1),rl=(e,t,r,n=1)=>{let i=sr(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},li=(e,t,r,n,i)=>{i==null&&(i=rl(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},nl=(e,t,r,n,i,s,a,u,l,d)=>{let h,c,m,y;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=li([t,r,n,1],[u,l,d],1,[i,s,a],e);c=_[0],m=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,S,$)=>b===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=li([t,r,n,1],[u,l,d],1,[i,s,a],e[0]);c=_[0],m=_[1],y=_[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),m=Math.ceil(r/s),y=Math.ceil(n/a);let _=(c-1)*i+u-t,b=(m-1)*s+l-r,S=(y-1)*a+d-n,$=Math.floor(_/2),w=_-$,k=Math.floor(b/2),T=b-k,E=Math.floor(S/2),C=S-E;h={top:k,bottom:T,left:E,right:C,front:$,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:m,outWidth:y}},il=(e,t,r,n,i,s=!1,a="channelsLast")=>{let u,l,d,h,c;if(a==="channelsLast")[u,l,d,h,c]=e;else if(a==="channelsFirst")[u,c,l,d,h]=e;else throw new Error(`Unknown dataFormat ${a}`);let[m,,y,_,b]=t,[S,$,w]=ui(r),[k,T,E]=ui(n),C=sr(y,k),A=sr(_,T),v=sr(b,E),{padInfo:O,outDepth:U,outHeight:W,outWidth:H}=nl(i,l,d,h,S,$,w,C,A,v),F=s?m*c:m,R=[0,0,0,0,0];return a==="channelsFirst"?R=[u,F,U,W,H]:a==="channelsLast"&&(R=[u,U,W,H,F]),{batchSize:u,dataFormat:a,inDepth:l,inHeight:d,inWidth:h,inChannels:c,outDepth:U,outHeight:W,outWidth:H,outChannels:F,padInfo:O,strideDepth:S,strideHeight:$,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:A,effectiveFilterWidth:v,dilationDepth:k,dilationHeight:T,dilationWidth:E,inShape:e,outShape:R,filterShape:t}},al=(e,t,r,n,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,$)=>$)},d=[Math.ceil(tl(l.x.map(S=>r[S]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let h=1,c=M.size(r),m=[{type:12,data:c},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ct(t,m),m.push(...ee(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(m.push(...ee(e[2].dims)),y.push("rank")),m.push(...ee(r));let b=S=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];At(t,$);let w=1,k=ke(e[0].dataType),T=N("x",e[0].dataType,e[0].dims.length,h),E=N("W",e[1].dataType,e[1].dims.length,w),C=[T,E],A=Y("result",e[0].dataType,r.length,w),v="";if(_){let W=N("bias",e[2].dataType,e[2].dims.length,w);C.push(W),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${a?J("coords",4,5):J("coords",1,5)}];
        }`}let O=Ee(h,k),U=zt(t,O,k);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms($).declareVariables(...C,A)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${J("coords",0,T.rank)};
              let d2 = ${a?J("coords",T.rank-1,T.rank):J("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${a?J("coords",1,T.rank):J("coords",2,T.rank)},
              ${a?J("coords",2,T.rank):J("coords",3,T.rank)},
              ${a?J("coords",3,T.rank):J("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?J("uniforms.x_shape",1,T.rank):J("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${a?J("uniforms.x_shape",2,T.rank):J("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${a?J("uniforms.x_shape",3,T.rank):J("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${a?J("uniforms.x_shape",4,T.rank):J("uniforms.x_shape",1,T.rank)};
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
                      ${a?`let xValues = vec4<f32>(
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
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
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
                      ${a?`let xValues = vec3<f32>(
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
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${U}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${h};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:b}}}),sl,ol,zm=L(()=>{re(),ne(),ae(),Ot(),sl=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],h=d/t.group,c=l&&h>=4?ve(d):1,m=M.size(r)/c,y=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Ct(t,y),y.push(...ee(a,[u[0],u[1],u[2],u[3]/c]));let _=i?["rank","rank","rank"]:["rank","rank"];y.push(...ee([r[0],r[1],r[2],r[3]/c]));let b=S=>{let $=Y("output",e[0].dataType,r.length,c),w=ke($.type.tensor),k=zt(t,$.type.value,w),T=N("x",e[0].dataType,a.length),E=N("w",e[1].dataType,u.length,c),C=[T,E];i&&C.push(N("b",e[2].dataType,e[2].dims,c));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];At(t,A);let v=l?`
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
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...C,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${v}
    ${s}
    ${k}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:b}},ol=(e,t,r,n)=>{let i=e.length>2,s=ve(r[3]),a=ve(r[2]),u=M.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[r[0],r[1],r[2],r[3]/s],c=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ct(t,c),c.push(...ee(l,d,h));let m=(a-1)*t.strides[1]+d[1],y=_=>{let b=Y("output",e[0].dataType,h.length,s),S=ke(b.type.tensor),$=zt(t,b.type.value,S),w=N("x",e[0].dataType,l.length,s),k=N("w",e[1].dataType,d.length,s),T=[w,k];i&&T.push(N("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return At(t,C),`
  ${_.registerUniforms(C).declareVariables(...T,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${m}>;
    var values: array<${b.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${$}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${m};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:y}}}),ul,Dr,ll,Ur,di,pi,dl,pl,ci,Cm=L(()=>{ne(),Im(),Em(),oi(),zm(),Ot(),ni(),ht(),ul=(e,t,r,n,i,s)=>{let a=e[0],u=e.slice(s?1:2,s?3:4),l=u.length,d=t[0],h=t.slice(2).map((m,y)=>m+(m-1)*(r[y]-1)),c=u.map((m,y)=>m+n[y]+n[y+l]).map((m,y)=>Math.floor((m-h[y]+i[y])/i[y]));return c.splice(0,0,a),c.splice(s?3:1,0,d),c},Dr=[2,3,1,0],ll=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ur=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();zr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},di=e=>{let t=ei(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},pi=(e,t,r,n)=>{let i=r.format==="NHWC",s=ul(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let C=[t[0]];if(i){let A=e.kernelCustomData.wT??e.compute(De(t[1],Dr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),C.push(A)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ol(C,r,s,n),{inputs:C}):e.compute(sl(C,r,s,n),{inputs:C});return}let a=t.length===3,u=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],m=s[i?1:2],y=s[i?2:3],_=s[i?3:1],b=i&&h===u&&c===l&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&c===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=s[0],A,v,O,U=[];if(i){let F=e.kernelCustomData.wT??e.compute(De(t[1],Dr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),b){let R=u*l*d;A=t[0].reshape([1,C,R]),v=F.reshape([1,R,_]),O=[1,C,_]}else A=t[0].reshape([C,u*l,d]),v=F.reshape([1,d,_]),O=[C,m*y,_];U.push(A),U.push(v)}else A=t[0].reshape([C,d,u*l]),v=t[1].reshape([1,_,d]),O=[C,_,m*y],U.push(v),U.push(A);a&&U.push(t[2]);let W=O[2],H=U[0].dims[U[0].dims.length-1];W<8&&H<8?e.compute(ri(U,r,s,O,i,n),{inputs:U}):e.compute(Nr(U,r,s,O,i,n),{inputs:U});return}let S=!0,$=e.kernelCustomData.wT??e.compute(De(t[1],Dr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let w=[t[0],$];a&&w.push(t[2]);let k=i?m*y:_,T=i?_:m*y,E=h*c*d;e.compute(el(w,r,s,k,T,E,a,S,n),{inputs:w})},dl=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Ur({...t,pads:i,strides:s,dilations:a,kernelShape:u},n);pi(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},pl=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Ur(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=il(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(al(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},ci=(e,t)=>{if(ll(e.inputs,t),e.inputs[0].dims.length===3)dl(e,t);else if(e.inputs[0].dims.length===5)pl(e,e.inputs,t);else{let r=Ur(t,e.inputs);pi(e,e.inputs,r)}}}),cl,Am=L(()=>{re(),st(),ne(),ae(),cl=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,u=e[1].dims,l=u[2]/a,d=u[3],h=s?ve(l):1,c=s&&d===1&&l>=4,m=c?Math.floor(l/4)*4:Math.floor(l/h)*h,y=l-m,_=s?ve(d):1,b=s?d===1?h:_:1,S=M.size(i)/_,$=[Math.ceil(S/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let w=["rank","rank"],k=[t.strides[0],t.strides[1]],T=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],C=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],A=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:S},{type:12,data:k},{type:12,data:T},{type:12,data:E},{type:12,data:C},{type:6,data:A},{type:12,data:m},{type:12,data:l},{type:12,data:d},...ee(e[0].dims,e[1].dims)];n&&(v.push(...ee(e[2].dims)),w.push("rank")),v.push(...ee(i));let O=U=>{let W=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:k.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],H=ke(e[0].dataType),F=s?1:2,R=s?2:3,X=s?3:1,j=N("W",e[1].dataType,e[1].dims.length,b),Q=N("Dy",e[0].dataType,e[0].dims.length,h),ce=[Q,j];n&&ce.push(N("bias",e[2].dataType,[i[X]].length,_));let D=Y("result",e[0].dataType,i.length,_),te=()=>{let Z="";if(c)h===4?Z+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?Z+=`
          dotProd = dotProd + dot(vec4<${H}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${H}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${H}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${H}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${s?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,h===1)Z+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<h;q++)Z+=`
            let wValue${q} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return Z},P=()=>{if(y===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let Z="";if(h===1){Z+="dotProd = dotProd";for(let q=0;q<y;q++)Z+=`
            + ${Q.getByOffset(`x_offset + ${q}`)} * ${j.getByOffset(`w_offset + ${q}`)}`;Z+=";"}else if(h===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Z+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},G=`
            let outputIndices = ${D.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${D.indicesGet("outputIndices",0)};
            let d1 = ${D.indicesGet("outputIndices",X)};
            let r = ${D.indicesGet("outputIndices",F)};
            let c = ${D.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${D.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${H}(dyRCorner) + ${H}(wR)) / ${H}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${H}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${H}(dyCCorner) + ${H}(wC)) / ${H}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${H}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${te()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${_}]`:""};
            ${D.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(W).declareVariables(...ce,D)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${G}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${b}${_}${c}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:O}}}),hl,fl,ml,hi,gl,yl,fi,_l,bl,Om=L(()=>{Am(),Ot(),ht(),hl=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,fl=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},ml=(e,t,r,n,i,s,a,u,l,d)=>{let h=e.length-2,c=d.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let m=e[0],y=t[u?3:1]*i;for(let _=0,b=e.length-h-(u?1:0);_<h;++_,++b){let S=e[b],$=c?S*a[_]:d[_],w=hl(S,a[_],s[_],t[b],r[_],$);fl(w,n,s,_,_+h),c&&d.push(a[_]*(S-1)+l[_]+(t[b]-1)*r[_]+1-s[_]-s[_+h])}d.splice(0,0,m),d.splice(u?3:1,0,y)},hi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,m)=>c*m,1)===0){r.length=0;for(let c=2;c<t[1].dims.length;++c)r.push(t[1].dims[c])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((c,m)=>c+m,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}let d=e.strides.slice();if(d.reduce((c,m)=>c+m,0)===0){let c=t[0].dims.length-2;d=new Array(c).fill(1)}ml(u,r,l,e.autoPad,e.group,i,d,n,a,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),h},gl=e=>{let t=ei(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:h,outputShape:c,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},yl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,u)=>a+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,u)=>a+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,u)=>a+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,u)=>a+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},fi=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(De(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(cl(s,r,n),{inputs:s})},_l=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=hi({...t,pads:u,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);fi(e,n,d,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},bl=(e,t)=>{if(yl(e.inputs,t),e.inputs[0].dims.length===3)_l(e,t);else{let r=hi(t,e.inputs);fi(e,e.inputs,r)}}}),wl,$l,vl,Rm=L(()=>{re(),ne(),xe(),ae(),wl=(e,t,r,n)=>{let i=M.size(t),s=t.length,a=N("input",e,s),u=Y("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=M.normalizeAxis(l,s),h=c=>{let m=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,y=J("uniforms.input_shape","uniforms.axis",s),_=n.reverse?m+(n.exclusive?" + 1":""):"0",b=n.reverse?y:m+(n.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,u)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ee(t,t)]}),getShaderSource:h}},$l=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(wl(n,r,i,t),{inputs:[0]})},vl=e=>{let t=e.exclusive===1,r=e.reverse===1;return me({exclusive:t,reverse:r})}}),xl,Sl,Tl,kl,Il,Mm=L(()=>{re(),ne(),xe(),ae(),xl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Sl=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Tl=(e,t)=>{let r,n,i,s,a,u,l=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=h?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],u=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=h?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],u=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(a),m=c.dims.length,y=e.dataType,_=N("a",y,m),b=Y("output",y,m),S=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Sl(u,m,_,b)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let w=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],k=M.size(w),T=c.dims,E=M.sortBasedOnPerm(T,u);return{outputs:[{dims:w,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...ee(T,E)]}},getShaderSource:S}},kl=(e,t)=>{xl(e.inputs),e.compute(Tl(e.inputs[0],t))},Il=e=>me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Pr,or,mi,El,zl,Cl,Al,gi,Ol,Rl,Ml,Bm=L(()=>{re(),ne(),xe(),ae(),Pr="[a-zA-Z]|\\.\\.\\.",or="("+Pr+")+",mi="^"+or+"$",El="("+or+",)*"+or,zl="^"+El+"$",Cl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Al=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(zl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let u=e[a].dims.slice();if(!s.match(RegExp(mi)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,u,a);this.lhs.push(l)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!n.match(RegExp(or)))throw new Error("Invalid RHS");(i=n.match(RegExp(Pr,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],u=0;if(!e.match(RegExp(mi))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Pr,"g")),d=new Cl(n);return l==null||l.forEach((h,c)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let m=i-l.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(u,u+m),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<a.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,c+y),this.addSymbol(_,r[u++],n)}}else d.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[u++],n)}),d}},gi=e=>e+"_max",Ol=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,h)=>N(`input${h}`,t,d)),s=M.size(n),a=Y("output",t,n.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let h=[],c="var prod = 1.0;",m="var sum = 0.0;",y="sum += prod;",_=[],b=[],S=[],$=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,E)=>{var C;if(r.rhs.symbolToIndices.has(E)){let A=(C=r.rhs.symbolToIndices.get(E))==null?void 0:C[0];A!==void 0&&r.lhs.forEach((v,O)=>{if(T.inputIndices.includes(O)){let U=v.symbolToIndices.get(E);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(W=>{h.push(`${i[O].indicesSet(`input${O}Indices`,W,a.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,v)=>{if(T.inputIndices.includes(v)){let O=A.symbolToIndices.get(E);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(U=>{_.push(`${i[v].indicesSet(`input${v}Indices`,U,`${E}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${gi(E)}; ${E}++) {`),S.push("}")});let k=w?[...h,`let sum = ${i.map((T,E)=>T.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...h,m,...b,..._,c,...$,y,...S];return`
            ${d.registerUniforms(u.map(T=>({name:`${gi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((T,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(c=>r.symbolToInfo.has(c)).map(c=>{var m;return{type:12,data:((m=r.symbolToInfo.get(c))==null?void 0:m.dimValue)||0}});d.push({type:12,data:s});let h=e.map((c,m)=>[...ee(c)]).reduce((c,m)=>c.concat(m),d);return h.push(...ee(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:l}},Rl=(e,t)=>{let r=new Al(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Ol(i,e.inputs[0].dataType,r,n))},Ml=e=>{let t=e.equation.replace(/\s+/g,"");return me({equation:t})}}),Bl,yi,Nl,Dl,Ul,Nm=L(()=>{re(),ne(),ae(),Bl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},yi=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},Nl=(e,t)=>e.length>t.length?yi(e,t):yi(t,e),Dl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=Nl(t,r),i=e[0].dataType,s=i===9||M.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(M.size(n)/u),d=c=>{let m=N("input",i,t.length,a),y=Y("output",i,n.length,u),_;if(i===9){let b=(S,$,w="")=>`
          let outputIndices${$} = ${y.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${m.broadcastedIndicesToOffset(`outputIndices${$}`,y)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${S}[${$}] = ${w}(${m.getByOffset(`index${$}`)}[component${$}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${m.getByOffset(`inputOffset / ${a}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(m,y)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},h=[{type:12,data:l},...ee(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},Ul=e=>{Bl(e.inputs),e.compute(Dl(e.inputs),{inputs:[0]})}}),Pl,Ll,Dm=L(()=>{re(),ne(),ae(),Jn(),Pl=e=>{let t=e[0].dataType,r=M.size(e[0].dims),n=M.size(e[1].dims),i=n%4===0,s=a=>{let u=N("x",t,[1],4),l=N("bias",t,[1],4),d=Y("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,m=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(h).declareVariables(u,l,d)}

    ${Yn(ze(t))}

    ${a.mainStart(Ht)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Qn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/Ht/4)}})}},Ll=e=>{e.inputs.length<2||M.size(e.inputs[1].dims)===0?wu(e):e.compute(Pl(e.inputs))}}),ql,Wl,Vl,Gl,Um=L(()=>{re(),ne(),xe(),ae(),ql=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Wl=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=M.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let u=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(M.size(a)/l),h=[{type:12,data:d},{type:6,data:u},{type:12,data:s},...ee(e[0].dims,e[1].dims,a)],c=m=>{let y=N("data",e[0].dataType,e[0].dims.length,l),_=N("inputIndices",e[1].dataType,e[1].dims.length),b=Y("output",e[0].dataType,a.length,l),S=w=>{let k=n.length,T=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let E=0;E<k;E++)T+=`${k>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${a.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;T+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let E=0,C=0;E<i;E++)E===s?(T+=`${i>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,C+=k):(T+=`${i>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${a.length>1?`outputIndices${w}[${C}]`:`outputIndices${w}`};`,C++);return T},$;if(e[0].dataType===9){let w=(k,T,E="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${y.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${k}[${T}] = ${E}(${y.getByOffset(`index${T}`)}[component${T}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:c}},Vl=e=>me({axis:e.axis}),Gl=(e,t)=>{let r=e.inputs;ql(r),e.compute(Wl(e.inputs,t))}}),Hl,Fl,jl,Pm=L(()=>{re(),ne(),ae(),Hl=(e,t,r,n,i,s,a,u,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:u},{type:12,data:l}],h=[s];d.push(...ee(t.dims,h));let c=m=>{let y=N("indices_data",t.dataType,t.dims.length),_=Y("input_slice_offsets_data",12,1,1),b=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(S).declareVariables(...b)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Fl=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],u=M.sizeToDimension(s,s.length-1),l=M.sizeFromDimension(n,t.batchDims+a),d=M.sizeToDimension(n,t.batchDims),h=M.sizeFromDimension(n,t.batchDims),c=u/d,m=new Array(a),y=l;for(let T=0;T<a;++T)m[a-1-T]=y,y*=n[t.batchDims+a-1-T];let _=Hl(e,r[1],m,t.batchDims,n,u,c,h,a),b=t.batchDims+a;if(b>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=s.slice(0,-1).concat(n.slice(b)),$=M.size(S),w=[{type:12,data:$},{type:12,data:l},...ee(r[0].dims,_.dims,S)],k=T=>{let E=N("data",r[0].dataType,r[0].dims.length),C=N("slice_offsets",12,_.dims.length),A=Y("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,C,A)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:w}),getShaderSource:k},{inputs:[r[0],_]})},jl=e=>({batchDims:e.batch_dims,cacheKey:""})}),Kl,Xl,Zl,Yl,Lm=L(()=>{re(),ne(),xe(),ae(),Kl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=M.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((u,l)=>l===r?Math.ceil(u/n)===s.dims[l]:u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((u,l)=>u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Xl=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=M.normalizeAxis(t.gatherAxis,i),a=M.normalizeAxis(t.quantizeAxis,i),u=r.slice(0);u.splice(s,1,...n);let l=M.size(u),d=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ee(...e.map((y,_)=>y.dims),u)],m=y=>{let _=N("data",e[0].dataType,e[0].dims.length),b=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),$=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=Y("output",d,u.length),k=[_,b,S];$&&k.push($);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(T).declareVariables(...k,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:m}},Zl=(e,t)=>{let r=e.inputs;Kl(r,t),e.compute(Xl(e.inputs,t))},Yl=e=>me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Ql,Jl,ed,td,qm=L(()=>{re(),ne(),xe(),ae(),Ql=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Jl=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,u=M.normalizeAxis(t.axis,i),l=r[u],d=s.slice(0),h=M.size(d),c=N("input",n,i),m=N("indicesInput",a,s.length),y=Y("output",n,d.length),_=[{type:12,data:h},{type:6,data:l},{type:12,data:u}];return _.push(...ee(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,m,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},ed=e=>me({axis:e.axis}),td=(e,t)=>{let r=e.inputs;Ql(r),e.compute(Jl(e.inputs,t))}}),rd,nd,id,ad,Wm=L(()=>{re(),ne(),ae(),rd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},nd=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=hs.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),u=[i,s];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),h=Math.ceil(i/l),c=!0,m=M.size(u),y=[{type:12,data:c?d:m},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...ee(e[2].dims)),_.push("rank")),y.push(...ee(u));let b=$=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",T=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),C=T.type.value,A=null,v=[T,E];e.length===3&&(A=N("c",e[2].dataType,e[2].dims.length),v.push(A));let O=Y("output",e[0].dataType,u.length);v.push(O);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(U).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${k}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${C}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=$=>{let w=N("a",e[0].dataType,e[0].dims),k=N("b",e[1].dataType,e[1].dims),T=null,E=[w,k];e.length===3&&(T=N("c",e[2].dataType,e[2].dims.length),E.push(T));let C=Y("output",e[0].dataType,u.length);E.push(C);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:b}},id=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ad=(e,t)=>{rd(e.inputs),e.compute(nd(e.inputs,t))}}),Je,ot,Rt,Mt,sd,od,ud,ld,dd,pd,cd,hd,fd,md,Vm=L(()=>{re(),ne(),xe(),ae(),[Je,ot,Rt,Mt]=[0,1,2,3],sd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},od=`
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
`,ud=e=>`
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
`,ld=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,dd=e=>`
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
`,pd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Je}] = batch;
     indices[${ot}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Rt}] = u32(r);
            indices[${Mt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Rt}] = u32(clamp(r, 0, H - 1));
          indices[${Mt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Rt}] = gs_reflect(r, border[1], border[3]);
          indices[${Mt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,cd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Je}], indices[${ot}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Je}], indices[${ot}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Je}], indices[${ot}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Je}], indices[${ot}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Je}], indices[${ot}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Je}], indices[${ot}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,hd=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=N("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Je,ot,Rt,Mt]=[0,3,1,2]);let a=Y("output",e[0].dataType,s.length),u=r.type.value,l=M.size(s),d=[{type:12,data:l},...ee(e[0].dims,n,s)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${od}
  ${ud(u)}
  ${ld(t)}
  ${dd(t)}
  ${pd(r,u,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Rt}]);
      let W_in = i32(uniforms.x_shape[${Mt}]);

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

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Je}], indices[${Rt}], indices[${Mt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${cd(a,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let m=M.size(s);return{outputs:[{dims:s,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:h}},fd=(e,t)=>{sd(e.inputs),e.compute(hd(e.inputs,t))},md=e=>me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ce,gd,yd,_i,_d,ur,bd,wd=L(()=>{re(),ne(),xe(),Un(),Xn(),ae(),ht(),Ce=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,gd=(e,t)=>{let r=e[0],n=Ce(e,1),i=Ce(e,2),s=Ce(e,3),a=Ce(e,4),u=Ce(e,5),l=Ce(e,6),d=Ce(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],c=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=c,_=0,b=0,S=Math.floor(m/t.numHeads);if(l&&d&&M.size(l.dims)&&M.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&M.size(l.dims)||d&&M.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(n&&M.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,y=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,y=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,y=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(s&&M.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,k=0;if(a&&M.size(a.dims)>0){k=8;let A=a.dims;throw A.length===1?A[0]===h?k=1:A[0]===3*h+2&&(k=3):A.length===2&&A[0]===h&&A[1]===w&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,E=m;if(i&&M.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(y!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(y!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],T=!0}}let C=!1;if(a&&M.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(u&&M.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[2]!==c||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:m,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:C,passPastInKv:T,qkvFormat:$}},yd=e=>me({...e}),_i=me({perm:[0,2,1,3]}),_d=(e,t,r,n,i,s,a)=>{let u=[n,i,s],l=M.size(u),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],h=c=>{let m=Y("qkv_with_bias",t.dataType,u),y=N("qkv",t.dataType,u),_=N("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(b).declareVariables(y,_,m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},ur=(e,t,r,n,i,s,a,u)=>{let l=s;if(a&&M.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=_d(e,s,a,t,n,r*i,u),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(De(l,_i.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(De(l,_i.perm),{inputs:[l],outputs:[-1]})[0]},bd=(e,t)=>{let r=gd(e.inputs,t),n=e.inputs[0],i=Ce(e.inputs,1),s=Ce(e.inputs,2),a=Ce(e.inputs,3),u=Ce(e.inputs,4),l=Ce(e.inputs,5),d=Ce(e.inputs,6),h=Ce(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&s&&i.dims.length===4&&s.dims.length===4,m=ur(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(c)return nr(e,m,i,s,u,void 0,d,h,l,r);if(!i||!s)throw new Error("key and value must be provided");let y=ur(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),_=ur(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);nr(e,m,y,_,u,void 0,d,h,l,r)}}),$d,vd,xd,Sd,bi,Td,kd,Id=L(()=>{re(),ne(),xe(),ae(),$d=e=>{if(!e||e.length<1)throw new Error("too few inputs")},vd=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),me({numOutputs:n,axis:t.axis,splitSizes:r})},xd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${J("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Sd=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},bi=(e,t)=>{let r=e[0].dims,n=M.size(r),i=e[0].dataType,s=M.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),u=N("input",i,r.length),l=new Array(t.numOutputs),d=[],h=[],c=0,m=[{type:12,data:n}];for(let _=0;_<t.numOutputs;_++){c+=t.splitSizes[_],l[_]=c;let b=r.slice();b[s]=t.splitSizes[_],h.push(b),a[_]=Y(`output${_}`,i,b.length),d.push({dims:h[_],dataType:e[0].dataType})}m.push({type:12,data:l},...ee(r,...h));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...a)}
  ${xd(l.length)}
  ${Sd(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${J("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m})}},Td=(e,t)=>{$d(e.inputs);let r=e.inputs.length===1?t:vd(e.inputs,t);e.compute(bi(e.inputs,r),{inputs:[0]})},kd=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return me({axis:t,numOutputs:n,splitSizes:r})}}),Ed,Lr,zd,Cd=L(()=>{re(),ne(),xe(),ae(),Ed=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!M.areEqual(n.dims,[])&&!M.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!M.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],h=i.dims[0],c=M.sizeFromDimension(r.dims,1)/d,m=u===0?i.dims[1]*2:c/a;if(u>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(m/2!==i.dims[1]&&u/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Lr=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],u=M.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,h=e[2].dims[1],c=i===0?h*2:d/n,m=new Array(a,l,d/c,c-h),y=M.computeStrides(m),_=[{type:1,data:s},{type:12,data:m},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,d,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,c,l*c,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let $=N("input",e[0].dataType,e[0].dims.length),w=N("position_ids",e[1].dataType,e[1].dims.length),k=N("cos_cache",e[2].dataType,e[2].dims.length),T=N("sin_cache",e[3].dataType,e[3].dims.length),E=Y("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables($,w,k,T,E)}

        ${S.mainStart(Ht)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",Y("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(m)/Ht)},programUniforms:_})}},zd=(e,t)=>{Ed(e.inputs,t),e.compute(Lr(e.inputs,t))}}),Ad,Od,wi,Rd,Md,Gm=L(()=>{xe(),re(),Xn(),wd(),Id(),ht(),Cd(),ae(),Ad=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],h=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],c=d,m=0,y=!n||n.dims.length===0,_=Math.floor(y?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);y&&(h=_*t.numHeads);let b=s&&s.dims.length!==0,S=a&&a.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=s.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let w=0,k=!1,T=t.kvNumHeads?_*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=E.dims.reduce((A,v)=>A*v,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:_,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:$}},Od=me({perm:[0,2,1,3]}),wi=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(De(n,Od.perm),{inputs:[n],outputs:[-1]})[0]),n},Rd=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=h=>{let c=N("seq_lens",r.dataType,r.dims),m=N("total_seq_lens",n.dataType,n.dims),y=Y("pos_ids",i,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(c,m,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${c.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Md=(e,t)=>{var T;let r=Ad(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,c=me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[m,y,_]=!i&&!s?e.compute(bi([n],c),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],b,S;if(t.doRotary){let E=e.compute(Rd(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],C=e.inputs[7],A=e.inputs[8],v=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[m,E,C,A],U=[-1];b=e.compute(Lr(O,v),{inputs:O,outputs:U})[0],O.splice(0,1,y);let W=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(Lr(O,W),{inputs:O,outputs:U})[0]}let $=ur(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:m,void 0,0),w=wi(e,t.doRotary?S:y,r),k=wi(e,_,r);nr(e,$,w,k,void 0,void 0,a,u,void 0,r,l,d)}}),$i,Bd,Nd,Dd,Hm=L(()=>{re(),ne(),ht(),ae(),$i=(e,t,r,n,i,s,a,u)=>{let l=ve(s),d=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,c=i*a,m=64;c===1&&(m=256);let y=[i,a,s/l],_=[i,a,2],b=["rank","type","type"],S=[];S.push(...ee(y,_));let $=w=>{let k=N("x",t.dataType,3,l),T=N("scale",r.dataType,r.dims),E=N("bias",n.dataType,n.dims),C=Y("output",1,3,2),A=[k,T,E,C];return`
  var<workgroup> workgroup_shared : array<${h}, ${m}>;
  const workgroup_size = ${m}u;
  ${w.declareVariables(...A)}
  ${w.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ct("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ct("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${m}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:c},programUniforms:S}),getShaderSource:$},{inputs:[t,r,n],outputs:[-1]})[0]},Bd=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],u=n[1],l=M.sizeFromDimension(n,s),d=ve(l),h=M.size(i)/d,c=$i(e,t[0],t[1],t[2],a,l,u,r.epsilon),m=[a,u,l/d],y=[a,u],_=["type","none"],b=S=>{let $=N("x",t[0].dataType,m.length,d),w=N("scale_shift",1,y.length,2),k=Y("output",t[0].dataType,m.length,d),T=[$,w,k];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ee(m,y,m)]}),getShaderSource:b},{inputs:[t[0],c]})},Nd=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],u=M.sizeFromDimension(n,1)/a,l=ve(a),d=M.size(i)/l,h=[{type:12,data:u},{type:12,data:Math.floor(a/l)}],c=["type","type"],m=!1,y=[0,n.length-1];for(let $=0;$<n.length-2;$++)m=m||n[$+1]!==1,y.push($+1);m=m&&n[n.length-1]!==1;let _=m?e.compute(De(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},($,w)=>n[y[w]])),b=$i(e,_,t[1],t[2],s,u,a,r.epsilon),S=$=>{let w=ke(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,T=A=>{let v=A===0?"x":"y",O=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${O}(scale.${v}))`;case 2:return`vec2<${w}>(${O}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${w}>(${O}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=N("input",t[0].dataType,t[0].dims,l),C=Y("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:S},{inputs:[t[0],b]})},Dd=(e,t)=>{t.format==="NHWC"?Nd(e,e.inputs,t):Bd(e,e.inputs,t)}}),Ud,Pd,Ld,Fm=L(()=>{re(),ne(),ae(),Ud=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Pd=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],u=i,l=M.normalizeAxis(t.axis,i.length),d=M.sizeToDimension(i,l),h=M.sizeFromDimension(i,l),c=M.size(s.dims),m=a?M.size(a.dims):0;if(c!==h||a&&m!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${m}`);let y=[];for(let E=0;E<i.length;++E)E<l?y.push(i[E]):y.push(1);let _=ve(h),b=["type","type"],S=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/_)},{type:1,data:t.epsilon}];a&&b.push("type");let $=r>1,w=r>2,k=E=>{let C=ke(e[0].dataType),A=[N("x",e[0].dataType,e[0].dims,_),N("scale",s.dataType,s.dims,_)];a&&A.push(N("bias",a.dataType,a.dims,_)),A.push(Y("output",e[0].dataType,u,_)),$&&A.push(Y("mean_data_output",1,y)),w&&A.push(Y("inv_std_output",1,y));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Wn("f32",_)};
    var mean_square_vector = ${Wn("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ft(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ct("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ct("mean_square_vector",_)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ft(C,_,"x[j + offset]")};
      let f32scale = ${Ft(C,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Ft(C,_,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:u,dataType:e[0].dataType}];return $&&T.push({dims:y,dataType:1}),w&&T.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${n}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:k}},Ld=(e,t)=>{Ud(e.inputs),e.compute(Pd(e.inputs,t,e.outputCount))}}),qd,Wd,jm=L(()=>{ne(),ni(),oi(),qd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Wd=e=>{qd(e.inputs);let t=Gt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(ri(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=M.size(e.inputs[0].dims.slice(0,-2)),a=M.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let u=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],h=[u,l];e.compute(Nr(h,{activation:""},t,d),{inputs:h})}else e.compute(Nr(e.inputs,{activation:""},t))}}}),Vd,Gd,Hd,Fd,jd,Km=L(()=>{re(),ne(),xe(),ae(),Vd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!M.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(M.size(u)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(M.size(l)!==d)throw new Error("zeroPoints input size error.")}},Gd=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,u=r.slice(0,n-2),l=M.size(u),d=e[1].dims[2]/4,h=e[0].dataType,c=ve(t.k),m=ve(d),y=ve(a),_=u.concat([i,a]),b=i>1&&a/y%2===0?2:1,S=M.size(_)/y/b,$=64,w=[],k=[l,i,s/c],T=M.convertShape(e[1].dims).slice();T.splice(-1,1,d/m),w.push(...ee(k)),w.push(...ee(T)),w.push(...ee(e[2].dims)),e.length===4&&w.push(...ee(M.convertShape(e[3].dims)));let E=[l,i,a/y];w.push(...ee(E));let C=A=>{let v=k.length,O=N("a",e[0].dataType,v,c),U=N("b",12,T.length,m),W=N("scales",e[2].dataType,e[2].dims.length),H=[O,U,W],F=e.length===4?N("zero_points",12,e[3].dims.length):void 0;F&&H.push(F);let R=E.length,X=Y("output",e[0].dataType,R,y),j=ke(e[0].dataType),Q=(()=>{switch(c){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${c}-component is not supported.`)}})(),ce=Math.floor(32/t.bits),D=Math.floor(ce/8),te=()=>{let Z="";for(let q=0;q<D;q++){let pe=q*t.bits*4,Ue=pe+t.bits;Z+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${Q};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/c}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${O.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let Se=0;Se<y*b;Se++)Z+=`
            b_value = ${m===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${pe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ue}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(Oe,Re)=>`${j}(b_value_lower[${Re}]), ${j}(b_value_upper[${Re}])`).join(", ")});
            b_dequantized_values = ${c===1?`${Q}(${Array.from({length:8},(Oe,Re)=>`(b_quantized_values[${Re}] - ${F?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${F?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Se/y)}]${y>1?`[${Se%y}]`:""} += ${Array.from({length:8/c},(Oe,Re)=>`${c===1?`a_data${q>0?q:""}[${Re}] * b_dequantized_values[${Re}]`:`dot(a_data${q>0?q:""}[${Re}], b_dequantized_values[${Re}])`}`).join(" + ")};
          `}return Z},P=()=>{let Z=`
            var col_index = col * ${y};
            ${F?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<y*b;q++)Z+=`
            let scale${q} = ${W.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},G=()=>{let Z=`col_index = col * ${y};`;for(let q=0;q<y*b;q++)Z+=`
            let b${q}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,Z};return`
        var<workgroup> workgroup_shared: array<${X.type.value}, ${b*$}>;
        ${A.declareVariables(...H,X)}
        ${A.mainStart([$,1,1])}
          let output_indices = ${X.offsetToIndices(`(global_idx / ${$}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${P()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${G()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${te()}
                word_offset += ${ce/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${X.setByIndices(`${X.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${m};${y};${b};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:C}},Hd=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,u=r.slice(0,n-2),l=M.size(u),d=e[1].dims[2]/4,h=e[0].dataType,c=ve(t.k),m=ve(d),y=u.concat([i,a]),_=128,b=a%8===0?8:a%4===0?4:1,S=_/b,$=Math.floor(32/t.bits),w=S*m*$,k=w/c,T=w/t.blockSize,E=M.size(y)/b,C=[],A=[l,i,s/c],v=M.convertShape(e[1].dims).slice();v.splice(-1,1,d/m),C.push(...ee(A)),C.push(...ee(v)),C.push(...ee(e[2].dims)),e.length===4&&C.push(...ee(M.convertShape(e[3].dims)));let O=[l,i,a];C.push(...ee(O));let U=W=>{let H=A.length,F=N("a",e[0].dataType,H,c),R=N("b",12,v.length,m),X=N("scales",e[2].dataType,e[2].dims.length),j=[F,R,X],Q=e.length===4?N("zero_points",12,e[3].dims.length):void 0;Q&&j.push(Q);let ce=O.length,D=Y("output",e[0].dataType,ce),te=ke(e[0].dataType),P=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${k}>;
        var<workgroup> inter_results: array<array<${D.type.value}, ${S}>, ${b}>;
        ${W.declareVariables(...j,D)}
        ${W.mainStart([S,b,1])}
          let output_indices = ${D.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${k};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${k}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${F.getByIndices(`${F.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${F.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${T} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${te}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${X.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${m}; i++) {
              let b_value = ${m===1?"b_data":"b_data[i]"};
              ${(()=>{let G=Math.floor($/8),Z="";for(let q=0;q<G;q++){let pe=q*t.bits*4,Ue=pe+t.bits;Z+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${pe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ue}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(Se,Oe)=>`${te}(b_value_lower[${Oe}]), ${te}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${D.setByIndices(`${D.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${m};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:E},programUniforms:C}),getShaderSource:U}},Fd=(e,t)=>{Vd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Hd(e.inputs,t)):e.compute(Gd(e.inputs,t))},jd=e=>me(e)}),Kd,Xd,Zd,Yd,Qd,Jd,ep,tp,rp,Xm=L(()=>{re(),ne(),ae(),Kd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Xd=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${J("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${J("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},Zd=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${J("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${J("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${J("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Yd=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${J("uniforms.x_shape",i,t)})) {
                  k = i32(${J("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${J("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Qd=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${J("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${J("uniforms.x_shape",i,t)})) {
                  k -= i32(${J("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${J("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},Jd=(e,t,r)=>{switch(r.mode){case 0:return Xd(e,t,r.pads.length);case 1:return Zd(e,t,r.pads.length);case 2:return Yd(e,t,r.pads.length);case 3:return Qd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ep=(e,t)=>{let r=M.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=M.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ee(e[0].dims,r));let u=["rank"],l=d=>{let h=Y("output",e[0].dataType,r.length),c=N("x",e[0].dataType,n.length),m=c.type.value,y=Jd(h,n.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?m:"f32"}),`
            ${d.registerUniforms(_).declareVariables(c,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(M.size(r)/64)},programUniforms:s}),getShaderSource:l}},tp=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)s[Number(u[l])]=Number(r[l]),s[Number(u[l])+i]=Number(r[l+u.length])}else r.forEach((u,l)=>s[Number(l)]=Number(u));let a=[];return s.forEach(u=>a.push(u)),{mode:t.mode,value:n,pads:a}}else return t},rp=(e,t)=>{Kd(e.inputs);let r=tp(e.inputs,t);e.compute(ep(e.inputs,r),{inputs:[0]})}}),lr,vi,xi,Si,Ti,np,ip,ki,Ii,ap,sp,Ei,op,up,zi,lp,dp,pp,cp,Zm=L(()=>{qe(),re(),ne(),ae(),lr=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},vi=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),u=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();zr.adjustPoolAttributes(r,i,a,u,l,d);let h=zr.computePoolOutputShape(r,i,u,l,a,d,t.autoPad),c=Object.assign({},t);s?Object.assign(c,{kernelShape:a,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:a,strides:u,pads:d,cacheKey:t.cacheKey});let m=h.slice();return m.push(m.splice(1,1)[0]),[c,n?m:h]},xi=(e,t)=>{let r=t.format==="NHWC",n=M.size(e),i=M.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(d+h);s.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:h}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];m=!!(b+S),s.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:S}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,c,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=M.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,h)=>d+h);return[s,a,!!l,!1,!1]}},Si=(e,t,r,n,i,s,a,u,l,d,h,c)=>{let m=i.format==="NHWC",y=t.type.value,_=Y("output",t.type.tensor,n);if(i.kernelShape.length<=2){let b="",S="",$="",w=r-(m?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let k=r-(m?3:2);c?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${S}
              ${b}
              ${$}
              ${a}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=i.kernelShape.length,S=i.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${J("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${J("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${J("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${J("uniforms.pads","j - 2u",S)};
                  ${$}
              }
              ${a}

              output[global_idx] = value;
            }`}},Ti=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,np=e=>`${Ti(e)};${e.countIncludePad}`,ip=e=>`${Ti(e)};${e.storageOrder};${e.dilations}`,ki=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ii=(e,t,r,n)=>{let[i,s]=vi(t,n,r),a=N("x",t.dataType,t.dims.length),u=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[h,c,m,y,_]=xi(s,i);h.push(...ee(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${m};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(s)/64)},programUniforms:h}),getShaderSource:S=>Si(S,a,t.dims.length,s.length,i,l,d,0,c,m,y,_)}},ap=e=>{let t=e.count_include_pad!==0,r=ki(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:np(n)}},sp=(e,t)=>{lr(e.inputs),e.compute(Ii("AveragePool",e.inputs[0],!1,t))},Ei={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},op=e=>{let t=e.format;return{format:t,...Ei,cacheKey:t}},up=(e,t)=>{lr(e.inputs),e.compute(Ii("GlobalAveragePool",e.inputs[0],!0,t))},zi=(e,t,r,n)=>{let[i,s]=vi(t,n,r),a=`
      value = max(x_val, value);
    `,u="",l=N("x",t.dataType,t.dims.length),d=["rank"],[h,c,m,y,_]=xi(s,i);return h.push(...ee(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${m};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(M.size(s)/64)},programUniforms:h}),getShaderSource:b=>Si(b,l,t.dims.length,s.length,i,a,u,t.dataType===10?-65504:-1e5,c,m,y,_)}},lp=(e,t)=>{lr(e.inputs),e.compute(zi("MaxPool",e.inputs[0],!1,t))},dp=e=>{let t=e.storage_order,r=e.dilations,n=ki(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:ip(i)}},pp=e=>{let t=e.format;return{format:t,...Ei,cacheKey:t}},cp=(e,t)=>{lr(e.inputs),e.compute(zi("GlobalMaxPool",e.inputs[0],!0,t))}}),hp,fp,mp,gp,Ym=L(()=>{re(),ne(),xe(),ae(),hp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},fp=(e,t)=>{let r=M.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,u=M.size(s),l=n===3||n===2,d=l?[Math.ceil(M.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,m=c?l?[Math.ceil(M.size(c.dims)/4)]:c.dims:void 0,y=h.length===0||h.length===1&&h[0]===1,_=y===!1&&h.length===1,b=ve(u),S=y&&(!l||b===4),$=S?b:1,w=S&&!l?b:1,k=N("input",l?12:n,d.length,w),T=N("scale",a,h.length),E=c?N("zero_point",l?12:n,m.length):void 0,C=Y("output",a,s.length,$),A=[k,T];E&&A.push(E);let v=[d,h];c&&v.push(m);let O=[{type:12,data:u/$},{type:12,data:r},{type:12,data:t.blockSize},...ee(...v,s)],U=W=>{let H=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${W.registerUniforms(H).declareVariables(...A,C)}
      ${W.mainStart()}
          ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${T.getByOffset("0")}`:_?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:O})}},mp=(e,t)=>{hp(e.inputs,t),e.compute(fp(e.inputs,t))},gp=e=>me({axis:e.axis,blockSize:e.blockSize})}),yp,_p,bp,Qm=L(()=>{qe(),re(),ae(),yp=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},_p=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,u=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...ee(s)],l=d=>{let h=Y("output",n,s.length),c=h.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${d.registerUniforms(m).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},bp=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&yp(t,r,n),e.compute(_p(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),wp,$p,vp,xp,Jm=L(()=>{re(),ne(),xe(),ae(),wp=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${s}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},$p=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(M.sizeToDimension(n,n.length-1)/s),u=n[n.length-1],l=M.sizeFromDimension(r,u),d=[{type:12,data:a},{type:12,data:u},{type:12,data:l},...ee(e[1].dims,e[2].dims,i)],h=c=>{let m=N("indices",e[1].dataType,e[1].dims.length),y=N("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Es("output",e[0].dataType,i.length):Y("output",e[0].dataType,i.length,s);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,y,_)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${wp(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h}},vp=e=>me({reduction:e.reduction}),xp=(e,t)=>{e.compute($p(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Sp,Tp,kp,Ci,Ip,Ep,zp,Cp,Ap,Op,Rp,Mp,Ai,Bp,Np,Dp,Up,Pp,Lp,qp,eg=L(()=>{re(),ne(),xe(),ae(),Sp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Tp=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},kp=(e,t,r,n,i,s)=>{let[a,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(h=>n.push(h)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Sp(n,t),t.axes.length>0&&Tp(n,t.axes,d).forEach((h,c)=>n[c]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ci=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Ip=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ci("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ci("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ep=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",zp=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},Cp=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Ap=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Op=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${J("uniforms.scales","i",n)};
        var roi_low = ${J("uniforms.roi","i",i)};
        var roi_hi = ${J("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${J("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Rp=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${J("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${J("uniforms.roi","i",s)};
          var roi_hi = ${J("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${J("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,Mp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${J("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ai=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Bp=(e,t,r,n,i)=>{let[s,a,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Ai(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${u}];
      ${n?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Np=(e,t,r,n,i,s,a,u,l,d)=>{let h=r.length===2,[c,m]=h?[0,1]:[2,3],y=e.type.value,_=b=>{let S=b===c?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[b]},
        ${n[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${S} = max(0, min(${S}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${S})`)};
          data[i + 1] = ${b===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(c)};
    ${_(m)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Dp=(e,t,r,n,i)=>{let[s,a,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Ai(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${a}];
      var height:${h} = originalIndices[${u}];
      var width:${h} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
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
    }`},Up=(e,t,r,n,i,s)=>{let a=e.dims,u=zp(s,t.axes,a.length),l=Cp(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((w,k)=>w===0?1:l[k]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Ap(a,d,t)));let h=Y("output",e.dataType,l.length),c=N("input",e.dataType,a.length),m=M.size(l),y=a.length===l.length&&a.every((w,k)=>w===l[k]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=c.type.value,$=w=>`
      ${y?"":`
      ${Ip(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Mp(c,a)};
              ${Ep(t.nearestMode,r,S)};
              ${Rp(c,h,a,l,d.length,u.length,_)};
              `;case"linear":return`
              ${Op(h,a,l,d.length,u.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Bp(c,h,a,_,b)}`;if(a.length===3||a.length===5)return`${Dp(c,h,a,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Np(c,h,a,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(c,h)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:u},...ee(a,l)]})}},Pp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Lp=(e,t)=>{let r=[],n=[],i=[],s=Pp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");kp(e.inputs,t,s,r,n,i),e.compute(Up(e.inputs[0],t,s,r,n,i),{inputs:[0]})},qp=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return me({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Wp,Vp,Gp,tg=L(()=>{re(),ne(),ae(),Wp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Vp=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=M.size(s),u=s,l=a,d=s.slice(-1)[0],h=n?s.slice(0,-1).concat(1):[],c=!i&&e.length>3,m=e.length>4,y=n&&r>1,_=n&&r>2,b=r>3,S=64,$=ve(d),w=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],k=E=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[N("x",e[0].dataType,e[0].dims,$),N("skip",e[1].dataType,e[1].dims,$),N("gamma",e[2].dataType,e[2].dims,$)];c&&A.push(N("beta",e[3].dataType,e[3].dims,$)),m&&A.push(N("bias",e[4].dataType,e[4].dims,$)),A.push(Y("output",e[0].dataType,u,$)),y&&A.push(Y("mean_output",1,h)),_&&A.push(Y("inv_std_output",1,h)),b&&A.push(Y("input_skip_bias_sum",e[0].dataType,u,$));let v=ke(e[0].dataType),O=ke(1,$);return`

      ${E.registerUniforms(C).declareVariables(...A)}
      var<workgroup> sum_shared : array<${O}, ${S}>;
      var<workgroup> sum_squared_shared : array<${O}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ft(v,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
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
        let mean = ${ct("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ct("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:u,dataType:e[0].dataType}];return r>1&&T.push({dims:h,dataType:1}),r>2&&T.push({dims:h,dataType:1}),r>3&&T.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${y};${_};${b}`,inputDependencies:e.map((E,C)=>"type")},getShaderSource:k,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Gp=(e,t)=>{Wp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Vp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Hp,dr,Fp,Oi,jp,Kp,Xp,Zp,rg=L(()=>{re(),ne(),xe(),ae(),Hp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},dr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Fp=(e,t)=>{if(e.length>1){let r=dr(e,1),n=dr(e,2),i=dr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),me({starts:r,ends:n,axes:i})}else return t},Oi=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},jp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${J("uniforms.input_shape","i",r.length)};
            let steps_i = ${J("uniforms.steps","i",r.length)};
            let signs_i = ${J("uniforms.signs","i",r.length)};
            let starts_i = ${J("uniforms.starts","i",r.length)};
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
      }`,Kp=(e,t)=>{let r=e[0].dims,n=M.size(r),i=t.axes.length>0?M.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=dr(e,4);s.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map(($,w)=>Oi($,w,r,i,s)),u=t.ends.map(($,w)=>Oi($,w,r,i,s));if(i.length!==a.length||i.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let $=0;$<r.length;++$)i.includes($)||(a.splice($,0,0),u.splice($,0,r[$]),s.splice($,0,1));let l=s.map($=>Math.sign($));s.forEach(($,w,k)=>{if($<0){let T=(u[w]-a[w])/$,E=a[w],C=E+T*s[w];a[w]=C,u[w]=E,k[w]=-$}});let d=r.slice(0);i.forEach(($,w)=>{d[$]=Math.ceil((u[$]-a[$])/s[$])});let h={dims:d,dataType:e[0].dataType},c=Y("output",e[0].dataType,d.length),m=N("input",e[0].dataType,e[0].dims.length),y=M.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:y},{type:12,data:a},{type:6,data:l},{type:12,data:s},...ee(e[0].dims,d)],S=$=>`
      ${$.registerUniforms(_).declareVariables(m,c)}
        ${jp(m,c,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:b})}},Xp=(e,t)=>{Hp(e.inputs,t);let r=Fp(e.inputs,t);e.compute(Kp(e.inputs,r),{inputs:[0]})},Zp=e=>{let t=e.starts,r=e.ends,n=e.axes;return me({starts:t,ends:r,axes:n})}}),Yp,Qp,Jp,ec,ng=L(()=>{re(),ne(),xe(),ht(),ae(),Yp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Qp=(e,t)=>{let r=e.inputs[0],n=r.dims,i=M.size(n),s=n.length,a=M.normalizeAxis(t.axis,s),u=a<n.length-1,l,d=[];u?(d=Array.from({length:s},(A,v)=>v),d[a]=s-1,d[s-1]=a,l=e.compute(De(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,c=h[s-1],m=i/c,y=ve(c),_=c/y,b=64;m===1&&(b=256);let S=(A,v)=>v===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:v===2?`max(${A}.x, ${A}.y)`:v===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,$=N("x",l.dataType,l.dims,y),w=Y("result",l.dataType,l.dims,y),k=$.type.value,T=ke(l.dataType)==="f32"?`var threadMax = ${k}(-3.4028234663852886e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables($,w)}
      ${A.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
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
          rowMaxShared = ${k}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
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
          rowSumShared = ${k}(${ct("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${k}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(De(C,d),{inputs:[C]})},Jp=(e,t)=>{Yp(e.inputs),Qp(e,t)},ec=e=>me({axis:e.axis})}),Ri,tc,rc,nc,ic,ig=L(()=>{re(),ne(),ae(),Ri=e=>Array.from(e.getBigInt64Array(),Number),tc=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ri(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rc=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},nc=(e,t)=>{let r=e[0].dims,n=t??Ri(e[1]),i=rc(r,n),s=M.size(i),a=e[0].dataType,u=N("input",a,r.length),l=Y("output",a,i.length),d=h=>`
      const inputShape = ${u.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(u,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ee(e[0].dims,i)]}),getShaderSource:d}},ic=e=>{tc(e.inputs),e.compute(nc(e.inputs),{inputs:[0]})}}),ac,sc,oc,ag=L(()=>{re(),ne(),ae(),ac=(e,t,r,n,i)=>{let s=Y("output_data",i,r.length,4),a=N("a_data",t[1].dataType,t[1].dims.length,4),u=N("b_data",t[2].dataType,t[2].dims.length,4),l=N("c_data",t[0].dataType,t[0].dims.length,4),d,h=(c,m,y)=>`select(${m}, ${c}, ${y})`;if(!n)d=s.setByOffset("global_idx",h(a.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let c=(m,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,$=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${s.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${a.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${m}[${y}] = ${_}(${h(b,S,$)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},sc=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(M.areEqual(t,r)&&M.areEqual(r,n)),a=t,u=M.size(t);if(s){let d=Gt.calcShape(Gt.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,u=M.size(a)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ac(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...ee(n,t,r,a)]})}},oc=e=>{e.compute(sc(e.inputs))}}),uc,sg=L(()=>{wm(),Xn(),$m(),vm(),xm(),Sm(),Tm(),Cm(),Om(),Rm(),Mm(),Bm(),Nm(),Dm(),Um(),Pm(),Lm(),qm(),Wm(),Vm(),Gm(),Hm(),Fm(),jm(),Km(),wd(),Xm(),Zm(),Ym(),Qm(),Jm(),Fn(),eg(),Cd(),tg(),rg(),ng(),Id(),ig(),ht(),Jn(),ag(),uc=new Map([["Abs",[Wo]],["Acos",[Vo]],["Acosh",[Go]],["Add",[Au]],["ArgMax",[Io,Kn]],["ArgMin",[ko,Kn]],["Asin",[Ho]],["Asinh",[Fo]],["Atan",[jo]],["Atanh",[Ko]],["Attention",[Ro]],["AveragePool",[sp,ap]],["BatchNormalization",[Do]],["BiasAdd",[Lo]],["BiasSplitGelu",[Eu]],["Cast",[Zo,Xo]],["Ceil",[Jo]],["Clip",[Qo]],["Concat",[Hu,Fu]],["Conv",[ci,di]],["ConvTranspose",[bl,gl]],["Cos",[eu]],["Cosh",[tu]],["CumSum",[$l,vl]],["DepthToSpace",[kl,Il]],["DequantizeLinear",[mp,gp]],["Div",[Ou]],["Einsum",[Rl,Ml]],["Elu",[ru,ir]],["Equal",[Ru]],["Erf",[nu]],["Exp",[iu]],["Expand",[Ul]],["FastGelu",[Ll]],["Floor",[au]],["FusedConv",[ci,di]],["Gather",[Gl,Vl]],["GatherElements",[td,ed]],["GatherBlockQuantized",[Zl,Yl]],["GatherND",[Fl,jl]],["Gelu",[su]],["Gemm",[ad,id]],["GlobalAveragePool",[up,op]],["GlobalMaxPool",[cp,pp]],["Greater",[Du]],["GreaterOrEqual",[Pu]],["GridSample",[fd,md]],["GroupQueryAttention",[Md]],["HardSigmoid",[fu,hu]],["InstanceNormalization",[Dd]],["LayerNormalization",[Ld]],["LeakyRelu",[ou,ir]],["Less",[Uu]],["LessOrEqual",[Lu]],["Log",[vu]],["MatMul",[Wd]],["MatMulNBits",[Fd,jd]],["MaxPool",[lp,dp]],["Mul",[Mu]],["MultiHeadAttention",[bd,yd]],["Neg",[lu]],["Not",[uu]],["Pad",[rp]],["Pow",[Bu]],["QuickGelu",[Tu,ir]],["Range",[bp]],["Reciprocal",[du]],["ReduceMin",[$o]],["ReduceMean",[go]],["ReduceMax",[wo]],["ReduceSum",[xo]],["ReduceProd",[vo]],["ReduceL1",[yo]],["ReduceL2",[_o]],["ReduceLogSum",[To]],["ReduceLogSumExp",[bo]],["ReduceSumSquare",[So]],["Relu",[pu]],["Resize",[Lp,qp]],["RotaryEmbedding",[zd]],["ScatterND",[xp,vp]],["Sigmoid",[cu]],["Sin",[mu]],["Sinh",[gu]],["Slice",[Xp,Zp]],["SkipLayerNormalization",[Gp]],["Split",[Td,kd]],["Sqrt",[yu]],["Softmax",[Jp,ec]],["Sub",[Nu]],["Tan",[_u]],["Tanh",[bu]],["ThresholdedRelu",[$u,ir]],["Tile",[ic]],["Transpose",[Ns,Ds]],["Where",[oc]]])}),lc,og=L(()=>{qe(),st(),ae(),lc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){Qe(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});i&&u.push({binding:u.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(e.programInfo.name)}dispose(){}build(e,t){Qe(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Cs(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,u=r.createShaderModule({code:a,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ge(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),dc={};Wt(dc,{WebGpuBackend:()=>fc});var pc,cc,hc,fc,ug=L(()=>{qe(),re(),st(),gs(),_m(),sg(),og(),pc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},cc=(e,t,r)=>{var i,s;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${pc(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,n},hc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},fc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=u=>t.features.has(u)&&r.push(u)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new hc(a),this.gpuDataManager=ks(this),this.programManager=new lc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,zn(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Qe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],a=s.kernelId,u=this.kernels.get(a),l=u.kernelType,d=u.kernelName,h=s.programName,c=s.inputTensorViews,m=s.outputTensorViews,y=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),S=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map($=>({dims:$.dims,dataType:at($.dataType)})),outputsMetadata:m.map($=>({dims:$.dims,dataType:at($.dataType)})),kernelId:a,kernelType:l,kernelName:d,programName:h,startTime:b,endTime:S});else{let $="";c.forEach((k,T)=>{$+=`input[${T}]: [${k.dims}] | ${at(k.dataType)}, `});let w="";m.forEach((k,T)=>{w+=`output[${T}]: [${k.dims}] | ${at(k.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${d}|${h}" ${$}${w}start time: ${b} ns, execution time: ${S-b} ns`)}xr("GPU",`${h}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Ge()}run(e,t,r,n,i,s){Qe(e.name);let a=[];for(let w=0;w<t.length;++w){let k=t[w].data;if(k===0)continue;let T=this.gpuDataManager.get(k);if(!T)throw new Error(`no GPU data for input: ${k}`);a.push(T)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),h=r.length===0?u.map((w,k)=>k):r;if(h.length!==u.length)throw new Error(`Output size ${h.length} must be equal to ${u.length}.`);let c=[],m=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(h[w])||h[w]<-3||h[w]>=s)throw new Error(`Invalid output index: ${h[w]}`);if(h[w]===-3)continue;let k=h[w]===-1,T=h[w]===-2,E=k||T?i(u[w].dataType,u[w].dims):n(h[w],u[w].dataType,u[w].dims);if(c.push(E),E.data===0)continue;let C=this.gpuDataManager.get(E.data);if(!C)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(C),T){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(C)}m.push(C)}if(a.length!==t.length||m.length!==c.length){if(m.length===0)return Ge(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,k=[];d.forEach(A=>{let v=typeof A.data=="number"?[A.data]:A.data;if(v.length===0)return;let O=A.type===10?2:4,U,W;A.type===10?(W=v.length>4?16:v.length>2?8:v.length*O,U=v.length>4?16:O*v.length):(W=v.length<=2?v.length*O:16,U=16),w=Math.ceil(w/W)*W,k.push(w);let H=A.type===10?8:4;w+=v.length>4?Math.ceil(v.length/H)*U:v.length*O});let T=16;w=Math.ceil(w/T)*T;let E=new ArrayBuffer(w);d.forEach((A,v)=>{let O=k[v],U=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,O,U.length).set(U);else if(A.type===12)new Uint32Array(E,O,U.length).set(U);else if(A.type===10)new Uint16Array(E,O,U.length).set(U);else if(A.type===1)new Float32Array(E,O,U.length).set(U);else throw new Error(`Unsupported uniform type: ${at(A.type)}`)});let C=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,E,0,w),this.gpuDataManager.release(C.id),y={offset:0,size:w,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,S=cc(e,t,b),$=this.programManager.getArtifact(S);if($||($=this.programManager.build(e,_),this.programManager.setArtifact(S,$),de("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let w=0;w<d.length;w++){let k=d[w],T=k.type,E=typeof k.data=="number"?1:k.data.length,[C,A]=$.uniformVariablesInfo[w];if(T!==C||E!==A)throw new Error(`Uniform variable ${w} mismatch: expect type ${C} with size ${A}, got type ${T} with size ${E} in program "${$.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run($,a,m,_,y),Ge(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=uc.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,u=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await qn(this,e,t);return Cn(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),mc={};Wt(mc,{init:()=>yc});var qr,gc,yc,lg=L(()=>{re(),st(),ne(),ym(),qr=class Kf{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=M.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(M.size(t)!==M.size(this.dims))throw new Error("Invalid new shape");return new Kf(this.module,this.dataType,this.data,t)}},gc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let u=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),h=Number(e.getValue(n*i++,"*")),c=Number(e.getValue(n*i++,s)),m=[];for(let y=0;y<c;y++)m.push(Number(e.getValue(n*i++,s)));u.push(new qr(e,d,h,m))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(u,l,d)=>new qr(this.module,l,this.output(u,d),d),s=(u,l)=>{let d=Et(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let h=d>0?this.backend.gpuDataManager.create(d).id:0;return new qr(this.module,u,h,l)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},yc=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(ug(),Yt(dc)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,u=>a.alloc(Number(u)),u=>a.free(u),(u,l,d,h=!1)=>{if(h)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let c=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));a.upload(Number(l),c)}},async(u,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await a.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>a.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>a.releaseKernel(u),(u,l,d,h)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let c=new gc(t,a,Number(l));return a.computeKernel(Number(u),c,h)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new vs(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,u,l,d,h)=>s.ensureTensor(a,u,l,d,h),(a,u)=>{s.uploadTensor(a,u)},async(a,u)=>s.downloadTensor(a,u),(a,u)=>s.registerMLContext(a,u),!!r.trace])}}}),_c,Mi,Bi,ft,bc,Ni,Wr,Di,Ui,Pi,Li,qi,Wi,wc=L(()=>{qe(),fm(),mm(),re(),Tt(),Sn(),ss(),_c=(e,t)=>{be()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},Mi=async e=>{_c(e.wasm.numThreads,Er(e.logLevel))},Bi=async(e,t)=>{var n,i;(i=(n=be()).asyncInit)==null||i.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(lg(),Yt(mc)).init;t==="webgpu"&&await s("webgpu",be(),e,r),t==="webnn"&&await s("webnn",be(),e)}},ft=new Map,bc=e=>{let t=be(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&ge("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Ni=(e,t)=>{let r=be(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ge("Can't get session input/output metadata.");let u=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[u,0];let d=r.HEAPU32[i/4+1],h=[];for(let c=0;c<d;c++){let m=Number(r.getValue(i+8+c*s,"*"));h.push(m!==0?r.UTF8ToString(m):Number(r.getValue(i+8+(c+d)*s,"*")))}return[u,l,h]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Wr=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Di=async(e,t)=>{var c,m,y,_;let r,n,i=be();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Wr(e);let s=0,a=0,u=0,l=[],d=[],h=[];try{if([a,l]=await as(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let O of t.externalData){let U=typeof O=="string"?O:O.path;v.push(En(typeof O=="string"?O:O.data).then(W=>{i.mountExternalData(U,W)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let O=v,U=O==null?void 0:O.context,W=O==null?void 0:O.gpuDevice,H=O==null?void 0:O.deviceType,F=O==null?void 0:O.powerPreference;U?i.currentContext=U:W?i.currentContext=await i.webnnCreateMLContext(W):i.currentContext=await i.webnnCreateMLContext({deviceType:H,powerPreference:F})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),(c=i.webgpuOnCreateSession)==null||c.call(i,s),s===0&&ge("Can't create a session."),(m=i.jsepOnCreateSession)==null||m.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[b,S]=bc(s),$=!!(t!=null&&t.enableGraphCapture),w=[],k=[],T=[],E=[],C=[];for(let v=0;v<b;v++){let[O,U,W]=Ni(s,v);O===0&&ge("Can't get an input name."),d.push(O);let H=i.UTF8ToString(O);w.push(H),T.push(U===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:at(U),shape:W})}for(let v=0;v<S;v++){let[O,U,W]=Ni(s,v+b);O===0&&ge("Can't get an output name."),h.push(O);let H=i.UTF8ToString(O);k.push(H),E.push(U===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:at(U),shape:W});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[H])??"cpu",R=i.webnnIsGraphOutput;if(F==="cpu"&&R&&R(s,H)){C.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if($&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(F)}}let A=null;return C.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(u=i._OrtCreateBinding(s),u===0&&ge("Can't create IO binding."),A={handle:u,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>In(v))}),ft.set(s,[s,d,h,A,$,!1]),[s,w,k,T,E]}catch(b){throw d.forEach(S=>i._OrtFree(S)),h.forEach(S=>i._OrtFree(S)),u!==0&&i._OrtReleaseBinding(u)!==0&&ge("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ge("Can't release session."),b}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ge("Can't release session options."),l.forEach(b=>i._free(b)),(_=i.unmountExternalData)==null||_.call(i)}},Ui=e=>{var l,d,h;let t=be(),r=ft.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,u]=r;a&&(u&&t._OrtClearBoundOutputs(a.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ge("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),s.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(n)!==0&&ge("Can't release session."),ft.delete(e)},Pi=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,d=e[0],h=e[1],c=e[3],m=c,y,_;if(d==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;_=Et(It(d),h);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(n,s,$,_)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;_=Et(It(d),h);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(n,$,It(d),h)}else{let $=e[2];if(Array.isArray($)){_=l*$.length,y=u._malloc(_),r.push(y);for(let w=0;w<$.length;w++){if(typeof $[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(y+w*l,He($[w],r),"*")}}else{let w=u.webnnIsGraphInput,k=u.webnnIsGraphOutput;if(d!=="string"&&w&&k){let T=u.UTF8ToString(i);if(w(n,T)||k(n,T)){let E=It(d);_=Et(E,h),m="ml-tensor";let C=u.webnnCreateTemporaryTensor,A=u.webnnUploadTensor;if(!C||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await C(n,E,h);A(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),y=v}else _=$.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,_),y)}else _=$.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,_),y)}}let b=u.stackSave(),S=u.stackAlloc(4*h.length);try{h.forEach((w,k)=>u.setValue(S+k*l,w,l===4?"i32":"i64"));let $=u._OrtCreateTensor(It(d),y,_,S,h.length,In(m));$===0&&ge(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push($)}finally{u.stackRestore(b)}},Li=async(e,t,r,n,i,s)=>{var H,F,R,X;let a=be(),u=a.PTR_SIZE,l=ft.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],h=l[1],c=l[2],m=l[3],y=l[4],_=l[5],b=t.length,S=n.length,$=0,w=[],k=[],T=[],E=[],C=[],A=a.stackSave(),v=a.stackAlloc(b*u),O=a.stackAlloc(b*u),U=a.stackAlloc(S*u),W=a.stackAlloc(S*u);try{[$,w]=es(s),xt("wasm prepareInputOutputTensor");for(let D=0;D<b;D++)await Pi(r[D],k,E,e,h[t[D]],t[D],y);for(let D=0;D<S;D++)await Pi(i[D],T,E,e,c[n[D]],b+n[D],y);St("wasm prepareInputOutputTensor");for(let D=0;D<b;D++)a.setValue(v+D*u,k[D],"*"),a.setValue(O+D*u,h[t[D]],"*");for(let D=0;D<S;D++)a.setValue(U+D*u,T[D],"*"),a.setValue(W+D*u,c[n[D]],"*");if(m&&!_){let{handle:D,outputPreferredLocations:te,outputPreferredLocationsEncoded:P}=m;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);xt("wasm bindInputsOutputs");for(let G=0;G<b;G++){let Z=t[G];await a._OrtBindInput(D,h[Z],k[G])!==0&&ge(`Can't bind input[${G}] for session=${e}.`)}for(let G=0;G<S;G++){let Z=n[G];(H=i[G])!=null&&H[3]?(C.push(T[G]),a._OrtBindOutput(D,c[Z],T[G],0)!==0&&ge(`Can't bind pre-allocated output[${G}] for session=${e}.`)):a._OrtBindOutput(D,c[Z],0,P[Z])!==0&&ge(`Can't bind output[${G}] to ${te[G]} for session=${e}.`)}St("wasm bindInputsOutputs"),ft.set(e,[d,h,c,m,y,!0])}(F=a.jsepOnRunStart)==null||F.call(a,d),(R=a.webnnOnRunStart)==null||R.call(a,d);let j;m?j=await a._OrtRunWithBinding(d,m.handle,S,U,$):j=await a._OrtRun(d,O,v,b,W,S,U,$),j!==0&&ge("failed to call OrtRun().");let Q=[],ce=[];xt("wasm ProcessOutputTensor");for(let D=0;D<S;D++){let te=Number(a.getValue(U+D*u,"*"));if(te===T[D]||C.includes(T[D])){Q.push(i[D]),te!==T[D]&&a._OrtReleaseTensor(te)!==0&&ge("Can't release tensor.");continue}let P=a.stackSave(),G=a.stackAlloc(4*u),Z=!1,q,pe=0;try{a._OrtGetTensorData(te,G,G+u,G+2*u,G+3*u)!==0&&ge(`Can't access output tensor data on index ${D}.`);let Ue=u===4?"i32":"i64",Se=Number(a.getValue(G,Ue));pe=a.getValue(G+u,"*");let Oe=a.getValue(G+u*2,"*"),Re=Number(a.getValue(G+u*3,Ue)),Pe=[];for(let we=0;we<Re;we++)Pe.push(Number(a.getValue(Oe+we*u,Ue)));a._OrtFree(Oe)!==0&&ge("Can't free memory for tensor dims.");let Me=Pe.reduce((we,ie)=>we*ie,1);q=at(Se);let gt=m==null?void 0:m.outputPreferredLocations[n[D]];if(q==="string"){if(gt==="gpu-buffer"||gt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let ie=0;ie<Me;ie++){let Le=a.getValue(pe+ie*u,"*"),Fr=a.getValue(pe+(ie+1)*u,"*"),gr=ie===Me-1?void 0:Fr-Le;we.push(a.UTF8ToString(Le,gr))}Q.push([q,Pe,we,"cpu"])}else if(gt==="gpu-buffer"&&Me>0){let we=a.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=we(pe),Le=Et(Se,Me);if(Le===void 0||!Tn(q))throw new Error(`Unsupported data type: ${q}`);Z=!0,Q.push([q,Pe,{gpuBuffer:ie,download:a.jsepCreateDownloader(ie,Le,q),dispose:()=>{a._OrtReleaseTensor(te)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(gt==="ml-tensor"&&Me>0){let we=a.webnnEnsureTensor,ie=a.webnnIsGraphInputOutputTypeSupported;if(!we||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Et(Se,Me)===void 0||!kn(q))throw new Error(`Unsupported data type: ${q}`);if(!ie(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let Le=await we(e,pe,Se,Pe,!1);Z=!0,Q.push([q,Pe,{mlTensor:Le,download:a.webnnCreateMLTensorDownloader(pe,q),dispose:()=>{a.webnnReleaseTensorId(pe),a._OrtReleaseTensor(te)}},"ml-tensor"])}else if(gt==="ml-tensor-cpu-output"&&Me>0){let we=a.webnnCreateMLTensorDownloader(pe,q)(),ie=Q.length;Z=!0,ce.push((async()=>{let Le=[ie,await we];return a.webnnReleaseTensorId(pe),a._OrtReleaseTensor(te),Le})()),Q.push([q,Pe,[],"cpu"])}else{let we=Ir(q),ie=new we(Me);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(a.HEAPU8.subarray(pe,pe+ie.byteLength)),Q.push([q,Pe,ie,"cpu"])}}finally{a.stackRestore(P),q==="string"&&pe&&a._free(pe),Z||a._OrtReleaseTensor(te)}}m&&!y&&(a._OrtClearBoundOutputs(m.handle)!==0&&ge("Can't clear bound outputs."),ft.set(e,[d,h,c,m,y,!1]));for(let[D,te]of await Promise.all(ce))Q[D][2]=te;return St("wasm ProcessOutputTensor"),Q}finally{(X=a.webnnOnRunEnd)==null||X.call(a,d),a.stackRestore(A),k.forEach(j=>a._OrtReleaseTensor(j)),T.forEach(j=>a._OrtReleaseTensor(j)),E.forEach(j=>a._free(j)),$!==0&&a._OrtReleaseRunOptions($),w.forEach(j=>a._free(j))}},qi=e=>{let t=be(),r=ft.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&ge("Can't get an profile file name."),t._OrtFree(i)},Wi=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),mt,Ae,jt,pr,cr,Vr,Vi,Gr,Bt,Nt,$c,vc,xc,Sc,Tc,kc,Ic,Ec,zc=L(()=>{qe(),wc(),Tt(),wn(),mt=()=>!!_e.wasm.proxy&&typeof document<"u",jt=!1,pr=!1,cr=!1,Gr=new Map,Bt=(e,t)=>{let r=Gr.get(e);r?r.push(t):Gr.set(e,[t])},Nt=()=>{if(jt||!pr||cr||!Ae)throw new Error("worker not ready")},$c=e=>{switch(e.data.type){case"init-wasm":jt=!1,e.data.err?(cr=!0,Vi[1](e.data.err)):(pr=!0,Vi[0]()),Vr&&(URL.revokeObjectURL(Vr),Vr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Gr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},vc=async()=>{if(!pr){if(jt)throw new Error("multiple calls to 'initWasm()' detected.");if(cr)throw new Error("previous call to 'initWasm()' failed.");if(jt=!0,mt())return new Promise((e,t)=>{Ae==null||Ae.terminate(),Xa().then(([r,n])=>{try{Ae=n,Ae.onerror=s=>t(s),Ae.onmessage=$c,Vi=[e,t];let i={type:"init-wasm",in:_e};!i.in.wasm.wasmPaths&&(r||gn)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),Ae.postMessage(i),Vr=r}catch(i){t(i)}},t)});try{await xn(_e.wasm),await Mi(_e),pr=!0}catch(e){throw cr=!0,e}finally{jt=!1}}},xc=async e=>{if(mt())return Nt(),new Promise((t,r)=>{Bt("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:_e}};Ae.postMessage(n)});await Bi(_e,e)},Sc=async e=>mt()?(Nt(),new Promise((t,r)=>{Bt("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Ae.postMessage(n,[e.buffer])})):Wr(e),Tc=async(e,t)=>{if(mt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Nt(),new Promise((r,n)=>{Bt("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ae.postMessage(i,s)})}else return Di(e,t)},kc=async e=>{if(mt())return Nt(),new Promise((t,r)=>{Bt("release",[t,r]);let n={type:"release",in:e};Ae.postMessage(n)});Ui(e)},Ic=async(e,t,r,n,i,s)=>{if(mt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Nt(),new Promise((a,u)=>{Bt("run",[a,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};Ae.postMessage(d,Wi(l))})}else return Li(e,t,r,n,i,s)},Ec=async e=>{if(mt())return Nt(),new Promise((t,r)=>{Bt("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Ae.postMessage(n)});qi(e)}}),Gi,Cc,Ac,dg=L(()=>{qe(),zc(),re(),cn(),ss(),Gi=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Cc=e=>{switch(e[3]){case"cpu":return new Ve(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Tn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Ve.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!kn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Ve.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ac=class{async fetchModelAndCopyToWasmMemory(e){return Sc(await En(e))}async loadModel(e,t){Qe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Tc(r,t),Ge()}async dispose(){return kc(this.sessionId)}async run(e,t,r){Qe();let n=[],i=[];Object.entries(e).forEach(c=>{let m=c[0],y=c[1],_=this.inputNames.indexOf(m);if(_===-1)throw new Error(`invalid input '${m}'`);n.push(y),i.push(_)});let s=[],a=[];Object.entries(t).forEach(c=>{let m=c[0],y=c[1],_=this.outputNames.indexOf(m);if(_===-1)throw new Error(`invalid output '${m}'`);s.push(y),a.push(_)});let u=n.map((c,m)=>Gi(c,()=>`input "${this.inputNames[i[m]]}"`)),l=s.map((c,m)=>c?Gi(c,()=>`output "${this.outputNames[a[m]]}"`):null),d=await Ic(this.sessionId,i,u,a,l,r),h={};for(let c=0;c<d.length;c++)h[this.outputNames[a[c]]]=s[c]??Cc(d[c]);return Ge(),h}startProfiling(){}endProfiling(){Ec(this.sessionId)}}}),Oc={};Wt(Oc,{OnnxruntimeWebAssemblyBackend:()=>Fi,initializeFlags:()=>Hi,wasmBackend:()=>Rc});var Hi,Fi,Rc,pg=L(()=>{qe(),zc(),dg(),Hi=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?Zf("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Fi=class{async init(e){Hi(),await vc(),await xc(e)}async createInferenceSessionHandler(e,t){let r=new Ac;return await r.loadModel(e,t),r}},Rc=new Fi});qe(),qe(),qe();var cg="1.27.0";{let e=(pg(),Yt(Oc)).wasmBackend;Vt("webgpu",e,5),Vt("webnn",e,5),Vt("cpu",e,10),Vt("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:cg,enumerable:!0});/**
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
 */const hg=114;function fg(e,t,r){const n=Math.min(r/e,r/t),i=Math.round(e*n),s=Math.round(t*n);return{scale:n,padX:Math.floor((r-i)/2),padY:Math.floor((r-s)/2),resizedWidth:i,resizedHeight:s}}function mg(e,t,r){const{width:n,height:i,channels:s,data:a}=e,u=new Uint8Array(t*r*3),l=n/t,d=i/r;for(let h=0;h<r;h++){const c=(h+.5)*d-.5,m=Math.max(0,Math.min(i-1,Math.floor(c))),y=Math.min(i-1,m+1),_=Math.max(0,Math.min(1,c-m));for(let b=0;b<t;b++){const S=(b+.5)*l-.5,$=Math.max(0,Math.min(n-1,Math.floor(S))),w=Math.min(n-1,$+1),k=Math.max(0,Math.min(1,S-$)),T=(m*n+$)*s,E=(m*n+w)*s,C=(y*n+$)*s,A=(y*n+w)*s,v=(h*t+b)*3;for(let O=0;O<3;O++){const U=a[T+O]*(1-k)+a[E+O]*k,W=a[C+O]*(1-k)+a[A+O]*k;u[v+O]=Math.min(255,Math.max(0,Math.round(U*(1-_)+W*_)))}}}return u}function gg(e,t){const r=fg(e.width,e.height,t),n=mg(e,r.resizedWidth,r.resizedHeight),i=t*t,s=new Float32Array(3*i).fill(hg/255);for(let a=0;a<r.resizedHeight;a++){const u=(a+r.padY)*t+r.padX,l=a*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const h=(l+d)*3,c=u+d;s[c]=n[h]/255,s[i+c]=n[h+1]/255,s[2*i+c]=n[h+2]/255}}return{tensor:s,params:r}}function yg(e,t,r,n){const i=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const u=e[a*6],l=e[a*6+1],d=e[a*6+2],h=e[a*6+3],c=e[a*6+4],m=e[a*6+5];if(c<r)continue;const y=Math.round(m);if(y<0||y>=n)continue;const _=(u-t.padX)/t.scale,b=(l-t.padY)/t.scale,S=(d-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:y,confidence:c,box:[Math.trunc(_),Math.trunc(b),Math.trunc(S-_),Math.trunc($-b)],boxFloat:[_,b,S-_,$-b]})}return i}function hr(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Mc(e){if(e.length===0)return Number.NaN;const t=[...e].sort((n,i)=>n-i),r=Math.floor(t.length/2);return t.length%2===1?t[r]:(t[r-1]+t[r])/2}function Bc(e,t){if(e.length===0)return Number.NaN;const r=[...e].sort((a,u)=>a-u),n=t/100*(r.length-1),i=Math.floor(n),s=Math.ceil(n);return i===s?r[i]:r[i]*(s-n)+r[s]*(n-i)}const _g=.6,bg=.8;function Nc(e,t,r){const n=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<r)continue;const u=(e[s*6]-t.padX)/t.scale,l=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,h=(e[s*6+3]-t.padY)/t.scale,c=hr((u+d)/2),m=hr((l+h)/2),y=hr((d-u+(h-l))/4);y>=1&&n.push({cx:c,cy:m,r:y})}return n}function wg(e){const t=[];for(const r of[...e].sort((n,i)=>n.r-i.r)){const n=(_g*r.r)**2;t.every(i=>(r.cx-i.cx)**2+(r.cy-i.cy)**2>n)&&t.push(r)}return t}function $g(e){const t=[];for(const r of[...e].sort((n,i)=>i.r-n.r))t.every(n=>Math.hypot(r.cx-n.cx,r.cy-n.cy)>=bg*(r.r+n.r))&&t.push(r);return t}function vg(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Mc(e.map(r=>r.r))*1.5));return[...e].sort((r,n)=>{const i=Math.floor(r.cy/t),s=Math.floor(n.cy/t);return i!==s?i-s:r.cx-n.cx})}function Dc(e,t,r){const n=Nc(e,t,r);return n.length===0?[]:vg($g(wg(n)))}function xg(e,t,r){return Nc(e,t,r)}function Uc(e,t,r){const n=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<r||n.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return n}const Pc=["brown","grey","blue","green","yellow","red","purple"],Sg={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Lc(e,t,r){return yg(e,t,r,Pc.length).map(n=>{const i=Pc[n.classIndex];return{color:i,family:Sg[i],box:n.box,confidence:n.confidence}})}const ut={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function fr(e,t,r){const n=Math.max(e,t,r),i=Math.min(e,t,r),s=n-i,a=n===0?0:Math.round(255*s/n);if(s===0)return{h:0,s:a,v:n};let u;return n===e?u=60*(t-r)/s:n===t?u=120+60*(r-e)/s:u=240+60*(e-t)/s,u<0&&(u+=360),{h:Math.round(u/2),s:a,v:n}}const Tg=.42,kg=22,Ig=43,Eg=120,zg=1.5,Cg=.72,Ag=110,qc=3;function mr(e,t,r){const{width:n,height:i,channels:s,data:a}=e;if(n<4||i<4)return 0;const u=Math.floor(n/2),l=Math.floor(i/2),d=Math.trunc(Math.min(n,i)*Tg);if(d<1)return 0;let h=0;for(let c=0;c<i;c++)for(let m=0;m<n;m++){if((m-u)**2+(c-l)**2>d*d)continue;const y=(c*n+m)*s,_=a[y],b=a[y+1],S=a[y+2];!t&&_>=250&&b>=250&&S>=250||(r(_,b,S),h+=1)}return h}function Og(e){let t=0,r=0,n=0,i=mr(e,!1,(s,a,u)=>{const l=fr(s,a,u);t+=l.h,r+=l.s,n+=l.v});return i===0&&(i=mr(e,!0,(s,a,u)=>{const l=fr(s,a,u);t+=l.h,r+=l.s,n+=l.v})),i===0?null:{h:t/i,s:r/i,v:n/i}}function Rg(e){let t=0,r=0,n=mr(e,!1,(s,a)=>{t+=s,r+=a});if(n===0&&(n=mr(e,!0,(s,a)=>{t+=s,r+=a})),n===0)return null;const i=r/n;return i<=1e-6?null:t/n/i}function Mg(e){let t=0;const r=mr(e,!0,(n,i,s)=>{t+=fr(n,i,s).s});return r===0?null:t/r}function Bg(e){const t=Og(e);if(t===null||t.s<=kg)return 1;if(t.s>=Eg){const r=Rg(e);return r!==null&&r>=zg?6:3}return t.s>=Ig?3:6}function Ng(e,t){const r=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return r;const n=e.map(a=>a.r).sort((a,u)=>a-u);if(n[0]<=0||!(n[1]>=n[0]*1.12&&n[2]>=n[1]*1.12))return r;const i=[0,1,2].sort((a,u)=>e[a].r-e[u].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>s.get(a))}function Dg(e,t){const r=[...t];if(e.length<qc||t.length!==e.length)return r;const n=e.map(a=>Mg(a)),i=n.filter(a=>a!==null);if(i.length<qc)return r;const s=Mc(i);return s<=0||n.forEach((a,u)=>{a!==null&&r[u]!==1&&a<Cg*s&&a<Ag&&(r[u]=1)}),r}function Wc(e,t){const{cx:r,cy:n,r:i}=t,s=Math.max(0,r-i),a=Math.max(0,n-i),u=Math.min(e.width,r+i),l=Math.min(e.height,n+i),d=Math.max(0,u-s),h=Math.max(0,l-a),c=new Uint8Array(d*h*3);for(let m=0;m<h;m++)for(let y=0;y<d;y++){const _=(m*d+y)*3;if((y+s-r)**2+(m+a-n)**2<=i*i){const S=((m+a)*e.width+(y+s))*e.channels;c[_]=e.data[S],c[_+1]=e.data[S+1],c[_+2]=e.data[S+2]}else c[_]=255,c[_+1]=255,c[_+2]=255}return{width:d,height:h,channels:3,data:c}}function Ug(e,t){const r=t.map(s=>Wc(e,s)),n=r.map(s=>Bg(s)),i=Ng(t,n);return Dg(r,i)}function Pg(e){const{width:t,height:r,channels:n,data:i}=e,s=new Uint8Array(t*r);for(let a=0,u=0;a<s.length;a++,u+=n)s[a]=i[u]*4899+i[u+1]*9617+i[u+2]*1868+8192>>14;return{width:t,height:r,data:s}}function Vc(e,t,r){const n=new Uint8Array(t*r),i=e.width/t,s=e.height/r;for(let a=0;a<r;a++){const u=a*s,l=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const h=d*i,c=Math.min((d+1)*i,e.width);let m=0,y=0;for(let _=Math.floor(u);_<l;_++){const b=Math.min(_+1,l)-Math.max(_,u);if(!(b<=0))for(let S=Math.floor(h);S<c;S++){const $=Math.min(S+1,c)-Math.max(S,h);$<=0||(m+=e.data[_*e.width+S]*$*b,y+=$*b)}}n[a*t+d]=Math.min(255,Math.max(0,hr(m/y)))}}return{width:t,height:r,data:n}}function Lg(e){const t=new Array(256).fill(0);for(const l of e.data)t[l]+=1;const r=e.data.length;let n=0;for(;n<256&&t[n]===0;)n+=1;const i=new Uint8Array(r);if(n>=255||t[n]===r)return i.fill(n<256?n:0),{width:e.width,height:e.height,data:i};const s=255/(r-t[n]),a=new Uint8Array(256);let u=0;for(let l=n+1;l<256;l++)u+=t[l],a[l]=Math.min(255,Math.max(0,hr(u*s)));for(let l=0;l<r;l++)i[l]=a[e.data[l]];return{width:e.width,height:e.height,data:i}}function qg(e){const{width:t,height:r,data:n}=e,i=new Uint8Array(t*r);for(let s=0;s<r;s++)for(let a=0;a<t;a++){let u=!0;for(let l=-1;l<=1&&u;l++)for(let d=-1;d<=1;d++){const h=a+d,c=s+l;if(!(h<0||h>=t||c<0||c>=r)&&n[c*t+h]===0){u=!1;break}}i[s*t+a]=u&&n[s*t+a]>0?255:0}return{width:t,height:r,data:i}}function Wg(e){const{width:t,height:r,data:n}=e,i=new Uint8Array(t*r);for(let s=0;s<r;s++)for(let a=0;a<t;a++){let u=!1;for(let l=-1;l<=1&&!u;l++)for(let d=-1;d<=1;d++){const h=a+d,c=s+l;if(h>=0&&h<t&&c>=0&&c<r&&n[c*t+h]>0){u=!0;break}}i[s*t+a]=u?255:0}return{width:t,height:r,data:i}}function Gc(e){const{width:t,height:r,data:n}=e,i=new Int32Array(t*r),s=[],a=new Int32Array(t*r);let u=1;for(let l=0;l<n.length;l++){if(n[l]===0||i[l]!==0)continue;let d=0,h=0;a[h++]=l,i[l]=u;let c=0,m=0,y=0;for(;d<h;){const _=a[d++],b=_%t,S=_/t|0;c+=1,m+=b,y+=S;for(let $=-1;$<=1;$++)for(let w=-1;w<=1;w++){if(w===0&&$===0)continue;const k=b+w,T=S+$;if(k<0||k>=t||T<0||T>=r)continue;const E=T*t+k;n[E]>0&&i[E]===0&&(i[E]=u,a[h++]=E)}}s[u]={area:c,centroidX:m/c,centroidY:y/c},u+=1}return{labels:i,stats:s}}function Vg(e,t,r){return Hc(Float32Array.from(e.data),e.width,t,r)}function Hc(e,t,r,n){const i=new Float32Array(t*t),s=t/2,a=-r*Math.PI/180,u=Math.cos(a),l=Math.sin(a);for(let d=0;d<t;d++)for(let h=0;h<t;h++){const c=h-s,m=d-s,y=u*c-l*m+s,_=l*c+u*m+s,b=Math.floor(y),S=Math.floor(_),$=y-b,w=_-S,k=(C,A)=>C>=0&&C<t&&A>=0&&A<t?e[A*t+C]:n,T=k(b,S)*(1-$)+k(b+1,S)*$,E=k(b,S+1)*(1-$)+k(b+1,S+1)*$;i[d*t+h]=T*(1-w)+E*w}return i}const Gg=.9,Hg=.34,Fg=[.55,.6,.66,.72],jg=22,Kg=88,Xg=35,Kt=28,ji=4,Zg=Array.from({length:15},(e,t)=>-21+t*3),Fc=[-2,0,2],Yg=3,Qg=.3;function Jg(e){return e.templates.flatMap(({label:t,bits:r})=>{const n=Uint8Array.from(atob(r),i=>i.charCodeAt(0));return n.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(n)}]})}function e0(e){let t=e.width,r=-1,n=e.height,i=-1,s=0;for(let b=0;b<e.height;b++)for(let S=0;S<e.width;S++)e.data[b*e.width+S]>0&&(s+=1,t=Math.min(t,S),r=Math.max(r,S),n=Math.min(n,b),i=Math.max(i,b));if(s<8)return null;const a=r-t+1,u=i-n+1,l=Math.max(u,a),d=new Uint8Array(l*l),h=Math.floor((l-a)/2),c=Math.floor((l-u)/2);for(let b=0;b<u;b++)for(let S=0;S<a;S++)d[(b+c)*l+(S+h)]=e.data[(b+n)*e.width+(S+t)];const m=Kt-2*ji,y=Vc({width:l,height:l,data:d},m,m),_=new Float32Array(Kt*Kt);for(let b=0;b<m;b++)for(let S=0;S<m;S++)_[(b+ji)*Kt+(S+ji)]=y.data[b*m+S]>110?1:0;return _}function t0(e,t){const{width:r,height:n,channels:i,data:s}=e,a=Math.floor(n/2),u=Math.floor(r/2),l=Math.trunc(Math.min(r,n)*Hg);if(l<4)return null;const d=a-l,h=u-l,c=2*l,m=2*l;if(c<6||m<6)return null;const y=new Int16Array(c*m),_=new Int16Array(c*m),b=new Int16Array(c*m),S=new Uint8Array(c*m),$=[],w=Math.min(c,m)/2;for(let D=0;D<c;D++)for(let te=0;te<m;te++){const P=((D+d)*r+(te+h))*i,{h:G,s:Z,v:q}=fr(s[P],s[P+1],s[P+2]),pe=D*m+te;y[pe]=G,_[pe]=Z,b[pe]=q,Math.sqrt((te-m/2)**2+(D-c/2)**2)/w<=t&&(S[pe]=1,$.push(q))}if($.length<16)return null;const k=Bc($,55);let T=0,E=0,C=0;const A=D=>y[D]>=jg&&y[D]<=Kg&&_[D]>=Xg,v=D=>b[D]>=k&&_[D]<=95&&!A(D)&&S[D]===1;for(let D=0;D<c*m;D++)S[D]===1&&(C+=1,b[D]>=130&&!A(D)&&(T+=1),v(D)&&(E+=1));const O=T>.5*C&&E<.15*C,U=new Uint8Array(c*m);if(O){const D=Bc($,45);for(let te=0;te<c*m;te++)U[te]=S[te]===1&&b[te]<=D?255:0}else for(let D=0;D<c*m;D++)U[D]=v(D)?255:0;const W={width:m,height:c,data:U},H=qg(W);let F=Gc(H),R=F;if(F.stats.length<=1&&(F=Gc(W),R=F,F.stats.length<=1))return null;const X=Math.min(c,m)/2;let j=0,Q=-1;for(let D=1;D<R.stats.length;D++){const te=R.stats[D];if(te===void 0)continue;const P=Math.hypot(te.centroidX-m/2,te.centroidY-c/2)/X,G=te.area*(1-.6*Math.min(P,1));G>Q&&(Q=G,j=D)}if(j===0)return null;const ce=new Uint8Array(c*m);for(let D=0;D<c*m;D++)ce[D]=R.labels[D]===j?255:0;return e0(Wg({width:m,height:c,data:ce}))}function r0(e,t,r,n,i,s){const a=Kt;let u=0,l=0;for(let d=0;d<a;d++){const h=d-s;if(!(h<0||h>=a))for(let c=0;c<a;c++){const m=c-i;if(m<0||m>=a)continue;const y=e[h*a+m];y!==0&&(l+=y,u+=y*r[d*a+c])}}return u/(l+n-u+1e-6)}function n0(e,t){const r=t.reduce((i,s)=>i+s,0);let n=-1;for(const i of Zg){const s=i===0?e:Hc(e,Kt,i,0),a=s.reduce((u,l)=>u+l,0);for(const u of Fc)for(const l of Fc){const d=r0(s,a,t,r,u,l);d>n&&(n=d)}}return n}function i0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const r=[];for(const a of Fg){const u=t0(e,a);if(u!==null)for(const{label:l,bits:d}of t)r.push([n0(u,d),l])}if(r.length===0)return[null,0];if(r.sort((a,u)=>u[0]-a[0]),r[0][0]<Qg)return[null,0];const n=new Map;for(const[a,u]of r.slice(0,Yg))n.set(u,(n.get(u)??0)+a);let i=0,s=-1;for(const[a,u]of n)u>s&&(s=u,i=a);return[i,r[0][0]]}const jc=128,a0=.56,s0=15,o0=.58,u0=70,l0=50,d0=.12,p0=.2,c0=.1,h0=.17,Kc=.15;function f0(e){const t=new Map;for(const[r,n]of Object.entries(e.templates)){const i=Uint8Array.from(atob(n),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(r,i)}return t}function Xc(e,t){const{width:r,height:n,channels:i,data:s}=e,a=Math.floor(r/2),u=Math.floor(n/2),l=Math.trunc(Math.min(r,n)*.5*t);if(l<1)return e;const d=Math.max(0,a-l),h=Math.max(0,u-l),c=Math.min(r,a+l),m=Math.min(n,u+l),y=c-d,_=m-h,b=new Uint8Array(y*_*i);for(let S=0;S<_;S++){const $=((S+h)*r+d)*i;b.set(s.subarray($,$+y*i),S*y*i)}return{width:y,height:_,channels:i,data:b}}function m0(e){const t=Xc(e,a0),r=Pg(t),n=Vc(r,jc,jc);return Lg(n)}function g0(e,t){const r=e.length;let n=0,i=0;for(let l=0;l<r;l++)n+=e[l],i+=t[l];n/=r,i/=r;let s=0,a=0,u=0;for(let l=0;l<r;l++){const d=e[l]-n,h=t[l]-i;s+=d*h,a+=d*d,u+=h*h}return s/(Math.sqrt(a*u)+1e-6)}function y0(e){const t=new Map([["masonry",0],["strategy",0]]),r=Xc(e,o0),{width:n,height:i,channels:s,data:a}=r,u=n*i||1;let l=0,d=0;for(let m=0;m<n*i;m++){const y=m*s,{h:_,s:b,v:S}=fr(a[y],a[y+1],a[y+2]);b>=u0&&S>=l0&&(_>=95&&_<=130&&(l+=1),(_<=8||_>=170)&&(d+=1))}const h=l/u,c=d/u;return h>=d0&&t.set("masonry",Kc*Math.min(1,h/p0)),c>=c0&&t.set("strategy",Kc*Math.min(1,c/h0)),t}function _0(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const r=m0(e);let n=0;for(const d of r.data)n+=d;const i=n/r.data.length,s=[];for(let d=0;d<360;d+=s0)s.push(Vg(r,d,i));const a=new Map;for(const[d,h]of t){let c=-1/0;for(const m of s){const y=g0(m,h);y>c&&(c=y)}a.set(d,c)}for(const[d,h]of y0(e))h>0&&a.has(d)&&a.set(d,a.get(d)+h);let u="",l=-1/0;for(const[d,h]of a)h>l&&(u=d,l=h);return[u,l]}const Ki="/7wd-scorer/models/";let Zc=!1;const Hr=new Map;function b0(){var e;Zc||(_e.wasm.wasmPaths="/7wd-scorer/ort/",_e.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Zc=!0)}const Xi=new Set;function w0(e){b0();let t=Hr.get(e);return t===void 0&&(t=pn.create(`${Ki}${ut[e].onnx}`,{executionProviders:Xi.has(e)?["wasm"]:["webgpu","wasm"]}),Hr.set(e,t),t.catch(()=>Hr.delete(e))),t}let Zi=null,Yi=null;async function $0(e,t){return[]}function v0(){return Yi===null&&(Yi=fetch(`${Ki}laurel_gallery.json`).then(async e=>e.ok?Jg(await e.json()):[]).catch(()=>[])),Yi}function x0(e,t,r,n){return S0(e,t-n,r-n,2*n,2*n)}function S0(e,t,r,n,i){const s=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(r)),u=Math.min(e.width,Math.round(t+n)),l=Math.min(e.height,Math.round(r+i)),d=Math.max(0,u-s),h=Math.max(0,l-a),c=new Uint8Array(d*h*3);for(let m=0;m<h;m++)for(let y=0;y<d;y++){const _=((m+a)*e.width+(y+s))*e.channels,b=(m*d+y)*3;c[b]=e.data[_],c[b+1]=e.data[_+1],c[b+2]=e.data[_+2]}return{width:d,height:h,channels:3,data:c}}function T0(){return Zi===null&&(Zi=fetch(`${Ki}token_templates.json`).then(async e=>e.ok?f0(await e.json()):new Map).catch(()=>new Map)),Zi}async function Yc(e){const t=await createImageBitmap(e);try{const n=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(n===null)throw new Error("OffscreenCanvas 2D context unavailable.");n.drawImage(t,0,0);const{data:i}=n.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Dt(e,t){const r=ut[e],{tensor:n,params:i}=gg(t,r.input),s=async()=>{const a=await w0(e),u={[a.inputNames[0]]:new Ve("float32",n,[1,3,r.input,r.input])};return{rows:(await a.run(u))[a.outputNames[0]].data,params:i}};try{return await s()}catch(a){if(Xi.has(e))throw a;return Xi.add(e),Hr.delete(e),await s()}}const k0=6,I0=2,E0=5,z0=2;async function C0(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},r=await Yc(e),n=await Dt("banner",r),i=Lc(n.rows,n.params,ut.banner.conf);if(t.banners=i.length,i.length>=k0)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await Dt("laurel",r),a=Uc(s.rows,s.params,ut.laurel.conf);if(t.laurels=a.length,a.length>=I0)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const u=await Dt("coin",r),l=Dc(u.rows,u.params,ut.coin.conf);return t.coins=l.length,l.length>=E0?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=z0?{...t,kind:"board",confidence:.4}:t}function A0(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function O0(e,t,r,n){const i={},s=[],a=[],u=[],l=[];let d=0,h=0,c=0,m=0;for(const _ of e){m+=1;const b=`${t} photo ${m}/${e.length}`;n(`${b}: reading pixels…`);const S=await Yc(_);n(`${b}: card banners…`);const $=await Dt("banner",S);for(const O of Lc($.rows,$.params,ut.banner.conf))i[O.family]=(i[O.family]??0)+1,c+=1;n(`${b}: laurels…`);const w=await Dt("laurel",S),k=await v0();for(const[O,U,W,H]of Uc(w.rows,w.params,ut.laurel.conf)){const F=Math.trunc((O+W)/2),R=Math.trunc((U+H)/2),X=Math.max(6,Math.trunc(Math.max(W-O,H-U)*Gg)),[j,Q]=i0(x0(S,F,R,X),k);s.push({value:j,valueRead:j!==null,center:[Math.round((O+W)/2),Math.round((U+H)/2)],boundingBox:{x:Math.trunc(O),y:Math.trunc(U),width:Math.trunc(W-O),height:Math.trunc(H-U)},confidence:Math.round(Q*1e4)/1e4,excluded:!1,photoIndex:m-1})}n(`${b}: progress tokens…`);const T=await Dt("token",S),E=await T0();for(const O of xg(T.rows,T.params,ut.token.conf)){const[U,W]=_0(Wc(S,O),E);U!==""?u.push({id:U,center:[O.cx,O.cy],radius:O.r,confidence:Math.round(W*1e4)/1e4}):h+=1}n(`${b}: wonder names…`);for(const O of await $0())l.some(U=>U.id===O.id)||l.push({id:O.id,name:O.name,builtWithCardUnderneath:!0,boundingBox:{x:0,y:0,width:0,height:0},confidence:O.confidence});n(`${b}: coins…`);const C=await Dt("coin",S),A=Dc(C.rows,C.params,ut.coin.conf),v=Ug(S,A);A.forEach((O,U)=>{const W=v[U];d+=W,a.push({denomination:W,center:[O.cx,O.cy],radius:O.r,denomSource:"colour"})})}c>0&&r.push({code:"OVERLAPPING_OBJECTS",message:`${t}: on-device counts cannot yet exclude cards tucked under wonders — verify the per-colour counts.`}),l.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by their printed name: `+l.map(_=>_.name).join(", ")+" — the BUILT flag is a suggestion (the card-underneath check is server-only): unselect any wonder that was not built."}),r.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: on-device mode — ${l.length>0?"guilds are":"wonders and guilds are"} not identified yet: pick them in the review below.`+(h>0?` ${h} token disc(s) found but not identified — pick them too.`:"")}),u.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+u.map(_=>_.id).join(", ")+" — confirm in the review."}),a.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${d} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const y=s.filter(_=>_.valueRead);return{...A0(),wonders:l,progressTokens:u,laurels:s,cardVictoryPoints:{value:y.reduce((_,b)=>_+(b.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-y.length,complete:s.length===y.length},cardCounts:{byFamily:i,source:c>0?"yolo":"none",tuckedExcluded:0},coins:{total:d,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function R0(e,t){const r=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],n={left:null,right:null};for(const i of["left","right"]){const s=e[i];s.length>0&&(n[i]=await O0(s,i,r,t))}return e.hasBoard&&r.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:n,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:r}}self.onmessage=e=>{const{id:t,kind:r}=e.data,n=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=r==="classify"?await C0(e.data.file):await R0(e.data.payload,n);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
