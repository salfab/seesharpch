var pb=Object.defineProperty;var hb=(st,ot,Ht)=>ot in st?pb(st,ot,{enumerable:!0,configurable:!0,writable:!0,value:Ht}):st[ot]=Ht;var _m=(st,ot,Ht)=>hb(st,typeof ot!="symbol"?ot+"":ot,Ht);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var st=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyNames,$m=Object.prototype.hasOwnProperty,vm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),j=(e,t)=>()=>(e&&(t=e(e=0)),t),jt=(e,t)=>{for(var n in t)st(e,n,{get:t[n],enumerable:!0})},xm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ht(t))!$m.call(e,i)&&i!==n&&st(e,i,{get:()=>t[i],enumerable:!(r=ot(t,i))||r.enumerable});return e},rn=e=>xm(st({},"__esModule",{value:!0}),e),an,gt,Kt,Ca,za,Ma=j(()=>{an=new Map,gt=[],Kt=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=an.get(e);if(r===void 0)an.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=gt.indexOf(e);i!==-1&&gt.splice(i,1);for(let s=0;s<gt.length;s++)if(an.get(gt[s]).priority<=n){gt.splice(s,0,e);return}gt.push(e)}return}throw new TypeError("not a valid backend")},Ca=async e=>{let t=an.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},za=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?gt:n,i,s=[],a=new Set;for(let u of r){let d=await Ca(u);typeof d=="string"?s.push({name:u,err:d}):(i||(i=d),i===d&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of s)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),Sm=j(()=>{Ma()}),Aa,Tm=j(()=>{Aa="1.27.0"}),fr,Oe,Ra=j(()=>{Tm(),fr="warning",Oe={wasm:{},webgl:{},webgpu:{},versions:{common:Aa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);fr=e}},get logLevel(){return fr}},Object.defineProperty(Oe,"logLevel",{enumerable:!0})}),Se,Im=j(()=>{Ra(),Se=Oe}),Oa,Ba,km=j(()=>{Oa=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let h=s*i,p=0,f=h,m=h*2,y=-1;a==="RGBA"?(p=0,f=h,m=h*2,y=h*3):a==="RGB"?(p=0,f=h,m=h*2):a==="RBG"&&(p=0,m=h,f=h*2);for(let w=0;w<s;w++)for(let v=0;v<i;v++){let $=(e.data[p++]-d[0])*u[0],b=(e.data[f++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],T=y===-1?255:(e.data[y++]-d[3])*u[3];r.fillStyle="rgba("+$+","+b+","+I+","+T+")",r.fillRect(v,w,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ba=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,h;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,y=1,w=2,v=3,$=0,b=p,I=p*2,T=-1;o==="RGBA"?($=0,b=p,I=p*2,T=p*3):o==="RGB"?($=0,b=p,I=p*2):o==="RBG"&&($=0,I=p,b=p*2),r=n.createImageData(i,s);for(let k=0;k<s*i;m+=f,y+=f,w+=f,v+=f,k++)r.data[m]=(e.data[$++]-h[0])*d[0],r.data[y]=(e.data[b++]-h[1])*d[1],r.data[w]=(e.data[I++]-h[2])*d[2],r.data[v]=T===-1?255:(e.data[T++]-h[3])*d[3]}else throw new Error("Can not access image data");return r}}),En,Na,Da,Ua,Pa,La,Em=j(()=>{gr(),En=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,h=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,f=0,m=1,y=2,w=3,v=0,$=d,b=d*2,I=-1;o==="RGB"&&(p=3,f=0,m=1,y=2,w=-1),u==="RGBA"?I=d*3:u==="RBG"?(v=0,b=d,$=d*2):u==="BGR"&&(b=0,$=d,v=d*2);for(let T=0;T<d;T++,f+=p,y+=p,m+=p,w+=p)h[v++]=(e[f]+a[0])/s[0],h[$++]=(e[m]+a[1])/s[1],h[b++]=(e[y]+a[2])/s[2],I!==-1&&w!==-1&&(h[I++]=(e[w]+a[3])/s[3]);return u==="RGBA"?new Pe("float32",h,[1,4,n,r]):new Pe("float32",h,[1,3,n,r])},Na=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=u();h.width=e.width,h.height=e.height;let p=d(h);if(p!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;p.drawImage(e,0,0),a=p.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let h,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,p=t.resizedWidth):(h=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=p,t!==void 0){let f=u();f.width=p,f.height=h;let m=d(f);if(m!=null)m.putImageData(e,0,0),a=m.getImageData(0,0,p,h).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let p=d(h);if(p!=null){let f=e.height,m=e.width;return p.drawImage(e,0,0,m,f),a=p.getImageData(0,0,m,f).data,o.height=f,o.width=m,En(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,p)=>{let f=u(),m=d(f);if(!e||!m)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,m.drawImage(y,0,0,f.width,f.height);let w=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,h(En(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return En(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Da=(e,t)=>{let{width:n,height:r,download:i,dispose:s}=t,a=[1,r,n,4];return new Pe({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},Ua=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new Pe({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:s})},Pa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:s}=t;return new Pe({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:s})},La=(e,t,n)=>new Pe({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),kt,sn,mr,qa,Cm=j(()=>{kt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),sn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),mr=!1,qa=()=>{if(!mr){mr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(kt.set("int64",BigInt64Array),sn.set(BigInt64Array,"int64")),t&&(kt.set("uint64",BigUint64Array),sn.set(BigUint64Array,"uint64")),r?(kt.set("float16",n),sn.set(n,"float16")):kt.set("float16",Uint16Array)}}}),Wa,Ga,zm=j(()=>{gr(),Wa=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Ga=(e,t)=>{switch(e.location){case"cpu":return new Pe(e.type,e.data,t);case"cpu-pinned":return new Pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Pe,gr=j(()=>{km(),Em(),Cm(),zm(),Pe=class{constructor(e,t,n){qa();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=kt.get(r);if(!a)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=kt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",a=e;else if(u==="boolean")r="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",a=Uint8Array.from(e);else{let u=sn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=Wa(i);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=s}static async fromImage(e,t){return Na(e,t)}static fromTexture(e,t){return Da(e,t)}static fromGpuBuffer(e,t){return Ua(e,t)}static fromMLTensor(e,t){return Pa(e,t)}static fromPinnedBuffer(e,t,n){return La(e,t,n)}toDataURL(e){return Oa(this,e)}toImageData(e){return Ba(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ga(this,e)}}}),Le,Va=j(()=>{gr(),Le=Pe}),Cn,yr,tt,He,Et,Ct,Fa=j(()=>{Ra(),Cn=(e,t)=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||console.timeStamp(`${e}::ORT::${t}`)},yr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let s=0;s<n.length;s++){if(r&&!n[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${n[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Cn("CPU",a);return}n[s].includes("TRACE_FUNC")&&(r=!0)}},tt=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||yr("BEGIN",e)},He=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||yr("END",e)},Et=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||console.time(`ORT::${e}`)},Ct=e=>{(typeof Oe.trace>"u"?!Oe.wasm.trace:!Oe.trace)||console.timeEnd(`ORT::${e}`)}}),Ha,Mm=j(()=>{Ma(),Va(),Fa(),Ha=class wm{constructor(t){this.handler=t}async run(t,n,r){tt(),Et("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Le||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Le)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(n);for(let p of this.outputNames)if(h.indexOf(p)!==-1){let f=n[p];(f===null||f instanceof Le)&&(d=!0,a=!1,i[p]=f)}if(d){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let h=o[d];h instanceof Le?u[d]=h:u[d]=new Le(h.type,h.data,h.dims)}return Ct("InferenceSession.run"),He(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){tt(),Et("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,p=0,f=t.byteLength;if(typeof n=="object"&&n!==null)a=n;else if(typeof n=="number"){if(p=n,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(f=t.byteLength-p,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||p+f>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,p,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await za(a),d=await o.createInferenceSessionHandler(s,u);return Ct("InferenceSession.create"),He(),new wm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),on,Am=j(()=>{Mm(),on=Ha}),Rm=j(()=>{}),Om=j(()=>{}),Bm=j(()=>{}),Nm=j(()=>{}),Dm={};jt(Dm,{InferenceSession:()=>on,TRACE:()=>Cn,TRACE_EVENT_BEGIN:()=>Et,TRACE_EVENT_END:()=>Ct,TRACE_FUNC_BEGIN:()=>tt,TRACE_FUNC_END:()=>He,Tensor:()=>Le,env:()=>Se,registerBackend:()=>Kt});var Ve=j(()=>{Sm(),Im(),Am(),Va(),Rm(),Om(),Fa(),Bm(),Nm()}),_r=j(()=>{}),ja={};jt(ja,{default:()=>Ka});var wr,br,Ka,Um=j(()=>{var e;Cp(),zt(),Ir(),wr="ort-wasm-proxy-worker",br=((e=globalThis.self)==null?void 0:e.name)===wr,br&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Cr(r.wasm).then(()=>{Li(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:s}=r;qi(s,i).then(()=>{postMessage({type:n})},a=>{postMessage({type:n,err:a})});break}case"copy-from":{let{buffer:i}=r,s=Kn(i);postMessage({type:n,out:s});break}case"create":{let{model:i,options:s}=r;Gi(i,s).then(a=>{postMessage({type:n,out:a})},a=>{postMessage({type:n,err:a})});break}case"release":Vi(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:o,options:u}=r;Hi(i,s,a,o,new Array(o.length).fill(null),u).then(d=>{d.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},Ki([...a,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":ji(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),Ka=br?null:t=>new Worker(t??qe,{type:"module",name:wr})}),Xa={};jt(Xa,{default:()=>Za});async function Ya(e={}){var gm,ym;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((gm=self.name)==null?void 0:gm.startsWith("em-pthread"));t.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=l=>async(...c)=>{var _;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:c[0],errors:[]},S=await l(...c);if(t.Yc!==g)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let E=g.errors;if(0<E.length){let R=await Promise.all(E);if(R=R.filter(P=>P),0<R.length)throw Error(R.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(l,c)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let _=t.dd;t.jsepRegisterBuffer=(g,S,E,R)=>_.registerBuffer(g,S,E,R),t.jsepGetBuffer=g=>_.getBuffer(g),t.jsepCreateDownloader=(g,S,E)=>_.createDownloader(g,S,E),t.jsepOnCreateSession=g=>{_.onCreateSession(g)},t.jsepOnReleaseSession=g=>{_.onReleaseSession(g)},t.jsepOnRunStart=g=>_.onRunStart(g),t.Id=(g,S)=>{_.upload(g,S)}}else if(l==="webnn"){let _=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>_.onRunStart(g),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=g=>{_.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,S)=>_.createMLTensorDownloader(g,S),t.webnnRegisterMLTensor=(g,S,E,R)=>_.registerMLTensor(g,S,E,R),t.webnnCreateMLContext=g=>_.createMLContext(g),t.webnnRegisterMLConstant=(g,S,E,R,P,Y)=>_.registerMLConstant(g,S,E,R,P,t.Xc,Y),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let l=c=>(..._)=>{let g=it;return _=c(..._),it!=g?new Promise((S,E)=>{ga={resolve:S,reject:E}}):_};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=l(t[c])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,u,d=(l,c)=>{throw c},h=self.location.href,p="";if(n||r){try{p=new URL(".",h).href}catch{}r&&(u=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async l=>{if(C(l))return new Promise((_,g)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?_(S.response):g(S.status)},S.onerror=g,S.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var f,m,y,w,v,$,b=console.log.bind(console),I=console.error.bind(console),T=b,k=I,z=!1,C=l=>l.startsWith("file://");function x(){xt.buffer!=N.buffer&&L()}if(i){let l=function(c){try{var _=c.data,g=_.Sc;if(g==="load"){let S=[];self.onmessage=E=>S.push(E),$=()=>{postMessage({Sc:"loaded"});for(let E of S)l(E);self.onmessage=l};for(let E of _.xd)t[E]&&!t[E].proxy||(t[E]=(...R)=>{postMessage({Sc:"callHandler",wd:E,args:R})},E=="print"&&(T=t[E]),E=="printErr"&&(k=t[E]));xt=_.Od,L(),m=_.Pd,pe(),pr()}else if(g==="run"){(function(S){var E=(x(),F)[S+52>>>2>>>0];S=(x(),F)[S+56>>>2>>>0],If(E,E-S),he(E)})(_.Rc),$a(_.Rc,0,0,1,0,0),Ih(),ha(_.Rc),O||(bf(),O=!0);try{i_(_.Md,_.bd)}catch(S){if(S!="unwind")throw S}}else _.target!=="setimmediate"&&(g==="checkMailbox"?O&&ar():g&&(k(`worker: received unknown command ${g}`),k(_)))}catch(S){throw $f(),S}};var O=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}var N,H,G,V,A,F,K,X,oe,D,Z,M=!1;function L(){var l=xt.buffer;t.HEAP8=N=new Int8Array(l),G=new Int16Array(l),t.HEAPU8=H=new Uint8Array(l),V=new Uint16Array(l),t.HEAP32=A=new Int32Array(l),t.HEAPU32=F=new Uint32Array(l),K=new Float32Array(l),X=new Float64Array(l),oe=new BigInt64Array(l),D=new BigUint64Array(l)}function W(){M=!0,i?$():mt.sb()}function U(l){throw k(l="Aborted("+l+")"),z=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),v==null||v(l),l}function Q(){return{a:{ma:kw,gb:Iw,g:a_,J:s_,f:o_,o:u_,h:l_,ha:d_,b:c_,T:p_,Ha:Ah,n:h_,$:Nh,Xa:Dh,Da:Uh,Fa:Ph,Ya:Lh,Va:qh,Oa:Wh,Ua:Gh,ka:Vh,Ea:Fh,Ba:Hh,Wa:jh,Ca:Kh,bb:f_,ea:m_,wa:g_,ua:__,da:b_,O:$_,H:v_,va:x_,_:z_,xa:M_,Ra:A_,za:O_,Ia:B_,sa:N_,fa:D_,Qa:ha,_a:U_,R:W_,r:j_,c:ca,hb:K_,y:X_,M:Y_,D:Z_,l:Q_,s:nf,ib:J_,I:ew,S:tw,j:nw,u:rw,q:iw,k:aw,La:sw,Ma:ow,Na:uw,Ja:of,Ka:uf,ta:lf,db:dw,ab:pw,v:hw,aa:fw,ga:mw,$a:cw,W:gw,Za:yw,Aa:_w,F:lw,U:ww,la:dr,ya:$w,fb:bw,eb:vw,Sa:hf,Ta:ff,Ga:ht,V:mf,ja:gf,Pa:yf,ia:_f,kb:lb,na:ib,lb:ub,oa:rb,G:Kw,e:Mw,t:Cw,w:Ew,B:qw,mb:eb,K:Fw,x:Ow,pa:tb,Y:ab,ba:Jw,nb:Qw,ob:Zw,P:Ww,qa:Yw,pb:Xw,N:Hw,Z:nb,d:zw,A:Rw,m:Aw,jb:db,p:Nw,z:Dw,C:Bw,E:Uw,L:Gw,qb:jw,Q:sb,ca:Vw,X:ob,rb:Lw,ra:Pw,i:Sw,a:xt,cb:Ie}}}async function pe(){function l(g,S){var E=mt=g.exports;g={};for(let[R,P]of Object.entries(E))typeof P=="function"?(E=P_(P),g[R]=E):g[R]=P;return mt=g,mt=(function(){var R=mt,P=J=>ce=>J(ce)>>>0,Y=J=>()=>J()>>>0;return(R=Object.assign({},R)).tb=P(R.tb),R.Xb=Y(R.Xb),R.Zb=P(R.Zb),R.lc=P(R.lc),R.mc=Y(R.mc),R.qc=P(R.qc),R})(),Sh.push(mt._b),wf=(g=mt).tb,bf=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,cr=g.Xb,at=t._free=g.Yb,Tn=t._malloc=g.Zb,$a=g.ac,$f=g.bc,vf=g.cc,xf=g.dc,va=g.ec,Sf=g.fc,Tf=g.gc,me=g.hc,In=g.ic,If=g.jc,he=g.kc,xa=g.lc,fe=g.mc,kf=g.nc,Sa=g.oc,Ef=g.pc,Cf=g.qc,zf=g.rc,Ta=g.sc,Mf=g.tc,Af=g.uc,Rf=g.vc,Of=g.wc,Bf=g.xc,Nf=g.yc,Df=g.zc,Uf=g.Ac,Pf=g.Bc,Lf=g.Cc,qf=g.Dc,Wf=g.Ec,Gf=g.Fc,Vf=g.Gc,Ff=g.Hc,Hf=g.Ic,jf=g.Jc,Kf=g.Kc,Xf=g.Lc,Yf=g.Mc,Zf=g.Nc,Qf=g.Pc,Jf=g.Qc,em=g.$c,tm=g.ad,nm=g.fd,rm=g.jd,im=g.kd,am=g.ld,sm=g.md,om=g.nd,um=g.od,lm=g.pd,dm=g.qd,cm=g.vd,pm=g.Td,hm=g.Ud,fm=g.Vd,mm=g.Wd,m=S,mt}var c,_=Q();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(_,(S,E)=>{g(l(S,E))})}):i?l(new WebAssembly.Instance(m,Q()),m):(Z??(Z=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),c=await(async function(g){var S=Z;if(!f&&!C(S))try{var E=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,g)}catch(R){k(`wasm streaming compile failed: ${R}`),k("falling back to ArrayBuffer instantiation")}return(async function(R,P){try{var Y=await(async function(J){if(!f)try{var ce=await o(J);return new Uint8Array(ce)}catch{}if(J==Z&&f)J=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";J=u(J)}return J})(R);return await WebAssembly.instantiate(Y,P)}catch(J){k(`failed to asynchronously prepare wasm: ${J}`),U(J)}})(S,g)})(_),l(c.instance,c.module))}class ie{constructor(c){_m(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var se=l=>{l.terminate(),l.onmessage=()=>{}},$e=[],ye=0,Ee=null,Me=l=>{Ge.length==0&&(Eh(),kh(Ge[0]));var c=Ge.pop();if(!c)return 6;vt.push(c),Gt[l.Rc]=c,c.Rc=l.Rc;var _={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return c.postMessage(_,l.rd),0},ue=0,re=(l,c,..._)=>{var g,S=16*_.length,E=fe(),R=xa(S),P=R>>>3;for(g of _)typeof g=="bigint"?((x(),oe)[P++>>>0]=1n,(x(),oe)[P++>>>0]=g):((x(),oe)[P++>>>0]=0n,(x(),X)[P++>>>0]=g);return l=vf(l,0,S,R,c),he(E),l};function Ie(l){if(i)return re(0,1,l);if(y=l,!(0<ue)){for(var c of vt)se(c);for(c of Ge)se(c);Ge=[],vt=[],Gt={},z=!0}d(0,new ie(l))}function Je(l){if(i)return re(1,0,l);ht(l)}var ht=l=>{if(y=l,i)throw Je(l),"unwind";Ie(l)},Ge=[],vt=[],Sh=[],Gt={},Th=l=>{var c=l.Rc;delete Gt[c],Ge.push(l),vt.splice(vt.indexOf(l),1),l.Rc=0,xf(c)};function Ih(){Sh.forEach(l=>l())}var kh=l=>new Promise(c=>{l.onmessage=S=>{var E=S.data;if(S=E.Sc,E.Zc&&E.Zc!=cr()){var R=Gt[E.Zc];R?R.postMessage(E,E.rd):k(`Internal error! Worker sent a message "${S}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?ar():S==="spawnThread"?Me(E):S==="cleanupThread"?ir(()=>{Th(Gt[E.Nd])}):S==="loaded"?(l.loaded=!0,c(l)):E.target==="setimmediate"?l.postMessage(E):S==="uncaughtException"?l.onerror(E.error):S==="callHandler"?t[E.wd](...E.args):S&&k(`worker sent an unknown command ${S}`)},l.onerror=S=>{throw k(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var _,g=[];for(_ of[])t.propertyIsEnumerable(_)&&g.push(_);l.postMessage({Sc:"load",xd:g,Od:xt,Pd:m})});function Eh(){var l=new Worker((()=>{let c=URL;return self.location.href>"file:"&&self.location.href<"file;"?new c("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ge.push(l)}var xt,i_=(l,c)=>{ue=0,l=Ta(l,c),0<ue?y=l:va(l)},tr=[],nr=0;function a_(l){var c=new oa(l>>>=0);return(x(),N)[c.Tc+12>>>0]==0&&(Ch(c,!0),nr--),zh(c,!1),tr.push(c),Cf(l)}var tn=0,s_=()=>{me(0,0);var l=tr.pop();kf(l.cd),tn=0};function Ch(l,c){c=c?1:0,(x(),N)[l.Tc+12>>>0]=c}function zh(l,c){c=c?1:0,(x(),N)[l.Tc+13>>>0]=c}class oa{constructor(c){this.cd=c,this.Tc=c-24}}var ua=l=>{var c=tn;if(!c)return In(0),0;var _=new oa(c);(x(),F)[_.Tc+16>>>2>>>0]=c;var g=(x(),F)[_.Tc+4>>>2>>>0];if(!g)return In(0),c;for(var S of l){if(S===0||S===g)break;if(Ef(S,g,_.Tc+16))return In(S),c}return In(g),c};function o_(){return ua([])}function u_(l){return ua([l>>>0])}function l_(l,c,_,g){return ua([l>>>0,c>>>0,_>>>0,g>>>0])}var d_=()=>{var l=tr.pop();l||U("no exception to throw");var c=l.cd;throw(x(),N)[l.Tc+13>>>0]==0&&(tr.push(l),zh(l,!0),Ch(l,!1),nr++),Sa(c),tn=c};function c_(l,c,_){var g=new oa(l>>>=0);throw c>>>=0,_>>>=0,(x(),F)[g.Tc+16>>>2>>>0]=0,(x(),F)[g.Tc+4>>>2>>>0]=c,(x(),F)[g.Tc+8>>>2>>>0]=_,Sa(l),nr++,tn=l}var p_=()=>nr;function Mh(l,c,_,g){return i?re(2,1,l,c,_,g):Ah(l,c,_,g)}function Ah(l,c,_,g){if(l>>>=0,c>>>=0,_>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return i&&S.length===0?Mh(l,c,_,g):(l={Ld:_,Rc:l,bd:g,rd:S},i?(l.Sc="spawnThread",postMessage(l,S),0):Me(l))}function h_(l){throw tn||(tn=l>>>0),tn}var Rh=globalThis.TextDecoder&&new TextDecoder,Oh=(l,c,_,g)=>{if(_=c+_,g)return _;for(;l[c]&&!(c>=_);)++c;return c},Bh=(l,c=0,_,g)=>{if(16<(_=Oh(l,c>>>=0,_,g))-c&&l.buffer&&Rh)return Rh.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,_):l.slice(c,_));for(g="";c<_;){var S=l[c++];if(128&S){var E=63&l[c++];if((224&S)==192)g+=String.fromCharCode((31&S)<<6|E);else{var R=63&l[c++];65536>(S=(240&S)==224?(15&S)<<12|E<<6|R:(7&S)<<18|E<<12|R<<6|63&l[c++])?g+=String.fromCharCode(S):(S-=65536,g+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else g+=String.fromCharCode(S)}return g},Ae=(l,c,_)=>(l>>>=0)?Bh((x(),H),l,c,_):"";function Nh(l,c,_){return i?re(3,1,l,c,_):0}function Dh(l,c){if(i)return re(4,1,l,c)}function Uh(l,c){if(i)return re(5,1,l,c)}function Ph(l,c,_){if(i)return re(6,1,l,c,_)}function Lh(l,c,_){return i?re(7,1,l,c,_):0}function qh(l,c){if(i)return re(8,1,l,c)}function Wh(l,c,_){if(i)return re(9,1,l,c,_)}function Gh(l,c,_,g){if(i)return re(10,1,l,c,_,g)}function Vh(l,c,_,g){if(i)return re(11,1,l,c,_,g)}function Fh(l,c,_,g){if(i)return re(12,1,l,c,_,g)}function Hh(l){if(i)return re(13,1,l)}function jh(l,c){if(i)return re(14,1,l,c)}function Kh(l,c,_){if(i)return re(15,1,l,c,_)}var f_=()=>U(""),rt=l=>{l>>>=0;for(var c="";;){var _=(x(),H)[l++>>>0];if(!_)return c;c+=String.fromCharCode(_)}},la={},da={},nn=class extends Error{constructor(l){super(l),this.name="BindingError"}};function ft(l,c,_={}){return(function(g,S,E={}){var R=S.name;if(!g)throw new nn(`type "${R}" must have a positive integer typeid pointer`);if(da.hasOwnProperty(g)){if(E.yd)return;throw new nn(`Cannot register type '${R}' twice`)}da[g]=S,la.hasOwnProperty(g)&&(S=la[g],delete la[g],S.forEach(P=>P()))})(l,c,_)}var Xh=(l,c,_)=>{switch(c){case 1:return _?g=>(x(),N)[g>>>0]:g=>(x(),H)[g>>>0];case 2:return _?g=>(x(),G)[g>>>1>>>0]:g=>(x(),V)[g>>>1>>>0];case 4:return _?g=>(x(),A)[g>>>2>>>0]:g=>(x(),F)[g>>>2>>>0];case 8:return _?g=>(x(),oe)[g>>>3>>>0]:g=>(x(),D)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function m_(l,c,_,g,S){l>>>=0,_>>>=0,c=rt(c>>>0);let E=R=>R;if(g=g===0n){let R=8*_;E=P=>BigInt.asUintN(R,P),S=E(S)}ft(l,{name:c,Oc:E,Vc:(R,P)=>(typeof P=="number"&&(P=BigInt(P)),P),Uc:Xh(c,_,!g),Wc:null})}function g_(l,c,_,g){ft(l>>>=0,{name:c=rt(c>>>0),Oc:function(S){return!!S},Vc:function(S,E){return E?_:g},Uc:function(S){return this.Oc((x(),H)[S>>>0])},Wc:null})}var Yh=[],Vt=[0,1,,1,null,1,!0,1,!1,1];function ca(l){9<(l>>>=0)&&--Vt[l+1]===0&&(Vt[l]=void 0,Yh.push(l))}var Fe=l=>{if(!l)throw new nn(`Cannot use deleted val. handle = ${l}`);return Vt[l]},et=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Yh.pop()||Vt.length;return Vt[c]=l,Vt[c+1]=1,c}};function pa(l){return this.Oc((x(),F)[l>>>2>>>0])}var y_={name:"emscripten::val",Oc:l=>{var c=Fe(l);return ca(l),c},Vc:(l,c)=>et(c),Uc:pa,Wc:null};function __(l){return ft(l>>>0,y_)}var w_=(l,c)=>{switch(c){case 4:return function(_){return this.Oc((x(),K)[_>>>2>>>0])};case 8:return function(_){return this.Oc((x(),X)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function b_(l,c,_){_>>>=0,ft(l>>>=0,{name:c=rt(c>>>0),Oc:g=>g,Vc:(g,S)=>S,Uc:w_(c,_),Wc:null})}function $_(l,c,_,g,S){l>>>=0,_>>>=0,c=rt(c>>>0);let E=P=>P;if(g===0){var R=32-8*_;E=P=>P<<R>>>R,S=E(S)}ft(l,{name:c,Oc:E,Vc:(P,Y)=>Y,Uc:Xh(c,_,g!==0),Wc:null})}function v_(l,c,_){function g(E){var R=(x(),F)[E>>>2>>>0];return E=(x(),F)[E+4>>>2>>>0],new S((x(),N).buffer,E,R)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];ft(l>>>=0,{name:_=rt(_>>>0),Oc:g,Uc:g},{yd:!0})}var St=(l,c,_)=>{var g=(x(),H);if(c>>>=0,0<_){var S=c;_=c+_-1;for(var E=0;E<l.length;++E){var R=l.codePointAt(E);if(127>=R){if(c>=_)break;g[c++>>>0]=R}else if(2047>=R){if(c+1>=_)break;g[c++>>>0]=192|R>>6,g[c++>>>0]=128|63&R}else if(65535>=R){if(c+2>=_)break;g[c++>>>0]=224|R>>12,g[c++>>>0]=128|R>>6&63,g[c++>>>0]=128|63&R}else{if(c+3>=_)break;g[c++>>>0]=240|R>>18,g[c++>>>0]=128|R>>12&63,g[c++>>>0]=128|R>>6&63,g[c++>>>0]=128|63&R,E++}}g[c>>>0]=0,l=c-S}else l=0;return l},rr=l=>{for(var c=0,_=0;_<l.length;++_){var g=l.charCodeAt(_);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++_):c+=3}return c};function x_(l,c){ft(l>>>=0,{name:c=rt(c>>>0),Oc(_){var g=(x(),F)[_>>>2>>>0];return g=Ae(_+4,g,!0),at(_),g},Vc(_,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var S=typeof g=="string";if(!(S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new nn("Cannot pass non-string to std::string");var E=S?rr(g):g.length,R=Tn(4+E+1),P=R+4;return(x(),F)[R>>>2>>>0]=E,S?St(g,P,E+1):(x(),H).set(g,P>>>0),_!==null&&_.push(at,R),R},Uc:pa,Wc(_){at(_)}})}var Zh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,S_=(l,c,_)=>{if(l>>>=1,16<(c=Oh((x(),V),l,c/2,_))-l&&Zh)return Zh.decode((x(),V).slice(l,c));for(_="";l<c;++l){var g=(x(),V)[l>>>0];_+=String.fromCharCode(g)}return _},T_=(l,c,_)=>{if(_??(_=2147483647),2>_)return 0;var g=c;_=(_-=2)<2*l.length?_/2:l.length;for(var S=0;S<_;++S){var E=l.charCodeAt(S);(x(),G)[c>>>1>>>0]=E,c+=2}return(x(),G)[c>>>1>>>0]=0,c-g},I_=l=>2*l.length,k_=(l,c,_)=>{var g="";l>>>=2;for(var S=0;!(S>=c/4);S++){var E=(x(),F)[l+S>>>0];if(!E&&!_)break;g+=String.fromCodePoint(E)}return g},E_=(l,c,_)=>{if(c>>>=0,_??(_=2147483647),4>_)return 0;var g=c;_=g+_-4;for(var S=0;S<l.length;++S){var E=l.codePointAt(S);if(65535<E&&S++,(x(),A)[c>>>2>>>0]=E,(c+=4)+4>_)break}return(x(),A)[c>>>2>>>0]=0,c-g},C_=l=>{for(var c=0,_=0;_<l.length;++_)65535<l.codePointAt(_)&&_++,c+=4;return c};function z_(l,c,_){if(l>>>=0,c>>>=0,_=rt(_>>>=0),c===2)var g=S_,S=T_,E=I_;else g=k_,S=E_,E=C_;ft(l,{name:_,Oc:R=>{var P=(x(),F)[R>>>2>>>0];return P=g(R+4,P*c,!0),at(R),P},Vc:(R,P)=>{if(typeof P!="string")throw new nn(`Cannot pass non-string to C++ string type ${_}`);var Y=E(P),J=Tn(4+Y+c);return(x(),F)[J>>>2>>>0]=Y/c,S(P,J+4,Y+c),R!==null&&R.push(at,J),J},Uc:pa,Wc(R){at(R)}})}function M_(l,c){ft(l>>>=0,{zd:!0,name:c=rt(c>>>0),Oc:()=>{},Vc:()=>{}})}function A_(l){$a(l>>>0,!r,1,!n,131072,!1),Ih()}var ir=l=>{if(!z)try{if(l(),!(0<ue))try{i?cr()&&va(y):ht(y)}catch(c){c instanceof ie||c=="unwind"||d(0,c)}}catch(c){c instanceof ie||c=="unwind"||d(0,c)}},R_=!Atomics.waitAsync||((ym=globalThis.navigator)==null?void 0:ym.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ha(l){l>>>=0,R_||(Atomics.waitAsync((x(),A),l>>>2,l).value.then(ar),l+=128,Atomics.store((x(),A),l>>>2,1))}var ar=()=>ir(()=>{var l=cr();l&&(ha(l),Tf())});function O_(l,c){(l>>>=0)==c>>>0?setTimeout(ar):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=Gt[l])&&l.postMessage({Sc:"checkMailbox"})}var fa=[];function B_(l,c,_,g,S){for(c>>>=0,S>>>=0,fa.length=0,_=S>>>3,g=S+g>>>3;_<g;){var E;E=(x(),oe)[_++>>>0]?(x(),oe)[_++>>>0]:(x(),X)[_++>>>0],fa.push(E)}return(c?Ia[c]:Tw[l])(...fa)}var N_=()=>{ue=0};function D_(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):Th(Gt[l])}function U_(l){}var sr=l=>{try{l()}catch(c){U(c)}};function P_(l){var c=(..._)=>{or.push(l);try{return l(..._)}finally{z||(or.pop(),it&&Tt===1&&or.length===0&&(Tt=0,ue+=1,sr(hm),typeof Fibers<"u"&&Fibers.Zd()))}};return ef.set(l,c),c}var Tt=0,it=null,Qh=0,or=[],ma=new Map,Jh=new Map,ef=new Map,L_=0,ga=null,q_=[],tf=l=>(function(c){if(!z){if(Tt===0){var _=!1,g=!1;c((S=0)=>{if(!z&&(Qh=S,_=!0,g)){Tt=2,sr(()=>fm(it)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var E=(function(){var Y=(x(),A)[it+8>>>2>>>0];return Y=Jh.get(Y),Y=ef.get(Y),--ue,Y()})()}catch(Y){E=Y,S=!0}var R=!1;if(!it){var P=ga;P&&(ga=null,(S?P.reject:P.resolve)(E),R=!0)}if(S&&!R)throw E}}),g=!0,_||(Tt=1,it=(function(){var S=Tn(65548),E=S+12;if((x(),F)[S>>>2>>>0]=E,(x(),F)[S+4>>>2>>>0]=E+65536,E=or[0],!ma.has(E)){var R=L_++;ma.set(E,R),Jh.set(R,E)}return E=ma.get(E),(x(),A)[S+8>>>2>>>0]=E,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),sr(()=>pm(it)))}else Tt===2?(Tt=0,sr(mm),at(it),it=null,q_.forEach(ir)):U(`invalid state: ${Tt}`);return Qh}})(c=>{l().then(c)});function W_(l){return l>>>=0,tf(async()=>{var c=await Fe(l);return et(c)})}var ya=[],G_=l=>{var c=ya.length;return ya.push(l),c},V_=(l,c)=>{for(var _=Array(l),g=0;g<l;++g){var S=g,E=(x(),F)[c+4*g>>>2>>>0],R=da[E];if(R===void 0)throw l=`parameter ${g}`,E=wf(E),c=rt(E),at(E),new nn(`${l} has unknown type ${c}`);_[S]=R}return _},F_=(l,c,_)=>{var g=[];return l=l(g,_),g.length&&((x(),F)[c>>>2>>>0]=et(g)),l},H_={},ur=l=>{var c=H_[l];return c===void 0?rt(l):c};function j_(l,c,_){var[g,...S]=V_(l,c>>>0);c=g.Vc.bind(g);var E=S.map(Y=>Y.Uc.bind(Y));l--;var R={toValue:Fe};switch(l=E.map((Y,J)=>{var ce=`argFromPtr${J}`;return R[ce]=Y,`${ce}(args${J?"+"+8*J:""})`}),_){case 0:var P="toValue(handle)";break;case 2:P="new (toValue(handle))";break;case 3:P="";break;case 1:R.getStringOrSymbol=ur,P="toValue(handle)[getStringOrSymbol(methodName)]"}return P+=`(${l})`,g.zd||(R.toReturnWire=c,R.emval_returnValue=F_,P=`return emval_returnValue(toReturnWire, destructorsRef, ${P})`),P=`return function (handle, methodName, destructorsRef, args) {
  ${P}
  }`,_=new Function(Object.keys(R),P)(...Object.values(R)),P=`methodCaller<(${S.map(Y=>Y.name)}) => ${g.name}>`,G_(Object.defineProperty(_,"name",{value:P}))}function K_(l,c){return c>>>=0,(l=Fe(l>>>0))==Fe(c)}function X_(l){return(l>>>=0)?(l=ur(l),et(globalThis[l])):et(globalThis)}function Y_(l){return l=ur(l>>>0),et(t[l])}function Z_(l,c){return c>>>=0,l=Fe(l>>>0),c=Fe(c),et(l[c])}function Q_(l){9<(l>>>=0)&&(Vt[l+1]+=1)}function nf(l,c,_,g,S){return ya[l>>>0](c>>>0,_>>>0,g>>>0,S>>>0)}function J_(l,c,_,g,S){return nf(l>>>0,c>>>0,_>>>0,g>>>0,S>>>0)}function ew(){return et([])}function tw(l){l=Fe(l>>>0);for(var c=Array(l.length),_=0;_<l.length;_++)c[_]=l[_];return et(c)}function nw(l){return et(ur(l>>>0))}function rw(){return et({})}function iw(l){for(var c=Fe(l>>>=0);c.length;){var _=c.pop();c.pop()(_)}ca(l)}function aw(l,c,_){c>>>=0,_>>>=0,l=Fe(l>>>0),c=Fe(c),_=Fe(_),l[c]=_}function sw(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(x(),A)[c>>>2>>>0]=l.getUTCSeconds(),(x(),A)[c+4>>>2>>>0]=l.getUTCMinutes(),(x(),A)[c+8>>>2>>>0]=l.getUTCHours(),(x(),A)[c+12>>>2>>>0]=l.getUTCDate(),(x(),A)[c+16>>>2>>>0]=l.getUTCMonth(),(x(),A)[c+20>>>2>>>0]=l.getUTCFullYear()-1900,(x(),A)[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),A)[c+28>>>2>>>0]=l}var rf=l=>l%4==0&&(l%100!=0||l%400==0),af=[0,31,60,91,121,152,182,213,244,274,305,335],sf=[0,31,59,90,120,151,181,212,243,273,304,334];function ow(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(x(),A)[c>>>2>>>0]=l.getSeconds(),(x(),A)[c+4>>>2>>>0]=l.getMinutes(),(x(),A)[c+8>>>2>>>0]=l.getHours(),(x(),A)[c+12>>>2>>>0]=l.getDate(),(x(),A)[c+16>>>2>>>0]=l.getMonth(),(x(),A)[c+20>>>2>>>0]=l.getFullYear()-1900,(x(),A)[c+24>>>2>>>0]=l.getDay();var _=(rf(l.getFullYear())?af:sf)[l.getMonth()]+l.getDate()-1|0;(x(),A)[c+28>>>2>>>0]=_,(x(),A)[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),_=new Date(l.getFullYear(),6,1).getTimezoneOffset();var g=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(_!=g&&l.getTimezoneOffset()==Math.min(g,_)),(x(),A)[c+32>>>2>>>0]=l}function uw(l){l>>>=0;var c=new Date((x(),A)[l+20>>>2>>>0]+1900,(x(),A)[l+16>>>2>>>0],(x(),A)[l+12>>>2>>>0],(x(),A)[l+8>>>2>>>0],(x(),A)[l+4>>>2>>>0],(x(),A)[l>>>2>>>0],0),_=(x(),A)[l+32>>>2>>>0],g=c.getTimezoneOffset(),S=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),R=Math.min(E,S);return 0>_?(x(),A)[l+32>>>2>>>0]=+(S!=E&&R==g):0<_!=(R==g)&&(S=Math.max(E,S),c.setTime(c.getTime()+6e4*((0<_?R:S)-g))),(x(),A)[l+24>>>2>>>0]=c.getDay(),_=(rf(c.getFullYear())?af:sf)[c.getMonth()]+c.getDate()-1|0,(x(),A)[l+28>>>2>>>0]=_,(x(),A)[l>>>2>>>0]=c.getSeconds(),(x(),A)[l+4>>>2>>>0]=c.getMinutes(),(x(),A)[l+8>>>2>>>0]=c.getHours(),(x(),A)[l+12>>>2>>>0]=c.getDate(),(x(),A)[l+16>>>2>>>0]=c.getMonth(),(x(),A)[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function of(l,c,_,g,S,E,R){return i?re(16,1,l,c,_,g,S,E,R):-52}function uf(l,c,_,g,S,E){if(i)return re(17,1,l,c,_,g,S,E)}var Sn={},lw=()=>performance.timeOrigin+performance.now();function lf(l,c){if(i)return re(18,1,l,c);if(Sn[l]&&(clearTimeout(Sn[l].id),delete Sn[l]),!c)return 0;var _=setTimeout(()=>{delete Sn[l],ir(()=>Sf(l,performance.timeOrigin+performance.now()))},c);return Sn[l]={id:_,Yd:c},0}function dw(l,c,_,g){l>>>=0,c>>>=0,_>>>=0,g>>>=0;var S=new Date().getFullYear(),E=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var R=Math.max(E,S);(x(),F)[l>>>2>>>0]=60*R,(x(),A)[c>>>2>>>0]=+(E!=S),l=(c=P=>{var Y=Math.abs(P);return`UTC${0<=P?"-":"+"}${String(Math.floor(Y/60)).padStart(2,"0")}${String(Y%60).padStart(2,"0")}`})(E),c=c(S),S<E?(St(l,_,17),St(c,g,17)):(St(l,g,17),St(c,_,17))}var cw=()=>Date.now();function pw(l,c,_){return _>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(x(),oe)[_>>>3>>>0]=BigInt(l),0):28}var _a=[],df=(l,c)=>{_a.length=0;for(var _;_=(x(),H)[l++>>>0];){var g=_!=105;c+=(g&=_!=112)&&c%8?4:0,_a.push(_==112?(x(),F)[c>>>2>>>0]:_==106?(x(),oe)[c>>>3>>>0]:_==105?(x(),A)[c>>>2>>>0]:(x(),X)[c>>>3>>>0]),c+=g?8:4}return _a};function hw(l,c,_){return l>>>=0,c=df(c>>>0,_>>>0),Ia[l](...c)}function fw(l,c,_){return l>>>=0,c=df(c>>>0,_>>>0),Ia[l](...c)}var mw=()=>{};function gw(l,c){return k(Ae(l>>>0,c>>>0))}var yw=()=>{throw ue+=1,"unwind"};function _w(){return 4294901760}var ww=()=>navigator.hardwareConcurrency,Ft={},lr=l=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+c[1]:0},cf=l=>{for(var c of l)(l=lr(c))&&(Ft[l]=c)};function bw(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),cf(l),Ft.gd=lr(l[3]),Ft.Jd=l,Ft.gd}function dr(l){if(!(l=Ft[l>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(l))l=c[1];else{if(!(c=/^(.+?)@/.exec(l)))return 0;l=c[1]}at(dr.hd??0),c=rr(l)+1;var _=Tn(c);return _&&St(l,_,c),dr.hd=_,dr.hd}function $w(l){l>>>=0;var c=(x(),H).length;if(l<=c||4294901760<l)return!1;for(var _=1;4>=_;_*=2){var g=c*(1+.2/_);g=Math.min(g,l+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(l,g)/65536))-xt.buffer.byteLength+65535)/65536|0;try{xt.grow(g),L();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function vw(l,c,_){if(l>>>=0,c>>>=0,Ft.gd==l)var g=Ft.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),cf(g);for(var S=3;g[S]&&lr(g[S])!=l;)++S;for(l=0;l<_&&g[l+S];++l)(x(),A)[c+4*l>>>2>>>0]=lr(g[l+S]);return l}var wa,ba={},pf=()=>{var g;if(!wa){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in ba)ba[l]===void 0?delete c[l]:c[l]=ba[l];var _=[];for(l in c)_.push(`${l}=${c[l]}`);wa=_}return wa};function hf(l,c){if(i)return re(19,1,l,c);l>>>=0,c>>>=0;var _,g=0,S=0;for(_ of pf()){var E=c+g;(x(),F)[l+S>>>2>>>0]=E,g+=St(_,E,1/0)+1,S+=4}return 0}function ff(l,c){if(i)return re(20,1,l,c);l>>>=0,c>>>=0;var _=pf();for(var g of((x(),F)[l>>>2>>>0]=_.length,l=0,_))l+=rr(g)+1;return(x(),F)[c>>>2>>>0]=l,0}function mf(l){return i?re(21,1,l):52}function gf(l,c,_,g){return i?re(22,1,l,c,_,g):52}function yf(l,c,_,g){return i?re(23,1,l,c,_,g):70}var xw=[null,[],[]];function _f(l,c,_,g){if(i)return re(24,1,l,c,_,g);c>>>=0,_>>>=0,g>>>=0;for(var S=0,E=0;E<_;E++){var R=(x(),F)[c>>>2>>>0],P=(x(),F)[c+4>>>2>>>0];c+=8;for(var Y=0;Y<P;Y++){var J=l,ce=(x(),H)[R+Y>>>0],_e=xw[J];ce===0||ce===10?((J===1?T:k)(Bh(_e)),_e.length=0):_e.push(ce)}S+=P}return(x(),F)[g>>>2>>>0]=S,0}function Sw(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)Eh();$e.push(async()=>{var c=(async function(){if(!i)return Promise.all(Ge.map(kh))})();ye++,await c,--ye==0&&Ee&&(c=Ee,Ee=null,c())})})(),i||(xt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),L()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>fe(),t.stackRestore=l=>he(l),t.stackAlloc=l=>xa(l),t.setValue=function(l,c,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(x(),N)[l>>>0]=c;break;case"i16":(x(),G)[l>>>1>>>0]=c;break;case"i32":(x(),A)[l>>>2>>>0]=c;break;case"i64":(x(),oe)[l>>>3>>>0]=BigInt(c);break;case"float":(x(),K)[l>>>2>>>0]=c;break;case"double":(x(),X)[l>>>3>>>0]=c;break;case"*":(x(),F)[l>>>2>>>0]=c;break;default:U(`invalid type for setValue: ${_}`)}},t.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(x(),N)[l>>>0];case"i16":return(x(),G)[l>>>1>>>0];case"i32":return(x(),A)[l>>>2>>>0];case"i64":return(x(),oe)[l>>>3>>>0];case"float":return(x(),K)[l>>>2>>>0];case"double":return(x(),X)[l>>>3>>>0];case"*":return(x(),F)[l>>>2>>>0];default:U(`invalid type for getValue: ${c}`)}},t.UTF8ToString=Ae,t.stringToUTF8=St,t.lengthBytesUTF8=rr;var wf,bf,cr,at,Tn,$a,$f,vf,xf,va,Sf,Tf,me,In,If,he,xa,fe,kf,Sa,Ef,Cf,zf,Ta,Mf,Af,Rf,Of,Bf,Nf,Df,Uf,Pf,Lf,qf,Wf,Gf,Vf,Ff,Hf,jf,Kf,Xf,Yf,Zf,Qf,Jf,em,tm,nm,rm,im,am,sm,om,um,lm,dm,cm,pm,hm,fm,mm,mt,Tw=[Ie,Je,Mh,Nh,Dh,Uh,Ph,Lh,qh,Wh,Gh,Vh,Fh,Hh,jh,Kh,of,uf,lf,hf,ff,mf,gf,yf,_f],Ia={1003524:(l,c,_,g,S)=>{if(t===void 0||!t.Xc)return 1;if((l=Ae(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(c=Number(c>>>0),_=Number(_>>>0),g=Number(g>>>0),c+_>l.byteLength)return 3;try{let E=l.subarray(c,c+_);switch(S){case 0:(x(),H).set(E,g>>>0);break;case 1:t.Qd?t.Qd(g,E):t.Id(g,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,c,_)=>{t.td(l,(x(),H).subarray(c>>>0,c+_>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,c,_)=>{t.ed(Number(l),Number(c),Number(_),!0)},1004704:(l,c,_)=>{t.ed(Number(l),Number(c),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,c,_)=>{t.$b("HardSigmoid",l,{alpha:c,beta:_})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,c,_)=>{t.$b("Clip",l,{min:c,max:_})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,c)=>{t.$b("Elu",l,{alpha:c})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,c)=>{t.$b("LeakyRelu",l,{alpha:c})},1006444:(l,c)=>{t.$b("ThresholdedRelu",l,{alpha:c})},1006514:(l,c)=>{t.$b("Cast",l,{to:c})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,c,_,g,S)=>{t.$b("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007283:(l,c,_,g,S)=>{t.$b("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007457:(l,c,_,g,S)=>{t.$b("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007631:(l,c,_,g,S)=>{t.$b("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007806:(l,c,_,g,S)=>{t.$b("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007980:(l,c,_,g,S)=>{t.$b("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008153:(l,c,_,g,S)=>{t.$b("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008326:(l,c,_,g,S)=>{t.$b("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008503:(l,c,_,g,S)=>{t.$b("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008683:(l,c,_,g,S)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,c,_)=>{t.$b("Transpose",l,{perm:c?Array.from((x(),A).subarray(Number(c)>>>0,Number(_)>>>0)):[]})},1009040:(l,c,_,g)=>{t.$b("DepthToSpace",l,{blocksize:c,mode:Ae(_),format:g?"NHWC":"NCHW"})},1009173:(l,c,_,g)=>{t.$b("DepthToSpace",l,{blocksize:c,mode:Ae(_),format:g?"NHWC":"NCHW"})},1009306:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke,It)=>{t.$b("ConvTranspose",l,{format:Y?"NHWC":"NCHW",autoPad:c,dilations:[_],group:g,kernelShape:[S],pads:[E,R],strides:[P],wIsConst:()=>!!(x(),N)[J>>>0],outputPadding:ce?Array.from((x(),A).subarray(Number(ce)>>>0,Number(_e)>>>0)):[],outputShape:xe?Array.from((x(),A).subarray(Number(xe)>>>0,Number(ke)>>>0)):[],activation:Ae(It)})},1009739:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),A).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),A).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(x(),N)[Y>>>0],outputPadding:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],outputShape:_e?Array.from((x(),A).subarray(Number(_e)>>>0,Number(xe)>>>0)):[],activation:Ae(ke)})},1010400:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke,It)=>{t.$b("ConvTranspose",l,{format:Y?"NHWC":"NCHW",autoPad:c,dilations:[_],group:g,kernelShape:[S],pads:[E,R],strides:[P],wIsConst:()=>!!(x(),N)[J>>>0],outputPadding:ce?Array.from((x(),A).subarray(Number(ce)>>>0,Number(_e)>>>0)):[],outputShape:xe?Array.from((x(),A).subarray(Number(xe)>>>0,Number(ke)>>>0)):[],activation:Ae(It)})},1010833:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke)=>{t.$b("ConvTranspose",l,{format:P?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),A).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),A).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),A).subarray(Number(R)>>>0,(Number(R)>>>0)+2>>>0)),wIsConst:()=>!!(x(),N)[Y>>>0],outputPadding:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],outputShape:_e?Array.from((x(),A).subarray(Number(_e)>>>0,Number(xe)>>>0)):[],activation:Ae(ke)})},1011494:(l,c)=>{t.$b("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1011585:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke)=>{t.$b("AveragePool",l,{format:ke?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],strides:_e?Array.from((x(),A).subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},1012064:(l,c)=>{t.$b("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1012155:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke)=>{t.$b("AveragePool",l,{format:ke?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],strides:_e?Array.from((x(),A).subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},1012634:(l,c)=>{t.$b("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1012721:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke)=>{t.$b("MaxPool",l,{format:ke?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],strides:_e?Array.from((x(),A).subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},1013196:(l,c)=>{t.$b("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1013283:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke)=>{t.$b("MaxPool",l,{format:ke?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],kernel_shape:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Y)>>>0)):[],pads:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],strides:_e?Array.from((x(),A).subarray(Number(_e)>>>0,Number(xe)>>>0)):[]})},1013758:(l,c,_,g,S)=>{t.$b("Gemm",l,{alpha:c,beta:_,transA:g,transB:S})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,c,_,g)=>{t.$b("ArgMax",l,{keepDims:!!c,selectLastIndex:!!_,axis:g})},1014024:(l,c,_,g)=>{t.$b("ArgMin",l,{keepDims:!!c,selectLastIndex:!!_,axis:g})},1014132:(l,c)=>{t.$b("Softmax",l,{axis:c})},1014195:(l,c)=>{t.$b("Concat",l,{axis:c})},1014255:(l,c,_,g,S)=>{t.$b("Split",l,{axis:c,numOutputs:_,splitSizes:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,c)=>{t.$b("Gather",l,{axis:Number(c)})},1014536:(l,c)=>{t.$b("GatherElements",l,{axis:Number(c)})},1014615:(l,c)=>{t.$b("GatherND",l,{batch_dims:Number(c)})},1014694:(l,c,_,g,S,E,R,P,Y,J,ce)=>{t.$b("Resize",l,{antialias:c,axes:_?Array.from((x(),A).subarray(Number(_)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Ae(S),cubicCoeffA:E,excludeOutside:R,extrapolationValue:P,keepAspectRatioPolicy:Ae(Y),mode:Ae(J),nearestMode:Ae(ce)})},1015056:(l,c,_,g,S,E,R)=>{t.$b("Slice",l,{starts:c?Array.from((x(),A).subarray(Number(c)>>>0,Number(_)>>>0)):[],ends:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[],axes:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,c,_)=>{t.$b("InstanceNormalization",l,{epsilon:c,format:_?"NHWC":"NCHW"})},1015486:(l,c,_)=>{t.$b("InstanceNormalization",l,{epsilon:c,format:_?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,c)=>{t.$b("Einsum",l,{equation:Ae(c)})},1015734:(l,c,_,g,S)=>{t.$b("Pad",l,{mode:c,value:_,pads:g?Array.from((x(),A).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1015877:(l,c,_,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:c,momentum:_,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016046:(l,c,_,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:c,momentum:_,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016215:(l,c,_)=>{t.$b("CumSum",l,{exclusive:Number(c),reverse:Number(_)})},1016312:(l,c,_)=>{t.$b("DequantizeLinear",l,{axis:c,blockSize:_})},1016402:(l,c,_,g,S)=>{t.$b("GridSample",l,{align_corners:c,mode:Ae(_),padding_mode:Ae(g),format:S?"NHWC":"NCHW"})},1016572:(l,c,_,g,S)=>{t.$b("GridSample",l,{align_corners:c,mode:Ae(_),padding_mode:Ae(g),format:S?"NHWC":"NCHW"})},1016742:(l,c)=>{t.$b("ScatterND",l,{reduction:Ae(c)})},1016827:(l,c,_,g,S,E,R,P,Y)=>{t.$b("Attention",l,{numHeads:c,isUnidirectional:_,maskFilterValue:g,scale:S,doRotary:E,qkvHiddenSizes:R?Array.from((x(),A).subarray(Number(P)>>>0,Number(P)+R>>>0)):[],pastPresentShareBuffer:!!Y})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke,It,ka)=>{t.$b("Conv",l,{format:_e?"NHWC":"NCHW",auto_pad:c,dilations:_?Array.from((x(),A).subarray(Number(_)>>>0,Number(g)>>>0)):[],group:S,kernel_shape:E?Array.from((x(),A).subarray(Number(E)>>>0,Number(R)>>>0)):[],pads:P?Array.from((x(),A).subarray(Number(P)>>>0,Number(Y)>>>0)):[],strides:J?Array.from((x(),A).subarray(Number(J)>>>0,Number(ce)>>>0)):[],w_is_const:()=>!!(x(),N)[Number(xe)>>>0],activation:Ae(ke),activation_params:It?Array.from((x(),K).subarray(Number(It)>>>0,Number(ka)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,c,_,g,S,E,R,P,Y)=>{t.$b("GroupQueryAttention",l,{numHeads:c,kvNumHeads:_,scale:g,softcap:S,doRotary:E,rotaryInterleaved:R,smoothSoftmax:P,localWindowSize:Y})},1018124:(l,c,_,g)=>{t.$b("LayerNormalization",l,{axis:c,epsilon:_,simplified:!!g})},1018235:(l,c,_,g)=>{t.$b("LayerNormalization",l,{axis:c,epsilon:_,simplified:!!g})},1018346:(l,c,_,g,S,E)=>{t.$b("MatMulNBits",l,{k:c,n:_,accuracyLevel:g,bits:S,blockSize:E})},1018473:(l,c,_,g,S,E)=>{t.$b("MultiHeadAttention",l,{numHeads:c,isUnidirectional:_,maskFilterValue:g,scale:S,doRotary:E})},1018632:(l,c)=>{t.$b("QuickGelu",l,{alpha:c})},1018696:(l,c,_,g,S)=>{t.$b("RotaryEmbedding",l,{interleaved:!!c,numHeads:_,rotaryEmbeddingDim:g,scale:S})},1018835:(l,c,_)=>{t.$b("SkipLayerNormalization",l,{epsilon:c,simplified:!!_})},1018937:(l,c,_)=>{t.$b("SkipLayerNormalization",l,{epsilon:c,simplified:!!_})},1019039:(l,c,_,g)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:_,blockSize:g})},1019160:l=>{t.Fd(l)},1019194:(l,c)=>t.Hd(Number(l),Number(c),t.Yc.Kd,t.Yc.errors)};function Iw(l,c,_){return tf(async()=>{await t.Dd(Number(l),Number(c),Number(_))})}function kw(){return typeof wasmOffsetConverter<"u"}function Ew(l,c,_,g){var S=fe();try{return Uf(l,c,_,g)}catch(E){if(he(S),E!==E+0)throw E;me(1,0)}}function Cw(l,c,_){var g=fe();try{return Of(l,c,_)}catch(S){if(he(g),S!==S+0)throw S;me(1,0)}}function zw(l){var c=fe();try{Mf(l)}catch(_){if(he(c),_!==_+0)throw _;me(1,0)}}function Mw(l,c){var _=fe();try{return Ta(l,c)}catch(g){if(he(_),g!==g+0)throw g;me(1,0)}}function Aw(l,c,_){var g=fe();try{zf(l,c,_)}catch(S){if(he(g),S!==S+0)throw S;me(1,0)}}function Rw(l,c){var _=fe();try{Pf(l,c)}catch(g){if(he(_),g!==g+0)throw g;me(1,0)}}function Ow(l,c,_,g,S,E,R){var P=fe();try{return Nf(l,c,_,g,S,E,R)}catch(Y){if(he(P),Y!==Y+0)throw Y;me(1,0)}}function Bw(l,c,_,g,S,E){var R=fe();try{Af(l,c,_,g,S,E)}catch(P){if(he(R),P!==P+0)throw P;me(1,0)}}function Nw(l,c,_,g){var S=fe();try{Df(l,c,_,g)}catch(E){if(he(S),E!==E+0)throw E;me(1,0)}}function Dw(l,c,_,g,S){var E=fe();try{Rf(l,c,_,g,S)}catch(R){if(he(E),R!==R+0)throw R;me(1,0)}}function Uw(l,c,_,g,S,E,R){var P=fe();try{qf(l,c,_,g,S,E,R)}catch(Y){if(he(P),Y!==Y+0)throw Y;me(1,0)}}function Pw(l,c,_,g,S,E,R){var P=fe();try{Wf(l,c,_,g,S,E,R)}catch(Y){if(he(P),Y!==Y+0)throw Y;me(1,0)}}function Lw(l,c,_,g,S,E,R,P){var Y=fe();try{Hf(l,c,_,g,S,E,R,P)}catch(J){if(he(Y),J!==J+0)throw J;me(1,0)}}function qw(l,c,_,g,S){var E=fe();try{return Lf(l,c,_,g,S)}catch(R){if(he(E),R!==R+0)throw R;me(1,0)}}function Ww(l,c,_){var g=fe();try{return jf(l,c,_)}catch(S){if(he(g),S!==S+0)throw S;me(1,0)}}function Gw(l,c,_,g,S,E,R,P){var Y=fe();try{Kf(l,c,_,g,S,E,R,P)}catch(J){if(he(Y),J!==J+0)throw J;me(1,0)}}function Vw(l,c,_,g,S,E,R,P,Y,J,ce,_e){var xe=fe();try{Gf(l,c,_,g,S,E,R,P,Y,J,ce,_e)}catch(ke){if(he(xe),ke!==ke+0)throw ke;me(1,0)}}function Fw(l,c,_,g,S,E){var R=fe();try{return Vf(l,c,_,g,S,E)}catch(P){if(he(R),P!==P+0)throw P;me(1,0)}}function Hw(l,c,_){var g=fe();try{return Xf(l,c,_)}catch(S){if(he(g),S!==S+0)throw S;return me(1,0),0n}}function jw(l,c,_,g,S,E,R,P,Y){var J=fe();try{Bf(l,c,_,g,S,E,R,P,Y)}catch(ce){if(he(J),ce!==ce+0)throw ce;me(1,0)}}function Kw(l){var c=fe();try{return Yf(l)}catch(_){if(he(c),_!==_+0)throw _;me(1,0)}}function Xw(l,c){var _=fe();try{return cm(l,c)}catch(g){if(he(_),g!==g+0)throw g;return me(1,0),0n}}function Yw(l){var c=fe();try{return Zf(l)}catch(_){if(he(c),_!==_+0)throw _;return me(1,0),0n}}function Zw(l,c,_,g){var S=fe();try{return rm(l,c,_,g)}catch(E){if(he(S),E!==E+0)throw E;me(1,0)}}function Qw(l,c,_,g,S){var E=fe();try{return im(l,c,_,g,S)}catch(R){if(he(E),R!==R+0)throw R;me(1,0)}}function Jw(l,c,_,g,S,E){var R=fe();try{return am(l,c,_,g,S,E)}catch(P){if(he(R),P!==P+0)throw P;me(1,0)}}function eb(l,c,_,g,S,E){var R=fe();try{return sm(l,c,_,g,S,E)}catch(P){if(he(R),P!==P+0)throw P;me(1,0)}}function tb(l,c,_,g,S,E,R,P){var Y=fe();try{return Ff(l,c,_,g,S,E,R,P)}catch(J){if(he(Y),J!==J+0)throw J;me(1,0)}}function nb(l,c,_,g,S){var E=fe();try{return om(l,c,_,g,S)}catch(R){if(he(E),R!==R+0)throw R;return me(1,0),0n}}function rb(l,c,_,g){var S=fe();try{return um(l,c,_,g)}catch(E){if(he(S),E!==E+0)throw E;me(1,0)}}function ib(l,c,_,g){var S=fe();try{return lm(l,c,_,g)}catch(E){if(he(S),E!==E+0)throw E;me(1,0)}}function ab(l,c,_,g,S,E,R,P,Y,J,ce,_e){var xe=fe();try{return dm(l,c,_,g,S,E,R,P,Y,J,ce,_e)}catch(ke){if(he(xe),ke!==ke+0)throw ke;me(1,0)}}function sb(l,c,_,g,S,E,R,P,Y,J,ce){var _e=fe();try{tm(l,c,_,g,S,E,R,P,Y,J,ce)}catch(xe){if(he(_e),xe!==xe+0)throw xe;me(1,0)}}function ob(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke,It,ka){var cb=fe();try{nm(l,c,_,g,S,E,R,P,Y,J,ce,_e,xe,ke,It,ka)}catch(Ea){if(he(cb),Ea!==Ea+0)throw Ea;me(1,0)}}function ub(l,c,_){var g=fe();try{return Qf(l,c,_)}catch(S){if(he(g),S!==S+0)throw S;me(1,0)}}function lb(l,c,_){var g=fe();try{return Jf(l,c,_)}catch(S){if(he(g),S!==S+0)throw S;me(1,0)}}function db(l,c,_,g){var S=fe();try{em(l,c,_,g)}catch(E){if(he(S),E!==E+0)throw E;me(1,0)}}function pr(){if(0<ye)Ee=pr;else if(i)w==null||w(t),W();else{for(var l=$e;0<l.length;)l.shift()(t);0<ye?Ee=pr:(t.calledRun=!0,z||(W(),w==null||w(t)))}}return i||(mt=await pe(),pr()),t.PTR_SIZE=4,M?t:new Promise((l,c)=>{w=l,v=c})}var Za,Qa,Pm=j(()=>{var e,t;Za=Ya,Qa=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Qa&&Ya()}),$r,vr,Ja,qe,es,zn,ts,ns,xr,rs,Sr,is,Tr,as,Ir=j(()=>{_r(),$r=typeof location>"u"?void 0:location.origin,vr=self.location.href>"file:"&&self.location.href<"file;",Ja=()=>{{if(vr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,$r).href}return self.location.href}},qe=Ja(),es=()=>{if(qe&&!qe.startsWith("blob:"))return qe.substring(0,qe.lastIndexOf("/")+1)},zn=(e,t)=>{try{let n=t??qe;return(n?new URL(e,n):new URL(e)).origin===$r}catch{return!1}},ts=(e,t)=>{let n=t??qe;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},ns=(e,t)=>`${t??"./"}${e}`,xr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},rs=async e=>(await import(e)).default,Sr=(Um(),rn(ja)).default,is=async()=>{if(!qe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(zn(qe))return[void 0,Sr()];let e=await xr(qe);return[e,Sr(e)]},Tr=(Pm(),rn(Xa)).default,as=async(e,t,n,r)=>{let i=Tr&&!(e||t);if(i)if(qe)i=zn(qe)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Tr];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??ts(s,t),o=n&&a&&!zn(a,t),u=o?await xr(a):a??ns(s,t);return[o?u:void 0,await rs(u)]}}}),kr,Mn,un,Er,ss,os,us,Cr,Te,zt=j(()=>{Ir(),Mn=!1,un=!1,Er=!1,ss=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},os=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},us=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Cr=async e=>{if(Mn)return Promise.resolve();if(un)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Er)throw new Error("previous call to 'initializeWebAssembly()' failed.");un=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!us())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!os())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ss();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,o=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,h=e.wasmBinary,[p,f]=await as(o,s,n>1,!!h||!!d),m=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{m=!0,w()},t)})),y.push(new Promise((w,v)=>{let $={numThreads:n};if(h)$.wasmBinary=h,$.locateFile=b=>b;else if(d||s)$.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,o).href;else if(p){let b=es();b&&($.locateFile=I=>b+I)}f($).then(b=>{un=!1,Mn=!0,kr=b,w(),p&&URL.revokeObjectURL(p)},b=>{un=!1,Er=!0,v(b)})})),await Promise.race(y),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(Mn&&kr)return kr;throw new Error("WebAssembly is not initialized yet.")}}),je,An,ve,zr=j(()=>{zt(),je=(e,t)=>{let n=Te(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},An=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")An(s,a+".",n,r);else if(typeof s=="string"||typeof s=="number")r(a,s.toString());else if(typeof s=="boolean")r(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ve=e=>{let t=Te(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let s=Number(t.getValue(i,r===4?"i32":"i64")),a=t.getValue(i+r,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),ls,Lm=j(()=>{zt(),zr(),ls=e=>{let t=Te(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=je(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),n===0&&ve("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&An(e.extra,"",new WeakSet,(a,o)=>{let u=je(a,r),d=je(o,r);t._OrtAddRunConfigEntry(n,u,d)!==0&&ve(`Can't set a run config entry: ${a} - ${o}.`)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(a=>t._free(a)),s}}}),ds,cs,ps,Mt,hs,fs,qm=j(()=>{zt(),zr(),ds=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},cs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ps=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Mt=(e,t,n,r)=>{let i=je(t,r),s=je(n,r);Te()._OrtAddSessionConfigEntry(e,i,s)!==0&&ve(`Can't set a session config entry: ${t} - ${n}.`)},hs=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Mt(e,"session.disable_quant_qdq","1",n),Mt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&Mt(e,"deviceType",p,n)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Mt(e,"preferredLayout",p.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=je(s,n),u=a.length,d=0,h=0;if(u>0){d=Te()._malloc(u*Te().PTR_SIZE),n.push(d),h=Te()._malloc(u*Te().PTR_SIZE),n.push(h);for(let p=0;p<u;p++)Te().setValue(d+p*Te().PTR_SIZE,a[p][0],"*"),Te().setValue(h+p*Te().PTR_SIZE,a[p][1],"*")}await Te()._OrtAppendExecutionProvider(e,o,d,h,u)!==0&&ve(`Can't append execution provider: ${s}.`)}},fs=async e=>{let t=Te(),n=0,r=[],i=e||{};ps(i);try{let s=ds(i.graphOptimizationLevel??"all"),a=cs(i.executionMode??"sequential"),o=typeof i.logId=="string"?je(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof i.optimizedModelFilePath=="string"?je(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,u,d,h),n===0&&ve("Can't create session options."),i.executionProviders&&await hs(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Mt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[p,f]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=je(p,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&ve(`Can't set a free dimension override: ${p} - ${f}.`)}return i.extra!==void 0&&An(i.extra,"",new WeakSet,(p,f)=>{Mt(n,p,f,r)}),[n,r]}catch(s){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ve("Can't release session options."),r.forEach(a=>t._free(a)),s}}}),At,ut,Rt,Rn,On,Mr,Ar,Rr,ae=j(()=>{At=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ut=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Rt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return n>0?Math.ceil(r*n):void 0},Rn=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},On=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Mr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ar=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Rr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Or,ms=j(()=>{_r(),Or=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(s,a,d).set(u),a+=d}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),gs,ys,_s,ws,Br,bs,ge,lt=j(()=>{ae(),gs=["V","I","W","E","F"],ys=(e,t)=>{console.log(`[${gs[e]},${new Date().toISOString()}]${t}`)},Br=(e,t)=>{_s=e,ws=t},bs=(e,t)=>{let n=On(e),r=On(_s);n>=r&&ys(n,typeof t=="function"?t():t)},ge=(...e)=>{ws&&bs(...e)}}),$s,Xt,B,Bn,vs,xs,Ss,le=j(()=>{$s=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Xt=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(n){if(r<2||i<2)return;let o=$s.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=n?3:1;o<=s;o++){let u=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let h=Math.max(u,d);if(u&&d)a[s-o]=Math.max(u,d);else{if(h>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},B=class hr{static size(t){return hr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),s=r-1;for(;s>=0;){if(t[s]%n===0){i[s]=t[s]/n;break}if(n%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,n/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return hr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return hr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let s=n;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,s)=>i+n[s]+n[s+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Bn=class kn{static adjustPoolAttributes(t,n,r,i,s,a){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<r.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=r[o]||a[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)kn.adjustPadAndReturnShape(t[u+(a?1:2)],n[u],r[u],i[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,s,a,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return kn.computeShapeHelper(t,n,u,r,i,s,a,o),u}static computeConvOutputShape(t,n,r,i,s,a,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return kn.computeShapeHelper(!1,t,u,r,i,s,a,o),u}static computeShapeHelper(t,n,r,i,s,a,o,u){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(kn.adjustPadAndReturnShape(n[d+2],i[d],s[d],a[d],o,d,d+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,s,a,o,u){let d=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+i-t;return s[a]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),s[o]=h-s[a],Math.floor((t+h-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/n+1)}},vs=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Xt.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},xs=-34028234663852886e22,Ss=34028234663852886e22}),Nr,Ts=j(()=>{ae(),Nr=(e,t)=>new(Rn(t))(e)}),Dr,Ur,Pr,Is,Lr,ks,qr,Wr,Gr,Es,Cs,Wm=j(()=>{ae(),lt(),Dr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ur=(e,t)=>{if(t==="int32")return e;let n=Dr.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,s=new(Rn(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Pr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Is=1,Lr=()=>Is++,ks=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),qr=(e,t)=>{let n=Dr.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Wr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return qr(this.dataType,this.tensorShape)}destroy(){ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Pr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Gr=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=ks.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==qr(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,a),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ur(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Pr(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Es=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Lr();return this.tensorTrackersById.set(e,new Gr(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),s=Lr(),a=new Wr({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(s,new Gr(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,n,r,i,s,a){let o=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,n)){ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:a??t,shape:n,dimensions:n,usage:r,writable:i,readable:s});return new Wr({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Cs=(...e)=>new Es(...e)}),ln,zs,Ms,Gm=j(()=>{ae(),zt(),Ts(),Wm(),lt(),ln=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),zs=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,s)=>i===r[s]&&e[i]===t[i])},Ms=class{constructor(e){this.tensorManager=Cs(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Br(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>zs(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let s=ln.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,r,i)}async createTemporaryTensor(e,t,n){ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=ln.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Nr(n,t)}}registerMLTensor(e,t,n,r){let i=ln.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let s=this.tensorManager.registerTensor(e,t,i,r);return ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,n,r,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=s.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+n).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(d);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":h=new Int32Array(d);break;case"uint32":h=new Uint32Array(d);break;case"int64":if(a){let p=Ur(new Uint8Array(d),"int64");h=new Int32Array(p.buffer),i.dataType="int32"}else h=new BigInt64Array(d);break;case"uint64":h=new BigUint64Array(d);break;case"int8":h=new Int8Array(d);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ge("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=ln.get(At(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),Vr=j(()=>{}),Fr,Nn,Dn,As,Rs,Hr,jr,Os,Bs,Vm=j(()=>{lt(),Vr(),Fr=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Nn=[],Dn=e=>Math.ceil(Number(e)/16)*16,As=e=>{for(let t=0;t<Nn.length;t++){let n=Nn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Rs=1,Hr=()=>Rs++,jr=async(e,t,n,r)=>{let i=Dn(n),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{s.destroy()}},Os=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Fr)Nn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,s=Dn(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Dn(n.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Hr();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=As(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let a={id:Hr(),type:0,buffer:r};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await jr(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Fr.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Bs=(...e)=>new Os(...e)}),Ns,be,ze=j(()=>{Ns=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},be=e=>new Ns(e)}),Yt,Un,Re,Ne,ne,Ce,Kr,Zt,yt,te,dn,q,ee,Ds,Xr,Us,Ps,de=j(()=>{ae(),le(),Yt=64,Un=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Re=(e,t=1)=>{let n=Un(e,t);return typeof n=="string"?n:n[0]},Ne=(e,t=1)=>{let n=Un(e,t);return typeof n=="string"?n:n[1]},ne=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:B.computeStrides(n)})}),t},Ce=e=>e%4===0?4:e%2===0?2:1,Kr=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Zt=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,yt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,te=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,dn=(e,t,n,r,i)=>{let s=typeof n=="number",a=s?n:n.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Un(t,i),h=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],f={indices:u,value:h,storage:p,tensor:t},m=M=>typeof M=="string"?M:`${M}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=s?"uniforms.":"",v=`${w}${e}_shape`,$=`${w}${e}_strides`,b="";for(let M=0;M<a-1;M++)b+=`
    let dim${M} = current / ${te($,M,a)};
    let rest${M} = current % ${te($,M,a)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;b+=`indices[${a-1}] = current;`;let I=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=M=>(y.offsetToIndices=!0,a<2?M:`o2i_${e}(${M})`),k=[];if(a>=2)for(let M=a-1;M>=0;M--)k.push(`${te($,M,a)} * (indices[${M}])`);let z=a<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,C=M=>(y.indicesToOffset=!0,a<2?M:`i2o_${e}(${M})`),x=(...M)=>a===0?"0u":`${f.indices}(${M.map(m).join(",")})`,O=(M,L)=>a<2?`${M}`:`${te(M,L,a)}`,N=(M,L,W)=>a<2?`${M}=${W};`:`${te(M,L,a)}=${W};`,H={},G=(M,L)=>{y.broadcastedIndicesToOffset=!0;let W=`${L.name}broadcastedIndicesTo${e}Offset`;if(W in H)return`${W}(${M})`;let U=[];for(let Q=a-1;Q>=0;Q--){let pe=L.indicesGet("outputIndices",Q+L.rank-a);U.push(`${O($,Q)} * (${pe} % ${O(v,Q)})`)}return H[W]=`fn ${W}(outputIndices: ${L.type.indices}) -> u32 {
             return ${U.length>0?U.join("+"):"0u"};
           }`,`${W}(${M})`},V=(M,L)=>(()=>{if(f.storage===f.value)return`${e}[${M}]=${L};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${L}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=M=>(()=>{if(f.storage===f.value)return`${e}[${M}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${M}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${M}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),F=a<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${h} {
    return ${A(`i2o_${e}(indices)`)};
  }`,K=a<2?"":(()=>{let M=o.map(W=>`d${W}: u32`).join(", "),L=o.map(W=>`d${W}`).join(", ");return`
  fn get_${e}(${M}) -> ${h} {
    return get_${e}ByIndices(${x(L)});
  }`})(),X=(...M)=>{if(M.length!==a)throw new Error(`indices length must be ${a}`);let L=M.map(m).join(",");return a===0?A("0u"):a===1?A(L[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${L})`)},oe=M=>a<2?A(M):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${M})`),D=a<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${h}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,Z=a<2?"":(()=>{let M=o.map(W=>`d${W}: u32`).join(", "),L=o.map(W=>`d${W}`).join(", ");return`
  fn set_${e}(${M}, value: ${h}) {
    set_${e}ByIndices(${x(L)}, value);
  }`})();return{impl:()=>{let M=[],L=!1;return y.offsetToIndices&&(M.push(I),L=!0),y.indicesToOffset&&(M.push(z),L=!0),y.broadcastedIndicesToOffset&&(Object.values(H).forEach(W=>M.push(W)),L=!0),y.set&&(M.push(Z),L=!0),y.setByIndices&&(M.push(D),L=!0),y.get&&(M.push(K),L=!0),y.getByIndices&&(M.push(F),L=!0),!s&&L&&M.unshift(`const ${v} = ${f.indices}(${n.join(",")});`,`const ${$} = ${f.indices}(${B.computeStrides(n).join(",")});`),M.join(`
`)},type:f,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:G,indices:x,indicesGet:O,indicesSet:N,set:(...M)=>{if(M.length!==a+1)throw new Error(`indices length must be ${a}`);let L=M[a];if(typeof L!="string")throw new Error("value must be string");let W=M.slice(0,a).map(m).join(",");return a===0?V("0u",L):a===1?V(W[0],L):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${W}, ${L})`)},setByOffset:V,setByIndices:(M,L)=>a<2?V(M,L):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${L});`),get:X,getByOffset:A,getByIndices:oe,usage:r,name:e,strides:$,shape:v,rank:a}},q=(e,t,n,r=1)=>dn(e,t,n,"input",r),ee=(e,t,n,r=1)=>dn(e,t,n,"output",r),Ds=(e,t,n)=>dn(e,t,n,"atomicOutput",1),Xr=(e,t,n,r=1)=>dn(e,t,n,"internal",r),Us=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Yt){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ps=(e,t)=>new Us(e,t)}),Ls,Yr,qs,Ws,Gs,Vs,We,Fs,Hs,_t=j(()=>{ae(),le(),ze(),de(),Ls=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Yr=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),qs=(e,t)=>B.sortBasedOnPerm(e,Yr(e.length,t)),Ws=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Gs=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Vs=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},We=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Yr(r,t),s=qs(e.dims,i),a=e.dims,o=s,u=r<2||Vs(i,e.dims),d;if(u)return d=y=>{let w=q("input",n,a,4),v=ee("output",n,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,v)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:h,newPerm:p}=Gs(e.dims,i),f=B.areEqual(p,[2,3,1]),m=B.areEqual(p,[3,1,2]);if(h.length===2||f||m){a=f?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,o=[a[1],a[0]];let y=16;return d=w=>{let v=q("a",n,a.length),$=ee("output",n,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(v,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${w.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${v.getByIndices(`${v.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:w},...ne(a,o)]}},getShaderSource:d}}return d=y=>{let w=q("a",n,a.length),v=ee("output",n,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,v)}

  ${Ws(i,r,w,v)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ne(a,o)]}},getShaderSource:d}},Fs=(e,t)=>{Ls(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},Hs=e=>be({perm:e.perm})}),js,Ks,Xs,Ys,Zs,Qs,Js,eo,to,no,Ke,ro,io,ao,so,oo,uo,lo,co,po,ho,Fm=j(()=>{ae(),le(),de(),Qr(),_t(),js={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ks={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Xs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ys={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Zs=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Qs=(e,t)=>{let n=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&n.push(e[s]);let i=t.map(s=>e[s]);return[n,i]},Js=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let s=0;s<n;s++)t.indexOf(s)===-1?r.push(e[i++]):r.push(1);return r},eo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},to=(e,t)=>{let n=[];if(!eo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},no=(e,t,n,r,i,s,a)=>{let o=n[0].dims,u=B.size(s),d=B.size(a),h=q("_A",n[0].dataType,o),p=ee("output",i,s),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,y=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(h,p)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Xs[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${js[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ks[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Ys[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},Ke=(e,t,n,r)=>{let i=e.inputs.length===1?n:Zr(e.inputs,n),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,y)=>y));let a=B.normalizeAxes(s,e.inputs[0].dims.length),o=a,u=e.inputs[0],d=to(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(We(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Zs(o.length,u.dims.length));let[h,p]=Qs(u.dims,o),f=h;i.keepDims&&(f=Js(h,a)),e.compute(no(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,p),{inputs:[u]})},ro=(e,t)=>{Ke(e,"ReduceMeanShared",t,"mean")},io=(e,t)=>{Ke(e,"ReduceL1Shared",t,"l1")},ao=(e,t)=>{Ke(e,"ReduceL2Shared",t,"l2")},so=(e,t)=>{Ke(e,"ReduceLogSumExpShared",t,"logSumExp")},oo=(e,t)=>{Ke(e,"ReduceMaxShared",t,"max")},uo=(e,t)=>{Ke(e,"ReduceMinShared",t,"min")},lo=(e,t)=>{Ke(e,"ReduceProdShared",t,"prod")},co=(e,t)=>{Ke(e,"ReduceSumShared",t,"sum")},po=(e,t)=>{Ke(e,"ReduceSumSquareShared",t,"sumSquare")},ho=(e,t)=>{Ke(e,"ReduceLogSumShared",t,"logSum")}}),Xe,fo,Pn,Zr,Ye,mo,go,yo,_o,wo,bo,$o,vo,xo,So,Ze,To,Io,ko,Eo,Co,zo,Mo,Ao,Ro,Oo,Qr=j(()=>{ae(),le(),ze(),de(),Fm(),Xe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},fo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Pn=(e,t,n,r,i,s,a=!1,o=!1)=>{let u=[],d=n[0].dims,h=d.length,p=B.normalizeAxes(i,h),f=!o&&p.length===0;d.forEach((w,v)=>{f||p.indexOf(v)>=0?a&&u.push(1):u.push(w)});let m=u.length,y=B.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{let v=[],$=q("_A",n[0].dataType,h),b=ee("output",s,m),I=r($,b,p),T=I[2];for(let k=0,z=0;k<h;k++)f||p.indexOf(k)>=0?(a&&z++,T=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${I[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${$.indicesSet("input_indices",k,`j${k}`)}
                  ${T}
                }`):(v.push(`${$.indicesSet("input_indices",k,b.indicesGet("output_indices",z))};`),z++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${T}
          ${I[3]}
          ${I.length===4?b.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ne(d,u)]})}},Zr=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),be({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ye=(e,t,n,r)=>{let i=e.inputs,s=i.length===1?n:Zr(i,n);e.compute(Pn(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?fo:r,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},mo=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},go=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},yo=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},_o=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},wo=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceMax",t,(n,r,i)=>{let s=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(n.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},bo=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceMean",t,(n,r,i)=>{let s=1;for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},$o=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceMin",t,(n,r,i)=>{let s=[];for(let a=0;a<n.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},vo=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},xo=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},So=(e,t)=>{Xe(e.inputs),Ye(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Ze=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:i*=e[s];return i<32&&r>1024},To=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bo(e,t):ro(e,t)},Io=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?go(e,t):io(e,t)},ko=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):ao(e,t)},Eo=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_o(e,t):so(e,t)},Co=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wo(e,t):oo(e,t)},zo=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$o(e,t):uo(e,t)},Mo=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vo(e,t):lo(e,t)},Ao=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xo(e,t):co(e,t)},Ro=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?So(e,t):po(e,t)},Oo=(e,t)=>{Ze(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mo(e,t):ho(e,t)}}),Jr,Bo,No,ei,Hm=j(()=>{ae(),ze(),Qr(),Jr=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Bo=(e,t)=>{Jr(e.inputs);let n=(r,i,s)=>{let a=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Pn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},No=(e,t)=>{Jr(e.inputs);let n=(r,i,s)=>{let a=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Pn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ei=e=>be(e)}),Do,Ln,Uo,Po,Lo,cn,qo,Wo,ti=j(()=>{ae(),le(),Vr(),de(),Do=(e,t)=>{let n=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],d=n.dims[1],h=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,f=p,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let y=d;if(p!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(a){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=a.dims[3])}let v=y+w,$=-1,b=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:v,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ln=(e,t,n)=>t&&e?`
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
    `,Uo=(e,t,n,r,i,s,a,o)=>{let u=Ce(a?1:s),d=64,h=s/u;h<d&&(d=32);let p=Math.ceil(s/u/d),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:h},{type:12,data:p}],m=Re(e.dataType,u),y=Ne(1,u),w=["type"];a&&w.push("type"),o&&w.push("type");let v=$=>{let b=ee("x",e.dataType,e.dims,u),I=[b],T=a?q("seq_lens",a.dataType,a.dims):void 0;T&&I.push(T);let k=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;k&&I.push(k);let z=Ne(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(C).declareVariables(...I)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ln(T,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:w},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Po=(e,t,n,r,i,s,a,o,u)=>{let d=a+s.kvSequenceLength,h=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&r,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=p?[s.batchSize,f,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,w=s.scale===0?1/Math.sqrt(s.headSize):s.scale,v=Ce(s.headSize),$=s.headSize/v,b=12,I={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},T=[{type:12,data:s.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:w},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],k=p&&r&&B.size(r.dims)>0,z=["type","type"];k&&z.push("type"),i&&z.push("type"),o&&z.push("type"),u&&z.push("type");let C=[{dims:h,dataType:t.dataType,gpuDataType:0}];p&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let x=O=>{let N=q("q",t.dataType,t.dims,v),H=q("key",n.dataType,n.dims,v),G=[N,H];if(k){let D=q("past_key",r.dataType,r.dims,v);G.push(D)}i&&G.push(q("attention_bias",i.dataType,i.dims));let V=o?q("seq_lens",o.dataType,o.dims):void 0;V&&G.push(V);let A=u?q("total_sequence_length_input",u.dataType,u.dims):void 0;A&&G.push(A);let F=ee("output",t.dataType,h),K=[F];p&&K.push(ee("present_key",t.dataType,m,v));let X=Ne(1,v),oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${N.type.storage}, ${b*b}>;
  ${O.registerUniforms(oe).declareVariables(...G,...K)}
  ${O.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ln(V,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${X}(0);
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
          value += ${X}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(v){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${v}`)}})()};
        output[outputIdx] = ${F.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${i!==void 0};${r!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:C,dispatchGroup:I,programUniforms:T}),getShaderSource:x}},Lo=(e,t,n,r,i,s,a=void 0,o=void 0)=>{let u=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,h=i.vHiddenSize*d,p=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,f,u,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,h],w=12,v={x:Math.ceil(i.vHeadSize/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],b=p&&r&&B.size(r.dims)>0,I=["type","type"];b&&I.push("type"),a&&I.push("type"),o&&I.push("type");let T=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&T.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=z=>{let C=q("probs",t.dataType,t.dims),x=q("v",n.dataType,n.dims),O=[C,x];b&&O.push(q("past_value",r.dataType,r.dims));let N=a?q("seq_lens",a.dataType,a.dims):void 0;a&&O.push(N);let H=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(H);let G=[ee("output",t.dataType,y)];p&&G.push(ee("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${z.registerUniforms(V).declareVariables(...O,...G)}
  ${z.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ln(N,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:v,programUniforms:$}),getShaderSource:k}},cn=(e,t,n,r,i,s,a,o,u,d,h=void 0,p=void 0)=>{let f=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),m=f>1?a:void 0,y=f>1?o:void 0,w=f>1?d.pastSequenceLength:0,v=w+d.kvSequenceLength,$=u&&B.size(u.dims)>0?u:void 0,b=[t,n];m&&B.size(m.dims)>0&&b.push(m),$&&b.push($),h&&b.push(h),p&&b.push(p);let I=e.compute(Po(f,t,n,m,$,d,w,h,p),{inputs:b,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Uo(I,d.batchSize,d.numHeads,w,d.sequenceLength,v,h,p),{inputs:h&&p?[I,h,p]:[I],outputs:[]});let T=[I,r];y&&B.size(y.dims)>0&&T.push(y),h&&T.push(h),p&&T.push(p),e.compute(Lo(f,I,r,y,d,w,h,p),{inputs:T,outputs:f>1?[0,2]:[0]})},qo=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=p=>{let f=ee("output_q",u[0].dataType,n),m=ee("output_k",u[0].dataType,n),y=ee("output_v",u[0].dataType,n),w=q("input",u[0].dataType,u[0].dims),v=q("weight",u[1].dataType,u[1].dims),$=q("bias",u[2].dataType,u[2].dims),b=w.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${b}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${b}, ${a*a}>;
  var<workgroup> tileWeightK: array<${b}, ${a*a}>;
  var<workgroup> tileWeightV: array<${b}, ${a*a}>;
  ${p.registerUniforms(I).declareVariables(w,v,$,f,m,y)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},Wo=(e,t)=>{let n=Do(e.inputs,t),[r,i,s]=qo(e,n);return cn(e,r,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Go,Vo,Fo,Ho,jm=j(()=>{Ve(),ae(),le(),ze(),de(),Go=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,s)=>{let a=i.length;if(a!==r.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},Vo=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,s=e[0].dims,a=r?Ce(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,u=B.size(s)/a,d=r,h=d?s.length:s,p=q("x",e[0].dataType,e[0].dims,a),f=q("scale",e[1].dataType,e[1].dims,o),m=q("bias",e[2].dataType,e[2].dims,o),y=q("inputMean",e[3].dataType,e[3].dims,o),w=q("inputVar",e[4].dataType,e[4].dims,o),v=ee("y",e[0].dataType,h,a),$=()=>{let I="";if(r)I=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")I=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let T=1;T<f.rank;T++)I+=`cIndices[${T}] = outputIndices[${T}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},b=I=>`
  const epsilon = ${n};
  ${I.registerUniform("outputSize","u32").declareVariables(p,f,m,y,w,v)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${a}`)};
    ${$()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ne(s)]:[{type:12,data:u}]})}},Fo=e=>be(e),Ho=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Fo({...t,outputCount:r});if(Se.webgpu.validateInputContent&&Go(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Vo(n,i))}}),jo,Ko,Xo,Km=j(()=>{le(),de(),jo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ko=e=>{let t=e[0].dims,n=e[0].dims[2],r=B.size(t)/4,i=e[0].dataType,s=q("input",i,t,4),a=q("bias",i,[n],4),o=q("residual",i,t,4),u=ee("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(s,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Xo=e=>{jo(e.inputs),e.compute(Ko(e.inputs))}}),Yo,we,Zo,Qo,Jo,eu,tu,nu,ru,iu,au,su,ou,uu,lu,du,pn,cu,qn,pu,hu,fu,mu,gu,yu,_u,wu,bu,$u,vu,xu,Su,Tu,Iu,ku,ni,Eu,ri,ii,Cu,zu,Mu,Au,Ru,Ou,ai=j(()=>{ae(),le(),ze(),de(),Yo=(e,t,n,r,i,s,a)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=q("inputData",n,[o],4),h=ee("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},we=(e,t,n,r,i,s=e.dataType,a,o)=>{let u=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Yo(d,B.size(e.dims),e.dataType,s,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:u})}},Zo=e=>{e.compute(we(e.inputs[0],"Abs","abs"))},Qo=e=>{e.compute(we(e.inputs[0],"Acos","acos"))},Jo=e=>{e.compute(we(e.inputs[0],"Acosh","acosh"))},eu=e=>{e.compute(we(e.inputs[0],"Asin","asin"))},tu=e=>{e.compute(we(e.inputs[0],"Asinh","asinh"))},nu=e=>{e.compute(we(e.inputs[0],"Atan","atan"))},ru=e=>{e.compute(we(e.inputs[0],"Atanh","atanh"))},iu=e=>be(e),au=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(we(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},su=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return be({min:t,max:n})},ou=(e,t)=>{let n=t||su(e.inputs),r=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},uu=e=>{e.compute(we(e.inputs[0],"Ceil","ceil"))},lu=e=>{e.compute(we(e.inputs[0],"Cos","cos"))},du=e=>{e.compute(we(e.inputs[0],"Cosh","cosh"))},pn=e=>be(e),cu=(e,t)=>{let n=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},qn=(e="f32")=>`
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
}`,pu=e=>{let t=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,qn(t)))},hu=e=>{e.compute(we(e.inputs[0],"Exp","exp"))},fu=e=>{e.compute(we(e.inputs[0],"Floor","floor"))},mu=e=>{let t=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,qn(t)))},gu=(e,t)=>{let n=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},yu=e=>{e.compute(we(e.inputs[0],"Not",t=>`!${t}`))},_u=e=>{e.compute(we(e.inputs[0],"Neg",t=>`-${t}`))},wu=e=>{e.compute(we(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},bu=e=>{let t=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},$u=e=>{e.compute(we(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},vu=e=>be(e),xu=(e,t)=>{let n=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Su=e=>{e.compute(we(e.inputs[0],"Sin","sin"))},Tu=e=>{e.compute(we(e.inputs[0],"Sinh","sinh"))},Iu=e=>{e.compute(we(e.inputs[0],"Sqrt","sqrt"))},ku=e=>{e.compute(we(e.inputs[0],"Tan","tan"))},ni=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Eu=e=>{e.compute(we(e.inputs[0],"Tanh",ni))},ri=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ni("v")};
}
`,ii=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Cu=e=>{let t=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"FastGelu",ii,ri(t),void 0,e.inputs[0].dataType))},zu=(e,t)=>{let n=Ne(e.inputs[0].dataType);return e.compute(we(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Mu=e=>{e.compute(we(e.inputs[0],"Log","log"))},Au=(e,t)=>`
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
`,Ru=e=>`quick_gelu_impl(${e})`,Ou=(e,t)=>{let n=Ne(e.inputs[0].dataType);e.compute(we(e.inputs[0],"QuickGelu",Ru,Au(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Bu,Nu,Du,Xm=j(()=>{le(),de(),ai(),Bu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Nu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=q("input",e[0].dataType,e[0].dims,4),r=q("bias",e[0].dataType,[e[0].dims[2]],4),i=ee("output",e[0].dataType,t,4),s=B.size(t)/4,a=Re(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${qn(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Du=e=>{Bu(e.inputs),e.compute(Nu(e.inputs))}}),Uu,Pu,Qe,Lu,qu,Wu,Gu,Vu,Fu,Hu,ju,Ku,Xu,Ym=j(()=>{ae(),le(),de(),Uu=(e,t,n,r,i,s,a,o,u,d,h,p)=>{let f,m;typeof o=="string"?f=m=(b,I)=>`${o}((${b}),(${I}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let y=ee("outputData",h,r.length,4),w=q("aData",u,t.length,4),v=q("bData",d,n.length,4),$;if(i)if(s){let b=B.size(t)===1,I=B.size(n)===1,T=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;b||I?$=y.setByOffset("global_idx",m(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),I?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):$=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",m(a||T?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||k?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=y.setByOffset("global_idx",m(w.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(I,T,k="")=>{let z=`aData[indexA${T}][componentA${T}]`,C=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${y.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${w.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let offsetB${T} = ${v.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${I}[${T}] = ${k}(${f(z,C)});
          `};h===9?$=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(w,v,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Pu=(e,t,n,r,i,s,a=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),d=!B.areEqual(o,u),h=o,p=B.size(o),f=!1,m=!1,y=[d];if(d){let w=Xt.calcShape(o,u,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");h=w.slice(),p=B.size(h);let v=B.size(o)===1,$=B.size(u)===1,b=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;y.push(v),y.push($),y.push(b),y.push(I);let T=1;for(let k=1;k<h.length;k++){let z=o[o.length-k],C=u[u.length-k];if(z===C)T*=z;else break}T%4===0?(m=!0,f=!0):(v||$||b||I)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Uu(w,o,u,h,f,d,m,i,n.dataType,r.dataType,a,s),getRunData:()=>({outputs:[{dims:h,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(h)/4)},...ne(o,u,h)]})}},Qe=(e,t,n,r,i,s)=>{e.compute(Pu(t,i??"",e.inputs[0],e.inputs[1],n,r,s))},Lu=e=>{Qe(e,"Add",(t,n)=>`${t}+${n}`)},qu=e=>{Qe(e,"Div",(t,n)=>`${t}/${n}`)},Wu=e=>{Qe(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Gu=e=>{Qe(e,"Mul",(t,n)=>`${t}*${n}`)},Vu=e=>{let t=q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Qe(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},Fu=e=>{Qe(e,"Sub",(t,n)=>`${t}-${n}`)},Hu=e=>{Qe(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},ju=e=>{Qe(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Ku=e=>{Qe(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Xu=e=>{Qe(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Yu,Zu,Qu,Ju,el,tl,Zm=j(()=>{ae(),le(),ze(),de(),Yu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,s=r.dims.length;e.forEach((a,o)=>{if(o!==n){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((u,d)=>{if(d!==t&&u!==r.dims[d])throw new Error("non concat dimensions must match")})}})},Zu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Qu=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(s):i===0?r.push(`if (inputIndex == ${i}u) { ${s} }`):i===n-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${i}) { ${s} }`)}return r.join(`
`)},Ju=(e,t,n,r)=>{let i=B.size(n),s=new Array(e.length),a=new Array(e.length),o=0,u=[],d=[],h=[{type:12,data:i}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],s[w]=o,d.push(e[w].dims.length),a[w]=q(`input${w}`,r,d[w]),u.push("rank"),h.push({type:12,data:s[w]});for(let w=0;w<e.length;++w)h.push(...ne(e[w].dims));h.push(...ne(n));let p=ee("output",r,n.length),f=p.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)w.registerUniform(`sizeInConcatAxis${v}`,"u32");return w.declareVariables(...a,p)})()}

  ${Zu(s.length,m)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Qu(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:y}},el=(e,t)=>{let n=e.inputs,r=n[0].dims,i=B.normalizeAxis(t.axis,r.length);Yu(n,i);let s=r.slice();s[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let a=n.filter(o=>B.size(o.dims)>0);e.compute(Ju(a,i,s,n[0].dataType),{inputs:a})},tl=e=>be({axis:e.axis})}),Ot,Bt,Nt,si,Dt=j(()=>{ae(),le(),Ot=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Bt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Nt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},si=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[xs,Ss];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Be,nl,oi=j(()=>{Be=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},nl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),rl,Qm=j(()=>{rl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),hn,ui,li=j(()=>{ae(),le(),de(),Dt(),hn=(e,t,n,r,i)=>{let s=r-n;return`
      ${Array.from({length:n}).map((a,o)=>`
      if (${te(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,te(i,o+s,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},ui=(e,t,n,r,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a[a.length-2],d=o[o.length-1],h=a[a.length-1],p=Ce(d),f=Ce(h),m=Ce(u),y=B.size(n)/p/m,w=e.length>2,v=r?r.slice(0,-2):n.slice(0,-2),$=[B.size(v),u,d],b=[{type:12,data:y},{type:12,data:u},{type:12,data:d},{type:12,data:h}];Bt(t,b),b.push(...ne(v,a,o)),w&&b.push(...ne(e[2].dims)),b.push(...ne($));let I=T=>{let k=Xr("batch_dims",e[0].dataType,v.length),z=q("a",e[0].dataType,a.length,f),C=q("b",e[1].dataType,o.length,p),x=ee("output",e[0].dataType,$.length,p),O=Re(x.type.tensor),N=Ot(t,x.type.value,O),H=[z,C],G="";if(w){let F=i?p:1;H.push(q("bias",e[2].dataType,e[2].dims.length,F)),G=`${i?`value += bias[col / ${F}];`:`value += ${x.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Nt(t,V);let A=()=>{let F=`var a_data: ${z.type.value};`;for(let K=0;K<f;K++)F+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${p}];`;for(let K=0;K<m;K++){F+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${f}];`;for(let X=0;X<f;X++)F+=`
            values[${K}] = fma(${C.type.value}(a_data${f===1?"":`[${X}]`}), b_data${X}, values[${K}]);
`}return F};return`
  ${T.registerUniforms(V).registerInternalVariables(k).declareVariables(...H,x)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${hn("a_indices",z,z.rank-2,k.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${hn("b_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${G}
      ${N}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${f};${m};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:I}}}),il,al,di,ci,sl,pi,ol,Wn,hi=j(()=>{ae(),le(),de(),Dt(),li(),oi(),il=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,al=(e,t)=>e?`
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
        }`,di=(e,t,n="f32",r,i=!1,s=32,a=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],h=i?u:s,p=i?s:u,f=h/t[0],m=s/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${h/f}>, ${p}>;
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
          ${il(i,r)}
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

          ${al(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ci=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,sl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",pi=(e,t,n="f32",r,i=!1,s=32,a=!1,o=32,u=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],p=i?d:s,f=i?s:d;if(!(f%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],y=p/t[0],w=s/t[1],v=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${ci(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ci(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
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
      ${sl(i)}
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
  var<workgroup> mm_Bsub : array<array<${n}, ${h}>, ${s}>;
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
`},ol=(e,t,n,r,i=!1)=>{let[s,a,o,u]=r,d=Re(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Be(e,d)} {
      var value = ${Be(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${hn("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Be(e,d)} {
      var value = ${Be(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${hn("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Be(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Be(e,d)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Wn=(e,t,n,r,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),d=o.slice(0,-2),h=r?r.slice(0,-2):n.slice(0,-2),p=B.size(h),f=a[a.length-2],m=a[a.length-1],y=o[o.length-1],w=m%4===0&&y%4===0,v=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(y/$[0]/v[0]),Math.ceil(f/$[1]/v[1]),Math.ceil(p/$[2]/v[2])],I=w?4:1,T=[...u,f,m/I],k=T.length,z=[...d,m,y/I],C=z.length,x=[p,f,y/I],O=[{type:6,data:f},{type:6,data:y},{type:6,data:m}];Bt(t,O),O.push(...ne(h,T,z));let N=["rank","rank"],H=e.length>2;H&&(O.push(...ne(e[2].dims)),N.push("rank")),O.push(...ne(x));let G=V=>{let A=h.length,F=Xr("batchDims",e[0].dataType,A,1),K=Re(e[0].dataType),X=q("a",e[0].dataType,k,I),oe=q("b",e[1].dataType,C,I),D=ee("result",e[0].dataType,x.length,I),Z=[X,oe];if(H){let Q=i?I:1;Z.push(q("bias",e[2].dataType,e[2].dims.length,Q))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Nt(t,M);let L=Re(D.type.tensor),W=Ot(t,D.type.value,L),U=ol(I,H,W,[F,X,oe,D],i);return`
  ${V.registerUniforms(M).registerInternalVariables(F).declareVariables(...Z,D)}
  ${U}
  ${w?di(v,$,K,F):pi(v,$,K,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${t.activation};${w};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:s?s(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:O}),getShaderSource:G}}}),ul,ll,Jm=j(()=>{ae(),lt(),de(),Dt(),oi(),Qm(),hi(),ul=(e,t,n,r,i=!1,s,a=4,o=4,u=4,d="f32")=>{let h=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},p=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=e?`
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
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Be(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(a)}
    }
    return resData;`,I=e?t&&r?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Be(a,d)}(0.0);`:r&&n?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Be(a,d)}(0.0);`,T=e?r&&n?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Be(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Be(o,d)}(0.0);`,k=Be(u,d),z=Be(e?a:o,d),C=Be(e?o:a,d),x=Ot(s,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?I:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${nl(i)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ll=(e,t,n,r,i,s,a,o,u)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],p=n[0],f=d?n[2]:n[3],m=d?n[1]:n[2],y=d?n[3]:n[1],w=d&&(h%4===0||h%3===0)&&y%4===0,v=d?y:f*m,$=d?f*m:y,b=[8,8,1],I=r<=8?[4,1,1]:[4,4,1],T=[Math.ceil(v/b[0]/I[0]),Math.ceil($/b[1]/I[1]),Math.ceil(p/b[2]/I[2])];ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let k=w?d&&h%4!==0?3:4:1,z=b[1]*I[1],C=b[0]*I[0],x=Math.max(b[0]*k,b[1]),O=r%z===0,N=i%C===0,H=s%x===0,G=w?[k,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Bt(t,V),V.push(...ne(e[0].dims,e[1].dims));let A=["rank","rank"];a&&(V.push(...ne(e[2].dims)),A.push("rank")),V.push(...ne(n));let F=K=>{let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Nt(t,X);let oe=w?4:1,D=Re(e[0].dataType),Z=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${D}>`:D}) {
        result[flatIndex] = ${w?`vec4<${D}>`:D}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${D}>`:D}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,M=q("x",e[0].dataType,e[0].dims.length,k===3?1:k),L=q("w",e[1].dataType,e[1].dims.length,oe),W=[M,L],U=ee("result",e[0].dataType,n.length,oe);if(a){let Q=q("bias",e[2].dataType,e[2].dims.length,oe);W.push(Q),Z+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${D}>`:D} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${rl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(X).declareVariables(...W,U)}
        ${Z}
        ${ul(d,O,N,H,a,t,G[0],G[1],G[2],D)}
        ${w?di(I,b,D,void 0,!d,x):pi(I,b,D,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${w};${O};${N};${H};${z};${C};${x}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:V}),getShaderSource:F}}}),dl,fi,fn,cl,mi,pl,hl,fl,eg=j(()=>{ae(),lt(),le(),de(),Dt(),oi(),dl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},fi=e=>typeof e=="number"?[e,e,e]:e,fn=(e,t)=>t<=1?e:e+(e-1)*(t-1),cl=(e,t,n,r=1)=>{let i=fn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},mi=(e,t,n,r,i)=>{i==null&&(i=cl(e,t[0],r[0]));let s=[0,0,0,n];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/r[a]+1));return s},pl=(e,t,n,r,i,s,a,o,u,d)=>{let h,p,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=mi([t,n,r,1],[o,u,d],1,[i,s,a],e);p=y[0],f=y[1],m=y[2]}else if(Array.isArray(e)){if(!e.every((w,v,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=mi([t,n,r,1],[o,u,d],1,[i,s,a],e[0]);p=y[0],f=y[1],m=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),f=Math.ceil(n/s),m=Math.ceil(r/a);let y=(p-1)*i+o-t,w=(f-1)*s+u-n,v=(m-1)*a+d-r,$=Math.floor(y/2),b=y-$,I=Math.floor(w/2),T=w-I,k=Math.floor(v/2),z=v-k;h={top:I,bottom:T,left:k,right:z,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:p,outHeight:f,outWidth:m}},hl=(e,t,n,r,i,s=!1,a="channelsLast")=>{let o,u,d,h,p;if(a==="channelsLast")[o,u,d,h,p]=e;else if(a==="channelsFirst")[o,p,u,d,h]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,,m,y,w]=t,[v,$,b]=fi(n),[I,T,k]=fi(r),z=fn(m,I),C=fn(y,T),x=fn(w,k),{padInfo:O,outDepth:N,outHeight:H,outWidth:G}=pl(i,u,d,h,v,$,b,z,C,x),V=s?f*p:f,A=[0,0,0,0,0];return a==="channelsFirst"?A=[o,V,N,H,G]:a==="channelsLast"&&(A=[o,N,H,G,V]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:d,inWidth:h,inChannels:p,outDepth:N,outHeight:H,outWidth:G,outChannels:V,padInfo:O,strideDepth:v,strideHeight:$,strideWidth:b,filterDepth:m,filterHeight:y,filterWidth:w,effectiveFilterDepth:z,effectiveFilterHeight:C,effectiveFilterWidth:x,dilationDepth:I,dilationHeight:T,dilationWidth:k,inShape:e,outShape:A,filterShape:t}},fl=(e,t,n,r,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((v,$)=>$)},d=[Math.ceil(dl(u.x.map(v=>n[v]))/o[0]),1,1];ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let h=1,p=B.size(n),f=[{type:12,data:p},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Bt(t,f),f.push(...ne(e[0].dims,e[1].dims));let m=["rank","rank"],y=e.length===3;y&&(f.push(...ne(e[2].dims)),m.push("rank")),f.push(...ne(n));let w=v=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Nt(t,$);let b=1,I=Re(e[0].dataType),T=q("x",e[0].dataType,e[0].dims.length,h),k=q("W",e[1].dataType,e[1].dims.length,b),z=[T,k],C=ee("result",e[0].dataType,n.length,b),x="";if(y){let H=q("bias",e[2].dataType,e[2].dims.length,b);z.push(H),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${a?te("coords",4,5):te("coords",1,5)}];
        }`}let O=Be(h,I),N=Ot(t,O,I);return`
            ${x}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${v.registerUniforms($).declareVariables(...z,C)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${te("coords",0,T.rank)};
              let d2 = ${a?te("coords",T.rank-1,T.rank):te("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${a?te("coords",1,T.rank):te("coords",2,T.rank)},
              ${a?te("coords",2,T.rank):te("coords",3,T.rank)},
              ${a?te("coords",3,T.rank):te("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?te("uniforms.x_shape",1,T.rank):te("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${a?te("uniforms.x_shape",2,T.rank):te("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${a?te("uniforms.x_shape",3,T.rank):te("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${a?te("uniforms.x_shape",4,T.rank):te("uniforms.x_shape",1,T.rank)};
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
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${h};${y}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:w}}}),ml,gl,tg=j(()=>{ae(),le(),de(),Dt(),ml=(e,t,n,r)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?n[3]:n[1],h=d/t.group,p=u&&h>=4?Ce(d):1,f=B.size(n)/p,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Bt(t,m),m.push(...ne(a,[o[0],o[1],o[2],o[3]/p]));let y=i?["rank","rank","rank"]:["rank","rank"];m.push(...ne([n[0],n[1],n[2],n[3]/p]));let w=v=>{let $=ee("output",e[0].dataType,n.length,p),b=Re($.type.tensor),I=Ot(t,$.type.value,b),T=q("x",e[0].dataType,a.length),k=q("w",e[1].dataType,o.length,p),z=[T,k];i&&z.push(q("b",e[2].dataType,e[2].dims,p));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Nt(t,C);let x=u?`
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
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${v.registerUniforms(C).declareVariables(...z,$)}

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
    ${I}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:w}},gl=(e,t,n,r)=>{let i=e.length>2,s=Ce(n[3]),a=Ce(n[2]),o=B.size(n)/s/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[n[0],n[1],n[2],n[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Bt(t,p),p.push(...ne(u,d,h));let f=(a-1)*t.strides[1]+d[1],m=y=>{let w=ee("output",e[0].dataType,h.length,s),v=Re(w.type.tensor),$=Ot(t,w.type.value,v),b=q("x",e[0].dataType,u.length,s),I=q("w",e[1].dataType,d.length,s),T=[b,I];i&&T.push(q("b",e[2].dataType,e[2].dims,s));let k=i?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Nt(t,z),`
  ${y.registerUniforms(z).declareVariables(...T,w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    var values: array<${w.type.value}, ${a}>;
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
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}}}),yl,Gn,_l,Vn,gi,yi,wl,bl,_i,ng=j(()=>{le(),Jm(),eg(),hi(),tg(),Dt(),li(),_t(),yl=(e,t,n,r,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,d=t[0],h=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),p=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-h[m]+i[m])/i[m]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},Gn=[2,3,1,0],_l=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Vn=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let s=2;s<t[1].dims.length;++s)n[s-2]===0&&(n[s-2]=t[1].dims[s]);let r=e.pads.slice();Bn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},gi=e=>{let t=si(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:s,kernelShape:a,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},yi=(e,t,n,r)=>{let i=n.format==="NHWC",s=yl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let z=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(We(t[1],Gn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),z.push(C)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(gl(z,n,s,r),{inputs:z}):e.compute(ml(z,n,s,r),{inputs:z});return}let a=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],h=t[1].dims[2],p=t[1].dims[3],f=s[i?1:2],m=s[i?2:3],y=s[i?3:1],w=i&&h===o&&p===u&&n.pads[0]===0&&n.pads[1]===0;if(w||h===1&&p===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let z=s[0],C,x,O,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(We(t[1],Gn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),w){let A=o*u*d;C=t[0].reshape([1,z,A]),x=V.reshape([1,A,y]),O=[1,z,y]}else C=t[0].reshape([z,o*u,d]),x=V.reshape([1,d,y]),O=[z,f*m,y];N.push(C),N.push(x)}else C=t[0].reshape([z,d,o*u]),x=t[1].reshape([1,y,d]),O=[z,y,f*m],N.push(x),N.push(C);a&&N.push(t[2]);let H=O[2],G=N[0].dims[N[0].dims.length-1];H<8&&G<8?e.compute(ui(N,n,s,O,i,r),{inputs:N}):e.compute(Wn(N,n,s,O,i,r),{inputs:N});return}let v=!0,$=e.kernelCustomData.wT??e.compute(We(t[1],Gn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];a&&b.push(t[2]);let I=i?f*m:y,T=i?y:f*m,k=h*p*d;e.compute(ll(b,n,s,I,T,k,a,v,r),{inputs:b})},wl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Vn({...t,pads:i,strides:s,dilations:a,kernelShape:o},r);yi(e,r,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},bl=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Vn(n,t),s=n.autoPad==="NOTSET"?n.pads:n.autoPad,a=hl(t[0].dims,t[1].dims,n.strides,n.dilations,s,!1,r);e.compute(fl(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],r))},_i=(e,t)=>{if(_l(e.inputs,t),e.inputs[0].dims.length===3)wl(e,t);else if(e.inputs[0].dims.length===5)bl(e,e.inputs,t);else{let n=Vn(t,e.inputs);yi(e,e.inputs,n)}}}),$l,rg=j(()=>{ae(),lt(),le(),de(),$l=(e,t,n)=>{let r=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,d=o[3],h=s?Ce(u):1,p=s&&d===1&&u>=4,f=p?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-f,y=s?Ce(d):1,w=s?d===1?h:y:1,v=B.size(i)/y,$=[Math.ceil(v/64),1,1];ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let b=["rank","rank"],I=[t.strides[0],t.strides[1]],T=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],k=[t.dilations[0],t.dilations[1]],z=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],C=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:v},{type:12,data:I},{type:12,data:T},{type:12,data:k},{type:12,data:z},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ne(e[0].dims,e[1].dims)];r&&(x.push(...ne(e[2].dims)),b.push("rank")),x.push(...ne(i));let O=N=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Re(e[0].dataType),V=s?1:2,A=s?2:3,F=s?3:1,K=q("W",e[1].dataType,e[1].dims.length,w),X=q("Dy",e[0].dataType,e[0].dims.length,h),oe=[X,K];r&&oe.push(q("bias",e[2].dataType,[i[F]].length,y));let D=ee("result",e[0].dataType,i.length,y),Z=()=>{let W="";if(p)h===4?W+=`
        let xValue = ${X.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?W+=`
          dotProd = dotProd + dot(vec4<${G}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(W+=`
          dotProd = dotProd + dot(vec4<${G}>(${X.getByOffset("x_offset")}, ${X.getByOffset("x_offset + 1u")}, ${X.getByOffset("x_offset + 2u")}, ${X.getByOffset("x_offset + 3u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(W+=`
                  let xValue = ${s?X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):X.get("batch","inputChannel","idyR","idyC")};
        `,h===1)W+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let U=0;U<h;U++)W+=`
            let wValue${U} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${U}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${U}] * wValue${U};`;return W},M=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let W="";if(h===1){W+="dotProd = dotProd";for(let U=0;U<m;U++)W+=`
            + ${X.getByOffset(`x_offset + ${U}`)} * ${K.getByOffset(`w_offset + ${U}`)}`;W+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);W+=`
          let xValue = ${X.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return W},L=`
            let outputIndices = ${D.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${D.indicesGet("outputIndices",0)};
            let d1 = ${D.indicesGet("outputIndices",F)};
            let r = ${D.indicesGet("outputIndices",V)};
            let c = ${D.indicesGet("outputIndices",A)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${D.type.value}(0.0);
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
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${X.indicesToOffset(`${X.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:h}) {
                  ${Z()}
                  inputChannel = inputChannel + ${p?4:h};
                }
                ${M()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${y}]`:""};
            ${D.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(H).declareVariables(...oe,D)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${w}${y}${p}${m}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:O}}}),vl,xl,Sl,wi,Tl,Il,bi,kl,El,ig=j(()=>{rg(),Dt(),_t(),vl=(e,t,n,r,i,s)=>(e-1)*t+n+(r-1)*i+1-s,xl=(e,t,n,r,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=s,n[i]=e-s):t==="SAME_LOWER"&&(n[r]=e-s,n[i]=s)},Sl=(e,t,n,r,i,s,a,o,u,d)=>{let h=e.length-2,p=d.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let y=0,w=e.length-h-(o?1:0);y<h;++y,++w){let v=e[w],$=p?v*a[y]:d[y],b=vl(v,a[y],s[y],t[w],n[y],$);xl(b,r,s,y,y+h),p&&d.push(a[y]*(v-1)+u[y]+(t[w]-1)*n[y]+1-s[y]-s[y+h])}d.splice(0,0,f),d.splice(o?3:1,0,m)},wi=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,f)=>p*f,1)===0){n.length=0;for(let p=2;p<t[1].dims.length;++p)n.push(t[1].dims[p])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}Sl(o,n,u,e.autoPad,e.group,i,d,r,a,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:i,outputPadding:a,outputShape:s,dilations:u,strides:d}),h},Tl=e=>{let t=si(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),h=e.outputPadding,p=e.outputShape;return{autoPad:r,format:n,dilations:i,group:s,kernelShape:a,outputPadding:h,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Il=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},bi=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute($l(s,n,r),{inputs:s})},kl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=wi({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:u},r);bi(e,r,d,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},El=(e,t)=>{if(Il(e.inputs,t),e.inputs[0].dims.length===3)kl(e,t);else{let n=wi(t,e.inputs);bi(e,e.inputs,n)}}}),Cl,zl,Ml,ag=j(()=>{ae(),le(),ze(),de(),Cl=(e,t,n,r)=>{let i=B.size(t),s=t.length,a=q("input",e,s),o=ee("output",e,s),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=B.normalizeAxis(u,s),h=p=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,m=te("uniforms.input_shape","uniforms.axis",s),y=r.reverse?f+(r.exclusive?" + 1":""):"0",w=r.reverse?m:f+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ne(t,t)]}),getShaderSource:h}},zl=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Cl(r,n,i,t),{inputs:[0]})},Ml=e=>{let t=e.exclusive===1,n=e.reverse===1;return be({exclusive:t,reverse:n})}}),Al,Rl,Ol,Bl,Nl,sg=j(()=>{ae(),le(),ze(),de(),Al=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Rl=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let s=0;s<t;++s)i.push(n.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Ol=(e,t)=>{let n,r,i,s,a,o,u=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";u?([n,r,i,s]=e.dims,a=h?[n,r,i,d,d,s/d**2]:[n,r,i,s/d**2,d,d],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=h?[n,d,d,s/d**2,r,i]:[n,s/d**2,d,d,r,i],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),f=p.dims.length,m=e.dataType,y=q("a",m,f),w=ee("output",m,f),v=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Rl(o,f,y,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=u?[n,r*d,i*d,s/d**2]:[n,s/d**2,r*d,i*d],I=B.size(b),T=p.dims,k=B.sortBasedOnPerm(T,o);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ne(T,k)]}},getShaderSource:v}},Bl=(e,t)=>{Al(e.inputs),e.compute(Ol(e.inputs[0],t))},Nl=e=>be({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Fn,mn,$i,Dl,Ul,Pl,Ll,vi,ql,Wl,Gl,og=j(()=>{ae(),le(),ze(),de(),Fn="[a-zA-Z]|\\.\\.\\.",mn="("+Fn+")+",$i="^"+mn+"$",Dl="("+mn+",)*"+mn,Ul="^"+Dl+"$",Pl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Ll=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Ul)))throw new Error("Invalid LHS term");if(n.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp($i)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,o,a);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!r.match(RegExp(mn)))throw new Error("Invalid RHS");(i=r.match(RegExp(Fn,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,s=!1,a=[],o=0;if(!e.match(RegExp($i))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Fn,"g")),d=new Pl(r);return u==null||u.forEach((h,p)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<a.length;m++){let y=String.fromCharCode(48+m);d.addSymbol(y,p+m),this.addSymbol(y,n[o++],r)}}else d.addSymbol(h,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[o++],r)}),d}},vi=e=>e+"_max",ql=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,h)=>q(`input${h}`,t,d)),s=B.size(r),a=ee("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),u=d=>{let h=[],p="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",y=[],w=[],v=[],$=[],b=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((T,k)=>{var z;if(n.rhs.symbolToIndices.has(k)){let C=(z=n.rhs.symbolToIndices.get(k))==null?void 0:z[0];C!==void 0&&n.lhs.forEach((x,O)=>{if(T.inputIndices.includes(O)){let N=x.symbolToIndices.get(k);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(H=>{h.push(`${i[O].indicesSet(`input${O}Indices`,H,a.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,x)=>{if(T.inputIndices.includes(x)){let O=C.symbolToIndices.get(k);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(N=>{y.push(`${i[x].indicesSet(`input${x}Indices`,N,`${k}`)}`)}),$.push(`prod *= ${i[x].getByIndices(`input${x}Indices`)};`)}}),w.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${vi(k)}; ${k}++) {`),v.push("}")});let I=b?[...h,`let sum = ${i.map((T,k)=>T.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...h,f,...w,...y,p,...$,m,...v];return`
            ${d.registerUniforms(o.map(T=>({name:`${vi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((T,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>n.symbolToInfo.has(p)).map(p=>{var f;return{type:12,data:((f=n.symbolToInfo.get(p))==null?void 0:f.dimValue)||0}});d.push({type:12,data:s});let h=e.map((p,f)=>[...ne(p)]).reduce((p,f)=>p.concat(f),d);return h.push(...ne(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:u}},Wl=(e,t)=>{let n=new Ll(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(ql(i,e.inputs[0].dataType,n,r))},Gl=e=>{let t=e.equation.replace(/\s+/g,"");return be({equation:t})}}),Vl,xi,Fl,Hl,jl,ug=j(()=>{ae(),le(),de(),Vl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},xi=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Fl=(e,t)=>e.length>t.length?xi(e,t):xi(t,e),Hl=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Fl(t,n),i=e[0].dataType,s=i===9||B.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(B.size(r)/o),d=p=>{let f=q("input",i,t.length,a),m=ee("output",i,r.length,o),y;if(i===9){let w=(v,$,b="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${f.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${v}[${$}] = ${b}(${f.getByOffset(`index${$}`)}[component${$}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${a}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},h=[{type:12,data:u},...ne(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},jl=e=>{Vl(e.inputs),e.compute(Hl(e.inputs),{inputs:[0]})}}),Kl,Xl,lg=j(()=>{ae(),le(),de(),ai(),Kl=e=>{let t=e[0].dataType,n=B.size(e[0].dims),r=B.size(e[1].dims),i=r%4===0,s=a=>{let o=q("x",t,[1],4),u=q("bias",t,[1],4),d=ee("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(h).declareVariables(o,u,d)}

    ${ri(Ne(t))}

    ${a.mainStart(Yt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ii("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Yt/4)}})}},Xl=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?Cu(e):e.compute(Kl(e.inputs))}}),Yl,Zl,Ql,Jl,dg=j(()=>{ae(),le(),ze(),de(),Yl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Zl=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=B.normalizeAxis(t.axis,i),a=n.slice(0);a.splice(s,1,...r);let o=n[s],u=e[0].dataType===9?4:1,d=Math.ceil(B.size(a)/u),h=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...ne(e[0].dims,e[1].dims,a)],p=f=>{let m=q("data",e[0].dataType,e[0].dims.length,u),y=q("inputIndices",e[1].dataType,e[1].dims.length),w=ee("output",e[0].dataType,a.length,u),v=b=>{let I=r.length,T=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let k=0;k<I;k++)T+=`${I>1?`indicesIndices${b}[${k}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${k}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${y.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${m.type.indices};
        `;for(let k=0,z=0;k<i;k++)k===s?(T+=`${i>1?`dataIndices${b}[${k}]`:`dataIndices${b}`} = u32(idx${b});`,z+=I):(T+=`${i>1?`dataIndices${b}[${k}]`:`dataIndices${b}`} = ${a.length>1?`outputIndices${b}[${z}]`:`outputIndices${b}`};`,z++);return T},$;if(e[0].dataType===9){let b=(I,T,k="")=>`
          let outputIndices${T} = ${w.offsetToIndices(`outputOffset + ${T}u`)};
          ${v(T)};
          let offset${T} = ${m.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${I}[${T}] = ${k}(${m.getByOffset(`index${T}`)}[component${T}]);
        `;$=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${m.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,y,w)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:p}},Ql=e=>be({axis:e.axis}),Jl=(e,t)=>{let n=e.inputs;Yl(n),e.compute(Zl(e.inputs,t))}}),ed,td,nd,cg=j(()=>{ae(),le(),de(),ed=(e,t,n,r,i,s,a,o,u)=>{let d=[{type:12,data:s},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:o},{type:12,data:u}],h=[s];d.push(...ne(t.dims,h));let p=f=>{let m=q("indices_data",t.dataType,t.dims.length),y=ee("input_slice_offsets_data",12,1,1),w=[m,y],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(v).declareVariables(...w)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},td=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,s=n[1].dims,a=s[s.length-1],o=B.sizeToDimension(s,s.length-1),u=B.sizeFromDimension(r,t.batchDims+a),d=B.sizeToDimension(r,t.batchDims),h=B.sizeFromDimension(r,t.batchDims),p=o/d,f=new Array(a),m=u;for(let T=0;T<a;++T)f[a-1-T]=m,m*=r[t.batchDims+a-1-T];let y=ed(e,n[1],f,t.batchDims,r,o,p,h,a),w=t.batchDims+a;if(w>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=s.slice(0,-1).concat(r.slice(w)),$=B.size(v),b=[{type:12,data:$},{type:12,data:u},...ne(n[0].dims,y.dims,v)],I=T=>{let k=q("data",n[0].dataType,n[0].dims.length),z=q("slice_offsets",12,y.dims.length),C=ee("output",n[0].dataType,v.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,z,C)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:I},{inputs:[n[0],y]})},nd=e=>({batchDims:e.batch_dims,cacheKey:""})}),rd,id,ad,sd,pg=j(()=>{ae(),le(),ze(),de(),rd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},id=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,s=B.normalizeAxis(t.gatherAxis,i),a=B.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(s,1,...r);let u=B.size(o),d=e[2].dataType,h=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ne(...e.map((m,y)=>m.dims),o)],f=m=>{let y=q("data",e[0].dataType,e[0].dims.length),w=q("inputIndices",e[1].dataType,e[1].dims.length),v=q("scales",e[2].dataType,e[2].dims.length),$=e.length>3?q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=ee("output",d,o.length),I=[y,w,v];$&&I.push($);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(T).declareVariables(...I,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[s]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ne(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,y)=>y!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},ad=(e,t)=>{let n=e.inputs;rd(n,t),e.compute(id(e.inputs,t))},sd=e=>be({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),od,ud,ld,dd,hg=j(()=>{ae(),le(),ze(),de(),od=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ud=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,s=e[1].dims,a=e[1].dataType,o=B.normalizeAxis(t.axis,i),u=n[o],d=s.slice(0),h=B.size(d),p=q("input",r,i),f=q("indicesInput",a,s.length),m=ee("output",r,d.length),y=[{type:12,data:h},{type:6,data:u},{type:12,data:o}];return y.push(...ne(n,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,f,m)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},ld=e=>be({axis:e.axis}),dd=(e,t)=>{let n=e.inputs;od(n),e.compute(ud(e.inputs,t))}}),cd,pd,hd,fd,fg=j(()=>{ae(),le(),de(),cd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},pd=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,s,a]=vs.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(s/u),h=Math.ceil(i/u),p=!0,f=B.size(o),m=[{type:12,data:p?d:f},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(m.push(...ne(e[2].dims)),y.push("rank")),m.push(...ne(o));let w=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",T=q("a",e[0].dataType,e[0].dims),k=q("b",e[1].dataType,e[1].dims),z=T.type.value,C=null,x=[T,k];e.length===3&&(C=q("c",e[2].dataType,e[2].dims.length),x.push(C));let O=ee("output",e[0].dataType,o.length);x.push(O);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(N).declareVariables(...x)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${I}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${z}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},v=$=>{let b=q("a",e[0].dataType,e[0].dims),I=q("b",e[1].dataType,e[1].dims),T=null,k=[b,I];e.length===3&&(T=q("c",e[2].dataType,e[2].dims.length),k.push(T));let z=ee("output",e[0].dataType,o.length);k.push(z);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",O="";t.transA&&t.transB?(O=`
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
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
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:m}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:w}},hd=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},fd=(e,t)=>{cd(e.inputs),e.compute(pd(e.inputs,t))}}),nt,dt,Ut,Pt,md,gd,yd,_d,wd,bd,$d,vd,xd,Sd,mg=j(()=>{ae(),le(),ze(),de(),[nt,dt,Ut,Pt]=[0,1,2,3],md=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},gd=`
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
`,yd=e=>`
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
`,_d=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,wd=e=>`
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
`,bd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${nt}] = batch;
     indices[${dt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ut}] = u32(r);
            indices[${Pt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Ut}] = u32(clamp(r, 0, H - 1));
          indices[${Pt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ut}] = gs_reflect(r, border[1], border[3]);
          indices[${Pt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,$d=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${nt}], indices[${dt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${nt}], indices[${dt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${nt}], indices[${dt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${nt}], indices[${dt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${nt}], indices[${dt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${nt}], indices[${dt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,vd=(e,t)=>{let n=q("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=q("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[nt,dt,Ut,Pt]=[0,3,1,2]);let a=ee("output",e[0].dataType,s.length),o=n.type.value,u=B.size(s),d=[{type:12,data:u},...ne(e[0].dims,r,s)],h=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(n,i,a)}
  ${gd}
  ${yd(o)}
  ${_d(t)}
  ${wd(t)}
  ${bd(n,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ut}]);
      let W_in = i32(uniforms.x_shape[${Pt}]);

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
      var grid_indices = vec3<u32>(indices[${nt}], indices[${Ut}], indices[${Pt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${$d(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let f=B.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:h}},xd=(e,t)=>{md(e.inputs),e.compute(vd(e.inputs,t))},Sd=e=>be({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),De,Td,Id,Si,kd,gn,Ed,Cd=j(()=>{ae(),le(),ze(),Vr(),ti(),de(),_t(),De=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Td=(e,t)=>{let n=e[0],r=De(e,1),i=De(e,2),s=De(e,3),a=De(e,4),o=De(e,5),u=De(e,6),d=De(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],p=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=p,y=0,w=0,v=Math.floor(f/t.numHeads);if(u&&d&&B.size(u.dims)&&B.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=u.dims[2],w=u.dims[2]}else if(u&&B.size(u.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(r&&B.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(s&&B.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+m,I=0;if(a&&B.size(a.dims)>0){I=8;let C=a.dims;throw C.length===1?C[0]===h?I=1:C[0]===3*h+2&&(I=3):C.length===2&&C[0]===h&&C[1]===b&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,k=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],T=!0}}let z=!1;if(a&&B.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:v,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:z,passPastInKv:T,qkvFormat:$}},Id=e=>be({...e}),Si=be({perm:[0,2,1,3]}),kd=(e,t,n,r,i,s,a)=>{let o=[r,i,s],u=B.size(o),d=[{type:12,data:u},{type:12,data:a},{type:12,data:s}],h=p=>{let f=ee("qkv_with_bias",t.dataType,o),m=q("qkv",t.dataType,o),y=q("bias",n.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(w).declareVariables(m,y,f)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},gn=(e,t,n,r,i,s,a,o)=>{let u=s;if(a&&B.size(a.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=kd(e,s,a,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(We(u,Si.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,r,n,i])),n===1||r===1?u:e.compute(We(u,Si.perm),{inputs:[u],outputs:[-1]})[0]},Ed=(e,t)=>{let n=Td(e.inputs,t),r=e.inputs[0],i=De(e.inputs,1),s=De(e.inputs,2),a=De(e.inputs,3),o=De(e.inputs,4),u=De(e.inputs,5),d=De(e.inputs,6),h=De(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,f=gn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,a,0);if(p)return cn(e,f,i,s,o,void 0,d,h,u,n);if(!i||!s)throw new Error("key and value must be provided");let m=gn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,a,n.hiddenSize),y=gn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,s,a,2*n.hiddenSize);cn(e,f,m,y,o,void 0,d,h,u,n)}}),zd,Md,Ad,Rd,Ti,Od,Bd,Nd=j(()=>{ae(),le(),ze(),de(),zd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Md=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),be({numOutputs:r,axis:t.axis,splitSizes:n})},Ad=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${te("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Rd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ti=(e,t)=>{let n=e[0].dims,r=B.size(n),i=e[0].dataType,s=B.normalizeAxis(t.axis,n.length),a=new Array(t.numOutputs),o=q("input",i,n.length),u=new Array(t.numOutputs),d=[],h=[],p=0,f=[{type:12,data:r}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],u[y]=p;let w=n.slice();w[s]=t.splitSizes[y],h.push(w),a[y]=ee(`output${y}`,i,w.length),d.push({dims:h[y],dataType:e[0].dataType})}f.push({type:12,data:u},...ne(n,...h));let m=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${Ad(u.length)}
  ${Rd(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${te("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Od=(e,t)=>{zd(e.inputs);let n=e.inputs.length===1?t:Md(e.inputs,t);e.compute(Ti(e.inputs,n),{inputs:[0]})},Bd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return be({axis:t,numOutputs:r,splitSizes:n})}}),Dd,Hn,Ud,Pd=j(()=>{ae(),le(),ze(),de(),Dd=(e,t)=>{let[n,r,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!B.areEqual(r.dims,[])&&!B.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!B.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],d=n.dims[n.dims.length-2],h=i.dims[0],p=B.sizeFromDimension(n.dims,1)/d,f=o===0?i.dims[1]*2:p/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Hn=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,h=e[2].dims[1],p=i===0?h*2:d/r,f=new Array(a,u,d/p,p-h),m=B.computeStrides(f),y=[{type:1,data:s},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...ne(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=v=>{let $=q("input",e[0].dataType,e[0].dims.length),b=q("position_ids",e[1].dataType,e[1].dims.length),I=q("cos_cache",e[2].dataType,e[2].dims.length),T=q("sin_cache",e[3].dataType,e[3].dims.length),k=ee("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${v.declareVariables($,b,I,T,k)}

        ${v.mainStart(Yt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",ee("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${$.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:be({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/Yt)},programUniforms:y})}},Ud=(e,t)=>{Dd(e.inputs,t),e.compute(Hn(e.inputs,t))}}),Ld,qd,Ii,Wd,Gd,gg=j(()=>{ze(),ae(),ti(),Cd(),Nd(),_t(),Pd(),de(),Ld=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],d=n.dims[1],h=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],p=d,f=0,m=!r||r.dims.length===0,y=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=y*t.numHeads);let w=s&&s.dims.length!==0,v=a&&a.dims.length!==0;if(w&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&v){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(w||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,I=!1,T=t.kvNumHeads?y*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],I=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=k.dims.reduce((C,x)=>C*x,1);if(z!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${z}.`);for(let C=0;C<k.dims.length;C++)if(k.dims[C]!==1&&k.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${k.dims[C]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:y,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:$}},qd=be({perm:[0,2,1,3]}),Ii=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(We(r,qd.perm),{inputs:[r],outputs:[-1]})[0]),r},Wd=(e,t,n,r)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=h=>{let p=q("seq_lens",n.dataType,n.dims),f=q("total_seq_lens",r.dataType,r.dims),m=ee("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(y).declareVariables(p,f,m)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},Gd=(e,t)=>{var T;let n=Ld(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,p=be({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[f,m,y]=!i&&!s?e.compute(Ti([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,s],w,v;if(t.doRotary){let k=e.compute(Wd(n.batchSize,n.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],z=e.inputs[7],C=e.inputs[8],x=be({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[f,k,z,C],N=[-1];w=e.compute(Hn(O,x),{inputs:O,outputs:N})[0],O.splice(0,1,m);let H=be({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});v=e.compute(Hn(O,H),{inputs:O,outputs:N})[0]}let $=gn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?w:f,void 0,0),b=Ii(e,t.doRotary?v:m,n),I=Ii(e,y,n);cn(e,$,b,I,void 0,void 0,a,o,void 0,n,u,d)}}),ki,Vd,Fd,Hd,yg=j(()=>{ae(),le(),_t(),de(),ki=(e,t,n,r,i,s,a,o)=>{let u=Ce(s),d=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,p=i*a,f=64;p===1&&(f=256);let m=[i,a,s/u],y=[i,a,2],w=["rank","type","type"],v=[];v.push(...ne(m,y));let $=b=>{let I=q("x",t.dataType,3,u),T=q("scale",n.dataType,n.dims),k=q("bias",r.dataType,r.dims),z=ee("output",1,3,2),C=[I,T,k,z];return`
  var<workgroup> workgroup_shared : array<${h}, ${f}>;
  const workgroup_size = ${f}u;
  ${b.declareVariables(...C)}
  ${b.mainStart(f)}
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
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${yt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${yt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:v}),getShaderSource:$},{inputs:[t,n,r],outputs:[-1]})[0]},Vd=(e,t,n)=>{let r=t[0].dims,i=r,s=2,a=r[0],o=r[1],u=B.sizeFromDimension(r,s),d=Ce(u),h=B.size(i)/d,p=ki(e,t[0],t[1],t[2],a,u,o,n.epsilon),f=[a,o,u/d],m=[a,o],y=["type","none"],w=v=>{let $=q("x",t[0].dataType,f.length,d),b=q("scale_shift",1,m.length,2),I=ee("output",t[0].dataType,f.length,d),T=[$,b,I];return`
  ${v.registerUniform("output_size","u32").declareVariables(...T)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ne(f,m,f)]}),getShaderSource:w},{inputs:[t[0],p]})},Fd=(e,t,n)=>{let r=t[0].dims,i=r,s=r[0],a=r[r.length-1],o=B.sizeFromDimension(r,1)/a,u=Ce(a),d=B.size(i)/u,h=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],p=["type","type"],f=!1,m=[0,r.length-1];for(let $=0;$<r.length-2;$++)f=f||r[$+1]!==1,m.push($+1);f=f&&r[r.length-1]!==1;let y=f?e.compute(We(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},($,b)=>r[m[b]])),w=ki(e,y,t[1],t[2],s,o,a,n.epsilon),v=$=>{let b=Re(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,T=C=>{let x=C===0?"x":"y",O=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${b}(${O}(scale.${x}))`;case 2:return`vec2<${b}>(${O}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${b}>(${O}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=q("input",t[0].dataType,t[0].dims,u),z=ee("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:v},{inputs:[t[0],w]})},Hd=(e,t)=>{t.format==="NHWC"?Fd(e,e.inputs,t):Vd(e,e.inputs,t)}}),jd,Kd,Xd,_g=j(()=>{ae(),le(),de(),jd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Kd=(e,t,n)=>{let r=t.simplified,i=e[0].dims,s=e[1],a=!r&&e[2],o=i,u=B.normalizeAxis(t.axis,i.length),d=B.sizeToDimension(i,u),h=B.sizeFromDimension(i,u),p=B.size(s.dims),f=a?B.size(a.dims):0;if(p!==h||a&&f!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let y=Ce(h),w=["type","type"],v=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/y)},{type:1,data:t.epsilon}];a&&w.push("type");let $=n>1,b=n>2,I=k=>{let z=Re(e[0].dataType),C=[q("x",e[0].dataType,e[0].dims,y),q("scale",s.dataType,s.dims,y)];a&&C.push(q("bias",a.dataType,a.dims,y)),C.push(ee("output",e[0].dataType,o,y)),$&&C.push(ee("mean_data_output",1,m)),b&&C.push(ee("inv_std_output",1,m));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(x).declareVariables(...C)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Kr("f32",y)};
    var mean_square_vector = ${Kr("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Zt(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${yt("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${yt("mean_square_vector",y)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Zt(z,y,"x[j + offset]")};
      let f32scale = ${Zt(z,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Zt(z,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:o,dataType:e[0].dataType}];return $&&T.push({dims:m,dataType:1}),b&&T.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${n};${r}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:v}),getShaderSource:I}},Xd=(e,t)=>{jd(e.inputs),e.compute(Kd(e.inputs,t,e.outputCount))}}),Yd,Zd,wg=j(()=>{le(),li(),hi(),Yd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Zd=e=>{Yd(e.inputs);let t=Xt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(ui(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=B.size(e.inputs[0].dims.slice(0,-2)),a=B.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,r]),u=e.inputs[1].reshape([1,r,n]),d=[1,s,n],h=[o,u];e.compute(Wn(h,{activation:""},t,d),{inputs:h})}else e.compute(Wn(e.inputs,{activation:""},t))}}}),Qd,Jd,ec,tc,nc,bg=j(()=>{ae(),le(),ze(),de(),Qd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!B.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(u)!==d)throw new Error("zeroPoints input size error.")}},Jd=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,a=t.n,o=n.slice(0,r-2),u=B.size(o),d=e[1].dims[2]/4,h=e[0].dataType,p=Ce(t.k),f=Ce(d),m=Ce(a),y=o.concat([i,a]),w=i>1&&a/m%2===0?2:1,v=B.size(y)/m/w,$=64,b=[],I=[u,i,s/p],T=B.convertShape(e[1].dims).slice();T.splice(-1,1,d/f),b.push(...ne(I)),b.push(...ne(T)),b.push(...ne(e[2].dims)),e.length===4&&b.push(...ne(B.convertShape(e[3].dims)));let k=[u,i,a/m];b.push(...ne(k));let z=C=>{let x=I.length,O=q("a",e[0].dataType,x,p),N=q("b",12,T.length,f),H=q("scales",e[2].dataType,e[2].dims.length),G=[O,N,H],V=e.length===4?q("zero_points",12,e[3].dims.length):void 0;V&&G.push(V);let A=k.length,F=ee("output",e[0].dataType,A,m),K=Re(e[0].dataType),X=(()=>{switch(p){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${p}-component is not supported.`)}})(),oe=Math.floor(32/t.bits),D=Math.floor(oe/8),Z=()=>{let W="";for(let U=0;U<D;U++){let Q=U*t.bits*4,pe=Q+t.bits;W+=`
          // reuse a data (pass ${U})
            var input_offset${U>0?U:""} = ${U===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${U>0?U:""}: ${X};
            for (var j${U>0?U:""}: u32 = 0; j${U>0?U:""} < ${8/p}; j${U>0?U:""}++) {
              a_data${U>0?U:""}[j${U>0?U:""}] = ${O.getByOffset(`input_offset${U>0?U:""}`)};
              input_offset${U>0?U:""}++;
            }
          `;for(let ie=0;ie<m*w;ie++)W+=`
            b_value = ${f===1?`b${ie}_data`:`b${ie}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${U*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Q}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${pe}u) & b_mask);`}
            b_quantized_values = ${X}(${Array.from({length:4},(se,$e)=>`${K}(b_value_lower[${$e}]), ${K}(b_value_upper[${$e}])`).join(", ")});
            b_dequantized_values = ${p===1?`${X}(${Array.from({length:8},(se,$e)=>`(b_quantized_values[${$e}] - ${V?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${X}(${Array(8).fill(`${V?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/p},(se,$e)=>`${p===1?`a_data${U>0?U:""}[${$e}] * b_dequantized_values[${$e}]`:`dot(a_data${U>0?U:""}[${$e}], b_dequantized_values[${$e}])`}`).join(" + ")};
          `}return W},M=()=>{let W=`
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
            let zero_point = ${K}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let U=0;U<m*w;U++)W+=`
            let scale${U} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return W},L=()=>{let W=`col_index = col * ${m};`;for(let U=0;U<m*w;U++)W+=`
            let b${U}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return W+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${X};
            var b_dequantized_values: ${X};`,W};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${w*$}>;
        ${C.declareVariables(...G,F)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${M()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${L()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${Z()}
                word_offset += ${oe/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${F.setByIndices(`${F.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${m};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:z}},ec=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],s=t.k,a=t.n,o=n.slice(0,r-2),u=B.size(o),d=e[1].dims[2]/4,h=e[0].dataType,p=Ce(t.k),f=Ce(d),m=o.concat([i,a]),y=128,w=a%8===0?8:a%4===0?4:1,v=y/w,$=Math.floor(32/t.bits),b=v*f*$,I=b/p,T=b/t.blockSize,k=B.size(m)/w,z=[],C=[u,i,s/p],x=B.convertShape(e[1].dims).slice();x.splice(-1,1,d/f),z.push(...ne(C)),z.push(...ne(x)),z.push(...ne(e[2].dims)),e.length===4&&z.push(...ne(B.convertShape(e[3].dims)));let O=[u,i,a];z.push(...ne(O));let N=H=>{let G=C.length,V=q("a",e[0].dataType,G,p),A=q("b",12,x.length,f),F=q("scales",e[2].dataType,e[2].dims.length),K=[V,A,F],X=e.length===4?q("zero_points",12,e[3].dims.length):void 0;X&&K.push(X);let oe=O.length,D=ee("output",e[0].dataType,oe),Z=Re(e[0].dataType),M=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${D.type.value}, ${v}>, ${w}>;
        ${H.declareVariables(...K,D)}
        ${H.mainStart([v,w,1])}
          let output_indices = ${D.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${y})
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
            let block = tile * ${T} + local_id.x;
            ${X?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${F.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let L=Math.floor($/8),W="";for(let U=0;U<L;U++){let Q=U*t.bits*4,pe=Q+t.bits;W+=`
              ${M()}
              {${t.bits===2?`
                let half_word = b_value >> ${U*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Q}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${pe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(ie,se)=>`${Z}(b_value_lower[${se}]), ${Z}(b_value_upper[${se}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ie,se)=>`${`dot(a_data${se}, b_dequantized_values[${se}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return W})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            for (var b = 0u; b < ${v}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${D.setByIndices(`${D.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${v};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:k},programUniforms:z}),getShaderSource:N}},tc=(e,t)=>{Qd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ec(e.inputs,t)):e.compute(Jd(e.inputs,t))},nc=e=>be(e)}),rc,ic,ac,sc,oc,uc,lc,dc,cc,$g=j(()=>{ae(),le(),de(),rc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ic=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${te("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${te("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},ac=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${te("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${te("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${te("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},sc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${te("uniforms.x_shape",i,t)})) {
                  k = i32(${te("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${te("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},oc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${te("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${te("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${te("uniforms.x_shape",i,t)})) {
                  k -= i32(${te("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${te("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},uc=(e,t,n)=>{switch(n.mode){case 0:return ic(e,t,n.pads.length);case 1:return ac(e,t,n.pads.length);case 2:return sc(e,t,n.pads.length);case 3:return oc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},lc=(e,t)=>{let n=B.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=B.size(n),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ne(e[0].dims,n));let o=["rank"],u=d=>{let h=ee("output",e[0].dataType,n.length),p=q("x",e[0].dataType,r.length),f=p.type.value,m=uc(h,r.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(n)/64)},programUniforms:s}),getShaderSource:u}},dc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(n[u]),s[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>s[Number(u)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:r,pads:a}}else return t},cc=(e,t)=>{rc(e.inputs);let n=dc(e.inputs,t);e.compute(lc(e.inputs,n),{inputs:[0]})}}),yn,Ei,Ci,zi,Mi,pc,hc,Ai,Ri,fc,mc,Oi,gc,yc,Bi,_c,wc,bc,$c,vg=j(()=>{Ve(),ae(),le(),de(),yn=e=>{if(Se.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ei=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],d=t.pads.slice();Bn.adjustPoolAttributes(n,i,a,o,u,d);let h=Bn.computePoolOutputShape(n,i,o,u,a,d,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let f=h.slice();return f.push(f.splice(1,1)[0]),[p,r?f:h]},Ci=(e,t)=>{let n=t.format==="NHWC",r=B.size(e),i=B.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],p=!!(d+h);s.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:h}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];f=!!(w+v),s.push({type:12,data:m},{type:12,data:y},{type:12,data:w},{type:12,data:v}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,h)=>d+h);return[s,a,!!u,!1,!1]}},zi=(e,t,n,r,i,s,a,o,u,d,h,p)=>{let f=i.format==="NHWC",m=t.type.value,y=ee("output",t.type.tensor,r);if(i.kernelShape.length<=2){let w="",v="",$="",b=n-(f?2:1);if(h?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let I=n-(f?3:2);p?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${v}
              ${w}
              ${$}
              ${a}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=i.kernelShape.length,v=i.pads.length,$="";return d?$=`
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
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${te("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${te("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${n-w}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${te("uniforms.strides",`j - ${n-w}u`,w)}
                    + offsets[j - ${n-w}u] - ${te("uniforms.pads","j - 2u",v)};
                  ${$}
              }
              ${a}

              output[global_idx] = value;
            }`}},Mi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,pc=e=>`${Mi(e)};${e.countIncludePad}`,hc=e=>`${Mi(e)};${e.storageOrder};${e.dilations}`,Ai=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ri=(e,t,n,r)=>{let[i,s]=Ei(t,r,n),a=q("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,p,f,m,y]=Ci(s,i);h.push(...ne(t.dims,s));let w=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:h}),getShaderSource:v=>zi(v,a,t.dims.length,s.length,i,u,d,0,p,f,m,y)}},fc=e=>{let t=e.count_include_pad!==0,n=Ai(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:pc(r)}},mc=(e,t)=>{yn(e.inputs),e.compute(Ri("AveragePool",e.inputs[0],!1,t))},Oi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},gc=e=>{let t=e.format;return{format:t,...Oi,cacheKey:t}},yc=(e,t)=>{yn(e.inputs),e.compute(Ri("GlobalAveragePool",e.inputs[0],!0,t))},Bi=(e,t,n,r)=>{let[i,s]=Ei(t,r,n),a=`
      value = max(x_val, value);
    `,o="",u=q("x",t.dataType,t.dims.length),d=["rank"],[h,p,f,m,y]=Ci(s,i);return h.push(...ne(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:h}),getShaderSource:w=>zi(w,u,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,f,m,y)}},_c=(e,t)=>{yn(e.inputs),e.compute(Bi("MaxPool",e.inputs[0],!1,t))},wc=e=>{let t=e.storage_order,n=e.dilations,r=Ai(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:hc(i)}},bc=e=>{let t=e.format;return{format:t,...Oi,cacheKey:t}},$c=(e,t)=>{yn(e.inputs),e.compute(Bi("GlobalMaxPool",e.inputs[0],!0,t))}}),vc,xc,Sc,Tc,xg=j(()=>{ae(),le(),ze(),de(),vc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},xc=(e,t)=>{let n=B.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,s=e[0].dims,a=e[1].dataType,o=B.size(s),u=r===3||r===2,d=u?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,p=e.length>2?e[2]:void 0,f=p?u?[Math.ceil(B.size(p.dims)/4)]:p.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,y=m===!1&&h.length===1,w=Ce(o),v=m&&(!u||w===4),$=v?w:1,b=v&&!u?w:1,I=q("input",u?12:r,d.length,b),T=q("scale",a,h.length),k=p?q("zero_point",u?12:r,f.length):void 0,z=ee("output",a,s.length,$),C=[I,T];k&&C.push(k);let x=[d,h];p&&x.push(f);let O=[{type:12,data:o/$},{type:12,data:n},{type:12,data:t.blockSize},...ne(...x,s)],N=H=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(G).declareVariables(...C,z)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${T.getByOffset("0")}`:y?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${k?m?u?`
                let zero_point_input = ${k.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${k.getByOffset("0")}`:y?u?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:O})}},Sc=(e,t)=>{vc(e.inputs,t),e.compute(xc(e.inputs,t))},Tc=e=>be({axis:e.axis,blockSize:e.blockSize})}),Ic,kc,Ec,Sg=j(()=>{Ve(),ae(),de(),Ic=(e,t,n)=>{let r=e===t,i=e<t&&n<0,s=e>t&&n>0;if(r||i||s)throw new Error("Range these inputs' contents are invalid.")},kc=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),s=[i],a=i,o=[{type:12,data:a},{type:r,data:e},{type:r,data:n},...ne(s)],u=d=>{let h=ee("output",r,s.length),p=h.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(f).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},Ec=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Se.webgpu.validateInputContent&&Ic(t,n,r),e.compute(kc(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Cc,zc,Mc,Ac,Tg=j(()=>{ae(),le(),ze(),de(),Cc=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${s}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},zc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,s=1,a=Math.ceil(B.sizeToDimension(r,r.length-1)/s),o=r[r.length-1],u=B.sizeFromDimension(n,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...ne(e[1].dims,e[2].dims,i)],h=p=>{let f=q("indices",e[1].dataType,e[1].dims.length),m=q("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Ds("output",e[0].dataType,i.length):ee("output",e[0].dataType,i.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,m,y)}
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
    ${Cc(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h}},Mc=e=>be({reduction:e.reduction}),Ac=(e,t)=>{e.compute(zc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Rc,Oc,Bc,Ni,Nc,Dc,Uc,Pc,Lc,qc,Wc,Gc,Di,Vc,Fc,Hc,jc,Kc,Xc,Yc,Ig=j(()=>{ae(),le(),ze(),de(),Rc=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Oc=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,s)=>r[i]=e[s]),r},Bc=(e,t,n,r,i,s)=>{let[a,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>r.push(h)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Rc(r,t),t.axes.length>0&&Oc(r,t.axes,d).forEach((h,p)=>r[p]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ni=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Nc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ni("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ni("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Dc=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Uc=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,a)=>{r[s]=i[a],r[a+n]=i[t.length+a]}),r):i},Pc=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(s=>i.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,a)=>i[s]=n[a])}else n.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Lc=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(s=>t[s]=r),n.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},qc=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${te("uniforms.scales","i",r)};
        var roi_low = ${te("uniforms.roi","i",i)};
        var roi_hi = ${te("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${te("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Wc=(e,t,n,r,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${te("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${te("uniforms.roi","i",s)};
          var roi_hi = ${te("uniforms.roi",`i + ${n.length}`,s)};
          var input_shape_i = ${te("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",r.length)};
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
    }`,Gc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${te("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Di=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",Vc=(e,t,n,r,i)=>{let[s,a,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Di(e,u,s,2)}
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
    }`},Fc=(e,t,n,r,i,s,a,o,u,d)=>{let h=n.length===2,[p,f]=h?[0,1]:[2,3],m=e.type.value,y=w=>{let v=w===p?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[w]},
        ${r[w]}, ${n[w]}, ${s[w]}, ${s[w]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${n[w]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${m} = originalIdx + ${m}(i);
          if (${v} < 0 || ${v} >= ${n[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${v} = max(0, min(${v}, ${n[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${v})`)};
          data[i + 1] = ${w===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(p)};
    ${y(f)};
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
    `},Hc=(e,t,n,r,i)=>{let[s,a,o,u,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${n[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Di(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${a}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${u}];
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
    }`},jc=(e,t,n,r,i,s)=>{let a=e.dims,o=Uc(s,t.axes,a.length),u=Pc(a,r,i,t.axes),d=r.slice();r.length===0&&(d=a.map((b,I)=>b===0?1:u[I]/b),t.keepAspectRatioPolicy!=="stretch"&&(u=Lc(a,d,t)));let h=ee("output",e.dataType,u.length),p=q("input",e.dataType,a.length),f=B.size(u),m=a.length===u.length&&a.every((b,I)=>b===u[I]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,v=p.type.value,$=b=>`
      ${m?"":`
      ${Nc(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Gc(p,a)};
              ${Dc(t.nearestMode,n,v)};
              ${Wc(p,h,a,u,d.length,o.length,y)};
              `;case"linear":return`
              ${qc(h,a,u,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Vc(p,h,a,y,w)}`;if(a.length===3||a.length===5)return`${Hc(p,h,a,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Fc(p,h,a,u,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,h)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ne(a,u)]})}},Kc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Xc=(e,t)=>{let n=[],r=[],i=[],s=Kc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Bc(e.inputs,t,s,n,r,i),e.compute(jc(e.inputs[0],t,s,n,r,i),{inputs:[0]})},Yc=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return be({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Zc,Qc,Jc,kg=j(()=>{ae(),le(),de(),Zc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Qc=(e,t,n,r)=>{let i=t.simplified,s=e[0].dims,a=B.size(s),o=s,u=a,d=s.slice(-1)[0],h=r?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,f=e.length>4,m=r&&n>1,y=r&&n>2,w=n>3,v=64,$=Ce(d),b=[{type:12,data:u},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],I=k=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[q("x",e[0].dataType,e[0].dims,$),q("skip",e[1].dataType,e[1].dims,$),q("gamma",e[2].dataType,e[2].dims,$)];p&&C.push(q("beta",e[3].dataType,e[3].dims,$)),f&&C.push(q("bias",e[4].dataType,e[4].dims,$)),C.push(ee("output",e[0].dataType,o,$)),m&&C.push(ee("mean_output",1,h)),y&&C.push(ee("inv_std_output",1,h)),w&&C.push(ee("input_skip_bias_sum",e[0].dataType,o,$));let x=Re(e[0].dataType),O=Re(1,$);return`

      ${k.registerUniforms(z).declareVariables(...C)}
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
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Zt(x,$,"value")};
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
        let mean = ${yt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${yt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:o,dataType:e[0].dataType}];return n>1&&T.push({dims:h,dataType:1}),n>2&&T.push({dims:h,dataType:1}),n>3&&T.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${y};${w}`,inputDependencies:e.map((k,z)=>"type")},getShaderSource:I,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:b})}},Jc=(e,t)=>{Zc(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Qc(e.inputs,t,e.outputCount,!1),{outputs:n})}}),ep,_n,tp,Ui,np,rp,ip,ap,Eg=j(()=>{ae(),le(),ze(),de(),ep=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},_n=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},tp=(e,t)=>{if(e.length>1){let n=_n(e,1),r=_n(e,2),i=_n(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),be({starts:n,ends:r,axes:i})}else return t},Ui=(e,t,n,r,i)=>{let s=e;return e<0&&(s+=n[r[t]]),i[t]<0?Math.max(0,Math.min(s,n[r[t]]-1)):Math.max(0,Math.min(s,n[r[t]]))},np=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${te("uniforms.input_shape","i",n.length)};
            let steps_i = ${te("uniforms.steps","i",n.length)};
            let signs_i = ${te("uniforms.signs","i",n.length)};
            let starts_i = ${te("uniforms.starts","i",n.length)};
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
      }`,rp=(e,t)=>{let n=e[0].dims,r=B.size(n),i=t.axes.length>0?B.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],s=_n(e,4);s.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map(($,b)=>Ui($,b,n,i,s)),o=t.ends.map(($,b)=>Ui($,b,n,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let $=0;$<n.length;++$)i.includes($)||(a.splice($,0,0),o.splice($,0,n[$]),s.splice($,0,1));let u=s.map($=>Math.sign($));s.forEach(($,b,I)=>{if($<0){let T=(o[b]-a[b])/$,k=a[b],z=k+T*s[b];a[b]=z,o[b]=k,I[b]=-$}});let d=n.slice(0);i.forEach(($,b)=>{d[$]=Math.ceil((o[$]-a[$])/s[$])});let h={dims:d,dataType:e[0].dataType},p=ee("output",e[0].dataType,d.length),f=q("input",e[0].dataType,e[0].dims.length),m=B.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],w=[{type:12,data:m},{type:12,data:a},{type:6,data:u},{type:12,data:s},...ne(e[0].dims,d)],v=$=>`
      ${$.registerUniforms(y).declareVariables(f,p)}
        ${np(f,p,n)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:w})}},ip=(e,t)=>{ep(e.inputs,t);let n=tp(e.inputs,t);e.compute(rp(e.inputs,n),{inputs:[0]})},ap=e=>{let t=e.starts,n=e.ends,r=e.axes;return be({starts:t,ends:n,axes:r})}}),sp,op,up,lp,Cg=j(()=>{ae(),le(),ze(),_t(),de(),sp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},op=(e,t)=>{let n=e.inputs[0],r=n.dims,i=B.size(r),s=r.length,a=B.normalizeAxis(t.axis,s),o=a<r.length-1,u,d=[];o?(d=Array.from({length:s},(C,x)=>x),d[a]=s-1,d[s-1]=a,u=e.compute(We(n,d),{inputs:[n],outputs:[-1]})[0]):u=n;let h=u.dims,p=h[s-1],f=i/p,m=Ce(p),y=p/m,w=64;f===1&&(w=256);let v=(C,x)=>x===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:x===2?`max(${C}.x, ${C}.y)`:x===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=q("x",u.dataType,u.dims,m),b=ee("result",u.dataType,u.dims,m),I=$.type.value,T=Re(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,k=C=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables($,b)}
      ${C.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
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
          rowMaxShared = ${I}(${v("threadShared[0]",m)});
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
          rowSumShared = ${I}(${yt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${m};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(We(z,d),{inputs:[z]})},up=(e,t)=>{sp(e.inputs),op(e,t)},lp=e=>be({axis:e.axis})}),Pi,dp,cp,pp,hp,zg=j(()=>{ae(),le(),de(),Pi=e=>Array.from(e.getBigInt64Array(),Number),dp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Pi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},cp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},pp=(e,t)=>{let n=e[0].dims,r=t??Pi(e[1]),i=cp(n,r),s=B.size(i),a=e[0].dataType,o=q("input",a,n.length),u=ee("output",a,i.length),d=h=>`
      const inputShape = ${o.indices(...n)};
      ${h.registerUniform("output_size","u32").declareVariables(o,u)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ne(e[0].dims,i)]}),getShaderSource:d}},hp=e=>{dp(e.inputs),e.compute(pp(e.inputs),{inputs:[0]})}}),fp,mp,gp,Mg=j(()=>{ae(),le(),de(),fp=(e,t,n,r,i)=>{let s=ee("output_data",i,n.length,4),a=q("a_data",t[1].dataType,t[1].dims.length,4),o=q("b_data",t[2].dataType,t[2].dims.length,4),u=q("c_data",t[0].dataType,t[0].dims.length,4),d,h=(p,f,m)=>`select(${f}, ${p}, ${m})`;if(!r)d=s.setByOffset("global_idx",h(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(f,m,y="")=>{let w=`a_data[index_a${m}][component_a${m}]`,v=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${f}[${m}] = ${y}(${h(w,v,$)});
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
      }`},mp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,s=!(B.areEqual(t,n)&&B.areEqual(n,r)),a=t,o=B.size(t);if(s){let d=Xt.calcShape(Xt.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=B.size(a)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>fp(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ne(r,t,n,a)]})}},gp=e=>{e.compute(mp(e.inputs))}}),yp,Ag=j(()=>{Hm(),ti(),jm(),Km(),Xm(),Ym(),Zm(),ng(),ig(),ag(),sg(),og(),ug(),lg(),dg(),cg(),pg(),hg(),fg(),mg(),gg(),yg(),_g(),wg(),bg(),Cd(),$g(),vg(),xg(),Sg(),Tg(),Qr(),Ig(),Pd(),kg(),Eg(),Cg(),Nd(),zg(),_t(),ai(),Mg(),yp=new Map([["Abs",[Zo]],["Acos",[Qo]],["Acosh",[Jo]],["Add",[Lu]],["ArgMax",[No,ei]],["ArgMin",[Bo,ei]],["Asin",[eu]],["Asinh",[tu]],["Atan",[nu]],["Atanh",[ru]],["Attention",[Wo]],["AveragePool",[mc,fc]],["BatchNormalization",[Ho]],["BiasAdd",[Xo]],["BiasSplitGelu",[Du]],["Cast",[au,iu]],["Ceil",[uu]],["Clip",[ou]],["Concat",[el,tl]],["Conv",[_i,gi]],["ConvTranspose",[El,Tl]],["Cos",[lu]],["Cosh",[du]],["CumSum",[zl,Ml]],["DepthToSpace",[Bl,Nl]],["DequantizeLinear",[Sc,Tc]],["Div",[qu]],["Einsum",[Wl,Gl]],["Elu",[cu,pn]],["Equal",[Wu]],["Erf",[pu]],["Exp",[hu]],["Expand",[jl]],["FastGelu",[Xl]],["Floor",[fu]],["FusedConv",[_i,gi]],["Gather",[Jl,Ql]],["GatherElements",[dd,ld]],["GatherBlockQuantized",[ad,sd]],["GatherND",[td,nd]],["Gelu",[mu]],["Gemm",[fd,hd]],["GlobalAveragePool",[yc,gc]],["GlobalMaxPool",[$c,bc]],["Greater",[Hu]],["GreaterOrEqual",[Ku]],["GridSample",[xd,Sd]],["GroupQueryAttention",[Gd]],["HardSigmoid",[xu,vu]],["InstanceNormalization",[Hd]],["LayerNormalization",[Xd]],["LeakyRelu",[gu,pn]],["Less",[ju]],["LessOrEqual",[Xu]],["Log",[Mu]],["MatMul",[Zd]],["MatMulNBits",[tc,nc]],["MaxPool",[_c,wc]],["Mul",[Gu]],["MultiHeadAttention",[Ed,Id]],["Neg",[_u]],["Not",[yu]],["Pad",[cc]],["Pow",[Vu]],["QuickGelu",[Ou,pn]],["Range",[Ec]],["Reciprocal",[wu]],["ReduceMin",[zo]],["ReduceMean",[To]],["ReduceMax",[Co]],["ReduceSum",[Ao]],["ReduceProd",[Mo]],["ReduceL1",[Io]],["ReduceL2",[ko]],["ReduceLogSum",[Oo]],["ReduceLogSumExp",[Eo]],["ReduceSumSquare",[Ro]],["Relu",[bu]],["Resize",[Xc,Yc]],["RotaryEmbedding",[Ud]],["ScatterND",[Ac,Mc]],["Sigmoid",[$u]],["Sin",[Su]],["Sinh",[Tu]],["Slice",[ip,ap]],["SkipLayerNormalization",[Jc]],["Split",[Od,Bd]],["Sqrt",[Iu]],["Softmax",[up,lp]],["Sub",[Fu]],["Tan",[ku]],["Tanh",[Eu]],["ThresholdedRelu",[zu,pn]],["Tile",[hp]],["Transpose",[Fs,Hs]],["Where",[gp]]])}),_p,Rg=j(()=>{Ve(),lt(),de(),_p=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){tt(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),He(e.programInfo.name)}dispose(){}build(e,t){tt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=Ps(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${r.join(`
`)}
${i.additionalImplementations}
${s}`,o=n.createShaderModule({code:a,label:e.name});ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return He(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let s=t*n*r,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),wp={};jt(wp,{WebGpuBackend:()=>xp});var bp,$p,vp,xp,Og=j(()=>{Ve(),ae(),lt(),Ts(),Vm(),Ag(),Rg(),bp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let s=e[r].dims.length;n.push(`${i};${s}`);break}case"dims":{let s=e[r].dims.join(",");n.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},$p=(e,t,n)=>{var i,s;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${bp(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,r},vp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},xp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new vp(a),this.gpuDataManager=Bs(this),this.programManager=new _p(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Br(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;tt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=n[i],a=s.kernelId,o=this.kernels.get(a),u=o.kernelType,d=o.kernelName,h=s.programName,p=s.inputTensorViews,f=s.outputTensorViews,m=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let w=Number(m-this.queryTimeBase),v=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map($=>({dims:$.dims,dataType:ut($.dataType)})),outputsMetadata:f.map($=>({dims:$.dims,dataType:ut($.dataType)})),kernelId:a,kernelType:u,kernelName:d,programName:h,startTime:w,endTime:v});else{let $="";p.forEach((I,T)=>{$+=`input[${T}]: [${I.dims}] | ${ut(I.dataType)}, `});let b="";f.forEach((I,T)=>{b+=`output[${T}]: [${I.dims}] | ${ut(I.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${d}|${h}" ${$}${b}start time: ${w} ns, execution time: ${v-w} ns`)}Cn("GPU",`${h}::${m}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),He()}run(e,t,n,r,i,s){tt(e.name);let a=[];for(let b=0;b<t.length;++b){let I=t[b].data;if(I===0)continue;let T=this.gpuDataManager.get(I);if(!T)throw new Error(`no GPU data for input: ${I}`);a.push(T)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),h=n.length===0?o.map((b,I)=>I):n;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let p=[],f=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(h[b])||h[b]<-3||h[b]>=s)throw new Error(`Invalid output index: ${h[b]}`);if(h[b]===-3)continue;let I=h[b]===-1,T=h[b]===-2,k=I||T?i(o[b].dataType,o[b].dims):r(h[b],o[b].dataType,o[b].dims);if(p.push(k),k.data===0)continue;let z=this.gpuDataManager.get(k.data);if(!z)throw new Error(`no GPU data for output: ${k.data}`);if(I&&this.temporaryData.push(z),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(z)}f.push(z)}if(a.length!==t.length||f.length!==p.length){if(f.length===0)return He(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let b=0,I=[];d.forEach(C=>{let x=typeof C.data=="number"?[C.data]:C.data;if(x.length===0)return;let O=C.type===10?2:4,N,H;C.type===10?(H=x.length>4?16:x.length>2?8:x.length*O,N=x.length>4?16:O*x.length):(H=x.length<=2?x.length*O:16,N=16),b=Math.ceil(b/H)*H,I.push(b);let G=C.type===10?8:4;b+=x.length>4?Math.ceil(x.length/G)*N:x.length*O});let T=16;b=Math.ceil(b/T)*T;let k=new ArrayBuffer(b);d.forEach((C,x)=>{let O=I[x],N=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(k,O,N.length).set(N);else if(C.type===12)new Uint32Array(k,O,N.length).set(N);else if(C.type===10)new Uint16Array(k,O,N.length).set(N);else if(C.type===1)new Float32Array(k,O,N.length).set(N);else throw new Error(`Unsupported uniform type: ${ut(C.type)}`)});let z=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,k,0,b),this.gpuDataManager.release(z.id),m={offset:0,size:b,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(u),w=y[1]===1&&y[2]===1,v=$p(e,t,w),$=this.programManager.getArtifact(v);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(v,$),ge("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let I=d[b],T=I.type,k=typeof I.data=="number"?1:I.data.length,[z,C]=$.uniformVariablesInfo[b];if(T!==z||k!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${z} with size ${C}, got type ${T} with size ${k} in program "${$.programInfo.name}".`)}}if(ge("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,a,f,y,m),He(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=yp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,s=r.kernelName,a=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ge("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{u&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(n,r,s);return i.set(t,[a,n]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await jr(this,e,t);return Nr(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Sp={};jt(Sp,{init:()=>Ip});var jn,Tp,Ip,Bg=j(()=>{ae(),lt(),le(),Gm(),jn=class bm{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new bm(this.module,this.dataType,this.data,t)}},Tp=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,s));let a=Number(e.getValue(r*i++,s));this.outputCount=Number(e.getValue(r*i++,s)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,s));let o=[];for(let u=0;u<a;u++){let d=Number(e.getValue(r*i++,s)),h=Number(e.getValue(r*i++,"*")),p=Number(e.getValue(r*i++,s)),f=[];for(let m=0;m<p;m++)f.push(Number(e.getValue(r*i++,s)));o.push(new jn(e,d,h,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let n=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new jn(this.module,u,this.output(o,d),d),s=(o,u)=>{let d=Rt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let h=d>0?this.backend.gpuDataManager.create(d).id:0;return new jn(this.module,o,h,u)};return this.backend.run(e,n,r,i,s,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+r*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Ip=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Og(),rn(wp)).WebGpuBackend,a=new s;await a.initialize(n,r),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,d,h=!1)=>{if(h)ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),a.memcpy(Number(o),Number(u));else{ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(u),p)}},async(o,u,d)=>{ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>a.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,d,h)=>{ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new Tp(t,a,Number(u));return a.computeKernel(Number(o),p,h)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Ms(n);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,u,d,h)=>s.ensureTensor(a,o,u,d,h),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!n.trace])}}}),kp,Li,qi,wt,Ep,Wi,Kn,Gi,Vi,Fi,Hi,ji,Ki,Cp=j(()=>{Ve(),Lm(),qm(),ae(),zt(),zr(),ms(),kp=(e,t)=>{Te()._OrtInit(e,t)!==0&&ve("Can't initialize onnxruntime.")},Li=async e=>{kp(e.wasm.numThreads,On(e.logLevel))},qi=async(e,t)=>{var r,i;(i=(r=Te()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(Bg(),rn(Sp)).init;t==="webgpu"&&await s("webgpu",Te(),e,n),t==="webnn"&&await s("webnn",Te(),e)}},wt=new Map,Ep=e=>{let t=Te(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ve("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+r,s))]}finally{t.stackRestore(n)}},Wi=(e,t)=>{let n=Te(),r=n.stackSave(),i=0;try{let s=n.PTR_SIZE,a=n.stackAlloc(2*s);n._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ve("Can't get session input/output metadata.");let o=Number(n.getValue(a,"*"));i=Number(n.getValue(a+s,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let d=n.HEAPU32[i/4+1],h=[];for(let p=0;p<d;p++){let f=Number(n.getValue(i+8+p*s,"*"));h.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(p+d)*s,"*")))}return[o,u,h]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Kn=e=>{let t=Te(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Gi=async(e,t)=>{var p,f,m,y;let n,r,i=Te();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Kn(e);let s=0,a=0,o=0,u=[],d=[],h=[];try{if([a,u]=await fs(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let x=[];for(let O of t.externalData){let N=typeof O=="string"?O:O.path;x.push(Or(typeof O=="string"?O:O.data).then(H=>{i.mountExternalData(N,H)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof x!="string"){let O=x,N=O==null?void 0:O.context,H=O==null?void 0:O.gpuDevice,G=O==null?void 0:O.deviceType,V=O==null?void 0:O.powerPreference;N?i.currentContext=N:H?i.currentContext=await i.webnnCreateMLContext(H):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(n,r,a),(p=i.webgpuOnCreateSession)==null||p.call(i,s),s===0&&ve("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[w,v]=Ep(s),$=!!(t!=null&&t.enableGraphCapture),b=[],I=[],T=[],k=[],z=[];for(let x=0;x<w;x++){let[O,N,H]=Wi(s,x);O===0&&ve("Can't get an input name."),d.push(O);let G=i.UTF8ToString(O);b.push(G),T.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:ut(N),shape:H})}for(let x=0;x<v;x++){let[O,N,H]=Wi(s,x+w);O===0&&ve("Can't get an output name."),h.push(O);let G=i.UTF8ToString(O);I.push(G),k.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:ut(N),shape:H});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){z.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[G])??"cpu",A=i.webnnIsGraphOutput;if(V==="cpu"&&A&&A(s,G)){z.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if($&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);z.push(V)}}let C=null;return z.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&ve("Can't create IO binding."),C={handle:o,outputPreferredLocations:z,outputPreferredLocationsEncoded:z.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>Rr(x))}),wt.set(s,[s,d,h,C,$,!1]),[s,b,I,T,k]}catch(w){throw d.forEach(v=>i._OrtFree(v)),h.forEach(v=>i._OrtFree(v)),o!==0&&i._OrtReleaseBinding(o)!==0&&ve("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ve("Can't release session."),w}finally{i._free(n),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ve("Can't release session options."),u.forEach(w=>i._free(w)),(y=i.unmountExternalData)==null||y.call(i)}},Vi=e=>{var u,d,h;let t=Te(),n=wt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,s,a,o]=n;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&ve("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ve("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&ve("Can't release session."),wt.delete(e)},Fi=async(e,t,n,r,i,s,a=!1)=>{if(!e){t.push(0);return}let o=Te(),u=o.PTR_SIZE,d=e[0],h=e[1],p=e[3],f=p,m,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let $=e[2].gpuBuffer;y=Rt(At(d),h);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=b(r,s,$,y)}}else if(p==="ml-tensor"){let $=e[2].mlTensor;y=Rt(At(d),h);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=b(r,$,At(d),h)}else{let $=e[2];if(Array.isArray($)){y=u*$.length,m=o._malloc(y),n.push(m);for(let b=0;b<$.length;b++){if(typeof $[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(m+b*u,je($[b],n),"*")}}else{let b=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&b&&I){let T=o.UTF8ToString(i);if(b(r,T)||I(r,T)){let k=At(d);y=Rt(k,h),f="ml-tensor";let z=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!z||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await z(r,k,h);C(x,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=x}else y=$.byteLength,m=o._malloc(y),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),m)}else y=$.byteLength,m=o._malloc(y),n.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),m)}}let w=o.stackSave(),v=o.stackAlloc(4*h.length);try{h.forEach((b,I)=>o.setValue(v+I*u,b,u===4?"i32":"i64"));let $=o._OrtCreateTensor(At(d),m,y,v,h.length,Rr(f));$===0&&ve(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push($)}finally{o.stackRestore(w)}},Hi=async(e,t,n,r,i,s)=>{var G,V,A,F;let a=Te(),o=a.PTR_SIZE,u=wt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],h=u[1],p=u[2],f=u[3],m=u[4],y=u[5],w=t.length,v=r.length,$=0,b=[],I=[],T=[],k=[],z=[],C=a.stackSave(),x=a.stackAlloc(w*o),O=a.stackAlloc(w*o),N=a.stackAlloc(v*o),H=a.stackAlloc(v*o);try{[$,b]=ls(s),Et("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)await Fi(n[D],I,k,e,h[t[D]],t[D],m);for(let D=0;D<v;D++)await Fi(i[D],T,k,e,p[r[D]],w+r[D],m);Ct("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)a.setValue(x+D*o,I[D],"*"),a.setValue(O+D*o,h[t[D]],"*");for(let D=0;D<v;D++)a.setValue(N+D*o,T[D],"*"),a.setValue(H+D*o,p[r[D]],"*");if(f&&!y){let{handle:D,outputPreferredLocations:Z,outputPreferredLocationsEncoded:M}=f;if(h.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${h.length}).`);Et("wasm bindInputsOutputs");for(let L=0;L<w;L++){let W=t[L];await a._OrtBindInput(D,h[W],I[L])!==0&&ve(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<v;L++){let W=r[L];(G=i[L])!=null&&G[3]?(z.push(T[L]),a._OrtBindOutput(D,p[W],T[L],0)!==0&&ve(`Can't bind pre-allocated output[${L}] for session=${e}.`)):a._OrtBindOutput(D,p[W],0,M[W])!==0&&ve(`Can't bind output[${L}] to ${Z[L]} for session=${e}.`)}Ct("wasm bindInputsOutputs"),wt.set(e,[d,h,p,f,m,!0])}(V=a.jsepOnRunStart)==null||V.call(a,d),(A=a.webnnOnRunStart)==null||A.call(a,d);let K;f?K=await a._OrtRunWithBinding(d,f.handle,v,N,$):K=await a._OrtRun(d,O,x,w,H,v,N,$),K!==0&&ve("failed to call OrtRun().");let X=[],oe=[];Et("wasm ProcessOutputTensor");for(let D=0;D<v;D++){let Z=Number(a.getValue(N+D*o,"*"));if(Z===T[D]||z.includes(T[D])){X.push(i[D]),Z!==T[D]&&a._OrtReleaseTensor(Z)!==0&&ve("Can't release tensor.");continue}let M=a.stackSave(),L=a.stackAlloc(4*o),W=!1,U,Q=0;try{a._OrtGetTensorData(Z,L,L+o,L+2*o,L+3*o)!==0&&ve(`Can't access output tensor data on index ${D}.`);let pe=o===4?"i32":"i64",ie=Number(a.getValue(L,pe));Q=a.getValue(L+o,"*");let se=a.getValue(L+o*2,"*"),$e=Number(a.getValue(L+o*3,pe)),ye=[];for(let ue=0;ue<$e;ue++)ye.push(Number(a.getValue(se+ue*o,pe)));a._OrtFree(se)!==0&&ve("Can't free memory for tensor dims.");let Ee=ye.reduce((ue,re)=>ue*re,1);U=ut(ie);let Me=f==null?void 0:f.outputPreferredLocations[r[D]];if(U==="string"){if(Me==="gpu-buffer"||Me==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ue=[];for(let re=0;re<Ee;re++){let Ie=a.getValue(Q+re*o,"*"),Je=a.getValue(Q+(re+1)*o,"*"),ht=re===Ee-1?void 0:Je-Ie;ue.push(a.UTF8ToString(Ie,ht))}X.push([U,ye,ue,"cpu"])}else if(Me==="gpu-buffer"&&Ee>0){let ue=a.jsepGetBuffer;if(!ue)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let re=ue(Q),Ie=Rt(ie,Ee);if(Ie===void 0||!Mr(U))throw new Error(`Unsupported data type: ${U}`);W=!0,X.push([U,ye,{gpuBuffer:re,download:a.jsepCreateDownloader(re,Ie,U),dispose:()=>{a._OrtReleaseTensor(Z)!==0&&ve("Can't release tensor.")}},"gpu-buffer"])}else if(Me==="ml-tensor"&&Ee>0){let ue=a.webnnEnsureTensor,re=a.webnnIsGraphInputOutputTypeSupported;if(!ue||!re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Rt(ie,Ee)===void 0||!Ar(U))throw new Error(`Unsupported data type: ${U}`);if(!re(e,U,!1))throw new Error(`preferredLocation "ml-tensor" for ${U} output is not supported by current WebNN Context.`);let Ie=await ue(e,Q,ie,ye,!1);W=!0,X.push([U,ye,{mlTensor:Ie,download:a.webnnCreateMLTensorDownloader(Q,U),dispose:()=>{a.webnnReleaseTensorId(Q),a._OrtReleaseTensor(Z)}},"ml-tensor"])}else if(Me==="ml-tensor-cpu-output"&&Ee>0){let ue=a.webnnCreateMLTensorDownloader(Q,U)(),re=X.length;W=!0,oe.push((async()=>{let Ie=[re,await ue];return a.webnnReleaseTensorId(Q),a._OrtReleaseTensor(Z),Ie})()),X.push([U,ye,[],"cpu"])}else{let ue=Rn(U),re=new ue(Ee);new Uint8Array(re.buffer,re.byteOffset,re.byteLength).set(a.HEAPU8.subarray(Q,Q+re.byteLength)),X.push([U,ye,re,"cpu"])}}finally{a.stackRestore(M),U==="string"&&Q&&a._free(Q),W||a._OrtReleaseTensor(Z)}}f&&!m&&(a._OrtClearBoundOutputs(f.handle)!==0&&ve("Can't clear bound outputs."),wt.set(e,[d,h,p,f,m,!1]));for(let[D,Z]of await Promise.all(oe))X[D][2]=Z;return Ct("wasm ProcessOutputTensor"),X}finally{(F=a.webnnOnRunEnd)==null||F.call(a,d),a.stackRestore(C),I.forEach(K=>a._OrtReleaseTensor(K)),T.forEach(K=>a._OrtReleaseTensor(K)),k.forEach(K=>a._free(K)),$!==0&&a._OrtReleaseRunOptions($),b.forEach(K=>a._free(K))}},ji=e=>{let t=Te(),n=wt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ve("Can't get an profile file name."),t._OrtFree(i)},Ki=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),bt,Ue,Qt,wn,bn,Xn,Xi,Yn,Lt,qt,zp,Mp,Ap,Rp,Op,Bp,Np,Dp,Up=j(()=>{Ve(),Cp(),zt(),Ir(),bt=()=>!!Se.wasm.proxy&&typeof document<"u",Qt=!1,wn=!1,bn=!1,Yn=new Map,Lt=(e,t)=>{let n=Yn.get(e);n?n.push(t):Yn.set(e,[t])},qt=()=>{if(Qt||!wn||bn||!Ue)throw new Error("worker not ready")},zp=e=>{switch(e.data.type){case"init-wasm":Qt=!1,e.data.err?(bn=!0,Xi[1](e.data.err)):(wn=!0,Xi[0]()),Xn&&(URL.revokeObjectURL(Xn),Xn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Yn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Mp=async()=>{if(!wn){if(Qt)throw new Error("multiple calls to 'initWasm()' detected.");if(bn)throw new Error("previous call to 'initWasm()' failed.");if(Qt=!0,bt())return new Promise((e,t)=>{Ue==null||Ue.terminate(),is().then(([n,r])=>{try{Ue=r,Ue.onerror=s=>t(s),Ue.onmessage=zp,Xi=[e,t];let i={type:"init-wasm",in:Se};!i.in.wasm.wasmPaths&&(n||vr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),Ue.postMessage(i),Xn=n}catch(i){t(i)}},t)});try{await Cr(Se.wasm),await Li(Se),wn=!0}catch(e){throw bn=!0,e}finally{Qt=!1}}},Ap=async e=>{if(bt())return qt(),new Promise((t,n)=>{Lt("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Se}};Ue.postMessage(r)});await qi(Se,e)},Rp=async e=>bt()?(qt(),new Promise((t,n)=>{Lt("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};Ue.postMessage(r,[e.buffer])})):Kn(e),Op=async(e,t)=>{if(bt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return qt(),new Promise((n,r)=>{Lt("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ue.postMessage(i,s)})}else return Gi(e,t)},Bp=async e=>{if(bt())return qt(),new Promise((t,n)=>{Lt("release",[t,n]);let r={type:"release",in:e};Ue.postMessage(r)});Vi(e)},Np=async(e,t,n,r,i,s)=>{if(bt()){if(n.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return qt(),new Promise((a,o)=>{Lt("run",[a,o]);let u=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:s}};Ue.postMessage(d,Ki(u))})}else return Hi(e,t,n,r,i,s)},Dp=async e=>{if(bt())return qt(),new Promise((t,n)=>{Lt("end-profiling",[t,n]);let r={type:"end-profiling",in:e};Ue.postMessage(r)});ji(e)}}),Yi,Pp,Lp,Ng=j(()=>{Ve(),Up(),ae(),_r(),ms(),Yi=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Pp=e=>{switch(e[3]){case"cpu":return new Le(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Mr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Le.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Ar(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Le.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Lp=class{async fetchModelAndCopyToWasmMemory(e){return Rp(await Or(e))}async loadModel(e,t){tt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Op(n,t),He()}async dispose(){return Bp(this.sessionId)}async run(e,t,n){tt();let r=[],i=[];Object.entries(e).forEach(p=>{let f=p[0],m=p[1],y=this.inputNames.indexOf(f);if(y===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(y)});let s=[],a=[];Object.entries(t).forEach(p=>{let f=p[0],m=p[1],y=this.outputNames.indexOf(f);if(y===-1)throw new Error(`invalid output '${f}'`);s.push(m),a.push(y)});let o=r.map((p,f)=>Yi(p,()=>`input "${this.inputNames[i[f]]}"`)),u=s.map((p,f)=>p?Yi(p,()=>`output "${this.outputNames[a[f]]}"`):null),d=await Np(this.sessionId,i,o,a,u,n),h={};for(let p=0;p<d.length;p++)h[this.outputNames[a[p]]]=s[p]??Pp(d[p]);return He(),h}startProfiling(){}endProfiling(){Dp(this.sessionId)}}}),qp={};jt(qp,{OnnxruntimeWebAssemblyBackend:()=>Qi,initializeFlags:()=>Zi,wasmBackend:()=>Wp});var Zi,Qi,Wp,Dg=j(()=>{Ve(),Up(),Ng(),Zi=()=>{(typeof Se.wasm.initTimeout!="number"||Se.wasm.initTimeout<0)&&(Se.wasm.initTimeout=0);let e=Se.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Se.wasm.simd=!1),typeof Se.wasm.proxy!="boolean"&&(Se.wasm.proxy=!1),typeof Se.wasm.trace!="boolean"&&(Se.wasm.trace=!1),typeof Se.wasm.numThreads!="number"||!Number.isInteger(Se.wasm.numThreads)||Se.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Se.wasm.numThreads=1;else{let t=typeof navigator>"u"?vm("node:os").cpus().length:navigator.hardwareConcurrency;Se.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Qi=class{async init(e){Zi(),await Mp(),await Ap(e)}async createInferenceSessionHandler(e,t){let n=new Lp;return await n.loadModel(e,t),n}},Wp=new Qi});Ve(),Ve(),Ve();var Ug="1.27.0";{let e=(Dg(),rn(qp)).wasmBackend;Kt("webgpu",e,5),Kt("webnn",e,5),Kt("cpu",e,10),Kt("wasm",e,10)}Object.defineProperty(Se.versions,"web",{value:Ug,enumerable:!0});/**
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
 */const Pg=114;function Lg(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),s=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-s)/2),resizedWidth:i,resizedHeight:s}}function qg(e,t,n){const{width:r,height:i,channels:s,data:a}=e,o=new Uint8Array(t*n*3),u=r/t,d=i/n;for(let h=0;h<n;h++){const p=(h+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,f+1),y=Math.max(0,Math.min(1,p-f));for(let w=0;w<t;w++){const v=(w+.5)*u-.5,$=Math.max(0,Math.min(r-1,Math.floor(v))),b=Math.min(r-1,$+1),I=Math.max(0,Math.min(1,v-$)),T=(f*r+$)*s,k=(f*r+b)*s,z=(m*r+$)*s,C=(m*r+b)*s,x=(h*t+w)*3;for(let O=0;O<3;O++){const N=a[T+O]*(1-I)+a[k+O]*I,H=a[z+O]*(1-I)+a[C+O]*I;o[x+O]=Math.min(255,Math.max(0,Math.round(N*(1-y)+H*y)))}}}return o}function Wg(e,t){const n=Lg(e.width,e.height,t),r=qg(e,n.resizedWidth,n.resizedHeight),i=t*t,s=new Float32Array(3*i).fill(Pg/255);for(let a=0;a<n.resizedHeight;a++){const o=(a+n.padY)*t+n.padX,u=a*n.resizedWidth;for(let d=0;d<n.resizedWidth;d++){const h=(u+d)*3,p=o+d;s[p]=r[h]/255,s[i+p]=r[h+1]/255,s[2*i+p]=r[h+2]/255}}return{tensor:s,params:n}}function Gg(e,t,n,r){const i=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const o=e[a*6],u=e[a*6+1],d=e[a*6+2],h=e[a*6+3],p=e[a*6+4],f=e[a*6+5];if(p<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const y=(o-t.padX)/t.scale,w=(u-t.padY)/t.scale,v=(d-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(y),Math.trunc(w),Math.trunc(v-y),Math.trunc($-w)],boxFloat:[y,w,v-y,$-w]})}return i}function $n(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Gp(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function Vp(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((a,o)=>a-o),r=t/100*(n.length-1),i=Math.floor(r),s=Math.ceil(r);return i===s?n[i]:n[i]*(s-r)+n[s]*(r-i)}const Vg=.6,Fg=.8;function Fp(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<n)continue;const o=(e[s*6]-t.padX)/t.scale,u=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,h=(e[s*6+3]-t.padY)/t.scale,p=$n((o+d)/2),f=$n((u+h)/2),m=$n((d-o+(h-u))/4);m>=1&&r.push({cx:p,cy:f,r:m})}return r}function Hg(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(Vg*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function jg(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=Fg*(n.r+r.r))&&t.push(n);return t}function Kg(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Gp(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),s=Math.floor(r.cy/t);return i!==s?i-s:n.cx-r.cx})}function Hp(e,t,n){const r=Fp(e,t,n);return r.length===0?[]:Kg(jg(Hg(r)))}function Xg(e,t,n){return Fp(e,t,n)}function jp(e,t,n){const r=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<n||r.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return r}const Kp=["brown","grey","blue","green","yellow","red","purple"],Yg={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Xp(e,t,n){return Gg(e,t,n,Kp.length).map(r=>{const i=Kp[r.classIndex];return{color:i,family:Yg[i],box:r.box,confidence:r.confidence}})}const Zg=8,Qg=.8,Yp=1.25;function Jg(e){if(e.length<Zg)return[];const t=[],n=[];for(const a of e){const[,,o,u]=a.box;o>u*Yp?t.push(a):u>o*Yp&&n.push(a)}const[r,i,s]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<Qg*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${s} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const ct={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function vn(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),s=r-i,a=r===0?0:Math.round(255*s/r);if(s===0)return{h:0,s:a,v:r};let o;return r===e?o=60*(t-n)/s:r===t?o=120+60*(n-e)/s:o=240+60*(e-t)/s,o<0&&(o+=360),{h:Math.round(o/2),s:a,v:r}}const e0=.42,t0=22,n0=43,r0=120,i0=1.5,a0=.72,s0=110,Zp=3;function xn(e,t,n){const{width:r,height:i,channels:s,data:a}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),d=Math.trunc(Math.min(r,i)*e0);if(d<1)return 0;let h=0;for(let p=0;p<i;p++)for(let f=0;f<r;f++){if((f-o)**2+(p-u)**2>d*d)continue;const m=(p*r+f)*s,y=a[m],w=a[m+1],v=a[m+2];!t&&y>=250&&w>=250&&v>=250||(n(y,w,v),h+=1)}return h}function o0(e){let t=0,n=0,r=0,i=xn(e,!1,(s,a,o)=>{const u=vn(s,a,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=xn(e,!0,(s,a,o)=>{const u=vn(s,a,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function u0(e){let t=0,n=0,r=xn(e,!1,(s,a)=>{t+=s,n+=a});if(r===0&&(r=xn(e,!0,(s,a)=>{t+=s,n+=a})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function l0(e){let t=0;const n=xn(e,!0,(r,i,s)=>{t+=vn(r,i,s).s});return n===0?null:t/n}function d0(e){const t=o0(e);if(t===null||t.s<=t0)return 1;if(t.s>=r0){const n=u0(e);return n!==null&&n>=i0?6:3}return t.s>=n0?3:6}function c0(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return n;const r=e.map(a=>a.r).sort((a,o)=>a-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((a,o)=>e[a].r-e[o].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>s.get(a))}function p0(e,t){const n=[...t];if(e.length<Zp||t.length!==e.length)return n;const r=e.map(a=>l0(a)),i=r.filter(a=>a!==null);if(i.length<Zp)return n;const s=Gp(i);return s<=0||r.forEach((a,o)=>{a!==null&&n[o]!==1&&a<a0*s&&a<s0&&(n[o]=1)}),n}function Qp(e,t){const{cx:n,cy:r,r:i}=t,s=Math.max(0,n-i),a=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),d=Math.max(0,o-s),h=Math.max(0,u-a),p=new Uint8Array(d*h*3);for(let f=0;f<h;f++)for(let m=0;m<d;m++){const y=(f*d+m)*3;if((m+s-n)**2+(f+a-r)**2<=i*i){const v=((f+a)*e.width+(m+s))*e.channels;p[y]=e.data[v],p[y+1]=e.data[v+1],p[y+2]=e.data[v+2]}else p[y]=255,p[y+1]=255,p[y+2]=255}return{width:d,height:h,channels:3,data:p}}function h0(e,t){const n=t.map(s=>Qp(e,s)),r=n.map(s=>d0(s)),i=c0(t,r);return p0(n,i)}function f0(e){const{width:t,height:n,channels:r,data:i}=e,s=new Uint8Array(t*n);for(let a=0,o=0;a<s.length;a++,o+=r)s[a]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:s}}function Jp(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,s=e.height/n;for(let a=0;a<n;a++){const o=a*s,u=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const h=d*i,p=Math.min((d+1)*i,e.width);let f=0,m=0;for(let y=Math.floor(o);y<u;y++){const w=Math.min(y+1,u)-Math.max(y,o);if(!(w<=0))for(let v=Math.floor(h);v<p;v++){const $=Math.min(v+1,p)-Math.max(v,h);$<=0||(f+=e.data[y*e.width+v]*$*w,m+=$*w)}}r[a*t+d]=Math.min(255,Math.max(0,$n(f/m)))}}return{width:t,height:n,data:r}}function m0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const s=255/(n-t[r]),a=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],a[u]=Math.min(255,Math.max(0,$n(o*s)));for(let u=0;u<n;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function g0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const h=a+d,p=s+u;if(!(h<0||h>=t||p<0||p>=n)&&r[p*t+h]===0){o=!1;break}}i[s*t+a]=o&&r[s*t+a]>0?255:0}return{width:t,height:n,data:i}}function y0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const h=a+d,p=s+u;if(h>=0&&h<t&&p>=0&&p<n&&r[p*t+h]>0){o=!0;break}}i[s*t+a]=o?255:0}return{width:t,height:n,data:i}}function Ji(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),s=[],a=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let d=0,h=0;a[h++]=u,i[u]=o;let p=0,f=0,m=0;for(;d<h;){const y=a[d++],w=y%t,v=y/t|0;p+=1,f+=w,m+=v;for(let $=-1;$<=1;$++)for(let b=-1;b<=1;b++){if(b===0&&$===0)continue;const I=w+b,T=v+$;if(I<0||I>=t||T<0||T>=n)continue;const k=T*t+I;r[k]>0&&i[k]===0&&(i[k]=o,a[h++]=k)}}s[o]={area:p,centroidX:f/p,centroidY:m/p},o+=1}return{labels:i,stats:s}}function _0(e,t,n){return eh(Float32Array.from(e.data),e.width,t,n)}function eh(e,t,n,r){const i=new Float32Array(t*t),s=t/2,a=-n*Math.PI/180,o=Math.cos(a),u=Math.sin(a);for(let d=0;d<t;d++)for(let h=0;h<t;h++){const p=h-s,f=d-s,m=o*p-u*f+s,y=u*p+o*f+s,w=Math.floor(m),v=Math.floor(y),$=m-w,b=y-v,I=(z,C)=>z>=0&&z<t&&C>=0&&C<t?e[C*t+z]:r,T=I(w,v)*(1-$)+I(w+1,v)*$,k=I(w,v+1)*(1-$)+I(w+1,v+1)*$;i[d*t+h]=T*(1-b)+k*b}return i}const w0=.9,b0=.34,$0=[.55,.6,.66,.72],v0=22,x0=88,S0=35,Jt=28,ea=4,T0=Array.from({length:15},(e,t)=>-21+t*3),th=[-2,0,2],I0=3,k0=.3;function E0(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function C0(e){let t=e.width,n=-1,r=e.height,i=-1,s=0;for(let w=0;w<e.height;w++)for(let v=0;v<e.width;v++)e.data[w*e.width+v]>0&&(s+=1,t=Math.min(t,v),n=Math.max(n,v),r=Math.min(r,w),i=Math.max(i,w));if(s<8)return null;const a=n-t+1,o=i-r+1,u=Math.max(o,a),d=new Uint8Array(u*u),h=Math.floor((u-a)/2),p=Math.floor((u-o)/2);for(let w=0;w<o;w++)for(let v=0;v<a;v++)d[(w+p)*u+(v+h)]=e.data[(w+r)*e.width+(v+t)];const f=Jt-2*ea,m=Jp({width:u,height:u,data:d},f,f),y=new Float32Array(Jt*Jt);for(let w=0;w<f;w++)for(let v=0;v<f;v++)y[(w+ea)*Jt+(v+ea)]=m.data[w*f+v]>110?1:0;return y}function z0(e,t){const{width:n,height:r,channels:i,data:s}=e,a=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*b0);if(u<4)return null;const d=a-u,h=o-u,p=2*u,f=2*u;if(p<6||f<6)return null;const m=new Int16Array(p*f),y=new Int16Array(p*f),w=new Int16Array(p*f),v=new Uint8Array(p*f),$=[],b=Math.min(p,f)/2;for(let D=0;D<p;D++)for(let Z=0;Z<f;Z++){const M=((D+d)*n+(Z+h))*i,{h:L,s:W,v:U}=vn(s[M],s[M+1],s[M+2]),Q=D*f+Z;m[Q]=L,y[Q]=W,w[Q]=U,Math.sqrt((Z-f/2)**2+(D-p/2)**2)/b<=t&&(v[Q]=1,$.push(U))}if($.length<16)return null;const I=Vp($,55);let T=0,k=0,z=0;const C=D=>m[D]>=v0&&m[D]<=x0&&y[D]>=S0,x=D=>w[D]>=I&&y[D]<=95&&!C(D)&&v[D]===1;for(let D=0;D<p*f;D++)v[D]===1&&(z+=1,w[D]>=130&&!C(D)&&(T+=1),x(D)&&(k+=1));const O=T>.5*z&&k<.15*z,N=new Uint8Array(p*f);if(O){const D=Vp($,45);for(let Z=0;Z<p*f;Z++)N[Z]=v[Z]===1&&w[Z]<=D?255:0}else for(let D=0;D<p*f;D++)N[D]=x(D)?255:0;const H={width:f,height:p,data:N},G=g0(H);let V=Ji(G),A=V;if(V.stats.length<=1&&(V=Ji(H),A=V,V.stats.length<=1))return null;const F=Math.min(p,f)/2;let K=0,X=-1;for(let D=1;D<A.stats.length;D++){const Z=A.stats[D];if(Z===void 0)continue;const M=Math.hypot(Z.centroidX-f/2,Z.centroidY-p/2)/F,L=Z.area*(1-.6*Math.min(M,1));L>X&&(X=L,K=D)}if(K===0)return null;const oe=new Uint8Array(p*f);for(let D=0;D<p*f;D++)oe[D]=A.labels[D]===K?255:0;return C0(y0({width:f,height:p,data:oe}))}function M0(e,t,n,r,i,s){const a=Jt;let o=0,u=0;for(let d=0;d<a;d++){const h=d-s;if(!(h<0||h>=a))for(let p=0;p<a;p++){const f=p-i;if(f<0||f>=a)continue;const m=e[h*a+f];m!==0&&(u+=m,o+=m*n[d*a+p])}}return o/(u+r-o+1e-6)}function A0(e,t){const n=t.reduce((i,s)=>i+s,0);let r=-1;for(const i of T0){const s=i===0?e:eh(e,Jt,i,0),a=s.reduce((o,u)=>o+u,0);for(const o of th)for(const u of th){const d=M0(s,a,t,n,o,u);d>r&&(r=d)}}return r}function R0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const a of $0){const o=z0(e,a);if(o!==null)for(const{label:u,bits:d}of t)n.push([A0(o,d),u])}if(n.length===0)return[null,0];if(n.sort((a,o)=>o[0]-a[0]),n[0][0]<k0)return[null,0];const r=new Map;for(const[a,o]of n.slice(0,I0))r.set(o,(r.get(o)??0)+a);let i=0,s=-1;for(const[a,o]of r)o>s&&(s=o,i=a);return[i,n[0][0]]}const pt=48,O0=320;function B0(e){return["blank",...e.characters," "]}function N0(e,t,n){let r="";const i=[];for(let a=0;a<e.length;a++){const o=e[a];o!==0&&(a>0&&e[a-1]===o||(r+=n[o]??"",i.push(t[a])))}if(i.length===0)return["",0];const s=i.reduce((a,o)=>a+o,0)/i.length;return[r,s]}function D0(e,t){const n=Math.trunc(pt*t),r=e.width/e.height,i=Math.ceil(pt*r)>n?n:Math.ceil(pt*r),s=new Float32Array(3*pt*n),a=pt*n,o=e.width/i,u=e.height/pt;for(let d=0;d<pt;d++){const h=(d+.5)*u-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(h))),f=Math.min(e.height-1,p+1),m=Math.max(0,Math.min(1,h-p));for(let y=0;y<i;y++){const w=(y+.5)*o-.5,v=Math.max(0,Math.min(e.width-1,Math.floor(w))),$=Math.min(e.width-1,v+1),b=Math.max(0,Math.min(1,w-v));for(let I=0;I<3;I++){const T=2-I,k=(p*e.width+v)*e.channels+T,z=(p*e.width+$)*e.channels+T,C=(f*e.width+v)*e.channels+T,x=(f*e.width+$)*e.channels+T,O=e.data[k]*(1-b)+e.data[z]*b,N=e.data[C]*(1-b)+e.data[x]*b,H=O*(1-m)+N*m;s[I*a+d*n+y]=(H/255-.5)/.5}}}return{tensor:s,width:n}}const U0=62,P0=8,L0=5;function ta(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function q0(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),s=new Int32Array(r+1);for(let a=1;a<=n;a++){for(let o=1;o<=r;o++)s[o]=e[a-1]===t[o-1]?i[o-1]+1:Math.max(i[o],s[o-1]);[i,s]=[s,i]}return i[r]}function Zn(e,t){return e.length===0&&t.length===0?100:200*q0(e,t)/(e.length+t.length)}function nh(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return Zn(n(e),n(t))}function W0(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(h=>r.has(h)).sort(),s=[...n].filter(h=>!r.has(h)).sort(),a=[...r].filter(h=>!n.has(h)).sort(),o=i.join(" "),u=[o,s.join(" ")].filter(Boolean).join(" "),d=[o,a.join(" ")].filter(Boolean).join(" ");return o.length>0&&(s.length===0||a.length===0)?100:Math.max(Zn(o,u),Zn(o,d),Zn(u,d))}function G0(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const s of[ta(i),ta(r.name)])if(s)for(const a of[s,s.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),n.push({key:a,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function V0(e,t){const n=ta(e);if(!n||t.length===0)return null;const i=G0(t).map(h=>({...h,score:W0(n,h.key)})).sort((h,p)=>p.score-h.score).slice(0,P0).filter(h=>h.score>=U0);if(i.length===0)return null;const s=i[0].score,a=i.filter(h=>s-h.score<=L0),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],d=[nh(o,u.key),u.score];for(const h of a.slice(1)){const p=[nh(o,h.key),h.score];(p[0]>d[0]||p[0]===d[0]&&p[1]>d[1])&&(u=h,d=p)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const F0=2560,H0=.3,j0=.5,K0=1.6,X0=3,Y0=5;function Z0(e){const t=Math.min(1,F0/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,s=new Float32Array(3*i),a=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const d=(u+.5)*o-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,h+1),f=Math.max(0,Math.min(1,d-h));for(let m=0;m<n;m++){const y=(m+.5)*a-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),v=Math.min(e.width-1,w+1),$=Math.max(0,Math.min(1,y-w));for(let b=0;b<3;b++){const I=2-b,T=(h*e.width+w)*e.channels+I,k=(h*e.width+v)*e.channels+I,z=(p*e.width+w)*e.channels+I,C=(p*e.width+v)*e.channels+I,x=e.data[T]*(1-$)+e.data[k]*$,O=e.data[z]*(1-$)+e.data[C]*$,N=x*(1-f)+O*f;s[b*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:s,width:n,height:r}}function Q0(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const s=i===n-1;for(let a=0;a<t;a++){const o=i*t+a;let u=e[o];if(a+1<t&&e[o+1]>u&&(u=e[o+1]),!s){const d=o+t;e[d]>u&&(u=e[d]),a+1<t&&e[d+1]>u&&(u=e[d+1])}r[o]=u}}return r}function J0(e){if(e.length<3)return e;const t=[...e].sort((s,a)=>s[0]-a[0]||s[1]-a[1]),n=(s,a,o)=>(a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0]),r=[];for(const s of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(let s=t.length-1;s>=0;s--){const a=t[s];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return r.pop(),i.pop(),r.concat(i)}function ey(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,s]=e[r],[a,o]=e[(r+1)%e.length],u=a-i,d=o-s,h=Math.hypot(u,d);if(h===0)continue;const p=u/h,f=d/h;let m=1/0,y=-1/0,w=1/0,v=-1/0;for(const[T,k]of e){const z=T*p+k*f,C=-T*f+k*p;z<m&&(m=z),z>y&&(y=z),C<w&&(w=C),C>v&&(v=C)}const $=y-m,b=v-w,I=$*b;if(I<n){n=I;const T=(m+y)/2,k=(w+v)/2;t={cx:T*p-k*f,cy:T*f+k*p,w:$,h:b,angle:Math.atan2(f,p)}}}return t}function ty(e,t,n,r){const i=Math.cos(r.angle),s=Math.sin(r.angle),a=r.w/2,o=r.h/2,u=Math.abs(a*i)+Math.abs(o*s),d=Math.abs(a*s)+Math.abs(o*i),h=Math.max(0,Math.floor(r.cx-u)),p=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-d)),m=Math.min(n-1,Math.ceil(r.cy+d));let y=0,w=0;for(let v=f;v<=m;v++)for(let $=h;$<=p;$++){const b=$-r.cx,I=v-r.cy,T=b*i+I*s,k=-b*s+I*i;Math.abs(T)<=a&&Math.abs(k)<=o&&(y+=e[v*t+$],w+=1)}return w===0?0:y/w}function ny(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,a=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((w,v)=>w[0]-v[0]),[o,u,d,h]=a,[p,f]=o[1]<=u[1]?[o,u]:[u,o],[m,y]=d[1]<=h[1]?[d,h]:[h,d];return[[p[0],p[1]],[m[0],m[1]],[y[0],y[1]],[f[0],f[1]]]}function ry(e,t,n,r){const{width:i,height:s}=t;let a=new Uint8Array(i*s);for(let m=0;m<a.length;m++)a[m]=e[m]>H0?255:0;a=Q0(a,i,s);const o={width:i,height:s,data:a},{labels:u}=Ji(o),d=new Map;for(let m=0;m<s;m++)for(let y=0;y<i;y++){const w=u[m*i+y];if(w===0)continue;let v=d.get(w);v===void 0&&(v=new Map,d.set(w,v));const $=v.get(m);$===void 0?v.set(m,[y,y]):(y<$[0]&&($[0]=y),y>$[1]&&($[1]=y))}const h=n/i,p=r/s,f=[];for(const[m,y]of d){const w=[];for(const[N,[H,G]]of y)w.push([H-.5,N-.5],[H-.5,N+.5],[G+.5,N-.5],[G+.5,N+.5]);const v=ey(J0(w));if(Math.min(v.w,v.h)<X0)continue;const $=ty(e,i,s,v);if($<j0)continue;const b=v.w*v.h*K0/(2*(v.w+v.h)),I={...v,w:v.w+2*b,h:v.h+2*b};if(Math.min(I.w,I.h)<Y0+2)continue;const k=ny(I).map(([N,H])=>[Math.min(n,Math.max(0,Math.round(N*h))),Math.min(r,Math.max(0,Math.round(H*p)))]),z=k.map(N=>N[0]),C=k.map(N=>N[1]),x=Math.min(...z),O=Math.min(...C);f.push({quad:k,x,y:O,width:Math.max(...z)-x,height:Math.max(...C)-O,score:$})}return f.sort((m,y)=>y.score-m.score)}function iy(e,t){const[n,r,i,s]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-s[0],i[1]-s[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(s[0]-n[0],s[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=ay([[0,0],[a,0],[a,o],[0,o]],[n,r,i,s]),d=new Uint8Array(a*o*e.channels);for(let p=0;p<o;p++)for(let f=0;f<a;f++){const m=u[6]*f+u[7]*p+u[8],y=(u[0]*f+u[1]*p+u[2])/m,w=(u[3]*f+u[4]*p+u[5])/m,v=Math.floor(y),$=Math.floor(w),b=y-v,I=w-$,T=Math.max(0,Math.min(e.width-1,v)),k=Math.max(0,Math.min(e.width-1,v+1)),z=Math.max(0,Math.min(e.height-1,$)),C=Math.max(0,Math.min(e.height-1,$+1));for(let x=0;x<e.channels;x++){const O=e.data[(z*e.width+T)*e.channels+x],N=e.data[(z*e.width+k)*e.channels+x],H=e.data[(C*e.width+T)*e.channels+x],G=e.data[(C*e.width+k)*e.channels+x],V=O*(1-b)+N*b,A=H*(1-b)+G*b;d[(p*a+f)*e.channels+x]=Math.round(V*(1-I)+A*I)}}const h={width:a,height:o,channels:e.channels,data:d};return o/a>=1.5?Qn(h,3):h}function ay(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[s,a]=e[i],[o,u]=t[i];n.push([s,a,1,0,0,0,-o*s,-o*a]),r.push(o),n.push([0,0,0,s,a,1,-u*s,-u*a]),r.push(u)}for(let i=0;i<8;i++){let s=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[s][i])&&(s=o);[n[i],n[s]]=[n[s],n[i]],[r[i],r[s]]=[r[s],r[i]];const a=n[i][i];for(let o=i;o<8;o++)n[i][o]/=a;r[i]/=a;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let d=i;d<8;d++)n[o][d]-=u*n[i][d];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Qn(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:s,data:a}=e,o=n%2===0?r:i,u=n%2===0?i:r,d=new Uint8Array(o*u*s);for(let h=0;h<i;h++)for(let p=0;p<r;p++){let f,m;n===1?(f=i-1-h,m=p):n===2?(f=r-1-p,m=i-1-h):(f=h,m=r-1-p);const y=(h*r+p)*s,w=(m*o+f)*s;for(let v=0;v<s;v++)d[w+v]=a[y+v]}return{width:o,height:u,channels:s,data:d}}const sy=5e3,rh=.75,oy=15,uy=1.25,ly=2.4,dy=.003,cy=.85,py=4,ih=2600,ah=2,sh=.3,oh=.1,uh=.012,hy=22,lh=.5,Jn=.12;function en(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let s=0,a=t.width*t.height;s<a;s++)r[s*3]=t.data[s*i],r[s*3+1]=t.data[s*i+1],r[s*3+2]=t.data[s*i+2];return n}function fy(e,t,n,r){const i=r.map(ie=>ie[0]),s=r.map(ie=>ie[1]),a=i.reduce((ie,se)=>ie+se,0)/i.length,o=s.reduce((ie,se)=>ie+se,0)/s.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s));if(u<4)return null;const d=u*py,h=Math.max(0,Math.trunc(a-d)),p=Math.min(n.width,Math.trunc(a+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(n.height,Math.trunc(o+d));if(p-h<8||m-f<8)return null;const y=Math.max(n.width,n.height)<ih?ah:1,w=en(e,n),v=en(e,t),$=new e.Rect(h,f,p-h,m-f),b=w.roi($),I=new e.Mat;y!==1?e.resize(b,I,new e.Size(0,0),y,y,e.INTER_CUBIC):b.copyTo(I);const T=new e.Mat,k=new e.Mat;e.cvtColor(v,T,e.COLOR_RGB2GRAY),e.cvtColor(I,k,e.COLOR_RGB2GRAY);const z=new e.ORB(sy),C=new e.KeyPointVector,x=new e.KeyPointVector,O=new e.Mat,N=new e.Mat,H=new e.Mat,G=[w,v,b,I,T,k,C,x,O,N,H],V=ie=>{for(const se of G)try{se.delete()}catch{}try{z.delete()}catch{}return ie};if(z.detectAndCompute(T,H,C,O),z.detectAndCompute(k,H,x,N),O.rows<8||N.rows<8)return V(null);const A=new e.BFMatcher(e.NORM_HAMMING),F=new e.DMatchVectorVector;A.knnMatch(O,N,F,2);const K=[],X=[];for(let ie=0;ie<F.size();ie++){const se=F.get(ie);if(se.size()===2){const $e=se.get(0),ye=se.get(1);if($e.distance<rh*ye.distance){const Ee=C.get($e.queryIdx).pt,Me=x.get($e.trainIdx).pt;K.push(Ee.x,Ee.y),X.push(Me.x,Me.y)}}}if(F.delete(),A.delete(),K.length/2<8)return V(null);const oe=e.matFromArray(K.length/2,1,e.CV_32FC2,K),D=e.matFromArray(X.length/2,1,e.CV_32FC2,X),Z=new e.Mat,M=e.findHomography(oe,D,e.RANSAC,5,Z);let L=0;for(let ie=0;ie<Z.rows;ie++)L+=Z.data[ie];const W=M.rows===3?[...M.data64F]:null;if(oe.delete(),D.delete(),Z.delete(),M.delete(),W===null||L<oy)return V(null);const U=1/y,Q=[[U,0,h],[0,U,f],[0,0,1]],pe=[0,1,2].map(ie=>[0,1,2].map(se=>Q[ie][0]*W[se]+Q[ie][1]*W[3+se]+Q[ie][2]*W[6+se]));return V({H:pe,inliers:L})}function dh(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[d,h]=e[u],[p,f]=e[(u+1)%4];r+=d*f-p*h}const i=Math.abs(r/2)/(t*n);if(i<dy||i>cy)return!1;const s=e.map((u,d)=>{const h=e[(d+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),a=Math.min(...s);if(a<1)return!1;const o=Math.max(...s)/a;return o>=uy&&o<=ly}function ch(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function ph(e,t,n,r){const i=n.width,s=n.height,a=Math.max(8,Math.trunc(sh*i)),o=i+2*a,u=s+2*a;if(o*u>4e7)return null;const d=r.map(G=>[G[0],G[1],G[2]-a*(G[0]+G[1])+0]);for(let G=0;G<3;G++)d[G][2]=r[G][2]-a*r[G][0]-a*r[G][1];const h=en(e,t),p=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(h,p,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),h.delete(),f.delete();const y=m.data,w=Math.max(4,Math.trunc(a/3)),v=[[],[],[]],$=(G,V)=>{const A=(V*o+G)*3;v[0].push(y[A]),v[1].push(y[A+1]),v[2].push(y[A+2])};for(let G=0;G<u;G++)for(let V=0;V<o;V++)(G<w||G>=u-w||V<w||V>=o-w)&&$(V,G);const b=G=>{G.sort((A,F)=>A-F);const V=G.length>>1;return G.length%2?G[V]:(G[V-1]+G[V])/2},I=[b(v[0]),b(v[1]),b(v[2])],T=(G,V)=>{const A=(V*o+G)*3,F=y[A]-I[0],K=y[A+1]-I[1],X=y[A+2]-I[2];return Math.sqrt(F*F+K*K+X*X)>hy},k=Math.max(6,Math.trunc(oh*i)),z=Math.max(6,Math.trunc(oh*s)),C=Math.max(2,Math.trunc(uh*i)),x=Math.max(2,Math.trunc(uh*s)),O=G=>{let V=0,A=0;for(const F of G)A=F?A+1:0,A>V&&(V=A);return V/Math.max(1,G.length)},N=G=>{let V,A,F,K,X;if(G==="L"?(V=a,A=a+s,F=Math.max(0,a-C-k),K=Math.max(0,a-C),X=!1):G==="R"?(V=a,A=a+s,F=a+i+C,K=Math.min(o,a+i+C+k),X=!1):(V=Math.max(0,a-x-z),A=Math.max(0,a-x),F=a,K=a+i,X=!0),A<=V||K<=F)return 0;const oe=[];if(X)for(let D=F;D<K;D++){let Z=0;for(let M=V;M<A;M++)T(D,M)&&Z++;oe.push(Z/(A-V)>lh)}else for(let D=V;D<A;D++){let Z=0;for(let M=F;M<K;M++)T(M,D)&&Z++;oe.push(Z/(K-F)>lh)}return O(oe)},H={L:N("L"),R:N("R"),T:N("T")};return p.delete(),m.delete(),H}const my=6e3,gy=8,yy=.5,_y=.6;function wy(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<ih?ah:1,s=en(e,t),a=new e.Mat;i!==1?e.resize(s,a,new e.Size(0,0),i,i,e.INTER_CUBIC):s.copyTo(a);const o=new e.Mat;e.cvtColor(a,o,e.COLOR_RGB2GRAY),s.delete(),a.delete();const u=new e.ORB(my),d=new e.Mat,h=new e.KeyPointVector,p=new e.Mat;u.detectAndCompute(o,d,h,p);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(p.rows<8)return f;for(const[y,w]of n){if(r!==void 0&&Date.now()>r)break;const v=en(e,w),$=new e.Mat;e.cvtColor(v,$,e.COLOR_RGB2GRAY);const b=new e.KeyPointVector,I=new e.Mat;u.detectAndCompute($,d,b,I);const T=[v,b,I],k=()=>{for(const pe of T)pe.delete();$.delete()};if(I.rows<8){k();continue}const z=new e.DMatchVectorVector;m.knnMatch(I,p,z,2);const C=[],x=[];for(let pe=0;pe<z.size();pe++){const ie=z.get(pe);if(ie.size()===2){const se=ie.get(0);if(se.distance<rh*ie.get(1).distance){const $e=b.get(se.queryIdx).pt,ye=h.get(se.trainIdx).pt;C.push($e.x,$e.y),x.push(ye.x,ye.y)}}}if(z.delete(),C.length/2<8){k();continue}const O=e.matFromArray(C.length/2,1,e.CV_32FC2,C),N=e.matFromArray(x.length/2,1,e.CV_32FC2,x),H=new e.Mat,G=e.findHomography(O,N,e.RANSAC,5,H);let V=0;for(let pe=0;pe<H.rows;pe++)V+=H.data[pe];const A=G.rows===3?[...G.data64F]:null;if(O.delete(),N.delete(),H.delete(),G.delete(),A===null||V<gy){k();continue}const F=1/i,K=[[F*A[0],F*A[1],F*A[2]],[F*A[3],F*A[4],F*A[5]],[A[6],A[7],A[8]]],X=[[0,0],[w.width,0],[w.width,w.height],[0,w.height]].map(([pe,ie])=>ch(K,pe,ie));if(!dh(X,t.width,t.height)){k();continue}const oe=en(e,t),D=e.matFromArray(3,3,e.CV_64F,K.flat()),Z=new e.Mat;e.warpPerspective(oe,Z,D,new e.Size(w.width,w.height),e.WARP_INVERSE_MAP);const M=new e.Mat;e.cvtColor(Z,M,e.COLOR_RGB2GRAY);const L=new e.Mat;e.matchTemplate(M,$,L,e.TM_CCOEFF_NORMED);const W=L.data32F[0];if(oe.delete(),D.delete(),Z.delete(),M.delete(),L.delete(),W<yy){k();continue}const U=ph(e,t,w,K),Q=U===null?[]:Object.keys(U).filter(pe=>U[pe]>=Jn);f.push({id:y,confidence:Math.max(0,W),footprint:X,built:U!==null&&Math.max(U.L,U.R,U.T)>=Jn,tuckRegion:hh(X,Q)}),k()}}finally{o.delete(),d.delete(),h.delete(),p.delete();try{u.delete(),m.delete()}catch{}}return f}function hh(e,t){if(e.length<4||t.length===0)return null;const n=e.map(w=>[w[0],w[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),s=.5*(r+i),a=sh*s;if(!(a>0))return null;const o=n.reduce((w,v)=>w+v[0],0)/n.length,u=n.reduce((w,v)=>w+v[1],0)/n.length,d={T:[0,1],R:[1,2],L:[0,3]},h=[...n];for(const w of["L","R","T"]){if(!t.includes(w))continue;const[v,$]=d[w],b=n[v],I=n[$];let T=-(I[1]-b[1]),k=I[0]-b[0];const z=(b[0]+I[0])/2,C=(b[1]+I[1])/2;T*(z-o)+k*(C-u)<0&&(T=-T,k=-k);const x=Math.hypot(T,k);x<=1e-6||(T=T/x*a,k=k/x*a,h.push([b[0]+T,b[1]+k],[I[0]+T,I[1]+k]))}const p=h.map(w=>w[0]),f=h.map(w=>w[1]),m=Math.round(Math.min(...p)),y=Math.round(Math.min(...f));return{x:m,y,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...f))-y}}function by(e,t,n,r){const i=fy(e,n,t,r);if(i===null)return null;const a=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([d,h])=>ch(i.H,d,h));if(!dh(a,t.width,t.height))return null;const o=ph(e,t,n,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=Jn);return{built:Math.max(o.L,o.R,o.T)>=Jn,footprint:a,overflow:u,inliers:i.inliers}}const fh=128,$y=.56,vy=15,xy=.58,Sy=70,Ty=50,Iy=.12,ky=.2,Ey=.1,Cy=.17,mh=.15;function zy(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function gh(e,t){const{width:n,height:r,channels:i,data:s}=e,a=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const d=Math.max(0,a-u),h=Math.max(0,o-u),p=Math.min(n,a+u),f=Math.min(r,o+u),m=p-d,y=f-h,w=new Uint8Array(m*y*i);for(let v=0;v<y;v++){const $=((v+h)*n+d)*i;w.set(s.subarray($,$+m*i),v*m*i)}return{width:m,height:y,channels:i,data:w}}function My(e){const t=gh(e,$y),n=f0(t),r=Jp(n,fh,fh);return m0(r)}function Ay(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let s=0,a=0,o=0;for(let u=0;u<n;u++){const d=e[u]-r,h=t[u]-i;s+=d*h,a+=d*d,o+=h*h}return s/(Math.sqrt(a*o)+1e-6)}function Ry(e){const t=new Map([["masonry",0],["strategy",0]]),n=gh(e,xy),{width:r,height:i,channels:s,data:a}=n,o=r*i||1;let u=0,d=0;for(let f=0;f<r*i;f++){const m=f*s,{h:y,s:w,v}=vn(a[m],a[m+1],a[m+2]);w>=Sy&&v>=Ty&&(y>=95&&y<=130&&(u+=1),(y<=8||y>=170)&&(d+=1))}const h=u/o,p=d/o;return h>=Iy&&t.set("masonry",mh*Math.min(1,h/ky)),p>=Ey&&t.set("strategy",mh*Math.min(1,p/Cy)),t}function Oy(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=My(e);let r=0;for(const d of n.data)r+=d;const i=r/n.data.length,s=[];for(let d=0;d<360;d+=vy)s.push(_0(n,d,i));const a=new Map;for(const[d,h]of t){let p=-1/0;for(const f of s){const m=Ay(f,h);m>p&&(p=m)}a.set(d,p)}for(const[d,h]of Ry(e))h>0&&a.has(d)&&a.set(d,a.get(d)+h);let o="",u=-1/0;for(const[d,h]of a)h>u&&(o=d,u=h);return[o,u]}const $t="/7wd-scorer/models/";let yh=!1;const er=new Map;function _h(){var e;yh||(Se.wasm.wasmPaths="/7wd-scorer/ort/",Se.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,yh=!0)}const na=new Set;function By(e){_h();let t=er.get(e);return t===void 0&&(t=on.create(`${$t}${ct[e].onnx}`,{executionProviders:na.has(e)?["wasm"]:["webgpu","wasm"]}),er.set(e,t),t.catch(()=>er.delete(e))),t}let ra=null,ia=null;const Ny=.75,Dy=4,Uy=.65,Py=3e4;let aa=null;function Ly(){return aa===null&&(aa=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),aa}const wh=new Map;function bh(e){let t=wh.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${$t}wonder-refs/${e}.jpg`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),s=new OffscreenCanvas(r.width,r.height).getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),wh.set(e,t)),t}const qy=.6,Wy=12,Gy=45e3;let sa=null;function $h(){return sa===null&&(_h(),sa=(async()=>{try{const[e,t,n,r]=await Promise.all([on.create(`${$t}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),on.create(`${$t}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${$t}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${$t}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:B0(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),sa}async function Vy(e,t){const n=Math.max(O0/pt,t.width/t.height),{tensor:r,width:i}=D0(t,n),s={[e.rec.inputNames[0]]:new Le("float32",r,[1,3,pt,i])},a=(await e.rec.run(s))[e.rec.outputNames[0]],[o,u,d]=a.dims,h=a.data,p=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let y=0,w=-1/0;const v=m*d;for(let $=0;$<d;$++){const b=h[v+$];b>w&&(w=b,y=$)}p[m]=y,f[m]=w}return N0(p,f,e.charset)}async function Fy(e,t){const n=await $h();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+Gy;let s=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){s=!0;break}t(`wonder names: rotation ${a*90}°…`);const o=Qn(e,a),u=Z0(o),d={[n.det.inputNames[0]]:new Le("float32",u.tensor,[1,3,u.height,u.width])},h=(await n.det.run(d))[n.det.outputNames[0]],p=ry(h.data,u,o.width,o.height).slice(0,Wy);console.debug(`[wonders-ocr] rot ${a*90}: ${p.length} det boxes`,p.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of p){if(Date.now()>i){s=!0;break e}const m=iy(o,f.quad);if(m.width<m.height*1.5)continue;const[y,w]=await Vy(n,m);if(console.debug(`[wonders-ocr] rec "${y}" @${w.toFixed(2)}`),w<qy||y.trim().length<Dy)continue;const v=V0(y,n.catalog);if(console.debug("[wonders-ocr] fuzzy",v),v===null||v.confidence<Ny||v.kind!=="wonder")continue;const $=r.get(v.id);($===void 0||v.confidence>$.confidence)&&r.set(v.id,{id:v.id,name:v.name,confidence:v.confidence,nameBox:vh(f,a,e.width,e.height)})}}return{wonders:[...r.values()],aborted:s}}function vh(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const s=(p,f)=>i===1?[f,r-1-p]:i===2?[n-1-p,r-1-f]:[n-1-f,p],a=[s(e.x,e.y),s(e.x+e.width,e.y+e.height)],o=a.map(p=>p[0]),u=a.map(p=>p[1]),d=Math.min(...o),h=Math.min(...u);return{x:d,y:h,width:Math.max(...o)-d,height:Math.max(...u)-h}}function Hy(){return ia===null&&(ia=fetch(`${$t}laurel_gallery.json`).then(async e=>e.ok?E0(await e.json()):[]).catch(()=>[])),ia}function jy(e,t,n,r){return Ky(e,t-r,n-r,2*r,2*r)}function Ky(e,t,n,r,i){const s=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),d=Math.max(0,o-s),h=Math.max(0,u-a),p=new Uint8Array(d*h*3);for(let f=0;f<h;f++)for(let m=0;m<d;m++){const y=((f+a)*e.width+(m+s))*e.channels,w=(f*d+m)*3;p[w]=e.data[y],p[w+1]=e.data[y+1],p[w+2]=e.data[y+2]}return{width:d,height:h,channels:3,data:p}}function Xy(){return ra===null&&(ra=fetch(`${$t}token_templates.json`).then(async e=>e.ok?zy(await e.json()):new Map).catch(()=>new Map)),ra}async function xh(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Wt(e,t){const n=ct[e],{tensor:r,params:i}=Wg(t,n.input),s=async()=>{const a=await By(e),o={[a.inputNames[0]]:new Le("float32",r,[1,3,n.input,n.input])};return{rows:(await a.run(o))[a.outputNames[0]].data,params:i}};try{return await s()}catch(a){if(na.has(e))throw a;return na.add(e),er.delete(e),await s()}}const Yy=6,Zy=2,Qy=5,Jy=2;async function e_(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await xh(e),r=await Wt("banner",n),i=Xp(r.rows,r.params,ct.banner.conf);if(t.banners=i.length,i.length>=Yy)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await Wt("laurel",n),a=jp(s.rows,s.params,ct.laurel.conf);if(t.laurels=a.length,a.length>=Zy)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const o=await Wt("coin",n),u=Hp(o.rows,o.params,ct.coin.conf);return t.coins=u.length,u.length>=Qy?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Jy?{...t,kind:"board",confidence:.4}:t}function t_(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function n_(e,t,n,r){const i={},s=[],a=[],o=[],u=[],d=[];let h=0,p=0,f=0,m=0,y=0;for(const b of e){y+=1;const I=`${t} photo ${y}/${e.length}`;r(`${I}: reading pixels…`);const T=await xh(b);r(`${I}: card banners…`);const k=await Wt("banner",T),z=Xp(k.rows,k.params,ct.banner.conf);r(`${I}: progress tokens…`);const C=await Wt("token",T),x=await Xy(),O=[];for(const M of Xg(C.rows,C.params,ct.token.conf)){O.push({cx:M.cx,cy:M.cy,r:M.r});const[L,W]=Oy(Qp(T,M),x);L===""?p+=1:o.some(U=>U.id===L)||o.push({id:L,center:[M.cx,M.cy],radius:M.r,confidence:Math.round(W*1e4)/1e4})}r(`${I}: coins…`);const N=await Wt("coin",T),H=Hp(N.rows,N.params,ct.coin.conf).filter(M=>!O.some(L=>(M.cx-L.cx)**2+(M.cy-L.cy)**2<=M.r*M.r)),G=h0(T,H),V=[];if(H.forEach((M,L)=>{const W=G[L];h+=W,V.push({denomination:W,center:[M.cx,M.cy],radius:M.r,denomSource:"colour"})}),V.length>=2){const M=V.map(W=>W.radius).sort((W,U)=>W-U),L=M.length%2===1?M[(M.length-1)/2]:(M[M.length/2-1]+M[M.length/2])/2;if(L>0)for(const W of V)W.radius/L>2&&(W.suspect=!0,W.suspectReason=`radius ${W.radius}px is ${(W.radius/L).toFixed(1)}x the photo's median coin radius — probably not a coin`)}a.push(...V),r(`${I}: wonder names…`);const A=await Fy(T,M=>r(`${I}: ${M}`)),F=[],K=Date.now()+Py,X=A.wonders.length>0?await Ly():null;for(const M of A.wonders){let L=null;if(X!==null&&Date.now()<K){r(`${I}: registering ${M.name}…`);try{const W=await bh(M.id);if(W!==null){const U=by(X,T,W,[[M.nameBox.x,M.nameBox.y],[M.nameBox.x+M.nameBox.width,M.nameBox.y],[M.nameBox.x+M.nameBox.width,M.nameBox.y+M.nameBox.height],[M.nameBox.x,M.nameBox.y+M.nameBox.height]]);if(U!==null){const Q=U.footprint.map($e=>$e[0]),pe=U.footprint.map($e=>$e[1]),ie=Math.max(0,Math.round(Math.min(...Q))),se=Math.max(0,Math.round(Math.min(...pe)));L={built:U.built,boundingBox:{x:ie,y:se,width:Math.min(T.width,Math.round(Math.max(...Q)))-ie,height:Math.min(T.height,Math.round(Math.max(...pe)))-se},tuckRegion:hh(U.footprint,U.overflow)}}}}catch(W){console.warn(`[wonders-reg] ${M.id} failed:`,W)}}if(L!==null){const W=L.tuckRegion??L.boundingBox;F.push({x0:W.x,y0:W.y,x1:W.x+W.width,y1:W.y+W.height})}else{const W=Math.max(8,M.nameBox.height),U=Math.round(M.nameBox.width*.15);F.push({x0:M.nameBox.x-U,y0:M.nameBox.y-W*2.5,x1:M.nameBox.x+M.nameBox.width+U,y1:M.nameBox.y+M.nameBox.height+W*2.5})}u.some(W=>W.id===M.id)||u.push({id:M.id,name:M.name,builtWithCardUnderneath:(L==null?void 0:L.built)??!0,boundingBox:(L==null?void 0:L.boundingBox)??{x:0,y:0,width:0,height:0},...L!=null&&L.tuckRegion?{tuckRegion:L.tuckRegion}:{},confidence:M.confidence})}if(A.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${I}: the wonder-name read ran out of its time budget on this device — ${A.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),X!==null&&A.wonders.length>0&&Date.now()<K)try{const M=await $h(),L=(M==null?void 0:M.catalog.filter(U=>U.kind==="wonder").map(U=>U.id))??[],W=new Map;for(const U of L)if(!u.some(Q=>Q.id===U)){const Q=await bh(U);Q!==null&&W.set(U,Q)}if(W.size>0){r(`${I}: searching occluded wonders…`);const U=wy(X,T,W,K);for(const Q of U){const pe=Q.footprint.map(re=>re[0]),ie=Q.footprint.map(re=>re[1]),se=Math.max(0,Math.round(Math.min(...pe))),$e=Math.max(0,Math.round(Math.min(...ie))),ye={x:se,y:$e,width:Math.min(T.width,Math.round(Math.max(...pe)))-se,height:Math.min(T.height,Math.round(Math.max(...ie)))-$e};if(u.some(re=>{const Ie=re.boundingBox,Je=Math.max(0,Math.min(Ie.x+Ie.width,ye.x+ye.width)-Math.max(Ie.x,ye.x)),ht=Math.max(0,Math.min(Ie.y+Ie.height,ye.y+ye.height)-Math.max(Ie.y,ye.y)),Ge=Je*ht,vt=Ie.width*Ie.height+ye.width*ye.height-Ge;return vt>0&&Ge/vt>_y}))continue;const Me=M==null?void 0:M.catalog.find(re=>re.id===Q.id);u.push({id:Q.id,name:(Me==null?void 0:Me.nameFr)??(Me==null?void 0:Me.name)??Q.id,builtWithCardUnderneath:Q.built,boundingBox:ye,...Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:Math.round(Q.confidence*1e4)/1e4});const ue=Q.tuckRegion??ye;F.push({x0:ue.x,y0:ue.y,x1:ue.x+ue.width,y1:ue.y+ue.height})}}}catch(M){console.warn("[wonders-reg] discovery failed:",M)}const oe=[];for(const M of z){const L=M.box[0]+M.box[2]/2,W=M.box[1]+M.box[3]/2;if(F.some(Q=>L>=Q.x0&&L<=Q.x1&&W>=Q.y0&&W<=Q.y1)){m+=1;continue}oe.push(M),i[M.family]=(i[M.family]??0)+1,f+=1}for(const M of Jg(oe))d.push(M);r(`${I}: laurels…`);const D=await Hy(),Z=[];for(const M of[0,1,2,3]){const L=M===0?T:Qn(T,M),W=await Wt("laurel",L);for(const[U,Q,pe,ie]of jp(W.rows,W.params,ct.laurel.conf)){const se=vh({x:U,y:Q,width:pe-U,height:ie-Q},M,T.width,T.height),$e=se.x+se.width/2,ye=se.y+se.height/2,Ee=.6*Math.max(se.width,se.height);Z.some(([ue,re,Ie,Je])=>{const ht=(ue+Ie)/2,Ge=(re+Je)/2;return($e-ht)**2+(ye-Ge)**2<Ee*Ee})||Z.push([se.x,se.y,se.x+se.width,se.y+se.height])}}for(const[M,L,W,U]of Z){const Q=Math.trunc((M+W)/2),pe=Math.trunc((L+U)/2);if([...O,...H].some(ue=>(Q-ue.cx)**2+(pe-ue.cy)**2<=ue.r*ue.r))continue;const se=Math.max(6,Math.trunc(Math.max(W-M,U-L)*w0)),$e=jy(T,Q,pe,se);let ye=null,Ee=0;for(const ue of[0,1,2,3]){const re=ue===0?$e:Qn($e,ue),[Ie,Je]=R0(re,D);Ie!==null&&Je>Ee&&(ye=Ie,Ee=Je)}ye!==null&&Ee<Uy&&(ye=null);const Me=F.some(ue=>Q>=ue.x0&&Q<=ue.x1&&pe>=ue.y0&&pe<=ue.y1);s.push({value:ye,valueRead:ye!==null,center:[Math.round((M+W)/2),Math.round((L+U)/2)],boundingBox:{x:Math.trunc(M),y:Math.trunc(L),width:Math.trunc(W-M),height:Math.trunc(U-L)},confidence:Math.round(Ee*1e4)/1e4,excluded:Me,photoIndex:y-1})}}m>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${m} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):f>0&&u.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const w=i.guild??0;w>0&&n.push({code:"INCONSISTENT_STATE",message:`${t}: ${w} purple banner(s) counted but guild identification is server-only — pick the guild(s) in the review.`});const v=u.filter(b=>b.boundingBox.width===0);v.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${v.map(b=>b.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${u.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: on-device mode — ${u.length>0?"guilds are":"wonders and guilds are"} not identified yet: pick them in the review below.`+(p>0?` ${p} token disc(s) found but not identified — pick them too.`:"")}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(b=>b.id).join(", ")+" — confirm in the review."}),a.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${h} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const $=s.filter(b=>b.valueRead);return{...t_(),wonders:u,progressTokens:o,laurels:s,cardVictoryPoints:{value:$.reduce((b,I)=>b+(I.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-$.length,complete:s.length===$.length},cardCounts:{byFamily:i,source:f>0?"yolo":"none",tuckedExcluded:m,...d.length>0?{suspects:d}:{}},coins:{total:h,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function r_(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null};for(const i of["left","right"]){const s=e[i];s.length>0&&(r[i]=await n_(s,i,n,t))}return e.hasBoard&&n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:r,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=n==="classify"?await e_(e.data.file):await r_(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
