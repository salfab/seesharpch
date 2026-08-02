var hv=Object.defineProperty;var pv=(Dt,Ut,On)=>Ut in Dt?hv(Dt,Ut,{enumerable:!0,configurable:!0,writable:!0,value:On}):Dt[Ut]=On;var p0=(Dt,Ut,On)=>pv(Dt,typeof Ut!="symbol"?Ut+"":Ut,On);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Dt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,On=Object.getOwnPropertyNames,g0=Object.prototype.hasOwnProperty,y0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),zn=(e,t)=>{for(var n in t)Dt(e,n,{get:t[n],enumerable:!0})},w0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of On(t))!g0.call(e,i)&&i!==n&&Dt(e,i,{get:()=>t[i],enumerable:!(r=Ut(t,i))||r.enumerable});return e},Jn=e=>w0(Dt({},"__esModule",{value:!0}),e),er,Zt,Nn,Ss,Ms,Ts=ee(()=>{er=new Map,Zt=[],Nn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=er.get(e);if(r===void 0)er.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Zt.indexOf(e);i!==-1&&Zt.splice(i,1);for(let a=0;a<Zt.length;a++)if(er.get(Zt[a]).priority<=n){Zt.splice(a,0,e);return}Zt.push(e)}return}throw new TypeError("not a valid backend")},Ss=async e=>{let t=er.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ms=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Zt:n,i,a=[],o=new Set;for(let u of r){let l=await Ss(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),_0=ee(()=>{Ts()}),Es,b0=ee(()=>{Es="1.27.0"}),vi,Qe,Is=ee(()=>{b0(),vi="warning",Qe={wasm:{},webgl:{},webgpu:{},versions:{common:Es},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);vi=e}},get logLevel(){return vi}},Object.defineProperty(Qe,"logLevel",{enumerable:!0})}),Ue,x0=ee(()=>{Is(),Ue=Qe}),ks,Cs,$0=ee(()=>{ks=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,d=0,p=h,m=h*2,g=-1;o==="RGBA"?(d=0,p=h,m=h*2,g=h*3):o==="RGB"?(d=0,p=h,m=h*2):o==="RBG"&&(d=0,m=h,p=h*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[d++]-l[0])*u[0],$=(e.data[p++]-l[1])*u[1],M=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+b+","+$+","+M+","+S+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Cs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,m=0,g=1,y=2,w=3,b=0,$=d,M=d*2,S=-1;s==="RGBA"?(b=0,$=d,M=d*2,S=d*3):s==="RGB"?(b=0,$=d,M=d*2):s==="RBG"&&(b=0,M=d,$=d*2),r=n.createImageData(i,a);for(let T=0;T<a*i;m+=p,g+=p,y+=p,w+=p,T++)r.data[m]=(e.data[b++]-h[0])*l[0],r.data[g]=(e.data[$++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[w]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Ir,As,Rs,Os,zs,Ns,v0=ee(()=>{Mi(),Ir=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),d=4,p=0,m=1,g=2,y=3,w=0,b=l,$=l*2,M=-1;s==="RGB"&&(d=3,p=0,m=1,g=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,$=l,b=l*2):u==="BGR"&&($=0,b=l,w=l*2);for(let S=0;S<l;S++,p+=d,g+=d,m+=d,y+=d)h[w++]=(e[p]+o[0])/a[0],h[b++]=(e[m]+o[1])/a[1],h[$++]=(e[g]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new st("float32",h,[1,4,n,r]):new st("float32",h,[1,3,n,r])},As=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let d=l(h);if(d!=null){let p=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=m}else s.tensorFormat="RGBA",s.height=p,s.width=m;d.drawImage(e,0,0),o=d.getImageData(0,0,m,p).data}else throw new Error("Can not access image data")}else if(r){let h,d;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,d=t.resizedWidth):(h=e.height,d=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=d,t!==void 0){let p=u();p.width=d,p.height=h;let m=l(p);if(m!=null)m.putImageData(e,0,0),o=m.getImageData(0,0,d,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let d=l(h);if(d!=null){let p=e.height,m=e.width;return d.drawImage(e,0,0,m,p),o=d.getImageData(0,0,m,p).data,s.height=p,s.width=m,Ir(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,d)=>{let p=u(),m=l(p);if(!e||!m)return d();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{p.width=g.width,p.height=g.height,m.drawImage(g,0,0,p.width,p.height);let y=m.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Ir(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ir(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Rs=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new st({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Os=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new st({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},zs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new st({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ns=(e,t,n)=>new st({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),mn,tr,Si,Bs,S0=ee(()=>{mn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),tr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Si=!1,Bs=()=>{if(!Si){Si=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(mn.set("int64",BigInt64Array),tr.set(BigInt64Array,"int64")),t&&(mn.set("uint64",BigUint64Array),tr.set(BigUint64Array,"uint64")),r?(mn.set("float16",n),tr.set(n,"float16")):mn.set("float16",Uint16Array)}}}),Ps,Ds,M0=ee(()=>{Mi(),Ps=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ds=(e,t)=>{switch(e.location){case"cpu":return new st(e.type,e.data,t);case"cpu-pinned":return new st({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new st({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new st({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new st({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),st,Mi=ee(()=>{$0(),v0(),S0(),M0(),st=class{constructor(e,t,n){Bs();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=mn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=mn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=tr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Ps(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return As(e,t)}static fromTexture(e,t){return Rs(e,t)}static fromGpuBuffer(e,t){return Os(e,t)}static fromMLTensor(e,t){return zs(e,t)}static fromPinnedBuffer(e,t,n){return Ns(e,t,n)}toDataURL(e){return ks(this,e)}toImageData(e){return Cs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ds(this,e)}}}),Ge,Us=ee(()=>{Mi(),Ge=st}),kr,Ti,Ct,yt,gn,yn,Ls=ee(()=>{Is(),kr=(e,t)=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ti=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),kr("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Ct=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||Ti("BEGIN",e)},yt=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||Ti("END",e)},gn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.time(`ORT::${e}`)},yn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeEnd(`ORT::${e}`)}}),Fs,T0=ee(()=>{Ts(),Us(),Ls(),Fs=class f0{constructor(t){this.handler=t}async run(t,n,r){Ct(),gn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ge||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ge)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let d of this.outputNames)if(h.indexOf(d)!==-1){let p=n[d];(p===null||p instanceof Ge)&&(l=!0,o=!1,i[d]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof Ge?u[l]=h:u[l]=new Ge(h.type,h.data,h.dims)}return yn("InferenceSession.run"),yt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ct(),gn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,d=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(d=n,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-d,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||d+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-d}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,d,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Ms(o),l=await s.createInferenceSessionHandler(a,u);return yn("InferenceSession.create"),yt(),new f0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),tt,E0=ee(()=>{T0(),tt=Fs}),I0=ee(()=>{}),k0=ee(()=>{}),C0=ee(()=>{}),A0=ee(()=>{}),R0={};zn(R0,{InferenceSession:()=>tt,TRACE:()=>kr,TRACE_EVENT_BEGIN:()=>gn,TRACE_EVENT_END:()=>yn,TRACE_FUNC_BEGIN:()=>Ct,TRACE_FUNC_END:()=>yt,Tensor:()=>Ge,env:()=>Ue,registerBackend:()=>Nn});var ft=ee(()=>{_0(),x0(),E0(),Us(),I0(),k0(),Ls(),C0(),A0()}),Ei=ee(()=>{}),Gs={};zn(Gs,{default:()=>Ws});var Ii,ki,Ws,O0=ee(()=>{var e;Sf(),wn(),Ni(),Ii="ort-wasm-proxy-worker",ki=((e=globalThis.self)==null?void 0:e.name)===Ii,ki&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Di(r.wasm).then(()=>{Ya(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Xa(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Kr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Qa(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":Ja(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;to(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ro([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":no(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ws=ki?null:t=>new Worker(t??ut,{type:"module",name:Ii})}),qs={};zn(qs,{default:()=>Hs});async function Vs(e={}){var d0,h0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((d0=self.name)==null?void 0:d0.startsWith("em-pthread"));t.mountExternalData=(c,f)=>{c.startsWith("./")&&(c=c.substring(2)),(t.Xc||(t.Xc=new Map)).set(c,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=c=>async(...f)=>{var x;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:f[0],errors:[]},E=await c(...f);if(t.Yc!==_)throw Error("Session mismatch");(x=t.dd)==null||x.flush();let A=_.errors;if(0<A.length){let B=await Promise.all(A);if(B=B.filter(Y=>Y),0<B.length)throw Error(B.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(c,f)=>{if(c==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let x=t.dd;t.jsepRegisterBuffer=(_,E,A,B)=>x.registerBuffer(_,E,A,B),t.jsepGetBuffer=_=>x.getBuffer(_),t.jsepCreateDownloader=(_,E,A)=>x.createDownloader(_,E,A),t.jsepOnCreateSession=_=>{x.onCreateSession(_)},t.jsepOnReleaseSession=_=>{x.onReleaseSession(_)},t.jsepOnRunStart=_=>x.onRunStart(_),t.Id=(_,E)=>{x.upload(_,E)}}else if(c==="webnn"){let x=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>x.onRunStart(_),t.webnnOnRunEnd=x.onRunEnd.bind(x),t.webnnOnReleaseSession=_=>{x.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,E)=>x.createMLTensorDownloader(_,E),t.webnnRegisterMLTensor=(_,E,A,B)=>x.registerMLTensor(_,E,A,B),t.webnnCreateMLContext=_=>x.createMLContext(_),t.webnnRegisterMLConstant=(_,E,A,B,Y,te)=>x.registerMLConstant(_,E,A,B,Y,t.Xc,te),t.webnnRegisterGraphInput=x.registerGraphInput.bind(x),t.webnnIsGraphInput=x.isGraphInput.bind(x),t.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),t.webnnIsGraphOutput=x.isGraphOutput.bind(x),t.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),t.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let o=()=>{let c=f=>(...x)=>{let _=Bt;return x=f(...x),Bt!=_?new Promise((E,A)=>{ds={resolve:E,reject:A}}):x};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=c(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(c,f)=>{throw f},h=self.location.href,d="";if(n||r){try{d=new URL(".",h).href}catch{}r&&(u=c=>{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async c=>{if(I(c))return new Promise((x,_)=>{var E=new XMLHttpRequest;E.open("GET",c,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?x(E.response):_(E.status)},E.onerror=_,E.send(null)});var f=await fetch(c,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var p,m,g,y,w,b,$=console.log.bind(console),M=console.error.bind(console),S=$,T=M,k=!1,I=c=>c.startsWith("file://");function v(){Et.buffer!=N.buffer&&U()}if(i){let c=function(f){try{var x=f.data,_=x.Sc;if(_==="load"){let E=[];self.onmessage=A=>E.push(A),b=()=>{postMessage({Sc:"loaded"});for(let A of E)c(A);self.onmessage=c};for(let A of x.xd)t[A]&&!t[A].proxy||(t[A]=(...B)=>{postMessage({Sc:"callHandler",wd:A,args:B})},A=="print"&&(S=t[A]),A=="printErr"&&(T=t[A]));Et=x.Od,U(),m=x.Pd,ue(),xi()}else if(_==="run"){(function(E){var A=(v(),G)[E+52>>>2>>>0];E=(v(),G)[E+56>>>2>>>0],xg(A,A-E),$e(A)})(x.Rc),gs(x.Rc,0,0,1,0,0),jn(),us(x.Rc),C||(mg(),C=!0);try{ns(x.Md,x.bd)}catch(E){if(E!="unwind")throw E}}else x.target!=="setimmediate"&&(_==="checkMailbox"?C&&fi():_&&(T(`worker: received unknown command ${_}`),T(x)))}catch(E){throw gg(),E}};var C=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=c}var N,j,F,H,O,G,Z,z,q,R,K,P=!1;function U(){var c=Et.buffer;t.HEAP8=N=new Int8Array(c),F=new Int16Array(c),t.HEAPU8=j=new Uint8Array(c),H=new Uint16Array(c),t.HEAP32=O=new Int32Array(c),t.HEAPU32=G=new Uint32Array(c),Z=new Float32Array(c),z=new Float64Array(c),q=new BigInt64Array(c),R=new BigUint64Array(c)}function W(){P=!0,i?b():Xt.sb()}function L(c){throw T(c="Aborted("+c+")"),k=!0,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),w==null||w(c),c}function ne(){return{a:{ma:E$,gb:T$,g:si,J:Kn,f:li,o:is,h:Xn,ha:ci,b:D,T:Q,Ha:ie,n:se,$:pe,Xa:be,Da:ye,Fa:Ce,Ya:qe,Va:Pe,Oa:dn,Ua:Nt,ka:Ne,Ea:Ye,Ba:at,Wa:Kt,Ca:di,bb:as,ea:mx,wa:gx,ua:wx,da:bx,O:xx,H:$x,va:vx,_:Cx,xa:Ax,Ra:Rx,za:zx,Ia:Nx,sa:Bx,fa:Px,Qa:us,_a:Dx,R:Gx,r:jx,c:os,hb:Kx,y:Yx,M:Xx,D:Zx,l:Qx,s:Qm,ib:Jx,I:e$,S:t$,j:n$,u:r$,q:i$,k:a$,La:o$,Ma:s$,Na:u$,Ja:ng,Ka:rg,ta:ig,db:c$,ab:h$,v:p$,aa:f$,ga:m$,$a:d$,W:g$,Za:y$,Aa:w$,F:l$,U:_$,la:_i,ya:x$,fb:b$,eb:$$,Sa:ug,Ta:lg,Ga:ln,V:cg,ja:dg,Pa:hg,ia:pg,kb:lv,na:iv,lb:uv,oa:rv,G:K$,e:A$,t:k$,w:I$,B:F$,mb:ev,K:V$,x:z$,pa:tv,Y:av,ba:J$,nb:Q$,ob:Z$,P:G$,qa:X$,pb:Y$,N:H$,Z:nv,d:C$,A:O$,m:R$,jb:cv,p:B$,z:P$,C:N$,E:D$,L:W$,qb:j$,Q:ov,ca:q$,X:sv,rb:L$,ra:U$,i:S$,a:Et,cb:We}}}async function ue(){function c(_,E){var A=Xt=_.exports;_={};for(let[B,Y]of Object.entries(A))typeof Y=="function"?(A=Ux(Y),_[B]=A):_[B]=Y;return Xt=_,Xt=(function(){var B=Xt,Y=oe=>xe=>oe(xe)>>>0,te=oe=>()=>oe()>>>0;return(B=Object.assign({},B)).tb=Y(B.tb),B.Xb=te(B.Xb),B.Zb=Y(B.Zb),B.lc=Y(B.lc),B.mc=te(B.mc),B.qc=Y(B.qc),B})(),br.push(Xt._b),fg=(_=Xt).tb,mg=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,bi=_.Xb,Pt=t._free=_.Yb,Mr=t._malloc=_.Zb,gs=_.ac,gg=_.bc,yg=_.cc,wg=_.dc,ys=_.ec,_g=_.fc,bg=_.gc,Se=_.hc,Tr=_.ic,xg=_.jc,$e=_.kc,ws=_.lc,ve=_.mc,$g=_.nc,_s=_.oc,vg=_.pc,Sg=_.qc,Mg=_.rc,bs=_.sc,Tg=_.tc,Eg=_.uc,Ig=_.vc,kg=_.wc,Cg=_.xc,Ag=_.yc,Rg=_.zc,Og=_.Ac,zg=_.Bc,Ng=_.Cc,Bg=_.Dc,Pg=_.Ec,Dg=_.Fc,Ug=_.Gc,Lg=_.Hc,Fg=_.Ic,Gg=_.Jc,Wg=_.Kc,qg=_.Lc,Vg=_.Mc,Hg=_.Nc,jg=_.Pc,Kg=_.Qc,Yg=_.$c,Xg=_.ad,Zg=_.fd,Qg=_.jd,Jg=_.kd,e0=_.ld,t0=_.md,n0=_.nd,r0=_.od,i0=_.pd,a0=_.qd,o0=_.vd,s0=_.Td,u0=_.Ud,l0=_.Vd,c0=_.Wd,m=E,Xt}var f,x=ne();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm(x,(E,A)=>{_(c(E,A))})}):i?c(new WebAssembly.Instance(m,ne()),m):(K??(K=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(_){var E=K;if(!p&&!I(E))try{var A=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,_)}catch(B){T(`wasm streaming compile failed: ${B}`),T("falling back to ArrayBuffer instantiation")}return(async function(B,Y){try{var te=await(async function(oe){if(!p)try{var xe=await s(oe);return new Uint8Array(xe)}catch{}if(oe==K&&p)oe=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(B);return await WebAssembly.instantiate(te,Y)}catch(oe){T(`failed to asynchronously prepare wasm: ${oe}`),L(oe)}})(E,_)})(x),c(f.instance,f.module))}class ae{constructor(f){p0(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var _e=c=>{c.terminate(),c.onmessage=()=>{}},Re=[],Ve=0,je=null,Ke=c=>{it.length==0&&($r(),xr(it[0]));var f=it.pop();if(!f)return 6;zt.push(f),ht[c.Rc]=f,f.Rc=c.Rc;var x={Sc:"run",Md:c.Ld,bd:c.bd,Rc:c.Rc};return f.postMessage(x,c.rd),0},Oe=0,me=(c,f,...x)=>{var _,E=16*x.length,A=ve(),B=ws(E),Y=B>>>3;for(_ of x)typeof _=="bigint"?((v(),q)[Y++>>>0]=1n,(v(),q)[Y++>>>0]=_):((v(),q)[Y++>>>0]=0n,(v(),z)[Y++>>>0]=_);return c=yg(c,0,E,B,f),$e(A),c};function We(c){if(i)return me(0,1,c);if(g=c,!(0<Oe)){for(var f of zt)_e(f);for(f of it)_e(f);it=[],zt=[],ht={},k=!0}l(0,new ae(c))}function un(c){if(i)return me(1,0,c);ln(c)}var ln=c=>{if(g=c,i)throw un(c),"unwind";We(c)},it=[],zt=[],br=[],ht={},Ht=c=>{var f=c.Rc;delete ht[f],it.push(c),zt.splice(zt.indexOf(c),1),c.Rc=0,wg(f)};function jn(){br.forEach(c=>c())}var xr=c=>new Promise(f=>{c.onmessage=E=>{var A=E.data;if(E=A.Sc,A.Zc&&A.Zc!=bi()){var B=ht[A.Zc];B?B.postMessage(A,A.rd):T(`Internal error! Worker sent a message "${E}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?fi():E==="spawnThread"?Ke(A):E==="cleanupThread"?pi(()=>{Ht(ht[A.Nd])}):E==="loaded"?(c.loaded=!0,f(c)):A.target==="setimmediate"?c.postMessage(A):E==="uncaughtException"?c.onerror(A.error):E==="callHandler"?t[A.wd](...A.args):E&&T(`worker sent an unknown command ${E}`)},c.onerror=E=>{throw T(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var x,_=[];for(x of[])t.propertyIsEnumerable(x)&&_.push(x);c.postMessage({Sc:"load",xd:_,Od:Et,Pd:m})});function $r(){var c=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});it.push(c)}var Et,ns=(c,f)=>{Oe=0,c=bs(c,f),0<Oe?g=c:ys(c)},pt=[],cn=0;function si(c){var f=new Yn(c>>>=0);return(v(),N)[f.Tc+12>>>0]==0&&(rs(f,!0),cn--),ui(f,!1),pt.push(f),Sg(c)}var It=0,Kn=()=>{Se(0,0);var c=pt.pop();$g(c.cd),It=0};function rs(c,f){f=f?1:0,(v(),N)[c.Tc+12>>>0]=f}function ui(c,f){f=f?1:0,(v(),N)[c.Tc+13>>>0]=f}class Yn{constructor(f){this.cd=f,this.Tc=f-24}}var jt=c=>{var f=It;if(!f)return Tr(0),0;var x=new Yn(f);(v(),G)[x.Tc+16>>>2>>>0]=f;var _=(v(),G)[x.Tc+4>>>2>>>0];if(!_)return Tr(0),f;for(var E of c){if(E===0||E===_)break;if(vg(E,_,x.Tc+16))return Tr(E),f}return Tr(_),f};function li(){return jt([])}function is(c){return jt([c>>>0])}function Xn(c,f,x,_){return jt([c>>>0,f>>>0,x>>>0,_>>>0])}var ci=()=>{var c=pt.pop();c||L("no exception to throw");var f=c.cd;throw(v(),N)[c.Tc+13>>>0]==0&&(pt.push(c),ui(c,!0),rs(c,!1),cn++),_s(f),It=f};function D(c,f,x){var _=new Yn(c>>>=0);throw f>>>=0,x>>>=0,(v(),G)[_.Tc+16>>>2>>>0]=0,(v(),G)[_.Tc+4>>>2>>>0]=f,(v(),G)[_.Tc+8>>>2>>>0]=x,_s(c),cn++,It=c}var Q=()=>cn;function J(c,f,x,_){return i?me(2,1,c,f,x,_):ie(c,f,x,_)}function ie(c,f,x,_){if(c>>>=0,f>>>=0,x>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?J(c,f,x,_):(c={Ld:x,Rc:c,bd:_,rd:E},i?(c.Sc="spawnThread",postMessage(c,E),0):Ke(c))}function se(c){throw It||(It=c>>>0),It}var he=globalThis.TextDecoder&&new TextDecoder,Te=(c,f,x,_)=>{if(x=f+x,_)return x;for(;c[f]&&!(f>=x);)++f;return f},Ee=(c,f=0,x,_)=>{if(16<(x=Te(c,f>>>=0,x,_))-f&&c.buffer&&he)return he.decode(c.buffer instanceof ArrayBuffer?c.subarray(f,x):c.slice(f,x));for(_="";f<x;){var E=c[f++];if(128&E){var A=63&c[f++];if((224&E)==192)_+=String.fromCharCode((31&E)<<6|A);else{var B=63&c[f++];65536>(E=(240&E)==224?(15&E)<<12|A<<6|B:(7&E)<<18|A<<12|B<<6|63&c[f++])?_+=String.fromCharCode(E):(E-=65536,_+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else _+=String.fromCharCode(E)}return _},re=(c,f,x)=>(c>>>=0)?Ee((v(),j),c,f,x):"";function pe(c,f,x){return i?me(3,1,c,f,x):0}function be(c,f){if(i)return me(4,1,c,f)}function ye(c,f){if(i)return me(5,1,c,f)}function Ce(c,f,x){if(i)return me(6,1,c,f,x)}function qe(c,f,x){return i?me(7,1,c,f,x):0}function Pe(c,f){if(i)return me(8,1,c,f)}function dn(c,f,x){if(i)return me(9,1,c,f,x)}function Nt(c,f,x,_){if(i)return me(10,1,c,f,x,_)}function Ne(c,f,x,_){if(i)return me(11,1,c,f,x,_)}function Ye(c,f,x,_){if(i)return me(12,1,c,f,x,_)}function at(c){if(i)return me(13,1,c)}function Kt(c,f){if(i)return me(14,1,c,f)}function di(c,f,x){if(i)return me(15,1,c,f,x)}var as=()=>L(""),mt=c=>{c>>>=0;for(var f="";;){var x=(v(),j)[c++>>>0];if(!x)return f;f+=String.fromCharCode(x)}},vr={},Zn={},Qn=class extends Error{constructor(c){super(c),this.name="BindingError"}};function Yt(c,f,x={}){return(function(_,E,A={}){var B=E.name;if(!_)throw new Qn(`type "${B}" must have a positive integer typeid pointer`);if(Zn.hasOwnProperty(_)){if(A.yd)return;throw new Qn(`Cannot register type '${B}' twice`)}Zn[_]=E,vr.hasOwnProperty(_)&&(E=vr[_],delete vr[_],E.forEach(Y=>Y()))})(c,f,x)}var Vm=(c,f,x)=>{switch(f){case 1:return x?_=>(v(),N)[_>>>0]:_=>(v(),j)[_>>>0];case 2:return x?_=>(v(),F)[_>>>1>>>0]:_=>(v(),H)[_>>>1>>>0];case 4:return x?_=>(v(),O)[_>>>2>>>0]:_=>(v(),G)[_>>>2>>>0];case 8:return x?_=>(v(),q)[_>>>3>>>0]:_=>(v(),R)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${c}`)}};function mx(c,f,x,_,E){c>>>=0,x>>>=0,f=mt(f>>>0);let A=B=>B;if(_=_===0n){let B=8*x;A=Y=>BigInt.asUintN(B,Y),E=A(E)}Yt(c,{name:f,Oc:A,Vc:(B,Y)=>(typeof Y=="number"&&(Y=BigInt(Y)),Y),Uc:Vm(f,x,!_),Wc:null})}function gx(c,f,x,_){Yt(c>>>=0,{name:f=mt(f>>>0),Oc:function(E){return!!E},Vc:function(E,A){return A?x:_},Uc:function(E){return this.Oc((v(),j)[E>>>0])},Wc:null})}var Hm=[],An=[0,1,,1,null,1,!0,1,!1,1];function os(c){9<(c>>>=0)&&--An[c+1]===0&&(An[c]=void 0,Hm.push(c))}var gt=c=>{if(!c)throw new Qn(`Cannot use deleted val. handle = ${c}`);return An[c]},kt=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Hm.pop()||An.length;return An[f]=c,An[f+1]=1,f}};function ss(c){return this.Oc((v(),G)[c>>>2>>>0])}var yx={name:"emscripten::val",Oc:c=>{var f=gt(c);return os(c),f},Vc:(c,f)=>kt(f),Uc:ss,Wc:null};function wx(c){return Yt(c>>>0,yx)}var _x=(c,f)=>{switch(f){case 4:return function(x){return this.Oc((v(),Z)[x>>>2>>>0])};case 8:return function(x){return this.Oc((v(),z)[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${c}`)}};function bx(c,f,x){x>>>=0,Yt(c>>>=0,{name:f=mt(f>>>0),Oc:_=>_,Vc:(_,E)=>E,Uc:_x(f,x),Wc:null})}function xx(c,f,x,_,E){c>>>=0,x>>>=0,f=mt(f>>>0);let A=Y=>Y;if(_===0){var B=32-8*x;A=Y=>Y<<B>>>B,E=A(E)}Yt(c,{name:f,Oc:A,Vc:(Y,te)=>te,Uc:Vm(f,x,_!==0),Wc:null})}function $x(c,f,x){function _(A){var B=(v(),G)[A>>>2>>>0];return A=(v(),G)[A+4>>>2>>>0],new E((v(),N).buffer,A,B)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Yt(c>>>=0,{name:x=mt(x>>>0),Oc:_,Uc:_},{yd:!0})}var hn=(c,f,x)=>{var _=(v(),j);if(f>>>=0,0<x){var E=f;x=f+x-1;for(var A=0;A<c.length;++A){var B=c.codePointAt(A);if(127>=B){if(f>=x)break;_[f++>>>0]=B}else if(2047>=B){if(f+1>=x)break;_[f++>>>0]=192|B>>6,_[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=x)break;_[f++>>>0]=224|B>>12,_[f++>>>0]=128|B>>6&63,_[f++>>>0]=128|63&B}else{if(f+3>=x)break;_[f++>>>0]=240|B>>18,_[f++>>>0]=128|B>>12&63,_[f++>>>0]=128|B>>6&63,_[f++>>>0]=128|63&B,A++}}_[f>>>0]=0,c=f-E}else c=0;return c},hi=c=>{for(var f=0,x=0;x<c.length;++x){var _=c.charCodeAt(x);127>=_?f++:2047>=_?f+=2:55296<=_&&57343>=_?(f+=4,++x):f+=3}return f};function vx(c,f){Yt(c>>>=0,{name:f=mt(f>>>0),Oc(x){var _=(v(),G)[x>>>2>>>0];return _=re(x+4,_,!0),Pt(x),_},Vc(x,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var E=typeof _=="string";if(!(E||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Qn("Cannot pass non-string to std::string");var A=E?hi(_):_.length,B=Mr(4+A+1),Y=B+4;return(v(),G)[B>>>2>>>0]=A,E?hn(_,Y,A+1):(v(),j).set(_,Y>>>0),x!==null&&x.push(Pt,B),B},Uc:ss,Wc(x){Pt(x)}})}var jm=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Sx=(c,f,x)=>{if(c>>>=1,16<(f=Te((v(),H),c,f/2,x))-c&&jm)return jm.decode((v(),H).slice(c,f));for(x="";c<f;++c){var _=(v(),H)[c>>>0];x+=String.fromCharCode(_)}return x},Mx=(c,f,x)=>{if(x??(x=2147483647),2>x)return 0;var _=f;x=(x-=2)<2*c.length?x/2:c.length;for(var E=0;E<x;++E){var A=c.charCodeAt(E);(v(),F)[f>>>1>>>0]=A,f+=2}return(v(),F)[f>>>1>>>0]=0,f-_},Tx=c=>2*c.length,Ex=(c,f,x)=>{var _="";c>>>=2;for(var E=0;!(E>=f/4);E++){var A=(v(),G)[c+E>>>0];if(!A&&!x)break;_+=String.fromCodePoint(A)}return _},Ix=(c,f,x)=>{if(f>>>=0,x??(x=2147483647),4>x)return 0;var _=f;x=_+x-4;for(var E=0;E<c.length;++E){var A=c.codePointAt(E);if(65535<A&&E++,(v(),O)[f>>>2>>>0]=A,(f+=4)+4>x)break}return(v(),O)[f>>>2>>>0]=0,f-_},kx=c=>{for(var f=0,x=0;x<c.length;++x)65535<c.codePointAt(x)&&x++,f+=4;return f};function Cx(c,f,x){if(c>>>=0,f>>>=0,x=mt(x>>>=0),f===2)var _=Sx,E=Mx,A=Tx;else _=Ex,E=Ix,A=kx;Yt(c,{name:x,Oc:B=>{var Y=(v(),G)[B>>>2>>>0];return Y=_(B+4,Y*f,!0),Pt(B),Y},Vc:(B,Y)=>{if(typeof Y!="string")throw new Qn(`Cannot pass non-string to C++ string type ${x}`);var te=A(Y),oe=Mr(4+te+f);return(v(),G)[oe>>>2>>>0]=te/f,E(Y,oe+4,te+f),B!==null&&B.push(Pt,oe),oe},Uc:ss,Wc(B){Pt(B)}})}function Ax(c,f){Yt(c>>>=0,{zd:!0,name:f=mt(f>>>0),Oc:()=>{},Vc:()=>{}})}function Rx(c){gs(c>>>0,!r,1,!n,131072,!1),jn()}var pi=c=>{if(!k)try{if(c(),!(0<Oe))try{i?bi()&&ys(g):ln(g)}catch(f){f instanceof ae||f=="unwind"||l(0,f)}}catch(f){f instanceof ae||f=="unwind"||l(0,f)}},Ox=!Atomics.waitAsync||((h0=globalThis.navigator)==null?void 0:h0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function us(c){c>>>=0,Ox||(Atomics.waitAsync((v(),O),c>>>2,c).value.then(fi),c+=128,Atomics.store((v(),O),c>>>2,1))}var fi=()=>pi(()=>{var c=bi();c&&(us(c),bg())});function zx(c,f){(c>>>=0)==f>>>0?setTimeout(fi):i?postMessage({Zc:c,Sc:"checkMailbox"}):(c=ht[c])&&c.postMessage({Sc:"checkMailbox"})}var ls=[];function Nx(c,f,x,_,E){for(f>>>=0,E>>>=0,ls.length=0,x=E>>>3,_=E+_>>>3;x<_;){var A;A=(v(),q)[x++>>>0]?(v(),q)[x++>>>0]:(v(),z)[x++>>>0],ls.push(A)}return(f?xs[f]:M$[c])(...ls)}var Bx=()=>{Oe=0};function Px(c){c>>>=0,i?postMessage({Sc:"cleanupThread",Nd:c}):Ht(ht[c])}function Dx(c){}var mi=c=>{try{c()}catch(f){L(f)}};function Ux(c){var f=(...x)=>{gi.push(c);try{return c(...x)}finally{k||(gi.pop(),Bt&&pn===1&&gi.length===0&&(pn=0,Oe+=1,mi(u0),typeof Fibers<"u"&&Fibers.Zd()))}};return Xm.set(c,f),f}var pn=0,Bt=null,Km=0,gi=[],cs=new Map,Ym=new Map,Xm=new Map,Lx=0,ds=null,Fx=[],Zm=c=>(function(f){if(!k){if(pn===0){var x=!1,_=!1;f((E=0)=>{if(!k&&(Km=E,x=!0,_)){pn=2,mi(()=>l0(Bt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var A=(function(){var te=(v(),O)[Bt+8>>>2>>>0];return te=Ym.get(te),te=Xm.get(te),--Oe,te()})()}catch(te){A=te,E=!0}var B=!1;if(!Bt){var Y=ds;Y&&(ds=null,(E?Y.reject:Y.resolve)(A),B=!0)}if(E&&!B)throw A}}),_=!0,x||(pn=1,Bt=(function(){var E=Mr(65548),A=E+12;if((v(),G)[E>>>2>>>0]=A,(v(),G)[E+4>>>2>>>0]=A+65536,A=gi[0],!cs.has(A)){var B=Lx++;cs.set(A,B),Ym.set(B,A)}return A=cs.get(A),(v(),O)[E+8>>>2>>>0]=A,E})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),mi(()=>s0(Bt)))}else pn===2?(pn=0,mi(c0),Pt(Bt),Bt=null,Fx.forEach(pi)):L(`invalid state: ${pn}`);return Km}})(f=>{c().then(f)});function Gx(c){return c>>>=0,Zm(async()=>{var f=await gt(c);return kt(f)})}var hs=[],Wx=c=>{var f=hs.length;return hs.push(c),f},qx=(c,f)=>{for(var x=Array(c),_=0;_<c;++_){var E=_,A=(v(),G)[f+4*_>>>2>>>0],B=Zn[A];if(B===void 0)throw c=`parameter ${_}`,A=fg(A),f=mt(A),Pt(A),new Qn(`${c} has unknown type ${f}`);x[E]=B}return x},Vx=(c,f,x)=>{var _=[];return c=c(_,x),_.length&&((v(),G)[f>>>2>>>0]=kt(_)),c},Hx={},yi=c=>{var f=Hx[c];return f===void 0?mt(c):f};function jx(c,f,x){var[_,...E]=qx(c,f>>>0);f=_.Vc.bind(_);var A=E.map(te=>te.Uc.bind(te));c--;var B={toValue:gt};switch(c=A.map((te,oe)=>{var xe=`argFromPtr${oe}`;return B[xe]=te,`${xe}(args${oe?"+"+8*oe:""})`}),x){case 0:var Y="toValue(handle)";break;case 2:Y="new (toValue(handle))";break;case 3:Y="";break;case 1:B.getStringOrSymbol=yi,Y="toValue(handle)[getStringOrSymbol(methodName)]"}return Y+=`(${c})`,_.zd||(B.toReturnWire=f,B.emval_returnValue=Vx,Y=`return emval_returnValue(toReturnWire, destructorsRef, ${Y})`),Y=`return function (handle, methodName, destructorsRef, args) {
  ${Y}
  }`,x=new Function(Object.keys(B),Y)(...Object.values(B)),Y=`methodCaller<(${E.map(te=>te.name)}) => ${_.name}>`,Wx(Object.defineProperty(x,"name",{value:Y}))}function Kx(c,f){return f>>>=0,(c=gt(c>>>0))==gt(f)}function Yx(c){return(c>>>=0)?(c=yi(c),kt(globalThis[c])):kt(globalThis)}function Xx(c){return c=yi(c>>>0),kt(t[c])}function Zx(c,f){return f>>>=0,c=gt(c>>>0),f=gt(f),kt(c[f])}function Qx(c){9<(c>>>=0)&&(An[c+1]+=1)}function Qm(c,f,x,_,E){return hs[c>>>0](f>>>0,x>>>0,_>>>0,E>>>0)}function Jx(c,f,x,_,E){return Qm(c>>>0,f>>>0,x>>>0,_>>>0,E>>>0)}function e$(){return kt([])}function t$(c){c=gt(c>>>0);for(var f=Array(c.length),x=0;x<c.length;x++)f[x]=c[x];return kt(f)}function n$(c){return kt(yi(c>>>0))}function r$(){return kt({})}function i$(c){for(var f=gt(c>>>=0);f.length;){var x=f.pop();f.pop()(x)}os(c)}function a$(c,f,x){f>>>=0,x>>>=0,c=gt(c>>>0),f=gt(f),x=gt(x),c[f]=x}function o$(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(v(),O)[f>>>2>>>0]=c.getUTCSeconds(),(v(),O)[f+4>>>2>>>0]=c.getUTCMinutes(),(v(),O)[f+8>>>2>>>0]=c.getUTCHours(),(v(),O)[f+12>>>2>>>0]=c.getUTCDate(),(v(),O)[f+16>>>2>>>0]=c.getUTCMonth(),(v(),O)[f+20>>>2>>>0]=c.getUTCFullYear()-1900,(v(),O)[f+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),O)[f+28>>>2>>>0]=c}var Jm=c=>c%4==0&&(c%100!=0||c%400==0),eg=[0,31,60,91,121,152,182,213,244,274,305,335],tg=[0,31,59,90,120,151,181,212,243,273,304,334];function s$(c,f){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),f>>>=0,c=new Date(1e3*c),(v(),O)[f>>>2>>>0]=c.getSeconds(),(v(),O)[f+4>>>2>>>0]=c.getMinutes(),(v(),O)[f+8>>>2>>>0]=c.getHours(),(v(),O)[f+12>>>2>>>0]=c.getDate(),(v(),O)[f+16>>>2>>>0]=c.getMonth(),(v(),O)[f+20>>>2>>>0]=c.getFullYear()-1900,(v(),O)[f+24>>>2>>>0]=c.getDay();var x=(Jm(c.getFullYear())?eg:tg)[c.getMonth()]+c.getDate()-1|0;(v(),O)[f+28>>>2>>>0]=x,(v(),O)[f+36>>>2>>>0]=-60*c.getTimezoneOffset(),x=new Date(c.getFullYear(),6,1).getTimezoneOffset();var _=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|(x!=_&&c.getTimezoneOffset()==Math.min(_,x)),(v(),O)[f+32>>>2>>>0]=c}function u$(c){c>>>=0;var f=new Date((v(),O)[c+20>>>2>>>0]+1900,(v(),O)[c+16>>>2>>>0],(v(),O)[c+12>>>2>>>0],(v(),O)[c+8>>>2>>>0],(v(),O)[c+4>>>2>>>0],(v(),O)[c>>>2>>>0],0),x=(v(),O)[c+32>>>2>>>0],_=f.getTimezoneOffset(),E=new Date(f.getFullYear(),6,1).getTimezoneOffset(),A=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(A,E);return 0>x?(v(),O)[c+32>>>2>>>0]=+(E!=A&&B==_):0<x!=(B==_)&&(E=Math.max(A,E),f.setTime(f.getTime()+6e4*((0<x?B:E)-_))),(v(),O)[c+24>>>2>>>0]=f.getDay(),x=(Jm(f.getFullYear())?eg:tg)[f.getMonth()]+f.getDate()-1|0,(v(),O)[c+28>>>2>>>0]=x,(v(),O)[c>>>2>>>0]=f.getSeconds(),(v(),O)[c+4>>>2>>>0]=f.getMinutes(),(v(),O)[c+8>>>2>>>0]=f.getHours(),(v(),O)[c+12>>>2>>>0]=f.getDate(),(v(),O)[c+16>>>2>>>0]=f.getMonth(),(v(),O)[c+20>>>2>>>0]=f.getYear(),c=f.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function ng(c,f,x,_,E,A,B){return i?me(16,1,c,f,x,_,E,A,B):-52}function rg(c,f,x,_,E,A){if(i)return me(17,1,c,f,x,_,E,A)}var Sr={},l$=()=>performance.timeOrigin+performance.now();function ig(c,f){if(i)return me(18,1,c,f);if(Sr[c]&&(clearTimeout(Sr[c].id),delete Sr[c]),!f)return 0;var x=setTimeout(()=>{delete Sr[c],pi(()=>_g(c,performance.timeOrigin+performance.now()))},f);return Sr[c]={id:x,Yd:f},0}function c$(c,f,x,_){c>>>=0,f>>>=0,x>>>=0,_>>>=0;var E=new Date().getFullYear(),A=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var B=Math.max(A,E);(v(),G)[c>>>2>>>0]=60*B,(v(),O)[f>>>2>>>0]=+(A!=E),c=(f=Y=>{var te=Math.abs(Y);return`UTC${0<=Y?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(A),f=f(E),E<A?(hn(c,x,17),hn(f,_,17)):(hn(c,_,17),hn(f,x,17))}var d$=()=>Date.now();function h$(c,f,x){return x>>>=0,0<=c&&3>=c?(c===0?c=Date.now():c=performance.timeOrigin+performance.now(),c=Math.round(1e6*c),(v(),q)[x>>>3>>>0]=BigInt(c),0):28}var ps=[],ag=(c,f)=>{ps.length=0;for(var x;x=(v(),j)[c++>>>0];){var _=x!=105;f+=(_&=x!=112)&&f%8?4:0,ps.push(x==112?(v(),G)[f>>>2>>>0]:x==106?(v(),q)[f>>>3>>>0]:x==105?(v(),O)[f>>>2>>>0]:(v(),z)[f>>>3>>>0]),f+=_?8:4}return ps};function p$(c,f,x){return c>>>=0,f=ag(f>>>0,x>>>0),xs[c](...f)}function f$(c,f,x){return c>>>=0,f=ag(f>>>0,x>>>0),xs[c](...f)}var m$=()=>{};function g$(c,f){return T(re(c>>>0,f>>>0))}var y$=()=>{throw Oe+=1,"unwind"};function w$(){return 4294901760}var _$=()=>navigator.hardwareConcurrency,Rn={},wi=c=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(c))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(c))?2147483648|+f[1]:0},og=c=>{for(var f of c)(c=wi(f))&&(Rn[c]=f)};function b$(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),og(c),Rn.gd=wi(c[3]),Rn.Jd=c,Rn.gd}function _i(c){if(!(c=Rn[c>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(c))c=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(c))c=f[1];else{if(!(f=/^(.+?)@/.exec(c)))return 0;c=f[1]}Pt(_i.hd??0),f=hi(c)+1;var x=Mr(f);return x&&hn(c,x,f),_i.hd=x,_i.hd}function x$(c){c>>>=0;var f=(v(),j).length;if(c<=f||4294901760<c)return!1;for(var x=1;4>=x;x*=2){var _=f*(1+.2/x);_=Math.min(_,c+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(c,_)/65536))-Et.buffer.byteLength+65535)/65536|0;try{Et.grow(_),U();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function $$(c,f,x){if(c>>>=0,f>>>=0,Rn.gd==c)var _=Rn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),og(_);for(var E=3;_[E]&&wi(_[E])!=c;)++E;for(c=0;c<x&&_[c+E];++c)(v(),O)[f+4*c>>>2>>>0]=wi(_[c+E]);return c}var fs,ms={},sg=()=>{var _;if(!fs){var c,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(c in ms)ms[c]===void 0?delete f[c]:f[c]=ms[c];var x=[];for(c in f)x.push(`${c}=${f[c]}`);fs=x}return fs};function ug(c,f){if(i)return me(19,1,c,f);c>>>=0,f>>>=0;var x,_=0,E=0;for(x of sg()){var A=f+_;(v(),G)[c+E>>>2>>>0]=A,_+=hn(x,A,1/0)+1,E+=4}return 0}function lg(c,f){if(i)return me(20,1,c,f);c>>>=0,f>>>=0;var x=sg();for(var _ of((v(),G)[c>>>2>>>0]=x.length,c=0,x))c+=hi(_)+1;return(v(),G)[f>>>2>>>0]=c,0}function cg(c){return i?me(21,1,c):52}function dg(c,f,x,_){return i?me(22,1,c,f,x,_):52}function hg(c,f,x,_){return i?me(23,1,c,f,x,_):70}var v$=[null,[],[]];function pg(c,f,x,_){if(i)return me(24,1,c,f,x,_);f>>>=0,x>>>=0,_>>>=0;for(var E=0,A=0;A<x;A++){var B=(v(),G)[f>>>2>>>0],Y=(v(),G)[f+4>>>2>>>0];f+=8;for(var te=0;te<Y;te++){var oe=c,xe=(v(),j)[B+te>>>0],Ie=v$[oe];xe===0||xe===10?((oe===1?S:T)(Ee(Ie)),Ie.length=0):Ie.push(xe)}E+=Y}return(v(),G)[_>>>2>>>0]=E,0}function S$(c){return c>>>0}i||(function(){for(var c=t.numThreads-1;c--;)$r();Re.push(async()=>{var f=(async function(){if(!i)return Promise.all(it.map(xr))})();Ve++,await f,--Ve==0&&je&&(f=je,je=null,f())})})(),i||(Et=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),U()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>ve(),t.stackRestore=c=>$e(c),t.stackAlloc=c=>ws(c),t.setValue=function(c,f,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":(v(),N)[c>>>0]=f;break;case"i16":(v(),F)[c>>>1>>>0]=f;break;case"i32":(v(),O)[c>>>2>>>0]=f;break;case"i64":(v(),q)[c>>>3>>>0]=BigInt(f);break;case"float":(v(),Z)[c>>>2>>>0]=f;break;case"double":(v(),z)[c>>>3>>>0]=f;break;case"*":(v(),G)[c>>>2>>>0]=f;break;default:L(`invalid type for setValue: ${x}`)}},t.getValue=function(c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),N)[c>>>0];case"i16":return(v(),F)[c>>>1>>>0];case"i32":return(v(),O)[c>>>2>>>0];case"i64":return(v(),q)[c>>>3>>>0];case"float":return(v(),Z)[c>>>2>>>0];case"double":return(v(),z)[c>>>3>>>0];case"*":return(v(),G)[c>>>2>>>0];default:L(`invalid type for getValue: ${f}`)}},t.UTF8ToString=re,t.stringToUTF8=hn,t.lengthBytesUTF8=hi;var fg,mg,bi,Pt,Mr,gs,gg,yg,wg,ys,_g,bg,Se,Tr,xg,$e,ws,ve,$g,_s,vg,Sg,Mg,bs,Tg,Eg,Ig,kg,Cg,Ag,Rg,Og,zg,Ng,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Jg,e0,t0,n0,r0,i0,a0,o0,s0,u0,l0,c0,Xt,M$=[We,un,J,pe,be,ye,Ce,qe,Pe,dn,Nt,Ne,Ye,at,Kt,di,ng,rg,ig,ug,lg,cg,dg,hg,pg],xs={1003524:(c,f,x,_,E)=>{if(t===void 0||!t.Xc)return 1;if((c=re(Number(c>>>0))).startsWith("./")&&(c=c.substring(2)),!(c=t.Xc.get(c)))return 2;if(f=Number(f>>>0),x=Number(x>>>0),_=Number(_>>>0),f+x>c.byteLength)return 3;try{let A=c.subarray(f,f+x);switch(E){case 0:(v(),j).set(A,_>>>0);break;case 1:t.Qd?t.Qd(_,A):t.Id(_,A);break;default:return 4}return 0}catch{return 4}},1004348:(c,f,x)=>{t.td(c,(v(),j).subarray(f>>>0,f+x>>>0))},1004412:()=>t.Sd(),1004454:c=>{t.sd(c)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:c=>t.Ad(c),1004609:c=>t.Ed(c),1004641:(c,f,x)=>{t.ed(Number(c),Number(f),Number(x),!0)},1004704:(c,f,x)=>{t.ed(Number(c),Number(f),Number(x))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:c=>{t.$b("Abs",c,void 0)},1004869:c=>{t.$b("Neg",c,void 0)},1004920:c=>{t.$b("Floor",c,void 0)},1004973:c=>{t.$b("Ceil",c,void 0)},1005025:c=>{t.$b("Reciprocal",c,void 0)},1005083:c=>{t.$b("Sqrt",c,void 0)},1005135:c=>{t.$b("Exp",c,void 0)},1005186:c=>{t.$b("Erf",c,void 0)},1005237:c=>{t.$b("Sigmoid",c,void 0)},1005292:(c,f,x)=>{t.$b("HardSigmoid",c,{alpha:f,beta:x})},1005371:c=>{t.$b("Log",c,void 0)},1005422:c=>{t.$b("Sin",c,void 0)},1005473:c=>{t.$b("Cos",c,void 0)},1005524:c=>{t.$b("Tan",c,void 0)},1005575:c=>{t.$b("Asin",c,void 0)},1005627:c=>{t.$b("Acos",c,void 0)},1005679:c=>{t.$b("Atan",c,void 0)},1005731:c=>{t.$b("Sinh",c,void 0)},1005783:c=>{t.$b("Cosh",c,void 0)},1005835:c=>{t.$b("Asinh",c,void 0)},1005888:c=>{t.$b("Acosh",c,void 0)},1005941:c=>{t.$b("Atanh",c,void 0)},1005994:c=>{t.$b("Tanh",c,void 0)},1006046:c=>{t.$b("Not",c,void 0)},1006097:(c,f,x)=>{t.$b("Clip",c,{min:f,max:x})},1006166:c=>{t.$b("Clip",c,void 0)},1006218:(c,f)=>{t.$b("Elu",c,{alpha:f})},1006276:c=>{t.$b("Gelu",c,void 0)},1006328:c=>{t.$b("Relu",c,void 0)},1006380:(c,f)=>{t.$b("LeakyRelu",c,{alpha:f})},1006444:(c,f)=>{t.$b("ThresholdedRelu",c,{alpha:f})},1006514:(c,f)=>{t.$b("Cast",c,{to:f})},1006572:c=>{t.$b("Add",c,void 0)},1006623:c=>{t.$b("Sub",c,void 0)},1006674:c=>{t.$b("Mul",c,void 0)},1006725:c=>{t.$b("Div",c,void 0)},1006776:c=>{t.$b("Pow",c,void 0)},1006827:c=>{t.$b("Equal",c,void 0)},1006880:c=>{t.$b("Greater",c,void 0)},1006935:c=>{t.$b("GreaterOrEqual",c,void 0)},1006997:c=>{t.$b("Less",c,void 0)},1007049:c=>{t.$b("LessOrEqual",c,void 0)},1007108:(c,f,x,_,E)=>{t.$b("ReduceMean",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007283:(c,f,x,_,E)=>{t.$b("ReduceMax",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007457:(c,f,x,_,E)=>{t.$b("ReduceMin",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007631:(c,f,x,_,E)=>{t.$b("ReduceProd",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007806:(c,f,x,_,E)=>{t.$b("ReduceSum",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007980:(c,f,x,_,E)=>{t.$b("ReduceL1",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008153:(c,f,x,_,E)=>{t.$b("ReduceL2",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008326:(c,f,x,_,E)=>{t.$b("ReduceLogSum",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008503:(c,f,x,_,E)=>{t.$b("ReduceSumSquare",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008683:(c,f,x,_,E)=>{t.$b("ReduceLogSumExp",c,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008863:c=>{t.$b("Where",c,void 0)},1008916:(c,f,x)=>{t.$b("Transpose",c,{perm:f?Array.from((v(),O).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1009040:(c,f,x,_)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:re(x),format:_?"NHWC":"NCHW"})},1009173:(c,f,x,_)=>{t.$b("DepthToSpace",c,{blocksize:f,mode:re(x),format:_?"NHWC":"NCHW"})},1009306:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe,fn)=>{t.$b("ConvTranspose",c,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[x],group:_,kernelShape:[E],pads:[A,B],strides:[Y],wIsConst:()=>!!(v(),N)[oe>>>0],outputPadding:xe?Array.from((v(),O).subarray(Number(xe)>>>0,Number(Ie)>>>0)):[],outputShape:De?Array.from((v(),O).subarray(Number(De)>>>0,Number(Fe)>>>0)):[],activation:re(fn)})},1009739:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe)=>{t.$b("ConvTranspose",c,{format:Y?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),O).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],outputShape:Ie?Array.from((v(),O).subarray(Number(Ie)>>>0,Number(De)>>>0)):[],activation:re(Fe)})},1010400:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe,fn)=>{t.$b("ConvTranspose",c,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[x],group:_,kernelShape:[E],pads:[A,B],strides:[Y],wIsConst:()=>!!(v(),N)[oe>>>0],outputPadding:xe?Array.from((v(),O).subarray(Number(xe)>>>0,Number(Ie)>>>0)):[],outputShape:De?Array.from((v(),O).subarray(Number(De)>>>0,Number(Fe)>>>0)):[],activation:re(fn)})},1010833:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe)=>{t.$b("ConvTranspose",c,{format:Y?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),O).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),O).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],outputShape:Ie?Array.from((v(),O).subarray(Number(Ie)>>>0,Number(De)>>>0)):[],activation:re(Fe)})},1011494:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1011585:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe)=>{t.$b("AveragePool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),O).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],strides:Ie?Array.from((v(),O).subarray(Number(Ie)>>>0,Number(De)>>>0)):[]})},1012064:(c,f)=>{t.$b("GlobalAveragePool",c,{format:f?"NHWC":"NCHW"})},1012155:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe)=>{t.$b("AveragePool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),O).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],strides:Ie?Array.from((v(),O).subarray(Number(Ie)>>>0,Number(De)>>>0)):[]})},1012634:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1012721:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe)=>{t.$b("MaxPool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),O).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],strides:Ie?Array.from((v(),O).subarray(Number(Ie)>>>0,Number(De)>>>0)):[]})},1013196:(c,f)=>{t.$b("GlobalMaxPool",c,{format:f?"NHWC":"NCHW"})},1013283:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe)=>{t.$b("MaxPool",c,{format:Fe?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),O).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],strides:Ie?Array.from((v(),O).subarray(Number(Ie)>>>0,Number(De)>>>0)):[]})},1013758:(c,f,x,_,E)=>{t.$b("Gemm",c,{alpha:f,beta:x,transA:_,transB:E})},1013862:c=>{t.$b("MatMul",c,void 0)},1013916:(c,f,x,_)=>{t.$b("ArgMax",c,{keepDims:!!f,selectLastIndex:!!x,axis:_})},1014024:(c,f,x,_)=>{t.$b("ArgMin",c,{keepDims:!!f,selectLastIndex:!!x,axis:_})},1014132:(c,f)=>{t.$b("Softmax",c,{axis:f})},1014195:(c,f)=>{t.$b("Concat",c,{axis:f})},1014255:(c,f,x,_,E)=>{t.$b("Split",c,{axis:f,numOutputs:x,splitSizes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1014411:c=>{t.$b("Expand",c,void 0)},1014465:(c,f)=>{t.$b("Gather",c,{axis:Number(f)})},1014536:(c,f)=>{t.$b("GatherElements",c,{axis:Number(f)})},1014615:(c,f)=>{t.$b("GatherND",c,{batch_dims:Number(f)})},1014694:(c,f,x,_,E,A,B,Y,te,oe,xe)=>{t.$b("Resize",c,{antialias:f,axes:x?Array.from((v(),O).subarray(Number(x)>>>0,Number(_)>>>0)):[],coordinateTransformMode:re(E),cubicCoeffA:A,excludeOutside:B,extrapolationValue:Y,keepAspectRatioPolicy:re(te),mode:re(oe),nearestMode:re(xe)})},1015056:(c,f,x,_,E,A,B)=>{t.$b("Slice",c,{starts:f?Array.from((v(),O).subarray(Number(f)>>>0,Number(x)>>>0)):[],ends:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[],axes:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(B)>>>0)):[]})},1015320:c=>{t.$b("Tile",c,void 0)},1015372:(c,f,x)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:x?"NHWC":"NCHW"})},1015486:(c,f,x)=>{t.$b("InstanceNormalization",c,{epsilon:f,format:x?"NHWC":"NCHW"})},1015600:c=>{t.$b("Range",c,void 0)},1015653:(c,f)=>{t.$b("Einsum",c,{equation:re(f)})},1015734:(c,f,x,_,E)=>{t.$b("Pad",c,{mode:f,value:x,pads:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1015877:(c,f,x,_,E,A)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:x,spatial:!!E,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016046:(c,f,x,_,E,A)=>{t.$b("BatchNormalization",c,{epsilon:f,momentum:x,spatial:!!E,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016215:(c,f,x)=>{t.$b("CumSum",c,{exclusive:Number(f),reverse:Number(x)})},1016312:(c,f,x)=>{t.$b("DequantizeLinear",c,{axis:f,blockSize:x})},1016402:(c,f,x,_,E)=>{t.$b("GridSample",c,{align_corners:f,mode:re(x),padding_mode:re(_),format:E?"NHWC":"NCHW"})},1016572:(c,f,x,_,E)=>{t.$b("GridSample",c,{align_corners:f,mode:re(x),padding_mode:re(_),format:E?"NHWC":"NCHW"})},1016742:(c,f)=>{t.$b("ScatterND",c,{reduction:re(f)})},1016827:(c,f,x,_,E,A,B,Y,te)=>{t.$b("Attention",c,{numHeads:f,isUnidirectional:x,maskFilterValue:_,scale:E,doRotary:A,qkvHiddenSizes:B?Array.from((v(),O).subarray(Number(Y)>>>0,Number(Y)+B>>>0)):[],pastPresentShareBuffer:!!te})},1017099:c=>{t.$b("BiasAdd",c,void 0)},1017154:c=>{t.$b("BiasSplitGelu",c,void 0)},1017215:c=>{t.$b("FastGelu",c,void 0)},1017271:(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe,fn,$s)=>{t.$b("Conv",c,{format:Ie?"NHWC":"NCHW",auto_pad:f,dilations:x?Array.from((v(),O).subarray(Number(x)>>>0,Number(_)>>>0)):[],group:E,kernel_shape:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:Y?Array.from((v(),O).subarray(Number(Y)>>>0,Number(te)>>>0)):[],strides:oe?Array.from((v(),O).subarray(Number(oe)>>>0,Number(xe)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(De)>>>0],activation:re(Fe),activation_params:fn?Array.from((v(),Z).subarray(Number(fn)>>>0,Number($s)>>>0)):[]})},1017855:c=>{t.$b("Gelu",c,void 0)},1017907:(c,f,x,_,E,A,B,Y,te)=>{t.$b("GroupQueryAttention",c,{numHeads:f,kvNumHeads:x,scale:_,softcap:E,doRotary:A,rotaryInterleaved:B,smoothSoftmax:Y,localWindowSize:te})},1018124:(c,f,x,_)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:x,simplified:!!_})},1018235:(c,f,x,_)=>{t.$b("LayerNormalization",c,{axis:f,epsilon:x,simplified:!!_})},1018346:(c,f,x,_,E,A)=>{t.$b("MatMulNBits",c,{k:f,n:x,accuracyLevel:_,bits:E,blockSize:A})},1018473:(c,f,x,_,E,A)=>{t.$b("MultiHeadAttention",c,{numHeads:f,isUnidirectional:x,maskFilterValue:_,scale:E,doRotary:A})},1018632:(c,f)=>{t.$b("QuickGelu",c,{alpha:f})},1018696:(c,f,x,_,E)=>{t.$b("RotaryEmbedding",c,{interleaved:!!f,numHeads:x,rotaryEmbeddingDim:_,scale:E})},1018835:(c,f,x)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!x})},1018937:(c,f,x)=>{t.$b("SkipLayerNormalization",c,{epsilon:f,simplified:!!x})},1019039:(c,f,x,_)=>{t.$b("GatherBlockQuantized",c,{gatherAxis:f,quantizeAxis:x,blockSize:_})},1019160:c=>{t.Fd(c)},1019194:(c,f)=>t.Hd(Number(c),Number(f),t.Yc.Kd,t.Yc.errors)};function T$(c,f,x){return Zm(async()=>{await t.Dd(Number(c),Number(f),Number(x))})}function E$(){return typeof wasmOffsetConverter<"u"}function I$(c,f,x,_){var E=ve();try{return Og(c,f,x,_)}catch(A){if($e(E),A!==A+0)throw A;Se(1,0)}}function k$(c,f,x){var _=ve();try{return kg(c,f,x)}catch(E){if($e(_),E!==E+0)throw E;Se(1,0)}}function C$(c){var f=ve();try{Tg(c)}catch(x){if($e(f),x!==x+0)throw x;Se(1,0)}}function A$(c,f){var x=ve();try{return bs(c,f)}catch(_){if($e(x),_!==_+0)throw _;Se(1,0)}}function R$(c,f,x){var _=ve();try{Mg(c,f,x)}catch(E){if($e(_),E!==E+0)throw E;Se(1,0)}}function O$(c,f){var x=ve();try{zg(c,f)}catch(_){if($e(x),_!==_+0)throw _;Se(1,0)}}function z$(c,f,x,_,E,A,B){var Y=ve();try{return Ag(c,f,x,_,E,A,B)}catch(te){if($e(Y),te!==te+0)throw te;Se(1,0)}}function N$(c,f,x,_,E,A){var B=ve();try{Eg(c,f,x,_,E,A)}catch(Y){if($e(B),Y!==Y+0)throw Y;Se(1,0)}}function B$(c,f,x,_){var E=ve();try{Rg(c,f,x,_)}catch(A){if($e(E),A!==A+0)throw A;Se(1,0)}}function P$(c,f,x,_,E){var A=ve();try{Ig(c,f,x,_,E)}catch(B){if($e(A),B!==B+0)throw B;Se(1,0)}}function D$(c,f,x,_,E,A,B){var Y=ve();try{Bg(c,f,x,_,E,A,B)}catch(te){if($e(Y),te!==te+0)throw te;Se(1,0)}}function U$(c,f,x,_,E,A,B){var Y=ve();try{Pg(c,f,x,_,E,A,B)}catch(te){if($e(Y),te!==te+0)throw te;Se(1,0)}}function L$(c,f,x,_,E,A,B,Y){var te=ve();try{Fg(c,f,x,_,E,A,B,Y)}catch(oe){if($e(te),oe!==oe+0)throw oe;Se(1,0)}}function F$(c,f,x,_,E){var A=ve();try{return Ng(c,f,x,_,E)}catch(B){if($e(A),B!==B+0)throw B;Se(1,0)}}function G$(c,f,x){var _=ve();try{return Gg(c,f,x)}catch(E){if($e(_),E!==E+0)throw E;Se(1,0)}}function W$(c,f,x,_,E,A,B,Y){var te=ve();try{Wg(c,f,x,_,E,A,B,Y)}catch(oe){if($e(te),oe!==oe+0)throw oe;Se(1,0)}}function q$(c,f,x,_,E,A,B,Y,te,oe,xe,Ie){var De=ve();try{Dg(c,f,x,_,E,A,B,Y,te,oe,xe,Ie)}catch(Fe){if($e(De),Fe!==Fe+0)throw Fe;Se(1,0)}}function V$(c,f,x,_,E,A){var B=ve();try{return Ug(c,f,x,_,E,A)}catch(Y){if($e(B),Y!==Y+0)throw Y;Se(1,0)}}function H$(c,f,x){var _=ve();try{return qg(c,f,x)}catch(E){if($e(_),E!==E+0)throw E;return Se(1,0),0n}}function j$(c,f,x,_,E,A,B,Y,te){var oe=ve();try{Cg(c,f,x,_,E,A,B,Y,te)}catch(xe){if($e(oe),xe!==xe+0)throw xe;Se(1,0)}}function K$(c){var f=ve();try{return Vg(c)}catch(x){if($e(f),x!==x+0)throw x;Se(1,0)}}function Y$(c,f){var x=ve();try{return o0(c,f)}catch(_){if($e(x),_!==_+0)throw _;return Se(1,0),0n}}function X$(c){var f=ve();try{return Hg(c)}catch(x){if($e(f),x!==x+0)throw x;return Se(1,0),0n}}function Z$(c,f,x,_){var E=ve();try{return Qg(c,f,x,_)}catch(A){if($e(E),A!==A+0)throw A;Se(1,0)}}function Q$(c,f,x,_,E){var A=ve();try{return Jg(c,f,x,_,E)}catch(B){if($e(A),B!==B+0)throw B;Se(1,0)}}function J$(c,f,x,_,E,A){var B=ve();try{return e0(c,f,x,_,E,A)}catch(Y){if($e(B),Y!==Y+0)throw Y;Se(1,0)}}function ev(c,f,x,_,E,A){var B=ve();try{return t0(c,f,x,_,E,A)}catch(Y){if($e(B),Y!==Y+0)throw Y;Se(1,0)}}function tv(c,f,x,_,E,A,B,Y){var te=ve();try{return Lg(c,f,x,_,E,A,B,Y)}catch(oe){if($e(te),oe!==oe+0)throw oe;Se(1,0)}}function nv(c,f,x,_,E){var A=ve();try{return n0(c,f,x,_,E)}catch(B){if($e(A),B!==B+0)throw B;return Se(1,0),0n}}function rv(c,f,x,_){var E=ve();try{return r0(c,f,x,_)}catch(A){if($e(E),A!==A+0)throw A;Se(1,0)}}function iv(c,f,x,_){var E=ve();try{return i0(c,f,x,_)}catch(A){if($e(E),A!==A+0)throw A;Se(1,0)}}function av(c,f,x,_,E,A,B,Y,te,oe,xe,Ie){var De=ve();try{return a0(c,f,x,_,E,A,B,Y,te,oe,xe,Ie)}catch(Fe){if($e(De),Fe!==Fe+0)throw Fe;Se(1,0)}}function ov(c,f,x,_,E,A,B,Y,te,oe,xe){var Ie=ve();try{Xg(c,f,x,_,E,A,B,Y,te,oe,xe)}catch(De){if($e(Ie),De!==De+0)throw De;Se(1,0)}}function sv(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe,fn,$s){var dv=ve();try{Zg(c,f,x,_,E,A,B,Y,te,oe,xe,Ie,De,Fe,fn,$s)}catch(vs){if($e(dv),vs!==vs+0)throw vs;Se(1,0)}}function uv(c,f,x){var _=ve();try{return jg(c,f,x)}catch(E){if($e(_),E!==E+0)throw E;Se(1,0)}}function lv(c,f,x){var _=ve();try{return Kg(c,f,x)}catch(E){if($e(_),E!==E+0)throw E;Se(1,0)}}function cv(c,f,x,_){var E=ve();try{Yg(c,f,x,_)}catch(A){if($e(E),A!==A+0)throw A;Se(1,0)}}function xi(){if(0<Ve)je=xi;else if(i)y==null||y(t),W();else{for(var c=Re;0<c.length;)c.shift()(t);0<Ve?je=xi:(t.calledRun=!0,k||(W(),y==null||y(t)))}}return i||(Xt=await ue(),xi()),t.PTR_SIZE=4,P?t:new Promise((c,f)=>{y=c,w=f})}var Hs,js,z0=ee(()=>{var e,t;Hs=Vs,js=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),js&&Vs()}),Ci,Ai,Ks,ut,Ys,Cr,Xs,Zs,Ri,Qs,Oi,Js,zi,eu,Ni=ee(()=>{Ei(),Ci=typeof location>"u"?void 0:location.origin,Ai=self.location.href>"file:"&&self.location.href<"file;",Ks=()=>{{if(Ai){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ci).href}return self.location.href}},ut=Ks(),Ys=()=>{if(ut&&!ut.startsWith("blob:"))return ut.substring(0,ut.lastIndexOf("/")+1)},Cr=(e,t)=>{try{let n=t??ut;return(n?new URL(e,n):new URL(e)).origin===Ci}catch{return!1}},Xs=(e,t)=>{let n=t??ut;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Zs=(e,t)=>`${t??"./"}${e}`,Ri=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Qs=async e=>(await import(e)).default,Oi=(O0(),Jn(Gs)).default,Js=async()=>{if(!ut)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Cr(ut))return[void 0,Oi()];let e=await Ri(ut);return[e,Oi(e)]},zi=(z0(),Jn(qs)).default,eu=async(e,t,n,r)=>{let i=zi&&!(e||t);if(i)if(ut)i=Cr(ut)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,zi];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??Xs(a,t),s=n&&o&&!Cr(o,t),u=s?await Ri(o):o??Zs(a,t);return[s?u:void 0,await Qs(u)]}}}),Bi,Ar,nr,Pi,tu,nu,ru,Di,Le,wn=ee(()=>{Ni(),Ar=!1,nr=!1,Pi=!1,tu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},nu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ru=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Di=async e=>{if(Ar)return Promise.resolve();if(nr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Pi)throw new Error("previous call to 'initializeWebAssembly()' failed.");nr=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ru())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!nu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=tu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[d,p]=await eu(s,a,n>1,!!h||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,w)=>{let b={numThreads:n};if(h)b.wasmBinary=h,b.locateFile=$=>$;else if(l||a)b.locateFile=$=>l??a+$;else if(s&&s.indexOf("blob:")!==0)b.locateFile=$=>new URL($,s).href;else if(d){let $=Ys();$&&(b.locateFile=M=>$+M)}p(b).then($=>{nr=!1,Ar=!0,Bi=$,y(),d&&URL.revokeObjectURL(d)},$=>{nr=!1,Pi=!0,w($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Le=()=>{if(Ar&&Bi)return Bi;throw new Error("WebAssembly is not initialized yet.")}}),wt,Rr,ze,Ui=ee(()=>{wn(),wt=(e,t)=>{let n=Le(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Rr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Rr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ze=e=>{let t=Le(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),iu,N0=ee(()=>{wn(),Ui(),iu=e=>{let t=Le(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=wt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&ze("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Rr(e.extra,"",new WeakSet,(o,s)=>{let u=wt(o,r),l=wt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&ze(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),au,ou,su,_n,uu,lu,B0=ee(()=>{wn(),Ui(),au=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ou=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},su=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},_n=(e,t,n,r)=>{let i=wt(t,r),a=wt(n,r);Le()._OrtAddSessionConfigEntry(e,i,a)!==0&&ze(`Can't set a session config entry: ${t} - ${n}.`)},uu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",_n(e,"session.disable_quant_qdq","1",n),_n(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let d=i==null?void 0:i.deviceType;d&&_n(e,"deviceType",d,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let d=i;if(d!=null&&d.preferredLayout){if(d.preferredLayout!=="NCHW"&&d.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${d.preferredLayout}`);_n(e,"preferredLayout",d.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=wt(a,n),u=o.length,l=0,h=0;if(u>0){l=Le()._malloc(u*Le().PTR_SIZE),n.push(l),h=Le()._malloc(u*Le().PTR_SIZE),n.push(h);for(let d=0;d<u;d++)Le().setValue(l+d*Le().PTR_SIZE,o[d][0],"*"),Le().setValue(h+d*Le().PTR_SIZE,o[d][1],"*")}await Le()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&ze(`Can't append execution provider: ${a}.`)}},lu=async e=>{let t=Le(),n=0,r=[],i=e||{};su(i);try{let a=au(i.graphOptimizationLevel??"all"),o=ou(i.executionMode??"sequential"),s=typeof i.logId=="string"?wt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?wt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&ze("Can't create session options."),i.executionProviders&&await uu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);_n(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[d,p]of Object.entries(i.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let m=wt(d,r);t._OrtAddFreeDimensionOverride(n,m,p)!==0&&ze(`Can't set a free dimension override: ${d} - ${p}.`)}return i.extra!==void 0&&Rr(i.extra,"",new WeakSet,(d,p)=>{_n(n,d,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ze("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),bn,Lt,xn,Or,zr,Li,Fi,Gi,fe=ee(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Lt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},xn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Or=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},zr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Li=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Fi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Gi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Wi,cu=ee(()=>{Ei(),Wi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),du,hu,pu,fu,qi,mu,Me,Ft=ee(()=>{fe(),du=["V","I","W","E","F"],hu=(e,t)=>{console.log(`[${du[e]},${new Date().toISOString()}]${t}`)},qi=(e,t)=>{pu=e,fu=t},mu=(e,t)=>{let n=zr(e),r=zr(pu);n>=r&&hu(n,typeof t=="function"?t():t)},Me=(...e)=>{fu&&mu(...e)}}),gu,Bn,V,Nr,yu,wu,_u,ge=ee(()=>{gu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=gu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},V=class $i{static size(t){return $i.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return $i.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return $i.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Nr=class Er{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Er.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Er.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Er.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Er.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},yu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Bn.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},wu=-34028234663852886e22,_u=34028234663852886e22}),Vi,bu=ee(()=>{fe(),Vi=(e,t)=>new(Or(t))(e)}),Hi,ji,Ki,xu,Yi,$u,Xi,Zi,Qi,vu,Su,P0=ee(()=>{fe(),Ft(),Hi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ji=(e,t)=>{if(t==="int32")return e;let n=Hi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Or(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ki=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},xu=1,Yi=()=>xu++,$u=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Xi=(e,t)=>{let n=Hi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Zi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Xi(this.dataType,this.tensorShape)}destroy(){Me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Ki(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Qi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=$u.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Xi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ji(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Ki(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},vu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Yi();return this.tensorTrackersById.set(e,new Qi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Yi(),o=new Zi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Qi(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let d=this.freeTensors.splice(l,1)[0];return d.sessionId=e,d}Me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Zi({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Su=(...e)=>new vu(...e)}),rr,Mu,Tu,D0=ee(()=>{fe(),wn(),bu(),P0(),Ft(),rr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Mu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Tu=class{constructor(e){this.tensorManager=Su(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,qi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Mu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=rr.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=rr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Le().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Vi(n,t)}}registerMLTensor(e,t,n,r){let i=rr.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let d=ji(new Uint8Array(l),"int64");h=new Int32Array(d.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=rr.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Ji=ee(()=>{}),ea,Br,Pr,Eu,Iu,ta,na,ku,Cu,U0=ee(()=>{Ft(),Ji(),ea=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Br=[],Pr=e=>Math.ceil(Number(e)/16)*16,Eu=e=>{for(let t=0;t<Br.length;t++){let n=Br[t];if(e<=n)return n}return Math.ceil(e/16)*16},Iu=1,ta=()=>Iu++,na=async(e,t,n,r)=>{let i=Pr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},ku=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ea)Br.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Pr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Pr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=ta();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Eu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:ta(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await na(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ea.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Cu=(...e)=>new ku(...e)}),Au,Ae,Xe=ee(()=>{Au=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ae=e=>new Au(e)}),Pn,Dr,Ze,nt,de,He,ra,Dn,Qt,ce,ir,X,le,Ru,ia,Ou,zu,we=ee(()=>{fe(),ge(),Pn=64,Dr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ze=(e,t=1)=>{let n=Dr(e,t);return typeof n=="string"?n:n[0]},nt=(e,t=1)=>{let n=Dr(e,t);return typeof n=="string"?n:n[1]},de=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:V.computeStrides(n)})}),t},He=e=>e%4===0?4:e%2===0?2:1,ra=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Dn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Qt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ce=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,ir=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Dr(t,i),h=typeof l=="string"?l:l[1],d=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:d,tensor:t},m=P=>typeof P=="string"?P:`${P}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,$="";for(let P=0;P<o-1;P++)$+=`
    let dim${P} = current / ${ce(b,P,o)};
    let rest${P} = current % ${ce(b,P,o)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;$+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=P=>(g.offsetToIndices=!0,o<2?P:`o2i_${e}(${P})`),T=[];if(o>=2)for(let P=o-1;P>=0;P--)T.push(`${ce(b,P,o)} * (indices[${P}])`);let k=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${T.join("+")};
  }`,I=P=>(g.indicesToOffset=!0,o<2?P:`i2o_${e}(${P})`),v=(...P)=>o===0?"0u":`${p.indices}(${P.map(m).join(",")})`,C=(P,U)=>o<2?`${P}`:`${ce(P,U,o)}`,N=(P,U,W)=>o<2?`${P}=${W};`:`${ce(P,U,o)}=${W};`,j={},F=(P,U)=>{g.broadcastedIndicesToOffset=!0;let W=`${U.name}broadcastedIndicesTo${e}Offset`;if(W in j)return`${W}(${P})`;let L=[];for(let ne=o-1;ne>=0;ne--){let ue=U.indicesGet("outputIndices",ne+U.rank-o);L.push(`${C(b,ne)} * (${ue} % ${C(w,ne)})`)}return j[W]=`fn ${W}(outputIndices: ${U.type.indices}) -> u32 {
             return ${L.length>0?L.join("+"):"0u"};
           }`,`${W}(${P})`},H=(P,U)=>(()=>{if(p.storage===p.value)return`${e}[${P}]=${U};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${U}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=P=>(()=>{if(p.storage===p.value)return`${e}[${P}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${P}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${P}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),G=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${O(`i2o_${e}(indices)`)};
  }`,Z=o<2?"":(()=>{let P=s.map(W=>`d${W}: u32`).join(", "),U=s.map(W=>`d${W}`).join(", ");return`
  fn get_${e}(${P}) -> ${h} {
    return get_${e}ByIndices(${v(U)});
  }`})(),z=(...P)=>{if(P.length!==o)throw new Error(`indices length must be ${o}`);let U=P.map(m).join(",");return o===0?O("0u"):o===1?O(U[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${U})`)},q=P=>o<2?O(P):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${P})`),R=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,K=o<2?"":(()=>{let P=s.map(W=>`d${W}: u32`).join(", "),U=s.map(W=>`d${W}`).join(", ");return`
  fn set_${e}(${P}, value: ${h}) {
    set_${e}ByIndices(${v(U)}, value);
  }`})();return{impl:()=>{let P=[],U=!1;return g.offsetToIndices&&(P.push(M),U=!0),g.indicesToOffset&&(P.push(k),U=!0),g.broadcastedIndicesToOffset&&(Object.values(j).forEach(W=>P.push(W)),U=!0),g.set&&(P.push(K),U=!0),g.setByIndices&&(P.push(R),U=!0),g.get&&(P.push(Z),U=!0),g.getByIndices&&(P.push(G),U=!0),!a&&U&&P.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${V.computeStrides(n).join(",")});`),P.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:I,broadcastedIndicesToOffset:F,indices:v,indicesGet:C,indicesSet:N,set:(...P)=>{if(P.length!==o+1)throw new Error(`indices length must be ${o}`);let U=P[o];if(typeof U!="string")throw new Error("value must be string");let W=P.slice(0,o).map(m).join(",");return o===0?H("0u",U):o===1?H(W[0],U):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${W}, ${U})`)},setByOffset:H,setByIndices:(P,U)=>o<2?H(P,U):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${U});`),get:z,getByOffset:O,getByIndices:q,usage:r,name:e,strides:b,shape:w,rank:o}},X=(e,t,n,r=1)=>ir(e,t,n,"input",r),le=(e,t,n,r=1)=>ir(e,t,n,"output",r),Ru=(e,t,n)=>ir(e,t,n,"atomicOutput",1),ia=(e,t,n,r=1)=>ir(e,t,n,"internal",r),Ou=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},zu=(e,t)=>new Ou(e,t)}),Nu,aa,Bu,Pu,Du,Uu,lt,Lu,Fu,Jt=ee(()=>{fe(),ge(),Xe(),we(),Nu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},aa=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Bu=(e,t)=>V.sortBasedOnPerm(e,aa(e.length,t)),Pu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Du=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Uu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},lt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=aa(r,t),a=Bu(e.dims,i),o=e.dims,s=a,u=r<2||Uu(i,e.dims),l;if(u)return l=g=>{let y=X("input",n,o,4),w=le("output",n,s,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:h,newPerm:d}=Du(e.dims,i),p=V.areEqual(d,[2,3,1]),m=V.areEqual(d,[3,1,2]);if(h.length===2||p||m){o=p?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let g=16;return l=y=>{let w=X("a",n,o.length),b=le("output",n,s.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/g),y:Math.ceil(s[0]/g)},programUniforms:[{type:12,data:y},...de(o,s)]}},getShaderSource:l}}return l=g=>{let y=X("a",n,o.length),w=le("output",n,s.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Pu(i,r,y,w)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...de(o,s)]}},getShaderSource:l}},Lu=(e,t)=>{Nu(e.inputs,t.perm),e.compute(lt(e.inputs[0],t.perm))},Fu=e=>Ae({perm:e.perm})}),Gu,Wu,qu,Vu,Hu,ju,Ku,Yu,Xu,Zu,_t,Qu,Ju,el,tl,nl,rl,il,al,ol,sl,L0=ee(()=>{fe(),ge(),we(),sa(),Jt(),Gu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},qu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Vu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Hu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},ju=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Ku=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Yu=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Xu=(e,t)=>{let n=[];if(!Yu(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Zu=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=V.size(a),l=V.size(o),h=X("_A",n[0].dataType,s),d=le("output",i,a),p=64;u===1&&(p=256);let m=`
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

          var bestValue = f32(${qu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Gu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${r==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Vu[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},_t=(e,t,n,r)=>{let i=e.inputs.length===1?n:oa(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let o=V.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=Xu(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(lt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Hu(s.length,u.dims.length));let[h,d]=ju(u.dims,s),p=h;i.keepDims&&(p=Ku(h,o)),e.compute(Zu(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,d),{inputs:[u]})},Qu=(e,t)=>{_t(e,"ReduceMeanShared",t,"mean")},Ju=(e,t)=>{_t(e,"ReduceL1Shared",t,"l1")},el=(e,t)=>{_t(e,"ReduceL2Shared",t,"l2")},tl=(e,t)=>{_t(e,"ReduceLogSumExpShared",t,"logSumExp")},nl=(e,t)=>{_t(e,"ReduceMaxShared",t,"max")},rl=(e,t)=>{_t(e,"ReduceMinShared",t,"min")},il=(e,t)=>{_t(e,"ReduceProdShared",t,"prod")},al=(e,t)=>{_t(e,"ReduceSumShared",t,"sum")},ol=(e,t)=>{_t(e,"ReduceSumSquareShared",t,"sumSquare")},sl=(e,t)=>{_t(e,"ReduceLogSumShared",t,"logSum")}}),bt,ul,Ur,oa,xt,ll,cl,dl,hl,pl,fl,ml,gl,yl,wl,$t,_l,bl,xl,$l,vl,Sl,Ml,Tl,El,Il,sa=ee(()=>{fe(),ge(),Xe(),we(),L0(),bt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ul=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ur=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,d=V.normalizeAxes(i,h),p=!s&&d.length===0;l.forEach((y,w)=>{p||d.indexOf(w)>=0?o&&u.push(1):u.push(y)});let m=u.length,g=V.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=X("_A",n[0].dataType,h),$=le("output",a,m),M=r(b,$,d),S=M[2];for(let T=0,k=0;T<h;T++)p||d.indexOf(T)>=0?(o&&k++,S=`for(var j${T}: u32 = 0; j${T} < ${l[T]}; j${T}++) {
                  ${M[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${b.indicesSet("input_indices",T,`j${T}`)}
                  ${S}
                }`):(w.push(`${b.indicesSet("input_indices",T,$.indicesGet("output_indices",k))};`),k++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,$)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${M[0]}       // init ops for reduce max/min
          ${M[1]}
          ${S}
          ${M[3]}
          ${M.length===4?$.setByOffset("global_idx","value"):M.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...de(l,u)]})}},oa=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Ae({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},xt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:oa(i,n);e.compute(Ur(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?ul:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},ll=(e,t)=>{bt(e.inputs),xt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},cl=(e,t)=>{bt(e.inputs),xt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},dl=(e,t)=>{bt(e.inputs),xt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},hl=(e,t)=>{bt(e.inputs),xt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},pl=(e,t)=>{bt(e.inputs),xt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},fl=(e,t)=>{bt(e.inputs),xt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},ml=(e,t)=>{bt(e.inputs),xt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},gl=(e,t)=>{bt(e.inputs),xt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},yl=(e,t)=>{bt(e.inputs),xt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},wl=(e,t)=>{bt(e.inputs),xt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},$t=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},_l=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):Qu(e,t)},bl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cl(e,t):Ju(e,t)},xl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):el(e,t)},$l=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):tl(e,t)},vl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):nl(e,t)},Sl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):rl(e,t)},Ml=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):il(e,t)},Tl=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):al(e,t)},El=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):ol(e,t)},Il=(e,t)=>{$t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ll(e,t):sl(e,t)}}),ua,kl,Cl,la,F0=ee(()=>{fe(),Xe(),sa(),ua=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},kl=(e,t)=>{ua(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ur("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Cl=(e,t)=>{ua(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ur("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},la=e=>Ae(e)}),Al,Lr,Rl,Ol,zl,ar,Nl,Bl,ca=ee(()=>{fe(),ge(),Ji(),we(),Al=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=i.dims[0]/3,p=d,m=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(d!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==d+p+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=g+y,b=-1,$=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:h,hiddenSize:d,vHiddenSize:m,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Lr=(e,t,n)=>t&&e?`
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
    `,Rl=(e,t,n,r,i,a,o,s)=>{let u=He(o?1:a),l=64,h=a/u;h<l&&(l=32);let d=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:d}],m=Ze(e.dataType,u),g=nt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let $=le("x",e.dataType,e.dims,u),M=[$],S=o?X("seq_lens",o.dataType,o.dims):void 0;S&&M.push(S);let T=s?X("total_sequence_length_input",s.dataType,s.dims):void 0;T&&M.push(T);let k=nt(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(I).declareVariables(...M)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Lr(S,T,!1)}
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
        x[offset + i] = ${$.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Ol=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=d?[a.batchSize,p,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=He(a.headSize),b=a.headSize/w,$=12,M={x:Math.ceil(l/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:g}],T=d&&r&&V.size(r.dims)>0,k=["type","type"];T&&k.push("type"),i&&k.push("type"),s&&k.push("type"),u&&k.push("type");let I=[{dims:h,dataType:t.dataType,gpuDataType:0}];d&&I.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=C=>{let N=X("q",t.dataType,t.dims,w),j=X("key",n.dataType,n.dims,w),F=[N,j];if(T){let R=X("past_key",r.dataType,r.dims,w);F.push(R)}i&&F.push(X("attention_bias",i.dataType,i.dims));let H=s?X("seq_lens",s.dataType,s.dims):void 0;H&&F.push(H);let O=u?X("total_sequence_length_input",u.dataType,u.dims):void 0;O&&F.push(O);let G=le("output",t.dataType,h),Z=[G];d&&Z.push(le("present_key",t.dataType,m,w));let z=nt(1,w),q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${N.type.storage}, ${$*$}>;
  ${C.registerUniforms(q).declareVariables(...F,...Z)}
  ${C.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Lr(H,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${z}(0);
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
          value += ${z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${G.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:I,dispatchGroup:M,programUniforms:S}),getShaderSource:v}},zl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,d=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=d?[i.batchSize,p,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,h],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],$=d&&r&&V.size(r.dims)>0,M=["type","type"];$&&M.push("type"),o&&M.push("type"),s&&M.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];d&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=k=>{let I=X("probs",t.dataType,t.dims),v=X("v",n.dataType,n.dims),C=[I,v];$&&C.push(X("past_value",r.dataType,r.dims));let N=o?X("seq_lens",o.dataType,o.dims):void 0;o&&C.push(N);let j=s?X("total_sequence_length_input",s.dataType,s.dims):void 0;s&&C.push(j);let F=[le("output",t.dataType,g)];d&&F.push(le("present_value",t.dataType,m));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${I.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${I.type.value}, ${y*y}>;
  ${k.registerUniforms(H).declareVariables(...C,...F)}
  ${k.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Lr(N,j,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&d?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:b}),getShaderSource:T}},ar=(e,t,n,r,i,a,o,s,u,l,h=void 0,d=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),m=p>1?o:void 0,g=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&V.size(u.dims)>0?u:void 0,$=[t,n];m&&V.size(m.dims)>0&&$.push(m),b&&$.push(b),h&&$.push(h),d&&$.push(d);let M=e.compute(Ol(p,t,n,m,b,l,y,h,d),{inputs:$,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Rl(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,h,d),{inputs:h&&d?[M,h,d]:[M],outputs:[]});let S=[M,r];g&&V.size(g.dims)>0&&S.push(g),h&&S.push(h),d&&S.push(d),e.compute(zl(p,M,r,g,l,y,h,d),{inputs:S,outputs:p>1?[0,2]:[0]})},Nl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=d=>{let p=le("output_q",u[0].dataType,n),m=le("output_k",u[0].dataType,n),g=le("output_v",u[0].dataType,n),y=X("input",u[0].dataType,u[0].dims),w=X("weight",u[1].dataType,u[1].dims),b=X("bias",u[2].dataType,u[2].dims),$=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${$}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${$}, ${o*o}>;
  var<workgroup> tileWeightK: array<${$}, ${o*o}>;
  var<workgroup> tileWeightV: array<${$}, ${o*o}>;
  ${d.registerUniforms(M).declareVariables(y,w,b,p,m,g)}
  ${d.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Bl=(e,t)=>{let n=Al(e.inputs,t),[r,i,a]=Nl(e,n);return ar(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Pl,Dl,Ul,Ll,G0=ee(()=>{ft(),fe(),ge(),Xe(),we(),Pl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Dl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?He(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=V.size(a)/o,l=r,h=l?a.length:a,d=X("x",e[0].dataType,e[0].dims,o),p=X("scale",e[1].dataType,e[1].dims,s),m=X("bias",e[2].dataType,e[2].dims,s),g=X("inputMean",e[3].dataType,e[3].dims,s),y=X("inputVar",e[4].dataType,e[4].dims,s),w=le("y",e[0].dataType,h,o),b=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)M+=`cIndices[${S}] = outputIndices[${S}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},$=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(d,p,m,g,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...de(a)]:[{type:12,data:u}]})}},Ul=e=>Ae(e),Ll=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Ul({...t,outputCount:r});if(Ue.webgpu.validateInputContent&&Pl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Dl(n,i))}}),Fl,Gl,Wl,W0=ee(()=>{ge(),we(),Fl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Gl=e=>{let t=e[0].dims,n=e[0].dims[2],r=V.size(t)/4,i=e[0].dataType,a=X("input",i,t,4),o=X("bias",i,[n],4),s=X("residual",i,t,4),u=le("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Wl=e=>{Fl(e.inputs),e.compute(Gl(e.inputs))}}),ql,ke,Vl,Hl,jl,Kl,Yl,Xl,Zl,Ql,Jl,ec,tc,nc,rc,ic,or,ac,Fr,oc,sc,uc,lc,cc,dc,hc,pc,fc,mc,gc,yc,wc,_c,bc,xc,da,$c,ha,pa,vc,Sc,Mc,Tc,Ec,Ic,fa=ee(()=>{fe(),ge(),Xe(),we(),ql=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=X("inputData",n,[s],4),h=le("outputData",r,[s],4),d=[{name:"vec_size",type:"u32"}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},ke=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(V.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>ql(l,V.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(V.size(l[0].dims)/64/4)},programUniforms:u})}},Vl=e=>{e.compute(ke(e.inputs[0],"Abs","abs"))},Hl=e=>{e.compute(ke(e.inputs[0],"Acos","acos"))},jl=e=>{e.compute(ke(e.inputs[0],"Acosh","acosh"))},Kl=e=>{e.compute(ke(e.inputs[0],"Asin","asin"))},Yl=e=>{e.compute(ke(e.inputs[0],"Asinh","asinh"))},Xl=e=>{e.compute(ke(e.inputs[0],"Atan","atan"))},Zl=e=>{e.compute(ke(e.inputs[0],"Atanh","atanh"))},Ql=e=>Ae(e),Jl=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ke(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},ec=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ae({min:t,max:n})},tc=(e,t)=>{let n=t||ec(e.inputs),r=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},nc=e=>{e.compute(ke(e.inputs[0],"Ceil","ceil"))},rc=e=>{e.compute(ke(e.inputs[0],"Cos","cos"))},ic=e=>{e.compute(ke(e.inputs[0],"Cosh","cosh"))},or=e=>Ae(e),ac=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Fr=(e="f32")=>`
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
}`,oc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Fr(t)))},sc=e=>{e.compute(ke(e.inputs[0],"Exp","exp"))},uc=e=>{e.compute(ke(e.inputs[0],"Floor","floor"))},lc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Fr(t)))},cc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},dc=e=>{e.compute(ke(e.inputs[0],"Not",t=>`!${t}`))},hc=e=>{e.compute(ke(e.inputs[0],"Neg",t=>`-${t}`))},pc=e=>{e.compute(ke(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},fc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},mc=e=>{e.compute(ke(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},gc=e=>Ae(e),yc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},wc=e=>{e.compute(ke(e.inputs[0],"Sin","sin"))},_c=e=>{e.compute(ke(e.inputs[0],"Sinh","sinh"))},bc=e=>{e.compute(ke(e.inputs[0],"Sqrt","sqrt"))},xc=e=>{e.compute(ke(e.inputs[0],"Tan","tan"))},da=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,$c=e=>{e.compute(ke(e.inputs[0],"Tanh",da))},ha=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${da("v")};
}
`,pa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,vc=e=>{let t=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"FastGelu",pa,ha(t),void 0,e.inputs[0].dataType))},Sc=(e,t)=>{let n=nt(e.inputs[0].dataType);return e.compute(ke(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Mc=e=>{e.compute(ke(e.inputs[0],"Log","log"))},Tc=(e,t)=>`
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
`,Ec=e=>`quick_gelu_impl(${e})`,Ic=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(ke(e.inputs[0],"QuickGelu",Ec,Tc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),kc,Cc,Ac,q0=ee(()=>{ge(),we(),fa(),kc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Cc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=X("input",e[0].dataType,e[0].dims,4),r=X("bias",e[0].dataType,[e[0].dims[2]],4),i=le("output",e[0].dataType,t,4),a=V.size(t)/4,o=Ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Fr(o)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ac=e=>{kc(e.inputs),e.compute(Cc(e.inputs))}}),Rc,Oc,vt,zc,Nc,Bc,Pc,Dc,Uc,Lc,Fc,Gc,Wc,V0=ee(()=>{fe(),ge(),we(),Rc=(e,t,n,r,i,a,o,s,u,l,h,d)=>{let p,m;typeof s=="string"?p=m=($,M)=>`${s}((${$}),(${M}))`:typeof s=="function"?p=m=s:(p=s.scalar,m=s.vector);let g=le("outputData",h,r.length,4),y=X("aData",u,t.length,4),w=X("bData",l,n.length,4),b;if(i)if(a){let $=V.size(t)===1,M=V.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;$||M?b=g.setByOffset("global_idx",m($?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(o||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||T?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(M,S,T="")=>{let k=`aData[indexA${S}][componentA${S}]`,I=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${M}[${S}] = ${T}(${p(k,I)});
          `};h===9?b=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:b=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,g)}

        ${d??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},Oc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!V.areEqual(s,u),h=s,d=V.size(s),p=!1,m=!1,g=[l];if(l){let y=Bn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),d=V.size(h);let w=V.size(s)===1,b=V.size(u)===1,$=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;g.push(w),g.push(b),g.push($),g.push(M);let S=1;for(let T=1;T<h.length;T++){let k=s[s.length-T],I=u[u.length-T];if(k===I)S*=k;else break}S%4===0?(m=!0,p=!0):(w||b||$||M)&&(p=!0)}else p=!0;return g.push(p),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Rc(y,s,u,h,p,l,m,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(V.size(h)/4)},...de(s,u,h)]})}},vt=(e,t,n,r,i,a)=>{e.compute(Oc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},zc=e=>{vt(e,"Add",(t,n)=>`${t}+${n}`)},Nc=e=>{vt(e,"Div",(t,n)=>`${t}/${n}`)},Bc=e=>{vt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Pc=e=>{vt(e,"Mul",(t,n)=>`${t}*${n}`)},Dc=e=>{let t=X("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;vt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Uc=e=>{vt(e,"Sub",(t,n)=>`${t}-${n}`)},Lc=e=>{vt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Fc=e=>{vt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Gc=e=>{vt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Wc=e=>{vt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),qc,Vc,Hc,jc,Kc,Yc,H0=ee(()=>{fe(),ge(),Xe(),we(),qc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Vc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Hc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},jc=(e,t,n,r)=>{let i=V.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=X(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...de(e[y].dims));h.push(...de(n));let d=le("output",r,n.length),p=d.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,d)})()}

  ${Vc(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${d.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Hc(o,d)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:g}},Kc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=V.normalizeAxis(t.axis,r.length);qc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>V.size(s.dims)>0);e.compute(jc(o,i,a,n[0].dataType),{inputs:o})},Yc=e=>Ae({axis:e.axis})}),$n,vn,Sn,ma,Mn=ee(()=>{fe(),ge(),$n=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ma=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[wu,_u];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,Xc,ga=ee(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Xc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Zc,j0=ee(()=>{Zc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),sr,ya,wa=ee(()=>{fe(),ge(),we(),Mn(),sr=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${ce(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,ce(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},ya=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],d=He(l),p=He(h),m=He(u),g=V.size(n)/d/m,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[V.size(w),u,l],$=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:h}];vn(t,$),$.push(...de(w,o,s)),y&&$.push(...de(e[2].dims)),$.push(...de(b));let M=S=>{let T=ia("batch_dims",e[0].dataType,w.length),k=X("a",e[0].dataType,o.length,p),I=X("b",e[1].dataType,s.length,d),v=le("output",e[0].dataType,b.length,d),C=Ze(v.type.tensor),N=$n(t,v.type.value,C),j=[k,I],F="";if(y){let G=i?d:1;j.push(X("bias",e[2].dataType,e[2].dims.length,G)),F=`${i?`value += bias[col / ${G}];`:`value += ${v.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,H);let O=()=>{let G=`var a_data: ${k.type.value};`;for(let Z=0;Z<p;Z++)G+=`
              let b_data${Z} = b[(b_offset + (k + ${Z}) * uniforms.N + col) / ${d}];`;for(let Z=0;Z<m;Z++){G+=`a_data = a[(a_offset + (row + ${Z}) * uniforms.K + k) / ${p}];`;for(let z=0;z<p;z++)G+=`
            values[${Z}] = fma(${I.type.value}(a_data${p===1?"":`[${z}]`}), b_data${z}, values[${Z}]);
`}return G};return`
  ${S.registerUniforms(H).registerInternalVariables(T).declareVariables(...j,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${sr("a_indices",k,k.rank-2,T.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${sr("b_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${O()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${F}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${d};${p};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:M}}}),Qc,Jc,_a,ba,ed,xa,td,Gr,$a=ee(()=>{fe(),ge(),we(),Mn(),wa(),ga(),Qc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Jc=(e,t)=>e?`
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
        }`,_a=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,d=i?a:u,p=h/t[0],m=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
          ${Qc(i,r)}
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

          ${Jc(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ba=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ed=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xa=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],d=i?l:a,p=i?a:l;if(!(p%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=p/t[1],g=d/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${ba(i,r)}
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
      ${ba(i,r)}
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
      ${ed(i)}
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
    ${w}
  }
`},td=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ze(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${sr("aIndices",o,o.rank-2,a.rank,"batchIndices")}
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
        ${sr("bIndices",s,s.rank-2,a.rank,"batchIndices")}
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
    `},Gr=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),d=V.size(h),p=o[o.length-2],m=o[o.length-1],g=s[s.length-1],y=m%4===0&&g%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],$=[Math.ceil(g/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(d/b[2]/w[2])],M=y?4:1,S=[...u,p,m/M],T=S.length,k=[...l,m,g/M],I=k.length,v=[d,p,g/M],C=[{type:6,data:p},{type:6,data:g},{type:6,data:m}];vn(t,C),C.push(...de(h,S,k));let N=["rank","rank"],j=e.length>2;j&&(C.push(...de(e[2].dims)),N.push("rank")),C.push(...de(v));let F=H=>{let O=h.length,G=ia("batchDims",e[0].dataType,O,1),Z=Ze(e[0].dataType),z=X("a",e[0].dataType,T,M),q=X("b",e[1].dataType,I,M),R=le("result",e[0].dataType,v.length,M),K=[z,q];if(j){let ne=i?M:1;K.push(X("bias",e[2].dataType,e[2].dims.length,ne))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,P);let U=Ze(R.type.tensor),W=$n(t,R.type.value,U),L=td(M,j,W,[G,z,q,R],i);return`
  ${H.registerUniforms(P).registerInternalVariables(G).declareVariables(...K,R)}
  ${L}
  ${y?_a(w,b,Z,G):xa(w,b,Z,G)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:C}),getShaderSource:F}}}),nd,rd,K0=ee(()=>{fe(),Ft(),we(),Mn(),ga(),j0(),$a(),nd=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},d=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},p=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",b=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
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
    ${$}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Je(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${$}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
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
    return ${Je(s,l)}(0.0);`,T=Je(u,l),k=Je(e?o:s,l),I=Je(e?s:o,l),v=$n(a,T,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?M:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${Xc(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},rd=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],d=n[0],p=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&g%4===0,w=l?g:p*m,b=l?p*m:g,$=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/$[0]/M[0]),Math.ceil(b/$[1]/M[1]),Math.ceil(d/$[2]/M[2])];Me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let T=y?l&&h%4!==0?3:4:1,k=$[1]*M[1],I=$[0]*M[0],v=Math.max($[0]*T,$[1]),C=r%k===0,N=i%I===0,j=a%v===0,F=y?[T,4,4]:[1,1,1],H=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vn(t,H),H.push(...de(e[0].dims,e[1].dims));let O=["rank","rank"];o&&(H.push(...de(e[2].dims)),O.push("rank")),H.push(...de(n));let G=Z=>{let z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,z);let q=y?4:1,R=Ze(e[0].dataType),K=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${R}>`:R}) {
        result[flatIndex] = ${y?`vec4<${R}>`:R}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${R}>`:R}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,P=X("x",e[0].dataType,e[0].dims.length,T===3?1:T),U=X("w",e[1].dataType,e[1].dims.length,q),W=[P,U],L=le("result",e[0].dataType,n.length,q);if(o){let ne=X("bias",e[2].dataType,e[2].dims.length,q);W.push(ne),K+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${R}>`:R} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Zc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Z.registerUniforms(z).declareVariables(...W,L)}
        ${K}
        ${nd(l,C,N,j,o,t,F[0],F[1],F[2],R)}
        ${y?_a(M,$,R,void 0,!l,v):xa(M,$,R,void 0,!l,v,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${C};${N};${j};${k};${I};${v}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:H}),getShaderSource:G}}}),id,va,ur,ad,Sa,od,sd,ud,Y0=ee(()=>{fe(),Ft(),ge(),we(),Mn(),ga(),id=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},va=e=>typeof e=="number"?[e,e,e]:e,ur=(e,t)=>t<=1?e:e+(e-1)*(t-1),ad=(e,t,n,r=1)=>{let i=ur(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Sa=(e,t,n,r,i)=>{i==null&&(i=ad(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},od=(e,t,n,r,i,a,o,s,u,l)=>{let h,d,p,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Sa([t,n,r,1],[s,u,l],1,[i,a,o],e);d=g[0],p=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Sa([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);d=g[0],p=g[1],m=g[2]}else if(e==="SAME_UPPER"){d=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let g=(d-1)*i+s-t,y=(p-1)*a+u-n,w=(m-1)*o+l-r,b=Math.floor(g/2),$=g-b,M=Math.floor(y/2),S=y-M,T=Math.floor(w/2),k=w-T;h={top:M,bottom:S,left:T,right:k,front:b,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:m}},sd=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,d;if(o==="channelsLast")[s,u,l,h,d]=e;else if(o==="channelsFirst")[s,d,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,m,g,y]=t,[w,b,$]=va(n),[M,S,T]=va(r),k=ur(m,M),I=ur(g,S),v=ur(y,T),{padInfo:C,outDepth:N,outHeight:j,outWidth:F}=od(i,u,l,h,w,b,$,k,I,v),H=a?p*d:p,O=[0,0,0,0,0];return o==="channelsFirst"?O=[s,H,N,j,F]:o==="channelsLast"&&(O=[s,N,j,F,H]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:d,outDepth:N,outHeight:j,outWidth:F,outChannels:H,padInfo:C,strideDepth:w,strideHeight:b,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:k,effectiveFilterHeight:I,effectiveFilterWidth:v,dilationDepth:M,dilationHeight:S,dilationWidth:T,inShape:e,outShape:O,filterShape:t}},ud=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(id(u.x.map(w=>n[w]))/s[0]),1,1];Me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,d=V.size(n),p=[{type:12,data:d},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];vn(t,p),p.push(...de(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(p.push(...de(e[2].dims)),m.push("rank")),p.push(...de(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,b);let $=1,M=Ze(e[0].dataType),S=X("x",e[0].dataType,e[0].dims.length,h),T=X("W",e[1].dataType,e[1].dims.length,$),k=[S,T],I=le("result",e[0].dataType,n.length,$),v="";if(g){let j=X("bias",e[2].dataType,e[2].dims.length,$);k.push(j),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?ce("coords",4,5):ce("coords",1,5)}];
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
          ${w.registerUniforms(b).declareVariables(...k,I)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ce("coords",0,S.rank)};
              let d2 = ${o?ce("coords",S.rank-1,S.rank):ce("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${o?ce("coords",1,S.rank):ce("coords",2,S.rank)},
              ${o?ce("coords",2,S.rank):ce("coords",3,S.rank)},
              ${o?ce("coords",3,S.rank):ce("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?ce("uniforms.x_shape",1,S.rank):ce("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${o?ce("uniforms.x_shape",2,S.rank):ce("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${o?ce("uniforms.x_shape",3,S.rank):ce("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${o?ce("uniforms.x_shape",4,S.rank):ce("uniforms.x_shape",1,S.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),ld,cd,X0=ee(()=>{fe(),ge(),we(),Mn(),ld=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,d=u&&h>=4?He(l):1,p=V.size(n)/d,m=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];vn(t,m),m.push(...de(o,[s[0],s[1],s[2],s[3]/d]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...de([n[0],n[1],n[2],n[3]/d]));let y=w=>{let b=le("output",e[0].dataType,n.length,d),$=Ze(b.type.tensor),M=$n(t,b.type.value,$),S=X("x",e[0].dataType,o.length),T=X("w",e[1].dataType,s.length,d),k=[S,T];i&&k.push(X("b",e[2].dataType,e[2].dims,d));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,I);let v=u?`
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
  ${w.registerUniforms(I).declareVariables(...k,b)}

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
    ${a}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},cd=(e,t,n,r)=>{let i=e.length>2,a=He(n[3]),o=He(n[2]),s=V.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vn(t,d),d.push(...de(u,l,h));let p=(o-1)*t.strides[1]+l[1],m=g=>{let y=le("output",e[0].dataType,h.length,a),w=Ze(y.type.tensor),b=$n(t,y.type.value,w),$=X("x",e[0].dataType,u.length,a),M=X("w",e[1].dataType,l.length,a),S=[$,M];i&&S.push(X("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,k),`
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

    var x_vals: array<${$.type.value}, ${p}>;
    var values: array<${y.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${p}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:m}}}),dd,Wr,hd,qr,Ma,Ta,pd,fd,Ea,Z0=ee(()=>{ge(),K0(),Y0(),$a(),X0(),Mn(),wa(),Jt(),dd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,m)=>p+(p-1)*(n[m]-1)),d=s.map((p,m)=>p+r[m]+r[m+u]).map((p,m)=>Math.floor((p-h[m]+i[m])/i[m]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},Wr=[2,3,1,0],hd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Nr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ma=e=>{let t=ma(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ta=(e,t,n,r)=>{let i=n.format==="NHWC",a=dd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let I=e.kernelCustomData.wT??e.compute(lt(t[1],Wr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),k.push(I)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(cd(k,n,a,r),{inputs:k}):e.compute(ld(k,n,a,r),{inputs:k});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],d=t[1].dims[3],p=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&h===s&&d===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=a[0],I,v,C,N=[];if(i){let H=e.kernelCustomData.wT??e.compute(lt(t[1],Wr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),y){let O=s*u*l;I=t[0].reshape([1,k,O]),v=H.reshape([1,O,g]),C=[1,k,g]}else I=t[0].reshape([k,s*u,l]),v=H.reshape([1,l,g]),C=[k,p*m,g];N.push(I),N.push(v)}else I=t[0].reshape([k,l,s*u]),v=t[1].reshape([1,g,l]),C=[k,g,p*m],N.push(v),N.push(I);o&&N.push(t[2]);let j=C[2],F=N[0].dims[N[0].dims.length-1];j<8&&F<8?e.compute(ya(N,n,a,C,i,r),{inputs:N}):e.compute(Gr(N,n,a,C,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(lt(t[1],Wr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let $=[t[0],b];o&&$.push(t[2]);let M=i?p*m:g,S=i?g:p*m,T=h*d*l;e.compute(rd($,n,a,M,S,T,o,w,r),{inputs:$})},pd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=qr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Ta(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},fd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=qr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=sd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(ud(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Ea=(e,t)=>{if(hd(e.inputs,t),e.inputs[0].dims.length===3)pd(e,t);else if(e.inputs[0].dims.length===5)fd(e,e.inputs,t);else{let n=qr(t,e.inputs);Ta(e,e.inputs,n)}}}),md,Q0=ee(()=>{fe(),Ft(),ge(),we(),md=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?He(u):1,d=a&&l===1&&u>=4,p=d?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-p,g=a?He(l):1,y=a?l===1?h:g:1,w=V.size(i)/g,b=[Math.ceil(w/64),1,1];Me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let $=["rank","rank"],M=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],k=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],I=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:w},{type:12,data:M},{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:6,data:I},{type:12,data:p},{type:12,data:u},{type:12,data:l},...de(e[0].dims,e[1].dims)];r&&(v.push(...de(e[2].dims)),$.push("rank")),v.push(...de(i));let C=N=>{let j=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Ze(e[0].dataType),H=a?1:2,O=a?2:3,G=a?3:1,Z=X("W",e[1].dataType,e[1].dims.length,y),z=X("Dy",e[0].dataType,e[0].dims.length,h),q=[z,Z];r&&q.push(X("bias",e[2].dataType,[i[G]].length,g));let R=le("result",e[0].dataType,i.length,g),K=()=>{let W="";if(d)h===4?W+=`
        let xValue = ${z.getByOffset("x_offset")};
        let wValue = ${Z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?W+=`
          dotProd = dotProd + dot(vec4<${F}>(${z.getByOffset("x_offset")}, ${z.getByOffset("x_offset + 1u")}), vec4<${F}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(W+=`
          dotProd = dotProd + dot(vec4<${F}>(${z.getByOffset("x_offset")}, ${z.getByOffset("x_offset + 1u")}, ${z.getByOffset("x_offset + 2u")}, ${z.getByOffset("x_offset + 3u")}), vec4<${F}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}, ${Z.getByOffset("w_offset + 2u")}, ${Z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(W+=`
                  let xValue = ${a?z.getByOffset(`${z.indicesToOffset(`${z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):z.get("batch","inputChannel","idyR","idyC")};
        `,h===1)W+=`
          let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Z.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let L=0;L<h;L++)W+=`
            let wValue${L} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${L}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${L}] * wValue${L};`;return W},P=()=>{if(m===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let W="";if(h===1){W+="dotProd = dotProd";for(let L=0;L<m;L++)W+=`
            + ${z.getByOffset(`x_offset + ${L}`)} * ${Z.getByOffset(`w_offset + ${L}`)}`;W+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);W+=`
          let xValue = ${z.getByOffset("x_offset")};
          let wValue = ${Z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return W},U=`
            let outputIndices = ${R.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${R.indicesGet("outputIndices",0)};
            let d1 = ${R.indicesGet("outputIndices",G)};
            let r = ${R.indicesGet("outputIndices",H)};
            let c = ${R.indicesGet("outputIndices",O)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${R.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${z.indicesToOffset(`${z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${Z.indicesToOffset(`${Z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:h}) {
                  ${K()}
                  inputChannel = inputChannel + ${d?4:h};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${R.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(j).declareVariables(...q,R)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${U}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${g}${d}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:C}}}),gd,yd,wd,Ia,_d,bd,ka,xd,$d,J0=ee(()=>{Q0(),Mn(),Jt(),gd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,yd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},wd=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,d=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],m=t[s?3:1]*i;for(let g=0,y=e.length-h-(s?1:0);g<h;++g,++y){let w=e[y],b=d?w*o[g]:l[g],$=gd(w,o[g],a[g],t[y],n[g],b);yd($,r,a,g,g+h),d&&l.push(o[g]*(w-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+h])}l.splice(0,0,p),l.splice(s?3:1,0,m)},Ia=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((d,p)=>d*p,1)===0){n.length=0;for(let d=2;d<t[1].dims.length;++d)n.push(t[1].dims[d])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;u=new Array(d).fill(1)}let l=e.strides.slice();if(l.reduce((d,p)=>d+p,0)===0){let d=t[0].dims.length-2;l=new Array(d).fill(1)}wd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},_d=e=>{let t=ma(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,d=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:d,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},bd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ka=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(lt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(md(a,n,r),{inputs:a})},xd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Ia({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);ka(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},$d=(e,t)=>{if(bd(e.inputs,t),e.inputs[0].dims.length===3)xd(e,t);else{let n=Ia(t,e.inputs);ka(e,e.inputs,n)}}}),vd,Sd,Md,ey=ee(()=>{fe(),ge(),Xe(),we(),vd=(e,t,n,r)=>{let i=V.size(t),a=t.length,o=X("input",e,a),s=le("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=V.normalizeAxis(u,a),h=d=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,m=ce("uniforms.input_shape","uniforms.axis",a),g=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?m:p+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...de(t,t)]}),getShaderSource:h}},Sd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(vd(r,n,i,t),{inputs:[0]})},Md=e=>{let t=e.exclusive===1,n=e.reverse===1;return Ae({exclusive:t,reverse:n})}}),Td,Ed,Id,kd,Cd,ty=ee(()=>{fe(),ge(),Xe(),we(),Td=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ed=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Id=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),p=d.dims.length,m=e.dataType,g=X("a",m,p),y=le("output",m,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Ed(s,p,g,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let $=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=V.size($),S=d.dims,T=V.sortBasedOnPerm(S,s);return{outputs:[{dims:$,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...de(S,T)]}},getShaderSource:w}},kd=(e,t)=>{Td(e.inputs),e.compute(Id(e.inputs[0],t))},Cd=e=>Ae({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Vr,lr,Ca,Ad,Rd,Od,zd,Aa,Nd,Bd,Pd,ny=ee(()=>{fe(),ge(),Xe(),we(),Vr="[a-zA-Z]|\\.\\.\\.",lr="("+Vr+")+",Ca="^"+lr+"$",Ad="("+lr+",)*"+lr,Rd="^"+Ad+"$",Od=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},zd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Rd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Ca)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(lr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Vr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Ca))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Vr,"g")),l=new Od(r);return u==null||u.forEach((h,d)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<o.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,d+m),this.addSymbol(g,n[s++],r)}}else l.addSymbol(h,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},Aa=e=>e+"_max",Nd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>X(`input${h}`,t,l)),a=V.size(r),o=le("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],d="var prod = 1.0;",p="var sum = 0.0;",m="sum += prod;",g=[],y=[],w=[],b=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,T)=>{var k;if(n.rhs.symbolToIndices.has(T)){let I=(k=n.rhs.symbolToIndices.get(T))==null?void 0:k[0];I!==void 0&&n.lhs.forEach((v,C)=>{if(S.inputIndices.includes(C)){let N=v.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(j=>{h.push(`${i[C].indicesSet(`input${C}Indices`,j,o.indicesGet("outputIndices",I))}`)})}})}else n.lhs.forEach((I,v)=>{if(S.inputIndices.includes(v)){let C=I.symbolToIndices.get(T);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${T}`)}`)}),b.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Aa(T)}; ${T}++) {`),w.push("}")});let M=$?[...h,`let sum = ${i.map((S,T)=>S.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...h,p,...y,...g,d,...b,m,...w];return`
            ${l.registerUniforms(s.map(S=>({name:`${Aa(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((S,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(d=>n.symbolToInfo.has(d)).map(d=>{var p;return{type:12,data:((p=n.symbolToInfo.get(d))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((d,p)=>[...de(d)]).reduce((d,p)=>d.concat(p),l);return h.push(...de(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Bd=(e,t)=>{let n=new zd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Nd(i,e.inputs[0].dataType,n,r))},Pd=e=>{let t=e.equation.replace(/\s+/g,"");return Ae({equation:t})}}),Dd,Ra,Ud,Ld,Fd,ry=ee(()=>{fe(),ge(),we(),Dd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ra=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Ud=(e,t)=>e.length>t.length?Ra(e,t):Ra(t,e),Ld=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Ud(t,n),i=e[0].dataType,a=i===9||V.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(V.size(r)/s),l=d=>{let p=X("input",i,t.length,o),m=le("output",i,r.length,s),g;if(i===9){let y=(w,b,$="")=>`
          let outputIndices${b} = ${m.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${p.broadcastedIndicesToOffset(`outputIndices${b}`,m)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${w}[${b}] = ${$}(${p.getByOffset(`index${b}`)}[component${b}]);
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
    ${g}`},h=[{type:12,data:u},...de(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Fd=e=>{Dd(e.inputs),e.compute(Ld(e.inputs),{inputs:[0]})}}),Gd,Wd,iy=ee(()=>{fe(),ge(),we(),fa(),Gd=e=>{let t=e[0].dataType,n=V.size(e[0].dims),r=V.size(e[1].dims),i=r%4===0,a=o=>{let s=X("x",t,[1],4),u=X("bias",t,[1],4),l=le("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${ha(nt(t))}

    ${o.mainStart(Pn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",pa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Pn/4)}})}},Wd=e=>{e.inputs.length<2||V.size(e.inputs[1].dims)===0?vc(e):e.compute(Gd(e.inputs))}}),qd,Vd,Hd,jd,ay=ee(()=>{fe(),ge(),Xe(),we(),qd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Vd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=V.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(V.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...de(e[0].dims,e[1].dims,o)],d=p=>{let m=X("data",e[0].dataType,e[0].dims.length,u),g=X("inputIndices",e[1].dataType,e[1].dims.length),y=le("output",e[0].dataType,o.length,u),w=$=>{let M=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let T=0;T<M;T++)S+=`${M>1?`indicesIndices${$}[${T}]`:`indicesIndices${$}`} = ${o.length>1?`outputIndices${$}[uniforms.axis + ${T}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${g.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${m.type.indices};
        `;for(let T=0,k=0;T<i;T++)T===a?(S+=`${i>1?`dataIndices${$}[${T}]`:`dataIndices${$}`} = u32(idx${$});`,k+=M):(S+=`${i>1?`dataIndices${$}[${T}]`:`dataIndices${$}`} = ${o.length>1?`outputIndices${$}[${k}]`:`outputIndices${$}`};`,k++);return S},b;if(e[0].dataType===9){let $=(M,S,T="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${M}[${S}] = ${T}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;b=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else b=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${p.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:d}},Hd=e=>Ae({axis:e.axis}),jd=(e,t)=>{let n=e.inputs;qd(n),e.compute(Vd(e.inputs,t))}}),Kd,Yd,Xd,oy=ee(()=>{fe(),ge(),we(),Kd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...de(t.dims,h));let d=p=>{let m=X("indices_data",t.dataType,t.dims.length),g=le("input_slice_offsets_data",12,1,1),y=[m,g],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:d},{inputs:[t],outputs:[-1]})[0]},Yd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=V.sizeToDimension(a,a.length-1),u=V.sizeFromDimension(r,t.batchDims+o),l=V.sizeToDimension(r,t.batchDims),h=V.sizeFromDimension(r,t.batchDims),d=s/l,p=new Array(o),m=u;for(let S=0;S<o;++S)p[o-1-S]=m,m*=r[t.batchDims+o-1-S];let g=Kd(e,n[1],p,t.batchDims,r,s,d,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=V.size(w),$=[{type:12,data:b},{type:12,data:u},...de(n[0].dims,g.dims,w)],M=S=>{let T=X("data",n[0].dataType,n[0].dims.length),k=X("slice_offsets",12,g.dims.length),I=le("output",n[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,k,I)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:$}),getShaderSource:M},{inputs:[n[0],g]})},Xd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Zd,Qd,Jd,eh,sy=ee(()=>{fe(),ge(),Xe(),we(),Zd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=V.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Qd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=V.normalizeAxis(t.gatherAxis,i),o=V.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=V.size(s),l=e[2].dataType,h=e[0].dataType===22,d=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...de(...e.map((m,g)=>m.dims),s)],p=m=>{let g=X("data",e[0].dataType,e[0].dims.length),y=X("inputIndices",e[1].dataType,e[1].dims.length),w=X("scales",e[2].dataType,e[2].dims.length),b=e.length>3?X("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=le("output",l,s.length),M=[g,y,w];b&&M.push(b);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...M,$)}
        ${m.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${r.length} - 1`)};
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
        let dequantized_data = ${nt(l)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p}},Jd=(e,t)=>{let n=e.inputs;Zd(n,t),e.compute(Qd(e.inputs,t))},eh=e=>Ae({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),th,nh,rh,ih,uy=ee(()=>{fe(),ge(),Xe(),we(),th=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},nh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=V.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=V.size(l),d=X("input",r,i),p=X("indicesInput",o,a.length),m=le("output",r,l.length),g=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return g.push(...de(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y=>`
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
  }`}},rh=e=>Ae({axis:e.axis}),ih=(e,t)=>{let n=e.inputs;th(n),e.compute(nh(e.inputs,t))}}),ah,oh,sh,uh,ly=ee(()=>{fe(),ge(),we(),ah=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},oh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=yu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),d=!0,p=V.size(s),m=[{type:12,data:d?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...de(e[2].dims)),g.push("rank")),m.push(...de(s));let y=b=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",S=X("a",e[0].dataType,e[0].dims),T=X("b",e[1].dataType,e[1].dims),k=S.type.value,I=null,v=[S,T];e.length===3&&(I=X("c",e[2].dataType,e[2].dims.length),v.push(I));let C=le("output",e[0].dataType,s.length);v.push(C);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(N).declareVariables(...v)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${M}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${k}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let $=X("a",e[0].dataType,e[0].dims),M=X("b",e[1].dataType,e[1].dims),S=null,T=[$,M];e.length===3&&(S=X("c",e[2].dataType,e[2].dims.length),T.push(S));let k=le("output",e[0].dataType,s.length);T.push(k);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",C="";t.transA&&t.transB?(C=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${M.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(I).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
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
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},sh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},uh=(e,t)=>{ah(e.inputs),e.compute(oh(e.inputs,t))}}),At,Gt,Tn,En,lh,ch,dh,hh,ph,fh,mh,gh,yh,wh,cy=ee(()=>{fe(),ge(),Xe(),we(),[At,Gt,Tn,En]=[0,1,2,3],lh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},ch=`
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
`,dh=e=>`
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
`,hh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ph=e=>`
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
`,fh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${At}] = batch;
     indices[${Gt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Tn}] = u32(r);
            indices[${En}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Tn}] = u32(clamp(r, 0, H - 1));
          indices[${En}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Tn}] = gs_reflect(r, border[1], border[3]);
          indices[${En}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,mh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${At}], indices[${Gt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${At}], indices[${Gt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${At}], indices[${Gt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${At}], indices[${Gt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${At}], indices[${Gt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${At}], indices[${Gt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,gh=(e,t)=>{let n=X("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=X("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[At,Gt,Tn,En]=[0,3,1,2]);let o=le("output",e[0].dataType,a.length),s=n.type.value,u=V.size(a),l=[{type:12,data:u},...de(e[0].dims,r,a)],h=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${ch}
  ${dh(s)}
  ${hh(t)}
  ${ph(t)}
  ${fh(n,s,t)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Tn}]);
      let W_in = i32(uniforms.x_shape[${En}]);

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
      var grid_indices = vec3<u32>(indices[${At}], indices[${Tn}], indices[${En}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${mh(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let p=V.size(a);return{outputs:[{dims:a,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},yh=(e,t)=>{lh(e.inputs),e.compute(gh(e.inputs,t))},wh=e=>Ae({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),rt,_h,bh,Oa,xh,cr,$h,vh=ee(()=>{fe(),ge(),Xe(),Ji(),ca(),we(),Jt(),rt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,_h=(e,t)=>{let n=e[0],r=rt(e,1),i=rt(e,2),a=rt(e,3),o=rt(e,4),s=rt(e,5),u=rt(e,6),l=rt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],d=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=d,g=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&V.size(u.dims)&&V.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&V.size(u.dims)||l&&V.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&V.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&V.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,M=0;if(o&&V.size(o.dims)>0){M=8;let I=o.dims;throw I.length===1?I[0]===h?M=1:I[0]===3*h+2&&(M=3):I.length===2&&I[0]===h&&I[1]===$&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,T=p;if(i&&V.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let k=!1;if(o&&V.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&V.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:k,passPastInKv:S,qkvFormat:b}},bh=e=>Ae({...e}),Oa=Ae({perm:[0,2,1,3]}),xh=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=V.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=d=>{let p=le("qkv_with_bias",t.dataType,s),m=X("qkv",t.dataType,s),g=X("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(m,g,p)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},cr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&V.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=xh(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(lt(u,Oa.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(lt(u,Oa.perm),{inputs:[u],outputs:[-1]})[0]},$h=(e,t)=>{let n=_h(e.inputs,t),r=e.inputs[0],i=rt(e.inputs,1),a=rt(e.inputs,2),o=rt(e.inputs,3),s=rt(e.inputs,4),u=rt(e.inputs,5),l=rt(e.inputs,6),h=rt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let d=i&&a&&i.dims.length===4&&a.dims.length===4,p=cr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return ar(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=cr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),g=cr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);ar(e,p,m,g,s,void 0,l,h,u,n)}}),Sh,Mh,Th,Eh,za,Ih,kh,Ch=ee(()=>{fe(),ge(),Xe(),we(),Sh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Mh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Ae({numOutputs:r,axis:t.axis,splitSizes:n})},Th=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ce("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Eh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},za=(e,t)=>{let n=e[0].dims,r=V.size(n),i=e[0].dataType,a=V.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=X("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],d=0,p=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){d+=t.splitSizes[g],u[g]=d;let y=n.slice();y[a]=t.splitSizes[g],h.push(y),o[g]=le(`output${g}`,i,y.length),l.push({dims:h[g],dataType:e[0].dataType})}p.push({type:12,data:u},...de(n,...h));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Th(u.length)}
  ${Eh(o)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ce("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Ih=(e,t)=>{Sh(e.inputs);let n=e.inputs.length===1?t:Mh(e.inputs,t);e.compute(za(e.inputs,n),{inputs:[0]})},kh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Ae({axis:t,numOutputs:r,splitSizes:n})}}),Ah,Hr,Rh,Oh=ee(()=>{fe(),ge(),Xe(),we(),Ah=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!V.areEqual(r.dims,[])&&!V.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!V.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],d=V.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:d/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Hr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=V.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],d=i===0?h*2:l/r,p=new Array(o,u,l/d,d-h),m=V.computeStrides(p),g=[{type:1,data:a},{type:12,data:p},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,d,u*d,1]}):[],...de(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=X("input",e[0].dataType,e[0].dims.length),$=X("position_ids",e[1].dataType,e[1].dims.length),M=X("cos_cache",e[2].dataType,e[2].dims.length),S=X("sin_cache",e[3].dataType,e[3].dims.length),T=le("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables(b,$,M,S,T)}

        ${w.mainStart(Pn)}
          let half_rotary_emb_dim = uniforms.${M.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",le("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${b.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ae({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(p)/Pn)},programUniforms:g})}},Rh=(e,t)=>{Ah(e.inputs,t),e.compute(Hr(e.inputs,t))}}),zh,Nh,Na,Bh,Ph,dy=ee(()=>{Xe(),fe(),ca(),vh(),Ch(),Jt(),Oh(),we(),zh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],d=l,p=0,m=!r||r.dims.length===0,g=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=g*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let $=0,M=!1,S=t.kvNumHeads?g*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(d!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(d!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],M=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=T.dims.reduce((I,v)=>I*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let I=0;I<T.dims.length;I++)if(T.dims[I]!==1&&T.dims[I]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${I}] = ${T.dims[I]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},Nh=Ae({perm:[0,2,1,3]}),Na=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(lt(r,Nh.perm),{inputs:[r],outputs:[-1]})[0]),r},Bh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let d=X("seq_lens",n.dataType,n.dims),p=X("total_seq_lens",r.dataType,r.dims),m=le("pos_ids",i,o),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Ph=(e,t)=>{var S;let n=zh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Ae({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,m,g]=!i&&!a?e.compute(za([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let T=e.compute(Bh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],k=e.inputs[7],I=e.inputs[8],v=Ae({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[p,T,k,I],N=[-1];y=e.compute(Hr(C,v),{inputs:C,outputs:N})[0],C.splice(0,1,m);let j=Ae({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Hr(C,j),{inputs:C,outputs:N})[0]}let b=cr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),$=Na(e,t.doRotary?w:m,n),M=Na(e,g,n);ar(e,b,$,M,void 0,void 0,o,s,void 0,n,u,l)}}),Ba,Dh,Uh,Lh,hy=ee(()=>{fe(),ge(),Jt(),we(),Ba=(e,t,n,r,i,a,o,s)=>{let u=He(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,d=i*o,p=64;d===1&&(p=256);let m=[i,o,a/u],g=[i,o,2],y=["rank","type","type"],w=[];w.push(...de(m,g));let b=$=>{let M=X("x",t.dataType,3,u),S=X("scale",n.dataType,n.dims),T=X("bias",r.dataType,r.dims),k=le("output",1,3,2),I=[M,S,T,k];return`
  var<workgroup> workgroup_shared : array<${h}, ${p}>;
  const workgroup_size = ${p}u;
  ${$.declareVariables(...I)}
  ${$.mainStart(p)}
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:d},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Dh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=V.sizeFromDimension(r,a),l=He(u),h=V.size(i)/l,d=Ba(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],m=[o,s],g=["type","none"],y=w=>{let b=X("x",t[0].dataType,p.length,l),$=X("scale_shift",1,m.length,2),M=le("output",t[0].dataType,p.length,l),S=[b,$,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...de(p,m,p)]}),getShaderSource:y},{inputs:[t[0],d]})},Uh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=V.sizeFromDimension(r,1)/o,u=He(o),l=V.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],d=["type","type"],p=!1,m=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,m.push(b+1);p=p&&r[r.length-1]!==1;let g=p?e.compute(lt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,$)=>r[m[$]])),y=Ba(e,g,t[1],t[2],a,s,o,n.epsilon),w=b=>{let $=Ze(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,S=I=>{let v=I===0?"x":"y",C=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${C}(scale.${v}))`;case 2:return`vec2<${$}>(${C}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${C}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=X("input",t[0].dataType,t[0].dims,u),k=le("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:w},{inputs:[t[0],y]})},Lh=(e,t)=>{t.format==="NHWC"?Uh(e,e.inputs,t):Dh(e,e.inputs,t)}}),Fh,Gh,Wh,py=ee(()=>{fe(),ge(),we(),Fh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Gh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=V.normalizeAxis(t.axis,i.length),l=V.sizeToDimension(i,u),h=V.sizeFromDimension(i,u),d=V.size(a.dims),p=o?V.size(o.dims):0;if(d!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${p}`);let m=[];for(let T=0;T<i.length;++T)T<u?m.push(i[T]):m.push(1);let g=He(h),y=["type","type"],w=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/g)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,$=n>2,M=T=>{let k=Ze(e[0].dataType),I=[X("x",e[0].dataType,e[0].dims,g),X("scale",a.dataType,a.dims,g)];o&&I.push(X("bias",o.dataType,o.dims,g)),I.push(le("output",e[0].dataType,s,g)),b&&I.push(le("mean_data_output",1,m)),$&&I.push(le("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(v).declareVariables(...I)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ra("f32",g)};
    var mean_square_vector = ${ra("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Dn(k,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Qt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Qt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Dn(k,g,"x[j + offset]")};
      let f32scale = ${Dn(k,g,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Dn(k,g,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:s,dataType:e[0].dataType}];return b&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},Wh=(e,t)=>{Fh(e.inputs),e.compute(Gh(e.inputs,t,e.outputCount))}}),qh,Vh,fy=ee(()=>{ge(),wa(),$a(),qh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Vh=e=>{qh(e.inputs);let t=Bn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(ya(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=V.size(e.inputs[0].dims.slice(0,-2)),o=V.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(Gr(h,{activation:""},t,l),{inputs:h})}else e.compute(Gr(e.inputs,{activation:""},t))}}}),Hh,jh,Kh,Yh,Xh,my=ee(()=>{fe(),ge(),Xe(),we(),Hh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!V.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(V.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(V.size(u)!==l)throw new Error("zeroPoints input size error.")}},jh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,h=e[0].dataType,d=He(t.k),p=He(l),m=He(o),g=s.concat([i,o]),y=i>1&&o/m%2===0?2:1,w=V.size(g)/m/y,b=64,$=[],M=[u,i,a/d],S=V.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),$.push(...de(M)),$.push(...de(S)),$.push(...de(e[2].dims)),e.length===4&&$.push(...de(V.convertShape(e[3].dims)));let T=[u,i,o/m];$.push(...de(T));let k=I=>{let v=M.length,C=X("a",e[0].dataType,v,d),N=X("b",12,S.length,p),j=X("scales",e[2].dataType,e[2].dims.length),F=[C,N,j],H=e.length===4?X("zero_points",12,e[3].dims.length):void 0;H&&F.push(H);let O=T.length,G=le("output",e[0].dataType,O,m),Z=Ze(e[0].dataType),z=(()=>{switch(d){case 1:return`array<${Z}, 8>`;case 2:return`mat4x2<${Z}>`;case 4:return`mat2x4<${Z}>`;default:throw new Error(`${d}-component is not supported.`)}})(),q=Math.floor(32/t.bits),R=Math.floor(q/8),K=()=>{let W="";for(let L=0;L<R;L++){let ne=L*t.bits*4,ue=ne+t.bits;W+=`
          // reuse a data (pass ${L})
            var input_offset${L>0?L:""} = ${L===0?C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${L>0?L:""}: ${z};
            for (var j${L>0?L:""}: u32 = 0; j${L>0?L:""} < ${8/d}; j${L>0?L:""}++) {
              a_data${L>0?L:""}[j${L>0?L:""}] = ${C.getByOffset(`input_offset${L>0?L:""}`)};
              input_offset${L>0?L:""}++;
            }
          `;for(let ae=0;ae<m*y;ae++)W+=`
            b_value = ${p===1?`b${ae}_data`:`b${ae}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${L*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ne}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ue}u) & b_mask);`}
            b_quantized_values = ${z}(${Array.from({length:4},(_e,Re)=>`${Z}(b_value_lower[${Re}]), ${Z}(b_value_upper[${Re}])`).join(", ")});
            b_dequantized_values = ${d===1?`${z}(${Array.from({length:8},(_e,Re)=>`(b_quantized_values[${Re}] - ${H?`zero_point${ae}`:"zero_point"}) * scale${ae}`).join(", ")});`:`(b_quantized_values - ${z}(${Array(8).fill(`${H?`zero_point${ae}`:"zero_point"}`).join(",")})) * scale${ae};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ae/m)}]${m>1?`[${ae%m}]`:""} += ${Array.from({length:8/d},(_e,Re)=>`${d===1?`a_data${L>0?L:""}[${Re}] * b_dequantized_values[${Re}]`:`dot(a_data${L>0?L:""}[${Re}], b_dequantized_values[${Re}])`}`).join(" + ")};
          `}return W},P=()=>{let W=`
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
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let L=0;L<m*y;L++)W+=`
            let scale${L} = ${j.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return W},U=()=>{let W=`col_index = col * ${m};`;for(let L=0;L<m*y;L++)W+=`
            let b${L}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return W+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${z};
            var b_dequantized_values: ${z};`,W};return`
        var<workgroup> workgroup_shared: array<${G.type.value}, ${y*b}>;
        ${I.declareVariables(...F,G)}
        ${I.mainStart([b,1,1])}
          let output_indices = ${G.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${P()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${U()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${K()}
                word_offset += ${q/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${G.type.value} = ${G.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${G.setByIndices(`${G.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${d};${p};${m};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:w},programUniforms:$}),getShaderSource:k}},Kh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,h=e[0].dataType,d=He(t.k),p=He(l),m=s.concat([i,o]),g=128,y=o%8===0?8:o%4===0?4:1,w=g/y,b=Math.floor(32/t.bits),$=w*p*b,M=$/d,S=$/t.blockSize,T=V.size(m)/y,k=[],I=[u,i,a/d],v=V.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),k.push(...de(I)),k.push(...de(v)),k.push(...de(e[2].dims)),e.length===4&&k.push(...de(V.convertShape(e[3].dims)));let C=[u,i,o];k.push(...de(C));let N=j=>{let F=I.length,H=X("a",e[0].dataType,F,d),O=X("b",12,v.length,p),G=X("scales",e[2].dataType,e[2].dims.length),Z=[H,O,G],z=e.length===4?X("zero_points",12,e[3].dims.length):void 0;z&&Z.push(z);let q=C.length,R=le("output",e[0].dataType,q),K=Ze(e[0].dataType),P=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${H.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${R.type.value}, ${w}>, ${y}>;
        ${j.declareVariables(...Z,R)}
        ${j.mainStart([w,y,1])}
          let output_indices = ${R.offsetToIndices(`workgroup_index * ${y}`)};
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
            ${z?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${G.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let U=Math.floor(b/8),W="";for(let L=0;L<U;L++){let ne=L*t.bits*4,ue=ne+t.bits;W+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${L*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${K}>(${Array.from({length:4},(ae,_e)=>`${K}(b_value_lower[${_e}]), ${K}(b_value_upper[${_e}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${K}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ae,_e)=>`${`dot(a_data${_e}, b_dequantized_values[${_e}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return W})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${R.type.value} = ${R.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${R.setByIndices(`${R.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${d};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:T},programUniforms:k}),getShaderSource:N}},Yh=(e,t)=>{Hh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Kh(e.inputs,t)):e.compute(jh(e.inputs,t))},Xh=e=>Ae(e)}),Zh,Qh,Jh,ep,tp,np,rp,ip,ap,gy=ee(()=>{fe(),ge(),we(),Zh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Qh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},Jh=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},ep=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},tp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},np=(e,t,n)=>{switch(n.mode){case 0:return Qh(e,t,n.pads.length);case 1:return Jh(e,t,n.pads.length);case 2:return ep(e,t,n.pads.length);case 3:return tp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},rp=(e,t)=>{let n=V.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=V.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...de(e[0].dims,n));let s=["rank"],u=l=>{let h=le("output",e[0].dataType,n.length),d=X("x",e[0].dataType,r.length),p=d.type.value,m=np(h,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(g).declareVariables(d,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(n)/64)},programUniforms:a}),getShaderSource:u}},ip=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},ap=(e,t)=>{Zh(e.inputs);let n=ip(e.inputs,t);e.compute(rp(e.inputs,n),{inputs:[0]})}}),dr,Pa,Da,Ua,La,op,sp,Fa,Ga,up,lp,Wa,cp,dp,qa,hp,pp,fp,mp,yy=ee(()=>{ft(),fe(),ge(),we(),dr=e=>{if(Ue.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Pa=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Nr.adjustPoolAttributes(n,i,o,s,u,l);let h=Nr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[d,r?p:h]},Da=(e,t)=>{let n=t.format==="NHWC",r=V.size(e),i=V.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],d=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,d,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=V.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},Ua=(e,t,n,r,i,a,o,s,u,l,h,d)=>{let p=i.format==="NHWC",m=t.type.value,g=le("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",$=n-(p?2:1);if(h?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let M=n-(p?3:2);d?w=`
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
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${m}(${s});
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
            }`}},La=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,op=e=>`${La(e)};${e.countIncludePad}`,sp=e=>`${La(e)};${e.storageOrder};${e.dilations}`,Fa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ga=(e,t,n,r)=>{let[i,a]=Pa(t,r,n),o=X("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,d,p,m,g]=Da(a,i);h.push(...de(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(a)/64)},programUniforms:h}),getShaderSource:w=>Ua(w,o,t.dims.length,a.length,i,u,l,0,d,p,m,g)}},up=e=>{let t=e.count_include_pad!==0,n=Fa(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:op(r)}},lp=(e,t)=>{dr(e.inputs),e.compute(Ga("AveragePool",e.inputs[0],!1,t))},Wa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},cp=e=>{let t=e.format;return{format:t,...Wa,cacheKey:t}},dp=(e,t)=>{dr(e.inputs),e.compute(Ga("GlobalAveragePool",e.inputs[0],!0,t))},qa=(e,t,n,r)=>{let[i,a]=Pa(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=X("x",t.dataType,t.dims.length),l=["rank"],[h,d,p,m,g]=Da(a,i);return h.push(...de(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(a)/64)},programUniforms:h}),getShaderSource:y=>Ua(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,d,p,m,g)}},hp=(e,t)=>{dr(e.inputs),e.compute(qa("MaxPool",e.inputs[0],!1,t))},pp=e=>{let t=e.storage_order,n=e.dilations,r=Fa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:sp(i)}},fp=e=>{let t=e.format;return{format:t,...Wa,cacheKey:t}},mp=(e,t)=>{dr(e.inputs),e.compute(qa("GlobalMaxPool",e.inputs[0],!0,t))}}),gp,yp,wp,_p,wy=ee(()=>{fe(),ge(),Xe(),we(),gp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},yp=(e,t)=>{let n=V.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=V.size(a),u=r===3||r===2,l=u?[Math.ceil(V.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,d=e.length>2?e[2]:void 0,p=d?u?[Math.ceil(V.size(d.dims)/4)]:d.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,g=m===!1&&h.length===1,y=He(s),w=m&&(!u||y===4),b=w?y:1,$=w&&!u?y:1,M=X("input",u?12:r,l.length,$),S=X("scale",o,h.length),T=d?X("zero_point",u?12:r,p.length):void 0,k=le("output",o,a.length,b),I=[M,S];T&&I.push(T);let v=[l,h];d&&v.push(p);let C=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...de(...v,a)],N=j=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${j.registerUniforms(F).declareVariables(...I,k)}
      ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:C})}},wp=(e,t)=>{gp(e.inputs,t),e.compute(yp(e.inputs,t))},_p=e=>Ae({axis:e.axis,blockSize:e.blockSize})}),bp,xp,$p,_y=ee(()=>{ft(),fe(),we(),bp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},xp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...de(a)],u=l=>{let h=le("output",r,a.length),d=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},$p=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ue.webgpu.validateInputContent&&bp(t,n,r),e.compute(xp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),vp,Sp,Mp,Tp,by=ee(()=>{fe(),ge(),Xe(),we(),vp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Sp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(V.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=V.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...de(e[1].dims,e[2].dims,i)],h=d=>{let p=X("indices",e[1].dataType,e[1].dims.length),m=X("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Ru("output",e[0].dataType,i.length):le("output",e[0].dataType,i.length,a);return`
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
    ${vp(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},Mp=e=>Ae({reduction:e.reduction}),Tp=(e,t)=>{e.compute(Sp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ep,Ip,kp,Va,Cp,Ap,Rp,Op,zp,Np,Bp,Pp,Ha,Dp,Up,Lp,Fp,Gp,Wp,qp,xy=ee(()=>{fe(),ge(),Xe(),we(),Ep=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ip=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},kp=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ep(r,t),t.axes.length>0&&Ip(r,t.axes,l).forEach((h,d)=>r[d]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Va=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Cp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Va("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Va("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ap=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Rp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Op=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},zp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Np=(e,t,n,r,i)=>`
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
    }`,Bp=(e,t,n,r,i,a,o)=>`
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
    }`,Pp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ce("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ha=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Dp=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Ha(e,u,a,2)}
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
    }`},Up=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[d,p]=h?[0,1]:[2,3],m=e.type.value,g=y=>{let w=y===d?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
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
          var ${w}: ${m} = originalIdx + ${m}(i);
          if (${w} < 0 || ${w} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${u};`:`${w} = max(0, min(${w}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
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
    `},Lp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ha(e,l,a,3)}
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
    }`},Fp=(e,t,n,r,i,a)=>{let o=e.dims,s=Rp(a,t.axes,o.length),u=Op(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map(($,M)=>$===0?1:u[M]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=zp(o,l,t)));let h=le("output",e.dataType,u.length),d=X("input",e.dataType,o.length),p=V.size(u),m=o.length===u.length&&o.every(($,M)=>$===u[M]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=d.type.value,b=$=>`
      ${m?"":`
      ${Cp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Pp(d,o)};
              ${Ap(t.nearestMode,n,w)};
              ${Bp(d,h,o,u,l.length,s.length,g)};
              `;case"linear":return`
              ${Np(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Dp(d,h,o,g,y)}`;if(o.length===3||o.length===5)return`${Lp(d,h,o,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Up(d,h,o,u,l,s,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(d,h)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${m}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...de(o,u)]})}},Gp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Wp=(e,t)=>{let n=[],r=[],i=[],a=Gp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");kp(e.inputs,t,a,n,r,i),e.compute(Fp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},qp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ae({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Vp,Hp,jp,$y=ee(()=>{fe(),ge(),we(),Vp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Hp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=V.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,p=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,w=64,b=He(l),$=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=T=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[X("x",e[0].dataType,e[0].dims,b),X("skip",e[1].dataType,e[1].dims,b),X("gamma",e[2].dataType,e[2].dims,b)];d&&I.push(X("beta",e[3].dataType,e[3].dims,b)),p&&I.push(X("bias",e[4].dataType,e[4].dims,b)),I.push(le("output",e[0].dataType,s,b)),m&&I.push(le("mean_output",1,h)),g&&I.push(le("inv_std_output",1,h)),y&&I.push(le("input_skip_bias_sum",e[0].dataType,s,b));let v=Ze(e[0].dataType),C=Ze(1,b);return`

      ${T.registerUniforms(k).declareVariables(...I)}
      var<workgroup> sum_shared : array<${C}, ${w}>;
      var<workgroup> sum_squared_shared : array<${C}, ${w}>;

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
          let bias_value = ${p?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Dn(v,b,"value")};
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
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:s,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${m};${g};${y}`,inputDependencies:e.map((T,k)=>"type")},getShaderSource:M,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:$})}},jp=(e,t)=>{Vp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Hp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Kp,hr,Yp,ja,Xp,Zp,Qp,Jp,vy=ee(()=>{fe(),ge(),Xe(),we(),Kp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},hr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Yp=(e,t)=>{if(e.length>1){let n=hr(e,1),r=hr(e,2),i=hr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ae({starts:n,ends:r,axes:i})}else return t},ja=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Xp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Zp=(e,t)=>{let n=e[0].dims,r=V.size(n),i=t.axes.length>0?V.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=hr(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,$)=>ja(b,$,n,i,a)),s=t.ends.map((b,$)=>ja(b,$,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,$,M)=>{if(b<0){let S=(s[$]-o[$])/b,T=o[$],k=T+S*a[$];o[$]=k,s[$]=T,M[$]=-b}});let l=n.slice(0);i.forEach((b,$)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let h={dims:l,dataType:e[0].dataType},d=le("output",e[0].dataType,l.length),p=X("input",e[0].dataType,e[0].dims.length),m=V.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:o},{type:6,data:u},{type:12,data:a},...de(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(g).declareVariables(p,d)}
        ${Xp(p,d,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Qp=(e,t)=>{Kp(e.inputs,t);let n=Yp(e.inputs,t);e.compute(Zp(e.inputs,n),{inputs:[0]})},Jp=e=>{let t=e.starts,n=e.ends,r=e.axes;return Ae({starts:t,ends:n,axes:r})}}),ef,tf,nf,rf,Sy=ee(()=>{fe(),ge(),Xe(),Jt(),we(),ef=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},tf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=V.size(r),a=r.length,o=V.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(I,v)=>v),l[o]=a-1,l[a-1]=o,u=e.compute(lt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,d=h[a-1],p=i/d,m=He(d),g=d/m,y=64;p===1&&(y=256);let w=(I,v)=>v===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:v===2?`max(${I}.x, ${I}.y)`:v===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,b=X("x",u.dataType,u.dims,m),$=le("result",u.dataType,u.dims,m),M=b.type.value,S=Ze(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,T=I=>`
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
      ${I.registerUniform("packedCols","i32").declareVariables(b,$)}
      ${I.mainStart(y)}
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
          rowMaxShared = ${M}(${w("threadShared[0]",m)});
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
          rowSumShared = ${M}(${Qt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:g}]}),getShaderSource:T},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(lt(k,l),{inputs:[k]})},nf=(e,t)=>{ef(e.inputs),tf(e,t)},rf=e=>Ae({axis:e.axis})}),Ka,af,of,sf,uf,My=ee(()=>{fe(),ge(),we(),Ka=e=>Array.from(e.getBigInt64Array(),Number),af=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ka(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},of=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},sf=(e,t)=>{let n=e[0].dims,r=t??Ka(e[1]),i=of(n,r),a=V.size(i),o=e[0].dataType,s=X("input",o,n.length),u=le("output",o,i.length),l=h=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...de(e[0].dims,i)]}),getShaderSource:l}},uf=e=>{af(e.inputs),e.compute(sf(e.inputs),{inputs:[0]})}}),lf,cf,df,Ty=ee(()=>{fe(),ge(),we(),lf=(e,t,n,r,i)=>{let a=le("output_data",i,n.length,4),o=X("a_data",t[1].dataType,t[1].dims.length,4),s=X("b_data",t[2].dataType,t[2].dims.length,4),u=X("c_data",t[0].dataType,t[0].dims.length,4),l,h=(d,p,m)=>`select(${p}, ${d}, ${m})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let d=(p,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,b=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${p}[${m}] = ${g}(${h(y,w,b)});
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
      }`},cf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(V.areEqual(t,n)&&V.areEqual(n,r)),o=t,s=V.size(t);if(a){let l=Bn.calcShape(Bn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=V.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>lf(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...de(r,t,n,o)]})}},df=e=>{e.compute(cf(e.inputs))}}),hf,Ey=ee(()=>{F0(),ca(),G0(),W0(),q0(),V0(),H0(),Z0(),J0(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),uy(),ly(),cy(),dy(),hy(),py(),fy(),my(),vh(),gy(),yy(),wy(),_y(),by(),sa(),xy(),Oh(),$y(),vy(),Sy(),Ch(),My(),Jt(),fa(),Ty(),hf=new Map([["Abs",[Vl]],["Acos",[Hl]],["Acosh",[jl]],["Add",[zc]],["ArgMax",[Cl,la]],["ArgMin",[kl,la]],["Asin",[Kl]],["Asinh",[Yl]],["Atan",[Xl]],["Atanh",[Zl]],["Attention",[Bl]],["AveragePool",[lp,up]],["BatchNormalization",[Ll]],["BiasAdd",[Wl]],["BiasSplitGelu",[Ac]],["Cast",[Jl,Ql]],["Ceil",[nc]],["Clip",[tc]],["Concat",[Kc,Yc]],["Conv",[Ea,Ma]],["ConvTranspose",[$d,_d]],["Cos",[rc]],["Cosh",[ic]],["CumSum",[Sd,Md]],["DepthToSpace",[kd,Cd]],["DequantizeLinear",[wp,_p]],["Div",[Nc]],["Einsum",[Bd,Pd]],["Elu",[ac,or]],["Equal",[Bc]],["Erf",[oc]],["Exp",[sc]],["Expand",[Fd]],["FastGelu",[Wd]],["Floor",[uc]],["FusedConv",[Ea,Ma]],["Gather",[jd,Hd]],["GatherElements",[ih,rh]],["GatherBlockQuantized",[Jd,eh]],["GatherND",[Yd,Xd]],["Gelu",[lc]],["Gemm",[uh,sh]],["GlobalAveragePool",[dp,cp]],["GlobalMaxPool",[mp,fp]],["Greater",[Lc]],["GreaterOrEqual",[Gc]],["GridSample",[yh,wh]],["GroupQueryAttention",[Ph]],["HardSigmoid",[yc,gc]],["InstanceNormalization",[Lh]],["LayerNormalization",[Wh]],["LeakyRelu",[cc,or]],["Less",[Fc]],["LessOrEqual",[Wc]],["Log",[Mc]],["MatMul",[Vh]],["MatMulNBits",[Yh,Xh]],["MaxPool",[hp,pp]],["Mul",[Pc]],["MultiHeadAttention",[$h,bh]],["Neg",[hc]],["Not",[dc]],["Pad",[ap]],["Pow",[Dc]],["QuickGelu",[Ic,or]],["Range",[$p]],["Reciprocal",[pc]],["ReduceMin",[Sl]],["ReduceMean",[_l]],["ReduceMax",[vl]],["ReduceSum",[Tl]],["ReduceProd",[Ml]],["ReduceL1",[bl]],["ReduceL2",[xl]],["ReduceLogSum",[Il]],["ReduceLogSumExp",[$l]],["ReduceSumSquare",[El]],["Relu",[fc]],["Resize",[Wp,qp]],["RotaryEmbedding",[Rh]],["ScatterND",[Tp,Mp]],["Sigmoid",[mc]],["Sin",[wc]],["Sinh",[_c]],["Slice",[Qp,Jp]],["SkipLayerNormalization",[jp]],["Split",[Ih,kh]],["Sqrt",[bc]],["Softmax",[nf,rf]],["Sub",[Uc]],["Tan",[xc]],["Tanh",[$c]],["ThresholdedRelu",[Sc,or]],["Tile",[uf]],["Transpose",[Lu,Fu]],["Where",[df]]])}),pf,Iy=ee(()=>{ft(),Ft(),we(),pf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Ct(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),yt(e.programInfo.name)}dispose(){}build(e,t){Ct(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=zu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Me("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return yt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),ff={};zn(ff,{WebGpuBackend:()=>wf});var mf,gf,yf,wf,ky=ee(()=>{ft(),fe(),Ft(),bu(),U0(),Ey(),Iy(),mf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},gf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${mf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},yf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},wf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new yf(o),this.gpuDataManager=Cu(this),this.programManager=new pf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,qi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ct(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),w=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(b=>({dims:b.dims,dataType:Lt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Lt(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:w});else{let b="";d.forEach((M,S)=>{b+=`input[${S}]: [${M.dims}] | ${Lt(M.dataType)}, `});let $="";p.forEach((M,S)=>{$+=`output[${S}]: [${M.dims}] | ${Lt(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${b}${$}start time: ${y} ns, execution time: ${w-y} ns`)}kr("GPU",`${h}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),yt()}run(e,t,n,r,i,a){Ct(e.name);let o=[];for(let $=0;$<t.length;++$){let M=t[$].data;if(M===0)continue;let S=this.gpuDataManager.get(M);if(!S)throw new Error(`no GPU data for input: ${M}`);o.push(S)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map(($,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let d=[],p=[];for(let $=0;$<s.length;++$){if(!Number.isInteger(h[$])||h[$]<-3||h[$]>=a)throw new Error(`Invalid output index: ${h[$]}`);if(h[$]===-3)continue;let M=h[$]===-1,S=h[$]===-2,T=M||S?i(s[$].dataType,s[$].dims):r(h[$],s[$].dataType,s[$].dims);if(d.push(T),T.data===0)continue;let k=this.gpuDataManager.get(T.data);if(!k)throw new Error(`no GPU data for output: ${T.data}`);if(M&&this.temporaryData.push(k),S){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(k)}p.push(k)}if(o.length!==t.length||p.length!==d.length){if(p.length===0)return yt(e.name),d;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let $=0,M=[];l.forEach(I=>{let v=typeof I.data=="number"?[I.data]:I.data;if(v.length===0)return;let C=I.type===10?2:4,N,j;I.type===10?(j=v.length>4?16:v.length>2?8:v.length*C,N=v.length>4?16:C*v.length):(j=v.length<=2?v.length*C:16,N=16),$=Math.ceil($/j)*j,M.push($);let F=I.type===10?8:4;$+=v.length>4?Math.ceil(v.length/F)*N:v.length*C});let S=16;$=Math.ceil($/S)*S;let T=new ArrayBuffer($);l.forEach((I,v)=>{let C=M[v],N=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(T,C,N.length).set(N);else if(I.type===12)new Uint32Array(T,C,N.length).set(N);else if(I.type===10)new Uint16Array(T,C,N.length).set(N);else if(I.type===1)new Float32Array(T,C,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Lt(I.type)}`)});let k=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,T,0,$),this.gpuDataManager.release(k.id),m={offset:0,size:$,buffer:k.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,w=gf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,g),this.programManager.setArtifact(w,b),Me("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let $=0;$<l.length;$++){let M=l[$],S=M.type,T=typeof M.data=="number"?1:M.data.length,[k,I]=b.uniformVariablesInfo[$];if(S!==k||T!==I)throw new Error(`Uniform variable ${$} mismatch: expect type ${k} with size ${I}, got type ${S} with size ${T} in program "${b.programInfo.name}".`)}}if(Me("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(b,o,p,g,m),yt(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=hf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Me("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await na(this,e,t);return Vi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),_f={};zn(_f,{init:()=>xf});var jr,bf,xf,Cy=ee(()=>{fe(),Ft(),ge(),D0(),jr=class m0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(V.size(t)!==V.size(this.dims))throw new Error("Invalid new shape");return new m0(this.module,this.dataType,this.data,t)}},bf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),d=Number(e.getValue(r*i++,a)),p=[];for(let m=0;m<d;m++)p.push(Number(e.getValue(r*i++,a)));s.push(new jr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new jr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=xn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new jr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},xf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(ky(),Jn(ff)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let d=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),d)}},async(s,u,l)=>{Me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let d=new bf(t,o,Number(u));return o.computeKernel(Number(s),d,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Tu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),$f,Ya,Xa,en,vf,Za,Kr,Qa,Ja,eo,to,no,ro,Sf=ee(()=>{ft(),N0(),B0(),fe(),wn(),Ui(),cu(),$f=(e,t)=>{Le()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},Ya=async e=>{$f(e.wasm.numThreads,zr(e.logLevel))},Xa=async(e,t)=>{var r,i;(i=(r=Le()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Cy(),Jn(_f)).init;t==="webgpu"&&await a("webgpu",Le(),e,n),t==="webnn"&&await a("webnn",Le(),e)}},en=new Map,vf=e=>{let t=Le(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ze("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Za=(e,t)=>{let n=Le(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&ze("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let d=0;d<l;d++){let p=Number(n.getValue(i+8+d*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(d+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Kr=e=>{let t=Le(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Qa=async(e,t)=>{var d,p,m,g;let n,r,i=Le();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Kr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await lu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let C of t.externalData){let N=typeof C=="string"?C:C.path;v.push(Wi(typeof C=="string"?C:C.data).then(j=>{i.mountExternalData(N,j)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let C=v,N=C==null?void 0:C.context,j=C==null?void 0:C.gpuDevice,F=C==null?void 0:C.deviceType,H=C==null?void 0:C.powerPreference;N?i.currentContext=N:j?i.currentContext=await i.webnnCreateMLContext(j):i.currentContext=await i.webnnCreateMLContext({deviceType:F,powerPreference:H})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(d=i.webgpuOnCreateSession)==null||d.call(i,a),a===0&&ze("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=vf(a),b=!!(t!=null&&t.enableGraphCapture),$=[],M=[],S=[],T=[],k=[];for(let v=0;v<y;v++){let[C,N,j]=Za(a,v);C===0&&ze("Can't get an input name."),l.push(C);let F=i.UTF8ToString(C);$.push(F),S.push(N===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:Lt(N),shape:j})}for(let v=0;v<w;v++){let[C,N,j]=Za(a,v+y);C===0&&ze("Can't get an output name."),h.push(C);let F=i.UTF8ToString(C);M.push(F),T.push(N===0?{name:F,isTensor:!1}:{name:F,isTensor:!0,type:Lt(N),shape:j});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let H=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[F])??"cpu",O=i.webnnIsGraphOutput;if(H==="cpu"&&O&&O(a,F)){k.push("ml-tensor-cpu-output");continue}if(H!=="cpu"&&H!=="cpu-pinned"&&H!=="gpu-buffer"&&H!=="ml-tensor")throw new Error(`Not supported preferred output location: ${H}.`);if(b&&H!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${H}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(H)}}let I=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&ze("Can't create IO binding."),I={handle:s,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Gi(v))}),en.set(a,[a,l,h,I,b,!1]),[a,$,M,S,T]}catch(y){throw l.forEach(w=>i._OrtFree(w)),h.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&ze("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&ze("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&ze("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},Ja=e=>{var u,l,h;let t=Le(),n=en.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&ze("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(d=>t._OrtFree(d)),a.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&ze("Can't release session."),en.delete(e)},eo=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Le(),u=s.PTR_SIZE,l=e[0],h=e[1],d=e[3],p=d,m,g;if(l==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let b=e[2].gpuBuffer;g=xn(bn(l),h);{let $=s.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,a,b,g)}}else if(d==="ml-tensor"){let b=e[2].mlTensor;g=xn(bn(l),h);let $=s.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,b,bn(l),h)}else{let b=e[2];if(Array.isArray(b)){g=u*b.length,m=s._malloc(g),n.push(m);for(let $=0;$<b.length;$++){if(typeof b[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);s.setValue(m+$*u,wt(b[$],n),"*")}}else{let $=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&$&&M){let S=s.UTF8ToString(i);if($(r,S)||M(r,S)){let T=bn(l);g=xn(T,h),p="ml-tensor";let k=s.webnnCreateTemporaryTensor,I=s.webnnUploadTensor;if(!k||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,T,h);I(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),m=v}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}}let y=s.stackSave(),w=s.stackAlloc(4*h.length);try{h.forEach(($,M)=>s.setValue(w+M*u,$,u===4?"i32":"i64"));let b=s._OrtCreateTensor(bn(l),m,g,w,h.length,Gi(p));b===0&&ze(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},to=async(e,t,n,r,i,a)=>{var F,H,O,G;let o=Le(),s=o.PTR_SIZE,u=en.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],d=u[2],p=u[3],m=u[4],g=u[5],y=t.length,w=r.length,b=0,$=[],M=[],S=[],T=[],k=[],I=o.stackSave(),v=o.stackAlloc(y*s),C=o.stackAlloc(y*s),N=o.stackAlloc(w*s),j=o.stackAlloc(w*s);try{[b,$]=iu(a),gn("wasm prepareInputOutputTensor");for(let R=0;R<y;R++)await eo(n[R],M,T,e,h[t[R]],t[R],m);for(let R=0;R<w;R++)await eo(i[R],S,T,e,d[r[R]],y+r[R],m);yn("wasm prepareInputOutputTensor");for(let R=0;R<y;R++)o.setValue(v+R*s,M[R],"*"),o.setValue(C+R*s,h[t[R]],"*");for(let R=0;R<w;R++)o.setValue(N+R*s,S[R],"*"),o.setValue(j+R*s,d[r[R]],"*");if(p&&!g){let{handle:R,outputPreferredLocations:K,outputPreferredLocationsEncoded:P}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);gn("wasm bindInputsOutputs");for(let U=0;U<y;U++){let W=t[U];await o._OrtBindInput(R,h[W],M[U])!==0&&ze(`Can't bind input[${U}] for session=${e}.`)}for(let U=0;U<w;U++){let W=r[U];(F=i[U])!=null&&F[3]?(k.push(S[U]),o._OrtBindOutput(R,d[W],S[U],0)!==0&&ze(`Can't bind pre-allocated output[${U}] for session=${e}.`)):o._OrtBindOutput(R,d[W],0,P[W])!==0&&ze(`Can't bind output[${U}] to ${K[U]} for session=${e}.`)}yn("wasm bindInputsOutputs"),en.set(e,[l,h,d,p,m,!0])}(H=o.jsepOnRunStart)==null||H.call(o,l),(O=o.webnnOnRunStart)==null||O.call(o,l);let Z;p?Z=await o._OrtRunWithBinding(l,p.handle,w,N,b):Z=await o._OrtRun(l,C,v,y,j,w,N,b),Z!==0&&ze("failed to call OrtRun().");let z=[],q=[];gn("wasm ProcessOutputTensor");for(let R=0;R<w;R++){let K=Number(o.getValue(N+R*s,"*"));if(K===S[R]||k.includes(S[R])){z.push(i[R]),K!==S[R]&&o._OrtReleaseTensor(K)!==0&&ze("Can't release tensor.");continue}let P=o.stackSave(),U=o.stackAlloc(4*s),W=!1,L,ne=0;try{o._OrtGetTensorData(K,U,U+s,U+2*s,U+3*s)!==0&&ze(`Can't access output tensor data on index ${R}.`);let ue=s===4?"i32":"i64",ae=Number(o.getValue(U,ue));ne=o.getValue(U+s,"*");let _e=o.getValue(U+s*2,"*"),Re=Number(o.getValue(U+s*3,ue)),Ve=[];for(let Oe=0;Oe<Re;Oe++)Ve.push(Number(o.getValue(_e+Oe*s,ue)));o._OrtFree(_e)!==0&&ze("Can't free memory for tensor dims.");let je=Ve.reduce((Oe,me)=>Oe*me,1);L=Lt(ae);let Ke=p==null?void 0:p.outputPreferredLocations[r[R]];if(L==="string"){if(Ke==="gpu-buffer"||Ke==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Oe=[];for(let me=0;me<je;me++){let We=o.getValue(ne+me*s,"*"),un=o.getValue(ne+(me+1)*s,"*"),ln=me===je-1?void 0:un-We;Oe.push(o.UTF8ToString(We,ln))}z.push([L,Ve,Oe,"cpu"])}else if(Ke==="gpu-buffer"&&je>0){let Oe=o.jsepGetBuffer;if(!Oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let me=Oe(ne),We=xn(ae,je);if(We===void 0||!Li(L))throw new Error(`Unsupported data type: ${L}`);W=!0,z.push([L,Ve,{gpuBuffer:me,download:o.jsepCreateDownloader(me,We,L),dispose:()=>{o._OrtReleaseTensor(K)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(Ke==="ml-tensor"&&je>0){let Oe=o.webnnEnsureTensor,me=o.webnnIsGraphInputOutputTypeSupported;if(!Oe||!me)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(xn(ae,je)===void 0||!Fi(L))throw new Error(`Unsupported data type: ${L}`);if(!me(e,L,!1))throw new Error(`preferredLocation "ml-tensor" for ${L} output is not supported by current WebNN Context.`);let We=await Oe(e,ne,ae,Ve,!1);W=!0,z.push([L,Ve,{mlTensor:We,download:o.webnnCreateMLTensorDownloader(ne,L),dispose:()=>{o.webnnReleaseTensorId(ne),o._OrtReleaseTensor(K)}},"ml-tensor"])}else if(Ke==="ml-tensor-cpu-output"&&je>0){let Oe=o.webnnCreateMLTensorDownloader(ne,L)(),me=z.length;W=!0,q.push((async()=>{let We=[me,await Oe];return o.webnnReleaseTensorId(ne),o._OrtReleaseTensor(K),We})()),z.push([L,Ve,[],"cpu"])}else{let Oe=Or(L),me=new Oe(je);new Uint8Array(me.buffer,me.byteOffset,me.byteLength).set(o.HEAPU8.subarray(ne,ne+me.byteLength)),z.push([L,Ve,me,"cpu"])}}finally{o.stackRestore(P),L==="string"&&ne&&o._free(ne),W||o._OrtReleaseTensor(K)}}p&&!m&&(o._OrtClearBoundOutputs(p.handle)!==0&&ze("Can't clear bound outputs."),en.set(e,[l,h,d,p,m,!1]));for(let[R,K]of await Promise.all(q))z[R][2]=K;return yn("wasm ProcessOutputTensor"),z}finally{(G=o.webnnOnRunEnd)==null||G.call(o,l),o.stackRestore(I),M.forEach(Z=>o._OrtReleaseTensor(Z)),S.forEach(Z=>o._OrtReleaseTensor(Z)),T.forEach(Z=>o._free(Z)),b!==0&&o._OrtReleaseRunOptions(b),$.forEach(Z=>o._free(Z))}},no=e=>{let t=Le(),n=en.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},ro=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),tn,ot,Un,pr,fr,Yr,io,Xr,In,kn,Mf,Tf,Ef,If,kf,Cf,Af,Rf,Of=ee(()=>{ft(),Sf(),wn(),Ni(),tn=()=>!!Ue.wasm.proxy&&typeof document<"u",Un=!1,pr=!1,fr=!1,Xr=new Map,In=(e,t)=>{let n=Xr.get(e);n?n.push(t):Xr.set(e,[t])},kn=()=>{if(Un||!pr||fr||!ot)throw new Error("worker not ready")},Mf=e=>{switch(e.data.type){case"init-wasm":Un=!1,e.data.err?(fr=!0,io[1](e.data.err)):(pr=!0,io[0]()),Yr&&(URL.revokeObjectURL(Yr),Yr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Xr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Tf=async()=>{if(!pr){if(Un)throw new Error("multiple calls to 'initWasm()' detected.");if(fr)throw new Error("previous call to 'initWasm()' failed.");if(Un=!0,tn())return new Promise((e,t)=>{ot==null||ot.terminate(),Js().then(([n,r])=>{try{ot=r,ot.onerror=a=>t(a),ot.onmessage=Mf,io=[e,t];let i={type:"init-wasm",in:Ue};!i.in.wasm.wasmPaths&&(n||Ai)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ot.postMessage(i),Yr=n}catch(i){t(i)}},t)});try{await Di(Ue.wasm),await Ya(Ue),pr=!0}catch(e){throw fr=!0,e}finally{Un=!1}}},Ef=async e=>{if(tn())return kn(),new Promise((t,n)=>{In("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ue}};ot.postMessage(r)});await Xa(Ue,e)},If=async e=>tn()?(kn(),new Promise((t,n)=>{In("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ot.postMessage(r,[e.buffer])})):Kr(e),kf=async(e,t)=>{if(tn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return kn(),new Promise((n,r)=>{In("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ot.postMessage(i,a)})}else return Qa(e,t)},Cf=async e=>{if(tn())return kn(),new Promise((t,n)=>{In("release",[t,n]);let r={type:"release",in:e};ot.postMessage(r)});Ja(e)},Af=async(e,t,n,r,i,a)=>{if(tn()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return kn(),new Promise((o,s)=>{In("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};ot.postMessage(l,ro(u))})}else return to(e,t,n,r,i,a)},Rf=async e=>{if(tn())return kn(),new Promise((t,n)=>{In("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ot.postMessage(r)});no(e)}}),ao,zf,Nf,Ay=ee(()=>{ft(),Of(),fe(),Ei(),cu(),ao=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},zf=e=>{switch(e[3]){case"cpu":return new Ge(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Li(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ge.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Fi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ge.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Nf=class{async fetchModelAndCopyToWasmMemory(e){return If(await Wi(e))}async loadModel(e,t){Ct();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await kf(n,t),yt()}async dispose(){return Cf(this.sessionId)}async run(e,t,n){Ct();let r=[],i=[];Object.entries(e).forEach(d=>{let p=d[0],m=d[1],g=this.inputNames.indexOf(p);if(g===-1)throw new Error(`invalid input '${p}'`);r.push(m),i.push(g)});let a=[],o=[];Object.entries(t).forEach(d=>{let p=d[0],m=d[1],g=this.outputNames.indexOf(p);if(g===-1)throw new Error(`invalid output '${p}'`);a.push(m),o.push(g)});let s=r.map((d,p)=>ao(d,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((d,p)=>d?ao(d,()=>`output "${this.outputNames[o[p]]}"`):null),l=await Af(this.sessionId,i,s,o,u,n),h={};for(let d=0;d<l.length;d++)h[this.outputNames[o[d]]]=a[d]??zf(l[d]);return yt(),h}startProfiling(){}endProfiling(){Rf(this.sessionId)}}}),Bf={};zn(Bf,{OnnxruntimeWebAssemblyBackend:()=>so,initializeFlags:()=>oo,wasmBackend:()=>Pf});var oo,so,Pf,Ry=ee(()=>{ft(),Of(),Ay(),oo=()=>{(typeof Ue.wasm.initTimeout!="number"||Ue.wasm.initTimeout<0)&&(Ue.wasm.initTimeout=0);let e=Ue.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ue.wasm.simd=!1),typeof Ue.wasm.proxy!="boolean"&&(Ue.wasm.proxy=!1),typeof Ue.wasm.trace!="boolean"&&(Ue.wasm.trace=!1),typeof Ue.wasm.numThreads!="number"||!Number.isInteger(Ue.wasm.numThreads)||Ue.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ue.wasm.numThreads=1;else{let t=typeof navigator>"u"?y0("node:os").cpus().length:navigator.hardwareConcurrency;Ue.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},so=class{async init(e){oo(),await Tf(),await Ef(e)}async createInferenceSessionHandler(e,t){let n=new Nf;return await n.loadModel(e,t),n}},Pf=new so});ft(),ft(),ft();var Oy="1.27.0";{let e=(Ry(),Jn(Bf)).wasmBackend;Nn("webgpu",e,5),Nn("webnn",e,5),Nn("cpu",e,10),Nn("wasm",e,10)}Object.defineProperty(Ue.versions,"web",{value:Oy,enumerable:!0});/**
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
 */function ct(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Ln(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Df(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const zy=114;function Ny(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function uo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const d=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(d))),m=Math.min(i-1,p+1),g=Math.max(0,Math.min(1,d-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),$=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),S=(p*r+b)*a,T=(p*r+$)*a,k=(m*r+b)*a,I=(m*r+$)*a,v=(h*t+y)*3;for(let C=0;C<3;C++){const N=o[S+C]*(1-M)+o[T+C]*M,j=o[k+C]*(1-M)+o[I+C]*M;s[v+C]=Math.min(255,Math.max(0,Math.round(N*(1-g)+j*g)))}}}return s}function Fn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const d=h*l,p=Math.min((h+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let w=0,b=0,$=0,M=0;for(let T=Math.floor(d);T<p;T++){const k=Math.min(T+1,p)-Math.max(T,d);if(!(k<=0))for(let I=Math.floor(g);I<y;I++){const v=Math.min(I+1,y)-Math.max(I,g);if(v<=0)continue;const C=v*k,N=(T*r+I)*a;w+=o[N]*C,b+=o[N+1]*C,$+=o[N+2]*C,M+=C}}const S=(h*t+m)*3;s[S]=Math.min(255,Math.max(0,ct(w/M))),s[S+1]=Math.min(255,Math.max(0,ct(b/M))),s[S+2]=Math.min(255,Math.max(0,ct($/M)))}}return s}function Uf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function lo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),d=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const m=(p+.5)*l-.5,g=Math.floor(m),y=Uf(m-g);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,$=Math.floor(b),M=Uf(b-$),S=(p*t+w)*3;for(let T=0;T<3;T++){let k=0;for(let I=0;I<4;I++){const v=d(g-1+I)*r;let C=0;for(let N=0;N<4;N++)C+=M[N]*o[(v+h($-1+N))*a+T];k+=y[I]*C}s[S+T]=Math.min(255,Math.max(0,Math.round(k)))}}}return s}function co(e,t,n=1){const r=Ny(e.width,e.height,t,n),i=uo(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(zy/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const d=(l+h)*3,p=u+h;o[p]=i[d]/255,o[a+p]=i[d+1]/255,o[2*a+p]=i[d+2]/255}}return{tensor:o,params:r}}function Lf(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],d=e[o*6+4],p=e[o*6+5];if(d<n)continue;const m=Math.round(p);if(m<0||m>=r)continue;const g=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:d,box:[Math.trunc(g),Math.trunc(y),Math.trunc(w-g),Math.trunc(b-y)],boxFloat:[g,y,w-g,b-y]})}return i}const mr=.8,Ff=.65,By=110,Py=1280;function Dy(e,t,n){if(n==null)return mr;if(n.length===0)return Ff;const r=Math.max(e,t);if(!(r>0))return mr;const i=Py/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return mr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=By?Ff:mr}const Gf=.25,Wf=.6;function Uy(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Gf:Wf)),h=Math.trunc(u*(s>=u?Wf:Gf)),d=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(Math.trunc(e),a+l),g=Math.min(Math.trunc(t),o+h),y=m-d,w=g-p;return y<=0||w<=0?null:{x:d,y:p,width:y,height:w}}const Ly=.6,Fy=.74;function qf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,d=ct((s+l)/2),p=ct((u+h)/2),m=ct((l-s+(h-u))/4);m>=1&&r.push({cx:d,cy:p,r:m})}return r}function Gy(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Ly*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Wy(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=Fy*(n.r+r.r))&&t.push(n);return t}function qy(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Ln(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Vf(e,t,n){const r=qf(e,t,n);return r.length===0?[]:qy(Wy(Gy(r)))}function Vy(e,t,n){return qf(e,t,n)}function gr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Hy=.5,jy=.7,Ky=.55;function ho(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Hf(e){if(e.length===0)return[];const t=(Hy*ho(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Ln(i.map(a=>a[0]))),Math.trunc(Ln(i.map(a=>a[1]))),Math.trunc(Ln(i.map(a=>a[2]))),Math.trunc(Ln(i.map(a=>a[3])))]);if(r.length>=2){const i=ho(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),d=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*d,m=(u[2]-u[0])*(u[3]-u[1]),g=(l[2]-l[0])*(l[3]-l[1]);if(p>=jy*Math.min(m,g)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=ho(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=Ky*i)}return r}const jf=["brown","grey","blue","green","yellow","red","purple"],Yy={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Xy=.7;function Kf(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const d of r){const p=e[d];if(p.family!==a.family)continue;const[m,g,y,w]=p.box,b=Math.max(0,Math.min(o+u,m+y)-Math.max(o,m)),$=Math.max(0,Math.min(s+l,g+w)-Math.max(s,g)),M=Math.max(1,Math.min(u*l,y*w));if(b*$>=Xy*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function Zr(e,t,n){const r=Lf(e,t,n,jf.length).map(i=>{const a=jf[i.classIndex];return{color:a,family:Yy[a],box:i.box,confidence:i.confidence}});return Kf(r)}const Zy=8,Qy=.8,Yf=1.25;function Jy(e){if(e.length<Zy)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Yf?t.push(o):u>s*Yf&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Qy*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const ew=2.25,Xf=8;function tw(e){if(e.length<Xf)return[];const t=e.map(d=>[d.box[0]+d.box[2]/2,d.box[1]+d.box[3]/2]),n=e.map(d=>Math.hypot(d.box[2],d.box[3])).sort((d,p)=>d-p),r=ew*n[Math.floor(n.length/2)],i=r*r,a=e.map((d,p)=>p),o=d=>{for(;a[d]!==d;)a[d]=a[a[d]],d=a[d];return d};for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){const m=t[d][0]-t[p][0],g=t[d][1]-t[p][1];m*m+g*g<=i&&(a[o(d)]=o(p))}const s=new Map;for(let d=0;d<e.length;d++){const p=o(d);s.set(p,[...s.get(p)??[],d])}let u=[];for(const d of s.values())d.length>u.length&&(u=d);if(u.length<Xf||u.length===e.length)return[];const l=new Set(u),h=e.map((d,p)=>p).filter(d=>!l.has(d));return h.map(d=>({family:e[d].family,color:e[d].color,box:[...e[d].box],reason:`${e[d].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const dt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function St(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const nw=.42,rw=22,iw=43,aw=120,ow=1.5,sw=.72,uw=110,Zf=3;function yr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*nw);if(l<1)return 0;let h=0;for(let d=0;d<i;d++)for(let p=0;p<r;p++){if((p-s)**2+(d-u)**2>l*l)continue;const m=(d*r+p)*a,g=o[m],y=o[m+1],w=o[m+2];!t&&g>=250&&y>=250&&w>=250||(n(g,y,w),h+=1)}return h}function lw(e){let t=0,n=0,r=0,i=yr(e,!1,(a,o,s)=>{const u=St(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=yr(e,!0,(a,o,s)=>{const u=St(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function cw(e){let t=0,n=0,r=yr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=yr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function dw(e){let t=0;const n=yr(e,!0,(r,i,a)=>{t+=St(r,i,a).s});return n===0?null:t/n}function hw(e){const t=lw(e);if(t===null||t.s<=rw)return 1;if(t.s>=aw){const n=cw(e);return n!==null&&n>=ow?6:3}return t.s>=iw?3:6}function pw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function fw(e,t){const n=[...t];if(e.length<Zf||t.length!==e.length)return n;const r=e.map(o=>dw(o)),i=r.filter(o=>o!==null);if(i.length<Zf)return n;const a=Ln(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<sw*a&&o<uw&&(n[s]=1)}),n}function Qf(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),d=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=(p*l+m)*3;if((m+a-n)**2+(p+o-r)**2<=i*i){const w=((p+o)*e.width+(m+a))*e.channels;d[g]=e.data[w],d[g+1]=e.data[w+1],d[g+2]=e.data[w+2]}else d[g]=255,d[g+1]=255,d[g+2]=255}return{width:l,height:h,channels:3,data:d}}function mw(e,t){const n=t.map(a=>Qf(e,a)),r=n.map(a=>hw(a)),i=pw(t,r);return fw(n,i)}function gw(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function Jf(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,d=Math.min((l+1)*i,e.width);let p=0,m=0;for(let g=Math.floor(s);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,s);if(!(y<=0))for(let w=Math.floor(h);w<d;w++){const b=Math.min(w+1,d)-Math.max(w,h);b<=0||(p+=e.data[g*e.width+w]*b*y,m+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,ct(p/m)))}}return{width:t,height:n,data:r}}function yw(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,ct(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function ww(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,d=a+u;if(!(h<0||h>=t||d<0||d>=n)&&r[d*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function _w(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,d=a+u;if(h>=0&&h<t&&d>=0&&d<n&&r[d*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function po(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let d=0,p=0,m=0;for(;l<h;){const g=o[l++],y=g%t,w=g/t|0;d+=1,p+=y,m+=w;for(let b=-1;b<=1;b++)for(let $=-1;$<=1;$++){if($===0&&b===0)continue;const M=y+$,S=w+b;if(M<0||M>=t||S<0||S>=n)continue;const T=S*t+M;r[T]>0&&i[T]===0&&(i[T]=s,o[h++]=T)}}a[s]={area:d,centroidX:p/d,centroidY:m/d},s+=1}return{labels:i,stats:a}}function bw(e,t,n){return em(Float32Array.from(e.data),e.width,t,n)}function em(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const d=h-a,p=l-a,m=s*d-u*p+a,g=u*d+s*p+a,y=Math.floor(m),w=Math.floor(g),b=m-y,$=g-w,M=(k,I)=>k>=0&&k<t&&I>=0&&I<t?e[I*t+k]:r,S=M(y,w)*(1-b)+M(y+1,w)*b,T=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+h]=S*(1-$)+T*$}return i}const xw=.9,$w=.34,vw=[.55,.6,.66,.72],Sw=22,Mw=88,Tw=35,Gn=28,fo=4,Ew=Array.from({length:15},(e,t)=>-21+t*3),tm=[-2,0,2],Iw=3,kw=.3;function Cw(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Aw(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),d=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+d)*u+(w+h)]=e.data[(y+r)*e.width+(w+t)];const p=Gn-2*fo,m=Jf({width:u,height:u,data:l},p,p),g=new Float32Array(Gn*Gn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)g[(y+fo)*Gn+(w+fo)]=m.data[y*p+w]>110?1:0;return g}function Rw(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*$w);if(u<4)return null;const l=o-u,h=s-u,d=2*u,p=2*u;if(d<6||p<6)return null;const m=new Int16Array(d*p),g=new Int16Array(d*p),y=new Int16Array(d*p),w=new Uint8Array(d*p),b=[],$=Math.min(d,p)/2;for(let R=0;R<d;R++)for(let K=0;K<p;K++){const P=((R+l)*n+(K+h))*i,{h:U,s:W,v:L}=St(a[P],a[P+1],a[P+2]),ne=R*p+K;m[ne]=U,g[ne]=W,y[ne]=L,Math.sqrt((K-p/2)**2+(R-d/2)**2)/$<=t&&(w[ne]=1,b.push(L))}if(b.length<16)return null;const M=Df(b,55);let S=0,T=0,k=0;const I=R=>m[R]>=Sw&&m[R]<=Mw&&g[R]>=Tw,v=R=>y[R]>=M&&g[R]<=95&&!I(R)&&w[R]===1;for(let R=0;R<d*p;R++)w[R]===1&&(k+=1,y[R]>=130&&!I(R)&&(S+=1),v(R)&&(T+=1));const C=S>.5*k&&T<.15*k,N=new Uint8Array(d*p);if(C){const R=Df(b,45);for(let K=0;K<d*p;K++)N[K]=w[K]===1&&y[K]<=R?255:0}else for(let R=0;R<d*p;R++)N[R]=v(R)?255:0;const j={width:p,height:d,data:N},F=ww(j);let H=po(F),O=H;if(H.stats.length<=1&&(H=po(j),O=H,H.stats.length<=1))return null;const G=Math.min(d,p)/2;let Z=0,z=-1;for(let R=1;R<O.stats.length;R++){const K=O.stats[R];if(K===void 0)continue;const P=Math.hypot(K.centroidX-p/2,K.centroidY-d/2)/G,U=K.area*(1-.6*Math.min(P,1));U>z&&(z=U,Z=R)}if(Z===0)return null;const q=new Uint8Array(d*p);for(let R=0;R<d*p;R++)q[R]=O.labels[R]===Z?255:0;return Aw(_w({width:p,height:d,data:q}))}function Ow(e,t,n,r,i,a){const o=Gn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let d=0;d<o;d++){const p=d-i;if(p<0||p>=o)continue;const m=e[h*o+p];m!==0&&(u+=m,s+=m*n[l*o+d])}}return s/(u+r-s+1e-6)}function zw(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Ew){const a=i===0?e:em(e,Gn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of tm)for(const u of tm){const l=Ow(a,o,t,n,s,u);l>r&&(r=l)}}return r}function Nw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of vw){const s=Rw(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([zw(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<kw)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,Iw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const Bw=2560,Pw=.3,Dw=.5,Uw=1.6,Lw=3,Fw=5;function Gw(e){const t=Math.min(1,Bw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),d=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let m=0;m<n;m++){const g=(m+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,g-y));for(let $=0;$<3;$++){const M=2-$,S=(h*e.width+y)*e.channels+M,T=(h*e.width+w)*e.channels+M,k=(d*e.width+y)*e.channels+M,I=(d*e.width+w)*e.channels+M,v=e.data[S]*(1-b)+e.data[T]*b,C=e.data[k]*(1-b)+e.data[I]*b,N=v*(1-p)+C*p;a[$*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function Ww(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function qw(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function Vw(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const d=u/h,p=l/h;let m=1/0,g=-1/0,y=1/0,w=-1/0;for(const[S,T]of e){const k=S*d+T*p,I=-S*p+T*d;k<m&&(m=k),k>g&&(g=k),I<y&&(y=I),I>w&&(w=I)}const b=g-m,$=w-y,M=b*$;if(M<n){n=M;const S=(m+g)/2,T=(y+w)/2;t={cx:S*d-T*p,cy:S*p+T*d,w:b,h:$,angle:Math.atan2(p,d)}}}return t}function Hw(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),d=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let w=p;w<=m;w++)for(let b=h;b<=d;b++){const $=b-r.cx,M=w-r.cy,S=$*i+M*a,T=-$*a+M*i;Math.abs(S)<=o&&Math.abs(T)<=s&&(g+=e[w*t+b],y+=1)}return y===0?0:g/y}function jw(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,h]=o,[d,p]=s[1]<=u[1]?[s,u]:[u,s],[m,g]=l[1]<=h[1]?[l,h]:[h,l];return[[d[0],d[1]],[m[0],m[1]],[g[0],g[1]],[p[0],p[1]]]}function Kw(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let m=0;m<o.length;m++)o[m]=e[m]>Pw?255:0;o=Ww(o,i,a);const s={width:i,height:a,data:o},{labels:u}=po(s),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(m);b===void 0?w.set(m,[g,g]):(g<b[0]&&(b[0]=g),g>b[1]&&(b[1]=g))}const h=n/i,d=r/a,p=[];for(const[m,g]of l){const y=[];for(const[N,[j,F]]of g)y.push([j-.5,N-.5],[j-.5,N+.5],[F+.5,N-.5],[F+.5,N+.5]);const w=Vw(qw(y));if(Math.min(w.w,w.h)<Lw)continue;const b=Hw(e,i,a,w);if(b<Dw)continue;const $=w.w*w.h*Uw/(2*(w.w+w.h)),M={...w,w:w.w+2*$,h:w.h+2*$};if(Math.min(M.w,M.h)<Fw+2)continue;const T=jw(M).map(([N,j])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(j*d)))]),k=T.map(N=>N[0]),I=T.map(N=>N[1]),v=Math.min(...k),C=Math.min(...I);p.push({quad:T,x:v,y:C,width:Math.max(...k)-v,height:Math.max(...I)-C,score:b})}return p.sort((m,g)=>g.score-m.score)}function Yw(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Xw([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let d=0;d<s;d++)for(let p=0;p<o;p++){const m=u[6]*p+u[7]*d+u[8],g=(u[0]*p+u[1]*d+u[2])/m,y=(u[3]*p+u[4]*d+u[5])/m,w=Math.floor(g),b=Math.floor(y),$=g-w,M=y-b,S=Math.max(0,Math.min(e.width-1,w)),T=Math.max(0,Math.min(e.width-1,w+1)),k=Math.max(0,Math.min(e.height-1,b)),I=Math.max(0,Math.min(e.height-1,b+1));for(let v=0;v<e.channels;v++){const C=e.data[(k*e.width+S)*e.channels+v],N=e.data[(k*e.width+T)*e.channels+v],j=e.data[(I*e.width+S)*e.channels+v],F=e.data[(I*e.width+T)*e.channels+v],H=C*(1-$)+N*$,O=j*(1-$)+F*$;l[(d*o+p)*e.channels+v]=Math.round(H*(1-M)+O*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?Wt(h,3):h}function Xw(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Wt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let d=0;d<r;d++){let p,m;n===1?(p=i-1-h,m=d):n===2?(p=r-1-d,m=i-1-h):(p=h,m=r-1-d);const g=(h*r+d)*a,y=(m*s+p)*a;for(let w=0;w<a;w++)l[y+w]=o[g+w]}return{width:s,height:u,channels:a,data:l}}const Zw=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Zw)*255));return e})();const qt=48,Qw=320;function Jw(e){return["blank",...e.characters," "]}function e_(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function t_(e,t){const n=Math.trunc(qt*t),r=e.width/e.height,i=Math.ceil(qt*r)>n?n:Math.ceil(qt*r),a=new Float32Array(3*qt*n),o=qt*n,s=e.width/i,u=e.height/qt;for(let l=0;l<qt;l++){const h=(l+.5)*u-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,d+1),m=Math.max(0,Math.min(1,h-d));for(let g=0;g<i;g++){const y=(g+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),$=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const S=2-M,T=(d*e.width+w)*e.channels+S,k=(d*e.width+b)*e.channels+S,I=(p*e.width+w)*e.channels+S,v=(p*e.width+b)*e.channels+S,C=e.data[T]*(1-$)+e.data[k]*$,N=e.data[I]*(1-$)+e.data[v]*$,j=C*(1-m)+N*m;a[M*o+l*n+g]=(j/255-.5)/.5}}}return{tensor:a,width:n}}const n_=62,r_=8,i_=5;function mo(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function a_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function Qr(e,t){return e.length===0&&t.length===0?100:200*a_(e,t)/(e.length+t.length)}function nm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Qr(n(e),n(t))}function o_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(Qr(s,u),Qr(s,l),Qr(u,l))}function s_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[mo(i),mo(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function u_(e,t){const n=mo(e);if(!n||t.length===0)return null;const i=s_(t).map(h=>({...h,score:o_(n,h.key)})).sort((h,d)=>d.score-h.score).slice(0,r_).filter(h=>h.score>=n_);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=i_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[nm(s,u.key),u.score];for(const h of o.slice(1)){const d=[nm(s,h.key),h.score];(d[0]>l[0]||d[0]===l[0]&&d[1]>l[1])&&(u=h,l=d)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const rm=5e3,go=.75,im=15,l_=1.25,c_=2.4,d_=.003,h_=.85,p_=4,yo=2600,wo=2,_o=.3,am=.1,om=.012,f_=22,sm=.5,Jr=.12;function et(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function m_(e,t,n,r){const i=r.map(ae=>ae[0]),a=r.map(ae=>ae[1]),o=i.reduce((ae,_e)=>ae+_e,0)/i.length,s=a.reduce((ae,_e)=>ae+_e,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*p_,h=Math.max(0,Math.trunc(o-l)),d=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),m=Math.min(n.height,Math.trunc(s+l));if(d-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<yo?wo:1,y=et(e,n),w=et(e,t),b=new e.Rect(h,p,d-h,m-p),$=y.roi(b),M=new e.Mat;g!==1?e.resize($,M,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(M);const S=new e.Mat,T=new e.Mat;e.cvtColor(w,S,e.COLOR_RGB2GRAY),e.cvtColor(M,T,e.COLOR_RGB2GRAY);const k=new e.ORB(rm),I=new e.KeyPointVector,v=new e.KeyPointVector,C=new e.Mat,N=new e.Mat,j=new e.Mat,F=[y,w,$,M,S,T,I,v,C,N,j],H=ae=>{for(const _e of F)try{_e.delete()}catch{}try{k.delete()}catch{}return ae};if(k.detectAndCompute(S,j,I,C),k.detectAndCompute(T,j,v,N),C.rows<8||N.rows<8)return H(null);const O=new e.BFMatcher(e.NORM_HAMMING),G=new e.DMatchVectorVector;O.knnMatch(C,N,G,2);const Z=[],z=[];for(let ae=0;ae<G.size();ae++){const _e=G.get(ae);if(_e.size()===2){const Re=_e.get(0),Ve=_e.get(1);if(Re.distance<go*Ve.distance){const je=I.get(Re.queryIdx).pt,Ke=v.get(Re.trainIdx).pt;Z.push(je.x,je.y),z.push(Ke.x,Ke.y)}}}if(G.delete(),O.delete(),Z.length/2<8)return H(null);const q=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),R=e.matFromArray(z.length/2,1,e.CV_32FC2,z),K=new e.Mat,P=e.findHomography(q,R,e.RANSAC,5,K);let U=0;for(let ae=0;ae<K.rows;ae++)U+=K.data[ae];const W=P.rows===3?[...P.data64F]:null;if(q.delete(),R.delete(),K.delete(),P.delete(),W===null||U<im)return H(null);const L=1/g,ne=[[L,0,h],[0,L,p],[0,0,1]],ue=[0,1,2].map(ae=>[0,1,2].map(_e=>ne[ae][0]*W[_e]+ne[ae][1]*W[3+_e]+ne[ae][2]*W[6+_e]));return H({H:ue,inliers:U})}function bo(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[d,p]=e[(u+1)%4];r+=l*p-d*h}const i=Math.abs(r/2)/(t*n);if(i<d_||i>h_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=l_&&s<=c_}function xo(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function $o(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(_o*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(F=>[F[0],F[1],F[2]-o*(F[0]+F[1])+0]);for(let F=0;F<3;F++)l[F][2]=r[F][2]-o*r[F][0]-o*r[F][1];const h=et(e,t),d=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,d,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(d,m,e.COLOR_RGB2Lab),h.delete(),p.delete();const g=m.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(F,H)=>{const O=(H*s+F)*3;w[0].push(g[O]),w[1].push(g[O+1]),w[2].push(g[O+2])};for(let F=0;F<u;F++)for(let H=0;H<s;H++)(F<y||F>=u-y||H<y||H>=s-y)&&b(H,F);const $=F=>{F.sort((O,G)=>O-G);const H=F.length>>1;return F.length%2?F[H]:(F[H-1]+F[H])/2},M=[$(w[0]),$(w[1]),$(w[2])],S=(F,H)=>{const O=(H*s+F)*3,G=g[O]-M[0],Z=g[O+1]-M[1],z=g[O+2]-M[2];return Math.sqrt(G*G+Z*Z+z*z)>f_},T=Math.max(6,Math.trunc(am*i)),k=Math.max(6,Math.trunc(am*a)),I=Math.max(2,Math.trunc(om*i)),v=Math.max(2,Math.trunc(om*a)),C=F=>{let H=0,O=0;for(const G of F)O=G?O+1:0,O>H&&(H=O);return H/Math.max(1,F.length)},N=F=>{let H,O,G,Z,z;if(F==="L"?(H=o,O=o+a,G=Math.max(0,o-I-T),Z=Math.max(0,o-I),z=!1):F==="R"?(H=o,O=o+a,G=o+i+I,Z=Math.min(s,o+i+I+T),z=!1):(H=Math.max(0,o-v-k),O=Math.max(0,o-v),G=o,Z=o+i,z=!0),O<=H||Z<=G)return 0;const q=[];if(z)for(let R=G;R<Z;R++){let K=0;for(let P=H;P<O;P++)S(R,P)&&K++;q.push(K/(O-H)>sm)}else for(let R=H;R<O;R++){let K=0;for(let P=G;P<Z;P++)S(P,R)&&K++;q.push(K/(Z-G)>sm)}return C(q)},j={L:N("L"),R:N("R"),T:N("T")};return d.delete(),m.delete(),j}const g_=6e3,y_=8,um=.5,w_=.6;function __(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<yo?wo:1,a=et(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(g_),l=new e.Mat,h=new e.KeyPointVector,d=new e.Mat;u.detectAndCompute(s,l,h,d);const p=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(d.rows<8)return p;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const w=et(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,$,M);const S=[w,$,M],T=()=>{for(const ue of S)ue.delete();b.delete()};if(M.rows<8){T();continue}const k=new e.DMatchVectorVector;m.knnMatch(M,d,k,2);const I=[],v=[];for(let ue=0;ue<k.size();ue++){const ae=k.get(ue);if(ae.size()===2){const _e=ae.get(0);if(_e.distance<go*ae.get(1).distance){const Re=$.get(_e.queryIdx).pt,Ve=h.get(_e.trainIdx).pt;I.push(Re.x,Re.y),v.push(Ve.x,Ve.y)}}}if(k.delete(),I.length/2<8){T();continue}const C=e.matFromArray(I.length/2,1,e.CV_32FC2,I),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),j=new e.Mat,F=e.findHomography(C,N,e.RANSAC,5,j);let H=0;for(let ue=0;ue<j.rows;ue++)H+=j.data[ue];const O=F.rows===3?[...F.data64F]:null;if(C.delete(),N.delete(),j.delete(),F.delete(),O===null||H<y_){T();continue}const G=1/i,Z=[[G*O[0],G*O[1],G*O[2]],[G*O[3],G*O[4],G*O[5]],[O[6],O[7],O[8]]],z=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ue,ae])=>xo(Z,ue,ae));if(!bo(z,t.width,t.height)){T();continue}const q=et(e,t),R=e.matFromArray(3,3,e.CV_64F,Z.flat()),K=new e.Mat;e.warpPerspective(q,K,R,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const P=new e.Mat;e.cvtColor(K,P,e.COLOR_RGB2GRAY);const U=new e.Mat;e.matchTemplate(P,b,U,e.TM_CCOEFF_NORMED);const W=U.data32F[0];if(q.delete(),R.delete(),K.delete(),P.delete(),U.delete(),W<um){T();continue}const L=$o(e,t,y,Z),ne=vo(L);p.push({id:g,confidence:Math.max(0,W),footprint:z,built:L!==null&&Math.max(L.L,L.R,L.T)>=Jr,tuckRegion:So(z,ne)}),T()}}finally{s.delete(),l.delete(),h.delete(),d.delete();try{u.delete(),m.delete()}catch{}}return p}function vo(e){return e!==null&&e.R>=Jr?["R"]:[]}function So(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=_o*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],$=n[w],M=n[b];let S=-(M[1]-$[1]),T=M[0]-$[0];const k=($[0]+M[0])/2,I=($[1]+M[1])/2;S*(k-s)+T*(I-u)<0&&(S=-S,T=-T);const v=Math.hypot(S,T);v<=1e-6||(S=S/v*o,T=T/v*o,h.push([$[0]+S,$[1]+T],[M[0]+S,M[1]+T]))}const d=h.map(y=>y[0]),p=h.map(y=>y[1]),m=Math.round(Math.min(...d)),g=Math.round(Math.min(...p));return{x:m,y:g,width:Math.round(Math.max(...d))-m,height:Math.round(Math.max(...p))-g}}function b_(e,t,n,r){const i=m_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>xo(i.H,l,h));if(!bo(o,t.width,t.height))return null;const s=$o(e,t,n,i.H);if(s===null)return null;const u=vo(s);return{built:Math.max(s.L,s.R,s.T)>=Jr,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const x_=.88;function lm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(_o*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*x_),h=s-l;if(h<1)return null;const d=et(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(p,m),y=[...g.data64F],w=[0,1,2].flatMap(I=>[y[I*3],y[I*3+1],y[I*3+2]-o*y[I*3]-o*y[I*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),$=new e.Mat;e.warpPerspective(d,$,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=$.roi(new e.Rect(l,0,h,u)),S=new e.Mat;M.copyTo(S);const T=S.data,k=new Uint8ClampedArray(h*u*3);k.set(T.subarray(0,k.length));for(const I of[d,p,m,g,b,$,M,S])try{I.delete()}catch{}return{width:h,height:u,channels:3,data:k}}function $_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),d=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+s+l));if(d-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<yo?wo:1,y=et(e,n),w=et(e,t),b=y.roi(new e.Rect(h,p,d-h,m-p)),$=new e.Mat;g!==1?e.resize(b,$,new e.Size(0,0),g,g,e.INTER_CUBIC):b.copyTo($);const M=new e.Mat,S=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor($,S,e.COLOR_RGB2GRAY);const T=new e.ORB(rm),k=new e.KeyPointVector,I=new e.KeyPointVector,v=new e.Mat,C=new e.Mat,N=new e.Mat,j=[y,w,b,$,M,S,k,I,v,C,N],F=ue=>{for(const ae of j)try{ae.delete()}catch{}try{T.delete()}catch{}return ue};if(T.detectAndCompute(M,N,k,v),T.detectAndCompute(S,N,I,C),v.rows<8||C.rows<8)return F(null);const H=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;H.knnMatch(v,C,O,2);const G=[],Z=[];for(let ue=0;ue<O.size();ue++){const ae=O.get(ue);if(ae.size()===2){const _e=ae.get(0),Re=ae.get(1);if(_e.distance<go*Re.distance){const Ve=k.get(_e.queryIdx).pt,je=I.get(_e.trainIdx).pt;G.push(Ve.x,Ve.y),Z.push(je.x,je.y)}}}if(O.delete(),H.delete(),G.length/2<8)return F(null);const z=e.matFromArray(G.length/2,1,e.CV_32FC2,G),q=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),R=new e.Mat,K=e.findHomography(z,q,e.RANSAC,5,R);let P=0;for(let ue=0;ue<R.rows;ue++)P+=R.data[ue];const U=K.rows===3?[...K.data64F]:null;if(z.delete(),q.delete(),R.delete(),K.delete(),U===null||P<im)return F(null);const W=1/g,L=[[W,0,h],[0,W,p],[0,0,1]],ne=[0,1,2].map(ue=>[0,1,2].map(ae=>L[ue][0]*U[ae]+L[ue][1]*U[3+ae]+L[ue][2]*U[6+ae]));return F({H:ne,inliers:P})}const v_=620;function S_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function cm(e,t,n,r){const i=dm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(T=>Math.trunc(T));if(Math.min(s,u)>=v_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),d=Math.max(0,a-l),p=Math.max(0,o-h),m=Math.min(t.width,a+s+l),g=Math.min(t.height,o+u+h);if(m<=d||g<=p)return null;const y=et(e,t),w=y.roi(new e.Rect(d,p,m-d,g-p)),b=new e.Mat;e.resize(w,b,new e.Size((m-d)*2,(g-p)*2),0,0,e.INTER_CUBIC);const $=S_(e,b);for(const T of[y,w,b])try{T.delete()}catch{}const M=[(a-d)*2,(o-p)*2,s*2,u*2],S=dm(e,$,n,M);return S===null?null:{...S,footprint:S.footprint.map(([T,k])=>[T*.5+d,k*.5+p])}}catch{return null}}function dm(e,t,n,r){const i=$_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,$])=>xo(i.H,b,$));if(!bo(o,t.width,t.height))return null;const s=et(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=et(e,n),d=new e.Mat,p=new e.Mat;e.cvtColor(l,d,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(d,p,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const b of[s,u,l,h,d,p,m])try{b.delete()}catch{}if(g<um)return null;const y=$o(e,t,n,i.H);if(y===null)return null;const w=vo(y);return{built:Math.max(y.L,y.R,y.T)>=Jr,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}function M_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const d=r*l,p=r*h;if(t>=s-d&&t<=s+l+d&&n>=u-p&&n<=u+h+p){const m=l*h;m<a&&(a=m,i=[s,u,l,h])}}return i}const T_=.3,E_=.3;function I_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=T_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<E_;if(!r&&!h)return;t.some(([p,m])=>p>=a.zone.x0&&p<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(o)}),i}const Rt=128,Mo=.5;function To(e){const t=Fn(e,Rt,Rt),n=Rt*Rt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function hm(e){const t=e[1]??0;return{built:t>=Mo,prob:t}}const wr=120,_r=179,k_=1.3,C_=3.6,A_=.45,R_=6e-4,O_=.02,z_=6e3,N_=.78,B_=1.25,P_=2.4,D_=.05,U_=1.5,L_=.5,F_=.9,G_=150,W_=18,q_=34,V_=90,H_=130,j_=.13,K_=.15,ei="magistrates-guild",Eo="merchants-guild";function Y_(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[wr,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[_r,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,d=new e.Mat,p=new e.Mat,m=e.connectedComponentsWithStats(l,h,d,p,8);l.delete(),h.delete(),p.delete();const g=t.width*t.height,y=[];for(let w=1;w<m;w++){const b=d.intAt(w,0),$=d.intAt(w,1),M=d.intAt(w,2),S=d.intAt(w,3),T=d.intAt(w,4),k=T/g;k<R_||k>O_||T/Math.max(M*S,1)<A_||y.push({x:b,y:$,w:M,h:S})}return d.delete(),{blobs:y,mask:s,maskWidth:t.width}}function X_(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const W=et(e,r);h.gray=new s.Mat,s.cvtColor(W,h.gray,s.COLOR_RGB2GRAY),W.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const L=new s.Mat;u.detectAndCompute(h.gray,L,h.k,h.d),L.delete()}const d=n,p=new s.Mat,m=new s.KeyPointVector,g=new s.Mat;u.detectAndCompute(d,p,m,g),p.delete();const y=W=>(m.delete(),g.delete(),W);if(h.d.rows<8||g.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(h.d,g,w,2);const b=[],$=[];for(let W=0;W<w.size();W++){const L=w.get(W);if(L.size()===2){const ne=L.get(0);if(ne.distance<N_*L.get(1).distance){const ue=h.k.get(ne.queryIdx).pt,ae=m.get(ne.trainIdx).pt;b.push(ue.x,ue.y),$.push(ae.x,ae.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),S=s.matFromArray($.length/2,1,s.CV_32FC2,$),T=new s.Mat,k=s.findHomography(M,S,s.RANSAC,5,T);if(M.delete(),S.delete(),T.delete(),k.rows!==3)return k.delete(),y(null);const I=[...k.data64F],v=(W,L)=>{const ne=I[6]*W+I[7]*L+I[8];return[(I[0]*W+I[1]*L+I[2])/ne,(I[3]*W+I[4]*L+I[5])/ne]},C=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([W,L])=>v(W,L));if(C.some(W=>!Number.isFinite(W[0])||!Number.isFinite(W[1])))return k.delete(),y(null);const N=C.map((W,L)=>{const ne=C[(L+1)%4];return Math.hypot(ne[0]-W[0],ne[1]-W[1])}),j=Math.min(...N);if(j<1)return k.delete(),y(null);const F=Math.max(...N)/j;let H=0;for(let W=0;W<4;W++){const[L,ne]=C[W],[ue,ae]=C[(W+1)%4];H+=L*ae-ue*ne}const O=t,G=Math.abs(H/2)/(O.rows*O.cols);if(F<B_||F>P_||G<D_||G>U_)return k.delete(),y(null);const Z=new s.Mat;s.warpPerspective(O,Z,k,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),k.delete();const z=new s.Mat;s.cvtColor(Z,z,s.COLOR_RGB2GRAY),Z.delete();const q=Math.trunc(r.height/2),R=z.roi(new s.Rect(0,0,r.width,q)),K=h.gray.roi(new s.Rect(0,0,r.width,q)),P=new s.Mat;s.matchTemplate(R,K,P,s.TM_CCOEFF_NORMED);const U=P.data32F[0];return R.delete(),K.delete(),P.delete(),z.delete(),y(U)}function Z_(e,t,n){let r,i;if(n===ei)r=Eo,i=j_;else if(n===Eo)r=ei,i=K_;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,d=null;for(const[p,m]of[[0,l],[l,s]]){let g=0,y=0;for(let b=o;b<o+u;b++)for(let $=a+p;$<a+m;$++){const M=(b*e.width+$)*e.channels,{h:S,s:T,v:k}=St(e.data[M],e.data[M+1],e.data[M+2]);if(S>=wr&&S<=_r&&T>=30&&T<=170&&k<=170)continue;g++,(r===Eo?S>=W_&&S<=q_&&T>=V_&&k>=H_:S>=95&&S<=130&&T>=80)&&y++}if(g<20)continue;const w=y/g;w>h&&(h=w,d={x:a+p,y:o,w:m-p,h:u})}return h>=i&&d!==null?{id:r,box:d}:null}const Q_=1.7,J_=140,eb=170,tb=.2,nb=.1,pm=240,fm=80,mm=60,rb=50,gm="scientists-guild",ym="tacticians-guild",ti=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function ib(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let S=0;S<o;S++){let T=0;for(let k=0;k<a;k++)e[(i+S)*t+r+k]>0&&T++;s[S]=T/a}const u=[];for(let S=0;S<o;S++)s[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],d=h-l;if(d<5)return[];const p=a/d;if(p<k_||p>C_)return[];if(p>=Q_)return[{x:r,y:i+l,w:a,h:d}];const m=new Float32Array(o),g=.3*(8*.5-1)+.8,y=[];let w=0;for(let S=-4;S<=4;S++){const T=Math.exp(-(S*S)/(2*g*g));y.push(T),w+=T}for(let S=0;S<o;S++){let T=0;for(let k=-4;k<=4;k++){const I=Math.min(o-1,Math.max(0,S+k));T+=s[I]*y[k+4]}m[S]=T/w}const b=l+Math.trunc(d*.3),$=l+Math.trunc(d*.78);let M=l+Math.trunc(d/2);if($>b){let S=1/0;for(let T=b;T<$;T++)m[T]<S&&(S=m[T],M=T)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function ab(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const d=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[d],u[p+1]=e.data[d+1],u[p+2]=e.data[d+2]}return{width:o,height:s,channels:3,data:u}}function ob(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=St(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=J_&&o<=eb&&n++)}return t===0?0:n/t}function sb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=St(e.data[i],e.data[i+1],e.data[i+2]);!(a>=wr&&a<=_r)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function wm(e,t){const n=et(e,t),r=new e.Mat;e.resize(n,r,new e.Size(pm,fm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:pm,height:fm,channels:3,data:i}}function ub(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function _m(e,t){const n=ub(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:w,s:b,v:$}=St(n.data[y],n.data[y+1],n.data[y+2]);!(w>=wr&&w<=_r&&b>=30&&b<=170&&$<=170)&&$>=40&&(i[g]=1,a++)}const o=a<20,s=et(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,d=0,p=0,m=0;for(let g=0;g<r;g++)!o&&i[g]===0||(h+=l[g*3]*100/255,d+=l[g*3+1]-128,p+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[h/m,d/m,p/m]}function lb(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:d,v:p}=St(e.data[l],e.data[l+1],e.data[l+2]);h>=wr&&h<=_r&&d>=30&&d<=170&&p<=170||(t++,d>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function cb(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=St(e.data[i],e.data[i+1],e.data[i+2]);o>=mm&&s>=rb?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<mm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function db(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function bm(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function hb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=wm(e,a);n.set(i,bm(e,o)),ti.includes(i)&&r.set(i,_m(e,o))}return{gray:n,warmLab:r}}function pb(e,t,n){const r=wm(e,t),i=lb(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ei;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return gm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return ym;const a=cb(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=ei;else if(s==="green")u=gm;else if(s==="red")u=ym;else{const l=bm(e,r);let h="",d=-2;for(const p of ti){const m=n.gray.get(p);if(m===void 0)continue;const g=db(l,m);g>d&&(d=g,h=p)}u=h||ti[0]}if(ti.includes(u)&&n.warmLab.size>0){const l=_m(e,r);let h=u,d=1/0;for(const[p,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<d&&(d=g,h=p)}return h}return u}function fb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=Y_(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(z_),d=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const m=et(e,t);let g=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),$=w.y+Math.trunc(w.h/2),M=Math.max(G_,Math.trunc(F_*Math.max(w.w,w.h))),S=Math.max(0,b-M),T=Math.max(0,$-M),k=Math.min(t.width,b+M),I=Math.min(t.height,$+M);if(k-S<16||I-T<16)continue;const v=m.roi(new l.Rect(S,T,k-S,I-T)),C=new l.Mat;l.cvtColor(v,C,l.COLOR_RGB2GRAY);let N=null,j=-2;for(const[G,Z]of n){if(r!==void 0&&Date.now()>r)break;const z=X_(e,v,C,Z,p.get(G),h,d);z!==null&&z>j&&(j=z,N=G)}v.delete(),C.delete();const F=new Set;if(N!==null&&j>=L_){a.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),F.add(N);const G=Z_(t,w,N);G&&(a.push({id:G.id,boundingBox:{x:G.box.x,y:G.box.y,width:G.box.w,height:G.box.h},confidence:.9}),F.add(G.id))}if(i===void 0||i.size===0)continue;const H=ib(s,u,w);if(H.length!==2)continue;const O=H.map(G=>ab(t,G));if(!O.some(G=>G.width*G.height===0||sb(G)<nb))for(let G=0;G<H.length;G++){const Z=O[G];if(ob(Z)<tb)continue;g===null&&(g=hb(e,i));const z=pb(e,Z,g);if(z&&!F.has(z)){F.add(z);const q=H[G];a.push({id:z,boundingBox:{x:q.x,y:q.y,width:q.w,height:q.h},confidence:1})}}}}finally{m.delete();for(const w of p.values()){const b=w;for(const $ of["gray","k","d"])try{(y=b[$])==null||y.delete()}catch{}}try{h.delete(),d.delete()}catch{}}return a}const xm=128,mb=.56,gb=15,yb=.58,wb=70,_b=50,bb=.12,xb=.2,$b=.1,vb=.17,$m=.15;function Sb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function vm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),d=Math.min(n,o+u),p=Math.min(r,s+u),m=d-l,g=p-h,y=new Uint8Array(m*g*i);for(let w=0;w<g;w++){const b=((w+h)*n+l)*i;y.set(a.subarray(b,b+m*i),w*m*i)}return{width:m,height:g,channels:i,data:y}}function Mb(e){const t=vm(e,mb),n=gw(t),r=Jf(n,xm,xm);return yw(r)}function Tb(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function Eb(e){const t=new Map([["masonry",0],["strategy",0]]),n=vm(e,yb),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const m=p*a,{h:g,s:y,v:w}=St(o[m],o[m+1],o[m+2]);y>=wb&&w>=_b&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const h=u/s,d=l/s;return h>=bb&&t.set("masonry",$m*Math.min(1,h/xb)),d>=$b&&t.set("strategy",$m*Math.min(1,d/vb)),t}function Ib(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=Mb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=gb)a.push(bw(n,l,i));const o=new Map;for(const[l,h]of t){let d=-1/0;for(const p of a){const m=Tb(p,h);m>d&&(d=m)}o.set(l,d)}for(const[l,h]of Eb(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const nn=224,kb=512,Cb=[.485,.456,.406],Ab=[.229,.224,.225];function Rb(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function Ob(e){const t=uo(e,nn,nn),n=nn*nn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Cb[a])/Ab[a];return r}function zb(e){const t=3*nn*nn,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(Ob(Wt(e,r)),r*t);return n}function Nb(e,t=kb){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function Bb(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Wn=96,Pb=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Db=.45;function Ub(e){const t=uo(e,Wn,Wn),n=Wn*Wn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Lb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Db?Pb[t]??"":"",prob:n}}const qn=128,Fb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],Gb=.5,Wb=.9;function qb(e){const t=Fn(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Vb(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,d=(o*n+s)*r;for(let p=0;p<r;p++)a[d+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function Hb(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=Vb(n);return n}function jb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function Kb(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:Hb(e,i),o=await t(qb(a)),s=jb(o);s.prob>r&&(r=s.prob,n=s.index)}return{id:r>=Gb?Fb[n]??"":"",prob:r}}const Vn=96,Yb=[1,2,3,4,5,6,7],Xb=.8;function Zb(e){const t=lo(e,e.width*2,e.height*2),n=Fn({width:e.width*2,height:e.height*2,channels:3,data:t},Vn,Vn),r=Vn*Vn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function Qb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:Yb[t],prob:e[t]}}const rn=128,Sm=.35,Jb=["fp","laurel"],e1=.85;function t1(e){const r=(e.width<rn&&e.height<rn?lo:Fn)(e,rn,rn),i=rn*rn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function n1(e){return e[Jb.indexOf("fp")]}const an=128,r1=.15,Mm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],i1=7,a1=.9;function o1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*r1),h=Math.max(0,ct(s-l/2)),d=Math.max(0,ct(u-l/2)),p=Math.min(t,ct(s+l/2)),m=Math.min(n,ct(u+l/2));return p-h<8||m-d<8?null:{x:h,y:d,w:p-h,h:m-d}}function s1(e){const r=(e.width<an&&e.height<an?lo:Fn)(e,an,an),i=an*an,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function u1(e){let t=0;for(let i=1;i<Mm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=i1;return{className:Mm[t],probability:n,rejected:r&&n>=a1}}const ni=3,l1=2.2,c1=.3,d1=.65,h1=3,p1=1.3,f1=.77;function Tm(e,t,n){const[r,i,a,o]=e,s=[];return r<=ni&&s.push("gauche"),i<=ni&&s.push("haut"),r+a>=t-ni&&s.push("droit"),i+o>=n-ni&&s.push("bas"),s}function Em(e){const t=e[3]/Math.max(e[2],1);return t>=p1?"portrait":t<=f1?"paysage":null}function Io(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function m1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>d1)return!0;return!1}function g1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Tm(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(m1(n,r,i))return u("photo-piste");if(s.length<h1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=Io(s.map(w=>w.box[2]*w.box[3])),h=Io(s.map(w=>w.box[2])),d=Io(s.map(w=>w.box[3])),p=new Set(s.map(w=>Em(w.box)).filter(w=>w!==null)),m=[...s],g=[],y=[];for(const w of o){const b=Tm(w.box,r,i),[,,$,M]=w.box,S=l>0?$*M/l:0,T=[];(b.includes("gauche")||b.includes("droit"))&&T.push(h>0?$/h:1),(b.includes("haut")||b.includes("bas"))&&T.push(d>0?M/d:1);const k=T.length>0?Math.min(...T):1,I=Em(w.box);S>l1?g.push({banner:w,edgeReason:"bord-grosse"}):k<c1?g.push({banner:w,edgeReason:"bord-tronquee"}):I!==null&&p.size>0&&!p.has(I)?g.push({banner:w,edgeReason:"bord-orientation-adverse"}):(m.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:m,dropped:g,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const y1=1,w1=1.5;function _1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function b1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function x1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function $1(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let h=null;for(const[p,m]of _1(e)){const g=b1(u,l,p,m);g!==null&&(h===null||g[0]<h[0])&&(h=g)}if(h===null)return null;const d=x1(e);return d===null?null:{distBord:h[0]/r,decalLat:h[1]/r,perpendiculaire:d!==o>s}}catch{return null}}function v1(e,t,n,r=y1,i=w1){const a=[];for(const[o,s]of t??[]){const u=$1(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const on=64,Im=.5,S1=[.67,1.24];function M1(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,d=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=a+w,$=b-n;for(let M=0;M<u;M++){const S=i+M,T=S-t,k=(w*u+M)*3;if(T*T+$*$<=p){const I=(b*e.width+S)*h;d[k]=e.data[I],d[k+1]=e.data[I+1],d[k+2]=e.data[I+2]}else d[k]=255,d[k+1]=255,d[k+2]=255}}const m=Fn({width:u,height:l,channels:3,data:d},on,on),g=on*on,y=new Float32Array(3*g);for(let w=0;w<g;w++)for(let b=0;b<3;b++)y[b*g+w]=m[w*3+b]/255;return y}function T1(e){return e[1]}const E1=2.25,ri=3,I1=1.15,k1=.5,C1=2.5,A1=.75,R1=2.25,O1=1.3,z1=.77;function ii(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function N1(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function km(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function B1(e,t,n){if(n.length>=3&&km(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,d=l-s,p=h*h+d*d,m=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*d)/p));r=Math.min(r,Math.hypot(e-(o+m*h),t-(s+m*d)))}return r}function P1(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function D1(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let d=0,p=1;const m=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const w=y/g;if(g<0?d=Math.max(d,w):p=Math.min(p,w),d>p)return!1}return d>=p?!1:d>=.1&&p<=.95||p-d>=.15}const ko=e=>e.box[3]/Math.max(1,e.box[2]),Vt=e=>ko(e)>I1,Hn=e=>ko(e)>=O1||ko(e)<=z1;function Co(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Cm(e,t,n,r,i){const a=new Set(t),o=[...e.map((z,q)=>({box:[z[0],z[1],z[2],z[3]],kind:a.has(q)?"card":"tucked",src:["banner",q]})),...n.map((z,q)=>({box:[z[0],z[1],z[2],z[3]],kind:"wonder",src:["wonder",q]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player"};const l=o.map(z=>[z.box[0]+z.box[2]/2,z.box[1]+z.box[3]/2]);let h=o.filter(z=>z.kind!=="wonder").map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,q)=>z-q);h.length===0&&(h=o.map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,q)=>z-q));const d=h[Math.floor(h.length/2)],p=(E1*d)**2,m=o.map((z,q)=>q),g=z=>{let q=z;for(;m[q]!==q;)m[q]=m[m[q]],q=m[q];return q},y=o.map((z,q)=>z.kind==="card"?q:-1).filter(z=>z>=0),w=o.map((z,q)=>z.kind!=="card"?q:-1).filter(z=>z>=0);for(let z=0;z<y.length;z+=1)for(let q=z+1;q<y.length;q+=1){const R=y[z],K=y[q],P=o[R],U=o[K];if(Hn(P)&&Hn(U)&&Vt(P)!==Vt(U))continue;const W=l[R][0]-l[K][0],L=l[R][1]-l[K][1],ne=W*W+L*L;let ue=ne<=p;!ue&&Hn(P)&&Hn(U)&&Vt(P)===Vt(U)&&ne<=(4*d)**2&&(ue=ii(Co(P),Co(U))<=.5*d),ue&&(m[g(R)]=g(K))}for(let z=0;z<w.length;z+=1)for(let q=z+1;q<w.length;q+=1){const R=w[z],K=w[q];ii(o[R].box,o[K].box)<=A1*d&&(m[g(R)]=g(K))}const b=new Map;for(const z of w){const q=g(z);b.set(q,[...b.get(q)??[],z])}const $=new Map;for(const z of y){const q=g(z);$.set(q,[...$.get(q)??[],z])}for(const z of b.values()){const q=z.filter(U=>o[U].kind==="wonder"&&Hn(o[U])).map(U=>Vt(o[U])),R=q.length>0?q.filter(Boolean).length*2>q.length:null,K=[];for(const[U,W]of $){let L=Number.POSITIVE_INFINITY;for(const ae of z)for(const _e of W)L=Math.min(L,ii(o[ae].box,o[_e].box));if(L>R1*d)continue;const ue=W.filter(ae=>Vt(o[ae])).length/W.length>=.5;R!==null&&ue!==R||K.push([U,L,ue])}if(K.length===0)continue;const P=new Set(K.map(U=>U[2]));if(K.length>=2&&P.size===1&&R!==null){const U=K[0][0];for(const[W]of K.slice(1))m[g(W)]=g(U);m[g(z[0])]=g(U)}else{const U=K.reduce((W,L)=>L[1]<W[1]?L:W);m[g(z[0])]=g(U[0])}}let M=new Map;for(let z=0;z<o.length;z+=1){const q=g(z);M.set(q,[...M.get(q)??[],z])}const S=o.map((z,q)=>z.kind==="wonder"?q:-1).filter(z=>z>=0);if(S.length>0){const z=(R,K)=>{const[P,U,W,L]=Co(o[R]),[ne,ue,ae,_e]=o[K].box,Re=Math.max(0,Math.min(P+W,ne+ae)-Math.max(P,ne)),Ve=Math.max(0,Math.min(U+L,ue+_e)-Math.max(U,ue));return Re*Ve>=.9*o[R].box[2]*o[R].box[3]},q=new Map;for(let R=0;R<o.length;R+=1)if(!(o[R].kind!=="card"||!Hn(o[R])))for(const K of S){const P=ii(o[R].box,o[K].box);if(P<=.8*d&&Vt(o[R])!==Vt(o[K])&&z(R,K)){const U=q.get(K);(!U||P<U[1])&&q.set(K,[R,P])}}for(const[R,[K]]of q){const P=g(R);for(const[U,W]of M){const L=W.indexOf(K);if(L>=0&&U!==P){W.splice(L,1),M.set(P,[...M.get(P)??[],K]),o[K].kind="tucked";break}}}M=new Map([...M].filter(([,R])=>R.length>0))}const T=z=>z.filter(q=>o[q].kind==="card").length,k=z=>{const q=z.filter(R=>o[R].kind==="card"||o[R].kind==="wonder");return q.length===0?null:q.filter(R=>Vt(o[R])).length/q.length},I=z=>[z.reduce((q,R)=>q+l[R][0],0)/z.length,z.reduce((q,R)=>q+l[R][1],0)/z.length],v=[i[0]/2,i[1]/2],C=[...M.values()].sort((z,q)=>{const R=T(z),K=T(q);if(R!==K)return K-R;const P=Math.hypot(I(z)[0]-v[0],I(z)[1]-v[1]),U=Math.hypot(I(q)[0]-v[0],I(q)[1]-v[1]);return P-U}),N=I(C[0]),j=k(C[0]),F=C.map((z,q)=>{if(q===0||T(z)<ri)return"player";const R=k(z),K=R!==null&&j!==null&&Math.abs(R-j)>=k1,P=I(z),U=r.some(W=>D1(N,P,W));return K||U?"opponent":"player"});if(!F.includes("opponent")){const z=R=>R.reduce((K,P)=>K+(o[P].kind==="wonder"?1:0),0);let q=F.map((R,K)=>K).filter(R=>R>0&&(T(C[R])>=ri||z(C[R])>=2));if(q.reduce((R,K)=>R+z(C[K]),0)<1&&(q=[]),q.length>0&&(T(C[0])<2*ri||q.reduce((R,K)=>R+T(C[K]),0)<2*ri)&&(q=[]),q.length>0){const R=new Map(q.map(U=>[U,I(C[U])])),K=(U,W)=>(U[0]-W[0])**2+(U[1]-W[1])**2;if(q.every((U,W)=>q.slice(W+1).every(L=>K(R.get(U),R.get(L))<Math.min(K(R.get(U),N),K(R.get(L),N)))))for(const U of q)F[U]="opponent"}}const H=[],O=[];let G=!1;C.forEach((z,q)=>{const R=F[q];R==="opponent"&&(G=!0);const K=[],P=[];for(const U of z){const[W,L,ne,ue]=o[U].box;K.push([W,L],[W+ne,L],[W,L+ue],[W+ne,L+ue]),P.push(o[U].box);const[ae,_e]=o[U].src;ae==="banner"?s[_e]=R:u[_e]=R}H.push([R,N1(K)]),O.push([R,P])});const Z=(z,q)=>{if(H.length===0)return"player";const R=d>0?C1*d:Number.POSITIVE_INFINITY,K=L=>Math.min(...O[L][1].map(ne=>P1(z,q,ne))),P=H.map(([,L],ne)=>L.length>=3&&km(z,q,L)?ne:-1).filter(L=>L>=0);if(P.length>0){const L=P.reduce((ne,ue)=>K(ue)<K(ne)?ue:ne);return H[L][0]}let U=-1,W=Number.POSITIVE_INFINITY;return H.forEach(([,L],ne)=>{const ue=B1(z,q,L);ue<W&&(U=ne,W=ue)}),U>=0&&W<=R?H[U][0]:"none"};return{bannerOwner:s,wonderOwner:u,opponentFound:G,hulls:H,hullBoxCounts:O.map(([,z])=>z.length),pointOwner:Z}}const U1=1280,L1=80,F1=3,G1=3,W1=.3,q1=2.4,V1=1,H1=5.2,j1=5;function Ao(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function K1(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=W1&&r/n<=q1&&i/n>=V1&&i/n<=H1&&i/r<=j1}function Y1(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*U1/r<L1}function X1(e,t,n,r){const i=Ao(n);if(!Y1(e,t,i))return[];const a=r.filter(u=>u.n>=G1&&u.poly.length>0).slice().sort((u,l)=>l.n-u.n).slice(0,2),o=Math.round(i*F1),s=[];for(const u of a){const l=u.poly.map(y=>y[0]),h=u.poly.map(y=>y[1]),d=Math.max(0,Math.trunc(Math.min(...l))-o),p=Math.max(0,Math.trunc(Math.min(...h))-o),m=Math.min(e,Math.trunc(Math.max(...l))+o),g=Math.min(t,Math.trunc(Math.max(...h))+o);m>d&&g>p&&s.push([d,p,m,g])}return s}function Z1(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return K1(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}const Q1=1.1,J1=3.2,e2=20,t2=.5,n2=1280,r2=.18,i2=28,a2=.3;function o2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,d)=>d)];const l=(s.reduce((h,d)=>h+d,0)/s.length+u.reduce((h,d)=>h+d,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function s2(e,t,n=Q1){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of o2(s)){if(l.length===0)continue;const h=l.map(C=>e[C]),d=h.map(C=>Math.min(C[2],C[3])).sort((C,N)=>C-N),p=d[Math.trunc(d.length/2)],m=J1*p,g=Math.max(0,Math.min(...h.map(C=>C[0]))-m),y=Math.max(0,Math.min(...h.map(C=>C[1]))-m),w=Math.min(r,Math.max(...h.map(C=>C[0]+C[2]))+m),b=Math.min(i,Math.max(...h.map(C=>C[1]+C[3]))+m),$=Math.max(w-g,b-y);if($<=0)continue;const M=t2*p*n2/$,S=M>0?Math.max(1,Math.ceil(e2/M)):1;if(S===1){u.push([Math.trunc(g),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const T=w-g>=b-y,I=(T?w-g:b-y)/S,v=I*(1+r2);for(let C=0;C<S;C++){let N=(T?g:y)+C*I-(v-I)/2;N=Math.max(T?g:y,N);const j=Math.min(T?w:b,N+v);u.push(T?[Math.trunc(N),Math.trunc(y),Math.trunc(j),Math.trunc(b)]:[Math.trunc(g),Math.trunc(N),Math.trunc(w),Math.trunc(j)])}}return u.filter(([l,h,d,p])=>Math.max(r,i)/Math.max(1,Math.max(d-l,p-h))>=n)}function u2(e,t,n,r=i2){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const d=(s+l)/2+i,p=(u+h)/2+a;o.some(([g,y,w,b])=>{const $=d-(g+w)/2,M=p-(y+b)/2;return Math.hypot($,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function l2(e,t,n,r=a2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function c2(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function d2(e,t,n,r){return n.length===0?!1:c2(e,t,n)&&!l2(e,t,r)}const Am=4,Rm=8,ai=5,Cn="base-game rule";function Ot(e,t){return{code:e,message:t,severity:"warning"}}function Ro(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function h2(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Am&&i.push(Ot("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Am} (${Cn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=Ro(n);return a.length>0&&i.push(Ot("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${Cn}), so one of the two readings is wrong.`)),i}function p2(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Rm&&t.push(Ot("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Rm} are in play (${Cn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(d=>l.has(d)).sort();h.length>0&&t.push(Ot("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function f2(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>ai&&n.push(Ot("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ai} are in play (${Cn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Ro(r);if(i.length>0&&n.push(Ot("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Cn}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==ai&&n.push(Ot("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${ai} are in play (${Cn}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Ot("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function m2(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Ot("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=Ro(e.filter(o=>!!o));return a.length>0&&r.push(Ot("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${Cn}).`)),r}const g2=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],y2=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],w2=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],_2=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],b2=[...y2,...w2,..._2,...g2];Object.fromEntries(b2.map(e=>[e.id,e]));const x2=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Be="/7wd-scorer/models/";let Om=!1;const oi=new Map;function zm(){var e;Om||(Ue.wasm.wasmPaths="/7wd-scorer/ort/",Ue.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Om=!0)}const Oo=new Set;function $2(e){zm();let t=oi.get(e);return t===void 0&&(t=tt.create(`${Be}${dt[e].onnx}`,{executionProviders:Oo.has(e)?["wasm"]:["webgpu","wasm"]}),oi.set(e,t),t.catch(()=>oi.delete(e))),t}let zo=null,No=null;const v2=.75,S2=4,M2=.65,T2=3e4;let Bo=null;function Po(){return Bo===null&&(Bo=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Bo}const Nm=new Map;function Do(e){let t=Nm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Be}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Nm.set(e,t)),t}function Uo(e){return Do(`wonder-refs/${e}.jpg`)}const Bm=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function E2(){const e=new Map;for(const t of Bm){const n=await Do(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function I2(){const e=new Map;for(const t of Bm){const n=await Do(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const k2=.6,C2=12,A2=45e3;let Lo=null;function Pm(){return Lo===null&&(zm(),Lo=(async()=>{try{const[e,t,n,r]=await Promise.all([tt.create(`${Be}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),tt.create(`${Be}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Be}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Be}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Jw(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Lo}async function R2(e,t){const n=Math.max(Qw/qt,t.width/t.height),{tensor:r,width:i}=t_(t,n),a={[e.rec.inputNames[0]]:new Ge("float32",r,[1,3,qt,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,d=new Array(u),p=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const w=m*l;for(let b=0;b<l;b++){const $=h[w+b];$>y&&(y=$,g=b)}d[m]=g,p[m]=y}return e_(d,p,e.charset)}async function O2(e,t){const n=await Pm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+A2;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=Wt(e,o),u=Gw(s),l={[n.det.inputNames[0]]:new Ge("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],d=Kw(h.data,u,s.width,s.height).slice(0,C2);console.debug(`[wonders-ocr] rot ${o*90}: ${d.length} det boxes`,d.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of d){if(Date.now()>i){a=!0;break e}const m=Yw(s,p.quad);if(m.width<m.height*1.5)continue;const[g,y]=await R2(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<k2||g.trim().length<S2)continue;const w=u_(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<v2||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Fo(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Fo(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(d,p)=>i===1?[p,r-1-d]:i===2?[n-1-d,r-1-p]:[n-1-p,d],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(d=>d[0]),u=o.map(d=>d[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function z2(){return No===null&&(No=fetch(`${Be}laurel_gallery.json`).then(async e=>e.ok?Cw(await e.json()):[]).catch(()=>[])),No}function N2(e,t,n,r){return sn(e,t-r,n-r,2*r,2*r)}function sn(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),d=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=((p+o)*e.width+(m+a))*e.channels,y=(p*l+m)*3;d[y]=e.data[g],d[y+1]=e.data[g+1],d[y+2]=e.data[g+2]}return{width:l,height:h,channels:3,data:d}}function B2(){return zo===null&&(zo=fetch(`${Be}token_templates.json`).then(async e=>e.ok?Sb(await e.json()):new Map).catch(()=>new Map)),zo}let Go=null;function P2(){return Go===null&&(Go=(async()=>{try{const e=await fetch(`${Be}token_embed_index.json`);if(!e.ok)return null;const t=Rb(await e.json());return{session:await tt.create(`${Be}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),Go}const D2=.92;let Wo=null;function U2(){return Wo===null&&(Wo=(async()=>{try{return(await fetch(`${Be}guild_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Wo}let qo=null;function L2(){return qo===null&&(qo=(async()=>{try{return(await fetch(`${Be}laurel_digit.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),qo}let Vo=null,Ho=null;function F2(){return Ho===null&&(Ho=(async()=>{try{return(await fetch(`${Be}banner_class.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}banner_class.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ho}async function G2(e,t){if(t.length===0)return t;const n=await F2();if(n===null)return t;const r=[];for(const i of t)try{const a=o1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=sn(e,a.x,a.y,a.w,a.h),s=s1(o),u=await n.run({[n.inputNames[0]]:new Ge("float32",s,[1,3,an,an])});u1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function W2(){return Vo===null&&(Vo=(async()=>{try{return(await fetch(`${Be}laurel_filter.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Vo}async function q2(e,t,n){const[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(Sm*s),h=Math.trunc(Sm*u),d=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(e.width,a+l),g=Math.min(e.height,o+h),y=sn(e,d,p,m-d,g-p);if(y.width<=0||y.height<=0)return null;try{const w=t1(y),b=await n.run({[n.inputNames[0]]:new Ge("float32",w,[1,3,rn,rn])});return n1(b[n.outputNames[0]].data)}catch{return null}}let jo=null;function V2(){return jo===null&&(jo=(async()=>{try{return(await fetch(`${Be}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),jo}async function H2(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=M1(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const h=new Float32Array(t.length*3*on*on);l.forEach((m,g)=>h.set(m,g*m.length));const p=(await n.run({[n.inputNames[0]]:new Ge("float32",h,[t.length,3,on,on])}))[n.outputNames[0]].data;return t.map((m,g)=>T1(p.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let Ko=null;function Dm(){return Ko===null&&(Ko=(async()=>{try{return(await fetch(`${Be}tuck_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ko}const Um=.2,j2=.3,Lm=.25,Fm=.1;let Yo=null;function Gm(){return Yo===null&&(Yo=(async()=>{try{return(await fetch(`${Be}track_band.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Yo}async function Wm(e,t,n){try{const r=co(t,1280,Dy(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new Ge("float32",r.tensor,[1,3,1280,1280])});return gr(i[e.outputNames[0]].data,r.params,Fm)}catch{return[]}}let Xo=null;function K2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Lm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=Lm)&&r>1==h>1)return!0}return!1}const Y2=.4;function X2(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function Z2(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||X2(a,u)>=Y2)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function Q2(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${Be}tuck_box.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xo}async function J2(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*Um),u=Math.round(o*Um),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),d=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),m=d-l,g=p-h;if(m<=0||g<=0)return null;const y=e.channels,w=new Uint8ClampedArray(m*g*y);for(let M=0;M<g;M++){const S=((h+M)*e.width+l)*y;w.set(e.data.subarray(S,S+m*y),M*m*y)}const b={width:m,height:g,channels:y,data:w};let $=null;for(let M=0;M<4;M++){const S=M===0?b:Wt(b,M),T=S.width,k=T-Math.floor(j2*T),I=T-k;if(I<=0)continue;const v=new Uint8ClampedArray(I*S.height*S.channels);for(let H=0;H<S.height;H++){const O=(H*T+k)*S.channels;v.set(S.data.subarray(O,O+I*S.channels),H*I*S.channels)}const C={width:I,height:S.height,channels:S.channels,data:v},N=To(C),F=(await n.run({[n.inputNames[0]]:new Ge("float32",N,[1,3,Rt,Rt])}))[n.outputNames[0]].data[1]??0;$=$===null?F:Math.max($,F)}return $}let Zo=null;function ex(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${Be}wonder_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Zo}async function tx(e,t,n,r,i,a){var p;const o=(m,g,y,w)=>{const b=Math.max(0,Math.round(m)),$=Math.max(0,Math.round(g)),M=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+w)),T=M-b,k=S-$;if(T<=0||k<=0)return null;const I=t.channels,v=new Uint8ClampedArray(T*k*I);for(let C=0;C<k;C++){const N=(($+C)*t.width+b)*I;v.set(t.data.subarray(N,N+T*I),C*T*I)}return{width:T,height:k,channels:I,data:v}},s=async m=>(await r.run({[r.inputNames[0]]:new Ge("float32",m,[1,3,qn,qn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,w,b]=m;if(w<=0||b<=0)continue;const $=o(g,y,w,b);if($===null)continue;const{id:M,prob:S}=await Kb($,s);if(M===""||S<Wb)continue;const T=u.get(M);(T===void 0||S>T.prob)&&u.set(M,{prob:S,box:m})}const l=[],h=await Dm(),d=await Q2();for(const[m,{prob:g,box:y}]of u){const[w,b,$,M]=y;let S={x:Math.round(w),y:Math.round(b),width:Math.round($),height:Math.round(M)},T=null,k=[],I=null;if(Date.now()<i)try{const G=await Uo(m);if(G!==null){const Z=cm(e,t,G,y);if(Z!==null){T=Z.footprint,k=Z.overflow;const z=T.map(P=>P[0]),q=T.map(P=>P[1]),R=Math.max(0,Math.round(Math.min(...z))),K=Math.max(0,Math.round(Math.min(...q)));if(S={x:R,y:K,width:Math.min(t.width,Math.round(Math.max(...z)))-R,height:Math.min(t.height,Math.round(Math.max(...q)))-K},h!==null)try{const P=lm(e,t,G,T);if(P!==null){const U=To(P),W=await h.run({[h.inputNames[0]]:new Ge("float32",U,[1,3,Rt,Rt])});I=hm(W[h.outputNames[0]].data).prob}}catch{}}}}catch(G){console.warn(`[wonders-cls] ${m} registration failed:`,G)}const v=T!==null?So(T,k):null,C=[];if(I!==null&&C.push(I>=Mo?1:0),d!==null)try{const G=await J2(t,y,d);G!==null&&C.push(G>=Mo?1:0)}catch{}const N=v??S,j=a.some(G=>{const Z=G.box[0]+G.box[2]/2,z=G.box[1]+G.box[3]/2;return Z>=N.x&&Z<=N.x+N.width&&z>=N.y&&z<=N.y+N.height});C.push(j?1:0);let F=C.length>0&&C.reduce((G,Z)=>G+Z,0)*2>C.length;F&&K2(N,S,a)&&(F=!1);const H={id:m,name:((p=x2[m])==null?void 0:p.name)??m,builtWithCardUnderneath:F,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},O=v??S;l.push({obj:H,edgeScores:null,zone:{x0:O.x,y0:O.y,x1:O.x+O.width,y1:O.y+O.height},quad:T,region:v})}return l}async function nx(e,t){const n=await P2();if(n!==null)try{const r=zb(e),i=new Ge("float32",r,[4,3,nn,nn]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=Bb(n.index,Nb(o));return u<D2?["",-1]:[s,u]}catch{}return Ib(e,t)}async function Qo(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Mt(e,t){const n=dt[e],{tensor:r,params:i}=co(t,n.input),a=async()=>{const o=await $2(e),s={[o.inputNames[0]]:new Ge("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(Oo.has(e))throw o;return Oo.add(e),oi.delete(e),await a()}}const rx=6,ix=4,ax=5,ox=2;async function sx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Qo(e),r=await Mt("banner",n),i=Zr(r.rows,r.params,dt.banner.conf);if(t.banners=i.length,i.length>=rx)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Mt("laurel",n),o=gr(a.rows,a.params,dt.laurel.conf);if(t.laurels=o.length,o.length>=ix)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await Mt("coin",n),u=Vf(s.rows,s.params,dt.coin.conf);return t.coins=u.length,u.length>=ax?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=ox?{...t,kind:"board",confidence:.4}:t}function ux(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Jo(e,t,n,r,i=()=>{},a="player"){const o={},s=[],u=[],l=[],h=[],d=[],p=[];let m=0,g=0,y=0,w=0,b=0;for(const I of e){b+=1;const v=`${t} photo ${b}/${e.length}`;r(`${v}: reading pixels…`,.01);const C=await Qo(I);r(`${v}: card banners…`,.04);const N=await Mt("banner",C);let j=Zr(N.rows,N.params,dt.banner.conf);j=await G2(C,j),r(`${v}: progress tokens…`,.08);let F=[];const H=await Gm();H!==null&&(F=await Wm(H,C,j)),F.length>0&&j.length>0&&(j=j.filter(D=>{const Q=D.box[0]+D.box[2]/2,J=D.box[1]+D.box[3]/2;return!F.some(([ie,se,he,Te])=>Math.min(ie,he)<=Q&&Q<=Math.max(ie,he)&&Math.min(se,Te)<=J&&J<=Math.max(se,Te))}));const O=await Mt("token",C),G=await B2(),Z=l.length,z=[];for(const D of Vy(O.rows,O.params,dt.token.conf)){if(z.push({cx:D.cx,cy:D.cy,r:D.r}),F.some(([ie,se,he,Te])=>D.cx>=ie&&D.cx<=he&&D.cy>=se&&D.cy<=Te))continue;const[Q,J]=await nx(Qf(C,D),G);Q===""&&J<0?z.pop():Q===""?g+=1:l.some(ie=>ie.id===Q)||l.push({id:Q,center:[D.cx,D.cy],radius:D.r,confidence:Math.round(J*1e4)/1e4})}r(`${v}: coins…`,.14);const q=await Mt("coin",C),R=Vf(q.rows,q.params,dt.coin.conf).filter(D=>!z.some(Q=>(D.cx-Q.cx)**2+(D.cy-Q.cy)**2<=D.r*D.r)),K=await V2(),P=K!==null?await H2(C,R,K):null,U=(P!==null?R.filter((D,Q)=>P[Q]>=Im).map(D=>D.r):[]).sort((D,Q)=>D-Q),W=U.length>0?U.length%2===1?U[(U.length-1)/2]:(U[U.length/2-1]+U[U.length/2])/2:null,[L,ne]=S1,ue=R.map((D,Q)=>{const J=P!==null?P[Q]:null;return J===null||J>=Im?"keep":W!==null&&W>0&&D.r/W>=L&&D.r/W<=ne?"suspect":"drop"}),ae=R.filter((D,Q)=>ue[Q]==="keep"),_e=mw(C,ae),Re=[];let Ve=0;if(R.forEach((D,Q)=>{if(ue[Q]!=="drop"){if(ue[Q]==="suspect"){const J=P[Q];Re.push({denomination:null,center:[D.cx,D.cy],radius:D.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${J.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}Re.push({denomination:_e[Ve++],center:[D.cx,D.cy],radius:D.r,denomSource:"colour"})}}),R.length>0&&Re.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${R.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),Re.length>=2){const D=Re.map(J=>J.radius).sort((J,ie)=>J-ie),Q=D.length%2===1?D[(D.length-1)/2]:(D[D.length/2-1]+D[D.length/2])/2;if(Q>0)for(const J of Re)J.radius/Q>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const je=h.length,Ke=[],Oe=[],me=Date.now()+T2;let We=null,un=null;const ln=()=>(un===null&&(un=(async()=>{try{const{rows:D,params:Q}=await Mt("wonder",C);return Lf(D,Q,dt.wonder.conf,Number.POSITIVE_INFINITY).map(J=>J.box)}catch{return[]}})()),un),it=[];let zt=!1;const br=await ex();if(br!==null){const D=await ln();if(D.length>0&&(We=await Po(),We!==null)){r(`${v}: identifying wonders…`,.35);const Q=await tx(We,C,D,br,me,j);for(const J of Q)h.some(ie=>ie.id===J.obj.id)||(h.push(J.obj),it.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),Ke.push(J.zone),Oe.push({quad:J.quad,region:J.region}));zt=Q.length>0}}zt||r(`${v}: wonder names…`,.2);const ht=zt?{wonders:[],aborted:!1}:await O2(C,(D,Q)=>r(`${v}: ${D}`,.2+.35*(Q??0)));We===null&&(We=ht.wonders.length>0?await Po():null);for(const D of ht.wonders){let Q=null;if(We!==null&&Date.now()<me){r(`${v}: registering ${D.name}…`,.6);try{const J=await Uo(D.id);if(J!==null){let ie=b_(We,C,J,[[D.nameBox.x,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y+D.nameBox.height],[D.nameBox.x,D.nameBox.y+D.nameBox.height]]);if(ie===null){const se=await ln(),he=M_(se,D.nameBox.x+D.nameBox.width/2,D.nameBox.y+D.nameBox.height/2);he!==null&&(ie=cm(We,C,J,he))}if(ie!==null){let se=ie.built,he=!1;const Te=await Dm();if(Te!==null)try{const ye=lm(We,C,J,ie.footprint);if(ye!==null){const Ce=To(ye),qe=await Te.run({[Te.inputNames[0]]:new Ge("float32",Ce,[1,3,Rt,Rt])});se=hm(qe[Te.outputNames[0]].data).built,he=!0}}catch{}const Ee=ie.footprint.map(ye=>ye[0]),re=ie.footprint.map(ye=>ye[1]),pe=Math.max(0,Math.round(Math.min(...Ee))),be=Math.max(0,Math.round(Math.min(...re)));Q={built:se,boundingBox:{x:pe,y:be,width:Math.min(C.width,Math.round(Math.max(...Ee)))-pe,height:Math.min(C.height,Math.round(Math.max(...re)))-be},tuckRegion:So(ie.footprint,ie.overflow),footprint:ie.footprint,edgeScores:ie.edgeScores,builtByTuck:he}}}}catch(J){console.warn(`[wonders-reg] ${D.id} failed:`,J)}}if(Q!==null){const J=Q.tuckRegion??Q.boundingBox;Ke.push({x0:J.x,y0:J.y,x1:J.x+J.width,y1:J.y+J.height}),Oe.push({quad:Q.footprint,region:Q.tuckRegion})}else{const J=Math.max(8,D.nameBox.height),ie=Math.round(D.nameBox.width*.15);Ke.push({x0:D.nameBox.x-ie,y0:D.nameBox.y-J*2.5,x1:D.nameBox.x+D.nameBox.width+ie,y1:D.nameBox.y+D.nameBox.height+J*2.5}),Oe.push({quad:null,region:null})}if(!h.some(J=>J.id===D.id)){const J=(Q==null?void 0:Q.builtByTuck)===!0,ie=J?Q.built:!1,se=!J&&(Q==null?void 0:Q.built)===!0,he={id:D.id,name:D.name,builtWithCardUnderneath:ie,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:D.confidence,...se?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};h.push(he),it.push({obj:he,edgeScores:Q&&!Q.builtByTuck?Q.edgeScores:null,zone:Ke[Ke.length-1]})}}if(!zt){const D=I_(it.map(Q=>({built:Q.obj.builtWithCardUnderneath,edgeScores:Q.edgeScores,zone:Q.zone})),j.map(Q=>[Q.box[0]+Q.box[2]/2,Q.box[1]+Q.box[3]/2]));for(const Q of D){const J=it[Q];J.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(j.length>0){const Q=new Set(D);for(let J=0;J<it.length;J++){const ie=it[J];if(Q.has(J)||!ie.obj.builtWithCardUnderneath)continue;const se=ie.obj.tuckRegion;if(se===void 0)continue;if(!j.some(Te=>{const Ee=Te.box[0]+Te.box[2]/2,re=Te.box[1]+Te.box[3]/2;return Ee>=se.x&&Ee<=se.x+se.width&&re>=se.y&&re<=se.y+se.height})){const Te=ie.obj;Te.builtWithCardUnderneath=!1,Te.suspect=!0,Te.suspectReason="built-unconfirmed"}}}}if(ht.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${v}: the wonder-name read ran out of its time budget on this device — ${ht.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),We!==null&&ht.wonders.length>0&&Date.now()<me)try{const D=await Pm(),Q=(D==null?void 0:D.catalog.filter(ie=>ie.kind==="wonder").map(ie=>ie.id))??[],J=new Map;for(const ie of Q)if(!h.some(se=>se.id===ie)){const se=await Uo(ie);se!==null&&J.set(ie,se)}if(J.size>0){r(`${v}: searching occluded wonders…`,.7);const ie=__(We,C,J,me);for(const se of ie){const he=se.footprint.map(qe=>qe[0]),Te=se.footprint.map(qe=>qe[1]),Ee=Math.max(0,Math.round(Math.min(...he))),re=Math.max(0,Math.round(Math.min(...Te))),pe={x:Ee,y:re,width:Math.min(C.width,Math.round(Math.max(...he)))-Ee,height:Math.min(C.height,Math.round(Math.max(...Te)))-re};if(h.some(qe=>{const Pe=qe.boundingBox,dn=Math.max(0,Math.min(Pe.x+Pe.width,pe.x+pe.width)-Math.max(Pe.x,pe.x)),Nt=Math.max(0,Math.min(Pe.y+Pe.height,pe.y+pe.height)-Math.max(Pe.y,pe.y)),Ne=dn*Nt,Ye=Pe.width*Pe.height+pe.width*pe.height-Ne;return Ye>0&&Ne/Ye>w_}))continue;const ye=D==null?void 0:D.catalog.find(qe=>qe.id===se.id);h.push({id:se.id,name:(ye==null?void 0:ye.nameFr)??(ye==null?void 0:ye.name)??se.id,builtWithCardUnderneath:se.built,boundingBox:pe,...se.tuckRegion?{tuckRegion:se.tuckRegion}:{},confidence:Math.round(se.confidence*1e4)/1e4});const Ce=se.tuckRegion??pe;Ke.push({x0:Ce.x,y0:Ce.y,x1:Ce.x+Ce.width,y1:Ce.y+Ce.height}),Oe.push({quad:se.footprint.map(([qe,Pe])=>[qe,Pe]),region:se.tuckRegion??null})}}}catch(D){console.warn("[wonders-reg] discovery failed:",D)}const Ht=a==="opponent";let jn=(D,Q)=>!Ht,xr=(D,Q)=>!Ht;try{const D=h.slice(je),Q=[];j.forEach((re,pe)=>{const be=re.box[0]+re.box[2]/2,ye=re.box[1]+re.box[3]/2;Ke.some(Ce=>be>=Ce.x0&&be<=Ce.x1&&ye>=Ce.y0&&ye<=Ce.y1)||Q.push(pe)});const J=[],ie=[];D.forEach((re,pe)=>{const be=re.boundingBox;be&&be.width>0&&(J.push(pe),ie.push([be.x,be.y,be.width,be.height]))});const se=re=>{const pe=[];return re.forEach((be,ye)=>{const Ce=be.box[0]+be.box[2]/2,qe=be.box[1]+be.box[3]/2;Ke.some(Pe=>Ce>=Pe.x0&&Ce<=Pe.x1&&qe>=Pe.y0&&qe<=Pe.y1)||pe.push(ye)}),pe};let he=Cm(j.map(re=>re.box),Q,ie,F,[C.width,C.height]);try{const re=X1(C.width,C.height,j.map(pe=>pe.box),he.hulls.map(([pe,be],ye)=>({owner:pe,poly:be,n:he.hullBoxCounts[ye]??0})));if(re.length>0){const pe=Ao(j.map(ye=>ye.box)),be=[];for(const ye of re){const[Ce,qe,Pe,dn]=ye,Nt=sn(C,Ce,qe,Pe-Ce,dn-qe);if(Nt.width<=0||Nt.height<=0)continue;const Ne=await Mt("banner",Nt);for(const Ye of Zr(Ne.rows,Ne.params,dt.banner.conf)){const at=Z1(Ye.box,ye,pe);at&&be.push({...Ye,box:at})}}if(be.length>0){const ye=Kf([...j,...be]);ye.length>j.length&&(j=ye,he=Cm(j.map(Ce=>Ce.box),se(j),ie,F,[C.width,C.height]))}}}catch(re){console.warn("[#129 city-rescan] skipped:",re)}jn=(re,pe)=>he.pointOwner(re,pe)==="opponent"===Ht;const Te=Ht?"opponent":"player";xr=(re,pe)=>he.pointOwner(re,pe)===Te,j=j.filter((re,pe)=>he.bannerOwner[pe]==="opponent"===Ht);const Ee=D.map(()=>"player");J.forEach((re,pe)=>{Ee[re]=he.wonderOwner[pe]});for(let re=D.length-1;re>=0;re-=1)Ee[re]==="opponent"!==Ht&&h.splice(je+re,1);Ke.length=0;for(const re of h.slice(je)){const pe=re.tuckRegion??re.boundingBox;pe&&Ke.push({x0:pe.x,y0:pe.y,x1:pe.x+pe.width,y1:pe.y+pe.height})}for(let re=l.length-1;re>=Z;re-=1){const[pe,be]=l[re].center;jn(pe,be)||l.splice(re,1)}}catch(D){console.warn("[city-split] failed (side unfiltered):",D)}for(const D of Re)xr(D.center[0],D.center[1])&&(m+=D.denomination??0,u.push(D));const $r=new Set,Et=[],ns=Ao(j.map(D=>D.box));Oe.forEach((D,Q)=>{if(D.quad===null||D.region===null){const he=Ke[Q];he&&Et.push(he);return}const J=D.region,ie=[];j.forEach((he,Te)=>{const Ee=he.box[0]+he.box[2]/2,re=he.box[1]+he.box[3]/2;Ee>=J.x&&Ee<=J.x+J.width&&re>=J.y&&re<=J.y+J.height&&ie.push([Te,he.box])});const se=v1(D.quad,ie,ns);se!==null&&$r.add(se)});let pt=[],cn=0;j.forEach((D,Q)=>{if($r.has(Q)){w+=1,cn+=1;return}const J=D.box[0]+D.box[2]/2,ie=D.box[1]+D.box[3]/2;if(Et.some(se=>J>=se.x0&&J<=se.x1&&ie>=se.y0&&ie<=se.y1)){w+=1,cn+=1;return}pt.push(D)});const si=g1(pt,cn,F,C.width,C.height);pt=si.kept;for(const D of pt)o[D.family]=(o[D.family]??0)+1,y+=1;const It=Jy(pt),Kn=new Set(It.map(D=>D.box.join(",")));for(const D of tw(pt))Kn.has(D.box.join(","))||(It.push(D),Kn.add(D.box.join(",")));for(const D of si.suspects)Kn.has(D.box.join(","))||(It.push(D),Kn.add(D.box.join(",")));for(const D of It)p.push(D);if(pt.some(D=>D.family==="guild")){const D=await U2();if(D!==null){r(`${v}: identifying guilds…`,.75);for(const Q of pt)if(Q.family==="guild")try{const[J,ie,se,he]=Q.box,Te=sn(C,J,ie,se,he),Ee=Ub(Te),re={[D.inputNames[0]]:new Ge("float32",Ee,[1,3,Wn,Wn])},be=(await D.run(re))[D.outputNames[0]].data,{id:ye,prob:Ce}=Lb(be);ye!==""&&!d.some(qe=>qe.id===ye)&&d.push({id:ye,boundingBox:{x:J,y:ie,width:se,height:he},confidence:Math.round(Ce*1e4)/1e4})}catch(J){console.warn("[guild-cls] failed:",J)}}else if(Date.now()<me)try{const Q=We??await Po();if(Q!==null){const J=await E2();if(J.size>0){r(`${v}: identifying guilds…`,.75);const ie=await I2();for(const se of fb(Q,C,J,me,ie))d.some(he=>he.id===se.id)||d.push(se)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${v}: laurels…`,.8);const ui=await z2(),Yn=[];for(const D of[0,1]){const Q=D===0?C:Wt(C,D),J=await Mt("laurel",Q);for(const[ie,se,he,Te]of gr(J.rows,J.params,dt.laurel.conf)){const Ee=Fo({x:ie,y:se,width:he-ie,height:Te-se},D,C.width,C.height);Yn.push([Ee.x,Ee.y,Ee.x+Ee.width,Ee.y+Ee.height])}}let jt=Hf(Yn);const li=[];try{const D=s2(j.map(Q=>Q.box),[C.width,C.height]);for(const[Q,J,ie,se]of D){const he=sn(C,Q,J,ie-Q,se-J);if(he.width<=0||he.height<=0)continue;const Te=[];for(const Ee of[0,1]){const re=Ee===0?he:Wt(he,Ee),pe=await Mt("laurel",re);for(const[be,ye,Ce,qe]of gr(pe.rows,pe.params,dt.laurel.conf)){const Pe=Fo({x:be,y:ye,width:Ce-be,height:qe-ye},Ee,he.width,he.height);Te.push([Pe.x,Pe.y,Pe.x+Pe.width,Pe.y+Pe.height])}}if(jt=u2(jt,Hf(Te),[Q,J]),H!==null)try{const Ee=co(he,1280,mr),re=await H.run({[H.inputNames[0]]:new Ge("float32",Ee.tensor,[1,3,1280,1280])});for(const[pe,be,ye,Ce]of gr(re[H.outputNames[0]].data,Ee.params,Fm))li.push([pe+Q,be+J,ye+Q,Ce+J])}catch{}}}catch(D){console.warn("[laurel-containers] failed:",D)}const is=[...F,...li];jt=jt.filter(([D,Q,J,ie])=>!d2((D+J)/2,(Q+ie)/2,is,j.map(se=>se.box)));const Xn=await L2(),ci=await W2();for(const[D,Q,J,ie]of jt){const se=Math.trunc((D+J)/2),he=Math.trunc((Q+ie)/2);if([...z,...R].some(Ne=>(se-Ne.cx)**2+(he-Ne.cy)**2<=Ne.r*Ne.r)||!jn(se,he))continue;if(ci!==null){const Ne=await q2(C,[Math.trunc(D),Math.trunc(Q),Math.trunc(J),Math.trunc(ie)],ci);if(Ne!==null&&Ne>=e1)continue}const Ee=Math.min(Math.trunc(J-D),Math.trunc(ie-Q)),re=Math.max(6,Math.trunc(Math.max(J-D,ie-Q)*xw)),pe=N2(C,se,he,re);let be=null,ye=0;const Ce=new Map;if(Ee>=6)for(const Ne of[0,1,2,3]){const Ye=Ne===0?pe:Wt(pe,Ne),[at,Kt]=Nw(Ye,ui);at!==null&&(Ce.set(at,Math.max(Ce.get(at)??0,Kt)),Kt>ye&&(be=at,ye=Kt))}be!==null&&ye<M2&&(be=null);const qe=ye;if(Xn!==null&&Ee>=6){const Ne=sn(C,Math.trunc(D),Math.trunc(Q),Math.trunc(J-D),Math.trunc(ie-Q));let Ye=null,at=0;for(const Kt of[0,1,2,3]){const di=Kt===0?Ne:Wt(Ne,Kt),as=Zb(di),mt=await Xn.run({[Xn.inputNames[0]]:new Ge("float32",as,[1,3,Vn,Vn])}),{value:vr,prob:Zn}=Qb(mt[Xn.outputNames[0]].data);Zn>at&&(Ye=vr,at=Zn)}Ye!==null&&at>=Xb&&(be=Ye,ye=at)}const Pe=be!==null&&[...Ce.entries()].some(([Ne,Ye])=>Ne!==be&&Ye>=qe-.1),dn=Ke.some(Ne=>se>=Ne.x0&&se<=Ne.x1&&he>=Ne.y0&&he<=Ne.y1),Nt=d.some(Ne=>{const Ye=Ne.boundingBox;return Ye!==void 0&&se>=Ye.x&&se<=Ye.x+Ye.width&&he>=Ye.y&&he<=Ye.y+Ye.height});s.push({value:be,valueRead:be!==null,center:[Math.round((D+J)/2),Math.round((Q+ie)/2)],boundingBox:{x:Math.trunc(D),y:Math.trunc(Q),width:Math.trunc(J-D),height:Math.trunc(ie-Q)},confidence:Math.round(ye*1e4)/1e4,excluded:dn||Nt,photoIndex:b-1,...Pe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}w>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${w} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):y>0&&h.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const $=o.guild??0;$!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${$} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(I=>I.id).join(", ")+" — confirm in the review."});const M=h.filter(I=>I.boundingBox.width===0);M.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${M.map(I=>I.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${h.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),g>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${g} token disc(s) found but not identified — pick them in the review below.`}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+l.map(I=>I.id).join(", ")+" — confirm in the review."}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${u.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const S=Z2(d,h);for(const I of[...h2(h.map(v=>v.id),t),...m2(S.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:I.message});const T=s.filter(I=>!I.excluded),k=T.filter(I=>I.valueRead);return{...ux(),wonders:h,guilds:S,progressTokens:l,laurels:s,cardVictoryPoints:{value:k.reduce((I,v)=>I+(v.value??0),0),laurelsKept:T.length,laurelsUnread:T.length-k.length,complete:T.length===k.length},cardCounts:{byFamily:o,source:y>0?"yolo":"none",tuckedExcluded:w,...p.length>0?{suspects:p}:{}},coins:{total:m,confidence:u.length>0?.5:0,source:u.length>0?"local-colour":"none",coins:u}}}const Tt=1280,lx=.3,es=9;let ts=null;function cx(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${Be}pawn_ends.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ts}function dx(e){const t=Tt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(Tt,Tt).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,Tt,Tt),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,Tt,Tt),l=Tt*Tt,h=new Float32Array(3*l);for(let d=0;d<l;d+=1)h[d]=u[d*4]/255,h[l+d]=u[d*4+1]/255,h[2*l+d]=u[d*4+2]/255;return{tensor:h,r:t}}async function hx(e,t){const{tensor:n,r}=dx(t),a=(await e.run({[e.inputNames[0]]:new Ge("float32",n,[1,3,Tt,Tt])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<lx)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const d=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:d,cy:p})}}return o}async function qm(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Wt(t,g),w=await hx(e,y);if(w.has(0)&&w.has(1)&&w.has(2)){const b=w.get(0).conf+w.get(1).conf+w.get(2).conf;(n===null||b>n.score)&&(n={score:b,det:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const d=((r.cx-u)*o+(r.cy-l)*s)/h*(2*es),p=Math.min(es,Math.max(-es,ct(d))),m=Math.min(r.conf,i.conf,a.conf);return{position:p,confidence:Math.round(m*1e4)/1e4}}async function px(e,t,n){let r=null;for(const i of n){const a=Uy(t.width,t.height,i);if(a===null)continue;const o=sn(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await qm(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r=s)}return r}async function fx(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(l,h=0)=>{t(l,i>0?Math.min(.99,(a+h)/i):void 0)},s=()=>{a+=1};for(const l of["left","right"]){const h=e[l];h.length>0&&(r[l]=await Jo(h,l,n,o,s))}e.both!==void 0&&(r.left=await Jo([e.both],"left",n,o,s,"player"),r.right=await Jo([e.both],"right",n,o,s,"opponent"));{const l={},h={};for(const d of["left","right"]){const p=r[d];p!=null&&(l[d]=p.wonders.map(m=>m.id),h[d]=p.progressTokens.map(m=>m.id))}for(const d of[...p2(l),...f2(h)])n.push({code:"INCONSISTENT_STATE",message:d.message})}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await Qo(e.board),h=await cx();if(h!==null){let d=await qm(h,l);if(d===null){const p=await Gm();if(p!==null){const m=await Mt("banner",l),g=Zr(m.rows,m.params,dt.banner.conf),y=await Wm(p,l,g);d=await px(h,l,y)}}d!==null&&(u={conflictPawnPosition:d.position,found:!0,confidence:d.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await sx(e.data.file):await fx(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
