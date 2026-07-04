var z1=Object.defineProperty;var R1=(ht,ft,Qt)=>ft in ht?z1(ht,ft,{enumerable:!0,configurable:!0,writable:!0,value:Qt}):ht[ft]=Qt;var Um=(ht,ft,Qt)=>R1(ht,typeof ft!="symbol"?ft+"":ft,Qt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ht=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyNames,qm=Object.prototype.hasOwnProperty,Gm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),X=(e,t)=>()=>(e&&(t=e(e=0)),t),Jt=(e,t)=>{for(var n in t)ht(e,n,{get:t[n],enumerable:!0})},Wm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Qt(t))!qm.call(e,i)&&i!==n&&ht(e,i,{get:()=>t[i],enumerable:!(r=ft(t,i))||r.enumerable});return e},cn=e=>Wm(ht({},"__esModule",{value:!0}),e),pn,vt,en,Ga,Wa,Va=X(()=>{pn=new Map,vt=[],en=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=pn.get(e);if(r===void 0)pn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=vt.indexOf(e);i!==-1&&vt.splice(i,1);for(let a=0;a<vt.length;a++)if(pn.get(vt[a]).priority<=n){vt.splice(a,0,e);return}vt.push(e)}return}throw new TypeError("not a valid backend")},Ga=async e=>{let t=pn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Wa=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?vt:n,i,a=[],s=new Set;for(let u of r){let d=await Ga(u);typeof d=="string"?a.push({name:u,err:d}):(i||(i=d),i===d&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),Vm=X(()=>{Va()}),Fa,Fm=X(()=>{Fa="1.27.0"}),Sr,De,Ha=X(()=>{Fm(),Sr="warning",De={wasm:{},webgl:{},webgpu:{},versions:{common:Fa},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Sr=e}},get logLevel(){return Sr}},Object.defineProperty(De,"logLevel",{enumerable:!0})}),Ie,Hm=X(()=>{Ha(),Ie=De}),ja,Ka,jm=X(()=>{ja=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*i,c=0,f=p,m=p*2,g=-1;s==="RGBA"?(c=0,f=p,m=p*2,g=p*3):s==="RGB"?(c=0,f=p,m=p*2):s==="RBG"&&(c=0,m=p,f=p*2);for(let _=0;_<a;_++)for(let b=0;b<i;b++){let x=(e.data[c++]-d[0])*u[0],$=(e.data[f++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],S=g===-1?255:(e.data[g++]-d[3])*u[3];r.fillStyle="rgba("+x+","+$+","+I+","+S+")",r.fillRect(b,_,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ka=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,_=2,b=3,x=0,$=c,I=c*2,S=-1;o==="RGBA"?(x=0,$=c,I=c*2,S=c*3):o==="RGB"?(x=0,$=c,I=c*2):o==="RBG"&&(x=0,I=c,$=c*2),r=n.createImageData(i,a);for(let k=0;k<a*i;m+=f,g+=f,_+=f,b+=f,k++)r.data[m]=(e.data[x++]-p[0])*d[0],r.data[g]=(e.data[$++]-p[1])*d[1],r.data[_]=(e.data[I++]-p[2])*d[2],r.data[b]=S===-1?255:(e.data[S++]-p[3])*d[3]}else throw new Error("Can not access image data");return r}}),Dn,Xa,Ya,Za,Qa,Ja,Km=X(()=>{Tr(),Dn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),c=4,f=0,m=1,g=2,_=3,b=0,x=d,$=d*2,I=-1;o==="RGB"&&(c=3,f=0,m=1,g=2,_=-1),u==="RGBA"?I=d*3:u==="RBG"?(b=0,$=d,x=d*2):u==="BGR"&&($=0,x=d,b=d*2);for(let S=0;S<d;S++,f+=c,g+=c,m+=c,_+=c)p[b++]=(e[f]+s[0])/a[0],p[x++]=(e[m]+s[1])/a[1],p[$++]=(e[g]+s[2])/a[2],I!==-1&&_!==-1&&(p[I++]=(e[_]+s[3])/a[3]);return u==="RGBA"?new He("float32",p,[1,4,n,r]):new He("float32",p,[1,3,n,r])},Xa=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(n){let p=u();p.width=e.width,p.height=e.height;let c=d(p);if(c!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let p,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,c=t.resizedWidth):(p=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=c,t!==void 0){let f=u();f.width=c,f.height=p;let m=d(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let c=d(p);if(c!=null){let f=e.height,m=e.width;return c.drawImage(e,0,0,m,f),s=c.getImageData(0,0,m,f).data,o.height=f,o.width=m,Dn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,c)=>{let f=u(),m=d(f);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let _=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(Dn(_.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Dn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ya=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new He({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},Za=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new He({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},Qa=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new He({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},Ja=(e,t,n)=>new He({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Rt,hn,Ir,es,Xm=X(()=>{Rt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),hn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ir=!1,es=()=>{if(!Ir){Ir=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Rt.set("int64",BigInt64Array),hn.set(BigInt64Array,"int64")),t&&(Rt.set("uint64",BigUint64Array),hn.set(BigUint64Array,"uint64")),r?(Rt.set("float16",n),hn.set(n,"float16")):Rt.set("float16",Uint16Array)}}}),ts,ns,Ym=X(()=>{Tr(),ts=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},ns=(e,t)=>{switch(e.location){case"cpu":return new He(e.type,e.data,t);case"cpu-pinned":return new He({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new He({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new He({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new He({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),He,Tr=X(()=>{jm(),Km(),Xm(),Ym(),He=class{constructor(e,t,n){es();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Rt.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Rt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=hn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=ts(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Xa(e,t)}static fromTexture(e,t){return Ya(e,t)}static fromGpuBuffer(e,t){return Za(e,t)}static fromMLTensor(e,t){return Qa(e,t)}static fromPinnedBuffer(e,t,n){return Ja(e,t,n)}toDataURL(e){return ja(this,e)}toImageData(e){return Ka(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ns(this,e)}}}),Ge,rs=X(()=>{Tr(),Ge=He}),Un,kr,ot,Qe,Ot,Nt,is=X(()=>{Ha(),Un=(e,t)=>{(typeof De.trace>"u"?!De.wasm.trace:!De.trace)||console.timeStamp(`${e}::ORT::${t}`)},kr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Un("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},ot=e=>{(typeof De.trace>"u"?!De.wasm.trace:!De.trace)||kr("BEGIN",e)},Qe=e=>{(typeof De.trace>"u"?!De.wasm.trace:!De.trace)||kr("END",e)},Ot=e=>{(typeof De.trace>"u"?!De.wasm.trace:!De.trace)||console.time(`ORT::${e}`)},Nt=e=>{(typeof De.trace>"u"?!De.wasm.trace:!De.trace)||console.timeEnd(`ORT::${e}`)}}),as,Zm=X(()=>{Va(),rs(),is(),as=class Pm{constructor(t){this.handler=t}async run(t,n,r){ot(),Ot("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof Ge||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ge)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(p.indexOf(c)!==-1){let f=n[c];(f===null||f instanceof Ge)&&(d=!0,s=!1,i[c]=f)}if(d){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,a),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof Ge?u[d]=p:u[d]=new Ge(p.type,p.data,p.dims)}return Nt("InferenceSession.run"),Qe(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){ot(),Ot("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,c=0,f=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-c,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Wa(s),d=await o.createInferenceSessionHandler(a,u);return Nt("InferenceSession.create"),Qe(),new Pm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),tn,Qm=X(()=>{Zm(),tn=as}),Jm=X(()=>{}),eg=X(()=>{}),tg=X(()=>{}),ng=X(()=>{}),rg={};Jt(rg,{InferenceSession:()=>tn,TRACE:()=>Un,TRACE_EVENT_BEGIN:()=>Ot,TRACE_EVENT_END:()=>Nt,TRACE_FUNC_BEGIN:()=>ot,TRACE_FUNC_END:()=>Qe,Tensor:()=>Ge,env:()=>Ie,registerBackend:()=>en});var Xe=X(()=>{Vm(),Hm(),Qm(),rs(),Jm(),eg(),is(),tg(),ng()}),Er=X(()=>{}),ss={};Jt(ss,{default:()=>os});var Mr,Cr,os,ig=X(()=>{var e;Gp(),Bt(),Br(),Mr="ort-wasm-proxy-worker",Cr=((e=globalThis.self)==null?void 0:e.name)===Mr,Cr&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Pr(r.wasm).then(()=>{Yi(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Zi(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=rr(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;Ji(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":ea(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;na(i,a,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},ia([...s,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":ra(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),os=Cr?null:t=>new Worker(t??je,{type:"module",name:Mr})}),us={};Jt(us,{default:()=>ds});async function ls(e={}){var Bm,Dm;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Bm=self.name)==null?void 0:Bm.startsWith("em-pthread"));t.mountExternalData=(l,h)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=l=>async(...h)=>{var w;try{if(t.Yc)throw Error("Session already started");let y=t.Yc={Kd:h[0],errors:[]},T=await l(...h);if(t.Yc!==y)throw Error("Session mismatch");(w=t.dd)==null||w.flush();let E=y.errors;if(0<E.length){let z=await Promise.all(E);if(z=z.filter(U=>U),0<z.length)throw Error(z.join(`
`))}return T}finally{t.Yc=null}};t.jsepInit=(l,h)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let w=t.dd;t.jsepRegisterBuffer=(y,T,E,z)=>w.registerBuffer(y,T,E,z),t.jsepGetBuffer=y=>w.getBuffer(y),t.jsepCreateDownloader=(y,T,E)=>w.createDownloader(y,T,E),t.jsepOnCreateSession=y=>{w.onCreateSession(y)},t.jsepOnReleaseSession=y=>{w.onReleaseSession(y)},t.jsepOnRunStart=y=>w.onRunStart(y),t.Id=(y,T)=>{w.upload(y,T)}}else if(l==="webnn"){let w=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=y=>w.onRunStart(y),t.webnnOnRunEnd=w.onRunEnd.bind(w),t.webnnOnReleaseSession=y=>{w.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,T)=>w.createMLTensorDownloader(y,T),t.webnnRegisterMLTensor=(y,T,E,z)=>w.registerMLTensor(y,T,E,z),t.webnnCreateMLContext=y=>w.createMLContext(y),t.webnnRegisterMLConstant=(y,T,E,z,U,Z)=>w.registerMLConstant(y,T,E,z,U,t.Xc,Z),t.webnnRegisterGraphInput=w.registerGraphInput.bind(w),t.webnnIsGraphInput=w.isGraphInput.bind(w),t.webnnRegisterGraphOutput=w.registerGraphOutput.bind(w),t.webnnIsGraphOutput=w.isGraphOutput.bind(w),t.webnnCreateTemporaryTensor=w.createTemporaryTensor.bind(w),t.webnnIsGraphInputOutputTypeSupported=w.isGraphInputOutputTypeSupported.bind(w)}};let s=()=>{let l=h=>(...w)=>{let y=ct;return w=h(...w),ct!=y?new Promise((T,E)=>{Ma={resolve:T,reject:E}}):w};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=l(t[h])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,d=(l,h)=>{throw h},p=self.location.href,c="";if(n||r){try{c=new URL(".",p).href}catch{}r&&(u=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async l=>{if(C(l))return new Promise((w,y)=>{var T=new XMLHttpRequest;T.open("GET",l,!0),T.responseType="arraybuffer",T.onload=()=>{T.status==200||T.status==0&&T.response?w(T.response):y(T.status)},T.onerror=y,T.send(null)});var h=await fetch(l,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,_,b,x,$=console.log.bind(console),I=console.error.bind(console),S=$,k=I,M=!1,C=l=>l.startsWith("file://");function v(){Mt.buffer!=N.buffer&&Y()}if(i){let l=function(h){try{var w=h.data,y=w.Sc;if(y==="load"){let T=[];self.onmessage=E=>T.push(E),x=()=>{postMessage({Sc:"loaded"});for(let E of T)l(E);self.onmessage=l};for(let E of w.xd)t[E]&&!t[E].proxy||(t[E]=(...z)=>{postMessage({Sc:"callHandler",wd:E,args:z})},E=="print"&&(S=t[E]),E=="printErr"&&(k=t[E]));Mt=w.Od,Y(),m=w.Pd,ye(),xr()}else if(y==="run"){(function(T){var E=(v(),q)[T+52>>>2>>>0];T=(v(),q)[T+56>>>2>>>0],Hf(E,E-T),fe(E)})(w.Rc),Oa(w.Rc,0,0,1,0,0),un(),Ta(w.Rc),R||(Lf(),R=!0);try{Sw(w.Md,w.bd)}catch(T){if(T!="unwind")throw T}}else w.target!=="setimmediate"&&(y==="checkMailbox"?R&&mr():y&&(k(`worker: received unknown command ${y}`),k(w)))}catch(T){throw qf(),T}};var R=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=l}var N,H,P,V,A,q,F,K,se,D,J,G=!1;function Y(){var l=Mt.buffer;t.HEAP8=N=new Int8Array(l),P=new Int16Array(l),t.HEAPU8=H=new Uint8Array(l),V=new Uint16Array(l),t.HEAP32=A=new Int32Array(l),t.HEAPU32=q=new Uint32Array(l),F=new Float32Array(l),K=new Float64Array(l),se=new BigInt64Array(l),D=new BigUint64Array(l)}function j(){G=!0,i?x():xt.sb()}function W(l){throw k(l="Aborted("+l+")"),M=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),b==null||b(l),l}function oe(){return{a:{ma:jb,gb:Hb,g:Iw,J:Tw,f:kw,o:Ew,h:Mw,ha:Cw,b:Aw,T:zw,Ha:Qh,n:Rw,$:nf,Xa:rf,Da:af,Fa:sf,Ya:of,Va:uf,Oa:lf,Ua:df,ka:cf,Ea:pf,Ba:hf,Wa:ff,Ca:mf,bb:Ow,ea:Nw,wa:Bw,ua:Uw,da:Lw,O:qw,H:Gw,va:Ww,_:Yw,xa:Zw,Ra:Qw,za:eb,Ia:tb,sa:nb,fa:rb,Qa:Ta,_a:ib,R:ub,r:hb,c:Sa,hb:fb,y:mb,M:gb,D:yb,l:_b,s:vf,ib:wb,I:bb,S:$b,j:xb,u:vb,q:Sb,k:Ib,La:Tb,Ma:kb,Na:Eb,Ja:kf,Ka:Ef,ta:Mf,db:Cb,ab:zb,v:Rb,aa:Ob,ga:Nb,$a:Ab,W:Bb,Za:Db,Aa:Ub,F:Mb,U:Pb,la:br,ya:qb,fb:Lb,eb:Gb,Sa:Rf,Ta:Of,Ga:Ve,V:Nf,ja:Bf,Pa:Df,ia:Uf,kb:M1,na:S1,lb:E1,oa:v1,G:f1,e:Zb,t:Xb,w:Kb,B:o1,mb:b1,K:c1,x:e1,pa:$1,Y:I1,ba:w1,nb:_1,ob:y1,P:u1,qa:g1,pb:m1,N:p1,Z:x1,d:Yb,A:Jb,m:Qb,jb:C1,p:n1,z:r1,C:t1,E:i1,L:l1,qb:h1,Q:T1,ca:d1,X:k1,rb:s1,ra:a1,i:Vb,a:Mt,cb:Me}}}async function ye(){function l(y,T){var E=xt=y.exports;y={};for(let[z,U]of Object.entries(E))typeof U=="function"?(E=ab(U),y[z]=E):y[z]=U;return xt=y,xt=(function(){var z=xt,U=ee=>he=>ee(he)>>>0,Z=ee=>()=>ee()>>>0;return(z=Object.assign({},z)).tb=U(z.tb),z.Xb=Z(z.Xb),z.Zb=U(z.Zb),z.lc=U(z.lc),z.mc=Z(z.mc),z.qc=U(z.qc),z})(),Fe.push(xt._b),Pf=(y=xt).tb,Lf=y.ub,t._OrtInit=y.vb,t._OrtGetLastError=y.wb,t._OrtCreateSessionOptions=y.xb,t._OrtAppendExecutionProvider=y.yb,t._OrtAddFreeDimensionOverride=y.zb,t._OrtAddSessionConfigEntry=y.Ab,t._OrtReleaseSessionOptions=y.Bb,t._OrtCreateSession=y.Cb,t._OrtReleaseSession=y.Db,t._OrtGetInputOutputCount=y.Eb,t._OrtGetInputOutputMetadata=y.Fb,t._OrtFree=y.Gb,t._OrtCreateTensor=y.Hb,t._OrtGetTensorData=y.Ib,t._OrtReleaseTensor=y.Jb,t._OrtCreateRunOptions=y.Kb,t._OrtAddRunConfigEntry=y.Lb,t._OrtReleaseRunOptions=y.Mb,t._OrtCreateBinding=y.Nb,t._OrtBindInput=y.Ob,t._OrtBindOutput=y.Pb,t._OrtClearBoundOutputs=y.Qb,t._OrtReleaseBinding=y.Rb,t._OrtRunWithBinding=y.Sb,t._OrtRun=y.Tb,t._OrtEndProfiling=y.Ub,t._JsepOutput=y.Vb,t._JsepGetNodeName=y.Wb,$r=y.Xb,pt=t._free=y.Yb,On=t._malloc=y.Zb,Oa=y.ac,qf=y.bc,Gf=y.cc,Wf=y.dc,Na=y.ec,Vf=y.fc,Ff=y.gc,ge=y.hc,Nn=y.ic,Hf=y.jc,fe=y.kc,Ba=y.lc,me=y.mc,jf=y.nc,Da=y.oc,Kf=y.pc,Xf=y.qc,Yf=y.rc,Ua=y.sc,Zf=y.tc,Qf=y.uc,Jf=y.vc,em=y.wc,tm=y.xc,nm=y.yc,rm=y.zc,im=y.Ac,am=y.Bc,sm=y.Cc,om=y.Dc,um=y.Ec,lm=y.Fc,dm=y.Gc,cm=y.Hc,pm=y.Ic,hm=y.Jc,fm=y.Kc,mm=y.Lc,gm=y.Mc,ym=y.Nc,_m=y.Pc,wm=y.Qc,bm=y.$c,$m=y.ad,xm=y.fd,vm=y.jd,Sm=y.kd,Im=y.ld,Tm=y.md,km=y.nd,Em=y.od,Mm=y.pd,Cm=y.qd,Am=y.vd,zm=y.Td,Rm=y.Ud,Om=y.Vd,Nm=y.Wd,m=T,xt}var h,w=oe();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(w,(T,E)=>{y(l(T,E))})}):i?l(new WebAssembly.Instance(m,oe()),m):(J??(J=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(y){var T=J;if(!f&&!C(T))try{var E=fetch(T,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,y)}catch(z){k(`wasm streaming compile failed: ${z}`),k("falling back to ArrayBuffer instantiation")}return(async function(z,U){try{var Z=await(async function(ee){if(!f)try{var he=await o(ee);return new Uint8Array(he)}catch{}if(ee==J&&f)ee=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";ee=u(ee)}return ee})(z);return await WebAssembly.instantiate(Z,U)}catch(ee){k(`failed to asynchronously prepare wasm: ${ee}`),W(ee)}})(T,y)})(w),l(h.instance,h.module))}class O{constructor(h){Um(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var Q=l=>{l.terminate(),l.onmessage=()=>{}},te=[],ue=0,de=null,Ae=l=>{Pe.length==0&&(zn(),Xt(Pe[0]));var h=Pe.pop();if(!h)return 6;ke.push(h),Oe[l.Rc]=h,h.Rc=l.Rc;var w={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return h.postMessage(w,l.rd),0},we=0,ne=(l,h,...w)=>{var y,T=16*w.length,E=me(),z=Ba(T),U=z>>>3;for(y of w)typeof y=="bigint"?((v(),se)[U++>>>0]=1n,(v(),se)[U++>>>0]=y):((v(),se)[U++>>>0]=0n,(v(),K)[U++>>>0]=y);return l=Gf(l,0,T,z,h),fe(E),l};function Me(l){if(i)return ne(0,1,l);if(g=l,!(0<we)){for(var h of ke)Q(h);for(h of Pe)Q(h);Pe=[],ke=[],Oe={},M=!0}d(0,new O(l))}function Re(l){if(i)return ne(1,0,l);Ve(l)}var Ve=l=>{if(g=l,i)throw Re(l),"unwind";Me(l)},Pe=[],ke=[],Fe=[],Oe={},bt=l=>{var h=l.Rc;delete Oe[h],Pe.push(l),ke.splice(ke.indexOf(l),1),l.Rc=0,Wf(h)};function un(){Fe.forEach(l=>l())}var Xt=l=>new Promise(h=>{l.onmessage=T=>{var E=T.data;if(T=E.Sc,E.Zc&&E.Zc!=$r()){var z=Oe[E.Zc];z?z.postMessage(E,E.rd):k(`Internal error! Worker sent a message "${T}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else T==="checkMailbox"?mr():T==="spawnThread"?Ae(E):T==="cleanupThread"?fr(()=>{bt(Oe[E.Nd])}):T==="loaded"?(l.loaded=!0,h(l)):E.target==="setimmediate"?l.postMessage(E):T==="uncaughtException"?l.onerror(E.error):T==="callHandler"?t[E.wd](...E.args):T&&k(`worker sent an unknown command ${T}`)},l.onerror=T=>{throw k(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var w,y=[];for(w of[])t.propertyIsEnumerable(w)&&y.push(w);l.postMessage({Sc:"load",xd:y,Od:Mt,Pd:m})});function zn(){var l=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Pe.push(l)}var Mt,Sw=(l,h)=>{we=0,l=Ua(l,h),0<we?g=l:Na(l)},cr=[],pr=0;function Iw(l){var h=new ba(l>>>=0);return(v(),N)[h.Tc+12>>>0]==0&&(Xh(h,!0),pr--),Yh(h,!1),cr.push(h),Xf(l)}var ln=0,Tw=()=>{ge(0,0);var l=cr.pop();jf(l.cd),ln=0};function Xh(l,h){h=h?1:0,(v(),N)[l.Tc+12>>>0]=h}function Yh(l,h){h=h?1:0,(v(),N)[l.Tc+13>>>0]=h}class ba{constructor(h){this.cd=h,this.Tc=h-24}}var $a=l=>{var h=ln;if(!h)return Nn(0),0;var w=new ba(h);(v(),q)[w.Tc+16>>>2>>>0]=h;var y=(v(),q)[w.Tc+4>>>2>>>0];if(!y)return Nn(0),h;for(var T of l){if(T===0||T===y)break;if(Kf(T,y,w.Tc+16))return Nn(T),h}return Nn(y),h};function kw(){return $a([])}function Ew(l){return $a([l>>>0])}function Mw(l,h,w,y){return $a([l>>>0,h>>>0,w>>>0,y>>>0])}var Cw=()=>{var l=cr.pop();l||W("no exception to throw");var h=l.cd;throw(v(),N)[l.Tc+13>>>0]==0&&(cr.push(l),Yh(l,!0),Xh(l,!1),pr++),Da(h),ln=h};function Aw(l,h,w){var y=new ba(l>>>=0);throw h>>>=0,w>>>=0,(v(),q)[y.Tc+16>>>2>>>0]=0,(v(),q)[y.Tc+4>>>2>>>0]=h,(v(),q)[y.Tc+8>>>2>>>0]=w,Da(l),pr++,ln=l}var zw=()=>pr;function Zh(l,h,w,y){return i?ne(2,1,l,h,w,y):Qh(l,h,w,y)}function Qh(l,h,w,y){if(l>>>=0,h>>>=0,w>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var T=[];return i&&T.length===0?Zh(l,h,w,y):(l={Ld:w,Rc:l,bd:y,rd:T},i?(l.Sc="spawnThread",postMessage(l,T),0):Ae(l))}function Rw(l){throw ln||(ln=l>>>0),ln}var Jh=globalThis.TextDecoder&&new TextDecoder,ef=(l,h,w,y)=>{if(w=h+w,y)return w;for(;l[h]&&!(h>=w);)++h;return h},tf=(l,h=0,w,y)=>{if(16<(w=ef(l,h>>>=0,w,y))-h&&l.buffer&&Jh)return Jh.decode(l.buffer instanceof ArrayBuffer?l.subarray(h,w):l.slice(h,w));for(y="";h<w;){var T=l[h++];if(128&T){var E=63&l[h++];if((224&T)==192)y+=String.fromCharCode((31&T)<<6|E);else{var z=63&l[h++];65536>(T=(240&T)==224?(15&T)<<12|E<<6|z:(7&T)<<18|E<<12|z<<6|63&l[h++])?y+=String.fromCharCode(T):(T-=65536,y+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else y+=String.fromCharCode(T)}return y},Ne=(l,h,w)=>(l>>>=0)?tf((v(),H),l,h,w):"";function nf(l,h,w){return i?ne(3,1,l,h,w):0}function rf(l,h){if(i)return ne(4,1,l,h)}function af(l,h){if(i)return ne(5,1,l,h)}function sf(l,h,w){if(i)return ne(6,1,l,h,w)}function of(l,h,w){return i?ne(7,1,l,h,w):0}function uf(l,h){if(i)return ne(8,1,l,h)}function lf(l,h,w){if(i)return ne(9,1,l,h,w)}function df(l,h,w,y){if(i)return ne(10,1,l,h,w,y)}function cf(l,h,w,y){if(i)return ne(11,1,l,h,w,y)}function pf(l,h,w,y){if(i)return ne(12,1,l,h,w,y)}function hf(l){if(i)return ne(13,1,l)}function ff(l,h){if(i)return ne(14,1,l,h)}function mf(l,h,w){if(i)return ne(15,1,l,h,w)}var Ow=()=>W(""),dt=l=>{l>>>=0;for(var h="";;){var w=(v(),H)[l++>>>0];if(!w)return h;h+=String.fromCharCode(w)}},xa={},va={},dn=class extends Error{constructor(l){super(l),this.name="BindingError"}};function $t(l,h,w={}){return(function(y,T,E={}){var z=T.name;if(!y)throw new dn(`type "${z}" must have a positive integer typeid pointer`);if(va.hasOwnProperty(y)){if(E.yd)return;throw new dn(`Cannot register type '${z}' twice`)}va[y]=T,xa.hasOwnProperty(y)&&(T=xa[y],delete xa[y],T.forEach(U=>U()))})(l,h,w)}var gf=(l,h,w)=>{switch(h){case 1:return w?y=>(v(),N)[y>>>0]:y=>(v(),H)[y>>>0];case 2:return w?y=>(v(),P)[y>>>1>>>0]:y=>(v(),V)[y>>>1>>>0];case 4:return w?y=>(v(),A)[y>>>2>>>0]:y=>(v(),q)[y>>>2>>>0];case 8:return w?y=>(v(),se)[y>>>3>>>0]:y=>(v(),D)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${l}`)}};function Nw(l,h,w,y,T){l>>>=0,w>>>=0,h=dt(h>>>0);let E=z=>z;if(y=y===0n){let z=8*w;E=U=>BigInt.asUintN(z,U),T=E(T)}$t(l,{name:h,Oc:E,Vc:(z,U)=>(typeof U=="number"&&(U=BigInt(U)),U),Uc:gf(h,w,!y),Wc:null})}function Bw(l,h,w,y){$t(l>>>=0,{name:h=dt(h>>>0),Oc:function(T){return!!T},Vc:function(T,E){return E?w:y},Uc:function(T){return this.Oc((v(),H)[T>>>0])},Wc:null})}var yf=[],Yt=[0,1,,1,null,1,!0,1,!1,1];function Sa(l){9<(l>>>=0)&&--Yt[l+1]===0&&(Yt[l]=void 0,yf.push(l))}var Ze=l=>{if(!l)throw new dn(`Cannot use deleted val. handle = ${l}`);return Yt[l]},st=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=yf.pop()||Yt.length;return Yt[h]=l,Yt[h+1]=1,h}};function Ia(l){return this.Oc((v(),q)[l>>>2>>>0])}var Dw={name:"emscripten::val",Oc:l=>{var h=Ze(l);return Sa(l),h},Vc:(l,h)=>st(h),Uc:Ia,Wc:null};function Uw(l){return $t(l>>>0,Dw)}var Pw=(l,h)=>{switch(h){case 4:return function(w){return this.Oc((v(),F)[w>>>2>>>0])};case 8:return function(w){return this.Oc((v(),K)[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${l}`)}};function Lw(l,h,w){w>>>=0,$t(l>>>=0,{name:h=dt(h>>>0),Oc:y=>y,Vc:(y,T)=>T,Uc:Pw(h,w),Wc:null})}function qw(l,h,w,y,T){l>>>=0,w>>>=0,h=dt(h>>>0);let E=U=>U;if(y===0){var z=32-8*w;E=U=>U<<z>>>z,T=E(T)}$t(l,{name:h,Oc:E,Vc:(U,Z)=>Z,Uc:gf(h,w,y!==0),Wc:null})}function Gw(l,h,w){function y(E){var z=(v(),q)[E>>>2>>>0];return E=(v(),q)[E+4>>>2>>>0],new T((v(),N).buffer,E,z)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];$t(l>>>=0,{name:w=dt(w>>>0),Oc:y,Uc:y},{yd:!0})}var Ct=(l,h,w)=>{var y=(v(),H);if(h>>>=0,0<w){var T=h;w=h+w-1;for(var E=0;E<l.length;++E){var z=l.codePointAt(E);if(127>=z){if(h>=w)break;y[h++>>>0]=z}else if(2047>=z){if(h+1>=w)break;y[h++>>>0]=192|z>>6,y[h++>>>0]=128|63&z}else if(65535>=z){if(h+2>=w)break;y[h++>>>0]=224|z>>12,y[h++>>>0]=128|z>>6&63,y[h++>>>0]=128|63&z}else{if(h+3>=w)break;y[h++>>>0]=240|z>>18,y[h++>>>0]=128|z>>12&63,y[h++>>>0]=128|z>>6&63,y[h++>>>0]=128|63&z,E++}}y[h>>>0]=0,l=h-T}else l=0;return l},hr=l=>{for(var h=0,w=0;w<l.length;++w){var y=l.charCodeAt(w);127>=y?h++:2047>=y?h+=2:55296<=y&&57343>=y?(h+=4,++w):h+=3}return h};function Ww(l,h){$t(l>>>=0,{name:h=dt(h>>>0),Oc(w){var y=(v(),q)[w>>>2>>>0];return y=Ne(w+4,y,!0),pt(w),y},Vc(w,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var T=typeof y=="string";if(!(T||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new dn("Cannot pass non-string to std::string");var E=T?hr(y):y.length,z=On(4+E+1),U=z+4;return(v(),q)[z>>>2>>>0]=E,T?Ct(y,U,E+1):(v(),H).set(y,U>>>0),w!==null&&w.push(pt,z),z},Uc:Ia,Wc(w){pt(w)}})}var _f=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Vw=(l,h,w)=>{if(l>>>=1,16<(h=ef((v(),V),l,h/2,w))-l&&_f)return _f.decode((v(),V).slice(l,h));for(w="";l<h;++l){var y=(v(),V)[l>>>0];w+=String.fromCharCode(y)}return w},Fw=(l,h,w)=>{if(w??(w=2147483647),2>w)return 0;var y=h;w=(w-=2)<2*l.length?w/2:l.length;for(var T=0;T<w;++T){var E=l.charCodeAt(T);(v(),P)[h>>>1>>>0]=E,h+=2}return(v(),P)[h>>>1>>>0]=0,h-y},Hw=l=>2*l.length,jw=(l,h,w)=>{var y="";l>>>=2;for(var T=0;!(T>=h/4);T++){var E=(v(),q)[l+T>>>0];if(!E&&!w)break;y+=String.fromCodePoint(E)}return y},Kw=(l,h,w)=>{if(h>>>=0,w??(w=2147483647),4>w)return 0;var y=h;w=y+w-4;for(var T=0;T<l.length;++T){var E=l.codePointAt(T);if(65535<E&&T++,(v(),A)[h>>>2>>>0]=E,(h+=4)+4>w)break}return(v(),A)[h>>>2>>>0]=0,h-y},Xw=l=>{for(var h=0,w=0;w<l.length;++w)65535<l.codePointAt(w)&&w++,h+=4;return h};function Yw(l,h,w){if(l>>>=0,h>>>=0,w=dt(w>>>=0),h===2)var y=Vw,T=Fw,E=Hw;else y=jw,T=Kw,E=Xw;$t(l,{name:w,Oc:z=>{var U=(v(),q)[z>>>2>>>0];return U=y(z+4,U*h,!0),pt(z),U},Vc:(z,U)=>{if(typeof U!="string")throw new dn(`Cannot pass non-string to C++ string type ${w}`);var Z=E(U),ee=On(4+Z+h);return(v(),q)[ee>>>2>>>0]=Z/h,T(U,ee+4,Z+h),z!==null&&z.push(pt,ee),ee},Uc:Ia,Wc(z){pt(z)}})}function Zw(l,h){$t(l>>>=0,{zd:!0,name:h=dt(h>>>0),Oc:()=>{},Vc:()=>{}})}function Qw(l){Oa(l>>>0,!r,1,!n,131072,!1),un()}var fr=l=>{if(!M)try{if(l(),!(0<we))try{i?$r()&&Na(g):Ve(g)}catch(h){h instanceof O||h=="unwind"||d(0,h)}}catch(h){h instanceof O||h=="unwind"||d(0,h)}},Jw=!Atomics.waitAsync||((Dm=globalThis.navigator)==null?void 0:Dm.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ta(l){l>>>=0,Jw||(Atomics.waitAsync((v(),A),l>>>2,l).value.then(mr),l+=128,Atomics.store((v(),A),l>>>2,1))}var mr=()=>fr(()=>{var l=$r();l&&(Ta(l),Ff())});function eb(l,h){(l>>>=0)==h>>>0?setTimeout(mr):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=Oe[l])&&l.postMessage({Sc:"checkMailbox"})}var ka=[];function tb(l,h,w,y,T){for(h>>>=0,T>>>=0,ka.length=0,w=T>>>3,y=T+y>>>3;w<y;){var E;E=(v(),se)[w++>>>0]?(v(),se)[w++>>>0]:(v(),K)[w++>>>0],ka.push(E)}return(h?Pa[h]:Fb[l])(...ka)}var nb=()=>{we=0};function rb(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):bt(Oe[l])}function ib(l){}var gr=l=>{try{l()}catch(h){W(h)}};function ab(l){var h=(...w)=>{yr.push(l);try{return l(...w)}finally{M||(yr.pop(),ct&&At===1&&yr.length===0&&(At=0,we+=1,gr(Rm),typeof Fibers<"u"&&Fibers.Zd()))}};return $f.set(l,h),h}var At=0,ct=null,wf=0,yr=[],Ea=new Map,bf=new Map,$f=new Map,sb=0,Ma=null,ob=[],xf=l=>(function(h){if(!M){if(At===0){var w=!1,y=!1;h((T=0)=>{if(!M&&(wf=T,w=!0,y)){At=2,gr(()=>Om(ct)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),T=!1;try{var E=(function(){var Z=(v(),A)[ct+8>>>2>>>0];return Z=bf.get(Z),Z=$f.get(Z),--we,Z()})()}catch(Z){E=Z,T=!0}var z=!1;if(!ct){var U=Ma;U&&(Ma=null,(T?U.reject:U.resolve)(E),z=!0)}if(T&&!z)throw E}}),y=!0,w||(At=1,ct=(function(){var T=On(65548),E=T+12;if((v(),q)[T>>>2>>>0]=E,(v(),q)[T+4>>>2>>>0]=E+65536,E=yr[0],!Ea.has(E)){var z=sb++;Ea.set(E,z),bf.set(z,E)}return E=Ea.get(E),(v(),A)[T+8>>>2>>>0]=E,T})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),gr(()=>zm(ct)))}else At===2?(At=0,gr(Nm),pt(ct),ct=null,ob.forEach(fr)):W(`invalid state: ${At}`);return wf}})(h=>{l().then(h)});function ub(l){return l>>>=0,xf(async()=>{var h=await Ze(l);return st(h)})}var Ca=[],lb=l=>{var h=Ca.length;return Ca.push(l),h},db=(l,h)=>{for(var w=Array(l),y=0;y<l;++y){var T=y,E=(v(),q)[h+4*y>>>2>>>0],z=va[E];if(z===void 0)throw l=`parameter ${y}`,E=Pf(E),h=dt(E),pt(E),new dn(`${l} has unknown type ${h}`);w[T]=z}return w},cb=(l,h,w)=>{var y=[];return l=l(y,w),y.length&&((v(),q)[h>>>2>>>0]=st(y)),l},pb={},_r=l=>{var h=pb[l];return h===void 0?dt(l):h};function hb(l,h,w){var[y,...T]=db(l,h>>>0);h=y.Vc.bind(y);var E=T.map(Z=>Z.Uc.bind(Z));l--;var z={toValue:Ze};switch(l=E.map((Z,ee)=>{var he=`argFromPtr${ee}`;return z[he]=Z,`${he}(args${ee?"+"+8*ee:""})`}),w){case 0:var U="toValue(handle)";break;case 2:U="new (toValue(handle))";break;case 3:U="";break;case 1:z.getStringOrSymbol=_r,U="toValue(handle)[getStringOrSymbol(methodName)]"}return U+=`(${l})`,y.zd||(z.toReturnWire=h,z.emval_returnValue=cb,U=`return emval_returnValue(toReturnWire, destructorsRef, ${U})`),U=`return function (handle, methodName, destructorsRef, args) {
  ${U}
  }`,w=new Function(Object.keys(z),U)(...Object.values(z)),U=`methodCaller<(${T.map(Z=>Z.name)}) => ${y.name}>`,lb(Object.defineProperty(w,"name",{value:U}))}function fb(l,h){return h>>>=0,(l=Ze(l>>>0))==Ze(h)}function mb(l){return(l>>>=0)?(l=_r(l),st(globalThis[l])):st(globalThis)}function gb(l){return l=_r(l>>>0),st(t[l])}function yb(l,h){return h>>>=0,l=Ze(l>>>0),h=Ze(h),st(l[h])}function _b(l){9<(l>>>=0)&&(Yt[l+1]+=1)}function vf(l,h,w,y,T){return Ca[l>>>0](h>>>0,w>>>0,y>>>0,T>>>0)}function wb(l,h,w,y,T){return vf(l>>>0,h>>>0,w>>>0,y>>>0,T>>>0)}function bb(){return st([])}function $b(l){l=Ze(l>>>0);for(var h=Array(l.length),w=0;w<l.length;w++)h[w]=l[w];return st(h)}function xb(l){return st(_r(l>>>0))}function vb(){return st({})}function Sb(l){for(var h=Ze(l>>>=0);h.length;){var w=h.pop();h.pop()(w)}Sa(l)}function Ib(l,h,w){h>>>=0,w>>>=0,l=Ze(l>>>0),h=Ze(h),w=Ze(w),l[h]=w}function Tb(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),A)[h>>>2>>>0]=l.getUTCSeconds(),(v(),A)[h+4>>>2>>>0]=l.getUTCMinutes(),(v(),A)[h+8>>>2>>>0]=l.getUTCHours(),(v(),A)[h+12>>>2>>>0]=l.getUTCDate(),(v(),A)[h+16>>>2>>>0]=l.getUTCMonth(),(v(),A)[h+20>>>2>>>0]=l.getUTCFullYear()-1900,(v(),A)[h+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[h+28>>>2>>>0]=l}var Sf=l=>l%4==0&&(l%100!=0||l%400==0),If=[0,31,60,91,121,152,182,213,244,274,305,335],Tf=[0,31,59,90,120,151,181,212,243,273,304,334];function kb(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),A)[h>>>2>>>0]=l.getSeconds(),(v(),A)[h+4>>>2>>>0]=l.getMinutes(),(v(),A)[h+8>>>2>>>0]=l.getHours(),(v(),A)[h+12>>>2>>>0]=l.getDate(),(v(),A)[h+16>>>2>>>0]=l.getMonth(),(v(),A)[h+20>>>2>>>0]=l.getFullYear()-1900,(v(),A)[h+24>>>2>>>0]=l.getDay();var w=(Sf(l.getFullYear())?If:Tf)[l.getMonth()]+l.getDate()-1|0;(v(),A)[h+28>>>2>>>0]=w,(v(),A)[h+36>>>2>>>0]=-60*l.getTimezoneOffset(),w=new Date(l.getFullYear(),6,1).getTimezoneOffset();var y=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(w!=y&&l.getTimezoneOffset()==Math.min(y,w)),(v(),A)[h+32>>>2>>>0]=l}function Eb(l){l>>>=0;var h=new Date((v(),A)[l+20>>>2>>>0]+1900,(v(),A)[l+16>>>2>>>0],(v(),A)[l+12>>>2>>>0],(v(),A)[l+8>>>2>>>0],(v(),A)[l+4>>>2>>>0],(v(),A)[l>>>2>>>0],0),w=(v(),A)[l+32>>>2>>>0],y=h.getTimezoneOffset(),T=new Date(h.getFullYear(),6,1).getTimezoneOffset(),E=new Date(h.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(E,T);return 0>w?(v(),A)[l+32>>>2>>>0]=+(T!=E&&z==y):0<w!=(z==y)&&(T=Math.max(E,T),h.setTime(h.getTime()+6e4*((0<w?z:T)-y))),(v(),A)[l+24>>>2>>>0]=h.getDay(),w=(Sf(h.getFullYear())?If:Tf)[h.getMonth()]+h.getDate()-1|0,(v(),A)[l+28>>>2>>>0]=w,(v(),A)[l>>>2>>>0]=h.getSeconds(),(v(),A)[l+4>>>2>>>0]=h.getMinutes(),(v(),A)[l+8>>>2>>>0]=h.getHours(),(v(),A)[l+12>>>2>>>0]=h.getDate(),(v(),A)[l+16>>>2>>>0]=h.getMonth(),(v(),A)[l+20>>>2>>>0]=h.getYear(),l=h.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function kf(l,h,w,y,T,E,z){return i?ne(16,1,l,h,w,y,T,E,z):-52}function Ef(l,h,w,y,T,E){if(i)return ne(17,1,l,h,w,y,T,E)}var Rn={},Mb=()=>performance.timeOrigin+performance.now();function Mf(l,h){if(i)return ne(18,1,l,h);if(Rn[l]&&(clearTimeout(Rn[l].id),delete Rn[l]),!h)return 0;var w=setTimeout(()=>{delete Rn[l],fr(()=>Vf(l,performance.timeOrigin+performance.now()))},h);return Rn[l]={id:w,Yd:h},0}function Cb(l,h,w,y){l>>>=0,h>>>=0,w>>>=0,y>>>=0;var T=new Date().getFullYear(),E=new Date(T,0,1).getTimezoneOffset();T=new Date(T,6,1).getTimezoneOffset();var z=Math.max(E,T);(v(),q)[l>>>2>>>0]=60*z,(v(),A)[h>>>2>>>0]=+(E!=T),l=(h=U=>{var Z=Math.abs(U);return`UTC${0<=U?"-":"+"}${String(Math.floor(Z/60)).padStart(2,"0")}${String(Z%60).padStart(2,"0")}`})(E),h=h(T),T<E?(Ct(l,w,17),Ct(h,y,17)):(Ct(l,y,17),Ct(h,w,17))}var Ab=()=>Date.now();function zb(l,h,w){return w>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(v(),se)[w>>>3>>>0]=BigInt(l),0):28}var Aa=[],Cf=(l,h)=>{Aa.length=0;for(var w;w=(v(),H)[l++>>>0];){var y=w!=105;h+=(y&=w!=112)&&h%8?4:0,Aa.push(w==112?(v(),q)[h>>>2>>>0]:w==106?(v(),se)[h>>>3>>>0]:w==105?(v(),A)[h>>>2>>>0]:(v(),K)[h>>>3>>>0]),h+=y?8:4}return Aa};function Rb(l,h,w){return l>>>=0,h=Cf(h>>>0,w>>>0),Pa[l](...h)}function Ob(l,h,w){return l>>>=0,h=Cf(h>>>0,w>>>0),Pa[l](...h)}var Nb=()=>{};function Bb(l,h){return k(Ne(l>>>0,h>>>0))}var Db=()=>{throw we+=1,"unwind"};function Ub(){return 4294901760}var Pb=()=>navigator.hardwareConcurrency,Zt={},wr=l=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+h[1]:0},Af=l=>{for(var h of l)(l=wr(h))&&(Zt[l]=h)};function Lb(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Af(l),Zt.gd=wr(l[3]),Zt.Jd=l,Zt.gd}function br(l){if(!(l=Zt[l>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(l))l=h[1];else{if(!(h=/^(.+?)@/.exec(l)))return 0;l=h[1]}pt(br.hd??0),h=hr(l)+1;var w=On(h);return w&&Ct(l,w,h),br.hd=w,br.hd}function qb(l){l>>>=0;var h=(v(),H).length;if(l<=h||4294901760<l)return!1;for(var w=1;4>=w;w*=2){var y=h*(1+.2/w);y=Math.min(y,l+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(l,y)/65536))-Mt.buffer.byteLength+65535)/65536|0;try{Mt.grow(y),Y();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}function Gb(l,h,w){if(l>>>=0,h>>>=0,Zt.gd==l)var y=Zt.Jd;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),Af(y);for(var T=3;y[T]&&wr(y[T])!=l;)++T;for(l=0;l<w&&y[l+T];++l)(v(),A)[h+4*l>>>2>>>0]=wr(y[l+T]);return l}var za,Ra={},zf=()=>{var y;if(!za){var l,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((y=globalThis.navigator)==null?void 0:y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Ra)Ra[l]===void 0?delete h[l]:h[l]=Ra[l];var w=[];for(l in h)w.push(`${l}=${h[l]}`);za=w}return za};function Rf(l,h){if(i)return ne(19,1,l,h);l>>>=0,h>>>=0;var w,y=0,T=0;for(w of zf()){var E=h+y;(v(),q)[l+T>>>2>>>0]=E,y+=Ct(w,E,1/0)+1,T+=4}return 0}function Of(l,h){if(i)return ne(20,1,l,h);l>>>=0,h>>>=0;var w=zf();for(var y of((v(),q)[l>>>2>>>0]=w.length,l=0,w))l+=hr(y)+1;return(v(),q)[h>>>2>>>0]=l,0}function Nf(l){return i?ne(21,1,l):52}function Bf(l,h,w,y){return i?ne(22,1,l,h,w,y):52}function Df(l,h,w,y){return i?ne(23,1,l,h,w,y):70}var Wb=[null,[],[]];function Uf(l,h,w,y){if(i)return ne(24,1,l,h,w,y);h>>>=0,w>>>=0,y>>>=0;for(var T=0,E=0;E<w;E++){var z=(v(),q)[h>>>2>>>0],U=(v(),q)[h+4>>>2>>>0];h+=8;for(var Z=0;Z<U;Z++){var ee=l,he=(v(),H)[z+Z>>>0],be=Wb[ee];he===0||he===10?((ee===1?S:k)(tf(be)),be.length=0):be.push(he)}T+=U}return(v(),q)[y>>>2>>>0]=T,0}function Vb(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)zn();te.push(async()=>{var h=(async function(){if(!i)return Promise.all(Pe.map(Xt))})();ue++,await h,--ue==0&&de&&(h=de,de=null,h())})})(),i||(Mt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Y()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>me(),t.stackRestore=l=>fe(l),t.stackAlloc=l=>Ba(l),t.setValue=function(l,h,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":case"i8":(v(),N)[l>>>0]=h;break;case"i16":(v(),P)[l>>>1>>>0]=h;break;case"i32":(v(),A)[l>>>2>>>0]=h;break;case"i64":(v(),se)[l>>>3>>>0]=BigInt(h);break;case"float":(v(),F)[l>>>2>>>0]=h;break;case"double":(v(),K)[l>>>3>>>0]=h;break;case"*":(v(),q)[l>>>2>>>0]=h;break;default:W(`invalid type for setValue: ${w}`)}},t.getValue=function(l,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),N)[l>>>0];case"i16":return(v(),P)[l>>>1>>>0];case"i32":return(v(),A)[l>>>2>>>0];case"i64":return(v(),se)[l>>>3>>>0];case"float":return(v(),F)[l>>>2>>>0];case"double":return(v(),K)[l>>>3>>>0];case"*":return(v(),q)[l>>>2>>>0];default:W(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Ne,t.stringToUTF8=Ct,t.lengthBytesUTF8=hr;var Pf,Lf,$r,pt,On,Oa,qf,Gf,Wf,Na,Vf,Ff,ge,Nn,Hf,fe,Ba,me,jf,Da,Kf,Xf,Yf,Ua,Zf,Qf,Jf,em,tm,nm,rm,im,am,sm,om,um,lm,dm,cm,pm,hm,fm,mm,gm,ym,_m,wm,bm,$m,xm,vm,Sm,Im,Tm,km,Em,Mm,Cm,Am,zm,Rm,Om,Nm,xt,Fb=[Me,Re,Zh,nf,rf,af,sf,of,uf,lf,df,cf,pf,hf,ff,mf,kf,Ef,Mf,Rf,Of,Nf,Bf,Df,Uf],Pa={1003524:(l,h,w,y,T)=>{if(t===void 0||!t.Xc)return 1;if((l=Ne(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(h=Number(h>>>0),w=Number(w>>>0),y=Number(y>>>0),h+w>l.byteLength)return 3;try{let E=l.subarray(h,h+w);switch(T){case 0:(v(),H).set(E,y>>>0);break;case 1:t.Qd?t.Qd(y,E):t.Id(y,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,h,w)=>{t.td(l,(v(),H).subarray(h>>>0,h+w>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w),!0)},1004704:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,h,w)=>{t.$b("HardSigmoid",l,{alpha:h,beta:w})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,h,w)=>{t.$b("Clip",l,{min:h,max:w})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,h)=>{t.$b("Elu",l,{alpha:h})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,h)=>{t.$b("LeakyRelu",l,{alpha:h})},1006444:(l,h)=>{t.$b("ThresholdedRelu",l,{alpha:h})},1006514:(l,h)=>{t.$b("Cast",l,{to:h})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,h,w,y,T)=>{t.$b("ReduceMean",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007283:(l,h,w,y,T)=>{t.$b("ReduceMax",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007457:(l,h,w,y,T)=>{t.$b("ReduceMin",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007631:(l,h,w,y,T)=>{t.$b("ReduceProd",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007806:(l,h,w,y,T)=>{t.$b("ReduceSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1007980:(l,h,w,y,T)=>{t.$b("ReduceL1",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008153:(l,h,w,y,T)=>{t.$b("ReduceL2",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008326:(l,h,w,y,T)=>{t.$b("ReduceLogSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008503:(l,h,w,y,T)=>{t.$b("ReduceSumSquare",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008683:(l,h,w,y,T)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,h,w)=>{t.$b("Transpose",l,{perm:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[]})},1009040:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Ne(w),format:y?"NHWC":"NCHW"})},1009173:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Ne(w),format:y?"NHWC":"NCHW"})},1009306:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee,zt)=>{t.$b("ConvTranspose",l,{format:Z?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[T],pads:[E,z],strides:[U],wIsConst:()=>!!(v(),N)[ee>>>0],outputPadding:he?Array.from((v(),A).subarray(Number(he)>>>0,Number(be)>>>0)):[],outputShape:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ee)>>>0)):[],activation:Ne(zt)})},1009739:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee)=>{t.$b("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),A).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[Z>>>0],outputPadding:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],outputShape:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Se)>>>0)):[],activation:Ne(Ee)})},1010400:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee,zt)=>{t.$b("ConvTranspose",l,{format:Z?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[T],pads:[E,z],strides:[U],wIsConst:()=>!!(v(),N)[ee>>>0],outputPadding:he?Array.from((v(),A).subarray(Number(he)>>>0,Number(be)>>>0)):[],outputShape:Se?Array.from((v(),A).subarray(Number(Se)>>>0,Number(Ee)>>>0)):[],activation:Ne(zt)})},1010833:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee)=>{t.$b("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),A).subarray(Number(T)>>>0,(Number(T)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),N)[Z>>>0],outputPadding:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],outputShape:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Se)>>>0)):[],activation:Ne(Ee)})},1011494:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1011585:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee)=>{t.$b("AveragePool",l,{format:Ee?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Se)>>>0)):[]})},1012064:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1012155:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee)=>{t.$b("AveragePool",l,{format:Ee?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Se)>>>0)):[]})},1012634:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1012721:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee)=>{t.$b("MaxPool",l,{format:Ee?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Se)>>>0)):[]})},1013196:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1013283:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee)=>{t.$b("MaxPool",l,{format:Ee?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:T,dilations:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],strides:be?Array.from((v(),A).subarray(Number(be)>>>0,Number(Se)>>>0)):[]})},1013758:(l,h,w,y,T)=>{t.$b("Gemm",l,{alpha:h,beta:w,transA:y,transB:T})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,h,w,y)=>{t.$b("ArgMax",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014024:(l,h,w,y)=>{t.$b("ArgMin",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014132:(l,h)=>{t.$b("Softmax",l,{axis:h})},1014195:(l,h)=>{t.$b("Concat",l,{axis:h})},1014255:(l,h,w,y,T)=>{t.$b("Split",l,{axis:h,numOutputs:w,splitSizes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,h)=>{t.$b("Gather",l,{axis:Number(h)})},1014536:(l,h)=>{t.$b("GatherElements",l,{axis:Number(h)})},1014615:(l,h)=>{t.$b("GatherND",l,{batch_dims:Number(h)})},1014694:(l,h,w,y,T,E,z,U,Z,ee,he)=>{t.$b("Resize",l,{antialias:h,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],coordinateTransformMode:Ne(T),cubicCoeffA:E,excludeOutside:z,extrapolationValue:U,keepAspectRatioPolicy:Ne(Z),mode:Ne(ee),nearestMode:Ne(he)})},1015056:(l,h,w,y,T,E,z)=>{t.$b("Slice",l,{starts:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[],ends:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[],axes:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(z)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015486:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,h)=>{t.$b("Einsum",l,{equation:Ne(h)})},1015734:(l,h,w,y,T)=>{t.$b("Pad",l,{mode:h,value:w,pads:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(T)>>>0)):[]})},1015877:(l,h,w,y,T,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!T,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016046:(l,h,w,y,T,E)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!T,trainingMode:!!y,format:E?"NHWC":"NCHW"})},1016215:(l,h,w)=>{t.$b("CumSum",l,{exclusive:Number(h),reverse:Number(w)})},1016312:(l,h,w)=>{t.$b("DequantizeLinear",l,{axis:h,blockSize:w})},1016402:(l,h,w,y,T)=>{t.$b("GridSample",l,{align_corners:h,mode:Ne(w),padding_mode:Ne(y),format:T?"NHWC":"NCHW"})},1016572:(l,h,w,y,T)=>{t.$b("GridSample",l,{align_corners:h,mode:Ne(w),padding_mode:Ne(y),format:T?"NHWC":"NCHW"})},1016742:(l,h)=>{t.$b("ScatterND",l,{reduction:Ne(h)})},1016827:(l,h,w,y,T,E,z,U,Z)=>{t.$b("Attention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:T,doRotary:E,qkvHiddenSizes:z?Array.from((v(),A).subarray(Number(U)>>>0,Number(U)+z>>>0)):[],pastPresentShareBuffer:!!Z})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee,zt,La)=>{t.$b("Conv",l,{format:be?"NHWC":"NCHW",auto_pad:h,dilations:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],group:T,kernel_shape:E?Array.from((v(),A).subarray(Number(E)>>>0,Number(z)>>>0)):[],pads:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],strides:ee?Array.from((v(),A).subarray(Number(ee)>>>0,Number(he)>>>0)):[],w_is_const:()=>!!(v(),N)[Number(Se)>>>0],activation:Ne(Ee),activation_params:zt?Array.from((v(),F).subarray(Number(zt)>>>0,Number(La)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,h,w,y,T,E,z,U,Z)=>{t.$b("GroupQueryAttention",l,{numHeads:h,kvNumHeads:w,scale:y,softcap:T,doRotary:E,rotaryInterleaved:z,smoothSoftmax:U,localWindowSize:Z})},1018124:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018235:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018346:(l,h,w,y,T,E)=>{t.$b("MatMulNBits",l,{k:h,n:w,accuracyLevel:y,bits:T,blockSize:E})},1018473:(l,h,w,y,T,E)=>{t.$b("MultiHeadAttention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:T,doRotary:E})},1018632:(l,h)=>{t.$b("QuickGelu",l,{alpha:h})},1018696:(l,h,w,y,T)=>{t.$b("RotaryEmbedding",l,{interleaved:!!h,numHeads:w,rotaryEmbeddingDim:y,scale:T})},1018835:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1018937:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1019039:(l,h,w,y)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:h,quantizeAxis:w,blockSize:y})},1019160:l=>{t.Fd(l)},1019194:(l,h)=>t.Hd(Number(l),Number(h),t.Yc.Kd,t.Yc.errors)};function Hb(l,h,w){return xf(async()=>{await t.Dd(Number(l),Number(h),Number(w))})}function jb(){return typeof wasmOffsetConverter<"u"}function Kb(l,h,w,y){var T=me();try{return im(l,h,w,y)}catch(E){if(fe(T),E!==E+0)throw E;ge(1,0)}}function Xb(l,h,w){var y=me();try{return em(l,h,w)}catch(T){if(fe(y),T!==T+0)throw T;ge(1,0)}}function Yb(l){var h=me();try{Zf(l)}catch(w){if(fe(h),w!==w+0)throw w;ge(1,0)}}function Zb(l,h){var w=me();try{return Ua(l,h)}catch(y){if(fe(w),y!==y+0)throw y;ge(1,0)}}function Qb(l,h,w){var y=me();try{Yf(l,h,w)}catch(T){if(fe(y),T!==T+0)throw T;ge(1,0)}}function Jb(l,h){var w=me();try{am(l,h)}catch(y){if(fe(w),y!==y+0)throw y;ge(1,0)}}function e1(l,h,w,y,T,E,z){var U=me();try{return nm(l,h,w,y,T,E,z)}catch(Z){if(fe(U),Z!==Z+0)throw Z;ge(1,0)}}function t1(l,h,w,y,T,E){var z=me();try{Qf(l,h,w,y,T,E)}catch(U){if(fe(z),U!==U+0)throw U;ge(1,0)}}function n1(l,h,w,y){var T=me();try{rm(l,h,w,y)}catch(E){if(fe(T),E!==E+0)throw E;ge(1,0)}}function r1(l,h,w,y,T){var E=me();try{Jf(l,h,w,y,T)}catch(z){if(fe(E),z!==z+0)throw z;ge(1,0)}}function i1(l,h,w,y,T,E,z){var U=me();try{om(l,h,w,y,T,E,z)}catch(Z){if(fe(U),Z!==Z+0)throw Z;ge(1,0)}}function a1(l,h,w,y,T,E,z){var U=me();try{um(l,h,w,y,T,E,z)}catch(Z){if(fe(U),Z!==Z+0)throw Z;ge(1,0)}}function s1(l,h,w,y,T,E,z,U){var Z=me();try{pm(l,h,w,y,T,E,z,U)}catch(ee){if(fe(Z),ee!==ee+0)throw ee;ge(1,0)}}function o1(l,h,w,y,T){var E=me();try{return sm(l,h,w,y,T)}catch(z){if(fe(E),z!==z+0)throw z;ge(1,0)}}function u1(l,h,w){var y=me();try{return hm(l,h,w)}catch(T){if(fe(y),T!==T+0)throw T;ge(1,0)}}function l1(l,h,w,y,T,E,z,U){var Z=me();try{fm(l,h,w,y,T,E,z,U)}catch(ee){if(fe(Z),ee!==ee+0)throw ee;ge(1,0)}}function d1(l,h,w,y,T,E,z,U,Z,ee,he,be){var Se=me();try{lm(l,h,w,y,T,E,z,U,Z,ee,he,be)}catch(Ee){if(fe(Se),Ee!==Ee+0)throw Ee;ge(1,0)}}function c1(l,h,w,y,T,E){var z=me();try{return dm(l,h,w,y,T,E)}catch(U){if(fe(z),U!==U+0)throw U;ge(1,0)}}function p1(l,h,w){var y=me();try{return mm(l,h,w)}catch(T){if(fe(y),T!==T+0)throw T;return ge(1,0),0n}}function h1(l,h,w,y,T,E,z,U,Z){var ee=me();try{tm(l,h,w,y,T,E,z,U,Z)}catch(he){if(fe(ee),he!==he+0)throw he;ge(1,0)}}function f1(l){var h=me();try{return gm(l)}catch(w){if(fe(h),w!==w+0)throw w;ge(1,0)}}function m1(l,h){var w=me();try{return Am(l,h)}catch(y){if(fe(w),y!==y+0)throw y;return ge(1,0),0n}}function g1(l){var h=me();try{return ym(l)}catch(w){if(fe(h),w!==w+0)throw w;return ge(1,0),0n}}function y1(l,h,w,y){var T=me();try{return vm(l,h,w,y)}catch(E){if(fe(T),E!==E+0)throw E;ge(1,0)}}function _1(l,h,w,y,T){var E=me();try{return Sm(l,h,w,y,T)}catch(z){if(fe(E),z!==z+0)throw z;ge(1,0)}}function w1(l,h,w,y,T,E){var z=me();try{return Im(l,h,w,y,T,E)}catch(U){if(fe(z),U!==U+0)throw U;ge(1,0)}}function b1(l,h,w,y,T,E){var z=me();try{return Tm(l,h,w,y,T,E)}catch(U){if(fe(z),U!==U+0)throw U;ge(1,0)}}function $1(l,h,w,y,T,E,z,U){var Z=me();try{return cm(l,h,w,y,T,E,z,U)}catch(ee){if(fe(Z),ee!==ee+0)throw ee;ge(1,0)}}function x1(l,h,w,y,T){var E=me();try{return km(l,h,w,y,T)}catch(z){if(fe(E),z!==z+0)throw z;return ge(1,0),0n}}function v1(l,h,w,y){var T=me();try{return Em(l,h,w,y)}catch(E){if(fe(T),E!==E+0)throw E;ge(1,0)}}function S1(l,h,w,y){var T=me();try{return Mm(l,h,w,y)}catch(E){if(fe(T),E!==E+0)throw E;ge(1,0)}}function I1(l,h,w,y,T,E,z,U,Z,ee,he,be){var Se=me();try{return Cm(l,h,w,y,T,E,z,U,Z,ee,he,be)}catch(Ee){if(fe(Se),Ee!==Ee+0)throw Ee;ge(1,0)}}function T1(l,h,w,y,T,E,z,U,Z,ee,he){var be=me();try{$m(l,h,w,y,T,E,z,U,Z,ee,he)}catch(Se){if(fe(be),Se!==Se+0)throw Se;ge(1,0)}}function k1(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee,zt,La){var A1=me();try{xm(l,h,w,y,T,E,z,U,Z,ee,he,be,Se,Ee,zt,La)}catch(qa){if(fe(A1),qa!==qa+0)throw qa;ge(1,0)}}function E1(l,h,w){var y=me();try{return _m(l,h,w)}catch(T){if(fe(y),T!==T+0)throw T;ge(1,0)}}function M1(l,h,w){var y=me();try{return wm(l,h,w)}catch(T){if(fe(y),T!==T+0)throw T;ge(1,0)}}function C1(l,h,w,y){var T=me();try{bm(l,h,w,y)}catch(E){if(fe(T),E!==E+0)throw E;ge(1,0)}}function xr(){if(0<ue)de=xr;else if(i)_==null||_(t),j();else{for(var l=te;0<l.length;)l.shift()(t);0<ue?de=xr:(t.calledRun=!0,M||(j(),_==null||_(t)))}}return i||(xt=await ye(),xr()),t.PTR_SIZE=4,G?t:new Promise((l,h)=>{_=l,b=h})}var ds,cs,ag=X(()=>{var e,t;ds=ls,cs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),cs&&ls()}),Ar,zr,ps,je,hs,Pn,fs,ms,Rr,gs,Or,ys,Nr,_s,Br=X(()=>{Er(),Ar=typeof location>"u"?void 0:location.origin,zr=self.location.href>"file:"&&self.location.href<"file;",ps=()=>{{if(zr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,Ar).href}return self.location.href}},je=ps(),hs=()=>{if(je&&!je.startsWith("blob:"))return je.substring(0,je.lastIndexOf("/")+1)},Pn=(e,t)=>{try{let n=t??je;return(n?new URL(e,n):new URL(e)).origin===Ar}catch{return!1}},fs=(e,t)=>{let n=t??je;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},ms=(e,t)=>`${t??"./"}${e}`,Rr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},gs=async e=>(await import(e)).default,Or=(ig(),cn(ss)).default,ys=async()=>{if(!je)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Pn(je))return[void 0,Or()];let e=await Rr(je);return[e,Or(e)]},Nr=(ag(),cn(us)).default,_s=async(e,t,n,r)=>{let i=Nr&&!(e||t);if(i)if(je)i=Pn(je)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Nr];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??fs(a,t),o=n&&s&&!Pn(s,t),u=o?await Rr(s):s??ms(a,t);return[o?u:void 0,await gs(u)]}}}),Dr,Ln,fn,Ur,ws,bs,$s,Pr,Te,Bt=X(()=>{Br(),Ln=!1,fn=!1,Ur=!1,ws=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},bs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},$s=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Pr=async e=>{if(Ln)return Promise.resolve();if(fn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ur)throw new Error("previous call to 'initializeWebAssembly()' failed.");fn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!$s())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!bs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=ws();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,p=e.wasmBinary,[c,f]=await _s(o,a,n>1,!!p||!!d),m=!1,g=[];if(t>0&&g.push(new Promise(_=>{setTimeout(()=>{m=!0,_()},t)})),g.push(new Promise((_,b)=>{let x={numThreads:n};if(p)x.wasmBinary=p,x.locateFile=$=>$;else if(d||a)x.locateFile=$=>d??a+$;else if(o&&o.indexOf("blob:")!==0)x.locateFile=$=>new URL($,o).href;else if(c){let $=hs();$&&(x.locateFile=I=>$+I)}f(x).then($=>{fn=!1,Ln=!0,Dr=$,_(),c&&URL.revokeObjectURL(c)},$=>{fn=!1,Ur=!0,b($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(Ln&&Dr)return Dr;throw new Error("WebAssembly is not initialized yet.")}}),Je,qn,ve,Lr=X(()=>{Bt(),Je=(e,t)=>{let n=Te(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},qn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")qn(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ve=e=>{let t=Te(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),xs,sg=X(()=>{Bt(),Lr(),xs=e=>{let t=Te(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=Je(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&ve("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&qn(e.extra,"",new WeakSet,(s,o)=>{let u=Je(s,r),d=Je(o,r);t._OrtAddRunConfigEntry(n,u,d)!==0&&ve(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),vs,Ss,Is,Dt,Ts,ks,og=X(()=>{Bt(),Lr(),vs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ss=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Is=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},Dt=(e,t,n,r)=>{let i=Je(t,r),a=Je(n,r);Te()._OrtAddSessionConfigEntry(e,i,a)!==0&&ve(`Can't set a session config entry: ${t} - ${n}.`)},Ts=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",Dt(e,"session.disable_quant_qdq","1",n),Dt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&Dt(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Dt(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=Je(a,n),u=s.length,d=0,p=0;if(u>0){d=Te()._malloc(u*Te().PTR_SIZE),n.push(d),p=Te()._malloc(u*Te().PTR_SIZE),n.push(p);for(let c=0;c<u;c++)Te().setValue(d+c*Te().PTR_SIZE,s[c][0],"*"),Te().setValue(p+c*Te().PTR_SIZE,s[c][1],"*")}await Te()._OrtAppendExecutionProvider(e,o,d,p,u)!==0&&ve(`Can't append execution provider: ${a}.`)}},ks=async e=>{let t=Te(),n=0,r=[],i=e||{};Is(i);try{let a=vs(i.graphOptimizationLevel??"all"),s=Ss(i.executionMode??"sequential"),o=typeof i.logId=="string"?Je(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof i.optimizedModelFilePath=="string"?Je(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,d,p),n===0&&ve("Can't create session options."),i.executionProviders&&await Ts(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Dt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,f]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=Je(c,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&ve(`Can't set a free dimension override: ${c} - ${f}.`)}return i.extra!==void 0&&qn(i.extra,"",new WeakSet,(c,f)=>{Dt(n,c,f,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&ve("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),Ut,mt,Pt,Gn,Wn,qr,Gr,Wr,le=X(()=>{Ut=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},mt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Pt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Gn=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Wn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},qr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Gr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Vr,Es=X(()=>{Er(),Vr=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ms,Cs,As,zs,Fr,Rs,_e,gt=X(()=>{le(),Ms=["V","I","W","E","F"],Cs=(e,t)=>{console.log(`[${Ms[e]},${new Date().toISOString()}]${t}`)},Fr=(e,t)=>{As=e,zs=t},Rs=(e,t)=>{let n=Wn(e),r=Wn(As);n>=r&&Cs(n,typeof t=="function"?t():t)},_e=(...e)=>{zs&&Rs(...e)}}),Os,nn,B,Vn,Ns,Bs,Ds,ce=X(()=>{Os=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},nn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=Os.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},B=class vr{static size(t){return vr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return vr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return vr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Vn=class Bn{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Bn.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Bn.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Bn.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(Bn.adjustPadAndReturnShape(n[d+2],i[d],a[d],s[d],o,d,d+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let d=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/n+1)}},Ns=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!nn.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Bs=-34028234663852886e22,Ds=34028234663852886e22}),Hr,Us=X(()=>{le(),Hr=(e,t)=>new(Gn(t))(e)}),jr,Kr,Xr,Ps,Yr,Ls,Zr,Qr,Jr,qs,Gs,ug=X(()=>{le(),gt(),jr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Kr=(e,t)=>{if(t==="int32")return e;let n=jr.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Gn(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Xr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ps=1,Yr=()=>Ps++,Ls=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Zr=(e,t)=>{let n=jr.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Qr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Zr(this.dataType,this.tensorShape)}destroy(){_e("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Xr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},Jr=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Ls.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);_e("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Zr(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Kr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else _e("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Xr(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},qs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Yr();return this.tensorTrackersById.set(e,new Jr(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){_e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){_e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Yr(),s=new Qr({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Jr(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,n)){_e("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(d,1)[0];return c.sessionId=e,c}_e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Qr({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Gs=(...e)=>new qs(...e)}),mn,Ws,Vs,lg=X(()=>{le(),Bt(),Us(),ug(),gt(),mn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ws=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},Vs=class{constructor(e){this.tensorManager=Gs(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Fr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){_e("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){_e("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)_e("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Ws(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){_e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=mn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){_e("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=mn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");_e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Hr(n,t)}}registerMLTensor(e,t,n,r){let i=mn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return _e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+n).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let c=Kr(new Uint8Array(d),"int64");p=new Int32Array(c.buffer),i.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return _e("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=mn.get(Ut(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ei=X(()=>{}),ti,Fn,Hn,Fs,Hs,ni,ri,js,Ks,dg=X(()=>{gt(),ei(),ti=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Fn=[],Hn=e=>Math.ceil(Number(e)/16)*16,Fs=e=>{for(let t=0;t<Fn.length;t++){let n=Fn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Hs=1,ni=()=>Hs++,ri=async(e,t,n,r)=>{let i=Hn(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},js=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ti)Fn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Hn(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),_e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Hn(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return _e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=ni();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),_e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),_e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Fs(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:ni(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),_e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return _e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await ri(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ti.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(_e("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ks=(...e)=>new js(...e)}),Xs,xe,ze=X(()=>{Xs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},xe=e=>new Xs(e)}),rn,jn,Be,Le,ae,Ce,ii,an,St,ie,gn,L,re,Ys,ai,Zs,Qs,pe=X(()=>{le(),ce(),rn=64,jn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Be=(e,t=1)=>{let n=jn(e,t);return typeof n=="string"?n:n[0]},Le=(e,t=1)=>{let n=jn(e,t);return typeof n=="string"?n:n[1]},ae=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:B.computeStrides(n)})}),t},Ce=e=>e%4===0?4:e%2===0?2:1,ii=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,an=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,St=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ie=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,gn=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=jn(t,i),p=typeof d=="string"?d:d[1],c=typeof d=="string"?d:d[0],f={indices:u,value:p,storage:c,tensor:t},m=G=>typeof G=="string"?G:`${G}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=a?"uniforms.":"",b=`${_}${e}_shape`,x=`${_}${e}_strides`,$="";for(let G=0;G<s-1;G++)$+=`
    let dim${G} = current / ${ie(x,G,s)};
    let rest${G} = current % ${ie(x,G,s)};
    indices[${G}] = dim${G};
    current = rest${G};
    `;$+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=G=>(g.offsetToIndices=!0,s<2?G:`o2i_${e}(${G})`),k=[];if(s>=2)for(let G=s-1;G>=0;G--)k.push(`${ie(x,G,s)} * (indices[${G}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,C=G=>(g.indicesToOffset=!0,s<2?G:`i2o_${e}(${G})`),v=(...G)=>s===0?"0u":`${f.indices}(${G.map(m).join(",")})`,R=(G,Y)=>s<2?`${G}`:`${ie(G,Y,s)}`,N=(G,Y,j)=>s<2?`${G}=${j};`:`${ie(G,Y,s)}=${j};`,H={},P=(G,Y)=>{g.broadcastedIndicesToOffset=!0;let j=`${Y.name}broadcastedIndicesTo${e}Offset`;if(j in H)return`${j}(${G})`;let W=[];for(let oe=s-1;oe>=0;oe--){let ye=Y.indicesGet("outputIndices",oe+Y.rank-s);W.push(`${R(x,oe)} * (${ye} % ${R(b,oe)})`)}return H[j]=`fn ${j}(outputIndices: ${Y.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${j}(${G})`},V=(G,Y)=>(()=>{if(f.storage===f.value)return`${e}[${G}]=${Y};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${G}]=vec2<u32>(u32(${Y}), select(0u, 0xFFFFFFFFu, ${Y} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${G}]=vec2<u32>(u32(${Y}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${G}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Y}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=G=>(()=>{if(f.storage===f.value)return`${e}[${G}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${G}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${G}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${G}] & 0xFFu), bool(${e}[${G}] & 0xFF00u), bool(${e}[${G}] & 0xFF0000u), bool(${e}[${G}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),q=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${A(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{let G=o.map(j=>`d${j}: u32`).join(", "),Y=o.map(j=>`d${j}`).join(", ");return`
  fn get_${e}(${G}) -> ${p} {
    return get_${e}ByIndices(${v(Y)});
  }`})(),K=(...G)=>{if(G.length!==s)throw new Error(`indices length must be ${s}`);let Y=G.map(m).join(",");return s===0?A("0u"):s===1?A(Y[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${Y})`)},se=G=>s<2?A(G):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${G})`),D=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,J=s<2?"":(()=>{let G=o.map(j=>`d${j}: u32`).join(", "),Y=o.map(j=>`d${j}`).join(", ");return`
  fn set_${e}(${G}, value: ${p}) {
    set_${e}ByIndices(${v(Y)}, value);
  }`})();return{impl:()=>{let G=[],Y=!1;return g.offsetToIndices&&(G.push(I),Y=!0),g.indicesToOffset&&(G.push(M),Y=!0),g.broadcastedIndicesToOffset&&(Object.values(H).forEach(j=>G.push(j)),Y=!0),g.set&&(G.push(J),Y=!0),g.setByIndices&&(G.push(D),Y=!0),g.get&&(G.push(F),Y=!0),g.getByIndices&&(G.push(q),Y=!0),!a&&Y&&G.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${x} = ${f.indices}(${B.computeStrides(n).join(",")});`),G.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:P,indices:v,indicesGet:R,indicesSet:N,set:(...G)=>{if(G.length!==s+1)throw new Error(`indices length must be ${s}`);let Y=G[s];if(typeof Y!="string")throw new Error("value must be string");let j=G.slice(0,s).map(m).join(",");return s===0?V("0u",Y):s===1?V(j[0],Y):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${j}, ${Y})`)},setByOffset:V,setByIndices:(G,Y)=>s<2?V(G,Y):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${G}, ${Y});`),get:K,getByOffset:A,getByIndices:se,usage:r,name:e,strides:x,shape:b,rank:s}},L=(e,t,n,r=1)=>gn(e,t,n,"input",r),re=(e,t,n,r=1)=>gn(e,t,n,"output",r),Ys=(e,t,n)=>gn(e,t,n,"atomicOutput",1),ai=(e,t,n,r=1)=>gn(e,t,n,"internal",r),Zs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=rn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Qs=(e,t)=>new Zs(e,t)}),Js,si,eo,to,no,ro,Ke,io,ao,It=X(()=>{le(),ce(),ze(),pe(),Js=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},si=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),eo=(e,t)=>B.sortBasedOnPerm(e,si(e.length,t)),to=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},no=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},ro=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Ke=(e,t)=>{let n=e.dataType,r=e.dims.length,i=si(r,t),a=eo(e.dims,i),s=e.dims,o=a,u=r<2||ro(i,e.dims),d;if(u)return d=g=>{let _=L("input",n,s,4),b=re("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:d};let{newShape:p,newPerm:c}=no(e.dims,i),f=B.areEqual(c,[2,3,1]),m=B.areEqual(c,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let g=16;return d=_=>{let b=L("a",n,s.length),x=re("output",n,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:_},...ae(s,o)]}},getShaderSource:d}}return d=g=>{let _=L("a",n,s.length),b=re("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}

  ${to(i,r,_,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ae(s,o)]}},getShaderSource:d}},io=(e,t)=>{Js(e.inputs,t.perm),e.compute(Ke(e.inputs[0],t.perm))},ao=e=>xe({perm:e.perm})}),so,oo,uo,lo,co,po,ho,fo,mo,go,et,yo,_o,wo,bo,$o,xo,vo,So,Io,To,cg=X(()=>{le(),ce(),pe(),ui(),It(),so={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},oo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},uo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},lo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},co=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},po=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},ho=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},fo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},mo=(e,t)=>{let n=[];if(!fo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},go=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=B.size(a),d=B.size(s),p=L("_A",n[0].dataType,o),c=re("output",i,a),f=64;u===1&&(f=256);let m=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,g=_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(p,c)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${uo[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${so[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${oo[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${lo[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},et=(e,t,n,r)=>{let i=e.inputs.length===1?n:oi(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=B.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=mo(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Ke(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=co(o.length,u.dims.length));let[p,c]=po(u.dims,o),f=p;i.keepDims&&(f=ho(p,s)),e.compute(go(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,c),{inputs:[u]})},yo=(e,t)=>{et(e,"ReduceMeanShared",t,"mean")},_o=(e,t)=>{et(e,"ReduceL1Shared",t,"l1")},wo=(e,t)=>{et(e,"ReduceL2Shared",t,"l2")},bo=(e,t)=>{et(e,"ReduceLogSumExpShared",t,"logSumExp")},$o=(e,t)=>{et(e,"ReduceMaxShared",t,"max")},xo=(e,t)=>{et(e,"ReduceMinShared",t,"min")},vo=(e,t)=>{et(e,"ReduceProdShared",t,"prod")},So=(e,t)=>{et(e,"ReduceSumShared",t,"sum")},Io=(e,t)=>{et(e,"ReduceSumSquareShared",t,"sumSquare")},To=(e,t)=>{et(e,"ReduceLogSumShared",t,"logSum")}}),tt,ko,Kn,oi,nt,Eo,Mo,Co,Ao,zo,Ro,Oo,No,Bo,Do,rt,Uo,Po,Lo,qo,Go,Wo,Vo,Fo,Ho,jo,ui=X(()=>{le(),ce(),ze(),pe(),cg(),tt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ko=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Kn=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],d=n[0].dims,p=d.length,c=B.normalizeAxes(i,p),f=!o&&c.length===0;d.forEach((_,b)=>{f||c.indexOf(b)>=0?s&&u.push(1):u.push(_)});let m=u.length,g=B.size(u);return{name:e,shaderCache:t,getShaderSource:_=>{let b=[],x=L("_A",n[0].dataType,p),$=re("output",a,m),I=r(x,$,c),S=I[2];for(let k=0,M=0;k<p;k++)f||c.indexOf(k)>=0?(s&&M++,S=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${I[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${x.indicesSet("input_indices",k,`j${k}`)}
                  ${S}
                }`):(b.push(`${x.indicesSet("input_indices",k,$.indicesGet("output_indices",M))};`),M++);return`

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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ae(d,u)]})}},oi=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),xe({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},nt=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:oi(i,n);e.compute(Kn(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?ko:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Eo=(e,t)=>{tt(e.inputs),nt(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},Mo=(e,t)=>{tt(e.inputs),nt(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Co=(e,t)=>{tt(e.inputs),nt(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ao=(e,t)=>{tt(e.inputs),nt(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},zo=(e,t)=>{tt(e.inputs),nt(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Ro=(e,t)=>{tt(e.inputs),nt(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Oo=(e,t)=>{tt(e.inputs),nt(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},No=(e,t)=>{tt(e.inputs),nt(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Bo=(e,t)=>{tt(e.inputs),nt(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Do=(e,t)=>{tt(e.inputs),nt(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},rt=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},Uo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ro(e,t):yo(e,t)},Po=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mo(e,t):_o(e,t)},Lo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Co(e,t):wo(e,t)},qo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ao(e,t):bo(e,t)},Go=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zo(e,t):$o(e,t)},Wo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oo(e,t):xo(e,t)},Vo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):vo(e,t)},Fo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bo(e,t):So(e,t)},Ho=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Do(e,t):Io(e,t)},jo=(e,t)=>{rt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eo(e,t):To(e,t)}}),li,Ko,Xo,di,pg=X(()=>{le(),ze(),ui(),li=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ko=(e,t)=>{li(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Kn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Xo=(e,t)=>{li(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Kn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},di=e=>xe(e)}),Yo,Xn,Zo,Qo,Jo,yn,eu,tu,ci=X(()=>{le(),ce(),ei(),pe(),Yo=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],d=n.dims[1],p=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,f=c,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=d;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=s.dims[3])}let b=g+_,x=-1,$=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:x,inputHiddenSize:p,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Xn=(e,t,n)=>t&&e?`
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
    `,Zo=(e,t,n,r,i,a,s,o)=>{let u=Ce(s?1:a),d=64,p=a/u;p<d&&(d=32);let c=Math.ceil(a/u/d),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:p},{type:12,data:c}],m=Be(e.dataType,u),g=Le(1,u),_=["type"];s&&_.push("type"),o&&_.push("type");let b=x=>{let $=re("x",e.dataType,e.dims,u),I=[$],S=s?L("seq_lens",s.dataType,s.dims):void 0;S&&I.push(S);let k=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;k&&I.push(k);let M=Le(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(C).declareVariables(...I)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Xn(S,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${$.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:_},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Qo=(e,t,n,r,i,a,s,o,u)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],c=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,f,d,a.headSize]:void 0,g=a.nReps?a.nReps:1,_=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=Ce(a.headSize),x=a.headSize/b,$=12,I={x:Math.ceil(d/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:_},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],k=c&&r&&B.size(r.dims)>0,M=["type","type"];k&&M.push("type"),i&&M.push("type"),o&&M.push("type"),u&&M.push("type");let C=[{dims:p,dataType:t.dataType,gpuDataType:0}];c&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=R=>{let N=L("q",t.dataType,t.dims,b),H=L("key",n.dataType,n.dims,b),P=[N,H];if(k){let D=L("past_key",r.dataType,r.dims,b);P.push(D)}i&&P.push(L("attention_bias",i.dataType,i.dims));let V=o?L("seq_lens",o.dataType,o.dims):void 0;V&&P.push(V);let A=u?L("total_sequence_length_input",u.dataType,u.dims):void 0;A&&P.push(A);let q=re("output",t.dataType,p),F=[q];c&&F.push(re("present_key",t.dataType,m,b));let K=Le(1,b),se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${N.type.storage}, ${$*$}>;
  ${R.registerUniforms(se).declareVariables(...P,...F)}
  ${R.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Xn(V,A,!0)}
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
        output[outputIdx] = ${q.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:C,dispatchGroup:I,programUniforms:S}),getShaderSource:v}},Jo=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,d=i.nReps?i.nReps:1,p=i.vHiddenSize*d,c=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,p],_=12,b={x:Math.ceil(i.vHeadSize/_),y:Math.ceil(i.sequenceLength/_),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:d}],$=c&&r&&B.size(r.dims)>0,I=["type","type"];$&&I.push("type"),s&&I.push("type"),o&&I.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=M=>{let C=L("probs",t.dataType,t.dims),v=L("v",n.dataType,n.dims),R=[C,v];$&&R.push(L("past_value",r.dataType,r.dims));let N=s?L("seq_lens",s.dataType,s.dims):void 0;s&&R.push(N);let H=o?L("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(H);let P=[re("output",t.dataType,g)];c&&P.push(re("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${C.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${C.type.value}, ${_*_}>;
  ${M.registerUniforms(V).declareVariables(...R,...P)}
  ${M.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Xn(N,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:x}),getShaderSource:k}},yn=(e,t,n,r,i,a,s,o,u,d,p=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,g=f>1?o:void 0,_=f>1?d.pastSequenceLength:0,b=_+d.kvSequenceLength,x=u&&B.size(u.dims)>0?u:void 0,$=[t,n];m&&B.size(m.dims)>0&&$.push(m),x&&$.push(x),p&&$.push(p),c&&$.push(c);let I=e.compute(Qo(f,t,n,m,x,d,_,p,c),{inputs:$,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Zo(I,d.batchSize,d.numHeads,_,d.sequenceLength,b,p,c),{inputs:p&&c?[I,p,c]:[I],outputs:[]});let S=[I,r];g&&B.size(g.dims)>0&&S.push(g),p&&S.push(p),c&&S.push(c),e.compute(Jo(f,I,r,g,d,_,p,c),{inputs:S,outputs:f>1?[0,2]:[0]})},eu=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=c=>{let f=re("output_q",u[0].dataType,n),m=re("output_k",u[0].dataType,n),g=re("output_v",u[0].dataType,n),_=L("input",u[0].dataType,u[0].dims),b=L("weight",u[1].dataType,u[1].dims),x=L("bias",u[2].dataType,u[2].dims),$=_.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${c.registerUniforms(I).declareVariables(_,b,x,f,m,g)}
  ${c.mainStart([s,s,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},tu=(e,t)=>{let n=Yo(e.inputs,t),[r,i,a]=eu(e,n);return yn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),nu,ru,iu,au,hg=X(()=>{Xe(),le(),ce(),ze(),pe(),nu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},ru=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?Ce(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=B.size(a)/s,d=r,p=d?a.length:a,c=L("x",e[0].dataType,e[0].dims,s),f=L("scale",e[1].dataType,e[1].dims,o),m=L("bias",e[2].dataType,e[2].dims,o),g=L("inputMean",e[3].dataType,e[3].dims,o),_=L("inputVar",e[4].dataType,e[4].dims,o),b=re("y",e[0].dataType,p,s),x=()=>{let I="";if(r)I=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")I=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<f.rank;S++)I+=`cIndices[${S}] = outputIndices[${S}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},$=I=>`
  const epsilon = ${n};
  ${I.registerUniform("outputSize","u32").declareVariables(c,f,m,g,_,b)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ae(a)]:[{type:12,data:u}]})}},iu=e=>xe(e),au=(e,t)=>{let{inputs:n,outputCount:r}=e,i=iu({...t,outputCount:r});if(Ie.webgpu.validateInputContent&&nu(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ru(n,i))}}),su,ou,uu,fg=X(()=>{ce(),pe(),su=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ou=e=>{let t=e[0].dims,n=e[0].dims[2],r=B.size(t)/4,i=e[0].dataType,a=L("input",i,t,4),s=L("bias",i,[n],4),o=L("residual",i,t,4),u=re("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},uu=e=>{su(e.inputs),e.compute(ou(e.inputs))}}),lu,$e,du,cu,pu,hu,fu,mu,gu,yu,_u,wu,bu,$u,xu,vu,_n,Su,Yn,Iu,Tu,ku,Eu,Mu,Cu,Au,zu,Ru,Ou,Nu,Bu,Du,Uu,Pu,Lu,pi,qu,hi,fi,Gu,Wu,Vu,Fu,Hu,ju,mi=X(()=>{le(),ce(),ze(),pe(),lu=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=L("inputData",n,[o],4),p=re("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},$e=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>lu(d,B.size(e.dims),e.dataType,a,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:u})}},du=e=>{e.compute($e(e.inputs[0],"Abs","abs"))},cu=e=>{e.compute($e(e.inputs[0],"Acos","acos"))},pu=e=>{e.compute($e(e.inputs[0],"Acosh","acosh"))},hu=e=>{e.compute($e(e.inputs[0],"Asin","asin"))},fu=e=>{e.compute($e(e.inputs[0],"Asinh","asinh"))},mu=e=>{e.compute($e(e.inputs[0],"Atan","atan"))},gu=e=>{e.compute($e(e.inputs[0],"Atanh","atanh"))},yu=e=>xe(e),_u=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute($e(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},wu=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xe({min:t,max:n})},bu=(e,t)=>{let n=t||wu(e.inputs),r=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},$u=e=>{e.compute($e(e.inputs[0],"Ceil","ceil"))},xu=e=>{e.compute($e(e.inputs[0],"Cos","cos"))},vu=e=>{e.compute($e(e.inputs[0],"Cosh","cosh"))},_n=e=>xe(e),Su=(e,t)=>{let n=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Yn=(e="f32")=>`
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
}`,Iu=e=>{let t=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Yn(t)))},Tu=e=>{e.compute($e(e.inputs[0],"Exp","exp"))},ku=e=>{e.compute($e(e.inputs[0],"Floor","floor"))},Eu=e=>{let t=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Yn(t)))},Mu=(e,t)=>{let n=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Cu=e=>{e.compute($e(e.inputs[0],"Not",t=>`!${t}`))},Au=e=>{e.compute($e(e.inputs[0],"Neg",t=>`-${t}`))},zu=e=>{e.compute($e(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ru=e=>{let t=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Ou=e=>{e.compute($e(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Nu=e=>xe(e),Bu=(e,t)=>{let n=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Du=e=>{e.compute($e(e.inputs[0],"Sin","sin"))},Uu=e=>{e.compute($e(e.inputs[0],"Sinh","sinh"))},Pu=e=>{e.compute($e(e.inputs[0],"Sqrt","sqrt"))},Lu=e=>{e.compute($e(e.inputs[0],"Tan","tan"))},pi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,qu=e=>{e.compute($e(e.inputs[0],"Tanh",pi))},hi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${pi("v")};
}
`,fi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Gu=e=>{let t=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"FastGelu",fi,hi(t),void 0,e.inputs[0].dataType))},Wu=(e,t)=>{let n=Le(e.inputs[0].dataType);return e.compute($e(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Vu=e=>{e.compute($e(e.inputs[0],"Log","log"))},Fu=(e,t)=>`
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
`,Hu=e=>`quick_gelu_impl(${e})`,ju=(e,t)=>{let n=Le(e.inputs[0].dataType);e.compute($e(e.inputs[0],"QuickGelu",Hu,Fu(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ku,Xu,Yu,mg=X(()=>{ce(),pe(),mi(),Ku=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Xu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=L("input",e[0].dataType,e[0].dims,4),r=L("bias",e[0].dataType,[e[0].dims[2]],4),i=re("output",e[0].dataType,t,4),a=B.size(t)/4,s=Be(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Yn(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Yu=e=>{Ku(e.inputs),e.compute(Xu(e.inputs))}}),Zu,Qu,it,Ju,el,tl,nl,rl,il,al,sl,ol,ul,gg=X(()=>{le(),ce(),pe(),Zu=(e,t,n,r,i,a,s,o,u,d,p,c)=>{let f,m;typeof o=="string"?f=m=($,I)=>`${o}((${$}),(${I}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=re("outputData",p,r.length,4),_=L("aData",u,t.length,4),b=L("bData",d,n.length,4),x;if(i)if(a){let $=B.size(t)===1,I=B.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,k=n.length>0&&n[n.length-1]%4===0;$||I?x=g.setByOffset("global_idx",m($?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),I?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):x=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=g.setByOffset("global_idx",m(_.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(I,S,k="")=>{let M=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${I}[${S}] = ${k}(${f(M,C)});
          `};p===9?x=`
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

        ${c??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Qu=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),d=!B.areEqual(o,u),p=o,c=B.size(o),f=!1,m=!1,g=[d];if(d){let _=nn.calcShape(o,u,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");p=_.slice(),c=B.size(p);let b=B.size(o)===1,x=B.size(u)===1,$=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push(x),g.push($),g.push(I);let S=1;for(let k=1;k<p.length;k++){let M=o[o.length-k],C=u[u.length-k];if(M===C)S*=M;else break}S%4===0?(m=!0,f=!0):(b||x||$||I)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>Zu(_,o,u,p,f,d,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(p)/4)},...ae(o,u,p)]})}},it=(e,t,n,r,i,a)=>{e.compute(Qu(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},Ju=e=>{it(e,"Add",(t,n)=>`${t}+${n}`)},el=e=>{it(e,"Div",(t,n)=>`${t}/${n}`)},tl=e=>{it(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},nl=e=>{it(e,"Mul",(t,n)=>`${t}*${n}`)},rl=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;it(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},il=e=>{it(e,"Sub",(t,n)=>`${t}-${n}`)},al=e=>{it(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},sl=e=>{it(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},ol=e=>{it(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},ul=e=>{it(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),ll,dl,cl,pl,hl,fl,yg=X(()=>{le(),ce(),ze(),pe(),ll=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==r.dims[d])throw new Error("non concat dimensions must match")})}})},dl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,cl=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},pl=(e,t,n,r)=>{let i=B.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],p=[{type:12,data:i}];for(let _=0;_<e.length;++_)o+=e[_].dims[t],a[_]=o,d.push(e[_].dims.length),s[_]=L(`input${_}`,r,d[_]),u.push("rank"),p.push({type:12,data:a[_]});for(let _=0;_<e.length;++_)p.push(...ae(e[_].dims));p.push(...ae(n));let c=re("output",r,n.length),f=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),g=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)_.registerUniform(`sizeInConcatAxis${b}`,"u32");return _.declareVariables(...s,c)})()}

  ${dl(a.length,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${cl(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g}},hl=(e,t)=>{let n=e.inputs,r=n[0].dims,i=B.normalizeAxis(t.axis,r.length);ll(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>B.size(o.dims)>0);e.compute(pl(s,i,a,n[0].dataType),{inputs:s})},fl=e=>xe({axis:e.axis})}),Lt,qt,Gt,gi,Wt=X(()=>{le(),ce(),Lt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Gt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},gi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Bs,Ds];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Ue,ml,yi=X(()=>{Ue=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ml=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),gl,_g=X(()=>{gl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),wn,_i,wi=X(()=>{le(),ce(),pe(),Wt(),wn=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${ie(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ie(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},_i=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],p=s[s.length-1],c=Ce(d),f=Ce(p),m=Ce(u),g=B.size(n)/c/m,_=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),x=[B.size(b),u,d],$=[{type:12,data:g},{type:12,data:u},{type:12,data:d},{type:12,data:p}];qt(t,$),$.push(...ae(b,s,o)),_&&$.push(...ae(e[2].dims)),$.push(...ae(x));let I=S=>{let k=ai("batch_dims",e[0].dataType,b.length),M=L("a",e[0].dataType,s.length,f),C=L("b",e[1].dataType,o.length,c),v=re("output",e[0].dataType,x.length,c),R=Be(v.type.tensor),N=Lt(t,v.type.value,R),H=[M,C],P="";if(_){let q=i?c:1;H.push(L("bias",e[2].dataType,e[2].dims.length,q)),P=`${i?`value += bias[col / ${q}];`:`value += ${v.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Gt(t,V);let A=()=>{let q=`var a_data: ${M.type.value};`;for(let F=0;F<f;F++)q+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${c}];`;for(let F=0;F<m;F++){q+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${f}];`;for(let K=0;K<f;K++)q+=`
            values[${F}] = fma(${C.type.value}(a_data${f===1?"":`[${K}]`}), b_data${K}, values[${F}]);
`}return q};return`
  ${S.registerUniforms(V).registerInternalVariables(k).declareVariables(...H,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${wn("a_indices",M,M.rank-2,k.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${wn("b_indices",C,C.rank-2,k.rank,"batch_indices")}
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
      ${N}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${m};${i}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:I}}}),yl,_l,bi,$i,wl,xi,bl,Zn,vi=X(()=>{le(),ce(),pe(),Wt(),wi(),yi(),yl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,_l=(e,t)=>e?`
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
        }`,bi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=i?u:a,c=i?a:u,f=p/t[0],m=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${p/f}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${d/e[0]}>, ${a}>;

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
          ${yl(i,r)}
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

          ${_l(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},$i=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,wl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],c=i?d:a,f=i?a:d;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=c/t[0],_=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${$i(i,r)}
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
      ${$i(i,r)}
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
      ${wl(i)}
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
`},bl=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,d=Be(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ue(e,d)} {
      var value = ${Ue(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${wn("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ue(e,d)} {
      var value = ${Ue(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${wn("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ue(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ue(e,d)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Zn=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),p=r?r.slice(0,-2):n.slice(0,-2),c=B.size(p),f=s[s.length-2],m=s[s.length-1],g=o[o.length-1],_=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],x=[8,8,1],$=[Math.ceil(g/x[0]/b[0]),Math.ceil(f/x[1]/b[1]),Math.ceil(c/x[2]/b[2])],I=_?4:1,S=[...u,f,m/I],k=S.length,M=[...d,m,g/I],C=M.length,v=[c,f,g/I],R=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];qt(t,R),R.push(...ae(p,S,M));let N=["rank","rank"],H=e.length>2;H&&(R.push(...ae(e[2].dims)),N.push("rank")),R.push(...ae(v));let P=V=>{let A=p.length,q=ai("batchDims",e[0].dataType,A,1),F=Be(e[0].dataType),K=L("a",e[0].dataType,k,I),se=L("b",e[1].dataType,C,I),D=re("result",e[0].dataType,v.length,I),J=[K,se];if(H){let oe=i?I:1;J.push(L("bias",e[2].dataType,e[2].dims.length,oe))}let G=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Gt(t,G);let Y=Be(D.type.tensor),j=Lt(t,D.type.value,Y),W=bl(I,H,j,[q,K,se,D],i);return`
  ${V.registerUniforms(G).registerInternalVariables(q).declareVariables(...J,D)}
  ${W}
  ${_?bi(b,x,F,q):xi(b,x,F,q)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${_};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:R}),getShaderSource:P}}}),$l,xl,wg=X(()=>{le(),gt(),pe(),Wt(),yi(),_g(),vi(),$l=(e,t,n,r,i=!1,a,s=4,o=4,u=4,d="f32")=>{let p=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
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
    var resData = ${Ue(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${_}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,I=e?t&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ue(s,d)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ue(s,d)}(0.0);`,S=e?r&&n?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${Ue(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${Ue(o,d)}(0.0);`,k=Ue(u,d),M=Ue(e?s:o,d),C=Ue(e?o:s,d),v=Lt(a,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?I:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${ml(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},xl=(e,t,n,r,i,a,s,o,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],c=n[0],f=d?n[2]:n[3],m=d?n[1]:n[2],g=d?n[3]:n[1],_=d&&(p%4===0||p%3===0)&&g%4===0,b=d?g:f*m,x=d?f*m:g,$=[8,8,1],I=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/$[0]/I[0]),Math.ceil(x/$[1]/I[1]),Math.ceil(c/$[2]/I[2])];_e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let k=_?d&&p%4!==0?3:4:1,M=$[1]*I[1],C=$[0]*I[0],v=Math.max($[0]*k,$[1]),R=r%M===0,N=i%C===0,H=a%v===0,P=_?[k,4,4]:[1,1,1],V=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];qt(t,V),V.push(...ae(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(V.push(...ae(e[2].dims)),A.push("rank")),V.push(...ae(n));let q=F=>{let K=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Gt(t,K);let se=_?4:1,D=Be(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${D}>`:D}) {
        result[flatIndex] = ${_?`vec4<${D}>`:D}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${D}>`:D}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,G=L("x",e[0].dataType,e[0].dims.length,k===3?1:k),Y=L("w",e[1].dataType,e[1].dims.length,se),j=[G,Y],W=re("result",e[0].dataType,n.length,se);if(s){let oe=L("bias",e[2].dataType,e[2].dims.length,se);j.push(oe),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${D}>`:D} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${gl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(K).declareVariables(...j,W)}
        ${J}
        ${$l(d,R,N,H,s,t,P[0],P[1],P[2],D)}
        ${_?bi(I,$,D,void 0,!d,v):xi(I,$,D,void 0,!d,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${_};${R};${N};${H};${M};${C};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:V}),getShaderSource:q}}}),vl,Si,bn,Sl,Ii,Il,Tl,kl,bg=X(()=>{le(),gt(),ce(),pe(),Wt(),yi(),vl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Si=e=>typeof e=="number"?[e,e,e]:e,bn=(e,t)=>t<=1?e:e+(e-1)*(t-1),Sl=(e,t,n,r=1)=>{let i=bn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ii=(e,t,n,r,i)=>{i==null&&(i=Sl(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},Il=(e,t,n,r,i,a,s,o,u,d)=>{let p,c,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Ii([t,n,r,1],[o,u,d],1,[i,a,s],e);c=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((_,b,x)=>_===x[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Ii([t,n,r,1],[o,u,d],1,[i,a,s],e[0]);c=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),f=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,_=(f-1)*a+u-n,b=(m-1)*s+d-r,x=Math.floor(g/2),$=g-x,I=Math.floor(_/2),S=_-I,k=Math.floor(b/2),M=b-k;p={top:I,bottom:S,left:k,right:M,front:x,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:c,outHeight:f,outWidth:m}},Tl=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,d,p,c;if(s==="channelsLast")[o,u,d,p,c]=e;else if(s==="channelsFirst")[o,c,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,g,_]=t,[b,x,$]=Si(n),[I,S,k]=Si(r),M=bn(m,I),C=bn(g,S),v=bn(_,k),{padInfo:R,outDepth:N,outHeight:H,outWidth:P}=Il(i,u,d,p,b,x,$,M,C,v),V=a?f*c:f,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,V,N,H,P]:s==="channelsLast"&&(A=[o,N,H,P,V]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:c,outDepth:N,outHeight:H,outWidth:P,outChannels:V,padInfo:R,strideDepth:b,strideHeight:x,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:_,effectiveFilterDepth:M,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:I,dilationHeight:S,dilationWidth:k,inShape:e,outShape:A,filterShape:t}},kl=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,x)=>x)},d=[Math.ceil(vl(u.x.map(b=>n[b]))/o[0]),1,1];_e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,c=B.size(n),f=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];qt(t,f),f.push(...ae(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...ae(e[2].dims)),m.push("rank")),f.push(...ae(n));let _=b=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Gt(t,x);let $=1,I=Be(e[0].dataType),S=L("x",e[0].dataType,e[0].dims.length,p),k=L("W",e[1].dataType,e[1].dims.length,$),M=[S,k],C=re("result",e[0].dataType,n.length,$),v="";if(g){let H=L("bias",e[2].dataType,e[2].dims.length,$);M.push(H),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?ie("coords",4,5):ie("coords",1,5)}];
        }`}let R=Ue(p,I),N=Lt(t,R,I);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${b.registerUniforms(x).declareVariables(...M,C)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${ie("coords",0,S.rank)};
              let d2 = ${s?ie("coords",S.rank-1,S.rank):ie("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?ie("coords",1,S.rank):ie("coords",2,S.rank)},
              ${s?ie("coords",2,S.rank):ie("coords",3,S.rank)},
              ${s?ie("coords",3,S.rank):ie("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ie("uniforms.x_shape",1,S.rank):ie("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?ie("uniforms.x_shape",2,S.rank):ie("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?ie("uniforms.x_shape",3,S.rank):ie("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?ie("uniforms.x_shape",4,S.rank):ie("uniforms.x_shape",1,S.rank)};
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
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:_}}}),El,Ml,$g=X(()=>{le(),ce(),pe(),Wt(),El=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?n[3]:n[1],p=d/t.group,c=u&&p>=4?Ce(d):1,f=B.size(n)/c,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];qt(t,m),m.push(...ae(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ae([n[0],n[1],n[2],n[3]/c]));let _=b=>{let x=re("output",e[0].dataType,n.length,c),$=Be(x.type.tensor),I=Lt(t,x.type.value,$),S=L("x",e[0].dataType,s.length),k=L("w",e[1].dataType,o.length,c),M=[S,k];i&&M.push(L("b",e[2].dataType,e[2].dims,c));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Gt(t,C);let v=u?`
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
  ${b.registerUniforms(C).declareVariables(...M,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${a}
    ${I}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},Ml=(e,t,n,r)=>{let i=e.length>2,a=Ce(n[3]),s=Ce(n[2]),o=B.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];qt(t,c),c.push(...ae(u,d,p));let f=(s-1)*t.strides[1]+d[1],m=g=>{let _=re("output",e[0].dataType,p.length,a),b=Be(_.type.tensor),x=Lt(t,_.type.value,b),$=L("x",e[0].dataType,u.length,a),I=L("w",e[1].dataType,d.length,a),S=[$,I];i&&S.push(L("b",e[2].dataType,e[2].dims,a));let k=i?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Gt(t,M),`
  ${g.registerUniforms(M).declareVariables(...S,_)}
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

    var x_vals: array<${$.type.value}, ${f}>;
    var values: array<${_.type.value}, ${s}>;
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
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${k}
      ${x}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),Cl,Qn,Al,Jn,Ti,ki,zl,Rl,Ei,xg=X(()=>{ce(),wg(),bg(),vi(),$g(),Wt(),wi(),It(),Cl=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),c=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-p[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,d),c},Qn=[2,3,1,0],Al=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Jn=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Vn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ti=e=>{let t=gi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ki=(e,t,n,r)=>{let i=n.format==="NHWC",a=Cl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let M=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(Ke(t[1],Qn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),M.push(C)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Ml(M,n,a,r),{inputs:M}):e.compute(El(M,n,a,r),{inputs:M});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],p=t[1].dims[2],c=t[1].dims[3],f=a[i?1:2],m=a[i?2:3],g=a[i?3:1],_=i&&p===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(_||p===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=a[0],C,v,R,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(Ke(t[1],Qn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),_){let A=o*u*d;C=t[0].reshape([1,M,A]),v=V.reshape([1,A,g]),R=[1,M,g]}else C=t[0].reshape([M,o*u,d]),v=V.reshape([1,d,g]),R=[M,f*m,g];N.push(C),N.push(v)}else C=t[0].reshape([M,d,o*u]),v=t[1].reshape([1,g,d]),R=[M,g,f*m],N.push(v),N.push(C);s&&N.push(t[2]);let H=R[2],P=N[0].dims[N[0].dims.length-1];H<8&&P<8?e.compute(_i(N,n,a,R,i,r),{inputs:N}):e.compute(Zn(N,n,a,R,i,r),{inputs:N});return}let b=!0,x=e.kernelCustomData.wT??e.compute(Ke(t[1],Qn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let $=[t[0],x];s&&$.push(t[2]);let I=i?f*m:g,S=i?g:f*m,k=p*c*d;e.compute(xl($,n,a,I,S,k,s,b,r),{inputs:$})},zl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Jn({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);ki(e,r,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Rl=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=Jn(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=Tl(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(kl(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Ei=(e,t)=>{if(Al(e.inputs,t),e.inputs[0].dims.length===3)zl(e,t);else if(e.inputs[0].dims.length===5)Rl(e,e.inputs,t);else{let n=Jn(t,e.inputs);ki(e,e.inputs,n)}}}),Ol,vg=X(()=>{le(),gt(),ce(),pe(),Ol=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],p=a?Ce(u):1,c=a&&d===1&&u>=4,f=c?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,g=a?Ce(d):1,_=a?d===1?p:g:1,b=B.size(i)/g,x=[Math.ceil(b/64),1,1];_e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let $=["rank","rank"],I=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],k=[t.dilations[0],t.dilations[1]],M=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:I},{type:12,data:S},{type:12,data:k},{type:12,data:M},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ae(e[0].dims,e[1].dims)];r&&(v.push(...ae(e[2].dims)),$.push("rank")),v.push(...ae(i));let R=N=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=Be(e[0].dataType),V=a?1:2,A=a?2:3,q=a?3:1,F=L("W",e[1].dataType,e[1].dims.length,_),K=L("Dy",e[0].dataType,e[0].dims.length,p),se=[K,F];r&&se.push(L("bias",e[2].dataType,[i[q]].length,g));let D=re("result",e[0].dataType,i.length,g),J=()=>{let j="";if(c)p===4?j+=`
        let xValue = ${K.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?j+=`
          dotProd = dotProd + dot(vec4<${P}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}), vec4<${P}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(j+=`
          dotProd = dotProd + dot(vec4<${P}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}, ${K.getByOffset("x_offset + 2u")}, ${K.getByOffset("x_offset + 3u")}), vec4<${P}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(j+=`
                  let xValue = ${a?K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):K.get("batch","inputChannel","idyR","idyC")};
        `,p===1)j+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let W=0;W<p;W++)j+=`
            let wValue${W} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${W}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${W}] * wValue${W};`;return j},G=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let j="";if(p===1){j+="dotProd = dotProd";for(let W=0;W<m;W++)j+=`
            + ${K.getByOffset(`x_offset + ${W}`)} * ${F.getByOffset(`w_offset + ${W}`)}`;j+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);j+=`
          let xValue = ${K.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return j},Y=`
            let outputIndices = ${D.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${D.indicesGet("outputIndices",0)};
            let d1 = ${D.indicesGet("outputIndices",q)};
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
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${V}]) || fract(dyR) > 0.0 ||
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
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:p}) {
                  ${J()}
                  inputChannel = inputChannel + ${c?4:p};
                }
                ${G()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${D.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(H).declareVariables(...se,D)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${_}${g}${c}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),Nl,Bl,Dl,Mi,Ul,Pl,Ci,Ll,ql,Sg=X(()=>{vg(),Wt(),It(),Nl=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Bl=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Dl=(e,t,n,r,i,a,s,o,u,d)=>{let p=e.length-2,c=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,_=e.length-p-(o?1:0);g<p;++g,++_){let b=e[_],x=c?b*s[g]:d[g],$=Nl(b,s[g],a[g],t[_],n[g],x);Bl($,r,a,g,g+p),c&&d.push(s[g]*(b-1)+u[g]+(t[_]-1)*n[g]+1-a[g]-a[g+p])}d.splice(0,0,f),d.splice(o?3:1,0,m)},Mi=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let d=e.strides.slice();if(d.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;d=new Array(c).fill(1)}Dl(o,n,u,e.autoPad,e.group,i,d,r,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:d}),p},Ul=e=>{let t=gi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:p,outputShape:c,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Pl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ci=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Ke(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Ol(a,n,r),{inputs:a})},Ll=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=Mi({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Ci(e,r,d,p=>n?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},ql=(e,t)=>{if(Pl(e.inputs,t),e.inputs[0].dims.length===3)Ll(e,t);else{let n=Mi(t,e.inputs);Ci(e,e.inputs,n)}}}),Gl,Wl,Vl,Ig=X(()=>{le(),ce(),ze(),pe(),Gl=(e,t,n,r)=>{let i=B.size(t),a=t.length,s=L("input",e,a),o=re("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=B.normalizeAxis(u,a),p=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=ie("uniforms.input_shape","uniforms.axis",a),g=r.reverse?f+(r.exclusive?" + 1":""):"0",_=r.reverse?m:f+(r.exclusive?"":" + 1");return`
                ${c.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${c.mainStart()}
                  ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${_};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ae(t,t)]}),getShaderSource:p}},Wl=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Gl(r,n,i,t),{inputs:[0]})},Vl=e=>{let t=e.exclusive===1,n=e.reverse===1;return xe({exclusive:t,reverse:n})}}),Fl,Hl,jl,Kl,Xl,Tg=X(()=>{le(),ce(),ze(),pe(),Fl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Hl=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},jl=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=p?[n,r,i,d,d,a/d**2]:[n,r,i,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[n,d,d,a/d**2,r,i]:[n,a/d**2,d,d,r,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,m=e.dataType,g=L("a",m,f),_=re("output",m,f),b=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(g,_)}

  ${Hl(o,f,g,_)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let $=u?[n,r*d,i*d,a/d**2]:[n,a/d**2,r*d,i*d],I=B.size($),S=c.dims,k=B.sortBasedOnPerm(S,o);return{outputs:[{dims:$,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ae(S,k)]}},getShaderSource:b}},Kl=(e,t)=>{Fl(e.inputs),e.compute(jl(e.inputs[0],t))},Xl=e=>xe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),er,$n,Ai,Yl,Zl,Ql,Jl,zi,ed,td,nd,kg=X(()=>{le(),ce(),ze(),pe(),er="[a-zA-Z]|\\.\\.\\.",$n="("+er+")+",Ai="^"+$n+"$",Yl="("+$n+",)*"+$n,Zl="^"+Yl+"$",Ql=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Jl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(Zl)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Ai)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp($n)))throw new Error("Invalid RHS");(i=r.match(RegExp(er,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(Ai))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(er,"g")),d=new Ql(r);return u==null||u.forEach((p,c)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);d.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else d.addSymbol(p,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,n[o++],r)}),d}},zi=e=>e+"_max",ed=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,p)=>L(`input${p}`,t,d)),a=B.size(r),s=re("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),u=d=>{let p=[],c="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],_=[],b=[],x=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,k)=>{var M;if(n.rhs.symbolToIndices.has(k)){let C=(M=n.rhs.symbolToIndices.get(k))==null?void 0:M[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let N=v.symbolToIndices.get(k);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(H=>{p.push(`${i[R].indicesSet(`input${R}Indices`,H,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(k);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(N=>{g.push(`${i[v].indicesSet(`input${v}Indices`,N,`${k}`)}`)}),x.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),_.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${zi(k)}; ${k}++) {`),b.push("}")});let I=$?[...p,`let sum = ${i.map((S,k)=>S.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...p,f,..._,...g,c,...x,m,...b];return`
            ${d.registerUniforms(o.map(S=>({name:`${zi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var f;return{type:12,data:((f=n.symbolToInfo.get(c))==null?void 0:f.dimValue)||0}});d.push({type:12,data:a});let p=e.map((c,f)=>[...ae(c)]).reduce((c,f)=>c.concat(f),d);return p.push(...ae(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},td=(e,t)=>{let n=new Jl(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(ed(i,e.inputs[0].dataType,n,r))},nd=e=>{let t=e.equation.replace(/\s+/g,"");return xe({equation:t})}}),rd,Ri,id,ad,sd,Eg=X(()=>{le(),ce(),pe(),rd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ri=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},id=(e,t)=>e.length>t.length?Ri(e,t):Ri(t,e),ad=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=id(t,n),i=e[0].dataType,a=i===9||B.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(B.size(r)/o),d=c=>{let f=L("input",i,t.length,s),m=re("output",i,r.length,o),g;if(i===9){let _=(b,x,$="")=>`
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
        let data = ${m.type.value}(${f.getByOffset(`inputOffset / ${s}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${c.registerUniform("vec_size","u32").declareVariables(f,m)}
    ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},p=[{type:12,data:u},...ae(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},sd=e=>{rd(e.inputs),e.compute(ad(e.inputs),{inputs:[0]})}}),od,ud,Mg=X(()=>{le(),ce(),pe(),mi(),od=e=>{let t=e[0].dataType,n=B.size(e[0].dims),r=B.size(e[1].dims),i=r%4===0,a=s=>{let o=L("x",t,[1],4),u=L("bias",t,[1],4),d=re("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,d)}

    ${hi(Le(t))}

    ${s.mainStart(rn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",fi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/rn/4)}})}},ud=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?Gu(e):e.compute(od(e.inputs))}}),ld,dd,cd,pd,Cg=X(()=>{le(),ce(),ze(),pe(),ld=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,d=Math.ceil(B.size(s)/u),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ae(e[0].dims,e[1].dims,s)],c=f=>{let m=L("data",e[0].dataType,e[0].dims.length,u),g=L("inputIndices",e[1].dataType,e[1].dims.length),_=re("output",e[0].dataType,s.length,u),b=$=>{let I=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let k=0;k<I;k++)S+=`${I>1?`indicesIndices${$}[${k}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${k}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${g.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${m.type.indices};
        `;for(let k=0,M=0;k<i;k++)k===a?(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = u32(idx${$});`,M+=I):(S+=`${i>1?`dataIndices${$}[${k}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${M}]`:`outputIndices${$}`};`,M++);return S},x;if(e[0].dataType===9){let $=(I,S,k="")=>`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:c}},cd=e=>xe({axis:e.axis}),pd=(e,t)=>{let n=e.inputs;ld(n),e.compute(dd(e.inputs,t))}}),hd,fd,md,Ag=X(()=>{le(),ce(),pe(),hd=(e,t,n,r,i,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];d.push(...ae(t.dims,p));let c=f=>{let m=L("indices_data",t.dataType,t.dims.length),g=re("input_slice_offsets_data",12,1,1),_=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},fd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=B.sizeToDimension(a,a.length-1),u=B.sizeFromDimension(r,t.batchDims+s),d=B.sizeToDimension(r,t.batchDims),p=B.sizeFromDimension(r,t.batchDims),c=o/d,f=new Array(s),m=u;for(let S=0;S<s;++S)f[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=hd(e,n[1],f,t.batchDims,r,o,c,p,s),_=t.batchDims+s;if(_>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(_)),x=B.size(b),$=[{type:12,data:x},{type:12,data:u},...ae(n[0].dims,g.dims,b)],I=S=>{let k=L("data",n[0].dataType,n[0].dims.length),M=L("slice_offsets",12,g.dims.length),C=re("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,M,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:$}),getShaderSource:I},{inputs:[n[0],g]})},md=e=>({batchDims:e.batch_dims,cacheKey:""})}),gd,yd,_d,wd,zg=X(()=>{le(),ce(),ze(),pe(),gd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},yd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.gatherAxis,i),s=B.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=B.size(o),d=e[2].dataType,p=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ae(...e.map((m,g)=>m.dims),o)],f=m=>{let g=L("data",e[0].dataType,e[0].dims.length),_=L("inputIndices",e[1].dataType,e[1].dims.length),b=L("scales",e[2].dataType,e[2].dims.length),x=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=re("output",d,o.length),I=[g,_,b];x&&I.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
          index_from_indices += ${n[a]};
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
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
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
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Le(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f}},_d=(e,t)=>{let n=e.inputs;gd(n,t),e.compute(yd(e.inputs,t))},wd=e=>xe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),bd,$d,xd,vd,Rg=X(()=>{le(),ce(),ze(),pe(),bd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},$d=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=B.normalizeAxis(t.axis,i),u=n[o],d=a.slice(0),p=B.size(d),c=L("input",r,i),f=L("indicesInput",s,a.length),m=re("output",r,d.length),g=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return g.push(...ae(n,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:_=>`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,f,m)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},xd=e=>xe({axis:e.axis}),vd=(e,t)=>{let n=e.inputs;bd(n),e.compute($d(e.inputs,t))}}),Sd,Id,Td,kd,Og=X(()=>{le(),ce(),pe(),Sd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Id=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=Ns.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),p=Math.ceil(i/u),c=!0,f=B.size(o),m=[{type:12,data:c?d:f},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ae(e[2].dims)),g.push("rank")),m.push(...ae(o));let _=x=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",S=L("a",e[0].dataType,e[0].dims),k=L("b",e[1].dataType,e[1].dims),M=S.type.value,C=null,v=[S,k];e.length===3&&(C=L("c",e[2].dataType,e[2].dims.length),v.push(C));let R=re("output",e[0].dataType,o.length);v.push(R);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(N).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${I}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${M}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=x=>{let $=L("a",e[0].dataType,e[0].dims),I=L("b",e[1].dataType,e[1].dims),S=null,k=[$,I];e.length===3&&(S=L("c",e[2].dataType,e[2].dims.length),k.push(S));let M=re("output",e[0].dataType,o.length);k.push(M);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
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
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
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
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
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
  ${x.registerUniforms(C).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${u}>, ${u}>;
  ${x.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
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
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},Td=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},kd=(e,t)=>{Sd(e.inputs),e.compute(Id(e.inputs,t))}}),ut,yt,Vt,Ft,Ed,Md,Cd,Ad,zd,Rd,Od,Nd,Bd,Dd,Ng=X(()=>{le(),ce(),ze(),pe(),[ut,yt,Vt,Ft]=[0,1,2,3],Ed=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Md=`
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
`,Cd=e=>`
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
`,Ad=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,zd=e=>`
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
`,Rd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ut}] = batch;
     indices[${yt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Vt}] = u32(r);
            indices[${Ft}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Vt}] = u32(clamp(r, 0, H - 1));
          indices[${Ft}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Vt}] = gs_reflect(r, border[1], border[3]);
          indices[${Ft}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Od=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ut}], indices[${yt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ut}], indices[${yt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ut}], indices[${yt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ut}], indices[${yt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ut}], indices[${yt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ut}], indices[${yt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Nd=(e,t)=>{let n=L("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=L("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ut,yt,Vt,Ft]=[0,3,1,2]);let s=re("output",e[0].dataType,a.length),o=n.type.value,u=B.size(a),d=[{type:12,data:u},...ae(e[0].dims,r,a)],p=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${Md}
  ${Cd(o)}
  ${Ad(t)}
  ${zd(t)}
  ${Rd(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Vt}]);
      let W_in = i32(uniforms.x_shape[${Ft}]);

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
      var grid_indices = vec3<u32>(indices[${ut}], indices[${Vt}], indices[${Ft}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Od(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=B.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:p}},Bd=(e,t)=>{Ed(e.inputs),e.compute(Nd(e.inputs,t))},Dd=e=>xe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),qe,Ud,Pd,Oi,Ld,xn,qd,Gd=X(()=>{le(),ce(),ze(),ei(),ci(),pe(),It(),qe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ud=(e,t)=>{let n=e[0],r=qe(e,1),i=qe(e,2),a=qe(e,3),s=qe(e,4),o=qe(e,5),u=qe(e,6),d=qe(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=n.dims[0],c=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,_=0,b=Math.floor(f/t.numHeads);if(u&&d&&B.size(u.dims)&&B.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],_=u.dims[2]}else if(u&&B.size(u.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(r&&B.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,I=0;if(s&&B.size(s.dims)>0){I=8;let C=s.dims;throw C.length===1?C[0]===p?I=1:C[0]===3*p+2&&(I=3):C.length===2&&C[0]===p&&C[1]===$&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,k=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],S=!0}}let M=!1;if(s&&B.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:b,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:M,passPastInKv:S,qkvFormat:x}},Pd=e=>xe({...e}),Oi=xe({perm:[0,2,1,3]}),Ld=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=B.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=c=>{let f=re("qkv_with_bias",t.dataType,o),m=L("qkv",t.dataType,o),g=L("bias",n.dataType,o),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(m,g,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,n],outputs:[-1]})[0]},xn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&B.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Ld(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(Ke(u,Oi.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(Ke(u,Oi.perm),{inputs:[u],outputs:[-1]})[0]},qd=(e,t)=>{let n=Ud(e.inputs,t),r=e.inputs[0],i=qe(e.inputs,1),a=qe(e.inputs,2),s=qe(e.inputs,3),o=qe(e.inputs,4),u=qe(e.inputs,5),d=qe(e.inputs,6),p=qe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,f=xn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return yn(e,f,i,a,o,void 0,d,p,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=xn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=xn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);yn(e,f,m,g,o,void 0,d,p,u,n)}}),Wd,Vd,Fd,Hd,Ni,jd,Kd,Xd=X(()=>{le(),ce(),ze(),pe(),Wd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Vd=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),xe({numOutputs:r,axis:t.axis,splitSizes:n})},Fd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ie("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Hd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ni=(e,t)=>{let n=e[0].dims,r=B.size(n),i=e[0].dataType,a=B.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=L("input",i,n.length),u=new Array(t.numOutputs),d=[],p=[],c=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let _=n.slice();_[a]=t.splitSizes[g],p.push(_),s[g]=re(`output${g}`,i,_.length),d.push({dims:p[g],dataType:e[0].dataType})}f.push({type:12,data:u},...ae(n,...p));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Fd(u.length)}
  ${Hd(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ie("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},jd=(e,t)=>{Wd(e.inputs);let n=e.inputs.length===1?t:Vd(e.inputs,t);e.compute(Ni(e.inputs,n),{inputs:[0]})},Kd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return xe({axis:t,numOutputs:r,splitSizes:n})}}),Yd,tr,Zd,Qd=X(()=>{le(),ce(),ze(),pe(),Yd=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!B.areEqual(r.dims,[])&&!B.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],d=n.dims[n.dims.length-2],p=i.dims[0],c=B.sizeFromDimension(n.dims,1)/d,f=o===0?i.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},tr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,p=e[2].dims[1],c=i===0?p*2:d/r,f=new Array(s,u,d/c,c-p),m=B.computeStrides(f),g=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=b=>{let x=L("input",e[0].dataType,e[0].dims.length),$=L("position_ids",e[1].dataType,e[1].dims.length),I=L("cos_cache",e[2].dataType,e[2].dims.length),S=L("sin_cache",e[3].dataType,e[3].dims.length),k=re("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables(x,$,I,S,k)}

        ${b.mainStart(rn)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",re("",$.type.tensor,2))};
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xe({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/rn)},programUniforms:g})}},Zd=(e,t)=>{Yd(e.inputs,t),e.compute(tr(e.inputs,t))}}),Jd,ec,Bi,tc,nc,Bg=X(()=>{ze(),le(),ci(),Gd(),Xd(),It(),Qd(),pe(),Jd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],d=n.dims[1],p=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=d,f=0,m=!r||r.dims.length===0,g=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=g*t.numHeads);let _=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(_&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(_||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let $=0,I=!1,S=t.kvNumHeads?g*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],I=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let M=k.dims.reduce((C,v)=>C*v,1);if(M!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${M}.`);for(let C=0;C<k.dims.length;C++)if(k.dims[C]!==1&&k.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${k.dims[C]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:x}},ec=xe({perm:[0,2,1,3]}),Bi=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Ke(r,ec.perm),{inputs:[r],outputs:[-1]})[0]),r},tc=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let c=L("seq_lens",n.dataType,n.dims),f=L("total_seq_lens",r.dataType,r.dims),m=re("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},nc=(e,t)=>{var S;let n=Jd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=xe({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,p*n.headSize,p*n.headSize]}),[f,m,g]=!i&&!a?e.compute(Ni([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],_,b;if(t.doRotary){let k=e.compute(tc(n.batchSize,n.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],M=e.inputs[7],C=e.inputs[8],v=xe({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,k,M,C],N=[-1];_=e.compute(tr(R,v),{inputs:R,outputs:N})[0],R.splice(0,1,m);let H=xe({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(tr(R,H),{inputs:R,outputs:N})[0]}let x=xn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?_:f,void 0,0),$=Bi(e,t.doRotary?b:m,n),I=Bi(e,g,n);yn(e,x,$,I,void 0,void 0,s,o,void 0,n,u,d)}}),Di,rc,ic,ac,Dg=X(()=>{le(),ce(),It(),pe(),Di=(e,t,n,r,i,a,s,o)=>{let u=Ce(a),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,c=i*s,f=64;c===1&&(f=256);let m=[i,s,a/u],g=[i,s,2],_=["rank","type","type"],b=[];b.push(...ae(m,g));let x=$=>{let I=L("x",t.dataType,3,u),S=L("scale",n.dataType,n.dims),k=L("bias",r.dataType,r.dims),M=re("output",1,3,2),C=[I,S,k,M];return`
  var<workgroup> workgroup_shared : array<${p}, ${f}>;
  const workgroup_size = ${f}u;
  ${$.declareVariables(...C)}
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
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${St("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${St("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:x},{inputs:[t,n,r],outputs:[-1]})[0]},rc=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=B.sizeFromDimension(r,a),d=Ce(u),p=B.size(i)/d,c=Di(e,t[0],t[1],t[2],s,u,o,n.epsilon),f=[s,o,u/d],m=[s,o],g=["type","none"],_=b=>{let x=L("x",t[0].dataType,f.length,d),$=L("scale_shift",1,m.length,2),I=re("output",t[0].dataType,f.length,d),S=[x,$,I];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ae(f,m,f)]}),getShaderSource:_},{inputs:[t[0],c]})},ic=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=B.sizeFromDimension(r,1)/s,u=Ce(s),d=B.size(i)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],f=!1,m=[0,r.length-1];for(let x=0;x<r.length-2;x++)f=f||r[x+1]!==1,m.push(x+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(Ke(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(x,$)=>r[m[$]])),_=Di(e,g,t[1],t[2],a,o,s,n.epsilon),b=x=>{let $=Be(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${R}(scale.${v}))`;case 2:return`vec2<${$}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=L("input",t[0].dataType,t[0].dims,u),M=re("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:b},{inputs:[t[0],_]})},ac=(e,t)=>{t.format==="NHWC"?ic(e,e.inputs,t):rc(e,e.inputs,t)}}),sc,oc,uc,Ug=X(()=>{le(),ce(),pe(),sc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},oc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=B.normalizeAxis(t.axis,i.length),d=B.sizeToDimension(i,u),p=B.sizeFromDimension(i,u),c=B.size(a.dims),f=s?B.size(s.dims):0;if(c!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let g=Ce(p),_=["type","type"],b=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/g)},{type:1,data:t.epsilon}];s&&_.push("type");let x=n>1,$=n>2,I=k=>{let M=Be(e[0].dataType),C=[L("x",e[0].dataType,e[0].dims,g),L("scale",a.dataType,a.dims,g)];s&&C.push(L("bias",s.dataType,s.dims,g)),C.push(re("output",e[0].dataType,o,g)),x&&C.push(re("mean_data_output",1,m)),$&&C.push(re("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(v).declareVariables(...C)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ii("f32",g)};
    var mean_square_vector = ${ii("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${an(M,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${St("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${St("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${an(M,g,"x[j + offset]")};
      let f32scale = ${an(M,g,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${an(M,g,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return x&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:_},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:b}),getShaderSource:I}},uc=(e,t)=>{sc(e.inputs),e.compute(oc(e.inputs,t,e.outputCount))}}),lc,dc,Pg=X(()=>{ce(),wi(),vi(),lc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},dc=e=>{lc(e.inputs);let t=nn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(_i(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),s=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),d=[1,a,n],p=[o,u];e.compute(Zn(p,{activation:""},t,d),{inputs:p})}else e.compute(Zn(e.inputs,{activation:""},t))}}}),cc,pc,hc,fc,mc,Lg=X(()=>{le(),ce(),ze(),pe(),cc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!B.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(u)!==d)throw new Error("zeroPoints input size error.")}},pc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=B.size(o),d=e[1].dims[2]/4,p=e[0].dataType,c=Ce(t.k),f=Ce(d),m=Ce(s),g=o.concat([i,s]),_=i>1&&s/m%2===0?2:1,b=B.size(g)/m/_,x=64,$=[],I=[u,i,a/c],S=B.convertShape(e[1].dims).slice();S.splice(-1,1,d/f),$.push(...ae(I)),$.push(...ae(S)),$.push(...ae(e[2].dims)),e.length===4&&$.push(...ae(B.convertShape(e[3].dims)));let k=[u,i,s/m];$.push(...ae(k));let M=C=>{let v=I.length,R=L("a",e[0].dataType,v,c),N=L("b",12,S.length,f),H=L("scales",e[2].dataType,e[2].dims.length),P=[R,N,H],V=e.length===4?L("zero_points",12,e[3].dims.length):void 0;V&&P.push(V);let A=k.length,q=re("output",e[0].dataType,A,m),F=Be(e[0].dataType),K=(()=>{switch(c){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${c}-component is not supported.`)}})(),se=Math.floor(32/t.bits),D=Math.floor(se/8),J=()=>{let j="";for(let W=0;W<D;W++){let oe=W*t.bits*4,ye=oe+t.bits;j+=`
          // reuse a data (pass ${W})
            var input_offset${W>0?W:""} = ${W===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${W>0?W:""}: ${K};
            for (var j${W>0?W:""}: u32 = 0; j${W>0?W:""} < ${8/c}; j${W>0?W:""}++) {
              a_data${W>0?W:""}[j${W>0?W:""}] = ${R.getByOffset(`input_offset${W>0?W:""}`)};
              input_offset${W>0?W:""}++;
            }
          `;for(let O=0;O<m*_;O++)j+=`
            b_value = ${f===1?`b${O}_data`:`b${O}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${W*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${oe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${ye}u) & b_mask);`}
            b_quantized_values = ${K}(${Array.from({length:4},(Q,te)=>`${F}(b_value_lower[${te}]), ${F}(b_value_upper[${te}])`).join(", ")});
            b_dequantized_values = ${c===1?`${K}(${Array.from({length:8},(Q,te)=>`(b_quantized_values[${te}] - ${V?`zero_point${O}`:"zero_point"}) * scale${O}`).join(", ")});`:`(b_quantized_values - ${K}(${Array(8).fill(`${V?`zero_point${O}`:"zero_point"}`).join(",")})) * scale${O};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(O/m)}]${m>1?`[${O%m}]`:""} += ${Array.from({length:8/c},(Q,te)=>`${c===1?`a_data${W>0?W:""}[${te}] * b_dequantized_values[${te}]`:`dot(a_data${W>0?W:""}[${te}], b_dequantized_values[${te}])`}`).join(" + ")};
          `}return j},G=()=>{let j=`
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
            let zero_point = ${F}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let W=0;W<m*_;W++)j+=`
            let scale${W} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${F}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return j},Y=()=>{let j=`col_index = col * ${m};`;for(let W=0;W<m*_;W++)j+=`
            let b${W}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${K};
            var b_dequantized_values: ${K};`,j};return`
        var<workgroup> workgroup_shared: array<${q.type.value}, ${_*x}>;
        ${C.declareVariables(...P,q)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${q.offsetToIndices(`(global_idx / ${x}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${G()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${Y()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${J()}
                word_offset += ${se/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${_}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${_};
            }
            ${q.setByIndices(`${q.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${m};${_};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:p}],dispatchGroup:{x:b},programUniforms:$}),getShaderSource:M}},hc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=B.size(o),d=e[1].dims[2]/4,p=e[0].dataType,c=Ce(t.k),f=Ce(d),m=o.concat([i,s]),g=128,_=s%8===0?8:s%4===0?4:1,b=g/_,x=Math.floor(32/t.bits),$=b*f*x,I=$/c,S=$/t.blockSize,k=B.size(m)/_,M=[],C=[u,i,a/c],v=B.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),M.push(...ae(C)),M.push(...ae(v)),M.push(...ae(e[2].dims)),e.length===4&&M.push(...ae(B.convertShape(e[3].dims)));let R=[u,i,s];M.push(...ae(R));let N=H=>{let P=C.length,V=L("a",e[0].dataType,P,c),A=L("b",12,v.length,f),q=L("scales",e[2].dataType,e[2].dims.length),F=[V,A,q],K=e.length===4?L("zero_points",12,e[3].dims.length):void 0;K&&F.push(K);let se=R.length,D=re("output",e[0].dataType,se),J=Be(e[0].dataType),G=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${D.type.value}, ${b}>, ${_}>;
        ${H.declareVariables(...F,D)}
        ${H.mainStart([b,_,1])}
          let output_indices = ${D.offsetToIndices(`workgroup_index * ${_}`)};
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
            let scale = ${q.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let Y=Math.floor(x/8),j="";for(let W=0;W<Y;W++){let oe=W*t.bits*4,ye=oe+t.bits;j+=`
              ${G()}
              {${t.bits===2?`
                let half_word = b_value >> ${W*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${oe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${ye}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(O,Q)=>`${J}(b_value_lower[${Q}]), ${J}(b_value_upper[${Q}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(O,Q)=>`${`dot(a_data${Q}, b_dequantized_values[${Q}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return j})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${D.setByIndices(`${D.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${b};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:k},programUniforms:M}),getShaderSource:N}},fc=(e,t)=>{cc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(hc(e.inputs,t)):e.compute(pc(e.inputs,t))},mc=e=>xe(e)}),gc,yc,_c,wc,bc,$c,xc,vc,Sc,qg=X(()=>{le(),ce(),pe(),gc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},yc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ie("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},_c=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ie("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ie("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},wc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
                  k = i32(${ie("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},bc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ie("uniforms.pads",i,n)};
                if (k < 0)  {
                  k += i32(${ie("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ie("uniforms.x_shape",i,t)})) {
                  k -= i32(${ie("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ie("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},$c=(e,t,n)=>{switch(n.mode){case 0:return yc(e,t,n.pads.length);case 1:return _c(e,t,n.pads.length);case 2:return wc(e,t,n.pads.length);case 3:return bc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},xc=(e,t)=>{let n=B.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=B.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ae(e[0].dims,n));let o=["rank"],u=d=>{let p=re("output",e[0].dataType,n.length),c=L("x",e[0].dataType,r.length),f=c.type.value,m=$c(p,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(g).declareVariables(c,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(n)/64)},programUniforms:a}),getShaderSource:u}},vc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},Sc=(e,t)=>{gc(e.inputs);let n=vc(e.inputs,t);e.compute(xc(e.inputs,n),{inputs:[0]})}}),vn,Ui,Pi,Li,qi,Ic,Tc,Gi,Wi,kc,Ec,Vi,Mc,Cc,Fi,Ac,zc,Rc,Oc,Gg=X(()=>{Xe(),le(),ce(),pe(),vn=e=>{if(Ie.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ui=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();Vn.adjustPoolAttributes(n,i,s,o,u,d);let p=Vn.computePoolOutputShape(n,i,o,u,s,d,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[c,r?f:p]},Pi=(e,t)=>{let n=t.format==="NHWC",r=B.size(e),i=B.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],c=!!(d+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(_+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:_},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[a,s,!!u,!1,!1]}},Li=(e,t,n,r,i,a,s,o,u,d,p,c)=>{let f=i.format==="NHWC",m=t.type.value,g=re("output",t.type.tensor,r);if(i.kernelShape.length<=2){let _="",b="",x="",$=n-(f?2:1);if(p?_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:_=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,i.kernelShape.length===2){let I=n-(f?3:2);c?b=`
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
              ${s}

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
                ${a}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
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
                  offsets[j] = offset / ${ie("uniforms.kernelStrides","j",_)};
                  offset -= offsets[j] * ${ie("uniforms.kernelStrides","j",_)};
                }
                offsets[${_-1}] = offset;

                isPad = false;
                for (var j = ${n-_}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${ie("uniforms.strides",`j - ${n-_}u`,_)}
                    + offsets[j - ${n-_}u] - ${ie("uniforms.pads","j - 2u",b)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},qi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ic=e=>`${qi(e)};${e.countIncludePad}`,Tc=e=>`${qi(e)};${e.storageOrder};${e.dilations}`,Gi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Wi=(e,t,n,r)=>{let[i,a]=Ui(t,r,n),s=L("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,c,f,m,g]=Pi(a,i);p.push(...ae(t.dims,a));let _=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:p}),getShaderSource:b=>Li(b,s,t.dims.length,a.length,i,u,d,0,c,f,m,g)}},kc=e=>{let t=e.count_include_pad!==0,n=Gi(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:Ic(r)}},Ec=(e,t)=>{vn(e.inputs),e.compute(Wi("AveragePool",e.inputs[0],!1,t))},Vi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Mc=e=>{let t=e.format;return{format:t,...Vi,cacheKey:t}},Cc=(e,t)=>{vn(e.inputs),e.compute(Wi("GlobalAveragePool",e.inputs[0],!0,t))},Fi=(e,t,n,r)=>{let[i,a]=Ui(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=L("x",t.dataType,t.dims.length),d=["rank"],[p,c,f,m,g]=Pi(a,i);return p.push(...ae(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:p}),getShaderSource:_=>Li(_,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,f,m,g)}},Ac=(e,t)=>{vn(e.inputs),e.compute(Fi("MaxPool",e.inputs[0],!1,t))},zc=e=>{let t=e.storage_order,n=e.dilations,r=Gi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Tc(i)}},Rc=e=>{let t=e.format;return{format:t,...Vi,cacheKey:t}},Oc=(e,t)=>{vn(e.inputs),e.compute(Fi("GlobalMaxPool",e.inputs[0],!0,t))}}),Nc,Bc,Dc,Uc,Wg=X(()=>{le(),ce(),ze(),pe(),Nc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Bc=(e,t)=>{let n=B.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=B.size(a),u=r===3||r===2,d=u?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,c=e.length>2?e[2]:void 0,f=c?u?[Math.ceil(B.size(c.dims)/4)]:c.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,g=m===!1&&p.length===1,_=Ce(o),b=m&&(!u||_===4),x=b?_:1,$=b&&!u?_:1,I=L("input",u?12:r,d.length,$),S=L("scale",s,p.length),k=c?L("zero_point",u?12:r,f.length):void 0,M=re("output",s,a.length,x),C=[I,S];k&&C.push(k);let v=[d,p];c&&v.push(f);let R=[{type:12,data:o/x},{type:12,data:n},{type:12,data:t.blockSize},...ae(...v,a)],N=H=>{let P=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(P).declareVariables(...C,M)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
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
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/x/64),y:1,z:1},programUniforms:R})}},Dc=(e,t)=>{Nc(e.inputs,t),e.compute(Bc(e.inputs,t))},Uc=e=>xe({axis:e.axis,blockSize:e.blockSize})}),Pc,Lc,qc,Vg=X(()=>{Xe(),le(),pe(),Pc=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Lc=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...ae(a)],u=d=>{let p=re("output",r,a.length),c=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${d.registerUniforms(f).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},qc=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ie.webgpu.validateInputContent&&Pc(t,n,r),e.compute(Lc(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Gc,Wc,Vc,Fc,Fg=X(()=>{le(),ce(),ze(),pe(),Gc=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Wc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(B.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=B.sizeFromDimension(n,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ae(e[1].dims,e[2].dims,i)],p=c=>{let f=L("indices",e[1].dataType,e[1].dims.length),m=L("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Ys("output",e[0].dataType,i.length):re("output",e[0].dataType,i.length,a);return`
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
    ${Gc(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},Vc=e=>xe({reduction:e.reduction}),Fc=(e,t)=>{e.compute(Wc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Hc,jc,Kc,Hi,Xc,Yc,Zc,Qc,Jc,ep,tp,np,ji,rp,ip,ap,sp,op,up,lp,Hg=X(()=>{le(),ce(),ze(),pe(),Hc=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},jc=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Kc=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>r.push(p)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Hc(r,t),t.axes.length>0&&jc(r,t.axes,d).forEach((p,c)=>r[c]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Hi=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Xc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Hi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Hi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Yc=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Zc=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},Qc=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},Jc=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},ep=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ie("uniforms.scales","i",r)};
        var roi_low = ${ie("uniforms.roi","i",i)};
        var roi_hi = ${ie("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ie("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,tp=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ie("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ie("uniforms.roi","i",a)};
          var roi_hi = ${ie("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${ie("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",r.length)};
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
    }`,np=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ie("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ji=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",rp=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${ji(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
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
    }`},ip=(e,t,n,r,i,a,s,o,u,d)=>{let p=n.length===2,[c,f]=p?[0,1]:[2,3],m=e.type.value,g=_=>{let b=_===c?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",_)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[_]},
        ${r[_]}, ${n[_]}, ${a[_]}, ${a[_]} + ${n.length});
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
          data[i + 1] = ${_===c?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
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
    `},ap=(e,t,n,r,i)=>{let[a,s,o,u,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${ji(e,d,a,3)}
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
      var channel: u32 = ${n.length>3?`u32(originalIndices[${d}])`:"0"};
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
    }`},sp=(e,t,n,r,i,a)=>{let s=e.dims,o=Zc(a,t.axes,s.length),u=Qc(s,r,i,t.axes),d=r.slice();r.length===0&&(d=s.map(($,I)=>$===0?1:u[I]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=Jc(s,d,t)));let p=re("output",e.dataType,u.length),c=L("input",e.dataType,s.length),f=B.size(u),m=s.length===u.length&&s.every(($,I)=>$===u[I]),g=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,b=c.type.value,x=$=>`
      ${m?"":`
      ${Xc(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${np(c,s)};
              ${Yc(t.nearestMode,n,b)};
              ${tp(c,p,s,u,d.length,o.length,g)};
              `;case"linear":return`
              ${ep(p,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${rp(c,p,s,g,_)}`;if(s.length===3||s.length===5)return`${ap(c,p,s,g,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ip(c,p,s,u,d,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(c,p)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ae(s,u)]})}},op=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},up=(e,t)=>{let n=[],r=[],i=[],a=op(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Kc(e.inputs,t,a,n,r,i),e.compute(sp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},lp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return xe({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),dp,cp,pp,jg=X(()=>{le(),ce(),pe(),dp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},cp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=B.size(a),o=a,u=s,d=a.slice(-1)[0],p=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,_=n>3,b=64,x=Ce(d),$=[{type:12,data:u},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],I=k=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[L("x",e[0].dataType,e[0].dims,x),L("skip",e[1].dataType,e[1].dims,x),L("gamma",e[2].dataType,e[2].dims,x)];c&&C.push(L("beta",e[3].dataType,e[3].dims,x)),f&&C.push(L("bias",e[4].dataType,e[4].dims,x)),C.push(re("output",e[0].dataType,o,x)),m&&C.push(re("mean_output",1,p)),g&&C.push(re("inv_std_output",1,p)),_&&C.push(re("input_skip_bias_sum",e[0].dataType,o,x));let v=Be(e[0].dataType),R=Be(1,x);return`

      ${k.registerUniforms(M).declareVariables(...C)}
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
          ${_?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${an(v,x,"value")};
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
        let mean = ${St("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${St("square_sum",x)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:p,dataType:1}),n>2&&S.push({dims:p,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${m};${g};${_}`,inputDependencies:e.map((k,M)=>"type")},getShaderSource:I,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:$})}},pp=(e,t)=>{dp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(cp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),hp,Sn,fp,Ki,mp,gp,yp,_p,Kg=X(()=>{le(),ce(),ze(),pe(),hp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Sn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},fp=(e,t)=>{if(e.length>1){let n=Sn(e,1),r=Sn(e,2),i=Sn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),xe({starts:n,ends:r,axes:i})}else return t},Ki=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},mp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${ie("uniforms.input_shape","i",n.length)};
            let steps_i = ${ie("uniforms.steps","i",n.length)};
            let signs_i = ${ie("uniforms.signs","i",n.length)};
            let starts_i = ${ie("uniforms.starts","i",n.length)};
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
      }`,gp=(e,t)=>{let n=e[0].dims,r=B.size(n),i=t.axes.length>0?B.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Sn(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((x,$)=>Ki(x,$,n,i,a)),o=t.ends.map((x,$)=>Ki(x,$,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let x=0;x<n.length;++x)i.includes(x)||(s.splice(x,0,0),o.splice(x,0,n[x]),a.splice(x,0,1));let u=a.map(x=>Math.sign(x));a.forEach((x,$,I)=>{if(x<0){let S=(o[$]-s[$])/x,k=s[$],M=k+S*a[$];s[$]=M,o[$]=k,I[$]=-x}});let d=n.slice(0);i.forEach((x,$)=>{d[x]=Math.ceil((o[x]-s[x])/a[x])});let p={dims:d,dataType:e[0].dataType},c=re("output",e[0].dataType,d.length),f=L("input",e[0].dataType,e[0].dims.length),m=B.size(d),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],_=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ae(e[0].dims,d)],b=x=>`
      ${x.registerUniforms(g).declareVariables(f,c)}
        ${mp(f,c,n)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:_})}},yp=(e,t)=>{hp(e.inputs,t);let n=fp(e.inputs,t);e.compute(gp(e.inputs,n),{inputs:[0]})},_p=e=>{let t=e.starts,n=e.ends,r=e.axes;return xe({starts:t,ends:n,axes:r})}}),wp,bp,$p,xp,Xg=X(()=>{le(),ce(),ze(),It(),pe(),wp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},bp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=B.size(r),a=r.length,s=B.normalizeAxis(t.axis,a),o=s<r.length-1,u,d=[];o?(d=Array.from({length:a},(C,v)=>v),d[s]=a-1,d[a-1]=s,u=e.compute(Ke(n,d),{inputs:[n],outputs:[-1]})[0]):u=n;let p=u.dims,c=p[a-1],f=i/c,m=Ce(c),g=c/m,_=64;f===1&&(_=256);let b=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=L("x",u.dataType,u.dims,m),$=re("result",u.dataType,u.dims,m),I=x.type.value,S=Be(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,k=C=>`
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
      ${C.registerUniform("packedCols","i32").declareVariables(x,$)}
      ${C.mainStart(_)}
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
          rowSumShared = ${I}(${St("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${m};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Ke(M,d),{inputs:[M]})},$p=(e,t)=>{wp(e.inputs),bp(e,t)},xp=e=>xe({axis:e.axis})}),Xi,vp,Sp,Ip,Tp,Yg=X(()=>{le(),ce(),pe(),Xi=e=>Array.from(e.getBigInt64Array(),Number),vp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Xi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Sp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Ip=(e,t)=>{let n=e[0].dims,r=t??Xi(e[1]),i=Sp(n,r),a=B.size(i),s=e[0].dataType,o=L("input",s,n.length),u=re("output",s,i.length),d=p=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ae(e[0].dims,i)]}),getShaderSource:d}},Tp=e=>{vp(e.inputs),e.compute(Ip(e.inputs),{inputs:[0]})}}),kp,Ep,Mp,Zg=X(()=>{le(),ce(),pe(),kp=(e,t,n,r,i)=>{let a=re("output_data",i,n.length,4),s=L("a_data",t[1].dataType,t[1].dims.length,4),o=L("b_data",t[2].dataType,t[2].dims.length,4),u=L("c_data",t[0].dataType,t[0].dims.length,4),d,p=(c,f,m)=>`select(${f}, ${c}, ${m})`;if(!r)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(f,m,g="")=>{let _=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,x=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
            ${f}[${m}] = ${g}(${p(_,b,x)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${c("data",0,"u32")}
            ${c("data",1,"u32")}
            ${c("data",2,"u32")}
            ${c("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${c("output_data[global_idx]",0)}
            ${c("output_data[global_idx]",1)}
            ${c("output_data[global_idx]",2)}
            ${c("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Ep=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(B.areEqual(t,n)&&B.areEqual(n,r)),s=t,o=B.size(t);if(a){let d=nn.calcShape(nn.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=B.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>kp(d,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ae(r,t,n,s)]})}},Mp=e=>{e.compute(Ep(e.inputs))}}),Cp,Qg=X(()=>{pg(),ci(),hg(),fg(),mg(),gg(),yg(),xg(),Sg(),Ig(),Tg(),kg(),Eg(),Mg(),Cg(),Ag(),zg(),Rg(),Og(),Ng(),Bg(),Dg(),Ug(),Pg(),Lg(),Gd(),qg(),Gg(),Wg(),Vg(),Fg(),ui(),Hg(),Qd(),jg(),Kg(),Xg(),Xd(),Yg(),It(),mi(),Zg(),Cp=new Map([["Abs",[du]],["Acos",[cu]],["Acosh",[pu]],["Add",[Ju]],["ArgMax",[Xo,di]],["ArgMin",[Ko,di]],["Asin",[hu]],["Asinh",[fu]],["Atan",[mu]],["Atanh",[gu]],["Attention",[tu]],["AveragePool",[Ec,kc]],["BatchNormalization",[au]],["BiasAdd",[uu]],["BiasSplitGelu",[Yu]],["Cast",[_u,yu]],["Ceil",[$u]],["Clip",[bu]],["Concat",[hl,fl]],["Conv",[Ei,Ti]],["ConvTranspose",[ql,Ul]],["Cos",[xu]],["Cosh",[vu]],["CumSum",[Wl,Vl]],["DepthToSpace",[Kl,Xl]],["DequantizeLinear",[Dc,Uc]],["Div",[el]],["Einsum",[td,nd]],["Elu",[Su,_n]],["Equal",[tl]],["Erf",[Iu]],["Exp",[Tu]],["Expand",[sd]],["FastGelu",[ud]],["Floor",[ku]],["FusedConv",[Ei,Ti]],["Gather",[pd,cd]],["GatherElements",[vd,xd]],["GatherBlockQuantized",[_d,wd]],["GatherND",[fd,md]],["Gelu",[Eu]],["Gemm",[kd,Td]],["GlobalAveragePool",[Cc,Mc]],["GlobalMaxPool",[Oc,Rc]],["Greater",[al]],["GreaterOrEqual",[ol]],["GridSample",[Bd,Dd]],["GroupQueryAttention",[nc]],["HardSigmoid",[Bu,Nu]],["InstanceNormalization",[ac]],["LayerNormalization",[uc]],["LeakyRelu",[Mu,_n]],["Less",[sl]],["LessOrEqual",[ul]],["Log",[Vu]],["MatMul",[dc]],["MatMulNBits",[fc,mc]],["MaxPool",[Ac,zc]],["Mul",[nl]],["MultiHeadAttention",[qd,Pd]],["Neg",[Au]],["Not",[Cu]],["Pad",[Sc]],["Pow",[rl]],["QuickGelu",[ju,_n]],["Range",[qc]],["Reciprocal",[zu]],["ReduceMin",[Wo]],["ReduceMean",[Uo]],["ReduceMax",[Go]],["ReduceSum",[Fo]],["ReduceProd",[Vo]],["ReduceL1",[Po]],["ReduceL2",[Lo]],["ReduceLogSum",[jo]],["ReduceLogSumExp",[qo]],["ReduceSumSquare",[Ho]],["Relu",[Ru]],["Resize",[up,lp]],["RotaryEmbedding",[Zd]],["ScatterND",[Fc,Vc]],["Sigmoid",[Ou]],["Sin",[Du]],["Sinh",[Uu]],["Slice",[yp,_p]],["SkipLayerNormalization",[pp]],["Split",[jd,Kd]],["Sqrt",[Pu]],["Softmax",[$p,xp]],["Sub",[il]],["Tan",[Lu]],["Tanh",[qu]],["ThresholdedRelu",[Wu,_n]],["Tile",[Tp]],["Transpose",[io,ao]],["Where",[Mp]]])}),Ap,Jg=X(()=>{Xe(),gt(),pe(),Ap=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){ot(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qe(e.programInfo.name)}dispose(){}build(e,t){ot(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=Qs(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});_e("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Qe(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),zp={};Jt(zp,{WebGpuBackend:()=>Bp});var Rp,Op,Np,Bp,e0=X(()=>{Xe(),le(),gt(),Us(),dg(),Qg(),Jg(),Rp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Op=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Rp(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Np=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Bp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Np(s),this.gpuDataManager=Ks(this),this.programManager=new Ap(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Fr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ot(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,p=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:mt(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:mt(x.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:p,startTime:_,endTime:b});else{let x="";c.forEach((I,S)=>{x+=`input[${S}]: [${I.dims}] | ${mt(I.dataType)}, `});let $="";f.forEach((I,S)=>{$+=`output[${S}]: [${I.dims}] | ${mt(I.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${p}" ${x}${$}start time: ${_} ns, execution time: ${b-_} ns`)}Un("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Qe()}run(e,t,n,r,i,a){ot(e.name);let s=[];for(let $=0;$<t.length;++$){let I=t[$].data;if(I===0)continue;let S=this.gpuDataManager.get(I);if(!S)throw new Error(`no GPU data for input: ${I}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=n.length===0?o.map(($,I)=>I):n;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let c=[],f=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(p[$])||p[$]<-3||p[$]>=a)throw new Error(`Invalid output index: ${p[$]}`);if(p[$]===-3)continue;let I=p[$]===-1,S=p[$]===-2,k=I||S?i(o[$].dataType,o[$].dims):r(p[$],o[$].dataType,o[$].dims);if(c.push(k),k.data===0)continue;let M=this.gpuDataManager.get(k.data);if(!M)throw new Error(`no GPU data for output: ${k.data}`);if(I&&this.temporaryData.push(M),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(M)}f.push(M)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return Qe(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let $=0,I=[];d.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,N,H;C.type===10?(H=v.length>4?16:v.length>2?8:v.length*R,N=v.length>4?16:R*v.length):(H=v.length<=2?v.length*R:16,N=16),$=Math.ceil($/H)*H,I.push($);let P=C.type===10?8:4;$+=v.length>4?Math.ceil(v.length/P)*N:v.length*R});let S=16;$=Math.ceil($/S)*S;let k=new ArrayBuffer($);d.forEach((C,v)=>{let R=I[v],N=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(k,R,N.length).set(N);else if(C.type===12)new Uint32Array(k,R,N.length).set(N);else if(C.type===10)new Uint16Array(k,R,N.length).set(N);else if(C.type===1)new Float32Array(k,R,N.length).set(N);else throw new Error(`Unsupported uniform type: ${mt(C.type)}`)});let M=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,k,0,$),this.gpuDataManager.release(M.id),m={offset:0,size:$,buffer:M.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),_=g[1]===1&&g[2]===1,b=Op(e,t,_),x=this.programManager.getArtifact(b);if(x||(x=this.programManager.build(e,g),this.programManager.setArtifact(b,x),_e("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let $=0;$<d.length;$++){let I=d[$],S=I.type,k=typeof I.data=="number"?1:I.data.length,[M,C]=x.uniformVariablesInfo[$];if(S!==M||k!==C)throw new Error(`Uniform variable ${$} mismatch: expect type ${M} with size ${C}, got type ${S} with size ${k} in program "${x.programInfo.name}".`)}}if(_e("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(x,s,f,g,m),Qe(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Cp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),_e("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{u&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ri(this,e,t);return Hr(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){_e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){_e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){_e("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Dp={};Jt(Dp,{init:()=>Pp});var nr,Up,Pp,t0=X(()=>{le(),gt(),ce(),lg(),nr=class Lm{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new Lm(this.module,this.dataType,this.data,t)}},Up=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(r*i++,a)),p=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),f=[];for(let m=0;m<c;m++)f.push(Number(e.getValue(r*i++,a)));o.push(new nr(e,d,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new nr(this.module,u,this.output(o,d),d),a=(o,u)=>{let d=Pt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new nr(this.module,o,p,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Pp=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(e0(),cn(zp)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,p=!1)=>{if(p)_e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{_e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),c)}},async(o,u,d)=>{_e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,p)=>{_e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let c=new Up(t,s,Number(u));return s.computeKernel(Number(o),c,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new Vs(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,p)=>a.ensureTensor(s,o,u,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Lp,Yi,Zi,Tt,qp,Qi,rr,Ji,ea,ta,na,ra,ia,Gp=X(()=>{Xe(),sg(),og(),le(),Bt(),Lr(),Es(),Lp=(e,t)=>{Te()._OrtInit(e,t)!==0&&ve("Can't initialize onnxruntime.")},Yi=async e=>{Lp(e.wasm.numThreads,Wn(e.logLevel))},Zi=async(e,t)=>{var r,i;(i=(r=Te()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(t0(),cn(Dp)).init;t==="webgpu"&&await a("webgpu",Te(),e,n),t==="webnn"&&await a("webnn",Te(),e)}},Tt=new Map,qp=e=>{let t=Te(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&ve("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Qi=(e,t)=>{let n=Te(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&ve("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let d=n.HEAPU32[i/4+1],p=[];for(let c=0;c<d;c++){let f=Number(n.getValue(i+8+c*a,"*"));p.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(c+d)*a,"*")))}return[o,u,p]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},rr=e=>{let t=Te(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Ji=async(e,t)=>{var c,f,m,g;let n,r,i=Te();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=rr(e);let a=0,s=0,o=0,u=[],d=[],p=[];try{if([s,u]=await ks(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let N=typeof R=="string"?R:R.path;v.push(Vr(typeof R=="string"?R:R.data).then(H=>{i.mountExternalData(N,H)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,N=R==null?void 0:R.context,H=R==null?void 0:R.gpuDevice,P=R==null?void 0:R.deviceType,V=R==null?void 0:R.powerPreference;N?i.currentContext=N:H?i.currentContext=await i.webnnCreateMLContext(H):i.currentContext=await i.webnnCreateMLContext({deviceType:P,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&ve("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,b]=qp(a),x=!!(t!=null&&t.enableGraphCapture),$=[],I=[],S=[],k=[],M=[];for(let v=0;v<_;v++){let[R,N,H]=Qi(a,v);R===0&&ve("Can't get an input name."),d.push(R);let P=i.UTF8ToString(R);$.push(P),S.push(N===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:mt(N),shape:H})}for(let v=0;v<b;v++){let[R,N,H]=Qi(a,v+_);R===0&&ve("Can't get an output name."),p.push(R);let P=i.UTF8ToString(R);I.push(P),k.push(N===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:mt(N),shape:H});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[P])??"cpu",A=i.webnnIsGraphOutput;if(V==="cpu"&&A&&A(a,P)){M.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(x&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(V)}}let C=null;return M.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&ve("Can't create IO binding."),C={handle:o,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Wr(v))}),Tt.set(a,[a,d,p,C,x,!1]),[a,$,I,S,k]}catch(_){throw d.forEach(b=>i._OrtFree(b)),p.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&ve("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&ve("Can't release session."),_}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&ve("Can't release session options."),u.forEach(_=>i._free(_)),(g=i.unmountExternalData)==null||g.call(i)}},ea=e=>{var u,d,p;let t=Te(),n=Tt.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&ve("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ve("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&ve("Can't release session."),Tt.delete(e)},ta=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=Te(),u=o.PTR_SIZE,d=e[0],p=e[1],c=e[3],f=c,m,g;if(d==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let x=e[2].gpuBuffer;g=Pt(Ut(d),p);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,a,x,g)}}else if(c==="ml-tensor"){let x=e[2].mlTensor;g=Pt(Ut(d),p);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,x,Ut(d),p)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,m=o._malloc(g),n.push(m);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(m+$*u,Je(x[$],n),"*")}}else{let $=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&$&&I){let S=o.UTF8ToString(i);if($(r,S)||I(r,S)){let k=Ut(d);g=Pt(k,p),f="ml-tensor";let M=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!M||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await M(r,k,p);C(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),m=v}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}}let _=o.stackSave(),b=o.stackAlloc(4*p.length);try{p.forEach(($,I)=>o.setValue(b+I*u,$,u===4?"i32":"i64"));let x=o._OrtCreateTensor(Ut(d),m,g,b,p.length,Wr(f));x===0&&ve(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(x)}finally{o.stackRestore(_)}},na=async(e,t,n,r,i,a)=>{var P,V,A,q;let s=Te(),o=s.PTR_SIZE,u=Tt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],p=u[1],c=u[2],f=u[3],m=u[4],g=u[5],_=t.length,b=r.length,x=0,$=[],I=[],S=[],k=[],M=[],C=s.stackSave(),v=s.stackAlloc(_*o),R=s.stackAlloc(_*o),N=s.stackAlloc(b*o),H=s.stackAlloc(b*o);try{[x,$]=xs(a),Ot("wasm prepareInputOutputTensor");for(let D=0;D<_;D++)await ta(n[D],I,k,e,p[t[D]],t[D],m);for(let D=0;D<b;D++)await ta(i[D],S,k,e,c[r[D]],_+r[D],m);Nt("wasm prepareInputOutputTensor");for(let D=0;D<_;D++)s.setValue(v+D*o,I[D],"*"),s.setValue(R+D*o,p[t[D]],"*");for(let D=0;D<b;D++)s.setValue(N+D*o,S[D],"*"),s.setValue(H+D*o,c[r[D]],"*");if(f&&!g){let{handle:D,outputPreferredLocations:J,outputPreferredLocationsEncoded:G}=f;if(p.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${p.length}).`);Ot("wasm bindInputsOutputs");for(let Y=0;Y<_;Y++){let j=t[Y];await s._OrtBindInput(D,p[j],I[Y])!==0&&ve(`Can't bind input[${Y}] for session=${e}.`)}for(let Y=0;Y<b;Y++){let j=r[Y];(P=i[Y])!=null&&P[3]?(M.push(S[Y]),s._OrtBindOutput(D,c[j],S[Y],0)!==0&&ve(`Can't bind pre-allocated output[${Y}] for session=${e}.`)):s._OrtBindOutput(D,c[j],0,G[j])!==0&&ve(`Can't bind output[${Y}] to ${J[Y]} for session=${e}.`)}Nt("wasm bindInputsOutputs"),Tt.set(e,[d,p,c,f,m,!0])}(V=s.jsepOnRunStart)==null||V.call(s,d),(A=s.webnnOnRunStart)==null||A.call(s,d);let F;f?F=await s._OrtRunWithBinding(d,f.handle,b,N,x):F=await s._OrtRun(d,R,v,_,H,b,N,x),F!==0&&ve("failed to call OrtRun().");let K=[],se=[];Ot("wasm ProcessOutputTensor");for(let D=0;D<b;D++){let J=Number(s.getValue(N+D*o,"*"));if(J===S[D]||M.includes(S[D])){K.push(i[D]),J!==S[D]&&s._OrtReleaseTensor(J)!==0&&ve("Can't release tensor.");continue}let G=s.stackSave(),Y=s.stackAlloc(4*o),j=!1,W,oe=0;try{s._OrtGetTensorData(J,Y,Y+o,Y+2*o,Y+3*o)!==0&&ve(`Can't access output tensor data on index ${D}.`);let ye=o===4?"i32":"i64",O=Number(s.getValue(Y,ye));oe=s.getValue(Y+o,"*");let Q=s.getValue(Y+o*2,"*"),te=Number(s.getValue(Y+o*3,ye)),ue=[];for(let we=0;we<te;we++)ue.push(Number(s.getValue(Q+we*o,ye)));s._OrtFree(Q)!==0&&ve("Can't free memory for tensor dims.");let de=ue.reduce((we,ne)=>we*ne,1);W=mt(O);let Ae=f==null?void 0:f.outputPreferredLocations[r[D]];if(W==="string"){if(Ae==="gpu-buffer"||Ae==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let ne=0;ne<de;ne++){let Me=s.getValue(oe+ne*o,"*"),Re=s.getValue(oe+(ne+1)*o,"*"),Ve=ne===de-1?void 0:Re-Me;we.push(s.UTF8ToString(Me,Ve))}K.push([W,ue,we,"cpu"])}else if(Ae==="gpu-buffer"&&de>0){let we=s.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ne=we(oe),Me=Pt(O,de);if(Me===void 0||!qr(W))throw new Error(`Unsupported data type: ${W}`);j=!0,K.push([W,ue,{gpuBuffer:ne,download:s.jsepCreateDownloader(ne,Me,W),dispose:()=>{s._OrtReleaseTensor(J)!==0&&ve("Can't release tensor.")}},"gpu-buffer"])}else if(Ae==="ml-tensor"&&de>0){let we=s.webnnEnsureTensor,ne=s.webnnIsGraphInputOutputTypeSupported;if(!we||!ne)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Pt(O,de)===void 0||!Gr(W))throw new Error(`Unsupported data type: ${W}`);if(!ne(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let Me=await we(e,oe,O,ue,!1);j=!0,K.push([W,ue,{mlTensor:Me,download:s.webnnCreateMLTensorDownloader(oe,W),dispose:()=>{s.webnnReleaseTensorId(oe),s._OrtReleaseTensor(J)}},"ml-tensor"])}else if(Ae==="ml-tensor-cpu-output"&&de>0){let we=s.webnnCreateMLTensorDownloader(oe,W)(),ne=K.length;j=!0,se.push((async()=>{let Me=[ne,await we];return s.webnnReleaseTensorId(oe),s._OrtReleaseTensor(J),Me})()),K.push([W,ue,[],"cpu"])}else{let we=Gn(W),ne=new we(de);new Uint8Array(ne.buffer,ne.byteOffset,ne.byteLength).set(s.HEAPU8.subarray(oe,oe+ne.byteLength)),K.push([W,ue,ne,"cpu"])}}finally{s.stackRestore(G),W==="string"&&oe&&s._free(oe),j||s._OrtReleaseTensor(J)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&ve("Can't clear bound outputs."),Tt.set(e,[d,p,c,f,m,!1]));for(let[D,J]of await Promise.all(se))K[D][2]=J;return Nt("wasm ProcessOutputTensor"),K}finally{(q=s.webnnOnRunEnd)==null||q.call(s,d),s.stackRestore(C),I.forEach(F=>s._OrtReleaseTensor(F)),S.forEach(F=>s._OrtReleaseTensor(F)),k.forEach(F=>s._free(F)),x!==0&&s._OrtReleaseRunOptions(x),$.forEach(F=>s._free(F))}},ra=e=>{let t=Te(),n=Tt.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&ve("Can't get an profile file name."),t._OrtFree(i)},ia=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),kt,We,sn,In,Tn,ir,aa,ar,Ht,jt,Wp,Vp,Fp,Hp,jp,Kp,Xp,Yp,Zp=X(()=>{Xe(),Gp(),Bt(),Br(),kt=()=>!!Ie.wasm.proxy&&typeof document<"u",sn=!1,In=!1,Tn=!1,ar=new Map,Ht=(e,t)=>{let n=ar.get(e);n?n.push(t):ar.set(e,[t])},jt=()=>{if(sn||!In||Tn||!We)throw new Error("worker not ready")},Wp=e=>{switch(e.data.type){case"init-wasm":sn=!1,e.data.err?(Tn=!0,aa[1](e.data.err)):(In=!0,aa[0]()),ir&&(URL.revokeObjectURL(ir),ir=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ar.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Vp=async()=>{if(!In){if(sn)throw new Error("multiple calls to 'initWasm()' detected.");if(Tn)throw new Error("previous call to 'initWasm()' failed.");if(sn=!0,kt())return new Promise((e,t)=>{We==null||We.terminate(),ys().then(([n,r])=>{try{We=r,We.onerror=a=>t(a),We.onmessage=Wp,aa=[e,t];let i={type:"init-wasm",in:Ie};!i.in.wasm.wasmPaths&&(n||zr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),We.postMessage(i),ir=n}catch(i){t(i)}},t)});try{await Pr(Ie.wasm),await Yi(Ie),In=!0}catch(e){throw Tn=!0,e}finally{sn=!1}}},Fp=async e=>{if(kt())return jt(),new Promise((t,n)=>{Ht("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ie}};We.postMessage(r)});await Zi(Ie,e)},Hp=async e=>kt()?(jt(),new Promise((t,n)=>{Ht("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};We.postMessage(r,[e.buffer])})):rr(e),jp=async(e,t)=>{if(kt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return jt(),new Promise((n,r)=>{Ht("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),We.postMessage(i,a)})}else return Ji(e,t)},Kp=async e=>{if(kt())return jt(),new Promise((t,n)=>{Ht("release",[t,n]);let r={type:"release",in:e};We.postMessage(r)});ea(e)},Xp=async(e,t,n,r,i,a)=>{if(kt()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return jt(),new Promise((s,o)=>{Ht("run",[s,o]);let u=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};We.postMessage(d,ia(u))})}else return na(e,t,n,r,i,a)},Yp=async e=>{if(kt())return jt(),new Promise((t,n)=>{Ht("end-profiling",[t,n]);let r={type:"end-profiling",in:e};We.postMessage(r)});ra(e)}}),sa,Qp,Jp,n0=X(()=>{Xe(),Zp(),le(),Er(),Es(),sa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Qp=e=>{switch(e[3]){case"cpu":return new Ge(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!qr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ge.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Gr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ge.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Jp=class{async fetchModelAndCopyToWasmMemory(e){return Hp(await Vr(e))}async loadModel(e,t){ot();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await jp(n,t),Qe()}async dispose(){return Kp(this.sessionId)}async run(e,t,n){ot();let r=[],i=[];Object.entries(e).forEach(c=>{let f=c[0],m=c[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],m=c[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(g)});let o=r.map((c,f)=>sa(c,()=>`input "${this.inputNames[i[f]]}"`)),u=a.map((c,f)=>c?sa(c,()=>`output "${this.outputNames[s[f]]}"`):null),d=await Xp(this.sessionId,i,o,s,u,n),p={};for(let c=0;c<d.length;c++)p[this.outputNames[s[c]]]=a[c]??Qp(d[c]);return Qe(),p}startProfiling(){}endProfiling(){Yp(this.sessionId)}}}),eh={};Jt(eh,{OnnxruntimeWebAssemblyBackend:()=>ua,initializeFlags:()=>oa,wasmBackend:()=>th});var oa,ua,th,r0=X(()=>{Xe(),Zp(),n0(),oa=()=>{(typeof Ie.wasm.initTimeout!="number"||Ie.wasm.initTimeout<0)&&(Ie.wasm.initTimeout=0);let e=Ie.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ie.wasm.simd=!1),typeof Ie.wasm.proxy!="boolean"&&(Ie.wasm.proxy=!1),typeof Ie.wasm.trace!="boolean"&&(Ie.wasm.trace=!1),typeof Ie.wasm.numThreads!="number"||!Number.isInteger(Ie.wasm.numThreads)||Ie.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ie.wasm.numThreads=1;else{let t=typeof navigator>"u"?Gm("node:os").cpus().length:navigator.hardwareConcurrency;Ie.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ua=class{async init(e){oa(),await Vp(),await Fp(e)}async createInferenceSessionHandler(e,t){let n=new Jp;return await n.loadModel(e,t),n}},th=new ua});Xe(),Xe(),Xe();var i0="1.27.0";{let e=(r0(),cn(eh)).wasmBackend;en("webgpu",e,5),en("webnn",e,5),en("cpu",e,10),en("wasm",e,10)}Object.defineProperty(Ie.versions,"web",{value:i0,enumerable:!0});/**
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
 */const a0=114;function s0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function nh(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,d=i/n;for(let p=0;p<n;p++){const c=(p+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,c-f));for(let _=0;_<t;_++){const b=(_+.5)*u-.5,x=Math.max(0,Math.min(r-1,Math.floor(b))),$=Math.min(r-1,x+1),I=Math.max(0,Math.min(1,b-x)),S=(f*r+x)*a,k=(f*r+$)*a,M=(m*r+x)*a,C=(m*r+$)*a,v=(p*t+_)*3;for(let R=0;R<3;R++){const N=s[S+R]*(1-I)+s[k+R]*I,H=s[M+R]*(1-I)+s[C+R]*I;o[v+R]=Math.min(255,Math.max(0,Math.round(N*(1-g)+H*g)))}}}return o}function o0(e,t){const n=s0(e.width,e.height,t),r=nh(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(a0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let d=0;d<n.resizedWidth;d++){const p=(u+d)*3,c=o+d;a[c]=r[p]/255,a[i+c]=r[p+1]/255,a[2*i+c]=r[p+2]/255}}return{tensor:a,params:n}}function u0(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],d=e[s*6+2],p=e[s*6+3],c=e[s*6+4],f=e[s*6+5];if(c<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,_=(u-t.padY)/t.scale,b=(d-t.padX)/t.scale,x=(p-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(_),Math.trunc(b-g),Math.trunc(x-_)],boxFloat:[g,_,b-g,x-_]})}return i}function kn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function rh(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function ih(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const l0=.6,d0=.8;function ah(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,d=(e[a*6+2]-t.padX)/t.scale,p=(e[a*6+3]-t.padY)/t.scale,c=kn((o+d)/2),f=kn((u+p)/2),m=kn((d-o+(p-u))/4);m>=1&&r.push({cx:c,cy:f,r:m})}return r}function c0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(l0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function p0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=d0*(n.r+r.r))&&t.push(n);return t}function h0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(rh(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function sh(e,t,n){const r=ah(e,t,n);return r.length===0?[]:h0(p0(c0(r)))}function f0(e,t,n){return ah(e,t,n)}function oh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const uh=["brown","grey","blue","green","yellow","red","purple"],m0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function lh(e,t,n){return u0(e,t,n,uh.length).map(r=>{const i=uh[r.classIndex];return{color:i,family:m0[i],box:r.box,confidence:r.confidence}})}const g0=8,y0=.8,dh=1.25;function _0(e){if(e.length<g0)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*dh?t.push(s):u>o*dh&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<y0*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const w0=2.25,ch=8;function b0(e){if(e.length<ch)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,f)=>c-f),r=w0*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,f)=>f),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let f=c+1;f<e.length;f++){const m=t[c][0]-t[f][0],g=t[c][1]-t[f][1];m*m+g*g<=i&&(a[s(c)]=s(f))}const o=new Map;for(let c=0;c<e.length;c++){const f=s(c);o.set(f,[...o.get(f)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<ch||u.length===e.length)return[];const d=new Set(u),p=e.map((c,f)=>f).filter(c=>!d.has(c));return p.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${p.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const _t={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function at(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const $0=.42,x0=22,v0=43,S0=120,I0=1.5,T0=.72,k0=110,ph=3;function En(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),d=Math.trunc(Math.min(r,i)*$0);if(d<1)return 0;let p=0;for(let c=0;c<i;c++)for(let f=0;f<r;f++){if((f-o)**2+(c-u)**2>d*d)continue;const m=(c*r+f)*a,g=s[m],_=s[m+1],b=s[m+2];!t&&g>=250&&_>=250&&b>=250||(n(g,_,b),p+=1)}return p}function E0(e){let t=0,n=0,r=0,i=En(e,!1,(a,s,o)=>{const u=at(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=En(e,!0,(a,s,o)=>{const u=at(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function M0(e){let t=0,n=0,r=En(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=En(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function C0(e){let t=0;const n=En(e,!0,(r,i,a)=>{t+=at(r,i,a).s});return n===0?null:t/n}function A0(e){const t=E0(e);if(t===null||t.s<=x0)return 1;if(t.s>=S0){const n=M0(e);return n!==null&&n>=I0?6:3}return t.s>=v0?3:6}function z0(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function R0(e,t){const n=[...t];if(e.length<ph||t.length!==e.length)return n;const r=e.map(s=>C0(s)),i=r.filter(s=>s!==null);if(i.length<ph)return n;const a=rh(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<T0*a&&s<k0&&(n[o]=1)}),n}function hh(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),d=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(d*p*3);for(let f=0;f<p;f++)for(let m=0;m<d;m++){const g=(f*d+m)*3;if((m+a-n)**2+(f+s-r)**2<=i*i){const b=((f+s)*e.width+(m+a))*e.channels;c[g]=e.data[b],c[g+1]=e.data[b+1],c[g+2]=e.data[b+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:d,height:p,channels:3,data:c}}function O0(e,t){const n=t.map(a=>hh(e,a)),r=n.map(a=>A0(a)),i=z0(t,r);return R0(n,i)}function N0(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function fh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let d=0;d<t;d++){const p=d*i,c=Math.min((d+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const _=Math.min(g+1,u)-Math.max(g,o);if(!(_<=0))for(let b=Math.floor(p);b<c;b++){const x=Math.min(b+1,c)-Math.max(b,p);x<=0||(f+=e.data[g*e.width+b]*x*_,m+=x*_)}}r[s*t+d]=Math.min(255,Math.max(0,kn(f/m)))}}return{width:t,height:n,data:r}}function B0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,kn(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function D0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const p=s+d,c=a+u;if(!(p<0||p>=t||c<0||c>=n)&&r[c*t+p]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function U0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const p=s+d,c=a+u;if(p>=0&&p<t&&c>=0&&c<n&&r[c*t+p]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function la(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let d=0,p=0;s[p++]=u,i[u]=o;let c=0,f=0,m=0;for(;d<p;){const g=s[d++],_=g%t,b=g/t|0;c+=1,f+=_,m+=b;for(let x=-1;x<=1;x++)for(let $=-1;$<=1;$++){if($===0&&x===0)continue;const I=_+$,S=b+x;if(I<0||I>=t||S<0||S>=n)continue;const k=S*t+I;r[k]>0&&i[k]===0&&(i[k]=o,s[p++]=k)}}a[o]={area:c,centroidX:f/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function P0(e,t,n){return mh(Float32Array.from(e.data),e.width,t,n)}function mh(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let d=0;d<t;d++)for(let p=0;p<t;p++){const c=p-a,f=d-a,m=o*c-u*f+a,g=u*c+o*f+a,_=Math.floor(m),b=Math.floor(g),x=m-_,$=g-b,I=(M,C)=>M>=0&&M<t&&C>=0&&C<t?e[C*t+M]:r,S=I(_,b)*(1-x)+I(_+1,b)*x,k=I(_,b+1)*(1-x)+I(_+1,b+1)*x;i[d*t+p]=S*(1-$)+k*$}return i}const L0=.9,q0=.34,G0=[.55,.6,.66,.72],W0=22,V0=88,F0=35,on=28,da=4,H0=Array.from({length:15},(e,t)=>-21+t*3),gh=[-2,0,2],j0=3,K0=.3;function X0(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function Y0(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let _=0;_<e.height;_++)for(let b=0;b<e.width;b++)e.data[_*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,_),i=Math.max(i,_));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),d=new Uint8Array(u*u),p=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let _=0;_<o;_++)for(let b=0;b<s;b++)d[(_+c)*u+(b+p)]=e.data[(_+r)*e.width+(b+t)];const f=on-2*da,m=fh({width:u,height:u,data:d},f,f),g=new Float32Array(on*on);for(let _=0;_<f;_++)for(let b=0;b<f;b++)g[(_+da)*on+(b+da)]=m.data[_*f+b]>110?1:0;return g}function Z0(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*q0);if(u<4)return null;const d=s-u,p=o-u,c=2*u,f=2*u;if(c<6||f<6)return null;const m=new Int16Array(c*f),g=new Int16Array(c*f),_=new Int16Array(c*f),b=new Uint8Array(c*f),x=[],$=Math.min(c,f)/2;for(let D=0;D<c;D++)for(let J=0;J<f;J++){const G=((D+d)*n+(J+p))*i,{h:Y,s:j,v:W}=at(a[G],a[G+1],a[G+2]),oe=D*f+J;m[oe]=Y,g[oe]=j,_[oe]=W,Math.sqrt((J-f/2)**2+(D-c/2)**2)/$<=t&&(b[oe]=1,x.push(W))}if(x.length<16)return null;const I=ih(x,55);let S=0,k=0,M=0;const C=D=>m[D]>=W0&&m[D]<=V0&&g[D]>=F0,v=D=>_[D]>=I&&g[D]<=95&&!C(D)&&b[D]===1;for(let D=0;D<c*f;D++)b[D]===1&&(M+=1,_[D]>=130&&!C(D)&&(S+=1),v(D)&&(k+=1));const R=S>.5*M&&k<.15*M,N=new Uint8Array(c*f);if(R){const D=ih(x,45);for(let J=0;J<c*f;J++)N[J]=b[J]===1&&_[J]<=D?255:0}else for(let D=0;D<c*f;D++)N[D]=v(D)?255:0;const H={width:f,height:c,data:N},P=D0(H);let V=la(P),A=V;if(V.stats.length<=1&&(V=la(H),A=V,V.stats.length<=1))return null;const q=Math.min(c,f)/2;let F=0,K=-1;for(let D=1;D<A.stats.length;D++){const J=A.stats[D];if(J===void 0)continue;const G=Math.hypot(J.centroidX-f/2,J.centroidY-c/2)/q,Y=J.area*(1-.6*Math.min(G,1));Y>K&&(K=Y,F=D)}if(F===0)return null;const se=new Uint8Array(c*f);for(let D=0;D<c*f;D++)se[D]=A.labels[D]===F?255:0;return Y0(U0({width:f,height:c,data:se}))}function Q0(e,t,n,r,i,a){const s=on;let o=0,u=0;for(let d=0;d<s;d++){const p=d-a;if(!(p<0||p>=s))for(let c=0;c<s;c++){const f=c-i;if(f<0||f>=s)continue;const m=e[p*s+f];m!==0&&(u+=m,o+=m*n[d*s+c])}}return o/(u+r-o+1e-6)}function J0(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of H0){const a=i===0?e:mh(e,on,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of gh)for(const u of gh){const d=Q0(a,s,t,n,o,u);d>r&&(r=d)}}return r}function ey(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of G0){const o=Z0(e,s);if(o!==null)for(const{label:u,bits:d}of t)n.push([J0(o,d),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<K0)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,j0))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const wt=48,ty=320;function ny(e){return["blank",...e.characters," "]}function ry(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function iy(e,t){const n=Math.trunc(wt*t),r=e.width/e.height,i=Math.ceil(wt*r)>n?n:Math.ceil(wt*r),a=new Float32Array(3*wt*n),s=wt*n,o=e.width/i,u=e.height/wt;for(let d=0;d<wt;d++){const p=(d+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(p))),f=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,p-c));for(let g=0;g<i;g++){const _=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(_))),x=Math.min(e.width-1,b+1),$=Math.max(0,Math.min(1,_-b));for(let I=0;I<3;I++){const S=2-I,k=(c*e.width+b)*e.channels+S,M=(c*e.width+x)*e.channels+S,C=(f*e.width+b)*e.channels+S,v=(f*e.width+x)*e.channels+S,R=e.data[k]*(1-$)+e.data[M]*$,N=e.data[C]*(1-$)+e.data[v]*$,H=R*(1-m)+N*m;a[I*s+d*n+g]=(H/255-.5)/.5}}}return{tensor:a,width:n}}const ay=62,sy=8,oy=5;function ca(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function uy(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function sr(e,t){return e.length===0&&t.length===0?100:200*uy(e,t)/(e.length+t.length)}function yh(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return sr(n(e),n(t))}function ly(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(p=>r.has(p)).sort(),a=[...n].filter(p=>!r.has(p)).sort(),s=[...r].filter(p=>!n.has(p)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),d=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(sr(o,u),sr(o,d),sr(u,d))}function dy(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[ca(i),ca(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function cy(e,t){const n=ca(e);if(!n||t.length===0)return null;const i=dy(t).map(p=>({...p,score:ly(n,p.key)})).sort((p,c)=>c.score-p.score).slice(0,sy).filter(p=>p.score>=ay);if(i.length===0)return null;const a=i[0].score,s=i.filter(p=>a-p.score<=oy),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],d=[yh(o,u.key),u.score];for(const p of s.slice(1)){const c=[yh(o,p.key),p.score];(c[0]>d[0]||c[0]===d[0]&&c[1]>d[1])&&(u=p,d=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const py=2560,hy=.3,fy=.5,my=1.6,gy=3,yy=5;function _y(e){const t=Math.min(1,py/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const d=(u+.5)*o-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(d))),c=Math.min(e.height-1,p+1),f=Math.max(0,Math.min(1,d-p));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,g-_));for(let $=0;$<3;$++){const I=2-$,S=(p*e.width+_)*e.channels+I,k=(p*e.width+b)*e.channels+I,M=(c*e.width+_)*e.channels+I,C=(c*e.width+b)*e.channels+I,v=e.data[S]*(1-x)+e.data[k]*x,R=e.data[M]*(1-x)+e.data[C]*x,N=v*(1-f)+R*f;a[$*i+u*n+m]=(N/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function wy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const d=o+t;e[d]>u&&(u=e[d]),s+1<t&&e[d+1]>u&&(u=e[d+1])}r[o]=u}}return r}function by(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function $y(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,d=o-a,p=Math.hypot(u,d);if(p===0)continue;const c=u/p,f=d/p;let m=1/0,g=-1/0,_=1/0,b=-1/0;for(const[S,k]of e){const M=S*c+k*f,C=-S*f+k*c;M<m&&(m=M),M>g&&(g=M),C<_&&(_=C),C>b&&(b=C)}const x=g-m,$=b-_,I=x*$;if(I<n){n=I;const S=(m+g)/2,k=(_+b)/2;t={cx:S*c-k*f,cy:S*f+k*c,w:x,h:$,angle:Math.atan2(f,c)}}}return t}function xy(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),d=Math.abs(s*a)+Math.abs(o*i),p=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-d)),m=Math.min(n-1,Math.ceil(r.cy+d));let g=0,_=0;for(let b=f;b<=m;b++)for(let x=p;x<=c;x++){const $=x-r.cx,I=b-r.cy,S=$*i+I*a,k=-$*a+I*i;Math.abs(S)<=s&&Math.abs(k)<=o&&(g+=e[b*t+x],_+=1)}return _===0?0:g/_}function vy(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((_,b)=>_[0]-b[0]),[o,u,d,p]=s,[c,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=d[1]<=p[1]?[d,p]:[p,d];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function Sy(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>hy?255:0;s=wy(s,i,a);const o={width:i,height:a,data:s},{labels:u}=la(o),d=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const _=u[m*i+g];if(_===0)continue;let b=d.get(_);b===void 0&&(b=new Map,d.set(_,b));const x=b.get(m);x===void 0?b.set(m,[g,g]):(g<x[0]&&(x[0]=g),g>x[1]&&(x[1]=g))}const p=n/i,c=r/a,f=[];for(const[m,g]of d){const _=[];for(const[N,[H,P]]of g)_.push([H-.5,N-.5],[H-.5,N+.5],[P+.5,N-.5],[P+.5,N+.5]);const b=$y(by(_));if(Math.min(b.w,b.h)<gy)continue;const x=xy(e,i,a,b);if(x<fy)continue;const $=b.w*b.h*my/(2*(b.w+b.h)),I={...b,w:b.w+2*$,h:b.h+2*$};if(Math.min(I.w,I.h)<yy+2)continue;const k=vy(I).map(([N,H])=>[Math.min(n,Math.max(0,Math.round(N*p))),Math.min(r,Math.max(0,Math.round(H*c)))]),M=k.map(N=>N[0]),C=k.map(N=>N[1]),v=Math.min(...M),R=Math.min(...C);f.push({quad:k,x:v,y:R,width:Math.max(...M)-v,height:Math.max(...C)-R,score:x})}return f.sort((m,g)=>g.score-m.score)}function Iy(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=Ty([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),d=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let f=0;f<s;f++){const m=u[6]*f+u[7]*c+u[8],g=(u[0]*f+u[1]*c+u[2])/m,_=(u[3]*f+u[4]*c+u[5])/m,b=Math.floor(g),x=Math.floor(_),$=g-b,I=_-x,S=Math.max(0,Math.min(e.width-1,b)),k=Math.max(0,Math.min(e.width-1,b+1)),M=Math.max(0,Math.min(e.height-1,x)),C=Math.max(0,Math.min(e.height-1,x+1));for(let v=0;v<e.channels;v++){const R=e.data[(M*e.width+S)*e.channels+v],N=e.data[(M*e.width+k)*e.channels+v],H=e.data[(C*e.width+S)*e.channels+v],P=e.data[(C*e.width+k)*e.channels+v],V=R*(1-$)+N*$,A=H*(1-$)+P*$;d[(c*s+f)*e.channels+v]=Math.round(V*(1-I)+A*I)}}const p={width:s,height:o,channels:e.channels,data:d};return o/s>=1.5?Mn(p,3):p}function Ty(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let d=i;d<8;d++)n[o][d]-=u*n[i][d];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function Mn(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,d=new Uint8Array(o*u*a);for(let p=0;p<i;p++)for(let c=0;c<r;c++){let f,m;n===1?(f=i-1-p,m=c):n===2?(f=r-1-c,m=i-1-p):(f=p,m=r-1-c);const g=(p*r+c)*a,_=(m*o+f)*a;for(let b=0;b<a;b++)d[_+b]=s[g+b]}return{width:o,height:u,channels:a,data:d}}const ky=5e3,_h=.75,Ey=15,My=1.25,Cy=2.4,Ay=.003,zy=.85,Ry=4,wh=2600,bh=2,$h=.3,xh=.1,vh=.012,Oy=22,Sh=.5,or=.12;function Ye(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function Ny(e,t,n,r){const i=r.map(O=>O[0]),a=r.map(O=>O[1]),s=i.reduce((O,Q)=>O+Q,0)/i.length,o=a.reduce((O,Q)=>O+Q,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const d=u*Ry,p=Math.max(0,Math.trunc(s-d)),c=Math.min(n.width,Math.trunc(s+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(n.height,Math.trunc(o+d));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<wh?bh:1,_=Ye(e,n),b=Ye(e,t),x=new e.Rect(p,f,c-p,m-f),$=_.roi(x),I=new e.Mat;g!==1?e.resize($,I,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(I);const S=new e.Mat,k=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(I,k,e.COLOR_RGB2GRAY);const M=new e.ORB(ky),C=new e.KeyPointVector,v=new e.KeyPointVector,R=new e.Mat,N=new e.Mat,H=new e.Mat,P=[_,b,$,I,S,k,C,v,R,N,H],V=O=>{for(const Q of P)try{Q.delete()}catch{}try{M.delete()}catch{}return O};if(M.detectAndCompute(S,H,C,R),M.detectAndCompute(k,H,v,N),R.rows<8||N.rows<8)return V(null);const A=new e.BFMatcher(e.NORM_HAMMING),q=new e.DMatchVectorVector;A.knnMatch(R,N,q,2);const F=[],K=[];for(let O=0;O<q.size();O++){const Q=q.get(O);if(Q.size()===2){const te=Q.get(0),ue=Q.get(1);if(te.distance<_h*ue.distance){const de=C.get(te.queryIdx).pt,Ae=v.get(te.trainIdx).pt;F.push(de.x,de.y),K.push(Ae.x,Ae.y)}}}if(q.delete(),A.delete(),F.length/2<8)return V(null);const se=e.matFromArray(F.length/2,1,e.CV_32FC2,F),D=e.matFromArray(K.length/2,1,e.CV_32FC2,K),J=new e.Mat,G=e.findHomography(se,D,e.RANSAC,5,J);let Y=0;for(let O=0;O<J.rows;O++)Y+=J.data[O];const j=G.rows===3?[...G.data64F]:null;if(se.delete(),D.delete(),J.delete(),G.delete(),j===null||Y<Ey)return V(null);const W=1/g,oe=[[W,0,p],[0,W,f],[0,0,1]],ye=[0,1,2].map(O=>[0,1,2].map(Q=>oe[O][0]*j[Q]+oe[O][1]*j[3+Q]+oe[O][2]*j[6+Q]));return V({H:ye,inliers:Y})}function Ih(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[d,p]=e[u],[c,f]=e[(u+1)%4];r+=d*f-c*p}const i=Math.abs(r/2)/(t*n);if(i<Ay||i>zy)return!1;const a=e.map((u,d)=>{const p=e[(d+1)%4];return Math.hypot(p[0]-u[0],p[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=My&&o<=Cy}function Th(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function kh(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc($h*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const d=r.map(P=>[P[0],P[1],P[2]-s*(P[0]+P[1])+0]);for(let P=0;P<3;P++)d[P][2]=r[P][2]-s*r[P][0]-s*r[P][1];const p=Ye(e,t),c=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(p,c,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),p.delete(),f.delete();const g=m.data,_=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],x=(P,V)=>{const A=(V*o+P)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let P=0;P<u;P++)for(let V=0;V<o;V++)(P<_||P>=u-_||V<_||V>=o-_)&&x(V,P);const $=P=>{P.sort((A,q)=>A-q);const V=P.length>>1;return P.length%2?P[V]:(P[V-1]+P[V])/2},I=[$(b[0]),$(b[1]),$(b[2])],S=(P,V)=>{const A=(V*o+P)*3,q=g[A]-I[0],F=g[A+1]-I[1],K=g[A+2]-I[2];return Math.sqrt(q*q+F*F+K*K)>Oy},k=Math.max(6,Math.trunc(xh*i)),M=Math.max(6,Math.trunc(xh*a)),C=Math.max(2,Math.trunc(vh*i)),v=Math.max(2,Math.trunc(vh*a)),R=P=>{let V=0,A=0;for(const q of P)A=q?A+1:0,A>V&&(V=A);return V/Math.max(1,P.length)},N=P=>{let V,A,q,F,K;if(P==="L"?(V=s,A=s+a,q=Math.max(0,s-C-k),F=Math.max(0,s-C),K=!1):P==="R"?(V=s,A=s+a,q=s+i+C,F=Math.min(o,s+i+C+k),K=!1):(V=Math.max(0,s-v-M),A=Math.max(0,s-v),q=s,F=s+i,K=!0),A<=V||F<=q)return 0;const se=[];if(K)for(let D=q;D<F;D++){let J=0;for(let G=V;G<A;G++)S(D,G)&&J++;se.push(J/(A-V)>Sh)}else for(let D=V;D<A;D++){let J=0;for(let G=q;G<F;G++)S(G,D)&&J++;se.push(J/(F-q)>Sh)}return R(se)},H={L:N("L"),R:N("R"),T:N("T")};return c.delete(),m.delete(),H}const By=6e3,Dy=8,Uy=.5,Py=.6;function Ly(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<wh?bh:1,a=Ye(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(By),d=new e.Mat,p=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,d,p,c);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return f;for(const[g,_]of n){if(r!==void 0&&Date.now()>r)break;const b=Ye(e,_),x=new e.Mat;e.cvtColor(b,x,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,I=new e.Mat;u.detectAndCompute(x,d,$,I);const S=[b,$,I],k=()=>{for(const ye of S)ye.delete();x.delete()};if(I.rows<8){k();continue}const M=new e.DMatchVectorVector;m.knnMatch(I,c,M,2);const C=[],v=[];for(let ye=0;ye<M.size();ye++){const O=M.get(ye);if(O.size()===2){const Q=O.get(0);if(Q.distance<_h*O.get(1).distance){const te=$.get(Q.queryIdx).pt,ue=p.get(Q.trainIdx).pt;C.push(te.x,te.y),v.push(ue.x,ue.y)}}}if(M.delete(),C.length/2<8){k();continue}const R=e.matFromArray(C.length/2,1,e.CV_32FC2,C),N=e.matFromArray(v.length/2,1,e.CV_32FC2,v),H=new e.Mat,P=e.findHomography(R,N,e.RANSAC,5,H);let V=0;for(let ye=0;ye<H.rows;ye++)V+=H.data[ye];const A=P.rows===3?[...P.data64F]:null;if(R.delete(),N.delete(),H.delete(),P.delete(),A===null||V<Dy){k();continue}const q=1/i,F=[[q*A[0],q*A[1],q*A[2]],[q*A[3],q*A[4],q*A[5]],[A[6],A[7],A[8]]],K=[[0,0],[_.width,0],[_.width,_.height],[0,_.height]].map(([ye,O])=>Th(F,ye,O));if(!Ih(K,t.width,t.height)){k();continue}const se=Ye(e,t),D=e.matFromArray(3,3,e.CV_64F,F.flat()),J=new e.Mat;e.warpPerspective(se,J,D,new e.Size(_.width,_.height),e.WARP_INVERSE_MAP);const G=new e.Mat;e.cvtColor(J,G,e.COLOR_RGB2GRAY);const Y=new e.Mat;e.matchTemplate(G,x,Y,e.TM_CCOEFF_NORMED);const j=Y.data32F[0];if(se.delete(),D.delete(),J.delete(),G.delete(),Y.delete(),j<Uy){k();continue}const W=kh(e,t,_,F),oe=W===null?[]:Object.keys(W).filter(ye=>W[ye]>=or);f.push({id:g,confidence:Math.max(0,j),footprint:K,built:W!==null&&Math.max(W.L,W.R,W.T)>=or,tuckRegion:Eh(K,oe)}),k()}}finally{o.delete(),d.delete(),p.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return f}function Eh(e,t){if(e.length<4||t.length===0)return null;const n=e.map(_=>[_[0],_[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=$h*a;if(!(s>0))return null;const o=n.reduce((_,b)=>_+b[0],0)/n.length,u=n.reduce((_,b)=>_+b[1],0)/n.length,d={T:[0,1],R:[1,2],L:[0,3]},p=[...n];for(const _ of["L","R","T"]){if(!t.includes(_))continue;const[b,x]=d[_],$=n[b],I=n[x];let S=-(I[1]-$[1]),k=I[0]-$[0];const M=($[0]+I[0])/2,C=($[1]+I[1])/2;S*(M-o)+k*(C-u)<0&&(S=-S,k=-k);const v=Math.hypot(S,k);v<=1e-6||(S=S/v*s,k=k/v*s,p.push([$[0]+S,$[1]+k],[I[0]+S,I[1]+k]))}const c=p.map(_=>_[0]),f=p.map(_=>_[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...f))-g}}function qy(e,t,n,r){const i=Ny(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([d,p])=>Th(i.H,d,p));if(!Ih(s,t.width,t.height))return null;const o=kh(e,t,n,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=or);return{built:Math.max(o.L,o.R,o.T)>=or,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const Gy=.3;function Wy(e,t){const n=e.filter(i=>i.edgeScores!==null);if(n.length<2)return[];for(const i of n){const{L:a,R:s,T:o}=i.edgeScores;if(Math.min(a,s,o)<Gy)return[]}const r=[];return e.forEach((i,a)=>{if(!i.built||i.edgeScores===null)return;t.some(([o,u])=>o>=i.zone.x0&&o<=i.zone.x1&&u>=i.zone.y0&&u<=i.zone.y1)||r.push(a)}),r}const Cn=120,An=179,Vy=1.3,Fy=3.6,Hy=.45,jy=6e-4,Ky=.02,Xy=6e3,Yy=.78,Zy=1.25,Qy=2.4,Jy=.05,e_=1.5,t_=.5,n_=.9,r_=150,i_=18,a_=34,s_=90,o_=130,u_=.13,l_=.15,ur="magistrates-guild",pa="merchants-guild";function d_(e,t){const n=Ye(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[Cn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[An,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),d=new e.Mat;e.morphologyEx(s,d,e.MORPH_CLOSE,u),s.delete(),u.delete();const p=new e.Mat,c=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(d,p,c,f,8);d.delete(),p.delete(),f.delete();const g=t.width*t.height,_=[];for(let b=1;b<m;b++){const x=c.intAt(b,0),$=c.intAt(b,1),I=c.intAt(b,2),S=c.intAt(b,3),k=c.intAt(b,4),M=k/g;M<jy||M>Ky||k/Math.max(I*S,1)<Hy||_.push({x,y:$,w:I,h:S})}return c.delete(),{blobs:_,mask:o,maskWidth:t.width}}function c_(e,t,n,r,i,a,s){const o=e,u=a,d=s,p=i;if(!p.gray){const j=Ye(e,r);p.gray=new o.Mat,o.cvtColor(j,p.gray,o.COLOR_RGB2GRAY),j.delete(),p.k=new o.KeyPointVector,p.d=new o.Mat;const W=new o.Mat;u.detectAndCompute(p.gray,W,p.k,p.d),W.delete()}const c=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,f,m,g),f.delete();const _=j=>(m.delete(),g.delete(),j);if(p.d.rows<8||g.rows<8)return _(null);const b=new o.DMatchVectorVector;d.knnMatch(p.d,g,b,2);const x=[],$=[];for(let j=0;j<b.size();j++){const W=b.get(j);if(W.size()===2){const oe=W.get(0);if(oe.distance<Yy*W.get(1).distance){const ye=p.k.get(oe.queryIdx).pt,O=m.get(oe.trainIdx).pt;x.push(ye.x,ye.y),$.push(O.x,O.y)}}}if(b.delete(),x.length/2<8)return _(null);const I=o.matFromArray(x.length/2,1,o.CV_32FC2,x),S=o.matFromArray($.length/2,1,o.CV_32FC2,$),k=new o.Mat,M=o.findHomography(I,S,o.RANSAC,5,k);if(I.delete(),S.delete(),k.delete(),M.rows!==3)return M.delete(),_(null);const C=[...M.data64F],v=(j,W)=>{const oe=C[6]*j+C[7]*W+C[8];return[(C[0]*j+C[1]*W+C[2])/oe,(C[3]*j+C[4]*W+C[5])/oe]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([j,W])=>v(j,W));if(R.some(j=>!Number.isFinite(j[0])||!Number.isFinite(j[1])))return M.delete(),_(null);const N=R.map((j,W)=>{const oe=R[(W+1)%4];return Math.hypot(oe[0]-j[0],oe[1]-j[1])}),H=Math.min(...N);if(H<1)return M.delete(),_(null);const P=Math.max(...N)/H;let V=0;for(let j=0;j<4;j++){const[W,oe]=R[j],[ye,O]=R[(j+1)%4];V+=W*O-ye*oe}const A=t,q=Math.abs(V/2)/(A.rows*A.cols);if(P<Zy||P>Qy||q<Jy||q>e_)return M.delete(),_(null);const F=new o.Mat;o.warpPerspective(A,F,M,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),M.delete();const K=new o.Mat;o.cvtColor(F,K,o.COLOR_RGB2GRAY),F.delete();const se=Math.trunc(r.height/2),D=K.roi(new o.Rect(0,0,r.width,se)),J=p.gray.roi(new o.Rect(0,0,r.width,se)),G=new o.Mat;o.matchTemplate(D,J,G,o.TM_CCOEFF_NORMED);const Y=G.data32F[0];return D.delete(),J.delete(),G.delete(),K.delete(),_(Y)}function p_(e,t,n){let r,i;if(n===ur)r=pa,i=u_;else if(n===pa)r=ur,i=l_;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const d=Math.trunc(o/2);let p=0,c=null;for(const[f,m]of[[0,d],[d,o]]){let g=0,_=0;for(let x=s;x<s+u;x++)for(let $=a+f;$<a+m;$++){const I=(x*e.width+$)*e.channels,{h:S,s:k,v:M}=at(e.data[I],e.data[I+1],e.data[I+2]);if(S>=Cn&&S<=An&&k>=30&&k<=170&&M<=170)continue;g++,(r===pa?S>=i_&&S<=a_&&k>=s_&&M>=o_:S>=95&&S<=130&&k>=80)&&_++}if(g<20)continue;const b=_/g;b>p&&(p=b,c={x:a+f,y:s,w:m-f,h:u})}return p>=i&&c!==null?{id:r,box:c}:null}const h_=1.7,f_=140,m_=170,g_=.2,y_=.1,Mh=240,Ch=80,Ah=60,__=50,zh="scientists-guild",Rh="tacticians-guild",lr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function w_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let k=0;for(let M=0;M<a;M++)e[(i+S)*t+r+M]>0&&k++;o[S]=k/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const d=u[0],p=u[u.length-1],c=p-d;if(c<5)return[];const f=a/c;if(f<Vy||f>Fy)return[];if(f>=h_)return[{x:r,y:i+d,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,_=[];let b=0;for(let S=-4;S<=4;S++){const k=Math.exp(-(S*S)/(2*g*g));_.push(k),b+=k}for(let S=0;S<s;S++){let k=0;for(let M=-4;M<=4;M++){const C=Math.min(s-1,Math.max(0,S+M));k+=o[C]*_[M+4]}m[S]=k/b}const x=d+Math.trunc(c*.3),$=d+Math.trunc(c*.78);let I=d+Math.trunc(c/2);if($>x){let S=1/0;for(let k=x;k<$;k++)m[k]<S&&(S=m[k],I=k)}return[{x:r,y:i+d,w:a,h:I-d},{x:r,y:i+I,w:a,h:p-I}]}function b_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let d=0;d<o;d++)for(let p=0;p<s;p++){const c=((r+d)*e.width+n+p)*e.channels,f=(d*s+p)*3;u[f]=e.data[c],u[f+1]=e.data[c+1],u[f+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function $_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=at(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=f_&&s<=m_&&n++)}return t===0?0:n/t}function x_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=at(e.data[i],e.data[i+1],e.data[i+2]);!(a>=Cn&&a<=An)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function Oh(e,t){const n=Ye(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Mh,Ch),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Mh,height:Ch,channels:3,data:i}}function v_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Nh(e,t){const n=v_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const _=g*3,{h:b,s:x,v:$}=at(n.data[_],n.data[_+1],n.data[_+2]);!(b>=Cn&&b<=An&&x>=30&&x<=170&&$<=170)&&$>=40&&(i[g]=1,a++)}const s=a<20,o=Ye(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const d=u.data;let p=0,c=0,f=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(p+=d[g*3]*100/255,c+=d[g*3+1]-128,f+=d[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[p/m,c/m,f/m]}function S_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const d=u*e.channels,{h:p,s:c,v:f}=at(e.data[d],e.data[d+1],e.data[d+2]);p>=Cn&&p<=An&&c>=30&&c<=170&&f<=170||(t++,c>=70&&f>=50&&(p>=95&&p<=130?n++:p>=35&&p<=92?r++:p<=10?i++:p>=15&&p<=34&&f>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function I_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=at(e.data[i],e.data[i+1],e.data[i+2]);s>=Ah&&o>=__?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<Ah&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function T_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,d=t[o]-r;i+=u*d,a+=u*u,s+=d*d}return i/(Math.sqrt(a*s)+1e-6)}function Bh(e,t){const n=Ye(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function k_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=Oh(e,a);n.set(i,Bh(e,s)),lr.includes(i)&&r.set(i,Nh(e,s))}return{gray:n,warmLab:r}}function E_(e,t,n){const r=Oh(e,t),i=S_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return ur;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return zh;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Rh;const a=I_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const d of Object.keys(s))s[d]>s[o]&&(o=d);if(s[o]<=0)return"";let u;if(o==="blue")u=ur;else if(o==="green")u=zh;else if(o==="red")u=Rh;else{const d=Bh(e,r);let p="",c=-2;for(const f of lr){const m=n.gray.get(f);if(m===void 0)continue;const g=T_(d,m);g>c&&(c=g,p=f)}u=p||lr[0]}if(lr.includes(u)&&n.warmLab.size>0){const d=Nh(e,r);let p=u,c=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(d[0]-m[0],d[1]-m[1],d[2]-m[2]);g<c&&(c=g,p=f)}return p}return u}function M_(e,t,n,r,i){var _;const a=[],{blobs:s,mask:o,maskWidth:u}=d_(e,t);if(s.length===0||n.size===0)return a;const d=e,p=new d.ORB(Xy),c=new d.BFMatcher(d.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=Ye(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const x=b.x+Math.trunc(b.w/2),$=b.y+Math.trunc(b.h/2),I=Math.max(r_,Math.trunc(n_*Math.max(b.w,b.h))),S=Math.max(0,x-I),k=Math.max(0,$-I),M=Math.min(t.width,x+I),C=Math.min(t.height,$+I);if(M-S<16||C-k<16)continue;const v=m.roi(new d.Rect(S,k,M-S,C-k)),R=new d.Mat;d.cvtColor(v,R,d.COLOR_RGB2GRAY);let N=null,H=-2;for(const[q,F]of n){if(r!==void 0&&Date.now()>r)break;const K=c_(e,v,R,F,f.get(q),p,c);K!==null&&K>H&&(H=K,N=q)}v.delete(),R.delete();const P=new Set;if(N!==null&&H>=t_){a.push({id:N,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),P.add(N);const q=p_(t,b,N);q&&(a.push({id:q.id,boundingBox:{x:q.box.x,y:q.box.y,width:q.box.w,height:q.box.h},confidence:.9}),P.add(q.id))}if(i===void 0||i.size===0)continue;const V=w_(o,u,b);if(V.length!==2)continue;const A=V.map(q=>b_(t,q));if(!A.some(q=>q.width*q.height===0||x_(q)<y_))for(let q=0;q<V.length;q++){const F=A[q];if($_(F)<g_)continue;g===null&&(g=k_(e,i));const K=E_(e,F,g);if(K&&!P.has(K)){P.add(K);const se=V[q];a.push({id:K,boundingBox:{x:se.x,y:se.y,width:se.w,height:se.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const x=b;for(const $ of["gray","k","d"])try{(_=x[$])==null||_.delete()}catch{}}try{p.delete(),c.delete()}catch{}}return a}const Dh=128,C_=.56,A_=15,z_=.58,R_=70,O_=50,N_=.12,B_=.2,D_=.1,U_=.17,Uh=.15;function P_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function Ph(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const d=Math.max(0,s-u),p=Math.max(0,o-u),c=Math.min(n,s+u),f=Math.min(r,o+u),m=c-d,g=f-p,_=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const x=((b+p)*n+d)*i;_.set(a.subarray(x,x+m*i),b*m*i)}return{width:m,height:g,channels:i,data:_}}function L_(e){const t=Ph(e,C_),n=N0(t),r=fh(n,Dh,Dh);return B0(r)}function q_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const d=e[u]-r,p=t[u]-i;a+=d*p,s+=d*d,o+=p*p}return a/(Math.sqrt(s*o)+1e-6)}function G_(e){const t=new Map([["masonry",0],["strategy",0]]),n=Ph(e,z_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,d=0;for(let f=0;f<r*i;f++){const m=f*a,{h:g,s:_,v:b}=at(s[m],s[m+1],s[m+2]);_>=R_&&b>=O_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(d+=1))}const p=u/o,c=d/o;return p>=N_&&t.set("masonry",Uh*Math.min(1,p/B_)),c>=D_&&t.set("strategy",Uh*Math.min(1,c/U_)),t}function W_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=L_(e);let r=0;for(const d of n.data)r+=d;const i=r/n.data.length,a=[];for(let d=0;d<360;d+=A_)a.push(P0(n,d,i));const s=new Map;for(const[d,p]of t){let c=-1/0;for(const f of a){const m=q_(f,p);m>c&&(c=m)}s.set(d,c)}for(const[d,p]of G_(e))p>0&&s.has(d)&&s.set(d,s.get(d)+p);let o="",u=-1/0;for(const[d,p]of s)p>u&&(o=d,u=p);return[o,u]}const Et=224,V_=512,F_=[.485,.456,.406],H_=[.229,.224,.225];function j_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function K_(e){const t=nh(e,Et,Et),n=Et*Et,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-F_[a])/H_[a];return r}function X_(e){const t=3*Et*Et,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(K_(Mn(e,r)),r*t);return n}function Y_(e,t=V_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function Z_(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const lt="/7wd-scorer/models/";let Lh=!1;const dr=new Map;function qh(){var e;Lh||(Ie.wasm.wasmPaths="/7wd-scorer/ort/",Ie.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Lh=!0)}const ha=new Set;function Q_(e){qh();let t=dr.get(e);return t===void 0&&(t=tn.create(`${lt}${_t[e].onnx}`,{executionProviders:ha.has(e)?["wasm"]:["webgpu","wasm"]}),dr.set(e,t),t.catch(()=>dr.delete(e))),t}let fa=null,ma=null;const J_=.75,ew=4,tw=.65,nw=3e4;let ga=null;function Gh(){return ga===null&&(ga=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),ga}const Wh=new Map;function ya(e){let t=Wh.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${lt}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),Wh.set(e,t)),t}function Vh(e){return ya(`wonder-refs/${e}.jpg`)}const Fh=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function rw(){const e=new Map;for(const t of Fh){const n=await ya(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function iw(){const e=new Map;for(const t of Fh){const n=await ya(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const aw=.6,sw=12,ow=45e3;let _a=null;function Hh(){return _a===null&&(qh(),_a=(async()=>{try{const[e,t,n,r]=await Promise.all([tn.create(`${lt}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),tn.create(`${lt}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${lt}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${lt}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:ny(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),_a}async function uw(e,t){const n=Math.max(ty/wt,t.width/t.height),{tensor:r,width:i}=iy(t,n),a={[e.rec.inputNames[0]]:new Ge("float32",r,[1,3,wt,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,d]=s.dims,p=s.data,c=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,_=-1/0;const b=m*d;for(let x=0;x<d;x++){const $=p[b+x];$>_&&(_=$,g=x)}c[m]=g,f[m]=_}return ry(c,f,e.charset)}async function lw(e,t){const n=await Hh();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+ow;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`);const o=Mn(e,s),u=_y(o),d={[n.det.inputNames[0]]:new Ge("float32",u.tensor,[1,3,u.height,u.width])},p=(await n.det.run(d))[n.det.outputNames[0]],c=Sy(p.data,u,o.width,o.height).slice(0,sw);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of c){if(Date.now()>i){a=!0;break e}const m=Iy(o,f.quad);if(m.width<m.height*1.5)continue;const[g,_]=await uw(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${_.toFixed(2)}`),_<aw||g.trim().length<ew)continue;const b=cy(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<J_||b.kind!=="wonder")continue;const x=r.get(b.id);(x===void 0||b.confidence>x.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:jh(f,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function jh(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,f)=>i===1?[f,r-1-c]:i===2?[n-1-c,r-1-f]:[n-1-f,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),d=Math.min(...o),p=Math.min(...u);return{x:d,y:p,width:Math.max(...o)-d,height:Math.max(...u)-p}}function dw(){return ma===null&&(ma=fetch(`${lt}laurel_gallery.json`).then(async e=>e.ok?X0(await e.json()):[]).catch(()=>[])),ma}function cw(e,t,n,r){return pw(e,t-r,n-r,2*r,2*r)}function pw(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),d=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(d*p*3);for(let f=0;f<p;f++)for(let m=0;m<d;m++){const g=((f+s)*e.width+(m+a))*e.channels,_=(f*d+m)*3;c[_]=e.data[g],c[_+1]=e.data[g+1],c[_+2]=e.data[g+2]}return{width:d,height:p,channels:3,data:c}}function hw(){return fa===null&&(fa=fetch(`${lt}token_templates.json`).then(async e=>e.ok?P_(await e.json()):new Map).catch(()=>new Map)),fa}let wa=null;function fw(){return wa===null&&(wa=(async()=>{try{const e=await fetch(`${lt}token_embed_index.json`);if(!e.ok)return null;const t=j_(await e.json());return{session:await tn.create(`${lt}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),wa}async function mw(e,t){const n=await fw();if(n!==null)try{const r=X_(e),i=new Ge("float32",r,[4,3,Et,Et]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=Z_(n.index,Y_(s));return[o,u]}catch{}return W_(e,t)}async function Kh(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Kt(e,t){const n=_t[e],{tensor:r,params:i}=o0(t,n.input),a=async()=>{const s=await Q_(e),o={[s.inputNames[0]]:new Ge("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(ha.has(e))throw s;return ha.add(e),dr.delete(e),await a()}}const gw=6,yw=2,_w=5,ww=2;async function bw(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Kh(e),r=await Kt("banner",n),i=lh(r.rows,r.params,_t.banner.conf);if(t.banners=i.length,i.length>=gw)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Kt("laurel",n),s=oh(a.rows,a.params,_t.laurel.conf);if(t.laurels=s.length,s.length>=yw)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Kt("coin",n),u=sh(o.rows,o.params,_t.coin.conf);return t.coins=u.length,u.length>=_w?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=ww?{...t,kind:"board",confidence:.4}:t}function $w(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function xw(e,t,n,r){const i={},a=[],s=[],o=[],u=[],d=[],p=[];let c=0,f=0,m=0,g=0,_=0;for(const I of e){_+=1;const S=`${t} photo ${_}/${e.length}`;r(`${S}: reading pixels…`);const k=await Kh(I);r(`${S}: card banners…`);const M=await Kt("banner",k),C=lh(M.rows,M.params,_t.banner.conf);r(`${S}: progress tokens…`);const v=await Kt("token",k),R=await hw(),N=[];for(const O of f0(v.rows,v.params,_t.token.conf)){N.push({cx:O.cx,cy:O.cy,r:O.r});const[Q,te]=await mw(hh(k,O),R);Q===""?f+=1:o.some(ue=>ue.id===Q)||o.push({id:Q,center:[O.cx,O.cy],radius:O.r,confidence:Math.round(te*1e4)/1e4})}r(`${S}: coins…`);const H=await Kt("coin",k),P=sh(H.rows,H.params,_t.coin.conf).filter(O=>!N.some(Q=>(O.cx-Q.cx)**2+(O.cy-Q.cy)**2<=O.r*O.r)),V=O0(k,P),A=[];if(P.forEach((O,Q)=>{const te=V[Q];c+=te,A.push({denomination:te,center:[O.cx,O.cy],radius:O.r,denomSource:"colour"})}),A.length>=2){const O=A.map(te=>te.radius).sort((te,ue)=>te-ue),Q=O.length%2===1?O[(O.length-1)/2]:(O[O.length/2-1]+O[O.length/2])/2;if(Q>0)for(const te of A)te.radius/Q>2&&(te.suspect=!0,te.suspectReason=`radius ${te.radius}px is ${(te.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}s.push(...A),r(`${S}: wonder names…`);const q=await lw(k,O=>r(`${S}: ${O}`)),F=[],K=Date.now()+nw,se=q.wonders.length>0?await Gh():null,D=[];for(const O of q.wonders){let Q=null;if(se!==null&&Date.now()<K){r(`${S}: registering ${O.name}…`);try{const te=await Vh(O.id);if(te!==null){const ue=qy(se,k,te,[[O.nameBox.x,O.nameBox.y],[O.nameBox.x+O.nameBox.width,O.nameBox.y],[O.nameBox.x+O.nameBox.width,O.nameBox.y+O.nameBox.height],[O.nameBox.x,O.nameBox.y+O.nameBox.height]]);if(ue!==null){const de=ue.footprint.map(Me=>Me[0]),Ae=ue.footprint.map(Me=>Me[1]),we=Math.max(0,Math.round(Math.min(...de))),ne=Math.max(0,Math.round(Math.min(...Ae)));Q={built:ue.built,boundingBox:{x:we,y:ne,width:Math.min(k.width,Math.round(Math.max(...de)))-we,height:Math.min(k.height,Math.round(Math.max(...Ae)))-ne},tuckRegion:Eh(ue.footprint,ue.overflow),edgeScores:ue.edgeScores}}}}catch(te){console.warn(`[wonders-reg] ${O.id} failed:`,te)}}if(Q!==null){const te=Q.tuckRegion??Q.boundingBox;F.push({x0:te.x,y0:te.y,x1:te.x+te.width,y1:te.y+te.height})}else{const te=Math.max(8,O.nameBox.height),ue=Math.round(O.nameBox.width*.15);F.push({x0:O.nameBox.x-ue,y0:O.nameBox.y-te*2.5,x1:O.nameBox.x+O.nameBox.width+ue,y1:O.nameBox.y+O.nameBox.height+te*2.5})}if(!u.some(te=>te.id===O.id)){const te={id:O.id,name:O.name,builtWithCardUnderneath:(Q==null?void 0:Q.built)??!0,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:O.confidence};u.push(te),D.push({obj:te,edgeScores:(Q==null?void 0:Q.edgeScores)??null,zone:F[F.length-1]})}}const J=Wy(D.map(O=>({built:O.obj.builtWithCardUnderneath,edgeScores:O.edgeScores,zone:O.zone})),C.map(O=>[O.box[0]+O.box[2]/2,O.box[1]+O.box[3]/2]));for(const O of J){const Q=D[O];Q.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${Q.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(q.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${S}: the wonder-name read ran out of its time budget on this device — ${q.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),se!==null&&q.wonders.length>0&&Date.now()<K)try{const O=await Hh(),Q=(O==null?void 0:O.catalog.filter(ue=>ue.kind==="wonder").map(ue=>ue.id))??[],te=new Map;for(const ue of Q)if(!u.some(de=>de.id===ue)){const de=await Vh(ue);de!==null&&te.set(ue,de)}if(te.size>0){r(`${S}: searching occluded wonders…`);const ue=Ly(se,k,te,K);for(const de of ue){const Ae=de.footprint.map(Fe=>Fe[0]),we=de.footprint.map(Fe=>Fe[1]),ne=Math.max(0,Math.round(Math.min(...Ae))),Me=Math.max(0,Math.round(Math.min(...we))),Re={x:ne,y:Me,width:Math.min(k.width,Math.round(Math.max(...Ae)))-ne,height:Math.min(k.height,Math.round(Math.max(...we)))-Me};if(u.some(Fe=>{const Oe=Fe.boundingBox,bt=Math.max(0,Math.min(Oe.x+Oe.width,Re.x+Re.width)-Math.max(Oe.x,Re.x)),un=Math.max(0,Math.min(Oe.y+Oe.height,Re.y+Re.height)-Math.max(Oe.y,Re.y)),Xt=bt*un,zn=Oe.width*Oe.height+Re.width*Re.height-Xt;return zn>0&&Xt/zn>Py}))continue;const Pe=O==null?void 0:O.catalog.find(Fe=>Fe.id===de.id);u.push({id:de.id,name:(Pe==null?void 0:Pe.nameFr)??(Pe==null?void 0:Pe.name)??de.id,builtWithCardUnderneath:de.built,boundingBox:Re,...de.tuckRegion?{tuckRegion:de.tuckRegion}:{},confidence:Math.round(de.confidence*1e4)/1e4});const ke=de.tuckRegion??Re;F.push({x0:ke.x,y0:ke.y,x1:ke.x+ke.width,y1:ke.y+ke.height})}}}catch(O){console.warn("[wonders-reg] discovery failed:",O)}const G=[];for(const O of C){const Q=O.box[0]+O.box[2]/2,te=O.box[1]+O.box[3]/2;if(F.some(de=>Q>=de.x0&&Q<=de.x1&&te>=de.y0&&te<=de.y1)){g+=1;continue}G.push(O),i[O.family]=(i[O.family]??0)+1,m+=1}const Y=_0(G),j=new Set(Y.map(O=>O.box.join(",")));for(const O of b0(G))j.has(O.box.join(","))||Y.push(O);for(const O of Y)p.push(O);const W=G.some(O=>O.family==="guild");if((W||q.wonders.length>0)&&Date.now()<K)try{const O=se??(W?await Gh():null);if(O!==null){const Q=await rw();if(Q.size>0){r(`${S}: identifying guilds…`);const te=await iw();for(const ue of M_(O,k,Q,K,te))d.some(de=>de.id===ue.id)||d.push(ue)}}}catch(O){console.warn("[guilds-reg] failed:",O)}r(`${S}: laurels…`);const oe=await dw(),ye=[];for(const O of[0,1,2,3]){const Q=O===0?k:Mn(k,O),te=await Kt("laurel",Q);for(const[ue,de,Ae,we]of oh(te.rows,te.params,_t.laurel.conf)){const ne=jh({x:ue,y:de,width:Ae-ue,height:we-de},O,k.width,k.height),Me=ne.x+ne.width/2,Re=ne.y+ne.height/2,Ve=.6*Math.max(ne.width,ne.height);ye.some(([ke,Fe,Oe,bt])=>{const un=(ke+Oe)/2,Xt=(Fe+bt)/2;return(Me-un)**2+(Re-Xt)**2<Ve*Ve})||ye.push([ne.x,ne.y,ne.x+ne.width,ne.y+ne.height])}}for(const[O,Q,te,ue]of ye){const de=Math.trunc((O+te)/2),Ae=Math.trunc((Q+ue)/2);if([...N,...P].some(ke=>(de-ke.cx)**2+(Ae-ke.cy)**2<=ke.r*ke.r))continue;const ne=Math.max(6,Math.trunc(Math.max(te-O,ue-Q)*L0)),Me=cw(k,de,Ae,ne);let Re=null,Ve=0;for(const ke of[0,1,2,3]){const Fe=ke===0?Me:Mn(Me,ke),[Oe,bt]=ey(Fe,oe);Oe!==null&&bt>Ve&&(Re=Oe,Ve=bt)}Re!==null&&Ve<tw&&(Re=null);const Pe=F.some(ke=>de>=ke.x0&&de<=ke.x1&&Ae>=ke.y0&&Ae<=ke.y1);a.push({value:Re,valueRead:Re!==null,center:[Math.round((O+te)/2),Math.round((Q+ue)/2)],boundingBox:{x:Math.trunc(O),y:Math.trunc(Q),width:Math.trunc(te-O),height:Math.trunc(ue-Q)},confidence:Math.round(Ve*1e4)/1e4,excluded:Pe,photoIndex:_-1})}}g>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${g} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):m>0&&u.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const b=i.guild??0;b!==d.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${b} purple banner(s) counted but ${d.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+d.map(I=>I.id).join(", ")+" — confirm in the review."});const x=u.filter(I=>I.boundingBox.width===0);x.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${x.map(I=>I.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${u.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),f>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${f} token disc(s) found but not identified — pick them in the review below.`}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(I=>I.id).join(", ")+" — confirm in the review."}),s.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${c} from ${s.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const $=a.filter(I=>I.valueRead);return{...$w(),wonders:u,guilds:d,progressTokens:o,laurels:a,cardVictoryPoints:{value:$.reduce((I,S)=>I+(S.value??0),0),laurelsKept:a.length,laurelsUnread:a.length-$.length,complete:a.length===$.length},cardCounts:{byFamily:i,source:m>0?"yolo":"none",tuckedExcluded:g,...p.length>0?{suspects:p}:{}},coins:{total:c,confidence:s.length>0?.5:0,source:s.length>0?"local-colour":"none",coins:s}}}async function vw(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null};for(const i of["left","right"]){const a=e[i];a.length>0&&(r[i]=await xw(a,i,n,t))}return e.hasBoard&&n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:r,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=n==="classify"?await bw(e.data.file):await vw(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
