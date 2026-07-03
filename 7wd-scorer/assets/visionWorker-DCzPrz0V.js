var qb=Object.defineProperty;var Gb=(ut,lt,Kt)=>lt in ut?qb(ut,lt,{enumerable:!0,configurable:!0,writable:!0,value:Kt}):ut[lt]=Kt;var Sm=(ut,lt,Kt)=>Gb(ut,typeof lt!="symbol"?lt+"":lt,Kt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ut=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyNames,km=Object.prototype.hasOwnProperty,Em=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),Xt=(e,t)=>{for(var n in t)ut(e,n,{get:t[n],enumerable:!0})},Cm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Kt(t))!km.call(e,i)&&i!==n&&ut(e,i,{get:()=>t[i],enumerable:!(r=lt(t,i))||r.enumerable});return e},sn=e=>Cm(ut({},"__esModule",{value:!0}),e),on,wt,Yt,za,Aa,Ra=K(()=>{on=new Map,wt=[],Yt=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=on.get(e);if(r===void 0)on.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=wt.indexOf(e);i!==-1&&wt.splice(i,1);for(let s=0;s<wt.length;s++)if(on.get(wt[s]).priority<=n){wt.splice(s,0,e);return}wt.push(e)}return}throw new TypeError("not a valid backend")},za=async e=>{let t=on.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Aa=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?wt:n,i,s=[],a=new Set;for(let u of r){let d=await za(u);typeof d=="string"?s.push({name:u,err:d}):(i||(i=d),i===d&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of s)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),Mm=K(()=>{Ra()}),Oa,zm=K(()=>{Oa="1.27.0"}),mr,Be,Ba=K(()=>{zm(),mr="warning",Be={wasm:{},webgl:{},webgpu:{},versions:{common:Oa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mr=e}},get logLevel(){return mr}},Object.defineProperty(Be,"logLevel",{enumerable:!0})}),ke,Am=K(()=>{Ba(),ke=Be}),Na,Da,Rm=K(()=>{Na=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*i,p=0,f=c,m=c*2,g=-1;a==="RGBA"?(p=0,f=c,m=c*2,g=c*3):a==="RGB"?(p=0,f=c,m=c*2):a==="RBG"&&(p=0,m=c,f=c*2);for(let _=0;_<s;_++)for(let v=0;v<i;v++){let $=(e.data[p++]-d[0])*u[0],b=(e.data[f++]-d[1])*u[1],T=(e.data[m++]-d[2])*u[2],I=g===-1?255:(e.data[g++]-d[3])*u[3];r.fillStyle="rgba("+$+","+b+","+T+","+I+")",r.fillRect(v,_,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Da=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,c;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,_=2,v=3,$=0,b=p,T=p*2,I=-1;o==="RGBA"?($=0,b=p,T=p*2,I=p*3):o==="RGB"?($=0,b=p,T=p*2):o==="RBG"&&($=0,T=p,b=p*2),r=n.createImageData(i,s);for(let k=0;k<s*i;m+=f,g+=f,_+=f,v+=f,k++)r.data[m]=(e.data[$++]-c[0])*d[0],r.data[g]=(e.data[b++]-c[1])*d[1],r.data[_]=(e.data[T++]-c[2])*d[2],r.data[v]=I===-1?255:(e.data[I++]-c[3])*d[3]}else throw new Error("Can not access image data");return r}}),Cn,Ua,Pa,La,qa,Ga,Om=K(()=>{yr(),Cn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,c=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,f=0,m=1,g=2,_=3,v=0,$=d,b=d*2,T=-1;o==="RGB"&&(p=3,f=0,m=1,g=2,_=-1),u==="RGBA"?T=d*3:u==="RBG"?(v=0,b=d,$=d*2):u==="BGR"&&(b=0,$=d,v=d*2);for(let I=0;I<d;I++,f+=p,g+=p,m+=p,_+=p)c[v++]=(e[f]+a[0])/s[0],c[$++]=(e[m]+a[1])/s[1],c[b++]=(e[g]+a[2])/s[2],T!==-1&&_!==-1&&(c[T++]=(e[_]+a[3])/s[3]);return u==="RGBA"?new Ge("float32",c,[1,4,n,r]):new Ge("float32",c,[1,3,n,r])},Ua=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(n){let c=u();c.width=e.width,c.height=e.height;let p=d(c);if(p!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;p.drawImage(e,0,0),a=p.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let c,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,p=t.resizedWidth):(c=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=p,t!==void 0){let f=u();f.width=p,f.height=c;let m=d(f);if(m!=null)m.putImageData(e,0,0),a=m.getImageData(0,0,p,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let p=d(c);if(p!=null){let f=e.height,m=e.width;return p.drawImage(e,0,0,m,f),a=p.getImageData(0,0,m,f).data,o.height=f,o.width=m,Cn(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,p)=>{let f=u(),m=d(f);if(!e||!m)return p();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let _=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,c(Cn(_.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Cn(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Pa=(e,t)=>{let{width:n,height:r,download:i,dispose:s}=t,a=[1,r,n,4];return new Ge({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},La=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new Ge({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:s})},qa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new Ge({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:s})},Ga=(e,t,n)=>new Ge({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Ct,un,gr,Wa,Bm=K(()=>{Ct=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),un=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),gr=!1,Wa=()=>{if(!gr){gr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Ct.set("int64",BigInt64Array),un.set(BigInt64Array,"int64")),t&&(Ct.set("uint64",BigUint64Array),un.set(BigUint64Array,"uint64")),r?(Ct.set("float16",n),un.set(n,"float16")):Ct.set("float16",Uint16Array)}}}),Va,Fa,Nm=K(()=>{yr(),Va=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Fa=(e,t)=>{switch(e.location){case"cpu":return new Ge(e.type,e.data,t);case"cpu-pinned":return new Ge({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ge({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ge({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ge({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ge,yr=K(()=>{Rm(),Om(),Bm(),Nm(),Ge=class{constructor(e,t,n){Wa();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Ct.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=Ct.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=un.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=Va(i);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=s}static async fromImage(e,t){return Ua(e,t)}static fromTexture(e,t){return Pa(e,t)}static fromGpuBuffer(e,t){return La(e,t)}static fromMLTensor(e,t){return qa(e,t)}static fromPinnedBuffer(e,t,n){return Ga(e,t,n)}toDataURL(e){return Na(this,e)}toImageData(e){return Da(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Fa(this,e)}}}),We,Ha=K(()=>{yr(),We=Ge}),Mn,_r,nt,Ke,Mt,zt,ja=K(()=>{Ba(),Mn=(e,t)=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.timeStamp(`${e}::ORT::${t}`)},_r=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let s=0;s<n.length;s++){if(r&&!n[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Mn("CPU",a);return}n[s].includes("TRACE_FUNC")&&(r=!0)}},nt=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||_r("BEGIN",e)},Ke=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||_r("END",e)},Mt=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.time(`ORT::${e}`)},zt=e=>{(typeof Be.trace>"u"?!Be.wasm.trace:!Be.trace)||console.timeEnd(`ORT::${e}`)}}),Ka,Dm=K(()=>{Ra(),Ha(),ja(),Ka=class Im{constructor(t){this.handler=t}async run(t,n,r){nt(),Mt("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof We||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof We)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(c.indexOf(p)!==-1){let f=n[p];(f===null||f instanceof We)&&(d=!0,a=!1,i[p]=f)}if(d){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof We?u[d]=c:u[d]=new We(c.type,c.data,c.dims)}return zt("InferenceSession.run"),Ke(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){nt(),Mt("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,p=0,f=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(f=t.byteLength-p,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||p+f>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,p,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Aa(a),d=await o.createInferenceSessionHandler(s,u);return zt("InferenceSession.create"),Ke(),new Im(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ln,Um=K(()=>{Dm(),ln=Ka}),Pm=K(()=>{}),Lm=K(()=>{}),qm=K(()=>{}),Gm=K(()=>{}),Wm={};Xt(Wm,{InferenceSession:()=>ln,TRACE:()=>Mn,TRACE_EVENT_BEGIN:()=>Mt,TRACE_EVENT_END:()=>zt,TRACE_FUNC_BEGIN:()=>nt,TRACE_FUNC_END:()=>Ke,Tensor:()=>We,env:()=>ke,registerBackend:()=>Yt});var He=K(()=>{Mm(),Am(),Um(),Ha(),Pm(),Lm(),ja(),qm(),Gm()}),wr=K(()=>{}),Xa={};Xt(Xa,{default:()=>Ya});var br,$r,Ya,Vm=K(()=>{var e;zp(),At(),kr(),br="ort-wasm-proxy-worker",$r=((e=globalThis.self)==null?void 0:e.name)===br,$r&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Mr(r.wasm).then(()=>{qi(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:s}=r;Gi(s,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,s=Xn(i);postMessage({type:n,out:s});break}case"create":{let{model:i,options:s}=r;Vi(i,s).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":Fi(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:o,options:u}=r;ji(i,s,a,o,new Array(o.length).fill(null),u).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},Xi([...a,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":Ki(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ya=$r?null:t=>new Worker(t??Ve,{type:"module",name:br})}),Za={};Xt(Za,{default:()=>Ja});async function Qa(e={}){var vm,xm;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((vm=self.name)==null?void 0:vm.startsWith("em-pthread"));t.mountExternalData=(l,h)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=l=>async(...h)=>{var w;try{if(t.Yc)throw Error("Session already started");let y=t.Yc={Kd:h[0],errors:[]},S=await l(...h);if(t.Yc!==y)throw Error("Session mismatch");(w=t.dd)==null||w.flush();let E=y.errors;if(0<E.length){let R=await Promise.all(E);if(R=R.filter(P=>P),0<R.length)throw Error(R.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(l,h)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let w=t.dd;t.jsepRegisterBuffer=(y,S,E,R)=>w.registerBuffer(y,S,E,R),t.jsepGetBuffer=y=>w.getBuffer(y),t.jsepCreateDownloader=(y,S,E)=>w.createDownloader(y,S,E),t.jsepOnCreateSession=y=>{w.onCreateSession(y)},t.jsepOnReleaseSession=y=>{w.onReleaseSession(y)},t.jsepOnRunStart=y=>w.onRunStart(y),t.Id=(y,S)=>{w.upload(y,S)}}else if(l==="webnn"){let w=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=y=>w.onRunStart(y),t.webnnOnRunEnd=w.onRunEnd.bind(w),t.webnnOnReleaseSession=y=>{w.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,S)=>w.createMLTensorDownloader(y,S),t.webnnRegisterMLTensor=(y,S,E,R)=>w.registerMLTensor(y,S,E,R),t.webnnCreateMLContext=y=>w.createMLContext(y),t.webnnRegisterMLConstant=(y,S,E,R,P,Q)=>w.registerMLConstant(y,S,E,R,P,t.Xc,Q),t.webnnRegisterGraphInput=w.registerGraphInput.bind(w),t.webnnIsGraphInput=w.isGraphInput.bind(w),t.webnnRegisterGraphOutput=w.registerGraphOutput.bind(w),t.webnnIsGraphOutput=w.isGraphOutput.bind(w),t.webnnCreateTemporaryTensor=w.createTemporaryTensor.bind(w),t.webnnIsGraphInputOutputTypeSupported=w.isGraphInputOutputTypeSupported.bind(w)}};let a=()=>{let l=h=>(...w)=>{let y=st;return w=h(...w),st!=y?new Promise((S,E)=>{_a={resolve:S,reject:E}}):w};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=l(t[h])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,u,d=(l,h)=>{throw h},c=self.location.href,p="";if(n||r){try{p=new URL(".",c).href}catch{}r&&(u=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async l=>{if(M(l))return new Promise((w,y)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?w(S.response):y(S.status)},S.onerror=y,S.send(null)});var h=await fetch(l,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,_,v,$,b=console.log.bind(console),T=console.error.bind(console),I=b,k=T,C=!1,M=l=>l.startsWith("file://");function x(){It.buffer!=N.buffer&&X()}if(i){let l=function(h){try{var w=h.data,y=w.Sc;if(y==="load"){let S=[];self.onmessage=E=>S.push(E),$=()=>{postMessage({Sc:"loaded"});for(let E of S)l(E);self.onmessage=l};for(let E of w.xd)t[E]&&!t[E].proxy||(t[E]=(...R)=>{postMessage({Sc:"callHandler",wd:E,args:R})},E=="print"&&(I=t[E]),E=="printErr"&&(k=t[E]));It=w.Od,X(),m=w.Pd,te(),hr()}else if(y==="run"){(function(S){var E=(x(),V)[S+52>>>2>>>0];S=(x(),V)[S+56>>>2>>>0],Af(E,E-S),pe(E)})(w.Rc),xa(w.Rc,0,0,1,0,0),Ah(),ma(w.Rc),O||(Tf(),O=!0);try{R_(w.Md,w.bd)}catch(S){if(S!="unwind")throw S}}else w.target!=="setimmediate"&&(y==="checkMailbox"?O&&sr():y&&(k(`worker: received unknown command ${y}`),k(w)))}catch(S){throw kf(),S}};var O=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=l}var N,H,q,W,A,V,j,Y,se,U,J,G=!1;function X(){var l=It.buffer;t.HEAP8=N=new Int8Array(l),q=new Int16Array(l),t.HEAPU8=H=new Uint8Array(l),W=new Uint16Array(l),t.HEAP32=A=new Int32Array(l),t.HEAPU32=V=new Uint32Array(l),j=new Float32Array(l),Y=new Float64Array(l),se=new BigInt64Array(l),U=new BigUint64Array(l)}function z(){G=!0,i?$():_t.sb()}function B(l){throw k(l="Aborted("+l+")"),C=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),v==null||v(l),l}function F(){return{a:{ma:nb,gb:tb,g:O_,J:B_,f:N_,o:D_,h:U_,ha:P_,b:L_,T:q_,Ha:Uh,n:G_,$:Gh,Xa:Wh,Da:Vh,Fa:Fh,Ya:Hh,Va:jh,Oa:Kh,Ua:Xh,ka:Yh,Ea:Zh,Ba:Qh,Wa:Jh,Ca:ef,bb:W_,ea:V_,wa:F_,ua:j_,da:X_,O:Y_,H:Z_,va:Q_,_:aw,xa:sw,Ra:ow,za:lw,Ia:dw,sa:cw,fa:pw,Qa:ma,_a:hw,R:yw,r:vw,c:ha,hb:xw,y:Sw,M:Iw,D:Tw,l:kw,s:lf,ib:Ew,I:Cw,S:Mw,j:zw,u:Aw,q:Rw,k:Ow,La:Bw,Ma:Nw,Na:Dw,Ja:hf,Ka:ff,ta:mf,db:Pw,ab:qw,v:Gw,aa:Ww,ga:Vw,$a:Lw,W:Fw,Za:Hw,Aa:jw,F:Uw,U:Kw,la:cr,ya:Yw,fb:Xw,eb:Zw,Sa:wf,Ta:bf,Ga:Oe,V:$f,ja:vf,Pa:xf,ia:Sf,kb:Ub,na:Rb,lb:Db,oa:Ab,G:xb,e:sb,t:ib,w:rb,B:gb,mb:Cb,K:bb,x:lb,pa:Mb,Y:Ob,ba:Eb,nb:kb,ob:Tb,P:yb,qa:Ib,pb:Sb,N:$b,Z:zb,d:ab,A:ub,m:ob,jb:Pb,p:cb,z:pb,C:db,E:hb,L:_b,qb:vb,Q:Bb,ca:wb,X:Nb,rb:mb,ra:fb,i:Jw,a:It,cb:_e}}}async function te(){function l(y,S){var E=_t=y.exports;y={};for(let[R,P]of Object.entries(E))typeof P=="function"?(E=fw(P),y[R]=E):y[R]=P;return _t=y,_t=(function(){var R=_t,P=ee=>ce=>ee(ce)>>>0,Q=ee=>()=>ee()>>>0;return(R=Object.assign({},R)).tb=P(R.tb),R.Xb=Q(R.Xb),R.Zb=P(R.Zb),R.lc=P(R.lc),R.mc=Q(R.mc),R.qc=P(R.qc),R})(),Ft.push(_t._b),If=(y=_t).tb,Tf=y.ub,t._OrtInit=y.vb,t._OrtGetLastError=y.wb,t._OrtCreateSessionOptions=y.xb,t._OrtAppendExecutionProvider=y.yb,t._OrtAddFreeDimensionOverride=y.zb,t._OrtAddSessionConfigEntry=y.Ab,t._OrtReleaseSessionOptions=y.Bb,t._OrtCreateSession=y.Cb,t._OrtReleaseSession=y.Db,t._OrtGetInputOutputCount=y.Eb,t._OrtGetInputOutputMetadata=y.Fb,t._OrtFree=y.Gb,t._OrtCreateTensor=y.Hb,t._OrtGetTensorData=y.Ib,t._OrtReleaseTensor=y.Jb,t._OrtCreateRunOptions=y.Kb,t._OrtAddRunConfigEntry=y.Lb,t._OrtReleaseRunOptions=y.Mb,t._OrtCreateBinding=y.Nb,t._OrtBindInput=y.Ob,t._OrtBindOutput=y.Pb,t._OrtClearBoundOutputs=y.Qb,t._OrtReleaseBinding=y.Rb,t._OrtRunWithBinding=y.Sb,t._OrtRun=y.Tb,t._OrtEndProfiling=y.Ub,t._JsepOutput=y.Vb,t._JsepGetNodeName=y.Wb,pr=y.Xb,ot=t._free=y.Yb,Tn=t._malloc=y.Zb,xa=y.ac,kf=y.bc,Ef=y.cc,Cf=y.dc,Sa=y.ec,Mf=y.fc,zf=y.gc,me=y.hc,kn=y.ic,Af=y.jc,pe=y.kc,Ia=y.lc,he=y.mc,Rf=y.nc,Ta=y.oc,Of=y.pc,Bf=y.qc,Nf=y.rc,ka=y.sc,Df=y.tc,Uf=y.uc,Pf=y.vc,Lf=y.wc,qf=y.xc,Gf=y.yc,Wf=y.zc,Vf=y.Ac,Ff=y.Bc,Hf=y.Cc,jf=y.Dc,Kf=y.Ec,Xf=y.Fc,Yf=y.Gc,Zf=y.Hc,Qf=y.Ic,Jf=y.Jc,em=y.Kc,tm=y.Lc,nm=y.Mc,rm=y.Nc,im=y.Pc,am=y.Qc,sm=y.$c,om=y.ad,um=y.fd,lm=y.jd,dm=y.kd,cm=y.ld,pm=y.md,hm=y.nd,fm=y.od,mm=y.pd,gm=y.qd,ym=y.vd,_m=y.Td,wm=y.Ud,bm=y.Vd,$m=y.Wd,m=S,_t}var h,w=F();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(w,(S,E)=>{y(l(S,E))})}):i?l(new WebAssembly.Instance(m,F()),m):(J??(J=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(y){var S=J;if(!f&&!M(S))try{var E=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,y)}catch(R){k(`wasm streaming compile failed: ${R}`),k("falling back to ArrayBuffer instantiation")}return(async function(R,P){try{var Q=await(async function(ee){if(!f)try{var ce=await o(ee);return new Uint8Array(ce)}catch{}if(ee==J&&f)ee=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";ee=u(ee)}return ee})(R);return await WebAssembly.instantiate(Q,P)}catch(ee){k(`failed to asynchronously prepare wasm: ${ee}`),B(ee)}})(S,y)})(w),l(h.instance,h.module))}class Z{constructor(h){Sm(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var de=l=>{l.terminate(),l.onmessage=()=>{}},xe=[],fe=0,Ie=null,Se=l=>{Le.length==0&&(Oh(),Rh(Le[0]));var h=Le.pop();if(!h)return 6;gt.push(h),it[l.Rc]=h,h.Rc=l.Rc;var w={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return h.postMessage(w,l.rd),0},ye=0,ae=(l,h,...w)=>{var y,S=16*w.length,E=he(),R=Ia(S),P=R>>>3;for(y of w)typeof y=="bigint"?((x(),se)[P++>>>0]=1n,(x(),se)[P++>>>0]=y):((x(),se)[P++>>>0]=0n,(x(),Y)[P++>>>0]=y);return l=Ef(l,0,S,R,h),pe(E),l};function _e(l){if(i)return ae(0,1,l);if(g=l,!(0<ye)){for(var h of gt)de(h);for(h of Le)de(h);Le=[],gt=[],it={},C=!0}d(0,new Z(l))}function Ue(l){if(i)return ae(1,0,l);Oe(l)}var Oe=l=>{if(g=l,i)throw Ue(l),"unwind";_e(l)},Le=[],gt=[],Ft=[],it={},zh=l=>{var h=l.Rc;delete it[h],Le.push(l),gt.splice(gt.indexOf(l),1),l.Rc=0,Cf(h)};function Ah(){Ft.forEach(l=>l())}var Rh=l=>new Promise(h=>{l.onmessage=S=>{var E=S.data;if(S=E.Sc,E.Zc&&E.Zc!=pr()){var R=it[E.Zc];R?R.postMessage(E,E.rd):k(`Internal error! Worker sent a message "${S}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?sr():S==="spawnThread"?Se(E):S==="cleanupThread"?ar(()=>{zh(it[E.Nd])}):S==="loaded"?(l.loaded=!0,h(l)):E.target==="setimmediate"?l.postMessage(E):S==="uncaughtException"?l.onerror(E.error):S==="callHandler"?t[E.wd](...E.args):S&&k(`worker sent an unknown command ${S}`)},l.onerror=S=>{throw k(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var w,y=[];for(w of[])t.propertyIsEnumerable(w)&&y.push(w);l.postMessage({Sc:"load",xd:y,Od:It,Pd:m})});function Oh(){var l=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Le.push(l)}var It,R_=(l,h)=>{ye=0,l=ka(l,h),0<ye?g=l:Sa(l)},nr=[],rr=0;function O_(l){var h=new la(l>>>=0);return(x(),N)[h.Tc+12>>>0]==0&&(Bh(h,!0),rr--),Nh(h,!1),nr.push(h),Bf(l)}var rn=0,B_=()=>{me(0,0);var l=nr.pop();Rf(l.cd),rn=0};function Bh(l,h){h=h?1:0,(x(),N)[l.Tc+12>>>0]=h}function Nh(l,h){h=h?1:0,(x(),N)[l.Tc+13>>>0]=h}class la{constructor(h){this.cd=h,this.Tc=h-24}}var da=l=>{var h=rn;if(!h)return kn(0),0;var w=new la(h);(x(),V)[w.Tc+16>>>2>>>0]=h;var y=(x(),V)[w.Tc+4>>>2>>>0];if(!y)return kn(0),h;for(var S of l){if(S===0||S===y)break;if(Of(S,y,w.Tc+16))return kn(S),h}return kn(y),h};function N_(){return da([])}function D_(l){return da([l>>>0])}function U_(l,h,w,y){return da([l>>>0,h>>>0,w>>>0,y>>>0])}var P_=()=>{var l=nr.pop();l||B("no exception to throw");var h=l.cd;throw(x(),N)[l.Tc+13>>>0]==0&&(nr.push(l),Nh(l,!0),Bh(l,!1),rr++),Ta(h),rn=h};function L_(l,h,w){var y=new la(l>>>=0);throw h>>>=0,w>>>=0,(x(),V)[y.Tc+16>>>2>>>0]=0,(x(),V)[y.Tc+4>>>2>>>0]=h,(x(),V)[y.Tc+8>>>2>>>0]=w,Ta(l),rr++,rn=l}var q_=()=>rr;function Dh(l,h,w,y){return i?ae(2,1,l,h,w,y):Uh(l,h,w,y)}function Uh(l,h,w,y){if(l>>>=0,h>>>=0,w>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return i&&S.length===0?Dh(l,h,w,y):(l={Ld:w,Rc:l,bd:y,rd:S},i?(l.Sc="spawnThread",postMessage(l,S),0):Se(l))}function G_(l){throw rn||(rn=l>>>0),rn}var Ph=globalThis.TextDecoder&&new TextDecoder,Lh=(l,h,w,y)=>{if(w=h+w,y)return w;for(;l[h]&&!(h>=w);)++h;return h},qh=(l,h=0,w,y)=>{if(16<(w=Lh(l,h>>>=0,w,y))-h&&l.buffer&&Ph)return Ph.decode(l.buffer instanceof ArrayBuffer?l.subarray(h,w):l.slice(h,w));for(y="";h<w;){var S=l[h++];if(128&S){var E=63&l[h++];if((224&S)==192)y+=String.fromCharCode((31&S)<<6|E);else{var R=63&l[h++];65536>(S=(240&S)==224?(15&S)<<12|E<<6|R:(7&S)<<18|E<<12|R<<6|63&l[h++])?y+=String.fromCharCode(S):(S-=65536,y+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else y+=String.fromCharCode(S)}return y},Ae=(l,h,w)=>(l>>>=0)?qh((x(),H),l,h,w):"";function Gh(l,h,w){return i?ae(3,1,l,h,w):0}function Wh(l,h){if(i)return ae(4,1,l,h)}function Vh(l,h){if(i)return ae(5,1,l,h)}function Fh(l,h,w){if(i)return ae(6,1,l,h,w)}function Hh(l,h,w){return i?ae(7,1,l,h,w):0}function jh(l,h){if(i)return ae(8,1,l,h)}function Kh(l,h,w){if(i)return ae(9,1,l,h,w)}function Xh(l,h,w,y){if(i)return ae(10,1,l,h,w,y)}function Yh(l,h,w,y){if(i)return ae(11,1,l,h,w,y)}function Zh(l,h,w,y){if(i)return ae(12,1,l,h,w,y)}function Qh(l){if(i)return ae(13,1,l)}function Jh(l,h){if(i)return ae(14,1,l,h)}function ef(l,h,w){if(i)return ae(15,1,l,h,w)}var W_=()=>B(""),at=l=>{l>>>=0;for(var h="";;){var w=(x(),H)[l++>>>0];if(!w)return h;h+=String.fromCharCode(w)}},ca={},pa={},an=class extends Error{constructor(l){super(l),this.name="BindingError"}};function yt(l,h,w={}){return(function(y,S,E={}){var R=S.name;if(!y)throw new an(`type "${R}" must have a positive integer typeid pointer`);if(pa.hasOwnProperty(y)){if(E.yd)return;throw new an(`Cannot register type '${R}' twice`)}pa[y]=S,ca.hasOwnProperty(y)&&(S=ca[y],delete ca[y],S.forEach(P=>P()))})(l,h,w)}var tf=(l,h,w)=>{switch(h){case 1:return w?y=>(x(),N)[y>>>0]:y=>(x(),H)[y>>>0];case 2:return w?y=>(x(),q)[y>>>1>>>0]:y=>(x(),W)[y>>>1>>>0];case 4:return w?y=>(x(),A)[y>>>2>>>0]:y=>(x(),V)[y>>>2>>>0];case 8:return w?y=>(x(),se)[y>>>3>>>0]:y=>(x(),U)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${l}`)}};function V_(l,h,w,y,S){l>>>=0,w>>>=0,h=at(h>>>0);let E=R=>R;if(y=y===0n){let R=8*w;E=P=>BigInt.asUintN(R,P),S=E(S)}yt(l,{name:h,Oc:E,Vc:(R,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:tf(h,w,!y),Wc:null})}function F_(l,h,w,y){yt(l>>>=0,{name:h=at(h>>>0),Oc:function(S){return!!S},Vc:function(S,E){return E?w:y},Uc:function(S){return this.Oc((x(),H)[S>>>0])},Wc:null})}var nf=[],Ht=[0,1,,1,null,1,!0,1,!1,1];function ha(l){9<(l>>>=0)&&--Ht[l+1]===0&&(Ht[l]=void 0,nf.push(l))}var je=l=>{if(!l)throw new an(`Cannot use deleted val. handle = ${l}`);return Ht[l]},tt=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=nf.pop()||Ht.length;return Ht[h]=l,Ht[h+1]=1,h}};function fa(l){return this.Oc((x(),V)[l>>>2>>>0])}var H_={name:"emscripten::val",Oc:l=>{var h=je(l);return ha(l),h},Vc:(l,h)=>tt(h),Uc:fa,Wc:null};function j_(l){return yt(l>>>0,H_)}var K_=(l,h)=>{switch(h){case 4:return function(w){return this.Oc((x(),j)[w>>>2>>>0])};case 8:return function(w){return this.Oc((x(),Y)[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${l}`)}};function X_(l,h,w){w>>>=0,yt(l>>>=0,{name:h=at(h>>>0),Oc:y=>y,Vc:(y,S)=>S,Uc:K_(h,w),Wc:null})}function Y_(l,h,w,y,S){l>>>=0,w>>>=0,h=at(h>>>0);let E=P=>P;if(y===0){var R=32-8*w;E=P=>P<<R>>>R,S=E(S)}yt(l,{name:h,Oc:E,Vc:(P,Q)=>Q,Uc:tf(h,w,y!==0),Wc:null})}function Z_(l,h,w){function y(E){var R=(x(),V)[E>>>2>>>0];return E=(x(),V)[E+4>>>2>>>0],new S((x(),N).buffer,E,R)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];yt(l>>>=0,{name:w=at(w>>>0),Oc:y,Uc:y},{yd:!0})}var Tt=(l,h,w)=>{var y=(x(),H);if(h>>>=0,0<w){var S=h;w=h+w-1;for(var E=0;E<l.length;++E){var R=l.codePointAt(E);if(127>=R){if(h>=w)break;y[h++>>>0]=R}else if(2047>=R){if(h+1>=w)break;y[h++>>>0]=192|R>>6,y[h++>>>0]=128|63&R}else if(65535>=R){if(h+2>=w)break;y[h++>>>0]=224|R>>12,y[h++>>>0]=128|R>>6&63,y[h++>>>0]=128|63&R}else{if(h+3>=w)break;y[h++>>>0]=240|R>>18,y[h++>>>0]=128|R>>12&63,y[h++>>>0]=128|R>>6&63,y[h++>>>0]=128|63&R,E++}}y[h>>>0]=0,l=h-S}else l=0;return l},ir=l=>{for(var h=0,w=0;w<l.length;++w){var y=l.charCodeAt(w);127>=y?h++:2047>=y?h+=2:55296<=y&&57343>=y?(h+=4,++w):h+=3}return h};function Q_(l,h){yt(l>>>=0,{name:h=at(h>>>0),Oc(w){var y=(x(),V)[w>>>2>>>0];return y=Ae(w+4,y,!0),ot(w),y},Vc(w,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var S=typeof y=="string";if(!(S||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new an("Cannot pass non-string to std::string");var E=S?ir(y):y.length,R=Tn(4+E+1),P=R+4;return(x(),V)[R>>>2>>>0]=E,S?Tt(y,P,E+1):(x(),H).set(y,P>>>0),w!==null&&w.push(ot,R),R},Uc:fa,Wc(w){ot(w)}})}var rf=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,J_=(l,h,w)=>{if(l>>>=1,16<(h=Lh((x(),W),l,h/2,w))-l&&rf)return rf.decode((x(),W).slice(l,h));for(w="";l<h;++l){var y=(x(),W)[l>>>0];w+=String.fromCharCode(y)}return w},ew=(l,h,w)=>{if(w??(w=2147483647),2>w)return 0;var y=h;w=(w-=2)<2*l.length?w/2:l.length;for(var S=0;S<w;++S){var E=l.charCodeAt(S);(x(),q)[h>>>1>>>0]=E,h+=2}return(x(),q)[h>>>1>>>0]=0,h-y},tw=l=>2*l.length,nw=(l,h,w)=>{var y="";l>>>=2;for(var S=0;!(S>=h/4);S++){var E=(x(),V)[l+S>>>0];if(!E&&!w)break;y+=String.fromCodePoint(E)}return y},rw=(l,h,w)=>{if(h>>>=0,w??(w=2147483647),4>w)return 0;var y=h;w=y+w-4;for(var S=0;S<l.length;++S){var E=l.codePointAt(S);if(65535<E&&S++,(x(),A)[h>>>2>>>0]=E,(h+=4)+4>w)break}return(x(),A)[h>>>2>>>0]=0,h-y},iw=l=>{for(var h=0,w=0;w<l.length;++w)65535<l.codePointAt(w)&&w++,h+=4;return h};function aw(l,h,w){if(l>>>=0,h>>>=0,w=at(w>>>=0),h===2)var y=J_,S=ew,E=tw;else y=nw,S=rw,E=iw;yt(l,{name:w,Oc:R=>{var P=(x(),V)[R>>>2>>>0];return P=y(R+4,P*h,!0),ot(R),P},Vc:(R,P)=>{if(typeof P!="string")throw new an(`Cannot pass non-string to C++ string type ${w}`);var Q=E(P),ee=Tn(4+Q+h);return(x(),V)[ee>>>2>>>0]=Q/h,S(P,ee+4,Q+h),R!==null&&R.push(ot,ee),ee},Uc:fa,Wc(R){ot(R)}})}function sw(l,h){yt(l>>>=0,{zd:!0,name:h=at(h>>>0),Oc:()=>{},Vc:()=>{}})}function ow(l){xa(l>>>0,!r,1,!n,131072,!1),Ah()}var ar=l=>{if(!C)try{if(l(),!(0<ye))try{i?pr()&&Sa(g):Oe(g)}catch(h){h instanceof Z||h=="unwind"||d(0,h)}}catch(h){h instanceof Z||h=="unwind"||d(0,h)}},uw=!Atomics.waitAsync||((xm=globalThis.navigator)==null?void 0:xm.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ma(l){l>>>=0,uw||(Atomics.waitAsync((x(),A),l>>>2,l).value.then(sr),l+=128,Atomics.store((x(),A),l>>>2,1))}var sr=()=>ar(()=>{var l=pr();l&&(ma(l),zf())});function lw(l,h){(l>>>=0)==h>>>0?setTimeout(sr):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=it[l])&&l.postMessage({Sc:"checkMailbox"})}var ga=[];function dw(l,h,w,y,S){for(h>>>=0,S>>>=0,ga.length=0,w=S>>>3,y=S+y>>>3;w<y;){var E;E=(x(),se)[w++>>>0]?(x(),se)[w++>>>0]:(x(),Y)[w++>>>0],ga.push(E)}return(h?Ea[h]:eb[l])(...ga)}var cw=()=>{ye=0};function pw(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):zh(it[l])}function hw(l){}var or=l=>{try{l()}catch(h){B(h)}};function fw(l){var h=(...w)=>{ur.push(l);try{return l(...w)}finally{C||(ur.pop(),st&&kt===1&&ur.length===0&&(kt=0,ye+=1,or(wm),typeof Fibers<"u"&&Fibers.Zd()))}};return of.set(l,h),h}var kt=0,st=null,af=0,ur=[],ya=new Map,sf=new Map,of=new Map,mw=0,_a=null,gw=[],uf=l=>(function(h){if(!C){if(kt===0){var w=!1,y=!1;h((S=0)=>{if(!C&&(af=S,w=!0,y)){kt=2,or(()=>bm(st)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var E=(function(){var Q=(x(),A)[st+8>>>2>>>0];return Q=sf.get(Q),Q=of.get(Q),--ye,Q()})()}catch(Q){E=Q,S=!0}var R=!1;if(!st){var P=_a;P&&(_a=null,(S?P.reject:P.resolve)(E),R=!0)}if(S&&!R)throw E}}),y=!0,w||(kt=1,st=(function(){var S=Tn(65548),E=S+12;if((x(),V)[S>>>2>>>0]=E,(x(),V)[S+4>>>2>>>0]=E+65536,E=ur[0],!ya.has(E)){var R=mw++;ya.set(E,R),sf.set(R,E)}return E=ya.get(E),(x(),A)[S+8>>>2>>>0]=E,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),or(()=>_m(st)))}else kt===2?(kt=0,or($m),ot(st),st=null,gw.forEach(ar)):B(`invalid state: ${kt}`);return af}})(h=>{l().then(h)});function yw(l){return l>>>=0,uf(async()=>{var h=await je(l);return tt(h)})}var wa=[],_w=l=>{var h=wa.length;return wa.push(l),h},ww=(l,h)=>{for(var w=Array(l),y=0;y<l;++y){var S=y,E=(x(),V)[h+4*y>>>2>>>0],R=pa[E];if(R===void 0)throw l=`parameter ${y}`,E=If(E),h=at(E),ot(E),new an(`${l} has unknown type ${h}`);w[S]=R}return w},bw=(l,h,w)=>{var y=[];return l=l(y,w),y.length&&((x(),V)[h>>>2>>>0]=tt(y)),l},$w={},lr=l=>{var h=$w[l];return h===void 0?at(l):h};function vw(l,h,w){var[y,...S]=ww(l,h>>>0);h=y.Vc.bind(y);var E=S.map(Q=>Q.Uc.bind(Q));l--;var R={toValue:je};switch(l=E.map((Q,ee)=>{var ce=`argFromPtr${ee}`;return R[ce]=Q,`${ce}(args${ee?"+"+8*ee:""})`}),w){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:R.getStringOrSymbol=lr,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${l})`,y.zd||(R.toReturnWire=h,R.emval_returnValue=bw,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,w=new Function(Object.keys(R),P)(...Object.values(R)),P=`methodCaller<(${S.map(Q=>Q.name)}) => ${y.name}>`,_w(Object.defineProperty(w,"name",{value:P}))}function xw(l,h){return h>>>=0,(l=je(l>>>0))==je(h)}function Sw(l){return(l>>>=0)?(l=lr(l),tt(globalThis[l])):tt(globalThis)}function Iw(l){return l=lr(l>>>0),tt(t[l])}function Tw(l,h){return h>>>=0,l=je(l>>>0),h=je(h),tt(l[h])}function kw(l){9<(l>>>=0)&&(Ht[l+1]+=1)}function lf(l,h,w,y,S){return wa[l>>>0](h>>>0,w>>>0,y>>>0,S>>>0)}function Ew(l,h,w,y,S){return lf(l>>>0,h>>>0,w>>>0,y>>>0,S>>>0)}function Cw(){return tt([])}function Mw(l){l=je(l>>>0);for(var h=Array(l.length),w=0;w<l.length;w++)h[w]=l[w];return tt(h)}function zw(l){return tt(lr(l>>>0))}function Aw(){return tt({})}function Rw(l){for(var h=je(l>>>=0);h.length;){var w=h.pop();h.pop()(w)}ha(l)}function Ow(l,h,w){h>>>=0,w>>>=0,l=je(l>>>0),h=je(h),w=je(w),l[h]=w}function Bw(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(x(),A)[h>>>2>>>0]=l.getUTCSeconds(),(x(),A)[h+4>>>2>>>0]=l.getUTCMinutes(),(x(),A)[h+8>>>2>>>0]=l.getUTCHours(),(x(),A)[h+12>>>2>>>0]=l.getUTCDate(),(x(),A)[h+16>>>2>>>0]=l.getUTCMonth(),(x(),A)[h+20>>>2>>>0]=l.getUTCFullYear()-1900,(x(),A)[h+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),A)[h+28>>>2>>>0]=l}var df=l=>l%4==0&&(l%100!=0||l%400==0),cf=[0,31,60,91,121,152,182,213,244,274,305,335],pf=[0,31,59,90,120,151,181,212,243,273,304,334];function Nw(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(x(),A)[h>>>2>>>0]=l.getSeconds(),(x(),A)[h+4>>>2>>>0]=l.getMinutes(),(x(),A)[h+8>>>2>>>0]=l.getHours(),(x(),A)[h+12>>>2>>>0]=l.getDate(),(x(),A)[h+16>>>2>>>0]=l.getMonth(),(x(),A)[h+20>>>2>>>0]=l.getFullYear()-1900,(x(),A)[h+24>>>2>>>0]=l.getDay();var w=(df(l.getFullYear())?cf:pf)[l.getMonth()]+l.getDate()-1|0;(x(),A)[h+28>>>2>>>0]=w,(x(),A)[h+36>>>2>>>0]=-60*l.getTimezoneOffset(),w=new Date(l.getFullYear(),6,1).getTimezoneOffset();var y=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(w!=y&&l.getTimezoneOffset()==Math.min(y,w)),(x(),A)[h+32>>>2>>>0]=l}function Dw(l){l>>>=0;var h=new Date((x(),A)[l+20>>>2>>>0]+1900,(x(),A)[l+16>>>2>>>0],(x(),A)[l+12>>>2>>>0],(x(),A)[l+8>>>2>>>0],(x(),A)[l+4>>>2>>>0],(x(),A)[l>>>2>>>0],0),w=(x(),A)[l+32>>>2>>>0],y=h.getTimezoneOffset(),S=new Date(h.getFullYear(),6,1).getTimezoneOffset(),E=new Date(h.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(E,S);return 0>w?(x(),A)[l+32>>>2>>>0]=+(S!=E&&R==y):0<w!=(R==y)&&(S=Math.max(E,S),h.setTime(h.getTime()+6e4*((0<w?R:S)-y))),(x(),A)[l+24>>>2>>>0]=h.getDay(),w=(df(h.getFullYear())?cf:pf)[h.getMonth()]+h.getDate()-1|0,(x(),A)[l+28>>>2>>>0]=w,(x(),A)[l>>>2>>>0]=h.getSeconds(),(x(),A)[l+4>>>2>>>0]=h.getMinutes(),(x(),A)[l+8>>>2>>>0]=h.getHours(),(x(),A)[l+12>>>2>>>0]=h.getDate(),(x(),A)[l+16>>>2>>>0]=h.getMonth(),(x(),A)[l+20>>>2>>>0]=h.getYear(),l=h.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function hf(l,h,w,y,S,E,R){return i?ae(16,1,l,h,w,y,S,E,R):-52}function ff(l,h,w,y,S,E){if(i)return ae(17,1,l,h,w,y,S,E)}var In={},Uw=()=>performance.timeOrigin+performance.now();function mf(l,h){if(i)return ae(18,1,l,h);if(In[l]&&(clearTimeout(In[l].id),delete In[l]),!h)return 0;var w=setTimeout(()=>{delete In[l],ar(()=>Mf(l,performance.timeOrigin+performance.now()))},h);return In[l]={id:w,Yd:h},0}function Pw(l,h,w,y){l>>>=0,h>>>=0,w>>>=0,y>>>=0;var S=new Date().getFullYear(),E=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var R=Math.max(E,S);(x(),V)[l>>>2>>>0]=60*R,(x(),A)[h>>>2>>>0]=+(E!=S),l=(h=P=>{var Q=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(Q/60)).padStart(2,"0")}${String(Q%60).padStart(2,"0")}`})(E),h=h(S),S<E?(Tt(l,w,17),Tt(h,y,17)):(Tt(l,y,17),Tt(h,w,17))}var Lw=()=>Date.now();function qw(l,h,w){return w>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(x(),se)[w>>>3>>>0]=BigInt(l),0):28}var ba=[],gf=(l,h)=>{ba.length=0;for(var w;w=(x(),H)[l++>>>0];){var y=w!=105;h+=(y&=w!=112)&&h%8?4:0,ba.push(w==112?(x(),V)[h>>>2>>>0]:w==106?(x(),se)[h>>>3>>>0]:w==105?(x(),A)[h>>>2>>>0]:(x(),Y)[h>>>3>>>0]),h+=y?8:4}return ba};function Gw(l,h,w){return l>>>=0,h=gf(h>>>0,w>>>0),Ea[l](...h)}function Ww(l,h,w){return l>>>=0,h=gf(h>>>0,w>>>0),Ea[l](...h)}var Vw=()=>{};function Fw(l,h){return k(Ae(l>>>0,h>>>0))}var Hw=()=>{throw ye+=1,"unwind"};function jw(){return 4294901760}var Kw=()=>navigator.hardwareConcurrency,jt={},dr=l=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+h[1]:0},yf=l=>{for(var h of l)(l=dr(h))&&(jt[l]=h)};function Xw(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),yf(l),jt.gd=dr(l[3]),jt.Jd=l,jt.gd}function cr(l){if(!(l=jt[l>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(l))l=h[1];else{if(!(h=/^(.+?)@/.exec(l)))return 0;l=h[1]}ot(cr.hd??0),h=ir(l)+1;var w=Tn(h);return w&&Tt(l,w,h),cr.hd=w,cr.hd}function Yw(l){l>>>=0;var h=(x(),H).length;if(l<=h||4294901760<l)return!1;for(var w=1;4>=w;w*=2){var y=h*(1+.2/w);y=Math.min(y,l+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(l,y)/65536))-It.buffer.byteLength+65535)/65536|0;try{It.grow(y),X();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function Zw(l,h,w){if(l>>>=0,h>>>=0,jt.gd==l)var y=jt.Jd;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),yf(y);for(var S=3;y[S]&&dr(y[S])!=l;)++S;for(l=0;l<w&&y[l+S];++l)(x(),A)[h+4*l>>>2>>>0]=dr(y[l+S]);return l}var $a,va={},_f=()=>{var y;if(!$a){var l,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((y=globalThis.navigator)==null?void 0:y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in va)va[l]===void 0?delete h[l]:h[l]=va[l];var w=[];for(l in h)w.push(`${l}=${h[l]}`);$a=w}return $a};function wf(l,h){if(i)return ae(19,1,l,h);l>>>=0,h>>>=0;var w,y=0,S=0;for(w of _f()){var E=h+y;(x(),V)[l+S>>>2>>>0]=E,y+=Tt(w,E,1/0)+1,S+=4}return 0}function bf(l,h){if(i)return ae(20,1,l,h);l>>>=0,h>>>=0;var w=_f();for(var y of((x(),V)[l>>>2>>>0]=w.length,l=0,w))l+=ir(y)+1;return(x(),V)[h>>>2>>>0]=l,0}function $f(l){return i?ae(21,1,l):52}function vf(l,h,w,y){return i?ae(22,1,l,h,w,y):52}function xf(l,h,w,y){return i?ae(23,1,l,h,w,y):70}var Qw=[null,[],[]];function Sf(l,h,w,y){if(i)return ae(24,1,l,h,w,y);h>>>=0,w>>>=0,y>>>=0;for(var S=0,E=0;E<w;E++){var R=(x(),V)[h>>>2>>>0],P=(x(),V)[h+4>>>2>>>0];h+=8;for(var Q=0;Q<P;Q++){var ee=l,ce=(x(),H)[R+Q>>>0],we=Qw[ee];ce===0||ce===10?((ee===1?I:k)(qh(we)),we.length=0):we.push(ce)}S+=P}return(x(),V)[y>>>2>>>0]=S,0}function Jw(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)Oh();xe.push(async()=>{var h=(async function(){if(!i)return Promise.all(Le.map(Rh))})();fe++,await h,--fe==0&&Ie&&(h=Ie,Ie=null,h())})})(),i||(It=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),X()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>he(),t.stackRestore=l=>pe(l),t.stackAlloc=l=>Ia(l),t.setValue=function(l,h,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":case"i8":(x(),N)[l>>>0]=h;break;case"i16":(x(),q)[l>>>1>>>0]=h;break;case"i32":(x(),A)[l>>>2>>>0]=h;break;case"i64":(x(),se)[l>>>3>>>0]=BigInt(h);break;case"float":(x(),j)[l>>>2>>>0]=h;break;case"double":(x(),Y)[l>>>3>>>0]=h;break;case"*":(x(),V)[l>>>2>>>0]=h;break;default:B(`invalid type for setValue: ${w}`)}},t.getValue=function(l,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(x(),N)[l>>>0];case"i16":return(x(),q)[l>>>1>>>0];case"i32":return(x(),A)[l>>>2>>>0];case"i64":return(x(),se)[l>>>3>>>0];case"float":return(x(),j)[l>>>2>>>0];case"double":return(x(),Y)[l>>>3>>>0];case"*":return(x(),V)[l>>>2>>>0];default:B(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Ae,t.stringToUTF8=Tt,t.lengthBytesUTF8=ir;var If,Tf,pr,ot,Tn,xa,kf,Ef,Cf,Sa,Mf,zf,me,kn,Af,pe,Ia,he,Rf,Ta,Of,Bf,Nf,ka,Df,Uf,Pf,Lf,qf,Gf,Wf,Vf,Ff,Hf,jf,Kf,Xf,Yf,Zf,Qf,Jf,em,tm,nm,rm,im,am,sm,om,um,lm,dm,cm,pm,hm,fm,mm,gm,ym,_m,wm,bm,$m,_t,eb=[_e,Ue,Dh,Gh,Wh,Vh,Fh,Hh,jh,Kh,Xh,Yh,Zh,Qh,Jh,ef,hf,ff,mf,wf,bf,$f,vf,xf,Sf],Ea={1003524:(l,h,w,y,S)=>{if(t===void 0||!t.Xc)return 1;if((l=Ae(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(h=Number(h>>>0),w=Number(w>>>0),y=Number(y>>>0),h+w>l.byteLength)return 3;try{let E=l.subarray(h,h+w);switch(S){case 0:(x(),H).set(E,y>>>0);break;case 1:t.Qd?t.Qd(y,E):t.Id(y,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,h,w)=>{t.td(l,(x(),H).subarray(h>>>0,h+w>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w),!0)},1004704:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,h,w)=>{t.$b("HardSigmoid",l,{alpha:h,beta:w})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,h,w)=>{t.$b("Clip",l,{min:h,max:w})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,h)=>{t.$b("Elu",l,{alpha:h})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,h)=>{t.$b("LeakyRelu",l,{alpha:h})},1006444:(l,h)=>{t.$b("ThresholdedRelu",l,{alpha:h})},1006514:(l,h)=>{t.$b("Cast",l,{to:h})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,h,w,y,S)=>{t.$b("ReduceMean",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1007283:(l,h,w,y,S)=>{t.$b("ReduceMax",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1007457:(l,h,w,y,S)=>{t.$b("ReduceMin",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1007631:(l,h,w,y,S)=>{t.$b("ReduceProd",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1007806:(l,h,w,y,S)=>{t.$b("ReduceSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1007980:(l,h,w,y,S)=>{t.$b("ReduceL1",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1008153:(l,h,w,y,S)=>{t.$b("ReduceL2",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1008326:(l,h,w,y,S)=>{t.$b("ReduceLogSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1008503:(l,h,w,y,S)=>{t.$b("ReduceSumSquare",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1008683:(l,h,w,y,S)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,h,w)=>{t.$b("Transpose",l,{perm:h?Array.from((x(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[]})},1009040:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Ae(w),format:y?"NHWC":"NCHW"})},1009173:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Ae(w),format:y?"NHWC":"NCHW"})},1009306:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce,Et)=>{t.$b("ConvTranspose",l,{format:Q?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[S],pads:[E,R],strides:[P],wIsConst:()=>!!(x(),N)[ee>>>0],outputPadding:ce?Array.from((x(),A).subarray(Number(ce)>>>0,Number(we)>>>0)):[],outputShape:Te?Array.from((x(),A).subarray(Number(Te)>>>0,Number(Ce)>>>0)):[],activation:Ae(Et)})},1009739:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:h,dilations:Array.from((x(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((x(),A).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),A).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(x(),N)[Q>>>0],outputPadding:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],outputShape:we?Array.from((x(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[],activation:Ae(Ce)})},1010400:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce,Et)=>{t.$b("ConvTranspose",l,{format:Q?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[S],pads:[E,R],strides:[P],wIsConst:()=>!!(x(),N)[ee>>>0],outputPadding:ce?Array.from((x(),A).subarray(Number(ce)>>>0,Number(we)>>>0)):[],outputShape:Te?Array.from((x(),A).subarray(Number(Te)>>>0,Number(Ce)>>>0)):[],activation:Ae(Et)})},1010833:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:h,dilations:Array.from((x(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((x(),A).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),A).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(x(),N)[Q>>>0],outputPadding:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],outputShape:we?Array.from((x(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[],activation:Ae(Ce)})},1011494:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1011585:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("AveragePool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((x(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1012064:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1012155:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("AveragePool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((x(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1012634:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1012721:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("MaxPool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((x(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1013196:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1013283:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce)=>{t.$b("MaxPool",l,{format:Ce?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],pads:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],strides:we?Array.from((x(),A).subarray(Number(we)>>>0,Number(Te)>>>0)):[]})},1013758:(l,h,w,y,S)=>{t.$b("Gemm",l,{alpha:h,beta:w,transA:y,transB:S})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,h,w,y)=>{t.$b("ArgMax",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014024:(l,h,w,y)=>{t.$b("ArgMin",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014132:(l,h)=>{t.$b("Softmax",l,{axis:h})},1014195:(l,h)=>{t.$b("Concat",l,{axis:h})},1014255:(l,h,w,y,S)=>{t.$b("Split",l,{axis:h,numOutputs:w,splitSizes:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,h)=>{t.$b("Gather",l,{axis:Number(h)})},1014536:(l,h)=>{t.$b("GatherElements",l,{axis:Number(h)})},1014615:(l,h)=>{t.$b("GatherND",l,{batch_dims:Number(h)})},1014694:(l,h,w,y,S,E,R,P,Q,ee,ce)=>{t.$b("Resize",l,{antialias:h,axes:w?Array.from((x(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],coordinateTransformMode:Ae(S),cubicCoeffA:E,excludeOutside:R,extrapolationValue:P,keepAspectRatioPolicy:Ae(Q),mode:Ae(ee),nearestMode:Ae(ce)})},1015056:(l,h,w,y,S,E,R)=>{t.$b("Slice",l,{starts:h?Array.from((x(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[],ends:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[],axes:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015486:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,h)=>{t.$b("Einsum",l,{equation:Ae(h)})},1015734:(l,h,w,y,S)=>{t.$b("Pad",l,{mode:h,value:w,pads:y?Array.from((x(),A).subarray(Number(y)>>>0,Number(S)>>>0)):[]})},1015877:(l,h,w,y,S,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!S,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016046:(l,h,w,y,S,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!S,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016215:(l,h,w)=>{t.$b("CumSum",l,{exclusive:Number(h),reverse:Number(w)})},1016312:(l,h,w)=>{t.$b("DequantizeLinear",l,{axis:h,blockSize:w})},1016402:(l,h,w,y,S)=>{t.$b("GridSample",l,{align_corners:h,mode:Ae(w),padding_mode:Ae(y),format:S?"NHWC":"NCHW"})},1016572:(l,h,w,y,S)=>{t.$b("GridSample",l,{align_corners:h,mode:Ae(w),padding_mode:Ae(y),format:S?"NHWC":"NCHW"})},1016742:(l,h)=>{t.$b("ScatterND",l,{reduction:Ae(h)})},1016827:(l,h,w,y,S,E,R,P,Q)=>{t.$b("Attention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:S,doRotary:E,qkvHiddenSizes:R?Array.from((x(),A).subarray(Number(P)>>>0,Number(P)+R>>>0)):[],pastPresentShareBuffer:!!Q})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce,Et,Ca)=>{t.$b("Conv",l,{format:we?"NHWC":"NCHW",auto_pad:h,dilations:w?Array.from((x(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],group:S,kernel_shape:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Q)>>>0)):[],strides:ee?Array.from((x(),A).subarray(Number(ee)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!(x(),N)[Number(Te)>>>0],activation:Ae(Ce),activation_params:Et?Array.from((x(),j).subarray(Number(Et)>>>0,Number(Ca)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,h,w,y,S,E,R,P,Q)=>{t.$b("GroupQueryAttention",l,{numHeads:h,kvNumHeads:w,scale:y,softcap:S,doRotary:E,rotaryInterleaved:R,smoothSoftmax:P,localWindowSize:Q})},1018124:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018235:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018346:(l,h,w,y,S,E)=>{t.$b("MatMulNBits",l,{k:h,n:w,accuracyLevel:y,bits:S,blockSize:E})},1018473:(l,h,w,y,S,E)=>{t.$b("MultiHeadAttention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:S,doRotary:E})},1018632:(l,h)=>{t.$b("QuickGelu",l,{alpha:h})},1018696:(l,h,w,y,S)=>{t.$b("RotaryEmbedding",l,{interleaved:!!h,numHeads:w,rotaryEmbeddingDim:y,scale:S})},1018835:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1018937:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1019039:(l,h,w,y)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:h,quantizeAxis:w,blockSize:y})},1019160:l=>{t.Fd(l)},1019194:(l,h)=>t.Hd(Number(l),Number(h),t.Yc.Kd,t.Yc.errors)};function tb(l,h,w){return uf(async()=>{await t.Dd(Number(l),Number(h),Number(w))})}function nb(){return typeof wasmOffsetConverter<"u"}function rb(l,h,w,y){var S=he();try{return Vf(l,h,w,y)}catch(E){if(pe(S),E!==E+0)throw E;me(1,0)}}function ib(l,h,w){var y=he();try{return Lf(l,h,w)}catch(S){if(pe(y),S!==S+0)throw S;me(1,0)}}function ab(l){var h=he();try{Df(l)}catch(w){if(pe(h),w!==w+0)throw w;me(1,0)}}function sb(l,h){var w=he();try{return ka(l,h)}catch(y){if(pe(w),y!==y+0)throw y;me(1,0)}}function ob(l,h,w){var y=he();try{Nf(l,h,w)}catch(S){if(pe(y),S!==S+0)throw S;me(1,0)}}function ub(l,h){var w=he();try{Ff(l,h)}catch(y){if(pe(w),y!==y+0)throw y;me(1,0)}}function lb(l,h,w,y,S,E,R){var P=he();try{return Gf(l,h,w,y,S,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function db(l,h,w,y,S,E){var R=he();try{Uf(l,h,w,y,S,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function cb(l,h,w,y){var S=he();try{Wf(l,h,w,y)}catch(E){if(pe(S),E!==E+0)throw E;me(1,0)}}function pb(l,h,w,y,S){var E=he();try{Pf(l,h,w,y,S)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function hb(l,h,w,y,S,E,R){var P=he();try{jf(l,h,w,y,S,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function fb(l,h,w,y,S,E,R){var P=he();try{Kf(l,h,w,y,S,E,R)}catch(Q){if(pe(P),Q!==Q+0)throw Q;me(1,0)}}function mb(l,h,w,y,S,E,R,P){var Q=he();try{Qf(l,h,w,y,S,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function gb(l,h,w,y,S){var E=he();try{return Hf(l,h,w,y,S)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function yb(l,h,w){var y=he();try{return Jf(l,h,w)}catch(S){if(pe(y),S!==S+0)throw S;me(1,0)}}function _b(l,h,w,y,S,E,R,P){var Q=he();try{em(l,h,w,y,S,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function wb(l,h,w,y,S,E,R,P,Q,ee,ce,we){var Te=he();try{Xf(l,h,w,y,S,E,R,P,Q,ee,ce,we)}catch(Ce){if(pe(Te),Ce!==Ce+0)throw Ce;me(1,0)}}function bb(l,h,w,y,S,E){var R=he();try{return Yf(l,h,w,y,S,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function $b(l,h,w){var y=he();try{return tm(l,h,w)}catch(S){if(pe(y),S!==S+0)throw S;return me(1,0),0n}}function vb(l,h,w,y,S,E,R,P,Q){var ee=he();try{qf(l,h,w,y,S,E,R,P,Q)}catch(ce){if(pe(ee),ce!==ce+0)throw ce;me(1,0)}}function xb(l){var h=he();try{return nm(l)}catch(w){if(pe(h),w!==w+0)throw w;me(1,0)}}function Sb(l,h){var w=he();try{return ym(l,h)}catch(y){if(pe(w),y!==y+0)throw y;return me(1,0),0n}}function Ib(l){var h=he();try{return rm(l)}catch(w){if(pe(h),w!==w+0)throw w;return me(1,0),0n}}function Tb(l,h,w,y){var S=he();try{return lm(l,h,w,y)}catch(E){if(pe(S),E!==E+0)throw E;me(1,0)}}function kb(l,h,w,y,S){var E=he();try{return dm(l,h,w,y,S)}catch(R){if(pe(E),R!==R+0)throw R;me(1,0)}}function Eb(l,h,w,y,S,E){var R=he();try{return cm(l,h,w,y,S,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function Cb(l,h,w,y,S,E){var R=he();try{return pm(l,h,w,y,S,E)}catch(P){if(pe(R),P!==P+0)throw P;me(1,0)}}function Mb(l,h,w,y,S,E,R,P){var Q=he();try{return Zf(l,h,w,y,S,E,R,P)}catch(ee){if(pe(Q),ee!==ee+0)throw ee;me(1,0)}}function zb(l,h,w,y,S){var E=he();try{return hm(l,h,w,y,S)}catch(R){if(pe(E),R!==R+0)throw R;return me(1,0),0n}}function Ab(l,h,w,y){var S=he();try{return fm(l,h,w,y)}catch(E){if(pe(S),E!==E+0)throw E;me(1,0)}}function Rb(l,h,w,y){var S=he();try{return mm(l,h,w,y)}catch(E){if(pe(S),E!==E+0)throw E;me(1,0)}}function Ob(l,h,w,y,S,E,R,P,Q,ee,ce,we){var Te=he();try{return gm(l,h,w,y,S,E,R,P,Q,ee,ce,we)}catch(Ce){if(pe(Te),Ce!==Ce+0)throw Ce;me(1,0)}}function Bb(l,h,w,y,S,E,R,P,Q,ee,ce){var we=he();try{om(l,h,w,y,S,E,R,P,Q,ee,ce)}catch(Te){if(pe(we),Te!==Te+0)throw Te;me(1,0)}}function Nb(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce,Et,Ca){var Lb=he();try{um(l,h,w,y,S,E,R,P,Q,ee,ce,we,Te,Ce,Et,Ca)}catch(Ma){if(pe(Lb),Ma!==Ma+0)throw Ma;me(1,0)}}function Db(l,h,w){var y=he();try{return im(l,h,w)}catch(S){if(pe(y),S!==S+0)throw S;me(1,0)}}function Ub(l,h,w){var y=he();try{return am(l,h,w)}catch(S){if(pe(y),S!==S+0)throw S;me(1,0)}}function Pb(l,h,w,y){var S=he();try{sm(l,h,w,y)}catch(E){if(pe(S),E!==E+0)throw E;me(1,0)}}function hr(){if(0<fe)Ie=hr;else if(i)_==null||_(t),z();else{for(var l=xe;0<l.length;)l.shift()(t);0<fe?Ie=hr:(t.calledRun=!0,C||(z(),_==null||_(t)))}}return i||(_t=await te(),hr()),t.PTR_SIZE=4,G?t:new Promise((l,h)=>{_=l,v=h})}var Ja,es,Fm=K(()=>{var e,t;Ja=Qa,es=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),es&&Qa()}),vr,xr,ts,Ve,ns,zn,rs,is,Sr,as,Ir,ss,Tr,os,kr=K(()=>{wr(),vr=typeof location>"u"?void 0:location.origin,xr=self.location.href>"file:"&&self.location.href<"file;",ts=()=>{{if(xr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,vr).href}return self.location.href}},Ve=ts(),ns=()=>{if(Ve&&!Ve.startsWith("blob:"))return Ve.substring(0,Ve.lastIndexOf("/")+1)},zn=(e,t)=>{try{let n=t??Ve;return(n?new URL(e,n):new URL(e)).origin===vr}catch{return!1}},rs=(e,t)=>{let n=t??Ve;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},is=(e,t)=>`${t??"./"}${e}`,Sr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},as=async e=>(await import(e)).default,Ir=(Vm(),sn(Xa)).default,ss=async()=>{if(!Ve)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(zn(Ve))return[void 0,Ir()];let e=await Sr(Ve);return[e,Ir(e)]},Tr=(Fm(),sn(Za)).default,os=async(e,t,n,r)=>{let i=Tr&&!(e||t);if(i)if(Ve)i=zn(Ve)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Tr];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??rs(s,t),o=n&&a&&!zn(a,t),u=o?await Sr(a):a??is(s,t);return[o?u:void 0,await as(u)]}}}),Er,An,dn,Cr,us,ls,ds,Mr,Ee,At=K(()=>{kr(),An=!1,dn=!1,Cr=!1,us=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ls=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ds=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Mr=async e=>{if(An)return Promise.resolve();if(dn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Cr)throw new Error("previous call to 'initializeWebAssembly()' failed.");dn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ds())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ls())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=us();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,o=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,c=e.wasmBinary,[p,f]=await os(o,s,n>1,!!c||!!d),m=!1,g=[];if(t>0&&g.push(new Promise(_=>{setTimeout(()=>{m=!0,_()},t)})),g.push(new Promise((_,v)=>{let $={numThreads:n};if(c)$.wasmBinary=c,$.locateFile=b=>b;else if(d||s)$.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,o).href;else if(p){let b=ns();b&&($.locateFile=T=>b+T)}f($).then(b=>{dn=!1,An=!0,Er=b,_(),p&&URL.revokeObjectURL(p)},b=>{dn=!1,Cr=!0,v(b)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ee=()=>{if(An&&Er)return Er;throw new Error("WebAssembly is not initialized yet.")}}),Xe,Rn,ve,zr=K(()=>{At(),Xe=(e,t)=>{let n=Ee(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Rn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")Rn(s,a+".",n,r);else if(typeof s=="string"||typeof s=="number")r(a,s.toString());else if(typeof s=="boolean")r(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ve=e=>{let t=Ee(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let s=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),cs,Hm=K(()=>{At(),zr(),cs=e=>{let t=Ee(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Xe(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),n===0&&ve("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Rn(e.extra,"",new WeakSet,(a,o)=>{let u=Xe(a,r),d=Xe(o,r);t._OrtAddRunConfigEntry(n,u,d)!==0&&ve(`Can't set a run config entry: ${a} - ${o}.`)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),s}}}),ps,hs,fs,Rt,ms,gs,jm=K(()=>{At(),zr(),ps=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},hs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},fs=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Rt=(e,t,n,r)=>{let i=Xe(t,r),s=Xe(n,r);Ee()._OrtAddSessionConfigEntry(e,i,s)!==0&&ve(`Can't set a session config entry: ${t} - ${n}.`)},ms=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Rt(e,"session.disable_quant_qdq","1",n),Rt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&Rt(e,"deviceType",p,n)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Rt(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Xe(s,n),u=a.length,d=0,c=0;if(u>0){d=Ee()._malloc(u*Ee().PTR_SIZE),n.push(d),c=Ee()._malloc(u*Ee().PTR_SIZE),n.push(c);for(let p=0;p<u;p++)Ee().setValue(d+p*Ee().PTR_SIZE,a[p][0],"*"),Ee().setValue(c+p*Ee().PTR_SIZE,a[p][1],"*")}await Ee()._OrtAppendExecutionProvider(e,o,d,c,u)!==0&&ve(`Can't append execution provider: ${s}.`)}},gs=async e=>{let t=Ee(),n=0,r=[],i=e||{};fs(i);try{let s=ps(i.graphOptimizationLevel??"all"),a=hs(i.executionMode??"sequential"),o=typeof i.logId=="string"?Xe(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?Xe(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,u,d,c),n===0&&ve("Can't create session options."),i.executionProviders&&await ms(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Rt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,f]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=Xe(p,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&ve(`Can't set a free dimension override: ${p} - ${f}.`)}return i.extra!==void 0&&Rn(i.extra,"",new WeakSet,(p,f)=>{Rt(n,p,f,r)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ve("Can't release session options."),r.forEach(a=>t._free(a)),s}}}),Ot,dt,Bt,On,Bn,Ar,Rr,Or,oe=K(()=>{Ot=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},dt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Bt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return n>0?Math.ceil(r*n):void 0},On=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Bn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ar=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Rr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Or=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Br,ys=K(()=>{wr(),Br=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(s,a,d).set(u),a+=d}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),_s,ws,bs,$s,Nr,vs,ge,ct=K(()=>{oe(),_s=["V","I","W","E","F"],ws=(e,t)=>{console.log(`[${_s[e]},${new Date().toISOString()}]${t}`)},Nr=(e,t)=>{bs=e,$s=t},vs=(e,t)=>{let n=Bn(e),r=Bn(bs);n>=r&&ws(n,typeof t=="function"?t():t)},ge=(...e)=>{$s&&vs(...e)}}),xs,Zt,D,Nn,Ss,Is,Ts,ue=K(()=>{xs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Zt=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(n){if(r<2||i<2)return;let o=xs.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=n?3:1;o<=s;o++){let u=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let c=Math.max(u,d);if(u&&d)a[s-o]=Math.max(u,d);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class fr{static size(t){return fr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),s=r-1;for(;s>=0;){if(t[s]%n===0){i[s]=t[s]/n;break}if(n%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,n/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return fr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return fr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let s=n;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,s)=>i+n[s]+n[s+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Nn=class En{static adjustPoolAttributes(t,n,r,i,s,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<r.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=r[o]||a[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)En.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,s,a,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return En.computeShapeHelper(t,n,u,r,i,s,a,o),u}static computeConvOutputShape(t,n,r,i,s,a,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return En.computeShapeHelper(!1,t,u,r,i,s,a,o),u}static computeShapeHelper(t,n,r,i,s,a,o,u){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(En.adjustPadAndReturnShape(n[d+2],i[d],s[d],a[d],o,d,d+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,s,a,o,u){let d=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+n-1)/n-1)*n+i-t;return s[a]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/n+1)}},Ss=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Zt.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Is=-34028234663852886e22,Ts=34028234663852886e22}),Dr,ks=K(()=>{oe(),Dr=(e,t)=>new(On(t))(e)}),Ur,Pr,Lr,Es,qr,Cs,Gr,Wr,Vr,Ms,zs,Km=K(()=>{oe(),ct(),Ur=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Pr=(e,t)=>{if(t==="int32")return e;let n=Ur.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,s=new(On(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Lr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Es=1,qr=()=>Es++,Cs=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Gr=(e,t)=>{let n=Ur.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Wr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Gr(this.dataType,this.tensorShape)}destroy(){ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Lr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Vr=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=Cs.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Gr(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Pr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Lr(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ms=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=qr();return this.tensorTrackersById.set(e,new Vr(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),s=qr(),a=new Wr({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(s,new Vr(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,n,r,i,s,a){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,n)){ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:s});return new Wr({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},zs=(...e)=>new Ms(...e)}),cn,As,Rs,Xm=K(()=>{oe(),At(),ks(),Km(),ct(),cn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),As=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,s)=>i===r[s]&&e[i]===t[i])},Rs=class{constructor(e){this.tensorManager=zs(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Nr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>As(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let s=cn.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,r,i)}async createTemporaryTensor(e,t,n){ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=cn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Ee().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Dr(n,t)}}registerMLTensor(e,t,n,r){let i=cn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let s=this.tensorManager.registerTensor(e,t,i,r);return ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,n,r,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=s.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+n).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let p=Pr(new Uint8Array(d),"int64");c=new Int32Array(p.buffer),i.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ge("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=cn.get(Ot(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Fr=K(()=>{}),Hr,Dn,Un,Os,Bs,jr,Kr,Ns,Ds,Ym=K(()=>{ct(),Fr(),Hr=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Dn=[],Un=e=>Math.ceil(Number(e)/16)*16,Os=e=>{for(let t=0;t<Dn.length;t++){let n=Dn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Bs=1,jr=()=>Bs++,Kr=async(e,t,n,r)=>{let i=Un(n),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{s.destroy()}},Ns=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Hr)Dn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,s=Un(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Un(n.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=jr();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Os(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:jr(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Kr(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Hr.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ds=(...e)=>new Ns(...e)}),Us,$e,ze=K(()=>{Us=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$e=e=>new Us(e)}),Qt,Pn,Re,De,ie,Me,Xr,Jt,bt,re,pn,L,ne,Ps,Yr,Ls,qs,le=K(()=>{oe(),ue(),Qt=64,Pn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Re=(e,t=1)=>{let n=Pn(e,t);return typeof n=="string"?n:n[0]},De=(e,t=1)=>{let n=Pn(e,t);return typeof n=="string"?n:n[1]},ie=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},Me=e=>e%4===0?4:e%2===0?2:1,Xr=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Jt=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,bt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,pn=(e,t,n,r,i)=>{let s=typeof n=="number",a=s?n:n.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Pn(t,i),c=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],f={indices:u,value:c,storage:p,tensor:t},m=G=>typeof G=="string"?G:`${G}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=s?"uniforms.":"",v=`${_}${e}_shape`,$=`${_}${e}_strides`,b="";for(let G=0;G<a-1;G++)b+=`
    let dim${G} = current / ${re($,G,a)};
    let rest${G} = current % ${re($,G,a)};
    indices[${G}] = dim${G};
    current = rest${G};
    `;b+=`indices[${a-1}] = current;`;let T=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,I=G=>(g.offsetToIndices=!0,a<2?G:`o2i_${e}(${G})`),k=[];if(a>=2)for(let G=a-1;G>=0;G--)k.push(`${re($,G,a)} * (indices[${G}])`);let C=a<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,M=G=>(g.indicesToOffset=!0,a<2?G:`i2o_${e}(${G})`),x=(...G)=>a===0?"0u":`${f.indices}(${G.map(m).join(",")})`,O=(G,X)=>a<2?`${G}`:`${re(G,X,a)}`,N=(G,X,z)=>a<2?`${G}=${z};`:`${re(G,X,a)}=${z};`,H={},q=(G,X)=>{g.broadcastedIndicesToOffset=!0;let z=`${X.name}broadcastedIndicesTo${e}Offset`;if(z in H)return`${z}(${G})`;let B=[];for(let F=a-1;F>=0;F--){let te=X.indicesGet("outputIndices",F+X.rank-a);B.push(`${O($,F)} * (${te} % ${O(v,F)})`)}return H[z]=`fn ${z}(outputIndices: ${X.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${z}(${G})`},W=(G,X)=>(()=>{if(f.storage===f.value)return`${e}[${G}]=${X};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${G}]=vec2<u32>(u32(${X}), select(0u, 0xFFFFFFFFu, ${X} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${G}]=vec2<u32>(u32(${X}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${G}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${X}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=G=>(()=>{if(f.storage===f.value)return`${e}[${G}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${G}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${G}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${G}] & 0xFFu), bool(${e}[${G}] & 0xFF00u), bool(${e}[${G}] & 0xFF0000u), bool(${e}[${G}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),V=a<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${c} {
    return ${A(`i2o_${e}(indices)`)};
  }`,j=a<2?"":(()=>{let G=o.map(z=>`d${z}: u32`).join(", "),X=o.map(z=>`d${z}`).join(", ");return`
  fn get_${e}(${G}) -> ${c} {
    return get_${e}ByIndices(${x(X)});
  }`})(),Y=(...G)=>{if(G.length!==a)throw new Error(`indices length must be ${a}`);let X=G.map(m).join(",");return a===0?A("0u"):a===1?A(X[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${X})`)},se=G=>a<2?A(G):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${G})`),U=a<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${c}) {
    ${W(`i2o_${e}(indices)`,"value")}
  }`,J=a<2?"":(()=>{let G=o.map(z=>`d${z}: u32`).join(", "),X=o.map(z=>`d${z}`).join(", ");return`
  fn set_${e}(${G}, value: ${c}) {
    set_${e}ByIndices(${x(X)}, value);
  }`})();return{impl:()=>{let G=[],X=!1;return g.offsetToIndices&&(G.push(T),X=!0),g.indicesToOffset&&(G.push(C),X=!0),g.broadcastedIndicesToOffset&&(Object.values(H).forEach(z=>G.push(z)),X=!0),g.set&&(G.push(J),X=!0),g.setByIndices&&(G.push(U),X=!0),g.get&&(G.push(j),X=!0),g.getByIndices&&(G.push(V),X=!0),!s&&X&&G.unshift(`const ${v} = ${f.indices}(${n.join(",")});`,`const ${$} = ${f.indices}(${D.computeStrides(n).join(",")});`),G.join(`
`)},type:f,offsetToIndices:I,indicesToOffset:M,broadcastedIndicesToOffset:q,indices:x,indicesGet:O,indicesSet:N,set:(...G)=>{if(G.length!==a+1)throw new Error(`indices length must be ${a}`);let X=G[a];if(typeof X!="string")throw new Error("value must be string");let z=G.slice(0,a).map(m).join(",");return a===0?W("0u",X):a===1?W(z[0],X):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${z}, ${X})`)},setByOffset:W,setByIndices:(G,X)=>a<2?W(G,X):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${G}, ${X});`),get:Y,getByOffset:A,getByIndices:se,usage:r,name:e,strides:$,shape:v,rank:a}},L=(e,t,n,r=1)=>pn(e,t,n,"input",r),ne=(e,t,n,r=1)=>pn(e,t,n,"output",r),Ps=(e,t,n)=>pn(e,t,n,"atomicOutput",1),Yr=(e,t,n,r=1)=>pn(e,t,n,"internal",r),Ls=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Qt){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},qs=(e,t)=>new Ls(e,t)}),Gs,Zr,Ws,Vs,Fs,Hs,Fe,js,Ks,$t=K(()=>{oe(),ue(),ze(),le(),Gs=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Zr=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ws=(e,t)=>D.sortBasedOnPerm(e,Zr(e.length,t)),Vs=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Fs=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Hs=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Fe=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Zr(r,t),s=Ws(e.dims,i),a=e.dims,o=s,u=r<2||Hs(i,e.dims),d;if(u)return d=g=>{let _=L("input",n,a,4),v=ne("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,v)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:d};let{newShape:c,newPerm:p}=Fs(e.dims,i),f=D.areEqual(p,[2,3,1]),m=D.areEqual(p,[3,1,2]);if(c.length===2||f||m){a=f?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let g=16;return d=_=>{let v=L("a",n,a.length),$=ne("output",n,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(v,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${_.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${v.getByIndices(`${v.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:_},...ie(a,o)]}},getShaderSource:d}}return d=g=>{let _=L("a",n,a.length),v=ne("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,v)}

  ${Vs(i,r,_,v)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=D.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ie(a,o)]}},getShaderSource:d}},js=(e,t)=>{Gs(e.inputs,t.perm),e.compute(Fe(e.inputs[0],t.perm))},Ks=e=>$e({perm:e.perm})}),Xs,Ys,Zs,Qs,Js,eo,to,no,ro,io,Ye,ao,so,oo,uo,lo,co,po,ho,fo,mo,Zm=K(()=>{oe(),ue(),le(),Jr(),$t(),Xs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ys={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Zs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Qs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Js=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},eo=(e,t)=>{let n=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&n.push(e[s]);let i=t.map(s=>e[s]);return[n,i]},to=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let s=0;s<n;s++)t.indexOf(s)===-1?r.push(e[i++]):r.push(1);return r},no=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},ro=(e,t)=>{let n=[];if(!no(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},io=(e,t,n,r,i,s,a)=>{let o=n[0].dims,u=D.size(s),d=D.size(a),c=L("_A",n[0].dataType,o),p=ne("output",i,s),f=64;u===1&&(f=256);let m=`
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

          var bestValue = f32(${Zs[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Xs[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ys[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Qs[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ye=(e,t,n,r)=>{let i=e.inputs.length===1?n:Qr(e.inputs,n),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,g)=>g));let a=D.normalizeAxes(s,e.inputs[0].dims.length),o=a,u=e.inputs[0],d=ro(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Fe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Js(o.length,u.dims.length));let[c,p]=eo(u.dims,o),f=c;i.keepDims&&(f=to(c,a)),e.compute(io(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,p),{inputs:[u]})},ao=(e,t)=>{Ye(e,"ReduceMeanShared",t,"mean")},so=(e,t)=>{Ye(e,"ReduceL1Shared",t,"l1")},oo=(e,t)=>{Ye(e,"ReduceL2Shared",t,"l2")},uo=(e,t)=>{Ye(e,"ReduceLogSumExpShared",t,"logSumExp")},lo=(e,t)=>{Ye(e,"ReduceMaxShared",t,"max")},co=(e,t)=>{Ye(e,"ReduceMinShared",t,"min")},po=(e,t)=>{Ye(e,"ReduceProdShared",t,"prod")},ho=(e,t)=>{Ye(e,"ReduceSumShared",t,"sum")},fo=(e,t)=>{Ye(e,"ReduceSumSquareShared",t,"sumSquare")},mo=(e,t)=>{Ye(e,"ReduceLogSumShared",t,"logSum")}}),Ze,go,Ln,Qr,Qe,yo,_o,wo,bo,$o,vo,xo,So,Io,To,Je,ko,Eo,Co,Mo,zo,Ao,Ro,Oo,Bo,No,Jr=K(()=>{oe(),ue(),ze(),le(),Zm(),Ze=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},go=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ln=(e,t,n,r,i,s,a=!1,o=!1)=>{let u=[],d=n[0].dims,c=d.length,p=D.normalizeAxes(i,c),f=!o&&p.length===0;d.forEach((_,v)=>{f||p.indexOf(v)>=0?a&&u.push(1):u.push(_)});let m=u.length,g=D.size(u);return{name:e,shaderCache:t,getShaderSource:_=>{let v=[],$=L("_A",n[0].dataType,c),b=ne("output",s,m),T=r($,b,p),I=T[2];for(let k=0,C=0;k<c;k++)f||p.indexOf(k)>=0?(a&&C++,I=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${T[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${$.indicesSet("input_indices",k,`j${k}`)}
                  ${I}
                }`):(v.push(`${$.indicesSet("input_indices",k,b.indicesGet("output_indices",C))};`),C++);return`

        ${_.registerUniform("output_size","u32").declareVariables($,b)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${I}
          ${T[3]}
          ${T.length===4?b.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ie(d,u)]})}},Qr=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),$e({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Qe=(e,t,n,r)=>{let i=e.inputs,s=i.length===1?n:Qr(i,n);e.compute(Ln(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?go:r,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},yo=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},_o=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},wo=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},bo=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},$o=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceMax",t,(n,r,i)=>{let s=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(n.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},vo=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceMean",t,(n,r,i)=>{let s=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},xo=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceMin",t,(n,r,i)=>{let s=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},So=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Io=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},To=(e,t)=>{Ze(e.inputs),Qe(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Je=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:i*=e[s];return i<32&&r>1024},ko=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vo(e,t):ao(e,t)},Eo=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_o(e,t):so(e,t)},Co=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wo(e,t):oo(e,t)},Mo=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bo(e,t):uo(e,t)},zo=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$o(e,t):lo(e,t)},Ao=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xo(e,t):co(e,t)},Ro=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?So(e,t):po(e,t)},Oo=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Io(e,t):ho(e,t)},Bo=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?To(e,t):fo(e,t)},No=(e,t)=>{Je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):mo(e,t)}}),ei,Do,Uo,ti,Qm=K(()=>{oe(),ze(),Jr(),ei=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Do=(e,t)=>{ei(e.inputs);let n=(r,i,s)=>{let a=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ln("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Uo=(e,t)=>{ei(e.inputs);let n=(r,i,s)=>{let a=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ln("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ti=e=>$e(e)}),Po,qn,Lo,qo,Go,hn,Wo,Vo,ni=K(()=>{oe(),ue(),Fr(),le(),Po=(e,t)=>{let n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],d=n.dims[1],c=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,f=p,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=d;if(p!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(a){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=a.dims[3])}let v=g+_,$=-1,b=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:v,maxSequenceLength:$,inputHiddenSize:c,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},qn=(e,t,n)=>t&&e?`
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
    `,Lo=(e,t,n,r,i,s,a,o)=>{let u=Me(a?1:s),d=64,c=s/u;c<d&&(d=32);let p=Math.ceil(s/u/d),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:c},{type:12,data:p}],m=Re(e.dataType,u),g=De(1,u),_=["type"];a&&_.push("type"),o&&_.push("type");let v=$=>{let b=ne("x",e.dataType,e.dims,u),T=[b],I=a?L("seq_lens",a.dataType,a.dims):void 0;I&&T.push(I);let k=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;k&&T.push(k);let C=De(e.dataType),M=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(M).declareVariables(...T)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${qn(I,k,!1)}
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
        x[offset + i] = ${b.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:_},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},qo=(e,t,n,r,i,s,a,o,u)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&r,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=p?[s.batchSize,f,d,s.headSize]:void 0,g=s.nReps?s.nReps:1,_=s.scale===0?1/Math.sqrt(s.headSize):s.scale,v=Me(s.headSize),$=s.headSize/v,b=12,T={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},I=[{type:12,data:s.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:_},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:g}],k=p&&r&&D.size(r.dims)>0,C=["type","type"];k&&C.push("type"),i&&C.push("type"),o&&C.push("type"),u&&C.push("type");let M=[{dims:c,dataType:t.dataType,gpuDataType:0}];p&&M.push({dims:m,dataType:t.dataType,gpuDataType:0});let x=O=>{let N=L("q",t.dataType,t.dims,v),H=L("key",n.dataType,n.dims,v),q=[N,H];if(k){let U=L("past_key",r.dataType,r.dims,v);q.push(U)}i&&q.push(L("attention_bias",i.dataType,i.dims));let W=o?L("seq_lens",o.dataType,o.dims):void 0;W&&q.push(W);let A=u?L("total_sequence_length_input",u.dataType,u.dims):void 0;A&&q.push(A);let V=ne("output",t.dataType,c),j=[V];p&&j.push(ne("present_key",t.dataType,m,v));let Y=De(1,v),se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${N.type.storage}, ${b*b}>;
  ${O.registerUniforms(se).declareVariables(...q,...j)}
  ${O.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${qn(W,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
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
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(v){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${v}`)}})()};
        output[outputIdx] = ${V.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${i!==void 0};${r!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:M,dispatchGroup:T,programUniforms:I}),getShaderSource:x}},Go=(e,t,n,r,i,s,a=void 0,o=void 0)=>{let u=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,p=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,c],_=12,v={x:Math.ceil(i.vHeadSize/_),y:Math.ceil(i.sequenceLength/_),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],b=p&&r&&D.size(r.dims)>0,T=["type","type"];b&&T.push("type"),a&&T.push("type"),o&&T.push("type");let I=[{dims:g,dataType:t.dataType,gpuDataType:0}];p&&I.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=C=>{let M=L("probs",t.dataType,t.dims),x=L("v",n.dataType,n.dims),O=[M,x];b&&O.push(L("past_value",r.dataType,r.dims));let N=a?L("seq_lens",a.dataType,a.dims):void 0;a&&O.push(N);let H=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(H);let q=[ne("output",t.dataType,g)];p&&q.push(ne("present_value",t.dataType,m));let W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${M.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${M.type.value}, ${_*_}>;
  ${C.registerUniforms(W).declareVariables(...O,...q)}
  ${C.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${qn(N,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${M.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:v,programUniforms:$}),getShaderSource:k}},hn=(e,t,n,r,i,s,a,o,u,d,c=void 0,p=void 0)=>{let f=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),m=f>1?a:void 0,g=f>1?o:void 0,_=f>1?d.pastSequenceLength:0,v=_+d.kvSequenceLength,$=u&&D.size(u.dims)>0?u:void 0,b=[t,n];m&&D.size(m.dims)>0&&b.push(m),$&&b.push($),c&&b.push(c),p&&b.push(p);let T=e.compute(qo(f,t,n,m,$,d,_,c,p),{inputs:b,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Lo(T,d.batchSize,d.numHeads,_,d.sequenceLength,v,c,p),{inputs:c&&p?[T,c,p]:[T],outputs:[]});let I=[T,r];g&&D.size(g.dims)>0&&I.push(g),c&&I.push(c),p&&I.push(p),e.compute(Go(f,T,r,g,d,_,c,p),{inputs:I,outputs:f>1?[0,2]:[0]})},Wo=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=p=>{let f=ne("output_q",u[0].dataType,n),m=ne("output_k",u[0].dataType,n),g=ne("output_v",u[0].dataType,n),_=L("input",u[0].dataType,u[0].dims),v=L("weight",u[1].dataType,u[1].dims),$=L("bias",u[2].dataType,u[2].dims),b=_.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${b}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${b}, ${a*a}>;
  var<workgroup> tileWeightK: array<${b}, ${a*a}>;
  var<workgroup> tileWeightV: array<${b}, ${a*a}>;
  ${p.registerUniforms(T).declareVariables(_,v,$,f,m,g)}
  ${p.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},Vo=(e,t)=>{let n=Po(e.inputs,t),[r,i,s]=Wo(e,n);return hn(e,r,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Fo,Ho,jo,Ko,Jm=K(()=>{He(),oe(),ue(),ze(),le(),Fo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,s)=>{let a=i.length;if(a!==r.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Ho=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,s=e[0].dims,a=r?Me(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,u=D.size(s)/a,d=r,c=d?s.length:s,p=L("x",e[0].dataType,e[0].dims,a),f=L("scale",e[1].dataType,e[1].dims,o),m=L("bias",e[2].dataType,e[2].dims,o),g=L("inputMean",e[3].dataType,e[3].dims,o),_=L("inputVar",e[4].dataType,e[4].dims,o),v=ne("y",e[0].dataType,c,a),$=()=>{let T="";if(r)T=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let I=1;I<f.rank;I++)T+=`cIndices[${I}] = outputIndices[${I}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},b=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(p,f,m,g,_,v)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${a}`)};
    ${$()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ie(s)]:[{type:12,data:u}]})}},jo=e=>$e(e),Ko=(e,t)=>{let{inputs:n,outputCount:r}=e,i=jo({...t,outputCount:r});if(ke.webgpu.validateInputContent&&Fo(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ho(n,i))}}),Xo,Yo,Zo,eg=K(()=>{ue(),le(),Xo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Yo=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,s=L("input",i,t,4),a=L("bias",i,[n],4),o=L("residual",i,t,4),u=ne("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(s,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Zo=e=>{Xo(e.inputs),e.compute(Yo(e.inputs))}}),Qo,be,Jo,eu,tu,nu,ru,iu,au,su,ou,uu,lu,du,cu,pu,fn,hu,Gn,fu,mu,gu,yu,_u,wu,bu,$u,vu,xu,Su,Iu,Tu,ku,Eu,Cu,ri,Mu,ii,ai,zu,Au,Ru,Ou,Bu,Nu,si=K(()=>{oe(),ue(),ze(),le(),Qo=(e,t,n,r,i,s,a)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=L("inputData",n,[o],4),c=ne("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},be=(e,t,n,r,i,s=e.dataType,a,o)=>{let u=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Qo(d,D.size(e.dims),e.dataType,s,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(D.size(d[0].dims)/64/4)},programUniforms:u})}},Jo=e=>{e.compute(be(e.inputs[0],"Abs","abs"))},eu=e=>{e.compute(be(e.inputs[0],"Acos","acos"))},tu=e=>{e.compute(be(e.inputs[0],"Acosh","acosh"))},nu=e=>{e.compute(be(e.inputs[0],"Asin","asin"))},ru=e=>{e.compute(be(e.inputs[0],"Asinh","asinh"))},iu=e=>{e.compute(be(e.inputs[0],"Atan","atan"))},au=e=>{e.compute(be(e.inputs[0],"Atanh","atanh"))},su=e=>$e(e),ou=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(be(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},uu=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return $e({min:t,max:n})},lu=(e,t)=>{let n=t||uu(e.inputs),r=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},du=e=>{e.compute(be(e.inputs[0],"Ceil","ceil"))},cu=e=>{e.compute(be(e.inputs[0],"Cos","cos"))},pu=e=>{e.compute(be(e.inputs[0],"Cosh","cosh"))},fn=e=>$e(e),hu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Gn=(e="f32")=>`
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
}`,fu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Gn(t)))},mu=e=>{e.compute(be(e.inputs[0],"Exp","exp"))},gu=e=>{e.compute(be(e.inputs[0],"Floor","floor"))},yu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Gn(t)))},_u=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},wu=e=>{e.compute(be(e.inputs[0],"Not",t=>`!${t}`))},bu=e=>{e.compute(be(e.inputs[0],"Neg",t=>`-${t}`))},$u=e=>{e.compute(be(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},vu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},xu=e=>{e.compute(be(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Su=e=>$e(e),Iu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Tu=e=>{e.compute(be(e.inputs[0],"Sin","sin"))},ku=e=>{e.compute(be(e.inputs[0],"Sinh","sinh"))},Eu=e=>{e.compute(be(e.inputs[0],"Sqrt","sqrt"))},Cu=e=>{e.compute(be(e.inputs[0],"Tan","tan"))},ri=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Mu=e=>{e.compute(be(e.inputs[0],"Tanh",ri))},ii=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ri("v")};
}
`,ai=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,zu=e=>{let t=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"FastGelu",ai,ii(t),void 0,e.inputs[0].dataType))},Au=(e,t)=>{let n=De(e.inputs[0].dataType);return e.compute(be(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ru=e=>{e.compute(be(e.inputs[0],"Log","log"))},Ou=(e,t)=>`
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
`,Bu=e=>`quick_gelu_impl(${e})`,Nu=(e,t)=>{let n=De(e.inputs[0].dataType);e.compute(be(e.inputs[0],"QuickGelu",Bu,Ou(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Du,Uu,Pu,tg=K(()=>{ue(),le(),si(),Du=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Uu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=L("input",e[0].dataType,e[0].dims,4),r=L("bias",e[0].dataType,[e[0].dims[2]],4),i=ne("output",e[0].dataType,t,4),s=D.size(t)/4,a=Re(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Gn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Pu=e=>{Du(e.inputs),e.compute(Uu(e.inputs))}}),Lu,qu,et,Gu,Wu,Vu,Fu,Hu,ju,Ku,Xu,Yu,Zu,ng=K(()=>{oe(),ue(),le(),Lu=(e,t,n,r,i,s,a,o,u,d,c,p)=>{let f,m;typeof o=="string"?f=m=(b,T)=>`${o}((${b}),(${T}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=ne("outputData",c,r.length,4),_=L("aData",u,t.length,4),v=L("bData",d,n.length,4),$;if(i)if(s){let b=D.size(t)===1,T=D.size(n)===1,I=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;b||T?$=g.setByOffset("global_idx",m(b?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),T?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(a||I?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||k?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",m(_.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(T,I,k="")=>{let C=`aData[indexA${I}][componentA${I}]`,M=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${g.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${_.broadcastedIndicesToOffset(`outputIndices${I}`,g)};
            let offsetB${I} = ${v.broadcastedIndicesToOffset(`outputIndices${I}`,g)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${T}[${I}] = ${k}(${f(C,M)});
          `};c===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(_,v,g)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},qu=(e,t,n,r,i,s,a=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),d=!D.areEqual(o,u),c=o,p=D.size(o),f=!1,m=!1,g=[d];if(d){let _=Zt.calcShape(o,u,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");c=_.slice(),p=D.size(c);let v=D.size(o)===1,$=D.size(u)===1,b=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(v),g.push($),g.push(b),g.push(T);let I=1;for(let k=1;k<c.length;k++){let C=o[o.length-k],M=u[u.length-k];if(C===M)I*=C;else break}I%4===0?(m=!0,f=!0):(v||$||b||T)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>Lu(_,o,u,c,f,d,m,i,n.dataType,r.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(c)/4)},...ie(o,u,c)]})}},et=(e,t,n,r,i,s)=>{e.compute(qu(t,i??"",e.inputs[0],e.inputs[1],n,r,s))},Gu=e=>{et(e,"Add",(t,n)=>`${t}+${n}`)},Wu=e=>{et(e,"Div",(t,n)=>`${t}/${n}`)},Vu=e=>{et(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Fu=e=>{et(e,"Mul",(t,n)=>`${t}*${n}`)},Hu=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;et(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},ju=e=>{et(e,"Sub",(t,n)=>`${t}-${n}`)},Ku=e=>{et(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},Xu=e=>{et(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Yu=e=>{et(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Zu=e=>{et(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Qu,Ju,el,tl,nl,rl,rg=K(()=>{oe(),ue(),ze(),le(),Qu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,s=r.dims.length;e.forEach((a,o)=>{if(o!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((u,d)=>{if(d!==t&&u!==r.dims[d])throw new Error("non concat dimensions must match")})}})},Ju=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,el=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(s):i===0?r.push(`if (inputIndex == ${i}u) { ${s} }`):i===n-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${i}) { ${s} }`)}return r.join(`
`)},tl=(e,t,n,r)=>{let i=D.size(n),s=new Array(e.length),a=new Array(e.length),o=0,u=[],d=[],c=[{type:12,data:i}];for(let _=0;_<e.length;++_)o+=e[_].dims[t],s[_]=o,d.push(e[_].dims.length),a[_]=L(`input${_}`,r,d[_]),u.push("rank"),c.push({type:12,data:s[_]});for(let _=0;_<e.length;++_)c.push(...ie(e[_].dims));c.push(...ie(n));let p=ne("output",r,n.length),f=p.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),g=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)_.registerUniform(`sizeInConcatAxis${v}`,"u32");return _.declareVariables(...a,p)})()}

  ${Ju(s.length,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${el(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:g}},nl=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);Qu(n,i);let s=r.slice();s[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(o=>D.size(o.dims)>0);e.compute(tl(a,i,s,n[0].dataType),{inputs:a})},rl=e=>$e({axis:e.axis})}),Nt,Dt,Ut,oi,Pt=K(()=>{oe(),ue(),Nt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Dt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ut=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},oi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Is,Ts];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ne,il,ui=K(()=>{Ne=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},il=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),al,ig=K(()=>{al=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),mn,li,di=K(()=>{oe(),ue(),le(),Pt(),mn=(e,t,n,r,i)=>{let s=r-n;return`
      ${Array.from({length:n}).map((a,o)=>`
      if (${re(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,re(i,o+s,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},li=(e,t,n,r,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a[a.length-2],d=o[o.length-1],c=a[a.length-1],p=Me(d),f=Me(c),m=Me(u),g=D.size(n)/p/m,_=e.length>2,v=r?r.slice(0,-2):n.slice(0,-2),$=[D.size(v),u,d],b=[{type:12,data:g},{type:12,data:u},{type:12,data:d},{type:12,data:c}];Dt(t,b),b.push(...ie(v,a,o)),_&&b.push(...ie(e[2].dims)),b.push(...ie($));let T=I=>{let k=Yr("batch_dims",e[0].dataType,v.length),C=L("a",e[0].dataType,a.length,f),M=L("b",e[1].dataType,o.length,p),x=ne("output",e[0].dataType,$.length,p),O=Re(x.type.tensor),N=Nt(t,x.type.value,O),H=[C,M],q="";if(_){let V=i?p:1;H.push(L("bias",e[2].dataType,e[2].dims.length,V)),q=`${i?`value += bias[col / ${V}];`:`value += ${x.type.value}(bias[row + i]);`}`}let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ut(t,W);let A=()=>{let V=`var a_data: ${C.type.value};`;for(let j=0;j<f;j++)V+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${p}];`;for(let j=0;j<m;j++){V+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${f}];`;for(let Y=0;Y<f;Y++)V+=`
            values[${j}] = fma(${M.type.value}(a_data${f===1?"":`[${Y}]`}), b_data${Y}, values[${j}]);
`}return V};return`
  ${I.registerUniforms(W).registerInternalVariables(k).declareVariables(...H,x)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    var values: array<${x.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${q}
      ${N}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${f};${m};${i}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:T}}}),sl,ol,ci,pi,ul,hi,ll,Wn,fi=K(()=>{oe(),ue(),le(),Pt(),di(),ui(),sl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,ol=(e,t)=>e?`
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
        }`,ci=(e,t,n="f32",r,i=!1,s=32,a=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],c=i?u:s,p=i?s:u,f=c/t[0],m=s/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
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
          ${sl(i,r)}
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

          ${ol(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},pi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,ul=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",hi=(e,t,n="f32",r,i=!1,s=32,a=!1,o=32,u=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],p=i?d:s,f=i?s:d;if(!(f%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=p/t[0],_=s/t[1],v=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${pi(i,r)}
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
      ${pi(i,r)}
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
      ${ul(i)}
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
    ${v}
  }
`},ll=(e,t,n,r,i=!1)=>{let[s,a,o,u]=r,d=Re(r[0].type.tensor);return`
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
    `},Wn=(e,t,n,r,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),d=o.slice(0,-2),c=r?r.slice(0,-2):n.slice(0,-2),p=D.size(c),f=a[a.length-2],m=a[a.length-1],g=o[o.length-1],_=m%4===0&&g%4===0,v=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(g/$[0]/v[0]),Math.ceil(f/$[1]/v[1]),Math.ceil(p/$[2]/v[2])],T=_?4:1,I=[...u,f,m/T],k=I.length,C=[...d,m,g/T],M=C.length,x=[p,f,g/T],O=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];Dt(t,O),O.push(...ie(c,I,C));let N=["rank","rank"],H=e.length>2;H&&(O.push(...ie(e[2].dims)),N.push("rank")),O.push(...ie(x));let q=W=>{let A=c.length,V=Yr("batchDims",e[0].dataType,A,1),j=Re(e[0].dataType),Y=L("a",e[0].dataType,k,T),se=L("b",e[1].dataType,M,T),U=ne("result",e[0].dataType,x.length,T),J=[Y,se];if(H){let F=i?T:1;J.push(L("bias",e[2].dataType,e[2].dims.length,F))}let G=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ut(t,G);let X=Re(U.type.tensor),z=Nt(t,U.type.value,X),B=ll(T,H,z,[V,Y,se,U],i);return`
  ${W.registerUniforms(G).registerInternalVariables(V).declareVariables(...J,U)}
  ${B}
  ${_?ci(v,$,j,V):hi(v,$,j,V)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${t.activation};${_};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:O}),getShaderSource:q}}}),dl,cl,ag=K(()=>{oe(),ct(),le(),Pt(),ui(),ig(),fi(),dl=(e,t,n,r,i=!1,s,a=4,o=4,u=4,d="f32")=>{let c=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",_=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ne(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${_}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ne(a,d)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ne(a,d)}(0.0);`,I=e?r&&n?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ne(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ne(o,d)}(0.0);`,k=Ne(u,d),C=Ne(e?a:o,d),M=Ne(e?o:a,d),x=Nt(s,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?I:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${il(i)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},cl=(e,t,n,r,i,s,a,o,u)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],p=n[0],f=d?n[2]:n[3],m=d?n[1]:n[2],g=d?n[3]:n[1],_=d&&(c%4===0||c%3===0)&&g%4===0,v=d?g:f*m,$=d?f*m:g,b=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],I=[Math.ceil(v/b[0]/T[0]),Math.ceil($/b[1]/T[1]),Math.ceil(p/b[2]/T[2])];ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let k=_?d&&c%4!==0?3:4:1,C=b[1]*T[1],M=b[0]*T[0],x=Math.max(b[0]*k,b[1]),O=r%C===0,N=i%M===0,H=s%x===0,q=_?[k,4,4]:[1,1,1],W=[{type:6,data:r},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Dt(t,W),W.push(...ie(e[0].dims,e[1].dims));let A=["rank","rank"];a&&(W.push(...ie(e[2].dims)),A.push("rank")),W.push(...ie(n));let V=j=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ut(t,Y);let se=_?4:1,U=Re(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${U}>`:U}) {
        result[flatIndex] = ${_?`vec4<${U}>`:U}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${U}>`:U}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,G=L("x",e[0].dataType,e[0].dims.length,k===3?1:k),X=L("w",e[1].dataType,e[1].dims.length,se),z=[G,X],B=ne("result",e[0].dataType,n.length,se);if(a){let F=L("bias",e[2].dataType,e[2].dims.length,se);z.push(F),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${U}>`:U} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${al("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(Y).declareVariables(...z,B)}
        ${J}
        ${dl(d,O,N,H,a,t,q[0],q[1],q[2],U)}
        ${_?ci(T,b,U,void 0,!d,x):hi(T,b,U,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${_};${O};${N};${H};${C};${M};${x}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:W}),getShaderSource:V}}}),pl,mi,gn,hl,gi,fl,ml,gl,sg=K(()=>{oe(),ct(),ue(),le(),Pt(),ui(),pl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},mi=e=>typeof e=="number"?[e,e,e]:e,gn=(e,t)=>t<=1?e:e+(e-1)*(t-1),hl=(e,t,n,r=1)=>{let i=gn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},gi=(e,t,n,r,i)=>{i==null&&(i=hl(e,t[0],r[0]));let s=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return s},fl=(e,t,n,r,i,s,a,o,u,d)=>{let c,p,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=gi([t,n,r,1],[o,u,d],1,[i,s,a],e);p=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((_,v,$)=>_===$[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=gi([t,n,r,1],[o,u,d],1,[i,s,a],e[0]);p=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),f=Math.ceil(n/s),m=Math.ceil(r/a);let g=(p-1)*i+o-t,_=(f-1)*s+u-n,v=(m-1)*a+d-r,$=Math.floor(g/2),b=g-$,T=Math.floor(_/2),I=_-T,k=Math.floor(v/2),C=v-k;c={top:T,bottom:I,left:k,right:C,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:p,outHeight:f,outWidth:m}},ml=(e,t,n,r,i,s=!1,a="channelsLast")=>{let o,u,d,c,p;if(a==="channelsLast")[o,u,d,c,p]=e;else if(a==="channelsFirst")[o,p,u,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,,m,g,_]=t,[v,$,b]=mi(n),[T,I,k]=mi(r),C=gn(m,T),M=gn(g,I),x=gn(_,k),{padInfo:O,outDepth:N,outHeight:H,outWidth:q}=fl(i,u,d,c,v,$,b,C,M,x),W=s?f*p:f,A=[0,0,0,0,0];return a==="channelsFirst"?A=[o,W,N,H,q]:a==="channelsLast"&&(A=[o,N,H,q,W]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:d,inWidth:c,inChannels:p,outDepth:N,outHeight:H,outWidth:q,outChannels:W,padInfo:O,strideDepth:v,strideHeight:$,strideWidth:b,filterDepth:m,filterHeight:g,filterWidth:_,effectiveFilterDepth:C,effectiveFilterHeight:M,effectiveFilterWidth:x,dilationDepth:T,dilationHeight:I,dilationWidth:k,inShape:e,outShape:A,filterShape:t}},gl=(e,t,n,r,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((v,$)=>$)},d=[Math.ceil(pl(u.x.map(v=>n[v]))/o[0]),1,1];ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,p=D.size(n),f=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Dt(t,f),f.push(...ie(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...ie(e[2].dims)),m.push("rank")),f.push(...ie(n));let _=v=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ut(t,$);let b=1,T=Re(e[0].dataType),I=L("x",e[0].dataType,e[0].dims.length,c),k=L("W",e[1].dataType,e[1].dims.length,b),C=[I,k],M=ne("result",e[0].dataType,n.length,b),x="";if(g){let H=L("bias",e[2].dataType,e[2].dims.length,b);C.push(H),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${a?re("coords",4,5):re("coords",1,5)}];
        }`}let O=Ne(c,T),N=Nt(t,O,T);return`
            ${x}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${v.registerUniforms($).declareVariables(...C,M)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,I.rank)};
              let d2 = ${a?re("coords",I.rank-1,I.rank):re("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${a?re("coords",1,I.rank):re("coords",2,I.rank)},
              ${a?re("coords",2,I.rank):re("coords",3,I.rank)},
              ${a?re("coords",3,I.rank):re("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?re("uniforms.x_shape",1,I.rank):re("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${a?re("uniforms.x_shape",2,I.rank):re("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${a?re("uniforms.x_shape",3,I.rank):re("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${a?re("uniforms.x_shape",4,I.rank):re("uniforms.x_shape",1,I.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:_}}}),yl,_l,og=K(()=>{oe(),ue(),le(),Pt(),yl=(e,t,n,r)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?n[3]:n[1],c=d/t.group,p=u&&c>=4?Me(d):1,f=D.size(n)/p,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Dt(t,m),m.push(...ie(a,[o[0],o[1],o[2],o[3]/p]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ie([n[0],n[1],n[2],n[3]/p]));let _=v=>{let $=ne("output",e[0].dataType,n.length,p),b=Re($.type.tensor),T=Nt(t,$.type.value,b),I=L("x",e[0].dataType,a.length),k=L("w",e[1].dataType,o.length,p),C=[I,k];i&&C.push(L("b",e[2].dataType,e[2].dims,p));let M=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ut(t,M);let x=u?`
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
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${v.registerUniforms(M).declareVariables(...C,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${x}
    ${s}
    ${T}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},_l=(e,t,n,r)=>{let i=e.length>2,s=Me(n[3]),a=Me(n[2]),o=D.size(n)/s/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[n[0],n[1],n[2],n[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Dt(t,p),p.push(...ie(u,d,c));let f=(a-1)*t.strides[1]+d[1],m=g=>{let _=ne("output",e[0].dataType,c.length,s),v=Re(_.type.tensor),$=Nt(t,_.type.value,v),b=L("x",e[0].dataType,u.length,s),T=L("w",e[1].dataType,d.length,s),I=[b,T];i&&I.push(L("b",e[2].dataType,e[2].dims,s));let k=i?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ut(t,C),`
  ${g.registerUniforms(C).declareVariables(...I,_)}
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

    var x_vals: array<${b.type.value}, ${f}>;
    var values: array<${_.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
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
      ${k}
      ${$}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}}}),wl,Vn,bl,Fn,yi,_i,$l,vl,wi,ug=K(()=>{ue(),ag(),sg(),fi(),og(),Pt(),di(),$t(),wl=(e,t,n,r,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,d=t[0],c=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),p=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-c[m]+i[m])/i[m]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},Vn=[2,3,1,0],bl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fn=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let s=2;s<t[1].dims.length;++s)n[s-2]===0&&(n[s-2]=t[1].dims[s]);let r=e.pads.slice();Nn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},yi=e=>{let t=oi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:s,kernelShape:a,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},_i=(e,t,n,r)=>{let i=n.format==="NHWC",s=wl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let C=[t[0]];if(i){let M=e.kernelCustomData.wT??e.compute(Fe(t[1],Vn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=M),C.push(M)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(_l(C,n,s,r),{inputs:C}):e.compute(yl(C,n,s,r),{inputs:C});return}let a=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],p=t[1].dims[3],f=s[i?1:2],m=s[i?2:3],g=s[i?3:1],_=i&&c===o&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(_||c===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let C=s[0],M,x,O,N=[];if(i){let W=e.kernelCustomData.wT??e.compute(Fe(t[1],Vn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W),_){let A=o*u*d;M=t[0].reshape([1,C,A]),x=W.reshape([1,A,g]),O=[1,C,g]}else M=t[0].reshape([C,o*u,d]),x=W.reshape([1,d,g]),O=[C,f*m,g];N.push(M),N.push(x)}else M=t[0].reshape([C,d,o*u]),x=t[1].reshape([1,g,d]),O=[C,g,f*m],N.push(x),N.push(M);a&&N.push(t[2]);let H=O[2],q=N[0].dims[N[0].dims.length-1];H<8&&q<8?e.compute(li(N,n,s,O,i,r),{inputs:N}):e.compute(Wn(N,n,s,O,i,r),{inputs:N});return}let v=!0,$=e.kernelCustomData.wT??e.compute(Fe(t[1],Vn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];a&&b.push(t[2]);let T=i?f*m:g,I=i?g:f*m,k=c*p*d;e.compute(cl(b,n,s,T,I,k,a,v,r),{inputs:b})},$l=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Fn({...t,pads:i,strides:s,dilations:a,kernelShape:o},r);_i(e,r,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},vl=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Fn(n,t),s=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=ml(t[0].dims,t[1].dims,n.strides,n.dilations,s,!1,r);e.compute(gl(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},wi=(e,t)=>{if(bl(e.inputs,t),e.inputs[0].dims.length===3)$l(e,t);else if(e.inputs[0].dims.length===5)vl(e,e.inputs,t);else{let n=Fn(t,e.inputs);_i(e,e.inputs,n)}}}),xl,lg=K(()=>{oe(),ct(),ue(),le(),xl=(e,t,n)=>{let r=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,d=o[3],c=s?Me(u):1,p=s&&d===1&&u>=4,f=p?Math.floor(u/4)*4:Math.floor(u/c)*c,m=u-f,g=s?Me(d):1,_=s?d===1?c:g:1,v=D.size(i)/g,$=[Math.ceil(v/64),1,1];ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let b=["rank","rank"],T=[t.strides[0],t.strides[1]],I=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],k=[t.dilations[0],t.dilations[1]],C=[I[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),I[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],M=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:v},{type:12,data:T},{type:12,data:I},{type:12,data:k},{type:12,data:C},{type:6,data:M},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ie(e[0].dims,e[1].dims)];r&&(x.push(...ie(e[2].dims)),b.push("rank")),x.push(...ie(i));let O=N=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:M.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],q=Re(e[0].dataType),W=s?1:2,A=s?2:3,V=s?3:1,j=L("W",e[1].dataType,e[1].dims.length,_),Y=L("Dy",e[0].dataType,e[0].dims.length,c),se=[Y,j];r&&se.push(L("bias",e[2].dataType,[i[V]].length,g));let U=ne("result",e[0].dataType,i.length,g),J=()=>{let z="";if(p)c===4?z+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?z+=`
          dotProd = dotProd + dot(vec4<${q}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${q}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(z+=`
          dotProd = dotProd + dot(vec4<${q}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${q}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(z+=`
                  let xValue = ${s?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,c===1)z+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)z+=`
            let wValue${B} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return z},G=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let z="";if(c===1){z+="dotProd = dotProd";for(let B=0;B<m;B++)z+=`
            + ${Y.getByOffset(`x_offset + ${B}`)} * ${j.getByOffset(`w_offset + ${B}`)}`;z+=";"}else if(c===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);z+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return z},X=`
            let outputIndices = ${U.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${U.indicesGet("outputIndices",0)};
            let d1 = ${U.indicesGet("outputIndices",V)};
            let r = ${U.indicesGet("outputIndices",W)};
            let c = ${U.indicesGet("outputIndices",A)};
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
              let dyR = (${q}(dyRCorner) + ${q}(wR)) / ${q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${q}(uniforms.Dy_shape[${W}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${q}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:c}) {
                  ${J()}
                  inputChannel = inputChannel + ${p?4:c};
                }
                ${G()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${U.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(H).declareVariables(...se,U)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${X}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${_}${g}${p}${m}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:O}}}),Sl,Il,Tl,bi,kl,El,$i,Cl,Ml,dg=K(()=>{lg(),Pt(),$t(),Sl=(e,t,n,r,i,s)=>(e-1)*t+n+(r-1)*i+1-s,Il=(e,t,n,r,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=s,n[i]=e-s):t==="SAME_LOWER"&&(n[r]=e-s,n[i]=s)},Tl=(e,t,n,r,i,s,a,o,u,d)=>{let c=e.length-2,p=d.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,_=e.length-c-(o?1:0);g<c;++g,++_){let v=e[_],$=p?v*a[g]:d[g],b=Sl(v,a[g],s[g],t[_],n[g],$);Il(b,r,s,g,g+c),p&&d.push(a[g]*(v-1)+u[g]+(t[_]-1)*n[g]+1-s[g]-s[g+c])}d.splice(0,0,f),d.splice(o?3:1,0,m)},bi=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,f)=>p*f,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Tl(o,n,u,e.autoPad,e.group,i,d,r,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:n,pads:i,outputPadding:a,outputShape:s,dilations:u,strides:d}),c},kl=e=>{let t=oi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),c=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:s,kernelShape:a,outputPadding:c,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},El=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},$i=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Fe(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(xl(s,n,r),{inputs:s})},Cl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=bi({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:u},r);$i(e,r,d,c=>n?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Ml=(e,t)=>{if(El(e.inputs,t),e.inputs[0].dims.length===3)Cl(e,t);else{let n=bi(t,e.inputs);$i(e,e.inputs,n)}}}),zl,Al,Rl,cg=K(()=>{oe(),ue(),ze(),le(),zl=(e,t,n,r)=>{let i=D.size(t),s=t.length,a=L("input",e,s),o=ne("output",e,s),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=D.normalizeAxis(u,s),c=p=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,m=re("uniforms.input_shape","uniforms.axis",s),g=r.reverse?f+(r.exclusive?" + 1":""):"0",_=r.reverse?m:f+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ie(t,t)]}),getShaderSource:c}},Al=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(zl(r,n,i,t),{inputs:[0]})},Rl=e=>{let t=e.exclusive===1,n=e.reverse===1;return $e({exclusive:t,reverse:n})}}),Ol,Bl,Nl,Dl,Ul,pg=K(()=>{oe(),ue(),ze(),le(),Ol=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Bl=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let s=0;s<t;++s)i.push(n.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Nl=(e,t)=>{let n,r,i,s,a,o,u=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";u?([n,r,i,s]=e.dims,a=c?[n,r,i,d,d,s/d**2]:[n,r,i,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[n,d,d,s/d**2,r,i]:[n,s/d**2,d,d,r,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),f=p.dims.length,m=e.dataType,g=L("a",m,f),_=ne("output",m,f),v=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,_)}

  ${Bl(o,f,g,_)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=u?[n,r*d,i*d,s/d**2]:[n,s/d**2,r*d,i*d],T=D.size(b),I=p.dims,k=D.sortBasedOnPerm(I,o);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ie(I,k)]}},getShaderSource:v}},Dl=(e,t)=>{Ol(e.inputs),e.compute(Nl(e.inputs[0],t))},Ul=e=>$e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Hn,yn,vi,Pl,Ll,ql,Gl,xi,Wl,Vl,Fl,hg=K(()=>{oe(),ue(),ze(),le(),Hn="[a-zA-Z]|\\.\\.\\.",yn="("+Hn+")+",vi="^"+yn+"$",Pl="("+yn+",)*"+yn,Ll="^"+Pl+"$",ql=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Gl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Ll)))throw new Error("Invalid LHS term");if(n.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(vi)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,o,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!r.match(RegExp(yn)))throw new Error("Invalid RHS");(i=r.match(RegExp(Hn,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,s=!1,a=[],o=0;if(!e.match(RegExp(vi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Hn,"g")),d=new ql(r);return u==null||u.forEach((c,p)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<a.length;m++){let g=String.fromCharCode(48+m);d.addSymbol(g,p+m),this.addSymbol(g,n[o++],r)}}else d.addSymbol(c,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,n[o++],r)}),d}},xi=e=>e+"_max",Wl=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,c)=>L(`input${c}`,t,d)),s=D.size(r),a=ne("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),u=d=>{let c=[],p="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],_=[],v=[],$=[],b=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((I,k)=>{var C;if(n.rhs.symbolToIndices.has(k)){let M=(C=n.rhs.symbolToIndices.get(k))==null?void 0:C[0];M!==void 0&&n.lhs.forEach((x,O)=>{if(I.inputIndices.includes(O)){let N=x.symbolToIndices.get(k);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(H=>{c.push(`${i[O].indicesSet(`input${O}Indices`,H,a.indicesGet("outputIndices",M))}`)})}})}else n.lhs.forEach((M,x)=>{if(I.inputIndices.includes(x)){let O=M.symbolToIndices.get(k);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(N=>{g.push(`${i[x].indicesSet(`input${x}Indices`,N,`${k}`)}`)}),$.push(`prod *= ${i[x].getByIndices(`input${x}Indices`)};`)}}),_.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${xi(k)}; ${k}++) {`),v.push("}")});let T=b?[...c,`let sum = ${i.map((I,k)=>I.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...c,f,..._,...g,p,...$,m,...v];return`
            ${d.registerUniforms(o.map(I=>({name:`${xi(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((I,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>n.symbolToInfo.has(p)).map(p=>{var f;return{type:12,data:((f=n.symbolToInfo.get(p))==null?void 0:f.dimValue)||0}});d.push({type:12,data:s});let c=e.map((p,f)=>[...ie(p)]).reduce((p,f)=>p.concat(f),d);return c.push(...ie(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:u}},Vl=(e,t)=>{let n=new Gl(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Wl(i,e.inputs[0].dataType,n,r))},Fl=e=>{let t=e.equation.replace(/\s+/g,"");return $e({equation:t})}}),Hl,Si,jl,Kl,Xl,fg=K(()=>{oe(),ue(),le(),Hl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Si=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},jl=(e,t)=>e.length>t.length?Si(e,t):Si(t,e),Kl=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=jl(t,n),i=e[0].dataType,s=i===9||D.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(D.size(r)/o),d=p=>{let f=L("input",i,t.length,a),m=ne("output",i,r.length,o),g;if(i===9){let _=(v,$,b="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${f.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${v}[${$}] = ${b}(${f.getByOffset(`index${$}`)}[component${$}]);
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
    ${g}`},c=[{type:12,data:u},...ie(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Xl=e=>{Hl(e.inputs),e.compute(Kl(e.inputs),{inputs:[0]})}}),Yl,Zl,mg=K(()=>{oe(),ue(),le(),si(),Yl=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4===0,s=a=>{let o=L("x",t,[1],4),u=L("bias",t,[1],4),d=ne("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,u,d)}

    ${ii(De(t))}

    ${a.mainStart(Qt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ai("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Qt/4)}})}},Zl=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?zu(e):e.compute(Yl(e.inputs))}}),Ql,Jl,ed,td,gg=K(()=>{oe(),ue(),ze(),le(),Ql=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Jl=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=D.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(s,1,...r);let o=n[s],u=e[0].dataType===9?4:1,d=Math.ceil(D.size(a)/u),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...ie(e[0].dims,e[1].dims,a)],p=f=>{let m=L("data",e[0].dataType,e[0].dims.length,u),g=L("inputIndices",e[1].dataType,e[1].dims.length),_=ne("output",e[0].dataType,a.length,u),v=b=>{let T=r.length,I=`var indicesIndices${b}  = ${g.type.indices}(0);`;for(let k=0;k<T;k++)I+=`${T>1?`indicesIndices${b}[${k}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${k}]`:`outputIndices${b}`};`;I+=`
          var idx${b} = ${g.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${m.type.indices};
        `;for(let k=0,C=0;k<i;k++)k===s?(I+=`${i>1?`dataIndices${b}[${k}]`:`dataIndices${b}`} = u32(idx${b});`,C+=T):(I+=`${i>1?`dataIndices${b}[${k}]`:`dataIndices${b}`} = ${a.length>1?`outputIndices${b}[${C}]`:`outputIndices${b}`};`,C++);return I},$;if(e[0].dataType===9){let b=(T,I,k="")=>`
          let outputIndices${I} = ${_.offsetToIndices(`outputOffset + ${I}u`)};
          ${v(I)};
          let offset${I} = ${m.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${T}[${I}] = ${k}(${m.getByOffset(`index${I}`)}[component${I}]);
        `;$=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${_.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${_.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${m.getByIndices("dataIndices")};
      ${_.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:p}},ed=e=>$e({axis:e.axis}),td=(e,t)=>{let n=e.inputs;Ql(n),e.compute(Jl(e.inputs,t))}}),nd,rd,id,yg=K(()=>{oe(),ue(),le(),nd=(e,t,n,r,i,s,a,o,u)=>{let d=[{type:12,data:s},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:u}],c=[s];d.push(...ie(t.dims,c));let p=f=>{let m=L("indices_data",t.dataType,t.dims.length),g=ne("input_slice_offsets_data",12,1,1),_=[m,g],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(v).declareVariables(..._)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},rd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,s=n[1].dims,a=s[s.length-1],o=D.sizeToDimension(s,s.length-1),u=D.sizeFromDimension(r,t.batchDims+a),d=D.sizeToDimension(r,t.batchDims),c=D.sizeFromDimension(r,t.batchDims),p=o/d,f=new Array(a),m=u;for(let I=0;I<a;++I)f[a-1-I]=m,m*=r[t.batchDims+a-1-I];let g=nd(e,n[1],f,t.batchDims,r,o,p,c,a),_=t.batchDims+a;if(_>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=s.slice(0,-1).concat(r.slice(_)),$=D.size(v),b=[{type:12,data:$},{type:12,data:u},...ie(n[0].dims,g.dims,v)],T=I=>{let k=L("data",n[0].dataType,n[0].dims.length),C=L("slice_offsets",12,g.dims.length),M=ne("output",n[0].dataType,v.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,C,M)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:T},{inputs:[n[0],g]})},id=e=>({batchDims:e.batch_dims,cacheKey:""})}),ad,sd,od,ud,_g=K(()=>{oe(),ue(),ze(),le(),ad=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},sd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=D.normalizeAxis(t.gatherAxis,i),a=D.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(s,1,...r);let u=D.size(o),d=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ie(...e.map((m,g)=>m.dims),o)],f=m=>{let g=L("data",e[0].dataType,e[0].dims.length),_=L("inputIndices",e[1].dataType,e[1].dims.length),v=L("scales",e[2].dataType,e[2].dims.length),$=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=ne("output",d,o.length),T=[g,_,v];$&&T.push($);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(I).declareVariables(...T,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${_.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${_.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${_.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[s]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${r.length} - 1`)};
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
        let quantize_axis_index = ${v.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${v.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${v.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${De(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},od=(e,t)=>{let n=e.inputs;ad(n,t),e.compute(sd(e.inputs,t))},ud=e=>$e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ld,dd,cd,pd,wg=K(()=>{oe(),ue(),ze(),le(),ld=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},dd=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,s=e[1].dims,a=e[1].dataType,o=D.normalizeAxis(t.axis,i),u=n[o],d=s.slice(0),c=D.size(d),p=L("input",r,i),f=L("indicesInput",a,s.length),m=ne("output",r,d.length),g=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return g.push(...ie(n,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:_=>`
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
  }`}},cd=e=>$e({axis:e.axis}),pd=(e,t)=>{let n=e.inputs;ld(n),e.compute(dd(e.inputs,t))}}),hd,fd,md,gd,bg=K(()=>{oe(),ue(),le(),hd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},fd=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,s,a]=Ss.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(s/u),c=Math.ceil(i/u),p=!0,f=D.size(o),m=[{type:12,data:p?d:f},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ie(e[2].dims)),g.push("rank")),m.push(...ie(o));let _=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",I=L("a",e[0].dataType,e[0].dims),k=L("b",e[1].dataType,e[1].dims),C=I.type.value,M=null,x=[I,k];e.length===3&&(M=L("c",e[2].dataType,e[2].dims.length),x.push(M));let O=ne("output",e[0].dataType,o.length);x.push(O);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(N).declareVariables(...x)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${T}
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${C}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},v=$=>{let b=L("a",e[0].dataType,e[0].dims),T=L("b",e[1].dataType,e[1].dims),I=null,k=[b,T];e.length===3&&(I=L("c",e[2].dataType,e[2].dims.length),k.push(I));let C=ne("output",e[0].dataType,o.length);k.push(C);let M=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(M).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
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
        ${x}
      }
      workgroupBarrier();
    }

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:m}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},md=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},gd=(e,t)=>{hd(e.inputs),e.compute(fd(e.inputs,t))}}),rt,pt,Lt,qt,yd,_d,wd,bd,$d,vd,xd,Sd,Id,Td,$g=K(()=>{oe(),ue(),ze(),le(),[rt,pt,Lt,qt]=[0,1,2,3],yd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},_d=`
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
`,wd=e=>`
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
`,bd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,$d=e=>`
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
`,vd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rt}] = batch;
     indices[${pt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Lt}] = u32(r);
            indices[${qt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Lt}] = u32(clamp(r, 0, H - 1));
          indices[${qt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Lt}] = gs_reflect(r, border[1], border[3]);
          indices[${qt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,xd=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rt}], indices[${pt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rt}], indices[${pt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rt}], indices[${pt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rt}], indices[${pt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rt}], indices[${pt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rt}], indices[${pt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Sd=(e,t)=>{let n=L("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=L("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rt,pt,Lt,qt]=[0,3,1,2]);let a=ne("output",e[0].dataType,s.length),o=n.type.value,u=D.size(s),d=[{type:12,data:u},...ie(e[0].dims,r,s)],c=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${_d}
  ${wd(o)}
  ${bd(t)}
  ${$d(t)}
  ${vd(n,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Lt}]);
      let W_in = i32(uniforms.x_shape[${qt}]);

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
      var grid_indices = vec3<u32>(indices[${rt}], indices[${Lt}], indices[${qt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${xd(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let f=D.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:c}},Id=(e,t)=>{yd(e.inputs),e.compute(Sd(e.inputs,t))},Td=e=>$e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Pe,kd,Ed,Ii,Cd,_n,Md,zd=K(()=>{oe(),ue(),ze(),Fr(),ni(),le(),$t(),Pe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,kd=(e,t)=>{let n=e[0],r=Pe(e,1),i=Pe(e,2),s=Pe(e,3),a=Pe(e,4),o=Pe(e,5),u=Pe(e,6),d=Pe(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=n.dims[0],p=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=p,g=0,_=0,v=Math.floor(f/t.numHeads);if(u&&d&&D.size(u.dims)&&D.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],_=u.dims[2]}else if(u&&D.size(u.dims)||d&&D.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(s&&D.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=g+m,T=0;if(a&&D.size(a.dims)>0){T=8;let M=a.dims;throw M.length===1?M[0]===c?T=1:M[0]===3*c+2&&(T=3):M.length===2&&M[0]===c&&M[1]===b&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,k=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],I=!0}}let C=!1;if(a&&D.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&D.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:v,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:C,passPastInKv:I,qkvFormat:$}},Ed=e=>$e({...e}),Ii=$e({perm:[0,2,1,3]}),Cd=(e,t,n,r,i,s,a)=>{let o=[r,i,s],u=D.size(o),d=[{type:12,data:u},{type:12,data:a},{type:12,data:s}],c=p=>{let f=ne("qkv_with_bias",t.dataType,o),m=L("qkv",t.dataType,o),g=L("bias",n.dataType,o),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(_).declareVariables(m,g,f)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,n],outputs:[-1]})[0]},_n=(e,t,n,r,i,s,a,o)=>{let u=s;if(a&&D.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Cd(e,s,a,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(Fe(u,Ii.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,r,n,i])),n===1||r===1?u:e.compute(Fe(u,Ii.perm),{inputs:[u],outputs:[-1]})[0]},Md=(e,t)=>{let n=kd(e.inputs,t),r=e.inputs[0],i=Pe(e.inputs,1),s=Pe(e.inputs,2),a=Pe(e.inputs,3),o=Pe(e.inputs,4),u=Pe(e.inputs,5),d=Pe(e.inputs,6),c=Pe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,f=_n(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(p)return hn(e,f,i,s,o,void 0,d,c,u,n);if(!i||!s)throw new Error("key and value must be provided");let m=_n(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),g=_n(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,s,a,2*n.hiddenSize);hn(e,f,m,g,o,void 0,d,c,u,n)}}),Ad,Rd,Od,Bd,Ti,Nd,Dd,Ud=K(()=>{oe(),ue(),ze(),le(),Ad=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Rd=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),$e({numOutputs:r,axis:t.axis,splitSizes:n})},Od=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Bd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ti=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,s=D.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),o=L("input",i,n.length),u=new Array(t.numOutputs),d=[],c=[],p=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){p+=t.splitSizes[g],u[g]=p;let _=n.slice();_[s]=t.splitSizes[g],c.push(_),a[g]=ne(`output${g}`,i,_.length),d.push({dims:c[g],dataType:e[0].dataType})}f.push({type:12,data:u},...ie(n,...c));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${Od(u.length)}
  ${Bd(a)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Nd=(e,t)=>{Ad(e.inputs);let n=e.inputs.length===1?t:Rd(e.inputs,t);e.compute(Ti(e.inputs,n),{inputs:[0]})},Dd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return $e({axis:t,numOutputs:r,splitSizes:n})}}),Pd,jn,Ld,qd=K(()=>{oe(),ue(),ze(),le(),Pd=(e,t)=>{let[n,r,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!D.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],d=n.dims[n.dims.length-2],c=i.dims[0],p=D.sizeFromDimension(n.dims,1)/d,f=o===0?i.dims[1]*2:p/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},jn=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=D.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,c=e[2].dims[1],p=i===0?c*2:d/r,f=new Array(a,u,d/p,p-c),m=D.computeStrides(f),g=[{type:1,data:s},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=v=>{let $=L("input",e[0].dataType,e[0].dims.length),b=L("position_ids",e[1].dataType,e[1].dims.length),T=L("cos_cache",e[2].dataType,e[2].dims.length),I=L("sin_cache",e[3].dataType,e[3].dims.length),k=ne("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${v.declareVariables($,b,T,I,k)}

        ${v.mainStart(Qt)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",ne("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:$e({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/Qt)},programUniforms:g})}},Ld=(e,t)=>{Pd(e.inputs,t),e.compute(jn(e.inputs,t))}}),Gd,Wd,ki,Vd,Fd,vg=K(()=>{ze(),oe(),ni(),zd(),Ud(),$t(),qd(),le(),Gd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],d=n.dims[1],c=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=d,f=0,m=!r||r.dims.length===0,g=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=g*t.numHeads);let _=s&&s.dims.length!==0,v=a&&a.dims.length!==0;if(_&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&v){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(_||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,T=!1,I=t.kvNumHeads?g*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=i.dims[1]*i.dims[3],T=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=k.dims.reduce((M,x)=>M*x,1);if(C!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${C}.`);for(let M=0;M<k.dims.length;M++)if(k.dims[M]!==1&&k.dims[M]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${M}] = ${k.dims[M]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:I,headSize:g,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:$}},Wd=$e({perm:[0,2,1,3]}),ki=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Fe(r,Wd.perm),{inputs:[r],outputs:[-1]})[0]),r},Vd=(e,t,n,r)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let p=L("seq_lens",n.dataType,n.dims),f=L("total_seq_lens",r.dataType,r.dims),m=ne("pos_ids",i,a),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},Fd=(e,t)=>{var I;let n=Gd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((I=e.inputs[1])==null?void 0:I.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=$e({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,c*n.headSize,c*n.headSize]}),[f,m,g]=!i&&!s?e.compute(Ti([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,s],_,v;if(t.doRotary){let k=e.compute(Vd(n.batchSize,n.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],M=e.inputs[8],x=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[f,k,C,M],N=[-1];_=e.compute(jn(O,x),{inputs:O,outputs:N})[0],O.splice(0,1,m);let H=$e({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});v=e.compute(jn(O,H),{inputs:O,outputs:N})[0]}let $=_n(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?_:f,void 0,0),b=ki(e,t.doRotary?v:m,n),T=ki(e,g,n);hn(e,$,b,T,void 0,void 0,a,o,void 0,n,u,d)}}),Ei,Hd,jd,Kd,xg=K(()=>{oe(),ue(),$t(),le(),Ei=(e,t,n,r,i,s,a,o)=>{let u=Me(s),d=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,p=i*a,f=64;p===1&&(f=256);let m=[i,a,s/u],g=[i,a,2],_=["rank","type","type"],v=[];v.push(...ie(m,g));let $=b=>{let T=L("x",t.dataType,3,u),I=L("scale",n.dataType,n.dims),k=L("bias",r.dataType,r.dims),C=ne("output",1,3,2),M=[T,I,k,C];return`
  var<workgroup> workgroup_shared : array<${c}, ${f}>;
  const workgroup_size = ${f}u;
  ${b.declareVariables(...M)}
  ${b.mainStart(f)}
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
      let sum_final = ${bt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${bt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:p},programUniforms:v}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Hd=(e,t,n)=>{let r=t[0].dims,i=r,s=2,a=r[0],o=r[1],u=D.sizeFromDimension(r,s),d=Me(u),c=D.size(i)/d,p=Ei(e,t[0],t[1],t[2],a,u,o,n.epsilon),f=[a,o,u/d],m=[a,o],g=["type","none"],_=v=>{let $=L("x",t[0].dataType,f.length,d),b=L("scale_shift",1,m.length,2),T=ne("output",t[0].dataType,f.length,d),I=[$,b,T];return`
  ${v.registerUniform("output_size","u32").declareVariables(...I)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ie(f,m,f)]}),getShaderSource:_},{inputs:[t[0],p]})},jd=(e,t,n)=>{let r=t[0].dims,i=r,s=r[0],a=r[r.length-1],o=D.sizeFromDimension(r,1)/a,u=Me(a),d=D.size(i)/u,c=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],p=["type","type"],f=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)f=f||r[$+1]!==1,m.push($+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(Fe(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,b)=>r[m[b]])),_=Ei(e,g,t[1],t[2],s,o,a,n.epsilon),v=$=>{let b=Re(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,I=M=>{let x=M===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${b}(${O}(scale.${x}))`;case 2:return`vec2<${b}>(${O}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${b}>(${O}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=L("input",t[0].dataType,t[0].dims,u),C=ne("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:v},{inputs:[t[0],_]})},Kd=(e,t)=>{t.format==="NHWC"?jd(e,e.inputs,t):Hd(e,e.inputs,t)}}),Xd,Yd,Zd,Sg=K(()=>{oe(),ue(),le(),Xd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Yd=(e,t,n)=>{let r=t.simplified,i=e[0].dims,s=e[1],a=!r&&e[2],o=i,u=D.normalizeAxis(t.axis,i.length),d=D.sizeToDimension(i,u),c=D.sizeFromDimension(i,u),p=D.size(s.dims),f=a?D.size(a.dims):0;if(p!==c||a&&f!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let g=Me(c),_=["type","type"],v=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/g)},{type:1,data:t.epsilon}];a&&_.push("type");let $=n>1,b=n>2,T=k=>{let C=Re(e[0].dataType),M=[L("x",e[0].dataType,e[0].dims,g),L("scale",s.dataType,s.dims,g)];a&&M.push(L("bias",a.dataType,a.dims,g)),M.push(ne("output",e[0].dataType,o,g)),$&&M.push(ne("mean_data_output",1,m)),b&&M.push(ne("inv_std_output",1,m));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(x).declareVariables(...M)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Xr("f32",g)};
    var mean_square_vector = ${Xr("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Jt(C,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${bt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${bt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Jt(C,g,"x[j + offset]")};
      let f32scale = ${Jt(C,g,"scale[j]")};
      output[j + offset] = ${M[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Jt(C,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:o,dataType:e[0].dataType}];return $&&I.push({dims:m,dataType:1}),b&&I.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:_},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:v}),getShaderSource:T}},Zd=(e,t)=>{Xd(e.inputs),e.compute(Yd(e.inputs,t,e.outputCount))}}),Qd,Jd,Ig=K(()=>{ue(),di(),fi(),Qd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Jd=e=>{Qd(e.inputs);let t=Zt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(li(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=D.size(e.inputs[0].dims.slice(0,-2)),a=D.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,r]),u=e.inputs[1].reshape([1,r,n]),d=[1,s,n],c=[o,u];e.compute(Wn(c,{activation:""},t,d),{inputs:c})}else e.compute(Wn(e.inputs,{activation:""},t))}}}),ec,tc,nc,rc,ic,Tg=K(()=>{oe(),ue(),ze(),le(),ec=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!D.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(D.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(u)!==d)throw new Error("zeroPoints input size error.")}},tc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,a=t.n,o=n.slice(0,r-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Me(t.k),f=Me(d),m=Me(a),g=o.concat([i,a]),_=i>1&&a/m%2===0?2:1,v=D.size(g)/m/_,$=64,b=[],T=[u,i,s/p],I=D.convertShape(e[1].dims).slice();I.splice(-1,1,d/f),b.push(...ie(T)),b.push(...ie(I)),b.push(...ie(e[2].dims)),e.length===4&&b.push(...ie(D.convertShape(e[3].dims)));let k=[u,i,a/m];b.push(...ie(k));let C=M=>{let x=T.length,O=L("a",e[0].dataType,x,p),N=L("b",12,I.length,f),H=L("scales",e[2].dataType,e[2].dims.length),q=[O,N,H],W=e.length===4?L("zero_points",12,e[3].dims.length):void 0;W&&q.push(W);let A=k.length,V=ne("output",e[0].dataType,A,m),j=Re(e[0].dataType),Y=(()=>{switch(p){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${p}-component is not supported.`)}})(),se=Math.floor(32/t.bits),U=Math.floor(se/8),J=()=>{let z="";for(let B=0;B<U;B++){let F=B*t.bits*4,te=F+t.bits;z+=`
          // reuse a data (pass ${B})
            var input_offset${B>0?B:""} = ${B===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${B>0?B:""}: ${Y};
            for (var j${B>0?B:""}: u32 = 0; j${B>0?B:""} < ${8/p}; j${B>0?B:""}++) {
              a_data${B>0?B:""}[j${B>0?B:""}] = ${O.getByOffset(`input_offset${B>0?B:""}`)};
              input_offset${B>0?B:""}++;
            }
          `;for(let Z=0;Z<m*_;Z++)z+=`
            b_value = ${f===1?`b${Z}_data`:`b${Z}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${B*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${F}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${te}u) & b_mask);`}
            b_quantized_values = ${Y}(${Array.from({length:4},(de,xe)=>`${j}(b_value_lower[${xe}]), ${j}(b_value_upper[${xe}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Y}(${Array.from({length:8},(de,xe)=>`(b_quantized_values[${xe}] - ${W?`zero_point${Z}`:"zero_point"}) * scale${Z}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${W?`zero_point${Z}`:"zero_point"}`).join(",")})) * scale${Z};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(Z/m)}]${m>1?`[${Z%m}]`:""} += ${Array.from({length:8/p},(de,xe)=>`${p===1?`a_data${B>0?B:""}[${xe}] * b_dequantized_values[${xe}]`:`dot(a_data${B>0?B:""}[${xe}], b_dequantized_values[${xe}])`}`).join(" + ")};
          `}return z},G=()=>{let z=`
            var col_index = col * ${m};
            ${W?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let B=0;B<m*_;B++)z+=`
            let scale${B} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${W?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return z},X=()=>{let z=`col_index = col * ${m};`;for(let B=0;B<m*_;B++)z+=`
            let b${B}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,z};return`
        var<workgroup> workgroup_shared: array<${V.type.value}, ${_*$}>;
        ${M.declareVariables(...q,V)}
        ${M.mainStart([$,1,1])}
          let output_indices = ${V.offsetToIndices(`(global_idx / ${$}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${G()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${X()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${J()}
                word_offset += ${se/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${V.type.value} = ${V.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${V.setByIndices(`${V.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${m};${_};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:C}},nc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,a=t.n,o=n.slice(0,r-2),u=D.size(o),d=e[1].dims[2]/4,c=e[0].dataType,p=Me(t.k),f=Me(d),m=o.concat([i,a]),g=128,_=a%8===0?8:a%4===0?4:1,v=g/_,$=Math.floor(32/t.bits),b=v*f*$,T=b/p,I=b/t.blockSize,k=D.size(m)/_,C=[],M=[u,i,s/p],x=D.convertShape(e[1].dims).slice();x.splice(-1,1,d/f),C.push(...ie(M)),C.push(...ie(x)),C.push(...ie(e[2].dims)),e.length===4&&C.push(...ie(D.convertShape(e[3].dims)));let O=[u,i,a];C.push(...ie(O));let N=H=>{let q=M.length,W=L("a",e[0].dataType,q,p),A=L("b",12,x.length,f),V=L("scales",e[2].dataType,e[2].dims.length),j=[W,A,V],Y=e.length===4?L("zero_points",12,e[3].dims.length):void 0;Y&&j.push(Y);let se=O.length,U=ne("output",e[0].dataType,se),J=Re(e[0].dataType),G=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${W.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${U.type.value}, ${v}>, ${_}>;
        ${H.declareVariables(...j,U)}
        ${H.mainStart([v,_,1])}
          let output_indices = ${U.offsetToIndices(`workgroup_index * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${I} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${W.getByIndices(`${W.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${W.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${I} + local_id.x;
            ${Y?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${J}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${J}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${V.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let X=Math.floor($/8),z="";for(let B=0;B<X;B++){let F=B*t.bits*4,te=F+t.bits;z+=`
              ${G()}
              {${t.bits===2?`
                let half_word = b_value >> ${B*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${F}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(Z,de)=>`${J}(b_value_lower[${de}]), ${J}(b_value_upper[${de}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Z,de)=>`${`dot(a_data${de}, b_dequantized_values[${de}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${U.type.value} = ${U.type.value}(0);
            for (var b = 0u; b < ${v}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${U.setByIndices(`${U.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${v};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:k},programUniforms:C}),getShaderSource:N}},rc=(e,t)=>{ec(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(nc(e.inputs,t)):e.compute(tc(e.inputs,t))},ic=e=>$e(e)}),ac,sc,oc,uc,lc,dc,cc,pc,hc,kg=K(()=>{oe(),ue(),le(),ac=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},sc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},oc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},uc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},lc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},dc=(e,t,n)=>{switch(n.mode){case 0:return sc(e,t,n.pads.length);case 1:return oc(e,t,n.pads.length);case 2:return uc(e,t,n.pads.length);case 3:return lc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},cc=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=D.size(n),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ie(e[0].dims,n));let o=["rank"],u=d=>{let c=ne("output",e[0].dataType,n.length),p=L("x",e[0].dataType,r.length),f=p.type.value,m=dc(c,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:a?f:"f32"}),`
            ${d.registerUniforms(g).declareVariables(p,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:s}),getShaderSource:u}},pc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(n[u]),s[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>s[Number(u)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:r,pads:a}}else return t},hc=(e,t)=>{ac(e.inputs);let n=pc(e.inputs,t);e.compute(cc(e.inputs,n),{inputs:[0]})}}),wn,Ci,Mi,zi,Ai,fc,mc,Ri,Oi,gc,yc,Bi,_c,wc,Ni,bc,$c,vc,xc,Eg=K(()=>{He(),oe(),ue(),le(),wn=e=>{if(ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ci=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],d=t.pads.slice();Nn.adjustPoolAttributes(n,i,a,o,u,d);let c=Nn.computePoolOutputShape(n,i,o,u,a,d,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let f=c.slice();return f.push(f.splice(1,1)[0]),[p,r?f:c]},Mi=(e,t)=>{let n=t.format==="NHWC",r=D.size(e),i=D.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],p=!!(d+c);s.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];f=!!(_+v),s.push({type:12,data:m},{type:12,data:g},{type:12,data:_},{type:12,data:v}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=D.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,c)=>d+c);return[s,a,!!u,!1,!1]}},zi=(e,t,n,r,i,s,a,o,u,d,c,p)=>{let f=i.format==="NHWC",m=t.type.value,g=ne("output",t.type.tensor,r);if(i.kernelShape.length<=2){let _="",v="",$="",b=n-(f?2:1);if(c?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let T=n-(f?3:2);p?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
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
              ${v}
              ${_}
              ${$}
              ${a}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let _=i.kernelShape.length,v=i.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:$=`
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
                    + offsets[j - ${n-_}u] - ${re("uniforms.pads","j - 2u",v)};
                  ${$}
              }
              ${a}

              output[global_idx] = value;
            }`}},Ai=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,fc=e=>`${Ai(e)};${e.countIncludePad}`,mc=e=>`${Ai(e)};${e.storageOrder};${e.dilations}`,Ri=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Oi=(e,t,n,r)=>{let[i,s]=Ci(t,r,n),a=L("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,p,f,m,g]=Mi(s,i);c.push(...ie(t.dims,s));let _=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:v=>zi(v,a,t.dims.length,s.length,i,u,d,0,p,f,m,g)}},gc=e=>{let t=e.count_include_pad!==0,n=Ri(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:fc(r)}},yc=(e,t)=>{wn(e.inputs),e.compute(Oi("AveragePool",e.inputs[0],!1,t))},Bi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},_c=e=>{let t=e.format;return{format:t,...Bi,cacheKey:t}},wc=(e,t)=>{wn(e.inputs),e.compute(Oi("GlobalAveragePool",e.inputs[0],!0,t))},Ni=(e,t,n,r)=>{let[i,s]=Ci(t,r,n),a=`
      value = max(x_val, value);
    `,o="",u=L("x",t.dataType,t.dims.length),d=["rank"],[c,p,f,m,g]=Mi(s,i);return c.push(...ie(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(s)/64)},programUniforms:c}),getShaderSource:_=>zi(_,u,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,f,m,g)}},bc=(e,t)=>{wn(e.inputs),e.compute(Ni("MaxPool",e.inputs[0],!1,t))},$c=e=>{let t=e.storage_order,n=e.dilations,r=Ri(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:mc(i)}},vc=e=>{let t=e.format;return{format:t,...Bi,cacheKey:t}},xc=(e,t)=>{wn(e.inputs),e.compute(Ni("GlobalMaxPool",e.inputs[0],!0,t))}}),Sc,Ic,Tc,kc,Cg=K(()=>{oe(),ue(),ze(),le(),Sc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Ic=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,s=e[0].dims,a=e[1].dataType,o=D.size(s),u=r===3||r===2,d=u?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,p=e.length>2?e[2]:void 0,f=p?u?[Math.ceil(D.size(p.dims)/4)]:p.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,g=m===!1&&c.length===1,_=Me(o),v=m&&(!u||_===4),$=v?_:1,b=v&&!u?_:1,T=L("input",u?12:r,d.length,b),I=L("scale",a,c.length),k=p?L("zero_point",u?12:r,f.length):void 0,C=ne("output",a,s.length,$),M=[T,I];k&&M.push(k);let x=[d,c];p&&x.push(f);let O=[{type:12,data:o/$},{type:12,data:n},{type:12,data:t.blockSize},...ie(...x,s)],N=H=>{let q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(q).declareVariables(...M,C)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${I.getByOffset("0")}`:g?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

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
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:O})}},Tc=(e,t)=>{Sc(e.inputs,t),e.compute(Ic(e.inputs,t))},kc=e=>$e({axis:e.axis,blockSize:e.blockSize})}),Ec,Cc,Mc,Mg=K(()=>{He(),oe(),le(),Ec=(e,t,n)=>{let r=e===t,i=e<t&&n<0,s=e>t&&n>0;if(r||i||s)throw new Error("Range these inputs' contents are invalid.")},Cc=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),s=[i],a=i,o=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...ie(s)],u=d=>{let c=ne("output",r,s.length),p=c.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(f).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},Mc=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ke.webgpu.validateInputContent&&Ec(t,n,r),e.compute(Cc(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),zc,Ac,Rc,Oc,zg=K(()=>{oe(),ue(),ze(),le(),zc=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${s}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ac=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,s=1,a=Math.ceil(D.sizeToDimension(r,r.length-1)/s),o=r[r.length-1],u=D.sizeFromDimension(n,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...ie(e[1].dims,e[2].dims,i)],c=p=>{let f=L("indices",e[1].dataType,e[1].dims.length),m=L("updates",e[2].dataType,e[2].dims.length,s),g=t.reduction!=="none"&&t.reduction!==""?Ps("output",e[0].dataType,i.length):ne("output",e[0].dataType,i.length,s);return`
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
    ${zc(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},Rc=e=>$e({reduction:e.reduction}),Oc=(e,t)=>{e.compute(Ac(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Bc,Nc,Dc,Di,Uc,Pc,Lc,qc,Gc,Wc,Vc,Fc,Ui,Hc,jc,Kc,Xc,Yc,Zc,Qc,Ag=K(()=>{oe(),ue(),ze(),le(),Bc=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Nc=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,s)=>r[i]=e[s]),r},Dc=(e,t,n,r,i,s)=>{let[a,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>r.push(c)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Bc(r,t),t.axes.length>0&&Nc(r,t.axes,d).forEach((c,p)=>r[p]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Di=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Uc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Di("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Di("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Pc=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Lc=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,a)=>{r[s]=i[a],r[a+n]=i[t.length+a]}),r):i},qc=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(s=>i.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,a)=>i[s]=n[a])}else n.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Gc=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(s=>t[s]=r),n.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Wc=(e,t,n,r,i)=>`
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
    }`,Vc=(e,t,n,r,i,s,a)=>`
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
    }`,Fc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ui=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Hc=(e,t,n,r,i)=>{let[s,a,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Ui(e,u,s,2)}
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
    }`},jc=(e,t,n,r,i,s,a,o,u,d)=>{let c=n.length===2,[p,f]=c?[0,1]:[2,3],m=e.type.value,g=_=>{let v=_===p?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
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
          var ${v}: ${m} = originalIdx + ${m}(i);
          if (${v} < 0 || ${v} >= ${n[_]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${v} = max(0, min(${v}, ${n[_]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",_,`u32(${v})`)};
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
    `},Kc=(e,t,n,r,i)=>{let[s,a,o,u,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ui(e,d,s,3)}
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
    }`},Xc=(e,t,n,r,i,s)=>{let a=e.dims,o=Lc(s,t.axes,a.length),u=qc(a,r,i,t.axes),d=r.slice();r.length===0&&(d=a.map((b,T)=>b===0?1:u[T]/b),t.keepAspectRatioPolicy!=="stretch"&&(u=Gc(a,d,t)));let c=ne("output",e.dataType,u.length),p=L("input",e.dataType,a.length),f=D.size(u),m=a.length===u.length&&a.every((b,T)=>b===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,v=p.type.value,$=b=>`
      ${m?"":`
      ${Uc(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Fc(p,a)};
              ${Pc(t.nearestMode,n,v)};
              ${Vc(p,c,a,u,d.length,o.length,g)};
              `;case"linear":return`
              ${Wc(c,a,u,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Hc(p,c,a,g,_)}`;if(a.length===3||a.length===5)return`${Kc(p,c,a,g,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${jc(p,c,a,u,d,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ie(a,u)]})}},Yc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Zc=(e,t)=>{let n=[],r=[],i=[],s=Yc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Dc(e.inputs,t,s,n,r,i),e.compute(Xc(e.inputs[0],t,s,n,r,i),{inputs:[0]})},Qc=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return $e({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Jc,ep,tp,Rg=K(()=>{oe(),ue(),le(),Jc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},ep=(e,t,n,r)=>{let i=t.simplified,s=e[0].dims,a=D.size(s),o=s,u=a,d=s.slice(-1)[0],c=r?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,_=n>3,v=64,$=Me(d),b=[{type:12,data:u},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],T=k=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],M=[L("x",e[0].dataType,e[0].dims,$),L("skip",e[1].dataType,e[1].dims,$),L("gamma",e[2].dataType,e[2].dims,$)];p&&M.push(L("beta",e[3].dataType,e[3].dims,$)),f&&M.push(L("bias",e[4].dataType,e[4].dims,$)),M.push(ne("output",e[0].dataType,o,$)),m&&M.push(ne("mean_output",1,c)),g&&M.push(ne("inv_std_output",1,c)),_&&M.push(ne("input_skip_bias_sum",e[0].dataType,o,$));let x=Re(e[0].dataType),O=Re(1,$);return`

      ${k.registerUniforms(C).declareVariables(...M)}
      var<workgroup> sum_shared : array<${O}, ${v}>;
      var<workgroup> sum_squared_shared : array<${O}, ${v}>;

      ${k.mainStart([v,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${v};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${v};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${v-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Jt(x,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${v};
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
        let mean = ${bt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${bt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:o,dataType:e[0].dataType}];return n>1&&I.push({dims:c,dataType:1}),n>2&&I.push({dims:c,dataType:1}),n>3&&I.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${g};${_}`,inputDependencies:e.map((k,C)=>"type")},getShaderSource:T,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:b})}},tp=(e,t)=>{Jc(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(ep(e.inputs,t,e.outputCount,!1),{outputs:n})}}),np,bn,rp,Pi,ip,ap,sp,op,Og=K(()=>{oe(),ue(),ze(),le(),np=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},bn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},rp=(e,t)=>{if(e.length>1){let n=bn(e,1),r=bn(e,2),i=bn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),$e({starts:n,ends:r,axes:i})}else return t},Pi=(e,t,n,r,i)=>{let s=e;return e<0&&(s+=n[r[t]]),i[t]<0?Math.max(0,Math.min(s,n[r[t]]-1)):Math.max(0,Math.min(s,n[r[t]]))},ip=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,ap=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],s=bn(e,4);s.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map(($,b)=>Pi($,b,n,i,s)),o=t.ends.map(($,b)=>Pi($,b,n,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(a.splice($,0,0),o.splice($,0,n[$]),s.splice($,0,1));let u=s.map($=>Math.sign($));s.forEach(($,b,T)=>{if($<0){let I=(o[b]-a[b])/$,k=a[b],C=k+I*s[b];a[b]=C,o[b]=k,T[b]=-$}});let d=n.slice(0);i.forEach(($,b)=>{d[$]=Math.ceil((o[$]-a[$])/s[$])});let c={dims:d,dataType:e[0].dataType},p=ne("output",e[0].dataType,d.length),f=L("input",e[0].dataType,e[0].dims.length),m=D.size(d),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],_=[{type:12,data:m},{type:12,data:a},{type:6,data:u},{type:12,data:s},...ie(e[0].dims,d)],v=$=>`
      ${$.registerUniforms(g).declareVariables(f,p)}
        ${ip(f,p,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:_})}},sp=(e,t)=>{np(e.inputs,t);let n=rp(e.inputs,t);e.compute(ap(e.inputs,n),{inputs:[0]})},op=e=>{let t=e.starts,n=e.ends,r=e.axes;return $e({starts:t,ends:n,axes:r})}}),up,lp,dp,cp,Bg=K(()=>{oe(),ue(),ze(),$t(),le(),up=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},lp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),s=r.length,a=D.normalizeAxis(t.axis,s),o=a<r.length-1,u,d=[];o?(d=Array.from({length:s},(M,x)=>x),d[a]=s-1,d[s-1]=a,u=e.compute(Fe(n,d),{inputs:[n],outputs:[-1]})[0]):u=n;let c=u.dims,p=c[s-1],f=i/p,m=Me(p),g=p/m,_=64;f===1&&(_=256);let v=(M,x)=>x===4?`max(max(${M}.x, ${M}.y), max(${M}.z, ${M}.w))`:x===2?`max(${M}.x, ${M}.y)`:x===3?`max(max(${M}.x, ${M}.y), ${M}.z)`:M,$=L("x",u.dataType,u.dims,m),b=ne("result",u.dataType,u.dims,m),T=$.type.value,I=Re(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,k=M=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${_}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${M.registerUniform("packedCols","i32").declareVariables($,b)}
      ${M.mainStart(_)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${_};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
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
          rowMaxShared = ${T}(${v("threadShared[0]",m)});
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
          rowSumShared = ${T}(${bt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${m};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Fe(C,d),{inputs:[C]})},dp=(e,t)=>{up(e.inputs),lp(e,t)},cp=e=>$e({axis:e.axis})}),Li,pp,hp,fp,mp,Ng=K(()=>{oe(),ue(),le(),Li=e=>Array.from(e.getBigInt64Array(),Number),pp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Li(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},hp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},fp=(e,t)=>{let n=e[0].dims,r=t??Li(e[1]),i=hp(n,r),s=D.size(i),a=e[0].dataType,o=L("input",a,n.length),u=ne("output",a,i.length),d=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ie(e[0].dims,i)]}),getShaderSource:d}},mp=e=>{pp(e.inputs),e.compute(fp(e.inputs),{inputs:[0]})}}),gp,yp,_p,Dg=K(()=>{oe(),ue(),le(),gp=(e,t,n,r,i)=>{let s=ne("output_data",i,n.length,4),a=L("a_data",t[1].dataType,t[1].dims.length,4),o=L("b_data",t[2].dataType,t[2].dims.length,4),u=L("c_data",t[0].dataType,t[0].dims.length,4),d,c=(p,f,m)=>`select(${f}, ${p}, ${m})`;if(!r)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(f,m,g="")=>{let _=`a_data[index_a${m}][component_a${m}]`,v=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${f}[${m}] = ${g}(${c(_,v,$)});
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
      }`},yp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,s=!(D.areEqual(t,n)&&D.areEqual(n,r)),a=t,o=D.size(t);if(s){let d=Zt.calcShape(Zt.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=D.size(a)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>gp(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ie(r,t,n,a)]})}},_p=e=>{e.compute(yp(e.inputs))}}),wp,Ug=K(()=>{Qm(),ni(),Jm(),eg(),tg(),ng(),rg(),ug(),dg(),cg(),pg(),hg(),fg(),mg(),gg(),yg(),_g(),wg(),bg(),$g(),vg(),xg(),Sg(),Ig(),Tg(),zd(),kg(),Eg(),Cg(),Mg(),zg(),Jr(),Ag(),qd(),Rg(),Og(),Bg(),Ud(),Ng(),$t(),si(),Dg(),wp=new Map([["Abs",[Jo]],["Acos",[eu]],["Acosh",[tu]],["Add",[Gu]],["ArgMax",[Uo,ti]],["ArgMin",[Do,ti]],["Asin",[nu]],["Asinh",[ru]],["Atan",[iu]],["Atanh",[au]],["Attention",[Vo]],["AveragePool",[yc,gc]],["BatchNormalization",[Ko]],["BiasAdd",[Zo]],["BiasSplitGelu",[Pu]],["Cast",[ou,su]],["Ceil",[du]],["Clip",[lu]],["Concat",[nl,rl]],["Conv",[wi,yi]],["ConvTranspose",[Ml,kl]],["Cos",[cu]],["Cosh",[pu]],["CumSum",[Al,Rl]],["DepthToSpace",[Dl,Ul]],["DequantizeLinear",[Tc,kc]],["Div",[Wu]],["Einsum",[Vl,Fl]],["Elu",[hu,fn]],["Equal",[Vu]],["Erf",[fu]],["Exp",[mu]],["Expand",[Xl]],["FastGelu",[Zl]],["Floor",[gu]],["FusedConv",[wi,yi]],["Gather",[td,ed]],["GatherElements",[pd,cd]],["GatherBlockQuantized",[od,ud]],["GatherND",[rd,id]],["Gelu",[yu]],["Gemm",[gd,md]],["GlobalAveragePool",[wc,_c]],["GlobalMaxPool",[xc,vc]],["Greater",[Ku]],["GreaterOrEqual",[Yu]],["GridSample",[Id,Td]],["GroupQueryAttention",[Fd]],["HardSigmoid",[Iu,Su]],["InstanceNormalization",[Kd]],["LayerNormalization",[Zd]],["LeakyRelu",[_u,fn]],["Less",[Xu]],["LessOrEqual",[Zu]],["Log",[Ru]],["MatMul",[Jd]],["MatMulNBits",[rc,ic]],["MaxPool",[bc,$c]],["Mul",[Fu]],["MultiHeadAttention",[Md,Ed]],["Neg",[bu]],["Not",[wu]],["Pad",[hc]],["Pow",[Hu]],["QuickGelu",[Nu,fn]],["Range",[Mc]],["Reciprocal",[$u]],["ReduceMin",[Ao]],["ReduceMean",[ko]],["ReduceMax",[zo]],["ReduceSum",[Oo]],["ReduceProd",[Ro]],["ReduceL1",[Eo]],["ReduceL2",[Co]],["ReduceLogSum",[No]],["ReduceLogSumExp",[Mo]],["ReduceSumSquare",[Bo]],["Relu",[vu]],["Resize",[Zc,Qc]],["RotaryEmbedding",[Ld]],["ScatterND",[Oc,Rc]],["Sigmoid",[xu]],["Sin",[Tu]],["Sinh",[ku]],["Slice",[sp,op]],["SkipLayerNormalization",[tp]],["Split",[Nd,Dd]],["Sqrt",[Eu]],["Softmax",[dp,cp]],["Sub",[ju]],["Tan",[Cu]],["Tanh",[Mu]],["ThresholdedRelu",[Au,fn]],["Tile",[mp]],["Transpose",[js,Ks]],["Where",[_p]]])}),bp,Pg=K(()=>{He(),ct(),le(),bp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){nt(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ke(e.programInfo.name)}dispose(){}build(e,t){nt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=qs(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${s}`,o=n.createShaderModule({code:a,label:e.name});ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ke(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let s=t*n*r,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),$p={};Xt($p,{WebGpuBackend:()=>Ip});var vp,xp,Sp,Ip,Lg=K(()=>{He(),oe(),ct(),ks(),Ym(),Ug(),Pg(),vp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let s=e[r].dims.length;n.push(`${i};${s}`);break}case"dims":{let s=e[r].dims.join(",");n.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},xp=(e,t,n)=>{var i,s;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${vp(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Sp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ip=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Sp(a),this.gpuDataManager=Ds(this),this.programManager=new bp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Nr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;nt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=n[i],a=s.kernelId,o=this.kernels.get(a),u=o.kernelType,d=o.kernelName,c=s.programName,p=s.inputTensorViews,f=s.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),v=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map($=>({dims:$.dims,dataType:dt($.dataType)})),outputsMetadata:f.map($=>({dims:$.dims,dataType:dt($.dataType)})),kernelId:a,kernelType:u,kernelName:d,programName:c,startTime:_,endTime:v});else{let $="";p.forEach((T,I)=>{$+=`input[${I}]: [${T.dims}] | ${dt(T.dataType)}, `});let b="";f.forEach((T,I)=>{b+=`output[${I}]: [${T.dims}] | ${dt(T.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${d}|${c}" ${$}${b}start time: ${_} ns, execution time: ${v-_} ns`)}Mn("GPU",`${c}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Ke()}run(e,t,n,r,i,s){nt(e.name);let a=[];for(let b=0;b<t.length;++b){let T=t[b].data;if(T===0)continue;let I=this.gpuDataManager.get(T);if(!I)throw new Error(`no GPU data for input: ${T}`);a.push(I)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),c=n.length===0?o.map((b,T)=>T):n;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let p=[],f=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=s)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let T=c[b]===-1,I=c[b]===-2,k=T||I?i(o[b].dataType,o[b].dims):r(c[b],o[b].dataType,o[b].dims);if(p.push(k),k.data===0)continue;let C=this.gpuDataManager.get(k.data);if(!C)throw new Error(`no GPU data for output: ${k.data}`);if(T&&this.temporaryData.push(C),I){let M=this.kernelPersistentData.get(this.currentKernelId);M||(M=[],this.kernelPersistentData.set(this.currentKernelId,M)),M.push(C)}f.push(C)}if(a.length!==t.length||f.length!==p.length){if(f.length===0)return Ke(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let b=0,T=[];d.forEach(M=>{let x=typeof M.data=="number"?[M.data]:M.data;if(x.length===0)return;let O=M.type===10?2:4,N,H;M.type===10?(H=x.length>4?16:x.length>2?8:x.length*O,N=x.length>4?16:O*x.length):(H=x.length<=2?x.length*O:16,N=16),b=Math.ceil(b/H)*H,T.push(b);let q=M.type===10?8:4;b+=x.length>4?Math.ceil(x.length/q)*N:x.length*O});let I=16;b=Math.ceil(b/I)*I;let k=new ArrayBuffer(b);d.forEach((M,x)=>{let O=T[x],N=typeof M.data=="number"?[M.data]:M.data;if(M.type===6)new Int32Array(k,O,N.length).set(N);else if(M.type===12)new Uint32Array(k,O,N.length).set(N);else if(M.type===10)new Uint16Array(k,O,N.length).set(N);else if(M.type===1)new Float32Array(k,O,N.length).set(N);else throw new Error(`Unsupported uniform type: ${dt(M.type)}`)});let C=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,k,0,b),this.gpuDataManager.release(C.id),m={offset:0,size:b,buffer:C.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),_=g[1]===1&&g[2]===1,v=xp(e,t,_),$=this.programManager.getArtifact(v);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(v,$),ge("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let T=d[b],I=T.type,k=typeof T.data=="number"?1:T.data.length,[C,M]=$.uniformVariablesInfo[b];if(I!==C||k!==M)throw new Error(`Uniform variable ${b} mismatch: expect type ${C} with size ${M}, got type ${I} with size ${k} in program "${$.programInfo.name}".`)}}if(ge("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,a,f,g,m),Ke(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=wp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,s=r.kernelName,a=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ge("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{u&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,s);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Kr(this,e,t);return Dr(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Tp={};Xt(Tp,{init:()=>Ep});var Kn,kp,Ep,qg=K(()=>{oe(),ct(),ue(),Xm(),Kn=class Tm{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new Tm(this.module,this.dataType,this.data,t)}},kp=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,s));let a=Number(e.getValue(r*i++,s));this.outputCount=Number(e.getValue(r*i++,s)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,s));let o=[];for(let u=0;u<a;u++){let d=Number(e.getValue(r*i++,s)),c=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,s)),f=[];for(let m=0;m<p;m++)f.push(Number(e.getValue(r*i++,s)));o.push(new Kn(e,d,c,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new Kn(this.module,u,this.output(o,d),d),s=(o,u)=>{let d=Bt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Kn(this.module,o,c,u)};return this.backend.run(e,n,r,i,s,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Ep=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Lg(),sn($p)).WebGpuBackend,a=new s;await a.initialize(n,r),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,d,c=!1)=>{if(c)ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),a.memcpy(Number(o),Number(u));else{ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(u),p)}},async(o,u,d)=>{ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>a.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,d,c)=>{ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new kp(t,a,Number(u));return a.computeKernel(Number(o),p,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Rs(n);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,u,d,c)=>s.ensureTensor(a,o,u,d,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!n.trace])}}}),Cp,qi,Gi,vt,Mp,Wi,Xn,Vi,Fi,Hi,ji,Ki,Xi,zp=K(()=>{He(),Hm(),jm(),oe(),At(),zr(),ys(),Cp=(e,t)=>{Ee()._OrtInit(e,t)!==0&&ve("Can't initialize onnxruntime.")},qi=async e=>{Cp(e.wasm.numThreads,Bn(e.logLevel))},Gi=async(e,t)=>{var r,i;(i=(r=Ee()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(qg(),sn(Tp)).init;t==="webgpu"&&await s("webgpu",Ee(),e,n),t==="webnn"&&await s("webnn",Ee(),e)}},vt=new Map,Mp=e=>{let t=Ee(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ve("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+r,s))]}finally{t.stackRestore(n)}},Wi=(e,t)=>{let n=Ee(),r=n.stackSave(),i=0;try{let s=n.PTR_SIZE,a=n.stackAlloc(2*s);n._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ve("Can't get session input/output metadata.");let o=Number(n.getValue(a,"*"));i=Number(n.getValue(a+s,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let d=n.HEAPU32[i/4+1],c=[];for(let p=0;p<d;p++){let f=Number(n.getValue(i+8+p*s,"*"));c.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(p+d)*s,"*")))}return[o,u,c]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Xn=e=>{let t=Ee(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Vi=async(e,t)=>{var p,f,m,g;let n,r,i=Ee();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Xn(e);let s=0,a=0,o=0,u=[],d=[],c=[];try{if([a,u]=await gs(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let x=[];for(let O of t.externalData){let N=typeof O=="string"?O:O.path;x.push(Br(typeof O=="string"?O:O.data).then(H=>{i.mountExternalData(N,H)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof x!="string"){let O=x,N=O==null?void 0:O.context,H=O==null?void 0:O.gpuDevice,q=O==null?void 0:O.deviceType,W=O==null?void 0:O.powerPreference;N?i.currentContext=N:H?i.currentContext=await i.webnnCreateMLContext(H):i.currentContext=await i.webnnCreateMLContext({deviceType:q,powerPreference:W})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(n,r,a),(p=i.webgpuOnCreateSession)==null||p.call(i,s),s===0&&ve("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,v]=Mp(s),$=!!(t!=null&&t.enableGraphCapture),b=[],T=[],I=[],k=[],C=[];for(let x=0;x<_;x++){let[O,N,H]=Wi(s,x);O===0&&ve("Can't get an input name."),d.push(O);let q=i.UTF8ToString(O);b.push(q),I.push(N===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:dt(N),shape:H})}for(let x=0;x<v;x++){let[O,N,H]=Wi(s,x+_);O===0&&ve("Can't get an output name."),c.push(O);let q=i.UTF8ToString(O);T.push(q),k.push(N===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:dt(N),shape:H});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let W=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[q])??"cpu",A=i.webnnIsGraphOutput;if(W==="cpu"&&A&&A(s,q)){C.push("ml-tensor-cpu-output");continue}if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if($&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(W)}}let M=null;return C.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&ve("Can't create IO binding."),M={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>Or(x))}),vt.set(s,[s,d,c,M,$,!1]),[s,b,T,I,k]}catch(_){throw d.forEach(v=>i._OrtFree(v)),c.forEach(v=>i._OrtFree(v)),o!==0&&i._OrtReleaseBinding(o)!==0&&ve("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ve("Can't release session."),_}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ve("Can't release session options."),u.forEach(_=>i._free(_)),(g=i.unmountExternalData)==null||g.call(i)}},Fi=e=>{var u,d,c;let t=Ee(),n=vt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,s,a,o]=n;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&ve("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ve("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&ve("Can't release session."),vt.delete(e)},Hi=async(e,t,n,r,i,s,a=!1)=>{if(!e){t.push(0);return}let o=Ee(),u=o.PTR_SIZE,d=e[0],c=e[1],p=e[3],f=p,m,g;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let $=e[2].gpuBuffer;g=Bt(Ot(d),c);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=b(r,s,$,g)}}else if(p==="ml-tensor"){let $=e[2].mlTensor;g=Bt(Ot(d),c);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=b(r,$,Ot(d),c)}else{let $=e[2];if(Array.isArray($)){g=u*$.length,m=o._malloc(g),n.push(m);for(let b=0;b<$.length;b++){if(typeof $[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(m+b*u,Xe($[b],n),"*")}}else{let b=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&b&&T){let I=o.UTF8ToString(i);if(b(r,I)||T(r,I)){let k=Ot(d);g=Bt(k,c),f="ml-tensor";let C=o.webnnCreateTemporaryTensor,M=o.webnnUploadTensor;if(!C||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await C(r,k,c);M(x,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=x}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}else g=$.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),m)}}let _=o.stackSave(),v=o.stackAlloc(4*c.length);try{c.forEach((b,T)=>o.setValue(v+T*u,b,u===4?"i32":"i64"));let $=o._OrtCreateTensor(Ot(d),m,g,v,c.length,Or(f));$===0&&ve(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push($)}finally{o.stackRestore(_)}},ji=async(e,t,n,r,i,s)=>{var q,W,A,V;let a=Ee(),o=a.PTR_SIZE,u=vt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],c=u[1],p=u[2],f=u[3],m=u[4],g=u[5],_=t.length,v=r.length,$=0,b=[],T=[],I=[],k=[],C=[],M=a.stackSave(),x=a.stackAlloc(_*o),O=a.stackAlloc(_*o),N=a.stackAlloc(v*o),H=a.stackAlloc(v*o);try{[$,b]=cs(s),Mt("wasm prepareInputOutputTensor");for(let U=0;U<_;U++)await Hi(n[U],T,k,e,c[t[U]],t[U],m);for(let U=0;U<v;U++)await Hi(i[U],I,k,e,p[r[U]],_+r[U],m);zt("wasm prepareInputOutputTensor");for(let U=0;U<_;U++)a.setValue(x+U*o,T[U],"*"),a.setValue(O+U*o,c[t[U]],"*");for(let U=0;U<v;U++)a.setValue(N+U*o,I[U],"*"),a.setValue(H+U*o,p[r[U]],"*");if(f&&!g){let{handle:U,outputPreferredLocations:J,outputPreferredLocationsEncoded:G}=f;if(c.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${c.length}).`);Mt("wasm bindInputsOutputs");for(let X=0;X<_;X++){let z=t[X];await a._OrtBindInput(U,c[z],T[X])!==0&&ve(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<v;X++){let z=r[X];(q=i[X])!=null&&q[3]?(C.push(I[X]),a._OrtBindOutput(U,p[z],I[X],0)!==0&&ve(`Can't bind pre-allocated output[${X}] for session=${e}.`)):a._OrtBindOutput(U,p[z],0,G[z])!==0&&ve(`Can't bind output[${X}] to ${J[X]} for session=${e}.`)}zt("wasm bindInputsOutputs"),vt.set(e,[d,c,p,f,m,!0])}(W=a.jsepOnRunStart)==null||W.call(a,d),(A=a.webnnOnRunStart)==null||A.call(a,d);let j;f?j=await a._OrtRunWithBinding(d,f.handle,v,N,$):j=await a._OrtRun(d,O,x,_,H,v,N,$),j!==0&&ve("failed to call OrtRun().");let Y=[],se=[];Mt("wasm ProcessOutputTensor");for(let U=0;U<v;U++){let J=Number(a.getValue(N+U*o,"*"));if(J===I[U]||C.includes(I[U])){Y.push(i[U]),J!==I[U]&&a._OrtReleaseTensor(J)!==0&&ve("Can't release tensor.");continue}let G=a.stackSave(),X=a.stackAlloc(4*o),z=!1,B,F=0;try{a._OrtGetTensorData(J,X,X+o,X+2*o,X+3*o)!==0&&ve(`Can't access output tensor data on index ${U}.`);let te=o===4?"i32":"i64",Z=Number(a.getValue(X,te));F=a.getValue(X+o,"*");let de=a.getValue(X+o*2,"*"),xe=Number(a.getValue(X+o*3,te)),fe=[];for(let ye=0;ye<xe;ye++)fe.push(Number(a.getValue(de+ye*o,te)));a._OrtFree(de)!==0&&ve("Can't free memory for tensor dims.");let Ie=fe.reduce((ye,ae)=>ye*ae,1);B=dt(Z);let Se=f==null?void 0:f.outputPreferredLocations[r[U]];if(B==="string"){if(Se==="gpu-buffer"||Se==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ye=[];for(let ae=0;ae<Ie;ae++){let _e=a.getValue(F+ae*o,"*"),Ue=a.getValue(F+(ae+1)*o,"*"),Oe=ae===Ie-1?void 0:Ue-_e;ye.push(a.UTF8ToString(_e,Oe))}Y.push([B,fe,ye,"cpu"])}else if(Se==="gpu-buffer"&&Ie>0){let ye=a.jsepGetBuffer;if(!ye)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ae=ye(F),_e=Bt(Z,Ie);if(_e===void 0||!Ar(B))throw new Error(`Unsupported data type: ${B}`);z=!0,Y.push([B,fe,{gpuBuffer:ae,download:a.jsepCreateDownloader(ae,_e,B),dispose:()=>{a._OrtReleaseTensor(J)!==0&&ve("Can't release tensor.")}},"gpu-buffer"])}else if(Se==="ml-tensor"&&Ie>0){let ye=a.webnnEnsureTensor,ae=a.webnnIsGraphInputOutputTypeSupported;if(!ye||!ae)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Bt(Z,Ie)===void 0||!Rr(B))throw new Error(`Unsupported data type: ${B}`);if(!ae(e,B,!1))throw new Error(`preferredLocation "ml-tensor" for ${B} output is not supported by current WebNN Context.`);let _e=await ye(e,F,Z,fe,!1);z=!0,Y.push([B,fe,{mlTensor:_e,download:a.webnnCreateMLTensorDownloader(F,B),dispose:()=>{a.webnnReleaseTensorId(F),a._OrtReleaseTensor(J)}},"ml-tensor"])}else if(Se==="ml-tensor-cpu-output"&&Ie>0){let ye=a.webnnCreateMLTensorDownloader(F,B)(),ae=Y.length;z=!0,se.push((async()=>{let _e=[ae,await ye];return a.webnnReleaseTensorId(F),a._OrtReleaseTensor(J),_e})()),Y.push([B,fe,[],"cpu"])}else{let ye=On(B),ae=new ye(Ie);new Uint8Array(ae.buffer,ae.byteOffset,ae.byteLength).set(a.HEAPU8.subarray(F,F+ae.byteLength)),Y.push([B,fe,ae,"cpu"])}}finally{a.stackRestore(G),B==="string"&&F&&a._free(F),z||a._OrtReleaseTensor(J)}}f&&!m&&(a._OrtClearBoundOutputs(f.handle)!==0&&ve("Can't clear bound outputs."),vt.set(e,[d,c,p,f,m,!1]));for(let[U,J]of await Promise.all(se))Y[U][2]=J;return zt("wasm ProcessOutputTensor"),Y}finally{(V=a.webnnOnRunEnd)==null||V.call(a,d),a.stackRestore(M),T.forEach(j=>a._OrtReleaseTensor(j)),I.forEach(j=>a._OrtReleaseTensor(j)),k.forEach(j=>a._free(j)),$!==0&&a._OrtReleaseRunOptions($),b.forEach(j=>a._free(j))}},Ki=e=>{let t=Ee(),n=vt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ve("Can't get an profile file name."),t._OrtFree(i)},Xi=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),xt,qe,en,$n,vn,Yn,Yi,Zn,Gt,Wt,Ap,Rp,Op,Bp,Np,Dp,Up,Pp,Lp=K(()=>{He(),zp(),At(),kr(),xt=()=>!!ke.wasm.proxy&&typeof document<"u",en=!1,$n=!1,vn=!1,Zn=new Map,Gt=(e,t)=>{let n=Zn.get(e);n?n.push(t):Zn.set(e,[t])},Wt=()=>{if(en||!$n||vn||!qe)throw new Error("worker not ready")},Ap=e=>{switch(e.data.type){case"init-wasm":en=!1,e.data.err?(vn=!0,Yi[1](e.data.err)):($n=!0,Yi[0]()),Yn&&(URL.revokeObjectURL(Yn),Yn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Zn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Rp=async()=>{if(!$n){if(en)throw new Error("multiple calls to 'initWasm()' detected.");if(vn)throw new Error("previous call to 'initWasm()' failed.");if(en=!0,xt())return new Promise((e,t)=>{qe==null||qe.terminate(),ss().then(([n,r])=>{try{qe=r,qe.onerror=s=>t(s),qe.onmessage=Ap,Yi=[e,t];let i={type:"init-wasm",in:ke};!i.in.wasm.wasmPaths&&(n||xr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),qe.postMessage(i),Yn=n}catch(i){t(i)}},t)});try{await Mr(ke.wasm),await qi(ke),$n=!0}catch(e){throw vn=!0,e}finally{en=!1}}},Op=async e=>{if(xt())return Wt(),new Promise((t,n)=>{Gt("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:ke}};qe.postMessage(r)});await Gi(ke,e)},Bp=async e=>xt()?(Wt(),new Promise((t,n)=>{Gt("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};qe.postMessage(r,[e.buffer])})):Xn(e),Np=async(e,t)=>{if(xt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Wt(),new Promise((n,r)=>{Gt("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),qe.postMessage(i,s)})}else return Vi(e,t)},Dp=async e=>{if(xt())return Wt(),new Promise((t,n)=>{Gt("release",[t,n]);let r={type:"release",in:e};qe.postMessage(r)});Fi(e)},Up=async(e,t,n,r,i,s)=>{if(xt()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Wt(),new Promise((a,o)=>{Gt("run",[a,o]);let u=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:s}};qe.postMessage(d,Xi(u))})}else return ji(e,t,n,r,i,s)},Pp=async e=>{if(xt())return Wt(),new Promise((t,n)=>{Gt("end-profiling",[t,n]);let r={type:"end-profiling",in:e};qe.postMessage(r)});Ki(e)}}),Zi,qp,Gp,Gg=K(()=>{He(),Lp(),oe(),wr(),ys(),Zi=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},qp=e=>{switch(e[3]){case"cpu":return new We(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ar(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return We.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Rr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return We.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Gp=class{async fetchModelAndCopyToWasmMemory(e){return Bp(await Br(e))}async loadModel(e,t){nt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Np(n,t),Ke()}async dispose(){return Dp(this.sessionId)}async run(e,t,n){nt();let r=[],i=[];Object.entries(e).forEach(p=>{let f=p[0],m=p[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let s=[],a=[];Object.entries(t).forEach(p=>{let f=p[0],m=p[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);s.push(m),a.push(g)});let o=r.map((p,f)=>Zi(p,()=>`input "${this.inputNames[i[f]]}"`)),u=s.map((p,f)=>p?Zi(p,()=>`output "${this.outputNames[a[f]]}"`):null),d=await Up(this.sessionId,i,o,a,u,n),c={};for(let p=0;p<d.length;p++)c[this.outputNames[a[p]]]=s[p]??qp(d[p]);return Ke(),c}startProfiling(){}endProfiling(){Pp(this.sessionId)}}}),Wp={};Xt(Wp,{OnnxruntimeWebAssemblyBackend:()=>Ji,initializeFlags:()=>Qi,wasmBackend:()=>Vp});var Qi,Ji,Vp,Wg=K(()=>{He(),Lp(),Gg(),Qi=()=>{(typeof ke.wasm.initTimeout!="number"||ke.wasm.initTimeout<0)&&(ke.wasm.initTimeout=0);let e=ke.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ke.wasm.simd=!1),typeof ke.wasm.proxy!="boolean"&&(ke.wasm.proxy=!1),typeof ke.wasm.trace!="boolean"&&(ke.wasm.trace=!1),typeof ke.wasm.numThreads!="number"||!Number.isInteger(ke.wasm.numThreads)||ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ke.wasm.numThreads=1;else{let t=typeof navigator>"u"?Em("node:os").cpus().length:navigator.hardwareConcurrency;ke.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ji=class{async init(e){Qi(),await Rp(),await Op(e)}async createInferenceSessionHandler(e,t){let n=new Gp;return await n.loadModel(e,t),n}},Vp=new Ji});He(),He(),He();var Vg="1.27.0";{let e=(Wg(),sn(Wp)).wasmBackend;Yt("webgpu",e,5),Yt("webnn",e,5),Yt("cpu",e,10),Yt("wasm",e,10)}Object.defineProperty(ke.versions,"web",{value:Vg,enumerable:!0});/**
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
 */const Fg=114;function Hg(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),s=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-s)/2),resizedWidth:i,resizedHeight:s}}function jg(e,t,n){const{width:r,height:i,channels:s,data:a}=e,o=new Uint8Array(t*n*3),u=r/t,d=i/n;for(let c=0;c<n;c++){const p=(c+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,p-f));for(let _=0;_<t;_++){const v=(_+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(v))),b=Math.min(r-1,$+1),T=Math.max(0,Math.min(1,v-$)),I=(f*r+$)*s,k=(f*r+b)*s,C=(m*r+$)*s,M=(m*r+b)*s,x=(c*t+_)*3;for(let O=0;O<3;O++){const N=a[I+O]*(1-T)+a[k+O]*T,H=a[C+O]*(1-T)+a[M+O]*T;o[x+O]=Math.min(255,Math.max(0,Math.round(N*(1-g)+H*g)))}}}return o}function Kg(e,t){const n=Hg(e.width,e.height,t),r=jg(e,n.resizedWidth,n.resizedHeight),i=t*t,s=new Float32Array(3*i).fill(Fg/255);for(let a=0;a<n.resizedHeight;a++){const o=(a+n.padY)*t+n.padX,u=a*n.resizedWidth;for(let d=0;d<n.resizedWidth;d++){const c=(u+d)*3,p=o+d;s[p]=r[c]/255,s[i+p]=r[c+1]/255,s[2*i+p]=r[c+2]/255}}return{tensor:s,params:n}}function Xg(e,t,n,r){const i=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const o=e[a*6],u=e[a*6+1],d=e[a*6+2],c=e[a*6+3],p=e[a*6+4],f=e[a*6+5];if(p<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,_=(u-t.padY)/t.scale,v=(d-t.padX)/t.scale,$=(c-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(g),Math.trunc(_),Math.trunc(v-g),Math.trunc($-_)],boxFloat:[g,_,v-g,$-_]})}return i}function xn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Fp(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Hp(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,o)=>a-o),r=t/100*(n.length-1),i=Math.floor(r),s=Math.ceil(r);return i===s?n[i]:n[i]*(s-r)+n[s]*(r-i)}const Yg=.6,Zg=.8;function jp(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<n)continue;const o=(e[s*6]-t.padX)/t.scale,u=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,c=(e[s*6+3]-t.padY)/t.scale,p=xn((o+d)/2),f=xn((u+c)/2),m=xn((d-o+(c-u))/4);m>=1&&r.push({cx:p,cy:f,r:m})}return r}function Qg(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Yg*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function Jg(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=Zg*(n.r+r.r))&&t.push(n);return t}function e0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Fp(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),s=Math.floor(r.cy/t);return i!==s?i-s:n.cx-r.cx})}function Kp(e,t,n){const r=jp(e,t,n);return r.length===0?[]:e0(Jg(Qg(r)))}function t0(e,t,n){return jp(e,t,n)}function Xp(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<n||r.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return r}const Yp=["brown","grey","blue","green","yellow","red","purple"],n0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Zp(e,t,n){return Xg(e,t,n,Yp.length).map(r=>{const i=Yp[r.classIndex];return{color:i,family:n0[i],box:r.box,confidence:r.confidence}})}const r0=8,i0=.8,Qp=1.25;function a0(e){if(e.length<r0)return[];const t=[],n=[];for(const a of e){const[,,o,u]=a.box;o>u*Qp?t.push(a):u>o*Qp&&n.push(a)}const[r,i,s]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<i0*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${s} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const ht={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function tn(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),s=r-i,a=r===0?0:Math.round(255*s/r);if(s===0)return{h:0,s:a,v:r};let o;return r===e?o=60*(t-n)/s:r===t?o=120+60*(n-e)/s:o=240+60*(e-t)/s,o<0&&(o+=360),{h:Math.round(o/2),s:a,v:r}}const s0=.42,o0=22,u0=43,l0=120,d0=1.5,c0=.72,p0=110,Jp=3;function Sn(e,t,n){const{width:r,height:i,channels:s,data:a}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),d=Math.trunc(Math.min(r,i)*s0);if(d<1)return 0;let c=0;for(let p=0;p<i;p++)for(let f=0;f<r;f++){if((f-o)**2+(p-u)**2>d*d)continue;const m=(p*r+f)*s,g=a[m],_=a[m+1],v=a[m+2];!t&&g>=250&&_>=250&&v>=250||(n(g,_,v),c+=1)}return c}function h0(e){let t=0,n=0,r=0,i=Sn(e,!1,(s,a,o)=>{const u=tn(s,a,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Sn(e,!0,(s,a,o)=>{const u=tn(s,a,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function f0(e){let t=0,n=0,r=Sn(e,!1,(s,a)=>{t+=s,n+=a});if(r===0&&(r=Sn(e,!0,(s,a)=>{t+=s,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function m0(e){let t=0;const n=Sn(e,!0,(r,i,s)=>{t+=tn(r,i,s).s});return n===0?null:t/n}function g0(e){const t=h0(e);if(t===null||t.s<=o0)return 1;if(t.s>=l0){const n=f0(e);return n!==null&&n>=d0?6:3}return t.s>=u0?3:6}function y0(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,o)=>a-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,o)=>e[a].r-e[o].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>s.get(a))}function _0(e,t){const n=[...t];if(e.length<Jp||t.length!==e.length)return n;const r=e.map(a=>m0(a)),i=r.filter(a=>a!==null);if(i.length<Jp)return n;const s=Fp(i);return s<=0||r.forEach((a,o)=>{a!==null&&n[o]!==1&&a<c0*s&&a<p0&&(n[o]=1)}),n}function eh(e,t){const{cx:n,cy:r,r:i}=t,s=Math.max(0,n-i),a=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),d=Math.max(0,o-s),c=Math.max(0,u-a),p=new Uint8Array(d*c*3);for(let f=0;f<c;f++)for(let m=0;m<d;m++){const g=(f*d+m)*3;if((m+s-n)**2+(f+a-r)**2<=i*i){const v=((f+a)*e.width+(m+s))*e.channels;p[g]=e.data[v],p[g+1]=e.data[v+1],p[g+2]=e.data[v+2]}else p[g]=255,p[g+1]=255,p[g+2]=255}return{width:d,height:c,channels:3,data:p}}function w0(e,t){const n=t.map(s=>eh(e,s)),r=n.map(s=>g0(s)),i=y0(t,r);return _0(n,i)}function b0(e){const{width:t,height:n,channels:r,data:i}=e,s=new Uint8Array(t*n);for(let a=0,o=0;a<s.length;a++,o+=r)s[a]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:s}}function th(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,s=e.height/n;for(let a=0;a<n;a++){const o=a*s,u=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const c=d*i,p=Math.min((d+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const _=Math.min(g+1,u)-Math.max(g,o);if(!(_<=0))for(let v=Math.floor(c);v<p;v++){const $=Math.min(v+1,p)-Math.max(v,c);$<=0||(f+=e.data[g*e.width+v]*$*_,m+=$*_)}}r[a*t+d]=Math.min(255,Math.max(0,xn(f/m)))}}return{width:t,height:n,data:r}}function $0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const s=255/(n-t[r]),a=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],a[u]=Math.min(255,Math.max(0,xn(o*s)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function v0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const c=a+d,p=s+u;if(!(c<0||c>=t||p<0||p>=n)&&r[p*t+c]===0){o=!1;break}}i[s*t+a]=o&&r[s*t+a]>0?255:0}return{width:t,height:n,data:i}}function x0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const c=a+d,p=s+u;if(c>=0&&c<t&&p>=0&&p<n&&r[p*t+c]>0){o=!0;break}}i[s*t+a]=o?255:0}return{width:t,height:n,data:i}}function ea(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),s=[],a=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let d=0,c=0;a[c++]=u,i[u]=o;let p=0,f=0,m=0;for(;d<c;){const g=a[d++],_=g%t,v=g/t|0;p+=1,f+=_,m+=v;for(let $=-1;$<=1;$++)for(let b=-1;b<=1;b++){if(b===0&&$===0)continue;const T=_+b,I=v+$;if(T<0||T>=t||I<0||I>=n)continue;const k=I*t+T;r[k]>0&&i[k]===0&&(i[k]=o,a[c++]=k)}}s[o]={area:p,centroidX:f/p,centroidY:m/p},o+=1}return{labels:i,stats:s}}function S0(e,t,n){return nh(Float32Array.from(e.data),e.width,t,n)}function nh(e,t,n,r){const i=new Float32Array(t*t),s=t/2,a=-n*Math.PI/180,o=Math.cos(a),u=Math.sin(a);for(let d=0;d<t;d++)for(let c=0;c<t;c++){const p=c-s,f=d-s,m=o*p-u*f+s,g=u*p+o*f+s,_=Math.floor(m),v=Math.floor(g),$=m-_,b=g-v,T=(C,M)=>C>=0&&C<t&&M>=0&&M<t?e[M*t+C]:r,I=T(_,v)*(1-$)+T(_+1,v)*$,k=T(_,v+1)*(1-$)+T(_+1,v+1)*$;i[d*t+c]=I*(1-b)+k*b}return i}const I0=.9,T0=.34,k0=[.55,.6,.66,.72],E0=22,C0=88,M0=35,nn=28,ta=4,z0=Array.from({length:15},(e,t)=>-21+t*3),rh=[-2,0,2],A0=3,R0=.3;function O0(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function B0(e){let t=e.width,n=-1,r=e.height,i=-1,s=0;for(let _=0;_<e.height;_++)for(let v=0;v<e.width;v++)e.data[_*e.width+v]>0&&(s+=1,t=Math.min(t,v),n=Math.max(n,v),r=Math.min(r,_),i=Math.max(i,_));if(s<8)return null;const a=n-t+1,o=i-r+1,u=Math.max(o,a),d=new Uint8Array(u*u),c=Math.floor((u-a)/2),p=Math.floor((u-o)/2);for(let _=0;_<o;_++)for(let v=0;v<a;v++)d[(_+p)*u+(v+c)]=e.data[(_+r)*e.width+(v+t)];const f=nn-2*ta,m=th({width:u,height:u,data:d},f,f),g=new Float32Array(nn*nn);for(let _=0;_<f;_++)for(let v=0;v<f;v++)g[(_+ta)*nn+(v+ta)]=m.data[_*f+v]>110?1:0;return g}function N0(e,t){const{width:n,height:r,channels:i,data:s}=e,a=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*T0);if(u<4)return null;const d=a-u,c=o-u,p=2*u,f=2*u;if(p<6||f<6)return null;const m=new Int16Array(p*f),g=new Int16Array(p*f),_=new Int16Array(p*f),v=new Uint8Array(p*f),$=[],b=Math.min(p,f)/2;for(let U=0;U<p;U++)for(let J=0;J<f;J++){const G=((U+d)*n+(J+c))*i,{h:X,s:z,v:B}=tn(s[G],s[G+1],s[G+2]),F=U*f+J;m[F]=X,g[F]=z,_[F]=B,Math.sqrt((J-f/2)**2+(U-p/2)**2)/b<=t&&(v[F]=1,$.push(B))}if($.length<16)return null;const T=Hp($,55);let I=0,k=0,C=0;const M=U=>m[U]>=E0&&m[U]<=C0&&g[U]>=M0,x=U=>_[U]>=T&&g[U]<=95&&!M(U)&&v[U]===1;for(let U=0;U<p*f;U++)v[U]===1&&(C+=1,_[U]>=130&&!M(U)&&(I+=1),x(U)&&(k+=1));const O=I>.5*C&&k<.15*C,N=new Uint8Array(p*f);if(O){const U=Hp($,45);for(let J=0;J<p*f;J++)N[J]=v[J]===1&&_[J]<=U?255:0}else for(let U=0;U<p*f;U++)N[U]=x(U)?255:0;const H={width:f,height:p,data:N},q=v0(H);let W=ea(q),A=W;if(W.stats.length<=1&&(W=ea(H),A=W,W.stats.length<=1))return null;const V=Math.min(p,f)/2;let j=0,Y=-1;for(let U=1;U<A.stats.length;U++){const J=A.stats[U];if(J===void 0)continue;const G=Math.hypot(J.centroidX-f/2,J.centroidY-p/2)/V,X=J.area*(1-.6*Math.min(G,1));X>Y&&(Y=X,j=U)}if(j===0)return null;const se=new Uint8Array(p*f);for(let U=0;U<p*f;U++)se[U]=A.labels[U]===j?255:0;return B0(x0({width:f,height:p,data:se}))}function D0(e,t,n,r,i,s){const a=nn;let o=0,u=0;for(let d=0;d<a;d++){const c=d-s;if(!(c<0||c>=a))for(let p=0;p<a;p++){const f=p-i;if(f<0||f>=a)continue;const m=e[c*a+f];m!==0&&(u+=m,o+=m*n[d*a+p])}}return o/(u+r-o+1e-6)}function U0(e,t){const n=t.reduce((i,s)=>i+s,0);let r=-1;for(const i of z0){const s=i===0?e:nh(e,nn,i,0),a=s.reduce((o,u)=>o+u,0);for(const o of rh)for(const u of rh){const d=D0(s,a,t,n,o,u);d>r&&(r=d)}}return r}function P0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of k0){const o=N0(e,a);if(o!==null)for(const{label:u,bits:d}of t)n.push([U0(o,d),u])}if(n.length===0)return[null,0];if(n.sort((a,o)=>o[0]-a[0]),n[0][0]<R0)return[null,0];const r=new Map;for(const[a,o]of n.slice(0,A0))r.set(o,(r.get(o)??0)+a);let i=0,s=-1;for(const[a,o]of r)o>s&&(s=o,i=a);return[i,n[0][0]]}const ft=48,L0=320;function q0(e){return["blank",...e.characters," "]}function G0(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const o=e[a];o!==0&&(a>0&&e[a-1]===o||(r+=n[o]??"",i.push(t[a])))}if(i.length===0)return["",0];const s=i.reduce((a,o)=>a+o,0)/i.length;return[r,s]}function W0(e,t){const n=Math.trunc(ft*t),r=e.width/e.height,i=Math.ceil(ft*r)>n?n:Math.ceil(ft*r),s=new Float32Array(3*ft*n),a=ft*n,o=e.width/i,u=e.height/ft;for(let d=0;d<ft;d++){const c=(d+.5)*u-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(c))),f=Math.min(e.height-1,p+1),m=Math.max(0,Math.min(1,c-p));for(let g=0;g<i;g++){const _=(g+.5)*o-.5,v=Math.max(0,Math.min(e.width-1,Math.floor(_))),$=Math.min(e.width-1,v+1),b=Math.max(0,Math.min(1,_-v));for(let T=0;T<3;T++){const I=2-T,k=(p*e.width+v)*e.channels+I,C=(p*e.width+$)*e.channels+I,M=(f*e.width+v)*e.channels+I,x=(f*e.width+$)*e.channels+I,O=e.data[k]*(1-b)+e.data[C]*b,N=e.data[M]*(1-b)+e.data[x]*b,H=O*(1-m)+N*m;s[T*a+d*n+g]=(H/255-.5)/.5}}}return{tensor:s,width:n}}const V0=62,F0=8,H0=5;function na(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function j0(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),s=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let o=1;o<=r;o++)s[o]=e[a-1]===t[o-1]?i[o-1]+1:Math.max(i[o],s[o-1]);[i,s]=[s,i]}return i[r]}function Qn(e,t){return e.length===0&&t.length===0?100:200*j0(e,t)/(e.length+t.length)}function ih(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Qn(n(e),n(t))}function K0(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(c=>r.has(c)).sort(),s=[...n].filter(c=>!r.has(c)).sort(),a=[...r].filter(c=>!n.has(c)).sort(),o=i.join(" "),u=[o,s.join(" ")].filter(Boolean).join(" "),d=[o,a.join(" ")].filter(Boolean).join(" ");return o.length>0&&(s.length===0||a.length===0)?100:Math.max(Qn(o,u),Qn(o,d),Qn(u,d))}function X0(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const s of[na(i),na(r.name)])if(s)for(const a of[s,s.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function Y0(e,t){const n=na(e);if(!n||t.length===0)return null;const i=X0(t).map(c=>({...c,score:K0(n,c.key)})).sort((c,p)=>p.score-c.score).slice(0,F0).filter(c=>c.score>=V0);if(i.length===0)return null;const s=i[0].score,a=i.filter(c=>s-c.score<=H0),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],d=[ih(o,u.key),u.score];for(const c of a.slice(1)){const p=[ih(o,c.key),c.score];(p[0]>d[0]||p[0]===d[0]&&p[1]>d[1])&&(u=c,d=p)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Z0=2560,Q0=.3,J0=.5,ey=1.6,ty=3,ny=5;function ry(e){const t=Math.min(1,Z0/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,s=new Float32Array(3*i),a=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const d=(u+.5)*o-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,c+1),f=Math.max(0,Math.min(1,d-c));for(let m=0;m<n;m++){const g=(m+.5)*a-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(g))),v=Math.min(e.width-1,_+1),$=Math.max(0,Math.min(1,g-_));for(let b=0;b<3;b++){const T=2-b,I=(c*e.width+_)*e.channels+T,k=(c*e.width+v)*e.channels+T,C=(p*e.width+_)*e.channels+T,M=(p*e.width+v)*e.channels+T,x=e.data[I]*(1-$)+e.data[k]*$,O=e.data[C]*(1-$)+e.data[M]*$,N=x*(1-f)+O*f;s[b*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:s,width:n,height:r}}function iy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const s=i===n-1;for(let a=0;a<t;a++){const o=i*t+a;let u=e[o];if(a+1<t&&e[o+1]>u&&(u=e[o+1]),!s){const d=o+t;e[d]>u&&(u=e[d]),a+1<t&&e[d+1]>u&&(u=e[d+1])}r[o]=u}}return r}function ay(e){if(e.length<3)return e;const t=[...e].sort((s,a)=>s[0]-a[0]||s[1]-a[1]),n=(s,a,o)=>(a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0]),r=[];for(const s of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(let s=t.length-1;s>=0;s--){const a=t[s];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function sy(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,s]=e[r],[a,o]=e[(r+1)%e.length],u=a-i,d=o-s,c=Math.hypot(u,d);if(c===0)continue;const p=u/c,f=d/c;let m=1/0,g=-1/0,_=1/0,v=-1/0;for(const[I,k]of e){const C=I*p+k*f,M=-I*f+k*p;C<m&&(m=C),C>g&&(g=C),M<_&&(_=M),M>v&&(v=M)}const $=g-m,b=v-_,T=$*b;if(T<n){n=T;const I=(m+g)/2,k=(_+v)/2;t={cx:I*p-k*f,cy:I*f+k*p,w:$,h:b,angle:Math.atan2(f,p)}}}return t}function oy(e,t,n,r){const i=Math.cos(r.angle),s=Math.sin(r.angle),a=r.w/2,o=r.h/2,u=Math.abs(a*i)+Math.abs(o*s),d=Math.abs(a*s)+Math.abs(o*i),c=Math.max(0,Math.floor(r.cx-u)),p=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-d)),m=Math.min(n-1,Math.ceil(r.cy+d));let g=0,_=0;for(let v=f;v<=m;v++)for(let $=c;$<=p;$++){const b=$-r.cx,T=v-r.cy,I=b*i+T*s,k=-b*s+T*i;Math.abs(I)<=a&&Math.abs(k)<=o&&(g+=e[v*t+$],_+=1)}return _===0?0:g/_}function uy(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((_,v)=>_[0]-v[0]),[o,u,d,c]=a,[p,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=d[1]<=c[1]?[d,c]:[c,d];return[[p[0],p[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function ly(e,t,n,r){const{width:i,height:s}=t;let a=new Uint8Array(i*s);for(let m=0;m<a.length;m++)a[m]=e[m]>Q0?255:0;a=iy(a,i,s);const o={width:i,height:s,data:a},{labels:u}=ea(o),d=new Map;for(let m=0;m<s;m++)for(let g=0;g<i;g++){const _=u[m*i+g];if(_===0)continue;let v=d.get(_);v===void 0&&(v=new Map,d.set(_,v));const $=v.get(m);$===void 0?v.set(m,[g,g]):(g<$[0]&&($[0]=g),g>$[1]&&($[1]=g))}const c=n/i,p=r/s,f=[];for(const[m,g]of d){const _=[];for(const[N,[H,q]]of g)_.push([H-.5,N-.5],[H-.5,N+.5],[q+.5,N-.5],[q+.5,N+.5]);const v=sy(ay(_));if(Math.min(v.w,v.h)<ty)continue;const $=oy(e,i,s,v);if($<J0)continue;const b=v.w*v.h*ey/(2*(v.w+v.h)),T={...v,w:v.w+2*b,h:v.h+2*b};if(Math.min(T.w,T.h)<ny+2)continue;const k=uy(T).map(([N,H])=>[Math.min(n,Math.max(0,Math.round(N*c))),Math.min(r,Math.max(0,Math.round(H*p)))]),C=k.map(N=>N[0]),M=k.map(N=>N[1]),x=Math.min(...C),O=Math.min(...M);f.push({quad:k,x,y:O,width:Math.max(...C)-x,height:Math.max(...M)-O,score:$})}return f.sort((m,g)=>g.score-m.score)}function dy(e,t){const[n,r,i,s]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-s[0],i[1]-s[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(s[0]-n[0],s[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=cy([[0,0],[a,0],[a,o],[0,o]],[n,r,i,s]),d=new Uint8Array(a*o*e.channels);for(let p=0;p<o;p++)for(let f=0;f<a;f++){const m=u[6]*f+u[7]*p+u[8],g=(u[0]*f+u[1]*p+u[2])/m,_=(u[3]*f+u[4]*p+u[5])/m,v=Math.floor(g),$=Math.floor(_),b=g-v,T=_-$,I=Math.max(0,Math.min(e.width-1,v)),k=Math.max(0,Math.min(e.width-1,v+1)),C=Math.max(0,Math.min(e.height-1,$)),M=Math.max(0,Math.min(e.height-1,$+1));for(let x=0;x<e.channels;x++){const O=e.data[(C*e.width+I)*e.channels+x],N=e.data[(C*e.width+k)*e.channels+x],H=e.data[(M*e.width+I)*e.channels+x],q=e.data[(M*e.width+k)*e.channels+x],W=O*(1-b)+N*b,A=H*(1-b)+q*b;d[(p*a+f)*e.channels+x]=Math.round(W*(1-T)+A*T)}}const c={width:a,height:o,channels:e.channels,data:d};return o/a>=1.5?Jn(c,3):c}function cy(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[s,a]=e[i],[o,u]=t[i];n.push([s,a,1,0,0,0,-o*s,-o*a]),r.push(o),n.push([0,0,0,s,a,1,-u*s,-u*a]),r.push(u)}for(let i=0;i<8;i++){let s=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[s][i])&&(s=o);[n[i],n[s]]=[n[s],n[i]],[r[i],r[s]]=[r[s],r[i]];const a=n[i][i];for(let o=i;o<8;o++)n[i][o]/=a;r[i]/=a;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let d=i;d<8;d++)n[o][d]-=u*n[i][d];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Jn(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:s,data:a}=e,o=n%2===0?r:i,u=n%2===0?i:r,d=new Uint8Array(o*u*s);for(let c=0;c<i;c++)for(let p=0;p<r;p++){let f,m;n===1?(f=i-1-c,m=p):n===2?(f=r-1-p,m=i-1-c):(f=c,m=r-1-p);const g=(c*r+p)*s,_=(m*o+f)*s;for(let v=0;v<s;v++)d[_+v]=a[g+v]}return{width:o,height:u,channels:s,data:d}}const py=5e3,ah=.75,hy=15,fy=1.25,my=2.4,gy=.003,yy=.85,_y=4,sh=2600,oh=2,uh=.3,lh=.1,dh=.012,wy=22,ch=.5,er=.12;function mt(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let s=0,a=t.width*t.height;s<a;s++)r[s*3]=t.data[s*i],r[s*3+1]=t.data[s*i+1],r[s*3+2]=t.data[s*i+2];return n}function by(e,t,n,r){const i=r.map(Z=>Z[0]),s=r.map(Z=>Z[1]),a=i.reduce((Z,de)=>Z+de,0)/i.length,o=s.reduce((Z,de)=>Z+de,0)/s.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s));if(u<4)return null;const d=u*_y,c=Math.max(0,Math.trunc(a-d)),p=Math.min(n.width,Math.trunc(a+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(n.height,Math.trunc(o+d));if(p-c<8||m-f<8)return null;const g=Math.max(n.width,n.height)<sh?oh:1,_=mt(e,n),v=mt(e,t),$=new e.Rect(c,f,p-c,m-f),b=_.roi($),T=new e.Mat;g!==1?e.resize(b,T,new e.Size(0,0),g,g,e.INTER_CUBIC):b.copyTo(T);const I=new e.Mat,k=new e.Mat;e.cvtColor(v,I,e.COLOR_RGB2GRAY),e.cvtColor(T,k,e.COLOR_RGB2GRAY);const C=new e.ORB(py),M=new e.KeyPointVector,x=new e.KeyPointVector,O=new e.Mat,N=new e.Mat,H=new e.Mat,q=[_,v,b,T,I,k,M,x,O,N,H],W=Z=>{for(const de of q)try{de.delete()}catch{}try{C.delete()}catch{}return Z};if(C.detectAndCompute(I,H,M,O),C.detectAndCompute(k,H,x,N),O.rows<8||N.rows<8)return W(null);const A=new e.BFMatcher(e.NORM_HAMMING),V=new e.DMatchVectorVector;A.knnMatch(O,N,V,2);const j=[],Y=[];for(let Z=0;Z<V.size();Z++){const de=V.get(Z);if(de.size()===2){const xe=de.get(0),fe=de.get(1);if(xe.distance<ah*fe.distance){const Ie=M.get(xe.queryIdx).pt,Se=x.get(xe.trainIdx).pt;j.push(Ie.x,Ie.y),Y.push(Se.x,Se.y)}}}if(V.delete(),A.delete(),j.length/2<8)return W(null);const se=e.matFromArray(j.length/2,1,e.CV_32FC2,j),U=e.matFromArray(Y.length/2,1,e.CV_32FC2,Y),J=new e.Mat,G=e.findHomography(se,U,e.RANSAC,5,J);let X=0;for(let Z=0;Z<J.rows;Z++)X+=J.data[Z];const z=G.rows===3?[...G.data64F]:null;if(se.delete(),U.delete(),J.delete(),G.delete(),z===null||X<hy)return W(null);const B=1/g,F=[[B,0,c],[0,B,f],[0,0,1]],te=[0,1,2].map(Z=>[0,1,2].map(de=>F[Z][0]*z[de]+F[Z][1]*z[3+de]+F[Z][2]*z[6+de]));return W({H:te,inliers:X})}function ph(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[d,c]=e[u],[p,f]=e[(u+1)%4];r+=d*f-p*c}const i=Math.abs(r/2)/(t*n);if(i<gy||i>yy)return!1;const s=e.map((u,d)=>{const c=e[(d+1)%4];return Math.hypot(c[0]-u[0],c[1]-u[1])}),a=Math.min(...s);if(a<1)return!1;const o=Math.max(...s)/a;return o>=fy&&o<=my}function hh(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function fh(e,t,n,r){const i=n.width,s=n.height,a=Math.max(8,Math.trunc(uh*i)),o=i+2*a,u=s+2*a;if(o*u>4e7)return null;const d=r.map(q=>[q[0],q[1],q[2]-a*(q[0]+q[1])+0]);for(let q=0;q<3;q++)d[q][2]=r[q][2]-a*r[q][0]-a*r[q][1];const c=mt(e,t),p=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(c,p,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),c.delete(),f.delete();const g=m.data,_=Math.max(4,Math.trunc(a/3)),v=[[],[],[]],$=(q,W)=>{const A=(W*o+q)*3;v[0].push(g[A]),v[1].push(g[A+1]),v[2].push(g[A+2])};for(let q=0;q<u;q++)for(let W=0;W<o;W++)(q<_||q>=u-_||W<_||W>=o-_)&&$(W,q);const b=q=>{q.sort((A,V)=>A-V);const W=q.length>>1;return q.length%2?q[W]:(q[W-1]+q[W])/2},T=[b(v[0]),b(v[1]),b(v[2])],I=(q,W)=>{const A=(W*o+q)*3,V=g[A]-T[0],j=g[A+1]-T[1],Y=g[A+2]-T[2];return Math.sqrt(V*V+j*j+Y*Y)>wy},k=Math.max(6,Math.trunc(lh*i)),C=Math.max(6,Math.trunc(lh*s)),M=Math.max(2,Math.trunc(dh*i)),x=Math.max(2,Math.trunc(dh*s)),O=q=>{let W=0,A=0;for(const V of q)A=V?A+1:0,A>W&&(W=A);return W/Math.max(1,q.length)},N=q=>{let W,A,V,j,Y;if(q==="L"?(W=a,A=a+s,V=Math.max(0,a-M-k),j=Math.max(0,a-M),Y=!1):q==="R"?(W=a,A=a+s,V=a+i+M,j=Math.min(o,a+i+M+k),Y=!1):(W=Math.max(0,a-x-C),A=Math.max(0,a-x),V=a,j=a+i,Y=!0),A<=W||j<=V)return 0;const se=[];if(Y)for(let U=V;U<j;U++){let J=0;for(let G=W;G<A;G++)I(U,G)&&J++;se.push(J/(A-W)>ch)}else for(let U=W;U<A;U++){let J=0;for(let G=V;G<j;G++)I(G,U)&&J++;se.push(J/(j-V)>ch)}return O(se)},H={L:N("L"),R:N("R"),T:N("T")};return p.delete(),m.delete(),H}const $y=6e3,vy=8,xy=.5,Sy=.6;function Iy(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<sh?oh:1,s=mt(e,t),a=new e.Mat;i!==1?e.resize(s,a,new e.Size(0,0),i,i,e.INTER_CUBIC):s.copyTo(a);const o=new e.Mat;e.cvtColor(a,o,e.COLOR_RGB2GRAY),s.delete(),a.delete();const u=new e.ORB($y),d=new e.Mat,c=new e.KeyPointVector,p=new e.Mat;u.detectAndCompute(o,d,c,p);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(p.rows<8)return f;for(const[g,_]of n){if(r!==void 0&&Date.now()>r)break;const v=mt(e,_),$=new e.Mat;e.cvtColor(v,$,e.COLOR_RGB2GRAY);const b=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute($,d,b,T);const I=[v,b,T],k=()=>{for(const te of I)te.delete();$.delete()};if(T.rows<8){k();continue}const C=new e.DMatchVectorVector;m.knnMatch(T,p,C,2);const M=[],x=[];for(let te=0;te<C.size();te++){const Z=C.get(te);if(Z.size()===2){const de=Z.get(0);if(de.distance<ah*Z.get(1).distance){const xe=b.get(de.queryIdx).pt,fe=c.get(de.trainIdx).pt;M.push(xe.x,xe.y),x.push(fe.x,fe.y)}}}if(C.delete(),M.length/2<8){k();continue}const O=e.matFromArray(M.length/2,1,e.CV_32FC2,M),N=e.matFromArray(x.length/2,1,e.CV_32FC2,x),H=new e.Mat,q=e.findHomography(O,N,e.RANSAC,5,H);let W=0;for(let te=0;te<H.rows;te++)W+=H.data[te];const A=q.rows===3?[...q.data64F]:null;if(O.delete(),N.delete(),H.delete(),q.delete(),A===null||W<vy){k();continue}const V=1/i,j=[[V*A[0],V*A[1],V*A[2]],[V*A[3],V*A[4],V*A[5]],[A[6],A[7],A[8]]],Y=[[0,0],[_.width,0],[_.width,_.height],[0,_.height]].map(([te,Z])=>hh(j,te,Z));if(!ph(Y,t.width,t.height)){k();continue}const se=mt(e,t),U=e.matFromArray(3,3,e.CV_64F,j.flat()),J=new e.Mat;e.warpPerspective(se,J,U,new e.Size(_.width,_.height),e.WARP_INVERSE_MAP);const G=new e.Mat;e.cvtColor(J,G,e.COLOR_RGB2GRAY);const X=new e.Mat;e.matchTemplate(G,$,X,e.TM_CCOEFF_NORMED);const z=X.data32F[0];if(se.delete(),U.delete(),J.delete(),G.delete(),X.delete(),z<xy){k();continue}const B=fh(e,t,_,j),F=B===null?[]:Object.keys(B).filter(te=>B[te]>=er);f.push({id:g,confidence:Math.max(0,z),footprint:Y,built:B!==null&&Math.max(B.L,B.R,B.T)>=er,tuckRegion:mh(Y,F)}),k()}}finally{o.delete(),d.delete(),c.delete(),p.delete();try{u.delete(),m.delete()}catch{}}return f}function mh(e,t){if(e.length<4||t.length===0)return null;const n=e.map(_=>[_[0],_[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),s=.5*(r+i),a=uh*s;if(!(a>0))return null;const o=n.reduce((_,v)=>_+v[0],0)/n.length,u=n.reduce((_,v)=>_+v[1],0)/n.length,d={T:[0,1],R:[1,2],L:[0,3]},c=[...n];for(const _ of["L","R","T"]){if(!t.includes(_))continue;const[v,$]=d[_],b=n[v],T=n[$];let I=-(T[1]-b[1]),k=T[0]-b[0];const C=(b[0]+T[0])/2,M=(b[1]+T[1])/2;I*(C-o)+k*(M-u)<0&&(I=-I,k=-k);const x=Math.hypot(I,k);x<=1e-6||(I=I/x*a,k=k/x*a,c.push([b[0]+I,b[1]+k],[T[0]+I,T[1]+k]))}const p=c.map(_=>_[0]),f=c.map(_=>_[1]),m=Math.round(Math.min(...p)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...f))-g}}function Ty(e,t,n,r){const i=by(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([d,c])=>hh(i.H,d,c));if(!ph(a,t.width,t.height))return null;const o=fh(e,t,n,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=er);return{built:Math.max(o.L,o.R,o.T)>=er,footprint:a,overflow:u,inliers:i.inliers}}const gh=120,yh=179,ky=.45,Ey=6e-4,Cy=.02,My=6e3,zy=.78,Ay=1.25,Ry=2.4,Oy=.05,By=1.5,Ny=.5,Dy=.9,Uy=150,Py=18,Ly=34,qy=90,Gy=130,Wy=.13,Vy=.15,_h="magistrates-guild",ra="merchants-guild";function Fy(e,t){const n=mt(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[gh,30,40,0]),s=new e.Mat(r.rows,r.cols,r.type(),[yh,255,205,255]),a=new e.Mat;e.inRange(r,i,s,a),r.delete(),i.delete(),s.delete();const o=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),u=new e.Mat;e.morphologyEx(a,u,e.MORPH_CLOSE,o),a.delete(),o.delete();const d=new e.Mat,c=new e.Mat,p=new e.Mat,f=e.connectedComponentsWithStats(u,d,c,p,8);u.delete(),d.delete(),p.delete();const m=t.width*t.height,g=[];for(let _=1;_<f;_++){const v=c.intAt(_,0),$=c.intAt(_,1),b=c.intAt(_,2),T=c.intAt(_,3),I=c.intAt(_,4),k=I/m;k<Ey||k>Cy||I/Math.max(b*T,1)<ky||g.push({x:v,y:$,w:b,h:T})}return c.delete(),g}function Hy(e,t,n,r,i,s,a){const o=e,u=s,d=a,c=i;if(!c.gray){const z=mt(e,r);c.gray=new o.Mat,o.cvtColor(z,c.gray,o.COLOR_RGB2GRAY),z.delete(),c.k=new o.KeyPointVector,c.d=new o.Mat;const B=new o.Mat;u.detectAndCompute(c.gray,B,c.k,c.d),B.delete()}const p=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(p,f,m,g),f.delete();const _=z=>(m.delete(),g.delete(),z);if(c.d.rows<8||g.rows<8)return _(null);const v=new o.DMatchVectorVector;d.knnMatch(c.d,g,v,2);const $=[],b=[];for(let z=0;z<v.size();z++){const B=v.get(z);if(B.size()===2){const F=B.get(0);if(F.distance<zy*B.get(1).distance){const te=c.k.get(F.queryIdx).pt,Z=m.get(F.trainIdx).pt;$.push(te.x,te.y),b.push(Z.x,Z.y)}}}if(v.delete(),$.length/2<8)return _(null);const T=o.matFromArray($.length/2,1,o.CV_32FC2,$),I=o.matFromArray(b.length/2,1,o.CV_32FC2,b),k=new o.Mat,C=o.findHomography(T,I,o.RANSAC,5,k);if(T.delete(),I.delete(),k.delete(),C.rows!==3)return C.delete(),_(null);const M=[...C.data64F],x=(z,B)=>{const F=M[6]*z+M[7]*B+M[8];return[(M[0]*z+M[1]*B+M[2])/F,(M[3]*z+M[4]*B+M[5])/F]},O=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([z,B])=>x(z,B));if(O.some(z=>!Number.isFinite(z[0])||!Number.isFinite(z[1])))return C.delete(),_(null);const N=O.map((z,B)=>{const F=O[(B+1)%4];return Math.hypot(F[0]-z[0],F[1]-z[1])}),H=Math.min(...N);if(H<1)return C.delete(),_(null);const q=Math.max(...N)/H;let W=0;for(let z=0;z<4;z++){const[B,F]=O[z],[te,Z]=O[(z+1)%4];W+=B*Z-te*F}const A=t,V=Math.abs(W/2)/(A.rows*A.cols);if(q<Ay||q>Ry||V<Oy||V>By)return C.delete(),_(null);const j=new o.Mat;o.warpPerspective(A,j,C,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),C.delete();const Y=new o.Mat;o.cvtColor(j,Y,o.COLOR_RGB2GRAY),j.delete();const se=Math.trunc(r.height/2),U=Y.roi(new o.Rect(0,0,r.width,se)),J=c.gray.roi(new o.Rect(0,0,r.width,se)),G=new o.Mat;o.matchTemplate(U,J,G,o.TM_CCOEFF_NORMED);const X=G.data32F[0];return U.delete(),J.delete(),G.delete(),Y.delete(),_(X)}function jy(e,t,n){let r,i;if(n===_h)r=ra,i=Wy;else if(n===ra)r=_h,i=Vy;else return null;const{x:s,y:a,w:o,h:u}=t;if(o<8||u<8)return null;const d=Math.trunc(o/2);let c=0,p=null;for(const[f,m]of[[0,d],[d,o]]){let g=0,_=0;for(let $=a;$<a+u;$++)for(let b=s+f;b<s+m;b++){const T=($*e.width+b)*e.channels,{h:I,s:k,v:C}=tn(e.data[T],e.data[T+1],e.data[T+2]);if(I>=gh&&I<=yh&&k>=30&&k<=170&&C<=170)continue;g++,(r===ra?I>=Py&&I<=Ly&&k>=qy&&C>=Gy:I>=95&&I<=130&&k>=80)&&_++}if(g<20)continue;const v=_/g;v>c&&(c=v,p={x:s+f,y:a,w:m-f,h:u})}return c>=i&&p!==null?{id:r,box:p}:null}function Ky(e,t,n,r){var p;const i=[],s=Fy(e,t);if(s.length===0||n.size===0)return i;const a=e,o=new a.ORB(My),u=new a.BFMatcher(a.NORM_HAMMING),d=new Map;for(const f of n.keys())d.set(f,{});const c=mt(e,t);try{for(const f of s){if(r!==void 0&&Date.now()>r)break;const m=f.x+Math.trunc(f.w/2),g=f.y+Math.trunc(f.h/2),_=Math.max(Uy,Math.trunc(Dy*Math.max(f.w,f.h))),v=Math.max(0,m-_),$=Math.max(0,g-_),b=Math.min(t.width,m+_),T=Math.min(t.height,g+_);if(b-v<16||T-$<16)continue;const I=c.roi(new a.Rect(v,$,b-v,T-$)),k=new a.Mat;a.cvtColor(I,k,a.COLOR_RGB2GRAY);let C=null,M=-2;for(const[x,O]of n){if(r!==void 0&&Date.now()>r)break;const N=Hy(e,I,k,O,d.get(x),o,u);N!==null&&N>M&&(M=N,C=x)}if(I.delete(),k.delete(),C!==null&&M>=Ny){i.push({id:C,boundingBox:{x:f.x,y:f.y,width:f.w,height:f.h},confidence:1});const x=jy(t,f,C);x&&i.push({id:x.id,boundingBox:{x:x.box.x,y:x.box.y,width:x.box.w,height:x.box.h},confidence:.9})}}}finally{c.delete();for(const f of d.values()){const m=f;for(const g of["gray","k","d"])try{(p=m[g])==null||p.delete()}catch{}}try{o.delete(),u.delete()}catch{}}return i}const wh=128,Xy=.56,Yy=15,Zy=.58,Qy=70,Jy=50,e_=.12,t_=.2,n_=.1,r_=.17,bh=.15;function i_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function $h(e,t){const{width:n,height:r,channels:i,data:s}=e,a=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const d=Math.max(0,a-u),c=Math.max(0,o-u),p=Math.min(n,a+u),f=Math.min(r,o+u),m=p-d,g=f-c,_=new Uint8Array(m*g*i);for(let v=0;v<g;v++){const $=((v+c)*n+d)*i;_.set(s.subarray($,$+m*i),v*m*i)}return{width:m,height:g,channels:i,data:_}}function a_(e){const t=$h(e,Xy),n=b0(t),r=th(n,wh,wh);return $0(r)}function s_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let s=0,a=0,o=0;for(let u=0;u<n;u++){const d=e[u]-r,c=t[u]-i;s+=d*c,a+=d*d,o+=c*c}return s/(Math.sqrt(a*o)+1e-6)}function o_(e){const t=new Map([["masonry",0],["strategy",0]]),n=$h(e,Zy),{width:r,height:i,channels:s,data:a}=n,o=r*i||1;let u=0,d=0;for(let f=0;f<r*i;f++){const m=f*s,{h:g,s:_,v}=tn(a[m],a[m+1],a[m+2]);_>=Qy&&v>=Jy&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(d+=1))}const c=u/o,p=d/o;return c>=e_&&t.set("masonry",bh*Math.min(1,c/t_)),p>=n_&&t.set("strategy",bh*Math.min(1,p/r_)),t}function u_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=a_(e);let r=0;for(const d of n.data)r+=d;const i=r/n.data.length,s=[];for(let d=0;d<360;d+=Yy)s.push(S0(n,d,i));const a=new Map;for(const[d,c]of t){let p=-1/0;for(const f of s){const m=s_(f,c);m>p&&(p=m)}a.set(d,p)}for(const[d,c]of o_(e))c>0&&a.has(d)&&a.set(d,a.get(d)+c);let o="",u=-1/0;for(const[d,c]of a)c>u&&(o=d,u=c);return[o,u]}const St="/7wd-scorer/models/";let vh=!1;const tr=new Map;function xh(){var e;vh||(ke.wasm.wasmPaths="/7wd-scorer/ort/",ke.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,vh=!0)}const ia=new Set;function l_(e){xh();let t=tr.get(e);return t===void 0&&(t=ln.create(`${St}${ht[e].onnx}`,{executionProviders:ia.has(e)?["wasm"]:["webgpu","wasm"]}),tr.set(e,t),t.catch(()=>tr.delete(e))),t}let aa=null,sa=null;const d_=.75,c_=4,p_=.65,h_=3e4;let oa=null;function Sh(){return oa===null&&(oa=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),oa}const Ih=new Map;function Th(e){let t=Ih.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${St}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),s=new OffscreenCanvas(r.width,r.height).getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),Ih.set(e,t)),t}function kh(e){return Th(`wonder-refs/${e}.jpg`)}const f_=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function m_(){const e=new Map;for(const t of f_){const n=await Th(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}const g_=.6,y_=12,__=45e3;let ua=null;function Eh(){return ua===null&&(xh(),ua=(async()=>{try{const[e,t,n,r]=await Promise.all([ln.create(`${St}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),ln.create(`${St}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${St}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${St}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:q0(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),ua}async function w_(e,t){const n=Math.max(L0/ft,t.width/t.height),{tensor:r,width:i}=W0(t,n),s={[e.rec.inputNames[0]]:new We("float32",r,[1,3,ft,i])},a=(await e.rec.run(s))[e.rec.outputNames[0]],[o,u,d]=a.dims,c=a.data,p=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,_=-1/0;const v=m*d;for(let $=0;$<d;$++){const b=c[v+$];b>_&&(_=b,g=$)}p[m]=g,f[m]=_}return G0(p,f,e.charset)}async function b_(e,t){const n=await Eh();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+__;let s=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){s=!0;break}t(`wonder names: rotation ${a*90}°…`);const o=Jn(e,a),u=ry(o),d={[n.det.inputNames[0]]:new We("float32",u.tensor,[1,3,u.height,u.width])},c=(await n.det.run(d))[n.det.outputNames[0]],p=ly(c.data,u,o.width,o.height).slice(0,y_);console.debug(`[wonders-ocr] rot ${a*90}: ${p.length} det boxes`,p.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of p){if(Date.now()>i){s=!0;break e}const m=dy(o,f.quad);if(m.width<m.height*1.5)continue;const[g,_]=await w_(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${_.toFixed(2)}`),_<g_||g.trim().length<c_)continue;const v=Y0(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",v),v===null||v.confidence<d_||v.kind!=="wonder")continue;const $=r.get(v.id);($===void 0||v.confidence>$.confidence)&&r.set(v.id,{id:v.id,name:v.name,confidence:v.confidence,nameBox:Ch(f,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:s}}function Ch(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const s=(p,f)=>i===1?[f,r-1-p]:i===2?[n-1-p,r-1-f]:[n-1-f,p],a=[s(e.x,e.y),s(e.x+e.width,e.y+e.height)],o=a.map(p=>p[0]),u=a.map(p=>p[1]),d=Math.min(...o),c=Math.min(...u);return{x:d,y:c,width:Math.max(...o)-d,height:Math.max(...u)-c}}function $_(){return sa===null&&(sa=fetch(`${St}laurel_gallery.json`).then(async e=>e.ok?O0(await e.json()):[]).catch(()=>[])),sa}function v_(e,t,n,r){return x_(e,t-r,n-r,2*r,2*r)}function x_(e,t,n,r,i){const s=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),d=Math.max(0,o-s),c=Math.max(0,u-a),p=new Uint8Array(d*c*3);for(let f=0;f<c;f++)for(let m=0;m<d;m++){const g=((f+a)*e.width+(m+s))*e.channels,_=(f*d+m)*3;p[_]=e.data[g],p[_+1]=e.data[g+1],p[_+2]=e.data[g+2]}return{width:d,height:c,channels:3,data:p}}function S_(){return aa===null&&(aa=fetch(`${St}token_templates.json`).then(async e=>e.ok?i_(await e.json()):new Map).catch(()=>new Map)),aa}async function Mh(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Vt(e,t){const n=ht[e],{tensor:r,params:i}=Kg(t,n.input),s=async()=>{const a=await l_(e),o={[a.inputNames[0]]:new We("float32",r,[1,3,n.input,n.input])};return{rows:(await a.run(o))[a.outputNames[0]].data,params:i}};try{return await s()}catch(a){if(ia.has(e))throw a;return ia.add(e),tr.delete(e),await s()}}const I_=6,T_=2,k_=5,E_=2;async function C_(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Mh(e),r=await Vt("banner",n),i=Zp(r.rows,r.params,ht.banner.conf);if(t.banners=i.length,i.length>=I_)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await Vt("laurel",n),a=Xp(s.rows,s.params,ht.laurel.conf);if(t.laurels=a.length,a.length>=T_)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const o=await Vt("coin",n),u=Kp(o.rows,o.params,ht.coin.conf);return t.coins=u.length,u.length>=k_?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=E_?{...t,kind:"board",confidence:.4}:t}function M_(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function z_(e,t,n,r){const i={},s=[],a=[],o=[],u=[],d=[],c=[];let p=0,f=0,m=0,g=0,_=0;for(const T of e){_+=1;const I=`${t} photo ${_}/${e.length}`;r(`${I}: reading pixels…`);const k=await Mh(T);r(`${I}: card banners…`);const C=await Vt("banner",k),M=Zp(C.rows,C.params,ht.banner.conf);r(`${I}: progress tokens…`);const x=await Vt("token",k),O=await S_(),N=[];for(const z of t0(x.rows,x.params,ht.token.conf)){N.push({cx:z.cx,cy:z.cy,r:z.r});const[B,F]=u_(eh(k,z),O);B===""?f+=1:o.some(te=>te.id===B)||o.push({id:B,center:[z.cx,z.cy],radius:z.r,confidence:Math.round(F*1e4)/1e4})}r(`${I}: coins…`);const H=await Vt("coin",k),q=Kp(H.rows,H.params,ht.coin.conf).filter(z=>!N.some(B=>(z.cx-B.cx)**2+(z.cy-B.cy)**2<=z.r*z.r)),W=w0(k,q),A=[];if(q.forEach((z,B)=>{const F=W[B];p+=F,A.push({denomination:F,center:[z.cx,z.cy],radius:z.r,denomSource:"colour"})}),A.length>=2){const z=A.map(F=>F.radius).sort((F,te)=>F-te),B=z.length%2===1?z[(z.length-1)/2]:(z[z.length/2-1]+z[z.length/2])/2;if(B>0)for(const F of A)F.radius/B>2&&(F.suspect=!0,F.suspectReason=`radius ${F.radius}px is ${(F.radius/B).toFixed(1)}x the photo's median coin radius — probably not a coin`)}a.push(...A),r(`${I}: wonder names…`);const V=await b_(k,z=>r(`${I}: ${z}`)),j=[],Y=Date.now()+h_,se=V.wonders.length>0?await Sh():null;for(const z of V.wonders){let B=null;if(se!==null&&Date.now()<Y){r(`${I}: registering ${z.name}…`);try{const F=await kh(z.id);if(F!==null){const te=Ty(se,k,F,[[z.nameBox.x,z.nameBox.y],[z.nameBox.x+z.nameBox.width,z.nameBox.y],[z.nameBox.x+z.nameBox.width,z.nameBox.y+z.nameBox.height],[z.nameBox.x,z.nameBox.y+z.nameBox.height]]);if(te!==null){const Z=te.footprint.map(Ie=>Ie[0]),de=te.footprint.map(Ie=>Ie[1]),xe=Math.max(0,Math.round(Math.min(...Z))),fe=Math.max(0,Math.round(Math.min(...de)));B={built:te.built,boundingBox:{x:xe,y:fe,width:Math.min(k.width,Math.round(Math.max(...Z)))-xe,height:Math.min(k.height,Math.round(Math.max(...de)))-fe},tuckRegion:mh(te.footprint,te.overflow)}}}}catch(F){console.warn(`[wonders-reg] ${z.id} failed:`,F)}}if(B!==null){const F=B.tuckRegion??B.boundingBox;j.push({x0:F.x,y0:F.y,x1:F.x+F.width,y1:F.y+F.height})}else{const F=Math.max(8,z.nameBox.height),te=Math.round(z.nameBox.width*.15);j.push({x0:z.nameBox.x-te,y0:z.nameBox.y-F*2.5,x1:z.nameBox.x+z.nameBox.width+te,y1:z.nameBox.y+z.nameBox.height+F*2.5})}u.some(F=>F.id===z.id)||u.push({id:z.id,name:z.name,builtWithCardUnderneath:(B==null?void 0:B.built)??!0,boundingBox:(B==null?void 0:B.boundingBox)??{x:0,y:0,width:0,height:0},...B!=null&&B.tuckRegion?{tuckRegion:B.tuckRegion}:{},confidence:z.confidence})}if(V.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${I}: the wonder-name read ran out of its time budget on this device — ${V.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),se!==null&&V.wonders.length>0&&Date.now()<Y)try{const z=await Eh(),B=(z==null?void 0:z.catalog.filter(te=>te.kind==="wonder").map(te=>te.id))??[],F=new Map;for(const te of B)if(!u.some(Z=>Z.id===te)){const Z=await kh(te);Z!==null&&F.set(te,Z)}if(F.size>0){r(`${I}: searching occluded wonders…`);const te=Iy(se,k,F,Y);for(const Z of te){const de=Z.footprint.map(Ue=>Ue[0]),xe=Z.footprint.map(Ue=>Ue[1]),fe=Math.max(0,Math.round(Math.min(...de))),Ie=Math.max(0,Math.round(Math.min(...xe))),Se={x:fe,y:Ie,width:Math.min(k.width,Math.round(Math.max(...de)))-fe,height:Math.min(k.height,Math.round(Math.max(...xe)))-Ie};if(u.some(Ue=>{const Oe=Ue.boundingBox,Le=Math.max(0,Math.min(Oe.x+Oe.width,Se.x+Se.width)-Math.max(Oe.x,Se.x)),gt=Math.max(0,Math.min(Oe.y+Oe.height,Se.y+Se.height)-Math.max(Oe.y,Se.y)),Ft=Le*gt,it=Oe.width*Oe.height+Se.width*Se.height-Ft;return it>0&&Ft/it>Sy}))continue;const ae=z==null?void 0:z.catalog.find(Ue=>Ue.id===Z.id);u.push({id:Z.id,name:(ae==null?void 0:ae.nameFr)??(ae==null?void 0:ae.name)??Z.id,builtWithCardUnderneath:Z.built,boundingBox:Se,...Z.tuckRegion?{tuckRegion:Z.tuckRegion}:{},confidence:Math.round(Z.confidence*1e4)/1e4});const _e=Z.tuckRegion??Se;j.push({x0:_e.x,y0:_e.y,x1:_e.x+_e.width,y1:_e.y+_e.height})}}}catch(z){console.warn("[wonders-reg] discovery failed:",z)}const U=[];for(const z of M){const B=z.box[0]+z.box[2]/2,F=z.box[1]+z.box[3]/2;if(j.some(Z=>B>=Z.x0&&B<=Z.x1&&F>=Z.y0&&F<=Z.y1)){g+=1;continue}U.push(z),i[z.family]=(i[z.family]??0)+1,m+=1}for(const z of a0(U))c.push(z);const J=U.some(z=>z.family==="guild");if((J||V.wonders.length>0)&&Date.now()<Y)try{const z=se??(J?await Sh():null);if(z!==null){const B=await m_();if(B.size>0){r(`${I}: identifying guilds…`);for(const F of Ky(z,k,B,Y))d.some(te=>te.id===F.id)||d.push(F)}}}catch(z){console.warn("[guilds-reg] failed:",z)}r(`${I}: laurels…`);const G=await $_(),X=[];for(const z of[0,1,2,3]){const B=z===0?k:Jn(k,z),F=await Vt("laurel",B);for(const[te,Z,de,xe]of Xp(F.rows,F.params,ht.laurel.conf)){const fe=Ch({x:te,y:Z,width:de-te,height:xe-Z},z,k.width,k.height),Ie=fe.x+fe.width/2,Se=fe.y+fe.height/2,ye=.6*Math.max(fe.width,fe.height);X.some(([_e,Ue,Oe,Le])=>{const gt=(_e+Oe)/2,Ft=(Ue+Le)/2;return(Ie-gt)**2+(Se-Ft)**2<ye*ye})||X.push([fe.x,fe.y,fe.x+fe.width,fe.y+fe.height])}}for(const[z,B,F,te]of X){const Z=Math.trunc((z+F)/2),de=Math.trunc((B+te)/2);if([...N,...q].some(_e=>(Z-_e.cx)**2+(de-_e.cy)**2<=_e.r*_e.r))continue;const fe=Math.max(6,Math.trunc(Math.max(F-z,te-B)*I0)),Ie=v_(k,Z,de,fe);let Se=null,ye=0;for(const _e of[0,1,2,3]){const Ue=_e===0?Ie:Jn(Ie,_e),[Oe,Le]=P0(Ue,G);Oe!==null&&Le>ye&&(Se=Oe,ye=Le)}Se!==null&&ye<p_&&(Se=null);const ae=j.some(_e=>Z>=_e.x0&&Z<=_e.x1&&de>=_e.y0&&de<=_e.y1);s.push({value:Se,valueRead:Se!==null,center:[Math.round((z+F)/2),Math.round((B+te)/2)],boundingBox:{x:Math.trunc(z),y:Math.trunc(B),width:Math.trunc(F-z),height:Math.trunc(te-B)},confidence:Math.round(ye*1e4)/1e4,excluded:ae,photoIndex:_-1})}}g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):m>0&&u.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const v=i.guild??0;v!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${v} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(T=>T.id).join(", ")+" — confirm in the review."});const $=u.filter(T=>T.boundingBox.width===0);$.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${$.map(T=>T.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${u.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),f>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${f} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(T=>T.id).join(", ")+" — confirm in the review."}),a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${p} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const b=s.filter(T=>T.valueRead);return{...M_(),wonders:u,guilds:d,progressTokens:o,laurels:s,cardVictoryPoints:{value:b.reduce((T,I)=>T+(I.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-b.length,complete:s.length===b.length},cardCounts:{byFamily:i,source:m>0?"yolo":"none",tuckedExcluded:g,...c.length>0?{suspects:c}:{}},coins:{total:p,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function A_(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null};for(const i of["left","right"]){const s=e[i];s.length>0&&(r[i]=await z_(s,i,n,t))}return e.hasBoard&&n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:r,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=n==="classify"?await C_(e.data.file):await A_(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
