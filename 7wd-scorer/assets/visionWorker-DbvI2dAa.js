var F3=Object.defineProperty;var G3=(Kt,Yt,Vn)=>Yt in Kt?F3(Kt,Yt,{enumerable:!0,configurable:!0,writable:!0,value:Vn}):Kt[Yt]=Vn;var uy=(Kt,Yt,Vn)=>G3(Kt,typeof Yt!="symbol"?Yt+"":Yt,Vn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Kt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Vn=Object.getOwnPropertyNames,dy=Object.prototype.hasOwnProperty,hy=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),te=(e,t)=>()=>(e&&(t=e(e=0)),t),Hn=(e,t)=>{for(var n in t)Kt(e,n,{get:t[n],enumerable:!0})},py=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Vn(t))!dy.call(e,i)&&i!==n&&Kt(e,i,{get:()=>t[i],enumerable:!(r=Yt(t,i))||r.enumerable});return e},hr=e=>py(Kt({},"__esModule",{value:!0}),e),pr,un,jn,su,uu,lu=te(()=>{pr=new Map,un=[],jn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=pr.get(e);if(r===void 0)pr.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=un.indexOf(e);i!==-1&&un.splice(i,1);for(let o=0;o<un.length;o++)if(pr.get(un[o]).priority<=n){un.splice(o,0,e);return}un.push(e)}return}throw new TypeError("not a valid backend")},su=async e=>{let t=pr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},uu=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?un:n,i,o=[],a=new Set;for(let u of r){let l=await su(u);typeof l=="string"?o.push({name:u,err:l}):(i||(i=l),i===l&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of o)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),fy=te(()=>{lu()}),cu,my=te(()=>{cu="1.27.0"}),Qi,Je,du=te(()=>{my(),Qi="warning",Je={wasm:{},webgl:{},webgpu:{},versions:{common:cu},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Qi=e}},get logLevel(){return Qi}},Object.defineProperty(Je,"logLevel",{enumerable:!0})}),Le,gy=te(()=>{du(),Le=Je}),hu,pu,yy=te(()=>{hu=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let d=o*i,c=0,p=d,f=d*2,m=-1;a==="RGBA"?(c=0,p=d,f=d*2,m=d*3):a==="RGB"?(c=0,p=d,f=d*2):a==="RBG"&&(c=0,f=d,p=d*2);for(let y=0;y<o;y++)for(let w=0;w<i;w++){let b=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],S=(e.data[f++]-l[2])*u[2],M=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+S+","+M+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},pu=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,o,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],a=e.dims[3]):(i=e.dims[3],o=e.dims[2],a=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=o*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=c,S=c*2,M=-1;s==="RGBA"?(b=0,x=c,S=c*2,M=c*3):s==="RGB"?(b=0,x=c,S=c*2):s==="RBG"&&(b=0,S=c,x=c*2),r=n.createImageData(i,o);for(let I=0;I<o*i;f+=p,m+=p,y+=p,w+=p,I++)r.data[f]=(e.data[b++]-d[0])*l[0],r.data[m]=(e.data[x++]-d[1])*l[1],r.data[y]=(e.data[S++]-d[2])*l[2],r.data[w]=M===-1?255:(e.data[M++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),qr,fu,mu,gu,yu,wu,wy=te(()=>{Ji(),qr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},o,a;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,S=-1;s==="RGB"&&(c=3,p=0,f=1,m=2,y=-1),u==="RGBA"?S=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let M=0;M<l;M++,p+=c,m+=c,f+=c,y+=c)d[w++]=(e[p]+a[0])/o[0],d[b++]=(e[f]+a[1])/o[1],d[x++]=(e[m]+a[2])/o[2],S!==-1&&y!==-1&&(d[S++]=(e[y]+a[3])/o[3]);return u==="RGBA"?new gt("float32",d,[1,4,n,r]):new gt("float32",d,[1,3,n,r])},fu=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",a,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=u();d.width=e.width,d.height=e.height;let c=l(d);if(c!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;c.drawImage(e,0,0),a=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let d,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,c=t.resizedWidth):(d=e.height,c=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=d,s.width=c,t!==void 0){let p=u();p.width=c,p.height=d;let f=l(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,c,d).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let c=l(d);if(c!=null){let p=e.height,f=e.width;return c.drawImage(e,0,0,f,p),a=c.getImageData(0,0,f,p).data,s.height=p,s.width=f,qr(a,s)}else throw new Error("Can not access image data")}else{if(o)return new Promise((d,c)=>{let p=u(),f=l(p);if(!e||!f)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,d(qr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return qr(a,s);throw new Error("Input data provided is not supported - aborted tensor creation")},mu=(e,t)=>{let{width:n,height:r,download:i,dispose:o}=t,a=[1,r,n,4];return new gt({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:o})},gu=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new gt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:o})},yu=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new gt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:o})},wu=(e,t,n)=>new gt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),vn,fr,Zi,bu,by=te(()=>{vn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),fr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Zi=!1,bu=()=>{if(!Zi){Zi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(vn.set("int64",BigInt64Array),fr.set(BigInt64Array,"int64")),t&&(vn.set("uint64",BigUint64Array),fr.set(BigUint64Array,"uint64")),r?(vn.set("float16",n),fr.set(n,"float16")):vn.set("float16",Uint16Array)}}}),_u,xu,_y=te(()=>{Ji(),_u=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},xu=(e,t)=>{switch(e.location){case"cpu":return new gt(e.type,e.data,t);case"cpu-pinned":return new gt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new gt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new gt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new gt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),gt,Ji=te(()=>{yy(),wy(),by(),_y(),gt=class{constructor(e,t,n){bu();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=vn.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=vn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=fr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(s===void 0)s=[a.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=a,this.dataLocation="cpu"}let o=_u(i);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=o}static async fromImage(e,t){return fu(e,t)}static fromTexture(e,t){return mu(e,t)}static fromGpuBuffer(e,t){return gu(e,t)}static fromMLTensor(e,t){return yu(e,t)}static fromPinnedBuffer(e,t,n){return wu(e,t,n)}toDataURL(e){return hu(this,e)}toImageData(e){return pu(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return xu(this,e)}}}),De,$u=te(()=>{Ji(),De=gt}),Vr,eo,Ft,Tt,Mn,Sn,vu=te(()=>{du(),Vr=(e,t)=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.timeStamp(`${e}::ORT::${t}`)},eo=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let o=0;o<n.length;o++){if(r&&!n[o].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Vr("CPU",a);return}n[o].includes("TRACE_FUNC")&&(r=!0)}},Ft=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||eo("BEGIN",e)},Tt=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||eo("END",e)},Mn=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.time(`ORT::${e}`)},Sn=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.timeEnd(`ORT::${e}`)}}),Mu,xy=te(()=>{lu(),$u(),vu(),Mu=class ly{constructor(t){this.handler=t}async run(t,n,r){Ft(),Mn("InferenceSession.run");let i={},o={};if(typeof t!="object"||t===null||t instanceof De||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof De)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(d.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof De)&&(l=!0,a=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(a)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,o),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let d=s[l];d instanceof De?u[l]=d:u[l]=new De(d.type,d.data,d.dims)}return Sn("InferenceSession.run"),Tt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ft(),Mn("InferenceSession.create");let o,a={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-c}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(d,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await uu(a),l=await s.createInferenceSessionHandler(o,u);return Sn("InferenceSession.create"),Tt(),new ly(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Kn,$y=te(()=>{xy(),Kn=Mu}),vy=te(()=>{}),My=te(()=>{}),Sy=te(()=>{}),Iy=te(()=>{}),Ey={};Hn(Ey,{InferenceSession:()=>Kn,TRACE:()=>Vr,TRACE_EVENT_BEGIN:()=>Mn,TRACE_EVENT_END:()=>Sn,TRACE_FUNC_BEGIN:()=>Ft,TRACE_FUNC_END:()=>Tt,Tensor:()=>De,env:()=>Le,registerBackend:()=>jn});var _t=te(()=>{fy(),gy(),$y(),$u(),vy(),My(),vu(),Sy(),Iy()}),to=te(()=>{}),Su={};Hn(Su,{default:()=>Iu});var no,ro,Iu,Ty=te(()=>{var e;sm(),In(),lo(),no="ort-wasm-proxy-worker",ro=((e=globalThis.self)==null?void 0:e.name)===no,ro&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":po(r.wasm).then(()=>{Ma(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:o}=r;Sa(o,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,o=ci(i);postMessage({type:n,out:o});break}case"create":{let{model:i,options:o}=r;Ea(i,o).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":Ta(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:o,inputs:a,outputIndices:s,options:u}=r;Ca(i,o,a,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},Ra([...a,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":Aa(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Iu=ro?null:t=>new Worker(t??yt,{type:"module",name:no})}),Eu={};Hn(Eu,{default:()=>ku});async function Tu(e={}){var ay,sy;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((ay=self.name)==null?void 0:ay.startsWith("em-pthread"));t.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(t.Xc||(t.Xc=new Map)).set(h,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=h=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},E=await h(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let A=_.errors;if(0<A.length){let U=await Promise.all(A);if(U=U.filter(K=>K),0<U.length)throw Error(U.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(h,g)=>{if(h==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,E,A,U)=>$.registerBuffer(_,E,A,U),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,E,A)=>$.createDownloader(_,E,A),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,E)=>{$.upload(_,E)}}else if(h==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,E)=>$.createMLTensorDownloader(_,E),t.webnnRegisterMLTensor=(_,E,A,U)=>$.registerMLTensor(_,E,A,U),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,E,A,U,K,ie)=>$.registerMLConstant(_,E,A,U,K,t.Xc,ie),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let a=()=>{let h=g=>(...$)=>{let _=Ht;return $=g(...$),Ht!=_?new Promise((E,A)=>{Ks={resolve:E,reject:A}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=h(t[g])})(),o!==void 0&&(t._OrtRun=o(t._OrtRun),t._OrtRunWithBinding=o(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var s,u,l=(h,g)=>{throw g},d=self.location.href,c="";if(n||r){try{c=new URL(".",d).href}catch{}r&&(u=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async h=>{if(T(h))return new Promise(($,_)=>{var E=new XMLHttpRequest;E.open("GET",h,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?$(E.response):_(E.status)},E.onerror=_,E.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),S=console.error.bind(console),M=x,I=S,k=!1,T=h=>h.startsWith("file://");function v(){mt.buffer!=N.buffer&&z()}if(i){let h=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let E=[];self.onmessage=A=>E.push(A),b=()=>{postMessage({Sc:"loaded"});for(let A of E)h(A);self.onmessage=h};for(let A of $.xd)t[A]&&!t[A].proxy||(t[A]=(...U)=>{postMessage({Sc:"callHandler",wd:A,args:U})},A=="print"&&(M=t[A]),A=="printErr"&&(I=t[A]));mt=$.Od,z(),f=$.Pd,ne(),Yi()}else if(_==="run"){(function(E){var A=(v(),V)[E+52>>>2>>>0];E=(v(),V)[E+56>>>2>>>0],g0(A,A-E),Me(A)})($.Rc),Js($.Rc,0,0,1,0,0),rn(),Vs($.Rc),C||(c0(),C=!0);try{yn($.Md,$.bd)}catch(E){if(E!="unwind")throw E}}else $.target!=="setimmediate"&&(_==="checkMailbox"?C&&Gi():_&&(I(`worker: received unknown command ${_}`),I($)))}catch(E){throw d0(),E}};var C=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var N,B,q,G,O,V,Q,J,he,W,P,R=!1;function z(){var h=mt.buffer;t.HEAP8=N=new Int8Array(h),q=new Int16Array(h),t.HEAPU8=B=new Uint8Array(h),G=new Uint16Array(h),t.HEAP32=O=new Int32Array(h),t.HEAPU32=V=new Uint32Array(h),Q=new Float32Array(h),J=new Float64Array(h),he=new BigInt64Array(h),W=new BigUint64Array(h)}function D(){R=!0,i?b():sn.sb()}function F(h){throw I(h="Aborted("+h+")"),k=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),w==null||w(h),h}function Y(){return{a:{ma:n3,gb:t3,g:Br,J:Ni,f:Bi,o:cr,h:dr,ha:Lg,b:Ls,T:Pi,Ha:Dr,n:Fs,$:Z,Xa:re,Da:se,Fa:le,Ya:Te,Va:Ce,Oa:ce,Ua:oe,ka:ae,Ea:me,Ba:be,Wa:Pe,Ca:Fe,bb:qe,ea:Gs,wa:Ui,ua:j$,da:Y$,O:X$,H:Q$,va:Z$,_:ov,xa:av,Ra:sv,za:lv,Ia:cv,sa:dv,fa:hv,Qa:Vs,_a:pv,R:yv,r:$v,c:Ws,hb:vv,y:Mv,M:Sv,D:Iv,l:Ev,s:jg,ib:Tv,I:kv,S:Cv,j:Av,u:Rv,q:Ov,k:Nv,La:zv,Ma:Bv,Na:Pv,Ja:Qg,Ka:Zg,ta:Jg,db:Uv,ab:Fv,v:Gv,aa:Wv,ga:qv,$a:Lv,W:Vv,Za:Hv,Aa:jv,F:Dv,U:Kv,la:ji,ya:Xv,fb:Yv,eb:Qv,Sa:r0,Ta:i0,Ga:Qe,V:o0,ja:a0,Pa:s0,ia:u0,kb:D3,na:O3,lb:P3,oa:R3,G:v3,e:a3,t:i3,w:r3,B:g3,mb:k3,K:_3,x:l3,pa:C3,Y:N3,ba:T3,nb:E3,ob:I3,P:y3,qa:S3,pb:M3,N:x3,Z:A3,d:o3,A:u3,m:s3,jb:U3,p:d3,z:h3,C:c3,E:p3,L:w3,qb:$3,Q:z3,ca:b3,X:B3,rb:m3,ra:f3,i:Jv,a:mt,cb:ut}}}async function ne(){function h(_,E){var A=sn=_.exports;_={};for(let[U,K]of Object.entries(A))typeof K=="function"?(A=fv(K),_[U]=A):_[U]=K;return sn=_,sn=(function(){var U=sn,K=ue=>ve=>ue(ve)>>>0,ie=ue=>()=>ue()>>>0;return(U=Object.assign({},U)).tb=K(U.tb),U.Xb=ie(U.Xb),U.Zb=K(U.Zb),U.lc=K(U.lc),U.mc=ie(U.mc),U.qc=K(U.qc),U})(),Ke.push(sn._b),l0=(_=sn).tb,c0=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Ki=_.Xb,jt=t._free=_.Yb,Fr=t._malloc=_.Zb,Js=_.ac,d0=_.bc,h0=_.cc,p0=_.dc,eu=_.ec,f0=_.fc,m0=_.gc,Ie=_.hc,Gr=_.ic,g0=_.jc,Me=_.kc,tu=_.lc,Se=_.mc,y0=_.nc,nu=_.oc,w0=_.pc,b0=_.qc,_0=_.rc,ru=_.sc,x0=_.tc,$0=_.uc,v0=_.vc,M0=_.wc,S0=_.xc,I0=_.yc,E0=_.zc,T0=_.Ac,k0=_.Bc,C0=_.Cc,A0=_.Dc,R0=_.Ec,O0=_.Fc,N0=_.Gc,z0=_.Hc,B0=_.Ic,P0=_.Jc,D0=_.Kc,U0=_.Lc,L0=_.Mc,F0=_.Nc,G0=_.Pc,W0=_.Qc,q0=_.$c,V0=_.ad,H0=_.fd,j0=_.jd,K0=_.kd,Y0=_.ld,X0=_.md,Q0=_.nd,Z0=_.od,J0=_.pd,ey=_.qd,ty=_.vd,ny=_.Td,ry=_.Ud,iy=_.Vd,oy=_.Wd,f=E,sn}var g,$=Y();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(E,A)=>{_(h(E,A))})}):i?h(new WebAssembly.Instance(f,Y()),f):(P??(P=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var E=P;if(!p&&!T(E))try{var A=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(A,_)}catch(U){I(`wasm streaming compile failed: ${U}`),I("falling back to ArrayBuffer instantiation")}return(async function(U,K){try{var ie=await(async function(ue){if(!p)try{var ve=await s(ue);return new Uint8Array(ve)}catch{}if(ue==P&&p)ue=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";ue=u(ue)}return ue})(U);return await WebAssembly.instantiate(ie,K)}catch(ue){I(`failed to asynchronously prepare wasm: ${ue}`),F(ue)}})(E,_)})($),h(g.instance,g.module))}class ee{constructor(g){uy(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var fe=h=>{h.terminate(),h.onmessage=()=>{}},xe=[],ke=0,Ue=null,st=h=>{lt.length==0&&(on(),Un(lt[0]));var g=lt.pop();if(!g)return 6;ft.push(g),Dt[h.Rc]=g,g.Rc=h.Rc;var $={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage($,h.rd),0},Be=0,ye=(h,g,...$)=>{var _,E=16*$.length,A=Se(),U=tu(E),K=U>>>3;for(_ of $)typeof _=="bigint"?((v(),he)[K++>>>0]=1n,(v(),he)[K++>>>0]=_):((v(),he)[K++>>>0]=0n,(v(),J)[K++>>>0]=_);return h=h0(h,0,E,U,g),Me(A),h};function ut(h){if(i)return ye(0,1,h);if(m=h,!(0<Be)){for(var g of ft)fe(g);for(g of lt)fe(g);lt=[],ft=[],Dt={},k=!0}l(0,new ee(h))}function nn(h){if(i)return ye(1,0,h);Qe(h)}var Qe=h=>{if(m=h,i)throw nn(h),"unwind";ut(h)},lt=[],ft=[],Ke=[],Dt={},zr=h=>{var g=h.Rc;delete Dt[g],lt.push(h),ft.splice(ft.indexOf(h),1),h.Rc=0,p0(g)};function rn(){Ke.forEach(h=>h())}var Un=h=>new Promise(g=>{h.onmessage=E=>{var A=E.data;if(E=A.Sc,A.Zc&&A.Zc!=Ki()){var U=Dt[A.Zc];U?U.postMessage(A,A.rd):I(`Internal error! Worker sent a message "${E}" to target pthread ${A.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?Gi():E==="spawnThread"?st(A):E==="cleanupThread"?Fi(()=>{zr(Dt[A.Nd])}):E==="loaded"?(h.loaded=!0,g(h)):A.target==="setimmediate"?h.postMessage(A):E==="uncaughtException"?h.onerror(A.error):E==="callHandler"?t[A.wd](...A.args):E&&I(`worker sent an unknown command ${E}`)},h.onerror=E=>{throw I(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);h.postMessage({Sc:"load",xd:_,Od:mt,Pd:f})});function on(){var h=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});lt.push(h)}var mt,yn=(h,g)=>{Be=0,h=ru(h,g),0<Be?m=h:eu(h)},wn=[],Ln=0;function Br(h){var g=new It(h>>>=0);return(v(),N)[g.Tc+12>>>0]==0&&(Pr(g,!0),Ln--),zi(g,!1),wn.push(g),b0(h)}var an=0,Ni=()=>{Ie(0,0);var h=wn.pop();y0(h.cd),an=0};function Pr(h,g){g=g?1:0,(v(),N)[h.Tc+12>>>0]=g}function zi(h,g){g=g?1:0,(v(),N)[h.Tc+13>>>0]=g}class It{constructor(g){this.cd=g,this.Tc=g-24}}var Fn=h=>{var g=an;if(!g)return Gr(0),0;var $=new It(g);(v(),V)[$.Tc+16>>>2>>>0]=g;var _=(v(),V)[$.Tc+4>>>2>>>0];if(!_)return Gr(0),g;for(var E of h){if(E===0||E===_)break;if(w0(E,_,$.Tc+16))return Gr(E),g}return Gr(_),g};function Bi(){return Fn([])}function cr(h){return Fn([h>>>0])}function dr(h,g,$,_){return Fn([h>>>0,g>>>0,$>>>0,_>>>0])}var Lg=()=>{var h=wn.pop();h||F("no exception to throw");var g=h.cd;throw(v(),N)[h.Tc+13>>>0]==0&&(wn.push(h),zi(h,!0),Pr(h,!1),Ln++),nu(g),an=g};function Ls(h,g,$){var _=new It(h>>>=0);throw g>>>=0,$>>>=0,(v(),V)[_.Tc+16>>>2>>>0]=0,(v(),V)[_.Tc+4>>>2>>>0]=g,(v(),V)[_.Tc+8>>>2>>>0]=$,nu(h),Ln++,an=h}var Pi=()=>Ln;function bn(h,g,$,_){return i?ye(2,1,h,g,$,_):Dr(h,g,$,_)}function Dr(h,g,$,_){if(h>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?bn(h,g,$,_):(h={Ld:$,Rc:h,bd:_,rd:E},i?(h.Sc="spawnThread",postMessage(h,E),0):st(h))}function Fs(h){throw an||(an=h>>>0),an}var Gn=globalThis.TextDecoder&&new TextDecoder,Ur=(h,g,$,_)=>{if($=g+$,_)return $;for(;h[g]&&!(g>=$);)++g;return g},L=(h,g=0,$,_)=>{if(16<($=Ur(h,g>>>=0,$,_))-g&&h.buffer&&Gn)return Gn.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,$):h.slice(g,$));for(_="";g<$;){var E=h[g++];if(128&E){var A=63&h[g++];if((224&E)==192)_+=String.fromCharCode((31&E)<<6|A);else{var U=63&h[g++];65536>(E=(240&E)==224?(15&E)<<12|A<<6|U:(7&E)<<18|A<<12|U<<6|63&h[g++])?_+=String.fromCharCode(E):(E-=65536,_+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else _+=String.fromCharCode(E)}return _},j=(h,g,$)=>(h>>>=0)?L((v(),B),h,g,$):"";function Z(h,g,$){return i?ye(3,1,h,g,$):0}function re(h,g){if(i)return ye(4,1,h,g)}function se(h,g){if(i)return ye(5,1,h,g)}function le(h,g,$){if(i)return ye(6,1,h,g,$)}function Te(h,g,$){return i?ye(7,1,h,g,$):0}function Ce(h,g){if(i)return ye(8,1,h,g)}function ce(h,g,$){if(i)return ye(9,1,h,g,$)}function oe(h,g,$,_){if(i)return ye(10,1,h,g,$,_)}function ae(h,g,$,_){if(i)return ye(11,1,h,g,$,_)}function me(h,g,$,_){if(i)return ye(12,1,h,g,$,_)}function be(h){if(i)return ye(13,1,h)}function Pe(h,g){if(i)return ye(14,1,h,g)}function Fe(h,g,$){if(i)return ye(15,1,h,g,$)}var qe=()=>F(""),Oe=h=>{h>>>=0;for(var g="";;){var $=(v(),B)[h++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Ze={},nt={},ct=class extends Error{constructor(h){super(h),this.name="BindingError"}};function Ut(h,g,$={}){return(function(_,E,A={}){var U=E.name;if(!_)throw new ct(`type "${U}" must have a positive integer typeid pointer`);if(nt.hasOwnProperty(_)){if(A.yd)return;throw new ct(`Cannot register type '${U}' twice`)}nt[_]=E,Ze.hasOwnProperty(_)&&(E=Ze[_],delete Ze[_],E.forEach(K=>K()))})(h,g,$)}var Di=(h,g,$)=>{switch(g){case 1:return $?_=>(v(),N)[_>>>0]:_=>(v(),B)[_>>>0];case 2:return $?_=>(v(),q)[_>>>1>>>0]:_=>(v(),G)[_>>>1>>>0];case 4:return $?_=>(v(),O)[_>>>2>>>0]:_=>(v(),V)[_>>>2>>>0];case 8:return $?_=>(v(),he)[_>>>3>>>0]:_=>(v(),W)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function Gs(h,g,$,_,E){h>>>=0,$>>>=0,g=Oe(g>>>0);let A=U=>U;if(_=_===0n){let U=8*$;A=K=>BigInt.asUintN(U,K),E=A(E)}Ut(h,{name:g,Oc:A,Vc:(U,K)=>(typeof K=="number"&&(K=BigInt(K)),K),Uc:Di(g,$,!_),Wc:null})}function Ui(h,g,$,_){Ut(h>>>=0,{name:g=Oe(g>>>0),Oc:function(E){return!!E},Vc:function(E,A){return A?$:_},Uc:function(E){return this.Oc((v(),B)[E>>>0])},Wc:null})}var Fg=[],Wn=[0,1,,1,null,1,!0,1,!1,1];function Ws(h){9<(h>>>=0)&&--Wn[h+1]===0&&(Wn[h]=void 0,Fg.push(h))}var Et=h=>{if(!h)throw new ct(`Cannot use deleted val. handle = ${h}`);return Wn[h]},Lt=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Fg.pop()||Wn.length;return Wn[g]=h,Wn[g+1]=1,g}};function qs(h){return this.Oc((v(),V)[h>>>2>>>0])}var H$={name:"emscripten::val",Oc:h=>{var g=Et(h);return Ws(h),g},Vc:(h,g)=>Lt(g),Uc:qs,Wc:null};function j$(h){return Ut(h>>>0,H$)}var K$=(h,g)=>{switch(g){case 4:return function($){return this.Oc((v(),Q)[$>>>2>>>0])};case 8:return function($){return this.Oc((v(),J)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function Y$(h,g,$){$>>>=0,Ut(h>>>=0,{name:g=Oe(g>>>0),Oc:_=>_,Vc:(_,E)=>E,Uc:K$(g,$),Wc:null})}function X$(h,g,$,_,E){h>>>=0,$>>>=0,g=Oe(g>>>0);let A=K=>K;if(_===0){var U=32-8*$;A=K=>K<<U>>>U,E=A(E)}Ut(h,{name:g,Oc:A,Vc:(K,ie)=>ie,Uc:Di(g,$,_!==0),Wc:null})}function Q$(h,g,$){function _(A){var U=(v(),V)[A>>>2>>>0];return A=(v(),V)[A+4>>>2>>>0],new E((v(),N).buffer,A,U)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];Ut(h>>>=0,{name:$=Oe($>>>0),Oc:_,Uc:_},{yd:!0})}var _n=(h,g,$)=>{var _=(v(),B);if(g>>>=0,0<$){var E=g;$=g+$-1;for(var A=0;A<h.length;++A){var U=h.codePointAt(A);if(127>=U){if(g>=$)break;_[g++>>>0]=U}else if(2047>=U){if(g+1>=$)break;_[g++>>>0]=192|U>>6,_[g++>>>0]=128|63&U}else if(65535>=U){if(g+2>=$)break;_[g++>>>0]=224|U>>12,_[g++>>>0]=128|U>>6&63,_[g++>>>0]=128|63&U}else{if(g+3>=$)break;_[g++>>>0]=240|U>>18,_[g++>>>0]=128|U>>12&63,_[g++>>>0]=128|U>>6&63,_[g++>>>0]=128|63&U,A++}}_[g>>>0]=0,h=g-E}else h=0;return h},Li=h=>{for(var g=0,$=0;$<h.length;++$){var _=h.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function Z$(h,g){Ut(h>>>=0,{name:g=Oe(g>>>0),Oc($){var _=(v(),V)[$>>>2>>>0];return _=j($+4,_,!0),jt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var E=typeof _=="string";if(!(E||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new ct("Cannot pass non-string to std::string");var A=E?Li(_):_.length,U=Fr(4+A+1),K=U+4;return(v(),V)[U>>>2>>>0]=A,E?_n(_,K,A+1):(v(),B).set(_,K>>>0),$!==null&&$.push(jt,U),U},Uc:qs,Wc($){jt($)}})}var Gg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,J$=(h,g,$)=>{if(h>>>=1,16<(g=Ur((v(),G),h,g/2,$))-h&&Gg)return Gg.decode((v(),G).slice(h,g));for($="";h<g;++h){var _=(v(),G)[h>>>0];$+=String.fromCharCode(_)}return $},ev=(h,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*h.length?$/2:h.length;for(var E=0;E<$;++E){var A=h.charCodeAt(E);(v(),q)[g>>>1>>>0]=A,g+=2}return(v(),q)[g>>>1>>>0]=0,g-_},tv=h=>2*h.length,nv=(h,g,$)=>{var _="";h>>>=2;for(var E=0;!(E>=g/4);E++){var A=(v(),V)[h+E>>>0];if(!A&&!$)break;_+=String.fromCodePoint(A)}return _},rv=(h,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var E=0;E<h.length;++E){var A=h.codePointAt(E);if(65535<A&&E++,(v(),O)[g>>>2>>>0]=A,(g+=4)+4>$)break}return(v(),O)[g>>>2>>>0]=0,g-_},iv=h=>{for(var g=0,$=0;$<h.length;++$)65535<h.codePointAt($)&&$++,g+=4;return g};function ov(h,g,$){if(h>>>=0,g>>>=0,$=Oe($>>>=0),g===2)var _=J$,E=ev,A=tv;else _=nv,E=rv,A=iv;Ut(h,{name:$,Oc:U=>{var K=(v(),V)[U>>>2>>>0];return K=_(U+4,K*g,!0),jt(U),K},Vc:(U,K)=>{if(typeof K!="string")throw new ct(`Cannot pass non-string to C++ string type ${$}`);var ie=A(K),ue=Fr(4+ie+g);return(v(),V)[ue>>>2>>>0]=ie/g,E(K,ue+4,ie+g),U!==null&&U.push(jt,ue),ue},Uc:qs,Wc(U){jt(U)}})}function av(h,g){Ut(h>>>=0,{zd:!0,name:g=Oe(g>>>0),Oc:()=>{},Vc:()=>{}})}function sv(h){Js(h>>>0,!r,1,!n,131072,!1),rn()}var Fi=h=>{if(!k)try{if(h(),!(0<Be))try{i?Ki()&&eu(m):Qe(m)}catch(g){g instanceof ee||g=="unwind"||l(0,g)}}catch(g){g instanceof ee||g=="unwind"||l(0,g)}},uv=!Atomics.waitAsync||((sy=globalThis.navigator)==null?void 0:sy.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Vs(h){h>>>=0,uv||(Atomics.waitAsync((v(),O),h>>>2,h).value.then(Gi),h+=128,Atomics.store((v(),O),h>>>2,1))}var Gi=()=>Fi(()=>{var h=Ki();h&&(Vs(h),m0())});function lv(h,g){(h>>>=0)==g>>>0?setTimeout(Gi):i?postMessage({Zc:h,Sc:"checkMailbox"}):(h=Dt[h])&&h.postMessage({Sc:"checkMailbox"})}var Hs=[];function cv(h,g,$,_,E){for(g>>>=0,E>>>=0,Hs.length=0,$=E>>>3,_=E+_>>>3;$<_;){var A;A=(v(),he)[$++>>>0]?(v(),he)[$++>>>0]:(v(),J)[$++>>>0],Hs.push(A)}return(g?iu[g]:e3[h])(...Hs)}var dv=()=>{Be=0};function hv(h){h>>>=0,i?postMessage({Sc:"cleanupThread",Nd:h}):zr(Dt[h])}function pv(h){}var Wi=h=>{try{h()}catch(g){F(g)}};function fv(h){var g=(...$)=>{qi.push(h);try{return h(...$)}finally{k||(qi.pop(),Ht&&xn===1&&qi.length===0&&(xn=0,Be+=1,Wi(ry),typeof Fibers<"u"&&Fibers.Zd()))}};return Vg.set(h,g),g}var xn=0,Ht=null,Wg=0,qi=[],js=new Map,qg=new Map,Vg=new Map,mv=0,Ks=null,gv=[],Hg=h=>(function(g){if(!k){if(xn===0){var $=!1,_=!1;g((E=0)=>{if(!k&&(Wg=E,$=!0,_)){xn=2,Wi(()=>iy(Ht)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var A=(function(){var ie=(v(),O)[Ht+8>>>2>>>0];return ie=qg.get(ie),ie=Vg.get(ie),--Be,ie()})()}catch(ie){A=ie,E=!0}var U=!1;if(!Ht){var K=Ks;K&&(Ks=null,(E?K.reject:K.resolve)(A),U=!0)}if(E&&!U)throw A}}),_=!0,$||(xn=1,Ht=(function(){var E=Fr(65548),A=E+12;if((v(),V)[E>>>2>>>0]=A,(v(),V)[E+4>>>2>>>0]=A+65536,A=qi[0],!js.has(A)){var U=mv++;js.set(A,U),qg.set(U,A)}return A=js.get(A),(v(),O)[E+8>>>2>>>0]=A,E})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Wi(()=>ny(Ht)))}else xn===2?(xn=0,Wi(oy),jt(Ht),Ht=null,gv.forEach(Fi)):F(`invalid state: ${xn}`);return Wg}})(g=>{h().then(g)});function yv(h){return h>>>=0,Hg(async()=>{var g=await Et(h);return Lt(g)})}var Ys=[],wv=h=>{var g=Ys.length;return Ys.push(h),g},bv=(h,g)=>{for(var $=Array(h),_=0;_<h;++_){var E=_,A=(v(),V)[g+4*_>>>2>>>0],U=nt[A];if(U===void 0)throw h=`parameter ${_}`,A=l0(A),g=Oe(A),jt(A),new ct(`${h} has unknown type ${g}`);$[E]=U}return $},_v=(h,g,$)=>{var _=[];return h=h(_,$),_.length&&((v(),V)[g>>>2>>>0]=Lt(_)),h},xv={},Vi=h=>{var g=xv[h];return g===void 0?Oe(h):g};function $v(h,g,$){var[_,...E]=bv(h,g>>>0);g=_.Vc.bind(_);var A=E.map(ie=>ie.Uc.bind(ie));h--;var U={toValue:Et};switch(h=A.map((ie,ue)=>{var ve=`argFromPtr${ue}`;return U[ve]=ie,`${ve}(args${ue?"+"+8*ue:""})`}),$){case 0:var K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:U.getStringOrSymbol=Vi,K="toValue(handle)[getStringOrSymbol(methodName)]"}return K+=`(${h})`,_.zd||(U.toReturnWire=g,U.emval_returnValue=_v,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
  ${K}
  }`,$=new Function(Object.keys(U),K)(...Object.values(U)),K=`methodCaller<(${E.map(ie=>ie.name)}) => ${_.name}>`,wv(Object.defineProperty($,"name",{value:K}))}function vv(h,g){return g>>>=0,(h=Et(h>>>0))==Et(g)}function Mv(h){return(h>>>=0)?(h=Vi(h),Lt(globalThis[h])):Lt(globalThis)}function Sv(h){return h=Vi(h>>>0),Lt(t[h])}function Iv(h,g){return g>>>=0,h=Et(h>>>0),g=Et(g),Lt(h[g])}function Ev(h){9<(h>>>=0)&&(Wn[h+1]+=1)}function jg(h,g,$,_,E){return Ys[h>>>0](g>>>0,$>>>0,_>>>0,E>>>0)}function Tv(h,g,$,_,E){return jg(h>>>0,g>>>0,$>>>0,_>>>0,E>>>0)}function kv(){return Lt([])}function Cv(h){h=Et(h>>>0);for(var g=Array(h.length),$=0;$<h.length;$++)g[$]=h[$];return Lt(g)}function Av(h){return Lt(Vi(h>>>0))}function Rv(){return Lt({})}function Ov(h){for(var g=Et(h>>>=0);g.length;){var $=g.pop();g.pop()($)}Ws(h)}function Nv(h,g,$){g>>>=0,$>>>=0,h=Et(h>>>0),g=Et(g),$=Et($),h[g]=$}function zv(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(v(),O)[g>>>2>>>0]=h.getUTCSeconds(),(v(),O)[g+4>>>2>>>0]=h.getUTCMinutes(),(v(),O)[g+8>>>2>>>0]=h.getUTCHours(),(v(),O)[g+12>>>2>>>0]=h.getUTCDate(),(v(),O)[g+16>>>2>>>0]=h.getUTCMonth(),(v(),O)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(v(),O)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),O)[g+28>>>2>>>0]=h}var Kg=h=>h%4==0&&(h%100!=0||h%400==0),Yg=[0,31,60,91,121,152,182,213,244,274,305,335],Xg=[0,31,59,90,120,151,181,212,243,273,304,334];function Bv(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(v(),O)[g>>>2>>>0]=h.getSeconds(),(v(),O)[g+4>>>2>>>0]=h.getMinutes(),(v(),O)[g+8>>>2>>>0]=h.getHours(),(v(),O)[g+12>>>2>>>0]=h.getDate(),(v(),O)[g+16>>>2>>>0]=h.getMonth(),(v(),O)[g+20>>>2>>>0]=h.getFullYear()-1900,(v(),O)[g+24>>>2>>>0]=h.getDay();var $=(Kg(h.getFullYear())?Yg:Xg)[h.getMonth()]+h.getDate()-1|0;(v(),O)[g+28>>>2>>>0]=$,(v(),O)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset();var _=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|($!=_&&h.getTimezoneOffset()==Math.min(_,$)),(v(),O)[g+32>>>2>>>0]=h}function Pv(h){h>>>=0;var g=new Date((v(),O)[h+20>>>2>>>0]+1900,(v(),O)[h+16>>>2>>>0],(v(),O)[h+12>>>2>>>0],(v(),O)[h+8>>>2>>>0],(v(),O)[h+4>>>2>>>0],(v(),O)[h>>>2>>>0],0),$=(v(),O)[h+32>>>2>>>0],_=g.getTimezoneOffset(),E=new Date(g.getFullYear(),6,1).getTimezoneOffset(),A=new Date(g.getFullYear(),0,1).getTimezoneOffset(),U=Math.min(A,E);return 0>$?(v(),O)[h+32>>>2>>>0]=+(E!=A&&U==_):0<$!=(U==_)&&(E=Math.max(A,E),g.setTime(g.getTime()+6e4*((0<$?U:E)-_))),(v(),O)[h+24>>>2>>>0]=g.getDay(),$=(Kg(g.getFullYear())?Yg:Xg)[g.getMonth()]+g.getDate()-1|0,(v(),O)[h+28>>>2>>>0]=$,(v(),O)[h>>>2>>>0]=g.getSeconds(),(v(),O)[h+4>>>2>>>0]=g.getMinutes(),(v(),O)[h+8>>>2>>>0]=g.getHours(),(v(),O)[h+12>>>2>>>0]=g.getDate(),(v(),O)[h+16>>>2>>>0]=g.getMonth(),(v(),O)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function Qg(h,g,$,_,E,A,U){return i?ye(16,1,h,g,$,_,E,A,U):-52}function Zg(h,g,$,_,E,A){if(i)return ye(17,1,h,g,$,_,E,A)}var Lr={},Dv=()=>performance.timeOrigin+performance.now();function Jg(h,g){if(i)return ye(18,1,h,g);if(Lr[h]&&(clearTimeout(Lr[h].id),delete Lr[h]),!g)return 0;var $=setTimeout(()=>{delete Lr[h],Fi(()=>f0(h,performance.timeOrigin+performance.now()))},g);return Lr[h]={id:$,Yd:g},0}function Uv(h,g,$,_){h>>>=0,g>>>=0,$>>>=0,_>>>=0;var E=new Date().getFullYear(),A=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var U=Math.max(A,E);(v(),V)[h>>>2>>>0]=60*U,(v(),O)[g>>>2>>>0]=+(A!=E),h=(g=K=>{var ie=Math.abs(K);return`UTC${0<=K?"-":"+"}${String(Math.floor(ie/60)).padStart(2,"0")}${String(ie%60).padStart(2,"0")}`})(A),g=g(E),E<A?(_n(h,$,17),_n(g,_,17)):(_n(h,_,17),_n(g,$,17))}var Lv=()=>Date.now();function Fv(h,g,$){return $>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(v(),he)[$>>>3>>>0]=BigInt(h),0):28}var Xs=[],e0=(h,g)=>{Xs.length=0;for(var $;$=(v(),B)[h++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,Xs.push($==112?(v(),V)[g>>>2>>>0]:$==106?(v(),he)[g>>>3>>>0]:$==105?(v(),O)[g>>>2>>>0]:(v(),J)[g>>>3>>>0]),g+=_?8:4}return Xs};function Gv(h,g,$){return h>>>=0,g=e0(g>>>0,$>>>0),iu[h](...g)}function Wv(h,g,$){return h>>>=0,g=e0(g>>>0,$>>>0),iu[h](...g)}var qv=()=>{};function Vv(h,g){return I(j(h>>>0,g>>>0))}var Hv=()=>{throw Be+=1,"unwind"};function jv(){return 4294901760}var Kv=()=>navigator.hardwareConcurrency,qn={},Hi=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},t0=h=>{for(var g of h)(h=Hi(g))&&(qn[h]=g)};function Yv(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),t0(h),qn.gd=Hi(h[3]),qn.Jd=h,qn.gd}function ji(h){if(!(h=qn[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}jt(ji.hd??0),g=Li(h)+1;var $=Fr(g);return $&&_n(h,$,g),ji.hd=$,ji.hd}function Xv(h){h>>>=0;var g=(v(),B).length;if(h<=g||4294901760<h)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,h+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(h,_)/65536))-mt.buffer.byteLength+65535)/65536|0;try{mt.grow(_),z();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function Qv(h,g,$){if(h>>>=0,g>>>=0,qn.gd==h)var _=qn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),t0(_);for(var E=3;_[E]&&Hi(_[E])!=h;)++E;for(h=0;h<$&&_[h+E];++h)(v(),O)[g+4*h>>>2>>>0]=Hi(_[h+E]);return h}var Qs,Zs={},n0=()=>{var _;if(!Qs){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in Zs)Zs[h]===void 0?delete g[h]:g[h]=Zs[h];var $=[];for(h in g)$.push(`${h}=${g[h]}`);Qs=$}return Qs};function r0(h,g){if(i)return ye(19,1,h,g);h>>>=0,g>>>=0;var $,_=0,E=0;for($ of n0()){var A=g+_;(v(),V)[h+E>>>2>>>0]=A,_+=_n($,A,1/0)+1,E+=4}return 0}function i0(h,g){if(i)return ye(20,1,h,g);h>>>=0,g>>>=0;var $=n0();for(var _ of((v(),V)[h>>>2>>>0]=$.length,h=0,$))h+=Li(_)+1;return(v(),V)[g>>>2>>>0]=h,0}function o0(h){return i?ye(21,1,h):52}function a0(h,g,$,_){return i?ye(22,1,h,g,$,_):52}function s0(h,g,$,_){return i?ye(23,1,h,g,$,_):70}var Zv=[null,[],[]];function u0(h,g,$,_){if(i)return ye(24,1,h,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var E=0,A=0;A<$;A++){var U=(v(),V)[g>>>2>>>0],K=(v(),V)[g+4>>>2>>>0];g+=8;for(var ie=0;ie<K;ie++){var ue=h,ve=(v(),B)[U+ie>>>0],Ae=Zv[ue];ve===0||ve===10?((ue===1?M:I)(L(Ae)),Ae.length=0):Ae.push(ve)}E+=K}return(v(),V)[_>>>2>>>0]=E,0}function Jv(h){return h>>>0}i||(function(){for(var h=t.numThreads-1;h--;)on();xe.push(async()=>{var g=(async function(){if(!i)return Promise.all(lt.map(Un))})();ke++,await g,--ke==0&&Ue&&(g=Ue,Ue=null,g())})})(),i||(mt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),z()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Se(),t.stackRestore=h=>Me(h),t.stackAlloc=h=>tu(h),t.setValue=function(h,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(v(),N)[h>>>0]=g;break;case"i16":(v(),q)[h>>>1>>>0]=g;break;case"i32":(v(),O)[h>>>2>>>0]=g;break;case"i64":(v(),he)[h>>>3>>>0]=BigInt(g);break;case"float":(v(),Q)[h>>>2>>>0]=g;break;case"double":(v(),J)[h>>>3>>>0]=g;break;case"*":(v(),V)[h>>>2>>>0]=g;break;default:F(`invalid type for setValue: ${$}`)}},t.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(v(),N)[h>>>0];case"i16":return(v(),q)[h>>>1>>>0];case"i32":return(v(),O)[h>>>2>>>0];case"i64":return(v(),he)[h>>>3>>>0];case"float":return(v(),Q)[h>>>2>>>0];case"double":return(v(),J)[h>>>3>>>0];case"*":return(v(),V)[h>>>2>>>0];default:F(`invalid type for getValue: ${g}`)}},t.UTF8ToString=j,t.stringToUTF8=_n,t.lengthBytesUTF8=Li;var l0,c0,Ki,jt,Fr,Js,d0,h0,p0,eu,f0,m0,Ie,Gr,g0,Me,tu,Se,y0,nu,w0,b0,_0,ru,x0,$0,v0,M0,S0,I0,E0,T0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,W0,q0,V0,H0,j0,K0,Y0,X0,Q0,Z0,J0,ey,ty,ny,ry,iy,oy,sn,e3=[ut,nn,bn,Z,re,se,le,Te,Ce,ce,oe,ae,me,be,Pe,Fe,Qg,Zg,Jg,r0,i0,o0,a0,s0,u0],iu={1003524:(h,g,$,_,E)=>{if(t===void 0||!t.Xc)return 1;if((h=j(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=t.Xc.get(h)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>h.byteLength)return 3;try{let A=h.subarray(g,g+$);switch(E){case 0:(v(),B).set(A,_>>>0);break;case 1:t.Qd?t.Qd(_,A):t.Id(_,A);break;default:return 4}return 0}catch{return 4}},1004348:(h,g,$)=>{t.td(h,(v(),B).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:h=>{t.sd(h)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:h=>t.Ad(h),1004609:h=>t.Ed(h),1004641:(h,g,$)=>{t.ed(Number(h),Number(g),Number($),!0)},1004704:(h,g,$)=>{t.ed(Number(h),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:h=>{t.$b("Abs",h,void 0)},1004869:h=>{t.$b("Neg",h,void 0)},1004920:h=>{t.$b("Floor",h,void 0)},1004973:h=>{t.$b("Ceil",h,void 0)},1005025:h=>{t.$b("Reciprocal",h,void 0)},1005083:h=>{t.$b("Sqrt",h,void 0)},1005135:h=>{t.$b("Exp",h,void 0)},1005186:h=>{t.$b("Erf",h,void 0)},1005237:h=>{t.$b("Sigmoid",h,void 0)},1005292:(h,g,$)=>{t.$b("HardSigmoid",h,{alpha:g,beta:$})},1005371:h=>{t.$b("Log",h,void 0)},1005422:h=>{t.$b("Sin",h,void 0)},1005473:h=>{t.$b("Cos",h,void 0)},1005524:h=>{t.$b("Tan",h,void 0)},1005575:h=>{t.$b("Asin",h,void 0)},1005627:h=>{t.$b("Acos",h,void 0)},1005679:h=>{t.$b("Atan",h,void 0)},1005731:h=>{t.$b("Sinh",h,void 0)},1005783:h=>{t.$b("Cosh",h,void 0)},1005835:h=>{t.$b("Asinh",h,void 0)},1005888:h=>{t.$b("Acosh",h,void 0)},1005941:h=>{t.$b("Atanh",h,void 0)},1005994:h=>{t.$b("Tanh",h,void 0)},1006046:h=>{t.$b("Not",h,void 0)},1006097:(h,g,$)=>{t.$b("Clip",h,{min:g,max:$})},1006166:h=>{t.$b("Clip",h,void 0)},1006218:(h,g)=>{t.$b("Elu",h,{alpha:g})},1006276:h=>{t.$b("Gelu",h,void 0)},1006328:h=>{t.$b("Relu",h,void 0)},1006380:(h,g)=>{t.$b("LeakyRelu",h,{alpha:g})},1006444:(h,g)=>{t.$b("ThresholdedRelu",h,{alpha:g})},1006514:(h,g)=>{t.$b("Cast",h,{to:g})},1006572:h=>{t.$b("Add",h,void 0)},1006623:h=>{t.$b("Sub",h,void 0)},1006674:h=>{t.$b("Mul",h,void 0)},1006725:h=>{t.$b("Div",h,void 0)},1006776:h=>{t.$b("Pow",h,void 0)},1006827:h=>{t.$b("Equal",h,void 0)},1006880:h=>{t.$b("Greater",h,void 0)},1006935:h=>{t.$b("GreaterOrEqual",h,void 0)},1006997:h=>{t.$b("Less",h,void 0)},1007049:h=>{t.$b("LessOrEqual",h,void 0)},1007108:(h,g,$,_,E)=>{t.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007283:(h,g,$,_,E)=>{t.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007457:(h,g,$,_,E)=>{t.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007631:(h,g,$,_,E)=>{t.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007806:(h,g,$,_,E)=>{t.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007980:(h,g,$,_,E)=>{t.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008153:(h,g,$,_,E)=>{t.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008326:(h,g,$,_,E)=>{t.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008503:(h,g,$,_,E)=>{t.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008683:(h,g,$,_,E)=>{t.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008863:h=>{t.$b("Where",h,void 0)},1008916:(h,g,$)=>{t.$b("Transpose",h,{perm:g?Array.from((v(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:j($),format:_?"NHWC":"NCHW"})},1009173:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:j($),format:_?"NHWC":"NCHW"})},1009306:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve,$n)=>{t.$b("ConvTranspose",h,{format:ie?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[A,U],strides:[K],wIsConst:()=>!!(v(),N)[ue>>>0],outputPadding:ve?Array.from((v(),O).subarray(Number(ve)>>>0,Number(Ae)>>>0)):[],outputShape:Ge?Array.from((v(),O).subarray(Number(Ge)>>>0,Number(Ve)>>>0)):[],activation:j($n)})},1009739:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve)=>{t.$b("ConvTranspose",h,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((v(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),O).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[ie>>>0],outputPadding:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],outputShape:Ae?Array.from((v(),O).subarray(Number(Ae)>>>0,Number(Ge)>>>0)):[],activation:j(Ve)})},1010400:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve,$n)=>{t.$b("ConvTranspose",h,{format:ie?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[A,U],strides:[K],wIsConst:()=>!!(v(),N)[ue>>>0],outputPadding:ve?Array.from((v(),O).subarray(Number(ve)>>>0,Number(Ae)>>>0)):[],outputShape:Ge?Array.from((v(),O).subarray(Number(Ge)>>>0,Number(Ve)>>>0)):[],activation:j($n)})},1010833:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve)=>{t.$b("ConvTranspose",h,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((v(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((v(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((v(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+4>>>0)),strides:Array.from((v(),O).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[ie>>>0],outputPadding:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],outputShape:Ae?Array.from((v(),O).subarray(Number(Ae)>>>0,Number(Ge)>>>0)):[],activation:j(Ve)})},1011494:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1011585:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve)=>{t.$b("AveragePool",h,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(U)>>>0)):[],kernel_shape:K?Array.from((v(),O).subarray(Number(K)>>>0,Number(ie)>>>0)):[],pads:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],strides:Ae?Array.from((v(),O).subarray(Number(Ae)>>>0,Number(Ge)>>>0)):[]})},1012064:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1012155:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve)=>{t.$b("AveragePool",h,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(U)>>>0)):[],kernel_shape:K?Array.from((v(),O).subarray(Number(K)>>>0,Number(ie)>>>0)):[],pads:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],strides:Ae?Array.from((v(),O).subarray(Number(Ae)>>>0,Number(Ge)>>>0)):[]})},1012634:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1012721:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve)=>{t.$b("MaxPool",h,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(U)>>>0)):[],kernel_shape:K?Array.from((v(),O).subarray(Number(K)>>>0,Number(ie)>>>0)):[],pads:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],strides:Ae?Array.from((v(),O).subarray(Number(Ae)>>>0,Number(Ge)>>>0)):[]})},1013196:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1013283:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve)=>{t.$b("MaxPool",h,{format:Ve?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(U)>>>0)):[],kernel_shape:K?Array.from((v(),O).subarray(Number(K)>>>0,Number(ie)>>>0)):[],pads:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],strides:Ae?Array.from((v(),O).subarray(Number(Ae)>>>0,Number(Ge)>>>0)):[]})},1013758:(h,g,$,_,E)=>{t.$b("Gemm",h,{alpha:g,beta:$,transA:_,transB:E})},1013862:h=>{t.$b("MatMul",h,void 0)},1013916:(h,g,$,_)=>{t.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(h,g,$,_)=>{t.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(h,g)=>{t.$b("Softmax",h,{axis:g})},1014195:(h,g)=>{t.$b("Concat",h,{axis:g})},1014255:(h,g,$,_,E)=>{t.$b("Split",h,{axis:g,numOutputs:$,splitSizes:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1014411:h=>{t.$b("Expand",h,void 0)},1014465:(h,g)=>{t.$b("Gather",h,{axis:Number(g)})},1014536:(h,g)=>{t.$b("GatherElements",h,{axis:Number(g)})},1014615:(h,g)=>{t.$b("GatherND",h,{batch_dims:Number(g)})},1014694:(h,g,$,_,E,A,U,K,ie,ue,ve)=>{t.$b("Resize",h,{antialias:g,axes:$?Array.from((v(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:j(E),cubicCoeffA:A,excludeOutside:U,extrapolationValue:K,keepAspectRatioPolicy:j(ie),mode:j(ue),nearestMode:j(ve)})},1015056:(h,g,$,_,E,A,U)=>{t.$b("Slice",h,{starts:g?Array.from((v(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[],axes:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(U)>>>0)):[]})},1015320:h=>{t.$b("Tile",h,void 0)},1015372:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:h=>{t.$b("Range",h,void 0)},1015653:(h,g)=>{t.$b("Einsum",h,{equation:j(g)})},1015734:(h,g,$,_,E)=>{t.$b("Pad",h,{mode:g,value:$,pads:_?Array.from((v(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1015877:(h,g,$,_,E,A)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016046:(h,g,$,_,E,A)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:A?"NHWC":"NCHW"})},1016215:(h,g,$)=>{t.$b("CumSum",h,{exclusive:Number(g),reverse:Number($)})},1016312:(h,g,$)=>{t.$b("DequantizeLinear",h,{axis:g,blockSize:$})},1016402:(h,g,$,_,E)=>{t.$b("GridSample",h,{align_corners:g,mode:j($),padding_mode:j(_),format:E?"NHWC":"NCHW"})},1016572:(h,g,$,_,E)=>{t.$b("GridSample",h,{align_corners:g,mode:j($),padding_mode:j(_),format:E?"NHWC":"NCHW"})},1016742:(h,g)=>{t.$b("ScatterND",h,{reduction:j(g)})},1016827:(h,g,$,_,E,A,U,K,ie)=>{t.$b("Attention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:A,qkvHiddenSizes:U?Array.from((v(),O).subarray(Number(K)>>>0,Number(K)+U>>>0)):[],pastPresentShareBuffer:!!ie})},1017099:h=>{t.$b("BiasAdd",h,void 0)},1017154:h=>{t.$b("BiasSplitGelu",h,void 0)},1017215:h=>{t.$b("FastGelu",h,void 0)},1017271:(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve,$n,ou)=>{t.$b("Conv",h,{format:Ae?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((v(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:E,kernel_shape:A?Array.from((v(),O).subarray(Number(A)>>>0,Number(U)>>>0)):[],pads:K?Array.from((v(),O).subarray(Number(K)>>>0,Number(ie)>>>0)):[],strides:ue?Array.from((v(),O).subarray(Number(ue)>>>0,Number(ve)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Ge)>>>0],activation:j(Ve),activation_params:$n?Array.from((v(),Q).subarray(Number($n)>>>0,Number(ou)>>>0)):[]})},1017855:h=>{t.$b("Gelu",h,void 0)},1017907:(h,g,$,_,E,A,U,K,ie)=>{t.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:$,scale:_,softcap:E,doRotary:A,rotaryInterleaved:U,smoothSoftmax:K,localWindowSize:ie})},1018124:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018235:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018346:(h,g,$,_,E,A)=>{t.$b("MatMulNBits",h,{k:g,n:$,accuracyLevel:_,bits:E,blockSize:A})},1018473:(h,g,$,_,E,A)=>{t.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:A})},1018632:(h,g)=>{t.$b("QuickGelu",h,{alpha:g})},1018696:(h,g,$,_,E)=>{t.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:E})},1018835:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1018937:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1019039:(h,g,$,_)=>{t.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:h=>{t.Fd(h)},1019194:(h,g)=>t.Hd(Number(h),Number(g),t.Yc.Kd,t.Yc.errors)};function t3(h,g,$){return Hg(async()=>{await t.Dd(Number(h),Number(g),Number($))})}function n3(){return typeof wasmOffsetConverter<"u"}function r3(h,g,$,_){var E=Se();try{return T0(h,g,$,_)}catch(A){if(Me(E),A!==A+0)throw A;Ie(1,0)}}function i3(h,g,$){var _=Se();try{return M0(h,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ie(1,0)}}function o3(h){var g=Se();try{x0(h)}catch($){if(Me(g),$!==$+0)throw $;Ie(1,0)}}function a3(h,g){var $=Se();try{return ru(h,g)}catch(_){if(Me($),_!==_+0)throw _;Ie(1,0)}}function s3(h,g,$){var _=Se();try{_0(h,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ie(1,0)}}function u3(h,g){var $=Se();try{k0(h,g)}catch(_){if(Me($),_!==_+0)throw _;Ie(1,0)}}function l3(h,g,$,_,E,A,U){var K=Se();try{return I0(h,g,$,_,E,A,U)}catch(ie){if(Me(K),ie!==ie+0)throw ie;Ie(1,0)}}function c3(h,g,$,_,E,A){var U=Se();try{$0(h,g,$,_,E,A)}catch(K){if(Me(U),K!==K+0)throw K;Ie(1,0)}}function d3(h,g,$,_){var E=Se();try{E0(h,g,$,_)}catch(A){if(Me(E),A!==A+0)throw A;Ie(1,0)}}function h3(h,g,$,_,E){var A=Se();try{v0(h,g,$,_,E)}catch(U){if(Me(A),U!==U+0)throw U;Ie(1,0)}}function p3(h,g,$,_,E,A,U){var K=Se();try{A0(h,g,$,_,E,A,U)}catch(ie){if(Me(K),ie!==ie+0)throw ie;Ie(1,0)}}function f3(h,g,$,_,E,A,U){var K=Se();try{R0(h,g,$,_,E,A,U)}catch(ie){if(Me(K),ie!==ie+0)throw ie;Ie(1,0)}}function m3(h,g,$,_,E,A,U,K){var ie=Se();try{B0(h,g,$,_,E,A,U,K)}catch(ue){if(Me(ie),ue!==ue+0)throw ue;Ie(1,0)}}function g3(h,g,$,_,E){var A=Se();try{return C0(h,g,$,_,E)}catch(U){if(Me(A),U!==U+0)throw U;Ie(1,0)}}function y3(h,g,$){var _=Se();try{return P0(h,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ie(1,0)}}function w3(h,g,$,_,E,A,U,K){var ie=Se();try{D0(h,g,$,_,E,A,U,K)}catch(ue){if(Me(ie),ue!==ue+0)throw ue;Ie(1,0)}}function b3(h,g,$,_,E,A,U,K,ie,ue,ve,Ae){var Ge=Se();try{O0(h,g,$,_,E,A,U,K,ie,ue,ve,Ae)}catch(Ve){if(Me(Ge),Ve!==Ve+0)throw Ve;Ie(1,0)}}function _3(h,g,$,_,E,A){var U=Se();try{return N0(h,g,$,_,E,A)}catch(K){if(Me(U),K!==K+0)throw K;Ie(1,0)}}function x3(h,g,$){var _=Se();try{return U0(h,g,$)}catch(E){if(Me(_),E!==E+0)throw E;return Ie(1,0),0n}}function $3(h,g,$,_,E,A,U,K,ie){var ue=Se();try{S0(h,g,$,_,E,A,U,K,ie)}catch(ve){if(Me(ue),ve!==ve+0)throw ve;Ie(1,0)}}function v3(h){var g=Se();try{return L0(h)}catch($){if(Me(g),$!==$+0)throw $;Ie(1,0)}}function M3(h,g){var $=Se();try{return ty(h,g)}catch(_){if(Me($),_!==_+0)throw _;return Ie(1,0),0n}}function S3(h){var g=Se();try{return F0(h)}catch($){if(Me(g),$!==$+0)throw $;return Ie(1,0),0n}}function I3(h,g,$,_){var E=Se();try{return j0(h,g,$,_)}catch(A){if(Me(E),A!==A+0)throw A;Ie(1,0)}}function E3(h,g,$,_,E){var A=Se();try{return K0(h,g,$,_,E)}catch(U){if(Me(A),U!==U+0)throw U;Ie(1,0)}}function T3(h,g,$,_,E,A){var U=Se();try{return Y0(h,g,$,_,E,A)}catch(K){if(Me(U),K!==K+0)throw K;Ie(1,0)}}function k3(h,g,$,_,E,A){var U=Se();try{return X0(h,g,$,_,E,A)}catch(K){if(Me(U),K!==K+0)throw K;Ie(1,0)}}function C3(h,g,$,_,E,A,U,K){var ie=Se();try{return z0(h,g,$,_,E,A,U,K)}catch(ue){if(Me(ie),ue!==ue+0)throw ue;Ie(1,0)}}function A3(h,g,$,_,E){var A=Se();try{return Q0(h,g,$,_,E)}catch(U){if(Me(A),U!==U+0)throw U;return Ie(1,0),0n}}function R3(h,g,$,_){var E=Se();try{return Z0(h,g,$,_)}catch(A){if(Me(E),A!==A+0)throw A;Ie(1,0)}}function O3(h,g,$,_){var E=Se();try{return J0(h,g,$,_)}catch(A){if(Me(E),A!==A+0)throw A;Ie(1,0)}}function N3(h,g,$,_,E,A,U,K,ie,ue,ve,Ae){var Ge=Se();try{return ey(h,g,$,_,E,A,U,K,ie,ue,ve,Ae)}catch(Ve){if(Me(Ge),Ve!==Ve+0)throw Ve;Ie(1,0)}}function z3(h,g,$,_,E,A,U,K,ie,ue,ve){var Ae=Se();try{V0(h,g,$,_,E,A,U,K,ie,ue,ve)}catch(Ge){if(Me(Ae),Ge!==Ge+0)throw Ge;Ie(1,0)}}function B3(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve,$n,ou){var L3=Se();try{H0(h,g,$,_,E,A,U,K,ie,ue,ve,Ae,Ge,Ve,$n,ou)}catch(au){if(Me(L3),au!==au+0)throw au;Ie(1,0)}}function P3(h,g,$){var _=Se();try{return G0(h,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ie(1,0)}}function D3(h,g,$){var _=Se();try{return W0(h,g,$)}catch(E){if(Me(_),E!==E+0)throw E;Ie(1,0)}}function U3(h,g,$,_){var E=Se();try{q0(h,g,$,_)}catch(A){if(Me(E),A!==A+0)throw A;Ie(1,0)}}function Yi(){if(0<ke)Ue=Yi;else if(i)y==null||y(t),D();else{for(var h=xe;0<h.length;)h.shift()(t);0<ke?Ue=Yi:(t.calledRun=!0,k||(D(),y==null||y(t)))}}return i||(sn=await ne(),Yi()),t.PTR_SIZE=4,R?t:new Promise((h,g)=>{y=h,w=g})}var ku,Cu,ky=te(()=>{var e,t;ku=Tu,Cu=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Cu&&Tu()}),io,oo,Au,yt,Ru,Hr,Ou,Nu,ao,zu,so,Bu,uo,Pu,lo=te(()=>{to(),io=typeof location>"u"?void 0:location.origin,oo=self.location.href>"file:"&&self.location.href<"file;",Au=()=>{{if(oo){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,io).href}return self.location.href}},yt=Au(),Ru=()=>{if(yt&&!yt.startsWith("blob:"))return yt.substring(0,yt.lastIndexOf("/")+1)},Hr=(e,t)=>{try{let n=t??yt;return(n?new URL(e,n):new URL(e)).origin===io}catch{return!1}},Ou=(e,t)=>{let n=t??yt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Nu=(e,t)=>`${t??"./"}${e}`,ao=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},zu=async e=>(await import(e)).default,so=(Ty(),hr(Su)).default,Bu=async()=>{if(!yt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Hr(yt))return[void 0,so()];let e=await ao(yt);return[e,so(e)]},uo=(ky(),hr(Eu)).default,Pu=async(e,t,n,r)=>{let i=uo&&!(e||t);if(i)if(yt)i=Hr(yt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,uo];{let o="ort-wasm-simd-threaded.jsep.mjs",a=e??Ou(o,t),s=n&&a&&!Hr(a,t),u=s?await ao(a):a??Nu(o,t);return[s?u:void 0,await zu(u)]}}}),co,jr,mr,ho,Du,Uu,Lu,po,We,In=te(()=>{lo(),jr=!1,mr=!1,ho=!1,Du=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Uu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Lu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},po=async e=>{if(jr)return Promise.resolve();if(mr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ho)throw new Error("previous call to 'initializeWebAssembly()' failed.");mr=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Lu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Uu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Du();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,s=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[c,p]=await Pu(s,o,n>1,!!d||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(d)b.wasmBinary=d,b.locateFile=x=>x;else if(l||o)b.locateFile=x=>l??o+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(c){let x=Ru();x&&(b.locateFile=S=>x+S)}p(b).then(x=>{mr=!1,jr=!0,co=x,y(),c&&URL.revokeObjectURL(c)},x=>{mr=!1,ho=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},We=()=>{if(jr&&co)return co;throw new Error("WebAssembly is not initialized yet.")}}),kt,Kr,ze,fo=te(()=>{In(),kt=(e,t)=>{let n=We(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Kr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,o])=>{let a=t?t+i:i;if(typeof o=="object")Kr(o,a+".",n,r);else if(typeof o=="string"||typeof o=="number")r(a,o.toString());else if(typeof o=="boolean")r(a,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},ze=e=>{let t=We(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let o=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),s=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),Fu,Cy=te(()=>{In(),fo(),Fu=e=>{let t=We(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=kt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),n===0&&ze("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Kr(e.extra,"",new WeakSet,(a,s)=>{let u=kt(a,r),l=kt(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&ze(`Can't set a run config entry: ${a} - ${s}.`)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),o}}}),Gu,Wu,qu,En,Vu,Hu,Ay=te(()=>{In(),fo(),Gu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Wu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},qu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},En=(e,t,n,r)=>{let i=kt(t,r),o=kt(n,r);We()._OrtAddSessionConfigEntry(e,i,o)!==0&&ze(`Can't set a session config entry: ${t} - ${n}.`)},Vu=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let o=typeof i=="string"?i:i.name,a=[];switch(o){case"webnn":if(o="WEBNN",En(e,"session.disable_quant_qdq","1",n),En(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&En(e,"deviceType",c,n)}break;case"webgpu":if(o="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);En(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let s=kt(o,n),u=a.length,l=0,d=0;if(u>0){l=We()._malloc(u*We().PTR_SIZE),n.push(l),d=We()._malloc(u*We().PTR_SIZE),n.push(d);for(let c=0;c<u;c++)We().setValue(l+c*We().PTR_SIZE,a[c][0],"*"),We().setValue(d+c*We().PTR_SIZE,a[c][1],"*")}await We()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&ze(`Can't append execution provider: ${o}.`)}},Hu=async e=>{let t=We(),n=0,r=[],i=e||{};qu(i);try{let o=Gu(i.graphOptimizationLevel??"all"),a=Wu(i.executionMode??"sequential"),s=typeof i.logId=="string"?kt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof i.optimizedModelFilePath=="string"?kt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,s,u,l,d),n===0&&ze("Can't create session options."),i.executionProviders&&await Vu(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);En(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=kt(c,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&ze(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Kr(i.extra,"",new WeakSet,(c,p)=>{En(n,c,p,r)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ze("Can't release session options."),r.forEach(a=>t._free(a)),o}}}),Tn,Xt,kn,Yr,Xr,mo,go,yo,we=te(()=>{Tn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Xt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},kn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return n>0?Math.ceil(r*n):void 0},Yr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Xr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},mo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",go=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",yo=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),wo,ju=te(()=>{to(),wo=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let a=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(o,a,l).set(u),a+=l}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ku,Yu,Xu,Qu,bo,Zu,Ee,Qt=te(()=>{we(),Ku=["V","I","W","E","F"],Yu=(e,t)=>{console.log(`[${Ku[e]},${new Date().toISOString()}]${t}`)},bo=(e,t)=>{Xu=e,Qu=t},Zu=(e,t)=>{let n=Xr(e),r=Xr(Xu);n>=r&&Yu(n,typeof t=="function"?t():t)},Ee=(...e)=>{Qu&&Zu(...e)}}),Ju,Yn,H,Qr,el,tl,nl,_e=te(()=>{Ju=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Yn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),a=new Array(o);if(n){if(r<2||i<2)return;let s=Ju.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[a[o-2],a[o-1]]=s}for(let s=n?3:1;s<=o;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)a[o-s]=Math.max(u,l);else{if(d>1)return;a[o-s]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},H=class Xi{static size(t){return Xi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),o=r-1;for(;o>=0;){if(t[o]%n===0){i[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,n/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Xi.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Xi.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let o=n;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,o)=>i+n[o]+n[o+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Qr=class Wr{static adjustPoolAttributes(t,n,r,i,o,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<r.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=r[s]||a[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,o,a,s){if(s){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Wr.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],o,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,o,a,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Wr.computeShapeHelper(t,n,u,r,i,o,a,s),u}static computeConvOutputShape(t,n,r,i,o,a,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Wr.computeShapeHelper(!1,t,u,r,i,o,a,s),u}static computeShapeHelper(t,n,r,i,o,a,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Wr.adjustPadAndReturnShape(n[l+2],i[l],o[l],a[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,o,a,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+n-1)/n-1)*n+i-t;return o[a]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),o[s]=d-o[a],Math.floor((t+d-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[a]+o[s]-l)/n+1)}},el=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,a,s;t?(o=e[1],a=e[0]):(o=e[0],a=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(o<=0||s<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Yn.isValidBroadcast(i,[o,s]))throw new Error("gemm: invalid bias shape for broadcast");return[o,s,a]}},tl=-34028234663852886e22,nl=34028234663852886e22}),_o,rl=te(()=>{we(),_o=(e,t)=>new(Yr(t))(e)}),xo,$o,vo,il,Mo,ol,So,Io,Eo,al,sl,Ry=te(()=>{we(),Qt(),xo=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),$o=(e,t)=>{if(t==="int32")return e;let n=xo.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,o=new(Yr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let s=0;s<i;s++){let u=o[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[s]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(o,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},vo=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},il=1,Mo=()=>il++,ol=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),So=(e,t)=>{let n=xo.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Io=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:o,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=o,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return So(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=vo(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Eo=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),a;if(!(o!=null&&o.input.dataTypes.includes(t))){if(a=ol.get(t),!a||(o==null?void 0:o.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);Ee("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==So(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=$o(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?vo(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},al=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Mo();return this.tensorTrackersById.set(e,new Eo(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),o=Mo(),a=new Io({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(o,new Eo(this,a)),this.externalTensors.add(a),o}async getCachedTensor(e,t,n,r,i,o,a){let s=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(s,t,n)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:o});return new Io({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},sl=(...e)=>new al(...e)}),gr,ul,ll,Oy=te(()=>{we(),In(),rl(),Ry(),Qt(),gr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ul=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,o)=>i===r[o]&&e[i]===t[i])},ll=class{constructor(e){this.tensorManager=sl(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,bo(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>ul(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let o=gr.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,i)}async createTemporaryTensor(e,t,n){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=gr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!We().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return _o(n,t)}}registerMLTensor(e,t,n,r){let i=gr.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,i,r);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,r,i,o,a=!1){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=o.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(a){let c=$o(new Uint8Array(l),"int64");d=new Int32Array(c.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=gr.get(Tn(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),To=te(()=>{}),ko,Zr,Jr,cl,dl,Co,Ao,hl,pl,Ny=te(()=>{Qt(),To(),ko=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Zr=[],Jr=e=>Math.ceil(Number(e)/16)*16,cl=e=>{for(let t=0;t<Zr.length;t++){let n=Zr[t];if(e<=n)return n}return Math.ceil(e/16)*16},dl=1,Co=()=>dl++,Ao=async(e,t,n,r)=>{let i=Jr(n),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let s=o.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{o.destroy()}},hl=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ko)Zr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,o=Jr(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,a.gpuData.buffer,0,o),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Jr(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Co();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=cl(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:Co(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Ao(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ko.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},pl=(...e)=>new hl(...e)}),fl,Ne,je=te(()=>{fl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ne=e=>new fl(e)}),Xn,ei,Xe,rt,ge,He,Ro,Qn,ln,pe,yr,X,de,ml,Oo,gl,yl,$e=te(()=>{we(),_e(),Xn=64,ei=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Xe=(e,t=1)=>{let n=ei(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=ei(e,t);return typeof n=="string"?n:n[1]},ge=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:H.computeStrides(n)})}),t},He=e=>e%4===0?4:e%2===0?2:1,Ro=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Qn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,ln=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,yr=(e,t,n,r,i)=>{let o=typeof n=="number",a=o?n:n.length,s=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,l=ei(t,i),d=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:d,storage:c,tensor:t},f=R=>typeof R=="string"?R:`${R}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=o?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let R=0;R<a-1;R++)x+=`
    let dim${R} = current / ${pe(b,R,a)};
    let rest${R} = current % ${pe(b,R,a)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${a-1}] = current;`;let S=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,M=R=>(m.offsetToIndices=!0,a<2?R:`o2i_${e}(${R})`),I=[];if(a>=2)for(let R=a-1;R>=0;R--)I.push(`${pe(b,R,a)} * (indices[${R}])`);let k=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,T=R=>(m.indicesToOffset=!0,a<2?R:`i2o_${e}(${R})`),v=(...R)=>a===0?"0u":`${p.indices}(${R.map(f).join(",")})`,C=(R,z)=>a<2?`${R}`:`${pe(R,z,a)}`,N=(R,z,D)=>a<2?`${R}=${D};`:`${pe(R,z,a)}=${D};`,B={},q=(R,z)=>{m.broadcastedIndicesToOffset=!0;let D=`${z.name}broadcastedIndicesTo${e}Offset`;if(D in B)return`${D}(${R})`;let F=[];for(let Y=a-1;Y>=0;Y--){let ne=z.indicesGet("outputIndices",Y+z.rank-a);F.push(`${C(b,Y)} * (${ne} % ${C(w,Y)})`)}return B[D]=`fn ${D}(outputIndices: ${z.type.indices}) -> u32 {
             return ${F.length>0?F.join("+"):"0u"};
           }`,`${D}(${R})`},G=(R,z)=>(()=>{if(p.storage===p.value)return`${e}[${R}]=${z};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${z}), select(0u, 0xFFFFFFFFu, ${z} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${z}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${z}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=R=>(()=>{if(p.storage===p.value)return`${e}[${R}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${R}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${R}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),V=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${d} {
    return ${O(`i2o_${e}(indices)`)};
  }`,Q=a<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),z=s.map(D=>`d${D}`).join(", ");return`
  fn get_${e}(${R}) -> ${d} {
    return get_${e}ByIndices(${v(z)});
  }`})(),J=(...R)=>{if(R.length!==a)throw new Error(`indices length must be ${a}`);let z=R.map(f).join(",");return a===0?O("0u"):a===1?O(z[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${z})`)},he=R=>a<2?O(R):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${R})`),W=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${d}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,P=a<2?"":(()=>{let R=s.map(D=>`d${D}: u32`).join(", "),z=s.map(D=>`d${D}`).join(", ");return`
  fn set_${e}(${R}, value: ${d}) {
    set_${e}ByIndices(${v(z)}, value);
  }`})();return{impl:()=>{let R=[],z=!1;return m.offsetToIndices&&(R.push(S),z=!0),m.indicesToOffset&&(R.push(k),z=!0),m.broadcastedIndicesToOffset&&(Object.values(B).forEach(D=>R.push(D)),z=!0),m.set&&(R.push(P),z=!0),m.setByIndices&&(R.push(W),z=!0),m.get&&(R.push(Q),z=!0),m.getByIndices&&(R.push(V),z=!0),!o&&z&&R.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${H.computeStrides(n).join(",")});`),R.join(`
`)},type:p,offsetToIndices:M,indicesToOffset:T,broadcastedIndicesToOffset:q,indices:v,indicesGet:C,indicesSet:N,set:(...R)=>{if(R.length!==a+1)throw new Error(`indices length must be ${a}`);let z=R[a];if(typeof z!="string")throw new Error("value must be string");let D=R.slice(0,a).map(f).join(",");return a===0?G("0u",z):a===1?G(D[0],z):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${D}, ${z})`)},setByOffset:G,setByIndices:(R,z)=>a<2?G(R,z):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${z});`),get:J,getByOffset:O,getByIndices:he,usage:r,name:e,strides:b,shape:w,rank:a}},X=(e,t,n,r=1)=>yr(e,t,n,"input",r),de=(e,t,n,r=1)=>yr(e,t,n,"output",r),ml=(e,t,n)=>yr(e,t,n,"atomicOutput",1),Oo=(e,t,n,r=1)=>yr(e,t,n,"internal",r),gl=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Xn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${o}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},yl=(e,t)=>new gl(e,t)}),wl,No,bl,_l,xl,$l,wt,vl,Ml,cn=te(()=>{we(),_e(),je(),$e(),wl=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},No=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),bl=(e,t)=>H.sortBasedOnPerm(e,No(e.length,t)),_l=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},xl=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},$l=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},wt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=No(r,t),o=bl(e.dims,i),a=e.dims,s=o,u=r<2||$l(i,e.dims),l;if(u)return l=m=>{let y=X("input",n,a,4),w=de("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=H.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:c}=xl(e.dims,i),p=H.areEqual(c,[2,3,1]),f=H.areEqual(c,[3,1,2]);if(d.length===2||p||f){a=p?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,s=[a[1],a[0]];let m=16;return l=y=>{let w=X("a",n,a.length),b=de("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=H.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...ge(a,s)]}},getShaderSource:l}}return l=m=>{let y=X("a",n,a.length),w=de("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${_l(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=H.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ge(a,s)]}},getShaderSource:l}},vl=(e,t)=>{wl(e.inputs,t.perm),e.compute(wt(e.inputs[0],t.perm))},Ml=e=>Ne({perm:e.perm})}),Sl,Il,El,Tl,kl,Cl,Al,Rl,Ol,Nl,Ct,zl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,Wl,ql,zy=te(()=>{we(),_e(),$e(),Bo(),cn(),Sl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Il={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},El={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Tl={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},kl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Cl=(e,t)=>{let n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);let i=t.map(o=>e[o]);return[n,i]},Al=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(e[i++]):r.push(1);return r},Rl=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Ol=(e,t)=>{let n=[];if(!Rl(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},Nl=(e,t,n,r,i,o,a)=>{let s=n[0].dims,u=H.size(o),l=H.size(a),d=X("_A",n[0].dataType,s),c=de("output",i,o),p=64;u===1&&(p=256);let f=`
          var<workgroup> aBestValues : array<f32, ${p}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(p)}

          let outputIndex = global_idx / ${p};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${El[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${Sl[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Il[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${Tl[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},Ct=(e,t,n,r)=>{let i=e.inputs.length===1?n:zo(e.inputs,n),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((f,m)=>m));let a=H.normalizeAxes(o,e.inputs[0].dims.length),s=a,u=e.inputs[0],l=Ol(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(wt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=kl(s.length,u.dims.length));let[d,c]=Cl(u.dims,s),p=d;i.keepDims&&(p=Al(d,a)),e.compute(Nl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},zl=(e,t)=>{Ct(e,"ReduceMeanShared",t,"mean")},Bl=(e,t)=>{Ct(e,"ReduceL1Shared",t,"l1")},Pl=(e,t)=>{Ct(e,"ReduceL2Shared",t,"l2")},Dl=(e,t)=>{Ct(e,"ReduceLogSumExpShared",t,"logSumExp")},Ul=(e,t)=>{Ct(e,"ReduceMaxShared",t,"max")},Ll=(e,t)=>{Ct(e,"ReduceMinShared",t,"min")},Fl=(e,t)=>{Ct(e,"ReduceProdShared",t,"prod")},Gl=(e,t)=>{Ct(e,"ReduceSumShared",t,"sum")},Wl=(e,t)=>{Ct(e,"ReduceSumSquareShared",t,"sumSquare")},ql=(e,t)=>{Ct(e,"ReduceLogSumShared",t,"logSum")}}),At,Vl,ti,zo,Rt,Hl,jl,Kl,Yl,Xl,Ql,Zl,Jl,ec,tc,Ot,nc,rc,ic,oc,ac,sc,uc,lc,cc,dc,Bo=te(()=>{we(),_e(),je(),$e(),zy(),At=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Vl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ti=(e,t,n,r,i,o,a=!1,s=!1)=>{let u=[],l=n[0].dims,d=l.length,c=H.normalizeAxes(i,d),p=!s&&c.length===0;l.forEach((y,w)=>{p||c.indexOf(w)>=0?a&&u.push(1):u.push(y)});let f=u.length,m=H.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=X("_A",n[0].dataType,d),x=de("output",o,f),S=r(b,x,c),M=S[2];for(let I=0,k=0;I<d;I++)p||c.indexOf(I)>=0?(a&&k++,M=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${b.indicesSet("input_indices",I,`j${I}`)}
                  ${M}
                }`):(w.push(`${b.indicesSet("input_indices",I,x.indicesGet("output_indices",k))};`),k++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${M}
          ${S[3]}
          ${S.length===4?x.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ge(l,u)]})}},zo=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Ne({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Rt=(e,t,n,r)=>{let i=e.inputs,o=i.length===1?n:zo(i,n);e.compute(ti(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?Vl:r,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},Hl=(e,t)=>{At(e.inputs),Rt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},jl=(e,t)=>{At(e.inputs),Rt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Kl=(e,t)=>{At(e.inputs),Rt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Yl=(e,t)=>{At(e.inputs),Rt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Xl=(e,t)=>{At(e.inputs),Rt(e,"ReduceMax",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(n.indicesSet("input_indices",a,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Ql=(e,t)=>{At(e.inputs),Rt(e,"ReduceMean",t,(n,r,i)=>{let o=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(o*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},Zl=(e,t)=>{At(e.inputs),Rt(e,"ReduceMin",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Jl=(e,t)=>{At(e.inputs),Rt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},ec=(e,t)=>{At(e.inputs),Rt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},tc=(e,t)=>{At(e.inputs),Rt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Ot=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:i*=e[o];return i<32&&r>1024},nc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ql(e,t):zl(e,t)},rc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jl(e,t):Bl(e,t)},ic=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Kl(e,t):Pl(e,t)},oc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yl(e,t):Dl(e,t)},ac=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xl(e,t):Ul(e,t)},sc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zl(e,t):Ll(e,t)},uc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jl(e,t):Fl(e,t)},lc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ec(e,t):Gl(e,t)},cc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tc(e,t):Wl(e,t)},dc=(e,t)=>{Ot(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hl(e,t):ql(e,t)}}),Po,hc,pc,Do,By=te(()=>{we(),je(),Bo(),Po=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},hc=(e,t)=>{Po(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ti("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},pc=(e,t)=>{Po(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(ti("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Do=e=>Ne(e)}),fc,ni,mc,gc,yc,wr,wc,bc,Uo=te(()=>{we(),_e(),To(),$e(),fc=(e,t)=>{let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5];if(a&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],d=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let w=m+y,b=-1,x=0;if(o)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:d,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ni=(e,t,n)=>t&&e?`
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
    `,mc=(e,t,n,r,i,o,a,s)=>{let u=He(a?1:o),l=64,d=o/u;d<l&&(l=32);let c=Math.ceil(o/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:d},{type:12,data:c}],f=Xe(e.dataType,u),m=rt(1,u),y=["type"];a&&y.push("type"),s&&y.push("type");let w=b=>{let x=de("x",e.dataType,e.dims,u),S=[x],M=a?X("seq_lens",a.dataType,a.dims):void 0;M&&S.push(M);let I=s?X("total_sequence_length_input",s.dataType,s.dims):void 0;I&&S.push(I);let k=rt(e.dataType),T=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(T).declareVariables(...S)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ni(M,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${x.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},gc=(e,t,n,r,i,o,a,s,u)=>{let l=a+o.kvSequenceLength,d=[o.batchSize,o.numHeads,o.sequenceLength,l],c=e>1&&r,p=o.kvNumHeads?o.kvNumHeads:o.numHeads,f=c?[o.batchSize,p,l,o.headSize]:void 0,m=o.nReps?o.nReps:1,y=o.scale===0?1/Math.sqrt(o.headSize):o.scale,w=He(o.headSize),b=o.headSize/w,x=12,S={x:Math.ceil(l/x),y:Math.ceil(o.sequenceLength/x),z:o.batchSize*o.numHeads},M=[{type:12,data:o.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:o.kvSequenceLength},{type:12,data:m}],I=c&&r&&H.size(r.dims)>0,k=["type","type"];I&&k.push("type"),i&&k.push("type"),s&&k.push("type"),u&&k.push("type");let T=[{dims:d,dataType:t.dataType,gpuDataType:0}];c&&T.push({dims:f,dataType:t.dataType,gpuDataType:0});let v=C=>{let N=X("q",t.dataType,t.dims,w),B=X("key",n.dataType,n.dims,w),q=[N,B];if(I){let W=X("past_key",r.dataType,r.dims,w);q.push(W)}i&&q.push(X("attention_bias",i.dataType,i.dims));let G=s?X("seq_lens",s.dataType,s.dims):void 0;G&&q.push(G);let O=u?X("total_sequence_length_input",u.dataType,u.dims):void 0;O&&q.push(O);let V=de("output",t.dataType,d),Q=[V];c&&Q.push(de("present_key",t.dataType,f,w));let J=rt(1,w),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${C.registerUniforms(he).declareVariables(...q,...Q)}
  ${C.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ni(G,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&c?`
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
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${V.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:M}),getShaderSource:v}},yc=(e,t,n,r,i,o,a=void 0,s=void 0)=>{let u=o+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,d],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&H.size(r.dims)>0,S=["type","type"];x&&S.push("type"),a&&S.push("type"),s&&S.push("type");let M=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&M.push({dims:f,dataType:t.dataType,gpuDataType:0});let I=k=>{let T=X("probs",t.dataType,t.dims),v=X("v",n.dataType,n.dims),C=[T,v];x&&C.push(X("past_value",r.dataType,r.dims));let N=a?X("seq_lens",a.dataType,a.dims):void 0;a&&C.push(N);let B=s?X("total_sequence_length_input",s.dataType,s.dims):void 0;s&&C.push(B);let q=[de("output",t.dataType,m)];c&&q.push(de("present_value",t.dataType,f));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${T.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${T.type.value}, ${y*y}>;
  ${k.registerUniforms(G).declareVariables(...C,...q)}
  ${k.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ni(N,B,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:M,dispatchGroup:w,programUniforms:b}),getShaderSource:I}},wr=(e,t,n,r,i,o,a,s,u,l,d=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(a?1:0)+(s?1:0)),f=p>1?a:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&H.size(u.dims)>0?u:void 0,x=[t,n];f&&H.size(f.dims)>0&&x.push(f),b&&x.push(b),d&&x.push(d),c&&x.push(c);let S=e.compute(gc(p,t,n,f,b,l,y,d,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(mc(S,l.batchSize,l.numHeads,y,l.sequenceLength,w,d,c),{inputs:d&&c?[S,d,c]:[S],outputs:[]});let M=[S,r];m&&H.size(m.dims)>0&&M.push(m),d&&M.push(d),c&&M.push(c),e.compute(yc(p,S,r,m,l,y,d,c),{inputs:M,outputs:p>1?[0,2]:[0]})},wc=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,a=12,s={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=c=>{let p=de("output_q",u[0].dataType,n),f=de("output_k",u[0].dataType,n),m=de("output_v",u[0].dataType,n),y=X("input",u[0].dataType,u[0].dims),w=X("weight",u[1].dataType,u[1].dims),b=X("bias",u[2].dataType,u[2].dims),x=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${c.registerUniforms(S).declareVariables(y,w,b,p,f,m)}
  ${c.mainStart([a,a,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},bc=(e,t)=>{let n=fc(e.inputs,t),[r,i,o]=wc(e,n);return wr(e,r,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),_c,xc,$c,vc,Py=te(()=>{_t(),we(),_e(),je(),$e(),_c=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,o)=>{let a=i.length;if(a!==r.length)throw new Error(`${o}: num dimensions != ${a}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${o}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},xc=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,o=e[0].dims,a=r?He(o[o.length-1]):1,s=i==="NHWC"&&o.length>1?a:1,u=H.size(o)/a,l=r,d=l?o.length:o,c=X("x",e[0].dataType,e[0].dims,a),p=X("scale",e[1].dataType,e[1].dims,s),f=X("bias",e[2].dataType,e[2].dims,s),m=X("inputMean",e[3].dataType,e[3].dims,s),y=X("inputVar",e[4].dataType,e[4].dims,s),w=de("y",e[0].dataType,d,a),b=()=>{let S="";if(r)S=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")S=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let M=1;M<p.rank;M++)S+=`cIndices[${M}] = outputIndices[${M}];`;S+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return S},x=S=>`
  const epsilon = ${n};
  ${S.registerUniform("outputSize","u32").declareVariables(c,p,f,m,y,w)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${a}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...ge(o)]:[{type:12,data:u}]})}},$c=e=>Ne(e),vc=(e,t)=>{let{inputs:n,outputCount:r}=e,i=$c({...t,outputCount:r});if(Le.webgpu.validateInputContent&&_c(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(xc(n,i))}}),Mc,Sc,Ic,Dy=te(()=>{_e(),$e(),Mc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Sc=e=>{let t=e[0].dims,n=e[0].dims[2],r=H.size(t)/4,i=e[0].dataType,o=X("input",i,t,4),a=X("bias",i,[n],4),s=X("residual",i,t,4),u=de("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(o,a,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Ic=e=>{Mc(e.inputs),e.compute(Sc(e.inputs))}}),Ec,Re,Tc,kc,Cc,Ac,Rc,Oc,Nc,zc,Bc,Pc,Dc,Uc,Lc,Fc,br,Gc,ri,Wc,qc,Vc,Hc,jc,Kc,Yc,Xc,Qc,Zc,Jc,ed,td,nd,rd,id,Lo,od,Fo,Go,ad,sd,ud,ld,cd,dd,Wo=te(()=>{we(),_e(),je(),$e(),Ec=(e,t,n,r,i,o,a)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=X("inputData",n,[s],4),d=de("outputData",r,[s],4),c=[{name:"vec_size",type:"u32"}];return a&&c.push(...a),`
      ${e.registerUniforms(c).declareVariables(l,d)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Re=(e,t,n,r,i,o=e.dataType,a,s)=>{let u=[{type:12,data:Math.ceil(H.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>Ec(l,H.size(e.dims),e.dataType,o,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(H.size(l[0].dims)/64/4)},programUniforms:u})}},Tc=e=>{e.compute(Re(e.inputs[0],"Abs","abs"))},kc=e=>{e.compute(Re(e.inputs[0],"Acos","acos"))},Cc=e=>{e.compute(Re(e.inputs[0],"Acosh","acosh"))},Ac=e=>{e.compute(Re(e.inputs[0],"Asin","asin"))},Rc=e=>{e.compute(Re(e.inputs[0],"Asinh","asinh"))},Oc=e=>{e.compute(Re(e.inputs[0],"Atan","atan"))},Nc=e=>{e.compute(Re(e.inputs[0],"Atanh","atanh"))},zc=e=>Ne(e),Bc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Re(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Pc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ne({min:t,max:n})},Dc=(e,t)=>{let n=t||Pc(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Uc=e=>{e.compute(Re(e.inputs[0],"Ceil","ceil"))},Lc=e=>{e.compute(Re(e.inputs[0],"Cos","cos"))},Fc=e=>{e.compute(Re(e.inputs[0],"Cosh","cosh"))},br=e=>Ne(e),Gc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ri=(e="f32")=>`
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
}`,Wc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,ri(t)))},qc=e=>{e.compute(Re(e.inputs[0],"Exp","exp"))},Vc=e=>{e.compute(Re(e.inputs[0],"Floor","floor"))},Hc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,ri(t)))},jc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Kc=e=>{e.compute(Re(e.inputs[0],"Not",t=>`!${t}`))},Yc=e=>{e.compute(Re(e.inputs[0],"Neg",t=>`-${t}`))},Xc=e=>{e.compute(Re(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Qc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Zc=e=>{e.compute(Re(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Jc=e=>Ne(e),ed=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},td=e=>{e.compute(Re(e.inputs[0],"Sin","sin"))},nd=e=>{e.compute(Re(e.inputs[0],"Sinh","sinh"))},rd=e=>{e.compute(Re(e.inputs[0],"Sqrt","sqrt"))},id=e=>{e.compute(Re(e.inputs[0],"Tan","tan"))},Lo=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,od=e=>{e.compute(Re(e.inputs[0],"Tanh",Lo))},Fo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Lo("v")};
}
`,Go=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,ad=e=>{let t=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"FastGelu",Go,Fo(t),void 0,e.inputs[0].dataType))},sd=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Re(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},ud=e=>{e.compute(Re(e.inputs[0],"Log","log"))},ld=(e,t)=>`
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
`,cd=e=>`quick_gelu_impl(${e})`,dd=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Re(e.inputs[0],"QuickGelu",cd,ld(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),hd,pd,fd,Uy=te(()=>{_e(),$e(),Wo(),hd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},pd=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=X("input",e[0].dataType,e[0].dims,4),r=X("bias",e[0].dataType,[e[0].dims[2]],4),i=de("output",e[0].dataType,t,4),o=H.size(t)/4,a=Xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${ri(a)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fd=e=>{hd(e.inputs),e.compute(pd(e.inputs))}}),md,gd,Nt,yd,wd,bd,_d,xd,$d,vd,Md,Sd,Id,Ly=te(()=>{we(),_e(),$e(),md=(e,t,n,r,i,o,a,s,u,l,d,c)=>{let p,f;typeof s=="string"?p=f=(x,S)=>`${s}((${x}),(${S}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=de("outputData",d,r.length,4),y=X("aData",u,t.length,4),w=X("bData",l,n.length,4),b;if(i)if(o){let x=H.size(t)===1,S=H.size(n)===1,M=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||S?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(a||M?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||I?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(S,M,I="")=>{let k=`aData[indexA${M}][componentA${M}]`,T=`bData[indexB${M}][componentB${M}]`;return`
            let outputIndices${M} = ${m.offsetToIndices(`global_idx * 4u + ${M}u`)};
            let offsetA${M} = ${y.broadcastedIndicesToOffset(`outputIndices${M}`,m)};
            let offsetB${M} = ${w.broadcastedIndicesToOffset(`outputIndices${M}`,m)};
            let indexA${M} = offsetA${M} / 4u;
            let indexB${M} = offsetB${M} / 4u;
            let componentA${M} = offsetA${M} % 4u;
            let componentB${M} = offsetB${M} % 4u;
            ${S}[${M}] = ${I}(${p(k,T)});
          `};d===9?b=`
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
      }`},gd=(e,t,n,r,i,o,a=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!H.areEqual(s,u),d=s,c=H.size(s),p=!1,f=!1,m=[l];if(l){let y=Yn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),c=H.size(d);let w=H.size(s)===1,b=H.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,S=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(S);let M=1;for(let I=1;I<d.length;I++){let k=s[s.length-I],T=u[u.length-I];if(k===T)M*=k;else break}M%4===0?(f=!0,p=!0):(w||b||x||S)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>md(y,s,u,d,p,l,f,i,n.dataType,r.dataType,a,o),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(H.size(d)/4)},...ge(s,u,d)]})}},Nt=(e,t,n,r,i,o)=>{e.compute(gd(t,i??"",e.inputs[0],e.inputs[1],n,r,o))},yd=e=>{Nt(e,"Add",(t,n)=>`${t}+${n}`)},wd=e=>{Nt(e,"Div",(t,n)=>`${t}/${n}`)},bd=e=>{Nt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},_d=e=>{Nt(e,"Mul",(t,n)=>`${t}*${n}`)},xd=e=>{let t=X("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Nt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},$d=e=>{Nt(e,"Sub",(t,n)=>`${t}-${n}`)},vd=e=>{Nt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Md=e=>{Nt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Sd=e=>{Nt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Id=e=>{Nt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Ed,Td,kd,Cd,Ad,Rd,Fy=te(()=>{we(),_e(),je(),$e(),Ed=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,o=r.dims.length;e.forEach((a,s)=>{if(s!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==o)throw new Error("input tensors should have the same shape");a.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Td=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,kd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(o):i===0?r.push(`if (inputIndex == ${i}u) { ${o} }`):i===n-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${i}) { ${o} }`)}return r.join(`
`)},Cd=(e,t,n,r)=>{let i=H.size(n),o=new Array(e.length),a=new Array(e.length),s=0,u=[],l=[],d=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],o[y]=s,l.push(e[y].dims.length),a[y]=X(`input${y}`,r,l[y]),u.push("rank"),d.push({type:12,data:o[y]});for(let y=0;y<e.length;++y)d.push(...ge(e[y].dims));d.push(...ge(n));let c=de("output",r,n.length),p=c.indicesGet("indices",t),f=Array.from(Array(o.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...a,c)})()}

  ${Td(o.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${kd(a,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:m}},Ad=(e,t)=>{let n=e.inputs,r=n[0].dims,i=H.normalizeAxis(t.axis,r.length);Ed(n,i);let o=r.slice();o[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(s=>H.size(s.dims)>0);e.compute(Cd(a,i,o,n[0].dataType),{inputs:a})},Rd=e=>Ne({axis:e.axis})}),Cn,An,Rn,qo,On=te(()=>{we(),_e(),Cn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},An=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Rn=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},qo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[tl,nl];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),et,Od,Vo=te(()=>{et=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Od=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Nd,Gy=te(()=>{Nd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),_r,Ho,jo=te(()=>{we(),_e(),$e(),On(),_r=(e,t,n,r,i)=>{let o=r-n;return`
      ${Array.from({length:n}).map((a,s)=>`
      if (${pe(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,pe(i,s+o,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},Ho=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a[a.length-2],l=s[s.length-1],d=a[a.length-1],c=He(l),p=He(d),f=He(u),m=H.size(n)/c/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[H.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];An(t,x),x.push(...ge(w,a,s)),y&&x.push(...ge(e[2].dims)),x.push(...ge(b));let S=M=>{let I=Oo("batch_dims",e[0].dataType,w.length),k=X("a",e[0].dataType,a.length,p),T=X("b",e[1].dataType,s.length,c),v=de("output",e[0].dataType,b.length,c),C=Xe(v.type.tensor),N=Cn(t,v.type.value,C),B=[k,T],q="";if(y){let V=i?c:1;B.push(X("bias",e[2].dataType,e[2].dims.length,V)),q=`${i?`value += bias[col / ${V}];`:`value += ${v.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Rn(t,G);let O=()=>{let V=`var a_data: ${k.type.value};`;for(let Q=0;Q<p;Q++)V+=`
              let b_data${Q} = b[(b_offset + (k + ${Q}) * uniforms.N + col) / ${c}];`;for(let Q=0;Q<f;Q++){V+=`a_data = a[(a_offset + (row + ${Q}) * uniforms.K + k) / ${p}];`;for(let J=0;J<p;J++)V+=`
            values[${Q}] = fma(${T.type.value}(a_data${p===1?"":`[${J}]`}), b_data${J}, values[${Q}]);
`}return V};return`
  ${M.registerUniforms(G).registerInternalVariables(I).declareVariables(...B,v)}
  ${M.mainStart()}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${_r("a_indices",k,k.rank-2,I.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${T.type.indices};
    ${_r("b_indices",T,T.rank-2,I.rank,"batch_indices")}
    ${T.indicesSet("b_indices",T.rank-2,0)}
    ${T.indicesSet("b_indices",T.rank-1,0)}
    let b_offset = ${T.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${p}) {
      ${O()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${q}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:S}}}),zd,Bd,Ko,Yo,Pd,Xo,Dd,ii,Qo=te(()=>{we(),_e(),$e(),On(),jo(),Vo(),zd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Bd=(e,t)=>e?`
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
        }`,Ko=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=i?u:o,c=i?o:u,p=d/t[0],f=o/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&d%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${p} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${p}<${n}>, ${d/p}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${p};
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
  let batch = ${a?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(s/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${zd(i,r)}
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

          ${Bd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Yo=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Pd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Xo=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],c=i?l:o,p=i?o:l;if(!(p%t[1]===0&&c%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=c/t[0],y=o/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Yo(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
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
      ${Yo(i,r)}
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
      ${Pd(i)}
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
  var<workgroup> mm_Bsub : array<array<${n}, ${d}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(s/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${w}
  }
`},Dd=(e,t,n,r,i=!1)=>{let[o,a,s,u]=r,l=Xe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${et(e,l)} {
      var value = ${et(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${_r("aIndices",a,a.rank-2,o.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${et(e,l)} {
      var value = ${et(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${_r("bIndices",s,s.rank-2,o.rank,"batchIndices")}
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
    `},ii=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a.slice(0,-2),l=s.slice(0,-2),d=r?r.slice(0,-2):n.slice(0,-2),c=H.size(d),p=a[a.length-2],f=a[a.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(c/b[2]/w[2])],S=y?4:1,M=[...u,p,f/S],I=M.length,k=[...l,f,m/S],T=k.length,v=[c,p,m/S],C=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];An(t,C),C.push(...ge(d,M,k));let N=["rank","rank"],B=e.length>2;B&&(C.push(...ge(e[2].dims)),N.push("rank")),C.push(...ge(v));let q=G=>{let O=d.length,V=Oo("batchDims",e[0].dataType,O,1),Q=Xe(e[0].dataType),J=X("a",e[0].dataType,I,S),he=X("b",e[1].dataType,T,S),W=de("result",e[0].dataType,v.length,S),P=[J,he];if(B){let Y=i?S:1;P.push(X("bias",e[2].dataType,e[2].dims.length,Y))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Rn(t,R);let z=Xe(W.type.tensor),D=Cn(t,W.type.value,z),F=Dd(S,B,D,[V,J,he,W],i);return`
  ${G.registerUniforms(R).registerInternalVariables(V).declareVariables(...P,W)}
  ${F}
  ${y?Ko(w,b,Q,V):Xo(w,b,Q,V)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:C}),getShaderSource:q}}}),Ud,Ld,Wy=te(()=>{we(),Qt(),$e(),On(),Vo(),Gy(),Qo(),Ud=(e,t,n,r,i=!1,o,a=4,s=4,u=4,l="f32")=>{let d=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},c=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},p=e?`
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
    var resData = ${et(a,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${p}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(a)}
    }
    return resData;`,S=e?t&&r?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${et(a,l)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${et(a,l)}(0.0);`,M=e?r&&n?c(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(s)}
    }
    return ${et(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(s)}
    }
    return ${et(s,l)}(0.0);`,I=et(u,l),k=et(e?a:s,l),T=et(e?s:a,l),v=Cn(o,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?S:M}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?M:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${Od(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ld=(e,t,n,r,i,o,a,s,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(d%4===0||d%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],S=r<=8?[4,1,1]:[4,4,1],M=[Math.ceil(w/x[0]/S[0]),Math.ceil(b/x[1]/S[1]),Math.ceil(c/x[2]/S[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${M}`);let I=y?l&&d%4!==0?3:4:1,k=x[1]*S[1],T=x[0]*S[0],v=Math.max(x[0]*I,x[1]),C=r%k===0,N=i%T===0,B=o%v===0,q=y?[I,4,4]:[1,1,1],G=[{type:6,data:r},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];An(t,G),G.push(...ge(e[0].dims,e[1].dims));let O=["rank","rank"];a&&(G.push(...ge(e[2].dims)),O.push("rank")),G.push(...ge(n));let V=Q=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Rn(t,J);let he=y?4:1,W=Xe(e[0].dataType),P=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${W}>`:W}) {
        result[flatIndex] = ${y?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=X("x",e[0].dataType,e[0].dims.length,I===3?1:I),z=X("w",e[1].dataType,e[1].dims.length,he),D=[R,z],F=de("result",e[0].dataType,n.length,he);if(a){let Y=X("bias",e[2].dataType,e[2].dims.length,he);D.push(Y),P+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Nd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Q.registerUniforms(J).declareVariables(...D,F)}
        ${P}
        ${Ud(l,C,N,B,a,t,q[0],q[1],q[2],W)}
        ${y?Ko(S,x,W,void 0,!l,v):Xo(S,x,W,void 0,!l,v,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${C};${N};${B};${k};${T};${v}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:M[0],y:M[1],z:M[2]},programUniforms:G}),getShaderSource:V}}}),Fd,Zo,xr,Gd,Jo,Wd,qd,Vd,qy=te(()=>{we(),Qt(),_e(),$e(),On(),Vo(),Fd=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Zo=e=>typeof e=="number"?[e,e,e]:e,xr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Gd=(e,t,n,r=1)=>{let i=xr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Jo=(e,t,n,r,i)=>{i==null&&(i=Gd(e,t[0],r[0]));let o=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(o[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return o},Wd=(e,t,n,r,i,o,a,s,u,l)=>{let d,c,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Jo([t,n,r,1],[s,u,l],1,[i,o,a],e);c=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Jo([t,n,r,1],[s,u,l],1,[i,o,a],e[0]);c=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/o),f=Math.ceil(r/a);let m=(c-1)*i+s-t,y=(p-1)*o+u-n,w=(f-1)*a+l-r,b=Math.floor(m/2),x=m-b,S=Math.floor(y/2),M=y-S,I=Math.floor(w/2),k=w-I;d={top:S,bottom:M,left:I,right:k,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:c,outHeight:p,outWidth:f}},qd=(e,t,n,r,i,o=!1,a="channelsLast")=>{let s,u,l,d,c;if(a==="channelsLast")[s,u,l,d,c]=e;else if(a==="channelsFirst")[s,c,u,l,d]=e;else throw new Error(`Unknown dataFormat ${a}`);let[p,,f,m,y]=t,[w,b,x]=Zo(n),[S,M,I]=Zo(r),k=xr(f,S),T=xr(m,M),v=xr(y,I),{padInfo:C,outDepth:N,outHeight:B,outWidth:q}=Wd(i,u,l,d,w,b,x,k,T,v),G=o?p*c:p,O=[0,0,0,0,0];return a==="channelsFirst"?O=[s,G,N,B,q]:a==="channelsLast"&&(O=[s,N,B,q,G]),{batchSize:s,dataFormat:a,inDepth:u,inHeight:l,inWidth:d,inChannels:c,outDepth:N,outHeight:B,outWidth:q,outChannels:G,padInfo:C,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:k,effectiveFilterHeight:T,effectiveFilterWidth:v,dilationDepth:S,dilationHeight:M,dilationWidth:I,inShape:e,outShape:O,filterShape:t}},Vd=(e,t,n,r,i,o)=>{let a=o==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(Fd(u.x.map(w=>n[w]))/s[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,c=H.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];An(t,p),p.push(...ge(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...ge(e[2].dims)),f.push("rank")),p.push(...ge(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Rn(t,b);let x=1,S=Xe(e[0].dataType),M=X("x",e[0].dataType,e[0].dims.length,d),I=X("W",e[1].dataType,e[1].dims.length,x),k=[M,I],T=de("result",e[0].dataType,n.length,x),v="";if(m){let B=X("bias",e[2].dataType,e[2].dims.length,x);k.push(B),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${a?pe("coords",4,5):pe("coords",1,5)}];
        }`}let C=et(d,S),N=Cn(t,C,S);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...k,T)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${T.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,M.rank)};
              let d2 = ${a?pe("coords",M.rank-1,M.rank):pe("coords",1,M.rank)};
              let xFRCCorner = vec3<u32>(${a?pe("coords",1,M.rank):pe("coords",2,M.rank)},
              ${a?pe("coords",2,M.rank):pe("coords",3,M.rank)},
              ${a?pe("coords",3,M.rank):pe("coords",4,M.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?pe("uniforms.x_shape",1,M.rank):pe("uniforms.x_shape",2,M.rank)};
              let xShapeZ = ${a?pe("uniforms.x_shape",2,M.rank):pe("uniforms.x_shape",3,M.rank)};
              let xShapeW = ${a?pe("uniforms.x_shape",3,M.rank):pe("uniforms.x_shape",4,M.rank)};
              let xShapeU = ${a?pe("uniforms.x_shape",4,M.rank):pe("uniforms.x_shape",1,M.rank)};
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
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${d};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Hd,jd,Vy=te(()=>{we(),_e(),$e(),On(),Hd=(e,t,n,r)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",a=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],d=l/t.group,c=u&&d>=4?He(l):1,p=H.size(n)/c,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];An(t,f),f.push(...ge(a,[s[0],s[1],s[2],s[3]/c]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...ge([n[0],n[1],n[2],n[3]/c]));let y=w=>{let b=de("output",e[0].dataType,n.length,c),x=Xe(b.type.tensor),S=Cn(t,b.type.value,x),M=X("x",e[0].dataType,a.length),I=X("w",e[1].dataType,s.length,c),k=[M,I];i&&k.push(X("b",e[2].dataType,e[2].dims,c));let T=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Rn(t,T);let v=u?`
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
            let xVal = ${M.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${M.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(T).declareVariables(...k,b)}

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
    ${o}
    ${S}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},jd=(e,t,n,r)=>{let i=e.length>2,o=He(n[3]),a=He(n[2]),s=H.size(n)/o/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],d=[n[0],n[1],n[2],n[3]/o],c=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];An(t,c),c.push(...ge(u,l,d));let p=(a-1)*t.strides[1]+l[1],f=m=>{let y=de("output",e[0].dataType,d.length,o),w=Xe(y.type.tensor),b=Cn(t,y.type.value,w),x=X("x",e[0].dataType,u.length,o),S=X("w",e[1].dataType,l.length,o),M=[x,S];i&&M.push(X("b",e[2].dataType,e[2].dims,o));let I=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Rn(t,k),`
  ${m.registerUniforms(k).declareVariables(...M,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${x.type.value}, ${p}>;
    var values: array<${y.type.value}, ${a}>;
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
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${I}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${a};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}}}),Kd,oi,Yd,ai,ea,ta,Xd,Qd,na,Hy=te(()=>{_e(),Wy(),qy(),Qo(),Vy(),On(),jo(),cn(),Kd=(e,t,n,r,i,o)=>{let a=e[0],s=e.slice(o?1:2,o?3:4),u=s.length,l=t[0],d=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),c=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-d[f]+i[f])/i[f]));return c.splice(0,0,a),c.splice(o?3:1,0,l),c},oi=[2,3,1,0],Yd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ai=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let r=e.pads.slice();Qr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ea=e=>{let t=qo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,a=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},ta=(e,t,n,r)=>{let i=n.format==="NHWC",o=Kd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let T=e.kernelCustomData.wT??e.compute(wt(t[1],oi),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T),k.push(T)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(jd(k,n,o,r),{inputs:k}):e.compute(Hd(k,n,o,r),{inputs:k});return}let a=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],c=t[1].dims[3],p=o[i?1:2],f=o[i?2:3],m=o[i?3:1],y=i&&d===s&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||d===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=o[0],T,v,C,N=[];if(i){let G=e.kernelCustomData.wT??e.compute(wt(t[1],oi),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),y){let O=s*u*l;T=t[0].reshape([1,k,O]),v=G.reshape([1,O,m]),C=[1,k,m]}else T=t[0].reshape([k,s*u,l]),v=G.reshape([1,l,m]),C=[k,p*f,m];N.push(T),N.push(v)}else T=t[0].reshape([k,l,s*u]),v=t[1].reshape([1,m,l]),C=[k,m,p*f],N.push(v),N.push(T);a&&N.push(t[2]);let B=C[2],q=N[0].dims[N[0].dims.length-1];B<8&&q<8?e.compute(Ho(N,n,o,C,i,r),{inputs:N}):e.compute(ii(N,n,o,C,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(wt(t[1],oi),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];a&&x.push(t[2]);let S=i?p*f:m,M=i?m:p*f,I=d*c*l;e.compute(Ld(x,n,o,S,M,I,a,w,r),{inputs:x})},Xd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),a=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=ai({...t,pads:i,strides:o,dilations:a,kernelShape:s},r);ta(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Qd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=ai(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=qd(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,r);e.compute(Vd(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},na=(e,t)=>{if(Yd(e.inputs,t),e.inputs[0].dims.length===3)Xd(e,t);else if(e.inputs[0].dims.length===5)Qd(e,e.inputs,t);else{let n=ai(t,e.inputs);ta(e,e.inputs,n)}}}),Zd,jy=te(()=>{we(),Qt(),_e(),$e(),Zd=(e,t,n)=>{let r=e.length>2,i=t.outputShape,o=t.format==="NHWC",a=t.group,s=e[1].dims,u=s[2]/a,l=s[3],d=o?He(u):1,c=o&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/d)*d,f=u-p,m=o?He(l):1,y=o?l===1?d:m:1,w=H.size(i)/m,b=[Math.ceil(w/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],S=[t.strides[0],t.strides[1]],M=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],I=[t.dilations[0],t.dilations[1]],k=[M[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),M[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],T=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:w},{type:12,data:S},{type:12,data:M},{type:12,data:I},{type:12,data:k},{type:6,data:T},{type:12,data:p},{type:12,data:u},{type:12,data:l},...ge(e[0].dims,e[1].dims)];r&&(v.push(...ge(e[2].dims)),x.push("rank")),v.push(...ge(i));let C=N=>{let B=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:M.length},{name:"dilations",type:"u32",length:M.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],q=Xe(e[0].dataType),G=o?1:2,O=o?2:3,V=o?3:1,Q=X("W",e[1].dataType,e[1].dims.length,y),J=X("Dy",e[0].dataType,e[0].dims.length,d),he=[J,Q];r&&he.push(X("bias",e[2].dataType,[i[V]].length,m));let W=de("result",e[0].dataType,i.length,m),P=()=>{let D="";if(c)d===4?D+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${Q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?D+=`
          dotProd = dotProd + dot(vec4<${q}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${q}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(D+=`
          dotProd = dotProd + dot(vec4<${q}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${q}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}, ${Q.getByOffset("w_offset + 2u")}, ${Q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(D+=`
                  let xValue = ${o?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):J.get("batch","inputChannel","idyR","idyC")};
        `,d===1)D+=`
          let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Q.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let F=0;F<d;F++)D+=`
            let wValue${F} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${F}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${F}] * wValue${F};`;return D},R=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let D="";if(d===1){D+="dotProd = dotProd";for(let F=0;F<f;F++)D+=`
            + ${J.getByOffset(`x_offset + ${F}`)} * ${Q.getByOffset(`w_offset + ${F}`)}`;D+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);D+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${Q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return D},z=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",V)};
            let r = ${W.indicesGet("outputIndices",G)};
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
              let dyR = (${q}(dyRCorner) + ${q}(wR)) / ${q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${q}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${q}(dyCCorner) + ${q}(wC)) / ${q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${q}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${Q.indicesToOffset(`${Q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:d}) {
                  ${P()}
                  inputChannel = inputChannel + ${c?4:d};
                }
                ${R()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(B).declareVariables(...he,W)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${m}${c}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:C}}}),Jd,eh,th,ra,nh,rh,ia,ih,oh,Ky=te(()=>{jy(),On(),cn(),Jd=(e,t,n,r,i,o)=>(e-1)*t+n+(r-1)*i+1-o,eh=(e,t,n,r,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=o,n[i]=e-o):t==="SAME_LOWER"&&(n[r]=e-o,n[i]=o)},th=(e,t,n,r,i,o,a,s,u,l)=>{let d=e.length-2,c=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-d-(s?1:0);m<d;++m,++y){let w=e[y],b=c?w*a[m]:l[m],x=Jd(w,a[m],o[m],t[y],n[m],b);eh(x,r,o,m,m+d),c&&l.push(a[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-o[m]-o[m+d])}l.splice(0,0,p),l.splice(s?3:1,0,f)},ra=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),a=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}th(s,n,u,e.autoPad,e.group,i,l,r,a,o);let d=Object.assign({},e);return Object.assign(d,{kernelShape:n,pads:i,outputPadding:a,outputShape:o,dilations:u,strides:l}),d},nh=e=>{let t=qo(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group??1,a=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,outputPadding:d,outputShape:c,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},rh=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((a,s)=>a+s,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((a,s)=>a+s,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((a,s)=>a+s,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((a,s)=>a+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ia=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(wt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(Zd(o,n,r),{inputs:o})},ih=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],a=[1].concat(a),o=[1].concat(o),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=ra({...t,pads:s,strides:a,dilations:o,kernelShape:i,outputPadding:u},r);ia(e,r,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},oh=(e,t)=>{if(rh(e.inputs,t),e.inputs[0].dims.length===3)ih(e,t);else{let n=ra(t,e.inputs);ia(e,e.inputs,n)}}}),ah,sh,uh,Yy=te(()=>{we(),_e(),je(),$e(),ah=(e,t,n,r)=>{let i=H.size(t),o=t.length,a=X("input",e,o),s=de("output",e,o),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=H.normalizeAxis(u,o),d=c=>{let p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=pe("uniforms.input_shape","uniforms.axis",o),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,s)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...ge(t,t)]}),getShaderSource:d}},sh=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(ah(r,n,i,t),{inputs:[0]})},uh=e=>{let t=e.exclusive===1,n=e.reverse===1;return Ne({exclusive:t,reverse:n})}}),lh,ch,dh,hh,ph,Xy=te(()=>{we(),_e(),je(),$e(),lh=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ch=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)i.push(n.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},dh=(e,t)=>{let n,r,i,o,a,s,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([n,r,i,o]=e.dims,a=d?[n,r,i,l,l,o/l**2]:[n,r,i,o/l**2,l,l],s=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=d?[n,l,l,o/l**2,r,i]:[n,o/l**2,l,l,r,i],s=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(a),p=c.dims.length,f=e.dataType,m=X("a",f,p),y=de("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${ch(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,o/l**2]:[n,o/l**2,r*l,i*l],S=H.size(x),M=c.dims,I=H.sortBasedOnPerm(M,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ge(M,I)]}},getShaderSource:w}},hh=(e,t)=>{lh(e.inputs),e.compute(dh(e.inputs[0],t))},ph=e=>Ne({blocksize:e.blocksize,mode:e.mode,format:e.format})}),si,$r,oa,fh,mh,gh,yh,aa,wh,bh,_h,Qy=te(()=>{we(),_e(),je(),$e(),si="[a-zA-Z]|\\.\\.\\.",$r="("+si+")+",oa="^"+$r+"$",fh="("+$r+",)*"+$r,mh="^"+fh+"$",gh=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},yh=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(mh)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,a)=>{let s=e[a].dims.slice();if(!o.match(RegExp(oa)))throw new Error("Invalid LHS term");let u=this.processTerm(o,!0,s,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([o,a])=>a.count===1||o==="...").map(([o])=>o).join("");else if(!r.match(RegExp($r)))throw new Error("Invalid RHS");(i=r.match(RegExp(si,"g")))==null||i.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(o);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,o=!1,a=[],s=0;if(!e.match(RegExp(oa))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(si,"g")),l=new gh(r);return u==null||u.forEach((d,c)=>{if(d==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,c+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(d,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[s++],r)}),l}},aa=e=>e+"_max",wh=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,d)=>X(`input${d}`,t,l)),o=H.size(r),a=de("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let d=[],c="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((M,I)=>{var k;if(n.rhs.symbolToIndices.has(I)){let T=(k=n.rhs.symbolToIndices.get(I))==null?void 0:k[0];T!==void 0&&n.lhs.forEach((v,C)=>{if(M.inputIndices.includes(C)){let N=v.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(B=>{d.push(`${i[C].indicesSet(`input${C}Indices`,B,a.indicesGet("outputIndices",T))}`)})}})}else n.lhs.forEach((T,v)=>{if(M.inputIndices.includes(v)){let C=T.symbolToIndices.get(I);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(N=>{m.push(`${i[v].indicesSet(`input${v}Indices`,N,`${I}`)}`)}),b.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${aa(I)}; ${I}++) {`),w.push("}")});let S=x?[...d,`let sum = ${i.map((M,I)=>M.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...d,p,...y,...m,c,...b,f,...w];return`
            ${l.registerUniforms(s.map(M=>({name:`${aa(M)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((M,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:o});let d=e.map((c,p)=>[...ge(c)]).reduce((c,p)=>c.concat(p),l);return d.push(...ge(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}},getShaderSource:u}},bh=(e,t)=>{let n=new yh(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((o,a)=>o.dims);e.compute(wh(i,e.inputs[0].dataType,n,r))},_h=e=>{let t=e.equation.replace(/\s+/g,"");return Ne({equation:t})}}),xh,sa,$h,vh,Mh,Zy=te(()=>{we(),_e(),$e(),xh=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},sa=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},$h=(e,t)=>e.length>t.length?sa(e,t):sa(t,e),vh=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=$h(t,n),i=e[0].dataType,o=i===9||H.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=o||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(H.size(r)/s),l=c=>{let p=X("input",i,t.length,a),f=de("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
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
        let data = ${f.type.value}(${p.getByOffset(`inputOffset / ${a}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(p,f)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...ge(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},Mh=e=>{xh(e.inputs),e.compute(vh(e.inputs),{inputs:[0]})}}),Sh,Ih,Jy=te(()=>{we(),_e(),$e(),Wo(),Sh=e=>{let t=e[0].dataType,n=H.size(e[0].dims),r=H.size(e[1].dims),i=r%4===0,o=a=>{let s=X("x",t,[1],4),u=X("bias",t,[1],4),l=de("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(d).declareVariables(s,u,l)}

    ${Fo(rt(t))}

    ${a.mainStart(Xn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Go("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Xn/4)}})}},Ih=e=>{e.inputs.length<2||H.size(e.inputs[1].dims)===0?ad(e):e.compute(Sh(e.inputs))}}),Eh,Th,kh,Ch,ew=te(()=>{we(),_e(),je(),$e(),Eh=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Th=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=H.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(o,1,...r);let s=n[o],u=e[0].dataType===9?4:1,l=Math.ceil(H.size(a)/u),d=[{type:12,data:l},{type:6,data:s},{type:12,data:o},...ge(e[0].dims,e[1].dims,a)],c=p=>{let f=X("data",e[0].dataType,e[0].dims.length,u),m=X("inputIndices",e[1].dataType,e[1].dims.length),y=de("output",e[0].dataType,a.length,u),w=x=>{let S=r.length,M=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let I=0;I<S;I++)M+=`${S>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;M+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let I=0,k=0;I<i;I++)I===o?(M+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,k+=S):(M+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${k}]`:`outputIndices${x}`};`,k++);return M},b;if(e[0].dataType===9){let x=(S,M,I="")=>`
          let outputIndices${M} = ${y.offsetToIndices(`outputOffset + ${M}u`)};
          ${w(M)};
          let offset${M} = ${f.indicesToOffset(`dataIndices${M}`)};
          let index${M} = offset${M} / 4u;
          let component${M} = offset${M} % 4u;
          ${S}[${M}] = ${I}(${f.getByOffset(`index${M}`)}[component${M}]);
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c}},kh=e=>Ne({axis:e.axis}),Ch=(e,t)=>{let n=e.inputs;Eh(n),e.compute(Th(e.inputs,t))}}),Ah,Rh,Oh,tw=te(()=>{we(),_e(),$e(),Ah=(e,t,n,r,i,o,a,s,u)=>{let l=[{type:12,data:o},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:12,data:u}],d=[o];l.push(...ge(t.dims,d));let c=p=>{let f=X("indices_data",t.dataType,t.dims.length),m=de("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},Rh=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,o=n[1].dims,a=o[o.length-1],s=H.sizeToDimension(o,o.length-1),u=H.sizeFromDimension(r,t.batchDims+a),l=H.sizeToDimension(r,t.batchDims),d=H.sizeFromDimension(r,t.batchDims),c=s/l,p=new Array(a),f=u;for(let M=0;M<a;++M)p[a-1-M]=f,f*=r[t.batchDims+a-1-M];let m=Ah(e,n[1],p,t.batchDims,r,s,c,d,a),y=t.batchDims+a;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=o.slice(0,-1).concat(r.slice(y)),b=H.size(w),x=[{type:12,data:b},{type:12,data:u},...ge(n[0].dims,m.dims,w)],S=M=>{let I=X("data",n[0].dataType,n[0].dims.length),k=X("slice_offsets",12,m.dims.length),T=de("output",n[0].dataType,w.length);return`
          ${M.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,k,T)}
            ${M.mainStart()}
            ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:S},{inputs:[n[0],m]})},Oh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Nh,zh,Bh,Ph,nw=te(()=>{we(),_e(),je(),$e(),Nh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=H.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],o=e[2],a=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===o.dims[u]:s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==o.dims.length||!a.dims.map((s,u)=>s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},zh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=H.normalizeAxis(t.gatherAxis,i),a=H.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(o,1,...r);let u=H.size(s),l=e[2].dataType,d=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:a},{type:12,data:o},{type:12,data:t.blockSize},...ge(...e.map((f,m)=>f.dims),s)],p=f=>{let m=X("data",e[0].dataType,e[0].dims.length),y=X("inputIndices",e[1].dataType,e[1].dims.length),w=X("scales",e[2].dataType,e[2].dims.length),b=e.length>3?X("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=de("output",l,s.length),S=[m,y,w];b&&S.push(b);let M=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms(M).declareVariables(...S,x)}
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
          index_from_indices += ${n[o]};
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
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${rt(l)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},Bh=(e,t)=>{let n=e.inputs;Nh(n,t),e.compute(zh(e.inputs,t))},Ph=e=>Ne({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Dh,Uh,Lh,Fh,rw=te(()=>{we(),_e(),je(),$e(),Dh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Uh=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,o=e[1].dims,a=e[1].dataType,s=H.normalizeAxis(t.axis,i),u=n[s],l=o.slice(0),d=H.size(l),c=X("input",r,i),p=X("indicesInput",a,o.length),f=de("output",r,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:s}];return m.push(...ge(n,o,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},Lh=e=>Ne({axis:e.axis}),Fh=(e,t)=>{let n=e.inputs;Dh(n),e.compute(Uh(e.inputs,t))}}),Gh,Wh,qh,Vh,iw=te(()=>{we(),_e(),$e(),Gh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Wh=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,o,a]=el.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,o];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(o/u),d=Math.ceil(i/u),c=!0,p=H.size(s),f=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...ge(e[2].dims)),m.push("rank")),f.push(...ge(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",M=X("a",e[0].dataType,e[0].dims),I=X("b",e[1].dataType,e[1].dims),k=M.type.value,T=null,v=[M,I];e.length===3&&(T=X("c",e[2].dataType,e[2].dims.length),v.push(T));let C=de("output",e[0].dataType,s.length);v.push(C);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(N).declareVariables(...v)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${S}
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${k}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=X("a",e[0].dataType,e[0].dims),S=X("b",e[1].dataType,e[1].dims),M=null,I=[x,S];e.length===3&&(M=X("c",e[2].dataType,e[2].dims.length),I.push(M));let k=de("output",e[0].dataType,s.length);I.push(k);let T=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",C="";t.transA&&t.transB?(C=`
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(T).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${u}>, ${u}>;
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
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${k.type.value}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},qh=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Vh=(e,t)=>{Gh(e.inputs),e.compute(Wh(e.inputs,t))}}),Gt,Zt,Nn,zn,Hh,jh,Kh,Yh,Xh,Qh,Zh,Jh,ep,tp,ow=te(()=>{we(),_e(),je(),$e(),[Gt,Zt,Nn,zn]=[0,1,2,3],Hh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},jh=`
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
`,Kh=e=>`
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
`,Yh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Xh=e=>`
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
`,Qh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Gt}] = batch;
     indices[${Zt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Nn}] = u32(r);
            indices[${zn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Nn}] = u32(clamp(r, 0, H - 1));
          indices[${zn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Nn}] = gs_reflect(r, border[1], border[3]);
          indices[${zn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Zh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Gt}], indices[${Zt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Gt}], indices[${Zt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Gt}], indices[${Zt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Gt}], indices[${Zt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Gt}], indices[${Zt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Gt}], indices[${Zt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Jh=(e,t)=>{let n=X("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=X("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Gt,Zt,Nn,zn]=[0,3,1,2]);let a=de("output",e[0].dataType,o.length),s=n.type.value,u=H.size(o),l=[{type:12,data:u},...ge(e[0].dims,r,o)],d=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${jh}
  ${Kh(s)}
  ${Yh(t)}
  ${Xh(t)}
  ${Qh(n,s,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Nn}]);
      let W_in = i32(uniforms.x_shape[${zn}]);

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
      var grid_indices = vec3<u32>(indices[${Gt}], indices[${Nn}], indices[${zn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Zh(a,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=H.size(o);return{outputs:[{dims:o,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:d}},ep=(e,t)=>{Hh(e.inputs),e.compute(Jh(e.inputs,t))},tp=e=>Ne({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ot,np,rp,ua,ip,vr,op,ap=te(()=>{we(),_e(),je(),To(),Uo(),$e(),cn(),ot=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,np=(e,t)=>{let n=e[0],r=ot(e,1),i=ot(e,2),o=ot(e,3),a=ot(e,4),s=ot(e,5),u=ot(e,6),l=ot(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=c,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&H.size(u.dims)&&H.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&H.size(u.dims)||l&&H.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&H.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(o&&H.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,S=0;if(a&&H.size(a.dims)>0){S=8;let T=a.dims;throw T.length===1?T[0]===d?S=1:T[0]===3*d+2&&(S=3):T.length===2&&T[0]===d&&T[1]===x&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let M=!1,I=p;if(i&&H.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],M=!0}}let k=!1;if(a&&H.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(s&&H.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==d||s.dims[1]!==t.numHeads||s.dims[2]!==c||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:w,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:k,passPastInKv:M,qkvFormat:b}},rp=e=>Ne({...e}),ua=Ne({perm:[0,2,1,3]}),ip=(e,t,n,r,i,o,a)=>{let s=[r,i,o],u=H.size(s),l=[{type:12,data:u},{type:12,data:a},{type:12,data:o}],d=c=>{let p=de("qkv_with_bias",t.dataType,s),f=X("qkv",t.dataType,s),m=X("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,n],outputs:[-1]})[0]},vr=(e,t,n,r,i,o,a,s)=>{let u=o;if(a&&H.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=ip(e,o,a,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(wt(u,ua.perm),{inputs:[u],outputs:[-1]})[0]}else return o.dims.length===3&&(u=o.reshape([t,r,n,i])),n===1||r===1?u:e.compute(wt(u,ua.perm),{inputs:[u],outputs:[-1]})[0]},op=(e,t)=>{let n=np(e.inputs,t),r=e.inputs[0],i=ot(e.inputs,1),o=ot(e.inputs,2),a=ot(e.inputs,3),s=ot(e.inputs,4),u=ot(e.inputs,5),l=ot(e.inputs,6),d=ot(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&o&&i.dims.length===4&&o.dims.length===4,p=vr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(c)return wr(e,p,i,o,s,void 0,l,d,u,n);if(!i||!o)throw new Error("key and value must be provided");let f=vr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),m=vr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,a,2*n.hiddenSize);wr(e,p,f,m,s,void 0,l,d,u,n)}}),sp,up,lp,cp,la,dp,hp,pp=te(()=>{we(),_e(),je(),$e(),sp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},up=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Ne({numOutputs:r,axis:t.axis,splitSizes:n})},lp=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,cp=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},la=(e,t)=>{let n=e[0].dims,r=H.size(n),i=e[0].dataType,o=H.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),s=X("input",i,n.length),u=new Array(t.numOutputs),l=[],d=[],c=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;let y=n.slice();y[o]=t.splitSizes[m],d.push(y),a[m]=de(`output${m}`,i,y.length),l.push({dims:d[m],dataType:e[0].dataType})}p.push({type:12,data:u},...ge(n,...d));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...a)}
  ${lp(u.length)}
  ${cp(a)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${s.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},dp=(e,t)=>{sp(e.inputs);let n=e.inputs.length===1?t:up(e.inputs,t);e.compute(la(e.inputs,n),{inputs:[0]})},hp=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Ne({axis:t,numOutputs:r,splitSizes:n})}}),fp,ui,mp,gp=te(()=>{we(),_e(),je(),$e(),fp=(e,t)=>{let[n,r,i,o]=e,{numHeads:a,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!H.areEqual(r.dims,[])&&!H.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!H.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],d=i.dims[0],c=H.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:c/a;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},ui=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:o}=t,a=e[0].dims[0],s=H.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,d=e[2].dims[1],c=i===0?d*2:l/r,p=new Array(a,u,l/c,c-d),f=H.computeStrides(p),m=[{type:1,data:o},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,c,u*c,1]}):[],...ge(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=X("input",e[0].dataType,e[0].dims.length),x=X("position_ids",e[1].dataType,e[1].dims.length),S=X("cos_cache",e[2].dataType,e[2].dims.length),M=X("sin_cache",e[3].dataType,e[3].dims.length),I=de("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,S,M,I)}

        ${w.mainStart(Xn)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",de("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ne({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(H.size(p)/Xn)},programUniforms:m})}},mp=(e,t)=>{fp(e.inputs,t),e.compute(ui(e.inputs,t))}}),yp,wp,ca,bp,_p,aw=te(()=>{je(),we(),Uo(),ap(),pp(),cn(),gp(),$e(),yp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],d=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);f&&(d=m*t.numHeads);let y=o&&o.dims.length!==0,w=a&&a.dims.length!==0;if(y&&o.dims.length===4&&o.dims[0]===u&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=o.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,S=!1,M=t.kvNumHeads?m*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');M=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');M=i.dims[1]*i.dims[3],S=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=I.dims.reduce((T,v)=>T*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let T=0;T<I.dims.length;T++)if(I.dims[T]!==1&&I.dims[T]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${T}] = ${I.dims[T]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:M,headSize:m,vHeadSize:Math.floor(M/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:b}},wp=Ne({perm:[0,2,1,3]}),ca=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(wt(r,wp.perm),{inputs:[r],outputs:[-1]})[0]),r},bp=(e,t,n,r)=>{let i=7,o=["type","type"],a=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=d=>{let c=X("seq_lens",n.dataType,n.dims),p=X("total_seq_lens",r.dataType,r.dims),f=de("pos_ids",i,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(c,p,f)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},_p=(e,t)=>{var M;let n=yp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((M=e.inputs[1])==null?void 0:M.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Ne({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[p,f,m]=!i&&!o?e.compute(la([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,o],y,w;if(t.doRotary){let I=e.compute(bp(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],k=e.inputs[7],T=e.inputs[8],v=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[p,I,k,T],N=[-1];y=e.compute(ui(C,v),{inputs:C,outputs:N})[0],C.splice(0,1,f);let B=Ne({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(ui(C,B),{inputs:C,outputs:N})[0]}let b=vr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=ca(e,t.doRotary?w:f,n),S=ca(e,m,n);wr(e,b,x,S,void 0,void 0,a,s,void 0,n,u,l)}}),da,xp,$p,vp,sw=te(()=>{we(),_e(),cn(),$e(),da=(e,t,n,r,i,o,a,s)=>{let u=He(o),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,c=i*a,p=64;c===1&&(p=256);let f=[i,a,o/u],m=[i,a,2],y=["rank","type","type"],w=[];w.push(...ge(f,m));let b=x=>{let S=X("x",t.dataType,3,u),M=X("scale",n.dataType,n.dims),I=X("bias",r.dataType,r.dims),k=de("output",1,3,2),T=[S,M,I,k];return`
  var<workgroup> workgroup_shared : array<${d}, ${p}>;
  const workgroup_size = ${p}u;
  ${x.declareVariables(...T)}
  ${x.mainStart(p)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ln("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${ln("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},xp=(e,t,n)=>{let r=t[0].dims,i=r,o=2,a=r[0],s=r[1],u=H.sizeFromDimension(r,o),l=He(u),d=H.size(i)/l,c=da(e,t[0],t[1],t[2],a,u,s,n.epsilon),p=[a,s,u/l],f=[a,s],m=["type","none"],y=w=>{let b=X("x",t[0].dataType,p.length,l),x=X("scale_shift",1,f.length,2),S=de("output",t[0].dataType,p.length,l),M=[b,x,S];return`
  ${w.registerUniform("output_size","u32").declareVariables(...M)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ge(p,f,p)]}),getShaderSource:y},{inputs:[t[0],c]})},$p=(e,t,n)=>{let r=t[0].dims,i=r,o=r[0],a=r[r.length-1],s=H.sizeFromDimension(r,1)/a,u=He(a),l=H.size(i)/u,d=[{type:12,data:s},{type:12,data:Math.floor(a/u)}],c=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(wt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=da(e,m,t[1],t[2],o,s,a,n.epsilon),w=b=>{let x=Xe(t[0].dataType),S=u===1?"vec2f":`mat${u}x2f`,M=T=>{let v=T===0?"x":"y",C=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${C}(scale.${v}))`;case 2:return`vec2<${x}>(${C}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${x}>(${C}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=X("input",t[0].dataType,t[0].dims,u),k=de("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${M(0)}, ${M(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],y]})},vp=(e,t)=>{t.format==="NHWC"?$p(e,e.inputs,t):xp(e,e.inputs,t)}}),Mp,Sp,Ip,uw=te(()=>{we(),_e(),$e(),Mp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Sp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,o=e[1],a=!r&&e[2],s=i,u=H.normalizeAxis(t.axis,i.length),l=H.sizeToDimension(i,u),d=H.sizeFromDimension(i,u),c=H.size(o.dims),p=a?H.size(a.dims):0;if(c!==d||a&&p!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let f=[];for(let I=0;I<i.length;++I)I<u?f.push(i[I]):f.push(1);let m=He(d),y=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];a&&y.push("type");let b=n>1,x=n>2,S=I=>{let k=Xe(e[0].dataType),T=[X("x",e[0].dataType,e[0].dims,m),X("scale",o.dataType,o.dims,m)];a&&T.push(X("bias",a.dataType,a.dims,m)),T.push(de("output",e[0].dataType,s,m)),b&&T.push(de("mean_data_output",1,f)),x&&T.push(de("inv_std_output",1,f));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(v).declareVariables(...T)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ro("f32",m)};
    var mean_square_vector = ${Ro("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Qn(k,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ln("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ln("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Qn(k,m,"x[j + offset]")};
      let f32scale = ${Qn(k,m,"scale[j]")};
      output[j + offset] = ${T[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Qn(k,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},M=[{dims:s,dataType:e[0].dataType}];return b&&M.push({dims:f,dataType:1}),x&&M.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:M,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:S}},Ip=(e,t)=>{Mp(e.inputs),e.compute(Sp(e.inputs,t,e.outputCount))}}),Ep,Tp,lw=te(()=>{_e(),jo(),Qo(),Ep=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Tp=e=>{Ep(e.inputs);let t=Yn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Ho(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=H.size(e.inputs[0].dims.slice(0,-2)),a=H.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&a===1){let s=e.inputs[0].reshape([1,o,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,o,n],d=[s,u];e.compute(ii(d,{activation:""},t,l),{inputs:d})}else e.compute(ii(e.inputs,{activation:""},t))}}}),kp,Cp,Ap,Rp,Op,cw=te(()=>{we(),_e(),je(),$e(),kp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,a=e[1];if(!H.areEqual(a.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(H.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(H.size(u)!==l)throw new Error("zeroPoints input size error.")}},Cp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=H.size(s),l=e[1].dims[2]/4,d=e[0].dataType,c=He(t.k),p=He(l),f=He(a),m=s.concat([i,a]),y=i>1&&a/f%2===0?2:1,w=H.size(m)/f/y,b=64,x=[],S=[u,i,o/c],M=H.convertShape(e[1].dims).slice();M.splice(-1,1,l/p),x.push(...ge(S)),x.push(...ge(M)),x.push(...ge(e[2].dims)),e.length===4&&x.push(...ge(H.convertShape(e[3].dims)));let I=[u,i,a/f];x.push(...ge(I));let k=T=>{let v=S.length,C=X("a",e[0].dataType,v,c),N=X("b",12,M.length,p),B=X("scales",e[2].dataType,e[2].dims.length),q=[C,N,B],G=e.length===4?X("zero_points",12,e[3].dims.length):void 0;G&&q.push(G);let O=I.length,V=de("output",e[0].dataType,O,f),Q=Xe(e[0].dataType),J=(()=>{switch(c){case 1:return`array<${Q}, 8>`;case 2:return`mat4x2<${Q}>`;case 4:return`mat2x4<${Q}>`;default:throw new Error(`${c}-component is not supported.`)}})(),he=Math.floor(32/t.bits),W=Math.floor(he/8),P=()=>{let D="";for(let F=0;F<W;F++){let Y=F*t.bits*4,ne=Y+t.bits;D+=`
          // reuse a data (pass ${F})
            var input_offset${F>0?F:""} = ${F===0?C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${F>0?F:""}: ${J};
            for (var j${F>0?F:""}: u32 = 0; j${F>0?F:""} < ${8/c}; j${F>0?F:""}++) {
              a_data${F>0?F:""}[j${F>0?F:""}] = ${C.getByOffset(`input_offset${F>0?F:""}`)};
              input_offset${F>0?F:""}++;
            }
          `;for(let ee=0;ee<f*y;ee++)D+=`
            b_value = ${p===1?`b${ee}_data`:`b${ee}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${F*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Y}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ne}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(fe,xe)=>`${Q}(b_value_lower[${xe}]), ${Q}(b_value_upper[${xe}])`).join(", ")});
            b_dequantized_values = ${c===1?`${J}(${Array.from({length:8},(fe,xe)=>`(b_quantized_values[${xe}] - ${G?`zero_point${ee}`:"zero_point"}) * scale${ee}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${G?`zero_point${ee}`:"zero_point"}`).join(",")})) * scale${ee};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ee/f)}]${f>1?`[${ee%f}]`:""} += ${Array.from({length:8/c},(fe,xe)=>`${c===1?`a_data${F>0?F:""}[${xe}] * b_dequantized_values[${xe}]`:`dot(a_data${F>0?F:""}[${xe}], b_dequantized_values[${xe}])`}`).join(" + ")};
          `}return D},R=()=>{let D=`
            var col_index = col * ${f};
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
            let zero_point = ${Q}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let F=0;F<f*y;F++)D+=`
            let scale${F} = ${B.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${F} = ${Q}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return D},z=()=>{let D=`col_index = col * ${f};`;for(let F=0;F<f*y;F++)D+=`
            let b${F}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,D};return`
        var<workgroup> workgroup_shared: array<${V.type.value}, ${y*b}>;
        ${T.declareVariables(...q,V)}
        ${T.mainStart([b,1,1])}
          let output_indices = ${V.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${R()}
            for (var word: u32 = 0; word < ${l}; word += ${p}) {
              ${z()}
              for (var i: u32 = 0; i < ${p}; i++) {
                ${P()}
                word_offset += ${he/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${V.type.value} = ${V.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${V.setByIndices(`${V.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:k}},Ap=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=H.size(s),l=e[1].dims[2]/4,d=e[0].dataType,c=He(t.k),p=He(l),f=s.concat([i,a]),m=128,y=a%8===0?8:a%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,S=x/c,M=x/t.blockSize,I=H.size(f)/y,k=[],T=[u,i,o/c],v=H.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),k.push(...ge(T)),k.push(...ge(v)),k.push(...ge(e[2].dims)),e.length===4&&k.push(...ge(H.convertShape(e[3].dims)));let C=[u,i,a];k.push(...ge(C));let N=B=>{let q=T.length,G=X("a",e[0].dataType,q,c),O=X("b",12,v.length,p),V=X("scales",e[2].dataType,e[2].dims.length),Q=[G,O,V],J=e.length===4?X("zero_points",12,e[3].dims.length):void 0;J&&Q.push(J);let he=C.length,W=de("output",e[0].dataType,he),P=Xe(e[0].dataType),R=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${P}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${P}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${S}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${w}>, ${y}>;
        ${B.declareVariables(...Q,W)}
        ${B.mainStart([w,y,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${M} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${S};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${S}; a_offset += ${m})
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
            let block = tile * ${M} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${P}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${P}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${V.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let z=Math.floor(b/8),D="";for(let F=0;F<z;F++){let Y=F*t.bits*4,ne=Y+t.bits;D+=`
              ${R()}
              {${t.bits===2?`
                let half_word = b_value >> ${F*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Y}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ne}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${P}>(${Array.from({length:4},(ee,fe)=>`${P}(b_value_lower[${fe}]), ${P}(b_value_upper[${fe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${P}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ee,fe)=>`${`dot(a_data${fe}, b_dequantized_values[${fe}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:I},programUniforms:k}),getShaderSource:N}},Rp=(e,t)=>{kp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ap(e.inputs,t)):e.compute(Cp(e.inputs,t))},Op=e=>Ne(e)}),Np,zp,Bp,Pp,Dp,Up,Lp,Fp,Gp,dw=te(()=>{we(),_e(),$e(),Np=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},zp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},Bp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Pp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Dp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Up=(e,t,n)=>{switch(n.mode){case 0:return zp(e,t,n.pads.length);case 1:return Bp(e,t,n.pads.length);case 2:return Pp(e,t,n.pads.length);case 3:return Dp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Lp=(e,t)=>{let n=H.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=H.size(n),o=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&o.push({type:a?e[2].dataType:1,data:t.value}),o.push(...ge(e[0].dims,n));let s=["rank"],u=l=>{let d=de("output",e[0].dataType,n.length),c=X("x",e[0].dataType,r.length),p=c.type.value,f=Up(d,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:a?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(H.size(n)/64)},programUniforms:o}),getShaderSource:u}},Fp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)o[Number(s[u])]=Number(n[u]),o[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>o[Number(u)]=Number(s));let a=[];return o.forEach(s=>a.push(s)),{mode:t.mode,value:r,pads:a}}else return t},Gp=(e,t)=>{Np(e.inputs);let n=Fp(e.inputs,t);e.compute(Lp(e.inputs,n),{inputs:[0]})}}),Mr,ha,pa,fa,ma,Wp,qp,ga,ya,Vp,Hp,wa,jp,Kp,ba,Yp,Xp,Qp,Zp,hw=te(()=>{_t(),we(),_e(),$e(),Mr=e=>{if(Le.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ha=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),s=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();Qr.adjustPoolAttributes(n,i,a,s,u,l);let d=Qr.computePoolOutputShape(n,i,s,u,a,l,t.autoPad),c=Object.assign({},t);o?Object.assign(c,{kernelShape:a,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:a,strides:s,pads:l,cacheKey:t.cacheKey});let p=d.slice();return p.push(p.splice(1,1)[0]),[c,r?p:d]},pa=(e,t)=>{let n=t.format==="NHWC",r=H.size(e),i=H.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],c=!!(l+d);o.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:d}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),o.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,a,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=H.computeStrides(t.kernelShape);o.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[o,a,!!u,!1,!1]}},fa=(e,t,n,r,i,o,a,s,u,l,d,c)=>{let p=i.format==="NHWC",f=t.type.value,m=de("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(d?y=`
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
                }`,i.kernelShape.length===2){let S=n-(p?3:2);c?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
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
              ${a}

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
                ${o}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
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
              ${a}

              output[global_idx] = value;
            }`}},ma=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Wp=e=>`${ma(e)};${e.countIncludePad}`,qp=e=>`${ma(e)};${e.storageOrder};${e.dilations}`,ga=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ya=(e,t,n,r)=>{let[i,o]=ha(t,r,n),a=X("x",t.dataType,t.dims.length),s=a.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[d,c,p,f,m]=pa(o,i);d.push(...ge(t.dims,o));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(H.size(o)/64)},programUniforms:d}),getShaderSource:w=>fa(w,a,t.dims.length,o.length,i,u,l,0,c,p,f,m)}},Vp=e=>{let t=e.count_include_pad!==0,n=ga(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Wp(r)}},Hp=(e,t)=>{Mr(e.inputs),e.compute(ya("AveragePool",e.inputs[0],!1,t))},wa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},jp=e=>{let t=e.format;return{format:t,...wa,cacheKey:t}},Kp=(e,t)=>{Mr(e.inputs),e.compute(ya("GlobalAveragePool",e.inputs[0],!0,t))},ba=(e,t,n,r)=>{let[i,o]=ha(t,r,n),a=`
      value = max(x_val, value);
    `,s="",u=X("x",t.dataType,t.dims.length),l=["rank"],[d,c,p,f,m]=pa(o,i);return d.push(...ge(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(H.size(o)/64)},programUniforms:d}),getShaderSource:y=>fa(y,u,t.dims.length,o.length,i,a,s,t.dataType===10?-65504:-1e5,c,p,f,m)}},Yp=(e,t)=>{Mr(e.inputs),e.compute(ba("MaxPool",e.inputs[0],!1,t))},Xp=e=>{let t=e.storage_order,n=e.dilations,r=ga(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:qp(i)}},Qp=e=>{let t=e.format;return{format:t,...wa,cacheKey:t}},Zp=(e,t)=>{Mr(e.inputs),e.compute(ba("GlobalMaxPool",e.inputs[0],!0,t))}}),Jp,ef,tf,nf,pw=te(()=>{we(),_e(),je(),$e(),Jp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},ef=(e,t)=>{let n=H.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,o=e[0].dims,a=e[1].dataType,s=H.size(o),u=r===3||r===2,l=u?[Math.ceil(H.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(H.size(c.dims)/4)]:c.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,m=f===!1&&d.length===1,y=He(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,S=X("input",u?12:r,l.length,x),M=X("scale",a,d.length),I=c?X("zero_point",u?12:r,p.length):void 0,k=de("output",a,o.length,b),T=[S,M];I&&T.push(I);let v=[l,d];c&&v.push(p);let C=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...ge(...v,o)],N=B=>{let q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${B.registerUniforms(q).declareVariables(...T,k)}
      ${B.mainStart()}
          ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${M.getByOffset("0")}`:m?`
            let scale_index = ${k.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${M.getByOffset("scale_index")};`:`
            var scale_indices: ${M.type.indices} = output_indices;
            let index = ${M.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${M.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${M.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?f?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:m?u?`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${M.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${k.setByOffset("global_idx",`${k.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:C})}},tf=(e,t)=>{Jp(e.inputs,t),e.compute(ef(e.inputs,t))},nf=e=>Ne({axis:e.axis,blockSize:e.blockSize})}),rf,of,af,fw=te(()=>{_t(),we(),$e(),rf=(e,t,n)=>{let r=e===t,i=e<t&&n<0,o=e>t&&n>0;if(r||i||o)throw new Error("Range these inputs' contents are invalid.")},of=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),o=[i],a=i,s=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...ge(o)],u=l=>{let d=de("output",r,o.length),c=d.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s})}},af=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Le.webgpu.validateInputContent&&rf(t,n,r),e.compute(of(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),sf,uf,lf,cf,mw=te(()=>{we(),_e(),je(),$e(),sf=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${o}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},uf=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,o=1,a=Math.ceil(H.sizeToDimension(r,r.length-1)/o),s=r[r.length-1],u=H.sizeFromDimension(n,s),l=[{type:12,data:a},{type:12,data:s},{type:12,data:u},...ge(e[1].dims,e[2].dims,i)],d=c=>{let p=X("indices",e[1].dataType,e[1].dims.length),f=X("updates",e[2].dataType,e[2].dims.length,o),m=t.reduction!=="none"&&t.reduction!==""?ml("output",e[0].dataType,i.length):de("output",e[0].dataType,i.length,o);return`
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
    ${sf(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:d}},lf=e=>Ne({reduction:e.reduction}),cf=(e,t)=>{e.compute(uf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),df,hf,pf,_a,ff,mf,gf,yf,wf,bf,_f,xf,xa,$f,vf,Mf,Sf,If,Ef,Tf,gw=te(()=>{we(),_e(),je(),$e(),df=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},hf=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,o)=>r[i]=e[o]),r},pf=(e,t,n,r,i,o)=>{let[a,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(d=>o.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");df(r,t),t.axes.length>0&&hf(r,t.axes,l).forEach((d,c)=>r[c]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},_a=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,ff=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${_a("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${_a("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",mf=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",gf=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,a)=>{r[o]=i[a],r[a+n]=i[t.length+a]}),r):i},yf=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(o=>i.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,a)=>i[o]=n[a])}else n.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,a)=>Math.round(o*t[a]))}return i},wf=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=r),n.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),i.forEach((o,a)=>i[a]=Math.round(o*t[a]))),i},bf=(e,t,n,r,i)=>`
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
    }`,_f=(e,t,n,r,i,o,a)=>`
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
    }`,xf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,xa=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",$f=(e,t,n,r,i)=>{let[o,a,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${xa(e,u,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${a}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
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
    }`},vf=(e,t,n,r,i,o,a,s,u,l)=>{let d=n.length===2,[c,p]=d?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===c?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${r[y]}, ${n[y]}, ${o[y]}, ${o[y]} + ${n.length});
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
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
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
    `},Mf=(e,t,n,r,i)=>{let[o,a,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${xa(e,l,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${a}];
      var height:${d} = originalIndices[${s}];
      var width:${d} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
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
    }`},Sf=(e,t,n,r,i,o)=>{let a=e.dims,s=gf(o,t.axes,a.length),u=yf(a,r,i,t.axes),l=r.slice();r.length===0&&(l=a.map((x,S)=>x===0?1:u[S]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=wf(a,l,t)));let d=de("output",e.dataType,u.length),c=X("input",e.dataType,a.length),p=H.size(u),f=a.length===u.length&&a.every((x,S)=>x===u[S]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=c.type.value,b=x=>`
      ${f?"":`
      ${ff(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${xf(c,a)};
              ${mf(t.nearestMode,n,w)};
              ${_f(c,d,a,u,l.length,s.length,m)};
              `;case"linear":return`
              ${bf(d,a,u,l.length,s.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${$f(c,d,a,m,y)}`;if(a.length===3||a.length===5)return`${Mf(c,d,a,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${vf(c,d,a,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",s.length).declareVariables(c,d)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...ge(a,u)]})}},If=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Ef=(e,t)=>{let n=[],r=[],i=[],o=If(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");pf(e.inputs,t,o,n,r,i),e.compute(Sf(e.inputs[0],t,o,n,r,i),{inputs:[0]})},Tf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,a=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Ne({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:o,extrapolationValue:a,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),kf,Cf,Af,yw=te(()=>{we(),_e(),$e(),kf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Cf=(e,t,n,r)=>{let i=t.simplified,o=e[0].dims,a=H.size(o),s=o,u=a,l=o.slice(-1)[0],d=r?o.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=He(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],S=I=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],T=[X("x",e[0].dataType,e[0].dims,b),X("skip",e[1].dataType,e[1].dims,b),X("gamma",e[2].dataType,e[2].dims,b)];c&&T.push(X("beta",e[3].dataType,e[3].dims,b)),p&&T.push(X("bias",e[4].dataType,e[4].dims,b)),T.push(de("output",e[0].dataType,s,b)),f&&T.push(de("mean_output",1,d)),m&&T.push(de("inv_std_output",1,d)),y&&T.push(de("input_skip_bias_sum",e[0].dataType,s,b));let v=Xe(e[0].dataType),C=Xe(1,b);return`

      ${I.registerUniforms(k).declareVariables(...T)}
      var<workgroup> sum_shared : array<${C}, ${w}>;
      var<workgroup> sum_squared_shared : array<${C}, ${w}>;

      ${I.mainStart([w,1,1])}
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
          let f32_value = ${Qn(v,b,"value")};
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
        let mean = ${ln("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ln("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},M=[{dims:s,dataType:e[0].dataType}];return n>1&&M.push({dims:d,dataType:1}),n>2&&M.push({dims:d,dataType:1}),n>3&&M.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((I,k)=>"type")},getShaderSource:S,getRunData:()=>({outputs:M,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},Af=(e,t)=>{kf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Cf(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Rf,Sr,Of,$a,Nf,zf,Bf,Pf,ww=te(()=>{we(),_e(),je(),$e(),Rf=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Sr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Of=(e,t)=>{if(e.length>1){let n=Sr(e,1),r=Sr(e,2),i=Sr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Ne({starts:n,ends:r,axes:i})}else return t},$a=(e,t,n,r,i)=>{let o=e;return e<0&&(o+=n[r[t]]),i[t]<0?Math.max(0,Math.min(o,n[r[t]]-1)):Math.max(0,Math.min(o,n[r[t]]))},Nf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,zf=(e,t)=>{let n=e[0].dims,r=H.size(n),i=t.axes.length>0?H.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=Sr(e,4);o.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let a=t.starts.map((b,x)=>$a(b,x,n,i,o)),s=t.ends.map((b,x)=>$a(b,x,n,i,o));if(i.length!==a.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(a.splice(b,0,0),s.splice(b,0,n[b]),o.splice(b,0,1));let u=o.map(b=>Math.sign(b));o.forEach((b,x,S)=>{if(b<0){let M=(s[x]-a[x])/b,I=a[x],k=I+M*o[x];a[x]=k,s[x]=I,S[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-a[b])/o[b])});let d={dims:l,dataType:e[0].dataType},c=de("output",e[0].dataType,l.length),p=X("input",e[0].dataType,e[0].dims.length),f=H.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:o.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:o},...ge(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,c)}
        ${Nf(p,c,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Bf=(e,t)=>{Rf(e.inputs,t);let n=Of(e.inputs,t);e.compute(zf(e.inputs,n),{inputs:[0]})},Pf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Ne({starts:t,ends:n,axes:r})}}),Df,Uf,Lf,Ff,bw=te(()=>{we(),_e(),je(),cn(),$e(),Df=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Uf=(e,t)=>{let n=e.inputs[0],r=n.dims,i=H.size(r),o=r.length,a=H.normalizeAxis(t.axis,o),s=a<r.length-1,u,l=[];s?(l=Array.from({length:o},(T,v)=>v),l[a]=o-1,l[o-1]=a,u=e.compute(wt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let d=u.dims,c=d[o-1],p=i/c,f=He(c),m=c/f,y=64;p===1&&(y=256);let w=(T,v)=>v===4?`max(max(${T}.x, ${T}.y), max(${T}.z, ${T}.w))`:v===2?`max(${T}.x, ${T}.y)`:v===3?`max(max(${T}.x, ${T}.y), ${T}.z)`:T,b=X("x",u.dataType,u.dims,f),x=de("result",u.dataType,u.dims,f),S=b.type.value,M=Xe(u.dataType)==="f32"?`var threadMax = ${S}(-3.4028234663852886e+38f);`:`var threadMax = ${S}(-65504.0h);`,I=T=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${T.registerUniform("packedCols","i32").declareVariables(b,x)}
      ${T.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${M}
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
          rowMaxShared = ${S}(${w("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
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
          rowSumShared = ${S}(${ln("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${S}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:I},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(wt(k,l),{inputs:[k]})},Lf=(e,t)=>{Df(e.inputs),Uf(e,t)},Ff=e=>Ne({axis:e.axis})}),va,Gf,Wf,qf,Vf,_w=te(()=>{we(),_e(),$e(),va=e=>Array.from(e.getBigInt64Array(),Number),Gf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(va(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Wf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},qf=(e,t)=>{let n=e[0].dims,r=t??va(e[1]),i=Wf(n,r),o=H.size(i),a=e[0].dataType,s=X("input",a,n.length),u=de("output",a,i.length),l=d=>`
      const inputShape = ${s.indices(...n)};
      ${d.registerUniform("output_size","u32").declareVariables(s,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...ge(e[0].dims,i)]}),getShaderSource:l}},Vf=e=>{Gf(e.inputs),e.compute(qf(e.inputs),{inputs:[0]})}}),Hf,jf,Kf,xw=te(()=>{we(),_e(),$e(),Hf=(e,t,n,r,i)=>{let o=de("output_data",i,n.length,4),a=X("a_data",t[1].dataType,t[1].dims.length,4),s=X("b_data",t[2].dataType,t[2].dims.length,4),u=X("c_data",t[0].dataType,t[0].dims.length,4),l,d=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!r)l=o.setByOffset("global_idx",d(a.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${o.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,o)};
            let offset_b${f} = ${s.broadcastedIndicesToOffset(`output_indices${f}`,o)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,o)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${p}[${f}] = ${m}(${d(y,w,b)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,s,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},jf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,o=!(H.areEqual(t,n)&&H.areEqual(n,r)),a=t,s=H.size(t);if(o){let l=Yn.calcShape(Yn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");a=l,s=H.size(a)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Hf(l,e,a,o,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...ge(r,t,n,a)]})}},Kf=e=>{e.compute(jf(e.inputs))}}),Yf,$w=te(()=>{By(),Uo(),Py(),Dy(),Uy(),Ly(),Fy(),Hy(),Ky(),Yy(),Xy(),Qy(),Zy(),Jy(),ew(),tw(),nw(),rw(),iw(),ow(),aw(),sw(),uw(),lw(),cw(),ap(),dw(),hw(),pw(),fw(),mw(),Bo(),gw(),gp(),yw(),ww(),bw(),pp(),_w(),cn(),Wo(),xw(),Yf=new Map([["Abs",[Tc]],["Acos",[kc]],["Acosh",[Cc]],["Add",[yd]],["ArgMax",[pc,Do]],["ArgMin",[hc,Do]],["Asin",[Ac]],["Asinh",[Rc]],["Atan",[Oc]],["Atanh",[Nc]],["Attention",[bc]],["AveragePool",[Hp,Vp]],["BatchNormalization",[vc]],["BiasAdd",[Ic]],["BiasSplitGelu",[fd]],["Cast",[Bc,zc]],["Ceil",[Uc]],["Clip",[Dc]],["Concat",[Ad,Rd]],["Conv",[na,ea]],["ConvTranspose",[oh,nh]],["Cos",[Lc]],["Cosh",[Fc]],["CumSum",[sh,uh]],["DepthToSpace",[hh,ph]],["DequantizeLinear",[tf,nf]],["Div",[wd]],["Einsum",[bh,_h]],["Elu",[Gc,br]],["Equal",[bd]],["Erf",[Wc]],["Exp",[qc]],["Expand",[Mh]],["FastGelu",[Ih]],["Floor",[Vc]],["FusedConv",[na,ea]],["Gather",[Ch,kh]],["GatherElements",[Fh,Lh]],["GatherBlockQuantized",[Bh,Ph]],["GatherND",[Rh,Oh]],["Gelu",[Hc]],["Gemm",[Vh,qh]],["GlobalAveragePool",[Kp,jp]],["GlobalMaxPool",[Zp,Qp]],["Greater",[vd]],["GreaterOrEqual",[Sd]],["GridSample",[ep,tp]],["GroupQueryAttention",[_p]],["HardSigmoid",[ed,Jc]],["InstanceNormalization",[vp]],["LayerNormalization",[Ip]],["LeakyRelu",[jc,br]],["Less",[Md]],["LessOrEqual",[Id]],["Log",[ud]],["MatMul",[Tp]],["MatMulNBits",[Rp,Op]],["MaxPool",[Yp,Xp]],["Mul",[_d]],["MultiHeadAttention",[op,rp]],["Neg",[Yc]],["Not",[Kc]],["Pad",[Gp]],["Pow",[xd]],["QuickGelu",[dd,br]],["Range",[af]],["Reciprocal",[Xc]],["ReduceMin",[sc]],["ReduceMean",[nc]],["ReduceMax",[ac]],["ReduceSum",[lc]],["ReduceProd",[uc]],["ReduceL1",[rc]],["ReduceL2",[ic]],["ReduceLogSum",[dc]],["ReduceLogSumExp",[oc]],["ReduceSumSquare",[cc]],["Relu",[Qc]],["Resize",[Ef,Tf]],["RotaryEmbedding",[mp]],["ScatterND",[cf,lf]],["Sigmoid",[Zc]],["Sin",[td]],["Sinh",[nd]],["Slice",[Bf,Pf]],["SkipLayerNormalization",[Af]],["Split",[dp,hp]],["Sqrt",[rd]],["Softmax",[Lf,Ff]],["Sub",[$d]],["Tan",[id]],["Tanh",[od]],["ThresholdedRelu",[sd,br]],["Tile",[Vf]],["Transpose",[vl,Ml]],["Where",[Kf]]])}),Xf,vw=te(()=>{_t(),Qt(),$e(),Xf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Ft(e.programInfo.name);let o=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Tt(e.programInfo.name)}dispose(){}build(e,t){Ft(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=yl(t,this.backend.device.limits),o=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${o}`,s=n.createShaderModule({code:a,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return Tt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let o=t*n*r,a=Math.ceil(Math.sqrt(o));if(a>i){if(a=Math.ceil(Math.cbrt(o)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Qf={};Hn(Qf,{WebGpuBackend:()=>tm});var Zf,Jf,em,tm,Mw=te(()=>{_t(),we(),Qt(),rl(),Ny(),$w(),vw(),Zf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let o=e[r].dims.length;n.push(`${i};${o}`);break}case"dims":{let o=e[r].dims.join(",");n.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Jf=(e,t,n)=>{var i,o;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Zf(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,r},em=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},tm=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let o=t,a=t.info??(typeof o.requestAdapterInfo=="function"?await o.requestAdapterInfo():void 0);this.adapterInfo=new em(a),this.gpuDataManager=pl(this),this.programManager=new Xf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,bo(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ft(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],a=o.kernelId,s=this.kernels.get(a),u=s.kernelType,l=s.kernelName,d=o.programName,c=o.inputTensorViews,p=o.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(b=>({dims:b.dims,dataType:Xt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Xt(b.dataType)})),kernelId:a,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let b="";c.forEach((S,M)=>{b+=`input[${M}]: [${S.dims}] | ${Xt(S.dataType)}, `});let x="";p.forEach((S,M)=>{x+=`output[${M}]: [${S.dims}] | ${Xt(S.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${l}|${d}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Vr("GPU",`${d}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),Tt()}run(e,t,n,r,i,o){Ft(e.name);let a=[];for(let x=0;x<t.length;++x){let S=t[x].data;if(S===0)continue;let M=this.gpuDataManager.get(S);if(!M)throw new Error(`no GPU data for input: ${S}`);a.push(M)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=n.length===0?s.map((x,S)=>S):n;if(d.length!==s.length)throw new Error(`Output size ${d.length} must be equal to ${s.length}.`);let c=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(d[x])||d[x]<-3||d[x]>=o)throw new Error(`Invalid output index: ${d[x]}`);if(d[x]===-3)continue;let S=d[x]===-1,M=d[x]===-2,I=S||M?i(s[x].dataType,s[x].dims):r(d[x],s[x].dataType,s[x].dims);if(c.push(I),I.data===0)continue;let k=this.gpuDataManager.get(I.data);if(!k)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(k),M){let T=this.kernelPersistentData.get(this.currentKernelId);T||(T=[],this.kernelPersistentData.set(this.currentKernelId,T)),T.push(k)}p.push(k)}if(a.length!==t.length||p.length!==c.length){if(p.length===0)return Tt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,S=[];l.forEach(T=>{let v=typeof T.data=="number"?[T.data]:T.data;if(v.length===0)return;let C=T.type===10?2:4,N,B;T.type===10?(B=v.length>4?16:v.length>2?8:v.length*C,N=v.length>4?16:C*v.length):(B=v.length<=2?v.length*C:16,N=16),x=Math.ceil(x/B)*B,S.push(x);let q=T.type===10?8:4;x+=v.length>4?Math.ceil(v.length/q)*N:v.length*C});let M=16;x=Math.ceil(x/M)*M;let I=new ArrayBuffer(x);l.forEach((T,v)=>{let C=S[v],N=typeof T.data=="number"?[T.data]:T.data;if(T.type===6)new Int32Array(I,C,N.length).set(N);else if(T.type===12)new Uint32Array(I,C,N.length).set(N);else if(T.type===10)new Uint16Array(I,C,N.length).set(N);else if(T.type===1)new Float32Array(I,C,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Xt(T.type)}`)});let k=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,I,0,x),this.gpuDataManager.release(k.id),f={offset:0,size:x,buffer:k.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Jf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ee("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let S=l[x],M=S.type,I=typeof S.data=="number"?1:S.data.length,[k,T]=b.uniformVariablesInfo[x];if(M!==k||I!==T)throw new Error(`Uniform variable ${x} mismatch: expect type ${k} with size ${T}, got type ${M} with size ${I} in program "${b.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,a,p,m,f),Tt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Yf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,o=r.kernelName,a=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${o}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,o);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Ao(this,e,t);return _o(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),nm={};Hn(nm,{init:()=>im});var li,rm,im,Sw=te(()=>{we(),Qt(),_e(),Oy(),li=class cy{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(H.size(t)!==H.size(this.dims))throw new Error("Invalid new shape");return new cy(this.module,this.dataType,this.data,t)}},rm=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,o));let a=Number(e.getValue(r*i++,o));this.outputCount=Number(e.getValue(r*i++,o)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,o));let s=[];for(let u=0;u<a;u++){let l=Number(e.getValue(r*i++,o)),d=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,o)),p=[];for(let f=0;f<c;f++)p.push(Number(e.getValue(r*i++,o)));s.push(new li(e,l,d,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new li(this.module,u,this.output(s,l),l),o=(s,u)=>{let l=kn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new li(this.module,s,d,u)};return this.backend.run(e,n,r,i,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(o+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},im=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(Mw(),hr(Qf)).WebGpuBackend,a=new o;await a.initialize(n,r),i("webgpu",[a,s=>a.alloc(Number(s)),s=>a.free(s),(s,u,l,d=!1)=>{if(d)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),a.memcpy(Number(s),Number(u));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));a.upload(Number(u),c)}},async(s,u,l)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await a.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>a.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>a.releaseKernel(s),(s,u,l,d)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new rm(t,a,Number(u));return a.computeKernel(Number(s),c,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let o=new ll(n);i("webnn",[o,()=>o.reserveTensorId(),a=>o.releaseTensorId(a),async(a,s,u,l,d)=>o.ensureTensor(a,s,u,l,d),(a,s)=>{o.uploadTensor(a,s)},async(a,s)=>o.downloadTensor(a,s),(a,s)=>o.registerMLContext(a,s),!!n.trace])}}}),om,Ma,Sa,dn,am,Ia,ci,Ea,Ta,ka,Ca,Aa,Ra,sm=te(()=>{_t(),Cy(),Ay(),we(),In(),fo(),ju(),om=(e,t)=>{We()._OrtInit(e,t)!==0&&ze("Can't initialize onnxruntime.")},Ma=async e=>{om(e.wasm.numThreads,Xr(e.logLevel))},Sa=async(e,t)=>{var r,i;(i=(r=We()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(Sw(),hr(nm)).init;t==="webgpu"&&await o("webgpu",We(),e,n),t==="webnn"&&await o("webnn",We(),e)}},dn=new Map,am=e=>{let t=We(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ze("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+r,o))]}finally{t.stackRestore(n)}},Ia=(e,t)=>{let n=We(),r=n.stackSave(),i=0;try{let o=n.PTR_SIZE,a=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,a,a+o)!==0&&ze("Can't get session input/output metadata.");let s=Number(n.getValue(a,"*"));i=Number(n.getValue(a+o,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],d=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*o,"*"));d.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*o,"*")))}return[s,u,d]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},ci=e=>{let t=We(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ea=async(e,t)=>{var c,p,f,m;let n,r,i=We();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=ci(e);let o=0,a=0,s=0,u=[],l=[],d=[];try{if([a,u]=await Hu(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let C of t.externalData){let N=typeof C=="string"?C:C.path;v.push(wo(typeof C=="string"?C:C.data).then(B=>{i.mountExternalData(N,B)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let C=v,N=C==null?void 0:C.context,B=C==null?void 0:C.gpuDevice,q=C==null?void 0:C.deviceType,G=C==null?void 0:C.powerPreference;N?i.currentContext=N:B?i.currentContext=await i.webnnCreateMLContext(B):i.currentContext=await i.webnnCreateMLContext({deviceType:q,powerPreference:G})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(n,r,a),(c=i.webgpuOnCreateSession)==null||c.call(i,o),o===0&&ze("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=am(o),b=!!(t!=null&&t.enableGraphCapture),x=[],S=[],M=[],I=[],k=[];for(let v=0;v<y;v++){let[C,N,B]=Ia(o,v);C===0&&ze("Can't get an input name."),l.push(C);let q=i.UTF8ToString(C);x.push(q),M.push(N===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:Xt(N),shape:B})}for(let v=0;v<w;v++){let[C,N,B]=Ia(o,v+y);C===0&&ze("Can't get an output name."),d.push(C);let q=i.UTF8ToString(C);S.push(q),I.push(N===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:Xt(N),shape:B});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[q])??"cpu",O=i.webnnIsGraphOutput;if(G==="cpu"&&O&&O(o,q)){k.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(b&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(G)}}let T=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(o),s===0&&ze("Can't create IO binding."),T={handle:s,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>yo(v))}),dn.set(o,[o,l,d,T,b,!1]),[o,x,S,M,I]}catch(y){throw l.forEach(w=>i._OrtFree(w)),d.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&ze("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&ze("Can't release session."),y}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ze("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},Ta=e=>{var u,l,d;let t=We(),n=dn.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,o,a,s]=n;a&&(s&&t._OrtClearBoundOutputs(a.handle)!==0&&ze("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ze("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(d=t.webgpuOnReleaseSession)==null||d.call(t,e),i.forEach(c=>t._OrtFree(c)),o.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&ze("Can't release session."),dn.delete(e)},ka=async(e,t,n,r,i,o,a=!1)=>{if(!e){t.push(0);return}let s=We(),u=s.PTR_SIZE,l=e[0],d=e[1],c=e[3],p=c,f,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;m=kn(Tn(l),d);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,o,b,m)}}else if(c==="ml-tensor"){let b=e[2].mlTensor;m=kn(Tn(l),d);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,Tn(l),d)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,kt(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,S=s.webnnIsGraphOutput;if(l!=="string"&&x&&S){let M=s.UTF8ToString(i);if(x(r,M)||S(r,M)){let I=Tn(l);m=kn(I,d),p="ml-tensor";let k=s.webnnCreateTemporaryTensor,T=s.webnnUploadTensor;if(!k||!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,I,d);T(v,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=v}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*d.length);try{d.forEach((x,S)=>s.setValue(w+S*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor(Tn(l),f,m,w,d.length,yo(p));b===0&&ze(`Can't create tensor for input/output. session=${r}, index=${o}.`),t.push(b)}finally{s.stackRestore(y)}},Ca=async(e,t,n,r,i,o)=>{var q,G,O,V;let a=We(),s=a.PTR_SIZE,u=dn.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],c=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],S=[],M=[],I=[],k=[],T=a.stackSave(),v=a.stackAlloc(y*s),C=a.stackAlloc(y*s),N=a.stackAlloc(w*s),B=a.stackAlloc(w*s);try{[b,x]=Fu(o),Mn("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)await ka(n[W],S,I,e,d[t[W]],t[W],f);for(let W=0;W<w;W++)await ka(i[W],M,I,e,c[r[W]],y+r[W],f);Sn("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)a.setValue(v+W*s,S[W],"*"),a.setValue(C+W*s,d[t[W]],"*");for(let W=0;W<w;W++)a.setValue(N+W*s,M[W],"*"),a.setValue(B+W*s,c[r[W]],"*");if(p&&!m){let{handle:W,outputPreferredLocations:P,outputPreferredLocationsEncoded:R}=p;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);Mn("wasm bindInputsOutputs");for(let z=0;z<y;z++){let D=t[z];await a._OrtBindInput(W,d[D],S[z])!==0&&ze(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<w;z++){let D=r[z];(q=i[z])!=null&&q[3]?(k.push(M[z]),a._OrtBindOutput(W,c[D],M[z],0)!==0&&ze(`Can't bind pre-allocated output[${z}] for session=${e}.`)):a._OrtBindOutput(W,c[D],0,R[D])!==0&&ze(`Can't bind output[${z}] to ${P[z]} for session=${e}.`)}Sn("wasm bindInputsOutputs"),dn.set(e,[l,d,c,p,f,!0])}(G=a.jsepOnRunStart)==null||G.call(a,l),(O=a.webnnOnRunStart)==null||O.call(a,l);let Q;p?Q=await a._OrtRunWithBinding(l,p.handle,w,N,b):Q=await a._OrtRun(l,C,v,y,B,w,N,b),Q!==0&&ze("failed to call OrtRun().");let J=[],he=[];Mn("wasm ProcessOutputTensor");for(let W=0;W<w;W++){let P=Number(a.getValue(N+W*s,"*"));if(P===M[W]||k.includes(M[W])){J.push(i[W]),P!==M[W]&&a._OrtReleaseTensor(P)!==0&&ze("Can't release tensor.");continue}let R=a.stackSave(),z=a.stackAlloc(4*s),D=!1,F,Y=0;try{a._OrtGetTensorData(P,z,z+s,z+2*s,z+3*s)!==0&&ze(`Can't access output tensor data on index ${W}.`);let ne=s===4?"i32":"i64",ee=Number(a.getValue(z,ne));Y=a.getValue(z+s,"*");let fe=a.getValue(z+s*2,"*"),xe=Number(a.getValue(z+s*3,ne)),ke=[];for(let Be=0;Be<xe;Be++)ke.push(Number(a.getValue(fe+Be*s,ne)));a._OrtFree(fe)!==0&&ze("Can't free memory for tensor dims.");let Ue=ke.reduce((Be,ye)=>Be*ye,1);F=Xt(ee);let st=p==null?void 0:p.outputPreferredLocations[r[W]];if(F==="string"){if(st==="gpu-buffer"||st==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Be=[];for(let ye=0;ye<Ue;ye++){let ut=a.getValue(Y+ye*s,"*"),nn=a.getValue(Y+(ye+1)*s,"*"),Qe=ye===Ue-1?void 0:nn-ut;Be.push(a.UTF8ToString(ut,Qe))}J.push([F,ke,Be,"cpu"])}else if(st==="gpu-buffer"&&Ue>0){let Be=a.jsepGetBuffer;if(!Be)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ye=Be(Y),ut=kn(ee,Ue);if(ut===void 0||!mo(F))throw new Error(`Unsupported data type: ${F}`);D=!0,J.push([F,ke,{gpuBuffer:ye,download:a.jsepCreateDownloader(ye,ut,F),dispose:()=>{a._OrtReleaseTensor(P)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(st==="ml-tensor"&&Ue>0){let Be=a.webnnEnsureTensor,ye=a.webnnIsGraphInputOutputTypeSupported;if(!Be||!ye)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(kn(ee,Ue)===void 0||!go(F))throw new Error(`Unsupported data type: ${F}`);if(!ye(e,F,!1))throw new Error(`preferredLocation "ml-tensor" for ${F} output is not supported by current WebNN Context.`);let ut=await Be(e,Y,ee,ke,!1);D=!0,J.push([F,ke,{mlTensor:ut,download:a.webnnCreateMLTensorDownloader(Y,F),dispose:()=>{a.webnnReleaseTensorId(Y),a._OrtReleaseTensor(P)}},"ml-tensor"])}else if(st==="ml-tensor-cpu-output"&&Ue>0){let Be=a.webnnCreateMLTensorDownloader(Y,F)(),ye=J.length;D=!0,he.push((async()=>{let ut=[ye,await Be];return a.webnnReleaseTensorId(Y),a._OrtReleaseTensor(P),ut})()),J.push([F,ke,[],"cpu"])}else{let Be=Yr(F),ye=new Be(Ue);new Uint8Array(ye.buffer,ye.byteOffset,ye.byteLength).set(a.HEAPU8.subarray(Y,Y+ye.byteLength)),J.push([F,ke,ye,"cpu"])}}finally{a.stackRestore(R),F==="string"&&Y&&a._free(Y),D||a._OrtReleaseTensor(P)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&ze("Can't clear bound outputs."),dn.set(e,[l,d,c,p,f,!1]));for(let[W,P]of await Promise.all(he))J[W][2]=P;return Sn("wasm ProcessOutputTensor"),J}finally{(V=a.webnnOnRunEnd)==null||V.call(a,l),a.stackRestore(T),S.forEach(Q=>a._OrtReleaseTensor(Q)),M.forEach(Q=>a._OrtReleaseTensor(Q)),I.forEach(Q=>a._free(Q)),b!==0&&a._OrtReleaseRunOptions(b),x.forEach(Q=>a._free(Q))}},Aa=e=>{let t=We(),n=dn.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ze("Can't get an profile file name."),t._OrtFree(i)},Ra=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),hn,dt,Zn,Ir,Er,di,Oa,hi,Bn,Pn,um,lm,cm,dm,hm,pm,fm,mm,gm=te(()=>{_t(),sm(),In(),lo(),hn=()=>!!Le.wasm.proxy&&typeof document<"u",Zn=!1,Ir=!1,Er=!1,hi=new Map,Bn=(e,t)=>{let n=hi.get(e);n?n.push(t):hi.set(e,[t])},Pn=()=>{if(Zn||!Ir||Er||!dt)throw new Error("worker not ready")},um=e=>{switch(e.data.type){case"init-wasm":Zn=!1,e.data.err?(Er=!0,Oa[1](e.data.err)):(Ir=!0,Oa[0]()),di&&(URL.revokeObjectURL(di),di=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=hi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},lm=async()=>{if(!Ir){if(Zn)throw new Error("multiple calls to 'initWasm()' detected.");if(Er)throw new Error("previous call to 'initWasm()' failed.");if(Zn=!0,hn())return new Promise((e,t)=>{dt==null||dt.terminate(),Bu().then(([n,r])=>{try{dt=r,dt.onerror=o=>t(o),dt.onmessage=um,Oa=[e,t];let i={type:"init-wasm",in:Le};!i.in.wasm.wasmPaths&&(n||oo)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),dt.postMessage(i),di=n}catch(i){t(i)}},t)});try{await po(Le.wasm),await Ma(Le),Ir=!0}catch(e){throw Er=!0,e}finally{Zn=!1}}},cm=async e=>{if(hn())return Pn(),new Promise((t,n)=>{Bn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Le}};dt.postMessage(r)});await Sa(Le,e)},dm=async e=>hn()?(Pn(),new Promise((t,n)=>{Bn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};dt.postMessage(r,[e.buffer])})):ci(e),hm=async(e,t)=>{if(hn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Pn(),new Promise((n,r)=>{Bn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),dt.postMessage(i,o)})}else return Ea(e,t)},pm=async e=>{if(hn())return Pn(),new Promise((t,n)=>{Bn("release",[t,n]);let r={type:"release",in:e};dt.postMessage(r)});Ta(e)},fm=async(e,t,n,r,i,o)=>{if(hn()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Pn(),new Promise((a,s)=>{Bn("run",[a,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:o}};dt.postMessage(l,Ra(u))})}else return Ca(e,t,n,r,i,o)},mm=async e=>{if(hn())return Pn(),new Promise((t,n)=>{Bn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};dt.postMessage(r)});Aa(e)}}),Na,ym,wm,Iw=te(()=>{_t(),gm(),we(),to(),ju(),Na=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},ym=e=>{switch(e[3]){case"cpu":return new De(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!mo(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return De.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!go(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return De.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},wm=class{async fetchModelAndCopyToWasmMemory(e){return dm(await wo(e))}async loadModel(e,t){Ft();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await hm(n,t),Tt()}async dispose(){return pm(this.sessionId)}async run(e,t,n){Ft();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],f=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let o=[],a=[];Object.entries(t).forEach(c=>{let p=c[0],f=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);o.push(f),a.push(m)});let s=r.map((c,p)=>Na(c,()=>`input "${this.inputNames[i[p]]}"`)),u=o.map((c,p)=>c?Na(c,()=>`output "${this.outputNames[a[p]]}"`):null),l=await fm(this.sessionId,i,s,a,u,n),d={};for(let c=0;c<l.length;c++)d[this.outputNames[a[c]]]=o[c]??ym(l[c]);return Tt(),d}startProfiling(){}endProfiling(){mm(this.sessionId)}}}),bm={};Hn(bm,{OnnxruntimeWebAssemblyBackend:()=>Ba,initializeFlags:()=>za,wasmBackend:()=>_m});var za,Ba,_m,Ew=te(()=>{_t(),gm(),Iw(),za=()=>{(typeof Le.wasm.initTimeout!="number"||Le.wasm.initTimeout<0)&&(Le.wasm.initTimeout=0);let e=Le.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Le.wasm.simd=!1),typeof Le.wasm.proxy!="boolean"&&(Le.wasm.proxy=!1),typeof Le.wasm.trace!="boolean"&&(Le.wasm.trace=!1),typeof Le.wasm.numThreads!="number"||!Number.isInteger(Le.wasm.numThreads)||Le.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Le.wasm.numThreads=1;else{let t=typeof navigator>"u"?hy("node:os").cpus().length:navigator.hardwareConcurrency;Le.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ba=class{async init(e){za(),await lm(),await cm(e)}async createInferenceSessionHandler(e,t){let n=new wm;return await n.loadModel(e,t),n}},_m=new Ba});_t(),_t(),_t();var Tw="1.27.0";{let e=(Ew(),hr(bm)).wasmBackend;jn("webgpu",e,5),jn("webnn",e,5),jn("cpu",e,10),jn("wasm",e,10)}Object.defineProperty(Le.versions,"web",{value:Tw,enumerable:!0});/**
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
 */const pi=new Map;function xm(e,t){const n=pi.get(e)??{ms:0,appels:0};n.ms+=t,n.appels+=1,pi.set(e,n)}function xt(e,t){const n=performance.now();try{return t()}finally{xm(e,performance.now()-n)}}async function bt(e,t){const n=performance.now();try{return await t()}finally{xm(e,performance.now()-n)}}function kw(){return[...pi.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Cw(){pi.clear()}function Aw(e,t,n,r){const i=t*n,o=new Uint8ClampedArray(new ArrayBuffer(i*4));if(r===4)return o.set(e),o;for(let a=0;a<i;a+=1)o[a*4]=e[a*r],o[a*4+1]=e[a*r+1],o[a*4+2]=e[a*r+2],o[a*4+3]=255;return o}function at(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Jn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function $m(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,s)=>a-s),r=t/100*(n.length-1),i=Math.floor(r),o=Math.ceil(r);return i===o?n[i]:n[i]*(o-r)+n[o]*(r-i)}const Rw=114;function Ow(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),o=Math.round(e*i),a=Math.round(t*i);return{scale:i,padX:Math.floor((n-o)/2),padY:Math.floor((n-a)/2),resizedWidth:o,resizedHeight:a}}function Pa(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const c=(d+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),S=Math.max(0,Math.min(1,w-b)),M=(p*r+b)*o,I=(p*r+x)*o,k=(f*r+b)*o,T=(f*r+x)*o,v=(d*t+y)*3;for(let C=0;C<3;C++){const N=a[M+C]*(1-S)+a[I+C]*S,B=a[k+C]*(1-S)+a[T+C]*S;s[v+C]=Math.min(255,Math.max(0,Math.round(N*(1-m)+B*m)))}}}return s}function er(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const c=d*l,p=Math.min((d+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,S=0;for(let I=Math.floor(c);I<p;I++){const k=Math.min(I+1,p)-Math.max(I,c);if(!(k<=0))for(let T=Math.floor(m);T<y;T++){const v=Math.min(T+1,y)-Math.max(T,m);if(v<=0)continue;const C=v*k,N=(I*r+T)*o;w+=a[N]*C,b+=a[N+1]*C,x+=a[N+2]*C,S+=C}}const M=(d*t+f)*3;s[M]=Math.min(255,Math.max(0,at(w/S))),s[M+1]=Math.min(255,Math.max(0,at(b/S))),s[M+2]=Math.min(255,Math.max(0,at(x/S)))}}return s}function vm(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function Da(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,d=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=vm(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),S=vm(b-x),M=(p*t+w)*3;for(let I=0;I<3;I++){let k=0;for(let T=0;T<4;T++){const v=c(m-1+T)*r;let C=0;for(let N=0;N<4;N++)C+=S[N]*a[(v+d(x-1+N))*o+I];k+=y[T]*C}s[M+I]=Math.min(255,Math.max(0,Math.round(k)))}}}return s}function fi(e,t,n=1){const r=Ow(e.width,e.height,t,n),i=Pa(e,r.resizedWidth,r.resizedHeight),o=t*t,a=new Float32Array(3*o).fill(Rw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const c=(l+d)*3,p=u+d;a[p]=i[c]/255,a[o+p]=i[c+1]/255,a[2*o+p]=i[c+2]/255}}return{tensor:a,params:r}}function Ua(e,t,n,r){const i=[],o=Math.floor(e.length/6);for(let a=0;a<o;a++){const s=e[a*6],u=e[a*6+1],l=e[a*6+2],d=e[a*6+3],c=e[a*6+4],p=e[a*6+5];if(c<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(d-t.padY)/t.scale;i.push({classIndex:f,confidence:c,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const Tr=.8,Mm=.65,Nw=110,zw=1280;function Bw(e,t,n){if(n==null)return Tr;if(n.length===0)return Mm;const r=Math.max(e,t);if(!(r>0))return Tr;const i=zw/r,o=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(o.length===0)return Tr;const a=o.length;return(a%2===1?o[(a-1)/2]:(o[a/2-1]+o[a/2])/2)>=Nw?Mm:Tr}const Sm=.25,Im=.6;function Pw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),o=Math.trunc(Number(n[2])),a=Math.trunc(Number(n[3]));if(![r,i,o,a].every(b=>Number.isFinite(b)))return null;const s=o-r,u=a-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?Sm:Im)),d=Math.trunc(u*(s>=u?Im:Sm)),c=Math.max(0,r-l),p=Math.max(0,i-d),f=Math.min(Math.trunc(e),o+l),m=Math.min(Math.trunc(t),a+d),y=f-c,w=m-p;return y<=0||w<=0?null:{x:c,y:p,width:y,height:w}}const Dw=3,Uw=.15,Lw=.6;function La(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function Fw(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function Gw(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...i,...o].every(M=>Number.isFinite(M)))return null;const a=La(i,o);if(!(a>0))return null;const s=[];for(const M of t??[]){const I=Math.trunc(Number(M.n));if(!Number.isFinite(I)||I<Dw)continue;const k=Fw(M.poly);k!==null&&s.push({owner:M.owner,c:k,n:I,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((M,I)=>I.n-M.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>Lw);for(const M of u)M.d0=La(M.c,i),M.d1=La(M.c,o),M.ecart=Math.abs(M.d0-M.d1);const d=[...u].sort((M,I)=>I.ecart-M.ecart),c=d[0],p=d[1],f=c.d0<c.d1?0:1,m=r>0?1:0,y=f===m?c:p,w=f===m?p:c,b=f===1?c.owner:p.owner,x=f===1?p.owner:c.owner,S=c.ecart/a<Uw;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(S||l)}}catch{return null}}function Ww(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const qw=.6;function Em(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++){if(e[o*6+4]<n)continue;const s=(e[o*6]-t.padX)/t.scale,u=(e[o*6+1]-t.padY)/t.scale,l=(e[o*6+2]-t.padX)/t.scale,d=(e[o*6+3]-t.padY)/t.scale,c=at((s+l)/2),p=at((u+d)/2),f=at((l-s+(d-u))/4);f>=1&&r.push({cx:c,cy:p,r:f})}return r}function Vw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(qw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Hw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Jn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),o=Math.floor(r.cy/t);return i!==o?i-o:n.cx-r.cx})}function Tm(e,t,n){const r=Em(e,t,n);return r.length===0?[]:Hw(Vw(r))}function jw(e,t,n){return Em(e,t,n)}function kr(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++)e[o*6+4]<n||r.push([(e[o*6]-t.padX)/t.scale,(e[o*6+1]-t.padY)/t.scale,(e[o*6+2]-t.padX)/t.scale,(e[o*6+3]-t.padY)/t.scale]);return r}const Kw=.5,Yw=.7,Xw=.55;function Fa(e){const t=e.map(([n,r,i,o])=>Math.min(i-n,o-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function km(e){if(e.length===0)return[];const t=(Kw*Fa(e))**2,n=[];for(const i of e){const o=(i[0]+i[2])/2,a=(i[1]+i[3])/2,s=n.find(u=>(u.cx-o)**2+(u.cy-a)**2<=t);if(s===void 0)n.push({cx:o,cy:a,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+o)/u,s.cy=(s.cy*(u-1)+a)/u}}let r=n.map(({boxes:i})=>[Math.trunc(Jn(i.map(o=>o[0]))),Math.trunc(Jn(i.map(o=>o[1]))),Math.trunc(Jn(i.map(o=>o[2]))),Math.trunc(Jn(i.map(o=>o[3])))]);if(r.length>=2){const i=Fa(r),o=r.map(()=>!0);for(let a=0;a<r.length;a++)if(o[a])for(let s=a+1;s<r.length;s++){if(!o[s])continue;const u=r[a],l=r[s],d=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),c=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=d*c,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=Yw*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(o[y<=w?s:a]=!1,!o[a])break}}r=r.filter((a,s)=>o[s])}if(r.length>=3){const i=Fa(r);r=r.filter(([o,a,s,u])=>Math.min(s-o,u-a)>=Xw*i)}return r}const Cm=["brown","grey","blue","green","yellow","red","purple"],Qw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Zw=.7;function Am(e){const t=e.map((i,o)=>o).sort((i,o)=>e[o].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const o=e[i],[a,s,u,l]=o.box;let d=!1;for(const c of r){const p=e[c];if(p.family!==o.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(a+u,f+y)-Math.max(a,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),S=Math.max(1,Math.min(u*l,y*w));if(b*x>=Zw*S){d=!0;break}}d?n.add(i):r.push(i)}return e.filter((i,o)=>!n.has(o))}function mi(e,t,n){const r=Ua(e,t,n,Cm.length).map(i=>{const o=Cm[i.classIndex];return{color:o,family:Qw[o],box:i.box,confidence:i.confidence}});return Am(r)}const Jw=8,eb=.8,Rm=1.25;function tb(e){if(e.length<Jw)return[];const t=[],n=[];for(const a of e){const[,,s,u]=a.box;s>u*Rm?t.push(a):u>s*Rm&&n.push(a)}const[r,i,o]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<eb*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${o} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const nb=2.25,Om=8;function rb(e){if(e.length<Om)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=nb*n[Math.floor(n.length/2)],i=r*r,o=e.map((c,p)=>p),a=c=>{for(;o[c]!==c;)o[c]=o[o[c]],c=o[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const f=t[c][0]-t[p][0],m=t[c][1]-t[p][1];f*f+m*m<=i&&(o[a(c)]=a(p))}const s=new Map;for(let c=0;c<e.length;c++){const p=a(c);s.set(p,[...s.get(p)??[],c])}let u=[];for(const c of s.values())c.length>u.length&&(u=c);if(u.length<Om||u.length===e.length)return[];const l=new Set(u),d=e.map((c,p)=>p).filter(c=>!l.has(c));return d.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${d.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const it={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function zt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,a=r===0?0:Math.round(255*o/r);if(o===0)return{h:0,s:a,v:r};let s;return r===e?s=60*(t-n)/o:r===t?s=120+60*(n-e)/o:s=240+60*(e-t)/o,s<0&&(s+=360),{h:Math.round(s/2),s:a,v:r}}const ib=.42,ob=22,ab=43,sb=120,ub=1.5,lb=.72,cb=110,Nm=3;function Cr(e,t,n){const{width:r,height:i,channels:o,data:a}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*ib);if(l<1)return 0;let d=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-s)**2+(c-u)**2>l*l)continue;const f=(c*r+p)*o,m=a[f],y=a[f+1],w=a[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),d+=1)}return d}function db(e){let t=0,n=0,r=0,i=Cr(e,!1,(o,a,s)=>{const u=zt(o,a,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Cr(e,!0,(o,a,s)=>{const u=zt(o,a,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function hb(e){let t=0,n=0,r=Cr(e,!1,(o,a)=>{t+=o,n+=a});if(r===0&&(r=Cr(e,!0,(o,a)=>{t+=o,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function pb(e){let t=0;const n=Cr(e,!0,(r,i,o)=>{t+=zt(r,i,o).s});return n===0?null:t/n}function fb(e){const t=db(e);if(t===null||t.s<=ob)return 1;if(t.s>=sb){const n=hb(e);return n!==null&&n>=ub?6:3}return t.s>=ab?3:6}function mb(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,s)=>a-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,s)=>e[a].r-e[s].r),o=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>o.get(a))}function gb(e,t){const n=[...t];if(e.length<Nm||t.length!==e.length)return n;const r=e.map(a=>pb(a)),i=r.filter(a=>a!==null);if(i.length<Nm)return n;const o=Jn(i);return o<=0||r.forEach((a,s)=>{a!==null&&n[s]!==1&&a<lb*o&&a<cb&&(n[s]=1)}),n}function zm(e,t){const{cx:n,cy:r,r:i}=t,o=Math.max(0,n-i),a=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-o),d=Math.max(0,u-a),c=new Uint8Array(l*d*3);for(let p=0;p<d;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+o-n)**2+(p+a-r)**2<=i*i){const w=((p+a)*e.width+(f+o))*e.channels;c[m]=e.data[w],c[m+1]=e.data[w+1],c[m+2]=e.data[w+2]}else c[m]=255,c[m+1]=255,c[m+2]=255}return{width:l,height:d,channels:3,data:c}}function yb(e,t){const n=t.map(o=>zm(e,o)),r=n.map(o=>fb(o)),i=mb(t,r);return gb(n,i)}function wb(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n);for(let a=0,s=0;a<o.length;a++,s+=r)o[a]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:o}}function Bm(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,o=e.height/n;for(let a=0;a<n;a++){const s=a*o,u=Math.min((a+1)*o,e.height);for(let l=0;l<t;l++){const d=l*i,c=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(d);w<c;w++){const b=Math.min(w+1,c)-Math.max(w,d);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[a*t+l]=Math.min(255,Math.max(0,at(p/f)))}}return{width:t,height:n,data:r}}function bb(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const o=255/(n-t[r]),a=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],a[u]=Math.min(255,Math.max(0,at(s*o)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function _b(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const d=a+l,c=o+u;if(!(d<0||d>=t||c<0||c>=n)&&r[c*t+d]===0){s=!1;break}}i[o*t+a]=s&&r[o*t+a]>0?255:0}return{width:t,height:n,data:i}}function xb(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const d=a+l,c=o+u;if(d>=0&&d<t&&c>=0&&c<n&&r[c*t+d]>0){s=!0;break}}i[o*t+a]=s?255:0}return{width:t,height:n,data:i}}function Ga(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),o=[],a=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,d=0;a[d++]=u,i[u]=s;let c=0,p=0,f=0;for(;l<d;){const m=a[l++],y=m%t,w=m/t|0;c+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const S=y+x,M=w+b;if(S<0||S>=t||M<0||M>=n)continue;const I=M*t+S;r[I]>0&&i[I]===0&&(i[I]=s,a[d++]=I)}}o[s]={area:c,centroidX:p/c,centroidY:f/c},s+=1}return{labels:i,stats:o}}function $b(e,t,n){return Pm(Float32Array.from(e.data),e.width,t,n)}function Pm(e,t,n,r){const i=new Float32Array(t*t),o=t/2,a=-n*Math.PI/180,s=Math.cos(a),u=Math.sin(a);for(let l=0;l<t;l++)for(let d=0;d<t;d++){const c=d-o,p=l-o,f=s*c-u*p+o,m=u*c+s*p+o,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,S=(k,T)=>k>=0&&k<t&&T>=0&&T<t?e[T*t+k]:r,M=S(y,w)*(1-b)+S(y+1,w)*b,I=S(y,w+1)*(1-b)+S(y+1,w+1)*b;i[l*t+d]=M*(1-x)+I*x}return i}const vb=.9,Mb=.34,Sb=[.55,.6,.66,.72],Ib=22,Eb=88,Tb=35,tr=28,Wa=4,kb=Array.from({length:15},(e,t)=>-21+t*3),Dm=[-2,0,2],Cb=3,Ab=.3;function Rb(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Ob(e){let t=e.width,n=-1,r=e.height,i=-1,o=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(o+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(o<8)return null;const a=n-t+1,s=i-r+1,u=Math.max(s,a),l=new Uint8Array(u*u),d=Math.floor((u-a)/2),c=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<a;w++)l[(y+c)*u+(w+d)]=e.data[(y+r)*e.width+(w+t)];const p=tr-2*Wa,f=Bm({width:u,height:u,data:l},p,p),m=new Float32Array(tr*tr);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+Wa)*tr+(w+Wa)]=f.data[y*p+w]>110?1:0;return m}function Nb(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*Mb);if(u<4)return null;const l=a-u,d=s-u,c=2*u,p=2*u;if(c<6||p<6)return null;const f=new Int16Array(c*p),m=new Int16Array(c*p),y=new Int16Array(c*p),w=new Uint8Array(c*p),b=[],x=Math.min(c,p)/2;for(let W=0;W<c;W++)for(let P=0;P<p;P++){const R=((W+l)*n+(P+d))*i,{h:z,s:D,v:F}=zt(o[R],o[R+1],o[R+2]),Y=W*p+P;f[Y]=z,m[Y]=D,y[Y]=F,Math.sqrt((P-p/2)**2+(W-c/2)**2)/x<=t&&(w[Y]=1,b.push(F))}if(b.length<16)return null;const S=$m(b,55);let M=0,I=0,k=0;const T=W=>f[W]>=Ib&&f[W]<=Eb&&m[W]>=Tb,v=W=>y[W]>=S&&m[W]<=95&&!T(W)&&w[W]===1;for(let W=0;W<c*p;W++)w[W]===1&&(k+=1,y[W]>=130&&!T(W)&&(M+=1),v(W)&&(I+=1));const C=M>.5*k&&I<.15*k,N=new Uint8Array(c*p);if(C){const W=$m(b,45);for(let P=0;P<c*p;P++)N[P]=w[P]===1&&y[P]<=W?255:0}else for(let W=0;W<c*p;W++)N[W]=v(W)?255:0;const B={width:p,height:c,data:N},q=_b(B);let G=Ga(q),O=G;if(G.stats.length<=1&&(G=Ga(B),O=G,G.stats.length<=1))return null;const V=Math.min(c,p)/2;let Q=0,J=-1;for(let W=1;W<O.stats.length;W++){const P=O.stats[W];if(P===void 0)continue;const R=Math.hypot(P.centroidX-p/2,P.centroidY-c/2)/V,z=P.area*(1-.6*Math.min(R,1));z>J&&(J=z,Q=W)}if(Q===0)return null;const he=new Uint8Array(c*p);for(let W=0;W<c*p;W++)he[W]=O.labels[W]===Q?255:0;return Ob(xb({width:p,height:c,data:he}))}function zb(e,t,n,r,i,o){const a=tr;let s=0,u=0;for(let l=0;l<a;l++){const d=l-o;if(!(d<0||d>=a))for(let c=0;c<a;c++){const p=c-i;if(p<0||p>=a)continue;const f=e[d*a+p];f!==0&&(u+=f,s+=f*n[l*a+c])}}return s/(u+r-s+1e-6)}function Bb(e,t){const n=t.reduce((i,o)=>i+o,0);let r=-1;for(const i of kb){const o=i===0?e:Pm(e,tr,i,0),a=o.reduce((s,u)=>s+u,0);for(const s of Dm)for(const u of Dm){const l=zb(o,a,t,n,s,u);l>r&&(r=l)}}return r}function Pb(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of Sb){const s=Nb(e,a);if(s!==null)for(const{label:u,bits:l}of t)n.push([Bb(s,l),u])}if(n.length===0)return[null,0];if(n.sort((a,s)=>s[0]-a[0]),n[0][0]<Ab)return[null,0];const r=new Map;for(const[a,s]of n.slice(0,Cb))r.set(s,(r.get(s)??0)+a);let i=0,o=-1;for(const[a,s]of r)s>o&&(o=s,i=a);return[i,n[0][0]]}const Db=2560,Ub=.3,Lb=.5,Fb=1.6,Gb=3,Wb=5;function qb(e){const t=Math.min(1,Db/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,o=new Float32Array(3*i),a=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,d+1),p=Math.max(0,Math.min(1,l-d));for(let f=0;f<n;f++){const m=(f+.5)*a-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const S=2-x,M=(d*e.width+y)*e.channels+S,I=(d*e.width+w)*e.channels+S,k=(c*e.width+y)*e.channels+S,T=(c*e.width+w)*e.channels+S,v=e.data[M]*(1-b)+e.data[I]*b,C=e.data[k]*(1-b)+e.data[T]*b,N=v*(1-p)+C*p;o[x*i+u*n+f]=(N/255-.5)/.5}}}return{tensor:o,width:n,height:r}}function Vb(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const o=i===n-1;for(let a=0;a<t;a++){const s=i*t+a;let u=e[s];if(a+1<t&&e[s+1]>u&&(u=e[s+1]),!o){const l=s+t;e[l]>u&&(u=e[l]),a+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function Hb(e){if(e.length<3)return e;const t=[...e].sort((o,a)=>o[0]-a[0]||o[1]-a[1]),n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(let o=t.length-1;o>=0;o--){const a=t[o];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function jb(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,o]=e[r],[a,s]=e[(r+1)%e.length],u=a-i,l=s-o,d=Math.hypot(u,l);if(d===0)continue;const c=u/d,p=l/d;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[M,I]of e){const k=M*c+I*p,T=-M*p+I*c;k<f&&(f=k),k>m&&(m=k),T<y&&(y=T),T>w&&(w=T)}const b=m-f,x=w-y,S=b*x;if(S<n){n=S;const M=(f+m)/2,I=(y+w)/2;t={cx:M*c-I*p,cy:M*p+I*c,w:b,h:x,angle:Math.atan2(p,c)}}}return t}function Kb(e,t,n,r){const i=Math.cos(r.angle),o=Math.sin(r.angle),a=r.w/2,s=r.h/2,u=Math.abs(a*i)+Math.abs(s*o),l=Math.abs(a*o)+Math.abs(s*i),d=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=d;b<=c;b++){const x=b-r.cx,S=w-r.cy,M=x*i+S*o,I=-x*o+S*i;Math.abs(M)<=a&&Math.abs(I)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function Yb(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,d]=a,[c,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=d[1]?[l,d]:[d,l];return[[c[0],c[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function Xb(e,t,n,r){const{width:i,height:o}=t;let a=new Uint8Array(i*o);for(let f=0;f<a.length;f++)a[f]=e[f]>Ub?255:0;a=Vb(a,i,o);const s={width:i,height:o,data:a},{labels:u}=Ga(s),l=new Map;for(let f=0;f<o;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const d=n/i,c=r/o,p=[];for(const[f,m]of l){const y=[];for(const[N,[B,q]]of m)y.push([B-.5,N-.5],[B-.5,N+.5],[q+.5,N-.5],[q+.5,N+.5]);const w=jb(Hb(y));if(Math.min(w.w,w.h)<Gb)continue;const b=Kb(e,i,o,w);if(b<Lb)continue;const x=w.w*w.h*Fb/(2*(w.w+w.h)),S={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(S.w,S.h)<Wb+2)continue;const I=Yb(S).map(([N,B])=>[Math.min(n,Math.max(0,Math.round(N*d))),Math.min(r,Math.max(0,Math.round(B*c)))]),k=I.map(N=>N[0]),T=I.map(N=>N[1]),v=Math.min(...k),C=Math.min(...T);p.push({quad:I,x:v,y:C,width:Math.max(...k)-v,height:Math.max(...T)-C,score:b})}return p.sort((f,m)=>m.score-f.score)}function Qb(e,t){const[n,r,i,o]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-o[0],i[1]-o[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(o[0]-n[0],o[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Zb([[0,0],[a,0],[a,s],[0,s]],[n,r,i,o]),l=new Uint8Array(a*s*e.channels);for(let c=0;c<s;c++)for(let p=0;p<a;p++){const f=u[6]*p+u[7]*c+u[8],m=(u[0]*p+u[1]*c+u[2])/f,y=(u[3]*p+u[4]*c+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,S=y-b,M=Math.max(0,Math.min(e.width-1,w)),I=Math.max(0,Math.min(e.width-1,w+1)),k=Math.max(0,Math.min(e.height-1,b)),T=Math.max(0,Math.min(e.height-1,b+1));for(let v=0;v<e.channels;v++){const C=e.data[(k*e.width+M)*e.channels+v],N=e.data[(k*e.width+I)*e.channels+v],B=e.data[(T*e.width+M)*e.channels+v],q=e.data[(T*e.width+I)*e.channels+v],G=C*(1-x)+N*x,O=B*(1-x)+q*x;l[(c*a+p)*e.channels+v]=Math.round(G*(1-S)+O*S)}}const d={width:a,height:s,channels:e.channels,data:l};return s/a>=1.5?Jt(d,3):d}function Zb(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[o,a]=e[i],[s,u]=t[i];n.push([o,a,1,0,0,0,-s*o,-s*a]),r.push(s),n.push([0,0,0,o,a,1,-u*o,-u*a]),r.push(u)}for(let i=0;i<8;i++){let o=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[o][i])&&(o=s);[n[i],n[o]]=[n[o],n[i]],[r[i],r[o]]=[r[o],r[i]];const a=n[i][i];for(let s=i;s<8;s++)n[i][s]/=a;r[i]/=a;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Jt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:o,data:a}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*o);for(let d=0;d<i;d++)for(let c=0;c<r;c++){let p,f;n===1?(p=i-1-d,f=c):n===2?(p=r-1-c,f=i-1-d):(p=d,f=r-1-c);const m=(d*r+c)*o,y=(f*s+p)*o;for(let w=0;w<o;w++)l[y+w]=a[m+w]}return{width:s,height:u,channels:o,data:l}}const Jb=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,Jb)*255));return e})();const en=48,e_=320;function t_(e){return["blank",...e.characters," "]}function n_(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const s=e[a];s!==0&&(a>0&&e[a-1]===s||(r+=n[s]??"",i.push(t[a])))}if(i.length===0)return["",0];const o=i.reduce((a,s)=>a+s,0)/i.length;return[r,o]}function r_(e,t){const n=Math.trunc(en*t),r=e.width/e.height,i=Math.ceil(en*r)>n?n:Math.ceil(en*r),o=new Float32Array(3*en*n),a=en*n,s=e.width/i,u=e.height/en;for(let l=0;l<en;l++){const d=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,d-c));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let S=0;S<3;S++){const M=2-S,I=(c*e.width+w)*e.channels+M,k=(c*e.width+b)*e.channels+M,T=(p*e.width+w)*e.channels+M,v=(p*e.width+b)*e.channels+M,C=e.data[I]*(1-x)+e.data[k]*x,N=e.data[T]*(1-x)+e.data[v]*x,B=C*(1-f)+N*f;o[S*a+l*n+m]=(B/255-.5)/.5}}}return{tensor:o,width:n}}const i_=62,o_=8,a_=5;function qa(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function s_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),o=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let s=1;s<=r;s++)o[s]=e[a-1]===t[s-1]?i[s-1]+1:Math.max(i[s],o[s-1]);[i,o]=[o,i]}return i[r]}function gi(e,t){return e.length===0&&t.length===0?100:200*s_(e,t)/(e.length+t.length)}function Um(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return gi(n(e),n(t))}function u_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(d=>r.has(d)).sort(),o=[...n].filter(d=>!r.has(d)).sort(),a=[...r].filter(d=>!n.has(d)).sort(),s=i.join(" "),u=[s,o.join(" ")].filter(Boolean).join(" "),l=[s,a.join(" ")].filter(Boolean).join(" ");return s.length>0&&(o.length===0||a.length===0)?100:Math.max(gi(s,u),gi(s,l),gi(u,l))}function l_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const o of[qa(i),qa(r.name)])if(o)for(const a of[o,o.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function c_(e,t){const n=qa(e);if(!n||t.length===0)return null;const i=l_(t).map(d=>({...d,score:u_(n,d.key)})).sort((d,c)=>c.score-d.score).slice(0,o_).filter(d=>d.score>=i_);if(i.length===0)return null;const o=i[0].score,a=i.filter(d=>o-d.score<=a_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],l=[Um(s,u.key),u.score];for(const d of a.slice(1)){const c=[Um(s,d.key),d.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=d,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Lm=5e3,Va=.75,Fm=15,d_=1.25,h_=2.4,p_=.003,f_=.85,m_=4,Ha=2600,ja=2,Ka=.3,Gm=.1,Wm=.012,g_=22,qm=.5,yi=.12;function tt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let o=0,a=t.width*t.height;o<a;o++)r[o*3]=t.data[o*i],r[o*3+1]=t.data[o*i+1],r[o*3+2]=t.data[o*i+2];return n}function y_(e,t,n,r){const i=r.map(ee=>ee[0]),o=r.map(ee=>ee[1]),a=i.reduce((ee,fe)=>ee+fe,0)/i.length,s=o.reduce((ee,fe)=>ee+fe,0)/o.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...o)-Math.min(...o));if(u<4)return null;const l=u*m_,d=Math.max(0,Math.trunc(a-l)),c=Math.min(n.width,Math.trunc(a+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(c-d<8||f-p<8)return null;const m=Math.max(n.width,n.height)<Ha?ja:1,y=tt(e,n),w=tt(e,t),b=new e.Rect(d,p,c-d,f-p),x=y.roi(b),S=new e.Mat;m!==1?e.resize(x,S,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(S);const M=new e.Mat,I=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(S,I,e.COLOR_RGB2GRAY);const k=new e.ORB(Lm),T=new e.KeyPointVector,v=new e.KeyPointVector,C=new e.Mat,N=new e.Mat,B=new e.Mat,q=[y,w,x,S,M,I,T,v,C,N,B],G=ee=>{for(const fe of q)try{fe.delete()}catch{}try{k.delete()}catch{}return ee};if(k.detectAndCompute(M,B,T,C),k.detectAndCompute(I,B,v,N),C.rows<8||N.rows<8)return G(null);const O=new e.BFMatcher(e.NORM_HAMMING),V=new e.DMatchVectorVector;O.knnMatch(C,N,V,2);const Q=[],J=[];for(let ee=0;ee<V.size();ee++){const fe=V.get(ee);if(fe.size()===2){const xe=fe.get(0),ke=fe.get(1);if(xe.distance<Va*ke.distance){const Ue=T.get(xe.queryIdx).pt,st=v.get(xe.trainIdx).pt;Q.push(Ue.x,Ue.y),J.push(st.x,st.y)}}}if(V.delete(),O.delete(),Q.length/2<8)return G(null);const he=e.matFromArray(Q.length/2,1,e.CV_32FC2,Q),W=e.matFromArray(J.length/2,1,e.CV_32FC2,J),P=new e.Mat,R=e.findHomography(he,W,e.RANSAC,5,P);let z=0;for(let ee=0;ee<P.rows;ee++)z+=P.data[ee];const D=R.rows===3?[...R.data64F]:null;if(he.delete(),W.delete(),P.delete(),R.delete(),D===null||z<Fm)return G(null);const F=1/m,Y=[[F,0,d],[0,F,p],[0,0,1]],ne=[0,1,2].map(ee=>[0,1,2].map(fe=>Y[ee][0]*D[fe]+Y[ee][1]*D[3+fe]+Y[ee][2]*D[6+fe]));return G({H:ne,inliers:z})}function Ya(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,d]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*d}const i=Math.abs(r/2)/(t*n);if(i<p_||i>f_)return!1;const o=e.map((u,l)=>{const d=e[(l+1)%4];return Math.hypot(d[0]-u[0],d[1]-u[1])}),a=Math.min(...o);if(a<1)return!1;const s=Math.max(...o)/a;return s>=d_&&s<=h_}function Xa(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Qa(e,t,n,r){const i=n.width,o=n.height,a=Math.max(8,Math.trunc(Ka*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=r.map(q=>[q[0],q[1],q[2]-a*(q[0]+q[1])+0]);for(let q=0;q<3;q++)l[q][2]=r[q][2]-a*r[q][0]-a*r[q][1];const d=tt(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(d,c,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(c,f,e.COLOR_RGB2Lab),d.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(a/3)),w=[[],[],[]],b=(q,G)=>{const O=(G*s+q)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let q=0;q<u;q++)for(let G=0;G<s;G++)(q<y||q>=u-y||G<y||G>=s-y)&&b(G,q);const x=q=>{q.sort((O,V)=>O-V);const G=q.length>>1;return q.length%2?q[G]:(q[G-1]+q[G])/2},S=[x(w[0]),x(w[1]),x(w[2])],M=(q,G)=>{const O=(G*s+q)*3,V=m[O]-S[0],Q=m[O+1]-S[1],J=m[O+2]-S[2];return Math.sqrt(V*V+Q*Q+J*J)>g_},I=Math.max(6,Math.trunc(Gm*i)),k=Math.max(6,Math.trunc(Gm*o)),T=Math.max(2,Math.trunc(Wm*i)),v=Math.max(2,Math.trunc(Wm*o)),C=q=>{let G=0,O=0;for(const V of q)O=V?O+1:0,O>G&&(G=O);return G/Math.max(1,q.length)},N=q=>{let G,O,V,Q,J;if(q==="L"?(G=a,O=a+o,V=Math.max(0,a-T-I),Q=Math.max(0,a-T),J=!1):q==="R"?(G=a,O=a+o,V=a+i+T,Q=Math.min(s,a+i+T+I),J=!1):(G=Math.max(0,a-v-k),O=Math.max(0,a-v),V=a,Q=a+i,J=!0),O<=G||Q<=V)return 0;const he=[];if(J)for(let W=V;W<Q;W++){let P=0;for(let R=G;R<O;R++)M(W,R)&&P++;he.push(P/(O-G)>qm)}else for(let W=G;W<O;W++){let P=0;for(let R=V;R<Q;R++)M(R,W)&&P++;he.push(P/(Q-V)>qm)}return C(he)},B={L:N("L"),R:N("R"),T:N("T")};return c.delete(),f.delete(),B}const w_=6e3,b_=8,Vm=.5,__=.6;function x_(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<Ha?ja:1,o=tt(e,t),a=new e.Mat;i!==1?e.resize(o,a,new e.Size(0,0),i,i,e.INTER_CUBIC):o.copyTo(a);const s=new e.Mat;e.cvtColor(a,s,e.COLOR_RGB2GRAY),o.delete(),a.delete();const u=new e.ORB(w_),l=new e.Mat,d=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(s,l,d,c);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=tt(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,S=new e.Mat;u.detectAndCompute(b,l,x,S);const M=[w,x,S],I=()=>{for(const ne of M)ne.delete();b.delete()};if(S.rows<8){I();continue}const k=new e.DMatchVectorVector;f.knnMatch(S,c,k,2);const T=[],v=[];for(let ne=0;ne<k.size();ne++){const ee=k.get(ne);if(ee.size()===2){const fe=ee.get(0);if(fe.distance<Va*ee.get(1).distance){const xe=x.get(fe.queryIdx).pt,ke=d.get(fe.trainIdx).pt;T.push(xe.x,xe.y),v.push(ke.x,ke.y)}}}if(k.delete(),T.length/2<8){I();continue}const C=e.matFromArray(T.length/2,1,e.CV_32FC2,T),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),B=new e.Mat,q=e.findHomography(C,N,e.RANSAC,5,B);let G=0;for(let ne=0;ne<B.rows;ne++)G+=B.data[ne];const O=q.rows===3?[...q.data64F]:null;if(C.delete(),N.delete(),B.delete(),q.delete(),O===null||G<b_){I();continue}const V=1/i,Q=[[V*O[0],V*O[1],V*O[2]],[V*O[3],V*O[4],V*O[5]],[O[6],O[7],O[8]]],J=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ne,ee])=>Xa(Q,ne,ee));if(!Ya(J,t.width,t.height)){I();continue}const he=tt(e,t),W=e.matFromArray(3,3,e.CV_64F,Q.flat()),P=new e.Mat;e.warpPerspective(he,P,W,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const R=new e.Mat;e.cvtColor(P,R,e.COLOR_RGB2GRAY);const z=new e.Mat;e.matchTemplate(R,b,z,e.TM_CCOEFF_NORMED);const D=z.data32F[0];if(he.delete(),W.delete(),P.delete(),R.delete(),z.delete(),D<Vm){I();continue}const F=Qa(e,t,y,Q),Y=Za(F);p.push({id:m,confidence:Math.max(0,D),footprint:J,built:F!==null&&Math.max(F.L,F.R,F.T)>=yi,tuckRegion:wi(J,Y)}),I()}}finally{s.delete(),l.delete(),d.delete(),c.delete();try{u.delete(),f.delete()}catch{}}return p}function Za(e){return e!==null&&e.R>=yi?["R"]:[]}function wi(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),o=.5*(r+i),a=Ka*o;if(!(a>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},d=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],S=n[b];let M=-(S[1]-x[1]),I=S[0]-x[0];const k=(x[0]+S[0])/2,T=(x[1]+S[1])/2;M*(k-s)+I*(T-u)<0&&(M=-M,I=-I);const v=Math.hypot(M,I);v<=1e-6||(M=M/v*a,I=I/v*a,d.push([x[0]+M,x[1]+I],[S[0]+M,S[1]+I]))}const c=d.map(y=>y[0]),p=d.map(y=>y[1]),f=Math.round(Math.min(...c)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...c))-f,height:Math.round(Math.max(...p))-m}}function $_(e,t,n,r){const i=y_(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,d])=>Xa(i.H,l,d));if(!Ya(a,t.width,t.height))return null;const s=Qa(e,t,n,i.H);if(s===null)return null;const u=Za(s);return{built:Math.max(s.L,s.R,s.T)>=yi,footprint:a,overflow:u,edgeScores:s,inliers:i.inliers}}const v_=.88;function Ja(e,t,n,r){if(r.length!==4)return null;const i=n.width,o=n.height,a=Math.max(8,Math.trunc(Ka*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=a+Math.trunc(i*v_),d=s-l;if(d<1)return null;const c=tt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(T=>[y[T*3],y[T*3+1],y[T*3+2]-a*y[T*3]-a*y[T*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(c,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const S=x.roi(new e.Rect(l,0,d,u)),M=new e.Mat;S.copyTo(M);const I=M.data,k=new Uint8ClampedArray(d*u*3);k.set(I.subarray(0,k.length));for(const T of[c,p,f,m,b,x,S,M])try{T.delete()}catch{}return{width:d,height:u,channels:3,data:k}}function M_(e,t,n,r){const[i,o,a,s]=r;if(a<8||s<8)return null;const u=Math.trunc(.06*a),l=Math.trunc(.06*s),d=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+a+u)),p=Math.max(0,Math.trunc(o-l)),f=Math.min(n.height,Math.trunc(o+s+l));if(c-d<8||f-p<8)return null;const m=Math.max(n.width,n.height)<Ha?ja:1,y=tt(e,n),w=tt(e,t),b=y.roi(new e.Rect(d,p,c-d,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const S=new e.Mat,M=new e.Mat;e.cvtColor(w,S,e.COLOR_RGB2GRAY),e.cvtColor(x,M,e.COLOR_RGB2GRAY);const I=new e.ORB(Lm),k=new e.KeyPointVector,T=new e.KeyPointVector,v=new e.Mat,C=new e.Mat,N=new e.Mat,B=[y,w,b,x,S,M,k,T,v,C,N],q=ne=>{for(const ee of B)try{ee.delete()}catch{}try{I.delete()}catch{}return ne};if(I.detectAndCompute(S,N,k,v),I.detectAndCompute(M,N,T,C),v.rows<8||C.rows<8)return q(null);const G=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;G.knnMatch(v,C,O,2);const V=[],Q=[];for(let ne=0;ne<O.size();ne++){const ee=O.get(ne);if(ee.size()===2){const fe=ee.get(0),xe=ee.get(1);if(fe.distance<Va*xe.distance){const ke=k.get(fe.queryIdx).pt,Ue=T.get(fe.trainIdx).pt;V.push(ke.x,ke.y),Q.push(Ue.x,Ue.y)}}}if(O.delete(),G.delete(),V.length/2<8)return q(null);const J=e.matFromArray(V.length/2,1,e.CV_32FC2,V),he=e.matFromArray(Q.length/2,1,e.CV_32FC2,Q),W=new e.Mat,P=e.findHomography(J,he,e.RANSAC,5,W);let R=0;for(let ne=0;ne<W.rows;ne++)R+=W.data[ne];const z=P.rows===3?[...P.data64F]:null;if(J.delete(),he.delete(),W.delete(),P.delete(),z===null||R<Fm)return q(null);const D=1/m,F=[[D,0,d],[0,D,p],[0,0,1]],Y=[0,1,2].map(ne=>[0,1,2].map(ee=>F[ne][0]*z[ee]+F[ne][1]*z[3+ee]+F[ne][2]*z[6+ee]));return q({H:Y,inliers:R})}const S_=620;function I_(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Hm(e,t,n,r){const i=jm(e,t,n,r);if(i!==null)return i;try{const[o,a,s,u]=r.map(I=>Math.trunc(I));if(Math.min(s,u)>=S_||s<=0||u<=0)return null;const l=Math.trunc(s*.25),d=Math.trunc(u*.25),c=Math.max(0,o-l),p=Math.max(0,a-d),f=Math.min(t.width,o+s+l),m=Math.min(t.height,a+u+d);if(f<=c||m<=p)return null;const y=tt(e,t),w=y.roi(new e.Rect(c,p,f-c,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-c)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=I_(e,b);for(const I of[y,w,b])try{I.delete()}catch{}const S=[(o-c)*2,(a-p)*2,s*2,u*2],M=jm(e,x,n,S);return M===null?null:{...M,footprint:M.footprint.map(([I,k])=>[I*.5+c,k*.5+p])}}catch{return null}}function jm(e,t,n,r){const i=M_(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>Xa(i.H,b,x));if(!Ya(a,t.width,t.height))return null;const s=tt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const d=tt(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(d,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(c,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,d,c,p,f])try{b.delete()}catch{}if(m<Vm)return null;const y=Qa(e,t,n,i.H);if(y===null)return null;const w=Za(y);return{built:Math.max(y.L,y.R,y.T)>=yi,footprint:a,overflow:w,edgeScores:y,inliers:i.inliers}}function E_(e,t,n,r=.03){let i=null,o=1/0;for(const a of e){const[s,u,l,d]=a;if(l<=0||d<=0)continue;const c=r*l,p=r*d;if(t>=s-c&&t<=s+l+c&&n>=u-p&&n<=u+d+p){const f=l*d;f<o&&(o=f,i=[s,u,l,d])}}return i}const T_=.3,k_=.3;function C_(e,t){const n=e.filter(o=>o.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(o=>{const{L:a,R:s,T:u}=o.edgeScores;return Math.min(a,s,u)>=T_}),i=[];return e.forEach((o,a)=>{if(!o.built||o.edgeScores===null)return;const{L:s,R:u,T:l}=o.edgeScores,d=Math.max(s,u,l)<k_;if(!r&&!d)return;t.some(([p,f])=>p>=o.zone.x0&&p<=o.zone.x1&&f>=o.zone.y0&&f<=o.zone.y1)||i.push(a)}),i}const $t=128,nr=.5;function bi(e){const t=er(e,$t,$t),n=$t*$t,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function es(e){const t=e[1]??0;return{built:t>=nr,prob:t}}const Ar=120,Rr=179,A_=1.3,R_=3.6,O_=.45,N_=6e-4,z_=.02,B_=6e3,P_=.78,D_=1.25,U_=2.4,L_=.05,F_=1.5,G_=.5,W_=.9,q_=150,V_=18,H_=34,j_=90,K_=130,Y_=.13,X_=.15,_i="magistrates-guild",ts="merchants-guild";function Q_(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[Ar,30,40,0]),o=new e.Mat(r.rows,r.cols,r.type(),[Rr,255,205,255]),a=new e.Mat;e.inRange(r,i,o,a),r.delete(),i.delete(),o.delete();const s=new Uint8Array(a.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(a,l,e.MORPH_CLOSE,u),a.delete(),u.delete();const d=new e.Mat,c=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,d,c,p,8);l.delete(),d.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=c.intAt(w,0),x=c.intAt(w,1),S=c.intAt(w,2),M=c.intAt(w,3),I=c.intAt(w,4),k=I/m;k<N_||k>z_||I/Math.max(S*M,1)<O_||y.push({x:b,y:x,w:S,h:M})}return c.delete(),{blobs:y,mask:s,maskWidth:t.width}}function Z_(e,t,n,r,i,o,a){const s=e,u=o,l=a,d=i;if(!d.gray){const D=tt(e,r);d.gray=new s.Mat,s.cvtColor(D,d.gray,s.COLOR_RGB2GRAY),D.delete(),d.k=new s.KeyPointVector,d.d=new s.Mat;const F=new s.Mat;u.detectAndCompute(d.gray,F,d.k,d.d),F.delete()}const c=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(c,p,f,m),p.delete();const y=D=>(f.delete(),m.delete(),D);if(d.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(d.d,m,w,2);const b=[],x=[];for(let D=0;D<w.size();D++){const F=w.get(D);if(F.size()===2){const Y=F.get(0);if(Y.distance<P_*F.get(1).distance){const ne=d.k.get(Y.queryIdx).pt,ee=f.get(Y.trainIdx).pt;b.push(ne.x,ne.y),x.push(ee.x,ee.y)}}}if(w.delete(),b.length/2<8)return y(null);const S=s.matFromArray(b.length/2,1,s.CV_32FC2,b),M=s.matFromArray(x.length/2,1,s.CV_32FC2,x),I=new s.Mat,k=s.findHomography(S,M,s.RANSAC,5,I);if(S.delete(),M.delete(),I.delete(),k.rows!==3)return k.delete(),y(null);const T=[...k.data64F],v=(D,F)=>{const Y=T[6]*D+T[7]*F+T[8];return[(T[0]*D+T[1]*F+T[2])/Y,(T[3]*D+T[4]*F+T[5])/Y]},C=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([D,F])=>v(D,F));if(C.some(D=>!Number.isFinite(D[0])||!Number.isFinite(D[1])))return k.delete(),y(null);const N=C.map((D,F)=>{const Y=C[(F+1)%4];return Math.hypot(Y[0]-D[0],Y[1]-D[1])}),B=Math.min(...N);if(B<1)return k.delete(),y(null);const q=Math.max(...N)/B;let G=0;for(let D=0;D<4;D++){const[F,Y]=C[D],[ne,ee]=C[(D+1)%4];G+=F*ee-ne*Y}const O=t,V=Math.abs(G/2)/(O.rows*O.cols);if(q<D_||q>U_||V<L_||V>F_)return k.delete(),y(null);const Q=new s.Mat;s.warpPerspective(O,Q,k,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),k.delete();const J=new s.Mat;s.cvtColor(Q,J,s.COLOR_RGB2GRAY),Q.delete();const he=Math.trunc(r.height/2),W=J.roi(new s.Rect(0,0,r.width,he)),P=d.gray.roi(new s.Rect(0,0,r.width,he)),R=new s.Mat;s.matchTemplate(W,P,R,s.TM_CCOEFF_NORMED);const z=R.data32F[0];return W.delete(),P.delete(),R.delete(),J.delete(),y(z)}function J_(e,t,n){let r,i;if(n===_i)r=ts,i=Y_;else if(n===ts)r=_i,i=X_;else return null;const{x:o,y:a,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let d=0,c=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=a;b<a+u;b++)for(let x=o+p;x<o+f;x++){const S=(b*e.width+x)*e.channels,{h:M,s:I,v:k}=zt(e.data[S],e.data[S+1],e.data[S+2]);if(M>=Ar&&M<=Rr&&I>=30&&I<=170&&k<=170)continue;m++,(r===ts?M>=V_&&M<=H_&&I>=j_&&k>=K_:M>=95&&M<=130&&I>=80)&&y++}if(m<20)continue;const w=y/m;w>d&&(d=w,c={x:o+p,y:a,w:f-p,h:u})}return d>=i&&c!==null?{id:r,box:c}:null}const e1=1.7,t1=140,n1=170,r1=.2,i1=.1,Km=240,Ym=80,Xm=60,o1=50,Qm="scientists-guild",Zm="tacticians-guild",xi=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function a1(e,t,n){const{x:r,y:i,w:o,h:a}=n,s=new Float32Array(a);for(let M=0;M<a;M++){let I=0;for(let k=0;k<o;k++)e[(i+M)*t+r+k]>0&&I++;s[M]=I/o}const u=[];for(let M=0;M<a;M++)s[M]>.3&&u.push(M);if(u.length<5)return[];const l=u[0],d=u[u.length-1],c=d-l;if(c<5)return[];const p=o/c;if(p<A_||p>R_)return[];if(p>=e1)return[{x:r,y:i+l,w:o,h:c}];const f=new Float32Array(a),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let M=-4;M<=4;M++){const I=Math.exp(-(M*M)/(2*m*m));y.push(I),w+=I}for(let M=0;M<a;M++){let I=0;for(let k=-4;k<=4;k++){const T=Math.min(a-1,Math.max(0,M+k));I+=s[T]*y[k+4]}f[M]=I/w}const b=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let S=l+Math.trunc(c/2);if(x>b){let M=1/0;for(let I=b;I<x;I++)f[I]<M&&(M=f[I],S=I)}return[{x:r,y:i+l,w:o,h:S-l},{x:r,y:i+S,w:o,h:d-S}]}function s1(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),o=Math.min(e.height,t.y+t.h),a=Math.max(0,i-n),s=Math.max(0,o-r),u=new Uint8Array(a*s*3);for(let l=0;l<s;l++)for(let d=0;d<a;d++){const c=((r+l)*e.width+n+d)*e.channels,p=(l*a+d)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:a,height:s,channels:3,data:u}}function u1(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const o=r*e.channels,{h:a,s,v:u}=zt(e.data[o],e.data[o+1],e.data[o+2]);s>=40&&u>=40&&u<=205&&(t++,a>=t1&&a<=n1&&n++)}return t===0?0:n/t}function l1(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:o,s:a,v:s}=zt(e.data[i],e.data[i+1],e.data[i+2]);!(o>=Ar&&o<=Rr)&&a>=70&&s>=50&&t++}return n===0?0:t/n}function Jm(e,t){const n=tt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Km,Ym),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Km,height:Ym,channels:3,data:i}}function c1(e){const t=e.width*e.height,n=[0,0,0];for(let o=0;o<t;o++){const a=o*e.channels;n[0]+=e.data[a],n[1]+=e.data[a+1],n[2]+=e.data[a+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let o=0;o<t;o++){const a=o*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[o*3+s]=Math.max(0,Math.min(255,Math.round(e.data[a+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function eg(e,t){const n=c1(t),r=n.width*n.height,i=new Uint8Array(r);let o=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=zt(n.data[y],n.data[y+1],n.data[y+2]);!(w>=Ar&&w<=Rr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,o++)}const a=o<20,s=tt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let d=0,c=0,p=0,f=0;for(let m=0;m<r;m++)!a&&i[m]===0||(d+=l[m*3]*100/255,c+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[d/f,c/f,p/f]}function d1(e){let t=0,n=0,r=0,i=0,o=0;const a=e.width*e.height;for(let u=0;u<a;u++){const l=u*e.channels,{h:d,s:c,v:p}=zt(e.data[l],e.data[l+1],e.data[l+2]);d>=Ar&&d<=Rr&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(d>=95&&d<=130?n++:d>=35&&d<=92?r++:d<=10?i++:d>=15&&d<=34&&p>=80&&o++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:o/s}}function h1(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:o,s:a,v:s}=zt(e.data[i],e.data[i+1],e.data[i+2]);a>=Xm&&s>=o1?(o>=95&&o<=128&&n.blue++,o>=35&&o<=85&&n.green++,(o<=8||o>=170)&&n.red++,o>=18&&o<=34&&n.gold++,o>=4&&o<=17&&s<150&&n.brown++):a<Xm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function p1(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,o=0,a=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,o+=u*u,a+=l*l}return i/(Math.sqrt(o*a)+1e-6)}function tg(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function f1(e,t){const n=new Map,r=new Map;for(const[i,o]of t){const a=Jm(e,o);n.set(i,tg(e,a)),xi.includes(i)&&r.set(i,eg(e,a))}return{gray:n,warmLab:r}}function m1(e,t,n){const r=Jm(e,t),i=d1(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return _i;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Qm;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Zm;const o=h1(r),a={blue:o.blue,green:o.green,red:o.red,gold:o.gold,browngrey:o.brown+o.grey};let s="blue";for(const l of Object.keys(a))a[l]>a[s]&&(s=l);if(a[s]<=0)return"";let u;if(s==="blue")u=_i;else if(s==="green")u=Qm;else if(s==="red")u=Zm;else{const l=tg(e,r);let d="",c=-2;for(const p of xi){const f=n.gray.get(p);if(f===void 0)continue;const m=p1(l,f);m>c&&(c=m,d=p)}u=d||xi[0]}if(xi.includes(u)&&n.warmLab.size>0){const l=eg(e,r);let d=u,c=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<c&&(c=m,d=p)}return d}return u}function g1(e,t,n,r,i){var y;const o=[],{blobs:a,mask:s,maskWidth:u}=Q_(e,t);if(a.length===0||n.size===0)return o;const l=e,d=new l.ORB(B_),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=tt(e,t);let m=null;try{for(const w of a){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),S=Math.max(q_,Math.trunc(W_*Math.max(w.w,w.h))),M=Math.max(0,b-S),I=Math.max(0,x-S),k=Math.min(t.width,b+S),T=Math.min(t.height,x+S);if(k-M<16||T-I<16)continue;const v=f.roi(new l.Rect(M,I,k-M,T-I)),C=new l.Mat;l.cvtColor(v,C,l.COLOR_RGB2GRAY);let N=null,B=-2;for(const[V,Q]of n){if(r!==void 0&&Date.now()>r)break;const J=Z_(e,v,C,Q,p.get(V),d,c);J!==null&&J>B&&(B=J,N=V)}v.delete(),C.delete();const q=new Set;if(N!==null&&B>=G_){o.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),q.add(N);const V=J_(t,w,N);V&&(o.push({id:V.id,boundingBox:{x:V.box.x,y:V.box.y,width:V.box.w,height:V.box.h},confidence:.9}),q.add(V.id))}if(i===void 0||i.size===0)continue;const G=a1(s,u,w);if(G.length!==2)continue;const O=G.map(V=>s1(t,V));if(!O.some(V=>V.width*V.height===0||l1(V)<i1))for(let V=0;V<G.length;V++){const Q=O[V];if(u1(Q)<r1)continue;m===null&&(m=f1(e,i));const J=m1(e,Q,m);if(J&&!q.has(J)){q.add(J);const he=G[V];o.push({id:J,boundingBox:{x:he.x,y:he.y,width:he.w,height:he.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{d.delete(),c.delete()}catch{}}return o}const ng=128,y1=.56,w1=15,b1=.58,_1=70,x1=50,$1=.12,v1=.2,M1=.1,S1=.17,rg=.15;function I1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),o=>o.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function ig(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,a-u),d=Math.max(0,s-u),c=Math.min(n,a+u),p=Math.min(r,s+u),f=c-l,m=p-d,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+d)*n+l)*i;y.set(o.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function E1(e){const t=ig(e,y1),n=wb(t),r=Bm(n,ng,ng);return bb(r)}function T1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let o=0,a=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,d=t[u]-i;o+=l*d,a+=l*l,s+=d*d}return o/(Math.sqrt(a*s)+1e-6)}function k1(e){const t=new Map([["masonry",0],["strategy",0]]),n=ig(e,b1),{width:r,height:i,channels:o,data:a}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*o,{h:m,s:y,v:w}=zt(a[f],a[f+1],a[f+2]);y>=_1&&w>=x1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const d=u/s,c=l/s;return d>=$1&&t.set("masonry",rg*Math.min(1,d/v1)),c>=M1&&t.set("strategy",rg*Math.min(1,c/S1)),t}function C1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=E1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,o=[];for(let l=0;l<360;l+=w1)o.push($b(n,l,i));const a=new Map;for(const[l,d]of t){let c=-1/0;for(const p of o){const f=T1(p,d);f>c&&(c=f)}a.set(l,c)}for(const[l,d]of k1(e))d>0&&a.has(l)&&a.set(l,a.get(l)+d);let s="",u=-1/0;for(const[l,d]of a)d>u&&(s=l,u=d);return[s,u]}const pn=224,A1=512,R1=[.485,.456,.406],O1=[.229,.224,.225];function N1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function z1(e){const t=Pa(e,pn,pn),n=pn*pn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=(t[i*3+o]/255-R1[o])/O1[o];return r}function B1(e){const t=3*pn*pn,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(z1(Jt(e,r)),r*t);return n}function P1(e,t=A1){const n=e.length/t,r=new Float32Array(t);for(let o=0;o<n;o++)for(let a=0;a<t;a++)r[a]+=e[o*t+a];let i=0;for(let o=0;o<t;o++)r[o]/=n,i+=r[o]*r[o];i=Math.max(Math.sqrt(i),1e-9);for(let o=0;o<t;o++)r[o]/=i;return r}function D1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let o=0;const a=i*e.dim;for(let s=0;s<e.dim;s++)o+=e.x[a+s]*t[s];o>r&&(r=o,n=i)}return{id:e.ids[n],cosine:r}}const rr=96,U1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],L1=.45;function F1(e){const t=Pa(e,rr,rr),n=rr*rr,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function G1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=L1?U1[t]??"":"",prob:n}}const ir=128,og=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],ns=.5,rs=.9;function W1(e){const t=er(e,ir,ir),n=ir*ir,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function q1(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8ClampedArray(t*n*r);for(let a=0;a<t;a++)for(let s=0;s<n;s++){const u=a,d=((n-1-s)*t+u)*r,c=(a*n+s)*r;for(let p=0;p<r;p++)o[c+p]=i[d+p]}return{width:n,height:t,channels:r,data:o}}function V1(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=q1(n);return n}function H1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function j1(e,t,n){const r=n===void 0?[0,1,2,3]:[(n%4+4)%4];let i=0,o=-1,a=r[0],s=0,u=-1;const l=new Set,d=async f=>{l.add(f);const m=f===0?e:V1(e,f),y=await t(W1(m)),w=H1(y);f===0&&(s=w.index,u=w.prob),w.prob>o&&(o=w.prob,i=w.index,a=f)};for(const f of r)await d(f);if(n!==void 0&&o<ns)for(let f=0;f<4;f++)l.has(f)||await d(f);const c=o>=ns?og[i]??"":"",p=u>=ns?og[s]??"":"";return{id:c==="other"?"":c,prob:o,k0Id:p==="other"?"":p,k0Prob:u,kBest:a}}const or=96,K1=[1,2,3,4,5,6,7],Y1=.8,X1=.99;function Q1(e){const t=Da(e,e.width*2,e.height*2),n=er({width:e.width*2,height:e.height*2,channels:3,data:t},or,or),r=or*or,i=new Float32Array(3*r);for(let o=0;o<r;o++)for(let a=0;a<3;a++)i[a*r+o]=n[o*3+a]/255;return i}function Z1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:K1[t],prob:e[t]}}const fn=128,ag=.35,J1=["fp","laurel"],e2=.85,ar=40;function t2(e){const r=(e.width<fn&&e.height<fn?Da:er)(e,fn,fn),i=fn*fn,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function n2(e){return e[J1.indexOf("fp")]}const mn=128,r2=.15,sg=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],i2=7,o2=.9;function a2(e,t,n){const[r,i,o,a]=e.map(Number);if(!(o>1)||!(a>1))return null;const s=r+o/2,u=i+a/2,l=Math.max(o,a)*(1+2*r2),d=Math.max(0,at(s-l/2)),c=Math.max(0,at(u-l/2)),p=Math.min(t,at(s+l/2)),f=Math.min(n,at(u+l/2));return p-d<8||f-c<8?null:{x:d,y:c,w:p-d,h:f-c}}function s2(e){const r=(e.width<mn&&e.height<mn?Da:er)(e,mn,mn),i=mn*mn,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function u2(e){let t=0;for(let i=1;i<sg.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=i2;return{className:sg[t],probability:n,rejected:r&&n>=o2}}const $i=3,l2=2.2,c2=.3,d2=.65,h2=3,p2=1.3,f2=.77;function ug(e,t,n){const[r,i,o,a]=e,s=[];return r<=$i&&s.push("gauche"),i<=$i&&s.push("haut"),r+o>=t-$i&&s.push("droit"),i+a>=n-$i&&s.push("bas"),s}function lg(e){const t=e[3]/Math.max(e[2],1);return t>=p2?"portrait":t<=f2?"paysage":null}function is(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function m2(e,t,n){for(const[r,i,o,a]of e??[])if(Math.max(Math.abs(o-r)/Math.max(t,1),Math.abs(a-i)/Math.max(n,1))>d2)return!0;return!1}function g2(e,t,n,r,i){try{const o=[...e],a=o.filter(w=>ug(w.box,r,i).length>0);if(a.length===0)return{kept:o,dropped:[],suspects:[]};const s=o.filter(w=>!a.includes(w)),u=w=>({kept:s,dropped:a.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(m2(n,r,i))return u("photo-piste");if(s.length<h2)return t>0?u("photo-merveilles"):{kept:o,dropped:[],suspects:a.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(a.length>(s.length+a.length)/3)return u("debordement-structurel");const l=is(s.map(w=>w.box[2]*w.box[3])),d=is(s.map(w=>w.box[2])),c=is(s.map(w=>w.box[3])),p=new Set(s.map(w=>lg(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of a){const b=ug(w.box,r,i),[,,x,S]=w.box,M=l>0?x*S/l:0,I=[];(b.includes("gauche")||b.includes("droit"))&&I.push(d>0?x/d:1),(b.includes("haut")||b.includes("bas"))&&I.push(c>0?S/c:1);const k=I.length>0?Math.min(...I):1,T=lg(w.box);M>l2?m.push({banner:w,edgeReason:"bord-grosse"}):k<c2?m.push({banner:w,edgeReason:"bord-tronquee"}):T!==null&&p.size>0&&!p.has(T)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const y2=1,w2=1.5;function b2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function _2(e,t,n,r){const i=r[0]-n[0],o=r[1]-n[1],a=Math.hypot(i,o);if(a<=0)return null;const s=((e-n[0])*i+(t-n[1])*o)/(a*a);return[Math.abs((e-n[0])*o-(t-n[1])*i)/a,Math.abs(s-.5)*a]}function x2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function $2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,o,a,s]=t,u=i+a/2,l=o+s/2;let d=null;for(const[p,f]of b2(e)){const m=_2(u,l,p,f);m!==null&&(d===null||m[0]<d[0])&&(d=m)}if(d===null)return null;const c=x2(e);return c===null?null:{distBord:d[0]/r,decalLat:d[1]/r,perpendiculaire:c!==a>s}}catch{return null}}function v2(e,t,n,r=y2,i=w2){const o=[];for(const[a,s]of t??[]){const u=$2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||o.push([u.decalLat,a]))}return o.length===0?null:(o.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),o[0][1])}const vt=64,cg=.5,M2=[.67,1.24];function dg(e,t,n,r){const i=Math.max(0,t-r),o=Math.max(0,n-r),a=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=a-i,l=s-o;if(u<=0||l<=0)return null;const d=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=o+w,x=b-n;for(let S=0;S<u;S++){const M=i+S,I=M-t,k=(w*u+S)*3;if(I*I+x*x<=p){const T=(b*e.width+M)*d;c[k]=e.data[T],c[k+1]=e.data[T+1],c[k+2]=e.data[T+2]}else c[k]=255,c[k+1]=255,c[k+2]=255}}const f=er({width:u,height:l,channels:3,data:c},vt,vt),m=vt*vt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function S2(e){return e[1]}const vi=[1,3,6],I2=.5;function E2(e){if(e.length!==vi.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:vi[t],prob:e[t]}}function T2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&vi.includes(i.denomination)&&i.prob>=I2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const k2=2.25,Mi=3,C2=1.15,A2=.5,R2=2.5,O2=.75,N2=2.25,z2=1.3,B2=.77;function Si(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function P2(e){const t=Array.from(new Map(e.map(o=>[`${o[0]},${o[1]}`,o])).values());if(t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]),t.length<=2)return t;const n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(const o of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return[...r.slice(0,-1),...i.slice(0,-1)]}function hg(e,t,n){let r=!1;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[(o+1)%i];if(s>t!=l>t){const d=(u-a)*(t-s)/(l-s)+a;e<d&&(r=!r)}}return r}function D2(e,t,n){if(n.length>=3&&hg(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[i>1?(o+1)%i:o],d=u-a,c=l-s,p=d*d+c*c,f=p===0?0:Math.max(0,Math.min(1,((e-a)*d+(t-s)*c)/p));r=Math.min(r,Math.hypot(e-(a+f*d),t-(s+f*c)))}return r}function U2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function L2(e,t,n){const[r,i]=e,o=t[0]-r,a=t[1]-i;if(o===0&&a===0)return!1;const[s,u,l,d]=n;let c=0,p=1;const f=[[-o,r-s],[o,l-r],[-a,i-u],[a,d-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?c=Math.max(c,w):p=Math.min(p,w),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const os=e=>e.box[3]/Math.max(1,e.box[2]),tn=e=>os(e)>C2,sr=e=>os(e)>=z2||os(e)<=B2;function as(e){const[t,n,r,i]=e.box;if(r>=i){const a=7*i;return[t,n-a,r,i+2*a]}const o=7*r;return[t-o,n,r+2*o,i]}function ss(e,t,n,r,i){const o=new Set(t),a=[...e.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:o.has(R)?"card":"tucked",src:["banner",R]})),...n.map((P,R)=>({box:[P[0],P[1],P[2],P[3]],kind:"wonder",src:["wonder",R]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(a.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=a.map(P=>[P.box[0]+P.box[2]/2,P.box[1]+P.box[3]/2]);let d=a.filter(P=>P.kind!=="wonder").map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R);d.length===0&&(d=a.map(P=>Math.hypot(P.box[2],P.box[3])).sort((P,R)=>P-R));const c=d[Math.floor(d.length/2)],p=(k2*c)**2,f=a.map((P,R)=>R),m=P=>{let R=P;for(;f[R]!==R;)f[R]=f[f[R]],R=f[R];return R},y=a.map((P,R)=>P.kind==="card"?R:-1).filter(P=>P>=0),w=a.map((P,R)=>P.kind!=="card"?R:-1).filter(P=>P>=0);for(let P=0;P<y.length;P+=1)for(let R=P+1;R<y.length;R+=1){const z=y[P],D=y[R],F=a[z],Y=a[D];if(sr(F)&&sr(Y)&&tn(F)!==tn(Y))continue;const ne=l[z][0]-l[D][0],ee=l[z][1]-l[D][1],fe=ne*ne+ee*ee;let xe=fe<=p;!xe&&sr(F)&&sr(Y)&&tn(F)===tn(Y)&&fe<=(4*c)**2&&(xe=Si(as(F),as(Y))<=.5*c),xe&&(f[m(z)]=m(D))}for(let P=0;P<w.length;P+=1)for(let R=P+1;R<w.length;R+=1){const z=w[P],D=w[R];Si(a[z].box,a[D].box)<=O2*c&&(f[m(z)]=m(D))}const b=new Map;for(const P of w){const R=m(P);b.set(R,[...b.get(R)??[],P])}const x=new Map;for(const P of y){const R=m(P);x.set(R,[...x.get(R)??[],P])}for(const P of b.values()){const R=P.filter(Y=>a[Y].kind==="wonder"&&sr(a[Y])).map(Y=>tn(a[Y])),z=R.length>0?R.filter(Boolean).length*2>R.length:null,D=[];for(const[Y,ne]of x){let ee=Number.POSITIVE_INFINITY;for(const ke of P)for(const Ue of ne)ee=Math.min(ee,Si(a[ke].box,a[Ue].box));if(ee>N2*c)continue;const xe=ne.filter(ke=>tn(a[ke])).length/ne.length>=.5;z!==null&&xe!==z||D.push([Y,ee,xe])}if(D.length===0)continue;const F=new Set(D.map(Y=>Y[2]));if(D.length>=2&&F.size===1&&z!==null){const Y=D[0][0];for(const[ne]of D.slice(1))f[m(ne)]=m(Y);f[m(P[0])]=m(Y)}else{const Y=D.reduce((ne,ee)=>ee[1]<ne[1]?ee:ne);f[m(P[0])]=m(Y[0])}}let S=new Map;for(let P=0;P<a.length;P+=1){const R=m(P);S.set(R,[...S.get(R)??[],P])}const M=a.map((P,R)=>P.kind==="wonder"?R:-1).filter(P=>P>=0);if(M.length>0){const P=(z,D)=>{const[F,Y,ne,ee]=as(a[z]),[fe,xe,ke,Ue]=a[D].box,st=Math.max(0,Math.min(F+ne,fe+ke)-Math.max(F,fe)),Be=Math.max(0,Math.min(Y+ee,xe+Ue)-Math.max(Y,xe));return st*Be>=.9*a[z].box[2]*a[z].box[3]},R=new Map;for(let z=0;z<a.length;z+=1)if(!(a[z].kind!=="card"||!sr(a[z])))for(const D of M){const F=Si(a[z].box,a[D].box);if(F<=.8*c&&tn(a[z])!==tn(a[D])&&P(z,D)){const Y=R.get(D);(!Y||F<Y[1])&&R.set(D,[z,F])}}for(const[z,[D]]of R){const F=m(z);for(const[Y,ne]of S){const ee=ne.indexOf(D);if(ee>=0&&Y!==F){ne.splice(ee,1),S.set(F,[...S.get(F)??[],D]),a[D].kind="tucked";break}}}S=new Map([...S].filter(([,z])=>z.length>0))}const I=P=>P.filter(R=>a[R].kind==="card").length,k=P=>{const R=P.filter(z=>a[z].kind==="card"||a[z].kind==="wonder");return R.length===0?null:R.filter(z=>tn(a[z])).length/R.length},T=P=>[P.reduce((R,z)=>R+l[z][0],0)/P.length,P.reduce((R,z)=>R+l[z][1],0)/P.length],v=[i[0]/2,i[1]/2],C=[...S.values()].sort((P,R)=>{const z=I(P),D=I(R);if(z!==D)return D-z;const F=Math.hypot(T(P)[0]-v[0],T(P)[1]-v[1]),Y=Math.hypot(T(R)[0]-v[0],T(R)[1]-v[1]);return F-Y}),N=T(C[0]),B=k(C[0]),q=C.map((P,R)=>{if(R===0||I(P)<Mi)return"player";const z=k(P),D=z!==null&&B!==null&&Math.abs(z-B)>=A2,F=T(P),Y=r.some(ne=>L2(N,F,ne));return D||Y?"opponent":"player"});if(!q.includes("opponent")){const P=z=>z.reduce((D,F)=>D+(a[F].kind==="wonder"?1:0),0);let R=q.map((z,D)=>D).filter(z=>z>0&&(I(C[z])>=Mi||P(C[z])>=2));if(R.reduce((z,D)=>z+P(C[D]),0)<1&&(R=[]),R.length>0&&(I(C[0])<2*Mi||R.reduce((z,D)=>z+I(C[D]),0)<2*Mi)&&(R=[]),R.length>0){const z=new Map(R.map(Y=>[Y,T(C[Y])])),D=(Y,ne)=>(Y[0]-ne[0])**2+(Y[1]-ne[1])**2;if(R.every((Y,ne)=>R.slice(ne+1).every(ee=>D(z.get(Y),z.get(ee))<Math.min(D(z.get(Y),N),D(z.get(ee),N)))))for(const Y of R)q[Y]="opponent"}}const G=[],O=[];let V=!1;C.forEach((P,R)=>{const z=q[R];z==="opponent"&&(V=!0);const D=[],F=[];for(const Y of P){const[ne,ee,fe,xe]=a[Y].box;D.push([ne,ee],[ne+fe,ee],[ne,ee+xe],[ne+fe,ee+xe]),F.push(a[Y].box);const[ke,Ue]=a[Y].src;ke==="banner"?s[Ue]=z:u[Ue]=z}G.push([z,P2(D)]),O.push([z,F])});const Q=(P,R,z)=>Math.min(...O[z][1].map(D=>U2(P,R,D))),J=(P,R)=>G.map(([,z],D)=>z.length>=3&&hg(P,R,z)?D:-1).filter(z=>z>=0),he=(P,R)=>{if(G.length===0)return"player";const z=c>0?R2*c:Number.POSITIVE_INFINITY,D=J(P,R);if(D.length>0){const ne=D.reduce((ee,fe)=>Q(P,R,fe)<Q(P,R,ee)?fe:ee);return G[ne][0]}let F=-1,Y=Number.POSITIVE_INFINITY;return G.forEach(([,ne],ee)=>{const fe=D2(P,R,ne);fe<Y&&(F=ee,Y=fe)}),F>=0&&Y<=z?G[F][0]:"none"},W=(P,R)=>{if(G.length===0)return"none";const z=J(P,R);if(z.length===0)return"none";const D=z.reduce((F,Y)=>Q(P,R,Y)<Q(P,R,F)?Y:F);return G[D][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:V,hulls:G,hullBoxCounts:O.map(([,P])=>P.length),pointOwner:he,pointInside:W}}const F2=3;function G2(e,t=F2){const n=e.length,r=Array.from({length:n},(a,s)=>s),i=a=>{for(;r[a]!==a;)r[a]=r[r[a]],a=r[a];return a};for(let a=0;a<n;a+=1)for(let s=a+1;s<n;s+=1){const u=e[a],l=e[s],d=Number(u.center[0]),c=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![d,c,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(d-p,c-f)<=t*(m+y)&&(r[i(a)]=i(s))}const o=new Map;for(let a=0;a<n;a+=1){const s=i(a);o.has(s)||o.set(s,[]),o.get(s).push(a)}return[...o.values()]}function W2(e,t,n){const r=Number(n[0]),i=Number(n[1]),o=Number(n[2]),a=Number(n[3]),s=Math.max(Math.min(r,o)-e,0,e-Math.max(r,o)),u=Math.max(Math.min(i,a)-t,0,t-Math.max(i,a));return Math.hypot(s,u)}function q2(e,t,n,r){const i=()=>e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n);try{const o=new Set(i());if(o.size===0)return[];const a=G2(e),s=[];for(const l of a){const d=l.map(S=>e[S]),c=d.filter(S=>o.has(S));if(c.length===0)continue;let p=0,f=0,m=0;for(const S of d){const M=Number(S.center[0]),I=Number(S.center[1]);f+=M,m+=I,t.pointInside(M,I)===n&&(p+=1)}const y=f/d.length,w=m/d.length,b=r&&r.length>0?Math.min(...r.map(S=>W2(y,w,S))):0,x=c.reduce((S,M)=>S+(Number(M.denomination??0)||0),0);s.push({miens:c,inside:p,dPiste:b,valeur:x})}return s.length===0?[]:s.length===1?s[0].miens:s.reduce((l,d)=>{const c=[l.inside>0?1:0,l.inside,l.dPiste,l.valeur],p=[d.inside>0?1:0,d.inside,d.dPiste,d.valeur];for(let f=0;f<4;f+=1){if(p[f]>c[f])return d;if(p[f]<c[f])return l}return l}).miens}catch{try{return i()}catch{return[...e]}}}const V2=1280,H2=80,j2=3,K2=3,Y2=.3,X2=2.4,Q2=1,Z2=5.2,J2=5;function us(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function ex(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=Y2&&r/n<=X2&&i/n>=Q2&&i/n<=Z2&&i/r<=J2}function tx(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*V2/r<H2}function nx(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),o=r.poly.map(s=>s[1]),a=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/a,cy:o.reduce((s,u)=>s+u,0)/a,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),o=Number(r[1]),a=Number(r[2]),s=Number(r[3]);if(![i,o,a,s].every(Number.isFinite))continue;const u=i+a/2,l=o+s/2;let d=n[0],c=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<c&&(c=f,d=p)}d.extra.push([i,o],[i+a,o+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function pg(e,t,n,r,i=[]){const o=us(n);if(!tx(e,t,o))return[];const a=r.filter(l=>l.n>=K2&&l.poly.length>0).slice().sort((l,d)=>d.n-l.n).slice(0,2),s=Math.round(o*j2),u=[];for(const l of nx(a,i)){const d=l.poly.map(w=>w[0]),c=l.poly.map(w=>w[1]);if(d.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...d))-s),f=Math.max(0,Math.trunc(Math.min(...c))-s),m=Math.min(e,Math.trunc(Math.max(...d))+s),y=Math.min(t,Math.trunc(Math.max(...c))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function rx(e,t,n){if(!e||e.length<4)return null;const[r,i,o,a]=[e[0],e[1],e[2],e[3]];return ex(o,a,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(o),Math.round(a)]:null}function ix(e,t,n,r,i){return pg(e,t,n,r,i)}function ox(e,t){var s,u,l,d;const[n,r,i,o]=t,a=[];for(const c of e){const p=Number((s=c.box)==null?void 0:s[0]),f=Number((u=c.box)==null?void 0:u[1]),m=Number((l=c.box)==null?void 0:l[2]),y=Number((d=c.box)==null?void 0:d[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>o||a.push({...c,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return a}function ax(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,o=r.y+r.height/2;let a=!1;for(const s of t){if(n.id&&s.id===n.id){a=!0;break}const u=s.boundingBox,l=u.x+u.width/2,d=u.y+u.height/2,c=.5*Math.min(u.width,u.height);if((i-l)**2+(o-d)**2<c*c){a=!0;break}}a||t.push(n)}return t}function fg(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const sx=1.1,ux=3.2,lx=20,cx=.5,dx=1280,hx=.18,px=28,fx=.3;function mx(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let a=0;a<30;a++){const s=e.filter(d=>d<=r),u=e.filter(d=>d>r);if(s.length===0||u.length===0)return[e.map((d,c)=>c)];const l=(s.reduce((d,c)=>d+c,0)/s.length+u.reduce((d,c)=>d+c,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],o=[];return e.forEach((a,s)=>(a<=r?i:o).push(s)),[i,o]}function gx(e,t,n=sx){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const o=e.map(l=>l[0]+l[2]/2),a=e.map(l=>l[1]+l[3]/2),s=Math.max(...o)-Math.min(...o)>Math.max(...a)-Math.min(...a)?o:a,u=[];for(const l of mx(s)){if(l.length===0)continue;const d=l.map(C=>e[C]),c=d.map(C=>Math.min(C[2],C[3])).sort((C,N)=>C-N),p=c[Math.trunc(c.length/2)],f=ux*p,m=Math.max(0,Math.min(...d.map(C=>C[0]))-f),y=Math.max(0,Math.min(...d.map(C=>C[1]))-f),w=Math.min(r,Math.max(...d.map(C=>C[0]+C[2]))+f),b=Math.min(i,Math.max(...d.map(C=>C[1]+C[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const S=cx*p*dx/x,M=S>0?Math.max(1,Math.ceil(lx/S)):1;if(M===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const I=w-m>=b-y,T=(I?w-m:b-y)/M,v=T*(1+hx);for(let C=0;C<M;C++){let N=(I?m:y)+C*T-(v-T)/2;N=Math.max(I?m:y,N);const B=Math.min(I?w:b,N+v);u.push(I?[Math.trunc(N),Math.trunc(y),Math.trunc(B),Math.trunc(b)]:[Math.trunc(m),Math.trunc(N),Math.trunc(w),Math.trunc(B)])}}return u.filter(([l,d,c,p])=>Math.max(r,i)/Math.max(1,Math.max(c-l,p-d))>=n)}function yx(e,t,n,r=px){const[i,o]=n,a=e;for(const[s,u,l,d]of t){const c=(s+l)/2+i,p=(u+d)/2+o;a.some(([m,y,w,b])=>{const x=c-(m+w)/2,S=p-(y+b)/2;return Math.hypot(x,S)<=r})||a.push([s+i,u+o,l+i,d+o])}return a}function wx(e,t,n,r=fx){for(const i of n){const o=r*Math.min(i[2],i[3]);if(i[0]-o<=e&&e<=i[0]+i[2]+o&&i[1]-o<=t&&t<=i[1]+i[3]+o)return!0}return!1}function bx(e,t,n){return n.some(([r,i,o,a])=>r<=e&&e<=o&&i<=t&&t<=a)}function _x(e,t,n,r){return n.length===0?!1:bx(e,t,n)&&!wx(e,t,r)}const mg=4,gg=8,Ii=5,Dn="base-game rule";function Wt(e,t){return{code:e,message:t,severity:"warning"}}function ls(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function xx(e,t=""){const n=e.filter(a=>!!a),r=t||"a player",i=[];n.length>mg&&i.push(Wt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${mg} (${Dn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const o=ls(n);return o.length>0&&i.push(Wt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${o.join(", ")}. Only one copy of each wonder exists (${Dn}), so one of the two readings is wrong.`)),i}function $x(e){const t=[],n=Object.entries(e).map(([i,o])=>[i,new Set(o.filter(a=>!!a))]),r=Object.values(e).reduce((i,o)=>i+o.filter(Boolean).length,0);r>gg&&t.push(Wt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${gg} are in play (${Dn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[o,a]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],d=[...a].filter(c=>l.has(c)).sort();d.length>0&&t.push(Wt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${o} and ${u}): ${d.join(", ")} — the city split misread one of them.`))}}return t}function vx(e,t=null){const n=[],r=Object.values(e).flatMap(o=>o.filter(a=>!!a));r.length>Ii&&n.push(Wt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${Ii} are in play (${Dn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=ls(r);if(i.length>0&&n.push(Wt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Dn}).`)),t!==null){const o=t.filter(Boolean),a=r.length+o.length;a!==Ii&&n.push(Wt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${a}, but exactly ${Ii} are in play (${Dn}) — one is missing or one was counted twice.`));const s=new Set(o),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Wt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function Mx(e,t=""){const n=t||"a player",r=[],i=e.filter(a=>!a).length;i>0&&r.push(Wt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const o=ls(e.filter(a=>!!a));return o.length>0&&r.push(Wt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${o.join(", ")}. Only one copy of each guild exists (${Dn}).`)),r}const Sx=.25,Ix=.45;function Ex(e,t,n,r,i){const o=Math.cos(i),a=Math.sin(i),s=[n/2*o,n/2*a],u=[-r/2*a,r/2*o],d=[...[[e+s[0]+u[0],t+s[1]+u[1]],[e+s[0]-u[0],t+s[1]-u[1]],[e-s[0]-u[0],t-s[1]-u[1]],[e-s[0]+u[0],t-s[1]+u[1]]]].reverse();return[d[1],d[2],d[3],d[0]]}function cs(e,t){return e.matFromArray(t.length,1,e.CV_32FC2,t.flatMap(n=>[n[0],n[1]]))}function yg(e,t){const n=cs(e,t);try{return Math.abs(e.contourArea(n))}finally{n.delete()}}function Tx(e,t,n){const r=cs(e,t),i=cs(e,n),o=new e.Mat;try{return Math.abs(e.intersectConvexConvex(r,i,o,!0))}finally{r.delete(),i.delete(),o.delete()}}function kx(e,t,n=Ix){const r=[...t].sort((o,a)=>a.confidence-o.confidence),i=[];for(const o of r){let a=!1;for(const s of i){const u=Tx(e,o.quad,s.quad);if(u<=0)continue;const l=yg(e,o.quad)+yg(e,s.quad)-u;if(u/Math.max(1e-6,l)>=n){a=!0;break}}a||i.push(o)}return i}function Cx(e,t,n,r,i=Sx){const o=[];for(let a=0;a<n;a++){const s=t[4*n+a];if(s<i)continue;const l=Ex(t[a],t[n+a],t[2*n+a],t[3*n+a],t[5*n+a]).map(d=>[(d[0]-r.padX)/r.scale,(d[1]-r.padY)/r.scale]);o.push({quad:l,confidence:s})}return kx(e,o)}const Ei=128,Ti=88;function Ax(e,t,n,r=Ei,i=Ti){const o=new e.Mat(t.height,t.width,e.CV_8UC3),a=o.data,s=t.channels;for(let p=0,f=t.width*t.height;p<f;p++)a[p*3]=t.data[p*s],a[p*3+1]=t.data[p*s+1],a[p*3+2]=t.data[p*s+2];const u=e.matFromArray(4,1,e.CV_32FC2,n.flatMap(p=>[p[0],p[1]])),l=e.matFromArray(4,1,e.CV_32FC2,[0,0,r,0,r,i,0,i]),d=e.getPerspectiveTransform(u,l),c=new e.Mat;try{return e.warpPerspective(o,c,d,new e.Size(r,i)),{data:new Uint8Array(c.data),width:r,height:i,channels:3}}finally{o.delete(),u.delete(),l.delete(),d.delete(),c.delete()}}function Rx(e){return[e[2],e[3],e[0],e[1]]}const Ox=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],Nx=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],zx=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],Bx=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],Px=[...Nx,...zx,...Bx,...Ox];Object.fromEntries(Px.map(e=>[e.id,e]));const Dx=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const wg=.2,Ux=.3,bg=.25,ur={total:0,idDiff:0,verdictDiff:0},Mt={pass1Calls:0,pass1Boxes:0,pass1Kept:0,pass2Calls:0,pass2Boxes:0,pass2Promoted:0},qt={total:0,divergent:0,positifs4:0,positifs2:0,detail:[]},gn={total:0,memeK:0,memeKInverse:0,detail:[]};function _g(e,t,n){for(const r of e){let i=!1;for(let o=0,a=r.length-1;o<r.length;a=o++){const s=r[o],u=r[a];s[1]>n!=u[1]>n&&t<(u[0]-s[0])*(n-s[1])/(u[1]-s[1])+s[0]&&(i=!i)}if(i)return r.map(o=>[o[0],o[1]])}return null}function Lx(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=bg)return!1;const i=e.x+e.width,o=e.y+e.height;for(const a of n){const s=a.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=o))continue;const d=s[2]/s[3];if(!(Math.abs(Math.log(d))<=bg)&&r>1==d>1)return!0}return!1}async function Fx(e,t,n,r,i=[0,1,2,3]){const[o,a,s,u]=t;if(s<=0||u<=0)return null;const l=Math.round(s*wg),d=Math.round(u*wg),c=Math.max(0,Math.round(o-l)),p=Math.max(0,Math.round(a-d)),f=Math.min(e.width,Math.round(o+s+l)),m=Math.min(e.height,Math.round(a+u+d)),y=f-c,w=m-p;if(y<=0||w<=0)return null;const b=e.channels,x=new Uint8ClampedArray(y*w*b);for(let I=0;I<w;I++){const k=((p+I)*e.width+c)*b;x.set(e.data.subarray(k,k+y*b),I*y*b)}const S={width:y,height:w,channels:b,data:x};let M=null;for(const I of i){const k=I===0?S:Jt(S,I),T=k.width,v=T-Math.floor(Ux*T),C=T-v;if(C<=0)continue;const N=new Uint8ClampedArray(C*k.height*k.channels);for(let V=0;V<k.height;V++){const Q=(V*T+v)*k.channels;N.set(k.data.subarray(Q,Q+C*k.channels),V*C*k.channels)}const B={width:C,height:k.height,channels:k.channels,data:N},q=bi(B),O=(await n.run({[n.inputNames[0]]:new De("float32",q,[1,3,$t,$t])}))[n.outputNames[0]].data[1]??0;r&&(r[I]=O),M=M===null?O:Math.max(M,O)}return M}async function xg(e,t,n,r,i,o,a){var m;const s=(y,w,b,x)=>{const S=Math.max(0,Math.round(y)),M=Math.max(0,Math.round(w)),I=Math.min(n.width,Math.round(y+b)),k=Math.min(n.height,Math.round(w+x)),T=I-S,v=k-M;if(T<=0||v<=0)return null;const C=n.channels,N=new Uint8ClampedArray(T*v*C);for(let B=0;B<v;B++){const q=((M+B)*n.width+S)*C;N.set(n.data.subarray(q,q+T*C),B*T*C)}return{width:T,height:v,channels:C,data:N}},u=async y=>(await i.run({[i.inputNames[0]]:new De("float32",y,[1,3,ir,ir])}))[i.outputNames[0]].data,l=e.obbQuads===void 0?null:await bt("OBB merveilles (détection orientée)",async()=>{try{return await e.obbQuads(n)}catch(y){return console.warn("[wonders-obb] détection échouée, repli ORB :",y),null}}),d=new Map;for(const y of r){const[w,b,x,S]=y;if(x<=0||S<=0)continue;const M=xt("identify: crop de boite",()=>s(w,b,x,S));if(M===null)continue;const I=l===null?null:_g(l,w+x/2,b+S/2),k=I===null?void 0:(4-(Math.round(Math.atan2(I[1][1]-I[0][1],I[1][0]-I[0][0])*180/Math.PI/90)%4+4)%4)%4,{id:T,prob:v,k0Id:C,k0Prob:N,kBest:B}=await bt("classifieur merveille (TTA)",()=>j1(M,u,k));if(k===void 0&&(ur.total+=1,(C??"")!==T&&(ur.idDiff+=1),T!==""&&v>=rs&&((C??"")!==T||(N??0)<rs)&&(ur.verdictDiff+=1)),T===""||v<rs)continue;const q=d.get(T);(q===void 0||v>q.prob)&&d.set(T,{prob:v,box:y,kBest:B??0})}const c=[],p=await e.tuckClassifier(),f=await e.tuckBoxClassifier();for(const[y,{prob:w,box:b,kBest:x}]of d){const[S,M,I,k]=b;let T={x:Math.round(S),y:Math.round(M),width:Math.round(I),height:Math.round(k)},v=null,C=[],N=null;const B=l===null?null:_g(l,S+I/2,M+k/2);if(B!==null){const R=B[1][1]-B[0][1],z=B[1][0]-B[0][0],D=Math.atan2(R,z)*180/Math.PI,F=(Math.round(D/90)%4+4)%4;gn.total+=1,x===F&&(gn.memeK+=1),x===(4-F)%4&&(gn.memeKInverse+=1),gn.detail.push(`${y.slice(0,14)}:tta${x}/quad${F}`)}if(B!==null){v=B;const R=v.map(Y=>Y[0]),z=v.map(Y=>Y[1]),D=Math.max(0,Math.round(Math.min(...R))),F=Math.max(0,Math.round(Math.min(...z)));if(T={x:D,y:F,width:Math.min(n.width,Math.round(Math.max(...R)))-D,height:Math.min(n.height,Math.round(Math.max(...z)))-F},p!==null)try{const Y=await e.wonderRef(y),ne=v,ee=Y===null||ne===null?null:xt("identify: bande droite #63",()=>Ja(t,n,Y,ne));if(ee!==null){const fe=xt("identify: preprocess tuck",()=>bi(ee)),xe=await p.run({[p.inputNames[0]]:new De("float32",fe,[1,3,$t,$t])});N=es(xe[p.outputNames[0]].data).prob,C=N>=nr?["R"]:[]}}catch{}}else if(Date.now()<o)try{const R=await bt("chargement refs merveilles",()=>e.wonderRef(y));if(R!==null){const z=xt("ORB registration (merveille)",()=>Hm(t,n,R,b));if(z!==null){v=z.footprint,C=z.overflow;const D=v.map(ee=>ee[0]),F=v.map(ee=>ee[1]),Y=Math.max(0,Math.round(Math.min(...D))),ne=Math.max(0,Math.round(Math.min(...F)));if(T={x:Y,y:ne,width:Math.min(n.width,Math.round(Math.max(...D)))-Y,height:Math.min(n.height,Math.round(Math.max(...F)))-ne},p!==null)try{const ee=v,fe=ee===null?null:xt("identify: bande droite #63",()=>Ja(t,n,R,ee));if(fe!==null){const xe=xt("identify: preprocess tuck",()=>bi(fe)),ke=await p.run({[p.inputNames[0]]:new De("float32",xe,[1,3,$t,$t])});N=es(ke[p.outputNames[0]].data).prob}}catch{}}}}catch(R){console.warn(`[wonders-cls] ${y} registration failed:`,R)}const q=v!==null?wi(v,C):null,G=B!==null&&v!==null?wi(v,["R"]):null,O=[];if(N!==null&&O.push(N>=nr?1:0),f!==null)try{let R=[0,1,2,3];if(B!==null){const F=B[1][1]-B[0][1],Y=B[1][0]-B[0][0],ne=(Math.round(Math.atan2(F,Y)*180/Math.PI/90)%4+4)%4;R=[(0+ne)%4,(2+ne)%4]}const z=[0,0,0,0],D=await bt("identify: sonde marges (#68)",()=>Fx(n,b,f,z,R));if(D!==null&&(O.push(D>=nr?1:0),B!==null)){const F=B[1][1]-B[0][1],Y=B[1][0]-B[0][0],ne=(Math.round(Math.atan2(F,Y)*180/Math.PI/90)%4+4)%4,ee=Math.max(z[(0+ne)%4],z[(2+ne)%4]);qt.total+=1;const fe=D>=nr?1:0,xe=ee>=nr?1:0;fe===1&&(qt.positifs4+=1),xe===1&&(qt.positifs2+=1),fe!==xe&&(qt.divergent+=1,qt.detail.push(`${y.slice(0,12)}:v4=${fe}/v2=${xe} p=[${z.map(ke=>ke.toFixed(2)).join(",")}]kQ${ne}`))}}catch{}const V=G??q??T,Q=a.some(R=>{const z=R.box[0]+R.box[2]/2,D=R.box[1]+R.box[3]/2;return z>=V.x&&z<=V.x+V.width&&D>=V.y&&D<=V.y+V.height});O.push(Q?1:0);let J=O.length>0&&O.reduce((R,z)=>R+z,0)*2>O.length;J&&Lx(V,T,a)&&(J=!1);const he=q??(J&&G!==null?G:null),W={id:y,name:((m=Dx[y])==null?void 0:m.name)??y,builtWithCardUnderneath:J,boundingBox:T,confidence:Math.round(w*1e4)/1e4,...he?{tuckRegion:he}:{}},P=he??T;c.push({obj:W,edgeScores:null,zone:{x0:P.x,y0:P.y,x1:P.x+P.width,y1:P.y+P.height},quad:v,region:he})}return c}async function $g(e,t,n,r,i,o,a=[]){let s=await e.localiseWonders(n);return s.length===0?[]:a.length>0&&(s=s.filter(([u,l,d,c])=>{const p=u+d/2,f=l+c/2;return!a.some(m=>{const y=m.x+m.width/2,w=m.y+m.height/2,b=.5*Math.min(m.width,m.height);return(p-y)**2+(f-w)**2<b*b})}),s.length===0)?[]:xg(e,t,n,s,r,i,o)}function Gx(e,t){const n=fg(e.obj.boundingBox,t),r=e.region===null?null:fg(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([o,a])=>[o+t[0],a+t[1]]),region:r}}async function vg(e){try{const t=ix(e.image.width,e.image.height,e.banners.map(a=>a.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const a of t){const s=e.cropFrame(a);if(s.width<=0||s.height<=0)continue;const u=e.skipKnownNear?e.known.map(l=>({x:l.boundingBox.x-a[0],y:l.boundingBox.y-a[1],width:l.boundingBox.width,height:l.boundingBox.height})):void 0;for(const l of await e.detect(s,ox(e.banners,a),u))n.push(Gx(l,a))}if(e.builtSeenOut)for(const a of n)a.obj.id&&a.obj.builtWithCardUnderneath===!0&&e.builtSeenOut.add(a.obj.id);if(n.length===0)return[];const r=[...e.known.map(a=>({boundingBox:a.boundingBox,id:a.id,neuf:-1})),...n.map((a,s)=>({boundingBox:a.obj.boundingBox,id:a.obj.id,neuf:s}))],i=ax(r),o=[];for(const a of i){const s=a.neuf;s>=0&&o.push(n[s])}return o}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const Ye="/7wd-scorer/models/",ds=[];let Bt=null;function Wx(){ds.length=0,Bt=null}function qx(e){const t=performance.now();Bt!==null&&ds.push({nom:Bt.nom,ms:Math.round(t-Bt.debut)}),Bt={nom:e,debut:t}}function Vx(){const e=[...ds];Bt!==null&&e.push({nom:`${Bt.nom} (en cours)`,ms:Math.round(performance.now()-Bt.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function Hx(){const e={};for(const t of Object.keys(it))e[it[t].onnx]=Ai.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of ht)e[t]=n;return e}function jx(){var e,t;return Ci(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:Le.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let Mg=!1;const ki=new Map;function Ci(){var e;Mg||(Le.wasm.wasmPaths="/7wd-scorer/ort/",Le.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Mg=!0)}const Ai=new Set;function Kx(e){Ci();let t=ki.get(e);return t===void 0&&(t=Kn.create(`${Ye}${it[e].onnx}`,{executionProviders:Ai.has(e)?["wasm"]:["webgpu","wasm"]}),ki.set(e,t),t.catch(()=>ki.delete(e))),t}const ht=new Map;let Or=0,Nr=0;const Ri=new Map;function hs(e){const t=(Bt==null?void 0:Bt.nom)??"(hors etage)";Ri.set(t,(Ri.get(t)??0)+e)}function Yx(){return[...Ri.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}let ps=0;function Xx(){return{ms:Math.round(Or),appels:Nr,preparationMs:Math.round(ps)}}function Qx(){Or=0,Nr=0,ps=0,Cw(),Ri.clear()}const Sg=new Set(["coin_yolo.onnx","token_yolo.onnx","wonder_yolo.onnx","pawn_ends.onnx","track_band.onnx"]),fs=new Set;async function ms(e,t){return Kn.create(`${Ye}${e}`,{executionProviders:t?["webgpu"]:["wasm"]})}async function pt(e){Ci();const t=!Sg.has(e)&&!fs.has(e);let n=null;if(t)try{n=await ms(e,!0),ht.set(e,"webgpu")}catch(a){fs.add(e),ht.set(e,`wasm (webgpu refuse a la creation: ${String(a).slice(0,60)})`)}else ht.set(e,Sg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await ms(e,!1)}catch(a){return ht.set(e,`ECHEC wasm: ${String(a).slice(0,160)}`),null}let r=n,i=ht.get(e)==="webgpu";const o=async(a,...s)=>{const u=performance.now();try{const l=await r.run(a,...s),d=performance.now()-u;return Or+=d,hs(d),Nr+=1,l}catch(l){if(!i)throw l;fs.add(e),ht.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await ms(e,!1);const d=await r.run(a,...s),c=performance.now()-u;return Or+=c,hs(c),Nr+=1,d}};return new Proxy(r,{get(a,s,u){if(s==="run")return o;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let gs=null,ys=null;const Zx=.75,Jx=4,e$=.65,t$=3e4;let ws=null;function lr(){return ws===null&&(ws=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),ws}const Ig=new Map;function bs(e){let t=Ig.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ye}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),o=new OffscreenCanvas(r.width,r.height).getContext("2d");o.drawImage(r,0,0);const a=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),Ig.set(e,t)),t}function _s(e){return bs(`wonder-refs/${e}.jpg`)}const Eg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function n$(){const e=new Map;for(const t of Eg){const n=await bs(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function r$(){const e=new Map;for(const t of Eg){const n=await bs(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const i$=.6,o$=12,a$=45e3;let xs=null;function Tg(){return xs===null&&(Ci(),xs=(async()=>{try{const[e,t,n,r]=await Promise.all([Kn.create(`${Ye}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),Kn.create(`${Ye}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Ye}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Ye}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:t_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),xs}async function s$(e,t){const n=Math.max(e_/en,t.width/t.height),{tensor:r,width:i}=r_(t,n),o={[e.rec.inputNames[0]]:new De("float32",r,[1,3,en,i])},a=(await e.rec.run(o))[e.rec.outputNames[0]],[s,u,l]=a.dims,d=a.data,c=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=d[w+b];x>y&&(y=x,m=b)}c[f]=m,p[f]=y}return n_(c,p,e.charset)}function u$(...e){return bt("merveilles (OCR+ORB+opencv)",()=>l$(...e))}async function l$(e,t){const n=await Tg();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+a$;let o=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){o=!0;break}t(`wonder names: rotation ${a*90}°…`,a/4);const s=Jt(e,a),u=qb(s),l={[n.det.inputNames[0]]:new De("float32",u.tensor,[1,3,u.height,u.width])},d=(await n.det.run(l))[n.det.outputNames[0]],c=Xb(d.data,u,s.width,s.height).slice(0,o$);console.debug(`[wonders-ocr] rot ${a*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){o=!0;break e}const f=Qb(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await s$(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<i$||m.trim().length<Jx)continue;const w=c_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<Zx||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:$s(p,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:o}}function $s(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const o=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],a=[o(e.x,e.y),o(e.x+e.width,e.y+e.height)],s=a.map(c=>c[0]),u=a.map(c=>c[1]),l=Math.min(...s),d=Math.min(...u);return{x:l,y:d,width:Math.max(...s)-l,height:Math.max(...u)-d}}function c$(){return ys===null&&(ys=fetch(`${Ye}laurel_gallery.json`).then(async e=>e.ok?Rb(await e.json()):[]).catch(()=>[])),ys}function d$(e,t,n,r){return xt("crop",()=>h$(e,t,n,r))}function h$(e,t,n,r){return Vt(e,t-r,n-r,2*r,2*r)}function Vt(e,t,n,r,i){return xt("crop",()=>p$(e,t,n,r,i))}function p$(e,t,n,r,i){const o=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-o),d=Math.max(0,u-a),c=new Uint8Array(l*d*3);for(let p=0;p<d;p++)for(let f=0;f<l;f++){const m=((p+a)*e.width+(f+o))*e.channels,y=(p*l+f)*3;c[y]=e.data[m],c[y+1]=e.data[m+1],c[y+2]=e.data[m+2]}return{width:l,height:d,channels:3,data:c}}function f$(){return gs===null&&(gs=fetch(`${Ye}token_templates.json`).then(async e=>e.ok?I1(await e.json()):new Map).catch(()=>new Map)),gs}let vs=null;function m$(){return vs===null&&(vs=(async()=>{try{const e=await fetch(`${Ye}token_embed_index.json`);if(!e.ok)return null;const t=N1(await e.json()),n=await pt("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),vs}const g$=.92;let Ms=null;function y$(){return Ms===null&&(Ms=(async()=>{try{return(await fetch(`${Ye}guild_classifier.onnx`,{method:"HEAD"})).ok?await pt("guild_classifier.onnx"):null}catch{return null}})()),Ms}let Ss=null;function w$(){return Ss===null&&(Ss=(async()=>{try{return(await fetch(`${Ye}laurel_digit.onnx`,{method:"HEAD"})).ok?await pt("laurel_digit.onnx"):null}catch{return null}})()),Ss}let Is=null,Es=null;function b$(){return Es===null&&(Es=(async()=>{try{return(await fetch(`${Ye}banner_class.onnx`,{method:"HEAD"})).ok?await pt("banner_class.onnx"):null}catch{return null}})()),Es}async function _$(e,t){if(t.length===0)return t;const n=await b$();if(n===null)return t;const r=[];for(const i of t)try{const o=a2(i.box,e.width,e.height);if(o===null){r.push(i);continue}const a=Vt(e,o.x,o.y,o.w,o.h),s=s2(a),u=await n.run({[n.inputNames[0]]:new De("float32",s,[1,3,mn,mn])});u2(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function x$(){return Is===null&&(Is=(async()=>{try{return(await fetch(`${Ye}laurel_filter.onnx`,{method:"HEAD"})).ok?await pt("laurel_filter.onnx"):null}catch{return null}})()),Is}async function $$(e,t,n){let[r,i,o,a]=t,s=o-r,u=a-i;if(s<=0||u<=0)return null;if(s<ar){const w=Math.floor((r+o)/2);r=w-Math.floor(ar/2),o=w+Math.floor(ar/2),s=o-r}if(u<ar){const w=Math.floor((i+a)/2);i=w-Math.floor(ar/2),a=w+Math.floor(ar/2),u=a-i}const l=Math.trunc(ag*s),d=Math.trunc(ag*u),c=Math.max(0,r-l),p=Math.max(0,i-d),f=Math.min(e.width,o+l),m=Math.min(e.height,a+d),y=Vt(e,c,p,f-c,m-p);if(y.width<=0||y.height<=0)return null;try{const w=t2(y),b=await n.run({[n.inputNames[0]]:new De("float32",w,[1,3,fn,fn])});return n2(b[n.outputNames[0]].data)}catch{return null}}let Ts=null;function v$(){return Ts===null&&(Ts=(async()=>{try{return(await fetch(`${Ye}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await pt("coin_filter_cnn.onnx"):null}catch{return null}})()),Ts}let ks=null;function M$(){return ks===null&&(ks=(async()=>{try{return(await fetch(`${Ye}coin_denom.onnx`,{method:"HEAD"})).ok?await pt("coin_denom.onnx"):null}catch{return null}})()),ks}async function S$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=dg(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*vt*vt);r.forEach((u,l)=>i.set(u,l*u.length));const a=(await n.run({[n.inputNames[0]]:new De("float32",i,[t.length,3,vt,vt])}))[n.outputNames[0]].data,s=vi.length;return t.map((u,l)=>E2(a.subarray(l*s,l*s+s)))}catch{return null}}async function I$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=dg(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const d=new Float32Array(t.length*3*vt*vt);l.forEach((f,m)=>d.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new De("float32",d,[t.length,3,vt,vt])}))[n.outputNames[0]].data;return t.map((f,m)=>S2(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const o=t.map(u=>u.r).sort((u,l)=>u-l),a=o.length%2===1?o[(o.length-1)/2]:(o[o.length/2-1]+o[o.length/2])/2,s=Math.trunc(a);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,d)=>Math.max(l,u[d]))}return i}catch{return null}}let Cs=null;function kg(){return Cs===null&&(Cs=(async()=>{try{return(await fetch(`${Ye}tuck_classifier.onnx`,{method:"HEAD"})).ok?await pt("tuck_classifier.onnx"):null}catch{return null}})()),Cs}const Cg=.1;let As=null;function Ag(){return As===null&&(As=(async()=>{try{return(await fetch(`${Ye}track_band.onnx`,{method:"HEAD"})).ok?await pt("track_band.onnx"):null}catch{return null}})()),As}async function Rg(e,t,n){try{const r=fi(t,1280,Bw(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new De("float32",r.tensor,[1,3,1280,1280])});return kr(i[e.outputNames[0]].data,r.params,Cg)}catch{return[]}}let Rs=null;const E$=.4;function T$(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function k$(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const o=i.tuckRegion;o&&r.push(o)}return n.length===0&&r.length===0?e:e.filter(i=>{const o=i.boundingBox;if(!o)return!0;const a=o.x+o.width/2,s=o.y+o.height/2;for(const u of n)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||T$(o,u)>=E$)return!1;for(const u of r)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function C$(){return Rs===null&&(Rs=(async()=>{try{return(await fetch(`${Ye}tuck_box.onnx`,{method:"HEAD"})).ok?await pt("tuck_box.onnx"):null}catch{return null}})()),Rs}let Os=null;function A$(){return Os===null&&(Os=(async()=>{try{return(await fetch(`${Ye}wonder_classifier.onnx`,{method:"HEAD"})).ok?await pt("wonder_classifier.onnx"):null}catch{return null}})()),Os}let Og=null,Ng=null;async function R$(e){var f;Og??(Og=pt("wonder_obb.onnx")),Ng??(Ng=pt("wonder_upright.onnx"));const[t,n]=await Promise.all([Og,Ng]);if(t===null||n===null)return null;const r=await lr();if(r===null)return null;const{tensor:i,params:o}=fi(e,1024),s=(await t.run({[t.inputNames[0]]:new De("float32",i,[1,3,1024,1024])}))[t.outputNames[0]],u=s.dims[s.dims.length-1],l=s.data;let d=0;for(let m=0;m<u;m++){const y=l[4*u+m];y>d&&(d=y)}const c=Cx(r,l,u,o);ht.set("wonder_obb.onnx",`${ht.get("wonder_obb.onnx")??"?"} | dims=${s.dims} scoreMax=${d.toFixed(4)} dets=${c.length} q0=${(f=c[0])!=null&&f.quad[0]?JSON.stringify(c[0].quad[0].map(Math.round)):"-"} img=${e.width}x${e.height} scale=${o.scale.toFixed(4)} pad=${o.padX},${o.padY}`);const p=[];for(const m of c){let y=m.quad;try{const w=Ax(r,e,y),b=new Float32Array(3*Ti*Ei),x=[.485,.456,.406],S=[.229,.224,.225];for(let k=0,T=Ei*Ti;k<T;k++)for(let v=0;v<3;v++)b[v*T+k]=(w.data[k*3+v]/255-x[v])/S[v];const I=(await n.run({[n.inputNames[0]]:new De("float32",b,[1,3,Ti,Ei])}))[n.outputNames[0]].data[0];1/(1+Math.exp(-I))<.5&&(y=Rx(y))}catch(w){console.warn("[wonders-obb] head-tail indisponible sur une carte :",w)}p.push(y.map(w=>[w[0],w[1]]))}return p}const Ns={wonderRef:_s,tuckClassifier:kg,tuckBoxClassifier:C$,obbQuads:R$,localiseWonders:async e=>{try{const{rows:t,params:n}=await St("wonder",e);return Ua(t,n,it.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function O$(e,t){const n=await m$();if(n!==null)try{const r=B1(e),i=new De("float32",r,[4,3,pn,pn]),a=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=D1(n.index,P1(a));return u<g$?["",-1]:[s,u]}catch{}return C1(e,t)}const zg=new WeakMap;async function zs(e){const t=zg.get(e);if(t!==void 0)return await t;const n=bt("decodage image",()=>N$(e));return zg.set(e,n),await n}async function N$(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",o=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${o}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const Bg=new WeakMap;async function St(e,t){let n=Bg.get(t);n===void 0&&(n=new Map,Bg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=z$(e,t);return n.set(e,i),await i}const Pg=new WeakMap;async function Bs(e,t,n){let r=Pg.get(e);r===void 0&&(r=new Map,Pg.set(e,r));let i=r.get(t);return i===void 0&&(i=n(),r.set(t,i)),structuredClone(await i)}async function z$(e,t){const n=it[e],r=performance.now(),{tensor:i,params:o}=fi(t,n.input);ps+=performance.now()-r;const a=async()=>{const s=await Kx(e),u={[s.inputNames[0]]:new De("float32",i,[1,3,n.input,n.input])},l=performance.now(),d=await s.run(u),c=performance.now()-l;Or+=c,hs(c),Nr+=1;const p=d[s.outputNames[0]];return{rows:new Float32Array(p.data),params:o}};try{return await a()}catch(s){if(Ai.has(e))throw s;return Ai.add(e),ki.delete(e),await a()}}const B$=6,P$=4,D$=5,U$=2;async function L$(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await zs(e),r=await St("banner",n),i=mi(r.rows,r.params,it.banner.conf);if(t.banners=i.length,i.length>=B$)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const o=await St("laurel",n),a=kr(o.rows,o.params,it.laurel.conf);if(t.laurels=a.length,a.length>=P$)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const s=await St("coin",n),u=Tm(s.rows,s.params,it.coin.conf);return t.coins=u.length,u.length>=D$?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=U$?{...t,kind:"board",confidence:.4}:t}function F$(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Ps(e,t,n,r,i=()=>{},o="player",a,s=!1){const u={},l=[],d=[],c=[],p=[],f=[],m=[];let y=0,w=0,b=0,x=0,S=0;for(const C of e){S+=1;const N=`${t} photo ${S}/${e.length}`;r(`${N}: reading pixels…`,.01);const B=await zs(C);r(`${N}: card banners…`,.04);const q=await St("banner",B);let G=mi(q.rows,q.params,it.banner.conf);G=await _$(B,G),r(`${N}: progress tokens…`,.08);let O=[];const V=await Ag();V!==null&&(O=await Rg(V,B,G)),O.length>0&&G.length>0&&(G=G.filter(L=>{const j=L.box[0]+L.box[2]/2,Z=L.box[1]+L.box[3]/2;return!O.some(([re,se,le,Te])=>Math.min(re,le)<=j&&j<=Math.max(re,le)&&Math.min(se,Te)<=Z&&Z<=Math.max(se,Te))}));const Q=await St("token",B),J=await f$(),he=c.length,W=[];for(const L of jw(Q.rows,Q.params,it.token.conf)){if(W.push({cx:L.cx,cy:L.cy,r:L.r}),O.some(([re,se,le,Te])=>L.cx>=re&&L.cx<=le&&L.cy>=se&&L.cy<=Te))continue;const[j,Z]=await O$(zm(B,L),J);j===""&&Z<0?W.pop():j===""?w+=1:c.some(re=>re.id===j)||c.push({id:j,center:[L.cx,L.cy],radius:L.r,confidence:Math.round(Z*1e4)/1e4})}r(`${N}: coins…`,.14);const P=await St("coin",B),R=Tm(P.rows,P.params,it.coin.conf).filter(L=>!W.some(j=>(L.cx-j.cx)**2+(L.cy-j.cy)**2<=L.r*L.r)),z=await v$(),D=z!==null?await Bs(B,"coinFilter",()=>I$(B,R,z)):null,F=(D!==null?R.filter((L,j)=>D[j]>=cg).map(L=>L.r):[]).sort((L,j)=>L-j),Y=F.length>0?F.length%2===1?F[(F.length-1)/2]:(F[F.length/2-1]+F[F.length/2])/2:null,[ne,ee]=M2,fe=R.map((L,j)=>{const Z=D!==null?D[j]:null;return Z===null||Z>=cg?"keep":Y!==null&&Y>0&&L.r/Y>=ne&&L.r/Y<=ee?"suspect":"drop"}),xe=R.filter((L,j)=>fe[j]==="keep"),ke=yb(B,xe),Ue=await M$(),st=Ue!==null?await Bs(B,"coinDenom",()=>S$(B,xe,Ue)):null,Be=T2(ke,st??ke.map(()=>null));Be.map(L=>L.value);const ye=[];let ut=0;if(R.forEach((L,j)=>{if(fe[j]==="drop")return;if(fe[j]==="suspect"){const re=D[j];ye.push({denomination:null,center:[L.cx,L.cy],radius:L.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${re.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const Z=Be[ut++];ye.push({denomination:Z.value,center:[L.cx,L.cy],radius:L.r,denomSource:Z.source??"colour"})}),R.length>0&&ye.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${R.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ye.length>=2){const L=ye.map(Z=>Z.radius).sort((Z,re)=>Z-re),j=L.length%2===1?L[(L.length-1)/2]:(L[L.length/2-1]+L[L.length/2])/2;if(j>0)for(const Z of ye)Z.radius/j>2&&(Z.suspect=!0,Z.suspectReason=`radius ${Z.radius}px is ${(Z.radius/j).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(ye.length>=2)for(let L=0;L<ye.length;L+=1)for(let j=L+1;j<ye.length;j+=1){const Z=ye[L],re=ye[j],se=Math.hypot(Z.center[0]-re.center[0],Z.center[1]-re.center[1]);if(se<1.1*Math.min(Z.radius,re.radius))for(const le of[Z,re])le.suspect||(le.suspect=!0,le.suspectReason=`almost concentric with another coin (${se.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const nn=p.length,Qe=[],lt=[],ft=Date.now()+t$;let Ke=null,Dt=null;const zr=()=>(Dt===null&&(Dt=(async()=>{try{const{rows:L,params:j}=await St("wonder",B);return Ua(L,j,it.wonder.conf,Number.POSITIVE_INFINITY).map(Z=>Z.box)}catch{return[]}})()),Dt),rn=[];let Un=!1;const on=await A$();if(on!==null){const L=await zr();if(L.length>0&&(Ke=await bt("opencv.js (chargement)",()=>lr()),Ke!==null)){r(`${N}: identifying wonders…`,.35);const j=await bt("identifyWondersByClassifier",()=>Bs(B,"identifyWonders",()=>xg(Ns,Ke,B,L,on,ft,G)));for(const Z of j)p.some(re=>re.id===Z.obj.id)||(p.push(Z.obj),rn.push({obj:Z.obj,edgeScores:Z.edgeScores,zone:Z.zone}),Qe.push(Z.zone),lt.push({quad:Z.quad,region:Z.region}));Un=j.length>0}}Un||r(`${N}: wonder names…`,.2);const mt=Un?{wonders:[],aborted:!1}:await u$(B,(L,j)=>r(`${N}: ${L}`,.2+.35*(j??0)));Ke===null&&(Ke=mt.wonders.length>0?await lr():null);for(const L of mt.wonders){let j=null;if(Ke!==null&&Date.now()<ft){r(`${N}: registering ${L.name}…`,.6);try{const Z=await _s(L.id);if(Z!==null){let re=$_(Ke,B,Z,[[L.nameBox.x,L.nameBox.y],[L.nameBox.x+L.nameBox.width,L.nameBox.y],[L.nameBox.x+L.nameBox.width,L.nameBox.y+L.nameBox.height],[L.nameBox.x,L.nameBox.y+L.nameBox.height]]);if(re===null){const se=await zr(),le=E_(se,L.nameBox.x+L.nameBox.width/2,L.nameBox.y+L.nameBox.height/2);le!==null&&(re=Hm(Ke,B,Z,le))}if(re!==null){let se=re.built,le=!1;const Te=await kg();if(Te!==null)try{const me=Ja(Ke,B,Z,re.footprint);if(me!==null){const be=bi(me),Pe=await Te.run({[Te.inputNames[0]]:new De("float32",be,[1,3,$t,$t])});se=es(Pe[Te.outputNames[0]].data).built,le=!0}}catch{}const Ce=re.footprint.map(me=>me[0]),ce=re.footprint.map(me=>me[1]),oe=Math.max(0,Math.round(Math.min(...Ce))),ae=Math.max(0,Math.round(Math.min(...ce)));j={built:se,boundingBox:{x:oe,y:ae,width:Math.min(B.width,Math.round(Math.max(...Ce)))-oe,height:Math.min(B.height,Math.round(Math.max(...ce)))-ae},tuckRegion:wi(re.footprint,re.overflow),footprint:re.footprint,edgeScores:re.edgeScores,builtByTuck:le}}}}catch(Z){console.warn(`[wonders-reg] ${L.id} failed:`,Z)}}if(j!==null){const Z=j.tuckRegion??j.boundingBox;Qe.push({x0:Z.x,y0:Z.y,x1:Z.x+Z.width,y1:Z.y+Z.height}),lt.push({quad:j.footprint,region:j.tuckRegion})}else{const Z=Math.max(8,L.nameBox.height),re=Math.round(L.nameBox.width*.15);Qe.push({x0:L.nameBox.x-re,y0:L.nameBox.y-Z*2.5,x1:L.nameBox.x+L.nameBox.width+re,y1:L.nameBox.y+L.nameBox.height+Z*2.5}),lt.push({quad:null,region:null})}if(!p.some(Z=>Z.id===L.id)){const Z=(j==null?void 0:j.builtByTuck)===!0,re=Z?j.built:!1,se=!Z&&(j==null?void 0:j.built)===!0,le={id:L.id,name:L.name,builtWithCardUnderneath:re,boundingBox:(j==null?void 0:j.boundingBox)??{x:0,y:0,width:0,height:0},...j!=null&&j.tuckRegion?{tuckRegion:j.tuckRegion}:{},confidence:L.confidence,...se?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};p.push(le),rn.push({obj:le,edgeScores:j&&!j.builtByTuck?j.edgeScores:null,zone:Qe[Qe.length-1]})}}if(!Un){const L=C_(rn.map(j=>({built:j.obj.builtWithCardUnderneath,edgeScores:j.edgeScores,zone:j.zone})),G.map(j=>[j.box[0]+j.box[2]/2,j.box[1]+j.box[3]/2]));for(const j of L){const Z=rn[j];Z.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${Z.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(G.length>0){const j=new Set(L);for(let Z=0;Z<rn.length;Z++){const re=rn[Z];if(j.has(Z)||!re.obj.builtWithCardUnderneath)continue;const se=re.obj.tuckRegion;if(se===void 0)continue;if(!G.some(Te=>{const Ce=Te.box[0]+Te.box[2]/2,ce=Te.box[1]+Te.box[3]/2;return Ce>=se.x&&Ce<=se.x+se.width&&ce>=se.y&&ce<=se.y+se.height})){const Te=re.obj;Te.builtWithCardUnderneath=!1,Te.suspect=!0,Te.suspectReason="built-unconfirmed"}}}}if(mt.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${N}: the wonder-name read ran out of its time budget on this device — ${mt.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Ke!==null&&mt.wonders.length>0&&Date.now()<ft)try{const L=await Tg(),j=(L==null?void 0:L.catalog.filter(re=>re.kind==="wonder").map(re=>re.id))??[],Z=new Map;for(const re of j)if(!p.some(se=>se.id===re)){const se=await _s(re);se!==null&&Z.set(re,se)}if(Z.size>0){r(`${N}: searching occluded wonders…`,.7);const re=x_(Ke,B,Z,ft);for(const se of re){const le=se.footprint.map(Pe=>Pe[0]),Te=se.footprint.map(Pe=>Pe[1]),Ce=Math.max(0,Math.round(Math.min(...le))),ce=Math.max(0,Math.round(Math.min(...Te))),oe={x:Ce,y:ce,width:Math.min(B.width,Math.round(Math.max(...le)))-Ce,height:Math.min(B.height,Math.round(Math.max(...Te)))-ce};if(p.some(Pe=>{const Fe=Pe.boundingBox,qe=Math.max(0,Math.min(Fe.x+Fe.width,oe.x+oe.width)-Math.max(Fe.x,oe.x)),Oe=Math.max(0,Math.min(Fe.y+Fe.height,oe.y+oe.height)-Math.max(Fe.y,oe.y)),Ze=qe*Oe,nt=Fe.width*Fe.height+oe.width*oe.height-Ze;return nt>0&&Ze/nt>__}))continue;const me=L==null?void 0:L.catalog.find(Pe=>Pe.id===se.id);p.push({id:se.id,name:(me==null?void 0:me.nameFr)??(me==null?void 0:me.name)??se.id,builtWithCardUnderneath:se.built,boundingBox:oe,...se.tuckRegion?{tuckRegion:se.tuckRegion}:{},confidence:Math.round(se.confidence*1e4)/1e4});const be=se.tuckRegion??oe;Qe.push({x0:be.x,y0:be.y,x1:be.x+be.width,y1:be.y+be.height}),lt.push({quad:se.footprint.map(([Pe,Fe])=>[Pe,Fe]),region:se.tuckRegion??null})}}}catch(L){console.warn("[wonders-reg] discovery failed:",L)}const yn=o==="opponent";let wn=(L,j)=>!yn,Ln=(L,j)=>!yn,Br=null;try{let L=p.slice(nn);const j=[];G.forEach((ce,oe)=>{const ae=ce.box[0]+ce.box[2]/2,me=ce.box[1]+ce.box[3]/2;Qe.some(be=>ae>=be.x0&&ae<=be.x1&&me>=be.y0&&me<=be.y1)||j.push(oe)});const Z=[],re=[];L.forEach((ce,oe)=>{const ae=ce.boundingBox;ae&&ae.width>0&&(Z.push(oe),re.push([ae.x,ae.y,ae.width,ae.height]))});const se=ce=>{const oe=[];return ce.forEach((ae,me)=>{const be=ae.box[0]+ae.box[2]/2,Pe=ae.box[1]+ae.box[3]/2;Qe.some(Fe=>be>=Fe.x0&&be<=Fe.x1&&Pe>=Fe.y0&&Pe<=Fe.y1)||oe.push(me)}),oe};let le=ss(G.map(ce=>ce.box),j,re,O,[B.width,B.height]);if(on!==null){r(`${N}: seconde passe merveilles (crop de cité)…`,.42),Mt.pass1Calls+=1;const oe=(await vg({skipKnownNear:!0,image:B,banners:G,hulls:le.hulls.map(([ae,me],be)=>({owner:ae,poly:me,n:le.hullBoxCounts[be]??0})),wonderBoxes:re,known:L,cropFrame:([ae,me,be,Pe])=>Vt(B,ae,me,be-ae,Pe-me),detect:async(ae,me,be)=>{if(Ke===null&&(Ke=await lr()),Ke===null)return[];const Pe=await $g(Ns,Ke,ae,on,ft,me,be);return Mt.pass1Boxes+=Pe.length,Pe}})).filter(ae=>!p.some(me=>me.id===ae.obj.id));if(Mt.pass1Kept+=oe.length,oe.length>0){for(const ae of oe)p.push(ae.obj),Qe.push(ae.zone),lt.push({quad:ae.quad,region:ae.region});L=p.slice(nn),Z.length=0,re.length=0,L.forEach((ae,me)=>{const be=ae.boundingBox;be&&be.width>0&&(Z.push(me),re.push([be.x,be.y,be.width,be.height]))}),le=ss(G.map(ae=>ae.box),se(G),re,O,[B.width,B.height])}}try{const ce=pg(B.width,B.height,G.map(oe=>oe.box),le.hulls.map(([oe,ae],me)=>({owner:oe,poly:ae,n:le.hullBoxCounts[me]??0})),re);if(ce.length>0){const oe=us(G.map(me=>me.box)),ae=[];for(const me of ce){const[be,Pe,Fe,qe]=me,Oe=Vt(B,be,Pe,Fe-be,qe-Pe);if(Oe.width<=0||Oe.height<=0)continue;const Ze=await St("banner",Oe);for(const nt of mi(Ze.rows,Ze.params,it.banner.conf)){const ct=rx(nt.box,me,oe);ct&&ae.push({...nt,box:ct})}}if(ae.length>0){const me=Am([...G,...ae]);me.length>G.length&&(G=me,le=ss(G.map(be=>be.box),se(G),re,O,[B.width,B.height]))}}}catch(ce){console.warn("[#129 city-rescan] skipped:",ce)}if(on!==null&&L.some(ce=>ce.builtWithCardUnderneath!==!0)){r(`${N}: revote built (crop de cité)…`,.47);const ce=new Set;Mt.pass2Calls+=1,await vg({builtSeenOut:ce,image:B,banners:G,hulls:le.hulls.map(([oe,ae],me)=>({owner:oe,poly:ae,n:le.hullBoxCounts[me]??0})),wonderBoxes:re,known:L,cropFrame:([oe,ae,me,be])=>Vt(B,oe,ae,me-oe,be-ae),detect:async(oe,ae)=>{if(Ke===null&&(Ke=await lr()),Ke===null)return[];const me=await $g(Ns,Ke,oe,on,ft,ae);return Mt.pass2Boxes+=me.length,me}}),Mt.pass2Promoted+=[...ce].filter(oe=>L.some(ae=>ae.id===oe&&ae.builtWithCardUnderneath!==!0)).length;for(const oe of L)oe.id&&ce.has(oe.id)&&oe.builtWithCardUnderneath!==!0&&(oe.builtWithCardUnderneath=!0,oe.builtByCityCrop=!0)}a!==void 0&&(a.hulls=le.hulls.map(([ce,oe],ae)=>({owner:ce,poly:oe,n:le.hullBoxCounts[ae]??0})),a.bandBoxes=O,a.image=B),wn=(ce,oe)=>le.pointOwner(ce,oe)==="opponent"===yn;const Te=yn?"opponent":"player";if(Ln=(ce,oe)=>le.pointOwner(ce,oe)===Te,s){const ce=le;Br=oe=>new Set(q2(oe,ce,Te,O))}G=G.filter((ce,oe)=>le.bannerOwner[oe]==="opponent"===yn);const Ce=L.map(()=>"player");Z.forEach((ce,oe)=>{Ce[ce]=le.wonderOwner[oe]});for(let ce=L.length-1;ce>=0;ce-=1)Ce[ce]==="opponent"!==yn&&p.splice(nn+ce,1);Qe.length=0;for(const ce of p.slice(nn)){const oe=ce.tuckRegion??ce.boundingBox;oe&&Qe.push({x0:oe.x,y0:oe.y,x1:oe.x+oe.width,y1:oe.y+oe.height})}for(let ce=c.length-1;ce>=he;ce-=1){const[oe,ae]=c[ce].center;wn(oe,ae)||c.splice(ce,1)}}catch(L){console.warn("[city-split] failed (side unfiltered):",L)}const an=Br!==null?Br(ye):null;for(const L of ye)(an!==null?!an.has(L):!Ln(L.center[0],L.center[1]))||(y+=L.denomination??0,d.push(L));const Ni=new Set,Pr=[],zi=us(G.map(L=>L.box));lt.forEach((L,j)=>{if(L.quad===null||L.region===null){const le=Qe[j];le&&Pr.push(le);return}const Z=L.region,re=[];G.forEach((le,Te)=>{const Ce=le.box[0]+le.box[2]/2,ce=le.box[1]+le.box[3]/2;Ce>=Z.x&&Ce<=Z.x+Z.width&&ce>=Z.y&&ce<=Z.y+Z.height&&re.push([Te,le.box])});const se=v2(L.quad,re,zi);se!==null&&Ni.add(se)});let It=[],Fn=0;G.forEach((L,j)=>{if(Ni.has(j)){x+=1,Fn+=1;return}const Z=L.box[0]+L.box[2]/2,re=L.box[1]+L.box[3]/2;if(Pr.some(se=>Z>=se.x0&&Z<=se.x1&&re>=se.y0&&re<=se.y1)){x+=1,Fn+=1;return}It.push(L)});const Bi=g2(It,Fn,O,B.width,B.height);It=Bi.kept;for(const L of It)u[L.family]=(u[L.family]??0)+1,b+=1;const cr=tb(It),dr=new Set(cr.map(L=>L.box.join(",")));for(const L of rb(It))dr.has(L.box.join(","))||(cr.push(L),dr.add(L.box.join(",")));for(const L of Bi.suspects)dr.has(L.box.join(","))||(cr.push(L),dr.add(L.box.join(",")));for(const L of cr)m.push(L);if(It.some(L=>L.family==="guild")){const L=await y$();if(L!==null){r(`${N}: identifying guilds…`,.75);for(const j of It)if(j.family==="guild")try{const[Z,re,se,le]=j.box,Te=Vt(B,Z,re,se,le),Ce=F1(Te),ce={[L.inputNames[0]]:new De("float32",Ce,[1,3,rr,rr])},ae=(await L.run(ce))[L.outputNames[0]].data,{id:me,prob:be}=G1(ae);me!==""&&!f.some(Pe=>Pe.id===me)&&f.push({id:me,boundingBox:{x:Z,y:re,width:se,height:le},confidence:Math.round(be*1e4)/1e4})}catch(Z){console.warn("[guild-cls] failed:",Z)}}else if(Date.now()<ft)try{const j=Ke??await lr();if(j!==null){const Z=await n$();if(Z.size>0){r(`${N}: identifying guilds…`,.75);const re=await r$();for(const se of g1(j,B,Z,ft,re))f.some(le=>le.id===se.id)||f.push(se)}}}catch(j){console.warn("[guilds-reg] failed:",j)}}r(`${N}: laurels…`,.8);const Ls=await bt("laurier: chargement galerie gabarits",()=>c$()),Pi=[];for(const L of[0]){const j=L===0?B:Jt(B,L),Z=await bt("laurier: passe PLEINE photo",()=>St("laurel",j));for(const[re,se,le,Te]of xt("laurier: decodage YOLO (JS)",()=>kr(Z.rows,Z.params,it.laurel.conf))){const Ce=$s({x:re,y:se,width:le-re,height:Te-se},L,B.width,B.height);Pi.push([Ce.x,Ce.y,Ce.x+Ce.width,Ce.y+Ce.height])}}let bn=xt("laurier: dedup",()=>km(Pi));const Dr=[];try{const L=gx(G.map(j=>j.box),[B.width,B.height]);ht.set("_tta.onnx",`total=${ur.total} idDiff=${ur.idDiff} verdictDiff=${ur.verdictDiff}`),ht.set("_rescan.onnx",`p1: ${Mt.pass1Calls} appels, ${Mt.pass1Boxes} boites, ${Mt.pass1Kept} neuves | p2: ${Mt.pass2Calls} appels, ${Mt.pass2Boxes} boites, ${Mt.pass2Promoted} promues`),ht.set("_marge2.onnx",`total=${qt.total} pos4=${qt.positifs4} pos2=${qt.positifs2} divergent=${qt.divergent} `+qt.detail.slice(0,10).join(" | ")),ht.set("_ttaObb.onnx",`total=${gn.total} memeK=${gn.memeK} inv=${gn.memeKInverse} `+gn.detail.slice(0,12).join(" ")),ht.set("_tuilage.onnx",`groupes=? tuiles=${L.length} bannieres=${G.length} image=${B.width}x${B.height}`);for(const[j,Z,re,se]of L){const le=Vt(B,j,Z,re-j,se-Z);if(le.width<=0||le.height<=0)continue;const Te=[];for(const Ce of[0]){const ce=Ce===0?le:Jt(le,Ce),oe=await bt("laurier: passe par TUILE (#113)",()=>St("laurel",ce));for(const[ae,me,be,Pe]of xt("laurier: decodage YOLO (JS)",()=>kr(oe.rows,oe.params,it.laurel.conf))){const Fe=$s({x:ae,y:me,width:be-ae,height:Pe-me},Ce,le.width,le.height);Te.push([Fe.x,Fe.y,Fe.x+Fe.width,Fe.y+Fe.height])}}if(bn=yx(bn,km(Te),[j,Z]),V!==null)try{const Ce=fi(le,1280,Tr),ce=await V.run({[V.inputNames[0]]:new De("float32",Ce.tensor,[1,3,1280,1280])});for(const[oe,ae,me,be]of kr(ce[V.outputNames[0]].data,Ce.params,Cg))Dr.push([oe+j,ae+Z,me+j,be+Z])}catch{}}}catch(L){console.warn("[laurel-containers] failed:",L)}const Fs=[...O,...Dr];bn=bn.filter(([L,j,Z,re])=>!_x((L+Z)/2,(j+re)/2,Fs,G.map(se=>se.box)));const Gn=await w$(),Ur=await x$();for(const[L,j,Z,re]of bn){const se=Math.trunc((L+Z)/2),le=Math.trunc((j+re)/2);if([...W,...R].some(qe=>(se-qe.cx)**2+(le-qe.cy)**2<=qe.r*qe.r)||!wn(se,le))continue;if(Ur!==null){const qe=await bt("laurier: filtre FP (#49)",()=>$$(B,[Math.trunc(L),Math.trunc(j),Math.trunc(Z),Math.trunc(re)],Ur));if(qe!==null&&qe>=e2)continue}const Ce=Math.min(Math.trunc(Z-L),Math.trunc(re-j)),ce=Math.max(6,Math.trunc(Math.max(Z-L,re-j)*vb)),oe=d$(B,se,le,ce);let ae=null,me=0,be=!1;if(Gn!==null&&Ce>=6){const qe=Vt(B,Math.trunc(L),Math.trunc(j),Math.trunc(Z-L),Math.trunc(re-j));let Oe=null,Ze=0;for(const nt of[0,1,2,3]){const ct=nt===0?qe:Jt(qe,nt),Ut=Q1(ct),Di=await bt("laurier: lecture chiffre (CNN)",()=>Gn.run({[Gn.inputNames[0]]:new De("float32",Ut,[1,3,or,or])})),{value:Gs,prob:Ui}=Z1(Di[Gn.outputNames[0]].data);if(Ui>Ze&&(Oe=Gs,Ze=Ui),Oe!==null&&Ze>=X1)break}Oe!==null&&Ze>=Y1&&(ae=Oe,me=Ze)}if(ae===null&&Ce>=6){const qe=new Map;for(const Oe of[0,1,2,3]){const Ze=Oe===0?oe:Jt(oe,Oe),[nt,ct]=xt("laurier: lecteur GABARITS (repli, JS pur)",()=>Pb(Ze,Ls));nt!==null&&(qe.set(nt,Math.max(qe.get(nt)??0,ct)),ct>me&&(ae=nt,me=ct))}ae!==null&&me<e$&&(ae=null),be=ae!==null&&[...qe.entries()].some(([Oe,Ze])=>Oe!==ae&&Ze>=me-.1)}const Pe=Qe.some(qe=>se>=qe.x0&&se<=qe.x1&&le>=qe.y0&&le<=qe.y1),Fe=f.some(qe=>{const Oe=qe.boundingBox;return Oe!==void 0&&se>=Oe.x&&se<=Oe.x+Oe.width&&le>=Oe.y&&le<=Oe.y+Oe.height});l.push({value:ae,valueRead:ae!==null,center:[Math.round((L+Z)/2),Math.round((j+re)/2)],boundingBox:{x:Math.trunc(L),y:Math.trunc(j),width:Math.trunc(Z-L),height:Math.trunc(re-j)},confidence:Math.round(me*1e4)/1e4,excluded:Pe||Fe,photoIndex:S-1,...be?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}x>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${x} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):b>0&&p.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const M=u.guild??0;M!==f.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${M} purple banner(s) counted but ${f.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):f.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+f.map(C=>C.id).join(", ")+" — confirm in the review."});const I=p.filter(C=>C.boundingBox.width===0);if(I.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${I.map(C=>C.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${p.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),w>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${w} token disc(s) found but not identified — pick them in the review below.`}),c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+c.map(C=>C.id).join(", ")+" — confirm in the review."}),d.length>0){const C=d.filter(B=>B.denomSource==="cnn").length,N=d.length-C;n.push({code:"LOW_CONFIDENCE",message:N===0?`${t}: coins read as ${y} from ${d.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${y} from ${d.length} tile(s) — ${C} by the learned model, ${N} by metal COLOUR alone (the model abstained); confirm the total.`})}const k=k$(f,p);for(const C of[...xx(p.map(N=>N.id),t),...Mx(k.map(N=>N.id),t)])n.push({code:"INCONSISTENT_STATE",message:C.message});const T=l.filter(C=>!C.excluded),v=T.filter(C=>C.valueRead);return{...F$(),wonders:p,guilds:k,progressTokens:c,laurels:l,cardVictoryPoints:{value:v.reduce((C,N)=>C+(N.value??0),0),laurelsKept:T.length,laurelsUnread:T.length-v.length,complete:T.length===v.length},cardCounts:{byFamily:u,source:b>0?"yolo":"none",tuckedExcluded:x,...m.length>0?{suspects:m}:{}},coins:{total:y,confidence:d.length>0?.5:0,source:d.length===0?"none":d.some(C=>C.denomSource==="cnn")?"local-cnn":"local-colour",coins:d}}}const Pt=1280,G$=.3,Oi=9;let Ds=null;function Dg(){return Ds===null&&(Ds=(async()=>{try{return(await fetch(`${Ye}pawn_ends.onnx`,{method:"HEAD"})).ok?await pt("pawn_ends.onnx"):null}catch{return null}})()),Ds}function W$(e){const t=Pt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height),o=i.getContext("2d",{willReadFrequently:!0}),a=Aw(e.data,e.width,e.height,e.channels);o.putImageData(new ImageData(a,e.width,e.height),0,0);const u=new OffscreenCanvas(Pt,Pt).getContext("2d",{willReadFrequently:!0});u.fillStyle="rgb(114,114,114)",u.fillRect(0,0,Pt,Pt),u.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:l}=u.getImageData(0,0,Pt,Pt),d=Pt*Pt,c=new Float32Array(3*d);for(let p=0;p<d;p+=1)c[p]=l[p*4]/255,c[d+p]=l[p*4+1]/255,c[2*d+p]=l[p*4+2]/255;return{tensor:c,r:t}}async function q$(e,t){const{tensor:n,r}=W$(t),o=(await e.run({[e.inputNames[0]]:new De("float32",n,[1,3,Pt,Pt])}))[e.outputNames[0]].data,a=new Map;for(let s=0;s+5<o.length;s+=6){const u=o[s+4];if(u<G$)continue;const l=Math.round(o[s+5]),d=a.get(l);if(d===void 0||u>d.conf){const c=(o[s]+o[s+2])/2/r,p=(o[s+1]+o[s+3])/2/r;a.set(l,{conf:u,cx:c,cy:p})}}return a}async function Us(e,t){let n=null;for(let w=0;w<4;w+=1){const b=w===0?t:Jt(t,w),x=await q$(e,b);if(x.has(0)&&x.has(1)&&x.has(2)){const S=x.get(0).conf+x.get(1).conf+x.get(2).conf;(n===null||S>n.score)&&(n={score:S,det:x,k:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),o=n.det.get(2),a=o.cx-i.cx,s=o.cy-i.cy,u=(i.cx+o.cx)/2,l=(i.cy+o.cy)/2,d=a*a+s*s;if(d<=0)return null;const c=((r.cx-u)*a+(r.cy-l)*s)/d*(2*Oi),p=Math.min(Oi,Math.max(-Oi,at(c))),f=Math.min(r.conf,i.conf,o.conf),m=(w,b)=>{const x=n.k%4;return x===0?[w,b]:x===1?[b,t.height-1-w]:x===2?[t.width-1-w,t.height-1-b]:[t.width-1-b,w]},y=[i,o].map(w=>{const[b,x]=m(w.cx,w.cy);return[at(b),at(x)]});return{position:p,confidence:Math.round(f*1e4)/1e4,ends:y}}async function Ug(e,t,n){let r=null;for(const i of n){const o=Pw(t.width,t.height,i);if(o===null)continue;const a=Vt(t,o.x,o.y,o.width,o.height);if(a.width===0||a.height===0)continue;const s=await Us(e,a);s!==null&&(r===null||s.confidence>r.confidence)&&(r={...s,ends:s.ends.map(([u,l])=>[u+o.x,l+o.y])})}return r}async function V$(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let o=0;const a=(f,m=0)=>{t(f,i>0?Math.min(.99,(o+m)/i):void 0)},s=()=>{o+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await Ps(m,f,n,a,s))}let u=null,l=null;if(e.both!==void 0){const f={},m={player:await Ps([e.both],"left",n,a,s,"player",f,!0),opponent:await Ps([e.both],"right",n,a,s,"opponent",void 0,!0)};if(f.image!==void 0)try{const w=await Dg();w!==null&&(u=await Us(w,f.image),u===null&&f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await Ug(w,f.image,f.bandBoxes)))}catch(w){console.warn("[#125] both-photo pawn read failed:",w)}u!==null&&(l=Gw(u.ends,f.hulls??[],u.position));const y=l!==null&&!l.ambiguous?Ww(l):null;y!==null?(r.left=m[y.left],r.right=m[y.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=m.player,r.right=m.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...$x(f),...vx(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let d={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0)try{const f=await zs(e.board),m=await Dg();if(m!==null){let y=await Us(m,f);if(y===null){const w=await Ag();if(w!==null){const b=await St("banner",f),x=mi(b.rows,b.params,it.banner.conf),S=await Rg(w,f,x);y=await Ug(m,f,S)}}y!==null&&(d={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}else u!==null&&l!==null&&(d={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});if(!d.found){const f=b=>{var x,S;return Number(((S=(x=b==null?void 0:b.cardCounts)==null?void 0:x.byFamily)==null?void 0:S.military)??0)},m=f(r.left),y=f(r.right),w=Math.abs(m-y);n.push({code:"MILITARY_PAWN_NOT_FOUND",message:w>=3?`The conflict pawn was NOT read, so the military score is 0 — but one city has ${m} military cards and the other ${y}. A gap that wide almost never leaves the pawn in the middle: set its position below, it is very likely worth points.`:"The conflict pawn was not read — the military score is 0 by default, not by measurement. Set its position below if the pawn is off-centre."})}const c=d.conflictPawnPosition,p=Math.abs(c)>=Oi?{type:"military",winner:c>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:d,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,o)=>{qx(i),self.postMessage({id:t,progress:i,...o!==void 0?{fraction:o}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0),Wx(),Qx();const i=performance.now(),o=n==="classify"?await L$(e.data.file):await V$(e.data.payload,r);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:Vx(),providers:Hx(),runtime:jx(),inference:Xx(),famillesJs:kw(),inferenceParEtape:Yx(),totalMs:Math.round(performance.now()-i)}})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
