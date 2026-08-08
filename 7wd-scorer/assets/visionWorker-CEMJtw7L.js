var Cv=Object.defineProperty;var Av=(Ut,Lt,Ln)=>Lt in Ut?Cv(Ut,Lt,{enumerable:!0,configurable:!0,writable:!0,value:Ln}):Ut[Lt]=Ln;var x0=(Ut,Lt,Ln)=>Av(Ut,typeof Lt!="symbol"?Lt+"":Lt,Ln);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ut=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Ln=Object.getOwnPropertyNames,S0=Object.prototype.hasOwnProperty,M0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),Fn=(e,t)=>{for(var n in t)Ut(e,n,{get:t[n],enumerable:!0})},T0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ln(t))!S0.call(e,i)&&i!==n&&Ut(e,i,{get:()=>t[i],enumerable:!(r=Lt(t,i))||r.enumerable});return e},nr=e=>T0(Ut({},"__esModule",{value:!0}),e),rr,Zt,Gn,ks,Cs,As=ee(()=>{rr=new Map,Zt=[],Gn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=rr.get(e);if(r===void 0)rr.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Zt.indexOf(e);i!==-1&&Zt.splice(i,1);for(let a=0;a<Zt.length;a++)if(rr.get(Zt[a]).priority<=n){Zt.splice(a,0,e);return}Zt.push(e)}return}throw new TypeError("not a valid backend")},ks=async e=>{let t=rr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Cs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Zt:n,i,a=[],o=new Set;for(let u of r){let l=await ks(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),I0=ee(()=>{As()}),Rs,E0=ee(()=>{Rs="1.27.0"}),Ei,Je,Os=ee(()=>{E0(),Ei="warning",Je={wasm:{},webgl:{},webgpu:{},versions:{common:Rs},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ei=e}},get logLevel(){return Ei}},Object.defineProperty(Je,"logLevel",{enumerable:!0})}),Fe,k0=ee(()=>{Os(),Fe=Je}),Ns,zs,C0=ee(()=>{Ns=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,c=0,p=h,f=h*2,m=-1;o==="RGBA"?(c=0,p=h,f=h*2,m=h*3):o==="RGB"?(c=0,p=h,f=h*2):o==="RBG"&&(c=0,f=h,p=h*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+M+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},zs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=c,M=c*2,v=-1;s==="RGBA"?(b=0,x=c,M=c*2,v=c*3):s==="RGB"?(b=0,x=c,M=c*2):s==="RBG"&&(b=0,M=c,x=c*2),r=n.createImageData(i,a);for(let T=0;T<a*i;f+=p,m+=p,y+=p,w+=p,T++)r.data[f]=(e.data[b++]-h[0])*l[0],r.data[m]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Ar,Bs,Ps,Ds,Us,Ls,A0=ee(()=>{Ci(),Ar=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,M=-1;s==="RGB"&&(c=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,p+=c,m+=c,f+=c,y+=c)h[w++]=(e[p]+o[0])/a[0],h[b++]=(e[f]+o[1])/a[1],h[x++]=(e[m]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new lt("float32",h,[1,4,n,r]):new lt("float32",h,[1,3,n,r])},Bs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;c.drawImage(e,0,0),o=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=c,t!==void 0){let p=u();p.width=c,p.height=h;let f=l(p);if(f!=null)f.putImageData(e,0,0),o=f.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,f=e.width;return c.drawImage(e,0,0,f,p),o=c.getImageData(0,0,f,p).data,s.height=p,s.width=f,Ar(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let p=u(),f=l(p);if(!e||!f)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Ar(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ar(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Ps=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new lt({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Ds=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Us=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ls=(e,t,n)=>new lt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),yn,ir,ki,Fs,R0=ee(()=>{yn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ir=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ki=!1,Fs=()=>{if(!ki){ki=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(yn.set("int64",BigInt64Array),ir.set(BigInt64Array,"int64")),t&&(yn.set("uint64",BigUint64Array),ir.set(BigUint64Array,"uint64")),r?(yn.set("float16",n),ir.set(n,"float16")):yn.set("float16",Uint16Array)}}}),Gs,Ws,O0=ee(()=>{Ci(),Gs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ws=(e,t)=>{switch(e.location){case"cpu":return new lt(e.type,e.data,t);case"cpu-pinned":return new lt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new lt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new lt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new lt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),lt,Ci=ee(()=>{C0(),A0(),R0(),O0(),lt=class{constructor(e,t,n){Fs();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=yn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=yn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=ir.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Gs(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Bs(e,t)}static fromTexture(e,t){return Ps(e,t)}static fromGpuBuffer(e,t){return Ds(e,t)}static fromMLTensor(e,t){return Us(e,t)}static fromPinnedBuffer(e,t,n){return Ls(e,t,n)}toDataURL(e){return Ns(this,e)}toImageData(e){return zs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ws(this,e)}}}),Ve,qs=ee(()=>{Ci(),Ve=lt}),Rr,Ai,Ct,wt,wn,_n,Vs=ee(()=>{Os(),Rr=(e,t)=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ai=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Rr("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Ct=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||Ai("BEGIN",e)},wt=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||Ai("END",e)},wn=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.time(`ORT::${e}`)},_n=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.timeEnd(`ORT::${e}`)}}),Hs,N0=ee(()=>{As(),qs(),Vs(),Hs=class $0{constructor(t){this.handler=t}async run(t,n,r){Ct(),wn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ve||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ve)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof Ve)&&(l=!0,o=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof Ve?u[l]=h:u[l]=new Ve(h.type,h.data,h.dims)}return _n("InferenceSession.run"),wt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ct(),wn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Cs(o),l=await s.createInferenceSessionHandler(a,u);return _n("InferenceSession.create"),wt(),new $0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),nt,z0=ee(()=>{N0(),nt=Hs}),B0=ee(()=>{}),P0=ee(()=>{}),D0=ee(()=>{}),U0=ee(()=>{}),L0={};Fn(L0,{InferenceSession:()=>nt,TRACE:()=>Rr,TRACE_EVENT_BEGIN:()=>wn,TRACE_EVENT_END:()=>_n,TRACE_FUNC_BEGIN:()=>Ct,TRACE_FUNC_END:()=>wt,Tensor:()=>Ve,env:()=>Fe,registerBackend:()=>Gn});var ht=ee(()=>{I0(),k0(),z0(),qs(),B0(),P0(),Vs(),D0(),U0()}),Ri=ee(()=>{}),js={};Fn(js,{default:()=>Ks});var Oi,Ni,Ks,F0=ee(()=>{var e;kf(),bn(),Li(),Oi="ort-wasm-proxy-worker",Ni=((e=globalThis.self)==null?void 0:e.name)===Oi,Ni&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Wi(r.wasm).then(()=>{eo(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;to(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Zr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ro(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":io(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;oo(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},uo([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":so(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ks=Ni?null:t=>new Worker(t??ct,{type:"module",name:Oi})}),Ys={};Fn(Ys,{default:()=>Zs});async function Xs(e={}){var _0,b0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((_0=self.name)==null?void 0:_0.startsWith("em-pthread"));t.mountExternalData=(d,g)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},I=await d(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let P=await Promise.all(C);if(P=P.filter(j=>j),0<P.length)throw Error(P.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(d,g)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,I,C,P)=>$.registerBuffer(_,I,C,P),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,I,C)=>$.createDownloader(_,I,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,I)=>{$.upload(_,I)}}else if(d==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,I)=>$.createMLTensorDownloader(_,I),t.webnnRegisterMLTensor=(_,I,C,P)=>$.registerMLTensor(_,I,C,P),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,I,C,P,j,re)=>$.registerMLConstant(_,I,C,P,j,t.Xc,re),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let d=g=>(...$)=>{let _=Pt;return $=g(...$),Pt!=_?new Promise((I,C)=>{gs={resolve:I,reject:C}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=d(t[g])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(d,g)=>{throw g},h=self.location.href,c="";if(n||r){try{c=new URL(".",h).href}catch{}r&&(u=d=>{var g=new XMLHttpRequest;return g.open("GET",d,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async d=>{if(k(d))return new Promise(($,_)=>{var I=new XMLHttpRequest;I.open("GET",d,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?$(I.response):_(I.status)},I.onerror=_,I.send(null)});var g=await fetch(d,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),M=console.error.bind(console),v=x,T=M,E=!1,k=d=>d.startsWith("file://");function S(){It.buffer!=N.buffer&&B()}if(i){let d=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let I=[];self.onmessage=C=>I.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of I)d(C);self.onmessage=d};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...P)=>{postMessage({Sc:"callHandler",wd:C,args:P})},C=="print"&&(v=t[C]),C=="printErr"&&(T=t[C]));It=$.Od,B(),f=$.Pd,ie(),Ti()}else if(_==="run"){(function(I){var C=(S(),H)[I+52>>>2>>>0];I=(S(),H)[I+56>>>2>>>0],kg(C,C-I),ve(C)})($.Rc),xs($.Rc,0,0,1,0,0),un(),ps($.Rc),A||(vg(),A=!0);try{vr($.Md,$.bd)}catch(I){if(I!="unwind")throw I}}else $.target!=="setimmediate"&&(_==="checkMailbox"?A&&_i():_&&(T(`worker: received unknown command ${_}`),T($)))}catch(I){throw Sg(),I}};var A=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=d}var N,U,V,L,O,H,Y,Q,ue,W,z,R=!1;function B(){var d=It.buffer;t.HEAP8=N=new Int8Array(d),V=new Int16Array(d),t.HEAPU8=U=new Uint8Array(d),L=new Uint16Array(d),t.HEAP32=O=new Int32Array(d),t.HEAPU32=H=new Uint32Array(d),Y=new Float32Array(d),Q=new Float64Array(d),ue=new BigInt64Array(d),W=new BigUint64Array(d)}function D(){R=!0,i?b():Xt.sb()}function G(d){throw T(d="Aborted("+d+")"),E=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),w==null||w(d),d}function X(){return{a:{ma:V$,gb:q$,g:hi,J:Nt,f:Jm,o:ls,h:pi,ha:Bn,b:fi,T:cs,Ha:Mr,n:F,$:le,Xa:Ee,Da:Ce,Fa:pe,Ya:fe,Va:de,Oa:ge,Ua:xe,ka:We,Ea:Ue,Ba:hn,Wa:zt,Ca:Pe,bb:Ke,ea:gi,wa:Nx,ua:Bx,da:Dx,O:Ux,H:Lx,va:Fx,_:Kx,xa:Yx,Ra:Xx,za:Qx,Ia:Jx,sa:e$,fa:t$,Qa:ps,_a:n$,R:o$,r:d$,c:ds,hb:h$,y:p$,M:f$,D:m$,l:g$,s:og,ib:y$,I:w$,S:_$,j:b$,u:x$,q:$$,k:v$,La:S$,Ma:M$,Na:T$,Ja:cg,Ka:dg,ta:hg,db:E$,ab:C$,v:A$,aa:R$,ga:O$,$a:k$,W:N$,Za:z$,Aa:B$,F:I$,U:P$,la:Si,ya:U$,fb:D$,eb:L$,Sa:gg,Ta:yg,Ga:Xe,V:wg,ja:_g,Pa:bg,ia:xg,kb:Iv,na:$v,lb:Tv,oa:xv,G:hv,e:Y$,t:j$,w:H$,B:av,mb:wv,K:lv,x:Q$,pa:_v,Y:vv,ba:yv,nb:gv,ob:mv,P:ov,qa:fv,pb:pv,N:cv,Z:bv,d:K$,A:Z$,m:X$,jb:Ev,p:ev,z:tv,C:J$,E:nv,L:sv,qb:dv,Q:Sv,ca:uv,X:Mv,rb:iv,ra:rv,i:G$,a:It,cb:Ze}}}async function ie(){function d(_,I){var C=Xt=_.exports;_={};for(let[P,j]of Object.entries(C))typeof j=="function"?(C=r$(j),_[P]=C):_[P]=j;return Xt=_,Xt=(function(){var P=Xt,j=oe=>$e=>oe($e)>>>0,re=oe=>()=>oe()>>>0;return(P=Object.assign({},P)).tb=j(P.tb),P.Xb=re(P.Xb),P.Zb=j(P.Zb),P.lc=j(P.lc),P.mc=re(P.mc),P.qc=j(P.qc),P})(),Kt.push(Xt._b),$g=(_=Xt).tb,vg=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Mi=_.Xb,Dt=t._free=_.Yb,Er=t._malloc=_.Zb,xs=_.ac,Sg=_.bc,Mg=_.cc,Tg=_.dc,$s=_.ec,Ig=_.fc,Eg=_.gc,Me=_.hc,kr=_.ic,kg=_.jc,ve=_.kc,vs=_.lc,Se=_.mc,Cg=_.nc,Ss=_.oc,Ag=_.pc,Rg=_.qc,Og=_.rc,Ms=_.sc,Ng=_.tc,zg=_.uc,Bg=_.vc,Pg=_.wc,Dg=_.xc,Ug=_.yc,Lg=_.zc,Fg=_.Ac,Gg=_.Bc,Wg=_.Cc,qg=_.Dc,Vg=_.Ec,Hg=_.Fc,jg=_.Gc,Kg=_.Hc,Yg=_.Ic,Xg=_.Jc,Zg=_.Kc,Qg=_.Lc,Jg=_.Mc,e0=_.Nc,t0=_.Pc,n0=_.Qc,r0=_.$c,i0=_.ad,a0=_.fd,o0=_.jd,s0=_.kd,u0=_.ld,l0=_.md,c0=_.nd,d0=_.od,h0=_.pd,p0=_.qd,f0=_.vd,m0=_.Td,g0=_.Ud,y0=_.Vd,w0=_.Wd,f=I,Xt}var g,$=X();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(I,C)=>{_(d(I,C))})}):i?d(new WebAssembly.Instance(f,X()),f):(z??(z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var I=z;if(!p&&!k(I))try{var C=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(P){T(`wasm streaming compile failed: ${P}`),T("falling back to ArrayBuffer instantiation")}return(async function(P,j){try{var re=await(async function(oe){if(!p)try{var $e=await s(oe);return new Uint8Array($e)}catch{}if(oe==z&&p)oe=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(P);return await WebAssembly.instantiate(re,j)}catch(oe){T(`failed to asynchronously prepare wasm: ${oe}`),G(oe)}})(I,_)})($),d(g.instance,g.module))}class te{constructor(g){x0(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var ye=d=>{d.terminate(),d.onmessage=()=>{}},Te=[],Be=0,ke=null,ot=d=>{mt.length==0&&(er(),Yt(mt[0]));var g=mt.pop();if(!g)return 6;sn.push(g),gt[d.Rc]=g,g.Rc=d.Rc;var $={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return g.postMessage($,d.rd),0},Oe=0,me=(d,g,...$)=>{var _,I=16*$.length,C=Se(),P=vs(I),j=P>>>3;for(_ of $)typeof _=="bigint"?((S(),ue)[j++>>>0]=1n,(S(),ue)[j++>>>0]=_):((S(),ue)[j++>>>0]=0n,(S(),Q)[j++>>>0]=_);return d=Mg(d,0,I,P,g),ve(C),d};function Ze(d){if(i)return me(0,1,d);if(m=d,!(0<Oe)){for(var g of sn)ye(g);for(g of mt)ye(g);mt=[],sn=[],gt={},E=!0}l(0,new te(d))}function ft(d){if(i)return me(1,0,d);Xe(d)}var Xe=d=>{if(m=d,i)throw ft(d),"unwind";Ze(d)},mt=[],sn=[],Kt=[],gt={},On=d=>{var g=d.Rc;delete gt[g],mt.push(d),sn.splice(sn.indexOf(d),1),d.Rc=0,Tg(g)};function un(){Kt.forEach(d=>d())}var Yt=d=>new Promise(g=>{d.onmessage=I=>{var C=I.data;if(I=C.Sc,C.Zc&&C.Zc!=Mi()){var P=gt[C.Zc];P?P.postMessage(C,C.rd):T(`Internal error! Worker sent a message "${I}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?_i():I==="spawnThread"?ot(C):I==="cleanupThread"?wi(()=>{On(gt[C.Nd])}):I==="loaded"?(d.loaded=!0,g(d)):C.target==="setimmediate"?d.postMessage(C):I==="uncaughtException"?d.onerror(C.error):I==="callHandler"?t[C.wd](...C.args):I&&T(`worker sent an unknown command ${I}`)},d.onerror=I=>{throw T(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);d.postMessage({Sc:"load",xd:_,Od:It,Pd:f})});function er(){var d=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});mt.push(d)}var It,vr=(d,g)=>{Oe=0,d=Ms(d,g),0<Oe?m=d:$s(d)},Nn=[],zn=0;function hi(d){var g=new cn(d>>>=0);return(S(),N)[g.Tc+12>>>0]==0&&(tr(g,!0),zn--),Sr(g,!1),Nn.push(g),Rg(d)}var ln=0,Nt=()=>{Me(0,0);var d=Nn.pop();Cg(d.cd),ln=0};function tr(d,g){g=g?1:0,(S(),N)[d.Tc+12>>>0]=g}function Sr(d,g){g=g?1:0,(S(),N)[d.Tc+13>>>0]=g}class cn{constructor(g){this.cd=g,this.Tc=g-24}}var dn=d=>{var g=ln;if(!g)return kr(0),0;var $=new cn(g);(S(),H)[$.Tc+16>>>2>>>0]=g;var _=(S(),H)[$.Tc+4>>>2>>>0];if(!_)return kr(0),g;for(var I of d){if(I===0||I===_)break;if(Ag(I,_,$.Tc+16))return kr(I),g}return kr(_),g};function Jm(){return dn([])}function ls(d){return dn([d>>>0])}function pi(d,g,$,_){return dn([d>>>0,g>>>0,$>>>0,_>>>0])}var Bn=()=>{var d=Nn.pop();d||G("no exception to throw");var g=d.cd;throw(S(),N)[d.Tc+13>>>0]==0&&(Nn.push(d),Sr(d,!0),tr(d,!1),zn++),Ss(g),ln=g};function fi(d,g,$){var _=new cn(d>>>=0);throw g>>>=0,$>>>=0,(S(),H)[_.Tc+16>>>2>>>0]=0,(S(),H)[_.Tc+4>>>2>>>0]=g,(S(),H)[_.Tc+8>>>2>>>0]=$,Ss(d),zn++,ln=d}var cs=()=>zn;function Pn(d,g,$,_){return i?me(2,1,d,g,$,_):Mr(d,g,$,_)}function Mr(d,g,$,_){if(d>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?Pn(d,g,$,_):(d={Ld:$,Rc:d,bd:_,rd:I},i?(d.Sc="spawnThread",postMessage(d,I),0):ot(d))}function F(d){throw ln||(ln=d>>>0),ln}var Z=globalThis.TextDecoder&&new TextDecoder,J=(d,g,$,_)=>{if($=g+$,_)return $;for(;d[g]&&!(g>=$);)++g;return g},ae=(d,g=0,$,_)=>{if(16<($=J(d,g>>>=0,$,_))-g&&d.buffer&&Z)return Z.decode(d.buffer instanceof ArrayBuffer?d.subarray(g,$):d.slice(g,$));for(_="";g<$;){var I=d[g++];if(128&I){var C=63&d[g++];if((224&I)==192)_+=String.fromCharCode((31&I)<<6|C);else{var P=63&d[g++];65536>(I=(240&I)==224?(15&I)<<12|C<<6|P:(7&I)<<18|C<<12|P<<6|63&d[g++])?_+=String.fromCharCode(I):(I-=65536,_+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else _+=String.fromCharCode(I)}return _},ne=(d,g,$)=>(d>>>=0)?ae((S(),U),d,g,$):"";function le(d,g,$){return i?me(3,1,d,g,$):0}function Ee(d,g){if(i)return me(4,1,d,g)}function Ce(d,g){if(i)return me(5,1,d,g)}function pe(d,g,$){if(i)return me(6,1,d,g,$)}function fe(d,g,$){return i?me(7,1,d,g,$):0}function de(d,g){if(i)return me(8,1,d,g)}function ge(d,g,$){if(i)return me(9,1,d,g,$)}function xe(d,g,$,_){if(i)return me(10,1,d,g,$,_)}function We(d,g,$,_){if(i)return me(11,1,d,g,$,_)}function Ue(d,g,$,_){if(i)return me(12,1,d,g,$,_)}function hn(d){if(i)return me(13,1,d)}function zt(d,g){if(i)return me(14,1,d,g)}function Pe(d,g,$){if(i)return me(15,1,d,g,$)}var Ke=()=>G(""),Ye=d=>{d>>>=0;for(var g="";;){var $=(S(),U)[d++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Bt={},Tr={},pn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Et(d,g,$={}){return(function(_,I,C={}){var P=I.name;if(!_)throw new pn(`type "${P}" must have a positive integer typeid pointer`);if(Tr.hasOwnProperty(_)){if(C.yd)return;throw new pn(`Cannot register type '${P}' twice`)}Tr[_]=I,Bt.hasOwnProperty(_)&&(I=Bt[_],delete Bt[_],I.forEach(j=>j()))})(d,g,$)}var mi=(d,g,$)=>{switch(g){case 1:return $?_=>(S(),N)[_>>>0]:_=>(S(),U)[_>>>0];case 2:return $?_=>(S(),V)[_>>>1>>>0]:_=>(S(),L)[_>>>1>>>0];case 4:return $?_=>(S(),O)[_>>>2>>>0]:_=>(S(),H)[_>>>2>>>0];case 8:return $?_=>(S(),ue)[_>>>3>>>0]:_=>(S(),W)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${d}`)}};function gi(d,g,$,_,I){d>>>=0,$>>>=0,g=Ye(g>>>0);let C=P=>P;if(_=_===0n){let P=8*$;C=j=>BigInt.asUintN(P,j),I=C(I)}Et(d,{name:g,Oc:C,Vc:(P,j)=>(typeof j=="number"&&(j=BigInt(j)),j),Uc:mi(g,$,!_),Wc:null})}function Nx(d,g,$,_){Et(d>>>=0,{name:g=Ye(g>>>0),Oc:function(I){return!!I},Vc:function(I,C){return C?$:_},Uc:function(I){return this.Oc((S(),U)[I>>>0])},Wc:null})}var eg=[],Dn=[0,1,,1,null,1,!0,1,!1,1];function ds(d){9<(d>>>=0)&&--Dn[d+1]===0&&(Dn[d]=void 0,eg.push(d))}var yt=d=>{if(!d)throw new pn(`Cannot use deleted val. handle = ${d}`);return Dn[d]},kt=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=eg.pop()||Dn.length;return Dn[g]=d,Dn[g+1]=1,g}};function hs(d){return this.Oc((S(),H)[d>>>2>>>0])}var zx={name:"emscripten::val",Oc:d=>{var g=yt(d);return ds(d),g},Vc:(d,g)=>kt(g),Uc:hs,Wc:null};function Bx(d){return Et(d>>>0,zx)}var Px=(d,g)=>{switch(g){case 4:return function($){return this.Oc((S(),Y)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),Q)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${d}`)}};function Dx(d,g,$){$>>>=0,Et(d>>>=0,{name:g=Ye(g>>>0),Oc:_=>_,Vc:(_,I)=>I,Uc:Px(g,$),Wc:null})}function Ux(d,g,$,_,I){d>>>=0,$>>>=0,g=Ye(g>>>0);let C=j=>j;if(_===0){var P=32-8*$;C=j=>j<<P>>>P,I=C(I)}Et(d,{name:g,Oc:C,Vc:(j,re)=>re,Uc:mi(g,$,_!==0),Wc:null})}function Lx(d,g,$){function _(C){var P=(S(),H)[C>>>2>>>0];return C=(S(),H)[C+4>>>2>>>0],new I((S(),N).buffer,C,P)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Et(d>>>=0,{name:$=Ye($>>>0),Oc:_,Uc:_},{yd:!0})}var fn=(d,g,$)=>{var _=(S(),U);if(g>>>=0,0<$){var I=g;$=g+$-1;for(var C=0;C<d.length;++C){var P=d.codePointAt(C);if(127>=P){if(g>=$)break;_[g++>>>0]=P}else if(2047>=P){if(g+1>=$)break;_[g++>>>0]=192|P>>6,_[g++>>>0]=128|63&P}else if(65535>=P){if(g+2>=$)break;_[g++>>>0]=224|P>>12,_[g++>>>0]=128|P>>6&63,_[g++>>>0]=128|63&P}else{if(g+3>=$)break;_[g++>>>0]=240|P>>18,_[g++>>>0]=128|P>>12&63,_[g++>>>0]=128|P>>6&63,_[g++>>>0]=128|63&P,C++}}_[g>>>0]=0,d=g-I}else d=0;return d},yi=d=>{for(var g=0,$=0;$<d.length;++$){var _=d.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function Fx(d,g){Et(d>>>=0,{name:g=Ye(g>>>0),Oc($){var _=(S(),H)[$>>>2>>>0];return _=ne($+4,_,!0),Dt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var I=typeof _=="string";if(!(I||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new pn("Cannot pass non-string to std::string");var C=I?yi(_):_.length,P=Er(4+C+1),j=P+4;return(S(),H)[P>>>2>>>0]=C,I?fn(_,j,C+1):(S(),U).set(_,j>>>0),$!==null&&$.push(Dt,P),P},Uc:hs,Wc($){Dt($)}})}var tg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Gx=(d,g,$)=>{if(d>>>=1,16<(g=J((S(),L),d,g/2,$))-d&&tg)return tg.decode((S(),L).slice(d,g));for($="";d<g;++d){var _=(S(),L)[d>>>0];$+=String.fromCharCode(_)}return $},Wx=(d,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*d.length?$/2:d.length;for(var I=0;I<$;++I){var C=d.charCodeAt(I);(S(),V)[g>>>1>>>0]=C,g+=2}return(S(),V)[g>>>1>>>0]=0,g-_},qx=d=>2*d.length,Vx=(d,g,$)=>{var _="";d>>>=2;for(var I=0;!(I>=g/4);I++){var C=(S(),H)[d+I>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},Hx=(d,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var I=0;I<d.length;++I){var C=d.codePointAt(I);if(65535<C&&I++,(S(),O)[g>>>2>>>0]=C,(g+=4)+4>$)break}return(S(),O)[g>>>2>>>0]=0,g-_},jx=d=>{for(var g=0,$=0;$<d.length;++$)65535<d.codePointAt($)&&$++,g+=4;return g};function Kx(d,g,$){if(d>>>=0,g>>>=0,$=Ye($>>>=0),g===2)var _=Gx,I=Wx,C=qx;else _=Vx,I=Hx,C=jx;Et(d,{name:$,Oc:P=>{var j=(S(),H)[P>>>2>>>0];return j=_(P+4,j*g,!0),Dt(P),j},Vc:(P,j)=>{if(typeof j!="string")throw new pn(`Cannot pass non-string to C++ string type ${$}`);var re=C(j),oe=Er(4+re+g);return(S(),H)[oe>>>2>>>0]=re/g,I(j,oe+4,re+g),P!==null&&P.push(Dt,oe),oe},Uc:hs,Wc(P){Dt(P)}})}function Yx(d,g){Et(d>>>=0,{zd:!0,name:g=Ye(g>>>0),Oc:()=>{},Vc:()=>{}})}function Xx(d){xs(d>>>0,!r,1,!n,131072,!1),un()}var wi=d=>{if(!E)try{if(d(),!(0<Oe))try{i?Mi()&&$s(m):Xe(m)}catch(g){g instanceof te||g=="unwind"||l(0,g)}}catch(g){g instanceof te||g=="unwind"||l(0,g)}},Zx=!Atomics.waitAsync||((b0=globalThis.navigator)==null?void 0:b0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ps(d){d>>>=0,Zx||(Atomics.waitAsync((S(),O),d>>>2,d).value.then(_i),d+=128,Atomics.store((S(),O),d>>>2,1))}var _i=()=>wi(()=>{var d=Mi();d&&(ps(d),Eg())});function Qx(d,g){(d>>>=0)==g>>>0?setTimeout(_i):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=gt[d])&&d.postMessage({Sc:"checkMailbox"})}var fs=[];function Jx(d,g,$,_,I){for(g>>>=0,I>>>=0,fs.length=0,$=I>>>3,_=I+_>>>3;$<_;){var C;C=(S(),ue)[$++>>>0]?(S(),ue)[$++>>>0]:(S(),Q)[$++>>>0],fs.push(C)}return(g?Ts[g]:W$[d])(...fs)}var e$=()=>{Oe=0};function t$(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):On(gt[d])}function n$(d){}var bi=d=>{try{d()}catch(g){G(g)}};function r$(d){var g=(...$)=>{xi.push(d);try{return d(...$)}finally{E||(xi.pop(),Pt&&mn===1&&xi.length===0&&(mn=0,Oe+=1,bi(g0),typeof Fibers<"u"&&Fibers.Zd()))}};return ig.set(d,g),g}var mn=0,Pt=null,ng=0,xi=[],ms=new Map,rg=new Map,ig=new Map,i$=0,gs=null,a$=[],ag=d=>(function(g){if(!E){if(mn===0){var $=!1,_=!1;g((I=0)=>{if(!E&&(ng=I,$=!0,_)){mn=2,bi(()=>y0(Pt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var C=(function(){var re=(S(),O)[Pt+8>>>2>>>0];return re=rg.get(re),re=ig.get(re),--Oe,re()})()}catch(re){C=re,I=!0}var P=!1;if(!Pt){var j=gs;j&&(gs=null,(I?j.reject:j.resolve)(C),P=!0)}if(I&&!P)throw C}}),_=!0,$||(mn=1,Pt=(function(){var I=Er(65548),C=I+12;if((S(),H)[I>>>2>>>0]=C,(S(),H)[I+4>>>2>>>0]=C+65536,C=xi[0],!ms.has(C)){var P=i$++;ms.set(C,P),rg.set(P,C)}return C=ms.get(C),(S(),O)[I+8>>>2>>>0]=C,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),bi(()=>m0(Pt)))}else mn===2?(mn=0,bi(w0),Dt(Pt),Pt=null,a$.forEach(wi)):G(`invalid state: ${mn}`);return ng}})(g=>{d().then(g)});function o$(d){return d>>>=0,ag(async()=>{var g=await yt(d);return kt(g)})}var ys=[],s$=d=>{var g=ys.length;return ys.push(d),g},u$=(d,g)=>{for(var $=Array(d),_=0;_<d;++_){var I=_,C=(S(),H)[g+4*_>>>2>>>0],P=Tr[C];if(P===void 0)throw d=`parameter ${_}`,C=$g(C),g=Ye(C),Dt(C),new pn(`${d} has unknown type ${g}`);$[I]=P}return $},l$=(d,g,$)=>{var _=[];return d=d(_,$),_.length&&((S(),H)[g>>>2>>>0]=kt(_)),d},c$={},$i=d=>{var g=c$[d];return g===void 0?Ye(d):g};function d$(d,g,$){var[_,...I]=u$(d,g>>>0);g=_.Vc.bind(_);var C=I.map(re=>re.Uc.bind(re));d--;var P={toValue:yt};switch(d=C.map((re,oe)=>{var $e=`argFromPtr${oe}`;return P[$e]=re,`${$e}(args${oe?"+"+8*oe:""})`}),$){case 0:var j="toValue(handle)";break;case 2:j="new (toValue(handle))";break;case 3:j="";break;case 1:P.getStringOrSymbol=$i,j="toValue(handle)[getStringOrSymbol(methodName)]"}return j+=`(${d})`,_.zd||(P.toReturnWire=g,P.emval_returnValue=l$,j=`return emval_returnValue(toReturnWire, destructorsRef, ${j})`),j=`return function (handle, methodName, destructorsRef, args) {
  ${j}
  }`,$=new Function(Object.keys(P),j)(...Object.values(P)),j=`methodCaller<(${I.map(re=>re.name)}) => ${_.name}>`,s$(Object.defineProperty($,"name",{value:j}))}function h$(d,g){return g>>>=0,(d=yt(d>>>0))==yt(g)}function p$(d){return(d>>>=0)?(d=$i(d),kt(globalThis[d])):kt(globalThis)}function f$(d){return d=$i(d>>>0),kt(t[d])}function m$(d,g){return g>>>=0,d=yt(d>>>0),g=yt(g),kt(d[g])}function g$(d){9<(d>>>=0)&&(Dn[d+1]+=1)}function og(d,g,$,_,I){return ys[d>>>0](g>>>0,$>>>0,_>>>0,I>>>0)}function y$(d,g,$,_,I){return og(d>>>0,g>>>0,$>>>0,_>>>0,I>>>0)}function w$(){return kt([])}function _$(d){d=yt(d>>>0);for(var g=Array(d.length),$=0;$<d.length;$++)g[$]=d[$];return kt(g)}function b$(d){return kt($i(d>>>0))}function x$(){return kt({})}function $$(d){for(var g=yt(d>>>=0);g.length;){var $=g.pop();g.pop()($)}ds(d)}function v$(d,g,$){g>>>=0,$>>>=0,d=yt(d>>>0),g=yt(g),$=yt($),d[g]=$}function S$(d,g){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),g>>>=0,d=new Date(1e3*d),(S(),O)[g>>>2>>>0]=d.getUTCSeconds(),(S(),O)[g+4>>>2>>>0]=d.getUTCMinutes(),(S(),O)[g+8>>>2>>>0]=d.getUTCHours(),(S(),O)[g+12>>>2>>>0]=d.getUTCDate(),(S(),O)[g+16>>>2>>>0]=d.getUTCMonth(),(S(),O)[g+20>>>2>>>0]=d.getUTCFullYear()-1900,(S(),O)[g+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[g+28>>>2>>>0]=d}var sg=d=>d%4==0&&(d%100!=0||d%400==0),ug=[0,31,60,91,121,152,182,213,244,274,305,335],lg=[0,31,59,90,120,151,181,212,243,273,304,334];function M$(d,g){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),g>>>=0,d=new Date(1e3*d),(S(),O)[g>>>2>>>0]=d.getSeconds(),(S(),O)[g+4>>>2>>>0]=d.getMinutes(),(S(),O)[g+8>>>2>>>0]=d.getHours(),(S(),O)[g+12>>>2>>>0]=d.getDate(),(S(),O)[g+16>>>2>>>0]=d.getMonth(),(S(),O)[g+20>>>2>>>0]=d.getFullYear()-1900,(S(),O)[g+24>>>2>>>0]=d.getDay();var $=(sg(d.getFullYear())?ug:lg)[d.getMonth()]+d.getDate()-1|0;(S(),O)[g+28>>>2>>>0]=$,(S(),O)[g+36>>>2>>>0]=-60*d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset();var _=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|($!=_&&d.getTimezoneOffset()==Math.min(_,$)),(S(),O)[g+32>>>2>>>0]=d}function T$(d){d>>>=0;var g=new Date((S(),O)[d+20>>>2>>>0]+1900,(S(),O)[d+16>>>2>>>0],(S(),O)[d+12>>>2>>>0],(S(),O)[d+8>>>2>>>0],(S(),O)[d+4>>>2>>>0],(S(),O)[d>>>2>>>0],0),$=(S(),O)[d+32>>>2>>>0],_=g.getTimezoneOffset(),I=new Date(g.getFullYear(),6,1).getTimezoneOffset(),C=new Date(g.getFullYear(),0,1).getTimezoneOffset(),P=Math.min(C,I);return 0>$?(S(),O)[d+32>>>2>>>0]=+(I!=C&&P==_):0<$!=(P==_)&&(I=Math.max(C,I),g.setTime(g.getTime()+6e4*((0<$?P:I)-_))),(S(),O)[d+24>>>2>>>0]=g.getDay(),$=(sg(g.getFullYear())?ug:lg)[g.getMonth()]+g.getDate()-1|0,(S(),O)[d+28>>>2>>>0]=$,(S(),O)[d>>>2>>>0]=g.getSeconds(),(S(),O)[d+4>>>2>>>0]=g.getMinutes(),(S(),O)[d+8>>>2>>>0]=g.getHours(),(S(),O)[d+12>>>2>>>0]=g.getDate(),(S(),O)[d+16>>>2>>>0]=g.getMonth(),(S(),O)[d+20>>>2>>>0]=g.getYear(),d=g.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function cg(d,g,$,_,I,C,P){return i?me(16,1,d,g,$,_,I,C,P):-52}function dg(d,g,$,_,I,C){if(i)return me(17,1,d,g,$,_,I,C)}var Ir={},I$=()=>performance.timeOrigin+performance.now();function hg(d,g){if(i)return me(18,1,d,g);if(Ir[d]&&(clearTimeout(Ir[d].id),delete Ir[d]),!g)return 0;var $=setTimeout(()=>{delete Ir[d],wi(()=>Ig(d,performance.timeOrigin+performance.now()))},g);return Ir[d]={id:$,Yd:g},0}function E$(d,g,$,_){d>>>=0,g>>>=0,$>>>=0,_>>>=0;var I=new Date().getFullYear(),C=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var P=Math.max(C,I);(S(),H)[d>>>2>>>0]=60*P,(S(),O)[g>>>2>>>0]=+(C!=I),d=(g=j=>{var re=Math.abs(j);return`UTC${0<=j?"-":"+"}${String(Math.floor(re/60)).padStart(2,"0")}${String(re%60).padStart(2,"0")}`})(C),g=g(I),I<C?(fn(d,$,17),fn(g,_,17)):(fn(d,_,17),fn(g,$,17))}var k$=()=>Date.now();function C$(d,g,$){return $>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(S(),ue)[$>>>3>>>0]=BigInt(d),0):28}var ws=[],pg=(d,g)=>{ws.length=0;for(var $;$=(S(),U)[d++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,ws.push($==112?(S(),H)[g>>>2>>>0]:$==106?(S(),ue)[g>>>3>>>0]:$==105?(S(),O)[g>>>2>>>0]:(S(),Q)[g>>>3>>>0]),g+=_?8:4}return ws};function A$(d,g,$){return d>>>=0,g=pg(g>>>0,$>>>0),Ts[d](...g)}function R$(d,g,$){return d>>>=0,g=pg(g>>>0,$>>>0),Ts[d](...g)}var O$=()=>{};function N$(d,g){return T(ne(d>>>0,g>>>0))}var z$=()=>{throw Oe+=1,"unwind"};function B$(){return 4294901760}var P$=()=>navigator.hardwareConcurrency,Un={},vi=d=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+g[1]:0},fg=d=>{for(var g of d)(d=vi(g))&&(Un[d]=g)};function D$(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),fg(d),Un.gd=vi(d[3]),Un.Jd=d,Un.gd}function Si(d){if(!(d=Un[d>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(d))d=g[1];else{if(!(g=/^(.+?)@/.exec(d)))return 0;d=g[1]}Dt(Si.hd??0),g=yi(d)+1;var $=Er(g);return $&&fn(d,$,g),Si.hd=$,Si.hd}function U$(d){d>>>=0;var g=(S(),U).length;if(d<=g||4294901760<d)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,d+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(d,_)/65536))-It.buffer.byteLength+65535)/65536|0;try{It.grow(_),B();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function L$(d,g,$){if(d>>>=0,g>>>=0,Un.gd==d)var _=Un.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),fg(_);for(var I=3;_[I]&&vi(_[I])!=d;)++I;for(d=0;d<$&&_[d+I];++d)(S(),O)[g+4*d>>>2>>>0]=vi(_[d+I]);return d}var _s,bs={},mg=()=>{var _;if(!_s){var d,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in bs)bs[d]===void 0?delete g[d]:g[d]=bs[d];var $=[];for(d in g)$.push(`${d}=${g[d]}`);_s=$}return _s};function gg(d,g){if(i)return me(19,1,d,g);d>>>=0,g>>>=0;var $,_=0,I=0;for($ of mg()){var C=g+_;(S(),H)[d+I>>>2>>>0]=C,_+=fn($,C,1/0)+1,I+=4}return 0}function yg(d,g){if(i)return me(20,1,d,g);d>>>=0,g>>>=0;var $=mg();for(var _ of((S(),H)[d>>>2>>>0]=$.length,d=0,$))d+=yi(_)+1;return(S(),H)[g>>>2>>>0]=d,0}function wg(d){return i?me(21,1,d):52}function _g(d,g,$,_){return i?me(22,1,d,g,$,_):52}function bg(d,g,$,_){return i?me(23,1,d,g,$,_):70}var F$=[null,[],[]];function xg(d,g,$,_){if(i)return me(24,1,d,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var I=0,C=0;C<$;C++){var P=(S(),H)[g>>>2>>>0],j=(S(),H)[g+4>>>2>>>0];g+=8;for(var re=0;re<j;re++){var oe=d,$e=(S(),U)[P+re>>>0],Ae=F$[oe];$e===0||$e===10?((oe===1?v:T)(ae(Ae)),Ae.length=0):Ae.push($e)}I+=j}return(S(),H)[_>>>2>>>0]=I,0}function G$(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)er();Te.push(async()=>{var g=(async function(){if(!i)return Promise.all(mt.map(Yt))})();Be++,await g,--Be==0&&ke&&(g=ke,ke=null,g())})})(),i||(It=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),B()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Se(),t.stackRestore=d=>ve(d),t.stackAlloc=d=>vs(d),t.setValue=function(d,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),N)[d>>>0]=g;break;case"i16":(S(),V)[d>>>1>>>0]=g;break;case"i32":(S(),O)[d>>>2>>>0]=g;break;case"i64":(S(),ue)[d>>>3>>>0]=BigInt(g);break;case"float":(S(),Y)[d>>>2>>>0]=g;break;case"double":(S(),Q)[d>>>3>>>0]=g;break;case"*":(S(),H)[d>>>2>>>0]=g;break;default:G(`invalid type for setValue: ${$}`)}},t.getValue=function(d,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),N)[d>>>0];case"i16":return(S(),V)[d>>>1>>>0];case"i32":return(S(),O)[d>>>2>>>0];case"i64":return(S(),ue)[d>>>3>>>0];case"float":return(S(),Y)[d>>>2>>>0];case"double":return(S(),Q)[d>>>3>>>0];case"*":return(S(),H)[d>>>2>>>0];default:G(`invalid type for getValue: ${g}`)}},t.UTF8ToString=ne,t.stringToUTF8=fn,t.lengthBytesUTF8=yi;var $g,vg,Mi,Dt,Er,xs,Sg,Mg,Tg,$s,Ig,Eg,Me,kr,kg,ve,vs,Se,Cg,Ss,Ag,Rg,Og,Ms,Ng,zg,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Jg,e0,t0,n0,r0,i0,a0,o0,s0,u0,l0,c0,d0,h0,p0,f0,m0,g0,y0,w0,Xt,W$=[Ze,ft,Pn,le,Ee,Ce,pe,fe,de,ge,xe,We,Ue,hn,zt,Pe,cg,dg,hg,gg,yg,wg,_g,bg,xg],Ts={1003524:(d,g,$,_,I)=>{if(t===void 0||!t.Xc)return 1;if((d=ne(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>d.byteLength)return 3;try{let C=d.subarray(g,g+$);switch(I){case 0:(S(),U).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(d,g,$)=>{t.td(d,(S(),U).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,g,$)=>{t.ed(Number(d),Number(g),Number($),!0)},1004704:(d,g,$)=>{t.ed(Number(d),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,g,$)=>{t.$b("HardSigmoid",d,{alpha:g,beta:$})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,g,$)=>{t.$b("Clip",d,{min:g,max:$})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,g)=>{t.$b("Elu",d,{alpha:g})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,g)=>{t.$b("LeakyRelu",d,{alpha:g})},1006444:(d,g)=>{t.$b("ThresholdedRelu",d,{alpha:g})},1006514:(d,g)=>{t.$b("Cast",d,{to:g})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,g,$,_,I)=>{t.$b("ReduceMean",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007283:(d,g,$,_,I)=>{t.$b("ReduceMax",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007457:(d,g,$,_,I)=>{t.$b("ReduceMin",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007631:(d,g,$,_,I)=>{t.$b("ReduceProd",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007806:(d,g,$,_,I)=>{t.$b("ReduceSum",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1007980:(d,g,$,_,I)=>{t.$b("ReduceL1",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008153:(d,g,$,_,I)=>{t.$b("ReduceL2",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008326:(d,g,$,_,I)=>{t.$b("ReduceLogSum",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008503:(d,g,$,_,I)=>{t.$b("ReduceSumSquare",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008683:(d,g,$,_,I)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,g,$)=>{t.$b("Transpose",d,{perm:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(d,g,$,_)=>{t.$b("DepthToSpace",d,{blocksize:g,mode:ne($),format:_?"NHWC":"NCHW"})},1009173:(d,g,$,_)=>{t.$b("DepthToSpace",d,{blocksize:g,mode:ne($),format:_?"NHWC":"NCHW"})},1009306:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe,gn)=>{t.$b("ConvTranspose",d,{format:re?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[I],pads:[C,P],strides:[j],wIsConst:()=>!!(S(),N)[oe>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ae)>>>0)):[],outputShape:Le?Array.from((S(),O).subarray(Number(Le)>>>0,Number(qe)>>>0)):[],activation:ne(gn)})},1009739:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe)=>{t.$b("ConvTranspose",d,{format:j?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[re>>>0],outputPadding:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Le)>>>0)):[],activation:ne(qe)})},1010400:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe,gn)=>{t.$b("ConvTranspose",d,{format:re?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[I],pads:[C,P],strides:[j],wIsConst:()=>!!(S(),N)[oe>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ae)>>>0)):[],outputShape:Le?Array.from((S(),O).subarray(Number(Le)>>>0,Number(qe)>>>0)):[],activation:ne(gn)})},1010833:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe)=>{t.$b("ConvTranspose",d,{format:j?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[re>>>0],outputPadding:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],outputShape:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Le)>>>0)):[],activation:ne(qe)})},1011494:(d,g)=>{t.$b("GlobalAveragePool",d,{format:g?"NHWC":"NCHW"})},1011585:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe)=>{t.$b("AveragePool",d,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:j?Array.from((S(),O).subarray(Number(j)>>>0,Number(re)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Le)>>>0)):[]})},1012064:(d,g)=>{t.$b("GlobalAveragePool",d,{format:g?"NHWC":"NCHW"})},1012155:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe)=>{t.$b("AveragePool",d,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:j?Array.from((S(),O).subarray(Number(j)>>>0,Number(re)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Le)>>>0)):[]})},1012634:(d,g)=>{t.$b("GlobalMaxPool",d,{format:g?"NHWC":"NCHW"})},1012721:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe)=>{t.$b("MaxPool",d,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:j?Array.from((S(),O).subarray(Number(j)>>>0,Number(re)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Le)>>>0)):[]})},1013196:(d,g)=>{t.$b("GlobalMaxPool",d,{format:g?"NHWC":"NCHW"})},1013283:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe)=>{t.$b("MaxPool",d,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:I,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:j?Array.from((S(),O).subarray(Number(j)>>>0,Number(re)>>>0)):[],pads:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:Ae?Array.from((S(),O).subarray(Number(Ae)>>>0,Number(Le)>>>0)):[]})},1013758:(d,g,$,_,I)=>{t.$b("Gemm",d,{alpha:g,beta:$,transA:_,transB:I})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,g,$,_)=>{t.$b("ArgMax",d,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(d,g,$,_)=>{t.$b("ArgMin",d,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(d,g)=>{t.$b("Softmax",d,{axis:g})},1014195:(d,g)=>{t.$b("Concat",d,{axis:g})},1014255:(d,g,$,_,I)=>{t.$b("Split",d,{axis:g,numOutputs:$,splitSizes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,g)=>{t.$b("Gather",d,{axis:Number(g)})},1014536:(d,g)=>{t.$b("GatherElements",d,{axis:Number(g)})},1014615:(d,g)=>{t.$b("GatherND",d,{batch_dims:Number(g)})},1014694:(d,g,$,_,I,C,P,j,re,oe,$e)=>{t.$b("Resize",d,{antialias:g,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:ne(I),cubicCoeffA:C,excludeOutside:P,extrapolationValue:j,keepAspectRatioPolicy:ne(re),mode:ne(oe),nearestMode:ne($e)})},1015056:(d,g,$,_,I,C,P)=>{t.$b("Slice",d,{starts:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,g,$)=>{t.$b("InstanceNormalization",d,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(d,g,$)=>{t.$b("InstanceNormalization",d,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,g)=>{t.$b("Einsum",d,{equation:ne(g)})},1015734:(d,g,$,_,I)=>{t.$b("Pad",d,{mode:g,value:$,pads:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(I)>>>0)):[]})},1015877:(d,g,$,_,I,C)=>{t.$b("BatchNormalization",d,{epsilon:g,momentum:$,spatial:!!I,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(d,g,$,_,I,C)=>{t.$b("BatchNormalization",d,{epsilon:g,momentum:$,spatial:!!I,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(d,g,$)=>{t.$b("CumSum",d,{exclusive:Number(g),reverse:Number($)})},1016312:(d,g,$)=>{t.$b("DequantizeLinear",d,{axis:g,blockSize:$})},1016402:(d,g,$,_,I)=>{t.$b("GridSample",d,{align_corners:g,mode:ne($),padding_mode:ne(_),format:I?"NHWC":"NCHW"})},1016572:(d,g,$,_,I)=>{t.$b("GridSample",d,{align_corners:g,mode:ne($),padding_mode:ne(_),format:I?"NHWC":"NCHW"})},1016742:(d,g)=>{t.$b("ScatterND",d,{reduction:ne(g)})},1016827:(d,g,$,_,I,C,P,j,re)=>{t.$b("Attention",d,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:C,qkvHiddenSizes:P?Array.from((S(),O).subarray(Number(j)>>>0,Number(j)+P>>>0)):[],pastPresentShareBuffer:!!re})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe,gn,Is)=>{t.$b("Conv",d,{format:Ae?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:I,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],pads:j?Array.from((S(),O).subarray(Number(j)>>>0,Number(re)>>>0)):[],strides:oe?Array.from((S(),O).subarray(Number(oe)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!(S(),N)[Number(Le)>>>0],activation:ne(qe),activation_params:gn?Array.from((S(),Y).subarray(Number(gn)>>>0,Number(Is)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,g,$,_,I,C,P,j,re)=>{t.$b("GroupQueryAttention",d,{numHeads:g,kvNumHeads:$,scale:_,softcap:I,doRotary:C,rotaryInterleaved:P,smoothSoftmax:j,localWindowSize:re})},1018124:(d,g,$,_)=>{t.$b("LayerNormalization",d,{axis:g,epsilon:$,simplified:!!_})},1018235:(d,g,$,_)=>{t.$b("LayerNormalization",d,{axis:g,epsilon:$,simplified:!!_})},1018346:(d,g,$,_,I,C)=>{t.$b("MatMulNBits",d,{k:g,n:$,accuracyLevel:_,bits:I,blockSize:C})},1018473:(d,g,$,_,I,C)=>{t.$b("MultiHeadAttention",d,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:I,doRotary:C})},1018632:(d,g)=>{t.$b("QuickGelu",d,{alpha:g})},1018696:(d,g,$,_,I)=>{t.$b("RotaryEmbedding",d,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:I})},1018835:(d,g,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:g,simplified:!!$})},1018937:(d,g,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:g,simplified:!!$})},1019039:(d,g,$,_)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:d=>{t.Fd(d)},1019194:(d,g)=>t.Hd(Number(d),Number(g),t.Yc.Kd,t.Yc.errors)};function q$(d,g,$){return ag(async()=>{await t.Dd(Number(d),Number(g),Number($))})}function V$(){return typeof wasmOffsetConverter<"u"}function H$(d,g,$,_){var I=Se();try{return Fg(d,g,$,_)}catch(C){if(ve(I),C!==C+0)throw C;Me(1,0)}}function j$(d,g,$){var _=Se();try{return Pg(d,g,$)}catch(I){if(ve(_),I!==I+0)throw I;Me(1,0)}}function K$(d){var g=Se();try{Ng(d)}catch($){if(ve(g),$!==$+0)throw $;Me(1,0)}}function Y$(d,g){var $=Se();try{return Ms(d,g)}catch(_){if(ve($),_!==_+0)throw _;Me(1,0)}}function X$(d,g,$){var _=Se();try{Og(d,g,$)}catch(I){if(ve(_),I!==I+0)throw I;Me(1,0)}}function Z$(d,g){var $=Se();try{Gg(d,g)}catch(_){if(ve($),_!==_+0)throw _;Me(1,0)}}function Q$(d,g,$,_,I,C,P){var j=Se();try{return Ug(d,g,$,_,I,C,P)}catch(re){if(ve(j),re!==re+0)throw re;Me(1,0)}}function J$(d,g,$,_,I,C){var P=Se();try{zg(d,g,$,_,I,C)}catch(j){if(ve(P),j!==j+0)throw j;Me(1,0)}}function ev(d,g,$,_){var I=Se();try{Lg(d,g,$,_)}catch(C){if(ve(I),C!==C+0)throw C;Me(1,0)}}function tv(d,g,$,_,I){var C=Se();try{Bg(d,g,$,_,I)}catch(P){if(ve(C),P!==P+0)throw P;Me(1,0)}}function nv(d,g,$,_,I,C,P){var j=Se();try{qg(d,g,$,_,I,C,P)}catch(re){if(ve(j),re!==re+0)throw re;Me(1,0)}}function rv(d,g,$,_,I,C,P){var j=Se();try{Vg(d,g,$,_,I,C,P)}catch(re){if(ve(j),re!==re+0)throw re;Me(1,0)}}function iv(d,g,$,_,I,C,P,j){var re=Se();try{Yg(d,g,$,_,I,C,P,j)}catch(oe){if(ve(re),oe!==oe+0)throw oe;Me(1,0)}}function av(d,g,$,_,I){var C=Se();try{return Wg(d,g,$,_,I)}catch(P){if(ve(C),P!==P+0)throw P;Me(1,0)}}function ov(d,g,$){var _=Se();try{return Xg(d,g,$)}catch(I){if(ve(_),I!==I+0)throw I;Me(1,0)}}function sv(d,g,$,_,I,C,P,j){var re=Se();try{Zg(d,g,$,_,I,C,P,j)}catch(oe){if(ve(re),oe!==oe+0)throw oe;Me(1,0)}}function uv(d,g,$,_,I,C,P,j,re,oe,$e,Ae){var Le=Se();try{Hg(d,g,$,_,I,C,P,j,re,oe,$e,Ae)}catch(qe){if(ve(Le),qe!==qe+0)throw qe;Me(1,0)}}function lv(d,g,$,_,I,C){var P=Se();try{return jg(d,g,$,_,I,C)}catch(j){if(ve(P),j!==j+0)throw j;Me(1,0)}}function cv(d,g,$){var _=Se();try{return Qg(d,g,$)}catch(I){if(ve(_),I!==I+0)throw I;return Me(1,0),0n}}function dv(d,g,$,_,I,C,P,j,re){var oe=Se();try{Dg(d,g,$,_,I,C,P,j,re)}catch($e){if(ve(oe),$e!==$e+0)throw $e;Me(1,0)}}function hv(d){var g=Se();try{return Jg(d)}catch($){if(ve(g),$!==$+0)throw $;Me(1,0)}}function pv(d,g){var $=Se();try{return f0(d,g)}catch(_){if(ve($),_!==_+0)throw _;return Me(1,0),0n}}function fv(d){var g=Se();try{return e0(d)}catch($){if(ve(g),$!==$+0)throw $;return Me(1,0),0n}}function mv(d,g,$,_){var I=Se();try{return o0(d,g,$,_)}catch(C){if(ve(I),C!==C+0)throw C;Me(1,0)}}function gv(d,g,$,_,I){var C=Se();try{return s0(d,g,$,_,I)}catch(P){if(ve(C),P!==P+0)throw P;Me(1,0)}}function yv(d,g,$,_,I,C){var P=Se();try{return u0(d,g,$,_,I,C)}catch(j){if(ve(P),j!==j+0)throw j;Me(1,0)}}function wv(d,g,$,_,I,C){var P=Se();try{return l0(d,g,$,_,I,C)}catch(j){if(ve(P),j!==j+0)throw j;Me(1,0)}}function _v(d,g,$,_,I,C,P,j){var re=Se();try{return Kg(d,g,$,_,I,C,P,j)}catch(oe){if(ve(re),oe!==oe+0)throw oe;Me(1,0)}}function bv(d,g,$,_,I){var C=Se();try{return c0(d,g,$,_,I)}catch(P){if(ve(C),P!==P+0)throw P;return Me(1,0),0n}}function xv(d,g,$,_){var I=Se();try{return d0(d,g,$,_)}catch(C){if(ve(I),C!==C+0)throw C;Me(1,0)}}function $v(d,g,$,_){var I=Se();try{return h0(d,g,$,_)}catch(C){if(ve(I),C!==C+0)throw C;Me(1,0)}}function vv(d,g,$,_,I,C,P,j,re,oe,$e,Ae){var Le=Se();try{return p0(d,g,$,_,I,C,P,j,re,oe,$e,Ae)}catch(qe){if(ve(Le),qe!==qe+0)throw qe;Me(1,0)}}function Sv(d,g,$,_,I,C,P,j,re,oe,$e){var Ae=Se();try{i0(d,g,$,_,I,C,P,j,re,oe,$e)}catch(Le){if(ve(Ae),Le!==Le+0)throw Le;Me(1,0)}}function Mv(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe,gn,Is){var kv=Se();try{a0(d,g,$,_,I,C,P,j,re,oe,$e,Ae,Le,qe,gn,Is)}catch(Es){if(ve(kv),Es!==Es+0)throw Es;Me(1,0)}}function Tv(d,g,$){var _=Se();try{return t0(d,g,$)}catch(I){if(ve(_),I!==I+0)throw I;Me(1,0)}}function Iv(d,g,$){var _=Se();try{return n0(d,g,$)}catch(I){if(ve(_),I!==I+0)throw I;Me(1,0)}}function Ev(d,g,$,_){var I=Se();try{r0(d,g,$,_)}catch(C){if(ve(I),C!==C+0)throw C;Me(1,0)}}function Ti(){if(0<Be)ke=Ti;else if(i)y==null||y(t),D();else{for(var d=Te;0<d.length;)d.shift()(t);0<Be?ke=Ti:(t.calledRun=!0,E||(D(),y==null||y(t)))}}return i||(Xt=await ie(),Ti()),t.PTR_SIZE=4,R?t:new Promise((d,g)=>{y=d,w=g})}var Zs,Qs,G0=ee(()=>{var e,t;Zs=Xs,Qs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Qs&&Xs()}),zi,Bi,Js,ct,eu,Or,tu,nu,Pi,ru,Di,iu,Ui,au,Li=ee(()=>{Ri(),zi=typeof location>"u"?void 0:location.origin,Bi=self.location.href>"file:"&&self.location.href<"file;",Js=()=>{{if(Bi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,zi).href}return self.location.href}},ct=Js(),eu=()=>{if(ct&&!ct.startsWith("blob:"))return ct.substring(0,ct.lastIndexOf("/")+1)},Or=(e,t)=>{try{let n=t??ct;return(n?new URL(e,n):new URL(e)).origin===zi}catch{return!1}},tu=(e,t)=>{let n=t??ct;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},nu=(e,t)=>`${t??"./"}${e}`,Pi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ru=async e=>(await import(e)).default,Di=(F0(),nr(js)).default,iu=async()=>{if(!ct)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(ct))return[void 0,Di()];let e=await Pi(ct);return[e,Di(e)]},Ui=(G0(),nr(Ys)).default,au=async(e,t,n,r)=>{let i=Ui&&!(e||t);if(i)if(ct)i=Or(ct)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ui];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??tu(a,t),s=n&&o&&!Or(o,t),u=s?await Pi(o):o??nu(a,t);return[s?u:void 0,await ru(u)]}}}),Fi,Nr,ar,Gi,ou,su,uu,Wi,Ge,bn=ee(()=>{Li(),Nr=!1,ar=!1,Gi=!1,ou=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},su=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},uu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Wi=async e=>{if(Nr)return Promise.resolve();if(ar)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Gi)throw new Error("previous call to 'initializeWebAssembly()' failed.");ar=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!uu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!su())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ou();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[c,p]=await au(s,a,n>1,!!h||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(h)b.wasmBinary=h,b.locateFile=x=>x;else if(l||a)b.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(c){let x=eu();x&&(b.locateFile=M=>x+M)}p(b).then(x=>{ar=!1,Nr=!0,Fi=x,y(),c&&URL.revokeObjectURL(c)},x=>{ar=!1,Gi=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ge=()=>{if(Nr&&Fi)return Fi;throw new Error("WebAssembly is not initialized yet.")}}),_t,zr,ze,qi=ee(()=>{bn(),_t=(e,t)=>{let n=Ge(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},zr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")zr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ze=e=>{let t=Ge(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),lu,W0=ee(()=>{bn(),qi(),lu=e=>{let t=Ge(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=_t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&ze("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&zr(e.extra,"",new WeakSet,(o,s)=>{let u=_t(o,r),l=_t(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&ze(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),cu,du,hu,xn,pu,fu,q0=ee(()=>{bn(),qi(),cu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},du=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},hu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},xn=(e,t,n,r)=>{let i=_t(t,r),a=_t(n,r);Ge()._OrtAddSessionConfigEntry(e,i,a)!==0&&ze(`Can't set a session config entry: ${t} - ${n}.`)},pu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",xn(e,"session.disable_quant_qdq","1",n),xn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&xn(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);xn(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=_t(a,n),u=o.length,l=0,h=0;if(u>0){l=Ge()._malloc(u*Ge().PTR_SIZE),n.push(l),h=Ge()._malloc(u*Ge().PTR_SIZE),n.push(h);for(let c=0;c<u;c++)Ge().setValue(l+c*Ge().PTR_SIZE,o[c][0],"*"),Ge().setValue(h+c*Ge().PTR_SIZE,o[c][1],"*")}await Ge()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&ze(`Can't append execution provider: ${a}.`)}},fu=async e=>{let t=Ge(),n=0,r=[],i=e||{};hu(i);try{let a=cu(i.graphOptimizationLevel??"all"),o=du(i.executionMode??"sequential"),s=typeof i.logId=="string"?_t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?_t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&ze("Can't create session options."),i.executionProviders&&await pu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);xn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=_t(c,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&ze(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&zr(i.extra,"",new WeakSet,(c,p)=>{xn(n,c,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ze("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),$n,Ft,vn,Br,Pr,Vi,Hi,ji,we=ee(()=>{$n=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ft=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},vn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Br=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Pr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Hi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ji=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ki,mu=ee(()=>{Ri(),Ki=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),gu,yu,wu,_u,Yi,bu,Ie,Gt=ee(()=>{we(),gu=["V","I","W","E","F"],yu=(e,t)=>{console.log(`[${gu[e]},${new Date().toISOString()}]${t}`)},Yi=(e,t)=>{wu=e,_u=t},bu=(e,t)=>{let n=Pr(e),r=Pr(wu);n>=r&&yu(n,typeof t=="function"?t():t)},Ie=(...e)=>{_u&&bu(...e)}}),xu,Wn,q,Dr,$u,vu,Su,_e=ee(()=>{xu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Wn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=xu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class Ii{static size(t){return Ii.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ii.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ii.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Dr=class Cr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Cr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Cr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Cr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Cr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},$u=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Wn.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},vu=-34028234663852886e22,Su=34028234663852886e22}),Xi,Mu=ee(()=>{we(),Xi=(e,t)=>new(Br(t))(e)}),Zi,Qi,Ji,Tu,ea,Iu,ta,na,ra,Eu,ku,V0=ee(()=>{we(),Gt(),Zi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Qi=(e,t)=>{if(t==="int32")return e;let n=Zi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Br(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ji=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Tu=1,ea=()=>Tu++,Iu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ta=(e,t)=>{let n=Zi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},na=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ta(this.dataType,this.tensorShape)}destroy(){Ie("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Ji(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ra=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=Iu.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Ie("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==ta(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Qi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ie("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Ji(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Eu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ea();return this.tensorTrackersById.set(e,new ra(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ie("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ie("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=ea(),o=new na({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ra(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Ie("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}Ie("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new na({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ku=(...e)=>new Eu(...e)}),or,Cu,Au,H0=ee(()=>{we(),bn(),Mu(),V0(),Gt(),or=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Au=class{constructor(e){this.tensorManager=ku(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Yi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ie("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ie("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ie("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Cu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ie("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=or.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Ie("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=or.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ie("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Xi(n,t)}}registerMLTensor(e,t,n,r){let i=or.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Ie("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let c=Qi(new Uint8Array(l),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ie("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=or.get($n(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ia=ee(()=>{}),aa,Ur,Lr,Ru,Ou,oa,sa,Nu,zu,j0=ee(()=>{Gt(),ia(),aa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ur=[],Lr=e=>Math.ceil(Number(e)/16)*16,Ru=e=>{for(let t=0;t<Ur.length;t++){let n=Ur[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ou=1,oa=()=>Ou++,sa=async(e,t,n,r)=>{let i=Lr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Nu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of aa)Ur.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Lr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ie("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Lr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=oa();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ie("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ru(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:oa(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ie("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ie("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await sa(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=aa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ie("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},zu=(...e)=>new Nu(...e)}),Bu,Ne,je=ee(()=>{Bu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new Bu(e)}),qn,Fr,Qe,rt,he,He,ua,Vn,Qt,ce,sr,K,se,Pu,la,Du,Uu,be=ee(()=>{we(),_e(),qn=64,Fr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let n=Fr(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=Fr(e,t);return typeof n=="string"?n:n[1]},he=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},He=e=>e%4===0?4:e%2===0?2:1,ua=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Vn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Qt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ce=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,sr=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Fr(t,i),h=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:c,tensor:t},f=R=>typeof R=="string"?R:`${R}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let R=0;R<o-1;R++)x+=`
    let dim${R} = current / ${ce(b,R,o)};
    let rest${R} = current % ${ce(b,R,o)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=R=>(m.offsetToIndices=!0,o<2?R:`o2i_${e}(${R})`),T=[];if(o>=2)for(let R=o-1;R>=0;R--)T.push(`${ce(b,R,o)} * (indices[${R}])`);let E=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${T.join("+")};
  }`,k=R=>(m.indicesToOffset=!0,o<2?R:`i2o_${e}(${R})`),S=(...R)=>o===0?"0u":`${p.indices}(${R.map(f).join(",")})`,A=(R,B)=>o<2?`${R}`:`${ce(R,B,o)}`,N=(R,B,D)=>o<2?`${R}=${D};`:`${ce(R,B,o)}=${D};`,U={},V=(R,B)=>{m.broadcastedIndicesToOffset=!0;let D=`${B.name}broadcastedIndicesTo${e}Offset`;if(D in U)return`${D}(${R})`;let G=[];for(let X=o-1;X>=0;X--){let ie=B.indicesGet("outputIndices",X+B.rank-o);G.push(`${A(b,X)} * (${ie} % ${A(w,X)})`)}return U[D]=`fn ${D}(outputIndices: ${B.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${D}(${R})`},L=(R,B)=>(()=>{if(p.storage===p.value)return`${e}[${R}]=${B};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${B}), select(0u, 0xFFFFFFFFu, ${B} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${B}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${B}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=R=>(()=>{if(p.storage===p.value)return`${e}[${R}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${R}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${R}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),H=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${O(`i2o_${e}(indices)`)};
  }`,Y=o<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),B=s.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${R}) -> ${h} {
    return get_${e}ByIndices(${S(B)});
  }`})(),Q=(...R)=>{if(R.length!==o)throw new Error(`indices length must be ${o}`);let B=R.map(f).join(",");return o===0?O("0u"):o===1?O(B[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${B})`)},ue=R=>o<2?O(R):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${R})`),W=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${L(`i2o_${e}(indices)`,"value")}
  }`,z=o<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),B=s.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${R}, value: ${h}) {
    set_${e}ByIndices(${S(B)}, value);
  }`})();return{impl:()=>{let R=[],B=!1;return m.offsetToIndices&&(R.push(M),B=!0),m.indicesToOffset&&(R.push(E),B=!0),m.broadcastedIndicesToOffset&&(Object.values(U).forEach(D=>R.push(D)),B=!0),m.set&&(R.push(z),B=!0),m.setByIndices&&(R.push(W),B=!0),m.get&&(R.push(Y),B=!0),m.getByIndices&&(R.push(H),B=!0),!a&&B&&R.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${q.computeStrides(n).join(",")});`),R.join(`
`)},type:p,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:V,indices:S,indicesGet:A,indicesSet:N,set:(...R)=>{if(R.length!==o+1)throw new Error(`indices length must be ${o}`);let B=R[o];if(typeof B!="string")throw new Error("value must be string");let D=R.slice(0,o).map(f).join(",");return o===0?L("0u",B):o===1?L(D[0],B):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${D}, ${B})`)},setByOffset:L,setByIndices:(R,B)=>o<2?L(R,B):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${B});`),get:Q,getByOffset:O,getByIndices:ue,usage:r,name:e,strides:b,shape:w,rank:o}},K=(e,t,n,r=1)=>sr(e,t,n,"input",r),se=(e,t,n,r=1)=>sr(e,t,n,"output",r),Pu=(e,t,n)=>sr(e,t,n,"atomicOutput",1),la=(e,t,n,r=1)=>sr(e,t,n,"internal",r),Du=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=qn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${a}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Uu=(e,t)=>new Du(e,t)}),Lu,ca,Fu,Gu,Wu,qu,dt,Vu,Hu,Jt=ee(()=>{we(),_e(),je(),be(),Lu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ca=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Fu=(e,t)=>q.sortBasedOnPerm(e,ca(e.length,t)),Gu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Wu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},qu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},dt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ca(r,t),a=Fu(e.dims,i),o=e.dims,s=a,u=r<2||qu(i,e.dims),l;if(u)return l=m=>{let y=K("input",n,o,4),w=se("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:h,newPerm:c}=Wu(e.dims,i),p=q.areEqual(c,[2,3,1]),f=q.areEqual(c,[3,1,2]);if(h.length===2||p||f){o=p?[h[0],h[1]*h[2]]:f?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let m=16;return l=y=>{let w=K("a",n,o.length),b=se("output",n,s.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${m+1}>, ${m}>;
  ${y.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...he(o,s)]}},getShaderSource:l}}return l=m=>{let y=K("a",n,o.length),w=se("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Gu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...he(o,s)]}},getShaderSource:l}},Vu=(e,t)=>{Lu(e.inputs,t.perm),e.compute(dt(e.inputs[0],t.perm))},Hu=e=>Ne({perm:e.perm})}),ju,Ku,Yu,Xu,Zu,Qu,Ju,el,tl,nl,bt,rl,il,al,ol,sl,ul,ll,cl,dl,hl,K0=ee(()=>{we(),_e(),be(),ha(),Jt(),ju={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ku={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Yu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Zu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Qu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Ju=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},el=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},tl=(e,t)=>{let n=[];if(!el(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},nl=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=q.size(a),l=q.size(o),h=K("_A",n[0].dataType,s),c=se("output",i,a),p=64;u===1&&(p=256);let f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Yu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${ju[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ku[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Xu[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},bt=(e,t,n,r)=>{let i=e.inputs.length===1?n:da(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((f,m)=>m));let o=q.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=tl(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(dt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Zu(s.length,u.dims.length));let[h,c]=Qu(u.dims,s),p=h;i.keepDims&&(p=Ju(h,o)),e.compute(nl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},rl=(e,t)=>{bt(e,"ReduceMeanShared",t,"mean")},il=(e,t)=>{bt(e,"ReduceL1Shared",t,"l1")},al=(e,t)=>{bt(e,"ReduceL2Shared",t,"l2")},ol=(e,t)=>{bt(e,"ReduceLogSumExpShared",t,"logSumExp")},sl=(e,t)=>{bt(e,"ReduceMaxShared",t,"max")},ul=(e,t)=>{bt(e,"ReduceMinShared",t,"min")},ll=(e,t)=>{bt(e,"ReduceProdShared",t,"prod")},cl=(e,t)=>{bt(e,"ReduceSumShared",t,"sum")},dl=(e,t)=>{bt(e,"ReduceSumSquareShared",t,"sumSquare")},hl=(e,t)=>{bt(e,"ReduceLogSumShared",t,"logSum")}}),xt,pl,Gr,da,$t,fl,ml,gl,yl,wl,_l,bl,xl,$l,vl,vt,Sl,Ml,Tl,Il,El,kl,Cl,Al,Rl,Ol,ha=ee(()=>{we(),_e(),je(),be(),K0(),xt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},pl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Gr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,c=q.normalizeAxes(i,h),p=!s&&c.length===0;l.forEach((y,w)=>{p||c.indexOf(w)>=0?o&&u.push(1):u.push(y)});let f=u.length,m=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=K("_A",n[0].dataType,h),x=se("output",a,f),M=r(b,x,c),v=M[2];for(let T=0,E=0;T<h;T++)p||c.indexOf(T)>=0?(o&&E++,v=`for(var j${T}: u32 = 0; j${T} < ${l[T]}; j${T}++) {
                  ${M[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${b.indicesSet("input_indices",T,`j${T}`)}
                  ${v}
                }`):(w.push(`${b.indicesSet("input_indices",T,x.indicesGet("output_indices",E))};`),E++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${M[0]}       // init ops for reduce max/min
          ${M[1]}
          ${v}
          ${M[3]}
          ${M.length===4?x.setByOffset("global_idx","value"):M.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...he(l,u)]})}},da=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Ne({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},$t=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:da(i,n);e.compute(Gr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?pl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},fl=(e,t)=>{xt(e.inputs),$t(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},ml=(e,t)=>{xt(e.inputs),$t(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},gl=(e,t)=>{xt(e.inputs),$t(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},yl=(e,t)=>{xt(e.inputs),$t(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},wl=(e,t)=>{xt(e.inputs),$t(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},_l=(e,t)=>{xt(e.inputs),$t(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},bl=(e,t)=>{xt(e.inputs),$t(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},xl=(e,t)=>{xt(e.inputs),$t(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},$l=(e,t)=>{xt(e.inputs),$t(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},vl=(e,t)=>{xt(e.inputs),$t(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},vt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Sl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):rl(e,t)},Ml=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):il(e,t)},Tl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):al(e,t)},Il=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):ol(e,t)},El=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):sl(e,t)},kl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bl(e,t):ul(e,t)},Cl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xl(e,t):ll(e,t)},Al=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$l(e,t):cl(e,t)},Rl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vl(e,t):dl(e,t)},Ol=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):hl(e,t)}}),pa,Nl,zl,fa,Y0=ee(()=>{we(),je(),ha(),pa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Nl=(e,t)=>{pa(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Gr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},zl=(e,t)=>{pa(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Gr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},fa=e=>Ne(e)}),Bl,Wr,Pl,Dl,Ul,ur,Ll,Fl,ma=ee(()=>{we(),_e(),ia(),be(),Bl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=m+y,b=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:h,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Wr=(e,t,n)=>t&&e?`
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
    `,Pl=(e,t,n,r,i,a,o,s)=>{let u=He(o?1:a),l=64,h=a/u;h<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:c}],f=Qe(e.dataType,u),m=rt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let x=se("x",e.dataType,e.dims,u),M=[x],v=o?K("seq_lens",o.dataType,o.dims):void 0;v&&M.push(v);let T=s?K("total_sequence_length_input",s.dataType,s.dims):void 0;T&&M.push(T);let E=rt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...M)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Wr(v,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${x.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Dl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,f=c?[a.batchSize,p,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=He(a.headSize),b=a.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],T=c&&r&&q.size(r.dims)>0,E=["type","type"];T&&E.push("type"),i&&E.push("type"),s&&E.push("type"),u&&E.push("type");let k=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=A=>{let N=K("q",t.dataType,t.dims,w),U=K("key",n.dataType,n.dims,w),V=[N,U];if(T){let W=K("past_key",r.dataType,r.dims,w);V.push(W)}i&&V.push(K("attention_bias",i.dataType,i.dims));let L=s?K("seq_lens",s.dataType,s.dims):void 0;L&&V.push(L);let O=u?K("total_sequence_length_input",u.dataType,u.dims):void 0;O&&V.push(O);let H=se("output",t.dataType,h),Y=[H];c&&Y.push(se("present_key",t.dataType,f,w));let Q=rt(1,w),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${A.registerUniforms(ue).declareVariables(...V,...Y)}
  ${A.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Wr(L,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&c?`
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
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${H.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:v}),getShaderSource:S}},Ul=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,h],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),o&&M.push("type"),s&&M.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let T=E=>{let k=K("probs",t.dataType,t.dims),S=K("v",n.dataType,n.dims),A=[k,S];x&&A.push(K("past_value",r.dataType,r.dims));let N=o?K("seq_lens",o.dataType,o.dims):void 0;o&&A.push(N);let U=s?K("total_sequence_length_input",s.dataType,s.dims):void 0;s&&A.push(U);let V=[se("output",t.dataType,m)];c&&V.push(se("present_value",t.dataType,f));let L=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${E.registerUniforms(L).declareVariables(...A,...V)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Wr(N,U,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${k.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&c?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:T}},ur=(e,t,n,r,i,a,o,s,u,l,h=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),f=p>1?o:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&q.size(u.dims)>0?u:void 0,x=[t,n];f&&q.size(f.dims)>0&&x.push(f),b&&x.push(b),h&&x.push(h),c&&x.push(c);let M=e.compute(Dl(p,t,n,f,b,l,y,h,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Pl(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,h,c),{inputs:h&&c?[M,h,c]:[M],outputs:[]});let v=[M,r];m&&q.size(m.dims)>0&&v.push(m),h&&v.push(h),c&&v.push(c),e.compute(Ul(p,M,r,m,l,y,h,c),{inputs:v,outputs:p>1?[0,2]:[0]})},Ll=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let p=se("output_q",u[0].dataType,n),f=se("output_k",u[0].dataType,n),m=se("output_v",u[0].dataType,n),y=K("input",u[0].dataType,u[0].dims),w=K("weight",u[1].dataType,u[1].dims),b=K("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${c.registerUniforms(M).declareVariables(y,w,b,p,f,m)}
  ${c.mainStart([o,o,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Fl=(e,t)=>{let n=Bl(e.inputs,t),[r,i,a]=Ll(e,n);return ur(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Gl,Wl,ql,Vl,X0=ee(()=>{ht(),we(),_e(),je(),be(),Gl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Wl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?He(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=q.size(a)/o,l=r,h=l?a.length:a,c=K("x",e[0].dataType,e[0].dims,o),p=K("scale",e[1].dataType,e[1].dims,s),f=K("bias",e[2].dataType,e[2].dims,s),m=K("inputMean",e[3].dataType,e[3].dims,s),y=K("inputVar",e[4].dataType,e[4].dims,s),w=se("y",e[0].dataType,h,o),b=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let v=1;v<p.rank;v++)M+=`cIndices[${v}] = outputIndices[${v}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(c,p,f,m,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...he(a)]:[{type:12,data:u}]})}},ql=e=>Ne(e),Vl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=ql({...t,outputCount:r});if(Fe.webgpu.validateInputContent&&Gl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Wl(n,i))}}),Hl,jl,Kl,Z0=ee(()=>{_e(),be(),Hl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},jl=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,a=K("input",i,t,4),o=K("bias",i,[n],4),s=K("residual",i,t,4),u=se("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Kl=e=>{Hl(e.inputs),e.compute(jl(e.inputs))}}),Yl,Re,Xl,Zl,Ql,Jl,ec,tc,nc,rc,ic,ac,oc,sc,uc,lc,lr,cc,qr,dc,hc,pc,fc,mc,gc,yc,wc,_c,bc,xc,$c,vc,Sc,Mc,Tc,ga,Ic,ya,wa,Ec,kc,Cc,Ac,Rc,Oc,_a=ee(()=>{we(),_e(),je(),be(),Yl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=K("inputData",n,[s],4),h=se("outputData",r,[s],4),c=[{name:"vec_size",type:"u32"}];return o&&c.push(...o),`
      ${e.registerUniforms(c).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Re=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Yl(l,q.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},Xl=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},Zl=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},Ql=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},Jl=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},ec=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},tc=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},nc=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},rc=e=>Ne(e),ic=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},ac=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:n})},oc=(e,t)=>{let n=t||ac(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},sc=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},uc=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},lc=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},lr=e=>Ne(e),cc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},qr=(e="f32")=>`
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
}`,dc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,qr(t)))},hc=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},pc=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},fc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,qr(t)))},mc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},gc=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},yc=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},wc=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},_c=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},bc=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},xc=e=>Ne(e),$c=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},vc=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},Sc=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},Mc=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},Tc=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},ga=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Ic=e=>{e.compute(Re(e.inputs[0],"Tanh",ga))},ya=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ga("v")};
}
`,wa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Ec=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",wa,ya(t),void 0,e.inputs[0].dataType))},kc=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Cc=e=>{e.compute(Re(e.inputs[0],"Log","log"))},Ac=(e,t)=>`
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
`,Rc=e=>`quick_gelu_impl(${e})`,Oc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",Rc,Ac(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Nc,zc,Bc,Q0=ee(()=>{_e(),be(),_a(),Nc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},zc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=K("input",e[0].dataType,e[0].dims,4),r=K("bias",e[0].dataType,[e[0].dims[2]],4),i=se("output",e[0].dataType,t,4),a=q.size(t)/4,o=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${qr(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Bc=e=>{Nc(e.inputs),e.compute(zc(e.inputs))}}),Pc,Dc,St,Uc,Lc,Fc,Gc,Wc,qc,Vc,Hc,jc,Kc,J0=ee(()=>{we(),_e(),be(),Pc=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p,f;typeof s=="string"?p=f=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=se("outputData",h,r.length,4),y=K("aData",u,t.length,4),w=K("bData",l,n.length,4),b;if(i)if(a){let x=q.size(t)===1,M=q.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;x||M?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||T?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,v,T="")=>{let E=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${M}[${v}] = ${T}(${p(E,k)});
          `};h===9?b=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,m)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},Dc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(s,u),h=s,c=q.size(s),p=!1,f=!1,m=[l];if(l){let y=Wn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),c=q.size(h);let w=q.size(s)===1,b=q.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(M);let v=1;for(let T=1;T<h.length;T++){let E=s[s.length-T],k=u[u.length-T];if(E===k)v*=E;else break}v%4===0?(f=!0,p=!0):(w||b||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Pc(y,s,u,h,p,l,f,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(h)/4)},...he(s,u,h)]})}},St=(e,t,n,r,i,a)=>{e.compute(Dc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Uc=e=>{St(e,"Add",(t,n)=>`${t}+${n}`)},Lc=e=>{St(e,"Div",(t,n)=>`${t}/${n}`)},Fc=e=>{St(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Gc=e=>{St(e,"Mul",(t,n)=>`${t}*${n}`)},Wc=e=>{let t=K("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;St(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},qc=e=>{St(e,"Sub",(t,n)=>`${t}-${n}`)},Vc=e=>{St(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Hc=e=>{St(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},jc=e=>{St(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Kc=e=>{St(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Yc,Xc,Zc,Qc,Jc,ed,ey=ee(()=>{we(),_e(),je(),be(),Yc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Xc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Zc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Qc=(e,t,n,r)=>{let i=q.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=K(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...he(e[y].dims));h.push(...he(n));let c=se("output",r,n.length),p=c.indicesGet("indices",t),f=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,c)})()}

  ${Xc(a.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Zc(o,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:m}},Jc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);Yc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>q.size(s.dims)>0);e.compute(Qc(o,i,a,n[0].dataType),{inputs:o})},ed=e=>Ne({axis:e.axis})}),Sn,Mn,Tn,ba,In=ee(()=>{we(),_e(),Sn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Mn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Tn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ba=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[vu,Su];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),et,td,xa=ee(()=>{et=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},td=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nd,ty=ee(()=>{nd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),cr,$a,va=ee(()=>{we(),_e(),be(),In(),cr=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${ce(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,ce(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},$a=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],c=He(l),p=He(h),f=He(u),m=q.size(n)/c/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[q.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:h}];Mn(t,x),x.push(...he(w,o,s)),y&&x.push(...he(e[2].dims)),x.push(...he(b));let M=v=>{let T=la("batch_dims",e[0].dataType,w.length),E=K("a",e[0].dataType,o.length,p),k=K("b",e[1].dataType,s.length,c),S=se("output",e[0].dataType,b.length,c),A=Qe(S.type.tensor),N=Sn(t,S.type.value,A),U=[E,k],V="";if(y){let H=i?c:1;U.push(K("bias",e[2].dataType,e[2].dims.length,H)),V=`${i?`value += bias[col / ${H}];`:`value += ${S.type.value}(bias[row + i]);`}`}let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Tn(t,L);let O=()=>{let H=`var a_data: ${E.type.value};`;for(let Y=0;Y<p;Y++)H+=`
              let b_data${Y} = b[(b_offset + (k + ${Y}) * uniforms.N + col) / ${c}];`;for(let Y=0;Y<f;Y++){H+=`a_data = a[(a_offset + (row + ${Y}) * uniforms.K + k) / ${p}];`;for(let Q=0;Q<p;Q++)H+=`
            values[${Y}] = fma(${k.type.value}(a_data${p===1?"":`[${Q}]`}), b_data${Q}, values[${Y}]);
`}return H};return`
  ${v.registerUniforms(L).registerInternalVariables(T).declareVariables(...U,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${cr("a_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${cr("b_indices",k,k.rank-2,T.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${S.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${O()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${V}
      ${N}
      let cur_indices = ${S.type.indices}(batch, row + i, col);
      let offset = ${S.indicesToOffset("cur_indices")};
      ${S.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),rd,id,Sa,Ma,ad,Ta,od,Vr,Ia=ee(()=>{we(),_e(),be(),In(),va(),xa(),rd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,id=(e,t)=>e?`
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
        }`,Sa=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,c=i?a:u,p=h/t[0],f=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${h/p}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${rd(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
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
          ${p===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${id(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ma=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ad=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ta=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=c/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Ma(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
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

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ma(i,r)}
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
      ${ad(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${c}>, ${p}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${h}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},od=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Qe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${et(e,l)} {
      var value = ${et(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${cr("aIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${et(e,l)} {
      var value = ${et(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${cr("bIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${et(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${et(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Vr=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),c=q.size(h),p=o[o.length-2],f=o[o.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(c/b[2]/w[2])],M=y?4:1,v=[...u,p,f/M],T=v.length,E=[...l,f,m/M],k=E.length,S=[c,p,m/M],A=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];Mn(t,A),A.push(...he(h,v,E));let N=["rank","rank"],U=e.length>2;U&&(A.push(...he(e[2].dims)),N.push("rank")),A.push(...he(S));let V=L=>{let O=h.length,H=la("batchDims",e[0].dataType,O,1),Y=Qe(e[0].dataType),Q=K("a",e[0].dataType,T,M),ue=K("b",e[1].dataType,k,M),W=se("result",e[0].dataType,S.length,M),z=[Q,ue];if(U){let X=i?M:1;z.push(K("bias",e[2].dataType,e[2].dims.length,X))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Tn(t,R);let B=Qe(W.type.tensor),D=Sn(t,W.type.value,B),G=od(M,U,D,[H,Q,ue,W],i);return`
  ${L.registerUniforms(R).registerInternalVariables(H).declareVariables(...z,W)}
  ${G}
  ${y?Sa(w,b,Y,H):Ta(w,b,Y,H)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:V}}}),sd,ud,ny=ee(()=>{we(),Gt(),be(),In(),xa(),ty(),Ia(),sd=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},c=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
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
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",b=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${et(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(o)}
    }
    return resData;`,M=e?t&&r?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${et(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${et(o,l)}(0.0);`,v=e?r&&n?c(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(s)}
    }
    return ${et(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(s)}
    }
    return ${et(s,l)}(0.0);`,T=et(u,l),E=et(e?o:s,l),k=et(e?s:o,l),S=Sn(a,T,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?M:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?v:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${td(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ud=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/M[0]),Math.ceil(b/x[1]/M[1]),Math.ceil(c/x[2]/M[2])];Ie("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let T=y?l&&h%4!==0?3:4:1,E=x[1]*M[1],k=x[0]*M[0],S=Math.max(x[0]*T,x[1]),A=r%E===0,N=i%k===0,U=a%S===0,V=y?[T,4,4]:[1,1,1],L=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Mn(t,L),L.push(...he(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(L.push(...he(e[2].dims)),O.push("rank")),L.push(...he(n));let H=Y=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Tn(t,Q);let ue=y?4:1,W=Qe(e[0].dataType),z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${W}>`:W}) {
        result[flatIndex] = ${y?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=K("x",e[0].dataType,e[0].dims.length,T===3?1:T),B=K("w",e[1].dataType,e[1].dims.length,ue),D=[R,B],G=se("result",e[0].dataType,n.length,ue);if(o){let X=K("bias",e[2].dataType,e[2].dims.length,ue);D.push(X),z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${nd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Y.registerUniforms(Q).declareVariables(...D,G)}
        ${z}
        ${sd(l,A,N,U,o,t,V[0],V[1],V[2],W)}
        ${y?Sa(M,x,W,void 0,!l,S):Ta(M,x,W,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${A};${N};${U};${E};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:L}),getShaderSource:H}}}),ld,Ea,dr,cd,ka,dd,hd,pd,ry=ee(()=>{we(),Gt(),_e(),be(),In(),xa(),ld=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ea=e=>typeof e=="number"?[e,e,e]:e,dr=(e,t)=>t<=1?e:e+(e-1)*(t-1),cd=(e,t,n,r=1)=>{let i=dr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},ka=(e,t,n,r,i)=>{i==null&&(i=cd(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},dd=(e,t,n,r,i,a,o,s,u,l)=>{let h,c,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=ka([t,n,r,1],[s,u,l],1,[i,a,o],e);c=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=ka([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);c=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/a),f=Math.ceil(r/o);let m=(c-1)*i+s-t,y=(p-1)*a+u-n,w=(f-1)*o+l-r,b=Math.floor(m/2),x=m-b,M=Math.floor(y/2),v=y-M,T=Math.floor(w/2),E=w-T;h={top:M,bottom:v,left:T,right:E,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:p,outWidth:f}},hd=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,c;if(o==="channelsLast")[s,u,l,h,c]=e;else if(o==="channelsFirst")[s,c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,f,m,y]=t,[w,b,x]=Ea(n),[M,v,T]=Ea(r),E=dr(f,M),k=dr(m,v),S=dr(y,T),{padInfo:A,outDepth:N,outHeight:U,outWidth:V}=dd(i,u,l,h,w,b,x,E,k,S),L=a?p*c:p,O=[0,0,0,0,0];return o==="channelsFirst"?O=[s,L,N,U,V]:o==="channelsLast"&&(O=[s,N,U,V,L]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:c,outDepth:N,outHeight:U,outWidth:V,outChannels:L,padInfo:A,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:M,dilationHeight:v,dilationWidth:T,inShape:e,outShape:O,filterShape:t}},pd=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(ld(u.x.map(w=>n[w]))/s[0]),1,1];Ie("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,c=q.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Mn(t,p),p.push(...he(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...he(e[2].dims)),f.push("rank")),p.push(...he(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Tn(t,b);let x=1,M=Qe(e[0].dataType),v=K("x",e[0].dataType,e[0].dims.length,h),T=K("W",e[1].dataType,e[1].dims.length,x),E=[v,T],k=se("result",e[0].dataType,n.length,x),S="";if(m){let U=K("bias",e[2].dataType,e[2].dims.length,x);E.push(U),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?ce("coords",4,5):ce("coords",1,5)}];
        }`}let A=et(h,M),N=Sn(t,A,M);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...E,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${ce("coords",0,v.rank)};
              let d2 = ${o?ce("coords",v.rank-1,v.rank):ce("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${o?ce("coords",1,v.rank):ce("coords",2,v.rank)},
              ${o?ce("coords",2,v.rank):ce("coords",3,v.rank)},
              ${o?ce("coords",3,v.rank):ce("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?ce("uniforms.x_shape",1,v.rank):ce("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${o?ce("uniforms.x_shape",2,v.rank):ce("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${o?ce("uniforms.x_shape",3,v.rank):ce("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${o?ce("uniforms.x_shape",4,v.rank):ce("uniforms.x_shape",1,v.rank)};
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
                      ${o?`let xValues = vec4<f32>(
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
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
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
                      ${o?`let xValues = vec3<f32>(
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
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),fd,md,iy=ee(()=>{we(),_e(),be(),In(),fd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,c=u&&h>=4?He(l):1,p=q.size(n)/c,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Mn(t,f),f.push(...he(o,[s[0],s[1],s[2],s[3]/c]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...he([n[0],n[1],n[2],n[3]/c]));let y=w=>{let b=se("output",e[0].dataType,n.length,c),x=Qe(b.type.tensor),M=Sn(t,b.type.value,x),v=K("x",e[0].dataType,o.length),T=K("w",e[1].dataType,s.length,c),E=[v,T];i&&E.push(K("b",e[2].dataType,e[2].dims,c));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Tn(t,k);let S=u?`
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
            let xVal = ${v.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${v.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(k).declareVariables(...E,b)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${S}
    ${a}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},md=(e,t,n,r)=>{let i=e.length>2,a=He(n[3]),o=He(n[2]),s=q.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Mn(t,c),c.push(...he(u,l,h));let p=(o-1)*t.strides[1]+l[1],f=m=>{let y=se("output",e[0].dataType,h.length,a),w=Qe(y.type.tensor),b=Sn(t,y.type.value,w),x=K("x",e[0].dataType,u.length,a),M=K("w",e[1].dataType,l.length,a),v=[x,M];i&&v.push(K("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Tn(t,E),`
  ${m.registerUniforms(E).declareVariables(...v,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${p}>;
    var values: array<${y.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${M.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${T}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}}}),gd,Hr,yd,jr,Ca,Aa,wd,_d,Ra,ay=ee(()=>{_e(),ny(),ry(),Ia(),iy(),In(),va(),Jt(),gd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),c=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-h[f]+i[f])/i[f]));return c.splice(0,0,o),c.splice(a?3:1,0,l),c},Hr=[2,3,1,0],yd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},jr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Dr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ca=e=>{let t=ba(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Aa=(e,t,n,r)=>{let i=n.format==="NHWC",a=gd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let E=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(dt(t[1],Hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),E.push(k)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(md(E,n,a,r),{inputs:E}):e.compute(fd(E,n,a,r),{inputs:E});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],f=a[i?2:3],m=a[i?3:1],y=i&&h===s&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let E=a[0],k,S,A,N=[];if(i){let L=e.kernelCustomData.wT??e.compute(dt(t[1],Hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=L),y){let O=s*u*l;k=t[0].reshape([1,E,O]),S=L.reshape([1,O,m]),A=[1,E,m]}else k=t[0].reshape([E,s*u,l]),S=L.reshape([1,l,m]),A=[E,p*f,m];N.push(k),N.push(S)}else k=t[0].reshape([E,l,s*u]),S=t[1].reshape([1,m,l]),A=[E,m,p*f],N.push(S),N.push(k);o&&N.push(t[2]);let U=A[2],V=N[0].dims[N[0].dims.length-1];U<8&&V<8?e.compute($a(N,n,a,A,i,r),{inputs:N}):e.compute(Vr(N,n,a,A,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(dt(t[1],Hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];o&&x.push(t[2]);let M=i?p*f:m,v=i?m:p*f,T=h*c*l;e.compute(ud(x,n,a,M,v,T,o,w,r),{inputs:x})},wd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=jr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Aa(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},_d=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=jr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=hd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(pd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Ra=(e,t)=>{if(yd(e.inputs,t),e.inputs[0].dims.length===3)wd(e,t);else if(e.inputs[0].dims.length===5)_d(e,e.inputs,t);else{let n=jr(t,e.inputs);Aa(e,e.inputs,n)}}}),bd,oy=ee(()=>{we(),Gt(),_e(),be(),bd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?He(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/h)*h,f=u-p,m=a?He(l):1,y=a?l===1?h:m:1,w=q.size(i)/m,b=[Math.ceil(w/64),1,1];Ie("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],v=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],E=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:M},{type:12,data:v},{type:12,data:T},{type:12,data:E},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...he(e[0].dims,e[1].dims)];r&&(S.push(...he(e[2].dims)),x.push("rank")),S.push(...he(i));let A=N=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Qe(e[0].dataType),L=a?1:2,O=a?2:3,H=a?3:1,Y=K("W",e[1].dataType,e[1].dims.length,y),Q=K("Dy",e[0].dataType,e[0].dims.length,h),ue=[Q,Y];r&&ue.push(K("bias",e[2].dataType,[i[H]].length,m));let W=se("result",e[0].dataType,i.length,m),z=()=>{let D="";if(c)h===4?D+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${Y.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?D+=`
          dotProd = dotProd + dot(vec4<${V}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${V}>(${Y.getByOffset("w_offset")}, ${Y.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(D+=`
          dotProd = dotProd + dot(vec4<${V}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${V}>(${Y.getByOffset("w_offset")}, ${Y.getByOffset("w_offset + 1u")}, ${Y.getByOffset("w_offset + 2u")}, ${Y.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${a?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,h===1)D+=`
          let w_offset = ${Y.indicesToOffset(`${Y.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Y.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<h;G++)D+=`
            let wValue${G} = ${Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return D},R=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let D="";if(h===1){D+="dotProd = dotProd";for(let G=0;G<f;G++)D+=`
            + ${Q.getByOffset(`x_offset + ${G}`)} * ${Y.getByOffset(`w_offset + ${G}`)}`;D+=";"}else if(h===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);D+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${Y.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},B=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",H)};
            let r = ${W.indicesGet("outputIndices",L)};
            let c = ${W.indicesGet("outputIndices",O)};
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
              let dyR = (${V}(dyRCorner) + ${V}(wR)) / ${V}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${V}(dyCCorner) + ${V}(wC)) / ${V}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${V}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${Y.indicesToOffset(`${Y.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${z()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(U).declareVariables(...ue,W)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${B}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${m}${c}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:A}}}),xd,$d,vd,Oa,Sd,Md,Na,Td,Id,sy=ee(()=>{oy(),In(),Jt(),xd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,$d=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},vd=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,c=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-h-(s?1:0);m<h;++m,++y){let w=e[y],b=c?w*o[m]:l[m],x=xd(w,o[m],a[m],t[y],n[m],b);$d(x,r,a,m,m+h),c&&l.push(o[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-a[m]-a[m+h])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Oa=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}vd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},Sd=e=>{let t=ba(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:c,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Md=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Na=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(dt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(bd(a,n,r),{inputs:a})},Td=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Oa({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Na(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Id=(e,t)=>{if(Md(e.inputs,t),e.inputs[0].dims.length===3)Td(e,t);else{let n=Oa(t,e.inputs);Na(e,e.inputs,n)}}}),Ed,kd,Cd,uy=ee(()=>{we(),_e(),je(),be(),Ed=(e,t,n,r)=>{let i=q.size(t),a=t.length,o=K("input",e,a),s=se("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,a),h=c=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,f=ce("uniforms.input_shape","uniforms.axis",a),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...he(t,t)]}),getShaderSource:h}},kd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Ed(r,n,i,t),{inputs:[0]})},Cd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Ne({exclusive:t,reverse:n})}}),Ad,Rd,Od,Nd,zd,ly=ee(()=>{we(),_e(),je(),be(),Ad=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Rd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Od=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(o),p=c.dims.length,f=e.dataType,m=K("a",f,p),y=se("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Rd(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=q.size(x),v=c.dims,T=q.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...he(v,T)]}},getShaderSource:w}},Nd=(e,t)=>{Ad(e.inputs),e.compute(Od(e.inputs[0],t))},zd=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Kr,hr,za,Bd,Pd,Dd,Ud,Ba,Ld,Fd,Gd,cy=ee(()=>{we(),_e(),je(),be(),Kr="[a-zA-Z]|\\.\\.\\.",hr="("+Kr+")+",za="^"+hr+"$",Bd="("+hr+",)*"+hr,Pd="^"+Bd+"$",Dd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Ud=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Pd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(za)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(hr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Kr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(za))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Kr,"g")),l=new Dd(r);return u==null||u.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<o.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,c+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},Ba=e=>e+"_max",Ld=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>K(`input${h}`,t,l)),a=q.size(r),o=se("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],c="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,T)=>{var E;if(n.rhs.symbolToIndices.has(T)){let k=(E=n.rhs.symbolToIndices.get(T))==null?void 0:E[0];k!==void 0&&n.lhs.forEach((S,A)=>{if(v.inputIndices.includes(A)){let N=S.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(U=>{h.push(`${i[A].indicesSet(`input${A}Indices`,U,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let A=k.symbolToIndices.get(T);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(N=>{m.push(`${i[S].indicesSet(`input${S}Indices`,N,`${T}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Ba(T)}; ${T}++) {`),w.push("}")});let M=x?[...h,`let sum = ${i.map((v,T)=>v.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...h,p,...y,...m,c,...b,f,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Ba(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((v,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((c,p)=>[...he(c)]).reduce((c,p)=>c.concat(p),l);return h.push(...he(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Fd=(e,t)=>{let n=new Ud(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Ld(i,e.inputs[0].dataType,n,r))},Gd=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),Wd,Pa,qd,Vd,Hd,dy=ee(()=>{we(),_e(),be(),Wd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Pa=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},qd=(e,t)=>e.length>t.length?Pa(e,t):Pa(t,e),Vd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=qd(t,n),i=e[0].dataType,a=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/s),l=c=>{let p=K("input",i,t.length,o),f=se("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
          let outputIndices${b} = ${f.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${p.broadcastedIndicesToOffset(`outputIndices${b}`,f)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${w}[${b}] = ${x}(${p.getByOffset(`index${b}`)}[component${b}]);
        `;m=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${o}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},h=[{type:12,data:u},...he(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Hd=e=>{Wd(e.inputs),e.compute(Vd(e.inputs),{inputs:[0]})}}),jd,Kd,hy=ee(()=>{we(),_e(),be(),_a(),jd=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,a=o=>{let s=K("x",t,[1],4),u=K("bias",t,[1],4),l=se("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${ya(rt(t))}

    ${o.mainStart(qn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",wa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/qn/4)}})}},Kd=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?Ec(e):e.compute(jd(e.inputs))}}),Yd,Xd,Zd,Qd,py=ee(()=>{we(),_e(),je(),be(),Yd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Xd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...he(e[0].dims,e[1].dims,o)],c=p=>{let f=K("data",e[0].dataType,e[0].dims.length,u),m=K("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,o.length,u),w=x=>{let M=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let T=0;T<M;T++)v+=`${M>1?`indicesIndices${x}[${T}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${T}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let T=0,E=0;T<i;T++)T===a?(v+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = u32(idx${x});`,E+=M):(v+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${E}]`:`outputIndices${x}`};`,E++);return v},b;if(e[0].dataType===9){let x=(M,v,T="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${f.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${M}[${v}] = ${T}(${f.getByOffset(`index${v}`)}[component${v}]);
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
      let value = ${f.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},Zd=e=>Ne({axis:e.axis}),Qd=(e,t)=>{let n=e.inputs;Yd(n),e.compute(Xd(e.inputs,t))}}),Jd,eh,th,fy=ee(()=>{we(),_e(),be(),Jd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...he(t.dims,h));let c=p=>{let f=K("indices_data",t.dataType,t.dims.length),m=se("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(w).declareVariables(...y)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},eh=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=q.sizeToDimension(a,a.length-1),u=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),h=q.sizeFromDimension(r,t.batchDims),c=s/l,p=new Array(o),f=u;for(let v=0;v<o;++v)p[o-1-v]=f,f*=r[t.batchDims+o-1-v];let m=Jd(e,n[1],p,t.batchDims,r,s,c,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=q.size(w),x=[{type:12,data:b},{type:12,data:u},...he(n[0].dims,m.dims,w)],M=v=>{let T=K("data",n[0].dataType,n[0].dims.length),E=K("slice_offsets",12,m.dims.length),k=se("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,E,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},th=e=>({batchDims:e.batch_dims,cacheKey:""})}),nh,rh,ih,ah,my=ee(()=>{we(),_e(),je(),be(),nh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},rh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=q.size(s),l=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...he(...e.map((f,m)=>f.dims),s)],p=f=>{let m=K("data",e[0].dataType,e[0].dims.length),y=K("inputIndices",e[1].dataType,e[1].dims.length),w=K("scales",e[2].dataType,e[2].dims.length),b=e.length>3?K("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=se("output",l,s.length),M=[m,y,w];b&&M.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms(v).declareVariables(...M,x)}
        ${f.mainStart()}
        let output_indices = ${x.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${x.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${x.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${x.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},ih=(e,t)=>{let n=e.inputs;nh(n,t),e.compute(rh(e.inputs,t))},ah=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),oh,sh,uh,lh,gy=ee(()=>{we(),_e(),je(),be(),oh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},sh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=q.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=q.size(l),c=K("input",r,i),p=K("indicesInput",o,a.length),f=se("output",r,l.length),m=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return m.push(...he(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},uh=e=>Ne({axis:e.axis}),lh=(e,t)=>{let n=e.inputs;oh(n),e.compute(sh(e.inputs,t))}}),ch,dh,hh,ph,yy=ee(()=>{we(),_e(),be(),ch=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},dh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=$u.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),c=!0,p=q.size(s),f=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...he(e[2].dims)),m.push("rank")),f.push(...he(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",v=K("a",e[0].dataType,e[0].dims),T=K("b",e[1].dataType,e[1].dims),E=v.type.value,k=null,S=[v,T];e.length===3&&(k=K("c",e[2].dataType,e[2].dims.length),S.push(k));let A=se("output",e[0].dataType,s.length);S.push(A);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(N).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${E}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=K("a",e[0].dataType,e[0].dims),M=K("b",e[1].dataType,e[1].dims),v=null,T=[x,M];e.length===3&&(v=K("c",e[2].dataType,e[2].dims.length),T.push(v));let E=se("output",e[0].dataType,s.length);T.push(E);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",A="";t.transA&&t.transB?(A=`
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,S="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(A=`
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,S="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(A=`
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(A=`
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
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,S="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(k).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${A}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${S}
      }
      workgroupBarrier();
    }

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},hh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ph=(e,t)=>{ch(e.inputs),e.compute(dh(e.inputs,t))}}),At,Wt,En,kn,fh,mh,gh,yh,wh,_h,bh,xh,$h,vh,wy=ee(()=>{we(),_e(),je(),be(),[At,Wt,En,kn]=[0,1,2,3],fh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},mh=`
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
`,gh=e=>`
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
`,yh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,wh=e=>`
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
`,_h=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${At}] = batch;
     indices[${Wt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${En}] = u32(r);
            indices[${kn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${En}] = u32(clamp(r, 0, H - 1));
          indices[${kn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${En}] = gs_reflect(r, border[1], border[3]);
          indices[${kn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,bh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${At}], indices[${Wt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${At}], indices[${Wt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${At}], indices[${Wt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${At}], indices[${Wt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${At}], indices[${Wt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${At}], indices[${Wt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,xh=(e,t)=>{let n=K("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=K("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[At,Wt,En,kn]=[0,3,1,2]);let o=se("output",e[0].dataType,a.length),s=n.type.value,u=q.size(a),l=[{type:12,data:u},...he(e[0].dims,r,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${mh}
  ${gh(s)}
  ${yh(t)}
  ${wh(t)}
  ${_h(n,s,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${En}]);
      let W_in = i32(uniforms.x_shape[${kn}]);

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

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${At}], indices[${En}], indices[${kn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${bh(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=q.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},$h=(e,t)=>{fh(e.inputs),e.compute(xh(e.inputs,t))},vh=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),it,Sh,Mh,Da,Th,pr,Ih,Eh=ee(()=>{we(),_e(),je(),ia(),ma(),be(),Jt(),it=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Sh=(e,t)=>{let n=e[0],r=it(e,1),i=it(e,2),a=it(e,3),o=it(e,4),s=it(e,5),u=it(e,6),l=it(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=c,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&q.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(o&&q.size(o.dims)>0){M=8;let k=o.dims;throw k.length===1?k[0]===h?M=1:k[0]===3*h+2&&(M=3):k.length===2&&k[0]===h&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,T=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],v=!0}}let E=!1;if(o&&q.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==c||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:E,passPastInKv:v,qkvFormat:b}},Mh=e=>Ne({...e}),Da=Ne({perm:[0,2,1,3]}),Th=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=q.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=c=>{let p=se("qkv_with_bias",t.dataType,s),f=K("qkv",t.dataType,s),m=K("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},pr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&q.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Th(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(dt(u,Da.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(dt(u,Da.perm),{inputs:[u],outputs:[-1]})[0]},Ih=(e,t)=>{let n=Sh(e.inputs,t),r=e.inputs[0],i=it(e.inputs,1),a=it(e.inputs,2),o=it(e.inputs,3),s=it(e.inputs,4),u=it(e.inputs,5),l=it(e.inputs,6),h=it(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=pr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(c)return ur(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let f=pr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=pr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);ur(e,p,f,m,s,void 0,l,h,u,n)}}),kh,Ch,Ah,Rh,Ua,Oh,Nh,zh=ee(()=>{we(),_e(),je(),be(),kh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ch=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Ne({numOutputs:r,axis:t.axis,splitSizes:n})},Ah=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ce("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Rh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ua=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,a=q.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=K("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],c=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;let y=n.slice();y[a]=t.splitSizes[m],h.push(y),o[m]=se(`output${m}`,i,y.length),l.push({dims:h[m],dataType:e[0].dataType})}p.push({type:12,data:u},...he(n,...h));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Ah(u.length)}
  ${Rh(o)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ce("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Oh=(e,t)=>{kh(e.inputs);let n=e.inputs.length===1?t:Ch(e.inputs,t);e.compute(Ua(e.inputs,n),{inputs:[0]})},Nh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Ne({axis:t,numOutputs:r,splitSizes:n})}}),Bh,Yr,Ph,Dh=ee(()=>{we(),_e(),je(),be(),Bh=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!q.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],c=q.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:c/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Yr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],c=i===0?h*2:l/r,p=new Array(o,u,l/c,c-h),f=q.computeStrides(p),m=[{type:1,data:a},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,c,u*c,1]}):[],...he(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=K("input",e[0].dataType,e[0].dims.length),x=K("position_ids",e[1].dataType,e[1].dims.length),M=K("cos_cache",e[2].dataType,e[2].dims.length),v=K("sin_cache",e[3].dataType,e[3].dims.length),T=se("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,M,v,T)}

        ${w.mainStart(qn)}
          let half_rotary_emb_dim = uniforms.${M.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",se("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${b.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/qn)},programUniforms:m})}},Ph=(e,t)=>{Bh(e.inputs,t),e.compute(Yr(e.inputs,t))}}),Uh,Lh,La,Fh,Gh,_y=ee(()=>{je(),we(),ma(),Eh(),zh(),Jt(),Dh(),be(),Uh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);f&&(h=m*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,M=!1,v=t.kvNumHeads?m*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],M=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=T.dims.reduce((k,S)=>k*S,1);if(E!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${E}.`);for(let k=0;k<T.dims.length;k++)if(T.dims[k]!==1&&T.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${T.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},Lh=Ne({perm:[0,2,1,3]}),La=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(dt(r,Lh.perm),{inputs:[r],outputs:[-1]})[0]),r},Fh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let c=K("seq_lens",n.dataType,n.dims),p=K("total_seq_lens",r.dataType,r.dims),f=se("pos_ids",i,o),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(m).declareVariables(c,p,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
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
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Gh=(e,t)=>{var v;let n=Uh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Ne({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,f,m]=!i&&!a?e.compute(Ua([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let T=e.compute(Fh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],E=e.inputs[7],k=e.inputs[8],S=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[p,T,E,k],N=[-1];y=e.compute(Yr(A,S),{inputs:A,outputs:N})[0],A.splice(0,1,f);let U=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Yr(A,U),{inputs:A,outputs:N})[0]}let b=pr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=La(e,t.doRotary?w:f,n),M=La(e,m,n);ur(e,b,x,M,void 0,void 0,o,s,void 0,n,u,l)}}),Fa,Wh,qh,Vh,by=ee(()=>{we(),_e(),Jt(),be(),Fa=(e,t,n,r,i,a,o,s)=>{let u=He(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,c=i*o,p=64;c===1&&(p=256);let f=[i,o,a/u],m=[i,o,2],y=["rank","type","type"],w=[];w.push(...he(f,m));let b=x=>{let M=K("x",t.dataType,3,u),v=K("scale",n.dataType,n.dims),T=K("bias",r.dataType,r.dims),E=se("output",1,3,2),k=[M,v,T,E];return`
  var<workgroup> workgroup_shared : array<${h}, ${p}>;
  const workgroup_size = ${p}u;
  ${x.declareVariables(...k)}
  ${x.mainStart(p)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${M.get("batch","channel","h")});
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
      let sum_final = ${Qt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Qt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Wh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=q.sizeFromDimension(r,a),l=He(u),h=q.size(i)/l,c=Fa(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],f=[o,s],m=["type","none"],y=w=>{let b=K("x",t[0].dataType,p.length,l),x=K("scale_shift",1,f.length,2),M=se("output",t[0].dataType,p.length,l),v=[b,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...he(p,f,p)]}),getShaderSource:y},{inputs:[t[0],c]})},qh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=q.sizeFromDimension(r,1)/o,u=He(o),l=q.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],c=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(dt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=Fa(e,m,t[1],t[2],a,s,o,n.epsilon),w=b=>{let x=Qe(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${S}))`;case 2:return`vec2<${x}>(${A}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${A}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=K("input",t[0].dataType,t[0].dims,u),E=se("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:w},{inputs:[t[0],y]})},Vh=(e,t)=>{t.format==="NHWC"?qh(e,e.inputs,t):Wh(e,e.inputs,t)}}),Hh,jh,Kh,xy=ee(()=>{we(),_e(),be(),Hh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},jh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),h=q.sizeFromDimension(i,u),c=q.size(a.dims),p=o?q.size(o.dims):0;if(c!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let f=[];for(let T=0;T<i.length;++T)T<u?f.push(i[T]):f.push(1);let m=He(h),y=["type","type"],w=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/m)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,x=n>2,M=T=>{let E=Qe(e[0].dataType),k=[K("x",e[0].dataType,e[0].dims,m),K("scale",a.dataType,a.dims,m)];o&&k.push(K("bias",o.dataType,o.dims,m)),k.push(se("output",e[0].dataType,s,m)),b&&k.push(se("mean_data_output",1,f)),x&&k.push(se("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(S).declareVariables(...k)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ua("f32",m)};
    var mean_square_vector = ${ua("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Vn(E,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Qt("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Qt("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Vn(E,m,"x[j + offset]")};
      let f32scale = ${Vn(E,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Vn(E,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return b&&v.push({dims:f,dataType:1}),x&&v.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},Kh=(e,t)=>{Hh(e.inputs),e.compute(jh(e.inputs,t,e.outputCount))}}),Yh,Xh,$y=ee(()=>{_e(),va(),Ia(),Yh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Xh=e=>{Yh(e.inputs);let t=Wn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute($a(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(Vr(h,{activation:""},t,l),{inputs:h})}else e.compute(Vr(e.inputs,{activation:""},t))}}}),Zh,Qh,Jh,ep,tp,vy=ee(()=>{we(),_e(),je(),be(),Zh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(q.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},Qh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=He(t.k),p=He(l),f=He(o),m=s.concat([i,o]),y=i>1&&o/f%2===0?2:1,w=q.size(m)/f/y,b=64,x=[],M=[u,i,a/c],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),x.push(...he(M)),x.push(...he(v)),x.push(...he(e[2].dims)),e.length===4&&x.push(...he(q.convertShape(e[3].dims)));let T=[u,i,o/f];x.push(...he(T));let E=k=>{let S=M.length,A=K("a",e[0].dataType,S,c),N=K("b",12,v.length,p),U=K("scales",e[2].dataType,e[2].dims.length),V=[A,N,U],L=e.length===4?K("zero_points",12,e[3].dims.length):void 0;L&&V.push(L);let O=T.length,H=se("output",e[0].dataType,O,f),Y=Qe(e[0].dataType),Q=(()=>{switch(c){case 1:return`array<${Y}, 8>`;case 2:return`mat4x2<${Y}>`;case 4:return`mat2x4<${Y}>`;default:throw new Error(`${c}-component is not supported.`)}})(),ue=Math.floor(32/t.bits),W=Math.floor(ue/8),z=()=>{let D="";for(let G=0;G<W;G++){let X=G*t.bits*4,ie=X+t.bits;D+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${Q};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/c}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${A.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let te=0;te<f*y;te++)D+=`
            b_value = ${p===1?`b${te}_data`:`b${te}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${X}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ie}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(ye,Te)=>`${Y}(b_value_lower[${Te}]), ${Y}(b_value_upper[${Te}])`).join(", ")});
            b_dequantized_values = ${c===1?`${Q}(${Array.from({length:8},(ye,Te)=>`(b_quantized_values[${Te}] - ${L?`zero_point${te}`:"zero_point"}) * scale${te}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${L?`zero_point${te}`:"zero_point"}`).join(",")})) * scale${te};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(te/f)}]${f>1?`[${te%f}]`:""} += ${Array.from({length:8/c},(ye,Te)=>`${c===1?`a_data${G>0?G:""}[${Te}] * b_dequantized_values[${Te}]`:`dot(a_data${G>0?G:""}[${Te}], b_dequantized_values[${Te}])`}`).join(" + ")};
          `}return D},R=()=>{let D=`
            var col_index = col * ${f};
            ${L?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Y}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<f*y;G++)D+=`
            let scale${G} = ${U.getByOffset("col_index * nBlocksPerCol + block")};
            ${L?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${L.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${Y}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},B=()=>{let D=`col_index = col * ${f};`;for(let G=0;G<f*y;G++)D+=`
            let b${G}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,D};return`
        var<workgroup> workgroup_shared: array<${H.type.value}, ${y*b}>;
        ${k.declareVariables(...V,H)}
        ${k.mainStart([b,1,1])}
          let output_indices = ${H.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${R()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${B()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${z()}
                word_offset += ${ue/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${H.type.value} = ${H.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${H.setByIndices(`${H.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:E}},Jh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=He(t.k),p=He(l),f=s.concat([i,o]),m=128,y=o%8===0?8:o%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,M=x/c,v=x/t.blockSize,T=q.size(f)/y,E=[],k=[u,i,a/c],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),E.push(...he(k)),E.push(...he(S)),E.push(...he(e[2].dims)),e.length===4&&E.push(...he(q.convertShape(e[3].dims)));let A=[u,i,o];E.push(...he(A));let N=U=>{let V=k.length,L=K("a",e[0].dataType,V,c),O=K("b",12,S.length,p),H=K("scales",e[2].dataType,e[2].dims.length),Y=[L,O,H],Q=e.length===4?K("zero_points",12,e[3].dims.length):void 0;Q&&Y.push(Q);let ue=A.length,W=se("output",e[0].dataType,ue),z=Qe(e[0].dataType),R=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${L.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${w}>, ${y}>;
        ${U.declareVariables(...Y,W)}
        ${U.mainStart([w,y,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${M};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${M}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${L.getByIndices(`${L.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${L.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${H.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let B=Math.floor(b/8),D="";for(let G=0;G<B;G++){let X=G*t.bits*4,ie=X+t.bits;D+=`
              ${R()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${X}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ie}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${z}>(${Array.from({length:4},(te,ye)=>`${z}(b_value_lower[${ye}]), ${z}(b_value_upper[${ye}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(te,ye)=>`${`dot(a_data${ye}, b_dequantized_values[${ye}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return D})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${W.setByIndices(`${W.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:h}],dispatchGroup:{x:T},programUniforms:E}),getShaderSource:N}},ep=(e,t)=>{Zh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Jh(e.inputs,t)):e.compute(Qh(e.inputs,t))},tp=e=>Ne(e)}),np,rp,ip,ap,op,sp,up,lp,cp,Sy=ee(()=>{we(),_e(),be(),np=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},rp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ce("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ce("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ce("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},ip=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ce("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ce("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ce("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ce("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ap=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ce("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ce("uniforms.x_shape",i,t)})) {
                  k = i32(${ce("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ce("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},op=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ce("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ce("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ce("uniforms.x_shape",i,t)})) {
                  k -= i32(${ce("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ce("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},sp=(e,t,n)=>{switch(n.mode){case 0:return rp(e,t,n.pads.length);case 1:return ip(e,t,n.pads.length);case 2:return ap(e,t,n.pads.length);case 3:return op(e,t,n.pads.length);default:throw new Error("Invalid mode")}},up=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...he(e[0].dims,n));let s=["rank"],u=l=>{let h=se("output",e[0].dataType,n.length),c=K("x",e[0].dataType,r.length),p=c.type.value,f=sp(h,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:a}),getShaderSource:u}},lp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},cp=(e,t)=>{np(e.inputs);let n=lp(e.inputs,t);e.compute(up(e.inputs,n),{inputs:[0]})}}),fr,Ga,Wa,qa,Va,dp,hp,Ha,ja,pp,fp,Ka,mp,gp,Ya,yp,wp,_p,bp,My=ee(()=>{ht(),we(),_e(),be(),fr=e=>{if(Fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ga=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Dr.adjustPoolAttributes(n,i,o,s,u,l);let h=Dr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[c,r?p:h]},Wa=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),a.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},qa=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p=i.format==="NHWC",f=t.type.value,m=se("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(h?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let M=n-(p?3:2);c?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${M}] < 0 || xIndices[${M}] >= uniforms.x_shape[${M}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                `,b=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${s});
              var pad = 0;
              ${w}
              ${y}
              ${b}
              ${o}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,b="";return l?b=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${f}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ce("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ce("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ce("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${ce("uniforms.pads","j - 2u",w)};
                  ${b}
              }
              ${o}

              output[global_idx] = value;
            }`}},Va=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,dp=e=>`${Va(e)};${e.countIncludePad}`,hp=e=>`${Va(e)};${e.storageOrder};${e.dilations}`,Ha=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ja=(e,t,n,r)=>{let[i,a]=Ga(t,r,n),o=K("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,c,p,f,m]=Wa(a,i);h.push(...he(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:w=>qa(w,o,t.dims.length,a.length,i,u,l,0,c,p,f,m)}},pp=e=>{let t=e.count_include_pad!==0,n=Ha(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:dp(r)}},fp=(e,t)=>{fr(e.inputs),e.compute(ja("AveragePool",e.inputs[0],!1,t))},Ka={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},mp=e=>{let t=e.format;return{format:t,...Ka,cacheKey:t}},gp=(e,t)=>{fr(e.inputs),e.compute(ja("GlobalAveragePool",e.inputs[0],!0,t))},Ya=(e,t,n,r)=>{let[i,a]=Ga(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=K("x",t.dataType,t.dims.length),l=["rank"],[h,c,p,f,m]=Wa(a,i);return h.push(...he(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:y=>qa(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,c,p,f,m)}},yp=(e,t)=>{fr(e.inputs),e.compute(Ya("MaxPool",e.inputs[0],!1,t))},wp=e=>{let t=e.storage_order,n=e.dilations,r=Ha(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:hp(i)}},_p=e=>{let t=e.format;return{format:t,...Ka,cacheKey:t}},bp=(e,t)=>{fr(e.inputs),e.compute(Ya("GlobalMaxPool",e.inputs[0],!0,t))}}),xp,$p,vp,Sp,Ty=ee(()=>{we(),_e(),je(),be(),xp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},$p=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=q.size(a),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(q.size(c.dims)/4)]:c.dims:void 0,f=h.length===0||h.length===1&&h[0]===1,m=f===!1&&h.length===1,y=He(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,M=K("input",u?12:r,l.length,x),v=K("scale",o,h.length),T=c?K("zero_point",u?12:r,p.length):void 0,E=se("output",o,a.length,b),k=[M,v];T&&k.push(T);let S=[l,h];c&&S.push(p);let A=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...he(...S,a)],N=U=>{let V=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${U.registerUniforms(V).declareVariables(...k,E)}
      ${U.mainStart()}
          ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?f?u?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:m?u?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:A})}},vp=(e,t)=>{xp(e.inputs,t),e.compute($p(e.inputs,t))},Sp=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),Mp,Tp,Ip,Iy=ee(()=>{ht(),we(),be(),Mp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Tp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...he(a)],u=l=>{let h=se("output",r,a.length),c=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Ip=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Fe.webgpu.validateInputContent&&Mp(t,n,r),e.compute(Tp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Ep,kp,Cp,Ap,Ey=ee(()=>{we(),_e(),je(),be(),Ep=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},kp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(q.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=q.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...he(e[1].dims,e[2].dims,i)],h=c=>{let p=K("indices",e[1].dataType,e[1].dims.length),f=K("updates",e[2].dataType,e[2].dims.length,a),m=t.reduction!=="none"&&t.reduction!==""?Pu("output",e[0].dataType,i.length):se("output",e[0].dataType,i.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,f,m)}
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
    ${Ep(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},Cp=e=>Ne({reduction:e.reduction}),Ap=(e,t)=>{e.compute(kp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Rp,Op,Np,Xa,zp,Bp,Pp,Dp,Up,Lp,Fp,Gp,Za,Wp,qp,Vp,Hp,jp,Kp,Yp,ky=ee(()=>{we(),_e(),je(),be(),Rp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Op=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Np=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Rp(r,t),t.axes.length>0&&Op(r,t.axes,l).forEach((h,c)=>r[c]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Xa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,zp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Xa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Xa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Bp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Pp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Dp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Up=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Lp=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ce("uniforms.scales","i",r)};
        var roi_low = ${ce("uniforms.roi","i",i)};
        var roi_hi = ${ce("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ce("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ce("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Fp=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ce("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ce("uniforms.roi","i",a)};
          var roi_hi = ${ce("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ce("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ce("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,Gp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ce("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Za=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Wp=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Za(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:"0"};
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
    }`},qp=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[c,p]=h?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===c?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${f} = originalIdx + ${f}(i);
          if (${w} < 0 || ${w} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${u};`:`${w} = max(0, min(${w}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
          data[i + 1] = ${y===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(c)};
    ${m(p)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Vp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Za(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${o}];
      var height:${h} = originalIndices[${s}];
      var width:${h} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:"0"};

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
    }`},Hp=(e,t,n,r,i,a)=>{let o=e.dims,s=Pp(a,t.axes,o.length),u=Dp(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Up(o,l,t)));let h=se("output",e.dataType,u.length),c=K("input",e.dataType,o.length),p=q.size(u),f=o.length===u.length&&o.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=c.type.value,b=x=>`
      ${f?"":`
      ${zp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Gp(c,o)};
              ${Bp(t.nearestMode,n,w)};
              ${Fp(c,h,o,u,l.length,s.length,m)};
              `;case"linear":return`
              ${Lp(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Wp(c,h,o,m,y)}`;if(o.length===3||o.length===5)return`${Vp(c,h,o,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${qp(c,h,o,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(c,h)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...he(o,u)]})}},jp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Kp=(e,t)=>{let n=[],r=[],i=[],a=jp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Np(e.inputs,t,a,n,r,i),e.compute(Hp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Yp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Xp,Zp,Qp,Cy=ee(()=>{we(),_e(),be(),Xp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Zp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=q.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=He(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=T=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[K("x",e[0].dataType,e[0].dims,b),K("skip",e[1].dataType,e[1].dims,b),K("gamma",e[2].dataType,e[2].dims,b)];c&&k.push(K("beta",e[3].dataType,e[3].dims,b)),p&&k.push(K("bias",e[4].dataType,e[4].dims,b)),k.push(se("output",e[0].dataType,s,b)),f&&k.push(se("mean_output",1,h)),m&&k.push(se("inv_std_output",1,h)),y&&k.push(se("input_skip_bias_sum",e[0].dataType,s,b));let S=Qe(e[0].dataType),A=Qe(1,b);return`

      ${T.registerUniforms(E).declareVariables(...k)}
      var<workgroup> sum_shared : array<${A}, ${w}>;
      var<workgroup> sum_squared_shared : array<${A}, ${w}>;

      ${T.mainStart([w,1,1])}
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
          let bias_value = ${p?"bias[offset1d + i]":S+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Vn(S,b,"value")};
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
        let mean = ${Qt("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Qt("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:h,dataType:1}),n>2&&v.push({dims:h,dataType:1}),n>3&&v.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((T,E)=>"type")},getShaderSource:M,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Qp=(e,t)=>{Xp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Zp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Jp,mr,ef,Qa,tf,nf,rf,af,Ay=ee(()=>{we(),_e(),je(),be(),Jp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},mr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},ef=(e,t)=>{if(e.length>1){let n=mr(e,1),r=mr(e,2),i=mr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ne({starts:n,ends:r,axes:i})}else return t},Qa=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},tf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ce("uniforms.input_shape","i",n.length)};
            let steps_i = ${ce("uniforms.steps","i",n.length)};
            let signs_i = ${ce("uniforms.signs","i",n.length)};
            let starts_i = ${ce("uniforms.starts","i",n.length)};
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
      }`,nf=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=mr(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,x)=>Qa(b,x,n,i,a)),s=t.ends.map((b,x)=>Qa(b,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,x,M)=>{if(b<0){let v=(s[x]-o[x])/b,T=o[x],E=T+v*a[x];o[x]=E,s[x]=T,M[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let h={dims:l,dataType:e[0].dataType},c=se("output",e[0].dataType,l.length),p=K("input",e[0].dataType,e[0].dims.length),f=q.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:f},{type:12,data:o},{type:6,data:u},{type:12,data:a},...he(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,c)}
        ${tf(p,c,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},rf=(e,t)=>{Jp(e.inputs,t);let n=ef(e.inputs,t);e.compute(nf(e.inputs,n),{inputs:[0]})},af=e=>{let t=e.starts,n=e.ends,r=e.axes;return Ne({starts:t,ends:n,axes:r})}}),of,sf,uf,lf,Ry=ee(()=>{we(),_e(),je(),Jt(),be(),of=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},sf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),a=r.length,o=q.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(k,S)=>S),l[o]=a-1,l[a-1]=o,u=e.compute(dt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,c=h[a-1],p=i/c,f=He(c),m=c/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=K("x",u.dataType,u.dims,f),x=se("result",u.dataType,u.dims,f),M=b.type.value,v=Qe(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,T=k=>`
      var<workgroup> rowMaxShared : ${M};
      var<workgroup> rowSumShared : ${M};
      var<workgroup> threadShared : array<${M}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${M} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${M}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${k.registerUniform("packedCols","i32").declareVariables(b,x)}
      ${k.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${v}
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
          rowMaxShared = ${M}(${w("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${M}(0.0);
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
          rowSumShared = ${M}(${Qt("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:T},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(dt(E,l),{inputs:[E]})},uf=(e,t)=>{of(e.inputs),sf(e,t)},lf=e=>Ne({axis:e.axis})}),Ja,cf,df,hf,pf,Oy=ee(()=>{we(),_e(),be(),Ja=e=>Array.from(e.getBigInt64Array(),Number),cf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ja(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},df=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},hf=(e,t)=>{let n=e[0].dims,r=t??Ja(e[1]),i=df(n,r),a=q.size(i),o=e[0].dataType,s=K("input",o,n.length),u=se("output",o,i.length),l=h=>`
      const inputShape = ${s.indices(...n)};
      ${h.registerUniform("output_size","u32").declareVariables(s,u)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...he(e[0].dims,i)]}),getShaderSource:l}},pf=e=>{cf(e.inputs),e.compute(hf(e.inputs),{inputs:[0]})}}),ff,mf,gf,Ny=ee(()=>{we(),_e(),be(),ff=(e,t,n,r,i)=>{let a=se("output_data",i,n.length,4),o=K("a_data",t[1].dataType,t[1].dims.length,4),s=K("b_data",t[2].dataType,t[2].dims.length,4),u=K("c_data",t[0].dataType,t[0].dims.length,4),l,h=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${a.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,a)};
            let offset_b${f} = ${s.broadcastedIndicesToOffset(`output_indices${f}`,a)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,a)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${m}(${h(y,w,b)});
          `};i===9?l=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},mf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,s=q.size(t);if(a){let l=Wn.calcShape(Wn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=q.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>ff(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...he(r,t,n,o)]})}},gf=e=>{e.compute(mf(e.inputs))}}),yf,zy=ee(()=>{Y0(),ma(),X0(),Z0(),Q0(),J0(),ey(),ay(),sy(),uy(),ly(),cy(),dy(),hy(),py(),fy(),my(),gy(),yy(),wy(),_y(),by(),xy(),$y(),vy(),Eh(),Sy(),My(),Ty(),Iy(),Ey(),ha(),ky(),Dh(),Cy(),Ay(),Ry(),zh(),Oy(),Jt(),_a(),Ny(),yf=new Map([["Abs",[Xl]],["Acos",[Zl]],["Acosh",[Ql]],["Add",[Uc]],["ArgMax",[zl,fa]],["ArgMin",[Nl,fa]],["Asin",[Jl]],["Asinh",[ec]],["Atan",[tc]],["Atanh",[nc]],["Attention",[Fl]],["AveragePool",[fp,pp]],["BatchNormalization",[Vl]],["BiasAdd",[Kl]],["BiasSplitGelu",[Bc]],["Cast",[ic,rc]],["Ceil",[sc]],["Clip",[oc]],["Concat",[Jc,ed]],["Conv",[Ra,Ca]],["ConvTranspose",[Id,Sd]],["Cos",[uc]],["Cosh",[lc]],["CumSum",[kd,Cd]],["DepthToSpace",[Nd,zd]],["DequantizeLinear",[vp,Sp]],["Div",[Lc]],["Einsum",[Fd,Gd]],["Elu",[cc,lr]],["Equal",[Fc]],["Erf",[dc]],["Exp",[hc]],["Expand",[Hd]],["FastGelu",[Kd]],["Floor",[pc]],["FusedConv",[Ra,Ca]],["Gather",[Qd,Zd]],["GatherElements",[lh,uh]],["GatherBlockQuantized",[ih,ah]],["GatherND",[eh,th]],["Gelu",[fc]],["Gemm",[ph,hh]],["GlobalAveragePool",[gp,mp]],["GlobalMaxPool",[bp,_p]],["Greater",[Vc]],["GreaterOrEqual",[jc]],["GridSample",[$h,vh]],["GroupQueryAttention",[Gh]],["HardSigmoid",[$c,xc]],["InstanceNormalization",[Vh]],["LayerNormalization",[Kh]],["LeakyRelu",[mc,lr]],["Less",[Hc]],["LessOrEqual",[Kc]],["Log",[Cc]],["MatMul",[Xh]],["MatMulNBits",[ep,tp]],["MaxPool",[yp,wp]],["Mul",[Gc]],["MultiHeadAttention",[Ih,Mh]],["Neg",[yc]],["Not",[gc]],["Pad",[cp]],["Pow",[Wc]],["QuickGelu",[Oc,lr]],["Range",[Ip]],["Reciprocal",[wc]],["ReduceMin",[kl]],["ReduceMean",[Sl]],["ReduceMax",[El]],["ReduceSum",[Al]],["ReduceProd",[Cl]],["ReduceL1",[Ml]],["ReduceL2",[Tl]],["ReduceLogSum",[Ol]],["ReduceLogSumExp",[Il]],["ReduceSumSquare",[Rl]],["Relu",[_c]],["Resize",[Kp,Yp]],["RotaryEmbedding",[Ph]],["ScatterND",[Ap,Cp]],["Sigmoid",[bc]],["Sin",[vc]],["Sinh",[Sc]],["Slice",[rf,af]],["SkipLayerNormalization",[Qp]],["Split",[Oh,Nh]],["Sqrt",[Mc]],["Softmax",[uf,lf]],["Sub",[qc]],["Tan",[Tc]],["Tanh",[Ic]],["ThresholdedRelu",[kc,lr]],["Tile",[pf]],["Transpose",[Vu,Hu]],["Where",[gf]]])}),wf,By=ee(()=>{ht(),Gt(),be(),wf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Ct(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),wt(e.programInfo.name)}dispose(){}build(e,t){Ct(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Uu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Ie("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return wt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),_f={};Fn(_f,{WebGpuBackend:()=>vf});var bf,xf,$f,vf,Py=ee(()=>{ht(),we(),Gt(),Mu(),j0(),zy(),By(),bf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},xf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${bf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},$f=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},vf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new $f(o),this.gpuDataManager=zu(this),this.programManager=new wf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Yi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ct(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,c=a.inputTensorViews,p=a.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(b=>({dims:b.dims,dataType:Ft(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Ft(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:w});else{let b="";c.forEach((M,v)=>{b+=`input[${v}]: [${M.dims}] | ${Ft(M.dataType)}, `});let x="";p.forEach((M,v)=>{x+=`output[${v}]: [${M.dims}] | ${Ft(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Rr("GPU",`${h}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),wt()}run(e,t,n,r,i,a){Ct(e.name);let o=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let v=this.gpuDataManager.get(M);if(!v)throw new Error(`no GPU data for input: ${M}`);o.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map((x,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let c=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let M=h[x]===-1,v=h[x]===-2,T=M||v?i(s[x].dataType,s[x].dims):r(h[x],s[x].dataType,s[x].dims);if(c.push(T),T.data===0)continue;let E=this.gpuDataManager.get(T.data);if(!E)throw new Error(`no GPU data for output: ${T.data}`);if(M&&this.temporaryData.push(E),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(E)}p.push(E)}if(o.length!==t.length||p.length!==c.length){if(p.length===0)return wt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let A=k.type===10?2:4,N,U;k.type===10?(U=S.length>4?16:S.length>2?8:S.length*A,N=S.length>4?16:A*S.length):(U=S.length<=2?S.length*A:16,N=16),x=Math.ceil(x/U)*U,M.push(x);let V=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/V)*N:S.length*A});let v=16;x=Math.ceil(x/v)*v;let T=new ArrayBuffer(x);l.forEach((k,S)=>{let A=M[S],N=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(T,A,N.length).set(N);else if(k.type===12)new Uint32Array(T,A,N.length).set(N);else if(k.type===10)new Uint16Array(T,A,N.length).set(N);else if(k.type===1)new Float32Array(T,A,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Ft(k.type)}`)});let E=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,T,0,x),this.gpuDataManager.release(E.id),f={offset:0,size:x,buffer:E.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=xf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ie("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],v=M.type,T=typeof M.data=="number"?1:M.data.length,[E,k]=b.uniformVariablesInfo[x];if(v!==E||T!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${E} with size ${k}, got type ${v} with size ${T} in program "${b.programInfo.name}".`)}}if(Ie("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,o,p,m,f),wt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=yf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ie("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await sa(this,e,t);return Xi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ie("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ie("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ie("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Sf={};Fn(Sf,{init:()=>Tf});var Xr,Mf,Tf,Dy=ee(()=>{we(),Gt(),_e(),H0(),Xr=class v0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new v0(this.module,this.dataType,this.data,t)}},Mf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),p=[];for(let f=0;f<c;f++)p.push(Number(e.getValue(r*i++,a)));s.push(new Xr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Xr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=vn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new Xr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Tf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Py(),nr(_f)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Ie("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Ie("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),c)}},async(s,u,l)=>{Ie("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Ie("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new Mf(t,o,Number(u));return o.computeKernel(Number(s),c,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Au(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),If,eo,to,en,Ef,no,Zr,ro,io,ao,oo,so,uo,kf=ee(()=>{ht(),W0(),q0(),we(),bn(),qi(),mu(),If=(e,t)=>{Ge()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},eo=async e=>{If(e.wasm.numThreads,Pr(e.logLevel))},to=async(e,t)=>{var r,i;(i=(r=Ge()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Dy(),nr(Sf)).init;t==="webgpu"&&await a("webgpu",Ge(),e,n),t==="webnn"&&await a("webnn",Ge(),e)}},en=new Map,Ef=e=>{let t=Ge(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ze("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},no=(e,t)=>{let n=Ge(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&ze("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Zr=e=>{let t=Ge(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ro=async(e,t)=>{var c,p,f,m;let n,r,i=Ge();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Zr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await fu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let A of t.externalData){let N=typeof A=="string"?A:A.path;S.push(Ki(typeof A=="string"?A:A.data).then(U=>{i.mountExternalData(N,U)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let A=S,N=A==null?void 0:A.context,U=A==null?void 0:A.gpuDevice,V=A==null?void 0:A.deviceType,L=A==null?void 0:A.powerPreference;N?i.currentContext=N:U?i.currentContext=await i.webnnCreateMLContext(U):i.currentContext=await i.webnnCreateMLContext({deviceType:V,powerPreference:L})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&ze("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Ef(a),b=!!(t!=null&&t.enableGraphCapture),x=[],M=[],v=[],T=[],E=[];for(let S=0;S<y;S++){let[A,N,U]=no(a,S);A===0&&ze("Can't get an input name."),l.push(A);let V=i.UTF8ToString(A);x.push(V),v.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:Ft(N),shape:U})}for(let S=0;S<w;S++){let[A,N,U]=no(a,S+y);A===0&&ze("Can't get an output name."),h.push(A);let V=i.UTF8ToString(A);M.push(V),T.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:Ft(N),shape:U});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let L=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[V])??"cpu",O=i.webnnIsGraphOutput;if(L==="cpu"&&O&&O(a,V)){E.push("ml-tensor-cpu-output");continue}if(L!=="cpu"&&L!=="cpu-pinned"&&L!=="gpu-buffer"&&L!=="ml-tensor")throw new Error(`Not supported preferred output location: ${L}.`);if(b&&L!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${L}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(L)}}let k=null;return E.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&ze("Can't create IO binding."),k={handle:s,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>ji(S))}),en.set(a,[a,l,h,k,b,!1]),[a,x,M,v,T]}catch(y){throw l.forEach(w=>i._OrtFree(w)),h.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&ze("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&ze("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&ze("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},io=e=>{var u,l,h;let t=Ge(),n=en.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&ze("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&ze("Can't release session."),en.delete(e)},ao=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Ge(),u=s.PTR_SIZE,l=e[0],h=e[1],c=e[3],p=c,f,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;m=vn($n(l),h);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,a,b,m)}}else if(c==="ml-tensor"){let b=e[2].mlTensor;m=vn($n(l),h);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,$n(l),h)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,_t(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let v=s.UTF8ToString(i);if(x(r,v)||M(r,v)){let T=$n(l);m=vn(T,h),p="ml-tensor";let E=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!E||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await E(r,T,h);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=S}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*h.length);try{h.forEach((x,M)=>s.setValue(w+M*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor($n(l),f,m,w,h.length,ji(p));b===0&&ze(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},oo=async(e,t,n,r,i,a)=>{var V,L,O,H;let o=Ge(),s=o.PTR_SIZE,u=en.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],c=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],M=[],v=[],T=[],E=[],k=o.stackSave(),S=o.stackAlloc(y*s),A=o.stackAlloc(y*s),N=o.stackAlloc(w*s),U=o.stackAlloc(w*s);try{[b,x]=lu(a),wn("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)await ao(n[W],M,T,e,h[t[W]],t[W],f);for(let W=0;W<w;W++)await ao(i[W],v,T,e,c[r[W]],y+r[W],f);_n("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)o.setValue(S+W*s,M[W],"*"),o.setValue(A+W*s,h[t[W]],"*");for(let W=0;W<w;W++)o.setValue(N+W*s,v[W],"*"),o.setValue(U+W*s,c[r[W]],"*");if(p&&!m){let{handle:W,outputPreferredLocations:z,outputPreferredLocationsEncoded:R}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);wn("wasm bindInputsOutputs");for(let B=0;B<y;B++){let D=t[B];await o._OrtBindInput(W,h[D],M[B])!==0&&ze(`Can't bind input[${B}] for session=${e}.`)}for(let B=0;B<w;B++){let D=r[B];(V=i[B])!=null&&V[3]?(E.push(v[B]),o._OrtBindOutput(W,c[D],v[B],0)!==0&&ze(`Can't bind pre-allocated output[${B}] for session=${e}.`)):o._OrtBindOutput(W,c[D],0,R[D])!==0&&ze(`Can't bind output[${B}] to ${z[B]} for session=${e}.`)}_n("wasm bindInputsOutputs"),en.set(e,[l,h,c,p,f,!0])}(L=o.jsepOnRunStart)==null||L.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let Y;p?Y=await o._OrtRunWithBinding(l,p.handle,w,N,b):Y=await o._OrtRun(l,A,S,y,U,w,N,b),Y!==0&&ze("failed to call OrtRun().");let Q=[],ue=[];wn("wasm ProcessOutputTensor");for(let W=0;W<w;W++){let z=Number(o.getValue(N+W*s,"*"));if(z===v[W]||E.includes(v[W])){Q.push(i[W]),z!==v[W]&&o._OrtReleaseTensor(z)!==0&&ze("Can't release tensor.");continue}let R=o.stackSave(),B=o.stackAlloc(4*s),D=!1,G,X=0;try{o._OrtGetTensorData(z,B,B+s,B+2*s,B+3*s)!==0&&ze(`Can't access output tensor data on index ${W}.`);let ie=s===4?"i32":"i64",te=Number(o.getValue(B,ie));X=o.getValue(B+s,"*");let ye=o.getValue(B+s*2,"*"),Te=Number(o.getValue(B+s*3,ie)),Be=[];for(let Oe=0;Oe<Te;Oe++)Be.push(Number(o.getValue(ye+Oe*s,ie)));o._OrtFree(ye)!==0&&ze("Can't free memory for tensor dims.");let ke=Be.reduce((Oe,me)=>Oe*me,1);G=Ft(te);let ot=p==null?void 0:p.outputPreferredLocations[r[W]];if(G==="string"){if(ot==="gpu-buffer"||ot==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Oe=[];for(let me=0;me<ke;me++){let Ze=o.getValue(X+me*s,"*"),ft=o.getValue(X+(me+1)*s,"*"),Xe=me===ke-1?void 0:ft-Ze;Oe.push(o.UTF8ToString(Ze,Xe))}Q.push([G,Be,Oe,"cpu"])}else if(ot==="gpu-buffer"&&ke>0){let Oe=o.jsepGetBuffer;if(!Oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let me=Oe(X),Ze=vn(te,ke);if(Ze===void 0||!Vi(G))throw new Error(`Unsupported data type: ${G}`);D=!0,Q.push([G,Be,{gpuBuffer:me,download:o.jsepCreateDownloader(me,Ze,G),dispose:()=>{o._OrtReleaseTensor(z)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(ot==="ml-tensor"&&ke>0){let Oe=o.webnnEnsureTensor,me=o.webnnIsGraphInputOutputTypeSupported;if(!Oe||!me)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(vn(te,ke)===void 0||!Hi(G))throw new Error(`Unsupported data type: ${G}`);if(!me(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let Ze=await Oe(e,X,te,Be,!1);D=!0,Q.push([G,Be,{mlTensor:Ze,download:o.webnnCreateMLTensorDownloader(X,G),dispose:()=>{o.webnnReleaseTensorId(X),o._OrtReleaseTensor(z)}},"ml-tensor"])}else if(ot==="ml-tensor-cpu-output"&&ke>0){let Oe=o.webnnCreateMLTensorDownloader(X,G)(),me=Q.length;D=!0,ue.push((async()=>{let Ze=[me,await Oe];return o.webnnReleaseTensorId(X),o._OrtReleaseTensor(z),Ze})()),Q.push([G,Be,[],"cpu"])}else{let Oe=Br(G),me=new Oe(ke);new Uint8Array(me.buffer,me.byteOffset,me.byteLength).set(o.HEAPU8.subarray(X,X+me.byteLength)),Q.push([G,Be,me,"cpu"])}}finally{o.stackRestore(R),G==="string"&&X&&o._free(X),D||o._OrtReleaseTensor(z)}}p&&!f&&(o._OrtClearBoundOutputs(p.handle)!==0&&ze("Can't clear bound outputs."),en.set(e,[l,h,c,p,f,!1]));for(let[W,z]of await Promise.all(ue))Q[W][2]=z;return _n("wasm ProcessOutputTensor"),Q}finally{(H=o.webnnOnRunEnd)==null||H.call(o,l),o.stackRestore(k),M.forEach(Y=>o._OrtReleaseTensor(Y)),v.forEach(Y=>o._OrtReleaseTensor(Y)),T.forEach(Y=>o._free(Y)),b!==0&&o._OrtReleaseRunOptions(b),x.forEach(Y=>o._free(Y))}},so=e=>{let t=Ge(),n=en.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},uo=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),tn,st,Hn,gr,yr,Qr,lo,Jr,Cn,An,Cf,Af,Rf,Of,Nf,zf,Bf,Pf,Df=ee(()=>{ht(),kf(),bn(),Li(),tn=()=>!!Fe.wasm.proxy&&typeof document<"u",Hn=!1,gr=!1,yr=!1,Jr=new Map,Cn=(e,t)=>{let n=Jr.get(e);n?n.push(t):Jr.set(e,[t])},An=()=>{if(Hn||!gr||yr||!st)throw new Error("worker not ready")},Cf=e=>{switch(e.data.type){case"init-wasm":Hn=!1,e.data.err?(yr=!0,lo[1](e.data.err)):(gr=!0,lo[0]()),Qr&&(URL.revokeObjectURL(Qr),Qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Jr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Af=async()=>{if(!gr){if(Hn)throw new Error("multiple calls to 'initWasm()' detected.");if(yr)throw new Error("previous call to 'initWasm()' failed.");if(Hn=!0,tn())return new Promise((e,t)=>{st==null||st.terminate(),iu().then(([n,r])=>{try{st=r,st.onerror=a=>t(a),st.onmessage=Cf,lo=[e,t];let i={type:"init-wasm",in:Fe};!i.in.wasm.wasmPaths&&(n||Bi)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),st.postMessage(i),Qr=n}catch(i){t(i)}},t)});try{await Wi(Fe.wasm),await eo(Fe),gr=!0}catch(e){throw yr=!0,e}finally{Hn=!1}}},Rf=async e=>{if(tn())return An(),new Promise((t,n)=>{Cn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Fe}};st.postMessage(r)});await to(Fe,e)},Of=async e=>tn()?(An(),new Promise((t,n)=>{Cn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};st.postMessage(r,[e.buffer])})):Zr(e),Nf=async(e,t)=>{if(tn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return An(),new Promise((n,r)=>{Cn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),st.postMessage(i,a)})}else return ro(e,t)},zf=async e=>{if(tn())return An(),new Promise((t,n)=>{Cn("release",[t,n]);let r={type:"release",in:e};st.postMessage(r)});io(e)},Bf=async(e,t,n,r,i,a)=>{if(tn()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return An(),new Promise((o,s)=>{Cn("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};st.postMessage(l,uo(u))})}else return oo(e,t,n,r,i,a)},Pf=async e=>{if(tn())return An(),new Promise((t,n)=>{Cn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};st.postMessage(r)});so(e)}}),co,Uf,Lf,Uy=ee(()=>{ht(),Df(),we(),Ri(),mu(),co=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Uf=e=>{switch(e[3]){case"cpu":return new Ve(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ve.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Hi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ve.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Lf=class{async fetchModelAndCopyToWasmMemory(e){return Of(await Ki(e))}async loadModel(e,t){Ct();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Nf(n,t),wt()}async dispose(){return zf(this.sessionId)}async run(e,t,n){Ct();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],f=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let a=[],o=[];Object.entries(t).forEach(c=>{let p=c[0],f=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);a.push(f),o.push(m)});let s=r.map((c,p)=>co(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?co(c,()=>`output "${this.outputNames[o[p]]}"`):null),l=await Bf(this.sessionId,i,s,o,u,n),h={};for(let c=0;c<l.length;c++)h[this.outputNames[o[c]]]=a[c]??Uf(l[c]);return wt(),h}startProfiling(){}endProfiling(){Pf(this.sessionId)}}}),Ff={};Fn(Ff,{OnnxruntimeWebAssemblyBackend:()=>po,initializeFlags:()=>ho,wasmBackend:()=>Gf});var ho,po,Gf,Ly=ee(()=>{ht(),Df(),Uy(),ho=()=>{(typeof Fe.wasm.initTimeout!="number"||Fe.wasm.initTimeout<0)&&(Fe.wasm.initTimeout=0);let e=Fe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Fe.wasm.simd=!1),typeof Fe.wasm.proxy!="boolean"&&(Fe.wasm.proxy=!1),typeof Fe.wasm.trace!="boolean"&&(Fe.wasm.trace=!1),typeof Fe.wasm.numThreads!="number"||!Number.isInteger(Fe.wasm.numThreads)||Fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Fe.wasm.numThreads=1;else{let t=typeof navigator>"u"?M0("node:os").cpus().length:navigator.hardwareConcurrency;Fe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},po=class{async init(e){ho(),await Af(),await Rf(e)}async createInferenceSessionHandler(e,t){let n=new Lf;return await n.loadModel(e,t),n}},Gf=new po});ht(),ht(),ht();var Fy="1.27.0";{let e=(Ly(),nr(Ff)).wasmBackend;Gn("webgpu",e,5),Gn("webnn",e,5),Gn("cpu",e,10),Gn("wasm",e,10)}Object.defineProperty(Fe.versions,"web",{value:Fy,enumerable:!0});/**
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
 */function at(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function jn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Wf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Gy=114;function Wy(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function fo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),v=(p*r+b)*a,T=(p*r+x)*a,E=(f*r+b)*a,k=(f*r+x)*a,S=(h*t+y)*3;for(let A=0;A<3;A++){const N=o[v+A]*(1-M)+o[T+A]*M,U=o[E+A]*(1-M)+o[k+A]*M;s[S+A]=Math.min(255,Math.max(0,Math.round(N*(1-m)+U*m)))}}}return s}function Kn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=h*l,p=Math.min((h+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,M=0;for(let T=Math.floor(c);T<p;T++){const E=Math.min(T+1,p)-Math.max(T,c);if(!(E<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const A=S*E,N=(T*r+k)*a;w+=o[N]*A,b+=o[N+1]*A,x+=o[N+2]*A,M+=A}}const v=(h*t+f)*3;s[v]=Math.min(255,Math.max(0,at(w/M))),s[v+1]=Math.min(255,Math.max(0,at(b/M))),s[v+2]=Math.min(255,Math.max(0,at(x/M)))}}return s}function qf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function mo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=qf(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),M=qf(b-x),v=(p*t+w)*3;for(let T=0;T<3;T++){let E=0;for(let k=0;k<4;k++){const S=c(m-1+k)*r;let A=0;for(let N=0;N<4;N++)A+=M[N]*o[(S+h(x-1+N))*a+T];E+=y[k]*A}s[v+T]=Math.min(255,Math.max(0,Math.round(E)))}}}return s}function go(e,t,n=1){const r=Wy(e.width,e.height,t,n),i=fo(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Gy/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const c=(l+h)*3,p=u+h;o[p]=i[c]/255,o[a+p]=i[c+1]/255,o[2*a+p]=i[c+2]/255}}return{tensor:o,params:r}}function yo(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],c=e[o*6+4],p=e[o*6+5];if(c<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(h-t.padY)/t.scale;i.push({classIndex:f,confidence:c,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const wr=.8,Vf=.65,qy=110,Vy=1280;function Hy(e,t,n){if(n==null)return wr;if(n.length===0)return Vf;const r=Math.max(e,t);if(!(r>0))return wr;const i=Vy/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return wr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=qy?Vf:wr}const Hf=.25,jf=.6;function jy(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Hf:jf)),h=Math.trunc(u*(s>=u?jf:Hf)),c=Math.max(0,r-l),p=Math.max(0,i-h),f=Math.min(Math.trunc(e),a+l),m=Math.min(Math.trunc(t),o+h),y=f-c,w=m-p;return y<=0||w<=0?null:{x:c,y:p,width:y,height:w}}const Ky=3,Yy=.15,Xy=.6;function wo(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Zy(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Qy(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],a=[Number(e[1][0]),Number(e[1][1])];if(![...i,...a].every(v=>Number.isFinite(v)))return null;const o=wo(i,a);if(!(o>0))return null;const s=[];for(const v of t??[]){const T=Math.trunc(Number(v.n));if(!Number.isFinite(T)||T<Ky)continue;const E=Zy(v.poly);E!==null&&s.push({owner:v.owner,c:E,n:T,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((v,T)=>T.n-v.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Xy);for(const v of u)v.d0=wo(v.c,i),v.d1=wo(v.c,a),v.ecart=Math.abs(v.d0-v.d1);const h=[...u].sort((v,T)=>T.ecart-v.ecart),c=h[0],p=h[1],f=c.d0<c.d1?0:1,m=r>0?1:0,y=f===m?c:p,w=f===m?p:c,b=f===1?c.owner:p.owner,x=f===1?p.owner:c.owner,M=c.ecart/o<Yy;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function Jy(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const ew=.6;function Kf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,c=at((s+l)/2),p=at((u+h)/2),f=at((l-s+(h-u))/4);f>=1&&r.push({cx:c,cy:p,r:f})}return r}function tw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(ew*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function nw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(jn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Yf(e,t,n){const r=Kf(e,t,n);return r.length===0?[]:nw(tw(r))}function rw(e,t,n){return Kf(e,t,n)}function _r(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const iw=.5,aw=.7,ow=.55;function _o(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Xf(e){if(e.length===0)return[];const t=(iw*_o(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(jn(i.map(a=>a[0]))),Math.trunc(jn(i.map(a=>a[1]))),Math.trunc(jn(i.map(a=>a[2]))),Math.trunc(jn(i.map(a=>a[3])))]);if(r.length>=2){const i=_o(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),c=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*c,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=aw*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=_o(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=ow*i)}return r}const Zf=["brown","grey","blue","green","yellow","red","purple"],sw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},uw=.7;function Qf(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const c of r){const p=e[c];if(p.family!==a.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(o+u,f+y)-Math.max(o,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),M=Math.max(1,Math.min(u*l,y*w));if(b*x>=uw*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function ei(e,t,n){const r=yo(e,t,n,Zf.length).map(i=>{const a=Zf[i.classIndex];return{color:a,family:sw[a],box:i.box,confidence:i.confidence}});return Qf(r)}const lw=8,cw=.8,Jf=1.25;function dw(e){if(e.length<lw)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Jf?t.push(o):u>s*Jf&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<cw*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const hw=2.25,em=8;function pw(e){if(e.length<em)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=hw*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,p)=>p),o=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const f=t[c][0]-t[p][0],m=t[c][1]-t[p][1];f*f+m*m<=i&&(a[o(c)]=o(p))}const s=new Map;for(let c=0;c<e.length;c++){const p=o(c);s.set(p,[...s.get(p)??[],c])}let u=[];for(const c of s.values())c.length>u.length&&(u=c);if(u.length<em||u.length===e.length)return[];const l=new Set(u),h=e.map((c,p)=>p).filter(c=>!l.has(c));return h.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const ut={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Mt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const fw=.42,mw=22,gw=43,yw=120,ww=1.5,_w=.72,bw=110,tm=3;function br(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*fw);if(l<1)return 0;let h=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-s)**2+(c-u)**2>l*l)continue;const f=(c*r+p)*a,m=o[f],y=o[f+1],w=o[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),h+=1)}return h}function xw(e){let t=0,n=0,r=0,i=br(e,!1,(a,o,s)=>{const u=Mt(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=br(e,!0,(a,o,s)=>{const u=Mt(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function $w(e){let t=0,n=0,r=br(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=br(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function vw(e){let t=0;const n=br(e,!0,(r,i,a)=>{t+=Mt(r,i,a).s});return n===0?null:t/n}function Sw(e){const t=xw(e);if(t===null||t.s<=mw)return 1;if(t.s>=yw){const n=$w(e);return n!==null&&n>=ww?6:3}return t.s>=gw?3:6}function Mw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function Tw(e,t){const n=[...t];if(e.length<tm||t.length!==e.length)return n;const r=e.map(o=>vw(o)),i=r.filter(o=>o!==null);if(i.length<tm)return n;const a=jn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<_w*a&&o<bw&&(n[s]=1)}),n}function nm(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+a-n)**2+(p+o-r)**2<=i*i){const w=((p+o)*e.width+(f+a))*e.channels;c[m]=e.data[w],c[m+1]=e.data[w+1],c[m+2]=e.data[w+2]}else c[m]=255,c[m+1]=255,c[m+2]=255}return{width:l,height:h,channels:3,data:c}}function Iw(e,t){const n=t.map(a=>nm(e,a)),r=n.map(a=>Sw(a)),i=Mw(t,r);return Tw(n,i)}function Ew(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function rm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,c=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(h);w<c;w++){const b=Math.min(w+1,c)-Math.max(w,h);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,at(p/f)))}}return{width:t,height:n,data:r}}function kw(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,at(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function Cw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(!(h<0||h>=t||c<0||c>=n)&&r[c*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function Aw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(h>=0&&h<t&&c>=0&&c<n&&r[c*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function bo(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let c=0,p=0,f=0;for(;l<h;){const m=o[l++],y=m%t,w=m/t|0;c+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const M=y+x,v=w+b;if(M<0||M>=t||v<0||v>=n)continue;const T=v*t+M;r[T]>0&&i[T]===0&&(i[T]=s,o[h++]=T)}}a[s]={area:c,centroidX:p/c,centroidY:f/c},s+=1}return{labels:i,stats:a}}function Rw(e,t,n){return im(Float32Array.from(e.data),e.width,t,n)}function im(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const c=h-a,p=l-a,f=s*c-u*p+a,m=u*c+s*p+a,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,M=(E,k)=>E>=0&&E<t&&k>=0&&k<t?e[k*t+E]:r,v=M(y,w)*(1-b)+M(y+1,w)*b,T=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+h]=v*(1-x)+T*x}return i}const Ow=.9,Nw=.34,zw=[.55,.6,.66,.72],Bw=22,Pw=88,Dw=35,Yn=28,xo=4,Uw=Array.from({length:15},(e,t)=>-21+t*3),am=[-2,0,2],Lw=3,Fw=.3;function Gw(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Ww(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),c=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+c)*u+(w+h)]=e.data[(y+r)*e.width+(w+t)];const p=Yn-2*xo,f=rm({width:u,height:u,data:l},p,p),m=new Float32Array(Yn*Yn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+xo)*Yn+(w+xo)]=f.data[y*p+w]>110?1:0;return m}function qw(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Nw);if(u<4)return null;const l=o-u,h=s-u,c=2*u,p=2*u;if(c<6||p<6)return null;const f=new Int16Array(c*p),m=new Int16Array(c*p),y=new Int16Array(c*p),w=new Uint8Array(c*p),b=[],x=Math.min(c,p)/2;for(let W=0;W<c;W++)for(let z=0;z<p;z++){const R=((W+l)*n+(z+h))*i,{h:B,s:D,v:G}=Mt(a[R],a[R+1],a[R+2]),X=W*p+z;f[X]=B,m[X]=D,y[X]=G,Math.sqrt((z-p/2)**2+(W-c/2)**2)/x<=t&&(w[X]=1,b.push(G))}if(b.length<16)return null;const M=Wf(b,55);let v=0,T=0,E=0;const k=W=>f[W]>=Bw&&f[W]<=Pw&&m[W]>=Dw,S=W=>y[W]>=M&&m[W]<=95&&!k(W)&&w[W]===1;for(let W=0;W<c*p;W++)w[W]===1&&(E+=1,y[W]>=130&&!k(W)&&(v+=1),S(W)&&(T+=1));const A=v>.5*E&&T<.15*E,N=new Uint8Array(c*p);if(A){const W=Wf(b,45);for(let z=0;z<c*p;z++)N[z]=w[z]===1&&y[z]<=W?255:0}else for(let W=0;W<c*p;W++)N[W]=S(W)?255:0;const U={width:p,height:c,data:N},V=Cw(U);let L=bo(V),O=L;if(L.stats.length<=1&&(L=bo(U),O=L,L.stats.length<=1))return null;const H=Math.min(c,p)/2;let Y=0,Q=-1;for(let W=1;W<O.stats.length;W++){const z=O.stats[W];if(z===void 0)continue;const R=Math.hypot(z.centroidX-p/2,z.centroidY-c/2)/H,B=z.area*(1-.6*Math.min(R,1));B>Q&&(Q=B,Y=W)}if(Y===0)return null;const ue=new Uint8Array(c*p);for(let W=0;W<c*p;W++)ue[W]=O.labels[W]===Y?255:0;return Ww(Aw({width:p,height:c,data:ue}))}function Vw(e,t,n,r,i,a){const o=Yn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let c=0;c<o;c++){const p=c-i;if(p<0||p>=o)continue;const f=e[h*o+p];f!==0&&(u+=f,s+=f*n[l*o+c])}}return s/(u+r-s+1e-6)}function Hw(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Uw){const a=i===0?e:im(e,Yn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of am)for(const u of am){const l=Vw(a,o,t,n,s,u);l>r&&(r=l)}}return r}function jw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of zw){const s=qw(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([Hw(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<Fw)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,Lw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const Kw=2560,Yw=.3,Xw=.5,Zw=1.6,Qw=3,Jw=5;function e_(e){const t=Math.min(1,Kw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let f=0;f<n;f++){const m=(f+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,v=(h*e.width+y)*e.channels+M,T=(h*e.width+w)*e.channels+M,E=(c*e.width+y)*e.channels+M,k=(c*e.width+w)*e.channels+M,S=e.data[v]*(1-b)+e.data[T]*b,A=e.data[E]*(1-b)+e.data[k]*b,N=S*(1-p)+A*p;a[x*i+u*n+f]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function t_(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function n_(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function r_(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const c=u/h,p=l/h;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[v,T]of e){const E=v*c+T*p,k=-v*p+T*c;E<f&&(f=E),E>m&&(m=E),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,M=b*x;if(M<n){n=M;const v=(f+m)/2,T=(y+w)/2;t={cx:v*c-T*p,cy:v*p+T*c,w:b,h:x,angle:Math.atan2(p,c)}}}return t}function i_(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=h;b<=c;b++){const x=b-r.cx,M=w-r.cy,v=x*i+M*a,T=-x*a+M*i;Math.abs(v)<=o&&Math.abs(T)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function a_(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,h]=o,[c,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=h[1]?[l,h]:[h,l];return[[c[0],c[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function o_(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let f=0;f<o.length;f++)o[f]=e[f]>Yw?255:0;o=t_(o,i,a);const s={width:i,height:a,data:o},{labels:u}=bo(s),l=new Map;for(let f=0;f<a;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const h=n/i,c=r/a,p=[];for(const[f,m]of l){const y=[];for(const[N,[U,V]]of m)y.push([U-.5,N-.5],[U-.5,N+.5],[V+.5,N-.5],[V+.5,N+.5]);const w=r_(n_(y));if(Math.min(w.w,w.h)<Qw)continue;const b=i_(e,i,a,w);if(b<Xw)continue;const x=w.w*w.h*Zw/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<Jw+2)continue;const T=a_(M).map(([N,U])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(U*c)))]),E=T.map(N=>N[0]),k=T.map(N=>N[1]),S=Math.min(...E),A=Math.min(...k);p.push({quad:T,x:S,y:A,width:Math.max(...E)-S,height:Math.max(...k)-A,score:b})}return p.sort((f,m)=>m.score-f.score)}function s_(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=u_([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let c=0;c<s;c++)for(let p=0;p<o;p++){const f=u[6]*p+u[7]*c+u[8],m=(u[0]*p+u[1]*c+u[2])/f,y=(u[3]*p+u[4]*c+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,M=y-b,v=Math.max(0,Math.min(e.width-1,w)),T=Math.max(0,Math.min(e.width-1,w+1)),E=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let S=0;S<e.channels;S++){const A=e.data[(E*e.width+v)*e.channels+S],N=e.data[(E*e.width+T)*e.channels+S],U=e.data[(k*e.width+v)*e.channels+S],V=e.data[(k*e.width+T)*e.channels+S],L=A*(1-x)+N*x,O=U*(1-x)+V*x;l[(c*o+p)*e.channels+S]=Math.round(L*(1-M)+O*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?qt(h,3):h}function u_(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function qt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let c=0;c<r;c++){let p,f;n===1?(p=i-1-h,f=c):n===2?(p=r-1-c,f=i-1-h):(p=h,f=r-1-c);const m=(h*r+c)*a,y=(f*s+p)*a;for(let w=0;w<a;w++)l[y+w]=o[m+w]}return{width:s,height:u,channels:a,data:l}}const l_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,l_)*255));return e})();const Vt=48,c_=320;function d_(e){return["blank",...e.characters," "]}function h_(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function p_(e,t){const n=Math.trunc(Vt*t),r=e.width/e.height,i=Math.ceil(Vt*r)>n?n:Math.ceil(Vt*r),a=new Float32Array(3*Vt*n),o=Vt*n,s=e.width/i,u=e.height/Vt;for(let l=0;l<Vt;l++){const h=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,h-c));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const v=2-M,T=(c*e.width+w)*e.channels+v,E=(c*e.width+b)*e.channels+v,k=(p*e.width+w)*e.channels+v,S=(p*e.width+b)*e.channels+v,A=e.data[T]*(1-x)+e.data[E]*x,N=e.data[k]*(1-x)+e.data[S]*x,U=A*(1-f)+N*f;a[M*o+l*n+m]=(U/255-.5)/.5}}}return{tensor:a,width:n}}const f_=62,m_=8,g_=5;function $o(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function y_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function ti(e,t){return e.length===0&&t.length===0?100:200*y_(e,t)/(e.length+t.length)}function om(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return ti(n(e),n(t))}function w_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(ti(s,u),ti(s,l),ti(u,l))}function __(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[$o(i),$o(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function b_(e,t){const n=$o(e);if(!n||t.length===0)return null;const i=__(t).map(h=>({...h,score:w_(n,h.key)})).sort((h,c)=>c.score-h.score).slice(0,m_).filter(h=>h.score>=f_);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=g_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[om(s,u.key),u.score];for(const h of o.slice(1)){const c=[om(s,h.key),h.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=h,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const sm=5e3,vo=.75,um=15,x_=1.25,$_=2.4,v_=.003,S_=.85,M_=4,So=2600,Mo=2,To=.3,lm=.1,cm=.012,T_=22,dm=.5,ni=.12;function tt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function I_(e,t,n,r){const i=r.map(te=>te[0]),a=r.map(te=>te[1]),o=i.reduce((te,ye)=>te+ye,0)/i.length,s=a.reduce((te,ye)=>te+ye,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*M_,h=Math.max(0,Math.trunc(o-l)),c=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(c-h<8||f-p<8)return null;const m=Math.max(n.width,n.height)<So?Mo:1,y=tt(e,n),w=tt(e,t),b=new e.Rect(h,p,c-h,f-p),x=y.roi(b),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const v=new e.Mat,T=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(M,T,e.COLOR_RGB2GRAY);const E=new e.ORB(sm),k=new e.KeyPointVector,S=new e.KeyPointVector,A=new e.Mat,N=new e.Mat,U=new e.Mat,V=[y,w,x,M,v,T,k,S,A,N,U],L=te=>{for(const ye of V)try{ye.delete()}catch{}try{E.delete()}catch{}return te};if(E.detectAndCompute(v,U,k,A),E.detectAndCompute(T,U,S,N),A.rows<8||N.rows<8)return L(null);const O=new e.BFMatcher(e.NORM_HAMMING),H=new e.DMatchVectorVector;O.knnMatch(A,N,H,2);const Y=[],Q=[];for(let te=0;te<H.size();te++){const ye=H.get(te);if(ye.size()===2){const Te=ye.get(0),Be=ye.get(1);if(Te.distance<vo*Be.distance){const ke=k.get(Te.queryIdx).pt,ot=S.get(Te.trainIdx).pt;Y.push(ke.x,ke.y),Q.push(ot.x,ot.y)}}}if(H.delete(),O.delete(),Y.length/2<8)return L(null);const ue=e.matFromArray(Y.length/2,1,e.CV_32FC2,Y),W=e.matFromArray(Q.length/2,1,e.CV_32FC2,Q),z=new e.Mat,R=e.findHomography(ue,W,e.RANSAC,5,z);let B=0;for(let te=0;te<z.rows;te++)B+=z.data[te];const D=R.rows===3?[...R.data64F]:null;if(ue.delete(),W.delete(),z.delete(),R.delete(),D===null||B<um)return L(null);const G=1/m,X=[[G,0,h],[0,G,p],[0,0,1]],ie=[0,1,2].map(te=>[0,1,2].map(ye=>X[te][0]*D[ye]+X[te][1]*D[3+ye]+X[te][2]*D[6+ye]));return L({H:ie,inliers:B})}function Io(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*h}const i=Math.abs(r/2)/(t*n);if(i<v_||i>S_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=x_&&s<=$_}function Eo(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function ko(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(To*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(V=>[V[0],V[1],V[2]-o*(V[0]+V[1])+0]);for(let V=0;V<3;V++)l[V][2]=r[V][2]-o*r[V][0]-o*r[V][1];const h=tt(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,c,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(c,f,e.COLOR_RGB2Lab),h.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(V,L)=>{const O=(L*s+V)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let V=0;V<u;V++)for(let L=0;L<s;L++)(V<y||V>=u-y||L<y||L>=s-y)&&b(L,V);const x=V=>{V.sort((O,H)=>O-H);const L=V.length>>1;return V.length%2?V[L]:(V[L-1]+V[L])/2},M=[x(w[0]),x(w[1]),x(w[2])],v=(V,L)=>{const O=(L*s+V)*3,H=m[O]-M[0],Y=m[O+1]-M[1],Q=m[O+2]-M[2];return Math.sqrt(H*H+Y*Y+Q*Q)>T_},T=Math.max(6,Math.trunc(lm*i)),E=Math.max(6,Math.trunc(lm*a)),k=Math.max(2,Math.trunc(cm*i)),S=Math.max(2,Math.trunc(cm*a)),A=V=>{let L=0,O=0;for(const H of V)O=H?O+1:0,O>L&&(L=O);return L/Math.max(1,V.length)},N=V=>{let L,O,H,Y,Q;if(V==="L"?(L=o,O=o+a,H=Math.max(0,o-k-T),Y=Math.max(0,o-k),Q=!1):V==="R"?(L=o,O=o+a,H=o+i+k,Y=Math.min(s,o+i+k+T),Q=!1):(L=Math.max(0,o-S-E),O=Math.max(0,o-S),H=o,Y=o+i,Q=!0),O<=L||Y<=H)return 0;const ue=[];if(Q)for(let W=H;W<Y;W++){let z=0;for(let R=L;R<O;R++)v(W,R)&&z++;ue.push(z/(O-L)>dm)}else for(let W=L;W<O;W++){let z=0;for(let R=H;R<Y;R++)v(R,W)&&z++;ue.push(z/(Y-H)>dm)}return A(ue)},U={L:N("L"),R:N("R"),T:N("T")};return c.delete(),f.delete(),U}const E_=6e3,k_=8,hm=.5,C_=.6;function A_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<So?Mo:1,a=tt(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(E_),l=new e.Mat,h=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(s,l,h,c);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=tt(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,x,M);const v=[w,x,M],T=()=>{for(const ie of v)ie.delete();b.delete()};if(M.rows<8){T();continue}const E=new e.DMatchVectorVector;f.knnMatch(M,c,E,2);const k=[],S=[];for(let ie=0;ie<E.size();ie++){const te=E.get(ie);if(te.size()===2){const ye=te.get(0);if(ye.distance<vo*te.get(1).distance){const Te=x.get(ye.queryIdx).pt,Be=h.get(ye.trainIdx).pt;k.push(Te.x,Te.y),S.push(Be.x,Be.y)}}}if(E.delete(),k.length/2<8){T();continue}const A=e.matFromArray(k.length/2,1,e.CV_32FC2,k),N=e.matFromArray(S.length/2,1,e.CV_32FC2,S),U=new e.Mat,V=e.findHomography(A,N,e.RANSAC,5,U);let L=0;for(let ie=0;ie<U.rows;ie++)L+=U.data[ie];const O=V.rows===3?[...V.data64F]:null;if(A.delete(),N.delete(),U.delete(),V.delete(),O===null||L<k_){T();continue}const H=1/i,Y=[[H*O[0],H*O[1],H*O[2]],[H*O[3],H*O[4],H*O[5]],[O[6],O[7],O[8]]],Q=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ie,te])=>Eo(Y,ie,te));if(!Io(Q,t.width,t.height)){T();continue}const ue=tt(e,t),W=e.matFromArray(3,3,e.CV_64F,Y.flat()),z=new e.Mat;e.warpPerspective(ue,z,W,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const R=new e.Mat;e.cvtColor(z,R,e.COLOR_RGB2GRAY);const B=new e.Mat;e.matchTemplate(R,b,B,e.TM_CCOEFF_NORMED);const D=B.data32F[0];if(ue.delete(),W.delete(),z.delete(),R.delete(),B.delete(),D<hm){T();continue}const G=ko(e,t,y,Y),X=Co(G);p.push({id:m,confidence:Math.max(0,D),footprint:Q,built:G!==null&&Math.max(G.L,G.R,G.T)>=ni,tuckRegion:Ao(Q,X)}),T()}}finally{s.delete(),l.delete(),h.delete(),c.delete();try{u.delete(),f.delete()}catch{}}return p}function Co(e){return e!==null&&e.R>=ni?["R"]:[]}function Ao(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=To*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],M=n[b];let v=-(M[1]-x[1]),T=M[0]-x[0];const E=(x[0]+M[0])/2,k=(x[1]+M[1])/2;v*(E-s)+T*(k-u)<0&&(v=-v,T=-T);const S=Math.hypot(v,T);S<=1e-6||(v=v/S*o,T=T/S*o,h.push([x[0]+v,x[1]+T],[M[0]+v,M[1]+T]))}const c=h.map(y=>y[0]),p=h.map(y=>y[1]),f=Math.round(Math.min(...c)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...c))-f,height:Math.round(Math.max(...p))-m}}function R_(e,t,n,r){const i=I_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>Eo(i.H,l,h));if(!Io(o,t.width,t.height))return null;const s=ko(e,t,n,i.H);if(s===null)return null;const u=Co(s);return{built:Math.max(s.L,s.R,s.T)>=ni,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const O_=.88;function pm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(To*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*O_),h=s-l;if(h<1)return null;const c=tt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(c,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,h,u)),v=new e.Mat;M.copyTo(v);const T=v.data,E=new Uint8ClampedArray(h*u*3);E.set(T.subarray(0,E.length));for(const k of[c,p,f,m,b,x,M,v])try{k.delete()}catch{}return{width:h,height:u,channels:3,data:E}}function N_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),f=Math.min(n.height,Math.trunc(a+s+l));if(c-h<8||f-p<8)return null;const m=Math.max(n.width,n.height)<So?Mo:1,y=tt(e,n),w=tt(e,t),b=y.roi(new e.Rect(h,p,c-h,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const M=new e.Mat,v=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const T=new e.ORB(sm),E=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,A=new e.Mat,N=new e.Mat,U=[y,w,b,x,M,v,E,k,S,A,N],V=ie=>{for(const te of U)try{te.delete()}catch{}try{T.delete()}catch{}return ie};if(T.detectAndCompute(M,N,E,S),T.detectAndCompute(v,N,k,A),S.rows<8||A.rows<8)return V(null);const L=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;L.knnMatch(S,A,O,2);const H=[],Y=[];for(let ie=0;ie<O.size();ie++){const te=O.get(ie);if(te.size()===2){const ye=te.get(0),Te=te.get(1);if(ye.distance<vo*Te.distance){const Be=E.get(ye.queryIdx).pt,ke=k.get(ye.trainIdx).pt;H.push(Be.x,Be.y),Y.push(ke.x,ke.y)}}}if(O.delete(),L.delete(),H.length/2<8)return V(null);const Q=e.matFromArray(H.length/2,1,e.CV_32FC2,H),ue=e.matFromArray(Y.length/2,1,e.CV_32FC2,Y),W=new e.Mat,z=e.findHomography(Q,ue,e.RANSAC,5,W);let R=0;for(let ie=0;ie<W.rows;ie++)R+=W.data[ie];const B=z.rows===3?[...z.data64F]:null;if(Q.delete(),ue.delete(),W.delete(),z.delete(),B===null||R<um)return V(null);const D=1/m,G=[[D,0,h],[0,D,p],[0,0,1]],X=[0,1,2].map(ie=>[0,1,2].map(te=>G[ie][0]*B[te]+G[ie][1]*B[3+te]+G[ie][2]*B[6+te]));return V({H:X,inliers:R})}const z_=620;function B_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function fm(e,t,n,r){const i=mm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(T=>Math.trunc(T));if(Math.min(s,u)>=z_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),c=Math.max(0,a-l),p=Math.max(0,o-h),f=Math.min(t.width,a+s+l),m=Math.min(t.height,o+u+h);if(f<=c||m<=p)return null;const y=tt(e,t),w=y.roi(new e.Rect(c,p,f-c,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-c)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=B_(e,b);for(const T of[y,w,b])try{T.delete()}catch{}const M=[(a-c)*2,(o-p)*2,s*2,u*2],v=mm(e,x,n,M);return v===null?null:{...v,footprint:v.footprint.map(([T,E])=>[T*.5+c,E*.5+p])}}catch{return null}}function mm(e,t,n,r){const i=N_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>Eo(i.H,b,x));if(!Io(o,t.width,t.height))return null;const s=tt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=tt(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(c,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,h,c,p,f])try{b.delete()}catch{}if(m<hm)return null;const y=ko(e,t,n,i.H);if(y===null)return null;const w=Co(y);return{built:Math.max(y.L,y.R,y.T)>=ni,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}function P_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const c=r*l,p=r*h;if(t>=s-c&&t<=s+l+c&&n>=u-p&&n<=u+h+p){const f=l*h;f<a&&(a=f,i=[s,u,l,h])}}return i}const D_=.3,U_=.3;function L_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=D_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<U_;if(!r&&!h)return;t.some(([p,f])=>p>=a.zone.x0&&p<=a.zone.x1&&f>=a.zone.y0&&f<=a.zone.y1)||i.push(o)}),i}const Rt=128,Ro=.5;function Oo(e){const t=Kn(e,Rt,Rt),n=Rt*Rt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function gm(e){const t=e[1]??0;return{built:t>=Ro,prob:t}}const xr=120,$r=179,F_=1.3,G_=3.6,W_=.45,q_=6e-4,V_=.02,H_=6e3,j_=.78,K_=1.25,Y_=2.4,X_=.05,Z_=1.5,Q_=.5,J_=.9,eb=150,tb=18,nb=34,rb=90,ib=130,ab=.13,ob=.15,ri="magistrates-guild",No="merchants-guild";function sb(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[xr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[$r,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,c=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,h,c,p,8);l.delete(),h.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=c.intAt(w,0),x=c.intAt(w,1),M=c.intAt(w,2),v=c.intAt(w,3),T=c.intAt(w,4),E=T/m;E<q_||E>V_||T/Math.max(M*v,1)<W_||y.push({x:b,y:x,w:M,h:v})}return c.delete(),{blobs:y,mask:s,maskWidth:t.width}}function ub(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const D=tt(e,r);h.gray=new s.Mat,s.cvtColor(D,h.gray,s.COLOR_RGB2GRAY),D.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const G=new s.Mat;u.detectAndCompute(h.gray,G,h.k,h.d),G.delete()}const c=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(c,p,f,m),p.delete();const y=D=>(f.delete(),m.delete(),D);if(h.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(h.d,m,w,2);const b=[],x=[];for(let D=0;D<w.size();D++){const G=w.get(D);if(G.size()===2){const X=G.get(0);if(X.distance<j_*G.get(1).distance){const ie=h.k.get(X.queryIdx).pt,te=f.get(X.trainIdx).pt;b.push(ie.x,ie.y),x.push(te.x,te.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),T=new s.Mat,E=s.findHomography(M,v,s.RANSAC,5,T);if(M.delete(),v.delete(),T.delete(),E.rows!==3)return E.delete(),y(null);const k=[...E.data64F],S=(D,G)=>{const X=k[6]*D+k[7]*G+k[8];return[(k[0]*D+k[1]*G+k[2])/X,(k[3]*D+k[4]*G+k[5])/X]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,G])=>S(D,G));if(A.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return E.delete(),y(null);const N=A.map((D,G)=>{const X=A[(G+1)%4];return Math.hypot(X[0]-D[0],X[1]-D[1])}),U=Math.min(...N);if(U<1)return E.delete(),y(null);const V=Math.max(...N)/U;let L=0;for(let D=0;D<4;D++){const[G,X]=A[D],[ie,te]=A[(D+1)%4];L+=G*te-ie*X}const O=t,H=Math.abs(L/2)/(O.rows*O.cols);if(V<K_||V>Y_||H<X_||H>Z_)return E.delete(),y(null);const Y=new s.Mat;s.warpPerspective(O,Y,E,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),E.delete();const Q=new s.Mat;s.cvtColor(Y,Q,s.COLOR_RGB2GRAY),Y.delete();const ue=Math.trunc(r.height/2),W=Q.roi(new s.Rect(0,0,r.width,ue)),z=h.gray.roi(new s.Rect(0,0,r.width,ue)),R=new s.Mat;s.matchTemplate(W,z,R,s.TM_CCOEFF_NORMED);const B=R.data32F[0];return W.delete(),z.delete(),R.delete(),Q.delete(),y(B)}function lb(e,t,n){let r,i;if(n===ri)r=No,i=ab;else if(n===No)r=ri,i=ob;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,c=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=o;b<o+u;b++)for(let x=a+p;x<a+f;x++){const M=(b*e.width+x)*e.channels,{h:v,s:T,v:E}=Mt(e.data[M],e.data[M+1],e.data[M+2]);if(v>=xr&&v<=$r&&T>=30&&T<=170&&E<=170)continue;m++,(r===No?v>=tb&&v<=nb&&T>=rb&&E>=ib:v>=95&&v<=130&&T>=80)&&y++}if(m<20)continue;const w=y/m;w>h&&(h=w,c={x:a+p,y:o,w:f-p,h:u})}return h>=i&&c!==null?{id:r,box:c}:null}const cb=1.7,db=140,hb=170,pb=.2,fb=.1,ym=240,wm=80,_m=60,mb=50,bm="scientists-guild",xm="tacticians-guild",ii=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function gb(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let v=0;v<o;v++){let T=0;for(let E=0;E<a;E++)e[(i+v)*t+r+E]>0&&T++;s[v]=T/a}const u=[];for(let v=0;v<o;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],h=u[u.length-1],c=h-l;if(c<5)return[];const p=a/c;if(p<F_||p>G_)return[];if(p>=cb)return[{x:r,y:i+l,w:a,h:c}];const f=new Float32Array(o),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const T=Math.exp(-(v*v)/(2*m*m));y.push(T),w+=T}for(let v=0;v<o;v++){let T=0;for(let E=-4;E<=4;E++){const k=Math.min(o-1,Math.max(0,v+E));T+=s[k]*y[E+4]}f[v]=T/w}const b=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let M=l+Math.trunc(c/2);if(x>b){let v=1/0;for(let T=b;T<x;T++)f[T]<v&&(v=f[T],M=T)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function yb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const c=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:o,height:s,channels:3,data:u}}function wb(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Mt(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=db&&o<=hb&&n++)}return t===0?0:n/t}function _b(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Mt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=xr&&a<=$r)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function $m(e,t){const n=tt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(ym,wm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:ym,height:wm,channels:3,data:i}}function bb(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function vm(e,t){const n=bb(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=Mt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=xr&&w<=$r&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,a++)}const o=a<20,s=tt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,c=0,p=0,f=0;for(let m=0;m<r;m++)!o&&i[m]===0||(h+=l[m*3]*100/255,c+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[h/f,c/f,p/f]}function xb(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:c,v:p}=Mt(e.data[l],e.data[l+1],e.data[l+2]);h>=xr&&h<=$r&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function $b(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Mt(e.data[i],e.data[i+1],e.data[i+2]);o>=_m&&s>=mb?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<_m&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function vb(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function Sm(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function Sb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=$m(e,a);n.set(i,Sm(e,o)),ii.includes(i)&&r.set(i,vm(e,o))}return{gray:n,warmLab:r}}function Mb(e,t,n){const r=$m(e,t),i=xb(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ri;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return bm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return xm;const a=$b(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=ri;else if(s==="green")u=bm;else if(s==="red")u=xm;else{const l=Sm(e,r);let h="",c=-2;for(const p of ii){const f=n.gray.get(p);if(f===void 0)continue;const m=vb(l,f);m>c&&(c=m,h=p)}u=h||ii[0]}if(ii.includes(u)&&n.warmLab.size>0){const l=vm(e,r);let h=u,c=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<c&&(c=m,h=p)}return h}return u}function Tb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=sb(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(H_),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=tt(e,t);let m=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(eb,Math.trunc(J_*Math.max(w.w,w.h))),v=Math.max(0,b-M),T=Math.max(0,x-M),E=Math.min(t.width,b+M),k=Math.min(t.height,x+M);if(E-v<16||k-T<16)continue;const S=f.roi(new l.Rect(v,T,E-v,k-T)),A=new l.Mat;l.cvtColor(S,A,l.COLOR_RGB2GRAY);let N=null,U=-2;for(const[H,Y]of n){if(r!==void 0&&Date.now()>r)break;const Q=ub(e,S,A,Y,p.get(H),h,c);Q!==null&&Q>U&&(U=Q,N=H)}S.delete(),A.delete();const V=new Set;if(N!==null&&U>=Q_){a.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),V.add(N);const H=lb(t,w,N);H&&(a.push({id:H.id,boundingBox:{x:H.box.x,y:H.box.y,width:H.box.w,height:H.box.h},confidence:.9}),V.add(H.id))}if(i===void 0||i.size===0)continue;const L=gb(s,u,w);if(L.length!==2)continue;const O=L.map(H=>yb(t,H));if(!O.some(H=>H.width*H.height===0||_b(H)<fb))for(let H=0;H<L.length;H++){const Y=O[H];if(wb(Y)<pb)continue;m===null&&(m=Sb(e,i));const Q=Mb(e,Y,m);if(Q&&!V.has(Q)){V.add(Q);const ue=L[H];a.push({id:Q,boundingBox:{x:ue.x,y:ue.y,width:ue.w,height:ue.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{h.delete(),c.delete()}catch{}}return a}const Mm=128,Ib=.56,Eb=15,kb=.58,Cb=70,Ab=50,Rb=.12,Ob=.2,Nb=.1,zb=.17,Tm=.15;function Bb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Im(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),c=Math.min(n,o+u),p=Math.min(r,s+u),f=c-l,m=p-h,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+h)*n+l)*i;y.set(a.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function Pb(e){const t=Im(e,Ib),n=Ew(t),r=rm(n,Mm,Mm);return kw(r)}function Db(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function Ub(e){const t=new Map([["masonry",0],["strategy",0]]),n=Im(e,kb),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*a,{h:m,s:y,v:w}=Mt(o[f],o[f+1],o[f+2]);y>=Cb&&w>=Ab&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const h=u/s,c=l/s;return h>=Rb&&t.set("masonry",Tm*Math.min(1,h/Ob)),c>=Nb&&t.set("strategy",Tm*Math.min(1,c/zb)),t}function Lb(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=Pb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=Eb)a.push(Rw(n,l,i));const o=new Map;for(const[l,h]of t){let c=-1/0;for(const p of a){const f=Db(p,h);f>c&&(c=f)}o.set(l,c)}for(const[l,h]of Ub(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const nn=224,Fb=512,Gb=[.485,.456,.406],Wb=[.229,.224,.225];function qb(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function Vb(e){const t=fo(e,nn,nn),n=nn*nn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Gb[a])/Wb[a];return r}function Hb(e){const t=3*nn*nn,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(Vb(qt(e,r)),r*t);return n}function jb(e,t=Fb){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function Kb(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Xn=96,Yb=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Xb=.45;function Zb(e){const t=fo(e,Xn,Xn),n=Xn*Xn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Qb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Xb?Yb[t]??"":"",prob:n}}const Zn=128,Jb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],e1=.5,t1=.9;function n1(e){const t=Kn(e,Zn,Zn),n=Zn*Zn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function r1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,c=(o*n+s)*r;for(let p=0;p<r;p++)a[c+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function i1(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=r1(n);return n}function a1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function o1(e,t){let n=0,r=-1;for(let a=0;a<4;a++){const o=a===0?e:i1(e,a),s=await t(n1(o)),u=a1(s);u.prob>r&&(r=u.prob,n=u.index)}const i=r>=e1?Jb[n]??"":"";return{id:i==="other"?"":i,prob:r}}const Qn=96,s1=[1,2,3,4,5,6,7],u1=.8;function l1(e){const t=mo(e,e.width*2,e.height*2),n=Kn({width:e.width*2,height:e.height*2,channels:3,data:t},Qn,Qn),r=Qn*Qn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function c1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:s1[t],prob:e[t]}}const rn=128,Em=.35,d1=["fp","laurel"],h1=.85;function p1(e){const r=(e.width<rn&&e.height<rn?mo:Kn)(e,rn,rn),i=rn*rn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function f1(e){return e[d1.indexOf("fp")]}const an=128,m1=.15,km=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],g1=7,y1=.9;function w1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*m1),h=Math.max(0,at(s-l/2)),c=Math.max(0,at(u-l/2)),p=Math.min(t,at(s+l/2)),f=Math.min(n,at(u+l/2));return p-h<8||f-c<8?null:{x:h,y:c,w:p-h,h:f-c}}function _1(e){const r=(e.width<an&&e.height<an?mo:Kn)(e,an,an),i=an*an,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function b1(e){let t=0;for(let i=1;i<km.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=g1;return{className:km[t],probability:n,rejected:r&&n>=y1}}const ai=3,x1=2.2,$1=.3,v1=.65,S1=3,M1=1.3,T1=.77;function Cm(e,t,n){const[r,i,a,o]=e,s=[];return r<=ai&&s.push("gauche"),i<=ai&&s.push("haut"),r+a>=t-ai&&s.push("droit"),i+o>=n-ai&&s.push("bas"),s}function Am(e){const t=e[3]/Math.max(e[2],1);return t>=M1?"portrait":t<=T1?"paysage":null}function zo(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function I1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>v1)return!0;return!1}function E1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Cm(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(I1(n,r,i))return u("photo-piste");if(s.length<S1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=zo(s.map(w=>w.box[2]*w.box[3])),h=zo(s.map(w=>w.box[2])),c=zo(s.map(w=>w.box[3])),p=new Set(s.map(w=>Am(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of o){const b=Cm(w.box,r,i),[,,x,M]=w.box,v=l>0?x*M/l:0,T=[];(b.includes("gauche")||b.includes("droit"))&&T.push(h>0?x/h:1),(b.includes("haut")||b.includes("bas"))&&T.push(c>0?M/c:1);const E=T.length>0?Math.min(...T):1,k=Am(w.box);v>x1?m.push({banner:w,edgeReason:"bord-grosse"}):E<$1?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const k1=1,C1=1.5;function A1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function R1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function O1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function N1(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let h=null;for(const[p,f]of A1(e)){const m=R1(u,l,p,f);m!==null&&(h===null||m[0]<h[0])&&(h=m)}if(h===null)return null;const c=O1(e);return c===null?null:{distBord:h[0]/r,decalLat:h[1]/r,perpendiculaire:c!==o>s}}catch{return null}}function z1(e,t,n,r=k1,i=C1){const a=[];for(const[o,s]of t??[]){const u=N1(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const on=64,Rm=.5,B1=[.67,1.24];function P1(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=a+w,x=b-n;for(let M=0;M<u;M++){const v=i+M,T=v-t,E=(w*u+M)*3;if(T*T+x*x<=p){const k=(b*e.width+v)*h;c[E]=e.data[k],c[E+1]=e.data[k+1],c[E+2]=e.data[k+2]}else c[E]=255,c[E+1]=255,c[E+2]=255}}const f=Kn({width:u,height:l,channels:3,data:c},on,on),m=on*on,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function D1(e){return e[1]}const U1=2.25,oi=3,L1=1.15,F1=.5,G1=2.5,W1=.75,q1=2.25,V1=1.3,H1=.77;function si(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function j1(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Om(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function K1(e,t,n){if(n.length>=3&&Om(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,c=l-s,p=h*h+c*c,f=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*c)/p));r=Math.min(r,Math.hypot(e-(o+f*h),t-(s+f*c)))}return r}function Y1(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function X1(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let c=0,p=1;const f=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?c=Math.max(c,w):p=Math.min(p,w),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const Bo=e=>e.box[3]/Math.max(1,e.box[2]),Ht=e=>Bo(e)>L1,Jn=e=>Bo(e)>=V1||Bo(e)<=H1;function Po(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Do(e,t,n,r,i){const a=new Set(t),o=[...e.map((z,R)=>({box:[z[0],z[1],z[2],z[3]],kind:a.has(R)?"card":"tucked",src:["banner",R]})),...n.map((z,R)=>({box:[z[0],z[1],z[2],z[3]],kind:"wonder",src:["wonder",R]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=o.map(z=>[z.box[0]+z.box[2]/2,z.box[1]+z.box[3]/2]);let h=o.filter(z=>z.kind!=="wonder").map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,R)=>z-R);h.length===0&&(h=o.map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,R)=>z-R));const c=h[Math.floor(h.length/2)],p=(U1*c)**2,f=o.map((z,R)=>R),m=z=>{let R=z;for(;f[R]!==R;)f[R]=f[f[R]],R=f[R];return R},y=o.map((z,R)=>z.kind==="card"?R:-1).filter(z=>z>=0),w=o.map((z,R)=>z.kind!=="card"?R:-1).filter(z=>z>=0);for(let z=0;z<y.length;z+=1)for(let R=z+1;R<y.length;R+=1){const B=y[z],D=y[R],G=o[B],X=o[D];if(Jn(G)&&Jn(X)&&Ht(G)!==Ht(X))continue;const ie=l[B][0]-l[D][0],te=l[B][1]-l[D][1],ye=ie*ie+te*te;let Te=ye<=p;!Te&&Jn(G)&&Jn(X)&&Ht(G)===Ht(X)&&ye<=(4*c)**2&&(Te=si(Po(G),Po(X))<=.5*c),Te&&(f[m(B)]=m(D))}for(let z=0;z<w.length;z+=1)for(let R=z+1;R<w.length;R+=1){const B=w[z],D=w[R];si(o[B].box,o[D].box)<=W1*c&&(f[m(B)]=m(D))}const b=new Map;for(const z of w){const R=m(z);b.set(R,[...b.get(R)??[],z])}const x=new Map;for(const z of y){const R=m(z);x.set(R,[...x.get(R)??[],z])}for(const z of b.values()){const R=z.filter(X=>o[X].kind==="wonder"&&Jn(o[X])).map(X=>Ht(o[X])),B=R.length>0?R.filter(Boolean).length*2>R.length:null,D=[];for(const[X,ie]of x){let te=Number.POSITIVE_INFINITY;for(const Be of z)for(const ke of ie)te=Math.min(te,si(o[Be].box,o[ke].box));if(te>q1*c)continue;const Te=ie.filter(Be=>Ht(o[Be])).length/ie.length>=.5;B!==null&&Te!==B||D.push([X,te,Te])}if(D.length===0)continue;const G=new Set(D.map(X=>X[2]));if(D.length>=2&&G.size===1&&B!==null){const X=D[0][0];for(const[ie]of D.slice(1))f[m(ie)]=m(X);f[m(z[0])]=m(X)}else{const X=D.reduce((ie,te)=>te[1]<ie[1]?te:ie);f[m(z[0])]=m(X[0])}}let M=new Map;for(let z=0;z<o.length;z+=1){const R=m(z);M.set(R,[...M.get(R)??[],z])}const v=o.map((z,R)=>z.kind==="wonder"?R:-1).filter(z=>z>=0);if(v.length>0){const z=(B,D)=>{const[G,X,ie,te]=Po(o[B]),[ye,Te,Be,ke]=o[D].box,ot=Math.max(0,Math.min(G+ie,ye+Be)-Math.max(G,ye)),Oe=Math.max(0,Math.min(X+te,Te+ke)-Math.max(X,Te));return ot*Oe>=.9*o[B].box[2]*o[B].box[3]},R=new Map;for(let B=0;B<o.length;B+=1)if(!(o[B].kind!=="card"||!Jn(o[B])))for(const D of v){const G=si(o[B].box,o[D].box);if(G<=.8*c&&Ht(o[B])!==Ht(o[D])&&z(B,D)){const X=R.get(D);(!X||G<X[1])&&R.set(D,[B,G])}}for(const[B,[D]]of R){const G=m(B);for(const[X,ie]of M){const te=ie.indexOf(D);if(te>=0&&X!==G){ie.splice(te,1),M.set(G,[...M.get(G)??[],D]),o[D].kind="tucked";break}}}M=new Map([...M].filter(([,B])=>B.length>0))}const T=z=>z.filter(R=>o[R].kind==="card").length,E=z=>{const R=z.filter(B=>o[B].kind==="card"||o[B].kind==="wonder");return R.length===0?null:R.filter(B=>Ht(o[B])).length/R.length},k=z=>[z.reduce((R,B)=>R+l[B][0],0)/z.length,z.reduce((R,B)=>R+l[B][1],0)/z.length],S=[i[0]/2,i[1]/2],A=[...M.values()].sort((z,R)=>{const B=T(z),D=T(R);if(B!==D)return D-B;const G=Math.hypot(k(z)[0]-S[0],k(z)[1]-S[1]),X=Math.hypot(k(R)[0]-S[0],k(R)[1]-S[1]);return G-X}),N=k(A[0]),U=E(A[0]),V=A.map((z,R)=>{if(R===0||T(z)<oi)return"player";const B=E(z),D=B!==null&&U!==null&&Math.abs(B-U)>=F1,G=k(z),X=r.some(ie=>X1(N,G,ie));return D||X?"opponent":"player"});if(!V.includes("opponent")){const z=B=>B.reduce((D,G)=>D+(o[G].kind==="wonder"?1:0),0);let R=V.map((B,D)=>D).filter(B=>B>0&&(T(A[B])>=oi||z(A[B])>=2));if(R.reduce((B,D)=>B+z(A[D]),0)<1&&(R=[]),R.length>0&&(T(A[0])<2*oi||R.reduce((B,D)=>B+T(A[D]),0)<2*oi)&&(R=[]),R.length>0){const B=new Map(R.map(X=>[X,k(A[X])])),D=(X,ie)=>(X[0]-ie[0])**2+(X[1]-ie[1])**2;if(R.every((X,ie)=>R.slice(ie+1).every(te=>D(B.get(X),B.get(te))<Math.min(D(B.get(X),N),D(B.get(te),N)))))for(const X of R)V[X]="opponent"}}const L=[],O=[];let H=!1;A.forEach((z,R)=>{const B=V[R];B==="opponent"&&(H=!0);const D=[],G=[];for(const X of z){const[ie,te,ye,Te]=o[X].box;D.push([ie,te],[ie+ye,te],[ie,te+Te],[ie+ye,te+Te]),G.push(o[X].box);const[Be,ke]=o[X].src;Be==="banner"?s[ke]=B:u[ke]=B}L.push([B,j1(D)]),O.push([B,G])});const Y=(z,R,B)=>Math.min(...O[B][1].map(D=>Y1(z,R,D))),Q=(z,R)=>L.map(([,B],D)=>B.length>=3&&Om(z,R,B)?D:-1).filter(B=>B>=0),ue=(z,R)=>{if(L.length===0)return"player";const B=c>0?G1*c:Number.POSITIVE_INFINITY,D=Q(z,R);if(D.length>0){const ie=D.reduce((te,ye)=>Y(z,R,ye)<Y(z,R,te)?ye:te);return L[ie][0]}let G=-1,X=Number.POSITIVE_INFINITY;return L.forEach(([,ie],te)=>{const ye=K1(z,R,ie);ye<X&&(G=te,X=ye)}),G>=0&&X<=B?L[G][0]:"none"},W=(z,R)=>{if(L.length===0)return"none";const B=Q(z,R);if(B.length===0)return"none";const D=B.reduce((G,X)=>Y(z,R,X)<Y(z,R,G)?X:G);return L[D][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:H,hulls:L,hullBoxCounts:O.map(([,z])=>z.length),pointOwner:ue,pointInside:W}}const Z1=3;function Q1(e,t=Z1){const n=e.length,r=Array.from({length:n},(o,s)=>s),i=o=>{for(;r[o]!==o;)r[o]=r[r[o]],o=r[o];return o};for(let o=0;o<n;o+=1)for(let s=o+1;s<n;s+=1){const u=e[o],l=e[s],h=Number(u.center[0]),c=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![h,c,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(h-p,c-f)<=t*(m+y)&&(r[i(o)]=i(s))}const a=new Map;for(let o=0;o<n;o+=1){const s=i(o);a.has(s)||a.set(s,[]),a.get(s).push(o)}return[...a.values()]}function J1(e,t,n){const r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),o=Number(n[3]),s=Math.max(Math.min(r,a)-e,0,e-Math.max(r,a)),u=Math.max(Math.min(i,o)-t,0,t-Math.max(i,o));return Math.hypot(s,u)}function e2(e,t,n,r){const i=()=>e.filter(a=>t.pointOwner(Number(a.center[0]),Number(a.center[1]))===n);try{const a=new Set(i());if(a.size===0)return[];const o=Q1(e),s=[];for(const l of o){const h=l.map(M=>e[M]),c=h.filter(M=>a.has(M));if(c.length===0)continue;let p=0,f=0,m=0;for(const M of h){const v=Number(M.center[0]),T=Number(M.center[1]);f+=v,m+=T,t.pointInside(v,T)===n&&(p+=1)}const y=f/h.length,w=m/h.length,b=r&&r.length>0?Math.min(...r.map(M=>J1(y,w,M))):0,x=c.reduce((M,v)=>M+(Number(v.denomination??0)||0),0);s.push({miens:c,inside:p,dPiste:b,valeur:x})}return s.length===0?[]:s.length===1?s[0].miens:s.reduce((l,h)=>{const c=[l.inside>0?1:0,l.inside,l.dPiste,l.valeur],p=[h.inside>0?1:0,h.inside,h.dPiste,h.valeur];for(let f=0;f<4;f+=1){if(p[f]>c[f])return h;if(p[f]<c[f])return l}return l}).miens}catch{try{return i()}catch{return[...e]}}}const t2=1280,n2=80,r2=3,i2=3,a2=.3,o2=2.4,s2=1,u2=5.2,l2=5;function Uo(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function c2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=a2&&r/n<=o2&&i/n>=s2&&i/n<=u2&&i/r<=l2}function d2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*t2/r<n2}function h2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let h=n[0],c=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<c&&(c=f,h=p)}h.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Nm(e,t,n,r,i=[]){const a=Uo(n);if(!d2(e,t,a))return[];const o=r.filter(l=>l.n>=i2&&l.poly.length>0).slice().sort((l,h)=>h.n-l.n).slice(0,2),s=Math.round(a*r2),u=[];for(const l of h2(o,i)){const h=l.poly.map(w=>w[0]),c=l.poly.map(w=>w[1]);if(h.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...h))-s),f=Math.max(0,Math.trunc(Math.min(...c))-s),m=Math.min(e,Math.trunc(Math.max(...h))+s),y=Math.min(t,Math.trunc(Math.max(...c))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function p2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return c2(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}function f2(e,t,n,r,i){return Nm(e,t,n,r,i)}function m2(e,t){var s,u,l,h;const[n,r,i,a]=t,o=[];for(const c of e){const p=Number((s=c.box)==null?void 0:s[0]),f=Number((u=c.box)==null?void 0:u[1]),m=Number((l=c.box)==null?void 0:l[2]),y=Number((h=c.box)==null?void 0:h[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>a||o.push({...c,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return o}function g2(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,a=r.y+r.height/2;let o=!1;for(const s of t){if(n.id&&s.id===n.id){o=!0;break}const u=s.boundingBox,l=u.x+u.width/2,h=u.y+u.height/2,c=.5*Math.min(u.width,u.height);if((i-l)**2+(a-h)**2<c*c){o=!0;break}}o||t.push(n)}return t}function zm(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const y2=1.1,w2=3.2,_2=20,b2=.5,x2=1280,$2=.18,v2=28,S2=.3;function M2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,c)=>c)];const l=(s.reduce((h,c)=>h+c,0)/s.length+u.reduce((h,c)=>h+c,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function T2(e,t,n=y2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of M2(s)){if(l.length===0)continue;const h=l.map(A=>e[A]),c=h.map(A=>Math.min(A[2],A[3])).sort((A,N)=>A-N),p=c[Math.trunc(c.length/2)],f=w2*p,m=Math.max(0,Math.min(...h.map(A=>A[0]))-f),y=Math.max(0,Math.min(...h.map(A=>A[1]))-f),w=Math.min(r,Math.max(...h.map(A=>A[0]+A[2]))+f),b=Math.min(i,Math.max(...h.map(A=>A[1]+A[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const M=b2*p*x2/x,v=M>0?Math.max(1,Math.ceil(_2/M)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const T=w-m>=b-y,k=(T?w-m:b-y)/v,S=k*(1+$2);for(let A=0;A<v;A++){let N=(T?m:y)+A*k-(S-k)/2;N=Math.max(T?m:y,N);const U=Math.min(T?w:b,N+S);u.push(T?[Math.trunc(N),Math.trunc(y),Math.trunc(U),Math.trunc(b)]:[Math.trunc(m),Math.trunc(N),Math.trunc(w),Math.trunc(U)])}}return u.filter(([l,h,c,p])=>Math.max(r,i)/Math.max(1,Math.max(c-l,p-h))>=n)}function I2(e,t,n,r=v2){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const c=(s+l)/2+i,p=(u+h)/2+a;o.some(([m,y,w,b])=>{const x=c-(m+w)/2,M=p-(y+b)/2;return Math.hypot(x,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function E2(e,t,n,r=S2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function k2(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function C2(e,t,n,r){return n.length===0?!1:k2(e,t,n)&&!E2(e,t,r)}const Bm=4,Pm=8,ui=5,Rn="base-game rule";function Ot(e,t){return{code:e,message:t,severity:"warning"}}function Lo(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function A2(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Bm&&i.push(Ot("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Bm} (${Rn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=Lo(n);return a.length>0&&i.push(Ot("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${Rn}), so one of the two readings is wrong.`)),i}function R2(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Pm&&t.push(Ot("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Pm} are in play (${Rn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(c=>l.has(c)).sort();h.length>0&&t.push(Ot("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function O2(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>ui&&n.push(Ot("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ui} are in play (${Rn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Lo(r);if(i.length>0&&n.push(Ot("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Rn}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==ui&&n.push(Ot("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${ui} are in play (${Rn}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Ot("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function N2(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Ot("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=Lo(e.filter(o=>!!o));return a.length>0&&r.push(Ot("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${Rn}).`)),r}const z2=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],B2=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],P2=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],D2=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],U2=[...B2,...P2,...D2,...z2];Object.fromEntries(U2.map(e=>[e.id,e]));const L2=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Dm=.2,F2=.3,Um=.25;function G2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Um)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=Um)&&r>1==h>1)return!0}return!1}async function W2(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*Dm),u=Math.round(o*Dm),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),f=c-l,m=p-h;if(f<=0||m<=0)return null;const y=e.channels,w=new Uint8ClampedArray(f*m*y);for(let M=0;M<m;M++){const v=((h+M)*e.width+l)*y;w.set(e.data.subarray(v,v+f*y),M*f*y)}const b={width:f,height:m,channels:y,data:w};let x=null;for(let M=0;M<4;M++){const v=M===0?b:qt(b,M),T=v.width,E=T-Math.floor(F2*T),k=T-E;if(k<=0)continue;const S=new Uint8ClampedArray(k*v.height*v.channels);for(let L=0;L<v.height;L++){const O=(L*T+E)*v.channels;S.set(v.data.subarray(O,O+k*v.channels),L*k*v.channels)}const A={width:k,height:v.height,channels:v.channels,data:S},N=Oo(A),V=(await n.run({[n.inputNames[0]]:new Ve("float32",N,[1,3,Rt,Rt])}))[n.outputNames[0]].data[1]??0;x=x===null?V:Math.max(x,V)}return x}async function Lm(e,t,n,r,i,a,o){var f;const s=(m,y,w,b)=>{const x=Math.max(0,Math.round(m)),M=Math.max(0,Math.round(y)),v=Math.min(n.width,Math.round(m+w)),T=Math.min(n.height,Math.round(y+b)),E=v-x,k=T-M;if(E<=0||k<=0)return null;const S=n.channels,A=new Uint8ClampedArray(E*k*S);for(let N=0;N<k;N++){const U=((M+N)*n.width+x)*S;A.set(n.data.subarray(U,U+E*S),N*E*S)}return{width:E,height:k,channels:S,data:A}},u=async m=>(await i.run({[i.inputNames[0]]:new Ve("float32",m,[1,3,Zn,Zn])}))[i.outputNames[0]].data,l=new Map;for(const m of r){const[y,w,b,x]=m;if(b<=0||x<=0)continue;const M=s(y,w,b,x);if(M===null)continue;const{id:v,prob:T}=await o1(M,u);if(v===""||T<t1)continue;const E=l.get(v);(E===void 0||T>E.prob)&&l.set(v,{prob:T,box:m})}const h=[],c=await e.tuckClassifier(),p=await e.tuckBoxClassifier();for(const[m,{prob:y,box:w}]of l){const[b,x,M,v]=w;let T={x:Math.round(b),y:Math.round(x),width:Math.round(M),height:Math.round(v)},E=null,k=[],S=null;if(Date.now()<a)try{const Y=await e.wonderRef(m);if(Y!==null){const Q=fm(t,n,Y,w);if(Q!==null){E=Q.footprint,k=Q.overflow;const ue=E.map(B=>B[0]),W=E.map(B=>B[1]),z=Math.max(0,Math.round(Math.min(...ue))),R=Math.max(0,Math.round(Math.min(...W)));if(T={x:z,y:R,width:Math.min(n.width,Math.round(Math.max(...ue)))-z,height:Math.min(n.height,Math.round(Math.max(...W)))-R},c!==null)try{const B=pm(t,n,Y,E);if(B!==null){const D=Oo(B),G=await c.run({[c.inputNames[0]]:new Ve("float32",D,[1,3,Rt,Rt])});S=gm(G[c.outputNames[0]].data).prob}}catch{}}}}catch(Y){console.warn(`[wonders-cls] ${m} registration failed:`,Y)}const A=E!==null?Ao(E,k):null,N=[];if(S!==null&&N.push(S>=Ro?1:0),p!==null)try{const Y=await W2(n,w,p);Y!==null&&N.push(Y>=Ro?1:0)}catch{}const U=A??T,V=o.some(Y=>{const Q=Y.box[0]+Y.box[2]/2,ue=Y.box[1]+Y.box[3]/2;return Q>=U.x&&Q<=U.x+U.width&&ue>=U.y&&ue<=U.y+U.height});N.push(V?1:0);let L=N.length>0&&N.reduce((Y,Q)=>Y+Q,0)*2>N.length;L&&G2(U,T,o)&&(L=!1);const O={id:m,name:((f=L2[m])==null?void 0:f.name)??m,builtWithCardUnderneath:L,boundingBox:T,confidence:Math.round(y*1e4)/1e4,...A?{tuckRegion:A}:{}},H=A??T;h.push({obj:O,edgeScores:null,zone:{x0:H.x,y0:H.y,x1:H.x+H.width,y1:H.y+H.height},quad:E,region:A})}return h}async function q2(e,t,n,r,i,a){const o=await e.localiseWonders(n);return o.length===0?[]:Lm(e,t,n,o,r,i,a)}function V2(e,t){const n=zm(e.obj.boundingBox,t),r=e.region===null?null:zm(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([a,o])=>[a+t[0],o+t[1]]),region:r}}async function H2(e){try{const t=f2(e.image.width,e.image.height,e.banners.map(o=>o.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const o of t){const s=e.cropFrame(o);if(!(s.width<=0||s.height<=0))for(const u of await e.detect(s,m2(e.banners,o)))n.push(V2(u,o))}if(n.length===0)return[];const r=[...e.known.map(o=>({boundingBox:o.boundingBox,id:o.id,neuf:-1})),...n.map((o,s)=>({boundingBox:o.obj.boundingBox,id:o.obj.id,neuf:s}))],i=g2(r),a=[];for(const o of i){const s=o.neuf;s>=0&&a.push(n[s])}return a}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const De="/7wd-scorer/models/";let Fm=!1;const li=new Map;function Gm(){var e;Fm||(Fe.wasm.wasmPaths="/7wd-scorer/ort/",Fe.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Fm=!0)}const Fo=new Set;function j2(e){Gm();let t=li.get(e);return t===void 0&&(t=nt.create(`${De}${ut[e].onnx}`,{executionProviders:Fo.has(e)?["wasm"]:["webgpu","wasm"]}),li.set(e,t),t.catch(()=>li.delete(e))),t}let Go=null,Wo=null;const K2=.75,Y2=4,X2=.65,Z2=3e4;let qo=null;function ci(){return qo===null&&(qo=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),qo}const Wm=new Map;function Vo(e){let t=Wm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${De}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Wm.set(e,t)),t}function Ho(e){return Vo(`wonder-refs/${e}.jpg`)}const qm=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Q2(){const e=new Map;for(const t of qm){const n=await Vo(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function J2(){const e=new Map;for(const t of qm){const n=await Vo(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const ex=.6,tx=12,nx=45e3;let jo=null;function Vm(){return jo===null&&(Gm(),jo=(async()=>{try{const[e,t,n,r]=await Promise.all([nt.create(`${De}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),nt.create(`${De}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${De}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${De}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:d_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),jo}async function rx(e,t){const n=Math.max(c_/Vt,t.width/t.height),{tensor:r,width:i}=p_(t,n),a={[e.rec.inputNames[0]]:new Ve("float32",r,[1,3,Vt,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,c=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=h[w+b];x>y&&(y=x,m=b)}c[f]=m,p[f]=y}return h_(c,p,e.charset)}async function ix(e,t){const n=await Vm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+nx;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=qt(e,o),u=e_(s),l={[n.det.inputNames[0]]:new Ve("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],c=o_(h.data,u,s.width,s.height).slice(0,tx);console.debug(`[wonders-ocr] rot ${o*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){a=!0;break e}const f=s_(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await rx(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<ex||m.trim().length<Y2)continue;const w=b_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<K2||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Ko(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Ko(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(c=>c[0]),u=o.map(c=>c[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function ax(){return Wo===null&&(Wo=fetch(`${De}laurel_gallery.json`).then(async e=>e.ok?Gw(await e.json()):[]).catch(()=>[])),Wo}function ox(e,t,n,r){return jt(e,t-r,n-r,2*r,2*r)}function jt(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let f=0;f<l;f++){const m=((p+o)*e.width+(f+a))*e.channels,y=(p*l+f)*3;c[y]=e.data[m],c[y+1]=e.data[m+1],c[y+2]=e.data[m+2]}return{width:l,height:h,channels:3,data:c}}function sx(){return Go===null&&(Go=fetch(`${De}token_templates.json`).then(async e=>e.ok?Bb(await e.json()):new Map).catch(()=>new Map)),Go}let Yo=null;function ux(){return Yo===null&&(Yo=(async()=>{try{const e=await fetch(`${De}token_embed_index.json`);if(!e.ok)return null;const t=qb(await e.json());return{session:await nt.create(`${De}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),Yo}const lx=.92;let Xo=null;function cx(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${De}guild_classifier.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xo}let Zo=null;function dx(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${De}laurel_digit.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Zo}let Qo=null,Jo=null;function hx(){return Jo===null&&(Jo=(async()=>{try{return(await fetch(`${De}banner_class.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}banner_class.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Jo}async function px(e,t){if(t.length===0)return t;const n=await hx();if(n===null)return t;const r=[];for(const i of t)try{const a=w1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=jt(e,a.x,a.y,a.w,a.h),s=_1(o),u=await n.run({[n.inputNames[0]]:new Ve("float32",s,[1,3,an,an])});b1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function fx(){return Qo===null&&(Qo=(async()=>{try{return(await fetch(`${De}laurel_filter.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Qo}async function mx(e,t,n){const[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(Em*s),h=Math.trunc(Em*u),c=Math.max(0,r-l),p=Math.max(0,i-h),f=Math.min(e.width,a+l),m=Math.min(e.height,o+h),y=jt(e,c,p,f-c,m-p);if(y.width<=0||y.height<=0)return null;try{const w=p1(y),b=await n.run({[n.inputNames[0]]:new Ve("float32",w,[1,3,rn,rn])});return f1(b[n.outputNames[0]].data)}catch{return null}}let es=null;function gx(){return es===null&&(es=(async()=>{try{return(await fetch(`${De}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),es}async function yx(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=P1(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const h=new Float32Array(t.length*3*on*on);l.forEach((f,m)=>h.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new Ve("float32",h,[t.length,3,on,on])}))[n.outputNames[0]].data;return t.map((f,m)=>D1(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let ts=null;function Hm(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${De}tuck_classifier.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ts}const jm=.1;let ns=null;function Km(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${De}track_band.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ns}async function Ym(e,t,n){try{const r=go(t,1280,Hy(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new Ve("float32",r.tensor,[1,3,1280,1280])});return _r(i[e.outputNames[0]].data,r.params,jm)}catch{return[]}}let rs=null;const wx=.4;function _x(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function bx(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||_x(a,u)>=wx)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function xx(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${De}tuck_box.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),rs}let is=null;function $x(){return is===null&&(is=(async()=>{try{return(await fetch(`${De}wonder_classifier.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),is}const Xm={wonderRef:Ho,tuckClassifier:Hm,tuckBoxClassifier:xx,localiseWonders:async e=>{try{const{rows:t,params:n}=await pt("wonder",e);return yo(t,n,ut.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function vx(e,t){const n=await ux();if(n!==null)try{const r=Hb(e),i=new Ve("float32",r,[4,3,nn,nn]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=Kb(n.index,jb(o));return u<lx?["",-1]:[s,u]}catch{}return Lb(e,t)}async function as(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function pt(e,t){const n=ut[e],{tensor:r,params:i}=go(t,n.input),a=async()=>{const o=await j2(e),s={[o.inputNames[0]]:new Ve("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(Fo.has(e))throw o;return Fo.add(e),li.delete(e),await a()}}const Sx=6,Mx=4,Tx=5,Ix=2;async function Ex(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await as(e),r=await pt("banner",n),i=ei(r.rows,r.params,ut.banner.conf);if(t.banners=i.length,i.length>=Sx)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await pt("laurel",n),o=_r(a.rows,a.params,ut.laurel.conf);if(t.laurels=o.length,o.length>=Mx)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await pt("coin",n),u=Yf(s.rows,s.params,ut.coin.conf);return t.coins=u.length,u.length>=Tx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Ix?{...t,kind:"board",confidence:.4}:t}function kx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function os(e,t,n,r,i=()=>{},a="player",o,s=!1){const u={},l=[],h=[],c=[],p=[],f=[],m=[];let y=0,w=0,b=0,x=0,M=0;for(const A of e){M+=1;const N=`${t} photo ${M}/${e.length}`;r(`${N}: reading pixels…`,.01);const U=await as(A);r(`${N}: card banners…`,.04);const V=await pt("banner",U);let L=ei(V.rows,V.params,ut.banner.conf);L=await px(U,L),r(`${N}: progress tokens…`,.08);let O=[];const H=await Km();H!==null&&(O=await Ym(H,U,L)),O.length>0&&L.length>0&&(L=L.filter(F=>{const Z=F.box[0]+F.box[2]/2,J=F.box[1]+F.box[3]/2;return!O.some(([ae,ne,le,Ee])=>Math.min(ae,le)<=Z&&Z<=Math.max(ae,le)&&Math.min(ne,Ee)<=J&&J<=Math.max(ne,Ee))}));const Y=await pt("token",U),Q=await sx(),ue=c.length,W=[];for(const F of rw(Y.rows,Y.params,ut.token.conf)){if(W.push({cx:F.cx,cy:F.cy,r:F.r}),O.some(([ae,ne,le,Ee])=>F.cx>=ae&&F.cx<=le&&F.cy>=ne&&F.cy<=Ee))continue;const[Z,J]=await vx(nm(U,F),Q);Z===""&&J<0?W.pop():Z===""?w+=1:c.some(ae=>ae.id===Z)||c.push({id:Z,center:[F.cx,F.cy],radius:F.r,confidence:Math.round(J*1e4)/1e4})}r(`${N}: coins…`,.14);const z=await pt("coin",U),R=Yf(z.rows,z.params,ut.coin.conf).filter(F=>!W.some(Z=>(F.cx-Z.cx)**2+(F.cy-Z.cy)**2<=F.r*F.r)),B=await gx(),D=B!==null?await yx(U,R,B):null,G=(D!==null?R.filter((F,Z)=>D[Z]>=Rm).map(F=>F.r):[]).sort((F,Z)=>F-Z),X=G.length>0?G.length%2===1?G[(G.length-1)/2]:(G[G.length/2-1]+G[G.length/2])/2:null,[ie,te]=B1,ye=R.map((F,Z)=>{const J=D!==null?D[Z]:null;return J===null||J>=Rm?"keep":X!==null&&X>0&&F.r/X>=ie&&F.r/X<=te?"suspect":"drop"}),Te=R.filter((F,Z)=>ye[Z]==="keep"),Be=Iw(U,Te),ke=[];let ot=0;if(R.forEach((F,Z)=>{if(ye[Z]!=="drop"){if(ye[Z]==="suspect"){const J=D[Z];ke.push({denomination:null,center:[F.cx,F.cy],radius:F.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${J.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}ke.push({denomination:Be[ot++],center:[F.cx,F.cy],radius:F.r,denomSource:"colour"})}}),R.length>0&&ke.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${R.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ke.length>=2){const F=ke.map(J=>J.radius).sort((J,ae)=>J-ae),Z=F.length%2===1?F[(F.length-1)/2]:(F[F.length/2-1]+F[F.length/2])/2;if(Z>0)for(const J of ke)J.radius/Z>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/Z).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const Oe=p.length,me=[],Ze=[],ft=Date.now()+Z2;let Xe=null,mt=null;const sn=()=>(mt===null&&(mt=(async()=>{try{const{rows:F,params:Z}=await pt("wonder",U);return yo(F,Z,ut.wonder.conf,Number.POSITIVE_INFINITY).map(J=>J.box)}catch{return[]}})()),mt),Kt=[];let gt=!1;const On=await $x();if(On!==null){const F=await sn();if(F.length>0&&(Xe=await ci(),Xe!==null)){r(`${N}: identifying wonders…`,.35);const Z=await Lm(Xm,Xe,U,F,On,ft,L);for(const J of Z)p.some(ae=>ae.id===J.obj.id)||(p.push(J.obj),Kt.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),me.push(J.zone),Ze.push({quad:J.quad,region:J.region}));gt=Z.length>0}}gt||r(`${N}: wonder names…`,.2);const un=gt?{wonders:[],aborted:!1}:await ix(U,(F,Z)=>r(`${N}: ${F}`,.2+.35*(Z??0)));Xe===null&&(Xe=un.wonders.length>0?await ci():null);for(const F of un.wonders){let Z=null;if(Xe!==null&&Date.now()<ft){r(`${N}: registering ${F.name}…`,.6);try{const J=await Ho(F.id);if(J!==null){let ae=R_(Xe,U,J,[[F.nameBox.x,F.nameBox.y],[F.nameBox.x+F.nameBox.width,F.nameBox.y],[F.nameBox.x+F.nameBox.width,F.nameBox.y+F.nameBox.height],[F.nameBox.x,F.nameBox.y+F.nameBox.height]]);if(ae===null){const ne=await sn(),le=P_(ne,F.nameBox.x+F.nameBox.width/2,F.nameBox.y+F.nameBox.height/2);le!==null&&(ae=fm(Xe,U,J,le))}if(ae!==null){let ne=ae.built,le=!1;const Ee=await Hm();if(Ee!==null)try{const ge=pm(Xe,U,J,ae.footprint);if(ge!==null){const xe=Oo(ge),We=await Ee.run({[Ee.inputNames[0]]:new Ve("float32",xe,[1,3,Rt,Rt])});ne=gm(We[Ee.outputNames[0]].data).built,le=!0}}catch{}const Ce=ae.footprint.map(ge=>ge[0]),pe=ae.footprint.map(ge=>ge[1]),fe=Math.max(0,Math.round(Math.min(...Ce))),de=Math.max(0,Math.round(Math.min(...pe)));Z={built:ne,boundingBox:{x:fe,y:de,width:Math.min(U.width,Math.round(Math.max(...Ce)))-fe,height:Math.min(U.height,Math.round(Math.max(...pe)))-de},tuckRegion:Ao(ae.footprint,ae.overflow),footprint:ae.footprint,edgeScores:ae.edgeScores,builtByTuck:le}}}}catch(J){console.warn(`[wonders-reg] ${F.id} failed:`,J)}}if(Z!==null){const J=Z.tuckRegion??Z.boundingBox;me.push({x0:J.x,y0:J.y,x1:J.x+J.width,y1:J.y+J.height}),Ze.push({quad:Z.footprint,region:Z.tuckRegion})}else{const J=Math.max(8,F.nameBox.height),ae=Math.round(F.nameBox.width*.15);me.push({x0:F.nameBox.x-ae,y0:F.nameBox.y-J*2.5,x1:F.nameBox.x+F.nameBox.width+ae,y1:F.nameBox.y+F.nameBox.height+J*2.5}),Ze.push({quad:null,region:null})}if(!p.some(J=>J.id===F.id)){const J=(Z==null?void 0:Z.builtByTuck)===!0,ae=J?Z.built:!1,ne=!J&&(Z==null?void 0:Z.built)===!0,le={id:F.id,name:F.name,builtWithCardUnderneath:ae,boundingBox:(Z==null?void 0:Z.boundingBox)??{x:0,y:0,width:0,height:0},...Z!=null&&Z.tuckRegion?{tuckRegion:Z.tuckRegion}:{},confidence:F.confidence,...ne?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};p.push(le),Kt.push({obj:le,edgeScores:Z&&!Z.builtByTuck?Z.edgeScores:null,zone:me[me.length-1]})}}if(!gt){const F=L_(Kt.map(Z=>({built:Z.obj.builtWithCardUnderneath,edgeScores:Z.edgeScores,zone:Z.zone})),L.map(Z=>[Z.box[0]+Z.box[2]/2,Z.box[1]+Z.box[3]/2]));for(const Z of F){const J=Kt[Z];J.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(L.length>0){const Z=new Set(F);for(let J=0;J<Kt.length;J++){const ae=Kt[J];if(Z.has(J)||!ae.obj.builtWithCardUnderneath)continue;const ne=ae.obj.tuckRegion;if(ne===void 0)continue;if(!L.some(Ee=>{const Ce=Ee.box[0]+Ee.box[2]/2,pe=Ee.box[1]+Ee.box[3]/2;return Ce>=ne.x&&Ce<=ne.x+ne.width&&pe>=ne.y&&pe<=ne.y+ne.height})){const Ee=ae.obj;Ee.builtWithCardUnderneath=!1,Ee.suspect=!0,Ee.suspectReason="built-unconfirmed"}}}}if(un.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${N}: the wonder-name read ran out of its time budget on this device — ${un.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Xe!==null&&un.wonders.length>0&&Date.now()<ft)try{const F=await Vm(),Z=(F==null?void 0:F.catalog.filter(ae=>ae.kind==="wonder").map(ae=>ae.id))??[],J=new Map;for(const ae of Z)if(!p.some(ne=>ne.id===ae)){const ne=await Ho(ae);ne!==null&&J.set(ae,ne)}if(J.size>0){r(`${N}: searching occluded wonders…`,.7);const ae=A_(Xe,U,J,ft);for(const ne of ae){const le=ne.footprint.map(We=>We[0]),Ee=ne.footprint.map(We=>We[1]),Ce=Math.max(0,Math.round(Math.min(...le))),pe=Math.max(0,Math.round(Math.min(...Ee))),fe={x:Ce,y:pe,width:Math.min(U.width,Math.round(Math.max(...le)))-Ce,height:Math.min(U.height,Math.round(Math.max(...Ee)))-pe};if(p.some(We=>{const Ue=We.boundingBox,hn=Math.max(0,Math.min(Ue.x+Ue.width,fe.x+fe.width)-Math.max(Ue.x,fe.x)),zt=Math.max(0,Math.min(Ue.y+Ue.height,fe.y+fe.height)-Math.max(Ue.y,fe.y)),Pe=hn*zt,Ke=Ue.width*Ue.height+fe.width*fe.height-Pe;return Ke>0&&Pe/Ke>C_}))continue;const ge=F==null?void 0:F.catalog.find(We=>We.id===ne.id);p.push({id:ne.id,name:(ge==null?void 0:ge.nameFr)??(ge==null?void 0:ge.name)??ne.id,builtWithCardUnderneath:ne.built,boundingBox:fe,...ne.tuckRegion?{tuckRegion:ne.tuckRegion}:{},confidence:Math.round(ne.confidence*1e4)/1e4});const xe=ne.tuckRegion??fe;me.push({x0:xe.x,y0:xe.y,x1:xe.x+xe.width,y1:xe.y+xe.height}),Ze.push({quad:ne.footprint.map(([We,Ue])=>[We,Ue]),region:ne.tuckRegion??null})}}}catch(F){console.warn("[wonders-reg] discovery failed:",F)}const Yt=a==="opponent";let er=(F,Z)=>!Yt,It=(F,Z)=>!Yt,vr=null;try{let F=p.slice(Oe);const Z=[];L.forEach((pe,fe)=>{const de=pe.box[0]+pe.box[2]/2,ge=pe.box[1]+pe.box[3]/2;me.some(xe=>de>=xe.x0&&de<=xe.x1&&ge>=xe.y0&&ge<=xe.y1)||Z.push(fe)});const J=[],ae=[];F.forEach((pe,fe)=>{const de=pe.boundingBox;de&&de.width>0&&(J.push(fe),ae.push([de.x,de.y,de.width,de.height]))});const ne=pe=>{const fe=[];return pe.forEach((de,ge)=>{const xe=de.box[0]+de.box[2]/2,We=de.box[1]+de.box[3]/2;me.some(Ue=>xe>=Ue.x0&&xe<=Ue.x1&&We>=Ue.y0&&We<=Ue.y1)||fe.push(ge)}),fe};let le=Do(L.map(pe=>pe.box),Z,ae,O,[U.width,U.height]);if(On!==null){r(`${N}: seconde passe merveilles (crop de cité)…`,.42);const fe=(await H2({image:U,banners:L,hulls:le.hulls.map(([de,ge],xe)=>({owner:de,poly:ge,n:le.hullBoxCounts[xe]??0})),wonderBoxes:ae,known:F,cropFrame:([de,ge,xe,We])=>jt(U,de,ge,xe-de,We-ge),detect:async(de,ge)=>(Xe===null&&(Xe=await ci()),Xe===null?[]:q2(Xm,Xe,de,On,ft,ge))})).filter(de=>!p.some(ge=>ge.id===de.obj.id));if(fe.length>0){for(const de of fe)p.push(de.obj),me.push(de.zone),Ze.push({quad:de.quad,region:de.region});F=p.slice(Oe),J.length=0,ae.length=0,F.forEach((de,ge)=>{const xe=de.boundingBox;xe&&xe.width>0&&(J.push(ge),ae.push([xe.x,xe.y,xe.width,xe.height]))}),le=Do(L.map(de=>de.box),ne(L),ae,O,[U.width,U.height])}}try{const pe=Nm(U.width,U.height,L.map(fe=>fe.box),le.hulls.map(([fe,de],ge)=>({owner:fe,poly:de,n:le.hullBoxCounts[ge]??0})),ae);if(pe.length>0){const fe=Uo(L.map(ge=>ge.box)),de=[];for(const ge of pe){const[xe,We,Ue,hn]=ge,zt=jt(U,xe,We,Ue-xe,hn-We);if(zt.width<=0||zt.height<=0)continue;const Pe=await pt("banner",zt);for(const Ke of ei(Pe.rows,Pe.params,ut.banner.conf)){const Ye=p2(Ke.box,ge,fe);Ye&&de.push({...Ke,box:Ye})}}if(de.length>0){const ge=Qf([...L,...de]);ge.length>L.length&&(L=ge,le=Do(L.map(xe=>xe.box),ne(L),ae,O,[U.width,U.height]))}}}catch(pe){console.warn("[#129 city-rescan] skipped:",pe)}o!==void 0&&(o.hulls=le.hulls.map(([pe,fe],de)=>({owner:pe,poly:fe,n:le.hullBoxCounts[de]??0})),o.bandBoxes=O,o.image=U),er=(pe,fe)=>le.pointOwner(pe,fe)==="opponent"===Yt;const Ee=Yt?"opponent":"player";if(It=(pe,fe)=>le.pointOwner(pe,fe)===Ee,s){const pe=le;vr=fe=>new Set(e2(fe,pe,Ee,O))}L=L.filter((pe,fe)=>le.bannerOwner[fe]==="opponent"===Yt);const Ce=F.map(()=>"player");J.forEach((pe,fe)=>{Ce[pe]=le.wonderOwner[fe]});for(let pe=F.length-1;pe>=0;pe-=1)Ce[pe]==="opponent"!==Yt&&p.splice(Oe+pe,1);me.length=0;for(const pe of p.slice(Oe)){const fe=pe.tuckRegion??pe.boundingBox;fe&&me.push({x0:fe.x,y0:fe.y,x1:fe.x+fe.width,y1:fe.y+fe.height})}for(let pe=c.length-1;pe>=ue;pe-=1){const[fe,de]=c[pe].center;er(fe,de)||c.splice(pe,1)}}catch(F){console.warn("[city-split] failed (side unfiltered):",F)}const Nn=vr!==null?vr(ke):null;for(const F of ke)(Nn!==null?!Nn.has(F):!It(F.center[0],F.center[1]))||(y+=F.denomination??0,h.push(F));const zn=new Set,hi=[],ln=Uo(L.map(F=>F.box));Ze.forEach((F,Z)=>{if(F.quad===null||F.region===null){const le=me[Z];le&&hi.push(le);return}const J=F.region,ae=[];L.forEach((le,Ee)=>{const Ce=le.box[0]+le.box[2]/2,pe=le.box[1]+le.box[3]/2;Ce>=J.x&&Ce<=J.x+J.width&&pe>=J.y&&pe<=J.y+J.height&&ae.push([Ee,le.box])});const ne=z1(F.quad,ae,ln);ne!==null&&zn.add(ne)});let Nt=[],tr=0;L.forEach((F,Z)=>{if(zn.has(Z)){x+=1,tr+=1;return}const J=F.box[0]+F.box[2]/2,ae=F.box[1]+F.box[3]/2;if(hi.some(ne=>J>=ne.x0&&J<=ne.x1&&ae>=ne.y0&&ae<=ne.y1)){x+=1,tr+=1;return}Nt.push(F)});const Sr=E1(Nt,tr,O,U.width,U.height);Nt=Sr.kept;for(const F of Nt)u[F.family]=(u[F.family]??0)+1,b+=1;const cn=dw(Nt),dn=new Set(cn.map(F=>F.box.join(",")));for(const F of pw(Nt))dn.has(F.box.join(","))||(cn.push(F),dn.add(F.box.join(",")));for(const F of Sr.suspects)dn.has(F.box.join(","))||(cn.push(F),dn.add(F.box.join(",")));for(const F of cn)m.push(F);if(Nt.some(F=>F.family==="guild")){const F=await cx();if(F!==null){r(`${N}: identifying guilds…`,.75);for(const Z of Nt)if(Z.family==="guild")try{const[J,ae,ne,le]=Z.box,Ee=jt(U,J,ae,ne,le),Ce=Zb(Ee),pe={[F.inputNames[0]]:new Ve("float32",Ce,[1,3,Xn,Xn])},de=(await F.run(pe))[F.outputNames[0]].data,{id:ge,prob:xe}=Qb(de);ge!==""&&!f.some(We=>We.id===ge)&&f.push({id:ge,boundingBox:{x:J,y:ae,width:ne,height:le},confidence:Math.round(xe*1e4)/1e4})}catch(J){console.warn("[guild-cls] failed:",J)}}else if(Date.now()<ft)try{const Z=Xe??await ci();if(Z!==null){const J=await Q2();if(J.size>0){r(`${N}: identifying guilds…`,.75);const ae=await J2();for(const ne of Tb(Z,U,J,ft,ae))f.some(le=>le.id===ne.id)||f.push(ne)}}}catch(Z){console.warn("[guilds-reg] failed:",Z)}}r(`${N}: laurels…`,.8);const ls=await ax(),pi=[];for(const F of[0]){const Z=F===0?U:qt(U,F),J=await pt("laurel",Z);for(const[ae,ne,le,Ee]of _r(J.rows,J.params,ut.laurel.conf)){const Ce=Ko({x:ae,y:ne,width:le-ae,height:Ee-ne},F,U.width,U.height);pi.push([Ce.x,Ce.y,Ce.x+Ce.width,Ce.y+Ce.height])}}let Bn=Xf(pi);const fi=[];try{const F=T2(L.map(Z=>Z.box),[U.width,U.height]);for(const[Z,J,ae,ne]of F){const le=jt(U,Z,J,ae-Z,ne-J);if(le.width<=0||le.height<=0)continue;const Ee=[];for(const Ce of[0]){const pe=Ce===0?le:qt(le,Ce),fe=await pt("laurel",pe);for(const[de,ge,xe,We]of _r(fe.rows,fe.params,ut.laurel.conf)){const Ue=Ko({x:de,y:ge,width:xe-de,height:We-ge},Ce,le.width,le.height);Ee.push([Ue.x,Ue.y,Ue.x+Ue.width,Ue.y+Ue.height])}}if(Bn=I2(Bn,Xf(Ee),[Z,J]),H!==null)try{const Ce=go(le,1280,wr),pe=await H.run({[H.inputNames[0]]:new Ve("float32",Ce.tensor,[1,3,1280,1280])});for(const[fe,de,ge,xe]of _r(pe[H.outputNames[0]].data,Ce.params,jm))fi.push([fe+Z,de+J,ge+Z,xe+J])}catch{}}}catch(F){console.warn("[laurel-containers] failed:",F)}const cs=[...O,...fi];Bn=Bn.filter(([F,Z,J,ae])=>!C2((F+J)/2,(Z+ae)/2,cs,L.map(ne=>ne.box)));const Pn=await dx(),Mr=await fx();for(const[F,Z,J,ae]of Bn){const ne=Math.trunc((F+J)/2),le=Math.trunc((Z+ae)/2);if([...W,...R].some(Pe=>(ne-Pe.cx)**2+(le-Pe.cy)**2<=Pe.r*Pe.r)||!er(ne,le))continue;if(Mr!==null){const Pe=await mx(U,[Math.trunc(F),Math.trunc(Z),Math.trunc(J),Math.trunc(ae)],Mr);if(Pe!==null&&Pe>=h1)continue}const Ce=Math.min(Math.trunc(J-F),Math.trunc(ae-Z)),pe=Math.max(6,Math.trunc(Math.max(J-F,ae-Z)*Ow)),fe=ox(U,ne,le,pe);let de=null,ge=0;const xe=new Map;if(Ce>=6)for(const Pe of[0,1,2,3]){const Ke=Pe===0?fe:qt(fe,Pe),[Ye,Bt]=jw(Ke,ls);Ye!==null&&(xe.set(Ye,Math.max(xe.get(Ye)??0,Bt)),Bt>ge&&(de=Ye,ge=Bt))}de!==null&&ge<X2&&(de=null);const We=ge;if(Pn!==null&&Ce>=6){const Pe=jt(U,Math.trunc(F),Math.trunc(Z),Math.trunc(J-F),Math.trunc(ae-Z));let Ke=null,Ye=0;for(const Bt of[0,1,2,3]){const Tr=Bt===0?Pe:qt(Pe,Bt),pn=l1(Tr),Et=await Pn.run({[Pn.inputNames[0]]:new Ve("float32",pn,[1,3,Qn,Qn])}),{value:mi,prob:gi}=c1(Et[Pn.outputNames[0]].data);gi>Ye&&(Ke=mi,Ye=gi)}Ke!==null&&Ye>=u1&&(de=Ke,ge=Ye)}const Ue=de!==null&&[...xe.entries()].some(([Pe,Ke])=>Pe!==de&&Ke>=We-.1),hn=me.some(Pe=>ne>=Pe.x0&&ne<=Pe.x1&&le>=Pe.y0&&le<=Pe.y1),zt=f.some(Pe=>{const Ke=Pe.boundingBox;return Ke!==void 0&&ne>=Ke.x&&ne<=Ke.x+Ke.width&&le>=Ke.y&&le<=Ke.y+Ke.height});l.push({value:de,valueRead:de!==null,center:[Math.round((F+J)/2),Math.round((Z+ae)/2)],boundingBox:{x:Math.trunc(F),y:Math.trunc(Z),width:Math.trunc(J-F),height:Math.trunc(ae-Z)},confidence:Math.round(ge*1e4)/1e4,excluded:hn||zt,photoIndex:M-1,...Ue?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}x>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${x} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):b>0&&p.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const v=u.guild??0;v!==f.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${v} purple banner(s) counted but ${f.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):f.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+f.map(A=>A.id).join(", ")+" — confirm in the review."});const T=p.filter(A=>A.boundingBox.width===0);T.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${T.map(A=>A.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${p.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),w>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${w} token disc(s) found but not identified — pick them in the review below.`}),c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+c.map(A=>A.id).join(", ")+" — confirm in the review."}),h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${y} from ${h.length} tile(s) by their metal COLOUR (the learned denomination model is server-only) — confirm the total.`});const E=bx(f,p);for(const A of[...A2(p.map(N=>N.id),t),...N2(E.map(N=>N.id),t)])n.push({code:"INCONSISTENT_STATE",message:A.message});const k=l.filter(A=>!A.excluded),S=k.filter(A=>A.valueRead);return{...kx(),wonders:p,guilds:E,progressTokens:c,laurels:l,cardVictoryPoints:{value:S.reduce((A,N)=>A+(N.value??0),0),laurelsKept:k.length,laurelsUnread:k.length-S.length,complete:k.length===S.length},cardCounts:{byFamily:u,source:b>0?"yolo":"none",tuckedExcluded:x,...m.length>0?{suspects:m}:{}},coins:{total:y,confidence:h.length>0?.5:0,source:h.length>0?"local-colour":"none",coins:h}}}const Tt=1280,Cx=.3,di=9;let ss=null;function Zm(){return ss===null&&(ss=(async()=>{try{return(await fetch(`${De}pawn_ends.onnx`,{method:"HEAD"})).ok?await nt.create(`${De}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ss}function Ax(e){const t=Tt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(Tt,Tt).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,Tt,Tt),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,Tt,Tt),l=Tt*Tt,h=new Float32Array(3*l);for(let c=0;c<l;c+=1)h[c]=u[c*4]/255,h[l+c]=u[c*4+1]/255,h[2*l+c]=u[c*4+2]/255;return{tensor:h,r:t}}async function Rx(e,t){const{tensor:n,r}=Ax(t),a=(await e.run({[e.inputNames[0]]:new Ve("float32",n,[1,3,Tt,Tt])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<Cx)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const c=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:c,cy:p})}}return o}async function us(e,t){let n=null;for(let w=0;w<4;w+=1){const b=w===0?t:qt(t,w),x=await Rx(e,b);if(x.has(0)&&x.has(1)&&x.has(2)){const M=x.get(0).conf+x.get(1).conf+x.get(2).conf;(n===null||M>n.score)&&(n={score:M,det:x,k:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const c=((r.cx-u)*o+(r.cy-l)*s)/h*(2*di),p=Math.min(di,Math.max(-di,at(c))),f=Math.min(r.conf,i.conf,a.conf),m=(w,b)=>{const x=n.k%4;return x===0?[w,b]:x===1?[b,t.height-1-w]:x===2?[t.width-1-w,t.height-1-b]:[t.width-1-b,w]},y=[i,a].map(w=>{const[b,x]=m(w.cx,w.cy);return[at(b),at(x)]});return{position:p,confidence:Math.round(f*1e4)/1e4,ends:y}}async function Qm(e,t,n){let r=null;for(const i of n){const a=jy(t.width,t.height,i);if(a===null)continue;const o=jt(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await us(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r={...s,ends:s.ends.map(([u,l])=>[u+a.x,l+a.y])})}return r}async function Ox(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(f,m=0)=>{t(f,i>0?Math.min(.99,(a+m)/i):void 0)},s=()=>{a+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await os(m,f,n,o,s))}let u=null,l=null;if(e.both!==void 0){const f={},m={player:await os([e.both],"left",n,o,s,"player",f,!0),opponent:await os([e.both],"right",n,o,s,"opponent",void 0,!0)};if(f.image!==void 0)try{const w=await Zm();w!==null&&(u=await us(w,f.image),u===null&&f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await Qm(w,f.image,f.bandBoxes)))}catch(w){console.warn("[#125] both-photo pawn read failed:",w)}u!==null&&(l=Qy(u.ends,f.hulls??[],u.position));const y=l!==null&&!l.ambiguous?Jy(l):null;y!==null?(r.left=m[y.left],r.right=m[y.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=m.player,r.right=m.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...R2(f),...O2(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let h={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const f=await as(e.board),m=await Zm();if(m!==null){let y=await us(m,f);if(y===null){const w=await Km();if(w!==null){const b=await pt("banner",f),x=ei(b.rows,b.params,ut.banner.conf),M=await Ym(w,f,x);y=await Qm(m,f,M)}}y!==null&&(h={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}h.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}else u!==null&&l!==null&&(h={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});const c=h.conflictPawnPosition,p=Math.abs(c)>=di?{type:"military",winner:c>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:h,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await Ex(e.data.file):await Ox(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
