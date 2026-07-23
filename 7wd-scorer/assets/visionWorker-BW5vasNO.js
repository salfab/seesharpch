var t$=Object.defineProperty;var n$=(Ct,Mt,hn)=>Mt in Ct?t$(Ct,Mt,{enumerable:!0,configurable:!0,writable:!0,value:hn}):Ct[Mt]=hn;var bg=(Ct,Mt,hn)=>n$(Ct,typeof Mt!="symbol"?Mt+"":Mt,hn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ct=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,hn=Object.getOwnPropertyNames,vg=Object.prototype.hasOwnProperty,Sg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Y=(e,t)=>()=>(e&&(t=e(e=0)),t),fn=(e,t)=>{for(var n in t)Ct(e,n,{get:t[n],enumerable:!0})},Tg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of hn(t))!vg.call(e,i)&&i!==n&&Ct(e,i,{get:()=>t[i],enumerable:!(r=Mt(t,i))||r.enumerable});return e},In=e=>Tg(Ct({},"__esModule",{value:!0}),e),kn,Dt,mn,ks,Es,Cs=Y(()=>{kn=new Map,Dt=[],mn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=kn.get(e);if(r===void 0)kn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Dt.indexOf(e);i!==-1&&Dt.splice(i,1);for(let a=0;a<Dt.length;a++)if(kn.get(Dt[a]).priority<=n){Dt.splice(a,0,e);return}Dt.push(e)}return}throw new TypeError("not a valid backend")},ks=async e=>{let t=kn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Es=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Dt:n,i,a=[],s=new Set;for(let u of r){let l=await ks(u);typeof l=="string"?a.push({name:u,err:l}):(i||(i=l),i===l&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Ig=Y(()=>{Cs()}),Ms,kg=Y(()=>{Ms="1.27.0"}),Lr,He,As=Y(()=>{kg(),Lr="warning",He={wasm:{},webgl:{},webgpu:{},versions:{common:Ms},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Lr=e}},get logLevel(){return Lr}},Object.defineProperty(He,"logLevel",{enumerable:!0})}),Me,Eg=Y(()=>{As(),Me=He}),Rs,zs,Cg=Y(()=>{Rs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let p=a*i,c=0,f=p,m=p*2,g=-1;s==="RGBA"?(c=0,f=p,m=p*2,g=p*3):s==="RGB"?(c=0,f=p,m=p*2):s==="RBG"&&(c=0,m=p,f=p*2);for(let y=0;y<a;y++)for(let b=0;b<i;b++){let $=(e.data[c++]-l[0])*u[0],x=(e.data[f++]-l[1])*u[1],T=(e.data[m++]-l[2])*u[2],S=g===-1?255:(e.data[g++]-l[3])*u[3];r.fillStyle="rgba("+$+","+x+","+T+","+S+")",r.fillRect(b,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},zs=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,y=2,b=3,$=0,x=c,T=c*2,S=-1;o==="RGBA"?($=0,x=c,T=c*2,S=c*3):o==="RGB"?($=0,x=c,T=c*2):o==="RBG"&&($=0,T=c,x=c*2),r=n.createImageData(i,a);for(let k=0;k<a*i;m+=f,g+=f,y+=f,b+=f,k++)r.data[m]=(e.data[$++]-p[0])*l[0],r.data[g]=(e.data[x++]-p[1])*l[1],r.data[y]=(e.data[T++]-p[2])*l[2],r.data[b]=S===-1?255:(e.data[S++]-p[3])*l[3]}else throw new Error("Can not access image data");return r}}),Qn,Os,Ns,Bs,Ds,Ps,Mg=Y(()=>{Gr(),Qn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,p=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,f=0,m=1,g=2,y=3,b=0,$=l,x=l*2,T=-1;o==="RGB"&&(c=3,f=0,m=1,g=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(b=0,x=l,$=l*2):u==="BGR"&&(x=0,$=l,b=l*2);for(let S=0;S<l;S++,f+=c,g+=c,m+=c,y+=c)p[b++]=(e[f]+s[0])/a[0],p[$++]=(e[m]+s[1])/a[1],p[x++]=(e[g]+s[2])/a[2],T!==-1&&y!==-1&&(p[T++]=(e[y]+s[3])/a[3]);return u==="RGBA"?new st("float32",p,[1,4,n,r]):new st("float32",p,[1,3,n,r])},Os=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(n){let p=u();p.width=e.width,p.height=e.height;let c=l(p);if(c!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let p,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,c=t.resizedWidth):(p=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=c,t!==void 0){let f=u();f.width=c,f.height=p;let m=l(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let c=l(p);if(c!=null){let f=e.height,m=e.width;return c.drawImage(e,0,0,m,f),s=c.getImageData(0,0,m,f).data,o.height=f,o.width=m,Qn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,c)=>{let f=u(),m=l(f);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let y=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(Qn(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Qn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ns=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new st({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},Bs=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new st({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Ds=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new st({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ps=(e,t,n)=>new st({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Kt,En,Fr,Us,Ag=Y(()=>{Kt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),En=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Fr=!1,Us=()=>{if(!Fr){Fr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Kt.set("int64",BigInt64Array),En.set(BigInt64Array,"int64")),t&&(Kt.set("uint64",BigUint64Array),En.set(BigUint64Array,"uint64")),r?(Kt.set("float16",n),En.set(n,"float16")):Kt.set("float16",Uint16Array)}}}),Ls,Fs,Rg=Y(()=>{Gr(),Ls=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Fs=(e,t)=>{switch(e.location){case"cpu":return new st(e.type,e.data,t);case"cpu-pinned":return new st({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new st({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new st({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new st({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),st,Gr=Y(()=>{Cg(),Mg(),Ag(),Rg(),st=class{constructor(e,t,n){Us();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Kt.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Kt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=En.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=Ls(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Os(e,t)}static fromTexture(e,t){return Ns(e,t)}static fromGpuBuffer(e,t){return Bs(e,t)}static fromMLTensor(e,t){return Ds(e,t)}static fromPinnedBuffer(e,t,n){return Ps(e,t,n)}toDataURL(e){return Rs(this,e)}toImageData(e){return zs(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Fs(this,e)}}}),Ue,Gs=Y(()=>{Gr(),Ue=st}),Jn,Wr,xt,pt,Xt,Yt,Ws=Y(()=>{As(),Jn=(e,t)=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.timeStamp(`${e}::ORT::${t}`)},Wr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Jn("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},xt=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||Wr("BEGIN",e)},pt=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||Wr("END",e)},Xt=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.time(`ORT::${e}`)},Yt=e=>{(typeof He.trace>"u"?!He.wasm.trace:!He.trace)||console.timeEnd(`ORT::${e}`)}}),qs,zg=Y(()=>{Cs(),Gs(),Ws(),qs=class $g{constructor(t){this.handler=t}async run(t,n,r){xt(),Xt("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ue||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ue)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,p=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(p.indexOf(c)!==-1){let f=n[c];(f===null||f instanceof Ue)&&(l=!0,s=!1,i[c]=f)}if(l){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)i[l]=null;let o=await this.handler.run(t,i,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let p=o[l];p instanceof Ue?u[l]=p:u[l]=new Ue(p.type,p.data,p.dims)}return Yt("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){xt(),Xt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,c=0,f=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-c,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Es(s),l=await o.createInferenceSessionHandler(a,u);return Yt("InferenceSession.create"),pt(),new $g(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),it,Og=Y(()=>{zg(),it=qs}),Ng=Y(()=>{}),Bg=Y(()=>{}),Dg=Y(()=>{}),Pg=Y(()=>{}),Ug={};fn(Ug,{InferenceSession:()=>it,TRACE:()=>Jn,TRACE_EVENT_BEGIN:()=>Xt,TRACE_EVENT_END:()=>Yt,TRACE_FUNC_BEGIN:()=>xt,TRACE_FUNC_END:()=>pt,Tensor:()=>Ue,env:()=>Me,registerBackend:()=>mn});var lt=Y(()=>{Ig(),Eg(),Og(),Gs(),Ng(),Bg(),Ws(),Dg(),Pg()}),qr=Y(()=>{}),Vs={};fn(Vs,{default:()=>Hs});var Vr,Hr,Hs,Lg=Y(()=>{var e;kh(),Zt(),Qr(),Vr="ort-wasm-proxy-worker",Hr=((e=globalThis.self)==null?void 0:e.name)===Vr,Hr&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":ti(r.wasm).then(()=>{pa(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;ha(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=wr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ma(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":ga(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;wa(i,a,s,o,new Array(o.length).fill(null),u).then(l=>{l.some(p=>p[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ba([...s,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":_a(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Hs=Hr?null:t=>new Worker(t??ot,{type:"module",name:Vr})}),js={};fn(js,{default:()=>Xs});async function Ks(e={}){var wg,_g;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((wg=self.name)==null?void 0:wg.startsWith("em-pthread"));t.mountExternalData=(d,h)=>{d.startsWith("./")&&(d=d.substring(2)),(t.Xc||(t.Xc=new Map)).set(d,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=d=>async(...h)=>{var _;try{if(t.Yc)throw Error("Session already started");let w=t.Yc={Kd:h[0],errors:[]},I=await d(...h);if(t.Yc!==w)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let M=w.errors;if(0<M.length){let z=await Promise.all(M);if(z=z.filter(L=>L),0<z.length)throw Error(z.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(d,h)=>{if(d==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let _=t.dd;t.jsepRegisterBuffer=(w,I,M,z)=>_.registerBuffer(w,I,M,z),t.jsepGetBuffer=w=>_.getBuffer(w),t.jsepCreateDownloader=(w,I,M)=>_.createDownloader(w,I,M),t.jsepOnCreateSession=w=>{_.onCreateSession(w)},t.jsepOnReleaseSession=w=>{_.onReleaseSession(w)},t.jsepOnRunStart=w=>_.onRunStart(w),t.Id=(w,I)=>{_.upload(w,I)}}else if(d==="webnn"){let _=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=w=>_.onRunStart(w),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=w=>{_.onReleaseSession(w)},t.webnnCreateMLTensorDownloader=(w,I)=>_.createMLTensorDownloader(w,I),t.webnnRegisterMLTensor=(w,I,M,z)=>_.registerMLTensor(w,I,M,z),t.webnnCreateMLContext=w=>_.createMLContext(w),t.webnnRegisterMLConstant=(w,I,M,z,L,J)=>_.registerMLConstant(w,I,M,z,L,t.Xc,J),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let s=()=>{let d=h=>(..._)=>{let w=kt;return _=h(..._),kt!=w?new Promise((I,M)=>{fs={resolve:I,reject:M}}):_};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=d(t[h])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,l=(d,h)=>{throw h},p=self.location.href,c="";if(n||r){try{c=new URL(".",p).href}catch{}r&&(u=d=>{var h=new XMLHttpRequest;return h.open("GET",d,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async d=>{if(C(d))return new Promise((_,w)=>{var I=new XMLHttpRequest;I.open("GET",d,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?_(I.response):w(I.status)},I.onerror=w,I.send(null)});var h=await fetch(d,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,y,b,$,x=console.log.bind(console),T=console.error.bind(console),S=x,k=T,E=!1,C=d=>d.startsWith("file://");function v(){ke.buffer!=O.buffer&&X()}if(i){let d=function(h){try{var _=h.data,w=_.Sc;if(w==="load"){let I=[];self.onmessage=M=>I.push(M),$=()=>{postMessage({Sc:"loaded"});for(let M of I)d(M);self.onmessage=d};for(let M of _.xd)t[M]&&!t[M].proxy||(t[M]=(...z)=>{postMessage({Sc:"callHandler",wd:M,args:z})},M=="print"&&(S=t[M]),M=="printErr"&&(k=t[M]));ke=_.Od,X(),m=_.Pd,ce(),Pr()}else if(w==="run"){(function(I){var M=(v(),B)[I+52>>>2>>>0];I=(v(),B)[I+56>>>2>>>0],Em(M,M-I),ge(M)})(_.Rc),_s(_.Rc,0,0,1,0,0),Ke(),cs(_.Rc),R||(xm(),R=!0);try{et(_.Md,_.bd)}catch(I){if(I!="unwind")throw I}}else _.target!=="setimmediate"&&(w==="checkMailbox"?R&&Ar():w&&(k(`worker: received unknown command ${w}`),k(_)))}catch(I){throw vm(),I}};var R=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=d}var O,j,P,F,A,B,V,K,re,N,Z,U=!1;function X(){var d=ke.buffer;t.HEAP8=O=new Int8Array(d),P=new Int16Array(d),t.HEAPU8=j=new Uint8Array(d),F=new Uint16Array(d),t.HEAP32=A=new Int32Array(d),t.HEAPU32=B=new Uint32Array(d),V=new Float32Array(d),K=new Float64Array(d),re=new BigInt64Array(d),N=new BigUint64Array(d)}function H(){U=!0,i?$():Bt.sb()}function q(d){throw k(d="Aborted("+d+")"),E=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),b==null||b(d),d}function ue(){return{a:{ma:g2,gb:m2,g:Be,J:tt,f:ss,o:Er,h:Qb,ha:Jb,b:e1,T:t1,Ha:Nf,n:n1,$:Uf,Xa:Lf,Da:Ff,Fa:Gf,Ya:Wf,Va:qf,Oa:Vf,Ua:Hf,ka:jf,Ea:Kf,Ba:Xf,Wa:Yf,Ca:Zf,bb:r1,ea:i1,wa:a1,ua:o1,da:l1,O:d1,H:c1,va:p1,_:_1,xa:b1,Ra:$1,za:v1,Ia:S1,sa:T1,fa:I1,Qa:cs,_a:k1,R:A1,r:B1,c:ls,hb:D1,y:P1,M:U1,D:L1,l:F1,s:am,ib:G1,I:W1,S:q1,j:V1,u:H1,q:j1,k:K1,La:X1,Ma:Y1,Na:Z1,Ja:lm,Ka:dm,ta:cm,db:J1,ab:t2,v:n2,aa:r2,ga:i2,$a:e2,W:a2,Za:s2,Aa:o2,F:Q1,U:u2,la:Br,ya:d2,fb:l2,eb:c2,Sa:mm,Ta:gm,Ga:ee,V:ym,ja:wm,Pa:_m,ia:bm,kb:Q2,na:j2,lb:Z2,oa:H2,G:D2,e:b2,t:w2,w:y2,B:M2,mb:W2,K:O2,x:v2,pa:q2,Y:K2,ba:G2,nb:F2,ob:L2,P:A2,qa:U2,pb:P2,N:N2,Z:V2,d:_2,A:x2,m:$2,jb:J2,p:T2,z:I2,C:S2,E:k2,L:R2,qb:B2,Q:X2,ca:z2,X:Y2,rb:C2,ra:E2,i:h2,a:ke,cb:G}}}async function ce(){function d(w,I){var M=Bt=w.exports;w={};for(let[z,L]of Object.entries(M))typeof L=="function"?(M=E1(L),w[z]=M):w[z]=L;return Bt=w,Bt=(function(){var z=Bt,L=te=>me=>te(me)>>>0,J=te=>()=>te()>>>0;return(z=Object.assign({},z)).tb=L(z.tb),z.Xb=J(z.Xb),z.Zb=L(z.Zb),z.lc=L(z.lc),z.mc=J(z.mc),z.qc=L(z.qc),z})(),Ee.push(Bt._b),$m=(w=Bt).tb,xm=w.ub,t._OrtInit=w.vb,t._OrtGetLastError=w.wb,t._OrtCreateSessionOptions=w.xb,t._OrtAppendExecutionProvider=w.yb,t._OrtAddFreeDimensionOverride=w.zb,t._OrtAddSessionConfigEntry=w.Ab,t._OrtReleaseSessionOptions=w.Bb,t._OrtCreateSession=w.Cb,t._OrtReleaseSession=w.Db,t._OrtGetInputOutputCount=w.Eb,t._OrtGetInputOutputMetadata=w.Fb,t._OrtFree=w.Gb,t._OrtCreateTensor=w.Hb,t._OrtGetTensorData=w.Ib,t._OrtReleaseTensor=w.Jb,t._OrtCreateRunOptions=w.Kb,t._OrtAddRunConfigEntry=w.Lb,t._OrtReleaseRunOptions=w.Mb,t._OrtCreateBinding=w.Nb,t._OrtBindInput=w.Ob,t._OrtBindOutput=w.Pb,t._OrtClearBoundOutputs=w.Qb,t._OrtReleaseBinding=w.Rb,t._OrtRunWithBinding=w.Sb,t._OrtRun=w.Tb,t._OrtEndProfiling=w.Ub,t._JsepOutput=w.Vb,t._JsepGetNodeName=w.Wb,Dr=w.Xb,Et=t._free=w.Yb,Xn=t._malloc=w.Zb,_s=w.ac,vm=w.bc,Sm=w.cc,Tm=w.dc,bs=w.ec,Im=w.fc,km=w.gc,_e=w.hc,Yn=w.ic,Em=w.jc,ge=w.kc,$s=w.lc,we=w.mc,Cm=w.nc,xs=w.oc,Mm=w.pc,Am=w.qc,Rm=w.rc,vs=w.sc,zm=w.tc,Om=w.uc,Nm=w.vc,Bm=w.wc,Dm=w.xc,Pm=w.yc,Um=w.zc,Lm=w.Ac,Fm=w.Bc,Gm=w.Cc,Wm=w.Dc,qm=w.Ec,Vm=w.Fc,Hm=w.Gc,jm=w.Hc,Km=w.Ic,Xm=w.Jc,Ym=w.Kc,Zm=w.Lc,Qm=w.Mc,Jm=w.Nc,eg=w.Pc,tg=w.Qc,ng=w.$c,rg=w.ad,ig=w.fd,ag=w.jd,sg=w.kd,og=w.ld,ug=w.md,lg=w.nd,dg=w.od,cg=w.pd,pg=w.qd,hg=w.vd,fg=w.Td,mg=w.Ud,gg=w.Vd,yg=w.Wd,m=I,Bt}var h,_=ue();return t.instantiateWasm?new Promise(w=>{t.instantiateWasm(_,(I,M)=>{w(d(I,M))})}):i?d(new WebAssembly.Instance(m,ue()),m):(Z??(Z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(w){var I=Z;if(!f&&!C(I))try{var M=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(M,w)}catch(z){k(`wasm streaming compile failed: ${z}`),k("falling back to ArrayBuffer instantiation")}return(async function(z,L){try{var J=await(async function(te){if(!f)try{var me=await o(te);return new Uint8Array(me)}catch{}if(te==Z&&f)te=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";te=u(te)}return te})(z);return await WebAssembly.instantiate(J,L)}catch(te){k(`failed to asynchronously prepare wasm: ${te}`),q(te)}})(I,w)})(_),d(h.instance,h.module))}class ne{constructor(h){bg(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var ye=d=>{d.terminate(),d.onmessage=()=>{}},De=[],Fe=0,Ge=null,rt=d=>{oe.length==0&&(Xe(),ze(oe[0]));var h=oe.pop();if(!h)return 6;le.push(h),Ie[d.Rc]=h,h.Rc=d.Rc;var _={Sc:"run",Md:d.Ld,bd:d.bd,Rc:d.Rc};return h.postMessage(_,d.rd),0},Te=0,pe=(d,h,..._)=>{var w,I=16*_.length,M=we(),z=$s(I),L=z>>>3;for(w of _)typeof w=="bigint"?((v(),re)[L++>>>0]=1n,(v(),re)[L++>>>0]=w):((v(),re)[L++>>>0]=0n,(v(),K)[L++>>>0]=w);return d=Sm(d,0,I,z,h),ge(M),d};function G(d){if(i)return pe(0,1,d);if(g=d,!(0<Te)){for(var h of le)ye(h);for(h of oe)ye(h);oe=[],le=[],Ie={},E=!0}l(0,new ne(d))}function Q(d){if(i)return pe(1,0,d);ee(d)}var ee=d=>{if(g=d,i)throw Q(d),"unwind";G(d)},oe=[],le=[],Ee=[],Ie={},Re=d=>{var h=d.Rc;delete Ie[h],oe.push(d),le.splice(le.indexOf(d),1),d.Rc=0,Tm(h)};function Ke(){Ee.forEach(d=>d())}var ze=d=>new Promise(h=>{d.onmessage=I=>{var M=I.data;if(I=M.Sc,M.Zc&&M.Zc!=Dr()){var z=Ie[M.Zc];z?z.postMessage(M,M.rd):k(`Internal error! Worker sent a message "${I}" to target pthread ${M.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?Ar():I==="spawnThread"?rt(M):I==="cleanupThread"?Mr(()=>{Re(Ie[M.Nd])}):I==="loaded"?(d.loaded=!0,h(d)):M.target==="setimmediate"?d.postMessage(M):I==="uncaughtException"?d.onerror(M.error):I==="callHandler"?t[M.wd](...M.args):I&&k(`worker sent an unknown command ${I}`)},d.onerror=I=>{throw k(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var _,w=[];for(_ of[])t.propertyIsEnumerable(_)&&w.push(_);d.postMessage({Sc:"load",xd:w,Od:ke,Pd:m})});function Xe(){var d=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});oe.push(d)}var ke,et=(d,h)=>{Te=0,d=vs(d,h),0<Te?g=d:bs(d)},qe=[],Qe=0;function Be(d){var h=new Hn(d>>>=0);return(v(),O)[h.Tc+12>>>0]==0&&(dt(h,!0),Qe--),kr(h,!1),qe.push(h),Am(d)}var Ye=0,tt=()=>{_e(0,0);var d=qe.pop();Cm(d.cd),Ye=0};function dt(d,h){h=h?1:0,(v(),O)[d.Tc+12>>>0]=h}function kr(d,h){h=h?1:0,(v(),O)[d.Tc+13>>>0]=h}class Hn{constructor(h){this.cd=h,this.Tc=h-24}}var jn=d=>{var h=Ye;if(!h)return Yn(0),0;var _=new Hn(h);(v(),B)[_.Tc+16>>>2>>>0]=h;var w=(v(),B)[_.Tc+4>>>2>>>0];if(!w)return Yn(0),h;for(var I of d){if(I===0||I===w)break;if(Mm(I,w,_.Tc+16))return Yn(I),h}return Yn(w),h};function ss(){return jn([])}function Er(d){return jn([d>>>0])}function Qb(d,h,_,w){return jn([d>>>0,h>>>0,_>>>0,w>>>0])}var Jb=()=>{var d=qe.pop();d||q("no exception to throw");var h=d.cd;throw(v(),O)[d.Tc+13>>>0]==0&&(qe.push(d),kr(d,!0),dt(d,!1),Qe++),xs(h),Ye=h};function e1(d,h,_){var w=new Hn(d>>>=0);throw h>>>=0,_>>>=0,(v(),B)[w.Tc+16>>>2>>>0]=0,(v(),B)[w.Tc+4>>>2>>>0]=h,(v(),B)[w.Tc+8>>>2>>>0]=_,xs(d),Qe++,Ye=d}var t1=()=>Qe;function Of(d,h,_,w){return i?pe(2,1,d,h,_,w):Nf(d,h,_,w)}function Nf(d,h,_,w){if(d>>>=0,h>>>=0,_>>>=0,w>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?Of(d,h,_,w):(d={Ld:_,Rc:d,bd:w,rd:I},i?(d.Sc="spawnThread",postMessage(d,I),0):rt(d))}function n1(d){throw Ye||(Ye=d>>>0),Ye}var Bf=globalThis.TextDecoder&&new TextDecoder,Df=(d,h,_,w)=>{if(_=h+_,w)return _;for(;d[h]&&!(h>=_);)++h;return h},Pf=(d,h=0,_,w)=>{if(16<(_=Df(d,h>>>=0,_,w))-h&&d.buffer&&Bf)return Bf.decode(d.buffer instanceof ArrayBuffer?d.subarray(h,_):d.slice(h,_));for(w="";h<_;){var I=d[h++];if(128&I){var M=63&d[h++];if((224&I)==192)w+=String.fromCharCode((31&I)<<6|M);else{var z=63&d[h++];65536>(I=(240&I)==224?(15&I)<<12|M<<6|z:(7&I)<<18|M<<12|z<<6|63&d[h++])?w+=String.fromCharCode(I):(I-=65536,w+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else w+=String.fromCharCode(I)}return w},We=(d,h,_)=>(d>>>=0)?Pf((v(),j),d,h,_):"";function Uf(d,h,_){return i?pe(3,1,d,h,_):0}function Lf(d,h){if(i)return pe(4,1,d,h)}function Ff(d,h){if(i)return pe(5,1,d,h)}function Gf(d,h,_){if(i)return pe(6,1,d,h,_)}function Wf(d,h,_){return i?pe(7,1,d,h,_):0}function qf(d,h){if(i)return pe(8,1,d,h)}function Vf(d,h,_){if(i)return pe(9,1,d,h,_)}function Hf(d,h,_,w){if(i)return pe(10,1,d,h,_,w)}function jf(d,h,_,w){if(i)return pe(11,1,d,h,_,w)}function Kf(d,h,_,w){if(i)return pe(12,1,d,h,_,w)}function Xf(d){if(i)return pe(13,1,d)}function Yf(d,h){if(i)return pe(14,1,d,h)}function Zf(d,h,_){if(i)return pe(15,1,d,h,_)}var r1=()=>q(""),It=d=>{d>>>=0;for(var h="";;){var _=(v(),j)[d++>>>0];if(!_)return h;h+=String.fromCharCode(_)}},os={},us={},Tn=class extends Error{constructor(d){super(d),this.name="BindingError"}};function Nt(d,h,_={}){return(function(w,I,M={}){var z=I.name;if(!w)throw new Tn(`type "${z}" must have a positive integer typeid pointer`);if(us.hasOwnProperty(w)){if(M.yd)return;throw new Tn(`Cannot register type '${z}' twice`)}us[w]=I,os.hasOwnProperty(w)&&(I=os[w],delete os[w],I.forEach(L=>L()))})(d,h,_)}var Qf=(d,h,_)=>{switch(h){case 1:return _?w=>(v(),O)[w>>>0]:w=>(v(),j)[w>>>0];case 2:return _?w=>(v(),P)[w>>>1>>>0]:w=>(v(),F)[w>>>1>>>0];case 4:return _?w=>(v(),A)[w>>>2>>>0]:w=>(v(),B)[w>>>2>>>0];case 8:return _?w=>(v(),re)[w>>>3>>>0]:w=>(v(),N)[w>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${d}`)}};function i1(d,h,_,w,I){d>>>=0,_>>>=0,h=It(h>>>0);let M=z=>z;if(w=w===0n){let z=8*_;M=L=>BigInt.asUintN(z,L),I=M(I)}Nt(d,{name:h,Oc:M,Vc:(z,L)=>(typeof L=="number"&&(L=BigInt(L)),L),Uc:Qf(h,_,!w),Wc:null})}function a1(d,h,_,w){Nt(d>>>=0,{name:h=It(h>>>0),Oc:function(I){return!!I},Vc:function(I,M){return M?_:w},Uc:function(I){return this.Oc((v(),j)[I>>>0])},Wc:null})}var Jf=[],cn=[0,1,,1,null,1,!0,1,!1,1];function ls(d){9<(d>>>=0)&&--cn[d+1]===0&&(cn[d]=void 0,Jf.push(d))}var ct=d=>{if(!d)throw new Tn(`Cannot use deleted val. handle = ${d}`);return cn[d]},$t=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Jf.pop()||cn.length;return cn[h]=d,cn[h+1]=1,h}};function ds(d){return this.Oc((v(),B)[d>>>2>>>0])}var s1={name:"emscripten::val",Oc:d=>{var h=ct(d);return ls(d),h},Vc:(d,h)=>$t(h),Uc:ds,Wc:null};function o1(d){return Nt(d>>>0,s1)}var u1=(d,h)=>{switch(h){case 4:return function(_){return this.Oc((v(),V)[_>>>2>>>0])};case 8:return function(_){return this.Oc((v(),K)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${d}`)}};function l1(d,h,_){_>>>=0,Nt(d>>>=0,{name:h=It(h>>>0),Oc:w=>w,Vc:(w,I)=>I,Uc:u1(h,_),Wc:null})}function d1(d,h,_,w,I){d>>>=0,_>>>=0,h=It(h>>>0);let M=L=>L;if(w===0){var z=32-8*_;M=L=>L<<z>>>z,I=M(I)}Nt(d,{name:h,Oc:M,Vc:(L,J)=>J,Uc:Qf(h,_,w!==0),Wc:null})}function c1(d,h,_){function w(M){var z=(v(),B)[M>>>2>>>0];return M=(v(),B)[M+4>>>2>>>0],new I((v(),O).buffer,M,z)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Nt(d>>>=0,{name:_=It(_>>>0),Oc:w,Uc:w},{yd:!0})}var Vt=(d,h,_)=>{var w=(v(),j);if(h>>>=0,0<_){var I=h;_=h+_-1;for(var M=0;M<d.length;++M){var z=d.codePointAt(M);if(127>=z){if(h>=_)break;w[h++>>>0]=z}else if(2047>=z){if(h+1>=_)break;w[h++>>>0]=192|z>>6,w[h++>>>0]=128|63&z}else if(65535>=z){if(h+2>=_)break;w[h++>>>0]=224|z>>12,w[h++>>>0]=128|z>>6&63,w[h++>>>0]=128|63&z}else{if(h+3>=_)break;w[h++>>>0]=240|z>>18,w[h++>>>0]=128|z>>12&63,w[h++>>>0]=128|z>>6&63,w[h++>>>0]=128|63&z,M++}}w[h>>>0]=0,d=h-I}else d=0;return d},Cr=d=>{for(var h=0,_=0;_<d.length;++_){var w=d.charCodeAt(_);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++_):h+=3}return h};function p1(d,h){Nt(d>>>=0,{name:h=It(h>>>0),Oc(_){var w=(v(),B)[_>>>2>>>0];return w=We(_+4,w,!0),Et(_),w},Vc(_,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var I=typeof w=="string";if(!(I||ArrayBuffer.isView(w)&&w.BYTES_PER_ELEMENT==1))throw new Tn("Cannot pass non-string to std::string");var M=I?Cr(w):w.length,z=Xn(4+M+1),L=z+4;return(v(),B)[z>>>2>>>0]=M,I?Vt(w,L,M+1):(v(),j).set(w,L>>>0),_!==null&&_.push(Et,z),z},Uc:ds,Wc(_){Et(_)}})}var em=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,h1=(d,h,_)=>{if(d>>>=1,16<(h=Df((v(),F),d,h/2,_))-d&&em)return em.decode((v(),F).slice(d,h));for(_="";d<h;++d){var w=(v(),F)[d>>>0];_+=String.fromCharCode(w)}return _},f1=(d,h,_)=>{if(_??(_=2147483647),2>_)return 0;var w=h;_=(_-=2)<2*d.length?_/2:d.length;for(var I=0;I<_;++I){var M=d.charCodeAt(I);(v(),P)[h>>>1>>>0]=M,h+=2}return(v(),P)[h>>>1>>>0]=0,h-w},m1=d=>2*d.length,g1=(d,h,_)=>{var w="";d>>>=2;for(var I=0;!(I>=h/4);I++){var M=(v(),B)[d+I>>>0];if(!M&&!_)break;w+=String.fromCodePoint(M)}return w},y1=(d,h,_)=>{if(h>>>=0,_??(_=2147483647),4>_)return 0;var w=h;_=w+_-4;for(var I=0;I<d.length;++I){var M=d.codePointAt(I);if(65535<M&&I++,(v(),A)[h>>>2>>>0]=M,(h+=4)+4>_)break}return(v(),A)[h>>>2>>>0]=0,h-w},w1=d=>{for(var h=0,_=0;_<d.length;++_)65535<d.codePointAt(_)&&_++,h+=4;return h};function _1(d,h,_){if(d>>>=0,h>>>=0,_=It(_>>>=0),h===2)var w=h1,I=f1,M=m1;else w=g1,I=y1,M=w1;Nt(d,{name:_,Oc:z=>{var L=(v(),B)[z>>>2>>>0];return L=w(z+4,L*h,!0),Et(z),L},Vc:(z,L)=>{if(typeof L!="string")throw new Tn(`Cannot pass non-string to C++ string type ${_}`);var J=M(L),te=Xn(4+J+h);return(v(),B)[te>>>2>>>0]=J/h,I(L,te+4,J+h),z!==null&&z.push(Et,te),te},Uc:ds,Wc(z){Et(z)}})}function b1(d,h){Nt(d>>>=0,{zd:!0,name:h=It(h>>>0),Oc:()=>{},Vc:()=>{}})}function $1(d){_s(d>>>0,!r,1,!n,131072,!1),Ke()}var Mr=d=>{if(!E)try{if(d(),!(0<Te))try{i?Dr()&&bs(g):ee(g)}catch(h){h instanceof ne||h=="unwind"||l(0,h)}}catch(h){h instanceof ne||h=="unwind"||l(0,h)}},x1=!Atomics.waitAsync||((_g=globalThis.navigator)==null?void 0:_g.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function cs(d){d>>>=0,x1||(Atomics.waitAsync((v(),A),d>>>2,d).value.then(Ar),d+=128,Atomics.store((v(),A),d>>>2,1))}var Ar=()=>Mr(()=>{var d=Dr();d&&(cs(d),km())});function v1(d,h){(d>>>=0)==h>>>0?setTimeout(Ar):i?postMessage({Zc:d,Sc:"checkMailbox"}):(d=Ie[d])&&d.postMessage({Sc:"checkMailbox"})}var ps=[];function S1(d,h,_,w,I){for(h>>>=0,I>>>=0,ps.length=0,_=I>>>3,w=I+w>>>3;_<w;){var M;M=(v(),re)[_++>>>0]?(v(),re)[_++>>>0]:(v(),K)[_++>>>0],ps.push(M)}return(h?Ss[h]:f2[d])(...ps)}var T1=()=>{Te=0};function I1(d){d>>>=0,i?postMessage({Sc:"cleanupThread",Nd:d}):Re(Ie[d])}function k1(d){}var Rr=d=>{try{d()}catch(h){q(h)}};function E1(d){var h=(..._)=>{zr.push(d);try{return d(..._)}finally{E||(zr.pop(),kt&&Ht===1&&zr.length===0&&(Ht=0,Te+=1,Rr(mg),typeof Fibers<"u"&&Fibers.Zd()))}};return rm.set(d,h),h}var Ht=0,kt=null,tm=0,zr=[],hs=new Map,nm=new Map,rm=new Map,C1=0,fs=null,M1=[],im=d=>(function(h){if(!E){if(Ht===0){var _=!1,w=!1;h((I=0)=>{if(!E&&(tm=I,_=!0,w)){Ht=2,Rr(()=>gg(kt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var M=(function(){var J=(v(),A)[kt+8>>>2>>>0];return J=nm.get(J),J=rm.get(J),--Te,J()})()}catch(J){M=J,I=!0}var z=!1;if(!kt){var L=fs;L&&(fs=null,(I?L.reject:L.resolve)(M),z=!0)}if(I&&!z)throw M}}),w=!0,_||(Ht=1,kt=(function(){var I=Xn(65548),M=I+12;if((v(),B)[I>>>2>>>0]=M,(v(),B)[I+4>>>2>>>0]=M+65536,M=zr[0],!hs.has(M)){var z=C1++;hs.set(M,z),nm.set(z,M)}return M=hs.get(M),(v(),A)[I+8>>>2>>>0]=M,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Rr(()=>fg(kt)))}else Ht===2?(Ht=0,Rr(yg),Et(kt),kt=null,M1.forEach(Mr)):q(`invalid state: ${Ht}`);return tm}})(h=>{d().then(h)});function A1(d){return d>>>=0,im(async()=>{var h=await ct(d);return $t(h)})}var ms=[],R1=d=>{var h=ms.length;return ms.push(d),h},z1=(d,h)=>{for(var _=Array(d),w=0;w<d;++w){var I=w,M=(v(),B)[h+4*w>>>2>>>0],z=us[M];if(z===void 0)throw d=`parameter ${w}`,M=$m(M),h=It(M),Et(M),new Tn(`${d} has unknown type ${h}`);_[I]=z}return _},O1=(d,h,_)=>{var w=[];return d=d(w,_),w.length&&((v(),B)[h>>>2>>>0]=$t(w)),d},N1={},Or=d=>{var h=N1[d];return h===void 0?It(d):h};function B1(d,h,_){var[w,...I]=z1(d,h>>>0);h=w.Vc.bind(w);var M=I.map(J=>J.Uc.bind(J));d--;var z={toValue:ct};switch(d=M.map((J,te)=>{var me=`argFromPtr${te}`;return z[me]=J,`${me}(args${te?"+"+8*te:""})`}),_){case 0:var L="toValue(handle)";break;case 2:L="new (toValue(handle))";break;case 3:L="";break;case 1:z.getStringOrSymbol=Or,L="toValue(handle)[getStringOrSymbol(methodName)]"}return L+=`(${d})`,w.zd||(z.toReturnWire=h,z.emval_returnValue=O1,L=`return emval_returnValue(toReturnWire, destructorsRef, ${L})`),L=`return function (handle, methodName, destructorsRef, args) {
  ${L}
  }`,_=new Function(Object.keys(z),L)(...Object.values(z)),L=`methodCaller<(${I.map(J=>J.name)}) => ${w.name}>`,R1(Object.defineProperty(_,"name",{value:L}))}function D1(d,h){return h>>>=0,(d=ct(d>>>0))==ct(h)}function P1(d){return(d>>>=0)?(d=Or(d),$t(globalThis[d])):$t(globalThis)}function U1(d){return d=Or(d>>>0),$t(t[d])}function L1(d,h){return h>>>=0,d=ct(d>>>0),h=ct(h),$t(d[h])}function F1(d){9<(d>>>=0)&&(cn[d+1]+=1)}function am(d,h,_,w,I){return ms[d>>>0](h>>>0,_>>>0,w>>>0,I>>>0)}function G1(d,h,_,w,I){return am(d>>>0,h>>>0,_>>>0,w>>>0,I>>>0)}function W1(){return $t([])}function q1(d){d=ct(d>>>0);for(var h=Array(d.length),_=0;_<d.length;_++)h[_]=d[_];return $t(h)}function V1(d){return $t(Or(d>>>0))}function H1(){return $t({})}function j1(d){for(var h=ct(d>>>=0);h.length;){var _=h.pop();h.pop()(_)}ls(d)}function K1(d,h,_){h>>>=0,_>>>=0,d=ct(d>>>0),h=ct(h),_=ct(_),d[h]=_}function X1(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),(v(),A)[h>>>2>>>0]=d.getUTCSeconds(),(v(),A)[h+4>>>2>>>0]=d.getUTCMinutes(),(v(),A)[h+8>>>2>>>0]=d.getUTCHours(),(v(),A)[h+12>>>2>>>0]=d.getUTCDate(),(v(),A)[h+16>>>2>>>0]=d.getUTCMonth(),(v(),A)[h+20>>>2>>>0]=d.getUTCFullYear()-1900,(v(),A)[h+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[h+28>>>2>>>0]=d}var sm=d=>d%4==0&&(d%100!=0||d%400==0),om=[0,31,60,91,121,152,182,213,244,274,305,335],um=[0,31,59,90,120,151,181,212,243,273,304,334];function Y1(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),(v(),A)[h>>>2>>>0]=d.getSeconds(),(v(),A)[h+4>>>2>>>0]=d.getMinutes(),(v(),A)[h+8>>>2>>>0]=d.getHours(),(v(),A)[h+12>>>2>>>0]=d.getDate(),(v(),A)[h+16>>>2>>>0]=d.getMonth(),(v(),A)[h+20>>>2>>>0]=d.getFullYear()-1900,(v(),A)[h+24>>>2>>>0]=d.getDay();var _=(sm(d.getFullYear())?om:um)[d.getMonth()]+d.getDate()-1|0;(v(),A)[h+28>>>2>>>0]=_,(v(),A)[h+36>>>2>>>0]=-60*d.getTimezoneOffset(),_=new Date(d.getFullYear(),6,1).getTimezoneOffset();var w=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(_!=w&&d.getTimezoneOffset()==Math.min(w,_)),(v(),A)[h+32>>>2>>>0]=d}function Z1(d){d>>>=0;var h=new Date((v(),A)[d+20>>>2>>>0]+1900,(v(),A)[d+16>>>2>>>0],(v(),A)[d+12>>>2>>>0],(v(),A)[d+8>>>2>>>0],(v(),A)[d+4>>>2>>>0],(v(),A)[d>>>2>>>0],0),_=(v(),A)[d+32>>>2>>>0],w=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),M=new Date(h.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(M,I);return 0>_?(v(),A)[d+32>>>2>>>0]=+(I!=M&&z==w):0<_!=(z==w)&&(I=Math.max(M,I),h.setTime(h.getTime()+6e4*((0<_?z:I)-w))),(v(),A)[d+24>>>2>>>0]=h.getDay(),_=(sm(h.getFullYear())?om:um)[h.getMonth()]+h.getDate()-1|0,(v(),A)[d+28>>>2>>>0]=_,(v(),A)[d>>>2>>>0]=h.getSeconds(),(v(),A)[d+4>>>2>>>0]=h.getMinutes(),(v(),A)[d+8>>>2>>>0]=h.getHours(),(v(),A)[d+12>>>2>>>0]=h.getDate(),(v(),A)[d+16>>>2>>>0]=h.getMonth(),(v(),A)[d+20>>>2>>>0]=h.getYear(),d=h.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function lm(d,h,_,w,I,M,z){return i?pe(16,1,d,h,_,w,I,M,z):-52}function dm(d,h,_,w,I,M){if(i)return pe(17,1,d,h,_,w,I,M)}var Kn={},Q1=()=>performance.timeOrigin+performance.now();function cm(d,h){if(i)return pe(18,1,d,h);if(Kn[d]&&(clearTimeout(Kn[d].id),delete Kn[d]),!h)return 0;var _=setTimeout(()=>{delete Kn[d],Mr(()=>Im(d,performance.timeOrigin+performance.now()))},h);return Kn[d]={id:_,Yd:h},0}function J1(d,h,_,w){d>>>=0,h>>>=0,_>>>=0,w>>>=0;var I=new Date().getFullYear(),M=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var z=Math.max(M,I);(v(),B)[d>>>2>>>0]=60*z,(v(),A)[h>>>2>>>0]=+(M!=I),d=(h=L=>{var J=Math.abs(L);return`UTC${0<=L?"-":"+"}${String(Math.floor(J/60)).padStart(2,"0")}${String(J%60).padStart(2,"0")}`})(M),h=h(I),I<M?(Vt(d,_,17),Vt(h,w,17)):(Vt(d,w,17),Vt(h,_,17))}var e2=()=>Date.now();function t2(d,h,_){return _>>>=0,0<=d&&3>=d?(d===0?d=Date.now():d=performance.timeOrigin+performance.now(),d=Math.round(1e6*d),(v(),re)[_>>>3>>>0]=BigInt(d),0):28}var gs=[],pm=(d,h)=>{gs.length=0;for(var _;_=(v(),j)[d++>>>0];){var w=_!=105;h+=(w&=_!=112)&&h%8?4:0,gs.push(_==112?(v(),B)[h>>>2>>>0]:_==106?(v(),re)[h>>>3>>>0]:_==105?(v(),A)[h>>>2>>>0]:(v(),K)[h>>>3>>>0]),h+=w?8:4}return gs};function n2(d,h,_){return d>>>=0,h=pm(h>>>0,_>>>0),Ss[d](...h)}function r2(d,h,_){return d>>>=0,h=pm(h>>>0,_>>>0),Ss[d](...h)}var i2=()=>{};function a2(d,h){return k(We(d>>>0,h>>>0))}var s2=()=>{throw Te+=1,"unwind"};function o2(){return 4294901760}var u2=()=>navigator.hardwareConcurrency,pn={},Nr=d=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(d))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(d))?2147483648|+h[1]:0},hm=d=>{for(var h of d)(d=Nr(h))&&(pn[d]=h)};function l2(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),hm(d),pn.gd=Nr(d[3]),pn.Jd=d,pn.gd}function Br(d){if(!(d=pn[d>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(d))d=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(d))d=h[1];else{if(!(h=/^(.+?)@/.exec(d)))return 0;d=h[1]}Et(Br.hd??0),h=Cr(d)+1;var _=Xn(h);return _&&Vt(d,_,h),Br.hd=_,Br.hd}function d2(d){d>>>=0;var h=(v(),j).length;if(d<=h||4294901760<d)return!1;for(var _=1;4>=_;_*=2){var w=h*(1+.2/_);w=Math.min(w,d+100663296);e:{w=(Math.min(4294901760,65536*Math.ceil(Math.max(d,w)/65536))-ke.buffer.byteLength+65535)/65536|0;try{ke.grow(w),X();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function c2(d,h,_){if(d>>>=0,h>>>=0,pn.gd==d)var w=pn.Jd;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),hm(w);for(var I=3;w[I]&&Nr(w[I])!=d;)++I;for(d=0;d<_&&w[d+I];++d)(v(),A)[h+4*d>>>2>>>0]=Nr(w[d+I]);return d}var ys,ws={},fm=()=>{var w;if(!ys){var d,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((w=globalThis.navigator)==null?void 0:w.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in ws)ws[d]===void 0?delete h[d]:h[d]=ws[d];var _=[];for(d in h)_.push(`${d}=${h[d]}`);ys=_}return ys};function mm(d,h){if(i)return pe(19,1,d,h);d>>>=0,h>>>=0;var _,w=0,I=0;for(_ of fm()){var M=h+w;(v(),B)[d+I>>>2>>>0]=M,w+=Vt(_,M,1/0)+1,I+=4}return 0}function gm(d,h){if(i)return pe(20,1,d,h);d>>>=0,h>>>=0;var _=fm();for(var w of((v(),B)[d>>>2>>>0]=_.length,d=0,_))d+=Cr(w)+1;return(v(),B)[h>>>2>>>0]=d,0}function ym(d){return i?pe(21,1,d):52}function wm(d,h,_,w){return i?pe(22,1,d,h,_,w):52}function _m(d,h,_,w){return i?pe(23,1,d,h,_,w):70}var p2=[null,[],[]];function bm(d,h,_,w){if(i)return pe(24,1,d,h,_,w);h>>>=0,_>>>=0,w>>>=0;for(var I=0,M=0;M<_;M++){var z=(v(),B)[h>>>2>>>0],L=(v(),B)[h+4>>>2>>>0];h+=8;for(var J=0;J<L;J++){var te=d,me=(v(),j)[z+J>>>0],$e=p2[te];me===0||me===10?((te===1?S:k)(Pf($e)),$e.length=0):$e.push(me)}I+=L}return(v(),B)[w>>>2>>>0]=I,0}function h2(d){return d>>>0}i||(function(){for(var d=t.numThreads-1;d--;)Xe();De.push(async()=>{var h=(async function(){if(!i)return Promise.all(oe.map(ze))})();Fe++,await h,--Fe==0&&Ge&&(h=Ge,Ge=null,h())})})(),i||(ke=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),X()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>we(),t.stackRestore=d=>ge(d),t.stackAlloc=d=>$s(d),t.setValue=function(d,h,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(v(),O)[d>>>0]=h;break;case"i16":(v(),P)[d>>>1>>>0]=h;break;case"i32":(v(),A)[d>>>2>>>0]=h;break;case"i64":(v(),re)[d>>>3>>>0]=BigInt(h);break;case"float":(v(),V)[d>>>2>>>0]=h;break;case"double":(v(),K)[d>>>3>>>0]=h;break;case"*":(v(),B)[d>>>2>>>0]=h;break;default:q(`invalid type for setValue: ${_}`)}},t.getValue=function(d,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),O)[d>>>0];case"i16":return(v(),P)[d>>>1>>>0];case"i32":return(v(),A)[d>>>2>>>0];case"i64":return(v(),re)[d>>>3>>>0];case"float":return(v(),V)[d>>>2>>>0];case"double":return(v(),K)[d>>>3>>>0];case"*":return(v(),B)[d>>>2>>>0];default:q(`invalid type for getValue: ${h}`)}},t.UTF8ToString=We,t.stringToUTF8=Vt,t.lengthBytesUTF8=Cr;var $m,xm,Dr,Et,Xn,_s,vm,Sm,Tm,bs,Im,km,_e,Yn,Em,ge,$s,we,Cm,xs,Mm,Am,Rm,vs,zm,Om,Nm,Bm,Dm,Pm,Um,Lm,Fm,Gm,Wm,qm,Vm,Hm,jm,Km,Xm,Ym,Zm,Qm,Jm,eg,tg,ng,rg,ig,ag,sg,og,ug,lg,dg,cg,pg,hg,fg,mg,gg,yg,Bt,f2=[G,Q,Of,Uf,Lf,Ff,Gf,Wf,qf,Vf,Hf,jf,Kf,Xf,Yf,Zf,lm,dm,cm,mm,gm,ym,wm,_m,bm],Ss={1003524:(d,h,_,w,I)=>{if(t===void 0||!t.Xc)return 1;if((d=We(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=t.Xc.get(d)))return 2;if(h=Number(h>>>0),_=Number(_>>>0),w=Number(w>>>0),h+_>d.byteLength)return 3;try{let M=d.subarray(h,h+_);switch(I){case 0:(v(),j).set(M,w>>>0);break;case 1:t.Qd?t.Qd(w,M):t.Id(w,M);break;default:return 4}return 0}catch{return 4}},1004348:(d,h,_)=>{t.td(d,(v(),j).subarray(h>>>0,h+_>>>0))},1004412:()=>t.Sd(),1004454:d=>{t.sd(d)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:d=>t.Ad(d),1004609:d=>t.Ed(d),1004641:(d,h,_)=>{t.ed(Number(d),Number(h),Number(_),!0)},1004704:(d,h,_)=>{t.ed(Number(d),Number(h),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:d=>{t.$b("Abs",d,void 0)},1004869:d=>{t.$b("Neg",d,void 0)},1004920:d=>{t.$b("Floor",d,void 0)},1004973:d=>{t.$b("Ceil",d,void 0)},1005025:d=>{t.$b("Reciprocal",d,void 0)},1005083:d=>{t.$b("Sqrt",d,void 0)},1005135:d=>{t.$b("Exp",d,void 0)},1005186:d=>{t.$b("Erf",d,void 0)},1005237:d=>{t.$b("Sigmoid",d,void 0)},1005292:(d,h,_)=>{t.$b("HardSigmoid",d,{alpha:h,beta:_})},1005371:d=>{t.$b("Log",d,void 0)},1005422:d=>{t.$b("Sin",d,void 0)},1005473:d=>{t.$b("Cos",d,void 0)},1005524:d=>{t.$b("Tan",d,void 0)},1005575:d=>{t.$b("Asin",d,void 0)},1005627:d=>{t.$b("Acos",d,void 0)},1005679:d=>{t.$b("Atan",d,void 0)},1005731:d=>{t.$b("Sinh",d,void 0)},1005783:d=>{t.$b("Cosh",d,void 0)},1005835:d=>{t.$b("Asinh",d,void 0)},1005888:d=>{t.$b("Acosh",d,void 0)},1005941:d=>{t.$b("Atanh",d,void 0)},1005994:d=>{t.$b("Tanh",d,void 0)},1006046:d=>{t.$b("Not",d,void 0)},1006097:(d,h,_)=>{t.$b("Clip",d,{min:h,max:_})},1006166:d=>{t.$b("Clip",d,void 0)},1006218:(d,h)=>{t.$b("Elu",d,{alpha:h})},1006276:d=>{t.$b("Gelu",d,void 0)},1006328:d=>{t.$b("Relu",d,void 0)},1006380:(d,h)=>{t.$b("LeakyRelu",d,{alpha:h})},1006444:(d,h)=>{t.$b("ThresholdedRelu",d,{alpha:h})},1006514:(d,h)=>{t.$b("Cast",d,{to:h})},1006572:d=>{t.$b("Add",d,void 0)},1006623:d=>{t.$b("Sub",d,void 0)},1006674:d=>{t.$b("Mul",d,void 0)},1006725:d=>{t.$b("Div",d,void 0)},1006776:d=>{t.$b("Pow",d,void 0)},1006827:d=>{t.$b("Equal",d,void 0)},1006880:d=>{t.$b("Greater",d,void 0)},1006935:d=>{t.$b("GreaterOrEqual",d,void 0)},1006997:d=>{t.$b("Less",d,void 0)},1007049:d=>{t.$b("LessOrEqual",d,void 0)},1007108:(d,h,_,w,I)=>{t.$b("ReduceMean",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007283:(d,h,_,w,I)=>{t.$b("ReduceMax",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007457:(d,h,_,w,I)=>{t.$b("ReduceMin",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007631:(d,h,_,w,I)=>{t.$b("ReduceProd",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007806:(d,h,_,w,I)=>{t.$b("ReduceSum",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1007980:(d,h,_,w,I)=>{t.$b("ReduceL1",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008153:(d,h,_,w,I)=>{t.$b("ReduceL2",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008326:(d,h,_,w,I)=>{t.$b("ReduceLogSum",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008503:(d,h,_,w,I)=>{t.$b("ReduceSumSquare",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008683:(d,h,_,w,I)=>{t.$b("ReduceLogSumExp",d,{keepDims:!!h,noopWithEmptyAxes:!!_,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1008863:d=>{t.$b("Where",d,void 0)},1008916:(d,h,_)=>{t.$b("Transpose",d,{perm:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(_)>>>0)):[]})},1009040:(d,h,_,w)=>{t.$b("DepthToSpace",d,{blocksize:h,mode:We(_),format:w?"NHWC":"NCHW"})},1009173:(d,h,_,w)=>{t.$b("DepthToSpace",d,{blocksize:h,mode:We(_),format:w?"NHWC":"NCHW"})},1009306:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe,jt)=>{t.$b("ConvTranspose",d,{format:J?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[M,z],strides:[L],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:me?Array.from((v(),A).subarray(Number(me)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((v(),A).subarray(Number(Ce)>>>0,Number(Oe)>>>0)):[],activation:We(jt)})},1009739:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe)=>{t.$b("ConvTranspose",d,{format:L?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[J>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],outputShape:$e?Array.from((v(),A).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],activation:We(Oe)})},1010400:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe,jt)=>{t.$b("ConvTranspose",d,{format:J?"NHWC":"NCHW",autoPad:h,dilations:[_],group:w,kernelShape:[I],pads:[M,z],strides:[L],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:me?Array.from((v(),A).subarray(Number(me)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((v(),A).subarray(Number(Ce)>>>0,Number(Oe)>>>0)):[],activation:We(jt)})},1010833:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe)=>{t.$b("ConvTranspose",d,{format:L?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:w,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[J>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],outputShape:$e?Array.from((v(),A).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],activation:We(Oe)})},1011494:(d,h)=>{t.$b("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},1011585:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe)=>{t.$b("AveragePool",d,{format:Oe?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:$e?Array.from((v(),A).subarray(Number($e)>>>0,Number(Ce)>>>0)):[]})},1012064:(d,h)=>{t.$b("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},1012155:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe)=>{t.$b("AveragePool",d,{format:Oe?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:$e?Array.from((v(),A).subarray(Number($e)>>>0,Number(Ce)>>>0)):[]})},1012634:(d,h)=>{t.$b("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},1012721:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe)=>{t.$b("MaxPool",d,{format:Oe?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:$e?Array.from((v(),A).subarray(Number($e)>>>0,Number(Ce)>>>0)):[]})},1013196:(d,h)=>{t.$b("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},1013283:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe)=>{t.$b("MaxPool",d,{format:Oe?"NHWC":"NCHW",auto_pad:h,ceil_mode:_,count_include_pad:w,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:$e?Array.from((v(),A).subarray(Number($e)>>>0,Number(Ce)>>>0)):[]})},1013758:(d,h,_,w,I)=>{t.$b("Gemm",d,{alpha:h,beta:_,transA:w,transB:I})},1013862:d=>{t.$b("MatMul",d,void 0)},1013916:(d,h,_,w)=>{t.$b("ArgMax",d,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1014024:(d,h,_,w)=>{t.$b("ArgMin",d,{keepDims:!!h,selectLastIndex:!!_,axis:w})},1014132:(d,h)=>{t.$b("Softmax",d,{axis:h})},1014195:(d,h)=>{t.$b("Concat",d,{axis:h})},1014255:(d,h,_,w,I)=>{t.$b("Split",d,{axis:h,numOutputs:_,splitSizes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1014411:d=>{t.$b("Expand",d,void 0)},1014465:(d,h)=>{t.$b("Gather",d,{axis:Number(h)})},1014536:(d,h)=>{t.$b("GatherElements",d,{axis:Number(h)})},1014615:(d,h)=>{t.$b("GatherND",d,{batch_dims:Number(h)})},1014694:(d,h,_,w,I,M,z,L,J,te,me)=>{t.$b("Resize",d,{antialias:h,axes:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],coordinateTransformMode:We(I),cubicCoeffA:M,excludeOutside:z,extrapolationValue:L,keepAspectRatioPolicy:We(J),mode:We(te),nearestMode:We(me)})},1015056:(d,h,_,w,I,M,z)=>{t.$b("Slice",d,{starts:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(_)>>>0)):[],ends:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[],axes:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[]})},1015320:d=>{t.$b("Tile",d,void 0)},1015372:(d,h,_)=>{t.$b("InstanceNormalization",d,{epsilon:h,format:_?"NHWC":"NCHW"})},1015486:(d,h,_)=>{t.$b("InstanceNormalization",d,{epsilon:h,format:_?"NHWC":"NCHW"})},1015600:d=>{t.$b("Range",d,void 0)},1015653:(d,h)=>{t.$b("Einsum",d,{equation:We(h)})},1015734:(d,h,_,w,I)=>{t.$b("Pad",d,{mode:h,value:_,pads:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(I)>>>0)):[]})},1015877:(d,h,_,w,I,M)=>{t.$b("BatchNormalization",d,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:M?"NHWC":"NCHW"})},1016046:(d,h,_,w,I,M)=>{t.$b("BatchNormalization",d,{epsilon:h,momentum:_,spatial:!!I,trainingMode:!!w,format:M?"NHWC":"NCHW"})},1016215:(d,h,_)=>{t.$b("CumSum",d,{exclusive:Number(h),reverse:Number(_)})},1016312:(d,h,_)=>{t.$b("DequantizeLinear",d,{axis:h,blockSize:_})},1016402:(d,h,_,w,I)=>{t.$b("GridSample",d,{align_corners:h,mode:We(_),padding_mode:We(w),format:I?"NHWC":"NCHW"})},1016572:(d,h,_,w,I)=>{t.$b("GridSample",d,{align_corners:h,mode:We(_),padding_mode:We(w),format:I?"NHWC":"NCHW"})},1016742:(d,h)=>{t.$b("ScatterND",d,{reduction:We(h)})},1016827:(d,h,_,w,I,M,z,L,J)=>{t.$b("Attention",d,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:M,qkvHiddenSizes:z?Array.from((v(),A).subarray(Number(L)>>>0,Number(L)+z>>>0)):[],pastPresentShareBuffer:!!J})},1017099:d=>{t.$b("BiasAdd",d,void 0)},1017154:d=>{t.$b("BiasSplitGelu",d,void 0)},1017215:d=>{t.$b("FastGelu",d,void 0)},1017271:(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe,jt,Ts)=>{t.$b("Conv",d,{format:$e?"NHWC":"NCHW",auto_pad:h,dilations:_?Array.from((v(),A).subarray(Number(_)>>>0,Number(w)>>>0)):[],group:I,kernel_shape:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],pads:L?Array.from((v(),A).subarray(Number(L)>>>0,Number(J)>>>0)):[],strides:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],w_is_const:()=>!!(v(),O)[Number(Ce)>>>0],activation:We(Oe),activation_params:jt?Array.from((v(),V).subarray(Number(jt)>>>0,Number(Ts)>>>0)):[]})},1017855:d=>{t.$b("Gelu",d,void 0)},1017907:(d,h,_,w,I,M,z,L,J)=>{t.$b("GroupQueryAttention",d,{numHeads:h,kvNumHeads:_,scale:w,softcap:I,doRotary:M,rotaryInterleaved:z,smoothSoftmax:L,localWindowSize:J})},1018124:(d,h,_,w)=>{t.$b("LayerNormalization",d,{axis:h,epsilon:_,simplified:!!w})},1018235:(d,h,_,w)=>{t.$b("LayerNormalization",d,{axis:h,epsilon:_,simplified:!!w})},1018346:(d,h,_,w,I,M)=>{t.$b("MatMulNBits",d,{k:h,n:_,accuracyLevel:w,bits:I,blockSize:M})},1018473:(d,h,_,w,I,M)=>{t.$b("MultiHeadAttention",d,{numHeads:h,isUnidirectional:_,maskFilterValue:w,scale:I,doRotary:M})},1018632:(d,h)=>{t.$b("QuickGelu",d,{alpha:h})},1018696:(d,h,_,w,I)=>{t.$b("RotaryEmbedding",d,{interleaved:!!h,numHeads:_,rotaryEmbeddingDim:w,scale:I})},1018835:(d,h,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:h,simplified:!!_})},1018937:(d,h,_)=>{t.$b("SkipLayerNormalization",d,{epsilon:h,simplified:!!_})},1019039:(d,h,_,w)=>{t.$b("GatherBlockQuantized",d,{gatherAxis:h,quantizeAxis:_,blockSize:w})},1019160:d=>{t.Fd(d)},1019194:(d,h)=>t.Hd(Number(d),Number(h),t.Yc.Kd,t.Yc.errors)};function m2(d,h,_){return im(async()=>{await t.Dd(Number(d),Number(h),Number(_))})}function g2(){return typeof wasmOffsetConverter<"u"}function y2(d,h,_,w){var I=we();try{return Lm(d,h,_,w)}catch(M){if(ge(I),M!==M+0)throw M;_e(1,0)}}function w2(d,h,_){var w=we();try{return Bm(d,h,_)}catch(I){if(ge(w),I!==I+0)throw I;_e(1,0)}}function _2(d){var h=we();try{zm(d)}catch(_){if(ge(h),_!==_+0)throw _;_e(1,0)}}function b2(d,h){var _=we();try{return vs(d,h)}catch(w){if(ge(_),w!==w+0)throw w;_e(1,0)}}function $2(d,h,_){var w=we();try{Rm(d,h,_)}catch(I){if(ge(w),I!==I+0)throw I;_e(1,0)}}function x2(d,h){var _=we();try{Fm(d,h)}catch(w){if(ge(_),w!==w+0)throw w;_e(1,0)}}function v2(d,h,_,w,I,M,z){var L=we();try{return Pm(d,h,_,w,I,M,z)}catch(J){if(ge(L),J!==J+0)throw J;_e(1,0)}}function S2(d,h,_,w,I,M){var z=we();try{Om(d,h,_,w,I,M)}catch(L){if(ge(z),L!==L+0)throw L;_e(1,0)}}function T2(d,h,_,w){var I=we();try{Um(d,h,_,w)}catch(M){if(ge(I),M!==M+0)throw M;_e(1,0)}}function I2(d,h,_,w,I){var M=we();try{Nm(d,h,_,w,I)}catch(z){if(ge(M),z!==z+0)throw z;_e(1,0)}}function k2(d,h,_,w,I,M,z){var L=we();try{Wm(d,h,_,w,I,M,z)}catch(J){if(ge(L),J!==J+0)throw J;_e(1,0)}}function E2(d,h,_,w,I,M,z){var L=we();try{qm(d,h,_,w,I,M,z)}catch(J){if(ge(L),J!==J+0)throw J;_e(1,0)}}function C2(d,h,_,w,I,M,z,L){var J=we();try{Km(d,h,_,w,I,M,z,L)}catch(te){if(ge(J),te!==te+0)throw te;_e(1,0)}}function M2(d,h,_,w,I){var M=we();try{return Gm(d,h,_,w,I)}catch(z){if(ge(M),z!==z+0)throw z;_e(1,0)}}function A2(d,h,_){var w=we();try{return Xm(d,h,_)}catch(I){if(ge(w),I!==I+0)throw I;_e(1,0)}}function R2(d,h,_,w,I,M,z,L){var J=we();try{Ym(d,h,_,w,I,M,z,L)}catch(te){if(ge(J),te!==te+0)throw te;_e(1,0)}}function z2(d,h,_,w,I,M,z,L,J,te,me,$e){var Ce=we();try{Vm(d,h,_,w,I,M,z,L,J,te,me,$e)}catch(Oe){if(ge(Ce),Oe!==Oe+0)throw Oe;_e(1,0)}}function O2(d,h,_,w,I,M){var z=we();try{return Hm(d,h,_,w,I,M)}catch(L){if(ge(z),L!==L+0)throw L;_e(1,0)}}function N2(d,h,_){var w=we();try{return Zm(d,h,_)}catch(I){if(ge(w),I!==I+0)throw I;return _e(1,0),0n}}function B2(d,h,_,w,I,M,z,L,J){var te=we();try{Dm(d,h,_,w,I,M,z,L,J)}catch(me){if(ge(te),me!==me+0)throw me;_e(1,0)}}function D2(d){var h=we();try{return Qm(d)}catch(_){if(ge(h),_!==_+0)throw _;_e(1,0)}}function P2(d,h){var _=we();try{return hg(d,h)}catch(w){if(ge(_),w!==w+0)throw w;return _e(1,0),0n}}function U2(d){var h=we();try{return Jm(d)}catch(_){if(ge(h),_!==_+0)throw _;return _e(1,0),0n}}function L2(d,h,_,w){var I=we();try{return ag(d,h,_,w)}catch(M){if(ge(I),M!==M+0)throw M;_e(1,0)}}function F2(d,h,_,w,I){var M=we();try{return sg(d,h,_,w,I)}catch(z){if(ge(M),z!==z+0)throw z;_e(1,0)}}function G2(d,h,_,w,I,M){var z=we();try{return og(d,h,_,w,I,M)}catch(L){if(ge(z),L!==L+0)throw L;_e(1,0)}}function W2(d,h,_,w,I,M){var z=we();try{return ug(d,h,_,w,I,M)}catch(L){if(ge(z),L!==L+0)throw L;_e(1,0)}}function q2(d,h,_,w,I,M,z,L){var J=we();try{return jm(d,h,_,w,I,M,z,L)}catch(te){if(ge(J),te!==te+0)throw te;_e(1,0)}}function V2(d,h,_,w,I){var M=we();try{return lg(d,h,_,w,I)}catch(z){if(ge(M),z!==z+0)throw z;return _e(1,0),0n}}function H2(d,h,_,w){var I=we();try{return dg(d,h,_,w)}catch(M){if(ge(I),M!==M+0)throw M;_e(1,0)}}function j2(d,h,_,w){var I=we();try{return cg(d,h,_,w)}catch(M){if(ge(I),M!==M+0)throw M;_e(1,0)}}function K2(d,h,_,w,I,M,z,L,J,te,me,$e){var Ce=we();try{return pg(d,h,_,w,I,M,z,L,J,te,me,$e)}catch(Oe){if(ge(Ce),Oe!==Oe+0)throw Oe;_e(1,0)}}function X2(d,h,_,w,I,M,z,L,J,te,me){var $e=we();try{rg(d,h,_,w,I,M,z,L,J,te,me)}catch(Ce){if(ge($e),Ce!==Ce+0)throw Ce;_e(1,0)}}function Y2(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe,jt,Ts){var e$=we();try{ig(d,h,_,w,I,M,z,L,J,te,me,$e,Ce,Oe,jt,Ts)}catch(Is){if(ge(e$),Is!==Is+0)throw Is;_e(1,0)}}function Z2(d,h,_){var w=we();try{return eg(d,h,_)}catch(I){if(ge(w),I!==I+0)throw I;_e(1,0)}}function Q2(d,h,_){var w=we();try{return tg(d,h,_)}catch(I){if(ge(w),I!==I+0)throw I;_e(1,0)}}function J2(d,h,_,w){var I=we();try{ng(d,h,_,w)}catch(M){if(ge(I),M!==M+0)throw M;_e(1,0)}}function Pr(){if(0<Fe)Ge=Pr;else if(i)y==null||y(t),H();else{for(var d=De;0<d.length;)d.shift()(t);0<Fe?Ge=Pr:(t.calledRun=!0,E||(H(),y==null||y(t)))}}return i||(Bt=await ce(),Pr()),t.PTR_SIZE=4,U?t:new Promise((d,h)=>{y=d,b=h})}var Xs,Ys,Fg=Y(()=>{var e,t;Xs=Ks,Ys=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ys&&Ks()}),jr,Kr,Zs,ot,Qs,er,Js,eo,Xr,to,Yr,no,Zr,ro,Qr=Y(()=>{qr(),jr=typeof location>"u"?void 0:location.origin,Kr=self.location.href>"file:"&&self.location.href<"file;",Zs=()=>{{if(Kr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,jr).href}return self.location.href}},ot=Zs(),Qs=()=>{if(ot&&!ot.startsWith("blob:"))return ot.substring(0,ot.lastIndexOf("/")+1)},er=(e,t)=>{try{let n=t??ot;return(n?new URL(e,n):new URL(e)).origin===jr}catch{return!1}},Js=(e,t)=>{let n=t??ot;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},eo=(e,t)=>`${t??"./"}${e}`,Xr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},to=async e=>(await import(e)).default,Yr=(Lg(),In(Vs)).default,no=async()=>{if(!ot)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(er(ot))return[void 0,Yr()];let e=await Xr(ot);return[e,Yr(e)]},Zr=(Fg(),In(js)).default,ro=async(e,t,n,r)=>{let i=Zr&&!(e||t);if(i)if(ot)i=er(ot)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Zr];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Js(a,t),o=n&&s&&!er(s,t),u=o?await Xr(s):s??eo(a,t);return[o?u:void 0,await to(u)]}}}),Jr,tr,Cn,ei,io,ao,so,ti,Ae,Zt=Y(()=>{Qr(),tr=!1,Cn=!1,ei=!1,io=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ao=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},so=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ti=async e=>{if(tr)return Promise.resolve();if(Cn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ei)throw new Error("previous call to 'initializeWebAssembly()' failed.");Cn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!so())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ao())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=io();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,p=e.wasmBinary,[c,f]=await ro(o,a,n>1,!!p||!!l),m=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),g.push(new Promise((y,b)=>{let $={numThreads:n};if(p)$.wasmBinary=p,$.locateFile=x=>x;else if(l||a)$.locateFile=x=>l??a+x;else if(o&&o.indexOf("blob:")!==0)$.locateFile=x=>new URL(x,o).href;else if(c){let x=Qs();x&&($.locateFile=T=>x+T)}f($).then(x=>{Cn=!1,tr=!0,Jr=x,y(),c&&URL.revokeObjectURL(c)},x=>{Cn=!1,ei=!0,b(x)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ae=()=>{if(tr&&Jr)return Jr;throw new Error("WebAssembly is not initialized yet.")}}),ht,nr,Se,ni=Y(()=>{Zt(),ht=(e,t)=>{let n=Ae(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},nr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")nr(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Se=e=>{let t=Ae(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),oo,Gg=Y(()=>{Zt(),ni(),oo=e=>{let t=Ae(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=ht(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Se("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&nr(e.extra,"",new WeakSet,(s,o)=>{let u=ht(s,r),l=ht(o,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Se(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),uo,lo,co,Qt,po,ho,Wg=Y(()=>{Zt(),ni(),uo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},lo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},co=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Qt=(e,t,n,r)=>{let i=ht(t,r),a=ht(n,r);Ae()._OrtAddSessionConfigEntry(e,i,a)!==0&&Se(`Can't set a session config entry: ${t} - ${n}.`)},po=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",Qt(e,"session.disable_quant_qdq","1",n),Qt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&Qt(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Qt(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=ht(a,n),u=s.length,l=0,p=0;if(u>0){l=Ae()._malloc(u*Ae().PTR_SIZE),n.push(l),p=Ae()._malloc(u*Ae().PTR_SIZE),n.push(p);for(let c=0;c<u;c++)Ae().setValue(l+c*Ae().PTR_SIZE,s[c][0],"*"),Ae().setValue(p+c*Ae().PTR_SIZE,s[c][1],"*")}await Ae()._OrtAppendExecutionProvider(e,o,l,p,u)!==0&&Se(`Can't append execution provider: ${a}.`)}},ho=async e=>{let t=Ae(),n=0,r=[],i=e||{};co(i);try{let a=uo(i.graphOptimizationLevel??"all"),s=lo(i.executionMode??"sequential"),o=typeof i.logId=="string"?ht(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let p=typeof i.optimizedModelFilePath=="string"?ht(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,l,p),n===0&&Se("Can't create session options."),i.executionProviders&&await po(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Qt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,f]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=ht(c,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&Se(`Can't set a free dimension override: ${c} - ${f}.`)}return i.extra!==void 0&&nr(i.extra,"",new WeakSet,(c,f)=>{Qt(n,c,f,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Se("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),Jt,At,en,rr,ir,ri,ii,ai,de=Y(()=>{Jt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},At=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},en=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},rr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ir=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ri=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ii=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ai=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),si,fo=Y(()=>{qr(),si=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),mo,go,yo,wo,oi,_o,be,Rt=Y(()=>{de(),mo=["V","I","W","E","F"],go=(e,t)=>{console.log(`[${mo[e]},${new Date().toISOString()}]${t}`)},oi=(e,t)=>{yo=e,wo=t},_o=(e,t)=>{let n=ir(e),r=ir(yo);n>=r&&go(n,typeof t=="function"?t():t)},be=(...e)=>{wo&&_o(...e)}}),bo,gn,D,ar,$o,xo,vo,he=Y(()=>{bo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},gn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=bo.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],l=i-o<0?1:t[i-o];if(u!==l&&u>1&&l>1)return;let p=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class Ur{static size(t){return Ur.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ur.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ur.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},ar=class Zn{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Zn.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Zn.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Zn.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Zn.adjustPadAndReturnShape(n[l+2],i[l],a[l],s[l],o,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/n+1)}},$o=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!gn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},xo=-34028234663852886e22,vo=34028234663852886e22}),ui,So=Y(()=>{de(),ui=(e,t)=>new(rr(t))(e)}),li,di,ci,To,pi,Io,hi,fi,mi,ko,Eo,qg=Y(()=>{de(),Rt(),li=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),di=(e,t)=>{if(t==="int32")return e;let n=li.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(rr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},ci=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},To=1,pi=()=>To++,Io=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),hi=(e,t)=>{let n=li.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},fi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return hi(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=ci(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},mi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Io.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);be("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==hi(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=di(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?ci(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ko=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=pi();return this.tensorTrackersById.set(e,new mi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=pi(),s=new fi({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new mi(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[l,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,n)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new fi({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Eo=(...e)=>new ko(...e)}),Mn,Co,Mo,Vg=Y(()=>{de(),Zt(),So(),qg(),Rt(),Mn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Co=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Mo=class{constructor(e){this.tensorManager=Eo(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,oi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Co(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Mn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Mn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ae().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ui(n,t)}}registerMLTensor(e,t,n,r){let i=Mn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(l);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":p=new Int32Array(l);break;case"uint32":p=new Uint32Array(l);break;case"int64":if(s){let c=di(new Uint8Array(l),"int64");p=new Int32Array(c.buffer),i.dataType="int32"}else p=new BigInt64Array(l);break;case"uint64":p=new BigUint64Array(l);break;case"int8":p=new Int8Array(l);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Mn.get(Jt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),gi=Y(()=>{}),yi,sr,or,Ao,Ro,wi,_i,zo,Oo,Hg=Y(()=>{Rt(),gi(),yi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),sr=[],or=e=>Math.ceil(Number(e)/16)*16,Ao=e=>{for(let t=0;t<sr.length;t++){let n=sr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ro=1,wi=()=>Ro++,_i=async(e,t,n,r)=>{let i=or(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},zo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of yi)sr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=or(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=or(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=wi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ao(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:wi(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await _i(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=yi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Oo=(...e)=>new zo(...e)}),No,ve,Le=Y(()=>{No=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ve=e=>new No(e)}),yn,ur,Ve,Je,se,Pe,bi,wn,Pt,ae,An,W,ie,Bo,$i,Do,Po,fe=Y(()=>{de(),he(),yn=64,ur=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ve=(e,t=1)=>{let n=ur(e,t);return typeof n=="string"?n:n[0]},Je=(e,t=1)=>{let n=ur(e,t);return typeof n=="string"?n:n[1]},se=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},Pe=e=>e%4===0?4:e%2===0?2:1,bi=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,wn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Pt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ae=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,An=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=ur(t,i),p=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],f={indices:u,value:p,storage:c,tensor:t},m=U=>typeof U=="string"?U:`${U}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=a?"uniforms.":"",b=`${y}${e}_shape`,$=`${y}${e}_strides`,x="";for(let U=0;U<s-1;U++)x+=`
    let dim${U} = current / ${ae($,U,s)};
    let rest${U} = current % ${ae($,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;x+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${x}
    return indices;
  }`,S=U=>(g.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),k=[];if(s>=2)for(let U=s-1;U>=0;U--)k.push(`${ae($,U,s)} * (indices[${U}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,C=U=>(g.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),v=(...U)=>s===0?"0u":`${f.indices}(${U.map(m).join(",")})`,R=(U,X)=>s<2?`${U}`:`${ae(U,X,s)}`,O=(U,X,H)=>s<2?`${U}=${H};`:`${ae(U,X,s)}=${H};`,j={},P=(U,X)=>{g.broadcastedIndicesToOffset=!0;let H=`${X.name}broadcastedIndicesTo${e}Offset`;if(H in j)return`${H}(${U})`;let q=[];for(let ue=s-1;ue>=0;ue--){let ce=X.indicesGet("outputIndices",ue+X.rank-s);q.push(`${R($,ue)} * (${ce} % ${R(b,ue)})`)}return j[H]=`fn ${H}(outputIndices: ${X.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${H}(${U})`},F=(U,X)=>(()=>{if(f.storage===f.value)return`${e}[${U}]=${X};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${X}), select(0u, 0xFFFFFFFFu, ${X} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${X}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${X}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=U=>(()=>{if(f.storage===f.value)return`${e}[${U}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${U}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${U}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),B=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${A(`i2o_${e}(indices)`)};
  }`,V=s<2?"":(()=>{let U=o.map(H=>`d${H}: u32`).join(", "),X=o.map(H=>`d${H}`).join(", ");return`
  fn get_${e}(${U}) -> ${p} {
    return get_${e}ByIndices(${v(X)});
  }`})(),K=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let X=U.map(m).join(",");return s===0?A("0u"):s===1?A(X[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${X})`)},re=U=>s<2?A(U):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${U})`),N=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,Z=s<2?"":(()=>{let U=o.map(H=>`d${H}: u32`).join(", "),X=o.map(H=>`d${H}`).join(", ");return`
  fn set_${e}(${U}, value: ${p}) {
    set_${e}ByIndices(${v(X)}, value);
  }`})();return{impl:()=>{let U=[],X=!1;return g.offsetToIndices&&(U.push(T),X=!0),g.indicesToOffset&&(U.push(E),X=!0),g.broadcastedIndicesToOffset&&(Object.values(j).forEach(H=>U.push(H)),X=!0),g.set&&(U.push(Z),X=!0),g.setByIndices&&(U.push(N),X=!0),g.get&&(U.push(V),X=!0),g.getByIndices&&(U.push(B),X=!0),!a&&X&&U.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${$} = ${f.indices}(${D.computeStrides(n).join(",")});`),U.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:P,indices:v,indicesGet:R,indicesSet:O,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let X=U[s];if(typeof X!="string")throw new Error("value must be string");let H=U.slice(0,s).map(m).join(",");return s===0?F("0u",X):s===1?F(H[0],X):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${H}, ${X})`)},setByOffset:F,setByIndices:(U,X)=>s<2?F(U,X):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${X});`),get:K,getByOffset:A,getByIndices:re,usage:r,name:e,strides:$,shape:b,rank:s}},W=(e,t,n,r=1)=>An(e,t,n,"input",r),ie=(e,t,n,r=1)=>An(e,t,n,"output",r),Bo=(e,t,n)=>An(e,t,n,"atomicOutput",1),$i=(e,t,n,r=1)=>An(e,t,n,"internal",r),Do=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=yn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Po=(e,t)=>new Do(e,t)}),Uo,xi,Lo,Fo,Go,Wo,ut,qo,Vo,Ut=Y(()=>{de(),he(),Le(),fe(),Uo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},xi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Lo=(e,t)=>D.sortBasedOnPerm(e,xi(e.length,t)),Fo=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},Go=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Wo=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ut=(e,t)=>{let n=e.dataType,r=e.dims.length,i=xi(r,t),a=Lo(e.dims,i),s=e.dims,o=a,u=r<2||Wo(i,e.dims),l;if(u)return l=g=>{let y=W("input",n,s,4),b=ie("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:l};let{newShape:p,newPerm:c}=Go(e.dims,i),f=D.areEqual(c,[2,3,1]),m=D.areEqual(c,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let g=16;return l=y=>{let b=W("a",n,s.length),$=ie("output",n,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${b.getByIndices(`${b.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:y},...se(s,o)]}},getShaderSource:l}}return l=g=>{let y=W("a",n,s.length),b=ie("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,b)}

  ${Fo(i,r,y,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...se(s,o)]}},getShaderSource:l}},qo=(e,t)=>{Uo(e.inputs,t.perm),e.compute(ut(e.inputs[0],t.perm))},Vo=e=>ve({perm:e.perm})}),Ho,jo,Ko,Xo,Yo,Zo,Qo,Jo,eu,tu,ft,nu,ru,iu,au,su,ou,uu,lu,du,cu,jg=Y(()=>{de(),he(),fe(),Si(),Ut(),Ho={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},jo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ko={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Yo=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Zo=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},Qo=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Jo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},eu=(e,t)=>{let n=[];if(!Jo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},tu=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=D.size(a),l=D.size(s),p=W("_A",n[0].dataType,o),c=ie("output",i,a),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(p,c)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ko[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Ho[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${jo[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Xo[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},ft=(e,t,n,r)=>{let i=e.inputs.length===1?n:vi(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=D.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=eu(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ut(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Yo(o.length,u.dims.length));let[p,c]=Zo(u.dims,o),f=p;i.keepDims&&(f=Qo(p,s)),e.compute(tu(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,c),{inputs:[u]})},nu=(e,t)=>{ft(e,"ReduceMeanShared",t,"mean")},ru=(e,t)=>{ft(e,"ReduceL1Shared",t,"l1")},iu=(e,t)=>{ft(e,"ReduceL2Shared",t,"l2")},au=(e,t)=>{ft(e,"ReduceLogSumExpShared",t,"logSumExp")},su=(e,t)=>{ft(e,"ReduceMaxShared",t,"max")},ou=(e,t)=>{ft(e,"ReduceMinShared",t,"min")},uu=(e,t)=>{ft(e,"ReduceProdShared",t,"prod")},lu=(e,t)=>{ft(e,"ReduceSumShared",t,"sum")},du=(e,t)=>{ft(e,"ReduceSumSquareShared",t,"sumSquare")},cu=(e,t)=>{ft(e,"ReduceLogSumShared",t,"logSum")}}),mt,pu,lr,vi,gt,hu,fu,mu,gu,yu,wu,_u,bu,$u,xu,yt,vu,Su,Tu,Iu,ku,Eu,Cu,Mu,Au,Ru,Si=Y(()=>{de(),he(),Le(),fe(),jg(),mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},pu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],lr=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],l=n[0].dims,p=l.length,c=D.normalizeAxes(i,p),f=!o&&c.length===0;l.forEach((y,b)=>{f||c.indexOf(b)>=0?s&&u.push(1):u.push(y)});let m=u.length,g=D.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let b=[],$=W("_A",n[0].dataType,p),x=ie("output",a,m),T=r($,x,c),S=T[2];for(let k=0,E=0;k<p;k++)f||c.indexOf(k)>=0?(s&&E++,S=`for(var j${k}: u32 = 0; j${k} < ${l[k]}; j${k}++) {
                  ${T[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${$.indicesSet("input_indices",k,`j${k}`)}
                  ${S}
                }`):(b.push(`${$.indicesSet("input_indices",k,x.indicesGet("output_indices",E))};`),E++);return`

        ${y.registerUniform("output_size","u32").declareVariables($,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?x.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...se(l,u)]})}},vi=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),ve({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},gt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:vi(i,n);e.compute(lr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?pu:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},hu=(e,t)=>{mt(e.inputs),gt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},fu=(e,t)=>{mt(e.inputs),gt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},mu=(e,t)=>{mt(e.inputs),gt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},gu=(e,t)=>{mt(e.inputs),gt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},yu=(e,t)=>{mt(e.inputs),gt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},wu=(e,t)=>{mt(e.inputs),gt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},_u=(e,t)=>{mt(e.inputs),gt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},bu=(e,t)=>{mt(e.inputs),gt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},$u=(e,t)=>{mt(e.inputs),gt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},xu=(e,t)=>{mt(e.inputs),gt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},yt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},vu=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wu(e,t):nu(e,t)},Su=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):ru(e,t)},Tu=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):iu(e,t)},Iu=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):au(e,t)},ku=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):su(e,t)},Eu=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_u(e,t):ou(e,t)},Cu=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bu(e,t):uu(e,t)},Mu=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$u(e,t):lu(e,t)},Au=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xu(e,t):du(e,t)},Ru=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):cu(e,t)}}),Ti,zu,Ou,Ii,Kg=Y(()=>{de(),Le(),Si(),Ti=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},zu=(e,t)=>{Ti(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(lr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Ou=(e,t)=>{Ti(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(lr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Ii=e=>ve(e)}),Nu,dr,Bu,Du,Pu,Rn,Uu,Lu,ki=Y(()=>{de(),he(),gi(),fe(),Nu=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],p=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,f=c,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=l;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let b=g+y,$=-1,x=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:p,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},dr=(e,t,n)=>t&&e?`
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
    `,Bu=(e,t,n,r,i,a,s,o)=>{let u=Pe(s?1:a),l=64,p=a/u;p<l&&(l=32);let c=Math.ceil(a/u/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:p},{type:12,data:c}],m=Ve(e.dataType,u),g=Je(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let b=$=>{let x=ie("x",e.dataType,e.dims,u),T=[x],S=s?W("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let k=o?W("total_sequence_length_input",o.dataType,o.dims):void 0;k&&T.push(k);let E=Je(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${$.registerUniforms(C).declareVariables(...T)}
  ${$.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${dr(S,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${x.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${m};${u}`,inputDependencies:y},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Du=(e,t,n,r,i,a,s,o,u)=>{let l=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,l],c=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,f,l,a.headSize]:void 0,g=a.nReps?a.nReps:1,y=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=Pe(a.headSize),$=a.headSize/b,x=12,T={x:Math.ceil(l/x),y:Math.ceil(a.sequenceLength/x),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],k=c&&r&&D.size(r.dims)>0,E=["type","type"];k&&E.push("type"),i&&E.push("type"),o&&E.push("type"),u&&E.push("type");let C=[{dims:p,dataType:t.dataType,gpuDataType:0}];c&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=R=>{let O=W("q",t.dataType,t.dims,b),j=W("key",n.dataType,n.dims,b),P=[O,j];if(k){let N=W("past_key",r.dataType,r.dims,b);P.push(N)}i&&P.push(W("attention_bias",i.dataType,i.dims));let F=o?W("seq_lens",o.dataType,o.dims):void 0;F&&P.push(F);let A=u?W("total_sequence_length_input",u.dataType,u.dims):void 0;A&&P.push(A);let B=ie("output",t.dataType,p),V=[B];c&&V.push(ie("present_key",t.dataType,m,b));let K=Je(1,b),re=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${O.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${O.type.storage}, ${x*x}>;
  ${R.registerUniforms(re).declareVariables(...P,...V)}
  ${R.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${dr(F,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${K}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&c?`
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
          value += ${K}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(b){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${b}`)}})()};
        output[outputIdx] = ${B.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},Pu=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,p=i.vHiddenSize*l,c=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,p],y=12,b={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&D.size(r.dims)>0,T=["type","type"];x&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=E=>{let C=W("probs",t.dataType,t.dims),v=W("v",n.dataType,n.dims),R=[C,v];x&&R.push(W("past_value",r.dataType,r.dims));let O=s?W("seq_lens",s.dataType,s.dims):void 0;s&&R.push(O);let j=o?W("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(j);let P=[ie("output",t.dataType,g)];c&&P.push(ie("present_value",t.dataType,m));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${C.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${C.type.value}, ${y*y}>;
  ${E.registerUniforms(F).declareVariables(...R,...P)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${dr(O,j,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:$}),getShaderSource:k}},Rn=(e,t,n,r,i,a,s,o,u,l,p=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,g=f>1?o:void 0,y=f>1?l.pastSequenceLength:0,b=y+l.kvSequenceLength,$=u&&D.size(u.dims)>0?u:void 0,x=[t,n];m&&D.size(m.dims)>0&&x.push(m),$&&x.push($),p&&x.push(p),c&&x.push(c);let T=e.compute(Du(f,t,n,m,$,l,y,p,c),{inputs:x,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Bu(T,l.batchSize,l.numHeads,y,l.sequenceLength,b,p,c),{inputs:p&&c?[T,p,c]:[T],outputs:[]});let S=[T,r];g&&D.size(g.dims)>0&&S.push(g),p&&S.push(p),c&&S.push(c),e.compute(Pu(f,T,r,g,l,y,p,c),{inputs:S,outputs:f>1?[0,2]:[0]})},Uu=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=c=>{let f=ie("output_q",u[0].dataType,n),m=ie("output_k",u[0].dataType,n),g=ie("output_v",u[0].dataType,n),y=W("input",u[0].dataType,u[0].dims),b=W("weight",u[1].dataType,u[1].dims),$=W("bias",u[2].dataType,u[2].dims),x=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${x}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${x}, ${s*s}>;
  var<workgroup> tileWeightK: array<${x}, ${s*s}>;
  var<workgroup> tileWeightV: array<${x}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(y,b,$,f,m,g)}
  ${c.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},Lu=(e,t)=>{let n=Nu(e.inputs,t),[r,i,a]=Uu(e,n);return Rn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Fu,Gu,Wu,qu,Xg=Y(()=>{lt(),de(),he(),Le(),fe(),Fu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Gu=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Pe(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=D.size(a)/s,l=r,p=l?a.length:a,c=W("x",e[0].dataType,e[0].dims,s),f=W("scale",e[1].dataType,e[1].dims,o),m=W("bias",e[2].dataType,e[2].dims,o),g=W("inputMean",e[3].dataType,e[3].dims,o),y=W("inputVar",e[4].dataType,e[4].dims,o),b=ie("y",e[0].dataType,p,s),$=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<f.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},x=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(c,f,m,g,y,b)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...se(a)]:[{type:12,data:u}]})}},Wu=e=>ve(e),qu=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Wu({...t,outputCount:r});if(Me.webgpu.validateInputContent&&Fu(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Gu(n,i))}}),Vu,Hu,ju,Yg=Y(()=>{he(),fe(),Vu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Hu=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,a=W("input",i,t,4),s=W("bias",i,[n],4),o=W("residual",i,t,4),u=ie("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},ju=e=>{Vu(e.inputs),e.compute(Hu(e.inputs))}}),Ku,xe,Xu,Yu,Zu,Qu,Ju,el,tl,nl,rl,il,al,sl,ol,ul,zn,ll,cr,dl,cl,pl,hl,fl,ml,gl,yl,wl,_l,bl,$l,xl,vl,Sl,Tl,Ei,Il,Ci,Mi,kl,El,Cl,Ml,Al,Rl,Ai=Y(()=>{de(),he(),Le(),fe(),Ku=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=W("inputData",n,[o],4),p=ie("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(l,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},xe=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Ku(l,D.size(e.dims),e.dataType,a,n,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(D.size(l[0].dims)/64/4)},programUniforms:u})}},Xu=e=>{e.compute(xe(e.inputs[0],"Abs","abs"))},Yu=e=>{e.compute(xe(e.inputs[0],"Acos","acos"))},Zu=e=>{e.compute(xe(e.inputs[0],"Acosh","acosh"))},Qu=e=>{e.compute(xe(e.inputs[0],"Asin","asin"))},Ju=e=>{e.compute(xe(e.inputs[0],"Asinh","asinh"))},el=e=>{e.compute(xe(e.inputs[0],"Atan","atan"))},tl=e=>{e.compute(xe(e.inputs[0],"Atanh","atanh"))},nl=e=>ve(e),rl=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(xe(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},il=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ve({min:t,max:n})},al=(e,t)=>{let n=t||il(e.inputs),r=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},sl=e=>{e.compute(xe(e.inputs[0],"Ceil","ceil"))},ol=e=>{e.compute(xe(e.inputs[0],"Cos","cos"))},ul=e=>{e.compute(xe(e.inputs[0],"Cosh","cosh"))},zn=e=>ve(e),ll=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},cr=(e="f32")=>`
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
}`,dl=e=>{let t=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,cr(t)))},cl=e=>{e.compute(xe(e.inputs[0],"Exp","exp"))},pl=e=>{e.compute(xe(e.inputs[0],"Floor","floor"))},hl=e=>{let t=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,cr(t)))},fl=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},ml=e=>{e.compute(xe(e.inputs[0],"Not",t=>`!${t}`))},gl=e=>{e.compute(xe(e.inputs[0],"Neg",t=>`-${t}`))},yl=e=>{e.compute(xe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},wl=e=>{let t=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},_l=e=>{e.compute(xe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},bl=e=>ve(e),$l=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},xl=e=>{e.compute(xe(e.inputs[0],"Sin","sin"))},vl=e=>{e.compute(xe(e.inputs[0],"Sinh","sinh"))},Sl=e=>{e.compute(xe(e.inputs[0],"Sqrt","sqrt"))},Tl=e=>{e.compute(xe(e.inputs[0],"Tan","tan"))},Ei=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Il=e=>{e.compute(xe(e.inputs[0],"Tanh",Ei))},Ci=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ei("v")};
}
`,Mi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,kl=e=>{let t=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"FastGelu",Mi,Ci(t),void 0,e.inputs[0].dataType))},El=(e,t)=>{let n=Je(e.inputs[0].dataType);return e.compute(xe(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Cl=e=>{e.compute(xe(e.inputs[0],"Log","log"))},Ml=(e,t)=>`
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
`,Al=e=>`quick_gelu_impl(${e})`,Rl=(e,t)=>{let n=Je(e.inputs[0].dataType);e.compute(xe(e.inputs[0],"QuickGelu",Al,Ml(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),zl,Ol,Nl,Zg=Y(()=>{he(),fe(),Ai(),zl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ol=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=W("input",e[0].dataType,e[0].dims,4),r=W("bias",e[0].dataType,[e[0].dims[2]],4),i=ie("output",e[0].dataType,t,4),a=D.size(t)/4,s=Ve(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${cr(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Nl=e=>{zl(e.inputs),e.compute(Ol(e.inputs))}}),Bl,Dl,wt,Pl,Ul,Ll,Fl,Gl,Wl,ql,Vl,Hl,jl,Qg=Y(()=>{de(),he(),fe(),Bl=(e,t,n,r,i,a,s,o,u,l,p,c)=>{let f,m;typeof o=="string"?f=m=(x,T)=>`${o}((${x}),(${T}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=ie("outputData",p,r.length,4),y=W("aData",u,t.length,4),b=W("bData",l,n.length,4),$;if(i)if(a){let x=D.size(t)===1,T=D.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;x||T?$=g.setByOffset("global_idx",m(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(y.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(T,S,k="")=>{let E=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${k}(${f(E,C)});
          `};p===9?$=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(y,b,g)}

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Dl=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),l=!D.areEqual(o,u),p=o,c=D.size(o),f=!1,m=!1,g=[l];if(l){let y=gn.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");p=y.slice(),c=D.size(p);let b=D.size(o)===1,$=D.size(u)===1,x=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push($),g.push(x),g.push(T);let S=1;for(let k=1;k<p.length;k++){let E=o[o.length-k],C=u[u.length-k];if(E===C)S*=E;else break}S%4===0?(m=!0,f=!0):(b||$||x||T)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>Bl(y,o,u,p,f,l,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(p)/4)},...se(o,u,p)]})}},wt=(e,t,n,r,i,a)=>{e.compute(Dl(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Pl=e=>{wt(e,"Add",(t,n)=>`${t}+${n}`)},Ul=e=>{wt(e,"Div",(t,n)=>`${t}/${n}`)},Ll=e=>{wt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Fl=e=>{wt(e,"Mul",(t,n)=>`${t}*${n}`)},Gl=e=>{let t=W("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;wt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Wl=e=>{wt(e,"Sub",(t,n)=>`${t}-${n}`)},ql=e=>{wt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Vl=e=>{wt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Hl=e=>{wt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},jl=e=>{wt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Kl,Xl,Yl,Zl,Ql,Jl,Jg=Y(()=>{de(),he(),Le(),fe(),Kl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Xl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Yl=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Zl=(e,t,n,r)=>{let i=D.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],p=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],a[y]=o,l.push(e[y].dims.length),s[y]=W(`input${y}`,r,l[y]),u.push("rank"),p.push({type:12,data:a[y]});for(let y=0;y<e.length;++y)p.push(...se(e[y].dims));p.push(...se(n));let c=ie("output",r,n.length),f=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)y.registerUniform(`sizeInConcatAxis${b}`,"u32");return y.declareVariables(...s,c)})()}

  ${Xl(a.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Yl(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g}},Ql=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);Kl(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>D.size(o.dims)>0);e.compute(Zl(s,i,a,n[0].dataType),{inputs:s})},Jl=e=>ve({axis:e.axis})}),tn,nn,rn,Ri,an=Y(()=>{de(),he(),tn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},nn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},rn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ri=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[xo,vo];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),je,ed,zi=Y(()=>{je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ed=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),td,e0=Y(()=>{td=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),On,Oi,Ni=Y(()=>{de(),he(),fe(),an(),On=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${ae(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ae(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Oi=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],p=s[s.length-1],c=Pe(l),f=Pe(p),m=Pe(u),g=D.size(n)/c/m,y=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),$=[D.size(b),u,l],x=[{type:12,data:g},{type:12,data:u},{type:12,data:l},{type:12,data:p}];nn(t,x),x.push(...se(b,s,o)),y&&x.push(...se(e[2].dims)),x.push(...se($));let T=S=>{let k=$i("batch_dims",e[0].dataType,b.length),E=W("a",e[0].dataType,s.length,f),C=W("b",e[1].dataType,o.length,c),v=ie("output",e[0].dataType,$.length,c),R=Ve(v.type.tensor),O=tn(t,v.type.value,R),j=[E,C],P="";if(y){let B=i?c:1;j.push(W("bias",e[2].dataType,e[2].dims.length,B)),P=`${i?`value += bias[col / ${B}];`:`value += ${v.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];rn(t,F);let A=()=>{let B=`var a_data: ${E.type.value};`;for(let V=0;V<f;V++)B+=`
              let b_data${V} = b[(b_offset + (k + ${V}) * uniforms.N + col) / ${c}];`;for(let V=0;V<m;V++){B+=`a_data = a[(a_offset + (row + ${V}) * uniforms.K + k) / ${f}];`;for(let K=0;K<f;K++)B+=`
            values[${V}] = fma(${C.type.value}(a_data${f===1?"":`[${K}]`}), b_data${K}, values[${V}]);
`}return B};return`
  ${S.registerUniforms(F).registerInternalVariables(k).declareVariables(...j,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${On("a_indices",E,E.rank-2,k.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${On("b_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${P}
      ${O}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:T}}}),nd,rd,Bi,Di,id,Pi,ad,pr,Ui=Y(()=>{de(),he(),fe(),an(),Ni(),zi(),nd=(e,t)=>e?`
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
        }`,Bi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],p=i?u:a,c=i?a:u,f=p/t[0],m=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${p/f}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
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
  let batch = ${s?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${nd(i,r)}
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
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${rd(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Di=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,id=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Pi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],p=e[0]*t[0],c=i?l:a,f=i?a:l;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=c/t[0],y=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Di(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
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
      ${Di(i,r)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${c}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${b}
  }
`},ad=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,l=Ve(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${je(e,l)} {
      var value = ${je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${On("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${je(e,l)} {
      var value = ${je(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${On("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${je(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${je(e,l)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},pr=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),p=r?r.slice(0,-2):n.slice(0,-2),c=D.size(p),f=s[s.length-2],m=s[s.length-1],g=o[o.length-1],y=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],x=[Math.ceil(g/$[0]/b[0]),Math.ceil(f/$[1]/b[1]),Math.ceil(c/$[2]/b[2])],T=y?4:1,S=[...u,f,m/T],k=S.length,E=[...l,m,g/T],C=E.length,v=[c,f,g/T],R=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];nn(t,R),R.push(...se(p,S,E));let O=["rank","rank"],j=e.length>2;j&&(R.push(...se(e[2].dims)),O.push("rank")),R.push(...se(v));let P=F=>{let A=p.length,B=$i("batchDims",e[0].dataType,A,1),V=Ve(e[0].dataType),K=W("a",e[0].dataType,k,T),re=W("b",e[1].dataType,C,T),N=ie("result",e[0].dataType,v.length,T),Z=[K,re];if(j){let ue=i?T:1;Z.push(W("bias",e[2].dataType,e[2].dims.length,ue))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];rn(t,U);let X=Ve(N.type.tensor),H=tn(t,N.type.value,X),q=ad(T,j,H,[B,K,re,N],i);return`
  ${F.registerUniforms(U).registerInternalVariables(B).declareVariables(...Z,N)}
  ${q}
  ${y?Bi(b,$,V,B):Pi(b,$,V,B)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${y};${i}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:R}),getShaderSource:P}}}),sd,od,t0=Y(()=>{de(),Rt(),fe(),an(),zi(),e0(),Ui(),sd=(e,t,n,r,i=!1,a,s=4,o=4,u=4,l="f32")=>{let p=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=e?"row":"col",$=e?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${je(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${je(s,l)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${x}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${je(s,l)}(0.0);`,S=e?r&&n?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${je(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${je(o,l)}(0.0);`,k=je(u,l),E=je(e?s:o,l),C=je(e?o:s,l),v=tn(a,k,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${ed(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},od=(e,t,n,r,i,a,s,o,u)=>{let l=t.format==="NHWC",p=l?e[0].dims[3]:e[0].dims[1],c=n[0],f=l?n[2]:n[3],m=l?n[1]:n[2],g=l?n[3]:n[1],y=l&&(p%4===0||p%3===0)&&g%4===0,b=l?g:f*m,$=l?f*m:g,x=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/x[0]/T[0]),Math.ceil($/x[1]/T[1]),Math.ceil(c/x[2]/T[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let k=y?l&&p%4!==0?3:4:1,E=x[1]*T[1],C=x[0]*T[0],v=Math.max(x[0]*k,x[1]),R=r%E===0,O=i%C===0,j=a%v===0,P=y?[k,4,4]:[1,1,1],F=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];nn(t,F),F.push(...se(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(F.push(...se(e[2].dims)),A.push("rank")),F.push(...se(n));let B=V=>{let K=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];rn(t,K);let re=y?4:1,N=Ve(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${N}>`:N}) {
        result[flatIndex] = ${y?`vec4<${N}>`:N}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${N}>`:N}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,U=W("x",e[0].dataType,e[0].dims.length,k===3?1:k),X=W("w",e[1].dataType,e[1].dims.length,re),H=[U,X],q=ie("result",e[0].dataType,n.length,re);if(s){let ue=W("bias",e[2].dataType,e[2].dims.length,re);H.push(ue),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${N}>`:N} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${td("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(K).declareVariables(...H,q)}
        ${Z}
        ${sd(l,R,O,j,s,t,P[0],P[1],P[2],N)}
        ${y?Bi(T,x,N,void 0,!l,v):Pi(T,x,N,void 0,!l,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${y};${R};${O};${j};${E};${C};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:F}),getShaderSource:B}}}),ud,Li,Nn,ld,Fi,dd,cd,pd,n0=Y(()=>{de(),Rt(),he(),fe(),an(),zi(),ud=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Li=e=>typeof e=="number"?[e,e,e]:e,Nn=(e,t)=>t<=1?e:e+(e-1)*(t-1),ld=(e,t,n,r=1)=>{let i=Nn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Fi=(e,t,n,r,i)=>{i==null&&(i=ld(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},dd=(e,t,n,r,i,a,s,o,u,l)=>{let p,c,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Fi([t,n,r,1],[o,u,l],1,[i,a,s],e);c=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((y,b,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Fi([t,n,r,1],[o,u,l],1,[i,a,s],e[0]);c=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),f=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,y=(f-1)*a+u-n,b=(m-1)*s+l-r,$=Math.floor(g/2),x=g-$,T=Math.floor(y/2),S=y-T,k=Math.floor(b/2),E=b-k;p={top:T,bottom:S,left:k,right:E,front:$,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:c,outHeight:f,outWidth:m}},cd=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,l,p,c;if(s==="channelsLast")[o,u,l,p,c]=e;else if(s==="channelsFirst")[o,c,u,l,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,g,y]=t,[b,$,x]=Li(n),[T,S,k]=Li(r),E=Nn(m,T),C=Nn(g,S),v=Nn(y,k),{padInfo:R,outDepth:O,outHeight:j,outWidth:P}=dd(i,u,l,p,b,$,x,E,C,v),F=a?f*c:f,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,F,O,j,P]:s==="channelsLast"&&(A=[o,O,j,P,F]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:p,inChannels:c,outDepth:O,outHeight:j,outWidth:P,outChannels:F,padInfo:R,strideDepth:b,strideHeight:$,strideWidth:x,filterDepth:m,filterHeight:g,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:k,inShape:e,outShape:A,filterShape:t}},pd=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,$)=>$)},l=[Math.ceil(ud(u.x.map(b=>n[b]))/o[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let p=1,c=D.size(n),f=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];nn(t,f),f.push(...se(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...se(e[2].dims)),m.push("rank")),f.push(...se(n));let y=b=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];rn(t,$);let x=1,T=Ve(e[0].dataType),S=W("x",e[0].dataType,e[0].dims.length,p),k=W("W",e[1].dataType,e[1].dims.length,x),E=[S,k],C=ie("result",e[0].dataType,n.length,x),v="";if(g){let j=W("bias",e[2].dataType,e[2].dims.length,x);E.push(j),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?ae("coords",4,5):ae("coords",1,5)}];
        }`}let R=je(p,T),O=tn(t,R,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${b.registerUniforms($).declareVariables(...E,C)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${ae("coords",0,S.rank)};
              let d2 = ${s?ae("coords",S.rank-1,S.rank):ae("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?ae("coords",1,S.rank):ae("coords",2,S.rank)},
              ${s?ae("coords",2,S.rank):ae("coords",3,S.rank)},
              ${s?ae("coords",3,S.rank):ae("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ae("uniforms.x_shape",1,S.rank):ae("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?ae("uniforms.x_shape",2,S.rank):ae("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?ae("uniforms.x_shape",3,S.rank):ae("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?ae("uniforms.x_shape",4,S.rank):ae("uniforms.x_shape",1,S.rank)};
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
              ${g?"value = value + getBiasByOutputCoords(coords)":""};
              ${O}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:f}),getShaderSource:y}}}),hd,fd,r0=Y(()=>{de(),he(),fe(),an(),hd=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],p=l/t.group,c=u&&p>=4?Pe(l):1,f=D.size(n)/c,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];nn(t,m),m.push(...se(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...se([n[0],n[1],n[2],n[3]/c]));let y=b=>{let $=ie("output",e[0].dataType,n.length,c),x=Ve($.type.tensor),T=tn(t,$.type.value,x),S=W("x",e[0].dataType,s.length),k=W("w",e[1].dataType,o.length,c),E=[S,k];i&&E.push(W("b",e[2].dataType,e[2].dims,c));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];rn(t,C);let v=u?`
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
            let wVal = ${k.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(C).declareVariables(...E,$)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${v}
    ${a}
    ${T}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},fd=(e,t,n,r)=>{let i=e.length>2,a=Pe(n[3]),s=Pe(n[2]),o=D.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];nn(t,c),c.push(...se(u,l,p));let f=(s-1)*t.strides[1]+l[1],m=g=>{let y=ie("output",e[0].dataType,p.length,a),b=Ve(y.type.tensor),$=tn(t,y.type.value,b),x=W("x",e[0].dataType,u.length,a),T=W("w",e[1].dataType,l.length,a),S=[x,T];i&&S.push(W("b",e[2].dataType,e[2].dims,a));let k=i?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return rn(t,E),`
  ${g.registerUniforms(E).declareVariables(...S,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${f}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
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
      ${k}
      ${$}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),md,hr,gd,fr,Gi,Wi,yd,wd,qi,i0=Y(()=>{he(),t0(),n0(),Ui(),r0(),an(),Ni(),Ut(),md=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),c=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-p[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,l),c},hr=[2,3,1,0],gd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},fr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();ar.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Gi=e=>{let t=Ri(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Wi=(e,t,n,r)=>{let i=n.format==="NHWC",a=md(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let E=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(ut(t[1],hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),E.push(C)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(fd(E,n,a,r),{inputs:E}):e.compute(hd(E,n,a,r),{inputs:E});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],p=t[1].dims[2],c=t[1].dims[3],f=a[i?1:2],m=a[i?2:3],g=a[i?3:1],y=i&&p===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||p===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let E=a[0],C,v,R,O=[];if(i){let F=e.kernelCustomData.wT??e.compute(ut(t[1],hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),y){let A=o*u*l;C=t[0].reshape([1,E,A]),v=F.reshape([1,A,g]),R=[1,E,g]}else C=t[0].reshape([E,o*u,l]),v=F.reshape([1,l,g]),R=[E,f*m,g];O.push(C),O.push(v)}else C=t[0].reshape([E,l,o*u]),v=t[1].reshape([1,g,l]),R=[E,g,f*m],O.push(v),O.push(C);s&&O.push(t[2]);let j=R[2],P=O[0].dims[O[0].dims.length-1];j<8&&P<8?e.compute(Oi(O,n,a,R,i,r),{inputs:O}):e.compute(pr(O,n,a,R,i,r),{inputs:O});return}let b=!0,$=e.kernelCustomData.wT??e.compute(ut(t[1],hr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let x=[t[0],$];s&&x.push(t[2]);let T=i?f*m:g,S=i?g:f*m,k=p*c*l;e.compute(od(x,n,a,T,S,k,s,b,r),{inputs:x})},yd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=fr({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);Wi(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},wd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=fr(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=cd(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(pd(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},qi=(e,t)=>{if(gd(e.inputs,t),e.inputs[0].dims.length===3)yd(e,t);else if(e.inputs[0].dims.length===5)wd(e,e.inputs,t);else{let n=fr(t,e.inputs);Wi(e,e.inputs,n)}}}),_d,a0=Y(()=>{de(),Rt(),he(),fe(),_d=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],p=a?Pe(u):1,c=a&&l===1&&u>=4,f=c?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,g=a?Pe(l):1,y=a?l===1?p:g:1,b=D.size(i)/g,$=[Math.ceil(b/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let x=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],k=[t.dilations[0],t.dilations[1]],E=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:T},{type:12,data:S},{type:12,data:k},{type:12,data:E},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:l},...se(e[0].dims,e[1].dims)];r&&(v.push(...se(e[2].dims)),x.push("rank")),v.push(...se(i));let R=O=>{let j=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=Ve(e[0].dataType),F=a?1:2,A=a?2:3,B=a?3:1,V=W("W",e[1].dataType,e[1].dims.length,y),K=W("Dy",e[0].dataType,e[0].dims.length,p),re=[K,V];r&&re.push(W("bias",e[2].dataType,[i[B]].length,g));let N=ie("result",e[0].dataType,i.length,g),Z=()=>{let H="";if(c)p===4?H+=`
        let xValue = ${K.getByOffset("x_offset")};
        let wValue = ${V.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?H+=`
          dotProd = dotProd + dot(vec4<${P}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}), vec4<${P}>(${V.getByOffset("w_offset")}, ${V.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(H+=`
          dotProd = dotProd + dot(vec4<${P}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}, ${K.getByOffset("x_offset + 2u")}, ${K.getByOffset("x_offset + 3u")}), vec4<${P}>(${V.getByOffset("w_offset")}, ${V.getByOffset("w_offset + 1u")}, ${V.getByOffset("w_offset + 2u")}, ${V.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(H+=`
                  let xValue = ${a?K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):K.get("batch","inputChannel","idyR","idyC")};
        `,p===1)H+=`
          let w_offset = ${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${V.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<p;q++)H+=`
            let wValue${q} = ${V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return H},U=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let H="";if(p===1){H+="dotProd = dotProd";for(let q=0;q<m;q++)H+=`
            + ${K.getByOffset(`x_offset + ${q}`)} * ${V.getByOffset(`w_offset + ${q}`)}`;H+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);H+=`
          let xValue = ${K.getByOffset("x_offset")};
          let wValue = ${V.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return H},X=`
            let outputIndices = ${N.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${N.indicesGet("outputIndices",0)};
            let d1 = ${N.indicesGet("outputIndices",B)};
            let r = ${N.indicesGet("outputIndices",F)};
            let c = ${N.indicesGet("outputIndices",A)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${N.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${V.indicesToOffset(`${V.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:p}) {
                  ${Z()}
                  inputChannel = inputChannel + ${c?4:p};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${N.setByOffset("global_idx","value")};
          `;return`
    ${O.registerUniforms(j).declareVariables(...re,N)}
      ${O.mainStart()}
      ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${X}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${y}${g}${c}${m}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),bd,$d,xd,Vi,vd,Sd,Hi,Td,Id,s0=Y(()=>{a0(),an(),Ut(),bd=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,$d=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},xd=(e,t,n,r,i,a,s,o,u,l)=>{let p=e.length-2,c=l.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,y=e.length-p-(o?1:0);g<p;++g,++y){let b=e[y],$=c?b*s[g]:l[g],x=bd(b,s[g],a[g],t[y],n[g],$);$d(x,r,a,g,g+p),c&&l.push(s[g]*(b-1)+u[g]+(t[y]-1)*n[g]+1-a[g]-a[g+p])}l.splice(0,0,f),l.splice(o?3:1,0,m)},Vi=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}xd(o,n,u,e.autoPad,e.group,i,l,r,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:l}),p},vd=e=>{let t=Ri(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),p=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:p,outputShape:c,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Sd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Hi=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ut(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(_d(a,n,r),{inputs:a})},Td=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Vi({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Hi(e,r,l,p=>n?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Id=(e,t)=>{if(Sd(e.inputs,t),e.inputs[0].dims.length===3)Td(e,t);else{let n=Vi(t,e.inputs);Hi(e,e.inputs,n)}}}),kd,Ed,Cd,o0=Y(()=>{de(),he(),Le(),fe(),kd=(e,t,n,r)=>{let i=D.size(t),a=t.length,s=W("input",e,a),o=ie("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=D.normalizeAxis(u,a),p=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=ae("uniforms.input_shape","uniforms.axis",a),g=r.reverse?f+(r.exclusive?" + 1":""):"0",y=r.reverse?m:f+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...se(t,t)]}),getShaderSource:p}},Ed=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(kd(r,n,i,t),{inputs:[0]})},Cd=e=>{let t=e.exclusive===1,n=e.reverse===1;return ve({exclusive:t,reverse:n})}}),Md,Ad,Rd,zd,Od,u0=Y(()=>{de(),he(),Le(),fe(),Md=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ad=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Rd=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",l=t.blocksize,p=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=p?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,m=e.dataType,g=W("a",m,f),y=ie("output",m,f),b=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,y)}

  ${Ad(o,f,g,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let x=u?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],T=D.size(x),S=c.dims,k=D.sortBasedOnPerm(S,o);return{outputs:[{dims:x,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...se(S,k)]}},getShaderSource:b}},zd=(e,t)=>{Md(e.inputs),e.compute(Rd(e.inputs[0],t))},Od=e=>ve({blocksize:e.blocksize,mode:e.mode,format:e.format})}),mr,Bn,ji,Nd,Bd,Dd,Pd,Ki,Ud,Ld,Fd,l0=Y(()=>{de(),he(),Le(),fe(),mr="[a-zA-Z]|\\.\\.\\.",Bn="("+mr+")+",ji="^"+Bn+"$",Nd="("+Bn+",)*"+Bn,Bd="^"+Nd+"$",Dd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Pd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Bd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(ji)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(Bn)))throw new Error("Invalid RHS");(i=r.match(RegExp(mr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(ji))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(mr,"g")),l=new Dd(r);return u==null||u.forEach((p,c)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);l.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else l.addSymbol(p,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,n[o++],r)}),l}},Ki=e=>e+"_max",Ud=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,p)=>W(`input${p}`,t,l)),a=D.size(r),s=ie("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let p=[],c="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],y=[],b=[],$=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,k)=>{var E;if(n.rhs.symbolToIndices.has(k)){let C=(E=n.rhs.symbolToIndices.get(k))==null?void 0:E[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let O=v.symbolToIndices.get(k);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(j=>{p.push(`${i[R].indicesSet(`input${R}Indices`,j,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(k);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(O=>{g.push(`${i[v].indicesSet(`input${v}Indices`,O,`${k}`)}`)}),$.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${Ki(k)}; ${k}++) {`),b.push("}")});let T=x?[...p,`let sum = ${i.map((S,k)=>S.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...p,f,...y,...g,c,...$,m,...b];return`
            ${l.registerUniforms(o.map(S=>({name:`${Ki(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var f;return{type:12,data:((f=n.symbolToInfo.get(c))==null?void 0:f.dimValue)||0}});l.push({type:12,data:a});let p=e.map((c,f)=>[...se(c)]).reduce((c,f)=>c.concat(f),l);return p.push(...se(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},Ld=(e,t)=>{let n=new Pd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(Ud(i,e.inputs[0].dataType,n,r))},Fd=e=>{let t=e.equation.replace(/\s+/g,"");return ve({equation:t})}}),Gd,Xi,Wd,qd,Vd,d0=Y(()=>{de(),he(),fe(),Gd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Xi=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Wd=(e,t)=>e.length>t.length?Xi(e,t):Xi(t,e),qd=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Wd(t,n),i=e[0].dataType,a=i===9||D.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(D.size(r)/o),l=c=>{let f=W("input",i,t.length,s),m=ie("output",i,r.length,o),g;if(i===9){let y=(b,$,x="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${f.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${b}[${$}] = ${x}(${f.getByOffset(`index${$}`)}[component${$}]);
        `;g=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},p=[{type:12,data:u},...se(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Vd=e=>{Gd(e.inputs),e.compute(qd(e.inputs),{inputs:[0]})}}),Hd,jd,c0=Y(()=>{de(),he(),fe(),Ai(),Hd=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4===0,a=s=>{let o=W("x",t,[1],4),u=W("bias",t,[1],4),l=ie("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,l)}

    ${Ci(Je(t))}

    ${s.mainStart(yn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Mi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/yn/4)}})}},jd=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?kl(e):e.compute(Hd(e.inputs))}}),Kd,Xd,Yd,Zd,p0=Y(()=>{de(),he(),Le(),fe(),Kd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Xd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,l=Math.ceil(D.size(s)/u),p=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...se(e[0].dims,e[1].dims,s)],c=f=>{let m=W("data",e[0].dataType,e[0].dims.length,u),g=W("inputIndices",e[1].dataType,e[1].dims.length),y=ie("output",e[0].dataType,s.length,u),b=x=>{let T=r.length,S=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let k=0;k<T;k++)S+=`${T>1?`indicesIndices${x}[${k}]`:`indicesIndices${x}`} = ${s.length>1?`outputIndices${x}[uniforms.axis + ${k}]`:`outputIndices${x}`};`;S+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${m.type.indices};
        `;for(let k=0,E=0;k<i;k++)k===a?(S+=`${i>1?`dataIndices${x}[${k}]`:`dataIndices${x}`} = u32(idx${x});`,E+=T):(S+=`${i>1?`dataIndices${x}[${k}]`:`dataIndices${x}`} = ${s.length>1?`outputIndices${x}[${E}]`:`outputIndices${x}`};`,E++);return S},$;if(e[0].dataType===9){let x=(T,S,k="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${k}(${m.getByOffset(`index${S}`)}[component${S}]);
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
      ${b("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:c}},Yd=e=>ve({axis:e.axis}),Zd=(e,t)=>{let n=e.inputs;Kd(n),e.compute(Xd(e.inputs,t))}}),Qd,Jd,ec,h0=Y(()=>{de(),he(),fe(),Qd=(e,t,n,r,i,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];l.push(...se(t.dims,p));let c=f=>{let m=W("indices_data",t.dataType,t.dims.length),g=ie("input_slice_offsets_data",12,1,1),y=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(...y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Jd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=D.sizeToDimension(a,a.length-1),u=D.sizeFromDimension(r,t.batchDims+s),l=D.sizeToDimension(r,t.batchDims),p=D.sizeFromDimension(r,t.batchDims),c=o/l,f=new Array(s),m=u;for(let S=0;S<s;++S)f[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=Qd(e,n[1],f,t.batchDims,r,o,c,p,s),y=t.batchDims+s;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(y)),$=D.size(b),x=[{type:12,data:$},{type:12,data:u},...se(n[0].dims,g.dims,b)],T=S=>{let k=W("data",n[0].dataType,n[0].dims.length),E=W("slice_offsets",12,g.dims.length),C=ie("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,E,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:x}),getShaderSource:T},{inputs:[n[0],g]})},ec=e=>({batchDims:e.batch_dims,cacheKey:""})}),tc,nc,rc,ic,f0=Y(()=>{de(),he(),Le(),fe(),tc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},nc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.gatherAxis,i),s=D.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=D.size(o),l=e[2].dataType,p=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...se(...e.map((m,g)=>m.dims),o)],f=m=>{let g=W("data",e[0].dataType,e[0].dims.length),y=W("inputIndices",e[1].dataType,e[1].dims.length),b=W("scales",e[2].dataType,e[2].dims.length),$=e.length>3?W("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=ie("output",l,o.length),T=[g,y,b];$&&T.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...T,x)}
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
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${b.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${b.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${b.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Je(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f}},rc=(e,t)=>{let n=e.inputs;tc(n,t),e.compute(nc(e.inputs,t))},ic=e=>ve({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ac,sc,oc,uc,m0=Y(()=>{de(),he(),Le(),fe(),ac=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},sc=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=n[o],l=a.slice(0),p=D.size(l),c=W("input",r,i),f=W("indicesInput",s,a.length),m=ie("output",r,l.length),g=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return g.push(...se(n,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,f,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},oc=e=>ve({axis:e.axis}),uc=(e,t)=>{let n=e.inputs;ac(n),e.compute(sc(e.inputs,t))}}),lc,dc,cc,pc,g0=Y(()=>{de(),he(),fe(),lc=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},dc=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=$o.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),p=Math.ceil(i/u),c=!0,f=D.size(o),m=[{type:12,data:c?l:f},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...se(e[2].dims)),g.push("rank")),m.push(...se(o));let y=$=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=W("a",e[0].dataType,e[0].dims),k=W("b",e[1].dataType,e[1].dims),E=S.type.value,C=null,v=[S,k];e.length===3&&(C=W("c",e[2].dataType,e[2].dims.length),v.push(C));let R=ie("output",e[0].dataType,o.length);v.push(R);let O=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(O).declareVariables(...v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${E}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=$=>{let x=W("a",e[0].dataType,e[0].dims),T=W("b",e[1].dataType,e[1].dims),S=null,k=[x,T];e.length===3&&(S=W("c",e[2].dataType,e[2].dims.length),k.push(S));let E=ie("output",e[0].dataType,o.length);k.push(E);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let O=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${O}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*p},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},cc=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},pc=(e,t)=>{lc(e.inputs),e.compute(dc(e.inputs,t))}}),vt,zt,sn,on,hc,fc,mc,gc,yc,wc,_c,bc,$c,xc,y0=Y(()=>{de(),he(),Le(),fe(),[vt,zt,sn,on]=[0,1,2,3],hc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},fc=`
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
`,mc=e=>`
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
`,gc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,yc=e=>`
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
`,wc=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${vt}] = batch;
     indices[${zt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${sn}] = u32(r);
            indices[${on}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${sn}] = u32(clamp(r, 0, H - 1));
          indices[${on}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${sn}] = gs_reflect(r, border[1], border[3]);
          indices[${on}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,_c=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${vt}], indices[${zt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${vt}], indices[${zt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${vt}], indices[${zt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${vt}], indices[${zt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${vt}], indices[${zt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${vt}], indices[${zt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,bc=(e,t)=>{let n=W("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=W("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[vt,zt,sn,on]=[0,3,1,2]);let s=ie("output",e[0].dataType,a.length),o=n.type.value,u=D.size(a),l=[{type:12,data:u},...se(e[0].dims,r,a)],p=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${fc}
  ${mc(o)}
  ${gc(t)}
  ${yc(t)}
  ${wc(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${sn}]);
      let W_in = i32(uniforms.x_shape[${on}]);

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
      var grid_indices = vec3<u32>(indices[${vt}], indices[${sn}], indices[${on}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${_c(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=D.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:l}},getShaderSource:p}},$c=(e,t)=>{hc(e.inputs),e.compute(bc(e.inputs,t))},xc=e=>ve({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),nt,vc,Sc,Yi,Tc,Dn,Ic,kc=Y(()=>{de(),he(),Le(),gi(),ki(),fe(),Ut(),nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,vc=(e,t)=>{let n=e[0],r=nt(e,1),i=nt(e,2),a=nt(e,3),s=nt(e,4),o=nt(e,5),u=nt(e,6),l=nt(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=n.dims[0],c=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,y=0,b=Math.floor(f/t.numHeads);if(u&&l&&D.size(u.dims)&&D.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],y=u.dims[2]}else if(u&&D.size(u.dims)||l&&D.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&D.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+m,T=0;if(s&&D.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===p?T=1:C[0]===3*p+2&&(T=3):C.length===2&&C[0]===p&&C[1]===x&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,k=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],S=!0}}let E=!1;if(s&&D.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:b,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:E,passPastInKv:S,qkvFormat:$}},Sc=e=>ve({...e}),Yi=ve({perm:[0,2,1,3]}),Tc=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=D.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=c=>{let f=ie("qkv_with_bias",t.dataType,o),m=W("qkv",t.dataType,o),g=W("bias",n.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(m,g,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p},{inputs:[t,n],outputs:[-1]})[0]},Dn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&D.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Tc(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(ut(u,Yi.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(ut(u,Yi.perm),{inputs:[u],outputs:[-1]})[0]},Ic=(e,t)=>{let n=vc(e.inputs,t),r=e.inputs[0],i=nt(e.inputs,1),a=nt(e.inputs,2),s=nt(e.inputs,3),o=nt(e.inputs,4),u=nt(e.inputs,5),l=nt(e.inputs,6),p=nt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,f=Dn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return Rn(e,f,i,a,o,void 0,l,p,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=Dn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=Dn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);Rn(e,f,m,g,o,void 0,l,p,u,n)}}),Ec,Cc,Mc,Ac,Zi,Rc,zc,Oc=Y(()=>{de(),he(),Le(),fe(),Ec=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Cc=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),ve({numOutputs:r,axis:t.axis,splitSizes:n})},Mc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ae("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ac=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Zi=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,a=D.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=W("input",i,n.length),u=new Array(t.numOutputs),l=[],p=[],c=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let y=n.slice();y[a]=t.splitSizes[g],p.push(y),s[g]=ie(`output${g}`,i,y.length),l.push({dims:p[g],dataType:e[0].dataType})}f.push({type:12,data:u},...se(n,...p));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Mc(u.length)}
  ${Ac(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ae("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Rc=(e,t)=>{Ec(e.inputs);let n=e.inputs.length===1?t:Cc(e.inputs,t);e.compute(Zi(e.inputs,n),{inputs:[0]})},zc=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return ve({axis:t,numOutputs:r,splitSizes:n})}}),Nc,gr,Bc,Dc=Y(()=>{de(),he(),Le(),fe(),Nc=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!D.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],p=i.dims[0],c=D.sizeFromDimension(n.dims,1)/l,f=o===0?i.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},gr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,p=e[2].dims[1],c=i===0?p*2:l/r,f=new Array(s,u,l/c,c-p),m=D.computeStrides(f),g=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...se(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=b=>{let $=W("input",e[0].dataType,e[0].dims.length),x=W("position_ids",e[1].dataType,e[1].dims.length),T=W("cos_cache",e[2].dataType,e[2].dims.length),S=W("sin_cache",e[3].dataType,e[3].dims.length),k=ie("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables($,x,T,S,k)}

        ${b.mainStart(yn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",ie("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ve({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/yn)},programUniforms:g})}},Bc=(e,t)=>{Nc(e.inputs,t),e.compute(gr(e.inputs,t))}}),Pc,Uc,Qi,Lc,Fc,w0=Y(()=>{Le(),de(),ki(),kc(),Oc(),Ut(),Dc(),fe(),Pc=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],l=n.dims[1],p=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,f=0,m=!r||r.dims.length===0,g=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=g*t.numHeads);let y=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(y&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(y||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let x=0,T=!1,S=t.kvNumHeads?g*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=k.dims.reduce((C,v)=>C*v,1);if(E!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${E}.`);for(let C=0;C<k.dims.length;C++)if(k.dims[C]!==1&&k.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${k.dims[C]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},Uc=ve({perm:[0,2,1,3]}),Qi=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ut(r,Uc.perm),{inputs:[r],outputs:[-1]})[0]),r},Lc=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=p=>{let c=W("seq_lens",n.dataType,n.dims),f=W("total_seq_lens",r.dataType,r.dims),m=ie("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(g).declareVariables(c,f,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},Fc=(e,t)=>{var S;let n=Pc(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,p=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=ve({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,p*n.headSize,p*n.headSize]}),[f,m,g]=!i&&!a?e.compute(Zi([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],y,b;if(t.doRotary){let k=e.compute(Lc(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],E=e.inputs[7],C=e.inputs[8],v=ve({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,k,E,C],O=[-1];y=e.compute(gr(R,v),{inputs:R,outputs:O})[0],R.splice(0,1,m);let j=ve({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(gr(R,j),{inputs:R,outputs:O})[0]}let $=Dn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:f,void 0,0),x=Qi(e,t.doRotary?b:m,n),T=Qi(e,g,n);Rn(e,$,x,T,void 0,void 0,s,o,void 0,n,u,l)}}),Ji,Gc,Wc,qc,_0=Y(()=>{de(),he(),Ut(),fe(),Ji=(e,t,n,r,i,a,s,o)=>{let u=Pe(a),l=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,c=i*s,f=64;c===1&&(f=256);let m=[i,s,a/u],g=[i,s,2],y=["rank","type","type"],b=[];b.push(...se(m,g));let $=x=>{let T=W("x",t.dataType,3,u),S=W("scale",n.dataType,n.dims),k=W("bias",r.dataType,r.dims),E=ie("output",1,3,2),C=[T,S,k,E];return`
  var<workgroup> workgroup_shared : array<${p}, ${f}>;
  const workgroup_size = ${f}u;
  ${x.declareVariables(...C)}
  ${x.mainStart(f)}
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
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Pt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Pt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Gc=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=D.sizeFromDimension(r,a),l=Pe(u),p=D.size(i)/l,c=Ji(e,t[0],t[1],t[2],s,u,o,n.epsilon),f=[s,o,u/l],m=[s,o],g=["type","none"],y=b=>{let $=W("x",t[0].dataType,f.length,l),x=W("scale_shift",1,m.length,2),T=ie("output",t[0].dataType,f.length,l),S=[$,x,T];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...se(f,m,f)]}),getShaderSource:y},{inputs:[t[0],c]})},Wc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=D.sizeFromDimension(r,1)/s,u=Pe(s),l=D.size(i)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],f=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)f=f||r[$+1]!==1,m.push($+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(ut(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,x)=>r[m[x]])),y=Ji(e,g,t[1],t[2],a,o,s,n.epsilon),b=$=>{let x=Ve(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${R}(scale.${v}))`;case 2:return`vec2<${x}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=W("input",t[0].dataType,t[0].dims,u),E=ie("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:b},{inputs:[t[0],y]})},qc=(e,t)=>{t.format==="NHWC"?Wc(e,e.inputs,t):Gc(e,e.inputs,t)}}),Vc,Hc,jc,b0=Y(()=>{de(),he(),fe(),Vc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Hc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),l=D.sizeToDimension(i,u),p=D.sizeFromDimension(i,u),c=D.size(a.dims),f=s?D.size(s.dims):0;if(c!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let g=Pe(p),y=["type","type"],b=[{type:12,data:l},{type:1,data:p},{type:12,data:Math.floor(p/g)},{type:1,data:t.epsilon}];s&&y.push("type");let $=n>1,x=n>2,T=k=>{let E=Ve(e[0].dataType),C=[W("x",e[0].dataType,e[0].dims,g),W("scale",a.dataType,a.dims,g)];s&&C.push(W("bias",s.dataType,s.dims,g)),C.push(ie("output",e[0].dataType,o,g)),$&&C.push(ie("mean_data_output",1,m)),x&&C.push(ie("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(v).declareVariables(...C)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${bi("f32",g)};
    var mean_square_vector = ${bi("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${wn(E,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Pt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Pt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${wn(E,g,"x[j + offset]")};
      let f32scale = ${wn(E,g,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${wn(E,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),x&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:b}),getShaderSource:T}},jc=(e,t)=>{Vc(e.inputs),e.compute(Hc(e.inputs,t,e.outputCount))}}),Kc,Xc,$0=Y(()=>{he(),Ni(),Ui(),Kc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Xc=e=>{Kc(e.inputs);let t=gn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Oi(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=D.size(e.inputs[0].dims.slice(0,-2)),s=D.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,a,n],p=[o,u];e.compute(pr(p,{activation:""},t,l),{inputs:p})}else e.compute(pr(e.inputs,{activation:""},t))}}}),Yc,Zc,Qc,Jc,ep,x0=Y(()=>{de(),he(),Le(),fe(),Yc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!D.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(u)!==l)throw new Error("zeroPoints input size error.")}},Zc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),l=e[1].dims[2]/4,p=e[0].dataType,c=Pe(t.k),f=Pe(l),m=Pe(s),g=o.concat([i,s]),y=i>1&&s/m%2===0?2:1,b=D.size(g)/m/y,$=64,x=[],T=[u,i,a/c],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),x.push(...se(T)),x.push(...se(S)),x.push(...se(e[2].dims)),e.length===4&&x.push(...se(D.convertShape(e[3].dims)));let k=[u,i,s/m];x.push(...se(k));let E=C=>{let v=T.length,R=W("a",e[0].dataType,v,c),O=W("b",12,S.length,f),j=W("scales",e[2].dataType,e[2].dims.length),P=[R,O,j],F=e.length===4?W("zero_points",12,e[3].dims.length):void 0;F&&P.push(F);let A=k.length,B=ie("output",e[0].dataType,A,m),V=Ve(e[0].dataType),K=(()=>{switch(c){case 1:return`array<${V}, 8>`;case 2:return`mat4x2<${V}>`;case 4:return`mat2x4<${V}>`;default:throw new Error(`${c}-component is not supported.`)}})(),re=Math.floor(32/t.bits),N=Math.floor(re/8),Z=()=>{let H="";for(let q=0;q<N;q++){let ue=q*t.bits*4,ce=ue+t.bits;H+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${K};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/c}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${R.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let ne=0;ne<m*y;ne++)H+=`
            b_value = ${f===1?`b${ne}_data`:`b${ne}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ue}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ce}u) & b_mask);`}
            b_quantized_values = ${K}(${Array.from({length:4},(ye,De)=>`${V}(b_value_lower[${De}]), ${V}(b_value_upper[${De}])`).join(", ")});
            b_dequantized_values = ${c===1?`${K}(${Array.from({length:8},(ye,De)=>`(b_quantized_values[${De}] - ${F?`zero_point${ne}`:"zero_point"}) * scale${ne}`).join(", ")});`:`(b_quantized_values - ${K}(${Array(8).fill(`${F?`zero_point${ne}`:"zero_point"}`).join(",")})) * scale${ne};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ne/m)}]${m>1?`[${ne%m}]`:""} += ${Array.from({length:8/c},(ye,De)=>`${c===1?`a_data${q>0?q:""}[${De}] * b_dequantized_values[${De}]`:`dot(a_data${q>0?q:""}[${De}], b_dequantized_values[${De}])`}`).join(" + ")};
          `}return H},U=()=>{let H=`
            var col_index = col * ${m};
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
            let zero_point = ${V}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<m*y;q++)H+=`
            let scale${q} = ${j.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${V}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return H},X=()=>{let H=`col_index = col * ${m};`;for(let q=0;q<m*y;q++)H+=`
            let b${q}_data = ${O.getByIndices(`${O.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return H+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${K};
            var b_dequantized_values: ${K};`,H};return`
        var<workgroup> workgroup_shared: array<${B.type.value}, ${y*$}>;
        ${C.declareVariables(...P,B)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${B.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${U()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${X()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${Z()}
                word_offset += ${re/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${B.type.value} = ${B.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${B.setByIndices(`${B.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:p}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:E}},Qc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=D.size(o),l=e[1].dims[2]/4,p=e[0].dataType,c=Pe(t.k),f=Pe(l),m=o.concat([i,s]),g=128,y=s%8===0?8:s%4===0?4:1,b=g/y,$=Math.floor(32/t.bits),x=b*f*$,T=x/c,S=x/t.blockSize,k=D.size(m)/y,E=[],C=[u,i,a/c],v=D.convertShape(e[1].dims).slice();v.splice(-1,1,l/f),E.push(...se(C)),E.push(...se(v)),E.push(...se(e[2].dims)),e.length===4&&E.push(...se(D.convertShape(e[3].dims)));let R=[u,i,s];E.push(...se(R));let O=j=>{let P=C.length,F=W("a",e[0].dataType,P,c),A=W("b",12,v.length,f),B=W("scales",e[2].dataType,e[2].dims.length),V=[F,A,B],K=e.length===4?W("zero_points",12,e[3].dims.length):void 0;K&&V.push(K);let re=R.length,N=ie("output",e[0].dataType,re),Z=Ve(e[0].dataType),U=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${N.type.value}, ${b}>, ${y}>;
        ${j.declareVariables(...V,N)}
        ${j.mainStart([b,y,1])}
          let output_indices = ${N.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${g})
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
            let block = tile * ${S} + local_id.x;
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${B.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let X=Math.floor($/8),H="";for(let q=0;q<X;q++){let ue=q*t.bits*4,ce=ue+t.bits;H+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ce}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(ne,ye)=>`${Z}(b_value_lower[${ye}]), ${Z}(b_value_upper[${ye}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ne,ye)=>`${`dot(a_data${ye}, b_dequantized_values[${ye}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return H})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${N.setByIndices(`${N.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${b};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:k},programUniforms:E}),getShaderSource:O}},Jc=(e,t)=>{Yc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Qc(e.inputs,t)):e.compute(Zc(e.inputs,t))},ep=e=>ve(e)}),tp,np,rp,ip,ap,sp,op,up,lp,v0=Y(()=>{de(),he(),fe(),tp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},np=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ae("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},rp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ae("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ae("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ip=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
                  k = i32(${ae("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ap=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ae("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ae("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ae("uniforms.x_shape",i,t)})) {
                  k -= i32(${ae("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ae("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},sp=(e,t,n)=>{switch(n.mode){case 0:return np(e,t,n.pads.length);case 1:return rp(e,t,n.pads.length);case 2:return ip(e,t,n.pads.length);case 3:return ap(e,t,n.pads.length);default:throw new Error("Invalid mode")}},op=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=D.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...se(e[0].dims,n));let o=["rank"],u=l=>{let p=ie("output",e[0].dataType,n.length),c=W("x",e[0].dataType,r.length),f=c.type.value,m=sp(p,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?f:"f32"}),`
            ${l.registerUniforms(g).declareVariables(c,p)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:a}),getShaderSource:u}},up=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},lp=(e,t)=>{tp(e.inputs);let n=up(e.inputs,t);e.compute(op(e.inputs,n),{inputs:[0]})}}),Pn,ea,ta,na,ra,dp,cp,ia,aa,pp,hp,sa,fp,mp,oa,gp,yp,wp,_p,S0=Y(()=>{lt(),de(),he(),fe(),Pn=e=>{if(Me.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ea=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();ar.adjustPoolAttributes(n,i,s,o,u,l);let p=ar.computePoolOutputShape(n,i,o,u,s,l,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[c,r?f:p]},ta=(e,t)=>{let n=t.format==="NHWC",r=D.size(e),i=D.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],c=!!(l+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(y+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:y},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,p)=>l+p);return[a,s,!!u,!1,!1]}},na=(e,t,n,r,i,a,s,o,u,l,p,c)=>{let f=i.format==="NHWC",m=t.type.value,g=ie("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",b="",$="",x=n-(f?2:1);if(p?y=`
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
                }`,i.kernelShape.length===2){let T=n-(f?3:2);c?b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${b}
              ${y}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,b=i.pads.length,$="";return l?$=`
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

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ae("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ae("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${n-y}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ae("uniforms.strides",`j - ${n-y}u`,y)}
                    + offsets[j - ${n-y}u] - ${ae("uniforms.pads","j - 2u",b)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},ra=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,dp=e=>`${ra(e)};${e.countIncludePad}`,cp=e=>`${ra(e)};${e.storageOrder};${e.dilations}`,ia=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),aa=(e,t,n,r)=>{let[i,a]=ea(t,r,n),s=W("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,c,f,m,g]=ta(a,i);p.push(...se(t.dims,a));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:p}),getShaderSource:b=>na(b,s,t.dims.length,a.length,i,u,l,0,c,f,m,g)}},pp=e=>{let t=e.count_include_pad!==0,n=ia(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:dp(r)}},hp=(e,t)=>{Pn(e.inputs),e.compute(aa("AveragePool",e.inputs[0],!1,t))},sa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},fp=e=>{let t=e.format;return{format:t,...sa,cacheKey:t}},mp=(e,t)=>{Pn(e.inputs),e.compute(aa("GlobalAveragePool",e.inputs[0],!0,t))},oa=(e,t,n,r)=>{let[i,a]=ea(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=W("x",t.dataType,t.dims.length),l=["rank"],[p,c,f,m,g]=ta(a,i);return p.push(...se(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:p}),getShaderSource:y=>na(y,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,f,m,g)}},gp=(e,t)=>{Pn(e.inputs),e.compute(oa("MaxPool",e.inputs[0],!1,t))},yp=e=>{let t=e.storage_order,n=e.dilations,r=ia(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:cp(i)}},wp=e=>{let t=e.format;return{format:t,...sa,cacheKey:t}},_p=(e,t)=>{Pn(e.inputs),e.compute(oa("GlobalMaxPool",e.inputs[0],!0,t))}}),bp,$p,xp,vp,T0=Y(()=>{de(),he(),Le(),fe(),bp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},$p=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=D.size(a),u=r===3||r===2,l=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,c=e.length>2?e[2]:void 0,f=c?u?[Math.ceil(D.size(c.dims)/4)]:c.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,g=m===!1&&p.length===1,y=Pe(o),b=m&&(!u||y===4),$=b?y:1,x=b&&!u?y:1,T=W("input",u?12:r,l.length,x),S=W("scale",s,p.length),k=c?W("zero_point",u?12:r,f.length):void 0,E=ie("output",s,a.length,$),C=[T,S];k&&C.push(k);let v=[l,p];c&&v.push(f);let R=[{type:12,data:o/$},{type:12,data:n},{type:12,data:t.blockSize},...se(...v,a)],O=j=>{let P=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${j.registerUniforms(P).declareVariables(...C,E)}
      ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${k?m?u?`
                let zero_point_input = ${k.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${k.getByOffset("0")}`:g?u?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:O,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:R})}},xp=(e,t)=>{bp(e.inputs,t),e.compute($p(e.inputs,t))},vp=e=>ve({axis:e.axis,blockSize:e.blockSize})}),Sp,Tp,Ip,I0=Y(()=>{lt(),de(),fe(),Sp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Tp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...se(a)],u=l=>{let p=ie("output",r,a.length),c=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(f).declareVariables(p)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Ip=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Me.webgpu.validateInputContent&&Sp(t,n,r),e.compute(Tp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),kp,Ep,Cp,Mp,k0=Y(()=>{de(),he(),Le(),fe(),kp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ep=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(D.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=D.sizeFromDimension(n,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...se(e[1].dims,e[2].dims,i)],p=c=>{let f=W("indices",e[1].dataType,e[1].dims.length),m=W("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Bo("output",e[0].dataType,i.length):ie("output",e[0].dataType,i.length,a);return`
      ${c.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,g)}
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
    ${kp(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:p}},Cp=e=>ve({reduction:e.reduction}),Mp=(e,t)=>{e.compute(Ep(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ap,Rp,zp,ua,Op,Np,Bp,Dp,Pp,Up,Lp,Fp,la,Gp,Wp,qp,Vp,Hp,jp,Kp,E0=Y(()=>{de(),he(),Le(),fe(),Ap=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Rp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},zp=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>r.push(p)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ap(r,t),t.axes.length>0&&Rp(r,t.axes,l).forEach((p,c)=>r[c]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},ua=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Op=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ua("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ua("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Np=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Bp=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},Dp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Pp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},Up=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ae("uniforms.scales","i",r)};
        var roi_low = ${ae("uniforms.roi","i",i)};
        var roi_hi = ${ae("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ae("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Lp=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ae("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ae("uniforms.roi","i",a)};
          var roi_hi = ${ae("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ae("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ae("uniforms.output_shape","i",r.length)};
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
    }`,Fp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ae("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,la=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Gp=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${la(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
      ${r?`if (row < 0 || row > (${n[s]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[s]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
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
    }`},Wp=(e,t,n,r,i,a,s,o,u,l)=>{let p=n.length===2,[c,f]=p?[0,1]:[2,3],m=e.type.value,g=y=>{let b=y===c?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${a[y]}, ${a[y]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[y]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${m} = originalIdx + ${m}(i);
          if (${b} < 0 || ${b} >= ${n[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${b} = max(0, min(${b}, ${n[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${b})`)};
          data[i + 1] = ${y===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(c)};
    ${g(f)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
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
    `},qp=(e,t,n,r,i)=>{let[a,s,o,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${la(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[s]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[s]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
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
    }`},Vp=(e,t,n,r,i,a)=>{let s=e.dims,o=Bp(a,t.axes,s.length),u=Dp(s,r,i,t.axes),l=r.slice();r.length===0&&(l=s.map((x,T)=>x===0?1:u[T]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=Pp(s,l,t)));let p=ie("output",e.dataType,u.length),c=W("input",e.dataType,s.length),f=D.size(u),m=s.length===u.length&&s.every((x,T)=>x===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,b=c.type.value,$=x=>`
      ${m?"":`
      ${Op(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Fp(c,s)};
              ${Np(t.nearestMode,n,b)};
              ${Lp(c,p,s,u,l.length,o.length,g)};
              `;case"linear":return`
              ${Up(p,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Gp(c,p,s,g,y)}`;if(s.length===3||s.length===5)return`${qp(c,p,s,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Wp(c,p,s,u,l,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(c,p)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:o},...se(s,u)]})}},Hp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},jp=(e,t)=>{let n=[],r=[],i=[],a=Hp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");zp(e.inputs,t,a,n,r,i),e.compute(Vp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Kp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return ve({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Xp,Yp,Zp,C0=Y(()=>{de(),he(),fe(),Xp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Yp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=D.size(a),o=a,u=s,l=a.slice(-1)[0],p=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,y=n>3,b=64,$=Pe(l),x=[{type:12,data:u},{type:12,data:$},{type:12,data:l},{type:1,data:t.epsilon}],T=k=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[W("x",e[0].dataType,e[0].dims,$),W("skip",e[1].dataType,e[1].dims,$),W("gamma",e[2].dataType,e[2].dims,$)];c&&C.push(W("beta",e[3].dataType,e[3].dims,$)),f&&C.push(W("bias",e[4].dataType,e[4].dims,$)),C.push(ie("output",e[0].dataType,o,$)),m&&C.push(ie("mean_output",1,p)),g&&C.push(ie("inv_std_output",1,p)),y&&C.push(ie("input_skip_bias_sum",e[0].dataType,o,$));let v=Ve(e[0].dataType),R=Ve(1,$);return`

      ${k.registerUniforms(E).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${b}>;
      var<workgroup> sum_squared_shared : array<${R}, ${b}>;

      ${k.mainStart([b,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${b};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${b};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${b-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${wn(v,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${b};
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
        let mean = ${Pt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Pt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:p,dataType:1}),n>2&&S.push({dims:p,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${y}`,inputDependencies:e.map((k,E)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Zp=(e,t)=>{Xp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Yp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Qp,Un,Jp,da,eh,th,nh,rh,M0=Y(()=>{de(),he(),Le(),fe(),Qp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Un=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Jp=(e,t)=>{if(e.length>1){let n=Un(e,1),r=Un(e,2),i=Un(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ve({starts:n,ends:r,axes:i})}else return t},da=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},eh=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ae("uniforms.input_shape","i",n.length)};
            let steps_i = ${ae("uniforms.steps","i",n.length)};
            let signs_i = ${ae("uniforms.signs","i",n.length)};
            let starts_i = ${ae("uniforms.starts","i",n.length)};
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
      }`,th=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Un(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map(($,x)=>da($,x,n,i,a)),o=t.ends.map(($,x)=>da($,x,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(s.splice($,0,0),o.splice($,0,n[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,x,T)=>{if($<0){let S=(o[x]-s[x])/$,k=s[x],E=k+S*a[x];s[x]=E,o[x]=k,T[x]=-$}});let l=n.slice(0);i.forEach(($,x)=>{l[$]=Math.ceil((o[$]-s[$])/a[$])});let p={dims:l,dataType:e[0].dataType},c=ie("output",e[0].dataType,l.length),f=W("input",e[0].dataType,e[0].dims.length),m=D.size(l),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],y=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...se(e[0].dims,l)],b=$=>`
      ${$.registerUniforms(g).declareVariables(f,c)}
        ${eh(f,c,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},nh=(e,t)=>{Qp(e.inputs,t);let n=Jp(e.inputs,t);e.compute(th(e.inputs,n),{inputs:[0]})},rh=e=>{let t=e.starts,n=e.ends,r=e.axes;return ve({starts:t,ends:n,axes:r})}}),ih,ah,sh,oh,A0=Y(()=>{de(),he(),Le(),Ut(),fe(),ih=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ah=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),a=r.length,s=D.normalizeAxis(t.axis,a),o=s<r.length-1,u,l=[];o?(l=Array.from({length:a},(C,v)=>v),l[s]=a-1,l[a-1]=s,u=e.compute(ut(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let p=u.dims,c=p[a-1],f=i/c,m=Pe(c),g=c/m,y=64;f===1&&(y=256);let b=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=W("x",u.dataType,u.dims,m),x=ie("result",u.dataType,u.dims,m),T=$.type.value,S=Ve(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,k=C=>`
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
      ${C.registerUniform("packedCols","i32").declareVariables($,x)}
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
          rowMaxShared = ${T}(${b("threadShared[0]",m)});
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
          rowSumShared = ${T}(${Pt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(ut(E,l),{inputs:[E]})},sh=(e,t)=>{ih(e.inputs),ah(e,t)},oh=e=>ve({axis:e.axis})}),ca,uh,lh,dh,ch,R0=Y(()=>{de(),he(),fe(),ca=e=>Array.from(e.getBigInt64Array(),Number),uh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ca(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},lh=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},dh=(e,t)=>{let n=e[0].dims,r=t??ca(e[1]),i=lh(n,r),a=D.size(i),s=e[0].dataType,o=W("input",s,n.length),u=ie("output",s,i.length),l=p=>`
      const inputShape = ${o.indices(...n)};
      ${p.registerUniform("output_size","u32").declareVariables(o,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...se(e[0].dims,i)]}),getShaderSource:l}},ch=e=>{uh(e.inputs),e.compute(dh(e.inputs),{inputs:[0]})}}),ph,hh,fh,z0=Y(()=>{de(),he(),fe(),ph=(e,t,n,r,i)=>{let a=ie("output_data",i,n.length,4),s=W("a_data",t[1].dataType,t[1].dims.length,4),o=W("b_data",t[2].dataType,t[2].dims.length,4),u=W("c_data",t[0].dataType,t[0].dims.length,4),l,p=(c,f,m)=>`select(${f}, ${c}, ${m})`;if(!r)l=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(f,m,g="")=>{let y=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${a.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${s.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,a)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${f}[${m}] = ${g}(${p(y,b,$)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},hh=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(D.areEqual(t,n)&&D.areEqual(n,r)),s=t,o=D.size(t);if(a){let l=gn.calcShape(gn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=D.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>ph(l,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...se(r,t,n,s)]})}},fh=e=>{e.compute(hh(e.inputs))}}),mh,O0=Y(()=>{Kg(),ki(),Xg(),Yg(),Zg(),Qg(),Jg(),i0(),s0(),o0(),u0(),l0(),d0(),c0(),p0(),h0(),f0(),m0(),g0(),y0(),w0(),_0(),b0(),$0(),x0(),kc(),v0(),S0(),T0(),I0(),k0(),Si(),E0(),Dc(),C0(),M0(),A0(),Oc(),R0(),Ut(),Ai(),z0(),mh=new Map([["Abs",[Xu]],["Acos",[Yu]],["Acosh",[Zu]],["Add",[Pl]],["ArgMax",[Ou,Ii]],["ArgMin",[zu,Ii]],["Asin",[Qu]],["Asinh",[Ju]],["Atan",[el]],["Atanh",[tl]],["Attention",[Lu]],["AveragePool",[hp,pp]],["BatchNormalization",[qu]],["BiasAdd",[ju]],["BiasSplitGelu",[Nl]],["Cast",[rl,nl]],["Ceil",[sl]],["Clip",[al]],["Concat",[Ql,Jl]],["Conv",[qi,Gi]],["ConvTranspose",[Id,vd]],["Cos",[ol]],["Cosh",[ul]],["CumSum",[Ed,Cd]],["DepthToSpace",[zd,Od]],["DequantizeLinear",[xp,vp]],["Div",[Ul]],["Einsum",[Ld,Fd]],["Elu",[ll,zn]],["Equal",[Ll]],["Erf",[dl]],["Exp",[cl]],["Expand",[Vd]],["FastGelu",[jd]],["Floor",[pl]],["FusedConv",[qi,Gi]],["Gather",[Zd,Yd]],["GatherElements",[uc,oc]],["GatherBlockQuantized",[rc,ic]],["GatherND",[Jd,ec]],["Gelu",[hl]],["Gemm",[pc,cc]],["GlobalAveragePool",[mp,fp]],["GlobalMaxPool",[_p,wp]],["Greater",[ql]],["GreaterOrEqual",[Hl]],["GridSample",[$c,xc]],["GroupQueryAttention",[Fc]],["HardSigmoid",[$l,bl]],["InstanceNormalization",[qc]],["LayerNormalization",[jc]],["LeakyRelu",[fl,zn]],["Less",[Vl]],["LessOrEqual",[jl]],["Log",[Cl]],["MatMul",[Xc]],["MatMulNBits",[Jc,ep]],["MaxPool",[gp,yp]],["Mul",[Fl]],["MultiHeadAttention",[Ic,Sc]],["Neg",[gl]],["Not",[ml]],["Pad",[lp]],["Pow",[Gl]],["QuickGelu",[Rl,zn]],["Range",[Ip]],["Reciprocal",[yl]],["ReduceMin",[Eu]],["ReduceMean",[vu]],["ReduceMax",[ku]],["ReduceSum",[Mu]],["ReduceProd",[Cu]],["ReduceL1",[Su]],["ReduceL2",[Tu]],["ReduceLogSum",[Ru]],["ReduceLogSumExp",[Iu]],["ReduceSumSquare",[Au]],["Relu",[wl]],["Resize",[jp,Kp]],["RotaryEmbedding",[Bc]],["ScatterND",[Mp,Cp]],["Sigmoid",[_l]],["Sin",[xl]],["Sinh",[vl]],["Slice",[nh,rh]],["SkipLayerNormalization",[Zp]],["Split",[Rc,zc]],["Sqrt",[Sl]],["Softmax",[sh,oh]],["Sub",[Wl]],["Tan",[Tl]],["Tanh",[Il]],["ThresholdedRelu",[El,zn]],["Tile",[ch]],["Transpose",[qo,Vo]],["Where",[fh]]])}),gh,N0=Y(()=>{lt(),Rt(),fe(),gh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){xt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of n)o.push({binding:o.length,resource:{buffer:l.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){xt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=Po(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});be("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),yh={};fn(yh,{WebGpuBackend:()=>$h});var wh,_h,bh,$h,B0=Y(()=>{lt(),de(),Rt(),So(),Hg(),O0(),N0(),wh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},_h=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${wh(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},bh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},$h=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new bh(s),this.gpuDataManager=Oo(this),this.programManager=new gh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,oi(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;xt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,l=o.kernelName,p=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map($=>({dims:$.dims,dataType:At($.dataType)})),outputsMetadata:f.map($=>({dims:$.dims,dataType:At($.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:p,startTime:y,endTime:b});else{let $="";c.forEach((T,S)=>{$+=`input[${S}]: [${T.dims}] | ${At(T.dataType)}, `});let x="";f.forEach((T,S)=>{x+=`output[${S}]: [${T.dims}] | ${At(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${p}" ${$}${x}start time: ${y} ns, execution time: ${b-y} ns`)}Jn("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,n,r,i,a){xt(e.name);let s=[];for(let x=0;x<t.length;++x){let T=t[x].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),p=n.length===0?o.map((x,T)=>T):n;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let c=[],f=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(p[x])||p[x]<-3||p[x]>=a)throw new Error(`Invalid output index: ${p[x]}`);if(p[x]===-3)continue;let T=p[x]===-1,S=p[x]===-2,k=T||S?i(o[x].dataType,o[x].dims):r(p[x],o[x].dataType,o[x].dims);if(c.push(k),k.data===0)continue;let E=this.gpuDataManager.get(k.data);if(!E)throw new Error(`no GPU data for output: ${k.data}`);if(T&&this.temporaryData.push(E),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(E)}f.push(E)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return pt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(l){let x=0,T=[];l.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,O,j;C.type===10?(j=v.length>4?16:v.length>2?8:v.length*R,O=v.length>4?16:R*v.length):(j=v.length<=2?v.length*R:16,O=16),x=Math.ceil(x/j)*j,T.push(x);let P=C.type===10?8:4;x+=v.length>4?Math.ceil(v.length/P)*O:v.length*R});let S=16;x=Math.ceil(x/S)*S;let k=new ArrayBuffer(x);l.forEach((C,v)=>{let R=T[v],O=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(k,R,O.length).set(O);else if(C.type===12)new Uint32Array(k,R,O.length).set(O);else if(C.type===10)new Uint16Array(k,R,O.length).set(O);else if(C.type===1)new Float32Array(k,R,O.length).set(O);else throw new Error(`Unsupported uniform type: ${At(C.type)}`)});let E=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,k,0,x),this.gpuDataManager.release(E.id),m={offset:0,size:x,buffer:E.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),y=g[1]===1&&g[2]===1,b=_h(e,t,y),$=this.programManager.getArtifact(b);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(b,$),be("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),l&&$.uniformVariablesInfo){if(l.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${l.length} in program "${$.programInfo.name}".`);for(let x=0;x<l.length;x++){let T=l[x],S=T.type,k=typeof T.data=="number"?1:T.data.length,[E,C]=$.uniformVariablesInfo[x];if(S!==E||k!==C)throw new Error(`Uniform variable ${x} mismatch: expect type ${E} with size ${C}, got type ${S} with size ${k} in program "${$.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run($,s,f,g,m),pt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=mh.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await _i(this,e,t);return ui(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),xh={};fn(xh,{init:()=>Sh});var yr,vh,Sh,D0=Y(()=>{de(),Rt(),he(),Vg(),yr=class xg{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new xg(this.module,this.dataType,this.data,t)}},vh=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(r*i++,a)),p=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),f=[];for(let m=0;m<c;m++)f.push(Number(e.getValue(r*i++,a)));o.push(new yr(e,l,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,l)=>new yr(this.module,u,this.output(o,l),l),a=(o,u)=>{let l=en(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let p=l>0?this.backend.gpuDataManager.create(l).id:0;return new yr(this.module,o,p,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Sh=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(B0(),In(yh)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,p=!1)=>{if(p)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),c)}},async(o,u,l)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,p)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let c=new vh(t,s,Number(u));return s.computeKernel(Number(o),c,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Mo(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,p)=>a.ensureTensor(s,o,u,l,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Th,pa,ha,Lt,Ih,fa,wr,ma,ga,ya,wa,_a,ba,kh=Y(()=>{lt(),Gg(),Wg(),de(),Zt(),ni(),fo(),Th=(e,t)=>{Ae()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},pa=async e=>{Th(e.wasm.numThreads,ir(e.logLevel))},ha=async(e,t)=>{var r,i;(i=(r=Ae()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(D0(),In(xh)).init;t==="webgpu"&&await a("webgpu",Ae(),e,n),t==="webnn"&&await a("webnn",Ae(),e)}},Lt=new Map,Ih=e=>{let t=Ae(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Se("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},fa=(e,t)=>{let n=Ae(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Se("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let l=n.HEAPU32[i/4+1],p=[];for(let c=0;c<l;c++){let f=Number(n.getValue(i+8+c*a,"*"));p.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(c+l)*a,"*")))}return[o,u,p]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},wr=e=>{let t=Ae(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ma=async(e,t)=>{var c,f,m,g;let n,r,i=Ae();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=wr(e);let a=0,s=0,o=0,u=[],l=[],p=[];try{if([s,u]=await ho(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let O=typeof R=="string"?R:R.path;v.push(si(typeof R=="string"?R:R.data).then(j=>{i.mountExternalData(O,j)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,O=R==null?void 0:R.context,j=R==null?void 0:R.gpuDevice,P=R==null?void 0:R.deviceType,F=R==null?void 0:R.powerPreference;O?i.currentContext=O:j?i.currentContext=await i.webnnCreateMLContext(j):i.currentContext=await i.webnnCreateMLContext({deviceType:P,powerPreference:F})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Se("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,b]=Ih(a),$=!!(t!=null&&t.enableGraphCapture),x=[],T=[],S=[],k=[],E=[];for(let v=0;v<y;v++){let[R,O,j]=fa(a,v);R===0&&Se("Can't get an input name."),l.push(R);let P=i.UTF8ToString(R);x.push(P),S.push(O===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:At(O),shape:j})}for(let v=0;v<b;v++){let[R,O,j]=fa(a,v+y);R===0&&Se("Can't get an output name."),p.push(R);let P=i.UTF8ToString(R);T.push(P),k.push(O===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:At(O),shape:j});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[P])??"cpu",A=i.webnnIsGraphOutput;if(F==="cpu"&&A&&A(a,P)){E.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if($&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(F)}}let C=null;return E.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Se("Can't create IO binding."),C={handle:o,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>ai(v))}),Lt.set(a,[a,l,p,C,$,!1]),[a,x,T,S,k]}catch(y){throw l.forEach(b=>i._OrtFree(b)),p.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&Se("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Se("Can't release session."),y}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Se("Can't release session options."),u.forEach(y=>i._free(y)),(g=i.unmountExternalData)==null||g.call(i)}},ga=e=>{var u,l,p;let t=Ae(),n=Lt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Se("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Se("Can't release session."),Lt.delete(e)},ya=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Ae(),u=o.PTR_SIZE,l=e[0],p=e[1],c=e[3],f=c,m,g;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let $=e[2].gpuBuffer;g=en(Jt(l),p);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=x(r,a,$,g)}}else if(c==="ml-tensor"){let $=e[2].mlTensor;g=en(Jt(l),p);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=x(r,$,Jt(l),p)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=o._malloc(g),n.push(m);for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(m+x*u,ht($[x],n),"*")}}else{let x=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&x&&T){let S=o.UTF8ToString(i);if(x(r,S)||T(r,S)){let k=Jt(l);g=en(k,p),f="ml-tensor";let E=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!E||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await E(r,k,p);C(v,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=v}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let y=o.stackSave(),b=o.stackAlloc(4*p.length);try{p.forEach((x,T)=>o.setValue(b+T*u,x,u===4?"i32":"i64"));let $=o._OrtCreateTensor(Jt(l),m,g,b,p.length,ai(f));$===0&&Se(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push($)}finally{o.stackRestore(y)}},wa=async(e,t,n,r,i,a)=>{var P,F,A,B;let s=Ae(),o=s.PTR_SIZE,u=Lt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],p=u[1],c=u[2],f=u[3],m=u[4],g=u[5],y=t.length,b=r.length,$=0,x=[],T=[],S=[],k=[],E=[],C=s.stackSave(),v=s.stackAlloc(y*o),R=s.stackAlloc(y*o),O=s.stackAlloc(b*o),j=s.stackAlloc(b*o);try{[$,x]=oo(a),Xt("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)await ya(n[N],T,k,e,p[t[N]],t[N],m);for(let N=0;N<b;N++)await ya(i[N],S,k,e,c[r[N]],y+r[N],m);Yt("wasm prepareInputOutputTensor");for(let N=0;N<y;N++)s.setValue(v+N*o,T[N],"*"),s.setValue(R+N*o,p[t[N]],"*");for(let N=0;N<b;N++)s.setValue(O+N*o,S[N],"*"),s.setValue(j+N*o,c[r[N]],"*");if(f&&!g){let{handle:N,outputPreferredLocations:Z,outputPreferredLocationsEncoded:U}=f;if(p.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${p.length}).`);Xt("wasm bindInputsOutputs");for(let X=0;X<y;X++){let H=t[X];await s._OrtBindInput(N,p[H],T[X])!==0&&Se(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<b;X++){let H=r[X];(P=i[X])!=null&&P[3]?(E.push(S[X]),s._OrtBindOutput(N,c[H],S[X],0)!==0&&Se(`Can't bind pre-allocated output[${X}] for session=${e}.`)):s._OrtBindOutput(N,c[H],0,U[H])!==0&&Se(`Can't bind output[${X}] to ${Z[X]} for session=${e}.`)}Yt("wasm bindInputsOutputs"),Lt.set(e,[l,p,c,f,m,!0])}(F=s.jsepOnRunStart)==null||F.call(s,l),(A=s.webnnOnRunStart)==null||A.call(s,l);let V;f?V=await s._OrtRunWithBinding(l,f.handle,b,O,$):V=await s._OrtRun(l,R,v,y,j,b,O,$),V!==0&&Se("failed to call OrtRun().");let K=[],re=[];Xt("wasm ProcessOutputTensor");for(let N=0;N<b;N++){let Z=Number(s.getValue(O+N*o,"*"));if(Z===S[N]||E.includes(S[N])){K.push(i[N]),Z!==S[N]&&s._OrtReleaseTensor(Z)!==0&&Se("Can't release tensor.");continue}let U=s.stackSave(),X=s.stackAlloc(4*o),H=!1,q,ue=0;try{s._OrtGetTensorData(Z,X,X+o,X+2*o,X+3*o)!==0&&Se(`Can't access output tensor data on index ${N}.`);let ce=o===4?"i32":"i64",ne=Number(s.getValue(X,ce));ue=s.getValue(X+o,"*");let ye=s.getValue(X+o*2,"*"),De=Number(s.getValue(X+o*3,ce)),Fe=[];for(let Te=0;Te<De;Te++)Fe.push(Number(s.getValue(ye+Te*o,ce)));s._OrtFree(ye)!==0&&Se("Can't free memory for tensor dims.");let Ge=Fe.reduce((Te,pe)=>Te*pe,1);q=At(ne);let rt=f==null?void 0:f.outputPreferredLocations[r[N]];if(q==="string"){if(rt==="gpu-buffer"||rt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Te=[];for(let pe=0;pe<Ge;pe++){let G=s.getValue(ue+pe*o,"*"),Q=s.getValue(ue+(pe+1)*o,"*"),ee=pe===Ge-1?void 0:Q-G;Te.push(s.UTF8ToString(G,ee))}K.push([q,Fe,Te,"cpu"])}else if(rt==="gpu-buffer"&&Ge>0){let Te=s.jsepGetBuffer;if(!Te)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let pe=Te(ue),G=en(ne,Ge);if(G===void 0||!ri(q))throw new Error(`Unsupported data type: ${q}`);H=!0,K.push([q,Fe,{gpuBuffer:pe,download:s.jsepCreateDownloader(pe,G,q),dispose:()=>{s._OrtReleaseTensor(Z)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(rt==="ml-tensor"&&Ge>0){let Te=s.webnnEnsureTensor,pe=s.webnnIsGraphInputOutputTypeSupported;if(!Te||!pe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(en(ne,Ge)===void 0||!ii(q))throw new Error(`Unsupported data type: ${q}`);if(!pe(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let G=await Te(e,ue,ne,Fe,!1);H=!0,K.push([q,Fe,{mlTensor:G,download:s.webnnCreateMLTensorDownloader(ue,q),dispose:()=>{s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(Z)}},"ml-tensor"])}else if(rt==="ml-tensor-cpu-output"&&Ge>0){let Te=s.webnnCreateMLTensorDownloader(ue,q)(),pe=K.length;H=!0,re.push((async()=>{let G=[pe,await Te];return s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(Z),G})()),K.push([q,Fe,[],"cpu"])}else{let Te=rr(q),pe=new Te(Ge);new Uint8Array(pe.buffer,pe.byteOffset,pe.byteLength).set(s.HEAPU8.subarray(ue,ue+pe.byteLength)),K.push([q,Fe,pe,"cpu"])}}finally{s.stackRestore(U),q==="string"&&ue&&s._free(ue),H||s._OrtReleaseTensor(Z)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&Se("Can't clear bound outputs."),Lt.set(e,[l,p,c,f,m,!1]));for(let[N,Z]of await Promise.all(re))K[N][2]=Z;return Yt("wasm ProcessOutputTensor"),K}finally{(B=s.webnnOnRunEnd)==null||B.call(s,l),s.stackRestore(C),T.forEach(V=>s._OrtReleaseTensor(V)),S.forEach(V=>s._OrtReleaseTensor(V)),k.forEach(V=>s._free(V)),$!==0&&s._OrtReleaseRunOptions($),x.forEach(V=>s._free(V))}},_a=e=>{let t=Ae(),n=Lt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Se("Can't get an profile file name."),t._OrtFree(i)},ba=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Ft,at,_n,Ln,Fn,_r,$a,br,un,ln,Eh,Ch,Mh,Ah,Rh,zh,Oh,Nh,Bh=Y(()=>{lt(),kh(),Zt(),Qr(),Ft=()=>!!Me.wasm.proxy&&typeof document<"u",_n=!1,Ln=!1,Fn=!1,br=new Map,un=(e,t)=>{let n=br.get(e);n?n.push(t):br.set(e,[t])},ln=()=>{if(_n||!Ln||Fn||!at)throw new Error("worker not ready")},Eh=e=>{switch(e.data.type){case"init-wasm":_n=!1,e.data.err?(Fn=!0,$a[1](e.data.err)):(Ln=!0,$a[0]()),_r&&(URL.revokeObjectURL(_r),_r=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=br.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ch=async()=>{if(!Ln){if(_n)throw new Error("multiple calls to 'initWasm()' detected.");if(Fn)throw new Error("previous call to 'initWasm()' failed.");if(_n=!0,Ft())return new Promise((e,t)=>{at==null||at.terminate(),no().then(([n,r])=>{try{at=r,at.onerror=a=>t(a),at.onmessage=Eh,$a=[e,t];let i={type:"init-wasm",in:Me};!i.in.wasm.wasmPaths&&(n||Kr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),at.postMessage(i),_r=n}catch(i){t(i)}},t)});try{await ti(Me.wasm),await pa(Me),Ln=!0}catch(e){throw Fn=!0,e}finally{_n=!1}}},Mh=async e=>{if(Ft())return ln(),new Promise((t,n)=>{un("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Me}};at.postMessage(r)});await ha(Me,e)},Ah=async e=>Ft()?(ln(),new Promise((t,n)=>{un("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};at.postMessage(r,[e.buffer])})):wr(e),Rh=async(e,t)=>{if(Ft()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ln(),new Promise((n,r)=>{un("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),at.postMessage(i,a)})}else return ma(e,t)},zh=async e=>{if(Ft())return ln(),new Promise((t,n)=>{un("release",[t,n]);let r={type:"release",in:e};at.postMessage(r)});ga(e)},Oh=async(e,t,n,r,i,a)=>{if(Ft()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return ln(),new Promise((s,o)=>{un("run",[s,o]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};at.postMessage(l,ba(u))})}else return wa(e,t,n,r,i,a)},Nh=async e=>{if(Ft())return ln(),new Promise((t,n)=>{un("end-profiling",[t,n]);let r={type:"end-profiling",in:e};at.postMessage(r)});_a(e)}}),xa,Dh,Ph,P0=Y(()=>{lt(),Bh(),de(),qr(),fo(),xa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Dh=e=>{switch(e[3]){case"cpu":return new Ue(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ri(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ue.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!ii(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ue.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ph=class{async fetchModelAndCopyToWasmMemory(e){return Ah(await si(e))}async loadModel(e,t){xt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Rh(n,t),pt()}async dispose(){return zh(this.sessionId)}async run(e,t,n){xt();let r=[],i=[];Object.entries(e).forEach(c=>{let f=c[0],m=c[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],m=c[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(g)});let o=r.map((c,f)=>xa(c,()=>`input "${this.inputNames[i[f]]}"`)),u=a.map((c,f)=>c?xa(c,()=>`output "${this.outputNames[s[f]]}"`):null),l=await Oh(this.sessionId,i,o,s,u,n),p={};for(let c=0;c<l.length;c++)p[this.outputNames[s[c]]]=a[c]??Dh(l[c]);return pt(),p}startProfiling(){}endProfiling(){Nh(this.sessionId)}}}),Uh={};fn(Uh,{OnnxruntimeWebAssemblyBackend:()=>Sa,initializeFlags:()=>va,wasmBackend:()=>Lh});var va,Sa,Lh,U0=Y(()=>{lt(),Bh(),P0(),va=()=>{(typeof Me.wasm.initTimeout!="number"||Me.wasm.initTimeout<0)&&(Me.wasm.initTimeout=0);let e=Me.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Me.wasm.simd=!1),typeof Me.wasm.proxy!="boolean"&&(Me.wasm.proxy=!1),typeof Me.wasm.trace!="boolean"&&(Me.wasm.trace=!1),typeof Me.wasm.numThreads!="number"||!Number.isInteger(Me.wasm.numThreads)||Me.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Me.wasm.numThreads=1;else{let t=typeof navigator>"u"?Sg("node:os").cpus().length:navigator.hardwareConcurrency;Me.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Sa=class{async init(e){va(),await Ch(),await Mh(e)}async createInferenceSessionHandler(e,t){let n=new Ph;return await n.loadModel(e,t),n}},Lh=new Sa});lt(),lt(),lt();var L0="1.27.0";{let e=(U0(),In(Uh)).wasmBackend;mn("webgpu",e,5),mn("webnn",e,5),mn("cpu",e,10),mn("wasm",e,10)}Object.defineProperty(Me.versions,"web",{value:L0,enumerable:!0});/**
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
 */const F0=114;function G0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function dn(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let p=0;p<n;p++){const c=(p+.5)*l-.5,f=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,c-f));for(let y=0;y<t;y++){const b=(y+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(b))),x=Math.min(r-1,$+1),T=Math.max(0,Math.min(1,b-$)),S=(f*r+$)*a,k=(f*r+x)*a,E=(m*r+$)*a,C=(m*r+x)*a,v=(p*t+y)*3;for(let R=0;R<3;R++){const O=s[S+R]*(1-T)+s[k+R]*T,j=s[E+R]*(1-T)+s[C+R]*T;o[v+R]=Math.min(255,Math.max(0,Math.round(O*(1-g)+j*g)))}}}return o}function Fh(e,t){const n=G0(e.width,e.height,t),r=dn(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(F0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let l=0;l<n.resizedWidth;l++){const p=(u+l)*3,c=o+l;a[c]=r[p]/255,a[i+c]=r[p+1]/255,a[2*i+c]=r[p+2]/255}}return{tensor:a,params:n}}function Gh(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],l=e[s*6+2],p=e[s*6+3],c=e[s*6+4],f=e[s*6+5];if(c<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,y=(u-t.padY)/t.scale,b=(l-t.padX)/t.scale,$=(p-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(y),Math.trunc(b-g),Math.trunc($-y)],boxFloat:[g,y,b-g,$-y]})}return i}function Gn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Wh(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function qh(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const W0=.6,q0=.74;function Vh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,l=(e[a*6+2]-t.padX)/t.scale,p=(e[a*6+3]-t.padY)/t.scale,c=Gn((o+l)/2),f=Gn((u+p)/2),m=Gn((l-o+(p-u))/4);m>=1&&r.push({cx:c,cy:f,r:m})}return r}function V0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(W0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function H0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=q0*(n.r+r.r))&&t.push(n);return t}function j0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Wh(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function Hh(e,t,n){const r=Vh(e,t,n);return r.length===0?[]:j0(H0(V0(r)))}function K0(e,t,n){return Vh(e,t,n)}function Ta(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const jh=["brown","grey","blue","green","yellow","red","purple"],X0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Kh(e,t,n){return Gh(e,t,n,jh.length).map(r=>{const i=jh[r.classIndex];return{color:i,family:X0[i],box:r.box,confidence:r.confidence}})}const Y0=8,Z0=.8,Xh=1.25;function Q0(e){if(e.length<Y0)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*Xh?t.push(s):u>o*Xh&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Z0*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const J0=2.25,Yh=8;function ey(e){if(e.length<Yh)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,f)=>c-f),r=J0*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,f)=>f),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let f=c+1;f<e.length;f++){const m=t[c][0]-t[f][0],g=t[c][1]-t[f][1];m*m+g*g<=i&&(a[s(c)]=s(f))}const o=new Map;for(let c=0;c<e.length;c++){const f=s(c);o.set(f,[...o.get(f)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<Yh||u.length===e.length)return[];const l=new Set(u),p=e.map((c,f)=>f).filter(c=>!l.has(c));return p.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${p.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const St={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function _t(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const ty=.42,ny=22,ry=43,iy=120,ay=1.5,sy=.72,oy=110,Zh=3;function Wn(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*ty);if(l<1)return 0;let p=0;for(let c=0;c<i;c++)for(let f=0;f<r;f++){if((f-o)**2+(c-u)**2>l*l)continue;const m=(c*r+f)*a,g=s[m],y=s[m+1],b=s[m+2];!t&&g>=250&&y>=250&&b>=250||(n(g,y,b),p+=1)}return p}function uy(e){let t=0,n=0,r=0,i=Wn(e,!1,(a,s,o)=>{const u=_t(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Wn(e,!0,(a,s,o)=>{const u=_t(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function ly(e){let t=0,n=0,r=Wn(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=Wn(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function dy(e){let t=0;const n=Wn(e,!0,(r,i,a)=>{t+=_t(r,i,a).s});return n===0?null:t/n}function cy(e){const t=uy(e);if(t===null||t.s<=ny)return 1;if(t.s>=iy){const n=ly(e);return n!==null&&n>=ay?6:3}return t.s>=ry?3:6}function py(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function hy(e,t){const n=[...t];if(e.length<Zh||t.length!==e.length)return n;const r=e.map(s=>dy(s)),i=r.filter(s=>s!==null);if(i.length<Zh)return n;const a=Wh(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<sy*a&&s<oy&&(n[o]=1)}),n}function Qh(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(l*p*3);for(let f=0;f<p;f++)for(let m=0;m<l;m++){const g=(f*l+m)*3;if((m+a-n)**2+(f+s-r)**2<=i*i){const b=((f+s)*e.width+(m+a))*e.channels;c[g]=e.data[b],c[g+1]=e.data[b+1],c[g+2]=e.data[b+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:l,height:p,channels:3,data:c}}function fy(e,t){const n=t.map(a=>Qh(e,a)),r=n.map(a=>cy(a)),i=py(t,r);return hy(n,i)}function my(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function Jh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let l=0;l<t;l++){const p=l*i,c=Math.min((l+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const y=Math.min(g+1,u)-Math.max(g,o);if(!(y<=0))for(let b=Math.floor(p);b<c;b++){const $=Math.min(b+1,c)-Math.max(b,p);$<=0||(f+=e.data[g*e.width+b]*$*y,m+=$*y)}}r[s*t+l]=Math.min(255,Math.max(0,Gn(f/m)))}}return{width:t,height:n,data:r}}function gy(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Gn(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function yy(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let l=-1;l<=1;l++){const p=s+l,c=a+u;if(!(p<0||p>=t||c<0||c>=n)&&r[c*t+p]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function wy(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let l=-1;l<=1;l++){const p=s+l,c=a+u;if(p>=0&&p<t&&c>=0&&c<n&&r[c*t+p]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function Ia(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,p=0;s[p++]=u,i[u]=o;let c=0,f=0,m=0;for(;l<p;){const g=s[l++],y=g%t,b=g/t|0;c+=1,f+=y,m+=b;for(let $=-1;$<=1;$++)for(let x=-1;x<=1;x++){if(x===0&&$===0)continue;const T=y+x,S=b+$;if(T<0||T>=t||S<0||S>=n)continue;const k=S*t+T;r[k]>0&&i[k]===0&&(i[k]=o,s[p++]=k)}}a[o]={area:c,centroidX:f/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function _y(e,t,n){return ef(Float32Array.from(e.data),e.width,t,n)}function ef(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let l=0;l<t;l++)for(let p=0;p<t;p++){const c=p-a,f=l-a,m=o*c-u*f+a,g=u*c+o*f+a,y=Math.floor(m),b=Math.floor(g),$=m-y,x=g-b,T=(E,C)=>E>=0&&E<t&&C>=0&&C<t?e[C*t+E]:r,S=T(y,b)*(1-$)+T(y+1,b)*$,k=T(y,b+1)*(1-$)+T(y+1,b+1)*$;i[l*t+p]=S*(1-x)+k*x}return i}const by=.9,$y=.34,xy=[.55,.6,.66,.72],vy=22,Sy=88,Ty=35,bn=28,ka=4,Iy=Array.from({length:15},(e,t)=>-21+t*3),tf=[-2,0,2],ky=3,Ey=.3;function Cy(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function My(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let y=0;y<e.height;y++)for(let b=0;b<e.width;b++)e.data[y*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,y),i=Math.max(i,y));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),l=new Uint8Array(u*u),p=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let y=0;y<o;y++)for(let b=0;b<s;b++)l[(y+c)*u+(b+p)]=e.data[(y+r)*e.width+(b+t)];const f=bn-2*ka,m=Jh({width:u,height:u,data:l},f,f),g=new Float32Array(bn*bn);for(let y=0;y<f;y++)for(let b=0;b<f;b++)g[(y+ka)*bn+(b+ka)]=m.data[y*f+b]>110?1:0;return g}function Ay(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*$y);if(u<4)return null;const l=s-u,p=o-u,c=2*u,f=2*u;if(c<6||f<6)return null;const m=new Int16Array(c*f),g=new Int16Array(c*f),y=new Int16Array(c*f),b=new Uint8Array(c*f),$=[],x=Math.min(c,f)/2;for(let N=0;N<c;N++)for(let Z=0;Z<f;Z++){const U=((N+l)*n+(Z+p))*i,{h:X,s:H,v:q}=_t(a[U],a[U+1],a[U+2]),ue=N*f+Z;m[ue]=X,g[ue]=H,y[ue]=q,Math.sqrt((Z-f/2)**2+(N-c/2)**2)/x<=t&&(b[ue]=1,$.push(q))}if($.length<16)return null;const T=qh($,55);let S=0,k=0,E=0;const C=N=>m[N]>=vy&&m[N]<=Sy&&g[N]>=Ty,v=N=>y[N]>=T&&g[N]<=95&&!C(N)&&b[N]===1;for(let N=0;N<c*f;N++)b[N]===1&&(E+=1,y[N]>=130&&!C(N)&&(S+=1),v(N)&&(k+=1));const R=S>.5*E&&k<.15*E,O=new Uint8Array(c*f);if(R){const N=qh($,45);for(let Z=0;Z<c*f;Z++)O[Z]=b[Z]===1&&y[Z]<=N?255:0}else for(let N=0;N<c*f;N++)O[N]=v(N)?255:0;const j={width:f,height:c,data:O},P=yy(j);let F=Ia(P),A=F;if(F.stats.length<=1&&(F=Ia(j),A=F,F.stats.length<=1))return null;const B=Math.min(c,f)/2;let V=0,K=-1;for(let N=1;N<A.stats.length;N++){const Z=A.stats[N];if(Z===void 0)continue;const U=Math.hypot(Z.centroidX-f/2,Z.centroidY-c/2)/B,X=Z.area*(1-.6*Math.min(U,1));X>K&&(K=X,V=N)}if(V===0)return null;const re=new Uint8Array(c*f);for(let N=0;N<c*f;N++)re[N]=A.labels[N]===V?255:0;return My(wy({width:f,height:c,data:re}))}function Ry(e,t,n,r,i,a){const s=bn;let o=0,u=0;for(let l=0;l<s;l++){const p=l-a;if(!(p<0||p>=s))for(let c=0;c<s;c++){const f=c-i;if(f<0||f>=s)continue;const m=e[p*s+f];m!==0&&(u+=m,o+=m*n[l*s+c])}}return o/(u+r-o+1e-6)}function zy(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of Iy){const a=i===0?e:ef(e,bn,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of tf)for(const u of tf){const l=Ry(a,s,t,n,o,u);l>r&&(r=l)}}return r}function Oy(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of xy){const o=Ay(e,s);if(o!==null)for(const{label:u,bits:l}of t)n.push([zy(o,l),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Ey)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,ky))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const Ny=2560,By=.3,Dy=.5,Py=1.6,Uy=3,Ly=5;function Fy(e){const t=Math.min(1,Ny/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*o-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,p+1),f=Math.max(0,Math.min(1,l-p));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,y+1),$=Math.max(0,Math.min(1,g-y));for(let x=0;x<3;x++){const T=2-x,S=(p*e.width+y)*e.channels+T,k=(p*e.width+b)*e.channels+T,E=(c*e.width+y)*e.channels+T,C=(c*e.width+b)*e.channels+T,v=e.data[S]*(1-$)+e.data[k]*$,R=e.data[E]*(1-$)+e.data[C]*$,O=v*(1-f)+R*f;a[x*i+u*n+m]=(O/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function Gy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const l=o+t;e[l]>u&&(u=e[l]),s+1<t&&e[l+1]>u&&(u=e[l+1])}r[o]=u}}return r}function Wy(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function qy(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,l=o-a,p=Math.hypot(u,l);if(p===0)continue;const c=u/p,f=l/p;let m=1/0,g=-1/0,y=1/0,b=-1/0;for(const[S,k]of e){const E=S*c+k*f,C=-S*f+k*c;E<m&&(m=E),E>g&&(g=E),C<y&&(y=C),C>b&&(b=C)}const $=g-m,x=b-y,T=$*x;if(T<n){n=T;const S=(m+g)/2,k=(y+b)/2;t={cx:S*c-k*f,cy:S*f+k*c,w:$,h:x,angle:Math.atan2(f,c)}}}return t}function Vy(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),l=Math.abs(s*a)+Math.abs(o*i),p=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-l)),m=Math.min(n-1,Math.ceil(r.cy+l));let g=0,y=0;for(let b=f;b<=m;b++)for(let $=p;$<=c;$++){const x=$-r.cx,T=b-r.cy,S=x*i+T*a,k=-x*a+T*i;Math.abs(S)<=s&&Math.abs(k)<=o&&(g+=e[b*t+$],y+=1)}return y===0?0:g/y}function Hy(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,b)=>y[0]-b[0]),[o,u,l,p]=s,[c,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=l[1]<=p[1]?[l,p]:[p,l];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function jy(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>By?255:0;s=Gy(s,i,a);const o={width:i,height:a,data:s},{labels:u}=Ia(o),l=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const y=u[m*i+g];if(y===0)continue;let b=l.get(y);b===void 0&&(b=new Map,l.set(y,b));const $=b.get(m);$===void 0?b.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const p=n/i,c=r/a,f=[];for(const[m,g]of l){const y=[];for(const[O,[j,P]]of g)y.push([j-.5,O-.5],[j-.5,O+.5],[P+.5,O-.5],[P+.5,O+.5]);const b=qy(Wy(y));if(Math.min(b.w,b.h)<Uy)continue;const $=Vy(e,i,a,b);if($<Dy)continue;const x=b.w*b.h*Py/(2*(b.w+b.h)),T={...b,w:b.w+2*x,h:b.h+2*x};if(Math.min(T.w,T.h)<Ly+2)continue;const k=Hy(T).map(([O,j])=>[Math.min(n,Math.max(0,Math.round(O*p))),Math.min(r,Math.max(0,Math.round(j*c)))]),E=k.map(O=>O[0]),C=k.map(O=>O[1]),v=Math.min(...E),R=Math.min(...C);f.push({quad:k,x:v,y:R,width:Math.max(...E)-v,height:Math.max(...C)-R,score:$})}return f.sort((m,g)=>g.score-m.score)}function Ky(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Xy([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),l=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let f=0;f<s;f++){const m=u[6]*f+u[7]*c+u[8],g=(u[0]*f+u[1]*c+u[2])/m,y=(u[3]*f+u[4]*c+u[5])/m,b=Math.floor(g),$=Math.floor(y),x=g-b,T=y-$,S=Math.max(0,Math.min(e.width-1,b)),k=Math.max(0,Math.min(e.width-1,b+1)),E=Math.max(0,Math.min(e.height-1,$)),C=Math.max(0,Math.min(e.height-1,$+1));for(let v=0;v<e.channels;v++){const R=e.data[(E*e.width+S)*e.channels+v],O=e.data[(E*e.width+k)*e.channels+v],j=e.data[(C*e.width+S)*e.channels+v],P=e.data[(C*e.width+k)*e.channels+v],F=R*(1-x)+O*x,A=j*(1-x)+P*x;l[(c*s+f)*e.channels+v]=Math.round(F*(1-T)+A*T)}}const p={width:s,height:o,channels:e.channels,data:l};return o/s>=1.5?Gt(p,3):p}function Xy(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let l=i;l<8;l++)n[o][l]-=u*n[i][l];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Gt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(o*u*a);for(let p=0;p<i;p++)for(let c=0;c<r;c++){let f,m;n===1?(f=i-1-p,m=c):n===2?(f=r-1-c,m=i-1-p):(f=p,m=r-1-c);const g=(p*r+c)*a,y=(m*o+f)*a;for(let b=0;b<a;b++)l[y+b]=s[g+b]}return{width:o,height:u,channels:a,data:l}}const Yy=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Yy)*255));return e})();const Ot=48,Zy=320;function Qy(e){return["blank",...e.characters," "]}function Jy(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function ew(e,t){const n=Math.trunc(Ot*t),r=e.width/e.height,i=Math.ceil(Ot*r)>n?n:Math.ceil(Ot*r),a=new Float32Array(3*Ot*n),s=Ot*n,o=e.width/i,u=e.height/Ot;for(let l=0;l<Ot;l++){const p=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(p))),f=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,p-c));for(let g=0;g<i;g++){const y=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,b+1),x=Math.max(0,Math.min(1,y-b));for(let T=0;T<3;T++){const S=2-T,k=(c*e.width+b)*e.channels+S,E=(c*e.width+$)*e.channels+S,C=(f*e.width+b)*e.channels+S,v=(f*e.width+$)*e.channels+S,R=e.data[k]*(1-x)+e.data[E]*x,O=e.data[C]*(1-x)+e.data[v]*x,j=R*(1-m)+O*m;a[T*s+l*n+g]=(j/255-.5)/.5}}}return{tensor:a,width:n}}const tw=62,nw=8,rw=5;function Ea(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function iw(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function $r(e,t){return e.length===0&&t.length===0?100:200*iw(e,t)/(e.length+t.length)}function nf(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return $r(n(e),n(t))}function aw(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(p=>r.has(p)).sort(),a=[...n].filter(p=>!r.has(p)).sort(),s=[...r].filter(p=>!n.has(p)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),l=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max($r(o,u),$r(o,l),$r(u,l))}function sw(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[Ea(i),Ea(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function ow(e,t){const n=Ea(e);if(!n||t.length===0)return null;const i=sw(t).map(p=>({...p,score:aw(n,p.key)})).sort((p,c)=>c.score-p.score).slice(0,nw).filter(p=>p.score>=tw);if(i.length===0)return null;const a=i[0].score,s=i.filter(p=>a-p.score<=rw),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],l=[nf(o,u.key),u.score];for(const p of s.slice(1)){const c=[nf(o,p.key),p.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=p,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const rf=5e3,Ca=.75,af=15,uw=1.25,lw=2.4,dw=.003,cw=.85,pw=4,Ma=2600,Aa=2,Ra=.3,sf=.1,of=.012,hw=22,uf=.5,xr=.12;function Ze(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function fw(e,t,n,r){const i=r.map(ne=>ne[0]),a=r.map(ne=>ne[1]),s=i.reduce((ne,ye)=>ne+ye,0)/i.length,o=a.reduce((ne,ye)=>ne+ye,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const l=u*pw,p=Math.max(0,Math.trunc(s-l)),c=Math.min(n.width,Math.trunc(s+l)),f=Math.max(0,Math.trunc(o-l)),m=Math.min(n.height,Math.trunc(o+l));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<Ma?Aa:1,y=Ze(e,n),b=Ze(e,t),$=new e.Rect(p,f,c-p,m-f),x=y.roi($),T=new e.Mat;g!==1?e.resize(x,T,new e.Size(0,0),g,g,e.INTER_CUBIC):x.copyTo(T);const S=new e.Mat,k=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(T,k,e.COLOR_RGB2GRAY);const E=new e.ORB(rf),C=new e.KeyPointVector,v=new e.KeyPointVector,R=new e.Mat,O=new e.Mat,j=new e.Mat,P=[y,b,x,T,S,k,C,v,R,O,j],F=ne=>{for(const ye of P)try{ye.delete()}catch{}try{E.delete()}catch{}return ne};if(E.detectAndCompute(S,j,C,R),E.detectAndCompute(k,j,v,O),R.rows<8||O.rows<8)return F(null);const A=new e.BFMatcher(e.NORM_HAMMING),B=new e.DMatchVectorVector;A.knnMatch(R,O,B,2);const V=[],K=[];for(let ne=0;ne<B.size();ne++){const ye=B.get(ne);if(ye.size()===2){const De=ye.get(0),Fe=ye.get(1);if(De.distance<Ca*Fe.distance){const Ge=C.get(De.queryIdx).pt,rt=v.get(De.trainIdx).pt;V.push(Ge.x,Ge.y),K.push(rt.x,rt.y)}}}if(B.delete(),A.delete(),V.length/2<8)return F(null);const re=e.matFromArray(V.length/2,1,e.CV_32FC2,V),N=e.matFromArray(K.length/2,1,e.CV_32FC2,K),Z=new e.Mat,U=e.findHomography(re,N,e.RANSAC,5,Z);let X=0;for(let ne=0;ne<Z.rows;ne++)X+=Z.data[ne];const H=U.rows===3?[...U.data64F]:null;if(re.delete(),N.delete(),Z.delete(),U.delete(),H===null||X<af)return F(null);const q=1/g,ue=[[q,0,p],[0,q,f],[0,0,1]],ce=[0,1,2].map(ne=>[0,1,2].map(ye=>ue[ne][0]*H[ye]+ue[ne][1]*H[3+ye]+ue[ne][2]*H[6+ye]));return F({H:ce,inliers:X})}function za(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,p]=e[u],[c,f]=e[(u+1)%4];r+=l*f-c*p}const i=Math.abs(r/2)/(t*n);if(i<dw||i>cw)return!1;const a=e.map((u,l)=>{const p=e[(l+1)%4];return Math.hypot(p[0]-u[0],p[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=uw&&o<=lw}function Oa(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Na(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Ra*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=r.map(P=>[P[0],P[1],P[2]-s*(P[0]+P[1])+0]);for(let P=0;P<3;P++)l[P][2]=r[P][2]-s*r[P][0]-s*r[P][1];const p=Ze(e,t),c=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(p,c,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),p.delete(),f.delete();const g=m.data,y=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],$=(P,F)=>{const A=(F*o+P)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let P=0;P<u;P++)for(let F=0;F<o;F++)(P<y||P>=u-y||F<y||F>=o-y)&&$(F,P);const x=P=>{P.sort((A,B)=>A-B);const F=P.length>>1;return P.length%2?P[F]:(P[F-1]+P[F])/2},T=[x(b[0]),x(b[1]),x(b[2])],S=(P,F)=>{const A=(F*o+P)*3,B=g[A]-T[0],V=g[A+1]-T[1],K=g[A+2]-T[2];return Math.sqrt(B*B+V*V+K*K)>hw},k=Math.max(6,Math.trunc(sf*i)),E=Math.max(6,Math.trunc(sf*a)),C=Math.max(2,Math.trunc(of*i)),v=Math.max(2,Math.trunc(of*a)),R=P=>{let F=0,A=0;for(const B of P)A=B?A+1:0,A>F&&(F=A);return F/Math.max(1,P.length)},O=P=>{let F,A,B,V,K;if(P==="L"?(F=s,A=s+a,B=Math.max(0,s-C-k),V=Math.max(0,s-C),K=!1):P==="R"?(F=s,A=s+a,B=s+i+C,V=Math.min(o,s+i+C+k),K=!1):(F=Math.max(0,s-v-E),A=Math.max(0,s-v),B=s,V=s+i,K=!0),A<=F||V<=B)return 0;const re=[];if(K)for(let N=B;N<V;N++){let Z=0;for(let U=F;U<A;U++)S(N,U)&&Z++;re.push(Z/(A-F)>uf)}else for(let N=F;N<A;N++){let Z=0;for(let U=B;U<V;U++)S(U,N)&&Z++;re.push(Z/(V-B)>uf)}return R(re)},j={L:O("L"),R:O("R"),T:O("T")};return c.delete(),m.delete(),j}const mw=6e3,gw=8,lf=.5,yw=.6;function ww(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<Ma?Aa:1,a=Ze(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(mw),l=new e.Mat,p=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,l,p,c);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return f;for(const[g,y]of n){if(r!==void 0&&Date.now()>r)break;const b=Ze(e,y),$=new e.Mat;e.cvtColor(b,$,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute($,l,x,T);const S=[b,x,T],k=()=>{for(const ce of S)ce.delete();$.delete()};if(T.rows<8){k();continue}const E=new e.DMatchVectorVector;m.knnMatch(T,c,E,2);const C=[],v=[];for(let ce=0;ce<E.size();ce++){const ne=E.get(ce);if(ne.size()===2){const ye=ne.get(0);if(ye.distance<Ca*ne.get(1).distance){const De=x.get(ye.queryIdx).pt,Fe=p.get(ye.trainIdx).pt;C.push(De.x,De.y),v.push(Fe.x,Fe.y)}}}if(E.delete(),C.length/2<8){k();continue}const R=e.matFromArray(C.length/2,1,e.CV_32FC2,C),O=e.matFromArray(v.length/2,1,e.CV_32FC2,v),j=new e.Mat,P=e.findHomography(R,O,e.RANSAC,5,j);let F=0;for(let ce=0;ce<j.rows;ce++)F+=j.data[ce];const A=P.rows===3?[...P.data64F]:null;if(R.delete(),O.delete(),j.delete(),P.delete(),A===null||F<gw){k();continue}const B=1/i,V=[[B*A[0],B*A[1],B*A[2]],[B*A[3],B*A[4],B*A[5]],[A[6],A[7],A[8]]],K=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ce,ne])=>Oa(V,ce,ne));if(!za(K,t.width,t.height)){k();continue}const re=Ze(e,t),N=e.matFromArray(3,3,e.CV_64F,V.flat()),Z=new e.Mat;e.warpPerspective(re,Z,N,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const U=new e.Mat;e.cvtColor(Z,U,e.COLOR_RGB2GRAY);const X=new e.Mat;e.matchTemplate(U,$,X,e.TM_CCOEFF_NORMED);const H=X.data32F[0];if(re.delete(),N.delete(),Z.delete(),U.delete(),X.delete(),H<lf){k();continue}const q=Na(e,t,y,V),ue=Ba(q);f.push({id:g,confidence:Math.max(0,H),footprint:K,built:q!==null&&Math.max(q.L,q.R,q.T)>=xr,tuckRegion:Da(K,ue)}),k()}}finally{o.delete(),l.delete(),p.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return f}function Ba(e){return e!==null&&e.R>=xr?["R"]:[]}function Da(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=Ra*a;if(!(s>0))return null;const o=n.reduce((y,b)=>y+b[0],0)/n.length,u=n.reduce((y,b)=>y+b[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},p=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[b,$]=l[y],x=n[b],T=n[$];let S=-(T[1]-x[1]),k=T[0]-x[0];const E=(x[0]+T[0])/2,C=(x[1]+T[1])/2;S*(E-o)+k*(C-u)<0&&(S=-S,k=-k);const v=Math.hypot(S,k);v<=1e-6||(S=S/v*s,k=k/v*s,p.push([x[0]+S,x[1]+k],[T[0]+S,T[1]+k]))}const c=p.map(y=>y[0]),f=p.map(y=>y[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...f))-g}}function _w(e,t,n,r){const i=fw(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,p])=>Oa(i.H,l,p));if(!za(s,t.width,t.height))return null;const o=Na(e,t,n,i.H);if(o===null)return null;const u=Ba(o);return{built:Math.max(o.L,o.R,o.T)>=xr,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const bw=.88;function df(e,t,n,r){if(r.length!==4)return null;const i=n.width,a=n.height,s=Math.max(8,Math.trunc(Ra*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const l=s+Math.trunc(i*bw),p=o-l;if(p<1)return null;const c=Ze(e,t),f=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,a,0,a]),m=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),g=e.getPerspectiveTransform(f,m),y=[...g.data64F],b=[0,1,2].flatMap(C=>[y[C*3],y[C*3+1],y[C*3+2]-s*y[C*3]-s*y[C*3+1]]),$=e.matFromArray(3,3,e.CV_64F,b),x=new e.Mat;e.warpPerspective(c,x,$,new e.Size(o,u),e.WARP_INVERSE_MAP);const T=x.roi(new e.Rect(l,0,p,u)),S=new e.Mat;T.copyTo(S);const k=S.data,E=new Uint8ClampedArray(p*u*3);E.set(k.subarray(0,E.length));for(const C of[c,f,m,g,$,x,T,S])try{C.delete()}catch{}return{width:p,height:u,channels:3,data:E}}function $w(e,t,n,r){const[i,a,s,o]=r;if(s<8||o<8)return null;const u=Math.trunc(.06*s),l=Math.trunc(.06*o),p=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+s+u)),f=Math.max(0,Math.trunc(a-l)),m=Math.min(n.height,Math.trunc(a+o+l));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<Ma?Aa:1,y=Ze(e,n),b=Ze(e,t),$=y.roi(new e.Rect(p,f,c-p,m-f)),x=new e.Mat;g!==1?e.resize($,x,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(x);const T=new e.Mat,S=new e.Mat;e.cvtColor(b,T,e.COLOR_RGB2GRAY),e.cvtColor(x,S,e.COLOR_RGB2GRAY);const k=new e.ORB(rf),E=new e.KeyPointVector,C=new e.KeyPointVector,v=new e.Mat,R=new e.Mat,O=new e.Mat,j=[y,b,$,x,T,S,E,C,v,R,O],P=ce=>{for(const ne of j)try{ne.delete()}catch{}try{k.delete()}catch{}return ce};if(k.detectAndCompute(T,O,E,v),k.detectAndCompute(S,O,C,R),v.rows<8||R.rows<8)return P(null);const F=new e.BFMatcher(e.NORM_HAMMING),A=new e.DMatchVectorVector;F.knnMatch(v,R,A,2);const B=[],V=[];for(let ce=0;ce<A.size();ce++){const ne=A.get(ce);if(ne.size()===2){const ye=ne.get(0),De=ne.get(1);if(ye.distance<Ca*De.distance){const Fe=E.get(ye.queryIdx).pt,Ge=C.get(ye.trainIdx).pt;B.push(Fe.x,Fe.y),V.push(Ge.x,Ge.y)}}}if(A.delete(),F.delete(),B.length/2<8)return P(null);const K=e.matFromArray(B.length/2,1,e.CV_32FC2,B),re=e.matFromArray(V.length/2,1,e.CV_32FC2,V),N=new e.Mat,Z=e.findHomography(K,re,e.RANSAC,5,N);let U=0;for(let ce=0;ce<N.rows;ce++)U+=N.data[ce];const X=Z.rows===3?[...Z.data64F]:null;if(K.delete(),re.delete(),N.delete(),Z.delete(),X===null||U<af)return P(null);const H=1/g,q=[[H,0,p],[0,H,f],[0,0,1]],ue=[0,1,2].map(ce=>[0,1,2].map(ne=>q[ce][0]*X[ne]+q[ce][1]*X[3+ne]+q[ce][2]*X[6+ne]));return P({H:ue,inliers:U})}function cf(e,t,n,r){const i=$w(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([$,x])=>Oa(i.H,$,x));if(!za(s,t.width,t.height))return null;const o=Ze(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(o,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const p=Ze(e,n),c=new e.Mat,f=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(p,f,e.COLOR_RGB2GRAY);const m=new e.Mat;e.matchTemplate(c,f,m,e.TM_CCOEFF_NORMED);const g=m.data32F[0];for(const $ of[o,u,l,p,c,f,m])try{$.delete()}catch{}if(g<lf)return null;const y=Na(e,t,n,i.H);if(y===null)return null;const b=Ba(y);return{built:Math.max(y.L,y.R,y.T)>=xr,footprint:s,overflow:b,edgeScores:y,inliers:i.inliers}}function xw(e,t,n,r=.03){let i=null,a=1/0;for(const s of e){const[o,u,l,p]=s;if(l<=0||p<=0)continue;const c=r*l,f=r*p;if(t>=o-c&&t<=o+l+c&&n>=u-f&&n<=u+p+f){const m=l*p;m<a&&(a=m,i=[o,u,l,p])}}return i}const vw=.3,Sw=.3;function Tw(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=vw}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:l}=a.edgeScores,p=Math.max(o,u,l)<Sw;if(!r&&!p)return;t.some(([f,m])=>f>=a.zone.x0&&f<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(s)}),i}const Tt=128,Pa=.5;function Ua(e){const t=dn(e,Tt,Tt),n=Tt*Tt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function pf(e){const t=e[1]??0;return{built:t>=Pa,prob:t}}const qn=120,Vn=179,Iw=1.3,kw=3.6,Ew=.45,Cw=6e-4,Mw=.02,Aw=6e3,Rw=.78,zw=1.25,Ow=2.4,Nw=.05,Bw=1.5,Dw=.5,Pw=.9,Uw=150,Lw=18,Fw=34,Gw=90,Ww=130,qw=.13,Vw=.15,vr="magistrates-guild",La="merchants-guild";function Hw(e,t){const n=Ze(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[qn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[Vn,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(s,l,e.MORPH_CLOSE,u),s.delete(),u.delete();const p=new e.Mat,c=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(l,p,c,f,8);l.delete(),p.delete(),f.delete();const g=t.width*t.height,y=[];for(let b=1;b<m;b++){const $=c.intAt(b,0),x=c.intAt(b,1),T=c.intAt(b,2),S=c.intAt(b,3),k=c.intAt(b,4),E=k/g;E<Cw||E>Mw||k/Math.max(T*S,1)<Ew||y.push({x:$,y:x,w:T,h:S})}return c.delete(),{blobs:y,mask:o,maskWidth:t.width}}function jw(e,t,n,r,i,a,s){const o=e,u=a,l=s,p=i;if(!p.gray){const H=Ze(e,r);p.gray=new o.Mat,o.cvtColor(H,p.gray,o.COLOR_RGB2GRAY),H.delete(),p.k=new o.KeyPointVector,p.d=new o.Mat;const q=new o.Mat;u.detectAndCompute(p.gray,q,p.k,p.d),q.delete()}const c=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,f,m,g),f.delete();const y=H=>(m.delete(),g.delete(),H);if(p.d.rows<8||g.rows<8)return y(null);const b=new o.DMatchVectorVector;l.knnMatch(p.d,g,b,2);const $=[],x=[];for(let H=0;H<b.size();H++){const q=b.get(H);if(q.size()===2){const ue=q.get(0);if(ue.distance<Rw*q.get(1).distance){const ce=p.k.get(ue.queryIdx).pt,ne=m.get(ue.trainIdx).pt;$.push(ce.x,ce.y),x.push(ne.x,ne.y)}}}if(b.delete(),$.length/2<8)return y(null);const T=o.matFromArray($.length/2,1,o.CV_32FC2,$),S=o.matFromArray(x.length/2,1,o.CV_32FC2,x),k=new o.Mat,E=o.findHomography(T,S,o.RANSAC,5,k);if(T.delete(),S.delete(),k.delete(),E.rows!==3)return E.delete(),y(null);const C=[...E.data64F],v=(H,q)=>{const ue=C[6]*H+C[7]*q+C[8];return[(C[0]*H+C[1]*q+C[2])/ue,(C[3]*H+C[4]*q+C[5])/ue]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([H,q])=>v(H,q));if(R.some(H=>!Number.isFinite(H[0])||!Number.isFinite(H[1])))return E.delete(),y(null);const O=R.map((H,q)=>{const ue=R[(q+1)%4];return Math.hypot(ue[0]-H[0],ue[1]-H[1])}),j=Math.min(...O);if(j<1)return E.delete(),y(null);const P=Math.max(...O)/j;let F=0;for(let H=0;H<4;H++){const[q,ue]=R[H],[ce,ne]=R[(H+1)%4];F+=q*ne-ce*ue}const A=t,B=Math.abs(F/2)/(A.rows*A.cols);if(P<zw||P>Ow||B<Nw||B>Bw)return E.delete(),y(null);const V=new o.Mat;o.warpPerspective(A,V,E,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),E.delete();const K=new o.Mat;o.cvtColor(V,K,o.COLOR_RGB2GRAY),V.delete();const re=Math.trunc(r.height/2),N=K.roi(new o.Rect(0,0,r.width,re)),Z=p.gray.roi(new o.Rect(0,0,r.width,re)),U=new o.Mat;o.matchTemplate(N,Z,U,o.TM_CCOEFF_NORMED);const X=U.data32F[0];return N.delete(),Z.delete(),U.delete(),K.delete(),y(X)}function Kw(e,t,n){let r,i;if(n===vr)r=La,i=qw;else if(n===La)r=vr,i=Vw;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const l=Math.trunc(o/2);let p=0,c=null;for(const[f,m]of[[0,l],[l,o]]){let g=0,y=0;for(let $=s;$<s+u;$++)for(let x=a+f;x<a+m;x++){const T=($*e.width+x)*e.channels,{h:S,s:k,v:E}=_t(e.data[T],e.data[T+1],e.data[T+2]);if(S>=qn&&S<=Vn&&k>=30&&k<=170&&E<=170)continue;g++,(r===La?S>=Lw&&S<=Fw&&k>=Gw&&E>=Ww:S>=95&&S<=130&&k>=80)&&y++}if(g<20)continue;const b=y/g;b>p&&(p=b,c={x:a+f,y:s,w:m-f,h:u})}return p>=i&&c!==null?{id:r,box:c}:null}const Xw=1.7,Yw=140,Zw=170,Qw=.2,Jw=.1,hf=240,ff=80,mf=60,e_=50,gf="scientists-guild",yf="tacticians-guild",Sr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function t_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let k=0;for(let E=0;E<a;E++)e[(i+S)*t+r+E]>0&&k++;o[S]=k/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const l=u[0],p=u[u.length-1],c=p-l;if(c<5)return[];const f=a/c;if(f<Iw||f>kw)return[];if(f>=Xw)return[{x:r,y:i+l,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,y=[];let b=0;for(let S=-4;S<=4;S++){const k=Math.exp(-(S*S)/(2*g*g));y.push(k),b+=k}for(let S=0;S<s;S++){let k=0;for(let E=-4;E<=4;E++){const C=Math.min(s-1,Math.max(0,S+E));k+=o[C]*y[E+4]}m[S]=k/b}const $=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let T=l+Math.trunc(c/2);if(x>$){let S=1/0;for(let k=$;k<x;k++)m[k]<S&&(S=m[k],T=k)}return[{x:r,y:i+l,w:a,h:T-l},{x:r,y:i+T,w:a,h:p-T}]}function n_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let l=0;l<o;l++)for(let p=0;p<s;p++){const c=((r+l)*e.width+n+p)*e.channels,f=(l*s+p)*3;u[f]=e.data[c],u[f+1]=e.data[c+1],u[f+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function r_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=_t(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=Yw&&s<=Zw&&n++)}return t===0?0:n/t}function i_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=_t(e.data[i],e.data[i+1],e.data[i+2]);!(a>=qn&&a<=Vn)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function wf(e,t){const n=Ze(e,t),r=new e.Mat;e.resize(n,r,new e.Size(hf,ff),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:hf,height:ff,channels:3,data:i}}function a_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function _f(e,t){const n=a_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const y=g*3,{h:b,s:$,v:x}=_t(n.data[y],n.data[y+1],n.data[y+2]);!(b>=qn&&b<=Vn&&$>=30&&$<=170&&x<=170)&&x>=40&&(i[g]=1,a++)}const s=a<20,o=Ze(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const l=u.data;let p=0,c=0,f=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(p+=l[g*3]*100/255,c+=l[g*3+1]-128,f+=l[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[p/m,c/m,f/m]}function s_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const l=u*e.channels,{h:p,s:c,v:f}=_t(e.data[l],e.data[l+1],e.data[l+2]);p>=qn&&p<=Vn&&c>=30&&c<=170&&f<=170||(t++,c>=70&&f>=50&&(p>=95&&p<=130?n++:p>=35&&p<=92?r++:p<=10?i++:p>=15&&p<=34&&f>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function o_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=_t(e.data[i],e.data[i+1],e.data[i+2]);s>=mf&&o>=e_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<mf&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function u_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,l=t[o]-r;i+=u*l,a+=u*u,s+=l*l}return i/(Math.sqrt(a*s)+1e-6)}function bf(e,t){const n=Ze(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function l_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=wf(e,a);n.set(i,bf(e,s)),Sr.includes(i)&&r.set(i,_f(e,s))}return{gray:n,warmLab:r}}function d_(e,t,n){const r=wf(e,t),i=s_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return vr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return gf;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return yf;const a=o_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const l of Object.keys(s))s[l]>s[o]&&(o=l);if(s[o]<=0)return"";let u;if(o==="blue")u=vr;else if(o==="green")u=gf;else if(o==="red")u=yf;else{const l=bf(e,r);let p="",c=-2;for(const f of Sr){const m=n.gray.get(f);if(m===void 0)continue;const g=u_(l,m);g>c&&(c=g,p=f)}u=p||Sr[0]}if(Sr.includes(u)&&n.warmLab.size>0){const l=_f(e,r);let p=u,c=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(l[0]-m[0],l[1]-m[1],l[2]-m[2]);g<c&&(c=g,p=f)}return p}return u}function c_(e,t,n,r,i){var y;const a=[],{blobs:s,mask:o,maskWidth:u}=Hw(e,t);if(s.length===0||n.size===0)return a;const l=e,p=new l.ORB(Aw),c=new l.BFMatcher(l.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=Ze(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const $=b.x+Math.trunc(b.w/2),x=b.y+Math.trunc(b.h/2),T=Math.max(Uw,Math.trunc(Pw*Math.max(b.w,b.h))),S=Math.max(0,$-T),k=Math.max(0,x-T),E=Math.min(t.width,$+T),C=Math.min(t.height,x+T);if(E-S<16||C-k<16)continue;const v=m.roi(new l.Rect(S,k,E-S,C-k)),R=new l.Mat;l.cvtColor(v,R,l.COLOR_RGB2GRAY);let O=null,j=-2;for(const[B,V]of n){if(r!==void 0&&Date.now()>r)break;const K=jw(e,v,R,V,f.get(B),p,c);K!==null&&K>j&&(j=K,O=B)}v.delete(),R.delete();const P=new Set;if(O!==null&&j>=Dw){a.push({id:O,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),P.add(O);const B=Kw(t,b,O);B&&(a.push({id:B.id,boundingBox:{x:B.box.x,y:B.box.y,width:B.box.w,height:B.box.h},confidence:.9}),P.add(B.id))}if(i===void 0||i.size===0)continue;const F=t_(o,u,b);if(F.length!==2)continue;const A=F.map(B=>n_(t,B));if(!A.some(B=>B.width*B.height===0||i_(B)<Jw))for(let B=0;B<F.length;B++){const V=A[B];if(r_(V)<Qw)continue;g===null&&(g=l_(e,i));const K=d_(e,V,g);if(K&&!P.has(K)){P.add(K);const re=F[B];a.push({id:K,boundingBox:{x:re.x,y:re.y,width:re.w,height:re.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const $=b;for(const x of["gray","k","d"])try{(y=$[x])==null||y.delete()}catch{}}try{p.delete(),c.delete()}catch{}}return a}const $f=128,p_=.56,h_=15,f_=.58,m_=70,g_=50,y_=.12,w_=.2,__=.1,b_=.17,xf=.15;function $_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function vf(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,s-u),p=Math.max(0,o-u),c=Math.min(n,s+u),f=Math.min(r,o+u),m=c-l,g=f-p,y=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const $=((b+p)*n+l)*i;y.set(a.subarray($,$+m*i),b*m*i)}return{width:m,height:g,channels:i,data:y}}function x_(e){const t=vf(e,p_),n=my(t),r=Jh(n,$f,$f);return gy(r)}function v_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const l=e[u]-r,p=t[u]-i;a+=l*p,s+=l*l,o+=p*p}return a/(Math.sqrt(s*o)+1e-6)}function S_(e){const t=new Map([["masonry",0],["strategy",0]]),n=vf(e,f_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,l=0;for(let f=0;f<r*i;f++){const m=f*a,{h:g,s:y,v:b}=_t(s[m],s[m+1],s[m+2]);y>=m_&&b>=g_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(l+=1))}const p=u/o,c=l/o;return p>=y_&&t.set("masonry",xf*Math.min(1,p/w_)),c>=__&&t.set("strategy",xf*Math.min(1,c/b_)),t}function T_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=x_(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,a=[];for(let l=0;l<360;l+=h_)a.push(_y(n,l,i));const s=new Map;for(const[l,p]of t){let c=-1/0;for(const f of a){const m=v_(f,p);m>c&&(c=m)}s.set(l,c)}for(const[l,p]of S_(e))p>0&&s.has(l)&&s.set(l,s.get(l)+p);let o="",u=-1/0;for(const[l,p]of s)p>u&&(o=l,u=p);return[o,u]}const Wt=224,I_=512,k_=[.485,.456,.406],E_=[.229,.224,.225];function C_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function M_(e){const t=dn(e,Wt,Wt),n=Wt*Wt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-k_[a])/E_[a];return r}function A_(e){const t=3*Wt*Wt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(M_(Gt(e,r)),r*t);return n}function R_(e,t=I_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function z_(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const $n=96,O_=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],N_=.45;function B_(e){const t=dn(e,$n,$n),n=$n*$n,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function D_(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=N_?O_[t]??"":"",prob:n}}const xn=128,P_=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis"],U_=.5,L_=.9;function F_(e){const t=dn(e,xn,xn),n=xn*xn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function G_(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8ClampedArray(t*n*r);for(let s=0;s<t;s++)for(let o=0;o<n;o++){const u=s,p=((n-1-o)*t+u)*r,c=(s*n+o)*r;for(let f=0;f<r;f++)a[c+f]=i[p+f]}return{width:n,height:t,channels:r,data:a}}function W_(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=G_(n);return n}function q_(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function V_(e,t){let n=0,r=-1;for(let i=0;i<4;i++){const a=i===0?e:W_(e,i),s=await t(F_(a)),o=q_(s);o.prob>r&&(r=o.prob,n=o.index)}return{id:r>=U_?P_[n]??"":"",prob:r}}const vn=96,H_=[1,2,3,4,5,6,7],j_=.8;function K_(e){const t=dn(e,vn,vn),n=vn*vn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function X_(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:H_[t],prob:e[t]}}const Sn=128,Sf=.35,Y_=["fp","laurel"],Z_=.85;function Q_(e){const t=dn(e,Sn,Sn),n=Sn*Sn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function J_(e){return e[Y_.indexOf("fp")]}const eb=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],tb=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],nb=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],rb=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],ib=[...tb,...nb,...rb,...eb];Object.fromEntries(ib.map(e=>[e.id,e]));const ab=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const Ne="/7wd-scorer/models/";let Tf=!1;const Tr=new Map;function If(){var e;Tf||(Me.wasm.wasmPaths="/7wd-scorer/ort/",Me.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Tf=!0)}const Fa=new Set;function sb(e){If();let t=Tr.get(e);return t===void 0&&(t=it.create(`${Ne}${St[e].onnx}`,{executionProviders:Fa.has(e)?["wasm"]:["webgpu","wasm"]}),Tr.set(e,t),t.catch(()=>Tr.delete(e))),t}let Ga=null,Wa=null;const ob=.75,ub=4,lb=.65,db=3e4;let qa=null;function Va(){return qa===null&&(qa=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),qa}const kf=new Map;function Ha(e){let t=kf.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ne}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),kf.set(e,t)),t}function ja(e){return Ha(`wonder-refs/${e}.jpg`)}const Ef=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function cb(){const e=new Map;for(const t of Ef){const n=await Ha(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function pb(){const e=new Map;for(const t of Ef){const n=await Ha(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const hb=.6,fb=12,mb=45e3;let Ka=null;function Cf(){return Ka===null&&(If(),Ka=(async()=>{try{const[e,t,n,r]=await Promise.all([it.create(`${Ne}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),it.create(`${Ne}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Ne}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Ne}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Qy(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),Ka}async function gb(e,t){const n=Math.max(Zy/Ot,t.width/t.height),{tensor:r,width:i}=ew(t,n),a={[e.rec.inputNames[0]]:new Ue("float32",r,[1,3,Ot,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,l]=s.dims,p=s.data,c=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,y=-1/0;const b=m*l;for(let $=0;$<l;$++){const x=p[b+$];x>y&&(y=x,g=$)}c[m]=g,f[m]=y}return Jy(c,f,e.charset)}async function yb(e,t){const n=await Cf();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+mb;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`,s/4);const o=Gt(e,s),u=Fy(o),l={[n.det.inputNames[0]]:new Ue("float32",u.tensor,[1,3,u.height,u.width])},p=(await n.det.run(l))[n.det.outputNames[0]],c=jy(p.data,u,o.width,o.height).slice(0,fb);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of c){if(Date.now()>i){a=!0;break e}const m=Ky(o,f.quad);if(m.width<m.height*1.5)continue;const[g,y]=await gb(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${y.toFixed(2)}`),y<hb||g.trim().length<ub)continue;const b=ow(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<ob||b.kind!=="wonder")continue;const $=r.get(b.id);($===void 0||b.confidence>$.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:Mf(f,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Mf(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,f)=>i===1?[f,r-1-c]:i===2?[n-1-c,r-1-f]:[n-1-f,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),l=Math.min(...o),p=Math.min(...u);return{x:l,y:p,width:Math.max(...o)-l,height:Math.max(...u)-p}}function wb(){return Wa===null&&(Wa=fetch(`${Ne}laurel_gallery.json`).then(async e=>e.ok?Cy(await e.json()):[]).catch(()=>[])),Wa}function _b(e,t,n,r){return Ir(e,t-r,n-r,2*r,2*r)}function Ir(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(l*p*3);for(let f=0;f<p;f++)for(let m=0;m<l;m++){const g=((f+s)*e.width+(m+a))*e.channels,y=(f*l+m)*3;c[y]=e.data[g],c[y+1]=e.data[g+1],c[y+2]=e.data[g+2]}return{width:l,height:p,channels:3,data:c}}function bb(){return Ga===null&&(Ga=fetch(`${Ne}token_templates.json`).then(async e=>e.ok?$_(await e.json()):new Map).catch(()=>new Map)),Ga}let Xa=null;function $b(){return Xa===null&&(Xa=(async()=>{try{const e=await fetch(`${Ne}token_embed_index.json`);if(!e.ok)return null;const t=C_(await e.json());return{session:await it.create(`${Ne}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),Xa}const xb=.92;let Ya=null;function vb(){return Ya===null&&(Ya=(async()=>{try{return(await fetch(`${Ne}guild_classifier.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ya}let Za=null;function Sb(){return Za===null&&(Za=(async()=>{try{return(await fetch(`${Ne}laurel_digit.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}laurel_digit.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Za}let Qa=null;function Tb(){return Qa===null&&(Qa=(async()=>{try{return(await fetch(`${Ne}laurel_filter.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}laurel_filter.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Qa}async function Ib(e,t,n){const[r,i,a,s]=t,o=a-r,u=s-i;if(o<=0||u<=0)return null;const l=Math.trunc(Sf*o),p=Math.trunc(Sf*u),c=Math.max(0,r-l),f=Math.max(0,i-p),m=Math.min(e.width,a+l),g=Math.min(e.height,s+p),y=Ir(e,c,f,m-c,g-f);if(y.width<=0||y.height<=0)return null;try{const b=Q_(y),$=await n.run({[n.inputNames[0]]:new Ue("float32",b,[1,3,Sn,Sn])});return J_($[n.outputNames[0]].data)}catch{return null}}let Ja=null;function Af(){return Ja===null&&(Ja=(async()=>{try{return(await fetch(`${Ne}tuck_classifier.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}tuck_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),Ja}const Rf=.2,kb=.3,zf=.25,Eb=.1;let es=null;function Cb(){return es===null&&(es=(async()=>{try{return(await fetch(`${Ne}track_band.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}track_band.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),es}let ts=null;function Mb(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=zf)return!1;const i=e.x+e.width,a=e.y+e.height;for(const s of n){const o=s.box;if(!o||o.length<4||o[3]<=0)continue;const u=o[0]+o[2]/2,l=o[1]+o[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=a))continue;const p=o[2]/o[3];if(!(Math.abs(Math.log(p))<=zf)&&r>1==p>1)return!0}return!1}const Ab=.4;function Rb(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function zb(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const a=i.tuckRegion;a&&r.push(a)}return n.length===0&&r.length===0?e:e.filter(i=>{const a=i.boundingBox;if(!a)return!0;const s=a.x+a.width/2,o=a.y+a.height/2;for(const u of n)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height||Rb(a,u)>=Ab)return!1;for(const u of r)if(s>=u.x&&s<=u.x+u.width&&o>=u.y&&o<=u.y+u.height)return!1;return!0})}function Ob(){return ts===null&&(ts=(async()=>{try{return(await fetch(`${Ne}tuck_box.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}tuck_box.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ts}async function Nb(e,t,n){const[r,i,a,s]=t;if(a<=0||s<=0)return null;const o=Math.round(a*Rf),u=Math.round(s*Rf),l=Math.max(0,Math.round(r-o)),p=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+a+o)),f=Math.min(e.height,Math.round(i+s+u)),m=c-l,g=f-p;if(m<=0||g<=0)return null;const y=e.channels,b=new Uint8ClampedArray(m*g*y);for(let T=0;T<g;T++){const S=((p+T)*e.width+l)*y;b.set(e.data.subarray(S,S+m*y),T*m*y)}const $={width:m,height:g,channels:y,data:b};let x=null;for(let T=0;T<4;T++){const S=T===0?$:Gt($,T),k=S.width,E=k-Math.floor(kb*k),C=k-E;if(C<=0)continue;const v=new Uint8ClampedArray(C*S.height*S.channels);for(let F=0;F<S.height;F++){const A=(F*k+E)*S.channels;v.set(S.data.subarray(A,A+C*S.channels),F*C*S.channels)}const R={width:C,height:S.height,channels:S.channels,data:v},O=Ua(R),P=(await n.run({[n.inputNames[0]]:new Ue("float32",O,[1,3,Tt,Tt])}))[n.outputNames[0]].data[1]??0;x=x===null?P:Math.max(x,P)}return x}let ns=null;function Bb(){return ns===null&&(ns=(async()=>{try{return(await fetch(`${Ne}wonder_classifier.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}wonder_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),ns}async function Db(e,t,n,r,i,a){var f;const s=(m,g,y,b)=>{const $=Math.max(0,Math.round(m)),x=Math.max(0,Math.round(g)),T=Math.min(t.width,Math.round(m+y)),S=Math.min(t.height,Math.round(g+b)),k=T-$,E=S-x;if(k<=0||E<=0)return null;const C=t.channels,v=new Uint8ClampedArray(k*E*C);for(let R=0;R<E;R++){const O=((x+R)*t.width+$)*C;v.set(t.data.subarray(O,O+k*C),R*k*C)}return{width:k,height:E,channels:C,data:v}},o=async m=>(await r.run({[r.inputNames[0]]:new Ue("float32",m,[1,3,xn,xn])}))[r.outputNames[0]].data,u=new Map;for(const m of n){const[g,y,b,$]=m;if(b<=0||$<=0)continue;const x=s(g,y,b,$);if(x===null)continue;const{id:T,prob:S}=await V_(x,o);if(T===""||S<L_)continue;const k=u.get(T);(k===void 0||S>k.prob)&&u.set(T,{prob:S,box:m})}const l=[],p=await Af(),c=await Ob();for(const[m,{prob:g,box:y}]of u){const[b,$,x,T]=y;let S={x:Math.round(b),y:Math.round($),width:Math.round(x),height:Math.round(T)},k=null,E=[],C=null;if(Date.now()<i)try{const B=await ja(m);if(B!==null){const V=cf(e,t,B,y);if(V!==null){k=V.footprint,E=V.overflow;const K=k.map(U=>U[0]),re=k.map(U=>U[1]),N=Math.max(0,Math.round(Math.min(...K))),Z=Math.max(0,Math.round(Math.min(...re)));if(S={x:N,y:Z,width:Math.min(t.width,Math.round(Math.max(...K)))-N,height:Math.min(t.height,Math.round(Math.max(...re)))-Z},p!==null)try{const U=df(e,t,B,k);if(U!==null){const X=Ua(U),H=await p.run({[p.inputNames[0]]:new Ue("float32",X,[1,3,Tt,Tt])});C=pf(H[p.outputNames[0]].data).prob}}catch{}}}}catch(B){console.warn(`[wonders-cls] ${m} registration failed:`,B)}const v=k!==null?Da(k,E):null,R=[];if(C!==null&&R.push(C>=Pa?1:0),c!==null)try{const B=await Nb(t,y,c);B!==null&&R.push(B>=Pa?1:0)}catch{}const O=v??S,j=a.some(B=>{const V=B.box[0]+B.box[2]/2,K=B.box[1]+B.box[3]/2;return V>=O.x&&V<=O.x+O.width&&K>=O.y&&K<=O.y+O.height});R.push(j?1:0);let P=R.length>0&&R.reduce((B,V)=>B+V,0)*2>R.length;P&&Mb(O,S,a)&&(P=!1);const F={id:m,name:((f=ab[m])==null?void 0:f.name)??m,builtWithCardUnderneath:P,boundingBox:S,confidence:Math.round(g*1e4)/1e4,...v?{tuckRegion:v}:{}},A=v??S;l.push({obj:F,edgeScores:null,zone:{x0:A.x,y0:A.y,x1:A.x+A.width,y1:A.y+A.height}})}return l}async function Pb(e,t){const n=await $b();if(n!==null)try{const r=A_(e),i=new Ue("float32",r,[4,3,Wt,Wt]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=z_(n.index,R_(s));return u<xb?["",-1]:[o,u]}catch{}return T_(e,t)}async function rs(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function qt(e,t){const n=St[e],{tensor:r,params:i}=Fh(t,n.input),a=async()=>{const s=await sb(e),o={[s.inputNames[0]]:new Ue("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(Fa.has(e))throw s;return Fa.add(e),Tr.delete(e),await a()}}const Ub=6,Lb=2,Fb=5,Gb=2;async function Wb(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await rs(e),r=await qt("banner",n),i=Kh(r.rows,r.params,St.banner.conf);if(t.banners=i.length,i.length>=Ub)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await qt("laurel",n),s=Ta(a.rows,a.params,St.laurel.conf);if(t.laurels=s.length,s.length>=Lb)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await qt("coin",n),u=Hh(o.rows,o.params,St.coin.conf);return t.coins=u.length,u.length>=Fb?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Gb?{...t,kind:"board",confidence:.4}:t}function qb(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Vb(e,t,n,r,i=()=>{}){const a={},s=[],o=[],u=[],l=[],p=[],c=[];let f=0,m=0,g=0,y=0,b=0;for(const S of e){b+=1;const k=`${t} photo ${b}/${e.length}`;r(`${k}: reading pixels…`,.01);const E=await rs(S);r(`${k}: card banners…`,.04);const C=await qt("banner",E),v=Kh(C.rows,C.params,St.banner.conf);r(`${k}: progress tokens…`,.08);let R=[];const O=await Cb();if(O!==null)try{const G=Fh(E,1280),Q=await O.run({[O.inputNames[0]]:new Ue("float32",G.tensor,[1,3,1280,1280])});R=Ta(Q[O.outputNames[0]].data,G.params,Eb)}catch{}const j=await qt("token",E),P=await bb(),F=[];for(const G of K0(j.rows,j.params,St.token.conf)){if(F.push({cx:G.cx,cy:G.cy,r:G.r}),R.some(([oe,le,Ee,Ie])=>G.cx>=oe&&G.cx<=Ee&&G.cy>=le&&G.cy<=Ie))continue;const[Q,ee]=await Pb(Qh(E,G),P);Q===""&&ee<0?F.pop():Q===""?m+=1:u.some(oe=>oe.id===Q)||u.push({id:Q,center:[G.cx,G.cy],radius:G.r,confidence:Math.round(ee*1e4)/1e4})}r(`${k}: coins…`,.14);const A=await qt("coin",E),B=Hh(A.rows,A.params,St.coin.conf).filter(G=>!F.some(Q=>(G.cx-Q.cx)**2+(G.cy-Q.cy)**2<=G.r*G.r)),V=fy(E,B),K=[];if(B.forEach((G,Q)=>{const ee=V[Q];f+=ee,K.push({denomination:ee,center:[G.cx,G.cy],radius:G.r,denomSource:"colour"})}),K.length>=2){const G=K.map(ee=>ee.radius).sort((ee,oe)=>ee-oe),Q=G.length%2===1?G[(G.length-1)/2]:(G[G.length/2-1]+G[G.length/2])/2;if(Q>0)for(const ee of K)ee.radius/Q>2&&(ee.suspect=!0,ee.suspectReason=`radius ${ee.radius}px is ${(ee.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}o.push(...K);const re=[],N=Date.now()+db;let Z=null,U=null;const X=()=>(U===null&&(U=(async()=>{try{const{rows:G,params:Q}=await qt("wonder",E);return Gh(G,Q,St.wonder.conf,1).map(ee=>ee.box)}catch{return[]}})()),U),H=[];let q=!1;const ue=await Bb();if(ue!==null){const G=await X();if(G.length>0&&(Z=await Va(),Z!==null)){r(`${k}: identifying wonders…`,.35);const Q=await Db(Z,E,G,ue,N,v);for(const ee of Q)l.some(oe=>oe.id===ee.obj.id)||(l.push(ee.obj),H.push({obj:ee.obj,edgeScores:ee.edgeScores,zone:ee.zone}),re.push(ee.zone));q=Q.length>0}}q||r(`${k}: wonder names…`,.2);const ce=q?{wonders:[],aborted:!1}:await yb(E,(G,Q)=>r(`${k}: ${G}`,.2+.35*(Q??0)));Z===null&&(Z=ce.wonders.length>0?await Va():null);for(const G of ce.wonders){let Q=null;if(Z!==null&&Date.now()<N){r(`${k}: registering ${G.name}…`,.6);try{const ee=await ja(G.id);if(ee!==null){let oe=_w(Z,E,ee,[[G.nameBox.x,G.nameBox.y],[G.nameBox.x+G.nameBox.width,G.nameBox.y],[G.nameBox.x+G.nameBox.width,G.nameBox.y+G.nameBox.height],[G.nameBox.x,G.nameBox.y+G.nameBox.height]]);if(oe===null){const le=await X(),Ee=xw(le,G.nameBox.x+G.nameBox.width/2,G.nameBox.y+G.nameBox.height/2);Ee!==null&&(oe=cf(Z,E,ee,Ee))}if(oe!==null){let le=oe.built,Ee=!1;const Ie=await Af();if(Ie!==null)try{const ke=df(Z,E,ee,oe.footprint);if(ke!==null){const et=Ua(ke),qe=await Ie.run({[Ie.inputNames[0]]:new Ue("float32",et,[1,3,Tt,Tt])});le=pf(qe[Ie.outputNames[0]].data).built,Ee=!0}}catch{}const Re=oe.footprint.map(ke=>ke[0]),Ke=oe.footprint.map(ke=>ke[1]),ze=Math.max(0,Math.round(Math.min(...Re))),Xe=Math.max(0,Math.round(Math.min(...Ke)));Q={built:le,boundingBox:{x:ze,y:Xe,width:Math.min(E.width,Math.round(Math.max(...Re)))-ze,height:Math.min(E.height,Math.round(Math.max(...Ke)))-Xe},tuckRegion:Da(oe.footprint,oe.overflow),edgeScores:oe.edgeScores,builtByTuck:Ee}}}}catch(ee){console.warn(`[wonders-reg] ${G.id} failed:`,ee)}}if(Q!==null){const ee=Q.tuckRegion??Q.boundingBox;re.push({x0:ee.x,y0:ee.y,x1:ee.x+ee.width,y1:ee.y+ee.height})}else{const ee=Math.max(8,G.nameBox.height),oe=Math.round(G.nameBox.width*.15);re.push({x0:G.nameBox.x-oe,y0:G.nameBox.y-ee*2.5,x1:G.nameBox.x+G.nameBox.width+oe,y1:G.nameBox.y+G.nameBox.height+ee*2.5})}if(!l.some(ee=>ee.id===G.id)){const ee=(Q==null?void 0:Q.builtByTuck)===!0,oe=ee?Q.built:!1,le=!ee&&(Q==null?void 0:Q.built)===!0,Ee={id:G.id,name:G.name,builtWithCardUnderneath:oe,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:G.confidence,...le?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};l.push(Ee),H.push({obj:Ee,edgeScores:Q&&!Q.builtByTuck?Q.edgeScores:null,zone:re[re.length-1]})}}if(!q){const G=Tw(H.map(Q=>({built:Q.obj.builtWithCardUnderneath,edgeScores:Q.edgeScores,zone:Q.zone})),v.map(Q=>[Q.box[0]+Q.box[2]/2,Q.box[1]+Q.box[3]/2]));for(const Q of G){const ee=H[Q];ee.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${ee.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(v.length>0){const Q=new Set(G);for(let ee=0;ee<H.length;ee++){const oe=H[ee];if(Q.has(ee)||!oe.obj.builtWithCardUnderneath)continue;const le=oe.obj.tuckRegion;if(le===void 0)continue;if(!v.some(Ie=>{const Re=Ie.box[0]+Ie.box[2]/2,Ke=Ie.box[1]+Ie.box[3]/2;return Re>=le.x&&Re<=le.x+le.width&&Ke>=le.y&&Ke<=le.y+le.height})){const Ie=oe.obj;Ie.builtWithCardUnderneath=!1,Ie.suspect=!0,Ie.suspectReason="built-unconfirmed"}}}}if(ce.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${k}: the wonder-name read ran out of its time budget on this device — ${ce.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Z!==null&&ce.wonders.length>0&&Date.now()<N)try{const G=await Cf(),Q=(G==null?void 0:G.catalog.filter(oe=>oe.kind==="wonder").map(oe=>oe.id))??[],ee=new Map;for(const oe of Q)if(!l.some(le=>le.id===oe)){const le=await ja(oe);le!==null&&ee.set(oe,le)}if(ee.size>0){r(`${k}: searching occluded wonders…`,.7);const oe=ww(Z,E,ee,N);for(const le of oe){const Ee=le.footprint.map(qe=>qe[0]),Ie=le.footprint.map(qe=>qe[1]),Re=Math.max(0,Math.round(Math.min(...Ee))),Ke=Math.max(0,Math.round(Math.min(...Ie))),ze={x:Re,y:Ke,width:Math.min(E.width,Math.round(Math.max(...Ee)))-Re,height:Math.min(E.height,Math.round(Math.max(...Ie)))-Ke};if(l.some(qe=>{const Qe=qe.boundingBox,Be=Math.max(0,Math.min(Qe.x+Qe.width,ze.x+ze.width)-Math.max(Qe.x,ze.x)),Ye=Math.max(0,Math.min(Qe.y+Qe.height,ze.y+ze.height)-Math.max(Qe.y,ze.y)),tt=Be*Ye,dt=Qe.width*Qe.height+ze.width*ze.height-tt;return dt>0&&tt/dt>yw}))continue;const ke=G==null?void 0:G.catalog.find(qe=>qe.id===le.id);l.push({id:le.id,name:(ke==null?void 0:ke.nameFr)??(ke==null?void 0:ke.name)??le.id,builtWithCardUnderneath:le.built,boundingBox:ze,...le.tuckRegion?{tuckRegion:le.tuckRegion}:{},confidence:Math.round(le.confidence*1e4)/1e4});const et=le.tuckRegion??ze;re.push({x0:et.x,y0:et.y,x1:et.x+et.width,y1:et.y+et.height})}}}catch(G){console.warn("[wonders-reg] discovery failed:",G)}const ne=[];for(const G of v){const Q=G.box[0]+G.box[2]/2,ee=G.box[1]+G.box[3]/2;if(re.some(le=>Q>=le.x0&&Q<=le.x1&&ee>=le.y0&&ee<=le.y1)){y+=1;continue}ne.push(G),a[G.family]=(a[G.family]??0)+1,g+=1}const ye=Q0(ne),De=new Set(ye.map(G=>G.box.join(",")));for(const G of ey(ne))De.has(G.box.join(","))||ye.push(G);for(const G of ye)c.push(G);if(ne.some(G=>G.family==="guild")){const G=await vb();if(G!==null){r(`${k}: identifying guilds…`,.75);for(const Q of ne)if(Q.family==="guild")try{const[ee,oe,le,Ee]=Q.box,Ie=Ir(E,ee,oe,le,Ee),Re=B_(Ie),Ke={[G.inputNames[0]]:new Ue("float32",Re,[1,3,$n,$n])},Xe=(await G.run(Ke))[G.outputNames[0]].data,{id:ke,prob:et}=D_(Xe);ke!==""&&!p.some(qe=>qe.id===ke)&&p.push({id:ke,boundingBox:{x:ee,y:oe,width:le,height:Ee},confidence:Math.round(et*1e4)/1e4})}catch(ee){console.warn("[guild-cls] failed:",ee)}}else if(Date.now()<N)try{const Q=Z??await Va();if(Q!==null){const ee=await cb();if(ee.size>0){r(`${k}: identifying guilds…`,.75);const oe=await pb();for(const le of c_(Q,E,ee,N,oe))p.some(Ee=>Ee.id===le.id)||p.push(le)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${k}: laurels…`,.8);const Ge=await wb(),rt=[];for(const G of[0,1,2,3]){const Q=G===0?E:Gt(E,G),ee=await qt("laurel",Q);for(const[oe,le,Ee,Ie]of Ta(ee.rows,ee.params,St.laurel.conf)){const Re=Mf({x:oe,y:le,width:Ee-oe,height:Ie-le},G,E.width,E.height),Ke=Re.x+Re.width/2,ze=Re.y+Re.height/2,Xe=.6*Math.max(Re.width,Re.height);rt.some(([et,qe,Qe,Be])=>{const Ye=(et+Qe)/2,tt=(qe+Be)/2;return(Ke-Ye)**2+(ze-tt)**2<Xe*Xe})||rt.push([Re.x,Re.y,Re.x+Re.width,Re.y+Re.height])}}const Te=await Sb(),pe=await Tb();for(const[G,Q,ee,oe]of rt){const le=Math.trunc((G+ee)/2),Ee=Math.trunc((Q+oe)/2);if([...F,...B].some(Be=>(le-Be.cx)**2+(Ee-Be.cy)**2<=Be.r*Be.r))continue;if(pe!==null){const Be=await Ib(E,[Math.trunc(G),Math.trunc(Q),Math.trunc(ee),Math.trunc(oe)],pe);if(Be!==null&&Be>=Z_)continue}const Re=Math.max(6,Math.trunc(Math.max(ee-G,oe-Q)*by)),Ke=_b(E,le,Ee,Re);let ze=null,Xe=0;const ke=new Map;for(const Be of[0,1,2,3]){const Ye=Be===0?Ke:Gt(Ke,Be),[tt,dt]=Oy(Ye,Ge);tt!==null&&(ke.set(tt,Math.max(ke.get(tt)??0,dt)),dt>Xe&&(ze=tt,Xe=dt))}ze!==null&&Xe<lb&&(ze=null);const et=Xe;if(Te!==null){const Be=Ir(E,Math.trunc(G),Math.trunc(Q),Math.trunc(ee-G),Math.trunc(oe-Q));let Ye=null,tt=0;for(const dt of[0,1,2,3]){const kr=dt===0?Be:Gt(Be,dt),Hn=K_(kr),jn=await Te.run({[Te.inputNames[0]]:new Ue("float32",Hn,[1,3,vn,vn])}),{value:ss,prob:Er}=X_(jn[Te.outputNames[0]].data);Er>tt&&(Ye=ss,tt=Er)}Ye!==null&&tt>=j_&&(ze=Ye,Xe=tt)}const qe=ze!==null&&[...ke.entries()].some(([Be,Ye])=>Be!==ze&&Ye>=et-.1),Qe=re.some(Be=>le>=Be.x0&&le<=Be.x1&&Ee>=Be.y0&&Ee<=Be.y1);s.push({value:ze,valueRead:ze!==null,center:[Math.round((G+ee)/2),Math.round((Q+oe)/2)],boundingBox:{x:Math.trunc(G),y:Math.trunc(Q),width:Math.trunc(ee-G),height:Math.trunc(oe-Q)},confidence:Math.round(Xe*1e4)/1e4,excluded:Qe,photoIndex:b-1,...qe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}y>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${y} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):g>0&&l.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const $=a.guild??0;$!==p.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${$} purple banner(s) counted but ${p.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+p.map(S=>S.id).join(", ")+" — confirm in the review."});const x=l.filter(S=>S.boundingBox.width===0);x.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${x.map(S=>S.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):l.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${l.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),m>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${m} token disc(s) found but not identified — pick them in the review below.`}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+u.map(S=>S.id).join(", ")+" — confirm in the review."}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${f} from ${o.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const T=s.filter(S=>S.valueRead);return{...qb(),wonders:l,guilds:zb(p,l),progressTokens:u,laurels:s,cardVictoryPoints:{value:T.reduce((S,k)=>S+(k.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-T.length,complete:s.length===T.length},cardCounts:{byFamily:a,source:g>0?"yolo":"none",tuckedExcluded:y,...c.length>0?{suspects:c}:{}},coins:{total:f,confidence:o.length>0?.5:0,source:o.length>0?"local-colour":"none",coins:o}}}const bt=1280,Hb=.3,is=9;let as=null;function jb(){return as===null&&(as=(async()=>{try{return(await fetch(`${Ne}pawn_ends.onnx`,{method:"HEAD"})).ok?await it.create(`${Ne}pawn_ends.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),as}function Kb(e){const t=bt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const o=new OffscreenCanvas(bt,bt).getContext("2d",{willReadFrequently:!0});o.fillStyle="rgb(114,114,114)",o.fillRect(0,0,bt,bt),o.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=o.getImageData(0,0,bt,bt),l=bt*bt,p=new Float32Array(3*l);for(let c=0;c<l;c+=1)p[c]=u[c*4]/255,p[l+c]=u[c*4+1]/255,p[2*l+c]=u[c*4+2]/255;return{tensor:p,r:t}}async function Xb(e,t){const{tensor:n,r}=Kb(t),a=(await e.run({[e.inputNames[0]]:new Ue("float32",n,[1,3,bt,bt])}))[e.outputNames[0]].data,s=new Map;for(let o=0;o+5<a.length;o+=6){const u=a[o+4];if(u<Hb)continue;const l=Math.round(a[o+5]),p=s.get(l);if(p===void 0||u>p.conf){const c=(a[o]+a[o+2])/2/r,f=(a[o+1]+a[o+3])/2/r;s.set(l,{conf:u,cx:c,cy:f})}}return s}async function Yb(e,t){let n=null;for(let g=0;g<4;g+=1){const y=g===0?t:Gt(t,g),b=await Xb(e,y);if(b.has(0)&&b.has(1)&&b.has(2)){const $=b.get(0).conf+b.get(1).conf+b.get(2).conf;(n===null||$>n.score)&&(n={score:$,det:b})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),a=n.det.get(2),s=a.cx-i.cx,o=a.cy-i.cy,u=(i.cx+a.cx)/2,l=(i.cy+a.cy)/2,p=s*s+o*o;if(p<=0)return null;const c=((r.cx-u)*s+(r.cy-l)*o)/p*(2*is),f=Math.min(is,Math.max(-is,Math.round(c))),m=Math.min(r.conf,i.conf,a.conf);return{position:f,confidence:Math.round(m*1e4)/1e4}}async function Zb(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids and coin totals are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length;let a=0;const s=(l,p=0)=>{t(l,i>0?Math.min(.99,(a+p)/i):void 0)},o=()=>{a+=1};for(const l of["left","right"]){const p=e[l];p.length>0&&(r[l]=await Vb(p,l,n,s,o))}let u={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const l=await rs(e.board),p=await jb();if(p!==null){const c=await Yb(p,l);c!==null&&(u={conflictPawnPosition:c.position,found:!0,confidence:c.confidence})}}catch(l){console.warn("[pawn] on-device read failed:",l)}u.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}return{imageId:e.imageId,players:r,militaryTrack:u,outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await Wb(e.data.file):await Zb(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
