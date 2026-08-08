var Tv=Object.defineProperty;var Ev=(Dt,Ut,Bn)=>Ut in Dt?Tv(Dt,Ut,{enumerable:!0,configurable:!0,writable:!0,value:Bn}):Dt[Ut]=Bn;var b0=(Dt,Ut,Bn)=>Ev(Dt,typeof Ut!="symbol"?Ut+"":Ut,Bn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Dt=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyNames,v0=Object.prototype.hasOwnProperty,S0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),Pn=(e,t)=>{for(var n in t)Dt(e,n,{get:t[n],enumerable:!0})},M0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Bn(t))!v0.call(e,i)&&i!==n&&Dt(e,i,{get:()=>t[i],enumerable:!(r=Ut(t,i))||r.enumerable});return e},tr=e=>M0(Dt({},"__esModule",{value:!0}),e),nr,en,Dn,Is,ks,Cs=ee(()=>{nr=new Map,en=[],Dn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=nr.get(e);if(r===void 0)nr.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=en.indexOf(e);i!==-1&&en.splice(i,1);for(let a=0;a<en.length;a++)if(nr.get(en[a]).priority<=n){en.splice(a,0,e);return}en.push(e)}return}throw new TypeError("not a valid backend")},Is=async e=>{let t=nr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ks=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?en:n,i,a=[],o=new Set;for(let u of r){let l=await Is(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&o.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>o.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),T0=ee(()=>{Cs()}),As,E0=ee(()=>{As="1.27.0"}),Ti,Qe,Rs=ee(()=>{E0(),Ti="warning",Qe={wasm:{},webgl:{},webgpu:{},versions:{common:As},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ti=e}},get logLevel(){return Ti}},Object.defineProperty(Qe,"logLevel",{enumerable:!0})}),Ue,I0=ee(()=>{Rs(),Ue=Qe}),Os,zs,k0=ee(()=>{Os=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let h=a*i,c=0,p=h,f=h*2,m=-1;o==="RGBA"?(c=0,p=h,f=h*2,m=h*3):o==="RGB"?(c=0,p=h,f=h*2):o==="RBG"&&(c=0,f=h,p=h*2);for(let y=0;y<a;y++)for(let w=0;w<i;w++){let b=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],S=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+M+","+S+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},zs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,h;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=c,M=c*2,S=-1;s==="RGBA"?(b=0,x=c,M=c*2,S=c*3):s==="RGB"?(b=0,x=c,M=c*2):s==="RBG"&&(b=0,M=c,x=c*2),r=n.createImageData(i,a);for(let T=0;T<a*i;f+=p,m+=p,y+=p,w+=p,T++)r.data[f]=(e.data[b++]-h[0])*l[0],r.data[m]=(e.data[x++]-h[1])*l[1],r.data[y]=(e.data[M++]-h[2])*l[2],r.data[w]=S===-1?255:(e.data[S++]-h[3])*l[3]}else throw new Error("Can not access image data");return r}}),Ar,Ns,Bs,Ps,Ds,Us,C0=ee(()=>{Ii(),Ar=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?o=[i.bias,i.bias,i.bias,i.bias]:o=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,h=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,M=-1;s==="RGB"&&(c=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let S=0;S<l;S++,p+=c,m+=c,f+=c,y+=c)h[w++]=(e[p]+o[0])/a[0],h[b++]=(e[f]+o[1])/a[1],h[x++]=(e[m]+o[2])/a[2],M!==-1&&y!==-1&&(h[M++]=(e[y]+o[3])/a[3]);return u==="RGBA"?new lt("float32",h,[1,4,n,r]):new lt("float32",h,[1,3,n,r])},Ns=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",o,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;c.drawImage(e,0,0),o=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let h,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,c=t.resizedWidth):(h=e.height,c=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=h,s.width=c,t!==void 0){let p=u();p.width=c,p.height=h;let f=l(p);if(f!=null)f.putImageData(e,0,0),o=f.getImageData(0,0,c,h).data;else throw new Error("Can not access image data")}else o=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let c=l(h);if(c!=null){let p=e.height,f=e.width;return c.drawImage(e,0,0,f,p),o=c.getImageData(0,0,f,p).data,s.height=p,s.width=f,Ar(o,s)}else throw new Error("Can not access image data")}else{if(a)return new Promise((h,c)=>{let p=u(),f=l(p);if(!e||!f)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,h(Ar(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Ar(o,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Bs=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,o=[1,r,n,4];return new lt({location:"texture",type:"float32",texture:e,dims:o,download:i,dispose:a})},Ps=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Ds=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new lt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Us=(e,t,n)=>new lt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),mn,rr,Ei,Ls,A0=ee(()=>{mn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),rr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ei=!1,Ls=()=>{if(!Ei){Ei=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(mn.set("int64",BigInt64Array),rr.set(BigInt64Array,"int64")),t&&(mn.set("uint64",BigUint64Array),rr.set(BigUint64Array,"uint64")),r?(mn.set("float16",n),rr.set(n,"float16")):mn.set("float16",Uint16Array)}}}),Fs,Gs,R0=ee(()=>{Ii(),Fs=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Gs=(e,t)=>{switch(e.location){case"cpu":return new lt(e.type,e.data,t);case"cpu-pinned":return new lt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new lt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new lt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new lt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),lt,Ii=ee(()=>{k0(),C0(),A0(),R0(),lt=class{constructor(e,t,n){Ls();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let o=mn.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let u=mn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?o=u.from(t,BigInt):o=u.from(t)}else if(t instanceof u)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",o=e;else if(u==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let u=rr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,o=e}if(s===void 0)s=[o.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=o,this.dataLocation="cpu"}let a=Fs(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Ns(e,t)}static fromTexture(e,t){return Bs(e,t)}static fromGpuBuffer(e,t){return Ps(e,t)}static fromMLTensor(e,t){return Ds(e,t)}static fromPinnedBuffer(e,t,n){return Us(e,t,n)}toDataURL(e){return Os(this,e)}toImageData(e){return zs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Gs(this,e)}}}),qe,Ws=ee(()=>{Ii(),qe=lt}),Rr,ki,At,_t,gn,yn,qs=ee(()=>{Rs(),Rr=(e,t)=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},ki=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let o=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Rr("CPU",o);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},At=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||ki("BEGIN",e)},_t=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||ki("END",e)},gn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.time(`ORT::${e}`)},yn=e=>{(typeof Qe.trace>"u"?!Qe.wasm.trace:!Qe.trace)||console.timeEnd(`ORT::${e}`)}}),Vs,O0=ee(()=>{Cs(),Ws(),qs(),Vs=class x0{constructor(t){this.handler=t}async run(t,n,r){At(),gn("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof qe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof qe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,h=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(h.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof qe)&&(l=!0,o=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(o)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,a),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let h=s[l];h instanceof qe?u[l]=h:u[l]=new qe(h.type,h.data,h.dims)}return yn("InferenceSession.run"),_t(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){At(),gn("InferenceSession.create");let a,o={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)o=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-c}].`);if(typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(h,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await ks(o),l=await s.createInferenceSessionHandler(a,u);return yn("InferenceSession.create"),_t(),new x0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),tt,z0=ee(()=>{O0(),tt=Vs}),N0=ee(()=>{}),B0=ee(()=>{}),P0=ee(()=>{}),D0=ee(()=>{}),U0={};Pn(U0,{InferenceSession:()=>tt,TRACE:()=>Rr,TRACE_EVENT_BEGIN:()=>gn,TRACE_EVENT_END:()=>yn,TRACE_FUNC_BEGIN:()=>At,TRACE_FUNC_END:()=>_t,Tensor:()=>qe,env:()=>Ue,registerBackend:()=>Dn});var pt=ee(()=>{T0(),I0(),z0(),Ws(),N0(),B0(),qs(),P0(),D0()}),Ci=ee(()=>{}),Hs={};Pn(Hs,{default:()=>js});var Ai,Ri,js,L0=ee(()=>{var e;If(),wn(),Di(),Ai="ort-wasm-proxy-worker",Ri=((e=globalThis.self)==null?void 0:e.name)===Ai,Ri&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Fi(r.wasm).then(()=>{Qa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ja(a,i).then(()=>{postMessage({type:n})},o=>{postMessage({type:n,err:o})});break}case"copy-from":{let{buffer:i}=r,a=Zr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;to(i,a).then(o=>{postMessage({type:n,out:o})},o=>{postMessage({type:n,err:o})});break}case"release":no(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:o,outputIndices:s,options:u}=r;io(i,a,o,s,new Array(s.length).fill(null),u).then(l=>{l.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},oo([...o,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":ao(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),js=Ri?null:t=>new Worker(t??ct,{type:"module",name:Ai})}),Ks={};Pn(Ks,{default:()=>Xs});async function Ys(e={}){var w0,_0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((w0=self.name)==null?void 0:w0.startsWith("em-pthread"));t.mountExternalData=(d,g)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},E=await d(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let B=await Promise.all(C);if(B=B.filter(K=>K),0<B.length)throw Error(B.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(d,g)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,E,C,B)=>$.registerBuffer(_,E,C,B),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,E,C)=>$.createDownloader(_,E,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,E)=>{$.upload(_,E)}}else if(d==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,E)=>$.createMLTensorDownloader(_,E),t.webnnRegisterMLTensor=(_,E,C,B)=>$.registerMLTensor(_,E,C,B),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,E,C,B,K,te)=>$.registerMLConstant(_,E,C,B,K,t.Xc,te),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let o=()=>{let d=g=>(...$)=>{let _=Bt;return $=g(...$),Bt!=_?new Promise((E,C)=>{ms={resolve:E,reject:C}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=d(t[g])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o==null||o()};var s,u,l=(d,g)=>{throw g},h=self.location.href,c="";if(n||r){try{c=new URL(".",h).href}catch{}r&&(u=d=>{var g=new XMLHttpRequest;return g.open("GET",d,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async d=>{if(k(d))return new Promise(($,_)=>{var E=new XMLHttpRequest;E.open("GET",d,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?$(E.response):_(E.status)},E.onerror=_,E.send(null)});var g=await fetch(d,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),M=console.error.bind(console),S=x,T=M,I=!1,k=d=>d.startsWith("file://");function v(){kt.buffer!=R.buffer&&L()}if(i){let d=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let E=[];self.onmessage=C=>E.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of E)d(C);self.onmessage=d};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...B)=>{postMessage({Sc:"callHandler",wd:C,args:B})},C=="print"&&(S=t[C]),C=="printErr"&&(T=t[C]));kt=$.Od,L(),f=$.Pd,ue(),Si()}else if(_==="run"){(function(E){var C=(v(),j)[E+52>>>2>>>0];E=(v(),j)[E+56>>>2>>>0],Ig(C,C-E),Me(C)})($.Rc),bs($.Rc,0,0,1,0,0),Kt(),hs($.Rc),A||($g(),A=!0);try{hi($.Md,$.bd)}catch(E){if(E!="unwind")throw E}}else $.target!=="setimmediate"&&(_==="checkMailbox"?A&&yi():_&&(T(`worker: received unknown command ${_}`),T($)))}catch(E){throw vg(),E}};var A=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=d}var R,X,P,q,z,j,Z,N,G,O,H,F=!1;function L(){var d=kt.buffer;t.HEAP8=R=new Int8Array(d),P=new Int16Array(d),t.HEAPU8=X=new Uint8Array(d),q=new Uint16Array(d),t.HEAP32=z=new Int32Array(d),t.HEAPU32=j=new Uint32Array(d),Z=new Float32Array(d),N=new Float64Array(d),G=new BigInt64Array(d),O=new BigUint64Array(d)}function W(){F=!0,i?b():Jt.sb()}function U(d){throw T(d="Aborted("+d+")"),I=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),w==null||w(d),d}function re(){return{a:{ma:F$,gb:L$,g:vr,J:Qn,f:On,o:pi,h:us,ha:er,b:fi,T:D,Ha:J,n:ne,$:pe,Xa:fe,Da:de,Fa:me,Ya:$e,Va:Fe,Oa:Pe,Ua:dn,ka:Nt,Ea:Ne,Ba:He,Wa:ot,Ca:Xt,bb:ls,ea:kx,wa:Cx,ua:Rx,da:zx,O:Nx,H:Bx,va:Px,_:qx,xa:Vx,Ra:Hx,za:Kx,Ia:Yx,sa:Xx,fa:Zx,Qa:hs,_a:Qx,R:n$,r:s$,c:cs,hb:u$,y:l$,M:c$,D:d$,l:h$,s:ag,ib:p$,I:f$,S:m$,j:g$,u:y$,q:w$,k:_$,La:b$,Ma:x$,Na:$$,Ja:lg,Ka:cg,ta:dg,db:S$,ab:T$,v:E$,aa:I$,ga:k$,$a:M$,W:C$,Za:A$,Aa:R$,F:v$,U:O$,la:$i,ya:N$,fb:z$,eb:B$,Sa:mg,Ta:gg,Ga:jt,V:yg,ja:wg,Pa:_g,ia:bg,kb:vv,na:wv,lb:$v,oa:yv,G:uv,e:V$,t:W$,w:G$,B:tv,mb:fv,K:av,x:K$,pa:mv,Y:_v,ba:pv,nb:hv,ob:dv,P:nv,qa:cv,pb:lv,N:ov,Z:gv,d:q$,A:j$,m:H$,jb:Sv,p:X$,z:Z$,C:Y$,E:Q$,L:rv,qb:sv,Q:bv,ca:iv,X:xv,rb:ev,ra:J$,i:D$,a:kt,cb:Ye}}}async function ue(){function d(_,E){var C=Jt=_.exports;_={};for(let[B,K]of Object.entries(C))typeof K=="function"?(C=Jx(K),_[B]=C):_[B]=K;return Jt=_,Jt=(function(){var B=Jt,K=ae=>ve=>ae(ve)>>>0,te=ae=>()=>ae()>>>0;return(B=Object.assign({},B)).tb=K(B.tb),B.Xb=te(B.Xb),B.Zb=K(B.Zb),B.lc=K(B.lc),B.mc=te(B.mc),B.qc=K(B.qc),B})(),An.push(Jt._b),xg=(_=Jt).tb,$g=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,vi=_.Xb,Pt=t._free=_.Yb,Ir=t._malloc=_.Zb,bs=_.ac,vg=_.bc,Sg=_.cc,Mg=_.dc,xs=_.ec,Tg=_.fc,Eg=_.gc,Ee=_.hc,kr=_.ic,Ig=_.jc,Me=_.kc,$s=_.lc,Te=_.mc,kg=_.nc,vs=_.oc,Cg=_.pc,Ag=_.qc,Rg=_.rc,Ss=_.sc,Og=_.tc,zg=_.uc,Ng=_.vc,Bg=_.wc,Pg=_.xc,Dg=_.yc,Ug=_.zc,Lg=_.Ac,Fg=_.Bc,Gg=_.Cc,Wg=_.Dc,qg=_.Ec,Vg=_.Fc,Hg=_.Gc,jg=_.Hc,Kg=_.Ic,Yg=_.Jc,Xg=_.Kc,Zg=_.Lc,Qg=_.Mc,Jg=_.Nc,e0=_.Pc,t0=_.Qc,n0=_.$c,r0=_.ad,i0=_.fd,a0=_.jd,o0=_.kd,s0=_.ld,u0=_.md,l0=_.nd,c0=_.od,d0=_.pd,h0=_.qd,p0=_.vd,f0=_.Td,m0=_.Ud,g0=_.Vd,y0=_.Wd,f=E,Jt}var g,$=re();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(E,C)=>{_(d(E,C))})}):i?d(new WebAssembly.Instance(f,re()),f):(H??(H=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var E=H;if(!p&&!k(E))try{var C=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(B){T(`wasm streaming compile failed: ${B}`),T("falling back to ArrayBuffer instantiation")}return(async function(B,K){try{var te=await(async function(ae){if(!p)try{var ve=await s(ae);return new Uint8Array(ve)}catch{}if(ae==H&&p)ae=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ae=u(ae)}return ae})(B);return await WebAssembly.instantiate(te,K)}catch(ae){T(`failed to asynchronously prepare wasm: ${ae}`),U(ae)}})(E,_)})($),d(g.instance,g.module))}class ie{constructor(g){b0(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var xe=d=>{d.terminate(),d.onmessage=()=>{}},Ge=[],ze=0,Ke=null,rt=d=>{It.length==0&&($r(),Xn(It[0]));var g=It.pop();if(!g)return 6;mt.push(g),gt[d.Rc]=g,g.Rc=d.Rc;var $={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return g.postMessage($,d.rd),0},Se=0,we=(d,g,...$)=>{var _,E=16*$.length,C=Te(),B=$s(E),K=B>>>3;for(_ of $)typeof _=="bigint"?((v(),G)[K++>>>0]=1n,(v(),G)[K++>>>0]=_):((v(),G)[K++>>>0]=0n,(v(),N)[K++>>>0]=_);return d=Sg(d,0,E,B,g),Me(C),d};function Ye(d){if(i)return we(0,1,d);if(m=d,!(0<Se)){for(var g of mt)xe(g);for(g of It)xe(g);It=[],mt=[],gt={},I=!0}l(0,new ie(d))}function Xe(d){if(i)return we(1,0,d);jt(d)}var jt=d=>{if(m=d,i)throw Xe(d),"unwind";Ye(d)},It=[],mt=[],An=[],gt={},cn=d=>{var g=d.Rc;delete gt[g],It.push(d),mt.splice(mt.indexOf(d),1),d.Rc=0,Mg(g)};function Kt(){An.forEach(d=>d())}var Xn=d=>new Promise(g=>{d.onmessage=E=>{var C=E.data;if(E=C.Sc,C.Zc&&C.Zc!=vi()){var B=gt[C.Zc];B?B.postMessage(C,C.rd):T(`Internal error! Worker sent a message "${E}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?yi():E==="spawnThread"?rt(C):E==="cleanupThread"?gi(()=>{cn(gt[C.Nd])}):E==="loaded"?(d.loaded=!0,g(d)):C.target==="setimmediate"?d.postMessage(C):E==="uncaughtException"?d.onerror(C.error):E==="callHandler"?t[C.wd](...C.args):E&&T(`worker sent an unknown command ${E}`)},d.onerror=E=>{throw T(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);d.postMessage({Sc:"load",xd:_,Od:kt,Pd:f})});function $r(){var d=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});It.push(d)}var kt,hi=(d,g)=>{Se=0,d=Ss(d,g),0<Se?m=d:xs(d)},Zn=[],ht=0;function vr(d){var g=new Sr(d>>>=0);return(v(),R)[g.Tc+12>>>0]==0&&(Rn(g,!0),ht--),ss(g,!1),Zn.push(g),Ag(d)}var Yt=0,Qn=()=>{Ee(0,0);var d=Zn.pop();kg(d.cd),Yt=0};function Rn(d,g){g=g?1:0,(v(),R)[d.Tc+12>>>0]=g}function ss(d,g){g=g?1:0,(v(),R)[d.Tc+13>>>0]=g}class Sr{constructor(g){this.cd=g,this.Tc=g-24}}var Jn=d=>{var g=Yt;if(!g)return kr(0),0;var $=new Sr(g);(v(),j)[$.Tc+16>>>2>>>0]=g;var _=(v(),j)[$.Tc+4>>>2>>>0];if(!_)return kr(0),g;for(var E of d){if(E===0||E===_)break;if(Cg(E,_,$.Tc+16))return kr(E),g}return kr(_),g};function On(){return Jn([])}function pi(d){return Jn([d>>>0])}function us(d,g,$,_){return Jn([d>>>0,g>>>0,$>>>0,_>>>0])}var er=()=>{var d=Zn.pop();d||U("no exception to throw");var g=d.cd;throw(v(),R)[d.Tc+13>>>0]==0&&(Zn.push(d),ss(d,!0),Rn(d,!1),ht++),vs(g),Yt=g};function fi(d,g,$){var _=new Sr(d>>>=0);throw g>>>=0,$>>>=0,(v(),j)[_.Tc+16>>>2>>>0]=0,(v(),j)[_.Tc+4>>>2>>>0]=g,(v(),j)[_.Tc+8>>>2>>>0]=$,vs(d),ht++,Yt=d}var D=()=>ht;function Q(d,g,$,_){return i?we(2,1,d,g,$,_):J(d,g,$,_)}function J(d,g,$,_){if(d>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?Q(d,g,$,_):(d={Ld:$,Rc:d,bd:_,rd:E},i?(d.Sc="spawnThread",postMessage(d,E),0):rt(d))}function ne(d){throw Yt||(Yt=d>>>0),Yt}var oe=globalThis.TextDecoder&&new TextDecoder,ce=(d,g,$,_)=>{if($=g+$,_)return $;for(;d[g]&&!(g>=$);)++g;return g},ke=(d,g=0,$,_)=>{if(16<($=ce(d,g>>>=0,$,_))-g&&d.buffer&&oe)return oe.decode(d.buffer instanceof ArrayBuffer?d.subarray(g,$):d.slice(g,$));for(_="";g<$;){var E=d[g++];if(128&E){var C=63&d[g++];if((224&E)==192)_+=String.fromCharCode((31&E)<<6|C);else{var B=63&d[g++];65536>(E=(240&E)==224?(15&E)<<12|C<<6|B:(7&E)<<18|C<<12|B<<6|63&d[g++])?_+=String.fromCharCode(E):(E-=65536,_+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else _+=String.fromCharCode(E)}return _},ge=(d,g,$)=>(d>>>=0)?ke((v(),X),d,g,$):"";function pe(d,g,$){return i?we(3,1,d,g,$):0}function fe(d,g){if(i)return we(4,1,d,g)}function de(d,g){if(i)return we(5,1,d,g)}function me(d,g,$){if(i)return we(6,1,d,g,$)}function $e(d,g,$){return i?we(7,1,d,g,$):0}function Fe(d,g){if(i)return we(8,1,d,g)}function Pe(d,g,$){if(i)return we(9,1,d,g,$)}function dn(d,g,$,_){if(i)return we(10,1,d,g,$,_)}function Nt(d,g,$,_){if(i)return we(11,1,d,g,$,_)}function Ne(d,g,$,_){if(i)return we(12,1,d,g,$,_)}function He(d){if(i)return we(13,1,d)}function ot(d,g){if(i)return we(14,1,d,g)}function Xt(d,g,$){if(i)return we(15,1,d,g,$)}var ls=()=>U(""),yt=d=>{d>>>=0;for(var g="";;){var $=(v(),X)[d++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Mr={},Tr={},Zt=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Qt(d,g,$={}){return(function(_,E,C={}){var B=E.name;if(!_)throw new Zt(`type "${B}" must have a positive integer typeid pointer`);if(Tr.hasOwnProperty(_)){if(C.yd)return;throw new Zt(`Cannot register type '${B}' twice`)}Tr[_]=E,Mr.hasOwnProperty(_)&&(E=Mr[_],delete Mr[_],E.forEach(K=>K()))})(d,g,$)}var Qm=(d,g,$)=>{switch(g){case 1:return $?_=>(v(),R)[_>>>0]:_=>(v(),X)[_>>>0];case 2:return $?_=>(v(),P)[_>>>1>>>0]:_=>(v(),q)[_>>>1>>>0];case 4:return $?_=>(v(),z)[_>>>2>>>0]:_=>(v(),j)[_>>>2>>>0];case 8:return $?_=>(v(),G)[_>>>3>>>0]:_=>(v(),O)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${d}`)}};function kx(d,g,$,_,E){d>>>=0,$>>>=0,g=yt(g>>>0);let C=B=>B;if(_=_===0n){let B=8*$;C=K=>BigInt.asUintN(B,K),E=C(E)}Qt(d,{name:g,Oc:C,Vc:(B,K)=>(typeof K=="number"&&(K=BigInt(K)),K),Uc:Qm(g,$,!_),Wc:null})}function Cx(d,g,$,_){Qt(d>>>=0,{name:g=yt(g>>>0),Oc:function(E){return!!E},Vc:function(E,C){return C?$:_},Uc:function(E){return this.Oc((v(),X)[E>>>0])},Wc:null})}var Jm=[],zn=[0,1,,1,null,1,!0,1,!1,1];function cs(d){9<(d>>>=0)&&--zn[d+1]===0&&(zn[d]=void 0,Jm.push(d))}var wt=d=>{if(!d)throw new Zt(`Cannot use deleted val. handle = ${d}`);return zn[d]},Ct=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Jm.pop()||zn.length;return zn[g]=d,zn[g+1]=1,g}};function ds(d){return this.Oc((v(),j)[d>>>2>>>0])}var Ax={name:"emscripten::val",Oc:d=>{var g=wt(d);return cs(d),g},Vc:(d,g)=>Ct(g),Uc:ds,Wc:null};function Rx(d){return Qt(d>>>0,Ax)}var Ox=(d,g)=>{switch(g){case 4:return function($){return this.Oc((v(),Z)[$>>>2>>>0])};case 8:return function($){return this.Oc((v(),N)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${d}`)}};function zx(d,g,$){$>>>=0,Qt(d>>>=0,{name:g=yt(g>>>0),Oc:_=>_,Vc:(_,E)=>E,Uc:Ox(g,$),Wc:null})}function Nx(d,g,$,_,E){d>>>=0,$>>>=0,g=yt(g>>>0);let C=K=>K;if(_===0){var B=32-8*$;C=K=>K<<B>>>B,E=C(E)}Qt(d,{name:g,Oc:C,Vc:(K,te)=>te,Uc:Qm(g,$,_!==0),Wc:null})}function Bx(d,g,$){function _(C){var B=(v(),j)[C>>>2>>>0];return C=(v(),j)[C+4>>>2>>>0],new E((v(),R).buffer,C,B)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Qt(d>>>=0,{name:$=yt($>>>0),Oc:_,Uc:_},{yd:!0})}var hn=(d,g,$)=>{var _=(v(),X);if(g>>>=0,0<$){var E=g;$=g+$-1;for(var C=0;C<d.length;++C){var B=d.codePointAt(C);if(127>=B){if(g>=$)break;_[g++>>>0]=B}else if(2047>=B){if(g+1>=$)break;_[g++>>>0]=192|B>>6,_[g++>>>0]=128|63&B}else if(65535>=B){if(g+2>=$)break;_[g++>>>0]=224|B>>12,_[g++>>>0]=128|B>>6&63,_[g++>>>0]=128|63&B}else{if(g+3>=$)break;_[g++>>>0]=240|B>>18,_[g++>>>0]=128|B>>12&63,_[g++>>>0]=128|B>>6&63,_[g++>>>0]=128|63&B,C++}}_[g>>>0]=0,d=g-E}else d=0;return d},mi=d=>{for(var g=0,$=0;$<d.length;++$){var _=d.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function Px(d,g){Qt(d>>>=0,{name:g=yt(g>>>0),Oc($){var _=(v(),j)[$>>>2>>>0];return _=ge($+4,_,!0),Pt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var E=typeof _=="string";if(!(E||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Zt("Cannot pass non-string to std::string");var C=E?mi(_):_.length,B=Ir(4+C+1),K=B+4;return(v(),j)[B>>>2>>>0]=C,E?hn(_,K,C+1):(v(),X).set(_,K>>>0),$!==null&&$.push(Pt,B),B},Uc:ds,Wc($){Pt($)}})}var eg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Dx=(d,g,$)=>{if(d>>>=1,16<(g=ce((v(),q),d,g/2,$))-d&&eg)return eg.decode((v(),q).slice(d,g));for($="";d<g;++d){var _=(v(),q)[d>>>0];$+=String.fromCharCode(_)}return $},Ux=(d,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*d.length?$/2:d.length;for(var E=0;E<$;++E){var C=d.charCodeAt(E);(v(),P)[g>>>1>>>0]=C,g+=2}return(v(),P)[g>>>1>>>0]=0,g-_},Lx=d=>2*d.length,Fx=(d,g,$)=>{var _="";d>>>=2;for(var E=0;!(E>=g/4);E++){var C=(v(),j)[d+E>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},Gx=(d,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var E=0;E<d.length;++E){var C=d.codePointAt(E);if(65535<C&&E++,(v(),z)[g>>>2>>>0]=C,(g+=4)+4>$)break}return(v(),z)[g>>>2>>>0]=0,g-_},Wx=d=>{for(var g=0,$=0;$<d.length;++$)65535<d.codePointAt($)&&$++,g+=4;return g};function qx(d,g,$){if(d>>>=0,g>>>=0,$=yt($>>>=0),g===2)var _=Dx,E=Ux,C=Lx;else _=Fx,E=Gx,C=Wx;Qt(d,{name:$,Oc:B=>{var K=(v(),j)[B>>>2>>>0];return K=_(B+4,K*g,!0),Pt(B),K},Vc:(B,K)=>{if(typeof K!="string")throw new Zt(`Cannot pass non-string to C++ string type ${$}`);var te=C(K),ae=Ir(4+te+g);return(v(),j)[ae>>>2>>>0]=te/g,E(K,ae+4,te+g),B!==null&&B.push(Pt,ae),ae},Uc:ds,Wc(B){Pt(B)}})}function Vx(d,g){Qt(d>>>=0,{zd:!0,name:g=yt(g>>>0),Oc:()=>{},Vc:()=>{}})}function Hx(d){bs(d>>>0,!r,1,!n,131072,!1),Kt()}var gi=d=>{if(!I)try{if(d(),!(0<Se))try{i?vi()&&xs(m):jt(m)}catch(g){g instanceof ie||g=="unwind"||l(0,g)}}catch(g){g instanceof ie||g=="unwind"||l(0,g)}},jx=!Atomics.waitAsync||((_0=globalThis.navigator)==null?void 0:_0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function hs(d){d>>>=0,jx||(Atomics.waitAsync((v(),z),d>>>2,d).value.then(yi),d+=128,Atomics.store((v(),z),d>>>2,1))}var yi=()=>gi(()=>{var d=vi();d&&(hs(d),Eg())});function Kx(d,g){(d>>>=0)==g>>>0?setTimeout(yi):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=gt[d])&&d.postMessage({Sc:"checkMailbox"})}var ps=[];function Yx(d,g,$,_,E){for(g>>>=0,E>>>=0,ps.length=0,$=E>>>3,_=E+_>>>3;$<_;){var C;C=(v(),G)[$++>>>0]?(v(),G)[$++>>>0]:(v(),N)[$++>>>0],ps.push(C)}return(g?Ms[g]:U$[d])(...ps)}var Xx=()=>{Se=0};function Zx(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):cn(gt[d])}function Qx(d){}var wi=d=>{try{d()}catch(g){U(g)}};function Jx(d){var g=(...$)=>{_i.push(d);try{return d(...$)}finally{I||(_i.pop(),Bt&&pn===1&&_i.length===0&&(pn=0,Se+=1,wi(m0),typeof Fibers<"u"&&Fibers.Zd()))}};return rg.set(d,g),g}var pn=0,Bt=null,tg=0,_i=[],fs=new Map,ng=new Map,rg=new Map,e$=0,ms=null,t$=[],ig=d=>(function(g){if(!I){if(pn===0){var $=!1,_=!1;g((E=0)=>{if(!I&&(tg=E,$=!0,_)){pn=2,wi(()=>g0(Bt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var C=(function(){var te=(v(),z)[Bt+8>>>2>>>0];return te=ng.get(te),te=rg.get(te),--Se,te()})()}catch(te){C=te,E=!0}var B=!1;if(!Bt){var K=ms;K&&(ms=null,(E?K.reject:K.resolve)(C),B=!0)}if(E&&!B)throw C}}),_=!0,$||(pn=1,Bt=(function(){var E=Ir(65548),C=E+12;if((v(),j)[E>>>2>>>0]=C,(v(),j)[E+4>>>2>>>0]=C+65536,C=_i[0],!fs.has(C)){var B=e$++;fs.set(C,B),ng.set(B,C)}return C=fs.get(C),(v(),z)[E+8>>>2>>>0]=C,E})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),wi(()=>f0(Bt)))}else pn===2?(pn=0,wi(y0),Pt(Bt),Bt=null,t$.forEach(gi)):U(`invalid state: ${pn}`);return tg}})(g=>{d().then(g)});function n$(d){return d>>>=0,ig(async()=>{var g=await wt(d);return Ct(g)})}var gs=[],r$=d=>{var g=gs.length;return gs.push(d),g},i$=(d,g)=>{for(var $=Array(d),_=0;_<d;++_){var E=_,C=(v(),j)[g+4*_>>>2>>>0],B=Tr[C];if(B===void 0)throw d=`parameter ${_}`,C=xg(C),g=yt(C),Pt(C),new Zt(`${d} has unknown type ${g}`);$[E]=B}return $},a$=(d,g,$)=>{var _=[];return d=d(_,$),_.length&&((v(),j)[g>>>2>>>0]=Ct(_)),d},o$={},bi=d=>{var g=o$[d];return g===void 0?yt(d):g};function s$(d,g,$){var[_,...E]=i$(d,g>>>0);g=_.Vc.bind(_);var C=E.map(te=>te.Uc.bind(te));d--;var B={toValue:wt};switch(d=C.map((te,ae)=>{var ve=`argFromPtr${ae}`;return B[ve]=te,`${ve}(args${ae?"+"+8*ae:""})`}),$){case 0:var K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:B.getStringOrSymbol=bi,K="toValue(handle)[getStringOrSymbol(methodName)]"}return K+=`(${d})`,_.zd||(B.toReturnWire=g,B.emval_returnValue=a$,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
  ${K}
  }`,$=new Function(Object.keys(B),K)(...Object.values(B)),K=`methodCaller<(${E.map(te=>te.name)}) => ${_.name}>`,r$(Object.defineProperty($,"name",{value:K}))}function u$(d,g){return g>>>=0,(d=wt(d>>>0))==wt(g)}function l$(d){return(d>>>=0)?(d=bi(d),Ct(globalThis[d])):Ct(globalThis)}function c$(d){return d=bi(d>>>0),Ct(t[d])}function d$(d,g){return g>>>=0,d=wt(d>>>0),g=wt(g),Ct(d[g])}function h$(d){9<(d>>>=0)&&(zn[d+1]+=1)}function ag(d,g,$,_,E){return gs[d>>>0](g>>>0,$>>>0,_>>>0,E>>>0)}function p$(d,g,$,_,E){return ag(d>>>0,g>>>0,$>>>0,_>>>0,E>>>0)}function f$(){return Ct([])}function m$(d){d=wt(d>>>0);for(var g=Array(d.length),$=0;$<d.length;$++)g[$]=d[$];return Ct(g)}function g$(d){return Ct(bi(d>>>0))}function y$(){return Ct({})}function w$(d){for(var g=wt(d>>>=0);g.length;){var $=g.pop();g.pop()($)}cs(d)}function _$(d,g,$){g>>>=0,$>>>=0,d=wt(d>>>0),g=wt(g),$=wt($),d[g]=$}function b$(d,g){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),g>>>=0,d=new Date(1e3*d),(v(),z)[g>>>2>>>0]=d.getUTCSeconds(),(v(),z)[g+4>>>2>>>0]=d.getUTCMinutes(),(v(),z)[g+8>>>2>>>0]=d.getUTCHours(),(v(),z)[g+12>>>2>>>0]=d.getUTCDate(),(v(),z)[g+16>>>2>>>0]=d.getUTCMonth(),(v(),z)[g+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),z)[g+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),z)[g+28>>>2>>>0]=d}var og=d=>d%4==0&&(d%100!=0||d%400==0),sg=[0,31,60,91,121,152,182,213,244,274,305,335],ug=[0,31,59,90,120,151,181,212,243,273,304,334];function x$(d,g){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),g>>>=0,d=new Date(1e3*d),(v(),z)[g>>>2>>>0]=d.getSeconds(),(v(),z)[g+4>>>2>>>0]=d.getMinutes(),(v(),z)[g+8>>>2>>>0]=d.getHours(),(v(),z)[g+12>>>2>>>0]=d.getDate(),(v(),z)[g+16>>>2>>>0]=d.getMonth(),(v(),z)[g+20>>>2>>>0]=d.getFullYear()-1900,(v(),z)[g+24>>>2>>>0]=d.getDay();var $=(og(d.getFullYear())?sg:ug)[d.getMonth()]+d.getDate()-1|0;(v(),z)[g+28>>>2>>>0]=$,(v(),z)[g+36>>>2>>>0]=-60*d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset();var _=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|($!=_&&d.getTimezoneOffset()==Math.min(_,$)),(v(),z)[g+32>>>2>>>0]=d}function $$(d){d>>>=0;var g=new Date((v(),z)[d+20>>>2>>>0]+1900,(v(),z)[d+16>>>2>>>0],(v(),z)[d+12>>>2>>>0],(v(),z)[d+8>>>2>>>0],(v(),z)[d+4>>>2>>>0],(v(),z)[d>>>2>>>0],0),$=(v(),z)[d+32>>>2>>>0],_=g.getTimezoneOffset(),E=new Date(g.getFullYear(),6,1).getTimezoneOffset(),C=new Date(g.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(C,E);return 0>$?(v(),z)[d+32>>>2>>>0]=+(E!=C&&B==_):0<$!=(B==_)&&(E=Math.max(C,E),g.setTime(g.getTime()+6e4*((0<$?B:E)-_))),(v(),z)[d+24>>>2>>>0]=g.getDay(),$=(og(g.getFullYear())?sg:ug)[g.getMonth()]+g.getDate()-1|0,(v(),z)[d+28>>>2>>>0]=$,(v(),z)[d>>>2>>>0]=g.getSeconds(),(v(),z)[d+4>>>2>>>0]=g.getMinutes(),(v(),z)[d+8>>>2>>>0]=g.getHours(),(v(),z)[d+12>>>2>>>0]=g.getDate(),(v(),z)[d+16>>>2>>>0]=g.getMonth(),(v(),z)[d+20>>>2>>>0]=g.getYear(),d=g.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function lg(d,g,$,_,E,C,B){return i?we(16,1,d,g,$,_,E,C,B):-52}function cg(d,g,$,_,E,C){if(i)return we(17,1,d,g,$,_,E,C)}var Er={},v$=()=>performance.timeOrigin+performance.now();function dg(d,g){if(i)return we(18,1,d,g);if(Er[d]&&(clearTimeout(Er[d].id),delete Er[d]),!g)return 0;var $=setTimeout(()=>{delete Er[d],gi(()=>Tg(d,performance.timeOrigin+performance.now()))},g);return Er[d]={id:$,Yd:g},0}function S$(d,g,$,_){d>>>=0,g>>>=0,$>>>=0,_>>>=0;var E=new Date().getFullYear(),C=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var B=Math.max(C,E);(v(),j)[d>>>2>>>0]=60*B,(v(),z)[g>>>2>>>0]=+(C!=E),d=(g=K=>{var te=Math.abs(K);return`UTC${0<=K?"-":"+"}${String(Math.floor(te/60)).padStart(2,"0")}${String(te%60).padStart(2,"0")}`})(C),g=g(E),E<C?(hn(d,$,17),hn(g,_,17)):(hn(d,_,17),hn(g,$,17))}var M$=()=>Date.now();function T$(d,g,$){return $>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),G)[$>>>3>>>0]=BigInt(d),0):28}var ys=[],hg=(d,g)=>{ys.length=0;for(var $;$=(v(),X)[d++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,ys.push($==112?(v(),j)[g>>>2>>>0]:$==106?(v(),G)[g>>>3>>>0]:$==105?(v(),z)[g>>>2>>>0]:(v(),N)[g>>>3>>>0]),g+=_?8:4}return ys};function E$(d,g,$){return d>>>=0,g=hg(g>>>0,$>>>0),Ms[d](...g)}function I$(d,g,$){return d>>>=0,g=hg(g>>>0,$>>>0),Ms[d](...g)}var k$=()=>{};function C$(d,g){return T(ge(d>>>0,g>>>0))}var A$=()=>{throw Se+=1,"unwind"};function R$(){return 4294901760}var O$=()=>navigator.hardwareConcurrency,Nn={},xi=d=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+g[1]:0},pg=d=>{for(var g of d)(d=xi(g))&&(Nn[d]=g)};function z$(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),pg(d),Nn.gd=xi(d[3]),Nn.Jd=d,Nn.gd}function $i(d){if(!(d=Nn[d>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(d))d=g[1];else{if(!(g=/^(.+?)@/.exec(d)))return 0;d=g[1]}Pt($i.hd??0),g=mi(d)+1;var $=Ir(g);return $&&hn(d,$,g),$i.hd=$,$i.hd}function N$(d){d>>>=0;var g=(v(),X).length;if(d<=g||4294901760<d)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,d+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(d,_)/65536))-kt.buffer.byteLength+65535)/65536|0;try{kt.grow(_),L();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function B$(d,g,$){if(d>>>=0,g>>>=0,Nn.gd==d)var _=Nn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),pg(_);for(var E=3;_[E]&&xi(_[E])!=d;)++E;for(d=0;d<$&&_[d+E];++d)(v(),z)[g+4*d>>>2>>>0]=xi(_[d+E]);return d}var ws,_s={},fg=()=>{var _;if(!ws){var d,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in _s)_s[d]===void 0?delete g[d]:g[d]=_s[d];var $=[];for(d in g)$.push(`${d}=${g[d]}`);ws=$}return ws};function mg(d,g){if(i)return we(19,1,d,g);d>>>=0,g>>>=0;var $,_=0,E=0;for($ of fg()){var C=g+_;(v(),j)[d+E>>>2>>>0]=C,_+=hn($,C,1/0)+1,E+=4}return 0}function gg(d,g){if(i)return we(20,1,d,g);d>>>=0,g>>>=0;var $=fg();for(var _ of((v(),j)[d>>>2>>>0]=$.length,d=0,$))d+=mi(_)+1;return(v(),j)[g>>>2>>>0]=d,0}function yg(d){return i?we(21,1,d):52}function wg(d,g,$,_){return i?we(22,1,d,g,$,_):52}function _g(d,g,$,_){return i?we(23,1,d,g,$,_):70}var P$=[null,[],[]];function bg(d,g,$,_){if(i)return we(24,1,d,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var E=0,C=0;C<$;C++){var B=(v(),j)[g>>>2>>>0],K=(v(),j)[g+4>>>2>>>0];g+=8;for(var te=0;te<K;te++){var ae=d,ve=(v(),X)[B+te>>>0],Ce=P$[ae];ve===0||ve===10?((ae===1?S:T)(ke(Ce)),Ce.length=0):Ce.push(ve)}E+=K}return(v(),j)[_>>>2>>>0]=E,0}function D$(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)$r();Ge.push(async()=>{var g=(async function(){if(!i)return Promise.all(It.map(Xn))})();ze++,await g,--ze==0&&Ke&&(g=Ke,Ke=null,g())})})(),i||(kt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),L()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Te(),t.stackRestore=d=>Me(d),t.stackAlloc=d=>$s(d),t.setValue=function(d,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(v(),R)[d>>>0]=g;break;case"i16":(v(),P)[d>>>1>>>0]=g;break;case"i32":(v(),z)[d>>>2>>>0]=g;break;case"i64":(v(),G)[d>>>3>>>0]=BigInt(g);break;case"float":(v(),Z)[d>>>2>>>0]=g;break;case"double":(v(),N)[d>>>3>>>0]=g;break;case"*":(v(),j)[d>>>2>>>0]=g;break;default:U(`invalid type for setValue: ${$}`)}},t.getValue=function(d,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(v(),R)[d>>>0];case"i16":return(v(),P)[d>>>1>>>0];case"i32":return(v(),z)[d>>>2>>>0];case"i64":return(v(),G)[d>>>3>>>0];case"float":return(v(),Z)[d>>>2>>>0];case"double":return(v(),N)[d>>>3>>>0];case"*":return(v(),j)[d>>>2>>>0];default:U(`invalid type for getValue: ${g}`)}},t.UTF8ToString=ge,t.stringToUTF8=hn,t.lengthBytesUTF8=mi;var xg,$g,vi,Pt,Ir,bs,vg,Sg,Mg,xs,Tg,Eg,Ee,kr,Ig,Me,$s,Te,kg,vs,Cg,Ag,Rg,Ss,Og,zg,Ng,Bg,Pg,Dg,Ug,Lg,Fg,Gg,Wg,qg,Vg,Hg,jg,Kg,Yg,Xg,Zg,Qg,Jg,e0,t0,n0,r0,i0,a0,o0,s0,u0,l0,c0,d0,h0,p0,f0,m0,g0,y0,Jt,U$=[Ye,Xe,Q,pe,fe,de,me,$e,Fe,Pe,dn,Nt,Ne,He,ot,Xt,lg,cg,dg,mg,gg,yg,wg,_g,bg],Ms={1003524:(d,g,$,_,E)=>{if(t===void 0||!t.Xc)return 1;if((d=ge(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>d.byteLength)return 3;try{let C=d.subarray(g,g+$);switch(E){case 0:(v(),X).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(d,g,$)=>{t.td(d,(v(),X).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,g,$)=>{t.ed(Number(d),Number(g),Number($),!0)},1004704:(d,g,$)=>{t.ed(Number(d),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,g,$)=>{t.$b("HardSigmoid",d,{alpha:g,beta:$})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,g,$)=>{t.$b("Clip",d,{min:g,max:$})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,g)=>{t.$b("Elu",d,{alpha:g})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,g)=>{t.$b("LeakyRelu",d,{alpha:g})},1006444:(d,g)=>{t.$b("ThresholdedRelu",d,{alpha:g})},1006514:(d,g)=>{t.$b("Cast",d,{to:g})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,g,$,_,E)=>{t.$b("ReduceMean",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007283:(d,g,$,_,E)=>{t.$b("ReduceMax",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007457:(d,g,$,_,E)=>{t.$b("ReduceMin",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007631:(d,g,$,_,E)=>{t.$b("ReduceProd",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007806:(d,g,$,_,E)=>{t.$b("ReduceSum",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007980:(d,g,$,_,E)=>{t.$b("ReduceL1",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008153:(d,g,$,_,E)=>{t.$b("ReduceL2",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008326:(d,g,$,_,E)=>{t.$b("ReduceLogSum",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008503:(d,g,$,_,E)=>{t.$b("ReduceSumSquare",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008683:(d,g,$,_,E)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,g,$)=>{t.$b("Transpose",d,{perm:g?Array.from((v(),z).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(d,g,$,_)=>{t.$b("DepthToSpace",d,{blocksize:g,mode:ge($),format:_?"NHWC":"NCHW"})},1009173:(d,g,$,_)=>{t.$b("DepthToSpace",d,{blocksize:g,mode:ge($),format:_?"NHWC":"NCHW"})},1009306:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We,fn)=>{t.$b("ConvTranspose",d,{format:te?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[C,B],strides:[K],wIsConst:()=>!!(v(),R)[ae>>>0],outputPadding:ve?Array.from((v(),z).subarray(Number(ve)>>>0,Number(Ce)>>>0)):[],outputShape:De?Array.from((v(),z).subarray(Number(De)>>>0,Number(We)>>>0)):[],activation:ge(fn)})},1009739:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We)=>{t.$b("ConvTranspose",d,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((v(),z).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),z).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),R)[te>>>0],outputPadding:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],outputShape:Ce?Array.from((v(),z).subarray(Number(Ce)>>>0,Number(De)>>>0)):[],activation:ge(We)})},1010400:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We,fn)=>{t.$b("ConvTranspose",d,{format:te?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[C,B],strides:[K],wIsConst:()=>!!(v(),R)[ae>>>0],outputPadding:ve?Array.from((v(),z).subarray(Number(ve)>>>0,Number(Ce)>>>0)):[],outputShape:De?Array.from((v(),z).subarray(Number(De)>>>0,Number(We)>>>0)):[],activation:ge(fn)})},1010833:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We)=>{t.$b("ConvTranspose",d,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((v(),z).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),z).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(B)>>>0,(Number(B)>>>0)+2>>>0)),wIsConst:()=>!!(v(),R)[te>>>0],outputPadding:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],outputShape:Ce?Array.from((v(),z).subarray(Number(Ce)>>>0,Number(De)>>>0)):[],activation:ge(We)})},1011494:(d,g)=>{t.$b("GlobalAveragePool",d,{format:g?"NHWC":"NCHW"})},1011585:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We)=>{t.$b("AveragePool",d,{format:We?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),z).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from((v(),z).subarray(Number(Ce)>>>0,Number(De)>>>0)):[]})},1012064:(d,g)=>{t.$b("GlobalAveragePool",d,{format:g?"NHWC":"NCHW"})},1012155:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We)=>{t.$b("AveragePool",d,{format:We?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),z).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from((v(),z).subarray(Number(Ce)>>>0,Number(De)>>>0)):[]})},1012634:(d,g)=>{t.$b("GlobalMaxPool",d,{format:g?"NHWC":"NCHW"})},1012721:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We)=>{t.$b("MaxPool",d,{format:We?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),z).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from((v(),z).subarray(Number(Ce)>>>0,Number(De)>>>0)):[]})},1013196:(d,g)=>{t.$b("GlobalMaxPool",d,{format:g?"NHWC":"NCHW"})},1013283:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We)=>{t.$b("MaxPool",d,{format:We?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(B)>>>0)):[],kernel_shape:K?Array.from((v(),z).subarray(Number(K)>>>0,Number(te)>>>0)):[],pads:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],strides:Ce?Array.from((v(),z).subarray(Number(Ce)>>>0,Number(De)>>>0)):[]})},1013758:(d,g,$,_,E)=>{t.$b("Gemm",d,{alpha:g,beta:$,transA:_,transB:E})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,g,$,_)=>{t.$b("ArgMax",d,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(d,g,$,_)=>{t.$b("ArgMin",d,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(d,g)=>{t.$b("Softmax",d,{axis:g})},1014195:(d,g)=>{t.$b("Concat",d,{axis:g})},1014255:(d,g,$,_,E)=>{t.$b("Split",d,{axis:g,numOutputs:$,splitSizes:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,g)=>{t.$b("Gather",d,{axis:Number(g)})},1014536:(d,g)=>{t.$b("GatherElements",d,{axis:Number(g)})},1014615:(d,g)=>{t.$b("GatherND",d,{batch_dims:Number(g)})},1014694:(d,g,$,_,E,C,B,K,te,ae,ve)=>{t.$b("Resize",d,{antialias:g,axes:$?Array.from((v(),z).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:ge(E),cubicCoeffA:C,excludeOutside:B,extrapolationValue:K,keepAspectRatioPolicy:ge(te),mode:ge(ae),nearestMode:ge(ve)})},1015056:(d,g,$,_,E,C,B)=>{t.$b("Slice",d,{starts:g?Array.from((v(),z).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[],axes:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(B)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,g,$)=>{t.$b("InstanceNormalization",d,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(d,g,$)=>{t.$b("InstanceNormalization",d,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,g)=>{t.$b("Einsum",d,{equation:ge(g)})},1015734:(d,g,$,_,E)=>{t.$b("Pad",d,{mode:g,value:$,pads:_?Array.from((v(),z).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1015877:(d,g,$,_,E,C)=>{t.$b("BatchNormalization",d,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(d,g,$,_,E,C)=>{t.$b("BatchNormalization",d,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(d,g,$)=>{t.$b("CumSum",d,{exclusive:Number(g),reverse:Number($)})},1016312:(d,g,$)=>{t.$b("DequantizeLinear",d,{axis:g,blockSize:$})},1016402:(d,g,$,_,E)=>{t.$b("GridSample",d,{align_corners:g,mode:ge($),padding_mode:ge(_),format:E?"NHWC":"NCHW"})},1016572:(d,g,$,_,E)=>{t.$b("GridSample",d,{align_corners:g,mode:ge($),padding_mode:ge(_),format:E?"NHWC":"NCHW"})},1016742:(d,g)=>{t.$b("ScatterND",d,{reduction:ge(g)})},1016827:(d,g,$,_,E,C,B,K,te)=>{t.$b("Attention",d,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:C,qkvHiddenSizes:B?Array.from((v(),z).subarray(Number(K)>>>0,Number(K)+B>>>0)):[],pastPresentShareBuffer:!!te})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We,fn,Ts)=>{t.$b("Conv",d,{format:Ce?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((v(),z).subarray(Number($)>>>0,Number(_)>>>0)):[],group:E,kernel_shape:C?Array.from((v(),z).subarray(Number(C)>>>0,Number(B)>>>0)):[],pads:K?Array.from((v(),z).subarray(Number(K)>>>0,Number(te)>>>0)):[],strides:ae?Array.from((v(),z).subarray(Number(ae)>>>0,Number(ve)>>>0)):[],w_is_const:()=>!!(v(),R)[Number(De)>>>0],activation:ge(We),activation_params:fn?Array.from((v(),Z).subarray(Number(fn)>>>0,Number(Ts)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,g,$,_,E,C,B,K,te)=>{t.$b("GroupQueryAttention",d,{numHeads:g,kvNumHeads:$,scale:_,softcap:E,doRotary:C,rotaryInterleaved:B,smoothSoftmax:K,localWindowSize:te})},1018124:(d,g,$,_)=>{t.$b("LayerNormalization",d,{axis:g,epsilon:$,simplified:!!_})},1018235:(d,g,$,_)=>{t.$b("LayerNormalization",d,{axis:g,epsilon:$,simplified:!!_})},1018346:(d,g,$,_,E,C)=>{t.$b("MatMulNBits",d,{k:g,n:$,accuracyLevel:_,bits:E,blockSize:C})},1018473:(d,g,$,_,E,C)=>{t.$b("MultiHeadAttention",d,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:C})},1018632:(d,g)=>{t.$b("QuickGelu",d,{alpha:g})},1018696:(d,g,$,_,E)=>{t.$b("RotaryEmbedding",d,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:E})},1018835:(d,g,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:g,simplified:!!$})},1018937:(d,g,$)=>{t.$b("SkipLayerNormalization",d,{epsilon:g,simplified:!!$})},1019039:(d,g,$,_)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:d=>{t.Fd(d)},1019194:(d,g)=>t.Hd(Number(d),Number(g),t.Yc.Kd,t.Yc.errors)};function L$(d,g,$){return ig(async()=>{await t.Dd(Number(d),Number(g),Number($))})}function F$(){return typeof wasmOffsetConverter<"u"}function G$(d,g,$,_){var E=Te();try{return Lg(d,g,$,_)}catch(C){if(Me(E),C!==C+0)throw C;Ee(1,0)}}function W$(d,g,$){var _=Te();try{return Bg(d,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ee(1,0)}}function q$(d){var g=Te();try{Og(d)}catch($){if(Me(g),$!==$+0)throw $;Ee(1,0)}}function V$(d,g){var $=Te();try{return Ss(d,g)}catch(_){if(Me($),_!==_+0)throw _;Ee(1,0)}}function H$(d,g,$){var _=Te();try{Rg(d,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ee(1,0)}}function j$(d,g){var $=Te();try{Fg(d,g)}catch(_){if(Me($),_!==_+0)throw _;Ee(1,0)}}function K$(d,g,$,_,E,C,B){var K=Te();try{return Dg(d,g,$,_,E,C,B)}catch(te){if(Me(K),te!==te+0)throw te;Ee(1,0)}}function Y$(d,g,$,_,E,C){var B=Te();try{zg(d,g,$,_,E,C)}catch(K){if(Me(B),K!==K+0)throw K;Ee(1,0)}}function X$(d,g,$,_){var E=Te();try{Ug(d,g,$,_)}catch(C){if(Me(E),C!==C+0)throw C;Ee(1,0)}}function Z$(d,g,$,_,E){var C=Te();try{Ng(d,g,$,_,E)}catch(B){if(Me(C),B!==B+0)throw B;Ee(1,0)}}function Q$(d,g,$,_,E,C,B){var K=Te();try{Wg(d,g,$,_,E,C,B)}catch(te){if(Me(K),te!==te+0)throw te;Ee(1,0)}}function J$(d,g,$,_,E,C,B){var K=Te();try{qg(d,g,$,_,E,C,B)}catch(te){if(Me(K),te!==te+0)throw te;Ee(1,0)}}function ev(d,g,$,_,E,C,B,K){var te=Te();try{Kg(d,g,$,_,E,C,B,K)}catch(ae){if(Me(te),ae!==ae+0)throw ae;Ee(1,0)}}function tv(d,g,$,_,E){var C=Te();try{return Gg(d,g,$,_,E)}catch(B){if(Me(C),B!==B+0)throw B;Ee(1,0)}}function nv(d,g,$){var _=Te();try{return Yg(d,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ee(1,0)}}function rv(d,g,$,_,E,C,B,K){var te=Te();try{Xg(d,g,$,_,E,C,B,K)}catch(ae){if(Me(te),ae!==ae+0)throw ae;Ee(1,0)}}function iv(d,g,$,_,E,C,B,K,te,ae,ve,Ce){var De=Te();try{Vg(d,g,$,_,E,C,B,K,te,ae,ve,Ce)}catch(We){if(Me(De),We!==We+0)throw We;Ee(1,0)}}function av(d,g,$,_,E,C){var B=Te();try{return Hg(d,g,$,_,E,C)}catch(K){if(Me(B),K!==K+0)throw K;Ee(1,0)}}function ov(d,g,$){var _=Te();try{return Zg(d,g,$)}catch(E){if(Me(_),E!==E+0)throw E;return Ee(1,0),0n}}function sv(d,g,$,_,E,C,B,K,te){var ae=Te();try{Pg(d,g,$,_,E,C,B,K,te)}catch(ve){if(Me(ae),ve!==ve+0)throw ve;Ee(1,0)}}function uv(d){var g=Te();try{return Qg(d)}catch($){if(Me(g),$!==$+0)throw $;Ee(1,0)}}function lv(d,g){var $=Te();try{return p0(d,g)}catch(_){if(Me($),_!==_+0)throw _;return Ee(1,0),0n}}function cv(d){var g=Te();try{return Jg(d)}catch($){if(Me(g),$!==$+0)throw $;return Ee(1,0),0n}}function dv(d,g,$,_){var E=Te();try{return a0(d,g,$,_)}catch(C){if(Me(E),C!==C+0)throw C;Ee(1,0)}}function hv(d,g,$,_,E){var C=Te();try{return o0(d,g,$,_,E)}catch(B){if(Me(C),B!==B+0)throw B;Ee(1,0)}}function pv(d,g,$,_,E,C){var B=Te();try{return s0(d,g,$,_,E,C)}catch(K){if(Me(B),K!==K+0)throw K;Ee(1,0)}}function fv(d,g,$,_,E,C){var B=Te();try{return u0(d,g,$,_,E,C)}catch(K){if(Me(B),K!==K+0)throw K;Ee(1,0)}}function mv(d,g,$,_,E,C,B,K){var te=Te();try{return jg(d,g,$,_,E,C,B,K)}catch(ae){if(Me(te),ae!==ae+0)throw ae;Ee(1,0)}}function gv(d,g,$,_,E){var C=Te();try{return l0(d,g,$,_,E)}catch(B){if(Me(C),B!==B+0)throw B;return Ee(1,0),0n}}function yv(d,g,$,_){var E=Te();try{return c0(d,g,$,_)}catch(C){if(Me(E),C!==C+0)throw C;Ee(1,0)}}function wv(d,g,$,_){var E=Te();try{return d0(d,g,$,_)}catch(C){if(Me(E),C!==C+0)throw C;Ee(1,0)}}function _v(d,g,$,_,E,C,B,K,te,ae,ve,Ce){var De=Te();try{return h0(d,g,$,_,E,C,B,K,te,ae,ve,Ce)}catch(We){if(Me(De),We!==We+0)throw We;Ee(1,0)}}function bv(d,g,$,_,E,C,B,K,te,ae,ve){var Ce=Te();try{r0(d,g,$,_,E,C,B,K,te,ae,ve)}catch(De){if(Me(Ce),De!==De+0)throw De;Ee(1,0)}}function xv(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We,fn,Ts){var Mv=Te();try{i0(d,g,$,_,E,C,B,K,te,ae,ve,Ce,De,We,fn,Ts)}catch(Es){if(Me(Mv),Es!==Es+0)throw Es;Ee(1,0)}}function $v(d,g,$){var _=Te();try{return e0(d,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ee(1,0)}}function vv(d,g,$){var _=Te();try{return t0(d,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ee(1,0)}}function Sv(d,g,$,_){var E=Te();try{n0(d,g,$,_)}catch(C){if(Me(E),C!==C+0)throw C;Ee(1,0)}}function Si(){if(0<ze)Ke=Si;else if(i)y==null||y(t),W();else{for(var d=Ge;0<d.length;)d.shift()(t);0<ze?Ke=Si:(t.calledRun=!0,I||(W(),y==null||y(t)))}}return i||(Jt=await ue(),Si()),t.PTR_SIZE=4,F?t:new Promise((d,g)=>{y=d,w=g})}var Xs,Zs,F0=ee(()=>{var e,t;Xs=Ys,Zs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Zs&&Ys()}),Oi,zi,Qs,ct,Js,Or,eu,tu,Ni,nu,Bi,ru,Pi,iu,Di=ee(()=>{Ci(),Oi=typeof location>"u"?void 0:location.origin,zi=self.location.href>"file:"&&self.location.href<"file;",Qs=()=>{{if(zi){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Oi).href}return self.location.href}},ct=Qs(),Js=()=>{if(ct&&!ct.startsWith("blob:"))return ct.substring(0,ct.lastIndexOf("/")+1)},Or=(e,t)=>{try{let n=t??ct;return(n?new URL(e,n):new URL(e)).origin===Oi}catch{return!1}},eu=(e,t)=>{let n=t??ct;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},tu=(e,t)=>`${t??"./"}${e}`,Ni=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},nu=async e=>(await import(e)).default,Bi=(L0(),tr(Hs)).default,ru=async()=>{if(!ct)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(ct))return[void 0,Bi()];let e=await Ni(ct);return[e,Bi(e)]},Pi=(F0(),tr(Ks)).default,iu=async(e,t,n,r)=>{let i=Pi&&!(e||t);if(i)if(ct)i=Or(ct)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Pi];{let a="ort-wasm-simd-threaded.jsep.mjs",o=e??eu(a,t),s=n&&o&&!Or(o,t),u=s?await Ni(o):o??tu(a,t);return[s?u:void 0,await nu(u)]}}}),Ui,zr,ir,Li,au,ou,su,Fi,Le,wn=ee(()=>{Di(),zr=!1,ir=!1,Li=!1,au=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ou=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},su=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Fi=async e=>{if(zr)return Promise.resolve();if(ir)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Li)throw new Error("previous call to 'initializeWebAssembly()' failed.");ir=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!su())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ou())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=au();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,o=i==null?void 0:i.mjs,s=(o==null?void 0:o.href)??o,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,h=e.wasmBinary,[c,p]=await iu(s,a,n>1,!!h||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(h)b.wasmBinary=h,b.locateFile=x=>x;else if(l||a)b.locateFile=x=>l??a+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(c){let x=Js();x&&(b.locateFile=M=>x+M)}p(b).then(x=>{ir=!1,zr=!0,Ui=x,y(),c&&URL.revokeObjectURL(c)},x=>{ir=!1,Li=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Le=()=>{if(zr&&Ui)return Ui;throw new Error("WebAssembly is not initialized yet.")}}),bt,Nr,Oe,Gi=ee(()=>{wn(),bt=(e,t)=>{let n=Le(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Nr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let o=t?t+i:i;if(typeof a=="object")Nr(a,o+".",n,r);else if(typeof a=="string"||typeof a=="number")r(o,a.toString());else if(typeof a=="boolean")r(o,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Oe=e=>{let t=Le(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),o=t.getValue(i+r,"*"),s=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),uu,G0=ee(()=>{wn(),Gi(),uu=e=>{let t=Le(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=bt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Oe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Nr(e.extra,"",new WeakSet,(o,s)=>{let u=bt(o,r),l=bt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Oe(`Can't set a run config entry: ${o} - ${s}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(o=>t._free(o)),a}}}),lu,cu,du,_n,hu,pu,W0=ee(()=>{wn(),Gi(),lu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},cu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},du=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},_n=(e,t,n,r)=>{let i=bt(t,r),a=bt(n,r);Le()._OrtAddSessionConfigEntry(e,i,a)!==0&&Oe(`Can't set a session config entry: ${t} - ${n}.`)},hu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,o=[];switch(a){case"webnn":if(a="WEBNN",_n(e,"session.disable_quant_qdq","1",n),_n(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&_n(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);_n(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=bt(a,n),u=o.length,l=0,h=0;if(u>0){l=Le()._malloc(u*Le().PTR_SIZE),n.push(l),h=Le()._malloc(u*Le().PTR_SIZE),n.push(h);for(let c=0;c<u;c++)Le().setValue(l+c*Le().PTR_SIZE,o[c][0],"*"),Le().setValue(h+c*Le().PTR_SIZE,o[c][1],"*")}await Le()._OrtAppendExecutionProvider(e,s,l,h,u)!==0&&Oe(`Can't append execution provider: ${a}.`)}},pu=async e=>{let t=Le(),n=0,r=[],i=e||{};du(i);try{let a=lu(i.graphOptimizationLevel??"all"),o=cu(i.executionMode??"sequential"),s=typeof i.logId=="string"?bt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let h=typeof i.optimizedModelFilePath=="string"?bt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,o,!!i.enableProfiling,0,s,u,l,h),n===0&&Oe("Can't create session options."),i.executionProviders&&await hu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);_n(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=bt(c,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Oe(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Nr(i.extra,"",new WeakSet,(c,p)=>{_n(n,c,p,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oe("Can't release session options."),r.forEach(o=>t._free(o)),a}}}),bn,Lt,xn,Br,Pr,Wi,qi,Vi,ye=ee(()=>{bn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Lt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},xn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Br=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Pr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Wi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Hi,fu=ee(()=>{Ci(),Hi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let o=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(a,o,l).set(u),o+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),mu,gu,yu,wu,ji,_u,Ie,Ft=ee(()=>{ye(),mu=["V","I","W","E","F"],gu=(e,t)=>{console.log(`[${mu[e]},${new Date().toISOString()}]${t}`)},ji=(e,t)=>{yu=e,wu=t},_u=(e,t)=>{let n=Pr(e),r=Pr(yu);n>=r&&gu(n,typeof t=="function"?t():t)},Ie=(...e)=>{wu&&_u(...e)}}),bu,Un,V,Dr,xu,$u,vu,_e=ee(()=>{bu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Un=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=new Array(a);if(n){if(r<2||i<2)return;let s=bu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[o[a-2],o[a-1]]=s}for(let s=n?3:1;s<=a;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let h=Math.max(u,l);if(u&&l)o[a-s]=Math.max(u,l);else{if(h>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},V=class Mi{static size(t){return Mi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Mi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Mi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Dr=class Cr{static adjustPoolAttributes(t,n,r,i,a,o){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<a.length){if(a[s]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let s=0;s<r.length*2;s++)if(s<o.length){if(o[s]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[s]>=r[s]||o[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Cr.adjustPadAndReturnShape(t[u+(o?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Cr.computeShapeHelper(t,n,u,r,i,a,o,s),u}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Cr.computeShapeHelper(!1,t,u,r,i,a,o,s),u}static computeShapeHelper(t,n,r,i,a,o,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Cr.adjustPadAndReturnShape(n[l+2],i[l],a[l],o[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,o,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[o]=0,a[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return a[o]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),a[s]=h-a[o],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[o]+a[s]-l)/n+1)}},xu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==o)throw new Error("dimension mismatch");if(a<=0||s<=0||o<=0)throw new Error("invalid shape specified");if(i&&!Un.isValidBroadcast(i,[a,s]))throw new Error("gemm: invalid bias shape for broadcast");return[a,s,o]}},$u=-34028234663852886e22,vu=34028234663852886e22}),Ki,Su=ee(()=>{ye(),Ki=(e,t)=>new(Br(t))(e)}),Yi,Xi,Zi,Mu,Qi,Tu,Ji,ea,ta,Eu,Iu,q0=ee(()=>{ye(),Ft(),Yi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Xi=(e,t)=>{if(t==="int32")return e;let n=Yi.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Br(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let o=new Int32Array(i);for(let s=0;s<i;s++){let u=a[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[s]=Number(u)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(a,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Zi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Mu=1,Qi=()=>Mu++,Tu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ji=(e,t)=>{let n=Yi.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},ea=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ji(this.dataType,this.tensorShape)}destroy(){Ie("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Zi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ta=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!(a!=null&&a.input.dataTypes.includes(t))){if(o=Tu.get(t),!o||(a==null?void 0:a.input.dataTypes.includes(o)))throw new Error(`WebNN backend does not support data type: ${t}`);Ie("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Ji(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Xi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ie("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Zi(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Eu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Qi();return this.tensorTrackersById.set(e,new ta(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ie("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ie("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Qi(),o=new ea({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ta(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[l,h]of this.freeTensors.entries())if(h.canReuseTensor(s,t,n)){Ie("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}Ie("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new ea({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Iu=(...e)=>new Eu(...e)}),ar,ku,Cu,V0=ee(()=>{ye(),wn(),Su(),q0(),Ft(),ar=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ku=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Cu=class{constructor(e){this.tensorManager=Iu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ji(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ie("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ie("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ie("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>ku(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ie("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=ar.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Ie("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=ar.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Le().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ie("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ki(n,t)}}registerMLTensor(e,t,n,r){let i=ar.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Ie("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=a.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(l);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":h=new Int32Array(l);break;case"uint32":h=new Uint32Array(l);break;case"int64":if(o){let c=Xi(new Uint8Array(l),"int64");h=new Int32Array(c.buffer),i.dataType="int32"}else h=new BigInt64Array(l);break;case"uint64":h=new BigUint64Array(l);break;case"int8":h=new Int8Array(l);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ie("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=ar.get(bn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),na=ee(()=>{}),ra,Ur,Lr,Au,Ru,ia,aa,Ou,zu,H0=ee(()=>{Ft(),na(),ra=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ur=[],Lr=e=>Math.ceil(Number(e)/16)*16,Au=e=>{for(let t=0;t<Ur.length;t++){let n=Ur[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ru=1,ia=()=>Ru++,aa=async(e,t,n,r)=>{let i=Lr(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},Ou=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ra)Ur.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Lr(i),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ie("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Lr(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=ia();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ie("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ie("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Au(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:ia(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Ie("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ie("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await aa(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ra.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ie("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},zu=(...e)=>new Ou(...e)}),Nu,Re,je=ee(()=>{Nu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new Nu(e)}),Ln,Fr,Ze,nt,he,Ve,oa,Fn,tn,le,or,Y,se,Bu,sa,Pu,Du,be=ee(()=>{ye(),_e(),Ln=64,Fr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ze=(e,t=1)=>{let n=Fr(e,t);return typeof n=="string"?n:n[0]},nt=(e,t=1)=>{let n=Fr(e,t);return typeof n=="string"?n:n[1]},he=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:V.computeStrides(n)})}),t},Ve=e=>e%4===0?4:e%2===0?2:1,oa=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Fn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,tn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,or=(e,t,n,r,i)=>{let a=typeof n=="number",o=a?n:n.length,s=[...new Array(o).keys()],u=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Fr(t,i),h=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:h,storage:c,tensor:t},f=F=>typeof F=="string"?F:`${F}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let F=0;F<o-1;F++)x+=`
    let dim${F} = current / ${le(b,F,o)};
    let rest${F} = current % ${le(b,F,o)};
    indices[${F}] = dim${F};
    current = rest${F};
    `;x+=`indices[${o-1}] = current;`;let M=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=F=>(m.offsetToIndices=!0,o<2?F:`o2i_${e}(${F})`),T=[];if(o>=2)for(let F=o-1;F>=0;F--)T.push(`${le(b,F,o)} * (indices[${F}])`);let I=o<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${T.join("+")};
  }`,k=F=>(m.indicesToOffset=!0,o<2?F:`i2o_${e}(${F})`),v=(...F)=>o===0?"0u":`${p.indices}(${F.map(f).join(",")})`,A=(F,L)=>o<2?`${F}`:`${le(F,L,o)}`,R=(F,L,W)=>o<2?`${F}=${W};`:`${le(F,L,o)}=${W};`,X={},P=(F,L)=>{m.broadcastedIndicesToOffset=!0;let W=`${L.name}broadcastedIndicesTo${e}Offset`;if(W in X)return`${W}(${F})`;let U=[];for(let re=o-1;re>=0;re--){let ue=L.indicesGet("outputIndices",re+L.rank-o);U.push(`${A(b,re)} * (${ue} % ${A(w,re)})`)}return X[W]=`fn ${W}(outputIndices: ${L.type.indices}) -> u32 {
             return ${U.length>0?U.join("+"):"0u"};
           }`,`${W}(${F})`},q=(F,L)=>(()=>{if(p.storage===p.value)return`${e}[${F}]=${L};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${F}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${F}]=vec2<u32>(u32(${L}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${F}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),z=F=>(()=>{if(p.storage===p.value)return`${e}[${F}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${F}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${F}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${F}] & 0xFFu), bool(${e}[${F}] & 0xFF00u), bool(${e}[${F}] & 0xFF0000u), bool(${e}[${F}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),j=o<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${h} {
    return ${z(`i2o_${e}(indices)`)};
  }`,Z=o<2?"":(()=>{let F=s.map(W=>`d${W}: u32`).join(", "),L=s.map(W=>`d${W}`).join(", ");return`
  fn get_${e}(${F}) -> ${h} {
    return get_${e}ByIndices(${v(L)});
  }`})(),N=(...F)=>{if(F.length!==o)throw new Error(`indices length must be ${o}`);let L=F.map(f).join(",");return o===0?z("0u"):o===1?z(L[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${L})`)},G=F=>o<2?z(F):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${F})`),O=o<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${h}) {
    ${q(`i2o_${e}(indices)`,"value")}
  }`,H=o<2?"":(()=>{let F=s.map(W=>`d${W}: u32`).join(", "),L=s.map(W=>`d${W}`).join(", ");return`
  fn set_${e}(${F}, value: ${h}) {
    set_${e}ByIndices(${v(L)}, value);
  }`})();return{impl:()=>{let F=[],L=!1;return m.offsetToIndices&&(F.push(M),L=!0),m.indicesToOffset&&(F.push(I),L=!0),m.broadcastedIndicesToOffset&&(Object.values(X).forEach(W=>F.push(W)),L=!0),m.set&&(F.push(H),L=!0),m.setByIndices&&(F.push(O),L=!0),m.get&&(F.push(Z),L=!0),m.getByIndices&&(F.push(j),L=!0),!a&&L&&F.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${V.computeStrides(n).join(",")});`),F.join(`
`)},type:p,offsetToIndices:S,indicesToOffset:k,broadcastedIndicesToOffset:P,indices:v,indicesGet:A,indicesSet:R,set:(...F)=>{if(F.length!==o+1)throw new Error(`indices length must be ${o}`);let L=F[o];if(typeof L!="string")throw new Error("value must be string");let W=F.slice(0,o).map(f).join(",");return o===0?q("0u",L):o===1?q(W[0],L):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${W}, ${L})`)},setByOffset:q,setByIndices:(F,L)=>o<2?q(F,L):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${F}, ${L});`),get:N,getByOffset:z,getByIndices:G,usage:r,name:e,strides:b,shape:w,rank:o}},Y=(e,t,n,r=1)=>or(e,t,n,"input",r),se=(e,t,n,r=1)=>or(e,t,n,"output",r),Bu=(e,t,n)=>or(e,t,n,"atomicOutput",1),sa=(e,t,n,r=1)=>or(e,t,n,"internal",r),Pu=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ln){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Du=(e,t)=>new Pu(e,t)}),Uu,ua,Lu,Fu,Gu,Wu,dt,qu,Vu,nn=ee(()=>{ye(),_e(),je(),be(),Uu=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ua=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Lu=(e,t)=>V.sortBasedOnPerm(e,ua(e.length,t)),Fu=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Gu=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Wu=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},dt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ua(r,t),a=Lu(e.dims,i),o=e.dims,s=a,u=r<2||Wu(i,e.dims),l;if(u)return l=m=>{let y=Y("input",n,o,4),w=se("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:h,newPerm:c}=Gu(e.dims,i),p=V.areEqual(c,[2,3,1]),f=V.areEqual(c,[3,1,2]);if(h.length===2||p||f){o=p?[h[0],h[1]*h[2]]:f?[h[0]*h[1],h[2]]:h,s=[o[1],o[0]];let m=16;return l=y=>{let w=Y("a",n,o.length),b=se("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...he(o,s)]}},getShaderSource:l}}return l=m=>{let y=Y("a",n,o.length),w=se("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Fu(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=V.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...he(o,s)]}},getShaderSource:l}},qu=(e,t)=>{Uu(e.inputs,t.perm),e.compute(dt(e.inputs[0],t.perm))},Vu=e=>Re({perm:e.perm})}),Hu,ju,Ku,Yu,Xu,Zu,Qu,Ju,el,tl,xt,nl,rl,il,al,ol,sl,ul,ll,cl,dl,j0=ee(()=>{ye(),_e(),be(),ca(),nn(),Hu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},ju={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ku={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Yu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Xu=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Zu=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Qu=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Ju=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},el=(e,t)=>{let n=[];if(!Ju(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},tl=(e,t,n,r,i,a,o)=>{let s=n[0].dims,u=V.size(a),l=V.size(o),h=Y("_A",n[0].dataType,s),c=se("output",i,a),p=64;u===1&&(p=256);let f=`
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

          var bestValue = f32(${Ku[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Hu[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ju[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Yu[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},xt=(e,t,n,r)=>{let i=e.inputs.length===1?n:la(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((f,m)=>m));let o=V.normalizeAxes(a,e.inputs[0].dims.length),s=o,u=e.inputs[0],l=el(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(dt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Xu(s.length,u.dims.length));let[h,c]=Zu(u.dims,s),p=h;i.keepDims&&(p=Qu(h,o)),e.compute(tl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},nl=(e,t)=>{xt(e,"ReduceMeanShared",t,"mean")},rl=(e,t)=>{xt(e,"ReduceL1Shared",t,"l1")},il=(e,t)=>{xt(e,"ReduceL2Shared",t,"l2")},al=(e,t)=>{xt(e,"ReduceLogSumExpShared",t,"logSumExp")},ol=(e,t)=>{xt(e,"ReduceMaxShared",t,"max")},sl=(e,t)=>{xt(e,"ReduceMinShared",t,"min")},ul=(e,t)=>{xt(e,"ReduceProdShared",t,"prod")},ll=(e,t)=>{xt(e,"ReduceSumShared",t,"sum")},cl=(e,t)=>{xt(e,"ReduceSumSquareShared",t,"sumSquare")},dl=(e,t)=>{xt(e,"ReduceLogSumShared",t,"logSum")}}),$t,hl,Gr,la,vt,pl,fl,ml,gl,yl,wl,_l,bl,xl,$l,St,vl,Sl,Ml,Tl,El,Il,kl,Cl,Al,Rl,ca=ee(()=>{ye(),_e(),je(),be(),j0(),$t=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},hl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Gr=(e,t,n,r,i,a,o=!1,s=!1)=>{let u=[],l=n[0].dims,h=l.length,c=V.normalizeAxes(i,h),p=!s&&c.length===0;l.forEach((y,w)=>{p||c.indexOf(w)>=0?o&&u.push(1):u.push(y)});let f=u.length,m=V.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=Y("_A",n[0].dataType,h),x=se("output",a,f),M=r(b,x,c),S=M[2];for(let T=0,I=0;T<h;T++)p||c.indexOf(T)>=0?(o&&I++,S=`for(var j${T}: u32 = 0; j${T} < ${l[T]}; j${T}++) {
                  ${M[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${b.indicesSet("input_indices",T,`j${T}`)}
                  ${S}
                }`):(w.push(`${b.indicesSet("input_indices",T,x.indicesGet("output_indices",I))};`),I++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${M[0]}       // init ops for reduce max/min
          ${M[1]}
          ${S}
          ${M[3]}
          ${M.length===4?x.setByOffset("global_idx","value"):M.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...he(l,u)]})}},la=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},vt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:la(i,n);e.compute(Gr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?hl:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},pl=(e,t)=>{$t(e.inputs),vt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},fl=(e,t)=>{$t(e.inputs),vt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},ml=(e,t)=>{$t(e.inputs),vt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},gl=(e,t)=>{$t(e.inputs),vt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},yl=(e,t)=>{$t(e.inputs),vt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",o,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},wl=(e,t)=>{$t(e.inputs),vt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&(a*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},_l=(e,t)=>{$t(e.inputs),vt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let o=0;o<n.rank;o++)(i.indexOf(o)>=0||i.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},bl=(e,t)=>{$t(e.inputs),vt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},xl=(e,t)=>{$t(e.inputs),vt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},$l=(e,t)=>{$t(e.inputs),vt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},St=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},vl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wl(e,t):nl(e,t)},Sl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):rl(e,t)},Ml=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ml(e,t):il(e,t)},Tl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gl(e,t):al(e,t)},El=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yl(e,t):ol(e,t)},Il=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_l(e,t):sl(e,t)},kl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bl(e,t):ul(e,t)},Cl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xl(e,t):ll(e,t)},Al=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$l(e,t):cl(e,t)},Rl=(e,t)=>{St(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):dl(e,t)}}),da,Ol,zl,ha,K0=ee(()=>{ye(),je(),ca(),da=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ol=(e,t)=>{da(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Gr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},zl=(e,t)=>{da(e.inputs);let n=(r,i,a)=>{let o=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Gr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ha=e=>Re(e)}),Nl,Wr,Bl,Pl,Dl,sr,Ul,Ll,pa=ee(()=>{ye(),_e(),na(),be(),Nl=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(o){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=o.dims[3])}let w=m+y,b=-1,x=0;if(a)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:h,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Wr=(e,t,n)=>t&&e?`
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
    `,Bl=(e,t,n,r,i,a,o,s)=>{let u=Ve(o?1:a),l=64,h=a/u;h<l&&(l=32);let c=Math.ceil(a/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:c}],f=Ze(e.dataType,u),m=nt(1,u),y=["type"];o&&y.push("type"),s&&y.push("type");let w=b=>{let x=se("x",e.dataType,e.dims,u),M=[x],S=o?Y("seq_lens",o.dataType,o.dims):void 0;S&&M.push(S);let T=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;T&&M.push(T);let I=nt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...M)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Wr(S,T,!1)}
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
        x[offset + i] = ${x.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},Pl=(e,t,n,r,i,a,o,s,u)=>{let l=o+a.kvSequenceLength,h=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,p=a.kvNumHeads?a.kvNumHeads:a.numHeads,f=c?[a.batchSize,p,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,w=Ve(a.headSize),b=a.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],T=c&&r&&V.size(r.dims)>0,I=["type","type"];T&&I.push("type"),i&&I.push("type"),s&&I.push("type"),u&&I.push("type");let k=[{dims:h,dataType:t.dataType,gpuDataType:0}];c&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let v=A=>{let R=Y("q",t.dataType,t.dims,w),X=Y("key",n.dataType,n.dims,w),P=[R,X];if(T){let O=Y("past_key",r.dataType,r.dims,w);P.push(O)}i&&P.push(Y("attention_bias",i.dataType,i.dims));let q=s?Y("seq_lens",s.dataType,s.dims):void 0;q&&P.push(q);let z=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;z&&P.push(z);let j=se("output",t.dataType,h),Z=[j];c&&Z.push(se("present_key",t.dataType,f,w));let N=nt(1,w),G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${R.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${R.type.storage}, ${x*x}>;
  ${A.registerUniforms(G).declareVariables(...P,...Z)}
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
    ${Wr(q,z,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${N}(0);
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
          value += ${N}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${j.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:S}),getShaderSource:v}},Dl=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,h=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,h],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&V.size(r.dims)>0,M=["type","type"];x&&M.push("type"),o&&M.push("type"),s&&M.push("type");let S=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:f,dataType:t.dataType,gpuDataType:0});let T=I=>{let k=Y("probs",t.dataType,t.dims),v=Y("v",n.dataType,n.dims),A=[k,v];x&&A.push(Y("past_value",r.dataType,r.dims));let R=o?Y("seq_lens",o.dataType,o.dims):void 0;o&&A.push(R);let X=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;s&&A.push(X);let P=[se("output",t.dataType,m)];c&&P.push(se("present_value",t.dataType,f));let q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${I.registerUniforms(q).declareVariables(...A,...P)}
  ${I.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Wr(R,X,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:b}),getShaderSource:T}},sr=(e,t,n,r,i,a,o,s,u,l,h=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(o?1:0)+(s?1:0)),f=p>1?o:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&V.size(u.dims)>0?u:void 0,x=[t,n];f&&V.size(f.dims)>0&&x.push(f),b&&x.push(b),h&&x.push(h),c&&x.push(c);let M=e.compute(Pl(p,t,n,f,b,l,y,h,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(Bl(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,h,c),{inputs:h&&c?[M,h,c]:[M],outputs:[]});let S=[M,r];m&&V.size(m.dims)>0&&S.push(m),h&&S.push(h),c&&S.push(c),e.compute(Dl(p,M,r,m,l,y,h,c),{inputs:S,outputs:p>1?[0,2]:[0]})},Ul=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=c=>{let p=se("output_q",u[0].dataType,n),f=se("output_k",u[0].dataType,n),m=se("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),w=Y("weight",u[1].dataType,u[1].dims),b=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Ll=(e,t)=>{let n=Nl(e.inputs,t),[r,i,a]=Ul(e,n);return sr(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Fl,Gl,Wl,ql,Y0=ee(()=>{pt(),ye(),_e(),je(),be(),Fl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let o=i.length;if(o!==r.length)throw new Error(`${a}: num dimensions != ${o}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Gl=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Ve(a[a.length-1]):1,s=i==="NHWC"&&a.length>1?o:1,u=V.size(a)/o,l=r,h=l?a.length:a,c=Y("x",e[0].dataType,e[0].dims,o),p=Y("scale",e[1].dataType,e[1].dims,s),f=Y("bias",e[2].dataType,e[2].dims,s),m=Y("inputMean",e[3].dataType,e[3].dims,s),y=Y("inputVar",e[4].dataType,e[4].dims,s),w=se("y",e[0].dataType,h,o),b=()=>{let M="";if(r)M=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${o}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<p.rank;S++)M+=`cIndices[${S}] = outputIndices[${S}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
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
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...he(a)]:[{type:12,data:u}]})}},Wl=e=>Re(e),ql=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Wl({...t,outputCount:r});if(Ue.webgpu.validateInputContent&&Fl(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Gl(n,i))}}),Vl,Hl,jl,X0=ee(()=>{_e(),be(),Vl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Hl=e=>{let t=e[0].dims,n=e[0].dims[2],r=V.size(t)/4,i=e[0].dataType,a=Y("input",i,t,4),o=Y("bias",i,[n],4),s=Y("residual",i,t,4),u=se("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,o,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},jl=e=>{Vl(e.inputs),e.compute(Hl(e.inputs))}}),Kl,Ae,Yl,Xl,Zl,Ql,Jl,ec,tc,nc,rc,ic,ac,oc,sc,uc,ur,lc,qr,cc,dc,hc,pc,fc,mc,gc,yc,wc,_c,bc,xc,$c,vc,Sc,Mc,fa,Tc,ma,ga,Ec,Ic,kc,Cc,Ac,Rc,ya=ee(()=>{ye(),_e(),je(),be(),Kl=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[s],4),h=se("outputData",r,[s],4),c=[{name:"vec_size",type:"u32"}];return o&&c.push(...o),`
      ${e.registerUniforms(c).declareVariables(l,h)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},Ae=(e,t,n,r,i,a=e.dataType,o,s)=>{let u=[{type:12,data:Math.ceil(V.size(e.dims)/4)}];return o&&u.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Kl(l,V.size(e.dims),e.dataType,a,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(V.size(l[0].dims)/64/4)},programUniforms:u})}},Yl=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},Xl=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},Zl=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},Ql=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},Jl=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},ec=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},tc=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},nc=e=>Re(e),rc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},ic=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},ac=(e,t)=>{let n=t||ic(e.inputs),r=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},oc=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},sc=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},uc=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},ur=e=>Re(e),lc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,cc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,qr(t)))},dc=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},hc=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},pc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,qr(t)))},fc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},mc=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},gc=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},yc=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},wc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},_c=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},bc=e=>Re(e),xc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},$c=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},vc=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},Sc=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},Mc=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},fa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Tc=e=>{e.compute(Ae(e.inputs[0],"Tanh",fa))},ma=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${fa("v")};
}
`,ga=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Ec=e=>{let t=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",ga,ma(t),void 0,e.inputs[0].dataType))},Ic=(e,t)=>{let n=nt(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},kc=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},Cc=(e,t)=>`
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
`,Ac=e=>`quick_gelu_impl(${e})`,Rc=(e,t)=>{let n=nt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",Ac,Cc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Oc,zc,Nc,Z0=ee(()=>{_e(),be(),ya(),Oc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},zc=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=se("output",e[0].dataType,t,4),a=V.size(t)/4,o=Ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:s=>`
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
  }`}},Nc=e=>{Oc(e.inputs),e.compute(zc(e.inputs))}}),Bc,Pc,Mt,Dc,Uc,Lc,Fc,Gc,Wc,qc,Vc,Hc,jc,Q0=ee(()=>{ye(),_e(),be(),Bc=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p,f;typeof s=="string"?p=f=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=se("outputData",h,r.length,4),y=Y("aData",u,t.length,4),w=Y("bData",l,n.length,4),b;if(i)if(a){let x=V.size(t)===1,M=V.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,T=n.length>0&&n[n.length-1]%4===0;x||M?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||T?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,S,T="")=>{let I=`aData[indexA${S}][componentA${S}]`,k=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${m.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,m)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,m)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${M}[${S}] = ${T}(${p(I,k)});
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
      }`},Pc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!V.areEqual(s,u),h=s,c=V.size(s),p=!1,f=!1,m=[l];if(l){let y=Un.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");h=y.slice(),c=V.size(h);let w=V.size(s)===1,b=V.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(M);let S=1;for(let T=1;T<h.length;T++){let I=s[s.length-T],k=u[u.length-T];if(I===k)S*=I;else break}S%4===0?(f=!0,p=!0):(w||b||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Bc(y,s,u,h,p,l,f,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:h,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(V.size(h)/4)},...he(s,u,h)]})}},Mt=(e,t,n,r,i,a)=>{e.compute(Pc(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Dc=e=>{Mt(e,"Add",(t,n)=>`${t}+${n}`)},Uc=e=>{Mt(e,"Div",(t,n)=>`${t}/${n}`)},Lc=e=>{Mt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Fc=e=>{Mt(e,"Mul",(t,n)=>`${t}*${n}`)},Gc=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Mt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Wc=e=>{Mt(e,"Sub",(t,n)=>`${t}-${n}`)},qc=e=>{Mt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Vc=e=>{Mt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Hc=e=>{Mt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},jc=e=>{Mt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Kc,Yc,Xc,Zc,Qc,Jc,J0=ee(()=>{ye(),_e(),je(),be(),Kc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((o,s)=>{if(s!==n){if(o.dataType!==i)throw new Error("input tensors should be one type");if(o.dims.length!==a)throw new Error("input tensors should have the same shape");o.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Yc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Xc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Zc=(e,t,n,r)=>{let i=V.size(n),a=new Array(e.length),o=new Array(e.length),s=0,u=[],l=[],h=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],a[y]=s,l.push(e[y].dims.length),o[y]=Y(`input${y}`,r,l[y]),u.push("rank"),h.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)h.push(...he(e[y].dims));h.push(...he(n));let c=se("output",r,n.length),p=c.indicesGet("indices",t),f=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...o,c)})()}

  ${Yc(a.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Xc(o,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:m}},Qc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=V.normalizeAxis(t.axis,r.length);Kc(n,i);let a=r.slice();a[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let o=n.filter(s=>V.size(s.dims)>0);e.compute(Zc(o,i,a,n[0].dataType),{inputs:o})},Jc=e=>Re({axis:e.axis})}),$n,vn,Sn,wa,Mn=ee(()=>{ye(),_e(),$n=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},vn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},wa=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[$u,vu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Je,ed,_a=ee(()=>{Je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ed=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),td,ey=ee(()=>{td=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),lr,ba,xa=ee(()=>{ye(),_e(),be(),Mn(),lr=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((o,s)=>`
      if (${le(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,le(i,s+a,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},ba=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o[o.length-2],l=s[s.length-1],h=o[o.length-1],c=Ve(l),p=Ve(h),f=Ve(u),m=V.size(n)/c/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[V.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:h}];vn(t,x),x.push(...he(w,o,s)),y&&x.push(...he(e[2].dims)),x.push(...he(b));let M=S=>{let T=sa("batch_dims",e[0].dataType,w.length),I=Y("a",e[0].dataType,o.length,p),k=Y("b",e[1].dataType,s.length,c),v=se("output",e[0].dataType,b.length,c),A=Ze(v.type.tensor),R=$n(t,v.type.value,A),X=[I,k],P="";if(y){let j=i?c:1;X.push(Y("bias",e[2].dataType,e[2].dims.length,j)),P=`${i?`value += bias[col / ${j}];`:`value += ${v.type.value}(bias[row + i]);`}`}let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sn(t,q);let z=()=>{let j=`var a_data: ${I.type.value};`;for(let Z=0;Z<p;Z++)j+=`
              let b_data${Z} = b[(b_offset + (k + ${Z}) * uniforms.N + col) / ${c}];`;for(let Z=0;Z<f;Z++){j+=`a_data = a[(a_offset + (row + ${Z}) * uniforms.K + k) / ${p}];`;for(let N=0;N<p;N++)j+=`
            values[${Z}] = fma(${k.type.value}(a_data${p===1?"":`[${N}]`}), b_data${N}, values[${Z}]);
`}return j};return`
  ${S.registerUniforms(q).registerInternalVariables(T).declareVariables(...X,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${lr("a_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${lr("b_indices",k,k.rank-2,T.rank,"batch_indices")}
    ${k.indicesSet("b_indices",k.rank-2,0)}
    ${k.indicesSet("b_indices",k.rank-1,0)}
    let b_offset = ${k.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${z()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${P}
      ${R}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),nd,rd,$a,va,id,Sa,ad,Vr,Ma=ee(()=>{ye(),_e(),be(),Mn(),xa(),_a(),nd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,rd=(e,t)=>e?`
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
        }`,$a=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],h=i?u:a,c=i?a:u,p=h/t[0],f=a/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&h%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
          ${nd(i,r)}
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

          ${rd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},va=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,id=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Sa=(e,t,n="f32",r,i=!1,a=32,o=!1,s=32,u=!1)=>{let l=e[1]*t[1],h=e[0]*t[0],c=i?l:a,p=i?a:l;if(!(p%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=c/t[0],y=a/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${va(i,r)}
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
      ${va(i,r)}
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
      ${id(i)}
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
`},ad=(e,t,n,r,i=!1)=>{let[a,o,s,u]=r,l=Ze(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Je(e,l)} {
      var value = ${Je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${lr("aIndices",o,o.rank-2,a.rank,"batchIndices")}
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
        ${lr("bIndices",s,s.rank-2,a.rank,"batchIndices")}
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
    `},Vr=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,u=o.slice(0,-2),l=s.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),c=V.size(h),p=o[o.length-2],f=o[o.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(c/b[2]/w[2])],M=y?4:1,S=[...u,p,f/M],T=S.length,I=[...l,f,m/M],k=I.length,v=[c,p,m/M],A=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];vn(t,A),A.push(...he(h,S,I));let R=["rank","rank"],X=e.length>2;X&&(A.push(...he(e[2].dims)),R.push("rank")),A.push(...he(v));let P=q=>{let z=h.length,j=sa("batchDims",e[0].dataType,z,1),Z=Ze(e[0].dataType),N=Y("a",e[0].dataType,T,M),G=Y("b",e[1].dataType,k,M),O=se("result",e[0].dataType,v.length,M),H=[N,G];if(X){let re=i?M:1;H.push(Y("bias",e[2].dataType,e[2].dims.length,re))}let F=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sn(t,F);let L=Ze(O.type.tensor),W=$n(t,O.type.value,L),U=ad(M,X,W,[j,N,G,O],i);return`
  ${q.registerUniforms(F).registerInternalVariables(j).declareVariables(...H,O)}
  ${U}
  ${y?$a(w,b,Z,j):Sa(w,b,Z,j)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:P}}}),od,sd,ty=ee(()=>{ye(),Ft(),be(),Mn(),_a(),ey(),Ma(),od=(e,t,n,r,i=!1,a,o=4,s=4,u=4,l="f32")=>{let h=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},c=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=e?`
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
    var resData = ${Je(o,l)}(0.0);
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
    return ${Je(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${x}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
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
    return ${Je(s,l)}(0.0);`,T=Je(u,l),I=Je(e?o:s,l),k=Je(e?s:o,l),v=$n(a,T,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?M:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?S:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${ed(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},sd=(e,t,n,r,i,a,o,s,u)=>{let l=t.format==="NHWC",h=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(h%4===0||h%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/x[0]/M[0]),Math.ceil(b/x[1]/M[1]),Math.ceil(c/x[2]/M[2])];Ie("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let T=y?l&&h%4!==0?3:4:1,I=x[1]*M[1],k=x[0]*M[0],v=Math.max(x[0]*T,x[1]),A=r%I===0,R=i%k===0,X=a%v===0,P=y?[T,4,4]:[1,1,1],q=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];vn(t,q),q.push(...he(e[0].dims,e[1].dims));let z=["rank","rank"];o&&(q.push(...he(e[2].dims)),z.push("rank")),q.push(...he(n));let j=Z=>{let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sn(t,N);let G=y?4:1,O=Ze(e[0].dataType),H=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${O}>`:O}) {
        result[flatIndex] = ${y?`vec4<${O}>`:O}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${O}>`:O}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,F=Y("x",e[0].dataType,e[0].dims.length,T===3?1:T),L=Y("w",e[1].dataType,e[1].dims.length,G),W=[F,L],U=se("result",e[0].dataType,n.length,G);if(o){let re=Y("bias",e[2].dataType,e[2].dims.length,G);W.push(re),H+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${O}>`:O} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${td("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Z.registerUniforms(N).declareVariables(...W,U)}
        ${H}
        ${od(l,A,R,X,o,t,P[0],P[1],P[2],O)}
        ${y?$a(M,x,O,void 0,!l,v):Sa(M,x,O,void 0,!l,v,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${y};${A};${R};${X};${I};${k};${v}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:q}),getShaderSource:j}}}),ud,Ta,cr,ld,Ea,cd,dd,hd,ny=ee(()=>{ye(),Ft(),_e(),be(),Mn(),_a(),ud=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ta=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),ld=(e,t,n,r=1)=>{let i=cr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ea=(e,t,n,r,i)=>{i==null&&(i=ld(e,t[0],r[0]));let a=[0,0,0,n];for(let o=0;o<3;o++)e[o]+2*i>=t[o]&&(a[o]=Math.trunc((e[o]-t[o]+2*i)/r[o]+1));return a},cd=(e,t,n,r,i,a,o,s,u,l)=>{let h,c,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Ea([t,n,r,1],[s,u,l],1,[i,a,o],e);c=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Ea([t,n,r,1],[s,u,l],1,[i,a,o],e[0]);c=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/a),f=Math.ceil(r/o);let m=(c-1)*i+s-t,y=(p-1)*a+u-n,w=(f-1)*o+l-r,b=Math.floor(m/2),x=m-b,M=Math.floor(y/2),S=y-M,T=Math.floor(w/2),I=w-T;h={top:M,bottom:S,left:T,right:I,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:c,outHeight:p,outWidth:f}},dd=(e,t,n,r,i,a=!1,o="channelsLast")=>{let s,u,l,h,c;if(o==="channelsLast")[s,u,l,h,c]=e;else if(o==="channelsFirst")[s,c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${o}`);let[p,,f,m,y]=t,[w,b,x]=Ta(n),[M,S,T]=Ta(r),I=cr(f,M),k=cr(m,S),v=cr(y,T),{padInfo:A,outDepth:R,outHeight:X,outWidth:P}=cd(i,u,l,h,w,b,x,I,k,v),q=a?p*c:p,z=[0,0,0,0,0];return o==="channelsFirst"?z=[s,q,R,X,P]:o==="channelsLast"&&(z=[s,R,X,P,q]),{batchSize:s,dataFormat:o,inDepth:u,inHeight:l,inWidth:h,inChannels:c,outDepth:R,outHeight:X,outWidth:P,outChannels:q,padInfo:A,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:I,effectiveFilterHeight:k,effectiveFilterWidth:v,dilationDepth:M,dilationHeight:S,dilationWidth:T,inShape:e,outShape:z,filterShape:t}},hd=(e,t,n,r,i,a)=>{let o=a==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(ud(u.x.map(w=>n[w]))/s[0]),1,1];Ie("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let h=1,c=V.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];vn(t,p),p.push(...he(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...he(e[2].dims)),f.push("rank")),p.push(...he(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sn(t,b);let x=1,M=Ze(e[0].dataType),S=Y("x",e[0].dataType,e[0].dims.length,h),T=Y("W",e[1].dataType,e[1].dims.length,x),I=[S,T],k=se("result",e[0].dataType,n.length,x),v="";if(m){let X=Y("bias",e[2].dataType,e[2].dims.length,x);I.push(X),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${o?le("coords",4,5):le("coords",1,5)}];
        }`}let A=Je(h,M),R=$n(t,A,M);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...I,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,S.rank)};
              let d2 = ${o?le("coords",S.rank-1,S.rank):le("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${o?le("coords",1,S.rank):le("coords",2,S.rank)},
              ${o?le("coords",2,S.rank):le("coords",3,S.rank)},
              ${o?le("coords",3,S.rank):le("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?le("uniforms.x_shape",1,S.rank):le("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${o?le("uniforms.x_shape",2,S.rank):le("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${o?le("uniforms.x_shape",3,S.rank):le("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${o?le("uniforms.x_shape",4,S.rank):le("uniforms.x_shape",1,S.rank)};
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
              ${R}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${h};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),pd,fd,ry=ee(()=>{ye(),_e(),be(),Mn(),pd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",o=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],h=l/t.group,c=u&&h>=4?Ve(l):1,p=V.size(n)/c,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];vn(t,f),f.push(...he(o,[s[0],s[1],s[2],s[3]/c]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...he([n[0],n[1],n[2],n[3]/c]));let y=w=>{let b=se("output",e[0].dataType,n.length,c),x=Ze(b.type.tensor),M=$n(t,b.type.value,x),S=Y("x",e[0].dataType,o.length),T=Y("w",e[1].dataType,s.length,c),I=[S,T];i&&I.push(Y("b",e[2].dataType,e[2].dims,c));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sn(t,k);let v=u?`
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
  ${w.registerUniforms(k).declareVariables(...I,b)}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},fd=(e,t,n,r)=>{let i=e.length>2,a=Ve(n[3]),o=Ve(n[2]),s=V.size(n)/a/o,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],h=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];vn(t,c),c.push(...he(u,l,h));let p=(o-1)*t.strides[1]+l[1],f=m=>{let y=se("output",e[0].dataType,h.length,a),w=Ze(y.type.tensor),b=$n(t,y.type.value,w),x=Y("x",e[0].dataType,u.length,a),M=Y("w",e[1].dataType,l.length,a),S=[x,M];i&&S.push(Y("b",e[2].dataType,e[2].dims,a));let T=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sn(t,I),`
  ${m.registerUniforms(I).declareVariables(...S,y)}
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${o};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}}}),md,Hr,gd,jr,Ia,ka,yd,wd,Ca,iy=ee(()=>{_e(),ty(),ny(),Ma(),ry(),Mn(),xa(),nn(),md=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),u=s.length,l=t[0],h=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),c=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-h[f]+i[f])/i[f]));return c.splice(0,0,o),c.splice(a?3:1,0,l),c},Hr=[2,3,1,0],gd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},jr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Dr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ia=e=>{let t=wa(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,o=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},ka=(e,t,n,r)=>{let i=n.format==="NHWC",a=md(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let I=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(dt(t[1],Hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),I.push(k)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(fd(I,n,a,r),{inputs:I}):e.compute(pd(I,n,a,r),{inputs:I});return}let o=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],h=t[1].dims[2],c=t[1].dims[3],p=a[i?1:2],f=a[i?2:3],m=a[i?3:1],y=i&&h===s&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||h===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let I=a[0],k,v,A,R=[];if(i){let q=e.kernelCustomData.wT??e.compute(dt(t[1],Hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=q),y){let z=s*u*l;k=t[0].reshape([1,I,z]),v=q.reshape([1,z,m]),A=[1,I,m]}else k=t[0].reshape([I,s*u,l]),v=q.reshape([1,l,m]),A=[I,p*f,m];R.push(k),R.push(v)}else k=t[0].reshape([I,l,s*u]),v=t[1].reshape([1,m,l]),A=[I,m,p*f],R.push(v),R.push(k);o&&R.push(t[2]);let X=A[2],P=R[0].dims[R[0].dims.length-1];X<8&&P<8?e.compute(ba(R,n,a,A,i,r),{inputs:R}):e.compute(Vr(R,n,a,A,i,r),{inputs:R});return}let w=!0,b=e.kernelCustomData.wT??e.compute(dt(t[1],Hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];o&&x.push(t[2]);let M=i?p*f:m,S=i?m:p*f,T=h*c*l;e.compute(sd(x,n,a,M,S,T,o,w,r),{inputs:x})},yd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=jr({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);ka(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},wd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=jr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,o=dd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(hd(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},Ca=(e,t)=>{if(gd(e.inputs,t),e.inputs[0].dims.length===3)yd(e,t);else if(e.inputs[0].dims.length===5)wd(e,e.inputs,t);else{let n=jr(t,e.inputs);ka(e,e.inputs,n)}}}),_d,ay=ee(()=>{ye(),Ft(),_e(),be(),_d=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",o=t.group,s=e[1].dims,u=s[2]/o,l=s[3],h=a?Ve(u):1,c=a&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/h)*h,f=u-p,m=a?Ve(l):1,y=a?l===1?h:m:1,w=V.size(i)/m,b=[Math.ceil(w/64),1,1];Ie("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],T=[t.dilations[0],t.dilations[1]],I=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],k=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:w},{type:12,data:M},{type:12,data:S},{type:12,data:T},{type:12,data:I},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...he(e[0].dims,e[1].dims)];r&&(v.push(...he(e[2].dims)),x.push("rank")),v.push(...he(i));let A=R=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=Ze(e[0].dataType),q=a?1:2,z=a?2:3,j=a?3:1,Z=Y("W",e[1].dataType,e[1].dims.length,y),N=Y("Dy",e[0].dataType,e[0].dims.length,h),G=[N,Z];r&&G.push(Y("bias",e[2].dataType,[i[j]].length,m));let O=se("result",e[0].dataType,i.length,m),H=()=>{let W="";if(c)h===4?W+=`
        let xValue = ${N.getByOffset("x_offset")};
        let wValue = ${Z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?W+=`
          dotProd = dotProd + dot(vec4<${P}>(${N.getByOffset("x_offset")}, ${N.getByOffset("x_offset + 1u")}), vec4<${P}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(W+=`
          dotProd = dotProd + dot(vec4<${P}>(${N.getByOffset("x_offset")}, ${N.getByOffset("x_offset + 1u")}, ${N.getByOffset("x_offset + 2u")}, ${N.getByOffset("x_offset + 3u")}), vec4<${P}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}, ${Z.getByOffset("w_offset + 2u")}, ${Z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(W+=`
                  let xValue = ${a?N.getByOffset(`${N.indicesToOffset(`${N.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):N.get("batch","inputChannel","idyR","idyC")};
        `,h===1)W+=`
          let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Z.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let U=0;U<h;U++)W+=`
            let wValue${U} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${U}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${U}] * wValue${U};`;return W},F=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let W="";if(h===1){W+="dotProd = dotProd";for(let U=0;U<f;U++)W+=`
            + ${N.getByOffset(`x_offset + ${U}`)} * ${Z.getByOffset(`w_offset + ${U}`)}`;W+=";"}else if(h===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);W+=`
          let xValue = ${N.getByOffset("x_offset")};
          let wValue = ${Z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return W},L=`
            let outputIndices = ${O.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${O.indicesGet("outputIndices",0)};
            let d1 = ${O.indicesGet("outputIndices",j)};
            let r = ${O.indicesGet("outputIndices",q)};
            let c = ${O.indicesGet("outputIndices",z)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${O.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${q}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${z}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${N.indicesToOffset(`${N.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${Z.indicesToOffset(`${Z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:h}) {
                  ${H()}
                  inputChannel = inputChannel + ${c?4:h};
                }
                ${F()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${O.setByOffset("global_idx","value")};
          `;return`
    ${R.registerUniforms(X).declareVariables(...G,O)}
      ${R.mainStart()}
      ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${y}${m}${c}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:A}}}),bd,xd,$d,Aa,vd,Sd,Ra,Md,Td,oy=ee(()=>{ay(),Mn(),nn(),bd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,xd=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},$d=(e,t,n,r,i,a,o,s,u,l)=>{let h=e.length-2,c=l.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-h-(s?1:0);m<h;++m,++y){let w=e[y],b=c?w*o[m]:l[m],x=bd(w,o[m],a[m],t[y],n[m],b);xd(x,r,a,m,m+h),c&&l.push(o[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-a[m]-a[m+h])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Aa=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}$d(s,n,u,e.autoPad,e.group,i,l,r,o,a);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:u,strides:l}),h},vd=e=>{let t=wa(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),h=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:h,outputShape:c,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Sd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((o,s)=>o+s,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((o,s)=>o+s,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((o,s)=>o+s,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((o,s)=>o+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ra=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(dt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(_d(a,n,r),{inputs:a})},Md=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Aa({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:u},r);Ra(e,r,l,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Td=(e,t)=>{if(Sd(e.inputs,t),e.inputs[0].dims.length===3)Md(e,t);else{let n=Aa(t,e.inputs);Ra(e,e.inputs,n)}}}),Ed,Id,kd,sy=ee(()=>{ye(),_e(),je(),be(),Ed=(e,t,n,r)=>{let i=V.size(t),a=t.length,o=Y("input",e,a),s=se("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=V.normalizeAxis(u,a),h=c=>{let p=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,f=le("uniforms.input_shape","uniforms.axis",a),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...he(t,t)]}),getShaderSource:h}},Id=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Ed(r,n,i,t),{inputs:[0]})},kd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Cd,Ad,Rd,Od,zd,uy=ee(()=>{ye(),_e(),je(),be(),Cd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ad=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Rd=(e,t)=>{let n,r,i,a,o,s,u=t.format==="NHWC",l=t.blocksize,h=t.mode==="DCR";u?([n,r,i,a]=e.dims,o=h?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=h?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(o),p=c.dims.length,f=e.dataType,m=Y("a",f,p),y=se("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Ad(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],M=V.size(x),S=c.dims,T=V.sortBasedOnPerm(S,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...he(S,T)]}},getShaderSource:w}},Od=(e,t)=>{Cd(e.inputs),e.compute(Rd(e.inputs[0],t))},zd=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Kr,dr,Oa,Nd,Bd,Pd,Dd,za,Ud,Ld,Fd,ly=ee(()=>{ye(),_e(),je(),be(),Kr="[a-zA-Z]|\\.\\.\\.",dr="("+Kr+")+",Oa="^"+dr+"$",Nd="("+dr+",)*"+dr,Bd="^"+Nd+"$",Pd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Dd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Bd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,o)=>{let s=e[o].dims.slice();if(!a.match(RegExp(Oa)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,o);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,o])=>o.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(dr)))throw new Error("Invalid RHS");(i=r.match(RegExp(Kr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(a);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Oa))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Kr,"g")),l=new Pd(r);return u==null||u.forEach((h,c)=>{if(h==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(o=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<o.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,c+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(h,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[s++],r)}),l}},za=e=>e+"_max",Ud=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,h)=>Y(`input${h}`,t,l)),a=V.size(r),o=se("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let h=[],c="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,T)=>{var I;if(n.rhs.symbolToIndices.has(T)){let k=(I=n.rhs.symbolToIndices.get(T))==null?void 0:I[0];k!==void 0&&n.lhs.forEach((v,A)=>{if(S.inputIndices.includes(A)){let R=v.symbolToIndices.get(T);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(X=>{h.push(`${i[A].indicesSet(`input${A}Indices`,X,o.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,v)=>{if(S.inputIndices.includes(v)){let A=k.symbolToIndices.get(T);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(R=>{m.push(`${i[v].indicesSet(`input${v}Indices`,R,`${T}`)}`)}),b.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${za(T)}; ${T}++) {`),w.push("}")});let M=x?[...h,`let sum = ${i.map((S,T)=>S.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...h,p,...y,...m,c,...b,f,...w];return`
            ${l.registerUniforms(s.map(S=>({name:`${za(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,o)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${i.map((S,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:a});let h=e.map((c,p)=>[...he(c)]).reduce((c,p)=>c.concat(p),l);return h.push(...he(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}},getShaderSource:u}},Ld=(e,t)=>{let n=new Dd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,o)=>a.dims);e.compute(Ud(i,e.inputs[0].dataType,n,r))},Fd=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),Gd,Na,Wd,qd,Vd,cy=ee(()=>{ye(),_e(),be(),Gd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Na=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Wd=(e,t)=>e.length>t.length?Na(e,t):Na(t,e),qd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Wd(t,n),i=e[0].dataType,a=i===9||V.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(V.size(r)/s),l=c=>{let p=Y("input",i,t.length,o),f=se("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
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
    ${m}`},h=[{type:12,data:u},...he(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Vd=e=>{Gd(e.inputs),e.compute(qd(e.inputs),{inputs:[0]})}}),Hd,jd,dy=ee(()=>{ye(),_e(),be(),ya(),Hd=e=>{let t=e[0].dataType,n=V.size(e[0].dims),r=V.size(e[1].dims),i=r%4===0,a=o=>{let s=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=se("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(h).declareVariables(s,u,l)}

    ${ma(nt(t))}

    ${o.mainStart(Ln)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",ga("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Ln/4)}})}},jd=e=>{e.inputs.length<2||V.size(e.inputs[1].dims)===0?Ec(e):e.compute(Hd(e.inputs))}}),Kd,Yd,Xd,Zd,hy=ee(()=>{ye(),_e(),je(),be(),Kd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Yd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=V.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(V.size(o)/u),h=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...he(e[0].dims,e[1].dims,o)],c=p=>{let f=Y("data",e[0].dataType,e[0].dims.length,u),m=Y("inputIndices",e[1].dataType,e[1].dims.length),y=se("output",e[0].dataType,o.length,u),w=x=>{let M=r.length,S=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let T=0;T<M;T++)S+=`${M>1?`indicesIndices${x}[${T}]`:`indicesIndices${x}`} = ${o.length>1?`outputIndices${x}[uniforms.axis + ${T}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let T=0,I=0;T<i;T++)T===a?(S+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = u32(idx${x});`,I+=M):(S+=`${i>1?`dataIndices${x}[${T}]`:`dataIndices${x}`} = ${o.length>1?`outputIndices${x}[${I}]`:`outputIndices${x}`};`,I++);return S},b;if(e[0].dataType===9){let x=(M,S,T="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${f.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${M}[${S}] = ${T}(${f.getByOffset(`index${S}`)}[component${S}]);
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:c}},Xd=e=>Re({axis:e.axis}),Zd=(e,t)=>{let n=e.inputs;Kd(n),e.compute(Yd(e.inputs,t))}}),Qd,Jd,eh,py=ee(()=>{ye(),_e(),be(),Qd=(e,t,n,r,i,a,o,s,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:u}],h=[a];l.push(...he(t.dims,h));let c=p=>{let f=Y("indices_data",t.dataType,t.dims.length),m=se("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Jd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=V.sizeToDimension(a,a.length-1),u=V.sizeFromDimension(r,t.batchDims+o),l=V.sizeToDimension(r,t.batchDims),h=V.sizeFromDimension(r,t.batchDims),c=s/l,p=new Array(o),f=u;for(let S=0;S<o;++S)p[o-1-S]=f,f*=r[t.batchDims+o-1-S];let m=Qd(e,n[1],p,t.batchDims,r,s,c,h,o),y=t.batchDims+o;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=a.slice(0,-1).concat(r.slice(y)),b=V.size(w),x=[{type:12,data:b},{type:12,data:u},...he(n[0].dims,m.dims,w)],M=S=>{let T=Y("data",n[0].dataType,n[0].dims.length),I=Y("slice_offsets",12,m.dims.length),k=se("output",n[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,I,k)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},eh=e=>({batchDims:e.batch_dims,cacheKey:""})}),th,nh,rh,ih,fy=ee(()=>{ye(),_e(),je(),be(),th=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=V.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===a.dims[u]:s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==a.dims.length||!o.dims.map((s,u)=>s===a.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},nh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=V.normalizeAxis(t.gatherAxis,i),o=V.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let u=V.size(s),l=e[2].dataType,h=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...he(...e.map((f,m)=>f.dims),s)],p=f=>{let m=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),b=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=se("output",l,s.length),M=[m,y,w];b&&M.push(b);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms(S).declareVariables(...M,x)}
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
        let dequantized_data = ${nt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},rh=(e,t)=>{let n=e.inputs;th(n,t),e.compute(nh(e.inputs,t))},ih=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ah,oh,sh,uh,my=ee(()=>{ye(),_e(),je(),be(),ah=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},oh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=V.normalizeAxis(t.axis,i),u=n[s],l=a.slice(0),h=V.size(l),c=Y("input",r,i),p=Y("indicesInput",o,a.length),f=se("output",r,l.length),m=[{type:12,data:h},{type:6,data:u},{type:12,data:s}];return m.push(...he(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},sh=e=>Re({axis:e.axis}),uh=(e,t)=>{let n=e.inputs;ah(n),e.compute(oh(e.inputs,t))}}),lh,ch,dh,hh,gy=ee(()=>{ye(),_e(),be(),lh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ch=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=xu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),h=Math.ceil(i/u),c=!0,p=V.size(s),f=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...he(e[2].dims)),m.push("rank")),f.push(...he(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",S=Y("a",e[0].dataType,e[0].dims),T=Y("b",e[1].dataType,e[1].dims),I=S.type.value,k=null,v=[S,T];e.length===3&&(k=Y("c",e[2].dataType,e[2].dims.length),v.push(k));let A=se("output",e[0].dataType,s.length);v.push(A);let R=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(R).declareVariables(...v)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${I}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=Y("a",e[0].dataType,e[0].dims),M=Y("b",e[1].dataType,e[1].dims),S=null,T=[x,M];e.length===3&&(S=Y("c",e[2].dataType,e[2].dims.length),T.push(S));let I=se("output",e[0].dataType,s.length);T.push(I);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",A="";t.transA&&t.transB?(A=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(A=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(A=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(A=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let R=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(k).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${A}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${R}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*h},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},dh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},hh=(e,t)=>{lh(e.inputs),e.compute(ch(e.inputs,t))}}),Rt,Gt,Tn,En,ph,fh,mh,gh,yh,wh,_h,bh,xh,$h,yy=ee(()=>{ye(),_e(),je(),be(),[Rt,Gt,Tn,En]=[0,1,2,3],ph=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},fh=`
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
`,mh=e=>`
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
`,gh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,yh=e=>`
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
`,wh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Rt}] = batch;
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
`,_h=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Rt}], indices[${Gt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Rt}], indices[${Gt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Rt}], indices[${Gt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Rt}], indices[${Gt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Rt}], indices[${Gt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Rt}], indices[${Gt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,bh=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Rt,Gt,Tn,En]=[0,3,1,2]);let o=se("output",e[0].dataType,a.length),s=n.type.value,u=V.size(a),l=[{type:12,data:u},...he(e[0].dims,r,a)],h=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,o)}
  ${fh}
  ${mh(s)}
  ${gh(t)}
  ${yh(t)}
  ${wh(n,s,t)}

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
      var grid_indices = vec3<u32>(indices[${Rt}], indices[${Tn}], indices[${En}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${_h(o,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=V.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:h}},xh=(e,t)=>{ph(e.inputs),e.compute(bh(e.inputs,t))},$h=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),it,vh,Sh,Ba,Mh,hr,Th,Eh=ee(()=>{ye(),_e(),je(),na(),pa(),be(),nn(),it=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,vh=(e,t)=>{let n=e[0],r=it(e,1),i=it(e,2),a=it(e,3),o=it(e,4),s=it(e,5),u=it(e,6),l=it(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=c,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&V.size(u.dims)&&V.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&V.size(u.dims)||l&&V.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&V.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(a&&V.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(o&&V.size(o.dims)>0){M=8;let k=o.dims;throw k.length===1?k[0]===h?M=1:k[0]===3*h+2&&(M=3):k.length===2&&k[0]===h&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,T=p;if(i&&V.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],S=!0}}let I=!1;if(o&&V.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(s&&V.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==t.numHeads||s.dims[2]!==c||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:w,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:I,passPastInKv:S,qkvFormat:b}},Sh=e=>Re({...e}),Ba=Re({perm:[0,2,1,3]}),Mh=(e,t,n,r,i,a,o)=>{let s=[r,i,a],u=V.size(s),l=[{type:12,data:u},{type:12,data:o},{type:12,data:a}],h=c=>{let p=se("qkv_with_bias",t.dataType,s),f=Y("qkv",t.dataType,s),m=Y("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},hr=(e,t,n,r,i,a,o,s)=>{let u=a;if(o&&V.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Mh(e,a,o,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(dt(u,Ba.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(dt(u,Ba.perm),{inputs:[u],outputs:[-1]})[0]},Th=(e,t)=>{let n=vh(e.inputs,t),r=e.inputs[0],i=it(e.inputs,1),a=it(e.inputs,2),o=it(e.inputs,3),s=it(e.inputs,4),u=it(e.inputs,5),l=it(e.inputs,6),h=it(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,p=hr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(c)return sr(e,p,i,a,s,void 0,l,h,u,n);if(!i||!a)throw new Error("key and value must be provided");let f=hr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=hr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);sr(e,p,f,m,s,void 0,l,h,u,n)}}),Ih,kh,Ch,Ah,Pa,Rh,Oh,zh=ee(()=>{ye(),_e(),je(),be(),Ih=e=>{if(!e||e.length<1)throw new Error("too few inputs")},kh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Ch=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ah=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Pa=(e,t)=>{let n=e[0].dims,r=V.size(n),i=e[0].dataType,a=V.normalizeAxis(t.axis,n.length),o=new Array(t.numOutputs),s=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],h=[],c=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;let y=n.slice();y[a]=t.splitSizes[m],h.push(y),o[m]=se(`output${m}`,i,y.length),l.push({dims:h[m],dataType:e[0].dataType})}p.push({type:12,data:u},...he(n,...h));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...o)}
  ${Ch(u.length)}
  ${Ah(o)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Rh=(e,t)=>{Ih(e.inputs);let n=e.inputs.length===1?t:kh(e.inputs,t);e.compute(Pa(e.inputs,n),{inputs:[0]})},Oh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),Nh,Yr,Bh,Ph=ee(()=>{ye(),_e(),je(),be(),Nh=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!V.areEqual(r.dims,[])&&!V.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!V.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],h=i.dims[0],c=V.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:c/o;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Yr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=V.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,h=e[2].dims[1],c=i===0?h*2:l/r,p=new Array(o,u,l/c,c-h),f=V.computeStrides(p),m=[{type:1,data:a},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,c,u*c,1]}):[],...he(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),M=Y("cos_cache",e[2].dataType,e[2].dims.length),S=Y("sin_cache",e[3].dataType,e[3].dims.length),T=se("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,M,S,T)}

        ${w.mainStart(Ln)}
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
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(p)/Ln)},programUniforms:m})}},Bh=(e,t)=>{Nh(e.inputs,t),e.compute(Yr(e.inputs,t))}}),Dh,Uh,Da,Lh,Fh,wy=ee(()=>{je(),ye(),pa(),Eh(),zh(),nn(),Ph(),be(),Dh=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],h=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);f&&(h=m*t.numHeads);let y=a&&a.dims.length!==0,w=o&&o.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=a.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,M=!1,S=t.kvNumHeads?m*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],M=!0}}let T=e.length>4?e[5]:void 0;if(T){if(T.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let I=T.dims.reduce((k,v)=>k*v,1);if(I!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${I}.`);for(let k=0;k<T.dims.length;k++)if(T.dims[k]!==1&&T.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${T.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:m,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},Uh=Re({perm:[0,2,1,3]}),Da=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(dt(r,Uh.perm),{inputs:[r],outputs:[-1]})[0]),r},Lh=(e,t,n,r)=>{let i=7,a=["type","type"],o=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=h=>{let c=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),f=se("pos_ids",i,o),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},Fh=(e,t)=>{var S;let n=Dh(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[p,f,m]=!i&&!a?e.compute(Pa([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,w;if(t.doRotary){let T=e.compute(Lh(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],I=e.inputs[7],k=e.inputs[8],v=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[p,T,I,k],R=[-1];y=e.compute(Yr(A,v),{inputs:A,outputs:R})[0],A.splice(0,1,f);let X=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(Yr(A,X),{inputs:A,outputs:R})[0]}let b=hr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Da(e,t.doRotary?w:f,n),M=Da(e,m,n);sr(e,b,x,M,void 0,void 0,o,s,void 0,n,u,l)}}),Ua,Gh,Wh,qh,_y=ee(()=>{ye(),_e(),nn(),be(),Ua=(e,t,n,r,i,a,o,s)=>{let u=Ve(a),l=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,c=i*o,p=64;c===1&&(p=256);let f=[i,o,a/u],m=[i,o,2],y=["rank","type","type"],w=[];w.push(...he(f,m));let b=x=>{let M=Y("x",t.dataType,3,u),S=Y("scale",n.dataType,n.dims),T=Y("bias",r.dataType,r.dims),I=se("output",1,3,2),k=[M,S,T,I];return`
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
      let sum_final = ${tn("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${tn("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},Gh=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],u=V.sizeFromDimension(r,a),l=Ve(u),h=V.size(i)/l,c=Ua(e,t[0],t[1],t[2],o,u,s,n.epsilon),p=[o,s,u/l],f=[o,s],m=["type","none"],y=w=>{let b=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,f.length,2),M=se("output",t[0].dataType,p.length,l),S=[b,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...he(p,f,p)]}),getShaderSource:y},{inputs:[t[0],c]})},Wh=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=V.sizeFromDimension(r,1)/o,u=Ve(o),l=V.size(i)/u,h=[{type:12,data:s},{type:12,data:Math.floor(o/u)}],c=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(dt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=Ua(e,m,t[1],t[2],a,s,o,n.epsilon),w=b=>{let x=Ze(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,S=k=>{let v=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${v}))`;case 2:return`vec2<${x}>(${A}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${A}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},T=Y("input",t[0].dataType,t[0].dims,u),I=se("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:w},{inputs:[t[0],y]})},qh=(e,t)=>{t.format==="NHWC"?Wh(e,e.inputs,t):Gh(e,e.inputs,t)}}),Vh,Hh,jh,by=ee(()=>{ye(),_e(),be(),Vh=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Hh=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,u=V.normalizeAxis(t.axis,i.length),l=V.sizeToDimension(i,u),h=V.sizeFromDimension(i,u),c=V.size(a.dims),p=o?V.size(o.dims):0;if(c!==h||o&&p!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let f=[];for(let T=0;T<i.length;++T)T<u?f.push(i[T]):f.push(1);let m=Ve(h),y=["type","type"],w=[{type:12,data:l},{type:1,data:h},{type:12,data:Math.floor(h/m)},{type:1,data:t.epsilon}];o&&y.push("type");let b=n>1,x=n>2,M=T=>{let I=Ze(e[0].dataType),k=[Y("x",e[0].dataType,e[0].dims,m),Y("scale",a.dataType,a.dims,m)];o&&k.push(Y("bias",o.dataType,o.dims,m)),k.push(se("output",e[0].dataType,s,m)),b&&k.push(se("mean_data_output",1,f)),x&&k.push(se("inv_std_output",1,f));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(v).declareVariables(...k)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${oa("f32",m)};
    var mean_square_vector = ${oa("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Fn(I,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${tn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${tn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Fn(I,m,"x[j + offset]")};
      let f32scale = ${Fn(I,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Fn(I,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:s,dataType:e[0].dataType}];return b&&S.push({dims:f,dataType:1}),x&&S.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},jh=(e,t)=>{Vh(e.inputs),e.compute(Hh(e.inputs,t,e.outputCount))}}),Kh,Yh,xy=ee(()=>{_e(),xa(),Ma(),Kh=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Yh=e=>{Kh(e.inputs);let t=Un.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(ba(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=V.size(e.inputs[0].dims.slice(0,-2)),o=V.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let s=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],h=[s,u];e.compute(Vr(h,{activation:""},t,l),{inputs:h})}else e.compute(Vr(e.inputs,{activation:""},t))}}}),Xh,Zh,Qh,Jh,ep,$y=ee(()=>{ye(),_e(),je(),be(),Xh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!V.areEqual(o.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(V.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(V.size(u)!==l)throw new Error("zeroPoints input size error.")}},Zh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=Ve(t.k),p=Ve(l),f=Ve(o),m=s.concat([i,o]),y=i>1&&o/f%2===0?2:1,w=V.size(m)/f/y,b=64,x=[],M=[u,i,a/c],S=V.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),x.push(...he(M)),x.push(...he(S)),x.push(...he(e[2].dims)),e.length===4&&x.push(...he(V.convertShape(e[3].dims)));let T=[u,i,o/f];x.push(...he(T));let I=k=>{let v=M.length,A=Y("a",e[0].dataType,v,c),R=Y("b",12,S.length,p),X=Y("scales",e[2].dataType,e[2].dims.length),P=[A,R,X],q=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;q&&P.push(q);let z=T.length,j=se("output",e[0].dataType,z,f),Z=Ze(e[0].dataType),N=(()=>{switch(c){case 1:return`array<${Z}, 8>`;case 2:return`mat4x2<${Z}>`;case 4:return`mat2x4<${Z}>`;default:throw new Error(`${c}-component is not supported.`)}})(),G=Math.floor(32/t.bits),O=Math.floor(G/8),H=()=>{let W="";for(let U=0;U<O;U++){let re=U*t.bits*4,ue=re+t.bits;W+=`
          // reuse a data (pass ${U})
            var input_offset${U>0?U:""} = ${U===0?A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${U>0?U:""}: ${N};
            for (var j${U>0?U:""}: u32 = 0; j${U>0?U:""} < ${8/c}; j${U>0?U:""}++) {
              a_data${U>0?U:""}[j${U>0?U:""}] = ${A.getByOffset(`input_offset${U>0?U:""}`)};
              input_offset${U>0?U:""}++;
            }
          `;for(let ie=0;ie<f*y;ie++)W+=`
            b_value = ${p===1?`b${ie}_data`:`b${ie}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${U*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${re}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ue}u) & b_mask);`}
            b_quantized_values = ${N}(${Array.from({length:4},(xe,Ge)=>`${Z}(b_value_lower[${Ge}]), ${Z}(b_value_upper[${Ge}])`).join(", ")});
            b_dequantized_values = ${c===1?`${N}(${Array.from({length:8},(xe,Ge)=>`(b_quantized_values[${Ge}] - ${q?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${N}(${Array(8).fill(`${q?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/f)}]${f>1?`[${ie%f}]`:""} += ${Array.from({length:8/c},(xe,Ge)=>`${c===1?`a_data${U>0?U:""}[${Ge}] * b_dequantized_values[${Ge}]`:`dot(a_data${U>0?U:""}[${Ge}], b_dequantized_values[${Ge}])`}`).join(" + ")};
          `}return W},F=()=>{let W=`
            var col_index = col * ${f};
            ${q?`
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
            `;for(let U=0;U<f*y;U++)W+=`
            let scale${U} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${q?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return W},L=()=>{let W=`col_index = col * ${f};`;for(let U=0;U<f*y;U++)W+=`
            let b${U}_data = ${R.getByIndices(`${R.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return W+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${N};
            var b_dequantized_values: ${N};`,W};return`
        var<workgroup> workgroup_shared: array<${j.type.value}, ${y*b}>;
        ${k.declareVariables(...P,j)}
        ${k.mainStart([b,1,1])}
          let output_indices = ${j.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${F()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${L()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${H()}
                word_offset += ${G/c};
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:I}},Qh=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),u=V.size(s),l=e[1].dims[2]/4,h=e[0].dataType,c=Ve(t.k),p=Ve(l),f=s.concat([i,o]),m=128,y=o%8===0?8:o%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,M=x/c,S=x/t.blockSize,T=V.size(f)/y,I=[],k=[u,i,a/c],v=V.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),I.push(...he(k)),I.push(...he(v)),I.push(...he(e[2].dims)),e.length===4&&I.push(...he(V.convertShape(e[3].dims)));let A=[u,i,o];I.push(...he(A));let R=X=>{let P=k.length,q=Y("a",e[0].dataType,P,c),z=Y("b",12,v.length,p),j=Y("scales",e[2].dataType,e[2].dims.length),Z=[q,z,j],N=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;N&&Z.push(N);let G=A.length,O=se("output",e[0].dataType,G),H=Ze(e[0].dataType),F=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${H}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${H}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${H}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${H}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${q.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${O.type.value}, ${w}>, ${y}>;
        ${X.declareVariables(...Z,O)}
        ${X.mainStart([w,y,1])}
          let output_indices = ${O.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${M};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${M}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${q.getByIndices(`${q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${N?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${N.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${H}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${H}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${j.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${z.getByIndices(`${z.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let L=Math.floor(b/8),W="";for(let U=0;U<L;U++){let re=U*t.bits*4,ue=re+t.bits;W+=`
              ${F()}
              {${t.bits===2?`
                let half_word = b_value >> ${U*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${re}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${H}>(${Array.from({length:4},(ie,xe)=>`${H}(b_value_lower[${xe}]), ${H}(b_value_upper[${xe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${H}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ie,xe)=>`${`dot(a_data${xe}, b_dequantized_values[${xe}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return W})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${O.setByIndices(`${O.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:h}],dispatchGroup:{x:T},programUniforms:I}),getShaderSource:R}},Jh=(e,t)=>{Xh(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Qh(e.inputs,t)):e.compute(Zh(e.inputs,t))},ep=e=>Re(e)}),tp,np,rp,ip,ap,op,sp,up,lp,vy=ee(()=>{ye(),_e(),be(),tp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},np=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${le("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${le("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},rp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${le("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${le("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${le("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ip=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${le("uniforms.x_shape",i,t)})) {
                  k = i32(${le("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${le("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ap=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${le("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${le("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${le("uniforms.x_shape",i,t)})) {
                  k -= i32(${le("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${le("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},op=(e,t,n)=>{switch(n.mode){case 0:return np(e,t,n.pads.length);case 1:return rp(e,t,n.pads.length);case 2:return ip(e,t,n.pads.length);case 3:return ap(e,t,n.pads.length);default:throw new Error("Invalid mode")}},sp=(e,t)=>{let n=V.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=V.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&a.push({type:o?e[2].dataType:1,data:t.value}),a.push(...he(e[0].dims,n));let s=["rank"],u=l=>{let h=se("output",e[0].dataType,n.length),c=Y("x",e[0].dataType,r.length),p=c.type.value,f=op(h,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:o?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,h)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(n)/64)},programUniforms:a}),getShaderSource:u}},up=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)a[Number(s[u])]=Number(n[u]),a[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>a[Number(u)]=Number(s));let o=[];return a.forEach(s=>o.push(s)),{mode:t.mode,value:r,pads:o}}else return t},lp=(e,t)=>{tp(e.inputs);let n=up(e.inputs,t);e.compute(sp(e.inputs,n),{inputs:[0]})}}),pr,La,Fa,Ga,Wa,cp,dp,qa,Va,hp,pp,Ha,fp,mp,ja,gp,yp,wp,_p,Sy=ee(()=>{pt(),ye(),_e(),be(),pr=e=>{if(Ue.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},La=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),s=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Dr.adjustPoolAttributes(n,i,o,s,u,l);let h=Dr.computePoolOutputShape(n,i,s,u,o,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:o,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let p=h.slice();return p.push(p.splice(1,1)[0]),[c,r?p:h]},Fa=(e,t)=>{let n=t.format==="NHWC",r=V.size(e),i=V.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],c=!!(l+h);a.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:h}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),a.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,o,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=V.computeStrides(t.kernelShape);a.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,h)=>l+h);return[a,o,!!u,!1,!1]}},Ga=(e,t,n,r,i,a,o,s,u,l,h,c)=>{let p=i.format==="NHWC",f=t.type.value,m=se("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(h?y=`
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
                  offsets[j] = offset / ${le("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${le("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${le("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${le("uniforms.pads","j - 2u",w)};
                  ${b}
              }
              ${o}

              output[global_idx] = value;
            }`}},Wa=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,cp=e=>`${Wa(e)};${e.countIncludePad}`,dp=e=>`${Wa(e)};${e.storageOrder};${e.dilations}`,qa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Va=(e,t,n,r)=>{let[i,a]=La(t,r,n),o=Y("x",t.dataType,t.dims.length),s=o.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,c,p,f,m]=Fa(a,i);h.push(...he(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(a)/64)},programUniforms:h}),getShaderSource:w=>Ga(w,o,t.dims.length,a.length,i,u,l,0,c,p,f,m)}},hp=e=>{let t=e.count_include_pad!==0,n=qa(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:cp(r)}},pp=(e,t)=>{pr(e.inputs),e.compute(Va("AveragePool",e.inputs[0],!1,t))},Ha={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},fp=e=>{let t=e.format;return{format:t,...Ha,cacheKey:t}},mp=(e,t)=>{pr(e.inputs),e.compute(Va("GlobalAveragePool",e.inputs[0],!0,t))},ja=(e,t,n,r)=>{let[i,a]=La(t,r,n),o=`
      value = max(x_val, value);
    `,s="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[h,c,p,f,m]=Fa(a,i);return h.push(...he(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(a)/64)},programUniforms:h}),getShaderSource:y=>Ga(y,u,t.dims.length,a.length,i,o,s,t.dataType===10?-65504:-1e5,c,p,f,m)}},gp=(e,t)=>{pr(e.inputs),e.compute(ja("MaxPool",e.inputs[0],!1,t))},yp=e=>{let t=e.storage_order,n=e.dilations,r=qa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:dp(i)}},wp=e=>{let t=e.format;return{format:t,...Ha,cacheKey:t}},_p=(e,t)=>{pr(e.inputs),e.compute(ja("GlobalMaxPool",e.inputs[0],!0,t))}}),bp,xp,$p,vp,My=ee(()=>{ye(),_e(),je(),be(),bp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},xp=(e,t)=>{let n=V.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=V.size(a),u=r===3||r===2,l=u?[Math.ceil(V.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(V.size(c.dims)/4)]:c.dims:void 0,f=h.length===0||h.length===1&&h[0]===1,m=f===!1&&h.length===1,y=Ve(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,M=Y("input",u?12:r,l.length,x),S=Y("scale",o,h.length),T=c?Y("zero_point",u?12:r,p.length):void 0,I=se("output",o,a.length,b),k=[M,S];T&&k.push(T);let v=[l,h];c&&v.push(p);let A=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...he(...v,a)],R=X=>{let P=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(P).declareVariables(...k,I)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${S.getByOffset("0")}`:m?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?f?u?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:m?u?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:R,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:A})}},$p=(e,t)=>{bp(e.inputs,t),e.compute(xp(e.inputs,t))},vp=e=>Re({axis:e.axis,blockSize:e.blockSize})}),Sp,Mp,Tp,Ty=ee(()=>{pt(),ye(),be(),Sp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Mp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...he(a)],u=l=>{let h=se("output",r,a.length),c=h.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(h)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Tp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ue.webgpu.validateInputContent&&Sp(t,n,r),e.compute(Mp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Ep,Ip,kp,Cp,Ey=ee(()=>{ye(),_e(),je(),be(),Ep=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ip=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(V.sizeToDimension(r,r.length-1)/a),s=r[r.length-1],u=V.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:u},...he(e[1].dims,e[2].dims,i)],h=c=>{let p=Y("indices",e[1].dataType,e[1].dims.length),f=Y("updates",e[2].dataType,e[2].dims.length,a),m=t.reduction!=="none"&&t.reduction!==""?Bu("output",e[0].dataType,i.length):se("output",e[0].dataType,i.length,a);return`
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

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:h}},kp=e=>Re({reduction:e.reduction}),Cp=(e,t)=>{e.compute(Ip(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ap,Rp,Op,Ka,zp,Np,Bp,Pp,Dp,Up,Lp,Fp,Ya,Gp,Wp,qp,Vp,Hp,jp,Kp,Iy=ee(()=>{ye(),_e(),je(),be(),Ap=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Rp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Op=(e,t,n,r,i,a)=>{let[o,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(h=>a.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ap(r,t),t.axes.length>0&&Rp(r,t.axes,l).forEach((h,c)=>r[c]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Ka=(e,t,n,r)=>`
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
            ${Ka("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ka("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Np=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Bp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,o)=>{r[a]=i[o],r[o+n]=i[t.length+o]}),r):i},Pp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,o)=>i[a]=n[o])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,o)=>Math.round(a*t[o]))}return i},Dp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,o)=>i[o]=Math.round(a*t[o]))),i},Up=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${le("uniforms.scales","i",r)};
        var roi_low = ${le("uniforms.roi","i",i)};
        var roi_hi = ${le("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${le("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Lp=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${le("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${le("uniforms.roi","i",a)};
          var roi_hi = ${le("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${le("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",r.length)};
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
    }`,Fp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ya=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Gp=(e,t,n,r,i)=>{let[a,o,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Ya(e,u,a,2)}
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
    }`},Wp=(e,t,n,r,i,a,o,s,u,l)=>{let h=n.length===2,[c,p]=h?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===c?"row":"col";return`
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
    `},qp=(e,t,n,r,i)=>{let[a,o,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ya(e,l,a,3)}
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
    }`},Vp=(e,t,n,r,i,a)=>{let o=e.dims,s=Bp(a,t.axes,o.length),u=Pp(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Dp(o,l,t)));let h=se("output",e.dataType,u.length),c=Y("input",e.dataType,o.length),p=V.size(u),f=o.length===u.length&&o.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=c.type.value,b=x=>`
      ${f?"":`
      ${zp(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Fp(c,o)};
              ${Np(t.nearestMode,n,w)};
              ${Lp(c,h,o,u,l.length,s.length,m)};
              `;case"linear":return`
              ${Up(h,o,u,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Gp(c,h,o,m,y)}`;if(o.length===3||o.length===5)return`${qp(c,h,o,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${Wp(c,h,o,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...he(o,u)]})}},Hp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},jp=(e,t)=>{let n=[],r=[],i=[],a=Hp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Op(e.inputs,t,a,n,r,i),e.compute(Vp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Kp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),Yp,Xp,Zp,ky=ee(()=>{ye(),_e(),be(),Yp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Xp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=V.size(a),s=a,u=o,l=a.slice(-1)[0],h=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=Ve(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=T=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[Y("x",e[0].dataType,e[0].dims,b),Y("skip",e[1].dataType,e[1].dims,b),Y("gamma",e[2].dataType,e[2].dims,b)];c&&k.push(Y("beta",e[3].dataType,e[3].dims,b)),p&&k.push(Y("bias",e[4].dataType,e[4].dims,b)),k.push(se("output",e[0].dataType,s,b)),f&&k.push(se("mean_output",1,h)),m&&k.push(se("inv_std_output",1,h)),y&&k.push(se("input_skip_bias_sum",e[0].dataType,s,b));let v=Ze(e[0].dataType),A=Ze(1,b);return`

      ${T.registerUniforms(I).declareVariables(...k)}
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
          let bias_value = ${p?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Fn(v,b,"value")};
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
        let mean = ${tn("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${tn("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:s,dataType:e[0].dataType}];return n>1&&S.push({dims:h,dataType:1}),n>2&&S.push({dims:h,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((T,I)=>"type")},getShaderSource:M,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Zp=(e,t)=>{Yp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Xp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Qp,fr,Jp,Xa,ef,tf,nf,rf,Cy=ee(()=>{ye(),_e(),je(),be(),Qp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},fr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Jp=(e,t)=>{if(e.length>1){let n=fr(e,1),r=fr(e,2),i=fr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},Xa=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},ef=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${le("uniforms.input_shape","i",n.length)};
            let steps_i = ${le("uniforms.steps","i",n.length)};
            let signs_i = ${le("uniforms.signs","i",n.length)};
            let starts_i = ${le("uniforms.starts","i",n.length)};
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
      }`,tf=(e,t)=>{let n=e[0].dims,r=V.size(n),i=t.axes.length>0?V.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=fr(e,4);a.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((b,x)=>Xa(b,x,n,i,a)),s=t.ends.map((b,x)=>Xa(b,x,n,i,a));if(i.length!==o.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(o.splice(b,0,0),s.splice(b,0,n[b]),a.splice(b,0,1));let u=a.map(b=>Math.sign(b));a.forEach((b,x,M)=>{if(b<0){let S=(s[x]-o[x])/b,T=o[x],I=T+S*a[x];o[x]=I,s[x]=T,M[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-o[b])/a[b])});let h={dims:l,dataType:e[0].dataType},c=se("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),f=V.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:f},{type:12,data:o},{type:6,data:u},{type:12,data:a},...he(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,c)}
        ${ef(p,c,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${o.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},nf=(e,t)=>{Qp(e.inputs,t);let n=Jp(e.inputs,t);e.compute(tf(e.inputs,n),{inputs:[0]})},rf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),af,of,sf,uf,Ay=ee(()=>{ye(),_e(),je(),nn(),be(),af=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},of=(e,t)=>{let n=e.inputs[0],r=n.dims,i=V.size(r),a=r.length,o=V.normalizeAxis(t.axis,a),s=o<r.length-1,u,l=[];s?(l=Array.from({length:a},(k,v)=>v),l[o]=a-1,l[a-1]=o,u=e.compute(dt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,c=h[a-1],p=i/c,f=Ve(c),m=c/f,y=64;p===1&&(y=256);let w=(k,v)=>v===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:v===2?`max(${k}.x, ${k}.y)`:v===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=Y("x",u.dataType,u.dims,f),x=se("result",u.dataType,u.dims,f),M=b.type.value,S=Ze(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,T=k=>`
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
          rowSumShared = ${M}(${tn("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:T},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(dt(I,l),{inputs:[I]})},sf=(e,t)=>{af(e.inputs),of(e,t)},uf=e=>Re({axis:e.axis})}),Za,lf,cf,df,hf,Ry=ee(()=>{ye(),_e(),be(),Za=e=>Array.from(e.getBigInt64Array(),Number),lf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Za(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},cf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},df=(e,t)=>{let n=e[0].dims,r=t??Za(e[1]),i=cf(n,r),a=V.size(i),o=e[0].dataType,s=Y("input",o,n.length),u=se("output",o,i.length),l=h=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...he(e[0].dims,i)]}),getShaderSource:l}},hf=e=>{lf(e.inputs),e.compute(df(e.inputs),{inputs:[0]})}}),pf,ff,mf,Oy=ee(()=>{ye(),_e(),be(),pf=(e,t,n,r,i)=>{let a=se("output_data",i,n.length,4),o=Y("a_data",t[1].dataType,t[1].dims.length,4),s=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,h=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!r)l=a.setByOffset("global_idx",h(o.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
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
      }`},ff=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(V.areEqual(t,n)&&V.areEqual(n,r)),o=t,s=V.size(t);if(a){let l=Un.calcShape(Un.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");o=l,s=V.size(o)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>pf(l,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...he(r,t,n,o)]})}},mf=e=>{e.compute(ff(e.inputs))}}),gf,zy=ee(()=>{K0(),pa(),Y0(),X0(),Z0(),Q0(),J0(),iy(),oy(),sy(),uy(),ly(),cy(),dy(),hy(),py(),fy(),my(),gy(),yy(),wy(),_y(),by(),xy(),$y(),Eh(),vy(),Sy(),My(),Ty(),Ey(),ca(),Iy(),Ph(),ky(),Cy(),Ay(),zh(),Ry(),nn(),ya(),Oy(),gf=new Map([["Abs",[Yl]],["Acos",[Xl]],["Acosh",[Zl]],["Add",[Dc]],["ArgMax",[zl,ha]],["ArgMin",[Ol,ha]],["Asin",[Ql]],["Asinh",[Jl]],["Atan",[ec]],["Atanh",[tc]],["Attention",[Ll]],["AveragePool",[pp,hp]],["BatchNormalization",[ql]],["BiasAdd",[jl]],["BiasSplitGelu",[Nc]],["Cast",[rc,nc]],["Ceil",[oc]],["Clip",[ac]],["Concat",[Qc,Jc]],["Conv",[Ca,Ia]],["ConvTranspose",[Td,vd]],["Cos",[sc]],["Cosh",[uc]],["CumSum",[Id,kd]],["DepthToSpace",[Od,zd]],["DequantizeLinear",[$p,vp]],["Div",[Uc]],["Einsum",[Ld,Fd]],["Elu",[lc,ur]],["Equal",[Lc]],["Erf",[cc]],["Exp",[dc]],["Expand",[Vd]],["FastGelu",[jd]],["Floor",[hc]],["FusedConv",[Ca,Ia]],["Gather",[Zd,Xd]],["GatherElements",[uh,sh]],["GatherBlockQuantized",[rh,ih]],["GatherND",[Jd,eh]],["Gelu",[pc]],["Gemm",[hh,dh]],["GlobalAveragePool",[mp,fp]],["GlobalMaxPool",[_p,wp]],["Greater",[qc]],["GreaterOrEqual",[Hc]],["GridSample",[xh,$h]],["GroupQueryAttention",[Fh]],["HardSigmoid",[xc,bc]],["InstanceNormalization",[qh]],["LayerNormalization",[jh]],["LeakyRelu",[fc,ur]],["Less",[Vc]],["LessOrEqual",[jc]],["Log",[kc]],["MatMul",[Yh]],["MatMulNBits",[Jh,ep]],["MaxPool",[gp,yp]],["Mul",[Fc]],["MultiHeadAttention",[Th,Sh]],["Neg",[gc]],["Not",[mc]],["Pad",[lp]],["Pow",[Gc]],["QuickGelu",[Rc,ur]],["Range",[Tp]],["Reciprocal",[yc]],["ReduceMin",[Il]],["ReduceMean",[vl]],["ReduceMax",[El]],["ReduceSum",[Cl]],["ReduceProd",[kl]],["ReduceL1",[Sl]],["ReduceL2",[Ml]],["ReduceLogSum",[Rl]],["ReduceLogSumExp",[Tl]],["ReduceSumSquare",[Al]],["Relu",[wc]],["Resize",[jp,Kp]],["RotaryEmbedding",[Bh]],["ScatterND",[Cp,kp]],["Sigmoid",[_c]],["Sin",[$c]],["Sinh",[vc]],["Slice",[nf,rf]],["SkipLayerNormalization",[Zp]],["Split",[Rh,Oh]],["Sqrt",[Sc]],["Softmax",[sf,uf]],["Sub",[Wc]],["Tan",[Mc]],["Tanh",[Tc]],["ThresholdedRelu",[Ic,ur]],["Tile",[hf]],["Transpose",[qu,Vu]],["Where",[mf]]])}),yf,Ny=ee(()=>{pt(),Ft(),be(),yf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){At(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}o.setPipeline(e.computePipeline),o.setBindGroup(0,u),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),_t(e.programInfo.name)}dispose(){}build(e,t){At(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Du(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Ie("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return _t(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),wf={};Pn(wf,{WebGpuBackend:()=>$f});var _f,bf,xf,$f,By=ee(()=>{pt(),ye(),Ft(),Su(),H0(),zy(),Ny(),_f=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},bf=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${_f(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},xf=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},$f=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,o=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new xf(o),this.gpuDataManager=zu(this),this.programManager=new yf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ji(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;At(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],o=a.kernelId,s=this.kernels.get(o),u=s.kernelType,l=s.kernelName,h=a.programName,c=a.inputTensorViews,p=a.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(b=>({dims:b.dims,dataType:Lt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Lt(b.dataType)})),kernelId:o,kernelType:u,kernelName:l,programName:h,startTime:y,endTime:w});else{let b="";c.forEach((M,S)=>{b+=`input[${S}]: [${M.dims}] | ${Lt(M.dataType)}, `});let x="";p.forEach((M,S)=>{x+=`output[${S}]: [${M.dims}] | ${Lt(M.dataType)}, `}),console.log(`[profiling] kernel "${o}|${u}|${l}|${h}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Rr("GPU",`${h}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),_t()}run(e,t,n,r,i,a){At(e.name);let o=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let S=this.gpuDataManager.get(M);if(!S)throw new Error(`no GPU data for input: ${M}`);o.push(S)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),h=n.length===0?s.map((x,M)=>M):n;if(h.length!==s.length)throw new Error(`Output size ${h.length} must be equal to ${s.length}.`);let c=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(h[x])||h[x]<-3||h[x]>=a)throw new Error(`Invalid output index: ${h[x]}`);if(h[x]===-3)continue;let M=h[x]===-1,S=h[x]===-2,T=M||S?i(s[x].dataType,s[x].dims):r(h[x],s[x].dataType,s[x].dims);if(c.push(T),T.data===0)continue;let I=this.gpuDataManager.get(T.data);if(!I)throw new Error(`no GPU data for output: ${T.data}`);if(M&&this.temporaryData.push(I),S){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(I)}p.push(I)}if(o.length!==t.length||p.length!==c.length){if(p.length===0)return _t(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let v=typeof k.data=="number"?[k.data]:k.data;if(v.length===0)return;let A=k.type===10?2:4,R,X;k.type===10?(X=v.length>4?16:v.length>2?8:v.length*A,R=v.length>4?16:A*v.length):(X=v.length<=2?v.length*A:16,R=16),x=Math.ceil(x/X)*X,M.push(x);let P=k.type===10?8:4;x+=v.length>4?Math.ceil(v.length/P)*R:v.length*A});let S=16;x=Math.ceil(x/S)*S;let T=new ArrayBuffer(x);l.forEach((k,v)=>{let A=M[v],R=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(T,A,R.length).set(R);else if(k.type===12)new Uint32Array(T,A,R.length).set(R);else if(k.type===10)new Uint16Array(T,A,R.length).set(R);else if(k.type===1)new Float32Array(T,A,R.length).set(R);else throw new Error(`Unsupported uniform type: ${Lt(k.type)}`)});let I=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,T,0,x),this.gpuDataManager.release(I.id),f={offset:0,size:x,buffer:I.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=bf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ie("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],S=M.type,T=typeof M.data=="number"?1:M.data.length,[I,k]=b.uniformVariablesInfo[x];if(S!==I||T!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${I} with size ${k}, got type ${S} with size ${T} in program "${b.programInfo.name}".`)}}if(Ie("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,o,p,m,f),_t(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=gf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ie("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),o(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await aa(this,e,t);return Ki(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ie("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ie("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ie("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),vf={};Pn(vf,{init:()=>Mf});var Xr,Sf,Mf,Py=ee(()=>{ye(),Ft(),_e(),V0(),Xr=class $0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(V.size(t)!==V.size(this.dims))throw new Error("Invalid new shape");return new $0(this.module,this.dataType,this.data,t)}},Sf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let u=0;u<o;u++){let l=Number(e.getValue(r*i++,a)),h=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),p=[];for(let f=0;f<c;f++)p.push(Number(e.getValue(r*i++,a)));s.push(new Xr(e,l,h,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var o;let n=((o=t==null?void 0:t.inputs)==null?void 0:o.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new Xr(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=xn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let h=l>0?this.backend.gpuDataManager.create(l).id:0;return new Xr(this.module,s,h,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let o=0;o<t.length;o++)this.module.setValue(a+r*(o+1),t[o],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Mf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(By(),tr(wf)).WebGpuBackend,o=new a;await o.initialize(n,r),i("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,u,l,h=!1)=>{if(h)Ie("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),o.memcpy(Number(s),Number(u));else{Ie("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));o.upload(Number(u),c)}},async(s,u,l)=>{Ie("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>o.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>o.releaseKernel(s),(s,u,l,h)=>{Ie("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new Sf(t,o,Number(u));return o.computeKernel(Number(s),c,h)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let a=new Cu(n);i("webnn",[a,()=>a.reserveTensorId(),o=>a.releaseTensorId(o),async(o,s,u,l,h)=>a.ensureTensor(o,s,u,l,h),(o,s)=>{a.uploadTensor(o,s)},async(o,s)=>a.downloadTensor(o,s),(o,s)=>a.registerMLContext(o,s),!!n.trace])}}}),Tf,Qa,Ja,rn,Ef,eo,Zr,to,no,ro,io,ao,oo,If=ee(()=>{pt(),G0(),W0(),ye(),wn(),Gi(),fu(),Tf=(e,t)=>{Le()._OrtInit(e,t)!==0&&Oe("Can't initialize onnxruntime.")},Qa=async e=>{Tf(e.wasm.numThreads,Pr(e.logLevel))},Ja=async(e,t)=>{var r,i;(i=(r=Le()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:o}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(Py(),tr(vf)).init;t==="webgpu"&&await a("webgpu",Le(),e,n),t==="webnn"&&await a("webnn",Le(),e)}},rn=new Map,Ef=e=>{let t=Le(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Oe("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},eo=(e,t)=>{let n=Le(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,o=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,o,o+a)!==0&&Oe("Can't get session input/output metadata.");let s=Number(n.getValue(o,"*"));i=Number(n.getValue(o+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],h=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*a,"*"));h.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*a,"*")))}return[s,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Zr=e=>{let t=Le(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},to=async(e,t)=>{var c,p,f,m;let n,r,i=Le();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Zr(e);let a=0,o=0,s=0,u=[],l=[],h=[];try{if([o,u]=await pu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let A of t.externalData){let R=typeof A=="string"?A:A.path;v.push(Hi(typeof A=="string"?A:A.data).then(X=>{i.mountExternalData(R,X)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let A=v,R=A==null?void 0:A.context,X=A==null?void 0:A.gpuDevice,P=A==null?void 0:A.deviceType,q=A==null?void 0:A.powerPreference;R?i.currentContext=R:X?i.currentContext=await i.webnnCreateMLContext(X):i.currentContext=await i.webnnCreateMLContext({deviceType:P,powerPreference:q})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Oe("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=Ef(a),b=!!(t!=null&&t.enableGraphCapture),x=[],M=[],S=[],T=[],I=[];for(let v=0;v<y;v++){let[A,R,X]=eo(a,v);A===0&&Oe("Can't get an input name."),l.push(A);let P=i.UTF8ToString(A);x.push(P),S.push(R===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:Lt(R),shape:X})}for(let v=0;v<w;v++){let[A,R,X]=eo(a,v+y);A===0&&Oe("Can't get an output name."),h.push(A);let P=i.UTF8ToString(A);M.push(P),T.push(R===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:Lt(R),shape:X});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){I.push("gpu-buffer");continue}let q=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[P])??"cpu",z=i.webnnIsGraphOutput;if(q==="cpu"&&z&&z(a,P)){I.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(b&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(q)}}let k=null;return I.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(a),s===0&&Oe("Can't create IO binding."),k={handle:s,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Vi(v))}),rn.set(a,[a,l,h,k,b,!1]),[a,x,M,S,T]}catch(y){throw l.forEach(w=>i._OrtFree(w)),h.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Oe("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Oe("Can't release session."),y}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Oe("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},no=e=>{var u,l,h;let t=Le(),n=rn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Oe("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&Oe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Oe("Can't release session."),rn.delete(e)},ro=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Le(),u=s.PTR_SIZE,l=e[0],h=e[1],c=e[3],p=c,f,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;m=xn(bn(l),h);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,a,b,m)}}else if(c==="ml-tensor"){let b=e[2].mlTensor;m=xn(bn(l),h);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,bn(l),h)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,bt(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let S=s.UTF8ToString(i);if(x(r,S)||M(r,S)){let T=bn(l);m=xn(T,h),p="ml-tensor";let I=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!I||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await I(r,T,h);k(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=v}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*h.length);try{h.forEach((x,M)=>s.setValue(w+M*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(bn(l),f,m,w,h.length,Vi(p));b===0&&Oe(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(b)}finally{s.stackRestore(y)}},io=async(e,t,n,r,i,a)=>{var P,q,z,j;let o=Le(),s=o.PTR_SIZE,u=rn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],h=u[1],c=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],M=[],S=[],T=[],I=[],k=o.stackSave(),v=o.stackAlloc(y*s),A=o.stackAlloc(y*s),R=o.stackAlloc(w*s),X=o.stackAlloc(w*s);try{[b,x]=uu(a),gn("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)await ro(n[O],M,T,e,h[t[O]],t[O],f);for(let O=0;O<w;O++)await ro(i[O],S,T,e,c[r[O]],y+r[O],f);yn("wasm prepareInputOutputTensor");for(let O=0;O<y;O++)o.setValue(v+O*s,M[O],"*"),o.setValue(A+O*s,h[t[O]],"*");for(let O=0;O<w;O++)o.setValue(R+O*s,S[O],"*"),o.setValue(X+O*s,c[r[O]],"*");if(p&&!m){let{handle:O,outputPreferredLocations:H,outputPreferredLocationsEncoded:F}=p;if(h.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${h.length}).`);gn("wasm bindInputsOutputs");for(let L=0;L<y;L++){let W=t[L];await o._OrtBindInput(O,h[W],M[L])!==0&&Oe(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<w;L++){let W=r[L];(P=i[L])!=null&&P[3]?(I.push(S[L]),o._OrtBindOutput(O,c[W],S[L],0)!==0&&Oe(`Can't bind pre-allocated output[${L}] for session=${e}.`)):o._OrtBindOutput(O,c[W],0,F[W])!==0&&Oe(`Can't bind output[${L}] to ${H[L]} for session=${e}.`)}yn("wasm bindInputsOutputs"),rn.set(e,[l,h,c,p,f,!0])}(q=o.jsepOnRunStart)==null||q.call(o,l),(z=o.webnnOnRunStart)==null||z.call(o,l);let Z;p?Z=await o._OrtRunWithBinding(l,p.handle,w,R,b):Z=await o._OrtRun(l,A,v,y,X,w,R,b),Z!==0&&Oe("failed to call OrtRun().");let N=[],G=[];gn("wasm ProcessOutputTensor");for(let O=0;O<w;O++){let H=Number(o.getValue(R+O*s,"*"));if(H===S[O]||I.includes(S[O])){N.push(i[O]),H!==S[O]&&o._OrtReleaseTensor(H)!==0&&Oe("Can't release tensor.");continue}let F=o.stackSave(),L=o.stackAlloc(4*s),W=!1,U,re=0;try{o._OrtGetTensorData(H,L,L+s,L+2*s,L+3*s)!==0&&Oe(`Can't access output tensor data on index ${O}.`);let ue=s===4?"i32":"i64",ie=Number(o.getValue(L,ue));re=o.getValue(L+s,"*");let xe=o.getValue(L+s*2,"*"),Ge=Number(o.getValue(L+s*3,ue)),ze=[];for(let Se=0;Se<Ge;Se++)ze.push(Number(o.getValue(xe+Se*s,ue)));o._OrtFree(xe)!==0&&Oe("Can't free memory for tensor dims.");let Ke=ze.reduce((Se,we)=>Se*we,1);U=Lt(ie);let rt=p==null?void 0:p.outputPreferredLocations[r[O]];if(U==="string"){if(rt==="gpu-buffer"||rt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Se=[];for(let we=0;we<Ke;we++){let Ye=o.getValue(re+we*s,"*"),Xe=o.getValue(re+(we+1)*s,"*"),jt=we===Ke-1?void 0:Xe-Ye;Se.push(o.UTF8ToString(Ye,jt))}N.push([U,ze,Se,"cpu"])}else if(rt==="gpu-buffer"&&Ke>0){let Se=o.jsepGetBuffer;if(!Se)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let we=Se(re),Ye=xn(ie,Ke);if(Ye===void 0||!Wi(U))throw new Error(`Unsupported data type: ${U}`);W=!0,N.push([U,ze,{gpuBuffer:we,download:o.jsepCreateDownloader(we,Ye,U),dispose:()=>{o._OrtReleaseTensor(H)!==0&&Oe("Can't release tensor.")}},"gpu-buffer"])}else if(rt==="ml-tensor"&&Ke>0){let Se=o.webnnEnsureTensor,we=o.webnnIsGraphInputOutputTypeSupported;if(!Se||!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(xn(ie,Ke)===void 0||!qi(U))throw new Error(`Unsupported data type: ${U}`);if(!we(e,U,!1))throw new Error(`preferredLocation "ml-tensor" for ${U} output is not supported by current WebNN Context.`);let Ye=await Se(e,re,ie,ze,!1);W=!0,N.push([U,ze,{mlTensor:Ye,download:o.webnnCreateMLTensorDownloader(re,U),dispose:()=>{o.webnnReleaseTensorId(re),o._OrtReleaseTensor(H)}},"ml-tensor"])}else if(rt==="ml-tensor-cpu-output"&&Ke>0){let Se=o.webnnCreateMLTensorDownloader(re,U)(),we=N.length;W=!0,G.push((async()=>{let Ye=[we,await Se];return o.webnnReleaseTensorId(re),o._OrtReleaseTensor(H),Ye})()),N.push([U,ze,[],"cpu"])}else{let Se=Br(U),we=new Se(Ke);new Uint8Array(we.buffer,we.byteOffset,we.byteLength).set(o.HEAPU8.subarray(re,re+we.byteLength)),N.push([U,ze,we,"cpu"])}}finally{o.stackRestore(F),U==="string"&&re&&o._free(re),W||o._OrtReleaseTensor(H)}}p&&!f&&(o._OrtClearBoundOutputs(p.handle)!==0&&Oe("Can't clear bound outputs."),rn.set(e,[l,h,c,p,f,!1]));for(let[O,H]of await Promise.all(G))N[O][2]=H;return yn("wasm ProcessOutputTensor"),N}finally{(j=o.webnnOnRunEnd)==null||j.call(o,l),o.stackRestore(k),M.forEach(Z=>o._OrtReleaseTensor(Z)),S.forEach(Z=>o._OrtReleaseTensor(Z)),T.forEach(Z=>o._free(Z)),b!==0&&o._OrtReleaseRunOptions(b),x.forEach(Z=>o._free(Z))}},ao=e=>{let t=Le(),n=rn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Oe("Can't get an profile file name."),t._OrtFree(i)},oo=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),an,st,Gn,mr,gr,Qr,so,Jr,In,kn,kf,Cf,Af,Rf,Of,zf,Nf,Bf,Pf=ee(()=>{pt(),If(),wn(),Di(),an=()=>!!Ue.wasm.proxy&&typeof document<"u",Gn=!1,mr=!1,gr=!1,Jr=new Map,In=(e,t)=>{let n=Jr.get(e);n?n.push(t):Jr.set(e,[t])},kn=()=>{if(Gn||!mr||gr||!st)throw new Error("worker not ready")},kf=e=>{switch(e.data.type){case"init-wasm":Gn=!1,e.data.err?(gr=!0,so[1](e.data.err)):(mr=!0,so[0]()),Qr&&(URL.revokeObjectURL(Qr),Qr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Jr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Cf=async()=>{if(!mr){if(Gn)throw new Error("multiple calls to 'initWasm()' detected.");if(gr)throw new Error("previous call to 'initWasm()' failed.");if(Gn=!0,an())return new Promise((e,t)=>{st==null||st.terminate(),ru().then(([n,r])=>{try{st=r,st.onerror=a=>t(a),st.onmessage=kf,so=[e,t];let i={type:"init-wasm",in:Ue};!i.in.wasm.wasmPaths&&(n||zi)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),st.postMessage(i),Qr=n}catch(i){t(i)}},t)});try{await Fi(Ue.wasm),await Qa(Ue),mr=!0}catch(e){throw gr=!0,e}finally{Gn=!1}}},Af=async e=>{if(an())return kn(),new Promise((t,n)=>{In("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ue}};st.postMessage(r)});await Ja(Ue,e)},Rf=async e=>an()?(kn(),new Promise((t,n)=>{In("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};st.postMessage(r,[e.buffer])})):Zr(e),Of=async(e,t)=>{if(an()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return kn(),new Promise((n,r)=>{In("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),st.postMessage(i,a)})}else return to(e,t)},zf=async e=>{if(an())return kn(),new Promise((t,n)=>{In("release",[t,n]);let r={type:"release",in:e};st.postMessage(r)});no(e)},Nf=async(e,t,n,r,i,a)=>{if(an()){if(n.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return kn(),new Promise((o,s)=>{In("run",[o,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};st.postMessage(l,oo(u))})}else return io(e,t,n,r,i,a)},Bf=async e=>{if(an())return kn(),new Promise((t,n)=>{In("end-profiling",[t,n]);let r={type:"end-profiling",in:e};st.postMessage(r)});ao(e)}}),uo,Df,Uf,Dy=ee(()=>{pt(),Pf(),ye(),Ci(),fu(),uo=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Df=e=>{switch(e[3]){case"cpu":return new qe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Wi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return qe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!qi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return qe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Uf=class{async fetchModelAndCopyToWasmMemory(e){return Rf(await Hi(e))}async loadModel(e,t){At();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Of(n,t),_t()}async dispose(){return zf(this.sessionId)}async run(e,t,n){At();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],f=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let a=[],o=[];Object.entries(t).forEach(c=>{let p=c[0],f=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);a.push(f),o.push(m)});let s=r.map((c,p)=>uo(c,()=>`input "${this.inputNames[i[p]]}"`)),u=a.map((c,p)=>c?uo(c,()=>`output "${this.outputNames[o[p]]}"`):null),l=await Nf(this.sessionId,i,s,o,u,n),h={};for(let c=0;c<l.length;c++)h[this.outputNames[o[c]]]=a[c]??Df(l[c]);return _t(),h}startProfiling(){}endProfiling(){Bf(this.sessionId)}}}),Lf={};Pn(Lf,{OnnxruntimeWebAssemblyBackend:()=>co,initializeFlags:()=>lo,wasmBackend:()=>Ff});var lo,co,Ff,Uy=ee(()=>{pt(),Pf(),Dy(),lo=()=>{(typeof Ue.wasm.initTimeout!="number"||Ue.wasm.initTimeout<0)&&(Ue.wasm.initTimeout=0);let e=Ue.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ue.wasm.simd=!1),typeof Ue.wasm.proxy!="boolean"&&(Ue.wasm.proxy=!1),typeof Ue.wasm.trace!="boolean"&&(Ue.wasm.trace=!1),typeof Ue.wasm.numThreads!="number"||!Number.isInteger(Ue.wasm.numThreads)||Ue.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ue.wasm.numThreads=1;else{let t=typeof navigator>"u"?S0("node:os").cpus().length:navigator.hardwareConcurrency;Ue.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},co=class{async init(e){lo(),await Cf(),await Af(e)}async createInferenceSessionHandler(e,t){let n=new Uf;return await n.loadModel(e,t),n}},Ff=new co});pt(),pt(),pt();var Ly="1.27.0";{let e=(Uy(),tr(Lf)).wasmBackend;Dn("webgpu",e,5),Dn("webnn",e,5),Dn("cpu",e,10),Dn("wasm",e,10)}Object.defineProperty(Ue.versions,"web",{value:Ly,enumerable:!0});/**
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
 */function at(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Wn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Gf(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((o,s)=>o-s),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const Fy=114;function Gy(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),a=Math.round(e*i),o=Math.round(t*i);return{scale:i,padX:Math.floor((n-a)/2),padY:Math.floor((n-o)/2),resizedWidth:a,resizedHeight:o}}function ho(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=(h+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),S=(p*r+b)*a,T=(p*r+x)*a,I=(f*r+b)*a,k=(f*r+x)*a,v=(h*t+y)*3;for(let A=0;A<3;A++){const R=o[S+A]*(1-M)+o[T+A]*M,X=o[I+A]*(1-M)+o[k+A]*M;s[v+A]=Math.min(255,Math.max(0,Math.round(R*(1-m)+X*m)))}}}return s}function qn(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let h=0;h<n;h++){const c=h*l,p=Math.min((h+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,M=0;for(let T=Math.floor(c);T<p;T++){const I=Math.min(T+1,p)-Math.max(T,c);if(!(I<=0))for(let k=Math.floor(m);k<y;k++){const v=Math.min(k+1,y)-Math.max(k,m);if(v<=0)continue;const A=v*I,R=(T*r+k)*a;w+=o[R]*A,b+=o[R+1]*A,x+=o[R+2]*A,M+=A}}const S=(h*t+f)*3;s[S]=Math.min(255,Math.max(0,at(w/M))),s[S+1]=Math.min(255,Math.max(0,at(b/M))),s[S+2]=Math.min(255,Math.max(0,at(x/M)))}}return s}function Wf(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function po(e,t,n){const{width:r,height:i,channels:a,data:o}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,h=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=Wf(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),M=Wf(b-x),S=(p*t+w)*3;for(let T=0;T<3;T++){let I=0;for(let k=0;k<4;k++){const v=c(m-1+k)*r;let A=0;for(let R=0;R<4;R++)A+=M[R]*o[(v+h(x-1+R))*a+T];I+=y[k]*A}s[S+T]=Math.min(255,Math.max(0,Math.round(I)))}}}return s}function fo(e,t,n=1){const r=Gy(e.width,e.height,t,n),i=ho(e,r.resizedWidth,r.resizedHeight),a=t*t,o=new Float32Array(3*a).fill(Fy/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let h=0;h<r.resizedWidth;h++){const c=(l+h)*3,p=u+h;o[p]=i[c]/255,o[a+p]=i[c+1]/255,o[2*a+p]=i[c+2]/255}}return{tensor:o,params:r}}function mo(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let o=0;o<a;o++){const s=e[o*6],u=e[o*6+1],l=e[o*6+2],h=e[o*6+3],c=e[o*6+4],p=e[o*6+5];if(c<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(h-t.padY)/t.scale;i.push({classIndex:f,confidence:c,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const yr=.8,qf=.65,Wy=110,qy=1280;function Vy(e,t,n){if(n==null)return yr;if(n.length===0)return qf;const r=Math.max(e,t);if(!(r>0))return yr;const i=qy/r,a=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(a.length===0)return yr;const o=a.length;return(o%2===1?a[(o-1)/2]:(a[o/2-1]+a[o/2])/2)>=Wy?qf:yr}const Vf=.25,Hf=.6;function Hy(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),a=Math.trunc(Number(n[2])),o=Math.trunc(Number(n[3]));if(![r,i,a,o].every(b=>Number.isFinite(b)))return null;const s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Vf:Hf)),h=Math.trunc(u*(s>=u?Hf:Vf)),c=Math.max(0,r-l),p=Math.max(0,i-h),f=Math.min(Math.trunc(e),a+l),m=Math.min(Math.trunc(t),o+h),y=f-c,w=m-p;return y<=0||w<=0?null:{x:c,y:p,width:y,height:w}}const jy=3,Ky=.15,Yy=.6;function go(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Xy(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Zy(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],a=[Number(e[1][0]),Number(e[1][1])];if(![...i,...a].every(S=>Number.isFinite(S)))return null;const o=go(i,a);if(!(o>0))return null;const s=[];for(const S of t??[]){const T=Math.trunc(Number(S.n));if(!Number.isFinite(T)||T<jy)continue;const I=Xy(S.poly);I!==null&&s.push({owner:S.owner,c:I,n:T,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((S,T)=>T.n-S.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Yy);for(const S of u)S.d0=go(S.c,i),S.d1=go(S.c,a),S.ecart=Math.abs(S.d0-S.d1);const h=[...u].sort((S,T)=>T.ecart-S.ecart),c=h[0],p=h[1],f=c.d0<c.d1?0:1,m=r>0?1:0,y=f===m?c:p,w=f===m?p:c,b=f===1?c.owner:p.owner,x=f===1?p.owner:c.owner,M=c.ecart/o<Ky;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function Qy(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const Jy=.6;function jf(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const s=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,h=(e[a*6+3]-t.padY)/t.scale,c=at((s+l)/2),p=at((u+h)/2),f=at((l-s+(h-u))/4);f>=1&&r.push({cx:c,cy:p,r:f})}return r}function ew(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Jy*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function tw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Wn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Kf(e,t,n){const r=jf(e,t,n);return r.length===0?[]:tw(ew(r))}function nw(e,t,n){return jf(e,t,n)}function wr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const rw=.5,iw=.7,aw=.55;function yo(e){const t=e.map(([n,r,i,a])=>Math.min(i-n,a-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function Yf(e){if(e.length===0)return[];const t=(rw*yo(e))**2,n=[];for(const i of e){const a=(i[0]+i[2])/2,o=(i[1]+i[3])/2,s=n.find(u=>(u.cx-a)**2+(u.cy-o)**2<=t);if(s===void 0)n.push({cx:a,cy:o,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+a)/u,s.cy=(s.cy*(u-1)+o)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Wn(i.map(a=>a[0]))),Math.trunc(Wn(i.map(a=>a[1]))),Math.trunc(Wn(i.map(a=>a[2]))),Math.trunc(Wn(i.map(a=>a[3])))]);if(r.length>=2){const i=yo(r),a=r.map(()=>!0);for(let o=0;o<r.length;o++)if(a[o])for(let s=o+1;s<r.length;s++){if(!a[s])continue;const u=r[o],l=r[s],h=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),c=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=h*c,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=iw*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(a[y<=w?s:o]=!1,!a[o])break}}r=r.filter((o,s)=>a[s])}if(r.length>=3){const i=yo(r);r=r.filter(([a,o,s,u])=>Math.min(s-a,u-o)>=aw*i)}return r}const Xf=["brown","grey","blue","green","yellow","red","purple"],ow={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},sw=.7;function Zf(e){const t=e.map((i,a)=>a).sort((i,a)=>e[a].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const a=e[i],[o,s,u,l]=a.box;let h=!1;for(const c of r){const p=e[c];if(p.family!==a.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(o+u,f+y)-Math.max(o,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),M=Math.max(1,Math.min(u*l,y*w));if(b*x>=sw*M){h=!0;break}}h?n.add(i):r.push(i)}return e.filter((i,a)=>!n.has(a))}function ei(e,t,n){const r=mo(e,t,n,Xf.length).map(i=>{const a=Xf[i.classIndex];return{color:a,family:ow[a],box:i.box,confidence:i.confidence}});return Zf(r)}const uw=8,lw=.8,Qf=1.25;function cw(e){if(e.length<uw)return[];const t=[],n=[];for(const o of e){const[,,s,u]=o.box;s>u*Qf?t.push(o):u>s*Qf&&n.push(o)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<lw*e.length||i.length===0?[]:i.map(o=>({family:o.family,color:o.color,box:[...o.box],reason:`${o.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const dw=2.25,Jf=8;function hw(e){if(e.length<Jf)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=dw*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,p)=>p),o=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const f=t[c][0]-t[p][0],m=t[c][1]-t[p][1];f*f+m*m<=i&&(a[o(c)]=o(p))}const s=new Map;for(let c=0;c<e.length;c++){const p=o(c);s.set(p,[...s.get(p)??[],c])}let u=[];for(const c of s.values())c.length>u.length&&(u=c);if(u.length<Jf||u.length===e.length)return[];const l=new Set(u),h=e.map((c,p)=>p).filter(c=>!l.has(c));return h.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${h.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const ut={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Tt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,o=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s:o,v:r};let s;return r===e?s=60*(t-n)/a:r===t?s=120+60*(n-e)/a:s=240+60*(e-t)/a,s<0&&(s+=360),{h:Math.round(s/2),s:o,v:r}}const pw=.42,fw=22,mw=43,gw=120,yw=1.5,ww=.72,_w=110,em=3;function _r(e,t,n){const{width:r,height:i,channels:a,data:o}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*pw);if(l<1)return 0;let h=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-s)**2+(c-u)**2>l*l)continue;const f=(c*r+p)*a,m=o[f],y=o[f+1],w=o[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),h+=1)}return h}function bw(e){let t=0,n=0,r=0,i=_r(e,!1,(a,o,s)=>{const u=Tt(a,o,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=_r(e,!0,(a,o,s)=>{const u=Tt(a,o,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function xw(e){let t=0,n=0,r=_r(e,!1,(a,o)=>{t+=a,n+=o});if(r===0&&(r=_r(e,!0,(a,o)=>{t+=a,n+=o})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function $w(e){let t=0;const n=_r(e,!0,(r,i,a)=>{t+=Tt(r,i,a).s});return n===0?null:t/n}function vw(e){const t=bw(e);if(t===null||t.s<=fw)return 1;if(t.s>=gw){const n=xw(e);return n!==null&&n>=yw?6:3}return t.s>=mw?3:6}function Sw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(o=>[1,3,6].includes(o)))return n;const r=e.map(o=>o.r).sort((o,s)=>o-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((o,s)=>e[o].r-e[s].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(o=>a.get(o))}function Mw(e,t){const n=[...t];if(e.length<em||t.length!==e.length)return n;const r=e.map(o=>$w(o)),i=r.filter(o=>o!==null);if(i.length<em)return n;const a=Wn(i);return a<=0||r.forEach((o,s)=>{o!==null&&n[s]!==1&&o<ww*a&&o<_w&&(n[s]=1)}),n}function tm(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),o=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+a-n)**2+(p+o-r)**2<=i*i){const w=((p+o)*e.width+(f+a))*e.channels;c[m]=e.data[w],c[m+1]=e.data[w+1],c[m+2]=e.data[w+2]}else c[m]=255,c[m+1]=255,c[m+2]=255}return{width:l,height:h,channels:3,data:c}}function Tw(e,t){const n=t.map(a=>tm(e,a)),r=n.map(a=>vw(a)),i=Sw(t,r);return Mw(n,i)}function Ew(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let o=0,s=0;o<a.length;o++,s+=r)a[o]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:a}}function nm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let o=0;o<n;o++){const s=o*a,u=Math.min((o+1)*a,e.height);for(let l=0;l<t;l++){const h=l*i,c=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(h);w<c;w++){const b=Math.min(w+1,c)-Math.max(w,h);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[o*t+l]=Math.min(255,Math.max(0,at(p/f)))}}return{width:t,height:n,data:r}}function Iw(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),o=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],o[u]=Math.min(255,Math.max(0,at(s*a)));for(let u=0;u<n;u++)i[u]=o[e.data[u]];return{width:e.width,height:e.height,data:i}}function kw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(!(h<0||h>=t||c<0||c>=n)&&r[c*t+h]===0){s=!1;break}}i[a*t+o]=s&&r[a*t+o]>0?255:0}return{width:t,height:n,data:i}}function Cw(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const h=o+l,c=a+u;if(h>=0&&h<t&&c>=0&&c<n&&r[c*t+h]>0){s=!0;break}}i[a*t+o]=s?255:0}return{width:t,height:n,data:i}}function wo(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],o=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,h=0;o[h++]=u,i[u]=s;let c=0,p=0,f=0;for(;l<h;){const m=o[l++],y=m%t,w=m/t|0;c+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const M=y+x,S=w+b;if(M<0||M>=t||S<0||S>=n)continue;const T=S*t+M;r[T]>0&&i[T]===0&&(i[T]=s,o[h++]=T)}}a[s]={area:c,centroidX:p/c,centroidY:f/c},s+=1}return{labels:i,stats:a}}function Aw(e,t,n){return rm(Float32Array.from(e.data),e.width,t,n)}function rm(e,t,n,r){const i=new Float32Array(t*t),a=t/2,o=-n*Math.PI/180,s=Math.cos(o),u=Math.sin(o);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const c=h-a,p=l-a,f=s*c-u*p+a,m=u*c+s*p+a,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,M=(I,k)=>I>=0&&I<t&&k>=0&&k<t?e[k*t+I]:r,S=M(y,w)*(1-b)+M(y+1,w)*b,T=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+h]=S*(1-x)+T*x}return i}const Rw=.9,Ow=.34,zw=[.55,.6,.66,.72],Nw=22,Bw=88,Pw=35,Vn=28,_o=4,Dw=Array.from({length:15},(e,t)=>-21+t*3),im=[-2,0,2],Uw=3,Lw=.3;function Fw(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Gw(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(a+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const o=n-t+1,s=i-r+1,u=Math.max(s,o),l=new Uint8Array(u*u),h=Math.floor((u-o)/2),c=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<o;w++)l[(y+c)*u+(w+h)]=e.data[(y+r)*e.width+(w+t)];const p=Vn-2*_o,f=nm({width:u,height:u,data:l},p,p),m=new Float32Array(Vn*Vn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+_o)*Vn+(w+_o)]=f.data[y*p+w]>110?1:0;return m}function Ww(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Ow);if(u<4)return null;const l=o-u,h=s-u,c=2*u,p=2*u;if(c<6||p<6)return null;const f=new Int16Array(c*p),m=new Int16Array(c*p),y=new Int16Array(c*p),w=new Uint8Array(c*p),b=[],x=Math.min(c,p)/2;for(let O=0;O<c;O++)for(let H=0;H<p;H++){const F=((O+l)*n+(H+h))*i,{h:L,s:W,v:U}=Tt(a[F],a[F+1],a[F+2]),re=O*p+H;f[re]=L,m[re]=W,y[re]=U,Math.sqrt((H-p/2)**2+(O-c/2)**2)/x<=t&&(w[re]=1,b.push(U))}if(b.length<16)return null;const M=Gf(b,55);let S=0,T=0,I=0;const k=O=>f[O]>=Nw&&f[O]<=Bw&&m[O]>=Pw,v=O=>y[O]>=M&&m[O]<=95&&!k(O)&&w[O]===1;for(let O=0;O<c*p;O++)w[O]===1&&(I+=1,y[O]>=130&&!k(O)&&(S+=1),v(O)&&(T+=1));const A=S>.5*I&&T<.15*I,R=new Uint8Array(c*p);if(A){const O=Gf(b,45);for(let H=0;H<c*p;H++)R[H]=w[H]===1&&y[H]<=O?255:0}else for(let O=0;O<c*p;O++)R[O]=v(O)?255:0;const X={width:p,height:c,data:R},P=kw(X);let q=wo(P),z=q;if(q.stats.length<=1&&(q=wo(X),z=q,q.stats.length<=1))return null;const j=Math.min(c,p)/2;let Z=0,N=-1;for(let O=1;O<z.stats.length;O++){const H=z.stats[O];if(H===void 0)continue;const F=Math.hypot(H.centroidX-p/2,H.centroidY-c/2)/j,L=H.area*(1-.6*Math.min(F,1));L>N&&(N=L,Z=O)}if(Z===0)return null;const G=new Uint8Array(c*p);for(let O=0;O<c*p;O++)G[O]=z.labels[O]===Z?255:0;return Gw(Cw({width:p,height:c,data:G}))}function qw(e,t,n,r,i,a){const o=Vn;let s=0,u=0;for(let l=0;l<o;l++){const h=l-a;if(!(h<0||h>=o))for(let c=0;c<o;c++){const p=c-i;if(p<0||p>=o)continue;const f=e[h*o+p];f!==0&&(u+=f,s+=f*n[l*o+c])}}return s/(u+r-s+1e-6)}function Vw(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Dw){const a=i===0?e:rm(e,Vn,i,0),o=a.reduce((s,u)=>s+u,0);for(const s of im)for(const u of im){const l=qw(a,o,t,n,s,u);l>r&&(r=l)}}return r}function Hw(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const o of zw){const s=Ww(e,o);if(s!==null)for(const{label:u,bits:l}of t)n.push([Vw(s,l),u])}if(n.length===0)return[null,0];if(n.sort((o,s)=>s[0]-o[0]),n[0][0]<Lw)return[null,0];const r=new Map;for(const[o,s]of n.slice(0,Uw))r.set(s,(r.get(s)??0)+o);let i=0,a=-1;for(const[o,s]of r)s>a&&(a=s,i=o);return[i,n[0][0]]}const jw=2560,Kw=.3,Yw=.5,Xw=1.6,Zw=3,Qw=5;function Jw(e){const t=Math.min(1,jw/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),o=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,h+1),p=Math.max(0,Math.min(1,l-h));for(let f=0;f<n;f++){const m=(f+.5)*o-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,S=(h*e.width+y)*e.channels+M,T=(h*e.width+w)*e.channels+M,I=(c*e.width+y)*e.channels+M,k=(c*e.width+w)*e.channels+M,v=e.data[S]*(1-b)+e.data[T]*b,A=e.data[I]*(1-b)+e.data[k]*b,R=v*(1-p)+A*p;a[x*i+u*n+f]=(R/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function e_(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let o=0;o<t;o++){const s=i*t+o;let u=e[s];if(o+1<t&&e[s+1]>u&&(u=e[s+1]),!a){const l=s+t;e[l]>u&&(u=e[l]),o+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function t_(e){if(e.length<3)return e;const t=[...e].sort((a,o)=>a[0]-o[0]||a[1]-o[1]),n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const o=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return r.pop(),i.pop(),r.concat(i)}function n_(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[o,s]=e[(r+1)%e.length],u=o-i,l=s-a,h=Math.hypot(u,l);if(h===0)continue;const c=u/h,p=l/h;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[S,T]of e){const I=S*c+T*p,k=-S*p+T*c;I<f&&(f=I),I>m&&(m=I),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,M=b*x;if(M<n){n=M;const S=(f+m)/2,T=(y+w)/2;t={cx:S*c-T*p,cy:S*p+T*c,w:b,h:x,angle:Math.atan2(p,c)}}}return t}function r_(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),o=r.w/2,s=r.h/2,u=Math.abs(o*i)+Math.abs(s*a),l=Math.abs(o*a)+Math.abs(s*i),h=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=h;b<=c;b++){const x=b-r.cx,M=w-r.cy,S=x*i+M*a,T=-x*a+M*i;Math.abs(S)<=o&&Math.abs(T)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function i_(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,o=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,h]=o,[c,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=h[1]?[l,h]:[h,l];return[[c[0],c[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function a_(e,t,n,r){const{width:i,height:a}=t;let o=new Uint8Array(i*a);for(let f=0;f<o.length;f++)o[f]=e[f]>Kw?255:0;o=e_(o,i,a);const s={width:i,height:a,data:o},{labels:u}=wo(s),l=new Map;for(let f=0;f<a;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const h=n/i,c=r/a,p=[];for(const[f,m]of l){const y=[];for(const[R,[X,P]]of m)y.push([X-.5,R-.5],[X-.5,R+.5],[P+.5,R-.5],[P+.5,R+.5]);const w=n_(t_(y));if(Math.min(w.w,w.h)<Zw)continue;const b=r_(e,i,a,w);if(b<Yw)continue;const x=w.w*w.h*Xw/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<Qw+2)continue;const T=i_(M).map(([R,X])=>[Math.min(n,Math.max(0,Math.round(R*h))),Math.min(r,Math.max(0,Math.round(X*c)))]),I=T.map(R=>R[0]),k=T.map(R=>R[1]),v=Math.min(...I),A=Math.min(...k);p.push({quad:T,x:v,y:A,width:Math.max(...I)-v,height:Math.max(...k)-A,score:b})}return p.sort((f,m)=>m.score-f.score)}function o_(e,t){const[n,r,i,a]=t,o=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=s_([[0,0],[o,0],[o,s],[0,s]],[n,r,i,a]),l=new Uint8Array(o*s*e.channels);for(let c=0;c<s;c++)for(let p=0;p<o;p++){const f=u[6]*p+u[7]*c+u[8],m=(u[0]*p+u[1]*c+u[2])/f,y=(u[3]*p+u[4]*c+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,M=y-b,S=Math.max(0,Math.min(e.width-1,w)),T=Math.max(0,Math.min(e.width-1,w+1)),I=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let v=0;v<e.channels;v++){const A=e.data[(I*e.width+S)*e.channels+v],R=e.data[(I*e.width+T)*e.channels+v],X=e.data[(k*e.width+S)*e.channels+v],P=e.data[(k*e.width+T)*e.channels+v],q=A*(1-x)+R*x,z=X*(1-x)+P*x;l[(c*o+p)*e.channels+v]=Math.round(q*(1-M)+z*M)}}const h={width:o,height:s,channels:e.channels,data:l};return s/o>=1.5?Wt(h,3):h}function s_(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,o]=e[i],[s,u]=t[i];n.push([a,o,1,0,0,0,-s*a,-s*o]),r.push(s),n.push([0,0,0,a,o,1,-u*a,-u*o]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[a][i])&&(a=s);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const o=n[i][i];for(let s=i;s<8;s++)n[i][s]/=o;r[i]/=o;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Wt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:o}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*a);for(let h=0;h<i;h++)for(let c=0;c<r;c++){let p,f;n===1?(p=i-1-h,f=c):n===2?(p=r-1-c,f=i-1-h):(p=h,f=r-1-c);const m=(h*r+c)*a,y=(f*s+p)*a;for(let w=0;w<a;w++)l[y+w]=o[m+w]}return{width:s,height:u,channels:a,data:l}}const u_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,u_)*255));return e})();const qt=48,l_=320;function c_(e){return["blank",...e.characters," "]}function d_(e,t,n){let r="";const i=[];for(let o=0;o<e.length;o++){const s=e[o];s!==0&&(o>0&&e[o-1]===s||(r+=n[s]??"",i.push(t[o])))}if(i.length===0)return["",0];const a=i.reduce((o,s)=>o+s,0)/i.length;return[r,a]}function h_(e,t){const n=Math.trunc(qt*t),r=e.width/e.height,i=Math.ceil(qt*r)>n?n:Math.ceil(qt*r),a=new Float32Array(3*qt*n),o=qt*n,s=e.width/i,u=e.height/qt;for(let l=0;l<qt;l++){const h=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(h))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,h-c));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const S=2-M,T=(c*e.width+w)*e.channels+S,I=(c*e.width+b)*e.channels+S,k=(p*e.width+w)*e.channels+S,v=(p*e.width+b)*e.channels+S,A=e.data[T]*(1-x)+e.data[I]*x,R=e.data[k]*(1-x)+e.data[v]*x,X=A*(1-f)+R*f;a[M*o+l*n+m]=(X/255-.5)/.5}}}return{tensor:a,width:n}}const p_=62,f_=8,m_=5;function bo(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function g_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let o=1;o<=n;o++){for(let s=1;s<=r;s++)a[s]=e[o-1]===t[s-1]?i[s-1]+1:Math.max(i[s],a[s-1]);[i,a]=[a,i]}return i[r]}function ti(e,t){return e.length===0&&t.length===0?100:200*g_(e,t)/(e.length+t.length)}function am(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return ti(n(e),n(t))}function y_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=[...r].filter(h=>!n.has(h)).sort(),s=i.join(" "),u=[s,a.join(" ")].filter(Boolean).join(" "),l=[s,o.join(" ")].filter(Boolean).join(" ");return s.length>0&&(a.length===0||o.length===0)?100:Math.max(ti(s,u),ti(s,l),ti(u,l))}function w_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[bo(i),bo(r.name)])if(a)for(const o of[a,a.replace(/ /g,"")])o&&!t.has(o)&&(t.add(o),n.push({key:o,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function __(e,t){const n=bo(e);if(!n||t.length===0)return null;const i=w_(t).map(h=>({...h,score:y_(n,h.key)})).sort((h,c)=>c.score-h.score).slice(0,f_).filter(h=>h.score>=p_);if(i.length===0)return null;const a=i[0].score,o=i.filter(h=>a-h.score<=m_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=o[0],l=[am(s,u.key),u.score];for(const h of o.slice(1)){const c=[am(s,h.key),h.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=h,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const om=5e3,xo=.75,sm=15,b_=1.25,x_=2.4,$_=.003,v_=.85,S_=4,$o=2600,vo=2,So=.3,um=.1,lm=.012,M_=22,cm=.5,ni=.12;function et(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,o=t.width*t.height;a<o;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function T_(e,t,n,r){const i=r.map(ie=>ie[0]),a=r.map(ie=>ie[1]),o=i.reduce((ie,xe)=>ie+xe,0)/i.length,s=a.reduce((ie,xe)=>ie+xe,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*S_,h=Math.max(0,Math.trunc(o-l)),c=Math.min(n.width,Math.trunc(o+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(c-h<8||f-p<8)return null;const m=Math.max(n.width,n.height)<$o?vo:1,y=et(e,n),w=et(e,t),b=new e.Rect(h,p,c-h,f-p),x=y.roi(b),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const S=new e.Mat,T=new e.Mat;e.cvtColor(w,S,e.COLOR_RGB2GRAY),e.cvtColor(M,T,e.COLOR_RGB2GRAY);const I=new e.ORB(om),k=new e.KeyPointVector,v=new e.KeyPointVector,A=new e.Mat,R=new e.Mat,X=new e.Mat,P=[y,w,x,M,S,T,k,v,A,R,X],q=ie=>{for(const xe of P)try{xe.delete()}catch{}try{I.delete()}catch{}return ie};if(I.detectAndCompute(S,X,k,A),I.detectAndCompute(T,X,v,R),A.rows<8||R.rows<8)return q(null);const z=new e.BFMatcher(e.NORM_HAMMING),j=new e.DMatchVectorVector;z.knnMatch(A,R,j,2);const Z=[],N=[];for(let ie=0;ie<j.size();ie++){const xe=j.get(ie);if(xe.size()===2){const Ge=xe.get(0),ze=xe.get(1);if(Ge.distance<xo*ze.distance){const Ke=k.get(Ge.queryIdx).pt,rt=v.get(Ge.trainIdx).pt;Z.push(Ke.x,Ke.y),N.push(rt.x,rt.y)}}}if(j.delete(),z.delete(),Z.length/2<8)return q(null);const G=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),O=e.matFromArray(N.length/2,1,e.CV_32FC2,N),H=new e.Mat,F=e.findHomography(G,O,e.RANSAC,5,H);let L=0;for(let ie=0;ie<H.rows;ie++)L+=H.data[ie];const W=F.rows===3?[...F.data64F]:null;if(G.delete(),O.delete(),H.delete(),F.delete(),W===null||L<sm)return q(null);const U=1/m,re=[[U,0,h],[0,U,p],[0,0,1]],ue=[0,1,2].map(ie=>[0,1,2].map(xe=>re[ie][0]*W[xe]+re[ie][1]*W[3+xe]+re[ie][2]*W[6+xe]));return q({H:ue,inliers:L})}function Mo(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,h]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*h}const i=Math.abs(r/2)/(t*n);if(i<$_||i>v_)return!1;const a=e.map((u,l)=>{const h=e[(l+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),o=Math.min(...a);if(o<1)return!1;const s=Math.max(...a)/o;return s>=b_&&s<=x_}function To(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Eo(e,t,n,r){const i=n.width,a=n.height,o=Math.max(8,Math.trunc(So*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=r.map(P=>[P[0],P[1],P[2]-o*(P[0]+P[1])+0]);for(let P=0;P<3;P++)l[P][2]=r[P][2]-o*r[P][0]-o*r[P][1];const h=et(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(h,c,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(c,f,e.COLOR_RGB2Lab),h.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(o/3)),w=[[],[],[]],b=(P,q)=>{const z=(q*s+P)*3;w[0].push(m[z]),w[1].push(m[z+1]),w[2].push(m[z+2])};for(let P=0;P<u;P++)for(let q=0;q<s;q++)(P<y||P>=u-y||q<y||q>=s-y)&&b(q,P);const x=P=>{P.sort((z,j)=>z-j);const q=P.length>>1;return P.length%2?P[q]:(P[q-1]+P[q])/2},M=[x(w[0]),x(w[1]),x(w[2])],S=(P,q)=>{const z=(q*s+P)*3,j=m[z]-M[0],Z=m[z+1]-M[1],N=m[z+2]-M[2];return Math.sqrt(j*j+Z*Z+N*N)>M_},T=Math.max(6,Math.trunc(um*i)),I=Math.max(6,Math.trunc(um*a)),k=Math.max(2,Math.trunc(lm*i)),v=Math.max(2,Math.trunc(lm*a)),A=P=>{let q=0,z=0;for(const j of P)z=j?z+1:0,z>q&&(q=z);return q/Math.max(1,P.length)},R=P=>{let q,z,j,Z,N;if(P==="L"?(q=o,z=o+a,j=Math.max(0,o-k-T),Z=Math.max(0,o-k),N=!1):P==="R"?(q=o,z=o+a,j=o+i+k,Z=Math.min(s,o+i+k+T),N=!1):(q=Math.max(0,o-v-I),z=Math.max(0,o-v),j=o,Z=o+i,N=!0),z<=q||Z<=j)return 0;const G=[];if(N)for(let O=j;O<Z;O++){let H=0;for(let F=q;F<z;F++)S(O,F)&&H++;G.push(H/(z-q)>cm)}else for(let O=q;O<z;O++){let H=0;for(let F=j;F<Z;F++)S(F,O)&&H++;G.push(H/(Z-j)>cm)}return A(G)},X={L:R("L"),R:R("R"),T:R("T")};return c.delete(),f.delete(),X}const E_=6e3,I_=8,dm=.5,k_=.6;function C_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<$o?vo:1,a=et(e,t),o=new e.Mat;i!==1?e.resize(a,o,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(o);const s=new e.Mat;e.cvtColor(o,s,e.COLOR_RGB2GRAY),a.delete(),o.delete();const u=new e.ORB(E_),l=new e.Mat,h=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(s,l,h,c);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=et(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,x,M);const S=[w,x,M],T=()=>{for(const ue of S)ue.delete();b.delete()};if(M.rows<8){T();continue}const I=new e.DMatchVectorVector;f.knnMatch(M,c,I,2);const k=[],v=[];for(let ue=0;ue<I.size();ue++){const ie=I.get(ue);if(ie.size()===2){const xe=ie.get(0);if(xe.distance<xo*ie.get(1).distance){const Ge=x.get(xe.queryIdx).pt,ze=h.get(xe.trainIdx).pt;k.push(Ge.x,Ge.y),v.push(ze.x,ze.y)}}}if(I.delete(),k.length/2<8){T();continue}const A=e.matFromArray(k.length/2,1,e.CV_32FC2,k),R=e.matFromArray(v.length/2,1,e.CV_32FC2,v),X=new e.Mat,P=e.findHomography(A,R,e.RANSAC,5,X);let q=0;for(let ue=0;ue<X.rows;ue++)q+=X.data[ue];const z=P.rows===3?[...P.data64F]:null;if(A.delete(),R.delete(),X.delete(),P.delete(),z===null||q<I_){T();continue}const j=1/i,Z=[[j*z[0],j*z[1],j*z[2]],[j*z[3],j*z[4],j*z[5]],[z[6],z[7],z[8]]],N=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ue,ie])=>To(Z,ue,ie));if(!Mo(N,t.width,t.height)){T();continue}const G=et(e,t),O=e.matFromArray(3,3,e.CV_64F,Z.flat()),H=new e.Mat;e.warpPerspective(G,H,O,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const F=new e.Mat;e.cvtColor(H,F,e.COLOR_RGB2GRAY);const L=new e.Mat;e.matchTemplate(F,b,L,e.TM_CCOEFF_NORMED);const W=L.data32F[0];if(G.delete(),O.delete(),H.delete(),F.delete(),L.delete(),W<dm){T();continue}const U=Eo(e,t,y,Z),re=Io(U);p.push({id:m,confidence:Math.max(0,W),footprint:N,built:U!==null&&Math.max(U.L,U.R,U.T)>=ni,tuckRegion:ko(N,re)}),T()}}finally{s.delete(),l.delete(),h.delete(),c.delete();try{u.delete(),f.delete()}catch{}}return p}function Io(e){return e!==null&&e.R>=ni?["R"]:[]}function ko(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),o=So*a;if(!(o>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],M=n[b];let S=-(M[1]-x[1]),T=M[0]-x[0];const I=(x[0]+M[0])/2,k=(x[1]+M[1])/2;S*(I-s)+T*(k-u)<0&&(S=-S,T=-T);const v=Math.hypot(S,T);v<=1e-6||(S=S/v*o,T=T/v*o,h.push([x[0]+S,x[1]+T],[M[0]+S,M[1]+T]))}const c=h.map(y=>y[0]),p=h.map(y=>y[1]),f=Math.round(Math.min(...c)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...c))-f,height:Math.round(Math.max(...p))-m}}function A_(e,t,n,r){const i=T_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,h])=>To(i.H,l,h));if(!Mo(o,t.width,t.height))return null;const s=Eo(e,t,n,i.H);if(s===null)return null;const u=Io(s);return{built:Math.max(s.L,s.R,s.T)>=ni,footprint:o,overflow:u,edgeScores:s,inliers:i.inliers}}const R_=.88;function hm(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,o=Math.max(8,Math.trunc(So*i)),s=i+2*o,u=a+2*o;if(s*u>4e7)return null;const l=o+Math.trunc(i*R_),h=s-l;if(h<1)return null;const c=et(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-o*y[k*3]-o*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(c,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,h,u)),S=new e.Mat;M.copyTo(S);const T=S.data,I=new Uint8ClampedArray(h*u*3);I.set(T.subarray(0,I.length));for(const k of[c,p,f,m,b,x,M,S])try{k.delete()}catch{}return{width:h,height:u,channels:3,data:I}}function O_(e,t,n,r){const[i,a,o,s]=r;if(o<8||s<8)return null;const u=Math.trunc(.06*o),l=Math.trunc(.06*s),h=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+o+u)),p=Math.max(0,Math.trunc(a-l)),f=Math.min(n.height,Math.trunc(a+s+l));if(c-h<8||f-p<8)return null;const m=Math.max(n.width,n.height)<$o?vo:1,y=et(e,n),w=et(e,t),b=y.roi(new e.Rect(h,p,c-h,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const M=new e.Mat,S=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const T=new e.ORB(om),I=new e.KeyPointVector,k=new e.KeyPointVector,v=new e.Mat,A=new e.Mat,R=new e.Mat,X=[y,w,b,x,M,S,I,k,v,A,R],P=ue=>{for(const ie of X)try{ie.delete()}catch{}try{T.delete()}catch{}return ue};if(T.detectAndCompute(M,R,I,v),T.detectAndCompute(S,R,k,A),v.rows<8||A.rows<8)return P(null);const q=new e.BFMatcher(e.NORM_HAMMING),z=new e.DMatchVectorVector;q.knnMatch(v,A,z,2);const j=[],Z=[];for(let ue=0;ue<z.size();ue++){const ie=z.get(ue);if(ie.size()===2){const xe=ie.get(0),Ge=ie.get(1);if(xe.distance<xo*Ge.distance){const ze=I.get(xe.queryIdx).pt,Ke=k.get(xe.trainIdx).pt;j.push(ze.x,ze.y),Z.push(Ke.x,Ke.y)}}}if(z.delete(),q.delete(),j.length/2<8)return P(null);const N=e.matFromArray(j.length/2,1,e.CV_32FC2,j),G=e.matFromArray(Z.length/2,1,e.CV_32FC2,Z),O=new e.Mat,H=e.findHomography(N,G,e.RANSAC,5,O);let F=0;for(let ue=0;ue<O.rows;ue++)F+=O.data[ue];const L=H.rows===3?[...H.data64F]:null;if(N.delete(),G.delete(),O.delete(),H.delete(),L===null||F<sm)return P(null);const W=1/m,U=[[W,0,h],[0,W,p],[0,0,1]],re=[0,1,2].map(ue=>[0,1,2].map(ie=>U[ue][0]*L[ie]+U[ue][1]*L[3+ie]+U[ue][2]*L[6+ie]));return P({H:re,inliers:F})}const z_=620;function N_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function pm(e,t,n,r){const i=fm(e,t,n,r);if(i!==null)return i;try{const[a,o,s,u]=r.map(T=>Math.trunc(T));if(Math.min(s,u)>=z_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),h=Math.trunc(u*.25),c=Math.max(0,a-l),p=Math.max(0,o-h),f=Math.min(t.width,a+s+l),m=Math.min(t.height,o+u+h);if(f<=c||m<=p)return null;const y=et(e,t),w=y.roi(new e.Rect(c,p,f-c,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-c)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=N_(e,b);for(const T of[y,w,b])try{T.delete()}catch{}const M=[(a-c)*2,(o-p)*2,s*2,u*2],S=fm(e,x,n,M);return S===null?null:{...S,footprint:S.footprint.map(([T,I])=>[T*.5+c,I*.5+p])}}catch{return null}}function fm(e,t,n,r){const i=O_(e,n,t,r);if(i===null)return null;const o=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>To(i.H,b,x));if(!Mo(o,t.width,t.height))return null;const s=et(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const h=et(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(h,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(c,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,h,c,p,f])try{b.delete()}catch{}if(m<dm)return null;const y=Eo(e,t,n,i.H);if(y===null)return null;const w=Io(y);return{built:Math.max(y.L,y.R,y.T)>=ni,footprint:o,overflow:w,edgeScores:y,inliers:i.inliers}}function B_(e,t,n,r=.03){let i=null,a=1/0;for(const o of e){const[s,u,l,h]=o;if(l<=0||h<=0)continue;const c=r*l,p=r*h;if(t>=s-c&&t<=s+l+c&&n>=u-p&&n<=u+h+p){const f=l*h;f<a&&(a=f,i=[s,u,l,h])}}return i}const P_=.3,D_=.3;function U_(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:o,R:s,T:u}=a.edgeScores;return Math.min(o,s,u)>=P_}),i=[];return e.forEach((a,o)=>{if(!a.built||a.edgeScores===null)return;const{L:s,R:u,T:l}=a.edgeScores,h=Math.max(s,u,l)<D_;if(!r&&!h)return;t.some(([p,f])=>p>=a.zone.x0&&p<=a.zone.x1&&f>=a.zone.y0&&f<=a.zone.y1)||i.push(o)}),i}const Ot=128,Co=.5;function Ao(e){const t=qn(e,Ot,Ot),n=Ot*Ot,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function mm(e){const t=e[1]??0;return{built:t>=Co,prob:t}}const br=120,xr=179,L_=1.3,F_=3.6,G_=.45,W_=6e-4,q_=.02,V_=6e3,H_=.78,j_=1.25,K_=2.4,Y_=.05,X_=1.5,Z_=.5,Q_=.9,J_=150,eb=18,tb=34,nb=90,rb=130,ib=.13,ab=.15,ri="magistrates-guild",Ro="merchants-guild";function ob(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[br,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[xr,255,205,255]),o=new e.Mat;e.inRange(r,i,a,o),r.delete(),i.delete(),a.delete();const s=new Uint8Array(o.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(o,l,e.MORPH_CLOSE,u),o.delete(),u.delete();const h=new e.Mat,c=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,h,c,p,8);l.delete(),h.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=c.intAt(w,0),x=c.intAt(w,1),M=c.intAt(w,2),S=c.intAt(w,3),T=c.intAt(w,4),I=T/m;I<W_||I>q_||T/Math.max(M*S,1)<G_||y.push({x:b,y:x,w:M,h:S})}return c.delete(),{blobs:y,mask:s,maskWidth:t.width}}function sb(e,t,n,r,i,a,o){const s=e,u=a,l=o,h=i;if(!h.gray){const W=et(e,r);h.gray=new s.Mat,s.cvtColor(W,h.gray,s.COLOR_RGB2GRAY),W.delete(),h.k=new s.KeyPointVector,h.d=new s.Mat;const U=new s.Mat;u.detectAndCompute(h.gray,U,h.k,h.d),U.delete()}const c=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(c,p,f,m),p.delete();const y=W=>(f.delete(),m.delete(),W);if(h.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(h.d,m,w,2);const b=[],x=[];for(let W=0;W<w.size();W++){const U=w.get(W);if(U.size()===2){const re=U.get(0);if(re.distance<H_*U.get(1).distance){const ue=h.k.get(re.queryIdx).pt,ie=f.get(re.trainIdx).pt;b.push(ue.x,ue.y),x.push(ie.x,ie.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),S=s.matFromArray(x.length/2,1,s.CV_32FC2,x),T=new s.Mat,I=s.findHomography(M,S,s.RANSAC,5,T);if(M.delete(),S.delete(),T.delete(),I.rows!==3)return I.delete(),y(null);const k=[...I.data64F],v=(W,U)=>{const re=k[6]*W+k[7]*U+k[8];return[(k[0]*W+k[1]*U+k[2])/re,(k[3]*W+k[4]*U+k[5])/re]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([W,U])=>v(W,U));if(A.some(W=>!Number.isFinite(W[0])||!Number.isFinite(W[1])))return I.delete(),y(null);const R=A.map((W,U)=>{const re=A[(U+1)%4];return Math.hypot(re[0]-W[0],re[1]-W[1])}),X=Math.min(...R);if(X<1)return I.delete(),y(null);const P=Math.max(...R)/X;let q=0;for(let W=0;W<4;W++){const[U,re]=A[W],[ue,ie]=A[(W+1)%4];q+=U*ie-ue*re}const z=t,j=Math.abs(q/2)/(z.rows*z.cols);if(P<j_||P>K_||j<Y_||j>X_)return I.delete(),y(null);const Z=new s.Mat;s.warpPerspective(z,Z,I,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),I.delete();const N=new s.Mat;s.cvtColor(Z,N,s.COLOR_RGB2GRAY),Z.delete();const G=Math.trunc(r.height/2),O=N.roi(new s.Rect(0,0,r.width,G)),H=h.gray.roi(new s.Rect(0,0,r.width,G)),F=new s.Mat;s.matchTemplate(O,H,F,s.TM_CCOEFF_NORMED);const L=F.data32F[0];return O.delete(),H.delete(),F.delete(),N.delete(),y(L)}function ub(e,t,n){let r,i;if(n===ri)r=Ro,i=ib;else if(n===Ro)r=ri,i=ab;else return null;const{x:a,y:o,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let h=0,c=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=o;b<o+u;b++)for(let x=a+p;x<a+f;x++){const M=(b*e.width+x)*e.channels,{h:S,s:T,v:I}=Tt(e.data[M],e.data[M+1],e.data[M+2]);if(S>=br&&S<=xr&&T>=30&&T<=170&&I<=170)continue;m++,(r===Ro?S>=eb&&S<=tb&&T>=nb&&I>=rb:S>=95&&S<=130&&T>=80)&&y++}if(m<20)continue;const w=y/m;w>h&&(h=w,c={x:a+p,y:o,w:f-p,h:u})}return h>=i&&c!==null?{id:r,box:c}:null}const lb=1.7,cb=140,db=170,hb=.2,pb=.1,gm=240,ym=80,wm=60,fb=50,_m="scientists-guild",bm="tacticians-guild",ii=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function mb(e,t,n){const{x:r,y:i,w:a,h:o}=n,s=new Float32Array(o);for(let S=0;S<o;S++){let T=0;for(let I=0;I<a;I++)e[(i+S)*t+r+I]>0&&T++;s[S]=T/a}const u=[];for(let S=0;S<o;S++)s[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],h=u[u.length-1],c=h-l;if(c<5)return[];const p=a/c;if(p<L_||p>F_)return[];if(p>=lb)return[{x:r,y:i+l,w:a,h:c}];const f=new Float32Array(o),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let S=-4;S<=4;S++){const T=Math.exp(-(S*S)/(2*m*m));y.push(T),w+=T}for(let S=0;S<o;S++){let T=0;for(let I=-4;I<=4;I++){const k=Math.min(o-1,Math.max(0,S+I));T+=s[k]*y[I+4]}f[S]=T/w}const b=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let M=l+Math.trunc(c/2);if(x>b){let S=1/0;for(let T=b;T<x;T++)f[T]<S&&(S=f[T],M=T)}return[{x:r,y:i+l,w:a,h:M-l},{x:r,y:i+M,w:a,h:h-M}]}function gb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),o=Math.max(0,i-n),s=Math.max(0,a-r),u=new Uint8Array(o*s*3);for(let l=0;l<s;l++)for(let h=0;h<o;h++){const c=((r+l)*e.width+n+h)*e.channels,p=(l*o+h)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:o,height:s,channels:3,data:u}}function yb(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:o,s,v:u}=Tt(e.data[a],e.data[a+1],e.data[a+2]);s>=40&&u>=40&&u<=205&&(t++,o>=cb&&o<=db&&n++)}return t===0?0:n/t}function wb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s:o,v:s}=Tt(e.data[i],e.data[i+1],e.data[i+2]);!(a>=br&&a<=xr)&&o>=70&&s>=50&&t++}return n===0?0:t/n}function xm(e,t){const n=et(e,t),r=new e.Mat;e.resize(n,r,new e.Size(gm,ym),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:gm,height:ym,channels:3,data:i}}function _b(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const o=a*e.channels;n[0]+=e.data[o],n[1]+=e.data[o+1],n[2]+=e.data[o+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const o=a*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[a*3+s]=Math.max(0,Math.min(255,Math.round(e.data[o+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function $m(e,t){const n=_b(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=Tt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=br&&w<=xr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,a++)}const o=a<20,s=et(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let h=0,c=0,p=0,f=0;for(let m=0;m<r;m++)!o&&i[m]===0||(h+=l[m*3]*100/255,c+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[h/f,c/f,p/f]}function bb(e){let t=0,n=0,r=0,i=0,a=0;const o=e.width*e.height;for(let u=0;u<o;u++){const l=u*e.channels,{h,s:c,v:p}=Tt(e.data[l],e.data[l+1],e.data[l+2]);h>=br&&h<=xr&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(h>=95&&h<=130?n++:h>=35&&h<=92?r++:h<=10?i++:h>=15&&h<=34&&p>=80&&a++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:a/s}}function xb(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s:o,v:s}=Tt(e.data[i],e.data[i+1],e.data[i+2]);o>=wm&&s>=fb?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&s<150&&n.brown++):o<wm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function $b(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,a=0,o=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,a+=u*u,o+=l*l}return i/(Math.sqrt(a*o)+1e-6)}function vm(e,t){const n=et(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function vb(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const o=xm(e,a);n.set(i,vm(e,o)),ii.includes(i)&&r.set(i,$m(e,o))}return{gray:n,warmLab:r}}function Sb(e,t,n){const r=xm(e,t),i=bb(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ri;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return _m;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return bm;const a=xb(r),o={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let s="blue";for(const l of Object.keys(o))o[l]>o[s]&&(s=l);if(o[s]<=0)return"";let u;if(s==="blue")u=ri;else if(s==="green")u=_m;else if(s==="red")u=bm;else{const l=vm(e,r);let h="",c=-2;for(const p of ii){const f=n.gray.get(p);if(f===void 0)continue;const m=$b(l,f);m>c&&(c=m,h=p)}u=h||ii[0]}if(ii.includes(u)&&n.warmLab.size>0){const l=$m(e,r);let h=u,c=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<c&&(c=m,h=p)}return h}return u}function Mb(e,t,n,r,i){var y;const a=[],{blobs:o,mask:s,maskWidth:u}=ob(e,t);if(o.length===0||n.size===0)return a;const l=e,h=new l.ORB(V_),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=et(e,t);let m=null;try{for(const w of o){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(J_,Math.trunc(Q_*Math.max(w.w,w.h))),S=Math.max(0,b-M),T=Math.max(0,x-M),I=Math.min(t.width,b+M),k=Math.min(t.height,x+M);if(I-S<16||k-T<16)continue;const v=f.roi(new l.Rect(S,T,I-S,k-T)),A=new l.Mat;l.cvtColor(v,A,l.COLOR_RGB2GRAY);let R=null,X=-2;for(const[j,Z]of n){if(r!==void 0&&Date.now()>r)break;const N=sb(e,v,A,Z,p.get(j),h,c);N!==null&&N>X&&(X=N,R=j)}v.delete(),A.delete();const P=new Set;if(R!==null&&X>=Z_){a.push({id:R,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),P.add(R);const j=ub(t,w,R);j&&(a.push({id:j.id,boundingBox:{x:j.box.x,y:j.box.y,width:j.box.w,height:j.box.h},confidence:.9}),P.add(j.id))}if(i===void 0||i.size===0)continue;const q=mb(s,u,w);if(q.length!==2)continue;const z=q.map(j=>gb(t,j));if(!z.some(j=>j.width*j.height===0||wb(j)<pb))for(let j=0;j<q.length;j++){const Z=z[j];if(yb(Z)<hb)continue;m===null&&(m=vb(e,i));const N=Sb(e,Z,m);if(N&&!P.has(N)){P.add(N);const G=q[j];a.push({id:N,boundingBox:{x:G.x,y:G.y,width:G.w,height:G.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{h.delete(),c.delete()}catch{}}return a}const Sm=128,Tb=.56,Eb=15,Ib=.58,kb=70,Cb=50,Ab=.12,Rb=.2,Ob=.1,zb=.17,Mm=.15;function Nb(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Tm(e,t){const{width:n,height:r,channels:i,data:a}=e,o=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,o-u),h=Math.max(0,s-u),c=Math.min(n,o+u),p=Math.min(r,s+u),f=c-l,m=p-h,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+h)*n+l)*i;y.set(a.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function Bb(e){const t=Tm(e,Tb),n=Ew(t),r=nm(n,Sm,Sm);return Iw(r)}function Pb(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,o=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,h=t[u]-i;a+=l*h,o+=l*l,s+=h*h}return a/(Math.sqrt(o*s)+1e-6)}function Db(e){const t=new Map([["masonry",0],["strategy",0]]),n=Tm(e,Ib),{width:r,height:i,channels:a,data:o}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*a,{h:m,s:y,v:w}=Tt(o[f],o[f+1],o[f+2]);y>=kb&&w>=Cb&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const h=u/s,c=l/s;return h>=Ab&&t.set("masonry",Mm*Math.min(1,h/Rb)),c>=Ob&&t.set("strategy",Mm*Math.min(1,c/zb)),t}function Ub(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=Bb(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=Eb)a.push(Aw(n,l,i));const o=new Map;for(const[l,h]of t){let c=-1/0;for(const p of a){const f=Pb(p,h);f>c&&(c=f)}o.set(l,c)}for(const[l,h]of Db(e))h>0&&o.has(l)&&o.set(l,o.get(l)+h);let s="",u=-1/0;for(const[l,h]of o)h>u&&(s=l,u=h);return[s,u]}const on=224,Lb=512,Fb=[.485,.456,.406],Gb=[.229,.224,.225];function Wb(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function qb(e){const t=ho(e,on,on),n=on*on,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Fb[a])/Gb[a];return r}function Vb(e){const t=3*on*on,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(qb(Wt(e,r)),r*t);return n}function Hb(e,t=Lb){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let o=0;o<t;o++)r[o]+=e[a*t+o];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function jb(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const o=i*e.dim;for(let s=0;s<e.dim;s++)a+=e.x[o+s]*t[s];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const Hn=96,Kb=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],Yb=.45;function Xb(e){const t=ho(e,Hn,Hn),n=Hn*Hn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function Zb(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=Yb?Kb[t]??"":"",prob:n}}const jn=128,Qb=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],Jb=.5,e1=.9;function t1(e){const t=qn(e,jn,jn),n=jn*jn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function n1(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let o=0;o<t;o++)for(let s=0;s<n;s++){const u=o,h=((n-1-s)*t+u)*r,c=(o*n+s)*r;for(let p=0;p<r;p++)a[c+p]=i[h+p]}return{width:n,height:t,channels:r,data:a}}function r1(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=n1(n);return n}function i1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function a1(e,t){let n=0,r=-1;for(let a=0;a<4;a++){const o=a===0?e:r1(e,a),s=await t(t1(o)),u=i1(s);u.prob>r&&(r=u.prob,n=u.index)}const i=r>=Jb?Qb[n]??"":"";return{id:i==="other"?"":i,prob:r}}const Kn=96,o1=[1,2,3,4,5,6,7],s1=.8;function u1(e){const t=po(e,e.width*2,e.height*2),n=qn({width:e.width*2,height:e.height*2,channels:3,data:t},Kn,Kn),r=Kn*Kn,i=new Float32Array(3*r);for(let a=0;a<r;a++)for(let o=0;o<3;o++)i[o*r+a]=n[a*3+o]/255;return i}function l1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:o1[t],prob:e[t]}}const sn=128,Em=.35,c1=["fp","laurel"],d1=.85;function h1(e){const r=(e.width<sn&&e.height<sn?po:qn)(e,sn,sn),i=sn*sn,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function p1(e){return e[c1.indexOf("fp")]}const un=128,f1=.15,Im=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],m1=7,g1=.9;function y1(e,t,n){const[r,i,a,o]=e.map(Number);if(!(a>1)||!(o>1))return null;const s=r+a/2,u=i+o/2,l=Math.max(a,o)*(1+2*f1),h=Math.max(0,at(s-l/2)),c=Math.max(0,at(u-l/2)),p=Math.min(t,at(s+l/2)),f=Math.min(n,at(u+l/2));return p-h<8||f-c<8?null:{x:h,y:c,w:p-h,h:f-c}}function w1(e){const r=(e.width<un&&e.height<un?po:qn)(e,un,un),i=un*un,a=new Float32Array(3*i);for(let o=0;o<i;o++)for(let s=0;s<3;s++)a[s*i+o]=r[o*3+s]/255;return a}function _1(e){let t=0;for(let i=1;i<Im.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=m1;return{className:Im[t],probability:n,rejected:r&&n>=g1}}const ai=3,b1=2.2,x1=.3,$1=.65,v1=3,S1=1.3,M1=.77;function km(e,t,n){const[r,i,a,o]=e,s=[];return r<=ai&&s.push("gauche"),i<=ai&&s.push("haut"),r+a>=t-ai&&s.push("droit"),i+o>=n-ai&&s.push("bas"),s}function Cm(e){const t=e[3]/Math.max(e[2],1);return t>=S1?"portrait":t<=M1?"paysage":null}function Oo(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function T1(e,t,n){for(const[r,i,a,o]of e??[])if(Math.max(Math.abs(a-r)/Math.max(t,1),Math.abs(o-i)/Math.max(n,1))>$1)return!0;return!1}function E1(e,t,n,r,i){try{const a=[...e],o=a.filter(w=>km(w.box,r,i).length>0);if(o.length===0)return{kept:a,dropped:[],suspects:[]};const s=a.filter(w=>!o.includes(w)),u=w=>({kept:s,dropped:o.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(T1(n,r,i))return u("photo-piste");if(s.length<v1)return t>0?u("photo-merveilles"):{kept:a,dropped:[],suspects:o.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(o.length>(s.length+o.length)/3)return u("debordement-structurel");const l=Oo(s.map(w=>w.box[2]*w.box[3])),h=Oo(s.map(w=>w.box[2])),c=Oo(s.map(w=>w.box[3])),p=new Set(s.map(w=>Cm(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of o){const b=km(w.box,r,i),[,,x,M]=w.box,S=l>0?x*M/l:0,T=[];(b.includes("gauche")||b.includes("droit"))&&T.push(h>0?x/h:1),(b.includes("haut")||b.includes("bas"))&&T.push(c>0?M/c:1);const I=T.length>0?Math.min(...T):1,k=Cm(w.box);S>b1?m.push({banner:w,edgeReason:"bord-grosse"}):I<x1?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const I1=1,k1=1.5;function C1(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function A1(e,t,n,r){const i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a);if(o<=0)return null;const s=((e-n[0])*i+(t-n[1])*a)/(o*o);return[Math.abs((e-n[0])*a-(t-n[1])*i)/o,Math.abs(s-.5)*o]}function R1(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function O1(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,a,o,s]=t,u=i+o/2,l=a+s/2;let h=null;for(const[p,f]of C1(e)){const m=A1(u,l,p,f);m!==null&&(h===null||m[0]<h[0])&&(h=m)}if(h===null)return null;const c=R1(e);return c===null?null:{distBord:h[0]/r,decalLat:h[1]/r,perpendiculaire:c!==o>s}}catch{return null}}function z1(e,t,n,r=I1,i=k1){const a=[];for(const[o,s]of t??[]){const u=O1(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||a.push([u.decalLat,o]))}return a.length===0?null:(a.sort((o,s)=>o[0]-s[0]||o[1]-s[1]),a[0][1])}const ln=64,Am=.5,N1=[.67,1.24];function B1(e,t,n,r){const i=Math.max(0,t-r),a=Math.max(0,n-r),o=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=o-i,l=s-a;if(u<=0||l<=0)return null;const h=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=a+w,x=b-n;for(let M=0;M<u;M++){const S=i+M,T=S-t,I=(w*u+M)*3;if(T*T+x*x<=p){const k=(b*e.width+S)*h;c[I]=e.data[k],c[I+1]=e.data[k+1],c[I+2]=e.data[k+2]}else c[I]=255,c[I+1]=255,c[I+2]=255}}const f=qn({width:u,height:l,channels:3,data:c},ln,ln),m=ln*ln,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function P1(e){return e[1]}const D1=2.25,oi=3,U1=1.15,L1=.5,F1=2.5,G1=.75,W1=2.25,q1=1.3,V1=.77;function si(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function H1(e){const t=Array.from(new Map(e.map(a=>[`${a[0]},${a[1]}`,a])).values());if(t.sort((a,o)=>a[0]-o[0]||a[1]-o[1]),t.length<=2)return t;const n=(a,o,s)=>(o[0]-a[0])*(s[1]-a[1])-(o[1]-a[1])*(s[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(const a of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Rm(e,t,n){let r=!1;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[(a+1)%i];if(s>t!=l>t){const h=(u-o)*(t-s)/(l-s)+o;e<h&&(r=!r)}}return r}function j1(e,t,n){if(n.length>=3&&Rm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let a=0;a<i;a+=1){const[o,s]=n[a],[u,l]=n[i>1?(a+1)%i:a],h=u-o,c=l-s,p=h*h+c*c,f=p===0?0:Math.max(0,Math.min(1,((e-o)*h+(t-s)*c)/p));r=Math.min(r,Math.hypot(e-(o+f*h),t-(s+f*c)))}return r}function K1(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function Y1(e,t,n){const[r,i]=e,a=t[0]-r,o=t[1]-i;if(a===0&&o===0)return!1;const[s,u,l,h]=n;let c=0,p=1;const f=[[-a,r-s],[a,l-r],[-o,i-u],[o,h-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?c=Math.max(c,w):p=Math.min(p,w),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const zo=e=>e.box[3]/Math.max(1,e.box[2]),Vt=e=>zo(e)>U1,Yn=e=>zo(e)>=q1||zo(e)<=V1;function No(e){const[t,n,r,i]=e.box;if(r>=i){const o=7*i;return[t,n-o,r,i+2*o]}const a=7*r;return[t-a,n,r+2*a,i]}function Bo(e,t,n,r,i){const a=new Set(t),o=[...e.map((N,G)=>({box:[N[0],N[1],N[2],N[3]],kind:a.has(G)?"card":"tucked",src:["banner",G]})),...n.map((N,G)=>({box:[N[0],N[1],N[2],N[3]],kind:"wonder",src:["wonder",G]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(o.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player"};const l=o.map(N=>[N.box[0]+N.box[2]/2,N.box[1]+N.box[3]/2]);let h=o.filter(N=>N.kind!=="wonder").map(N=>Math.hypot(N.box[2],N.box[3])).sort((N,G)=>N-G);h.length===0&&(h=o.map(N=>Math.hypot(N.box[2],N.box[3])).sort((N,G)=>N-G));const c=h[Math.floor(h.length/2)],p=(D1*c)**2,f=o.map((N,G)=>G),m=N=>{let G=N;for(;f[G]!==G;)f[G]=f[f[G]],G=f[G];return G},y=o.map((N,G)=>N.kind==="card"?G:-1).filter(N=>N>=0),w=o.map((N,G)=>N.kind!=="card"?G:-1).filter(N=>N>=0);for(let N=0;N<y.length;N+=1)for(let G=N+1;G<y.length;G+=1){const O=y[N],H=y[G],F=o[O],L=o[H];if(Yn(F)&&Yn(L)&&Vt(F)!==Vt(L))continue;const W=l[O][0]-l[H][0],U=l[O][1]-l[H][1],re=W*W+U*U;let ue=re<=p;!ue&&Yn(F)&&Yn(L)&&Vt(F)===Vt(L)&&re<=(4*c)**2&&(ue=si(No(F),No(L))<=.5*c),ue&&(f[m(O)]=m(H))}for(let N=0;N<w.length;N+=1)for(let G=N+1;G<w.length;G+=1){const O=w[N],H=w[G];si(o[O].box,o[H].box)<=G1*c&&(f[m(O)]=m(H))}const b=new Map;for(const N of w){const G=m(N);b.set(G,[...b.get(G)??[],N])}const x=new Map;for(const N of y){const G=m(N);x.set(G,[...x.get(G)??[],N])}for(const N of b.values()){const G=N.filter(L=>o[L].kind==="wonder"&&Yn(o[L])).map(L=>Vt(o[L])),O=G.length>0?G.filter(Boolean).length*2>G.length:null,H=[];for(const[L,W]of x){let U=Number.POSITIVE_INFINITY;for(const ie of N)for(const xe of W)U=Math.min(U,si(o[ie].box,o[xe].box));if(U>W1*c)continue;const ue=W.filter(ie=>Vt(o[ie])).length/W.length>=.5;O!==null&&ue!==O||H.push([L,U,ue])}if(H.length===0)continue;const F=new Set(H.map(L=>L[2]));if(H.length>=2&&F.size===1&&O!==null){const L=H[0][0];for(const[W]of H.slice(1))f[m(W)]=m(L);f[m(N[0])]=m(L)}else{const L=H.reduce((W,U)=>U[1]<W[1]?U:W);f[m(N[0])]=m(L[0])}}let M=new Map;for(let N=0;N<o.length;N+=1){const G=m(N);M.set(G,[...M.get(G)??[],N])}const S=o.map((N,G)=>N.kind==="wonder"?G:-1).filter(N=>N>=0);if(S.length>0){const N=(O,H)=>{const[F,L,W,U]=No(o[O]),[re,ue,ie,xe]=o[H].box,Ge=Math.max(0,Math.min(F+W,re+ie)-Math.max(F,re)),ze=Math.max(0,Math.min(L+U,ue+xe)-Math.max(L,ue));return Ge*ze>=.9*o[O].box[2]*o[O].box[3]},G=new Map;for(let O=0;O<o.length;O+=1)if(!(o[O].kind!=="card"||!Yn(o[O])))for(const H of S){const F=si(o[O].box,o[H].box);if(F<=.8*c&&Vt(o[O])!==Vt(o[H])&&N(O,H)){const L=G.get(H);(!L||F<L[1])&&G.set(H,[O,F])}}for(const[O,[H]]of G){const F=m(O);for(const[L,W]of M){const U=W.indexOf(H);if(U>=0&&L!==F){W.splice(U,1),M.set(F,[...M.get(F)??[],H]),o[H].kind="tucked";break}}}M=new Map([...M].filter(([,O])=>O.length>0))}const T=N=>N.filter(G=>o[G].kind==="card").length,I=N=>{const G=N.filter(O=>o[O].kind==="card"||o[O].kind==="wonder");return G.length===0?null:G.filter(O=>Vt(o[O])).length/G.length},k=N=>[N.reduce((G,O)=>G+l[O][0],0)/N.length,N.reduce((G,O)=>G+l[O][1],0)/N.length],v=[i[0]/2,i[1]/2],A=[...M.values()].sort((N,G)=>{const O=T(N),H=T(G);if(O!==H)return H-O;const F=Math.hypot(k(N)[0]-v[0],k(N)[1]-v[1]),L=Math.hypot(k(G)[0]-v[0],k(G)[1]-v[1]);return F-L}),R=k(A[0]),X=I(A[0]),P=A.map((N,G)=>{if(G===0||T(N)<oi)return"player";const O=I(N),H=O!==null&&X!==null&&Math.abs(O-X)>=L1,F=k(N),L=r.some(W=>Y1(R,F,W));return H||L?"opponent":"player"});if(!P.includes("opponent")){const N=O=>O.reduce((H,F)=>H+(o[F].kind==="wonder"?1:0),0);let G=P.map((O,H)=>H).filter(O=>O>0&&(T(A[O])>=oi||N(A[O])>=2));if(G.reduce((O,H)=>O+N(A[H]),0)<1&&(G=[]),G.length>0&&(T(A[0])<2*oi||G.reduce((O,H)=>O+T(A[H]),0)<2*oi)&&(G=[]),G.length>0){const O=new Map(G.map(L=>[L,k(A[L])])),H=(L,W)=>(L[0]-W[0])**2+(L[1]-W[1])**2;if(G.every((L,W)=>G.slice(W+1).every(U=>H(O.get(L),O.get(U))<Math.min(H(O.get(L),R),H(O.get(U),R)))))for(const L of G)P[L]="opponent"}}const q=[],z=[];let j=!1;A.forEach((N,G)=>{const O=P[G];O==="opponent"&&(j=!0);const H=[],F=[];for(const L of N){const[W,U,re,ue]=o[L].box;H.push([W,U],[W+re,U],[W,U+ue],[W+re,U+ue]),F.push(o[L].box);const[ie,xe]=o[L].src;ie==="banner"?s[xe]=O:u[xe]=O}q.push([O,H1(H)]),z.push([O,F])});const Z=(N,G)=>{if(q.length===0)return"player";const O=c>0?F1*c:Number.POSITIVE_INFINITY,H=U=>Math.min(...z[U][1].map(re=>K1(N,G,re))),F=q.map(([,U],re)=>U.length>=3&&Rm(N,G,U)?re:-1).filter(U=>U>=0);if(F.length>0){const U=F.reduce((re,ue)=>H(ue)<H(re)?ue:re);return q[U][0]}let L=-1,W=Number.POSITIVE_INFINITY;return q.forEach(([,U],re)=>{const ue=j1(N,G,U);ue<W&&(L=re,W=ue)}),L>=0&&W<=O?q[L][0]:"none"};return{bannerOwner:s,wonderOwner:u,opponentFound:j,hulls:q,hullBoxCounts:z.map(([,N])=>N.length),pointOwner:Z}}const X1=1280,Z1=80,Q1=3,J1=3,e2=.3,t2=2.4,n2=1,r2=5.2,i2=5;function Po(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function a2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=e2&&r/n<=t2&&i/n>=n2&&i/n<=r2&&i/r<=i2}function o2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*X1/r<Z1}function s2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),a=r.poly.map(s=>s[1]),o=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/o,cy:a.reduce((s,u)=>s+u,0)/o,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),a=Number(r[1]),o=Number(r[2]),s=Number(r[3]);if(![i,a,o,s].every(Number.isFinite))continue;const u=i+o/2,l=a+s/2;let h=n[0],c=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<c&&(c=f,h=p)}h.extra.push([i,a],[i+o,a+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function Om(e,t,n,r,i=[]){const a=Po(n);if(!o2(e,t,a))return[];const o=r.filter(l=>l.n>=J1&&l.poly.length>0).slice().sort((l,h)=>h.n-l.n).slice(0,2),s=Math.round(a*Q1),u=[];for(const l of s2(o,i)){const h=l.poly.map(w=>w[0]),c=l.poly.map(w=>w[1]);if(h.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...h))-s),f=Math.max(0,Math.trunc(Math.min(...c))-s),m=Math.min(e,Math.trunc(Math.max(...h))+s),y=Math.min(t,Math.trunc(Math.max(...c))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function u2(e,t,n){if(!e||e.length<4)return null;const[r,i,a,o]=[e[0],e[1],e[2],e[3]];return a2(a,o,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(a),Math.round(o)]:null}function l2(e,t,n,r,i){return Om(e,t,n,r,i)}function c2(e,t){var s,u,l,h;const[n,r,i,a]=t,o=[];for(const c of e){const p=Number((s=c.box)==null?void 0:s[0]),f=Number((u=c.box)==null?void 0:u[1]),m=Number((l=c.box)==null?void 0:l[2]),y=Number((h=c.box)==null?void 0:h[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>a||o.push({...c,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return o}function d2(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,a=r.y+r.height/2;let o=!1;for(const s of t){if(n.id&&s.id===n.id){o=!0;break}const u=s.boundingBox,l=u.x+u.width/2,h=u.y+u.height/2,c=.5*Math.min(u.width,u.height);if((i-l)**2+(a-h)**2<c*c){o=!0;break}}o||t.push(n)}return t}function zm(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const h2=1.1,p2=3.2,f2=20,m2=.5,g2=1280,y2=.18,w2=28,_2=.3;function b2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let o=0;o<30;o++){const s=e.filter(h=>h<=r),u=e.filter(h=>h>r);if(s.length===0||u.length===0)return[e.map((h,c)=>c)];const l=(s.reduce((h,c)=>h+c,0)/s.length+u.reduce((h,c)=>h+c,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],a=[];return e.forEach((o,s)=>(o<=r?i:a).push(s)),[i,a]}function x2(e,t,n=h2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const a=e.map(l=>l[0]+l[2]/2),o=e.map(l=>l[1]+l[3]/2),s=Math.max(...a)-Math.min(...a)>Math.max(...o)-Math.min(...o)?a:o,u=[];for(const l of b2(s)){if(l.length===0)continue;const h=l.map(A=>e[A]),c=h.map(A=>Math.min(A[2],A[3])).sort((A,R)=>A-R),p=c[Math.trunc(c.length/2)],f=p2*p,m=Math.max(0,Math.min(...h.map(A=>A[0]))-f),y=Math.max(0,Math.min(...h.map(A=>A[1]))-f),w=Math.min(r,Math.max(...h.map(A=>A[0]+A[2]))+f),b=Math.min(i,Math.max(...h.map(A=>A[1]+A[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const M=m2*p*g2/x,S=M>0?Math.max(1,Math.ceil(f2/M)):1;if(S===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const T=w-m>=b-y,k=(T?w-m:b-y)/S,v=k*(1+y2);for(let A=0;A<S;A++){let R=(T?m:y)+A*k-(v-k)/2;R=Math.max(T?m:y,R);const X=Math.min(T?w:b,R+v);u.push(T?[Math.trunc(R),Math.trunc(y),Math.trunc(X),Math.trunc(b)]:[Math.trunc(m),Math.trunc(R),Math.trunc(w),Math.trunc(X)])}}return u.filter(([l,h,c,p])=>Math.max(r,i)/Math.max(1,Math.max(c-l,p-h))>=n)}function $2(e,t,n,r=w2){const[i,a]=n,o=e;for(const[s,u,l,h]of t){const c=(s+l)/2+i,p=(u+h)/2+a;o.some(([m,y,w,b])=>{const x=c-(m+w)/2,M=p-(y+b)/2;return Math.hypot(x,M)<=r})||o.push([s+i,u+a,l+i,h+a])}return o}function v2(e,t,n,r=_2){for(const i of n){const a=r*Math.min(i[2],i[3]);if(i[0]-a<=e&&e<=i[0]+i[2]+a&&i[1]-a<=t&&t<=i[1]+i[3]+a)return!0}return!1}function S2(e,t,n){return n.some(([r,i,a,o])=>r<=e&&e<=a&&i<=t&&t<=o)}function M2(e,t,n,r){return n.length===0?!1:S2(e,t,n)&&!v2(e,t,r)}const Nm=4,Bm=8,ui=5,Cn="base-game rule";function zt(e,t){return{code:e,message:t,severity:"warning"}}function Do(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function T2(e,t=""){const n=e.filter(o=>!!o),r=t||"a player",i=[];n.length>Nm&&i.push(zt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${Nm} (${Cn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const a=Do(n);return a.length>0&&i.push(zt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${a.join(", ")}. Only one copy of each wonder exists (${Cn}), so one of the two readings is wrong.`)),i}function E2(e){const t=[],n=Object.entries(e).map(([i,a])=>[i,new Set(a.filter(o=>!!o))]),r=Object.values(e).reduce((i,a)=>i+a.filter(Boolean).length,0);r>Bm&&t.push(zt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${Bm} are in play (${Cn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[a,o]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],h=[...o].filter(c=>l.has(c)).sort();h.length>0&&t.push(zt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${a} and ${u}): ${h.join(", ")} — the city split misread one of them.`))}}return t}function I2(e,t=null){const n=[],r=Object.values(e).flatMap(a=>a.filter(o=>!!o));r.length>ui&&n.push(zt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${ui} are in play (${Cn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Do(r);if(i.length>0&&n.push(zt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Cn}).`)),t!==null){const a=t.filter(Boolean),o=r.length+a.length;o!==ui&&n.push(zt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${o}, but exactly ${ui} are in play (${Cn}) — one is missing or one was counted twice.`));const s=new Set(a),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(zt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function k2(e,t=""){const n=t||"a player",r=[],i=e.filter(o=>!o).length;i>0&&r.push(zt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const a=Do(e.filter(o=>!!o));return a.length>0&&r.push(zt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${a.join(", ")}. Only one copy of each guild exists (${Cn}).`)),r}const C2=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],A2=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],R2=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],O2=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],z2=[...A2,...R2,...O2,...C2];Object.fromEntries(z2.map(e=>[e.id,e]));const N2=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Pm=.2,B2=.3,Dm=.25;function P2(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=Dm)return!1;const i=e.x+e.width,a=e.y+e.height;for(const o of n){const s=o.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const h=s[2]/s[3];if(!(Math.abs(Math.log(h))<=Dm)&&r>1==h>1)return!0}return!1}async function D2(e,t,n){const[r,i,a,o]=t;if(a<=0||o<=0)return null;const s=Math.round(a*Pm),u=Math.round(o*Pm),l=Math.max(0,Math.round(r-s)),h=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+s)),p=Math.min(e.height,Math.round(i+o+u)),f=c-l,m=p-h;if(f<=0||m<=0)return null;const y=e.channels,w=new Uint8ClampedArray(f*m*y);for(let M=0;M<m;M++){const S=((h+M)*e.width+l)*y;w.set(e.data.subarray(S,S+f*y),M*f*y)}const b={width:f,height:m,channels:y,data:w};let x=null;for(let M=0;M<4;M++){const S=M===0?b:Wt(b,M),T=S.width,I=T-Math.floor(B2*T),k=T-I;if(k<=0)continue;const v=new Uint8ClampedArray(k*S.height*S.channels);for(let q=0;q<S.height;q++){const z=(q*T+I)*S.channels;v.set(S.data.subarray(z,z+k*S.channels),q*k*S.channels)}const A={width:k,height:S.height,channels:S.channels,data:v},R=Ao(A),P=(await n.run({[n.inputNames[0]]:new qe("float32",R,[1,3,Ot,Ot])}))[n.outputNames[0]].data[1]??0;x=x===null?P:Math.max(x,P)}return x}async function Um(e,t,n,r,i,a,o){var f;const s=(m,y,w,b)=>{const x=Math.max(0,Math.round(m)),M=Math.max(0,Math.round(y)),S=Math.min(n.width,Math.round(m+w)),T=Math.min(n.height,Math.round(y+b)),I=S-x,k=T-M;if(I<=0||k<=0)return null;const v=n.channels,A=new Uint8ClampedArray(I*k*v);for(let R=0;R<k;R++){const X=((M+R)*n.width+x)*v;A.set(n.data.subarray(X,X+I*v),R*I*v)}return{width:I,height:k,channels:v,data:A}},u=async m=>(await i.run({[i.inputNames[0]]:new qe("float32",m,[1,3,jn,jn])}))[i.outputNames[0]].data,l=new Map;for(const m of r){const[y,w,b,x]=m;if(b<=0||x<=0)continue;const M=s(y,w,b,x);if(M===null)continue;const{id:S,prob:T}=await a1(M,u);if(S===""||T<e1)continue;const I=l.get(S);(I===void 0||T>I.prob)&&l.set(S,{prob:T,box:m})}const h=[],c=await e.tuckClassifier(),p=await e.tuckBoxClassifier();for(const[m,{prob:y,box:w}]of l){const[b,x,M,S]=w;let T={x:Math.round(b),y:Math.round(x),width:Math.round(M),height:Math.round(S)},I=null,k=[],v=null;if(Date.now()<a)try{const Z=await e.wonderRef(m);if(Z!==null){const N=pm(t,n,Z,w);if(N!==null){I=N.footprint,k=N.overflow;const G=I.map(L=>L[0]),O=I.map(L=>L[1]),H=Math.max(0,Math.round(Math.min(...G))),F=Math.max(0,Math.round(Math.min(...O)));if(T={x:H,y:F,width:Math.min(n.width,Math.round(Math.max(...G)))-H,height:Math.min(n.height,Math.round(Math.max(...O)))-F},c!==null)try{const L=hm(t,n,Z,I);if(L!==null){const W=Ao(L),U=await c.run({[c.inputNames[0]]:new qe("float32",W,[1,3,Ot,Ot])});v=mm(U[c.outputNames[0]].data).prob}}catch{}}}}catch(Z){console.warn(`[wonders-cls] ${m} registration failed:`,Z)}const A=I!==null?ko(I,k):null,R=[];if(v!==null&&R.push(v>=Co?1:0),p!==null)try{const Z=await D2(n,w,p);Z!==null&&R.push(Z>=Co?1:0)}catch{}const X=A??T,P=o.some(Z=>{const N=Z.box[0]+Z.box[2]/2,G=Z.box[1]+Z.box[3]/2;return N>=X.x&&N<=X.x+X.width&&G>=X.y&&G<=X.y+X.height});R.push(P?1:0);let q=R.length>0&&R.reduce((Z,N)=>Z+N,0)*2>R.length;q&&P2(X,T,o)&&(q=!1);const z={id:m,name:((f=N2[m])==null?void 0:f.name)??m,builtWithCardUnderneath:q,boundingBox:T,confidence:Math.round(y*1e4)/1e4,...A?{tuckRegion:A}:{}},j=A??T;h.push({obj:z,edgeScores:null,zone:{x0:j.x,y0:j.y,x1:j.x+j.width,y1:j.y+j.height},quad:I,region:A})}return h}async function U2(e,t,n,r,i,a){const o=await e.localiseWonders(n);return o.length===0?[]:Um(e,t,n,o,r,i,a)}function L2(e,t){const n=zm(e.obj.boundingBox,t),r=e.region===null?null:zm(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([a,o])=>[a+t[0],o+t[1]]),region:r}}async function F2(e){try{const t=l2(e.image.width,e.image.height,e.banners.map(o=>o.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const o of t){const s=e.cropFrame(o);if(!(s.width<=0||s.height<=0))for(const u of await e.detect(s,c2(e.banners,o)))n.push(L2(u,o))}if(n.length===0)return[];const r=[...e.known.map(o=>({boundingBox:o.boundingBox,id:o.id,neuf:-1})),...n.map((o,s)=>({boundingBox:o.obj.boundingBox,id:o.obj.id,neuf:s}))],i=d2(r),a=[];for(const o of i){const s=o.neuf;s>=0&&a.push(n[s])}return a}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const Be="/7wd-scorer/models/";let Lm=!1;const li=new Map;function Fm(){var e;Lm||(Ue.wasm.wasmPaths="/7wd-scorer/ort/",Ue.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Lm=!0)}const Uo=new Set;function G2(e){Fm();let t=li.get(e);return t===void 0&&(t=tt.create(`${Be}${ut[e].onnx}`,{executionProviders:Uo.has(e)?["wasm"]:["webgpu","wasm"]}),li.set(e,t),t.catch(()=>li.delete(e))),t}let Lo=null,Fo=null;const W2=.75,q2=4,V2=.65,H2=3e4;let Go=null;function ci(){return Go===null&&(Go=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),Go}const Gm=new Map;function Wo(e){let t=Gm.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Be}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const o=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(o.data.buffer)}}catch{return null}})(),Gm.set(e,t)),t}function qo(e){return Wo(`wonder-refs/${e}.jpg`)}const Wm=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function j2(){const e=new Map;for(const t of Wm){const n=await Wo(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function K2(){const e=new Map;for(const t of Wm){const n=await Wo(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const Y2=.6,X2=12,Z2=45e3;let Vo=null;function qm(){return Vo===null&&(Fm(),Vo=(async()=>{try{const[e,t,n,r]=await Promise.all([tt.create(`${Be}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),tt.create(`${Be}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Be}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Be}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:c_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Vo}async function Q2(e,t){const n=Math.max(l_/qt,t.width/t.height),{tensor:r,width:i}=h_(t,n),a={[e.rec.inputNames[0]]:new qe("float32",r,[1,3,qt,i])},o=(await e.rec.run(a))[e.rec.outputNames[0]],[s,u,l]=o.dims,h=o.data,c=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=h[w+b];x>y&&(y=x,m=b)}c[f]=m,p[f]=y}return d_(c,p,e.charset)}async function J2(e,t){const n=await qm();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+Z2;let a=!1;e:for(const o of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${o*90}°…`,o/4);const s=Wt(e,o),u=Jw(s),l={[n.det.inputNames[0]]:new qe("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(l))[n.det.outputNames[0]],c=a_(h.data,u,s.width,s.height).slice(0,X2);console.debug(`[wonders-ocr] rot ${o*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){a=!0;break e}const f=o_(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await Q2(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<Y2||m.trim().length<q2)continue;const w=__(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<W2||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:Ho(p,o,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Ho(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],o=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],s=o.map(c=>c[0]),u=o.map(c=>c[1]),l=Math.min(...s),h=Math.min(...u);return{x:l,y:h,width:Math.max(...s)-l,height:Math.max(...u)-h}}function ex(){return Fo===null&&(Fo=fetch(`${Be}laurel_gallery.json`).then(async e=>e.ok?Fw(await e.json()):[]).catch(()=>[])),Fo}function tx(e,t,n,r){return Ht(e,t-r,n-r,2*r,2*r)}function Ht(e,t,n,r,i){const a=Math.max(0,Math.round(t)),o=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-a),h=Math.max(0,u-o),c=new Uint8Array(l*h*3);for(let p=0;p<h;p++)for(let f=0;f<l;f++){const m=((p+o)*e.width+(f+a))*e.channels,y=(p*l+f)*3;c[y]=e.data[m],c[y+1]=e.data[m+1],c[y+2]=e.data[m+2]}return{width:l,height:h,channels:3,data:c}}function nx(){return Lo===null&&(Lo=fetch(`${Be}token_templates.json`).then(async e=>e.ok?Nb(await e.json()):new Map).catch(()=>new Map)),Lo}let jo=null;function rx(){return jo===null&&(jo=(async()=>{try{const e=await fetch(`${Be}token_embed_index.json`);if(!e.ok)return null;const t=Wb(await e.json());return{session:await tt.create(`${Be}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),jo}const ix=.92;let Ko=null;function ax(){return Ko===null&&(Ko=(async()=>{try{return(await fetch(`${Be}guild_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ko}let Yo=null;function ox(){return Yo===null&&(Yo=(async()=>{try{return(await fetch(`${Be}laurel_digit.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Yo}let Xo=null,Zo=null;function sx(){return Zo===null&&(Zo=(async()=>{try{return(await fetch(`${Be}banner_class.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}banner_class.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Zo}async function ux(e,t){if(t.length===0)return t;const n=await sx();if(n===null)return t;const r=[];for(const i of t)try{const a=y1(i.box,e.width,e.height);if(a===null){r.push(i);continue}const o=Ht(e,a.x,a.y,a.w,a.h),s=w1(o),u=await n.run({[n.inputNames[0]]:new qe("float32",s,[1,3,un,un])});_1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function lx(){return Xo===null&&(Xo=(async()=>{try{return(await fetch(`${Be}laurel_filter.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Xo}async function cx(e,t,n){const[r,i,a,o]=t,s=a-r,u=o-i;if(s<=0||u<=0)return null;const l=Math.trunc(Em*s),h=Math.trunc(Em*u),c=Math.max(0,r-l),p=Math.max(0,i-h),f=Math.min(e.width,a+l),m=Math.min(e.height,o+h),y=Ht(e,c,p,f-c,m-p);if(y.width<=0||y.height<=0)return null;try{const w=h1(y),b=await n.run({[n.inputNames[0]]:new qe("float32",w,[1,3,sn,sn])});return p1(b[n.outputNames[0]].data)}catch{return null}}let Qo=null;function dx(){return Qo===null&&(Qo=(async()=>{try{return(await fetch(`${Be}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}coin_filter_cnn.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Qo}async function hx(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=B1(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const h=new Float32Array(t.length*3*ln*ln);l.forEach((f,m)=>h.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new qe("float32",h,[t.length,3,ln,ln])}))[n.outputNames[0]].data;return t.map((f,m)=>P1(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const a=t.map(u=>u.r).sort((u,l)=>u-l),o=a.length%2===1?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,s=Math.trunc(o);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,h)=>Math.max(l,u[h]))}return i}catch{return null}}let Jo=null;function Vm(){return Jo===null&&(Jo=(async()=>{try{return(await fetch(`${Be}tuck_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Jo}const Hm=.1;let es=null;function jm(){return es===null&&(es=(async()=>{try{return(await fetch(`${Be}track_band.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),es}async function Km(e,t,n){try{const r=fo(t,1280,Vy(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new qe("float32",r.tensor,[1,3,1280,1280])});return wr(i[e.outputNames[0]].data,r.params,Hm)}catch{return[]}}let ts=null;const px=.4;function fx(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function mx(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const o=a.x+a.width/2,s=a.y+a.height/2;for(const u of n)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||fx(a,u)>=px)return!1;for(const u of r)if(o>=u.x&&o<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function gx(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${Be}tuck_box.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ts}let ns=null;function yx(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${Be}wonder_classifier.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ns}const Ym={wonderRef:qo,tuckClassifier:Vm,tuckBoxClassifier:gx,localiseWonders:async e=>{try{const{rows:t,params:n}=await ft("wonder",e);return mo(t,n,ut.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function wx(e,t){const n=await rx();if(n!==null)try{const r=Vb(e),i=new qe("float32",r,[4,3,on,on]),o=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=jb(n.index,Hb(o));return u<ix?["",-1]:[s,u]}catch{}return Ub(e,t)}async function rs(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function ft(e,t){const n=ut[e],{tensor:r,params:i}=fo(t,n.input),a=async()=>{const o=await G2(e),s={[o.inputNames[0]]:new qe("float32",r,[1,3,n.input,n.input])};return{rows:(await o.run(s))[o.outputNames[0]].data,params:i}};try{return await a()}catch(o){if(Uo.has(e))throw o;return Uo.add(e),li.delete(e),await a()}}const _x=6,bx=4,xx=5,$x=2;async function vx(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await rs(e),r=await ft("banner",n),i=ei(r.rows,r.params,ut.banner.conf);if(t.banners=i.length,i.length>=_x)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await ft("laurel",n),o=wr(a.rows,a.params,ut.laurel.conf);if(t.laurels=o.length,o.length>=bx)return{...t,kind:"player",confidence:Math.min(1,o.length/8)};const s=await ft("coin",n),u=Kf(s.rows,s.params,ut.coin.conf);return t.coins=u.length,u.length>=xx?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=$x?{...t,kind:"board",confidence:.4}:t}function Sx(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function is(e,t,n,r,i=()=>{},a="player",o){const s={},u=[],l=[],h=[],c=[],p=[],f=[];let m=0,y=0,w=0,b=0,x=0;for(const v of e){x+=1;const A=`${t} photo ${x}/${e.length}`;r(`${A}: reading pixels…`,.01);const R=await rs(v);r(`${A}: card banners…`,.04);const X=await ft("banner",R);let P=ei(X.rows,X.params,ut.banner.conf);P=await ux(R,P),r(`${A}: progress tokens…`,.08);let q=[];const z=await jm();z!==null&&(q=await Km(z,R,P)),q.length>0&&P.length>0&&(P=P.filter(D=>{const Q=D.box[0]+D.box[2]/2,J=D.box[1]+D.box[3]/2;return!q.some(([ne,oe,ce,ke])=>Math.min(ne,ce)<=Q&&Q<=Math.max(ne,ce)&&Math.min(oe,ke)<=J&&J<=Math.max(oe,ke))}));const j=await ft("token",R),Z=await nx(),N=h.length,G=[];for(const D of nw(j.rows,j.params,ut.token.conf)){if(G.push({cx:D.cx,cy:D.cy,r:D.r}),q.some(([ne,oe,ce,ke])=>D.cx>=ne&&D.cx<=ce&&D.cy>=oe&&D.cy<=ke))continue;const[Q,J]=await wx(tm(R,D),Z);Q===""&&J<0?G.pop():Q===""?y+=1:h.some(ne=>ne.id===Q)||h.push({id:Q,center:[D.cx,D.cy],radius:D.r,confidence:Math.round(J*1e4)/1e4})}r(`${A}: coins…`,.14);const O=await ft("coin",R),H=Kf(O.rows,O.params,ut.coin.conf).filter(D=>!G.some(Q=>(D.cx-Q.cx)**2+(D.cy-Q.cy)**2<=D.r*D.r)),F=await dx(),L=F!==null?await hx(R,H,F):null,W=(L!==null?H.filter((D,Q)=>L[Q]>=Am).map(D=>D.r):[]).sort((D,Q)=>D-Q),U=W.length>0?W.length%2===1?W[(W.length-1)/2]:(W[W.length/2-1]+W[W.length/2])/2:null,[re,ue]=N1,ie=H.map((D,Q)=>{const J=L!==null?L[Q]:null;return J===null||J>=Am?"keep":U!==null&&U>0&&D.r/U>=re&&D.r/U<=ue?"suspect":"drop"}),xe=H.filter((D,Q)=>ie[Q]==="keep"),Ge=Tw(R,xe),ze=[];let Ke=0;if(H.forEach((D,Q)=>{if(ie[Q]!=="drop"){if(ie[Q]==="suspect"){const J=L[Q];ze.push({denomination:null,center:[D.cx,D.cy],radius:D.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${J.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}ze.push({denomination:Ge[Ke++],center:[D.cx,D.cy],radius:D.r,denomSource:"colour"})}}),H.length>0&&ze.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${H.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ze.length>=2){const D=ze.map(J=>J.radius).sort((J,ne)=>J-ne),Q=D.length%2===1?D[(D.length-1)/2]:(D[D.length/2-1]+D[D.length/2])/2;if(Q>0)for(const J of ze)J.radius/Q>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}const rt=c.length,Se=[],we=[],Ye=Date.now()+H2;let Xe=null,jt=null;const It=()=>(jt===null&&(jt=(async()=>{try{const{rows:D,params:Q}=await ft("wonder",R);return mo(D,Q,ut.wonder.conf,Number.POSITIVE_INFINITY).map(J=>J.box)}catch{return[]}})()),jt),mt=[];let An=!1;const gt=await yx();if(gt!==null){const D=await It();if(D.length>0&&(Xe=await ci(),Xe!==null)){r(`${A}: identifying wonders…`,.35);const Q=await Um(Ym,Xe,R,D,gt,Ye,P);for(const J of Q)c.some(ne=>ne.id===J.obj.id)||(c.push(J.obj),mt.push({obj:J.obj,edgeScores:J.edgeScores,zone:J.zone}),Se.push(J.zone),we.push({quad:J.quad,region:J.region}));An=Q.length>0}}An||r(`${A}: wonder names…`,.2);const cn=An?{wonders:[],aborted:!1}:await J2(R,(D,Q)=>r(`${A}: ${D}`,.2+.35*(Q??0)));Xe===null&&(Xe=cn.wonders.length>0?await ci():null);for(const D of cn.wonders){let Q=null;if(Xe!==null&&Date.now()<Ye){r(`${A}: registering ${D.name}…`,.6);try{const J=await qo(D.id);if(J!==null){let ne=A_(Xe,R,J,[[D.nameBox.x,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y+D.nameBox.height],[D.nameBox.x,D.nameBox.y+D.nameBox.height]]);if(ne===null){const oe=await It(),ce=B_(oe,D.nameBox.x+D.nameBox.width/2,D.nameBox.y+D.nameBox.height/2);ce!==null&&(ne=pm(Xe,R,J,ce))}if(ne!==null){let oe=ne.built,ce=!1;const ke=await Vm();if(ke!==null)try{const me=hm(Xe,R,J,ne.footprint);if(me!==null){const $e=Ao(me),Fe=await ke.run({[ke.inputNames[0]]:new qe("float32",$e,[1,3,Ot,Ot])});oe=mm(Fe[ke.outputNames[0]].data).built,ce=!0}}catch{}const ge=ne.footprint.map(me=>me[0]),pe=ne.footprint.map(me=>me[1]),fe=Math.max(0,Math.round(Math.min(...ge))),de=Math.max(0,Math.round(Math.min(...pe)));Q={built:oe,boundingBox:{x:fe,y:de,width:Math.min(R.width,Math.round(Math.max(...ge)))-fe,height:Math.min(R.height,Math.round(Math.max(...pe)))-de},tuckRegion:ko(ne.footprint,ne.overflow),footprint:ne.footprint,edgeScores:ne.edgeScores,builtByTuck:ce}}}}catch(J){console.warn(`[wonders-reg] ${D.id} failed:`,J)}}if(Q!==null){const J=Q.tuckRegion??Q.boundingBox;Se.push({x0:J.x,y0:J.y,x1:J.x+J.width,y1:J.y+J.height}),we.push({quad:Q.footprint,region:Q.tuckRegion})}else{const J=Math.max(8,D.nameBox.height),ne=Math.round(D.nameBox.width*.15);Se.push({x0:D.nameBox.x-ne,y0:D.nameBox.y-J*2.5,x1:D.nameBox.x+D.nameBox.width+ne,y1:D.nameBox.y+D.nameBox.height+J*2.5}),we.push({quad:null,region:null})}if(!c.some(J=>J.id===D.id)){const J=(Q==null?void 0:Q.builtByTuck)===!0,ne=J?Q.built:!1,oe=!J&&(Q==null?void 0:Q.built)===!0,ce={id:D.id,name:D.name,builtWithCardUnderneath:ne,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:D.confidence,...oe?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};c.push(ce),mt.push({obj:ce,edgeScores:Q&&!Q.builtByTuck?Q.edgeScores:null,zone:Se[Se.length-1]})}}if(!An){const D=U_(mt.map(Q=>({built:Q.obj.builtWithCardUnderneath,edgeScores:Q.edgeScores,zone:Q.zone})),P.map(Q=>[Q.box[0]+Q.box[2]/2,Q.box[1]+Q.box[3]/2]));for(const Q of D){const J=mt[Q];J.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${J.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(P.length>0){const Q=new Set(D);for(let J=0;J<mt.length;J++){const ne=mt[J];if(Q.has(J)||!ne.obj.builtWithCardUnderneath)continue;const oe=ne.obj.tuckRegion;if(oe===void 0)continue;if(!P.some(ke=>{const ge=ke.box[0]+ke.box[2]/2,pe=ke.box[1]+ke.box[3]/2;return ge>=oe.x&&ge<=oe.x+oe.width&&pe>=oe.y&&pe<=oe.y+oe.height})){const ke=ne.obj;ke.builtWithCardUnderneath=!1,ke.suspect=!0,ke.suspectReason="built-unconfirmed"}}}}if(cn.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${A}: the wonder-name read ran out of its time budget on this device — ${cn.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Xe!==null&&cn.wonders.length>0&&Date.now()<Ye)try{const D=await qm(),Q=(D==null?void 0:D.catalog.filter(ne=>ne.kind==="wonder").map(ne=>ne.id))??[],J=new Map;for(const ne of Q)if(!c.some(oe=>oe.id===ne)){const oe=await qo(ne);oe!==null&&J.set(ne,oe)}if(J.size>0){r(`${A}: searching occluded wonders…`,.7);const ne=C_(Xe,R,J,Ye);for(const oe of ne){const ce=oe.footprint.map(Fe=>Fe[0]),ke=oe.footprint.map(Fe=>Fe[1]),ge=Math.max(0,Math.round(Math.min(...ce))),pe=Math.max(0,Math.round(Math.min(...ke))),fe={x:ge,y:pe,width:Math.min(R.width,Math.round(Math.max(...ce)))-ge,height:Math.min(R.height,Math.round(Math.max(...ke)))-pe};if(c.some(Fe=>{const Pe=Fe.boundingBox,dn=Math.max(0,Math.min(Pe.x+Pe.width,fe.x+fe.width)-Math.max(Pe.x,fe.x)),Nt=Math.max(0,Math.min(Pe.y+Pe.height,fe.y+fe.height)-Math.max(Pe.y,fe.y)),Ne=dn*Nt,He=Pe.width*Pe.height+fe.width*fe.height-Ne;return He>0&&Ne/He>k_}))continue;const me=D==null?void 0:D.catalog.find(Fe=>Fe.id===oe.id);c.push({id:oe.id,name:(me==null?void 0:me.nameFr)??(me==null?void 0:me.name)??oe.id,builtWithCardUnderneath:oe.built,boundingBox:fe,...oe.tuckRegion?{tuckRegion:oe.tuckRegion}:{},confidence:Math.round(oe.confidence*1e4)/1e4});const $e=oe.tuckRegion??fe;Se.push({x0:$e.x,y0:$e.y,x1:$e.x+$e.width,y1:$e.y+$e.height}),we.push({quad:oe.footprint.map(([Fe,Pe])=>[Fe,Pe]),region:oe.tuckRegion??null})}}}catch(D){console.warn("[wonders-reg] discovery failed:",D)}const Kt=a==="opponent";let Xn=(D,Q)=>!Kt,$r=(D,Q)=>!Kt;try{let D=c.slice(rt);const Q=[];P.forEach((pe,fe)=>{const de=pe.box[0]+pe.box[2]/2,me=pe.box[1]+pe.box[3]/2;Se.some($e=>de>=$e.x0&&de<=$e.x1&&me>=$e.y0&&me<=$e.y1)||Q.push(fe)});const J=[],ne=[];D.forEach((pe,fe)=>{const de=pe.boundingBox;de&&de.width>0&&(J.push(fe),ne.push([de.x,de.y,de.width,de.height]))});const oe=pe=>{const fe=[];return pe.forEach((de,me)=>{const $e=de.box[0]+de.box[2]/2,Fe=de.box[1]+de.box[3]/2;Se.some(Pe=>$e>=Pe.x0&&$e<=Pe.x1&&Fe>=Pe.y0&&Fe<=Pe.y1)||fe.push(me)}),fe};let ce=Bo(P.map(pe=>pe.box),Q,ne,q,[R.width,R.height]);if(gt!==null){r(`${A}: seconde passe merveilles (crop de cité)…`,.42);const fe=(await F2({image:R,banners:P,hulls:ce.hulls.map(([de,me],$e)=>({owner:de,poly:me,n:ce.hullBoxCounts[$e]??0})),wonderBoxes:ne,known:D,cropFrame:([de,me,$e,Fe])=>Ht(R,de,me,$e-de,Fe-me),detect:async(de,me)=>(Xe===null&&(Xe=await ci()),Xe===null?[]:U2(Ym,Xe,de,gt,Ye,me))})).filter(de=>!c.some(me=>me.id===de.obj.id));if(fe.length>0){for(const de of fe)c.push(de.obj),Se.push(de.zone),we.push({quad:de.quad,region:de.region});D=c.slice(rt),J.length=0,ne.length=0,D.forEach((de,me)=>{const $e=de.boundingBox;$e&&$e.width>0&&(J.push(me),ne.push([$e.x,$e.y,$e.width,$e.height]))}),ce=Bo(P.map(de=>de.box),oe(P),ne,q,[R.width,R.height])}}try{const pe=Om(R.width,R.height,P.map(fe=>fe.box),ce.hulls.map(([fe,de],me)=>({owner:fe,poly:de,n:ce.hullBoxCounts[me]??0})),ne);if(pe.length>0){const fe=Po(P.map(me=>me.box)),de=[];for(const me of pe){const[$e,Fe,Pe,dn]=me,Nt=Ht(R,$e,Fe,Pe-$e,dn-Fe);if(Nt.width<=0||Nt.height<=0)continue;const Ne=await ft("banner",Nt);for(const He of ei(Ne.rows,Ne.params,ut.banner.conf)){const ot=u2(He.box,me,fe);ot&&de.push({...He,box:ot})}}if(de.length>0){const me=Zf([...P,...de]);me.length>P.length&&(P=me,ce=Bo(P.map($e=>$e.box),oe(P),ne,q,[R.width,R.height]))}}}catch(pe){console.warn("[#129 city-rescan] skipped:",pe)}o!==void 0&&(o.hulls=ce.hulls.map(([pe,fe],de)=>({owner:pe,poly:fe,n:ce.hullBoxCounts[de]??0})),o.bandBoxes=q,o.image=R),Xn=(pe,fe)=>ce.pointOwner(pe,fe)==="opponent"===Kt;const ke=Kt?"opponent":"player";$r=(pe,fe)=>ce.pointOwner(pe,fe)===ke,P=P.filter((pe,fe)=>ce.bannerOwner[fe]==="opponent"===Kt);const ge=D.map(()=>"player");J.forEach((pe,fe)=>{ge[pe]=ce.wonderOwner[fe]});for(let pe=D.length-1;pe>=0;pe-=1)ge[pe]==="opponent"!==Kt&&c.splice(rt+pe,1);Se.length=0;for(const pe of c.slice(rt)){const fe=pe.tuckRegion??pe.boundingBox;fe&&Se.push({x0:fe.x,y0:fe.y,x1:fe.x+fe.width,y1:fe.y+fe.height})}for(let pe=h.length-1;pe>=N;pe-=1){const[fe,de]=h[pe].center;Xn(fe,de)||h.splice(pe,1)}}catch(D){console.warn("[city-split] failed (side unfiltered):",D)}for(const D of ze)$r(D.center[0],D.center[1])&&(m+=D.denomination??0,l.push(D));const kt=new Set,hi=[],Zn=Po(P.map(D=>D.box));we.forEach((D,Q)=>{if(D.quad===null||D.region===null){const ce=Se[Q];ce&&hi.push(ce);return}const J=D.region,ne=[];P.forEach((ce,ke)=>{const ge=ce.box[0]+ce.box[2]/2,pe=ce.box[1]+ce.box[3]/2;ge>=J.x&&ge<=J.x+J.width&&pe>=J.y&&pe<=J.y+J.height&&ne.push([ke,ce.box])});const oe=z1(D.quad,ne,Zn);oe!==null&&kt.add(oe)});let ht=[],vr=0;P.forEach((D,Q)=>{if(kt.has(Q)){b+=1,vr+=1;return}const J=D.box[0]+D.box[2]/2,ne=D.box[1]+D.box[3]/2;if(hi.some(oe=>J>=oe.x0&&J<=oe.x1&&ne>=oe.y0&&ne<=oe.y1)){b+=1,vr+=1;return}ht.push(D)});const Yt=E1(ht,vr,q,R.width,R.height);ht=Yt.kept;for(const D of ht)s[D.family]=(s[D.family]??0)+1,w+=1;const Qn=cw(ht),Rn=new Set(Qn.map(D=>D.box.join(",")));for(const D of hw(ht))Rn.has(D.box.join(","))||(Qn.push(D),Rn.add(D.box.join(",")));for(const D of Yt.suspects)Rn.has(D.box.join(","))||(Qn.push(D),Rn.add(D.box.join(",")));for(const D of Qn)f.push(D);if(ht.some(D=>D.family==="guild")){const D=await ax();if(D!==null){r(`${A}: identifying guilds…`,.75);for(const Q of ht)if(Q.family==="guild")try{const[J,ne,oe,ce]=Q.box,ke=Ht(R,J,ne,oe,ce),ge=Xb(ke),pe={[D.inputNames[0]]:new qe("float32",ge,[1,3,Hn,Hn])},de=(await D.run(pe))[D.outputNames[0]].data,{id:me,prob:$e}=Zb(de);me!==""&&!p.some(Fe=>Fe.id===me)&&p.push({id:me,boundingBox:{x:J,y:ne,width:oe,height:ce},confidence:Math.round($e*1e4)/1e4})}catch(J){console.warn("[guild-cls] failed:",J)}}else if(Date.now()<Ye)try{const Q=Xe??await ci();if(Q!==null){const J=await j2();if(J.size>0){r(`${A}: identifying guilds…`,.75);const ne=await K2();for(const oe of Mb(Q,R,J,Ye,ne))p.some(ce=>ce.id===oe.id)||p.push(oe)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${A}: laurels…`,.8);const Sr=await ex(),Jn=[];for(const D of[0]){const Q=D===0?R:Wt(R,D),J=await ft("laurel",Q);for(const[ne,oe,ce,ke]of wr(J.rows,J.params,ut.laurel.conf)){const ge=Ho({x:ne,y:oe,width:ce-ne,height:ke-oe},D,R.width,R.height);Jn.push([ge.x,ge.y,ge.x+ge.width,ge.y+ge.height])}}let On=Yf(Jn);const pi=[];try{const D=x2(P.map(Q=>Q.box),[R.width,R.height]);for(const[Q,J,ne,oe]of D){const ce=Ht(R,Q,J,ne-Q,oe-J);if(ce.width<=0||ce.height<=0)continue;const ke=[];for(const ge of[0]){const pe=ge===0?ce:Wt(ce,ge),fe=await ft("laurel",pe);for(const[de,me,$e,Fe]of wr(fe.rows,fe.params,ut.laurel.conf)){const Pe=Ho({x:de,y:me,width:$e-de,height:Fe-me},ge,ce.width,ce.height);ke.push([Pe.x,Pe.y,Pe.x+Pe.width,Pe.y+Pe.height])}}if(On=$2(On,Yf(ke),[Q,J]),z!==null)try{const ge=fo(ce,1280,yr),pe=await z.run({[z.inputNames[0]]:new qe("float32",ge.tensor,[1,3,1280,1280])});for(const[fe,de,me,$e]of wr(pe[z.outputNames[0]].data,ge.params,Hm))pi.push([fe+Q,de+J,me+Q,$e+J])}catch{}}}catch(D){console.warn("[laurel-containers] failed:",D)}const us=[...q,...pi];On=On.filter(([D,Q,J,ne])=>!M2((D+J)/2,(Q+ne)/2,us,P.map(oe=>oe.box)));const er=await ox(),fi=await lx();for(const[D,Q,J,ne]of On){const oe=Math.trunc((D+J)/2),ce=Math.trunc((Q+ne)/2);if([...G,...H].some(Ne=>(oe-Ne.cx)**2+(ce-Ne.cy)**2<=Ne.r*Ne.r)||!Xn(oe,ce))continue;if(fi!==null){const Ne=await cx(R,[Math.trunc(D),Math.trunc(Q),Math.trunc(J),Math.trunc(ne)],fi);if(Ne!==null&&Ne>=d1)continue}const ge=Math.min(Math.trunc(J-D),Math.trunc(ne-Q)),pe=Math.max(6,Math.trunc(Math.max(J-D,ne-Q)*Rw)),fe=tx(R,oe,ce,pe);let de=null,me=0;const $e=new Map;if(ge>=6)for(const Ne of[0,1,2,3]){const He=Ne===0?fe:Wt(fe,Ne),[ot,Xt]=Hw(He,Sr);ot!==null&&($e.set(ot,Math.max($e.get(ot)??0,Xt)),Xt>me&&(de=ot,me=Xt))}de!==null&&me<V2&&(de=null);const Fe=me;if(er!==null&&ge>=6){const Ne=Ht(R,Math.trunc(D),Math.trunc(Q),Math.trunc(J-D),Math.trunc(ne-Q));let He=null,ot=0;for(const Xt of[0,1,2,3]){const ls=Xt===0?Ne:Wt(Ne,Xt),yt=u1(ls),Mr=await er.run({[er.inputNames[0]]:new qe("float32",yt,[1,3,Kn,Kn])}),{value:Tr,prob:Zt}=l1(Mr[er.outputNames[0]].data);Zt>ot&&(He=Tr,ot=Zt)}He!==null&&ot>=s1&&(de=He,me=ot)}const Pe=de!==null&&[...$e.entries()].some(([Ne,He])=>Ne!==de&&He>=Fe-.1),dn=Se.some(Ne=>oe>=Ne.x0&&oe<=Ne.x1&&ce>=Ne.y0&&ce<=Ne.y1),Nt=p.some(Ne=>{const He=Ne.boundingBox;return He!==void 0&&oe>=He.x&&oe<=He.x+He.width&&ce>=He.y&&ce<=He.y+He.height});u.push({value:de,valueRead:de!==null,center:[Math.round((D+J)/2),Math.round((Q+ne)/2)],boundingBox:{x:Math.trunc(D),y:Math.trunc(Q),width:Math.trunc(J-D),height:Math.trunc(ne-Q)},confidence:Math.round(me*1e4)/1e4,excluded:dn||Nt,photoIndex:x-1,...Pe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}b>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${b} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):w>0&&c.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const M=s.guild??0;M!==p.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${M} purple banner(s) counted but ${p.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+p.map(v=>v.id).join(", ")+" — confirm in the review."});const S=c.filter(v=>v.boundingBox.width===0);S.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${S.map(v=>v.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${c.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),y>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${y} token disc(s) found but not identified — pick them in the review below.`}),h.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+h.map(v=>v.id).join(", ")+" — confirm in the review."}),l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${m} from ${l.length} tile(s) by their metal COLOUR (the learned denomination model is server-only) — confirm the total.`});const T=mx(p,c);for(const v of[...T2(c.map(A=>A.id),t),...k2(T.map(A=>A.id),t)])n.push({code:"INCONSISTENT_STATE",message:v.message});const I=u.filter(v=>!v.excluded),k=I.filter(v=>v.valueRead);return{...Sx(),wonders:c,guilds:T,progressTokens:h,laurels:u,cardVictoryPoints:{value:k.reduce((v,A)=>v+(A.value??0),0),laurelsKept:I.length,laurelsUnread:I.length-k.length,complete:I.length===k.length},cardCounts:{byFamily:s,source:w>0?"yolo":"none",tuckedExcluded:b,...f.length>0?{suspects:f}:{}},coins:{total:m,confidence:l.length>0?.5:0,source:l.length>0?"local-colour":"none",coins:l}}}const Et=1280,Mx=.3,di=9;let as=null;function Xm(){return as===null&&(as=(async()=>{try{return(await fetch(`${Be}pawn_ends.onnx`,{method:"HEAD"})).ok?await tt.create(`${Be}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),as}function Tx(e){const t=Et/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(Et,Et).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,Et,Et),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,Et,Et),l=Et*Et,h=new Float32Array(3*l);for(let c=0;c<l;c+=1)h[c]=u[c*4]/255,h[l+c]=u[c*4+1]/255,h[2*l+c]=u[c*4+2]/255;return{tensor:h,r:t}}async function Ex(e,t){const{tensor:n,r}=Tx(t),a=(await e.run({[e.inputNames[0]]:new qe("float32",n,[1,3,Et,Et])}))[e.outputNames[0]].data,o=new Map;for(let s=0;s+5<a.length;s+=6){const u=a[s+4];if(u<Mx)continue;const l=Math.round(a[s+5]),h=o.get(l);if(h===void 0||u>h.conf){const c=(a[s]+a[s+2])/2/r,p=(a[s+1]+a[s+3])/2/r;o.set(l,{conf:u,cx:c,cy:p})}}return o}async function os(e,t){let n=null;for(let w=0;w<4;w+=1){const b=w===0?t:Wt(t,w),x=await Ex(e,b);if(x.has(0)&&x.has(1)&&x.has(2)){const M=x.get(0).conf+x.get(1).conf+x.get(2).conf;(n===null||M>n.score)&&(n={score:M,det:x,k:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),o=a.cx-i.cx,s=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,h=o*o+s*s;if(h<=0)return null;const c=((r.cx-u)*o+(r.cy-l)*s)/h*(2*di),p=Math.min(di,Math.max(-di,at(c))),f=Math.min(r.conf,i.conf,a.conf),m=(w,b)=>{const x=n.k%4;return x===0?[w,b]:x===1?[b,t.height-1-w]:x===2?[t.width-1-w,t.height-1-b]:[t.width-1-b,w]},y=[i,a].map(w=>{const[b,x]=m(w.cx,w.cy);return[at(b),at(x)]});return{position:p,confidence:Math.round(f*1e4)/1e4,ends:y}}async function Zm(e,t,n){let r=null;for(const i of n){const a=Hy(t.width,t.height,i);if(a===null)continue;const o=Ht(t,a.x,a.y,a.width,a.height);if(o.width===0||o.height===0)continue;const s=await os(e,o);s!==null&&(r===null||s.confidence>r.confidence)&&(r={...s,ends:s.ends.map(([u,l])=>[u+a.x,l+a.y])})}return r}async function Ix(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let a=0;const o=(f,m=0)=>{t(f,i>0?Math.min(.99,(a+m)/i):void 0)},s=()=>{a+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await is(m,f,n,o,s))}let u=null,l=null;if(e.both!==void 0){const f={},m={player:await is([e.both],"left",n,o,s,"player",f),opponent:await is([e.both],"right",n,o,s,"opponent")};if(f.image!==void 0)try{const w=await Xm();w!==null&&(u=await os(w,f.image),u===null&&f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await Zm(w,f.image,f.bandBoxes)))}catch(w){console.warn("[#125] both-photo pawn read failed:",w)}u!==null&&(l=Zy(u.ends,f.hulls??[],u.position));const y=l!==null&&!l.ambiguous?Qy(l):null;y!==null?(r.left=m[y.left],r.right=m[y.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=m.player,r.right=m.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...E2(f),...I2(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let h={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const f=await rs(e.board),m=await Xm();if(m!==null){let y=await os(m,f);if(y===null){const w=await jm();if(w!==null){const b=await ft("banner",f),x=ei(b.rows,b.params,ut.banner.conf),M=await Km(w,f,x);y=await Zm(m,f,M)}}y!==null&&(h={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}h.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}else u!==null&&l!==null&&(h={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});const c=h.conflictPawnPosition,p=Math.abs(c)>=di?{type:"military",winner:c>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:h,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await vx(e.data.file):await Ix(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
