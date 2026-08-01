var ev=Object.defineProperty;var tv=(Pt,Dt,On)=>Dt in Pt?ev(Pt,Dt,{enumerable:!0,configurable:!0,writable:!0,value:On}):Pt[Dt]=On;var u0=(Pt,Dt,On)=>tv(Pt,typeof Dt!="symbol"?Dt+"":Dt,On);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Pt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,On=Object.getOwnPropertyNames,d0=Object.prototype.hasOwnProperty,h0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),zn=(e,t)=>{for(var n in t)Pt(e,n,{get:t[n],enumerable:!0})},p0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of On(t))!d0.call(e,i)&&i!==n&&Pt(e,i,{get:()=>t[i],enumerable:!(r=Dt(t,i))||r.enumerable});return e},Zn=e=>p0(Pt({},"__esModule",{value:!0}),e),Qn,Yt,Nn,$s,xs,vs=ee(()=>{Qn=new Map,Yt=[],Nn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Qn.get(e);if(r===void 0)Qn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Yt.indexOf(e);i!==-1&&Yt.splice(i,1);for(let a=0;a<Yt.length;a++)if(Qn.get(Yt[a]).priority<=n){Yt.splice(a,0,e);return}Yt.push(e)}return}throw new TypeError("not a valid backend")},$s=async e=>{let t=Qn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},xs=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Yt:n,i,a=[],o=new Set;for(let u of r){let l=await $s(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),f0=ee(()=>{vs()}),Ss,m0=ee(()=>{Ss="1.27.0"}),_i,Qe,Ms=ee(()=>{m0(),_i="warning",Qe={wasm:{},webgl:{},webgpu:{},versions:{common:Ss},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);_i=e}},get logLevel(){return _i}},Object.defineProperty(Qe,"logLevel",{enumerable:!0})}),Ue,g0=ee(()=>{Ms(),Ue=Qe}),Ts,Is,y0=ee(()=>{Ts=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,d=0,p=h,m=h*2,g=-1;o==="RGBA"?(d=0,p=h,m=h*2,g=h*3):o==="RGB"?(d=0,p=h,m=h*2):o==="RBG"&&(d=0,m=h,p=h*2);for(let y=0;y<a;y++)for(let _=0;_<i;_++){let $=(e.data[d++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+$+","+x+","+M+","+S+")",r.fillRect(_,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Is=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,m=0,g=1,y=2,_=3,$=0,x=d,M=d*2,S=-1;s==="RGBA"?($=0,x=d,M=d*2,S=d*3):s==="RGB"?($=0,x=d,M=d*2):s==="RBG"&&($=0,M=d,x=d*2),r=n.createImageData(i,a);for(let T=0;T<a*i;m+=p,g+=p,y+=p,_+=p,T++)r.data[m]=(e.data[$++]-h[0])*l[0],r.data[g]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[_]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Ir,Es,ks,Cs,As,Rs,w0=ee(()=>{$i(),Ir=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,m=1,g=2,y=3,_=0,$=l,x=l*2,M=-1;s==="RGB"&&(d=3,p=0,m=1,g=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(_=0,x=l,$=l*2):u==="BGR"&&(x=0,$=l,_=l*2);for(let S=0;S<l;S++,p+=d,g+=d,m+=d,y+=d)h[_++]=(e[p]+o[0])/a[0],h[$++]=(e[m]+o[1])/a[1],h[x++]=(e[g]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new st("float32",h,[1,4,n,r]):new st("float32",h,[1,3,n,r])},Es=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let d=l(h);if(d!=null){let p=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=m}else s.tensorFormat="RGBA",s.height=p,s.width=m;d.drawImage(e,0,0),o=d.getImageData(0,0,m,p).data}else throw new Error("Can not access image data")}else if(r){let h,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,d=t.resizedWidth):(h=e.height,d=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=d,t!==void 0){let p=u();p.width=d,p.height=h;let m=l(p);if(m!=null)m.putImageData(e,0,0),o=m.getImageData(0,0,d,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let d=l(h);if(d!=null){let p=e.height,m=e.width;return d.drawImage(e,0,0,m,p),o=d.getImageData(0,0,m,p).data,s.height=p,s.width=m,Ir(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,d)=>{let p=u(),m=l(p);if(!e||!m)return d();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{p.width=g.width,p.height=g.height,m.drawImage(g,0,0,p.width,p.height);let y=m.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Ir(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ir(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},ks=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new st({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Cs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new st({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},As=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new st({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Rs=(e,t,n)=>new st({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),fn,Jn,bi,Os,_0=ee(()=>{fn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Jn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),bi=!1,Os=()=>{if(!bi){bi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(fn.set("int64",BigInt64Array),Jn.set(BigInt64Array,"int64")),t&&(fn.set("uint64",BigUint64Array),Jn.set(BigUint64Array,"uint64")),r?(fn.set("float16",n),Jn.set(n,"float16")):fn.set("float16",Uint16Array)}}}),zs,Ns,b0=ee(()=>{$i(),zs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ns=(e,t)=>{switch(e.location){case"cpu":return new st(e.type,e.data,t);case"cpu-pinned":return new st({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new st({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new st({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new st({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),st,$i=ee(()=>{y0(),w0(),_0(),b0(),st=class{constructor(e,t,n){Os();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=fn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=fn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=Jn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=zs(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Es(e,t)}static fromTexture(e,t){return ks(e,t)}static fromGpuBuffer(e,t){return Cs(e,t)}static fromMLTensor(e,t){return As(e,t)}static fromPinnedBuffer(e,t,n){return Rs(e,t,n)}toDataURL(e){return Ts(this,e)}toImageData(e){return Is(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ns(this,e)}}}),Ge,Bs=ee(()=>{$i(),Ge=st}),Er,xi,Et,gt,mn,gn,Ps=ee(()=>{Ms(),Er=(e,t)=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},xi=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Er("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Et=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||xi("BEGIN",e)},gt=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||xi("END",e)},mn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.time(`ORT::${e}`)},gn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeEnd(`ORT::${e}`)}}),Ds,$0=ee(()=>{vs(),Bs(),Ps(),Ds=class l0{constructor(t){this.handler=t}async run(t,n,r){Et(),mn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ge||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ge)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(h.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof Ge)&&(l=!0,o=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof Ge?u[l]=h:u[l]=new Ge(h.type,h.data,h.dims)}return gn("InferenceSession.run"),gt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Et(),mn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-d}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await xs(o),l=await s.createInferenceSessionHandler(a,u);return gn("InferenceSession.create"),gt(),new l0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),tt,x0=ee(()=>{$0(),tt=Ds}),v0=ee(()=>{}),S0=ee(()=>{}),M0=ee(()=>{}),T0=ee(()=>{}),I0={};zn(I0,{InferenceSession:()=>tt,TRACE:()=>Er,TRACE_EVENT_BEGIN:()=>mn,TRACE_EVENT_END:()=>gn,TRACE_FUNC_BEGIN:()=>Et,TRACE_FUNC_END:()=>gt,Tensor:()=>Ge,env:()=>Ue,registerBackend:()=>Nn});var ft=ee(()=>{f0(),g0(),x0(),Bs(),v0(),S0(),Ps(),M0(),T0()}),vi=ee(()=>{}),Us={};zn(Us,{default:()=>Ls});var Si,Mi,Ls,E0=ee(()=>{var e;$f(),yn(),Ai(),Si="ort-wasm-proxy-worker",Mi=((e=globalThis.self)==null?void 0:e.name)===Si,Mi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":zi(r.wasm).then(()=>{Va(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ha(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=jr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Ka(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":Ya(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;Za(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Ja([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Qa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ls=Mi?null:t=>new Worker(t??ut,{type:"module",name:Si})}),Fs={};zn(Fs,{default:()=>Ws});async function Gs(e={}){var o0,s0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((o0=self.name)==null?void 0:o0.startsWith("em-pthread"));t.mountExternalData=(c,f)=>{c.startsWith("./")&&(c=c.substring(2)),(t.Xc||(t.Xc=new Map)).set(c,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=c=>async(...f)=>{var b;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:f[0],errors:[]},I=await c(...f);if(t.Yc!==w)throw Error("Session mismatch");(b=t.dd)==null||b.flush();let A=w.errors;if(0<A.length){let B=await Promise.all(A);if(B=B.filter(K=>K),0<B.length)throw Error(B.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(c,f)=>{if(c==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let b=t.dd;t.jsepRegisterBuffer=(w,I,A,B)=>b.registerBuffer(w,I,A,B),t.jsepGetBuffer=w=>b.getBuffer(w),t.jsepCreateDownloader=(w,I,A)=>b.createDownloader(w,I,A),t.jsepOnCreateSession=w=>{b.onCreateSession(w)},t.jsepOnReleaseSession=w=>{b.onReleaseSession(w)},t.jsepOnRunStart=w=>b.onRunStart(w),t.Id=(w,I)=>{b.upload(w,I)}}else if(c==="webnn"){let b=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>b.onRunStart(w),t.webnnOnRunEnd=b.onRunEnd.bind(b),t.webnnOnReleaseSession=w=>{b.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>b.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,A,B)=>b.registerMLTensor(w,I,A,B),t.webnnCreateMLContext=w=>b.createMLContext(w),t.webnnRegisterMLConstant=(w,I,A,B,K,te)=>b.registerMLConstant(w,I,A,B,K,t.Xc,te),t.webnnRegisterGraphInput=b.registerGraphInput.bind(b),t.webnnIsGraphInput=b.isGraphInput.bind(b),t.webnnRegisterGraphOutput=b.registerGraphOutput.bind(b),t.webnnIsGraphOutput=b.isGraphOutput.bind(b),t.webnnCreateTemporaryTensor=b.createTemporaryTensor.bind(b),t.webnnIsGraphInputOutputTypeSupported=b.isGraphInputOutputTypeSupported.bind(b)}};let o=()=>{let c=f=>(...b)=>{let w=Nt;return b=f(...b),Nt!=w?new Promise((I,A)=>{us={resolve:I,reject:A}}):b};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=c(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(c,f)=>{throw f},h=self.location.href,d="";if(n||r){try{d=new URL(".",h).href}catch{}r&&(u=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async c=>{if(E(c))return new Promise((b,w)=>{var I=new XMLHttpRequest;I.open("GET",c,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?b(I.response):w(I.status)},I.onerror=w,I.send(null)});var f=await fetch(c,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var p,m,g,y,_,$,x=console.log.bind(console),M=console.error.bind(console),S=x,T=M,k=!1,E=c=>c.startsWith("file://");function v(){Tt.buffer!=N.buffer&&j()}if(i){let c=function(f){try{var b=f.data,w=b.Sc;if(w==="load"){let I=[];self.onmessage=A=>I.push(A),$=()=>{postMessage({Sc:"loaded"});for(let A of I)c(A);self.onmessage=c};for(let A of b.xd)t[A]&&!t[A].proxy||(t[A]=(...B)=>{postMessage({Sc:"callHandler",wd:A,args:B})},A=="print"&&(S=t[A]),A=="printErr"&&(T=t[A]));Tt=b.Od,j(),m=b.Pd,he(),yi()}else if(w==="run"){(function(I){var A=(v(),G)[I+52>>>2>>>0];I=(v(),G)[I+56>>>2>>>0],gg(A,A-I),$e(A)})(b.Rc),ps(b.Rc,0,0,1,0,0),jn(),as(b.Rc),C||(cg(),C=!0);try{Zo(b.Md,b.bd)}catch(I){if(I!="unwind")throw I}}else b.target!=="setimmediate"&&(w==="checkMailbox"?C&&ci():w&&(T(`worker: received unknown command ${w}`),T(b)))}catch(I){throw dg(),I}};var C=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=c}var N,V,L,H,R,G,O,P,X,z,Q,D=!1;function j(){var c=Tt.buffer;t.HEAP8=N=new Int8Array(c),L=new Int16Array(c),t.HEAPU8=V=new Uint8Array(c),H=new Uint16Array(c),t.HEAP32=R=new Int32Array(c),t.HEAPU32=G=new Uint32Array(c),O=new Float32Array(c),P=new Float64Array(c),X=new BigInt64Array(c),z=new BigUint64Array(c)}function F(){D=!0,i?$():Kt.sb()}function W(c){throw T(c="Aborted("+c+")"),k=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),_==null||_(c),c}function ne(){return{a:{ma:mx,gb:fx,g:Qo,J:Jo,f:Yn,o:ii,h:U,ha:Z,b:J,T:re,Ha:de,n:Ie,$:we,Xa:Ce,Da:qe,Fa:Pe,Ya:cn,Va:zt,Oa:Ne,Ua:Ke,ka:at,Ea:Ht,Ba:ai,Wa:oi,Ca:si,bb:es,ea:r$,wa:i$,ua:o$,da:u$,O:l$,H:c$,va:d$,_:w$,xa:_$,Ra:b$,za:x$,Ia:v$,sa:S$,fa:M$,Qa:as,_a:T$,R:C$,r:N$,c:rs,hb:B$,y:P$,M:D$,D:U$,l:L$,s:jm,ib:F$,I:G$,S:W$,j:q$,u:V$,q:H$,k:j$,La:K$,Ma:Y$,Na:X$,Ja:Zm,Ka:Qm,ta:Jm,db:Q$,ab:ex,v:tx,aa:nx,ga:rx,$a:J$,W:ix,Za:ax,Aa:ox,F:Z$,U:sx,la:mi,ya:lx,fb:ux,eb:cx,Sa:rg,Ta:ig,Ga:sn,V:ag,ja:og,Pa:sg,ia:ug,kb:Zx,na:Hx,lb:Xx,oa:Vx,G:Bx,e:_x,t:yx,w:gx,B:kx,mb:Gx,K:Ox,x:xx,pa:Wx,Y:jx,ba:Fx,nb:Lx,ob:Ux,P:Cx,qa:Dx,pb:Px,N:zx,Z:qx,d:wx,A:$x,m:bx,jb:Qx,p:Sx,z:Mx,C:vx,E:Tx,L:Ax,qb:Nx,Q:Kx,ca:Rx,X:Yx,rb:Ex,ra:Ix,i:hx,a:Tt,cb:We}}}async function he(){function c(w,I){var A=Kt=w.exports;w={};for(let[B,K]of Object.entries(A))typeof K=="function"?(A=I$(K),w[B]=A):w[B]=K;return Kt=w,Kt=(function(){var B=Kt,K=ie=>be=>ie(be)>>>0,te=ie=>()=>ie()>>>0;return(B=Object.assign({},B)).tb=K(B.tb),B.Xb=te(B.Xb),B.Zb=K(B.Zb),B.lc=K(B.lc),B.mc=te(B.mc),B.qc=K(B.qc),B})(),wr.push(Kt._b),lg=(w=Kt).tb,cg=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,gi=w.Xb,Bt=t._free=w.Yb,Sr=t._malloc=w.Zb,ps=w.ac,dg=w.bc,hg=w.cc,pg=w.dc,fs=w.ec,fg=w.fc,mg=w.gc,Se=w.hc,Mr=w.ic,gg=w.jc,$e=w.kc,ms=w.lc,ve=w.mc,yg=w.nc,gs=w.oc,wg=w.pc,_g=w.qc,bg=w.rc,ys=w.sc,$g=w.tc,xg=w.uc,vg=w.vc,Sg=w.wc,Mg=w.xc,Tg=w.yc,Ig=w.zc,Eg=w.Ac,kg=w.Bc,Cg=w.Cc,Ag=w.Dc,Rg=w.Ec,Og=w.Fc,zg=w.Gc,Ng=w.Hc,Bg=w.Ic,Pg=w.Jc,Dg=w.Kc,Ug=w.Lc,Lg=w.Mc,Fg=w.Nc,Gg=w.Pc,Wg=w.Qc,qg=w.$c,Vg=w.ad,Hg=w.fd,jg=w.jd,Kg=w.kd,Yg=w.ld,Xg=w.md,Zg=w.nd,Qg=w.od,Jg=w.pd,e0=w.qd,t0=w.vd,n0=w.Td,r0=w.Ud,i0=w.Vd,a0=w.Wd,m=I,Kt}var f,b=ne();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(b,(I,A)=>{w(c(I,A))})}):i?c(new WebAssembly.Instance(m,ne()),m):(Q??(Q=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(w){var I=Q;if(!p&&!E(I))try{var A=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,w)}catch(B){T(`wasm streaming compile failed: ${B}`),T("falling back to ArrayBuffer instantiation")}return(async function(B,K){try{var te=await(async function(ie){if(!p)try{var be=await s(ie);return new Uint8Array(be)}catch{}if(ie==Q&&p)ie=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ie=u(ie)}return ie})(B);return await WebAssembly.instantiate(te,K)}catch(ie){T(`failed to asynchronously prepare wasm: ${ie}`),W(ie)}})(I,w)})(b),c(f.instance,f.module))}class ae{constructor(f){u0(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var xe=c=>{c.terminate(),c.onmessage=()=>{}},Re=[],Xe=0,He=null,je=c=>{it.length==0&&(br(),_r(it[0]));var f=it.pop();if(!f)return 6;Rt.push(f),ht[c.Rc]=f,f.Rc=c.Rc;var b={Sc:"run",Md:c.Ld,bd:c.bd,Rc:c.Rc};return f.postMessage(b,c.rd),0},Oe=0,ge=(c,f,...b)=>{var w,I=16*b.length,A=ve(),B=ms(I),K=B>>>3;for(w of b)typeof w=="bigint"?((v(),X)[K++>>>0]=1n,(v(),X)[K++>>>0]=w):((v(),X)[K++>>>0]=0n,(v(),P)[K++>>>0]=w);return c=hg(c,0,I,B,f),$e(A),c};function We(c){if(i)return ge(0,1,c);if(g=c,!(0<Oe)){for(var f of Rt)xe(f);for(f of it)xe(f);it=[],Rt=[],ht={},k=!0}l(0,new ae(c))}function on(c){if(i)return ge(1,0,c);sn(c)}var sn=c=>{if(g=c,i)throw on(c),"unwind";We(c)},it=[],Rt=[],wr=[],ht={},Vt=c=>{var f=c.Rc;delete ht[f],it.push(c),Rt.splice(Rt.indexOf(c),1),c.Rc=0,pg(f)};function jn(){wr.forEach(c=>c())}var _r=c=>new Promise(f=>{c.onmessage=I=>{var A=I.data;if(I=A.Sc,A.Zc&&A.Zc!=gi()){var B=ht[A.Zc];B?B.postMessage(A,A.rd):T(`Internal error! Worker sent a message "${I}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?ci():I==="spawnThread"?je(A):I==="cleanupThread"?li(()=>{Vt(ht[A.Nd])}):I==="loaded"?(c.loaded=!0,f(c)):A.target==="setimmediate"?c.postMessage(A):I==="uncaughtException"?c.onerror(A.error):I==="callHandler"?t[A.wd](...A.args):I&&T(`worker sent an unknown command ${I}`)},c.onerror=I=>{throw T(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var b,w=[];for(b of[])t.propertyIsEnumerable(b)&&w.push(b);c.postMessage({Sc:"load",xd:w,Od:Tt,Pd:m})});function br(){var c=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});it.push(c)}var Tt,Zo=(c,f)=>{Oe=0,c=ys(c,f),0<Oe?g=c:fs(c)},Ot=[],un=0;function Qo(c){var f=new Kn(c>>>=0);return(v(),N)[f.Tc+12>>>0]==0&&($r(f,!0),un--),ln(f,!1),Ot.push(f),_g(c)}var Cn=0,Jo=()=>{Se(0,0);var c=Ot.pop();yg(c.cd),Cn=0};function $r(c,f){f=f?1:0,(v(),N)[c.Tc+12>>>0]=f}function ln(c,f){f=f?1:0,(v(),N)[c.Tc+13>>>0]=f}class Kn{constructor(f){this.cd=f,this.Tc=f-24}}var xr=c=>{var f=Cn;if(!f)return Mr(0),0;var b=new Kn(f);(v(),G)[b.Tc+16>>>2>>>0]=f;var w=(v(),G)[b.Tc+4>>>2>>>0];if(!w)return Mr(0),f;for(var I of c){if(I===0||I===w)break;if(wg(I,w,b.Tc+16))return Mr(I),f}return Mr(w),f};function Yn(){return xr([])}function ii(c){return xr([c>>>0])}function U(c,f,b,w){return xr([c>>>0,f>>>0,b>>>0,w>>>0])}var Z=()=>{var c=Ot.pop();c||W("no exception to throw");var f=c.cd;throw(v(),N)[c.Tc+13>>>0]==0&&(Ot.push(c),ln(c,!0),$r(c,!1),un++),gs(f),Cn=f};function J(c,f,b){var w=new Kn(c>>>=0);throw f>>>=0,b>>>=0,(v(),G)[w.Tc+16>>>2>>>0]=0,(v(),G)[w.Tc+4>>>2>>>0]=f,(v(),G)[w.Tc+8>>>2>>>0]=b,gs(c),un++,Cn=c}var re=()=>un;function oe(c,f,b,w){return i?ge(2,1,c,f,b,w):de(c,f,b,w)}function de(c,f,b,w){if(c>>>=0,f>>>=0,b>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?oe(c,f,b,w):(c={Ld:b,Rc:c,bd:w,rd:I},i?(c.Sc="spawnThread",postMessage(c,I),0):je(c))}function Ie(c){throw Cn||(Cn=c>>>0),Cn}var Te=globalThis.TextDecoder&&new TextDecoder,pe=(c,f,b,w)=>{if(b=f+b,w)return b;for(;c[f]&&!(f>=b);)++f;return f},fe=(c,f=0,b,w)=>{if(16<(b=pe(c,f>>>=0,b,w))-f&&c.buffer&&Te)return Te.decode(c.buffer instanceof ArrayBuffer?c.subarray(f,b):c.slice(f,b));for(w="";f<b;){var I=c[f++];if(128&I){var A=63&c[f++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|A);else{var B=63&c[f++];65536>(I=(240&I)==224?(15&I)<<12|A<<6|B:(7&I)<<18|A<<12|B<<6|63&c[f++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},le=(c,f,b)=>(c>>>=0)?fe((v(),V),c,f,b):"";function we(c,f,b){return i?ge(3,1,c,f,b):0}function Ce(c,f){if(i)return ge(4,1,c,f)}function qe(c,f){if(i)return ge(5,1,c,f)}function Pe(c,f,b){if(i)return ge(6,1,c,f,b)}function cn(c,f,b){return i?ge(7,1,c,f,b):0}function zt(c,f){if(i)return ge(8,1,c,f)}function Ne(c,f,b){if(i)return ge(9,1,c,f,b)}function Ke(c,f,b,w){if(i)return ge(10,1,c,f,b,w)}function at(c,f,b,w){if(i)return ge(11,1,c,f,b,w)}function Ht(c,f,b,w){if(i)return ge(12,1,c,f,b,w)}function ai(c){if(i)return ge(13,1,c)}function oi(c,f){if(i)return ge(14,1,c,f)}function si(c,f,b){if(i)return ge(15,1,c,f,b)}var es=()=>W(""),pt=c=>{c>>>=0;for(var f="";;){var b=(v(),V)[c++>>>0];if(!b)return f;f+=String.fromCharCode(b)}},ts={},ns={},Xn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function jt(c,f,b={}){return(function(w,I,A={}){var B=I.name;if(!w)throw new Xn(`type "${B}" must have a positive integer typeid pointer`);if(ns.hasOwnProperty(w)){if(A.yd)return;throw new Xn(`Cannot register type '${B}' twice`)}ns[w]=I,ts.hasOwnProperty(w)&&(I=ts[w],delete ts[w],I.forEach(K=>K()))})(c,f,b)}var Lm=(c,f,b)=>{switch(f){case 1:return b?w=>(v(),N)[w>>>0]:w=>(v(),V)[w>>>0];case 2:return b?w=>(v(),L)[w>>>1>>>0]:w=>(v(),H)[w>>>1>>>0];case 4:return b?w=>(v(),R)[w>>>2>>>0]:w=>(v(),G)[w>>>2>>>0];case 8:return b?w=>(v(),X)[w>>>3>>>0]:w=>(v(),z)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function r$(c,f,b,w,I){c>>>=0,b>>>=0,f=pt(f>>>0);let A=B=>B;if(w=w===0n){let B=8*b;A=K=>BigInt.asUintN(B,K),I=A(I)}jt(c,{name:f,Oc:A,Vc:(B,K)=>(typeof K=="number"&&(K=BigInt(K)),K),Uc:Lm(f,b,!w),Wc:null})}function i$(c,f,b,w){jt(c>>>=0,{name:f=pt(f>>>0),Oc:function(I){return!!I},Vc:function(I,A){return A?b:w},Uc:function(I){return this.Oc((v(),V)[I>>>0])},Wc:null})}var Fm=[],An=[0,1,,1,null,1,!0,1,!1,1];function rs(c){9<(c>>>=0)&&--An[c+1]===0&&(An[c]=void 0,Fm.push(c))}var mt=c=>{if(!c)throw new Xn(`Cannot use deleted val. handle = ${c}`);return An[c]},It=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Fm.pop()||An.length;return An[f]=c,An[f+1]=1,f}};function is(c){return this.Oc((v(),G)[c>>>2>>>0])}var a$={name:"emscripten::val",Oc:c=>{var f=mt(c);return rs(c),f},Vc:(c,f)=>It(f),Uc:is,Wc:null};function o$(c){return jt(c>>>0,a$)}var s$=(c,f)=>{switch(f){case 4:return function(b){return this.Oc((v(),O)[b>>>2>>>0])};case 8:return function(b){return this.Oc((v(),P)[b>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}};function u$(c,f,b){b>>>=0,jt(c>>>=0,{name:f=pt(f>>>0),Oc:w=>w,Vc:(w,I)=>I,Uc:s$(f,b),Wc:null})}function l$(c,f,b,w,I){c>>>=0,b>>>=0,f=pt(f>>>0);let A=K=>K;if(w===0){var B=32-8*b;A=K=>K<<B>>>B,I=A(I)}jt(c,{name:f,Oc:A,Vc:(K,te)=>te,Uc:Lm(f,b,w!==0),Wc:null})}function c$(c,f,b){function w(A){var B=(v(),G)[A>>>2>>>0];return A=(v(),G)[A+4>>>2>>>0],new I((v(),N).buffer,A,B)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];jt(c>>>=0,{name:b=pt(b>>>0),Oc:w,Uc:w},{yd:!0})}var dn=(c,f,b)=>{var w=(v(),V);if(f>>>=0,0<b){var I=f;b=f+b-1;for(var A=0;A<c.length;++A){var B=c.codePointAt(A);if(127>=B){if(f>=b)break;w[f++>>>0]=B}else if(2047>=B){if(f+1>=b)break;w[f++>>>0]=192|B>>6,w[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=b)break;w[f++>>>0]=224|B>>12,w[f++>>>0]=128|B>>6&63,w[f++>>>0]=128|63&B}else{if(f+3>=b)break;w[f++>>>0]=240|B>>18,w[f++>>>0]=128|B>>12&63,w[f++>>>0]=128|B>>6&63,w[f++>>>0]=128|63&B,A++}}w[f>>>0]=0,c=f-I}else c=0;return c},ui=c=>{for(var f=0,b=0;b<c.length;++b){var w=c.charCodeAt(b);127>=w?f++:2047>=w?f+=2:55296<=w&&57343>=w?(f+=4,++b):f+=3}return f};function d$(c,f){jt(c>>>=0,{name:f=pt(f>>>0),Oc(b){var w=(v(),G)[b>>>2>>>0];return w=le(b+4,w,!0),Bt(b),w},Vc(b,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Xn("Cannot pass non-string to std::string");var A=I?ui(w):w.length,B=Sr(4+A+1),K=B+4;return(v(),G)[B>>>2>>>0]=A,I?dn(w,K,A+1):(v(),V).set(w,K>>>0),b!==null&&b.push(Bt,B),B},Uc:is,Wc(b){Bt(b)}})}var Gm=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,h$=(c,f,b)=>{if(c>>>=1,16<(f=pe((v(),H),c,f/2,b))-c&&Gm)return Gm.decode((v(),H).slice(c,f));for(b="";c<f;++c){var w=(v(),H)[c>>>0];b+=String.fromCharCode(w)}return b},p$=(c,f,b)=>{if(b??(b=2147483647),2>b)return 0;var w=f;b=(b-=2)<2*c.length?b/2:c.length;for(var I=0;I<b;++I){var A=c.charCodeAt(I);(v(),L)[f>>>1>>>0]=A,f+=2}return(v(),L)[f>>>1>>>0]=0,f-w},f$=c=>2*c.length,m$=(c,f,b)=>{var w="";c>>>=2;for(var I=0;!(I>=f/4);I++){var A=(v(),G)[c+I>>>0];if(!A&&!b)break;w+=String.fromCodePoint(A)}return w},g$=(c,f,b)=>{if(f>>>=0,b??(b=2147483647),4>b)return 0;var w=f;b=w+b-4;for(var I=0;I<c.length;++I){var A=c.codePointAt(I);if(65535<A&&I++,(v(),R)[f>>>2>>>0]=A,(f+=4)+4>b)break}return(v(),R)[f>>>2>>>0]=0,f-w},y$=c=>{for(var f=0,b=0;b<c.length;++b)65535<c.codePointAt(b)&&b++,f+=4;return f};function w$(c,f,b){if(c>>>=0,f>>>=0,b=pt(b>>>=0),f===2)var w=h$,I=p$,A=f$;else w=m$,I=g$,A=y$;jt(c,{name:b,Oc:B=>{var K=(v(),G)[B>>>2>>>0];return K=w(B+4,K*f,!0),Bt(B),K},Vc:(B,K)=>{if(typeof K!="string")throw new Xn(`Cannot pass non-string to C++ string type ${b}`);var te=A(K),ie=Sr(4+te+f);return(v(),G)[ie>>>2>>>0]=te/f,I(K,ie+4,te+f),B!==null&&B.push(Bt,ie),ie},Uc:is,Wc(B){Bt(B)}})}function _$(c,f){jt(c>>>=0,{zd:!0,name:f=pt(f>>>0),Oc:()=>{},Vc:()=>{}})}function b$(c){ps(c>>>0,!r,1,!n,131072,!1),jn()}var li=c=>{if(!k)try{if(c(),!(0<Oe))try{i?gi()&&fs(g):sn(g)}catch(f){f instanceof ae||f=="unwind"||l(0,f)}}catch(f){f instanceof ae||f=="unwind"||l(0,f)}},$$=!Atomics.waitAsync||((s0=globalThis.navigator)==null?void 0:s0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function as(c){c>>>=0,$$||(Atomics.waitAsync((v(),R),c>>>2,c).value.then(ci),c+=128,Atomics.store((v(),R),c>>>2,1))}var ci=()=>li(()=>{var c=gi();c&&(as(c),mg())});function x$(c,f){(c>>>=0)==f>>>0?setTimeout(ci):i?postMessage({Zc:c,Sc:"checkMailbox"}):(c=ht[c])&&c.postMessage({Sc:"checkMailbox"})}var os=[];function v$(c,f,b,w,I){for(f>>>=0,I>>>=0,os.length=0,b=I>>>3,w=I+w>>>3;b<w;){var A;A=(v(),X)[b++>>>0]?(v(),X)[b++>>>0]:(v(),P)[b++>>>0],os.push(A)}return(f?ws[f]:px[c])(...os)}var S$=()=>{Oe=0};function M$(c){c>>>=0,i?postMessage({Sc:"cleanupThread",Nd:c}):Vt(ht[c])}function T$(c){}var di=c=>{try{c()}catch(f){W(f)}};function I$(c){var f=(...b)=>{hi.push(c);try{return c(...b)}finally{k||(hi.pop(),Nt&&hn===1&&hi.length===0&&(hn=0,Oe+=1,di(r0),typeof Fibers<"u"&&Fibers.Zd()))}};return Vm.set(c,f),f}var hn=0,Nt=null,Wm=0,hi=[],ss=new Map,qm=new Map,Vm=new Map,E$=0,us=null,k$=[],Hm=c=>(function(f){if(!k){if(hn===0){var b=!1,w=!1;f((I=0)=>{if(!k&&(Wm=I,b=!0,w)){hn=2,di(()=>i0(Nt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var A=(function(){var te=(v(),R)[Nt+8>>>2>>>0];return te=qm.get(te),te=Vm.get(te),--Oe,te()})()}catch(te){A=te,I=!0}var B=!1;if(!Nt){var K=us;K&&(us=null,(I?K.reject:K.resolve)(A),B=!0)}if(I&&!B)throw A}}),w=!0,b||(hn=1,Nt=(function(){var I=Sr(65548),A=I+12;if((v(),G)[I>>>2>>>0]=A,(v(),G)[I+4>>>2>>>0]=A+65536,A=hi[0],!ss.has(A)){var B=E$++;ss.set(A,B),qm.set(B,A)}return A=ss.get(A),(v(),R)[I+8>>>2>>>0]=A,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),di(()=>n0(Nt)))}else hn===2?(hn=0,di(a0),Bt(Nt),Nt=null,k$.forEach(li)):W(`invalid state: ${hn}`);return Wm}})(f=>{c().then(f)});function C$(c){return c>>>=0,Hm(async()=>{var f=await mt(c);return It(f)})}var ls=[],A$=c=>{var f=ls.length;return ls.push(c),f},R$=(c,f)=>{for(var b=Array(c),w=0;w<c;++w){var I=w,A=(v(),G)[f+4*w>>>2>>>0],B=ns[A];if(B===void 0)throw c=`parameter ${w}`,A=lg(A),f=pt(A),Bt(A),new Xn(`${c} has unknown type ${f}`);b[I]=B}return b},O$=(c,f,b)=>{var w=[];return c=c(w,b),w.length&&((v(),G)[f>>>2>>>0]=It(w)),c},z$={},pi=c=>{var f=z$[c];return f===void 0?pt(c):f};function N$(c,f,b){var[w,...I]=R$(c,f>>>0);f=w.Vc.bind(w);var A=I.map(te=>te.Uc.bind(te));c--;var B={toValue:mt};switch(c=A.map((te,ie)=>{var be=`argFromPtr${ie}`;return B[be]=te,`${be}(args${ie?"+"+8*ie:""})`}),b){case 0:var K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:B.getStringOrSymbol=pi,K="toValue(handle)[getStringOrSymbol(methodName)]"}return K+=`(${c})`,w.zd||(B.toReturnWire=f,B.emval_returnValue=O$,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
  ${K}
  }`,b=new Function(Object.keys(B),K)(...Object.values(B)),K=`methodCaller<(${I.map(te=>te.name)}) => ${w.name}>`,A$(Object.defineProperty(b,"name",{value:K}))}function B$(c,f){return f>>>=0,(c=mt(c>>>0))==mt(f)}function P$(c){return(c>>>=0)?(c=pi(c),It(globalThis[c])):It(globalThis)}function D$(c){return c=pi(c>>>0),It(t[c])}function U$(c,f){return f>>>=0,c=mt(c>>>0),f=mt(f),It(c[f])}function L$(c){9<(c>>>=0)&&(An[c+1]+=1)}function jm(c,f,b,w,I){return ls[c>>>0](f>>>0,b>>>0,w>>>0,I>>>0)}function F$(c,f,b,w,I){return jm(c>>>0,f>>>0,b>>>0,w>>>0,I>>>0)}function G$(){return It([])}function W$(c){c=mt(c>>>0);for(var f=Array(c.length),b=0;b<c.length;b++)f[b]=c[b];return It(f)}function q$(c){return It(pi(c>>>0))}function V$(){return It({})}function H$(c){for(var f=mt(c>>>=0);f.length;){var b=f.pop();f.pop()(b)}rs(c)}function j$(c,f,b){f>>>=0,b>>>=0,c=mt(c>>>0),f=mt(f),b=mt(b),c[f]=b}function K$(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(v(),R)[f>>>2>>>0]=c.getUTCSeconds(),(v(),R)[f+4>>>2>>>0]=c.getUTCMinutes(),(v(),R)[f+8>>>2>>>0]=c.getUTCHours(),(v(),R)[f+12>>>2>>>0]=c.getUTCDate(),(v(),R)[f+16>>>2>>>0]=c.getUTCMonth(),(v(),R)[f+20>>>2>>>0]=c.getUTCFullYear()-1900,(v(),R)[f+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),R)[f+28>>>2>>>0]=c}var Km=c=>c%4==0&&(c%100!=0||c%400==0),Ym=[0,31,60,91,121,152,182,213,244,274,305,335],Xm=[0,31,59,90,120,151,181,212,243,273,304,334];function Y$(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(v(),R)[f>>>2>>>0]=c.getSeconds(),(v(),R)[f+4>>>2>>>0]=c.getMinutes(),(v(),R)[f+8>>>2>>>0]=c.getHours(),(v(),R)[f+12>>>2>>>0]=c.getDate(),(v(),R)[f+16>>>2>>>0]=c.getMonth(),(v(),R)[f+20>>>2>>>0]=c.getFullYear()-1900,(v(),R)[f+24>>>2>>>0]=c.getDay();var b=(Km(c.getFullYear())?Ym:Xm)[c.getMonth()]+c.getDate()-1|0;(v(),R)[f+28>>>2>>>0]=b,(v(),R)[f+36>>>2>>>0]=-60*c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset();var w=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(b!=w&&c.getTimezoneOffset()==Math.min(w,b)),(v(),R)[f+32>>>2>>>0]=c}function X$(c){c>>>=0;var f=new Date((v(),R)[c+20>>>2>>>0]+1900,(v(),R)[c+16>>>2>>>0],(v(),R)[c+12>>>2>>>0],(v(),R)[c+8>>>2>>>0],(v(),R)[c+4>>>2>>>0],(v(),R)[c>>>2>>>0],0),b=(v(),R)[c+32>>>2>>>0],w=f.getTimezoneOffset(),I=new Date(f.getFullYear(),6,1).getTimezoneOffset(),A=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(A,I);return 0>b?(v(),R)[c+32>>>2>>>0]=+(I!=A&&B==w):0<b!=(B==w)&&(I=Math.max(A,I),f.setTime(f.getTime()+6e4*((0<b?B:I)-w))),(v(),R)[c+24>>>2>>>0]=f.getDay(),b=(Km(f.getFullYear())?Ym:Xm)[f.getMonth()]+f.getDate()-1|0,(v(),R)[c+28>>>2>>>0]=b,(v(),R)[c>>>2>>>0]=f.getSeconds(),(v(),R)[c+4>>>2>>>0]=f.getMinutes(),(v(),R)[c+8>>>2>>>0]=f.getHours(),(v(),R)[c+12>>>2>>>0]=f.getDate(),(v(),R)[c+16>>>2>>>0]=f.getMonth(),(v(),R)[c+20>>>2>>>0]=f.getYear(),c=f.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function Zm(c,f,b,w,I,A,B){return i?ge(16,1,c,f,b,w,I,A,B):-52}function Qm(c,f,b,w,I,A){if(i)return ge(17,1,c,f,b,w,I,A)}var vr={},Z$=()=>performance.timeOrigin+performance.now();function Jm(c,f){if(i)return ge(18,1,c,f);if(vr[c]&&(clearTimeout(vr[c].id),delete vr[c]),!f)return 0;var b=setTimeout(()=>{delete vr[c],li(()=>fg(c,performance.timeOrigin+performance.now()))},f);return vr[c]={id:b,Yd:f},0}function Q$(c,f,b,w){c>>>=0,f>>>=0,b>>>=0,w>>>=0;var I=new Date().getFullYear(),A=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var B=Math.max(A,I);(v(),G)[c>>>2>>>0]=60*B,(v(),R)[f>>>2>>>0]=+(A!=I),c=(f=K=>{var te=Math.abs(K);return`UTC${0<=K?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(A),f=f(I),I<A?(dn(c,b,17),dn(f,w,17)):(dn(c,w,17),dn(f,b,17))}var J$=()=>Date.now();function ex(c,f,b){return b>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(v(),X)[b>>>3>>>0]=BigInt(c),0):28}var cs=[],eg=(c,f)=>{cs.length=0;for(var b;b=(v(),V)[c++>>>0];){var w=b!=105;f+=(w&=b!=112)&&f%8?4:0,cs.push(b==112?(v(),G)[f>>>2>>>0]:b==106?(v(),X)[f>>>3>>>0]:b==105?(v(),R)[f>>>2>>>0]:(v(),P)[f>>>3>>>0]),f+=w?8:4}return cs};function tx(c,f,b){return c>>>=0,f=eg(f>>>0,b>>>0),ws[c](...f)}function nx(c,f,b){return c>>>=0,f=eg(f>>>0,b>>>0),ws[c](...f)}var rx=()=>{};function ix(c,f){return T(le(c>>>0,f>>>0))}var ax=()=>{throw Oe+=1,"unwind"};function ox(){return 4294901760}var sx=()=>navigator.hardwareConcurrency,Rn={},fi=c=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+f[1]:0},tg=c=>{for(var f of c)(c=fi(f))&&(Rn[c]=f)};function ux(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),tg(c),Rn.gd=fi(c[3]),Rn.Jd=c,Rn.gd}function mi(c){if(!(c=Rn[c>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(c))c=f[1];else{if(!(f=/^(.+?)@/.exec(c)))return 0;c=f[1]}Bt(mi.hd??0),f=ui(c)+1;var b=Sr(f);return b&&dn(c,b,f),mi.hd=b,mi.hd}function lx(c){c>>>=0;var f=(v(),V).length;if(c<=f||4294901760<c)return!1;for(var b=1;4>=b;b*=2){var w=f*(1+.2/b);w=Math.min(w,c+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(c,w)/65536))-Tt.buffer.byteLength+65535)/65536|0;try{Tt.grow(w),j();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function cx(c,f,b){if(c>>>=0,f>>>=0,Rn.gd==c)var w=Rn.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),tg(w);for(var I=3;w[I]&&fi(w[I])!=c;)++I;for(c=0;c<b&&w[c+I];++c)(v(),R)[f+4*c>>>2>>>0]=fi(w[c+I]);return c}var ds,hs={},ng=()=>{var w;if(!ds){var c,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in hs)hs[c]===void 0?delete f[c]:f[c]=hs[c];var b=[];for(c in f)b.push(`${c}=${f[c]}`);ds=b}return ds};function rg(c,f){if(i)return ge(19,1,c,f);c>>>=0,f>>>=0;var b,w=0,I=0;for(b of ng()){var A=f+w;(v(),G)[c+I>>>2>>>0]=A,w+=dn(b,A,1/0)+1,I+=4}return 0}function ig(c,f){if(i)return ge(20,1,c,f);c>>>=0,f>>>=0;var b=ng();for(var w of((v(),G)[c>>>2>>>0]=b.length,c=0,b))c+=ui(w)+1;return(v(),G)[f>>>2>>>0]=c,0}function ag(c){return i?ge(21,1,c):52}function og(c,f,b,w){return i?ge(22,1,c,f,b,w):52}function sg(c,f,b,w){return i?ge(23,1,c,f,b,w):70}var dx=[null,[],[]];function ug(c,f,b,w){if(i)return ge(24,1,c,f,b,w);f>>>=0,b>>>=0,w>>>=0;for(var I=0,A=0;A<b;A++){var B=(v(),G)[f>>>2>>>0],K=(v(),G)[f+4>>>2>>>0];f+=8;for(var te=0;te<K;te++){var ie=c,be=(v(),V)[B+te>>>0],Ee=dx[ie];be===0||be===10?((ie===1?S:T)(fe(Ee)),Ee.length=0):Ee.push(be)}I+=K}return(v(),G)[w>>>2>>>0]=I,0}function hx(c){return c>>>0}i||(function(){for(var c=t.numThreads-1;c--;)br();Re.push(async()=>{var f=(async function(){if(!i)return Promise.all(it.map(_r))})();Xe++,await f,--Xe==0&&He&&(f=He,He=null,f())})})(),i||(Tt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),j()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>ve(),t.stackRestore=c=>$e(c),t.stackAlloc=c=>ms(c),t.setValue=function(c,f,b="i8"){switch(b.endsWith("*")&&(b="*"),b){case"i1":case"i8":(v(),N)[c>>>0]=f;break;case"i16":(v(),L)[c>>>1>>>0]=f;break;case"i32":(v(),R)[c>>>2>>>0]=f;break;case"i64":(v(),X)[c>>>3>>>0]=BigInt(f);break;case"float":(v(),O)[c>>>2>>>0]=f;break;case"double":(v(),P)[c>>>3>>>0]=f;break;case"*":(v(),G)[c>>>2>>>0]=f;break;default:W(`invalid type for setValue: ${b}`)}},t.getValue=function(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),N)[c>>>0];case"i16":return(v(),L)[c>>>1>>>0];case"i32":return(v(),R)[c>>>2>>>0];case"i64":return(v(),X)[c>>>3>>>0];case"float":return(v(),O)[c>>>2>>>0];case"double":return(v(),P)[c>>>3>>>0];case"*":return(v(),G)[c>>>2>>>0];default:W(`invalid type for getValue: ${f}`)}},t.UTF8ToString=le,t.stringToUTF8=dn,t.lengthBytesUTF8=ui;var lg,cg,gi,Bt,Sr,ps,dg,hg,pg,fs,fg,mg,Se,Mr,gg,$e,ms,ve,yg,gs,wg,_g,bg,ys,$g,xg,vg,Sg,Mg,Tg,Ig,Eg,kg,Cg,Ag,Rg,Og,zg,Ng,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Jg,e0,t0,n0,r0,i0,a0,Kt,px=[We,on,oe,we,Ce,qe,Pe,cn,zt,Ne,Ke,at,Ht,ai,oi,si,Zm,Qm,Jm,rg,ig,ag,og,sg,ug],ws={1003524:(c,f,b,w,I)=>{if(t===void 0||!t.Xc)return 1;if((c=le(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.Xc.get(c)))return 2;if(f=Number(f>>>0),b=Number(b>>>0),w=Number(w>>>0),f+b>c.byteLength)return 3;try{let A=c.subarray(f,f+b);switch(I){case 0:(v(),V).set(A,w>>>0);break;case 1:t.Qd?t.Qd(w,A):t.Id(w,A);break;default:return 4}return 0}catch{return 4}},1004348:(c,f,b)=>{t.td(c,(v(),V).subarray(f>>>0,f+b>>>0))},1004412:()=>t.Sd(),1004454:c=>{t.sd(c)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:c=>t.Ad(c),1004609:c=>t.Ed(c),1004641:(c,f,b)=>{t.ed(Number(c),Number(f),Number(b),!0)},1004704:(c,f,b)=>{t.ed(Number(c),Number(f),Number(b))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:c=>{t.$b("Abs",c,void 0)},1004869:c=>{t.$b("Neg",c,void 0)},1004920:c=>{t.$b("Floor",c,void 0)},1004973:c=>{t.$b("Ceil",c,void 0)},1005025:c=>{t.$b("Reciprocal",c,void 0)},1005083:c=>{t.$b("Sqrt",c,void 0)},1005135:c=>{t.$b("Exp",c,void 0)},1005186:c=>{t.$b("Erf",c,void 0)},1005237:c=>{t.$b("Sigmoid",c,void 0)},1005292:(c,f,b)=>{t.$b("HardSigmoid",c,{alpha:f,beta:b})},1005371:c=>{t.$b("Log",c,void 0)},1005422:c=>{t.$b("Sin",c,void 0)},1005473:c=>{t.$b("Cos",c,void 0)},1005524:c=>{t.$b("Tan",c,void 0)},1005575:c=>{t.$b("Asin",c,void 0)},1005627:c=>{t.$b("Acos",c,void 0)},1005679:c=>{t.$b("Atan",c,void 0)},1005731:c=>{t.$b("Sinh",c,void 0)},1005783:c=>{t.$b("Cosh",c,void 0)},1005835:c=>{t.$b("Asinh",c,void 0)},1005888:c=>{t.$b("Acosh",c,void 0)},1005941:c=>{t.$b("Atanh",c,void 0)},1005994:c=>{t.$b("Tanh",c,void 0)},1006046:c=>{t.$b("Not",c,void 0)},1006097:(c,f,b)=>{t.$b("Clip",c,{min:f,max:b})},1006166:c=>{t.$b("Clip",c,void 0)},1006218:(c,f)=>{t.$b("Elu",c,{alpha:f})},1006276:c=>{t.$b("Gelu",c,void 0)},1006328:c=>{t.$b("Relu",c,void 0)},1006380:(c,f)=>{t.$b("LeakyRelu",c,{alpha:f})},1006444:(c,f)=>{t.$b("ThresholdedRelu",c,{alpha:f})},1006514:(c,f)=>{t.$b("Cast",c,{to:f})},1006572:c=>{t.$b("Add",c,void 0)},1006623:c=>{t.$b("Sub",c,void 0)},1006674:c=>{t.$b("Mul",c,void 0)},1006725:c=>{t.$b("Div",c,void 0)},1006776:c=>{t.$b("Pow",c,void 0)},1006827:c=>{t.$b("Equal",c,void 0)},1006880:c=>{t.$b("Greater",c,void 0)},1006935:c=>{t.$b("GreaterOrEqual",c,void 0)},1006997:c=>{t.$b("Less",c,void 0)},1007049:c=>{t.$b("LessOrEqual",c,void 0)},1007108:(c,f,b,w,I)=>{t.$b("ReduceMean",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007283:(c,f,b,w,I)=>{t.$b("ReduceMax",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007457:(c,f,b,w,I)=>{t.$b("ReduceMin",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007631:(c,f,b,w,I)=>{t.$b("ReduceProd",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007806:(c,f,b,w,I)=>{t.$b("ReduceSum",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007980:(c,f,b,w,I)=>{t.$b("ReduceL1",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008153:(c,f,b,w,I)=>{t.$b("ReduceL2",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008326:(c,f,b,w,I)=>{t.$b("ReduceLogSum",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008503:(c,f,b,w,I)=>{t.$b("ReduceSumSquare",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008683:(c,f,b,w,I)=>{t.$b("ReduceLogSumExp",c,{keepDims:!!f,noopWithEmptyAxes:!!b,axes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008863:c=>{t.$b("Where",c,void 0)},1008916:(c,f,b)=>{t.$b("Transpose",c,{perm:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(b)>>>0)):[]})},1009040:(c,f,b,w)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:le(b),format:w?"NHWC":"NCHW"})},1009173:(c,f,b,w)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:le(b),format:w?"NHWC":"NCHW"})},1009306:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe,pn)=>{t.$b("ConvTranspose",c,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[b],group:w,kernelShape:[I],pads:[A,B],strides:[K],wIsConst:()=>!!(v(),N)[ie>>>0],outputPadding:be?Array.from((v(),R).subarray(Number(be)>>>0,Number(Ee)>>>0)):[],outputShape:De?Array.from((v(),R).subarray(Number(De)>>>0,Number(Fe)>>>0)):[],activation:le(pn)})},1009739:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe)=>{t.$b("ConvTranspose",c,{format:K?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),R).subarray(Number(b)>>>0,(Number(b)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],outputShape:Ee?Array.from((v(),R).subarray(Number(Ee)>>>0,Number(De)>>>0)):[],activation:le(Fe)})},1010400:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe,pn)=>{t.$b("ConvTranspose",c,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[b],group:w,kernelShape:[I],pads:[A,B],strides:[K],wIsConst:()=>!!(v(),N)[ie>>>0],outputPadding:be?Array.from((v(),R).subarray(Number(be)>>>0,Number(Ee)>>>0)):[],outputShape:De?Array.from((v(),R).subarray(Number(De)>>>0,Number(Fe)>>>0)):[],activation:le(pn)})},1010833:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe)=>{t.$b("ConvTranspose",c,{format:K?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),R).subarray(Number(b)>>>0,(Number(b)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],outputShape:Ee?Array.from((v(),R).subarray(Number(Ee)>>>0,Number(De)>>>0)):[],activation:le(Fe)})},1011494:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1011585:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe)=>{t.$b("AveragePool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],strides:Ee?Array.from((v(),R).subarray(Number(Ee)>>>0,Number(De)>>>0)):[]})},1012064:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1012155:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe)=>{t.$b("AveragePool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],strides:Ee?Array.from((v(),R).subarray(Number(Ee)>>>0,Number(De)>>>0)):[]})},1012634:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1012721:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe)=>{t.$b("MaxPool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],strides:Ee?Array.from((v(),R).subarray(Number(Ee)>>>0,Number(De)>>>0)):[]})},1013196:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1013283:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe)=>{t.$b("MaxPool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:b,count_include_pad:w,storage_order:I,dilations:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],strides:Ee?Array.from((v(),R).subarray(Number(Ee)>>>0,Number(De)>>>0)):[]})},1013758:(c,f,b,w,I)=>{t.$b("Gemm",c,{alpha:f,beta:b,transA:w,transB:I})},1013862:c=>{t.$b("MatMul",c,void 0)},1013916:(c,f,b,w)=>{t.$b("ArgMax",c,{keepDims:!!f,selectLastIndex:!!b,axis:w})},1014024:(c,f,b,w)=>{t.$b("ArgMin",c,{keepDims:!!f,selectLastIndex:!!b,axis:w})},1014132:(c,f)=>{t.$b("Softmax",c,{axis:f})},1014195:(c,f)=>{t.$b("Concat",c,{axis:f})},1014255:(c,f,b,w,I)=>{t.$b("Split",c,{axis:f,numOutputs:b,splitSizes:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1014411:c=>{t.$b("Expand",c,void 0)},1014465:(c,f)=>{t.$b("Gather",c,{axis:Number(f)})},1014536:(c,f)=>{t.$b("GatherElements",c,{axis:Number(f)})},1014615:(c,f)=>{t.$b("GatherND",c,{batch_dims:Number(f)})},1014694:(c,f,b,w,I,A,B,K,te,ie,be)=>{t.$b("Resize",c,{antialias:f,axes:b?Array.from((v(),R).subarray(Number(b)>>>0,Number(w)>>>0)):[],coordinateTransformMode:le(I),cubicCoeffA:A,excludeOutside:B,extrapolationValue:K,keepAspectRatioPolicy:le(te),mode:le(ie),nearestMode:le(be)})},1015056:(c,f,b,w,I,A,B)=>{t.$b("Slice",c,{starts:f?Array.from((v(),R).subarray(Number(f)>>>0,Number(b)>>>0)):[],ends:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[]})},1015320:c=>{t.$b("Tile",c,void 0)},1015372:(c,f,b)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:b?"NHWC":"NCHW"})},1015486:(c,f,b)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:b?"NHWC":"NCHW"})},1015600:c=>{t.$b("Range",c,void 0)},1015653:(c,f)=>{t.$b("Einsum",c,{equation:le(f)})},1015734:(c,f,b,w,I)=>{t.$b("Pad",c,{mode:f,value:b,pads:w?Array.from((v(),R).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1015877:(c,f,b,w,I,A)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:b,spatial:!!I,trainingMode:!!w,format:A?"NHWC":"NCHW"})},1016046:(c,f,b,w,I,A)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:b,spatial:!!I,trainingMode:!!w,format:A?"NHWC":"NCHW"})},1016215:(c,f,b)=>{t.$b("CumSum",c,{exclusive:Number(f),reverse:Number(b)})},1016312:(c,f,b)=>{t.$b("DequantizeLinear",c,{axis:f,blockSize:b})},1016402:(c,f,b,w,I)=>{t.$b("GridSample",c,{align_corners:f,mode:le(b),padding_mode:le(w),format:I?"NHWC":"NCHW"})},1016572:(c,f,b,w,I)=>{t.$b("GridSample",c,{align_corners:f,mode:le(b),padding_mode:le(w),format:I?"NHWC":"NCHW"})},1016742:(c,f)=>{t.$b("ScatterND",c,{reduction:le(f)})},1016827:(c,f,b,w,I,A,B,K,te)=>{t.$b("Attention",c,{numHeads:f,isUnidirectional:b,maskFilterValue:w,scale:I,doRotary:A,qkvHiddenSizes:B?Array.from((v(),R).subarray(Number(K)>>>0,Number(K)+B>>>0)):[],pastPresentShareBuffer:!!te})},1017099:c=>{t.$b("BiasAdd",c,void 0)},1017154:c=>{t.$b("BiasSplitGelu",c,void 0)},1017215:c=>{t.$b("FastGelu",c,void 0)},1017271:(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe,pn,_s)=>{t.$b("Conv",c,{format:Ee?"NHWC":"NCHW",auto_pad:f,dilations:b?Array.from((v(),R).subarray(Number(b)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:A?Array.from((v(),R).subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:K?Array.from((v(),R).subarray(Number(K)>>>0,Number(te)>>>0)):[],strides:ie?Array.from((v(),R).subarray(Number(ie)>>>0,Number(be)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(De)>>>0],activation:le(Fe),activation_params:pn?Array.from((v(),O).subarray(Number(pn)>>>0,Number(_s)>>>0)):[]})},1017855:c=>{t.$b("Gelu",c,void 0)},1017907:(c,f,b,w,I,A,B,K,te)=>{t.$b("GroupQueryAttention",c,{numHeads:f,kvNumHeads:b,scale:w,softcap:I,doRotary:A,rotaryInterleaved:B,smoothSoftmax:K,localWindowSize:te})},1018124:(c,f,b,w)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:b,simplified:!!w})},1018235:(c,f,b,w)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:b,simplified:!!w})},1018346:(c,f,b,w,I,A)=>{t.$b("MatMulNBits",c,{k:f,n:b,accuracyLevel:w,bits:I,blockSize:A})},1018473:(c,f,b,w,I,A)=>{t.$b("MultiHeadAttention",c,{numHeads:f,isUnidirectional:b,maskFilterValue:w,scale:I,doRotary:A})},1018632:(c,f)=>{t.$b("QuickGelu",c,{alpha:f})},1018696:(c,f,b,w,I)=>{t.$b("RotaryEmbedding",c,{interleaved:!!f,numHeads:b,rotaryEmbeddingDim:w,scale:I})},1018835:(c,f,b)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!b})},1018937:(c,f,b)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!b})},1019039:(c,f,b,w)=>{t.$b("GatherBlockQuantized",c,{gatherAxis:f,quantizeAxis:b,blockSize:w})},1019160:c=>{t.Fd(c)},1019194:(c,f)=>t.Hd(Number(c),Number(f),t.Yc.Kd,t.Yc.errors)};function fx(c,f,b){return Hm(async()=>{await t.Dd(Number(c),Number(f),Number(b))})}function mx(){return typeof wasmOffsetConverter<"u"}function gx(c,f,b,w){var I=ve();try{return Eg(c,f,b,w)}catch(A){if($e(I),A!==A+0)throw A;Se(1,0)}}function yx(c,f,b){var w=ve();try{return Sg(c,f,b)}catch(I){if($e(w),I!==I+0)throw I;Se(1,0)}}function wx(c){var f=ve();try{$g(c)}catch(b){if($e(f),b!==b+0)throw b;Se(1,0)}}function _x(c,f){var b=ve();try{return ys(c,f)}catch(w){if($e(b),w!==w+0)throw w;Se(1,0)}}function bx(c,f,b){var w=ve();try{bg(c,f,b)}catch(I){if($e(w),I!==I+0)throw I;Se(1,0)}}function $x(c,f){var b=ve();try{kg(c,f)}catch(w){if($e(b),w!==w+0)throw w;Se(1,0)}}function xx(c,f,b,w,I,A,B){var K=ve();try{return Tg(c,f,b,w,I,A,B)}catch(te){if($e(K),te!==te+0)throw te;Se(1,0)}}function vx(c,f,b,w,I,A){var B=ve();try{xg(c,f,b,w,I,A)}catch(K){if($e(B),K!==K+0)throw K;Se(1,0)}}function Sx(c,f,b,w){var I=ve();try{Ig(c,f,b,w)}catch(A){if($e(I),A!==A+0)throw A;Se(1,0)}}function Mx(c,f,b,w,I){var A=ve();try{vg(c,f,b,w,I)}catch(B){if($e(A),B!==B+0)throw B;Se(1,0)}}function Tx(c,f,b,w,I,A,B){var K=ve();try{Ag(c,f,b,w,I,A,B)}catch(te){if($e(K),te!==te+0)throw te;Se(1,0)}}function Ix(c,f,b,w,I,A,B){var K=ve();try{Rg(c,f,b,w,I,A,B)}catch(te){if($e(K),te!==te+0)throw te;Se(1,0)}}function Ex(c,f,b,w,I,A,B,K){var te=ve();try{Bg(c,f,b,w,I,A,B,K)}catch(ie){if($e(te),ie!==ie+0)throw ie;Se(1,0)}}function kx(c,f,b,w,I){var A=ve();try{return Cg(c,f,b,w,I)}catch(B){if($e(A),B!==B+0)throw B;Se(1,0)}}function Cx(c,f,b){var w=ve();try{return Pg(c,f,b)}catch(I){if($e(w),I!==I+0)throw I;Se(1,0)}}function Ax(c,f,b,w,I,A,B,K){var te=ve();try{Dg(c,f,b,w,I,A,B,K)}catch(ie){if($e(te),ie!==ie+0)throw ie;Se(1,0)}}function Rx(c,f,b,w,I,A,B,K,te,ie,be,Ee){var De=ve();try{Og(c,f,b,w,I,A,B,K,te,ie,be,Ee)}catch(Fe){if($e(De),Fe!==Fe+0)throw Fe;Se(1,0)}}function Ox(c,f,b,w,I,A){var B=ve();try{return zg(c,f,b,w,I,A)}catch(K){if($e(B),K!==K+0)throw K;Se(1,0)}}function zx(c,f,b){var w=ve();try{return Ug(c,f,b)}catch(I){if($e(w),I!==I+0)throw I;return Se(1,0),0n}}function Nx(c,f,b,w,I,A,B,K,te){var ie=ve();try{Mg(c,f,b,w,I,A,B,K,te)}catch(be){if($e(ie),be!==be+0)throw be;Se(1,0)}}function Bx(c){var f=ve();try{return Lg(c)}catch(b){if($e(f),b!==b+0)throw b;Se(1,0)}}function Px(c,f){var b=ve();try{return t0(c,f)}catch(w){if($e(b),w!==w+0)throw w;return Se(1,0),0n}}function Dx(c){var f=ve();try{return Fg(c)}catch(b){if($e(f),b!==b+0)throw b;return Se(1,0),0n}}function Ux(c,f,b,w){var I=ve();try{return jg(c,f,b,w)}catch(A){if($e(I),A!==A+0)throw A;Se(1,0)}}function Lx(c,f,b,w,I){var A=ve();try{return Kg(c,f,b,w,I)}catch(B){if($e(A),B!==B+0)throw B;Se(1,0)}}function Fx(c,f,b,w,I,A){var B=ve();try{return Yg(c,f,b,w,I,A)}catch(K){if($e(B),K!==K+0)throw K;Se(1,0)}}function Gx(c,f,b,w,I,A){var B=ve();try{return Xg(c,f,b,w,I,A)}catch(K){if($e(B),K!==K+0)throw K;Se(1,0)}}function Wx(c,f,b,w,I,A,B,K){var te=ve();try{return Ng(c,f,b,w,I,A,B,K)}catch(ie){if($e(te),ie!==ie+0)throw ie;Se(1,0)}}function qx(c,f,b,w,I){var A=ve();try{return Zg(c,f,b,w,I)}catch(B){if($e(A),B!==B+0)throw B;return Se(1,0),0n}}function Vx(c,f,b,w){var I=ve();try{return Qg(c,f,b,w)}catch(A){if($e(I),A!==A+0)throw A;Se(1,0)}}function Hx(c,f,b,w){var I=ve();try{return Jg(c,f,b,w)}catch(A){if($e(I),A!==A+0)throw A;Se(1,0)}}function jx(c,f,b,w,I,A,B,K,te,ie,be,Ee){var De=ve();try{return e0(c,f,b,w,I,A,B,K,te,ie,be,Ee)}catch(Fe){if($e(De),Fe!==Fe+0)throw Fe;Se(1,0)}}function Kx(c,f,b,w,I,A,B,K,te,ie,be){var Ee=ve();try{Vg(c,f,b,w,I,A,B,K,te,ie,be)}catch(De){if($e(Ee),De!==De+0)throw De;Se(1,0)}}function Yx(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe,pn,_s){var Jx=ve();try{Hg(c,f,b,w,I,A,B,K,te,ie,be,Ee,De,Fe,pn,_s)}catch(bs){if($e(Jx),bs!==bs+0)throw bs;Se(1,0)}}function Xx(c,f,b){var w=ve();try{return Gg(c,f,b)}catch(I){if($e(w),I!==I+0)throw I;Se(1,0)}}function Zx(c,f,b){var w=ve();try{return Wg(c,f,b)}catch(I){if($e(w),I!==I+0)throw I;Se(1,0)}}function Qx(c,f,b,w){var I=ve();try{qg(c,f,b,w)}catch(A){if($e(I),A!==A+0)throw A;Se(1,0)}}function yi(){if(0<Xe)He=yi;else if(i)y==null||y(t),F();else{for(var c=Re;0<c.length;)c.shift()(t);0<Xe?He=yi:(t.calledRun=!0,k||(F(),y==null||y(t)))}}return i||(Kt=await he(),yi()),t.PTR_SIZE=4,D?t:new Promise((c,f)=>{y=c,_=f})}var Ws,qs,k0=ee(()=>{var e,t;Ws=Gs,qs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),qs&&Gs()}),Ti,Ii,Vs,ut,Hs,kr,js,Ks,Ei,Ys,ki,Xs,Ci,Zs,Ai=ee(()=>{vi(),Ti=typeof location>"u"?void 0:location.origin,Ii=self.location.href>"file:"&&self.location.href<"file;",Vs=()=>{{if(Ii){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ti).href}return self.location.href}},ut=Vs(),Hs=()=>{if(ut&&!ut.startsWith("blob:"))return ut.substring(0,ut.lastIndexOf("/")+1)},kr=(e,t)=>{try{let n=t??ut;return(n?new URL(e,n):new URL(e)).origin===Ti}catch{return!1}},js=(e,t)=>{let n=t??ut;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ks=(e,t)=>`${t??"./"}${e}`,Ei=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ys=async e=>(await import(e)).default,ki=(E0(),Zn(Us)).default,Xs=async()=>{if(!ut)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(kr(ut))return[void 0,ki()];let e=await Ei(ut);return[e,ki(e)]},Ci=(k0(),Zn(Fs)).default,Zs=async(e,t,n,r)=>{let i=Ci&&!(e||t);if(i)if(ut)i=kr(ut)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ci];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??js(a,t),s=n&&o&&!kr(o,t),u=s?await Ei(o):o??Ks(a,t);return[s?u:void 0,await Ys(u)]}}}),Ri,Cr,er,Oi,Qs,Js,eu,zi,Le,yn=ee(()=>{Ai(),Cr=!1,er=!1,Oi=!1,Qs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Js=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},eu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},zi=async e=>{if(Cr)return Promise.resolve();if(er)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Oi)throw new Error("previous call to 'initializeWebAssembly()' failed.");er=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!eu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Js())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Qs();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[d,p]=await Zs(s,a,n>1,!!h||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,_)=>{let $={numThreads:n};if(h)$.wasmBinary=h,$.locateFile=x=>x;else if(l||a)$.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)$.locateFile=x=>new URL(x,s).href;else if(d){let x=Hs();x&&($.locateFile=M=>x+M)}p($).then(x=>{er=!1,Cr=!0,Ri=x,y(),d&&URL.revokeObjectURL(d)},x=>{er=!1,Oi=!0,_(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Le=()=>{if(Cr&&Ri)return Ri;throw new Error("WebAssembly is not initialized yet.")}}),yt,Ar,ze,Ni=ee(()=>{yn(),yt=(e,t)=>{let n=Le(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Ar=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Ar(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ze=e=>{let t=Le(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),tu,C0=ee(()=>{yn(),Ni(),tu=e=>{let t=Le(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=yt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&ze("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ar(e.extra,"",new WeakSet,(o,s)=>{let u=yt(o,r),l=yt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&ze(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),nu,ru,iu,wn,au,ou,A0=ee(()=>{yn(),Ni(),nu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ru=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},iu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},wn=(e,t,n,r)=>{let i=yt(t,r),a=yt(n,r);Le()._OrtAddSessionConfigEntry(e,i,a)!==0&&ze(`Can't set a session config entry: ${t} - ${n}.`)},au=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",wn(e,"session.disable_quant_qdq","1",n),wn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&wn(e,"deviceType",d,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);wn(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=yt(a,n),u=o.length,l=0,h=0;if(u>0){l=Le()._malloc(u*Le().PTR_SIZE),n.push(l),h=Le()._malloc(u*Le().PTR_SIZE),n.push(h);for(let d=0;d<u;d++)Le().setValue(l+d*Le().PTR_SIZE,o[d][0],"*"),Le().setValue(h+d*Le().PTR_SIZE,o[d][1],"*")}await Le()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&ze(`Can't append execution provider: ${a}.`)}},ou=async e=>{let t=Le(),n=0,r=[],i=e||{};iu(i);try{let a=nu(i.graphOptimizationLevel??"all"),o=ru(i.executionMode??"sequential"),s=typeof i.logId=="string"?yt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?yt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&ze("Can't create session options."),i.executionProviders&&await au(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);wn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let m=yt(d,r);t._OrtAddFreeDimensionOverride(n,m,p)!==0&&ze(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&Ar(i.extra,"",new WeakSet,(d,p)=>{wn(n,d,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ze("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),_n,Ut,bn,Rr,Or,Bi,Pi,Di,me=ee(()=>{_n=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ut=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},bn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Rr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Or=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Bi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Di=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ui,su=ee(()=>{vi(),Ui=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),uu,lu,cu,du,Li,hu,Me,Lt=ee(()=>{me(),uu=["V","I","W","E","F"],lu=(e,t)=>{console.log(`[${uu[e]},${new Date().toISOString()}]${t}`)},Li=(e,t)=>{cu=e,du=t},hu=(e,t)=>{let n=Or(e),r=Or(cu);n>=r&&lu(n,typeof t=="function"?t():t)},Me=(...e)=>{du&&hu(...e)}}),pu,Bn,q,zr,fu,mu,gu,ye=ee(()=>{pu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=pu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class wi{static size(t){return wi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return wi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return wi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},zr=class Tr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Tr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Tr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Tr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Tr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},fu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Bn.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},mu=-34028234663852886e22,gu=34028234663852886e22}),Fi,yu=ee(()=>{me(),Fi=(e,t)=>new(Rr(t))(e)}),Gi,Wi,qi,wu,Vi,_u,Hi,ji,Ki,bu,$u,R0=ee(()=>{me(),Lt(),Gi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Wi=(e,t)=>{if(t==="int32")return e;let n=Gi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Rr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},qi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},wu=1,Vi=()=>wu++,_u=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Hi=(e,t)=>{let n=Gi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},ji=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Hi(this.dataType,this.tensorShape)}destroy(){Me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=qi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Ki=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=_u.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Hi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Wi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?qi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},bu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Vi();return this.tensorTrackersById.set(e,new Ki(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Vi(),o=new ji({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Ki(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new ji({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},$u=(...e)=>new bu(...e)}),tr,xu,vu,O0=ee(()=>{me(),yn(),yu(),R0(),Lt(),tr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),xu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},vu=class{constructor(e){this.tensorManager=$u(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Li(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>xu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=tr.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=tr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Le().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Fi(n,t)}}registerMLTensor(e,t,n,r){let i=tr.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let d=Wi(new Uint8Array(l),"int64");h=new Int32Array(d.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=tr.get(_n(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Yi=ee(()=>{}),Xi,Nr,Br,Su,Mu,Zi,Qi,Tu,Iu,z0=ee(()=>{Lt(),Yi(),Xi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Nr=[],Br=e=>Math.ceil(Number(e)/16)*16,Su=e=>{for(let t=0;t<Nr.length;t++){let n=Nr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Mu=1,Zi=()=>Mu++,Qi=async(e,t,n,r)=>{let i=Br(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Tu=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Xi)Nr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Br(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Br(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Zi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Su(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Zi(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Qi(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Xi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Iu=(...e)=>new Tu(...e)}),Eu,Ae,Ye=ee(()=>{Eu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ae=e=>new Eu(e)}),Pn,Pr,Ze,nt,ce,Ve,Ji,Dn,Xt,ue,nr,Y,se,ku,ea,Cu,Au,_e=ee(()=>{me(),ye(),Pn=64,Pr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ze=(e,t=1)=>{let n=Pr(e,t);return typeof n=="string"?n:n[0]},nt=(e,t=1)=>{let n=Pr(e,t);return typeof n=="string"?n:n[1]},ce=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},Ve=e=>e%4===0?4:e%2===0?2:1,Ji=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Dn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Xt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ue=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,nr=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Pr(t,i),h=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:d,tensor:t},m=D=>typeof D=="string"?D:`${D}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",_=`${y}${e}_shape`,$=`${y}${e}_strides`,x="";for(let D=0;D<o-1;D++)x+=`
    let dim${D} = current / ${ue($,D,o)};
    let rest${D} = current % ${ue($,D,o)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;x+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=D=>(g.offsetToIndices=!0,o<2?D:`o2i_${e}(${D})`),T=[];if(o>=2)for(let D=o-1;D>=0;D--)T.push(`${ue($,D,o)} * (indices[${D}])`);let k=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${T.join("+")};
  }`,E=D=>(g.indicesToOffset=!0,o<2?D:`i2o_${e}(${D})`),v=(...D)=>o===0?"0u":`${p.indices}(${D.map(m).join(",")})`,C=(D,j)=>o<2?`${D}`:`${ue(D,j,o)}`,N=(D,j,F)=>o<2?`${D}=${F};`:`${ue(D,j,o)}=${F};`,V={},L=(D,j)=>{g.broadcastedIndicesToOffset=!0;let F=`${j.name}broadcastedIndicesTo${e}Offset`;if(F in V)return`${F}(${D})`;let W=[];for(let ne=o-1;ne>=0;ne--){let he=j.indicesGet("outputIndices",ne+j.rank-o);W.push(`${C($,ne)} * (${he} % ${C(_,ne)})`)}return V[F]=`fn ${F}(outputIndices: ${j.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${F}(${D})`},H=(D,j)=>(()=>{if(p.storage===p.value)return`${e}[${D}]=${j};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${j}), select(0u, 0xFFFFFFFFu, ${j} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${j}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${j}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),R=D=>(()=>{if(p.storage===p.value)return`${e}[${D}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${D}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${D}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),G=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${R(`i2o_${e}(indices)`)};
  }`,O=o<2?"":(()=>{let D=s.map(F=>`d${F}: u32`).join(", "),j=s.map(F=>`d${F}`).join(", ");return`
  fn get_${e}(${D}) -> ${h} {
    return get_${e}ByIndices(${v(j)});
  }`})(),P=(...D)=>{if(D.length!==o)throw new Error(`indices length must be ${o}`);let j=D.map(m).join(",");return o===0?R("0u"):o===1?R(j[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${j})`)},X=D=>o<2?R(D):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${D})`),z=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,Q=o<2?"":(()=>{let D=s.map(F=>`d${F}: u32`).join(", "),j=s.map(F=>`d${F}`).join(", ");return`
  fn set_${e}(${D}, value: ${h}) {
    set_${e}ByIndices(${v(j)}, value);
  }`})();return{impl:()=>{let D=[],j=!1;return g.offsetToIndices&&(D.push(M),j=!0),g.indicesToOffset&&(D.push(k),j=!0),g.broadcastedIndicesToOffset&&(Object.values(V).forEach(F=>D.push(F)),j=!0),g.set&&(D.push(Q),j=!0),g.setByIndices&&(D.push(z),j=!0),g.get&&(D.push(O),j=!0),g.getByIndices&&(D.push(G),j=!0),!a&&j&&D.unshift(`const ${_} = ${p.indices}(${n.join(",")});`,`const ${$} = ${p.indices}(${q.computeStrides(n).join(",")});`),D.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:E,broadcastedIndicesToOffset:L,indices:v,indicesGet:C,indicesSet:N,set:(...D)=>{if(D.length!==o+1)throw new Error(`indices length must be ${o}`);let j=D[o];if(typeof j!="string")throw new Error("value must be string");let F=D.slice(0,o).map(m).join(",");return o===0?H("0u",j):o===1?H(F[0],j):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${F}, ${j})`)},setByOffset:H,setByIndices:(D,j)=>o<2?H(D,j):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${j});`),get:P,getByOffset:R,getByIndices:X,usage:r,name:e,strides:$,shape:_,rank:o}},Y=(e,t,n,r=1)=>nr(e,t,n,"input",r),se=(e,t,n,r=1)=>nr(e,t,n,"output",r),ku=(e,t,n)=>nr(e,t,n,"atomicOutput",1),ea=(e,t,n,r=1)=>nr(e,t,n,"internal",r),Cu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Au=(e,t)=>new Cu(e,t)}),Ru,ta,Ou,zu,Nu,Bu,lt,Pu,Du,Zt=ee(()=>{me(),ye(),Ye(),_e(),Ru=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ta=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ou=(e,t)=>q.sortBasedOnPerm(e,ta(e.length,t)),zu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Nu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Bu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},lt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ta(r,t),a=Ou(e.dims,i),o=e.dims,s=a,u=r<2||Bu(i,e.dims),l;if(u)return l=g=>{let y=Y("input",n,o,4),_=se("output",n,s,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:h,newPerm:d}=Nu(e.dims,i),p=q.areEqual(d,[2,3,1]),m=q.areEqual(d,[3,1,2]);if(h.length===2||p||m){o=p?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let g=16;return l=y=>{let _=Y("a",n,o.length),$=se("output",n,s.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${_.getByIndices(`${_.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/g),y:Math.ceil(s[0]/g)},programUniforms:[{type:12,data:y},...ce(o,s)]}},getShaderSource:l}}return l=g=>{let y=Y("a",n,o.length),_=se("output",n,s.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}

  ${zu(i,r,y,_)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ce(o,s)]}},getShaderSource:l}},Pu=(e,t)=>{Ru(e.inputs,t.perm),e.compute(lt(e.inputs[0],t.perm))},Du=e=>Ae({perm:e.perm})}),Uu,Lu,Fu,Gu,Wu,qu,Vu,Hu,ju,Ku,wt,Yu,Xu,Zu,Qu,Ju,el,tl,nl,rl,il,N0=ee(()=>{me(),ye(),_e(),ra(),Zt(),Uu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Lu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Fu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Gu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Wu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},qu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Vu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Hu=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},ju=(e,t)=>{let n=[];if(!Hu(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Ku=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=q.size(a),l=q.size(o),h=Y("_A",n[0].dataType,s),d=se("output",i,a),p=64;u===1&&(p=256);let m=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(h,d)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Fu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Uu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Lu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Gu[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},wt=(e,t,n,r)=>{let i=e.inputs.length===1?n:na(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let o=q.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=ju(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(lt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Wu(s.length,u.dims.length));let[h,d]=qu(u.dims,s),p=h;i.keepDims&&(p=Vu(h,o)),e.compute(Ku(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},Yu=(e,t)=>{wt(e,"ReduceMeanShared",t,"mean")},Xu=(e,t)=>{wt(e,"ReduceL1Shared",t,"l1")},Zu=(e,t)=>{wt(e,"ReduceL2Shared",t,"l2")},Qu=(e,t)=>{wt(e,"ReduceLogSumExpShared",t,"logSumExp")},Ju=(e,t)=>{wt(e,"ReduceMaxShared",t,"max")},el=(e,t)=>{wt(e,"ReduceMinShared",t,"min")},tl=(e,t)=>{wt(e,"ReduceProdShared",t,"prod")},nl=(e,t)=>{wt(e,"ReduceSumShared",t,"sum")},rl=(e,t)=>{wt(e,"ReduceSumSquareShared",t,"sumSquare")},il=(e,t)=>{wt(e,"ReduceLogSumShared",t,"logSum")}}),_t,al,Dr,na,bt,ol,sl,ul,ll,cl,dl,hl,pl,fl,ml,$t,gl,yl,wl,_l,bl,$l,xl,vl,Sl,Ml,ra=ee(()=>{me(),ye(),Ye(),_e(),N0(),_t=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},al=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Dr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,d=q.normalizeAxes(i,h),p=!s&&d.length===0;l.forEach((y,_)=>{p||d.indexOf(_)>=0?o&&u.push(1):u.push(y)});let m=u.length,g=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let _=[],$=Y("_A",n[0].dataType,h),x=se("output",a,m),M=r($,x,d),S=M[2];for(let T=0,k=0;T<h;T++)p||d.indexOf(T)>=0?(o&&k++,S=`for(var j${T}: u32 = 0; j${T} < ${l[T]}; j${T}++) {
                  ${M[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${$.indicesSet("input_indices",T,`j${T}`)}
                  ${S}
                }`):(_.push(`${$.indicesSet("input_indices",T,x.indicesGet("output_indices",k))};`),k++);return`

        ${y.registerUniform("output_size","u32").declareVariables($,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${M[0]}       // init ops for reduce max/min
          ${M[1]}
          ${S}
          ${M[3]}
          ${M.length===4?x.setByOffset("global_idx","value"):M.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ce(l,u)]})}},na=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Ae({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},bt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:na(i,n);e.compute(Dr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?al:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},ol=(e,t)=>{_t(e.inputs),bt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},sl=(e,t)=>{_t(e.inputs),bt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},ul=(e,t)=>{_t(e.inputs),bt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ll=(e,t)=>{_t(e.inputs),bt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},cl=(e,t)=>{_t(e.inputs),bt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},dl=(e,t)=>{_t(e.inputs),bt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},hl=(e,t)=>{_t(e.inputs),bt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},pl=(e,t)=>{_t(e.inputs),bt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},fl=(e,t)=>{_t(e.inputs),bt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},ml=(e,t)=>{_t(e.inputs),bt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},$t=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},gl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):Yu(e,t)},yl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sl(e,t):Xu(e,t)},wl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ul(e,t):Zu(e,t)},_l=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ll(e,t):Qu(e,t)},bl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cl(e,t):Ju(e,t)},$l=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):el(e,t)},xl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):tl(e,t)},vl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):nl(e,t)},Sl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):rl(e,t)},Ml=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ol(e,t):il(e,t)}}),ia,Tl,Il,aa,B0=ee(()=>{me(),Ye(),ra(),ia=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Tl=(e,t)=>{ia(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Dr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Il=(e,t)=>{ia(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Dr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},aa=e=>Ae(e)}),El,Ur,kl,Cl,Al,rr,Rl,Ol,oa=ee(()=>{me(),ye(),Yi(),_e(),El=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,m=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let _=g+y,$=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:_,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:d,vHiddenSize:m,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ur=(e,t,n)=>t&&e?`
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
    `,kl=(e,t,n,r,i,a,o,s)=>{let u=Ve(o?1:a),l=64,h=a/u;h<l&&(l=32);let d=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:d}],m=Ze(e.dataType,u),g=nt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let _=$=>{let x=se("x",e.dataType,e.dims,u),M=[x],S=o?Y("seq_lens",o.dataType,o.dims):void 0;S&&M.push(S);let T=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;T&&M.push(T);let k=nt(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${$.registerUniforms(E).declareVariables(...M)}
  ${$.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ur(S,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${g}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${x.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:_,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Cl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=d?[a.batchSize,p,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,_=Ve(a.headSize),$=a.headSize/_,x=12,M={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:g}],T=d&&r&&q.size(r.dims)>0,k=["type","type"];T&&k.push("type"),i&&k.push("type"),s&&k.push("type"),u&&k.push("type");let E=[{dims:h,dataType:t.dataType,gpuDataType:0}];d&&E.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=C=>{let N=Y("q",t.dataType,t.dims,_),V=Y("key",n.dataType,n.dims,_),L=[N,V];if(T){let z=Y("past_key",r.dataType,r.dims,_);L.push(z)}i&&L.push(Y("attention_bias",i.dataType,i.dims));let H=s?Y("seq_lens",s.dataType,s.dims):void 0;H&&L.push(H);let R=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;R&&L.push(R);let G=se("output",t.dataType,h),O=[G];d&&O.push(se("present_key",t.dataType,m,_));let P=nt(1,_),X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${C.registerUniforms(X).declareVariables(...L,...O)}
  ${C.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ur(H,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${P}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&d?`
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
          value += ${P}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(_){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${_}`)}})()};
        output[outputIdx] = ${G.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${_};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:E,dispatchGroup:M,programUniforms:S}),getShaderSource:v}},Al=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=d?[i.batchSize,p,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,h],y=12,_={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=d&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),o&&M.push("type"),s&&M.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];d&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=k=>{let E=Y("probs",t.dataType,t.dims),v=Y("v",n.dataType,n.dims),C=[E,v];x&&C.push(Y("past_value",r.dataType,r.dims));let N=o?Y("seq_lens",o.dataType,o.dims):void 0;o&&C.push(N);let V=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;s&&C.push(V);let L=[se("output",t.dataType,g)];d&&L.push(se("present_value",t.dataType,m));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${k.registerUniforms(H).declareVariables(...C,...L)}
  ${k.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ur(N,V,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:S,dispatchGroup:_,programUniforms:$}),getShaderSource:T}},rr=(e,t,n,r,i,a,o,s,u,l,h=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),m=p>1?o:void 0,g=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,_=y+l.kvSequenceLength,$=u&&q.size(u.dims)>0?u:void 0,x=[t,n];m&&q.size(m.dims)>0&&x.push(m),$&&x.push($),h&&x.push(h),d&&x.push(d);let M=e.compute(Cl(p,t,n,m,$,l,y,h,d),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(kl(M,l.batchSize,l.numHeads,y,l.sequenceLength,_,h,d),{inputs:h&&d?[M,h,d]:[M],outputs:[]});let S=[M,r];g&&q.size(g.dims)>0&&S.push(g),h&&S.push(h),d&&S.push(d),e.compute(Al(p,M,r,g,l,y,h,d),{inputs:S,outputs:p>1?[0,2]:[0]})},Rl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=d=>{let p=se("output_q",u[0].dataType,n),m=se("output_k",u[0].dataType,n),g=se("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),_=Y("weight",u[1].dataType,u[1].dims),$=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${x}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${x}, ${o*o}>;
  var<workgroup> tileWeightK: array<${x}, ${o*o}>;
  var<workgroup> tileWeightV: array<${x}, ${o*o}>;
  ${d.registerUniforms(M).declareVariables(y,_,$,p,m,g)}
  ${d.mainStart([o,o,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Ol=(e,t)=>{let n=El(e.inputs,t),[r,i,a]=Rl(e,n);return rr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),zl,Nl,Bl,Pl,P0=ee(()=>{ft(),me(),ye(),Ye(),_e(),zl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Nl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Ve(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=q.size(a)/o,l=r,h=l?a.length:a,d=Y("x",e[0].dataType,e[0].dims,o),p=Y("scale",e[1].dataType,e[1].dims,s),m=Y("bias",e[2].dataType,e[2].dims,s),g=Y("inputMean",e[3].dataType,e[3].dims,s),y=Y("inputVar",e[4].dataType,e[4].dims,s),_=se("y",e[0].dataType,h,o),$=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${_.indicesSet("outputIndices","0","0")}
            let cOffset = ${_.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)M+=`cIndices[${S}] = outputIndices[${S}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(d,p,m,g,y,_)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
    ${$()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${_.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ce(a)]:[{type:12,data:u}]})}},Bl=e=>Ae(e),Pl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Bl({...t,outputCount:r});if(Ue.webgpu.validateInputContent&&zl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Nl(n,i))}}),Dl,Ul,Ll,D0=ee(()=>{ye(),_e(),Dl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ul=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,a=Y("input",i,t,4),o=Y("bias",i,[n],4),s=Y("residual",i,t,4),u=se("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Ll=e=>{Dl(e.inputs),e.compute(Ul(e.inputs))}}),Fl,ke,Gl,Wl,ql,Vl,Hl,jl,Kl,Yl,Xl,Zl,Ql,Jl,ec,tc,ir,nc,Lr,rc,ic,ac,oc,sc,uc,lc,cc,dc,hc,pc,fc,mc,gc,yc,wc,sa,_c,ua,la,bc,$c,xc,vc,Sc,Mc,ca=ee(()=>{me(),ye(),Ye(),_e(),Fl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[s],4),h=se("outputData",r,[s],4),d=[{name:"vec_size",type:"u32"}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},ke=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Fl(l,q.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},Gl=e=>{e.compute(ke(e.inputs[0],"Abs","abs"))},Wl=e=>{e.compute(ke(e.inputs[0],"Acos","acos"))},ql=e=>{e.compute(ke(e.inputs[0],"Acosh","acosh"))},Vl=e=>{e.compute(ke(e.inputs[0],"Asin","asin"))},Hl=e=>{e.compute(ke(e.inputs[0],"Asinh","asinh"))},jl=e=>{e.compute(ke(e.inputs[0],"Atan","atan"))},Kl=e=>{e.compute(ke(e.inputs[0],"Atanh","atanh"))},Yl=e=>Ae(e),Xl=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ke(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Zl=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ae({min:t,max:n})},Ql=(e,t)=>{let n=t||Zl(e.inputs),r=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Jl=e=>{e.compute(ke(e.inputs[0],"Ceil","ceil"))},ec=e=>{e.compute(ke(e.inputs[0],"Cos","cos"))},tc=e=>{e.compute(ke(e.inputs[0],"Cosh","cosh"))},ir=e=>Ae(e),nc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,rc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Lr(t)))},ic=e=>{e.compute(ke(e.inputs[0],"Exp","exp"))},ac=e=>{e.compute(ke(e.inputs[0],"Floor","floor"))},oc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Lr(t)))},sc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},uc=e=>{e.compute(ke(e.inputs[0],"Not",t=>`!${t}`))},lc=e=>{e.compute(ke(e.inputs[0],"Neg",t=>`-${t}`))},cc=e=>{e.compute(ke(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},dc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},hc=e=>{e.compute(ke(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},pc=e=>Ae(e),fc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},mc=e=>{e.compute(ke(e.inputs[0],"Sin","sin"))},gc=e=>{e.compute(ke(e.inputs[0],"Sinh","sinh"))},yc=e=>{e.compute(ke(e.inputs[0],"Sqrt","sqrt"))},wc=e=>{e.compute(ke(e.inputs[0],"Tan","tan"))},sa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,_c=e=>{e.compute(ke(e.inputs[0],"Tanh",sa))},ua=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${sa("v")};
}
`,la=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,bc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"FastGelu",la,ua(t),void 0,e.inputs[0].dataType))},$c=(e,t)=>{let n=nt(e.inputs[0].dataType);return e.compute(ke(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},xc=e=>{e.compute(ke(e.inputs[0],"Log","log"))},vc=(e,t)=>`
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
`,Sc=e=>`quick_gelu_impl(${e})`,Mc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"QuickGelu",Sc,vc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Tc,Ic,Ec,U0=ee(()=>{ye(),_e(),ca(),Tc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ic=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=se("output",e[0].dataType,t,4),a=q.size(t)/4,o=Ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Lr(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ec=e=>{Tc(e.inputs),e.compute(Ic(e.inputs))}}),kc,Cc,xt,Ac,Rc,Oc,zc,Nc,Bc,Pc,Dc,Uc,Lc,L0=ee(()=>{me(),ye(),_e(),kc=(e,t,n,r,i,a,o,s,u,l,h,d)=>{let p,m;typeof s=="string"?p=m=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=m=s:(p=s.scalar,m=s.vector);let g=se("outputData",h,r.length,4),y=Y("aData",u,t.length,4),_=Y("bData",l,n.length,4),$;if(i)if(a){let x=q.size(t)===1,M=q.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;x||M?$=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(o||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||T?_.getByOffset("offsetB / 4u"):`${_.type.value}(${_.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),_.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,S,T="")=>{let k=`aData[indexA${S}][componentA${S}]`,E=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${M}[${S}] = ${T}(${p(k,E)});
          `};h===9?$=`
            var data = vec4<u32>(0);
            ${x("data",0,"u32")}
            ${x("data",1,"u32")}
            ${x("data",2,"u32")}
            ${x("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${x("outputData[global_idx]",0)}
            ${x("outputData[global_idx]",1)}
            ${x("outputData[global_idx]",2)}
            ${x("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,_,g)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Cc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(s,u),h=s,d=q.size(s),p=!1,m=!1,g=[l];if(l){let y=Bn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),d=q.size(h);let _=q.size(s)===1,$=q.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;g.push(_),g.push($),g.push(x),g.push(M);let S=1;for(let T=1;T<h.length;T++){let k=s[s.length-T],E=u[u.length-T];if(k===E)S*=k;else break}S%4===0?(m=!0,p=!0):(_||$||x||M)&&(p=!0)}else p=!0;return g.push(p),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>kc(y,s,u,h,p,l,m,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(h)/4)},...ce(s,u,h)]})}},xt=(e,t,n,r,i,a)=>{e.compute(Cc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Ac=e=>{xt(e,"Add",(t,n)=>`${t}+${n}`)},Rc=e=>{xt(e,"Div",(t,n)=>`${t}/${n}`)},Oc=e=>{xt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},zc=e=>{xt(e,"Mul",(t,n)=>`${t}*${n}`)},Nc=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;xt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Bc=e=>{xt(e,"Sub",(t,n)=>`${t}-${n}`)},Pc=e=>{xt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Dc=e=>{xt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Uc=e=>{xt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Lc=e=>{xt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Fc,Gc,Wc,qc,Vc,Hc,F0=ee(()=>{me(),ye(),Ye(),_e(),Fc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Gc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Wc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},qc=(e,t,n,r)=>{let i=q.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=Y(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...ce(e[y].dims));h.push(...ce(n));let d=se("output",r,n.length),p=d.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let _=0;_<e.length;_++)y.registerUniform(`sizeInConcatAxis${_}`,"u32");return y.declareVariables(...o,d)})()}

  ${Gc(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Wc(o,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:g}},Vc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);Fc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>q.size(s.dims)>0);e.compute(qc(o,i,a,n[0].dataType),{inputs:o})},Hc=e=>Ae({axis:e.axis})}),$n,xn,vn,da,Sn=ee(()=>{me(),ye(),$n=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},xn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},vn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},da=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[mu,gu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,jc,ha=ee(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},jc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Kc,G0=ee(()=>{Kc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ar,pa,fa=ee(()=>{me(),ye(),_e(),Sn(),ar=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${ue(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,ue(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},pa=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],d=Ve(l),p=Ve(h),m=Ve(u),g=q.size(n)/d/m,y=e.length>2,_=r?r.slice(0,-2):n.slice(0,-2),$=[q.size(_),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:h}];xn(t,x),x.push(...ce(_,o,s)),y&&x.push(...ce(e[2].dims)),x.push(...ce($));let M=S=>{let T=ea("batch_dims",e[0].dataType,_.length),k=Y("a",e[0].dataType,o.length,p),E=Y("b",e[1].dataType,s.length,d),v=se("output",e[0].dataType,$.length,d),C=Ze(v.type.tensor),N=$n(t,v.type.value,C),V=[k,E],L="";if(y){let G=i?d:1;V.push(Y("bias",e[2].dataType,e[2].dims.length,G)),L=`${i?`value += bias[col / ${G}];`:`value += ${v.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];vn(t,H);let R=()=>{let G=`var a_data: ${k.type.value};`;for(let O=0;O<p;O++)G+=`
              let b_data${O} = b[(b_offset + (k + ${O}) * uniforms.N + col) / ${d}];`;for(let O=0;O<m;O++){G+=`a_data = a[(a_offset + (row + ${O}) * uniforms.K + k) / ${p}];`;for(let P=0;P<p;P++)G+=`
            values[${O}] = fma(${E.type.value}(a_data${p===1?"":`[${P}]`}), b_data${P}, values[${O}]);
`}return G};return`
  ${S.registerUniforms(H).registerInternalVariables(T).declareVariables(...V,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${ar("a_indices",k,k.rank-2,T.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${ar("b_indices",E,E.rank-2,T.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${R()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${L}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:M}}}),Yc,Xc,ma,ga,Zc,ya,Qc,Fr,wa=ee(()=>{me(),ye(),_e(),Sn(),fa(),ha(),Yc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Xc=(e,t)=>e?`
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
        }`,ma=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,d=i?a:u,p=h/t[0],m=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${h/p}>, ${d}>;
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
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Yc(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
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

          ${Xc(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ga=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Zc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ya=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],d=i?l:a,p=i?a:l;if(!(p%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=p/t[1],g=d/t[0],y=a/t[1],_=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${ga(i,r)}
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

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ga(i,r)}
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
      ${Zc(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${p}>;
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
    ${_}
  }
`},Qc=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ze(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${ar("aIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${ar("bIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Je(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Je(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Fr=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),d=q.size(h),p=o[o.length-2],m=o[o.length-1],g=s[s.length-1],y=m%4===0&&g%4===0,_=p<=8?[4,1,1]:[4,4,1],$=[8,8,1],x=[Math.ceil(g/$[0]/_[0]),Math.ceil(p/$[1]/_[1]),Math.ceil(d/$[2]/_[2])],M=y?4:1,S=[...u,p,m/M],T=S.length,k=[...l,m,g/M],E=k.length,v=[d,p,g/M],C=[{type:6,data:p},{type:6,data:g},{type:6,data:m}];xn(t,C),C.push(...ce(h,S,k));let N=["rank","rank"],V=e.length>2;V&&(C.push(...ce(e[2].dims)),N.push("rank")),C.push(...ce(v));let L=H=>{let R=h.length,G=ea("batchDims",e[0].dataType,R,1),O=Ze(e[0].dataType),P=Y("a",e[0].dataType,T,M),X=Y("b",e[1].dataType,E,M),z=se("result",e[0].dataType,v.length,M),Q=[P,X];if(V){let ne=i?M:1;Q.push(Y("bias",e[2].dataType,e[2].dims.length,ne))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];vn(t,D);let j=Ze(z.type.tensor),F=$n(t,z.type.value,j),W=Qc(M,V,F,[G,P,X,z],i);return`
  ${H.registerUniforms(D).registerInternalVariables(G).declareVariables(...Q,z)}
  ${W}
  ${y?ma(_,$,O,G):ya(_,$,O,G)}
                   `};return{name:"MatMul",shaderCache:{hint:`${_};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:C}),getShaderSource:L}}}),Jc,ed,W0=ee(()=>{me(),Lt(),_e(),Sn(),ha(),G0(),wa(),Jc=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},d=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},p=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=e?"row":"col",$=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${_} / outWidth;
    let outCol = ${_} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Je(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
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
    return ${Je(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${Je(o,l)}(0.0);`,S=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Je(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Je(s,l)}(0.0);`,T=Je(u,l),k=Je(e?o:s,l),E=Je(e?s:o,l),v=$n(a,T,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?M:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${jc(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ed=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&g%4===0,_=l?g:p*m,$=l?p*m:g,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(_/x[0]/M[0]),Math.ceil($/x[1]/M[1]),Math.ceil(d/x[2]/M[2])];Me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let T=y?l&&h%4!==0?3:4:1,k=x[1]*M[1],E=x[0]*M[0],v=Math.max(x[0]*T,x[1]),C=r%k===0,N=i%E===0,V=a%v===0,L=y?[T,4,4]:[1,1,1],H=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];xn(t,H),H.push(...ce(e[0].dims,e[1].dims));let R=["rank","rank"];o&&(H.push(...ce(e[2].dims)),R.push("rank")),H.push(...ce(n));let G=O=>{let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];vn(t,P);let X=y?4:1,z=Ze(e[0].dataType),Q=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${z}>`:z}) {
        result[flatIndex] = ${y?`vec4<${z}>`:z}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${z}>`:z}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,D=Y("x",e[0].dataType,e[0].dims.length,T===3?1:T),j=Y("w",e[1].dataType,e[1].dims.length,X),F=[D,j],W=se("result",e[0].dataType,n.length,X);if(o){let ne=Y("bias",e[2].dataType,e[2].dims.length,X);F.push(ne),Q+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${z}>`:z} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Kc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${O.registerUniforms(P).declareVariables(...F,W)}
        ${Q}
        ${Jc(l,C,N,V,o,t,L[0],L[1],L[2],z)}
        ${y?ma(M,x,z,void 0,!l,v):ya(M,x,z,void 0,!l,v,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${C};${N};${V};${k};${E};${v}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:H}),getShaderSource:G}}}),td,_a,or,nd,ba,rd,id,ad,q0=ee(()=>{me(),Lt(),ye(),_e(),Sn(),ha(),td=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},_a=e=>typeof e=="number"?[e,e,e]:e,or=(e,t)=>t<=1?e:e+(e-1)*(t-1),nd=(e,t,n,r=1)=>{let i=or(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},ba=(e,t,n,r,i)=>{i==null&&(i=nd(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},rd=(e,t,n,r,i,a,o,s,u,l)=>{let h,d,p,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=ba([t,n,r,1],[s,u,l],1,[i,a,o],e);d=g[0],p=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,_,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=ba([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);d=g[0],p=g[1],m=g[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let g=(d-1)*i+s-t,y=(p-1)*a+u-n,_=(m-1)*o+l-r,$=Math.floor(g/2),x=g-$,M=Math.floor(y/2),S=y-M,T=Math.floor(_/2),k=_-T;h={top:M,bottom:S,left:T,right:k,front:$,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:m}},id=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,d;if(o==="channelsLast")[s,u,l,h,d]=e;else if(o==="channelsFirst")[s,d,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,m,g,y]=t,[_,$,x]=_a(n),[M,S,T]=_a(r),k=or(m,M),E=or(g,S),v=or(y,T),{padInfo:C,outDepth:N,outHeight:V,outWidth:L}=rd(i,u,l,h,_,$,x,k,E,v),H=a?p*d:p,R=[0,0,0,0,0];return o==="channelsFirst"?R=[s,H,N,V,L]:o==="channelsLast"&&(R=[s,N,V,L,H]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:d,outDepth:N,outHeight:V,outWidth:L,outChannels:H,padInfo:C,strideDepth:_,strideHeight:$,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:k,effectiveFilterHeight:E,effectiveFilterWidth:v,dilationDepth:M,dilationHeight:S,dilationWidth:T,inShape:e,outShape:R,filterShape:t}},ad=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((_,$)=>$)},l=[Math.ceil(td(u.x.map(_=>n[_]))/s[0]),1,1];Me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,d=q.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];xn(t,p),p.push(...ce(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(p.push(...ce(e[2].dims)),m.push("rank")),p.push(...ce(n));let y=_=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];vn(t,$);let x=1,M=Ze(e[0].dataType),S=Y("x",e[0].dataType,e[0].dims.length,h),T=Y("W",e[1].dataType,e[1].dims.length,x),k=[S,T],E=se("result",e[0].dataType,n.length,x),v="";if(g){let V=Y("bias",e[2].dataType,e[2].dims.length,x);k.push(V),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?ue("coords",4,5):ue("coords",1,5)}];
        }`}let C=Je(h,M),N=$n(t,C,M);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${_.registerUniforms($).declareVariables(...k,E)}
          ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${ue("coords",0,S.rank)};
              let d2 = ${o?ue("coords",S.rank-1,S.rank):ue("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${o?ue("coords",1,S.rank):ue("coords",2,S.rank)},
              ${o?ue("coords",2,S.rank):ue("coords",3,S.rank)},
              ${o?ue("coords",3,S.rank):ue("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?ue("uniforms.x_shape",1,S.rank):ue("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${o?ue("uniforms.x_shape",2,S.rank):ue("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${o?ue("uniforms.x_shape",3,S.rank):ue("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${o?ue("uniforms.x_shape",4,S.rank):ue("uniforms.x_shape",1,S.rank)};
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
              ${g?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),od,sd,V0=ee(()=>{me(),ye(),_e(),Sn(),od=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,d=u&&h>=4?Ve(l):1,p=q.size(n)/d,m=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];xn(t,m),m.push(...ce(o,[s[0],s[1],s[2],s[3]/d]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ce([n[0],n[1],n[2],n[3]/d]));let y=_=>{let $=se("output",e[0].dataType,n.length,d),x=Ze($.type.tensor),M=$n(t,$.type.value,x),S=Y("x",e[0].dataType,o.length),T=Y("w",e[1].dataType,s.length,d),k=[S,T];i&&k.push(Y("b",e[2].dataType,e[2].dims,d));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];vn(t,E);let v=u?`
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

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${_.registerUniforms(E).declareVariables(...k,$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${v}
    ${a}
    ${M}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},sd=(e,t,n,r)=>{let i=e.length>2,a=Ve(n[3]),o=Ve(n[2]),s=q.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];xn(t,d),d.push(...ce(u,l,h));let p=(o-1)*t.strides[1]+l[1],m=g=>{let y=se("output",e[0].dataType,h.length,a),_=Ze(y.type.tensor),$=$n(t,y.type.value,_),x=Y("x",e[0].dataType,u.length,a),M=Y("w",e[1].dataType,l.length,a),S=[x,M];i&&S.push(Y("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return vn(t,k),`
  ${g.registerUniforms(k).declareVariables(...S,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      ${$}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:m}}}),ud,Gr,ld,Wr,$a,xa,cd,dd,va,H0=ee(()=>{ye(),W0(),q0(),wa(),V0(),Sn(),fa(),Zt(),ud=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,m)=>p+(p-1)*(n[m]-1)),d=s.map((p,m)=>p+r[m]+r[m+u]).map((p,m)=>Math.floor((p-h[m]+i[m])/i[m]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},Gr=[2,3,1,0],ld=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Wr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();zr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},$a=e=>{let t=da(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},xa=(e,t,n,r)=>{let i=n.format==="NHWC",a=ud(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let E=e.kernelCustomData.wT??e.compute(lt(t[1],Gr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),k.push(E)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(sd(k,n,a,r),{inputs:k}):e.compute(od(k,n,a,r),{inputs:k});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],d=t[1].dims[3],p=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&h===s&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=a[0],E,v,C,N=[];if(i){let H=e.kernelCustomData.wT??e.compute(lt(t[1],Gr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),y){let R=s*u*l;E=t[0].reshape([1,k,R]),v=H.reshape([1,R,g]),C=[1,k,g]}else E=t[0].reshape([k,s*u,l]),v=H.reshape([1,l,g]),C=[k,p*m,g];N.push(E),N.push(v)}else E=t[0].reshape([k,l,s*u]),v=t[1].reshape([1,g,l]),C=[k,g,p*m],N.push(v),N.push(E);o&&N.push(t[2]);let V=C[2],L=N[0].dims[N[0].dims.length-1];V<8&&L<8?e.compute(pa(N,n,a,C,i,r),{inputs:N}):e.compute(Fr(N,n,a,C,i,r),{inputs:N});return}let _=!0,$=e.kernelCustomData.wT??e.compute(lt(t[1],Gr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let x=[t[0],$];o&&x.push(t[2]);let M=i?p*m:g,S=i?g:p*m,T=h*d*l;e.compute(ed(x,n,a,M,S,T,o,_,r),{inputs:x})},cd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=Wr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);xa(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},dd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Wr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=id(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(ad(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},va=(e,t)=>{if(ld(e.inputs,t),e.inputs[0].dims.length===3)cd(e,t);else if(e.inputs[0].dims.length===5)dd(e,e.inputs,t);else{let n=Wr(t,e.inputs);xa(e,e.inputs,n)}}}),hd,j0=ee(()=>{me(),Lt(),ye(),_e(),hd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?Ve(u):1,d=a&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-p,g=a?Ve(l):1,y=a?l===1?h:g:1,_=q.size(i)/g,$=[Math.ceil(_/64),1,1];Me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],k=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],E=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:_},{type:12,data:M},{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:6,data:E},{type:12,data:p},{type:12,data:u},{type:12,data:l},...ce(e[0].dims,e[1].dims)];r&&(v.push(...ce(e[2].dims)),x.push("rank")),v.push(...ce(i));let C=N=>{let V=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:E.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Ze(e[0].dataType),H=a?1:2,R=a?2:3,G=a?3:1,O=Y("W",e[1].dataType,e[1].dims.length,y),P=Y("Dy",e[0].dataType,e[0].dims.length,h),X=[P,O];r&&X.push(Y("bias",e[2].dataType,[i[G]].length,g));let z=se("result",e[0].dataType,i.length,g),Q=()=>{let F="";if(d)h===4?F+=`
        let xValue = ${P.getByOffset("x_offset")};
        let wValue = ${O.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?F+=`
          dotProd = dotProd + dot(vec4<${L}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}), vec4<${L}>(${O.getByOffset("w_offset")}, ${O.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(F+=`
          dotProd = dotProd + dot(vec4<${L}>(${P.getByOffset("x_offset")}, ${P.getByOffset("x_offset + 1u")}, ${P.getByOffset("x_offset + 2u")}, ${P.getByOffset("x_offset + 3u")}), vec4<${L}>(${O.getByOffset("w_offset")}, ${O.getByOffset("w_offset + 1u")}, ${O.getByOffset("w_offset + 2u")}, ${O.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(F+=`
                  let xValue = ${a?P.getByOffset(`${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):P.get("batch","inputChannel","idyR","idyC")};
        `,h===1)F+=`
          let w_offset = ${O.indicesToOffset(`${O.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${O.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let W=0;W<h;W++)F+=`
            let wValue${W} = ${O.getByOffset(`${O.indicesToOffset(`${O.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${W}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${W}] * wValue${W};`;return F},D=()=>{if(m===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let F="";if(h===1){F+="dotProd = dotProd";for(let W=0;W<m;W++)F+=`
            + ${P.getByOffset(`x_offset + ${W}`)} * ${O.getByOffset(`w_offset + ${W}`)}`;F+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);F+=`
          let xValue = ${P.getByOffset("x_offset")};
          let wValue = ${O.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return F},j=`
            let outputIndices = ${z.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${z.indicesGet("outputIndices",0)};
            let d1 = ${z.indicesGet("outputIndices",G)};
            let r = ${z.indicesGet("outputIndices",H)};
            let c = ${z.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${z.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${L}(dyCCorner) + ${L}(wC)) / ${L}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${P.indicesToOffset(`${P.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${O.indicesToOffset(`${O.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:h}) {
                  ${Q()}
                  inputChannel = inputChannel + ${d?4:h};
                }
                ${D()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${z.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(V).declareVariables(...X,z)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${j}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${g}${d}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:C}}}),pd,fd,md,Sa,gd,yd,Ma,wd,_d,K0=ee(()=>{j0(),Sn(),Zt(),pd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,fd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},md=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,d=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],m=t[s?3:1]*i;for(let g=0,y=e.length-h-(s?1:0);g<h;++g,++y){let _=e[y],$=d?_*o[g]:l[g],x=pd(_,o[g],a[g],t[y],n[g],$);fd(x,r,a,g,g+h),d&&l.push(o[g]*(_-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+h])}l.splice(0,0,p),l.splice(s?3:1,0,m)},Sa=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}md(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},gd=e=>{let t=da(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:d,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},yd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ma=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(lt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(hd(a,n,r),{inputs:a})},wd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Sa({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Ma(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},_d=(e,t)=>{if(yd(e.inputs,t),e.inputs[0].dims.length===3)wd(e,t);else{let n=Sa(t,e.inputs);Ma(e,e.inputs,n)}}}),bd,$d,xd,Y0=ee(()=>{me(),ye(),Ye(),_e(),bd=(e,t,n,r)=>{let i=q.size(t),a=t.length,o=Y("input",e,a),s=se("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,a),h=d=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,m=ue("uniforms.input_shape","uniforms.axis",a),g=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?m:p+(r.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ce(t,t)]}),getShaderSource:h}},$d=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(bd(r,n,i,t),{inputs:[0]})},xd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Ae({exclusive:t,reverse:n})}}),vd,Sd,Md,Td,Id,X0=ee(()=>{me(),ye(),Ye(),_e(),vd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Sd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Md=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),p=d.dims.length,m=e.dataType,g=Y("a",m,p),y=se("output",m,p),_=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Sd(s,p,g,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=q.size(x),S=d.dims,T=q.sortBasedOnPerm(S,s);return{outputs:[{dims:x,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...ce(S,T)]}},getShaderSource:_}},Td=(e,t)=>{vd(e.inputs),e.compute(Md(e.inputs[0],t))},Id=e=>Ae({blocksize:e.blocksize,mode:e.mode,format:e.format})}),qr,sr,Ta,Ed,kd,Cd,Ad,Ia,Rd,Od,zd,Z0=ee(()=>{me(),ye(),Ye(),_e(),qr="[a-zA-Z]|\\.\\.\\.",sr="("+qr+")+",Ta="^"+sr+"$",Ed="("+sr+",)*"+sr,kd="^"+Ed+"$",Cd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Ad=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(kd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Ta)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(sr)))throw new Error("Invalid RHS");(i=r.match(RegExp(qr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Ta))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(qr,"g")),l=new Cd(r);return u==null||u.forEach((h,d)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<o.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,d+m),this.addSymbol(g,n[s++],r)}}else l.addSymbol(h,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},Ia=e=>e+"_max",Rd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>Y(`input${h}`,t,l)),a=q.size(r),o=se("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],d="var prod = 1.0;",p="var sum = 0.0;",m="sum += prod;",g=[],y=[],_=[],$=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,T)=>{var k;if(n.rhs.symbolToIndices.has(T)){let E=(k=n.rhs.symbolToIndices.get(T))==null?void 0:k[0];E!==void 0&&n.lhs.forEach((v,C)=>{if(S.inputIndices.includes(C)){let N=v.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(V=>{h.push(`${i[C].indicesSet(`input${C}Indices`,V,o.indicesGet("outputIndices",E))}`)})}})}else n.lhs.forEach((E,v)=>{if(S.inputIndices.includes(v)){let C=E.symbolToIndices.get(T);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${T}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Ia(T)}; ${T}++) {`),_.push("}")});let M=x?[...h,`let sum = ${i.map((S,T)=>S.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...h,p,...y,...g,d,...$,m,..._];return`
            ${l.registerUniforms(s.map(S=>({name:`${Ia(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((S,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((d,p)=>[...ce(d)]).reduce((d,p)=>d.concat(p),l);return h.push(...ce(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Od=(e,t)=>{let n=new Ad(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Rd(i,e.inputs[0].dataType,n,r))},zd=e=>{let t=e.equation.replace(/\s+/g,"");return Ae({equation:t})}}),Nd,Ea,Bd,Pd,Dd,Q0=ee(()=>{me(),ye(),_e(),Nd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ea=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Bd=(e,t)=>e.length>t.length?Ea(e,t):Ea(t,e),Pd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Bd(t,n),i=e[0].dataType,a=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/s),l=d=>{let p=Y("input",i,t.length,o),m=se("output",i,r.length,s),g;if(i===9){let y=(_,$,x="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${p.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${_}[${$}] = ${x}(${p.getByOffset(`index${$}`)}[component${$}]);
        `;g=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${p.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${p.getByOffset(`inputOffset / ${o}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(p,m)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},h=[{type:12,data:u},...ce(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Dd=e=>{Nd(e.inputs),e.compute(Pd(e.inputs),{inputs:[0]})}}),Ud,Ld,J0=ee(()=>{me(),ye(),_e(),ca(),Ud=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,a=o=>{let s=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=se("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${ua(nt(t))}

    ${o.mainStart(Pn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",la("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Pn/4)}})}},Ld=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?bc(e):e.compute(Ud(e.inputs))}}),Fd,Gd,Wd,qd,ey=ee(()=>{me(),ye(),Ye(),_e(),Fd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Gd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...ce(e[0].dims,e[1].dims,o)],d=p=>{let m=Y("data",e[0].dataType,e[0].dims.length,u),g=Y("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,o.length,u),_=x=>{let M=r.length,S=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let T=0;T<M;T++)S+=`${M>1?`indicesIndices${x}[${T}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${T}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let T=0,k=0;T<i;T++)T===a?(S+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = u32(idx${x});`,k+=M):(S+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${k}]`:`outputIndices${x}`};`,k++);return S},$;if(e[0].dataType===9){let x=(M,S,T="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${_(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${M}[${S}] = ${T}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;$=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${x("value",0,"u32")}
        ${x("value",1,"u32")}
        ${x("value",2,"u32")}
        ${x("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${_("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:d}},Wd=e=>Ae({axis:e.axis}),qd=(e,t)=>{let n=e.inputs;Fd(n),e.compute(Gd(e.inputs,t))}}),Vd,Hd,jd,ty=ee(()=>{me(),ye(),_e(),Vd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...ce(t.dims,h));let d=p=>{let m=Y("indices_data",t.dataType,t.dims.length),g=se("input_slice_offsets_data",12,1,1),y=[m,g],_=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(...y)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},Hd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=q.sizeToDimension(a,a.length-1),u=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),h=q.sizeFromDimension(r,t.batchDims),d=s/l,p=new Array(o),m=u;for(let S=0;S<o;++S)p[o-1-S]=m,m*=r[t.batchDims+o-1-S];let g=Vd(e,n[1],p,t.batchDims,r,s,d,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let _=a.slice(0,-1).concat(r.slice(y)),$=q.size(_),x=[{type:12,data:$},{type:12,data:u},...ce(n[0].dims,g.dims,_)],M=S=>{let T=Y("data",n[0].dataType,n[0].dims.length),k=Y("slice_offsets",12,g.dims.length),E=se("output",n[0].dataType,_.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,k,E)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:_,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],g]})},jd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Kd,Yd,Xd,Zd,ny=ee(()=>{me(),ye(),Ye(),_e(),Kd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Yd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=q.size(s),l=e[2].dataType,h=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...ce(...e.map((m,g)=>m.dims),s)],p=m=>{let g=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),_=Y("scales",e[2].dataType,e[2].dims.length),$=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=se("output",l,s.length),M=[g,y,_];$&&M.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...M,x)}
        ${m.mainStart()}
        let output_indices = ${x.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${x.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${x.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${x.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${nt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},Xd=(e,t)=>{let n=e.inputs;Kd(n,t),e.compute(Yd(e.inputs,t))},Zd=e=>Ae({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Qd,Jd,eh,th,ry=ee(()=>{me(),ye(),Ye(),_e(),Qd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Jd=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=q.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=q.size(l),d=Y("input",r,i),p=Y("indicesInput",o,a.length),m=se("output",r,l.length),g=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return g.push(...ce(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,p,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},eh=e=>Ae({axis:e.axis}),th=(e,t)=>{let n=e.inputs;Qd(n),e.compute(Jd(e.inputs,t))}}),nh,rh,ih,ah,iy=ee(()=>{me(),ye(),_e(),nh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},rh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=fu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),d=!0,p=q.size(s),m=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ce(e[2].dims)),g.push("rank")),m.push(...ce(s));let y=$=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",S=Y("a",e[0].dataType,e[0].dims),T=Y("b",e[1].dataType,e[1].dims),k=S.type.value,E=null,v=[S,T];e.length===3&&(E=Y("c",e[2].dataType,e[2].dims.length),v.push(E));let C=se("output",e[0].dataType,s.length);v.push(C);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(N).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${k}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},_=$=>{let x=Y("a",e[0].dataType,e[0].dims),M=Y("b",e[1].dataType,e[1].dims),S=null,T=[x,M];e.length===3&&(S=Y("c",e[2].dataType,e[2].dims.length),T.push(S));let k=se("output",e[0].dataType,s.length);T.push(k);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",C="";t.transA&&t.transB?(C=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(C=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(C=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(C=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(E).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${k.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${C}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${k.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:m}),getShaderSource:_}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},ih=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ah=(e,t)=>{nh(e.inputs),e.compute(rh(e.inputs,t))}}),kt,Ft,Mn,Tn,oh,sh,uh,lh,ch,dh,hh,ph,fh,mh,ay=ee(()=>{me(),ye(),Ye(),_e(),[kt,Ft,Mn,Tn]=[0,1,2,3],oh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},sh=`
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
`,uh=e=>`
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
`,lh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ch=e=>`
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
`,dh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${kt}] = batch;
     indices[${Ft}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Mn}] = u32(r);
            indices[${Tn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Mn}] = u32(clamp(r, 0, H - 1));
          indices[${Tn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Mn}] = gs_reflect(r, border[1], border[3]);
          indices[${Tn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,hh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${kt}], indices[${Ft}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${kt}], indices[${Ft}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${kt}], indices[${Ft}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${kt}], indices[${Ft}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${kt}], indices[${Ft}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${kt}], indices[${Ft}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ph=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[kt,Ft,Mn,Tn]=[0,3,1,2]);let o=se("output",e[0].dataType,a.length),s=n.type.value,u=q.size(a),l=[{type:12,data:u},...ce(e[0].dims,r,a)],h=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${sh}
  ${uh(s)}
  ${lh(t)}
  ${ch(t)}
  ${dh(n,s,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Mn}]);
      let W_in = i32(uniforms.x_shape[${Tn}]);

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
      var grid_indices = vec3<u32>(indices[${kt}], indices[${Mn}], indices[${Tn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${hh(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=q.size(a);return{outputs:[{dims:a,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},fh=(e,t)=>{oh(e.inputs),e.compute(ph(e.inputs,t))},mh=e=>Ae({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),rt,gh,yh,ka,wh,ur,_h,bh=ee(()=>{me(),ye(),Ye(),Yi(),oa(),_e(),Zt(),rt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,gh=(e,t)=>{let n=e[0],r=rt(e,1),i=rt(e,2),a=rt(e,3),o=rt(e,4),s=rt(e,5),u=rt(e,6),l=rt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=d,g=0,y=0,_=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==_)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==_)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&q.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,M=0;if(o&&q.size(o.dims)>0){M=8;let E=o.dims;throw E.length===1?E[0]===h?M=1:E[0]===3*h+2&&(M=3):E.length===2&&E[0]===h&&E[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,T=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let k=!1;if(o&&q.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:_,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:k,passPastInKv:S,qkvFormat:$}},yh=e=>Ae({...e}),ka=Ae({perm:[0,2,1,3]}),wh=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=q.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=d=>{let p=se("qkv_with_bias",t.dataType,s),m=Y("qkv",t.dataType,s),g=Y("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(m,g,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},ur=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&q.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=wh(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(lt(u,ka.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(lt(u,ka.perm),{inputs:[u],outputs:[-1]})[0]},_h=(e,t)=>{let n=gh(e.inputs,t),r=e.inputs[0],i=rt(e.inputs,1),a=rt(e.inputs,2),o=rt(e.inputs,3),s=rt(e.inputs,4),u=rt(e.inputs,5),l=rt(e.inputs,6),h=rt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&a&&i.dims.length===4&&a.dims.length===4,p=ur(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return rr(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=ur(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),g=ur(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);rr(e,p,m,g,s,void 0,l,h,u,n)}}),$h,xh,vh,Sh,Ca,Mh,Th,Ih=ee(()=>{me(),ye(),Ye(),_e(),$h=e=>{if(!e||e.length<1)throw new Error("too few inputs")},xh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Ae({numOutputs:r,axis:t.axis,splitSizes:n})},vh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ue("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Sh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ca=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,a=q.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],d=0,p=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){d+=t.splitSizes[g],u[g]=d;let y=n.slice();y[a]=t.splitSizes[g],h.push(y),o[g]=se(`output${g}`,i,y.length),l.push({dims:h[g],dataType:e[0].dataType})}p.push({type:12,data:u},...ce(n,...h));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${vh(u.length)}
  ${Sh(o)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ue("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Mh=(e,t)=>{$h(e.inputs);let n=e.inputs.length===1?t:xh(e.inputs,t);e.compute(Ca(e.inputs,n),{inputs:[0]})},Th=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Ae({axis:t,numOutputs:r,splitSizes:n})}}),Eh,Vr,kh,Ch=ee(()=>{me(),ye(),Ye(),_e(),Eh=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!q.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],d=q.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:d/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Vr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],d=i===0?h*2:l/r,p=new Array(o,u,l/d,d-h),m=q.computeStrides(p),g=[{type:1,data:a},{type:12,data:p},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,d,u*d,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=_=>{let $=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),M=Y("cos_cache",e[2].dataType,e[2].dims.length),S=Y("sin_cache",e[3].dataType,e[3].dims.length),T=se("output",e[0].dataType,e[0].dims.length);return _.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${_.declareVariables($,x,M,S,T)}

        ${_.mainStart(Pn)}
          let half_rotary_emb_dim = uniforms.${M.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",se("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ae({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/Pn)},programUniforms:g})}},kh=(e,t)=>{Eh(e.inputs,t),e.compute(Vr(e.inputs,t))}}),Ah,Rh,Aa,Oh,zh,oy=ee(()=>{Ye(),me(),oa(),bh(),Ih(),Zt(),Ch(),_e(),Ah=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,m=!r||r.dims.length===0,g=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=g*t.numHeads);let y=a&&a.dims.length!==0,_=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&_){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||_)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let x=0,M=!1,S=t.kvNumHeads?g*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],M=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=T.dims.reduce((E,v)=>E*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let E=0;E<T.dims.length;E++)if(T.dims[E]!==1&&T.dims[E]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${E}] = ${T.dims[E]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:$}},Rh=Ae({perm:[0,2,1,3]}),Aa=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(lt(r,Rh.perm),{inputs:[r],outputs:[-1]})[0]),r},Oh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let d=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),m=se("pos_ids",i,o),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(g).declareVariables(d,p,m)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${p.getByOffset("0")});
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
      ${m.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${m.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${m.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},zh=(e,t)=>{var S;let n=Ah(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Ae({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,m,g]=!i&&!a?e.compute(Ca([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,_;if(t.doRotary){let T=e.compute(Oh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],k=e.inputs[7],E=e.inputs[8],v=Ae({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[p,T,k,E],N=[-1];y=e.compute(Vr(C,v),{inputs:C,outputs:N})[0],C.splice(0,1,m);let V=Ae({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});_=e.compute(Vr(C,V),{inputs:C,outputs:N})[0]}let $=ur(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Aa(e,t.doRotary?_:m,n),M=Aa(e,g,n);rr(e,$,x,M,void 0,void 0,o,s,void 0,n,u,l)}}),Ra,Nh,Bh,Ph,sy=ee(()=>{me(),ye(),Zt(),_e(),Ra=(e,t,n,r,i,a,o,s)=>{let u=Ve(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,d=i*o,p=64;d===1&&(p=256);let m=[i,o,a/u],g=[i,o,2],y=["rank","type","type"],_=[];_.push(...ce(m,g));let $=x=>{let M=Y("x",t.dataType,3,u),S=Y("scale",n.dataType,n.dims),T=Y("bias",r.dataType,r.dims),k=se("output",1,3,2),E=[M,S,T,k];return`
  var<workgroup> workgroup_shared : array<${h}, ${p}>;
  const workgroup_size = ${p}u;
  ${x.declareVariables(...E)}
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
      let sum_final = ${Xt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Xt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:d},programUniforms:_}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Nh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=q.sizeFromDimension(r,a),l=Ve(u),h=q.size(i)/l,d=Ra(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],m=[o,s],g=["type","none"],y=_=>{let $=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,m.length,2),M=se("output",t[0].dataType,p.length,l),S=[$,x,M];return`
  ${_.registerUniform("output_size","u32").declareVariables(...S)}
  ${_.mainStart()}
  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ce(p,m,p)]}),getShaderSource:y},{inputs:[t[0],d]})},Bh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=q.sizeFromDimension(r,1)/o,u=Ve(o),l=q.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],d=["type","type"],p=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)p=p||r[$+1]!==1,m.push($+1);p=p&&r[r.length-1]!==1;let g=p?e.compute(lt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,x)=>r[m[x]])),y=Ra(e,g,t[1],t[2],a,s,o,n.epsilon),_=$=>{let x=Ze(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,S=E=>{let v=E===0?"x":"y",C=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${C}(scale.${v}))`;case 2:return`vec2<${x}>(${C}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${C}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=Y("input",t[0].dataType,t[0].dims,u),k=se("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:_},{inputs:[t[0],y]})},Ph=(e,t)=>{t.format==="NHWC"?Bh(e,e.inputs,t):Nh(e,e.inputs,t)}}),Dh,Uh,Lh,uy=ee(()=>{me(),ye(),_e(),Dh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Uh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),h=q.sizeFromDimension(i,u),d=q.size(a.dims),p=o?q.size(o.dims):0;if(d!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let m=[];for(let T=0;T<i.length;++T)T<u?m.push(i[T]):m.push(1);let g=Ve(h),y=["type","type"],_=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/g)},{type:1,data:t.epsilon}];o&&y.push("type");let $=n>1,x=n>2,M=T=>{let k=Ze(e[0].dataType),E=[Y("x",e[0].dataType,e[0].dims,g),Y("scale",a.dataType,a.dims,g)];o&&E.push(Y("bias",o.dataType,o.dims,g)),E.push(se("output",e[0].dataType,s,g)),$&&E.push(se("mean_data_output",1,m)),x&&E.push(se("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(v).declareVariables(...E)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ji("f32",g)};
    var mean_square_vector = ${Ji("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Dn(k,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Xt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Xt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Dn(k,g,"x[j + offset]")};
      let f32scale = ${Dn(k,g,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Dn(k,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:s,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),x&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:_}),getShaderSource:M}},Lh=(e,t)=>{Dh(e.inputs),e.compute(Uh(e.inputs,t,e.outputCount))}}),Fh,Gh,ly=ee(()=>{ye(),fa(),wa(),Fh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Gh=e=>{Fh(e.inputs);let t=Bn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(pa(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(Fr(h,{activation:""},t,l),{inputs:h})}else e.compute(Fr(e.inputs,{activation:""},t))}}}),Wh,qh,Vh,Hh,jh,cy=ee(()=>{me(),ye(),Ye(),_e(),Wh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(q.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},qh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,d=Ve(t.k),p=Ve(l),m=Ve(o),g=s.concat([i,o]),y=i>1&&o/m%2===0?2:1,_=q.size(g)/m/y,$=64,x=[],M=[u,i,a/d],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),x.push(...ce(M)),x.push(...ce(S)),x.push(...ce(e[2].dims)),e.length===4&&x.push(...ce(q.convertShape(e[3].dims)));let T=[u,i,o/m];x.push(...ce(T));let k=E=>{let v=M.length,C=Y("a",e[0].dataType,v,d),N=Y("b",12,S.length,p),V=Y("scales",e[2].dataType,e[2].dims.length),L=[C,N,V],H=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;H&&L.push(H);let R=T.length,G=se("output",e[0].dataType,R,m),O=Ze(e[0].dataType),P=(()=>{switch(d){case 1:return`array<${O}, 8>`;case 2:return`mat4x2<${O}>`;case 4:return`mat2x4<${O}>`;default:throw new Error(`${d}-component is not supported.`)}})(),X=Math.floor(32/t.bits),z=Math.floor(X/8),Q=()=>{let F="";for(let W=0;W<z;W++){let ne=W*t.bits*4,he=ne+t.bits;F+=`
          // reuse a data (pass ${W})
            var input_offset${W>0?W:""} = ${W===0?C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${W>0?W:""}: ${P};
            for (var j${W>0?W:""}: u32 = 0; j${W>0?W:""} < ${8/d}; j${W>0?W:""}++) {
              a_data${W>0?W:""}[j${W>0?W:""}] = ${C.getByOffset(`input_offset${W>0?W:""}`)};
              input_offset${W>0?W:""}++;
            }
          `;for(let ae=0;ae<m*y;ae++)F+=`
            b_value = ${p===1?`b${ae}_data`:`b${ae}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${W*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ne}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${he}u) & b_mask);`}
            b_quantized_values = ${P}(${Array.from({length:4},(xe,Re)=>`${O}(b_value_lower[${Re}]), ${O}(b_value_upper[${Re}])`).join(", ")});
            b_dequantized_values = ${d===1?`${P}(${Array.from({length:8},(xe,Re)=>`(b_quantized_values[${Re}] - ${H?`zero_point${ae}`:"zero_point"}) * scale${ae}`).join(", ")});`:`(b_quantized_values - ${P}(${Array(8).fill(`${H?`zero_point${ae}`:"zero_point"}`).join(",")})) * scale${ae};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ae/m)}]${m>1?`[${ae%m}]`:""} += ${Array.from({length:8/d},(xe,Re)=>`${d===1?`a_data${W>0?W:""}[${Re}] * b_dequantized_values[${Re}]`:`dot(a_data${W>0?W:""}[${Re}], b_dequantized_values[${Re}])`}`).join(" + ")};
          `}return F},D=()=>{let F=`
            var col_index = col * ${m};
            ${H?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${O}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let W=0;W<m*y;W++)F+=`
            let scale${W} = ${V.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${O}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return F},j=()=>{let F=`col_index = col * ${m};`;for(let W=0;W<m*y;W++)F+=`
            let b${W}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return F+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${P};
            var b_dequantized_values: ${P};`,F};return`
        var<workgroup> workgroup_shared: array<${G.type.value}, ${y*$}>;
        ${E.declareVariables(...L,G)}
        ${E.mainStart([$,1,1])}
          let output_indices = ${G.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${D()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${j()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${Q()}
                word_offset += ${X/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${G.type.value} = ${G.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${G.setByIndices(`${G.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:_},programUniforms:x}),getShaderSource:k}},Vh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,h=e[0].dataType,d=Ve(t.k),p=Ve(l),m=s.concat([i,o]),g=128,y=o%8===0?8:o%4===0?4:1,_=g/y,$=Math.floor(32/t.bits),x=_*p*$,M=x/d,S=x/t.blockSize,T=q.size(m)/y,k=[],E=[u,i,a/d],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),k.push(...ce(E)),k.push(...ce(v)),k.push(...ce(e[2].dims)),e.length===4&&k.push(...ce(q.convertShape(e[3].dims)));let C=[u,i,o];k.push(...ce(C));let N=V=>{let L=E.length,H=Y("a",e[0].dataType,L,d),R=Y("b",12,v.length,p),G=Y("scales",e[2].dataType,e[2].dims.length),O=[H,R,G],P=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;P&&O.push(P);let X=C.length,z=se("output",e[0].dataType,X),Q=Ze(e[0].dataType),D=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${Q}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Q}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Q}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Q}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${z.type.value}, ${_}>, ${y}>;
        ${V.declareVariables(...O,z)}
        ${V.mainStart([_,y,1])}
          let output_indices = ${z.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${M};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${M}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${H.getByIndices(`${H.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${H.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${P?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${P.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Q}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Q}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${G.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let j=Math.floor($/8),F="";for(let W=0;W<j;W++){let ne=W*t.bits*4,he=ne+t.bits;F+=`
              ${D()}
              {${t.bits===2?`
                let half_word = b_value >> ${W*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${he}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Q}>(${Array.from({length:4},(ae,xe)=>`${Q}(b_value_lower[${xe}]), ${Q}(b_value_upper[${xe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Q}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ae,xe)=>`${`dot(a_data${xe}, b_dequantized_values[${xe}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return F})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${z.type.value} = ${z.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${z.setByIndices(`${z.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${_};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:T},programUniforms:k}),getShaderSource:N}},Hh=(e,t)=>{Wh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vh(e.inputs,t)):e.compute(qh(e.inputs,t))},jh=e=>Ae(e)}),Kh,Yh,Xh,Zh,Qh,Jh,ep,tp,np,dy=ee(()=>{me(),ye(),_e(),Kh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Yh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ue("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Xh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ue("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ue("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Zh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
                  k = i32(${ue("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Qh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ue("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ue("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ue("uniforms.x_shape",i,t)})) {
                  k -= i32(${ue("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ue("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Jh=(e,t,n)=>{switch(n.mode){case 0:return Yh(e,t,n.pads.length);case 1:return Xh(e,t,n.pads.length);case 2:return Zh(e,t,n.pads.length);case 3:return Qh(e,t,n.pads.length);default:throw new Error("Invalid mode")}},ep=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...ce(e[0].dims,n));let s=["rank"],u=l=>{let h=se("output",e[0].dataType,n.length),d=Y("x",e[0].dataType,r.length),p=d.type.value,m=Jh(h,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(g).declareVariables(d,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:a}),getShaderSource:u}},tp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},np=(e,t)=>{Kh(e.inputs);let n=tp(e.inputs,t);e.compute(ep(e.inputs,n),{inputs:[0]})}}),lr,Oa,za,Na,Ba,rp,ip,Pa,Da,ap,op,Ua,sp,up,La,lp,cp,dp,hp,hy=ee(()=>{ft(),me(),ye(),_e(),lr=e=>{if(Ue.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Oa=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();zr.adjustPoolAttributes(n,i,o,s,u,l);let h=zr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[d,r?p:h]},za=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],d=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],_=t.pads[t.pads.length-2];p=!!(y+_),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:_}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},Na=(e,t,n,r,i,a,o,s,u,l,h,d)=>{let p=i.format==="NHWC",m=t.type.value,g=se("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",_="",$="",x=n-(p?2:1);if(h?y=`
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
                }`,i.kernelShape.length===2){let M=n-(p?3:2);d?_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${M}] < 0 || xIndices[${M}] >= uniforms.x_shape[${M}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${M}] = indices[${M}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${m}(${s});
              var pad = 0;
              ${_}
              ${y}
              ${$}
              ${o}

              output[global_idx] = value;
            }`}else{if(p)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,_=i.pads.length,$="";return l?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${m}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ue("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ue("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ue("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${ue("uniforms.pads","j - 2u",_)};
                  ${$}
              }
              ${o}

              output[global_idx] = value;
            }`}},Ba=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,rp=e=>`${Ba(e)};${e.countIncludePad}`,ip=e=>`${Ba(e)};${e.storageOrder};${e.dilations}`,Pa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Da=(e,t,n,r)=>{let[i,a]=Oa(t,r,n),o=Y("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,d,p,m,g]=za(a,i);h.push(...ce(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:_=>Na(_,o,t.dims.length,a.length,i,u,l,0,d,p,m,g)}},ap=e=>{let t=e.count_include_pad!==0,n=Pa(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:rp(r)}},op=(e,t)=>{lr(e.inputs),e.compute(Da("AveragePool",e.inputs[0],!1,t))},Ua={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},sp=e=>{let t=e.format;return{format:t,...Ua,cacheKey:t}},up=(e,t)=>{lr(e.inputs),e.compute(Da("GlobalAveragePool",e.inputs[0],!0,t))},La=(e,t,n,r)=>{let[i,a]=Oa(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[h,d,p,m,g]=za(a,i);return h.push(...ce(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:h}),getShaderSource:y=>Na(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,d,p,m,g)}},lp=(e,t)=>{lr(e.inputs),e.compute(La("MaxPool",e.inputs[0],!1,t))},cp=e=>{let t=e.storage_order,n=e.dilations,r=Pa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:ip(i)}},dp=e=>{let t=e.format;return{format:t,...Ua,cacheKey:t}},hp=(e,t)=>{lr(e.inputs),e.compute(La("GlobalMaxPool",e.inputs[0],!0,t))}}),pp,fp,mp,gp,py=ee(()=>{me(),ye(),Ye(),_e(),pp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},fp=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=q.size(a),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(q.size(d.dims)/4)]:d.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,g=m===!1&&h.length===1,y=Ve(s),_=m&&(!u||y===4),$=_?y:1,x=_&&!u?y:1,M=Y("input",u?12:r,l.length,x),S=Y("scale",o,h.length),T=d?Y("zero_point",u?12:r,p.length):void 0,k=se("output",o,a.length,$),E=[M,S];T&&E.push(T);let v=[l,h];d&&v.push(p);let C=[{type:12,data:s/$},{type:12,data:n},{type:12,data:t.blockSize},...ce(...v,a)],N=V=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${V.registerUniforms(L).declareVariables(...E,k)}
      ${V.mainStart()}
          ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${k.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?m?u?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:g?u?`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${k.setByOffset("global_idx",`${k.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/$/64),y:1,z:1},programUniforms:C})}},mp=(e,t)=>{pp(e.inputs,t),e.compute(fp(e.inputs,t))},gp=e=>Ae({axis:e.axis,blockSize:e.blockSize})}),yp,wp,_p,fy=ee(()=>{ft(),me(),_e(),yp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},wp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...ce(a)],u=l=>{let h=se("output",r,a.length),d=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},_p=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ue.webgpu.validateInputContent&&yp(t,n,r),e.compute(wp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),bp,$p,xp,vp,my=ee(()=>{me(),ye(),Ye(),_e(),bp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},$p=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(q.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=q.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...ce(e[1].dims,e[2].dims,i)],h=d=>{let p=Y("indices",e[1].dataType,e[1].dims.length),m=Y("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?ku("output",e[0].dataType,i.length):se("output",e[0].dataType,i.length,a);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,m,g)}
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
    ${bp(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},xp=e=>Ae({reduction:e.reduction}),vp=(e,t)=>{e.compute($p(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Sp,Mp,Tp,Fa,Ip,Ep,kp,Cp,Ap,Rp,Op,zp,Ga,Np,Bp,Pp,Dp,Up,Lp,Fp,gy=ee(()=>{me(),ye(),Ye(),_e(),Sp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Mp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Tp=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Sp(r,t),t.axes.length>0&&Mp(r,t.axes,l).forEach((h,d)=>r[d]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Fa=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Ip=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Fa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Fa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ep=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",kp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Cp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Ap=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Rp=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ue("uniforms.scales","i",r)};
        var roi_low = ${ue("uniforms.roi","i",i)};
        var roi_hi = ${ue("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ue("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Op=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ue("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ue("uniforms.roi","i",a)};
          var roi_hi = ${ue("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ue("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",r.length)};
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
    }`,zp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ue("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ga=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Np=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Ga(e,u,a,2)}
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
    }`},Bp=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[d,p]=h?[0,1]:[2,3],m=e.type.value,g=y=>{let _=y===d?"row":"col";return`
      fn ${_}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${_}: ${m} = originalIdx + ${m}(i);
          if (${_} < 0 || ${_} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${u};`:`${_} = max(0, min(${_}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${_})`)};
          data[i + 1] = ${y===d?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(d)};
    ${g(p)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Pp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ga(e,l,a,3)}
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
    }`},Dp=(e,t,n,r,i,a)=>{let o=e.dims,s=kp(a,t.axes,o.length),u=Cp(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Ap(o,l,t)));let h=se("output",e.dataType,u.length),d=Y("input",e.dataType,o.length),p=q.size(u),m=o.length===u.length&&o.every((x,M)=>x===u[M]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,_=d.type.value,$=x=>`
      ${m?"":`
      ${Ip(t.coordinateTransformMode,_)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${zp(d,o)};
              ${Ep(t.nearestMode,n,_)};
              ${Op(d,h,o,u,l.length,s.length,g)};
              `;case"linear":return`
              ${Rp(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Np(d,h,o,g,y)}`;if(o.length===3||o.length===5)return`${Pp(d,h,o,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Bp(d,h,o,u,l,s,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(d,h)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${m}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...ce(o,u)]})}},Up=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Lp=(e,t)=>{let n=[],r=[],i=[],a=Up(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Tp(e.inputs,t,a,n,r,i),e.compute(Dp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Fp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ae({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Gp,Wp,qp,yy=ee(()=>{me(),ye(),_e(),Gp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Wp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=q.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,_=64,$=Ve(l),x=[{type:12,data:u},{type:12,data:$},{type:12,data:l},{type:1,data:t.epsilon}],M=T=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[Y("x",e[0].dataType,e[0].dims,$),Y("skip",e[1].dataType,e[1].dims,$),Y("gamma",e[2].dataType,e[2].dims,$)];d&&E.push(Y("beta",e[3].dataType,e[3].dims,$)),p&&E.push(Y("bias",e[4].dataType,e[4].dims,$)),E.push(se("output",e[0].dataType,s,$)),m&&E.push(se("mean_output",1,h)),g&&E.push(se("inv_std_output",1,h)),y&&E.push(se("input_skip_bias_sum",e[0].dataType,s,$));let v=Ze(e[0].dataType),C=Ze(1,$);return`

      ${T.registerUniforms(k).declareVariables(...E)}
      var<workgroup> sum_shared : array<${C}, ${_}>;
      var<workgroup> sum_squared_shared : array<${C}, ${_}>;

      ${T.mainStart([_,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${_};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${_};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${_-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Dn(v,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${_};
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
        let mean = ${Xt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Xt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:s,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${y}`,inputDependencies:e.map((T,k)=>"type")},getShaderSource:M,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},qp=(e,t)=>{Gp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Wp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Vp,cr,Hp,Wa,jp,Kp,Yp,Xp,wy=ee(()=>{me(),ye(),Ye(),_e(),Vp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},cr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Hp=(e,t)=>{if(e.length>1){let n=cr(e,1),r=cr(e,2),i=cr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ae({starts:n,ends:r,axes:i})}else return t},Wa=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},jp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ue("uniforms.input_shape","i",n.length)};
            let steps_i = ${ue("uniforms.steps","i",n.length)};
            let signs_i = ${ue("uniforms.signs","i",n.length)};
            let starts_i = ${ue("uniforms.starts","i",n.length)};
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
      }`,Kp=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=cr(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map(($,x)=>Wa($,x,n,i,a)),s=t.ends.map(($,x)=>Wa($,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(o.splice($,0,0),s.splice($,0,n[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,x,M)=>{if($<0){let S=(s[x]-o[x])/$,T=o[x],k=T+S*a[x];o[x]=k,s[x]=T,M[x]=-$}});let l=n.slice(0);i.forEach(($,x)=>{l[$]=Math.ceil((s[$]-o[$])/a[$])});let h={dims:l,dataType:e[0].dataType},d=se("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),m=q.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:o},{type:6,data:u},{type:12,data:a},...ce(e[0].dims,l)],_=$=>`
      ${$.registerUniforms(g).declareVariables(p,d)}
        ${jp(p,d,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Yp=(e,t)=>{Vp(e.inputs,t);let n=Hp(e.inputs,t);e.compute(Kp(e.inputs,n),{inputs:[0]})},Xp=e=>{let t=e.starts,n=e.ends,r=e.axes;return Ae({starts:t,ends:n,axes:r})}}),Zp,Qp,Jp,ef,_y=ee(()=>{me(),ye(),Ye(),Zt(),_e(),Zp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Qp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),a=r.length,o=q.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(E,v)=>v),l[o]=a-1,l[a-1]=o,u=e.compute(lt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,d=h[a-1],p=i/d,m=Ve(d),g=d/m,y=64;p===1&&(y=256);let _=(E,v)=>v===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:v===2?`max(${E}.x, ${E}.y)`:v===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,$=Y("x",u.dataType,u.dims,m),x=se("result",u.dataType,u.dims,m),M=$.type.value,S=Ze(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,T=E=>`
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
      ${E.registerUniform("packedCols","i32").declareVariables($,x)}
      ${E.mainStart(y)}
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
          rowMaxShared = ${M}(${_("threadShared[0]",m)});
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
          rowSumShared = ${M}(${Xt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:g}]}),getShaderSource:T},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(lt(k,l),{inputs:[k]})},Jp=(e,t)=>{Zp(e.inputs),Qp(e,t)},ef=e=>Ae({axis:e.axis})}),qa,tf,nf,rf,af,by=ee(()=>{me(),ye(),_e(),qa=e=>Array.from(e.getBigInt64Array(),Number),tf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(qa(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},nf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},rf=(e,t)=>{let n=e[0].dims,r=t??qa(e[1]),i=nf(n,r),a=q.size(i),o=e[0].dataType,s=Y("input",o,n.length),u=se("output",o,i.length),l=h=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ce(e[0].dims,i)]}),getShaderSource:l}},af=e=>{tf(e.inputs),e.compute(rf(e.inputs),{inputs:[0]})}}),of,sf,uf,$y=ee(()=>{me(),ye(),_e(),of=(e,t,n,r,i)=>{let a=se("output_data",i,n.length,4),o=Y("a_data",t[1].dataType,t[1].dims.length,4),s=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,h=(d,p,m)=>`select(${p}, ${d}, ${m})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,_=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${a.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_b${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${p}[${m}] = ${g}(${h(y,_,$)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},sf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,s=q.size(t);if(a){let l=Bn.calcShape(Bn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=q.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>of(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...ce(r,t,n,o)]})}},uf=e=>{e.compute(sf(e.inputs))}}),lf,xy=ee(()=>{B0(),oa(),P0(),D0(),U0(),L0(),F0(),H0(),K0(),Y0(),X0(),Z0(),Q0(),J0(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),uy(),ly(),cy(),bh(),dy(),hy(),py(),fy(),my(),ra(),gy(),Ch(),yy(),wy(),_y(),Ih(),by(),Zt(),ca(),$y(),lf=new Map([["Abs",[Gl]],["Acos",[Wl]],["Acosh",[ql]],["Add",[Ac]],["ArgMax",[Il,aa]],["ArgMin",[Tl,aa]],["Asin",[Vl]],["Asinh",[Hl]],["Atan",[jl]],["Atanh",[Kl]],["Attention",[Ol]],["AveragePool",[op,ap]],["BatchNormalization",[Pl]],["BiasAdd",[Ll]],["BiasSplitGelu",[Ec]],["Cast",[Xl,Yl]],["Ceil",[Jl]],["Clip",[Ql]],["Concat",[Vc,Hc]],["Conv",[va,$a]],["ConvTranspose",[_d,gd]],["Cos",[ec]],["Cosh",[tc]],["CumSum",[$d,xd]],["DepthToSpace",[Td,Id]],["DequantizeLinear",[mp,gp]],["Div",[Rc]],["Einsum",[Od,zd]],["Elu",[nc,ir]],["Equal",[Oc]],["Erf",[rc]],["Exp",[ic]],["Expand",[Dd]],["FastGelu",[Ld]],["Floor",[ac]],["FusedConv",[va,$a]],["Gather",[qd,Wd]],["GatherElements",[th,eh]],["GatherBlockQuantized",[Xd,Zd]],["GatherND",[Hd,jd]],["Gelu",[oc]],["Gemm",[ah,ih]],["GlobalAveragePool",[up,sp]],["GlobalMaxPool",[hp,dp]],["Greater",[Pc]],["GreaterOrEqual",[Uc]],["GridSample",[fh,mh]],["GroupQueryAttention",[zh]],["HardSigmoid",[fc,pc]],["InstanceNormalization",[Ph]],["LayerNormalization",[Lh]],["LeakyRelu",[sc,ir]],["Less",[Dc]],["LessOrEqual",[Lc]],["Log",[xc]],["MatMul",[Gh]],["MatMulNBits",[Hh,jh]],["MaxPool",[lp,cp]],["Mul",[zc]],["MultiHeadAttention",[_h,yh]],["Neg",[lc]],["Not",[uc]],["Pad",[np]],["Pow",[Nc]],["QuickGelu",[Mc,ir]],["Range",[_p]],["Reciprocal",[cc]],["ReduceMin",[$l]],["ReduceMean",[gl]],["ReduceMax",[bl]],["ReduceSum",[vl]],["ReduceProd",[xl]],["ReduceL1",[yl]],["ReduceL2",[wl]],["ReduceLogSum",[Ml]],["ReduceLogSumExp",[_l]],["ReduceSumSquare",[Sl]],["Relu",[dc]],["Resize",[Lp,Fp]],["RotaryEmbedding",[kh]],["ScatterND",[vp,xp]],["Sigmoid",[hc]],["Sin",[mc]],["Sinh",[gc]],["Slice",[Yp,Xp]],["SkipLayerNormalization",[qp]],["Split",[Mh,Th]],["Sqrt",[yc]],["Softmax",[Jp,ef]],["Sub",[Bc]],["Tan",[wc]],["Tanh",[_c]],["ThresholdedRelu",[$c,ir]],["Tile",[af]],["Transpose",[Pu,Du]],["Where",[uf]]])}),cf,vy=ee(()=>{ft(),Lt(),_e(),cf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Et(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),gt(e.programInfo.name)}dispose(){}build(e,t){Et(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Au(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Me("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return gt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),df={};zn(df,{WebGpuBackend:()=>mf});var hf,pf,ff,mf,Sy=ee(()=>{ft(),me(),Lt(),yu(),z0(),xy(),vy(),hf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},pf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${hf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},ff=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},mf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new ff(o),this.gpuDataManager=Iu(this),this.programManager=new cf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Li(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Et(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),_=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(_))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map($=>({dims:$.dims,dataType:Ut($.dataType)})),outputsMetadata:p.map($=>({dims:$.dims,dataType:Ut($.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:_});else{let $="";d.forEach((M,S)=>{$+=`input[${S}]: [${M.dims}] | ${Ut(M.dataType)}, `});let x="";p.forEach((M,S)=>{x+=`output[${S}]: [${M.dims}] | ${Ut(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${$}${x}start time: ${y} ns, execution time: ${_-y} ns`)}Er("GPU",`${h}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),gt()}run(e,t,n,r,i,a){Et(e.name);let o=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let S=this.gpuDataManager.get(M);if(!S)throw new Error(`no GPU data for input: ${M}`);o.push(S)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map((x,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let d=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let M=h[x]===-1,S=h[x]===-2,T=M||S?i(s[x].dataType,s[x].dims):r(h[x],s[x].dataType,s[x].dims);if(d.push(T),T.data===0)continue;let k=this.gpuDataManager.get(T.data);if(!k)throw new Error(`no GPU data for output: ${T.data}`);if(M&&this.temporaryData.push(k),S){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(k)}p.push(k)}if(o.length!==t.length||p.length!==d.length){if(p.length===0)return gt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,M=[];l.forEach(E=>{let v=typeof E.data=="number"?[E.data]:E.data;if(v.length===0)return;let C=E.type===10?2:4,N,V;E.type===10?(V=v.length>4?16:v.length>2?8:v.length*C,N=v.length>4?16:C*v.length):(V=v.length<=2?v.length*C:16,N=16),x=Math.ceil(x/V)*V,M.push(x);let L=E.type===10?8:4;x+=v.length>4?Math.ceil(v.length/L)*N:v.length*C});let S=16;x=Math.ceil(x/S)*S;let T=new ArrayBuffer(x);l.forEach((E,v)=>{let C=M[v],N=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(T,C,N.length).set(N);else if(E.type===12)new Uint32Array(T,C,N.length).set(N);else if(E.type===10)new Uint16Array(T,C,N.length).set(N);else if(E.type===1)new Float32Array(T,C,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Ut(E.type)}`)});let k=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,T,0,x),this.gpuDataManager.release(k.id),m={offset:0,size:x,buffer:k.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,_=pf(e,t,y),$=this.programManager.getArtifact(_);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(_,$),Me("info",()=>`[artifact] key: ${_}, programName: ${e.name}`)),l&&$.uniformVariablesInfo){if(l.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${l.length} in program "${$.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],S=M.type,T=typeof M.data=="number"?1:M.data.length,[k,E]=$.uniformVariablesInfo[x];if(S!==k||T!==E)throw new Error(`Uniform variable ${x} mismatch: expect type ${k} with size ${E}, got type ${S} with size ${T} in program "${$.programInfo.name}".`)}}if(Me("info",()=>`[ProgramManager] run "${e.name}" (key=${_}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run($,o,p,g,m),gt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=lf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Me("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Qi(this,e,t);return Fi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),gf={};zn(gf,{init:()=>wf});var Hr,yf,wf,My=ee(()=>{me(),Lt(),ye(),O0(),Hr=class c0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new c0(this.module,this.dataType,this.data,t)}},yf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,a)),p=[];for(let m=0;m<d;m++)p.push(Number(e.getValue(r*i++,a)));s.push(new Hr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Hr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=bn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new Hr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},wf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Sy(),Zn(df)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),d)}},async(s,u,l)=>{Me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let d=new yf(t,o,Number(u));return o.computeKernel(Number(s),d,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new vu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),_f,Va,Ha,Qt,bf,ja,jr,Ka,Ya,Xa,Za,Qa,Ja,$f=ee(()=>{ft(),C0(),A0(),me(),yn(),Ni(),su(),_f=(e,t)=>{Le()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},Va=async e=>{_f(e.wasm.numThreads,Or(e.logLevel))},Ha=async(e,t)=>{var r,i;(i=(r=Le()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(My(),Zn(gf)).init;t==="webgpu"&&await a("webgpu",Le(),e,n),t==="webnn"&&await a("webnn",Le(),e)}},Qt=new Map,bf=e=>{let t=Le(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ze("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},ja=(e,t)=>{let n=Le(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&ze("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},jr=e=>{let t=Le(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ka=async(e,t)=>{var d,p,m,g;let n,r,i=Le();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=jr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await ou(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let C of t.externalData){let N=typeof C=="string"?C:C.path;v.push(Ui(typeof C=="string"?C:C.data).then(V=>{i.mountExternalData(N,V)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let C=v,N=C==null?void 0:C.context,V=C==null?void 0:C.gpuDevice,L=C==null?void 0:C.deviceType,H=C==null?void 0:C.powerPreference;N?i.currentContext=N:V?i.currentContext=await i.webnnCreateMLContext(V):i.currentContext=await i.webnnCreateMLContext({deviceType:L,powerPreference:H})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(d=i.webgpuOnCreateSession)==null||d.call(i,a),a===0&&ze("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,_]=bf(a),$=!!(t!=null&&t.enableGraphCapture),x=[],M=[],S=[],T=[],k=[];for(let v=0;v<y;v++){let[C,N,V]=ja(a,v);C===0&&ze("Can't get an input name."),l.push(C);let L=i.UTF8ToString(C);x.push(L),S.push(N===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:Ut(N),shape:V})}for(let v=0;v<_;v++){let[C,N,V]=ja(a,v+y);C===0&&ze("Can't get an output name."),h.push(C);let L=i.UTF8ToString(C);M.push(L),T.push(N===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:Ut(N),shape:V});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let H=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[L])??"cpu",R=i.webnnIsGraphOutput;if(H==="cpu"&&R&&R(a,L)){k.push("ml-tensor-cpu-output");continue}if(H!=="cpu"&&H!=="cpu-pinned"&&H!=="gpu-buffer"&&H!=="ml-tensor")throw new Error(`Not supported preferred output location: ${H}.`);if($&&H!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${H}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(H)}}let E=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&ze("Can't create IO binding."),E={handle:s,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Di(v))}),Qt.set(a,[a,l,h,E,$,!1]),[a,x,M,S,T]}catch(y){throw l.forEach(_=>i._OrtFree(_)),h.forEach(_=>i._OrtFree(_)),s!==0&&i._OrtReleaseBinding(s)!==0&&ze("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&ze("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&ze("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},Ya=e=>{var u,l,h;let t=Le(),n=Qt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&ze("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(d=>t._OrtFree(d)),a.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&ze("Can't release session."),Qt.delete(e)},Xa=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Le(),u=s.PTR_SIZE,l=e[0],h=e[1],d=e[3],p=d,m,g;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let $=e[2].gpuBuffer;g=bn(_n(l),h);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,$,g)}}else if(d==="ml-tensor"){let $=e[2].mlTensor;g=bn(_n(l),h);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,$,_n(l),h)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=s._malloc(g),n.push(m);for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(m+x*u,yt($[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let S=s.UTF8ToString(i);if(x(r,S)||M(r,S)){let T=_n(l);g=bn(T,h),p="ml-tensor";let k=s.webnnCreateTemporaryTensor,E=s.webnnUploadTensor;if(!k||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,T,h);E(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=v}else g=$.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let y=s.stackSave(),_=s.stackAlloc(4*h.length);try{h.forEach((x,M)=>s.setValue(_+M*u,x,u===4?"i32":"i64"));let $=s._OrtCreateTensor(_n(l),m,g,_,h.length,Di(p));$===0&&ze(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push($)}finally{s.stackRestore(y)}},Za=async(e,t,n,r,i,a)=>{var L,H,R,G;let o=Le(),s=o.PTR_SIZE,u=Qt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],d=u[2],p=u[3],m=u[4],g=u[5],y=t.length,_=r.length,$=0,x=[],M=[],S=[],T=[],k=[],E=o.stackSave(),v=o.stackAlloc(y*s),C=o.stackAlloc(y*s),N=o.stackAlloc(_*s),V=o.stackAlloc(_*s);try{[$,x]=tu(a),mn("wasm prepareInputOutputTensor");for(let z=0;z<y;z++)await Xa(n[z],M,T,e,h[t[z]],t[z],m);for(let z=0;z<_;z++)await Xa(i[z],S,T,e,d[r[z]],y+r[z],m);gn("wasm prepareInputOutputTensor");for(let z=0;z<y;z++)o.setValue(v+z*s,M[z],"*"),o.setValue(C+z*s,h[t[z]],"*");for(let z=0;z<_;z++)o.setValue(N+z*s,S[z],"*"),o.setValue(V+z*s,d[r[z]],"*");if(p&&!g){let{handle:z,outputPreferredLocations:Q,outputPreferredLocationsEncoded:D}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);mn("wasm bindInputsOutputs");for(let j=0;j<y;j++){let F=t[j];await o._OrtBindInput(z,h[F],M[j])!==0&&ze(`Can't bind input[${j}] for session=${e}.`)}for(let j=0;j<_;j++){let F=r[j];(L=i[j])!=null&&L[3]?(k.push(S[j]),o._OrtBindOutput(z,d[F],S[j],0)!==0&&ze(`Can't bind pre-allocated output[${j}] for session=${e}.`)):o._OrtBindOutput(z,d[F],0,D[F])!==0&&ze(`Can't bind output[${j}] to ${Q[j]} for session=${e}.`)}gn("wasm bindInputsOutputs"),Qt.set(e,[l,h,d,p,m,!0])}(H=o.jsepOnRunStart)==null||H.call(o,l),(R=o.webnnOnRunStart)==null||R.call(o,l);let O;p?O=await o._OrtRunWithBinding(l,p.handle,_,N,$):O=await o._OrtRun(l,C,v,y,V,_,N,$),O!==0&&ze("failed to call OrtRun().");let P=[],X=[];mn("wasm ProcessOutputTensor");for(let z=0;z<_;z++){let Q=Number(o.getValue(N+z*s,"*"));if(Q===S[z]||k.includes(S[z])){P.push(i[z]),Q!==S[z]&&o._OrtReleaseTensor(Q)!==0&&ze("Can't release tensor.");continue}let D=o.stackSave(),j=o.stackAlloc(4*s),F=!1,W,ne=0;try{o._OrtGetTensorData(Q,j,j+s,j+2*s,j+3*s)!==0&&ze(`Can't access output tensor data on index ${z}.`);let he=s===4?"i32":"i64",ae=Number(o.getValue(j,he));ne=o.getValue(j+s,"*");let xe=o.getValue(j+s*2,"*"),Re=Number(o.getValue(j+s*3,he)),Xe=[];for(let Oe=0;Oe<Re;Oe++)Xe.push(Number(o.getValue(xe+Oe*s,he)));o._OrtFree(xe)!==0&&ze("Can't free memory for tensor dims.");let He=Xe.reduce((Oe,ge)=>Oe*ge,1);W=Ut(ae);let je=p==null?void 0:p.outputPreferredLocations[r[z]];if(W==="string"){if(je==="gpu-buffer"||je==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Oe=[];for(let ge=0;ge<He;ge++){let We=o.getValue(ne+ge*s,"*"),on=o.getValue(ne+(ge+1)*s,"*"),sn=ge===He-1?void 0:on-We;Oe.push(o.UTF8ToString(We,sn))}P.push([W,Xe,Oe,"cpu"])}else if(je==="gpu-buffer"&&He>0){let Oe=o.jsepGetBuffer;if(!Oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=Oe(ne),We=bn(ae,He);if(We===void 0||!Bi(W))throw new Error(`Unsupported data type: ${W}`);F=!0,P.push([W,Xe,{gpuBuffer:ge,download:o.jsepCreateDownloader(ge,We,W),dispose:()=>{o._OrtReleaseTensor(Q)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(je==="ml-tensor"&&He>0){let Oe=o.webnnEnsureTensor,ge=o.webnnIsGraphInputOutputTypeSupported;if(!Oe||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(bn(ae,He)===void 0||!Pi(W))throw new Error(`Unsupported data type: ${W}`);if(!ge(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let We=await Oe(e,ne,ae,Xe,!1);F=!0,P.push([W,Xe,{mlTensor:We,download:o.webnnCreateMLTensorDownloader(ne,W),dispose:()=>{o.webnnReleaseTensorId(ne),o._OrtReleaseTensor(Q)}},"ml-tensor"])}else if(je==="ml-tensor-cpu-output"&&He>0){let Oe=o.webnnCreateMLTensorDownloader(ne,W)(),ge=P.length;F=!0,X.push((async()=>{let We=[ge,await Oe];return o.webnnReleaseTensorId(ne),o._OrtReleaseTensor(Q),We})()),P.push([W,Xe,[],"cpu"])}else{let Oe=Rr(W),ge=new Oe(He);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(o.HEAPU8.subarray(ne,ne+ge.byteLength)),P.push([W,Xe,ge,"cpu"])}}finally{o.stackRestore(D),W==="string"&&ne&&o._free(ne),F||o._OrtReleaseTensor(Q)}}p&&!m&&(o._OrtClearBoundOutputs(p.handle)!==0&&ze("Can't clear bound outputs."),Qt.set(e,[l,h,d,p,m,!1]));for(let[z,Q]of await Promise.all(X))P[z][2]=Q;return gn("wasm ProcessOutputTensor"),P}finally{(G=o.webnnOnRunEnd)==null||G.call(o,l),o.stackRestore(E),M.forEach(O=>o._OrtReleaseTensor(O)),S.forEach(O=>o._OrtReleaseTensor(O)),T.forEach(O=>o._free(O)),$!==0&&o._OrtReleaseRunOptions($),x.forEach(O=>o._free(O))}},Qa=e=>{let t=Le(),n=Qt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},Ja=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Jt,ot,Un,dr,hr,Kr,eo,Yr,In,En,xf,vf,Sf,Mf,Tf,If,Ef,kf,Cf=ee(()=>{ft(),$f(),yn(),Ai(),Jt=()=>!!Ue.wasm.proxy&&typeof document<"u",Un=!1,dr=!1,hr=!1,Yr=new Map,In=(e,t)=>{let n=Yr.get(e);n?n.push(t):Yr.set(e,[t])},En=()=>{if(Un||!dr||hr||!ot)throw new Error("worker not ready")},xf=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(hr=!0,eo[1](e.data.err)):(dr=!0,eo[0]()),Kr&&(URL.revokeObjectURL(Kr),Kr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Yr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},vf=async()=>{if(!dr){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(hr)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,Jt())return new Promise((e,t)=>{ot==null||ot.terminate(),Xs().then(([n,r])=>{try{ot=r,ot.onerror=a=>t(a),ot.onmessage=xf,eo=[e,t];let i={type:"init-wasm",in:Ue};!i.in.wasm.wasmPaths&&(n||Ii)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ot.postMessage(i),Kr=n}catch(i){t(i)}},t)});try{await zi(Ue.wasm),await Va(Ue),dr=!0}catch(e){throw hr=!0,e}finally{Un=!1}}},Sf=async e=>{if(Jt())return En(),new Promise((t,n)=>{In("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ue}};ot.postMessage(r)});await Ha(Ue,e)},Mf=async e=>Jt()?(En(),new Promise((t,n)=>{In("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ot.postMessage(r,[e.buffer])})):jr(e),Tf=async(e,t)=>{if(Jt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return En(),new Promise((n,r)=>{In("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ot.postMessage(i,a)})}else return Ka(e,t)},If=async e=>{if(Jt())return En(),new Promise((t,n)=>{In("release",[t,n]);let r={type:"release",in:e};ot.postMessage(r)});Ya(e)},Ef=async(e,t,n,r,i,a)=>{if(Jt()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return En(),new Promise((o,s)=>{In("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};ot.postMessage(l,Ja(u))})}else return Za(e,t,n,r,i,a)},kf=async e=>{if(Jt())return En(),new Promise((t,n)=>{In("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ot.postMessage(r)});Qa(e)}}),to,Af,Rf,Ty=ee(()=>{ft(),Cf(),me(),vi(),su(),to=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Af=e=>{switch(e[3]){case"cpu":return new Ge(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Bi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ge.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Pi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ge.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Rf=class{async fetchModelAndCopyToWasmMemory(e){return Mf(await Ui(e))}async loadModel(e,t){Et();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Tf(n,t),gt()}async dispose(){return If(this.sessionId)}async run(e,t,n){Et();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],m=d[1],g=this.inputNames.indexOf(p);if(g===-1)throw new Error(`invalid input '${p}'`);r.push(m),i.push(g)});let a=[],o=[];Object.entries(t).forEach(d=>{let p=d[0],m=d[1],g=this.outputNames.indexOf(p);if(g===-1)throw new Error(`invalid output '${p}'`);a.push(m),o.push(g)});let s=r.map((d,p)=>to(d,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((d,p)=>d?to(d,()=>`output "${this.outputNames[o[p]]}"`):null),l=await Ef(this.sessionId,i,s,o,u,n),h={};for(let d=0;d<l.length;d++)h[this.outputNames[o[d]]]=a[d]??Af(l[d]);return gt(),h}startProfiling(){}endProfiling(){kf(this.sessionId)}}}),Of={};zn(Of,{OnnxruntimeWebAssemblyBackend:()=>ro,initializeFlags:()=>no,wasmBackend:()=>zf});var no,ro,zf,Iy=ee(()=>{ft(),Cf(),Ty(),no=()=>{(typeof Ue.wasm.initTimeout!="number"||Ue.wasm.initTimeout<0)&&(Ue.wasm.initTimeout=0);let e=Ue.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ue.wasm.simd=!1),typeof Ue.wasm.proxy!="boolean"&&(Ue.wasm.proxy=!1),typeof Ue.wasm.trace!="boolean"&&(Ue.wasm.trace=!1),typeof Ue.wasm.numThreads!="number"||!Number.isInteger(Ue.wasm.numThreads)||Ue.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ue.wasm.numThreads=1;else{let t=typeof navigator>"u"?h0("node:os").cpus().length:navigator.hardwareConcurrency;Ue.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ro=class{async init(e){no(),await vf(),await Sf(e)}async createInferenceSessionHandler(e,t){let n=new Rf;return await n.loadModel(e,t),n}},zf=new ro});ft(),ft(),ft();var Ey="1.27.0";{let e=(Iy(),Zn(Of)).wasmBackend;Nn("webgpu",e,5),Nn("webnn",e,5),Nn("cpu",e,10),Nn("wasm",e,10)}Object.defineProperty(Ue.versions,"web",{value:Ey,enumerable:!0});/**
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
 */function ct(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Ln(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Nf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const ky=114;function Cy(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function io(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const d=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),m=Math.min(i-1,p+1),g=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const _=(y+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(_))),x=Math.min(r-1,$+1),M=Math.max(0,Math.min(1,_-$)),S=(p*r+$)*a,T=(p*r+x)*a,k=(m*r+$)*a,E=(m*r+x)*a,v=(h*t+y)*3;for(let C=0;C<3;C++){const N=o[S+C]*(1-M)+o[T+C]*M,V=o[k+C]*(1-M)+o[E+C]*M;s[v+C]=Math.min(255,Math.max(0,Math.round(N*(1-g)+V*g)))}}}return s}function Fn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const d=h*l,p=Math.min((h+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let _=0,$=0,x=0,M=0;for(let T=Math.floor(d);T<p;T++){const k=Math.min(T+1,p)-Math.max(T,d);if(!(k<=0))for(let E=Math.floor(g);E<y;E++){const v=Math.min(E+1,y)-Math.max(E,g);if(v<=0)continue;const C=v*k,N=(T*r+E)*a;_+=o[N]*C,$+=o[N+1]*C,x+=o[N+2]*C,M+=C}}const S=(h*t+m)*3;s[S]=Math.min(255,Math.max(0,ct(_/M))),s[S+1]=Math.min(255,Math.max(0,ct($/M))),s[S+2]=Math.min(255,Math.max(0,ct(x/M)))}}return s}function Bf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function ao(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const m=(p+.5)*l-.5,g=Math.floor(m),y=Bf(m-g);for(let _=0;_<t;_++){const $=(_+.5)*u-.5,x=Math.floor($),M=Bf($-x),S=(p*t+_)*3;for(let T=0;T<3;T++){let k=0;for(let E=0;E<4;E++){const v=d(g-1+E)*r;let C=0;for(let N=0;N<4;N++)C+=M[N]*o[(v+h(x-1+N))*a+T];k+=y[E]*C}s[S+T]=Math.min(255,Math.max(0,Math.round(k)))}}}return s}function oo(e,t,n=1){const r=Cy(e.width,e.height,t,n),i=io(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(ky/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const d=(l+h)*3,p=u+h;o[p]=i[d]/255,o[a+p]=i[d+1]/255,o[2*a+p]=i[d+2]/255}}return{tensor:o,params:r}}function Pf(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],d=e[o*6+4],p=e[o*6+5];if(d<n)continue;const m=Math.round(p);if(m<0||m>=r)continue;const g=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,_=(l-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:d,box:[Math.trunc(g),Math.trunc(y),Math.trunc(_-g),Math.trunc($-y)],boxFloat:[g,y,_-g,$-y]})}return i}const pr=.8,Df=.65,Ay=110,Ry=1280;function Oy(e,t,n){if(n==null)return pr;if(n.length===0)return Df;const r=Math.max(e,t);if(!(r>0))return pr;const i=Ry/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return pr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Ay?Df:pr}const Uf=.25,Lf=.6;function zy(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every($=>Number.isFinite($)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Uf:Lf)),h=Math.trunc(u*(s>=u?Lf:Uf)),d=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(Math.trunc(e),a+l),g=Math.min(Math.trunc(t),o+h),y=m-d,_=g-p;return y<=0||_<=0?null:{x:d,y:p,width:y,height:_}}const Ny=.6,By=.74;function Ff(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,d=ct((s+l)/2),p=ct((u+h)/2),m=ct((l-s+(h-u))/4);m>=1&&r.push({cx:d,cy:p,r:m})}return r}function Py(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Ny*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Dy(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=By*(n.r+r.r))&&t.push(n);return t}function Uy(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Ln(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Gf(e,t,n){const r=Ff(e,t,n);return r.length===0?[]:Uy(Dy(Py(r)))}function Ly(e,t,n){return Ff(e,t,n)}function fr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Fy=.5,Gy=.7,Wy=.55;function so(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Wf(e){if(e.length===0)return[];const t=(Fy*so(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Ln(i.map(a=>a[0]))),Math.trunc(Ln(i.map(a=>a[1]))),Math.trunc(Ln(i.map(a=>a[2]))),Math.trunc(Ln(i.map(a=>a[3])))]);if(r.length>=2){const i=so(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*d,m=(u[2]-u[0])*(u[3]-u[1]),g=(l[2]-l[0])*(l[3]-l[1]);if(p>=Gy*Math.min(m,g)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),_=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=_?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=so(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=Wy*i)}return r}const qf=["brown","grey","blue","green","yellow","red","purple"],qy={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Vy=.7;function Vf(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const d of r){const p=e[d];if(p.family!==a.family)continue;const[m,g,y,_]=p.box,$=Math.max(0,Math.min(o+u,m+y)-Math.max(o,m)),x=Math.max(0,Math.min(s+l,g+_)-Math.max(s,g)),M=Math.max(1,Math.min(u*l,y*_));if($*x>=Vy*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function Xr(e,t,n){const r=Pf(e,t,n,qf.length).map(i=>{const a=qf[i.classIndex];return{color:a,family:qy[a],box:i.box,confidence:i.confidence}});return Vf(r)}const Hy=8,jy=.8,Hf=1.25;function Ky(e){if(e.length<Hy)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Hf?t.push(o):u>s*Hf&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<jy*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Yy=2.25,jf=8;function Xy(e){if(e.length<jf)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=Yy*n[Math.floor(n.length/2)],i=r*r,a=e.map((d,p)=>p),o=d=>{for(;a[d]!==d;)a[d]=a[a[d]],d=a[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const m=t[d][0]-t[p][0],g=t[d][1]-t[p][1];m*m+g*g<=i&&(a[o(d)]=o(p))}const s=new Map;for(let d=0;d<e.length;d++){const p=o(d);s.set(p,[...s.get(p)??[],d])}let u=[];for(const d of s.values())d.length>u.length&&(u=d);if(u.length<jf||u.length===e.length)return[];const l=new Set(u),h=e.map((d,p)=>p).filter(d=>!l.has(d));return h.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const dt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function vt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const Zy=.42,Qy=22,Jy=43,ew=120,tw=1.5,nw=.72,rw=110,Kf=3;function mr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*Zy);if(l<1)return 0;let h=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-s)**2+(d-u)**2>l*l)continue;const m=(d*r+p)*a,g=o[m],y=o[m+1],_=o[m+2];!t&&g>=250&&y>=250&&_>=250||(n(g,y,_),h+=1)}return h}function iw(e){let t=0,n=0,r=0,i=mr(e,!1,(a,o,s)=>{const u=vt(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=mr(e,!0,(a,o,s)=>{const u=vt(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function aw(e){let t=0,n=0,r=mr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=mr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function ow(e){let t=0;const n=mr(e,!0,(r,i,a)=>{t+=vt(r,i,a).s});return n===0?null:t/n}function sw(e){const t=iw(e);if(t===null||t.s<=Qy)return 1;if(t.s>=ew){const n=aw(e);return n!==null&&n>=tw?6:3}return t.s>=Jy?3:6}function uw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function lw(e,t){const n=[...t];if(e.length<Kf||t.length!==e.length)return n;const r=e.map(o=>ow(o)),i=r.filter(o=>o!==null);if(i.length<Kf)return n;const a=Ln(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<nw*a&&o<rw&&(n[s]=1)}),n}function Yf(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),d=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=(p*l+m)*3;if((m+a-n)**2+(p+o-r)**2<=i*i){const _=((p+o)*e.width+(m+a))*e.channels;d[g]=e.data[_],d[g+1]=e.data[_+1],d[g+2]=e.data[_+2]}else d[g]=255,d[g+1]=255,d[g+2]=255}return{width:l,height:h,channels:3,data:d}}function cw(e,t){const n=t.map(a=>Yf(e,a)),r=n.map(a=>sw(a)),i=uw(t,r);return lw(n,i)}function dw(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function Xf(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,d=Math.min((l+1)*i,e.width);let p=0,m=0;for(let g=Math.floor(s);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,s);if(!(y<=0))for(let _=Math.floor(h);_<d;_++){const $=Math.min(_+1,d)-Math.max(_,h);$<=0||(p+=e.data[g*e.width+_]*$*y,m+=$*y)}}r[o*t+l]=Math.min(255,Math.max(0,ct(p/m)))}}return{width:t,height:n,data:r}}function hw(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,ct(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function pw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,d=a+u;if(!(h<0||h>=t||d<0||d>=n)&&r[d*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function fw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,d=a+u;if(h>=0&&h<t&&d>=0&&d<n&&r[d*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function uo(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let d=0,p=0,m=0;for(;l<h;){const g=o[l++],y=g%t,_=g/t|0;d+=1,p+=y,m+=_;for(let $=-1;$<=1;$++)for(let x=-1;x<=1;x++){if(x===0&&$===0)continue;const M=y+x,S=_+$;if(M<0||M>=t||S<0||S>=n)continue;const T=S*t+M;r[T]>0&&i[T]===0&&(i[T]=s,o[h++]=T)}}a[s]={area:d,centroidX:p/d,centroidY:m/d},s+=1}return{labels:i,stats:a}}function mw(e,t,n){return Zf(Float32Array.from(e.data),e.width,t,n)}function Zf(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const d=h-a,p=l-a,m=s*d-u*p+a,g=u*d+s*p+a,y=Math.floor(m),_=Math.floor(g),$=m-y,x=g-_,M=(k,E)=>k>=0&&k<t&&E>=0&&E<t?e[E*t+k]:r,S=M(y,_)*(1-$)+M(y+1,_)*$,T=M(y,_+1)*(1-$)+M(y+1,_+1)*$;i[l*t+h]=S*(1-x)+T*x}return i}const gw=.9,yw=.34,ww=[.55,.6,.66,.72],_w=22,bw=88,$w=35,Gn=28,lo=4,xw=Array.from({length:15},(e,t)=>-21+t*3),Qf=[-2,0,2],vw=3,Sw=.3;function Mw(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Tw(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let _=0;_<e.width;_++)e.data[y*e.width+_]>0&&(a+=1,t=Math.min(t,_),n=Math.max(n,_),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),d=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let _=0;_<o;_++)l[(y+d)*u+(_+h)]=e.data[(y+r)*e.width+(_+t)];const p=Gn-2*lo,m=Xf({width:u,height:u,data:l},p,p),g=new Float32Array(Gn*Gn);for(let y=0;y<p;y++)for(let _=0;_<p;_++)g[(y+lo)*Gn+(_+lo)]=m.data[y*p+_]>110?1:0;return g}function Iw(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*yw);if(u<4)return null;const l=o-u,h=s-u,d=2*u,p=2*u;if(d<6||p<6)return null;const m=new Int16Array(d*p),g=new Int16Array(d*p),y=new Int16Array(d*p),_=new Uint8Array(d*p),$=[],x=Math.min(d,p)/2;for(let z=0;z<d;z++)for(let Q=0;Q<p;Q++){const D=((z+l)*n+(Q+h))*i,{h:j,s:F,v:W}=vt(a[D],a[D+1],a[D+2]),ne=z*p+Q;m[ne]=j,g[ne]=F,y[ne]=W,Math.sqrt((Q-p/2)**2+(z-d/2)**2)/x<=t&&(_[ne]=1,$.push(W))}if($.length<16)return null;const M=Nf($,55);let S=0,T=0,k=0;const E=z=>m[z]>=_w&&m[z]<=bw&&g[z]>=$w,v=z=>y[z]>=M&&g[z]<=95&&!E(z)&&_[z]===1;for(let z=0;z<d*p;z++)_[z]===1&&(k+=1,y[z]>=130&&!E(z)&&(S+=1),v(z)&&(T+=1));const C=S>.5*k&&T<.15*k,N=new Uint8Array(d*p);if(C){const z=Nf($,45);for(let Q=0;Q<d*p;Q++)N[Q]=_[Q]===1&&y[Q]<=z?255:0}else for(let z=0;z<d*p;z++)N[z]=v(z)?255:0;const V={width:p,height:d,data:N},L=pw(V);let H=uo(L),R=H;if(H.stats.length<=1&&(H=uo(V),R=H,H.stats.length<=1))return null;const G=Math.min(d,p)/2;let O=0,P=-1;for(let z=1;z<R.stats.length;z++){const Q=R.stats[z];if(Q===void 0)continue;const D=Math.hypot(Q.centroidX-p/2,Q.centroidY-d/2)/G,j=Q.area*(1-.6*Math.min(D,1));j>P&&(P=j,O=z)}if(O===0)return null;const X=new Uint8Array(d*p);for(let z=0;z<d*p;z++)X[z]=R.labels[z]===O?255:0;return Tw(fw({width:p,height:d,data:X}))}function Ew(e,t,n,r,i,a){const o=Gn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let d=0;d<o;d++){const p=d-i;if(p<0||p>=o)continue;const m=e[h*o+p];m!==0&&(u+=m,s+=m*n[l*o+d])}}return s/(u+r-s+1e-6)}function kw(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of xw){const a=i===0?e:Zf(e,Gn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of Qf)for(const u of Qf){const l=Ew(a,o,t,n,s,u);l>r&&(r=l)}}return r}function Cw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of ww){const s=Iw(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([kw(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<Sw)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,vw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const Aw=2560,Rw=.3,Ow=.5,zw=1.6,Nw=3,Bw=5;function Pw(e){const t=Math.min(1,Aw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let m=0;m<n;m++){const g=(m+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),_=Math.min(e.width-1,y+1),$=Math.max(0,Math.min(1,g-y));for(let x=0;x<3;x++){const M=2-x,S=(h*e.width+y)*e.channels+M,T=(h*e.width+_)*e.channels+M,k=(d*e.width+y)*e.channels+M,E=(d*e.width+_)*e.channels+M,v=e.data[S]*(1-$)+e.data[T]*$,C=e.data[k]*(1-$)+e.data[E]*$,N=v*(1-p)+C*p;a[x*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function Dw(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function Uw(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function Lw(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const d=u/h,p=l/h;let m=1/0,g=-1/0,y=1/0,_=-1/0;for(const[S,T]of e){const k=S*d+T*p,E=-S*p+T*d;k<m&&(m=k),k>g&&(g=k),E<y&&(y=E),E>_&&(_=E)}const $=g-m,x=_-y,M=$*x;if(M<n){n=M;const S=(m+g)/2,T=(y+_)/2;t={cx:S*d-T*p,cy:S*p+T*d,w:$,h:x,angle:Math.atan2(p,d)}}}return t}function Fw(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let _=p;_<=m;_++)for(let $=h;$<=d;$++){const x=$-r.cx,M=_-r.cy,S=x*i+M*a,T=-x*a+M*i;Math.abs(S)<=o&&Math.abs(T)<=s&&(g+=e[_*t+$],y+=1)}return y===0?0:g/y}function Gw(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,_)=>y[0]-_[0]),[s,u,l,h]=o,[d,p]=s[1]<=u[1]?[s,u]:[u,s],[m,g]=l[1]<=h[1]?[l,h]:[h,l];return[[d[0],d[1]],[m[0],m[1]],[g[0],g[1]],[p[0],p[1]]]}function Ww(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let m=0;m<o.length;m++)o[m]=e[m]>Rw?255:0;o=Dw(o,i,a);const s={width:i,height:a,data:o},{labels:u}=uo(s),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let _=l.get(y);_===void 0&&(_=new Map,l.set(y,_));const $=_.get(m);$===void 0?_.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const h=n/i,d=r/a,p=[];for(const[m,g]of l){const y=[];for(const[N,[V,L]]of g)y.push([V-.5,N-.5],[V-.5,N+.5],[L+.5,N-.5],[L+.5,N+.5]);const _=Lw(Uw(y));if(Math.min(_.w,_.h)<Nw)continue;const $=Fw(e,i,a,_);if($<Ow)continue;const x=_.w*_.h*zw/(2*(_.w+_.h)),M={..._,w:_.w+2*x,h:_.h+2*x};if(Math.min(M.w,M.h)<Bw+2)continue;const T=Gw(M).map(([N,V])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(V*d)))]),k=T.map(N=>N[0]),E=T.map(N=>N[1]),v=Math.min(...k),C=Math.min(...E);p.push({quad:T,x:v,y:C,width:Math.max(...k)-v,height:Math.max(...E)-C,score:$})}return p.sort((m,g)=>g.score-m.score)}function qw(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Vw([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let d=0;d<s;d++)for(let p=0;p<o;p++){const m=u[6]*p+u[7]*d+u[8],g=(u[0]*p+u[1]*d+u[2])/m,y=(u[3]*p+u[4]*d+u[5])/m,_=Math.floor(g),$=Math.floor(y),x=g-_,M=y-$,S=Math.max(0,Math.min(e.width-1,_)),T=Math.max(0,Math.min(e.width-1,_+1)),k=Math.max(0,Math.min(e.height-1,$)),E=Math.max(0,Math.min(e.height-1,$+1));for(let v=0;v<e.channels;v++){const C=e.data[(k*e.width+S)*e.channels+v],N=e.data[(k*e.width+T)*e.channels+v],V=e.data[(E*e.width+S)*e.channels+v],L=e.data[(E*e.width+T)*e.channels+v],H=C*(1-x)+N*x,R=V*(1-x)+L*x;l[(d*o+p)*e.channels+v]=Math.round(H*(1-M)+R*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?Gt(h,3):h}function Vw(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Gt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let d=0;d<r;d++){let p,m;n===1?(p=i-1-h,m=d):n===2?(p=r-1-d,m=i-1-h):(p=h,m=r-1-d);const g=(h*r+d)*a,y=(m*s+p)*a;for(let _=0;_<a;_++)l[y+_]=o[g+_]}return{width:s,height:u,channels:a,data:l}}const Hw=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Hw)*255));return e})();const Wt=48,jw=320;function Kw(e){return["blank",...e.characters," "]}function Yw(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function Xw(e,t){const n=Math.trunc(Wt*t),r=e.width/e.height,i=Math.ceil(Wt*r)>n?n:Math.ceil(Wt*r),a=new Float32Array(3*Wt*n),o=Wt*n,s=e.width/i,u=e.height/Wt;for(let l=0;l<Wt;l++){const h=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,d+1),m=Math.max(0,Math.min(1,h-d));for(let g=0;g<i;g++){const y=(g+.5)*s-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,y-_));for(let M=0;M<3;M++){const S=2-M,T=(d*e.width+_)*e.channels+S,k=(d*e.width+$)*e.channels+S,E=(p*e.width+_)*e.channels+S,v=(p*e.width+$)*e.channels+S,C=e.data[T]*(1-x)+e.data[k]*x,N=e.data[E]*(1-x)+e.data[v]*x,V=C*(1-m)+N*m;a[M*o+l*n+g]=(V/255-.5)/.5}}}return{tensor:a,width:n}}const Zw=62,Qw=8,Jw=5;function co(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function e_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function Zr(e,t){return e.length===0&&t.length===0?100:200*e_(e,t)/(e.length+t.length)}function Jf(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Zr(n(e),n(t))}function t_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(Zr(s,u),Zr(s,l),Zr(u,l))}function n_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[co(i),co(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function r_(e,t){const n=co(e);if(!n||t.length===0)return null;const i=n_(t).map(h=>({...h,score:t_(n,h.key)})).sort((h,d)=>d.score-h.score).slice(0,Qw).filter(h=>h.score>=Zw);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=Jw),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[Jf(s,u.key),u.score];for(const h of o.slice(1)){const d=[Jf(s,h.key),h.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=h,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const em=5e3,ho=.75,tm=15,i_=1.25,a_=2.4,o_=.003,s_=.85,u_=4,po=2600,fo=2,mo=.3,nm=.1,rm=.012,l_=22,im=.5,Qr=.12;function et(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function c_(e,t,n,r){const i=r.map(ae=>ae[0]),a=r.map(ae=>ae[1]),o=i.reduce((ae,xe)=>ae+xe,0)/i.length,s=a.reduce((ae,xe)=>ae+xe,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*u_,h=Math.max(0,Math.trunc(o-l)),d=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),m=Math.min(n.height,Math.trunc(s+l));if(d-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<po?fo:1,y=et(e,n),_=et(e,t),$=new e.Rect(h,p,d-h,m-p),x=y.roi($),M=new e.Mat;g!==1?e.resize(x,M,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo(M);const S=new e.Mat,T=new e.Mat;e.cvtColor(_,S,e.COLOR_RGB2GRAY),e.cvtColor(M,T,e.COLOR_RGB2GRAY);const k=new e.ORB(em),E=new e.KeyPointVector,v=new e.KeyPointVector,C=new e.Mat,N=new e.Mat,V=new e.Mat,L=[y,_,x,M,S,T,E,v,C,N,V],H=ae=>{for(const xe of L)try{xe.delete()}catch{}try{k.delete()}catch{}return ae};if(k.detectAndCompute(S,V,E,C),k.detectAndCompute(T,V,v,N),C.rows<8||N.rows<8)return H(null);const R=new e.BFMatcher(e.NORM_HAMMING),G=new e.DMatchVectorVector;R.knnMatch(C,N,G,2);const O=[],P=[];for(let ae=0;ae<G.size();ae++){const xe=G.get(ae);if(xe.size()===2){const Re=xe.get(0),Xe=xe.get(1);if(Re.distance<ho*Xe.distance){const He=E.get(Re.queryIdx).pt,je=v.get(Re.trainIdx).pt;O.push(He.x,He.y),P.push(je.x,je.y)}}}if(G.delete(),R.delete(),O.length/2<8)return H(null);const X=e.matFromArray(O.length/2,1,e.CV_32FC2,O),z=e.matFromArray(P.length/2,1,e.CV_32FC2,P),Q=new e.Mat,D=e.findHomography(X,z,e.RANSAC,5,Q);let j=0;for(let ae=0;ae<Q.rows;ae++)j+=Q.data[ae];const F=D.rows===3?[...D.data64F]:null;if(X.delete(),z.delete(),Q.delete(),D.delete(),F===null||j<tm)return H(null);const W=1/g,ne=[[W,0,h],[0,W,p],[0,0,1]],he=[0,1,2].map(ae=>[0,1,2].map(xe=>ne[ae][0]*F[xe]+ne[ae][1]*F[3+xe]+ne[ae][2]*F[6+xe]));return H({H:he,inliers:j})}function go(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*h}const i=Math.abs(r/2)/(t*n);if(i<o_||i>s_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=i_&&s<=a_}function yo(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function wo(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(mo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(L=>[L[0],L[1],L[2]-o*(L[0]+L[1])+0]);for(let L=0;L<3;L++)l[L][2]=r[L][2]-o*r[L][0]-o*r[L][1];const h=et(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,d,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(d,m,e.COLOR_RGB2Lab),h.delete(),p.delete();const g=m.data,y=Math.max(4,Math.trunc(o/3)),_=[[],[],[]],$=(L,H)=>{const R=(H*s+L)*3;_[0].push(g[R]),_[1].push(g[R+1]),_[2].push(g[R+2])};for(let L=0;L<u;L++)for(let H=0;H<s;H++)(L<y||L>=u-y||H<y||H>=s-y)&&$(H,L);const x=L=>{L.sort((R,G)=>R-G);const H=L.length>>1;return L.length%2?L[H]:(L[H-1]+L[H])/2},M=[x(_[0]),x(_[1]),x(_[2])],S=(L,H)=>{const R=(H*s+L)*3,G=g[R]-M[0],O=g[R+1]-M[1],P=g[R+2]-M[2];return Math.sqrt(G*G+O*O+P*P)>l_},T=Math.max(6,Math.trunc(nm*i)),k=Math.max(6,Math.trunc(nm*a)),E=Math.max(2,Math.trunc(rm*i)),v=Math.max(2,Math.trunc(rm*a)),C=L=>{let H=0,R=0;for(const G of L)R=G?R+1:0,R>H&&(H=R);return H/Math.max(1,L.length)},N=L=>{let H,R,G,O,P;if(L==="L"?(H=o,R=o+a,G=Math.max(0,o-E-T),O=Math.max(0,o-E),P=!1):L==="R"?(H=o,R=o+a,G=o+i+E,O=Math.min(s,o+i+E+T),P=!1):(H=Math.max(0,o-v-k),R=Math.max(0,o-v),G=o,O=o+i,P=!0),R<=H||O<=G)return 0;const X=[];if(P)for(let z=G;z<O;z++){let Q=0;for(let D=H;D<R;D++)S(z,D)&&Q++;X.push(Q/(R-H)>im)}else for(let z=H;z<R;z++){let Q=0;for(let D=G;D<O;D++)S(D,z)&&Q++;X.push(Q/(O-G)>im)}return C(X)},V={L:N("L"),R:N("R"),T:N("T")};return d.delete(),m.delete(),V}const d_=6e3,h_=8,am=.5,p_=.6;function f_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<po?fo:1,a=et(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(d_),l=new e.Mat,h=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(s,l,h,d);const p=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const _=et(e,y),$=new e.Mat;e.cvtColor(_,$,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute($,l,x,M);const S=[_,x,M],T=()=>{for(const he of S)he.delete();$.delete()};if(M.rows<8){T();continue}const k=new e.DMatchVectorVector;m.knnMatch(M,d,k,2);const E=[],v=[];for(let he=0;he<k.size();he++){const ae=k.get(he);if(ae.size()===2){const xe=ae.get(0);if(xe.distance<ho*ae.get(1).distance){const Re=x.get(xe.queryIdx).pt,Xe=h.get(xe.trainIdx).pt;E.push(Re.x,Re.y),v.push(Xe.x,Xe.y)}}}if(k.delete(),E.length/2<8){T();continue}const C=e.matFromArray(E.length/2,1,e.CV_32FC2,E),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),V=new e.Mat,L=e.findHomography(C,N,e.RANSAC,5,V);let H=0;for(let he=0;he<V.rows;he++)H+=V.data[he];const R=L.rows===3?[...L.data64F]:null;if(C.delete(),N.delete(),V.delete(),L.delete(),R===null||H<h_){T();continue}const G=1/i,O=[[G*R[0],G*R[1],G*R[2]],[G*R[3],G*R[4],G*R[5]],[R[6],R[7],R[8]]],P=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([he,ae])=>yo(O,he,ae));if(!go(P,t.width,t.height)){T();continue}const X=et(e,t),z=e.matFromArray(3,3,e.CV_64F,O.flat()),Q=new e.Mat;e.warpPerspective(X,Q,z,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const D=new e.Mat;e.cvtColor(Q,D,e.COLOR_RGB2GRAY);const j=new e.Mat;e.matchTemplate(D,$,j,e.TM_CCOEFF_NORMED);const F=j.data32F[0];if(X.delete(),z.delete(),Q.delete(),D.delete(),j.delete(),F<am){T();continue}const W=wo(e,t,y,O),ne=_o(W);p.push({id:g,confidence:Math.max(0,F),footprint:P,built:W!==null&&Math.max(W.L,W.R,W.T)>=Qr,tuckRegion:bo(P,ne)}),T()}}finally{s.delete(),l.delete(),h.delete(),d.delete();try{u.delete(),m.delete()}catch{}}return p}function _o(e){return e!==null&&e.R>=Qr?["R"]:[]}function bo(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=mo*a;if(!(o>0))return null;const s=n.reduce((y,_)=>y+_[0],0)/n.length,u=n.reduce((y,_)=>y+_[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[_,$]=l[y],x=n[_],M=n[$];let S=-(M[1]-x[1]),T=M[0]-x[0];const k=(x[0]+M[0])/2,E=(x[1]+M[1])/2;S*(k-s)+T*(E-u)<0&&(S=-S,T=-T);const v=Math.hypot(S,T);v<=1e-6||(S=S/v*o,T=T/v*o,h.push([x[0]+S,x[1]+T],[M[0]+S,M[1]+T]))}const d=h.map(y=>y[0]),p=h.map(y=>y[1]),m=Math.round(Math.min(...d)),g=Math.round(Math.min(...p));return{x:m,y:g,width:Math.round(Math.max(...d))-m,height:Math.round(Math.max(...p))-g}}function m_(e,t,n,r){const i=c_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>yo(i.H,l,h));if(!go(o,t.width,t.height))return null;const s=wo(e,t,n,i.H);if(s===null)return null;const u=_o(s);return{built:Math.max(s.L,s.R,s.T)>=Qr,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const g_=.88;function om(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(mo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*g_),h=s-l;if(h<1)return null;const d=et(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(p,m),y=[...g.data64F],_=[0,1,2].flatMap(E=>[y[E*3],y[E*3+1],y[E*3+2]-o*y[E*3]-o*y[E*3+1]]),$=e.matFromArray(3,3,e.CV_64F,_),x=new e.Mat;e.warpPerspective(d,x,$,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,h,u)),S=new e.Mat;M.copyTo(S);const T=S.data,k=new Uint8ClampedArray(h*u*3);k.set(T.subarray(0,k.length));for(const E of[d,p,m,g,$,x,M,S])try{E.delete()}catch{}return{width:h,height:u,channels:3,data:k}}function y_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+s+l));if(d-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<po?fo:1,y=et(e,n),_=et(e,t),$=y.roi(new e.Rect(h,p,d-h,m-p)),x=new e.Mat;g!==1?e.resize($,x,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(x);const M=new e.Mat,S=new e.Mat;e.cvtColor(_,M,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const T=new e.ORB(em),k=new e.KeyPointVector,E=new e.KeyPointVector,v=new e.Mat,C=new e.Mat,N=new e.Mat,V=[y,_,$,x,M,S,k,E,v,C,N],L=he=>{for(const ae of V)try{ae.delete()}catch{}try{T.delete()}catch{}return he};if(T.detectAndCompute(M,N,k,v),T.detectAndCompute(S,N,E,C),v.rows<8||C.rows<8)return L(null);const H=new e.BFMatcher(e.NORM_HAMMING),R=new e.DMatchVectorVector;H.knnMatch(v,C,R,2);const G=[],O=[];for(let he=0;he<R.size();he++){const ae=R.get(he);if(ae.size()===2){const xe=ae.get(0),Re=ae.get(1);if(xe.distance<ho*Re.distance){const Xe=k.get(xe.queryIdx).pt,He=E.get(xe.trainIdx).pt;G.push(Xe.x,Xe.y),O.push(He.x,He.y)}}}if(R.delete(),H.delete(),G.length/2<8)return L(null);const P=e.matFromArray(G.length/2,1,e.CV_32FC2,G),X=e.matFromArray(O.length/2,1,e.CV_32FC2,O),z=new e.Mat,Q=e.findHomography(P,X,e.RANSAC,5,z);let D=0;for(let he=0;he<z.rows;he++)D+=z.data[he];const j=Q.rows===3?[...Q.data64F]:null;if(P.delete(),X.delete(),z.delete(),Q.delete(),j===null||D<tm)return L(null);const F=1/g,W=[[F,0,h],[0,F,p],[0,0,1]],ne=[0,1,2].map(he=>[0,1,2].map(ae=>W[he][0]*j[ae]+W[he][1]*j[3+ae]+W[he][2]*j[6+ae]));return L({H:ne,inliers:D})}const w_=620;function __(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function sm(e,t,n,r){const i=um(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(T=>Math.trunc(T));if(Math.min(s,u)>=w_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),d=Math.max(0,a-l),p=Math.max(0,o-h),m=Math.min(t.width,a+s+l),g=Math.min(t.height,o+u+h);if(m<=d||g<=p)return null;const y=et(e,t),_=y.roi(new e.Rect(d,p,m-d,g-p)),$=new e.Mat;e.resize(_,$,new e.Size((m-d)*2,(g-p)*2),0,0,e.INTER_CUBIC);const x=__(e,$);for(const T of[y,_,$])try{T.delete()}catch{}const M=[(a-d)*2,(o-p)*2,s*2,u*2],S=um(e,x,n,M);return S===null?null:{...S,footprint:S.footprint.map(([T,k])=>[T*.5+d,k*.5+p])}}catch{return null}}function um(e,t,n,r){const i=y_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([$,x])=>yo(i.H,$,x));if(!go(o,t.width,t.height))return null;const s=et(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=et(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(d,p,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const $ of[s,u,l,h,d,p,m])try{$.delete()}catch{}if(g<am)return null;const y=wo(e,t,n,i.H);if(y===null)return null;const _=_o(y);return{built:Math.max(y.L,y.R,y.T)>=Qr,footprint:o,overflow:_,edgeScores:y,inliers:i.inliers}}function b_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const d=r*l,p=r*h;if(t>=s-d&&t<=s+l+d&&n>=u-p&&n<=u+h+p){const m=l*h;m<a&&(a=m,i=[s,u,l,h])}}return i}const $_=.3,x_=.3;function v_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=$_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<x_;if(!r&&!h)return;t.some(([p,m])=>p>=a.zone.x0&&p<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(o)}),i}const Ct=128,$o=.5;function xo(e){const t=Fn(e,Ct,Ct),n=Ct*Ct,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function lm(e){const t=e[1]??0;return{built:t>=$o,prob:t}}const gr=120,yr=179,S_=1.3,M_=3.6,T_=.45,I_=6e-4,E_=.02,k_=6e3,C_=.78,A_=1.25,R_=2.4,O_=.05,z_=1.5,N_=.5,B_=.9,P_=150,D_=18,U_=34,L_=90,F_=130,G_=.13,W_=.15,Jr="magistrates-guild",vo="merchants-guild";function q_(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[gr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[yr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,d=new e.Mat,p=new e.Mat,m=e.connectedComponentsWithStats(l,h,d,p,8);l.delete(),h.delete(),p.delete();const g=t.width*t.height,y=[];for(let _=1;_<m;_++){const $=d.intAt(_,0),x=d.intAt(_,1),M=d.intAt(_,2),S=d.intAt(_,3),T=d.intAt(_,4),k=T/g;k<I_||k>E_||T/Math.max(M*S,1)<T_||y.push({x:$,y:x,w:M,h:S})}return d.delete(),{blobs:y,mask:s,maskWidth:t.width}}function V_(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const F=et(e,r);h.gray=new s.Mat,s.cvtColor(F,h.gray,s.COLOR_RGB2GRAY),F.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const W=new s.Mat;u.detectAndCompute(h.gray,W,h.k,h.d),W.delete()}const d=n,p=new s.Mat,m=new s.KeyPointVector,g=new s.Mat;u.detectAndCompute(d,p,m,g),p.delete();const y=F=>(m.delete(),g.delete(),F);if(h.d.rows<8||g.rows<8)return y(null);const _=new s.DMatchVectorVector;l.knnMatch(h.d,g,_,2);const $=[],x=[];for(let F=0;F<_.size();F++){const W=_.get(F);if(W.size()===2){const ne=W.get(0);if(ne.distance<C_*W.get(1).distance){const he=h.k.get(ne.queryIdx).pt,ae=m.get(ne.trainIdx).pt;$.push(he.x,he.y),x.push(ae.x,ae.y)}}}if(_.delete(),$.length/2<8)return y(null);const M=s.matFromArray($.length/2,1,s.CV_32FC2,$),S=s.matFromArray(x.length/2,1,s.CV_32FC2,x),T=new s.Mat,k=s.findHomography(M,S,s.RANSAC,5,T);if(M.delete(),S.delete(),T.delete(),k.rows!==3)return k.delete(),y(null);const E=[...k.data64F],v=(F,W)=>{const ne=E[6]*F+E[7]*W+E[8];return[(E[0]*F+E[1]*W+E[2])/ne,(E[3]*F+E[4]*W+E[5])/ne]},C=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([F,W])=>v(F,W));if(C.some(F=>!Number.isFinite(F[0])||!Number.isFinite(F[1])))return k.delete(),y(null);const N=C.map((F,W)=>{const ne=C[(W+1)%4];return Math.hypot(ne[0]-F[0],ne[1]-F[1])}),V=Math.min(...N);if(V<1)return k.delete(),y(null);const L=Math.max(...N)/V;let H=0;for(let F=0;F<4;F++){const[W,ne]=C[F],[he,ae]=C[(F+1)%4];H+=W*ae-he*ne}const R=t,G=Math.abs(H/2)/(R.rows*R.cols);if(L<A_||L>R_||G<O_||G>z_)return k.delete(),y(null);const O=new s.Mat;s.warpPerspective(R,O,k,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),k.delete();const P=new s.Mat;s.cvtColor(O,P,s.COLOR_RGB2GRAY),O.delete();const X=Math.trunc(r.height/2),z=P.roi(new s.Rect(0,0,r.width,X)),Q=h.gray.roi(new s.Rect(0,0,r.width,X)),D=new s.Mat;s.matchTemplate(z,Q,D,s.TM_CCOEFF_NORMED);const j=D.data32F[0];return z.delete(),Q.delete(),D.delete(),P.delete(),y(j)}function H_(e,t,n){let r,i;if(n===Jr)r=vo,i=G_;else if(n===vo)r=Jr,i=W_;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,d=null;for(const[p,m]of[[0,l],[l,s]]){let g=0,y=0;for(let $=o;$<o+u;$++)for(let x=a+p;x<a+m;x++){const M=($*e.width+x)*e.channels,{h:S,s:T,v:k}=vt(e.data[M],e.data[M+1],e.data[M+2]);if(S>=gr&&S<=yr&&T>=30&&T<=170&&k<=170)continue;g++,(r===vo?S>=D_&&S<=U_&&T>=L_&&k>=F_:S>=95&&S<=130&&T>=80)&&y++}if(g<20)continue;const _=y/g;_>h&&(h=_,d={x:a+p,y:o,w:m-p,h:u})}return h>=i&&d!==null?{id:r,box:d}:null}const j_=1.7,K_=140,Y_=170,X_=.2,Z_=.1,cm=240,dm=80,hm=60,Q_=50,pm="scientists-guild",fm="tacticians-guild",ei=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function J_(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let S=0;S<o;S++){let T=0;for(let k=0;k<a;k++)e[(i+S)*t+r+k]>0&&T++;s[S]=T/a}const u=[];for(let S=0;S<o;S++)s[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],d=h-l;if(d<5)return[];const p=a/d;if(p<S_||p>M_)return[];if(p>=j_)return[{x:r,y:i+l,w:a,h:d}];const m=new Float32Array(o),g=.3*(8*.5-1)+.8,y=[];let _=0;for(let S=-4;S<=4;S++){const T=Math.exp(-(S*S)/(2*g*g));y.push(T),_+=T}for(let S=0;S<o;S++){let T=0;for(let k=-4;k<=4;k++){const E=Math.min(o-1,Math.max(0,S+k));T+=s[E]*y[k+4]}m[S]=T/_}const $=l+Math.trunc(d*.3),x=l+Math.trunc(d*.78);let M=l+Math.trunc(d/2);if(x>$){let S=1/0;for(let T=$;T<x;T++)m[T]<S&&(S=m[T],M=T)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function eb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const d=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:o,height:s,channels:3,data:u}}function tb(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=vt(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=K_&&o<=Y_&&n++)}return t===0?0:n/t}function nb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=vt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=gr&&a<=yr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function mm(e,t){const n=et(e,t),r=new e.Mat;e.resize(n,r,new e.Size(cm,dm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:cm,height:dm,channels:3,data:i}}function rb(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function gm(e,t){const n=rb(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:_,s:$,v:x}=vt(n.data[y],n.data[y+1],n.data[y+2]);!(_>=gr&&_<=yr&&$>=30&&$<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const o=a<20,s=et(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,d=0,p=0,m=0;for(let g=0;g<r;g++)!o&&i[g]===0||(h+=l[g*3]*100/255,d+=l[g*3+1]-128,p+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[h/m,d/m,p/m]}function ib(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:d,v:p}=vt(e.data[l],e.data[l+1],e.data[l+2]);h>=gr&&h<=yr&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function ab(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=vt(e.data[i],e.data[i+1],e.data[i+2]);o>=hm&&s>=Q_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<hm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function ob(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function ym(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function sb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=mm(e,a);n.set(i,ym(e,o)),ei.includes(i)&&r.set(i,gm(e,o))}return{gray:n,warmLab:r}}function ub(e,t,n){const r=mm(e,t),i=ib(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return Jr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return pm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return fm;const a=ab(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=Jr;else if(s==="green")u=pm;else if(s==="red")u=fm;else{const l=ym(e,r);let h="",d=-2;for(const p of ei){const m=n.gray.get(p);if(m===void 0)continue;const g=ob(l,m);g>d&&(d=g,h=p)}u=h||ei[0]}if(ei.includes(u)&&n.warmLab.size>0){const l=gm(e,r);let h=u,d=1/0;for(const[p,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<d&&(d=g,h=p)}return h}return u}function lb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=q_(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(k_),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const _ of n.keys())p.set(_,{});const m=et(e,t);let g=null;try{for(const _ of o){if(r!==void 0&&Date.now()>r)break;const $=_.x+Math.trunc(_.w/2),x=_.y+Math.trunc(_.h/2),M=Math.max(P_,Math.trunc(B_*Math.max(_.w,_.h))),S=Math.max(0,$-M),T=Math.max(0,x-M),k=Math.min(t.width,$+M),E=Math.min(t.height,x+M);if(k-S<16||E-T<16)continue;const v=m.roi(new l.Rect(S,T,k-S,E-T)),C=new l.Mat;l.cvtColor(v,C,l.COLOR_RGB2GRAY);let N=null,V=-2;for(const[G,O]of n){if(r!==void 0&&Date.now()>r)break;const P=V_(e,v,C,O,p.get(G),h,d);P!==null&&P>V&&(V=P,N=G)}v.delete(),C.delete();const L=new Set;if(N!==null&&V>=N_){a.push({id:N,boundingBox:{x:_.x,y:_.y,width:_.w,height:_.h},confidence:1}),L.add(N);const G=H_(t,_,N);G&&(a.push({id:G.id,boundingBox:{x:G.box.x,y:G.box.y,width:G.box.w,height:G.box.h},confidence:.9}),L.add(G.id))}if(i===void 0||i.size===0)continue;const H=J_(s,u,_);if(H.length!==2)continue;const R=H.map(G=>eb(t,G));if(!R.some(G=>G.width*G.height===0||nb(G)<Z_))for(let G=0;G<H.length;G++){const O=R[G];if(tb(O)<X_)continue;g===null&&(g=sb(e,i));const P=ub(e,O,g);if(P&&!L.has(P)){L.add(P);const X=H[G];a.push({id:P,boundingBox:{x:X.x,y:X.y,width:X.w,height:X.h},confidence:1})}}}}finally{m.delete();for(const _ of p.values()){const $=_;for(const x of["gray","k","d"])try{(y=$[x])==null||y.delete()}catch{}}try{h.delete(),d.delete()}catch{}}return a}const wm=128,cb=.56,db=15,hb=.58,pb=70,fb=50,mb=.12,gb=.2,yb=.1,wb=.17,_m=.15;function _b(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function bm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),d=Math.min(n,o+u),p=Math.min(r,s+u),m=d-l,g=p-h,y=new Uint8Array(m*g*i);for(let _=0;_<g;_++){const $=((_+h)*n+l)*i;y.set(a.subarray($,$+m*i),_*m*i)}return{width:m,height:g,channels:i,data:y}}function bb(e){const t=bm(e,cb),n=dw(t),r=Xf(n,wm,wm);return hw(r)}function $b(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function xb(e){const t=new Map([["masonry",0],["strategy",0]]),n=bm(e,hb),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const m=p*a,{h:g,s:y,v:_}=vt(o[m],o[m+1],o[m+2]);y>=pb&&_>=fb&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const h=u/s,d=l/s;return h>=mb&&t.set("masonry",_m*Math.min(1,h/gb)),d>=yb&&t.set("strategy",_m*Math.min(1,d/wb)),t}function vb(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=bb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=db)a.push(mw(n,l,i));const o=new Map;for(const[l,h]of t){let d=-1/0;for(const p of a){const m=$b(p,h);m>d&&(d=m)}o.set(l,d)}for(const[l,h]of xb(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const en=224,Sb=512,Mb=[.485,.456,.406],Tb=[.229,.224,.225];function Ib(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function Eb(e){const t=io(e,en,en),n=en*en,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Mb[a])/Tb[a];return r}function kb(e){const t=3*en*en,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(Eb(Gt(e,r)),r*t);return n}function Cb(e,t=Sb){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function Ab(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Wn=96,Rb=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Ob=.45;function zb(e){const t=io(e,Wn,Wn),n=Wn*Wn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Nb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Ob?Rb[t]??"":"",prob:n}}const qn=128,Bb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],Pb=.5,Db=.9;function Ub(e){const t=Fn(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Lb(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,d=(o*n+s)*r;for(let p=0;p<r;p++)a[d+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function Fb(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=Lb(n);return n}function Gb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function Wb(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:Fb(e,i),o=await t(Ub(a)),s=Gb(o);s.prob>r&&(r=s.prob,n=s.index)}return{id:r>=Pb?Bb[n]??"":"",prob:r}}const Vn=96,qb=[1,2,3,4,5,6,7],Vb=.8;function Hb(e){const t=ao(e,e.width*2,e.height*2),n=Fn({width:e.width*2,height:e.height*2,channels:3,data:t},Vn,Vn),r=Vn*Vn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function jb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:qb[t],prob:e[t]}}const tn=128,$m=.35,Kb=["fp","laurel"],Yb=.85;function Xb(e){const r=(e.width<tn&&e.height<tn?ao:Fn)(e,tn,tn),i=tn*tn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function Zb(e){return e[Kb.indexOf("fp")]}const nn=128,Qb=.15,xm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],Jb=7,e1=.9;function t1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*Qb),h=Math.max(0,ct(s-l/2)),d=Math.max(0,ct(u-l/2)),p=Math.min(t,ct(s+l/2)),m=Math.min(n,ct(u+l/2));return p-h<8||m-d<8?null:{x:h,y:d,w:p-h,h:m-d}}function n1(e){const r=(e.width<nn&&e.height<nn?ao:Fn)(e,nn,nn),i=nn*nn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function r1(e){let t=0;for(let i=1;i<xm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=Jb;return{className:xm[t],probability:n,rejected:r&&n>=e1}}const i1=1,a1=1.5;function o1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function s1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function u1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function l1(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let h=null;for(const[p,m]of o1(e)){const g=s1(u,l,p,m);g!==null&&(h===null||g[0]<h[0])&&(h=g)}if(h===null)return null;const d=u1(e);return d===null?null:{distBord:h[0]/r,decalLat:h[1]/r,perpendiculaire:d!==o>s}}catch{return null}}function c1(e,t,n,r=i1,i=a1){const a=[];for(const[o,s]of t??[]){const u=l1(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const rn=64,vm=.5,d1=[.67,1.24];function h1(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let _=0;_<l;_++){const $=a+_,x=$-n;for(let M=0;M<u;M++){const S=i+M,T=S-t,k=(_*u+M)*3;if(T*T+x*x<=p){const E=($*e.width+S)*h;d[k]=e.data[E],d[k+1]=e.data[E+1],d[k+2]=e.data[E+2]}else d[k]=255,d[k+1]=255,d[k+2]=255}}const m=Fn({width:u,height:l,channels:3,data:d},rn,rn),g=rn*rn,y=new Float32Array(3*g);for(let _=0;_<g;_++)for(let $=0;$<3;$++)y[$*g+_]=m[_*3+$]/255;return y}function p1(e){return e[1]}const f1=2.25,m1=3,g1=1.15,y1=.5,w1=2.5,_1=.75,b1=2.25,$1=1.3,x1=.77;function ti(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function v1(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Sm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function S1(e,t,n){if(n.length>=3&&Sm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,d=l-s,p=h*h+d*d,m=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*d)/p));r=Math.min(r,Math.hypot(e-(o+m*h),t-(s+m*d)))}return r}function M1(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function T1(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let d=0,p=1;const m=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const _=y/g;if(g<0?d=Math.max(d,_):p=Math.min(p,_),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const So=e=>e.box[3]/Math.max(1,e.box[2]),qt=e=>So(e)>g1,Hn=e=>So(e)>=$1||So(e)<=x1;function Mo(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Mm(e,t,n,r,i){const a=new Set(t),o=[...e.map((O,P)=>({box:[O[0],O[1],O[2],O[3]],kind:a.has(P)?"card":"tucked",src:["banner",P]})),...n.map((O,P)=>({box:[O[0],O[1],O[2],O[3]],kind:"wonder",src:["wonder",P]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player"};const l=o.map(O=>[O.box[0]+O.box[2]/2,O.box[1]+O.box[3]/2]);let h=o.filter(O=>O.kind!=="wonder").map(O=>Math.hypot(O.box[2],O.box[3])).sort((O,P)=>O-P);h.length===0&&(h=o.map(O=>Math.hypot(O.box[2],O.box[3])).sort((O,P)=>O-P));const d=h[Math.floor(h.length/2)],p=(f1*d)**2,m=o.map((O,P)=>P),g=O=>{let P=O;for(;m[P]!==P;)m[P]=m[m[P]],P=m[P];return P},y=o.map((O,P)=>O.kind==="card"?P:-1).filter(O=>O>=0),_=o.map((O,P)=>O.kind!=="card"?P:-1).filter(O=>O>=0);for(let O=0;O<y.length;O+=1)for(let P=O+1;P<y.length;P+=1){const X=y[O],z=y[P],Q=o[X],D=o[z];if(Hn(Q)&&Hn(D)&&qt(Q)!==qt(D))continue;const j=l[X][0]-l[z][0],F=l[X][1]-l[z][1],W=j*j+F*F;let ne=W<=p;!ne&&Hn(Q)&&Hn(D)&&qt(Q)===qt(D)&&W<=(4*d)**2&&(ne=ti(Mo(Q),Mo(D))<=.5*d),ne&&(m[g(X)]=g(z))}for(let O=0;O<_.length;O+=1)for(let P=O+1;P<_.length;P+=1){const X=_[O],z=_[P];ti(o[X].box,o[z].box)<=_1*d&&(m[g(X)]=g(z))}const $=new Map;for(const O of _){const P=g(O);$.set(P,[...$.get(P)??[],O])}const x=new Map;for(const O of y){const P=g(O);x.set(P,[...x.get(P)??[],O])}for(const O of $.values()){const P=O.filter(D=>o[D].kind==="wonder"&&Hn(o[D])).map(D=>qt(o[D])),X=P.length>0?P.filter(Boolean).length*2>P.length:null,z=[];for(const[D,j]of x){let F=Number.POSITIVE_INFINITY;for(const he of O)for(const ae of j)F=Math.min(F,ti(o[he].box,o[ae].box));if(F>b1*d)continue;const ne=j.filter(he=>qt(o[he])).length/j.length>=.5;X!==null&&ne!==X||z.push([D,F,ne])}if(z.length===0)continue;const Q=new Set(z.map(D=>D[2]));if(z.length>=2&&Q.size===1&&X!==null){const D=z[0][0];for(const[j]of z.slice(1))m[g(j)]=g(D);m[g(O[0])]=g(D)}else{const D=z.reduce((j,F)=>F[1]<j[1]?F:j);m[g(O[0])]=g(D[0])}}let M=new Map;for(let O=0;O<o.length;O+=1){const P=g(O);M.set(P,[...M.get(P)??[],O])}const S=o.map((O,P)=>O.kind==="wonder"?P:-1).filter(O=>O>=0);if(S.length>0){const O=(X,z)=>{const[Q,D,j,F]=Mo(o[X]),[W,ne,he,ae]=o[z].box,xe=Math.max(0,Math.min(Q+j,W+he)-Math.max(Q,W)),Re=Math.max(0,Math.min(D+F,ne+ae)-Math.max(D,ne));return xe*Re>=.9*o[X].box[2]*o[X].box[3]},P=new Map;for(let X=0;X<o.length;X+=1)if(!(o[X].kind!=="card"||!Hn(o[X])))for(const z of S){const Q=ti(o[X].box,o[z].box);if(Q<=.8*d&&qt(o[X])!==qt(o[z])&&O(X,z)){const D=P.get(z);(!D||Q<D[1])&&P.set(z,[X,Q])}}for(const[X,[z]]of P){const Q=g(X);for(const[D,j]of M){const F=j.indexOf(z);if(F>=0&&D!==Q){j.splice(F,1),M.set(Q,[...M.get(Q)??[],z]),o[z].kind="tucked";break}}}M=new Map([...M].filter(([,X])=>X.length>0))}const T=O=>O.filter(P=>o[P].kind==="card").length,k=O=>{const P=O.filter(X=>o[X].kind==="card"||o[X].kind==="wonder");return P.length===0?null:P.filter(X=>qt(o[X])).length/P.length},E=O=>[O.reduce((P,X)=>P+l[X][0],0)/O.length,O.reduce((P,X)=>P+l[X][1],0)/O.length],v=[i[0]/2,i[1]/2],C=[...M.values()].sort((O,P)=>{const X=T(O),z=T(P);if(X!==z)return z-X;const Q=Math.hypot(E(O)[0]-v[0],E(O)[1]-v[1]),D=Math.hypot(E(P)[0]-v[0],E(P)[1]-v[1]);return Q-D}),N=E(C[0]),V=k(C[0]),L=[],H=[];let R=!1;C.forEach((O,P)=>{let X;if(P===0||T(O)<m1)X="player";else{const D=k(O),j=D!==null&&V!==null&&Math.abs(D-V)>=y1,F=E(O),W=r.some(ne=>T1(N,F,ne));X=j||W?"opponent":"player"}X==="opponent"&&(R=!0);const z=[],Q=[];for(const D of O){const[j,F,W,ne]=o[D].box;z.push([j,F],[j+W,F],[j,F+ne],[j+W,F+ne]),Q.push(o[D].box);const[he,ae]=o[D].src;he==="banner"?s[ae]=X:u[ae]=X}L.push([X,v1(z)]),H.push([X,Q])});const G=(O,P)=>{if(L.length===0)return"player";const X=d>0?w1*d:Number.POSITIVE_INFINITY,z=F=>Math.min(...H[F][1].map(W=>M1(O,P,W))),Q=L.map(([,F],W)=>F.length>=3&&Sm(O,P,F)?W:-1).filter(F=>F>=0);if(Q.length>0){const F=Q.reduce((W,ne)=>z(ne)<z(W)?ne:W);return L[F][0]}let D=-1,j=Number.POSITIVE_INFINITY;return L.forEach(([,F],W)=>{const ne=S1(O,P,F);ne<j&&(D=W,j=ne)}),D>=0&&j<=X?L[D][0]:"none"};return{bannerOwner:s,wonderOwner:u,opponentFound:R,hulls:L,hullBoxCounts:H.map(([,O])=>O.length),pointOwner:G}}const I1=1280,E1=80,k1=3,C1=3,A1=.3,R1=2.4,O1=1,z1=5.2,N1=5;function To(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function B1(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=A1&&r/n<=R1&&i/n>=O1&&i/n<=z1&&i/r<=N1}function P1(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*I1/r<E1}function D1(e,t,n,r){const i=To(n);if(!P1(e,t,i))return[];const a=r.filter(u=>u.n>=C1&&u.poly.length>0).slice().sort((u,l)=>l.n-u.n).slice(0,2),o=Math.round(i*k1),s=[];for(const u of a){const l=u.poly.map(y=>y[0]),h=u.poly.map(y=>y[1]),d=Math.max(0,Math.trunc(Math.min(...l))-o),p=Math.max(0,Math.trunc(Math.min(...h))-o),m=Math.min(e,Math.trunc(Math.max(...l))+o),g=Math.min(t,Math.trunc(Math.max(...h))+o);m>d&&g>p&&s.push([d,p,m,g])}return s}function U1(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return B1(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}const L1=1.1,F1=3.2,G1=20,W1=.5,q1=1280,V1=.18,H1=28,j1=.3;function K1(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,d)=>d)];const l=(s.reduce((h,d)=>h+d,0)/s.length+u.reduce((h,d)=>h+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function Y1(e,t,n=L1){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of K1(s)){if(l.length===0)continue;const h=l.map(C=>e[C]),d=h.map(C=>Math.min(C[2],C[3])).sort((C,N)=>C-N),p=d[Math.trunc(d.length/2)],m=F1*p,g=Math.max(0,Math.min(...h.map(C=>C[0]))-m),y=Math.max(0,Math.min(...h.map(C=>C[1]))-m),_=Math.min(r,Math.max(...h.map(C=>C[0]+C[2]))+m),$=Math.min(i,Math.max(...h.map(C=>C[1]+C[3]))+m),x=Math.max(_-g,$-y);if(x<=0)continue;const M=W1*p*q1/x,S=M>0?Math.max(1,Math.ceil(G1/M)):1;if(S===1){u.push([Math.trunc(g),Math.trunc(y),Math.trunc(_),Math.trunc($)]);continue}const T=_-g>=$-y,E=(T?_-g:$-y)/S,v=E*(1+V1);for(let C=0;C<S;C++){let N=(T?g:y)+C*E-(v-E)/2;N=Math.max(T?g:y,N);const V=Math.min(T?_:$,N+v);u.push(T?[Math.trunc(N),Math.trunc(y),Math.trunc(V),Math.trunc($)]:[Math.trunc(g),Math.trunc(N),Math.trunc(_),Math.trunc(V)])}}return u.filter(([l,h,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-h))>=n)}function X1(e,t,n,r=H1){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const d=(s+l)/2+i,p=(u+h)/2+a;o.some(([g,y,_,$])=>{const x=d-(g+_)/2,M=p-(y+$)/2;return Math.hypot(x,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function Z1(e,t,n,r=j1){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function Q1(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function J1(e,t,n,r){return n.length===0?!1:Q1(e,t,n)&&!Z1(e,t,r)}const Tm=4,Im=8,ni=5,kn="base-game rule";function At(e,t){return{code:e,message:t,severity:"warning"}}function Io(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function e2(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Tm&&i.push(At("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Tm} (${kn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=Io(n);return a.length>0&&i.push(At("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${kn}), so one of the two readings is wrong.`)),i}function t2(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Im&&t.push(At("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Im} are in play (${kn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(d=>l.has(d)).sort();h.length>0&&t.push(At("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function n2(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>ni&&n.push(At("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ni} are in play (${kn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Io(r);if(i.length>0&&n.push(At("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${kn}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==ni&&n.push(At("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${ni} are in play (${kn}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(At("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function r2(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(At("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=Io(e.filter(o=>!!o));return a.length>0&&r.push(At("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${kn}).`)),r}const i2=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],a2=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],o2=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],s2=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],u2=[...a2,...o2,...s2,...i2];Object.fromEntries(u2.map(e=>[e.id,e]));const l2=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Be="/7wd-scorer/models/";let Em=!1;const ri=new Map;function km(){var e;Em||(Ue.wasm.wasmPaths="/7wd-scorer/ort/",Ue.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Em=!0)}const Eo=new Set;function c2(e){km();let t=ri.get(e);return t===void 0&&(t=tt.create(`${Be}${dt[e].onnx}`,{executionProviders:Eo.has(e)?["wasm"]:["webgpu","wasm"]}),ri.set(e,t),t.catch(()=>ri.delete(e))),t}let ko=null,Co=null;const d2=.75,h2=4,p2=.65,f2=3e4;let Ao=null;function Ro(){return Ao===null&&(Ao=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Ao}const Cm=new Map;function Oo(e){let t=Cm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Be}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Cm.set(e,t)),t}function zo(e){return Oo(`wonder-refs/${e}.jpg`)}const Am=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function m2(){const e=new Map;for(const t of Am){const n=await Oo(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function g2(){const e=new Map;for(const t of Am){const n=await Oo(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const y2=.6,w2=12,_2=45e3;let No=null;function Rm(){return No===null&&(km(),No=(async()=>{try{const[e,t,n,r]=await Promise.all([tt.create(`${Be}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),tt.create(`${Be}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Be}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Be}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Kw(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),No}async function b2(e,t){const n=Math.max(jw/Wt,t.width/t.height),{tensor:r,width:i}=Xw(t,n),a={[e.rec.inputNames[0]]:new Ge("float32",r,[1,3,Wt,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,d=new Array(u),p=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const _=m*l;for(let $=0;$<l;$++){const x=h[_+$];x>y&&(y=x,g=$)}d[m]=g,p[m]=y}return Yw(d,p,e.charset)}async function $2(e,t){const n=await Rm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+_2;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=Gt(e,o),u=Pw(s),l={[n.det.inputNames[0]]:new Ge("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],d=Ww(h.data,u,s.width,s.height).slice(0,w2);console.debug(`[wonders-ocr] rot ${o*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){a=!0;break e}const m=qw(s,p.quad);if(m.width<m.height*1.5)continue;const[g,y]=await b2(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<y2||g.trim().length<h2)continue;const _=r_(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",_),_===null||_.confidence<d2||_.kind!=="wonder")continue;const $=r.get(_.id);($===void 0||_.confidence>$.confidence)&&r.set(_.id,{id:_.id,name:_.name,confidence:_.confidence,nameBox:Bo(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Bo(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(d=>d[0]),u=o.map(d=>d[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function x2(){return Co===null&&(Co=fetch(`${Be}laurel_gallery.json`).then(async e=>e.ok?Mw(await e.json()):[]).catch(()=>[])),Co}function v2(e,t,n,r){return an(e,t-r,n-r,2*r,2*r)}function an(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),d=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=((p+o)*e.width+(m+a))*e.channels,y=(p*l+m)*3;d[y]=e.data[g],d[y+1]=e.data[g+1],d[y+2]=e.data[g+2]}return{width:l,height:h,channels:3,data:d}}function S2(){return ko===null&&(ko=fetch(`${Be}token_templates.json`).then(async e=>e.ok?_b(await e.json()):new Map).catch(()=>new Map)),ko}let Po=null;function M2(){return Po===null&&(Po=(async()=>{try{const e=await fetch(`${Be}token_embed_index.json`);if(!e.ok)return null;const t=Ib(await e.json());return{session:await tt.create(`${Be}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),Po}const T2=.92;let Do=null;function I2(){return Do===null&&(Do=(async()=>{try{return(await fetch(`${Be}guild_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Do}let Uo=null;function E2(){return Uo===null&&(Uo=(async()=>{try{return(await fetch(`${Be}laurel_digit.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Uo}let Lo=null,Fo=null;function k2(){return Fo===null&&(Fo=(async()=>{try{return(await fetch(`${Be}banner_class.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}banner_class.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Fo}async function C2(e,t){if(t.length===0)return t;const n=await k2();if(n===null)return t;const r=[];for(const i of t)try{const a=t1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=an(e,a.x,a.y,a.w,a.h),s=n1(o),u=await n.run({[n.inputNames[0]]:new Ge("float32",s,[1,3,nn,nn])});r1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function A2(){return Lo===null&&(Lo=(async()=>{try{return(await fetch(`${Be}laurel_filter.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Lo}async function R2(e,t,n){const[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc($m*s),h=Math.trunc($m*u),d=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(e.width,a+l),g=Math.min(e.height,o+h),y=an(e,d,p,m-d,g-p);if(y.width<=0||y.height<=0)return null;try{const _=Xb(y),$=await n.run({[n.inputNames[0]]:new Ge("float32",_,[1,3,tn,tn])});return Zb($[n.outputNames[0]].data)}catch{return null}}let Go=null;function O2(){return Go===null&&(Go=(async()=>{try{return(await fetch(`${Be}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Go}async function z2(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=h1(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const h=new Float32Array(t.length*3*rn*rn);l.forEach((m,g)=>h.set(m,g*m.length));const p=(await n.run({[n.inputNames[0]]:new Ge("float32",h,[t.length,3,rn,rn])}))[n.outputNames[0]].data;return t.map((m,g)=>p1(p.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let Wo=null;function Om(){return Wo===null&&(Wo=(async()=>{try{return(await fetch(`${Be}tuck_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Wo}const zm=.2,N2=.3,Nm=.25,Bm=.1;let qo=null;function Pm(){return qo===null&&(qo=(async()=>{try{return(await fetch(`${Be}track_band.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),qo}async function Dm(e,t,n){try{const r=oo(t,1280,Oy(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new Ge("float32",r.tensor,[1,3,1280,1280])});return fr(i[e.outputNames[0]].data,r.params,Bm)}catch{return[]}}let Vo=null;function B2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Nm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=Nm)&&r>1==h>1)return!0}return!1}const P2=.4;function D2(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function U2(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||D2(a,u)>=P2)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function L2(){return Vo===null&&(Vo=(async()=>{try{return(await fetch(`${Be}tuck_box.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Vo}async function F2(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*zm),u=Math.round(o*zm),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),d=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),m=d-l,g=p-h;if(m<=0||g<=0)return null;const y=e.channels,_=new Uint8ClampedArray(m*g*y);for(let M=0;M<g;M++){const S=((h+M)*e.width+l)*y;_.set(e.data.subarray(S,S+m*y),M*m*y)}const $={width:m,height:g,channels:y,data:_};let x=null;for(let M=0;M<4;M++){const S=M===0?$:Gt($,M),T=S.width,k=T-Math.floor(N2*T),E=T-k;if(E<=0)continue;const v=new Uint8ClampedArray(E*S.height*S.channels);for(let H=0;H<S.height;H++){const R=(H*T+k)*S.channels;v.set(S.data.subarray(R,R+E*S.channels),H*E*S.channels)}const C={width:E,height:S.height,channels:S.channels,data:v},N=xo(C),L=(await n.run({[n.inputNames[0]]:new Ge("float32",N,[1,3,Ct,Ct])}))[n.outputNames[0]].data[1]??0;x=x===null?L:Math.max(x,L)}return x}let Ho=null;function G2(){return Ho===null&&(Ho=(async()=>{try{return(await fetch(`${Be}wonder_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ho}async function W2(e,t,n,r,i,a){var p;const o=(m,g,y,_)=>{const $=Math.max(0,Math.round(m)),x=Math.max(0,Math.round(g)),M=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+_)),T=M-$,k=S-x;if(T<=0||k<=0)return null;const E=t.channels,v=new Uint8ClampedArray(T*k*E);for(let C=0;C<k;C++){const N=((x+C)*t.width+$)*E;v.set(t.data.subarray(N,N+T*E),C*T*E)}return{width:T,height:k,channels:E,data:v}},s=async m=>(await r.run({[r.inputNames[0]]:new Ge("float32",m,[1,3,qn,qn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,_,$]=m;if(_<=0||$<=0)continue;const x=o(g,y,_,$);if(x===null)continue;const{id:M,prob:S}=await Wb(x,s);if(M===""||S<Db)continue;const T=u.get(M);(T===void 0||S>T.prob)&&u.set(M,{prob:S,box:m})}const l=[],h=await Om(),d=await L2();for(const[m,{prob:g,box:y}]of u){const[_,$,x,M]=y;let S={x:Math.round(_),y:Math.round($),width:Math.round(x),height:Math.round(M)},T=null,k=[],E=null;if(Date.now()<i)try{const G=await zo(m);if(G!==null){const O=sm(e,t,G,y);if(O!==null){T=O.footprint,k=O.overflow;const P=T.map(D=>D[0]),X=T.map(D=>D[1]),z=Math.max(0,Math.round(Math.min(...P))),Q=Math.max(0,Math.round(Math.min(...X)));if(S={x:z,y:Q,width:Math.min(t.width,Math.round(Math.max(...P)))-z,height:Math.min(t.height,Math.round(Math.max(...X)))-Q},h!==null)try{const D=om(e,t,G,T);if(D!==null){const j=xo(D),F=await h.run({[h.inputNames[0]]:new Ge("float32",j,[1,3,Ct,Ct])});E=lm(F[h.outputNames[0]].data).prob}}catch{}}}}catch(G){console.warn(`[wonders-cls] ${m} registration failed:`,G)}const v=T!==null?bo(T,k):null,C=[];if(E!==null&&C.push(E>=$o?1:0),d!==null)try{const G=await F2(t,y,d);G!==null&&C.push(G>=$o?1:0)}catch{}const N=v??S,V=a.some(G=>{const O=G.box[0]+G.box[2]/2,P=G.box[1]+G.box[3]/2;return O>=N.x&&O<=N.x+N.width&&P>=N.y&&P<=N.y+N.height});C.push(V?1:0);let L=C.length>0&&C.reduce((G,O)=>G+O,0)*2>C.length;L&&B2(N,S,a)&&(L=!1);const H={id:m,name:((p=l2[m])==null?void 0:p.name)??m,builtWithCardUnderneath:L,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},R=v??S;l.push({obj:H,edgeScores:null,zone:{x0:R.x,y0:R.y,x1:R.x+R.width,y1:R.y+R.height},quad:T,region:v})}return l}async function q2(e,t){const n=await M2();if(n!==null)try{const r=kb(e),i=new Ge("float32",r,[4,3,en,en]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=Ab(n.index,Cb(o));return u<T2?["",-1]:[s,u]}catch{}return vb(e,t)}async function jo(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function St(e,t){const n=dt[e],{tensor:r,params:i}=oo(t,n.input),a=async()=>{const o=await c2(e),s={[o.inputNames[0]]:new Ge("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(Eo.has(e))throw o;return Eo.add(e),ri.delete(e),await a()}}const V2=6,H2=2,j2=5,K2=2;async function Y2(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await jo(e),r=await St("banner",n),i=Xr(r.rows,r.params,dt.banner.conf);if(t.banners=i.length,i.length>=V2)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await St("laurel",n),o=fr(a.rows,a.params,dt.laurel.conf);if(t.laurels=o.length,o.length>=H2)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await St("coin",n),u=Gf(s.rows,s.params,dt.coin.conf);return t.coins=u.length,u.length>=j2?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=K2?{...t,kind:"board",confidence:.4}:t}function X2(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Ko(e,t,n,r,i=()=>{},a="player"){const o={},s=[],u=[],l=[],h=[],d=[],p=[];let m=0,g=0,y=0,_=0,$=0;for(const E of e){$+=1;const v=`${t} photo ${$}/${e.length}`;r(`${v}: reading pixels…`,.01);const C=await jo(E);r(`${v}: card banners…`,.04);const N=await St("banner",C);let V=Xr(N.rows,N.params,dt.banner.conf);V=await C2(C,V),r(`${v}: progress tokens…`,.08);let L=[];const H=await Pm();H!==null&&(L=await Dm(H,C,V)),L.length>0&&V.length>0&&(V=V.filter(U=>{const Z=U.box[0]+U.box[2]/2,J=U.box[1]+U.box[3]/2;return!L.some(([re,oe,de,Ie])=>Math.min(re,de)<=Z&&Z<=Math.max(re,de)&&Math.min(oe,Ie)<=J&&J<=Math.max(oe,Ie))}));const R=await St("token",C),G=await S2(),O=l.length,P=[];for(const U of Ly(R.rows,R.params,dt.token.conf)){if(P.push({cx:U.cx,cy:U.cy,r:U.r}),L.some(([re,oe,de,Ie])=>U.cx>=re&&U.cx<=de&&U.cy>=oe&&U.cy<=Ie))continue;const[Z,J]=await q2(Yf(C,U),G);Z===""&&J<0?P.pop():Z===""?g+=1:l.some(re=>re.id===Z)||l.push({id:Z,center:[U.cx,U.cy],radius:U.r,confidence:Math.round(J*1e4)/1e4})}r(`${v}: coins…`,.14);const X=await St("coin",C),z=Gf(X.rows,X.params,dt.coin.conf).filter(U=>!P.some(Z=>(U.cx-Z.cx)**2+(U.cy-Z.cy)**2<=U.r*U.r)),Q=await O2(),D=Q!==null?await z2(C,z,Q):null,j=(D!==null?z.filter((U,Z)=>D[Z]>=vm).map(U=>U.r):[]).sort((U,Z)=>U-Z),F=j.length>0?j.length%2===1?j[(j.length-1)/2]:(j[j.length/2-1]+j[j.length/2])/2:null,[W,ne]=d1,he=z.map((U,Z)=>{const J=D!==null?D[Z]:null;return J===null||J>=vm?"keep":F!==null&&F>0&&U.r/F>=W&&U.r/F<=ne?"suspect":"drop"}),ae=z.filter((U,Z)=>he[Z]==="keep"),xe=cw(C,ae),Re=[];let Xe=0;if(z.forEach((U,Z)=>{if(he[Z]!=="drop"){if(he[Z]==="suspect"){const J=D[Z];Re.push({denomination:null,center:[U.cx,U.cy],radius:U.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${J.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}Re.push({denomination:xe[Xe++],center:[U.cx,U.cy],radius:U.r,denomSource:"colour"})}}),z.length>0&&Re.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${z.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),Re.length>=2){const U=Re.map(J=>J.radius).sort((J,re)=>J-re),Z=U.length%2===1?U[(U.length-1)/2]:(U[U.length/2-1]+U[U.length/2])/2;if(Z>0)for(const J of Re)J.radius/Z>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/Z).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const He=h.length,je=[],Oe=[],ge=Date.now()+f2;let We=null,on=null;const sn=()=>(on===null&&(on=(async()=>{try{const{rows:U,params:Z}=await St("wonder",C);return Pf(U,Z,dt.wonder.conf,Number.POSITIVE_INFINITY).map(J=>J.box)}catch{return[]}})()),on),it=[];let Rt=!1;const wr=await G2();if(wr!==null){const U=await sn();if(U.length>0&&(We=await Ro(),We!==null)){r(`${v}: identifying wonders…`,.35);const Z=await W2(We,C,U,wr,ge,V);for(const J of Z)h.some(re=>re.id===J.obj.id)||(h.push(J.obj),it.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),je.push(J.zone),Oe.push({quad:J.quad,region:J.region}));Rt=Z.length>0}}Rt||r(`${v}: wonder names…`,.2);const ht=Rt?{wonders:[],aborted:!1}:await $2(C,(U,Z)=>r(`${v}: ${U}`,.2+.35*(Z??0)));We===null&&(We=ht.wonders.length>0?await Ro():null);for(const U of ht.wonders){let Z=null;if(We!==null&&Date.now()<ge){r(`${v}: registering ${U.name}…`,.6);try{const J=await zo(U.id);if(J!==null){let re=m_(We,C,J,[[U.nameBox.x,U.nameBox.y],[U.nameBox.x+U.nameBox.width,U.nameBox.y],[U.nameBox.x+U.nameBox.width,U.nameBox.y+U.nameBox.height],[U.nameBox.x,U.nameBox.y+U.nameBox.height]]);if(re===null){const oe=await sn(),de=b_(oe,U.nameBox.x+U.nameBox.width/2,U.nameBox.y+U.nameBox.height/2);de!==null&&(re=sm(We,C,J,de))}if(re!==null){let oe=re.built,de=!1;const Ie=await Om();if(Ie!==null)try{const we=om(We,C,J,re.footprint);if(we!==null){const Ce=xo(we),qe=await Ie.run({[Ie.inputNames[0]]:new Ge("float32",Ce,[1,3,Ct,Ct])});oe=lm(qe[Ie.outputNames[0]].data).built,de=!0}}catch{}const Te=re.footprint.map(we=>we[0]),pe=re.footprint.map(we=>we[1]),fe=Math.max(0,Math.round(Math.min(...Te))),le=Math.max(0,Math.round(Math.min(...pe)));Z={built:oe,boundingBox:{x:fe,y:le,width:Math.min(C.width,Math.round(Math.max(...Te)))-fe,height:Math.min(C.height,Math.round(Math.max(...pe)))-le},tuckRegion:bo(re.footprint,re.overflow),footprint:re.footprint,edgeScores:re.edgeScores,builtByTuck:de}}}}catch(J){console.warn(`[wonders-reg] ${U.id} failed:`,J)}}if(Z!==null){const J=Z.tuckRegion??Z.boundingBox;je.push({x0:J.x,y0:J.y,x1:J.x+J.width,y1:J.y+J.height}),Oe.push({quad:Z.footprint,region:Z.tuckRegion})}else{const J=Math.max(8,U.nameBox.height),re=Math.round(U.nameBox.width*.15);je.push({x0:U.nameBox.x-re,y0:U.nameBox.y-J*2.5,x1:U.nameBox.x+U.nameBox.width+re,y1:U.nameBox.y+U.nameBox.height+J*2.5}),Oe.push({quad:null,region:null})}if(!h.some(J=>J.id===U.id)){const J=(Z==null?void 0:Z.builtByTuck)===!0,re=J?Z.built:!1,oe=!J&&(Z==null?void 0:Z.built)===!0,de={id:U.id,name:U.name,builtWithCardUnderneath:re,boundingBox:(Z==null?void 0:Z.boundingBox)??{x:0,y:0,width:0,height:0},...Z!=null&&Z.tuckRegion?{tuckRegion:Z.tuckRegion}:{},confidence:U.confidence,...oe?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};h.push(de),it.push({obj:de,edgeScores:Z&&!Z.builtByTuck?Z.edgeScores:null,zone:je[je.length-1]})}}if(!Rt){const U=v_(it.map(Z=>({built:Z.obj.builtWithCardUnderneath,edgeScores:Z.edgeScores,zone:Z.zone})),V.map(Z=>[Z.box[0]+Z.box[2]/2,Z.box[1]+Z.box[3]/2]));for(const Z of U){const J=it[Z];J.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(V.length>0){const Z=new Set(U);for(let J=0;J<it.length;J++){const re=it[J];if(Z.has(J)||!re.obj.builtWithCardUnderneath)continue;const oe=re.obj.tuckRegion;if(oe===void 0)continue;if(!V.some(Ie=>{const Te=Ie.box[0]+Ie.box[2]/2,pe=Ie.box[1]+Ie.box[3]/2;return Te>=oe.x&&Te<=oe.x+oe.width&&pe>=oe.y&&pe<=oe.y+oe.height})){const Ie=re.obj;Ie.builtWithCardUnderneath=!1,Ie.suspect=!0,Ie.suspectReason="built-unconfirmed"}}}}if(ht.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${v}: the wonder-name read ran out of its time budget on this device — ${ht.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),We!==null&&ht.wonders.length>0&&Date.now()<ge)try{const U=await Rm(),Z=(U==null?void 0:U.catalog.filter(re=>re.kind==="wonder").map(re=>re.id))??[],J=new Map;for(const re of Z)if(!h.some(oe=>oe.id===re)){const oe=await zo(re);oe!==null&&J.set(re,oe)}if(J.size>0){r(`${v}: searching occluded wonders…`,.7);const re=f_(We,C,J,ge);for(const oe of re){const de=oe.footprint.map(qe=>qe[0]),Ie=oe.footprint.map(qe=>qe[1]),Te=Math.max(0,Math.round(Math.min(...de))),pe=Math.max(0,Math.round(Math.min(...Ie))),fe={x:Te,y:pe,width:Math.min(C.width,Math.round(Math.max(...de)))-Te,height:Math.min(C.height,Math.round(Math.max(...Ie)))-pe};if(h.some(qe=>{const Pe=qe.boundingBox,cn=Math.max(0,Math.min(Pe.x+Pe.width,fe.x+fe.width)-Math.max(Pe.x,fe.x)),zt=Math.max(0,Math.min(Pe.y+Pe.height,fe.y+fe.height)-Math.max(Pe.y,fe.y)),Ne=cn*zt,Ke=Pe.width*Pe.height+fe.width*fe.height-Ne;return Ke>0&&Ne/Ke>p_}))continue;const we=U==null?void 0:U.catalog.find(qe=>qe.id===oe.id);h.push({id:oe.id,name:(we==null?void 0:we.nameFr)??(we==null?void 0:we.name)??oe.id,builtWithCardUnderneath:oe.built,boundingBox:fe,...oe.tuckRegion?{tuckRegion:oe.tuckRegion}:{},confidence:Math.round(oe.confidence*1e4)/1e4});const Ce=oe.tuckRegion??fe;je.push({x0:Ce.x,y0:Ce.y,x1:Ce.x+Ce.width,y1:Ce.y+Ce.height}),Oe.push({quad:oe.footprint.map(([qe,Pe])=>[qe,Pe]),region:oe.tuckRegion??null})}}}catch(U){console.warn("[wonders-reg] discovery failed:",U)}const Vt=a==="opponent";let jn=(U,Z)=>!Vt,_r=(U,Z)=>!Vt;try{const U=h.slice(He),Z=[];V.forEach((pe,fe)=>{const le=pe.box[0]+pe.box[2]/2,we=pe.box[1]+pe.box[3]/2;je.some(Ce=>le>=Ce.x0&&le<=Ce.x1&&we>=Ce.y0&&we<=Ce.y1)||Z.push(fe)});const J=[],re=[];U.forEach((pe,fe)=>{const le=pe.boundingBox;le&&le.width>0&&(J.push(fe),re.push([le.x,le.y,le.width,le.height]))});const oe=pe=>{const fe=[];return pe.forEach((le,we)=>{const Ce=le.box[0]+le.box[2]/2,qe=le.box[1]+le.box[3]/2;je.some(Pe=>Ce>=Pe.x0&&Ce<=Pe.x1&&qe>=Pe.y0&&qe<=Pe.y1)||fe.push(we)}),fe};let de=Mm(V.map(pe=>pe.box),Z,re,L,[C.width,C.height]);try{const pe=D1(C.width,C.height,V.map(fe=>fe.box),de.hulls.map(([fe,le],we)=>({owner:fe,poly:le,n:de.hullBoxCounts[we]??0})));if(pe.length>0){const fe=To(V.map(we=>we.box)),le=[];for(const we of pe){const[Ce,qe,Pe,cn]=we,zt=an(C,Ce,qe,Pe-Ce,cn-qe);if(zt.width<=0||zt.height<=0)continue;const Ne=await St("banner",zt);for(const Ke of Xr(Ne.rows,Ne.params,dt.banner.conf)){const at=U1(Ke.box,we,fe);at&&le.push({...Ke,box:at})}}if(le.length>0){const we=Vf([...V,...le]);we.length>V.length&&(V=we,de=Mm(V.map(Ce=>Ce.box),oe(V),re,L,[C.width,C.height]))}}}catch(pe){console.warn("[#129 city-rescan] skipped:",pe)}jn=(pe,fe)=>de.pointOwner(pe,fe)==="opponent"===Vt;const Ie=Vt?"opponent":"player";_r=(pe,fe)=>de.pointOwner(pe,fe)===Ie,V=V.filter((pe,fe)=>de.bannerOwner[fe]==="opponent"===Vt);const Te=U.map(()=>"player");J.forEach((pe,fe)=>{Te[pe]=de.wonderOwner[fe]});for(let pe=U.length-1;pe>=0;pe-=1)Te[pe]==="opponent"!==Vt&&h.splice(He+pe,1);je.length=0;for(const pe of h.slice(He)){const fe=pe.tuckRegion??pe.boundingBox;fe&&je.push({x0:fe.x,y0:fe.y,x1:fe.x+fe.width,y1:fe.y+fe.height})}for(let pe=l.length-1;pe>=O;pe-=1){const[fe,le]=l[pe].center;jn(fe,le)||l.splice(pe,1)}}catch(U){console.warn("[city-split] failed (side unfiltered):",U)}for(const U of Re)_r(U.center[0],U.center[1])&&(m+=U.denomination??0,u.push(U));const br=new Set,Tt=[],Zo=To(V.map(U=>U.box));Oe.forEach((U,Z)=>{if(U.quad===null||U.region===null){const de=je[Z];de&&Tt.push(de);return}const J=U.region,re=[];V.forEach((de,Ie)=>{const Te=de.box[0]+de.box[2]/2,pe=de.box[1]+de.box[3]/2;Te>=J.x&&Te<=J.x+J.width&&pe>=J.y&&pe<=J.y+J.height&&re.push([Ie,de.box])});const oe=c1(U.quad,re,Zo);oe!==null&&br.add(oe)});const Ot=[];V.forEach((U,Z)=>{if(br.has(Z)){_+=1;return}const J=U.box[0]+U.box[2]/2,re=U.box[1]+U.box[3]/2;if(Tt.some(oe=>J>=oe.x0&&J<=oe.x1&&re>=oe.y0&&re<=oe.y1)){_+=1;return}Ot.push(U),o[U.family]=(o[U.family]??0)+1,y+=1});const un=Ky(Ot),Qo=new Set(un.map(U=>U.box.join(",")));for(const U of Xy(Ot))Qo.has(U.box.join(","))||un.push(U);for(const U of un)p.push(U);if(Ot.some(U=>U.family==="guild")){const U=await I2();if(U!==null){r(`${v}: identifying guilds…`,.75);for(const Z of Ot)if(Z.family==="guild")try{const[J,re,oe,de]=Z.box,Ie=an(C,J,re,oe,de),Te=zb(Ie),pe={[U.inputNames[0]]:new Ge("float32",Te,[1,3,Wn,Wn])},le=(await U.run(pe))[U.outputNames[0]].data,{id:we,prob:Ce}=Nb(le);we!==""&&!d.some(qe=>qe.id===we)&&d.push({id:we,boundingBox:{x:J,y:re,width:oe,height:de},confidence:Math.round(Ce*1e4)/1e4})}catch(J){console.warn("[guild-cls] failed:",J)}}else if(Date.now()<ge)try{const Z=We??await Ro();if(Z!==null){const J=await m2();if(J.size>0){r(`${v}: identifying guilds…`,.75);const re=await g2();for(const oe of lb(Z,C,J,ge,re))d.some(de=>de.id===oe.id)||d.push(oe)}}}catch(Z){console.warn("[guilds-reg] failed:",Z)}}r(`${v}: laurels…`,.8);const Jo=await x2(),$r=[];for(const U of[0,1,2,3]){const Z=U===0?C:Gt(C,U),J=await St("laurel",Z);for(const[re,oe,de,Ie]of fr(J.rows,J.params,dt.laurel.conf)){const Te=Bo({x:re,y:oe,width:de-re,height:Ie-oe},U,C.width,C.height);$r.push([Te.x,Te.y,Te.x+Te.width,Te.y+Te.height])}}let ln=Wf($r);const Kn=[];try{const U=Y1(V.map(Z=>Z.box),[C.width,C.height]);for(const[Z,J,re,oe]of U){const de=an(C,Z,J,re-Z,oe-J);if(de.width<=0||de.height<=0)continue;const Ie=[];for(const Te of[0,1,2,3]){const pe=Te===0?de:Gt(de,Te),fe=await St("laurel",pe);for(const[le,we,Ce,qe]of fr(fe.rows,fe.params,dt.laurel.conf)){const Pe=Bo({x:le,y:we,width:Ce-le,height:qe-we},Te,de.width,de.height);Ie.push([Pe.x,Pe.y,Pe.x+Pe.width,Pe.y+Pe.height])}}if(ln=X1(ln,Wf(Ie),[Z,J]),H!==null)try{const Te=oo(de,1280,pr),pe=await H.run({[H.inputNames[0]]:new Ge("float32",Te.tensor,[1,3,1280,1280])});for(const[fe,le,we,Ce]of fr(pe[H.outputNames[0]].data,Te.params,Bm))Kn.push([fe+Z,le+J,we+Z,Ce+J])}catch{}}}catch(U){console.warn("[laurel-containers] failed:",U)}const xr=[...L,...Kn];ln=ln.filter(([U,Z,J,re])=>!J1((U+J)/2,(Z+re)/2,xr,V.map(oe=>oe.box)));const Yn=await E2(),ii=await A2();for(const[U,Z,J,re]of ln){const oe=Math.trunc((U+J)/2),de=Math.trunc((Z+re)/2);if([...P,...z].some(Ne=>(oe-Ne.cx)**2+(de-Ne.cy)**2<=Ne.r*Ne.r)||!jn(oe,de))continue;if(ii!==null){const Ne=await R2(C,[Math.trunc(U),Math.trunc(Z),Math.trunc(J),Math.trunc(re)],ii);if(Ne!==null&&Ne>=Yb)continue}const Te=Math.min(Math.trunc(J-U),Math.trunc(re-Z)),pe=Math.max(6,Math.trunc(Math.max(J-U,re-Z)*gw)),fe=v2(C,oe,de,pe);let le=null,we=0;const Ce=new Map;if(Te>=6)for(const Ne of[0,1,2,3]){const Ke=Ne===0?fe:Gt(fe,Ne),[at,Ht]=Cw(Ke,Jo);at!==null&&(Ce.set(at,Math.max(Ce.get(at)??0,Ht)),Ht>we&&(le=at,we=Ht))}le!==null&&we<p2&&(le=null);const qe=we;if(Yn!==null&&Te>=6){const Ne=an(C,Math.trunc(U),Math.trunc(Z),Math.trunc(J-U),Math.trunc(re-Z));let Ke=null,at=0;for(const Ht of[0,1,2,3]){const ai=Ht===0?Ne:Gt(Ne,Ht),oi=Hb(ai),si=await Yn.run({[Yn.inputNames[0]]:new Ge("float32",oi,[1,3,Vn,Vn])}),{value:es,prob:pt}=jb(si[Yn.outputNames[0]].data);pt>at&&(Ke=es,at=pt)}Ke!==null&&at>=Vb&&(le=Ke,we=at)}const Pe=le!==null&&[...Ce.entries()].some(([Ne,Ke])=>Ne!==le&&Ke>=qe-.1),cn=je.some(Ne=>oe>=Ne.x0&&oe<=Ne.x1&&de>=Ne.y0&&de<=Ne.y1),zt=d.some(Ne=>{const Ke=Ne.boundingBox;return Ke!==void 0&&oe>=Ke.x&&oe<=Ke.x+Ke.width&&de>=Ke.y&&de<=Ke.y+Ke.height});s.push({value:le,valueRead:le!==null,center:[Math.round((U+J)/2),Math.round((Z+re)/2)],boundingBox:{x:Math.trunc(U),y:Math.trunc(Z),width:Math.trunc(J-U),height:Math.trunc(re-Z)},confidence:Math.round(we*1e4)/1e4,excluded:cn||zt,photoIndex:$-1,...Pe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}_>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${_} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):y>0&&h.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const x=o.guild??0;x!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${x} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(E=>E.id).join(", ")+" — confirm in the review."});const M=h.filter(E=>E.boundingBox.width===0);M.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${M.map(E=>E.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${h.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),g>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${g} token disc(s) found but not identified — pick them in the review below.`}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+l.map(E=>E.id).join(", ")+" — confirm in the review."}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${u.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const S=U2(d,h);for(const E of[...e2(h.map(v=>v.id),t),...r2(S.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:E.message});const T=s.filter(E=>!E.excluded),k=T.filter(E=>E.valueRead);return{...X2(),wonders:h,guilds:S,progressTokens:l,laurels:s,cardVictoryPoints:{value:k.reduce((E,v)=>E+(v.value??0),0),laurelsKept:T.length,laurelsUnread:T.length-k.length,complete:T.length===k.length},cardCounts:{byFamily:o,source:y>0?"yolo":"none",tuckedExcluded:_,...p.length>0?{suspects:p}:{}},coins:{total:m,confidence:u.length>0?.5:0,source:u.length>0?"local-colour":"none",coins:u}}}const Mt=1280,Z2=.3,Yo=9;let Xo=null;function Q2(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${Be}pawn_ends.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xo}function J2(e){const t=Mt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(Mt,Mt).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,Mt,Mt),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,Mt,Mt),l=Mt*Mt,h=new Float32Array(3*l);for(let d=0;d<l;d+=1)h[d]=u[d*4]/255,h[l+d]=u[d*4+1]/255,h[2*l+d]=u[d*4+2]/255;return{tensor:h,r:t}}async function e$(e,t){const{tensor:n,r}=J2(t),a=(await e.run({[e.inputNames[0]]:new Ge("float32",n,[1,3,Mt,Mt])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<Z2)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const d=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:d,cy:p})}}return o}async function Um(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Gt(t,g),_=await e$(e,y);if(_.has(0)&&_.has(1)&&_.has(2)){const $=_.get(0).conf+_.get(1).conf+_.get(2).conf;(n===null||$>n.score)&&(n={score:$,det:_})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const d=((r.cx-u)*o+(r.cy-l)*s)/h*(2*Yo),p=Math.min(Yo,Math.max(-Yo,ct(d))),m=Math.min(r.conf,i.conf,a.conf);return{position:p,confidence:Math.round(m*1e4)/1e4}}async function t$(e,t,n){let r=null;for(const i of n){const a=zy(t.width,t.height,i);if(a===null)continue;const o=an(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await Um(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r=s)}return r}async function n$(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(l,h=0)=>{t(l,i>0?Math.min(.99,(a+h)/i):void 0)},s=()=>{a+=1};for(const l of["left","right"]){const h=e[l];h.length>0&&(r[l]=await Ko(h,l,n,o,s))}e.both!==void 0&&(r.left=await Ko([e.both],"left",n,o,s,"player"),r.right=await Ko([e.both],"right",n,o,s,"opponent"));{const l={},h={};for(const d of["left","right"]){const p=r[d];p!=null&&(l[d]=p.wonders.map(m=>m.id),h[d]=p.progressTokens.map(m=>m.id))}for(const d of[...t2(l),...n2(h)])n.push({code:"INCONSISTENT_STATE",message:d.message})}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await jo(e.board),h=await Q2();if(h!==null){let d=await Um(h,l);if(d===null){const p=await Pm();if(p!==null){const m=await St("banner",l),g=Xr(m.rows,m.params,dt.banner.conf),y=await Dm(p,l,g);d=await t$(h,l,y)}}d!==null&&(u={conflictPawnPosition:d.position,found:!0,confidence:d.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await Y2(e.data.file):await n$(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
