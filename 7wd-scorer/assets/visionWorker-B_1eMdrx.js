var m_=Object.defineProperty;var g_=(it,nt,qt)=>nt in it?m_(it,nt,{enumerable:!0,configurable:!0,writable:!0,value:qt}):it[nt]=qt;var Uf=(it,nt,qt)=>g_(it,typeof nt!="symbol"?nt+"":nt,qt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var it=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,qt=Object.getOwnPropertyNames,qf=Object.prototype.hasOwnProperty,Wf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),Wt=(e,t)=>{for(var r in t)it(e,r,{get:t[r],enumerable:!0})},Vf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of qt(t))!qf.call(e,n)&&n!==r&&it(e,n,{get:()=>t[n],enumerable:!(i=nt(t,n))||i.enumerable});return e},Zt=e=>Vf(it({},"__esModule",{value:!0}),e),Yt,pt,Vt,ga,ya,_a=U(()=>{Yt=new Map,pt=[],Vt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Yt.get(e);if(i===void 0)Yt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=pt.indexOf(e);n!==-1&&pt.splice(n,1);for(let s=0;s<pt.length;s++)if(Yt.get(pt[s]).priority<=r){pt.splice(s,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},ga=async e=>{let t=Yt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ya=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?pt:r,n,s=[],a=new Set;for(let l of i){let d=await ga(l);typeof d=="string"?s.push({name:l,err:d}):(n||(n=d),n===d&&a.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Gf=U(()=>{_a()}),ba,Hf=U(()=>{ba="1.27.0"}),ai,Ie,wa=U(()=>{Hf(),ai="warning",Ie={wasm:{},webgl:{},webgpu:{},versions:{common:ba},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ai=e}},get logLevel(){return ai}},Object.defineProperty(Ie,"logLevel",{enumerable:!0})}),_e,Ff=U(()=>{wa(),_e=Ie}),$a,va,jf=U(()=>{$a=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[3]):(n=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=s*n,h=0,g=c,y=c*2,_=-1;a==="RGBA"?(h=0,g=c,y=c*2,_=c*3):a==="RGB"?(h=0,g=c,y=c*2):a==="RBG"&&(h=0,y=c,g=c*2);for(let b=0;b<s;b++)for(let S=0;S<n;S++){let v=(e.data[h++]-d[0])*l[0],w=(e.data[g++]-d[1])*l[1],T=(e.data[y++]-d[2])*l[2],k=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+w+","+T+","+k+")",i.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},va=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[1],a=e.dims[3]):(n=e.dims[3],s=e.dims[2],a=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=s*n;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,b=2,S=3,v=0,w=h,T=h*2,k=-1;u==="RGBA"?(v=0,w=h,T=h*2,k=h*3):u==="RGB"?(v=0,w=h,T=h*2):u==="RBG"&&(v=0,T=h,w=h*2),i=r.createImageData(n,s);for(let E=0;E<s*n;y+=g,_+=g,b+=g,S+=g,E++)i.data[y]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[w++]-c[1])*d[1],i.data[b]=(e.data[T++]-c[2])*d[2],i.data[S]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),wr,xa,Sa,ka,Ta,Ia,Kf=U(()=>{oi(),wr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},s,a;typeof n.mean=="number"?s=[n.mean,n.mean,n.mean,n.mean]:s=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?a=[n.bias,n.bias,n.bias,n.bias]:a=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,y=1,_=2,b=3,S=0,v=d,w=d*2,T=-1;u==="RGB"&&(h=3,g=0,y=1,_=2,b=-1),l==="RGBA"?T=d*3:l==="RBG"?(S=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,S=d*2);for(let k=0;k<d;k++,g+=h,_+=h,y+=h,b+=h)c[S++]=(e[g]+a[0])/s[0],c[v++]=(e[y]+a[1])/s[1],c[w++]=(e[_]+a[2])/s[2],T!==-1&&b!==-1&&(c[T++]=(e[b]+a[3])/s[3]);return l==="RGBA"?new Be("float32",c,[1,4,r,i]):new Be("float32",c,[1,3,r,i])},xa=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;h.drawImage(e,0,0),a=h.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let y=d(g);if(y!=null)y.putImageData(e,0,0),a=y.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,y=e.width;return h.drawImage(e,0,0,y,g),a=h.getImageData(0,0,y,g).data,u.height=g,u.width=y,wr(a,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,h)=>{let g=l(),y=d(g);if(!e||!y)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(wr(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return wr(a,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Sa=(e,t)=>{let{width:r,height:i,download:n,dispose:s}=t,a=[1,i,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:a,download:n,dispose:s})},ka=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:s})},Ta=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:s})},Ia=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),vt,Qt,si,Ea,Xf=U(()=>{vt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),si=!1,Ea=()=>{if(!si){si=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(vt.set("int64",BigInt64Array),Qt.set(BigInt64Array,"int64")),t&&(vt.set("uint64",BigUint64Array),Qt.set(BigUint64Array,"uint64")),i?(vt.set("float16",r),Qt.set(r,"float16")):vt.set("float16",Uint16Array)}}}),za,Ca,Zf=U(()=>{oi(),za=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ca=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,oi=U(()=>{jf(),Kf(),Xf(),Zf(),Be=class{constructor(e,t,r){Ea();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let a=vt.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=vt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",a=e;else if(l==="boolean")i="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(e);else{let l=Qt.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,a=e}if(u===void 0)u=[a.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=a,this.dataLocation="cpu"}let s=za(n);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=s}static async fromImage(e,t){return xa(e,t)}static fromTexture(e,t){return Sa(e,t)}static fromGpuBuffer(e,t){return ka(e,t)}static fromMLTensor(e,t){return Ta(e,t)}static fromPinnedBuffer(e,t,r){return Ia(e,t,r)}toDataURL(e){return $a(this,e)}toImageData(e){return va(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ca(this,e)}}}),Ve,Aa=U(()=>{oi(),Ve=Be}),$r,ui,Qe,Ge,xt,St,Oa=U(()=>{wa(),$r=(e,t)=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeStamp(`${e}::ORT::${t}`)},ui=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),$r("CPU",a);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},Qe=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||ui("BEGIN",e)},Ge=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||ui("END",e)},xt=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.time(`ORT::${e}`)},St=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeEnd(`ORT::${e}`)}}),Ra,Yf=U(()=>{_a(),Aa(),Oa(),Ra=class Pf{constructor(t){this.handler=t}async run(t,r,i){Qe(),xt("InferenceSession.run");let n={},s={};if(typeof t!="object"||t===null||t instanceof Ve||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ve)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Ve)&&(d=!0,a=!1,n[h]=g)}if(d){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)n[d]=null;let u=await this.handler.run(t,n,s),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Ve?l[d]=c:l[d]=new Ve(c.type,c.data,c.dims)}return St("InferenceSession.run"),Ge(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){Qe(),xt("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await ya(a),d=await u.createInferenceSessionHandler(s,l);return St("InferenceSession.create"),Ge(),new Pf(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),li,Qf=U(()=>{Yf(),li=Ra}),Jf=U(()=>{}),em=U(()=>{}),tm=U(()=>{}),rm=U(()=>{}),im={};Wt(im,{InferenceSession:()=>li,TRACE:()=>$r,TRACE_EVENT_BEGIN:()=>xt,TRACE_EVENT_END:()=>St,TRACE_FUNC_BEGIN:()=>Qe,TRACE_FUNC_END:()=>Ge,Tensor:()=>Ve,env:()=>_e,registerBackend:()=>Vt});var Le=U(()=>{Gf(),Ff(),Qf(),Aa(),Jf(),em(),Oa(),tm(),rm()}),di=U(()=>{}),Ma={};Wt(Ma,{default:()=>Ba});var pi,ci,Ba,nm=U(()=>{var e;gc(),kt(),_i(),pi="ort-wasm-proxy-worker",ci=((e=globalThis.self)==null?void 0:e.name)===pi,ci&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":$i(i.wasm).then(()=>{Rn(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:s}=i;Mn(s,n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:n}=i,s=Lr(n);postMessage({type:r,out:s});break}case"create":{let{model:n,options:s}=i;Nn(n,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":Dn(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:s,inputs:a,outputIndices:u,options:l}=i;Pn(n,s,a,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},qn([...a,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Ln(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Ba=ci?null:t=>new Worker(t??Ne,{type:"module",name:pi})}),Na={};Wt(Na,{default:()=>Ua});async function Da(e={}){var Nf,Df;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((Nf=self.name)==null?void 0:Nf.startsWith("em-pthread"));t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=o=>async(...p)=>{var m;try{if(t.Yc)throw Error("Session already started");let f=t.Yc={Kd:p[0],errors:[]},x=await o(...p);if(t.Yc!==f)throw Error("Session mismatch");(m=t.dd)==null||m.flush();let I=f.errors;if(0<I.length){let C=await Promise.all(I);if(C=C.filter(B=>B),0<C.length)throw Error(C.join(`
`))}return x}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(f,x,I,C)=>m.registerBuffer(f,x,I,C),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,x,I)=>m.createDownloader(f,x,I),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Id=(f,x)=>{m.upload(f,x)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,x)=>m.createMLTensorDownloader(f,x),t.webnnRegisterMLTensor=(f,x,I,C)=>m.registerMLTensor(f,x,I,C),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterMLConstant=(f,x,I,C,B,q)=>m.registerMLConstant(f,x,I,C,B,t.Xc,q),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let a=()=>{let o=p=>(...m)=>{let f=tt;return m=p(...m),tt!=f?new Promise((x,I)=>{ia={resolve:x,reject:I}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var u,l,d=(o,p)=>{throw p},c=self.location.href,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(A(o))return new Promise((m,f)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):f(x.status)},x.onerror=f,x.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,y,_,b,S,v,w=console.log.bind(console),T=console.error.bind(console),k=w,E=T,z=!1,A=o=>o.startsWith("file://");function $(){_t.buffer!=D.buffer&&V()}if(n){let o=function(p){try{var m=p.data,f=m.Sc;if(f==="load"){let x=[];self.onmessage=I=>x.push(I),v=()=>{postMessage({Sc:"loaded"});for(let I of x)o(I);self.onmessage=o};for(let I of m.xd)t[I]&&!t[I].proxy||(t[I]=(...C)=>{postMessage({Sc:"callHandler",wd:I,args:C})},I=="print"&&(k=t[I]),I=="printErr"&&(E=t[I]));_t=m.Od,V(),y=m.Pd,qe(),ii()}else if(f==="run"){(function(x){var I=($(),K)[x+52>>>2>>>0];x=($(),K)[x+56>>>2>>>0],Hh(I,I-x),se(I)})(m.Rc),ua(m.Rc,0,0,1,0,0),Fc(),ea(m.Rc),M||(Ph(),M=!0);try{o0(m.Md,m.bd)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(f==="checkMailbox"?M&&Zr():f&&(E(`worker: received unknown command ${f}`),E(m)))}catch(x){throw Lh(),x}};var M=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var D,G,F,j,R,K,X,ee,fe,W,ue,P=!1;function V(){var o=_t.buffer;t.HEAP8=D=new Int8Array(o),F=new Int16Array(o),t.HEAPU8=G=new Uint8Array(o),j=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=K=new Uint32Array(o),X=new Float32Array(o),ee=new Float64Array(o),fe=new BigInt64Array(o),W=new BigUint64Array(o)}function Z(){P=!0,n?v():dt.sb()}function L(o){throw E(o="Aborted("+o+")"),z=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function ge(){return{a:{ma:Cy,gb:zy,g:u0,J:l0,f:d0,o:p0,h:c0,ha:h0,b:f0,T:m0,Ha:Qc,n:g0,$:rh,Xa:ih,Da:nh,Fa:ah,Ya:sh,Va:oh,Oa:uh,Ua:lh,ka:dh,Ea:ph,Ba:ch,Wa:hh,Ca:fh,bb:y0,ea:_0,wa:b0,ua:$0,da:x0,O:S0,H:k0,va:T0,_:R0,xa:M0,Ra:B0,za:D0,Ia:U0,sa:P0,fa:L0,Qa:ea,_a:q0,R:H0,r:Z0,c:Qn,hb:Y0,y:Q0,M:J0,D:ey,l:ty,s:vh,ib:ry,I:iy,S:ny,j:ay,u:sy,q:oy,k:uy,La:ly,Ma:dy,Na:py,Ja:Th,Ka:Ih,ta:Eh,db:hy,ab:my,v:gy,aa:yy,ga:_y,$a:fy,W:by,Za:wy,Aa:$y,F:cy,U:vy,la:ti,ya:Sy,fb:xy,eb:ky,Sa:Oh,Ta:Rh,Ga:fr,V:Mh,ja:Bh,Pa:Nh,ia:Dh,kb:c_,na:o_,lb:p_,oa:s_,G:Yy,e:My,t:Oy,w:Ay,B:Gy,mb:i_,K:Ky,x:Dy,pa:n_,Y:u_,ba:r_,nb:t_,ob:e_,P:Hy,qa:Jy,pb:Qy,N:Xy,Z:a_,d:Ry,A:Ny,m:By,jb:h_,p:Py,z:Ly,C:Uy,E:qy,L:Fy,qb:Zy,Q:l_,ca:jy,X:d_,rb:Vy,ra:Wy,i:Iy,a:_t,cb:Pe}}}async function qe(){function o(f,x){var I=dt=f.exports;f={};for(let[C,B]of Object.entries(I))typeof B=="function"?(I=W0(B),f[C]=I):f[C]=B;return dt=f,dt=(function(){var C=dt,B=H=>ae=>H(ae)>>>0,q=H=>()=>H()>>>0;return(C=Object.assign({},C)).tb=B(C.tb),C.Xb=q(C.Xb),C.Zb=B(C.Zb),C.lc=B(C.lc),C.mc=q(C.mc),C.qc=B(C.qc),C})(),Gc.push(dt._b),Uh=(f=dt).tb,Ph=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,ri=f.Xb,rt=t._free=f.Yb,yr=t._malloc=f.Zb,ua=f.ac,Lh=f.bc,qh=f.cc,Wh=f.dc,la=f.ec,Vh=f.fc,Gh=f.gc,le=f.hc,_r=f.ic,Hh=f.jc,se=f.kc,da=f.lc,oe=f.mc,Fh=f.nc,pa=f.oc,jh=f.pc,Kh=f.qc,Xh=f.rc,ca=f.sc,Zh=f.tc,Yh=f.uc,Qh=f.vc,Jh=f.wc,ef=f.xc,tf=f.yc,rf=f.zc,nf=f.Ac,af=f.Bc,sf=f.Cc,of=f.Dc,uf=f.Ec,lf=f.Fc,df=f.Gc,pf=f.Hc,cf=f.Ic,hf=f.Jc,ff=f.Kc,mf=f.Lc,gf=f.Mc,yf=f.Nc,_f=f.Pc,bf=f.Qc,wf=f.$c,$f=f.ad,vf=f.fd,xf=f.jd,Sf=f.kd,kf=f.ld,Tf=f.md,If=f.nd,Ef=f.od,zf=f.pd,Cf=f.qd,Af=f.vd,Of=f.Td,Rf=f.Ud,Mf=f.Vd,Bf=f.Wd,y=x,dt}var p,m=ge();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,(x,I)=>{f(o(x,I))})}):n?o(new WebAssembly.Instance(y,ge()),y):(ue??(ue=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),p=await(async function(f){var x=ue;if(!g&&!A(x))try{var I=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,f)}catch(C){E(`wasm streaming compile failed: ${C}`),E("falling back to ArrayBuffer instantiation")}return(async function(C,B){try{var q=await(async function(H){if(!g)try{var ae=await u(H);return new Uint8Array(ae)}catch{}if(H==ue&&g)H=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";H=l(H)}return H})(C);return await WebAssembly.instantiate(q,B)}catch(H){E(`failed to asynchronously prepare wasm: ${H}`),L(H)}})(x,f)})(m),o(p.instance,p.module))}class Se{constructor(p){Uf(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Oe=o=>{o.terminate(),o.onmessage=()=>{}},Re=[],Ue=0,Me=null,gt=o=>{yt.length==0&&(Kc(),jc(yt[0]));var p=yt.pop();if(!p)return 6;mr.push(p),Ut[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.rd),0},we=0,ie=(o,p,...m)=>{var f,x=16*m.length,I=oe(),C=da(x),B=C>>>3;for(f of m)typeof f=="bigint"?(($(),fe)[B++>>>0]=1n,($(),fe)[B++>>>0]=f):(($(),fe)[B++>>>0]=0n,($(),ee)[B++>>>0]=f);return o=qh(o,0,x,C,p),se(I),o};function Pe(o){if(n)return ie(0,1,o);if(_=o,!(0<we)){for(var p of mr)Oe(p);for(p of yt)Oe(p);yt=[],mr=[],Ut={},z=!0}d(0,new Se(o))}function Hr(o){if(n)return ie(1,0,o);fr(o)}var fr=o=>{if(_=o,n)throw Hr(o),"unwind";Pe(o)},yt=[],mr=[],Gc=[],Ut={},Hc=o=>{var p=o.Rc;delete Ut[p],yt.push(o),mr.splice(mr.indexOf(o),1),o.Rc=0,Wh(p)};function Fc(){Gc.forEach(o=>o())}var jc=o=>new Promise(p=>{o.onmessage=x=>{var I=x.data;if(x=I.Sc,I.Zc&&I.Zc!=ri()){var C=Ut[I.Zc];C?C.postMessage(I,I.rd):E(`Internal error! Worker sent a message "${x}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?Zr():x==="spawnThread"?gt(I):x==="cleanupThread"?Xr(()=>{Hc(Ut[I.Nd])}):x==="loaded"?(o.loaded=!0,p(o)):I.target==="setimmediate"?o.postMessage(I):x==="uncaughtException"?o.onerror(I.error):x==="callHandler"?t[I.wd](...I.args):x&&E(`worker sent an unknown command ${x}`)},o.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Sc:"load",xd:f,Od:_t,Pd:y})});function Kc(){var o=new Worker((()=>{let p=URL;return self.location.href>"file:"&&self.location.href<"file;"?new p("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});yt.push(o)}var _t,o0=(o,p)=>{we=0,o=ca(o,p),0<we?_=o:la(o)},Fr=[],jr=0;function u0(o){var p=new Kn(o>>>=0);return($(),D)[p.Tc+12>>>0]==0&&(Xc(p,!0),jr--),Zc(p,!1),Fr.push(p),Kh(o)}var Kt=0,l0=()=>{le(0,0);var o=Fr.pop();Fh(o.cd),Kt=0};function Xc(o,p){p=p?1:0,($(),D)[o.Tc+12>>>0]=p}function Zc(o,p){p=p?1:0,($(),D)[o.Tc+13>>>0]=p}class Kn{constructor(p){this.cd=p,this.Tc=p-24}}var Xn=o=>{var p=Kt;if(!p)return _r(0),0;var m=new Kn(p);($(),K)[m.Tc+16>>>2>>>0]=p;var f=($(),K)[m.Tc+4>>>2>>>0];if(!f)return _r(0),p;for(var x of o){if(x===0||x===f)break;if(jh(x,f,m.Tc+16))return _r(x),p}return _r(f),p};function d0(){return Xn([])}function p0(o){return Xn([o>>>0])}function c0(o,p,m,f){return Xn([o>>>0,p>>>0,m>>>0,f>>>0])}var h0=()=>{var o=Fr.pop();o||L("no exception to throw");var p=o.cd;throw($(),D)[o.Tc+13>>>0]==0&&(Fr.push(o),Zc(o,!0),Xc(o,!1),jr++),pa(p),Kt=p};function f0(o,p,m){var f=new Kn(o>>>=0);throw p>>>=0,m>>>=0,($(),K)[f.Tc+16>>>2>>>0]=0,($(),K)[f.Tc+4>>>2>>>0]=p,($(),K)[f.Tc+8>>>2>>>0]=m,pa(o),jr++,Kt=o}var m0=()=>jr;function Yc(o,p,m,f){return n?ie(2,1,o,p,m,f):Qc(o,p,m,f)}function Qc(o,p,m,f){if(o>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return n&&x.length===0?Yc(o,p,m,f):(o={Ld:m,Rc:o,bd:f,rd:x},n?(o.Sc="spawnThread",postMessage(o,x),0):gt(o))}function g0(o){throw Kt||(Kt=o>>>0),Kt}var Jc=globalThis.TextDecoder&&new TextDecoder,eh=(o,p,m,f)=>{if(m=p+m,f)return m;for(;o[p]&&!(p>=m);)++p;return p},th=(o,p=0,m,f)=>{if(16<(m=eh(o,p>>>=0,m,f))-p&&o.buffer&&Jc)return Jc.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(f="";p<m;){var x=o[p++];if(128&x){var I=63&o[p++];if((224&x)==192)f+=String.fromCharCode((31&x)<<6|I);else{var C=63&o[p++];65536>(x=(240&x)==224?(15&x)<<12|I<<6|C:(7&x)<<18|I<<12|C<<6|63&o[p++])?f+=String.fromCharCode(x):(x-=65536,f+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else f+=String.fromCharCode(x)}return f},ke=(o,p,m)=>(o>>>=0)?th(($(),G),o,p,m):"";function rh(o,p,m){return n?ie(3,1,o,p,m):0}function ih(o,p){if(n)return ie(4,1,o,p)}function nh(o,p){if(n)return ie(5,1,o,p)}function ah(o,p,m){if(n)return ie(6,1,o,p,m)}function sh(o,p,m){return n?ie(7,1,o,p,m):0}function oh(o,p){if(n)return ie(8,1,o,p)}function uh(o,p,m){if(n)return ie(9,1,o,p,m)}function lh(o,p,m,f){if(n)return ie(10,1,o,p,m,f)}function dh(o,p,m,f){if(n)return ie(11,1,o,p,m,f)}function ph(o,p,m,f){if(n)return ie(12,1,o,p,m,f)}function ch(o){if(n)return ie(13,1,o)}function hh(o,p){if(n)return ie(14,1,o,p)}function fh(o,p,m){if(n)return ie(15,1,o,p,m)}var y0=()=>L(""),et=o=>{o>>>=0;for(var p="";;){var m=($(),G)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},Zn={},Yn={},Xt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function lt(o,p,m={}){return(function(f,x,I={}){var C=x.name;if(!f)throw new Xt(`type "${C}" must have a positive integer typeid pointer`);if(Yn.hasOwnProperty(f)){if(I.yd)return;throw new Xt(`Cannot register type '${C}' twice`)}Yn[f]=x,Zn.hasOwnProperty(f)&&(x=Zn[f],delete Zn[f],x.forEach(B=>B()))})(o,p,m)}var mh=(o,p,m)=>{switch(p){case 1:return m?f=>($(),D)[f>>>0]:f=>($(),G)[f>>>0];case 2:return m?f=>($(),F)[f>>>1>>>0]:f=>($(),j)[f>>>1>>>0];case 4:return m?f=>($(),R)[f>>>2>>>0]:f=>($(),K)[f>>>2>>>0];case 8:return m?f=>($(),fe)[f>>>3>>>0]:f=>($(),W)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function _0(o,p,m,f,x){o>>>=0,m>>>=0,p=et(p>>>0);let I=C=>C;if(f=f===0n){let C=8*m;I=B=>BigInt.asUintN(C,B),x=I(x)}lt(o,{name:p,Oc:I,Vc:(C,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:mh(p,m,!f),Wc:null})}function b0(o,p,m,f){lt(o>>>=0,{name:p=et(p>>>0),Oc:function(x){return!!x},Vc:function(x,I){return I?m:f},Uc:function(x){return this.Oc(($(),G)[x>>>0])},Wc:null})}var gh=[],Pt=[0,1,,1,null,1,!0,1,!1,1];function Qn(o){9<(o>>>=0)&&--Pt[o+1]===0&&(Pt[o]=void 0,gh.push(o))}var We=o=>{if(!o)throw new Xt(`Cannot use deleted val. handle = ${o}`);return Pt[o]},Ye=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=gh.pop()||Pt.length;return Pt[p]=o,Pt[p+1]=1,p}};function Jn(o){return this.Oc(($(),K)[o>>>2>>>0])}var w0={name:"emscripten::val",Oc:o=>{var p=We(o);return Qn(o),p},Vc:(o,p)=>Ye(p),Uc:Jn,Wc:null};function $0(o){return lt(o>>>0,w0)}var v0=(o,p)=>{switch(p){case 4:return function(m){return this.Oc(($(),X)[m>>>2>>>0])};case 8:return function(m){return this.Oc(($(),ee)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function x0(o,p,m){m>>>=0,lt(o>>>=0,{name:p=et(p>>>0),Oc:f=>f,Vc:(f,x)=>x,Uc:v0(p,m),Wc:null})}function S0(o,p,m,f,x){o>>>=0,m>>>=0,p=et(p>>>0);let I=B=>B;if(f===0){var C=32-8*m;I=B=>B<<C>>>C,x=I(x)}lt(o,{name:p,Oc:I,Vc:(B,q)=>q,Uc:mh(p,m,f!==0),Wc:null})}function k0(o,p,m){function f(I){var C=($(),K)[I>>>2>>>0];return I=($(),K)[I+4>>>2>>>0],new x(($(),D).buffer,I,C)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];lt(o>>>=0,{name:m=et(m>>>0),Oc:f,Uc:f},{yd:!0})}var bt=(o,p,m)=>{var f=($(),G);if(p>>>=0,0<m){var x=p;m=p+m-1;for(var I=0;I<o.length;++I){var C=o.codePointAt(I);if(127>=C){if(p>=m)break;f[p++>>>0]=C}else if(2047>=C){if(p+1>=m)break;f[p++>>>0]=192|C>>6,f[p++>>>0]=128|63&C}else if(65535>=C){if(p+2>=m)break;f[p++>>>0]=224|C>>12,f[p++>>>0]=128|C>>6&63,f[p++>>>0]=128|63&C}else{if(p+3>=m)break;f[p++>>>0]=240|C>>18,f[p++>>>0]=128|C>>12&63,f[p++>>>0]=128|C>>6&63,f[p++>>>0]=128|63&C,I++}}f[p>>>0]=0,o=p-x}else o=0;return o},Kr=o=>{for(var p=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function T0(o,p){lt(o>>>=0,{name:p=et(p>>>0),Oc(m){var f=($(),K)[m>>>2>>>0];return f=ke(m+4,f,!0),rt(m),f},Vc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var x=typeof f=="string";if(!(x||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Xt("Cannot pass non-string to std::string");var I=x?Kr(f):f.length,C=yr(4+I+1),B=C+4;return($(),K)[C>>>2>>>0]=I,x?bt(f,B,I+1):($(),G).set(f,B>>>0),m!==null&&m.push(rt,C),C},Uc:Jn,Wc(m){rt(m)}})}var yh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,I0=(o,p,m)=>{if(o>>>=1,16<(p=eh(($(),j),o,p/2,m))-o&&yh)return yh.decode(($(),j).slice(o,p));for(m="";o<p;++o){var f=($(),j)[o>>>0];m+=String.fromCharCode(f)}return m},E0=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var f=p;m=(m-=2)<2*o.length?m/2:o.length;for(var x=0;x<m;++x){var I=o.charCodeAt(x);($(),F)[p>>>1>>>0]=I,p+=2}return($(),F)[p>>>1>>>0]=0,p-f},z0=o=>2*o.length,C0=(o,p,m)=>{var f="";o>>>=2;for(var x=0;!(x>=p/4);x++){var I=($(),K)[o+x>>>0];if(!I&&!m)break;f+=String.fromCodePoint(I)}return f},A0=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var f=p;m=f+m-4;for(var x=0;x<o.length;++x){var I=o.codePointAt(x);if(65535<I&&x++,($(),R)[p>>>2>>>0]=I,(p+=4)+4>m)break}return($(),R)[p>>>2>>>0]=0,p-f},O0=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function R0(o,p,m){if(o>>>=0,p>>>=0,m=et(m>>>=0),p===2)var f=I0,x=E0,I=z0;else f=C0,x=A0,I=O0;lt(o,{name:m,Oc:C=>{var B=($(),K)[C>>>2>>>0];return B=f(C+4,B*p,!0),rt(C),B},Vc:(C,B)=>{if(typeof B!="string")throw new Xt(`Cannot pass non-string to C++ string type ${m}`);var q=I(B),H=yr(4+q+p);return($(),K)[H>>>2>>>0]=q/p,x(B,H+4,q+p),C!==null&&C.push(rt,H),H},Uc:Jn,Wc(C){rt(C)}})}function M0(o,p){lt(o>>>=0,{zd:!0,name:p=et(p>>>0),Oc:()=>{},Vc:()=>{}})}function B0(o){ua(o>>>0,!i,1,!r,131072,!1),Fc()}var Xr=o=>{if(!z)try{if(o(),!(0<we))try{n?ri()&&la(_):fr(_)}catch(p){p instanceof Se||p=="unwind"||d(0,p)}}catch(p){p instanceof Se||p=="unwind"||d(0,p)}},N0=!Atomics.waitAsync||((Df=globalThis.navigator)==null?void 0:Df.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ea(o){o>>>=0,N0||(Atomics.waitAsync(($(),R),o>>>2,o).value.then(Zr),o+=128,Atomics.store(($(),R),o>>>2,1))}var Zr=()=>Xr(()=>{var o=ri();o&&(ea(o),Gh())});function D0(o,p){(o>>>=0)==p>>>0?setTimeout(Zr):n?postMessage({Zc:o,Sc:"checkMailbox"}):(o=Ut[o])&&o.postMessage({Sc:"checkMailbox"})}var ta=[];function U0(o,p,m,f,x){for(p>>>=0,x>>>=0,ta.length=0,m=x>>>3,f=x+f>>>3;m<f;){var I;I=($(),fe)[m++>>>0]?($(),fe)[m++>>>0]:($(),ee)[m++>>>0],ta.push(I)}return(p?ha[p]:Ey[o])(...ta)}var P0=()=>{we=0};function L0(o){o>>>=0,n?postMessage({Sc:"cleanupThread",Nd:o}):Hc(Ut[o])}function q0(o){}var Yr=o=>{try{o()}catch(p){L(p)}};function W0(o){var p=(...m)=>{Qr.push(o);try{return o(...m)}finally{z||(Qr.pop(),tt&&wt===1&&Qr.length===0&&(wt=0,we+=1,Yr(Rf),typeof Fibers<"u"&&Fibers.Zd()))}};return wh.set(o,p),p}var wt=0,tt=null,_h=0,Qr=[],ra=new Map,bh=new Map,wh=new Map,V0=0,ia=null,G0=[],$h=o=>(function(p){if(!z){if(wt===0){var m=!1,f=!1;p((x=0)=>{if(!z&&(_h=x,m=!0,f)){wt=2,Yr(()=>Mf(tt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var I=(function(){var q=($(),R)[tt+8>>>2>>>0];return q=bh.get(q),q=wh.get(q),--we,q()})()}catch(q){I=q,x=!0}var C=!1;if(!tt){var B=ia;B&&(ia=null,(x?B.reject:B.resolve)(I),C=!0)}if(x&&!C)throw I}}),f=!0,m||(wt=1,tt=(function(){var x=yr(65548),I=x+12;if(($(),K)[x>>>2>>>0]=I,($(),K)[x+4>>>2>>>0]=I+65536,I=Qr[0],!ra.has(I)){var C=V0++;ra.set(I,C),bh.set(C,I)}return I=ra.get(I),($(),R)[x+8>>>2>>>0]=I,x})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Yr(()=>Of(tt)))}else wt===2?(wt=0,Yr(Bf),rt(tt),tt=null,G0.forEach(Xr)):L(`invalid state: ${wt}`);return _h}})(p=>{o().then(p)});function H0(o){return o>>>=0,$h(async()=>{var p=await We(o);return Ye(p)})}var na=[],F0=o=>{var p=na.length;return na.push(o),p},j0=(o,p)=>{for(var m=Array(o),f=0;f<o;++f){var x=f,I=($(),K)[p+4*f>>>2>>>0],C=Yn[I];if(C===void 0)throw o=`parameter ${f}`,I=Uh(I),p=et(I),rt(I),new Xt(`${o} has unknown type ${p}`);m[x]=C}return m},K0=(o,p,m)=>{var f=[];return o=o(f,m),f.length&&(($(),K)[p>>>2>>>0]=Ye(f)),o},X0={},Jr=o=>{var p=X0[o];return p===void 0?et(o):p};function Z0(o,p,m){var[f,...x]=j0(o,p>>>0);p=f.Vc.bind(f);var I=x.map(q=>q.Uc.bind(q));o--;var C={toValue:We};switch(o=I.map((q,H)=>{var ae=`argFromPtr${H}`;return C[ae]=q,`${ae}(args${H?"+"+8*H:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:C.getStringOrSymbol=Jr,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,f.zd||(C.toReturnWire=p,C.emval_returnValue=K0,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(C),B)(...Object.values(C)),B=`methodCaller<(${x.map(q=>q.name)}) => ${f.name}>`,F0(Object.defineProperty(m,"name",{value:B}))}function Y0(o,p){return p>>>=0,(o=We(o>>>0))==We(p)}function Q0(o){return(o>>>=0)?(o=Jr(o),Ye(globalThis[o])):Ye(globalThis)}function J0(o){return o=Jr(o>>>0),Ye(t[o])}function ey(o,p){return p>>>=0,o=We(o>>>0),p=We(p),Ye(o[p])}function ty(o){9<(o>>>=0)&&(Pt[o+1]+=1)}function vh(o,p,m,f,x){return na[o>>>0](p>>>0,m>>>0,f>>>0,x>>>0)}function ry(o,p,m,f,x){return vh(o>>>0,p>>>0,m>>>0,f>>>0,x>>>0)}function iy(){return Ye([])}function ny(o){o=We(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Ye(p)}function ay(o){return Ye(Jr(o>>>0))}function sy(){return Ye({})}function oy(o){for(var p=We(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}Qn(o)}function uy(o,p,m){p>>>=0,m>>>=0,o=We(o>>>0),p=We(p),m=We(m),o[p]=m}function ly(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getUTCSeconds(),($(),R)[p+4>>>2>>>0]=o.getUTCMinutes(),($(),R)[p+8>>>2>>>0]=o.getUTCHours(),($(),R)[p+12>>>2>>>0]=o.getUTCDate(),($(),R)[p+16>>>2>>>0]=o.getUTCMonth(),($(),R)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),R)[p+28>>>2>>>0]=o}var xh=o=>o%4==0&&(o%100!=0||o%400==0),Sh=[0,31,60,91,121,152,182,213,244,274,305,335],kh=[0,31,59,90,120,151,181,212,243,273,304,334];function dy(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),R)[p>>>2>>>0]=o.getSeconds(),($(),R)[p+4>>>2>>>0]=o.getMinutes(),($(),R)[p+8>>>2>>>0]=o.getHours(),($(),R)[p+12>>>2>>>0]=o.getDate(),($(),R)[p+16>>>2>>>0]=o.getMonth(),($(),R)[p+20>>>2>>>0]=o.getFullYear()-1900,($(),R)[p+24>>>2>>>0]=o.getDay();var m=(xh(o.getFullYear())?Sh:kh)[o.getMonth()]+o.getDate()-1|0;($(),R)[p+28>>>2>>>0]=m,($(),R)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),($(),R)[p+32>>>2>>>0]=o}function py(o){o>>>=0;var p=new Date(($(),R)[o+20>>>2>>>0]+1900,($(),R)[o+16>>>2>>>0],($(),R)[o+12>>>2>>>0],($(),R)[o+8>>>2>>>0],($(),R)[o+4>>>2>>>0],($(),R)[o>>>2>>>0],0),m=($(),R)[o+32>>>2>>>0],f=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(I,x);return 0>m?($(),R)[o+32>>>2>>>0]=+(x!=I&&C==f):0<m!=(C==f)&&(x=Math.max(I,x),p.setTime(p.getTime()+6e4*((0<m?C:x)-f))),($(),R)[o+24>>>2>>>0]=p.getDay(),m=(xh(p.getFullYear())?Sh:kh)[p.getMonth()]+p.getDate()-1|0,($(),R)[o+28>>>2>>>0]=m,($(),R)[o>>>2>>>0]=p.getSeconds(),($(),R)[o+4>>>2>>>0]=p.getMinutes(),($(),R)[o+8>>>2>>>0]=p.getHours(),($(),R)[o+12>>>2>>>0]=p.getDate(),($(),R)[o+16>>>2>>>0]=p.getMonth(),($(),R)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Th(o,p,m,f,x,I,C){return n?ie(16,1,o,p,m,f,x,I,C):-52}function Ih(o,p,m,f,x,I){if(n)return ie(17,1,o,p,m,f,x,I)}var gr={},cy=()=>performance.timeOrigin+performance.now();function Eh(o,p){if(n)return ie(18,1,o,p);if(gr[o]&&(clearTimeout(gr[o].id),delete gr[o]),!p)return 0;var m=setTimeout(()=>{delete gr[o],Xr(()=>Vh(o,performance.timeOrigin+performance.now()))},p);return gr[o]={id:m,Yd:p},0}function hy(o,p,m,f){o>>>=0,p>>>=0,m>>>=0,f>>>=0;var x=new Date().getFullYear(),I=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var C=Math.max(I,x);($(),K)[o>>>2>>>0]=60*C,($(),R)[p>>>2>>>0]=+(I!=x),o=(p=B=>{var q=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(q/60)).padStart(2,"0")}${String(q%60).padStart(2,"0")}`})(I),p=p(x),x<I?(bt(o,m,17),bt(p,f,17)):(bt(o,f,17),bt(p,m,17))}var fy=()=>Date.now();function my(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),($(),fe)[m>>>3>>>0]=BigInt(o),0):28}var aa=[],zh=(o,p)=>{aa.length=0;for(var m;m=($(),G)[o++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,aa.push(m==112?($(),K)[p>>>2>>>0]:m==106?($(),fe)[p>>>3>>>0]:m==105?($(),R)[p>>>2>>>0]:($(),ee)[p>>>3>>>0]),p+=f?8:4}return aa};function gy(o,p,m){return o>>>=0,p=zh(p>>>0,m>>>0),ha[o](...p)}function yy(o,p,m){return o>>>=0,p=zh(p>>>0,m>>>0),ha[o](...p)}var _y=()=>{};function by(o,p){return E(ke(o>>>0,p>>>0))}var wy=()=>{throw we+=1,"unwind"};function $y(){return 4294901760}var vy=()=>navigator.hardwareConcurrency,Lt={},ei=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},Ch=o=>{for(var p of o)(o=ei(p))&&(Lt[o]=p)};function xy(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Ch(o),Lt.gd=ei(o[3]),Lt.Jd=o,Lt.gd}function ti(o){if(!(o=Lt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}rt(ti.hd??0),p=Kr(o)+1;var m=yr(p);return m&&bt(o,m,p),ti.hd=m,ti.hd}function Sy(o){o>>>=0;var p=($(),G).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-_t.buffer.byteLength+65535)/65536|0;try{_t.grow(f),V();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function ky(o,p,m){if(o>>>=0,p>>>=0,Lt.gd==o)var f=Lt.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),Ch(f);for(var x=3;f[x]&&ei(f[x])!=o;)++x;for(o=0;o<m&&f[o+x];++o)($(),R)[p+4*o>>>2>>>0]=ei(f[o+x]);return o}var sa,oa={},Ah=()=>{var f;if(!sa){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((f=globalThis.navigator)==null?void 0:f.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in oa)oa[o]===void 0?delete p[o]:p[o]=oa[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);sa=m}return sa};function Oh(o,p){if(n)return ie(19,1,o,p);o>>>=0,p>>>=0;var m,f=0,x=0;for(m of Ah()){var I=p+f;($(),K)[o+x>>>2>>>0]=I,f+=bt(m,I,1/0)+1,x+=4}return 0}function Rh(o,p){if(n)return ie(20,1,o,p);o>>>=0,p>>>=0;var m=Ah();for(var f of(($(),K)[o>>>2>>>0]=m.length,o=0,m))o+=Kr(f)+1;return($(),K)[p>>>2>>>0]=o,0}function Mh(o){return n?ie(21,1,o):52}function Bh(o,p,m,f){return n?ie(22,1,o,p,m,f):52}function Nh(o,p,m,f){return n?ie(23,1,o,p,m,f):70}var Ty=[null,[],[]];function Dh(o,p,m,f){if(n)return ie(24,1,o,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var x=0,I=0;I<m;I++){var C=($(),K)[p>>>2>>>0],B=($(),K)[p+4>>>2>>>0];p+=8;for(var q=0;q<B;q++){var H=o,ae=($(),G)[C+q>>>0],pe=Ty[H];ae===0||ae===10?((H===1?k:E)(th(pe)),pe.length=0):pe.push(ae)}x+=B}return($(),K)[f>>>2>>>0]=x,0}function Iy(o){return o>>>0}n||(function(){for(var o=t.numThreads-1;o--;)Kc();Re.push(async()=>{var p=(async function(){if(!n)return Promise.all(yt.map(jc))})();Ue++,await p,--Ue==0&&Me&&(p=Me,Me=null,p())})})(),n||(_t=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),V()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>oe(),t.stackRestore=o=>se(o),t.stackAlloc=o=>da(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":($(),D)[o>>>0]=p;break;case"i16":($(),F)[o>>>1>>>0]=p;break;case"i32":($(),R)[o>>>2>>>0]=p;break;case"i64":($(),fe)[o>>>3>>>0]=BigInt(p);break;case"float":($(),X)[o>>>2>>>0]=p;break;case"double":($(),ee)[o>>>3>>>0]=p;break;case"*":($(),K)[o>>>2>>>0]=p;break;default:L(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),D)[o>>>0];case"i16":return($(),F)[o>>>1>>>0];case"i32":return($(),R)[o>>>2>>>0];case"i64":return($(),fe)[o>>>3>>>0];case"float":return($(),X)[o>>>2>>>0];case"double":return($(),ee)[o>>>3>>>0];case"*":return($(),K)[o>>>2>>>0];default:L(`invalid type for getValue: ${p}`)}},t.UTF8ToString=ke,t.stringToUTF8=bt,t.lengthBytesUTF8=Kr;var Uh,Ph,ri,rt,yr,ua,Lh,qh,Wh,la,Vh,Gh,le,_r,Hh,se,da,oe,Fh,pa,jh,Kh,Xh,ca,Zh,Yh,Qh,Jh,ef,tf,rf,nf,af,sf,of,uf,lf,df,pf,cf,hf,ff,mf,gf,yf,_f,bf,wf,$f,vf,xf,Sf,kf,Tf,If,Ef,zf,Cf,Af,Of,Rf,Mf,Bf,dt,Ey=[Pe,Hr,Yc,rh,ih,nh,ah,sh,oh,uh,lh,dh,ph,ch,hh,fh,Th,Ih,Eh,Oh,Rh,Mh,Bh,Nh,Dh],ha={1003524:(o,p,m,f,x)=>{if(t===void 0||!t.Xc)return 1;if((o=ke(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>o.byteLength)return 3;try{let I=o.subarray(p,p+m);switch(x){case 0:($(),G).set(I,f>>>0);break;case 1:t.Qd?t.Qd(f,I):t.Id(f,I);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,m)=>{t.td(o,($(),G).subarray(p>>>0,p+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1004704:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,m,f,x)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007283:(o,p,m,f,x)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007457:(o,p,m,f,x)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007631:(o,p,m,f,x)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007806:(o,p,m,f,x)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007980:(o,p,m,f,x)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008153:(o,p,m,f,x)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008326:(o,p,m,f,x)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008503:(o,p,m,f,x)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008683:(o,p,m,f,x)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1009040:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:ke(m),format:f?"NHWC":"NCHW"})},1009173:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:ke(m),format:f?"NHWC":"NCHW"})},1009306:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e,$t)=>{t.$b("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[x],pads:[I,C],strides:[B],wIsConst:()=>!!($(),D)[H>>>0],outputPadding:ae?Array.from(($(),R).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:ye?Array.from(($(),R).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:ke($t)})},1009739:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(C)>>>0,(Number(C)>>>0)+2>>>0)),wIsConst:()=>!!($(),D)[q>>>0],outputPadding:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(ye)>>>0)):[],activation:ke($e)})},1010400:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e,$t)=>{t.$b("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[x],pads:[I,C],strides:[B],wIsConst:()=>!!($(),D)[H>>>0],outputPadding:ae?Array.from(($(),R).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:ye?Array.from(($(),R).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:ke($t)})},1010833:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from(($(),R).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from(($(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from(($(),R).subarray(Number(C)>>>0,(Number(C)>>>0)+2>>>0)),wIsConst:()=>!!($(),D)[q>>>0],outputPadding:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(ye)>>>0)):[],activation:ke($e)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e)=>{t.$b("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e)=>{t.$b("AveragePool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e)=>{t.$b("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e)=>{t.$b("MaxPool",o,{format:$e?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],pads:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),R).subarray(Number(pe)>>>0,Number(ye)>>>0)):[]})},1013758:(o,p,m,f,x)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:f,transB:x})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,m,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014024:(o,p,m,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,m,f,x)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,m,f,x,I,C,B,q,H,ae)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:ke(x),cubicCoeffA:I,excludeOutside:C,extrapolationValue:B,keepAspectRatioPolicy:ke(q),mode:ke(H),nearestMode:ke(ae)})},1015056:(o,p,m,f,x,I,C)=>{t.$b("Slice",o,{starts:p?Array.from(($(),R).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[],axes:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(C)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015486:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:ke(p)})},1015734:(o,p,m,f,x)=>{t.$b("Pad",o,{mode:p,value:m,pads:f?Array.from(($(),R).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1015877:(o,p,m,f,x,I)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!f,format:I?"NHWC":"NCHW"})},1016046:(o,p,m,f,x,I)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!f,format:I?"NHWC":"NCHW"})},1016215:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1016312:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1016402:(o,p,m,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:ke(m),padding_mode:ke(f),format:x?"NHWC":"NCHW"})},1016572:(o,p,m,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:ke(m),padding_mode:ke(f),format:x?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:ke(p)})},1016827:(o,p,m,f,x,I,C,B,q)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:x,doRotary:I,qkvHiddenSizes:C?Array.from(($(),R).subarray(Number(B)>>>0,Number(B)+C>>>0)):[],pastPresentShareBuffer:!!q})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e,$t,fa)=>{t.$b("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(($(),R).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:x,kernel_shape:I?Array.from(($(),R).subarray(Number(I)>>>0,Number(C)>>>0)):[],pads:B?Array.from(($(),R).subarray(Number(B)>>>0,Number(q)>>>0)):[],strides:H?Array.from(($(),R).subarray(Number(H)>>>0,Number(ae)>>>0)):[],w_is_const:()=>!!($(),D)[Number(ye)>>>0],activation:ke($e),activation_params:$t?Array.from(($(),X).subarray(Number($t)>>>0,Number(fa)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,m,f,x,I,C,B,q)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:f,softcap:x,doRotary:I,rotaryInterleaved:C,smoothSoftmax:B,localWindowSize:q})},1018124:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018235:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018346:(o,p,m,f,x,I)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:f,bits:x,blockSize:I})},1018473:(o,p,m,f,x,I)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:x,doRotary:I})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,m,f,x)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:x})},1018835:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1018937:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1019039:(o,p,m,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function zy(o,p,m){return $h(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function Cy(){return typeof wasmOffsetConverter<"u"}function Ay(o,p,m,f){var x=oe();try{return nf(o,p,m,f)}catch(I){if(se(x),I!==I+0)throw I;le(1,0)}}function Oy(o,p,m){var f=oe();try{return Jh(o,p,m)}catch(x){if(se(f),x!==x+0)throw x;le(1,0)}}function Ry(o){var p=oe();try{Zh(o)}catch(m){if(se(p),m!==m+0)throw m;le(1,0)}}function My(o,p){var m=oe();try{return ca(o,p)}catch(f){if(se(m),f!==f+0)throw f;le(1,0)}}function By(o,p,m){var f=oe();try{Xh(o,p,m)}catch(x){if(se(f),x!==x+0)throw x;le(1,0)}}function Ny(o,p){var m=oe();try{af(o,p)}catch(f){if(se(m),f!==f+0)throw f;le(1,0)}}function Dy(o,p,m,f,x,I,C){var B=oe();try{return tf(o,p,m,f,x,I,C)}catch(q){if(se(B),q!==q+0)throw q;le(1,0)}}function Uy(o,p,m,f,x,I){var C=oe();try{Yh(o,p,m,f,x,I)}catch(B){if(se(C),B!==B+0)throw B;le(1,0)}}function Py(o,p,m,f){var x=oe();try{rf(o,p,m,f)}catch(I){if(se(x),I!==I+0)throw I;le(1,0)}}function Ly(o,p,m,f,x){var I=oe();try{Qh(o,p,m,f,x)}catch(C){if(se(I),C!==C+0)throw C;le(1,0)}}function qy(o,p,m,f,x,I,C){var B=oe();try{of(o,p,m,f,x,I,C)}catch(q){if(se(B),q!==q+0)throw q;le(1,0)}}function Wy(o,p,m,f,x,I,C){var B=oe();try{uf(o,p,m,f,x,I,C)}catch(q){if(se(B),q!==q+0)throw q;le(1,0)}}function Vy(o,p,m,f,x,I,C,B){var q=oe();try{cf(o,p,m,f,x,I,C,B)}catch(H){if(se(q),H!==H+0)throw H;le(1,0)}}function Gy(o,p,m,f,x){var I=oe();try{return sf(o,p,m,f,x)}catch(C){if(se(I),C!==C+0)throw C;le(1,0)}}function Hy(o,p,m){var f=oe();try{return hf(o,p,m)}catch(x){if(se(f),x!==x+0)throw x;le(1,0)}}function Fy(o,p,m,f,x,I,C,B){var q=oe();try{ff(o,p,m,f,x,I,C,B)}catch(H){if(se(q),H!==H+0)throw H;le(1,0)}}function jy(o,p,m,f,x,I,C,B,q,H,ae,pe){var ye=oe();try{lf(o,p,m,f,x,I,C,B,q,H,ae,pe)}catch($e){if(se(ye),$e!==$e+0)throw $e;le(1,0)}}function Ky(o,p,m,f,x,I){var C=oe();try{return df(o,p,m,f,x,I)}catch(B){if(se(C),B!==B+0)throw B;le(1,0)}}function Xy(o,p,m){var f=oe();try{return mf(o,p,m)}catch(x){if(se(f),x!==x+0)throw x;return le(1,0),0n}}function Zy(o,p,m,f,x,I,C,B,q){var H=oe();try{ef(o,p,m,f,x,I,C,B,q)}catch(ae){if(se(H),ae!==ae+0)throw ae;le(1,0)}}function Yy(o){var p=oe();try{return gf(o)}catch(m){if(se(p),m!==m+0)throw m;le(1,0)}}function Qy(o,p){var m=oe();try{return Af(o,p)}catch(f){if(se(m),f!==f+0)throw f;return le(1,0),0n}}function Jy(o){var p=oe();try{return yf(o)}catch(m){if(se(p),m!==m+0)throw m;return le(1,0),0n}}function e_(o,p,m,f){var x=oe();try{return xf(o,p,m,f)}catch(I){if(se(x),I!==I+0)throw I;le(1,0)}}function t_(o,p,m,f,x){var I=oe();try{return Sf(o,p,m,f,x)}catch(C){if(se(I),C!==C+0)throw C;le(1,0)}}function r_(o,p,m,f,x,I){var C=oe();try{return kf(o,p,m,f,x,I)}catch(B){if(se(C),B!==B+0)throw B;le(1,0)}}function i_(o,p,m,f,x,I){var C=oe();try{return Tf(o,p,m,f,x,I)}catch(B){if(se(C),B!==B+0)throw B;le(1,0)}}function n_(o,p,m,f,x,I,C,B){var q=oe();try{return pf(o,p,m,f,x,I,C,B)}catch(H){if(se(q),H!==H+0)throw H;le(1,0)}}function a_(o,p,m,f,x){var I=oe();try{return If(o,p,m,f,x)}catch(C){if(se(I),C!==C+0)throw C;return le(1,0),0n}}function s_(o,p,m,f){var x=oe();try{return Ef(o,p,m,f)}catch(I){if(se(x),I!==I+0)throw I;le(1,0)}}function o_(o,p,m,f){var x=oe();try{return zf(o,p,m,f)}catch(I){if(se(x),I!==I+0)throw I;le(1,0)}}function u_(o,p,m,f,x,I,C,B,q,H,ae,pe){var ye=oe();try{return Cf(o,p,m,f,x,I,C,B,q,H,ae,pe)}catch($e){if(se(ye),$e!==$e+0)throw $e;le(1,0)}}function l_(o,p,m,f,x,I,C,B,q,H,ae){var pe=oe();try{$f(o,p,m,f,x,I,C,B,q,H,ae)}catch(ye){if(se(pe),ye!==ye+0)throw ye;le(1,0)}}function d_(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e,$t,fa){var f_=oe();try{vf(o,p,m,f,x,I,C,B,q,H,ae,pe,ye,$e,$t,fa)}catch(ma){if(se(f_),ma!==ma+0)throw ma;le(1,0)}}function p_(o,p,m){var f=oe();try{return _f(o,p,m)}catch(x){if(se(f),x!==x+0)throw x;le(1,0)}}function c_(o,p,m){var f=oe();try{return bf(o,p,m)}catch(x){if(se(f),x!==x+0)throw x;le(1,0)}}function h_(o,p,m,f){var x=oe();try{wf(o,p,m,f)}catch(I){if(se(x),I!==I+0)throw I;le(1,0)}}function ii(){if(0<Ue)Me=ii;else if(n)b==null||b(t),Z();else{for(var o=Re;0<o.length;)o.shift()(t);0<Ue?Me=ii:(t.calledRun=!0,z||(Z(),b==null||b(t)))}}return n||(dt=await qe(),ii()),t.PTR_SIZE=4,P?t:new Promise((o,p)=>{b=o,S=p})}var Ua,Pa,am=U(()=>{var e,t;Ua=Da,Pa=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Pa&&Da()}),hi,fi,La,Ne,qa,vr,Wa,Va,mi,Ga,gi,Ha,yi,Fa,_i=U(()=>{di(),hi=typeof location>"u"?void 0:location.origin,fi=self.location.href>"file:"&&self.location.href<"file;",La=()=>{{if(fi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,hi).href}return self.location.href}},Ne=La(),qa=()=>{if(Ne&&!Ne.startsWith("blob:"))return Ne.substring(0,Ne.lastIndexOf("/")+1)},vr=(e,t)=>{try{let r=t??Ne;return(r?new URL(e,r):new URL(e)).origin===hi}catch{return!1}},Wa=(e,t)=>{let r=t??Ne;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Va=(e,t)=>`${t??"./"}${e}`,mi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ga=async e=>(await import(e)).default,gi=(nm(),Zt(Ma)).default,Ha=async()=>{if(!Ne)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(vr(Ne))return[void 0,gi()];let e=await mi(Ne);return[e,gi(e)]},yi=(am(),Zt(Na)).default,Fa=async(e,t,r,i)=>{let n=yi&&!(e||t);if(n)if(Ne)n=vr(Ne)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,yi];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Wa(s,t),u=r&&a&&!vr(a,t),l=u?await mi(a):a??Va(s,t);return[u?l:void 0,await Ga(l)]}}}),bi,xr,Jt,wi,ja,Ka,Xa,$i,be,kt=U(()=>{_i(),xr=!1,Jt=!1,wi=!1,ja=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ka=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Xa=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},$i=async e=>{if(xr)return Promise.resolve();if(Jt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(wi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Jt=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Xa())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Ka())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=ja();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,s=typeof n=="string"?n:void 0,a=n==null?void 0:n.mjs,u=(a==null?void 0:a.href)??a,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,g]=await Fa(u,s,r>1,!!c||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=w=>w;else if(d||s)v.locateFile=w=>d??s+w;else if(u&&u.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,u).href;else if(h){let w=qa();w&&(v.locateFile=T=>w+T)}g(v).then(w=>{Jt=!1,xr=!0,bi=w,b(),h&&URL.revokeObjectURL(h)},w=>{Jt=!1,wi=!0,S(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(xr&&bi)return bi;throw new Error("WebAssembly is not initialized yet.")}}),He,Sr,me,vi=U(()=>{kt(),He=(e,t)=>{let r=be(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Sr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,s])=>{let a=t?t+n:n;if(typeof s=="object")Sr(s,a+".",r,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},me=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let s=Number(t.getValue(n,i===4?"i32":"i64")),a=t.getValue(n+i,"*"),u=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Za,sm=U(()=>{kt(),vi(),Za=e=>{let t=be(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=He(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),r===0&&me("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Sr(e.extra,"",new WeakSet,(a,u)=>{let l=He(a,i),d=He(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&me(`Can't set a run config entry: ${a} - ${u}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(a=>t._free(a)),s}}}),Ya,Qa,Ja,Tt,es,ts,om=U(()=>{kt(),vi(),Ya=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Qa=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ja=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Tt=(e,t,r,i)=>{let n=He(t,i),s=He(r,i);be()._OrtAddSessionConfigEntry(e,n,s)!==0&&me(`Can't set a session config entry: ${t} - ${r}.`)},es=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let s=typeof n=="string"?n:n.name,a=[];switch(s){case"webnn":if(s="WEBNN",Tt(e,"session.disable_quant_qdq","1",r),Tt(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let h=n==null?void 0:n.deviceType;h&&Tt(e,"deviceType",h,r)}break;case"webgpu":if(s="JS",typeof n!="string"){let h=n;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);Tt(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let u=He(s,r),l=a.length,d=0,c=0;if(l>0){d=be()._malloc(l*be().PTR_SIZE),r.push(d),c=be()._malloc(l*be().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)be().setValue(d+h*be().PTR_SIZE,a[h][0],"*"),be().setValue(c+h*be().PTR_SIZE,a[h][1],"*")}await be()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&me(`Can't append execution provider: ${s}.`)}},ts=async e=>{let t=be(),r=0,i=[],n=e||{};Ja(n);try{let s=Ya(n.graphOptimizationLevel??"all"),a=Qa(n.executionMode??"sequential"),u=typeof n.logId=="string"?He(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?He(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!n.enableCpuMemArena,!!n.enableMemPattern,a,!!n.enableProfiling,0,u,l,d,c),r===0&&me("Can't create session options."),n.executionProviders&&await es(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);Tt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,g]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=He(h,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&me(`Can't set a free dimension override: ${h} - ${g}.`)}return n.extra!==void 0&&Sr(n.extra,"",new WeakSet,(h,g)=>{Tt(r,h,g,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&me("Can't release session options."),i.forEach(a=>t._free(a)),s}}}),It,at,Et,kr,Tr,xi,Si,ki,te=U(()=>{It=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},at=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Et=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,s)=>n*s,1);return r>0?Math.ceil(i*r):void 0},kr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Tr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},xi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Si=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ki=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ti,rs=U(()=>{di(),Ti=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let a=0;for(;;){let{done:u,value:l}=await n.read();if(u)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),is,ns,as,ss,Ii,os,de,st=U(()=>{te(),is=["V","I","W","E","F"],ns=(e,t)=>{console.log(`[${is[e]},${new Date().toISOString()}]${t}`)},Ii=(e,t)=>{as=e,ss=t},os=(e,t)=>{let r=Tr(e),i=Tr(as);r>=i&&ns(r,typeof t=="function"?t():t)},de=(...e)=>{ss&&os(...e)}}),us,Gt,O,Ir,ls,ds,ps,re=U(()=>{us=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Gt=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(i<2||n<2)return;let u=us.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[a[s-2],a[s-1]]=u}for(let u=r?3:1;u<=s;u++){let l=i-u<0?1:e[i-u],d=n-u<0?1:t[n-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)a[s-u]=Math.max(l,d);else{if(c>1)return;a[s-u]=0}}return a}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},O=class ni{static size(t){return ni.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){n[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");n[s]=1,r/=t[s],s--}for(s--;s>=0;s--)n[s]=t[s];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ni.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ni.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[s])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,s)=>n+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Ir=class br{static adjustPoolAttributes(t,r,i,n,s,a){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<i.length*2;u++)if(u<a.length){if(a[u]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[u]>=i[u]||a[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,s,a,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)br.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],i[l],n[l],s,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,n,s,a,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return br.computeShapeHelper(t,r,l,i,n,s,a,u),l}static computeConvOutputShape(t,r,i,n,s,a,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return br.computeShapeHelper(!1,t,l,i,n,s,a,u),l}static computeShapeHelper(t,r,i,n,s,a,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(br.adjustPadAndReturnShape(r[d+2],n[d],s[d],a[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,s,a,u,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return s[a]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[u]=c-s[a],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[u]-d)/r+1)}},ls=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,u;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||u<=0||a<=0)throw new Error("invalid shape specified");if(n&&!Gt.isValidBroadcast(n,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,a]}},ds=-34028234663852886e22,ps=34028234663852886e22}),Ei,cs=U(()=>{te(),Ei=(e,t)=>new(kr(t))(e)}),zi,Ci,Ai,hs,Oi,fs,Ri,Mi,Bi,ms,gs,um=U(()=>{te(),st(),zi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ci=(e,t)=>{if(t==="int32")return e;let r=zi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,s=new(kr(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let a=new Int32Array(n);for(let u=0;u<n;u++){let l=s[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[u]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ai=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},hs=1,Oi=()=>hs++,fs=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ri=(e,t)=>{let r=zi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Mi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ri(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ai(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Bi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=fs.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Ri(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ci(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Ai(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ms=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Oi();return this.tensorTrackersById.set(e,new Bi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),s=Oi(),a=new Mi({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new Bi(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,i,n,s,a){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:a??t,shape:r,dimensions:r,usage:i,writable:n,readable:s});return new Mi({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},gs=(...e)=>new ms(...e)}),er,ys,_s,lm=U(()=>{te(),kt(),cs(),um(),st(),er=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ys=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,s)=>n===i[s]&&e[n]===t[n])},_s=class{constructor(e){this.tensorManager=gs(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ii(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>ys(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let s=er.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=er.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ei(r,t)}}registerMLTensor(e,t,r,i){let n=er.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,n,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=s.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let h=Ci(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=er.get(It(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),Ni=U(()=>{}),Di,Er,zr,bs,ws,Ui,Pi,$s,vs,dm=U(()=>{st(),Ni(),Di=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Er=[],zr=e=>Math.ceil(Number(e)/16)*16,bs=e=>{for(let t=0;t<Er.length;t++){let r=Er[t];if(e<=r)return r}return Math.ceil(e/16)*16},ws=1,Ui=()=>ws++,Pi=async(e,t,r,i)=>{let n=zr(r),s=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,n),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{s.destroy()}},$s=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Di)Er.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,s=zr(n),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=zr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Ui();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=bs(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let a={id:Ui(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Pi(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Di.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},vs=(...e)=>new $s(...e)}),xs,he,xe=U(()=>{xs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new xs(e)}),Ht,Cr,Te,ze,J,ve,Li,Ft,ct,Q,tr,N,Y,Ss,qi,ks,Ts,ne=U(()=>{te(),re(),Ht=64,Cr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Te=(e,t=1)=>{let r=Cr(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=Cr(e,t);return typeof r=="string"?r:r[1]},J=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,Li=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ft=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ct=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,tr=(e,t,r,i,n)=>{let s=typeof r=="number",a=s?r:r.length,u=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Cr(t,n),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:h,tensor:t},y=P=>typeof P=="string"?P:`${P}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",S=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let P=0;P<a-1;P++)w+=`
    let dim${P} = current / ${Q(v,P,a)};
    let rest${P} = current % ${Q(v,P,a)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;w+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=P=>(_.offsetToIndices=!0,a<2?P:`o2i_${e}(${P})`),E=[];if(a>=2)for(let P=a-1;P>=0;P--)E.push(`${Q(v,P,a)} * (indices[${P}])`);let z=a<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=P=>(_.indicesToOffset=!0,a<2?P:`i2o_${e}(${P})`),$=(...P)=>a===0?"0u":`${g.indices}(${P.map(y).join(",")})`,M=(P,V)=>a<2?`${P}`:`${Q(P,V,a)}`,D=(P,V,Z)=>a<2?`${P}=${Z};`:`${Q(P,V,a)}=${Z};`,G={},F=(P,V)=>{_.broadcastedIndicesToOffset=!0;let Z=`${V.name}broadcastedIndicesTo${e}Offset`;if(Z in G)return`${Z}(${P})`;let L=[];for(let ge=a-1;ge>=0;ge--){let qe=V.indicesGet("outputIndices",ge+V.rank-a);L.push(`${M(v,ge)} * (${qe} % ${M(S,ge)})`)}return G[Z]=`fn ${Z}(outputIndices: ${V.type.indices}) -> u32 {
             return ${L.length>0?L.join("+"):"0u"};
           }`,`${Z}(${P})`},j=(P,V)=>(()=>{if(g.storage===g.value)return`${e}[${P}]=${V};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${V}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=P=>(()=>{if(g.storage===g.value)return`${e}[${P}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${P}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${P}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),K=a<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${R(`i2o_${e}(indices)`)};
  }`,X=a<2?"":(()=>{let P=u.map(Z=>`d${Z}: u32`).join(", "),V=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${P}) -> ${c} {
    return get_${e}ByIndices(${$(V)});
  }`})(),ee=(...P)=>{if(P.length!==a)throw new Error(`indices length must be ${a}`);let V=P.map(y).join(",");return a===0?R("0u"):a===1?R(V[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${V})`)},fe=P=>a<2?R(P):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${P})`),W=a<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,ue=a<2?"":(()=>{let P=u.map(Z=>`d${Z}: u32`).join(", "),V=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${P}, value: ${c}) {
    set_${e}ByIndices(${$(V)}, value);
  }`})();return{impl:()=>{let P=[],V=!1;return _.offsetToIndices&&(P.push(T),V=!0),_.indicesToOffset&&(P.push(z),V=!0),_.broadcastedIndicesToOffset&&(Object.values(G).forEach(Z=>P.push(Z)),V=!0),_.set&&(P.push(ue),V=!0),_.setByIndices&&(P.push(W),V=!0),_.get&&(P.push(X),V=!0),_.getByIndices&&(P.push(K),V=!0),!s&&V&&P.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${O.computeStrides(r).join(",")});`),P.join(`
`)},type:g,offsetToIndices:k,indicesToOffset:A,broadcastedIndicesToOffset:F,indices:$,indicesGet:M,indicesSet:D,set:(...P)=>{if(P.length!==a+1)throw new Error(`indices length must be ${a}`);let V=P[a];if(typeof V!="string")throw new Error("value must be string");let Z=P.slice(0,a).map(y).join(",");return a===0?j("0u",V):a===1?j(Z[0],V):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Z}, ${V})`)},setByOffset:j,setByIndices:(P,V)=>a<2?j(P,V):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${V});`),get:ee,getByOffset:R,getByIndices:fe,usage:i,name:e,strides:v,shape:S,rank:a}},N=(e,t,r,i=1)=>tr(e,t,r,"input",i),Y=(e,t,r,i=1)=>tr(e,t,r,"output",i),Ss=(e,t,r)=>tr(e,t,r,"atomicOutput",1),qi=(e,t,r,i=1)=>tr(e,t,r,"internal",i),ks=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ht){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ts=(e,t)=>new ks(e,t)}),Is,Wi,Es,zs,Cs,As,De,Os,Rs,ht=U(()=>{te(),re(),xe(),ne(),Is=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Wi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Es=(e,t)=>O.sortBasedOnPerm(e,Wi(e.length,t)),zs=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)n+=`a[${e[s]}]=i[${s}];`;return n+="return a;}"},Cs=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},As=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},De=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Wi(i,t),s=Es(e.dims,n),a=e.dims,u=s,l=i<2||As(n,e.dims),d;if(l)return d=_=>{let b=N("input",r,a,4),S=Y("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=O.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=Cs(e.dims,n),g=O.areEqual(h,[2,3,1]),y=O.areEqual(h,[3,1,2]);if(c.length===2||g||y){a=g?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,u=[a[1],a[0]];let _=16;return d=b=>{let S=N("a",r,a.length),v=Y("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
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
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=O.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...J(a,u)]}},getShaderSource:d}}return d=_=>{let b=N("a",r,a.length),S=Y("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}

  ${zs(n,i,b,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=O.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...J(a,u)]}},getShaderSource:d}},Os=(e,t)=>{Is(e.inputs,t.perm),e.compute(De(e.inputs[0],t.perm))},Rs=e=>he({perm:e.perm})}),Ms,Bs,Ns,Ds,Us,Ps,Ls,qs,Ws,Vs,Fe,Gs,Hs,Fs,js,Ks,Xs,Zs,Ys,Qs,Js,pm=U(()=>{te(),re(),ne(),Gi(),ht(),Ms={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Bs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ns={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ds={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Us=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ps=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]},Ls=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[n++]):i.push(1);return i},qs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ws=(e,t)=>{let r=[];if(!qs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Vs=(e,t,r,i,n,s,a)=>{let u=r[0].dims,l=O.size(s),d=O.size(a),c=N("_A",r[0].dataType,u),h=Y("output",n,s),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ns[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Ms[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Bs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Ds[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Fe=(e,t,r,i)=>{let n=e.inputs.length===1?r:Vi(e.inputs,r),s=n.axes;s.length===0&&!n.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let a=O.normalizeAxes(s,e.inputs[0].dims.length),u=a,l=e.inputs[0],d=Ws(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(De(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Us(u.length,l.dims.length));let[c,h]=Ps(l.dims,u),g=c;n.keepDims&&(g=Ls(c,a)),e.compute(Vs(t,n.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},Gs=(e,t)=>{Fe(e,"ReduceMeanShared",t,"mean")},Hs=(e,t)=>{Fe(e,"ReduceL1Shared",t,"l1")},Fs=(e,t)=>{Fe(e,"ReduceL2Shared",t,"l2")},js=(e,t)=>{Fe(e,"ReduceLogSumExpShared",t,"logSumExp")},Ks=(e,t)=>{Fe(e,"ReduceMaxShared",t,"max")},Xs=(e,t)=>{Fe(e,"ReduceMinShared",t,"min")},Zs=(e,t)=>{Fe(e,"ReduceProdShared",t,"prod")},Ys=(e,t)=>{Fe(e,"ReduceSumShared",t,"sum")},Qs=(e,t)=>{Fe(e,"ReduceSumSquareShared",t,"sumSquare")},Js=(e,t)=>{Fe(e,"ReduceLogSumShared",t,"logSum")}}),je,eo,Ar,Vi,Ke,to,ro,io,no,ao,so,oo,uo,lo,po,Xe,co,ho,fo,mo,go,yo,_o,bo,wo,$o,Gi=U(()=>{te(),re(),xe(),ne(),pm(),je=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},eo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ar=(e,t,r,i,n,s,a=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=O.normalizeAxes(n,c),g=!u&&h.length===0;d.forEach((b,S)=>{g||h.indexOf(S)>=0?a&&l.push(1):l.push(b)});let y=l.length,_=O.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],v=N("_A",r[0].dataType,c),w=Y("output",s,y),T=i(v,w,h),k=T[2];for(let E=0,z=0;E<c;E++)g||h.indexOf(E)>=0?(a&&z++,k=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",E,w.indicesGet("output_indices",z))};`),z++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...J(d,l)]})}},Vi=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ke=(e,t,r,i)=>{let n=e.inputs,s=n.length===1?r:Vi(n,r);e.compute(Ar(t,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&s.axes.length===0?eo:i,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},to=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ro=(e,t)=>{je(e.inputs),Ke(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},io=(e,t)=>{je(e.inputs),Ke(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},no=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ao=(e,t)=>{je(e.inputs),Ke(e,"ReduceMax",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},so=(e,t)=>{je(e.inputs),Ke(e,"ReduceMean",t,(r,i,n)=>{let s=1;for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},oo=(e,t)=>{je(e.inputs),Ke(e,"ReduceMin",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},uo=(e,t)=>{je(e.inputs),Ke(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},lo=(e,t)=>{je(e.inputs),Ke(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},po=(e,t)=>{je(e.inputs),Ke(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Xe=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:n*=e[s];return n<32&&i>1024},co=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Gs(e,t)},ho=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Hs(e,t)},fo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Fs(e,t)},mo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):js(e,t)},go=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Ks(e,t)},yo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Xs(e,t)},_o=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Zs(e,t)},bo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lo(e,t):Ys(e,t)},wo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?po(e,t):Qs(e,t)},$o=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Js(e,t)}}),Hi,vo,xo,Fi,cm=U(()=>{te(),xe(),Gi(),Hi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},vo=(e,t)=>{Hi(e.inputs);let r=(i,n,s)=>{let a=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Ar("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},xo=(e,t)=>{Hi(e.inputs);let r=(i,n,s)=>{let a=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Ar("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Fi=e=>he(e)}),So,Or,ko,To,Io,rr,Eo,zo,ji=U(()=>{te(),re(),Ni(),ne(),So=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],u=e[5];if(a&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,g=h,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(a){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=a.dims[3])}let S=_+b,v=-1,w=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:h,vHiddenSize:y,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Or=(e,t,r)=>t&&e?`
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
    `,ko=(e,t,r,i,n,s,a,u)=>{let l=ve(a?1:s),d=64,c=s/l;c<d&&(d=32);let h=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:h}],y=Te(e.dataType,l),_=ze(1,l),b=["type"];a&&b.push("type"),u&&b.push("type");let S=v=>{let w=Y("x",e.dataType,e.dims,l),T=[w],k=a?N("seq_lens",a.dataType,a.dims):void 0;k&&T.push(k);let E=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;E&&T.push(E);let z=ze(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(A).declareVariables(...T)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Or(k,E,!1)}
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
        x[offset + i] = ${w.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},To=(e,t,r,i,n,s,a,u,l)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],h=e>1&&i,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=h?[s.batchSize,g,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,S=ve(s.headSize),v=s.headSize/S,w=12,T={x:Math.ceil(d/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},k=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=h&&i&&O.size(i.dims)>0,z=["type","type"];E&&z.push("type"),n&&z.push("type"),u&&z.push("type"),l&&z.push("type");let A=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&A.push({dims:y,dataType:t.dataType,gpuDataType:0});let $=M=>{let D=N("q",t.dataType,t.dims,S),G=N("key",r.dataType,r.dims,S),F=[D,G];if(E){let W=N("past_key",i.dataType,i.dims,S);F.push(W)}n&&F.push(N("attention_bias",n.dataType,n.dims));let j=u?N("seq_lens",u.dataType,u.dims):void 0;j&&F.push(j);let R=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;R&&F.push(R);let K=Y("output",t.dataType,c),X=[K];h&&X.push(Y("present_key",t.dataType,y,S));let ee=ze(1,S),fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${D.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${D.type.storage}, ${w*w}>;
  ${M.registerUniforms(fe).declareVariables(...F,...X)}
  ${M.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Or(j,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ee}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ee}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${K.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:A,dispatchGroup:T,programUniforms:k}),getShaderSource:$}},Io=(e,t,r,i,n,s,a=void 0,u=void 0)=>{let l=s+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=h?[n.batchSize,g,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,c],b=12,S={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=h&&i&&O.size(i.dims)>0,T=["type","type"];w&&T.push("type"),a&&T.push("type"),u&&T.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=z=>{let A=N("probs",t.dataType,t.dims),$=N("v",r.dataType,r.dims),M=[A,$];w&&M.push(N("past_value",i.dataType,i.dims));let D=a?N("seq_lens",a.dataType,a.dims):void 0;a&&M.push(D);let G=u?N("total_sequence_length_input",u.dataType,u.dims):void 0;u&&M.push(G);let F=[Y("output",t.dataType,_)];h&&F.push(Y("present_value",t.dataType,y));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${A.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${A.type.value}, ${b*b}>;
  ${z.registerUniforms(j).declareVariables(...M,...F)}
  ${z.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Or(D,G,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:E}},rr=(e,t,r,i,n,s,a,u,l,d,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(u?1:0)),y=g>1?a:void 0,_=g>1?u:void 0,b=g>1?d.pastSequenceLength:0,S=b+d.kvSequenceLength,v=l&&O.size(l.dims)>0?l:void 0,w=[t,r];y&&O.size(y.dims)>0&&w.push(y),v&&w.push(v),c&&w.push(c),h&&w.push(h);let T=e.compute(To(g,t,r,y,v,d,b,c,h),{inputs:w,outputs:g>1?[-1,1]:[-1]})[0];e.compute(ko(T,d.batchSize,d.numHeads,b,d.sequenceLength,S,c,h),{inputs:c&&h?[T,c,h]:[T],outputs:[]});let k=[T,i];_&&O.size(_.dims)>0&&k.push(_),c&&k.push(c),h&&k.push(h),e.compute(Io(g,T,i,_,d,b,c,h),{inputs:k,outputs:g>1?[0,2]:[0]})},Eo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,s=t.headSize,a=12,u={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=Y("output_q",l[0].dataType,r),y=Y("output_k",l[0].dataType,r),_=Y("output_v",l[0].dataType,r),b=N("input",l[0].dataType,l[0].dims),S=N("weight",l[1].dataType,l[1].dims),v=N("bias",l[2].dataType,l[2].dims),w=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${w}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${w}, ${a*a}>;
  var<workgroup> tileWeightK: array<${w}, ${a*a}>;
  var<workgroup> tileWeightV: array<${w}, ${a*a}>;
  ${h.registerUniforms(T).declareVariables(b,S,v,g,y,_)}
  ${h.mainStart([a,a,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},zo=(e,t)=>{let r=So(e.inputs,t),[i,n,s]=Eo(e,r);return rr(e,i,n,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Co,Ao,Oo,Ro,hm=U(()=>{Le(),te(),re(),xe(),ne(),Co=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,s)=>{let a=n.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);n.forEach((u,l)=>{if(u!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ao=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,s=e[0].dims,a=i?ve(s[s.length-1]):1,u=n==="NHWC"&&s.length>1?a:1,l=O.size(s)/a,d=i,c=d?s.length:s,h=N("x",e[0].dataType,e[0].dims,a),g=N("scale",e[1].dataType,e[1].dims,u),y=N("bias",e[2].dataType,e[2].dims,u),_=N("inputMean",e[3].dataType,e[3].dims,u),b=N("inputVar",e[4].dataType,e[4].dims,u),S=Y("y",e[0].dataType,c,a),v=()=>{let T="";if(i)T=`let cOffset = ${s.length===1?"0u":n==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(n==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let k=1;k<g.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(h,g,y,_,b,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${a}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...J(s)]:[{type:12,data:l}]})}},Oo=e=>he(e),Ro=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Oo({...t,outputCount:i});if(_e.webgpu.validateInputContent&&Co(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ao(r,n))}}),Mo,Bo,No,fm=U(()=>{re(),ne(),Mo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Bo=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,n=e[0].dataType,s=N("input",n,t,4),a=N("bias",n,[r],4),u=N("residual",n,t,4),l=Y("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},No=e=>{Mo(e.inputs),e.compute(Bo(e.inputs))}}),Do,ce,Uo,Po,Lo,qo,Wo,Vo,Go,Ho,Fo,jo,Ko,Xo,Zo,Yo,ir,Qo,Rr,Jo,eu,tu,ru,iu,nu,au,su,ou,uu,lu,du,pu,cu,hu,fu,Ki,mu,Xi,Zi,gu,yu,_u,bu,wu,$u,Yi=U(()=>{te(),re(),xe(),ne(),Do=(e,t,r,i,n,s,a)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=N("inputData",r,[u],4),c=Y("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return a&&h.push(...a),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,s=e.dataType,a,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Do(d,O.size(e.dims),e.dataType,s,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:l})}},Uo=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Po=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},Lo=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},qo=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},Wo=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},Vo=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},Go=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},Ho=e=>he(e),Fo=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},jo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},Ko=(e,t)=>{let r=t||jo(e.inputs),i=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Xo=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},Zo=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Yo=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},ir=e=>he(e),Qo=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rr=(e="f32")=>`
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
}`,Jo=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rr(t)))},eu=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},tu=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},ru=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rr(t)))},iu=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},nu=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},au=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},su=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ou=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},uu=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},lu=e=>he(e),du=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},pu=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},cu=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},hu=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},fu=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},Ki=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,mu=e=>{e.compute(ce(e.inputs[0],"Tanh",Ki))},Xi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ki("v")};
}
`,Zi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,gu=e=>{let t=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Zi,Xi(t),void 0,e.inputs[0].dataType))},yu=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},_u=e=>{e.compute(ce(e.inputs[0],"Log","log"))},bu=(e,t)=>`
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
`,wu=e=>`quick_gelu_impl(${e})`,$u=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",wu,bu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),vu,xu,Su,mm=U(()=>{re(),ne(),Yi(),vu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),i=N("bias",e[0].dataType,[e[0].dims[2]],4),n=Y("output",e[0].dataType,t,4),s=O.size(t)/4,a=Te(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,n)}

  ${Rr(a)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Su=e=>{vu(e.inputs),e.compute(xu(e.inputs))}}),ku,Tu,Ze,Iu,Eu,zu,Cu,Au,Ou,Ru,Mu,Bu,Nu,gm=U(()=>{te(),re(),ne(),ku=(e,t,r,i,n,s,a,u,l,d,c,h)=>{let g,y;typeof u=="string"?g=y=(w,T)=>`${u}((${w}),(${T}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=Y("outputData",c,i.length,4),b=N("aData",l,t.length,4),S=N("bData",d,r.length,4),v;if(n)if(s){let w=O.size(t)===1,T=O.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||T?v=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(a||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,k,E="")=>{let z=`aData[indexA${k}][componentA${k}]`,A=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${E}(${g(z,A)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Tu=(e,t,r,i,n,s,a=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!O.areEqual(u,l),c=u,h=O.size(u),g=!1,y=!1,_=[d];if(d){let b=Gt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),h=O.size(c);let S=O.size(u)===1,v=O.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(v),_.push(w),_.push(T);let k=1;for(let E=1;E<c.length;E++){let z=u[u.length-E],A=l[l.length-E];if(z===A)k*=z;else break}k%4===0?(y=!0,g=!0):(S||v||w||T)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>ku(b,u,l,c,g,d,y,n,r.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(c)/4)},...J(u,l,c)]})}},Ze=(e,t,r,i,n,s)=>{e.compute(Tu(t,n??"",e.inputs[0],e.inputs[1],r,i,s))},Iu=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Eu=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},zu=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Cu=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},Au=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},Ou=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},Ru=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Mu=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Bu=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Nu=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Du,Uu,Pu,Lu,qu,Wu,ym=U(()=>{te(),re(),xe(),ne(),Du=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,s=i.dims.length;e.forEach((a,u)=>{if(u!==r){if(a.dataType!==n)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Uu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Pu=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let s=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(s):n===0?i.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${n}) { ${s} }`)}return i.join(`
`)},Lu=(e,t,r,i)=>{let n=O.size(r),s=new Array(e.length),a=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:n}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],s[b]=u,d.push(e[b].dims.length),a[b]=N(`input${b}`,i,d[b]),l.push("rank"),c.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)c.push(...J(e[b].dims));c.push(...J(r));let h=Y("output",i,r.length),g=h.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...a,h)})()}

  ${Uu(s.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Pu(a,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:_}},qu=(e,t)=>{let r=e.inputs,i=r[0].dims,n=O.normalizeAxis(t.axis,i.length);Du(r,n);let s=i.slice();s[n]=r.reduce((u,l)=>u+(l.dims.length>n?l.dims[n]:0),0);let a=r.filter(u=>O.size(u.dims)>0);e.compute(Lu(a,n,s,r[0].dataType),{inputs:a})},Wu=e=>he({axis:e.axis})}),zt,Ct,At,Qi,Ot=U(()=>{te(),re(),zt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ct=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},At=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Qi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[ds,ps];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ee,Vu,Ji=U(()=>{Ee=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Vu=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Gu,_m=U(()=>{Gu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),nr,en,tn=U(()=>{te(),re(),ne(),Ot(),nr=(e,t,r,i,n)=>{let s=i-r;return`
      ${Array.from({length:r}).map((a,u)=>`
      if (${Q(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Q(n,u+s,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},en=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,u=e[1].dims,l=a[a.length-2],d=u[u.length-1],c=a[a.length-1],h=ve(d),g=ve(c),y=ve(l),_=O.size(r)/h/y,b=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[O.size(S),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Ct(t,w),w.push(...J(S,a,u)),b&&w.push(...J(e[2].dims)),w.push(...J(v));let T=k=>{let E=qi("batch_dims",e[0].dataType,S.length),z=N("a",e[0].dataType,a.length,g),A=N("b",e[1].dataType,u.length,h),$=Y("output",e[0].dataType,v.length,h),M=Te($.type.tensor),D=zt(t,$.type.value,M),G=[z,A],F="";if(b){let K=n?h:1;G.push(N("bias",e[2].dataType,e[2].dims.length,K)),F=`${n?`value += bias[col / ${K}];`:`value += ${$.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];At(t,j);let R=()=>{let K=`var a_data: ${z.type.value};`;for(let X=0;X<g;X++)K+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${h}];`;for(let X=0;X<y;X++){K+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${g}];`;for(let ee=0;ee<g;ee++)K+=`
            values[${X}] = fma(${A.type.value}(a_data${g===1?"":`[${ee}]`}), b_data${ee}, values[${X}]);
`}return K};return`
  ${k.registerUniforms(j).registerInternalVariables(E).declareVariables(...G,$)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${nr("a_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${nr("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${F}
      ${D}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${y};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T}}}),Hu,Fu,rn,nn,ju,an,Ku,Mr,sn=U(()=>{te(),re(),ne(),Ot(),tn(),Ji(),Hu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Fu=(e,t)=>e?`
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
        }`,rn=(e,t,r="f32",i,n=!1,s=32,a=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:s,h=n?s:l,g=c/t[0],y=s/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
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
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
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
          ${Hu(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Fu(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},nn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ju=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",an=(e,t,r="f32",i,n=!1,s=32,a=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=n?d:s,g=n?s:d;if(!(g%t[1]===0&&h%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=h/t[0],b=s/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${nn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
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
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
      ${nn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
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
      ${ju(n)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Ku=(e,t,r,i,n=!1)=>{let[s,a,u,l]=i,d=Te(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${nr("aIndices",a,a.rank-2,s.rank,"batchIndices")}
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
        ${nr("bIndices",u,u.rank-2,s.rank,"batchIndices")}
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
        ${t?`value = value + ${n?"bias[colIn]":`${Ee(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Mr=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,u=e[1].dims,l=a.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=O.size(c),g=a[a.length-2],y=a[a.length-1],_=u[u.length-1],b=y%4===0&&_%4===0,S=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/S[0]),Math.ceil(g/v[1]/S[1]),Math.ceil(h/v[2]/S[2])],T=b?4:1,k=[...l,g,y/T],E=k.length,z=[...d,y,_/T],A=z.length,$=[h,g,_/T],M=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Ct(t,M),M.push(...J(c,k,z));let D=["rank","rank"],G=e.length>2;G&&(M.push(...J(e[2].dims)),D.push("rank")),M.push(...J($));let F=j=>{let R=c.length,K=qi("batchDims",e[0].dataType,R,1),X=Te(e[0].dataType),ee=N("a",e[0].dataType,E,T),fe=N("b",e[1].dataType,A,T),W=Y("result",e[0].dataType,$.length,T),ue=[ee,fe];if(G){let ge=n?T:1;ue.push(N("bias",e[2].dataType,e[2].dims.length,ge))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];At(t,P);let V=Te(W.type.tensor),Z=zt(t,W.type.value,V),L=Ku(T,G,Z,[K,ee,fe,W],n);return`
  ${j.registerUniforms(P).registerInternalVariables(K).declareVariables(...ue,W)}
  ${L}
  ${b?rn(S,v,X,K):an(S,v,X,K)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${n}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:M}),getShaderSource:F}}}),Xu,Zu,bm=U(()=>{te(),st(),ne(),Ot(),Ji(),_m(),sn(),Xu=(e,t,r,i,n=!1,s,a=4,u=4,l=4,d="f32")=>{let c=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},h=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},g=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ee(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ee(a,d)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${w}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ee(a,d)}(0.0);`,k=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ee(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ee(u,d)}(0.0);`,E=Ee(l,d),z=Ee(e?a:u,d),A=Ee(e?u:a,d),$=zt(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Vu(n)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Zu=(e,t,r,i,n,s,a,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(c%4===0||c%3===0)&&_%4===0,S=d?_:g*y,v=d?g*y:_,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/w[0]/T[0]),Math.ceil(v/w[1]/T[1]),Math.ceil(h/w[2]/T[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let E=b?d&&c%4!==0?3:4:1,z=w[1]*T[1],A=w[0]*T[0],$=Math.max(w[0]*E,w[1]),M=i%z===0,D=n%A===0,G=s%$===0,F=b?[E,4,4]:[1,1,1],j=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ct(t,j),j.push(...J(e[0].dims,e[1].dims));let R=["rank","rank"];a&&(j.push(...J(e[2].dims)),R.push("rank")),j.push(...J(r));let K=X=>{let ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];At(t,ee);let fe=b?4:1,W=Te(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${W}>`:W}) {
        result[flatIndex] = ${b?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,P=N("x",e[0].dataType,e[0].dims.length,E===3?1:E),V=N("w",e[1].dataType,e[1].dims.length,fe),Z=[P,V],L=Y("result",e[0].dataType,r.length,fe);if(a){let ge=N("bias",e[2].dataType,e[2].dims.length,fe);Z.push(ge),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${W}>`:W} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Gu("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(ee).declareVariables(...Z,L)}
        ${ue}
        ${Xu(d,M,D,G,a,t,F[0],F[1],F[2],W)}
        ${b?rn(T,w,W,void 0,!d,$):an(T,w,W,void 0,!d,$,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${M};${D};${G};${z};${A};${$}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:j}),getShaderSource:K}}}),Yu,on,ar,Qu,un,Ju,el,tl,wm=U(()=>{te(),st(),re(),ne(),Ot(),Ji(),Yu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},on=e=>typeof e=="number"?[e,e,e]:e,ar=(e,t)=>t<=1?e:e+(e-1)*(t-1),Qu=(e,t,r,i=1)=>{let n=ar(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},un=(e,t,r,i,n)=>{n==null&&(n=Qu(e,t[0],i[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*n)/i[a]+1));return s},Ju=(e,t,r,i,n,s,a,u,l,d)=>{let c,h,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=un([t,r,i,1],[u,l,d],1,[n,s,a],e);h=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,S,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=un([t,r,i,1],[u,l,d],1,[n,s,a],e[0]);h=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),g=Math.ceil(r/s),y=Math.ceil(i/a);let _=(h-1)*n+u-t,b=(g-1)*s+l-r,S=(y-1)*a+d-i,v=Math.floor(_/2),w=_-v,T=Math.floor(b/2),k=b-T,E=Math.floor(S/2),z=S-E;c={top:T,bottom:k,left:E,right:z,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:y}},el=(e,t,r,i,n,s=!1,a="channelsLast")=>{let u,l,d,c,h;if(a==="channelsLast")[u,l,d,c,h]=e;else if(a==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[g,,y,_,b]=t,[S,v,w]=on(r),[T,k,E]=on(i),z=ar(y,T),A=ar(_,k),$=ar(b,E),{padInfo:M,outDepth:D,outHeight:G,outWidth:F}=Ju(n,l,d,c,S,v,w,z,A,$),j=s?g*h:g,R=[0,0,0,0,0];return a==="channelsFirst"?R=[u,j,D,G,F]:a==="channelsLast"&&(R=[u,D,G,F,j]),{batchSize:u,dataFormat:a,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:D,outHeight:G,outWidth:F,outChannels:j,padInfo:M,strideDepth:S,strideHeight:v,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:z,effectiveFilterHeight:A,effectiveFilterWidth:$,dilationDepth:T,dilationHeight:k,dilationWidth:E,inShape:e,outShape:R,filterShape:t}},tl=(e,t,r,i,n,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,v)=>v)},d=[Math.ceil(Yu(l.x.map(S=>r[S]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=O.size(r),g=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Ct(t,g),g.push(...J(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...J(e[2].dims)),y.push("rank")),g.push(...J(r));let b=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];At(t,v);let w=1,T=Te(e[0].dataType),k=N("x",e[0].dataType,e[0].dims.length,c),E=N("W",e[1].dataType,e[1].dims.length,w),z=[k,E],A=Y("result",e[0].dataType,r.length,w),$="";if(_){let G=N("bias",e[2].dataType,e[2].dims.length,w);z.push(G),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${a?Q("coords",4,5):Q("coords",1,5)}];
        }`}let M=Ee(c,T),D=zt(t,M,T);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...z,A)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${Q("coords",0,k.rank)};
              let d2 = ${a?Q("coords",k.rank-1,k.rank):Q("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${a?Q("coords",1,k.rank):Q("coords",2,k.rank)},
              ${a?Q("coords",2,k.rank):Q("coords",3,k.rank)},
              ${a?Q("coords",3,k.rank):Q("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Q("uniforms.x_shape",1,k.rank):Q("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${a?Q("uniforms.x_shape",2,k.rank):Q("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${a?Q("uniforms.x_shape",3,k.rank):Q("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${a?Q("uniforms.x_shape",4,k.rank):Q("uniforms.x_shape",1,k.rank)};
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
              ${D}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:b}}}),rl,il,$m=U(()=>{te(),re(),ne(),Ot(),rl=(e,t,r,i)=>{let n=e.length>2,s=n?"value += b[output_channel];":"",a=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?ve(d):1,g=O.size(r)/h,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Ct(t,y),y.push(...J(a,[u[0],u[1],u[2],u[3]/h]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...J([r[0],r[1],r[2],r[3]/h]));let b=S=>{let v=Y("output",e[0].dataType,r.length,h),w=Te(v.type.tensor),T=zt(t,v.type.value,w),k=N("x",e[0].dataType,a.length),E=N("w",e[1].dataType,u.length,h),z=[k,E];n&&z.push(N("b",e[2].dataType,e[2].dims,h));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];At(t,A);let $=l?`
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
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...z,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${$}
    ${s}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},il=(e,t,r,i)=>{let n=e.length>2,s=ve(r[3]),a=ve(r[2]),u=O.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ct(t,h),h.push(...J(l,d,c));let g=(a-1)*t.strides[1]+d[1],y=_=>{let b=Y("output",e[0].dataType,c.length,s),S=Te(b.type.tensor),v=zt(t,b.type.value,S),w=N("x",e[0].dataType,l.length,s),T=N("w",e[1].dataType,d.length,s),k=[w,T];n&&k.push(N("b",e[2].dataType,e[2].dims,s));let E=n?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return At(t,z),`
  ${_.registerUniforms(z).declareVariables(...k,b)}
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

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${b.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${g};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:y}}}),nl,Br,al,Nr,ln,dn,sl,ol,pn,vm=U(()=>{re(),bm(),wm(),sn(),$m(),Ot(),tn(),ht(),nl=(e,t,r,i,n,s)=>{let a=e[0],u=e.slice(s?1:2,s?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),h=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-c[y]+n[y])/n[y]));return h.splice(0,0,a),h.splice(s?3:1,0,d),h},Br=[2,3,1,0],al=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Nr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Ir.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},ln=e=>{let t=Qi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,s=e.group,a=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},dn=(e,t,r,i)=>{let n=r.format==="NHWC",s=nl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let z=[t[0]];if(n){let A=e.kernelCustomData.wT??e.compute(De(t[1],Br),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),z.push(A)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(il(z,r,s,i),{inputs:z}):e.compute(rl(z,r,s,i),{inputs:z});return}let a=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],h=t[1].dims[3],g=s[n?1:2],y=s[n?2:3],_=s[n?3:1],b=n&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=s[0],A,$,M,D=[];if(n){let j=e.kernelCustomData.wT??e.compute(De(t[1],Br),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),b){let R=u*l*d;A=t[0].reshape([1,z,R]),$=j.reshape([1,R,_]),M=[1,z,_]}else A=t[0].reshape([z,u*l,d]),$=j.reshape([1,d,_]),M=[z,g*y,_];D.push(A),D.push($)}else A=t[0].reshape([z,d,u*l]),$=t[1].reshape([1,_,d]),M=[z,_,g*y],D.push($),D.push(A);a&&D.push(t[2]);let G=M[2],F=D[0].dims[D[0].dims.length-1];G<8&&F<8?e.compute(en(D,r,s,M,n,i),{inputs:D}):e.compute(Mr(D,r,s,M,n,i),{inputs:D});return}let S=!0,v=e.kernelCustomData.wT??e.compute(De(t[1],Br),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];a&&w.push(t[2]);let T=n?g*y:_,k=n?_:g*y,E=c*h*d;e.compute(Zu(w,r,s,T,k,E,a,S,i),{inputs:w})},sl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Nr({...t,pads:n,strides:s,dilations:a,kernelShape:u},i);dn(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ol=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Nr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=el(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(tl(t,n,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},pn=(e,t)=>{if(al(e.inputs,t),e.inputs[0].dims.length===3)sl(e,t);else if(e.inputs[0].dims.length===5)ol(e,e.inputs,t);else{let r=Nr(t,e.inputs);dn(e,e.inputs,r)}}}),ul,xm=U(()=>{te(),st(),re(),ne(),ul=(e,t,r)=>{let i=e.length>2,n=t.outputShape,s=t.format==="NHWC",a=t.group,u=e[1].dims,l=u[2]/a,d=u[3],c=s?ve(l):1,h=s&&d===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,y=l-g,_=s?ve(d):1,b=s?d===1?c:_:1,S=O.size(n)/_,v=[Math.ceil(S/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],k=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],z=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],A=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:12,data:E},{type:12,data:z},{type:6,data:A},{type:12,data:g},{type:12,data:l},{type:12,data:d},...J(e[0].dims,e[1].dims)];i&&($.push(...J(e[2].dims)),w.push("rank")),$.push(...J(n));let M=D=>{let G=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Te(e[0].dataType),j=s?1:2,R=s?2:3,K=s?3:1,X=N("W",e[1].dataType,e[1].dims.length,b),ee=N("Dy",e[0].dataType,e[0].dims.length,c),fe=[ee,X];i&&fe.push(N("bias",e[2].dataType,[n[K]].length,_));let W=Y("result",e[0].dataType,n.length,_),ue=()=>{let Z="";if(h)c===4?Z+=`
        let xValue = ${ee.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}), vec4<${F}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${ee.getByOffset("x_offset")}, ${ee.getByOffset("x_offset + 1u")}, ${ee.getByOffset("x_offset + 2u")}, ${ee.getByOffset("x_offset + 3u")}), vec4<${F}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${s?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ee.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Z+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let L=0;L<c;L++)Z+=`
            let wValue${L} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${L}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${L}] * wValue${L};`;return Z},P=()=>{if(y===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Z="";if(c===1){Z+="dotProd = dotProd";for(let L=0;L<y;L++)Z+=`
            + ${ee.getByOffset(`x_offset + ${L}`)} * ${X.getByOffset(`w_offset + ${L}`)}`;Z+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Z+=`
          let xValue = ${ee.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},V=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",K)};
            let r = ${W.indicesGet("outputIndices",j)};
            let c = ${W.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${j}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${ue()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${D.registerUniforms(G).declareVariables(...fe,W)}
      ${D.mainStart()}
      ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${V}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${_}${h}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:M}}}),ll,dl,pl,cn,cl,hl,hn,fl,ml,Sm=U(()=>{xm(),Ot(),ht(),ll=(e,t,r,i,n,s)=>(e-1)*t+r+(i-1)*n+1-s,dl=(e,t,r,i,n)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[n]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[n]=s)},pl=(e,t,r,i,n,s,a,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],y=t[u?3:1]*n;for(let _=0,b=e.length-c-(u?1:0);_<c;++_,++b){let S=e[b],v=h?S*a[_]:d[_],w=ll(S,a[_],s[_],t[b],r[_],v);dl(w,i,s,_,_+c),h&&d.push(a[_]*(S-1)+l[_]+(t[b]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,g),d.splice(u?3:1,0,y)},cn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}pl(u,r,l,e.autoPad,e.group,n,d,i,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:a,outputShape:s,dilations:l,strides:d}),c},cl=e=>{let t=Qi(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,s=e.group??1,a=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},hl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,u)=>a+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,u)=>a+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,u)=>a+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,u)=>a+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},hn=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(De(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let s=[t[0],n];t.length===3&&s.push(t[2]),e.compute(ul(s,r,i),{inputs:s})},fl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],a=[1].concat(a),s=[1].concat(s),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=cn({...t,pads:u,strides:a,dilations:s,kernelShape:n,outputPadding:l},i);hn(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},ml=(e,t)=>{if(hl(e.inputs,t),e.inputs[0].dims.length===3)fl(e,t);else{let r=cn(t,e.inputs);hn(e,e.inputs,r)}}}),gl,yl,_l,km=U(()=>{te(),re(),xe(),ne(),gl=(e,t,r,i)=>{let n=O.size(t),s=t.length,a=N("input",e,s),u=Y("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(l,s),c=h=>{let g=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,y=Q("uniforms.input_shape","uniforms.axis",s),_=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...J(t,t)]}),getShaderSource:c}},yl=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(gl(i,r,n,t),{inputs:[0]})},_l=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),bl,wl,$l,vl,xl,Tm=U(()=>{te(),re(),xe(),ne(),bl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},wl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},$l=(e,t)=>{let r,i,n,s,a,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,n,s]=e.dims,a=c?[r,i,n,d,d,s/d**2]:[r,i,n,s/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[r,d,d,s/d**2,i,n]:[r,s/d**2,d,d,i,n],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(a),g=h.dims.length,y=e.dataType,_=N("a",y,g),b=Y("output",y,g),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${wl(u,g,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,i*d,n*d,s/d**2]:[r,s/d**2,i*d,n*d],T=O.size(w),k=h.dims,E=O.sortBasedOnPerm(k,u);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...J(k,E)]}},getShaderSource:S}},vl=(e,t)=>{bl(e.inputs),e.compute($l(e.inputs[0],t))},xl=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Dr,sr,fn,Sl,kl,Tl,Il,mn,El,zl,Cl,Im=U(()=>{te(),re(),xe(),ne(),Dr="[a-zA-Z]|\\.\\.\\.",sr="("+Dr+")+",fn="^"+sr+"$",Sl="("+sr+",)*"+sr,kl="^"+Sl+"$",Tl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Il=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(kl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let u=e[a].dims.slice();if(!s.match(RegExp(fn)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,u,a);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(sr)))throw new Error("Invalid RHS");(n=i.match(RegExp(Dr,"g")))==null||n.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,s=!1,a=[],u=0;if(!e.match(RegExp(fn))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Dr,"g")),d=new Tl(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=n-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<a.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,h+y),this.addSymbol(_,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},mn=e=>e+"_max",El=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>N(`input${c}`,t,d)),s=O.size(i),a=Y("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],b=[],S=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,E)=>{var z;if(r.rhs.symbolToIndices.has(E)){let A=(z=r.rhs.symbolToIndices.get(E))==null?void 0:z[0];A!==void 0&&r.lhs.forEach(($,M)=>{if(k.inputIndices.includes(M)){let D=$.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(G=>{c.push(`${n[M].indicesSet(`input${M}Indices`,G,a.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,$)=>{if(k.inputIndices.includes($)){let M=A.symbolToIndices.get(E);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(D=>{_.push(`${n[$].indicesSet(`input${$}Indices`,D,`${E}`)}`)}),v.push(`prod *= ${n[$].getByIndices(`input${$}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${mn(E)}; ${E}++) {`),S.push("}")});let T=w?[...c,`let sum = ${n.map((k,E)=>k.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,g,...b,..._,h,...v,y,...S];return`
            ${d.registerUniforms(u.map(k=>({name:`${mn(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${n.map((k,E)=>`var input${E}Indices: ${n[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});d.push({type:12,data:s});let c=e.map((h,g)=>[...J(h)]).reduce((h,g)=>h.concat(g),d);return c.push(...J(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},zl=(e,t)=>{let r=new Il(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((s,a)=>s.dims);e.compute(El(n,e.inputs[0].dataType,r,i))},Cl=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),Al,gn,Ol,Rl,Ml,Em=U(()=>{te(),re(),ne(),Al=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},gn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Ol=(e,t)=>e.length>t.length?gn(e,t):gn(t,e),Rl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Ol(t,r),n=e[0].dataType,s=n===9||O.size(t)===1,a=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),d=h=>{let g=N("input",n,t.length,a),y=Y("output",n,i.length,u),_;if(n===9){let b=(S,v,w="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${w}(${g.getByOffset(`index${v}`)}[component${v}]);
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
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${a}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...J(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Ml=e=>{Al(e.inputs),e.compute(Rl(e.inputs),{inputs:[0]})}}),Bl,Nl,zm=U(()=>{te(),re(),ne(),Yi(),Bl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),n=i%4===0,s=a=>{let u=N("x",t,[1],4),l=N("bias",t,[1],4),d=Y("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(u,l,d)}

    ${Xi(ze(t))}

    ${a.mainStart(Ht)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Zi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Ht/4)}})}},Nl=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?gu(e):e.compute(Bl(e.inputs))}}),Dl,Ul,Pl,Ll,Cm=U(()=>{te(),re(),xe(),ne(),Dl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Ul=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=O.normalizeAxis(t.axis,n),a=r.slice(0);a.splice(s,1,...i);let u=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(O.size(a)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:s},...J(e[0].dims,e[1].dims,a)],h=g=>{let y=N("data",e[0].dataType,e[0].dims.length,l),_=N("inputIndices",e[1].dataType,e[1].dims.length),b=Y("output",e[0].dataType,a.length,l),S=w=>{let T=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let E=0;E<T;E++)k+=`${T>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${a.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let E=0,z=0;E<n;E++)E===s?(k+=`${n>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,z+=T):(k+=`${n>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${a.length>1?`outputIndices${w}[${z}]`:`outputIndices${w}`};`,z++);return k},v;if(e[0].dataType===9){let w=(T,k,E="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${y.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${E}(${y.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},Pl=e=>he({axis:e.axis}),Ll=(e,t)=>{let r=e.inputs;Dl(r),e.compute(Ul(e.inputs,t))}}),ql,Wl,Vl,Am=U(()=>{te(),re(),ne(),ql=(e,t,r,i,n,s,a,u,l)=>{let d=[{type:12,data:s},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:a},{type:12,data:u},{type:12,data:l}],c=[s];d.push(...J(t.dims,c));let h=g=>{let y=N("indices_data",t.dataType,t.dims.length),_=Y("input_slice_offsets_data",12,1,1),b=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Wl=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,s=r[1].dims,a=s[s.length-1],u=O.sizeToDimension(s,s.length-1),l=O.sizeFromDimension(i,t.batchDims+a),d=O.sizeToDimension(i,t.batchDims),c=O.sizeFromDimension(i,t.batchDims),h=u/d,g=new Array(a),y=l;for(let k=0;k<a;++k)g[a-1-k]=y,y*=i[t.batchDims+a-1-k];let _=ql(e,r[1],g,t.batchDims,i,u,h,c,a),b=t.batchDims+a;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=s.slice(0,-1).concat(i.slice(b)),v=O.size(S),w=[{type:12,data:v},{type:12,data:l},...J(r[0].dims,_.dims,S)],T=k=>{let E=N("data",r[0].dataType,r[0].dims.length),z=N("slice_offsets",12,_.dims.length),A=Y("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,z,A)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],_]})},Vl=e=>({batchDims:e.batch_dims,cacheKey:""})}),Gl,Hl,Fl,jl,Om=U(()=>{te(),re(),xe(),ne(),Gl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/i)===s.dims[l]:u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((u,l)=>u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Hl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=O.normalizeAxis(t.gatherAxis,n),a=O.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(s,1,...i);let l=O.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...J(...e.map((y,_)=>y.dims),u)],g=y=>{let _=N("data",e[0].dataType,e[0].dims.length),b=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),v=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=Y("output",d,u.length),T=[_,b,S];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(k).declareVariables(...T,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
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
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},Fl=(e,t)=>{let r=e.inputs;Gl(r,t),e.compute(Hl(e.inputs,t))},jl=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Kl,Xl,Zl,Yl,Rm=U(()=>{te(),re(),xe(),ne(),Kl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Xl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,s=e[1].dims,a=e[1].dataType,u=O.normalizeAxis(t.axis,n),l=r[u],d=s.slice(0),c=O.size(d),h=N("input",i,n),g=N("indicesInput",a,s.length),y=Y("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...J(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Zl=e=>he({axis:e.axis}),Yl=(e,t)=>{let r=e.inputs;Kl(r),e.compute(Xl(e.inputs,t))}}),Ql,Jl,ed,td,Mm=U(()=>{te(),re(),ne(),Ql=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Jl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,s,a]=ls.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[n,s];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(n/l),h=!0,g=O.size(u),y=[{type:12,data:h?d:g},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...J(e[2].dims)),_.push("rank")),y.push(...J(u));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),z=k.type.value,A=null,$=[k,E];e.length===3&&(A=N("c",e[2].dataType,e[2].dims.length),$.push(A));let M=Y("output",e[0].dataType,u.length);$.push(M);let D=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(D).declareVariables(...$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${z}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let w=N("a",e[0].dataType,e[0].dims),T=N("b",e[1].dataType,e[1].dims),k=null,E=[w,T];e.length===3&&(k=N("c",e[2].dataType,e[2].dims.length),E.push(k));let z=Y("output",e[0].dataType,u.length);E.push(z);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",M="";t.transA&&t.transB?(M=`
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let D=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${D}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},ed=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},td=(e,t)=>{Ql(e.inputs),e.compute(Jl(e.inputs,t))}}),Je,ot,Rt,Mt,rd,id,nd,ad,sd,od,ud,ld,dd,pd,Bm=U(()=>{te(),re(),xe(),ne(),[Je,ot,Rt,Mt]=[0,1,2,3],rd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},id=`
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
`,nd=e=>`
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
`,ad=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,sd=e=>`
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
`,od=(e,t,r)=>`
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
`,ud=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ld=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=N("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Je,ot,Rt,Mt]=[0,3,1,2]);let a=Y("output",e[0].dataType,s.length),u=r.type.value,l=O.size(s),d=[{type:12,data:l},...J(e[0].dims,i,s)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,a)}
  ${id}
  ${nd(u)}
  ${ad(t)}
  ${sd(t)}
  ${od(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ud(a,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=O.size(s);return{outputs:[{dims:s,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},dd=(e,t)=>{rd(e.inputs),e.compute(ld(e.inputs,t))},pd=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ce,cd,hd,yn,fd,or,md,gd=U(()=>{te(),re(),xe(),Ni(),ji(),ne(),ht(),Ce=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,cd=(e,t)=>{let r=e[0],i=Ce(e,1),n=Ce(e,2),s=Ce(e,3),a=Ce(e,4),u=Ce(e,5),l=Ce(e,6),d=Ce(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=h,_=0,b=0,S=Math.floor(g/t.numHeads);if(l&&d&&O.size(l.dims)&&O.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&O.size(l.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&O.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,T=0;if(a&&O.size(a.dims)>0){T=8;let A=a.dims;throw A.length===1?A[0]===c?T=1:A[0]===3*c+2&&(T=3):A.length===2&&A[0]===c&&A[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,E=g;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=n.dims[1]*n.dims[3],k=!0}}let z=!1;if(a&&O.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:z,passPastInKv:k,qkvFormat:v}},hd=e=>he({...e}),yn=he({perm:[0,2,1,3]}),fd=(e,t,r,i,n,s,a)=>{let u=[i,n,s],l=O.size(u),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],c=h=>{let g=Y("qkv_with_bias",t.dataType,u),y=N("qkv",t.dataType,u),_=N("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(b).declareVariables(y,_,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},or=(e,t,r,i,n,s,a,u)=>{let l=s;if(a&&O.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=fd(e,s,a,t,i,r*n,u),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(De(l,yn.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,n])),r===1||i===1?l:e.compute(De(l,yn.perm),{inputs:[l],outputs:[-1]})[0]},md=(e,t)=>{let r=cd(e.inputs,t),i=e.inputs[0],n=Ce(e.inputs,1),s=Ce(e.inputs,2),a=Ce(e.inputs,3),u=Ce(e.inputs,4),l=Ce(e.inputs,5),d=Ce(e.inputs,6),c=Ce(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&s&&n.dims.length===4&&s.dims.length===4,g=or(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(h)return rr(e,g,n,s,u,void 0,d,c,l,r);if(!n||!s)throw new Error("key and value must be provided");let y=or(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,a,r.hiddenSize),_=or(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);rr(e,g,y,_,u,void 0,d,c,l,r)}}),yd,_d,bd,wd,_n,$d,vd,xd=U(()=>{te(),re(),xe(),ne(),yd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},_d=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},bd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,wd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},_n=(e,t)=>{let r=e[0].dims,i=O.size(r),n=e[0].dataType,s=O.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),u=N("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],l[_]=h;let b=r.slice();b[s]=t.splitSizes[_],c.push(b),a[_]=Y(`output${_}`,n,b.length),d.push({dims:c[_],dataType:e[0].dataType})}g.push({type:12,data:l},...J(r,...c));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...a)}
  ${bd(l.length)}
  ${wd(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},$d=(e,t)=>{yd(e.inputs);let r=e.inputs.length===1?t:_d(e.inputs,t);e.compute(_n(e.inputs,r),{inputs:[0]})},vd=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),Sd,Ur,kd,Td=U(()=>{te(),re(),xe(),ne(),Sd=(e,t)=>{let[r,i,n,s]=e,{numHeads:a,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!O.areEqual(n.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],h=O.sizeFromDimension(r.dims,1)/d,g=u===0?n.dims[1]*2:h/a;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},Ur=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:s}=t,a=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=n===0?c*2:d/i,g=new Array(a,l,d/h,h-c),y=O.computeStrides(g),_=[{type:1,data:s},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...J(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let v=N("input",e[0].dataType,e[0].dims.length),w=N("position_ids",e[1].dataType,e[1].dims.length),T=N("cos_cache",e[2].dataType,e[2].dims.length),k=N("sin_cache",e[3].dataType,e[3].dims.length),E=Y("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(v,w,T,k,E)}

        ${S.mainStart(Ht)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
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
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/Ht)},programUniforms:_})}},kd=(e,t)=>{Sd(e.inputs,t),e.compute(Ur(e.inputs,t))}}),Id,Ed,bn,zd,Cd,Nm=U(()=>{xe(),te(),ji(),gd(),xd(),ht(),Td(),ne(),Id=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,y=!i||i.dims.length===0,_=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=_*t.numHeads);let b=s&&s.dims.length!==0,S=a&&a.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,T=!1,k=t.kvNumHeads?_*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=n.dims[1]*n.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=E.dims.reduce((A,$)=>A*$,1);if(z!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${z}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},Ed=he({perm:[0,2,1,3]}),bn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(De(i,Ed.perm),{inputs:[i],outputs:[-1]})[0]),i},zd=(e,t,r,i)=>{let n=7,s=["type","type"],a=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=N("seq_lens",r.dataType,r.dims),g=N("total_seq_lens",i.dataType,i.dims),y=Y("pos_ids",n,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(h,g,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Cd=(e,t)=>{var k;let r=Id(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,y,_]=!n&&!s?e.compute(_n([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,s],b,S;if(t.doRotary){let E=e.compute(zd(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],z=e.inputs[7],A=e.inputs[8],$=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),M=[g,E,z,A],D=[-1];b=e.compute(Ur(M,$),{inputs:M,outputs:D})[0],M.splice(0,1,y);let G=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(Ur(M,G),{inputs:M,outputs:D})[0]}let v=or(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),w=bn(e,t.doRotary?S:y,r),T=bn(e,_,r);rr(e,v,w,T,void 0,void 0,a,u,void 0,r,l,d)}}),wn,Ad,Od,Rd,Dm=U(()=>{te(),re(),ht(),ne(),wn=(e,t,r,i,n,s,a,u)=>{let l=ve(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=n*a,g=64;h===1&&(g=256);let y=[n,a,s/l],_=[n,a,2],b=["rank","type","type"],S=[];S.push(...J(y,_));let v=w=>{let T=N("x",t.dataType,3,l),k=N("scale",r.dataType,r.dims),E=N("bias",i.dataType,i.dims),z=Y("output",1,3,2),A=[T,k,E,z];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...A)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
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
      let sum_final = ${ct("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ct("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Ad=(e,t,r)=>{let i=t[0].dims,n=i,s=2,a=i[0],u=i[1],l=O.sizeFromDimension(i,s),d=ve(l),c=O.size(n)/d,h=wn(e,t[0],t[1],t[2],a,l,u,r.epsilon),g=[a,u,l/d],y=[a,u],_=["type","none"],b=S=>{let v=N("x",t[0].dataType,g.length,d),w=N("scale_shift",1,y.length,2),T=Y("output",t[0].dataType,g.length,d),k=[v,w,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...J(g,y,g)]}),getShaderSource:b},{inputs:[t[0],h]})},Od=(e,t,r)=>{let i=t[0].dims,n=i,s=i[0],a=i[i.length-1],u=O.sizeFromDimension(i,1)/a,l=ve(a),d=O.size(n)/l,c=[{type:12,data:u},{type:12,data:Math.floor(a/l)}],h=["type","type"],g=!1,y=[0,i.length-1];for(let v=0;v<i.length-2;v++)g=g||i[v+1]!==1,y.push(v+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(De(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[y[w]])),b=wn(e,_,t[1],t[2],s,u,a,r.epsilon),S=v=>{let w=Te(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,k=A=>{let $=A===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${M}(scale.${$}))`;case 2:return`vec2<${w}>(${M}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${M}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=N("input",t[0].dataType,t[0].dims,l),z=Y("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],b]})},Rd=(e,t)=>{t.format==="NHWC"?Od(e,e.inputs,t):Ad(e,e.inputs,t)}}),Md,Bd,Nd,Um=U(()=>{te(),re(),ne(),Md=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Bd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,s=e[1],a=!i&&e[2],u=n,l=O.normalizeAxis(t.axis,n.length),d=O.sizeToDimension(n,l),c=O.sizeFromDimension(n,l),h=O.size(s.dims),g=a?O.size(a.dims):0;if(h!==c||a&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let y=[];for(let E=0;E<n.length;++E)E<l?y.push(n[E]):y.push(1);let _=ve(c),b=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];a&&b.push("type");let v=r>1,w=r>2,T=E=>{let z=Te(e[0].dataType),A=[N("x",e[0].dataType,e[0].dims,_),N("scale",s.dataType,s.dims,_)];a&&A.push(N("bias",a.dataType,a.dims,_)),A.push(Y("output",e[0].dataType,u,_)),v&&A.push(Y("mean_data_output",1,y)),w&&A.push(Y("inv_std_output",1,y));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms($).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Li("f32",_)};
    var mean_square_vector = ${Li("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ft(z,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ct("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ct("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ft(z,_,"x[j + offset]")};
      let f32scale = ${Ft(z,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Ft(z,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return v&&k.push({dims:y,dataType:1}),w&&k.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},Nd=(e,t)=>{Md(e.inputs),e.compute(Bd(e.inputs,t,e.outputCount))}}),Dd,Ud,Pm=U(()=>{re(),tn(),sn(),Dd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Ud=e=>{Dd(e.inputs);let t=Gt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(en(e.inputs,{activation:""},t));else{let n=t[t.length-2],s=O.size(e.inputs[0].dims.slice(0,-2)),a=O.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&n===1&&a===1){let u=e.inputs[0].reshape([1,s,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,s,r],c=[u,l];e.compute(Mr(c,{activation:""},t,d),{inputs:c})}else e.compute(Mr(e.inputs,{activation:""},t))}}}),Pd,Ld,qd,Wd,Vd,Lm=U(()=>{te(),re(),xe(),ne(),Pd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!O.areEqual(a.dims,[t.n,n,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(O.size(l)!==d)throw new Error("zeroPoints input size error.")}},Ld=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),g=ve(d),y=ve(a),_=u.concat([n,a]),b=n>1&&a/y%2===0?2:1,S=O.size(_)/y/b,v=64,w=[],T=[l,n,s/h],k=O.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),w.push(...J(T)),w.push(...J(k)),w.push(...J(e[2].dims)),e.length===4&&w.push(...J(O.convertShape(e[3].dims)));let E=[l,n,a/y];w.push(...J(E));let z=A=>{let $=T.length,M=N("a",e[0].dataType,$,h),D=N("b",12,k.length,g),G=N("scales",e[2].dataType,e[2].dims.length),F=[M,D,G],j=e.length===4?N("zero_points",12,e[3].dims.length):void 0;j&&F.push(j);let R=E.length,K=Y("output",e[0].dataType,R,y),X=Te(e[0].dataType),ee=(()=>{switch(h){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${h}-component is not supported.`)}})(),fe=Math.floor(32/t.bits),W=Math.floor(fe/8),ue=()=>{let Z="";for(let L=0;L<W;L++){let ge=L*t.bits*4,qe=ge+t.bits;Z+=`
          // reuse a data (pass ${L})
            var input_offset${L>0?L:""} = ${L===0?M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${L>0?L:""}: ${ee};
            for (var j${L>0?L:""}: u32 = 0; j${L>0?L:""} < ${8/h}; j${L>0?L:""}++) {
              a_data${L>0?L:""}[j${L>0?L:""}] = ${M.getByOffset(`input_offset${L>0?L:""}`)};
              input_offset${L>0?L:""}++;
            }
          `;for(let Se=0;Se<y*b;Se++)Z+=`
            b_value = ${g===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${L*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ge}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${qe}u) & b_mask);`}
            b_quantized_values = ${ee}(${Array.from({length:4},(Oe,Re)=>`${X}(b_value_lower[${Re}]), ${X}(b_value_upper[${Re}])`).join(", ")});
            b_dequantized_values = ${h===1?`${ee}(${Array.from({length:8},(Oe,Re)=>`(b_quantized_values[${Re}] - ${j?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${ee}(${Array(8).fill(`${j?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Se/y)}]${y>1?`[${Se%y}]`:""} += ${Array.from({length:8/h},(Oe,Re)=>`${h===1?`a_data${L>0?L:""}[${Re}] * b_dequantized_values[${Re}]`:`dot(a_data${L>0?L:""}[${Re}], b_dequantized_values[${Re}])`}`).join(" + ")};
          `}return Z},P=()=>{let Z=`
            var col_index = col * ${y};
            ${j?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${X}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let L=0;L<y*b;L++)Z+=`
            let scale${L} = ${G.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},V=()=>{let Z=`col_index = col * ${y};`;for(let L=0;L<y*b;L++)Z+=`
            let b${L}_data = ${D.getByIndices(`${D.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ee};
            var b_dequantized_values: ${ee};`,Z};return`
        var<workgroup> workgroup_shared: array<${K.type.value}, ${b*v}>;
        ${A.declareVariables(...F,K)}
        ${A.mainStart([v,1,1])}
          let output_indices = ${K.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${P()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${V()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ue()}
                word_offset += ${fe/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${K.type.value} = ${K.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${K.setByIndices(`${K.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${y};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:z}},qd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),g=ve(d),y=u.concat([n,a]),_=128,b=a%8===0?8:a%4===0?4:1,S=_/b,v=Math.floor(32/t.bits),w=S*g*v,T=w/h,k=w/t.blockSize,E=O.size(y)/b,z=[],A=[l,n,s/h],$=O.convertShape(e[1].dims).slice();$.splice(-1,1,d/g),z.push(...J(A)),z.push(...J($)),z.push(...J(e[2].dims)),e.length===4&&z.push(...J(O.convertShape(e[3].dims)));let M=[l,n,a];z.push(...J(M));let D=G=>{let F=A.length,j=N("a",e[0].dataType,F,h),R=N("b",12,$.length,g),K=N("scales",e[2].dataType,e[2].dims.length),X=[j,R,K],ee=e.length===4?N("zero_points",12,e[3].dims.length):void 0;ee&&X.push(ee);let fe=M.length,W=Y("output",e[0].dataType,fe),ue=Te(e[0].dataType),P=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${j.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${S}>, ${b}>;
        ${G.declareVariables(...X,W)}
        ${G.mainStart([S,b,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${j.getByIndices(`${j.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${j.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${ee?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ue}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ue}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${K.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let V=Math.floor(v/8),Z="";for(let L=0;L<V;L++){let ge=L*t.bits*4,qe=ge+t.bits;Z+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${L*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ge}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${qe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ue}>(${Array.from({length:4},(Se,Oe)=>`${ue}(b_value_lower[${Oe}]), ${ue}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ue}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${W.setByIndices(`${W.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:E},programUniforms:z}),getShaderSource:D}},Wd=(e,t)=>{Pd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(qd(e.inputs,t)):e.compute(Ld(e.inputs,t))},Vd=e=>he(e)}),Gd,Hd,Fd,jd,Kd,Xd,Zd,Yd,Qd,qm=U(()=>{te(),re(),ne(),Gd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Hd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Q("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Fd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k = i32(${Q("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Kd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${Q("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k -= i32(${Q("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Xd=(e,t,r)=>{switch(r.mode){case 0:return Hd(e,t,r.pads.length);case 1:return Fd(e,t,r.pads.length);case 2:return jd(e,t,r.pads.length);case 3:return Kd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Zd=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=O.size(r),s=[{type:12,data:n},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...J(e[0].dims,r));let u=["rank"],l=d=>{let c=Y("output",e[0].dataType,r.length),h=N("x",e[0].dataType,i.length),g=h.type.value,y=Xd(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?g:"f32"}),`
            ${d.registerUniforms(_).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:s}),getShaderSource:l}},Yd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,s=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)s[Number(u[l])]=Number(r[l]),s[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>s[Number(l)]=Number(u));let a=[];return s.forEach(u=>a.push(u)),{mode:t.mode,value:i,pads:a}}else return t},Qd=(e,t)=>{Gd(e.inputs);let r=Yd(e.inputs,t);e.compute(Zd(e.inputs,r),{inputs:[0]})}}),ur,$n,vn,xn,Sn,Jd,ep,kn,Tn,tp,rp,In,ip,np,En,ap,sp,op,up,Wm=U(()=>{Le(),te(),re(),ne(),ur=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},$n=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),u=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Ir.adjustPoolAttributes(r,n,a,u,l,d);let c=Ir.computePoolOutputShape(r,n,u,l,a,d,t.autoPad),h=Object.assign({},t);s?Object.assign(h,{kernelShape:a,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:a,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},vn=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),n=O.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:n}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);s.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(b+S),s.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:S}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,a,!!l,!1,!1]}},xn=(e,t,r,i,n,s,a,u,l,d,c,h)=>{let g=n.format==="NHWC",y=t.type.value,_=Y("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",S="",v="",w=r-(g?2:1);if(c?b=`
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
                }`,n.kernelShape.length===2){let T=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
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
              ${v}
              ${a}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,S=n.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
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
                  offsets[j] = offset / ${Q("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Q("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Q("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${Q("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${a}

              output[global_idx] = value;
            }`}},Sn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Jd=e=>`${Sn(e)};${e.countIncludePad}`,ep=e=>`${Sn(e)};${e.storageOrder};${e.dilations}`,kn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Tn=(e,t,r,i)=>{let[n,s]=$n(t,i,r),a=N("x",t.dataType,t.dims.length),u=a.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,y,_]=vn(s,n);c.push(...J(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(s)/64)},programUniforms:c}),getShaderSource:S=>xn(S,a,t.dims.length,s.length,n,l,d,0,h,g,y,_)}},tp=e=>{let t=e.count_include_pad!==0,r=kn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Jd(i)}},rp=(e,t)=>{ur(e.inputs),e.compute(Tn("AveragePool",e.inputs[0],!1,t))},In={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ip=e=>{let t=e.format;return{format:t,...In,cacheKey:t}},np=(e,t)=>{ur(e.inputs),e.compute(Tn("GlobalAveragePool",e.inputs[0],!0,t))},En=(e,t,r,i)=>{let[n,s]=$n(t,i,r),a=`
      value = max(x_val, value);
    `,u="",l=N("x",t.dataType,t.dims.length),d=["rank"],[c,h,g,y,_]=vn(s,n);return c.push(...J(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(s)/64)},programUniforms:c}),getShaderSource:b=>xn(b,l,t.dims.length,s.length,n,a,u,t.dataType===10?-65504:-1e5,h,g,y,_)}},ap=(e,t)=>{ur(e.inputs),e.compute(En("MaxPool",e.inputs[0],!1,t))},sp=e=>{let t=e.storage_order,r=e.dilations,i=kn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:ep(n)}},op=e=>{let t=e.format;return{format:t,...In,cacheKey:t}},up=(e,t)=>{ur(e.inputs),e.compute(En("GlobalMaxPool",e.inputs[0],!0,t))}}),lp,dp,pp,cp,Vm=U(()=>{te(),re(),xe(),ne(),lp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,s)=>s===t.axis||n===e[0].dims[s]).reduce((n,s)=>n&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},dp=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,s=e[0].dims,a=e[1].dataType,u=O.size(s),l=i===3||i===2,d=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(O.size(h.dims)/4)]:h.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,_=y===!1&&c.length===1,b=ve(u),S=y&&(!l||b===4),v=S?b:1,w=S&&!l?b:1,T=N("input",l?12:i,d.length,w),k=N("scale",a,c.length),E=h?N("zero_point",l?12:i,g.length):void 0,z=Y("output",a,s.length,v),A=[T,k];E&&A.push(E);let $=[d,c];h&&$.push(g);let M=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...J(...$,s)],D=G=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${G.registerUniforms(F).declareVariables(...A,z)}
      ${G.mainStart()}
          ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:D,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:M})}},pp=(e,t)=>{lp(e.inputs,t),e.compute(dp(e.inputs,t))},cp=e=>he({axis:e.axis,blockSize:e.blockSize})}),hp,fp,mp,Gm=U(()=>{Le(),te(),ne(),hp=(e,t,r)=>{let i=e===t,n=e<t&&r<0,s=e>t&&r>0;if(i||n||s)throw new Error("Range these inputs' contents are invalid.")},fp=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),s=[n],a=n,u=[{type:12,data:a},{type:i,data:e},{type:i,data:r},...J(s)],l=d=>{let c=Y("output",i,s.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},mp=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&hp(t,r,i),e.compute(fp(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),gp,yp,_p,bp,Hm=U(()=>{te(),re(),xe(),ne(),gp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
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
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},yp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,s=1,a=Math.ceil(O.sizeToDimension(i,i.length-1)/s),u=i[i.length-1],l=O.sizeFromDimension(r,u),d=[{type:12,data:a},{type:12,data:u},{type:12,data:l},...J(e[1].dims,e[2].dims,n)],c=h=>{let g=N("indices",e[1].dataType,e[1].dims.length),y=N("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Ss("output",e[0].dataType,n.length):Y("output",e[0].dataType,n.length,s);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${gp(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},_p=e=>he({reduction:e.reduction}),bp=(e,t)=>{e.compute(yp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),wp,$p,vp,zn,xp,Sp,kp,Tp,Ip,Ep,zp,Cp,Cn,Ap,Op,Rp,Mp,Bp,Np,Dp,Fm=U(()=>{te(),re(),xe(),ne(),wp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},$p=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,s)=>i[n]=e[s]),i},vp=(e,t,r,i,n,s)=>{let[a,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");wp(i,t),t.axes.length>0&&$p(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},zn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,xp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${zn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${zn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Sp=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",kp=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,a)=>{i[s]=n[a],i[a+r]=n[t.length+a]}),i):n},Tp=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>n.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,a)=>n[s]=r[a])}else r.forEach(s=>n.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((s,a)=>Math.round(s*t[a]))}return n},Ip=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>n[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),n.forEach((s,a)=>n[a]=Math.round(s*t[a]))),n},Ep=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Q("uniforms.scales","i",i)};
        var roi_low = ${Q("uniforms.roi","i",n)};
        var roi_hi = ${Q("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,zp=(e,t,r,i,n,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Q("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q("uniforms.roi","i",s)};
          var roi_hi = ${Q("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",i.length)};
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
    }`,Cp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Q("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Cn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ap=(e,t,r,i,n)=>{let[s,a,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Cn(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
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
    }`},Op=(e,t,r,i,n,s,a,u,l,d)=>{let c=r.length===2,[h,g]=c?[0,1]:[2,3],y=e.type.value,_=b=>{let S=b===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${i[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
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
          data[i + 1] = ${b===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(g)};
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
    `},Rp=(e,t,r,i,n)=>{let[s,a,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Cn(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
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
    }`},Mp=(e,t,r,i,n,s)=>{let a=e.dims,u=kp(s,t.axes,a.length),l=Tp(a,i,n,t.axes),d=i.slice();i.length===0&&(d=a.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Ip(a,d,t)));let c=Y("output",e.dataType,l.length),h=N("input",e.dataType,a.length),g=O.size(l),y=a.length===l.length&&a.every((w,T)=>w===l[T]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=h.type.value,v=w=>`
      ${y?"":`
      ${xp(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Cp(h,a)};
              ${Sp(t.nearestMode,r,S)};
              ${zp(h,c,a,l,d.length,u.length,_)};
              `;case"linear":return`
              ${Ep(c,a,l,d.length,u.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Ap(h,c,a,_,b)}`;if(a.length===3||a.length===5)return`${Rp(h,c,a,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Op(h,c,a,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...J(a,l)]})}},Bp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Np=(e,t)=>{let r=[],i=[],n=[],s=Bp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");vp(e.inputs,t,s,r,i,n),e.compute(Mp(e.inputs[0],t,s,r,i,n),{inputs:[0]})},Dp=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Up,Pp,Lp,jm=U(()=>{te(),re(),ne(),Up=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Pp=(e,t,r,i)=>{let n=t.simplified,s=e[0].dims,a=O.size(s),u=s,l=a,d=s.slice(-1)[0],c=i?s.slice(0,-1).concat(1):[],h=!n&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,S=64,v=ve(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],T=E=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[N("x",e[0].dataType,e[0].dims,v),N("skip",e[1].dataType,e[1].dims,v),N("gamma",e[2].dataType,e[2].dims,v)];h&&A.push(N("beta",e[3].dataType,e[3].dims,v)),g&&A.push(N("bias",e[4].dataType,e[4].dims,v)),A.push(Y("output",e[0].dataType,u,v)),y&&A.push(Y("mean_output",1,c)),_&&A.push(Y("inv_std_output",1,c)),b&&A.push(Y("input_skip_bias_sum",e[0].dataType,u,v));let $=Te(e[0].dataType),M=Te(1,v);return`

      ${E.registerUniforms(z).declareVariables(...A)}
      var<workgroup> sum_shared : array<${M}, ${S}>;
      var<workgroup> sum_squared_shared : array<${M}, ${S}>;

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
          let bias_value = ${g?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ft($,v,"value")};
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
        let mean = ${ct("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ct("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${b}`,inputDependencies:e.map((E,z)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Lp=(e,t)=>{Up(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Pp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),qp,lr,Wp,An,Vp,Gp,Hp,Fp,Km=U(()=>{te(),re(),xe(),ne(),qp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},lr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Wp=(e,t)=>{if(e.length>1){let r=lr(e,1),i=lr(e,2),n=lr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},An=(e,t,r,i,n)=>{let s=e;return e<0&&(s+=r[i[t]]),n[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Vp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Q("uniforms.input_shape","i",r.length)};
            let steps_i = ${Q("uniforms.steps","i",r.length)};
            let signs_i = ${Q("uniforms.signs","i",r.length)};
            let starts_i = ${Q("uniforms.starts","i",r.length)};
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
      }`,Gp=(e,t)=>{let r=e[0].dims,i=O.size(r),n=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=lr(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(n.length).fill(1));let a=t.starts.map((v,w)=>An(v,w,r,n,s)),u=t.ends.map((v,w)=>An(v,w,r,n,s));if(n.length!==a.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(a.splice(v,0,0),u.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,w,T)=>{if(v<0){let k=(u[w]-a[w])/v,E=a[w],z=E+k*s[w];a[w]=z,u[w]=E,T[w]=-v}});let d=r.slice(0);n.forEach((v,w)=>{d[v]=Math.ceil((u[v]-a[v])/s[v])});let c={dims:d,dataType:e[0].dataType},h=Y("output",e[0].dataType,d.length),g=N("input",e[0].dataType,e[0].dims.length),y=O.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:y},{type:12,data:a},{type:6,data:l},{type:12,data:s},...J(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(_).declareVariables(g,h)}
        ${Vp(g,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},Hp=(e,t)=>{qp(e.inputs,t);let r=Wp(e.inputs,t);e.compute(Gp(e.inputs,r),{inputs:[0]})},Fp=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),jp,Kp,Xp,Zp,Xm=U(()=>{te(),re(),xe(),ht(),ne(),jp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Kp=(e,t)=>{let r=e.inputs[0],i=r.dims,n=O.size(i),s=i.length,a=O.normalizeAxis(t.axis,s),u=a<i.length-1,l,d=[];u?(d=Array.from({length:s},(A,$)=>$),d[a]=s-1,d[s-1]=a,l=e.compute(De(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[s-1],g=n/h,y=ve(h),_=h/y,b=64;g===1&&(b=256);let S=(A,$)=>$===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:$===2?`max(${A}.x, ${A}.y)`:$===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,v=N("x",l.dataType,l.dims,y),w=Y("result",l.dataType,l.dims,y),T=v.type.value,k=Te(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${A.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
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
          rowMaxShared = ${T}(${S("threadShared[0]",y)});
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
          rowSumShared = ${T}(${ct("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(De(z,d),{inputs:[z]})},Xp=(e,t)=>{jp(e.inputs),Kp(e,t)},Zp=e=>he({axis:e.axis})}),On,Yp,Qp,Jp,ec,Zm=U(()=>{te(),re(),ne(),On=e=>Array.from(e.getBigInt64Array(),Number),Yp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(On(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Qp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Jp=(e,t)=>{let r=e[0].dims,i=t??On(e[1]),n=Qp(r,i),s=O.size(n),a=e[0].dataType,u=N("input",a,r.length),l=Y("output",a,n.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...J(e[0].dims,n)]}),getShaderSource:d}},ec=e=>{Yp(e.inputs),e.compute(Jp(e.inputs),{inputs:[0]})}}),tc,rc,ic,Ym=U(()=>{te(),re(),ne(),tc=(e,t,r,i,n)=>{let s=Y("output_data",n,r.length,4),a=N("a_data",t[1].dataType,t[1].dims.length,4),u=N("b_data",t[2].dataType,t[2].dims.length,4),l=N("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,g,y)=>`select(${g}, ${h}, ${y})`;if(!i)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
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
            ${g}[${y}] = ${_}(${c(b,S,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},rc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,s=!(O.areEqual(t,r)&&O.areEqual(r,i)),a=t,u=O.size(t);if(s){let d=Gt.calcShape(Gt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,u=O.size(a)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>tc(d,e,a,s,n),getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...J(i,t,r,a)]})}},ic=e=>{e.compute(rc(e.inputs))}}),nc,Qm=U(()=>{cm(),ji(),hm(),fm(),mm(),gm(),ym(),vm(),Sm(),km(),Tm(),Im(),Em(),zm(),Cm(),Am(),Om(),Rm(),Mm(),Bm(),Nm(),Dm(),Um(),Pm(),Lm(),gd(),qm(),Wm(),Vm(),Gm(),Hm(),Gi(),Fm(),Td(),jm(),Km(),Xm(),xd(),Zm(),ht(),Yi(),Ym(),nc=new Map([["Abs",[Uo]],["Acos",[Po]],["Acosh",[Lo]],["Add",[Iu]],["ArgMax",[xo,Fi]],["ArgMin",[vo,Fi]],["Asin",[qo]],["Asinh",[Wo]],["Atan",[Vo]],["Atanh",[Go]],["Attention",[zo]],["AveragePool",[rp,tp]],["BatchNormalization",[Ro]],["BiasAdd",[No]],["BiasSplitGelu",[Su]],["Cast",[Fo,Ho]],["Ceil",[Xo]],["Clip",[Ko]],["Concat",[qu,Wu]],["Conv",[pn,ln]],["ConvTranspose",[ml,cl]],["Cos",[Zo]],["Cosh",[Yo]],["CumSum",[yl,_l]],["DepthToSpace",[vl,xl]],["DequantizeLinear",[pp,cp]],["Div",[Eu]],["Einsum",[zl,Cl]],["Elu",[Qo,ir]],["Equal",[zu]],["Erf",[Jo]],["Exp",[eu]],["Expand",[Ml]],["FastGelu",[Nl]],["Floor",[tu]],["FusedConv",[pn,ln]],["Gather",[Ll,Pl]],["GatherElements",[Yl,Zl]],["GatherBlockQuantized",[Fl,jl]],["GatherND",[Wl,Vl]],["Gelu",[ru]],["Gemm",[td,ed]],["GlobalAveragePool",[np,ip]],["GlobalMaxPool",[up,op]],["Greater",[Ru]],["GreaterOrEqual",[Bu]],["GridSample",[dd,pd]],["GroupQueryAttention",[Cd]],["HardSigmoid",[du,lu]],["InstanceNormalization",[Rd]],["LayerNormalization",[Nd]],["LeakyRelu",[iu,ir]],["Less",[Mu]],["LessOrEqual",[Nu]],["Log",[_u]],["MatMul",[Ud]],["MatMulNBits",[Wd,Vd]],["MaxPool",[ap,sp]],["Mul",[Cu]],["MultiHeadAttention",[md,hd]],["Neg",[au]],["Not",[nu]],["Pad",[Qd]],["Pow",[Au]],["QuickGelu",[$u,ir]],["Range",[mp]],["Reciprocal",[su]],["ReduceMin",[yo]],["ReduceMean",[co]],["ReduceMax",[go]],["ReduceSum",[bo]],["ReduceProd",[_o]],["ReduceL1",[ho]],["ReduceL2",[fo]],["ReduceLogSum",[$o]],["ReduceLogSumExp",[mo]],["ReduceSumSquare",[wo]],["Relu",[ou]],["Resize",[Np,Dp]],["RotaryEmbedding",[kd]],["ScatterND",[bp,_p]],["Sigmoid",[uu]],["Sin",[pu]],["Sinh",[cu]],["Slice",[Hp,Fp]],["SkipLayerNormalization",[Lp]],["Split",[$d,vd]],["Sqrt",[hu]],["Softmax",[Xp,Zp]],["Sub",[Ou]],["Tan",[fu]],["Tanh",[mu]],["ThresholdedRelu",[yu,ir]],["Tile",[ec]],["Transpose",[Os,Rs]],["Where",[ic]]])}),ac,Jm=U(()=>{Le(),st(),ne(),ac=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){Qe(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});n&&u.push({binding:u.length,resource:n});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(e.programInfo.name)}dispose(){}build(e,t){Qe(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=Ts(t,this.backend.device.limits),s=e.getShaderSource(n),a=`${i.join(`
`)}
${n.additionalImplementations}
${s}`,u=r.createShaderModule({code:a,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ge(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let s=t*r*i,a=Math.ceil(Math.sqrt(s));if(a>n){if(a=Math.ceil(Math.cbrt(s)),a>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),sc={};Wt(sc,{WebGpuBackend:()=>dc});var oc,uc,lc,dc,eg=U(()=>{Le(),te(),st(),cs(),dm(),Qm(),Jm(),oc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let s=e[i].dims.length;r.push(`${n};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${n};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},uc=(e,t,r)=>{var n,s;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${oc(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},lc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},dc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=u=>t.features.has(u)&&r.push(u)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new lc(a),this.gpuDataManager=vs(this),this.programManager=new ac(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ii(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Qe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let s=r[n],a=s.kernelId,u=this.kernels.get(a),l=u.kernelType,d=u.kernelName,c=s.programName,h=s.inputTensorViews,g=s.outputTensorViews,y=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),S=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:at(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:at(v.dataType)})),kernelId:a,kernelType:l,kernelName:d,programName:c,startTime:b,endTime:S});else{let v="";h.forEach((T,k)=>{v+=`input[${k}]: [${T.dims}] | ${at(T.dataType)}, `});let w="";g.forEach((T,k)=>{w+=`output[${k}]: [${T.dims}] | ${at(T.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${d}|${c}" ${v}${w}start time: ${b} ns, execution time: ${S-b} ns`)}$r("GPU",`${c}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Ge()}run(e,t,r,i,n,s){Qe(e.name);let a=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);a.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,T)=>T):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=s)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let T=c[w]===-1,k=c[w]===-2,E=T||k?n(u[w].dataType,u[w].dims):i(c[w],u[w].dataType,u[w].dims);if(h.push(E),E.data===0)continue;let z=this.gpuDataManager.get(E.data);if(!z)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(z),k){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(z)}g.push(z)}if(a.length!==t.length||g.length!==h.length){if(g.length===0)return Ge(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,T=[];d.forEach(A=>{let $=typeof A.data=="number"?[A.data]:A.data;if($.length===0)return;let M=A.type===10?2:4,D,G;A.type===10?(G=$.length>4?16:$.length>2?8:$.length*M,D=$.length>4?16:M*$.length):(G=$.length<=2?$.length*M:16,D=16),w=Math.ceil(w/G)*G,T.push(w);let F=A.type===10?8:4;w+=$.length>4?Math.ceil($.length/F)*D:$.length*M});let k=16;w=Math.ceil(w/k)*k;let E=new ArrayBuffer(w);d.forEach((A,$)=>{let M=T[$],D=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,M,D.length).set(D);else if(A.type===12)new Uint32Array(E,M,D.length).set(D);else if(A.type===10)new Uint16Array(E,M,D.length).set(D);else if(A.type===1)new Float32Array(E,M,D.length).set(D);else throw new Error(`Unsupported uniform type: ${at(A.type)}`)});let z=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,E,0,w),this.gpuDataManager.release(z.id),y={offset:0,size:w,buffer:z.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,S=uc(e,t,b),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(S,v),de("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let T=d[w],k=T.type,E=typeof T.data=="number"?1:T.data.length,[z,A]=v.uniformVariablesInfo[w];if(k!==z||E!==A)throw new Error(`Uniform variable ${w} mismatch: expect type ${z} with size ${A}, got type ${k} with size ${E} in program "${v.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,a,g,_,y),Ge(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=nc.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,s=i.kernelName,a=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let s=n.get(t),a=this.gpuDataManager.registerExternalBuffer(r,i,s);return n.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Pi(this,e,t);return Ei(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(s.computePipeline),n.setBindGroup(0,s.bindGroup),n.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),pc={};Wt(pc,{init:()=>hc});var Pr,cc,hc,tg=U(()=>{te(),st(),re(),lm(),Pr=class Lf{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Lf(this.module,this.dataType,this.data,t)}},cc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,s));let a=Number(e.getValue(i*n++,s));this.outputCount=Number(e.getValue(i*n++,s)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,s));let u=[];for(let l=0;l<a;l++){let d=Number(e.getValue(i*n++,s)),c=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,s)),g=[];for(let y=0;y<h;y++)g.push(Number(e.getValue(i*n++,s)));u.push(new Pr(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(u,l,d)=>new Pr(this.module,l,this.output(u,d),d),s=(u,l)=>{let d=Et(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Pr(this.module,u,c,l)};return this.backend.run(e,r,i,n,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,n);for(let a=0;a<t.length;a++)this.module.setValue(s+i*(a+1),t[a],n);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},hc=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(eg(),Zt(sc)).WebGpuBackend,a=new s;await a.initialize(r,i),n("webgpu",[a,u=>a.alloc(Number(u)),u=>a.free(u),(u,l,d,c=!1)=>{if(c)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));a.upload(Number(l),h)}},async(u,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await a.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>a.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>a.releaseKernel(u),(u,l,d,c)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new cc(t,a,Number(l));return a.computeKernel(Number(u),h,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new _s(r);n("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,u,l,d,c)=>s.ensureTensor(a,u,l,d,c),(a,u)=>{s.uploadTensor(a,u)},async(a,u)=>s.downloadTensor(a,u),(a,u)=>s.registerMLContext(a,u),!!r.trace])}}}),fc,Rn,Mn,ft,mc,Bn,Lr,Nn,Dn,Un,Pn,Ln,qn,gc=U(()=>{Le(),sm(),om(),te(),kt(),vi(),rs(),fc=(e,t)=>{be()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},Rn=async e=>{fc(e.wasm.numThreads,Tr(e.logLevel))},Mn=async(e,t)=>{var i,n;(n=(i=be()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(tg(),Zt(pc)).init;t==="webgpu"&&await s("webgpu",be(),e,r),t==="webnn"&&await s("webnn",be(),e)}},ft=new Map,mc=e=>{let t=be(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&me("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(n,s)),Number(t.getValue(n+i,s))]}finally{t.stackRestore(r)}},Bn=(e,t)=>{let r=be(),i=r.stackSave(),n=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&me("Can't get session input/output metadata.");let u=Number(r.getValue(a,"*"));n=Number(r.getValue(a+s,"*"));let l=r.HEAP32[n/4];if(l===0)return[u,0];let d=r.HEAPU32[n/4+1],c=[];for(let h=0;h<d;h++){let g=Number(r.getValue(n+8+h*s,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(h+d)*s,"*")))}return[u,l,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Lr=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Nn=async(e,t)=>{var h,g,y,_;let r,i,n=be();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Lr(e);let s=0,a=0,u=0,l=[],d=[],c=[];try{if([a,l]=await ts(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let $=[];for(let M of t.externalData){let D=typeof M=="string"?M:M.path;$.push(Ti(typeof M=="string"?M:M.data).then(G=>{n.mountExternalData(D,G)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof $!="string"){let M=$,D=M==null?void 0:M.context,G=M==null?void 0:M.gpuDevice,F=M==null?void 0:M.deviceType,j=M==null?void 0:M.powerPreference;D?n.currentContext=D:G?n.currentContext=await n.webnnCreateMLContext(G):n.currentContext=await n.webnnCreateMLContext({deviceType:F,powerPreference:j})}else n.currentContext=await n.webnnCreateMLContext();break}s=await n._OrtCreateSession(r,i,a),(h=n.webgpuOnCreateSession)==null||h.call(n,s),s===0&&me("Can't create a session."),(g=n.jsepOnCreateSession)==null||g.call(n),n.currentContext&&(n.webnnRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[b,S]=mc(s),v=!!(t!=null&&t.enableGraphCapture),w=[],T=[],k=[],E=[],z=[];for(let $=0;$<b;$++){let[M,D,G]=Bn(s,$);M===0&&me("Can't get an input name."),d.push(M);let F=n.UTF8ToString(M);w.push(F),k.push(D===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:at(D),shape:G})}for(let $=0;$<S;$++){let[M,D,G]=Bn(s,$+b);M===0&&me("Can't get an output name."),c.push(M);let F=n.UTF8ToString(M);T.push(F),E.push(D===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:at(D),shape:G});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){z.push("gpu-buffer");continue}let j=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[F])??"cpu",R=n.webnnIsGraphOutput;if(j==="cpu"&&R&&R(s,F)){z.push("ml-tensor-cpu-output");continue}if(j!=="cpu"&&j!=="cpu-pinned"&&j!=="gpu-buffer"&&j!=="ml-tensor")throw new Error(`Not supported preferred output location: ${j}.`);if(v&&j!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${j}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);z.push(j)}}let A=null;return z.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(u=n._OrtCreateBinding(s),u===0&&me("Can't create IO binding."),A={handle:u,outputPreferredLocations:z,outputPreferredLocationsEncoded:z.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>ki($))}),ft.set(s,[s,d,c,A,v,!1]),[s,w,T,k,E]}catch(b){throw d.forEach(S=>n._OrtFree(S)),c.forEach(S=>n._OrtFree(S)),u!==0&&n._OrtReleaseBinding(u)!==0&&me("Can't release IO binding."),s!==0&&n._OrtReleaseSession(s)!==0&&me("Can't release session."),b}finally{n._free(r),a!==0&&n._OrtReleaseSessionOptions(a)!==0&&me("Can't release session options."),l.forEach(b=>n._free(b)),(_=n.unmountExternalData)==null||_.call(n)}},Dn=e=>{var l,d,c;let t=be(),r=ft.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,s,a,u]=r;a&&(u&&t._OrtClearBoundOutputs(a.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&me("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),n.forEach(h=>t._OrtFree(h)),s.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&me("Can't release session."),ft.delete(e)},Un=async(e,t,r,i,n,s,a=!1)=>{if(!e){t.push(0);return}let u=be(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],g=h,y,_;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let v=e[2].gpuBuffer;_=Et(It(d),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(i,s,v,_)}}else if(h==="ml-tensor"){let v=e[2].mlTensor;_=Et(It(d),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(i,v,It(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,y=u._malloc(_),r.push(y);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(y+w*l,He(v[w],r),"*")}}else{let w=u.webnnIsGraphInput,T=u.webnnIsGraphOutput;if(d!=="string"&&w&&T){let k=u.UTF8ToString(n);if(w(i,k)||T(i,k)){let E=It(d);_=Et(E,c),g="ml-tensor";let z=u.webnnCreateTemporaryTensor,A=u.webnnUploadTensor;if(!z||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await z(i,E,c);A($,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=$}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let b=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((w,T)=>u.setValue(S+T*l,w,l===4?"i32":"i64"));let v=u._OrtCreateTensor(It(d),y,_,S,c.length,ki(g));v===0&&me(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(v)}finally{u.stackRestore(b)}},Pn=async(e,t,r,i,n,s)=>{var F,j,R,K;let a=be(),u=a.PTR_SIZE,l=ft.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],g=l[3],y=l[4],_=l[5],b=t.length,S=i.length,v=0,w=[],T=[],k=[],E=[],z=[],A=a.stackSave(),$=a.stackAlloc(b*u),M=a.stackAlloc(b*u),D=a.stackAlloc(S*u),G=a.stackAlloc(S*u);try{[v,w]=Za(s),xt("wasm prepareInputOutputTensor");for(let W=0;W<b;W++)await Un(r[W],T,E,e,c[t[W]],t[W],y);for(let W=0;W<S;W++)await Un(n[W],k,E,e,h[i[W]],b+i[W],y);St("wasm prepareInputOutputTensor");for(let W=0;W<b;W++)a.setValue($+W*u,T[W],"*"),a.setValue(M+W*u,c[t[W]],"*");for(let W=0;W<S;W++)a.setValue(D+W*u,k[W],"*"),a.setValue(G+W*u,h[i[W]],"*");if(g&&!_){let{handle:W,outputPreferredLocations:ue,outputPreferredLocationsEncoded:P}=g;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);xt("wasm bindInputsOutputs");for(let V=0;V<b;V++){let Z=t[V];await a._OrtBindInput(W,c[Z],T[V])!==0&&me(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<S;V++){let Z=i[V];(F=n[V])!=null&&F[3]?(z.push(k[V]),a._OrtBindOutput(W,h[Z],k[V],0)!==0&&me(`Can't bind pre-allocated output[${V}] for session=${e}.`)):a._OrtBindOutput(W,h[Z],0,P[Z])!==0&&me(`Can't bind output[${V}] to ${ue[V]} for session=${e}.`)}St("wasm bindInputsOutputs"),ft.set(e,[d,c,h,g,y,!0])}(j=a.jsepOnRunStart)==null||j.call(a,d),(R=a.webnnOnRunStart)==null||R.call(a,d);let X;g?X=await a._OrtRunWithBinding(d,g.handle,S,D,v):X=await a._OrtRun(d,M,$,b,G,S,D,v),X!==0&&me("failed to call OrtRun().");let ee=[],fe=[];xt("wasm ProcessOutputTensor");for(let W=0;W<S;W++){let ue=Number(a.getValue(D+W*u,"*"));if(ue===k[W]||z.includes(k[W])){ee.push(n[W]),ue!==k[W]&&a._OrtReleaseTensor(ue)!==0&&me("Can't release tensor.");continue}let P=a.stackSave(),V=a.stackAlloc(4*u),Z=!1,L,ge=0;try{a._OrtGetTensorData(ue,V,V+u,V+2*u,V+3*u)!==0&&me(`Can't access output tensor data on index ${W}.`);let qe=u===4?"i32":"i64",Se=Number(a.getValue(V,qe));ge=a.getValue(V+u,"*");let Oe=a.getValue(V+u*2,"*"),Re=Number(a.getValue(V+u*3,qe)),Ue=[];for(let we=0;we<Re;we++)Ue.push(Number(a.getValue(Oe+we*u,qe)));a._OrtFree(Oe)!==0&&me("Can't free memory for tensor dims.");let Me=Ue.reduce((we,ie)=>we*ie,1);L=at(Se);let gt=g==null?void 0:g.outputPreferredLocations[i[W]];if(L==="string"){if(gt==="gpu-buffer"||gt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let ie=0;ie<Me;ie++){let Pe=a.getValue(ge+ie*u,"*"),Hr=a.getValue(ge+(ie+1)*u,"*"),fr=ie===Me-1?void 0:Hr-Pe;we.push(a.UTF8ToString(Pe,fr))}ee.push([L,Ue,we,"cpu"])}else if(gt==="gpu-buffer"&&Me>0){let we=a.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=we(ge),Pe=Et(Se,Me);if(Pe===void 0||!xi(L))throw new Error(`Unsupported data type: ${L}`);Z=!0,ee.push([L,Ue,{gpuBuffer:ie,download:a.jsepCreateDownloader(ie,Pe,L),dispose:()=>{a._OrtReleaseTensor(ue)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(gt==="ml-tensor"&&Me>0){let we=a.webnnEnsureTensor,ie=a.webnnIsGraphInputOutputTypeSupported;if(!we||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Et(Se,Me)===void 0||!Si(L))throw new Error(`Unsupported data type: ${L}`);if(!ie(e,L,!1))throw new Error(`preferredLocation "ml-tensor" for ${L} output is not supported by current WebNN Context.`);let Pe=await we(e,ge,Se,Ue,!1);Z=!0,ee.push([L,Ue,{mlTensor:Pe,download:a.webnnCreateMLTensorDownloader(ge,L),dispose:()=>{a.webnnReleaseTensorId(ge),a._OrtReleaseTensor(ue)}},"ml-tensor"])}else if(gt==="ml-tensor-cpu-output"&&Me>0){let we=a.webnnCreateMLTensorDownloader(ge,L)(),ie=ee.length;Z=!0,fe.push((async()=>{let Pe=[ie,await we];return a.webnnReleaseTensorId(ge),a._OrtReleaseTensor(ue),Pe})()),ee.push([L,Ue,[],"cpu"])}else{let we=kr(L),ie=new we(Me);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(a.HEAPU8.subarray(ge,ge+ie.byteLength)),ee.push([L,Ue,ie,"cpu"])}}finally{a.stackRestore(P),L==="string"&&ge&&a._free(ge),Z||a._OrtReleaseTensor(ue)}}g&&!y&&(a._OrtClearBoundOutputs(g.handle)!==0&&me("Can't clear bound outputs."),ft.set(e,[d,c,h,g,y,!1]));for(let[W,ue]of await Promise.all(fe))ee[W][2]=ue;return St("wasm ProcessOutputTensor"),ee}finally{(K=a.webnnOnRunEnd)==null||K.call(a,d),a.stackRestore(A),T.forEach(X=>a._OrtReleaseTensor(X)),k.forEach(X=>a._OrtReleaseTensor(X)),E.forEach(X=>a._free(X)),v!==0&&a._OrtReleaseRunOptions(v),w.forEach(X=>a._free(X))}},Ln=e=>{let t=be(),r=ft.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&me("Can't get an profile file name."),t._OrtFree(n)},qn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),mt,Ae,jt,dr,pr,qr,Wn,Wr,Bt,Nt,yc,_c,bc,wc,$c,vc,xc,Sc,kc=U(()=>{Le(),gc(),kt(),_i(),mt=()=>!!_e.wasm.proxy&&typeof document<"u",jt=!1,dr=!1,pr=!1,Wr=new Map,Bt=(e,t)=>{let r=Wr.get(e);r?r.push(t):Wr.set(e,[t])},Nt=()=>{if(jt||!dr||pr||!Ae)throw new Error("worker not ready")},yc=e=>{switch(e.data.type){case"init-wasm":jt=!1,e.data.err?(pr=!0,Wn[1](e.data.err)):(dr=!0,Wn[0]()),qr&&(URL.revokeObjectURL(qr),qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Wr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},_c=async()=>{if(!dr){if(jt)throw new Error("multiple calls to 'initWasm()' detected.");if(pr)throw new Error("previous call to 'initWasm()' failed.");if(jt=!0,mt())return new Promise((e,t)=>{Ae==null||Ae.terminate(),Ha().then(([r,i])=>{try{Ae=i,Ae.onerror=s=>t(s),Ae.onmessage=yc,Wn=[e,t];let n={type:"init-wasm",in:_e};!n.in.wasm.wasmPaths&&(r||fi)&&(n.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),Ae.postMessage(n),qr=r}catch(n){t(n)}},t)});try{await $i(_e.wasm),await Rn(_e),dr=!0}catch(e){throw pr=!0,e}finally{jt=!1}}},bc=async e=>{if(mt())return Nt(),new Promise((t,r)=>{Bt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:_e}};Ae.postMessage(i)});await Mn(_e,e)},wc=async e=>mt()?(Nt(),new Promise((t,r)=>{Bt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ae.postMessage(i,[e.buffer])})):Lr(e),$c=async(e,t)=>{if(mt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Nt(),new Promise((r,i)=>{Bt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ae.postMessage(n,s)})}else return Nn(e,t)},vc=async e=>{if(mt())return Nt(),new Promise((t,r)=>{Bt("release",[t,r]);let i={type:"release",in:e};Ae.postMessage(i)});Dn(e)},xc=async(e,t,r,i,n,s)=>{if(mt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Nt(),new Promise((a,u)=>{Bt("run",[a,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};Ae.postMessage(d,qn(l))})}else return Pn(e,t,r,i,n,s)},Sc=async e=>{if(mt())return Nt(),new Promise((t,r)=>{Bt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ae.postMessage(i)});Ln(e)}}),Vn,Tc,Ic,rg=U(()=>{Le(),kc(),te(),di(),rs(),Vn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Tc=e=>{switch(e[3]){case"cpu":return new Ve(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!xi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Ve.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Si(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Ve.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ic=class{async fetchModelAndCopyToWasmMemory(e){return wc(await Ti(e))}async loadModel(e,t){Qe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await $c(r,t),Ge()}async dispose(){return vc(this.sessionId)}async run(e,t,r){Qe();let i=[],n=[];Object.entries(e).forEach(h=>{let g=h[0],y=h[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),n.push(_)});let s=[],a=[];Object.entries(t).forEach(h=>{let g=h[0],y=h[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);s.push(y),a.push(_)});let u=i.map((h,g)=>Vn(h,()=>`input "${this.inputNames[n[g]]}"`)),l=s.map((h,g)=>h?Vn(h,()=>`output "${this.outputNames[a[g]]}"`):null),d=await xc(this.sessionId,n,u,a,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[a[h]]]=s[h]??Tc(d[h]);return Ge(),c}startProfiling(){}endProfiling(){Sc(this.sessionId)}}}),Ec={};Wt(Ec,{OnnxruntimeWebAssemblyBackend:()=>Hn,initializeFlags:()=>Gn,wasmBackend:()=>zc});var Gn,Hn,zc,ig=U(()=>{Le(),kc(),rg(),Gn=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?Wf("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Hn=class{async init(e){Gn(),await _c(),await bc(e)}async createInferenceSessionHandler(e,t){let r=new Ic;return await r.loadModel(e,t),r}},zc=new Hn});Le(),Le(),Le();var ng="1.27.0";{let e=(ig(),Zt(Ec)).wasmBackend;Vt("webgpu",e,5),Vt("webnn",e,5),Vt("cpu",e,10),Vt("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:ng,enumerable:!0});/**
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
 */const ag=114;function sg(e,t,r){const i=Math.min(r/e,r/t),n=Math.round(e*i),s=Math.round(t*i);return{scale:i,padX:Math.floor((r-n)/2),padY:Math.floor((r-s)/2),resizedWidth:n,resizedHeight:s}}function og(e,t,r){const{width:i,height:n,channels:s,data:a}=e,u=new Uint8Array(t*r*3),l=i/t,d=n/r;for(let c=0;c<r;c++){const h=(c+.5)*d-.5,g=Math.max(0,Math.min(n-1,Math.floor(h))),y=Math.min(n-1,g+1),_=Math.max(0,Math.min(1,h-g));for(let b=0;b<t;b++){const S=(b+.5)*l-.5,v=Math.max(0,Math.min(i-1,Math.floor(S))),w=Math.min(i-1,v+1),T=Math.max(0,Math.min(1,S-v)),k=(g*i+v)*s,E=(g*i+w)*s,z=(y*i+v)*s,A=(y*i+w)*s,$=(c*t+b)*3;for(let M=0;M<3;M++){const D=a[k+M]*(1-T)+a[E+M]*T,G=a[z+M]*(1-T)+a[A+M]*T;u[$+M]=Math.min(255,Math.max(0,Math.round(D*(1-_)+G*_)))}}}return u}function ug(e,t){const r=sg(e.width,e.height,t),i=og(e,r.resizedWidth,r.resizedHeight),n=t*t,s=new Float32Array(3*n).fill(ag/255);for(let a=0;a<r.resizedHeight;a++){const u=(a+r.padY)*t+r.padX,l=a*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const c=(l+d)*3,h=u+d;s[h]=i[c]/255,s[n+h]=i[c+1]/255,s[2*n+h]=i[c+2]/255}}return{tensor:s,params:r}}function lg(e,t,r,i){const n=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const u=e[a*6],l=e[a*6+1],d=e[a*6+2],c=e[a*6+3],h=e[a*6+4],g=e[a*6+5];if(h<r)continue;const y=Math.round(g);if(y<0||y>=i)continue;const _=(u-t.padX)/t.scale,b=(l-t.padY)/t.scale,S=(d-t.padX)/t.scale,v=(c-t.padY)/t.scale;n.push({classIndex:y,confidence:h,box:[Math.trunc(_),Math.trunc(b),Math.trunc(S-_),Math.trunc(v-b)],boxFloat:[_,b,S-_,v-b]})}return n}function cr(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Cc(e){if(e.length===0)return Number.NaN;const t=[...e].sort((i,n)=>i-n),r=Math.floor(t.length/2);return t.length%2===1?t[r]:(t[r-1]+t[r])/2}const dg=.6,pg=.8;function Ac(e,t,r){const i=[],n=Math.floor(e.length/6);for(let s=0;s<n;s++){if(e[s*6+4]<r)continue;const u=(e[s*6]-t.padX)/t.scale,l=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,c=(e[s*6+3]-t.padY)/t.scale,h=cr((u+d)/2),g=cr((l+c)/2),y=cr((d-u+(c-l))/4);y>=1&&i.push({cx:h,cy:g,r:y})}return i}function cg(e){const t=[];for(const r of[...e].sort((i,n)=>i.r-n.r)){const i=(dg*r.r)**2;t.every(n=>(r.cx-n.cx)**2+(r.cy-n.cy)**2>i)&&t.push(r)}return t}function hg(e){const t=[];for(const r of[...e].sort((i,n)=>n.r-i.r))t.every(i=>Math.hypot(r.cx-i.cx,r.cy-i.cy)>=pg*(r.r+i.r))&&t.push(r);return t}function fg(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Cc(e.map(r=>r.r))*1.5));return[...e].sort((r,i)=>{const n=Math.floor(r.cy/t),s=Math.floor(i.cy/t);return n!==s?n-s:r.cx-i.cx})}function Oc(e,t,r){const i=Ac(e,t,r);return i.length===0?[]:fg(hg(cg(i)))}function mg(e,t,r){return Ac(e,t,r)}function Rc(e,t,r){const i=[],n=Math.floor(e.length/6);for(let s=0;s<n;s++)e[s*6+4]<r||i.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return i}const Mc=["brown","grey","blue","green","yellow","red","purple"],gg={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Bc(e,t,r){return lg(e,t,r,Mc.length).map(i=>{const n=Mc[i.classIndex];return{color:n,family:gg[n],box:i.box,confidence:i.confidence}})}const ut={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.7}};function Vr(e,t,r){const i=Math.max(e,t,r),n=Math.min(e,t,r),s=i-n,a=i===0?0:Math.round(255*s/i);if(s===0)return{h:0,s:a,v:i};let u;return i===e?u=60*(t-r)/s:i===t?u=120+60*(r-e)/s:u=240+60*(e-t)/s,u<0&&(u+=360),{h:Math.round(u/2),s:a,v:i}}const yg=.42,_g=22,bg=43,wg=120,$g=1.5,vg=.72,xg=110,Nc=3;function hr(e,t,r){const{width:i,height:n,channels:s,data:a}=e;if(i<4||n<4)return 0;const u=Math.floor(i/2),l=Math.floor(n/2),d=Math.trunc(Math.min(i,n)*yg);if(d<1)return 0;let c=0;for(let h=0;h<n;h++)for(let g=0;g<i;g++){if((g-u)**2+(h-l)**2>d*d)continue;const y=(h*i+g)*s,_=a[y],b=a[y+1],S=a[y+2];!t&&_>=250&&b>=250&&S>=250||(r(_,b,S),c+=1)}return c}function Sg(e){let t=0,r=0,i=0,n=hr(e,!1,(s,a,u)=>{const l=Vr(s,a,u);t+=l.h,r+=l.s,i+=l.v});return n===0&&(n=hr(e,!0,(s,a,u)=>{const l=Vr(s,a,u);t+=l.h,r+=l.s,i+=l.v})),n===0?null:{h:t/n,s:r/n,v:i/n}}function kg(e){let t=0,r=0,i=hr(e,!1,(s,a)=>{t+=s,r+=a});if(i===0&&(i=hr(e,!0,(s,a)=>{t+=s,r+=a})),i===0)return null;const n=r/i;return n<=1e-6?null:t/i/n}function Tg(e){let t=0;const r=hr(e,!0,(i,n,s)=>{t+=Vr(i,n,s).s});return r===0?null:t/r}function Ig(e){const t=Sg(e);if(t===null||t.s<=_g)return 1;if(t.s>=wg){const r=kg(e);return r!==null&&r>=$g?6:3}return t.s>=bg?3:6}function Eg(e,t){const r=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return r;const i=e.map(a=>a.r).sort((a,u)=>a-u);if(i[0]<=0||!(i[1]>=i[0]*1.12&&i[2]>=i[1]*1.12))return r;const n=[0,1,2].sort((a,u)=>e[a].r-e[u].r),s=new Map([[n[0],1],[n[1],3],[n[2],6]]);return[0,1,2].map(a=>s.get(a))}function zg(e,t){const r=[...t];if(e.length<Nc||t.length!==e.length)return r;const i=e.map(a=>Tg(a)),n=i.filter(a=>a!==null);if(n.length<Nc)return r;const s=Cc(n);return s<=0||i.forEach((a,u)=>{a!==null&&r[u]!==1&&a<vg*s&&a<xg&&(r[u]=1)}),r}function Dc(e,t){const{cx:r,cy:i,r:n}=t,s=Math.max(0,r-n),a=Math.max(0,i-n),u=Math.min(e.width,r+n),l=Math.min(e.height,i+n),d=Math.max(0,u-s),c=Math.max(0,l-a),h=new Uint8Array(d*c*3);for(let g=0;g<c;g++)for(let y=0;y<d;y++){const _=(g*d+y)*3;if((y+s-r)**2+(g+a-i)**2<=n*n){const S=((g+a)*e.width+(y+s))*e.channels;h[_]=e.data[S],h[_+1]=e.data[S+1],h[_+2]=e.data[S+2]}else h[_]=255,h[_+1]=255,h[_+2]=255}return{width:d,height:c,channels:3,data:h}}function Cg(e,t){const r=t.map(s=>Dc(e,s)),i=r.map(s=>Ig(s)),n=Eg(t,i);return zg(r,n)}function Ag(e){const{width:t,height:r,channels:i,data:n}=e,s=new Uint8Array(t*r);for(let a=0,u=0;a<s.length;a++,u+=i)s[a]=n[u]*4899+n[u+1]*9617+n[u+2]*1868+8192>>14;return{width:t,height:r,data:s}}function Og(e,t,r){const i=new Uint8Array(t*r),n=e.width/t,s=e.height/r;for(let a=0;a<r;a++){const u=a*s,l=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const c=d*n,h=Math.min((d+1)*n,e.width);let g=0,y=0;for(let _=Math.floor(u);_<l;_++){const b=Math.min(_+1,l)-Math.max(_,u);if(!(b<=0))for(let S=Math.floor(c);S<h;S++){const v=Math.min(S+1,h)-Math.max(S,c);v<=0||(g+=e.data[_*e.width+S]*v*b,y+=v*b)}}i[a*t+d]=Math.min(255,Math.max(0,cr(g/y)))}}return{width:t,height:r,data:i}}function Rg(e){const t=new Array(256).fill(0);for(const l of e.data)t[l]+=1;const r=e.data.length;let i=0;for(;i<256&&t[i]===0;)i+=1;const n=new Uint8Array(r);if(i>=255||t[i]===r)return n.fill(i<256?i:0),{width:e.width,height:e.height,data:n};const s=255/(r-t[i]),a=new Uint8Array(256);let u=0;for(let l=i+1;l<256;l++)u+=t[l],a[l]=Math.min(255,Math.max(0,cr(u*s)));for(let l=0;l<r;l++)n[l]=a[e.data[l]];return{width:e.width,height:e.height,data:n}}function Mg(e,t,r){const i=e.width,n=new Float32Array(i*i),s=i/2,a=-t*Math.PI/180,u=Math.cos(a),l=Math.sin(a);for(let d=0;d<i;d++)for(let c=0;c<i;c++){const h=c-s,g=d-s,y=u*h-l*g+s,_=l*h+u*g+s,b=Math.floor(y),S=Math.floor(_),v=y-b,w=_-S,T=(z,A)=>z>=0&&z<i&&A>=0&&A<i?e.data[A*i+z]:r,k=T(b,S)*(1-v)+T(b+1,S)*v,E=T(b,S+1)*(1-v)+T(b+1,S+1)*v;n[d*i+c]=k*(1-w)+E*w}return n}const Uc=128,Bg=.56,Ng=15,Dg=.28,Ug=.58,Pg=70,Lg=50,qg=.12,Wg=.2,Vg=.1,Gg=.17,Pc=.15;function Hg(e){const t=new Map;for(const[r,i]of Object.entries(e.templates)){const n=Uint8Array.from(atob(i),s=>s.charCodeAt(0));n.length===e.size*e.size&&t.set(r,n)}return t}function Lc(e,t){const{width:r,height:i,channels:n,data:s}=e,a=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*.5*t);if(l<1)return e;const d=Math.max(0,a-l),c=Math.max(0,u-l),h=Math.min(r,a+l),g=Math.min(i,u+l),y=h-d,_=g-c,b=new Uint8Array(y*_*n);for(let S=0;S<_;S++){const v=((S+c)*r+d)*n;b.set(s.subarray(v,v+y*n),S*y*n)}return{width:y,height:_,channels:n,data:b}}function Fg(e){const t=Lc(e,Bg),r=Ag(t),i=Og(r,Uc,Uc);return Rg(i)}function jg(e,t){const r=e.length;let i=0,n=0;for(let l=0;l<r;l++)i+=e[l],n+=t[l];i/=r,n/=r;let s=0,a=0,u=0;for(let l=0;l<r;l++){const d=e[l]-i,c=t[l]-n;s+=d*c,a+=d*d,u+=c*c}return s/(Math.sqrt(a*u)+1e-6)}function Kg(e){const t=new Map([["masonry",0],["strategy",0]]),r=Lc(e,Ug),{width:i,height:n,channels:s,data:a}=r,u=i*n||1;let l=0,d=0;for(let g=0;g<i*n;g++){const y=g*s,{h:_,s:b,v:S}=Vr(a[y],a[y+1],a[y+2]);b>=Pg&&S>=Lg&&(_>=95&&_<=130&&(l+=1),(_<=8||_>=170)&&(d+=1))}const c=l/u,h=d/u;return c>=qg&&t.set("masonry",Pc*Math.min(1,c/Wg)),h>=Vg&&t.set("strategy",Pc*Math.min(1,h/Gg)),t}function Xg(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const r=Fg(e);let i=0;for(const d of r.data)i+=d;const n=i/r.data.length,s=[];for(let d=0;d<360;d+=Ng)s.push(Mg(r,d,n));const a=new Map;for(const[d,c]of t){let h=-1/0;for(const g of s){const y=jg(g,c);y>h&&(h=y)}a.set(d,h)}for(const[d,c]of Kg(e))c>0&&a.has(d)&&a.set(d,a.get(d)+c);let u="",l=-1/0;for(const[d,c]of a)c>l&&(u=d,l=c);return[u,l]}const qc="/7wd-scorer/models/";let Wc=!1;const Gr=new Map;function Zg(){var e;Wc||(_e.wasm.wasmPaths="/7wd-scorer/ort/",_e.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Wc=!0)}const Fn=new Set;function Yg(e){Zg();let t=Gr.get(e);return t===void 0&&(t=li.create(`${qc}${ut[e].onnx}`,{executionProviders:Fn.has(e)?["wasm"]:["webgpu","wasm"]}),Gr.set(e,t),t.catch(()=>Gr.delete(e))),t}let jn=null;function Qg(){return jn===null&&(jn=fetch(`${qc}token_templates.json`).then(async e=>e.ok?Hg(await e.json()):new Map).catch(()=>new Map)),jn}async function Vc(e){const t=await createImageBitmap(e);try{const i=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(i===null)throw new Error("OffscreenCanvas 2D context unavailable.");i.drawImage(t,0,0);const{data:n}=i.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:n}}finally{t.close()}}async function Dt(e,t){const r=ut[e],{tensor:i,params:n}=ug(t,r.input),s=async()=>{const a=await Yg(e),u={[a.inputNames[0]]:new Ve("float32",i,[1,3,r.input,r.input])};return{rows:(await a.run(u))[a.outputNames[0]].data,params:n}};try{return await s()}catch(a){if(Fn.has(e))throw a;return Fn.add(e),Gr.delete(e),await s()}}const Jg=6,e0=2,t0=5,r0=2;async function i0(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},r=await Vc(e),i=await Dt("banner",r),n=Bc(i.rows,i.params,ut.banner.conf);if(t.banners=n.length,n.length>=Jg)return{...t,kind:"player",confidence:Math.min(1,n.length/12)};const s=await Dt("laurel",r),a=Rc(s.rows,s.params,ut.laurel.conf);if(t.laurels=a.length,a.length>=e0)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const u=await Dt("coin",r),l=Oc(u.rows,u.params,ut.coin.conf);return t.coins=l.length,l.length>=t0?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=r0?{...t,kind:"board",confidence:.4}:t}function n0(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function a0(e,t,r,i){const n={},s=[],a=[],u=[];let l=0,d=0,c=0,h=0;for(const g of e){h+=1;const y=`${t} photo ${h}/${e.length}`;i(`${y}: reading pixels…`);const _=await Vc(g);i(`${y}: card banners…`);const b=await Dt("banner",_);for(const z of Bc(b.rows,b.params,ut.banner.conf))n[z.family]=(n[z.family]??0)+1,c+=1;i(`${y}: laurels…`);const S=await Dt("laurel",_);for(const[z,A,$,M]of Rc(S.rows,S.params,ut.laurel.conf))s.push({value:null,valueRead:!1,center:[Math.round((z+$)/2),Math.round((A+M)/2)],boundingBox:{x:Math.trunc(z),y:Math.trunc(A),width:Math.trunc($-z),height:Math.trunc(M-A)},confidence:0,excluded:!1});i(`${y}: progress tokens…`);const v=await Dt("token",_),w=await Qg();for(const z of mg(v.rows,v.params,ut.token.conf)){const[A,$]=Xg(Dc(_,z),w);A!==""&&$>=Dg?u.push({id:A,center:[z.cx,z.cy],radius:z.r,confidence:Math.round($*1e4)/1e4}):d+=1}i(`${y}: coins…`);const T=await Dt("coin",_),k=Oc(T.rows,T.params,ut.coin.conf),E=Cg(_,k);k.forEach((z,A)=>{const $=E[A];l+=$,a.push({denomination:$,center:[z.cx,z.cy],radius:z.r,denomSource:"colour"})})}return c>0&&r.push({code:"OVERLAPPING_OBJECTS",message:`${t}: on-device counts cannot yet exclude cards tucked under wonders — verify the per-colour counts.`}),r.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: on-device mode — wonders and guilds are not identified yet: pick them in the review below.`+(d>0?` ${d} token disc(s) found but not identified — pick them too.`:"")}),u.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+u.map(g=>g.id).join(", ")+" — confirm in the review."}),a.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${l} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`}),{...n0(),progressTokens:u,laurels:s,cardVictoryPoints:{value:0,laurelsKept:s.length,laurelsUnread:s.length,complete:s.length===0},cardCounts:{byFamily:n,source:c>0?"yolo":"none",tuckedExcluded:0},coins:{total:l,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function s0(e,t){const r=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],i={left:null,right:null};for(const n of["left","right"]){const s=e[n];s.length>0&&(i[n]=await a0(s,n,r,t))}return e.hasBoard&&r.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:i,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:r}}self.onmessage=e=>{const{id:t,kind:r}=e.data,i=n=>{self.postMessage({id:t,progress:n})};(async()=>{try{const n=r==="classify"?await i0(e.data.file):await s0(e.data.payload,i);self.postMessage({id:t,ok:!0,result:n})}catch(n){self.postMessage({id:t,ok:!1,error:String(n)})}})()}})();
