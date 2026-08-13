var g3=Object.defineProperty;var y3=(Wt,qt,Un)=>qt in Wt?g3(Wt,qt,{enumerable:!0,configurable:!0,writable:!0,value:Un}):Wt[qt]=Un;var V0=(Wt,qt,Un)=>y3(Wt,typeof qt!="symbol"?qt+"":qt,Un);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Un=Object.getOwnPropertyNames,K0=Object.prototype.hasOwnProperty,Y0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ee=(e,t)=>()=>(e&&(t=e(e=0)),t),Ln=(e,t)=>{for(var n in t)Wt(e,n,{get:t[n],enumerable:!0})},X0=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Un(t))!K0.call(e,i)&&i!==n&&Wt(e,i,{get:()=>t[i],enumerable:!(r=qt(t,i))||r.enumerable});return e},or=e=>X0(Wt({},"__esModule",{value:!0}),e),ar,nn,Fn,Ks,Ys,Xs=ee(()=>{ar=new Map,nn=[],Fn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=ar.get(e);if(r===void 0)ar.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=nn.indexOf(e);i!==-1&&nn.splice(i,1);for(let o=0;o<nn.length;o++)if(ar.get(nn[o]).priority<=n){nn.splice(o,0,e);return}nn.push(e)}return}throw new TypeError("not a valid backend")},Ks=async e=>{let t=ar.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ys=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?nn:n,i,o=[],a=new Set;for(let u of r){let l=await Ks(u);typeof l=="string"?o.push({name:u,err:l}):(i||(i=l),i===l&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of o)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let s=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,l)=>l==="executionProviders"?s:Reflect.get(u,l)})]}}),Z0=ee(()=>{Xs()}),Zs,Q0=ee(()=>{Zs="1.27.0"}),Ui,Je,Qs=ee(()=>{Q0(),Ui="warning",Je={wasm:{},webgl:{},webgpu:{},versions:{common:Zs},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ui=e}},get logLevel(){return Ui}},Object.defineProperty(Je,"logLevel",{enumerable:!0})}),De,J0=ee(()=>{Qs(),De=Je}),Js,eu,ey=ee(()=>{Js=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[3]):(i=e.dims[3],o=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",s=t==null?void 0:t.norm,u,l;s===void 0||s.mean===void 0?u=[255,255,255,255]:typeof s.mean=="number"?u=[s.mean,s.mean,s.mean,s.mean]:(u=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(u[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let d=o*i,c=0,p=d,f=d*2,m=-1;a==="RGBA"?(c=0,p=d,f=d*2,m=d*3):a==="RGB"?(c=0,p=d,f=d*2):a==="RBG"&&(c=0,f=d,p=d*2);for(let y=0;y<o;y++)for(let w=0;w<i;w++){let b=(e.data[c++]-l[0])*u[0],x=(e.data[p++]-l[1])*u[1],M=(e.data[f++]-l[2])*u[2],v=m===-1?255:(e.data[m++]-l[3])*u[3];r.fillStyle="rgba("+b+","+x+","+M+","+v+")",r.fillRect(w,y,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},eu=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,o,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],o=e.dims[1],a=e.dims[3]):(i=e.dims[3],o=e.dims[2],a=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=o*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let p=4,f=0,m=1,y=2,w=3,b=0,x=c,M=c*2,v=-1;s==="RGBA"?(b=0,x=c,M=c*2,v=c*3):s==="RGB"?(b=0,x=c,M=c*2):s==="RBG"&&(b=0,M=c,x=c*2),r=n.createImageData(i,o);for(let I=0;I<o*i;f+=p,m+=p,y+=p,w+=p,I++)r.data[f]=(e.data[b++]-d[0])*l[0],r.data[m]=(e.data[x++]-d[1])*l[1],r.data[y]=(e.data[M++]-d[2])*l[2],r.data[w]=v===-1?255:(e.data[v++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),Dr,tu,nu,ru,iu,ou,ty=ee(()=>{Fi(),Dr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},o,a;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=n*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),c=4,p=0,f=1,m=2,y=3,w=0,b=l,x=l*2,M=-1;s==="RGB"&&(c=3,p=0,f=1,m=2,y=-1),u==="RGBA"?M=l*3:u==="RBG"?(w=0,x=l,b=l*2):u==="BGR"&&(x=0,b=l,w=l*2);for(let v=0;v<l;v++,p+=c,m+=c,f+=c,y+=c)d[w++]=(e[p]+a[0])/o[0],d[b++]=(e[f]+a[1])/o[1],d[x++]=(e[m]+a[2])/o[2],M!==-1&&y!==-1&&(d[M++]=(e[y]+a[3])/o[3]);return u==="RGBA"?new ft("float32",d,[1,4,n,r]):new ft("float32",d,[1,3,n,r])},tu=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",a,s=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(n){let d=u();d.width=e.width,d.height=e.height;let c=l(d);if(c!=null){let p=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(p=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=p,s.width=f}else s.tensorFormat="RGBA",s.height=p,s.width=f;c.drawImage(e,0,0),a=c.getImageData(0,0,f,p).data}else throw new Error("Can not access image data")}else if(r){let d,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,c=t.resizedWidth):(d=e.height,c=e.width),t!==void 0&&(s=t),s.format="RGBA",s.height=d,s.width=c,t!==void 0){let p=u();p.width=c,p.height=d;let f=l(p);if(f!=null)f.putImageData(e,0,0),a=f.getImageData(0,0,c,d).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let c=l(d);if(c!=null){let p=e.height,f=e.width;return c.drawImage(e,0,0,f,p),a=c.getImageData(0,0,f,p).data,s.height=p,s.width=f,Dr(a,s)}else throw new Error("Can not access image data")}else{if(o)return new Promise((d,c)=>{let p=u(),f=l(p);if(!e||!f)return c();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{p.width=m.width,p.height=m.height,f.drawImage(m,0,0,p.width,p.height);let y=f.getImageData(0,0,p.width,p.height);s.height=p.height,s.width=p.width,d(Dr(y.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Dr(a,s);throw new Error("Input data provided is not supported - aborted tensor creation")},nu=(e,t)=>{let{width:n,height:r,download:i,dispose:o}=t,a=[1,r,n,4];return new ft({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:o})},ru=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new ft({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:o})},iu=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:o}=t;return new ft({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:o})},ou=(e,t,n)=>new ft({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),yn,sr,Li,au,ny=ee(()=>{yn=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),sr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Li=!1,au=()=>{if(!Li){Li=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(yn.set("int64",BigInt64Array),sr.set(BigInt64Array,"int64")),t&&(yn.set("uint64",BigUint64Array),sr.set(BigUint64Array,"uint64")),r?(yn.set("float16",n),sr.set(n,"float16")):yn.set("float16",Uint16Array)}}}),su,uu,ry=ee(()=>{Fi(),su=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},uu=(e,t)=>{switch(e.location){case"cpu":return new ft(e.type,e.data,t);case"cpu-pinned":return new ft({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ft({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ft({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ft({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ft,Fi=ee(()=>{ey(),ty(),ny(),ry(),ft=class{constructor(e,t,n){au();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=yn.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,s;if(typeof e=="string")if(r=e,s=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=yn.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(s=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=sr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(s===void 0)s=[a.length];else if(!Array.isArray(s))throw new TypeError("A tensor's dims must be a number array");i=s,this.cpuData=a,this.dataLocation="cpu"}let o=su(i);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=o}static async fromImage(e,t){return tu(e,t)}static fromTexture(e,t){return nu(e,t)}static fromGpuBuffer(e,t){return ru(e,t)}static fromMLTensor(e,t){return iu(e,t)}static fromPinnedBuffer(e,t,n){return ou(e,t,n)}toDataURL(e){return Js(this,e)}toImageData(e){return eu(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return uu(this,e)}}}),We,lu=ee(()=>{Fi(),We=ft}),Ur,Gi,zt,vt,wn,_n,cu=ee(()=>{Qs(),Ur=(e,t)=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.timeStamp(`${e}::ORT::${t}`)},Gi=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let o=0;o<n.length;o++){if(r&&!n[o].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Ur("CPU",a);return}n[o].includes("TRACE_FUNC")&&(r=!0)}},zt=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||Gi("BEGIN",e)},vt=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||Gi("END",e)},wn=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.time(`ORT::${e}`)},_n=e=>{(typeof Je.trace>"u"?!Je.wasm.trace:!Je.trace)||console.timeEnd(`ORT::${e}`)}}),du,iy=ee(()=>{Xs(),lu(),cu(),du=class H0{constructor(t){this.handler=t}async run(t,n,r){zt(),wn("InferenceSession.run");let i={},o={};if(typeof t!="object"||t===null||t instanceof We||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof We)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let l of n){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);i[l]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(d.indexOf(c)!==-1){let p=n[c];(p===null||p instanceof We)&&(l=!0,a=!1,i[c]=p)}if(l){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(a)for(let l of this.outputNames)i[l]=null;let s=await this.handler.run(t,i,o),u={};for(let l in s)if(Object.hasOwnProperty.call(s,l)){let d=s[l];d instanceof We?u[l]=d:u[l]=new We(d.type,d.data,d.dims)}return _n("InferenceSession.run"),vt(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){zt(),wn("InferenceSession.create");let o,a={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,c=0,p=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(p=t.byteLength-c,typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteLength' must be an integer.");if(p<=0||c+p>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-c}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(d,c,p)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,u]=await Ys(a),l=await s.createInferenceSessionHandler(o,u);return _n("InferenceSession.create"),vt(),new H0(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Gn,oy=ee(()=>{iy(),Gn=du}),ay=ee(()=>{}),sy=ee(()=>{}),uy=ee(()=>{}),ly=ee(()=>{}),cy={};Ln(cy,{InferenceSession:()=>Gn,TRACE:()=>Ur,TRACE_EVENT_BEGIN:()=>wn,TRACE_EVENT_END:()=>_n,TRACE_FUNC_BEGIN:()=>zt,TRACE_FUNC_END:()=>vt,Tensor:()=>We,env:()=>De,registerBackend:()=>Fn});var yt=ee(()=>{Z0(),J0(),oy(),lu(),ay(),sy(),cu(),uy(),ly()}),Wi=ee(()=>{}),hu={};Ln(hu,{default:()=>pu});var qi,Vi,pu,dy=ee(()=>{var e;Kf(),bn(),Zi(),qi="ort-wasm-proxy-worker",Vi=((e=globalThis.self)==null?void 0:e.name)===qi,Vi&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":eo(r.wasm).then(()=>{ha(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:o}=r;pa(o,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,o=ii(i);postMessage({type:n,out:o});break}case"create":{let{model:i,options:o}=r;ma(i,o).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":ga(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:o,inputs:a,outputIndices:s,options:u}=r;wa(i,o,a,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:l},ba([...a,...l]))},l=>{postMessage({type:n,err:l})});break}case"end-profiling":_a(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),pu=Vi?null:t=>new Worker(t??mt,{type:"module",name:qi})}),fu={};Ln(fu,{default:()=>gu});async function mu(e={}){var W0,q0;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((W0=self.name)==null?void 0:W0.startsWith("em-pthread"));t.mountExternalData=(h,g)=>{h.startsWith("./")&&(h=h.substring(2)),(t.Xc||(t.Xc=new Map)).set(h,g)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let o=h=>async(...g)=>{var $;try{if(t.Yc)throw Error("Session already started");let _=t.Yc={Kd:g[0],errors:[]},E=await h(...g);if(t.Yc!==_)throw Error("Session mismatch");($=t.dd)==null||$.flush();let C=_.errors;if(0<C.length){let P=await Promise.all(C);if(P=P.filter(K=>K),0<P.length)throw Error(P.join(`
`))}return E}finally{t.Yc=null}};t.jsepInit=(h,g)=>{if(h==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=g;let $=t.dd;t.jsepRegisterBuffer=(_,E,C,P)=>$.registerBuffer(_,E,C,P),t.jsepGetBuffer=_=>$.getBuffer(_),t.jsepCreateDownloader=(_,E,C)=>$.createDownloader(_,E,C),t.jsepOnCreateSession=_=>{$.onCreateSession(_)},t.jsepOnReleaseSession=_=>{$.onReleaseSession(_)},t.jsepOnRunStart=_=>$.onRunStart(_),t.Id=(_,E)=>{$.upload(_,E)}}else if(h==="webnn"){let $=g[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=_=>$.onRunStart(_),t.webnnOnRunEnd=$.onRunEnd.bind($),t.webnnOnReleaseSession=_=>{$.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,E)=>$.createMLTensorDownloader(_,E),t.webnnRegisterMLTensor=(_,E,C,P)=>$.registerMLTensor(_,E,C,P),t.webnnCreateMLContext=_=>$.createMLContext(_),t.webnnRegisterMLConstant=(_,E,C,P,K,re)=>$.registerMLConstant(_,E,C,P,K,t.Xc,re),t.webnnRegisterGraphInput=$.registerGraphInput.bind($),t.webnnIsGraphInput=$.isGraphInput.bind($),t.webnnRegisterGraphOutput=$.registerGraphOutput.bind($),t.webnnIsGraphOutput=$.isGraphOutput.bind($),t.webnnCreateTemporaryTensor=$.createTemporaryTensor.bind($),t.webnnIsGraphInputOutputTypeSupported=$.isGraphInputOutputTypeSupported.bind($)}};let a=()=>{let h=g=>(...$)=>{let _=Ft;return $=g(...$),Ft!=_?new Promise((E,C)=>{zs={resolve:E,reject:C}}):$};(()=>{for(let g of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[g]=h(t[g])})(),o!==void 0&&(t._OrtRun=o(t._OrtRun),t._OrtRunWithBinding=o(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var s,u,l=(h,g)=>{throw g},d=self.location.href,c="";if(n||r){try{c=new URL(".",d).href}catch{}r&&(u=h=>{var g=new XMLHttpRequest;return g.open("GET",h,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),s=async h=>{if(k(h))return new Promise(($,_)=>{var E=new XMLHttpRequest;E.open("GET",h,!0),E.responseType="arraybuffer",E.onload=()=>{E.status==200||E.status==0&&E.response?$(E.response):_(E.status)},E.onerror=_,E.send(null)});var g=await fetch(h,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var p,f,m,y,w,b,x=console.log.bind(console),M=console.error.bind(console),v=x,I=M,T=!1,k=h=>h.startsWith("file://");function S(){pt.buffer!=N.buffer&&B()}if(i){let h=function(g){try{var $=g.data,_=$.Sc;if(_==="load"){let E=[];self.onmessage=C=>E.push(C),b=()=>{postMessage({Sc:"loaded"});for(let C of E)h(C);self.onmessage=h};for(let C of $.xd)t[C]&&!t[C].proxy||(t[C]=(...P)=>{postMessage({Sc:"callHandler",wd:C,args:P})},C=="print"&&(v=t[C]),C=="printErr"&&(I=t[C]));pt=$.Od,B(),f=$.Pd,ie(),Pi()}else if(_==="run"){(function(E){var C=(S(),H)[E+52>>>2>>>0];E=(S(),H)[E+56>>>2>>>0],Jg(C,C-E),ve(C)})($.Rc),Ls($.Rc,0,0,1,0,0),Qt(),Rs($.Rc),A||(jg(),A=!0);try{dn($.Md,$.bd)}catch(E){if(E!="unwind")throw E}}else $.target!=="setimmediate"&&(_==="checkMailbox"?A&&Ci():_&&(I(`worker: received unknown command ${_}`),I($)))}catch(E){throw Kg(),E}};var A=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=h}var N,U,V,F,O,H,X,J,he,W,z,R=!1;function B(){var h=pt.buffer;t.HEAP8=N=new Int8Array(h),V=new Int16Array(h),t.HEAPU8=U=new Uint8Array(h),F=new Uint16Array(h),t.HEAP32=O=new Int32Array(h),t.HEAPU32=H=new Uint32Array(h),X=new Float32Array(h),J=new Float64Array(h),he=new BigInt64Array(h),W=new BigUint64Array(h)}function L(){R=!0,i?b():tn.sb()}function G(h){throw I(h="Aborted("+h+")"),T=!0,h=new WebAssembly.RuntimeError(h+". Build with -sASSERTIONS for more info."),w==null||w(h),h}function Z(){return{a:{ma:Av,gb:Cv,g:Cr,J:$i,f:Si,o:rr,h:ir,ha:Sg,b:Is,T:Mi,Ha:Rr,n:Es,$:Q,Xa:ne,Da:ae,Fa:ue,Ya:Te,Va:ke,Oa:ce,Ua:oe,ka:le,Ea:me,Ba:be,Wa:Ge,Ca:Ue,bb:Pn,ea:Ts,wa:ks,ua:$$,da:S$,O:M$,H:I$,va:E$,_:N$,xa:z$,Ra:B$,za:D$,Ia:U$,sa:L$,fa:F$,Qa:Rs,_a:G$,R:H$,r:Z$,c:Cs,hb:Q$,y:J$,M:ev,D:tv,l:nv,s:Cg,ib:rv,I:iv,S:ov,j:av,u:sv,q:uv,k:lv,La:cv,Ma:dv,Na:hv,Ja:Ng,Ka:zg,ta:Bg,db:fv,ab:gv,v:yv,aa:wv,ga:_v,$a:mv,W:bv,Za:xv,Aa:$v,F:pv,U:vv,la:zi,ya:Mv,fb:Sv,eb:Iv,Sa:Lg,Ta:Fg,Ga:Qe,V:Gg,ja:Wg,Pa:qg,ia:Vg,kb:p3,na:u3,lb:h3,oa:s3,G:Qv,e:zv,t:Ov,w:Rv,B:Vv,mb:i3,K:Yv,x:Dv,pa:o3,Y:l3,ba:r3,nb:n3,ob:t3,P:Hv,qa:e3,pb:Jv,N:Xv,Z:a3,d:Nv,A:Pv,m:Bv,jb:f3,p:Lv,z:Fv,C:Uv,E:Gv,L:jv,qb:Zv,Q:c3,ca:Kv,X:d3,rb:qv,ra:Wv,i:Tv,a:pt,cb:lt}}}async function ie(){function h(_,E){var C=tn=_.exports;_={};for(let[P,K]of Object.entries(C))typeof K=="function"?(C=W$(K),_[P]=C):_[P]=K;return tn=_,tn=(function(){var P=tn,K=se=>$e=>se($e)>>>0,re=se=>()=>se()>>>0;return(P=Object.assign({},P)).tb=K(P.tb),P.Xb=re(P.Xb),P.Zb=K(P.Zb),P.lc=K(P.lc),P.mc=re(P.mc),P.qc=K(P.qc),P})(),Ke.push(tn._b),Hg=(_=tn).tb,jg=_.ub,t._OrtInit=_.vb,t._OrtGetLastError=_.wb,t._OrtCreateSessionOptions=_.xb,t._OrtAppendExecutionProvider=_.yb,t._OrtAddFreeDimensionOverride=_.zb,t._OrtAddSessionConfigEntry=_.Ab,t._OrtReleaseSessionOptions=_.Bb,t._OrtCreateSession=_.Cb,t._OrtReleaseSession=_.Db,t._OrtGetInputOutputCount=_.Eb,t._OrtGetInputOutputMetadata=_.Fb,t._OrtFree=_.Gb,t._OrtCreateTensor=_.Hb,t._OrtGetTensorData=_.Ib,t._OrtReleaseTensor=_.Jb,t._OrtCreateRunOptions=_.Kb,t._OrtAddRunConfigEntry=_.Lb,t._OrtReleaseRunOptions=_.Mb,t._OrtCreateBinding=_.Nb,t._OrtBindInput=_.Ob,t._OrtBindOutput=_.Pb,t._OrtClearBoundOutputs=_.Qb,t._OrtReleaseBinding=_.Rb,t._OrtRunWithBinding=_.Sb,t._OrtRun=_.Tb,t._OrtEndProfiling=_.Ub,t._JsepOutput=_.Vb,t._JsepGetNodeName=_.Wb,Bi=_.Xb,Gt=t._free=_.Yb,zr=t._malloc=_.Zb,Ls=_.ac,Kg=_.bc,Yg=_.cc,Xg=_.dc,Fs=_.ec,Zg=_.fc,Qg=_.gc,Ie=_.hc,Br=_.ic,Jg=_.jc,ve=_.kc,Gs=_.lc,Se=_.mc,e0=_.nc,Ws=_.oc,t0=_.pc,n0=_.qc,r0=_.rc,qs=_.sc,i0=_.tc,o0=_.uc,a0=_.vc,s0=_.wc,u0=_.xc,l0=_.yc,c0=_.zc,d0=_.Ac,h0=_.Bc,p0=_.Cc,f0=_.Dc,m0=_.Ec,g0=_.Fc,y0=_.Gc,w0=_.Hc,_0=_.Ic,b0=_.Jc,x0=_.Kc,$0=_.Lc,v0=_.Mc,S0=_.Nc,M0=_.Pc,I0=_.Qc,E0=_.$c,T0=_.ad,k0=_.fd,C0=_.jd,A0=_.kd,R0=_.ld,O0=_.md,N0=_.nd,z0=_.od,B0=_.pd,P0=_.qd,D0=_.vd,U0=_.Td,L0=_.Ud,F0=_.Vd,G0=_.Wd,f=E,tn}var g,$=Z();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm($,(E,C)=>{_(h(E,C))})}):i?h(new WebAssembly.Instance(f,Z()),f):(z??(z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),g=await(async function(_){var E=z;if(!p&&!k(E))try{var C=fetch(E,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,_)}catch(P){I(`wasm streaming compile failed: ${P}`),I("falling back to ArrayBuffer instantiation")}return(async function(P,K){try{var re=await(async function(se){if(!p)try{var $e=await s(se);return new Uint8Array($e)}catch{}if(se==z&&p)se=new Uint8Array(p);else{if(!u)throw"both async and sync fetching of the wasm failed";se=u(se)}return se})(P);return await WebAssembly.instantiate(re,K)}catch(se){I(`failed to asynchronously prepare wasm: ${se}`),G(se)}})(E,_)})($),h(g.instance,g.module))}class te{constructor(g){V0(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var ye=h=>{h.terminate(),h.onmessage=()=>{}},Me=[],Ne=0,Pe=null,ut=h=>{ct.length==0&&(Jt(),On(ct[0]));var g=ct.pop();if(!g)return 6;ht.push(g),Ot[h.Rc]=g,g.Rc=h.Rc;var $={Sc:"run",Md:h.Ld,bd:h.bd,Rc:h.Rc};return g.postMessage($,h.rd),0},ze=0,ge=(h,g,...$)=>{var _,E=16*$.length,C=Se(),P=Gs(E),K=P>>>3;for(_ of $)typeof _=="bigint"?((S(),he)[K++>>>0]=1n,(S(),he)[K++>>>0]=_):((S(),he)[K++>>>0]=0n,(S(),J)[K++>>>0]=_);return h=Yg(h,0,E,P,g),ve(C),h};function lt(h){if(i)return ge(0,1,h);if(m=h,!(0<ze)){for(var g of ht)ye(g);for(g of ct)ye(g);ct=[],ht=[],Ot={},T=!0}l(0,new te(h))}function Zt(h){if(i)return ge(1,0,h);Qe(h)}var Qe=h=>{if(m=h,i)throw Zt(h),"unwind";lt(h)},ct=[],ht=[],Ke=[],Ot={},kr=h=>{var g=h.Rc;delete Ot[g],ct.push(h),ht.splice(ht.indexOf(h),1),h.Rc=0,Xg(g)};function Qt(){Ke.forEach(h=>h())}var On=h=>new Promise(g=>{h.onmessage=E=>{var C=E.data;if(E=C.Sc,C.Zc&&C.Zc!=Bi()){var P=Ot[C.Zc];P?P.postMessage(C,C.rd):I(`Internal error! Worker sent a message "${E}" to target pthread ${C.Zc}, but that thread no longer exists!`)}else E==="checkMailbox"?Ci():E==="spawnThread"?ut(C):E==="cleanupThread"?ki(()=>{kr(Ot[C.Nd])}):E==="loaded"?(h.loaded=!0,g(h)):C.target==="setimmediate"?h.postMessage(C):E==="uncaughtException"?h.onerror(C.error):E==="callHandler"?t[C.wd](...C.args):E&&I(`worker sent an unknown command ${E}`)},h.onerror=E=>{throw I(`worker sent an error! ${E.filename}:${E.lineno}: ${E.message}`),E};var $,_=[];for($ of[])t.propertyIsEnumerable($)&&_.push($);h.postMessage({Sc:"load",xd:_,Od:pt,Pd:f})});function Jt(){var h=new Worker((()=>{let g=URL;return self.location.href>"file:"&&self.location.href<"file;"?new g("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ct.push(h)}var pt,dn=(h,g)=>{ze=0,h=qs(h,g),0<ze?m=h:Fs(h)},hn=[],Nn=0;function Cr(h){var g=new xt(h>>>=0);return(S(),N)[g.Tc+12>>>0]==0&&(Ar(g,!0),Nn--),vi(g,!1),hn.push(g),n0(h)}var en=0,$i=()=>{Ie(0,0);var h=hn.pop();e0(h.cd),en=0};function Ar(h,g){g=g?1:0,(S(),N)[h.Tc+12>>>0]=g}function vi(h,g){g=g?1:0,(S(),N)[h.Tc+13>>>0]=g}class xt{constructor(g){this.cd=g,this.Tc=g-24}}var zn=h=>{var g=en;if(!g)return Br(0),0;var $=new xt(g);(S(),H)[$.Tc+16>>>2>>>0]=g;var _=(S(),H)[$.Tc+4>>>2>>>0];if(!_)return Br(0),g;for(var E of h){if(E===0||E===_)break;if(t0(E,_,$.Tc+16))return Br(E),g}return Br(_),g};function Si(){return zn([])}function rr(h){return zn([h>>>0])}function ir(h,g,$,_){return zn([h>>>0,g>>>0,$>>>0,_>>>0])}var Sg=()=>{var h=hn.pop();h||G("no exception to throw");var g=h.cd;throw(S(),N)[h.Tc+13>>>0]==0&&(hn.push(h),vi(h,!0),Ar(h,!1),Nn++),Ws(g),en=g};function Is(h,g,$){var _=new xt(h>>>=0);throw g>>>=0,$>>>=0,(S(),H)[_.Tc+16>>>2>>>0]=0,(S(),H)[_.Tc+4>>>2>>>0]=g,(S(),H)[_.Tc+8>>>2>>>0]=$,Ws(h),Nn++,en=h}var Mi=()=>Nn;function pn(h,g,$,_){return i?ge(2,1,h,g,$,_):Rr(h,g,$,_)}function Rr(h,g,$,_){if(h>>>=0,g>>>=0,$>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var E=[];return i&&E.length===0?pn(h,g,$,_):(h={Ld:$,Rc:h,bd:_,rd:E},i?(h.Sc="spawnThread",postMessage(h,E),0):ut(h))}function Es(h){throw en||(en=h>>>0),en}var Bn=globalThis.TextDecoder&&new TextDecoder,Or=(h,g,$,_)=>{if($=g+$,_)return $;for(;h[g]&&!(g>=$);)++g;return g},D=(h,g=0,$,_)=>{if(16<($=Or(h,g>>>=0,$,_))-g&&h.buffer&&Bn)return Bn.decode(h.buffer instanceof ArrayBuffer?h.subarray(g,$):h.slice(g,$));for(_="";g<$;){var E=h[g++];if(128&E){var C=63&h[g++];if((224&E)==192)_+=String.fromCharCode((31&E)<<6|C);else{var P=63&h[g++];65536>(E=(240&E)==224?(15&E)<<12|C<<6|P:(7&E)<<18|C<<12|P<<6|63&h[g++])?_+=String.fromCharCode(E):(E-=65536,_+=String.fromCharCode(55296|E>>10,56320|1023&E))}}else _+=String.fromCharCode(E)}return _},j=(h,g,$)=>(h>>>=0)?D((S(),U),h,g,$):"";function Q(h,g,$){return i?ge(3,1,h,g,$):0}function ne(h,g){if(i)return ge(4,1,h,g)}function ae(h,g){if(i)return ge(5,1,h,g)}function ue(h,g,$){if(i)return ge(6,1,h,g,$)}function Te(h,g,$){return i?ge(7,1,h,g,$):0}function ke(h,g){if(i)return ge(8,1,h,g)}function ce(h,g,$){if(i)return ge(9,1,h,g,$)}function oe(h,g,$,_){if(i)return ge(10,1,h,g,$,_)}function le(h,g,$,_){if(i)return ge(11,1,h,g,$,_)}function me(h,g,$,_){if(i)return ge(12,1,h,g,$,_)}function be(h){if(i)return ge(13,1,h)}function Ge(h,g){if(i)return ge(14,1,h,g)}function Ue(h,g,$){if(i)return ge(15,1,h,g,$)}var Pn=()=>G(""),nt=h=>{h>>>=0;for(var g="";;){var $=(S(),U)[h++>>>0];if(!$)return g;g+=String.fromCharCode($)}},Be={},Ve={},Xe=class extends Error{constructor(h){super(h),this.name="BindingError"}};function ot(h,g,$={}){return(function(_,E,C={}){var P=E.name;if(!_)throw new Xe(`type "${P}" must have a positive integer typeid pointer`);if(Ve.hasOwnProperty(_)){if(C.yd)return;throw new Xe(`Cannot register type '${P}' twice`)}Ve[_]=E,Be.hasOwnProperty(_)&&(E=Be[_],delete Be[_],E.forEach(K=>K()))})(h,g,$)}var Ii=(h,g,$)=>{switch(g){case 1:return $?_=>(S(),N)[_>>>0]:_=>(S(),U)[_>>>0];case 2:return $?_=>(S(),V)[_>>>1>>>0]:_=>(S(),F)[_>>>1>>>0];case 4:return $?_=>(S(),O)[_>>>2>>>0]:_=>(S(),H)[_>>>2>>>0];case 8:return $?_=>(S(),he)[_>>>3>>>0]:_=>(S(),W)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${h}`)}};function Ts(h,g,$,_,E){h>>>=0,$>>>=0,g=nt(g>>>0);let C=P=>P;if(_=_===0n){let P=8*$;C=K=>BigInt.asUintN(P,K),E=C(E)}ot(h,{name:g,Oc:C,Vc:(P,K)=>(typeof K=="number"&&(K=BigInt(K)),K),Uc:Ii(g,$,!_),Wc:null})}function ks(h,g,$,_){ot(h>>>=0,{name:g=nt(g>>>0),Oc:function(E){return!!E},Vc:function(E,C){return C?$:_},Uc:function(E){return this.Oc((S(),U)[E>>>0])},Wc:null})}var Ei=[],Lt=[0,1,,1,null,1,!0,1,!1,1];function Cs(h){9<(h>>>=0)&&--Lt[h+1]===0&&(Lt[h]=void 0,Ei.push(h))}var $t=h=>{if(!h)throw new Xe(`Cannot use deleted val. handle = ${h}`);return Lt[h]},Nt=h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Ei.pop()||Lt.length;return Lt[g]=h,Lt[g+1]=1,g}};function As(h){return this.Oc((S(),H)[h>>>2>>>0])}var x$={name:"emscripten::val",Oc:h=>{var g=$t(h);return Cs(h),g},Vc:(h,g)=>Nt(g),Uc:As,Wc:null};function $$(h){return ot(h>>>0,x$)}var v$=(h,g)=>{switch(g){case 4:return function($){return this.Oc((S(),X)[$>>>2>>>0])};case 8:return function($){return this.Oc((S(),J)[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${h}`)}};function S$(h,g,$){$>>>=0,ot(h>>>=0,{name:g=nt(g>>>0),Oc:_=>_,Vc:(_,E)=>E,Uc:v$(g,$),Wc:null})}function M$(h,g,$,_,E){h>>>=0,$>>>=0,g=nt(g>>>0);let C=K=>K;if(_===0){var P=32-8*$;C=K=>K<<P>>>P,E=C(E)}ot(h,{name:g,Oc:C,Vc:(K,re)=>re,Uc:Ii(g,$,_!==0),Wc:null})}function I$(h,g,$){function _(C){var P=(S(),H)[C>>>2>>>0];return C=(S(),H)[C+4>>>2>>>0],new E((S(),N).buffer,C,P)}var E=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];ot(h>>>=0,{name:$=nt($>>>0),Oc:_,Uc:_},{yd:!0})}var fn=(h,g,$)=>{var _=(S(),U);if(g>>>=0,0<$){var E=g;$=g+$-1;for(var C=0;C<h.length;++C){var P=h.codePointAt(C);if(127>=P){if(g>=$)break;_[g++>>>0]=P}else if(2047>=P){if(g+1>=$)break;_[g++>>>0]=192|P>>6,_[g++>>>0]=128|63&P}else if(65535>=P){if(g+2>=$)break;_[g++>>>0]=224|P>>12,_[g++>>>0]=128|P>>6&63,_[g++>>>0]=128|63&P}else{if(g+3>=$)break;_[g++>>>0]=240|P>>18,_[g++>>>0]=128|P>>12&63,_[g++>>>0]=128|P>>6&63,_[g++>>>0]=128|63&P,C++}}_[g>>>0]=0,h=g-E}else h=0;return h},Ti=h=>{for(var g=0,$=0;$<h.length;++$){var _=h.charCodeAt($);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++$):g+=3}return g};function E$(h,g){ot(h>>>=0,{name:g=nt(g>>>0),Oc($){var _=(S(),H)[$>>>2>>>0];return _=j($+4,_,!0),Gt($),_},Vc($,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var E=typeof _=="string";if(!(E||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Xe("Cannot pass non-string to std::string");var C=E?Ti(_):_.length,P=zr(4+C+1),K=P+4;return(S(),H)[P>>>2>>>0]=C,E?fn(_,K,C+1):(S(),U).set(_,K>>>0),$!==null&&$.push(Gt,P),P},Uc:As,Wc($){Gt($)}})}var Mg=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,T$=(h,g,$)=>{if(h>>>=1,16<(g=Or((S(),F),h,g/2,$))-h&&Mg)return Mg.decode((S(),F).slice(h,g));for($="";h<g;++h){var _=(S(),F)[h>>>0];$+=String.fromCharCode(_)}return $},k$=(h,g,$)=>{if($??($=2147483647),2>$)return 0;var _=g;$=($-=2)<2*h.length?$/2:h.length;for(var E=0;E<$;++E){var C=h.charCodeAt(E);(S(),V)[g>>>1>>>0]=C,g+=2}return(S(),V)[g>>>1>>>0]=0,g-_},C$=h=>2*h.length,A$=(h,g,$)=>{var _="";h>>>=2;for(var E=0;!(E>=g/4);E++){var C=(S(),H)[h+E>>>0];if(!C&&!$)break;_+=String.fromCodePoint(C)}return _},R$=(h,g,$)=>{if(g>>>=0,$??($=2147483647),4>$)return 0;var _=g;$=_+$-4;for(var E=0;E<h.length;++E){var C=h.codePointAt(E);if(65535<C&&E++,(S(),O)[g>>>2>>>0]=C,(g+=4)+4>$)break}return(S(),O)[g>>>2>>>0]=0,g-_},O$=h=>{for(var g=0,$=0;$<h.length;++$)65535<h.codePointAt($)&&$++,g+=4;return g};function N$(h,g,$){if(h>>>=0,g>>>=0,$=nt($>>>=0),g===2)var _=T$,E=k$,C=C$;else _=A$,E=R$,C=O$;ot(h,{name:$,Oc:P=>{var K=(S(),H)[P>>>2>>>0];return K=_(P+4,K*g,!0),Gt(P),K},Vc:(P,K)=>{if(typeof K!="string")throw new Xe(`Cannot pass non-string to C++ string type ${$}`);var re=C(K),se=zr(4+re+g);return(S(),H)[se>>>2>>>0]=re/g,E(K,se+4,re+g),P!==null&&P.push(Gt,se),se},Uc:As,Wc(P){Gt(P)}})}function z$(h,g){ot(h>>>=0,{zd:!0,name:g=nt(g>>>0),Oc:()=>{},Vc:()=>{}})}function B$(h){Ls(h>>>0,!r,1,!n,131072,!1),Qt()}var ki=h=>{if(!T)try{if(h(),!(0<ze))try{i?Bi()&&Fs(m):Qe(m)}catch(g){g instanceof te||g=="unwind"||l(0,g)}}catch(g){g instanceof te||g=="unwind"||l(0,g)}},P$=!Atomics.waitAsync||((q0=globalThis.navigator)==null?void 0:q0.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Rs(h){h>>>=0,P$||(Atomics.waitAsync((S(),O),h>>>2,h).value.then(Ci),h+=128,Atomics.store((S(),O),h>>>2,1))}var Ci=()=>ki(()=>{var h=Bi();h&&(Rs(h),Qg())});function D$(h,g){(h>>>=0)==g>>>0?setTimeout(Ci):i?postMessage({Zc:h,Sc:"checkMailbox"}):(h=Ot[h])&&h.postMessage({Sc:"checkMailbox"})}var Os=[];function U$(h,g,$,_,E){for(g>>>=0,E>>>=0,Os.length=0,$=E>>>3,_=E+_>>>3;$<_;){var C;C=(S(),he)[$++>>>0]?(S(),he)[$++>>>0]:(S(),J)[$++>>>0],Os.push(C)}return(g?Vs[g]:kv[h])(...Os)}var L$=()=>{ze=0};function F$(h){h>>>=0,i?postMessage({Sc:"cleanupThread",Nd:h}):kr(Ot[h])}function G$(h){}var Ai=h=>{try{h()}catch(g){G(g)}};function W$(h){var g=(...$)=>{Ri.push(h);try{return h(...$)}finally{T||(Ri.pop(),Ft&&mn===1&&Ri.length===0&&(mn=0,ze+=1,Ai(L0),typeof Fibers<"u"&&Fibers.Zd()))}};return Tg.set(h,g),g}var mn=0,Ft=null,Ig=0,Ri=[],Ns=new Map,Eg=new Map,Tg=new Map,q$=0,zs=null,V$=[],kg=h=>(function(g){if(!T){if(mn===0){var $=!1,_=!1;g((E=0)=>{if(!T&&(Ig=E,$=!0,_)){mn=2,Ai(()=>F0(Ft)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),E=!1;try{var C=(function(){var re=(S(),O)[Ft+8>>>2>>>0];return re=Eg.get(re),re=Tg.get(re),--ze,re()})()}catch(re){C=re,E=!0}var P=!1;if(!Ft){var K=zs;K&&(zs=null,(E?K.reject:K.resolve)(C),P=!0)}if(E&&!P)throw C}}),_=!0,$||(mn=1,Ft=(function(){var E=zr(65548),C=E+12;if((S(),H)[E>>>2>>>0]=C,(S(),H)[E+4>>>2>>>0]=C+65536,C=Ri[0],!Ns.has(C)){var P=q$++;Ns.set(C,P),Eg.set(P,C)}return C=Ns.get(C),(S(),O)[E+8>>>2>>>0]=C,E})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Ai(()=>U0(Ft)))}else mn===2?(mn=0,Ai(G0),Gt(Ft),Ft=null,V$.forEach(ki)):G(`invalid state: ${mn}`);return Ig}})(g=>{h().then(g)});function H$(h){return h>>>=0,kg(async()=>{var g=await $t(h);return Nt(g)})}var Bs=[],j$=h=>{var g=Bs.length;return Bs.push(h),g},K$=(h,g)=>{for(var $=Array(h),_=0;_<h;++_){var E=_,C=(S(),H)[g+4*_>>>2>>>0],P=Ve[C];if(P===void 0)throw h=`parameter ${_}`,C=Hg(C),g=nt(C),Gt(C),new Xe(`${h} has unknown type ${g}`);$[E]=P}return $},Y$=(h,g,$)=>{var _=[];return h=h(_,$),_.length&&((S(),H)[g>>>2>>>0]=Nt(_)),h},X$={},Oi=h=>{var g=X$[h];return g===void 0?nt(h):g};function Z$(h,g,$){var[_,...E]=K$(h,g>>>0);g=_.Vc.bind(_);var C=E.map(re=>re.Uc.bind(re));h--;var P={toValue:$t};switch(h=C.map((re,se)=>{var $e=`argFromPtr${se}`;return P[$e]=re,`${$e}(args${se?"+"+8*se:""})`}),$){case 0:var K="toValue(handle)";break;case 2:K="new (toValue(handle))";break;case 3:K="";break;case 1:P.getStringOrSymbol=Oi,K="toValue(handle)[getStringOrSymbol(methodName)]"}return K+=`(${h})`,_.zd||(P.toReturnWire=g,P.emval_returnValue=Y$,K=`return emval_returnValue(toReturnWire, destructorsRef, ${K})`),K=`return function (handle, methodName, destructorsRef, args) {
  ${K}
  }`,$=new Function(Object.keys(P),K)(...Object.values(P)),K=`methodCaller<(${E.map(re=>re.name)}) => ${_.name}>`,j$(Object.defineProperty($,"name",{value:K}))}function Q$(h,g){return g>>>=0,(h=$t(h>>>0))==$t(g)}function J$(h){return(h>>>=0)?(h=Oi(h),Nt(globalThis[h])):Nt(globalThis)}function ev(h){return h=Oi(h>>>0),Nt(t[h])}function tv(h,g){return g>>>=0,h=$t(h>>>0),g=$t(g),Nt(h[g])}function nv(h){9<(h>>>=0)&&(Lt[h+1]+=1)}function Cg(h,g,$,_,E){return Bs[h>>>0](g>>>0,$>>>0,_>>>0,E>>>0)}function rv(h,g,$,_,E){return Cg(h>>>0,g>>>0,$>>>0,_>>>0,E>>>0)}function iv(){return Nt([])}function ov(h){h=$t(h>>>0);for(var g=Array(h.length),$=0;$<h.length;$++)g[$]=h[$];return Nt(g)}function av(h){return Nt(Oi(h>>>0))}function sv(){return Nt({})}function uv(h){for(var g=$t(h>>>=0);g.length;){var $=g.pop();g.pop()($)}Cs(h)}function lv(h,g,$){g>>>=0,$>>>=0,h=$t(h>>>0),g=$t(g),$=$t($),h[g]=$}function cv(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getUTCSeconds(),(S(),O)[g+4>>>2>>>0]=h.getUTCMinutes(),(S(),O)[g+8>>>2>>>0]=h.getUTCHours(),(S(),O)[g+12>>>2>>>0]=h.getUTCDate(),(S(),O)[g+16>>>2>>>0]=h.getUTCMonth(),(S(),O)[g+20>>>2>>>0]=h.getUTCFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getUTCDay(),h=(h.getTime()-Date.UTC(h.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[g+28>>>2>>>0]=h}var Ag=h=>h%4==0&&(h%100!=0||h%400==0),Rg=[0,31,60,91,121,152,182,213,244,274,305,335],Og=[0,31,59,90,120,151,181,212,243,273,304,334];function dv(h,g){h=-9007199254740992>h||9007199254740992<h?NaN:Number(h),g>>>=0,h=new Date(1e3*h),(S(),O)[g>>>2>>>0]=h.getSeconds(),(S(),O)[g+4>>>2>>>0]=h.getMinutes(),(S(),O)[g+8>>>2>>>0]=h.getHours(),(S(),O)[g+12>>>2>>>0]=h.getDate(),(S(),O)[g+16>>>2>>>0]=h.getMonth(),(S(),O)[g+20>>>2>>>0]=h.getFullYear()-1900,(S(),O)[g+24>>>2>>>0]=h.getDay();var $=(Ag(h.getFullYear())?Rg:Og)[h.getMonth()]+h.getDate()-1|0;(S(),O)[g+28>>>2>>>0]=$,(S(),O)[g+36>>>2>>>0]=-60*h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset();var _=new Date(h.getFullYear(),0,1).getTimezoneOffset();h=0|($!=_&&h.getTimezoneOffset()==Math.min(_,$)),(S(),O)[g+32>>>2>>>0]=h}function hv(h){h>>>=0;var g=new Date((S(),O)[h+20>>>2>>>0]+1900,(S(),O)[h+16>>>2>>>0],(S(),O)[h+12>>>2>>>0],(S(),O)[h+8>>>2>>>0],(S(),O)[h+4>>>2>>>0],(S(),O)[h>>>2>>>0],0),$=(S(),O)[h+32>>>2>>>0],_=g.getTimezoneOffset(),E=new Date(g.getFullYear(),6,1).getTimezoneOffset(),C=new Date(g.getFullYear(),0,1).getTimezoneOffset(),P=Math.min(C,E);return 0>$?(S(),O)[h+32>>>2>>>0]=+(E!=C&&P==_):0<$!=(P==_)&&(E=Math.max(C,E),g.setTime(g.getTime()+6e4*((0<$?P:E)-_))),(S(),O)[h+24>>>2>>>0]=g.getDay(),$=(Ag(g.getFullYear())?Rg:Og)[g.getMonth()]+g.getDate()-1|0,(S(),O)[h+28>>>2>>>0]=$,(S(),O)[h>>>2>>>0]=g.getSeconds(),(S(),O)[h+4>>>2>>>0]=g.getMinutes(),(S(),O)[h+8>>>2>>>0]=g.getHours(),(S(),O)[h+12>>>2>>>0]=g.getDate(),(S(),O)[h+16>>>2>>>0]=g.getMonth(),(S(),O)[h+20>>>2>>>0]=g.getYear(),h=g.getTime(),BigInt(isNaN(h)?-1:h/1e3)}function Ng(h,g,$,_,E,C,P){return i?ge(16,1,h,g,$,_,E,C,P):-52}function zg(h,g,$,_,E,C){if(i)return ge(17,1,h,g,$,_,E,C)}var Nr={},pv=()=>performance.timeOrigin+performance.now();function Bg(h,g){if(i)return ge(18,1,h,g);if(Nr[h]&&(clearTimeout(Nr[h].id),delete Nr[h]),!g)return 0;var $=setTimeout(()=>{delete Nr[h],ki(()=>Zg(h,performance.timeOrigin+performance.now()))},g);return Nr[h]={id:$,Yd:g},0}function fv(h,g,$,_){h>>>=0,g>>>=0,$>>>=0,_>>>=0;var E=new Date().getFullYear(),C=new Date(E,0,1).getTimezoneOffset();E=new Date(E,6,1).getTimezoneOffset();var P=Math.max(C,E);(S(),H)[h>>>2>>>0]=60*P,(S(),O)[g>>>2>>>0]=+(C!=E),h=(g=K=>{var re=Math.abs(K);return`UTC${0<=K?"-":"+"}${String(Math.floor(re/60)).padStart(2,"0")}${String(re%60).padStart(2,"0")}`})(C),g=g(E),E<C?(fn(h,$,17),fn(g,_,17)):(fn(h,_,17),fn(g,$,17))}var mv=()=>Date.now();function gv(h,g,$){return $>>>=0,0<=h&&3>=h?(h===0?h=Date.now():h=performance.timeOrigin+performance.now(),h=Math.round(1e6*h),(S(),he)[$>>>3>>>0]=BigInt(h),0):28}var Ps=[],Pg=(h,g)=>{Ps.length=0;for(var $;$=(S(),U)[h++>>>0];){var _=$!=105;g+=(_&=$!=112)&&g%8?4:0,Ps.push($==112?(S(),H)[g>>>2>>>0]:$==106?(S(),he)[g>>>3>>>0]:$==105?(S(),O)[g>>>2>>>0]:(S(),J)[g>>>3>>>0]),g+=_?8:4}return Ps};function yv(h,g,$){return h>>>=0,g=Pg(g>>>0,$>>>0),Vs[h](...g)}function wv(h,g,$){return h>>>=0,g=Pg(g>>>0,$>>>0),Vs[h](...g)}var _v=()=>{};function bv(h,g){return I(j(h>>>0,g>>>0))}var xv=()=>{throw ze+=1,"unwind"};function $v(){return 4294901760}var vv=()=>navigator.hardwareConcurrency,Dn={},Ni=h=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(h))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(h))?2147483648|+g[1]:0},Dg=h=>{for(var g of h)(h=Ni(g))&&(Dn[h]=g)};function Sv(){var h=Error().stack.toString().split(`
`);return h[0]=="Error"&&h.shift(),Dg(h),Dn.gd=Ni(h[3]),Dn.Jd=h,Dn.gd}function zi(h){if(!(h=Dn[h>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(h))h=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(h))h=g[1];else{if(!(g=/^(.+?)@/.exec(h)))return 0;h=g[1]}Gt(zi.hd??0),g=Ti(h)+1;var $=zr(g);return $&&fn(h,$,g),zi.hd=$,zi.hd}function Mv(h){h>>>=0;var g=(S(),U).length;if(h<=g||4294901760<h)return!1;for(var $=1;4>=$;$*=2){var _=g*(1+.2/$);_=Math.min(_,h+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(h,_)/65536))-pt.buffer.byteLength+65535)/65536|0;try{pt.grow(_),B();var E=1;break e}catch{}E=void 0}if(E)return!0}return!1}function Iv(h,g,$){if(h>>>=0,g>>>=0,Dn.gd==h)var _=Dn.Jd;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),Dg(_);for(var E=3;_[E]&&Ni(_[E])!=h;)++E;for(h=0;h<$&&_[h+E];++h)(S(),O)[g+4*h>>>2>>>0]=Ni(_[h+E]);return h}var Ds,Us={},Ug=()=>{var _;if(!Ds){var h,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(h in Us)Us[h]===void 0?delete g[h]:g[h]=Us[h];var $=[];for(h in g)$.push(`${h}=${g[h]}`);Ds=$}return Ds};function Lg(h,g){if(i)return ge(19,1,h,g);h>>>=0,g>>>=0;var $,_=0,E=0;for($ of Ug()){var C=g+_;(S(),H)[h+E>>>2>>>0]=C,_+=fn($,C,1/0)+1,E+=4}return 0}function Fg(h,g){if(i)return ge(20,1,h,g);h>>>=0,g>>>=0;var $=Ug();for(var _ of((S(),H)[h>>>2>>>0]=$.length,h=0,$))h+=Ti(_)+1;return(S(),H)[g>>>2>>>0]=h,0}function Gg(h){return i?ge(21,1,h):52}function Wg(h,g,$,_){return i?ge(22,1,h,g,$,_):52}function qg(h,g,$,_){return i?ge(23,1,h,g,$,_):70}var Ev=[null,[],[]];function Vg(h,g,$,_){if(i)return ge(24,1,h,g,$,_);g>>>=0,$>>>=0,_>>>=0;for(var E=0,C=0;C<$;C++){var P=(S(),H)[g>>>2>>>0],K=(S(),H)[g+4>>>2>>>0];g+=8;for(var re=0;re<K;re++){var se=h,$e=(S(),U)[P+re>>>0],Ce=Ev[se];$e===0||$e===10?((se===1?v:I)(D(Ce)),Ce.length=0):Ce.push($e)}E+=K}return(S(),H)[_>>>2>>>0]=E,0}function Tv(h){return h>>>0}i||(function(){for(var h=t.numThreads-1;h--;)Jt();Me.push(async()=>{var g=(async function(){if(!i)return Promise.all(ct.map(On))})();Ne++,await g,--Ne==0&&Pe&&(g=Pe,Pe=null,g())})})(),i||(pt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),B()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>Se(),t.stackRestore=h=>ve(h),t.stackAlloc=h=>Gs(h),t.setValue=function(h,g,$="i8"){switch($.endsWith("*")&&($="*"),$){case"i1":case"i8":(S(),N)[h>>>0]=g;break;case"i16":(S(),V)[h>>>1>>>0]=g;break;case"i32":(S(),O)[h>>>2>>>0]=g;break;case"i64":(S(),he)[h>>>3>>>0]=BigInt(g);break;case"float":(S(),X)[h>>>2>>>0]=g;break;case"double":(S(),J)[h>>>3>>>0]=g;break;case"*":(S(),H)[h>>>2>>>0]=g;break;default:G(`invalid type for setValue: ${$}`)}},t.getValue=function(h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(S(),N)[h>>>0];case"i16":return(S(),V)[h>>>1>>>0];case"i32":return(S(),O)[h>>>2>>>0];case"i64":return(S(),he)[h>>>3>>>0];case"float":return(S(),X)[h>>>2>>>0];case"double":return(S(),J)[h>>>3>>>0];case"*":return(S(),H)[h>>>2>>>0];default:G(`invalid type for getValue: ${g}`)}},t.UTF8ToString=j,t.stringToUTF8=fn,t.lengthBytesUTF8=Ti;var Hg,jg,Bi,Gt,zr,Ls,Kg,Yg,Xg,Fs,Zg,Qg,Ie,Br,Jg,ve,Gs,Se,e0,Ws,t0,n0,r0,qs,i0,o0,a0,s0,u0,l0,c0,d0,h0,p0,f0,m0,g0,y0,w0,_0,b0,x0,$0,v0,S0,M0,I0,E0,T0,k0,C0,A0,R0,O0,N0,z0,B0,P0,D0,U0,L0,F0,G0,tn,kv=[lt,Zt,pn,Q,ne,ae,ue,Te,ke,ce,oe,le,me,be,Ge,Ue,Ng,zg,Bg,Lg,Fg,Gg,Wg,qg,Vg],Vs={1003524:(h,g,$,_,E)=>{if(t===void 0||!t.Xc)return 1;if((h=j(Number(h>>>0))).startsWith("./")&&(h=h.substring(2)),!(h=t.Xc.get(h)))return 2;if(g=Number(g>>>0),$=Number($>>>0),_=Number(_>>>0),g+$>h.byteLength)return 3;try{let C=h.subarray(g,g+$);switch(E){case 0:(S(),U).set(C,_>>>0);break;case 1:t.Qd?t.Qd(_,C):t.Id(_,C);break;default:return 4}return 0}catch{return 4}},1004348:(h,g,$)=>{t.td(h,(S(),U).subarray(g>>>0,g+$>>>0))},1004412:()=>t.Sd(),1004454:h=>{t.sd(h)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:h=>t.Ad(h),1004609:h=>t.Ed(h),1004641:(h,g,$)=>{t.ed(Number(h),Number(g),Number($),!0)},1004704:(h,g,$)=>{t.ed(Number(h),Number(g),Number($))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:h=>{t.$b("Abs",h,void 0)},1004869:h=>{t.$b("Neg",h,void 0)},1004920:h=>{t.$b("Floor",h,void 0)},1004973:h=>{t.$b("Ceil",h,void 0)},1005025:h=>{t.$b("Reciprocal",h,void 0)},1005083:h=>{t.$b("Sqrt",h,void 0)},1005135:h=>{t.$b("Exp",h,void 0)},1005186:h=>{t.$b("Erf",h,void 0)},1005237:h=>{t.$b("Sigmoid",h,void 0)},1005292:(h,g,$)=>{t.$b("HardSigmoid",h,{alpha:g,beta:$})},1005371:h=>{t.$b("Log",h,void 0)},1005422:h=>{t.$b("Sin",h,void 0)},1005473:h=>{t.$b("Cos",h,void 0)},1005524:h=>{t.$b("Tan",h,void 0)},1005575:h=>{t.$b("Asin",h,void 0)},1005627:h=>{t.$b("Acos",h,void 0)},1005679:h=>{t.$b("Atan",h,void 0)},1005731:h=>{t.$b("Sinh",h,void 0)},1005783:h=>{t.$b("Cosh",h,void 0)},1005835:h=>{t.$b("Asinh",h,void 0)},1005888:h=>{t.$b("Acosh",h,void 0)},1005941:h=>{t.$b("Atanh",h,void 0)},1005994:h=>{t.$b("Tanh",h,void 0)},1006046:h=>{t.$b("Not",h,void 0)},1006097:(h,g,$)=>{t.$b("Clip",h,{min:g,max:$})},1006166:h=>{t.$b("Clip",h,void 0)},1006218:(h,g)=>{t.$b("Elu",h,{alpha:g})},1006276:h=>{t.$b("Gelu",h,void 0)},1006328:h=>{t.$b("Relu",h,void 0)},1006380:(h,g)=>{t.$b("LeakyRelu",h,{alpha:g})},1006444:(h,g)=>{t.$b("ThresholdedRelu",h,{alpha:g})},1006514:(h,g)=>{t.$b("Cast",h,{to:g})},1006572:h=>{t.$b("Add",h,void 0)},1006623:h=>{t.$b("Sub",h,void 0)},1006674:h=>{t.$b("Mul",h,void 0)},1006725:h=>{t.$b("Div",h,void 0)},1006776:h=>{t.$b("Pow",h,void 0)},1006827:h=>{t.$b("Equal",h,void 0)},1006880:h=>{t.$b("Greater",h,void 0)},1006935:h=>{t.$b("GreaterOrEqual",h,void 0)},1006997:h=>{t.$b("Less",h,void 0)},1007049:h=>{t.$b("LessOrEqual",h,void 0)},1007108:(h,g,$,_,E)=>{t.$b("ReduceMean",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007283:(h,g,$,_,E)=>{t.$b("ReduceMax",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007457:(h,g,$,_,E)=>{t.$b("ReduceMin",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007631:(h,g,$,_,E)=>{t.$b("ReduceProd",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007806:(h,g,$,_,E)=>{t.$b("ReduceSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1007980:(h,g,$,_,E)=>{t.$b("ReduceL1",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008153:(h,g,$,_,E)=>{t.$b("ReduceL2",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008326:(h,g,$,_,E)=>{t.$b("ReduceLogSum",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008503:(h,g,$,_,E)=>{t.$b("ReduceSumSquare",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008683:(h,g,$,_,E)=>{t.$b("ReduceLogSumExp",h,{keepDims:!!g,noopWithEmptyAxes:!!$,axes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1008863:h=>{t.$b("Where",h,void 0)},1008916:(h,g,$)=>{t.$b("Transpose",h,{perm:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[]})},1009040:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:j($),format:_?"NHWC":"NCHW"})},1009173:(h,g,$,_)=>{t.$b("DepthToSpace",h,{blocksize:g,mode:j($),format:_?"NHWC":"NCHW"})},1009306:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe,gn)=>{t.$b("ConvTranspose",h,{format:re?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[C,P],strides:[K],wIsConst:()=>!!(S(),N)[se>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],outputShape:Le?Array.from((S(),O).subarray(Number(Le)>>>0,Number(qe)>>>0)):[],activation:j(gn)})},1009739:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe)=>{t.$b("ConvTranspose",h,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[re>>>0],outputPadding:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[],activation:j(qe)})},1010400:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe,gn)=>{t.$b("ConvTranspose",h,{format:re?"NHWC":"NCHW",autoPad:g,dilations:[$],group:_,kernelShape:[E],pads:[C,P],strides:[K],wIsConst:()=>!!(S(),N)[se>>>0],outputPadding:$e?Array.from((S(),O).subarray(Number($e)>>>0,Number(Ce)>>>0)):[],outputShape:Le?Array.from((S(),O).subarray(Number(Le)>>>0,Number(qe)>>>0)):[],activation:j(gn)})},1010833:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe)=>{t.$b("ConvTranspose",h,{format:K?"NHWC":"NCHW",autoPad:g,dilations:Array.from((S(),O).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),group:_,kernelShape:Array.from((S(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+2>>>0)),pads:Array.from((S(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+4>>>0)),strides:Array.from((S(),O).subarray(Number(P)>>>0,(Number(P)>>>0)+2>>>0)),wIsConst:()=>!!(S(),N)[re>>>0],outputPadding:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],outputShape:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[],activation:j(qe)})},1011494:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1011585:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe)=>{t.$b("AveragePool",h,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1012064:(h,g)=>{t.$b("GlobalAveragePool",h,{format:g?"NHWC":"NCHW"})},1012155:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe)=>{t.$b("AveragePool",h,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1012634:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1012721:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe)=>{t.$b("MaxPool",h,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1013196:(h,g)=>{t.$b("GlobalMaxPool",h,{format:g?"NHWC":"NCHW"})},1013283:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe)=>{t.$b("MaxPool",h,{format:qe?"NHWC":"NCHW",auto_pad:g,ceil_mode:$,count_include_pad:_,storage_order:E,dilations:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],kernel_shape:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],pads:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],strides:Ce?Array.from((S(),O).subarray(Number(Ce)>>>0,Number(Le)>>>0)):[]})},1013758:(h,g,$,_,E)=>{t.$b("Gemm",h,{alpha:g,beta:$,transA:_,transB:E})},1013862:h=>{t.$b("MatMul",h,void 0)},1013916:(h,g,$,_)=>{t.$b("ArgMax",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014024:(h,g,$,_)=>{t.$b("ArgMin",h,{keepDims:!!g,selectLastIndex:!!$,axis:_})},1014132:(h,g)=>{t.$b("Softmax",h,{axis:g})},1014195:(h,g)=>{t.$b("Concat",h,{axis:g})},1014255:(h,g,$,_,E)=>{t.$b("Split",h,{axis:g,numOutputs:$,splitSizes:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1014411:h=>{t.$b("Expand",h,void 0)},1014465:(h,g)=>{t.$b("Gather",h,{axis:Number(g)})},1014536:(h,g)=>{t.$b("GatherElements",h,{axis:Number(g)})},1014615:(h,g)=>{t.$b("GatherND",h,{batch_dims:Number(g)})},1014694:(h,g,$,_,E,C,P,K,re,se,$e)=>{t.$b("Resize",h,{antialias:g,axes:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],coordinateTransformMode:j(E),cubicCoeffA:C,excludeOutside:P,extrapolationValue:K,keepAspectRatioPolicy:j(re),mode:j(se),nearestMode:j($e)})},1015056:(h,g,$,_,E,C,P)=>{t.$b("Slice",h,{starts:g?Array.from((S(),O).subarray(Number(g)>>>0,Number($)>>>0)):[],ends:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[],axes:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[]})},1015320:h=>{t.$b("Tile",h,void 0)},1015372:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015486:(h,g,$)=>{t.$b("InstanceNormalization",h,{epsilon:g,format:$?"NHWC":"NCHW"})},1015600:h=>{t.$b("Range",h,void 0)},1015653:(h,g)=>{t.$b("Einsum",h,{equation:j(g)})},1015734:(h,g,$,_,E)=>{t.$b("Pad",h,{mode:g,value:$,pads:_?Array.from((S(),O).subarray(Number(_)>>>0,Number(E)>>>0)):[]})},1015877:(h,g,$,_,E,C)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016046:(h,g,$,_,E,C)=>{t.$b("BatchNormalization",h,{epsilon:g,momentum:$,spatial:!!E,trainingMode:!!_,format:C?"NHWC":"NCHW"})},1016215:(h,g,$)=>{t.$b("CumSum",h,{exclusive:Number(g),reverse:Number($)})},1016312:(h,g,$)=>{t.$b("DequantizeLinear",h,{axis:g,blockSize:$})},1016402:(h,g,$,_,E)=>{t.$b("GridSample",h,{align_corners:g,mode:j($),padding_mode:j(_),format:E?"NHWC":"NCHW"})},1016572:(h,g,$,_,E)=>{t.$b("GridSample",h,{align_corners:g,mode:j($),padding_mode:j(_),format:E?"NHWC":"NCHW"})},1016742:(h,g)=>{t.$b("ScatterND",h,{reduction:j(g)})},1016827:(h,g,$,_,E,C,P,K,re)=>{t.$b("Attention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:C,qkvHiddenSizes:P?Array.from((S(),O).subarray(Number(K)>>>0,Number(K)+P>>>0)):[],pastPresentShareBuffer:!!re})},1017099:h=>{t.$b("BiasAdd",h,void 0)},1017154:h=>{t.$b("BiasSplitGelu",h,void 0)},1017215:h=>{t.$b("FastGelu",h,void 0)},1017271:(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe,gn,Hs)=>{t.$b("Conv",h,{format:Ce?"NHWC":"NCHW",auto_pad:g,dilations:$?Array.from((S(),O).subarray(Number($)>>>0,Number(_)>>>0)):[],group:E,kernel_shape:C?Array.from((S(),O).subarray(Number(C)>>>0,Number(P)>>>0)):[],pads:K?Array.from((S(),O).subarray(Number(K)>>>0,Number(re)>>>0)):[],strides:se?Array.from((S(),O).subarray(Number(se)>>>0,Number($e)>>>0)):[],w_is_const:()=>!!(S(),N)[Number(Le)>>>0],activation:j(qe),activation_params:gn?Array.from((S(),X).subarray(Number(gn)>>>0,Number(Hs)>>>0)):[]})},1017855:h=>{t.$b("Gelu",h,void 0)},1017907:(h,g,$,_,E,C,P,K,re)=>{t.$b("GroupQueryAttention",h,{numHeads:g,kvNumHeads:$,scale:_,softcap:E,doRotary:C,rotaryInterleaved:P,smoothSoftmax:K,localWindowSize:re})},1018124:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018235:(h,g,$,_)=>{t.$b("LayerNormalization",h,{axis:g,epsilon:$,simplified:!!_})},1018346:(h,g,$,_,E,C)=>{t.$b("MatMulNBits",h,{k:g,n:$,accuracyLevel:_,bits:E,blockSize:C})},1018473:(h,g,$,_,E,C)=>{t.$b("MultiHeadAttention",h,{numHeads:g,isUnidirectional:$,maskFilterValue:_,scale:E,doRotary:C})},1018632:(h,g)=>{t.$b("QuickGelu",h,{alpha:g})},1018696:(h,g,$,_,E)=>{t.$b("RotaryEmbedding",h,{interleaved:!!g,numHeads:$,rotaryEmbeddingDim:_,scale:E})},1018835:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1018937:(h,g,$)=>{t.$b("SkipLayerNormalization",h,{epsilon:g,simplified:!!$})},1019039:(h,g,$,_)=>{t.$b("GatherBlockQuantized",h,{gatherAxis:g,quantizeAxis:$,blockSize:_})},1019160:h=>{t.Fd(h)},1019194:(h,g)=>t.Hd(Number(h),Number(g),t.Yc.Kd,t.Yc.errors)};function Cv(h,g,$){return kg(async()=>{await t.Dd(Number(h),Number(g),Number($))})}function Av(){return typeof wasmOffsetConverter<"u"}function Rv(h,g,$,_){var E=Se();try{return d0(h,g,$,_)}catch(C){if(ve(E),C!==C+0)throw C;Ie(1,0)}}function Ov(h,g,$){var _=Se();try{return s0(h,g,$)}catch(E){if(ve(_),E!==E+0)throw E;Ie(1,0)}}function Nv(h){var g=Se();try{i0(h)}catch($){if(ve(g),$!==$+0)throw $;Ie(1,0)}}function zv(h,g){var $=Se();try{return qs(h,g)}catch(_){if(ve($),_!==_+0)throw _;Ie(1,0)}}function Bv(h,g,$){var _=Se();try{r0(h,g,$)}catch(E){if(ve(_),E!==E+0)throw E;Ie(1,0)}}function Pv(h,g){var $=Se();try{h0(h,g)}catch(_){if(ve($),_!==_+0)throw _;Ie(1,0)}}function Dv(h,g,$,_,E,C,P){var K=Se();try{return l0(h,g,$,_,E,C,P)}catch(re){if(ve(K),re!==re+0)throw re;Ie(1,0)}}function Uv(h,g,$,_,E,C){var P=Se();try{o0(h,g,$,_,E,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function Lv(h,g,$,_){var E=Se();try{c0(h,g,$,_)}catch(C){if(ve(E),C!==C+0)throw C;Ie(1,0)}}function Fv(h,g,$,_,E){var C=Se();try{a0(h,g,$,_,E)}catch(P){if(ve(C),P!==P+0)throw P;Ie(1,0)}}function Gv(h,g,$,_,E,C,P){var K=Se();try{f0(h,g,$,_,E,C,P)}catch(re){if(ve(K),re!==re+0)throw re;Ie(1,0)}}function Wv(h,g,$,_,E,C,P){var K=Se();try{m0(h,g,$,_,E,C,P)}catch(re){if(ve(K),re!==re+0)throw re;Ie(1,0)}}function qv(h,g,$,_,E,C,P,K){var re=Se();try{_0(h,g,$,_,E,C,P,K)}catch(se){if(ve(re),se!==se+0)throw se;Ie(1,0)}}function Vv(h,g,$,_,E){var C=Se();try{return p0(h,g,$,_,E)}catch(P){if(ve(C),P!==P+0)throw P;Ie(1,0)}}function Hv(h,g,$){var _=Se();try{return b0(h,g,$)}catch(E){if(ve(_),E!==E+0)throw E;Ie(1,0)}}function jv(h,g,$,_,E,C,P,K){var re=Se();try{x0(h,g,$,_,E,C,P,K)}catch(se){if(ve(re),se!==se+0)throw se;Ie(1,0)}}function Kv(h,g,$,_,E,C,P,K,re,se,$e,Ce){var Le=Se();try{g0(h,g,$,_,E,C,P,K,re,se,$e,Ce)}catch(qe){if(ve(Le),qe!==qe+0)throw qe;Ie(1,0)}}function Yv(h,g,$,_,E,C){var P=Se();try{return y0(h,g,$,_,E,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function Xv(h,g,$){var _=Se();try{return $0(h,g,$)}catch(E){if(ve(_),E!==E+0)throw E;return Ie(1,0),0n}}function Zv(h,g,$,_,E,C,P,K,re){var se=Se();try{u0(h,g,$,_,E,C,P,K,re)}catch($e){if(ve(se),$e!==$e+0)throw $e;Ie(1,0)}}function Qv(h){var g=Se();try{return v0(h)}catch($){if(ve(g),$!==$+0)throw $;Ie(1,0)}}function Jv(h,g){var $=Se();try{return D0(h,g)}catch(_){if(ve($),_!==_+0)throw _;return Ie(1,0),0n}}function e3(h){var g=Se();try{return S0(h)}catch($){if(ve(g),$!==$+0)throw $;return Ie(1,0),0n}}function t3(h,g,$,_){var E=Se();try{return C0(h,g,$,_)}catch(C){if(ve(E),C!==C+0)throw C;Ie(1,0)}}function n3(h,g,$,_,E){var C=Se();try{return A0(h,g,$,_,E)}catch(P){if(ve(C),P!==P+0)throw P;Ie(1,0)}}function r3(h,g,$,_,E,C){var P=Se();try{return R0(h,g,$,_,E,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function i3(h,g,$,_,E,C){var P=Se();try{return O0(h,g,$,_,E,C)}catch(K){if(ve(P),K!==K+0)throw K;Ie(1,0)}}function o3(h,g,$,_,E,C,P,K){var re=Se();try{return w0(h,g,$,_,E,C,P,K)}catch(se){if(ve(re),se!==se+0)throw se;Ie(1,0)}}function a3(h,g,$,_,E){var C=Se();try{return N0(h,g,$,_,E)}catch(P){if(ve(C),P!==P+0)throw P;return Ie(1,0),0n}}function s3(h,g,$,_){var E=Se();try{return z0(h,g,$,_)}catch(C){if(ve(E),C!==C+0)throw C;Ie(1,0)}}function u3(h,g,$,_){var E=Se();try{return B0(h,g,$,_)}catch(C){if(ve(E),C!==C+0)throw C;Ie(1,0)}}function l3(h,g,$,_,E,C,P,K,re,se,$e,Ce){var Le=Se();try{return P0(h,g,$,_,E,C,P,K,re,se,$e,Ce)}catch(qe){if(ve(Le),qe!==qe+0)throw qe;Ie(1,0)}}function c3(h,g,$,_,E,C,P,K,re,se,$e){var Ce=Se();try{T0(h,g,$,_,E,C,P,K,re,se,$e)}catch(Le){if(ve(Ce),Le!==Le+0)throw Le;Ie(1,0)}}function d3(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe,gn,Hs){var m3=Se();try{k0(h,g,$,_,E,C,P,K,re,se,$e,Ce,Le,qe,gn,Hs)}catch(js){if(ve(m3),js!==js+0)throw js;Ie(1,0)}}function h3(h,g,$){var _=Se();try{return M0(h,g,$)}catch(E){if(ve(_),E!==E+0)throw E;Ie(1,0)}}function p3(h,g,$){var _=Se();try{return I0(h,g,$)}catch(E){if(ve(_),E!==E+0)throw E;Ie(1,0)}}function f3(h,g,$,_){var E=Se();try{E0(h,g,$,_)}catch(C){if(ve(E),C!==C+0)throw C;Ie(1,0)}}function Pi(){if(0<Ne)Pe=Pi;else if(i)y==null||y(t),L();else{for(var h=Me;0<h.length;)h.shift()(t);0<Ne?Pe=Pi:(t.calledRun=!0,T||(L(),y==null||y(t)))}}return i||(tn=await ie(),Pi()),t.PTR_SIZE=4,R?t:new Promise((h,g)=>{y=h,w=g})}var gu,yu,hy=ee(()=>{var e,t;gu=mu,yu=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),yu&&mu()}),Hi,ji,wu,mt,_u,Lr,bu,xu,Ki,$u,Yi,vu,Xi,Su,Zi=ee(()=>{Wi(),Hi=typeof location>"u"?void 0:location.origin,ji=self.location.href>"file:"&&self.location.href<"file;",wu=()=>{{if(ji){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Hi).href}return self.location.href}},mt=wu(),_u=()=>{if(mt&&!mt.startsWith("blob:"))return mt.substring(0,mt.lastIndexOf("/")+1)},Lr=(e,t)=>{try{let n=t??mt;return(n?new URL(e,n):new URL(e)).origin===Hi}catch{return!1}},bu=(e,t)=>{let n=t??mt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},xu=(e,t)=>`${t??"./"}${e}`,Ki=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$u=async e=>(await import(e)).default,Yi=(dy(),or(hu)).default,vu=async()=>{if(!mt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Lr(mt))return[void 0,Yi()];let e=await Ki(mt);return[e,Yi(e)]},Xi=(hy(),or(fu)).default,Su=async(e,t,n,r)=>{let i=Xi&&!(e||t);if(i)if(mt)i=Lr(mt)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Xi];{let o="ort-wasm-simd-threaded.jsep.mjs",a=e??bu(o,t),s=n&&a&&!Lr(a,t),u=s?await Ki(a):a??xu(o,t);return[s?u:void 0,await $u(u)]}}}),Qi,Fr,ur,Ji,Mu,Iu,Eu,eo,Fe,bn=ee(()=>{Zi(),Fr=!1,ur=!1,Ji=!1,Mu=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Iu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Eu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},eo=async e=>{if(Fr)return Promise.resolve();if(ur)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ji)throw new Error("previous call to 'initializeWebAssembly()' failed.");ur=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Eu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Iu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Mu();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,o=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,s=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[c,p]=await Su(s,o,n>1,!!d||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,w)=>{let b={numThreads:n};if(d)b.wasmBinary=d,b.locateFile=x=>x;else if(l||o)b.locateFile=x=>l??o+x;else if(s&&s.indexOf("blob:")!==0)b.locateFile=x=>new URL(x,s).href;else if(c){let x=_u();x&&(b.locateFile=M=>x+M)}p(b).then(x=>{ur=!1,Fr=!0,Qi=x,y(),c&&URL.revokeObjectURL(c)},x=>{ur=!1,Ji=!0,w(x)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Fe=()=>{if(Fr&&Qi)return Qi;throw new Error("WebAssembly is not initialized yet.")}}),St,Gr,Oe,to=ee(()=>{bn(),St=(e,t)=>{let n=Fe(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Gr=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,o])=>{let a=t?t+i:i;if(typeof o=="object")Gr(o,a+".",n,r);else if(typeof o=="string"||typeof o=="number")r(a,o.toString());else if(typeof o=="boolean")r(a,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Oe=e=>{let t=Fe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let o=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),s=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(n)}}}),Tu,py=ee(()=>{bn(),to(),Tu=e=>{let t=Fe(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=St(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),n===0&&Oe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Gr(e.extra,"",new WeakSet,(a,s)=>{let u=St(a,r),l=St(s,r);t._OrtAddRunConfigEntry(n,u,l)!==0&&Oe(`Can't set a run config entry: ${a} - ${s}.`)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),o}}}),ku,Cu,Au,xn,Ru,Ou,fy=ee(()=>{bn(),to(),ku=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Cu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Au=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},xn=(e,t,n,r)=>{let i=St(t,r),o=St(n,r);Fe()._OrtAddSessionConfigEntry(e,i,o)!==0&&Oe(`Can't set a session config entry: ${t} - ${n}.`)},Ru=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let o=typeof i=="string"?i:i.name,a=[];switch(o){case"webnn":if(o="WEBNN",xn(e,"session.disable_quant_qdq","1",n),xn(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&xn(e,"deviceType",c,n)}break;case"webgpu":if(o="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);xn(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let s=St(o,n),u=a.length,l=0,d=0;if(u>0){l=Fe()._malloc(u*Fe().PTR_SIZE),n.push(l),d=Fe()._malloc(u*Fe().PTR_SIZE),n.push(d);for(let c=0;c<u;c++)Fe().setValue(l+c*Fe().PTR_SIZE,a[c][0],"*"),Fe().setValue(d+c*Fe().PTR_SIZE,a[c][1],"*")}await Fe()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&Oe(`Can't append execution provider: ${o}.`)}},Ou=async e=>{let t=Fe(),n=0,r=[],i=e||{};Au(i);try{let o=ku(i.graphOptimizationLevel??"all"),a=Cu(i.executionMode??"sequential"),s=typeof i.logId=="string"?St(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=i.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof i.optimizedModelFilePath=="string"?St(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,s,u,l,d),n===0&&Oe("Can't create session options."),i.executionProviders&&await Ru(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);xn(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,p]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof p!="number"||!Number.isInteger(p)||p<0)throw new Error(`free dimension override value must be a non-negative integer: ${p}`);let f=St(c,r);t._OrtAddFreeDimensionOverride(n,f,p)!==0&&Oe(`Can't set a free dimension override: ${c} - ${p}.`)}return i.extra!==void 0&&Gr(i.extra,"",new WeakSet,(c,p)=>{xn(n,c,p,r)}),[n,r]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oe("Can't release session options."),r.forEach(a=>t._free(a)),o}}}),$n,Vt,vn,Wr,qr,no,ro,io,we=ee(()=>{$n=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Vt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},vn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,o)=>i*o,1);return n>0?Math.ceil(r*n):void 0},Wr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},no=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ro=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",io=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),oo,Nu=ee(()=>{Wi(),oo=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(s){if(s instanceof RangeError){let u=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw s}let a=0;for(;;){let{done:s,value:u}=await i.read();if(s)break;let l=u.byteLength;new Uint8Array(o,a,l).set(u),a+=l}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),zu,Bu,Pu,Du,ao,Uu,Ee,Ht=ee(()=>{we(),zu=["V","I","W","E","F"],Bu=(e,t)=>{console.log(`[${zu[e]},${new Date().toISOString()}]${t}`)},ao=(e,t)=>{Pu=e,Du=t},Uu=(e,t)=>{let n=qr(e),r=qr(Pu);n>=r&&Bu(n,typeof t=="function"?t():t)},Ee=(...e)=>{Du&&Uu(...e)}}),Lu,Wn,q,Vr,Fu,Gu,Wu,_e=ee(()=>{Lu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Wn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let o=Math.max(e.length,t.length),a=new Array(o);if(n){if(r<2||i<2)return;let s=Lu.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(s===void 0)return;[a[o-2],a[o-1]]=s}for(let s=n?3:1;s<=o;s++){let u=r-s<0?1:e[r-s],l=i-s<0?1:t[i-s];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)a[o-s]=Math.max(u,l);else{if(d>1)return;a[o-s]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class Di{static size(t){return Di.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),o=r-1;for(;o>=0;){if(t[o]%n===0){i[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");i[o]=1,n/=t[o],o--}for(o--;o>=0;o--)i[o]=t[o];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Di.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Di.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let o=n;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[o])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,o)=>i+n[o]+n[o+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Vr=class Pr{static adjustPoolAttributes(t,n,r,i,o,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let s=0;s<n.length-2;s++)s>=r.length?r.push(n[s+2]):r[s]=n[s+2];for(let s=0;s<r.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<r.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<r.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<r.length;s++){if(r[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=r[s]||a[s+r.length]>=r[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,o,a,s){if(s){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Pr.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],o,u,u+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,o,a,s){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Pr.computeShapeHelper(t,n,u,r,i,o,a,s),u}static computeConvOutputShape(t,n,r,i,o,a,s){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Pr.computeShapeHelper(!1,t,u,r,i,o,a,s),u}static computeShapeHelper(t,n,r,i,o,a,s,u){if(t)for(let l=0;l<n.length-2;l++)r.push(1);else for(let l=0;l<n.length-2;l++)r.push(Pr.adjustPadAndReturnShape(n[l+2],i[l],o[l],a[l],s,l,l+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,o,a,s,u){let l=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return o[a]=0,o[s]=0,Math.floor((t-l)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+n-1)/n-1)*n+i-t;return o[a]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),o[s]=d-o[a],Math.floor((t+d-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[a]+o[s]-l)/n+1)}},Fu=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,a,s;t?(o=e[1],a=e[0]):(o=e[0],a=e[1]);let u=-1;if(r?(s=n[0],u=1):(s=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(o<=0||s<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Wn.isValidBroadcast(i,[o,s]))throw new Error("gemm: invalid bias shape for broadcast");return[o,s,a]}},Gu=-34028234663852886e22,Wu=34028234663852886e22}),so,qu=ee(()=>{we(),so=(e,t)=>new(Wr(t))(e)}),uo,lo,co,Vu,ho,Hu,po,fo,mo,ju,Ku,my=ee(()=>{we(),Ht(),uo=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),lo=(e,t)=>{if(t==="int32")return e;let n=uo.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,o=new(Wr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let s=0;s<i;s++){let u=o[s];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[s]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(o,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},co=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Vu=1,ho=()=>Vu++,Hu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),po=(e,t)=>{let n=uo.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},fo=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:o,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=o,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return po(this.dataType,this.tensorShape)}destroy(){Ee("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=co(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},mo=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),o=this.tensorManager.getMLOpSupportLimits(e),a;if(!(o!=null&&o.input.dataTypes.includes(t))){if(a=Hu.get(t),!a||(o==null?void 0:o.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);Ee("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==po(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=lo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ee("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?co(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ju=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ho();return this.tensorTrackersById.set(e,new mo(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),o=ho(),a=new fo({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(o,new mo(this,a)),this.externalTensors.add(a),o}async getCachedTensor(e,t,n,r,i,o,a){let s=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(s,t,n)){Ee("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=e,c}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await s.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:o});return new fo({sessionId:e,context:s,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ku=(...e)=>new ju(...e)}),lr,Yu,Xu,gy=ee(()=>{we(),bn(),qu(),my(),Ht(),lr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Yu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,o)=>i===r[o]&&e[i]===t[i])},Xu=class{constructor(e){this.tensorManager=Ku(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ao(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ee("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ee("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ee("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Yu(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let o=lr.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,i)}async createTemporaryTensor(e,t,n){Ee("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=lr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Fe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return so(n,t)}}registerMLTensor(e,t,n,r){let i=lr.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,i,r);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,r,i,o,a=!1){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let u=o.get(s);if(!u)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+n).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(a){let c=lo(new Uint8Array(l),"int64");d=new Int32Array(c.buffer),i.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ee("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=lr.get($n(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),go=ee(()=>{}),yo,Hr,jr,Zu,Qu,wo,_o,Ju,el,yy=ee(()=>{Ht(),go(),yo=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Hr=[],jr=e=>Math.ceil(Number(e)/16)*16,Zu=e=>{for(let t=0;t<Hr.length;t++){let n=Hr[t];if(e<=n)return n}return Math.ceil(e/16)*16},Qu=1,wo=()=>Qu++,_o=async(e,t,n,r)=>{let i=jr(n),o=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,o,0,i),e.flush(),await o.mapAsync(GPUMapMode.READ);let s=o.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(s,0,n)),u}else return new Uint8Array(s.slice(0,n))}finally{o.destroy()}},Ju=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of yo)Hr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,o=jr(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=s.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,a.gpuData.buffer,0,o),this.backend.device.queue.submit([l.finish()]),s.destroy(),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=jr(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=wo();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Zu(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||o){let s=(i?this.freeBuffers:this.freeUniformBuffers).get(n);s?s.length>0?r=s.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:wo(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await _o(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=yo.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ee("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},el=(...e)=>new Ju(...e)}),tl,Re,je=ee(()=>{tl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Re=e=>new tl(e)}),qn,Kr,Ze,rt,fe,He,bo,Vn,rn,pe,cr,Y,de,nl,xo,rl,il,xe=ee(()=>{we(),_e(),qn=64,Kr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ze=(e,t=1)=>{let n=Kr(e,t);return typeof n=="string"?n:n[0]},rt=(e,t=1)=>{let n=Kr(e,t);return typeof n=="string"?n:n[1]},fe=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:q.computeStrides(n)})}),t},He=e=>e%4===0?4:e%2===0?2:1,bo=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Vn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,rn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,cr=(e,t,n,r,i)=>{let o=typeof n=="number",a=o?n:n.length,s=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,l=Kr(t,i),d=typeof l=="string"?l:l[1],c=typeof l=="string"?l:l[0],p={indices:u,value:d,storage:c,tensor:t},f=R=>typeof R=="string"?R:`${R}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=o?"uniforms.":"",w=`${y}${e}_shape`,b=`${y}${e}_strides`,x="";for(let R=0;R<a-1;R++)x+=`
    let dim${R} = current / ${pe(b,R,a)};
    let rest${R} = current % ${pe(b,R,a)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;x+=`indices[${a-1}] = current;`;let M=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${p.indices} {
    var indices: ${p.indices};
    var current = offset;
    ${x}
    return indices;
  }`,v=R=>(m.offsetToIndices=!0,a<2?R:`o2i_${e}(${R})`),I=[];if(a>=2)for(let R=a-1;R>=0;R--)I.push(`${pe(b,R,a)} * (indices[${R}])`);let T=a<2?"":`
  fn i2o_${e}(indices: ${p.indices}) -> u32 {
    return ${I.join("+")};
  }`,k=R=>(m.indicesToOffset=!0,a<2?R:`i2o_${e}(${R})`),S=(...R)=>a===0?"0u":`${p.indices}(${R.map(f).join(",")})`,A=(R,B)=>a<2?`${R}`:`${pe(R,B,a)}`,N=(R,B,L)=>a<2?`${R}=${L};`:`${pe(R,B,a)}=${L};`,U={},V=(R,B)=>{m.broadcastedIndicesToOffset=!0;let L=`${B.name}broadcastedIndicesTo${e}Offset`;if(L in U)return`${L}(${R})`;let G=[];for(let Z=a-1;Z>=0;Z--){let ie=B.indicesGet("outputIndices",Z+B.rank-a);G.push(`${A(b,Z)} * (${ie} % ${A(w,Z)})`)}return U[L]=`fn ${L}(outputIndices: ${B.type.indices}) -> u32 {
             return ${G.length>0?G.join("+"):"0u"};
           }`,`${L}(${R})`},F=(R,B)=>(()=>{if(p.storage===p.value)return`${e}[${R}]=${B};`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${B}), select(0u, 0xFFFFFFFFu, ${B} < 0));`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${B}), 0u);`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${B}));`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),O=R=>(()=>{if(p.storage===p.value)return`${e}[${R}]`;if(p.storage==="vec2<u32>"&&p.value==="i32")return`i32(${e}[${R}].x)`;if(p.storage==="vec2<u32>"&&p.value==="u32")return`u32(${e}[${R}].x)`;if(p.storage==="u32"&&p.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${p.storage} and value type ${p.value} yet`)})(),H=a<2?"":`
  fn get_${e}ByIndices(indices: ${p.indices}) -> ${d} {
    return ${O(`i2o_${e}(indices)`)};
  }`,X=a<2?"":(()=>{let R=s.map(L=>`d${L}: u32`).join(", "),B=s.map(L=>`d${L}`).join(", ");return`
  fn get_${e}(${R}) -> ${d} {
    return get_${e}ByIndices(${S(B)});
  }`})(),J=(...R)=>{if(R.length!==a)throw new Error(`indices length must be ${a}`);let B=R.map(f).join(",");return a===0?O("0u"):a===1?O(B[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${B})`)},he=R=>a<2?O(R):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${R})`),W=a<2?"":`
  fn set_${e}ByIndices(indices: ${p.indices}, value: ${d}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,z=a<2?"":(()=>{let R=s.map(L=>`d${L}: u32`).join(", "),B=s.map(L=>`d${L}`).join(", ");return`
  fn set_${e}(${R}, value: ${d}) {
    set_${e}ByIndices(${S(B)}, value);
  }`})();return{impl:()=>{let R=[],B=!1;return m.offsetToIndices&&(R.push(M),B=!0),m.indicesToOffset&&(R.push(T),B=!0),m.broadcastedIndicesToOffset&&(Object.values(U).forEach(L=>R.push(L)),B=!0),m.set&&(R.push(z),B=!0),m.setByIndices&&(R.push(W),B=!0),m.get&&(R.push(X),B=!0),m.getByIndices&&(R.push(H),B=!0),!o&&B&&R.unshift(`const ${w} = ${p.indices}(${n.join(",")});`,`const ${b} = ${p.indices}(${q.computeStrides(n).join(",")});`),R.join(`
`)},type:p,offsetToIndices:v,indicesToOffset:k,broadcastedIndicesToOffset:V,indices:S,indicesGet:A,indicesSet:N,set:(...R)=>{if(R.length!==a+1)throw new Error(`indices length must be ${a}`);let B=R[a];if(typeof B!="string")throw new Error("value must be string");let L=R.slice(0,a).map(f).join(",");return a===0?F("0u",B):a===1?F(L[0],B):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${L}, ${B})`)},setByOffset:F,setByIndices:(R,B)=>a<2?F(R,B):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${B});`),get:J,getByOffset:O,getByIndices:he,usage:r,name:e,strides:b,shape:w,rank:a}},Y=(e,t,n,r=1)=>cr(e,t,n,"input",r),de=(e,t,n,r=1)=>cr(e,t,n,"output",r),nl=(e,t,n)=>cr(e,t,n,"atomicOutput",1),xo=(e,t,n,r=1)=>cr(e,t,n,"internal",r),rl=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=qn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},il=(e,t)=>new rl(e,t)}),ol,$o,al,sl,ul,ll,gt,cl,dl,on=ee(()=>{we(),_e(),je(),xe(),ol=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},$o=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),al=(e,t)=>q.sortBasedOnPerm(e,$o(e.length,t)),sl=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)i+=`a[${e[o]}]=i[${o}];`;return i+="return a;}"},ul=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},ll=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},gt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=$o(r,t),o=al(e.dims,i),a=e.dims,s=o,u=r<2||ll(i,e.dims),l;if(u)return l=m=>{let y=Y("input",n,a,4),w=de("output",n,s,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=q.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:c}=ul(e.dims,i),p=q.areEqual(c,[2,3,1]),f=q.areEqual(c,[3,1,2]);if(d.length===2||p||f){a=p?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,s=[a[1],a[0]];let m=16;return l=y=>{let w=Y("a",n,a.length),b=de("output",n,s.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/m),y:Math.ceil(s[0]/m)},programUniforms:[{type:12,data:y},...fe(a,s)]}},getShaderSource:l}}return l=m=>{let y=Y("a",n,a.length),w=de("output",n,s.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,w)}

  ${sl(i,r,y,w)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=q.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(a,s)]}},getShaderSource:l}},cl=(e,t)=>{ol(e.inputs,t.perm),e.compute(gt(e.inputs[0],t.perm))},dl=e=>Re({perm:e.perm})}),hl,pl,fl,ml,gl,yl,wl,_l,bl,xl,Mt,$l,vl,Sl,Ml,Il,El,Tl,kl,Cl,Al,wy=ee(()=>{we(),_e(),xe(),So(),on(),hl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},pl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},fl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ml={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},gl=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},yl=(e,t)=>{let n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);let i=t.map(o=>e[o]);return[n,i]},wl=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(e[i++]):r.push(1);return r},_l=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},bl=(e,t)=>{let n=[];if(!_l(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},xl=(e,t,n,r,i,o,a)=>{let s=n[0].dims,u=q.size(o),l=q.size(a),d=Y("_A",n[0].dataType,s),c=de("output",i,o),p=64;u===1&&(p=256);let f=`
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

          var bestValue = f32(${fl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${p}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${hl[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${p}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${pl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${ml[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${p}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},Mt=(e,t,n,r)=>{let i=e.inputs.length===1?n:vo(e.inputs,n),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((f,m)=>m));let a=q.normalizeAxes(o,e.inputs[0].dims.length),s=a,u=e.inputs[0],l=bl(s,e.inputs[0].dims.length);l.length>0&&(u=e.compute(gt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=gl(s.length,u.dims.length));let[d,c]=yl(u.dims,s),p=d;i.keepDims&&(p=wl(d,a)),e.compute(xl(t,i.cacheKey,[u],r,e.inputs[0].dataType,p,c),{inputs:[u]})},$l=(e,t)=>{Mt(e,"ReduceMeanShared",t,"mean")},vl=(e,t)=>{Mt(e,"ReduceL1Shared",t,"l1")},Sl=(e,t)=>{Mt(e,"ReduceL2Shared",t,"l2")},Ml=(e,t)=>{Mt(e,"ReduceLogSumExpShared",t,"logSumExp")},Il=(e,t)=>{Mt(e,"ReduceMaxShared",t,"max")},El=(e,t)=>{Mt(e,"ReduceMinShared",t,"min")},Tl=(e,t)=>{Mt(e,"ReduceProdShared",t,"prod")},kl=(e,t)=>{Mt(e,"ReduceSumShared",t,"sum")},Cl=(e,t)=>{Mt(e,"ReduceSumSquareShared",t,"sumSquare")},Al=(e,t)=>{Mt(e,"ReduceLogSumShared",t,"logSum")}}),It,Rl,Yr,vo,Et,Ol,Nl,zl,Bl,Pl,Dl,Ul,Ll,Fl,Gl,Tt,Wl,ql,Vl,Hl,jl,Kl,Yl,Xl,Zl,Ql,So=ee(()=>{we(),_e(),je(),xe(),wy(),It=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Rl=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Yr=(e,t,n,r,i,o,a=!1,s=!1)=>{let u=[],l=n[0].dims,d=l.length,c=q.normalizeAxes(i,d),p=!s&&c.length===0;l.forEach((y,w)=>{p||c.indexOf(w)>=0?a&&u.push(1):u.push(y)});let f=u.length,m=q.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],b=Y("_A",n[0].dataType,d),x=de("output",o,f),M=r(b,x,c),v=M[2];for(let I=0,T=0;I<d;I++)p||c.indexOf(I)>=0?(a&&T++,v=`for(var j${I}: u32 = 0; j${I} < ${l[I]}; j${I}++) {
                  ${M[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${b.indicesSet("input_indices",I,`j${I}`)}
                  ${v}
                }`):(w.push(`${b.indicesSet("input_indices",I,x.indicesGet("output_indices",T))};`),T++);return`

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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...fe(l,u)]})}},vo=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Re({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Et=(e,t,n,r)=>{let i=e.inputs,o=i.length===1?n:vo(i,n);e.compute(Yr(t,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?Rl:r,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},Ol=(e,t)=>{It(e.inputs),Et(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Nl=(e,t)=>{It(e.inputs),Et(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},zl=(e,t)=>{It(e.inputs),Et(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Bl=(e,t)=>{It(e.inputs),Et(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},Pl=(e,t)=>{It(e.inputs),Et(e,"ReduceMax",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(n.indicesSet("input_indices",a,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Dl=(e,t)=>{It(e.inputs),Et(e,"ReduceMean",t,(n,r,i)=>{let o=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(o*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},Ul=(e,t)=>{It(e.inputs),Et(e,"ReduceMin",t,(n,r,i)=>{let o=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&o.push(`input_indices[${a}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Ll=(e,t)=>{It(e.inputs),Et(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Fl=(e,t)=>{It(e.inputs),Et(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Gl=(e,t)=>{It(e.inputs),Et(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Tt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:i*=e[o];return i<32&&r>1024},Wl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dl(e,t):$l(e,t)},ql=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nl(e,t):vl(e,t)},Vl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zl(e,t):Sl(e,t)},Hl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bl(e,t):Ml(e,t)},jl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pl(e,t):Il(e,t)},Kl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ul(e,t):El(e,t)},Yl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ll(e,t):Tl(e,t)},Xl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fl(e,t):kl(e,t)},Zl=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gl(e,t):Cl(e,t)},Ql=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ol(e,t):Al(e,t)}}),Mo,Jl,ec,Io,_y=ee(()=>{we(),je(),So(),Mo=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Jl=(e,t)=>{Mo(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Yr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ec=(e,t)=>{Mo(e.inputs);let n=(r,i,o)=>{let a=[];for(let s=0;s<r.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Yr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Io=e=>Re(e)}),tc,Xr,nc,rc,ic,dr,oc,ac,Eo=ee(()=>{we(),_e(),go(),xe(),tc=(e,t)=>{let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5];if(a&&s)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],l=n.dims[1],d=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,p=c,f=p;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let M of t.qkvHiddenSizes)if(M%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],p=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(c!==p)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+p+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(p!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==p/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let w=m+y,b=-1,x=0;if(o)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:d,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Xr=(e,t,n)=>t&&e?`
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
    `,nc=(e,t,n,r,i,o,a,s)=>{let u=He(a?1:o),l=64,d=o/u;d<l&&(l=32);let c=Math.ceil(o/u/l),p=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:d},{type:12,data:c}],f=Ze(e.dataType,u),m=rt(1,u),y=["type"];a&&y.push("type"),s&&y.push("type");let w=b=>{let x=de("x",e.dataType,e.dims,u),M=[x],v=a?Y("seq_lens",a.dataType,a.dims):void 0;v&&M.push(v);let I=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;I&&M.push(I);let T=rt(e.dataType),k=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(k).declareVariables(...M)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Xr(v,I,!1)}
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
        x[offset + i] = ${x.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:p})}},rc=(e,t,n,r,i,o,a,s,u)=>{let l=a+o.kvSequenceLength,d=[o.batchSize,o.numHeads,o.sequenceLength,l],c=e>1&&r,p=o.kvNumHeads?o.kvNumHeads:o.numHeads,f=c?[o.batchSize,p,l,o.headSize]:void 0,m=o.nReps?o.nReps:1,y=o.scale===0?1/Math.sqrt(o.headSize):o.scale,w=He(o.headSize),b=o.headSize/w,x=12,M={x:Math.ceil(l/x),y:Math.ceil(o.sequenceLength/x),z:o.batchSize*o.numHeads},v=[{type:12,data:o.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:o.kvSequenceLength},{type:12,data:m}],I=c&&r&&q.size(r.dims)>0,T=["type","type"];I&&T.push("type"),i&&T.push("type"),s&&T.push("type"),u&&T.push("type");let k=[{dims:d,dataType:t.dataType,gpuDataType:0}];c&&k.push({dims:f,dataType:t.dataType,gpuDataType:0});let S=A=>{let N=Y("q",t.dataType,t.dims,w),U=Y("key",n.dataType,n.dims,w),V=[N,U];if(I){let W=Y("past_key",r.dataType,r.dims,w);V.push(W)}i&&V.push(Y("attention_bias",i.dataType,i.dims));let F=s?Y("seq_lens",s.dataType,s.dims):void 0;F&&V.push(F);let O=u?Y("total_sequence_length_input",u.dataType,u.dims):void 0;O&&V.push(O);let H=de("output",t.dataType,d),X=[H];c&&X.push(de("present_key",t.dataType,f,w));let J=rt(1,w),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${N.type.storage}, ${x*x}>;
  ${A.registerUniforms(he).declareVariables(...V,...X)}
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
    ${Xr(F,O,!0)}
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
        output[outputIdx] = ${H.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:M,programUniforms:v}),getShaderSource:S}},ic=(e,t,n,r,i,o,a=void 0,s=void 0)=>{let u=o+i.kvSequenceLength,l=i.nReps?i.nReps:1,d=i.vHiddenSize*l,c=e>1&&r,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,f=c?[i.batchSize,p,u,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,d],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:d},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:l}],x=c&&r&&q.size(r.dims)>0,M=["type","type"];x&&M.push("type"),a&&M.push("type"),s&&M.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];c&&v.push({dims:f,dataType:t.dataType,gpuDataType:0});let I=T=>{let k=Y("probs",t.dataType,t.dims),S=Y("v",n.dataType,n.dims),A=[k,S];x&&A.push(Y("past_value",r.dataType,r.dims));let N=a?Y("seq_lens",a.dataType,a.dims):void 0;a&&A.push(N);let U=s?Y("total_sequence_length_input",s.dataType,s.dims):void 0;s&&A.push(U);let V=[de("output",t.dataType,m)];c&&V.push(de("present_value",t.dataType,f));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${k.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${k.type.value}, ${y*y}>;
  ${T.registerUniforms(F).declareVariables(...A,...V)}
  ${T.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Xr(N,U,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:v,dispatchGroup:w,programUniforms:b}),getShaderSource:I}},dr=(e,t,n,r,i,o,a,s,u,l,d=void 0,c=void 0)=>{let p=Math.min(e.outputCount,1+(a?1:0)+(s?1:0)),f=p>1?a:void 0,m=p>1?s:void 0,y=p>1?l.pastSequenceLength:0,w=y+l.kvSequenceLength,b=u&&q.size(u.dims)>0?u:void 0,x=[t,n];f&&q.size(f.dims)>0&&x.push(f),b&&x.push(b),d&&x.push(d),c&&x.push(c);let M=e.compute(rc(p,t,n,f,b,l,y,d,c),{inputs:x,outputs:p>1?[-1,1]:[-1]})[0];e.compute(nc(M,l.batchSize,l.numHeads,y,l.sequenceLength,w,d,c),{inputs:d&&c?[M,d,c]:[M],outputs:[]});let v=[M,r];m&&q.size(m.dims)>0&&v.push(m),d&&v.push(d),c&&v.push(c),e.compute(ic(p,M,r,m,l,y,d,c),{inputs:v,outputs:p>1?[0,2]:[0]})},oc=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,o=t.headSize,a=12,s={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=c=>{let p=de("output_q",u[0].dataType,n),f=de("output_k",u[0].dataType,n),m=de("output_v",u[0].dataType,n),y=Y("input",u[0].dataType,u[0].dims),w=Y("weight",u[1].dataType,u[1].dims),b=Y("bias",u[2].dataType,u[2].dims),x=y.type.storage,M=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${c.registerUniforms(M).declareVariables(y,w,b,p,f,m)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},ac=(e,t)=>{let n=tc(e.inputs,t),[r,i,o]=oc(e,n);return dr(e,r,i,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),sc,uc,lc,cc,by=ee(()=>{yt(),we(),_e(),je(),xe(),sc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,o)=>{let a=i.length;if(a!==r.length)throw new Error(`${o}: num dimensions != ${a}`);i.forEach((s,u)=>{if(s!==r[u])throw new Error(`${o}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},uc=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,o=e[0].dims,a=r?He(o[o.length-1]):1,s=i==="NHWC"&&o.length>1?a:1,u=q.size(o)/a,l=r,d=l?o.length:o,c=Y("x",e[0].dataType,e[0].dims,a),p=Y("scale",e[1].dataType,e[1].dims,s),f=Y("bias",e[2].dataType,e[2].dims,s),m=Y("inputMean",e[3].dataType,e[3].dims,s),y=Y("inputVar",e[4].dataType,e[4].dims,s),w=de("y",e[0].dataType,d,a),b=()=>{let M="";if(r)M=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")M=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{M=`var cIndices = ${p.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let v=1;v<p.rank;v++)M+=`cIndices[${v}] = outputIndices[${v}];`;M+=`let cOffset = ${p.indicesToOffset("cIndices")};`}return M},x=M=>`
  const epsilon = ${n};
  ${M.registerUniform("outputSize","u32").declareVariables(c,p,f,m,y,w)}
  ${M.mainStart()}
  ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${a}`)};
    ${b()}
    let scale = ${p.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...fe(o)]:[{type:12,data:u}]})}},lc=e=>Re(e),cc=(e,t)=>{let{inputs:n,outputCount:r}=e,i=lc({...t,outputCount:r});if(De.webgpu.validateInputContent&&sc(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(uc(n,i))}}),dc,hc,pc,xy=ee(()=>{_e(),xe(),dc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},hc=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,o=Y("input",i,t,4),a=Y("bias",i,[n],4),s=Y("residual",i,t,4),u=de("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${n}u / 4;
  ${l.declareVariables(o,a,s,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},pc=e=>{dc(e.inputs),e.compute(hc(e.inputs))}}),fc,Ae,mc,gc,yc,wc,_c,bc,xc,$c,vc,Sc,Mc,Ic,Ec,Tc,hr,kc,Zr,Cc,Ac,Rc,Oc,Nc,zc,Bc,Pc,Dc,Uc,Lc,Fc,Gc,Wc,qc,Vc,To,Hc,ko,Co,jc,Kc,Yc,Xc,Zc,Qc,Ao=ee(()=>{we(),_e(),je(),xe(),fc=(e,t,n,r,i,o,a)=>{let s=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let l=Y("inputData",n,[s],4),d=de("outputData",r,[s],4),c=[{name:"vec_size",type:"u32"}];return a&&c.push(...a),`
      ${e.registerUniforms(c).declareVariables(l,d)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Ae=(e,t,n,r,i,o=e.dataType,a,s)=>{let u=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:l=>fc(l,q.size(e.dims),e.dataType,o,n,r,s),getRunData:l=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(q.size(l[0].dims)/64/4)},programUniforms:u})}},mc=e=>{e.compute(Ae(e.inputs[0],"Abs","abs"))},gc=e=>{e.compute(Ae(e.inputs[0],"Acos","acos"))},yc=e=>{e.compute(Ae(e.inputs[0],"Acosh","acosh"))},wc=e=>{e.compute(Ae(e.inputs[0],"Asin","asin"))},_c=e=>{e.compute(Ae(e.inputs[0],"Asinh","asinh"))},bc=e=>{e.compute(Ae(e.inputs[0],"Atan","atan"))},xc=e=>{e.compute(Ae(e.inputs[0],"Atanh","atanh"))},$c=e=>Re(e),vc=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ae(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Sc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Re({min:t,max:n})},Mc=(e,t)=>{let n=t||Sc(e.inputs),r=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Ic=e=>{e.compute(Ae(e.inputs[0],"Ceil","ceil"))},Ec=e=>{e.compute(Ae(e.inputs[0],"Cos","cos"))},Tc=e=>{e.compute(Ae(e.inputs[0],"Cosh","cosh"))},hr=e=>Re(e),kc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Zr=(e="f32")=>`
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
}`,Cc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Zr(t)))},Ac=e=>{e.compute(Ae(e.inputs[0],"Exp","exp"))},Rc=e=>{e.compute(Ae(e.inputs[0],"Floor","floor"))},Oc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Zr(t)))},Nc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},zc=e=>{e.compute(Ae(e.inputs[0],"Not",t=>`!${t}`))},Bc=e=>{e.compute(Ae(e.inputs[0],"Neg",t=>`-${t}`))},Pc=e=>{e.compute(Ae(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Dc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Uc=e=>{e.compute(Ae(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Lc=e=>Re(e),Fc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Gc=e=>{e.compute(Ae(e.inputs[0],"Sin","sin"))},Wc=e=>{e.compute(Ae(e.inputs[0],"Sinh","sinh"))},qc=e=>{e.compute(Ae(e.inputs[0],"Sqrt","sqrt"))},Vc=e=>{e.compute(Ae(e.inputs[0],"Tan","tan"))},To=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Hc=e=>{e.compute(Ae(e.inputs[0],"Tanh",To))},ko=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${To("v")};
}
`,Co=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,jc=e=>{let t=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"FastGelu",Co,ko(t),void 0,e.inputs[0].dataType))},Kc=(e,t)=>{let n=rt(e.inputs[0].dataType);return e.compute(Ae(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Yc=e=>{e.compute(Ae(e.inputs[0],"Log","log"))},Xc=(e,t)=>`
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
`,Zc=e=>`quick_gelu_impl(${e})`,Qc=(e,t)=>{let n=rt(e.inputs[0].dataType);e.compute(Ae(e.inputs[0],"QuickGelu",Zc,Xc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Jc,ed,td,$y=ee(()=>{_e(),xe(),Ao(),Jc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ed=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=Y("input",e[0].dataType,e[0].dims,4),r=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=de("output",e[0].dataType,t,4),o=q.size(t)/4,a=Ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:s=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${s.declareVariables(n,r,i)}

  ${Zr(a)}

  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},td=e=>{Jc(e.inputs),e.compute(ed(e.inputs))}}),nd,rd,kt,id,od,ad,sd,ud,ld,cd,dd,hd,pd,vy=ee(()=>{we(),_e(),xe(),nd=(e,t,n,r,i,o,a,s,u,l,d,c)=>{let p,f;typeof s=="string"?p=f=(x,M)=>`${s}((${x}),(${M}))`:typeof s=="function"?p=f=s:(p=s.scalar,f=s.vector);let m=de("outputData",d,r.length,4),y=Y("aData",u,t.length,4),w=Y("bData",l,n.length,4),b;if(i)if(o){let x=q.size(t)===1,M=q.size(n)===1,v=t.length>0&&t[t.length-1]%4===0,I=n.length>0&&n[n.length-1]%4===0;x||M?b=m.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),M?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(a||v?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||I?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(M,v,I="")=>{let T=`aData[indexA${v}][componentA${v}]`,k=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${M}[${v}] = ${I}(${p(T,k)});
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
      }`},rd=(e,t,n,r,i,o,a=n.dataType)=>{let s=n.dims.map(Number),u=r.dims.map(Number),l=!q.areEqual(s,u),d=s,c=q.size(s),p=!1,f=!1,m=[l];if(l){let y=Wn.calcShape(s,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),c=q.size(d);let w=q.size(s)===1,b=q.size(u)===1,x=s.length>0&&s[s.length-1]%4===0,M=u.length>0&&u[u.length-1]%4===0;m.push(w),m.push(b),m.push(x),m.push(M);let v=1;for(let I=1;I<d.length;I++){let T=s[s.length-I],k=u[u.length-I];if(T===k)v*=T;else break}v%4===0?(f=!0,p=!0):(w||b||x||M)&&(p=!0)}else p=!0;return m.push(p),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>nd(y,s,u,d,p,l,f,i,n.dataType,r.dataType,a,o),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(d)/4)},...fe(s,u,d)]})}},kt=(e,t,n,r,i,o)=>{e.compute(rd(t,i??"",e.inputs[0],e.inputs[1],n,r,o))},id=e=>{kt(e,"Add",(t,n)=>`${t}+${n}`)},od=e=>{kt(e,"Div",(t,n)=>`${t}/${n}`)},ad=e=>{kt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},sd=e=>{kt(e,"Mul",(t,n)=>`${t}*${n}`)},ud=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;kt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},ld=e=>{kt(e,"Sub",(t,n)=>`${t}-${n}`)},cd=e=>{kt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},dd=e=>{kt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},hd=e=>{kt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},pd=e=>{kt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),fd,md,gd,yd,wd,_d,Sy=ee(()=>{we(),_e(),je(),xe(),fd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,o=r.dims.length;e.forEach((a,s)=>{if(s!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==o)throw new Error("input tensors should have the same shape");a.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},md=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,gd=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let o=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(o):i===0?r.push(`if (inputIndex == ${i}u) { ${o} }`):i===n-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${i}) { ${o} }`)}return r.join(`
`)},yd=(e,t,n,r)=>{let i=q.size(n),o=new Array(e.length),a=new Array(e.length),s=0,u=[],l=[],d=[{type:12,data:i}];for(let y=0;y<e.length;++y)s+=e[y].dims[t],o[y]=s,l.push(e[y].dims.length),a[y]=Y(`input${y}`,r,l[y]),u.push("rank"),d.push({type:12,data:o[y]});for(let y=0;y<e.length;++y)d.push(...fe(e[y].dims));d.push(...fe(n));let c=de("output",r,n.length),p=c.indicesGet("indices",t),f=Array.from(Array(o.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...a,c)})()}

  ${md(o.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${p});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${f});
      ${p} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${gd(a,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:d}),getShaderSource:m}},wd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);fd(n,i);let o=r.slice();o[i]=n.reduce((s,u)=>s+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(s=>q.size(s.dims)>0);e.compute(yd(a,i,o,n[0].dataType),{inputs:a})},_d=e=>Re({axis:e.axis})}),Sn,Mn,In,Ro,En=ee(()=>{we(),_e(),Sn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Mn=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},In=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ro=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Gu,Wu];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),et,bd,Oo=ee(()=>{et=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},bd=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),xd,My=ee(()=>{xd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),pr,No,zo=ee(()=>{we(),_e(),xe(),En(),pr=(e,t,n,r,i)=>{let o=r-n;return`
      ${Array.from({length:n}).map((a,s)=>`
      if (${pe(t.shape,s,t.rank)} != 1) {
        ${t.indicesSet(e,s,pe(i,s+o,r))}
      } else {
        ${t.indicesSet(e,s,0)}
      }`).join("")}
`},No=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a[a.length-2],l=s[s.length-1],d=a[a.length-1],c=He(l),p=He(d),f=He(u),m=q.size(n)/c/f,y=e.length>2,w=r?r.slice(0,-2):n.slice(0,-2),b=[q.size(w),u,l],x=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Mn(t,x),x.push(...fe(w,a,s)),y&&x.push(...fe(e[2].dims)),x.push(...fe(b));let M=v=>{let I=xo("batch_dims",e[0].dataType,w.length),T=Y("a",e[0].dataType,a.length,p),k=Y("b",e[1].dataType,s.length,c),S=de("output",e[0].dataType,b.length,c),A=Ze(S.type.tensor),N=Sn(t,S.type.value,A),U=[T,k],V="";if(y){let H=i?c:1;U.push(Y("bias",e[2].dataType,e[2].dims.length,H)),V=`${i?`value += bias[col / ${H}];`:`value += ${S.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];In(t,F);let O=()=>{let H=`var a_data: ${T.type.value};`;for(let X=0;X<p;X++)H+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${c}];`;for(let X=0;X<f;X++){H+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${p}];`;for(let J=0;J<p;J++)H+=`
            values[${X}] = fma(${k.type.value}(a_data${p===1?"":`[${J}]`}), b_data${J}, values[${X}]);
`}return H};return`
  ${v.registerUniforms(F).registerInternalVariables(I).declareVariables(...U,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${pr("a_indices",T,T.rank-2,I.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${k.type.indices};
    ${pr("b_indices",k,k.rank-2,I.rank,"batch_indices")}
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${p};${f};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:M}}}),$d,vd,Bo,Po,Sd,Do,Md,Qr,Uo=ee(()=>{we(),_e(),xe(),En(),zo(),Oo(),$d=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,vd=(e,t)=>e?`
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
        }`,Bo=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=i?u:o,c=i?o:u,p=d/t[0],f=o/t[1];if(!((i&&p===4&&e[1]===4||!i&&(p===3||p===4))&&d%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
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
          ${$d(i,r)}
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

          ${vd(i,p)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Po=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Sd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Do=(e,t,n="f32",r,i=!1,o=32,a=!1,s=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],c=i?l:o,p=i?o:l;if(!(p%t[1]===0&&c%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let f=p/t[1],m=c/t[0],y=o/t[1],w=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${Po(i,r)}
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
      ${Po(i,r)}
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
      ${Sd(i)}
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
`},Md=(e,t,n,r,i=!1)=>{let[o,a,s,u]=r,l=Ze(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${et(e,l)} {
      var value = ${et(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${pr("aIndices",a,a.rank-2,o.rank,"batchIndices")}
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
        ${pr("bIndices",s,s.rank-2,o.rank,"batchIndices")}
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
    `},Qr=(e,t,n,r,i=!1,o)=>{let a=e[0].dims,s=e[1].dims,u=a.slice(0,-2),l=s.slice(0,-2),d=r?r.slice(0,-2):n.slice(0,-2),c=q.size(d),p=a[a.length-2],f=a[a.length-1],m=s[s.length-1],y=f%4===0&&m%4===0,w=p<=8?[4,1,1]:[4,4,1],b=[8,8,1],x=[Math.ceil(m/b[0]/w[0]),Math.ceil(p/b[1]/w[1]),Math.ceil(c/b[2]/w[2])],M=y?4:1,v=[...u,p,f/M],I=v.length,T=[...l,f,m/M],k=T.length,S=[c,p,m/M],A=[{type:6,data:p},{type:6,data:m},{type:6,data:f}];Mn(t,A),A.push(...fe(d,v,T));let N=["rank","rank"],U=e.length>2;U&&(A.push(...fe(e[2].dims)),N.push("rank")),A.push(...fe(S));let V=F=>{let O=d.length,H=xo("batchDims",e[0].dataType,O,1),X=Ze(e[0].dataType),J=Y("a",e[0].dataType,I,M),he=Y("b",e[1].dataType,k,M),W=de("result",e[0].dataType,S.length,M),z=[J,he];if(U){let Z=i?M:1;z.push(Y("bias",e[2].dataType,e[2].dims.length,Z))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];In(t,R);let B=Ze(W.type.tensor),L=Sn(t,W.type.value,B),G=Md(M,U,L,[H,J,he,W],i);return`
  ${F.registerUniforms(R).registerInternalVariables(H).declareVariables(...z,W)}
  ${G}
  ${y?Bo(w,b,X,H):Do(w,b,X,H)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:A}),getShaderSource:V}}}),Id,Ed,Iy=ee(()=>{we(),Ht(),xe(),En(),Oo(),My(),Uo(),Id=(e,t,n,r,i=!1,o,a=4,s=4,u=4,l="f32")=>{let d=A=>{switch(A){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},c=A=>{switch(A){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${A} is not supported.`)}},p=e?`
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
    return resData;`,M=e?t&&r?`
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
    return ${et(a,l)}(0.0);`,v=e?r&&n?c(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(s)}
    }
    return ${et(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(s)}
    }
    return ${et(s,l)}(0.0);`,I=et(u,l),T=et(e?a:s,l),k=et(e?s:a,l),S=Sn(o,I,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?M:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?v:M}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${bd(i)}
      ${S}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ed=(e,t,n,r,i,o,a,s,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],c=n[0],p=l?n[2]:n[3],f=l?n[1]:n[2],m=l?n[3]:n[1],y=l&&(d%4===0||d%3===0)&&m%4===0,w=l?m:p*f,b=l?p*f:m,x=[8,8,1],M=r<=8?[4,1,1]:[4,4,1],v=[Math.ceil(w/x[0]/M[0]),Math.ceil(b/x[1]/M[1]),Math.ceil(c/x[2]/M[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let I=y?l&&d%4!==0?3:4:1,T=x[1]*M[1],k=x[0]*M[0],S=Math.max(x[0]*I,x[1]),A=r%T===0,N=i%k===0,U=o%S===0,V=y?[I,4,4]:[1,1,1],F=[{type:6,data:r},{type:6,data:i},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Mn(t,F),F.push(...fe(e[0].dims,e[1].dims));let O=["rank","rank"];a&&(F.push(...fe(e[2].dims)),O.push("rank")),F.push(...fe(n));let H=X=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];In(t,J);let he=y?4:1,W=Ze(e[0].dataType),z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${W}>`:W}) {
        result[flatIndex] = ${y?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=Y("x",e[0].dataType,e[0].dims.length,I===3?1:I),B=Y("w",e[1].dataType,e[1].dims.length,he),L=[R,B],G=de("result",e[0].dataType,n.length,he);if(a){let Z=Y("bias",e[2].dataType,e[2].dims.length,he);L.push(Z),z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${W}>`:W} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${xd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(J).declareVariables(...L,G)}
        ${z}
        ${Id(l,A,N,U,a,t,V[0],V[1],V[2],W)}
        ${y?Bo(M,x,W,void 0,!l,S):Do(M,x,W,void 0,!l,S,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${A};${N};${U};${T};${k};${S}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:F}),getShaderSource:H}}}),Td,Lo,fr,kd,Fo,Cd,Ad,Rd,Ey=ee(()=>{we(),Ht(),_e(),xe(),En(),Oo(),Td=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Lo=e=>typeof e=="number"?[e,e,e]:e,fr=(e,t)=>t<=1?e:e+(e-1)*(t-1),kd=(e,t,n,r=1)=>{let i=fr(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Fo=(e,t,n,r,i)=>{i==null&&(i=kd(e,t[0],r[0]));let o=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(o[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return o},Cd=(e,t,n,r,i,o,a,s,u,l)=>{let d,c,p,f;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Fo([t,n,r,1],[s,u,l],1,[i,o,a],e);c=m[0],p=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,w,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Fo([t,n,r,1],[s,u,l],1,[i,o,a],e[0]);c=m[0],p=m[1],f=m[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),p=Math.ceil(n/o),f=Math.ceil(r/a);let m=(c-1)*i+s-t,y=(p-1)*o+u-n,w=(f-1)*a+l-r,b=Math.floor(m/2),x=m-b,M=Math.floor(y/2),v=y-M,I=Math.floor(w/2),T=w-I;d={top:M,bottom:v,left:I,right:T,front:b,back:x}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:c,outHeight:p,outWidth:f}},Ad=(e,t,n,r,i,o=!1,a="channelsLast")=>{let s,u,l,d,c;if(a==="channelsLast")[s,u,l,d,c]=e;else if(a==="channelsFirst")[s,c,u,l,d]=e;else throw new Error(`Unknown dataFormat ${a}`);let[p,,f,m,y]=t,[w,b,x]=Lo(n),[M,v,I]=Lo(r),T=fr(f,M),k=fr(m,v),S=fr(y,I),{padInfo:A,outDepth:N,outHeight:U,outWidth:V}=Cd(i,u,l,d,w,b,x,T,k,S),F=o?p*c:p,O=[0,0,0,0,0];return a==="channelsFirst"?O=[s,F,N,U,V]:a==="channelsLast"&&(O=[s,N,U,V,F]),{batchSize:s,dataFormat:a,inDepth:u,inHeight:l,inWidth:d,inChannels:c,outDepth:N,outHeight:U,outWidth:V,outChannels:F,padInfo:A,strideDepth:w,strideHeight:b,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:T,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:M,dilationHeight:v,dilationWidth:I,inShape:e,outShape:O,filterShape:t}},Rd=(e,t,n,r,i,o)=>{let a=o==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],u={x:n.map((w,b)=>b)},l=[Math.ceil(Td(u.x.map(w=>n[w]))/s[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,c=q.size(n),p=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Mn(t,p),p.push(...fe(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(p.push(...fe(e[2].dims)),f.push("rank")),p.push(...fe(n));let y=w=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];In(t,b);let x=1,M=Ze(e[0].dataType),v=Y("x",e[0].dataType,e[0].dims.length,d),I=Y("W",e[1].dataType,e[1].dims.length,x),T=[v,I],k=de("result",e[0].dataType,n.length,x),S="";if(m){let U=Y("bias",e[2].dataType,e[2].dims.length,x);T.push(U),S+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${M} {
          return bias[${a?pe("coords",4,5):pe("coords",1,5)}];
        }`}let A=et(d,M),N=Sn(t,A,M);return`
            ${S}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${v.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${w.registerUniforms(b).declareVariables(...T,k)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${k.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,v.rank)};
              let d2 = ${a?pe("coords",v.rank-1,v.rank):pe("coords",1,v.rank)};
              let xFRCCorner = vec3<u32>(${a?pe("coords",1,v.rank):pe("coords",2,v.rank)},
              ${a?pe("coords",2,v.rank):pe("coords",3,v.rank)},
              ${a?pe("coords",3,v.rank):pe("coords",4,v.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?pe("uniforms.x_shape",1,v.rank):pe("uniforms.x_shape",2,v.rank)};
              let xShapeZ = ${a?pe("uniforms.x_shape",2,v.rank):pe("uniforms.x_shape",3,v.rank)};
              let xShapeW = ${a?pe("uniforms.x_shape",3,v.rank):pe("uniforms.x_shape",4,v.rank)};
              let xShapeU = ${a?pe("uniforms.x_shape",4,v.rank):pe("uniforms.x_shape",1,v.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${d};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:p}),getShaderSource:y}}}),Od,Nd,Ty=ee(()=>{we(),_e(),xe(),En(),Od=(e,t,n,r)=>{let i=e.length>2,o=i?"value += b[output_channel];":"",a=e[0].dims,s=e[1].dims,u=t.format==="NHWC",l=u?n[3]:n[1],d=l/t.group,c=u&&d>=4?He(l):1,p=q.size(n)/c,f=[{type:12,data:p},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Mn(t,f),f.push(...fe(a,[s[0],s[1],s[2],s[3]/c]));let m=i?["rank","rank","rank"]:["rank","rank"];f.push(...fe([n[0],n[1],n[2],n[3]/c]));let y=w=>{let b=de("output",e[0].dataType,n.length,c),x=Ze(b.type.tensor),M=Sn(t,b.type.value,x),v=Y("x",e[0].dataType,a.length),I=Y("w",e[1].dataType,s.length,c),T=[v,I];i&&T.push(Y("b",e[2].dataType,e[2].dims,c));let k=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];In(t,k);let S=u?`
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

            let xVal = ${v.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(k).declareVariables(...T,b)}

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
    ${o}
    ${M}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Nd=(e,t,n,r)=>{let i=e.length>2,o=He(n[3]),a=He(n[2]),s=q.size(n)/o/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],d=[n[0],n[1],n[2],n[3]/o],c=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Mn(t,c),c.push(...fe(u,l,d));let p=(a-1)*t.strides[1]+l[1],f=m=>{let y=de("output",e[0].dataType,d.length,o),w=Ze(y.type.tensor),b=Sn(t,y.type.value,w),x=Y("x",e[0].dataType,u.length,o),M=Y("w",e[1].dataType,l.length,o),v=[x,M];i&&v.push(Y("b",e[2].dataType,e[2].dims,o));let I=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return In(t,T),`
  ${m.registerUniforms(T).declareVariables(...v,y)}
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
          let w_val = ${M.get("w_height","w_width","0","output_channel")};
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${a};${p};${l[0]};${l[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}}}),zd,Jr,Bd,ei,Go,Wo,Pd,Dd,qo,ky=ee(()=>{_e(),Iy(),Ey(),Uo(),Ty(),En(),zo(),on(),zd=(e,t,n,r,i,o)=>{let a=e[0],s=e.slice(o?1:2,o?3:4),u=s.length,l=t[0],d=t.slice(2).map((p,f)=>p+(p-1)*(n[f]-1)),c=s.map((p,f)=>p+r[f]+r[f+u]).map((p,f)=>Math.floor((p-d[f]+i[f])/i[f]));return c.splice(0,0,a),c.splice(o?3:1,0,l),c},Jr=[2,3,1,0],Bd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ei=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let r=e.pads.slice();Vr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Go=e=>{let t=Ro(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,o=e.group,a=e.kernel_shape,s=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Wo=(e,t,n,r)=>{let i=n.format==="NHWC",o=zd(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let T=[t[0]];if(i){let k=e.kernelCustomData.wT??e.compute(gt(t[1],Jr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k),T.push(k)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Nd(T,n,o,r),{inputs:T}):e.compute(Od(T,n,o,r),{inputs:T});return}let a=t.length===3,s=t[0].dims[i?1:2],u=t[0].dims[i?2:3],l=t[0].dims[i?3:1],d=t[1].dims[2],c=t[1].dims[3],p=o[i?1:2],f=o[i?2:3],m=o[i?3:1],y=i&&d===s&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(y||d===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let T=o[0],k,S,A,N=[];if(i){let F=e.kernelCustomData.wT??e.compute(gt(t[1],Jr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),y){let O=s*u*l;k=t[0].reshape([1,T,O]),S=F.reshape([1,O,m]),A=[1,T,m]}else k=t[0].reshape([T,s*u,l]),S=F.reshape([1,l,m]),A=[T,p*f,m];N.push(k),N.push(S)}else k=t[0].reshape([T,l,s*u]),S=t[1].reshape([1,m,l]),A=[T,m,p*f],N.push(S),N.push(k);a&&N.push(t[2]);let U=A[2],V=N[0].dims[N[0].dims.length-1];U<8&&V<8?e.compute(No(N,n,o,A,i,r),{inputs:N}):e.compute(Qr(N,n,o,A,i,r),{inputs:N});return}let w=!0,b=e.kernelCustomData.wT??e.compute(gt(t[1],Jr),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let x=[t[0],b];a&&x.push(t[2]);let M=i?p*f:m,v=i?m:p*f,I=d*c*l;e.compute(Ed(x,n,o,M,v,I,a,w,r),{inputs:x})},Pd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),a=[1].concat(t.dilations),s=[1].concat(t.kernelShape),u=ei({...t,pads:i,strides:o,dilations:a,kernelShape:s},r);Wo(e,r,u,l=>n?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Dd=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=ei(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=Ad(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,r);e.compute(Rd(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},qo=(e,t)=>{if(Bd(e.inputs,t),e.inputs[0].dims.length===3)Pd(e,t);else if(e.inputs[0].dims.length===5)Dd(e,e.inputs,t);else{let n=ei(t,e.inputs);Wo(e,e.inputs,n)}}}),Ud,Cy=ee(()=>{we(),Ht(),_e(),xe(),Ud=(e,t,n)=>{let r=e.length>2,i=t.outputShape,o=t.format==="NHWC",a=t.group,s=e[1].dims,u=s[2]/a,l=s[3],d=o?He(u):1,c=o&&l===1&&u>=4,p=c?Math.floor(u/4)*4:Math.floor(u/d)*d,f=u-p,m=o?He(l):1,y=o?l===1?d:m:1,w=q.size(i)/m,b=[Math.ceil(w/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let x=["rank","rank"],M=[t.strides[0],t.strides[1]],v=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],I=[t.dilations[0],t.dilations[1]],T=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],k=[T[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),T[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],S=[{type:12,data:w},{type:12,data:M},{type:12,data:v},{type:12,data:I},{type:12,data:T},{type:6,data:k},{type:12,data:p},{type:12,data:u},{type:12,data:l},...fe(e[0].dims,e[1].dims)];r&&(S.push(...fe(e[2].dims)),x.push("rank")),S.push(...fe(i));let A=N=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:M.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:T.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Ze(e[0].dataType),F=o?1:2,O=o?2:3,H=o?3:1,X=Y("W",e[1].dataType,e[1].dims.length,y),J=Y("Dy",e[0].dataType,e[0].dims.length,d),he=[J,X];r&&he.push(Y("bias",e[2].dataType,[i[H]].length,m));let W=de("result",e[0].dataType,i.length,m),z=()=>{let L="";if(c)d===4?L+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?L+=`
          dotProd = dotProd + dot(vec4<${V}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${V}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(L+=`
          dotProd = dotProd + dot(vec4<${V}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${V}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(L+=`
                  let xValue = ${o?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):J.get("batch","inputChannel","idyR","idyC")};
        `,d===1)L+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let G=0;G<d;G++)L+=`
            let wValue${G} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${G}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${G}] * wValue${G};`;return L},R=()=>{if(f===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let L="";if(d===1){L+="dotProd = dotProd";for(let G=0;G<f;G++)L+=`
            + ${J.getByOffset(`x_offset + ${G}`)} * ${X.getByOffset(`w_offset + ${G}`)}`;L+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);L+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return L},B=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",H)};
            let r = ${W.indicesGet("outputIndices",F)};
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
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${F}]) || fract(dyR) > 0.0 ||
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
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:d}) {
                  ${z()}
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
    ${N.registerUniforms(U).declareVariables(...he,W)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${B}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${m}${c}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:A}}}),Ld,Fd,Gd,Vo,Wd,qd,Ho,Vd,Hd,Ay=ee(()=>{Cy(),En(),on(),Ld=(e,t,n,r,i,o)=>(e-1)*t+n+(r-1)*i+1-o,Fd=(e,t,n,r,i)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=o,n[i]=e-o):t==="SAME_LOWER"&&(n[r]=e-o,n[i]=o)},Gd=(e,t,n,r,i,o,a,s,u,l)=>{let d=e.length-2,c=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let p=e[0],f=t[s?3:1]*i;for(let m=0,y=e.length-d-(s?1:0);m<d;++m,++y){let w=e[y],b=c?w*a[m]:l[m],x=Ld(w,a[m],o[m],t[y],n[m],b);Fd(x,r,o,m,m+d),c&&l.push(a[m]*(w-1)+u[m]+(t[y]-1)*n[m]+1-o[m]-o[m+d])}l.splice(0,0,p),l.splice(s?3:1,0,f)},Vo=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,p)=>c*p,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),o=e.outputShape.slice(),a=e.outputPadding.slice(),s=t[0].dims,u=e.dilations.slice();if(u.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let l=e.strides.slice();if(l.reduce((c,p)=>c+p,0)===0){let c=t[0].dims.length-2;l=new Array(c).fill(1)}Gd(s,n,u,e.autoPad,e.group,i,l,r,a,o);let d=Object.assign({},e);return Object.assign(d,{kernelShape:n,pads:i,outputPadding:a,outputShape:o,dilations:u,strides:l}),d},Wd=e=>{let t=Ro(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,o=e.group??1,a=e.kernelShape,s=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:o,kernelShape:a,outputPadding:d,outputShape:c,pads:s,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},qd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((a,s)=>a+s,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((a,s)=>a+s,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((a,s)=>a+s,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((a,s)=>a+s,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ho=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(gt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let o=[t[0],i];t.length===3&&o.push(t[2]),e.compute(Ud(o,n,r),{inputs:o})},Vd=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],a=[1].concat(a),o=[1].concat(o),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let l=Vo({...t,pads:s,strides:a,dilations:o,kernelShape:i,outputPadding:u},r);Ho(e,r,l,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Hd=(e,t)=>{if(qd(e.inputs,t),e.inputs[0].dims.length===3)Vd(e,t);else{let n=Vo(t,e.inputs);Ho(e,e.inputs,n)}}}),jd,Kd,Yd,Ry=ee(()=>{we(),_e(),je(),xe(),jd=(e,t,n,r)=>{let i=q.size(t),o=t.length,a=Y("input",e,o),s=de("output",e,o),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(u,o),d=c=>{let p=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=pe("uniforms.input_shape","uniforms.axis",o),m=r.reverse?p+(r.exclusive?" + 1":""):"0",y=r.reverse?f:p+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...fe(t,t)]}),getShaderSource:d}},Kd=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(jd(r,n,i,t),{inputs:[0]})},Yd=e=>{let t=e.exclusive===1,n=e.reverse===1;return Re({exclusive:t,reverse:n})}}),Xd,Zd,Qd,Jd,eh,Oy=ee(()=>{we(),_e(),je(),xe(),Xd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Zd=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)i.push(n.indicesSet("a",e[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},Qd=(e,t)=>{let n,r,i,o,a,s,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([n,r,i,o]=e.dims,a=d?[n,r,i,l,l,o/l**2]:[n,r,i,o/l**2,l,l],s=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=d?[n,l,l,o/l**2,r,i]:[n,o/l**2,l,l,r,i],s=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(a),p=c.dims.length,f=e.dataType,m=Y("a",f,p),y=de("output",f,p),w=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Zd(s,p,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let x=u?[n,r*l,i*l,o/l**2]:[n,o/l**2,r*l,i*l],M=q.size(x),v=c.dims,I=q.sortBasedOnPerm(v,s);return{outputs:[{dims:x,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(M/64)},programUniforms:[{type:12,data:M},...fe(v,I)]}},getShaderSource:w}},Jd=(e,t)=>{Xd(e.inputs),e.compute(Qd(e.inputs[0],t))},eh=e=>Re({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ti,mr,jo,th,nh,rh,ih,Ko,oh,ah,sh,Ny=ee(()=>{we(),_e(),je(),xe(),ti="[a-zA-Z]|\\.\\.\\.",mr="("+ti+")+",jo="^"+mr+"$",th="("+mr+",)*"+mr,nh="^"+th+"$",rh=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},ih=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(nh)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,a)=>{let s=e[a].dims.slice();if(!o.match(RegExp(jo)))throw new Error("Invalid LHS term");let u=this.processTerm(o,!0,s,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([o,a])=>a.count===1||o==="...").map(([o])=>o).join("");else if(!r.match(RegExp(mr)))throw new Error("Invalid RHS");(i=r.match(RegExp(ti,"g")))==null||i.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(o);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,o=!1,a=[],s=0;if(!e.match(RegExp(jo))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(ti,"g")),l=new rh(r);return u==null||u.forEach((d,c)=>{if(d==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let p=i-u.length+1;if(p<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(s,s+p),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,c+f),this.addSymbol(m,n[s++],r)}}else l.addSymbol(d,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,n[s++],r)}),l}},Ko=e=>e+"_max",oh=(e,t,n,r)=>{let i=e.map(l=>l.length).map((l,d)=>Y(`input${d}`,t,l)),o=q.size(r),a=de("output",t,r.length),s=[...n.symbolToInfo.keys()].filter(l=>!n.rhs.symbolToIndices.has(l)),u=l=>{let d=[],c="var prod = 1.0;",p="var sum = 0.0;",f="sum += prod;",m=[],y=[],w=[],b=[],x=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((v,I)=>{var T;if(n.rhs.symbolToIndices.has(I)){let k=(T=n.rhs.symbolToIndices.get(I))==null?void 0:T[0];k!==void 0&&n.lhs.forEach((S,A)=>{if(v.inputIndices.includes(A)){let N=S.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(U=>{d.push(`${i[A].indicesSet(`input${A}Indices`,U,a.indicesGet("outputIndices",k))}`)})}})}else n.lhs.forEach((k,S)=>{if(v.inputIndices.includes(S)){let A=k.symbolToIndices.get(I);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(N=>{m.push(`${i[S].indicesSet(`input${S}Indices`,N,`${I}`)}`)}),b.push(`prod *= ${i[S].getByIndices(`input${S}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Ko(I)}; ${I}++) {`),w.push("}")});let M=x?[...d,`let sum = ${i.map((v,I)=>v.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...d,p,...y,...m,c,...b,f,...w];return`
            ${l.registerUniforms(s.map(v=>({name:`${Ko(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((v,I)=>`var input${I}Indices: ${i[I].type.indices};`).join(`
`)}
            ${M.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=s.filter(c=>n.symbolToInfo.has(c)).map(c=>{var p;return{type:12,data:((p=n.symbolToInfo.get(c))==null?void 0:p.dimValue)||0}});l.push({type:12,data:o});let d=e.map((c,p)=>[...fe(c)]).reduce((c,p)=>c.concat(p),l);return d.push(...fe(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}},getShaderSource:u}},ah=(e,t)=>{let n=new ih(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((o,a)=>o.dims);e.compute(oh(i,e.inputs[0].dataType,n,r))},sh=e=>{let t=e.equation.replace(/\s+/g,"");return Re({equation:t})}}),uh,Yo,lh,ch,dh,zy=ee(()=>{we(),_e(),xe(),uh=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Yo=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},lh=(e,t)=>e.length>t.length?Yo(e,t):Yo(t,e),ch=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=lh(t,n),i=e[0].dataType,o=i===9||q.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,s=o||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(q.size(r)/s),l=c=>{let p=Y("input",i,t.length,a),f=de("output",i,r.length,s),m;if(i===9){let y=(w,b,x="")=>`
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
    ${m}`},d=[{type:12,data:u},...fe(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${s}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},dh=e=>{uh(e.inputs),e.compute(ch(e.inputs),{inputs:[0]})}}),hh,ph,By=ee(()=>{we(),_e(),xe(),Ao(),hh=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4===0,o=a=>{let s=Y("x",t,[1],4),u=Y("bias",t,[1],4),l=de("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,p=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(d).declareVariables(s,u,l)}

    ${ko(rt(t))}

    ${a.mainStart(qn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${p}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Co("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/qn/4)}})}},ph=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?jc(e):e.compute(hh(e.inputs))}}),fh,mh,gh,yh,Py=ee(()=>{we(),_e(),je(),xe(),fh=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},mh=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=q.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(o,1,...r);let s=n[o],u=e[0].dataType===9?4:1,l=Math.ceil(q.size(a)/u),d=[{type:12,data:l},{type:6,data:s},{type:12,data:o},...fe(e[0].dims,e[1].dims,a)],c=p=>{let f=Y("data",e[0].dataType,e[0].dims.length,u),m=Y("inputIndices",e[1].dataType,e[1].dims.length),y=de("output",e[0].dataType,a.length,u),w=x=>{let M=r.length,v=`var indicesIndices${x}  = ${m.type.indices}(0);`;for(let I=0;I<M;I++)v+=`${M>1?`indicesIndices${x}[${I}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${I}]`:`outputIndices${x}`};`;v+=`
          var idx${x} = ${m.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let I=0,T=0;I<i;I++)I===o?(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = u32(idx${x});`,T+=M):(v+=`${i>1?`dataIndices${x}[${I}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${T}]`:`outputIndices${x}`};`,T++);return v},b;if(e[0].dataType===9){let x=(M,v,I="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          ${w(v)};
          let offset${v} = ${f.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${M}[${v}] = ${I}(${f.getByOffset(`index${v}`)}[component${v}]);
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c}},gh=e=>Re({axis:e.axis}),yh=(e,t)=>{let n=e.inputs;fh(n),e.compute(mh(e.inputs,t))}}),wh,_h,bh,Dy=ee(()=>{we(),_e(),xe(),wh=(e,t,n,r,i,o,a,s,u)=>{let l=[{type:12,data:o},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:12,data:u}],d=[o];l.push(...fe(t.dims,d));let c=p=>{let f=Y("indices_data",t.dataType,t.dims.length),m=de("input_slice_offsets_data",12,1,1),y=[f,m],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},_h=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,o=n[1].dims,a=o[o.length-1],s=q.sizeToDimension(o,o.length-1),u=q.sizeFromDimension(r,t.batchDims+a),l=q.sizeToDimension(r,t.batchDims),d=q.sizeFromDimension(r,t.batchDims),c=s/l,p=new Array(a),f=u;for(let v=0;v<a;++v)p[a-1-v]=f,f*=r[t.batchDims+a-1-v];let m=wh(e,n[1],p,t.batchDims,r,s,c,d,a),y=t.batchDims+a;if(y>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=o.slice(0,-1).concat(r.slice(y)),b=q.size(w),x=[{type:12,data:b},{type:12,data:u},...fe(n[0].dims,m.dims,w)],M=v=>{let I=Y("data",n[0].dataType,n[0].dims.length),T=Y("slice_offsets",12,m.dims.length),k=de("output",n[0].dataType,w.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,T,k)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:M},{inputs:[n[0],m]})},bh=e=>({batchDims:e.batch_dims,cacheKey:""})}),xh,$h,vh,Sh,Uy=ee(()=>{we(),_e(),je(),xe(),xh=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],o=e[2],a=e.length===4?e[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((s,u)=>u===n?Math.ceil(s/r)===o.dims[u]:s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==o.dims.length||!a.dims.map((s,u)=>s===o.dims[u]).reduce((s,u)=>s&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},$h=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,o=q.normalizeAxis(t.gatherAxis,i),a=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(o,1,...r);let u=q.size(s),l=e[2].dataType,d=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:a},{type:12,data:o},{type:12,data:t.blockSize},...fe(...e.map((f,m)=>f.dims),s)],p=f=>{let m=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),b=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,x=de("output",l,s.length),M=[m,y,w];b&&M.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:p}},vh=(e,t)=>{let n=e.inputs;xh(n,t),e.compute($h(e.inputs,t))},Sh=e=>Re({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Mh,Ih,Eh,Th,Ly=ee(()=>{we(),_e(),je(),xe(),Mh=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Ih=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,o=e[1].dims,a=e[1].dataType,s=q.normalizeAxis(t.axis,i),u=n[s],l=o.slice(0),d=q.size(l),c=Y("input",r,i),p=Y("indicesInput",a,o.length),f=de("output",r,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:s}];return m.push(...fe(n,o,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
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
  }`}},Eh=e=>Re({axis:e.axis}),Th=(e,t)=>{let n=e.inputs;Mh(n),e.compute(Ih(e.inputs,t))}}),kh,Ch,Ah,Rh,Fy=ee(()=>{we(),_e(),xe(),kh=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ch=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,o,a]=Fu.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,o];if(!s)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(o/u),d=Math.ceil(i/u),c=!0,p=q.size(s),f=[{type:12,data:c?l:p},{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(f.push(...fe(e[2].dims)),m.push("rank")),f.push(...fe(s));let y=b=>{let x="";t.transA&&t.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let M=t.alpha===1?"":"value *= uniforms.alpha;",v=Y("a",e[0].dataType,e[0].dims),I=Y("b",e[1].dataType,e[1].dims),T=v.type.value,k=null,S=[v,I];e.length===3&&(k=Y("c",e[2].dataType,e[2].dims.length),S.push(k));let A=de("output",e[0].dataType,s.length);S.push(A);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(N).declareVariables(...S)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${M}
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${T}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=b=>{let x=Y("a",e[0].dataType,e[0].dims),M=Y("b",e[1].dataType,e[1].dims),v=null,I=[x,M];e.length===3&&(v=Y("c",e[2].dataType,e[2].dims.length),I.push(v));let T=de("output",e[0].dataType,s.length);I.push(T);let k=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],S="",A="";t.transA&&t.transB?(A=`
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
  ${b.registerUniforms(k).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${M.type.storage}, ${u}>, ${u}>;
  ${b.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
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
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:f}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:y}},Ah=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Rh=(e,t)=>{kh(e.inputs),e.compute(Ch(e.inputs,t))}}),Bt,jt,Tn,kn,Oh,Nh,zh,Bh,Ph,Dh,Uh,Lh,Fh,Gh,Gy=ee(()=>{we(),_e(),je(),xe(),[Bt,jt,Tn,kn]=[0,1,2,3],Oh=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Nh=`
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
`,zh=e=>`
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
`,Bh=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ph=e=>`
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
`,Dh=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Bt}] = batch;
     indices[${jt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Tn}] = u32(r);
            indices[${kn}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Tn}] = u32(clamp(r, 0, H - 1));
          indices[${kn}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Tn}] = gs_reflect(r, border[1], border[3]);
          indices[${kn}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Uh=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Bt}], indices[${jt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Bt}], indices[${jt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Bt}], indices[${jt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Bt}], indices[${jt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Bt}], indices[${jt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Bt}], indices[${jt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Lh=(e,t)=>{let n=Y("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Bt,jt,Tn,kn]=[0,3,1,2]);let a=de("output",e[0].dataType,o.length),s=n.type.value,u=q.size(o),l=[{type:12,data:u},...fe(e[0].dims,r,o)],d=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${Nh}
  ${zh(s)}
  ${Bh(t)}
  ${Ph(t)}
  ${Dh(n,s,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Tn}]);
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

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Bt}], indices[${Tn}], indices[${kn}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Uh(a,s,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let p=q.size(o);return{outputs:[{dims:o,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:l}},getShaderSource:d}},Fh=(e,t)=>{Oh(e.inputs),e.compute(Lh(e.inputs,t))},Gh=e=>Re({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),at,Wh,qh,Xo,Vh,gr,Hh,jh=ee(()=>{we(),_e(),je(),go(),Eo(),xe(),on(),at=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Wh=(e,t)=>{let n=e[0],r=at(e,1),i=at(e,2),o=at(e,3),a=at(e,4),s=at(e,5),u=at(e,6),l=at(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=n.dims[0],c=n.dims[1],p=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],f=c,m=0,y=0,w=Math.floor(p/t.numHeads);if(u&&l&&q.size(u.dims)&&q.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&q.size(u.dims)||l&&q.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(o&&q.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=m+f,M=0;if(a&&q.size(a.dims)>0){M=8;let k=a.dims;throw k.length===1?k[0]===d?M=1:k[0]===3*d+2&&(M=3):k.length===2&&k[0]===d&&k[1]===x&&(M=5),M===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,I=p;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],v=!0}}let T=!1;if(a&&q.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==d||s.dims[1]!==t.numHeads||s.dims[2]!==c||s.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:p,vHiddenSize:I,headSize:w,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:M,scale:t.scale,broadcastResPosBias:T,passPastInKv:v,qkvFormat:b}},qh=e=>Re({...e}),Xo=Re({perm:[0,2,1,3]}),Vh=(e,t,n,r,i,o,a)=>{let s=[r,i,o],u=q.size(s),l=[{type:12,data:u},{type:12,data:a},{type:12,data:o}],d=c=>{let p=de("qkv_with_bias",t.dataType,s),f=Y("qkv",t.dataType,s),m=Y("bias",n.dataType,s),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(f,m,p)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,n],outputs:[-1]})[0]},gr=(e,t,n,r,i,o,a,s)=>{let u=o;if(a&&q.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Vh(e,o,a,t,r,n*i,s),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(gt(u,Xo.perm),{inputs:[u],outputs:[-1]})[0]}else return o.dims.length===3&&(u=o.reshape([t,r,n,i])),n===1||r===1?u:e.compute(gt(u,Xo.perm),{inputs:[u],outputs:[-1]})[0]},Hh=(e,t)=>{let n=Wh(e.inputs,t),r=e.inputs[0],i=at(e.inputs,1),o=at(e.inputs,2),a=at(e.inputs,3),s=at(e.inputs,4),u=at(e.inputs,5),l=at(e.inputs,6),d=at(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&o&&i.dims.length===4&&o.dims.length===4,p=gr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(c)return dr(e,p,i,o,s,void 0,l,d,u,n);if(!i||!o)throw new Error("key and value must be provided");let f=gr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),m=gr(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,a,2*n.hiddenSize);dr(e,p,f,m,s,void 0,l,d,u,n)}}),Kh,Yh,Xh,Zh,Zo,Qh,Jh,ep=ee(()=>{we(),_e(),je(),xe(),Kh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Yh=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Re({numOutputs:r,axis:t.axis,splitSizes:n})},Xh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Zh=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Zo=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,o=q.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),s=Y("input",i,n.length),u=new Array(t.numOutputs),l=[],d=[],c=0,p=[{type:12,data:r}];for(let m=0;m<t.numOutputs;m++){c+=t.splitSizes[m],u[m]=c;let y=n.slice();y[o]=t.splitSizes[m],d.push(y),a[m]=de(`output${m}`,i,y.length),l.push({dims:d[m],dataType:e[0].dataType})}p.push({type:12,data:u},...fe(n,...d));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(s,...a)}
  ${Xh(u.length)}
  ${Zh(a)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:p})}},Qh=(e,t)=>{Kh(e.inputs);let n=e.inputs.length===1?t:Yh(e.inputs,t);e.compute(Zo(e.inputs,n),{inputs:[0]})},Jh=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Re({axis:t,numOutputs:r,splitSizes:n})}}),tp,ni,np,rp=ee(()=>{we(),_e(),je(),xe(),tp=(e,t)=>{let[n,r,i,o]=e,{numHeads:a,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!q.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],l=n.dims[n.dims.length-2],d=i.dims[0],c=q.sizeFromDimension(n.dims,1)/l,p=s===0?i.dims[1]*2:c/a;if(s>p)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(p/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},ni=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:o}=t,a=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=s/u,d=e[2].dims[1],c=i===0?d*2:l/r,p=new Array(a,u,l/c,c-d),f=q.computeStrides(p),m=[{type:1,data:o},{type:12,data:p},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[s,l,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[s,c,u*c,1]}):[],...fe(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let b=Y("input",e[0].dataType,e[0].dims.length),x=Y("position_ids",e[1].dataType,e[1].dims.length),M=Y("cos_cache",e[2].dataType,e[2].dims.length),v=Y("sin_cache",e[3].dataType,e[3].dims.length),I=de("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:p.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${w.declareVariables(b,x,M,v,I)}

        ${w.mainStart(qn)}
          let half_rotary_emb_dim = uniforms.${M.name}_shape[1];
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
            let re = ${b.getByOffset("i")} * ${M.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${M.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Re({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(p)/qn)},programUniforms:m})}},np=(e,t)=>{tp(e.inputs,t),e.compute(ni(e.inputs,t))}}),ip,op,Qo,ap,sp,Wy=ee(()=>{je(),we(),Eo(),jh(),ep(),on(),rp(),xe(),ip=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],o=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,u=n.dims[0],l=n.dims[1],d=n.dims.length===3?s?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=l,p=0,f=!r||r.dims.length===0,m=Math.floor(f?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);f&&(d=m*t.numHeads);let y=o&&o.dims.length!==0,w=a&&a.dims.length!==0;if(y&&o.dims.length===4&&o.dims[0]===u&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=o.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let x=0,M=!1,v=t.kvNumHeads?m*t.kvNumHeads:d;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],M=!0}}let I=e.length>4?e[5]:void 0;if(I){if(I.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let T=I.dims.reduce((k,S)=>k*S,1);if(T!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${T}.`);for(let k=0;k<I.dims.length;k++)if(I.dims[k]!==1&&I.dims[k]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${k}] = ${I.dims[k]}.`)}return{batchSize:u,sequenceLength:l,pastSequenceLength:p,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:t.scale,broadcastResPosBias:!1,passPastInKv:M,qkvFormat:b}},op=Re({perm:[0,2,1,3]}),Qo=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(gt(r,op.perm),{inputs:[r],outputs:[-1]})[0]),r},ap=(e,t,n,r)=>{let i=7,o=["type","type"],a=[e*t],s=e*t,u=[{type:12,data:s},{type:12,data:t},{type:12,data:e}],l=d=>{let c=Y("seq_lens",n.dataType,n.dims),p=Y("total_seq_lens",r.dataType,r.dims),f=de("pos_ids",i,a),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:l}},sp=(e,t)=>{var v;let n=ip(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Re({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,d*n.headSize,d*n.headSize]}),[p,f,m]=!i&&!o?e.compute(Zo([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,o],y,w;if(t.doRotary){let I=e.compute(ap(n.batchSize,n.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],T=e.inputs[7],k=e.inputs[8],S=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[p,I,T,k],N=[-1];y=e.compute(ni(A,S),{inputs:A,outputs:N})[0],A.splice(0,1,f);let U=Re({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});w=e.compute(ni(A,U),{inputs:A,outputs:N})[0]}let b=gr(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?y:p,void 0,0),x=Qo(e,t.doRotary?w:f,n),M=Qo(e,m,n);dr(e,b,x,M,void 0,void 0,a,s,void 0,n,u,l)}}),Jo,up,lp,cp,qy=ee(()=>{we(),_e(),on(),xe(),Jo=(e,t,n,r,i,o,a,s)=>{let u=He(o),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,c=i*a,p=64;c===1&&(p=256);let f=[i,a,o/u],m=[i,a,2],y=["rank","type","type"],w=[];w.push(...fe(f,m));let b=x=>{let M=Y("x",t.dataType,3,u),v=Y("scale",n.dataType,n.dims),I=Y("bias",r.dataType,r.dims),T=de("output",1,3,2),k=[M,v,I,T];return`
  var<workgroup> workgroup_shared : array<${d}, ${p}>;
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
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
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

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${s};${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:w}),getShaderSource:b},{inputs:[t,n,r],outputs:[-1]})[0]},up=(e,t,n)=>{let r=t[0].dims,i=r,o=2,a=r[0],s=r[1],u=q.sizeFromDimension(r,o),l=He(u),d=q.size(i)/l,c=Jo(e,t[0],t[1],t[2],a,u,s,n.epsilon),p=[a,s,u/l],f=[a,s],m=["type","none"],y=w=>{let b=Y("x",t[0].dataType,p.length,l),x=Y("scale_shift",1,f.length,2),M=de("output",t[0].dataType,p.length,l),v=[b,x,M];return`
  ${w.registerUniform("output_size","u32").declareVariables(...v)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${M.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${M.type.value}(scale_shift.x) + ${M.type.value}(scale_shift.y);
      ${M.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...fe(p,f,p)]}),getShaderSource:y},{inputs:[t[0],c]})},lp=(e,t,n)=>{let r=t[0].dims,i=r,o=r[0],a=r[r.length-1],s=q.sizeFromDimension(r,1)/a,u=He(a),l=q.size(i)/u,d=[{type:12,data:s},{type:12,data:Math.floor(a/u)}],c=["type","type"],p=!1,f=[0,r.length-1];for(let b=0;b<r.length-2;b++)p=p||r[b+1]!==1,f.push(b+1);p=p&&r[r.length-1]!==1;let m=p?e.compute(gt(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(b,x)=>r[f[x]])),y=Jo(e,m,t[1],t[2],o,s,a,n.epsilon),w=b=>{let x=Ze(t[0].dataType),M=u===1?"vec2f":`mat${u}x2f`,v=k=>{let S=k===0?"x":"y",A=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${x}(${A}(scale.${S}))`;case 2:return`vec2<${x}>(${A}(scale[0].${S}, scale[1].${S}))`;case 4:return`vec4<${x}>(${A}(scale[0].${S}, scale[1].${S}, scale[2].${S}, scale[3].${S}))`;default:throw new Error(`Not supported compoents ${u}`)}},I=Y("input",t[0].dataType,t[0].dims,u),T=de("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${M}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:w},{inputs:[t[0],y]})},cp=(e,t)=>{t.format==="NHWC"?lp(e,e.inputs,t):up(e,e.inputs,t)}}),dp,hp,pp,Vy=ee(()=>{we(),_e(),xe(),dp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},hp=(e,t,n)=>{let r=t.simplified,i=e[0].dims,o=e[1],a=!r&&e[2],s=i,u=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,u),d=q.sizeFromDimension(i,u),c=q.size(o.dims),p=a?q.size(a.dims):0;if(c!==d||a&&p!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${p}`);let f=[];for(let I=0;I<i.length;++I)I<u?f.push(i[I]):f.push(1);let m=He(d),y=["type","type"],w=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];a&&y.push("type");let b=n>1,x=n>2,M=I=>{let T=Ze(e[0].dataType),k=[Y("x",e[0].dataType,e[0].dims,m),Y("scale",o.dataType,o.dims,m)];a&&k.push(Y("bias",a.dataType,a.dims,m)),k.push(de("output",e[0].dataType,s,m)),b&&k.push(de("mean_data_output",1,f)),x&&k.push(de("inv_std_output",1,f));let S=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(S).declareVariables(...k)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${bo("f32",m)};
    var mean_square_vector = ${bo("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Vn(T,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${rn("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${rn("mean_square_vector",m)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Vn(T,m,"x[j + offset]")};
      let f32scale = ${Vn(T,m,"scale[j]")};
      output[j + offset] = ${k[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Vn(T,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:s,dataType:e[0].dataType}];return b&&v.push({dims:f,dataType:1}),x&&v.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${n};${r}`,inputDependencies:y},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:w}),getShaderSource:M}},pp=(e,t)=>{dp(e.inputs),e.compute(hp(e.inputs,t,e.outputCount))}}),fp,mp,Hy=ee(()=>{_e(),zo(),Uo(),fp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},mp=e=>{fp(e.inputs);let t=Wn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(No(e.inputs,{activation:""},t));else{let i=t[t.length-2],o=q.size(e.inputs[0].dims.slice(0,-2)),a=q.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&a===1){let s=e.inputs[0].reshape([1,o,r]),u=e.inputs[1].reshape([1,r,n]),l=[1,o,n],d=[s,u];e.compute(Qr(d,{activation:""},t,l),{inputs:d})}else e.compute(Qr(e.inputs,{activation:""},t))}}}),gp,yp,wp,_p,bp,jy=ee(()=>{we(),_e(),je(),xe(),gp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,a=e[1];if(!q.areEqual(a.dims,[t.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let s=e[2].dims;if(q.size(s)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(u)!==l)throw new Error("zeroPoints input size error.")}},yp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,d=e[0].dataType,c=He(t.k),p=He(l),f=He(a),m=s.concat([i,a]),y=i>1&&a/f%2===0?2:1,w=q.size(m)/f/y,b=64,x=[],M=[u,i,o/c],v=q.convertShape(e[1].dims).slice();v.splice(-1,1,l/p),x.push(...fe(M)),x.push(...fe(v)),x.push(...fe(e[2].dims)),e.length===4&&x.push(...fe(q.convertShape(e[3].dims)));let I=[u,i,a/f];x.push(...fe(I));let T=k=>{let S=M.length,A=Y("a",e[0].dataType,S,c),N=Y("b",12,v.length,p),U=Y("scales",e[2].dataType,e[2].dims.length),V=[A,N,U],F=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;F&&V.push(F);let O=I.length,H=de("output",e[0].dataType,O,f),X=Ze(e[0].dataType),J=(()=>{switch(c){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${c}-component is not supported.`)}})(),he=Math.floor(32/t.bits),W=Math.floor(he/8),z=()=>{let L="";for(let G=0;G<W;G++){let Z=G*t.bits*4,ie=Z+t.bits;L+=`
          // reuse a data (pass ${G})
            var input_offset${G>0?G:""} = ${G===0?A.indicesToOffset(`${A.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${G>0?G:""}: ${J};
            for (var j${G>0?G:""}: u32 = 0; j${G>0?G:""} < ${8/c}; j${G>0?G:""}++) {
              a_data${G>0?G:""}[j${G>0?G:""}] = ${A.getByOffset(`input_offset${G>0?G:""}`)};
              input_offset${G>0?G:""}++;
            }
          `;for(let te=0;te<f*y;te++)L+=`
            b_value = ${p===1?`b${te}_data`:`b${te}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${G*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Z}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ie}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(ye,Me)=>`${X}(b_value_lower[${Me}]), ${X}(b_value_upper[${Me}])`).join(", ")});
            b_dequantized_values = ${c===1?`${J}(${Array.from({length:8},(ye,Me)=>`(b_quantized_values[${Me}] - ${F?`zero_point${te}`:"zero_point"}) * scale${te}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${F?`zero_point${te}`:"zero_point"}`).join(",")})) * scale${te};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(te/f)}]${f>1?`[${te%f}]`:""} += ${Array.from({length:8/c},(ye,Me)=>`${c===1?`a_data${G>0?G:""}[${Me}] * b_dequantized_values[${Me}]`:`dot(a_data${G>0?G:""}[${Me}], b_dequantized_values[${Me}])`}`).join(" + ")};
          `}return L},R=()=>{let L=`
            var col_index = col * ${f};
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
            let zero_point = ${X}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let G=0;G<f*y;G++)L+=`
            let scale${G} = ${U.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${X}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return L},B=()=>{let L=`col_index = col * ${f};`;for(let G=0;G<f*y;G++)L+=`
            let b${G}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return L+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,L};return`
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
                word_offset += ${he/c};
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${p};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:w},programUniforms:x}),getShaderSource:T}},wp=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],o=t.k,a=t.n,s=n.slice(0,r-2),u=q.size(s),l=e[1].dims[2]/4,d=e[0].dataType,c=He(t.k),p=He(l),f=s.concat([i,a]),m=128,y=a%8===0?8:a%4===0?4:1,w=m/y,b=Math.floor(32/t.bits),x=w*p*b,M=x/c,v=x/t.blockSize,I=q.size(f)/y,T=[],k=[u,i,o/c],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,l/p),T.push(...fe(k)),T.push(...fe(S)),T.push(...fe(e[2].dims)),e.length===4&&T.push(...fe(q.convertShape(e[3].dims)));let A=[u,i,a];T.push(...fe(A));let N=U=>{let V=k.length,F=Y("a",e[0].dataType,V,c),O=Y("b",12,S.length,p),H=Y("scales",e[2].dataType,e[2].dims.length),X=[F,O,H],J=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;J&&X.push(J);let he=A.length,W=de("output",e[0].dataType,he),z=Ze(e[0].dataType),R=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${M}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${w}>, ${y}>;
        ${U.declareVariables(...X,W)}
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
                sub_a[a_offset] = ${F.getByIndices(`${F.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${F.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${H.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${p}; i++) {
              let b_value = ${p===1?"b_data":"b_data[i]"};
              ${(()=>{let B=Math.floor(b/8),L="";for(let G=0;G<B;G++){let Z=G*t.bits*4,ie=Z+t.bits;L+=`
              ${R()}
              {${t.bits===2?`
                let half_word = b_value >> ${G*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Z}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ie}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${z}>(${Array.from({length:4},(te,ye)=>`${z}(b_value_lower[${ye}]), ${z}(b_value_upper[${ye}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(te,ye)=>`${`dot(a_data${ye}, b_dequantized_values[${ye}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return L})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${p};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:I},programUniforms:T}),getShaderSource:N}},_p=(e,t)=>{gp(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(wp(e.inputs,t)):e.compute(yp(e.inputs,t))},bp=e=>Re(e)}),xp,$p,vp,Sp,Mp,Ip,Ep,Tp,kp,Ky=ee(()=>{we(),_e(),xe(),xp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},$p=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},vp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Sp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Mp=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Ip=(e,t,n)=>{switch(n.mode){case 0:return $p(e,t,n.pads.length);case 1:return vp(e,t,n.pads.length);case 2:return Sp(e,t,n.pads.length);case 3:return Mp(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Ep=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=q.size(n),o=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&o.push({type:a?e[2].dataType:1,data:t.value}),o.push(...fe(e[0].dims,n));let s=["rank"],u=l=>{let d=de("output",e[0].dataType,n.length),c=Y("x",e[0].dataType,r.length),p=c.type.value,f=Ip(d,r.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:a?p:"f32"}),`
            ${l.registerUniforms(m).declareVariables(c,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${p}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:o}),getShaderSource:u}},Tp=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,o=new Int32Array(2*i).fill(0);if(e.length>=4){let s=e[3].getBigInt64Array();for(let u=0;u<s.length;u++)o[Number(s[u])]=Number(n[u]),o[Number(s[u])+i]=Number(n[u+s.length])}else n.forEach((s,u)=>o[Number(u)]=Number(s));let a=[];return o.forEach(s=>a.push(s)),{mode:t.mode,value:r,pads:a}}else return t},kp=(e,t)=>{xp(e.inputs);let n=Tp(e.inputs,t);e.compute(Ep(e.inputs,n),{inputs:[0]})}}),yr,ea,ta,na,ra,Cp,Ap,ia,oa,Rp,Op,aa,Np,zp,sa,Bp,Pp,Dp,Up,Yy=ee(()=>{yt(),we(),_e(),xe(),yr=e=>{if(De.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ea=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),s=t.strides.slice(),u=o?t.dilations.slice():[],l=t.pads.slice();Vr.adjustPoolAttributes(n,i,a,s,u,l);let d=Vr.computePoolOutputShape(n,i,s,u,a,l,t.autoPad),c=Object.assign({},t);o?Object.assign(c,{kernelShape:a,strides:s,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:a,strides:s,pads:l,cacheKey:t.cacheKey});let p=d.slice();return p.push(p.splice(1,1)[0]),[c,r?p:d]},ta=(e,t)=>{let n=t.format==="NHWC",r=q.size(e),i=q.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let s=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],c=!!(l+d);o.push({type:12,data:s},{type:12,data:u},{type:12,data:l},{type:12,data:d}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let p=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];p=!!(y+w),o.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:w}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,a,!0,c,p]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(t.kernelShape);o.push({type:12,data:s},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[o,a,!!u,!1,!1]}},na=(e,t,n,r,i,o,a,s,u,l,d,c)=>{let p=i.format==="NHWC",f=t.type.value,m=de("output",t.type.tensor,r);if(i.kernelShape.length<=2){let y="",w="",b="",x=n-(p?2:1);if(d?y=`
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
            }`}},ra=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Cp=e=>`${ra(e)};${e.countIncludePad}`,Ap=e=>`${ra(e)};${e.storageOrder};${e.dilations}`,ia=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),oa=(e,t,n,r)=>{let[i,o]=ea(t,r,n),a=Y("x",t.dataType,t.dims.length),s=a.type.value,u="value += x_val;",l="";i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[d,c,p,f,m]=ta(o,i);d.push(...fe(t.dims,o));let y=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(o)/64)},programUniforms:d}),getShaderSource:w=>na(w,a,t.dims.length,o.length,i,u,l,0,c,p,f,m)}},Rp=e=>{let t=e.count_include_pad!==0,n=ia(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Cp(r)}},Op=(e,t)=>{yr(e.inputs),e.compute(oa("AveragePool",e.inputs[0],!1,t))},aa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Np=e=>{let t=e.format;return{format:t,...aa,cacheKey:t}},zp=(e,t)=>{yr(e.inputs),e.compute(oa("GlobalAveragePool",e.inputs[0],!0,t))},sa=(e,t,n,r)=>{let[i,o]=ea(t,r,n),a=`
      value = max(x_val, value);
    `,s="",u=Y("x",t.dataType,t.dims.length),l=["rank"],[d,c,p,f,m]=ta(o,i);return d.push(...fe(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${p};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(o)/64)},programUniforms:d}),getShaderSource:y=>na(y,u,t.dims.length,o.length,i,a,s,t.dataType===10?-65504:-1e5,c,p,f,m)}},Bp=(e,t)=>{yr(e.inputs),e.compute(sa("MaxPool",e.inputs[0],!1,t))},Pp=e=>{let t=e.storage_order,n=e.dilations,r=ia(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Ap(i)}},Dp=e=>{let t=e.format;return{format:t,...aa,cacheKey:t}},Up=(e,t)=>{yr(e.inputs),e.compute(sa("GlobalMaxPool",e.inputs[0],!0,t))}}),Lp,Fp,Gp,Wp,Xy=ee(()=>{we(),_e(),je(),xe(),Lp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,o)=>o===t.axis||i===e[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Fp=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,o=e[0].dims,a=e[1].dataType,s=q.size(o),u=r===3||r===2,l=u?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,c=e.length>2?e[2]:void 0,p=c?u?[Math.ceil(q.size(c.dims)/4)]:c.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,m=f===!1&&d.length===1,y=He(s),w=f&&(!u||y===4),b=w?y:1,x=w&&!u?y:1,M=Y("input",u?12:r,l.length,x),v=Y("scale",a,d.length),I=c?Y("zero_point",u?12:r,p.length):void 0,T=de("output",a,o.length,b),k=[M,v];I&&k.push(I);let S=[l,d];c&&S.push(p);let A=[{type:12,data:s/b},{type:12,data:n},{type:12,data:t.blockSize},...fe(...S,o)],N=U=>{let V=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${U.registerUniforms(V).declareVariables(...k,T)}
      ${U.mainStart()}
          ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${M.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${M.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?f?u?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:m?u?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":M.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/b/64),y:1,z:1},programUniforms:A})}},Gp=(e,t)=>{Lp(e.inputs,t),e.compute(Fp(e.inputs,t))},Wp=e=>Re({axis:e.axis,blockSize:e.blockSize})}),qp,Vp,Hp,Zy=ee(()=>{yt(),we(),xe(),qp=(e,t,n)=>{let r=e===t,i=e<t&&n<0,o=e>t&&n>0;if(r||i||o)throw new Error("Range these inputs' contents are invalid.")},Vp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),o=[i],a=i,s=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...fe(o)],u=l=>{let d=de("output",r,o.length),c=d.type.value,p=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${l.registerUniforms(p).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s})}},Hp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),De.webgpu.validateInputContent&&qp(t,n,r),e.compute(Vp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),jp,Kp,Yp,Xp,Qy=ee(()=>{we(),_e(),je(),xe(),jp=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${o}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Kp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,o=1,a=Math.ceil(q.sizeToDimension(r,r.length-1)/o),s=r[r.length-1],u=q.sizeFromDimension(n,s),l=[{type:12,data:a},{type:12,data:s},{type:12,data:u},...fe(e[1].dims,e[2].dims,i)],d=c=>{let p=Y("indices",e[1].dataType,e[1].dims.length),f=Y("updates",e[2].dataType,e[2].dims.length,o),m=t.reduction!=="none"&&t.reduction!==""?nl("output",e[0].dataType,i.length):de("output",e[0].dataType,i.length,o);return`
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
    ${jp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:d}},Yp=e=>Re({reduction:e.reduction}),Xp=(e,t)=>{e.compute(Kp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Zp,Qp,Jp,ua,ef,tf,nf,rf,of,af,sf,uf,la,lf,cf,df,hf,pf,ff,mf,Jy=ee(()=>{we(),_e(),je(),xe(),Zp=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Qp=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,o)=>r[i]=e[o]),r},Jp=(e,t,n,r,i,o)=>{let[a,s,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(d=>o.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Zp(r,t),t.axes.length>0&&Qp(r,t.axes,l).forEach((d,c)=>r[c]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>i.push(Number(d))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},ua=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,ef=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",tf=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",nf=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,a)=>{r[o]=i[a],r[a+n]=i[t.length+a]}),r):i},rf=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(o=>i.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,a)=>i[o]=n[a])}else n.forEach(o=>i.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((o,a)=>Math.round(o*t[a]))}return i},of=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=r),n.axes.forEach(o=>i[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),i.forEach((o,a)=>i[a]=Math.round(o*t[a]))),i},af=(e,t,n,r,i)=>`
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
    }`,sf=(e,t,n,r,i,o,a)=>`
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
    }`,uf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,la=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",lf=(e,t,n,r,i)=>{let[o,a,s,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(col, ${n[s]} - 1))`)};
      ${la(e,u,o,2)}
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
    }`},cf=(e,t,n,r,i,o,a,s,u,l)=>{let d=n.length===2,[c,p]=d?[0,1]:[2,3],f=e.type.value,m=y=>{let w=y===c?"row":"col";return`
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
    `},df=(e,t,n,r,i)=>{let[o,a,s,u,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${la(e,l,o,3)}
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
    }`},hf=(e,t,n,r,i,o)=>{let a=e.dims,s=nf(o,t.axes,a.length),u=rf(a,r,i,t.axes),l=r.slice();r.length===0&&(l=a.map((x,M)=>x===0?1:u[M]/x),t.keepAspectRatioPolicy!=="stretch"&&(u=of(a,l,t)));let d=de("output",e.dataType,u.length),c=Y("input",e.dataType,a.length),p=q.size(u),f=a.length===u.length&&a.every((x,M)=>x===u[M]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=c.type.value,b=x=>`
      ${f?"":`
      ${ef(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${uf(c,a)};
              ${tf(t.nearestMode,n,w)};
              ${sf(c,d,a,u,l.length,s.length,m)};
              `;case"linear":return`
              ${af(d,a,u,l.length,s.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${lf(c,d,a,m,y)}`;if(a.length===3||a.length===5)return`${df(c,d,a,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${cf(c,d,a,u,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${f}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},{type:1,data:l},{type:1,data:s},...fe(a,u)]})}},pf=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},ff=(e,t)=>{let n=[],r=[],i=[],o=pf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Jp(e.inputs,t,o,n,r,i),e.compute(hf(e.inputs[0],t,o,n,r,i),{inputs:[0]})},mf=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,o=e.excludeOutside!==0,a=e.extrapolationValue,s=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return Re({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:o,extrapolationValue:a,keepAspectRatioPolicy:s,mode:u,nearestMode:l})}}),gf,yf,wf,ew=ee(()=>{we(),_e(),xe(),gf=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},yf=(e,t,n,r)=>{let i=t.simplified,o=e[0].dims,a=q.size(o),s=o,u=a,l=o.slice(-1)[0],d=r?o.slice(0,-1).concat(1):[],c=!i&&e.length>3,p=e.length>4,f=r&&n>1,m=r&&n>2,y=n>3,w=64,b=He(l),x=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],M=I=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],k=[Y("x",e[0].dataType,e[0].dims,b),Y("skip",e[1].dataType,e[1].dims,b),Y("gamma",e[2].dataType,e[2].dims,b)];c&&k.push(Y("beta",e[3].dataType,e[3].dims,b)),p&&k.push(Y("bias",e[4].dataType,e[4].dims,b)),k.push(de("output",e[0].dataType,s,b)),f&&k.push(de("mean_output",1,d)),m&&k.push(de("inv_std_output",1,d)),y&&k.push(de("input_skip_bias_sum",e[0].dataType,s,b));let S=Ze(e[0].dataType),A=Ze(1,b);return`

      ${I.registerUniforms(T).declareVariables(...k)}
      var<workgroup> sum_shared : array<${A}, ${w}>;
      var<workgroup> sum_squared_shared : array<${A}, ${w}>;

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
        let mean = ${rn("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${rn("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${S}(mean)`}) *
            ${S}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:s,dataType:e[0].dataType}];return n>1&&v.push({dims:d,dataType:1}),n>2&&v.push({dims:d,dataType:1}),n>3&&v.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((I,T)=>"type")},getShaderSource:M,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:x})}},wf=(e,t)=>{gf(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(yf(e.inputs,t,e.outputCount,!1),{outputs:n})}}),_f,wr,bf,ca,xf,$f,vf,Sf,tw=ee(()=>{we(),_e(),je(),xe(),_f=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},wr=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},bf=(e,t)=>{if(e.length>1){let n=wr(e,1),r=wr(e,2),i=wr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Re({starts:n,ends:r,axes:i})}else return t},ca=(e,t,n,r,i)=>{let o=e;return e<0&&(o+=n[r[t]]),i[t]<0?Math.max(0,Math.min(o,n[r[t]]-1)):Math.max(0,Math.min(o,n[r[t]]))},xf=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,$f=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=wr(e,4);o.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let a=t.starts.map((b,x)=>ca(b,x,n,i,o)),s=t.ends.map((b,x)=>ca(b,x,n,i,o));if(i.length!==a.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let b=0;b<n.length;++b)i.includes(b)||(a.splice(b,0,0),s.splice(b,0,n[b]),o.splice(b,0,1));let u=o.map(b=>Math.sign(b));o.forEach((b,x,M)=>{if(b<0){let v=(s[x]-a[x])/b,I=a[x],T=I+v*o[x];a[x]=T,s[x]=I,M[x]=-b}});let l=n.slice(0);i.forEach((b,x)=>{l[b]=Math.ceil((s[b]-a[b])/o[b])});let d={dims:l,dataType:e[0].dataType},c=de("output",e[0].dataType,l.length),p=Y("input",e[0].dataType,e[0].dims.length),f=q.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:o.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:u},{type:12,data:o},...fe(e[0].dims,l)],w=b=>`
      ${b.registerUniforms(m).declareVariables(p,c)}
        ${xf(p,c,n)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",p.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},vf=(e,t)=>{_f(e.inputs,t);let n=bf(e.inputs,t);e.compute($f(e.inputs,n),{inputs:[0]})},Sf=e=>{let t=e.starts,n=e.ends,r=e.axes;return Re({starts:t,ends:n,axes:r})}}),Mf,If,Ef,Tf,nw=ee(()=>{we(),_e(),je(),on(),xe(),Mf=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},If=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),o=r.length,a=q.normalizeAxis(t.axis,o),s=a<r.length-1,u,l=[];s?(l=Array.from({length:o},(k,S)=>S),l[a]=o-1,l[o-1]=a,u=e.compute(gt(n,l),{inputs:[n],outputs:[-1]})[0]):u=n;let d=u.dims,c=d[o-1],p=i/c,f=He(c),m=c/f,y=64;p===1&&(y=256);let w=(k,S)=>S===4?`max(max(${k}.x, ${k}.y), max(${k}.z, ${k}.w))`:S===2?`max(${k}.x, ${k}.y)`:S===3?`max(max(${k}.x, ${k}.y), ${k}.z)`:k,b=Y("x",u.dataType,u.dims,f),x=de("result",u.dataType,u.dims,f),M=b.type.value,v=Ze(u.dataType)==="f32"?`var threadMax = ${M}(-3.4028234663852886e+38f);`:`var threadMax = ${M}(-65504.0h);`,I=k=>`
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
          rowSumShared = ${M}(${rn("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${M}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:p},programUniforms:[{type:6,data:m}]}),getShaderSource:I},{inputs:[u],outputs:[s?-1:0]})[0];s&&e.compute(gt(T,l),{inputs:[T]})},Ef=(e,t)=>{Mf(e.inputs),If(e,t)},Tf=e=>Re({axis:e.axis})}),da,kf,Cf,Af,Rf,rw=ee(()=>{we(),_e(),xe(),da=e=>Array.from(e.getBigInt64Array(),Number),kf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(da(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Cf=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Af=(e,t)=>{let n=e[0].dims,r=t??da(e[1]),i=Cf(n,r),o=q.size(i),a=e[0].dataType,s=Y("input",a,n.length),u=de("output",a,i.length),l=d=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...fe(e[0].dims,i)]}),getShaderSource:l}},Rf=e=>{kf(e.inputs),e.compute(Af(e.inputs),{inputs:[0]})}}),Of,Nf,zf,iw=ee(()=>{we(),_e(),xe(),Of=(e,t,n,r,i)=>{let o=de("output_data",i,n.length,4),a=Y("a_data",t[1].dataType,t[1].dims.length,4),s=Y("b_data",t[2].dataType,t[2].dims.length,4),u=Y("c_data",t[0].dataType,t[0].dims.length,4),l,d=(c,p,f)=>`select(${p}, ${c}, ${f})`;if(!r)l=o.setByOffset("global_idx",d(a.getByOffset("global_idx"),s.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(p,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,w=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
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
      }`},Nf=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,o=!(q.areEqual(t,n)&&q.areEqual(n,r)),a=t,s=q.size(t);if(o){let l=Wn.calcShape(Wn.calcShape(t,n,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");a=l,s=q.size(a)}let u=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Of(l,e,a,o,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:u},...fe(r,t,n,a)]})}},zf=e=>{e.compute(Nf(e.inputs))}}),Bf,ow=ee(()=>{_y(),Eo(),by(),xy(),$y(),vy(),Sy(),ky(),Ay(),Ry(),Oy(),Ny(),zy(),By(),Py(),Dy(),Uy(),Ly(),Fy(),Gy(),Wy(),qy(),Vy(),Hy(),jy(),jh(),Ky(),Yy(),Xy(),Zy(),Qy(),So(),Jy(),rp(),ew(),tw(),nw(),ep(),rw(),on(),Ao(),iw(),Bf=new Map([["Abs",[mc]],["Acos",[gc]],["Acosh",[yc]],["Add",[id]],["ArgMax",[ec,Io]],["ArgMin",[Jl,Io]],["Asin",[wc]],["Asinh",[_c]],["Atan",[bc]],["Atanh",[xc]],["Attention",[ac]],["AveragePool",[Op,Rp]],["BatchNormalization",[cc]],["BiasAdd",[pc]],["BiasSplitGelu",[td]],["Cast",[vc,$c]],["Ceil",[Ic]],["Clip",[Mc]],["Concat",[wd,_d]],["Conv",[qo,Go]],["ConvTranspose",[Hd,Wd]],["Cos",[Ec]],["Cosh",[Tc]],["CumSum",[Kd,Yd]],["DepthToSpace",[Jd,eh]],["DequantizeLinear",[Gp,Wp]],["Div",[od]],["Einsum",[ah,sh]],["Elu",[kc,hr]],["Equal",[ad]],["Erf",[Cc]],["Exp",[Ac]],["Expand",[dh]],["FastGelu",[ph]],["Floor",[Rc]],["FusedConv",[qo,Go]],["Gather",[yh,gh]],["GatherElements",[Th,Eh]],["GatherBlockQuantized",[vh,Sh]],["GatherND",[_h,bh]],["Gelu",[Oc]],["Gemm",[Rh,Ah]],["GlobalAveragePool",[zp,Np]],["GlobalMaxPool",[Up,Dp]],["Greater",[cd]],["GreaterOrEqual",[hd]],["GridSample",[Fh,Gh]],["GroupQueryAttention",[sp]],["HardSigmoid",[Fc,Lc]],["InstanceNormalization",[cp]],["LayerNormalization",[pp]],["LeakyRelu",[Nc,hr]],["Less",[dd]],["LessOrEqual",[pd]],["Log",[Yc]],["MatMul",[mp]],["MatMulNBits",[_p,bp]],["MaxPool",[Bp,Pp]],["Mul",[sd]],["MultiHeadAttention",[Hh,qh]],["Neg",[Bc]],["Not",[zc]],["Pad",[kp]],["Pow",[ud]],["QuickGelu",[Qc,hr]],["Range",[Hp]],["Reciprocal",[Pc]],["ReduceMin",[Kl]],["ReduceMean",[Wl]],["ReduceMax",[jl]],["ReduceSum",[Xl]],["ReduceProd",[Yl]],["ReduceL1",[ql]],["ReduceL2",[Vl]],["ReduceLogSum",[Ql]],["ReduceLogSumExp",[Hl]],["ReduceSumSquare",[Zl]],["Relu",[Dc]],["Resize",[ff,mf]],["RotaryEmbedding",[np]],["ScatterND",[Xp,Yp]],["Sigmoid",[Uc]],["Sin",[Gc]],["Sinh",[Wc]],["Slice",[vf,Sf]],["SkipLayerNormalization",[wf]],["Split",[Qh,Jh]],["Sqrt",[qc]],["Softmax",[Ef,Tf]],["Sub",[ld]],["Tan",[Vc]],["Tanh",[Hc]],["ThresholdedRelu",[Kc,hr]],["Tile",[Rf]],["Transpose",[cl,dl]],["Where",[zf]]])}),Pf,aw=ee(()=>{yt(),Ht(),xe(),Pf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){zt(e.programInfo.name);let o=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let l of t)s.push({binding:s.length,resource:{buffer:l.buffer}});for(let l of n)s.push({binding:s.length,resource:{buffer:l.buffer}});i&&s.push({binding:s.length,resource:i});let u=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),vt(e.programInfo.name)}dispose(){}build(e,t){zt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{n.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let i=il(t,this.backend.device.limits),o=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${o}`,s=n.createShaderModule({code:a,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:s,entryPoint:"main"},layout:"auto",label:e.name});return vt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let o=t*n*r,a=Math.ceil(Math.sqrt(o));if(a>i){if(a=Math.ceil(Math.cbrt(o)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Df={};Ln(Df,{WebGpuBackend:()=>Gf});var Uf,Lf,Ff,Gf,sw=ee(()=>{yt(),we(),Ht(),qu(),yy(),ow(),aw(),Uf=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let o=e[r].dims.length;n.push(`${i};${o}`);break}case"dims":{let o=e[r].dims.join(",");n.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Lf=(e,t,n)=>{var i,o;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Uf(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Ff=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Gf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=s=>t.features.has(s)&&n.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let o=t,a=t.info??(typeof o.requestAdapterInfo=="function"?await o.requestAdapterInfo():void 0);this.adapterInfo=new Ff(a),this.gpuDataManager=el(this),this.programManager=new Pf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ao(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;zt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],a=o.kernelId,s=this.kernels.get(a),u=s.kernelType,l=s.kernelName,d=o.programName,c=o.inputTensorViews,p=o.outputTensorViews,f=t[i*2],m=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=f);let y=Number(f-this.queryTimeBase),w=Number(m-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(b=>({dims:b.dims,dataType:Vt(b.dataType)})),outputsMetadata:p.map(b=>({dims:b.dims,dataType:Vt(b.dataType)})),kernelId:a,kernelType:u,kernelName:l,programName:d,startTime:y,endTime:w});else{let b="";c.forEach((M,v)=>{b+=`input[${v}]: [${M.dims}] | ${Vt(M.dataType)}, `});let x="";p.forEach((M,v)=>{x+=`output[${v}]: [${M.dims}] | ${Vt(M.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${l}|${d}" ${b}${x}start time: ${y} ns, execution time: ${w-y} ns`)}Ur("GPU",`${d}::${f}::${m}`)}e.unmap(),this.pendingQueries.delete(e)}),vt()}run(e,t,n,r,i,o){zt(e.name);let a=[];for(let x=0;x<t.length;++x){let M=t[x].data;if(M===0)continue;let v=this.gpuDataManager.get(M);if(!v)throw new Error(`no GPU data for input: ${M}`);a.push(v)}let{outputs:s,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=n.length===0?s.map((x,M)=>M):n;if(d.length!==s.length)throw new Error(`Output size ${d.length} must be equal to ${s.length}.`);let c=[],p=[];for(let x=0;x<s.length;++x){if(!Number.isInteger(d[x])||d[x]<-3||d[x]>=o)throw new Error(`Invalid output index: ${d[x]}`);if(d[x]===-3)continue;let M=d[x]===-1,v=d[x]===-2,I=M||v?i(s[x].dataType,s[x].dims):r(d[x],s[x].dataType,s[x].dims);if(c.push(I),I.data===0)continue;let T=this.gpuDataManager.get(I.data);if(!T)throw new Error(`no GPU data for output: ${I.data}`);if(M&&this.temporaryData.push(T),v){let k=this.kernelPersistentData.get(this.currentKernelId);k||(k=[],this.kernelPersistentData.set(this.currentKernelId,k)),k.push(T)}p.push(T)}if(a.length!==t.length||p.length!==c.length){if(p.length===0)return vt(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let x=0,M=[];l.forEach(k=>{let S=typeof k.data=="number"?[k.data]:k.data;if(S.length===0)return;let A=k.type===10?2:4,N,U;k.type===10?(U=S.length>4?16:S.length>2?8:S.length*A,N=S.length>4?16:A*S.length):(U=S.length<=2?S.length*A:16,N=16),x=Math.ceil(x/U)*U,M.push(x);let V=k.type===10?8:4;x+=S.length>4?Math.ceil(S.length/V)*N:S.length*A});let v=16;x=Math.ceil(x/v)*v;let I=new ArrayBuffer(x);l.forEach((k,S)=>{let A=M[S],N=typeof k.data=="number"?[k.data]:k.data;if(k.type===6)new Int32Array(I,A,N.length).set(N);else if(k.type===12)new Uint32Array(I,A,N.length).set(N);else if(k.type===10)new Uint16Array(I,A,N.length).set(N);else if(k.type===1)new Float32Array(I,A,N.length).set(N);else throw new Error(`Unsupported uniform type: ${Vt(k.type)}`)});let T=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,I,0,x),this.gpuDataManager.release(T.id),f={offset:0,size:x,buffer:T.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,w=Lf(e,t,y),b=this.programManager.getArtifact(w);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(w,b),Ee("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let x=0;x<l.length;x++){let M=l[x],v=M.type,I=typeof M.data=="number"?1:M.data.length,[T,k]=b.uniformVariablesInfo[x];if(v!==T||I!==k)throw new Error(`Uniform variable ${x} mismatch: expect type ${T} with size ${k}, got type ${v} with size ${I} in program "${b.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(b,a,p,m,f),vt(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Bf.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,o=r.kernelName,a=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${i}] ${o}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,s[1]),0}catch(l){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${o}" failed. ${l}`)),1}finally{u&&n.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${i}] ${o}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let o=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,o);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await _o(this,e,t);return so(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(o.computePipeline),i.setBindGroup(0,o.bindGroup),i.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Wf={};Ln(Wf,{init:()=>Vf});var ri,qf,Vf,uw=ee(()=>{we(),Ht(),_e(),gy(),ri=class j0{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new j0(this.module,this.dataType,this.data,t)}},qf=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,o));let a=Number(e.getValue(r*i++,o));this.outputCount=Number(e.getValue(r*i++,o)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,o));let s=[];for(let u=0;u<a;u++){let l=Number(e.getValue(r*i++,o)),d=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,o)),p=[];for(let f=0;f<c;f++)p.push(Number(e.getValue(r*i++,o)));s.push(new ri(e,l,d,p))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(s=>typeof s=="number"?this.inputs[s]:s))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(s,u,l)=>new ri(this.module,u,this.output(s,l),l),o=(s,u)=>{let l=vn(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new ri(this.module,s,d,u)};return this.backend.run(e,n,r,i,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(o+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Vf=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(sw(),or(Df)).WebGpuBackend,a=new o;await a.initialize(n,r),i("webgpu",[a,s=>a.alloc(Number(s)),s=>a.free(s),(s,u,l,d=!1)=>{if(d)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(u)}, size=${Number(l)}`),a.memcpy(Number(s),Number(u));else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(l));a.upload(Number(u),c)}},async(s,u,l)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${u}, size=${l}`),await a.download(Number(s),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(s,u,l)=>a.createKernel(s,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),s=>a.releaseKernel(s),(s,u,l,d)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${s}, contextDataOffset=${u}`);let c=new qf(t,a,Number(u));return a.computeKernel(Number(s),c,d)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let o=new Xu(n);i("webnn",[o,()=>o.reserveTensorId(),a=>o.releaseTensorId(a),async(a,s,u,l,d)=>o.ensureTensor(a,s,u,l,d),(a,s)=>{o.uploadTensor(a,s)},async(a,s)=>o.downloadTensor(a,s),(a,s)=>o.registerMLContext(a,s),!!n.trace])}}}),Hf,ha,pa,an,jf,fa,ii,ma,ga,ya,wa,_a,ba,Kf=ee(()=>{yt(),py(),fy(),we(),bn(),to(),Nu(),Hf=(e,t)=>{Fe()._OrtInit(e,t)!==0&&Oe("Can't initialize onnxruntime.")},ha=async e=>{Hf(e.wasm.numThreads,qr(e.logLevel))},pa=async(e,t)=>{var r,i;(i=(r=Fe()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(uw(),or(Wf)).init;t==="webgpu"&&await o("webgpu",Fe(),e,n),t==="webnn"&&await o("webnn",Fe(),e)}},an=new Map,jf=e=>{let t=Fe(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Oe("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(i,o)),Number(t.getValue(i+r,o))]}finally{t.stackRestore(n)}},fa=(e,t)=>{let n=Fe(),r=n.stackSave(),i=0;try{let o=n.PTR_SIZE,a=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,a,a+o)!==0&&Oe("Can't get session input/output metadata.");let s=Number(n.getValue(a,"*"));i=Number(n.getValue(a+o,"*"));let u=n.HEAP32[i/4];if(u===0)return[s,0];let l=n.HEAPU32[i/4+1],d=[];for(let c=0;c<l;c++){let p=Number(n.getValue(i+8+c*o,"*"));d.push(p!==0?n.UTF8ToString(p):Number(n.getValue(i+8+(c+l)*o,"*")))}return[s,u,d]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},ii=e=>{let t=Fe(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ma=async(e,t)=>{var c,p,f,m;let n,r,i=Fe();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=ii(e);let o=0,a=0,s=0,u=[],l=[],d=[];try{if([a,u]=await Ou(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let S=[];for(let A of t.externalData){let N=typeof A=="string"?A:A.path;S.push(oo(typeof A=="string"?A:A.data).then(U=>{i.mountExternalData(N,U)}))}await Promise.all(S)}for(let S of(t==null?void 0:t.executionProviders)??[])if((typeof S=="string"?S:S.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof S!="string"){let A=S,N=A==null?void 0:A.context,U=A==null?void 0:A.gpuDevice,V=A==null?void 0:A.deviceType,F=A==null?void 0:A.powerPreference;N?i.currentContext=N:U?i.currentContext=await i.webnnCreateMLContext(U):i.currentContext=await i.webnnCreateMLContext({deviceType:V,powerPreference:F})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(n,r,a),(c=i.webgpuOnCreateSession)==null||c.call(i,o),o===0&&Oe("Can't create a session."),(p=i.jsepOnCreateSession)==null||p.call(i),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[y,w]=jf(o),b=!!(t!=null&&t.enableGraphCapture),x=[],M=[],v=[],I=[],T=[];for(let S=0;S<y;S++){let[A,N,U]=fa(o,S);A===0&&Oe("Can't get an input name."),l.push(A);let V=i.UTF8ToString(A);x.push(V),v.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:Vt(N),shape:U})}for(let S=0;S<w;S++){let[A,N,U]=fa(o,S+y);A===0&&Oe("Can't get an output name."),d.push(A);let V=i.UTF8ToString(A);M.push(V),I.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:Vt(N),shape:U});{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){T.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((f=t==null?void 0:t.preferredOutputLocation)==null?void 0:f[V])??"cpu",O=i.webnnIsGraphOutput;if(F==="cpu"&&O&&O(o,V)){T.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if(b&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);T.push(F)}}let k=null;return T.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(o),s===0&&Oe("Can't create IO binding."),k={handle:s,outputPreferredLocations:T,outputPreferredLocationsEncoded:T.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>io(S))}),an.set(o,[o,l,d,k,b,!1]),[o,x,M,v,I]}catch(y){throw l.forEach(w=>i._OrtFree(w)),d.forEach(w=>i._OrtFree(w)),s!==0&&i._OrtReleaseBinding(s)!==0&&Oe("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&Oe("Can't release session."),y}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&Oe("Can't release session options."),u.forEach(y=>i._free(y)),(m=i.unmountExternalData)==null||m.call(i)}},ga=e=>{var u,l,d;let t=Fe(),n=an.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,o,a,s]=n;a&&(s&&t._OrtClearBoundOutputs(a.handle)!==0&&Oe("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&Oe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(l=t.webnnOnReleaseSession)==null||l.call(t,e),(d=t.webgpuOnReleaseSession)==null||d.call(t,e),i.forEach(c=>t._OrtFree(c)),o.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Oe("Can't release session."),an.delete(e)},ya=async(e,t,n,r,i,o,a=!1)=>{if(!e){t.push(0);return}let s=Fe(),u=s.PTR_SIZE,l=e[0],d=e[1],c=e[3],p=c,f,m;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;m=vn($n(l),d);{let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(r,o,b,m)}}else if(c==="ml-tensor"){let b=e[2].mlTensor;m=vn($n(l),d);let x=s.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(r,b,$n(l),d)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=s._malloc(m),n.push(f);for(let x=0;x<b.length;x++){if(typeof b[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(f+x*u,St(b[x],n),"*")}}else{let x=s.webnnIsGraphInput,M=s.webnnIsGraphOutput;if(l!=="string"&&x&&M){let v=s.UTF8ToString(i);if(x(r,v)||M(r,v)){let I=$n(l);m=vn(I,d),p="ml-tensor";let T=s.webnnCreateTemporaryTensor,k=s.webnnUploadTensor;if(!T||!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let S=await T(r,I,d);k(S,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=S}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=s._malloc(m),n.push(f),s.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=s.stackSave(),w=s.stackAlloc(4*d.length);try{d.forEach((x,M)=>s.setValue(w+M*u,x,u===4?"i32":"i64"));let b=s._OrtCreateTensor($n(l),f,m,w,d.length,io(p));b===0&&Oe(`Can't create tensor for input/output. session=${r}, index=${o}.`),t.push(b)}finally{s.stackRestore(y)}},wa=async(e,t,n,r,i,o)=>{var V,F,O,H;let a=Fe(),s=a.PTR_SIZE,u=an.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],c=u[2],p=u[3],f=u[4],m=u[5],y=t.length,w=r.length,b=0,x=[],M=[],v=[],I=[],T=[],k=a.stackSave(),S=a.stackAlloc(y*s),A=a.stackAlloc(y*s),N=a.stackAlloc(w*s),U=a.stackAlloc(w*s);try{[b,x]=Tu(o),wn("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)await ya(n[W],M,I,e,d[t[W]],t[W],f);for(let W=0;W<w;W++)await ya(i[W],v,I,e,c[r[W]],y+r[W],f);_n("wasm prepareInputOutputTensor");for(let W=0;W<y;W++)a.setValue(S+W*s,M[W],"*"),a.setValue(A+W*s,d[t[W]],"*");for(let W=0;W<w;W++)a.setValue(N+W*s,v[W],"*"),a.setValue(U+W*s,c[r[W]],"*");if(p&&!m){let{handle:W,outputPreferredLocations:z,outputPreferredLocationsEncoded:R}=p;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);wn("wasm bindInputsOutputs");for(let B=0;B<y;B++){let L=t[B];await a._OrtBindInput(W,d[L],M[B])!==0&&Oe(`Can't bind input[${B}] for session=${e}.`)}for(let B=0;B<w;B++){let L=r[B];(V=i[B])!=null&&V[3]?(T.push(v[B]),a._OrtBindOutput(W,c[L],v[B],0)!==0&&Oe(`Can't bind pre-allocated output[${B}] for session=${e}.`)):a._OrtBindOutput(W,c[L],0,R[L])!==0&&Oe(`Can't bind output[${B}] to ${z[B]} for session=${e}.`)}_n("wasm bindInputsOutputs"),an.set(e,[l,d,c,p,f,!0])}(F=a.jsepOnRunStart)==null||F.call(a,l),(O=a.webnnOnRunStart)==null||O.call(a,l);let X;p?X=await a._OrtRunWithBinding(l,p.handle,w,N,b):X=await a._OrtRun(l,A,S,y,U,w,N,b),X!==0&&Oe("failed to call OrtRun().");let J=[],he=[];wn("wasm ProcessOutputTensor");for(let W=0;W<w;W++){let z=Number(a.getValue(N+W*s,"*"));if(z===v[W]||T.includes(v[W])){J.push(i[W]),z!==v[W]&&a._OrtReleaseTensor(z)!==0&&Oe("Can't release tensor.");continue}let R=a.stackSave(),B=a.stackAlloc(4*s),L=!1,G,Z=0;try{a._OrtGetTensorData(z,B,B+s,B+2*s,B+3*s)!==0&&Oe(`Can't access output tensor data on index ${W}.`);let ie=s===4?"i32":"i64",te=Number(a.getValue(B,ie));Z=a.getValue(B+s,"*");let ye=a.getValue(B+s*2,"*"),Me=Number(a.getValue(B+s*3,ie)),Ne=[];for(let ze=0;ze<Me;ze++)Ne.push(Number(a.getValue(ye+ze*s,ie)));a._OrtFree(ye)!==0&&Oe("Can't free memory for tensor dims.");let Pe=Ne.reduce((ze,ge)=>ze*ge,1);G=Vt(te);let ut=p==null?void 0:p.outputPreferredLocations[r[W]];if(G==="string"){if(ut==="gpu-buffer"||ut==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ze=[];for(let ge=0;ge<Pe;ge++){let lt=a.getValue(Z+ge*s,"*"),Zt=a.getValue(Z+(ge+1)*s,"*"),Qe=ge===Pe-1?void 0:Zt-lt;ze.push(a.UTF8ToString(lt,Qe))}J.push([G,Ne,ze,"cpu"])}else if(ut==="gpu-buffer"&&Pe>0){let ze=a.jsepGetBuffer;if(!ze)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=ze(Z),lt=vn(te,Pe);if(lt===void 0||!no(G))throw new Error(`Unsupported data type: ${G}`);L=!0,J.push([G,Ne,{gpuBuffer:ge,download:a.jsepCreateDownloader(ge,lt,G),dispose:()=>{a._OrtReleaseTensor(z)!==0&&Oe("Can't release tensor.")}},"gpu-buffer"])}else if(ut==="ml-tensor"&&Pe>0){let ze=a.webnnEnsureTensor,ge=a.webnnIsGraphInputOutputTypeSupported;if(!ze||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(vn(te,Pe)===void 0||!ro(G))throw new Error(`Unsupported data type: ${G}`);if(!ge(e,G,!1))throw new Error(`preferredLocation "ml-tensor" for ${G} output is not supported by current WebNN Context.`);let lt=await ze(e,Z,te,Ne,!1);L=!0,J.push([G,Ne,{mlTensor:lt,download:a.webnnCreateMLTensorDownloader(Z,G),dispose:()=>{a.webnnReleaseTensorId(Z),a._OrtReleaseTensor(z)}},"ml-tensor"])}else if(ut==="ml-tensor-cpu-output"&&Pe>0){let ze=a.webnnCreateMLTensorDownloader(Z,G)(),ge=J.length;L=!0,he.push((async()=>{let lt=[ge,await ze];return a.webnnReleaseTensorId(Z),a._OrtReleaseTensor(z),lt})()),J.push([G,Ne,[],"cpu"])}else{let ze=Wr(G),ge=new ze(Pe);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(a.HEAPU8.subarray(Z,Z+ge.byteLength)),J.push([G,Ne,ge,"cpu"])}}finally{a.stackRestore(R),G==="string"&&Z&&a._free(Z),L||a._OrtReleaseTensor(z)}}p&&!f&&(a._OrtClearBoundOutputs(p.handle)!==0&&Oe("Can't clear bound outputs."),an.set(e,[l,d,c,p,f,!1]));for(let[W,z]of await Promise.all(he))J[W][2]=z;return _n("wasm ProcessOutputTensor"),J}finally{(H=a.webnnOnRunEnd)==null||H.call(a,l),a.stackRestore(k),M.forEach(X=>a._OrtReleaseTensor(X)),v.forEach(X=>a._OrtReleaseTensor(X)),I.forEach(X=>a._free(X)),b!==0&&a._OrtReleaseRunOptions(b),x.forEach(X=>a._free(X))}},_a=e=>{let t=Fe(),n=an.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Oe("Can't get an profile file name."),t._OrtFree(i)},ba=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),sn,dt,Hn,_r,br,oi,xa,ai,Cn,An,Yf,Xf,Zf,Qf,Jf,em,tm,nm,rm=ee(()=>{yt(),Kf(),bn(),Zi(),sn=()=>!!De.wasm.proxy&&typeof document<"u",Hn=!1,_r=!1,br=!1,ai=new Map,Cn=(e,t)=>{let n=ai.get(e);n?n.push(t):ai.set(e,[t])},An=()=>{if(Hn||!_r||br||!dt)throw new Error("worker not ready")},Yf=e=>{switch(e.data.type){case"init-wasm":Hn=!1,e.data.err?(br=!0,xa[1](e.data.err)):(_r=!0,xa[0]()),oi&&(URL.revokeObjectURL(oi),oi=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ai.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Xf=async()=>{if(!_r){if(Hn)throw new Error("multiple calls to 'initWasm()' detected.");if(br)throw new Error("previous call to 'initWasm()' failed.");if(Hn=!0,sn())return new Promise((e,t)=>{dt==null||dt.terminate(),vu().then(([n,r])=>{try{dt=r,dt.onerror=o=>t(o),dt.onmessage=Yf,xa=[e,t];let i={type:"init-wasm",in:De};!i.in.wasm.wasmPaths&&(n||ji)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),dt.postMessage(i),oi=n}catch(i){t(i)}},t)});try{await eo(De.wasm),await ha(De),_r=!0}catch(e){throw br=!0,e}finally{Hn=!1}}},Zf=async e=>{if(sn())return An(),new Promise((t,n)=>{Cn("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:De}};dt.postMessage(r)});await pa(De,e)},Qf=async e=>sn()?(An(),new Promise((t,n)=>{Cn("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};dt.postMessage(r,[e.buffer])})):ii(e),Jf=async(e,t)=>{if(sn()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return An(),new Promise((n,r)=>{Cn("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),dt.postMessage(i,o)})}else return ma(e,t)},em=async e=>{if(sn())return An(),new Promise((t,n)=>{Cn("release",[t,n]);let r={type:"release",in:e};dt.postMessage(r)});ga(e)},tm=async(e,t,n,r,i,o)=>{if(sn()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return An(),new Promise((a,s)=>{Cn("run",[a,s]);let u=n,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:o}};dt.postMessage(l,ba(u))})}else return wa(e,t,n,r,i,o)},nm=async e=>{if(sn())return An(),new Promise((t,n)=>{Cn("end-profiling",[t,n]);let r={type:"end-profiling",in:e};dt.postMessage(r)});_a(e)}}),$a,im,om,lw=ee(()=>{yt(),rm(),we(),Wi(),Nu(),$a=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},im=e=>{switch(e[3]){case"cpu":return new We(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!no(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return We.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!ro(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return We.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},om=class{async fetchModelAndCopyToWasmMemory(e){return Qf(await oo(e))}async loadModel(e,t){zt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Jf(n,t),vt()}async dispose(){return em(this.sessionId)}async run(e,t,n){zt();let r=[],i=[];Object.entries(e).forEach(c=>{let p=c[0],f=c[1],m=this.inputNames.indexOf(p);if(m===-1)throw new Error(`invalid input '${p}'`);r.push(f),i.push(m)});let o=[],a=[];Object.entries(t).forEach(c=>{let p=c[0],f=c[1],m=this.outputNames.indexOf(p);if(m===-1)throw new Error(`invalid output '${p}'`);o.push(f),a.push(m)});let s=r.map((c,p)=>$a(c,()=>`input "${this.inputNames[i[p]]}"`)),u=o.map((c,p)=>c?$a(c,()=>`output "${this.outputNames[a[p]]}"`):null),l=await tm(this.sessionId,i,s,a,u,n),d={};for(let c=0;c<l.length;c++)d[this.outputNames[a[c]]]=o[c]??im(l[c]);return vt(),d}startProfiling(){}endProfiling(){nm(this.sessionId)}}}),am={};Ln(am,{OnnxruntimeWebAssemblyBackend:()=>Sa,initializeFlags:()=>va,wasmBackend:()=>sm});var va,Sa,sm,cw=ee(()=>{yt(),rm(),lw(),va=()=>{(typeof De.wasm.initTimeout!="number"||De.wasm.initTimeout<0)&&(De.wasm.initTimeout=0);let e=De.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),De.wasm.simd=!1),typeof De.wasm.proxy!="boolean"&&(De.wasm.proxy=!1),typeof De.wasm.trace!="boolean"&&(De.wasm.trace=!1),typeof De.wasm.numThreads!="number"||!Number.isInteger(De.wasm.numThreads)||De.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)De.wasm.numThreads=1;else{let t=typeof navigator>"u"?Y0("node:os").cpus().length:navigator.hardwareConcurrency;De.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Sa=class{async init(e){va(),await Xf(),await Zf(e)}async createInferenceSessionHandler(e,t){let n=new om;return await n.loadModel(e,t),n}},sm=new Sa});yt(),yt(),yt();var dw="1.27.0";{let e=(cw(),or(am)).wasmBackend;Fn("webgpu",e,5),Fn("webnn",e,5),Fn("cpu",e,10),Fn("wasm",e,10)}Object.defineProperty(De.versions,"web",{value:dw,enumerable:!0});/**
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
 */function st(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function jn(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function um(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,s)=>a-s),r=t/100*(n.length-1),i=Math.floor(r),o=Math.ceil(r);return i===o?n[i]:n[i]*(o-r)+n[o]*(r-i)}const hw=114;function pw(e,t,n,r=1){const i=Math.min(n*r/e,n*r/t),o=Math.round(e*i),a=Math.round(t*i);return{scale:i,padX:Math.floor((n-o)/2),padY:Math.floor((n-a)/2),resizedWidth:o,resizedHeight:a}}function Ma(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const c=(d+.5)*l-.5,p=Math.max(0,Math.min(i-1,Math.floor(c))),f=Math.min(i-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let y=0;y<t;y++){const w=(y+.5)*u-.5,b=Math.max(0,Math.min(r-1,Math.floor(w))),x=Math.min(r-1,b+1),M=Math.max(0,Math.min(1,w-b)),v=(p*r+b)*o,I=(p*r+x)*o,T=(f*r+b)*o,k=(f*r+x)*o,S=(d*t+y)*3;for(let A=0;A<3;A++){const N=a[v+A]*(1-M)+a[I+A]*M,U=a[T+A]*(1-M)+a[k+A]*M;s[S+A]=Math.min(255,Math.max(0,Math.round(N*(1-m)+U*m)))}}}return s}function Kn(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n;for(let d=0;d<n;d++){const c=d*l,p=Math.min((d+1)*l,i);for(let f=0;f<t;f++){const m=f*u,y=Math.min((f+1)*u,r);let w=0,b=0,x=0,M=0;for(let I=Math.floor(c);I<p;I++){const T=Math.min(I+1,p)-Math.max(I,c);if(!(T<=0))for(let k=Math.floor(m);k<y;k++){const S=Math.min(k+1,y)-Math.max(k,m);if(S<=0)continue;const A=S*T,N=(I*r+k)*o;w+=a[N]*A,b+=a[N+1]*A,x+=a[N+2]*A,M+=A}}const v=(d*t+f)*3;s[v]=Math.min(255,Math.max(0,st(w/M))),s[v+1]=Math.min(255,Math.max(0,st(b/M))),s[v+2]=Math.min(255,Math.max(0,st(x/M)))}}return s}function lm(e){const n=((-.75*(e+1)- -3.75)*(e+1)+-6)*(e+1)- -3,r=((-.75+2)*e-(-.75+3))*e*e+1,i=((-.75+2)*(1-e)-(-.75+3))*(1-e)*(1-e)+1;return[n,r,i,1-n-r-i]}function Ia(e,t,n){const{width:r,height:i,channels:o,data:a}=e,s=new Uint8Array(t*n*3),u=r/t,l=i/n,d=p=>Math.max(0,Math.min(r-1,p)),c=p=>Math.max(0,Math.min(i-1,p));for(let p=0;p<n;p++){const f=(p+.5)*l-.5,m=Math.floor(f),y=lm(f-m);for(let w=0;w<t;w++){const b=(w+.5)*u-.5,x=Math.floor(b),M=lm(b-x),v=(p*t+w)*3;for(let I=0;I<3;I++){let T=0;for(let k=0;k<4;k++){const S=c(m-1+k)*r;let A=0;for(let N=0;N<4;N++)A+=M[N]*a[(S+d(x-1+N))*o+I];T+=y[k]*A}s[v+I]=Math.min(255,Math.max(0,Math.round(T)))}}}return s}function Ea(e,t,n=1){const r=pw(e.width,e.height,t,n),i=Ma(e,r.resizedWidth,r.resizedHeight),o=t*t,a=new Float32Array(3*o).fill(hw/255);for(let s=0;s<r.resizedHeight;s++){const u=(s+r.padY)*t+r.padX,l=s*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const c=(l+d)*3,p=u+d;a[p]=i[c]/255,a[o+p]=i[c+1]/255,a[2*o+p]=i[c+2]/255}}return{tensor:a,params:r}}function Ta(e,t,n,r){const i=[],o=Math.floor(e.length/6);for(let a=0;a<o;a++){const s=e[a*6],u=e[a*6+1],l=e[a*6+2],d=e[a*6+3],c=e[a*6+4],p=e[a*6+5];if(c<n)continue;const f=Math.round(p);if(f<0||f>=r)continue;const m=(s-t.padX)/t.scale,y=(u-t.padY)/t.scale,w=(l-t.padX)/t.scale,b=(d-t.padY)/t.scale;i.push({classIndex:f,confidence:c,box:[Math.trunc(m),Math.trunc(y),Math.trunc(w-m),Math.trunc(b-y)],boxFloat:[m,y,w-m,b-y]})}return i}const xr=.8,cm=.65,fw=110,mw=1280;function gw(e,t,n){if(n==null)return xr;if(n.length===0)return cm;const r=Math.max(e,t);if(!(r>0))return xr;const i=mw/r,o=n.filter(u=>Array.isArray(u.box)||u.box!==void 0).map(u=>Math.sqrt(Number(u.box[2])**2+Number(u.box[3])**2)*i).filter(u=>Number.isFinite(u)).sort((u,l)=>u-l);if(o.length===0)return xr;const a=o.length;return(a%2===1?o[(a-1)/2]:(o[a/2-1]+o[a/2])/2)>=fw?cm:xr}const dm=.25,hm=.6;function yw(e,t,n){const r=Math.trunc(Number(n[0])),i=Math.trunc(Number(n[1])),o=Math.trunc(Number(n[2])),a=Math.trunc(Number(n[3]));if(![r,i,o,a].every(b=>Number.isFinite(b)))return null;const s=o-r,u=a-i;if(s<=0||u<=0)return null;const l=Math.trunc(s*(s>=u?dm:hm)),d=Math.trunc(u*(s>=u?hm:dm)),c=Math.max(0,r-l),p=Math.max(0,i-d),f=Math.min(Math.trunc(e),o+l),m=Math.min(Math.trunc(t),a+d),y=f-c,w=m-p;return y<=0||w<=0?null:{x:c,y:p,width:y,height:w}}const ww=3,_w=.15,bw=.6;function ka(e,t){return Math.hypot(Number(e[0])-Number(t[0]),Number(e[1])-Number(t[1]))}function xw(e){const t=e.filter(i=>i&&Number.isFinite(Number(i[0]))&&Number.isFinite(Number(i[1])));if(t.length===0)return null;let n=0,r=0;for(const i of t)n+=Number(i[0]),r+=Number(i[1]);return[n/t.length,r/t.length]}function $w(e,t,n){try{if(n==null)return null;const r=Math.trunc(Number(n));if(!Number.isFinite(r)||r===0||!e||e.length<2)return null;const i=[Number(e[0][0]),Number(e[0][1])],o=[Number(e[1][0]),Number(e[1][1])];if(![...i,...o].every(v=>Number.isFinite(v)))return null;const a=ka(i,o);if(!(a>0))return null;const s=[];for(const v of t??[]){const I=Math.trunc(Number(v.n));if(!Number.isFinite(I)||I<ww)continue;const T=xw(v.poly);T!==null&&s.push({owner:v.owner,c:T,n:I,d0:0,d1:0,ecart:0})}if(s.length<2)return null;s.sort((v,I)=>I.n-v.n);const u=s.slice(0,2);let l=!1;s.length>2&&u[1].n>0&&(l=s[2].n/u[1].n>bw);for(const v of u)v.d0=ka(v.c,i),v.d1=ka(v.c,o),v.ecart=Math.abs(v.d0-v.d1);const d=[...u].sort((v,I)=>I.ecart-v.ecart),c=d[0],p=d[1],f=c.d0<c.d1?0:1,m=r>0?1:0,y=f===m?c:p,w=f===m?p:c,b=f===1?c.owner:p.owner,x=f===1?p.owner:c.owner,M=c.ecart/a<_w;return{favoredOwner:w.owner,threatenedOwner:y.owner,ownerAtEnd0:x,ownerAtEnd1:b,distance:Math.abs(r),ambiguous:!!(M||l)}}catch{return null}}function vw(e){if(!e)return null;const t=e.ownerAtEnd1,n=e.ownerAtEnd0;return!t||!n||t===n?null:{left:n,right:t}}const Sw=.6;function pm(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++){if(e[o*6+4]<n)continue;const s=(e[o*6]-t.padX)/t.scale,u=(e[o*6+1]-t.padY)/t.scale,l=(e[o*6+2]-t.padX)/t.scale,d=(e[o*6+3]-t.padY)/t.scale,c=st((s+l)/2),p=st((u+d)/2),f=st((l-s+(d-u))/4);f>=1&&r.push({cx:c,cy:p,r:f})}return r}function Mw(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Sw*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Iw(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(jn(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),o=Math.floor(r.cy/t);return i!==o?i-o:n.cx-r.cx})}function fm(e,t,n){const r=pm(e,t,n);return r.length===0?[]:Iw(Mw(r))}function Ew(e,t,n){return pm(e,t,n)}function $r(e,t,n){const r=[],i=Math.floor(e.length/6);for(let o=0;o<i;o++)e[o*6+4]<n||r.push([(e[o*6]-t.padX)/t.scale,(e[o*6+1]-t.padY)/t.scale,(e[o*6+2]-t.padX)/t.scale,(e[o*6+3]-t.padY)/t.scale]);return r}const Tw=.5,kw=.7,Cw=.55;function Ca(e){const t=e.map(([n,r,i,o])=>Math.min(i-n,o-r)).sort((n,r)=>n-r);return t[Math.floor(t.length/2)]||1}function mm(e){if(e.length===0)return[];const t=(Tw*Ca(e))**2,n=[];for(const i of e){const o=(i[0]+i[2])/2,a=(i[1]+i[3])/2,s=n.find(u=>(u.cx-o)**2+(u.cy-a)**2<=t);if(s===void 0)n.push({cx:o,cy:a,boxes:[i]});else{s.boxes.push(i);const u=s.boxes.length;s.cx=(s.cx*(u-1)+o)/u,s.cy=(s.cy*(u-1)+a)/u}}let r=n.map(({boxes:i})=>[Math.trunc(jn(i.map(o=>o[0]))),Math.trunc(jn(i.map(o=>o[1]))),Math.trunc(jn(i.map(o=>o[2]))),Math.trunc(jn(i.map(o=>o[3])))]);if(r.length>=2){const i=Ca(r),o=r.map(()=>!0);for(let a=0;a<r.length;a++)if(o[a])for(let s=a+1;s<r.length;s++){if(!o[s])continue;const u=r[a],l=r[s],d=Math.max(0,Math.min(u[2],l[2])-Math.max(u[0],l[0])),c=Math.max(0,Math.min(u[3],l[3])-Math.max(u[1],l[1])),p=d*c,f=(u[2]-u[0])*(u[3]-u[1]),m=(l[2]-l[0])*(l[3]-l[1]);if(p>=kw*Math.min(f,m)){const y=Math.abs(Math.min(u[2]-u[0],u[3]-u[1])-i),w=Math.abs(Math.min(l[2]-l[0],l[3]-l[1])-i);if(o[y<=w?s:a]=!1,!o[a])break}}r=r.filter((a,s)=>o[s])}if(r.length>=3){const i=Ca(r);r=r.filter(([o,a,s,u])=>Math.min(s-o,u-a)>=Cw*i)}return r}const gm=["brown","grey","blue","green","yellow","red","purple"],Aw={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"},Rw=.7;function ym(e){const t=e.map((i,o)=>o).sort((i,o)=>e[o].confidence-e[i].confidence),n=new Set,r=[];for(const i of t){const o=e[i],[a,s,u,l]=o.box;let d=!1;for(const c of r){const p=e[c];if(p.family!==o.family)continue;const[f,m,y,w]=p.box,b=Math.max(0,Math.min(a+u,f+y)-Math.max(a,f)),x=Math.max(0,Math.min(s+l,m+w)-Math.max(s,m)),M=Math.max(1,Math.min(u*l,y*w));if(b*x>=Rw*M){d=!0;break}}d?n.add(i):r.push(i)}return e.filter((i,o)=>!n.has(o))}function si(e,t,n){const r=Ta(e,t,n,gm.length).map(i=>{const o=gm[i.classIndex];return{color:o,family:Aw[o],box:i.box,confidence:i.confidence}});return ym(r)}const Ow=8,Nw=.8,wm=1.25;function zw(e){if(e.length<Ow)return[];const t=[],n=[];for(const a of e){const[,,s,u]=a.box;s>u*wm?t.push(a):u>s*wm&&n.push(a)}const[r,i,o]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Nw*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${o} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const Bw=2.25,_m=8;function Pw(e){if(e.length<_m)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,p)=>c-p),r=Bw*n[Math.floor(n.length/2)],i=r*r,o=e.map((c,p)=>p),a=c=>{for(;o[c]!==c;)o[c]=o[o[c]],c=o[c];return c};for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){const f=t[c][0]-t[p][0],m=t[c][1]-t[p][1];f*f+m*m<=i&&(o[a(c)]=a(p))}const s=new Map;for(let c=0;c<e.length;c++){const p=a(c);s.set(p,[...s.get(p)??[],c])}let u=[];for(const c of s.values())c.length>u.length&&(u=c);if(u.length<_m||u.length===e.length)return[];const l=new Set(u),d=e.map((c,p)=>p).filter(c=>!l.has(c));return d.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${d.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const it={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4},wonder:{onnx:"wonder_yolo.onnx",input:1280,conf:.3}};function Ct(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),o=r-i,a=r===0?0:Math.round(255*o/r);if(o===0)return{h:0,s:a,v:r};let s;return r===e?s=60*(t-n)/o:r===t?s=120+60*(n-e)/o:s=240+60*(e-t)/o,s<0&&(s+=360),{h:Math.round(s/2),s:a,v:r}}const Dw=.42,Uw=22,Lw=43,Fw=120,Gw=1.5,Ww=.72,qw=110,bm=3;function vr(e,t,n){const{width:r,height:i,channels:o,data:a}=e;if(r<4||i<4)return 0;const s=Math.floor(r/2),u=Math.floor(i/2),l=Math.trunc(Math.min(r,i)*Dw);if(l<1)return 0;let d=0;for(let c=0;c<i;c++)for(let p=0;p<r;p++){if((p-s)**2+(c-u)**2>l*l)continue;const f=(c*r+p)*o,m=a[f],y=a[f+1],w=a[f+2];!t&&m>=250&&y>=250&&w>=250||(n(m,y,w),d+=1)}return d}function Vw(e){let t=0,n=0,r=0,i=vr(e,!1,(o,a,s)=>{const u=Ct(o,a,s);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=vr(e,!0,(o,a,s)=>{const u=Ct(o,a,s);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function Hw(e){let t=0,n=0,r=vr(e,!1,(o,a)=>{t+=o,n+=a});if(r===0&&(r=vr(e,!0,(o,a)=>{t+=o,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function jw(e){let t=0;const n=vr(e,!0,(r,i,o)=>{t+=Ct(r,i,o).s});return n===0?null:t/n}function Kw(e){const t=Vw(e);if(t===null||t.s<=Uw)return 1;if(t.s>=Fw){const n=Hw(e);return n!==null&&n>=Gw?6:3}return t.s>=Lw?3:6}function Yw(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,s)=>a-s);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,s)=>e[a].r-e[s].r),o=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>o.get(a))}function Xw(e,t){const n=[...t];if(e.length<bm||t.length!==e.length)return n;const r=e.map(a=>jw(a)),i=r.filter(a=>a!==null);if(i.length<bm)return n;const o=jn(i);return o<=0||r.forEach((a,s)=>{a!==null&&n[s]!==1&&a<Ww*o&&a<qw&&(n[s]=1)}),n}function xm(e,t){const{cx:n,cy:r,r:i}=t,o=Math.max(0,n-i),a=Math.max(0,r-i),s=Math.min(e.width,n+i),u=Math.min(e.height,r+i),l=Math.max(0,s-o),d=Math.max(0,u-a),c=new Uint8Array(l*d*3);for(let p=0;p<d;p++)for(let f=0;f<l;f++){const m=(p*l+f)*3;if((f+o-n)**2+(p+a-r)**2<=i*i){const w=((p+a)*e.width+(f+o))*e.channels;c[m]=e.data[w],c[m+1]=e.data[w+1],c[m+2]=e.data[w+2]}else c[m]=255,c[m+1]=255,c[m+2]=255}return{width:l,height:d,channels:3,data:c}}function Zw(e,t){const n=t.map(o=>xm(e,o)),r=n.map(o=>Kw(o)),i=Yw(t,r);return Xw(n,i)}function Qw(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8Array(t*n);for(let a=0,s=0;a<o.length;a++,s+=r)o[a]=i[s]*4899+i[s+1]*9617+i[s+2]*1868+8192>>14;return{width:t,height:n,data:o}}function $m(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,o=e.height/n;for(let a=0;a<n;a++){const s=a*o,u=Math.min((a+1)*o,e.height);for(let l=0;l<t;l++){const d=l*i,c=Math.min((l+1)*i,e.width);let p=0,f=0;for(let m=Math.floor(s);m<u;m++){const y=Math.min(m+1,u)-Math.max(m,s);if(!(y<=0))for(let w=Math.floor(d);w<c;w++){const b=Math.min(w+1,c)-Math.max(w,d);b<=0||(p+=e.data[m*e.width+w]*b*y,f+=b*y)}}r[a*t+l]=Math.min(255,Math.max(0,st(p/f)))}}return{width:t,height:n,data:r}}function Jw(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const o=255/(n-t[r]),a=new Uint8Array(256);let s=0;for(let u=r+1;u<256;u++)s+=t[u],a[u]=Math.min(255,Math.max(0,st(s*o)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function e_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!0;for(let u=-1;u<=1&&s;u++)for(let l=-1;l<=1;l++){const d=a+l,c=o+u;if(!(d<0||d>=t||c<0||c>=n)&&r[c*t+d]===0){s=!1;break}}i[o*t+a]=s&&r[o*t+a]>0?255:0}return{width:t,height:n,data:i}}function t_(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let o=0;o<n;o++)for(let a=0;a<t;a++){let s=!1;for(let u=-1;u<=1&&!s;u++)for(let l=-1;l<=1;l++){const d=a+l,c=o+u;if(d>=0&&d<t&&c>=0&&c<n&&r[c*t+d]>0){s=!0;break}}i[o*t+a]=s?255:0}return{width:t,height:n,data:i}}function Aa(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),o=[],a=new Int32Array(t*n);let s=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let l=0,d=0;a[d++]=u,i[u]=s;let c=0,p=0,f=0;for(;l<d;){const m=a[l++],y=m%t,w=m/t|0;c+=1,p+=y,f+=w;for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++){if(x===0&&b===0)continue;const M=y+x,v=w+b;if(M<0||M>=t||v<0||v>=n)continue;const I=v*t+M;r[I]>0&&i[I]===0&&(i[I]=s,a[d++]=I)}}o[s]={area:c,centroidX:p/c,centroidY:f/c},s+=1}return{labels:i,stats:o}}function n_(e,t,n){return vm(Float32Array.from(e.data),e.width,t,n)}function vm(e,t,n,r){const i=new Float32Array(t*t),o=t/2,a=-n*Math.PI/180,s=Math.cos(a),u=Math.sin(a);for(let l=0;l<t;l++)for(let d=0;d<t;d++){const c=d-o,p=l-o,f=s*c-u*p+o,m=u*c+s*p+o,y=Math.floor(f),w=Math.floor(m),b=f-y,x=m-w,M=(T,k)=>T>=0&&T<t&&k>=0&&k<t?e[k*t+T]:r,v=M(y,w)*(1-b)+M(y+1,w)*b,I=M(y,w+1)*(1-b)+M(y+1,w+1)*b;i[l*t+d]=v*(1-x)+I*x}return i}const r_=.9,i_=.34,o_=[.55,.6,.66,.72],a_=22,s_=88,u_=35,Yn=28,Ra=4,l_=Array.from({length:15},(e,t)=>-21+t*3),Sm=[-2,0,2],c_=3,d_=.3;function h_(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function p_(e){let t=e.width,n=-1,r=e.height,i=-1,o=0;for(let y=0;y<e.height;y++)for(let w=0;w<e.width;w++)e.data[y*e.width+w]>0&&(o+=1,t=Math.min(t,w),n=Math.max(n,w),r=Math.min(r,y),i=Math.max(i,y));if(o<8)return null;const a=n-t+1,s=i-r+1,u=Math.max(s,a),l=new Uint8Array(u*u),d=Math.floor((u-a)/2),c=Math.floor((u-s)/2);for(let y=0;y<s;y++)for(let w=0;w<a;w++)l[(y+c)*u+(w+d)]=e.data[(y+r)*e.width+(w+t)];const p=Yn-2*Ra,f=$m({width:u,height:u,data:l},p,p),m=new Float32Array(Yn*Yn);for(let y=0;y<p;y++)for(let w=0;w<p;w++)m[(y+Ra)*Yn+(w+Ra)]=f.data[y*p+w]>110?1:0;return m}function f_(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(r/2),s=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*i_);if(u<4)return null;const l=a-u,d=s-u,c=2*u,p=2*u;if(c<6||p<6)return null;const f=new Int16Array(c*p),m=new Int16Array(c*p),y=new Int16Array(c*p),w=new Uint8Array(c*p),b=[],x=Math.min(c,p)/2;for(let W=0;W<c;W++)for(let z=0;z<p;z++){const R=((W+l)*n+(z+d))*i,{h:B,s:L,v:G}=Ct(o[R],o[R+1],o[R+2]),Z=W*p+z;f[Z]=B,m[Z]=L,y[Z]=G,Math.sqrt((z-p/2)**2+(W-c/2)**2)/x<=t&&(w[Z]=1,b.push(G))}if(b.length<16)return null;const M=um(b,55);let v=0,I=0,T=0;const k=W=>f[W]>=a_&&f[W]<=s_&&m[W]>=u_,S=W=>y[W]>=M&&m[W]<=95&&!k(W)&&w[W]===1;for(let W=0;W<c*p;W++)w[W]===1&&(T+=1,y[W]>=130&&!k(W)&&(v+=1),S(W)&&(I+=1));const A=v>.5*T&&I<.15*T,N=new Uint8Array(c*p);if(A){const W=um(b,45);for(let z=0;z<c*p;z++)N[z]=w[z]===1&&y[z]<=W?255:0}else for(let W=0;W<c*p;W++)N[W]=S(W)?255:0;const U={width:p,height:c,data:N},V=e_(U);let F=Aa(V),O=F;if(F.stats.length<=1&&(F=Aa(U),O=F,F.stats.length<=1))return null;const H=Math.min(c,p)/2;let X=0,J=-1;for(let W=1;W<O.stats.length;W++){const z=O.stats[W];if(z===void 0)continue;const R=Math.hypot(z.centroidX-p/2,z.centroidY-c/2)/H,B=z.area*(1-.6*Math.min(R,1));B>J&&(J=B,X=W)}if(X===0)return null;const he=new Uint8Array(c*p);for(let W=0;W<c*p;W++)he[W]=O.labels[W]===X?255:0;return p_(t_({width:p,height:c,data:he}))}function m_(e,t,n,r,i,o){const a=Yn;let s=0,u=0;for(let l=0;l<a;l++){const d=l-o;if(!(d<0||d>=a))for(let c=0;c<a;c++){const p=c-i;if(p<0||p>=a)continue;const f=e[d*a+p];f!==0&&(u+=f,s+=f*n[l*a+c])}}return s/(u+r-s+1e-6)}function g_(e,t){const n=t.reduce((i,o)=>i+o,0);let r=-1;for(const i of l_){const o=i===0?e:vm(e,Yn,i,0),a=o.reduce((s,u)=>s+u,0);for(const s of Sm)for(const u of Sm){const l=m_(o,a,t,n,s,u);l>r&&(r=l)}}return r}function y_(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of o_){const s=f_(e,a);if(s!==null)for(const{label:u,bits:l}of t)n.push([g_(s,l),u])}if(n.length===0)return[null,0];if(n.sort((a,s)=>s[0]-a[0]),n[0][0]<d_)return[null,0];const r=new Map;for(const[a,s]of n.slice(0,c_))r.set(s,(r.get(s)??0)+a);let i=0,o=-1;for(const[a,s]of r)s>o&&(o=s,i=a);return[i,n[0][0]]}const w_=2560,__=.3,b_=.5,x_=1.6,$_=3,v_=5;function S_(e){const t=Math.min(1,w_/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,o=new Float32Array(3*i),a=e.width/n,s=e.height/r;for(let u=0;u<r;u++){const l=(u+.5)*s-.5,d=Math.max(0,Math.min(e.height-1,Math.floor(l))),c=Math.min(e.height-1,d+1),p=Math.max(0,Math.min(1,l-d));for(let f=0;f<n;f++){const m=(f+.5)*a-.5,y=Math.max(0,Math.min(e.width-1,Math.floor(m))),w=Math.min(e.width-1,y+1),b=Math.max(0,Math.min(1,m-y));for(let x=0;x<3;x++){const M=2-x,v=(d*e.width+y)*e.channels+M,I=(d*e.width+w)*e.channels+M,T=(c*e.width+y)*e.channels+M,k=(c*e.width+w)*e.channels+M,S=e.data[v]*(1-b)+e.data[I]*b,A=e.data[T]*(1-b)+e.data[k]*b,N=S*(1-p)+A*p;o[x*i+u*n+f]=(N/255-.5)/.5}}}return{tensor:o,width:n,height:r}}function M_(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const o=i===n-1;for(let a=0;a<t;a++){const s=i*t+a;let u=e[s];if(a+1<t&&e[s+1]>u&&(u=e[s+1]),!o){const l=s+t;e[l]>u&&(u=e[l]),a+1<t&&e[l+1]>u&&(u=e[l+1])}r[s]=u}}return r}function I_(e){if(e.length<3)return e;const t=[...e].sort((o,a)=>o[0]-a[0]||o[1]-a[1]),n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(let o=t.length-1;o>=0;o--){const a=t[o];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function E_(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,o]=e[r],[a,s]=e[(r+1)%e.length],u=a-i,l=s-o,d=Math.hypot(u,l);if(d===0)continue;const c=u/d,p=l/d;let f=1/0,m=-1/0,y=1/0,w=-1/0;for(const[v,I]of e){const T=v*c+I*p,k=-v*p+I*c;T<f&&(f=T),T>m&&(m=T),k<y&&(y=k),k>w&&(w=k)}const b=m-f,x=w-y,M=b*x;if(M<n){n=M;const v=(f+m)/2,I=(y+w)/2;t={cx:v*c-I*p,cy:v*p+I*c,w:b,h:x,angle:Math.atan2(p,c)}}}return t}function T_(e,t,n,r){const i=Math.cos(r.angle),o=Math.sin(r.angle),a=r.w/2,s=r.h/2,u=Math.abs(a*i)+Math.abs(s*o),l=Math.abs(a*o)+Math.abs(s*i),d=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),p=Math.max(0,Math.floor(r.cy-l)),f=Math.min(n-1,Math.ceil(r.cy+l));let m=0,y=0;for(let w=p;w<=f;w++)for(let b=d;b<=c;b++){const x=b-r.cx,M=w-r.cy,v=x*i+M*o,I=-x*o+M*i;Math.abs(v)<=a&&Math.abs(I)<=s&&(m+=e[w*t+b],y+=1)}return y===0?0:m/y}function k_(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((y,w)=>y[0]-w[0]),[s,u,l,d]=a,[c,p]=s[1]<=u[1]?[s,u]:[u,s],[f,m]=l[1]<=d[1]?[l,d]:[d,l];return[[c[0],c[1]],[f[0],f[1]],[m[0],m[1]],[p[0],p[1]]]}function C_(e,t,n,r){const{width:i,height:o}=t;let a=new Uint8Array(i*o);for(let f=0;f<a.length;f++)a[f]=e[f]>__?255:0;a=M_(a,i,o);const s={width:i,height:o,data:a},{labels:u}=Aa(s),l=new Map;for(let f=0;f<o;f++)for(let m=0;m<i;m++){const y=u[f*i+m];if(y===0)continue;let w=l.get(y);w===void 0&&(w=new Map,l.set(y,w));const b=w.get(f);b===void 0?w.set(f,[m,m]):(m<b[0]&&(b[0]=m),m>b[1]&&(b[1]=m))}const d=n/i,c=r/o,p=[];for(const[f,m]of l){const y=[];for(const[N,[U,V]]of m)y.push([U-.5,N-.5],[U-.5,N+.5],[V+.5,N-.5],[V+.5,N+.5]);const w=E_(I_(y));if(Math.min(w.w,w.h)<$_)continue;const b=T_(e,i,o,w);if(b<b_)continue;const x=w.w*w.h*x_/(2*(w.w+w.h)),M={...w,w:w.w+2*x,h:w.h+2*x};if(Math.min(M.w,M.h)<v_+2)continue;const I=k_(M).map(([N,U])=>[Math.min(n,Math.max(0,Math.round(N*d))),Math.min(r,Math.max(0,Math.round(U*c)))]),T=I.map(N=>N[0]),k=I.map(N=>N[1]),S=Math.min(...T),A=Math.min(...k);p.push({quad:I,x:S,y:A,width:Math.max(...T)-S,height:Math.max(...k)-A,score:b})}return p.sort((f,m)=>m.score-f.score)}function A_(e,t){const[n,r,i,o]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-o[0],i[1]-o[1])))),s=Math.max(1,Math.round(Math.max(Math.hypot(o[0]-n[0],o[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=R_([[0,0],[a,0],[a,s],[0,s]],[n,r,i,o]),l=new Uint8Array(a*s*e.channels);for(let c=0;c<s;c++)for(let p=0;p<a;p++){const f=u[6]*p+u[7]*c+u[8],m=(u[0]*p+u[1]*c+u[2])/f,y=(u[3]*p+u[4]*c+u[5])/f,w=Math.floor(m),b=Math.floor(y),x=m-w,M=y-b,v=Math.max(0,Math.min(e.width-1,w)),I=Math.max(0,Math.min(e.width-1,w+1)),T=Math.max(0,Math.min(e.height-1,b)),k=Math.max(0,Math.min(e.height-1,b+1));for(let S=0;S<e.channels;S++){const A=e.data[(T*e.width+v)*e.channels+S],N=e.data[(T*e.width+I)*e.channels+S],U=e.data[(k*e.width+v)*e.channels+S],V=e.data[(k*e.width+I)*e.channels+S],F=A*(1-x)+N*x,O=U*(1-x)+V*x;l[(c*a+p)*e.channels+S]=Math.round(F*(1-M)+O*M)}}const d={width:a,height:s,channels:e.channels,data:l};return s/a>=1.5?Kt(d,3):d}function R_(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[o,a]=e[i],[s,u]=t[i];n.push([o,a,1,0,0,0,-s*o,-s*a]),r.push(s),n.push([0,0,0,o,a,1,-u*o,-u*a]),r.push(u)}for(let i=0;i<8;i++){let o=i;for(let s=i+1;s<8;s++)Math.abs(n[s][i])>Math.abs(n[o][i])&&(o=s);[n[i],n[o]]=[n[o],n[i]],[r[i],r[o]]=[r[o],r[i]];const a=n[i][i];for(let s=i;s<8;s++)n[i][s]/=a;r[i]/=a;for(let s=0;s<8;s++){if(s===i)continue;const u=n[s][i];if(u!==0){for(let l=i;l<8;l++)n[s][l]-=u*n[i][l];r[s]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Kt(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:o,data:a}=e,s=n%2===0?r:i,u=n%2===0?i:r,l=new Uint8Array(s*u*o);for(let d=0;d<i;d++)for(let c=0;c<r;c++){let p,f;n===1?(p=i-1-d,f=c):n===2?(p=r-1-c,f=i-1-d):(p=d,f=r-1-c);const m=(d*r+c)*o,y=(f*s+p)*o;for(let w=0;w<o;w++)l[y+w]=a[m+w]}return{width:s,height:u,channels:o,data:l}}const O_=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,O_)*255));return e})();const Yt=48,N_=320;function z_(e){return["blank",...e.characters," "]}function B_(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const s=e[a];s!==0&&(a>0&&e[a-1]===s||(r+=n[s]??"",i.push(t[a])))}if(i.length===0)return["",0];const o=i.reduce((a,s)=>a+s,0)/i.length;return[r,o]}function P_(e,t){const n=Math.trunc(Yt*t),r=e.width/e.height,i=Math.ceil(Yt*r)>n?n:Math.ceil(Yt*r),o=new Float32Array(3*Yt*n),a=Yt*n,s=e.width/i,u=e.height/Yt;for(let l=0;l<Yt;l++){const d=(l+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,d-c));for(let m=0;m<i;m++){const y=(m+.5)*s-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),b=Math.min(e.width-1,w+1),x=Math.max(0,Math.min(1,y-w));for(let M=0;M<3;M++){const v=2-M,I=(c*e.width+w)*e.channels+v,T=(c*e.width+b)*e.channels+v,k=(p*e.width+w)*e.channels+v,S=(p*e.width+b)*e.channels+v,A=e.data[I]*(1-x)+e.data[T]*x,N=e.data[k]*(1-x)+e.data[S]*x,U=A*(1-f)+N*f;o[M*a+l*n+m]=(U/255-.5)/.5}}}return{tensor:o,width:n}}const D_=62,U_=8,L_=5;function Oa(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function F_(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),o=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let s=1;s<=r;s++)o[s]=e[a-1]===t[s-1]?i[s-1]+1:Math.max(i[s],o[s-1]);[i,o]=[o,i]}return i[r]}function ui(e,t){return e.length===0&&t.length===0?100:200*F_(e,t)/(e.length+t.length)}function Mm(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return ui(n(e),n(t))}function G_(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(d=>r.has(d)).sort(),o=[...n].filter(d=>!r.has(d)).sort(),a=[...r].filter(d=>!n.has(d)).sort(),s=i.join(" "),u=[s,o.join(" ")].filter(Boolean).join(" "),l=[s,a.join(" ")].filter(Boolean).join(" ");return s.length>0&&(o.length===0||a.length===0)?100:Math.max(ui(s,u),ui(s,l),ui(u,l))}function W_(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const o of[Oa(i),Oa(r.name)])if(o)for(const a of[o,o.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function q_(e,t){const n=Oa(e);if(!n||t.length===0)return null;const i=W_(t).map(d=>({...d,score:G_(n,d.key)})).sort((d,c)=>c.score-d.score).slice(0,U_).filter(d=>d.score>=D_);if(i.length===0)return null;const o=i[0].score,a=i.filter(d=>o-d.score<=L_),s=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],l=[Mm(s,u.key),u.score];for(const d of a.slice(1)){const c=[Mm(s,d.key),d.score];(c[0]>l[0]||c[0]===l[0]&&c[1]>l[1])&&(u=d,l=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Im=5e3,Na=.75,Em=15,V_=1.25,H_=2.4,j_=.003,K_=.85,Y_=4,za=2600,Ba=2,Pa=.3,Tm=.1,km=.012,X_=22,Cm=.5,li=.12;function tt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let o=0,a=t.width*t.height;o<a;o++)r[o*3]=t.data[o*i],r[o*3+1]=t.data[o*i+1],r[o*3+2]=t.data[o*i+2];return n}function Z_(e,t,n,r){const i=r.map(te=>te[0]),o=r.map(te=>te[1]),a=i.reduce((te,ye)=>te+ye,0)/i.length,s=o.reduce((te,ye)=>te+ye,0)/o.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...o)-Math.min(...o));if(u<4)return null;const l=u*Y_,d=Math.max(0,Math.trunc(a-l)),c=Math.min(n.width,Math.trunc(a+l)),p=Math.max(0,Math.trunc(s-l)),f=Math.min(n.height,Math.trunc(s+l));if(c-d<8||f-p<8)return null;const m=Math.max(n.width,n.height)<za?Ba:1,y=tt(e,n),w=tt(e,t),b=new e.Rect(d,p,c-d,f-p),x=y.roi(b),M=new e.Mat;m!==1?e.resize(x,M,new e.Size(0,0),m,m,e.INTER_CUBIC):x.copyTo(M);const v=new e.Mat,I=new e.Mat;e.cvtColor(w,v,e.COLOR_RGB2GRAY),e.cvtColor(M,I,e.COLOR_RGB2GRAY);const T=new e.ORB(Im),k=new e.KeyPointVector,S=new e.KeyPointVector,A=new e.Mat,N=new e.Mat,U=new e.Mat,V=[y,w,x,M,v,I,k,S,A,N,U],F=te=>{for(const ye of V)try{ye.delete()}catch{}try{T.delete()}catch{}return te};if(T.detectAndCompute(v,U,k,A),T.detectAndCompute(I,U,S,N),A.rows<8||N.rows<8)return F(null);const O=new e.BFMatcher(e.NORM_HAMMING),H=new e.DMatchVectorVector;O.knnMatch(A,N,H,2);const X=[],J=[];for(let te=0;te<H.size();te++){const ye=H.get(te);if(ye.size()===2){const Me=ye.get(0),Ne=ye.get(1);if(Me.distance<Na*Ne.distance){const Pe=k.get(Me.queryIdx).pt,ut=S.get(Me.trainIdx).pt;X.push(Pe.x,Pe.y),J.push(ut.x,ut.y)}}}if(H.delete(),O.delete(),X.length/2<8)return F(null);const he=e.matFromArray(X.length/2,1,e.CV_32FC2,X),W=e.matFromArray(J.length/2,1,e.CV_32FC2,J),z=new e.Mat,R=e.findHomography(he,W,e.RANSAC,5,z);let B=0;for(let te=0;te<z.rows;te++)B+=z.data[te];const L=R.rows===3?[...R.data64F]:null;if(he.delete(),W.delete(),z.delete(),R.delete(),L===null||B<Em)return F(null);const G=1/m,Z=[[G,0,d],[0,G,p],[0,0,1]],ie=[0,1,2].map(te=>[0,1,2].map(ye=>Z[te][0]*L[ye]+Z[te][1]*L[3+ye]+Z[te][2]*L[6+ye]));return F({H:ie,inliers:B})}function Da(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[l,d]=e[u],[c,p]=e[(u+1)%4];r+=l*p-c*d}const i=Math.abs(r/2)/(t*n);if(i<j_||i>K_)return!1;const o=e.map((u,l)=>{const d=e[(l+1)%4];return Math.hypot(d[0]-u[0],d[1]-u[1])}),a=Math.min(...o);if(a<1)return!1;const s=Math.max(...o)/a;return s>=V_&&s<=H_}function Ua(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function La(e,t,n,r){const i=n.width,o=n.height,a=Math.max(8,Math.trunc(Pa*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=r.map(V=>[V[0],V[1],V[2]-a*(V[0]+V[1])+0]);for(let V=0;V<3;V++)l[V][2]=r[V][2]-a*r[V][0]-a*r[V][1];const d=tt(e,t),c=new e.Mat,p=e.matFromArray(3,3,e.CV_64F,l.flat());e.warpPerspective(d,c,p,new e.Size(s,u),e.WARP_INVERSE_MAP);const f=new e.Mat;e.cvtColor(c,f,e.COLOR_RGB2Lab),d.delete(),p.delete();const m=f.data,y=Math.max(4,Math.trunc(a/3)),w=[[],[],[]],b=(V,F)=>{const O=(F*s+V)*3;w[0].push(m[O]),w[1].push(m[O+1]),w[2].push(m[O+2])};for(let V=0;V<u;V++)for(let F=0;F<s;F++)(V<y||V>=u-y||F<y||F>=s-y)&&b(F,V);const x=V=>{V.sort((O,H)=>O-H);const F=V.length>>1;return V.length%2?V[F]:(V[F-1]+V[F])/2},M=[x(w[0]),x(w[1]),x(w[2])],v=(V,F)=>{const O=(F*s+V)*3,H=m[O]-M[0],X=m[O+1]-M[1],J=m[O+2]-M[2];return Math.sqrt(H*H+X*X+J*J)>X_},I=Math.max(6,Math.trunc(Tm*i)),T=Math.max(6,Math.trunc(Tm*o)),k=Math.max(2,Math.trunc(km*i)),S=Math.max(2,Math.trunc(km*o)),A=V=>{let F=0,O=0;for(const H of V)O=H?O+1:0,O>F&&(F=O);return F/Math.max(1,V.length)},N=V=>{let F,O,H,X,J;if(V==="L"?(F=a,O=a+o,H=Math.max(0,a-k-I),X=Math.max(0,a-k),J=!1):V==="R"?(F=a,O=a+o,H=a+i+k,X=Math.min(s,a+i+k+I),J=!1):(F=Math.max(0,a-S-T),O=Math.max(0,a-S),H=a,X=a+i,J=!0),O<=F||X<=H)return 0;const he=[];if(J)for(let W=H;W<X;W++){let z=0;for(let R=F;R<O;R++)v(W,R)&&z++;he.push(z/(O-F)>Cm)}else for(let W=F;W<O;W++){let z=0;for(let R=H;R<X;R++)v(R,W)&&z++;he.push(z/(X-H)>Cm)}return A(he)},U={L:N("L"),R:N("R"),T:N("T")};return c.delete(),f.delete(),U}const Q_=6e3,J_=8,Am=.5,eb=.6;function tb(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<za?Ba:1,o=tt(e,t),a=new e.Mat;i!==1?e.resize(o,a,new e.Size(0,0),i,i,e.INTER_CUBIC):o.copyTo(a);const s=new e.Mat;e.cvtColor(a,s,e.COLOR_RGB2GRAY),o.delete(),a.delete();const u=new e.ORB(Q_),l=new e.Mat,d=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(s,l,d,c);const p=[],f=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return p;for(const[m,y]of n){if(r!==void 0&&Date.now()>r)break;const w=tt(e,y),b=new e.Mat;e.cvtColor(w,b,e.COLOR_RGB2GRAY);const x=new e.KeyPointVector,M=new e.Mat;u.detectAndCompute(b,l,x,M);const v=[w,x,M],I=()=>{for(const ie of v)ie.delete();b.delete()};if(M.rows<8){I();continue}const T=new e.DMatchVectorVector;f.knnMatch(M,c,T,2);const k=[],S=[];for(let ie=0;ie<T.size();ie++){const te=T.get(ie);if(te.size()===2){const ye=te.get(0);if(ye.distance<Na*te.get(1).distance){const Me=x.get(ye.queryIdx).pt,Ne=d.get(ye.trainIdx).pt;k.push(Me.x,Me.y),S.push(Ne.x,Ne.y)}}}if(T.delete(),k.length/2<8){I();continue}const A=e.matFromArray(k.length/2,1,e.CV_32FC2,k),N=e.matFromArray(S.length/2,1,e.CV_32FC2,S),U=new e.Mat,V=e.findHomography(A,N,e.RANSAC,5,U);let F=0;for(let ie=0;ie<U.rows;ie++)F+=U.data[ie];const O=V.rows===3?[...V.data64F]:null;if(A.delete(),N.delete(),U.delete(),V.delete(),O===null||F<J_){I();continue}const H=1/i,X=[[H*O[0],H*O[1],H*O[2]],[H*O[3],H*O[4],H*O[5]],[O[6],O[7],O[8]]],J=[[0,0],[y.width,0],[y.width,y.height],[0,y.height]].map(([ie,te])=>Ua(X,ie,te));if(!Da(J,t.width,t.height)){I();continue}const he=tt(e,t),W=e.matFromArray(3,3,e.CV_64F,X.flat()),z=new e.Mat;e.warpPerspective(he,z,W,new e.Size(y.width,y.height),e.WARP_INVERSE_MAP);const R=new e.Mat;e.cvtColor(z,R,e.COLOR_RGB2GRAY);const B=new e.Mat;e.matchTemplate(R,b,B,e.TM_CCOEFF_NORMED);const L=B.data32F[0];if(he.delete(),W.delete(),z.delete(),R.delete(),B.delete(),L<Am){I();continue}const G=La(e,t,y,X),Z=Fa(G);p.push({id:m,confidence:Math.max(0,L),footprint:J,built:G!==null&&Math.max(G.L,G.R,G.T)>=li,tuckRegion:Ga(J,Z)}),I()}}finally{s.delete(),l.delete(),d.delete(),c.delete();try{u.delete(),f.delete()}catch{}}return p}function Fa(e){return e!==null&&e.R>=li?["R"]:[]}function Ga(e,t){if(e.length<4||t.length===0)return null;const n=e.map(y=>[y[0],y[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),o=.5*(r+i),a=Pa*o;if(!(a>0))return null;const s=n.reduce((y,w)=>y+w[0],0)/n.length,u=n.reduce((y,w)=>y+w[1],0)/n.length,l={T:[0,1],R:[1,2],L:[0,3]},d=[...n];for(const y of["L","R","T"]){if(!t.includes(y))continue;const[w,b]=l[y],x=n[w],M=n[b];let v=-(M[1]-x[1]),I=M[0]-x[0];const T=(x[0]+M[0])/2,k=(x[1]+M[1])/2;v*(T-s)+I*(k-u)<0&&(v=-v,I=-I);const S=Math.hypot(v,I);S<=1e-6||(v=v/S*a,I=I/S*a,d.push([x[0]+v,x[1]+I],[M[0]+v,M[1]+I]))}const c=d.map(y=>y[0]),p=d.map(y=>y[1]),f=Math.round(Math.min(...c)),m=Math.round(Math.min(...p));return{x:f,y:m,width:Math.round(Math.max(...c))-f,height:Math.round(Math.max(...p))-m}}function nb(e,t,n,r){const i=Z_(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([l,d])=>Ua(i.H,l,d));if(!Da(a,t.width,t.height))return null;const s=La(e,t,n,i.H);if(s===null)return null;const u=Fa(s);return{built:Math.max(s.L,s.R,s.T)>=li,footprint:a,overflow:u,edgeScores:s,inliers:i.inliers}}const rb=.88;function Rm(e,t,n,r){if(r.length!==4)return null;const i=n.width,o=n.height,a=Math.max(8,Math.trunc(Pa*i)),s=i+2*a,u=o+2*a;if(s*u>4e7)return null;const l=a+Math.trunc(i*rb),d=s-l;if(d<1)return null;const c=tt(e,t),p=e.matFromArray(4,1,e.CV_32FC2,[0,0,i,0,i,o,0,o]),f=e.matFromArray(4,1,e.CV_32FC2,[r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]),m=e.getPerspectiveTransform(p,f),y=[...m.data64F],w=[0,1,2].flatMap(k=>[y[k*3],y[k*3+1],y[k*3+2]-a*y[k*3]-a*y[k*3+1]]),b=e.matFromArray(3,3,e.CV_64F,w),x=new e.Mat;e.warpPerspective(c,x,b,new e.Size(s,u),e.WARP_INVERSE_MAP);const M=x.roi(new e.Rect(l,0,d,u)),v=new e.Mat;M.copyTo(v);const I=v.data,T=new Uint8ClampedArray(d*u*3);T.set(I.subarray(0,T.length));for(const k of[c,p,f,m,b,x,M,v])try{k.delete()}catch{}return{width:d,height:u,channels:3,data:T}}function ib(e,t,n,r){const[i,o,a,s]=r;if(a<8||s<8)return null;const u=Math.trunc(.06*a),l=Math.trunc(.06*s),d=Math.max(0,Math.trunc(i-u)),c=Math.min(n.width,Math.trunc(i+a+u)),p=Math.max(0,Math.trunc(o-l)),f=Math.min(n.height,Math.trunc(o+s+l));if(c-d<8||f-p<8)return null;const m=Math.max(n.width,n.height)<za?Ba:1,y=tt(e,n),w=tt(e,t),b=y.roi(new e.Rect(d,p,c-d,f-p)),x=new e.Mat;m!==1?e.resize(b,x,new e.Size(0,0),m,m,e.INTER_CUBIC):b.copyTo(x);const M=new e.Mat,v=new e.Mat;e.cvtColor(w,M,e.COLOR_RGB2GRAY),e.cvtColor(x,v,e.COLOR_RGB2GRAY);const I=new e.ORB(Im),T=new e.KeyPointVector,k=new e.KeyPointVector,S=new e.Mat,A=new e.Mat,N=new e.Mat,U=[y,w,b,x,M,v,T,k,S,A,N],V=ie=>{for(const te of U)try{te.delete()}catch{}try{I.delete()}catch{}return ie};if(I.detectAndCompute(M,N,T,S),I.detectAndCompute(v,N,k,A),S.rows<8||A.rows<8)return V(null);const F=new e.BFMatcher(e.NORM_HAMMING),O=new e.DMatchVectorVector;F.knnMatch(S,A,O,2);const H=[],X=[];for(let ie=0;ie<O.size();ie++){const te=O.get(ie);if(te.size()===2){const ye=te.get(0),Me=te.get(1);if(ye.distance<Na*Me.distance){const Ne=T.get(ye.queryIdx).pt,Pe=k.get(ye.trainIdx).pt;H.push(Ne.x,Ne.y),X.push(Pe.x,Pe.y)}}}if(O.delete(),F.delete(),H.length/2<8)return V(null);const J=e.matFromArray(H.length/2,1,e.CV_32FC2,H),he=e.matFromArray(X.length/2,1,e.CV_32FC2,X),W=new e.Mat,z=e.findHomography(J,he,e.RANSAC,5,W);let R=0;for(let ie=0;ie<W.rows;ie++)R+=W.data[ie];const B=z.rows===3?[...z.data64F]:null;if(J.delete(),he.delete(),W.delete(),z.delete(),B===null||R<Em)return V(null);const L=1/m,G=[[L,0,d],[0,L,p],[0,0,1]],Z=[0,1,2].map(ie=>[0,1,2].map(te=>G[ie][0]*B[te]+G[ie][1]*B[3+te]+G[ie][2]*B[6+te]));return V({H:Z,inliers:R})}const ob=620;function ab(e,t){return{width:t.cols,height:t.rows,channels:3,data:new Uint8Array(t.data.slice(0,t.rows*t.cols*3))}}function Om(e,t,n,r){const i=Nm(e,t,n,r);if(i!==null)return i;try{const[o,a,s,u]=r.map(I=>Math.trunc(I));if(Math.min(s,u)>=ob||s<=0||u<=0)return null;const l=Math.trunc(s*.25),d=Math.trunc(u*.25),c=Math.max(0,o-l),p=Math.max(0,a-d),f=Math.min(t.width,o+s+l),m=Math.min(t.height,a+u+d);if(f<=c||m<=p)return null;const y=tt(e,t),w=y.roi(new e.Rect(c,p,f-c,m-p)),b=new e.Mat;e.resize(w,b,new e.Size((f-c)*2,(m-p)*2),0,0,e.INTER_CUBIC);const x=ab(e,b);for(const I of[y,w,b])try{I.delete()}catch{}const M=[(o-c)*2,(a-p)*2,s*2,u*2],v=Nm(e,x,n,M);return v===null?null:{...v,footprint:v.footprint.map(([I,T])=>[I*.5+c,T*.5+p])}}catch{return null}}function Nm(e,t,n,r){const i=ib(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([b,x])=>Ua(i.H,b,x));if(!Da(a,t.width,t.height))return null;const s=tt(e,t),u=e.matFromArray(3,3,e.CV_64F,i.H.flat()),l=new e.Mat;e.warpPerspective(s,l,u,new e.Size(n.width,n.height),e.WARP_INVERSE_MAP);const d=tt(e,n),c=new e.Mat,p=new e.Mat;e.cvtColor(l,c,e.COLOR_RGB2GRAY),e.cvtColor(d,p,e.COLOR_RGB2GRAY);const f=new e.Mat;e.matchTemplate(c,p,f,e.TM_CCOEFF_NORMED);const m=f.data32F[0];for(const b of[s,u,l,d,c,p,f])try{b.delete()}catch{}if(m<Am)return null;const y=La(e,t,n,i.H);if(y===null)return null;const w=Fa(y);return{built:Math.max(y.L,y.R,y.T)>=li,footprint:a,overflow:w,edgeScores:y,inliers:i.inliers}}function sb(e,t,n,r=.03){let i=null,o=1/0;for(const a of e){const[s,u,l,d]=a;if(l<=0||d<=0)continue;const c=r*l,p=r*d;if(t>=s-c&&t<=s+l+c&&n>=u-p&&n<=u+d+p){const f=l*d;f<o&&(o=f,i=[s,u,l,d])}}return i}const ub=.3,lb=.3;function cb(e,t){const n=e.filter(o=>o.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(o=>{const{L:a,R:s,T:u}=o.edgeScores;return Math.min(a,s,u)>=ub}),i=[];return e.forEach((o,a)=>{if(!o.built||o.edgeScores===null)return;const{L:s,R:u,T:l}=o.edgeScores,d=Math.max(s,u,l)<lb;if(!r&&!d)return;t.some(([p,f])=>p>=o.zone.x0&&p<=o.zone.x1&&f>=o.zone.y0&&f<=o.zone.y1)||i.push(a)}),i}const Pt=128,Wa=.5;function qa(e){const t=Kn(e,Pt,Pt),n=Pt*Pt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function zm(e){const t=e[1]??0;return{built:t>=Wa,prob:t}}const Sr=120,Mr=179,db=1.3,hb=3.6,pb=.45,fb=6e-4,mb=.02,gb=6e3,yb=.78,wb=1.25,_b=2.4,bb=.05,xb=1.5,$b=.5,vb=.9,Sb=150,Mb=18,Ib=34,Eb=90,Tb=130,kb=.13,Cb=.15,ci="magistrates-guild",Va="merchants-guild";function Ab(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[Sr,30,40,0]),o=new e.Mat(r.rows,r.cols,r.type(),[Mr,255,205,255]),a=new e.Mat;e.inRange(r,i,o,a),r.delete(),i.delete(),o.delete();const s=new Uint8Array(a.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),l=new e.Mat;e.morphologyEx(a,l,e.MORPH_CLOSE,u),a.delete(),u.delete();const d=new e.Mat,c=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(l,d,c,p,8);l.delete(),d.delete(),p.delete();const m=t.width*t.height,y=[];for(let w=1;w<f;w++){const b=c.intAt(w,0),x=c.intAt(w,1),M=c.intAt(w,2),v=c.intAt(w,3),I=c.intAt(w,4),T=I/m;T<fb||T>mb||I/Math.max(M*v,1)<pb||y.push({x:b,y:x,w:M,h:v})}return c.delete(),{blobs:y,mask:s,maskWidth:t.width}}function Rb(e,t,n,r,i,o,a){const s=e,u=o,l=a,d=i;if(!d.gray){const L=tt(e,r);d.gray=new s.Mat,s.cvtColor(L,d.gray,s.COLOR_RGB2GRAY),L.delete(),d.k=new s.KeyPointVector,d.d=new s.Mat;const G=new s.Mat;u.detectAndCompute(d.gray,G,d.k,d.d),G.delete()}const c=n,p=new s.Mat,f=new s.KeyPointVector,m=new s.Mat;u.detectAndCompute(c,p,f,m),p.delete();const y=L=>(f.delete(),m.delete(),L);if(d.d.rows<8||m.rows<8)return y(null);const w=new s.DMatchVectorVector;l.knnMatch(d.d,m,w,2);const b=[],x=[];for(let L=0;L<w.size();L++){const G=w.get(L);if(G.size()===2){const Z=G.get(0);if(Z.distance<yb*G.get(1).distance){const ie=d.k.get(Z.queryIdx).pt,te=f.get(Z.trainIdx).pt;b.push(ie.x,ie.y),x.push(te.x,te.y)}}}if(w.delete(),b.length/2<8)return y(null);const M=s.matFromArray(b.length/2,1,s.CV_32FC2,b),v=s.matFromArray(x.length/2,1,s.CV_32FC2,x),I=new s.Mat,T=s.findHomography(M,v,s.RANSAC,5,I);if(M.delete(),v.delete(),I.delete(),T.rows!==3)return T.delete(),y(null);const k=[...T.data64F],S=(L,G)=>{const Z=k[6]*L+k[7]*G+k[8];return[(k[0]*L+k[1]*G+k[2])/Z,(k[3]*L+k[4]*G+k[5])/Z]},A=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([L,G])=>S(L,G));if(A.some(L=>!Number.isFinite(L[0])||!Number.isFinite(L[1])))return T.delete(),y(null);const N=A.map((L,G)=>{const Z=A[(G+1)%4];return Math.hypot(Z[0]-L[0],Z[1]-L[1])}),U=Math.min(...N);if(U<1)return T.delete(),y(null);const V=Math.max(...N)/U;let F=0;for(let L=0;L<4;L++){const[G,Z]=A[L],[ie,te]=A[(L+1)%4];F+=G*te-ie*Z}const O=t,H=Math.abs(F/2)/(O.rows*O.cols);if(V<wb||V>_b||H<bb||H>xb)return T.delete(),y(null);const X=new s.Mat;s.warpPerspective(O,X,T,new s.Size(r.width,r.height),s.WARP_INVERSE_MAP),T.delete();const J=new s.Mat;s.cvtColor(X,J,s.COLOR_RGB2GRAY),X.delete();const he=Math.trunc(r.height/2),W=J.roi(new s.Rect(0,0,r.width,he)),z=d.gray.roi(new s.Rect(0,0,r.width,he)),R=new s.Mat;s.matchTemplate(W,z,R,s.TM_CCOEFF_NORMED);const B=R.data32F[0];return W.delete(),z.delete(),R.delete(),J.delete(),y(B)}function Ob(e,t,n){let r,i;if(n===ci)r=Va,i=kb;else if(n===Va)r=ci,i=Cb;else return null;const{x:o,y:a,w:s,h:u}=t;if(s<8||u<8)return null;const l=Math.trunc(s/2);let d=0,c=null;for(const[p,f]of[[0,l],[l,s]]){let m=0,y=0;for(let b=a;b<a+u;b++)for(let x=o+p;x<o+f;x++){const M=(b*e.width+x)*e.channels,{h:v,s:I,v:T}=Ct(e.data[M],e.data[M+1],e.data[M+2]);if(v>=Sr&&v<=Mr&&I>=30&&I<=170&&T<=170)continue;m++,(r===Va?v>=Mb&&v<=Ib&&I>=Eb&&T>=Tb:v>=95&&v<=130&&I>=80)&&y++}if(m<20)continue;const w=y/m;w>d&&(d=w,c={x:o+p,y:a,w:f-p,h:u})}return d>=i&&c!==null?{id:r,box:c}:null}const Nb=1.7,zb=140,Bb=170,Pb=.2,Db=.1,Bm=240,Pm=80,Dm=60,Ub=50,Um="scientists-guild",Lm="tacticians-guild",di=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function Lb(e,t,n){const{x:r,y:i,w:o,h:a}=n,s=new Float32Array(a);for(let v=0;v<a;v++){let I=0;for(let T=0;T<o;T++)e[(i+v)*t+r+T]>0&&I++;s[v]=I/o}const u=[];for(let v=0;v<a;v++)s[v]>.3&&u.push(v);if(u.length<5)return[];const l=u[0],d=u[u.length-1],c=d-l;if(c<5)return[];const p=o/c;if(p<db||p>hb)return[];if(p>=Nb)return[{x:r,y:i+l,w:o,h:c}];const f=new Float32Array(a),m=.3*(8*.5-1)+.8,y=[];let w=0;for(let v=-4;v<=4;v++){const I=Math.exp(-(v*v)/(2*m*m));y.push(I),w+=I}for(let v=0;v<a;v++){let I=0;for(let T=-4;T<=4;T++){const k=Math.min(a-1,Math.max(0,v+T));I+=s[k]*y[T+4]}f[v]=I/w}const b=l+Math.trunc(c*.3),x=l+Math.trunc(c*.78);let M=l+Math.trunc(c/2);if(x>b){let v=1/0;for(let I=b;I<x;I++)f[I]<v&&(v=f[I],M=I)}return[{x:r,y:i+l,w:o,h:M-l},{x:r,y:i+M,w:o,h:d-M}]}function Fb(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),o=Math.min(e.height,t.y+t.h),a=Math.max(0,i-n),s=Math.max(0,o-r),u=new Uint8Array(a*s*3);for(let l=0;l<s;l++)for(let d=0;d<a;d++){const c=((r+l)*e.width+n+d)*e.channels,p=(l*a+d)*3;u[p]=e.data[c],u[p+1]=e.data[c+1],u[p+2]=e.data[c+2]}return{width:a,height:s,channels:3,data:u}}function Gb(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const o=r*e.channels,{h:a,s,v:u}=Ct(e.data[o],e.data[o+1],e.data[o+2]);s>=40&&u>=40&&u<=205&&(t++,a>=zb&&a<=Bb&&n++)}return t===0?0:n/t}function Wb(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:o,s:a,v:s}=Ct(e.data[i],e.data[i+1],e.data[i+2]);!(o>=Sr&&o<=Mr)&&a>=70&&s>=50&&t++}return n===0?0:t/n}function Fm(e,t){const n=tt(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Bm,Pm),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Bm,height:Pm,channels:3,data:i}}function qb(e){const t=e.width*e.height,n=[0,0,0];for(let o=0;o<t;o++){const a=o*e.channels;n[0]+=e.data[a],n[1]+=e.data[a+1],n[2]+=e.data[a+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let o=0;o<t;o++){const a=o*e.channels;for(let s=0;s<3;s++){const u=n[s]>1e-6?r/n[s]:1;i[o*3+s]=Math.max(0,Math.min(255,Math.round(e.data[a+s]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Gm(e,t){const n=qb(t),r=n.width*n.height,i=new Uint8Array(r);let o=0;for(let m=0;m<r;m++){const y=m*3,{h:w,s:b,v:x}=Ct(n.data[y],n.data[y+1],n.data[y+2]);!(w>=Sr&&w<=Mr&&b>=30&&b<=170&&x<=170)&&x>=40&&(i[m]=1,o++)}const a=o<20,s=tt(e,n),u=new e.Mat;e.cvtColor(s,u,e.COLOR_RGB2Lab),s.delete();const l=u.data;let d=0,c=0,p=0,f=0;for(let m=0;m<r;m++)!a&&i[m]===0||(d+=l[m*3]*100/255,c+=l[m*3+1]-128,p+=l[m*3+2]-128,f++);return u.delete(),f===0?[0,0,0]:[d/f,c/f,p/f]}function Vb(e){let t=0,n=0,r=0,i=0,o=0;const a=e.width*e.height;for(let u=0;u<a;u++){const l=u*e.channels,{h:d,s:c,v:p}=Ct(e.data[l],e.data[l+1],e.data[l+2]);d>=Sr&&d<=Mr&&c>=30&&c<=170&&p<=170||(t++,c>=70&&p>=50&&(d>=95&&d<=130?n++:d>=35&&d<=92?r++:d<=10?i++:d>=15&&d<=34&&p>=80&&o++))}const s=Math.max(t,1);return{blue:n/s,green:r/s,red:i/s,gold:o/s}}function Hb(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:o,s:a,v:s}=Ct(e.data[i],e.data[i+1],e.data[i+2]);a>=Dm&&s>=Ub?(o>=95&&o<=128&&n.blue++,o>=35&&o<=85&&n.green++,(o<=8||o>=170)&&n.red++,o>=18&&o<=34&&n.gold++,o>=4&&o<=17&&s<150&&n.brown++):a<Dm&&s>=70&&s<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function jb(e,t){let n=0,r=0;for(let s=0;s<e.length;s++)n+=e[s],r+=t[s];n/=e.length,r/=t.length;let i=0,o=0,a=0;for(let s=0;s<e.length;s++){const u=e[s]-n,l=t[s]-r;i+=u*l,o+=u*u,a+=l*l}return i/(Math.sqrt(o*a)+1e-6)}function Wm(e,t){const n=tt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function Kb(e,t){const n=new Map,r=new Map;for(const[i,o]of t){const a=Fm(e,o);n.set(i,Wm(e,a)),di.includes(i)&&r.set(i,Gm(e,a))}return{gray:n,warmLab:r}}function Yb(e,t,n){const r=Fm(e,t),i=Vb(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ci;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Um;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Lm;const o=Hb(r),a={blue:o.blue,green:o.green,red:o.red,gold:o.gold,browngrey:o.brown+o.grey};let s="blue";for(const l of Object.keys(a))a[l]>a[s]&&(s=l);if(a[s]<=0)return"";let u;if(s==="blue")u=ci;else if(s==="green")u=Um;else if(s==="red")u=Lm;else{const l=Wm(e,r);let d="",c=-2;for(const p of di){const f=n.gray.get(p);if(f===void 0)continue;const m=jb(l,f);m>c&&(c=m,d=p)}u=d||di[0]}if(di.includes(u)&&n.warmLab.size>0){const l=Gm(e,r);let d=u,c=1/0;for(const[p,f]of n.warmLab){const m=Math.hypot(l[0]-f[0],l[1]-f[1],l[2]-f[2]);m<c&&(c=m,d=p)}return d}return u}function Xb(e,t,n,r,i){var y;const o=[],{blobs:a,mask:s,maskWidth:u}=Ab(e,t);if(a.length===0||n.size===0)return o;const l=e,d=new l.ORB(gb),c=new l.BFMatcher(l.NORM_HAMMING),p=new Map;for(const w of n.keys())p.set(w,{});const f=tt(e,t);let m=null;try{for(const w of a){if(r!==void 0&&Date.now()>r)break;const b=w.x+Math.trunc(w.w/2),x=w.y+Math.trunc(w.h/2),M=Math.max(Sb,Math.trunc(vb*Math.max(w.w,w.h))),v=Math.max(0,b-M),I=Math.max(0,x-M),T=Math.min(t.width,b+M),k=Math.min(t.height,x+M);if(T-v<16||k-I<16)continue;const S=f.roi(new l.Rect(v,I,T-v,k-I)),A=new l.Mat;l.cvtColor(S,A,l.COLOR_RGB2GRAY);let N=null,U=-2;for(const[H,X]of n){if(r!==void 0&&Date.now()>r)break;const J=Rb(e,S,A,X,p.get(H),d,c);J!==null&&J>U&&(U=J,N=H)}S.delete(),A.delete();const V=new Set;if(N!==null&&U>=$b){o.push({id:N,boundingBox:{x:w.x,y:w.y,width:w.w,height:w.h},confidence:1}),V.add(N);const H=Ob(t,w,N);H&&(o.push({id:H.id,boundingBox:{x:H.box.x,y:H.box.y,width:H.box.w,height:H.box.h},confidence:.9}),V.add(H.id))}if(i===void 0||i.size===0)continue;const F=Lb(s,u,w);if(F.length!==2)continue;const O=F.map(H=>Fb(t,H));if(!O.some(H=>H.width*H.height===0||Wb(H)<Db))for(let H=0;H<F.length;H++){const X=O[H];if(Gb(X)<Pb)continue;m===null&&(m=Kb(e,i));const J=Yb(e,X,m);if(J&&!V.has(J)){V.add(J);const he=F[H];o.push({id:J,boundingBox:{x:he.x,y:he.y,width:he.w,height:he.h},confidence:1})}}}}finally{f.delete();for(const w of p.values()){const b=w;for(const x of["gray","k","d"])try{(y=b[x])==null||y.delete()}catch{}}try{d.delete(),c.delete()}catch{}}return o}const qm=128,Zb=.56,Qb=15,Jb=.58,e1=70,t1=50,n1=.12,r1=.2,i1=.1,o1=.17,Vm=.15;function a1(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),o=>o.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Hm(e,t){const{width:n,height:r,channels:i,data:o}=e,a=Math.floor(n/2),s=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const l=Math.max(0,a-u),d=Math.max(0,s-u),c=Math.min(n,a+u),p=Math.min(r,s+u),f=c-l,m=p-d,y=new Uint8Array(f*m*i);for(let w=0;w<m;w++){const b=((w+d)*n+l)*i;y.set(o.subarray(b,b+f*i),w*f*i)}return{width:f,height:m,channels:i,data:y}}function s1(e){const t=Hm(e,Zb),n=Qw(t),r=$m(n,qm,qm);return Jw(r)}function u1(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let o=0,a=0,s=0;for(let u=0;u<n;u++){const l=e[u]-r,d=t[u]-i;o+=l*d,a+=l*l,s+=d*d}return o/(Math.sqrt(a*s)+1e-6)}function l1(e){const t=new Map([["masonry",0],["strategy",0]]),n=Hm(e,Jb),{width:r,height:i,channels:o,data:a}=n,s=r*i||1;let u=0,l=0;for(let p=0;p<r*i;p++){const f=p*o,{h:m,s:y,v:w}=Ct(a[f],a[f+1],a[f+2]);y>=e1&&w>=t1&&(m>=95&&m<=130&&(u+=1),(m<=8||m>=170)&&(l+=1))}const d=u/s,c=l/s;return d>=n1&&t.set("masonry",Vm*Math.min(1,d/r1)),c>=i1&&t.set("strategy",Vm*Math.min(1,c/o1)),t}function c1(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=s1(e);let r=0;for(const l of n.data)r+=l;const i=r/n.data.length,o=[];for(let l=0;l<360;l+=Qb)o.push(n_(n,l,i));const a=new Map;for(const[l,d]of t){let c=-1/0;for(const p of o){const f=u1(p,d);f>c&&(c=f)}a.set(l,c)}for(const[l,d]of l1(e))d>0&&a.has(l)&&a.set(l,a.get(l)+d);let s="",u=-1/0;for(const[l,d]of a)d>u&&(s=l,u=d);return[s,u]}const un=224,d1=512,h1=[.485,.456,.406],p1=[.229,.224,.225];function f1(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function m1(e){const t=Ma(e,un,un),n=un*un,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=(t[i*3+o]/255-h1[o])/p1[o];return r}function g1(e){const t=3*un*un,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(m1(Kt(e,r)),r*t);return n}function y1(e,t=d1){const n=e.length/t,r=new Float32Array(t);for(let o=0;o<n;o++)for(let a=0;a<t;a++)r[a]+=e[o*t+a];let i=0;for(let o=0;o<t;o++)r[o]/=n,i+=r[o]*r[o];i=Math.max(Math.sqrt(i),1e-9);for(let o=0;o<t;o++)r[o]/=i;return r}function w1(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let o=0;const a=i*e.dim;for(let s=0;s<e.dim;s++)o+=e.x[a+s]*t[s];o>r&&(r=o,n=i)}return{id:e.ids[n],cosine:r}}const Xn=96,_1=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],b1=.45;function x1(e){const t=Ma(e,Xn,Xn),n=Xn*Xn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function $1(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=b1?_1[t]??"":"",prob:n}}const Zn=128,v1=["circus-maximus","piraeus","the-appian-way","the-colossus","the-great-library","the-great-lighthouse","the-hanging-gardens","the-mausoleum","the-pyramids","the-sphinx","the-statue-of-zeus","the-temple-of-artemis","other"],S1=.5,M1=.9;function I1(e){const t=Kn(e,Zn,Zn),n=Zn*Zn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let o=0;o<3;o++)r[o*n+i]=t[i*3+o]/255;return r}function E1(e){const{width:t,height:n,channels:r,data:i}=e,o=new Uint8ClampedArray(t*n*r);for(let a=0;a<t;a++)for(let s=0;s<n;s++){const u=a,d=((n-1-s)*t+u)*r,c=(a*n+s)*r;for(let p=0;p<r;p++)o[c+p]=i[d+p]}return{width:n,height:t,channels:r,data:o}}function T1(e,t){let n=e;const r=(t%4+4)%4;for(let i=0;i<r;i++)n=E1(n);return n}function k1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{index:t,prob:e[t]}}async function C1(e,t){let n=0,r=-1;for(let o=0;o<4;o++){const a=o===0?e:T1(e,o),s=await t(I1(a)),u=k1(s);u.prob>r&&(r=u.prob,n=u.index)}const i=r>=S1?v1[n]??"":"";return{id:i==="other"?"":i,prob:r}}const Qn=96,A1=[1,2,3,4,5,6,7],R1=.8,O1=.99;function N1(e){const t=Ia(e,e.width*2,e.height*2),n=Kn({width:e.width*2,height:e.height*2,channels:3,data:t},Qn,Qn),r=Qn*Qn,i=new Float32Array(3*r);for(let o=0;o<r;o++)for(let a=0;a<3;a++)i[a*r+o]=n[o*3+a]/255;return i}function z1(e){let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{value:A1[t],prob:e[t]}}const ln=128,jm=.35,B1=["fp","laurel"],P1=.85,Jn=40;function D1(e){const r=(e.width<ln&&e.height<ln?Ia:Kn)(e,ln,ln),i=ln*ln,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function U1(e){return e[B1.indexOf("fp")]}const cn=128,L1=.15,Km=["blue","brown","green","grey","purple","red","yellow","tuile_militaire","dos_de_carte","livret_de_regles","objet_hors_jeu"],F1=7,G1=.9;function W1(e,t,n){const[r,i,o,a]=e.map(Number);if(!(o>1)||!(a>1))return null;const s=r+o/2,u=i+a/2,l=Math.max(o,a)*(1+2*L1),d=Math.max(0,st(s-l/2)),c=Math.max(0,st(u-l/2)),p=Math.min(t,st(s+l/2)),f=Math.min(n,st(u+l/2));return p-d<8||f-c<8?null:{x:d,y:c,w:p-d,h:f-c}}function q1(e){const r=(e.width<cn&&e.height<cn?Ia:Kn)(e,cn,cn),i=cn*cn,o=new Float32Array(3*i);for(let a=0;a<i;a++)for(let s=0;s<3;s++)o[s*i+a]=r[a*3+s]/255;return o}function V1(e){let t=0;for(let i=1;i<Km.length;i++)e[i]>e[t]&&(t=i);const n=e[t],r=t>=F1;return{className:Km[t],probability:n,rejected:r&&n>=G1}}const hi=3,H1=2.2,j1=.3,K1=.65,Y1=3,X1=1.3,Z1=.77;function Ym(e,t,n){const[r,i,o,a]=e,s=[];return r<=hi&&s.push("gauche"),i<=hi&&s.push("haut"),r+o>=t-hi&&s.push("droit"),i+a>=n-hi&&s.push("bas"),s}function Xm(e){const t=e[3]/Math.max(e[2],1);return t>=X1?"portrait":t<=Z1?"paysage":null}function Ha(e){const t=[...e].sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function Q1(e,t,n){for(const[r,i,o,a]of e??[])if(Math.max(Math.abs(o-r)/Math.max(t,1),Math.abs(a-i)/Math.max(n,1))>K1)return!0;return!1}function J1(e,t,n,r,i){try{const o=[...e],a=o.filter(w=>Ym(w.box,r,i).length>0);if(a.length===0)return{kept:o,dropped:[],suspects:[]};const s=o.filter(w=>!a.includes(w)),u=w=>({kept:s,dropped:a.map(b=>({banner:b,edgeReason:w})),suspects:[]});if(Q1(n,r,i))return u("photo-piste");if(s.length<Y1)return t>0?u("photo-merveilles"):{kept:o,dropped:[],suspects:a.map(w=>({family:w.family,color:w.color,box:w.box,reason:"bord-sans-scene"}))};if(a.length>(s.length+a.length)/3)return u("debordement-structurel");const l=Ha(s.map(w=>w.box[2]*w.box[3])),d=Ha(s.map(w=>w.box[2])),c=Ha(s.map(w=>w.box[3])),p=new Set(s.map(w=>Xm(w.box)).filter(w=>w!==null)),f=[...s],m=[],y=[];for(const w of a){const b=Ym(w.box,r,i),[,,x,M]=w.box,v=l>0?x*M/l:0,I=[];(b.includes("gauche")||b.includes("droit"))&&I.push(d>0?x/d:1),(b.includes("haut")||b.includes("bas"))&&I.push(c>0?M/c:1);const T=I.length>0?Math.min(...I):1,k=Xm(w.box);v>H1?m.push({banner:w,edgeReason:"bord-grosse"}):T<j1?m.push({banner:w,edgeReason:"bord-tronquee"}):k!==null&&p.size>0&&!p.has(k)?m.push({banner:w,edgeReason:"bord-orientation-adverse"}):(f.push(w),y.push({family:w.family,color:w.color,box:w.box,reason:"tronquee-par-le-bord"}))}return{kept:f,dropped:m,suspects:y}}catch{return{kept:[...e],dropped:[],suspects:[]}}}const e2=1,t2=1.5;function n2(e){return e.length<4?[]:[[e[0],e[1]],[e[1],e[2]],[e[2],e[3]],[e[3],e[0]]]}function r2(e,t,n,r){const i=r[0]-n[0],o=r[1]-n[1],a=Math.hypot(i,o);if(a<=0)return null;const s=((e-n[0])*i+(t-n[1])*o)/(a*a);return[Math.abs((e-n[0])*o-(t-n[1])*i)/a,Math.abs(s-.5)*a]}function i2(e){if(e.length===0)return null;const t=e.map(r=>r[0]),n=e.map(r=>r[1]);return Math.max(...t)-Math.min(...t)>Math.max(...n)-Math.min(...n)}function o2(e,t,n){try{const r=Number(n);if(!(r>0)||e.length<4||t.length<4)return null;const[i,o,a,s]=t,u=i+a/2,l=o+s/2;let d=null;for(const[p,f]of n2(e)){const m=r2(u,l,p,f);m!==null&&(d===null||m[0]<d[0])&&(d=m)}if(d===null)return null;const c=i2(e);return c===null?null:{distBord:d[0]/r,decalLat:d[1]/r,perpendiculaire:c!==a>s}}catch{return null}}function a2(e,t,n,r=e2,i=t2){const o=[];for(const[a,s]of t??[]){const u=o2(e,s,n);u!==null&&u.perpendiculaire&&(u.decalLat>r||u.distBord>i||o.push([u.decalLat,a]))}return o.length===0?null:(o.sort((a,s)=>a[0]-s[0]||a[1]-s[1]),o[0][1])}const wt=64,Zm=.5,s2=[.67,1.24];function Qm(e,t,n,r){const i=Math.max(0,t-r),o=Math.max(0,n-r),a=Math.min(e.width,t+r),s=Math.min(e.height,n+r),u=a-i,l=s-o;if(u<=0||l<=0)return null;const d=e.channels,c=new Uint8ClampedArray(u*l*3),p=r*r;for(let w=0;w<l;w++){const b=o+w,x=b-n;for(let M=0;M<u;M++){const v=i+M,I=v-t,T=(w*u+M)*3;if(I*I+x*x<=p){const k=(b*e.width+v)*d;c[T]=e.data[k],c[T+1]=e.data[k+1],c[T+2]=e.data[k+2]}else c[T]=255,c[T+1]=255,c[T+2]=255}}const f=Kn({width:u,height:l,channels:3,data:c},wt,wt),m=wt*wt,y=new Float32Array(3*m);for(let w=0;w<m;w++)for(let b=0;b<3;b++)y[b*m+w]=f[w*3+b]/255;return y}function u2(e){return e[1]}const pi=[1,3,6],l2=.5;function c2(e){if(e.length!==pi.length)return null;let t=0;for(let n=1;n<e.length;n++)e[n]>e[t]&&(t=n);return{denomination:pi[t],prob:e[t]}}function d2(e,t){return e.map((n,r)=>{const i=t[r]??null;return i!==null&&pi.includes(i.denomination)&&i.prob>=l2?{value:i.denomination,source:"cnn",conf:i.prob}:{value:n,source:null,conf:null}})}const h2=2.25,fi=3,p2=1.15,f2=.5,m2=2.5,g2=.75,y2=2.25,w2=1.3,_2=.77;function mi(e,t){const n=Math.max(0,Math.max(e[0],t[0])-Math.min(e[0]+e[2],t[0]+t[2])),r=Math.max(0,Math.max(e[1],t[1])-Math.min(e[1]+e[3],t[1]+t[3]));return Math.hypot(n,r)}function b2(e){const t=Array.from(new Map(e.map(o=>[`${o[0]},${o[1]}`,o])).values());if(t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]),t.length<=2)return t;const n=(o,a,s)=>(a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0]),r=[];for(const o of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],o)<=0;)r.pop();r.push(o)}const i=[];for(const o of[...t].reverse()){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],o)<=0;)i.pop();i.push(o)}return[...r.slice(0,-1),...i.slice(0,-1)]}function Jm(e,t,n){let r=!1;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[(o+1)%i];if(s>t!=l>t){const d=(u-a)*(t-s)/(l-s)+a;e<d&&(r=!r)}}return r}function x2(e,t,n){if(n.length>=3&&Jm(e,t,n))return 0;let r=Number.POSITIVE_INFINITY;const i=n.length;for(let o=0;o<i;o+=1){const[a,s]=n[o],[u,l]=n[i>1?(o+1)%i:o],d=u-a,c=l-s,p=d*d+c*c,f=p===0?0:Math.max(0,Math.min(1,((e-a)*d+(t-s)*c)/p));r=Math.min(r,Math.hypot(e-(a+f*d),t-(s+f*c)))}return r}function $2(e,t,n){const r=Math.max(Math.abs(e-(n[0]+n[2]/2))-n[2]/2,0),i=Math.max(Math.abs(t-(n[1]+n[3]/2))-n[3]/2,0);return Math.hypot(r,i)}function v2(e,t,n){const[r,i]=e,o=t[0]-r,a=t[1]-i;if(o===0&&a===0)return!1;const[s,u,l,d]=n;let c=0,p=1;const f=[[-o,r-s],[o,l-r],[-a,i-u],[a,d-i]];for(const[m,y]of f){if(m===0){if(y<0)return!1;continue}const w=y/m;if(m<0?c=Math.max(c,w):p=Math.min(p,w),c>p)return!1}return c>=p?!1:c>=.1&&p<=.95||p-c>=.15}const ja=e=>e.box[3]/Math.max(1,e.box[2]),Xt=e=>ja(e)>p2,er=e=>ja(e)>=w2||ja(e)<=_2;function Ka(e){const[t,n,r,i]=e.box;if(r>=i){const a=7*i;return[t,n-a,r,i+2*a]}const o=7*r;return[t-o,n,r+2*o,i]}function Ya(e,t,n,r,i){const o=new Set(t),a=[...e.map((z,R)=>({box:[z[0],z[1],z[2],z[3]],kind:o.has(R)?"card":"tucked",src:["banner",R]})),...n.map((z,R)=>({box:[z[0],z[1],z[2],z[3]],kind:"wonder",src:["wonder",R]}))],s=e.map(()=>"player"),u=n.map(()=>"player");if(a.length===0)return{bannerOwner:s,wonderOwner:u,opponentFound:!1,hulls:[],hullBoxCounts:[],pointOwner:()=>"player",pointInside:()=>"none"};const l=a.map(z=>[z.box[0]+z.box[2]/2,z.box[1]+z.box[3]/2]);let d=a.filter(z=>z.kind!=="wonder").map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,R)=>z-R);d.length===0&&(d=a.map(z=>Math.hypot(z.box[2],z.box[3])).sort((z,R)=>z-R));const c=d[Math.floor(d.length/2)],p=(h2*c)**2,f=a.map((z,R)=>R),m=z=>{let R=z;for(;f[R]!==R;)f[R]=f[f[R]],R=f[R];return R},y=a.map((z,R)=>z.kind==="card"?R:-1).filter(z=>z>=0),w=a.map((z,R)=>z.kind!=="card"?R:-1).filter(z=>z>=0);for(let z=0;z<y.length;z+=1)for(let R=z+1;R<y.length;R+=1){const B=y[z],L=y[R],G=a[B],Z=a[L];if(er(G)&&er(Z)&&Xt(G)!==Xt(Z))continue;const ie=l[B][0]-l[L][0],te=l[B][1]-l[L][1],ye=ie*ie+te*te;let Me=ye<=p;!Me&&er(G)&&er(Z)&&Xt(G)===Xt(Z)&&ye<=(4*c)**2&&(Me=mi(Ka(G),Ka(Z))<=.5*c),Me&&(f[m(B)]=m(L))}for(let z=0;z<w.length;z+=1)for(let R=z+1;R<w.length;R+=1){const B=w[z],L=w[R];mi(a[B].box,a[L].box)<=g2*c&&(f[m(B)]=m(L))}const b=new Map;for(const z of w){const R=m(z);b.set(R,[...b.get(R)??[],z])}const x=new Map;for(const z of y){const R=m(z);x.set(R,[...x.get(R)??[],z])}for(const z of b.values()){const R=z.filter(Z=>a[Z].kind==="wonder"&&er(a[Z])).map(Z=>Xt(a[Z])),B=R.length>0?R.filter(Boolean).length*2>R.length:null,L=[];for(const[Z,ie]of x){let te=Number.POSITIVE_INFINITY;for(const Ne of z)for(const Pe of ie)te=Math.min(te,mi(a[Ne].box,a[Pe].box));if(te>y2*c)continue;const Me=ie.filter(Ne=>Xt(a[Ne])).length/ie.length>=.5;B!==null&&Me!==B||L.push([Z,te,Me])}if(L.length===0)continue;const G=new Set(L.map(Z=>Z[2]));if(L.length>=2&&G.size===1&&B!==null){const Z=L[0][0];for(const[ie]of L.slice(1))f[m(ie)]=m(Z);f[m(z[0])]=m(Z)}else{const Z=L.reduce((ie,te)=>te[1]<ie[1]?te:ie);f[m(z[0])]=m(Z[0])}}let M=new Map;for(let z=0;z<a.length;z+=1){const R=m(z);M.set(R,[...M.get(R)??[],z])}const v=a.map((z,R)=>z.kind==="wonder"?R:-1).filter(z=>z>=0);if(v.length>0){const z=(B,L)=>{const[G,Z,ie,te]=Ka(a[B]),[ye,Me,Ne,Pe]=a[L].box,ut=Math.max(0,Math.min(G+ie,ye+Ne)-Math.max(G,ye)),ze=Math.max(0,Math.min(Z+te,Me+Pe)-Math.max(Z,Me));return ut*ze>=.9*a[B].box[2]*a[B].box[3]},R=new Map;for(let B=0;B<a.length;B+=1)if(!(a[B].kind!=="card"||!er(a[B])))for(const L of v){const G=mi(a[B].box,a[L].box);if(G<=.8*c&&Xt(a[B])!==Xt(a[L])&&z(B,L)){const Z=R.get(L);(!Z||G<Z[1])&&R.set(L,[B,G])}}for(const[B,[L]]of R){const G=m(B);for(const[Z,ie]of M){const te=ie.indexOf(L);if(te>=0&&Z!==G){ie.splice(te,1),M.set(G,[...M.get(G)??[],L]),a[L].kind="tucked";break}}}M=new Map([...M].filter(([,B])=>B.length>0))}const I=z=>z.filter(R=>a[R].kind==="card").length,T=z=>{const R=z.filter(B=>a[B].kind==="card"||a[B].kind==="wonder");return R.length===0?null:R.filter(B=>Xt(a[B])).length/R.length},k=z=>[z.reduce((R,B)=>R+l[B][0],0)/z.length,z.reduce((R,B)=>R+l[B][1],0)/z.length],S=[i[0]/2,i[1]/2],A=[...M.values()].sort((z,R)=>{const B=I(z),L=I(R);if(B!==L)return L-B;const G=Math.hypot(k(z)[0]-S[0],k(z)[1]-S[1]),Z=Math.hypot(k(R)[0]-S[0],k(R)[1]-S[1]);return G-Z}),N=k(A[0]),U=T(A[0]),V=A.map((z,R)=>{if(R===0||I(z)<fi)return"player";const B=T(z),L=B!==null&&U!==null&&Math.abs(B-U)>=f2,G=k(z),Z=r.some(ie=>v2(N,G,ie));return L||Z?"opponent":"player"});if(!V.includes("opponent")){const z=B=>B.reduce((L,G)=>L+(a[G].kind==="wonder"?1:0),0);let R=V.map((B,L)=>L).filter(B=>B>0&&(I(A[B])>=fi||z(A[B])>=2));if(R.reduce((B,L)=>B+z(A[L]),0)<1&&(R=[]),R.length>0&&(I(A[0])<2*fi||R.reduce((B,L)=>B+I(A[L]),0)<2*fi)&&(R=[]),R.length>0){const B=new Map(R.map(Z=>[Z,k(A[Z])])),L=(Z,ie)=>(Z[0]-ie[0])**2+(Z[1]-ie[1])**2;if(R.every((Z,ie)=>R.slice(ie+1).every(te=>L(B.get(Z),B.get(te))<Math.min(L(B.get(Z),N),L(B.get(te),N)))))for(const Z of R)V[Z]="opponent"}}const F=[],O=[];let H=!1;A.forEach((z,R)=>{const B=V[R];B==="opponent"&&(H=!0);const L=[],G=[];for(const Z of z){const[ie,te,ye,Me]=a[Z].box;L.push([ie,te],[ie+ye,te],[ie,te+Me],[ie+ye,te+Me]),G.push(a[Z].box);const[Ne,Pe]=a[Z].src;Ne==="banner"?s[Pe]=B:u[Pe]=B}F.push([B,b2(L)]),O.push([B,G])});const X=(z,R,B)=>Math.min(...O[B][1].map(L=>$2(z,R,L))),J=(z,R)=>F.map(([,B],L)=>B.length>=3&&Jm(z,R,B)?L:-1).filter(B=>B>=0),he=(z,R)=>{if(F.length===0)return"player";const B=c>0?m2*c:Number.POSITIVE_INFINITY,L=J(z,R);if(L.length>0){const ie=L.reduce((te,ye)=>X(z,R,ye)<X(z,R,te)?ye:te);return F[ie][0]}let G=-1,Z=Number.POSITIVE_INFINITY;return F.forEach(([,ie],te)=>{const ye=x2(z,R,ie);ye<Z&&(G=te,Z=ye)}),G>=0&&Z<=B?F[G][0]:"none"},W=(z,R)=>{if(F.length===0)return"none";const B=J(z,R);if(B.length===0)return"none";const L=B.reduce((G,Z)=>X(z,R,Z)<X(z,R,G)?Z:G);return F[L][0]};return{bannerOwner:s,wonderOwner:u,opponentFound:H,hulls:F,hullBoxCounts:O.map(([,z])=>z.length),pointOwner:he,pointInside:W}}const S2=3;function M2(e,t=S2){const n=e.length,r=Array.from({length:n},(a,s)=>s),i=a=>{for(;r[a]!==a;)r[a]=r[r[a]],a=r[a];return a};for(let a=0;a<n;a+=1)for(let s=a+1;s<n;s+=1){const u=e[a],l=e[s],d=Number(u.center[0]),c=Number(u.center[1]),p=Number(l.center[0]),f=Number(l.center[1]),m=Number(u.radius??0),y=Number(l.radius??0);![d,c,p,f,m,y].every(Number.isFinite)||m<=0||y<=0||Math.hypot(d-p,c-f)<=t*(m+y)&&(r[i(a)]=i(s))}const o=new Map;for(let a=0;a<n;a+=1){const s=i(a);o.has(s)||o.set(s,[]),o.get(s).push(a)}return[...o.values()]}function I2(e,t,n){const r=Number(n[0]),i=Number(n[1]),o=Number(n[2]),a=Number(n[3]),s=Math.max(Math.min(r,o)-e,0,e-Math.max(r,o)),u=Math.max(Math.min(i,a)-t,0,t-Math.max(i,a));return Math.hypot(s,u)}function E2(e,t,n,r){const i=()=>e.filter(o=>t.pointOwner(Number(o.center[0]),Number(o.center[1]))===n);try{const o=new Set(i());if(o.size===0)return[];const a=M2(e),s=[];for(const l of a){const d=l.map(M=>e[M]),c=d.filter(M=>o.has(M));if(c.length===0)continue;let p=0,f=0,m=0;for(const M of d){const v=Number(M.center[0]),I=Number(M.center[1]);f+=v,m+=I,t.pointInside(v,I)===n&&(p+=1)}const y=f/d.length,w=m/d.length,b=r&&r.length>0?Math.min(...r.map(M=>I2(y,w,M))):0,x=c.reduce((M,v)=>M+(Number(v.denomination??0)||0),0);s.push({miens:c,inside:p,dPiste:b,valeur:x})}return s.length===0?[]:s.length===1?s[0].miens:s.reduce((l,d)=>{const c=[l.inside>0?1:0,l.inside,l.dPiste,l.valeur],p=[d.inside>0?1:0,d.inside,d.dPiste,d.valeur];for(let f=0;f<4;f+=1){if(p[f]>c[f])return d;if(p[f]<c[f])return l}return l}).miens}catch{try{return i()}catch{return[...e]}}}const T2=1280,k2=80,C2=3,A2=3,R2=.3,O2=2.4,N2=1,z2=5.2,B2=5;function Xa(e){const t=e.filter(r=>r&&r.length>=4).map(r=>Math.min(r[2],r[3])).sort((r,i)=>r-i),n=t.length;return n===0?0:n%2?t[(n-1)/2]:.5*(t[n/2-1]+t[n/2])}function P2(e,t,n){const r=Math.min(e,t),i=Math.max(e,t);return!(n>0)||!(r>0)?!1:r/n>=R2&&r/n<=O2&&i/n>=N2&&i/n<=z2&&i/r<=B2}function D2(e,t,n){const r=Math.max(e,t);return!(r>0)||!(n>0)?!1:n*T2/r<k2}function U2(e,t){if(t.length===0)return e.slice();const n=e.map(r=>{const i=r.poly.map(s=>s[0]),o=r.poly.map(s=>s[1]),a=Math.max(1,i.length);return{hull:r,cx:i.reduce((s,u)=>s+u,0)/a,cy:o.reduce((s,u)=>s+u,0)/a,extra:[]}});if(n.length===0)return e.slice();for(const r of t){const i=Number(r[0]),o=Number(r[1]),a=Number(r[2]),s=Number(r[3]);if(![i,o,a,s].every(Number.isFinite))continue;const u=i+a/2,l=o+s/2;let d=n[0],c=1/0;for(const p of n){const f=(u-p.cx)**2+(l-p.cy)**2;f<c&&(c=f,d=p)}d.extra.push([i,o],[i+a,o+s])}return n.map(r=>r.extra.length===0?r.hull:{...r.hull,poly:[...r.hull.poly.map(i=>[i[0],i[1]]),...r.extra]})}function eg(e,t,n,r,i=[]){const o=Xa(n);if(!D2(e,t,o))return[];const a=r.filter(l=>l.n>=A2&&l.poly.length>0).slice().sort((l,d)=>d.n-l.n).slice(0,2),s=Math.round(o*C2),u=[];for(const l of U2(a,i)){const d=l.poly.map(w=>w[0]),c=l.poly.map(w=>w[1]);if(d.length===0)continue;const p=Math.max(0,Math.trunc(Math.min(...d))-s),f=Math.max(0,Math.trunc(Math.min(...c))-s),m=Math.min(e,Math.trunc(Math.max(...d))+s),y=Math.min(t,Math.trunc(Math.max(...c))+s);m>p&&y>f&&u.push([p,f,m,y])}return u}function L2(e,t,n){if(!e||e.length<4)return null;const[r,i,o,a]=[e[0],e[1],e[2],e[3]];return P2(o,a,n)?[Math.round(r+t[0]),Math.round(i+t[1]),Math.round(o),Math.round(a)]:null}function F2(e,t,n,r,i){return eg(e,t,n,r,i)}function G2(e,t){var s,u,l,d;const[n,r,i,o]=t,a=[];for(const c of e){const p=Number((s=c.box)==null?void 0:s[0]),f=Number((u=c.box)==null?void 0:u[1]),m=Number((l=c.box)==null?void 0:l[2]),y=Number((d=c.box)==null?void 0:d[3]);[p,f,m,y].every(Number.isFinite)&&(p+m<n||p>i||f+y<r||f>o||a.push({...c,box:[Math.round(p-n),Math.round(f-r),Math.round(m),Math.round(y)]}))}return a}function W2(e){const t=[];for(const n of e){const r=n==null?void 0:n.boundingBox;if(!r||!Number.isFinite(r.width)||!Number.isFinite(r.height))continue;const i=r.x+r.width/2,o=r.y+r.height/2;let a=!1;for(const s of t){if(n.id&&s.id===n.id){a=!0;break}const u=s.boundingBox,l=u.x+u.width/2,d=u.y+u.height/2,c=.5*Math.min(u.width,u.height);if((i-l)**2+(o-d)**2<c*c){a=!0;break}}a||t.push(n)}return t}function tg(e,t){return{x:Math.round(e.x+t[0]),y:Math.round(e.y+t[1]),width:Math.round(e.width),height:Math.round(e.height)}}const q2=1.1,V2=3.2,H2=20,j2=.5,K2=1280,Y2=.18,X2=28,Z2=.3;function Q2(e){const t=Math.min(...e),n=Math.max(...e);let r=(t+n)/2;for(let a=0;a<30;a++){const s=e.filter(d=>d<=r),u=e.filter(d=>d>r);if(s.length===0||u.length===0)return[e.map((d,c)=>c)];const l=(s.reduce((d,c)=>d+c,0)/s.length+u.reduce((d,c)=>d+c,0)/u.length)/2;if(Math.abs(l-r)<1)break;r=l}const i=[],o=[];return e.forEach((a,s)=>(a<=r?i:o).push(s)),[i,o]}function J2(e,t,n=q2){const[r,i]=t;if(e.length<3||r<=0||i<=0)return[];const o=e.map(l=>l[0]+l[2]/2),a=e.map(l=>l[1]+l[3]/2),s=Math.max(...o)-Math.min(...o)>Math.max(...a)-Math.min(...a)?o:a,u=[];for(const l of Q2(s)){if(l.length===0)continue;const d=l.map(A=>e[A]),c=d.map(A=>Math.min(A[2],A[3])).sort((A,N)=>A-N),p=c[Math.trunc(c.length/2)],f=V2*p,m=Math.max(0,Math.min(...d.map(A=>A[0]))-f),y=Math.max(0,Math.min(...d.map(A=>A[1]))-f),w=Math.min(r,Math.max(...d.map(A=>A[0]+A[2]))+f),b=Math.min(i,Math.max(...d.map(A=>A[1]+A[3]))+f),x=Math.max(w-m,b-y);if(x<=0)continue;const M=j2*p*K2/x,v=M>0?Math.max(1,Math.ceil(H2/M)):1;if(v===1){u.push([Math.trunc(m),Math.trunc(y),Math.trunc(w),Math.trunc(b)]);continue}const I=w-m>=b-y,k=(I?w-m:b-y)/v,S=k*(1+Y2);for(let A=0;A<v;A++){let N=(I?m:y)+A*k-(S-k)/2;N=Math.max(I?m:y,N);const U=Math.min(I?w:b,N+S);u.push(I?[Math.trunc(N),Math.trunc(y),Math.trunc(U),Math.trunc(b)]:[Math.trunc(m),Math.trunc(N),Math.trunc(w),Math.trunc(U)])}}return u.filter(([l,d,c,p])=>Math.max(r,i)/Math.max(1,Math.max(c-l,p-d))>=n)}function ex(e,t,n,r=X2){const[i,o]=n,a=e;for(const[s,u,l,d]of t){const c=(s+l)/2+i,p=(u+d)/2+o;a.some(([m,y,w,b])=>{const x=c-(m+w)/2,M=p-(y+b)/2;return Math.hypot(x,M)<=r})||a.push([s+i,u+o,l+i,d+o])}return a}function tx(e,t,n,r=Z2){for(const i of n){const o=r*Math.min(i[2],i[3]);if(i[0]-o<=e&&e<=i[0]+i[2]+o&&i[1]-o<=t&&t<=i[1]+i[3]+o)return!0}return!1}function nx(e,t,n){return n.some(([r,i,o,a])=>r<=e&&e<=o&&i<=t&&t<=a)}function rx(e,t,n,r){return n.length===0?!1:nx(e,t,n)&&!tx(e,t,r)}const ng=4,rg=8,gi=5,Rn="base-game rule";function Dt(e,t){return{code:e,message:t,severity:"warning"}}function Za(e){const t=new Set,n=new Set;for(const r of e)t.has(r)&&n.add(r),t.add(r);return[...n].sort()}function ix(e,t=""){const n=e.filter(a=>!!a),r=t||"a player",i=[];n.length>ng&&i.push(Dt("TOO_MANY_WONDERS",`${r}: ${n.length} wonders recognised, but a player builds at most ${ng} (${Rn}) — at least one reading is wrong. Check the wonder list in the review; a card seen at an angle can be named as a wonder.`));const o=Za(n);return o.length>0&&i.push(Dt("DUPLICATE_WONDER",`${r}: wonder(s) counted twice — ${o.join(", ")}. Only one copy of each wonder exists (${Rn}), so one of the two readings is wrong.`)),i}function ox(e){const t=[],n=Object.entries(e).map(([i,o])=>[i,new Set(o.filter(a=>!!a))]),r=Object.values(e).reduce((i,o)=>i+o.filter(Boolean).length,0);r>rg&&t.push(Dt("TOO_MANY_WONDERS_IN_PLAY",`${r} wonders recognised across both cities, but only ${rg} are in play (${Rn}) — at least one reading is wrong.`));for(let i=0;i<n.length;i++){const[o,a]=n[i];for(let s=i+1;s<n.length;s++){const[u,l]=n[s],d=[...a].filter(c=>l.has(c)).sort();d.length>0&&t.push(Dt("WONDER_IN_BOTH_CITIES",`wonder(s) assigned to both cities at once (${o} and ${u}): ${d.join(", ")} — the city split misread one of them.`))}}return t}function ax(e,t=null){const n=[],r=Object.values(e).flatMap(o=>o.filter(a=>!!a));r.length>gi&&n.push(Dt("TOO_MANY_TOKENS",`${r.length} Progress tokens claimed by the cities, but only ${gi} are in play (${Rn}) — reserve tokens sitting on the board were probably counted as owned.`));const i=Za(r);if(i.length>0&&n.push(Dt("DUPLICATE_TOKEN",`Progress token(s) counted twice: ${i.join(", ")} — only one copy of each token exists (${Rn}).`)),t!==null){const o=t.filter(Boolean),a=r.length+o.length;a!==gi&&n.push(Dt("TOKEN_COUNT_MISMATCH",`${r.length} token(s) in the cities + ${t.length} in the reserve = ${a}, but exactly ${gi} are in play (${Rn}) — one is missing or one was counted twice.`));const s=new Set(o),u=[...new Set(r.filter(l=>s.has(l)))].sort();u.length>0&&n.push(Dt("TOKEN_IN_CITY_AND_RESERVE",`token(s) seen both in a city and in the reserve: ${u.join(", ")} — the board-token exclusion did not fire.`))}return n}function sx(e,t=""){const n=t||"a player",r=[],i=e.filter(a=>!a).length;i>0&&r.push(Dt("UNNAMED_GUILD",`${n}: ${i} guild(s) detected but not identified — their points cannot be computed. Name them in the review.`));const o=Za(e.filter(a=>!!a));return o.length>0&&r.push(Dt("DUPLICATE_GUILD",`${n}: guild(s) counted twice — ${o.join(", ")}. Only one copy of each guild exists (${Rn}).`)),r}const ux=[{id:"merchants-guild",name:"Merchants Guild",nameFr:"Guilde des commerçants",color:"guild",age:3,victoryPoints:0,variableScoring:"merchantsGuild",cost:{clay:1,wood:1,glass:1,papyrus:1}},{id:"shipowners-guild",name:"Shipowners Guild",nameFr:"Guilde des armateurs",color:"guild",age:3,victoryPoints:0,variableScoring:"shipownersGuild",cost:{clay:2,glass:1,papyrus:1}},{id:"builders-guild",name:"Builders Guild",nameFr:"Guilde des bâtisseurs",color:"guild",age:3,victoryPoints:0,variableScoring:"buildersGuild",cost:{stone:2,clay:1,wood:1,glass:1}},{id:"magistrates-guild",name:"Magistrates Guild",nameFr:"Guilde des magistrats",color:"guild",age:3,victoryPoints:0,variableScoring:"magistratesGuild",cost:{wood:2,clay:1,papyrus:1}},{id:"scientists-guild",name:"Scientists Guild",nameFr:"Guilde des scientifiques",color:"guild",age:3,victoryPoints:0,variableScoring:"scientistsGuild",cost:{wood:2,clay:2}},{id:"tacticians-guild",name:"Tacticians Guild",nameFr:"Guilde des tacticiens",color:"guild",age:3,victoryPoints:0,variableScoring:"tacticiansGuild",cost:{stone:2,clay:1,papyrus:1}},{id:"moneylenders-guild",name:"Moneylenders Guild",nameFr:"Guilde des usuriers",color:"guild",age:3,victoryPoints:0,variableScoring:"moneylendersGuild",cost:{stone:2,wood:2}}],lx=[{id:"lumber-yard",name:"Lumber Yard",nameFr:"Chantier",color:"raw",age:1,victoryPoints:0},{id:"logging-camp",name:"Logging Camp",nameFr:"Exploitation",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"clay-pool",name:"Clay Pool",nameFr:"Bassin argileux",color:"raw",age:1,victoryPoints:0},{id:"clay-pit",name:"Clay Pit",nameFr:"Cavité",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"quarry",name:"Quarry",nameFr:"Gisement",color:"raw",age:1,victoryPoints:0},{id:"stone-pit",name:"Stone Pit",nameFr:"Mine",color:"raw",age:1,victoryPoints:0,coinCost:1},{id:"glassworks",name:"Glassworks",nameFr:"Verrerie",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"press",name:"Press",nameFr:"Presse",color:"manufactured",age:1,victoryPoints:0,coinCost:1},{id:"theater",name:"Theater",nameFr:"Théâtre",color:"civilian",age:1,victoryPoints:3},{id:"altar",name:"Altar",nameFr:"Autel",color:"civilian",age:1,victoryPoints:3,providesChain:"moon"},{id:"baths",name:"Baths",nameFr:"Bains",color:"civilian",age:1,victoryPoints:3,providesChain:"drop",cost:{stone:1}},{id:"pharmacist",name:"Pharmacist",nameFr:"Officine",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"mortar",providesChain:"mortar-chain",cost:{glass:2}},{id:"apothecary",name:"Apothecary",nameFr:"Apothicaire",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain",cost:{glass:1}},{id:"workshop",name:"Workshop",nameFr:"Atelier",color:"scientific",age:1,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain",cost:{papyrus:1}},{id:"scriptorium",name:"Scriptorium",nameFr:"Scriptorium",color:"scientific",age:1,victoryPoints:0,scienceSymbol:"inkwell",providesChain:"inkwell-chain",coinCost:2},{id:"stone-reserve",name:"Stone Reserve",nameFr:"Dépôt de pierre",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"clay-reserve",name:"Clay Reserve",nameFr:"Dépôt d'argile",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"wood-reserve",name:"Wood Reserve",nameFr:"Dépôt de bois",color:"commercial",age:1,victoryPoints:0,coinCost:3},{id:"tavern",name:"Tavern",nameFr:"Taverne",color:"commercial",age:1,victoryPoints:0,providesChain:"jug"},{id:"guard-tower",name:"Guard Tower",nameFr:"Tour de garde",color:"military",age:1,victoryPoints:0,shields:1},{id:"stable",name:"Stable",nameFr:"Écuries",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"horseshoe",cost:{wood:1}},{id:"garrison",name:"Garrison",nameFr:"Caserne",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"sword",cost:{clay:1}},{id:"palisade",name:"Palisade",nameFr:"Palissade",color:"military",age:1,victoryPoints:0,shields:1,providesChain:"tower",coinCost:2}],cx=[{id:"sawmill",name:"Sawmill",nameFr:"Scierie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"brickyard",name:"Brickyard",nameFr:"Briqueterie",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"shelf-quarry",name:"Shelf Quarry",nameFr:"Carrière",color:"raw",age:2,victoryPoints:0,coinCost:2},{id:"glass-blower",name:"Glass-Blower",nameFr:"Soufflerie",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"drying-room",name:"Drying Room",nameFr:"Séchoir",color:"manufactured",age:2,victoryPoints:0,coinCost:2},{id:"courthouse",name:"Courthouse",nameFr:"Tribunal",color:"civilian",age:2,victoryPoints:5,cost:{wood:2,glass:1}},{id:"statue",name:"Statue",nameFr:"Statue",color:"civilian",age:2,victoryPoints:4,providesChain:"column",chainFrom:"moon",cost:{clay:2}},{id:"temple",name:"Temple",nameFr:"Temple",color:"civilian",age:2,victoryPoints:4,providesChain:"sun",chainFrom:"drop",cost:{wood:1,papyrus:1}},{id:"aqueduct",name:"Aqueduct",nameFr:"Aqueduc",color:"civilian",age:2,victoryPoints:5,cost:{stone:3}},{id:"rostrum",name:"Rostrum",nameFr:"Rostres",color:"civilian",age:2,victoryPoints:4,providesChain:"horseshoe",cost:{stone:1,wood:1}},{id:"school",name:"School",nameFr:"École",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"wheel",providesChain:"wheel-chain-2",cost:{wood:1,papyrus:2}},{id:"laboratory",name:"Laboratory",nameFr:"Laboratoire",color:"scientific",age:2,victoryPoints:1,scienceSymbol:"pendulum",providesChain:"pendulum-chain-2",cost:{wood:1,glass:2}},{id:"library",name:"Library",nameFr:"Bibliothèque",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"inkwell",chainFrom:"inkwell-chain",cost:{stone:1,wood:1,glass:1}},{id:"dispensary",name:"Dispensary",nameFr:"Dispensaire",color:"scientific",age:2,victoryPoints:2,scienceSymbol:"mortar",chainFrom:"mortar-chain",cost:{clay:2,stone:1}},{id:"forum",name:"Forum",nameFr:"Forum",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel",coinCost:3,cost:{clay:1}},{id:"caravansery",name:"Caravansery",nameFr:"Caravansérail",color:"commercial",age:2,victoryPoints:0,coinCost:2,cost:{glass:1,papyrus:1}},{id:"customs-house",name:"Customs House",nameFr:"Douanes",color:"commercial",age:2,victoryPoints:0,coinCost:4},{id:"brewery",name:"Brewery",nameFr:"Brasserie",color:"commercial",age:2,victoryPoints:0,providesChain:"barrel-2"},{id:"horse-breeders",name:"Horse Breeders",nameFr:"Haras",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"horseshoe",cost:{clay:1,wood:1}},{id:"barracks",name:"Barracks",nameFr:"Baraquements",color:"military",age:2,victoryPoints:0,shields:1,chainFrom:"sword",coinCost:3},{id:"archery-range",name:"Archery Range",nameFr:"Champ de tir",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"target",cost:{stone:1,wood:1,papyrus:1}},{id:"parade-ground",name:"Parade Ground",nameFr:"Place d'armes",color:"military",age:2,victoryPoints:0,shields:2,providesChain:"mask",cost:{clay:2,glass:1}},{id:"walls",name:"Walls",nameFr:"Muraille",color:"military",age:2,victoryPoints:0,shields:2,cost:{stone:2}}],dx=[{id:"pantheon",name:"Pantheon",nameFr:"Panthéon",color:"civilian",age:3,victoryPoints:6,chainFrom:"sun",cost:{clay:1,wood:1,papyrus:2}},{id:"gardens",name:"Gardens",nameFr:"Jardins",color:"civilian",age:3,victoryPoints:6,chainFrom:"column",cost:{clay:2,wood:2}},{id:"town-hall",name:"Town Hall",nameFr:"Hôtel de ville",color:"civilian",age:3,victoryPoints:7,cost:{stone:3,wood:2}},{id:"palace",name:"Palace",nameFr:"Palace",color:"civilian",age:3,victoryPoints:7,cost:{clay:1,stone:1,wood:1,glass:2}},{id:"senate",name:"Senate",nameFr:"Sénat",color:"civilian",age:3,victoryPoints:5,chainFrom:"horseshoe",cost:{clay:2,stone:1,papyrus:1}},{id:"obelisk",name:"Obelisk",nameFr:"Obélisque",color:"civilian",age:3,victoryPoints:5,cost:{stone:2,glass:1}},{id:"academy",name:"Academy",nameFr:"Académie",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{stone:1,wood:1,glass:2}},{id:"study",name:"Study",nameFr:"Étude",color:"scientific",age:3,victoryPoints:3,scienceSymbol:"sundial",cost:{wood:2,glass:1,papyrus:1}},{id:"university",name:"University",nameFr:"Université",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"wheel-chain-2",cost:{clay:1,glass:1,papyrus:1}},{id:"observatory",name:"Observatory",nameFr:"Observatoire",color:"scientific",age:3,victoryPoints:2,scienceSymbol:"globe",chainFrom:"pendulum-chain-2",cost:{stone:1,papyrus:2}},{id:"chamber-of-commerce",name:"Chamber of Commerce",nameFr:"Chambre de commerce",color:"commercial",age:3,victoryPoints:3,variableScoring:"chamberOfCommerce",cost:{papyrus:2}},{id:"port",name:"Port",nameFr:"Port",color:"commercial",age:3,victoryPoints:3,variableScoring:"port",cost:{wood:1,glass:1,papyrus:1}},{id:"armory",name:"Armory",nameFr:"Armurerie",color:"commercial",age:3,victoryPoints:3,variableScoring:"armory",cost:{stone:2,glass:1}},{id:"lighthouse",name:"Lighthouse",nameFr:"Phare",color:"commercial",age:3,victoryPoints:3,variableScoring:"lighthouse",chainFrom:"jug",cost:{clay:2,glass:1}},{id:"arena",name:"Arena",nameFr:"Arène",color:"commercial",age:3,victoryPoints:3,variableScoring:"arena",chainFrom:"barrel-2",cost:{clay:1,stone:1,wood:1}},{id:"pretorium",name:"Pretorium",nameFr:"Prétoire",color:"military",age:3,victoryPoints:0,shields:3,coinCost:8},{id:"arsenal",name:"Arsenal",nameFr:"Arsenal",color:"military",age:3,victoryPoints:0,shields:3,cost:{clay:3,wood:2}},{id:"fortifications",name:"Fortifications",nameFr:"Fortifications",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"tower",cost:{stone:2,clay:1,papyrus:1}},{id:"siege-workshop",name:"Siege Workshop",nameFr:"Atelier de siège",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"target",cost:{wood:3,glass:1}},{id:"circus",name:"Circus",nameFr:"Cirque",color:"military",age:3,victoryPoints:0,shields:2,chainFrom:"mask",cost:{clay:2,stone:2}}],hx=[...lx,...cx,...dx,...ux];Object.fromEntries(hx.map(e=>[e.id,e]));const px=Object.fromEntries([{id:"the-appian-way",name:"The Appian Way",nameFr:"La Via Appia",victoryPoints:3,description:"The opponent loses 3 coins. Take another turn. Once built, repeated discards are not affected. Worth 3 victory points."},{id:"circus-maximus",name:"Circus Maximus",nameFr:"Le Circus Maximus",victoryPoints:3,shields:1,description:"Destroy one grey (manufactured) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-colossus",name:"The Colossus",nameFr:"Le Colosse",victoryPoints:3,shields:2,description:"Provides 2 shields. Worth 3 victory points."},{id:"the-great-library",name:"The Great Library",nameFr:"La Grande Bibliothèque",victoryPoints:4,description:"Randomly draw 3 of the Progress tokens discarded at game setup and keep one. Worth 4 victory points."},{id:"the-great-lighthouse",name:"The Great Lighthouse",nameFr:"Le Grand Phare",victoryPoints:4,description:"Once built, the owner may take any raw or manufactured good of choice each turn (production effect). Worth 4 victory points."},{id:"the-hanging-gardens",name:"The Hanging Gardens",nameFr:"Les Jardins Suspendus",victoryPoints:3,description:"Gain 6 coins. Take another turn. Worth 3 victory points."},{id:"the-mausoleum",name:"The Mausoleum",nameFr:"Le Mausolée",victoryPoints:2,description:"Build, for free, any one card from the discard pile. Worth 2 victory points."},{id:"piraeus",name:"Piraeus",nameFr:"Le Pirée",victoryPoints:2,description:"Once built, the owner may take any one manufactured good (glass or papyrus) of choice each turn. Take another turn. Worth 2 victory points."},{id:"the-pyramids",name:"The Pyramids",nameFr:"Les Pyramides",victoryPoints:9,description:"Worth 9 victory points."},{id:"the-sphinx",name:"The Sphinx",nameFr:"Le Sphinx",victoryPoints:6,description:"Take another turn. Worth 6 victory points."},{id:"the-statue-of-zeus",name:"The Statue of Zeus",nameFr:"La Statue de Zeus",victoryPoints:3,shields:1,description:"Destroy one brown (raw) card the opponent has built. Provides 1 shield. Worth 3 victory points."},{id:"the-temple-of-artemis",name:"The Temple of Artemis",nameFr:"Le Temple d'Artémis",victoryPoints:0,description:"Gain 12 coins. Take another turn. Worth 0 victory points."}].map(e=>[e.id,e]));Object.fromEntries([{id:"agriculture",name:"Agriculture",nameFr:"Agriculture",victoryPoints:4,description:"Gain 6 coins immediately. Worth 4 victory points at game end."},{id:"architecture",name:"Architecture",nameFr:"Architecture",description:"Any future Wonder constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"economy",name:"Economy",nameFr:"Économie",description:"When the opponent uses the trading-cost coins (pays the bank to buy goods), the owner receives those coins instead."},{id:"law",name:"Law",nameFr:"Loi",variableScoring:"law",description:"Grants one science symbol, counting toward the six-symbol scientific victory and toward pairs of identical symbols."},{id:"masonry",name:"Masonry",nameFr:"Maçonnerie",description:"Any future blue (civilian) building constructed by the owner costs 2 fewer resources of the owner's choice."},{id:"mathematics",name:"Mathematics",nameFr:"Mathématiques",variableScoring:"mathematics",description:"Worth 3 victory points at game end for EACH Progress token the owner possesses (including this one)."},{id:"philosophy",name:"Philosophy",nameFr:"Philosophie",victoryPoints:7,description:"Worth 7 victory points at game end."},{id:"strategy",name:"Strategy",nameFr:"Stratégie",description:"Whenever the owner builds a red (military) building, it provides 1 additional shield."},{id:"theology",name:"Theology",nameFr:"Théologie",description:"Every future Wonder built by the owner grants an extra turn."},{id:"urbanism",name:"Urbanism",nameFr:"Urbanisme",description:"Gain 6 coins immediately. When the owner builds a card for free via a chain link, they also gain 4 coins."}].map(e=>[e.id,e]));const ig=.2,fx=.3,og=.25;function mx(e,t,n){if(t.height<=0)return!1;const r=t.width/t.height;if(Math.abs(Math.log(r))<=og)return!1;const i=e.x+e.width,o=e.y+e.height;for(const a of n){const s=a.box;if(!s||s.length<4||s[3]<=0)continue;const u=s[0]+s[2]/2,l=s[1]+s[3]/2;if(!(u>=e.x&&u<=i&&l>=e.y&&l<=o))continue;const d=s[2]/s[3];if(!(Math.abs(Math.log(d))<=og)&&r>1==d>1)return!0}return!1}async function gx(e,t,n){const[r,i,o,a]=t;if(o<=0||a<=0)return null;const s=Math.round(o*ig),u=Math.round(a*ig),l=Math.max(0,Math.round(r-s)),d=Math.max(0,Math.round(i-u)),c=Math.min(e.width,Math.round(r+o+s)),p=Math.min(e.height,Math.round(i+a+u)),f=c-l,m=p-d;if(f<=0||m<=0)return null;const y=e.channels,w=new Uint8ClampedArray(f*m*y);for(let M=0;M<m;M++){const v=((d+M)*e.width+l)*y;w.set(e.data.subarray(v,v+f*y),M*f*y)}const b={width:f,height:m,channels:y,data:w};let x=null;for(let M=0;M<4;M++){const v=M===0?b:Kt(b,M),I=v.width,T=I-Math.floor(fx*I),k=I-T;if(k<=0)continue;const S=new Uint8ClampedArray(k*v.height*v.channels);for(let F=0;F<v.height;F++){const O=(F*I+T)*v.channels;S.set(v.data.subarray(O,O+k*v.channels),F*k*v.channels)}const A={width:k,height:v.height,channels:v.channels,data:S},N=qa(A),V=(await n.run({[n.inputNames[0]]:new We("float32",N,[1,3,Pt,Pt])}))[n.outputNames[0]].data[1]??0;x=x===null?V:Math.max(x,V)}return x}async function ag(e,t,n,r,i,o,a){var f;const s=(m,y,w,b)=>{const x=Math.max(0,Math.round(m)),M=Math.max(0,Math.round(y)),v=Math.min(n.width,Math.round(m+w)),I=Math.min(n.height,Math.round(y+b)),T=v-x,k=I-M;if(T<=0||k<=0)return null;const S=n.channels,A=new Uint8ClampedArray(T*k*S);for(let N=0;N<k;N++){const U=((M+N)*n.width+x)*S;A.set(n.data.subarray(U,U+T*S),N*T*S)}return{width:T,height:k,channels:S,data:A}},u=async m=>(await i.run({[i.inputNames[0]]:new We("float32",m,[1,3,Zn,Zn])}))[i.outputNames[0]].data,l=new Map;for(const m of r){const[y,w,b,x]=m;if(b<=0||x<=0)continue;const M=s(y,w,b,x);if(M===null)continue;const{id:v,prob:I}=await C1(M,u);if(v===""||I<M1)continue;const T=l.get(v);(T===void 0||I>T.prob)&&l.set(v,{prob:I,box:m})}const d=[],c=await e.tuckClassifier(),p=await e.tuckBoxClassifier();for(const[m,{prob:y,box:w}]of l){const[b,x,M,v]=w;let I={x:Math.round(b),y:Math.round(x),width:Math.round(M),height:Math.round(v)},T=null,k=[],S=null;if(Date.now()<o)try{const X=await e.wonderRef(m);if(X!==null){const J=Om(t,n,X,w);if(J!==null){T=J.footprint,k=J.overflow;const he=T.map(B=>B[0]),W=T.map(B=>B[1]),z=Math.max(0,Math.round(Math.min(...he))),R=Math.max(0,Math.round(Math.min(...W)));if(I={x:z,y:R,width:Math.min(n.width,Math.round(Math.max(...he)))-z,height:Math.min(n.height,Math.round(Math.max(...W)))-R},c!==null)try{const B=Rm(t,n,X,T);if(B!==null){const L=qa(B),G=await c.run({[c.inputNames[0]]:new We("float32",L,[1,3,Pt,Pt])});S=zm(G[c.outputNames[0]].data).prob}}catch{}}}}catch(X){console.warn(`[wonders-cls] ${m} registration failed:`,X)}const A=T!==null?Ga(T,k):null,N=[];if(S!==null&&N.push(S>=Wa?1:0),p!==null)try{const X=await gx(n,w,p);X!==null&&N.push(X>=Wa?1:0)}catch{}const U=A??I,V=a.some(X=>{const J=X.box[0]+X.box[2]/2,he=X.box[1]+X.box[3]/2;return J>=U.x&&J<=U.x+U.width&&he>=U.y&&he<=U.y+U.height});N.push(V?1:0);let F=N.length>0&&N.reduce((X,J)=>X+J,0)*2>N.length;F&&mx(U,I,a)&&(F=!1);const O={id:m,name:((f=px[m])==null?void 0:f.name)??m,builtWithCardUnderneath:F,boundingBox:I,confidence:Math.round(y*1e4)/1e4,...A?{tuckRegion:A}:{}},H=A??I;d.push({obj:O,edgeScores:null,zone:{x0:H.x,y0:H.y,x1:H.x+H.width,y1:H.y+H.height},quad:T,region:A})}return d}async function sg(e,t,n,r,i,o){const a=await e.localiseWonders(n);return a.length===0?[]:ag(e,t,n,a,r,i,o)}function yx(e,t){const n=tg(e.obj.boundingBox,t),r=e.region===null?null:tg(e.region,t),i=r??n;return{obj:{...e.obj,boundingBox:n,...e.region===null?{}:{tuckRegion:r}},edgeScores:e.edgeScores,zone:{x0:i.x,y0:i.y,x1:i.x+i.width,y1:i.y+i.height},quad:e.quad===null?null:e.quad.map(([o,a])=>[o+t[0],a+t[1]]),region:r}}async function ug(e){try{const t=F2(e.image.width,e.image.height,e.banners.map(a=>a.box),e.hulls,e.wonderBoxes);if(t.length===0)return[];const n=[];for(const a of t){const s=e.cropFrame(a);if(!(s.width<=0||s.height<=0))for(const u of await e.detect(s,G2(e.banners,a)))n.push(yx(u,a))}if(e.builtSeenOut)for(const a of n)a.obj.id&&a.obj.builtWithCardUnderneath===!0&&e.builtSeenOut.add(a.obj.id);if(n.length===0)return[];const r=[...e.known.map(a=>({boundingBox:a.boundingBox,id:a.id,neuf:-1})),...n.map((a,s)=>({boundingBox:a.obj.boundingBox,id:a.obj.id,neuf:s}))],i=W2(r),o=[];for(const a of i){const s=a.neuf;s>=0&&o.push(n[s])}return o}catch(t){return console.warn("[#149 wonder-rescan] skipped:",t),[]}}const Ye="/7wd-scorer/models/",Qa=[];let At=null;function wx(){Qa.length=0,At=null}function _x(e){const t=performance.now();At!==null&&Qa.push({nom:At.nom,ms:Math.round(t-At.debut)}),At={nom:e,debut:t}}function bx(){const e=[...Qa];At!==null&&e.push({nom:`${At.nom} (en cours)`,ms:Math.round(performance.now()-At.debut)});const t=new Map;for(const n of e){const r=t.get(n.nom)??{appels:0,ms:0};r.appels+=1,r.ms+=n.ms,t.set(n.nom,r)}return[...t.entries()].map(([n,r])=>({nom:n,appels:r.appels,ms:r.ms})).sort((n,r)=>r.ms-n.ms)}function xx(){const e={};for(const t of Object.keys(it))e[it[t].onnx]=_i.has(t)?"wasm (repli apres echec webgpu)":"webgpu>wasm";for(const[t,n]of tr)e[t]=n;return e}function $x(){var e,t;return wi(),{crossOriginIsolated:globalThis.crossOriginIsolated??null,numThreads:De.wasm.numThreads??null,sharedArrayBuffer:typeof SharedArrayBuffer<"u",coeurs:((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??null,webgpuPresent:typeof((t=globalThis.navigator)==null?void 0:t.gpu)<"u"}}let lg=!1;const yi=new Map;function wi(){var e;lg||(De.wasm.wasmPaths="/7wd-scorer/ort/",De.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,lg=!0)}const _i=new Set;function vx(e){wi();let t=yi.get(e);return t===void 0&&(t=Gn.create(`${Ye}${it[e].onnx}`,{executionProviders:_i.has(e)?["wasm"]:["webgpu","wasm"]}),yi.set(e,t),t.catch(()=>yi.delete(e))),t}const tr=new Map;let Ir=0,Er=0,Ja=0;const nr=new Map;function cg(e,t){const n=performance.now();try{return t()}finally{const r=nr.get(e)??{ms:0,appels:0};r.ms+=performance.now()-n,r.appels+=1,nr.set(e,r)}}async function dg(e,t){const n=performance.now();try{return await t()}finally{const r=nr.get(e)??{ms:0,appels:0};r.ms+=performance.now()-n,r.appels+=1,nr.set(e,r)}}const bi=new Map;function es(e){const t=(At==null?void 0:At.nom)??"(hors etage)";bi.set(t,(bi.get(t)??0)+e)}function Sx(){return[...bi.entries()].map(([e,t])=>({nom:e,ms:Math.round(t)})).sort((e,t)=>t.ms-e.ms)}function Mx(){return[...nr.entries()].map(([e,t])=>({nom:e,ms:Math.round(t.ms),appels:t.appels})).sort((e,t)=>t.ms-e.ms)}function Ix(){return{ms:Math.round(Ir),appels:Er,preparationMs:Math.round(Ja)}}function Ex(){Ir=0,Er=0,Ja=0,nr.clear(),bi.clear()}const hg=new Set(["coin_yolo.onnx","token_yolo.onnx","wonder_yolo.onnx","pawn_ends.onnx","track_band.onnx"]),ts=new Set;async function ns(e,t){return Gn.create(`${Ye}${e}`,{executionProviders:t?["webgpu"]:["wasm"]})}async function _t(e){wi();const t=!hg.has(e)&&!ts.has(e);let n=null;if(t)try{n=await ns(e,!0),tr.set(e,"webgpu")}catch(a){ts.add(e),tr.set(e,`wasm (webgpu refuse a la creation: ${String(a).slice(0,60)})`)}else tr.set(e,hg.has(e)?"wasm (webgpu incompatible, mesure)":"wasm");if(n===null)try{n=await ns(e,!1)}catch{return null}let r=n,i=tr.get(e)==="webgpu";const o=async(a,...s)=>{const u=performance.now();try{const l=await r.run(a,...s),d=performance.now()-u;return Ir+=d,es(d),Er+=1,l}catch(l){if(!i)throw l;ts.add(e),tr.set(e,`wasm (repli au run: ${String(l).slice(0,60)})`),i=!1,r=await ns(e,!1);const d=await r.run(a,...s),c=performance.now()-u;return Ir+=c,es(c),Er+=1,d}};return new Proxy(r,{get(a,s,u){if(s==="run")return o;const l=Reflect.get(r,s,u);return typeof l=="function"?l.bind(r):l}})}let rs=null,is=null;const Tx=.75,kx=4,Cx=.65,Ax=3e4;let os=null;function Tr(){return os===null&&(os=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),os}const pg=new Map;function as(e){let t=pg.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Ye}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),o=new OffscreenCanvas(r.width,r.height).getContext("2d");o.drawImage(r,0,0);const a=o.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),pg.set(e,t)),t}function ss(e){return as(`wonder-refs/${e}.jpg`)}const fg=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function Rx(){const e=new Map;for(const t of fg){const n=await as(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function Ox(){const e=new Map;for(const t of fg){const n=await as(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const Nx=.6,zx=12,Bx=45e3;let us=null;function mg(){return us===null&&(wi(),us=(async()=>{try{const[e,t,n,r]=await Promise.all([Gn.create(`${Ye}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),Gn.create(`${Ye}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Ye}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Ye}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:z_(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),us}async function Px(e,t){const n=Math.max(N_/Yt,t.width/t.height),{tensor:r,width:i}=P_(t,n),o={[e.rec.inputNames[0]]:new We("float32",r,[1,3,Yt,i])},a=(await e.rec.run(o))[e.rec.outputNames[0]],[s,u,l]=a.dims,d=a.data,c=new Array(u),p=new Array(u);for(let f=0;f<u;f++){let m=0,y=-1/0;const w=f*l;for(let b=0;b<l;b++){const x=d[w+b];x>y&&(y=x,m=b)}c[f]=m,p[f]=y}return B_(c,p,e.charset)}function Dx(...e){return dg("merveilles (OCR+ORB+opencv)",()=>Ux(...e))}async function Ux(e,t){const n=await mg();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+Bx;let o=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){o=!0;break}t(`wonder names: rotation ${a*90}°…`,a/4);const s=Kt(e,a),u=S_(s),l={[n.det.inputNames[0]]:new We("float32",u.tensor,[1,3,u.height,u.width])},d=(await n.det.run(l))[n.det.outputNames[0]],c=C_(d.data,u,s.width,s.height).slice(0,zx);console.debug(`[wonders-ocr] rot ${a*90}: ${c.length} det boxes`,c.slice(0,5).map(p=>`${p.width}x${p.height}@${p.score.toFixed(2)}`));for(const p of c){if(Date.now()>i){o=!0;break e}const f=A_(s,p.quad);if(f.width<f.height*1.5)continue;const[m,y]=await Px(n,f);if(console.debug(`[wonders-ocr] rec "${m}" @${y.toFixed(2)}`),y<Nx||m.trim().length<kx)continue;const w=q_(m,n.catalog);if(console.debug("[wonders-ocr] fuzzy",w),w===null||w.confidence<Tx||w.kind!=="wonder")continue;const b=r.get(w.id);(b===void 0||w.confidence>b.confidence)&&r.set(w.id,{id:w.id,name:w.name,confidence:w.confidence,nameBox:ls(p,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:o}}function ls(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const o=(c,p)=>i===1?[p,r-1-c]:i===2?[n-1-c,r-1-p]:[n-1-p,c],a=[o(e.x,e.y),o(e.x+e.width,e.y+e.height)],s=a.map(c=>c[0]),u=a.map(c=>c[1]),l=Math.min(...s),d=Math.min(...u);return{x:l,y:d,width:Math.max(...s)-l,height:Math.max(...u)-d}}function Lx(){return is===null&&(is=fetch(`${Ye}laurel_gallery.json`).then(async e=>e.ok?h_(await e.json()):[]).catch(()=>[])),is}function Fx(e,t,n,r){return cg("crop",()=>Gx(e,t,n,r))}function Gx(e,t,n,r){return Ut(e,t-r,n-r,2*r,2*r)}function Ut(e,t,n,r,i){return cg("crop",()=>Wx(e,t,n,r,i))}function Wx(e,t,n,r,i){const o=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),s=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),l=Math.max(0,s-o),d=Math.max(0,u-a),c=new Uint8Array(l*d*3);for(let p=0;p<d;p++)for(let f=0;f<l;f++){const m=((p+a)*e.width+(f+o))*e.channels,y=(p*l+f)*3;c[y]=e.data[m],c[y+1]=e.data[m+1],c[y+2]=e.data[m+2]}return{width:l,height:d,channels:3,data:c}}function qx(){return rs===null&&(rs=fetch(`${Ye}token_templates.json`).then(async e=>e.ok?a1(await e.json()):new Map).catch(()=>new Map)),rs}let cs=null;function Vx(){return cs===null&&(cs=(async()=>{try{const e=await fetch(`${Ye}token_embed_index.json`);if(!e.ok)return null;const t=f1(await e.json()),n=await _t("token_embed.onnx");return n===null?null:{session:n,index:t}}catch{return null}})()),cs}const Hx=.92;let ds=null;function jx(){return ds===null&&(ds=(async()=>{try{return(await fetch(`${Ye}guild_classifier.onnx`,{method:"HEAD"})).ok?await _t("guild_classifier.onnx"):null}catch{return null}})()),ds}let hs=null;function Kx(){return hs===null&&(hs=(async()=>{try{return(await fetch(`${Ye}laurel_digit.onnx`,{method:"HEAD"})).ok?await _t("laurel_digit.onnx"):null}catch{return null}})()),hs}let ps=null,fs=null;function Yx(){return fs===null&&(fs=(async()=>{try{return(await fetch(`${Ye}banner_class.onnx`,{method:"HEAD"})).ok?await _t("banner_class.onnx"):null}catch{return null}})()),fs}async function Xx(e,t){if(t.length===0)return t;const n=await Yx();if(n===null)return t;const r=[];for(const i of t)try{const o=W1(i.box,e.width,e.height);if(o===null){r.push(i);continue}const a=Ut(e,o.x,o.y,o.w,o.h),s=q1(a),u=await n.run({[n.inputNames[0]]:new We("float32",s,[1,3,cn,cn])});V1(u[n.outputNames[0]].data).rejected||r.push(i)}catch{r.push(i)}return r}function Zx(){return ps===null&&(ps=(async()=>{try{return(await fetch(`${Ye}laurel_filter.onnx`,{method:"HEAD"})).ok?await _t("laurel_filter.onnx"):null}catch{return null}})()),ps}async function Qx(e,t,n){let[r,i,o,a]=t,s=o-r,u=a-i;if(s<=0||u<=0)return null;if(s<Jn){const w=Math.floor((r+o)/2);r=w-Math.floor(Jn/2),o=w+Math.floor(Jn/2),s=o-r}if(u<Jn){const w=Math.floor((i+a)/2);i=w-Math.floor(Jn/2),a=w+Math.floor(Jn/2),u=a-i}const l=Math.trunc(jm*s),d=Math.trunc(jm*u),c=Math.max(0,r-l),p=Math.max(0,i-d),f=Math.min(e.width,o+l),m=Math.min(e.height,a+d),y=Ut(e,c,p,f-c,m-p);if(y.width<=0||y.height<=0)return null;try{const w=D1(y),b=await n.run({[n.inputNames[0]]:new We("float32",w,[1,3,ln,ln])});return U1(b[n.outputNames[0]].data)}catch{return null}}let ms=null;function Jx(){return ms===null&&(ms=(async()=>{try{return(await fetch(`${Ye}coin_filter_cnn.onnx`,{method:"HEAD"})).ok?await _t("coin_filter_cnn.onnx"):null}catch{return null}})()),ms}let gs=null;function e$(){return gs===null&&(gs=(async()=>{try{return(await fetch(`${Ye}coin_denom.onnx`,{method:"HEAD"})).ok?await _t("coin_denom.onnx"):null}catch{return null}})()),gs}async function t$(e,t,n){if(t.length===0)return[];try{const r=[];for(const u of t){const l=Qm(e,Math.round(u.cx),Math.round(u.cy),Math.round(u.r));if(l===null)return null;r.push(l)}const i=new Float32Array(t.length*3*wt*wt);r.forEach((u,l)=>i.set(u,l*u.length));const a=(await n.run({[n.inputNames[0]]:new We("float32",i,[t.length,3,wt,wt])}))[n.outputNames[0]].data,s=pi.length;return t.map((u,l)=>c2(a.subarray(l*s,l*s+s)))}catch{return null}}async function n$(e,t,n){if(t.length===0)return[];try{const r=async u=>{const l=[];for(let f=0;f<t.length;f++){const m=Qm(e,Math.round(t[f].cx),Math.round(t[f].cy),Math.round(u[f]));if(m===null)return null;l.push(m)}const d=new Float32Array(t.length*3*wt*wt);l.forEach((f,m)=>d.set(f,m*f.length));const p=(await n.run({[n.inputNames[0]]:new We("float32",d,[t.length,3,wt,wt])}))[n.outputNames[0]].data;return t.map((f,m)=>u2(p.subarray(m*2,m*2+2)))},i=await r(t.map(u=>u.r));if(i===null)return null;const o=t.map(u=>u.r).sort((u,l)=>u-l),a=o.length%2===1?o[(o.length-1)/2]:(o[o.length/2-1]+o[o.length/2])/2,s=Math.trunc(a);if(s>=8){const u=await r(t.map(()=>s));if(u!==null)return i.map((l,d)=>Math.max(l,u[d]))}return i}catch{return null}}let ys=null;function gg(){return ys===null&&(ys=(async()=>{try{return(await fetch(`${Ye}tuck_classifier.onnx`,{method:"HEAD"})).ok?await _t("tuck_classifier.onnx"):null}catch{return null}})()),ys}const yg=.1;let ws=null;function wg(){return ws===null&&(ws=(async()=>{try{return(await fetch(`${Ye}track_band.onnx`,{method:"HEAD"})).ok?await _t("track_band.onnx"):null}catch{return null}})()),ws}async function _g(e,t,n){try{const r=Ea(t,1280,gw(t.width,t.height,n)),i=await e.run({[e.inputNames[0]]:new We("float32",r.tensor,[1,3,1280,1280])});return $r(i[e.outputNames[0]].data,r.params,yg)}catch{return[]}}let _s=null;const r$=.4;function i$(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),r=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);if(n<=0||r<=0)return 0;const i=e.width*e.height;return i>0?n*r/i:0}function o$(e,t){const n=[],r=[];for(const i of t){if(!i.builtWithCardUnderneath)continue;i.boundingBox&&n.push(i.boundingBox);const o=i.tuckRegion;o&&r.push(o)}return n.length===0&&r.length===0?e:e.filter(i=>{const o=i.boundingBox;if(!o)return!0;const a=o.x+o.width/2,s=o.y+o.height/2;for(const u of n)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height||i$(o,u)>=r$)return!1;for(const u of r)if(a>=u.x&&a<=u.x+u.width&&s>=u.y&&s<=u.y+u.height)return!1;return!0})}function a$(){return _s===null&&(_s=(async()=>{try{return(await fetch(`${Ye}tuck_box.onnx`,{method:"HEAD"})).ok?await _t("tuck_box.onnx"):null}catch{return null}})()),_s}let bs=null;function s$(){return bs===null&&(bs=(async()=>{try{return(await fetch(`${Ye}wonder_classifier.onnx`,{method:"HEAD"})).ok?await _t("wonder_classifier.onnx"):null}catch{return null}})()),bs}const xs={wonderRef:ss,tuckClassifier:gg,tuckBoxClassifier:a$,localiseWonders:async e=>{try{const{rows:t,params:n}=await bt("wonder",e);return Ta(t,n,it.wonder.conf,Number.POSITIVE_INFINITY).map(r=>r.box)}catch{return[]}}};async function u$(e,t){const n=await Vx();if(n!==null)try{const r=g1(e),i=new We("float32",r,[4,3,un,un]),a=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:s,cosine:u}=w1(n.index,y1(a));return u<Hx?["",-1]:[s,u]}catch{}return c1(e,t)}const bg=new WeakMap;async function $s(e){const t=bg.get(e);if(t!==void 0)return await t;const n=dg("decodage image",()=>l$(e));return bg.set(e,n),await n}async function l$(e){let t;try{t=await createImageBitmap(e)}catch(n){const r=e.name||"(sans nom)",i=e.type||"(type inconnu)",o=e.size===0?"le fichier est VIDE (0 octet) — la capture a probablement été interrompue":/heic|heif/i.test(i)||/\.hei[cf]$/i.test(r)?"format HEIC/HEIF : ce navigateur ne sait pas le décoder — régler l'appareil photo sur JPEG (« Plus compatible » sur iPhone), ou repasser par la galerie qui convertit":"le fichier n'est plus lisible : s'il vient de l'appareil photo, l'OS a pu l'invalider pendant que l'app était en arrière-plan — reprendre la photo devrait suffire";throw new Error(`Image illisible (${r}, ${i}, ${e.size} octets) : ${o}. [${n instanceof Error?n.name:String(n)}]`)}try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}const xg=new WeakMap;async function bt(e,t){let n=xg.get(t);n===void 0&&(n=new Map,xg.set(t,n));const r=n.get(e);if(r!==void 0)return await r;const i=c$(e,t);return n.set(e,i),await i}async function c$(e,t){const n=it[e],r=performance.now(),{tensor:i,params:o}=Ea(t,n.input);Ja+=performance.now()-r;const a=async()=>{const s=await vx(e),u={[s.inputNames[0]]:new We("float32",i,[1,3,n.input,n.input])},l=performance.now(),d=await s.run(u),c=performance.now()-l;Ir+=c,es(c),Er+=1;const p=d[s.outputNames[0]];return{rows:new Float32Array(p.data),params:o}};try{return await a()}catch(s){if(_i.has(e))throw s;return _i.add(e),yi.delete(e),await a()}}const d$=6,h$=4,p$=5,f$=2;async function m$(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await $s(e),r=await bt("banner",n),i=si(r.rows,r.params,it.banner.conf);if(t.banners=i.length,i.length>=d$)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const o=await bt("laurel",n),a=$r(o.rows,o.params,it.laurel.conf);if(t.laurels=a.length,a.length>=h$)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const s=await bt("coin",n),u=fm(s.rows,s.params,it.coin.conf);return t.coins=u.length,u.length>=p$?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=f$?{...t,kind:"board",confidence:.4}:t}function g$(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function vs(e,t,n,r,i=()=>{},o="player",a,s=!1){const u={},l=[],d=[],c=[],p=[],f=[],m=[];let y=0,w=0,b=0,x=0,M=0;for(const A of e){M+=1;const N=`${t} photo ${M}/${e.length}`;r(`${N}: reading pixels…`,.01);const U=await $s(A);r(`${N}: card banners…`,.04);const V=await bt("banner",U);let F=si(V.rows,V.params,it.banner.conf);F=await Xx(U,F),r(`${N}: progress tokens…`,.08);let O=[];const H=await wg();H!==null&&(O=await _g(H,U,F)),O.length>0&&F.length>0&&(F=F.filter(D=>{const j=D.box[0]+D.box[2]/2,Q=D.box[1]+D.box[3]/2;return!O.some(([ne,ae,ue,Te])=>Math.min(ne,ue)<=j&&j<=Math.max(ne,ue)&&Math.min(ae,Te)<=Q&&Q<=Math.max(ae,Te))}));const X=await bt("token",U),J=await qx(),he=c.length,W=[];for(const D of Ew(X.rows,X.params,it.token.conf)){if(W.push({cx:D.cx,cy:D.cy,r:D.r}),O.some(([ne,ae,ue,Te])=>D.cx>=ne&&D.cx<=ue&&D.cy>=ae&&D.cy<=Te))continue;const[j,Q]=await u$(xm(U,D),J);j===""&&Q<0?W.pop():j===""?w+=1:c.some(ne=>ne.id===j)||c.push({id:j,center:[D.cx,D.cy],radius:D.r,confidence:Math.round(Q*1e4)/1e4})}r(`${N}: coins…`,.14);const z=await bt("coin",U),R=fm(z.rows,z.params,it.coin.conf).filter(D=>!W.some(j=>(D.cx-j.cx)**2+(D.cy-j.cy)**2<=D.r*D.r)),B=await Jx(),L=B!==null?await n$(U,R,B):null,G=(L!==null?R.filter((D,j)=>L[j]>=Zm).map(D=>D.r):[]).sort((D,j)=>D-j),Z=G.length>0?G.length%2===1?G[(G.length-1)/2]:(G[G.length/2-1]+G[G.length/2])/2:null,[ie,te]=s2,ye=R.map((D,j)=>{const Q=L!==null?L[j]:null;return Q===null||Q>=Zm?"keep":Z!==null&&Z>0&&D.r/Z>=ie&&D.r/Z<=te?"suspect":"drop"}),Me=R.filter((D,j)=>ye[j]==="keep"),Ne=Zw(U,Me),Pe=await e$(),ut=Pe!==null?await t$(U,Me,Pe):null,ze=d2(Ne,ut??Ne.map(()=>null));ze.map(D=>D.value);const ge=[];let lt=0;if(R.forEach((D,j)=>{if(ye[j]==="drop")return;if(ye[j]==="suspect"){const ne=L[j];ge.push({denomination:null,center:[D.cx,D.cy],radius:D.r,suspect:!0,suspectReason:`content rejected as non-coin (P=${ne.toFixed(2)}) but the size matches this photo's confirmed coins — glare-blinded real coin OR a look-alike object; confirm or remove (a busy table warrants a cleaner photo)`});return}const Q=ze[lt++];ge.push({denomination:Q.value,center:[D.cx,D.cy],radius:D.r,denomSource:Q.source??"colour"})}),R.length>0&&ge.length===0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${R.length} disque(s) rond(s) détecté(s) mais tous rejetés comme non-pièces (0 pièce comptée) — vérifie, ou reprends une photo plus nette.`}),ge.length>=2){const D=ge.map(Q=>Q.radius).sort((Q,ne)=>Q-ne),j=D.length%2===1?D[(D.length-1)/2]:(D[D.length/2-1]+D[D.length/2])/2;if(j>0)for(const Q of ge)Q.radius/j>2&&(Q.suspect=!0,Q.suspectReason=`radius ${Q.radius}px is ${(Q.radius/j).toFixed(1)}x the photo's median coin radius — probably not a coin`)}if(ge.length>=2)for(let D=0;D<ge.length;D+=1)for(let j=D+1;j<ge.length;j+=1){const Q=ge[D],ne=ge[j],ae=Math.hypot(Q.center[0]-ne.center[0],Q.center[1]-ne.center[1]);if(ae<1.1*Math.min(Q.radius,ne.radius))for(const ue of[Q,ne])ue.suspect||(ue.suspect=!0,ue.suspectReason=`almost concentric with another coin (${ae.toFixed(0)}px apart) — either a pile of two coins or a duplicate read of one; confirm which`)}const Zt=p.length,Qe=[],ct=[],ht=Date.now()+Ax;let Ke=null,Ot=null;const kr=()=>(Ot===null&&(Ot=(async()=>{try{const{rows:D,params:j}=await bt("wonder",U);return Ta(D,j,it.wonder.conf,Number.POSITIVE_INFINITY).map(Q=>Q.box)}catch{return[]}})()),Ot),Qt=[];let On=!1;const Jt=await s$();if(Jt!==null){const D=await kr();if(D.length>0&&(Ke=await Tr(),Ke!==null)){r(`${N}: identifying wonders…`,.35);const j=await ag(xs,Ke,U,D,Jt,ht,F);for(const Q of j)p.some(ne=>ne.id===Q.obj.id)||(p.push(Q.obj),Qt.push({obj:Q.obj,edgeScores:Q.edgeScores,zone:Q.zone}),Qe.push(Q.zone),ct.push({quad:Q.quad,region:Q.region}));On=j.length>0}}On||r(`${N}: wonder names…`,.2);const pt=On?{wonders:[],aborted:!1}:await Dx(U,(D,j)=>r(`${N}: ${D}`,.2+.35*(j??0)));Ke===null&&(Ke=pt.wonders.length>0?await Tr():null);for(const D of pt.wonders){let j=null;if(Ke!==null&&Date.now()<ht){r(`${N}: registering ${D.name}…`,.6);try{const Q=await ss(D.id);if(Q!==null){let ne=nb(Ke,U,Q,[[D.nameBox.x,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y+D.nameBox.height],[D.nameBox.x,D.nameBox.y+D.nameBox.height]]);if(ne===null){const ae=await kr(),ue=sb(ae,D.nameBox.x+D.nameBox.width/2,D.nameBox.y+D.nameBox.height/2);ue!==null&&(ne=Om(Ke,U,Q,ue))}if(ne!==null){let ae=ne.built,ue=!1;const Te=await gg();if(Te!==null)try{const me=Rm(Ke,U,Q,ne.footprint);if(me!==null){const be=qa(me),Ge=await Te.run({[Te.inputNames[0]]:new We("float32",be,[1,3,Pt,Pt])});ae=zm(Ge[Te.outputNames[0]].data).built,ue=!0}}catch{}const ke=ne.footprint.map(me=>me[0]),ce=ne.footprint.map(me=>me[1]),oe=Math.max(0,Math.round(Math.min(...ke))),le=Math.max(0,Math.round(Math.min(...ce)));j={built:ae,boundingBox:{x:oe,y:le,width:Math.min(U.width,Math.round(Math.max(...ke)))-oe,height:Math.min(U.height,Math.round(Math.max(...ce)))-le},tuckRegion:Ga(ne.footprint,ne.overflow),footprint:ne.footprint,edgeScores:ne.edgeScores,builtByTuck:ue}}}}catch(Q){console.warn(`[wonders-reg] ${D.id} failed:`,Q)}}if(j!==null){const Q=j.tuckRegion??j.boundingBox;Qe.push({x0:Q.x,y0:Q.y,x1:Q.x+Q.width,y1:Q.y+Q.height}),ct.push({quad:j.footprint,region:j.tuckRegion})}else{const Q=Math.max(8,D.nameBox.height),ne=Math.round(D.nameBox.width*.15);Qe.push({x0:D.nameBox.x-ne,y0:D.nameBox.y-Q*2.5,x1:D.nameBox.x+D.nameBox.width+ne,y1:D.nameBox.y+D.nameBox.height+Q*2.5}),ct.push({quad:null,region:null})}if(!p.some(Q=>Q.id===D.id)){const Q=(j==null?void 0:j.builtByTuck)===!0,ne=Q?j.built:!1,ae=!Q&&(j==null?void 0:j.built)===!0,ue={id:D.id,name:D.name,builtWithCardUnderneath:ne,boundingBox:(j==null?void 0:j.boundingBox)??{x:0,y:0,width:0,height:0},...j!=null&&j.tuckRegion?{tuckRegion:j.tuckRegion}:{},confidence:D.confidence,...ae?{suspect:!0,suspectReason:"built-unconfirmed"}:{}};p.push(ue),Qt.push({obj:ue,edgeScores:j&&!j.builtByTuck?j.edgeScores:null,zone:Qe[Qe.length-1]})}}if(!On){const D=cb(Qt.map(j=>({built:j.obj.builtWithCardUnderneath,edgeScores:j.edgeScores,zone:j.zone})),F.map(j=>[j.box[0]+j.box[2]/2,j.box[1]+j.box[3]/2]));for(const j of D){const Q=Qt[j];Q.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${Q.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(F.length>0){const j=new Set(D);for(let Q=0;Q<Qt.length;Q++){const ne=Qt[Q];if(j.has(Q)||!ne.obj.builtWithCardUnderneath)continue;const ae=ne.obj.tuckRegion;if(ae===void 0)continue;if(!F.some(Te=>{const ke=Te.box[0]+Te.box[2]/2,ce=Te.box[1]+Te.box[3]/2;return ke>=ae.x&&ke<=ae.x+ae.width&&ce>=ae.y&&ce<=ae.y+ae.height})){const Te=ne.obj;Te.builtWithCardUnderneath=!1,Te.suspect=!0,Te.suspectReason="built-unconfirmed"}}}}if(pt.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${N}: the wonder-name read ran out of its time budget on this device — ${pt.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),Ke!==null&&pt.wonders.length>0&&Date.now()<ht)try{const D=await mg(),j=(D==null?void 0:D.catalog.filter(ne=>ne.kind==="wonder").map(ne=>ne.id))??[],Q=new Map;for(const ne of j)if(!p.some(ae=>ae.id===ne)){const ae=await ss(ne);ae!==null&&Q.set(ne,ae)}if(Q.size>0){r(`${N}: searching occluded wonders…`,.7);const ne=tb(Ke,U,Q,ht);for(const ae of ne){const ue=ae.footprint.map(Ge=>Ge[0]),Te=ae.footprint.map(Ge=>Ge[1]),ke=Math.max(0,Math.round(Math.min(...ue))),ce=Math.max(0,Math.round(Math.min(...Te))),oe={x:ke,y:ce,width:Math.min(U.width,Math.round(Math.max(...ue)))-ke,height:Math.min(U.height,Math.round(Math.max(...Te)))-ce};if(p.some(Ge=>{const Ue=Ge.boundingBox,Pn=Math.max(0,Math.min(Ue.x+Ue.width,oe.x+oe.width)-Math.max(Ue.x,oe.x)),nt=Math.max(0,Math.min(Ue.y+Ue.height,oe.y+oe.height)-Math.max(Ue.y,oe.y)),Be=Pn*nt,Ve=Ue.width*Ue.height+oe.width*oe.height-Be;return Ve>0&&Be/Ve>eb}))continue;const me=D==null?void 0:D.catalog.find(Ge=>Ge.id===ae.id);p.push({id:ae.id,name:(me==null?void 0:me.nameFr)??(me==null?void 0:me.name)??ae.id,builtWithCardUnderneath:ae.built,boundingBox:oe,...ae.tuckRegion?{tuckRegion:ae.tuckRegion}:{},confidence:Math.round(ae.confidence*1e4)/1e4});const be=ae.tuckRegion??oe;Qe.push({x0:be.x,y0:be.y,x1:be.x+be.width,y1:be.y+be.height}),ct.push({quad:ae.footprint.map(([Ge,Ue])=>[Ge,Ue]),region:ae.tuckRegion??null})}}}catch(D){console.warn("[wonders-reg] discovery failed:",D)}const dn=o==="opponent";let hn=(D,j)=>!dn,Nn=(D,j)=>!dn,Cr=null;try{let D=p.slice(Zt);const j=[];F.forEach((ce,oe)=>{const le=ce.box[0]+ce.box[2]/2,me=ce.box[1]+ce.box[3]/2;Qe.some(be=>le>=be.x0&&le<=be.x1&&me>=be.y0&&me<=be.y1)||j.push(oe)});const Q=[],ne=[];D.forEach((ce,oe)=>{const le=ce.boundingBox;le&&le.width>0&&(Q.push(oe),ne.push([le.x,le.y,le.width,le.height]))});const ae=ce=>{const oe=[];return ce.forEach((le,me)=>{const be=le.box[0]+le.box[2]/2,Ge=le.box[1]+le.box[3]/2;Qe.some(Ue=>be>=Ue.x0&&be<=Ue.x1&&Ge>=Ue.y0&&Ge<=Ue.y1)||oe.push(me)}),oe};let ue=Ya(F.map(ce=>ce.box),j,ne,O,[U.width,U.height]);if(Jt!==null){r(`${N}: seconde passe merveilles (crop de cité)…`,.42);const oe=(await ug({image:U,banners:F,hulls:ue.hulls.map(([le,me],be)=>({owner:le,poly:me,n:ue.hullBoxCounts[be]??0})),wonderBoxes:ne,known:D,cropFrame:([le,me,be,Ge])=>Ut(U,le,me,be-le,Ge-me),detect:async(le,me)=>(Ke===null&&(Ke=await Tr()),Ke===null?[]:sg(xs,Ke,le,Jt,ht,me))})).filter(le=>!p.some(me=>me.id===le.obj.id));if(oe.length>0){for(const le of oe)p.push(le.obj),Qe.push(le.zone),ct.push({quad:le.quad,region:le.region});D=p.slice(Zt),Q.length=0,ne.length=0,D.forEach((le,me)=>{const be=le.boundingBox;be&&be.width>0&&(Q.push(me),ne.push([be.x,be.y,be.width,be.height]))}),ue=Ya(F.map(le=>le.box),ae(F),ne,O,[U.width,U.height])}}try{const ce=eg(U.width,U.height,F.map(oe=>oe.box),ue.hulls.map(([oe,le],me)=>({owner:oe,poly:le,n:ue.hullBoxCounts[me]??0})),ne);if(ce.length>0){const oe=Xa(F.map(me=>me.box)),le=[];for(const me of ce){const[be,Ge,Ue,Pn]=me,nt=Ut(U,be,Ge,Ue-be,Pn-Ge);if(nt.width<=0||nt.height<=0)continue;const Be=await bt("banner",nt);for(const Ve of si(Be.rows,Be.params,it.banner.conf)){const Xe=L2(Ve.box,me,oe);Xe&&le.push({...Ve,box:Xe})}}if(le.length>0){const me=ym([...F,...le]);me.length>F.length&&(F=me,ue=Ya(F.map(be=>be.box),ae(F),ne,O,[U.width,U.height]))}}}catch(ce){console.warn("[#129 city-rescan] skipped:",ce)}if(Jt!==null&&D.some(ce=>ce.builtWithCardUnderneath!==!0)){r(`${N}: revote built (crop de cité)…`,.47);const ce=new Set;await ug({builtSeenOut:ce,image:U,banners:F,hulls:ue.hulls.map(([oe,le],me)=>({owner:oe,poly:le,n:ue.hullBoxCounts[me]??0})),wonderBoxes:ne,known:D,cropFrame:([oe,le,me,be])=>Ut(U,oe,le,me-oe,be-le),detect:async(oe,le)=>(Ke===null&&(Ke=await Tr()),Ke===null?[]:sg(xs,Ke,oe,Jt,ht,le))});for(const oe of D)oe.id&&ce.has(oe.id)&&oe.builtWithCardUnderneath!==!0&&(oe.builtWithCardUnderneath=!0,oe.builtByCityCrop=!0)}a!==void 0&&(a.hulls=ue.hulls.map(([ce,oe],le)=>({owner:ce,poly:oe,n:ue.hullBoxCounts[le]??0})),a.bandBoxes=O,a.image=U),hn=(ce,oe)=>ue.pointOwner(ce,oe)==="opponent"===dn;const Te=dn?"opponent":"player";if(Nn=(ce,oe)=>ue.pointOwner(ce,oe)===Te,s){const ce=ue;Cr=oe=>new Set(E2(oe,ce,Te,O))}F=F.filter((ce,oe)=>ue.bannerOwner[oe]==="opponent"===dn);const ke=D.map(()=>"player");Q.forEach((ce,oe)=>{ke[ce]=ue.wonderOwner[oe]});for(let ce=D.length-1;ce>=0;ce-=1)ke[ce]==="opponent"!==dn&&p.splice(Zt+ce,1);Qe.length=0;for(const ce of p.slice(Zt)){const oe=ce.tuckRegion??ce.boundingBox;oe&&Qe.push({x0:oe.x,y0:oe.y,x1:oe.x+oe.width,y1:oe.y+oe.height})}for(let ce=c.length-1;ce>=he;ce-=1){const[oe,le]=c[ce].center;hn(oe,le)||c.splice(ce,1)}}catch(D){console.warn("[city-split] failed (side unfiltered):",D)}const en=Cr!==null?Cr(ge):null;for(const D of ge)(en!==null?!en.has(D):!Nn(D.center[0],D.center[1]))||(y+=D.denomination??0,d.push(D));const $i=new Set,Ar=[],vi=Xa(F.map(D=>D.box));ct.forEach((D,j)=>{if(D.quad===null||D.region===null){const ue=Qe[j];ue&&Ar.push(ue);return}const Q=D.region,ne=[];F.forEach((ue,Te)=>{const ke=ue.box[0]+ue.box[2]/2,ce=ue.box[1]+ue.box[3]/2;ke>=Q.x&&ke<=Q.x+Q.width&&ce>=Q.y&&ce<=Q.y+Q.height&&ne.push([Te,ue.box])});const ae=a2(D.quad,ne,vi);ae!==null&&$i.add(ae)});let xt=[],zn=0;F.forEach((D,j)=>{if($i.has(j)){x+=1,zn+=1;return}const Q=D.box[0]+D.box[2]/2,ne=D.box[1]+D.box[3]/2;if(Ar.some(ae=>Q>=ae.x0&&Q<=ae.x1&&ne>=ae.y0&&ne<=ae.y1)){x+=1,zn+=1;return}xt.push(D)});const Si=J1(xt,zn,O,U.width,U.height);xt=Si.kept;for(const D of xt)u[D.family]=(u[D.family]??0)+1,b+=1;const rr=zw(xt),ir=new Set(rr.map(D=>D.box.join(",")));for(const D of Pw(xt))ir.has(D.box.join(","))||(rr.push(D),ir.add(D.box.join(",")));for(const D of Si.suspects)ir.has(D.box.join(","))||(rr.push(D),ir.add(D.box.join(",")));for(const D of rr)m.push(D);if(xt.some(D=>D.family==="guild")){const D=await jx();if(D!==null){r(`${N}: identifying guilds…`,.75);for(const j of xt)if(j.family==="guild")try{const[Q,ne,ae,ue]=j.box,Te=Ut(U,Q,ne,ae,ue),ke=x1(Te),ce={[D.inputNames[0]]:new We("float32",ke,[1,3,Xn,Xn])},le=(await D.run(ce))[D.outputNames[0]].data,{id:me,prob:be}=$1(le);me!==""&&!f.some(Ge=>Ge.id===me)&&f.push({id:me,boundingBox:{x:Q,y:ne,width:ae,height:ue},confidence:Math.round(be*1e4)/1e4})}catch(Q){console.warn("[guild-cls] failed:",Q)}}else if(Date.now()<ht)try{const j=Ke??await Tr();if(j!==null){const Q=await Rx();if(Q.size>0){r(`${N}: identifying guilds…`,.75);const ne=await Ox();for(const ae of Xb(j,U,Q,ht,ne))f.some(ue=>ue.id===ae.id)||f.push(ae)}}}catch(j){console.warn("[guilds-reg] failed:",j)}}r(`${N}: laurels…`,.8);const Is=await Lx(),Mi=[];for(const D of[0]){const j=D===0?U:Kt(U,D),Q=await bt("laurel",j);for(const[ne,ae,ue,Te]of $r(Q.rows,Q.params,it.laurel.conf)){const ke=ls({x:ne,y:ae,width:ue-ne,height:Te-ae},D,U.width,U.height);Mi.push([ke.x,ke.y,ke.x+ke.width,ke.y+ke.height])}}let pn=mm(Mi);const Rr=[];try{const D=J2(F.map(j=>j.box),[U.width,U.height]);for(const[j,Q,ne,ae]of D){const ue=Ut(U,j,Q,ne-j,ae-Q);if(ue.width<=0||ue.height<=0)continue;const Te=[];for(const ke of[0]){const ce=ke===0?ue:Kt(ue,ke),oe=await bt("laurel",ce);for(const[le,me,be,Ge]of $r(oe.rows,oe.params,it.laurel.conf)){const Ue=ls({x:le,y:me,width:be-le,height:Ge-me},ke,ue.width,ue.height);Te.push([Ue.x,Ue.y,Ue.x+Ue.width,Ue.y+Ue.height])}}if(pn=ex(pn,mm(Te),[j,Q]),H!==null)try{const ke=Ea(ue,1280,xr),ce=await H.run({[H.inputNames[0]]:new We("float32",ke.tensor,[1,3,1280,1280])});for(const[oe,le,me,be]of $r(ce[H.outputNames[0]].data,ke.params,yg))Rr.push([oe+j,le+Q,me+j,be+Q])}catch{}}}catch(D){console.warn("[laurel-containers] failed:",D)}const Es=[...O,...Rr];pn=pn.filter(([D,j,Q,ne])=>!rx((D+Q)/2,(j+ne)/2,Es,F.map(ae=>ae.box)));const Bn=await Kx(),Or=await Zx();for(const[D,j,Q,ne]of pn){const ae=Math.trunc((D+Q)/2),ue=Math.trunc((j+ne)/2);if([...W,...R].some(Be=>(ae-Be.cx)**2+(ue-Be.cy)**2<=Be.r*Be.r)||!hn(ae,ue))continue;if(Or!==null){const Be=await Qx(U,[Math.trunc(D),Math.trunc(j),Math.trunc(Q),Math.trunc(ne)],Or);if(Be!==null&&Be>=P1)continue}const ke=Math.min(Math.trunc(Q-D),Math.trunc(ne-j)),ce=Math.max(6,Math.trunc(Math.max(Q-D,ne-j)*r_)),oe=Fx(U,ae,ue,ce);let le=null,me=0;const be=new Map;if(ke>=6)for(const Be of[0,1,2,3]){const Ve=Be===0?oe:Kt(oe,Be),[Xe,ot]=y_(Ve,Is);Xe!==null&&(be.set(Xe,Math.max(be.get(Xe)??0,ot)),ot>me&&(le=Xe,me=ot))}le!==null&&me<Cx&&(le=null);const Ge=me;if(Bn!==null&&ke>=6){const Be=Ut(U,Math.trunc(D),Math.trunc(j),Math.trunc(Q-D),Math.trunc(ne-j));let Ve=null,Xe=0;for(const ot of[0,1,2,3]){const Ii=ot===0?Be:Kt(Be,ot),Ts=N1(Ii),ks=await Bn.run({[Bn.inputNames[0]]:new We("float32",Ts,[1,3,Qn,Qn])}),{value:Ei,prob:Lt}=z1(ks[Bn.outputNames[0]].data);if(Lt>Xe&&(Ve=Ei,Xe=Lt),Ve!==null&&Xe>=O1)break}Ve!==null&&Xe>=R1&&(le=Ve,me=Xe)}const Ue=le!==null&&[...be.entries()].some(([Be,Ve])=>Be!==le&&Ve>=Ge-.1),Pn=Qe.some(Be=>ae>=Be.x0&&ae<=Be.x1&&ue>=Be.y0&&ue<=Be.y1),nt=f.some(Be=>{const Ve=Be.boundingBox;return Ve!==void 0&&ae>=Ve.x&&ae<=Ve.x+Ve.width&&ue>=Ve.y&&ue<=Ve.y+Ve.height});l.push({value:le,valueRead:le!==null,center:[Math.round((D+Q)/2),Math.round((j+ne)/2)],boundingBox:{x:Math.trunc(D),y:Math.trunc(j),width:Math.trunc(Q-D),height:Math.trunc(ne-j)},confidence:Math.round(me*1e4)/1e4,excluded:Pn||nt,photoIndex:M-1,...Ue?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}x>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${x} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):b>0&&p.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const v=u.guild??0;v!==f.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${v} purple banner(s) counted but ${f.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):f.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+f.map(A=>A.id).join(", ")+" — confirm in the review."});const I=p.filter(A=>A.boundingBox.width===0);if(I.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${I.map(A=>A.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${p.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),w>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${w} token disc(s) found but not identified — pick them in the review below.`}),c.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+c.map(A=>A.id).join(", ")+" — confirm in the review."}),d.length>0){const A=d.filter(U=>U.denomSource==="cnn").length,N=d.length-A;n.push({code:"LOW_CONFIDENCE",message:N===0?`${t}: coins read as ${y} from ${d.length} tile(s) by the learned denomination model — confirm the total.`:`${t}: coins read as ${y} from ${d.length} tile(s) — ${A} by the learned model, ${N} by metal COLOUR alone (the model abstained); confirm the total.`})}const T=o$(f,p);for(const A of[...ix(p.map(N=>N.id),t),...sx(T.map(N=>N.id),t)])n.push({code:"INCONSISTENT_STATE",message:A.message});const k=l.filter(A=>!A.excluded),S=k.filter(A=>A.valueRead);return{...g$(),wonders:p,guilds:T,progressTokens:c,laurels:l,cardVictoryPoints:{value:S.reduce((A,N)=>A+(N.value??0),0),laurelsKept:k.length,laurelsUnread:k.length-S.length,complete:k.length===S.length},cardCounts:{byFamily:u,source:b>0?"yolo":"none",tuckedExcluded:x,...m.length>0?{suspects:m}:{}},coins:{total:y,confidence:d.length>0?.5:0,source:d.length===0?"none":d.some(A=>A.denomSource==="cnn")?"local-cnn":"local-colour",coins:d}}}const Rt=1280,y$=.3,xi=9;let Ss=null;function $g(){return Ss===null&&(Ss=(async()=>{try{return(await fetch(`${Ye}pawn_ends.onnx`,{method:"HEAD"})).ok?await _t("pawn_ends.onnx"):null}catch{return null}})()),Ss}function w$(e){const t=Rt/Math.max(e.width,e.height),n=Math.round(e.width*t),r=Math.round(e.height*t),i=new OffscreenCanvas(e.width,e.height);i.getContext("2d",{willReadFrequently:!0}).putImageData(new ImageData(new Uint8ClampedArray(e.data),e.width,e.height),0,0);const s=new OffscreenCanvas(Rt,Rt).getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(114,114,114)",s.fillRect(0,0,Rt,Rt),s.drawImage(i,0,0,e.width,e.height,0,0,n,r);const{data:u}=s.getImageData(0,0,Rt,Rt),l=Rt*Rt,d=new Float32Array(3*l);for(let c=0;c<l;c+=1)d[c]=u[c*4]/255,d[l+c]=u[c*4+1]/255,d[2*l+c]=u[c*4+2]/255;return{tensor:d,r:t}}async function _$(e,t){const{tensor:n,r}=w$(t),o=(await e.run({[e.inputNames[0]]:new We("float32",n,[1,3,Rt,Rt])}))[e.outputNames[0]].data,a=new Map;for(let s=0;s+5<o.length;s+=6){const u=o[s+4];if(u<y$)continue;const l=Math.round(o[s+5]),d=a.get(l);if(d===void 0||u>d.conf){const c=(o[s]+o[s+2])/2/r,p=(o[s+1]+o[s+3])/2/r;a.set(l,{conf:u,cx:c,cy:p})}}return a}async function Ms(e,t){let n=null;for(let w=0;w<4;w+=1){const b=w===0?t:Kt(t,w),x=await _$(e,b);if(x.has(0)&&x.has(1)&&x.has(2)){const M=x.get(0).conf+x.get(1).conf+x.get(2).conf;(n===null||M>n.score)&&(n={score:M,det:x,k:w})}}if(n===null)return null;const r=n.det.get(0),i=n.det.get(1),o=n.det.get(2),a=o.cx-i.cx,s=o.cy-i.cy,u=(i.cx+o.cx)/2,l=(i.cy+o.cy)/2,d=a*a+s*s;if(d<=0)return null;const c=((r.cx-u)*a+(r.cy-l)*s)/d*(2*xi),p=Math.min(xi,Math.max(-xi,st(c))),f=Math.min(r.conf,i.conf,o.conf),m=(w,b)=>{const x=n.k%4;return x===0?[w,b]:x===1?[b,t.height-1-w]:x===2?[t.width-1-w,t.height-1-b]:[t.width-1-b,w]},y=[i,o].map(w=>{const[b,x]=m(w.cx,w.cy);return[st(b),st(x)]});return{position:p,confidence:Math.round(f*1e4)/1e4,ends:y}}async function vg(e,t,n){let r=null;for(const i of n){const o=yw(t.width,t.height,i);if(o===null)continue;const a=Ut(t,o.x,o.y,o.width,o.height);if(a.width===0||a.height===0)continue;const s=await Ms(e,a);s!==null&&(r===null||s.confidence>r.confidence)&&(r={...s,ends:s.ends.map(([u,l])=>[u+o.x,l+o.y])})}return r}async function b$(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: everything is recognised locally — card counts, coin denominations, laurel values, wonders, guilds and token identities, with the same models as the server. What still deserves a look is COMPLETENESS: an object the detector never saw cannot be corrected by any of them, so check the totals against the table."}],r={left:null,right:null},i=e.left.length+e.right.length+(e.both!==void 0?2:0);let o=0;const a=(f,m=0)=>{t(f,i>0?Math.min(.99,(o+m)/i):void 0)},s=()=>{o+=1};for(const f of["left","right"]){const m=e[f];m.length>0&&(r[f]=await vs(m,f,n,a,s))}let u=null,l=null;if(e.both!==void 0){const f={},m={player:await vs([e.both],"left",n,a,s,"player",f,!0),opponent:await vs([e.both],"right",n,a,s,"opponent",void 0,!0)};if(f.image!==void 0)try{const w=await $g();w!==null&&(u=await Ms(w,f.image),u===null&&f.bandBoxes!==void 0&&f.bandBoxes.length>0&&(u=await vg(w,f.image,f.bandBoxes)))}catch(w){console.warn("[#125] both-photo pawn read failed:",w)}u!==null&&(l=$w(u.ends,f.hulls??[],u.position));const y=l!==null&&!l.ambiguous?vw(l):null;y!==null?(r.left=m[y.left],r.right=m[y.right],n.push({code:"AMBIGUOUS_OWNER",message:`Both-players photo: LEFT and RIGHT were derived from the MILITARY BOARD geometry (each track end paired with the city it is the capital of), which overrides the cluster-dominance guess — favored ${l.favoredOwner}, pawn at ${u.position}. Swap them in the review only if this is wrong.`})):(r.left=m.player,r.right=m.opponent,n.push({code:"AMBIGUOUS_OWNER",message:"Both-players photo: the DOMINANT city was assigned to the left player and the opposing city to the right — swap them in the review if the seating is the other way around."}))}{const f={},m={};for(const y of["left","right"]){const w=r[y];w!=null&&(f[y]=w.wonders.map(b=>b.id),m[y]=w.progressTokens.map(b=>b.id))}for(const y of[...ox(f),...ax(m)])n.push({code:"INCONSISTENT_STATE",message:y.message})}let d={conflictPawnPosition:0,found:!1,confidence:0};if(e.board!==void 0){try{const f=await $s(e.board),m=await $g();if(m!==null){let y=await Ms(m,f);if(y===null){const w=await wg();if(w!==null){const b=await bt("banner",f),x=si(b.rows,b.params,it.banner.conf),M=await _g(w,f,x);y=await vg(m,f,M)}}y!==null&&(d={conflictPawnPosition:y.position,found:!0,confidence:y.confidence},n.push({code:"AMBIGUOUS_OWNER",message:`Conflict pawn read at position ${y.position} — confirm which player it favours (the sign is a convention, not read from the photo).`}))}}catch(f){console.warn("[pawn] on-device read failed:",f)}d.found||n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode could not read the conflict pawn — set its position below."})}else u!==null&&l!==null&&(d={conflictPawnPosition:u.position,found:!0,confidence:u.confidence});const c=d.conflictPawnPosition,p=Math.abs(c)>=xi?{type:"military",winner:c>0?"left":"right"}:{type:"civilian"};return{imageId:e.imageId,players:r,militaryTrack:d,outcome:p,confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,o)=>{_x(i),self.postMessage({id:t,progress:i,...o!==void 0?{fraction:o}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0),wx(),Ex();const i=performance.now(),o=n==="classify"?await m$(e.data.file):await b$(e.data.payload,r);self.postMessage({id:t,ok:!0,result:o,perf:{etapes:bx(),providers:xx(),runtime:$x(),inference:Ix(),famillesJs:Mx(),inferenceParEtape:Sx(),totalMs:Math.round(performance.now()-i)}})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
