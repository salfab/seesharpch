var _v=Object.defineProperty;var bv=(Dt,Ut,zn)=>Ut in Dt?_v(Dt,Ut,{enumerable:!0,configurable:!0,writable:!0,value:zn}):Dt[Ut]=zn;var y0=(Dt,Ut,zn)=>bv(Dt,typeof Ut!="symbol"?Ut+"":Ut,zn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Dt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyNames,b0=Object.prototype.hasOwnProperty,x0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),Nn=(e,t)=>{for(var n in t)Dt(e,n,{get:t[n],enumerable:!0})},$0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of zn(t))!b0.call(e,i)&&i!==n&&Dt(e,i,{get:()=>t[i],enumerable:!(r=Ut(t,i))||r.enumerable});return e},er=e=>$0(Dt({},"__esModule",{value:!0}),e),tr,Qt,Bn,Ts,Es,Is=ee(()=>{tr=new Map,Qt=[],Bn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=tr.get(e);if(r===void 0)tr.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Qt.indexOf(e);i!==-1&&Qt.splice(i,1);for(let a=0;a<Qt.length;a++)if(tr.get(Qt[a]).priority<=n){Qt.splice(a,0,e);return}Qt.push(e)}return}throw new TypeError("not a valid backend")},Ts=async e=>{let t=tr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Es=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Qt:n,i,a=[],o=new Set;for(let u of r){let l=await Ts(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),v0=ee(()=>{Is()}),ks,S0=ee(()=>{ks="1.27.0"}),Si,Qe,Cs=ee(()=>{S0(),Si="warning",Qe={wasm:{},webgl:{},webgpu:{},versions:{common:ks},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Si=e}},get logLevel(){return Si}},Object.defineProperty(Qe,"logLevel",{enumerable:!0})}),Le,M0=ee(()=>{Cs(),Le=Qe}),As,Rs,T0=ee(()=>{As=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,c=0,p=h,m=h*2,g=-1;o==="RGBA"?(c=0,p=h,m=h*2,g=h*3):o==="RGB"?(c=0,p=h,m=h*2):o==="RBG"&&(c=0,m=h,p=h*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[c++]-l[0])*u[0],$=(e.data[p++]-l[1])*u[1],M=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+b+","+$+","+M+","+S+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Rs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,m=0,g=1,y=2,w=3,b=0,$=c,M=c*2,S=-1;s==="RGBA"?(b=0,$=c,M=c*2,S=c*3):s==="RGB"?(b=0,$=c,M=c*2):s==="RBG"&&(b=0,M=c,$=c*2),r=n.createImageData(i,a);for(let T=0;T<a*i;m+=p,g+=p,y+=p,w+=p,T++)r.data[m]=(e.data[b++]-h[0])*l[0],r.data[g]=(e.data[$++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[w]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Ir,Os,zs,Ns,Bs,Ps,E0=ee(()=>{Ti(),Ir=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,m=1,g=2,y=3,w=0,b=l,$=l*2,M=-1;s==="RGB"&&(c=3,p=0,m=1,g=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,$=l,b=l*2):u==="BGR"&&($=0,b=l,w=l*2);for(let S=0;S<l;S++,p+=c,g+=c,m+=c,y+=c)h[w++]=(e[p]+o[0])/a[0],h[b++]=(e[m]+o[1])/a[1],h[$++]=(e[g]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new ut("float32",h,[1,4,n,r]):new ut("float32",h,[1,3,n,r])},Os=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=m}else s.tensorFormat="RGBA",s.height=p,s.width=m;c.drawImage(e,0,0),o=c.getImageData(0,0,m,p).data}else throw new Error("Can not access image data")}else if(r){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=c,t!==void 0){let p=u();p.width=c,p.height=h;let m=l(p);if(m!=null)m.putImageData(e,0,0),o=m.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,m=e.width;return c.drawImage(e,0,0,m,p),o=c.getImageData(0,0,m,p).data,s.height=p,s.width=m,Ir(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let p=u(),m=l(p);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{p.width=g.width,p.height=g.height,m.drawImage(g,0,0,p.width,p.height);let y=m.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Ir(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ir(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},zs=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new ut({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Ns=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ut({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Bs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ut({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ps=(e,t,n)=>new ut({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),mn,nr,Mi,Ds,I0=ee(()=>{mn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),nr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Mi=!1,Ds=()=>{if(!Mi){Mi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(mn.set("int64",BigInt64Array),nr.set(BigInt64Array,"int64")),t&&(mn.set("uint64",BigUint64Array),nr.set(BigUint64Array,"uint64")),r?(mn.set("float16",n),nr.set(n,"float16")):mn.set("float16",Uint16Array)}}}),Us,Ls,k0=ee(()=>{Ti(),Us=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ls=(e,t)=>{switch(e.location){case"cpu":return new ut(e.type,e.data,t);case"cpu-pinned":return new ut({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ut({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ut({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ut({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ut,Ti=ee(()=>{T0(),E0(),I0(),k0(),ut=class{constructor(e,t,n){Ds();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=mn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=mn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=nr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Us(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Os(e,t)}static fromTexture(e,t){return zs(e,t)}static fromGpuBuffer(e,t){return Ns(e,t)}static fromMLTensor(e,t){return Bs(e,t)}static fromPinnedBuffer(e,t,n){return Ps(e,t,n)}toDataURL(e){return As(this,e)}toImageData(e){return Rs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ls(this,e)}}}),qe,Fs=ee(()=>{Ti(),qe=ut}),kr,Ei,Ct,wt,gn,yn,Gs=ee(()=>{Cs(),kr=(e,t)=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ei=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),kr("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},Ct=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||Ei("BEGIN",e)},wt=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||Ei("END",e)},gn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.time(`ORT::${e}`)},yn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeEnd(`ORT::${e}`)}}),Ws,C0=ee(()=>{Is(),Fs(),Gs(),Ws=class w0{constructor(t){this.handler=t}async run(t,n,r){Ct(),gn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof qe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof qe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof qe)&&(l=!0,o=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof qe?u[l]=h:u[l]=new qe(h.type,h.data,h.dims)}return yn("InferenceSession.run"),wt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ct(),gn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Es(o),l=await s.createInferenceSessionHandler(a,u);return yn("InferenceSession.create"),wt(),new w0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),tt,A0=ee(()=>{C0(),tt=Ws}),R0=ee(()=>{}),O0=ee(()=>{}),z0=ee(()=>{}),N0=ee(()=>{}),B0={};Nn(B0,{InferenceSession:()=>tt,TRACE:()=>kr,TRACE_EVENT_BEGIN:()=>gn,TRACE_EVENT_END:()=>yn,TRACE_FUNC_BEGIN:()=>Ct,TRACE_FUNC_END:()=>wt,Tensor:()=>qe,env:()=>Le,registerBackend:()=>Bn});var ft=ee(()=>{v0(),M0(),A0(),Fs(),R0(),O0(),Gs(),z0(),N0()}),Ii=ee(()=>{}),qs={};Nn(qs,{default:()=>Vs});var ki,Ci,Vs,P0=ee(()=>{var e;Tf(),wn(),Bi(),ki="ort-wasm-proxy-worker",Ci=((e=globalThis.self)==null?void 0:e.name)===ki,Ci&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Ui(r.wasm).then(()=>{Xa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Za(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Kr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Ja(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":eo(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;no(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},io([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":ro(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Vs=Ci?null:t=>new Worker(t??lt,{type:"module",name:ki})}),Hs={};Nn(Hs,{default:()=>Ks});async function js(e={}){var m0,g0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((m0=self.name)==null?void 0:m0.startsWith("em-pthread"));t.mountExternalData=(d,f)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,f)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...f)=>{var x;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:f[0],errors:[]},E=await d(...f);if(t.Yc!==_)throw Error("Session mismatch");(x=t.dd)==null||x.flush();let A=_.errors;if(0<A.length){let B=await Promise.all(A);if(B=B.filter(Y=>Y),0<B.length)throw Error(B.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(d,f)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=f;let x=t.dd;t.jsepRegisterBuffer=(_,E,A,B)=>x.registerBuffer(_,E,A,B),t.jsepGetBuffer=_=>x.getBuffer(_),t.jsepCreateDownloader=(_,E,A)=>x.createDownloader(_,E,A),t.jsepOnCreateSession=_=>{x.onCreateSession(_)},t.jsepOnReleaseSession=_=>{x.onReleaseSession(_)},t.jsepOnRunStart=_=>x.onRunStart(_),t.Id=(_,E)=>{x.upload(_,E)}}else if(d==="webnn"){let x=f[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=f.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>x.onRunStart(_),t.webnnOnRunEnd=x.onRunEnd.bind(x),t.webnnOnReleaseSession=_=>{x.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,E)=>x.createMLTensorDownloader(_,E),t.webnnRegisterMLTensor=(_,E,A,B)=>x.registerMLTensor(_,E,A,B),t.webnnCreateMLContext=_=>x.createMLContext(_),t.webnnRegisterMLConstant=(_,E,A,B,Y,te)=>x.registerMLConstant(_,E,A,B,Y,t.Xc,te),t.webnnRegisterGraphInput=x.registerGraphInput.bind(x),t.webnnIsGraphInput=x.isGraphInput.bind(x),t.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),t.webnnIsGraphOutput=x.isGraphOutput.bind(x),t.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),t.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let o=()=>{let d=f=>(...x)=>{let _=Bt;return x=f(...x),Bt!=_?new Promise((E,A)=>{ps={resolve:E,reject:A}}):x};(()=>{for(let f of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[f]=d(t[f])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(d,f)=>{throw f},h=self.location.href,c="";if(n||r){try{c=new URL(".",h).href}catch{}r&&(u=d=>{var f=new XMLHttpRequest;return f.open("GET",d,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),s=async d=>{if(I(d))return new Promise((x,_)=>{var E=new XMLHttpRequest;E.open("GET",d,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?x(E.response):_(E.status)},E.onerror=_,E.send(null)});var f=await fetch(d,{credentials:"same-origin"});if(f.ok)return f.arrayBuffer();throw Error(f.status+" : "+f.url)}}var p,m,g,y,w,b,$=console.log.bind(console),M=console.error.bind(console),S=$,T=M,k=!1,I=d=>d.startsWith("file://");function v(){Et.buffer!=N.buffer&&D()}if(i){let d=function(f){try{var x=f.data,_=x.Sc;if(_==="load"){let E=[];self.onmessage=A=>E.push(A),b=()=>{postMessage({Sc:"loaded"});for(let A of E)d(A);self.onmessage=d};for(let A of x.xd)t[A]&&!t[A].proxy||(t[A]=(...B)=>{postMessage({Sc:"callHandler",wd:A,args:B})},A=="print"&&(S=t[A]),A=="printErr"&&(T=t[A]));Et=x.Od,D(),m=x.Pd,ue(),$i()}else if(_==="run"){(function(E){var A=(v(),j)[E+52>>>2>>>0];E=(v(),j)[E+56>>>2>>>0],Mg(A,A-E),ve(A)})(x.Rc),ws(x.Rc,0,0,1,0,0),Kn(),cs(x.Rc),C||(_g(),C=!0);try{is(x.Md,x.bd)}catch(E){if(E!="unwind")throw E}}else x.target!=="setimmediate"&&(_==="checkMailbox"?C&&mi():_&&(T(`worker: received unknown command ${_}`),T(x)))}catch(E){throw bg(),E}};var C=!1;self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=d}var N,F,G,V,z,j,Z,O,W,R,K,U=!1;function D(){var d=Et.buffer;t.HEAP8=N=new Int8Array(d),G=new Int16Array(d),t.HEAPU8=F=new Uint8Array(d),V=new Uint16Array(d),t.HEAP32=z=new Int32Array(d),t.HEAPU32=j=new Uint32Array(d),Z=new Float32Array(d),O=new Float64Array(d),W=new BigInt64Array(d),R=new BigUint64Array(d)}function q(){U=!0,i?b():Zt.sb()}function L(d){throw T(d="Aborted("+d+")"),k=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),w==null||w(d),d}function re(){return{a:{ma:z$,gb:O$,g:ui,J:Yn,f:ci,o:os,h:Zn,ha:di,b:P,T:Q,Ha:ne,n:se,$:fe,Xa:pe,Da:me,Fa:xe,Ya:Ge,Va:De,Oa:dn,Ua:Nt,ka:Ne,Ea:Ye,Ba:at,Wa:Yt,Ca:hi,bb:ss,ea:$x,wa:vx,ua:Mx,da:Ex,O:Ix,H:kx,va:Cx,_:Px,xa:Dx,Ra:Ux,za:Fx,Ia:Gx,sa:Wx,fa:qx,Qa:cs,_a:Vx,R:Yx,r:e$,c:us,hb:t$,y:n$,M:r$,D:i$,l:a$,s:ng,ib:o$,I:s$,S:u$,j:l$,u:c$,q:d$,k:h$,La:p$,Ma:f$,Na:m$,Ja:og,Ka:sg,ta:ug,db:y$,ab:_$,v:b$,aa:x$,ga:$$,$a:w$,W:v$,Za:S$,Aa:M$,F:g$,U:T$,la:bi,ya:I$,fb:E$,eb:k$,Sa:hg,Ta:pg,Ga:ln,V:fg,ja:mg,Pa:gg,ia:yg,kb:gv,na:dv,lb:mv,oa:cv,G:tv,e:D$,t:B$,w:N$,B:K$,mb:sv,K:Q$,x:F$,pa:uv,Y:hv,ba:ov,nb:av,ob:iv,P:Y$,qa:rv,pb:nv,N:J$,Z:lv,d:P$,A:L$,m:U$,jb:yv,p:W$,z:q$,C:G$,E:V$,L:X$,qb:ev,Q:pv,ca:Z$,X:fv,rb:j$,ra:H$,i:A$,a:Et,cb:Pe}}}async function ue(){function d(_,E){var A=Zt=_.exports;_={};for(let[B,Y]of Object.entries(A))typeof Y=="function"?(A=Hx(Y),_[B]=A):_[B]=Y;return Zt=_,Zt=(function(){var B=Zt,Y=oe=>$e=>oe($e)>>>0,te=oe=>()=>oe()>>>0;return(B=Object.assign({},B)).tb=Y(B.tb),B.Xb=te(B.Xb),B.Zb=Y(B.Zb),B.lc=Y(B.lc),B.mc=te(B.mc),B.qc=Y(B.qc),B})(),An.push(Zt._b),wg=(_=Zt).tb,_g=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,xi=_.Xb,Pt=t._free=_.Yb,Mr=t._malloc=_.Zb,ws=_.ac,bg=_.bc,xg=_.cc,$g=_.dc,_s=_.ec,vg=_.fc,Sg=_.gc,Me=_.hc,Tr=_.ic,Mg=_.jc,ve=_.kc,bs=_.lc,Se=_.mc,Tg=_.nc,xs=_.oc,Eg=_.pc,Ig=_.qc,kg=_.rc,$s=_.sc,Cg=_.tc,Ag=_.uc,Rg=_.vc,Og=_.wc,zg=_.xc,Ng=_.yc,Bg=_.zc,Pg=_.Ac,Dg=_.Bc,Ug=_.Cc,Lg=_.Dc,Fg=_.Ec,Gg=_.Fc,Wg=_.Gc,qg=_.Hc,Vg=_.Ic,Hg=_.Jc,jg=_.Kc,Kg=_.Lc,Yg=_.Mc,Xg=_.Nc,Zg=_.Pc,Qg=_.Qc,Jg=_.$c,e0=_.ad,t0=_.fd,n0=_.jd,r0=_.kd,i0=_.ld,a0=_.md,o0=_.nd,s0=_.od,u0=_.pd,l0=_.qd,c0=_.vd,d0=_.Td,h0=_.Ud,p0=_.Vd,f0=_.Wd,m=E,Zt}var f,x=re();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm(x,(E,A)=>{_(d(E,A))})}):i?d(new WebAssembly.Instance(m,re()),m):(K??(K=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),f=await(async function(_){var E=K;if(!p&&!I(E))try{var A=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,_)}catch(B){T(`wasm streaming compile failed: ${B}`),T("falling back to ArrayBuffer instantiation")}return(async function(B,Y){try{var te=await(async function(oe){if(!p)try{var $e=await s(oe);return new Uint8Array($e)}catch{}if(oe==K&&p)oe=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";oe=u(oe)}return oe})(B);return await WebAssembly.instantiate(te,Y)}catch(oe){T(`failed to asynchronously prepare wasm: ${oe}`),L(oe)}})(E,_)})(x),d(f.instance,f.module))}class ae{constructor(f){y0(this,"name","ExitStatus");this.message=`Program terminated with exit(${f})`,this.status=f}}var be=d=>{d.terminate(),d.onmessage=()=>{}},Oe=[],Ve=0,He=null,je=d=>{it.length==0&&($r(),xr(it[0]));var f=it.pop();if(!f)return 6;zt.push(f),ht[d.Rc]=f,f.Rc=d.Rc;var x={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return f.postMessage(x,d.rd),0},Ae=0,ge=(d,f,...x)=>{var _,E=16*x.length,A=Se(),B=bs(E),Y=B>>>3;for(_ of x)typeof _=="bigint"?((v(),W)[Y++>>>0]=1n,(v(),W)[Y++>>>0]=_):((v(),W)[Y++>>>0]=0n,(v(),O)[Y++>>>0]=_);return d=xg(d,0,E,B,f),ve(A),d};function Pe(d){if(i)return ge(0,1,d);if(g=d,!(0<Ae)){for(var f of zt)be(f);for(f of it)be(f);it=[],zt=[],ht={},k=!0}l(0,new ae(d))}function un(d){if(i)return ge(1,0,d);ln(d)}var ln=d=>{if(g=d,i)throw un(d),"unwind";Pe(d)},it=[],zt=[],An=[],ht={},jt=d=>{var f=d.Rc;delete ht[f],it.push(d),zt.splice(zt.indexOf(d),1),d.Rc=0,$g(f)};function Kn(){An.forEach(d=>d())}var xr=d=>new Promise(f=>{d.onmessage=E=>{var A=E.data;if(E=A.Sc,A.Zc&&A.Zc!=xi()){var B=ht[A.Zc];B?B.postMessage(A,A.rd):T(`Internal error! Worker sent a message "${E}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?mi():E==="spawnThread"?je(A):E==="cleanupThread"?fi(()=>{jt(ht[A.Nd])}):E==="loaded"?(d.loaded=!0,f(d)):A.target==="setimmediate"?d.postMessage(A):E==="uncaughtException"?d.onerror(A.error):E==="callHandler"?t[A.wd](...A.args):E&&T(`worker sent an unknown command ${E}`)},d.onerror=E=>{throw T(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var x,_=[];for(x of[])t.propertyIsEnumerable(x)&&_.push(x);d.postMessage({Sc:"load",xd:_,Od:Et,Pd:m})});function $r(){var d=new Worker((()=>{let f=URL;return self.location.href>"file:"&&self.location.href<"file;"?new f("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});it.push(d)}var Et,is=(d,f)=>{Ae=0,d=$s(d,f),0<Ae?g=d:_s(d)},pt=[],cn=0;function ui(d){var f=new Xn(d>>>=0);return(v(),N)[f.Tc+12>>>0]==0&&(as(f,!0),cn--),li(f,!1),pt.push(f),Ig(d)}var It=0,Yn=()=>{Me(0,0);var d=pt.pop();Tg(d.cd),It=0};function as(d,f){f=f?1:0,(v(),N)[d.Tc+12>>>0]=f}function li(d,f){f=f?1:0,(v(),N)[d.Tc+13>>>0]=f}class Xn{constructor(f){this.cd=f,this.Tc=f-24}}var Kt=d=>{var f=It;if(!f)return Tr(0),0;var x=new Xn(f);(v(),j)[x.Tc+16>>>2>>>0]=f;var _=(v(),j)[x.Tc+4>>>2>>>0];if(!_)return Tr(0),f;for(var E of d){if(E===0||E===_)break;if(Eg(E,_,x.Tc+16))return Tr(E),f}return Tr(_),f};function ci(){return Kt([])}function os(d){return Kt([d>>>0])}function Zn(d,f,x,_){return Kt([d>>>0,f>>>0,x>>>0,_>>>0])}var di=()=>{var d=pt.pop();d||L("no exception to throw");var f=d.cd;throw(v(),N)[d.Tc+13>>>0]==0&&(pt.push(d),li(d,!0),as(d,!1),cn++),xs(f),It=f};function P(d,f,x){var _=new Xn(d>>>=0);throw f>>>=0,x>>>=0,(v(),j)[_.Tc+16>>>2>>>0]=0,(v(),j)[_.Tc+4>>>2>>>0]=f,(v(),j)[_.Tc+8>>>2>>>0]=x,xs(d),cn++,It=d}var Q=()=>cn;function J(d,f,x,_){return i?ge(2,1,d,f,x,_):ne(d,f,x,_)}function ne(d,f,x,_){if(d>>>=0,f>>>=0,x>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?J(d,f,x,_):(d={Ld:x,Rc:d,bd:_,rd:E},i?(d.Sc="spawnThread",postMessage(d,E),0):je(d))}function se(d){throw It||(It=d>>>0),It}var he=globalThis.TextDecoder&&new TextDecoder,Ee=(d,f,x,_)=>{if(x=f+x,_)return x;for(;d[f]&&!(f>=x);)++f;return f},Ie=(d,f=0,x,_)=>{if(16<(x=Ee(d,f>>>=0,x,_))-f&&d.buffer&&he)return he.decode(d.buffer instanceof ArrayBuffer?d.subarray(f,x):d.slice(f,x));for(_="";f<x;){var E=d[f++];if(128&E){var A=63&d[f++];if((224&E)==192)_+=String.fromCharCode((31&E)<<6|A);else{var B=63&d[f++];65536>(E=(240&E)==224?(15&E)<<12|A<<6|B:(7&E)<<18|A<<12|B<<6|63&d[f++])?_+=String.fromCharCode(E):(E-=65536,_+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else _+=String.fromCharCode(E)}return _},ie=(d,f,x)=>(d>>>=0)?Ie((v(),F),d,f,x):"";function fe(d,f,x){return i?ge(3,1,d,f,x):0}function pe(d,f){if(i)return ge(4,1,d,f)}function me(d,f){if(i)return ge(5,1,d,f)}function xe(d,f,x){if(i)return ge(6,1,d,f,x)}function Ge(d,f,x){return i?ge(7,1,d,f,x):0}function De(d,f){if(i)return ge(8,1,d,f)}function dn(d,f,x){if(i)return ge(9,1,d,f,x)}function Nt(d,f,x,_){if(i)return ge(10,1,d,f,x,_)}function Ne(d,f,x,_){if(i)return ge(11,1,d,f,x,_)}function Ye(d,f,x,_){if(i)return ge(12,1,d,f,x,_)}function at(d){if(i)return ge(13,1,d)}function Yt(d,f){if(i)return ge(14,1,d,f)}function hi(d,f,x){if(i)return ge(15,1,d,f,x)}var ss=()=>L(""),gt=d=>{d>>>=0;for(var f="";;){var x=(v(),F)[d++>>>0];if(!x)return f;f+=String.fromCharCode(x)}},vr={},Qn={},Jn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Xt(d,f,x={}){return(function(_,E,A={}){var B=E.name;if(!_)throw new Jn(`type "${B}" must have a positive integer typeid pointer`);if(Qn.hasOwnProperty(_)){if(A.yd)return;throw new Jn(`Cannot register type '${B}' twice`)}Qn[_]=E,vr.hasOwnProperty(_)&&(E=vr[_],delete vr[_],E.forEach(Y=>Y()))})(d,f,x)}var Ym=(d,f,x)=>{switch(f){case 1:return x?_=>(v(),N)[_>>>0]:_=>(v(),F)[_>>>0];case 2:return x?_=>(v(),G)[_>>>1>>>0]:_=>(v(),V)[_>>>1>>>0];case 4:return x?_=>(v(),z)[_>>>2>>>0]:_=>(v(),j)[_>>>2>>>0];case 8:return x?_=>(v(),W)[_>>>3>>>0]:_=>(v(),R)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${f}): ${d}`)}};function $x(d,f,x,_,E){d>>>=0,x>>>=0,f=gt(f>>>0);let A=B=>B;if(_=_===0n){let B=8*x;A=Y=>BigInt.asUintN(B,Y),E=A(E)}Xt(d,{name:f,Oc:A,Vc:(B,Y)=>(typeof Y=="number"&&(Y=BigInt(Y)),Y),Uc:Ym(f,x,!_),Wc:null})}function vx(d,f,x,_){Xt(d>>>=0,{name:f=gt(f>>>0),Oc:function(E){return!!E},Vc:function(E,A){return A?x:_},Uc:function(E){return this.Oc((v(),F)[E>>>0])},Wc:null})}var Xm=[],Rn=[0,1,,1,null,1,!0,1,!1,1];function us(d){9<(d>>>=0)&&--Rn[d+1]===0&&(Rn[d]=void 0,Xm.push(d))}var yt=d=>{if(!d)throw new Jn(`Cannot use deleted val. handle = ${d}`);return Rn[d]},kt=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Xm.pop()||Rn.length;return Rn[f]=d,Rn[f+1]=1,f}};function ls(d){return this.Oc((v(),j)[d>>>2>>>0])}var Sx={name:"emscripten::val",Oc:d=>{var f=yt(d);return us(d),f},Vc:(d,f)=>kt(f),Uc:ls,Wc:null};function Mx(d){return Xt(d>>>0,Sx)}var Tx=(d,f)=>{switch(f){case 4:return function(x){return this.Oc((v(),Z)[x>>>2>>>0])};case 8:return function(x){return this.Oc((v(),O)[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${d}`)}};function Ex(d,f,x){x>>>=0,Xt(d>>>=0,{name:f=gt(f>>>0),Oc:_=>_,Vc:(_,E)=>E,Uc:Tx(f,x),Wc:null})}function Ix(d,f,x,_,E){d>>>=0,x>>>=0,f=gt(f>>>0);let A=Y=>Y;if(_===0){var B=32-8*x;A=Y=>Y<<B>>>B,E=A(E)}Xt(d,{name:f,Oc:A,Vc:(Y,te)=>te,Uc:Ym(f,x,_!==0),Wc:null})}function kx(d,f,x){function _(A){var B=(v(),j)[A>>>2>>>0];return A=(v(),j)[A+4>>>2>>>0],new E((v(),N).buffer,A,B)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];Xt(d>>>=0,{name:x=gt(x>>>0),Oc:_,Uc:_},{yd:!0})}var hn=(d,f,x)=>{var _=(v(),F);if(f>>>=0,0<x){var E=f;x=f+x-1;for(var A=0;A<d.length;++A){var B=d.codePointAt(A);if(127>=B){if(f>=x)break;_[f++>>>0]=B}else if(2047>=B){if(f+1>=x)break;_[f++>>>0]=192|B>>6,_[f++>>>0]=128|63&B}else if(65535>=B){if(f+2>=x)break;_[f++>>>0]=224|B>>12,_[f++>>>0]=128|B>>6&63,_[f++>>>0]=128|63&B}else{if(f+3>=x)break;_[f++>>>0]=240|B>>18,_[f++>>>0]=128|B>>12&63,_[f++>>>0]=128|B>>6&63,_[f++>>>0]=128|63&B,A++}}_[f>>>0]=0,d=f-E}else d=0;return d},pi=d=>{for(var f=0,x=0;x<d.length;++x){var _=d.charCodeAt(x);127>=_?f++:2047>=_?f+=2:55296<=_&&57343>=_?(f+=4,++x):f+=3}return f};function Cx(d,f){Xt(d>>>=0,{name:f=gt(f>>>0),Oc(x){var _=(v(),j)[x>>>2>>>0];return _=ie(x+4,_,!0),Pt(x),_},Vc(x,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var E=typeof _=="string";if(!(E||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Jn("Cannot pass non-string to std::string");var A=E?pi(_):_.length,B=Mr(4+A+1),Y=B+4;return(v(),j)[B>>>2>>>0]=A,E?hn(_,Y,A+1):(v(),F).set(_,Y>>>0),x!==null&&x.push(Pt,B),B},Uc:ls,Wc(x){Pt(x)}})}var Zm=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ax=(d,f,x)=>{if(d>>>=1,16<(f=Ee((v(),V),d,f/2,x))-d&&Zm)return Zm.decode((v(),V).slice(d,f));for(x="";d<f;++d){var _=(v(),V)[d>>>0];x+=String.fromCharCode(_)}return x},Rx=(d,f,x)=>{if(x??(x=2147483647),2>x)return 0;var _=f;x=(x-=2)<2*d.length?x/2:d.length;for(var E=0;E<x;++E){var A=d.charCodeAt(E);(v(),G)[f>>>1>>>0]=A,f+=2}return(v(),G)[f>>>1>>>0]=0,f-_},Ox=d=>2*d.length,zx=(d,f,x)=>{var _="";d>>>=2;for(var E=0;!(E>=f/4);E++){var A=(v(),j)[d+E>>>0];if(!A&&!x)break;_+=String.fromCodePoint(A)}return _},Nx=(d,f,x)=>{if(f>>>=0,x??(x=2147483647),4>x)return 0;var _=f;x=_+x-4;for(var E=0;E<d.length;++E){var A=d.codePointAt(E);if(65535<A&&E++,(v(),z)[f>>>2>>>0]=A,(f+=4)+4>x)break}return(v(),z)[f>>>2>>>0]=0,f-_},Bx=d=>{for(var f=0,x=0;x<d.length;++x)65535<d.codePointAt(x)&&x++,f+=4;return f};function Px(d,f,x){if(d>>>=0,f>>>=0,x=gt(x>>>=0),f===2)var _=Ax,E=Rx,A=Ox;else _=zx,E=Nx,A=Bx;Xt(d,{name:x,Oc:B=>{var Y=(v(),j)[B>>>2>>>0];return Y=_(B+4,Y*f,!0),Pt(B),Y},Vc:(B,Y)=>{if(typeof Y!="string")throw new Jn(`Cannot pass non-string to C++ string type ${x}`);var te=A(Y),oe=Mr(4+te+f);return(v(),j)[oe>>>2>>>0]=te/f,E(Y,oe+4,te+f),B!==null&&B.push(Pt,oe),oe},Uc:ls,Wc(B){Pt(B)}})}function Dx(d,f){Xt(d>>>=0,{zd:!0,name:f=gt(f>>>0),Oc:()=>{},Vc:()=>{}})}function Ux(d){ws(d>>>0,!r,1,!n,131072,!1),Kn()}var fi=d=>{if(!k)try{if(d(),!(0<Ae))try{i?xi()&&_s(g):ln(g)}catch(f){f instanceof ae||f=="unwind"||l(0,f)}}catch(f){f instanceof ae||f=="unwind"||l(0,f)}},Lx=!Atomics.waitAsync||((g0=globalThis.navigator)==null?void 0:g0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function cs(d){d>>>=0,Lx||(Atomics.waitAsync((v(),z),d>>>2,d).value.then(mi),d+=128,Atomics.store((v(),z),d>>>2,1))}var mi=()=>fi(()=>{var d=xi();d&&(cs(d),Sg())});function Fx(d,f){(d>>>=0)==f>>>0?setTimeout(mi):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=ht[d])&&d.postMessage({Sc:"checkMailbox"})}var ds=[];function Gx(d,f,x,_,E){for(f>>>=0,E>>>=0,ds.length=0,x=E>>>3,_=E+_>>>3;x<_;){var A;A=(v(),W)[x++>>>0]?(v(),W)[x++>>>0]:(v(),O)[x++>>>0],ds.push(A)}return(f?vs[f]:R$[d])(...ds)}var Wx=()=>{Ae=0};function qx(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):jt(ht[d])}function Vx(d){}var gi=d=>{try{d()}catch(f){L(f)}};function Hx(d){var f=(...x)=>{yi.push(d);try{return d(...x)}finally{k||(yi.pop(),Bt&&pn===1&&yi.length===0&&(pn=0,Ae+=1,gi(h0),typeof Fibers<"u"&&Fibers.Zd()))}};return eg.set(d,f),f}var pn=0,Bt=null,Qm=0,yi=[],hs=new Map,Jm=new Map,eg=new Map,jx=0,ps=null,Kx=[],tg=d=>(function(f){if(!k){if(pn===0){var x=!1,_=!1;f((E=0)=>{if(!k&&(Qm=E,x=!0,_)){pn=2,gi(()=>p0(Bt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var A=(function(){var te=(v(),z)[Bt+8>>>2>>>0];return te=Jm.get(te),te=eg.get(te),--Ae,te()})()}catch(te){A=te,E=!0}var B=!1;if(!Bt){var Y=ps;Y&&(ps=null,(E?Y.reject:Y.resolve)(A),B=!0)}if(E&&!B)throw A}}),_=!0,x||(pn=1,Bt=(function(){var E=Mr(65548),A=E+12;if((v(),j)[E>>>2>>>0]=A,(v(),j)[E+4>>>2>>>0]=A+65536,A=yi[0],!hs.has(A)){var B=jx++;hs.set(A,B),Jm.set(B,A)}return A=hs.get(A),(v(),z)[E+8>>>2>>>0]=A,E})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),gi(()=>d0(Bt)))}else pn===2?(pn=0,gi(f0),Pt(Bt),Bt=null,Kx.forEach(fi)):L(`invalid state: ${pn}`);return Qm}})(f=>{d().then(f)});function Yx(d){return d>>>=0,tg(async()=>{var f=await yt(d);return kt(f)})}var fs=[],Xx=d=>{var f=fs.length;return fs.push(d),f},Zx=(d,f)=>{for(var x=Array(d),_=0;_<d;++_){var E=_,A=(v(),j)[f+4*_>>>2>>>0],B=Qn[A];if(B===void 0)throw d=`parameter ${_}`,A=wg(A),f=gt(A),Pt(A),new Jn(`${d} has unknown type ${f}`);x[E]=B}return x},Qx=(d,f,x)=>{var _=[];return d=d(_,x),_.length&&((v(),j)[f>>>2>>>0]=kt(_)),d},Jx={},wi=d=>{var f=Jx[d];return f===void 0?gt(d):f};function e$(d,f,x){var[_,...E]=Zx(d,f>>>0);f=_.Vc.bind(_);var A=E.map(te=>te.Uc.bind(te));d--;var B={toValue:yt};switch(d=A.map((te,oe)=>{var $e=`argFromPtr${oe}`;return B[$e]=te,`${$e}(args${oe?"+"+8*oe:""})`}),x){case 0:var Y="toValue(handle)";break;case 2:Y="new (toValue(handle))";break;case 3:Y="";break;case 1:B.getStringOrSymbol=wi,Y="toValue(handle)[getStringOrSymbol(methodName)]"}return Y+=`(${d})`,_.zd||(B.toReturnWire=f,B.emval_returnValue=Qx,Y=`return emval_returnValue(toReturnWire, destructorsRef, ${Y})`),Y=`return function (handle, methodName, destructorsRef, args) {
  ${Y}
  }`,x=new Function(Object.keys(B),Y)(...Object.values(B)),Y=`methodCaller<(${E.map(te=>te.name)}) => ${_.name}>`,Xx(Object.defineProperty(x,"name",{value:Y}))}function t$(d,f){return f>>>=0,(d=yt(d>>>0))==yt(f)}function n$(d){return(d>>>=0)?(d=wi(d),kt(globalThis[d])):kt(globalThis)}function r$(d){return d=wi(d>>>0),kt(t[d])}function i$(d,f){return f>>>=0,d=yt(d>>>0),f=yt(f),kt(d[f])}function a$(d){9<(d>>>=0)&&(Rn[d+1]+=1)}function ng(d,f,x,_,E){return fs[d>>>0](f>>>0,x>>>0,_>>>0,E>>>0)}function o$(d,f,x,_,E){return ng(d>>>0,f>>>0,x>>>0,_>>>0,E>>>0)}function s$(){return kt([])}function u$(d){d=yt(d>>>0);for(var f=Array(d.length),x=0;x<d.length;x++)f[x]=d[x];return kt(f)}function l$(d){return kt(wi(d>>>0))}function c$(){return kt({})}function d$(d){for(var f=yt(d>>>=0);f.length;){var x=f.pop();f.pop()(x)}us(d)}function h$(d,f,x){f>>>=0,x>>>=0,d=yt(d>>>0),f=yt(f),x=yt(x),d[f]=x}function p$(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(v(),z)[f>>>2>>>0]=d.getUTCSeconds(),(v(),z)[f+4>>>2>>>0]=d.getUTCMinutes(),(v(),z)[f+8>>>2>>>0]=d.getUTCHours(),(v(),z)[f+12>>>2>>>0]=d.getUTCDate(),(v(),z)[f+16>>>2>>>0]=d.getUTCMonth(),(v(),z)[f+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),z)[f+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),z)[f+28>>>2>>>0]=d}var rg=d=>d%4==0&&(d%100!=0||d%400==0),ig=[0,31,60,91,121,152,182,213,244,274,305,335],ag=[0,31,59,90,120,151,181,212,243,273,304,334];function f$(d,f){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),f>>>=0,d=new Date(1e3*d),(v(),z)[f>>>2>>>0]=d.getSeconds(),(v(),z)[f+4>>>2>>>0]=d.getMinutes(),(v(),z)[f+8>>>2>>>0]=d.getHours(),(v(),z)[f+12>>>2>>>0]=d.getDate(),(v(),z)[f+16>>>2>>>0]=d.getMonth(),(v(),z)[f+20>>>2>>>0]=d.getFullYear()-1900,(v(),z)[f+24>>>2>>>0]=d.getDay();var x=(rg(d.getFullYear())?ig:ag)[d.getMonth()]+d.getDate()-1|0;(v(),z)[f+28>>>2>>>0]=x,(v(),z)[f+36>>>2>>>0]=-60*d.getTimezoneOffset(),x=new Date(d.getFullYear(),6,1).getTimezoneOffset();var _=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(x!=_&&d.getTimezoneOffset()==Math.min(_,x)),(v(),z)[f+32>>>2>>>0]=d}function m$(d){d>>>=0;var f=new Date((v(),z)[d+20>>>2>>>0]+1900,(v(),z)[d+16>>>2>>>0],(v(),z)[d+12>>>2>>>0],(v(),z)[d+8>>>2>>>0],(v(),z)[d+4>>>2>>>0],(v(),z)[d>>>2>>>0],0),x=(v(),z)[d+32>>>2>>>0],_=f.getTimezoneOffset(),E=new Date(f.getFullYear(),6,1).getTimezoneOffset(),A=new Date(f.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(A,E);return 0>x?(v(),z)[d+32>>>2>>>0]=+(E!=A&&B==_):0<x!=(B==_)&&(E=Math.max(A,E),f.setTime(f.getTime()+6e4*((0<x?B:E)-_))),(v(),z)[d+24>>>2>>>0]=f.getDay(),x=(rg(f.getFullYear())?ig:ag)[f.getMonth()]+f.getDate()-1|0,(v(),z)[d+28>>>2>>>0]=x,(v(),z)[d>>>2>>>0]=f.getSeconds(),(v(),z)[d+4>>>2>>>0]=f.getMinutes(),(v(),z)[d+8>>>2>>>0]=f.getHours(),(v(),z)[d+12>>>2>>>0]=f.getDate(),(v(),z)[d+16>>>2>>>0]=f.getMonth(),(v(),z)[d+20>>>2>>>0]=f.getYear(),d=f.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function og(d,f,x,_,E,A,B){return i?ge(16,1,d,f,x,_,E,A,B):-52}function sg(d,f,x,_,E,A){if(i)return ge(17,1,d,f,x,_,E,A)}var Sr={},g$=()=>performance.timeOrigin+performance.now();function ug(d,f){if(i)return ge(18,1,d,f);if(Sr[d]&&(clearTimeout(Sr[d].id),delete Sr[d]),!f)return 0;var x=setTimeout(()=>{delete Sr[d],fi(()=>vg(d,performance.timeOrigin+performance.now()))},f);return Sr[d]={id:x,Yd:f},0}function y$(d,f,x,_){d>>>=0,f>>>=0,x>>>=0,_>>>=0;var E=new Date().getFullYear(),A=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var B=Math.max(A,E);(v(),j)[d>>>2>>>0]=60*B,(v(),z)[f>>>2>>>0]=+(A!=E),d=(f=Y=>{var te=Math.abs(Y);return`UTC${0<=Y?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(A),f=f(E),E<A?(hn(d,x,17),hn(f,_,17)):(hn(d,_,17),hn(f,x,17))}var w$=()=>Date.now();function _$(d,f,x){return x>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),W)[x>>>3>>>0]=BigInt(d),0):28}var ms=[],lg=(d,f)=>{ms.length=0;for(var x;x=(v(),F)[d++>>>0];){var _=x!=105;f+=(_&=x!=112)&&f%8?4:0,ms.push(x==112?(v(),j)[f>>>2>>>0]:x==106?(v(),W)[f>>>3>>>0]:x==105?(v(),z)[f>>>2>>>0]:(v(),O)[f>>>3>>>0]),f+=_?8:4}return ms};function b$(d,f,x){return d>>>=0,f=lg(f>>>0,x>>>0),vs[d](...f)}function x$(d,f,x){return d>>>=0,f=lg(f>>>0,x>>>0),vs[d](...f)}var $$=()=>{};function v$(d,f){return T(ie(d>>>0,f>>>0))}var S$=()=>{throw Ae+=1,"unwind"};function M$(){return 4294901760}var T$=()=>navigator.hardwareConcurrency,On={},_i=d=>{var f;return(f=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+f[1]:(f=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+f[1]:0},cg=d=>{for(var f of d)(d=_i(f))&&(On[d]=f)};function E$(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),cg(d),On.gd=_i(d[3]),On.Jd=d,On.gd}function bi(d){if(!(d=On[d>>>0]))return 0;var f;if(f=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=f[1];else if(f=/^\s+at (.*) \(.*\)$/.exec(d))d=f[1];else{if(!(f=/^(.+?)@/.exec(d)))return 0;d=f[1]}Pt(bi.hd??0),f=pi(d)+1;var x=Mr(f);return x&&hn(d,x,f),bi.hd=x,bi.hd}function I$(d){d>>>=0;var f=(v(),F).length;if(d<=f||4294901760<d)return!1;for(var x=1;4>=x;x*=2){var _=f*(1+.2/x);_=Math.min(_,d+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(d,_)/65536))-Et.buffer.byteLength+65535)/65536|0;try{Et.grow(_),D();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function k$(d,f,x){if(d>>>=0,f>>>=0,On.gd==d)var _=On.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),cg(_);for(var E=3;_[E]&&_i(_[E])!=d;)++E;for(d=0;d<x&&_[d+E];++d)(v(),z)[f+4*d>>>2>>>0]=_i(_[d+E]);return d}var gs,ys={},dg=()=>{var _;if(!gs){var d,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in ys)ys[d]===void 0?delete f[d]:f[d]=ys[d];var x=[];for(d in f)x.push(`${d}=${f[d]}`);gs=x}return gs};function hg(d,f){if(i)return ge(19,1,d,f);d>>>=0,f>>>=0;var x,_=0,E=0;for(x of dg()){var A=f+_;(v(),j)[d+E>>>2>>>0]=A,_+=hn(x,A,1/0)+1,E+=4}return 0}function pg(d,f){if(i)return ge(20,1,d,f);d>>>=0,f>>>=0;var x=dg();for(var _ of((v(),j)[d>>>2>>>0]=x.length,d=0,x))d+=pi(_)+1;return(v(),j)[f>>>2>>>0]=d,0}function fg(d){return i?ge(21,1,d):52}function mg(d,f,x,_){return i?ge(22,1,d,f,x,_):52}function gg(d,f,x,_){return i?ge(23,1,d,f,x,_):70}var C$=[null,[],[]];function yg(d,f,x,_){if(i)return ge(24,1,d,f,x,_);f>>>=0,x>>>=0,_>>>=0;for(var E=0,A=0;A<x;A++){var B=(v(),j)[f>>>2>>>0],Y=(v(),j)[f+4>>>2>>>0];f+=8;for(var te=0;te<Y;te++){var oe=d,$e=(v(),F)[B+te>>>0],ke=C$[oe];$e===0||$e===10?((oe===1?S:T)(Ie(ke)),ke.length=0):ke.push($e)}E+=Y}return(v(),j)[_>>>2>>>0]=E,0}function A$(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)$r();Oe.push(async()=>{var f=(async function(){if(!i)return Promise.all(it.map(xr))})();Ve++,await f,--Ve==0&&He&&(f=He,He=null,f())})})(),i||(Et=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),D()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Se(),t.stackRestore=d=>ve(d),t.stackAlloc=d=>bs(d),t.setValue=function(d,f,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":(v(),N)[d>>>0]=f;break;case"i16":(v(),G)[d>>>1>>>0]=f;break;case"i32":(v(),z)[d>>>2>>>0]=f;break;case"i64":(v(),W)[d>>>3>>>0]=BigInt(f);break;case"float":(v(),Z)[d>>>2>>>0]=f;break;case"double":(v(),O)[d>>>3>>>0]=f;break;case"*":(v(),j)[d>>>2>>>0]=f;break;default:L(`invalid type for setValue: ${x}`)}},t.getValue=function(d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":return(v(),N)[d>>>0];case"i16":return(v(),G)[d>>>1>>>0];case"i32":return(v(),z)[d>>>2>>>0];case"i64":return(v(),W)[d>>>3>>>0];case"float":return(v(),Z)[d>>>2>>>0];case"double":return(v(),O)[d>>>3>>>0];case"*":return(v(),j)[d>>>2>>>0];default:L(`invalid type for getValue: ${f}`)}},t.UTF8ToString=ie,t.stringToUTF8=hn,t.lengthBytesUTF8=pi;var wg,_g,xi,Pt,Mr,ws,bg,xg,$g,_s,vg,Sg,Me,Tr,Mg,ve,bs,Se,Tg,xs,Eg,Ig,kg,$s,Cg,Ag,Rg,Og,zg,Ng,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Jg,e0,t0,n0,r0,i0,a0,o0,s0,u0,l0,c0,d0,h0,p0,f0,Zt,R$=[Pe,un,J,fe,pe,me,xe,Ge,De,dn,Nt,Ne,Ye,at,Yt,hi,og,sg,ug,hg,pg,fg,mg,gg,yg],vs={1003524:(d,f,x,_,E)=>{if(t===void 0||!t.Xc)return 1;if((d=ie(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(f=Number(f>>>0),x=Number(x>>>0),_=Number(_>>>0),f+x>d.byteLength)return 3;try{let A=d.subarray(f,f+x);switch(E){case 0:(v(),F).set(A,_>>>0);break;case 1:t.Qd?t.Qd(_,A):t.Id(_,A);break;default:return 4}return 0}catch{return 4}},1004348:(d,f,x)=>{t.td(d,(v(),F).subarray(f>>>0,f+x>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,f,x)=>{t.ed(Number(d),Number(f),Number(x),!0)},1004704:(d,f,x)=>{t.ed(Number(d),Number(f),Number(x))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,f,x)=>{t.$b("HardSigmoid",d,{alpha:f,beta:x})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,f,x)=>{t.$b("Clip",d,{min:f,max:x})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,f)=>{t.$b("Elu",d,{alpha:f})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,f)=>{t.$b("LeakyRelu",d,{alpha:f})},1006444:(d,f)=>{t.$b("ThresholdedRelu",d,{alpha:f})},1006514:(d,f)=>{t.$b("Cast",d,{to:f})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,f,x,_,E)=>{t.$b("ReduceMean",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007283:(d,f,x,_,E)=>{t.$b("ReduceMax",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007457:(d,f,x,_,E)=>{t.$b("ReduceMin",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007631:(d,f,x,_,E)=>{t.$b("ReduceProd",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007806:(d,f,x,_,E)=>{t.$b("ReduceSum",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007980:(d,f,x,_,E)=>{t.$b("ReduceL1",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008153:(d,f,x,_,E)=>{t.$b("ReduceL2",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008326:(d,f,x,_,E)=>{t.$b("ReduceLogSum",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008503:(d,f,x,_,E)=>{t.$b("ReduceSumSquare",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008683:(d,f,x,_,E)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!f,noopWithEmptyAxes:!!x,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,f,x)=>{t.$b("Transpose",d,{perm:f?Array.from((v(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1009040:(d,f,x,_)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:ie(x),format:_?"NHWC":"NCHW"})},1009173:(d,f,x,_)=>{t.$b("DepthToSpace",d,{blocksize:f,mode:ie(x),format:_?"NHWC":"NCHW"})},1009306:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We,fn)=>{t.$b("ConvTranspose",d,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[x],group:_,kernelShape:[E],pads:[A,B],strides:[Y],wIsConst:()=>!!(v(),N)[oe>>>0],outputPadding:$e?Array.from((v(),z).subarray(Number($e)>>>0,Number(ke)>>>0)):[],outputShape:Ue?Array.from((v(),z).subarray(Number(Ue)>>>0,Number(We)>>>0)):[],activation:ie(fn)})},1009739:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We)=>{t.$b("ConvTranspose",d,{format:Y?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),z).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),z).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],outputShape:ke?Array.from((v(),z).subarray(Number(ke)>>>0,Number(Ue)>>>0)):[],activation:ie(We)})},1010400:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We,fn)=>{t.$b("ConvTranspose",d,{format:te?"NHWC":"NCHW",autoPad:f,dilations:[x],group:_,kernelShape:[E],pads:[A,B],strides:[Y],wIsConst:()=>!!(v(),N)[oe>>>0],outputPadding:$e?Array.from((v(),z).subarray(Number($e)>>>0,Number(ke)>>>0)):[],outputShape:Ue?Array.from((v(),z).subarray(Number(Ue)>>>0,Number(We)>>>0)):[],activation:ie(fn)})},1010833:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We)=>{t.$b("ConvTranspose",d,{format:Y?"NHWC":"NCHW",autoPad:f,dilations:Array.from((v(),z).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),z).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[te>>>0],outputPadding:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],outputShape:ke?Array.from((v(),z).subarray(Number(ke)>>>0,Number(Ue)>>>0)):[],activation:ie(We)})},1011494:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1011585:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We)=>{t.$b("AveragePool",d,{format:We?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),z).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((v(),z).subarray(Number(ke)>>>0,Number(Ue)>>>0)):[]})},1012064:(d,f)=>{t.$b("GlobalAveragePool",d,{format:f?"NHWC":"NCHW"})},1012155:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We)=>{t.$b("AveragePool",d,{format:We?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),z).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((v(),z).subarray(Number(ke)>>>0,Number(Ue)>>>0)):[]})},1012634:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1012721:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We)=>{t.$b("MaxPool",d,{format:We?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),z).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((v(),z).subarray(Number(ke)>>>0,Number(Ue)>>>0)):[]})},1013196:(d,f)=>{t.$b("GlobalMaxPool",d,{format:f?"NHWC":"NCHW"})},1013283:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We)=>{t.$b("MaxPool",d,{format:We?"NHWC":"NCHW",auto_pad:f,ceil_mode:x,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),z).subarray(Number(A)>>>0,Number(B)>>>0)):[],kernel_shape:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(te)>>>0)):[],pads:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],strides:ke?Array.from((v(),z).subarray(Number(ke)>>>0,Number(Ue)>>>0)):[]})},1013758:(d,f,x,_,E)=>{t.$b("Gemm",d,{alpha:f,beta:x,transA:_,transB:E})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,f,x,_)=>{t.$b("ArgMax",d,{keepDims:!!f,selectLastIndex:!!x,axis:_})},1014024:(d,f,x,_)=>{t.$b("ArgMin",d,{keepDims:!!f,selectLastIndex:!!x,axis:_})},1014132:(d,f)=>{t.$b("Softmax",d,{axis:f})},1014195:(d,f)=>{t.$b("Concat",d,{axis:f})},1014255:(d,f,x,_,E)=>{t.$b("Split",d,{axis:f,numOutputs:x,splitSizes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,f)=>{t.$b("Gather",d,{axis:Number(f)})},1014536:(d,f)=>{t.$b("GatherElements",d,{axis:Number(f)})},1014615:(d,f)=>{t.$b("GatherND",d,{batch_dims:Number(f)})},1014694:(d,f,x,_,E,A,B,Y,te,oe,$e)=>{t.$b("Resize",d,{antialias:f,axes:x?Array.from((v(),z).subarray(Number(x)>>>0,Number(_)>>>0)):[],coordinateTransformMode:ie(E),cubicCoeffA:A,excludeOutside:B,extrapolationValue:Y,keepAspectRatioPolicy:ie(te),mode:ie(oe),nearestMode:ie($e)})},1015056:(d,f,x,_,E,A,B)=>{t.$b("Slice",d,{starts:f?Array.from((v(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[],ends:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[],axes:A?Array.from((v(),z).subarray(Number(A)>>>0,Number(B)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,f,x)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:x?"NHWC":"NCHW"})},1015486:(d,f,x)=>{t.$b("InstanceNormalization",d,{epsilon:f,format:x?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,f)=>{t.$b("Einsum",d,{equation:ie(f)})},1015734:(d,f,x,_,E)=>{t.$b("Pad",d,{mode:f,value:x,pads:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1015877:(d,f,x,_,E,A)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:x,spatial:!!E,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016046:(d,f,x,_,E,A)=>{t.$b("BatchNormalization",d,{epsilon:f,momentum:x,spatial:!!E,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016215:(d,f,x)=>{t.$b("CumSum",d,{exclusive:Number(f),reverse:Number(x)})},1016312:(d,f,x)=>{t.$b("DequantizeLinear",d,{axis:f,blockSize:x})},1016402:(d,f,x,_,E)=>{t.$b("GridSample",d,{align_corners:f,mode:ie(x),padding_mode:ie(_),format:E?"NHWC":"NCHW"})},1016572:(d,f,x,_,E)=>{t.$b("GridSample",d,{align_corners:f,mode:ie(x),padding_mode:ie(_),format:E?"NHWC":"NCHW"})},1016742:(d,f)=>{t.$b("ScatterND",d,{reduction:ie(f)})},1016827:(d,f,x,_,E,A,B,Y,te)=>{t.$b("Attention",d,{numHeads:f,isUnidirectional:x,maskFilterValue:_,scale:E,doRotary:A,qkvHiddenSizes:B?Array.from((v(),z).subarray(Number(Y)>>>0,Number(Y)+B>>>0)):[],pastPresentShareBuffer:!!te})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We,fn,Ss)=>{t.$b("Conv",d,{format:ke?"NHWC":"NCHW",auto_pad:f,dilations:x?Array.from((v(),z).subarray(Number(x)>>>0,Number(_)>>>0)):[],group:E,kernel_shape:A?Array.from((v(),z).subarray(Number(A)>>>0,Number(B)>>>0)):[],pads:Y?Array.from((v(),z).subarray(Number(Y)>>>0,Number(te)>>>0)):[],strides:oe?Array.from((v(),z).subarray(Number(oe)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Ue)>>>0],activation:ie(We),activation_params:fn?Array.from((v(),Z).subarray(Number(fn)>>>0,Number(Ss)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,f,x,_,E,A,B,Y,te)=>{t.$b("GroupQueryAttention",d,{numHeads:f,kvNumHeads:x,scale:_,softcap:E,doRotary:A,rotaryInterleaved:B,smoothSoftmax:Y,localWindowSize:te})},1018124:(d,f,x,_)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:x,simplified:!!_})},1018235:(d,f,x,_)=>{t.$b("LayerNormalization",d,{axis:f,epsilon:x,simplified:!!_})},1018346:(d,f,x,_,E,A)=>{t.$b("MatMulNBits",d,{k:f,n:x,accuracyLevel:_,bits:E,blockSize:A})},1018473:(d,f,x,_,E,A)=>{t.$b("MultiHeadAttention",d,{numHeads:f,isUnidirectional:x,maskFilterValue:_,scale:E,doRotary:A})},1018632:(d,f)=>{t.$b("QuickGelu",d,{alpha:f})},1018696:(d,f,x,_,E)=>{t.$b("RotaryEmbedding",d,{interleaved:!!f,numHeads:x,rotaryEmbeddingDim:_,scale:E})},1018835:(d,f,x)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!x})},1018937:(d,f,x)=>{t.$b("SkipLayerNormalization",d,{epsilon:f,simplified:!!x})},1019039:(d,f,x,_)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:f,quantizeAxis:x,blockSize:_})},1019160:d=>{t.Fd(d)},1019194:(d,f)=>t.Hd(Number(d),Number(f),t.Yc.Kd,t.Yc.errors)};function O$(d,f,x){return tg(async()=>{await t.Dd(Number(d),Number(f),Number(x))})}function z$(){return typeof wasmOffsetConverter<"u"}function N$(d,f,x,_){var E=Se();try{return Pg(d,f,x,_)}catch(A){if(ve(E),A!==A+0)throw A;Me(1,0)}}function B$(d,f,x){var _=Se();try{return Og(d,f,x)}catch(E){if(ve(_),E!==E+0)throw E;Me(1,0)}}function P$(d){var f=Se();try{Cg(d)}catch(x){if(ve(f),x!==x+0)throw x;Me(1,0)}}function D$(d,f){var x=Se();try{return $s(d,f)}catch(_){if(ve(x),_!==_+0)throw _;Me(1,0)}}function U$(d,f,x){var _=Se();try{kg(d,f,x)}catch(E){if(ve(_),E!==E+0)throw E;Me(1,0)}}function L$(d,f){var x=Se();try{Dg(d,f)}catch(_){if(ve(x),_!==_+0)throw _;Me(1,0)}}function F$(d,f,x,_,E,A,B){var Y=Se();try{return Ng(d,f,x,_,E,A,B)}catch(te){if(ve(Y),te!==te+0)throw te;Me(1,0)}}function G$(d,f,x,_,E,A){var B=Se();try{Ag(d,f,x,_,E,A)}catch(Y){if(ve(B),Y!==Y+0)throw Y;Me(1,0)}}function W$(d,f,x,_){var E=Se();try{Bg(d,f,x,_)}catch(A){if(ve(E),A!==A+0)throw A;Me(1,0)}}function q$(d,f,x,_,E){var A=Se();try{Rg(d,f,x,_,E)}catch(B){if(ve(A),B!==B+0)throw B;Me(1,0)}}function V$(d,f,x,_,E,A,B){var Y=Se();try{Lg(d,f,x,_,E,A,B)}catch(te){if(ve(Y),te!==te+0)throw te;Me(1,0)}}function H$(d,f,x,_,E,A,B){var Y=Se();try{Fg(d,f,x,_,E,A,B)}catch(te){if(ve(Y),te!==te+0)throw te;Me(1,0)}}function j$(d,f,x,_,E,A,B,Y){var te=Se();try{Vg(d,f,x,_,E,A,B,Y)}catch(oe){if(ve(te),oe!==oe+0)throw oe;Me(1,0)}}function K$(d,f,x,_,E){var A=Se();try{return Ug(d,f,x,_,E)}catch(B){if(ve(A),B!==B+0)throw B;Me(1,0)}}function Y$(d,f,x){var _=Se();try{return Hg(d,f,x)}catch(E){if(ve(_),E!==E+0)throw E;Me(1,0)}}function X$(d,f,x,_,E,A,B,Y){var te=Se();try{jg(d,f,x,_,E,A,B,Y)}catch(oe){if(ve(te),oe!==oe+0)throw oe;Me(1,0)}}function Z$(d,f,x,_,E,A,B,Y,te,oe,$e,ke){var Ue=Se();try{Gg(d,f,x,_,E,A,B,Y,te,oe,$e,ke)}catch(We){if(ve(Ue),We!==We+0)throw We;Me(1,0)}}function Q$(d,f,x,_,E,A){var B=Se();try{return Wg(d,f,x,_,E,A)}catch(Y){if(ve(B),Y!==Y+0)throw Y;Me(1,0)}}function J$(d,f,x){var _=Se();try{return Kg(d,f,x)}catch(E){if(ve(_),E!==E+0)throw E;return Me(1,0),0n}}function ev(d,f,x,_,E,A,B,Y,te){var oe=Se();try{zg(d,f,x,_,E,A,B,Y,te)}catch($e){if(ve(oe),$e!==$e+0)throw $e;Me(1,0)}}function tv(d){var f=Se();try{return Yg(d)}catch(x){if(ve(f),x!==x+0)throw x;Me(1,0)}}function nv(d,f){var x=Se();try{return c0(d,f)}catch(_){if(ve(x),_!==_+0)throw _;return Me(1,0),0n}}function rv(d){var f=Se();try{return Xg(d)}catch(x){if(ve(f),x!==x+0)throw x;return Me(1,0),0n}}function iv(d,f,x,_){var E=Se();try{return n0(d,f,x,_)}catch(A){if(ve(E),A!==A+0)throw A;Me(1,0)}}function av(d,f,x,_,E){var A=Se();try{return r0(d,f,x,_,E)}catch(B){if(ve(A),B!==B+0)throw B;Me(1,0)}}function ov(d,f,x,_,E,A){var B=Se();try{return i0(d,f,x,_,E,A)}catch(Y){if(ve(B),Y!==Y+0)throw Y;Me(1,0)}}function sv(d,f,x,_,E,A){var B=Se();try{return a0(d,f,x,_,E,A)}catch(Y){if(ve(B),Y!==Y+0)throw Y;Me(1,0)}}function uv(d,f,x,_,E,A,B,Y){var te=Se();try{return qg(d,f,x,_,E,A,B,Y)}catch(oe){if(ve(te),oe!==oe+0)throw oe;Me(1,0)}}function lv(d,f,x,_,E){var A=Se();try{return o0(d,f,x,_,E)}catch(B){if(ve(A),B!==B+0)throw B;return Me(1,0),0n}}function cv(d,f,x,_){var E=Se();try{return s0(d,f,x,_)}catch(A){if(ve(E),A!==A+0)throw A;Me(1,0)}}function dv(d,f,x,_){var E=Se();try{return u0(d,f,x,_)}catch(A){if(ve(E),A!==A+0)throw A;Me(1,0)}}function hv(d,f,x,_,E,A,B,Y,te,oe,$e,ke){var Ue=Se();try{return l0(d,f,x,_,E,A,B,Y,te,oe,$e,ke)}catch(We){if(ve(Ue),We!==We+0)throw We;Me(1,0)}}function pv(d,f,x,_,E,A,B,Y,te,oe,$e){var ke=Se();try{e0(d,f,x,_,E,A,B,Y,te,oe,$e)}catch(Ue){if(ve(ke),Ue!==Ue+0)throw Ue;Me(1,0)}}function fv(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We,fn,Ss){var wv=Se();try{t0(d,f,x,_,E,A,B,Y,te,oe,$e,ke,Ue,We,fn,Ss)}catch(Ms){if(ve(wv),Ms!==Ms+0)throw Ms;Me(1,0)}}function mv(d,f,x){var _=Se();try{return Zg(d,f,x)}catch(E){if(ve(_),E!==E+0)throw E;Me(1,0)}}function gv(d,f,x){var _=Se();try{return Qg(d,f,x)}catch(E){if(ve(_),E!==E+0)throw E;Me(1,0)}}function yv(d,f,x,_){var E=Se();try{Jg(d,f,x,_)}catch(A){if(ve(E),A!==A+0)throw A;Me(1,0)}}function $i(){if(0<Ve)He=$i;else if(i)y==null||y(t),q();else{for(var d=Oe;0<d.length;)d.shift()(t);0<Ve?He=$i:(t.calledRun=!0,k||(q(),y==null||y(t)))}}return i||(Zt=await ue(),$i()),t.PTR_SIZE=4,U?t:new Promise((d,f)=>{y=d,w=f})}var Ks,Ys,D0=ee(()=>{var e,t;Ks=js,Ys=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ys&&js()}),Ai,Ri,Xs,lt,Zs,Cr,Qs,Js,Oi,eu,zi,tu,Ni,nu,Bi=ee(()=>{Ii(),Ai=typeof location>"u"?void 0:location.origin,Ri=self.location.href>"file:"&&self.location.href<"file;",Xs=()=>{{if(Ri){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ai).href}return self.location.href}},lt=Xs(),Zs=()=>{if(lt&&!lt.startsWith("blob:"))return lt.substring(0,lt.lastIndexOf("/")+1)},Cr=(e,t)=>{try{let n=t??lt;return(n?new URL(e,n):new URL(e)).origin===Ai}catch{return!1}},Qs=(e,t)=>{let n=t??lt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Js=(e,t)=>`${t??"./"}${e}`,Oi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},eu=async e=>(await import(e)).default,zi=(P0(),er(qs)).default,tu=async()=>{if(!lt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Cr(lt))return[void 0,zi()];let e=await Oi(lt);return[e,zi(e)]},Ni=(D0(),er(Hs)).default,nu=async(e,t,n,r)=>{let i=Ni&&!(e||t);if(i)if(lt)i=Cr(lt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Ni];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??Qs(a,t),s=n&&o&&!Cr(o,t),u=s?await Oi(o):o??Js(a,t);return[s?u:void 0,await eu(u)]}}}),Pi,Ar,rr,Di,ru,iu,au,Ui,Fe,wn=ee(()=>{Bi(),Ar=!1,rr=!1,Di=!1,ru=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},iu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},au=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ui=async e=>{if(Ar)return Promise.resolve();if(rr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Di)throw new Error("previous call to 'initializeWebAssembly()' failed.");rr=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!au())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!iu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ru();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[c,p]=await nu(s,a,n>1,!!h||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,w)=>{let b={numThreads:n};if(h)b.wasmBinary=h,b.locateFile=$=>$;else if(l||a)b.locateFile=$=>l??a+$;else if(s&&s.indexOf("blob:")!==0)b.locateFile=$=>new URL($,s).href;else if(c){let $=Zs();$&&(b.locateFile=M=>$+M)}p(b).then($=>{rr=!1,Ar=!0,Pi=$,y(),c&&URL.revokeObjectURL(c)},$=>{rr=!1,Di=!0,w($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Fe=()=>{if(Ar&&Pi)return Pi;throw new Error("WebAssembly is not initialized yet.")}}),_t,Rr,ze,Li=ee(()=>{wn(),_t=(e,t)=>{let n=Fe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Rr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Rr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ze=e=>{let t=Fe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),ou,U0=ee(()=>{wn(),Li(),ou=e=>{let t=Fe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=_t(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&ze("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Rr(e.extra,"",new WeakSet,(o,s)=>{let u=_t(o,r),l=_t(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&ze(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),su,uu,lu,_n,cu,du,L0=ee(()=>{wn(),Li(),su=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},uu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},lu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},_n=(e,t,n,r)=>{let i=_t(t,r),a=_t(n,r);Fe()._OrtAddSessionConfigEntry(e,i,a)!==0&&ze(`Can't set a session config entry: ${t} - ${n}.`)},cu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",_n(e,"session.disable_quant_qdq","1",n),_n(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&_n(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);_n(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=_t(a,n),u=o.length,l=0,h=0;if(u>0){l=Fe()._malloc(u*Fe().PTR_SIZE),n.push(l),h=Fe()._malloc(u*Fe().PTR_SIZE),n.push(h);for(let c=0;c<u;c++)Fe().setValue(l+c*Fe().PTR_SIZE,o[c][0],"*"),Fe().setValue(h+c*Fe().PTR_SIZE,o[c][1],"*")}await Fe()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&ze(`Can't append execution provider: ${a}.`)}},du=async e=>{let t=Fe(),n=0,r=[],i=e||{};lu(i);try{let a=su(i.graphOptimizationLevel??"all"),o=uu(i.executionMode??"sequential"),s=typeof i.logId=="string"?_t(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?_t(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&ze("Can't create session options."),i.executionProviders&&await cu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);_n(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let m=_t(c,r);t._OrtAddFreeDimensionOverride(n,m,p)!==0&&ze(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Rr(i.extra,"",new WeakSet,(c,p)=>{_n(n,c,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ze("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),bn,Lt,xn,Or,zr,Fi,Gi,Wi,ye=ee(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Lt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},xn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Or=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},zr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Gi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),qi,hu=ee(()=>{Ii(),qi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),pu,fu,mu,gu,Vi,yu,Te,Ft=ee(()=>{ye(),pu=["V","I","W","E","F"],fu=(e,t)=>{console.log(`[${pu[e]},${new Date().toISOString()}]${t}`)},Vi=(e,t)=>{mu=e,gu=t},yu=(e,t)=>{let n=zr(e),r=zr(mu);n>=r&&fu(n,typeof t=="function"?t():t)},Te=(...e)=>{gu&&yu(...e)}}),wu,Pn,H,Nr,_u,bu,xu,we=ee(()=>{wu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Pn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=wu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},H=class vi{static size(t){return vi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return vi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return vi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Nr=class Er{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Er.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Er.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Er.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Er.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},_u=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Pn.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},bu=-34028234663852886e22,xu=34028234663852886e22}),Hi,$u=ee(()=>{ye(),Hi=(e,t)=>new(Or(t))(e)}),ji,Ki,Yi,vu,Xi,Su,Zi,Qi,Ji,Mu,Tu,F0=ee(()=>{ye(),Ft(),ji=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ki=(e,t)=>{if(t==="int32")return e;let n=ji.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Or(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Yi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},vu=1,Xi=()=>vu++,Su=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Zi=(e,t)=>{let n=ji.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Zi(this.dataType,this.tensorShape)}destroy(){Te("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Yi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Ji=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=Su.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Te("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Zi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ki(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Te("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Yi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Mu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Xi();return this.tensorTrackersById.set(e,new Ji(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Te("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Te("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Xi(),o=new Qi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Ji(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Te("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}Te("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Qi({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Tu=(...e)=>new Mu(...e)}),ir,Eu,Iu,G0=ee(()=>{ye(),wn(),$u(),F0(),Ft(),ir=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Eu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Iu=class{constructor(e){this.tensorManager=Tu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Vi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Te("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Te("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Te("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Eu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Te("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=ir.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Te("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=ir.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Fe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Te("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Hi(n,t)}}registerMLTensor(e,t,n,r){let i=ir.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Te("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let c=Ki(new Uint8Array(l),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Te("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=ir.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ea=ee(()=>{}),ta,Br,Pr,ku,Cu,na,ra,Au,Ru,W0=ee(()=>{Ft(),ea(),ta=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Br=[],Pr=e=>Math.ceil(Number(e)/16)*16,ku=e=>{for(let t=0;t<Br.length;t++){let n=Br[t];if(e<=n)return n}return Math.ceil(e/16)*16},Cu=1,na=()=>Cu++,ra=async(e,t,n,r)=>{let i=Pr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Au=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ta)Br.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Pr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Te("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Pr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=na();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Te("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=ku(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:na(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Te("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Te("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await ra(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ta.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Te("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ru=(...e)=>new Au(...e)}),Ou,Re,Xe=ee(()=>{Ou=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Ou(e)}),Dn,Dr,Ze,nt,de,Ke,ia,Un,Jt,ce,ar,X,le,zu,aa,Nu,Bu,_e=ee(()=>{ye(),we(),Dn=64,Dr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ze=(e,t=1)=>{let n=Dr(e,t);return typeof n=="string"?n:n[0]},nt=(e,t=1)=>{let n=Dr(e,t);return typeof n=="string"?n:n[1]},de=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:H.computeStrides(n)})}),t},Ke=e=>e%4===0?4:e%2===0?2:1,ia=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Un=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Jt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ce=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,ar=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Dr(t,i),h=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:c,tensor:t},m=U=>typeof U=="string"?U:`${U}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,$="";for(let U=0;U<o-1;U++)$+=`
    let dim${U} = current / ${ce(b,U,o)};
    let rest${U} = current % ${ce(b,U,o)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;$+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=U=>(g.offsetToIndices=!0,o<2?U:`o2i_${e}(${U})`),T=[];if(o>=2)for(let U=o-1;U>=0;U--)T.push(`${ce(b,U,o)} * (indices[${U}])`);let k=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${T.join("+")};
  }`,I=U=>(g.indicesToOffset=!0,o<2?U:`i2o_${e}(${U})`),v=(...U)=>o===0?"0u":`${p.indices}(${U.map(m).join(",")})`,C=(U,D)=>o<2?`${U}`:`${ce(U,D,o)}`,N=(U,D,q)=>o<2?`${U}=${q};`:`${ce(U,D,o)}=${q};`,F={},G=(U,D)=>{g.broadcastedIndicesToOffset=!0;let q=`${D.name}broadcastedIndicesTo${e}Offset`;if(q in F)return`${q}(${U})`;let L=[];for(let re=o-1;re>=0;re--){let ue=D.indicesGet("outputIndices",re+D.rank-o);L.push(`${C(b,re)} * (${ue} % ${C(w,re)})`)}return F[q]=`fn ${q}(outputIndices: ${D.type.indices}) -> u32 {
             return ${L.length>0?L.join("+"):"0u"};
           }`,`${q}(${U})`},V=(U,D)=>(()=>{if(p.storage===p.value)return`${e}[${U}]=${D};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${D}), select(0u, 0xFFFFFFFFu, ${D} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${D}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${D}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),z=U=>(()=>{if(p.storage===p.value)return`${e}[${U}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${U}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${U}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),j=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${z(`i2o_${e}(indices)`)};
  }`,Z=o<2?"":(()=>{let U=s.map(q=>`d${q}: u32`).join(", "),D=s.map(q=>`d${q}`).join(", ");return`
  fn get_${e}(${U}) -> ${h} {
    return get_${e}ByIndices(${v(D)});
  }`})(),O=(...U)=>{if(U.length!==o)throw new Error(`indices length must be ${o}`);let D=U.map(m).join(",");return o===0?z("0u"):o===1?z(D[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${D})`)},W=U=>o<2?z(U):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${U})`),R=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,K=o<2?"":(()=>{let U=s.map(q=>`d${q}: u32`).join(", "),D=s.map(q=>`d${q}`).join(", ");return`
  fn set_${e}(${U}, value: ${h}) {
    set_${e}ByIndices(${v(D)}, value);
  }`})();return{impl:()=>{let U=[],D=!1;return g.offsetToIndices&&(U.push(M),D=!0),g.indicesToOffset&&(U.push(k),D=!0),g.broadcastedIndicesToOffset&&(Object.values(F).forEach(q=>U.push(q)),D=!0),g.set&&(U.push(K),D=!0),g.setByIndices&&(U.push(R),D=!0),g.get&&(U.push(Z),D=!0),g.getByIndices&&(U.push(j),D=!0),!a&&D&&U.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${H.computeStrides(n).join(",")});`),U.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:I,broadcastedIndicesToOffset:G,indices:v,indicesGet:C,indicesSet:N,set:(...U)=>{if(U.length!==o+1)throw new Error(`indices length must be ${o}`);let D=U[o];if(typeof D!="string")throw new Error("value must be string");let q=U.slice(0,o).map(m).join(",");return o===0?V("0u",D):o===1?V(q[0],D):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${q}, ${D})`)},setByOffset:V,setByIndices:(U,D)=>o<2?V(U,D):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${D});`),get:O,getByOffset:z,getByIndices:W,usage:r,name:e,strides:b,shape:w,rank:o}},X=(e,t,n,r=1)=>ar(e,t,n,"input",r),le=(e,t,n,r=1)=>ar(e,t,n,"output",r),zu=(e,t,n)=>ar(e,t,n,"atomicOutput",1),aa=(e,t,n,r=1)=>ar(e,t,n,"internal",r),Nu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Dn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Bu=(e,t)=>new Nu(e,t)}),Pu,oa,Du,Uu,Lu,Fu,ct,Gu,Wu,en=ee(()=>{ye(),we(),Xe(),_e(),Pu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},oa=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Du=(e,t)=>H.sortBasedOnPerm(e,oa(e.length,t)),Uu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Lu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Fu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ct=(e,t)=>{let n=e.dataType,r=e.dims.length,i=oa(r,t),a=Du(e.dims,i),o=e.dims,s=a,u=r<2||Fu(i,e.dims),l;if(u)return l=g=>{let y=X("input",n,o,4),w=le("output",n,s,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=H.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:h,newPerm:c}=Lu(e.dims,i),p=H.areEqual(c,[2,3,1]),m=H.areEqual(c,[3,1,2]);if(h.length===2||p||m){o=p?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let g=16;return l=y=>{let w=X("a",n,o.length),b=le("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=H.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/g),y:Math.ceil(s[0]/g)},programUniforms:[{type:12,data:y},...de(o,s)]}},getShaderSource:l}}return l=g=>{let y=X("a",n,o.length),w=le("output",n,s.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Uu(i,r,y,w)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=H.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...de(o,s)]}},getShaderSource:l}},Gu=(e,t)=>{Pu(e.inputs,t.perm),e.compute(ct(e.inputs[0],t.perm))},Wu=e=>Re({perm:e.perm})}),qu,Vu,Hu,ju,Ku,Yu,Xu,Zu,Qu,Ju,bt,el,tl,nl,rl,il,al,ol,sl,ul,ll,q0=ee(()=>{ye(),we(),_e(),ua(),en(),qu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Vu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Hu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ju={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ku=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Yu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Xu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Zu=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Qu=(e,t)=>{let n=[];if(!Zu(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Ju=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=H.size(a),l=H.size(o),h=X("_A",n[0].dataType,s),c=le("output",i,a),p=64;u===1&&(p=256);let m=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(h,c)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hu[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${qu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vu[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${ju[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},bt=(e,t,n,r)=>{let i=e.inputs.length===1?n:sa(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let o=H.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=Qu(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ct(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Ku(s.length,u.dims.length));let[h,c]=Yu(u.dims,s),p=h;i.keepDims&&(p=Xu(h,o)),e.compute(Ju(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},el=(e,t)=>{bt(e,"ReduceMeanShared",t,"mean")},tl=(e,t)=>{bt(e,"ReduceL1Shared",t,"l1")},nl=(e,t)=>{bt(e,"ReduceL2Shared",t,"l2")},rl=(e,t)=>{bt(e,"ReduceLogSumExpShared",t,"logSumExp")},il=(e,t)=>{bt(e,"ReduceMaxShared",t,"max")},al=(e,t)=>{bt(e,"ReduceMinShared",t,"min")},ol=(e,t)=>{bt(e,"ReduceProdShared",t,"prod")},sl=(e,t)=>{bt(e,"ReduceSumShared",t,"sum")},ul=(e,t)=>{bt(e,"ReduceSumSquareShared",t,"sumSquare")},ll=(e,t)=>{bt(e,"ReduceLogSumShared",t,"logSum")}}),xt,cl,Ur,sa,$t,dl,hl,pl,fl,ml,gl,yl,wl,_l,bl,vt,xl,$l,vl,Sl,Ml,Tl,El,Il,kl,Cl,ua=ee(()=>{ye(),we(),Xe(),_e(),q0(),xt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},cl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ur=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,c=H.normalizeAxes(i,h),p=!s&&c.length===0;l.forEach((y,w)=>{p||c.indexOf(w)>=0?o&&u.push(1):u.push(y)});let m=u.length,g=H.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=X("_A",n[0].dataType,h),$=le("output",a,m),M=r(b,$,c),S=M[2];for(let T=0,k=0;T<h;T++)p||c.indexOf(T)>=0?(o&&k++,S=`for(var j${T}: u32 = 0; j${T} < ${l[T]}; j${T}++) {
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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...de(l,u)]})}},sa=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},$t=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:sa(i,n);e.compute(Ur(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?cl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},dl=(e,t)=>{xt(e.inputs),$t(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},hl=(e,t)=>{xt(e.inputs),$t(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},pl=(e,t)=>{xt(e.inputs),$t(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},fl=(e,t)=>{xt(e.inputs),$t(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},ml=(e,t)=>{xt(e.inputs),$t(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},gl=(e,t)=>{xt(e.inputs),$t(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},yl=(e,t)=>{xt(e.inputs),$t(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},wl=(e,t)=>{xt(e.inputs),$t(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},_l=(e,t)=>{xt(e.inputs),$t(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},bl=(e,t)=>{xt(e.inputs),$t(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},vt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},xl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):el(e,t)},$l=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):tl(e,t)},vl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):nl(e,t)},Sl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):rl(e,t)},Ml=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):il(e,t)},Tl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):al(e,t)},El=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):ol(e,t)},Il=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):sl(e,t)},kl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bl(e,t):ul(e,t)},Cl=(e,t)=>{vt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dl(e,t):ll(e,t)}}),la,Al,Rl,ca,V0=ee(()=>{ye(),Xe(),ua(),la=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Al=(e,t)=>{la(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ur("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Rl=(e,t)=>{la(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ur("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ca=e=>Re(e)}),Ol,Lr,zl,Nl,Bl,or,Pl,Dl,da=ee(()=>{ye(),we(),ea(),_e(),Ol=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,m=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=g+y,b=-1,$=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:h,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Lr=(e,t,n)=>t&&e?`
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
    `,zl=(e,t,n,r,i,a,o,s)=>{let u=Ke(o?1:a),l=64,h=a/u;h<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:c}],m=Ze(e.dataType,u),g=nt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let $=le("x",e.dataType,e.dims,u),M=[$],S=o?X("seq_lens",o.dataType,o.dims):void 0;S&&M.push(S);let T=s?X("total_sequence_length_input",s.dataType,s.dims):void 0;T&&M.push(T);let k=nt(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Nl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,p,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=Ke(a.headSize),b=a.headSize/w,$=12,M={x:Math.ceil(l/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:g}],T=c&&r&&H.size(r.dims)>0,k=["type","type"];T&&k.push("type"),i&&k.push("type"),s&&k.push("type"),u&&k.push("type");let I=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&I.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=C=>{let N=X("q",t.dataType,t.dims,w),F=X("key",n.dataType,n.dims,w),G=[N,F];if(T){let R=X("past_key",r.dataType,r.dims,w);G.push(R)}i&&G.push(X("attention_bias",i.dataType,i.dims));let V=s?X("seq_lens",s.dataType,s.dims):void 0;V&&G.push(V);let z=u?X("total_sequence_length_input",u.dataType,u.dims):void 0;z&&G.push(z);let j=le("output",t.dataType,h),Z=[j];c&&Z.push(le("present_key",t.dataType,m,w));let O=nt(1,w),W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${N.type.storage}, ${$*$}>;
  ${C.registerUniforms(W).declareVariables(...G,...Z)}
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
    ${Lr(V,z,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${O}(0);
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
          value += ${O}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${j.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:I,dispatchGroup:M,programUniforms:S}),getShaderSource:v}},Bl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,p,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,h],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],$=c&&r&&H.size(r.dims)>0,M=["type","type"];$&&M.push("type"),o&&M.push("type"),s&&M.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let T=k=>{let I=X("probs",t.dataType,t.dims),v=X("v",n.dataType,n.dims),C=[I,v];$&&C.push(X("past_value",r.dataType,r.dims));let N=o?X("seq_lens",o.dataType,o.dims):void 0;o&&C.push(N);let F=s?X("total_sequence_length_input",s.dataType,s.dims):void 0;s&&C.push(F);let G=[le("output",t.dataType,g)];c&&G.push(le("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${I.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${I.type.value}, ${y*y}>;
  ${k.registerUniforms(V).declareVariables(...C,...G)}
  ${k.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Lr(N,F,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&c?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:b}),getShaderSource:T}},or=(e,t,n,r,i,a,o,s,u,l,h=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),m=p>1?o:void 0,g=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&H.size(u.dims)>0?u:void 0,$=[t,n];m&&H.size(m.dims)>0&&$.push(m),b&&$.push(b),h&&$.push(h),c&&$.push(c);let M=e.compute(Nl(p,t,n,m,b,l,y,h,c),{inputs:$,outputs:p>1?[-1,1]:[-1]})[0];e.compute(zl(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,h,c),{inputs:h&&c?[M,h,c]:[M],outputs:[]});let S=[M,r];g&&H.size(g.dims)>0&&S.push(g),h&&S.push(h),c&&S.push(c),e.compute(Bl(p,M,r,g,l,y,h,c),{inputs:S,outputs:p>1?[0,2]:[0]})},Pl=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let p=le("output_q",u[0].dataType,n),m=le("output_k",u[0].dataType,n),g=le("output_v",u[0].dataType,n),y=X("input",u[0].dataType,u[0].dims),w=X("weight",u[1].dataType,u[1].dims),b=X("bias",u[2].dataType,u[2].dims),$=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${$}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${$}, ${o*o}>;
  var<workgroup> tileWeightK: array<${$}, ${o*o}>;
  var<workgroup> tileWeightV: array<${$}, ${o*o}>;
  ${c.registerUniforms(M).declareVariables(y,w,b,p,m,g)}
  ${c.mainStart([o,o,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Dl=(e,t)=>{let n=Ol(e.inputs,t),[r,i,a]=Pl(e,n);return or(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Ul,Ll,Fl,Gl,H0=ee(()=>{ft(),ye(),we(),Xe(),_e(),Ul=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Ll=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Ke(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=H.size(a)/o,l=r,h=l?a.length:a,c=X("x",e[0].dataType,e[0].dims,o),p=X("scale",e[1].dataType,e[1].dims,s),m=X("bias",e[2].dataType,e[2].dims,s),g=X("inputMean",e[3].dataType,e[3].dims,s),y=X("inputVar",e[4].dataType,e[4].dims,s),w=le("y",e[0].dataType,h,o),b=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)M+=`cIndices[${S}] = outputIndices[${S}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},$=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(c,p,m,g,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${o}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...de(a)]:[{type:12,data:u}]})}},Fl=e=>Re(e),Gl=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Fl({...t,outputCount:r});if(Le.webgpu.validateInputContent&&Ul(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ll(n,i))}}),Wl,ql,Vl,j0=ee(()=>{we(),_e(),Wl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ql=e=>{let t=e[0].dims,n=e[0].dims[2],r=H.size(t)/4,i=e[0].dataType,a=X("input",i,t,4),o=X("bias",i,[n],4),s=X("residual",i,t,4),u=le("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Vl=e=>{Wl(e.inputs),e.compute(ql(e.inputs))}}),Hl,Ce,jl,Kl,Yl,Xl,Zl,Ql,Jl,ec,tc,nc,rc,ic,ac,oc,sr,sc,Fr,uc,lc,cc,dc,hc,pc,fc,mc,gc,yc,wc,_c,bc,xc,$c,vc,ha,Sc,pa,fa,Mc,Tc,Ec,Ic,kc,Cc,ma=ee(()=>{ye(),we(),Xe(),_e(),Hl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=X("inputData",n,[s],4),h=le("outputData",r,[s],4),c=[{name:"vec_size",type:"u32"}];return o&&c.push(...o),`
      ${e.registerUniforms(c).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Ce=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(H.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Hl(l,H.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(H.size(l[0].dims)/64/4)},programUniforms:u})}},jl=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},Kl=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},Yl=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},Xl=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},Zl=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},Ql=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},Jl=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},ec=e=>Re(e),tc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},nc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},rc=(e,t)=>{let n=t||nc(e.inputs),r=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},ic=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},ac=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},oc=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},sr=e=>Re(e),sc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,uc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Fr(t)))},lc=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},cc=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},dc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Fr(t)))},hc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},pc=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},fc=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},mc=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},gc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},yc=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},wc=e=>Re(e),_c=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},bc=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},xc=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},$c=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},vc=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},ha=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Sc=e=>{e.compute(Ce(e.inputs[0],"Tanh",ha))},pa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ha("v")};
}
`,fa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Mc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",fa,pa(t),void 0,e.inputs[0].dataType))},Tc=(e,t)=>{let n=nt(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ec=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},Ic=(e,t)=>`
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
`,kc=e=>`quick_gelu_impl(${e})`,Cc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",kc,Ic(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ac,Rc,Oc,K0=ee(()=>{we(),_e(),ma(),Ac=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Rc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=X("input",e[0].dataType,e[0].dims,4),r=X("bias",e[0].dataType,[e[0].dims[2]],4),i=le("output",e[0].dataType,t,4),a=H.size(t)/4,o=Ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
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
  }`}},Oc=e=>{Ac(e.inputs),e.compute(Rc(e.inputs))}}),zc,Nc,St,Bc,Pc,Dc,Uc,Lc,Fc,Gc,Wc,qc,Vc,Y0=ee(()=>{ye(),we(),_e(),zc=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p,m;typeof s=="string"?p=m=($,M)=>`${s}((${$}),(${M}))`:typeof s=="function"?p=m=s:(p=s.scalar,m=s.vector);let g=le("outputData",h,r.length,4),y=X("aData",u,t.length,4),w=X("bData",l,n.length,4),b;if(i)if(a){let $=H.size(t)===1,M=H.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;$||M?b=g.setByOffset("global_idx",m($?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
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

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},Nc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!H.areEqual(s,u),h=s,c=H.size(s),p=!1,m=!1,g=[l];if(l){let y=Pn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),c=H.size(h);let w=H.size(s)===1,b=H.size(u)===1,$=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;g.push(w),g.push(b),g.push($),g.push(M);let S=1;for(let T=1;T<h.length;T++){let k=s[s.length-T],I=u[u.length-T];if(k===I)S*=k;else break}S%4===0?(m=!0,p=!0):(w||b||$||M)&&(p=!0)}else p=!0;return g.push(p),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>zc(y,s,u,h,p,l,m,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(H.size(h)/4)},...de(s,u,h)]})}},St=(e,t,n,r,i,a)=>{e.compute(Nc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Bc=e=>{St(e,"Add",(t,n)=>`${t}+${n}`)},Pc=e=>{St(e,"Div",(t,n)=>`${t}/${n}`)},Dc=e=>{St(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Uc=e=>{St(e,"Mul",(t,n)=>`${t}*${n}`)},Lc=e=>{let t=X("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;St(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Fc=e=>{St(e,"Sub",(t,n)=>`${t}-${n}`)},Gc=e=>{St(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Wc=e=>{St(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},qc=e=>{St(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Vc=e=>{St(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Hc,jc,Kc,Yc,Xc,Zc,X0=ee(()=>{ye(),we(),Xe(),_e(),Hc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},jc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Kc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Yc=(e,t,n,r)=>{let i=H.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=X(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...de(e[y].dims));h.push(...de(n));let c=le("output",r,n.length),p=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,c)})()}

  ${jc(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Kc(o,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:g}},Xc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=H.normalizeAxis(t.axis,r.length);Hc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>H.size(s.dims)>0);e.compute(Yc(o,i,a,n[0].dataType),{inputs:o})},Zc=e=>Re({axis:e.axis})}),$n,vn,Sn,ga,Mn=ee(()=>{ye(),we(),$n=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ga=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[bu,xu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,Qc,ya=ee(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Qc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Jc,Z0=ee(()=>{Jc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ur,wa,_a=ee(()=>{ye(),we(),_e(),Mn(),ur=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${ce(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,ce(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},wa=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],c=Ke(l),p=Ke(h),m=Ke(u),g=H.size(n)/c/m,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[H.size(w),u,l],$=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:h}];vn(t,$),$.push(...de(w,o,s)),y&&$.push(...de(e[2].dims)),$.push(...de(b));let M=S=>{let T=aa("batch_dims",e[0].dataType,w.length),k=X("a",e[0].dataType,o.length,p),I=X("b",e[1].dataType,s.length,c),v=le("output",e[0].dataType,b.length,c),C=Ze(v.type.tensor),N=$n(t,v.type.value,C),F=[k,I],G="";if(y){let j=i?c:1;F.push(X("bias",e[2].dataType,e[2].dims.length,j)),G=`${i?`value += bias[col / ${j}];`:`value += ${v.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,V);let z=()=>{let j=`var a_data: ${k.type.value};`;for(let Z=0;Z<p;Z++)j+=`
              let b_data${Z} = b[(b_offset + (k + ${Z}) * uniforms.N + col) / ${c}];`;for(let Z=0;Z<m;Z++){j+=`a_data = a[(a_offset + (row + ${Z}) * uniforms.K + k) / ${p}];`;for(let O=0;O<p;O++)j+=`
            values[${Z}] = fma(${I.type.value}(a_data${p===1?"":`[${O}]`}), b_data${O}, values[${Z}]);
`}return j};return`
  ${S.registerUniforms(V).registerInternalVariables(T).declareVariables(...F,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${ur("a_indices",k,k.rank-2,T.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${ur("b_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${z()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${G}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:M}}}),ed,td,ba,xa,nd,$a,rd,Gr,va=ee(()=>{ye(),we(),_e(),Mn(),_a(),ya(),ed=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,td=(e,t)=>e?`
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
        }`,ba=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,c=i?a:u,p=h/t[0],m=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${ed(i,r)}
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

          ${td(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},xa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,nd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",$a=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=p/t[1],g=c/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${xa(i,r)}
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
      ${xa(i,r)}
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
      ${nd(i)}
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
`},rd=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ze(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${ur("aIndices",o,o.rank-2,a.rank,"batchIndices")}
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
        ${ur("bIndices",s,s.rank-2,a.rank,"batchIndices")}
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
    `},Gr=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),c=H.size(h),p=o[o.length-2],m=o[o.length-1],g=s[s.length-1],y=m%4===0&&g%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],$=[Math.ceil(g/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(c/b[2]/w[2])],M=y?4:1,S=[...u,p,m/M],T=S.length,k=[...l,m,g/M],I=k.length,v=[c,p,g/M],C=[{type:6,data:p},{type:6,data:g},{type:6,data:m}];vn(t,C),C.push(...de(h,S,k));let N=["rank","rank"],F=e.length>2;F&&(C.push(...de(e[2].dims)),N.push("rank")),C.push(...de(v));let G=V=>{let z=h.length,j=aa("batchDims",e[0].dataType,z,1),Z=Ze(e[0].dataType),O=X("a",e[0].dataType,T,M),W=X("b",e[1].dataType,I,M),R=le("result",e[0].dataType,v.length,M),K=[O,W];if(F){let re=i?M:1;K.push(X("bias",e[2].dataType,e[2].dims.length,re))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,U);let D=Ze(R.type.tensor),q=$n(t,R.type.value,D),L=rd(M,F,q,[j,O,W,R],i);return`
  ${V.registerUniforms(U).registerInternalVariables(j).declareVariables(...K,R)}
  ${L}
  ${y?ba(w,b,Z,j):$a(w,b,Z,j)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:C}),getShaderSource:G}}}),id,ad,Q0=ee(()=>{ye(),Ft(),_e(),Mn(),ya(),Z0(),va(),id=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},c=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},p=e?`
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
    return ${Je(o,l)}(0.0);`,S=e?r&&n?c(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(s)}
    }
    return ${Je(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(s)}
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
      ${Qc(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ad=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&g%4===0,w=l?g:p*m,b=l?p*m:g,$=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/$[0]/M[0]),Math.ceil(b/$[1]/M[1]),Math.ceil(c/$[2]/M[2])];Te("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let T=y?l&&h%4!==0?3:4:1,k=$[1]*M[1],I=$[0]*M[0],v=Math.max($[0]*T,$[1]),C=r%k===0,N=i%I===0,F=a%v===0,G=y?[T,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vn(t,V),V.push(...de(e[0].dims,e[1].dims));let z=["rank","rank"];o&&(V.push(...de(e[2].dims)),z.push("rank")),V.push(...de(n));let j=Z=>{let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,O);let W=y?4:1,R=Ze(e[0].dataType),K=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${R}>`:R}) {
        result[flatIndex] = ${y?`vec4<${R}>`:R}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${R}>`:R}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,U=X("x",e[0].dataType,e[0].dims.length,T===3?1:T),D=X("w",e[1].dataType,e[1].dims.length,W),q=[U,D],L=le("result",e[0].dataType,n.length,W);if(o){let re=X("bias",e[2].dataType,e[2].dims.length,W);q.push(re),K+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${R}>`:R} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Jc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Z.registerUniforms(O).declareVariables(...q,L)}
        ${K}
        ${id(l,C,N,F,o,t,G[0],G[1],G[2],R)}
        ${y?ba(M,$,R,void 0,!l,v):$a(M,$,R,void 0,!l,v,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${C};${N};${F};${k};${I};${v}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:V}),getShaderSource:j}}}),od,Sa,lr,sd,Ma,ud,ld,cd,J0=ee(()=>{ye(),Ft(),we(),_e(),Mn(),ya(),od=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Sa=e=>typeof e=="number"?[e,e,e]:e,lr=(e,t)=>t<=1?e:e+(e-1)*(t-1),sd=(e,t,n,r=1)=>{let i=lr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ma=(e,t,n,r,i)=>{i==null&&(i=sd(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},ud=(e,t,n,r,i,a,o,s,u,l)=>{let h,c,p,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Ma([t,n,r,1],[s,u,l],1,[i,a,o],e);c=g[0],p=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Ma([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);c=g[0],p=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let g=(c-1)*i+s-t,y=(p-1)*a+u-n,w=(m-1)*o+l-r,b=Math.floor(g/2),$=g-b,M=Math.floor(y/2),S=y-M,T=Math.floor(w/2),k=w-T;h={top:M,bottom:S,left:T,right:k,front:b,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:p,outWidth:m}},ld=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,c;if(o==="channelsLast")[s,u,l,h,c]=e;else if(o==="channelsFirst")[s,c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,m,g,y]=t,[w,b,$]=Sa(n),[M,S,T]=Sa(r),k=lr(m,M),I=lr(g,S),v=lr(y,T),{padInfo:C,outDepth:N,outHeight:F,outWidth:G}=ud(i,u,l,h,w,b,$,k,I,v),V=a?p*c:p,z=[0,0,0,0,0];return o==="channelsFirst"?z=[s,V,N,F,G]:o==="channelsLast"&&(z=[s,N,F,G,V]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:c,outDepth:N,outHeight:F,outWidth:G,outChannels:V,padInfo:C,strideDepth:w,strideHeight:b,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:k,effectiveFilterHeight:I,effectiveFilterWidth:v,dilationDepth:M,dilationHeight:S,dilationWidth:T,inShape:e,outShape:z,filterShape:t}},cd=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(od(u.x.map(w=>n[w]))/s[0]),1,1];Te("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,c=H.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];vn(t,p),p.push(...de(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(p.push(...de(e[2].dims)),m.push("rank")),p.push(...de(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,b);let $=1,M=Ze(e[0].dataType),S=X("x",e[0].dataType,e[0].dims.length,h),T=X("W",e[1].dataType,e[1].dims.length,$),k=[S,T],I=le("result",e[0].dataType,n.length,$),v="";if(g){let F=X("bias",e[2].dataType,e[2].dims.length,$);k.push(F),v+=`
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),dd,hd,ey=ee(()=>{ye(),we(),_e(),Mn(),dd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,c=u&&h>=4?Ke(l):1,p=H.size(n)/c,m=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];vn(t,m),m.push(...de(o,[s[0],s[1],s[2],s[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...de([n[0],n[1],n[2],n[3]/c]));let y=w=>{let b=le("output",e[0].dataType,n.length,c),$=Ze(b.type.tensor),M=$n(t,b.type.value,$),S=X("x",e[0].dataType,o.length),T=X("w",e[1].dataType,s.length,c),k=[S,T];i&&k.push(X("b",e[2].dataType,e[2].dims,c));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,I);let v=u?`
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
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${v}
    ${a}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},hd=(e,t,n,r)=>{let i=e.length>2,a=Ke(n[3]),o=Ke(n[2]),s=H.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vn(t,c),c.push(...de(u,l,h));let p=(o-1)*t.strides[1]+l[1],m=g=>{let y=le("output",e[0].dataType,h.length,a),w=Ze(y.type.tensor),b=$n(t,y.type.value,w),$=X("x",e[0].dataType,u.length,a),M=X("w",e[1].dataType,l.length,a),S=[$,M];i&&S.push(X("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,k),`
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:m}}}),pd,Wr,fd,qr,Ta,Ea,md,gd,Ia,ty=ee(()=>{we(),Q0(),J0(),va(),ey(),Mn(),_a(),en(),pd=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,m)=>p+(p-1)*(n[m]-1)),c=s.map((p,m)=>p+r[m]+r[m+u]).map((p,m)=>Math.floor((p-h[m]+i[m])/i[m]));return c.splice(0,0,o),c.splice(a?3:1,0,l),c},Wr=[2,3,1,0],fd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Nr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ta=e=>{let t=ga(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ea=(e,t,n,r)=>{let i=n.format==="NHWC",a=pd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let I=e.kernelCustomData.wT??e.compute(ct(t[1],Wr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),k.push(I)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(hd(k,n,a,r),{inputs:k}):e.compute(dd(k,n,a,r),{inputs:k});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&h===s&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=a[0],I,v,C,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(ct(t[1],Wr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),y){let z=s*u*l;I=t[0].reshape([1,k,z]),v=V.reshape([1,z,g]),C=[1,k,g]}else I=t[0].reshape([k,s*u,l]),v=V.reshape([1,l,g]),C=[k,p*m,g];N.push(I),N.push(v)}else I=t[0].reshape([k,l,s*u]),v=t[1].reshape([1,g,l]),C=[k,g,p*m],N.push(v),N.push(I);o&&N.push(t[2]);let F=C[2],G=N[0].dims[N[0].dims.length-1];F<8&&G<8?e.compute(wa(N,n,a,C,i,r),{inputs:N}):e.compute(Gr(N,n,a,C,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(ct(t[1],Wr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let $=[t[0],b];o&&$.push(t[2]);let M=i?p*m:g,S=i?g:p*m,T=h*c*l;e.compute(ad($,n,a,M,S,T,o,w,r),{inputs:$})},md=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=qr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Ea(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},gd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=qr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=ld(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(cd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Ia=(e,t)=>{if(fd(e.inputs,t),e.inputs[0].dims.length===3)md(e,t);else if(e.inputs[0].dims.length===5)gd(e,e.inputs,t);else{let n=qr(t,e.inputs);Ea(e,e.inputs,n)}}}),yd,ny=ee(()=>{ye(),Ft(),we(),_e(),yd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?Ke(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-p,g=a?Ke(l):1,y=a?l===1?h:g:1,w=H.size(i)/g,b=[Math.ceil(w/64),1,1];Te("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let $=["rank","rank"],M=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],k=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],I=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:w},{type:12,data:M},{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:6,data:I},{type:12,data:p},{type:12,data:u},{type:12,data:l},...de(e[0].dims,e[1].dims)];r&&(v.push(...de(e[2].dims)),$.push("rank")),v.push(...de(i));let C=N=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Ze(e[0].dataType),V=a?1:2,z=a?2:3,j=a?3:1,Z=X("W",e[1].dataType,e[1].dims.length,y),O=X("Dy",e[0].dataType,e[0].dims.length,h),W=[O,Z];r&&W.push(X("bias",e[2].dataType,[i[j]].length,g));let R=le("result",e[0].dataType,i.length,g),K=()=>{let q="";if(c)h===4?q+=`
        let xValue = ${O.getByOffset("x_offset")};
        let wValue = ${Z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?q+=`
          dotProd = dotProd + dot(vec4<${G}>(${O.getByOffset("x_offset")}, ${O.getByOffset("x_offset + 1u")}), vec4<${G}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(q+=`
          dotProd = dotProd + dot(vec4<${G}>(${O.getByOffset("x_offset")}, ${O.getByOffset("x_offset + 1u")}, ${O.getByOffset("x_offset + 2u")}, ${O.getByOffset("x_offset + 3u")}), vec4<${G}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}, ${Z.getByOffset("w_offset + 2u")}, ${Z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(q+=`
                  let xValue = ${a?O.getByOffset(`${O.indicesToOffset(`${O.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):O.get("batch","inputChannel","idyR","idyC")};
        `,h===1)q+=`
          let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Z.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let L=0;L<h;L++)q+=`
            let wValue${L} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${L}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${L}] * wValue${L};`;return q},U=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let q="";if(h===1){q+="dotProd = dotProd";for(let L=0;L<m;L++)q+=`
            + ${O.getByOffset(`x_offset + ${L}`)} * ${Z.getByOffset(`w_offset + ${L}`)}`;q+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);q+=`
          let xValue = ${O.getByOffset("x_offset")};
          let wValue = ${Z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return q},D=`
            let outputIndices = ${R.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${R.indicesGet("outputIndices",0)};
            let d1 = ${R.indicesGet("outputIndices",j)};
            let r = ${R.indicesGet("outputIndices",V)};
            let c = ${R.indicesGet("outputIndices",z)};
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
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${z}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${O.indicesToOffset(`${O.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${Z.indicesToOffset(`${Z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${K()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${R.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(F).declareVariables(...W,R)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${D}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${g}${c}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:C}}}),wd,_d,bd,ka,xd,$d,Ca,vd,Sd,ry=ee(()=>{ny(),Mn(),en(),wd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,_d=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},bd=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,c=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],m=t[s?3:1]*i;for(let g=0,y=e.length-h-(s?1:0);g<h;++g,++y){let w=e[y],b=c?w*o[g]:l[g],$=wd(w,o[g],a[g],t[y],n[g],b);_d($,r,a,g,g+h),c&&l.push(o[g]*(w-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+h])}l.splice(0,0,p),l.splice(s?3:1,0,m)},ka=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}bd(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},xd=e=>{let t=ga(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:c,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$d=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ca=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ct(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(yd(a,n,r),{inputs:a})},vd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=ka({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Ca(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Sd=(e,t)=>{if($d(e.inputs,t),e.inputs[0].dims.length===3)vd(e,t);else{let n=ka(t,e.inputs);Ca(e,e.inputs,n)}}}),Md,Td,Ed,iy=ee(()=>{ye(),we(),Xe(),_e(),Md=(e,t,n,r)=>{let i=H.size(t),a=t.length,o=X("input",e,a),s=le("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=H.normalizeAxis(u,a),h=c=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,m=ce("uniforms.input_shape","uniforms.axis",a),g=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?m:p+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,s)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...de(t,t)]}),getShaderSource:h}},Td=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Md(r,n,i,t),{inputs:[0]})},Ed=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Id,kd,Cd,Ad,Rd,ay=ee(()=>{ye(),we(),Xe(),_e(),Id=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},kd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Cd=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(o),p=c.dims.length,m=e.dataType,g=X("a",m,p),y=le("output",m,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(g,y)}

  ${kd(s,p,g,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let $=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=H.size($),S=c.dims,T=H.sortBasedOnPerm(S,s);return{outputs:[{dims:$,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...de(S,T)]}},getShaderSource:w}},Ad=(e,t)=>{Id(e.inputs),e.compute(Cd(e.inputs[0],t))},Rd=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Vr,cr,Aa,Od,zd,Nd,Bd,Ra,Pd,Dd,Ud,oy=ee(()=>{ye(),we(),Xe(),_e(),Vr="[a-zA-Z]|\\.\\.\\.",cr="("+Vr+")+",Aa="^"+cr+"$",Od="("+cr+",)*"+cr,zd="^"+Od+"$",Nd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Bd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(zd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Aa)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(cr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Vr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Aa))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Vr,"g")),l=new Nd(r);return u==null||u.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<o.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,c+m),this.addSymbol(g,n[s++],r)}}else l.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},Ra=e=>e+"_max",Pd=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>X(`input${h}`,t,l)),a=H.size(r),o=le("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],c="var prod = 1.0;",p="var sum = 0.0;",m="sum += prod;",g=[],y=[],w=[],b=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,T)=>{var k;if(n.rhs.symbolToIndices.has(T)){let I=(k=n.rhs.symbolToIndices.get(T))==null?void 0:k[0];I!==void 0&&n.lhs.forEach((v,C)=>{if(S.inputIndices.includes(C)){let N=v.symbolToIndices.get(T);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(F=>{h.push(`${i[C].indicesSet(`input${C}Indices`,F,o.indicesGet("outputIndices",I))}`)})}})}else n.lhs.forEach((I,v)=>{if(S.inputIndices.includes(v)){let C=I.symbolToIndices.get(T);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${T}`)}`)}),b.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Ra(T)}; ${T}++) {`),w.push("}")});let M=$?[...h,`let sum = ${i.map((S,T)=>S.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...h,p,...y,...g,c,...b,m,...w];return`
            ${l.registerUniforms(s.map(S=>({name:`${Ra(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((S,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((c,p)=>[...de(c)]).reduce((c,p)=>c.concat(p),l);return h.push(...de(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Dd=(e,t)=>{let n=new Bd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Pd(i,e.inputs[0].dataType,n,r))},Ud=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Ld,Oa,Fd,Gd,Wd,sy=ee(()=>{ye(),we(),_e(),Ld=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Oa=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Fd=(e,t)=>e.length>t.length?Oa(e,t):Oa(t,e),Gd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Fd(t,n),i=e[0].dataType,a=i===9||H.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(H.size(r)/s),l=c=>{let p=X("input",i,t.length,o),m=le("output",i,r.length,s),g;if(i===9){let y=(w,b,$="")=>`
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
    ${c.registerUniform("vec_size","u32").declareVariables(p,m)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},h=[{type:12,data:u},...de(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Wd=e=>{Ld(e.inputs),e.compute(Gd(e.inputs),{inputs:[0]})}}),qd,Vd,uy=ee(()=>{ye(),we(),_e(),ma(),qd=e=>{let t=e[0].dataType,n=H.size(e[0].dims),r=H.size(e[1].dims),i=r%4===0,a=o=>{let s=X("x",t,[1],4),u=X("bias",t,[1],4),l=le("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${pa(nt(t))}

    ${o.mainStart(Dn)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",fa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Dn/4)}})}},Vd=e=>{e.inputs.length<2||H.size(e.inputs[1].dims)===0?Mc(e):e.compute(qd(e.inputs))}}),Hd,jd,Kd,Yd,ly=ee(()=>{ye(),we(),Xe(),_e(),Hd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},jd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=H.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(H.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...de(e[0].dims,e[1].dims,o)],c=p=>{let m=X("data",e[0].dataType,e[0].dims.length,u),g=X("inputIndices",e[1].dataType,e[1].dims.length),y=le("output",e[0].dataType,o.length,u),w=$=>{let M=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let T=0;T<M;T++)S+=`${M>1?`indicesIndices${$}[${T}]`:`indicesIndices${$}`} = ${o.length>1?`outputIndices${$}[uniforms.axis + ${T}]`:`outputIndices${$}`};`;S+=`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},Kd=e=>Re({axis:e.axis}),Yd=(e,t)=>{let n=e.inputs;Hd(n),e.compute(jd(e.inputs,t))}}),Xd,Zd,Qd,cy=ee(()=>{ye(),we(),_e(),Xd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...de(t.dims,h));let c=p=>{let m=X("indices_data",t.dataType,t.dims.length),g=le("input_slice_offsets_data",12,1,1),y=[m,g],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Zd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=H.sizeToDimension(a,a.length-1),u=H.sizeFromDimension(r,t.batchDims+o),l=H.sizeToDimension(r,t.batchDims),h=H.sizeFromDimension(r,t.batchDims),c=s/l,p=new Array(o),m=u;for(let S=0;S<o;++S)p[o-1-S]=m,m*=r[t.batchDims+o-1-S];let g=Xd(e,n[1],p,t.batchDims,r,s,c,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=H.size(w),$=[{type:12,data:b},{type:12,data:u},...de(n[0].dims,g.dims,w)],M=S=>{let T=X("data",n[0].dataType,n[0].dims.length),k=X("slice_offsets",12,g.dims.length),I=le("output",n[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,k,I)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:$}),getShaderSource:M},{inputs:[n[0],g]})},Qd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Jd,eh,th,nh,dy=ee(()=>{ye(),we(),Xe(),_e(),Jd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=H.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},eh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=H.normalizeAxis(t.gatherAxis,i),o=H.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=H.size(s),l=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...de(...e.map((m,g)=>m.dims),s)],p=m=>{let g=X("data",e[0].dataType,e[0].dims.length),y=X("inputIndices",e[1].dataType,e[1].dims.length),w=X("scales",e[2].dataType,e[2].dims.length),b=e.length>3?X("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=le("output",l,s.length),M=[g,y,w];b&&M.push(b);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},th=(e,t)=>{let n=e.inputs;Jd(n,t),e.compute(eh(e.inputs,t))},nh=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),rh,ih,ah,oh,hy=ee(()=>{ye(),we(),Xe(),_e(),rh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ih=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=H.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=H.size(l),c=X("input",r,i),p=X("indicesInput",o,a.length),m=le("output",r,l.length),g=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return g.push(...de(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,p,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${p.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},ah=e=>Re({axis:e.axis}),oh=(e,t)=>{let n=e.inputs;rh(n),e.compute(ih(e.inputs,t))}}),sh,uh,lh,ch,py=ee(()=>{ye(),we(),_e(),sh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},uh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=_u.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),c=!0,p=H.size(s),m=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...de(e[2].dims)),g.push("rank")),m.push(...de(s));let y=b=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",S=X("a",e[0].dataType,e[0].dims),T=X("b",e[1].dataType,e[1].dims),k=S.type.value,I=null,v=[S,T];e.length===3&&(I=X("c",e[2].dataType,e[2].dims.length),v.push(I));let C=le("output",e[0].dataType,s.length);v.push(C);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
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
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:y}},lh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ch=(e,t)=>{sh(e.inputs),e.compute(uh(e.inputs,t))}}),At,Gt,Tn,En,dh,hh,ph,fh,mh,gh,yh,wh,_h,bh,fy=ee(()=>{ye(),we(),Xe(),_e(),[At,Gt,Tn,En]=[0,1,2,3],dh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},hh=`
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
`,ph=e=>`
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
`,fh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,mh=e=>`
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
`,gh=(e,t,n)=>`
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
`,yh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,wh=(e,t)=>{let n=X("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=X("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[At,Gt,Tn,En]=[0,3,1,2]);let o=le("output",e[0].dataType,a.length),s=n.type.value,u=H.size(a),l=[{type:12,data:u},...de(e[0].dims,r,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${hh}
  ${ph(s)}
  ${fh(t)}
  ${mh(t)}
  ${gh(n,s,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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

      ${yh(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=H.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},_h=(e,t)=>{dh(e.inputs),e.compute(wh(e.inputs,t))},bh=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),rt,xh,$h,za,vh,dr,Sh,Mh=ee(()=>{ye(),we(),Xe(),ea(),da(),_e(),en(),rt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,xh=(e,t)=>{let n=e[0],r=rt(e,1),i=rt(e,2),a=rt(e,3),o=rt(e,4),s=rt(e,5),u=rt(e,6),l=rt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&H.size(u.dims)&&H.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&H.size(u.dims)||l&&H.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&H.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&H.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,M=0;if(o&&H.size(o.dims)>0){M=8;let I=o.dims;throw I.length===1?I[0]===h?M=1:I[0]===3*h+2&&(M=3):I.length===2&&I[0]===h&&I[1]===$&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,T=p;if(i&&H.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let k=!1;if(o&&H.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&H.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==c||s.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:k,passPastInKv:S,qkvFormat:b}},$h=e=>Re({...e}),za=Re({perm:[0,2,1,3]}),vh=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=H.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=c=>{let p=le("qkv_with_bias",t.dataType,s),m=X("qkv",t.dataType,s),g=X("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(m,g,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},dr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&H.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=vh(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(ct(u,za.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(ct(u,za.perm),{inputs:[u],outputs:[-1]})[0]},Sh=(e,t)=>{let n=xh(e.inputs,t),r=e.inputs[0],i=rt(e.inputs,1),a=rt(e.inputs,2),o=rt(e.inputs,3),s=rt(e.inputs,4),u=rt(e.inputs,5),l=rt(e.inputs,6),h=rt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=dr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(c)return or(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=dr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),g=dr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);or(e,p,m,g,s,void 0,l,h,u,n)}}),Th,Eh,Ih,kh,Na,Ch,Ah,Rh=ee(()=>{ye(),we(),Xe(),_e(),Th=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Eh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Ih=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ce("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,kh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Na=(e,t)=>{let n=e[0].dims,r=H.size(n),i=e[0].dataType,a=H.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=X("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],c=0,p=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let y=n.slice();y[a]=t.splitSizes[g],h.push(y),o[g]=le(`output${g}`,i,y.length),l.push({dims:h[g],dataType:e[0].dataType})}p.push({type:12,data:u},...de(n,...h));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Ih(u.length)}
  ${kh(o)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Ch=(e,t)=>{Th(e.inputs);let n=e.inputs.length===1?t:Eh(e.inputs,t);e.compute(Na(e.inputs,n),{inputs:[0]})},Ah=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Oh,Hr,zh,Nh=ee(()=>{ye(),we(),Xe(),_e(),Oh=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!H.areEqual(r.dims,[])&&!H.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!H.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],c=H.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:c/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Hr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=H.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],c=i===0?h*2:l/r,p=new Array(o,u,l/c,c-h),m=H.computeStrides(p),g=[{type:1,data:a},{type:12,data:p},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[s,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,c,u*c,1]}):[],...de(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=X("input",e[0].dataType,e[0].dims.length),$=X("position_ids",e[1].dataType,e[1].dims.length),M=X("cos_cache",e[2].dataType,e[2].dims.length),S=X("sin_cache",e[3].dataType,e[3].dims.length),T=le("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables(b,$,M,S,T)}

        ${w.mainStart(Dn)}
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(H.size(p)/Dn)},programUniforms:g})}},zh=(e,t)=>{Oh(e.inputs,t),e.compute(Hr(e.inputs,t))}}),Bh,Ph,Ba,Dh,Uh,my=ee(()=>{Xe(),ye(),da(),Mh(),Rh(),en(),Nh(),_e(),Bh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,m=!r||r.dims.length===0,g=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=g*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let $=0,M=!1,S=t.kvNumHeads?g*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],M=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=T.dims.reduce((I,v)=>I*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let I=0;I<T.dims.length;I++)if(T.dims[I]!==1&&T.dims[I]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${I}] = ${T.dims[I]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},Ph=Re({perm:[0,2,1,3]}),Ba=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ct(r,Ph.perm),{inputs:[r],outputs:[-1]})[0]),r},Dh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let c=X("seq_lens",n.dataType,n.dims),p=X("total_seq_lens",r.dataType,r.dims),m=le("pos_ids",i,o),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(g).declareVariables(c,p,m)}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Uh=(e,t)=>{var S;let n=Bh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,m,g]=!i&&!a?e.compute(Na([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let T=e.compute(Dh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],k=e.inputs[7],I=e.inputs[8],v=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[p,T,k,I],N=[-1];y=e.compute(Hr(C,v),{inputs:C,outputs:N})[0],C.splice(0,1,m);let F=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Hr(C,F),{inputs:C,outputs:N})[0]}let b=dr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),$=Ba(e,t.doRotary?w:m,n),M=Ba(e,g,n);or(e,b,$,M,void 0,void 0,o,s,void 0,n,u,l)}}),Pa,Lh,Fh,Gh,gy=ee(()=>{ye(),we(),en(),_e(),Pa=(e,t,n,r,i,a,o,s)=>{let u=Ke(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,c=i*o,p=64;c===1&&(p=256);let m=[i,o,a/u],g=[i,o,2],y=["rank","type","type"],w=[];w.push(...de(m,g));let b=$=>{let M=X("x",t.dataType,3,u),S=X("scale",n.dataType,n.dims),T=X("bias",r.dataType,r.dims),k=le("output",1,3,2),I=[M,S,T,k];return`
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
      let sum_final = ${Jt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Jt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Lh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=H.sizeFromDimension(r,a),l=Ke(u),h=H.size(i)/l,c=Pa(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],m=[o,s],g=["type","none"],y=w=>{let b=X("x",t[0].dataType,p.length,l),$=X("scale_shift",1,m.length,2),M=le("output",t[0].dataType,p.length,l),S=[b,$,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...de(p,m,p)]}),getShaderSource:y},{inputs:[t[0],c]})},Fh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=H.sizeFromDimension(r,1)/o,u=Ke(o),l=H.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],c=["type","type"],p=!1,m=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,m.push(b+1);p=p&&r[r.length-1]!==1;let g=p?e.compute(ct(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,$)=>r[m[$]])),y=Pa(e,g,t[1],t[2],a,s,o,n.epsilon),w=b=>{let $=Ze(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,S=I=>{let v=I===0?"x":"y",C=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${C}(scale.${v}))`;case 2:return`vec2<${$}>(${C}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${C}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=X("input",t[0].dataType,t[0].dims,u),k=le("output",t[0].dataType,i,u);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:w},{inputs:[t[0],y]})},Gh=(e,t)=>{t.format==="NHWC"?Fh(e,e.inputs,t):Lh(e,e.inputs,t)}}),Wh,qh,Vh,yy=ee(()=>{ye(),we(),_e(),Wh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},qh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=H.normalizeAxis(t.axis,i.length),l=H.sizeToDimension(i,u),h=H.sizeFromDimension(i,u),c=H.size(a.dims),p=o?H.size(o.dims):0;if(c!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let m=[];for(let T=0;T<i.length;++T)T<u?m.push(i[T]):m.push(1);let g=Ke(h),y=["type","type"],w=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/g)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,$=n>2,M=T=>{let k=Ze(e[0].dataType),I=[X("x",e[0].dataType,e[0].dims,g),X("scale",a.dataType,a.dims,g)];o&&I.push(X("bias",o.dataType,o.dims,g)),I.push(le("output",e[0].dataType,s,g)),b&&I.push(le("mean_data_output",1,m)),$&&I.push(le("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(v).declareVariables(...I)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ia("f32",g)};
    var mean_square_vector = ${ia("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Un(k,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Jt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Jt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Un(k,g,"x[j + offset]")};
      let f32scale = ${Un(k,g,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Un(k,g,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:s,dataType:e[0].dataType}];return b&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},Vh=(e,t)=>{Wh(e.inputs),e.compute(qh(e.inputs,t,e.outputCount))}}),Hh,jh,wy=ee(()=>{we(),_a(),va(),Hh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jh=e=>{Hh(e.inputs);let t=Pn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(wa(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=H.size(e.inputs[0].dims.slice(0,-2)),o=H.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(Gr(h,{activation:""},t,l),{inputs:h})}else e.compute(Gr(e.inputs,{activation:""},t))}}}),Kh,Yh,Xh,Zh,Qh,_y=ee(()=>{ye(),we(),Xe(),_e(),Kh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!H.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(H.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(H.size(u)!==l)throw new Error("zeroPoints input size error.")}},Yh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=H.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=Ke(t.k),p=Ke(l),m=Ke(o),g=s.concat([i,o]),y=i>1&&o/m%2===0?2:1,w=H.size(g)/m/y,b=64,$=[],M=[u,i,a/c],S=H.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),$.push(...de(M)),$.push(...de(S)),$.push(...de(e[2].dims)),e.length===4&&$.push(...de(H.convertShape(e[3].dims)));let T=[u,i,o/m];$.push(...de(T));let k=I=>{let v=M.length,C=X("a",e[0].dataType,v,c),N=X("b",12,S.length,p),F=X("scales",e[2].dataType,e[2].dims.length),G=[C,N,F],V=e.length===4?X("zero_points",12,e[3].dims.length):void 0;V&&G.push(V);let z=T.length,j=le("output",e[0].dataType,z,m),Z=Ze(e[0].dataType),O=(()=>{switch(c){case 1:return`array<${Z}, 8>`;case 2:return`mat4x2<${Z}>`;case 4:return`mat2x4<${Z}>`;default:throw new Error(`${c}-component is not supported.`)}})(),W=Math.floor(32/t.bits),R=Math.floor(W/8),K=()=>{let q="";for(let L=0;L<R;L++){let re=L*t.bits*4,ue=re+t.bits;q+=`
          // reuse a data (pass ${L})
            var input_offset${L>0?L:""} = ${L===0?C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${L>0?L:""}: ${O};
            for (var j${L>0?L:""}: u32 = 0; j${L>0?L:""} < ${8/c}; j${L>0?L:""}++) {
              a_data${L>0?L:""}[j${L>0?L:""}] = ${C.getByOffset(`input_offset${L>0?L:""}`)};
              input_offset${L>0?L:""}++;
            }
          `;for(let ae=0;ae<m*y;ae++)q+=`
            b_value = ${p===1?`b${ae}_data`:`b${ae}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${L*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${re}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ue}u) & b_mask);`}
            b_quantized_values = ${O}(${Array.from({length:4},(be,Oe)=>`${Z}(b_value_lower[${Oe}]), ${Z}(b_value_upper[${Oe}])`).join(", ")});
            b_dequantized_values = ${c===1?`${O}(${Array.from({length:8},(be,Oe)=>`(b_quantized_values[${Oe}] - ${V?`zero_point${ae}`:"zero_point"}) * scale${ae}`).join(", ")});`:`(b_quantized_values - ${O}(${Array(8).fill(`${V?`zero_point${ae}`:"zero_point"}`).join(",")})) * scale${ae};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ae/m)}]${m>1?`[${ae%m}]`:""} += ${Array.from({length:8/c},(be,Oe)=>`${c===1?`a_data${L>0?L:""}[${Oe}] * b_dequantized_values[${Oe}]`:`dot(a_data${L>0?L:""}[${Oe}], b_dequantized_values[${Oe}])`}`).join(" + ")};
          `}return q},U=()=>{let q=`
            var col_index = col * ${m};
            ${V?`
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
            `;for(let L=0;L<m*y;L++)q+=`
            let scale${L} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return q},D=()=>{let q=`col_index = col * ${m};`;for(let L=0;L<m*y;L++)q+=`
            let b${L}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return q+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${O};
            var b_dequantized_values: ${O};`,q};return`
        var<workgroup> workgroup_shared: array<${j.type.value}, ${y*b}>;
        ${I.declareVariables(...G,j)}
        ${I.mainStart([b,1,1])}
          let output_indices = ${j.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${U()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${D()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${K()}
                word_offset += ${W/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${j.type.value} = ${j.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${j.setByIndices(`${j.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${m};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:w},programUniforms:$}),getShaderSource:k}},Xh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=H.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=Ke(t.k),p=Ke(l),m=s.concat([i,o]),g=128,y=o%8===0?8:o%4===0?4:1,w=g/y,b=Math.floor(32/t.bits),$=w*p*b,M=$/c,S=$/t.blockSize,T=H.size(m)/y,k=[],I=[u,i,a/c],v=H.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),k.push(...de(I)),k.push(...de(v)),k.push(...de(e[2].dims)),e.length===4&&k.push(...de(H.convertShape(e[3].dims)));let C=[u,i,o];k.push(...de(C));let N=F=>{let G=I.length,V=X("a",e[0].dataType,G,c),z=X("b",12,v.length,p),j=X("scales",e[2].dataType,e[2].dims.length),Z=[V,z,j],O=e.length===4?X("zero_points",12,e[3].dims.length):void 0;O&&Z.push(O);let W=C.length,R=le("output",e[0].dataType,W),K=Ze(e[0].dataType),U=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${K}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${K}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${R.type.value}, ${w}>, ${y}>;
        ${F.declareVariables(...Z,R)}
        ${F.mainStart([w,y,1])}
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
                sub_a[a_offset] = ${V.getByIndices(`${V.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${V.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${O?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${O.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${j.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${z.getByIndices(`${z.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let D=Math.floor(b/8),q="";for(let L=0;L<D;L++){let re=L*t.bits*4,ue=re+t.bits;q+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${L*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${re}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${K}>(${Array.from({length:4},(ae,be)=>`${K}(b_value_lower[${be}]), ${K}(b_value_upper[${be}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${K}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ae,be)=>`${`dot(a_data${be}, b_dequantized_values[${be}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return q})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:T},programUniforms:k}),getShaderSource:N}},Zh=(e,t)=>{Kh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Xh(e.inputs,t)):e.compute(Yh(e.inputs,t))},Qh=e=>Re(e)}),Jh,ep,tp,np,rp,ip,ap,op,sp,by=ee(()=>{ye(),we(),_e(),Jh=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ep=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},tp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},np=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},rp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},ip=(e,t,n)=>{switch(n.mode){case 0:return ep(e,t,n.pads.length);case 1:return tp(e,t,n.pads.length);case 2:return np(e,t,n.pads.length);case 3:return rp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},ap=(e,t)=>{let n=H.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=H.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...de(e[0].dims,n));let s=["rank"],u=l=>{let h=le("output",e[0].dataType,n.length),c=X("x",e[0].dataType,r.length),p=c.type.value,m=ip(h,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(g).declareVariables(c,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(H.size(n)/64)},programUniforms:a}),getShaderSource:u}},op=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},sp=(e,t)=>{Jh(e.inputs);let n=op(e.inputs,t);e.compute(ap(e.inputs,n),{inputs:[0]})}}),hr,Da,Ua,La,Fa,up,lp,Ga,Wa,cp,dp,qa,hp,pp,Va,fp,mp,gp,yp,xy=ee(()=>{ft(),ye(),we(),_e(),hr=e=>{if(Le.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Da=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Nr.adjustPoolAttributes(n,i,o,s,u,l);let h=Nr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[c,r?p:h]},Ua=(e,t)=>{let n=t.format==="NHWC",r=H.size(e),i=H.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=H.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},La=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p=i.format==="NHWC",m=t.type.value,g=le("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",$=n-(p?2:1);if(h?y=`
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
            }`}},Fa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,up=e=>`${Fa(e)};${e.countIncludePad}`,lp=e=>`${Fa(e)};${e.storageOrder};${e.dilations}`,Ga=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Wa=(e,t,n,r)=>{let[i,a]=Da(t,r,n),o=X("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,c,p,m,g]=Ua(a,i);h.push(...de(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(H.size(a)/64)},programUniforms:h}),getShaderSource:w=>La(w,o,t.dims.length,a.length,i,u,l,0,c,p,m,g)}},cp=e=>{let t=e.count_include_pad!==0,n=Ga(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:up(r)}},dp=(e,t)=>{hr(e.inputs),e.compute(Wa("AveragePool",e.inputs[0],!1,t))},qa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},hp=e=>{let t=e.format;return{format:t,...qa,cacheKey:t}},pp=(e,t)=>{hr(e.inputs),e.compute(Wa("GlobalAveragePool",e.inputs[0],!0,t))},Va=(e,t,n,r)=>{let[i,a]=Da(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=X("x",t.dataType,t.dims.length),l=["rank"],[h,c,p,m,g]=Ua(a,i);return h.push(...de(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(H.size(a)/64)},programUniforms:h}),getShaderSource:y=>La(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,c,p,m,g)}},fp=(e,t)=>{hr(e.inputs),e.compute(Va("MaxPool",e.inputs[0],!1,t))},mp=e=>{let t=e.storage_order,n=e.dilations,r=Ga(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:lp(i)}},gp=e=>{let t=e.format;return{format:t,...qa,cacheKey:t}},yp=(e,t)=>{hr(e.inputs),e.compute(Va("GlobalMaxPool",e.inputs[0],!0,t))}}),wp,_p,bp,xp,$y=ee(()=>{ye(),we(),Xe(),_e(),wp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},_p=(e,t)=>{let n=H.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=H.size(a),u=r===3||r===2,l=u?[Math.ceil(H.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(H.size(c.dims)/4)]:c.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,g=m===!1&&h.length===1,y=Ke(s),w=m&&(!u||y===4),b=w?y:1,$=w&&!u?y:1,M=X("input",u?12:r,l.length,$),S=X("scale",o,h.length),T=c?X("zero_point",u?12:r,p.length):void 0,k=le("output",o,a.length,b),I=[M,S];T&&I.push(T);let v=[l,h];c&&v.push(p);let C=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...de(...v,a)],N=F=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(G).declareVariables(...I,k)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:C})}},bp=(e,t)=>{wp(e.inputs,t),e.compute(_p(e.inputs,t))},xp=e=>Re({axis:e.axis,blockSize:e.blockSize})}),$p,vp,Sp,vy=ee(()=>{ft(),ye(),_e(),$p=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},vp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...de(a)],u=l=>{let h=le("output",r,a.length),c=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Sp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Le.webgpu.validateInputContent&&$p(t,n,r),e.compute(vp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Mp,Tp,Ep,Ip,Sy=ee(()=>{ye(),we(),Xe(),_e(),Mp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Tp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(H.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=H.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...de(e[1].dims,e[2].dims,i)],h=c=>{let p=X("indices",e[1].dataType,e[1].dims.length),m=X("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?zu("output",e[0].dataType,i.length):le("output",e[0].dataType,i.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(p,m,g)}
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
    ${Mp(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},Ep=e=>Re({reduction:e.reduction}),Ip=(e,t)=>{e.compute(Tp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),kp,Cp,Ap,Ha,Rp,Op,zp,Np,Bp,Pp,Dp,Up,ja,Lp,Fp,Gp,Wp,qp,Vp,Hp,My=ee(()=>{ye(),we(),Xe(),_e(),kp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Cp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Ap=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");kp(r,t),t.axes.length>0&&Cp(r,t.axes,l).forEach((h,c)=>r[c]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Ha=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Rp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ha("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ha("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Op=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",zp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Np=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Bp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Pp=(e,t,n,r,i)=>`
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
    }`,Dp=(e,t,n,r,i,a,o)=>`
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
    }`,Up=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ce("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ja=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Lp=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${ja(e,u,a,2)}
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
    }`},Fp=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[c,p]=h?[0,1]:[2,3],m=e.type.value,g=y=>{let w=y===c?"row":"col";return`
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
          data[i + 1] = ${y===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(c)};
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
    `},Gp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${ja(e,l,a,3)}
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
    }`},Wp=(e,t,n,r,i,a)=>{let o=e.dims,s=zp(a,t.axes,o.length),u=Np(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map(($,M)=>$===0?1:u[M]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=Bp(o,l,t)));let h=le("output",e.dataType,u.length),c=X("input",e.dataType,o.length),p=H.size(u),m=o.length===u.length&&o.every(($,M)=>$===u[M]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=c.type.value,b=$=>`
      ${m?"":`
      ${Rp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Up(c,o)};
              ${Op(t.nearestMode,n,w)};
              ${Dp(c,h,o,u,l.length,s.length,g)};
              `;case"linear":return`
              ${Pp(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Lp(c,h,o,g,y)}`;if(o.length===3||o.length===5)return`${Gp(c,h,o,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Fp(c,h,o,u,l,s,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(c,h)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${m}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...de(o,u)]})}},qp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Vp=(e,t)=>{let n=[],r=[],i=[],a=qp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Ap(e.inputs,t,a,n,r,i),e.compute(Wp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Hp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),jp,Kp,Yp,Ty=ee(()=>{ye(),we(),_e(),jp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Kp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=H.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,w=64,b=Ke(l),$=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=T=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[X("x",e[0].dataType,e[0].dims,b),X("skip",e[1].dataType,e[1].dims,b),X("gamma",e[2].dataType,e[2].dims,b)];c&&I.push(X("beta",e[3].dataType,e[3].dims,b)),p&&I.push(X("bias",e[4].dataType,e[4].dims,b)),I.push(le("output",e[0].dataType,s,b)),m&&I.push(le("mean_output",1,h)),g&&I.push(le("inv_std_output",1,h)),y&&I.push(le("input_skip_bias_sum",e[0].dataType,s,b));let v=Ze(e[0].dataType),C=Ze(1,b);return`

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
        let mean = ${Jt("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Jt("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:s,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${m};${g};${y}`,inputDependencies:e.map((T,k)=>"type")},getShaderSource:M,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:$})}},Yp=(e,t)=>{jp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Kp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Xp,pr,Zp,Ka,Qp,Jp,ef,tf,Ey=ee(()=>{ye(),we(),Xe(),_e(),Xp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},pr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Zp=(e,t)=>{if(e.length>1){let n=pr(e,1),r=pr(e,2),i=pr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},Ka=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Qp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,Jp=(e,t)=>{let n=e[0].dims,r=H.size(n),i=t.axes.length>0?H.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=pr(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,$)=>Ka(b,$,n,i,a)),s=t.ends.map((b,$)=>Ka(b,$,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,$,M)=>{if(b<0){let S=(s[$]-o[$])/b,T=o[$],k=T+S*a[$];o[$]=k,s[$]=T,M[$]=-b}});let l=n.slice(0);i.forEach((b,$)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let h={dims:l,dataType:e[0].dataType},c=le("output",e[0].dataType,l.length),p=X("input",e[0].dataType,e[0].dims.length),m=H.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:o},{type:6,data:u},{type:12,data:a},...de(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(g).declareVariables(p,c)}
        ${Qp(p,c,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},ef=(e,t)=>{Xp(e.inputs,t);let n=Zp(e.inputs,t);e.compute(Jp(e.inputs,n),{inputs:[0]})},tf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),nf,rf,af,of,Iy=ee(()=>{ye(),we(),Xe(),en(),_e(),nf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},rf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=H.size(r),a=r.length,o=H.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(I,v)=>v),l[o]=a-1,l[a-1]=o,u=e.compute(ct(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,c=h[a-1],p=i/c,m=Ke(c),g=c/m,y=64;p===1&&(y=256);let w=(I,v)=>v===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:v===2?`max(${I}.x, ${I}.y)`:v===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,b=X("x",u.dataType,u.dims,m),$=le("result",u.dataType,u.dims,m),M=b.type.value,S=Ze(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,T=I=>`
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
          rowSumShared = ${M}(${Jt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:g}]}),getShaderSource:T},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(ct(k,l),{inputs:[k]})},af=(e,t)=>{nf(e.inputs),rf(e,t)},of=e=>Re({axis:e.axis})}),Ya,sf,uf,lf,cf,ky=ee(()=>{ye(),we(),_e(),Ya=e=>Array.from(e.getBigInt64Array(),Number),sf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ya(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},uf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},lf=(e,t)=>{let n=e[0].dims,r=t??Ya(e[1]),i=uf(n,r),a=H.size(i),o=e[0].dataType,s=X("input",o,n.length),u=le("output",o,i.length),l=h=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...de(e[0].dims,i)]}),getShaderSource:l}},cf=e=>{sf(e.inputs),e.compute(lf(e.inputs),{inputs:[0]})}}),df,hf,pf,Cy=ee(()=>{ye(),we(),_e(),df=(e,t,n,r,i)=>{let a=le("output_data",i,n.length,4),o=X("a_data",t[1].dataType,t[1].dims.length,4),s=X("b_data",t[2].dataType,t[2].dims.length,4),u=X("c_data",t[0].dataType,t[0].dims.length,4),l,h=(c,p,m)=>`select(${p}, ${c}, ${m})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,b=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
      }`},hf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(H.areEqual(t,n)&&H.areEqual(n,r)),o=t,s=H.size(t);if(a){let l=Pn.calcShape(Pn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=H.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>df(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...de(r,t,n,o)]})}},pf=e=>{e.compute(hf(e.inputs))}}),ff,Ay=ee(()=>{V0(),da(),H0(),j0(),K0(),Y0(),X0(),ty(),ry(),iy(),ay(),oy(),sy(),uy(),ly(),cy(),dy(),hy(),py(),fy(),my(),gy(),yy(),wy(),_y(),Mh(),by(),xy(),$y(),vy(),Sy(),ua(),My(),Nh(),Ty(),Ey(),Iy(),Rh(),ky(),en(),ma(),Cy(),ff=new Map([["Abs",[jl]],["Acos",[Kl]],["Acosh",[Yl]],["Add",[Bc]],["ArgMax",[Rl,ca]],["ArgMin",[Al,ca]],["Asin",[Xl]],["Asinh",[Zl]],["Atan",[Ql]],["Atanh",[Jl]],["Attention",[Dl]],["AveragePool",[dp,cp]],["BatchNormalization",[Gl]],["BiasAdd",[Vl]],["BiasSplitGelu",[Oc]],["Cast",[tc,ec]],["Ceil",[ic]],["Clip",[rc]],["Concat",[Xc,Zc]],["Conv",[Ia,Ta]],["ConvTranspose",[Sd,xd]],["Cos",[ac]],["Cosh",[oc]],["CumSum",[Td,Ed]],["DepthToSpace",[Ad,Rd]],["DequantizeLinear",[bp,xp]],["Div",[Pc]],["Einsum",[Dd,Ud]],["Elu",[sc,sr]],["Equal",[Dc]],["Erf",[uc]],["Exp",[lc]],["Expand",[Wd]],["FastGelu",[Vd]],["Floor",[cc]],["FusedConv",[Ia,Ta]],["Gather",[Yd,Kd]],["GatherElements",[oh,ah]],["GatherBlockQuantized",[th,nh]],["GatherND",[Zd,Qd]],["Gelu",[dc]],["Gemm",[ch,lh]],["GlobalAveragePool",[pp,hp]],["GlobalMaxPool",[yp,gp]],["Greater",[Gc]],["GreaterOrEqual",[qc]],["GridSample",[_h,bh]],["GroupQueryAttention",[Uh]],["HardSigmoid",[_c,wc]],["InstanceNormalization",[Gh]],["LayerNormalization",[Vh]],["LeakyRelu",[hc,sr]],["Less",[Wc]],["LessOrEqual",[Vc]],["Log",[Ec]],["MatMul",[jh]],["MatMulNBits",[Zh,Qh]],["MaxPool",[fp,mp]],["Mul",[Uc]],["MultiHeadAttention",[Sh,$h]],["Neg",[fc]],["Not",[pc]],["Pad",[sp]],["Pow",[Lc]],["QuickGelu",[Cc,sr]],["Range",[Sp]],["Reciprocal",[mc]],["ReduceMin",[Tl]],["ReduceMean",[xl]],["ReduceMax",[Ml]],["ReduceSum",[Il]],["ReduceProd",[El]],["ReduceL1",[$l]],["ReduceL2",[vl]],["ReduceLogSum",[Cl]],["ReduceLogSumExp",[Sl]],["ReduceSumSquare",[kl]],["Relu",[gc]],["Resize",[Vp,Hp]],["RotaryEmbedding",[zh]],["ScatterND",[Ip,Ep]],["Sigmoid",[yc]],["Sin",[bc]],["Sinh",[xc]],["Slice",[ef,tf]],["SkipLayerNormalization",[Yp]],["Split",[Ch,Ah]],["Sqrt",[$c]],["Softmax",[af,of]],["Sub",[Fc]],["Tan",[vc]],["Tanh",[Sc]],["ThresholdedRelu",[Tc,sr]],["Tile",[cf]],["Transpose",[Gu,Wu]],["Where",[pf]]])}),mf,Ry=ee(()=>{ft(),Ft(),_e(),mf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Ct(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),wt(e.programInfo.name)}dispose(){}build(e,t){Ct(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Bu(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Te("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return wt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),gf={};Nn(gf,{WebGpuBackend:()=>bf});var yf,wf,_f,bf,Oy=ee(()=>{ft(),ye(),Ft(),$u(),W0(),Ay(),Ry(),yf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},wf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${yf(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},_f=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},bf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new _f(o),this.gpuDataManager=Ru(this),this.programManager=new mf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Vi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ct(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,c=a.inputTensorViews,p=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),w=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(b=>({dims:b.dims,dataType:Lt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Lt(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:w});else{let b="";c.forEach((M,S)=>{b+=`input[${S}]: [${M.dims}] | ${Lt(M.dataType)}, `});let $="";p.forEach((M,S)=>{$+=`output[${S}]: [${M.dims}] | ${Lt(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${b}${$}start time: ${y} ns, execution time: ${w-y} ns`)}kr("GPU",`${h}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),wt()}run(e,t,n,r,i,a){Ct(e.name);let o=[];for(let $=0;$<t.length;++$){let M=t[$].data;if(M===0)continue;let S=this.gpuDataManager.get(M);if(!S)throw new Error(`no GPU data for input: ${M}`);o.push(S)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map(($,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let c=[],p=[];for(let $=0;$<s.length;++$){if(!Number.isInteger(h[$])||h[$]<-3||h[$]>=a)throw new Error(`Invalid output index: ${h[$]}`);if(h[$]===-3)continue;let M=h[$]===-1,S=h[$]===-2,T=M||S?i(s[$].dataType,s[$].dims):r(h[$],s[$].dataType,s[$].dims);if(c.push(T),T.data===0)continue;let k=this.gpuDataManager.get(T.data);if(!k)throw new Error(`no GPU data for output: ${T.data}`);if(M&&this.temporaryData.push(k),S){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(k)}p.push(k)}if(o.length!==t.length||p.length!==c.length){if(p.length===0)return wt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let $=0,M=[];l.forEach(I=>{let v=typeof I.data=="number"?[I.data]:I.data;if(v.length===0)return;let C=I.type===10?2:4,N,F;I.type===10?(F=v.length>4?16:v.length>2?8:v.length*C,N=v.length>4?16:C*v.length):(F=v.length<=2?v.length*C:16,N=16),$=Math.ceil($/F)*F,M.push($);let G=I.type===10?8:4;$+=v.length>4?Math.ceil(v.length/G)*N:v.length*C});let S=16;$=Math.ceil($/S)*S;let T=new ArrayBuffer($);l.forEach((I,v)=>{let C=M[v],N=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(T,C,N.length).set(N);else if(I.type===12)new Uint32Array(T,C,N.length).set(N);else if(I.type===10)new Uint16Array(T,C,N.length).set(N);else if(I.type===1)new Float32Array(T,C,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Lt(I.type)}`)});let k=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,T,0,$),this.gpuDataManager.release(k.id),m={offset:0,size:$,buffer:k.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,w=wf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,g),this.programManager.setArtifact(w,b),Te("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let $=0;$<l.length;$++){let M=l[$],S=M.type,T=typeof M.data=="number"?1:M.data.length,[k,I]=b.uniformVariablesInfo[$];if(S!==k||T!==I)throw new Error(`Uniform variable ${$} mismatch: expect type ${k} with size ${I}, got type ${S} with size ${T} in program "${b.programInfo.name}".`)}}if(Te("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(b,o,p,g,m),wt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=ff.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Te("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ra(this,e,t);return Hi(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Te("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Te("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Te("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),xf={};Nn(xf,{init:()=>vf});var jr,$f,vf,zy=ee(()=>{ye(),Ft(),we(),G0(),jr=class _0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(H.size(t)!==H.size(this.dims))throw new Error("Invalid new shape");return new _0(this.module,this.dataType,this.data,t)}},$f=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),p=[];for(let m=0;m<c;m++)p.push(Number(e.getValue(r*i++,a)));s.push(new jr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new jr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=xn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new jr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},vf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Oy(),er(gf)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Te("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Te("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),c)}},async(s,u,l)=>{Te("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Te("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new $f(t,o,Number(u));return o.computeKernel(Number(s),c,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Iu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),Sf,Xa,Za,tn,Mf,Qa,Kr,Ja,eo,to,no,ro,io,Tf=ee(()=>{ft(),U0(),L0(),ye(),wn(),Li(),hu(),Sf=(e,t)=>{Fe()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},Xa=async e=>{Sf(e.wasm.numThreads,zr(e.logLevel))},Za=async(e,t)=>{var r,i;(i=(r=Fe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(zy(),er(xf)).init;t==="webgpu"&&await a("webgpu",Fe(),e,n),t==="webnn"&&await a("webnn",Fe(),e)}},tn=new Map,Mf=e=>{let t=Fe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ze("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Qa=(e,t)=>{let n=Fe(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&ze("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Kr=e=>{let t=Fe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ja=async(e,t)=>{var c,p,m,g;let n,r,i=Fe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Kr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await du(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let C of t.externalData){let N=typeof C=="string"?C:C.path;v.push(qi(typeof C=="string"?C:C.data).then(F=>{i.mountExternalData(N,F)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let C=v,N=C==null?void 0:C.context,F=C==null?void 0:C.gpuDevice,G=C==null?void 0:C.deviceType,V=C==null?void 0:C.powerPreference;N?i.currentContext=N:F?i.currentContext=await i.webnnCreateMLContext(F):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&ze("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Mf(a),b=!!(t!=null&&t.enableGraphCapture),$=[],M=[],S=[],T=[],k=[];for(let v=0;v<y;v++){let[C,N,F]=Qa(a,v);C===0&&ze("Can't get an input name."),l.push(C);let G=i.UTF8ToString(C);$.push(G),S.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:Lt(N),shape:F})}for(let v=0;v<w;v++){let[C,N,F]=Qa(a,v+y);C===0&&ze("Can't get an output name."),h.push(C);let G=i.UTF8ToString(C);M.push(G),T.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:Lt(N),shape:F});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[G])??"cpu",z=i.webnnIsGraphOutput;if(V==="cpu"&&z&&z(a,G)){k.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(b&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(V)}}let I=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&ze("Can't create IO binding."),I={handle:s,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Wi(v))}),tn.set(a,[a,l,h,I,b,!1]),[a,$,M,S,T]}catch(y){throw l.forEach(w=>i._OrtFree(w)),h.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&ze("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&ze("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&ze("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},eo=e=>{var u,l,h;let t=Fe(),n=tn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&ze("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&ze("Can't release session."),tn.delete(e)},to=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Fe(),u=s.PTR_SIZE,l=e[0],h=e[1],c=e[3],p=c,m,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;g=xn(bn(l),h);{let $=s.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,a,b,g)}}else if(c==="ml-tensor"){let b=e[2].mlTensor;g=xn(bn(l),h);let $=s.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,b,bn(l),h)}else{let b=e[2];if(Array.isArray(b)){g=u*b.length,m=s._malloc(g),n.push(m);for(let $=0;$<b.length;$++){if(typeof b[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);s.setValue(m+$*u,_t(b[$],n),"*")}}else{let $=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&$&&M){let S=s.UTF8ToString(i);if($(r,S)||M(r,S)){let T=bn(l);g=xn(T,h),p="ml-tensor";let k=s.webnnCreateTemporaryTensor,I=s.webnnUploadTensor;if(!k||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,T,h);I(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),m=v}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}else g=b.byteLength,m=s._malloc(g),n.push(m),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,g),m)}}let y=s.stackSave(),w=s.stackAlloc(4*h.length);try{h.forEach(($,M)=>s.setValue(w+M*u,$,u===4?"i32":"i64"));let b=s._OrtCreateTensor(bn(l),m,g,w,h.length,Wi(p));b===0&&ze(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},no=async(e,t,n,r,i,a)=>{var G,V,z,j;let o=Fe(),s=o.PTR_SIZE,u=tn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],c=u[2],p=u[3],m=u[4],g=u[5],y=t.length,w=r.length,b=0,$=[],M=[],S=[],T=[],k=[],I=o.stackSave(),v=o.stackAlloc(y*s),C=o.stackAlloc(y*s),N=o.stackAlloc(w*s),F=o.stackAlloc(w*s);try{[b,$]=ou(a),gn("wasm prepareInputOutputTensor");for(let R=0;R<y;R++)await to(n[R],M,T,e,h[t[R]],t[R],m);for(let R=0;R<w;R++)await to(i[R],S,T,e,c[r[R]],y+r[R],m);yn("wasm prepareInputOutputTensor");for(let R=0;R<y;R++)o.setValue(v+R*s,M[R],"*"),o.setValue(C+R*s,h[t[R]],"*");for(let R=0;R<w;R++)o.setValue(N+R*s,S[R],"*"),o.setValue(F+R*s,c[r[R]],"*");if(p&&!g){let{handle:R,outputPreferredLocations:K,outputPreferredLocationsEncoded:U}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);gn("wasm bindInputsOutputs");for(let D=0;D<y;D++){let q=t[D];await o._OrtBindInput(R,h[q],M[D])!==0&&ze(`Can't bind input[${D}] for session=${e}.`)}for(let D=0;D<w;D++){let q=r[D];(G=i[D])!=null&&G[3]?(k.push(S[D]),o._OrtBindOutput(R,c[q],S[D],0)!==0&&ze(`Can't bind pre-allocated output[${D}] for session=${e}.`)):o._OrtBindOutput(R,c[q],0,U[q])!==0&&ze(`Can't bind output[${D}] to ${K[D]} for session=${e}.`)}yn("wasm bindInputsOutputs"),tn.set(e,[l,h,c,p,m,!0])}(V=o.jsepOnRunStart)==null||V.call(o,l),(z=o.webnnOnRunStart)==null||z.call(o,l);let Z;p?Z=await o._OrtRunWithBinding(l,p.handle,w,N,b):Z=await o._OrtRun(l,C,v,y,F,w,N,b),Z!==0&&ze("failed to call OrtRun().");let O=[],W=[];gn("wasm ProcessOutputTensor");for(let R=0;R<w;R++){let K=Number(o.getValue(N+R*s,"*"));if(K===S[R]||k.includes(S[R])){O.push(i[R]),K!==S[R]&&o._OrtReleaseTensor(K)!==0&&ze("Can't release tensor.");continue}let U=o.stackSave(),D=o.stackAlloc(4*s),q=!1,L,re=0;try{o._OrtGetTensorData(K,D,D+s,D+2*s,D+3*s)!==0&&ze(`Can't access output tensor data on index ${R}.`);let ue=s===4?"i32":"i64",ae=Number(o.getValue(D,ue));re=o.getValue(D+s,"*");let be=o.getValue(D+s*2,"*"),Oe=Number(o.getValue(D+s*3,ue)),Ve=[];for(let Ae=0;Ae<Oe;Ae++)Ve.push(Number(o.getValue(be+Ae*s,ue)));o._OrtFree(be)!==0&&ze("Can't free memory for tensor dims.");let He=Ve.reduce((Ae,ge)=>Ae*ge,1);L=Lt(ae);let je=p==null?void 0:p.outputPreferredLocations[r[R]];if(L==="string"){if(je==="gpu-buffer"||je==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ae=[];for(let ge=0;ge<He;ge++){let Pe=o.getValue(re+ge*s,"*"),un=o.getValue(re+(ge+1)*s,"*"),ln=ge===He-1?void 0:un-Pe;Ae.push(o.UTF8ToString(Pe,ln))}O.push([L,Ve,Ae,"cpu"])}else if(je==="gpu-buffer"&&He>0){let Ae=o.jsepGetBuffer;if(!Ae)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=Ae(re),Pe=xn(ae,He);if(Pe===void 0||!Fi(L))throw new Error(`Unsupported data type: ${L}`);q=!0,O.push([L,Ve,{gpuBuffer:ge,download:o.jsepCreateDownloader(ge,Pe,L),dispose:()=>{o._OrtReleaseTensor(K)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(je==="ml-tensor"&&He>0){let Ae=o.webnnEnsureTensor,ge=o.webnnIsGraphInputOutputTypeSupported;if(!Ae||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(xn(ae,He)===void 0||!Gi(L))throw new Error(`Unsupported data type: ${L}`);if(!ge(e,L,!1))throw new Error(`preferredLocation "ml-tensor" for ${L} output is not supported by current WebNN Context.`);let Pe=await Ae(e,re,ae,Ve,!1);q=!0,O.push([L,Ve,{mlTensor:Pe,download:o.webnnCreateMLTensorDownloader(re,L),dispose:()=>{o.webnnReleaseTensorId(re),o._OrtReleaseTensor(K)}},"ml-tensor"])}else if(je==="ml-tensor-cpu-output"&&He>0){let Ae=o.webnnCreateMLTensorDownloader(re,L)(),ge=O.length;q=!0,W.push((async()=>{let Pe=[ge,await Ae];return o.webnnReleaseTensorId(re),o._OrtReleaseTensor(K),Pe})()),O.push([L,Ve,[],"cpu"])}else{let Ae=Or(L),ge=new Ae(He);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(o.HEAPU8.subarray(re,re+ge.byteLength)),O.push([L,Ve,ge,"cpu"])}}finally{o.stackRestore(U),L==="string"&&re&&o._free(re),q||o._OrtReleaseTensor(K)}}p&&!m&&(o._OrtClearBoundOutputs(p.handle)!==0&&ze("Can't clear bound outputs."),tn.set(e,[l,h,c,p,m,!1]));for(let[R,K]of await Promise.all(W))O[R][2]=K;return yn("wasm ProcessOutputTensor"),O}finally{(j=o.webnnOnRunEnd)==null||j.call(o,l),o.stackRestore(I),M.forEach(Z=>o._OrtReleaseTensor(Z)),S.forEach(Z=>o._OrtReleaseTensor(Z)),T.forEach(Z=>o._free(Z)),b!==0&&o._OrtReleaseRunOptions(b),$.forEach(Z=>o._free(Z))}},ro=e=>{let t=Fe(),n=tn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},io=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),nn,ot,Ln,fr,mr,Yr,ao,Xr,In,kn,Ef,If,kf,Cf,Af,Rf,Of,zf,Nf=ee(()=>{ft(),Tf(),wn(),Bi(),nn=()=>!!Le.wasm.proxy&&typeof document<"u",Ln=!1,fr=!1,mr=!1,Xr=new Map,In=(e,t)=>{let n=Xr.get(e);n?n.push(t):Xr.set(e,[t])},kn=()=>{if(Ln||!fr||mr||!ot)throw new Error("worker not ready")},Ef=e=>{switch(e.data.type){case"init-wasm":Ln=!1,e.data.err?(mr=!0,ao[1](e.data.err)):(fr=!0,ao[0]()),Yr&&(URL.revokeObjectURL(Yr),Yr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Xr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},If=async()=>{if(!fr){if(Ln)throw new Error("multiple calls to 'initWasm()' detected.");if(mr)throw new Error("previous call to 'initWasm()' failed.");if(Ln=!0,nn())return new Promise((e,t)=>{ot==null||ot.terminate(),tu().then(([n,r])=>{try{ot=r,ot.onerror=a=>t(a),ot.onmessage=Ef,ao=[e,t];let i={type:"init-wasm",in:Le};!i.in.wasm.wasmPaths&&(n||Ri)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),ot.postMessage(i),Yr=n}catch(i){t(i)}},t)});try{await Ui(Le.wasm),await Xa(Le),fr=!0}catch(e){throw mr=!0,e}finally{Ln=!1}}},kf=async e=>{if(nn())return kn(),new Promise((t,n)=>{In("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Le}};ot.postMessage(r)});await Za(Le,e)},Cf=async e=>nn()?(kn(),new Promise((t,n)=>{In("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};ot.postMessage(r,[e.buffer])})):Kr(e),Af=async(e,t)=>{if(nn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return kn(),new Promise((n,r)=>{In("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),ot.postMessage(i,a)})}else return Ja(e,t)},Rf=async e=>{if(nn())return kn(),new Promise((t,n)=>{In("release",[t,n]);let r={type:"release",in:e};ot.postMessage(r)});eo(e)},Of=async(e,t,n,r,i,a)=>{if(nn()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return kn(),new Promise((o,s)=>{In("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};ot.postMessage(l,io(u))})}else return no(e,t,n,r,i,a)},zf=async e=>{if(nn())return kn(),new Promise((t,n)=>{In("end-profiling",[t,n]);let r={type:"end-profiling",in:e};ot.postMessage(r)});ro(e)}}),oo,Bf,Pf,Ny=ee(()=>{ft(),Nf(),ye(),Ii(),hu(),oo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Bf=e=>{switch(e[3]){case"cpu":return new qe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return qe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Gi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return qe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Pf=class{async fetchModelAndCopyToWasmMemory(e){return Cf(await qi(e))}async loadModel(e,t){Ct();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Af(n,t),wt()}async dispose(){return Rf(this.sessionId)}async run(e,t,n){Ct();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],m=c[1],g=this.inputNames.indexOf(p);if(g===-1)throw new Error(`invalid input '${p}'`);r.push(m),i.push(g)});let a=[],o=[];Object.entries(t).forEach(c=>{let p=c[0],m=c[1],g=this.outputNames.indexOf(p);if(g===-1)throw new Error(`invalid output '${p}'`);a.push(m),o.push(g)});let s=r.map((c,p)=>oo(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?oo(c,()=>`output "${this.outputNames[o[p]]}"`):null),l=await Of(this.sessionId,i,s,o,u,n),h={};for(let c=0;c<l.length;c++)h[this.outputNames[o[c]]]=a[c]??Bf(l[c]);return wt(),h}startProfiling(){}endProfiling(){zf(this.sessionId)}}}),Df={};Nn(Df,{OnnxruntimeWebAssemblyBackend:()=>uo,initializeFlags:()=>so,wasmBackend:()=>Uf});var so,uo,Uf,By=ee(()=>{ft(),Nf(),Ny(),so=()=>{(typeof Le.wasm.initTimeout!="number"||Le.wasm.initTimeout<0)&&(Le.wasm.initTimeout=0);let e=Le.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Le.wasm.simd=!1),typeof Le.wasm.proxy!="boolean"&&(Le.wasm.proxy=!1),typeof Le.wasm.trace!="boolean"&&(Le.wasm.trace=!1),typeof Le.wasm.numThreads!="number"||!Number.isInteger(Le.wasm.numThreads)||Le.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Le.wasm.numThreads=1;else{let t=typeof navigator>"u"?x0("node:os").cpus().length:navigator.hardwareConcurrency;Le.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},uo=class{async init(e){so(),await If(),await kf(e)}async createInferenceSessionHandler(e,t){let n=new Pf;return await n.loadModel(e,t),n}},Uf=new uo});ft(),ft(),ft();var Py="1.27.0";{let e=(By(),er(Df)).wasmBackend;Bn("webgpu",e,5),Bn("webnn",e,5),Bn("cpu",e,10),Bn("wasm",e,10)}Object.defineProperty(Le.versions,"web",{value:Py,enumerable:!0});/**
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
 */function dt(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Fn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Lf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Dy=114;function Uy(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function lo(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,p+1),g=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),$=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),S=(p*r+b)*a,T=(p*r+$)*a,k=(m*r+b)*a,I=(m*r+$)*a,v=(h*t+y)*3;for(let C=0;C<3;C++){const N=o[S+C]*(1-M)+o[T+C]*M,F=o[k+C]*(1-M)+o[I+C]*M;s[v+C]=Math.min(255,Math.max(0,Math.round(N*(1-g)+F*g)))}}}return s}function Gn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=h*l,p=Math.min((h+1)*l,i);for(let m=0;m<t;m++){const g=m*u,y=Math.min((m+1)*u,r);let w=0,b=0,$=0,M=0;for(let T=Math.floor(c);T<p;T++){const k=Math.min(T+1,p)-Math.max(T,c);if(!(k<=0))for(let I=Math.floor(g);I<y;I++){const v=Math.min(I+1,y)-Math.max(I,g);if(v<=0)continue;const C=v*k,N=(T*r+I)*a;w+=o[N]*C,b+=o[N+1]*C,$+=o[N+2]*C,M+=C}}const S=(h*t+m)*3;s[S]=Math.min(255,Math.max(0,dt(w/M))),s[S+1]=Math.min(255,Math.max(0,dt(b/M))),s[S+2]=Math.min(255,Math.max(0,dt($/M)))}}return s}function Ff(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function co(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const m=(p+.5)*l-.5,g=Math.floor(m),y=Ff(m-g);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,$=Math.floor(b),M=Ff(b-$),S=(p*t+w)*3;for(let T=0;T<3;T++){let k=0;for(let I=0;I<4;I++){const v=c(g-1+I)*r;let C=0;for(let N=0;N<4;N++)C+=M[N]*o[(v+h($-1+N))*a+T];k+=y[I]*C}s[S+T]=Math.min(255,Math.max(0,Math.round(k)))}}}return s}function ho(e,t,n=1){const r=Uy(e.width,e.height,t,n),i=lo(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Dy/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const c=(l+h)*3,p=u+h;o[p]=i[c]/255,o[a+p]=i[c+1]/255,o[2*a+p]=i[c+2]/255}}return{tensor:o,params:r}}function po(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],c=e[o*6+4],p=e[o*6+5];if(c<n)continue;const m=Math.round(p);if(m<0||m>=r)continue;const g=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(y),Math.trunc(w-g),Math.trunc(b-y)],boxFloat:[g,y,w-g,b-y]})}return i}const gr=.8,Gf=.65,Ly=110,Fy=1280;function Gy(e,t,n){if(n==null)return gr;if(n.length===0)return Gf;const r=Math.max(e,t);if(!(r>0))return gr;const i=Fy/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return gr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Ly?Gf:gr}const Wf=.25,qf=.6;function Wy(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Wf:qf)),h=Math.trunc(u*(s>=u?qf:Wf)),c=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(Math.trunc(e),a+l),g=Math.min(Math.trunc(t),o+h),y=m-c,w=g-p;return y<=0||w<=0?null:{x:c,y:p,width:y,height:w}}const qy=.6;function Vf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,c=dt((s+l)/2),p=dt((u+h)/2),m=dt((l-s+(h-u))/4);m>=1&&r.push({cx:c,cy:p,r:m})}return r}function Vy(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(qy*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Hy(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Fn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Hf(e,t,n){const r=Vf(e,t,n);return r.length===0?[]:Hy(Vy(r))}function jy(e,t,n){return Vf(e,t,n)}function yr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const Ky=.5,Yy=.7,Xy=.55;function fo(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function jf(e){if(e.length===0)return[];const t=(Ky*fo(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Fn(i.map(a=>a[0]))),Math.trunc(Fn(i.map(a=>a[1]))),Math.trunc(Fn(i.map(a=>a[2]))),Math.trunc(Fn(i.map(a=>a[3])))]);if(r.length>=2){const i=fo(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),c=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*c,m=(u[2]-u[0])*(u[3]-u[1]),g=(l[2]-l[0])*(l[3]-l[1]);if(p>=Yy*Math.min(m,g)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=fo(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=Xy*i)}return r}const Kf=["brown","grey","blue","green","yellow","red","purple"],Zy={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Qy=.7;function Yf(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const c of r){const p=e[c];if(p.family!==a.family)continue;const[m,g,y,w]=p.box,b=Math.max(0,Math.min(o+u,m+y)-Math.max(o,m)),$=Math.max(0,Math.min(s+l,g+w)-Math.max(s,g)),M=Math.max(1,Math.min(u*l,y*w));if(b*$>=Qy*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function Zr(e,t,n){const r=po(e,t,n,Kf.length).map(i=>{const a=Kf[i.classIndex];return{color:a,family:Zy[a],box:i.box,confidence:i.confidence}});return Yf(r)}const Jy=8,ew=.8,Xf=1.25;function tw(e){if(e.length<Jy)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Xf?t.push(o):u>s*Xf&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<ew*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const nw=2.25,Zf=8;function rw(e){if(e.length<Zf)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=nw*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,p)=>p),o=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const m=t[c][0]-t[p][0],g=t[c][1]-t[p][1];m*m+g*g<=i&&(a[o(c)]=o(p))}const s=new Map;for(let c=0;c<e.length;c++){const p=o(c);s.set(p,[...s.get(p)??[],c])}let u=[];for(const c of s.values())c.length>u.length&&(u=c);if(u.length<Zf||u.length===e.length)return[];const l=new Set(u),h=e.map((c,p)=>p).filter(c=>!l.has(c));return h.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const st={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Mt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const iw=.42,aw=22,ow=43,sw=120,uw=1.5,lw=.72,cw=110,Qf=3;function wr(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*iw);if(l<1)return 0;let h=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-s)**2+(c-u)**2>l*l)continue;const m=(c*r+p)*a,g=o[m],y=o[m+1],w=o[m+2];!t&&g>=250&&y>=250&&w>=250||(n(g,y,w),h+=1)}return h}function dw(e){let t=0,n=0,r=0,i=wr(e,!1,(a,o,s)=>{const u=Mt(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=wr(e,!0,(a,o,s)=>{const u=Mt(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function hw(e){let t=0,n=0,r=wr(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=wr(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function pw(e){let t=0;const n=wr(e,!0,(r,i,a)=>{t+=Mt(r,i,a).s});return n===0?null:t/n}function fw(e){const t=dw(e);if(t===null||t.s<=aw)return 1;if(t.s>=sw){const n=hw(e);return n!==null&&n>=uw?6:3}return t.s>=ow?3:6}function mw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function gw(e,t){const n=[...t];if(e.length<Qf||t.length!==e.length)return n;const r=e.map(o=>pw(o)),i=r.filter(o=>o!==null);if(i.length<Qf)return n;const a=Fn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<lw*a&&o<cw&&(n[s]=1)}),n}function Jf(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=(p*l+m)*3;if((m+a-n)**2+(p+o-r)**2<=i*i){const w=((p+o)*e.width+(m+a))*e.channels;c[g]=e.data[w],c[g+1]=e.data[w+1],c[g+2]=e.data[w+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:l,height:h,channels:3,data:c}}function yw(e,t){const n=t.map(a=>Jf(e,a)),r=n.map(a=>fw(a)),i=mw(t,r);return gw(n,i)}function ww(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function em(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,c=Math.min((l+1)*i,e.width);let p=0,m=0;for(let g=Math.floor(s);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,s);if(!(y<=0))for(let w=Math.floor(h);w<c;w++){const b=Math.min(w+1,c)-Math.max(w,h);b<=0||(p+=e.data[g*e.width+w]*b*y,m+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,dt(p/m)))}}return{width:t,height:n,data:r}}function _w(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,dt(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function bw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(!(h<0||h>=t||c<0||c>=n)&&r[c*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function xw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(h>=0&&h<t&&c>=0&&c<n&&r[c*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function mo(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let c=0,p=0,m=0;for(;l<h;){const g=o[l++],y=g%t,w=g/t|0;c+=1,p+=y,m+=w;for(let b=-1;b<=1;b++)for(let $=-1;$<=1;$++){if($===0&&b===0)continue;const M=y+$,S=w+b;if(M<0||M>=t||S<0||S>=n)continue;const T=S*t+M;r[T]>0&&i[T]===0&&(i[T]=s,o[h++]=T)}}a[s]={area:c,centroidX:p/c,centroidY:m/c},s+=1}return{labels:i,stats:a}}function $w(e,t,n){return tm(Float32Array.from(e.data),e.width,t,n)}function tm(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const c=h-a,p=l-a,m=s*c-u*p+a,g=u*c+s*p+a,y=Math.floor(m),w=Math.floor(g),b=m-y,$=g-w,M=(k,I)=>k>=0&&k<t&&I>=0&&I<t?e[I*t+k]:r,S=M(y,w)*(1-b)+M(y+1,w)*b,T=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+h]=S*(1-$)+T*$}return i}const vw=.9,Sw=.34,Mw=[.55,.6,.66,.72],Tw=22,Ew=88,Iw=35,Wn=28,go=4,kw=Array.from({length:15},(e,t)=>-21+t*3),nm=[-2,0,2],Cw=3,Aw=.3;function Rw(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Ow(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),c=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+c)*u+(w+h)]=e.data[(y+r)*e.width+(w+t)];const p=Wn-2*go,m=em({width:u,height:u,data:l},p,p),g=new Float32Array(Wn*Wn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)g[(y+go)*Wn+(w+go)]=m.data[y*p+w]>110?1:0;return g}function zw(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Sw);if(u<4)return null;const l=o-u,h=s-u,c=2*u,p=2*u;if(c<6||p<6)return null;const m=new Int16Array(c*p),g=new Int16Array(c*p),y=new Int16Array(c*p),w=new Uint8Array(c*p),b=[],$=Math.min(c,p)/2;for(let R=0;R<c;R++)for(let K=0;K<p;K++){const U=((R+l)*n+(K+h))*i,{h:D,s:q,v:L}=Mt(a[U],a[U+1],a[U+2]),re=R*p+K;m[re]=D,g[re]=q,y[re]=L,Math.sqrt((K-p/2)**2+(R-c/2)**2)/$<=t&&(w[re]=1,b.push(L))}if(b.length<16)return null;const M=Lf(b,55);let S=0,T=0,k=0;const I=R=>m[R]>=Tw&&m[R]<=Ew&&g[R]>=Iw,v=R=>y[R]>=M&&g[R]<=95&&!I(R)&&w[R]===1;for(let R=0;R<c*p;R++)w[R]===1&&(k+=1,y[R]>=130&&!I(R)&&(S+=1),v(R)&&(T+=1));const C=S>.5*k&&T<.15*k,N=new Uint8Array(c*p);if(C){const R=Lf(b,45);for(let K=0;K<c*p;K++)N[K]=w[K]===1&&y[K]<=R?255:0}else for(let R=0;R<c*p;R++)N[R]=v(R)?255:0;const F={width:p,height:c,data:N},G=bw(F);let V=mo(G),z=V;if(V.stats.length<=1&&(V=mo(F),z=V,V.stats.length<=1))return null;const j=Math.min(c,p)/2;let Z=0,O=-1;for(let R=1;R<z.stats.length;R++){const K=z.stats[R];if(K===void 0)continue;const U=Math.hypot(K.centroidX-p/2,K.centroidY-c/2)/j,D=K.area*(1-.6*Math.min(U,1));D>O&&(O=D,Z=R)}if(Z===0)return null;const W=new Uint8Array(c*p);for(let R=0;R<c*p;R++)W[R]=z.labels[R]===Z?255:0;return Ow(xw({width:p,height:c,data:W}))}function Nw(e,t,n,r,i,a){const o=Wn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let c=0;c<o;c++){const p=c-i;if(p<0||p>=o)continue;const m=e[h*o+p];m!==0&&(u+=m,s+=m*n[l*o+c])}}return s/(u+r-s+1e-6)}function Bw(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of kw){const a=i===0?e:tm(e,Wn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of nm)for(const u of nm){const l=Nw(a,o,t,n,s,u);l>r&&(r=l)}}return r}function Pw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of Mw){const s=zw(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([Bw(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<Aw)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,Cw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const Dw=2560,Uw=.3,Lw=.5,Fw=1.6,Gw=3,Ww=5;function qw(e){const t=Math.min(1,Dw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let m=0;m<n;m++){const g=(m+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,g-y));for(let $=0;$<3;$++){const M=2-$,S=(h*e.width+y)*e.channels+M,T=(h*e.width+w)*e.channels+M,k=(c*e.width+y)*e.channels+M,I=(c*e.width+w)*e.channels+M,v=e.data[S]*(1-b)+e.data[T]*b,C=e.data[k]*(1-b)+e.data[I]*b,N=v*(1-p)+C*p;a[$*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function Vw(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function Hw(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function jw(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const c=u/h,p=l/h;let m=1/0,g=-1/0,y=1/0,w=-1/0;for(const[S,T]of e){const k=S*c+T*p,I=-S*p+T*c;k<m&&(m=k),k>g&&(g=k),I<y&&(y=I),I>w&&(w=I)}const b=g-m,$=w-y,M=b*$;if(M<n){n=M;const S=(m+g)/2,T=(y+w)/2;t={cx:S*c-T*p,cy:S*p+T*c,w:b,h:$,angle:Math.atan2(p,c)}}}return t}function Kw(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let w=p;w<=m;w++)for(let b=h;b<=c;b++){const $=b-r.cx,M=w-r.cy,S=$*i+M*a,T=-$*a+M*i;Math.abs(S)<=o&&Math.abs(T)<=s&&(g+=e[w*t+b],y+=1)}return y===0?0:g/y}function Yw(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,h]=o,[c,p]=s[1]<=u[1]?[s,u]:[u,s],[m,g]=l[1]<=h[1]?[l,h]:[h,l];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[p[0],p[1]]]}function Xw(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let m=0;m<o.length;m++)o[m]=e[m]>Uw?255:0;o=Vw(o,i,a);const s={width:i,height:a,data:o},{labels:u}=mo(s),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(m);b===void 0?w.set(m,[g,g]):(g<b[0]&&(b[0]=g),g>b[1]&&(b[1]=g))}const h=n/i,c=r/a,p=[];for(const[m,g]of l){const y=[];for(const[N,[F,G]]of g)y.push([F-.5,N-.5],[F-.5,N+.5],[G+.5,N-.5],[G+.5,N+.5]);const w=jw(Hw(y));if(Math.min(w.w,w.h)<Gw)continue;const b=Kw(e,i,a,w);if(b<Lw)continue;const $=w.w*w.h*Fw/(2*(w.w+w.h)),M={...w,w:w.w+2*$,h:w.h+2*$};if(Math.min(M.w,M.h)<Ww+2)continue;const T=Yw(M).map(([N,F])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(F*c)))]),k=T.map(N=>N[0]),I=T.map(N=>N[1]),v=Math.min(...k),C=Math.min(...I);p.push({quad:T,x:v,y:C,width:Math.max(...k)-v,height:Math.max(...I)-C,score:b})}return p.sort((m,g)=>g.score-m.score)}function Zw(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Qw([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let c=0;c<s;c++)for(let p=0;p<o;p++){const m=u[6]*p+u[7]*c+u[8],g=(u[0]*p+u[1]*c+u[2])/m,y=(u[3]*p+u[4]*c+u[5])/m,w=Math.floor(g),b=Math.floor(y),$=g-w,M=y-b,S=Math.max(0,Math.min(e.width-1,w)),T=Math.max(0,Math.min(e.width-1,w+1)),k=Math.max(0,Math.min(e.height-1,b)),I=Math.max(0,Math.min(e.height-1,b+1));for(let v=0;v<e.channels;v++){const C=e.data[(k*e.width+S)*e.channels+v],N=e.data[(k*e.width+T)*e.channels+v],F=e.data[(I*e.width+S)*e.channels+v],G=e.data[(I*e.width+T)*e.channels+v],V=C*(1-$)+N*$,z=F*(1-$)+G*$;l[(c*o+p)*e.channels+v]=Math.round(V*(1-M)+z*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?Wt(h,3):h}function Qw(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Wt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let c=0;c<r;c++){let p,m;n===1?(p=i-1-h,m=c):n===2?(p=r-1-c,m=i-1-h):(p=h,m=r-1-c);const g=(h*r+c)*a,y=(m*s+p)*a;for(let w=0;w<a;w++)l[y+w]=o[g+w]}return{width:s,height:u,channels:a,data:l}}const Jw=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Jw)*255));return e})();const qt=48,e_=320;function t_(e){return["blank",...e.characters," "]}function n_(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function r_(e,t){const n=Math.trunc(qt*t),r=e.width/e.height,i=Math.ceil(qt*r)>n?n:Math.ceil(qt*r),a=new Float32Array(3*qt*n),o=qt*n,s=e.width/i,u=e.height/qt;for(let l=0;l<qt;l++){const h=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,h-c));for(let g=0;g<i;g++){const y=(g+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),$=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const S=2-M,T=(c*e.width+w)*e.channels+S,k=(c*e.width+b)*e.channels+S,I=(p*e.width+w)*e.channels+S,v=(p*e.width+b)*e.channels+S,C=e.data[T]*(1-$)+e.data[k]*$,N=e.data[I]*(1-$)+e.data[v]*$,F=C*(1-m)+N*m;a[M*o+l*n+g]=(F/255-.5)/.5}}}return{tensor:a,width:n}}const i_=62,a_=8,o_=5;function yo(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function s_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function Qr(e,t){return e.length===0&&t.length===0?100:200*s_(e,t)/(e.length+t.length)}function rm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Qr(n(e),n(t))}function u_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(Qr(s,u),Qr(s,l),Qr(u,l))}function l_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[yo(i),yo(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function c_(e,t){const n=yo(e);if(!n||t.length===0)return null;const i=l_(t).map(h=>({...h,score:u_(n,h.key)})).sort((h,c)=>c.score-h.score).slice(0,a_).filter(h=>h.score>=i_);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=o_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[rm(s,u.key),u.score];for(const h of o.slice(1)){const c=[rm(s,h.key),h.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=h,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const im=5e3,wo=.75,am=15,d_=1.25,h_=2.4,p_=.003,f_=.85,m_=4,_o=2600,bo=2,xo=.3,om=.1,sm=.012,g_=22,um=.5,Jr=.12;function et(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function y_(e,t,n,r){const i=r.map(ae=>ae[0]),a=r.map(ae=>ae[1]),o=i.reduce((ae,be)=>ae+be,0)/i.length,s=a.reduce((ae,be)=>ae+be,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*m_,h=Math.max(0,Math.trunc(o-l)),c=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),m=Math.min(n.height,Math.trunc(s+l));if(c-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<_o?bo:1,y=et(e,n),w=et(e,t),b=new e.Rect(h,p,c-h,m-p),$=y.roi(b),M=new e.Mat;g!==1?e.resize($,M,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(M);const S=new e.Mat,T=new e.Mat;e.cvtColor(w,S,e.COLOR_RGB2GRAY),e.cvtColor(M,T,e.COLOR_RGB2GRAY);const k=new e.ORB(im),I=new e.KeyPointVector,v=new e.KeyPointVector,C=new e.Mat,N=new e.Mat,F=new e.Mat,G=[y,w,$,M,S,T,I,v,C,N,F],V=ae=>{for(const be of G)try{be.delete()}catch{}try{k.delete()}catch{}return ae};if(k.detectAndCompute(S,F,I,C),k.detectAndCompute(T,F,v,N),C.rows<8||N.rows<8)return V(null);const z=new e.BFMatcher(e.NORM_HAMMING),j=new e.DMatchVectorVector;z.knnMatch(C,N,j,2);const Z=[],O=[];for(let ae=0;ae<j.size();ae++){const be=j.get(ae);if(be.size()===2){const Oe=be.get(0),Ve=be.get(1);if(Oe.distance<wo*Ve.distance){const He=I.get(Oe.queryIdx).pt,je=v.get(Oe.trainIdx).pt;Z.push(He.x,He.y),O.push(je.x,je.y)}}}if(j.delete(),z.delete(),Z.length/2<8)return V(null);const W=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),R=e.matFromArray(O.length/2,1,e.CV_32FC2,O),K=new e.Mat,U=e.findHomography(W,R,e.RANSAC,5,K);let D=0;for(let ae=0;ae<K.rows;ae++)D+=K.data[ae];const q=U.rows===3?[...U.data64F]:null;if(W.delete(),R.delete(),K.delete(),U.delete(),q===null||D<am)return V(null);const L=1/g,re=[[L,0,h],[0,L,p],[0,0,1]],ue=[0,1,2].map(ae=>[0,1,2].map(be=>re[ae][0]*q[be]+re[ae][1]*q[3+be]+re[ae][2]*q[6+be]));return V({H:ue,inliers:D})}function $o(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*h}const i=Math.abs(r/2)/(t*n);if(i<p_||i>f_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=d_&&s<=h_}function vo(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function So(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(xo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(G=>[G[0],G[1],G[2]-o*(G[0]+G[1])+0]);for(let G=0;G<3;G++)l[G][2]=r[G][2]-o*r[G][0]-o*r[G][1];const h=et(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,c,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),h.delete(),p.delete();const g=m.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(G,V)=>{const z=(V*s+G)*3;w[0].push(g[z]),w[1].push(g[z+1]),w[2].push(g[z+2])};for(let G=0;G<u;G++)for(let V=0;V<s;V++)(G<y||G>=u-y||V<y||V>=s-y)&&b(V,G);const $=G=>{G.sort((z,j)=>z-j);const V=G.length>>1;return G.length%2?G[V]:(G[V-1]+G[V])/2},M=[$(w[0]),$(w[1]),$(w[2])],S=(G,V)=>{const z=(V*s+G)*3,j=g[z]-M[0],Z=g[z+1]-M[1],O=g[z+2]-M[2];return Math.sqrt(j*j+Z*Z+O*O)>g_},T=Math.max(6,Math.trunc(om*i)),k=Math.max(6,Math.trunc(om*a)),I=Math.max(2,Math.trunc(sm*i)),v=Math.max(2,Math.trunc(sm*a)),C=G=>{let V=0,z=0;for(const j of G)z=j?z+1:0,z>V&&(V=z);return V/Math.max(1,G.length)},N=G=>{let V,z,j,Z,O;if(G==="L"?(V=o,z=o+a,j=Math.max(0,o-I-T),Z=Math.max(0,o-I),O=!1):G==="R"?(V=o,z=o+a,j=o+i+I,Z=Math.min(s,o+i+I+T),O=!1):(V=Math.max(0,o-v-k),z=Math.max(0,o-v),j=o,Z=o+i,O=!0),z<=V||Z<=j)return 0;const W=[];if(O)for(let R=j;R<Z;R++){let K=0;for(let U=V;U<z;U++)S(R,U)&&K++;W.push(K/(z-V)>um)}else for(let R=V;R<z;R++){let K=0;for(let U=j;U<Z;U++)S(U,R)&&K++;W.push(K/(Z-j)>um)}return C(W)},F={L:N("L"),R:N("R"),T:N("T")};return c.delete(),m.delete(),F}const w_=6e3,__=8,lm=.5,b_=.6;function x_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<_o?bo:1,a=et(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(w_),l=new e.Mat,h=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(s,l,h,c);const p=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const w=et(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,$,M);const S=[w,$,M],T=()=>{for(const ue of S)ue.delete();b.delete()};if(M.rows<8){T();continue}const k=new e.DMatchVectorVector;m.knnMatch(M,c,k,2);const I=[],v=[];for(let ue=0;ue<k.size();ue++){const ae=k.get(ue);if(ae.size()===2){const be=ae.get(0);if(be.distance<wo*ae.get(1).distance){const Oe=$.get(be.queryIdx).pt,Ve=h.get(be.trainIdx).pt;I.push(Oe.x,Oe.y),v.push(Ve.x,Ve.y)}}}if(k.delete(),I.length/2<8){T();continue}const C=e.matFromArray(I.length/2,1,e.CV_32FC2,I),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),F=new e.Mat,G=e.findHomography(C,N,e.RANSAC,5,F);let V=0;for(let ue=0;ue<F.rows;ue++)V+=F.data[ue];const z=G.rows===3?[...G.data64F]:null;if(C.delete(),N.delete(),F.delete(),G.delete(),z===null||V<__){T();continue}const j=1/i,Z=[[j*z[0],j*z[1],j*z[2]],[j*z[3],j*z[4],j*z[5]],[z[6],z[7],z[8]]],O=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ue,ae])=>vo(Z,ue,ae));if(!$o(O,t.width,t.height)){T();continue}const W=et(e,t),R=e.matFromArray(3,3,e.CV_64F,Z.flat()),K=new e.Mat;e.warpPerspective(W,K,R,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const U=new e.Mat;e.cvtColor(K,U,e.COLOR_RGB2GRAY);const D=new e.Mat;e.matchTemplate(U,b,D,e.TM_CCOEFF_NORMED);const q=D.data32F[0];if(W.delete(),R.delete(),K.delete(),U.delete(),D.delete(),q<lm){T();continue}const L=So(e,t,y,Z),re=Mo(L);p.push({id:g,confidence:Math.max(0,q),footprint:O,built:L!==null&&Math.max(L.L,L.R,L.T)>=Jr,tuckRegion:To(O,re)}),T()}}finally{s.delete(),l.delete(),h.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return p}function Mo(e){return e!==null&&e.R>=Jr?["R"]:[]}function To(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=xo*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],$=n[w],M=n[b];let S=-(M[1]-$[1]),T=M[0]-$[0];const k=($[0]+M[0])/2,I=($[1]+M[1])/2;S*(k-s)+T*(I-u)<0&&(S=-S,T=-T);const v=Math.hypot(S,T);v<=1e-6||(S=S/v*o,T=T/v*o,h.push([$[0]+S,$[1]+T],[M[0]+S,M[1]+T]))}const c=h.map(y=>y[0]),p=h.map(y=>y[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...p));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...p))-g}}function $_(e,t,n,r){const i=y_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>vo(i.H,l,h));if(!$o(o,t.width,t.height))return null;const s=So(e,t,n,i.H);if(s===null)return null;const u=Mo(s);return{built:Math.max(s.L,s.R,s.T)>=Jr,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const v_=.88;function cm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(xo*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*v_),h=s-l;if(h<1)return null;const c=et(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(p,m),y=[...g.data64F],w=[0,1,2].flatMap(I=>[y[I*3],y[I*3+1],y[I*3+2]-o*y[I*3]-o*y[I*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),$=new e.Mat;e.warpPerspective(c,$,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=$.roi(new e.Rect(l,0,h,u)),S=new e.Mat;M.copyTo(S);const T=S.data,k=new Uint8ClampedArray(h*u*3);k.set(T.subarray(0,k.length));for(const I of[c,p,m,g,b,$,M,S])try{I.delete()}catch{}return{width:h,height:u,channels:3,data:k}}function S_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+s+l));if(c-h<8||m-p<8)return null;const g=Math.max(n.width,n.height)<_o?bo:1,y=et(e,n),w=et(e,t),b=y.roi(new e.Rect(h,p,c-h,m-p)),$=new e.Mat;g!==1?e.resize(b,$,new e.Size(0,0),g,g,e.INTER_CUBIC):b.copyTo($);const M=new e.Mat,S=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor($,S,e.COLOR_RGB2GRAY);const T=new e.ORB(im),k=new e.KeyPointVector,I=new e.KeyPointVector,v=new e.Mat,C=new e.Mat,N=new e.Mat,F=[y,w,b,$,M,S,k,I,v,C,N],G=ue=>{for(const ae of F)try{ae.delete()}catch{}try{T.delete()}catch{}return ue};if(T.detectAndCompute(M,N,k,v),T.detectAndCompute(S,N,I,C),v.rows<8||C.rows<8)return G(null);const V=new e.BFMatcher(e.NORM_HAMMING),z=new e.DMatchVectorVector;V.knnMatch(v,C,z,2);const j=[],Z=[];for(let ue=0;ue<z.size();ue++){const ae=z.get(ue);if(ae.size()===2){const be=ae.get(0),Oe=ae.get(1);if(be.distance<wo*Oe.distance){const Ve=k.get(be.queryIdx).pt,He=I.get(be.trainIdx).pt;j.push(Ve.x,Ve.y),Z.push(He.x,He.y)}}}if(z.delete(),V.delete(),j.length/2<8)return G(null);const O=e.matFromArray(j.length/2,1,e.CV_32FC2,j),W=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),R=new e.Mat,K=e.findHomography(O,W,e.RANSAC,5,R);let U=0;for(let ue=0;ue<R.rows;ue++)U+=R.data[ue];const D=K.rows===3?[...K.data64F]:null;if(O.delete(),W.delete(),R.delete(),K.delete(),D===null||U<am)return G(null);const q=1/g,L=[[q,0,h],[0,q,p],[0,0,1]],re=[0,1,2].map(ue=>[0,1,2].map(ae=>L[ue][0]*D[ae]+L[ue][1]*D[3+ae]+L[ue][2]*D[6+ae]));return G({H:re,inliers:U})}const M_=620;function T_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function dm(e,t,n,r){const i=hm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(T=>Math.trunc(T));if(Math.min(s,u)>=M_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),c=Math.max(0,a-l),p=Math.max(0,o-h),m=Math.min(t.width,a+s+l),g=Math.min(t.height,o+u+h);if(m<=c||g<=p)return null;const y=et(e,t),w=y.roi(new e.Rect(c,p,m-c,g-p)),b=new e.Mat;e.resize(w,b,new e.Size((m-c)*2,(g-p)*2),0,0,e.INTER_CUBIC);const $=T_(e,b);for(const T of[y,w,b])try{T.delete()}catch{}const M=[(a-c)*2,(o-p)*2,s*2,u*2],S=hm(e,$,n,M);return S===null?null:{...S,footprint:S.footprint.map(([T,k])=>[T*.5+c,k*.5+p])}}catch{return null}}function hm(e,t,n,r){const i=S_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,$])=>vo(i.H,b,$));if(!$o(o,t.width,t.height))return null;const s=et(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=et(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(c,p,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const b of[s,u,l,h,c,p,m])try{b.delete()}catch{}if(g<lm)return null;const y=So(e,t,n,i.H);if(y===null)return null;const w=Mo(y);return{built:Math.max(y.L,y.R,y.T)>=Jr,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}function E_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const c=r*l,p=r*h;if(t>=s-c&&t<=s+l+c&&n>=u-p&&n<=u+h+p){const m=l*h;m<a&&(a=m,i=[s,u,l,h])}}return i}const I_=.3,k_=.3;function C_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=I_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<k_;if(!r&&!h)return;t.some(([p,m])=>p>=a.zone.x0&&p<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(o)}),i}const Rt=128,Eo=.5;function Io(e){const t=Gn(e,Rt,Rt),n=Rt*Rt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function pm(e){const t=e[1]??0;return{built:t>=Eo,prob:t}}const _r=120,br=179,A_=1.3,R_=3.6,O_=.45,z_=6e-4,N_=.02,B_=6e3,P_=.78,D_=1.25,U_=2.4,L_=.05,F_=1.5,G_=.5,W_=.9,q_=150,V_=18,H_=34,j_=90,K_=130,Y_=.13,X_=.15,ei="magistrates-guild",ko="merchants-guild";function Z_(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[_r,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[br,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,c=new e.Mat,p=new e.Mat,m=e.connectedComponentsWithStats(l,h,c,p,8);l.delete(),h.delete(),p.delete();const g=t.width*t.height,y=[];for(let w=1;w<m;w++){const b=c.intAt(w,0),$=c.intAt(w,1),M=c.intAt(w,2),S=c.intAt(w,3),T=c.intAt(w,4),k=T/g;k<z_||k>N_||T/Math.max(M*S,1)<O_||y.push({x:b,y:$,w:M,h:S})}return c.delete(),{blobs:y,mask:s,maskWidth:t.width}}function Q_(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const q=et(e,r);h.gray=new s.Mat,s.cvtColor(q,h.gray,s.COLOR_RGB2GRAY),q.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const L=new s.Mat;u.detectAndCompute(h.gray,L,h.k,h.d),L.delete()}const c=n,p=new s.Mat,m=new s.KeyPointVector,g=new s.Mat;u.detectAndCompute(c,p,m,g),p.delete();const y=q=>(m.delete(),g.delete(),q);if(h.d.rows<8||g.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(h.d,g,w,2);const b=[],$=[];for(let q=0;q<w.size();q++){const L=w.get(q);if(L.size()===2){const re=L.get(0);if(re.distance<P_*L.get(1).distance){const ue=h.k.get(re.queryIdx).pt,ae=m.get(re.trainIdx).pt;b.push(ue.x,ue.y),$.push(ae.x,ae.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),S=s.matFromArray($.length/2,1,s.CV_32FC2,$),T=new s.Mat,k=s.findHomography(M,S,s.RANSAC,5,T);if(M.delete(),S.delete(),T.delete(),k.rows!==3)return k.delete(),y(null);const I=[...k.data64F],v=(q,L)=>{const re=I[6]*q+I[7]*L+I[8];return[(I[0]*q+I[1]*L+I[2])/re,(I[3]*q+I[4]*L+I[5])/re]},C=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([q,L])=>v(q,L));if(C.some(q=>!Number.isFinite(q[0])||!Number.isFinite(q[1])))return k.delete(),y(null);const N=C.map((q,L)=>{const re=C[(L+1)%4];return Math.hypot(re[0]-q[0],re[1]-q[1])}),F=Math.min(...N);if(F<1)return k.delete(),y(null);const G=Math.max(...N)/F;let V=0;for(let q=0;q<4;q++){const[L,re]=C[q],[ue,ae]=C[(q+1)%4];V+=L*ae-ue*re}const z=t,j=Math.abs(V/2)/(z.rows*z.cols);if(G<D_||G>U_||j<L_||j>F_)return k.delete(),y(null);const Z=new s.Mat;s.warpPerspective(z,Z,k,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),k.delete();const O=new s.Mat;s.cvtColor(Z,O,s.COLOR_RGB2GRAY),Z.delete();const W=Math.trunc(r.height/2),R=O.roi(new s.Rect(0,0,r.width,W)),K=h.gray.roi(new s.Rect(0,0,r.width,W)),U=new s.Mat;s.matchTemplate(R,K,U,s.TM_CCOEFF_NORMED);const D=U.data32F[0];return R.delete(),K.delete(),U.delete(),O.delete(),y(D)}function J_(e,t,n){let r,i;if(n===ei)r=ko,i=Y_;else if(n===ko)r=ei,i=X_;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,c=null;for(const[p,m]of[[0,l],[l,s]]){let g=0,y=0;for(let b=o;b<o+u;b++)for(let $=a+p;$<a+m;$++){const M=(b*e.width+$)*e.channels,{h:S,s:T,v:k}=Mt(e.data[M],e.data[M+1],e.data[M+2]);if(S>=_r&&S<=br&&T>=30&&T<=170&&k<=170)continue;g++,(r===ko?S>=V_&&S<=H_&&T>=j_&&k>=K_:S>=95&&S<=130&&T>=80)&&y++}if(g<20)continue;const w=y/g;w>h&&(h=w,c={x:a+p,y:o,w:m-p,h:u})}return h>=i&&c!==null?{id:r,box:c}:null}const eb=1.7,tb=140,nb=170,rb=.2,ib=.1,fm=240,mm=80,gm=60,ab=50,ym="scientists-guild",wm="tacticians-guild",ti=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function ob(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let S=0;S<o;S++){let T=0;for(let k=0;k<a;k++)e[(i+S)*t+r+k]>0&&T++;s[S]=T/a}const u=[];for(let S=0;S<o;S++)s[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],c=h-l;if(c<5)return[];const p=a/c;if(p<A_||p>R_)return[];if(p>=eb)return[{x:r,y:i+l,w:a,h:c}];const m=new Float32Array(o),g=.3*(8*.5-1)+.8,y=[];let w=0;for(let S=-4;S<=4;S++){const T=Math.exp(-(S*S)/(2*g*g));y.push(T),w+=T}for(let S=0;S<o;S++){let T=0;for(let k=-4;k<=4;k++){const I=Math.min(o-1,Math.max(0,S+k));T+=s[I]*y[k+4]}m[S]=T/w}const b=l+Math.trunc(c*.3),$=l+Math.trunc(c*.78);let M=l+Math.trunc(c/2);if($>b){let S=1/0;for(let T=b;T<$;T++)m[T]<S&&(S=m[T],M=T)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function sb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const c=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:o,height:s,channels:3,data:u}}function ub(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Mt(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=tb&&o<=nb&&n++)}return t===0?0:n/t}function lb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Mt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=_r&&a<=br)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function _m(e,t){const n=et(e,t),r=new e.Mat;e.resize(n,r,new e.Size(fm,mm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:fm,height:mm,channels:3,data:i}}function cb(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function bm(e,t){const n=cb(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:w,s:b,v:$}=Mt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=_r&&w<=br&&b>=30&&b<=170&&$<=170)&&$>=40&&(i[g]=1,a++)}const o=a<20,s=et(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,c=0,p=0,m=0;for(let g=0;g<r;g++)!o&&i[g]===0||(h+=l[g*3]*100/255,c+=l[g*3+1]-128,p+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[h/m,c/m,p/m]}function db(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:c,v:p}=Mt(e.data[l],e.data[l+1],e.data[l+2]);h>=_r&&h<=br&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function hb(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Mt(e.data[i],e.data[i+1],e.data[i+2]);o>=gm&&s>=ab?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<gm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function pb(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function xm(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function fb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=_m(e,a);n.set(i,xm(e,o)),ti.includes(i)&&r.set(i,bm(e,o))}return{gray:n,warmLab:r}}function mb(e,t,n){const r=_m(e,t),i=db(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ei;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return ym;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return wm;const a=hb(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=ei;else if(s==="green")u=ym;else if(s==="red")u=wm;else{const l=xm(e,r);let h="",c=-2;for(const p of ti){const m=n.gray.get(p);if(m===void 0)continue;const g=pb(l,m);g>c&&(c=g,h=p)}u=h||ti[0]}if(ti.includes(u)&&n.warmLab.size>0){const l=bm(e,r);let h=u,c=1/0;for(const[p,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<c&&(c=g,h=p)}return h}return u}function gb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=Z_(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(B_),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const m=et(e,t);let g=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),$=w.y+Math.trunc(w.h/2),M=Math.max(q_,Math.trunc(W_*Math.max(w.w,w.h))),S=Math.max(0,b-M),T=Math.max(0,$-M),k=Math.min(t.width,b+M),I=Math.min(t.height,$+M);if(k-S<16||I-T<16)continue;const v=m.roi(new l.Rect(S,T,k-S,I-T)),C=new l.Mat;l.cvtColor(v,C,l.COLOR_RGB2GRAY);let N=null,F=-2;for(const[j,Z]of n){if(r!==void 0&&Date.now()>r)break;const O=Q_(e,v,C,Z,p.get(j),h,c);O!==null&&O>F&&(F=O,N=j)}v.delete(),C.delete();const G=new Set;if(N!==null&&F>=G_){a.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),G.add(N);const j=J_(t,w,N);j&&(a.push({id:j.id,boundingBox:{x:j.box.x,y:j.box.y,width:j.box.w,height:j.box.h},confidence:.9}),G.add(j.id))}if(i===void 0||i.size===0)continue;const V=ob(s,u,w);if(V.length!==2)continue;const z=V.map(j=>sb(t,j));if(!z.some(j=>j.width*j.height===0||lb(j)<ib))for(let j=0;j<V.length;j++){const Z=z[j];if(ub(Z)<rb)continue;g===null&&(g=fb(e,i));const O=mb(e,Z,g);if(O&&!G.has(O)){G.add(O);const W=V[j];a.push({id:O,boundingBox:{x:W.x,y:W.y,width:W.w,height:W.h},confidence:1})}}}}finally{m.delete();for(const w of p.values()){const b=w;for(const $ of["gray","k","d"])try{(y=b[$])==null||y.delete()}catch{}}try{h.delete(),c.delete()}catch{}}return a}const $m=128,yb=.56,wb=15,_b=.58,bb=70,xb=50,$b=.12,vb=.2,Sb=.1,Mb=.17,vm=.15;function Tb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Sm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),c=Math.min(n,o+u),p=Math.min(r,s+u),m=c-l,g=p-h,y=new Uint8Array(m*g*i);for(let w=0;w<g;w++){const b=((w+h)*n+l)*i;y.set(a.subarray(b,b+m*i),w*m*i)}return{width:m,height:g,channels:i,data:y}}function Eb(e){const t=Sm(e,yb),n=ww(t),r=em(n,$m,$m);return _w(r)}function Ib(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function kb(e){const t=new Map([["masonry",0],["strategy",0]]),n=Sm(e,_b),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const m=p*a,{h:g,s:y,v:w}=Mt(o[m],o[m+1],o[m+2]);y>=bb&&w>=xb&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const h=u/s,c=l/s;return h>=$b&&t.set("masonry",vm*Math.min(1,h/vb)),c>=Sb&&t.set("strategy",vm*Math.min(1,c/Mb)),t}function Cb(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=Eb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=wb)a.push($w(n,l,i));const o=new Map;for(const[l,h]of t){let c=-1/0;for(const p of a){const m=Ib(p,h);m>c&&(c=m)}o.set(l,c)}for(const[l,h]of kb(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const rn=224,Ab=512,Rb=[.485,.456,.406],Ob=[.229,.224,.225];function zb(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function Nb(e){const t=lo(e,rn,rn),n=rn*rn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Rb[a])/Ob[a];return r}function Bb(e){const t=3*rn*rn,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(Nb(Wt(e,r)),r*t);return n}function Pb(e,t=Ab){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function Db(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const qn=96,Ub=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Lb=.45;function Fb(e){const t=lo(e,qn,qn),n=qn*qn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Gb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Lb?Ub[t]??"":"",prob:n}}const Vn=128,Wb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],qb=.5,Vb=.9;function Hb(e){const t=Gn(e,Vn,Vn),n=Vn*Vn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function jb(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,c=(o*n+s)*r;for(let p=0;p<r;p++)a[c+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function Kb(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=jb(n);return n}function Yb(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function Xb(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:Kb(e,i),o=await t(Hb(a)),s=Yb(o);s.prob>r&&(r=s.prob,n=s.index)}return{id:r>=qb?Wb[n]??"":"",prob:r}}const Hn=96,Zb=[1,2,3,4,5,6,7],Qb=.8;function Jb(e){const t=co(e,e.width*2,e.height*2),n=Gn({width:e.width*2,height:e.height*2,channels:3,data:t},Hn,Hn),r=Hn*Hn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function e1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:Zb[t],prob:e[t]}}const an=128,Mm=.35,t1=["fp","laurel"],n1=.85;function r1(e){const r=(e.width<an&&e.height<an?co:Gn)(e,an,an),i=an*an,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function i1(e){return e[t1.indexOf("fp")]}const on=128,a1=.15,Tm=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],o1=7,s1=.9;function u1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*a1),h=Math.max(0,dt(s-l/2)),c=Math.max(0,dt(u-l/2)),p=Math.min(t,dt(s+l/2)),m=Math.min(n,dt(u+l/2));return p-h<8||m-c<8?null:{x:h,y:c,w:p-h,h:m-c}}function l1(e){const r=(e.width<on&&e.height<on?co:Gn)(e,on,on),i=on*on,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function c1(e){let t=0;for(let i=1;i<Tm.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=o1;return{className:Tm[t],probability:n,rejected:r&&n>=s1}}const ni=3,d1=2.2,h1=.3,p1=.65,f1=3,m1=1.3,g1=.77;function Em(e,t,n){const[r,i,a,o]=e,s=[];return r<=ni&&s.push("gauche"),i<=ni&&s.push("haut"),r+a>=t-ni&&s.push("droit"),i+o>=n-ni&&s.push("bas"),s}function Im(e){const t=e[3]/Math.max(e[2],1);return t>=m1?"portrait":t<=g1?"paysage":null}function Co(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function y1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>p1)return!0;return!1}function w1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>Em(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(y1(n,r,i))return u("photo-piste");if(s.length<f1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=Co(s.map(w=>w.box[2]*w.box[3])),h=Co(s.map(w=>w.box[2])),c=Co(s.map(w=>w.box[3])),p=new Set(s.map(w=>Im(w.box)).filter(w=>w!==null)),m=[...s],g=[],y=[];for(const w of o){const b=Em(w.box,r,i),[,,$,M]=w.box,S=l>0?$*M/l:0,T=[];(b.includes("gauche")||b.includes("droit"))&&T.push(h>0?$/h:1),(b.includes("haut")||b.includes("bas"))&&T.push(c>0?M/c:1);const k=T.length>0?Math.min(...T):1,I=Im(w.box);S>d1?g.push({banner:w,edgeReason:"bord-grosse"}):k<h1?g.push({banner:w,edgeReason:"bord-tronquee"}):I!==null&&p.size>0&&!p.has(I)?g.push({banner:w,edgeReason:"bord-orientation-adverse"}):(m.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:m,dropped:g,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const _1=1,b1=1.5;function x1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function $1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function v1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function S1(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let h=null;for(const[p,m]of x1(e)){const g=$1(u,l,p,m);g!==null&&(h===null||g[0]<h[0])&&(h=g)}if(h===null)return null;const c=v1(e);return c===null?null:{distBord:h[0]/r,decalLat:h[1]/r,perpendiculaire:c!==o>s}}catch{return null}}function M1(e,t,n,r=_1,i=b1){const a=[];for(const[o,s]of t??[]){const u=S1(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const sn=64,km=.5,T1=[.67,1.24];function E1(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=a+w,$=b-n;for(let M=0;M<u;M++){const S=i+M,T=S-t,k=(w*u+M)*3;if(T*T+$*$<=p){const I=(b*e.width+S)*h;c[k]=e.data[I],c[k+1]=e.data[I+1],c[k+2]=e.data[I+2]}else c[k]=255,c[k+1]=255,c[k+2]=255}}const m=Gn({width:u,height:l,channels:3,data:c},sn,sn),g=sn*sn,y=new Float32Array(3*g);for(let w=0;w<g;w++)for(let b=0;b<3;b++)y[b*g+w]=m[w*3+b]/255;return y}function I1(e){return e[1]}const k1=2.25,ri=3,C1=1.15,A1=.5,R1=2.5,O1=.75,z1=2.25,N1=1.3,B1=.77;function ii(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function P1(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Cm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function D1(e,t,n){if(n.length>=3&&Cm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,c=l-s,p=h*h+c*c,m=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*c)/p));r=Math.min(r,Math.hypot(e-(o+m*h),t-(s+m*c)))}return r}function U1(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function L1(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let c=0,p=1;const m=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[g,y]of m){if(g===0){if(y<0)return!1;continue}const w=y/g;if(g<0?c=Math.max(c,w):p=Math.min(p,w),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const Ao=e=>e.box[3]/Math.max(1,e.box[2]),Vt=e=>Ao(e)>C1,jn=e=>Ao(e)>=N1||Ao(e)<=B1;function Ro(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Oo(e,t,n,r,i){const a=new Set(t),o=[...e.map((O,W)=>({box:[O[0],O[1],O[2],O[3]],kind:a.has(W)?"card":"tucked",src:["banner",W]})),...n.map((O,W)=>({box:[O[0],O[1],O[2],O[3]],kind:"wonder",src:["wonder",W]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player"};const l=o.map(O=>[O.box[0]+O.box[2]/2,O.box[1]+O.box[3]/2]);let h=o.filter(O=>O.kind!=="wonder").map(O=>Math.hypot(O.box[2],O.box[3])).sort((O,W)=>O-W);h.length===0&&(h=o.map(O=>Math.hypot(O.box[2],O.box[3])).sort((O,W)=>O-W));const c=h[Math.floor(h.length/2)],p=(k1*c)**2,m=o.map((O,W)=>W),g=O=>{let W=O;for(;m[W]!==W;)m[W]=m[m[W]],W=m[W];return W},y=o.map((O,W)=>O.kind==="card"?W:-1).filter(O=>O>=0),w=o.map((O,W)=>O.kind!=="card"?W:-1).filter(O=>O>=0);for(let O=0;O<y.length;O+=1)for(let W=O+1;W<y.length;W+=1){const R=y[O],K=y[W],U=o[R],D=o[K];if(jn(U)&&jn(D)&&Vt(U)!==Vt(D))continue;const q=l[R][0]-l[K][0],L=l[R][1]-l[K][1],re=q*q+L*L;let ue=re<=p;!ue&&jn(U)&&jn(D)&&Vt(U)===Vt(D)&&re<=(4*c)**2&&(ue=ii(Ro(U),Ro(D))<=.5*c),ue&&(m[g(R)]=g(K))}for(let O=0;O<w.length;O+=1)for(let W=O+1;W<w.length;W+=1){const R=w[O],K=w[W];ii(o[R].box,o[K].box)<=O1*c&&(m[g(R)]=g(K))}const b=new Map;for(const O of w){const W=g(O);b.set(W,[...b.get(W)??[],O])}const $=new Map;for(const O of y){const W=g(O);$.set(W,[...$.get(W)??[],O])}for(const O of b.values()){const W=O.filter(D=>o[D].kind==="wonder"&&jn(o[D])).map(D=>Vt(o[D])),R=W.length>0?W.filter(Boolean).length*2>W.length:null,K=[];for(const[D,q]of $){let L=Number.POSITIVE_INFINITY;for(const ae of O)for(const be of q)L=Math.min(L,ii(o[ae].box,o[be].box));if(L>z1*c)continue;const ue=q.filter(ae=>Vt(o[ae])).length/q.length>=.5;R!==null&&ue!==R||K.push([D,L,ue])}if(K.length===0)continue;const U=new Set(K.map(D=>D[2]));if(K.length>=2&&U.size===1&&R!==null){const D=K[0][0];for(const[q]of K.slice(1))m[g(q)]=g(D);m[g(O[0])]=g(D)}else{const D=K.reduce((q,L)=>L[1]<q[1]?L:q);m[g(O[0])]=g(D[0])}}let M=new Map;for(let O=0;O<o.length;O+=1){const W=g(O);M.set(W,[...M.get(W)??[],O])}const S=o.map((O,W)=>O.kind==="wonder"?W:-1).filter(O=>O>=0);if(S.length>0){const O=(R,K)=>{const[U,D,q,L]=Ro(o[R]),[re,ue,ae,be]=o[K].box,Oe=Math.max(0,Math.min(U+q,re+ae)-Math.max(U,re)),Ve=Math.max(0,Math.min(D+L,ue+be)-Math.max(D,ue));return Oe*Ve>=.9*o[R].box[2]*o[R].box[3]},W=new Map;for(let R=0;R<o.length;R+=1)if(!(o[R].kind!=="card"||!jn(o[R])))for(const K of S){const U=ii(o[R].box,o[K].box);if(U<=.8*c&&Vt(o[R])!==Vt(o[K])&&O(R,K)){const D=W.get(K);(!D||U<D[1])&&W.set(K,[R,U])}}for(const[R,[K]]of W){const U=g(R);for(const[D,q]of M){const L=q.indexOf(K);if(L>=0&&D!==U){q.splice(L,1),M.set(U,[...M.get(U)??[],K]),o[K].kind="tucked";break}}}M=new Map([...M].filter(([,R])=>R.length>0))}const T=O=>O.filter(W=>o[W].kind==="card").length,k=O=>{const W=O.filter(R=>o[R].kind==="card"||o[R].kind==="wonder");return W.length===0?null:W.filter(R=>Vt(o[R])).length/W.length},I=O=>[O.reduce((W,R)=>W+l[R][0],0)/O.length,O.reduce((W,R)=>W+l[R][1],0)/O.length],v=[i[0]/2,i[1]/2],C=[...M.values()].sort((O,W)=>{const R=T(O),K=T(W);if(R!==K)return K-R;const U=Math.hypot(I(O)[0]-v[0],I(O)[1]-v[1]),D=Math.hypot(I(W)[0]-v[0],I(W)[1]-v[1]);return U-D}),N=I(C[0]),F=k(C[0]),G=C.map((O,W)=>{if(W===0||T(O)<ri)return"player";const R=k(O),K=R!==null&&F!==null&&Math.abs(R-F)>=A1,U=I(O),D=r.some(q=>L1(N,U,q));return K||D?"opponent":"player"});if(!G.includes("opponent")){const O=R=>R.reduce((K,U)=>K+(o[U].kind==="wonder"?1:0),0);let W=G.map((R,K)=>K).filter(R=>R>0&&(T(C[R])>=ri||O(C[R])>=2));if(W.reduce((R,K)=>R+O(C[K]),0)<1&&(W=[]),W.length>0&&(T(C[0])<2*ri||W.reduce((R,K)=>R+T(C[K]),0)<2*ri)&&(W=[]),W.length>0){const R=new Map(W.map(D=>[D,I(C[D])])),K=(D,q)=>(D[0]-q[0])**2+(D[1]-q[1])**2;if(W.every((D,q)=>W.slice(q+1).every(L=>K(R.get(D),R.get(L))<Math.min(K(R.get(D),N),K(R.get(L),N)))))for(const D of W)G[D]="opponent"}}const V=[],z=[];let j=!1;C.forEach((O,W)=>{const R=G[W];R==="opponent"&&(j=!0);const K=[],U=[];for(const D of O){const[q,L,re,ue]=o[D].box;K.push([q,L],[q+re,L],[q,L+ue],[q+re,L+ue]),U.push(o[D].box);const[ae,be]=o[D].src;ae==="banner"?s[be]=R:u[be]=R}V.push([R,P1(K)]),z.push([R,U])});const Z=(O,W)=>{if(V.length===0)return"player";const R=c>0?R1*c:Number.POSITIVE_INFINITY,K=L=>Math.min(...z[L][1].map(re=>U1(O,W,re))),U=V.map(([,L],re)=>L.length>=3&&Cm(O,W,L)?re:-1).filter(L=>L>=0);if(U.length>0){const L=U.reduce((re,ue)=>K(ue)<K(re)?ue:re);return V[L][0]}let D=-1,q=Number.POSITIVE_INFINITY;return V.forEach(([,L],re)=>{const ue=D1(O,W,L);ue<q&&(D=re,q=ue)}),D>=0&&q<=R?V[D][0]:"none"};return{bannerOwner:s,wonderOwner:u,opponentFound:j,hulls:V,hullBoxCounts:z.map(([,O])=>O.length),pointOwner:Z}}const F1=1280,G1=80,W1=3,q1=3,V1=.3,H1=2.4,j1=1,K1=5.2,Y1=5;function zo(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function X1(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=V1&&r/n<=H1&&i/n>=j1&&i/n<=K1&&i/r<=Y1}function Z1(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*F1/r<G1}function Q1(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let h=n[0],c=1/0;for(const p of n){const m=(u-p.cx)**2+(l-p.cy)**2;m<c&&(c=m,h=p)}h.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Am(e,t,n,r,i=[]){const a=zo(n);if(!Z1(e,t,a))return[];const o=r.filter(l=>l.n>=q1&&l.poly.length>0).slice().sort((l,h)=>h.n-l.n).slice(0,2),s=Math.round(a*W1),u=[];for(const l of Q1(o,i)){const h=l.poly.map(w=>w[0]),c=l.poly.map(w=>w[1]);if(h.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...h))-s),m=Math.max(0,Math.trunc(Math.min(...c))-s),g=Math.min(e,Math.trunc(Math.max(...h))+s),y=Math.min(t,Math.trunc(Math.max(...c))+s);g>p&&y>m&&u.push([p,m,g,y])}return u}function J1(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return X1(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}function e2(e,t,n,r,i){return Am(e,t,n,r,i)}function t2(e,t){var s,u,l,h;const[n,r,i,a]=t,o=[];for(const c of e){const p=Number((s=c.box)==null?void 0:s[0]),m=Number((u=c.box)==null?void 0:u[1]),g=Number((l=c.box)==null?void 0:l[2]),y=Number((h=c.box)==null?void 0:h[3]);[p,m,g,y].every(Number.isFinite)&&(p+g<n||p>i||m+y<r||m>a||o.push({...c,box:[Math.round(p-n),Math.round(m-r),Math.round(g),Math.round(y)]}))}return o}function n2(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,a=r.y+r.height/2;let o=!1;for(const s of t){if(n.id&&s.id===n.id){o=!0;break}const u=s.boundingBox,l=u.x+u.width/2,h=u.y+u.height/2,c=.5*Math.min(u.width,u.height);if((i-l)**2+(a-h)**2<c*c){o=!0;break}}o||t.push(n)}return t}function Rm(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const r2=1.1,i2=3.2,a2=20,o2=.5,s2=1280,u2=.18,l2=28,c2=.3;function d2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,c)=>c)];const l=(s.reduce((h,c)=>h+c,0)/s.length+u.reduce((h,c)=>h+c,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function h2(e,t,n=r2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of d2(s)){if(l.length===0)continue;const h=l.map(C=>e[C]),c=h.map(C=>Math.min(C[2],C[3])).sort((C,N)=>C-N),p=c[Math.trunc(c.length/2)],m=i2*p,g=Math.max(0,Math.min(...h.map(C=>C[0]))-m),y=Math.max(0,Math.min(...h.map(C=>C[1]))-m),w=Math.min(r,Math.max(...h.map(C=>C[0]+C[2]))+m),b=Math.min(i,Math.max(...h.map(C=>C[1]+C[3]))+m),$=Math.max(w-g,b-y);if($<=0)continue;const M=o2*p*s2/$,S=M>0?Math.max(1,Math.ceil(a2/M)):1;if(S===1){u.push([Math.trunc(g),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const T=w-g>=b-y,I=(T?w-g:b-y)/S,v=I*(1+u2);for(let C=0;C<S;C++){let N=(T?g:y)+C*I-(v-I)/2;N=Math.max(T?g:y,N);const F=Math.min(T?w:b,N+v);u.push(T?[Math.trunc(N),Math.trunc(y),Math.trunc(F),Math.trunc(b)]:[Math.trunc(g),Math.trunc(N),Math.trunc(w),Math.trunc(F)])}}return u.filter(([l,h,c,p])=>Math.max(r,i)/Math.max(1,Math.max(c-l,p-h))>=n)}function p2(e,t,n,r=l2){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const c=(s+l)/2+i,p=(u+h)/2+a;o.some(([g,y,w,b])=>{const $=c-(g+w)/2,M=p-(y+b)/2;return Math.hypot($,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function f2(e,t,n,r=c2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function m2(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function g2(e,t,n,r){return n.length===0?!1:m2(e,t,n)&&!f2(e,t,r)}const Om=4,zm=8,ai=5,Cn="base-game rule";function Ot(e,t){return{code:e,message:t,severity:"warning"}}function No(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function y2(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Om&&i.push(Ot("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Om} (${Cn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=No(n);return a.length>0&&i.push(Ot("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${Cn}), so one of the two readings is wrong.`)),i}function w2(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>zm&&t.push(Ot("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${zm} are in play (${Cn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(c=>l.has(c)).sort();h.length>0&&t.push(Ot("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function _2(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>ai&&n.push(Ot("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ai} are in play (${Cn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=No(r);if(i.length>0&&n.push(Ot("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Cn}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==ai&&n.push(Ot("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${ai} are in play (${Cn}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Ot("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function b2(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(Ot("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=No(e.filter(o=>!!o));return a.length>0&&r.push(Ot("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${Cn}).`)),r}const x2=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],$2=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],v2=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],S2=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],M2=[...$2,...v2,...S2,...x2];Object.fromEntries(M2.map(e=>[e.id,e]));const T2=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Nm=.2,E2=.3,Bm=.25;function I2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Bm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=Bm)&&r>1==h>1)return!0}return!1}async function k2(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*Nm),u=Math.round(o*Nm),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),m=c-l,g=p-h;if(m<=0||g<=0)return null;const y=e.channels,w=new Uint8ClampedArray(m*g*y);for(let M=0;M<g;M++){const S=((h+M)*e.width+l)*y;w.set(e.data.subarray(S,S+m*y),M*m*y)}const b={width:m,height:g,channels:y,data:w};let $=null;for(let M=0;M<4;M++){const S=M===0?b:Wt(b,M),T=S.width,k=T-Math.floor(E2*T),I=T-k;if(I<=0)continue;const v=new Uint8ClampedArray(I*S.height*S.channels);for(let V=0;V<S.height;V++){const z=(V*T+k)*S.channels;v.set(S.data.subarray(z,z+I*S.channels),V*I*S.channels)}const C={width:I,height:S.height,channels:S.channels,data:v},N=Io(C),G=(await n.run({[n.inputNames[0]]:new qe("float32",N,[1,3,Rt,Rt])}))[n.outputNames[0]].data[1]??0;$=$===null?G:Math.max($,G)}return $}async function Pm(e,t,n,r,i,a,o){var m;const s=(g,y,w,b)=>{const $=Math.max(0,Math.round(g)),M=Math.max(0,Math.round(y)),S=Math.min(n.width,Math.round(g+w)),T=Math.min(n.height,Math.round(y+b)),k=S-$,I=T-M;if(k<=0||I<=0)return null;const v=n.channels,C=new Uint8ClampedArray(k*I*v);for(let N=0;N<I;N++){const F=((M+N)*n.width+$)*v;C.set(n.data.subarray(F,F+k*v),N*k*v)}return{width:k,height:I,channels:v,data:C}},u=async g=>(await i.run({[i.inputNames[0]]:new qe("float32",g,[1,3,Vn,Vn])}))[i.outputNames[0]].data,l=new Map;for(const g of r){const[y,w,b,$]=g;if(b<=0||$<=0)continue;const M=s(y,w,b,$);if(M===null)continue;const{id:S,prob:T}=await Xb(M,u);if(S===""||T<Vb)continue;const k=l.get(S);(k===void 0||T>k.prob)&&l.set(S,{prob:T,box:g})}const h=[],c=await e.tuckClassifier(),p=await e.tuckBoxClassifier();for(const[g,{prob:y,box:w}]of l){const[b,$,M,S]=w;let T={x:Math.round(b),y:Math.round($),width:Math.round(M),height:Math.round(S)},k=null,I=[],v=null;if(Date.now()<a)try{const Z=await e.wonderRef(g);if(Z!==null){const O=dm(t,n,Z,w);if(O!==null){k=O.footprint,I=O.overflow;const W=k.map(D=>D[0]),R=k.map(D=>D[1]),K=Math.max(0,Math.round(Math.min(...W))),U=Math.max(0,Math.round(Math.min(...R)));if(T={x:K,y:U,width:Math.min(n.width,Math.round(Math.max(...W)))-K,height:Math.min(n.height,Math.round(Math.max(...R)))-U},c!==null)try{const D=cm(t,n,Z,k);if(D!==null){const q=Io(D),L=await c.run({[c.inputNames[0]]:new qe("float32",q,[1,3,Rt,Rt])});v=pm(L[c.outputNames[0]].data).prob}}catch{}}}}catch(Z){console.warn(`[wonders-cls] ${g} registration failed:`,Z)}const C=k!==null?To(k,I):null,N=[];if(v!==null&&N.push(v>=Eo?1:0),p!==null)try{const Z=await k2(n,w,p);Z!==null&&N.push(Z>=Eo?1:0)}catch{}const F=C??T,G=o.some(Z=>{const O=Z.box[0]+Z.box[2]/2,W=Z.box[1]+Z.box[3]/2;return O>=F.x&&O<=F.x+F.width&&W>=F.y&&W<=F.y+F.height});N.push(G?1:0);let V=N.length>0&&N.reduce((Z,O)=>Z+O,0)*2>N.length;V&&I2(F,T,o)&&(V=!1);const z={id:g,name:((m=T2[g])==null?void 0:m.name)??g,builtWithCardUnderneath:V,boundingBox:T,confidence:Math.round(y*1e4)/1e4,...C?{tuckRegion:C}:{}},j=C??T;h.push({obj:z,edgeScores:null,zone:{x0:j.x,y0:j.y,x1:j.x+j.width,y1:j.y+j.height},quad:k,region:C})}return h}async function C2(e,t,n,r,i,a){const o=await e.localiseWonders(n);return o.length===0?[]:Pm(e,t,n,o,r,i,a)}function A2(e,t){const n=Rm(e.obj.boundingBox,t),r=e.region===null?null:Rm(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([a,o])=>[a+t[0],o+t[1]]),region:r}}async function R2(e){try{const t=e2(e.image.width,e.image.height,e.banners.map(o=>o.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const o of t){const s=e.cropFrame(o);if(!(s.width<=0||s.height<=0))for(const u of await e.detect(s,t2(e.banners,o)))n.push(A2(u,o))}if(n.length===0)return[];const r=[...e.known.map(o=>({boundingBox:o.boundingBox,id:o.id,neuf:-1})),...n.map((o,s)=>({boundingBox:o.obj.boundingBox,id:o.obj.id,neuf:s}))],i=n2(r),a=[];for(const o of i){const s=o.neuf;s>=0&&a.push(n[s])}return a}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const Be="/7wd-scorer/models/";let Dm=!1;const oi=new Map;function Um(){var e;Dm||(Le.wasm.wasmPaths="/7wd-scorer/ort/",Le.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Dm=!0)}const Bo=new Set;function O2(e){Um();let t=oi.get(e);return t===void 0&&(t=tt.create(`${Be}${st[e].onnx}`,{executionProviders:Bo.has(e)?["wasm"]:["webgpu","wasm"]}),oi.set(e,t),t.catch(()=>oi.delete(e))),t}let Po=null,Do=null;const z2=.75,N2=4,B2=.65,P2=3e4;let Uo=null;function si(){return Uo===null&&(Uo=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Uo}const Lm=new Map;function Lo(e){let t=Lm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Be}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Lm.set(e,t)),t}function Fo(e){return Lo(`wonder-refs/${e}.jpg`)}const Fm=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function D2(){const e=new Map;for(const t of Fm){const n=await Lo(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function U2(){const e=new Map;for(const t of Fm){const n=await Lo(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const L2=.6,F2=12,G2=45e3;let Go=null;function Gm(){return Go===null&&(Um(),Go=(async()=>{try{const[e,t,n,r]=await Promise.all([tt.create(`${Be}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),tt.create(`${Be}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Be}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Be}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:t_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Go}async function W2(e,t){const n=Math.max(e_/qt,t.width/t.height),{tensor:r,width:i}=r_(t,n),a={[e.rec.inputNames[0]]:new qe("float32",r,[1,3,qt,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,c=new Array(u),p=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const w=m*l;for(let b=0;b<l;b++){const $=h[w+b];$>y&&(y=$,g=b)}c[m]=g,p[m]=y}return n_(c,p,e.charset)}async function q2(e,t){const n=await Gm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+G2;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=Wt(e,o),u=qw(s),l={[n.det.inputNames[0]]:new qe("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],c=Xw(h.data,u,s.width,s.height).slice(0,F2);console.debug(`[wonders-ocr] rot ${o*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){a=!0;break e}const m=Zw(s,p.quad);if(m.width<m.height*1.5)continue;const[g,y]=await W2(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<L2||g.trim().length<N2)continue;const w=c_(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<z2||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Wo(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Wo(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(c=>c[0]),u=o.map(c=>c[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function V2(){return Do===null&&(Do=fetch(`${Be}laurel_gallery.json`).then(async e=>e.ok?Rw(await e.json()):[]).catch(()=>[])),Do}function H2(e,t,n,r){return Ht(e,t-r,n-r,2*r,2*r)}function Ht(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let m=0;m<l;m++){const g=((p+o)*e.width+(m+a))*e.channels,y=(p*l+m)*3;c[y]=e.data[g],c[y+1]=e.data[g+1],c[y+2]=e.data[g+2]}return{width:l,height:h,channels:3,data:c}}function j2(){return Po===null&&(Po=fetch(`${Be}token_templates.json`).then(async e=>e.ok?Tb(await e.json()):new Map).catch(()=>new Map)),Po}let qo=null;function K2(){return qo===null&&(qo=(async()=>{try{const e=await fetch(`${Be}token_embed_index.json`);if(!e.ok)return null;const t=zb(await e.json());return{session:await tt.create(`${Be}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),qo}const Y2=.92;let Vo=null;function X2(){return Vo===null&&(Vo=(async()=>{try{return(await fetch(`${Be}guild_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Vo}let Ho=null;function Z2(){return Ho===null&&(Ho=(async()=>{try{return(await fetch(`${Be}laurel_digit.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ho}let jo=null,Ko=null;function Q2(){return Ko===null&&(Ko=(async()=>{try{return(await fetch(`${Be}banner_class.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}banner_class.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ko}async function J2(e,t){if(t.length===0)return t;const n=await Q2();if(n===null)return t;const r=[];for(const i of t)try{const a=u1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=Ht(e,a.x,a.y,a.w,a.h),s=l1(o),u=await n.run({[n.inputNames[0]]:new qe("float32",s,[1,3,on,on])});c1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function ex(){return jo===null&&(jo=(async()=>{try{return(await fetch(`${Be}laurel_filter.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),jo}async function tx(e,t,n){const[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(Mm*s),h=Math.trunc(Mm*u),c=Math.max(0,r-l),p=Math.max(0,i-h),m=Math.min(e.width,a+l),g=Math.min(e.height,o+h),y=Ht(e,c,p,m-c,g-p);if(y.width<=0||y.height<=0)return null;try{const w=r1(y),b=await n.run({[n.inputNames[0]]:new qe("float32",w,[1,3,an,an])});return i1(b[n.outputNames[0]].data)}catch{return null}}let Yo=null;function nx(){return Yo===null&&(Yo=(async()=>{try{return(await fetch(`${Be}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Yo}async function rx(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let m=0;m<t.length;m++){const g=E1(e,Math.round(t[m].cx),Math.round(t[m].cy),Math.round(u[m]));if(g===null)return null;l.push(g)}const h=new Float32Array(t.length*3*sn*sn);l.forEach((m,g)=>h.set(m,g*m.length));const p=(await n.run({[n.inputNames[0]]:new qe("float32",h,[t.length,3,sn,sn])}))[n.outputNames[0]].data;return t.map((m,g)=>I1(p.subarray(g*2,g*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let Xo=null;function Wm(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${Be}tuck_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xo}const qm=.1;let Zo=null;function Vm(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${Be}track_band.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Zo}async function Hm(e,t,n){try{const r=ho(t,1280,Gy(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new qe("float32",r.tensor,[1,3,1280,1280])});return yr(i[e.outputNames[0]].data,r.params,qm)}catch{return[]}}let Qo=null;const ix=.4;function ax(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function ox(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||ax(a,u)>=ix)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function sx(){return Qo===null&&(Qo=(async()=>{try{return(await fetch(`${Be}tuck_box.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Qo}let Jo=null;function ux(){return Jo===null&&(Jo=(async()=>{try{return(await fetch(`${Be}wonder_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Jo}const jm={wonderRef:Fo,tuckClassifier:Wm,tuckBoxClassifier:sx,localiseWonders:async e=>{try{const{rows:t,params:n}=await mt("wonder",e);return po(t,n,st.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function lx(e,t){const n=await K2();if(n!==null)try{const r=Bb(e),i=new qe("float32",r,[4,3,rn,rn]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=Db(n.index,Pb(o));return u<Y2?["",-1]:[s,u]}catch{}return Cb(e,t)}async function es(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function mt(e,t){const n=st[e],{tensor:r,params:i}=ho(t,n.input),a=async()=>{const o=await O2(e),s={[o.inputNames[0]]:new qe("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(Bo.has(e))throw o;return Bo.add(e),oi.delete(e),await a()}}const cx=6,dx=4,hx=5,px=2;async function fx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await es(e),r=await mt("banner",n),i=Zr(r.rows,r.params,st.banner.conf);if(t.banners=i.length,i.length>=cx)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await mt("laurel",n),o=yr(a.rows,a.params,st.laurel.conf);if(t.laurels=o.length,o.length>=dx)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await mt("coin",n),u=Hf(s.rows,s.params,st.coin.conf);return t.coins=u.length,u.length>=hx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=px?{...t,kind:"board",confidence:.4}:t}function mx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function ts(e,t,n,r,i=()=>{},a="player"){const o={},s=[],u=[],l=[],h=[],c=[],p=[];let m=0,g=0,y=0,w=0,b=0;for(const I of e){b+=1;const v=`${t} photo ${b}/${e.length}`;r(`${v}: reading pixels…`,.01);const C=await es(I);r(`${v}: card banners…`,.04);const N=await mt("banner",C);let F=Zr(N.rows,N.params,st.banner.conf);F=await J2(C,F),r(`${v}: progress tokens…`,.08);let G=[];const V=await Vm();V!==null&&(G=await Hm(V,C,F)),G.length>0&&F.length>0&&(F=F.filter(P=>{const Q=P.box[0]+P.box[2]/2,J=P.box[1]+P.box[3]/2;return!G.some(([ne,se,he,Ee])=>Math.min(ne,he)<=Q&&Q<=Math.max(ne,he)&&Math.min(se,Ee)<=J&&J<=Math.max(se,Ee))}));const z=await mt("token",C),j=await j2(),Z=l.length,O=[];for(const P of jy(z.rows,z.params,st.token.conf)){if(O.push({cx:P.cx,cy:P.cy,r:P.r}),G.some(([ne,se,he,Ee])=>P.cx>=ne&&P.cx<=he&&P.cy>=se&&P.cy<=Ee))continue;const[Q,J]=await lx(Jf(C,P),j);Q===""&&J<0?O.pop():Q===""?g+=1:l.some(ne=>ne.id===Q)||l.push({id:Q,center:[P.cx,P.cy],radius:P.r,confidence:Math.round(J*1e4)/1e4})}r(`${v}: coins…`,.14);const W=await mt("coin",C),R=Hf(W.rows,W.params,st.coin.conf).filter(P=>!O.some(Q=>(P.cx-Q.cx)**2+(P.cy-Q.cy)**2<=P.r*P.r)),K=await nx(),U=K!==null?await rx(C,R,K):null,D=(U!==null?R.filter((P,Q)=>U[Q]>=km).map(P=>P.r):[]).sort((P,Q)=>P-Q),q=D.length>0?D.length%2===1?D[(D.length-1)/2]:(D[D.length/2-1]+D[D.length/2])/2:null,[L,re]=T1,ue=R.map((P,Q)=>{const J=U!==null?U[Q]:null;return J===null||J>=km?"keep":q!==null&&q>0&&P.r/q>=L&&P.r/q<=re?"suspect":"drop"}),ae=R.filter((P,Q)=>ue[Q]==="keep"),be=yw(C,ae),Oe=[];let Ve=0;if(R.forEach((P,Q)=>{if(ue[Q]!=="drop"){if(ue[Q]==="suspect"){const J=U[Q];Oe.push({denomination:null,center:[P.cx,P.cy],radius:P.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${J.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}Oe.push({denomination:be[Ve++],center:[P.cx,P.cy],radius:P.r,denomSource:"colour"})}}),R.length>0&&Oe.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${R.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),Oe.length>=2){const P=Oe.map(J=>J.radius).sort((J,ne)=>J-ne),Q=P.length%2===1?P[(P.length-1)/2]:(P[P.length/2-1]+P[P.length/2])/2;if(Q>0)for(const J of Oe)J.radius/Q>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const He=h.length,je=[],Ae=[],ge=Date.now()+P2;let Pe=null,un=null;const ln=()=>(un===null&&(un=(async()=>{try{const{rows:P,params:Q}=await mt("wonder",C);return po(P,Q,st.wonder.conf,Number.POSITIVE_INFINITY).map(J=>J.box)}catch{return[]}})()),un),it=[];let zt=!1;const An=await ux();if(An!==null){const P=await ln();if(P.length>0&&(Pe=await si(),Pe!==null)){r(`${v}: identifying wonders…`,.35);const Q=await Pm(jm,Pe,C,P,An,ge,F);for(const J of Q)h.some(ne=>ne.id===J.obj.id)||(h.push(J.obj),it.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),je.push(J.zone),Ae.push({quad:J.quad,region:J.region}));zt=Q.length>0}}zt||r(`${v}: wonder names…`,.2);const ht=zt?{wonders:[],aborted:!1}:await q2(C,(P,Q)=>r(`${v}: ${P}`,.2+.35*(Q??0)));Pe===null&&(Pe=ht.wonders.length>0?await si():null);for(const P of ht.wonders){let Q=null;if(Pe!==null&&Date.now()<ge){r(`${v}: registering ${P.name}…`,.6);try{const J=await Fo(P.id);if(J!==null){let ne=$_(Pe,C,J,[[P.nameBox.x,P.nameBox.y],[P.nameBox.x+P.nameBox.width,P.nameBox.y],[P.nameBox.x+P.nameBox.width,P.nameBox.y+P.nameBox.height],[P.nameBox.x,P.nameBox.y+P.nameBox.height]]);if(ne===null){const se=await ln(),he=E_(se,P.nameBox.x+P.nameBox.width/2,P.nameBox.y+P.nameBox.height/2);he!==null&&(ne=dm(Pe,C,J,he))}if(ne!==null){let se=ne.built,he=!1;const Ee=await Wm();if(Ee!==null)try{const me=cm(Pe,C,J,ne.footprint);if(me!==null){const xe=Io(me),Ge=await Ee.run({[Ee.inputNames[0]]:new qe("float32",xe,[1,3,Rt,Rt])});se=pm(Ge[Ee.outputNames[0]].data).built,he=!0}}catch{}const Ie=ne.footprint.map(me=>me[0]),ie=ne.footprint.map(me=>me[1]),fe=Math.max(0,Math.round(Math.min(...Ie))),pe=Math.max(0,Math.round(Math.min(...ie)));Q={built:se,boundingBox:{x:fe,y:pe,width:Math.min(C.width,Math.round(Math.max(...Ie)))-fe,height:Math.min(C.height,Math.round(Math.max(...ie)))-pe},tuckRegion:To(ne.footprint,ne.overflow),footprint:ne.footprint,edgeScores:ne.edgeScores,builtByTuck:he}}}}catch(J){console.warn(`[wonders-reg] ${P.id} failed:`,J)}}if(Q!==null){const J=Q.tuckRegion??Q.boundingBox;je.push({x0:J.x,y0:J.y,x1:J.x+J.width,y1:J.y+J.height}),Ae.push({quad:Q.footprint,region:Q.tuckRegion})}else{const J=Math.max(8,P.nameBox.height),ne=Math.round(P.nameBox.width*.15);je.push({x0:P.nameBox.x-ne,y0:P.nameBox.y-J*2.5,x1:P.nameBox.x+P.nameBox.width+ne,y1:P.nameBox.y+P.nameBox.height+J*2.5}),Ae.push({quad:null,region:null})}if(!h.some(J=>J.id===P.id)){const J=(Q==null?void 0:Q.builtByTuck)===!0,ne=J?Q.built:!1,se=!J&&(Q==null?void 0:Q.built)===!0,he={id:P.id,name:P.name,builtWithCardUnderneath:ne,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:P.confidence,...se?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};h.push(he),it.push({obj:he,edgeScores:Q&&!Q.builtByTuck?Q.edgeScores:null,zone:je[je.length-1]})}}if(!zt){const P=C_(it.map(Q=>({built:Q.obj.builtWithCardUnderneath,edgeScores:Q.edgeScores,zone:Q.zone})),F.map(Q=>[Q.box[0]+Q.box[2]/2,Q.box[1]+Q.box[3]/2]));for(const Q of P){const J=it[Q];J.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(F.length>0){const Q=new Set(P);for(let J=0;J<it.length;J++){const ne=it[J];if(Q.has(J)||!ne.obj.builtWithCardUnderneath)continue;const se=ne.obj.tuckRegion;if(se===void 0)continue;if(!F.some(Ee=>{const Ie=Ee.box[0]+Ee.box[2]/2,ie=Ee.box[1]+Ee.box[3]/2;return Ie>=se.x&&Ie<=se.x+se.width&&ie>=se.y&&ie<=se.y+se.height})){const Ee=ne.obj;Ee.builtWithCardUnderneath=!1,Ee.suspect=!0,Ee.suspectReason="built-unconfirmed"}}}}if(ht.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${v}: the wonder-name read ran out of its time budget on this device — ${ht.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Pe!==null&&ht.wonders.length>0&&Date.now()<ge)try{const P=await Gm(),Q=(P==null?void 0:P.catalog.filter(ne=>ne.kind==="wonder").map(ne=>ne.id))??[],J=new Map;for(const ne of Q)if(!h.some(se=>se.id===ne)){const se=await Fo(ne);se!==null&&J.set(ne,se)}if(J.size>0){r(`${v}: searching occluded wonders…`,.7);const ne=x_(Pe,C,J,ge);for(const se of ne){const he=se.footprint.map(Ge=>Ge[0]),Ee=se.footprint.map(Ge=>Ge[1]),Ie=Math.max(0,Math.round(Math.min(...he))),ie=Math.max(0,Math.round(Math.min(...Ee))),fe={x:Ie,y:ie,width:Math.min(C.width,Math.round(Math.max(...he)))-Ie,height:Math.min(C.height,Math.round(Math.max(...Ee)))-ie};if(h.some(Ge=>{const De=Ge.boundingBox,dn=Math.max(0,Math.min(De.x+De.width,fe.x+fe.width)-Math.max(De.x,fe.x)),Nt=Math.max(0,Math.min(De.y+De.height,fe.y+fe.height)-Math.max(De.y,fe.y)),Ne=dn*Nt,Ye=De.width*De.height+fe.width*fe.height-Ne;return Ye>0&&Ne/Ye>b_}))continue;const me=P==null?void 0:P.catalog.find(Ge=>Ge.id===se.id);h.push({id:se.id,name:(me==null?void 0:me.nameFr)??(me==null?void 0:me.name)??se.id,builtWithCardUnderneath:se.built,boundingBox:fe,...se.tuckRegion?{tuckRegion:se.tuckRegion}:{},confidence:Math.round(se.confidence*1e4)/1e4});const xe=se.tuckRegion??fe;je.push({x0:xe.x,y0:xe.y,x1:xe.x+xe.width,y1:xe.y+xe.height}),Ae.push({quad:se.footprint.map(([Ge,De])=>[Ge,De]),region:se.tuckRegion??null})}}}catch(P){console.warn("[wonders-reg] discovery failed:",P)}const jt=a==="opponent";let Kn=(P,Q)=>!jt,xr=(P,Q)=>!jt;try{let P=h.slice(He);const Q=[];F.forEach((ie,fe)=>{const pe=ie.box[0]+ie.box[2]/2,me=ie.box[1]+ie.box[3]/2;je.some(xe=>pe>=xe.x0&&pe<=xe.x1&&me>=xe.y0&&me<=xe.y1)||Q.push(fe)});const J=[],ne=[];P.forEach((ie,fe)=>{const pe=ie.boundingBox;pe&&pe.width>0&&(J.push(fe),ne.push([pe.x,pe.y,pe.width,pe.height]))});const se=ie=>{const fe=[];return ie.forEach((pe,me)=>{const xe=pe.box[0]+pe.box[2]/2,Ge=pe.box[1]+pe.box[3]/2;je.some(De=>xe>=De.x0&&xe<=De.x1&&Ge>=De.y0&&Ge<=De.y1)||fe.push(me)}),fe};let he=Oo(F.map(ie=>ie.box),Q,ne,G,[C.width,C.height]);if(An!==null){r(`${v}: seconde passe merveilles (crop de cité)…`,.42);const fe=(await R2({image:C,banners:F,hulls:he.hulls.map(([pe,me],xe)=>({owner:pe,poly:me,n:he.hullBoxCounts[xe]??0})),wonderBoxes:ne,known:P,cropFrame:([pe,me,xe,Ge])=>Ht(C,pe,me,xe-pe,Ge-me),detect:async(pe,me)=>(Pe===null&&(Pe=await si()),Pe===null?[]:C2(jm,Pe,pe,An,ge,me))})).filter(pe=>!h.some(me=>me.id===pe.obj.id));if(fe.length>0){for(const pe of fe)h.push(pe.obj),je.push(pe.zone),Ae.push({quad:pe.quad,region:pe.region});P=h.slice(He),J.length=0,ne.length=0,P.forEach((pe,me)=>{const xe=pe.boundingBox;xe&&xe.width>0&&(J.push(me),ne.push([xe.x,xe.y,xe.width,xe.height]))}),he=Oo(F.map(pe=>pe.box),se(F),ne,G,[C.width,C.height])}}try{const ie=Am(C.width,C.height,F.map(fe=>fe.box),he.hulls.map(([fe,pe],me)=>({owner:fe,poly:pe,n:he.hullBoxCounts[me]??0})),ne);if(ie.length>0){const fe=zo(F.map(me=>me.box)),pe=[];for(const me of ie){const[xe,Ge,De,dn]=me,Nt=Ht(C,xe,Ge,De-xe,dn-Ge);if(Nt.width<=0||Nt.height<=0)continue;const Ne=await mt("banner",Nt);for(const Ye of Zr(Ne.rows,Ne.params,st.banner.conf)){const at=J1(Ye.box,me,fe);at&&pe.push({...Ye,box:at})}}if(pe.length>0){const me=Yf([...F,...pe]);me.length>F.length&&(F=me,he=Oo(F.map(xe=>xe.box),se(F),ne,G,[C.width,C.height]))}}}catch(ie){console.warn("[#129 city-rescan] skipped:",ie)}Kn=(ie,fe)=>he.pointOwner(ie,fe)==="opponent"===jt;const Ee=jt?"opponent":"player";xr=(ie,fe)=>he.pointOwner(ie,fe)===Ee,F=F.filter((ie,fe)=>he.bannerOwner[fe]==="opponent"===jt);const Ie=P.map(()=>"player");J.forEach((ie,fe)=>{Ie[ie]=he.wonderOwner[fe]});for(let ie=P.length-1;ie>=0;ie-=1)Ie[ie]==="opponent"!==jt&&h.splice(He+ie,1);je.length=0;for(const ie of h.slice(He)){const fe=ie.tuckRegion??ie.boundingBox;fe&&je.push({x0:fe.x,y0:fe.y,x1:fe.x+fe.width,y1:fe.y+fe.height})}for(let ie=l.length-1;ie>=Z;ie-=1){const[fe,pe]=l[ie].center;Kn(fe,pe)||l.splice(ie,1)}}catch(P){console.warn("[city-split] failed (side unfiltered):",P)}for(const P of Oe)xr(P.center[0],P.center[1])&&(m+=P.denomination??0,u.push(P));const $r=new Set,Et=[],is=zo(F.map(P=>P.box));Ae.forEach((P,Q)=>{if(P.quad===null||P.region===null){const he=je[Q];he&&Et.push(he);return}const J=P.region,ne=[];F.forEach((he,Ee)=>{const Ie=he.box[0]+he.box[2]/2,ie=he.box[1]+he.box[3]/2;Ie>=J.x&&Ie<=J.x+J.width&&ie>=J.y&&ie<=J.y+J.height&&ne.push([Ee,he.box])});const se=M1(P.quad,ne,is);se!==null&&$r.add(se)});let pt=[],cn=0;F.forEach((P,Q)=>{if($r.has(Q)){w+=1,cn+=1;return}const J=P.box[0]+P.box[2]/2,ne=P.box[1]+P.box[3]/2;if(Et.some(se=>J>=se.x0&&J<=se.x1&&ne>=se.y0&&ne<=se.y1)){w+=1,cn+=1;return}pt.push(P)});const ui=w1(pt,cn,G,C.width,C.height);pt=ui.kept;for(const P of pt)o[P.family]=(o[P.family]??0)+1,y+=1;const It=tw(pt),Yn=new Set(It.map(P=>P.box.join(",")));for(const P of rw(pt))Yn.has(P.box.join(","))||(It.push(P),Yn.add(P.box.join(",")));for(const P of ui.suspects)Yn.has(P.box.join(","))||(It.push(P),Yn.add(P.box.join(",")));for(const P of It)p.push(P);if(pt.some(P=>P.family==="guild")){const P=await X2();if(P!==null){r(`${v}: identifying guilds…`,.75);for(const Q of pt)if(Q.family==="guild")try{const[J,ne,se,he]=Q.box,Ee=Ht(C,J,ne,se,he),Ie=Fb(Ee),ie={[P.inputNames[0]]:new qe("float32",Ie,[1,3,qn,qn])},pe=(await P.run(ie))[P.outputNames[0]].data,{id:me,prob:xe}=Gb(pe);me!==""&&!c.some(Ge=>Ge.id===me)&&c.push({id:me,boundingBox:{x:J,y:ne,width:se,height:he},confidence:Math.round(xe*1e4)/1e4})}catch(J){console.warn("[guild-cls] failed:",J)}}else if(Date.now()<ge)try{const Q=Pe??await si();if(Q!==null){const J=await D2();if(J.size>0){r(`${v}: identifying guilds…`,.75);const ne=await U2();for(const se of gb(Q,C,J,ge,ne))c.some(he=>he.id===se.id)||c.push(se)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${v}: laurels…`,.8);const li=await V2(),Xn=[];for(const P of[0]){const Q=P===0?C:Wt(C,P),J=await mt("laurel",Q);for(const[ne,se,he,Ee]of yr(J.rows,J.params,st.laurel.conf)){const Ie=Wo({x:ne,y:se,width:he-ne,height:Ee-se},P,C.width,C.height);Xn.push([Ie.x,Ie.y,Ie.x+Ie.width,Ie.y+Ie.height])}}let Kt=jf(Xn);const ci=[];try{const P=h2(F.map(Q=>Q.box),[C.width,C.height]);for(const[Q,J,ne,se]of P){const he=Ht(C,Q,J,ne-Q,se-J);if(he.width<=0||he.height<=0)continue;const Ee=[];for(const Ie of[0]){const ie=Ie===0?he:Wt(he,Ie),fe=await mt("laurel",ie);for(const[pe,me,xe,Ge]of yr(fe.rows,fe.params,st.laurel.conf)){const De=Wo({x:pe,y:me,width:xe-pe,height:Ge-me},Ie,he.width,he.height);Ee.push([De.x,De.y,De.x+De.width,De.y+De.height])}}if(Kt=p2(Kt,jf(Ee),[Q,J]),V!==null)try{const Ie=ho(he,1280,gr),ie=await V.run({[V.inputNames[0]]:new qe("float32",Ie.tensor,[1,3,1280,1280])});for(const[fe,pe,me,xe]of yr(ie[V.outputNames[0]].data,Ie.params,qm))ci.push([fe+Q,pe+J,me+Q,xe+J])}catch{}}}catch(P){console.warn("[laurel-containers] failed:",P)}const os=[...G,...ci];Kt=Kt.filter(([P,Q,J,ne])=>!g2((P+J)/2,(Q+ne)/2,os,F.map(se=>se.box)));const Zn=await Z2(),di=await ex();for(const[P,Q,J,ne]of Kt){const se=Math.trunc((P+J)/2),he=Math.trunc((Q+ne)/2);if([...O,...R].some(Ne=>(se-Ne.cx)**2+(he-Ne.cy)**2<=Ne.r*Ne.r)||!Kn(se,he))continue;if(di!==null){const Ne=await tx(C,[Math.trunc(P),Math.trunc(Q),Math.trunc(J),Math.trunc(ne)],di);if(Ne!==null&&Ne>=n1)continue}const Ie=Math.min(Math.trunc(J-P),Math.trunc(ne-Q)),ie=Math.max(6,Math.trunc(Math.max(J-P,ne-Q)*vw)),fe=H2(C,se,he,ie);let pe=null,me=0;const xe=new Map;if(Ie>=6)for(const Ne of[0,1,2,3]){const Ye=Ne===0?fe:Wt(fe,Ne),[at,Yt]=Pw(Ye,li);at!==null&&(xe.set(at,Math.max(xe.get(at)??0,Yt)),Yt>me&&(pe=at,me=Yt))}pe!==null&&me<B2&&(pe=null);const Ge=me;if(Zn!==null&&Ie>=6){const Ne=Ht(C,Math.trunc(P),Math.trunc(Q),Math.trunc(J-P),Math.trunc(ne-Q));let Ye=null,at=0;for(const Yt of[0,1,2,3]){const hi=Yt===0?Ne:Wt(Ne,Yt),ss=Jb(hi),gt=await Zn.run({[Zn.inputNames[0]]:new qe("float32",ss,[1,3,Hn,Hn])}),{value:vr,prob:Qn}=e1(gt[Zn.outputNames[0]].data);Qn>at&&(Ye=vr,at=Qn)}Ye!==null&&at>=Qb&&(pe=Ye,me=at)}const De=pe!==null&&[...xe.entries()].some(([Ne,Ye])=>Ne!==pe&&Ye>=Ge-.1),dn=je.some(Ne=>se>=Ne.x0&&se<=Ne.x1&&he>=Ne.y0&&he<=Ne.y1),Nt=c.some(Ne=>{const Ye=Ne.boundingBox;return Ye!==void 0&&se>=Ye.x&&se<=Ye.x+Ye.width&&he>=Ye.y&&he<=Ye.y+Ye.height});s.push({value:pe,valueRead:pe!==null,center:[Math.round((P+J)/2),Math.round((Q+ne)/2)],boundingBox:{x:Math.trunc(P),y:Math.trunc(Q),width:Math.trunc(J-P),height:Math.trunc(ne-Q)},confidence:Math.round(me*1e4)/1e4,excluded:dn||Nt,photoIndex:b-1,...De?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}w>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${w} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):y>0&&h.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const $=o.guild??0;$!==c.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${$} purple banner(s) counted but ${c.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+c.map(I=>I.id).join(", ")+" — confirm in the review."});const M=h.filter(I=>I.boundingBox.width===0);M.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${M.map(I=>I.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${h.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),g>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${g} token disc(s) found but not identified — pick them in the review below.`}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+l.map(I=>I.id).join(", ")+" — confirm in the review."}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${u.length} tile(s) by their metal COLOUR (the learned denomination model is server-only) — confirm the total.`});const S=ox(c,h);for(const I of[...y2(h.map(v=>v.id),t),...b2(S.map(v=>v.id),t)])n.push({code:"INCONSISTENT_STATE",message:I.message});const T=s.filter(I=>!I.excluded),k=T.filter(I=>I.valueRead);return{...mx(),wonders:h,guilds:S,progressTokens:l,laurels:s,cardVictoryPoints:{value:k.reduce((I,v)=>I+(v.value??0),0),laurelsKept:T.length,laurelsUnread:T.length-k.length,complete:T.length===k.length},cardCounts:{byFamily:o,source:y>0?"yolo":"none",tuckedExcluded:w,...p.length>0?{suspects:p}:{}},coins:{total:m,confidence:u.length>0?.5:0,source:u.length>0?"local-colour":"none",coins:u}}}const Tt=1280,gx=.3,ns=9;let rs=null;function yx(){return rs===null&&(rs=(async()=>{try{return(await fetch(`${Be}pawn_ends.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),rs}function wx(e){const t=Tt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(Tt,Tt).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,Tt,Tt),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,Tt,Tt),l=Tt*Tt,h=new Float32Array(3*l);for(let c=0;c<l;c+=1)h[c]=u[c*4]/255,h[l+c]=u[c*4+1]/255,h[2*l+c]=u[c*4+2]/255;return{tensor:h,r:t}}async function _x(e,t){const{tensor:n,r}=wx(t),a=(await e.run({[e.inputNames[0]]:new qe("float32",n,[1,3,Tt,Tt])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<gx)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const c=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:c,cy:p})}}return o}async function Km(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Wt(t,g),w=await _x(e,y);if(w.has(0)&&w.has(1)&&w.has(2)){const b=w.get(0).conf+w.get(1).conf+w.get(2).conf;(n===null||b>n.score)&&(n={score:b,det:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const c=((r.cx-u)*o+(r.cy-l)*s)/h*(2*ns),p=Math.min(ns,Math.max(-ns,dt(c))),m=Math.min(r.conf,i.conf,a.conf);return{position:p,confidence:Math.round(m*1e4)/1e4}}async function bx(e,t,n){let r=null;for(const i of n){const a=Wy(t.width,t.height,i);if(a===null)continue;const o=Ht(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await Km(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r=s)}return r}async function xx(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(l,h=0)=>{t(l,i>0?Math.min(.99,(a+h)/i):void 0)},s=()=>{a+=1};for(const l of["left","right"]){const h=e[l];h.length>0&&(r[l]=await ts(h,l,n,o,s))}e.both!==void 0&&(r.left=await ts([e.both],"left",n,o,s,"player"),r.right=await ts([e.both],"right",n,o,s,"opponent"));{const l={},h={};for(const c of["left","right"]){const p=r[c];p!=null&&(l[c]=p.wonders.map(m=>m.id),h[c]=p.progressTokens.map(m=>m.id))}for(const c of[...w2(l),..._2(h)])n.push({code:"INCONSISTENT_STATE",message:c.message})}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await es(e.board),h=await yx();if(h!==null){let c=await Km(h,l);if(c===null){const p=await Vm();if(p!==null){const m=await mt("banner",l),g=Zr(m.rows,m.params,st.banner.conf),y=await Hm(p,l,g);c=await bx(h,l,y)}}c!==null&&(u={conflictPawnPosition:c.position,found:!0,confidence:c.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await fx(e.data.file):await xx(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
