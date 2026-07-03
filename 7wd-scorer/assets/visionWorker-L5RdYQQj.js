var m1=Object.defineProperty;var g1=(dt,ct,Xt)=>ct in dt?m1(dt,ct,{enumerable:!0,configurable:!0,writable:!0,value:Xt}):dt[ct]=Xt;var Om=(dt,ct,Xt)=>g1(dt,typeof ct!="symbol"?ct+"":ct,Xt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var dt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyNames,Dm=Object.prototype.hasOwnProperty,Um=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),Yt=(e,t)=>{for(var n in t)dt(e,n,{get:t[n],enumerable:!0})},Pm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Xt(t))!Dm.call(e,i)&&i!==n&&dt(e,i,{get:()=>t[i],enumerable:!(r=ct(t,i))||r.enumerable});return e},sn=e=>Pm(dt({},"__esModule",{value:!0}),e),on,bt,Zt,Na,Da,Ua=X(()=>{on=new Map,bt=[],Zt=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=on.get(e);if(r===void 0)on.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=bt.indexOf(e);i!==-1&&bt.splice(i,1);for(let s=0;s<bt.length;s++)if(on.get(bt[s]).priority<=n){bt.splice(s,0,e);return}bt.push(e)}return}throw new TypeError("not a valid backend")},Na=async e=>{let t=on.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Da=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?bt:n,i,s=[],a=new Set;for(let u of r){let d=await Na(u);typeof d=="string"?s.push({name:u,err:d}):(i||(i=d),i===d&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of s)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),Lm=X(()=>{Ua()}),Pa,qm=X(()=>{Pa="1.27.0"}),wr,Be,La=X(()=>{qm(),wr="warning",Be={wasm:{},webgl:{},webgpu:{},versions:{common:Pa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wr=e}},get logLevel(){return wr}},Object.defineProperty(Be,"logLevel",{enumerable:!0})}),ke,Gm=X(()=>{La(),ke=Be}),qa,Ga,Wm=X(()=>{qa=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*i,p=0,f=c,m=c*2,g=-1;a==="RGBA"?(p=0,f=c,m=c*2,g=c*3):a==="RGB"?(p=0,f=c,m=c*2):a==="RBG"&&(p=0,m=c,f=c*2);for(let _=0;_<s;_++)for(let b=0;b<i;b++){let x=(e.data[p++]-d[0])*u[0],$=(e.data[f++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],S=g===-1?255:(e.data[g++]-d[3])*u[3];r.fillStyle="rgba("+x+","+$+","+I+","+S+")",r.fillRect(b,_,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ga=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,c;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,_=2,b=3,x=0,$=p,I=p*2,S=-1;o==="RGBA"?(x=0,$=p,I=p*2,S=p*3):o==="RGB"?(x=0,$=p,I=p*2):o==="RBG"&&(x=0,I=p,$=p*2),r=n.createImageData(i,s);for(let k=0;k<s*i;m+=f,g+=f,_+=f,b+=f,k++)r.data[m]=(e.data[x++]-c[0])*d[0],r.data[g]=(e.data[$++]-c[1])*d[1],r.data[_]=(e.data[I++]-c[2])*d[2],r.data[b]=S===-1?255:(e.data[S++]-c[3])*d[3]}else throw new Error("Can not access image data");return r}}),zn,Wa,Va,Fa,Ha,ja,Vm=X(()=>{$r(),zn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,c=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,f=0,m=1,g=2,_=3,b=0,x=d,$=d*2,I=-1;o==="RGB"&&(p=3,f=0,m=1,g=2,_=-1),u==="RGBA"?I=d*3:u==="RBG"?(b=0,$=d,x=d*2):u==="BGR"&&($=0,x=d,b=d*2);for(let S=0;S<d;S++,f+=p,g+=p,m+=p,_+=p)c[b++]=(e[f]+a[0])/s[0],c[x++]=(e[m]+a[1])/s[1],c[$++]=(e[g]+a[2])/s[2],I!==-1&&_!==-1&&(c[I++]=(e[_]+a[3])/s[3]);return u==="RGBA"?new Ge("float32",c,[1,4,n,r]):new Ge("float32",c,[1,3,n,r])},Wa=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let p=d(c);if(p!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;p.drawImage(e,0,0),a=p.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let c,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,p=t.resizedWidth):(c=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=p,t!==void 0){let f=u();f.width=p,f.height=c;let m=d(f);if(m!=null)m.putImageData(e,0,0),a=m.getImageData(0,0,p,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let p=d(c);if(p!=null){let f=e.height,m=e.width;return p.drawImage(e,0,0,m,f),a=p.getImageData(0,0,m,f).data,o.height=f,o.width=m,zn(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,p)=>{let f=u(),m=d(f);if(!e||!m)return p();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let _=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,c(zn(_.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return zn(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Va=(e,t)=>{let{width:n,height:r,download:i,dispose:s}=t,a=[1,r,n,4];return new Ge({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},Fa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new Ge({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:s})},Ha=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new Ge({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:s})},ja=(e,t,n)=>new Ge({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Mt,un,br,Ka,Fm=X(()=>{Mt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),un=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),br=!1,Ka=()=>{if(!br){br=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Mt.set("int64",BigInt64Array),un.set(BigInt64Array,"int64")),t&&(Mt.set("uint64",BigUint64Array),un.set(BigUint64Array,"uint64")),r?(Mt.set("float16",n),un.set(n,"float16")):Mt.set("float16",Uint16Array)}}}),Xa,Ya,Hm=X(()=>{$r(),Xa=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ya=(e,t)=>{switch(e.location){case"cpu":return new Ge(e.type,e.data,t);case"cpu-pinned":return new Ge({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ge({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ge({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ge({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ge,$r=X(()=>{Wm(),Vm(),Fm(),Hm(),Ge=class{constructor(e,t,n){Ka();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Mt.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=Mt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=un.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=Xa(i);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=s}static async fromImage(e,t){return Wa(e,t)}static fromTexture(e,t){return Va(e,t)}static fromGpuBuffer(e,t){return Fa(e,t)}static fromMLTensor(e,t){return Ha(e,t)}static fromPinnedBuffer(e,t,n){return ja(e,t,n)}toDataURL(e){return qa(this,e)}toImageData(e){return Ga(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ya(this,e)}}}),We,Za=X(()=>{$r(),We=Ge}),An,xr,it,Xe,zt,At,Qa=X(()=>{La(),An=(e,t)=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.timeStamp(`${e}::ORT::${t}`)},xr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let s=0;s<n.length;s++){if(r&&!n[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),An("CPU",a);return}n[s].includes("TRACE_FUNC")&&(r=!0)}},it=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||xr("BEGIN",e)},Xe=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||xr("END",e)},zt=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.time(`ORT::${e}`)},At=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.timeEnd(`ORT::${e}`)}}),Ja,jm=X(()=>{Ua(),Za(),Qa(),Ja=class Bm{constructor(t){this.handler=t}async run(t,n,r){it(),zt("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof We||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof We)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(c.indexOf(p)!==-1){let f=n[p];(f===null||f instanceof We)&&(d=!0,a=!1,i[p]=f)}if(d){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof We?u[d]=c:u[d]=new We(c.type,c.data,c.dims)}return At("InferenceSession.run"),Xe(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){it(),zt("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,p=0,f=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(f=t.byteLength-p,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||p+f>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,p,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Da(a),d=await o.createInferenceSessionHandler(s,u);return At("InferenceSession.create"),Xe(),new Bm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ln,Km=X(()=>{jm(),ln=Ja}),Xm=X(()=>{}),Ym=X(()=>{}),Zm=X(()=>{}),Qm=X(()=>{}),Jm={};Yt(Jm,{InferenceSession:()=>ln,TRACE:()=>An,TRACE_EVENT_BEGIN:()=>zt,TRACE_EVENT_END:()=>At,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Xe,Tensor:()=>We,env:()=>ke,registerBackend:()=>Zt});var He=X(()=>{Lm(),Gm(),Km(),Za(),Xm(),Ym(),Qa(),Zm(),Qm()}),vr=X(()=>{}),es={};Yt(es,{default:()=>ts});var Sr,Ir,ts,eg=X(()=>{var e;Np(),Rt(),zr(),Sr="ort-wasm-proxy-worker",Ir=((e=globalThis.self)==null?void 0:e.name)===Sr,Ir&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Or(r.wasm).then(()=>{Fi(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:s}=r;Hi(s,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,s=Zn(i);postMessage({type:n,out:s});break}case"create":{let{model:i,options:s}=r;Ki(i,s).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":Xi(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:o,options:u}=r;Zi(i,s,a,o,new Array(o.length).fill(null),u).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},Ji([...a,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":Qi(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),ts=Ir?null:t=>new Worker(t??Ve,{type:"module",name:Sr})}),ns={};Yt(ns,{default:()=>is});async function rs(e={}){var Am,Rm;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Am=self.name)==null?void 0:Am.startsWith("em-pthread"));t.mountExternalData=(l,h)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=l=>async(...h)=>{var w;try{if(t.Yc)throw Error("Session already started");let y=t.Yc={Kd:h[0],errors:[]},T=await l(...h);if(t.Yc!==y)throw Error("Session mismatch");(w=t.dd)==null||w.flush();let E=y.errors;if(0<E.length){let R=await Promise.all(E);if(R=R.filter(P=>P),0<R.length)throw Error(R.join(`
`))}return T}finally{t.Yc=null}};t.jsepInit=(l,h)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let w=t.dd;t.jsepRegisterBuffer=(y,T,E,R)=>w.registerBuffer(y,T,E,R),t.jsepGetBuffer=y=>w.getBuffer(y),t.jsepCreateDownloader=(y,T,E)=>w.createDownloader(y,T,E),t.jsepOnCreateSession=y=>{w.onCreateSession(y)},t.jsepOnReleaseSession=y=>{w.onReleaseSession(y)},t.jsepOnRunStart=y=>w.onRunStart(y),t.Id=(y,T)=>{w.upload(y,T)}}else if(l==="webnn"){let w=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=y=>w.onRunStart(y),t.webnnOnRunEnd=w.onRunEnd.bind(w),t.webnnOnReleaseSession=y=>{w.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,T)=>w.createMLTensorDownloader(y,T),t.webnnRegisterMLTensor=(y,T,E,R)=>w.registerMLTensor(y,T,E,R),t.webnnCreateMLContext=y=>w.createMLContext(y),t.webnnRegisterMLConstant=(y,T,E,R,P,Q)=>w.registerMLConstant(y,T,E,R,P,t.Xc,Q),t.webnnRegisterGraphInput=w.registerGraphInput.bind(w),t.webnnIsGraphInput=w.isGraphInput.bind(w),t.webnnRegisterGraphOutput=w.registerGraphOutput.bind(w),t.webnnIsGraphOutput=w.isGraphOutput.bind(w),t.webnnCreateTemporaryTensor=w.createTemporaryTensor.bind(w),t.webnnIsGraphInputOutputTypeSupported=w.isGraphInputOutputTypeSupported.bind(w)}};let a=()=>{let l=h=>(...w)=>{let y=ut;return w=h(...w),ut!=y?new Promise((T,E)=>{va={resolve:T,reject:E}}):w};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=l(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,u,d=(l,h)=>{throw h},c=self.location.href,p="";if(n||r){try{p=new URL(".",c).href}catch{}r&&(u=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async l=>{if(M(l))return new Promise((w,y)=>{var T=new XMLHttpRequest;T.open("GET",l,!0),T.responseType="arraybuffer",T.onload=()=>{T.status==200||T.status==0&&T.response?w(T.response):y(T.status)},T.onerror=y,T.send(null)});var h=await fetch(l,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,_,b,x,$=console.log.bind(console),I=console.error.bind(console),S=$,k=I,C=!1,M=l=>l.startsWith("file://");function v(){Tt.buffer!=N.buffer&&Y()}if(i){let l=function(h){try{var w=h.data,y=w.Sc;if(y==="load"){let T=[];self.onmessage=E=>T.push(E),x=()=>{postMessage({Sc:"loaded"});for(let E of T)l(E);self.onmessage=l};for(let E of w.xd)t[E]&&!t[E].proxy||(t[E]=(...R)=>{postMessage({Sc:"callHandler",wd:E,args:R})},E=="print"&&(S=t[E]),E=="printErr"&&(k=t[E]));Tt=w.Od,Y(),m=w.Pd,te(),yr()}else if(y==="run"){(function(T){var E=(v(),G)[T+52>>>2>>>0];T=(v(),G)[T+56>>>2>>>0],Gf(E,E-T),pe(E)})(w.Rc),Ea(w.Rc,0,0,1,0,0),Gh(),ba(w.Rc),O||(Nf(),O=!0);try{ow(w.Md,w.bd)}catch(T){if(T!="unwind")throw T}}else w.target!=="setimmediate"&&(y==="checkMailbox"?O&&dr():y&&(k(`worker: received unknown command ${y}`),k(w)))}catch(T){throw Df(),T}};var O=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=l}var N,F,L,V,z,G,H,K,ae,U,J,W=!1;function Y(){var l=Tt.buffer;t.HEAP8=N=new Int8Array(l),L=new Int16Array(l),t.HEAPU8=F=new Uint8Array(l),V=new Uint16Array(l),t.HEAP32=z=new Int32Array(l),t.HEAPU32=G=new Uint32Array(l),H=new Float32Array(l),K=new Float64Array(l),ae=new BigInt64Array(l),U=new BigUint64Array(l)}function A(){W=!0,i?x():wt.sb()}function B(l){throw k(l="Aborted("+l+")"),C=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),b==null||b(l),l}function j(){return{a:{ma:Mb,gb:Cb,g:uw,J:lw,f:dw,o:cw,h:pw,ha:hw,b:fw,T:mw,Ha:Kh,n:gw,$:Qh,Xa:Jh,Da:ef,Fa:tf,Ya:nf,Va:rf,Oa:af,Ua:sf,ka:of,Ea:uf,Ba:lf,Wa:df,Ca:cf,bb:yw,ea:_w,wa:ww,ua:$w,da:vw,O:Sw,H:Iw,va:Tw,_:Rw,xa:Ow,Ra:Bw,za:Dw,Ia:Uw,sa:Pw,fa:Lw,Qa:ba,_a:qw,R:Fw,r:Yw,c:_a,hb:Zw,y:Qw,M:Jw,D:eb,l:tb,s:wf,ib:nb,I:rb,S:ib,j:ab,u:sb,q:ob,k:ub,La:lb,Ma:db,Na:cb,Ja:vf,Ka:Sf,ta:If,db:hb,ab:mb,v:gb,aa:yb,ga:_b,$a:fb,W:wb,Za:bb,Aa:$b,F:pb,U:xb,la:mr,ya:Sb,fb:vb,eb:Ib,Sa:Cf,Ta:Mf,Ga:Oe,V:zf,ja:Af,Pa:Rf,ia:Of,kb:p1,na:o1,lb:c1,oa:s1,G:Zb,e:Ob,t:Ab,w:zb,B:Vb,mb:r1,K:Kb,x:Db,pa:i1,Y:u1,ba:n1,nb:t1,ob:e1,P:Fb,qa:Jb,pb:Qb,N:Xb,Z:a1,d:Rb,A:Nb,m:Bb,jb:h1,p:Pb,z:Lb,C:Ub,E:qb,L:Hb,qb:Yb,Q:l1,ca:jb,X:d1,rb:Wb,ra:Gb,i:kb,a:Tt,cb:_e}}}async function te(){function l(y,T){var E=wt=y.exports;y={};for(let[R,P]of Object.entries(E))typeof P=="function"?(E=Gw(P),y[R]=E):y[R]=P;return wt=y,wt=(function(){var R=wt,P=ee=>ce=>ee(ce)>>>0,Q=ee=>()=>ee()>>>0;return(R=Object.assign({},R)).tb=P(R.tb),R.Xb=Q(R.Xb),R.Zb=P(R.Zb),R.lc=P(R.lc),R.mc=Q(R.mc),R.qc=P(R.qc),R})(),Ht.push(wt._b),Bf=(y=wt).tb,Nf=y.ub,t._OrtInit=y.vb,t._OrtGetLastError=y.wb,t._OrtCreateSessionOptions=y.xb,t._OrtAppendExecutionProvider=y.yb,t._OrtAddFreeDimensionOverride=y.zb,t._OrtAddSessionConfigEntry=y.Ab,t._OrtReleaseSessionOptions=y.Bb,t._OrtCreateSession=y.Cb,t._OrtReleaseSession=y.Db,t._OrtGetInputOutputCount=y.Eb,t._OrtGetInputOutputMetadata=y.Fb,t._OrtFree=y.Gb,t._OrtCreateTensor=y.Hb,t._OrtGetTensorData=y.Ib,t._OrtReleaseTensor=y.Jb,t._OrtCreateRunOptions=y.Kb,t._OrtAddRunConfigEntry=y.Lb,t._OrtReleaseRunOptions=y.Mb,t._OrtCreateBinding=y.Nb,t._OrtBindInput=y.Ob,t._OrtBindOutput=y.Pb,t._OrtClearBoundOutputs=y.Qb,t._OrtReleaseBinding=y.Rb,t._OrtRunWithBinding=y.Sb,t._OrtRun=y.Tb,t._OrtEndProfiling=y.Ub,t._JsepOutput=y.Vb,t._JsepGetNodeName=y.Wb,gr=y.Xb,lt=t._free=y.Yb,En=t._malloc=y.Zb,Ea=y.ac,Df=y.bc,Uf=y.cc,Pf=y.dc,Ca=y.ec,Lf=y.fc,qf=y.gc,me=y.hc,Cn=y.ic,Gf=y.jc,pe=y.kc,Ma=y.lc,he=y.mc,Wf=y.nc,za=y.oc,Vf=y.pc,Ff=y.qc,Hf=y.rc,Aa=y.sc,jf=y.tc,Kf=y.uc,Xf=y.vc,Yf=y.wc,Zf=y.xc,Qf=y.yc,Jf=y.zc,em=y.Ac,tm=y.Bc,nm=y.Cc,rm=y.Dc,im=y.Ec,am=y.Fc,sm=y.Gc,om=y.Hc,um=y.Ic,lm=y.Jc,dm=y.Kc,cm=y.Lc,pm=y.Mc,hm=y.Nc,fm=y.Pc,mm=y.Qc,gm=y.$c,ym=y.ad,_m=y.fd,wm=y.jd,bm=y.kd,$m=y.ld,xm=y.md,vm=y.nd,Sm=y.od,Im=y.pd,Tm=y.qd,km=y.vd,Em=y.Td,Cm=y.Ud,Mm=y.Vd,zm=y.Wd,m=T,wt}var h,w=j();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(w,(T,E)=>{y(l(T,E))})}):i?l(new WebAssembly.Instance(m,j()),m):(J??(J=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(y){var T=J;if(!f&&!M(T))try{var E=fetch(T,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,y)}catch(R){k(`wasm streaming compile failed: ${R}`),k("falling back to ArrayBuffer instantiation")}return(async function(R,P){try{var Q=await(async function(ee){if(!f)try{var ce=await o(ee);return new Uint8Array(ce)}catch{}if(ee==J&&f)ee=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";ee=u(ee)}return ee})(R);return await WebAssembly.instantiate(Q,P)}catch(ee){k(`failed to asynchronously prepare wasm: ${ee}`),B(ee)}})(T,y)})(w),l(h.instance,h.module))}class Z{constructor(h){Om(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var de=l=>{l.terminate(),l.onmessage=()=>{}},ve=[],fe=0,Ie=null,Se=l=>{Le.length==0&&(Vh(),Wh(Le[0]));var h=Le.pop();if(!h)return 6;yt.push(h),st[l.Rc]=h,h.Rc=l.Rc;var w={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return h.postMessage(w,l.rd),0},ye=0,se=(l,h,...w)=>{var y,T=16*w.length,E=he(),R=Ma(T),P=R>>>3;for(y of w)typeof y=="bigint"?((v(),ae)[P++>>>0]=1n,(v(),ae)[P++>>>0]=y):((v(),ae)[P++>>>0]=0n,(v(),K)[P++>>>0]=y);return l=Uf(l,0,T,R,h),pe(E),l};function _e(l){if(i)return se(0,1,l);if(g=l,!(0<ye)){for(var h of yt)de(h);for(h of Le)de(h);Le=[],yt=[],st={},C=!0}d(0,new Z(l))}function Ue(l){if(i)return se(1,0,l);Oe(l)}var Oe=l=>{if(g=l,i)throw Ue(l),"unwind";_e(l)},Le=[],yt=[],Ht=[],st={},qh=l=>{var h=l.Rc;delete st[h],Le.push(l),yt.splice(yt.indexOf(l),1),l.Rc=0,Pf(h)};function Gh(){Ht.forEach(l=>l())}var Wh=l=>new Promise(h=>{l.onmessage=T=>{var E=T.data;if(T=E.Sc,E.Zc&&E.Zc!=gr()){var R=st[E.Zc];R?R.postMessage(E,E.rd):k(`Internal error! Worker sent a message "${T}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else T==="checkMailbox"?dr():T==="spawnThread"?Se(E):T==="cleanupThread"?lr(()=>{qh(st[E.Nd])}):T==="loaded"?(l.loaded=!0,h(l)):E.target==="setimmediate"?l.postMessage(E):T==="uncaughtException"?l.onerror(E.error):T==="callHandler"?t[E.wd](...E.args):T&&k(`worker sent an unknown command ${T}`)},l.onerror=T=>{throw k(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var w,y=[];for(w of[])t.propertyIsEnumerable(w)&&y.push(w);l.postMessage({Sc:"load",xd:y,Od:Tt,Pd:m})});function Vh(){var l=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Le.push(l)}var Tt,ow=(l,h)=>{ye=0,l=Aa(l,h),0<ye?g=l:Ca(l)},sr=[],or=0;function uw(l){var h=new fa(l>>>=0);return(v(),N)[h.Tc+12>>>0]==0&&(Fh(h,!0),or--),Hh(h,!1),sr.push(h),Ff(l)}var rn=0,lw=()=>{me(0,0);var l=sr.pop();Wf(l.cd),rn=0};function Fh(l,h){h=h?1:0,(v(),N)[l.Tc+12>>>0]=h}function Hh(l,h){h=h?1:0,(v(),N)[l.Tc+13>>>0]=h}class fa{constructor(h){this.cd=h,this.Tc=h-24}}var ma=l=>{var h=rn;if(!h)return Cn(0),0;var w=new fa(h);(v(),G)[w.Tc+16>>>2>>>0]=h;var y=(v(),G)[w.Tc+4>>>2>>>0];if(!y)return Cn(0),h;for(var T of l){if(T===0||T===y)break;if(Vf(T,y,w.Tc+16))return Cn(T),h}return Cn(y),h};function dw(){return ma([])}function cw(l){return ma([l>>>0])}function pw(l,h,w,y){return ma([l>>>0,h>>>0,w>>>0,y>>>0])}var hw=()=>{var l=sr.pop();l||B("no exception to throw");var h=l.cd;throw(v(),N)[l.Tc+13>>>0]==0&&(sr.push(l),Hh(l,!0),Fh(l,!1),or++),za(h),rn=h};function fw(l,h,w){var y=new fa(l>>>=0);throw h>>>=0,w>>>=0,(v(),G)[y.Tc+16>>>2>>>0]=0,(v(),G)[y.Tc+4>>>2>>>0]=h,(v(),G)[y.Tc+8>>>2>>>0]=w,za(l),or++,rn=l}var mw=()=>or;function jh(l,h,w,y){return i?se(2,1,l,h,w,y):Kh(l,h,w,y)}function Kh(l,h,w,y){if(l>>>=0,h>>>=0,w>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var T=[];return i&&T.length===0?jh(l,h,w,y):(l={Ld:w,Rc:l,bd:y,rd:T},i?(l.Sc="spawnThread",postMessage(l,T),0):Se(l))}function gw(l){throw rn||(rn=l>>>0),rn}var Xh=globalThis.TextDecoder&&new TextDecoder,Yh=(l,h,w,y)=>{if(w=h+w,y)return w;for(;l[h]&&!(h>=w);)++h;return h},Zh=(l,h=0,w,y)=>{if(16<(w=Yh(l,h>>>=0,w,y))-h&&l.buffer&&Xh)return Xh.decode(l.buffer instanceof ArrayBuffer?l.subarray(h,w):l.slice(h,w));for(y="";h<w;){var T=l[h++];if(128&T){var E=63&l[h++];if((224&T)==192)y+=String.fromCharCode((31&T)<<6|E);else{var R=63&l[h++];65536>(T=(240&T)==224?(15&T)<<12|E<<6|R:(7&T)<<18|E<<12|R<<6|63&l[h++])?y+=String.fromCharCode(T):(T-=65536,y+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else y+=String.fromCharCode(T)}return y},Ae=(l,h,w)=>(l>>>=0)?Zh((v(),F),l,h,w):"";function Qh(l,h,w){return i?se(3,1,l,h,w):0}function Jh(l,h){if(i)return se(4,1,l,h)}function ef(l,h){if(i)return se(5,1,l,h)}function tf(l,h,w){if(i)return se(6,1,l,h,w)}function nf(l,h,w){return i?se(7,1,l,h,w):0}function rf(l,h){if(i)return se(8,1,l,h)}function af(l,h,w){if(i)return se(9,1,l,h,w)}function sf(l,h,w,y){if(i)return se(10,1,l,h,w,y)}function of(l,h,w,y){if(i)return se(11,1,l,h,w,y)}function uf(l,h,w,y){if(i)return se(12,1,l,h,w,y)}function lf(l){if(i)return se(13,1,l)}function df(l,h){if(i)return se(14,1,l,h)}function cf(l,h,w){if(i)return se(15,1,l,h,w)}var yw=()=>B(""),ot=l=>{l>>>=0;for(var h="";;){var w=(v(),F)[l++>>>0];if(!w)return h;h+=String.fromCharCode(w)}},ga={},ya={},an=class extends Error{constructor(l){super(l),this.name="BindingError"}};function _t(l,h,w={}){return(function(y,T,E={}){var R=T.name;if(!y)throw new an(`type "${R}" must have a positive integer typeid pointer`);if(ya.hasOwnProperty(y)){if(E.yd)return;throw new an(`Cannot register type '${R}' twice`)}ya[y]=T,ga.hasOwnProperty(y)&&(T=ga[y],delete ga[y],T.forEach(P=>P()))})(l,h,w)}var pf=(l,h,w)=>{switch(h){case 1:return w?y=>(v(),N)[y>>>0]:y=>(v(),F)[y>>>0];case 2:return w?y=>(v(),L)[y>>>1>>>0]:y=>(v(),V)[y>>>1>>>0];case 4:return w?y=>(v(),z)[y>>>2>>>0]:y=>(v(),G)[y>>>2>>>0];case 8:return w?y=>(v(),ae)[y>>>3>>>0]:y=>(v(),U)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${l}`)}};function _w(l,h,w,y,T){l>>>=0,w>>>=0,h=ot(h>>>0);let E=R=>R;if(y=y===0n){let R=8*w;E=P=>BigInt.asUintN(R,P),T=E(T)}_t(l,{name:h,Oc:E,Vc:(R,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:pf(h,w,!y),Wc:null})}function ww(l,h,w,y){_t(l>>>=0,{name:h=ot(h>>>0),Oc:function(T){return!!T},Vc:function(T,E){return E?w:y},Uc:function(T){return this.Oc((v(),F)[T>>>0])},Wc:null})}var hf=[],jt=[0,1,,1,null,1,!0,1,!1,1];function _a(l){9<(l>>>=0)&&--jt[l+1]===0&&(jt[l]=void 0,hf.push(l))}var Ke=l=>{if(!l)throw new an(`Cannot use deleted val. handle = ${l}`);return jt[l]},rt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=hf.pop()||jt.length;return jt[h]=l,jt[h+1]=1,h}};function wa(l){return this.Oc((v(),G)[l>>>2>>>0])}var bw={name:"emscripten::val",Oc:l=>{var h=Ke(l);return _a(l),h},Vc:(l,h)=>rt(h),Uc:wa,Wc:null};function $w(l){return _t(l>>>0,bw)}var xw=(l,h)=>{switch(h){case 4:return function(w){return this.Oc((v(),H)[w>>>2>>>0])};case 8:return function(w){return this.Oc((v(),K)[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${l}`)}};function vw(l,h,w){w>>>=0,_t(l>>>=0,{name:h=ot(h>>>0),Oc:y=>y,Vc:(y,T)=>T,Uc:xw(h,w),Wc:null})}function Sw(l,h,w,y,T){l>>>=0,w>>>=0,h=ot(h>>>0);let E=P=>P;if(y===0){var R=32-8*w;E=P=>P<<R>>>R,T=E(T)}_t(l,{name:h,Oc:E,Vc:(P,Q)=>Q,Uc:pf(h,w,y!==0),Wc:null})}function Iw(l,h,w){function y(E){var R=(v(),G)[E>>>2>>>0];return E=(v(),G)[E+4>>>2>>>0],new T((v(),N).buffer,E,R)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];_t(l>>>=0,{name:w=ot(w>>>0),Oc:y,Uc:y},{yd:!0})}var kt=(l,h,w)=>{var y=(v(),F);if(h>>>=0,0<w){var T=h;w=h+w-1;for(var E=0;E<l.length;++E){var R=l.codePointAt(E);if(127>=R){if(h>=w)break;y[h++>>>0]=R}else if(2047>=R){if(h+1>=w)break;y[h++>>>0]=192|R>>6,y[h++>>>0]=128|63&R}else if(65535>=R){if(h+2>=w)break;y[h++>>>0]=224|R>>12,y[h++>>>0]=128|R>>6&63,y[h++>>>0]=128|63&R}else{if(h+3>=w)break;y[h++>>>0]=240|R>>18,y[h++>>>0]=128|R>>12&63,y[h++>>>0]=128|R>>6&63,y[h++>>>0]=128|63&R,E++}}y[h>>>0]=0,l=h-T}else l=0;return l},ur=l=>{for(var h=0,w=0;w<l.length;++w){var y=l.charCodeAt(w);127>=y?h++:2047>=y?h+=2:55296<=y&&57343>=y?(h+=4,++w):h+=3}return h};function Tw(l,h){_t(l>>>=0,{name:h=ot(h>>>0),Oc(w){var y=(v(),G)[w>>>2>>>0];return y=Ae(w+4,y,!0),lt(w),y},Vc(w,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var T=typeof y=="string";if(!(T||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new an("Cannot pass non-string to std::string");var E=T?ur(y):y.length,R=En(4+E+1),P=R+4;return(v(),G)[R>>>2>>>0]=E,T?kt(y,P,E+1):(v(),F).set(y,P>>>0),w!==null&&w.push(lt,R),R},Uc:wa,Wc(w){lt(w)}})}var ff=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,kw=(l,h,w)=>{if(l>>>=1,16<(h=Yh((v(),V),l,h/2,w))-l&&ff)return ff.decode((v(),V).slice(l,h));for(w="";l<h;++l){var y=(v(),V)[l>>>0];w+=String.fromCharCode(y)}return w},Ew=(l,h,w)=>{if(w??(w=2147483647),2>w)return 0;var y=h;w=(w-=2)<2*l.length?w/2:l.length;for(var T=0;T<w;++T){var E=l.charCodeAt(T);(v(),L)[h>>>1>>>0]=E,h+=2}return(v(),L)[h>>>1>>>0]=0,h-y},Cw=l=>2*l.length,Mw=(l,h,w)=>{var y="";l>>>=2;for(var T=0;!(T>=h/4);T++){var E=(v(),G)[l+T>>>0];if(!E&&!w)break;y+=String.fromCodePoint(E)}return y},zw=(l,h,w)=>{if(h>>>=0,w??(w=2147483647),4>w)return 0;var y=h;w=y+w-4;for(var T=0;T<l.length;++T){var E=l.codePointAt(T);if(65535<E&&T++,(v(),z)[h>>>2>>>0]=E,(h+=4)+4>w)break}return(v(),z)[h>>>2>>>0]=0,h-y},Aw=l=>{for(var h=0,w=0;w<l.length;++w)65535<l.codePointAt(w)&&w++,h+=4;return h};function Rw(l,h,w){if(l>>>=0,h>>>=0,w=ot(w>>>=0),h===2)var y=kw,T=Ew,E=Cw;else y=Mw,T=zw,E=Aw;_t(l,{name:w,Oc:R=>{var P=(v(),G)[R>>>2>>>0];return P=y(R+4,P*h,!0),lt(R),P},Vc:(R,P)=>{if(typeof P!="string")throw new an(`Cannot pass non-string to C++ string type ${w}`);var Q=E(P),ee=En(4+Q+h);return(v(),G)[ee>>>2>>>0]=Q/h,T(P,ee+4,Q+h),R!==null&&R.push(lt,ee),ee},Uc:wa,Wc(R){lt(R)}})}function Ow(l,h){_t(l>>>=0,{zd:!0,name:h=ot(h>>>0),Oc:()=>{},Vc:()=>{}})}function Bw(l){Ea(l>>>0,!r,1,!n,131072,!1),Gh()}var lr=l=>{if(!C)try{if(l(),!(0<ye))try{i?gr()&&Ca(g):Oe(g)}catch(h){h instanceof Z||h=="unwind"||d(0,h)}}catch(h){h instanceof Z||h=="unwind"||d(0,h)}},Nw=!Atomics.waitAsync||((Rm=globalThis.navigator)==null?void 0:Rm.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ba(l){l>>>=0,Nw||(Atomics.waitAsync((v(),z),l>>>2,l).value.then(dr),l+=128,Atomics.store((v(),z),l>>>2,1))}var dr=()=>lr(()=>{var l=gr();l&&(ba(l),qf())});function Dw(l,h){(l>>>=0)==h>>>0?setTimeout(dr):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=st[l])&&l.postMessage({Sc:"checkMailbox"})}var $a=[];function Uw(l,h,w,y,T){for(h>>>=0,T>>>=0,$a.length=0,w=T>>>3,y=T+y>>>3;w<y;){var E;E=(v(),ae)[w++>>>0]?(v(),ae)[w++>>>0]:(v(),K)[w++>>>0],$a.push(E)}return(h?Ra[h]:Eb[l])(...$a)}var Pw=()=>{ye=0};function Lw(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):qh(st[l])}function qw(l){}var cr=l=>{try{l()}catch(h){B(h)}};function Gw(l){var h=(...w)=>{pr.push(l);try{return l(...w)}finally{C||(pr.pop(),ut&&Et===1&&pr.length===0&&(Et=0,ye+=1,cr(Cm),typeof Fibers<"u"&&Fibers.Zd()))}};return yf.set(l,h),h}var Et=0,ut=null,mf=0,pr=[],xa=new Map,gf=new Map,yf=new Map,Ww=0,va=null,Vw=[],_f=l=>(function(h){if(!C){if(Et===0){var w=!1,y=!1;h((T=0)=>{if(!C&&(mf=T,w=!0,y)){Et=2,cr(()=>Mm(ut)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),T=!1;try{var E=(function(){var Q=(v(),z)[ut+8>>>2>>>0];return Q=gf.get(Q),Q=yf.get(Q),--ye,Q()})()}catch(Q){E=Q,T=!0}var R=!1;if(!ut){var P=va;P&&(va=null,(T?P.reject:P.resolve)(E),R=!0)}if(T&&!R)throw E}}),y=!0,w||(Et=1,ut=(function(){var T=En(65548),E=T+12;if((v(),G)[T>>>2>>>0]=E,(v(),G)[T+4>>>2>>>0]=E+65536,E=pr[0],!xa.has(E)){var R=Ww++;xa.set(E,R),gf.set(R,E)}return E=xa.get(E),(v(),z)[T+8>>>2>>>0]=E,T})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),cr(()=>Em(ut)))}else Et===2?(Et=0,cr(zm),lt(ut),ut=null,Vw.forEach(lr)):B(`invalid state: ${Et}`);return mf}})(h=>{l().then(h)});function Fw(l){return l>>>=0,_f(async()=>{var h=await Ke(l);return rt(h)})}var Sa=[],Hw=l=>{var h=Sa.length;return Sa.push(l),h},jw=(l,h)=>{for(var w=Array(l),y=0;y<l;++y){var T=y,E=(v(),G)[h+4*y>>>2>>>0],R=ya[E];if(R===void 0)throw l=`parameter ${y}`,E=Bf(E),h=ot(E),lt(E),new an(`${l} has unknown type ${h}`);w[T]=R}return w},Kw=(l,h,w)=>{var y=[];return l=l(y,w),y.length&&((v(),G)[h>>>2>>>0]=rt(y)),l},Xw={},hr=l=>{var h=Xw[l];return h===void 0?ot(l):h};function Yw(l,h,w){var[y,...T]=jw(l,h>>>0);h=y.Vc.bind(y);var E=T.map(Q=>Q.Uc.bind(Q));l--;var R={toValue:Ke};switch(l=E.map((Q,ee)=>{var ce=`argFromPtr${ee}`;return R[ce]=Q,`${ce}(args${ee?"+"+8*ee:""})`}),w){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:R.getStringOrSymbol=hr,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${l})`,y.zd||(R.toReturnWire=h,R.emval_returnValue=Kw,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,w=new Function(Object.keys(R),P)(...Object.values(R)),P=`methodCaller<(${T.map(Q=>Q.name)}) => ${y.name}>`,Hw(Object.defineProperty(w,"name",{value:P}))}function Zw(l,h){return h>>>=0,(l=Ke(l>>>0))==Ke(h)}function Qw(l){return(l>>>=0)?(l=hr(l),rt(globalThis[l])):rt(globalThis)}function Jw(l){return l=hr(l>>>0),rt(t[l])}function eb(l,h){return h>>>=0,l=Ke(l>>>0),h=Ke(h),rt(l[h])}function tb(l){9<(l>>>=0)&&(jt[l+1]+=1)}function wf(l,h,w,y,T){return Sa[l>>>0](h>>>0,w>>>0,y>>>0,T>>>0)}function nb(l,h,w,y,T){return wf(l>>>0,h>>>0,w>>>0,y>>>0,T>>>0)}function rb(){return rt([])}function ib(l){l=Ke(l>>>0);for(var h=Array(l.length),w=0;w<l.length;w++)h[w]=l[w];return rt(h)}function ab(l){return rt(hr(l>>>0))}function sb(){return rt({})}function ob(l){for(var h=Ke(l>>>=0);h.length;){var w=h.pop();h.pop()(w)}_a(l)}function ub(l,h,w){h>>>=0,w>>>=0,l=Ke(l>>>0),h=Ke(h),w=Ke(w),l[h]=w}function lb(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),z)[h>>>2>>>0]=l.getUTCSeconds(),(v(),z)[h+4>>>2>>>0]=l.getUTCMinutes(),(v(),z)[h+8>>>2>>>0]=l.getUTCHours(),(v(),z)[h+12>>>2>>>0]=l.getUTCDate(),(v(),z)[h+16>>>2>>>0]=l.getUTCMonth(),(v(),z)[h+20>>>2>>>0]=l.getUTCFullYear()-1900,(v(),z)[h+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),z)[h+28>>>2>>>0]=l}var bf=l=>l%4==0&&(l%100!=0||l%400==0),$f=[0,31,60,91,121,152,182,213,244,274,305,335],xf=[0,31,59,90,120,151,181,212,243,273,304,334];function db(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),z)[h>>>2>>>0]=l.getSeconds(),(v(),z)[h+4>>>2>>>0]=l.getMinutes(),(v(),z)[h+8>>>2>>>0]=l.getHours(),(v(),z)[h+12>>>2>>>0]=l.getDate(),(v(),z)[h+16>>>2>>>0]=l.getMonth(),(v(),z)[h+20>>>2>>>0]=l.getFullYear()-1900,(v(),z)[h+24>>>2>>>0]=l.getDay();var w=(bf(l.getFullYear())?$f:xf)[l.getMonth()]+l.getDate()-1|0;(v(),z)[h+28>>>2>>>0]=w,(v(),z)[h+36>>>2>>>0]=-60*l.getTimezoneOffset(),w=new Date(l.getFullYear(),6,1).getTimezoneOffset();var y=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(w!=y&&l.getTimezoneOffset()==Math.min(y,w)),(v(),z)[h+32>>>2>>>0]=l}function cb(l){l>>>=0;var h=new Date((v(),z)[l+20>>>2>>>0]+1900,(v(),z)[l+16>>>2>>>0],(v(),z)[l+12>>>2>>>0],(v(),z)[l+8>>>2>>>0],(v(),z)[l+4>>>2>>>0],(v(),z)[l>>>2>>>0],0),w=(v(),z)[l+32>>>2>>>0],y=h.getTimezoneOffset(),T=new Date(h.getFullYear(),6,1).getTimezoneOffset(),E=new Date(h.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(E,T);return 0>w?(v(),z)[l+32>>>2>>>0]=+(T!=E&&R==y):0<w!=(R==y)&&(T=Math.max(E,T),h.setTime(h.getTime()+6e4*((0<w?R:T)-y))),(v(),z)[l+24>>>2>>>0]=h.getDay(),w=(bf(h.getFullYear())?$f:xf)[h.getMonth()]+h.getDate()-1|0,(v(),z)[l+28>>>2>>>0]=w,(v(),z)[l>>>2>>>0]=h.getSeconds(),(v(),z)[l+4>>>2>>>0]=h.getMinutes(),(v(),z)[l+8>>>2>>>0]=h.getHours(),(v(),z)[l+12>>>2>>>0]=h.getDate(),(v(),z)[l+16>>>2>>>0]=h.getMonth(),(v(),z)[l+20>>>2>>>0]=h.getYear(),l=h.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function vf(l,h,w,y,T,E,R){return i?se(16,1,l,h,w,y,T,E,R):-52}function Sf(l,h,w,y,T,E){if(i)return se(17,1,l,h,w,y,T,E)}var kn={},pb=()=>performance.timeOrigin+performance.now();function If(l,h){if(i)return se(18,1,l,h);if(kn[l]&&(clearTimeout(kn[l].id),delete kn[l]),!h)return 0;var w=setTimeout(()=>{delete kn[l],lr(()=>Lf(l,performance.timeOrigin+performance.now()))},h);return kn[l]={id:w,Yd:h},0}function hb(l,h,w,y){l>>>=0,h>>>=0,w>>>=0,y>>>=0;var T=new Date().getFullYear(),E=new Date(T,0,1).getTimezoneOffset();T=new Date(T,6,1).getTimezoneOffset();var R=Math.max(E,T);(v(),G)[l>>>2>>>0]=60*R,(v(),z)[h>>>2>>>0]=+(E!=T),l=(h=P=>{var Q=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(Q/60)).padStart(2,"0")}${String(Q%60).padStart(2,"0")}`})(E),h=h(T),T<E?(kt(l,w,17),kt(h,y,17)):(kt(l,y,17),kt(h,w,17))}var fb=()=>Date.now();function mb(l,h,w){return w>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(v(),ae)[w>>>3>>>0]=BigInt(l),0):28}var Ia=[],Tf=(l,h)=>{Ia.length=0;for(var w;w=(v(),F)[l++>>>0];){var y=w!=105;h+=(y&=w!=112)&&h%8?4:0,Ia.push(w==112?(v(),G)[h>>>2>>>0]:w==106?(v(),ae)[h>>>3>>>0]:w==105?(v(),z)[h>>>2>>>0]:(v(),K)[h>>>3>>>0]),h+=y?8:4}return Ia};function gb(l,h,w){return l>>>=0,h=Tf(h>>>0,w>>>0),Ra[l](...h)}function yb(l,h,w){return l>>>=0,h=Tf(h>>>0,w>>>0),Ra[l](...h)}var _b=()=>{};function wb(l,h){return k(Ae(l>>>0,h>>>0))}var bb=()=>{throw ye+=1,"unwind"};function $b(){return 4294901760}var xb=()=>navigator.hardwareConcurrency,Kt={},fr=l=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+h[1]:0},kf=l=>{for(var h of l)(l=fr(h))&&(Kt[l]=h)};function vb(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),kf(l),Kt.gd=fr(l[3]),Kt.Jd=l,Kt.gd}function mr(l){if(!(l=Kt[l>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(l))l=h[1];else{if(!(h=/^(.+?)@/.exec(l)))return 0;l=h[1]}lt(mr.hd??0),h=ur(l)+1;var w=En(h);return w&&kt(l,w,h),mr.hd=w,mr.hd}function Sb(l){l>>>=0;var h=(v(),F).length;if(l<=h||4294901760<l)return!1;for(var w=1;4>=w;w*=2){var y=h*(1+.2/w);y=Math.min(y,l+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(l,y)/65536))-Tt.buffer.byteLength+65535)/65536|0;try{Tt.grow(y),Y();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}function Ib(l,h,w){if(l>>>=0,h>>>=0,Kt.gd==l)var y=Kt.Jd;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),kf(y);for(var T=3;y[T]&&fr(y[T])!=l;)++T;for(l=0;l<w&&y[l+T];++l)(v(),z)[h+4*l>>>2>>>0]=fr(y[l+T]);return l}var Ta,ka={},Ef=()=>{var y;if(!Ta){var l,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((y=globalThis.navigator)==null?void 0:y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in ka)ka[l]===void 0?delete h[l]:h[l]=ka[l];var w=[];for(l in h)w.push(`${l}=${h[l]}`);Ta=w}return Ta};function Cf(l,h){if(i)return se(19,1,l,h);l>>>=0,h>>>=0;var w,y=0,T=0;for(w of Ef()){var E=h+y;(v(),G)[l+T>>>2>>>0]=E,y+=kt(w,E,1/0)+1,T+=4}return 0}function Mf(l,h){if(i)return se(20,1,l,h);l>>>=0,h>>>=0;var w=Ef();for(var y of((v(),G)[l>>>2>>>0]=w.length,l=0,w))l+=ur(y)+1;return(v(),G)[h>>>2>>>0]=l,0}function zf(l){return i?se(21,1,l):52}function Af(l,h,w,y){return i?se(22,1,l,h,w,y):52}function Rf(l,h,w,y){return i?se(23,1,l,h,w,y):70}var Tb=[null,[],[]];function Of(l,h,w,y){if(i)return se(24,1,l,h,w,y);h>>>=0,w>>>=0,y>>>=0;for(var T=0,E=0;E<w;E++){var R=(v(),G)[h>>>2>>>0],P=(v(),G)[h+4>>>2>>>0];h+=8;for(var Q=0;Q<P;Q++){var ee=l,ce=(v(),F)[R+Q>>>0],we=Tb[ee];ce===0||ce===10?((ee===1?S:k)(Zh(we)),we.length=0):we.push(ce)}T+=P}return(v(),G)[y>>>2>>>0]=T,0}function kb(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)Vh();ve.push(async()=>{var h=(async function(){if(!i)return Promise.all(Le.map(Wh))})();fe++,await h,--fe==0&&Ie&&(h=Ie,Ie=null,h())})})(),i||(Tt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Y()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>he(),t.stackRestore=l=>pe(l),t.stackAlloc=l=>Ma(l),t.setValue=function(l,h,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":case"i8":(v(),N)[l>>>0]=h;break;case"i16":(v(),L)[l>>>1>>>0]=h;break;case"i32":(v(),z)[l>>>2>>>0]=h;break;case"i64":(v(),ae)[l>>>3>>>0]=BigInt(h);break;case"float":(v(),H)[l>>>2>>>0]=h;break;case"double":(v(),K)[l>>>3>>>0]=h;break;case"*":(v(),G)[l>>>2>>>0]=h;break;default:B(`invalid type for setValue: ${w}`)}},t.getValue=function(l,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),N)[l>>>0];case"i16":return(v(),L)[l>>>1>>>0];case"i32":return(v(),z)[l>>>2>>>0];case"i64":return(v(),ae)[l>>>3>>>0];case"float":return(v(),H)[l>>>2>>>0];case"double":return(v(),K)[l>>>3>>>0];case"*":return(v(),G)[l>>>2>>>0];default:B(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Ae,t.stringToUTF8=kt,t.lengthBytesUTF8=ur;var Bf,Nf,gr,lt,En,Ea,Df,Uf,Pf,Ca,Lf,qf,me,Cn,Gf,pe,Ma,he,Wf,za,Vf,Ff,Hf,Aa,jf,Kf,Xf,Yf,Zf,Qf,Jf,em,tm,nm,rm,im,am,sm,om,um,lm,dm,cm,pm,hm,fm,mm,gm,ym,_m,wm,bm,$m,xm,vm,Sm,Im,Tm,km,Em,Cm,Mm,zm,wt,Eb=[_e,Ue,jh,Qh,Jh,ef,tf,nf,rf,af,sf,of,uf,lf,df,cf,vf,Sf,If,Cf,Mf,zf,Af,Rf,Of],Ra={1003524:(l,h,w,y,T)=>{if(t===void 0||!t.Xc)return 1;if((l=Ae(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(h=Number(h>>>0),w=Number(w>>>0),y=Number(y>>>0),h+w>l.byteLength)return 3;try{let E=l.subarray(h,h+w);switch(T){case 0:(v(),F).set(E,y>>>0);break;case 1:t.Qd?t.Qd(y,E):t.Id(y,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,h,w)=>{t.td(l,(v(),F).subarray(h>>>0,h+w>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w),!0)},1004704:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,h,w)=>{t.$b("HardSigmoid",l,{alpha:h,beta:w})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,h,w)=>{t.$b("Clip",l,{min:h,max:w})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,h)=>{t.$b("Elu",l,{alpha:h})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,h)=>{t.$b("LeakyRelu",l,{alpha:h})},1006444:(l,h)=>{t.$b("ThresholdedRelu",l,{alpha:h})},1006514:(l,h)=>{t.$b("Cast",l,{to:h})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,h,w,y,T)=>{t.$b("ReduceMean",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007283:(l,h,w,y,T)=>{t.$b("ReduceMax",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007457:(l,h,w,y,T)=>{t.$b("ReduceMin",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007631:(l,h,w,y,T)=>{t.$b("ReduceProd",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007806:(l,h,w,y,T)=>{t.$b("ReduceSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007980:(l,h,w,y,T)=>{t.$b("ReduceL1",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008153:(l,h,w,y,T)=>{t.$b("ReduceL2",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008326:(l,h,w,y,T)=>{t.$b("ReduceLogSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008503:(l,h,w,y,T)=>{t.$b("ReduceSumSquare",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008683:(l,h,w,y,T)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,h,w)=>{t.$b("Transpose",l,{perm:h?Array.from((v(),z).subarray(Number(h)>>>0,Number(w)>>>0)):[]})},1009040:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Ae(w),format:y?"NHWC":"NCHW"})},1009173:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Ae(w),format:y?"NHWC":"NCHW"})},1009306:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Ct)=>{t.$b("ConvTranspose",l,{format:Q?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[T],pads:[E,R],strides:[P],wIsConst:()=>!!(v(),N)[ee>>>0],outputPadding:ce?Array.from((v(),z).subarray(Number(ce)>>>0,Number(we)>>>0)):[],outputShape:Te?Array.from((v(),z).subarray(Number(Te)>>>0,Number(Ce)>>>0)):[],activation:Ae(Ct)})},1009739:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),z).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),z).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[Q>>>0],outputPadding:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],outputShape:we?Array.from((v(),z).subarray(Number(we)>>>0,Number(Te)>>>0)):[],activation:Ae(Ce)})},1010400:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Ct)=>{t.$b("ConvTranspose",l,{format:Q?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[T],pads:[E,R],strides:[P],wIsConst:()=>!!(v(),N)[ee>>>0],outputPadding:ce?Array.from((v(),z).subarray(Number(ce)>>>0,Number(we)>>>0)):[],outputShape:Te?Array.from((v(),z).subarray(Number(Te)>>>0,Number(Ce)>>>0)):[],activation:Ae(Ct)})},1010833:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),z).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),z).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((v(),z).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),z).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[Q>>>0],outputPadding:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],outputShape:we?Array.from((v(),z).subarray(Number(we)>>>0,Number(Te)>>>0)):[],activation:Ae(Ce)})},1011494:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1011585:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("AveragePool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),z).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),z).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),z).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1012064:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1012155:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("AveragePool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),z).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),z).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),z).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1012634:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1012721:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("MaxPool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),z).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),z).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),z).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1013196:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1013283:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("MaxPool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),z).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((v(),z).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((v(),z).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1013758:(l,h,w,y,T)=>{t.$b("Gemm",l,{alpha:h,beta:w,transA:y,transB:T})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,h,w,y)=>{t.$b("ArgMax",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014024:(l,h,w,y)=>{t.$b("ArgMin",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014132:(l,h)=>{t.$b("Softmax",l,{axis:h})},1014195:(l,h)=>{t.$b("Concat",l,{axis:h})},1014255:(l,h,w,y,T)=>{t.$b("Split",l,{axis:h,numOutputs:w,splitSizes:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,h)=>{t.$b("Gather",l,{axis:Number(h)})},1014536:(l,h)=>{t.$b("GatherElements",l,{axis:Number(h)})},1014615:(l,h)=>{t.$b("GatherND",l,{batch_dims:Number(h)})},1014694:(l,h,w,y,T,E,R,P,Q,ee,ce)=>{t.$b("Resize",l,{antialias:h,axes:w?Array.from((v(),z).subarray(Number(w)>>>0,Number(y)>>>0)):[],coordinateTransformMode:Ae(T),cubicCoeffA:E,excludeOutside:R,extrapolationValue:P,keepAspectRatioPolicy:Ae(Q),mode:Ae(ee),nearestMode:Ae(ce)})},1015056:(l,h,w,y,T,E,R)=>{t.$b("Slice",l,{starts:h?Array.from((v(),z).subarray(Number(h)>>>0,Number(w)>>>0)):[],ends:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[],axes:E?Array.from((v(),z).subarray(Number(E)>>>0,Number(R)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015486:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,h)=>{t.$b("Einsum",l,{equation:Ae(h)})},1015734:(l,h,w,y,T)=>{t.$b("Pad",l,{mode:h,value:w,pads:y?Array.from((v(),z).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1015877:(l,h,w,y,T,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!T,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016046:(l,h,w,y,T,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!T,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016215:(l,h,w)=>{t.$b("CumSum",l,{exclusive:Number(h),reverse:Number(w)})},1016312:(l,h,w)=>{t.$b("DequantizeLinear",l,{axis:h,blockSize:w})},1016402:(l,h,w,y,T)=>{t.$b("GridSample",l,{align_corners:h,mode:Ae(w),padding_mode:Ae(y),format:T?"NHWC":"NCHW"})},1016572:(l,h,w,y,T)=>{t.$b("GridSample",l,{align_corners:h,mode:Ae(w),padding_mode:Ae(y),format:T?"NHWC":"NCHW"})},1016742:(l,h)=>{t.$b("ScatterND",l,{reduction:Ae(h)})},1016827:(l,h,w,y,T,E,R,P,Q)=>{t.$b("Attention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:T,doRotary:E,qkvHiddenSizes:R?Array.from((v(),z).subarray(Number(P)>>>0,Number(P)+R>>>0)):[],pastPresentShareBuffer:!!Q})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Ct,Oa)=>{t.$b("Conv",l,{format:we?"NHWC":"NCHW",auto_pad:h,dilations:w?Array.from((v(),z).subarray(Number(w)>>>0,Number(y)>>>0)):[],group:T,kernel_shape:E?Array.from((v(),z).subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:P?Array.from((v(),z).subarray(Number(P)>>>0,Number(Q)>>>0)):[],strides:ee?Array.from((v(),z).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Te)>>>0],activation:Ae(Ce),activation_params:Ct?Array.from((v(),H).subarray(Number(Ct)>>>0,Number(Oa)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,h,w,y,T,E,R,P,Q)=>{t.$b("GroupQueryAttention",l,{numHeads:h,kvNumHeads:w,scale:y,softcap:T,doRotary:E,rotaryInterleaved:R,smoothSoftmax:P,localWindowSize:Q})},1018124:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018235:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018346:(l,h,w,y,T,E)=>{t.$b("MatMulNBits",l,{k:h,n:w,accuracyLevel:y,bits:T,blockSize:E})},1018473:(l,h,w,y,T,E)=>{t.$b("MultiHeadAttention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:T,doRotary:E})},1018632:(l,h)=>{t.$b("QuickGelu",l,{alpha:h})},1018696:(l,h,w,y,T)=>{t.$b("RotaryEmbedding",l,{interleaved:!!h,numHeads:w,rotaryEmbeddingDim:y,scale:T})},1018835:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1018937:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1019039:(l,h,w,y)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:h,quantizeAxis:w,blockSize:y})},1019160:l=>{t.Fd(l)},1019194:(l,h)=>t.Hd(Number(l),Number(h),t.Yc.Kd,t.Yc.errors)};function Cb(l,h,w){return _f(async()=>{await t.Dd(Number(l),Number(h),Number(w))})}function Mb(){return typeof wasmOffsetConverter<"u"}function zb(l,h,w,y){var T=he();try{return em(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function Ab(l,h,w){var y=he();try{return Yf(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function Rb(l){var h=he();try{jf(l)}catch(w){if(pe(h),w!==w+0)throw w;me(1,0)}}function Ob(l,h){var w=he();try{return Aa(l,h)}catch(y){if(pe(w),y!==y+0)throw y;me(1,0)}}function Bb(l,h,w){var y=he();try{Hf(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function Nb(l,h){var w=he();try{tm(l,h)}catch(y){if(pe(w),y!==y+0)throw y;me(1,0)}}function Db(l,h,w,y,T,E,R){var P=he();try{return Qf(l,h,w,y,T,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function Ub(l,h,w,y,T,E){var R=he();try{Kf(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function Pb(l,h,w,y){var T=he();try{Jf(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function Lb(l,h,w,y,T){var E=he();try{Xf(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function qb(l,h,w,y,T,E,R){var P=he();try{rm(l,h,w,y,T,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function Gb(l,h,w,y,T,E,R){var P=he();try{im(l,h,w,y,T,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function Wb(l,h,w,y,T,E,R,P){var Q=he();try{um(l,h,w,y,T,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function Vb(l,h,w,y,T){var E=he();try{return nm(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function Fb(l,h,w){var y=he();try{return lm(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function Hb(l,h,w,y,T,E,R,P){var Q=he();try{dm(l,h,w,y,T,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function jb(l,h,w,y,T,E,R,P,Q,ee,ce,we){var Te=he();try{am(l,h,w,y,T,E,R,P,Q,ee,ce,we)}catch(Ce){if(pe(Te),Ce!==Ce+0)throw Ce;me(1,0)}}function Kb(l,h,w,y,T,E){var R=he();try{return sm(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function Xb(l,h,w){var y=he();try{return cm(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;return me(1,0),0n}}function Yb(l,h,w,y,T,E,R,P,Q){var ee=he();try{Zf(l,h,w,y,T,E,R,P,Q)}catch(ce){if(pe(ee),ce!==ce+0)throw ce;me(1,0)}}function Zb(l){var h=he();try{return pm(l)}catch(w){if(pe(h),w!==w+0)throw w;me(1,0)}}function Qb(l,h){var w=he();try{return km(l,h)}catch(y){if(pe(w),y!==y+0)throw y;return me(1,0),0n}}function Jb(l){var h=he();try{return hm(l)}catch(w){if(pe(h),w!==w+0)throw w;return me(1,0),0n}}function e1(l,h,w,y){var T=he();try{return wm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function t1(l,h,w,y,T){var E=he();try{return bm(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function n1(l,h,w,y,T,E){var R=he();try{return $m(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function r1(l,h,w,y,T,E){var R=he();try{return xm(l,h,w,y,T,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function i1(l,h,w,y,T,E,R,P){var Q=he();try{return om(l,h,w,y,T,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function a1(l,h,w,y,T){var E=he();try{return vm(l,h,w,y,T)}catch(R){if(pe(E),R!==R+0)throw R;return me(1,0),0n}}function s1(l,h,w,y){var T=he();try{return Sm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function o1(l,h,w,y){var T=he();try{return Im(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function u1(l,h,w,y,T,E,R,P,Q,ee,ce,we){var Te=he();try{return Tm(l,h,w,y,T,E,R,P,Q,ee,ce,we)}catch(Ce){if(pe(Te),Ce!==Ce+0)throw Ce;me(1,0)}}function l1(l,h,w,y,T,E,R,P,Q,ee,ce){var we=he();try{ym(l,h,w,y,T,E,R,P,Q,ee,ce)}catch(Te){if(pe(we),Te!==Te+0)throw Te;me(1,0)}}function d1(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Ct,Oa){var f1=he();try{_m(l,h,w,y,T,E,R,P,Q,ee,ce,we,Te,Ce,Ct,Oa)}catch(Ba){if(pe(f1),Ba!==Ba+0)throw Ba;me(1,0)}}function c1(l,h,w){var y=he();try{return fm(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function p1(l,h,w){var y=he();try{return mm(l,h,w)}catch(T){if(pe(y),T!==T+0)throw T;me(1,0)}}function h1(l,h,w,y){var T=he();try{gm(l,h,w,y)}catch(E){if(pe(T),E!==E+0)throw E;me(1,0)}}function yr(){if(0<fe)Ie=yr;else if(i)_==null||_(t),A();else{for(var l=ve;0<l.length;)l.shift()(t);0<fe?Ie=yr:(t.calledRun=!0,C||(A(),_==null||_(t)))}}return i||(wt=await te(),yr()),t.PTR_SIZE=4,W?t:new Promise((l,h)=>{_=l,b=h})}var is,as,tg=X(()=>{var e,t;is=rs,as=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),as&&rs()}),Tr,kr,ss,Ve,os,Rn,us,ls,Er,ds,Cr,cs,Mr,ps,zr=X(()=>{vr(),Tr=typeof location>"u"?void 0:location.origin,kr=self.location.href>"file:"&&self.location.href<"file;",ss=()=>{{if(kr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Tr).href}return self.location.href}},Ve=ss(),os=()=>{if(Ve&&!Ve.startsWith("blob:"))return Ve.substring(0,Ve.lastIndexOf("/")+1)},Rn=(e,t)=>{try{let n=t??Ve;return(n?new URL(e,n):new URL(e)).origin===Tr}catch{return!1}},us=(e,t)=>{let n=t??Ve;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},ls=(e,t)=>`${t??"./"}${e}`,Er=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ds=async e=>(await import(e)).default,Cr=(eg(),sn(es)).default,cs=async()=>{if(!Ve)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Rn(Ve))return[void 0,Cr()];let e=await Er(Ve);return[e,Cr(e)]},Mr=(tg(),sn(ns)).default,ps=async(e,t,n,r)=>{let i=Mr&&!(e||t);if(i)if(Ve)i=Rn(Ve)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Mr];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??us(s,t),o=n&&a&&!Rn(a,t),u=o?await Er(a):a??ls(s,t);return[o?u:void 0,await ds(u)]}}}),Ar,On,dn,Rr,hs,fs,ms,Or,Ee,Rt=X(()=>{zr(),On=!1,dn=!1,Rr=!1,hs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ms=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Or=async e=>{if(On)return Promise.resolve();if(dn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Rr)throw new Error("previous call to 'initializeWebAssembly()' failed.");dn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ms())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!fs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=hs();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,o=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,c=e.wasmBinary,[p,f]=await ps(o,s,n>1,!!c||!!d),m=!1,g=[];if(t>0&&g.push(new Promise(_=>{setTimeout(()=>{m=!0,_()},t)})),g.push(new Promise((_,b)=>{let x={numThreads:n};if(c)x.wasmBinary=c,x.locateFile=$=>$;else if(d||s)x.locateFile=$=>d??s+$;else if(o&&o.indexOf("blob:")!==0)x.locateFile=$=>new URL($,o).href;else if(p){let $=os();$&&(x.locateFile=I=>$+I)}f(x).then($=>{dn=!1,On=!0,Ar=$,_(),p&&URL.revokeObjectURL(p)},$=>{dn=!1,Rr=!0,b($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ee=()=>{if(On&&Ar)return Ar;throw new Error("WebAssembly is not initialized yet.")}}),Ye,Bn,xe,Br=X(()=>{Rt(),Ye=(e,t)=>{let n=Ee(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Bn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Bn(s,a+".",n,r);else if(typeof s=="string"||typeof s=="number")r(a,s.toString());else if(typeof s=="boolean")r(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},xe=e=>{let t=Ee(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let s=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),gs,ng=X(()=>{Rt(),Br(),gs=e=>{let t=Ee(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Ye(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),n===0&&xe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Bn(e.extra,"",new WeakSet,(a,o)=>{let u=Ye(a,r),d=Ye(o,r);t._OrtAddRunConfigEntry(n,u,d)!==0&&xe(`Can't set a run config entry: ${a} - ${o}.`)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),s}}}),ys,_s,ws,Ot,bs,$s,rg=X(()=>{Rt(),Br(),ys=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},_s=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ws=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Ot=(e,t,n,r)=>{let i=Ye(t,r),s=Ye(n,r);Ee()._OrtAddSessionConfigEntry(e,i,s)!==0&&xe(`Can't set a session config entry: ${t} - ${n}.`)},bs=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Ot(e,"session.disable_quant_qdq","1",n),Ot(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&Ot(e,"deviceType",p,n)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Ot(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Ye(s,n),u=a.length,d=0,c=0;if(u>0){d=Ee()._malloc(u*Ee().PTR_SIZE),n.push(d),c=Ee()._malloc(u*Ee().PTR_SIZE),n.push(c);for(let p=0;p<u;p++)Ee().setValue(d+p*Ee().PTR_SIZE,a[p][0],"*"),Ee().setValue(c+p*Ee().PTR_SIZE,a[p][1],"*")}await Ee()._OrtAppendExecutionProvider(e,o,d,c,u)!==0&&xe(`Can't append execution provider: ${s}.`)}},$s=async e=>{let t=Ee(),n=0,r=[],i=e||{};ws(i);try{let s=ys(i.graphOptimizationLevel??"all"),a=_s(i.executionMode??"sequential"),o=typeof i.logId=="string"?Ye(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?Ye(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,u,d,c),n===0&&xe("Can't create session options."),i.executionProviders&&await bs(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Ot(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,f]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=Ye(p,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&xe(`Can't set a free dimension override: ${p} - ${f}.`)}return i.extra!==void 0&&Bn(i.extra,"",new WeakSet,(p,f)=>{Ot(n,p,f,r)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&xe("Can't release session options."),r.forEach(a=>t._free(a)),s}}}),Bt,pt,Nt,Nn,Dn,Nr,Dr,Ur,oe=X(()=>{Bt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},pt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Nt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return n>0?Math.ceil(r*n):void 0},Nn=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Dn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Nr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Dr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ur=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Pr,xs=X(()=>{vr(),Pr=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(s,a,d).set(u),a+=d}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),vs,Ss,Is,Ts,Lr,ks,ge,ht=X(()=>{oe(),vs=["V","I","W","E","F"],Ss=(e,t)=>{console.log(`[${vs[e]},${new Date().toISOString()}]${t}`)},Lr=(e,t)=>{Is=e,Ts=t},ks=(e,t)=>{let n=Dn(e),r=Dn(Is);n>=r&&Ss(n,typeof t=="function"?t():t)},ge=(...e)=>{Ts&&ks(...e)}}),Es,Qt,D,Un,Cs,Ms,zs,ue=X(()=>{Es=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Qt=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(n){if(r<2||i<2)return;let o=Es.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=n?3:1;o<=s;o++){let u=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let c=Math.max(u,d);if(u&&d)a[s-o]=Math.max(u,d);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class _r{static size(t){return _r.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),s=r-1;for(;s>=0;){if(t[s]%n===0){i[s]=t[s]/n;break}if(n%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,n/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return _r.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return _r.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let s=n;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,s)=>i+n[s]+n[s+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Un=class Mn{static adjustPoolAttributes(t,n,r,i,s,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<r.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=r[o]||a[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Mn.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,s,a,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Mn.computeShapeHelper(t,n,u,r,i,s,a,o),u}static computeConvOutputShape(t,n,r,i,s,a,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Mn.computeShapeHelper(!1,t,u,r,i,s,a,o),u}static computeShapeHelper(t,n,r,i,s,a,o,u){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(Mn.adjustPadAndReturnShape(n[d+2],i[d],s[d],a[d],o,d,d+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,s,a,o,u){let d=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return s[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/n+1)}},Cs=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Qt.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Ms=-34028234663852886e22,zs=34028234663852886e22}),qr,As=X(()=>{oe(),qr=(e,t)=>new(Nn(t))(e)}),Gr,Wr,Vr,Rs,Fr,Os,Hr,jr,Kr,Bs,Ns,ig=X(()=>{oe(),ht(),Gr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Wr=(e,t)=>{if(t==="int32")return e;let n=Gr.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,s=new(Nn(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Vr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Rs=1,Fr=()=>Rs++,Os=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Hr=(e,t)=>{let n=Gr.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},jr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Hr(this.dataType,this.tensorShape)}destroy(){ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Vr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Kr=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=Os.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Hr(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Wr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Vr(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Bs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Fr();return this.tensorTrackersById.set(e,new Kr(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),s=Fr(),a=new jr({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(s,new Kr(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,n,r,i,s,a){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,n)){ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:s});return new jr({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ns=(...e)=>new Bs(...e)}),cn,Ds,Us,ag=X(()=>{oe(),Rt(),As(),ig(),ht(),cn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ds=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,s)=>i===r[s]&&e[i]===t[i])},Us=class{constructor(e){this.tensorManager=Ns(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Lr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Ds(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let s=cn.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,r,i)}async createTemporaryTensor(e,t,n){ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=cn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ee().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return qr(n,t)}}registerMLTensor(e,t,n,r){let i=cn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let s=this.tensorManager.registerTensor(e,t,i,r);return ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,n,r,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=s.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let p=Wr(new Uint8Array(d),"int64");c=new Int32Array(p.buffer),i.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ge("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=cn.get(Bt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Xr=X(()=>{}),Yr,Pn,Ln,Ps,Ls,Zr,Qr,qs,Gs,sg=X(()=>{ht(),Xr(),Yr=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Pn=[],Ln=e=>Math.ceil(Number(e)/16)*16,Ps=e=>{for(let t=0;t<Pn.length;t++){let n=Pn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ls=1,Zr=()=>Ls++,Qr=async(e,t,n,r)=>{let i=Ln(n),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{s.destroy()}},qs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Yr)Pn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,s=Ln(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ln(n.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Zr();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ps(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:Zr(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Qr(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Yr.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Gs=(...e)=>new qs(...e)}),Ws,$e,ze=X(()=>{Ws=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$e=e=>new Ws(e)}),Jt,qn,Re,De,ie,Me,Jr,en,$t,re,pn,q,ne,Vs,ei,Fs,Hs,le=X(()=>{oe(),ue(),Jt=64,qn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Re=(e,t=1)=>{let n=qn(e,t);return typeof n=="string"?n:n[0]},De=(e,t=1)=>{let n=qn(e,t);return typeof n=="string"?n:n[1]},ie=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},Me=e=>e%4===0?4:e%2===0?2:1,Jr=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,en=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,$t=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,pn=(e,t,n,r,i)=>{let s=typeof n=="number",a=s?n:n.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=qn(t,i),c=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],f={indices:u,value:c,storage:p,tensor:t},m=W=>typeof W=="string"?W:`${W}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=s?"uniforms.":"",b=`${_}${e}_shape`,x=`${_}${e}_strides`,$="";for(let W=0;W<a-1;W++)$+=`
    let dim${W} = current / ${re(x,W,a)};
    let rest${W} = current % ${re(x,W,a)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;$+=`indices[${a-1}] = current;`;let I=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=W=>(g.offsetToIndices=!0,a<2?W:`o2i_${e}(${W})`),k=[];if(a>=2)for(let W=a-1;W>=0;W--)k.push(`${re(x,W,a)} * (indices[${W}])`);let C=a<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,M=W=>(g.indicesToOffset=!0,a<2?W:`i2o_${e}(${W})`),v=(...W)=>a===0?"0u":`${f.indices}(${W.map(m).join(",")})`,O=(W,Y)=>a<2?`${W}`:`${re(W,Y,a)}`,N=(W,Y,A)=>a<2?`${W}=${A};`:`${re(W,Y,a)}=${A};`,F={},L=(W,Y)=>{g.broadcastedIndicesToOffset=!0;let A=`${Y.name}broadcastedIndicesTo${e}Offset`;if(A in F)return`${A}(${W})`;let B=[];for(let j=a-1;j>=0;j--){let te=Y.indicesGet("outputIndices",j+Y.rank-a);B.push(`${O(x,j)} * (${te} % ${O(b,j)})`)}return F[A]=`fn ${A}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${A}(${W})`},V=(W,Y)=>(()=>{if(f.storage===f.value)return`${e}[${W}]=${Y};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${Y}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),z=W=>(()=>{if(f.storage===f.value)return`${e}[${W}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${W}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${W}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),G=a<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${c} {
    return ${z(`i2o_${e}(indices)`)};
  }`,H=a<2?"":(()=>{let W=o.map(A=>`d${A}: u32`).join(", "),Y=o.map(A=>`d${A}`).join(", ");return`
  fn get_${e}(${W}) -> ${c} {
    return get_${e}ByIndices(${v(Y)});
  }`})(),K=(...W)=>{if(W.length!==a)throw new Error(`indices length must be ${a}`);let Y=W.map(m).join(",");return a===0?z("0u"):a===1?z(Y[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${Y})`)},ae=W=>a<2?z(W):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${W})`),U=a<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${c}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,J=a<2?"":(()=>{let W=o.map(A=>`d${A}: u32`).join(", "),Y=o.map(A=>`d${A}`).join(", ");return`
  fn set_${e}(${W}, value: ${c}) {
    set_${e}ByIndices(${v(Y)}, value);
  }`})();return{impl:()=>{let W=[],Y=!1;return g.offsetToIndices&&(W.push(I),Y=!0),g.indicesToOffset&&(W.push(C),Y=!0),g.broadcastedIndicesToOffset&&(Object.values(F).forEach(A=>W.push(A)),Y=!0),g.set&&(W.push(J),Y=!0),g.setByIndices&&(W.push(U),Y=!0),g.get&&(W.push(H),Y=!0),g.getByIndices&&(W.push(G),Y=!0),!s&&Y&&W.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${x} = ${f.indices}(${D.computeStrides(n).join(",")});`),W.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:M,broadcastedIndicesToOffset:L,indices:v,indicesGet:O,indicesSet:N,set:(...W)=>{if(W.length!==a+1)throw new Error(`indices length must be ${a}`);let Y=W[a];if(typeof Y!="string")throw new Error("value must be string");let A=W.slice(0,a).map(m).join(",");return a===0?V("0u",Y):a===1?V(A[0],Y):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${A}, ${Y})`)},setByOffset:V,setByIndices:(W,Y)=>a<2?V(W,Y):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${Y});`),get:K,getByOffset:z,getByIndices:ae,usage:r,name:e,strides:x,shape:b,rank:a}},q=(e,t,n,r=1)=>pn(e,t,n,"input",r),ne=(e,t,n,r=1)=>pn(e,t,n,"output",r),Vs=(e,t,n)=>pn(e,t,n,"atomicOutput",1),ei=(e,t,n,r=1)=>pn(e,t,n,"internal",r),Fs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Jt){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Hs=(e,t)=>new Fs(e,t)}),js,ti,Ks,Xs,Ys,Zs,Fe,Qs,Js,xt=X(()=>{oe(),ue(),ze(),le(),js=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ti=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ks=(e,t)=>D.sortBasedOnPerm(e,ti(e.length,t)),Xs=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Ys=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Zs=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Fe=(e,t)=>{let n=e.dataType,r=e.dims.length,i=ti(r,t),s=Ks(e.dims,i),a=e.dims,o=s,u=r<2||Zs(i,e.dims),d;if(u)return d=g=>{let _=q("input",n,a,4),b=ne("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:d};let{newShape:c,newPerm:p}=Ys(e.dims,i),f=D.areEqual(p,[2,3,1]),m=D.areEqual(p,[3,1,2]);if(c.length===2||f||m){a=f?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let g=16;return d=_=>{let b=q("a",n,a.length),x=ne("output",n,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${g+1}>, ${g}>;
  ${_.mainStart([g,g,1])}
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
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:_},...ie(a,o)]}},getShaderSource:d}}return d=g=>{let _=q("a",n,a.length),b=ne("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Xs(i,r,_,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ie(a,o)]}},getShaderSource:d}},Qs=(e,t)=>{js(e.inputs,t.perm),e.compute(Fe(e.inputs[0],t.perm))},Js=e=>$e({perm:e.perm})}),eo,to,no,ro,io,ao,so,oo,uo,lo,Ze,co,po,ho,fo,mo,go,yo,_o,wo,bo,og=X(()=>{oe(),ue(),le(),ri(),xt(),eo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},to={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},no={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ro={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},io=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},ao=(e,t)=>{let n=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&n.push(e[s]);let i=t.map(s=>e[s]);return[n,i]},so=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let s=0;s<n;s++)t.indexOf(s)===-1?r.push(e[i++]):r.push(1);return r},oo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},uo=(e,t)=>{let n=[];if(!oo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},lo=(e,t,n,r,i,s,a)=>{let o=n[0].dims,u=D.size(s),d=D.size(a),c=q("_A",n[0].dataType,o),p=ne("output",i,s),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,g=_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(c,p)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${no[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${eo[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${to[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${ro[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ze=(e,t,n,r)=>{let i=e.inputs.length===1?n:ni(e.inputs,n),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,g)=>g));let a=D.normalizeAxes(s,e.inputs[0].dims.length),o=a,u=e.inputs[0],d=uo(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Fe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=io(o.length,u.dims.length));let[c,p]=ao(u.dims,o),f=c;i.keepDims&&(f=so(c,a)),e.compute(lo(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,p),{inputs:[u]})},co=(e,t)=>{Ze(e,"ReduceMeanShared",t,"mean")},po=(e,t)=>{Ze(e,"ReduceL1Shared",t,"l1")},ho=(e,t)=>{Ze(e,"ReduceL2Shared",t,"l2")},fo=(e,t)=>{Ze(e,"ReduceLogSumExpShared",t,"logSumExp")},mo=(e,t)=>{Ze(e,"ReduceMaxShared",t,"max")},go=(e,t)=>{Ze(e,"ReduceMinShared",t,"min")},yo=(e,t)=>{Ze(e,"ReduceProdShared",t,"prod")},_o=(e,t)=>{Ze(e,"ReduceSumShared",t,"sum")},wo=(e,t)=>{Ze(e,"ReduceSumSquareShared",t,"sumSquare")},bo=(e,t)=>{Ze(e,"ReduceLogSumShared",t,"logSum")}}),Qe,$o,Gn,ni,Je,xo,vo,So,Io,To,ko,Eo,Co,Mo,zo,et,Ao,Ro,Oo,Bo,No,Do,Uo,Po,Lo,qo,ri=X(()=>{oe(),ue(),ze(),le(),og(),Qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},$o=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Gn=(e,t,n,r,i,s,a=!1,o=!1)=>{let u=[],d=n[0].dims,c=d.length,p=D.normalizeAxes(i,c),f=!o&&p.length===0;d.forEach((_,b)=>{f||p.indexOf(b)>=0?a&&u.push(1):u.push(_)});let m=u.length,g=D.size(u);return{name:e,shaderCache:t,getShaderSource:_=>{let b=[],x=q("_A",n[0].dataType,c),$=ne("output",s,m),I=r(x,$,p),S=I[2];for(let k=0,C=0;k<c;k++)f||p.indexOf(k)>=0?(a&&C++,S=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${I[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${x.indicesSet("input_indices",k,`j${k}`)}
                  ${S}
                }`):(b.push(`${x.indicesSet("input_indices",k,$.indicesGet("output_indices",C))};`),C++);return`

        ${_.registerUniform("output_size","u32").declareVariables(x,$)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${S}
          ${I[3]}
          ${I.length===4?$.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ie(d,u)]})}},ni=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),$e({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Je=(e,t,n,r)=>{let i=e.inputs,s=i.length===1?n:ni(i,n);e.compute(Gn(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?$o:r,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},xo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},vo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},So=(e,t)=>{Qe(e.inputs),Je(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Io=(e,t)=>{Qe(e.inputs),Je(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},To=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMax",t,(n,r,i)=>{let s=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(n.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},ko=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMean",t,(n,r,i)=>{let s=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},Eo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMin",t,(n,r,i)=>{let s=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Co=(e,t)=>{Qe(e.inputs),Je(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Mo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},zo=(e,t)=>{Qe(e.inputs),Je(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},et=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:i*=e[s];return i<32&&r>1024},Ao=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ko(e,t):co(e,t)},Ro=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vo(e,t):po(e,t)},Oo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?So(e,t):ho(e,t)},Bo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Io(e,t):fo(e,t)},No=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?To(e,t):mo(e,t)},Do=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eo(e,t):go(e,t)},Uo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Co(e,t):yo(e,t)},Po=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mo(e,t):_o(e,t)},Lo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zo(e,t):wo(e,t)},qo=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xo(e,t):bo(e,t)}}),ii,Go,Wo,ai,ug=X(()=>{oe(),ze(),ri(),ii=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Go=(e,t)=>{ii(e.inputs);let n=(r,i,s)=>{let a=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Gn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Wo=(e,t)=>{ii(e.inputs);let n=(r,i,s)=>{let a=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Gn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ai=e=>$e(e)}),Vo,Wn,Fo,Ho,jo,hn,Ko,Xo,si=X(()=>{oe(),ue(),Xr(),le(),Vo=(e,t)=>{let n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],d=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,f=p,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=d;if(p!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(a){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=a.dims[3])}let b=g+_,x=-1,$=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:x,inputHiddenSize:c,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Wn=(e,t,n)=>t&&e?`
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
    `,Fo=(e,t,n,r,i,s,a,o)=>{let u=Me(a?1:s),d=64,c=s/u;c<d&&(d=32);let p=Math.ceil(s/u/d),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:p}],m=Re(e.dataType,u),g=De(1,u),_=["type"];a&&_.push("type"),o&&_.push("type");let b=x=>{let $=ne("x",e.dataType,e.dims,u),I=[$],S=a?q("seq_lens",a.dataType,a.dims):void 0;S&&I.push(S);let k=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;k&&I.push(k);let C=De(e.dataType),M=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(M).declareVariables(...I)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Wn(S,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${g}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:_},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Ho=(e,t,n,r,i,s,a,o,u)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&r,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=p?[s.batchSize,f,d,s.headSize]:void 0,g=s.nReps?s.nReps:1,_=s.scale===0?1/Math.sqrt(s.headSize):s.scale,b=Me(s.headSize),x=s.headSize/b,$=12,I={x:Math.ceil(d/$),y:Math.ceil(s.sequenceLength/$),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:_},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:g}],k=p&&r&&D.size(r.dims)>0,C=["type","type"];k&&C.push("type"),i&&C.push("type"),o&&C.push("type"),u&&C.push("type");let M=[{dims:c,dataType:t.dataType,gpuDataType:0}];p&&M.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=O=>{let N=q("q",t.dataType,t.dims,b),F=q("key",n.dataType,n.dims,b),L=[N,F];if(k){let U=q("past_key",r.dataType,r.dims,b);L.push(U)}i&&L.push(q("attention_bias",i.dataType,i.dims));let V=o?q("seq_lens",o.dataType,o.dims):void 0;V&&L.push(V);let z=u?q("total_sequence_length_input",u.dataType,u.dims):void 0;z&&L.push(z);let G=ne("output",t.dataType,c),H=[G];p&&H.push(ne("present_key",t.dataType,m,b));let K=De(1,b),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${N.type.storage}, ${$*$}>;
  ${O.registerUniforms(ae).declareVariables(...L,...H)}
  ${O.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Wn(V,z,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${K}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
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
        output[outputIdx] = ${G.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:M,dispatchGroup:I,programUniforms:S}),getShaderSource:v}},jo=(e,t,n,r,i,s,a=void 0,o=void 0)=>{let u=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,p=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,c],_=12,b={x:Math.ceil(i.vHeadSize/_),y:Math.ceil(i.sequenceLength/_),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],$=p&&r&&D.size(r.dims)>0,I=["type","type"];$&&I.push("type"),a&&I.push("type"),o&&I.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];p&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=C=>{let M=q("probs",t.dataType,t.dims),v=q("v",n.dataType,n.dims),O=[M,v];$&&O.push(q("past_value",r.dataType,r.dims));let N=a?q("seq_lens",a.dataType,a.dims):void 0;a&&O.push(N);let F=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(F);let L=[ne("output",t.dataType,g)];p&&L.push(ne("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${M.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${M.type.value}, ${_*_}>;
  ${C.registerUniforms(V).declareVariables(...O,...L)}
  ${C.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Wn(N,F,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${M.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:x}),getShaderSource:k}},hn=(e,t,n,r,i,s,a,o,u,d,c=void 0,p=void 0)=>{let f=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),m=f>1?a:void 0,g=f>1?o:void 0,_=f>1?d.pastSequenceLength:0,b=_+d.kvSequenceLength,x=u&&D.size(u.dims)>0?u:void 0,$=[t,n];m&&D.size(m.dims)>0&&$.push(m),x&&$.push(x),c&&$.push(c),p&&$.push(p);let I=e.compute(Ho(f,t,n,m,x,d,_,c,p),{inputs:$,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Fo(I,d.batchSize,d.numHeads,_,d.sequenceLength,b,c,p),{inputs:c&&p?[I,c,p]:[I],outputs:[]});let S=[I,r];g&&D.size(g.dims)>0&&S.push(g),c&&S.push(c),p&&S.push(p),e.compute(jo(f,I,r,g,d,_,c,p),{inputs:S,outputs:f>1?[0,2]:[0]})},Ko=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=p=>{let f=ne("output_q",u[0].dataType,n),m=ne("output_k",u[0].dataType,n),g=ne("output_v",u[0].dataType,n),_=q("input",u[0].dataType,u[0].dims),b=q("weight",u[1].dataType,u[1].dims),x=q("bias",u[2].dataType,u[2].dims),$=_.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${$}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${$}, ${a*a}>;
  var<workgroup> tileWeightK: array<${$}, ${a*a}>;
  var<workgroup> tileWeightV: array<${$}, ${a*a}>;
  ${p.registerUniforms(I).declareVariables(_,b,x,f,m,g)}
  ${p.mainStart([a,a,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Xo=(e,t)=>{let n=Vo(e.inputs,t),[r,i,s]=Ko(e,n);return hn(e,r,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Yo,Zo,Qo,Jo,lg=X(()=>{He(),oe(),ue(),ze(),le(),Yo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,s)=>{let a=i.length;if(a!==r.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Zo=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,s=e[0].dims,a=r?Me(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,u=D.size(s)/a,d=r,c=d?s.length:s,p=q("x",e[0].dataType,e[0].dims,a),f=q("scale",e[1].dataType,e[1].dims,o),m=q("bias",e[2].dataType,e[2].dims,o),g=q("inputMean",e[3].dataType,e[3].dims,o),_=q("inputVar",e[4].dataType,e[4].dims,o),b=ne("y",e[0].dataType,c,a),x=()=>{let I="";if(r)I=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")I=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<f.rank;S++)I+=`cIndices[${S}] = outputIndices[${S}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},$=I=>`
  const epsilon = ${n};
  ${I.registerUniform("outputSize","u32").declareVariables(p,f,m,g,_,b)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${a}`)};
    ${x()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(s)]:[{type:12,data:u}]})}},Qo=e=>$e(e),Jo=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Qo({...t,outputCount:r});if(ke.webgpu.validateInputContent&&Yo(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Zo(n,i))}}),eu,tu,nu,dg=X(()=>{ue(),le(),eu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tu=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,s=q("input",i,t,4),a=q("bias",i,[n],4),o=q("residual",i,t,4),u=ne("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(s,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},nu=e=>{eu(e.inputs),e.compute(tu(e.inputs))}}),ru,be,iu,au,su,ou,uu,lu,du,cu,pu,hu,fu,mu,gu,yu,fn,_u,Vn,wu,bu,$u,xu,vu,Su,Iu,Tu,ku,Eu,Cu,Mu,zu,Au,Ru,Ou,oi,Bu,ui,li,Nu,Du,Uu,Pu,Lu,qu,di=X(()=>{oe(),ue(),ze(),le(),ru=(e,t,n,r,i,s,a)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=q("inputData",n,[o],4),c=ne("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},be=(e,t,n,r,i,s=e.dataType,a,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>ru(d,D.size(e.dims),e.dataType,s,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(D.size(d[0].dims)/64/4)},programUniforms:u})}},iu=e=>{e.compute(be(e.inputs[0],"Abs","abs"))},au=e=>{e.compute(be(e.inputs[0],"Acos","acos"))},su=e=>{e.compute(be(e.inputs[0],"Acosh","acosh"))},ou=e=>{e.compute(be(e.inputs[0],"Asin","asin"))},uu=e=>{e.compute(be(e.inputs[0],"Asinh","asinh"))},lu=e=>{e.compute(be(e.inputs[0],"Atan","atan"))},du=e=>{e.compute(be(e.inputs[0],"Atanh","atanh"))},cu=e=>$e(e),pu=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(be(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},hu=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return $e({min:t,max:n})},fu=(e,t)=>{let n=t||hu(e.inputs),r=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},mu=e=>{e.compute(be(e.inputs[0],"Ceil","ceil"))},gu=e=>{e.compute(be(e.inputs[0],"Cos","cos"))},yu=e=>{e.compute(be(e.inputs[0],"Cosh","cosh"))},fn=e=>$e(e),_u=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Vn=(e="f32")=>`
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
}`,wu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Vn(t)))},bu=e=>{e.compute(be(e.inputs[0],"Exp","exp"))},$u=e=>{e.compute(be(e.inputs[0],"Floor","floor"))},xu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Vn(t)))},vu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Su=e=>{e.compute(be(e.inputs[0],"Not",t=>`!${t}`))},Iu=e=>{e.compute(be(e.inputs[0],"Neg",t=>`-${t}`))},Tu=e=>{e.compute(be(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ku=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Eu=e=>{e.compute(be(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Cu=e=>$e(e),Mu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},zu=e=>{e.compute(be(e.inputs[0],"Sin","sin"))},Au=e=>{e.compute(be(e.inputs[0],"Sinh","sinh"))},Ru=e=>{e.compute(be(e.inputs[0],"Sqrt","sqrt"))},Ou=e=>{e.compute(be(e.inputs[0],"Tan","tan"))},oi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Bu=e=>{e.compute(be(e.inputs[0],"Tanh",oi))},ui=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${oi("v")};
}
`,li=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Nu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"FastGelu",li,ui(t),void 0,e.inputs[0].dataType))},Du=(e,t)=>{let n=De(e.inputs[0].dataType);return e.compute(be(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Uu=e=>{e.compute(be(e.inputs[0],"Log","log"))},Pu=(e,t)=>`
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
`,Lu=e=>`quick_gelu_impl(${e})`,qu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"QuickGelu",Lu,Pu(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Gu,Wu,Vu,cg=X(()=>{ue(),le(),di(),Gu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Wu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=q("input",e[0].dataType,e[0].dims,4),r=q("bias",e[0].dataType,[e[0].dims[2]],4),i=ne("output",e[0].dataType,t,4),s=D.size(t)/4,a=Re(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Vn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Vu=e=>{Gu(e.inputs),e.compute(Wu(e.inputs))}}),Fu,Hu,tt,ju,Ku,Xu,Yu,Zu,Qu,Ju,el,tl,nl,pg=X(()=>{oe(),ue(),le(),Fu=(e,t,n,r,i,s,a,o,u,d,c,p)=>{let f,m;typeof o=="string"?f=m=($,I)=>`${o}((${$}),(${I}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=ne("outputData",c,r.length,4),_=q("aData",u,t.length,4),b=q("bData",d,n.length,4),x;if(i)if(s){let $=D.size(t)===1,I=D.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;$||I?x=g.setByOffset("global_idx",m($?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),I?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):x=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(a||S?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||k?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=g.setByOffset("global_idx",m(_.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(I,S,k="")=>{let C=`aData[indexA${S}][componentA${S}]`,M=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${I}[${S}] = ${k}(${f(C,M)});
          `};c===9?x=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(_,b,g)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Hu=(e,t,n,r,i,s,a=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),d=!D.areEqual(o,u),c=o,p=D.size(o),f=!1,m=!1,g=[d];if(d){let _=Qt.calcShape(o,u,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");c=_.slice(),p=D.size(c);let b=D.size(o)===1,x=D.size(u)===1,$=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push(x),g.push($),g.push(I);let S=1;for(let k=1;k<c.length;k++){let C=o[o.length-k],M=u[u.length-k];if(C===M)S*=C;else break}S%4===0?(m=!0,f=!0):(b||x||$||I)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>Fu(_,o,u,c,f,d,m,i,n.dataType,r.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(c)/4)},...ie(o,u,c)]})}},tt=(e,t,n,r,i,s)=>{e.compute(Hu(t,i??"",e.inputs[0],e.inputs[1],n,r,s))},ju=e=>{tt(e,"Add",(t,n)=>`${t}+${n}`)},Ku=e=>{tt(e,"Div",(t,n)=>`${t}/${n}`)},Xu=e=>{tt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Yu=e=>{tt(e,"Mul",(t,n)=>`${t}*${n}`)},Zu=e=>{let t=q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;tt(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Qu=e=>{tt(e,"Sub",(t,n)=>`${t}-${n}`)},Ju=e=>{tt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},el=e=>{tt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},tl=e=>{tt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},nl=e=>{tt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),rl,il,al,sl,ol,ul,hg=X(()=>{oe(),ue(),ze(),le(),rl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,s=r.dims.length;e.forEach((a,o)=>{if(o!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((u,d)=>{if(d!==t&&u!==r.dims[d])throw new Error("non concat dimensions must match")})}})},il=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,al=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(s):i===0?r.push(`if (inputIndex == ${i}u) { ${s} }`):i===n-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${i}) { ${s} }`)}return r.join(`
`)},sl=(e,t,n,r)=>{let i=D.size(n),s=new Array(e.length),a=new Array(e.length),o=0,u=[],d=[],c=[{type:12,data:i}];for(let _=0;_<e.length;++_)o+=e[_].dims[t],s[_]=o,d.push(e[_].dims.length),a[_]=q(`input${_}`,r,d[_]),u.push("rank"),c.push({type:12,data:s[_]});for(let _=0;_<e.length;++_)c.push(...ie(e[_].dims));c.push(...ie(n));let p=ne("output",r,n.length),f=p.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),g=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)_.registerUniform(`sizeInConcatAxis${b}`,"u32");return _.declareVariables(...a,p)})()}

  ${il(s.length,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${al(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:g}},ol=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);rl(n,i);let s=r.slice();s[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(o=>D.size(o.dims)>0);e.compute(sl(a,i,s,n[0].dataType),{inputs:a})},ul=e=>$e({axis:e.axis})}),Dt,Ut,Pt,ci,Lt=X(()=>{oe(),ue(),Dt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ut=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Pt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ci=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Ms,zs];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ne,ll,pi=X(()=>{Ne=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ll=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),dl,fg=X(()=>{dl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),mn,hi,fi=X(()=>{oe(),ue(),le(),Lt(),mn=(e,t,n,r,i)=>{let s=r-n;return`
      ${Array.from({length:n}).map((a,o)=>`
      if (${re(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,re(i,o+s,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},hi=(e,t,n,r,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a[a.length-2],d=o[o.length-1],c=a[a.length-1],p=Me(d),f=Me(c),m=Me(u),g=D.size(n)/p/m,_=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),x=[D.size(b),u,d],$=[{type:12,data:g},{type:12,data:u},{type:12,data:d},{type:12,data:c}];Ut(t,$),$.push(...ie(b,a,o)),_&&$.push(...ie(e[2].dims)),$.push(...ie(x));let I=S=>{let k=ei("batch_dims",e[0].dataType,b.length),C=q("a",e[0].dataType,a.length,f),M=q("b",e[1].dataType,o.length,p),v=ne("output",e[0].dataType,x.length,p),O=Re(v.type.tensor),N=Dt(t,v.type.value,O),F=[C,M],L="";if(_){let G=i?p:1;F.push(q("bias",e[2].dataType,e[2].dims.length,G)),L=`${i?`value += bias[col / ${G}];`:`value += ${v.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Pt(t,V);let z=()=>{let G=`var a_data: ${C.type.value};`;for(let H=0;H<f;H++)G+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${p}];`;for(let H=0;H<m;H++){G+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${f}];`;for(let K=0;K<f;K++)G+=`
            values[${H}] = fma(${M.type.value}(a_data${f===1?"":`[${K}]`}), b_data${K}, values[${H}]);
`}return G};return`
  ${S.registerUniforms(V).registerInternalVariables(k).declareVariables(...F,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${mn("a_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${M.type.indices};
    ${mn("b_indices",M,M.rank-2,k.rank,"batch_indices")}
    ${M.indicesSet("b_indices",M.rank-2,0)}
    ${M.indicesSet("b_indices",M.rank-1,0)}
    let b_offset = ${M.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${z()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${L}
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${f};${m};${i}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:I}}}),cl,pl,mi,gi,hl,yi,fl,Fn,_i=X(()=>{oe(),ue(),le(),Lt(),fi(),pi(),cl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,pl=(e,t)=>e?`
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
        }`,mi=(e,t,n="f32",r,i=!1,s=32,a=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],c=i?u:s,p=i?s:u,f=c/t[0],m=s/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${c/f}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
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
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${cl(i,r)}
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

          ${pl(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},gi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,hl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",yi=(e,t,n="f32",r,i=!1,s=32,a=!1,o=32,u=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],p=i?d:s,f=i?s:d;if(!(f%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=p/t[0],_=s/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${gi(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${_};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${gi(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
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
      ${hl(i)}
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
  var<workgroup> mm_Asub : array<array<${n}, ${p}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${b}
  }
`},fl=(e,t,n,r,i=!1)=>{let[s,a,o,u]=r,d=Re(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ne(e,d)} {
      var value = ${Ne(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${mn("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ne(e,d)} {
      var value = ${Ne(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${mn("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ne(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ne(e,d)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Fn=(e,t,n,r,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),d=o.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),p=D.size(c),f=a[a.length-2],m=a[a.length-1],g=o[o.length-1],_=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],x=[8,8,1],$=[Math.ceil(g/x[0]/b[0]),Math.ceil(f/x[1]/b[1]),Math.ceil(p/x[2]/b[2])],I=_?4:1,S=[...u,f,m/I],k=S.length,C=[...d,m,g/I],M=C.length,v=[p,f,g/I],O=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];Ut(t,O),O.push(...ie(c,S,C));let N=["rank","rank"],F=e.length>2;F&&(O.push(...ie(e[2].dims)),N.push("rank")),O.push(...ie(v));let L=V=>{let z=c.length,G=ei("batchDims",e[0].dataType,z,1),H=Re(e[0].dataType),K=q("a",e[0].dataType,k,I),ae=q("b",e[1].dataType,M,I),U=ne("result",e[0].dataType,v.length,I),J=[K,ae];if(F){let j=i?I:1;J.push(q("bias",e[2].dataType,e[2].dims.length,j))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Pt(t,W);let Y=Re(U.type.tensor),A=Dt(t,U.type.value,Y),B=fl(I,F,A,[G,K,ae,U],i);return`
  ${V.registerUniforms(W).registerInternalVariables(G).declareVariables(...J,U)}
  ${B}
  ${_?mi(b,x,H,G):yi(b,x,H,G)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${_};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:O}),getShaderSource:L}}}),ml,gl,mg=X(()=>{oe(),ht(),le(),Lt(),pi(),fg(),_i(),ml=(e,t,n,r,i=!1,s,a=4,o=4,u=4,d="f32")=>{let c=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",_=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=e?"row":"col",x=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ne(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${_}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,I=e?t&&r?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ne(a,d)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ne(a,d)}(0.0);`,S=e?r&&n?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ne(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ne(o,d)}(0.0);`,k=Ne(u,d),C=Ne(e?a:o,d),M=Ne(e?o:a,d),v=Dt(s,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?I:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?S:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${ll(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},gl=(e,t,n,r,i,s,a,o,u)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],p=n[0],f=d?n[2]:n[3],m=d?n[1]:n[2],g=d?n[3]:n[1],_=d&&(c%4===0||c%3===0)&&g%4===0,b=d?g:f*m,x=d?f*m:g,$=[8,8,1],I=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/$[0]/I[0]),Math.ceil(x/$[1]/I[1]),Math.ceil(p/$[2]/I[2])];ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let k=_?d&&c%4!==0?3:4:1,C=$[1]*I[1],M=$[0]*I[0],v=Math.max($[0]*k,$[1]),O=r%C===0,N=i%M===0,F=s%v===0,L=_?[k,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ut(t,V),V.push(...ie(e[0].dims,e[1].dims));let z=["rank","rank"];a&&(V.push(...ie(e[2].dims)),z.push("rank")),V.push(...ie(n));let G=H=>{let K=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Pt(t,K);let ae=_?4:1,U=Re(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${U}>`:U}) {
        result[flatIndex] = ${_?`vec4<${U}>`:U}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${U}>`:U}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,W=q("x",e[0].dataType,e[0].dims.length,k===3?1:k),Y=q("w",e[1].dataType,e[1].dims.length,ae),A=[W,Y],B=ne("result",e[0].dataType,n.length,ae);if(a){let j=q("bias",e[2].dataType,e[2].dims.length,ae);A.push(j),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${U}>`:U} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${dl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(K).declareVariables(...A,B)}
        ${J}
        ${ml(d,O,N,F,a,t,L[0],L[1],L[2],U)}
        ${_?mi(I,$,U,void 0,!d,v):yi(I,$,U,void 0,!d,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${_};${O};${N};${F};${C};${M};${v}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:V}),getShaderSource:G}}}),yl,wi,gn,_l,bi,wl,bl,$l,gg=X(()=>{oe(),ht(),ue(),le(),Lt(),pi(),yl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},wi=e=>typeof e=="number"?[e,e,e]:e,gn=(e,t)=>t<=1?e:e+(e-1)*(t-1),_l=(e,t,n,r=1)=>{let i=gn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},bi=(e,t,n,r,i)=>{i==null&&(i=_l(e,t[0],r[0]));let s=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return s},wl=(e,t,n,r,i,s,a,o,u,d)=>{let c,p,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=bi([t,n,r,1],[o,u,d],1,[i,s,a],e);p=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((_,b,x)=>_===x[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=bi([t,n,r,1],[o,u,d],1,[i,s,a],e[0]);p=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),f=Math.ceil(n/s),m=Math.ceil(r/a);let g=(p-1)*i+o-t,_=(f-1)*s+u-n,b=(m-1)*a+d-r,x=Math.floor(g/2),$=g-x,I=Math.floor(_/2),S=_-I,k=Math.floor(b/2),C=b-k;c={top:I,bottom:S,left:k,right:C,front:x,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:p,outHeight:f,outWidth:m}},bl=(e,t,n,r,i,s=!1,a="channelsLast")=>{let o,u,d,c,p;if(a==="channelsLast")[o,u,d,c,p]=e;else if(a==="channelsFirst")[o,p,u,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,,m,g,_]=t,[b,x,$]=wi(n),[I,S,k]=wi(r),C=gn(m,I),M=gn(g,S),v=gn(_,k),{padInfo:O,outDepth:N,outHeight:F,outWidth:L}=wl(i,u,d,c,b,x,$,C,M,v),V=s?f*p:f,z=[0,0,0,0,0];return a==="channelsFirst"?z=[o,V,N,F,L]:a==="channelsLast"&&(z=[o,N,F,L,V]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:d,inWidth:c,inChannels:p,outDepth:N,outHeight:F,outWidth:L,outChannels:V,padInfo:O,strideDepth:b,strideHeight:x,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:_,effectiveFilterDepth:C,effectiveFilterHeight:M,effectiveFilterWidth:v,dilationDepth:I,dilationHeight:S,dilationWidth:k,inShape:e,outShape:z,filterShape:t}},$l=(e,t,n,r,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,x)=>x)},d=[Math.ceil(yl(u.x.map(b=>n[b]))/o[0]),1,1];ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,p=D.size(n),f=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ut(t,f),f.push(...ie(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...ie(e[2].dims)),m.push("rank")),f.push(...ie(n));let _=b=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Pt(t,x);let $=1,I=Re(e[0].dataType),S=q("x",e[0].dataType,e[0].dims.length,c),k=q("W",e[1].dataType,e[1].dims.length,$),C=[S,k],M=ne("result",e[0].dataType,n.length,$),v="";if(g){let F=q("bias",e[2].dataType,e[2].dims.length,$);C.push(F),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${a?re("coords",4,5):re("coords",1,5)}];
        }`}let O=Ne(c,I),N=Dt(t,O,I);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${b.registerUniforms(x).declareVariables(...C,M)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,S.rank)};
              let d2 = ${a?re("coords",S.rank-1,S.rank):re("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${a?re("coords",1,S.rank):re("coords",2,S.rank)},
              ${a?re("coords",2,S.rank):re("coords",3,S.rank)},
              ${a?re("coords",3,S.rank):re("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?re("uniforms.x_shape",1,S.rank):re("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${a?re("uniforms.x_shape",2,S.rank):re("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${a?re("uniforms.x_shape",3,S.rank):re("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${a?re("uniforms.x_shape",4,S.rank):re("uniforms.x_shape",1,S.rank)};
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
              ${g?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:_}}}),xl,vl,yg=X(()=>{oe(),ue(),le(),Lt(),xl=(e,t,n,r)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?n[3]:n[1],c=d/t.group,p=u&&c>=4?Me(d):1,f=D.size(n)/p,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Ut(t,m),m.push(...ie(a,[o[0],o[1],o[2],o[3]/p]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ie([n[0],n[1],n[2],n[3]/p]));let _=b=>{let x=ne("output",e[0].dataType,n.length,p),$=Re(x.type.tensor),I=Dt(t,x.type.value,$),S=q("x",e[0].dataType,a.length),k=q("w",e[1].dataType,o.length,p),C=[S,k];i&&C.push(q("b",e[2].dataType,e[2].dims,p));let M=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Pt(t,M);let v=u?`
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
  ${b.registerUniforms(M).declareVariables(...C,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${s}
    ${I}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},vl=(e,t,n,r)=>{let i=e.length>2,s=Me(n[3]),a=Me(n[2]),o=D.size(n)/s/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[n[0],n[1],n[2],n[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ut(t,p),p.push(...ie(u,d,c));let f=(a-1)*t.strides[1]+d[1],m=g=>{let _=ne("output",e[0].dataType,c.length,s),b=Re(_.type.tensor),x=Dt(t,_.type.value,b),$=q("x",e[0].dataType,u.length,s),I=q("w",e[1].dataType,d.length,s),S=[$,I];i&&S.push(q("b",e[2].dataType,e[2].dims,s));let k=i?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Pt(t,C),`
  ${g.registerUniforms(C).declareVariables(...S,_)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${f}>;
    var values: array<${_.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${k}
      ${x}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}}}),Sl,Hn,Il,jn,$i,xi,Tl,kl,vi,_g=X(()=>{ue(),mg(),gg(),_i(),yg(),Lt(),fi(),xt(),Sl=(e,t,n,r,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,d=t[0],c=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),p=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-c[m]+i[m])/i[m]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},Hn=[2,3,1,0],Il=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},jn=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let s=2;s<t[1].dims.length;++s)n[s-2]===0&&(n[s-2]=t[1].dims[s]);let r=e.pads.slice();Un.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},$i=e=>{let t=ci(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:s,kernelShape:a,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},xi=(e,t,n,r)=>{let i=n.format==="NHWC",s=Sl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let C=[t[0]];if(i){let M=e.kernelCustomData.wT??e.compute(Fe(t[1],Hn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=M),C.push(M)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(vl(C,n,s,r),{inputs:C}):e.compute(xl(C,n,s,r),{inputs:C});return}let a=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],p=t[1].dims[3],f=s[i?1:2],m=s[i?2:3],g=s[i?3:1],_=i&&c===o&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(_||c===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let C=s[0],M,v,O,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(Fe(t[1],Hn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),_){let z=o*u*d;M=t[0].reshape([1,C,z]),v=V.reshape([1,z,g]),O=[1,C,g]}else M=t[0].reshape([C,o*u,d]),v=V.reshape([1,d,g]),O=[C,f*m,g];N.push(M),N.push(v)}else M=t[0].reshape([C,d,o*u]),v=t[1].reshape([1,g,d]),O=[C,g,f*m],N.push(v),N.push(M);a&&N.push(t[2]);let F=O[2],L=N[0].dims[N[0].dims.length-1];F<8&&L<8?e.compute(hi(N,n,s,O,i,r),{inputs:N}):e.compute(Fn(N,n,s,O,i,r),{inputs:N});return}let b=!0,x=e.kernelCustomData.wT??e.compute(Fe(t[1],Hn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let $=[t[0],x];a&&$.push(t[2]);let I=i?f*m:g,S=i?g:f*m,k=c*p*d;e.compute(gl($,n,s,I,S,k,a,b,r),{inputs:$})},Tl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=jn({...t,pads:i,strides:s,dilations:a,kernelShape:o},r);xi(e,r,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},kl=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=jn(n,t),s=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=bl(t[0].dims,t[1].dims,n.strides,n.dilations,s,!1,r);e.compute($l(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},vi=(e,t)=>{if(Il(e.inputs,t),e.inputs[0].dims.length===3)Tl(e,t);else if(e.inputs[0].dims.length===5)kl(e,e.inputs,t);else{let n=jn(t,e.inputs);xi(e,e.inputs,n)}}}),El,wg=X(()=>{oe(),ht(),ue(),le(),El=(e,t,n)=>{let r=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,d=o[3],c=s?Me(u):1,p=s&&d===1&&u>=4,f=p?Math.floor(u/4)*4:Math.floor(u/c)*c,m=u-f,g=s?Me(d):1,_=s?d===1?c:g:1,b=D.size(i)/g,x=[Math.ceil(b/64),1,1];ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let $=["rank","rank"],I=[t.strides[0],t.strides[1]],S=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],k=[t.dilations[0],t.dilations[1]],C=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],M=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:I},{type:12,data:S},{type:12,data:k},{type:12,data:C},{type:6,data:M},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];r&&(v.push(...ie(e[2].dims)),$.push("rank")),v.push(...ie(i));let O=N=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:M.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Re(e[0].dataType),V=s?1:2,z=s?2:3,G=s?3:1,H=q("W",e[1].dataType,e[1].dims.length,_),K=q("Dy",e[0].dataType,e[0].dims.length,c),ae=[K,H];r&&ae.push(q("bias",e[2].dataType,[i[G]].length,g));let U=ne("result",e[0].dataType,i.length,g),J=()=>{let A="";if(p)c===4?A+=`
        let xValue = ${K.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?A+=`
          dotProd = dotProd + dot(vec4<${L}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}), vec4<${L}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(A+=`
          dotProd = dotProd + dot(vec4<${L}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}, ${K.getByOffset("x_offset + 2u")}, ${K.getByOffset("x_offset + 3u")}), vec4<${L}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(A+=`
                  let xValue = ${s?K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):K.get("batch","inputChannel","idyR","idyC")};
        `,c===1)A+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)A+=`
            let wValue${B} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return A},W=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let A="";if(c===1){A+="dotProd = dotProd";for(let B=0;B<m;B++)A+=`
            + ${K.getByOffset(`x_offset + ${B}`)} * ${H.getByOffset(`w_offset + ${B}`)}`;A+=";"}else if(c===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);A+=`
          let xValue = ${K.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return A},Y=`
            let outputIndices = ${U.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${U.indicesGet("outputIndices",0)};
            let d1 = ${U.indicesGet("outputIndices",G)};
            let r = ${U.indicesGet("outputIndices",V)};
            let c = ${U.indicesGet("outputIndices",z)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${U.type.value}(0.0);
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
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${z}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:c}) {
                  ${J()}
                  inputChannel = inputChannel + ${p?4:c};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${U.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(F).declareVariables(...ae,U)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${_}${g}${p}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:O}}}),Cl,Ml,zl,Si,Al,Rl,Ii,Ol,Bl,bg=X(()=>{wg(),Lt(),xt(),Cl=(e,t,n,r,i,s)=>(e-1)*t+n+(r-1)*i+1-s,Ml=(e,t,n,r,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=s,n[i]=e-s):t==="SAME_LOWER"&&(n[r]=e-s,n[i]=s)},zl=(e,t,n,r,i,s,a,o,u,d)=>{let c=e.length-2,p=d.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,_=e.length-c-(o?1:0);g<c;++g,++_){let b=e[_],x=p?b*a[g]:d[g],$=Cl(b,a[g],s[g],t[_],n[g],x);Ml($,r,s,g,g+c),p&&d.push(a[g]*(b-1)+u[g]+(t[_]-1)*n[g]+1-s[g]-s[g+c])}d.splice(0,0,f),d.splice(o?3:1,0,m)},Si=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,f)=>p*f,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}zl(o,n,u,e.autoPad,e.group,i,d,r,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:a,outputShape:s,dilations:u,strides:d}),c},Al=e=>{let t=ci(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),c=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:s,kernelShape:a,outputPadding:c,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Rl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ii=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Fe(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(El(s,n,r),{inputs:s})},Ol=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=Si({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:u},r);Ii(e,r,d,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Bl=(e,t)=>{if(Rl(e.inputs,t),e.inputs[0].dims.length===3)Ol(e,t);else{let n=Si(t,e.inputs);Ii(e,e.inputs,n)}}}),Nl,Dl,Ul,$g=X(()=>{oe(),ue(),ze(),le(),Nl=(e,t,n,r)=>{let i=D.size(t),s=t.length,a=q("input",e,s),o=ne("output",e,s),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=D.normalizeAxis(u,s),c=p=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,m=re("uniforms.input_shape","uniforms.axis",s),g=r.reverse?f+(r.exclusive?" + 1":""):"0",_=r.reverse?m:f+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${_};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ie(t,t)]}),getShaderSource:c}},Dl=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Nl(r,n,i,t),{inputs:[0]})},Ul=e=>{let t=e.exclusive===1,n=e.reverse===1;return $e({exclusive:t,reverse:n})}}),Pl,Ll,ql,Gl,Wl,xg=X(()=>{oe(),ue(),ze(),le(),Pl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ll=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let s=0;s<t;++s)i.push(n.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},ql=(e,t)=>{let n,r,i,s,a,o,u=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";u?([n,r,i,s]=e.dims,a=c?[n,r,i,d,d,s/d**2]:[n,r,i,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[n,d,d,s/d**2,r,i]:[n,s/d**2,d,d,r,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),f=p.dims.length,m=e.dataType,g=q("a",m,f),_=ne("output",m,f),b=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(g,_)}

  ${Ll(o,f,g,_)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let $=u?[n,r*d,i*d,s/d**2]:[n,s/d**2,r*d,i*d],I=D.size($),S=p.dims,k=D.sortBasedOnPerm(S,o);return{outputs:[{dims:$,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ie(S,k)]}},getShaderSource:b}},Gl=(e,t)=>{Pl(e.inputs),e.compute(ql(e.inputs[0],t))},Wl=e=>$e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Kn,yn,Ti,Vl,Fl,Hl,jl,ki,Kl,Xl,Yl,vg=X(()=>{oe(),ue(),ze(),le(),Kn="[a-zA-Z]|\\.\\.\\.",yn="("+Kn+")+",Ti="^"+yn+"$",Vl="("+yn+",)*"+yn,Fl="^"+Vl+"$",Hl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},jl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Fl)))throw new Error("Invalid LHS term");if(n.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(Ti)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,o,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!r.match(RegExp(yn)))throw new Error("Invalid RHS");(i=r.match(RegExp(Kn,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,s=!1,a=[],o=0;if(!e.match(RegExp(Ti))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Kn,"g")),d=new Hl(r);return u==null||u.forEach((c,p)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<a.length;m++){let g=String.fromCharCode(48+m);d.addSymbol(g,p+m),this.addSymbol(g,n[o++],r)}}else d.addSymbol(c,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[o++],r)}),d}},ki=e=>e+"_max",Kl=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,c)=>q(`input${c}`,t,d)),s=D.size(r),a=ne("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),u=d=>{let c=[],p="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],_=[],b=[],x=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,k)=>{var C;if(n.rhs.symbolToIndices.has(k)){let M=(C=n.rhs.symbolToIndices.get(k))==null?void 0:C[0];M!==void 0&&n.lhs.forEach((v,O)=>{if(S.inputIndices.includes(O)){let N=v.symbolToIndices.get(k);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(F=>{c.push(`${i[O].indicesSet(`input${O}Indices`,F,a.indicesGet("outputIndices",M))}`)})}})}else n.lhs.forEach((M,v)=>{if(S.inputIndices.includes(v)){let O=M.symbolToIndices.get(k);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${k}`)}`)}),x.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),_.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${ki(k)}; ${k}++) {`),b.push("}")});let I=$?[...c,`let sum = ${i.map((S,k)=>S.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...c,f,..._,...g,p,...x,m,...b];return`
            ${d.registerUniforms(o.map(S=>({name:`${ki(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((S,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>n.symbolToInfo.has(p)).map(p=>{var f;return{type:12,data:((f=n.symbolToInfo.get(p))==null?void 0:f.dimValue)||0}});d.push({type:12,data:s});let c=e.map((p,f)=>[...ie(p)]).reduce((p,f)=>p.concat(f),d);return c.push(...ie(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:u}},Xl=(e,t)=>{let n=new jl(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Kl(i,e.inputs[0].dataType,n,r))},Yl=e=>{let t=e.equation.replace(/\s+/g,"");return $e({equation:t})}}),Zl,Ei,Ql,Jl,ed,Sg=X(()=>{oe(),ue(),le(),Zl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ei=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Ql=(e,t)=>e.length>t.length?Ei(e,t):Ei(t,e),Jl=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Ql(t,n),i=e[0].dataType,s=i===9||D.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(D.size(r)/o),d=p=>{let f=q("input",i,t.length,a),m=ne("output",i,r.length,o),g;if(i===9){let _=(b,x,$="")=>`
          let outputIndices${x} = ${m.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${f.broadcastedIndicesToOffset(`outputIndices${x}`,m)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${b}[${x}] = ${$}(${f.getByOffset(`index${x}`)}[component${x}]);
        `;g=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${_("data",0,"u32")}
        ${_("data",1,"u32")}
        ${_("data",2,"u32")}
        ${_("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${a}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},c=[{type:12,data:u},...ie(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},ed=e=>{Zl(e.inputs),e.compute(Jl(e.inputs),{inputs:[0]})}}),td,nd,Ig=X(()=>{oe(),ue(),le(),di(),td=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4===0,s=a=>{let o=q("x",t,[1],4),u=q("bias",t,[1],4),d=ne("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,u,d)}

    ${ui(De(t))}

    ${a.mainStart(Jt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",li("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Jt/4)}})}},nd=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?Nu(e):e.compute(td(e.inputs))}}),rd,id,ad,sd,Tg=X(()=>{oe(),ue(),ze(),le(),rd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},id=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=D.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(s,1,...r);let o=n[s],u=e[0].dataType===9?4:1,d=Math.ceil(D.size(a)/u),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...ie(e[0].dims,e[1].dims,a)],p=f=>{let m=q("data",e[0].dataType,e[0].dims.length,u),g=q("inputIndices",e[1].dataType,e[1].dims.length),_=ne("output",e[0].dataType,a.length,u),b=$=>{let I=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let k=0;k<I;k++)S+=`${I>1?`indicesIndices${$}[${k}]`:`indicesIndices${$}`} = ${a.length>1?`outputIndices${$}[uniforms.axis + ${k}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${g.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${m.type.indices};
        `;for(let k=0,C=0;k<i;k++)k===s?(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = u32(idx${$});`,C+=I):(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = ${a.length>1?`outputIndices${$}[${C}]`:`outputIndices${$}`};`,C++);return S},x;if(e[0].dataType===9){let $=(I,S,k="")=>`
          let outputIndices${S} = ${_.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${I}[${S}] = ${k}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;x=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${_.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${_.offsetToIndices("global_idx")};
      ${b("")};
      let value = ${m.getByIndices("dataIndices")};
      ${_.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:p}},ad=e=>$e({axis:e.axis}),sd=(e,t)=>{let n=e.inputs;rd(n),e.compute(id(e.inputs,t))}}),od,ud,ld,kg=X(()=>{oe(),ue(),le(),od=(e,t,n,r,i,s,a,o,u)=>{let d=[{type:12,data:s},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:u}],c=[s];d.push(...ie(t.dims,c));let p=f=>{let m=q("indices_data",t.dataType,t.dims.length),g=ne("input_slice_offsets_data",12,1,1),_=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(..._)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},ud=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,s=n[1].dims,a=s[s.length-1],o=D.sizeToDimension(s,s.length-1),u=D.sizeFromDimension(r,t.batchDims+a),d=D.sizeToDimension(r,t.batchDims),c=D.sizeFromDimension(r,t.batchDims),p=o/d,f=new Array(a),m=u;for(let S=0;S<a;++S)f[a-1-S]=m,m*=r[t.batchDims+a-1-S];let g=od(e,n[1],f,t.batchDims,r,o,p,c,a),_=t.batchDims+a;if(_>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=s.slice(0,-1).concat(r.slice(_)),x=D.size(b),$=[{type:12,data:x},{type:12,data:u},...ie(n[0].dims,g.dims,b)],I=S=>{let k=q("data",n[0].dataType,n[0].dims.length),C=q("slice_offsets",12,g.dims.length),M=ne("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,C,M)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:$}),getShaderSource:I},{inputs:[n[0],g]})},ld=e=>({batchDims:e.batch_dims,cacheKey:""})}),dd,cd,pd,hd,Eg=X(()=>{oe(),ue(),ze(),le(),dd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},cd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=D.normalizeAxis(t.gatherAxis,i),a=D.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(s,1,...r);let u=D.size(o),d=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ie(...e.map((m,g)=>m.dims),o)],f=m=>{let g=q("data",e[0].dataType,e[0].dims.length),_=q("inputIndices",e[1].dataType,e[1].dims.length),b=q("scales",e[2].dataType,e[2].dims.length),x=e.length>3?q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=ne("output",d,o.length),I=[g,_,b];x&&I.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...I,$)}
        ${m.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${_.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${_.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${_.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[s]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${b.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${b.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${b.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${De(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},pd=(e,t)=>{let n=e.inputs;dd(n,t),e.compute(cd(e.inputs,t))},hd=e=>$e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fd,md,gd,yd,Cg=X(()=>{oe(),ue(),ze(),le(),fd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},md=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,s=e[1].dims,a=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=n[o],d=s.slice(0),c=D.size(d),p=q("input",r,i),f=q("indicesInput",a,s.length),m=ne("output",r,d.length),g=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return g.push(...ie(n,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,f,m)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},gd=e=>$e({axis:e.axis}),yd=(e,t)=>{let n=e.inputs;fd(n),e.compute(md(e.inputs,t))}}),_d,wd,bd,$d,Mg=X(()=>{oe(),ue(),le(),_d=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},wd=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,s,a]=Cs.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(s/u),c=Math.ceil(i/u),p=!0,f=D.size(o),m=[{type:12,data:p?d:f},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ie(e[2].dims)),g.push("rank")),m.push(...ie(o));let _=x=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",S=q("a",e[0].dataType,e[0].dims),k=q("b",e[1].dataType,e[1].dims),C=S.type.value,M=null,v=[S,k];e.length===3&&(M=q("c",e[2].dataType,e[2].dims.length),v.push(M));let O=ne("output",e[0].dataType,o.length);v.push(O);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(N).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${I}
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${C}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=x=>{let $=q("a",e[0].dataType,e[0].dims),I=q("b",e[1].dataType,e[1].dims),S=null,k=[$,I];e.length===3&&(S=q("c",e[2].dataType,e[2].dims.length),k.push(S));let C=ne("output",e[0].dataType,o.length);k.push(C);let M=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",O="";t.transA&&t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(M).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${u}>, ${u}>;
  ${x.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
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
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},bd=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},$d=(e,t)=>{_d(e.inputs),e.compute(wd(e.inputs,t))}}),at,ft,qt,Gt,xd,vd,Sd,Id,Td,kd,Ed,Cd,Md,zd,zg=X(()=>{oe(),ue(),ze(),le(),[at,ft,qt,Gt]=[0,1,2,3],xd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},vd=`
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
`,Sd=e=>`
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
`,Id=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Td=e=>`
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
`,kd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${at}] = batch;
     indices[${ft}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${qt}] = u32(r);
            indices[${Gt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${qt}] = u32(clamp(r, 0, H - 1));
          indices[${Gt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${qt}] = gs_reflect(r, border[1], border[3]);
          indices[${Gt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ed=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${at}], indices[${ft}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${at}], indices[${ft}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${at}], indices[${ft}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${at}], indices[${ft}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${at}], indices[${ft}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${at}], indices[${ft}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Cd=(e,t)=>{let n=q("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=q("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[at,ft,qt,Gt]=[0,3,1,2]);let a=ne("output",e[0].dataType,s.length),o=n.type.value,u=D.size(s),d=[{type:12,data:u},...ie(e[0].dims,r,s)],c=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${vd}
  ${Sd(o)}
  ${Id(t)}
  ${Td(t)}
  ${kd(n,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${qt}]);
      let W_in = i32(uniforms.x_shape[${Gt}]);

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
      var grid_indices = vec3<u32>(indices[${at}], indices[${qt}], indices[${Gt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ed(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let f=D.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:c}},Md=(e,t)=>{xd(e.inputs),e.compute(Cd(e.inputs,t))},zd=e=>$e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Pe,Ad,Rd,Ci,Od,_n,Bd,Nd=X(()=>{oe(),ue(),ze(),Xr(),si(),le(),xt(),Pe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ad=(e,t)=>{let n=e[0],r=Pe(e,1),i=Pe(e,2),s=Pe(e,3),a=Pe(e,4),o=Pe(e,5),u=Pe(e,6),d=Pe(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],p=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=p,g=0,_=0,b=Math.floor(f/t.numHeads);if(u&&d&&D.size(u.dims)&&D.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],_=u.dims[2]}else if(u&&D.size(u.dims)||d&&D.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(s&&D.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,I=0;if(a&&D.size(a.dims)>0){I=8;let M=a.dims;throw M.length===1?M[0]===c?I=1:M[0]===3*c+2&&(I=3):M.length===2&&M[0]===c&&M[1]===$&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,k=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],S=!0}}let C=!1;if(a&&D.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:b,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:S,qkvFormat:x}},Rd=e=>$e({...e}),Ci=$e({perm:[0,2,1,3]}),Od=(e,t,n,r,i,s,a)=>{let o=[r,i,s],u=D.size(o),d=[{type:12,data:u},{type:12,data:a},{type:12,data:s}],c=p=>{let f=ne("qkv_with_bias",t.dataType,o),m=q("qkv",t.dataType,o),g=q("bias",n.dataType,o),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(m,g,f)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},_n=(e,t,n,r,i,s,a,o)=>{let u=s;if(a&&D.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Od(e,s,a,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(Fe(u,Ci.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,r,n,i])),n===1||r===1?u:e.compute(Fe(u,Ci.perm),{inputs:[u],outputs:[-1]})[0]},Bd=(e,t)=>{let n=Ad(e.inputs,t),r=e.inputs[0],i=Pe(e.inputs,1),s=Pe(e.inputs,2),a=Pe(e.inputs,3),o=Pe(e.inputs,4),u=Pe(e.inputs,5),d=Pe(e.inputs,6),c=Pe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,f=_n(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(p)return hn(e,f,i,s,o,void 0,d,c,u,n);if(!i||!s)throw new Error("key and value must be provided");let m=_n(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),g=_n(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,s,a,2*n.hiddenSize);hn(e,f,m,g,o,void 0,d,c,u,n)}}),Dd,Ud,Pd,Ld,Mi,qd,Gd,Wd=X(()=>{oe(),ue(),ze(),le(),Dd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ud=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),$e({numOutputs:r,axis:t.axis,splitSizes:n})},Pd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ld=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Mi=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,s=D.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),o=q("input",i,n.length),u=new Array(t.numOutputs),d=[],c=[],p=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){p+=t.splitSizes[g],u[g]=p;let _=n.slice();_[s]=t.splitSizes[g],c.push(_),a[g]=ne(`output${g}`,i,_.length),d.push({dims:c[g],dataType:e[0].dataType})}f.push({type:12,data:u},...ie(n,...c));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${Pd(u.length)}
  ${Ld(a)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${re("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},qd=(e,t)=>{Dd(e.inputs);let n=e.inputs.length===1?t:Ud(e.inputs,t);e.compute(Mi(e.inputs,n),{inputs:[0]})},Gd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return $e({axis:t,numOutputs:r,splitSizes:n})}}),Vd,Xn,Fd,Hd=X(()=>{oe(),ue(),ze(),le(),Vd=(e,t)=>{let[n,r,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!D.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],d=n.dims[n.dims.length-2],c=i.dims[0],p=D.sizeFromDimension(n.dims,1)/d,f=o===0?i.dims[1]*2:p/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Xn=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,c=e[2].dims[1],p=i===0?c*2:d/r,f=new Array(a,u,d/p,p-c),m=D.computeStrides(f),g=[{type:1,data:s},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=b=>{let x=q("input",e[0].dataType,e[0].dims.length),$=q("position_ids",e[1].dataType,e[1].dims.length),I=q("cos_cache",e[2].dataType,e[2].dims.length),S=q("sin_cache",e[3].dataType,e[3].dims.length),k=ne("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables(x,$,I,S,k)}

        ${b.mainStart(Jt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",ne("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${x.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:$e({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/Jt)},programUniforms:g})}},Fd=(e,t)=>{Vd(e.inputs,t),e.compute(Xn(e.inputs,t))}}),jd,Kd,zi,Xd,Yd,Ag=X(()=>{ze(),oe(),si(),Nd(),Wd(),xt(),Hd(),le(),jd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],d=n.dims[1],c=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=d,f=0,m=!r||r.dims.length===0,g=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=g*t.numHeads);let _=s&&s.dims.length!==0,b=a&&a.dims.length!==0;if(_&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&b){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(_||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let $=0,I=!1,S=t.kvNumHeads?g*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],I=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=k.dims.reduce((M,v)=>M*v,1);if(C!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${C}.`);for(let M=0;M<k.dims.length;M++)if(k.dims[M]!==1&&k.dims[M]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${M}] = ${k.dims[M]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:x}},Kd=$e({perm:[0,2,1,3]}),zi=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Fe(r,Kd.perm),{inputs:[r],outputs:[-1]})[0]),r},Xd=(e,t,n,r)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let p=q("seq_lens",n.dataType,n.dims),f=q("total_seq_lens",r.dataType,r.dims),m=ne("pos_ids",i,a),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(p,f,m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},Yd=(e,t)=>{var S;let n=jd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=$e({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[f,m,g]=!i&&!s?e.compute(Mi([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,s],_,b;if(t.doRotary){let k=e.compute(Xd(n.batchSize,n.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],M=e.inputs[8],v=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[f,k,C,M],N=[-1];_=e.compute(Xn(O,v),{inputs:O,outputs:N})[0],O.splice(0,1,m);let F=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(Xn(O,F),{inputs:O,outputs:N})[0]}let x=_n(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?_:f,void 0,0),$=zi(e,t.doRotary?b:m,n),I=zi(e,g,n);hn(e,x,$,I,void 0,void 0,a,o,void 0,n,u,d)}}),Ai,Zd,Qd,Jd,Rg=X(()=>{oe(),ue(),xt(),le(),Ai=(e,t,n,r,i,s,a,o)=>{let u=Me(s),d=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,p=i*a,f=64;p===1&&(f=256);let m=[i,a,s/u],g=[i,a,2],_=["rank","type","type"],b=[];b.push(...ie(m,g));let x=$=>{let I=q("x",t.dataType,3,u),S=q("scale",n.dataType,n.dims),k=q("bias",r.dataType,r.dims),C=ne("output",1,3,2),M=[I,S,k,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${f}>;
  const workgroup_size = ${f}u;
  ${$.declareVariables(...M)}
  ${$.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
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
      let sum_final = ${$t("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${$t("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:p},programUniforms:b}),getShaderSource:x},{inputs:[t,n,r],outputs:[-1]})[0]},Zd=(e,t,n)=>{let r=t[0].dims,i=r,s=2,a=r[0],o=r[1],u=D.sizeFromDimension(r,s),d=Me(u),c=D.size(i)/d,p=Ai(e,t[0],t[1],t[2],a,u,o,n.epsilon),f=[a,o,u/d],m=[a,o],g=["type","none"],_=b=>{let x=q("x",t[0].dataType,f.length,d),$=q("scale_shift",1,m.length,2),I=ne("output",t[0].dataType,f.length,d),S=[x,$,I];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ie(f,m,f)]}),getShaderSource:_},{inputs:[t[0],p]})},Qd=(e,t,n)=>{let r=t[0].dims,i=r,s=r[0],a=r[r.length-1],o=D.sizeFromDimension(r,1)/a,u=Me(a),d=D.size(i)/u,c=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],p=["type","type"],f=!1,m=[0,r.length-1];for(let x=0;x<r.length-2;x++)f=f||r[x+1]!==1,m.push(x+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(Fe(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(x,$)=>r[m[$]])),_=Ai(e,g,t[1],t[2],s,o,a,n.epsilon),b=x=>{let $=Re(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,S=M=>{let v=M===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${O}(scale.${v}))`;case 2:return`vec2<${$}>(${O}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${O}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=q("input",t[0].dataType,t[0].dims,u),C=ne("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:b},{inputs:[t[0],_]})},Jd=(e,t)=>{t.format==="NHWC"?Qd(e,e.inputs,t):Zd(e,e.inputs,t)}}),ec,tc,nc,Og=X(()=>{oe(),ue(),le(),ec=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},tc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,s=e[1],a=!r&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),d=D.sizeToDimension(i,u),c=D.sizeFromDimension(i,u),p=D.size(s.dims),f=a?D.size(a.dims):0;if(p!==c||a&&f!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let g=Me(c),_=["type","type"],b=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/g)},{type:1,data:t.epsilon}];a&&_.push("type");let x=n>1,$=n>2,I=k=>{let C=Re(e[0].dataType),M=[q("x",e[0].dataType,e[0].dims,g),q("scale",s.dataType,s.dims,g)];a&&M.push(q("bias",a.dataType,a.dims,g)),M.push(ne("output",e[0].dataType,o,g)),x&&M.push(ne("mean_data_output",1,m)),$&&M.push(ne("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(v).declareVariables(...M)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Jr("f32",g)};
    var mean_square_vector = ${Jr("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${en(C,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${$t("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${$t("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${en(C,g,"x[j + offset]")};
      let f32scale = ${en(C,g,"scale[j]")};
      output[j + offset] = ${M[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${en(C,g,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return x&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:_},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:b}),getShaderSource:I}},nc=(e,t)=>{ec(e.inputs),e.compute(tc(e.inputs,t,e.outputCount))}}),rc,ic,Bg=X(()=>{ue(),fi(),_i(),rc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},ic=e=>{rc(e.inputs);let t=Qt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(hi(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=D.size(e.inputs[0].dims.slice(0,-2)),a=D.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,r]),u=e.inputs[1].reshape([1,r,n]),d=[1,s,n],c=[o,u];e.compute(Fn(c,{activation:""},t,d),{inputs:c})}else e.compute(Fn(e.inputs,{activation:""},t))}}}),ac,sc,oc,uc,lc,Ng=X(()=>{oe(),ue(),ze(),le(),ac=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!D.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(u)!==d)throw new Error("zeroPoints input size error.")}},sc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,a=t.n,o=n.slice(0,r-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Me(t.k),f=Me(d),m=Me(a),g=o.concat([i,a]),_=i>1&&a/m%2===0?2:1,b=D.size(g)/m/_,x=64,$=[],I=[u,i,s/p],S=D.convertShape(e[1].dims).slice();S.splice(-1,1,d/f),$.push(...ie(I)),$.push(...ie(S)),$.push(...ie(e[2].dims)),e.length===4&&$.push(...ie(D.convertShape(e[3].dims)));let k=[u,i,a/m];$.push(...ie(k));let C=M=>{let v=I.length,O=q("a",e[0].dataType,v,p),N=q("b",12,S.length,f),F=q("scales",e[2].dataType,e[2].dims.length),L=[O,N,F],V=e.length===4?q("zero_points",12,e[3].dims.length):void 0;V&&L.push(V);let z=k.length,G=ne("output",e[0].dataType,z,m),H=Re(e[0].dataType),K=(()=>{switch(p){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ae=Math.floor(32/t.bits),U=Math.floor(ae/8),J=()=>{let A="";for(let B=0;B<U;B++){let j=B*t.bits*4,te=j+t.bits;A+=`
          // reuse a data (pass ${B})
            var input_offset${B>0?B:""} = ${B===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${B>0?B:""}: ${K};
            for (var j${B>0?B:""}: u32 = 0; j${B>0?B:""} < ${8/p}; j${B>0?B:""}++) {
              a_data${B>0?B:""}[j${B>0?B:""}] = ${O.getByOffset(`input_offset${B>0?B:""}`)};
              input_offset${B>0?B:""}++;
            }
          `;for(let Z=0;Z<m*_;Z++)A+=`
            b_value = ${f===1?`b${Z}_data`:`b${Z}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${B*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${j}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${te}u) & b_mask);`}
            b_quantized_values = ${K}(${Array.from({length:4},(de,ve)=>`${H}(b_value_lower[${ve}]), ${H}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${p===1?`${K}(${Array.from({length:8},(de,ve)=>`(b_quantized_values[${ve}] - ${V?`zero_point${Z}`:"zero_point"}) * scale${Z}`).join(", ")});`:`(b_quantized_values - ${K}(${Array(8).fill(`${V?`zero_point${Z}`:"zero_point"}`).join(",")})) * scale${Z};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(Z/m)}]${m>1?`[${Z%m}]`:""} += ${Array.from({length:8/p},(de,ve)=>`${p===1?`a_data${B>0?B:""}[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data${B>0?B:""}[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `}return A},W=()=>{let A=`
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
            let zero_point = ${H}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let B=0;B<m*_;B++)A+=`
            let scale${B} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${H}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return A},Y=()=>{let A=`col_index = col * ${m};`;for(let B=0;B<m*_;B++)A+=`
            let b${B}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return A+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${K};
            var b_dequantized_values: ${K};`,A};return`
        var<workgroup> workgroup_shared: array<${G.type.value}, ${_*x}>;
        ${M.declareVariables(...L,G)}
        ${M.mainStart([x,1,1])}
          let output_indices = ${G.offsetToIndices(`(global_idx / ${x}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${Y()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${J()}
                word_offset += ${ae/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${G.type.value} = ${G.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${G.setByIndices(`${G.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${m};${_};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:b},programUniforms:$}),getShaderSource:C}},oc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,a=t.n,o=n.slice(0,r-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Me(t.k),f=Me(d),m=o.concat([i,a]),g=128,_=a%8===0?8:a%4===0?4:1,b=g/_,x=Math.floor(32/t.bits),$=b*f*x,I=$/p,S=$/t.blockSize,k=D.size(m)/_,C=[],M=[u,i,s/p],v=D.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),C.push(...ie(M)),C.push(...ie(v)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(D.convertShape(e[3].dims)));let O=[u,i,a];C.push(...ie(O));let N=F=>{let L=M.length,V=q("a",e[0].dataType,L,p),z=q("b",12,v.length,f),G=q("scales",e[2].dataType,e[2].dims.length),H=[V,z,G],K=e.length===4?q("zero_points",12,e[3].dims.length):void 0;K&&H.push(K);let ae=O.length,U=ne("output",e[0].dataType,ae),J=Re(e[0].dataType),W=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${U.type.value}, ${b}>, ${_}>;
        ${F.declareVariables(...H,U)}
        ${F.mainStart([b,_,1])}
          let output_indices = ${U.offsetToIndices(`workgroup_index * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${g})
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
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${J}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${J}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${G.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${z.getByIndices(`${z.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let Y=Math.floor(x/8),A="";for(let B=0;B<Y;B++){let j=B*t.bits*4,te=j+t.bits;A+=`
              ${W()}
              {${t.bits===2?`
                let half_word = b_value >> ${B*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${j}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(Z,de)=>`${J}(b_value_lower[${de}]), ${J}(b_value_upper[${de}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Z,de)=>`${`dot(a_data${de}, b_dequantized_values[${de}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return A})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${U.type.value} = ${U.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${U.setByIndices(`${U.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${b};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:N}},uc=(e,t)=>{ac(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(oc(e.inputs,t)):e.compute(sc(e.inputs,t))},lc=e=>$e(e)}),dc,cc,pc,hc,fc,mc,gc,yc,_c,Dg=X(()=>{oe(),ue(),le(),dc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},cc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${re("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${re("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},pc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${re("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${re("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${re("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},hc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${re("uniforms.x_shape",i,t)})) {
                  k = i32(${re("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${re("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},fc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${re("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${re("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${re("uniforms.x_shape",i,t)})) {
                  k -= i32(${re("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${re("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},mc=(e,t,n)=>{switch(n.mode){case 0:return cc(e,t,n.pads.length);case 1:return pc(e,t,n.pads.length);case 2:return hc(e,t,n.pads.length);case 3:return fc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},gc=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=D.size(n),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ie(e[0].dims,n));let o=["rank"],u=d=>{let c=ne("output",e[0].dataType,n.length),p=q("x",e[0].dataType,r.length),f=p.type.value,m=mc(c,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:a?f:"f32"}),`
            ${d.registerUniforms(g).declareVariables(p,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:s}),getShaderSource:u}},yc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(n[u]),s[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>s[Number(u)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:r,pads:a}}else return t},_c=(e,t)=>{dc(e.inputs);let n=yc(e.inputs,t);e.compute(gc(e.inputs,n),{inputs:[0]})}}),wn,Ri,Oi,Bi,Ni,wc,bc,Di,Ui,$c,xc,Pi,vc,Sc,Li,Ic,Tc,kc,Ec,Ug=X(()=>{He(),oe(),ue(),le(),wn=e=>{if(ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ri=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],d=t.pads.slice();Un.adjustPoolAttributes(n,i,a,o,u,d);let c=Un.computePoolOutputShape(n,i,o,u,a,d,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let f=c.slice();return f.push(f.splice(1,1)[0]),[p,r?f:c]},Oi=(e,t)=>{let n=t.format==="NHWC",r=D.size(e),i=D.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],p=!!(d+c);s.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(_+b),s.push({type:12,data:m},{type:12,data:g},{type:12,data:_},{type:12,data:b}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,c)=>d+c);return[s,a,!!u,!1,!1]}},Bi=(e,t,n,r,i,s,a,o,u,d,c,p)=>{let f=i.format==="NHWC",m=t.type.value,g=ne("output",t.type.tensor,r);if(i.kernelShape.length<=2){let _="",b="",x="",$=n-(f?2:1);if(c?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let I=n-(f?3:2);p?b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
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
              ${_}
              ${x}
              ${a}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let _=i.kernelShape.length,b=i.pads.length,x="";return d?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var offsets: array<u32, ${_}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${_-1}u; j++) {
                  offsets[j] = offset / ${re("uniforms.kernelStrides","j",_)};
                  offset -= offsets[j] * ${re("uniforms.kernelStrides","j",_)};
                }
                offsets[${_-1}] = offset;

                isPad = false;
                for (var j = ${n-_}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${re("uniforms.strides",`j - ${n-_}u`,_)}
                    + offsets[j - ${n-_}u] - ${re("uniforms.pads","j - 2u",b)};
                  ${x}
              }
              ${a}

              output[global_idx] = value;
            }`}},Ni=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,wc=e=>`${Ni(e)};${e.countIncludePad}`,bc=e=>`${Ni(e)};${e.storageOrder};${e.dilations}`,Di=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ui=(e,t,n,r)=>{let[i,s]=Ri(t,r,n),a=q("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,p,f,m,g]=Oi(s,i);c.push(...ie(t.dims,s));let _=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:b=>Bi(b,a,t.dims.length,s.length,i,u,d,0,p,f,m,g)}},$c=e=>{let t=e.count_include_pad!==0,n=Di(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:wc(r)}},xc=(e,t)=>{wn(e.inputs),e.compute(Ui("AveragePool",e.inputs[0],!1,t))},Pi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},vc=e=>{let t=e.format;return{format:t,...Pi,cacheKey:t}},Sc=(e,t)=>{wn(e.inputs),e.compute(Ui("GlobalAveragePool",e.inputs[0],!0,t))},Li=(e,t,n,r)=>{let[i,s]=Ri(t,r,n),a=`
      value = max(x_val, value);
    `,o="",u=q("x",t.dataType,t.dims.length),d=["rank"],[c,p,f,m,g]=Oi(s,i);return c.push(...ie(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:_=>Bi(_,u,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,f,m,g)}},Ic=(e,t)=>{wn(e.inputs),e.compute(Li("MaxPool",e.inputs[0],!1,t))},Tc=e=>{let t=e.storage_order,n=e.dilations,r=Di(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:bc(i)}},kc=e=>{let t=e.format;return{format:t,...Pi,cacheKey:t}},Ec=(e,t)=>{wn(e.inputs),e.compute(Li("GlobalMaxPool",e.inputs[0],!0,t))}}),Cc,Mc,zc,Ac,Pg=X(()=>{oe(),ue(),ze(),le(),Cc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Mc=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,s=e[0].dims,a=e[1].dataType,o=D.size(s),u=r===3||r===2,d=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,p=e.length>2?e[2]:void 0,f=p?u?[Math.ceil(D.size(p.dims)/4)]:p.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,g=m===!1&&c.length===1,_=Me(o),b=m&&(!u||_===4),x=b?_:1,$=b&&!u?_:1,I=q("input",u?12:r,d.length,$),S=q("scale",a,c.length),k=p?q("zero_point",u?12:r,f.length):void 0,C=ne("output",a,s.length,x),M=[I,S];k&&M.push(k);let v=[d,c];p&&v.push(f);let O=[{type:12,data:o/x},{type:12,data:n},{type:12,data:t.blockSize},...ie(...v,s)],N=F=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(L).declareVariables(...M,C)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/x/64),y:1,z:1},programUniforms:O})}},zc=(e,t)=>{Cc(e.inputs,t),e.compute(Mc(e.inputs,t))},Ac=e=>$e({axis:e.axis,blockSize:e.blockSize})}),Rc,Oc,Bc,Lg=X(()=>{He(),oe(),le(),Rc=(e,t,n)=>{let r=e===t,i=e<t&&n<0,s=e>t&&n>0;if(r||i||s)throw new Error("Range these inputs' contents are invalid.")},Oc=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),s=[i],a=i,o=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...ie(s)],u=d=>{let c=ne("output",r,s.length),p=c.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(f).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},Bc=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ke.webgpu.validateInputContent&&Rc(t,n,r),e.compute(Oc(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Nc,Dc,Uc,Pc,qg=X(()=>{oe(),ue(),ze(),le(),Nc=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${s}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${s}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Dc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,s=1,a=Math.ceil(D.sizeToDimension(r,r.length-1)/s),o=r[r.length-1],u=D.sizeFromDimension(n,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,i)],c=p=>{let f=q("indices",e[1].dataType,e[1].dims.length),m=q("updates",e[2].dataType,e[2].dims.length,s),g=t.reduction!=="none"&&t.reduction!==""?Vs("output",e[0].dataType,i.length):ne("output",e[0].dataType,i.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,g)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${Nc(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},Uc=e=>$e({reduction:e.reduction}),Pc=(e,t)=>{e.compute(Dc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Lc,qc,Gc,qi,Wc,Vc,Fc,Hc,jc,Kc,Xc,Yc,Gi,Zc,Qc,Jc,ep,tp,np,rp,Gg=X(()=>{oe(),ue(),ze(),le(),Lc=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},qc=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,s)=>r[i]=e[s]),r},Gc=(e,t,n,r,i,s)=>{let[a,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Lc(r,t),t.axes.length>0&&qc(r,t.axes,d).forEach((c,p)=>r[p]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},qi=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Wc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${qi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${qi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Vc=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Fc=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,a)=>{r[s]=i[a],r[a+n]=i[t.length+a]}),r):i},Hc=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(s=>i.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,a)=>i[s]=n[a])}else n.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},jc=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(s=>t[s]=r),n.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Kc=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${re("uniforms.scales","i",r)};
        var roi_low = ${re("uniforms.roi","i",i)};
        var roi_hi = ${re("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${re("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Xc=(e,t,n,r,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${re("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${re("uniforms.roi","i",s)};
          var roi_hi = ${re("uniforms.roi",`i + ${n.length}`,s)};
          var input_shape_i = ${re("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",r.length)};
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
    }`,Yc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Gi=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Zc=(e,t,n,r,i)=>{let[s,a,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Gi(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${r?`if (row < 0 || row > (${n[a]} - 1) || col < 0 || col > (${n[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${n[a]} - 1));
      col = max(0, min(col, ${n[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${s}])`:"0"};
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
    }`},Qc=(e,t,n,r,i,s,a,o,u,d)=>{let c=n.length===2,[p,f]=c?[0,1]:[2,3],m=e.type.value,g=_=>{let b=_===p?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",_)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[_]},
        ${r[_]}, ${n[_]}, ${s[_]}, ${s[_]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[_]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${m} = originalIdx + ${m}(i);
          if (${b} < 0 || ${b} >= ${n[_]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${b} = max(0, min(${b}, ${n[_]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",_,`u32(${b})`)};
          data[i + 1] = ${_===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(p)};
    ${g(f)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
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
    `},Jc=(e,t,n,r,i)=>{let[s,a,o,u,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Gi(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${n[a]} - 1) || height < 0 || height > (${n[o]} - 1) || width < 0 || (width > ${n[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${n[a]} - 1));
      height = max(0, min(height, ${n[o]} - 1));
      width = max(0, min(width, ${n[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${s}])`:"0"};

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
    }`},ep=(e,t,n,r,i,s)=>{let a=e.dims,o=Fc(s,t.axes,a.length),u=Hc(a,r,i,t.axes),d=r.slice();r.length===0&&(d=a.map(($,I)=>$===0?1:u[I]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=jc(a,d,t)));let c=ne("output",e.dataType,u.length),p=q("input",e.dataType,a.length),f=D.size(u),m=a.length===u.length&&a.every(($,I)=>$===u[I]),g=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,b=p.type.value,x=$=>`
      ${m?"":`
      ${Wc(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Yc(p,a)};
              ${Vc(t.nearestMode,n,b)};
              ${Xc(p,c,a,u,d.length,o.length,g)};
              `;case"linear":return`
              ${Kc(c,a,u,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Zc(p,c,a,g,_)}`;if(a.length===3||a.length===5)return`${Jc(p,c,a,g,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Qc(p,c,a,u,d,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,c)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ie(a,u)]})}},tp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},np=(e,t)=>{let n=[],r=[],i=[],s=tp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Gc(e.inputs,t,s,n,r,i),e.compute(ep(e.inputs[0],t,s,n,r,i),{inputs:[0]})},rp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return $e({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),ip,ap,sp,Wg=X(()=>{oe(),ue(),le(),ip=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},ap=(e,t,n,r)=>{let i=t.simplified,s=e[0].dims,a=D.size(s),o=s,u=a,d=s.slice(-1)[0],c=r?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,_=n>3,b=64,x=Me(d),$=[{type:12,data:u},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],I=k=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],M=[q("x",e[0].dataType,e[0].dims,x),q("skip",e[1].dataType,e[1].dims,x),q("gamma",e[2].dataType,e[2].dims,x)];p&&M.push(q("beta",e[3].dataType,e[3].dims,x)),f&&M.push(q("bias",e[4].dataType,e[4].dims,x)),M.push(ne("output",e[0].dataType,o,x)),m&&M.push(ne("mean_output",1,c)),g&&M.push(ne("inv_std_output",1,c)),_&&M.push(ne("input_skip_bias_sum",e[0].dataType,o,x));let v=Re(e[0].dataType),O=Re(1,x);return`

      ${k.registerUniforms(C).declareVariables(...M)}
      var<workgroup> sum_shared : array<${O}, ${b}>;
      var<workgroup> sum_squared_shared : array<${O}, ${b}>;

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
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${en(v,x,"value")};
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
        let mean = ${$t("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${$t("square_sum",x)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:c,dataType:1}),n>2&&S.push({dims:c,dataType:1}),n>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${m};${g};${_}`,inputDependencies:e.map((k,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:$})}},sp=(e,t)=>{ip(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(ap(e.inputs,t,e.outputCount,!1),{outputs:n})}}),op,bn,up,Wi,lp,dp,cp,pp,Vg=X(()=>{oe(),ue(),ze(),le(),op=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},bn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},up=(e,t)=>{if(e.length>1){let n=bn(e,1),r=bn(e,2),i=bn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),$e({starts:n,ends:r,axes:i})}else return t},Wi=(e,t,n,r,i)=>{let s=e;return e<0&&(s+=n[r[t]]),i[t]<0?Math.max(0,Math.min(s,n[r[t]]-1)):Math.max(0,Math.min(s,n[r[t]]))},lp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${re("uniforms.input_shape","i",n.length)};
            let steps_i = ${re("uniforms.steps","i",n.length)};
            let signs_i = ${re("uniforms.signs","i",n.length)};
            let starts_i = ${re("uniforms.starts","i",n.length)};
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
      }`,dp=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],s=bn(e,4);s.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((x,$)=>Wi(x,$,n,i,s)),o=t.ends.map((x,$)=>Wi(x,$,n,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let x=0;x<n.length;++x)i.includes(x)||(a.splice(x,0,0),o.splice(x,0,n[x]),s.splice(x,0,1));let u=s.map(x=>Math.sign(x));s.forEach((x,$,I)=>{if(x<0){let S=(o[$]-a[$])/x,k=a[$],C=k+S*s[$];a[$]=C,o[$]=k,I[$]=-x}});let d=n.slice(0);i.forEach((x,$)=>{d[x]=Math.ceil((o[x]-a[x])/s[x])});let c={dims:d,dataType:e[0].dataType},p=ne("output",e[0].dataType,d.length),f=q("input",e[0].dataType,e[0].dims.length),m=D.size(d),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],_=[{type:12,data:m},{type:12,data:a},{type:6,data:u},{type:12,data:s},...ie(e[0].dims,d)],b=x=>`
      ${x.registerUniforms(g).declareVariables(f,p)}
        ${lp(f,p,n)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:_})}},cp=(e,t)=>{op(e.inputs,t);let n=up(e.inputs,t);e.compute(dp(e.inputs,n),{inputs:[0]})},pp=e=>{let t=e.starts,n=e.ends,r=e.axes;return $e({starts:t,ends:n,axes:r})}}),hp,fp,mp,gp,Fg=X(()=>{oe(),ue(),ze(),xt(),le(),hp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},fp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),s=r.length,a=D.normalizeAxis(t.axis,s),o=a<r.length-1,u,d=[];o?(d=Array.from({length:s},(M,v)=>v),d[a]=s-1,d[s-1]=a,u=e.compute(Fe(n,d),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,p=c[s-1],f=i/p,m=Me(p),g=p/m,_=64;f===1&&(_=256);let b=(M,v)=>v===4?`max(max(${M}.x, ${M}.y), max(${M}.z, ${M}.w))`:v===2?`max(${M}.x, ${M}.y)`:v===3?`max(max(${M}.x, ${M}.y), ${M}.z)`:M,x=q("x",u.dataType,u.dims,m),$=ne("result",u.dataType,u.dims,m),I=x.type.value,S=Re(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,k=M=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${M.registerUniform("packedCols","i32").declareVariables(x,$)}
      ${M.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
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
          rowMaxShared = ${I}(${b("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
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
          rowSumShared = ${I}(${$t("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${m};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Fe(C,d),{inputs:[C]})},mp=(e,t)=>{hp(e.inputs),fp(e,t)},gp=e=>$e({axis:e.axis})}),Vi,yp,_p,wp,bp,Hg=X(()=>{oe(),ue(),le(),Vi=e=>Array.from(e.getBigInt64Array(),Number),yp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Vi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},_p=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},wp=(e,t)=>{let n=e[0].dims,r=t??Vi(e[1]),i=_p(n,r),s=D.size(i),a=e[0].dataType,o=q("input",a,n.length),u=ne("output",a,i.length),d=c=>`
      const inputShape = ${o.indices(...n)};
      ${c.registerUniform("output_size","u32").declareVariables(o,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ie(e[0].dims,i)]}),getShaderSource:d}},bp=e=>{yp(e.inputs),e.compute(wp(e.inputs),{inputs:[0]})}}),$p,xp,vp,jg=X(()=>{oe(),ue(),le(),$p=(e,t,n,r,i)=>{let s=ne("output_data",i,n.length,4),a=q("a_data",t[1].dataType,t[1].dims.length,4),o=q("b_data",t[2].dataType,t[2].dims.length,4),u=q("c_data",t[0].dataType,t[0].dims.length,4),d,c=(p,f,m)=>`select(${f}, ${p}, ${m})`;if(!r)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(f,m,g="")=>{let _=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,x=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${a.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${u.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${f}[${m}] = ${g}(${c(_,b,x)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},xp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,s=!(D.areEqual(t,n)&&D.areEqual(n,r)),a=t,o=D.size(t);if(s){let d=Qt.calcShape(Qt.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=D.size(a)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>$p(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(r,t,n,a)]})}},vp=e=>{e.compute(xp(e.inputs))}}),Sp,Kg=X(()=>{ug(),si(),lg(),dg(),cg(),pg(),hg(),_g(),bg(),$g(),xg(),vg(),Sg(),Ig(),Tg(),kg(),Eg(),Cg(),Mg(),zg(),Ag(),Rg(),Og(),Bg(),Ng(),Nd(),Dg(),Ug(),Pg(),Lg(),qg(),ri(),Gg(),Hd(),Wg(),Vg(),Fg(),Wd(),Hg(),xt(),di(),jg(),Sp=new Map([["Abs",[iu]],["Acos",[au]],["Acosh",[su]],["Add",[ju]],["ArgMax",[Wo,ai]],["ArgMin",[Go,ai]],["Asin",[ou]],["Asinh",[uu]],["Atan",[lu]],["Atanh",[du]],["Attention",[Xo]],["AveragePool",[xc,$c]],["BatchNormalization",[Jo]],["BiasAdd",[nu]],["BiasSplitGelu",[Vu]],["Cast",[pu,cu]],["Ceil",[mu]],["Clip",[fu]],["Concat",[ol,ul]],["Conv",[vi,$i]],["ConvTranspose",[Bl,Al]],["Cos",[gu]],["Cosh",[yu]],["CumSum",[Dl,Ul]],["DepthToSpace",[Gl,Wl]],["DequantizeLinear",[zc,Ac]],["Div",[Ku]],["Einsum",[Xl,Yl]],["Elu",[_u,fn]],["Equal",[Xu]],["Erf",[wu]],["Exp",[bu]],["Expand",[ed]],["FastGelu",[nd]],["Floor",[$u]],["FusedConv",[vi,$i]],["Gather",[sd,ad]],["GatherElements",[yd,gd]],["GatherBlockQuantized",[pd,hd]],["GatherND",[ud,ld]],["Gelu",[xu]],["Gemm",[$d,bd]],["GlobalAveragePool",[Sc,vc]],["GlobalMaxPool",[Ec,kc]],["Greater",[Ju]],["GreaterOrEqual",[tl]],["GridSample",[Md,zd]],["GroupQueryAttention",[Yd]],["HardSigmoid",[Mu,Cu]],["InstanceNormalization",[Jd]],["LayerNormalization",[nc]],["LeakyRelu",[vu,fn]],["Less",[el]],["LessOrEqual",[nl]],["Log",[Uu]],["MatMul",[ic]],["MatMulNBits",[uc,lc]],["MaxPool",[Ic,Tc]],["Mul",[Yu]],["MultiHeadAttention",[Bd,Rd]],["Neg",[Iu]],["Not",[Su]],["Pad",[_c]],["Pow",[Zu]],["QuickGelu",[qu,fn]],["Range",[Bc]],["Reciprocal",[Tu]],["ReduceMin",[Do]],["ReduceMean",[Ao]],["ReduceMax",[No]],["ReduceSum",[Po]],["ReduceProd",[Uo]],["ReduceL1",[Ro]],["ReduceL2",[Oo]],["ReduceLogSum",[qo]],["ReduceLogSumExp",[Bo]],["ReduceSumSquare",[Lo]],["Relu",[ku]],["Resize",[np,rp]],["RotaryEmbedding",[Fd]],["ScatterND",[Pc,Uc]],["Sigmoid",[Eu]],["Sin",[zu]],["Sinh",[Au]],["Slice",[cp,pp]],["SkipLayerNormalization",[sp]],["Split",[qd,Gd]],["Sqrt",[Ru]],["Softmax",[mp,gp]],["Sub",[Qu]],["Tan",[Ou]],["Tanh",[Bu]],["ThresholdedRelu",[Du,fn]],["Tile",[bp]],["Transpose",[Qs,Js]],["Where",[vp]]])}),Ip,Xg=X(()=>{He(),ht(),le(),Ip=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){it(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Xe(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=Hs(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${s}`,o=n.createShaderModule({code:a,label:e.name});ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Xe(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let s=t*n*r,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Tp={};Yt(Tp,{WebGpuBackend:()=>Mp});var kp,Ep,Cp,Mp,Yg=X(()=>{He(),oe(),ht(),As(),sg(),Kg(),Xg(),kp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let s=e[r].dims.length;n.push(`${i};${s}`);break}case"dims":{let s=e[r].dims.join(",");n.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Ep=(e,t,n)=>{var i,s;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${kp(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Cp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Mp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Cp(a),this.gpuDataManager=Gs(this),this.programManager=new Ip(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Lr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=n[i],a=s.kernelId,o=this.kernels.get(a),u=o.kernelType,d=o.kernelName,c=s.programName,p=s.inputTensorViews,f=s.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(x=>({dims:x.dims,dataType:pt(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:pt(x.dataType)})),kernelId:a,kernelType:u,kernelName:d,programName:c,startTime:_,endTime:b});else{let x="";p.forEach((I,S)=>{x+=`input[${S}]: [${I.dims}] | ${pt(I.dataType)}, `});let $="";f.forEach((I,S)=>{$+=`output[${S}]: [${I.dims}] | ${pt(I.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${d}|${c}" ${x}${$}start time: ${_} ns, execution time: ${b-_} ns`)}An("GPU",`${c}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Xe()}run(e,t,n,r,i,s){it(e.name);let a=[];for(let $=0;$<t.length;++$){let I=t[$].data;if(I===0)continue;let S=this.gpuDataManager.get(I);if(!S)throw new Error(`no GPU data for input: ${I}`);a.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),c=n.length===0?o.map(($,I)=>I):n;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let p=[],f=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(c[$])||c[$]<-3||c[$]>=s)throw new Error(`Invalid output index: ${c[$]}`);if(c[$]===-3)continue;let I=c[$]===-1,S=c[$]===-2,k=I||S?i(o[$].dataType,o[$].dims):r(c[$],o[$].dataType,o[$].dims);if(p.push(k),k.data===0)continue;let C=this.gpuDataManager.get(k.data);if(!C)throw new Error(`no GPU data for output: ${k.data}`);if(I&&this.temporaryData.push(C),S){let M=this.kernelPersistentData.get(this.currentKernelId);M||(M=[],this.kernelPersistentData.set(this.currentKernelId,M)),M.push(C)}f.push(C)}if(a.length!==t.length||f.length!==p.length){if(f.length===0)return Xe(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let $=0,I=[];d.forEach(M=>{let v=typeof M.data=="number"?[M.data]:M.data;if(v.length===0)return;let O=M.type===10?2:4,N,F;M.type===10?(F=v.length>4?16:v.length>2?8:v.length*O,N=v.length>4?16:O*v.length):(F=v.length<=2?v.length*O:16,N=16),$=Math.ceil($/F)*F,I.push($);let L=M.type===10?8:4;$+=v.length>4?Math.ceil(v.length/L)*N:v.length*O});let S=16;$=Math.ceil($/S)*S;let k=new ArrayBuffer($);d.forEach((M,v)=>{let O=I[v],N=typeof M.data=="number"?[M.data]:M.data;if(M.type===6)new Int32Array(k,O,N.length).set(N);else if(M.type===12)new Uint32Array(k,O,N.length).set(N);else if(M.type===10)new Uint16Array(k,O,N.length).set(N);else if(M.type===1)new Float32Array(k,O,N.length).set(N);else throw new Error(`Unsupported uniform type: ${pt(M.type)}`)});let C=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,k,0,$),this.gpuDataManager.release(C.id),m={offset:0,size:$,buffer:C.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),_=g[1]===1&&g[2]===1,b=Ep(e,t,_),x=this.programManager.getArtifact(b);if(x||(x=this.programManager.build(e,g),this.programManager.setArtifact(b,x),ge("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let $=0;$<d.length;$++){let I=d[$],S=I.type,k=typeof I.data=="number"?1:I.data.length,[C,M]=x.uniformVariablesInfo[$];if(S!==C||k!==M)throw new Error(`Uniform variable ${$} mismatch: expect type ${C} with size ${M}, got type ${S} with size ${k} in program "${x.programInfo.name}".`)}}if(ge("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(x,a,f,g,m),Xe(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Sp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,s=r.kernelName,a=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ge("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{u&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,s);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Qr(this,e,t);return qr(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),zp={};Yt(zp,{init:()=>Rp});var Yn,Ap,Rp,Zg=X(()=>{oe(),ht(),ue(),ag(),Yn=class Nm{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new Nm(this.module,this.dataType,this.data,t)}},Ap=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,s));let a=Number(e.getValue(r*i++,s));this.outputCount=Number(e.getValue(r*i++,s)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,s));let o=[];for(let u=0;u<a;u++){let d=Number(e.getValue(r*i++,s)),c=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,s)),f=[];for(let m=0;m<p;m++)f.push(Number(e.getValue(r*i++,s)));o.push(new Yn(e,d,c,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new Yn(this.module,u,this.output(o,d),d),s=(o,u)=>{let d=Nt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Yn(this.module,o,c,u)};return this.backend.run(e,n,r,i,s,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Rp=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Yg(),sn(Tp)).WebGpuBackend,a=new s;await a.initialize(n,r),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,d,c=!1)=>{if(c)ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),a.memcpy(Number(o),Number(u));else{ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(u),p)}},async(o,u,d)=>{ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>a.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,d,c)=>{ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new Ap(t,a,Number(u));return a.computeKernel(Number(o),p,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Us(n);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,u,d,c)=>s.ensureTensor(a,o,u,d,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!n.trace])}}}),Op,Fi,Hi,vt,Bp,ji,Zn,Ki,Xi,Yi,Zi,Qi,Ji,Np=X(()=>{He(),ng(),rg(),oe(),Rt(),Br(),xs(),Op=(e,t)=>{Ee()._OrtInit(e,t)!==0&&xe("Can't initialize onnxruntime.")},Fi=async e=>{Op(e.wasm.numThreads,Dn(e.logLevel))},Hi=async(e,t)=>{var r,i;(i=(r=Ee()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(Zg(),sn(zp)).init;t==="webgpu"&&await s("webgpu",Ee(),e,n),t==="webnn"&&await s("webnn",Ee(),e)}},vt=new Map,Bp=e=>{let t=Ee(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&xe("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+r,s))]}finally{t.stackRestore(n)}},ji=(e,t)=>{let n=Ee(),r=n.stackSave(),i=0;try{let s=n.PTR_SIZE,a=n.stackAlloc(2*s);n._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&xe("Can't get session input/output metadata.");let o=Number(n.getValue(a,"*"));i=Number(n.getValue(a+s,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let d=n.HEAPU32[i/4+1],c=[];for(let p=0;p<d;p++){let f=Number(n.getValue(i+8+p*s,"*"));c.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(p+d)*s,"*")))}return[o,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Zn=e=>{let t=Ee(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ki=async(e,t)=>{var p,f,m,g;let n,r,i=Ee();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Zn(e);let s=0,a=0,o=0,u=[],d=[],c=[];try{if([a,u]=await $s(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let O of t.externalData){let N=typeof O=="string"?O:O.path;v.push(Pr(typeof O=="string"?O:O.data).then(F=>{i.mountExternalData(N,F)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let O=v,N=O==null?void 0:O.context,F=O==null?void 0:O.gpuDevice,L=O==null?void 0:O.deviceType,V=O==null?void 0:O.powerPreference;N?i.currentContext=N:F?i.currentContext=await i.webnnCreateMLContext(F):i.currentContext=await i.webnnCreateMLContext({deviceType:L,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(n,r,a),(p=i.webgpuOnCreateSession)==null||p.call(i,s),s===0&&xe("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,b]=Bp(s),x=!!(t!=null&&t.enableGraphCapture),$=[],I=[],S=[],k=[],C=[];for(let v=0;v<_;v++){let[O,N,F]=ji(s,v);O===0&&xe("Can't get an input name."),d.push(O);let L=i.UTF8ToString(O);$.push(L),S.push(N===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:pt(N),shape:F})}for(let v=0;v<b;v++){let[O,N,F]=ji(s,v+_);O===0&&xe("Can't get an output name."),c.push(O);let L=i.UTF8ToString(O);I.push(L),k.push(N===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:pt(N),shape:F});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[L])??"cpu",z=i.webnnIsGraphOutput;if(V==="cpu"&&z&&z(s,L)){C.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(x&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(V)}}let M=null;return C.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&xe("Can't create IO binding."),M={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Ur(v))}),vt.set(s,[s,d,c,M,x,!1]),[s,$,I,S,k]}catch(_){throw d.forEach(b=>i._OrtFree(b)),c.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&xe("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&xe("Can't release session."),_}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&xe("Can't release session options."),u.forEach(_=>i._free(_)),(g=i.unmountExternalData)==null||g.call(i)}},Xi=e=>{var u,d,c;let t=Ee(),n=vt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,s,a,o]=n;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&xe("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&xe("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&xe("Can't release session."),vt.delete(e)},Yi=async(e,t,n,r,i,s,a=!1)=>{if(!e){t.push(0);return}let o=Ee(),u=o.PTR_SIZE,d=e[0],c=e[1],p=e[3],f=p,m,g;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let x=e[2].gpuBuffer;g=Nt(Bt(d),c);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,s,x,g)}}else if(p==="ml-tensor"){let x=e[2].mlTensor;g=Nt(Bt(d),c);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,x,Bt(d),c)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,m=o._malloc(g),n.push(m);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(m+$*u,Ye(x[$],n),"*")}}else{let $=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&$&&I){let S=o.UTF8ToString(i);if($(r,S)||I(r,S)){let k=Bt(d);g=Nt(k,c),f="ml-tensor";let C=o.webnnCreateTemporaryTensor,M=o.webnnUploadTensor;if(!C||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await C(r,k,c);M(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),m=v}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}}let _=o.stackSave(),b=o.stackAlloc(4*c.length);try{c.forEach(($,I)=>o.setValue(b+I*u,$,u===4?"i32":"i64"));let x=o._OrtCreateTensor(Bt(d),m,g,b,c.length,Ur(f));x===0&&xe(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(x)}finally{o.stackRestore(_)}},Zi=async(e,t,n,r,i,s)=>{var L,V,z,G;let a=Ee(),o=a.PTR_SIZE,u=vt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],c=u[1],p=u[2],f=u[3],m=u[4],g=u[5],_=t.length,b=r.length,x=0,$=[],I=[],S=[],k=[],C=[],M=a.stackSave(),v=a.stackAlloc(_*o),O=a.stackAlloc(_*o),N=a.stackAlloc(b*o),F=a.stackAlloc(b*o);try{[x,$]=gs(s),zt("wasm prepareInputOutputTensor");for(let U=0;U<_;U++)await Yi(n[U],I,k,e,c[t[U]],t[U],m);for(let U=0;U<b;U++)await Yi(i[U],S,k,e,p[r[U]],_+r[U],m);At("wasm prepareInputOutputTensor");for(let U=0;U<_;U++)a.setValue(v+U*o,I[U],"*"),a.setValue(O+U*o,c[t[U]],"*");for(let U=0;U<b;U++)a.setValue(N+U*o,S[U],"*"),a.setValue(F+U*o,p[r[U]],"*");if(f&&!g){let{handle:U,outputPreferredLocations:J,outputPreferredLocationsEncoded:W}=f;if(c.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${c.length}).`);zt("wasm bindInputsOutputs");for(let Y=0;Y<_;Y++){let A=t[Y];await a._OrtBindInput(U,c[A],I[Y])!==0&&xe(`Can't bind input[${Y}] for session=${e}.`)}for(let Y=0;Y<b;Y++){let A=r[Y];(L=i[Y])!=null&&L[3]?(C.push(S[Y]),a._OrtBindOutput(U,p[A],S[Y],0)!==0&&xe(`Can't bind pre-allocated output[${Y}] for session=${e}.`)):a._OrtBindOutput(U,p[A],0,W[A])!==0&&xe(`Can't bind output[${Y}] to ${J[Y]} for session=${e}.`)}At("wasm bindInputsOutputs"),vt.set(e,[d,c,p,f,m,!0])}(V=a.jsepOnRunStart)==null||V.call(a,d),(z=a.webnnOnRunStart)==null||z.call(a,d);let H;f?H=await a._OrtRunWithBinding(d,f.handle,b,N,x):H=await a._OrtRun(d,O,v,_,F,b,N,x),H!==0&&xe("failed to call OrtRun().");let K=[],ae=[];zt("wasm ProcessOutputTensor");for(let U=0;U<b;U++){let J=Number(a.getValue(N+U*o,"*"));if(J===S[U]||C.includes(S[U])){K.push(i[U]),J!==S[U]&&a._OrtReleaseTensor(J)!==0&&xe("Can't release tensor.");continue}let W=a.stackSave(),Y=a.stackAlloc(4*o),A=!1,B,j=0;try{a._OrtGetTensorData(J,Y,Y+o,Y+2*o,Y+3*o)!==0&&xe(`Can't access output tensor data on index ${U}.`);let te=o===4?"i32":"i64",Z=Number(a.getValue(Y,te));j=a.getValue(Y+o,"*");let de=a.getValue(Y+o*2,"*"),ve=Number(a.getValue(Y+o*3,te)),fe=[];for(let ye=0;ye<ve;ye++)fe.push(Number(a.getValue(de+ye*o,te)));a._OrtFree(de)!==0&&xe("Can't free memory for tensor dims.");let Ie=fe.reduce((ye,se)=>ye*se,1);B=pt(Z);let Se=f==null?void 0:f.outputPreferredLocations[r[U]];if(B==="string"){if(Se==="gpu-buffer"||Se==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ye=[];for(let se=0;se<Ie;se++){let _e=a.getValue(j+se*o,"*"),Ue=a.getValue(j+(se+1)*o,"*"),Oe=se===Ie-1?void 0:Ue-_e;ye.push(a.UTF8ToString(_e,Oe))}K.push([B,fe,ye,"cpu"])}else if(Se==="gpu-buffer"&&Ie>0){let ye=a.jsepGetBuffer;if(!ye)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=ye(j),_e=Nt(Z,Ie);if(_e===void 0||!Nr(B))throw new Error(`Unsupported data type: ${B}`);A=!0,K.push([B,fe,{gpuBuffer:se,download:a.jsepCreateDownloader(se,_e,B),dispose:()=>{a._OrtReleaseTensor(J)!==0&&xe("Can't release tensor.")}},"gpu-buffer"])}else if(Se==="ml-tensor"&&Ie>0){let ye=a.webnnEnsureTensor,se=a.webnnIsGraphInputOutputTypeSupported;if(!ye||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Nt(Z,Ie)===void 0||!Dr(B))throw new Error(`Unsupported data type: ${B}`);if(!se(e,B,!1))throw new Error(`preferredLocation "ml-tensor" for ${B} output is not supported by current WebNN Context.`);let _e=await ye(e,j,Z,fe,!1);A=!0,K.push([B,fe,{mlTensor:_e,download:a.webnnCreateMLTensorDownloader(j,B),dispose:()=>{a.webnnReleaseTensorId(j),a._OrtReleaseTensor(J)}},"ml-tensor"])}else if(Se==="ml-tensor-cpu-output"&&Ie>0){let ye=a.webnnCreateMLTensorDownloader(j,B)(),se=K.length;A=!0,ae.push((async()=>{let _e=[se,await ye];return a.webnnReleaseTensorId(j),a._OrtReleaseTensor(J),_e})()),K.push([B,fe,[],"cpu"])}else{let ye=Nn(B),se=new ye(Ie);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(a.HEAPU8.subarray(j,j+se.byteLength)),K.push([B,fe,se,"cpu"])}}finally{a.stackRestore(W),B==="string"&&j&&a._free(j),A||a._OrtReleaseTensor(J)}}f&&!m&&(a._OrtClearBoundOutputs(f.handle)!==0&&xe("Can't clear bound outputs."),vt.set(e,[d,c,p,f,m,!1]));for(let[U,J]of await Promise.all(ae))K[U][2]=J;return At("wasm ProcessOutputTensor"),K}finally{(G=a.webnnOnRunEnd)==null||G.call(a,d),a.stackRestore(M),I.forEach(H=>a._OrtReleaseTensor(H)),S.forEach(H=>a._OrtReleaseTensor(H)),k.forEach(H=>a._free(H)),x!==0&&a._OrtReleaseRunOptions(x),$.forEach(H=>a._free(H))}},Qi=e=>{let t=Ee(),n=vt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&xe("Can't get an profile file name."),t._OrtFree(i)},Ji=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),St,qe,tn,$n,xn,Qn,ea,Jn,Wt,Vt,Dp,Up,Pp,Lp,qp,Gp,Wp,Vp,Fp=X(()=>{He(),Np(),Rt(),zr(),St=()=>!!ke.wasm.proxy&&typeof document<"u",tn=!1,$n=!1,xn=!1,Jn=new Map,Wt=(e,t)=>{let n=Jn.get(e);n?n.push(t):Jn.set(e,[t])},Vt=()=>{if(tn||!$n||xn||!qe)throw new Error("worker not ready")},Dp=e=>{switch(e.data.type){case"init-wasm":tn=!1,e.data.err?(xn=!0,ea[1](e.data.err)):($n=!0,ea[0]()),Qn&&(URL.revokeObjectURL(Qn),Qn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Jn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Up=async()=>{if(!$n){if(tn)throw new Error("multiple calls to 'initWasm()' detected.");if(xn)throw new Error("previous call to 'initWasm()' failed.");if(tn=!0,St())return new Promise((e,t)=>{qe==null||qe.terminate(),cs().then(([n,r])=>{try{qe=r,qe.onerror=s=>t(s),qe.onmessage=Dp,ea=[e,t];let i={type:"init-wasm",in:ke};!i.in.wasm.wasmPaths&&(n||kr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),qe.postMessage(i),Qn=n}catch(i){t(i)}},t)});try{await Or(ke.wasm),await Fi(ke),$n=!0}catch(e){throw xn=!0,e}finally{tn=!1}}},Pp=async e=>{if(St())return Vt(),new Promise((t,n)=>{Wt("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ke}};qe.postMessage(r)});await Hi(ke,e)},Lp=async e=>St()?(Vt(),new Promise((t,n)=>{Wt("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};qe.postMessage(r,[e.buffer])})):Zn(e),qp=async(e,t)=>{if(St()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Vt(),new Promise((n,r)=>{Wt("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),qe.postMessage(i,s)})}else return Ki(e,t)},Gp=async e=>{if(St())return Vt(),new Promise((t,n)=>{Wt("release",[t,n]);let r={type:"release",in:e};qe.postMessage(r)});Xi(e)},Wp=async(e,t,n,r,i,s)=>{if(St()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Vt(),new Promise((a,o)=>{Wt("run",[a,o]);let u=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:s}};qe.postMessage(d,Ji(u))})}else return Zi(e,t,n,r,i,s)},Vp=async e=>{if(St())return Vt(),new Promise((t,n)=>{Wt("end-profiling",[t,n]);let r={type:"end-profiling",in:e};qe.postMessage(r)});Qi(e)}}),ta,Hp,jp,Qg=X(()=>{He(),Fp(),oe(),vr(),xs(),ta=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Hp=e=>{switch(e[3]){case"cpu":return new We(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Nr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return We.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Dr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return We.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},jp=class{async fetchModelAndCopyToWasmMemory(e){return Lp(await Pr(e))}async loadModel(e,t){it();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await qp(n,t),Xe()}async dispose(){return Gp(this.sessionId)}async run(e,t,n){it();let r=[],i=[];Object.entries(e).forEach(p=>{let f=p[0],m=p[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let s=[],a=[];Object.entries(t).forEach(p=>{let f=p[0],m=p[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);s.push(m),a.push(g)});let o=r.map((p,f)=>ta(p,()=>`input "${this.inputNames[i[f]]}"`)),u=s.map((p,f)=>p?ta(p,()=>`output "${this.outputNames[a[f]]}"`):null),d=await Wp(this.sessionId,i,o,a,u,n),c={};for(let p=0;p<d.length;p++)c[this.outputNames[a[p]]]=s[p]??Hp(d[p]);return Xe(),c}startProfiling(){}endProfiling(){Vp(this.sessionId)}}}),Kp={};Yt(Kp,{OnnxruntimeWebAssemblyBackend:()=>ra,initializeFlags:()=>na,wasmBackend:()=>Xp});var na,ra,Xp,Jg=X(()=>{He(),Fp(),Qg(),na=()=>{(typeof ke.wasm.initTimeout!="number"||ke.wasm.initTimeout<0)&&(ke.wasm.initTimeout=0);let e=ke.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ke.wasm.simd=!1),typeof ke.wasm.proxy!="boolean"&&(ke.wasm.proxy=!1),typeof ke.wasm.trace!="boolean"&&(ke.wasm.trace=!1),typeof ke.wasm.numThreads!="number"||!Number.isInteger(ke.wasm.numThreads)||ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ke.wasm.numThreads=1;else{let t=typeof navigator>"u"?Um("node:os").cpus().length:navigator.hardwareConcurrency;ke.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ra=class{async init(e){na(),await Up(),await Pp(e)}async createInferenceSessionHandler(e,t){let n=new jp;return await n.loadModel(e,t),n}},Xp=new ra});He(),He(),He();var e0="1.27.0";{let e=(Jg(),sn(Kp)).wasmBackend;Zt("webgpu",e,5),Zt("webnn",e,5),Zt("cpu",e,10),Zt("wasm",e,10)}Object.defineProperty(ke.versions,"web",{value:e0,enumerable:!0});/**
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
 */const t0=114;function n0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),s=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-s)/2),resizedWidth:i,resizedHeight:s}}function r0(e,t,n){const{width:r,height:i,channels:s,data:a}=e,o=new Uint8Array(t*n*3),u=r/t,d=i/n;for(let c=0;c<n;c++){const p=(c+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,p-f));for(let _=0;_<t;_++){const b=(_+.5)*u-.5,x=Math.max(0,Math.min(r-1,Math.floor(b))),$=Math.min(r-1,x+1),I=Math.max(0,Math.min(1,b-x)),S=(f*r+x)*s,k=(f*r+$)*s,C=(m*r+x)*s,M=(m*r+$)*s,v=(c*t+_)*3;for(let O=0;O<3;O++){const N=a[S+O]*(1-I)+a[k+O]*I,F=a[C+O]*(1-I)+a[M+O]*I;o[v+O]=Math.min(255,Math.max(0,Math.round(N*(1-g)+F*g)))}}}return o}function i0(e,t){const n=n0(e.width,e.height,t),r=r0(e,n.resizedWidth,n.resizedHeight),i=t*t,s=new Float32Array(3*i).fill(t0/255);for(let a=0;a<n.resizedHeight;a++){const o=(a+n.padY)*t+n.padX,u=a*n.resizedWidth;for(let d=0;d<n.resizedWidth;d++){const c=(u+d)*3,p=o+d;s[p]=r[c]/255,s[i+p]=r[c+1]/255,s[2*i+p]=r[c+2]/255}}return{tensor:s,params:n}}function a0(e,t,n,r){const i=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const o=e[a*6],u=e[a*6+1],d=e[a*6+2],c=e[a*6+3],p=e[a*6+4],f=e[a*6+5];if(p<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,_=(u-t.padY)/t.scale,b=(d-t.padX)/t.scale,x=(c-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(g),Math.trunc(_),Math.trunc(b-g),Math.trunc(x-_)],boxFloat:[g,_,b-g,x-_]})}return i}function vn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Yp(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Zp(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,o)=>a-o),r=t/100*(n.length-1),i=Math.floor(r),s=Math.ceil(r);return i===s?n[i]:n[i]*(s-r)+n[s]*(r-i)}const s0=.6,o0=.8;function Qp(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<n)continue;const o=(e[s*6]-t.padX)/t.scale,u=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,c=(e[s*6+3]-t.padY)/t.scale,p=vn((o+d)/2),f=vn((u+c)/2),m=vn((d-o+(c-u))/4);m>=1&&r.push({cx:p,cy:f,r:m})}return r}function u0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(s0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function l0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=o0*(n.r+r.r))&&t.push(n);return t}function d0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Yp(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),s=Math.floor(r.cy/t);return i!==s?i-s:n.cx-r.cx})}function Jp(e,t,n){const r=Qp(e,t,n);return r.length===0?[]:d0(l0(u0(r)))}function c0(e,t,n){return Qp(e,t,n)}function eh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<n||r.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return r}const th=["brown","grey","blue","green","yellow","red","purple"],p0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function nh(e,t,n){return a0(e,t,n,th.length).map(r=>{const i=th[r.classIndex];return{color:i,family:p0[i],box:r.box,confidence:r.confidence}})}const h0=8,f0=.8,rh=1.25;function m0(e){if(e.length<h0)return[];const t=[],n=[];for(const a of e){const[,,o,u]=a.box;o>u*rh?t.push(a):u>o*rh&&n.push(a)}const[r,i,s]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<f0*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${s} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const mt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function nt(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),s=r-i,a=r===0?0:Math.round(255*s/r);if(s===0)return{h:0,s:a,v:r};let o;return r===e?o=60*(t-n)/s:r===t?o=120+60*(n-e)/s:o=240+60*(e-t)/s,o<0&&(o+=360),{h:Math.round(o/2),s:a,v:r}}const g0=.42,y0=22,_0=43,w0=120,b0=1.5,$0=.72,x0=110,ih=3;function Sn(e,t,n){const{width:r,height:i,channels:s,data:a}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),d=Math.trunc(Math.min(r,i)*g0);if(d<1)return 0;let c=0;for(let p=0;p<i;p++)for(let f=0;f<r;f++){if((f-o)**2+(p-u)**2>d*d)continue;const m=(p*r+f)*s,g=a[m],_=a[m+1],b=a[m+2];!t&&g>=250&&_>=250&&b>=250||(n(g,_,b),c+=1)}return c}function v0(e){let t=0,n=0,r=0,i=Sn(e,!1,(s,a,o)=>{const u=nt(s,a,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Sn(e,!0,(s,a,o)=>{const u=nt(s,a,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function S0(e){let t=0,n=0,r=Sn(e,!1,(s,a)=>{t+=s,n+=a});if(r===0&&(r=Sn(e,!0,(s,a)=>{t+=s,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function I0(e){let t=0;const n=Sn(e,!0,(r,i,s)=>{t+=nt(r,i,s).s});return n===0?null:t/n}function T0(e){const t=v0(e);if(t===null||t.s<=y0)return 1;if(t.s>=w0){const n=S0(e);return n!==null&&n>=b0?6:3}return t.s>=_0?3:6}function k0(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,o)=>a-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,o)=>e[a].r-e[o].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>s.get(a))}function E0(e,t){const n=[...t];if(e.length<ih||t.length!==e.length)return n;const r=e.map(a=>I0(a)),i=r.filter(a=>a!==null);if(i.length<ih)return n;const s=Yp(i);return s<=0||r.forEach((a,o)=>{a!==null&&n[o]!==1&&a<$0*s&&a<x0&&(n[o]=1)}),n}function ah(e,t){const{cx:n,cy:r,r:i}=t,s=Math.max(0,n-i),a=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),d=Math.max(0,o-s),c=Math.max(0,u-a),p=new Uint8Array(d*c*3);for(let f=0;f<c;f++)for(let m=0;m<d;m++){const g=(f*d+m)*3;if((m+s-n)**2+(f+a-r)**2<=i*i){const b=((f+a)*e.width+(m+s))*e.channels;p[g]=e.data[b],p[g+1]=e.data[b+1],p[g+2]=e.data[b+2]}else p[g]=255,p[g+1]=255,p[g+2]=255}return{width:d,height:c,channels:3,data:p}}function C0(e,t){const n=t.map(s=>ah(e,s)),r=n.map(s=>T0(s)),i=k0(t,r);return E0(n,i)}function M0(e){const{width:t,height:n,channels:r,data:i}=e,s=new Uint8Array(t*n);for(let a=0,o=0;a<s.length;a++,o+=r)s[a]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:s}}function sh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,s=e.height/n;for(let a=0;a<n;a++){const o=a*s,u=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const c=d*i,p=Math.min((d+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const _=Math.min(g+1,u)-Math.max(g,o);if(!(_<=0))for(let b=Math.floor(c);b<p;b++){const x=Math.min(b+1,p)-Math.max(b,c);x<=0||(f+=e.data[g*e.width+b]*x*_,m+=x*_)}}r[a*t+d]=Math.min(255,Math.max(0,vn(f/m)))}}return{width:t,height:n,data:r}}function z0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const s=255/(n-t[r]),a=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],a[u]=Math.min(255,Math.max(0,vn(o*s)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function A0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const c=a+d,p=s+u;if(!(c<0||c>=t||p<0||p>=n)&&r[p*t+c]===0){o=!1;break}}i[s*t+a]=o&&r[s*t+a]>0?255:0}return{width:t,height:n,data:i}}function R0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const c=a+d,p=s+u;if(c>=0&&c<t&&p>=0&&p<n&&r[p*t+c]>0){o=!0;break}}i[s*t+a]=o?255:0}return{width:t,height:n,data:i}}function ia(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),s=[],a=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let d=0,c=0;a[c++]=u,i[u]=o;let p=0,f=0,m=0;for(;d<c;){const g=a[d++],_=g%t,b=g/t|0;p+=1,f+=_,m+=b;for(let x=-1;x<=1;x++)for(let $=-1;$<=1;$++){if($===0&&x===0)continue;const I=_+$,S=b+x;if(I<0||I>=t||S<0||S>=n)continue;const k=S*t+I;r[k]>0&&i[k]===0&&(i[k]=o,a[c++]=k)}}s[o]={area:p,centroidX:f/p,centroidY:m/p},o+=1}return{labels:i,stats:s}}function O0(e,t,n){return oh(Float32Array.from(e.data),e.width,t,n)}function oh(e,t,n,r){const i=new Float32Array(t*t),s=t/2,a=-n*Math.PI/180,o=Math.cos(a),u=Math.sin(a);for(let d=0;d<t;d++)for(let c=0;c<t;c++){const p=c-s,f=d-s,m=o*p-u*f+s,g=u*p+o*f+s,_=Math.floor(m),b=Math.floor(g),x=m-_,$=g-b,I=(C,M)=>C>=0&&C<t&&M>=0&&M<t?e[M*t+C]:r,S=I(_,b)*(1-x)+I(_+1,b)*x,k=I(_,b+1)*(1-x)+I(_+1,b+1)*x;i[d*t+c]=S*(1-$)+k*$}return i}const B0=.9,N0=.34,D0=[.55,.6,.66,.72],U0=22,P0=88,L0=35,nn=28,aa=4,q0=Array.from({length:15},(e,t)=>-21+t*3),uh=[-2,0,2],G0=3,W0=.3;function V0(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function F0(e){let t=e.width,n=-1,r=e.height,i=-1,s=0;for(let _=0;_<e.height;_++)for(let b=0;b<e.width;b++)e.data[_*e.width+b]>0&&(s+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,_),i=Math.max(i,_));if(s<8)return null;const a=n-t+1,o=i-r+1,u=Math.max(o,a),d=new Uint8Array(u*u),c=Math.floor((u-a)/2),p=Math.floor((u-o)/2);for(let _=0;_<o;_++)for(let b=0;b<a;b++)d[(_+p)*u+(b+c)]=e.data[(_+r)*e.width+(b+t)];const f=nn-2*aa,m=sh({width:u,height:u,data:d},f,f),g=new Float32Array(nn*nn);for(let _=0;_<f;_++)for(let b=0;b<f;b++)g[(_+aa)*nn+(b+aa)]=m.data[_*f+b]>110?1:0;return g}function H0(e,t){const{width:n,height:r,channels:i,data:s}=e,a=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*N0);if(u<4)return null;const d=a-u,c=o-u,p=2*u,f=2*u;if(p<6||f<6)return null;const m=new Int16Array(p*f),g=new Int16Array(p*f),_=new Int16Array(p*f),b=new Uint8Array(p*f),x=[],$=Math.min(p,f)/2;for(let U=0;U<p;U++)for(let J=0;J<f;J++){const W=((U+d)*n+(J+c))*i,{h:Y,s:A,v:B}=nt(s[W],s[W+1],s[W+2]),j=U*f+J;m[j]=Y,g[j]=A,_[j]=B,Math.sqrt((J-f/2)**2+(U-p/2)**2)/$<=t&&(b[j]=1,x.push(B))}if(x.length<16)return null;const I=Zp(x,55);let S=0,k=0,C=0;const M=U=>m[U]>=U0&&m[U]<=P0&&g[U]>=L0,v=U=>_[U]>=I&&g[U]<=95&&!M(U)&&b[U]===1;for(let U=0;U<p*f;U++)b[U]===1&&(C+=1,_[U]>=130&&!M(U)&&(S+=1),v(U)&&(k+=1));const O=S>.5*C&&k<.15*C,N=new Uint8Array(p*f);if(O){const U=Zp(x,45);for(let J=0;J<p*f;J++)N[J]=b[J]===1&&_[J]<=U?255:0}else for(let U=0;U<p*f;U++)N[U]=v(U)?255:0;const F={width:f,height:p,data:N},L=A0(F);let V=ia(L),z=V;if(V.stats.length<=1&&(V=ia(F),z=V,V.stats.length<=1))return null;const G=Math.min(p,f)/2;let H=0,K=-1;for(let U=1;U<z.stats.length;U++){const J=z.stats[U];if(J===void 0)continue;const W=Math.hypot(J.centroidX-f/2,J.centroidY-p/2)/G,Y=J.area*(1-.6*Math.min(W,1));Y>K&&(K=Y,H=U)}if(H===0)return null;const ae=new Uint8Array(p*f);for(let U=0;U<p*f;U++)ae[U]=z.labels[U]===H?255:0;return F0(R0({width:f,height:p,data:ae}))}function j0(e,t,n,r,i,s){const a=nn;let o=0,u=0;for(let d=0;d<a;d++){const c=d-s;if(!(c<0||c>=a))for(let p=0;p<a;p++){const f=p-i;if(f<0||f>=a)continue;const m=e[c*a+f];m!==0&&(u+=m,o+=m*n[d*a+p])}}return o/(u+r-o+1e-6)}function K0(e,t){const n=t.reduce((i,s)=>i+s,0);let r=-1;for(const i of q0){const s=i===0?e:oh(e,nn,i,0),a=s.reduce((o,u)=>o+u,0);for(const o of uh)for(const u of uh){const d=j0(s,a,t,n,o,u);d>r&&(r=d)}}return r}function X0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of D0){const o=H0(e,a);if(o!==null)for(const{label:u,bits:d}of t)n.push([K0(o,d),u])}if(n.length===0)return[null,0];if(n.sort((a,o)=>o[0]-a[0]),n[0][0]<W0)return[null,0];const r=new Map;for(const[a,o]of n.slice(0,G0))r.set(o,(r.get(o)??0)+a);let i=0,s=-1;for(const[a,o]of r)o>s&&(s=o,i=a);return[i,n[0][0]]}const gt=48,Y0=320;function Z0(e){return["blank",...e.characters," "]}function Q0(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const o=e[a];o!==0&&(a>0&&e[a-1]===o||(r+=n[o]??"",i.push(t[a])))}if(i.length===0)return["",0];const s=i.reduce((a,o)=>a+o,0)/i.length;return[r,s]}function J0(e,t){const n=Math.trunc(gt*t),r=e.width/e.height,i=Math.ceil(gt*r)>n?n:Math.ceil(gt*r),s=new Float32Array(3*gt*n),a=gt*n,o=e.width/i,u=e.height/gt;for(let d=0;d<gt;d++){const c=(d+.5)*u-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(c))),f=Math.min(e.height-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let g=0;g<i;g++){const _=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(_))),x=Math.min(e.width-1,b+1),$=Math.max(0,Math.min(1,_-b));for(let I=0;I<3;I++){const S=2-I,k=(p*e.width+b)*e.channels+S,C=(p*e.width+x)*e.channels+S,M=(f*e.width+b)*e.channels+S,v=(f*e.width+x)*e.channels+S,O=e.data[k]*(1-$)+e.data[C]*$,N=e.data[M]*(1-$)+e.data[v]*$,F=O*(1-m)+N*m;s[I*a+d*n+g]=(F/255-.5)/.5}}}return{tensor:s,width:n}}const ey=62,ty=8,ny=5;function sa(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function ry(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),s=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let o=1;o<=r;o++)s[o]=e[a-1]===t[o-1]?i[o-1]+1:Math.max(i[o],s[o-1]);[i,s]=[s,i]}return i[r]}function er(e,t){return e.length===0&&t.length===0?100:200*ry(e,t)/(e.length+t.length)}function lh(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return er(n(e),n(t))}function iy(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),s=[...n].filter(c=>!r.has(c)).sort(),a=[...r].filter(c=>!n.has(c)).sort(),o=i.join(" "),u=[o,s.join(" ")].filter(Boolean).join(" "),d=[o,a.join(" ")].filter(Boolean).join(" ");return o.length>0&&(s.length===0||a.length===0)?100:Math.max(er(o,u),er(o,d),er(u,d))}function ay(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const s of[sa(i),sa(r.name)])if(s)for(const a of[s,s.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function sy(e,t){const n=sa(e);if(!n||t.length===0)return null;const i=ay(t).map(c=>({...c,score:iy(n,c.key)})).sort((c,p)=>p.score-c.score).slice(0,ty).filter(c=>c.score>=ey);if(i.length===0)return null;const s=i[0].score,a=i.filter(c=>s-c.score<=ny),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],d=[lh(o,u.key),u.score];for(const c of a.slice(1)){const p=[lh(o,c.key),c.score];(p[0]>d[0]||p[0]===d[0]&&p[1]>d[1])&&(u=c,d=p)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const oy=2560,uy=.3,ly=.5,dy=1.6,cy=3,py=5;function hy(e){const t=Math.min(1,oy/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,s=new Float32Array(3*i),a=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const d=(u+.5)*o-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,d-c));for(let m=0;m<n;m++){const g=(m+.5)*a-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,g-_));for(let $=0;$<3;$++){const I=2-$,S=(c*e.width+_)*e.channels+I,k=(c*e.width+b)*e.channels+I,C=(p*e.width+_)*e.channels+I,M=(p*e.width+b)*e.channels+I,v=e.data[S]*(1-x)+e.data[k]*x,O=e.data[C]*(1-x)+e.data[M]*x,N=v*(1-f)+O*f;s[$*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:s,width:n,height:r}}function fy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const s=i===n-1;for(let a=0;a<t;a++){const o=i*t+a;let u=e[o];if(a+1<t&&e[o+1]>u&&(u=e[o+1]),!s){const d=o+t;e[d]>u&&(u=e[d]),a+1<t&&e[d+1]>u&&(u=e[d+1])}r[o]=u}}return r}function my(e){if(e.length<3)return e;const t=[...e].sort((s,a)=>s[0]-a[0]||s[1]-a[1]),n=(s,a,o)=>(a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0]),r=[];for(const s of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(let s=t.length-1;s>=0;s--){const a=t[s];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function gy(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,s]=e[r],[a,o]=e[(r+1)%e.length],u=a-i,d=o-s,c=Math.hypot(u,d);if(c===0)continue;const p=u/c,f=d/c;let m=1/0,g=-1/0,_=1/0,b=-1/0;for(const[S,k]of e){const C=S*p+k*f,M=-S*f+k*p;C<m&&(m=C),C>g&&(g=C),M<_&&(_=M),M>b&&(b=M)}const x=g-m,$=b-_,I=x*$;if(I<n){n=I;const S=(m+g)/2,k=(_+b)/2;t={cx:S*p-k*f,cy:S*f+k*p,w:x,h:$,angle:Math.atan2(f,p)}}}return t}function yy(e,t,n,r){const i=Math.cos(r.angle),s=Math.sin(r.angle),a=r.w/2,o=r.h/2,u=Math.abs(a*i)+Math.abs(o*s),d=Math.abs(a*s)+Math.abs(o*i),c=Math.max(0,Math.floor(r.cx-u)),p=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-d)),m=Math.min(n-1,Math.ceil(r.cy+d));let g=0,_=0;for(let b=f;b<=m;b++)for(let x=c;x<=p;x++){const $=x-r.cx,I=b-r.cy,S=$*i+I*s,k=-$*s+I*i;Math.abs(S)<=a&&Math.abs(k)<=o&&(g+=e[b*t+x],_+=1)}return _===0?0:g/_}function _y(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((_,b)=>_[0]-b[0]),[o,u,d,c]=a,[p,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=d[1]<=c[1]?[d,c]:[c,d];return[[p[0],p[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function wy(e,t,n,r){const{width:i,height:s}=t;let a=new Uint8Array(i*s);for(let m=0;m<a.length;m++)a[m]=e[m]>uy?255:0;a=fy(a,i,s);const o={width:i,height:s,data:a},{labels:u}=ia(o),d=new Map;for(let m=0;m<s;m++)for(let g=0;g<i;g++){const _=u[m*i+g];if(_===0)continue;let b=d.get(_);b===void 0&&(b=new Map,d.set(_,b));const x=b.get(m);x===void 0?b.set(m,[g,g]):(g<x[0]&&(x[0]=g),g>x[1]&&(x[1]=g))}const c=n/i,p=r/s,f=[];for(const[m,g]of d){const _=[];for(const[N,[F,L]]of g)_.push([F-.5,N-.5],[F-.5,N+.5],[L+.5,N-.5],[L+.5,N+.5]);const b=gy(my(_));if(Math.min(b.w,b.h)<cy)continue;const x=yy(e,i,s,b);if(x<ly)continue;const $=b.w*b.h*dy/(2*(b.w+b.h)),I={...b,w:b.w+2*$,h:b.h+2*$};if(Math.min(I.w,I.h)<py+2)continue;const k=_y(I).map(([N,F])=>[Math.min(n,Math.max(0,Math.round(N*c))),Math.min(r,Math.max(0,Math.round(F*p)))]),C=k.map(N=>N[0]),M=k.map(N=>N[1]),v=Math.min(...C),O=Math.min(...M);f.push({quad:k,x:v,y:O,width:Math.max(...C)-v,height:Math.max(...M)-O,score:x})}return f.sort((m,g)=>g.score-m.score)}function by(e,t){const[n,r,i,s]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-s[0],i[1]-s[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(s[0]-n[0],s[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=$y([[0,0],[a,0],[a,o],[0,o]],[n,r,i,s]),d=new Uint8Array(a*o*e.channels);for(let p=0;p<o;p++)for(let f=0;f<a;f++){const m=u[6]*f+u[7]*p+u[8],g=(u[0]*f+u[1]*p+u[2])/m,_=(u[3]*f+u[4]*p+u[5])/m,b=Math.floor(g),x=Math.floor(_),$=g-b,I=_-x,S=Math.max(0,Math.min(e.width-1,b)),k=Math.max(0,Math.min(e.width-1,b+1)),C=Math.max(0,Math.min(e.height-1,x)),M=Math.max(0,Math.min(e.height-1,x+1));for(let v=0;v<e.channels;v++){const O=e.data[(C*e.width+S)*e.channels+v],N=e.data[(C*e.width+k)*e.channels+v],F=e.data[(M*e.width+S)*e.channels+v],L=e.data[(M*e.width+k)*e.channels+v],V=O*(1-$)+N*$,z=F*(1-$)+L*$;d[(p*a+f)*e.channels+v]=Math.round(V*(1-I)+z*I)}}const c={width:a,height:o,channels:e.channels,data:d};return o/a>=1.5?tr(c,3):c}function $y(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[s,a]=e[i],[o,u]=t[i];n.push([s,a,1,0,0,0,-o*s,-o*a]),r.push(o),n.push([0,0,0,s,a,1,-u*s,-u*a]),r.push(u)}for(let i=0;i<8;i++){let s=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[s][i])&&(s=o);[n[i],n[s]]=[n[s],n[i]],[r[i],r[s]]=[r[s],r[i]];const a=n[i][i];for(let o=i;o<8;o++)n[i][o]/=a;r[i]/=a;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let d=i;d<8;d++)n[o][d]-=u*n[i][d];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function tr(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:s,data:a}=e,o=n%2===0?r:i,u=n%2===0?i:r,d=new Uint8Array(o*u*s);for(let c=0;c<i;c++)for(let p=0;p<r;p++){let f,m;n===1?(f=i-1-c,m=p):n===2?(f=r-1-p,m=i-1-c):(f=c,m=r-1-p);const g=(c*r+p)*s,_=(m*o+f)*s;for(let b=0;b<s;b++)d[_+b]=a[g+b]}return{width:o,height:u,channels:s,data:d}}const xy=5e3,dh=.75,vy=15,Sy=1.25,Iy=2.4,Ty=.003,ky=.85,Ey=4,ch=2600,ph=2,hh=.3,fh=.1,mh=.012,Cy=22,gh=.5,nr=.12;function je(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let s=0,a=t.width*t.height;s<a;s++)r[s*3]=t.data[s*i],r[s*3+1]=t.data[s*i+1],r[s*3+2]=t.data[s*i+2];return n}function My(e,t,n,r){const i=r.map(Z=>Z[0]),s=r.map(Z=>Z[1]),a=i.reduce((Z,de)=>Z+de,0)/i.length,o=s.reduce((Z,de)=>Z+de,0)/s.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s));if(u<4)return null;const d=u*Ey,c=Math.max(0,Math.trunc(a-d)),p=Math.min(n.width,Math.trunc(a+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(n.height,Math.trunc(o+d));if(p-c<8||m-f<8)return null;const g=Math.max(n.width,n.height)<ch?ph:1,_=je(e,n),b=je(e,t),x=new e.Rect(c,f,p-c,m-f),$=_.roi(x),I=new e.Mat;g!==1?e.resize($,I,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(I);const S=new e.Mat,k=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(I,k,e.COLOR_RGB2GRAY);const C=new e.ORB(xy),M=new e.KeyPointVector,v=new e.KeyPointVector,O=new e.Mat,N=new e.Mat,F=new e.Mat,L=[_,b,$,I,S,k,M,v,O,N,F],V=Z=>{for(const de of L)try{de.delete()}catch{}try{C.delete()}catch{}return Z};if(C.detectAndCompute(S,F,M,O),C.detectAndCompute(k,F,v,N),O.rows<8||N.rows<8)return V(null);const z=new e.BFMatcher(e.NORM_HAMMING),G=new e.DMatchVectorVector;z.knnMatch(O,N,G,2);const H=[],K=[];for(let Z=0;Z<G.size();Z++){const de=G.get(Z);if(de.size()===2){const ve=de.get(0),fe=de.get(1);if(ve.distance<dh*fe.distance){const Ie=M.get(ve.queryIdx).pt,Se=v.get(ve.trainIdx).pt;H.push(Ie.x,Ie.y),K.push(Se.x,Se.y)}}}if(G.delete(),z.delete(),H.length/2<8)return V(null);const ae=e.matFromArray(H.length/2,1,e.CV_32FC2,H),U=e.matFromArray(K.length/2,1,e.CV_32FC2,K),J=new e.Mat,W=e.findHomography(ae,U,e.RANSAC,5,J);let Y=0;for(let Z=0;Z<J.rows;Z++)Y+=J.data[Z];const A=W.rows===3?[...W.data64F]:null;if(ae.delete(),U.delete(),J.delete(),W.delete(),A===null||Y<vy)return V(null);const B=1/g,j=[[B,0,c],[0,B,f],[0,0,1]],te=[0,1,2].map(Z=>[0,1,2].map(de=>j[Z][0]*A[de]+j[Z][1]*A[3+de]+j[Z][2]*A[6+de]));return V({H:te,inliers:Y})}function yh(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[d,c]=e[u],[p,f]=e[(u+1)%4];r+=d*f-p*c}const i=Math.abs(r/2)/(t*n);if(i<Ty||i>ky)return!1;const s=e.map((u,d)=>{const c=e[(d+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),a=Math.min(...s);if(a<1)return!1;const o=Math.max(...s)/a;return o>=Sy&&o<=Iy}function _h(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function wh(e,t,n,r){const i=n.width,s=n.height,a=Math.max(8,Math.trunc(hh*i)),o=i+2*a,u=s+2*a;if(o*u>4e7)return null;const d=r.map(L=>[L[0],L[1],L[2]-a*(L[0]+L[1])+0]);for(let L=0;L<3;L++)d[L][2]=r[L][2]-a*r[L][0]-a*r[L][1];const c=je(e,t),p=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(c,p,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),c.delete(),f.delete();const g=m.data,_=Math.max(4,Math.trunc(a/3)),b=[[],[],[]],x=(L,V)=>{const z=(V*o+L)*3;b[0].push(g[z]),b[1].push(g[z+1]),b[2].push(g[z+2])};for(let L=0;L<u;L++)for(let V=0;V<o;V++)(L<_||L>=u-_||V<_||V>=o-_)&&x(V,L);const $=L=>{L.sort((z,G)=>z-G);const V=L.length>>1;return L.length%2?L[V]:(L[V-1]+L[V])/2},I=[$(b[0]),$(b[1]),$(b[2])],S=(L,V)=>{const z=(V*o+L)*3,G=g[z]-I[0],H=g[z+1]-I[1],K=g[z+2]-I[2];return Math.sqrt(G*G+H*H+K*K)>Cy},k=Math.max(6,Math.trunc(fh*i)),C=Math.max(6,Math.trunc(fh*s)),M=Math.max(2,Math.trunc(mh*i)),v=Math.max(2,Math.trunc(mh*s)),O=L=>{let V=0,z=0;for(const G of L)z=G?z+1:0,z>V&&(V=z);return V/Math.max(1,L.length)},N=L=>{let V,z,G,H,K;if(L==="L"?(V=a,z=a+s,G=Math.max(0,a-M-k),H=Math.max(0,a-M),K=!1):L==="R"?(V=a,z=a+s,G=a+i+M,H=Math.min(o,a+i+M+k),K=!1):(V=Math.max(0,a-v-C),z=Math.max(0,a-v),G=a,H=a+i,K=!0),z<=V||H<=G)return 0;const ae=[];if(K)for(let U=G;U<H;U++){let J=0;for(let W=V;W<z;W++)S(U,W)&&J++;ae.push(J/(z-V)>gh)}else for(let U=V;U<z;U++){let J=0;for(let W=G;W<H;W++)S(W,U)&&J++;ae.push(J/(H-G)>gh)}return O(ae)},F={L:N("L"),R:N("R"),T:N("T")};return p.delete(),m.delete(),F}const zy=6e3,Ay=8,Ry=.5,Oy=.6;function By(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<ch?ph:1,s=je(e,t),a=new e.Mat;i!==1?e.resize(s,a,new e.Size(0,0),i,i,e.INTER_CUBIC):s.copyTo(a);const o=new e.Mat;e.cvtColor(a,o,e.COLOR_RGB2GRAY),s.delete(),a.delete();const u=new e.ORB(zy),d=new e.Mat,c=new e.KeyPointVector,p=new e.Mat;u.detectAndCompute(o,d,c,p);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(p.rows<8)return f;for(const[g,_]of n){if(r!==void 0&&Date.now()>r)break;const b=je(e,_),x=new e.Mat;e.cvtColor(b,x,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,I=new e.Mat;u.detectAndCompute(x,d,$,I);const S=[b,$,I],k=()=>{for(const te of S)te.delete();x.delete()};if(I.rows<8){k();continue}const C=new e.DMatchVectorVector;m.knnMatch(I,p,C,2);const M=[],v=[];for(let te=0;te<C.size();te++){const Z=C.get(te);if(Z.size()===2){const de=Z.get(0);if(de.distance<dh*Z.get(1).distance){const ve=$.get(de.queryIdx).pt,fe=c.get(de.trainIdx).pt;M.push(ve.x,ve.y),v.push(fe.x,fe.y)}}}if(C.delete(),M.length/2<8){k();continue}const O=e.matFromArray(M.length/2,1,e.CV_32FC2,M),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),F=new e.Mat,L=e.findHomography(O,N,e.RANSAC,5,F);let V=0;for(let te=0;te<F.rows;te++)V+=F.data[te];const z=L.rows===3?[...L.data64F]:null;if(O.delete(),N.delete(),F.delete(),L.delete(),z===null||V<Ay){k();continue}const G=1/i,H=[[G*z[0],G*z[1],G*z[2]],[G*z[3],G*z[4],G*z[5]],[z[6],z[7],z[8]]],K=[[0,0],[_.width,0],[_.width,_.height],[0,_.height]].map(([te,Z])=>_h(H,te,Z));if(!yh(K,t.width,t.height)){k();continue}const ae=je(e,t),U=e.matFromArray(3,3,e.CV_64F,H.flat()),J=new e.Mat;e.warpPerspective(ae,J,U,new e.Size(_.width,_.height),e.WARP_INVERSE_MAP);const W=new e.Mat;e.cvtColor(J,W,e.COLOR_RGB2GRAY);const Y=new e.Mat;e.matchTemplate(W,x,Y,e.TM_CCOEFF_NORMED);const A=Y.data32F[0];if(ae.delete(),U.delete(),J.delete(),W.delete(),Y.delete(),A<Ry){k();continue}const B=wh(e,t,_,H),j=B===null?[]:Object.keys(B).filter(te=>B[te]>=nr);f.push({id:g,confidence:Math.max(0,A),footprint:K,built:B!==null&&Math.max(B.L,B.R,B.T)>=nr,tuckRegion:bh(K,j)}),k()}}finally{o.delete(),d.delete(),c.delete(),p.delete();try{u.delete(),m.delete()}catch{}}return f}function bh(e,t){if(e.length<4||t.length===0)return null;const n=e.map(_=>[_[0],_[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),s=.5*(r+i),a=hh*s;if(!(a>0))return null;const o=n.reduce((_,b)=>_+b[0],0)/n.length,u=n.reduce((_,b)=>_+b[1],0)/n.length,d={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const _ of["L","R","T"]){if(!t.includes(_))continue;const[b,x]=d[_],$=n[b],I=n[x];let S=-(I[1]-$[1]),k=I[0]-$[0];const C=($[0]+I[0])/2,M=($[1]+I[1])/2;S*(C-o)+k*(M-u)<0&&(S=-S,k=-k);const v=Math.hypot(S,k);v<=1e-6||(S=S/v*a,k=k/v*a,c.push([$[0]+S,$[1]+k],[I[0]+S,I[1]+k]))}const p=c.map(_=>_[0]),f=c.map(_=>_[1]),m=Math.round(Math.min(...p)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...f))-g}}function Ny(e,t,n,r){const i=My(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([d,c])=>_h(i.H,d,c));if(!yh(a,t.width,t.height))return null;const o=wh(e,t,n,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=nr);return{built:Math.max(o.L,o.R,o.T)>=nr,footprint:a,overflow:u,inliers:i.inliers}}const In=120,Tn=179,Dy=1.3,Uy=3.6,Py=.45,Ly=6e-4,qy=.02,Gy=6e3,Wy=.78,Vy=1.25,Fy=2.4,Hy=.05,jy=1.5,Ky=.5,Xy=.9,Yy=150,Zy=18,Qy=34,Jy=90,e_=130,t_=.13,n_=.15,rr="magistrates-guild",oa="merchants-guild";function r_(e,t){const n=je(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[In,30,40,0]),s=new e.Mat(r.rows,r.cols,r.type(),[Tn,255,205,255]),a=new e.Mat;e.inRange(r,i,s,a),r.delete(),i.delete(),s.delete();const o=new Uint8Array(a.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),d=new e.Mat;e.morphologyEx(a,d,e.MORPH_CLOSE,u),a.delete(),u.delete();const c=new e.Mat,p=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(d,c,p,f,8);d.delete(),c.delete(),f.delete();const g=t.width*t.height,_=[];for(let b=1;b<m;b++){const x=p.intAt(b,0),$=p.intAt(b,1),I=p.intAt(b,2),S=p.intAt(b,3),k=p.intAt(b,4),C=k/g;C<Ly||C>qy||k/Math.max(I*S,1)<Py||_.push({x,y:$,w:I,h:S})}return p.delete(),{blobs:_,mask:o,maskWidth:t.width}}function i_(e,t,n,r,i,s,a){const o=e,u=s,d=a,c=i;if(!c.gray){const A=je(e,r);c.gray=new o.Mat,o.cvtColor(A,c.gray,o.COLOR_RGB2GRAY),A.delete(),c.k=new o.KeyPointVector,c.d=new o.Mat;const B=new o.Mat;u.detectAndCompute(c.gray,B,c.k,c.d),B.delete()}const p=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(p,f,m,g),f.delete();const _=A=>(m.delete(),g.delete(),A);if(c.d.rows<8||g.rows<8)return _(null);const b=new o.DMatchVectorVector;d.knnMatch(c.d,g,b,2);const x=[],$=[];for(let A=0;A<b.size();A++){const B=b.get(A);if(B.size()===2){const j=B.get(0);if(j.distance<Wy*B.get(1).distance){const te=c.k.get(j.queryIdx).pt,Z=m.get(j.trainIdx).pt;x.push(te.x,te.y),$.push(Z.x,Z.y)}}}if(b.delete(),x.length/2<8)return _(null);const I=o.matFromArray(x.length/2,1,o.CV_32FC2,x),S=o.matFromArray($.length/2,1,o.CV_32FC2,$),k=new o.Mat,C=o.findHomography(I,S,o.RANSAC,5,k);if(I.delete(),S.delete(),k.delete(),C.rows!==3)return C.delete(),_(null);const M=[...C.data64F],v=(A,B)=>{const j=M[6]*A+M[7]*B+M[8];return[(M[0]*A+M[1]*B+M[2])/j,(M[3]*A+M[4]*B+M[5])/j]},O=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([A,B])=>v(A,B));if(O.some(A=>!Number.isFinite(A[0])||!Number.isFinite(A[1])))return C.delete(),_(null);const N=O.map((A,B)=>{const j=O[(B+1)%4];return Math.hypot(j[0]-A[0],j[1]-A[1])}),F=Math.min(...N);if(F<1)return C.delete(),_(null);const L=Math.max(...N)/F;let V=0;for(let A=0;A<4;A++){const[B,j]=O[A],[te,Z]=O[(A+1)%4];V+=B*Z-te*j}const z=t,G=Math.abs(V/2)/(z.rows*z.cols);if(L<Vy||L>Fy||G<Hy||G>jy)return C.delete(),_(null);const H=new o.Mat;o.warpPerspective(z,H,C,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),C.delete();const K=new o.Mat;o.cvtColor(H,K,o.COLOR_RGB2GRAY),H.delete();const ae=Math.trunc(r.height/2),U=K.roi(new o.Rect(0,0,r.width,ae)),J=c.gray.roi(new o.Rect(0,0,r.width,ae)),W=new o.Mat;o.matchTemplate(U,J,W,o.TM_CCOEFF_NORMED);const Y=W.data32F[0];return U.delete(),J.delete(),W.delete(),K.delete(),_(Y)}function a_(e,t,n){let r,i;if(n===rr)r=oa,i=t_;else if(n===oa)r=rr,i=n_;else return null;const{x:s,y:a,w:o,h:u}=t;if(o<8||u<8)return null;const d=Math.trunc(o/2);let c=0,p=null;for(const[f,m]of[[0,d],[d,o]]){let g=0,_=0;for(let x=a;x<a+u;x++)for(let $=s+f;$<s+m;$++){const I=(x*e.width+$)*e.channels,{h:S,s:k,v:C}=nt(e.data[I],e.data[I+1],e.data[I+2]);if(S>=In&&S<=Tn&&k>=30&&k<=170&&C<=170)continue;g++,(r===oa?S>=Zy&&S<=Qy&&k>=Jy&&C>=e_:S>=95&&S<=130&&k>=80)&&_++}if(g<20)continue;const b=_/g;b>c&&(c=b,p={x:s+f,y:a,w:m-f,h:u})}return c>=i&&p!==null?{id:r,box:p}:null}const s_=1.7,o_=140,u_=170,l_=.2,d_=.1,$h=240,xh=80,vh=60,c_=50,Sh="scientists-guild",Ih="tacticians-guild",ir=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function p_(e,t,n){const{x:r,y:i,w:s,h:a}=n,o=new Float32Array(a);for(let S=0;S<a;S++){let k=0;for(let C=0;C<s;C++)e[(i+S)*t+r+C]>0&&k++;o[S]=k/s}const u=[];for(let S=0;S<a;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const d=u[0],c=u[u.length-1],p=c-d;if(p<5)return[];const f=s/p;if(f<Dy||f>Uy)return[];if(f>=s_)return[{x:r,y:i+d,w:s,h:p}];const m=new Float32Array(a),g=.3*(8*.5-1)+.8,_=[];let b=0;for(let S=-4;S<=4;S++){const k=Math.exp(-(S*S)/(2*g*g));_.push(k),b+=k}for(let S=0;S<a;S++){let k=0;for(let C=-4;C<=4;C++){const M=Math.min(a-1,Math.max(0,S+C));k+=o[M]*_[C+4]}m[S]=k/b}const x=d+Math.trunc(p*.3),$=d+Math.trunc(p*.78);let I=d+Math.trunc(p/2);if($>x){let S=1/0;for(let k=x;k<$;k++)m[k]<S&&(S=m[k],I=k)}return[{x:r,y:i+d,w:s,h:I-d},{x:r,y:i+I,w:s,h:c-I}]}function h_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),s=Math.min(e.height,t.y+t.h),a=Math.max(0,i-n),o=Math.max(0,s-r),u=new Uint8Array(a*o*3);for(let d=0;d<o;d++)for(let c=0;c<a;c++){const p=((r+d)*e.width+n+c)*e.channels,f=(d*a+c)*3;u[f]=e.data[p],u[f+1]=e.data[p+1],u[f+2]=e.data[p+2]}return{width:a,height:o,channels:3,data:u}}function f_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const s=r*e.channels,{h:a,s:o,v:u}=nt(e.data[s],e.data[s+1],e.data[s+2]);o>=40&&u>=40&&u<=205&&(t++,a>=o_&&a<=u_&&n++)}return t===0?0:n/t}function m_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:s,s:a,v:o}=nt(e.data[i],e.data[i+1],e.data[i+2]);!(s>=In&&s<=Tn)&&a>=70&&o>=50&&t++}return n===0?0:t/n}function Th(e,t){const n=je(e,t),r=new e.Mat;e.resize(n,r,new e.Size($h,xh),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:$h,height:xh,channels:3,data:i}}function g_(e){const t=e.width*e.height,n=[0,0,0];for(let s=0;s<t;s++){const a=s*e.channels;n[0]+=e.data[a],n[1]+=e.data[a+1],n[2]+=e.data[a+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let s=0;s<t;s++){const a=s*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[s*3+o]=Math.max(0,Math.min(255,Math.round(e.data[a+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function kh(e,t){const n=g_(t),r=n.width*n.height,i=new Uint8Array(r);let s=0;for(let g=0;g<r;g++){const _=g*3,{h:b,s:x,v:$}=nt(n.data[_],n.data[_+1],n.data[_+2]);!(b>=In&&b<=Tn&&x>=30&&x<=170&&$<=170)&&$>=40&&(i[g]=1,s++)}const a=s<20,o=je(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const d=u.data;let c=0,p=0,f=0,m=0;for(let g=0;g<r;g++)!a&&i[g]===0||(c+=d[g*3]*100/255,p+=d[g*3+1]-128,f+=d[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[c/m,p/m,f/m]}function y_(e){let t=0,n=0,r=0,i=0,s=0;const a=e.width*e.height;for(let u=0;u<a;u++){const d=u*e.channels,{h:c,s:p,v:f}=nt(e.data[d],e.data[d+1],e.data[d+2]);c>=In&&c<=Tn&&p>=30&&p<=170&&f<=170||(t++,p>=70&&f>=50&&(c>=95&&c<=130?n++:c>=35&&c<=92?r++:c<=10?i++:c>=15&&c<=34&&f>=80&&s++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:s/o}}function __(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:s,s:a,v:o}=nt(e.data[i],e.data[i+1],e.data[i+2]);a>=vh&&o>=c_?(s>=95&&s<=128&&n.blue++,s>=35&&s<=85&&n.green++,(s<=8||s>=170)&&n.red++,s>=18&&s<=34&&n.gold++,s>=4&&s<=17&&o<150&&n.brown++):a<vh&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function w_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,s=0,a=0;for(let o=0;o<e.length;o++){const u=e[o]-n,d=t[o]-r;i+=u*d,s+=u*u,a+=d*d}return i/(Math.sqrt(s*a)+1e-6)}function Eh(e,t){const n=je(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function b_(e,t){const n=new Map,r=new Map;for(const[i,s]of t){const a=Th(e,s);n.set(i,Eh(e,a)),ir.includes(i)&&r.set(i,kh(e,a))}return{gray:n,warmLab:r}}function $_(e,t,n){const r=Th(e,t),i=y_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return rr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Sh;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Ih;const s=__(r),a={blue:s.blue,green:s.green,red:s.red,gold:s.gold,browngrey:s.brown+s.grey};let o="blue";for(const d of Object.keys(a))a[d]>a[o]&&(o=d);if(a[o]<=0)return"";let u;if(o==="blue")u=rr;else if(o==="green")u=Sh;else if(o==="red")u=Ih;else{const d=Eh(e,r);let c="",p=-2;for(const f of ir){const m=n.gray.get(f);if(m===void 0)continue;const g=w_(d,m);g>p&&(p=g,c=f)}u=c||ir[0]}if(ir.includes(u)&&n.warmLab.size>0){const d=kh(e,r);let c=u,p=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(d[0]-m[0],d[1]-m[1],d[2]-m[2]);g<p&&(p=g,c=f)}return c}return u}function x_(e,t,n,r,i){var _;const s=[],{blobs:a,mask:o,maskWidth:u}=r_(e,t);if(a.length===0||n.size===0)return s;const d=e,c=new d.ORB(Gy),p=new d.BFMatcher(d.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=je(e,t);let g=null;try{for(const b of a){if(r!==void 0&&Date.now()>r)break;const x=b.x+Math.trunc(b.w/2),$=b.y+Math.trunc(b.h/2),I=Math.max(Yy,Math.trunc(Xy*Math.max(b.w,b.h))),S=Math.max(0,x-I),k=Math.max(0,$-I),C=Math.min(t.width,x+I),M=Math.min(t.height,$+I);if(C-S<16||M-k<16)continue;const v=m.roi(new d.Rect(S,k,C-S,M-k)),O=new d.Mat;d.cvtColor(v,O,d.COLOR_RGB2GRAY);let N=null,F=-2;for(const[G,H]of n){if(r!==void 0&&Date.now()>r)break;const K=i_(e,v,O,H,f.get(G),c,p);K!==null&&K>F&&(F=K,N=G)}v.delete(),O.delete();const L=new Set;if(N!==null&&F>=Ky){s.push({id:N,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),L.add(N);const G=a_(t,b,N);G&&(s.push({id:G.id,boundingBox:{x:G.box.x,y:G.box.y,width:G.box.w,height:G.box.h},confidence:.9}),L.add(G.id))}if(i===void 0||i.size===0)continue;const V=p_(o,u,b);if(V.length!==2)continue;const z=V.map(G=>h_(t,G));if(!z.some(G=>G.width*G.height===0||m_(G)<d_))for(let G=0;G<V.length;G++){const H=z[G];if(f_(H)<l_)continue;g===null&&(g=b_(e,i));const K=$_(e,H,g);if(K&&!L.has(K)){L.add(K);const ae=V[G];s.push({id:K,boundingBox:{x:ae.x,y:ae.y,width:ae.w,height:ae.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const x=b;for(const $ of["gray","k","d"])try{(_=x[$])==null||_.delete()}catch{}}try{c.delete(),p.delete()}catch{}}return s}const Ch=128,v_=.56,S_=15,I_=.58,T_=70,k_=50,E_=.12,C_=.2,M_=.1,z_=.17,Mh=.15;function A_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function zh(e,t){const{width:n,height:r,channels:i,data:s}=e,a=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const d=Math.max(0,a-u),c=Math.max(0,o-u),p=Math.min(n,a+u),f=Math.min(r,o+u),m=p-d,g=f-c,_=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const x=((b+c)*n+d)*i;_.set(s.subarray(x,x+m*i),b*m*i)}return{width:m,height:g,channels:i,data:_}}function R_(e){const t=zh(e,v_),n=M0(t),r=sh(n,Ch,Ch);return z0(r)}function O_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let s=0,a=0,o=0;for(let u=0;u<n;u++){const d=e[u]-r,c=t[u]-i;s+=d*c,a+=d*d,o+=c*c}return s/(Math.sqrt(a*o)+1e-6)}function B_(e){const t=new Map([["masonry",0],["strategy",0]]),n=zh(e,I_),{width:r,height:i,channels:s,data:a}=n,o=r*i||1;let u=0,d=0;for(let f=0;f<r*i;f++){const m=f*s,{h:g,s:_,v:b}=nt(a[m],a[m+1],a[m+2]);_>=T_&&b>=k_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(d+=1))}const c=u/o,p=d/o;return c>=E_&&t.set("masonry",Mh*Math.min(1,c/C_)),p>=M_&&t.set("strategy",Mh*Math.min(1,p/z_)),t}function N_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=R_(e);let r=0;for(const d of n.data)r+=d;const i=r/n.data.length,s=[];for(let d=0;d<360;d+=S_)s.push(O0(n,d,i));const a=new Map;for(const[d,c]of t){let p=-1/0;for(const f of s){const m=O_(f,c);m>p&&(p=m)}a.set(d,p)}for(const[d,c]of B_(e))c>0&&a.has(d)&&a.set(d,a.get(d)+c);let o="",u=-1/0;for(const[d,c]of a)c>u&&(o=d,u=c);return[o,u]}const It="/7wd-scorer/models/";let Ah=!1;const ar=new Map;function Rh(){var e;Ah||(ke.wasm.wasmPaths="/7wd-scorer/ort/",ke.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Ah=!0)}const ua=new Set;function D_(e){Rh();let t=ar.get(e);return t===void 0&&(t=ln.create(`${It}${mt[e].onnx}`,{executionProviders:ua.has(e)?["wasm"]:["webgpu","wasm"]}),ar.set(e,t),t.catch(()=>ar.delete(e))),t}let la=null,da=null;const U_=.75,P_=4,L_=.65,q_=3e4;let ca=null;function Oh(){return ca===null&&(ca=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),ca}const Bh=new Map;function pa(e){let t=Bh.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${It}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),s=new OffscreenCanvas(r.width,r.height).getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),Bh.set(e,t)),t}function Nh(e){return pa(`wonder-refs/${e}.jpg`)}const Dh=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function G_(){const e=new Map;for(const t of Dh){const n=await pa(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function W_(){const e=new Map;for(const t of Dh){const n=await pa(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const V_=.6,F_=12,H_=45e3;let ha=null;function Uh(){return ha===null&&(Rh(),ha=(async()=>{try{const[e,t,n,r]=await Promise.all([ln.create(`${It}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),ln.create(`${It}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${It}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${It}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:Z0(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),ha}async function j_(e,t){const n=Math.max(Y0/gt,t.width/t.height),{tensor:r,width:i}=J0(t,n),s={[e.rec.inputNames[0]]:new We("float32",r,[1,3,gt,i])},a=(await e.rec.run(s))[e.rec.outputNames[0]],[o,u,d]=a.dims,c=a.data,p=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,_=-1/0;const b=m*d;for(let x=0;x<d;x++){const $=c[b+x];$>_&&(_=$,g=x)}p[m]=g,f[m]=_}return Q0(p,f,e.charset)}async function K_(e,t){const n=await Uh();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+H_;let s=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){s=!0;break}t(`wonder names: rotation ${a*90}°…`);const o=tr(e,a),u=hy(o),d={[n.det.inputNames[0]]:new We("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(d))[n.det.outputNames[0]],p=wy(c.data,u,o.width,o.height).slice(0,F_);console.debug(`[wonders-ocr] rot ${a*90}: ${p.length} det boxes`,p.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of p){if(Date.now()>i){s=!0;break e}const m=by(o,f.quad);if(m.width<m.height*1.5)continue;const[g,_]=await j_(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${_.toFixed(2)}`),_<V_||g.trim().length<P_)continue;const b=sy(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<U_||b.kind!=="wonder")continue;const x=r.get(b.id);(x===void 0||b.confidence>x.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:Ph(f,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:s}}function Ph(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const s=(p,f)=>i===1?[f,r-1-p]:i===2?[n-1-p,r-1-f]:[n-1-f,p],a=[s(e.x,e.y),s(e.x+e.width,e.y+e.height)],o=a.map(p=>p[0]),u=a.map(p=>p[1]),d=Math.min(...o),c=Math.min(...u);return{x:d,y:c,width:Math.max(...o)-d,height:Math.max(...u)-c}}function X_(){return da===null&&(da=fetch(`${It}laurel_gallery.json`).then(async e=>e.ok?V0(await e.json()):[]).catch(()=>[])),da}function Y_(e,t,n,r){return Z_(e,t-r,n-r,2*r,2*r)}function Z_(e,t,n,r,i){const s=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),d=Math.max(0,o-s),c=Math.max(0,u-a),p=new Uint8Array(d*c*3);for(let f=0;f<c;f++)for(let m=0;m<d;m++){const g=((f+a)*e.width+(m+s))*e.channels,_=(f*d+m)*3;p[_]=e.data[g],p[_+1]=e.data[g+1],p[_+2]=e.data[g+2]}return{width:d,height:c,channels:3,data:p}}function Q_(){return la===null&&(la=fetch(`${It}token_templates.json`).then(async e=>e.ok?A_(await e.json()):new Map).catch(()=>new Map)),la}async function Lh(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Ft(e,t){const n=mt[e],{tensor:r,params:i}=i0(t,n.input),s=async()=>{const a=await D_(e),o={[a.inputNames[0]]:new We("float32",r,[1,3,n.input,n.input])};return{rows:(await a.run(o))[a.outputNames[0]].data,params:i}};try{return await s()}catch(a){if(ua.has(e))throw a;return ua.add(e),ar.delete(e),await s()}}const J_=6,ew=2,tw=5,nw=2;async function rw(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Lh(e),r=await Ft("banner",n),i=nh(r.rows,r.params,mt.banner.conf);if(t.banners=i.length,i.length>=J_)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await Ft("laurel",n),a=eh(s.rows,s.params,mt.laurel.conf);if(t.laurels=a.length,a.length>=ew)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const o=await Ft("coin",n),u=Jp(o.rows,o.params,mt.coin.conf);return t.coins=u.length,u.length>=tw?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=nw?{...t,kind:"board",confidence:.4}:t}function iw(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function aw(e,t,n,r){const i={},s=[],a=[],o=[],u=[],d=[],c=[];let p=0,f=0,m=0,g=0,_=0;for(const I of e){_+=1;const S=`${t} photo ${_}/${e.length}`;r(`${S}: reading pixels…`);const k=await Lh(I);r(`${S}: card banners…`);const C=await Ft("banner",k),M=nh(C.rows,C.params,mt.banner.conf);r(`${S}: progress tokens…`);const v=await Ft("token",k),O=await Q_(),N=[];for(const A of c0(v.rows,v.params,mt.token.conf)){N.push({cx:A.cx,cy:A.cy,r:A.r});const[B,j]=N_(ah(k,A),O);B===""?f+=1:o.some(te=>te.id===B)||o.push({id:B,center:[A.cx,A.cy],radius:A.r,confidence:Math.round(j*1e4)/1e4})}r(`${S}: coins…`);const F=await Ft("coin",k),L=Jp(F.rows,F.params,mt.coin.conf).filter(A=>!N.some(B=>(A.cx-B.cx)**2+(A.cy-B.cy)**2<=A.r*A.r)),V=C0(k,L),z=[];if(L.forEach((A,B)=>{const j=V[B];p+=j,z.push({denomination:j,center:[A.cx,A.cy],radius:A.r,denomSource:"colour"})}),z.length>=2){const A=z.map(j=>j.radius).sort((j,te)=>j-te),B=A.length%2===1?A[(A.length-1)/2]:(A[A.length/2-1]+A[A.length/2])/2;if(B>0)for(const j of z)j.radius/B>2&&(j.suspect=!0,j.suspectReason=`radius ${j.radius}px is ${(j.radius/B).toFixed(1)}x the photo's median coin radius — probably not a coin`)}a.push(...z),r(`${S}: wonder names…`);const G=await K_(k,A=>r(`${S}: ${A}`)),H=[],K=Date.now()+q_,ae=G.wonders.length>0?await Oh():null;for(const A of G.wonders){let B=null;if(ae!==null&&Date.now()<K){r(`${S}: registering ${A.name}…`);try{const j=await Nh(A.id);if(j!==null){const te=Ny(ae,k,j,[[A.nameBox.x,A.nameBox.y],[A.nameBox.x+A.nameBox.width,A.nameBox.y],[A.nameBox.x+A.nameBox.width,A.nameBox.y+A.nameBox.height],[A.nameBox.x,A.nameBox.y+A.nameBox.height]]);if(te!==null){const Z=te.footprint.map(Ie=>Ie[0]),de=te.footprint.map(Ie=>Ie[1]),ve=Math.max(0,Math.round(Math.min(...Z))),fe=Math.max(0,Math.round(Math.min(...de)));B={built:te.built,boundingBox:{x:ve,y:fe,width:Math.min(k.width,Math.round(Math.max(...Z)))-ve,height:Math.min(k.height,Math.round(Math.max(...de)))-fe},tuckRegion:bh(te.footprint,te.overflow)}}}}catch(j){console.warn(`[wonders-reg] ${A.id} failed:`,j)}}if(B!==null){const j=B.tuckRegion??B.boundingBox;H.push({x0:j.x,y0:j.y,x1:j.x+j.width,y1:j.y+j.height})}else{const j=Math.max(8,A.nameBox.height),te=Math.round(A.nameBox.width*.15);H.push({x0:A.nameBox.x-te,y0:A.nameBox.y-j*2.5,x1:A.nameBox.x+A.nameBox.width+te,y1:A.nameBox.y+A.nameBox.height+j*2.5})}u.some(j=>j.id===A.id)||u.push({id:A.id,name:A.name,builtWithCardUnderneath:(B==null?void 0:B.built)??!0,boundingBox:(B==null?void 0:B.boundingBox)??{x:0,y:0,width:0,height:0},...B!=null&&B.tuckRegion?{tuckRegion:B.tuckRegion}:{},confidence:A.confidence})}if(G.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${S}: the wonder-name read ran out of its time budget on this device — ${G.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),ae!==null&&G.wonders.length>0&&Date.now()<K)try{const A=await Uh(),B=(A==null?void 0:A.catalog.filter(te=>te.kind==="wonder").map(te=>te.id))??[],j=new Map;for(const te of B)if(!u.some(Z=>Z.id===te)){const Z=await Nh(te);Z!==null&&j.set(te,Z)}if(j.size>0){r(`${S}: searching occluded wonders…`);const te=By(ae,k,j,K);for(const Z of te){const de=Z.footprint.map(Ue=>Ue[0]),ve=Z.footprint.map(Ue=>Ue[1]),fe=Math.max(0,Math.round(Math.min(...de))),Ie=Math.max(0,Math.round(Math.min(...ve))),Se={x:fe,y:Ie,width:Math.min(k.width,Math.round(Math.max(...de)))-fe,height:Math.min(k.height,Math.round(Math.max(...ve)))-Ie};if(u.some(Ue=>{const Oe=Ue.boundingBox,Le=Math.max(0,Math.min(Oe.x+Oe.width,Se.x+Se.width)-Math.max(Oe.x,Se.x)),yt=Math.max(0,Math.min(Oe.y+Oe.height,Se.y+Se.height)-Math.max(Oe.y,Se.y)),Ht=Le*yt,st=Oe.width*Oe.height+Se.width*Se.height-Ht;return st>0&&Ht/st>Oy}))continue;const se=A==null?void 0:A.catalog.find(Ue=>Ue.id===Z.id);u.push({id:Z.id,name:(se==null?void 0:se.nameFr)??(se==null?void 0:se.name)??Z.id,builtWithCardUnderneath:Z.built,boundingBox:Se,...Z.tuckRegion?{tuckRegion:Z.tuckRegion}:{},confidence:Math.round(Z.confidence*1e4)/1e4});const _e=Z.tuckRegion??Se;H.push({x0:_e.x,y0:_e.y,x1:_e.x+_e.width,y1:_e.y+_e.height})}}}catch(A){console.warn("[wonders-reg] discovery failed:",A)}const U=[];for(const A of M){const B=A.box[0]+A.box[2]/2,j=A.box[1]+A.box[3]/2;if(H.some(Z=>B>=Z.x0&&B<=Z.x1&&j>=Z.y0&&j<=Z.y1)){g+=1;continue}U.push(A),i[A.family]=(i[A.family]??0)+1,m+=1}for(const A of m0(U))c.push(A);const J=U.some(A=>A.family==="guild");if((J||G.wonders.length>0)&&Date.now()<K)try{const A=ae??(J?await Oh():null);if(A!==null){const B=await G_();if(B.size>0){r(`${S}: identifying guilds…`);const j=await W_();for(const te of x_(A,k,B,K,j))d.some(Z=>Z.id===te.id)||d.push(te)}}}catch(A){console.warn("[guilds-reg] failed:",A)}r(`${S}: laurels…`);const W=await X_(),Y=[];for(const A of[0,1,2,3]){const B=A===0?k:tr(k,A),j=await Ft("laurel",B);for(const[te,Z,de,ve]of eh(j.rows,j.params,mt.laurel.conf)){const fe=Ph({x:te,y:Z,width:de-te,height:ve-Z},A,k.width,k.height),Ie=fe.x+fe.width/2,Se=fe.y+fe.height/2,ye=.6*Math.max(fe.width,fe.height);Y.some(([_e,Ue,Oe,Le])=>{const yt=(_e+Oe)/2,Ht=(Ue+Le)/2;return(Ie-yt)**2+(Se-Ht)**2<ye*ye})||Y.push([fe.x,fe.y,fe.x+fe.width,fe.y+fe.height])}}for(const[A,B,j,te]of Y){const Z=Math.trunc((A+j)/2),de=Math.trunc((B+te)/2);if([...N,...L].some(_e=>(Z-_e.cx)**2+(de-_e.cy)**2<=_e.r*_e.r))continue;const fe=Math.max(6,Math.trunc(Math.max(j-A,te-B)*B0)),Ie=Y_(k,Z,de,fe);let Se=null,ye=0;for(const _e of[0,1,2,3]){const Ue=_e===0?Ie:tr(Ie,_e),[Oe,Le]=X0(Ue,W);Oe!==null&&Le>ye&&(Se=Oe,ye=Le)}Se!==null&&ye<L_&&(Se=null);const se=H.some(_e=>Z>=_e.x0&&Z<=_e.x1&&de>=_e.y0&&de<=_e.y1);s.push({value:Se,valueRead:Se!==null,center:[Math.round((A+j)/2),Math.round((B+te)/2)],boundingBox:{x:Math.trunc(A),y:Math.trunc(B),width:Math.trunc(j-A),height:Math.trunc(te-B)},confidence:Math.round(ye*1e4)/1e4,excluded:se,photoIndex:_-1})}}g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):m>0&&u.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const b=i.guild??0;b!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${b} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(I=>I.id).join(", ")+" — confirm in the review."});const x=u.filter(I=>I.boundingBox.width===0);x.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${x.map(I=>I.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${u.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),f>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${f} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(I=>I.id).join(", ")+" — confirm in the review."}),a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${p} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const $=s.filter(I=>I.valueRead);return{...iw(),wonders:u,guilds:d,progressTokens:o,laurels:s,cardVictoryPoints:{value:$.reduce((I,S)=>I+(S.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-$.length,complete:s.length===$.length},cardCounts:{byFamily:i,source:m>0?"yolo":"none",tuckedExcluded:g,...c.length>0?{suspects:c}:{}},coins:{total:p,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function sw(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null};for(const i of["left","right"]){const s=e[i];s.length>0&&(r[i]=await aw(s,i,n,t))}return e.hasBoard&&n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:r,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=n==="classify"?await rw(e.data.file):await sw(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
