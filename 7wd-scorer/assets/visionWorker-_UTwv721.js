var ob=Object.defineProperty;var ub=(at,st,Ft)=>st in at?ob(at,st,{enumerable:!0,configurable:!0,writable:!0,value:Ft}):at[st]=Ft;var lm=(at,st,Ft)=>ub(at,typeof st!="symbol"?st+"":st,Ft);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var at=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ft=Object.getOwnPropertyNames,pm=Object.prototype.hasOwnProperty,hm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),F=(e,t)=>()=>(e&&(t=e(e=0)),t),Ht=(e,t)=>{for(var r in t)at(e,r,{get:t[r],enumerable:!0})},fm=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ft(t))!pm.call(e,i)&&i!==r&&at(e,i,{get:()=>t[i],enumerable:!(n=st(t,i))||n.enumerable});return e},tr=e=>fm(at({},"__esModule",{value:!0}),e),rr,mt,jt,Ea,Ca,za=F(()=>{rr=new Map,mt=[],jt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=rr.get(e);if(n===void 0)rr.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=mt.indexOf(e);i!==-1&&mt.splice(i,1);for(let s=0;s<mt.length;s++)if(rr.get(mt[s]).priority<=r){mt.splice(s,0,e);return}mt.push(e)}return}throw new TypeError("not a valid backend")},Ea=async e=>{let t=rr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ca=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),n=r.length===0?mt:r,i,s=[],a=new Set;for(let u of n){let d=await Ea(u);typeof d=="string"?s.push({name:u,err:d}):(i||(i=d),i===d&&a.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of s)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>a.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),mm=F(()=>{za()}),Ma,gm=F(()=>{Ma="1.27.0"}),pn,Ae,Aa=F(()=>{gm(),pn="warning",Ae={wasm:{},webgl:{},webgpu:{},versions:{common:Ma},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);pn=e}},get logLevel(){return pn}},Object.defineProperty(Ae,"logLevel",{enumerable:!0})}),$e,ym=F(()=>{Aa(),$e=Ae}),Oa,Ra,_m=F(()=>{Oa=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let h=s*i,p=0,f=h,m=h*2,y=-1;a==="RGBA"?(p=0,f=h,m=h*2,y=h*3):a==="RGB"?(p=0,f=h,m=h*2):a==="RBG"&&(p=0,m=h,f=h*2);for(let w=0;w<s;w++)for(let v=0;v<i;v++){let $=(e.data[p++]-d[0])*u[0],b=(e.data[f++]-d[1])*u[1],I=(e.data[m++]-d[2])*u[2],T=y===-1?255:(e.data[y++]-d[3])*u[3];n.fillStyle="rgba("+$+","+b+","+I+","+T+")",n.fillRect(v,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ra=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,h;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?h=[0,0,0,0]:typeof u.bias=="number"?h=[u.bias,u.bias,u.bias,u.bias]:(h=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(h[3]=u.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,y=1,w=2,v=3,$=0,b=p,I=p*2,T=-1;o==="RGBA"?($=0,b=p,I=p*2,T=p*3):o==="RGB"?($=0,b=p,I=p*2):o==="RBG"&&($=0,I=p,b=p*2),n=r.createImageData(i,s);for(let k=0;k<s*i;m+=f,y+=f,w+=f,v+=f,k++)n.data[m]=(e.data[$++]-h[0])*d[0],n.data[y]=(e.data[b++]-h[1])*d[1],n.data[w]=(e.data[I++]-h[2])*d[2],n.data[v]=T===-1?255:(e.data[T++]-h[3])*d[3]}else throw new Error("Can not access image data");return n}}),Ir,Ba,Na,Da,Ua,Pa,wm=F(()=>{fn(),Ir=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,h=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,f=0,m=1,y=2,w=3,v=0,$=d,b=d*2,I=-1;o==="RGB"&&(p=3,f=0,m=1,y=2,w=-1),u==="RGBA"?I=d*3:u==="RBG"?(v=0,b=d,$=d*2):u==="BGR"&&(b=0,$=d,v=d*2);for(let T=0;T<d;T++,f+=p,y+=p,m+=p,w+=p)h[v++]=(e[f]+a[0])/s[0],h[$++]=(e[m]+a[1])/s[1],h[b++]=(e[y]+a[2])/s[2],I!==-1&&w!==-1&&(h[I++]=(e[w]+a[3])/s[3]);return u==="RGBA"?new Pe("float32",h,[1,4,r,n]):new Pe("float32",h,[1,3,r,n])},Ba=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=u();h.width=e.width,h.height=e.height;let p=d(h);if(p!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;p.drawImage(e,0,0),a=p.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(n){let h,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,p=t.resizedWidth):(h=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=p,t!==void 0){let f=u();f.width=p,f.height=h;let m=d(f);if(m!=null)m.putImageData(e,0,0),a=m.getImageData(0,0,p,h).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=u();h.width=e.width,h.height=e.height;let p=d(h);if(p!=null){let f=e.height,m=e.width;return p.drawImage(e,0,0,m,f),a=p.getImageData(0,0,m,f).data,o.height=f,o.width=m,Ir(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,p)=>{let f=u(),m=d(f);if(!e||!m)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,m.drawImage(y,0,0,f.width,f.height);let w=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,h(Ir(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Ir(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Na=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new Pe({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},Da=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Pe({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},Ua=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Pe({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},Pa=(e,t,r)=>new Pe({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Tt,nr,hn,La,bm=F(()=>{Tt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),nr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),hn=!1,La=()=>{if(!hn){hn=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(Tt.set("int64",BigInt64Array),nr.set(BigInt64Array,"int64")),t&&(Tt.set("uint64",BigUint64Array),nr.set(BigUint64Array,"uint64")),n?(Tt.set("float16",r),nr.set(r,"float16")):Tt.set("float16",Uint16Array)}}}),qa,Wa,$m=F(()=>{fn(),qa=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Wa=(e,t)=>{switch(e.location){case"cpu":return new Pe(e.type,e.data,t);case"cpu-pinned":return new Pe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Pe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Pe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Pe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Pe,fn=F(()=>{_m(),wm(),bm(),$m(),Pe=class{constructor(e,t,r){La();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=Tt.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let u=Tt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?a=u.from(t,BigInt):a=u.from(t)}else if(t instanceof u)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")n="string",a=e;else if(u==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let u=nr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=u,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=qa(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return Ba(e,t)}static fromTexture(e,t){return Na(e,t)}static fromGpuBuffer(e,t){return Da(e,t)}static fromMLTensor(e,t){return Ua(e,t)}static fromPinnedBuffer(e,t,r){return Pa(e,t,r)}toDataURL(e){return Oa(this,e)}toImageData(e){return Ra(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Wa(this,e)}}}),Le,Ga=F(()=>{fn(),Le=Pe}),kr,mn,Je,Fe,It,kt,Va=F(()=>{Aa(),kr=(e,t)=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeStamp(`${e}::ORT::${t}`)},mn=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let s=0;s<r.length;s++){if(n&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),kr("CPU",a);return}r[s].includes("TRACE_FUNC")&&(n=!0)}},Je=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||mn("BEGIN",e)},Fe=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||mn("END",e)},It=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.time(`ORT::${e}`)},kt=e=>{(typeof Ae.trace>"u"?!Ae.wasm.trace:!Ae.trace)||console.timeEnd(`ORT::${e}`)}}),Fa,vm=F(()=>{za(),Ga(),Va(),Fa=class dm{constructor(t){this.handler=t}async run(t,r,n){Je(),It("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Le||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Le)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(h.indexOf(p)!==-1){let f=r[p];(f===null||f instanceof Le)&&(d=!0,a=!1,i[p]=f)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let h=o[d];h instanceof Le?u[d]=h:u[d]=new Le(h.type,h.data,h.dims)}return kt("InferenceSession.run"),Fe(),u}async release(){return this.handler.dispose()}static async create(t,r,n,i){Je(),It("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,p=0,f=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(f=t.byteLength-p,typeof n=="number"){if(f=n,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||p+f>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,p,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Ca(a),d=await o.createInferenceSessionHandler(s,u);return kt("InferenceSession.create"),Fe(),new dm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ir,xm=F(()=>{vm(),ir=Fa}),Sm=F(()=>{}),Tm=F(()=>{}),Im=F(()=>{}),km=F(()=>{}),Em={};Ht(Em,{InferenceSession:()=>ir,TRACE:()=>kr,TRACE_EVENT_BEGIN:()=>It,TRACE_EVENT_END:()=>kt,TRACE_FUNC_BEGIN:()=>Je,TRACE_FUNC_END:()=>Fe,Tensor:()=>Le,env:()=>$e,registerBackend:()=>jt});var Ge=F(()=>{mm(),ym(),xm(),Ga(),Sm(),Tm(),Va(),Im(),km()}),gn=F(()=>{}),Ha={};Ht(Ha,{default:()=>ja});var yn,_n,ja,Cm=F(()=>{var e;Ep(),Et(),Sn(),yn="ort-wasm-proxy-worker",_n=((e=globalThis.self)==null?void 0:e.name)===yn,_n&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":kn(n.wasm).then(()=>{Ui(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=n;Pi(s,i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:i}=n,s=Hr(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=n;qi(i,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":Wi(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:o,options:u}=n;Vi(i,s,a,o,new Array(o.length).fill(null),u).then(d=>{d.some(h=>h[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Hi([...a,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Fi(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),ja=_n?null:t=>new Worker(t??qe,{type:"module",name:yn})}),Ka={};Ht(Ka,{default:()=>Ya});async function Xa(e={}){var om,um;var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&((om=self.name)==null?void 0:om.startsWith("em-pthread"));t.mountExternalData=(l,c)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=l=>async(...c)=>{var _;try{if(t.Yc)throw Error("Session already started");let g=t.Yc={Kd:c[0],errors:[]},S=await l(...c);if(t.Yc!==g)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let E=g.errors;if(0<E.length){let A=await Promise.all(E);if(A=A.filter(U=>U),0<A.length)throw Error(A.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(l,c)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let _=t.dd;t.jsepRegisterBuffer=(g,S,E,A)=>_.registerBuffer(g,S,E,A),t.jsepGetBuffer=g=>_.getBuffer(g),t.jsepCreateDownloader=(g,S,E)=>_.createDownloader(g,S,E),t.jsepOnCreateSession=g=>{_.onCreateSession(g)},t.jsepOnReleaseSession=g=>{_.onReleaseSession(g)},t.jsepOnRunStart=g=>_.onRunStart(g),t.Id=(g,S)=>{_.upload(g,S)}}else if(l==="webnn"){let _=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=g=>_.onRunStart(g),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=g=>{_.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,S)=>_.createMLTensorDownloader(g,S),t.webnnRegisterMLTensor=(g,S,E,A)=>_.registerMLTensor(g,S,E,A),t.webnnCreateMLContext=g=>_.createMLContext(g),t.webnnRegisterMLConstant=(g,S,E,A,U,X)=>_.registerMLConstant(g,S,E,A,U,t.Xc,X),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let l=c=>(..._)=>{let g=nt;return _=c(..._),nt!=g?new Promise((S,E)=>{ma={resolve:S,reject:E}}):_};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=l(t[c])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,u,d=(l,c)=>{throw c},h=self.location.href,p="";if(r||n){try{p=new URL(".",h).href}catch{}n&&(u=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async l=>{if(C(l))return new Promise((_,g)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?_(S.response):g(S.status)},S.onerror=g,S.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var f,m,y,w,v,$,b=console.log.bind(console),I=console.error.bind(console),T=b,k=I,z=!1,C=l=>l.startsWith("file://");function x(){$t.buffer!=N.buffer&&L()}if(i){let l=function(c){try{var _=c.data,g=_.Sc;if(g==="load"){let S=[];self.onmessage=E=>S.push(E),$=()=>{postMessage({Sc:"loaded"});for(let E of S)l(E);self.onmessage=l};for(let E of _.xd)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Sc:"callHandler",wd:E,args:A})},E=="print"&&(T=t[E]),E=="printErr"&&(k=t[E]));$t=_.Od,L(),m=_.Pd,Te(),dn()}else if(g==="run"){(function(S){var E=(x(),j)[S+52>>>2>>>0];S=(x(),j)[S+56>>>2>>>0],yf(E,E-S),pe(E)})(_.Rc),ba(_.Rc,0,0,1,0,0),yh(),pa(_.Rc),R||(cf(),R=!0);try{Jy(_.Md,_.bd)}catch(S){if(S!="unwind")throw S}}else _.target!=="setimmediate"&&(g==="checkMailbox"?R&&rn():g&&(k(`worker: received unknown command ${g}`),k(_)))}catch(S){throw pf(),S}};var R=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=l}var N,H,G,V,O,j,K,Y,ue,D,Q,M=!1;function L(){var l=$t.buffer;t.HEAP8=N=new Int8Array(l),G=new Int16Array(l),t.HEAPU8=H=new Uint8Array(l),V=new Uint16Array(l),t.HEAP32=O=new Int32Array(l),t.HEAPU32=j=new Uint32Array(l),K=new Float32Array(l),Y=new Float64Array(l),ue=new BigInt64Array(l),D=new BigUint64Array(l)}function q(){M=!0,i?$():ft.sb()}function W(l){throw k(l="Aborted("+l+")"),z=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),v==null||v(l),l}function re(){return{a:{ma:vw,gb:$w,g:e_,J:t_,f:r_,o:n_,h:i_,ha:a_,b:s_,T:o_,Ha:xh,n:u_,$:kh,Xa:Eh,Da:Ch,Fa:zh,Ya:Mh,Va:Ah,Oa:Oh,Ua:Rh,ka:Bh,Ea:Nh,Ba:Dh,Wa:Uh,Ca:Ph,bb:l_,ea:d_,wa:c_,ua:h_,da:m_,O:g_,H:y_,va:__,_:T_,xa:I_,Ra:k_,za:C_,Ia:z_,sa:M_,fa:A_,Qa:pa,_a:O_,R:D_,r:W_,c:da,hb:G_,y:V_,M:F_,D:H_,l:j_,s:jh,ib:K_,I:X_,S:Y_,j:Z_,u:Q_,q:J_,k:ew,La:tw,Ma:rw,Na:nw,Ja:Zh,Ka:Qh,ta:Jh,db:aw,ab:ow,v:uw,aa:lw,ga:dw,$a:sw,W:cw,Za:pw,Aa:hw,F:iw,U:fw,la:un,ya:gw,fb:mw,eb:yw,Sa:nf,Ta:af,Ga:qt,V:sf,ja:of,Pa:uf,ia:lf,kb:ib,na:Jw,lb:nb,oa:Qw,G:Gw,e:Iw,t:Sw,w:xw,B:Nw,mb:Xw,K:Lw,x:Cw,pa:Yw,Y:eb,ba:Kw,nb:jw,ob:Hw,P:Dw,qa:Fw,pb:Vw,N:qw,Z:Zw,d:Tw,A:Ew,m:kw,jb:ab,p:Mw,z:Aw,C:zw,E:Ow,L:Uw,qb:Ww,Q:tb,ca:Pw,X:rb,rb:Bw,ra:Rw,i:ww,a:$t,cb:Re}}}async function Te(){function l(g,S){var E=ft=g.exports;g={};for(let[A,U]of Object.entries(E))typeof U=="function"?(E=R_(U),g[A]=E):g[A]=U;return ft=g,ft=(function(){var A=ft,U=Z=>de=>Z(de)>>>0,X=Z=>()=>Z()>>>0;return(A=Object.assign({},A)).tb=U(A.tb),A.Xb=X(A.Xb),A.Zb=U(A.Zb),A.lc=U(A.lc),A.mc=X(A.mc),A.qc=U(A.qc),A})(),mh.push(ft._b),df=(g=ft).tb,cf=g.ub,t._OrtInit=g.vb,t._OrtGetLastError=g.wb,t._OrtCreateSessionOptions=g.xb,t._OrtAppendExecutionProvider=g.yb,t._OrtAddFreeDimensionOverride=g.zb,t._OrtAddSessionConfigEntry=g.Ab,t._OrtReleaseSessionOptions=g.Bb,t._OrtCreateSession=g.Cb,t._OrtReleaseSession=g.Db,t._OrtGetInputOutputCount=g.Eb,t._OrtGetInputOutputMetadata=g.Fb,t._OrtFree=g.Gb,t._OrtCreateTensor=g.Hb,t._OrtGetTensorData=g.Ib,t._OrtReleaseTensor=g.Jb,t._OrtCreateRunOptions=g.Kb,t._OrtAddRunConfigEntry=g.Lb,t._OrtReleaseRunOptions=g.Mb,t._OrtCreateBinding=g.Nb,t._OrtBindInput=g.Ob,t._OrtBindOutput=g.Pb,t._OrtClearBoundOutputs=g.Qb,t._OrtReleaseBinding=g.Rb,t._OrtRunWithBinding=g.Sb,t._OrtRun=g.Tb,t._OrtEndProfiling=g.Ub,t._JsepOutput=g.Vb,t._JsepGetNodeName=g.Wb,ln=g.Xb,it=t._free=g.Yb,xr=t._malloc=g.Zb,ba=g.ac,pf=g.bc,hf=g.cc,ff=g.dc,$a=g.ec,mf=g.fc,gf=g.gc,fe=g.hc,Sr=g.ic,yf=g.jc,pe=g.kc,va=g.lc,he=g.mc,_f=g.nc,xa=g.oc,wf=g.pc,bf=g.qc,$f=g.rc,Sa=g.sc,vf=g.tc,xf=g.uc,Sf=g.vc,Tf=g.wc,If=g.xc,kf=g.yc,Ef=g.zc,Cf=g.Ac,zf=g.Bc,Mf=g.Cc,Af=g.Dc,Of=g.Ec,Rf=g.Fc,Bf=g.Gc,Nf=g.Hc,Df=g.Ic,Uf=g.Jc,Pf=g.Kc,Lf=g.Lc,qf=g.Mc,Wf=g.Nc,Gf=g.Pc,Vf=g.Qc,Ff=g.$c,Hf=g.ad,jf=g.fd,Kf=g.jd,Xf=g.kd,Yf=g.ld,Zf=g.md,Qf=g.nd,Jf=g.od,em=g.pd,tm=g.qd,rm=g.vd,nm=g.Td,im=g.Ud,am=g.Vd,sm=g.Wd,m=S,ft}var c,_=re();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(_,(S,E)=>{g(l(S,E))})}):i?l(new WebAssembly.Instance(m,re()),m):(Q??(Q=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),c=await(async function(g){var S=Q;if(!f&&!C(S))try{var E=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,g)}catch(A){k(`wasm streaming compile failed: ${A}`),k("falling back to ArrayBuffer instantiation")}return(async function(A,U){try{var X=await(async function(Z){if(!f)try{var de=await o(Z);return new Uint8Array(de)}catch{}if(Z==Q&&f)Z=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";Z=u(Z)}return Z})(A);return await WebAssembly.instantiate(X,U)}catch(Z){k(`failed to asynchronously prepare wasm: ${Z}`),W(Z)}})(S,g)})(_),l(c.instance,c.module))}class ae{constructor(c){lm(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var le=l=>{l.terminate(),l.onmessage=()=>{}},xe=[],Ce=0,Ie=null,Ue=l=>{tt.length==0&&(wh(),_h(tt[0]));var c=tt.pop();if(!c)return 6;$r.push(c),Wt[l.Rc]=c,c.Rc=l.Rc;var _={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return c.postMessage(_,l.rd),0},ce=0,ie=(l,c,..._)=>{var g,S=16*_.length,E=he(),A=va(S),U=A>>>3;for(g of _)typeof g=="bigint"?((x(),ue)[U++>>>0]=1n,(x(),ue)[U++>>>0]=g):((x(),ue)[U++>>>0]=0n,(x(),Y)[U++>>>0]=g);return l=hf(l,0,S,A,c),pe(E),l};function Re(l){if(i)return ie(0,1,l);if(y=l,!(0<ce)){for(var c of $r)le(c);for(c of tt)le(c);tt=[],$r=[],Wt={},z=!0}d(0,new ae(l))}function pt(l){if(i)return ie(1,0,l);qt(l)}var qt=l=>{if(y=l,i)throw pt(l),"unwind";Re(l)},tt=[],$r=[],mh=[],Wt={},gh=l=>{var c=l.Rc;delete Wt[c],tt.push(l),$r.splice($r.indexOf(l),1),l.Rc=0,ff(c)};function yh(){mh.forEach(l=>l())}var _h=l=>new Promise(c=>{l.onmessage=S=>{var E=S.data;if(S=E.Sc,E.Zc&&E.Zc!=ln()){var A=Wt[E.Zc];A?A.postMessage(E,E.rd):k(`Internal error! Worker sent a message "${S}" to target pthread ${E.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?rn():S==="spawnThread"?Ue(E):S==="cleanupThread"?tn(()=>{gh(Wt[E.Nd])}):S==="loaded"?(l.loaded=!0,c(l)):E.target==="setimmediate"?l.postMessage(E):S==="uncaughtException"?l.onerror(E.error):S==="callHandler"?t[E.wd](...E.args):S&&k(`worker sent an unknown command ${S}`)},l.onerror=S=>{throw k(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var _,g=[];for(_ of[])t.propertyIsEnumerable(_)&&g.push(_);l.postMessage({Sc:"load",xd:g,Od:$t,Pd:m})});function wh(){var l=new Worker((()=>{let c=URL;return self.location.href>"file:"&&self.location.href<"file;"?new c("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});tt.push(l)}var $t,Jy=(l,c)=>{ce=0,l=Sa(l,c),0<ce?y=l:$a(l)},Qr=[],Jr=0;function e_(l){var c=new sa(l>>>=0);return(x(),N)[c.Tc+12>>>0]==0&&(bh(c,!0),Jr--),$h(c,!1),Qr.push(c),bf(l)}var Jt=0,t_=()=>{fe(0,0);var l=Qr.pop();_f(l.cd),Jt=0};function bh(l,c){c=c?1:0,(x(),N)[l.Tc+12>>>0]=c}function $h(l,c){c=c?1:0,(x(),N)[l.Tc+13>>>0]=c}class sa{constructor(c){this.cd=c,this.Tc=c-24}}var oa=l=>{var c=Jt;if(!c)return Sr(0),0;var _=new sa(c);(x(),j)[_.Tc+16>>>2>>>0]=c;var g=(x(),j)[_.Tc+4>>>2>>>0];if(!g)return Sr(0),c;for(var S of l){if(S===0||S===g)break;if(wf(S,g,_.Tc+16))return Sr(S),c}return Sr(g),c};function r_(){return oa([])}function n_(l){return oa([l>>>0])}function i_(l,c,_,g){return oa([l>>>0,c>>>0,_>>>0,g>>>0])}var a_=()=>{var l=Qr.pop();l||W("no exception to throw");var c=l.cd;throw(x(),N)[l.Tc+13>>>0]==0&&(Qr.push(l),$h(l,!0),bh(l,!1),Jr++),xa(c),Jt=c};function s_(l,c,_){var g=new sa(l>>>=0);throw c>>>=0,_>>>=0,(x(),j)[g.Tc+16>>>2>>>0]=0,(x(),j)[g.Tc+4>>>2>>>0]=c,(x(),j)[g.Tc+8>>>2>>>0]=_,xa(l),Jr++,Jt=l}var o_=()=>Jr;function vh(l,c,_,g){return i?ie(2,1,l,c,_,g):xh(l,c,_,g)}function xh(l,c,_,g){if(l>>>=0,c>>>=0,_>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return i&&S.length===0?vh(l,c,_,g):(l={Ld:_,Rc:l,bd:g,rd:S},i?(l.Sc="spawnThread",postMessage(l,S),0):Ue(l))}function u_(l){throw Jt||(Jt=l>>>0),Jt}var Sh=globalThis.TextDecoder&&new TextDecoder,Th=(l,c,_,g)=>{if(_=c+_,g)return _;for(;l[c]&&!(c>=_);)++c;return c},Ih=(l,c=0,_,g)=>{if(16<(_=Th(l,c>>>=0,_,g))-c&&l.buffer&&Sh)return Sh.decode(l.buffer instanceof ArrayBuffer?l.subarray(c,_):l.slice(c,_));for(g="";c<_;){var S=l[c++];if(128&S){var E=63&l[c++];if((224&S)==192)g+=String.fromCharCode((31&S)<<6|E);else{var A=63&l[c++];65536>(S=(240&S)==224?(15&S)<<12|E<<6|A:(7&S)<<18|E<<12|A<<6|63&l[c++])?g+=String.fromCharCode(S):(S-=65536,g+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else g+=String.fromCharCode(S)}return g},ze=(l,c,_)=>(l>>>=0)?Ih((x(),H),l,c,_):"";function kh(l,c,_){return i?ie(3,1,l,c,_):0}function Eh(l,c){if(i)return ie(4,1,l,c)}function Ch(l,c){if(i)return ie(5,1,l,c)}function zh(l,c,_){if(i)return ie(6,1,l,c,_)}function Mh(l,c,_){return i?ie(7,1,l,c,_):0}function Ah(l,c){if(i)return ie(8,1,l,c)}function Oh(l,c,_){if(i)return ie(9,1,l,c,_)}function Rh(l,c,_,g){if(i)return ie(10,1,l,c,_,g)}function Bh(l,c,_,g){if(i)return ie(11,1,l,c,_,g)}function Nh(l,c,_,g){if(i)return ie(12,1,l,c,_,g)}function Dh(l){if(i)return ie(13,1,l)}function Uh(l,c){if(i)return ie(14,1,l,c)}function Ph(l,c,_){if(i)return ie(15,1,l,c,_)}var l_=()=>W(""),rt=l=>{l>>>=0;for(var c="";;){var _=(x(),H)[l++>>>0];if(!_)return c;c+=String.fromCharCode(_)}},ua={},la={},er=class extends Error{constructor(l){super(l),this.name="BindingError"}};function ht(l,c,_={}){return(function(g,S,E={}){var A=S.name;if(!g)throw new er(`type "${A}" must have a positive integer typeid pointer`);if(la.hasOwnProperty(g)){if(E.yd)return;throw new er(`Cannot register type '${A}' twice`)}la[g]=S,ua.hasOwnProperty(g)&&(S=ua[g],delete ua[g],S.forEach(U=>U()))})(l,c,_)}var Lh=(l,c,_)=>{switch(c){case 1:return _?g=>(x(),N)[g>>>0]:g=>(x(),H)[g>>>0];case 2:return _?g=>(x(),G)[g>>>1>>>0]:g=>(x(),V)[g>>>1>>>0];case 4:return _?g=>(x(),O)[g>>>2>>>0]:g=>(x(),j)[g>>>2>>>0];case 8:return _?g=>(x(),ue)[g>>>3>>>0]:g=>(x(),D)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}};function d_(l,c,_,g,S){l>>>=0,_>>>=0,c=rt(c>>>0);let E=A=>A;if(g=g===0n){let A=8*_;E=U=>BigInt.asUintN(A,U),S=E(S)}ht(l,{name:c,Oc:E,Vc:(A,U)=>(typeof U=="number"&&(U=BigInt(U)),U),Uc:Lh(c,_,!g),Wc:null})}function c_(l,c,_,g){ht(l>>>=0,{name:c=rt(c>>>0),Oc:function(S){return!!S},Vc:function(S,E){return E?_:g},Uc:function(S){return this.Oc((x(),H)[S>>>0])},Wc:null})}var qh=[],Gt=[0,1,,1,null,1,!0,1,!1,1];function da(l){9<(l>>>=0)&&--Gt[l+1]===0&&(Gt[l]=void 0,qh.push(l))}var Ve=l=>{if(!l)throw new er(`Cannot use deleted val. handle = ${l}`);return Gt[l]},Qe=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=qh.pop()||Gt.length;return Gt[c]=l,Gt[c+1]=1,c}};function ca(l){return this.Oc((x(),j)[l>>>2>>>0])}var p_={name:"emscripten::val",Oc:l=>{var c=Ve(l);return da(l),c},Vc:(l,c)=>Qe(c),Uc:ca,Wc:null};function h_(l){return ht(l>>>0,p_)}var f_=(l,c)=>{switch(c){case 4:return function(_){return this.Oc((x(),K)[_>>>2>>>0])};case 8:return function(_){return this.Oc((x(),Y)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}};function m_(l,c,_){_>>>=0,ht(l>>>=0,{name:c=rt(c>>>0),Oc:g=>g,Vc:(g,S)=>S,Uc:f_(c,_),Wc:null})}function g_(l,c,_,g,S){l>>>=0,_>>>=0,c=rt(c>>>0);let E=U=>U;if(g===0){var A=32-8*_;E=U=>U<<A>>>A,S=E(S)}ht(l,{name:c,Oc:E,Vc:(U,X)=>X,Uc:Lh(c,_,g!==0),Wc:null})}function y_(l,c,_){function g(E){var A=(x(),j)[E>>>2>>>0];return E=(x(),j)[E+4>>>2>>>0],new S((x(),N).buffer,E,A)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];ht(l>>>=0,{name:_=rt(_>>>0),Oc:g,Uc:g},{yd:!0})}var vt=(l,c,_)=>{var g=(x(),H);if(c>>>=0,0<_){var S=c;_=c+_-1;for(var E=0;E<l.length;++E){var A=l.codePointAt(E);if(127>=A){if(c>=_)break;g[c++>>>0]=A}else if(2047>=A){if(c+1>=_)break;g[c++>>>0]=192|A>>6,g[c++>>>0]=128|63&A}else if(65535>=A){if(c+2>=_)break;g[c++>>>0]=224|A>>12,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A}else{if(c+3>=_)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A,E++}}g[c>>>0]=0,l=c-S}else l=0;return l},en=l=>{for(var c=0,_=0;_<l.length;++_){var g=l.charCodeAt(_);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++_):c+=3}return c};function __(l,c){ht(l>>>=0,{name:c=rt(c>>>0),Oc(_){var g=(x(),j)[_>>>2>>>0];return g=ze(_+4,g,!0),it(_),g},Vc(_,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var S=typeof g=="string";if(!(S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new er("Cannot pass non-string to std::string");var E=S?en(g):g.length,A=xr(4+E+1),U=A+4;return(x(),j)[A>>>2>>>0]=E,S?vt(g,U,E+1):(x(),H).set(g,U>>>0),_!==null&&_.push(it,A),A},Uc:ca,Wc(_){it(_)}})}var Wh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,w_=(l,c,_)=>{if(l>>>=1,16<(c=Th((x(),V),l,c/2,_))-l&&Wh)return Wh.decode((x(),V).slice(l,c));for(_="";l<c;++l){var g=(x(),V)[l>>>0];_+=String.fromCharCode(g)}return _},b_=(l,c,_)=>{if(_??(_=2147483647),2>_)return 0;var g=c;_=(_-=2)<2*l.length?_/2:l.length;for(var S=0;S<_;++S){var E=l.charCodeAt(S);(x(),G)[c>>>1>>>0]=E,c+=2}return(x(),G)[c>>>1>>>0]=0,c-g},$_=l=>2*l.length,v_=(l,c,_)=>{var g="";l>>>=2;for(var S=0;!(S>=c/4);S++){var E=(x(),j)[l+S>>>0];if(!E&&!_)break;g+=String.fromCodePoint(E)}return g},x_=(l,c,_)=>{if(c>>>=0,_??(_=2147483647),4>_)return 0;var g=c;_=g+_-4;for(var S=0;S<l.length;++S){var E=l.codePointAt(S);if(65535<E&&S++,(x(),O)[c>>>2>>>0]=E,(c+=4)+4>_)break}return(x(),O)[c>>>2>>>0]=0,c-g},S_=l=>{for(var c=0,_=0;_<l.length;++_)65535<l.codePointAt(_)&&_++,c+=4;return c};function T_(l,c,_){if(l>>>=0,c>>>=0,_=rt(_>>>=0),c===2)var g=w_,S=b_,E=$_;else g=v_,S=x_,E=S_;ht(l,{name:_,Oc:A=>{var U=(x(),j)[A>>>2>>>0];return U=g(A+4,U*c,!0),it(A),U},Vc:(A,U)=>{if(typeof U!="string")throw new er(`Cannot pass non-string to C++ string type ${_}`);var X=E(U),Z=xr(4+X+c);return(x(),j)[Z>>>2>>>0]=X/c,S(U,Z+4,X+c),A!==null&&A.push(it,Z),Z},Uc:ca,Wc(A){it(A)}})}function I_(l,c){ht(l>>>=0,{zd:!0,name:c=rt(c>>>0),Oc:()=>{},Vc:()=>{}})}function k_(l){ba(l>>>0,!n,1,!r,131072,!1),yh()}var tn=l=>{if(!z)try{if(l(),!(0<ce))try{i?ln()&&$a(y):qt(y)}catch(c){c instanceof ae||c=="unwind"||d(0,c)}}catch(c){c instanceof ae||c=="unwind"||d(0,c)}},E_=!Atomics.waitAsync||((um=globalThis.navigator)==null?void 0:um.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function pa(l){l>>>=0,E_||(Atomics.waitAsync((x(),O),l>>>2,l).value.then(rn),l+=128,Atomics.store((x(),O),l>>>2,1))}var rn=()=>tn(()=>{var l=ln();l&&(pa(l),gf())});function C_(l,c){(l>>>=0)==c>>>0?setTimeout(rn):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=Wt[l])&&l.postMessage({Sc:"checkMailbox"})}var ha=[];function z_(l,c,_,g,S){for(c>>>=0,S>>>=0,ha.length=0,_=S>>>3,g=S+g>>>3;_<g;){var E;E=(x(),ue)[_++>>>0]?(x(),ue)[_++>>>0]:(x(),Y)[_++>>>0],ha.push(E)}return(c?Ta[c]:bw[l])(...ha)}var M_=()=>{ce=0};function A_(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):gh(Wt[l])}function O_(l){}var nn=l=>{try{l()}catch(c){W(c)}};function R_(l){var c=(..._)=>{an.push(l);try{return l(..._)}finally{z||(an.pop(),nt&&xt===1&&an.length===0&&(xt=0,ce+=1,nn(im),typeof Fibers<"u"&&Fibers.Zd()))}};return Fh.set(l,c),c}var xt=0,nt=null,Gh=0,an=[],fa=new Map,Vh=new Map,Fh=new Map,B_=0,ma=null,N_=[],Hh=l=>(function(c){if(!z){if(xt===0){var _=!1,g=!1;c((S=0)=>{if(!z&&(Gh=S,_=!0,g)){xt=2,nn(()=>am(nt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var E=(function(){var X=(x(),O)[nt+8>>>2>>>0];return X=Vh.get(X),X=Fh.get(X),--ce,X()})()}catch(X){E=X,S=!0}var A=!1;if(!nt){var U=ma;U&&(ma=null,(S?U.reject:U.resolve)(E),A=!0)}if(S&&!A)throw E}}),g=!0,_||(xt=1,nt=(function(){var S=xr(65548),E=S+12;if((x(),j)[S>>>2>>>0]=E,(x(),j)[S+4>>>2>>>0]=E+65536,E=an[0],!fa.has(E)){var A=B_++;fa.set(E,A),Vh.set(A,E)}return E=fa.get(E),(x(),O)[S+8>>>2>>>0]=E,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),nn(()=>nm(nt)))}else xt===2?(xt=0,nn(sm),it(nt),nt=null,N_.forEach(tn)):W(`invalid state: ${xt}`);return Gh}})(c=>{l().then(c)});function D_(l){return l>>>=0,Hh(async()=>{var c=await Ve(l);return Qe(c)})}var ga=[],U_=l=>{var c=ga.length;return ga.push(l),c},P_=(l,c)=>{for(var _=Array(l),g=0;g<l;++g){var S=g,E=(x(),j)[c+4*g>>>2>>>0],A=la[E];if(A===void 0)throw l=`parameter ${g}`,E=df(E),c=rt(E),it(E),new er(`${l} has unknown type ${c}`);_[S]=A}return _},L_=(l,c,_)=>{var g=[];return l=l(g,_),g.length&&((x(),j)[c>>>2>>>0]=Qe(g)),l},q_={},sn=l=>{var c=q_[l];return c===void 0?rt(l):c};function W_(l,c,_){var[g,...S]=P_(l,c>>>0);c=g.Vc.bind(g);var E=S.map(X=>X.Uc.bind(X));l--;var A={toValue:Ve};switch(l=E.map((X,Z)=>{var de=`argFromPtr${Z}`;return A[de]=X,`${de}(args${Z?"+"+8*Z:""})`}),_){case 0:var U="toValue(handle)";break;case 2:U="new (toValue(handle))";break;case 3:U="";break;case 1:A.getStringOrSymbol=sn,U="toValue(handle)[getStringOrSymbol(methodName)]"}return U+=`(${l})`,g.zd||(A.toReturnWire=c,A.emval_returnValue=L_,U=`return emval_returnValue(toReturnWire, destructorsRef, ${U})`),U=`return function (handle, methodName, destructorsRef, args) {
  ${U}
  }`,_=new Function(Object.keys(A),U)(...Object.values(A)),U=`methodCaller<(${S.map(X=>X.name)}) => ${g.name}>`,U_(Object.defineProperty(_,"name",{value:U}))}function G_(l,c){return c>>>=0,(l=Ve(l>>>0))==Ve(c)}function V_(l){return(l>>>=0)?(l=sn(l),Qe(globalThis[l])):Qe(globalThis)}function F_(l){return l=sn(l>>>0),Qe(t[l])}function H_(l,c){return c>>>=0,l=Ve(l>>>0),c=Ve(c),Qe(l[c])}function j_(l){9<(l>>>=0)&&(Gt[l+1]+=1)}function jh(l,c,_,g,S){return ga[l>>>0](c>>>0,_>>>0,g>>>0,S>>>0)}function K_(l,c,_,g,S){return jh(l>>>0,c>>>0,_>>>0,g>>>0,S>>>0)}function X_(){return Qe([])}function Y_(l){l=Ve(l>>>0);for(var c=Array(l.length),_=0;_<l.length;_++)c[_]=l[_];return Qe(c)}function Z_(l){return Qe(sn(l>>>0))}function Q_(){return Qe({})}function J_(l){for(var c=Ve(l>>>=0);c.length;){var _=c.pop();c.pop()(_)}da(l)}function ew(l,c,_){c>>>=0,_>>>=0,l=Ve(l>>>0),c=Ve(c),_=Ve(_),l[c]=_}function tw(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(x(),O)[c>>>2>>>0]=l.getUTCSeconds(),(x(),O)[c+4>>>2>>>0]=l.getUTCMinutes(),(x(),O)[c+8>>>2>>>0]=l.getUTCHours(),(x(),O)[c+12>>>2>>>0]=l.getUTCDate(),(x(),O)[c+16>>>2>>>0]=l.getUTCMonth(),(x(),O)[c+20>>>2>>>0]=l.getUTCFullYear()-1900,(x(),O)[c+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),O)[c+28>>>2>>>0]=l}var Kh=l=>l%4==0&&(l%100!=0||l%400==0),Xh=[0,31,60,91,121,152,182,213,244,274,305,335],Yh=[0,31,59,90,120,151,181,212,243,273,304,334];function rw(l,c){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),c>>>=0,l=new Date(1e3*l),(x(),O)[c>>>2>>>0]=l.getSeconds(),(x(),O)[c+4>>>2>>>0]=l.getMinutes(),(x(),O)[c+8>>>2>>>0]=l.getHours(),(x(),O)[c+12>>>2>>>0]=l.getDate(),(x(),O)[c+16>>>2>>>0]=l.getMonth(),(x(),O)[c+20>>>2>>>0]=l.getFullYear()-1900,(x(),O)[c+24>>>2>>>0]=l.getDay();var _=(Kh(l.getFullYear())?Xh:Yh)[l.getMonth()]+l.getDate()-1|0;(x(),O)[c+28>>>2>>>0]=_,(x(),O)[c+36>>>2>>>0]=-60*l.getTimezoneOffset(),_=new Date(l.getFullYear(),6,1).getTimezoneOffset();var g=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(_!=g&&l.getTimezoneOffset()==Math.min(g,_)),(x(),O)[c+32>>>2>>>0]=l}function nw(l){l>>>=0;var c=new Date((x(),O)[l+20>>>2>>>0]+1900,(x(),O)[l+16>>>2>>>0],(x(),O)[l+12>>>2>>>0],(x(),O)[l+8>>>2>>>0],(x(),O)[l+4>>>2>>>0],(x(),O)[l>>>2>>>0],0),_=(x(),O)[l+32>>>2>>>0],g=c.getTimezoneOffset(),S=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,S);return 0>_?(x(),O)[l+32>>>2>>>0]=+(S!=E&&A==g):0<_!=(A==g)&&(S=Math.max(E,S),c.setTime(c.getTime()+6e4*((0<_?A:S)-g))),(x(),O)[l+24>>>2>>>0]=c.getDay(),_=(Kh(c.getFullYear())?Xh:Yh)[c.getMonth()]+c.getDate()-1|0,(x(),O)[l+28>>>2>>>0]=_,(x(),O)[l>>>2>>>0]=c.getSeconds(),(x(),O)[l+4>>>2>>>0]=c.getMinutes(),(x(),O)[l+8>>>2>>>0]=c.getHours(),(x(),O)[l+12>>>2>>>0]=c.getDate(),(x(),O)[l+16>>>2>>>0]=c.getMonth(),(x(),O)[l+20>>>2>>>0]=c.getYear(),l=c.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Zh(l,c,_,g,S,E,A){return i?ie(16,1,l,c,_,g,S,E,A):-52}function Qh(l,c,_,g,S,E){if(i)return ie(17,1,l,c,_,g,S,E)}var vr={},iw=()=>performance.timeOrigin+performance.now();function Jh(l,c){if(i)return ie(18,1,l,c);if(vr[l]&&(clearTimeout(vr[l].id),delete vr[l]),!c)return 0;var _=setTimeout(()=>{delete vr[l],tn(()=>mf(l,performance.timeOrigin+performance.now()))},c);return vr[l]={id:_,Yd:c},0}function aw(l,c,_,g){l>>>=0,c>>>=0,_>>>=0,g>>>=0;var S=new Date().getFullYear(),E=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var A=Math.max(E,S);(x(),j)[l>>>2>>>0]=60*A,(x(),O)[c>>>2>>>0]=+(E!=S),l=(c=U=>{var X=Math.abs(U);return`UTC${0<=U?"-":"+"}${String(Math.floor(X/60)).padStart(2,"0")}${String(X%60).padStart(2,"0")}`})(E),c=c(S),S<E?(vt(l,_,17),vt(c,g,17)):(vt(l,g,17),vt(c,_,17))}var sw=()=>Date.now();function ow(l,c,_){return _>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(x(),ue)[_>>>3>>>0]=BigInt(l),0):28}var ya=[],ef=(l,c)=>{ya.length=0;for(var _;_=(x(),H)[l++>>>0];){var g=_!=105;c+=(g&=_!=112)&&c%8?4:0,ya.push(_==112?(x(),j)[c>>>2>>>0]:_==106?(x(),ue)[c>>>3>>>0]:_==105?(x(),O)[c>>>2>>>0]:(x(),Y)[c>>>3>>>0]),c+=g?8:4}return ya};function uw(l,c,_){return l>>>=0,c=ef(c>>>0,_>>>0),Ta[l](...c)}function lw(l,c,_){return l>>>=0,c=ef(c>>>0,_>>>0),Ta[l](...c)}var dw=()=>{};function cw(l,c){return k(ze(l>>>0,c>>>0))}var pw=()=>{throw ce+=1,"unwind"};function hw(){return 4294901760}var fw=()=>navigator.hardwareConcurrency,Vt={},on=l=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+c[1]:0},tf=l=>{for(var c of l)(l=on(c))&&(Vt[l]=c)};function mw(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),tf(l),Vt.gd=on(l[3]),Vt.Jd=l,Vt.gd}function un(l){if(!(l=Vt[l>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(l))l=c[1];else{if(!(c=/^(.+?)@/.exec(l)))return 0;l=c[1]}it(un.hd??0),c=en(l)+1;var _=xr(c);return _&&vt(l,_,c),un.hd=_,un.hd}function gw(l){l>>>=0;var c=(x(),H).length;if(l<=c||4294901760<l)return!1;for(var _=1;4>=_;_*=2){var g=c*(1+.2/_);g=Math.min(g,l+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(l,g)/65536))-$t.buffer.byteLength+65535)/65536|0;try{$t.grow(g),L();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function yw(l,c,_){if(l>>>=0,c>>>=0,Vt.gd==l)var g=Vt.Jd;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),tf(g);for(var S=3;g[S]&&on(g[S])!=l;)++S;for(l=0;l<_&&g[l+S];++l)(x(),O)[c+4*l>>>2>>>0]=on(g[l+S]);return l}var _a,wa={},rf=()=>{var g;if(!_a){var l,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((g=globalThis.navigator)==null?void 0:g.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in wa)wa[l]===void 0?delete c[l]:c[l]=wa[l];var _=[];for(l in c)_.push(`${l}=${c[l]}`);_a=_}return _a};function nf(l,c){if(i)return ie(19,1,l,c);l>>>=0,c>>>=0;var _,g=0,S=0;for(_ of rf()){var E=c+g;(x(),j)[l+S>>>2>>>0]=E,g+=vt(_,E,1/0)+1,S+=4}return 0}function af(l,c){if(i)return ie(20,1,l,c);l>>>=0,c>>>=0;var _=rf();for(var g of((x(),j)[l>>>2>>>0]=_.length,l=0,_))l+=en(g)+1;return(x(),j)[c>>>2>>>0]=l,0}function sf(l){return i?ie(21,1,l):52}function of(l,c,_,g){return i?ie(22,1,l,c,_,g):52}function uf(l,c,_,g){return i?ie(23,1,l,c,_,g):70}var _w=[null,[],[]];function lf(l,c,_,g){if(i)return ie(24,1,l,c,_,g);c>>>=0,_>>>=0,g>>>=0;for(var S=0,E=0;E<_;E++){var A=(x(),j)[c>>>2>>>0],U=(x(),j)[c+4>>>2>>>0];c+=8;for(var X=0;X<U;X++){var Z=l,de=(x(),H)[A+X>>>0],ge=_w[Z];de===0||de===10?((Z===1?T:k)(Ih(ge)),ge.length=0):ge.push(de)}S+=U}return(x(),j)[g>>>2>>>0]=S,0}function ww(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)wh();xe.push(async()=>{var c=(async function(){if(!i)return Promise.all(tt.map(_h))})();Ce++,await c,--Ce==0&&Ie&&(c=Ie,Ie=null,c())})})(),i||($t=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),L()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>he(),t.stackRestore=l=>pe(l),t.stackAlloc=l=>va(l),t.setValue=function(l,c,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(x(),N)[l>>>0]=c;break;case"i16":(x(),G)[l>>>1>>>0]=c;break;case"i32":(x(),O)[l>>>2>>>0]=c;break;case"i64":(x(),ue)[l>>>3>>>0]=BigInt(c);break;case"float":(x(),K)[l>>>2>>>0]=c;break;case"double":(x(),Y)[l>>>3>>>0]=c;break;case"*":(x(),j)[l>>>2>>>0]=c;break;default:W(`invalid type for setValue: ${_}`)}},t.getValue=function(l,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(x(),N)[l>>>0];case"i16":return(x(),G)[l>>>1>>>0];case"i32":return(x(),O)[l>>>2>>>0];case"i64":return(x(),ue)[l>>>3>>>0];case"float":return(x(),K)[l>>>2>>>0];case"double":return(x(),Y)[l>>>3>>>0];case"*":return(x(),j)[l>>>2>>>0];default:W(`invalid type for getValue: ${c}`)}},t.UTF8ToString=ze,t.stringToUTF8=vt,t.lengthBytesUTF8=en;var df,cf,ln,it,xr,ba,pf,hf,ff,$a,mf,gf,fe,Sr,yf,pe,va,he,_f,xa,wf,bf,$f,Sa,vf,xf,Sf,Tf,If,kf,Ef,Cf,zf,Mf,Af,Of,Rf,Bf,Nf,Df,Uf,Pf,Lf,qf,Wf,Gf,Vf,Ff,Hf,jf,Kf,Xf,Yf,Zf,Qf,Jf,em,tm,rm,nm,im,am,sm,ft,bw=[Re,pt,vh,kh,Eh,Ch,zh,Mh,Ah,Oh,Rh,Bh,Nh,Dh,Uh,Ph,Zh,Qh,Jh,nf,af,sf,of,uf,lf],Ta={1003524:(l,c,_,g,S)=>{if(t===void 0||!t.Xc)return 1;if((l=ze(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(c=Number(c>>>0),_=Number(_>>>0),g=Number(g>>>0),c+_>l.byteLength)return 3;try{let E=l.subarray(c,c+_);switch(S){case 0:(x(),H).set(E,g>>>0);break;case 1:t.Qd?t.Qd(g,E):t.Id(g,E);break;default:return 4}return 0}catch{return 4}},1004348:(l,c,_)=>{t.td(l,(x(),H).subarray(c>>>0,c+_>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,c,_)=>{t.ed(Number(l),Number(c),Number(_),!0)},1004704:(l,c,_)=>{t.ed(Number(l),Number(c),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,c,_)=>{t.$b("HardSigmoid",l,{alpha:c,beta:_})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,c,_)=>{t.$b("Clip",l,{min:c,max:_})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,c)=>{t.$b("Elu",l,{alpha:c})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,c)=>{t.$b("LeakyRelu",l,{alpha:c})},1006444:(l,c)=>{t.$b("ThresholdedRelu",l,{alpha:c})},1006514:(l,c)=>{t.$b("Cast",l,{to:c})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,c,_,g,S)=>{t.$b("ReduceMean",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007283:(l,c,_,g,S)=>{t.$b("ReduceMax",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007457:(l,c,_,g,S)=>{t.$b("ReduceMin",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007631:(l,c,_,g,S)=>{t.$b("ReduceProd",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007806:(l,c,_,g,S)=>{t.$b("ReduceSum",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1007980:(l,c,_,g,S)=>{t.$b("ReduceL1",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008153:(l,c,_,g,S)=>{t.$b("ReduceL2",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008326:(l,c,_,g,S)=>{t.$b("ReduceLogSum",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008503:(l,c,_,g,S)=>{t.$b("ReduceSumSquare",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008683:(l,c,_,g,S)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,c,_)=>{t.$b("Transpose",l,{perm:c?Array.from((x(),O).subarray(Number(c)>>>0,Number(_)>>>0)):[]})},1009040:(l,c,_,g)=>{t.$b("DepthToSpace",l,{blocksize:c,mode:ze(_),format:g?"NHWC":"NCHW"})},1009173:(l,c,_,g)=>{t.$b("DepthToSpace",l,{blocksize:c,mode:ze(_),format:g?"NHWC":"NCHW"})},1009306:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se,St)=>{t.$b("ConvTranspose",l,{format:X?"NHWC":"NCHW",autoPad:c,dilations:[_],group:g,kernelShape:[S],pads:[E,A],strides:[U],wIsConst:()=>!!(x(),N)[Z>>>0],outputPadding:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(ge)>>>0)):[],outputShape:be?Array.from((x(),O).subarray(Number(be)>>>0,Number(Se)>>>0)):[],activation:ze(St)})},1009739:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se)=>{t.$b("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),O).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),O).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),N)[X>>>0],outputPadding:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],outputShape:ge?Array.from((x(),O).subarray(Number(ge)>>>0,Number(be)>>>0)):[],activation:ze(Se)})},1010400:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se,St)=>{t.$b("ConvTranspose",l,{format:X?"NHWC":"NCHW",autoPad:c,dilations:[_],group:g,kernelShape:[S],pads:[E,A],strides:[U],wIsConst:()=>!!(x(),N)[Z>>>0],outputPadding:de?Array.from((x(),O).subarray(Number(de)>>>0,Number(ge)>>>0)):[],outputShape:be?Array.from((x(),O).subarray(Number(be)>>>0,Number(Se)>>>0)):[],activation:ze(St)})},1010833:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se)=>{t.$b("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),O).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:g,kernelShape:Array.from((x(),O).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(E)>>>0,(Number(E)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),N)[X>>>0],outputPadding:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],outputShape:ge?Array.from((x(),O).subarray(Number(ge)>>>0,Number(be)>>>0)):[],activation:ze(Se)})},1011494:(l,c)=>{t.$b("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1011585:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se)=>{t.$b("AveragePool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:U?Array.from((x(),O).subarray(Number(U)>>>0,Number(X)>>>0)):[],pads:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ge?Array.from((x(),O).subarray(Number(ge)>>>0,Number(be)>>>0)):[]})},1012064:(l,c)=>{t.$b("GlobalAveragePool",l,{format:c?"NHWC":"NCHW"})},1012155:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se)=>{t.$b("AveragePool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:U?Array.from((x(),O).subarray(Number(U)>>>0,Number(X)>>>0)):[],pads:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ge?Array.from((x(),O).subarray(Number(ge)>>>0,Number(be)>>>0)):[]})},1012634:(l,c)=>{t.$b("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1012721:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se)=>{t.$b("MaxPool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:U?Array.from((x(),O).subarray(Number(U)>>>0,Number(X)>>>0)):[],pads:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ge?Array.from((x(),O).subarray(Number(ge)>>>0,Number(be)>>>0)):[]})},1013196:(l,c)=>{t.$b("GlobalMaxPool",l,{format:c?"NHWC":"NCHW"})},1013283:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se)=>{t.$b("MaxPool",l,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:g,storage_order:S,dilations:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:U?Array.from((x(),O).subarray(Number(U)>>>0,Number(X)>>>0)):[],pads:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],strides:ge?Array.from((x(),O).subarray(Number(ge)>>>0,Number(be)>>>0)):[]})},1013758:(l,c,_,g,S)=>{t.$b("Gemm",l,{alpha:c,beta:_,transA:g,transB:S})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,c,_,g)=>{t.$b("ArgMax",l,{keepDims:!!c,selectLastIndex:!!_,axis:g})},1014024:(l,c,_,g)=>{t.$b("ArgMin",l,{keepDims:!!c,selectLastIndex:!!_,axis:g})},1014132:(l,c)=>{t.$b("Softmax",l,{axis:c})},1014195:(l,c)=>{t.$b("Concat",l,{axis:c})},1014255:(l,c,_,g,S)=>{t.$b("Split",l,{axis:c,numOutputs:_,splitSizes:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,c)=>{t.$b("Gather",l,{axis:Number(c)})},1014536:(l,c)=>{t.$b("GatherElements",l,{axis:Number(c)})},1014615:(l,c)=>{t.$b("GatherND",l,{batch_dims:Number(c)})},1014694:(l,c,_,g,S,E,A,U,X,Z,de)=>{t.$b("Resize",l,{antialias:c,axes:_?Array.from((x(),O).subarray(Number(_)>>>0,Number(g)>>>0)):[],coordinateTransformMode:ze(S),cubicCoeffA:E,excludeOutside:A,extrapolationValue:U,keepAspectRatioPolicy:ze(X),mode:ze(Z),nearestMode:ze(de)})},1015056:(l,c,_,g,S,E,A)=>{t.$b("Slice",l,{starts:c?Array.from((x(),O).subarray(Number(c)>>>0,Number(_)>>>0)):[],ends:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[],axes:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,c,_)=>{t.$b("InstanceNormalization",l,{epsilon:c,format:_?"NHWC":"NCHW"})},1015486:(l,c,_)=>{t.$b("InstanceNormalization",l,{epsilon:c,format:_?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,c)=>{t.$b("Einsum",l,{equation:ze(c)})},1015734:(l,c,_,g,S)=>{t.$b("Pad",l,{mode:c,value:_,pads:g?Array.from((x(),O).subarray(Number(g)>>>0,Number(S)>>>0)):[]})},1015877:(l,c,_,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:c,momentum:_,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016046:(l,c,_,g,S,E)=>{t.$b("BatchNormalization",l,{epsilon:c,momentum:_,spatial:!!S,trainingMode:!!g,format:E?"NHWC":"NCHW"})},1016215:(l,c,_)=>{t.$b("CumSum",l,{exclusive:Number(c),reverse:Number(_)})},1016312:(l,c,_)=>{t.$b("DequantizeLinear",l,{axis:c,blockSize:_})},1016402:(l,c,_,g,S)=>{t.$b("GridSample",l,{align_corners:c,mode:ze(_),padding_mode:ze(g),format:S?"NHWC":"NCHW"})},1016572:(l,c,_,g,S)=>{t.$b("GridSample",l,{align_corners:c,mode:ze(_),padding_mode:ze(g),format:S?"NHWC":"NCHW"})},1016742:(l,c)=>{t.$b("ScatterND",l,{reduction:ze(c)})},1016827:(l,c,_,g,S,E,A,U,X)=>{t.$b("Attention",l,{numHeads:c,isUnidirectional:_,maskFilterValue:g,scale:S,doRotary:E,qkvHiddenSizes:A?Array.from((x(),O).subarray(Number(U)>>>0,Number(U)+A>>>0)):[],pastPresentShareBuffer:!!X})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se,St,Ia)=>{t.$b("Conv",l,{format:ge?"NHWC":"NCHW",auto_pad:c,dilations:_?Array.from((x(),O).subarray(Number(_)>>>0,Number(g)>>>0)):[],group:S,kernel_shape:E?Array.from((x(),O).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:U?Array.from((x(),O).subarray(Number(U)>>>0,Number(X)>>>0)):[],strides:Z?Array.from((x(),O).subarray(Number(Z)>>>0,Number(de)>>>0)):[],w_is_const:()=>!!(x(),N)[Number(be)>>>0],activation:ze(Se),activation_params:St?Array.from((x(),K).subarray(Number(St)>>>0,Number(Ia)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,c,_,g,S,E,A,U,X)=>{t.$b("GroupQueryAttention",l,{numHeads:c,kvNumHeads:_,scale:g,softcap:S,doRotary:E,rotaryInterleaved:A,smoothSoftmax:U,localWindowSize:X})},1018124:(l,c,_,g)=>{t.$b("LayerNormalization",l,{axis:c,epsilon:_,simplified:!!g})},1018235:(l,c,_,g)=>{t.$b("LayerNormalization",l,{axis:c,epsilon:_,simplified:!!g})},1018346:(l,c,_,g,S,E)=>{t.$b("MatMulNBits",l,{k:c,n:_,accuracyLevel:g,bits:S,blockSize:E})},1018473:(l,c,_,g,S,E)=>{t.$b("MultiHeadAttention",l,{numHeads:c,isUnidirectional:_,maskFilterValue:g,scale:S,doRotary:E})},1018632:(l,c)=>{t.$b("QuickGelu",l,{alpha:c})},1018696:(l,c,_,g,S)=>{t.$b("RotaryEmbedding",l,{interleaved:!!c,numHeads:_,rotaryEmbeddingDim:g,scale:S})},1018835:(l,c,_)=>{t.$b("SkipLayerNormalization",l,{epsilon:c,simplified:!!_})},1018937:(l,c,_)=>{t.$b("SkipLayerNormalization",l,{epsilon:c,simplified:!!_})},1019039:(l,c,_,g)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:c,quantizeAxis:_,blockSize:g})},1019160:l=>{t.Fd(l)},1019194:(l,c)=>t.Hd(Number(l),Number(c),t.Yc.Kd,t.Yc.errors)};function $w(l,c,_){return Hh(async()=>{await t.Dd(Number(l),Number(c),Number(_))})}function vw(){return typeof wasmOffsetConverter<"u"}function xw(l,c,_,g){var S=he();try{return Cf(l,c,_,g)}catch(E){if(pe(S),E!==E+0)throw E;fe(1,0)}}function Sw(l,c,_){var g=he();try{return Tf(l,c,_)}catch(S){if(pe(g),S!==S+0)throw S;fe(1,0)}}function Tw(l){var c=he();try{vf(l)}catch(_){if(pe(c),_!==_+0)throw _;fe(1,0)}}function Iw(l,c){var _=he();try{return Sa(l,c)}catch(g){if(pe(_),g!==g+0)throw g;fe(1,0)}}function kw(l,c,_){var g=he();try{$f(l,c,_)}catch(S){if(pe(g),S!==S+0)throw S;fe(1,0)}}function Ew(l,c){var _=he();try{zf(l,c)}catch(g){if(pe(_),g!==g+0)throw g;fe(1,0)}}function Cw(l,c,_,g,S,E,A){var U=he();try{return kf(l,c,_,g,S,E,A)}catch(X){if(pe(U),X!==X+0)throw X;fe(1,0)}}function zw(l,c,_,g,S,E){var A=he();try{xf(l,c,_,g,S,E)}catch(U){if(pe(A),U!==U+0)throw U;fe(1,0)}}function Mw(l,c,_,g){var S=he();try{Ef(l,c,_,g)}catch(E){if(pe(S),E!==E+0)throw E;fe(1,0)}}function Aw(l,c,_,g,S){var E=he();try{Sf(l,c,_,g,S)}catch(A){if(pe(E),A!==A+0)throw A;fe(1,0)}}function Ow(l,c,_,g,S,E,A){var U=he();try{Af(l,c,_,g,S,E,A)}catch(X){if(pe(U),X!==X+0)throw X;fe(1,0)}}function Rw(l,c,_,g,S,E,A){var U=he();try{Of(l,c,_,g,S,E,A)}catch(X){if(pe(U),X!==X+0)throw X;fe(1,0)}}function Bw(l,c,_,g,S,E,A,U){var X=he();try{Df(l,c,_,g,S,E,A,U)}catch(Z){if(pe(X),Z!==Z+0)throw Z;fe(1,0)}}function Nw(l,c,_,g,S){var E=he();try{return Mf(l,c,_,g,S)}catch(A){if(pe(E),A!==A+0)throw A;fe(1,0)}}function Dw(l,c,_){var g=he();try{return Uf(l,c,_)}catch(S){if(pe(g),S!==S+0)throw S;fe(1,0)}}function Uw(l,c,_,g,S,E,A,U){var X=he();try{Pf(l,c,_,g,S,E,A,U)}catch(Z){if(pe(X),Z!==Z+0)throw Z;fe(1,0)}}function Pw(l,c,_,g,S,E,A,U,X,Z,de,ge){var be=he();try{Rf(l,c,_,g,S,E,A,U,X,Z,de,ge)}catch(Se){if(pe(be),Se!==Se+0)throw Se;fe(1,0)}}function Lw(l,c,_,g,S,E){var A=he();try{return Bf(l,c,_,g,S,E)}catch(U){if(pe(A),U!==U+0)throw U;fe(1,0)}}function qw(l,c,_){var g=he();try{return Lf(l,c,_)}catch(S){if(pe(g),S!==S+0)throw S;return fe(1,0),0n}}function Ww(l,c,_,g,S,E,A,U,X){var Z=he();try{If(l,c,_,g,S,E,A,U,X)}catch(de){if(pe(Z),de!==de+0)throw de;fe(1,0)}}function Gw(l){var c=he();try{return qf(l)}catch(_){if(pe(c),_!==_+0)throw _;fe(1,0)}}function Vw(l,c){var _=he();try{return rm(l,c)}catch(g){if(pe(_),g!==g+0)throw g;return fe(1,0),0n}}function Fw(l){var c=he();try{return Wf(l)}catch(_){if(pe(c),_!==_+0)throw _;return fe(1,0),0n}}function Hw(l,c,_,g){var S=he();try{return Kf(l,c,_,g)}catch(E){if(pe(S),E!==E+0)throw E;fe(1,0)}}function jw(l,c,_,g,S){var E=he();try{return Xf(l,c,_,g,S)}catch(A){if(pe(E),A!==A+0)throw A;fe(1,0)}}function Kw(l,c,_,g,S,E){var A=he();try{return Yf(l,c,_,g,S,E)}catch(U){if(pe(A),U!==U+0)throw U;fe(1,0)}}function Xw(l,c,_,g,S,E){var A=he();try{return Zf(l,c,_,g,S,E)}catch(U){if(pe(A),U!==U+0)throw U;fe(1,0)}}function Yw(l,c,_,g,S,E,A,U){var X=he();try{return Nf(l,c,_,g,S,E,A,U)}catch(Z){if(pe(X),Z!==Z+0)throw Z;fe(1,0)}}function Zw(l,c,_,g,S){var E=he();try{return Qf(l,c,_,g,S)}catch(A){if(pe(E),A!==A+0)throw A;return fe(1,0),0n}}function Qw(l,c,_,g){var S=he();try{return Jf(l,c,_,g)}catch(E){if(pe(S),E!==E+0)throw E;fe(1,0)}}function Jw(l,c,_,g){var S=he();try{return em(l,c,_,g)}catch(E){if(pe(S),E!==E+0)throw E;fe(1,0)}}function eb(l,c,_,g,S,E,A,U,X,Z,de,ge){var be=he();try{return tm(l,c,_,g,S,E,A,U,X,Z,de,ge)}catch(Se){if(pe(be),Se!==Se+0)throw Se;fe(1,0)}}function tb(l,c,_,g,S,E,A,U,X,Z,de){var ge=he();try{Hf(l,c,_,g,S,E,A,U,X,Z,de)}catch(be){if(pe(ge),be!==be+0)throw be;fe(1,0)}}function rb(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se,St,Ia){var sb=he();try{jf(l,c,_,g,S,E,A,U,X,Z,de,ge,be,Se,St,Ia)}catch(ka){if(pe(sb),ka!==ka+0)throw ka;fe(1,0)}}function nb(l,c,_){var g=he();try{return Gf(l,c,_)}catch(S){if(pe(g),S!==S+0)throw S;fe(1,0)}}function ib(l,c,_){var g=he();try{return Vf(l,c,_)}catch(S){if(pe(g),S!==S+0)throw S;fe(1,0)}}function ab(l,c,_,g){var S=he();try{Ff(l,c,_,g)}catch(E){if(pe(S),E!==E+0)throw E;fe(1,0)}}function dn(){if(0<Ce)Ie=dn;else if(i)w==null||w(t),q();else{for(var l=xe;0<l.length;)l.shift()(t);0<Ce?Ie=dn:(t.calledRun=!0,z||(q(),w==null||w(t)))}}return i||(ft=await Te(),dn()),t.PTR_SIZE=4,M?t:new Promise((l,c)=>{w=l,v=c})}var Ya,Za,zm=F(()=>{var e,t;Ya=Xa,Za=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Za&&Xa()}),wn,bn,Qa,qe,Ja,Er,es,ts,$n,rs,vn,ns,xn,is,Sn=F(()=>{gn(),wn=typeof location>"u"?void 0:location.origin,bn=self.location.href>"file:"&&self.location.href<"file;",Qa=()=>{{if(bn){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,wn).href}return self.location.href}},qe=Qa(),Ja=()=>{if(qe&&!qe.startsWith("blob:"))return qe.substring(0,qe.lastIndexOf("/")+1)},Er=(e,t)=>{try{let r=t??qe;return(r?new URL(e,r):new URL(e)).origin===wn}catch{return!1}},es=(e,t)=>{let r=t??qe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},ts=(e,t)=>`${t??"./"}${e}`,$n=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},rs=async e=>(await import(e)).default,vn=(Cm(),tr(Ha)).default,ns=async()=>{if(!qe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Er(qe))return[void 0,vn()];let e=await $n(qe);return[e,vn(e)]},xn=(zm(),tr(Ka)).default,is=async(e,t,r,n)=>{let i=xn&&!(e||t);if(i)if(qe)i=Er(qe)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,xn];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??es(s,t),o=r&&a&&!Er(a,t),u=o?await $n(a):a??ts(s,t);return[o?u:void 0,await rs(u)]}}}),Tn,Cr,ar,In,as,ss,os,kn,ve,Et=F(()=>{Sn(),Cr=!1,ar=!1,In=!1,as=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ss=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},os=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},kn=async e=>{if(Cr)return Promise.resolve();if(ar)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(In)throw new Error("previous call to 'initializeWebAssembly()' failed.");ar=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!os())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ss())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=as();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,o=(a==null?void 0:a.href)??a,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,h=e.wasmBinary,[p,f]=await is(o,s,r>1,!!h||!!d),m=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{m=!0,w()},t)})),y.push(new Promise((w,v)=>{let $={numThreads:r};if(h)$.wasmBinary=h,$.locateFile=b=>b;else if(d||s)$.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,o).href;else if(p){let b=Ja();b&&($.locateFile=I=>b+I)}f($).then(b=>{ar=!1,Cr=!0,Tn=b,w(),p&&URL.revokeObjectURL(p)},b=>{ar=!1,In=!0,v(b)})})),await Promise.race(y),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ve=()=>{if(Cr&&Tn)return Tn;throw new Error("WebAssembly is not initialized yet.")}}),He,zr,we,En=F(()=>{Et(),He=(e,t)=>{let r=ve(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},zr=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")zr(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},we=e=>{let t=ve(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),us,Mm=F(()=>{Et(),En(),us=e=>{let t=ve(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=He(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&we("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&zr(e.extra,"",new WeakSet,(a,o)=>{let u=He(a,n),d=He(o,n);t._OrtAddRunConfigEntry(r,u,d)!==0&&we(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),ls,ds,cs,Ct,ps,hs,Am=F(()=>{Et(),En(),ls=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ds=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},cs=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ct=(e,t,r,n)=>{let i=He(t,n),s=He(r,n);ve()._OrtAddSessionConfigEntry(e,i,s)!==0&&we(`Can't set a session config entry: ${t} - ${r}.`)},ps=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",Ct(e,"session.disable_quant_qdq","1",r),Ct(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&Ct(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Ct(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=He(s,r),u=a.length,d=0,h=0;if(u>0){d=ve()._malloc(u*ve().PTR_SIZE),r.push(d),h=ve()._malloc(u*ve().PTR_SIZE),r.push(h);for(let p=0;p<u;p++)ve().setValue(d+p*ve().PTR_SIZE,a[p][0],"*"),ve().setValue(h+p*ve().PTR_SIZE,a[p][1],"*")}await ve()._OrtAppendExecutionProvider(e,o,d,h,u)!==0&&we(`Can't append execution provider: ${s}.`)}},hs=async e=>{let t=ve(),r=0,n=[],i=e||{};cs(i);try{let s=ls(i.graphOptimizationLevel??"all"),a=ds(i.executionMode??"sequential"),o=typeof i.logId=="string"?He(i.logId,n):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof i.optimizedModelFilePath=="string"?He(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,u,d,h),r===0&&we("Can't create session options."),i.executionProviders&&await ps(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Ct(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,f]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=He(p,n);t._OrtAddFreeDimensionOverride(r,m,f)!==0&&we(`Can't set a free dimension override: ${p} - ${f}.`)}return i.extra!==void 0&&zr(i.extra,"",new WeakSet,(p,f)=>{Ct(r,p,f,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&we("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),zt,ot,Mt,Mr,Ar,Cn,zn,Mn,ne=F(()=>{zt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ot=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Mt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},Mr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ar=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Cn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",zn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Mn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),An,fs=F(()=>{gn(),An=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let u=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let a=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(s,a,d).set(u),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ms,gs,ys,_s,On,ws,me,ut=F(()=>{ne(),ms=["V","I","W","E","F"],gs=(e,t)=>{console.log(`[${ms[e]},${new Date().toISOString()}]${t}`)},On=(e,t)=>{ys=e,_s=t},ws=(e,t)=>{let r=Ar(e),n=Ar(ys);r>=n&&gs(r,typeof t=="function"?t():t)},me=(...e)=>{_s&&ws(...e)}}),bs,Kt,B,Or,$s,vs,xs,se=F(()=>{bs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Kt=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=bs.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let u=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let h=Math.max(u,d);if(u&&d)a[s-o]=Math.max(u,d);else{if(h>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},B=class cn{static size(t){return cn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return cn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return cn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Or=class Tr{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Tr.adjustPadAndReturnShape(t[u+(a?1:2)],r[u],n[u],i[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return Tr.computeShapeHelper(t,r,u,n,i,s,a,o),u}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return Tr.computeShapeHelper(!1,t,u,n,i,s,a,o),u}static computeShapeHelper(t,r,n,i,s,a,o,u){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Tr.adjustPadAndReturnShape(r[d+2],i[d],s[d],a[d],o,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,n,i,s,a,o,u){let d=n*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+i-t;return s[a]=Math.floor(u==="SAME_LOWER"?(h+1)/2:h/2),s[o]=h-s[a],Math.floor((t+h-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/r+1)}},$s=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let u=-1;if(n?(o=r[0],u=1):(o=r[1],u=0),r[u]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Kt.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},vs=-34028234663852886e22,xs=34028234663852886e22}),Rn,Ss=F(()=>{ne(),Rn=(e,t)=>new(Mr(t))(e)}),Bn,Nn,Dn,Ts,Un,Is,Pn,Ln,qn,ks,Es,Om=F(()=>{ne(),ut(),Bn=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Nn=(e,t)=>{if(t==="int32")return e;let r=Bn.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(Mr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let u=s[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(u)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Dn=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ts=1,Un=()=>Ts++,Is=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Pn=(e,t)=>{let r=Bn.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Ln=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Pn(this.dataType,this.tensorShape)}destroy(){me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Dn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},qn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=Is.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Pn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Nn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Dn(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},ks=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Un();return this.tensorTrackersById.set(e,new qn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=Un(),a=new Ln({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new qn(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,r)){me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new Ln({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Es=(...e)=>new ks(...e)}),sr,Cs,zs,Rm=F(()=>{ne(),Et(),Ss(),Om(),ut(),sr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cs=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},zs=class{constructor(e){this.tensorManager=Es(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,On(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>Cs(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=sr.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=sr.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ve().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Rn(r,t)}}registerMLTensor(e,t,r,n){let i=sr.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,n,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=s.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(d);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":h=new Int32Array(d);break;case"uint32":h=new Uint32Array(d);break;case"int64":if(a){let p=Nn(new Uint8Array(d),"int64");h=new Int32Array(p.buffer),i.dataType="int32"}else h=new BigInt64Array(d);break;case"uint64":h=new BigUint64Array(d);break;case"int8":h=new Int8Array(d);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=sr.get(zt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!(i!=null&&i.input.dataTypes.includes(n)):!!(i!=null&&i.output.dataTypes.includes(n))}flush(){}}}),Wn=F(()=>{}),Gn,Rr,Br,Ms,As,Vn,Fn,Os,Rs,Bm=F(()=>{ut(),Wn(),Gn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Rr=[],Br=e=>Math.ceil(Number(e)/16)*16,Ms=e=>{for(let t=0;t<Rr.length;t++){let r=Rr[t];if(e<=r)return r}return Math.ceil(e/16)*16},As=1,Vn=()=>As++,Fn=async(e,t,r,n)=>{let i=Br(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let u=n();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Os=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Gn)Rr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=Br(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,n,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Br(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Vn();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ms(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:Vn(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Fn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Gn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Rs=(...e)=>new Os(...e)}),Bs,_e,Ee=F(()=>{Bs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},_e=e=>new Bs(e)}),Xt,Nr,Me,Be,te,ke,Hn,Yt,gt,ee,or,P,J,Ns,jn,Ds,Us,oe=F(()=>{ne(),se(),Xt=64,Nr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Me=(e,t=1)=>{let r=Nr(e,t);return typeof r=="string"?r:r[0]},Be=(e,t=1)=>{let r=Nr(e,t);return typeof r=="string"?r:r[1]},te=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:B.computeStrides(r)})}),t},ke=e=>e%4===0?4:e%2===0?2:1,Hn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Yt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,gt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ee=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,or=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],u=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Nr(t,i),h=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],f={indices:u,value:h,storage:p,tensor:t},m=M=>typeof M=="string"?M:`${M}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=s?"uniforms.":"",v=`${w}${e}_shape`,$=`${w}${e}_strides`,b="";for(let M=0;M<a-1;M++)b+=`
    let dim${M} = current / ${ee($,M,a)};
    let rest${M} = current % ${ee($,M,a)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;b+=`indices[${a-1}] = current;`;let I=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=M=>(y.offsetToIndices=!0,a<2?M:`o2i_${e}(${M})`),k=[];if(a>=2)for(let M=a-1;M>=0;M--)k.push(`${ee($,M,a)} * (indices[${M}])`);let z=a<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${k.join("+")};
  }`,C=M=>(y.indicesToOffset=!0,a<2?M:`i2o_${e}(${M})`),x=(...M)=>a===0?"0u":`${f.indices}(${M.map(m).join(",")})`,R=(M,L)=>a<2?`${M}`:`${ee(M,L,a)}`,N=(M,L,q)=>a<2?`${M}=${q};`:`${ee(M,L,a)}=${q};`,H={},G=(M,L)=>{y.broadcastedIndicesToOffset=!0;let q=`${L.name}broadcastedIndicesTo${e}Offset`;if(q in H)return`${q}(${M})`;let W=[];for(let re=a-1;re>=0;re--){let Te=L.indicesGet("outputIndices",re+L.rank-a);W.push(`${R($,re)} * (${Te} % ${R(v,re)})`)}return H[q]=`fn ${q}(outputIndices: ${L.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${q}(${M})`},V=(M,L)=>(()=>{if(f.storage===f.value)return`${e}[${M}]=${L};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${L}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),O=M=>(()=>{if(f.storage===f.value)return`${e}[${M}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${M}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${M}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),j=a<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${h} {
    return ${O(`i2o_${e}(indices)`)};
  }`,K=a<2?"":(()=>{let M=o.map(q=>`d${q}: u32`).join(", "),L=o.map(q=>`d${q}`).join(", ");return`
  fn get_${e}(${M}) -> ${h} {
    return get_${e}ByIndices(${x(L)});
  }`})(),Y=(...M)=>{if(M.length!==a)throw new Error(`indices length must be ${a}`);let L=M.map(m).join(",");return a===0?O("0u"):a===1?O(L[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${L})`)},ue=M=>a<2?O(M):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${M})`),D=a<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${h}) {
    ${V(`i2o_${e}(indices)`,"value")}
  }`,Q=a<2?"":(()=>{let M=o.map(q=>`d${q}: u32`).join(", "),L=o.map(q=>`d${q}`).join(", ");return`
  fn set_${e}(${M}, value: ${h}) {
    set_${e}ByIndices(${x(L)}, value);
  }`})();return{impl:()=>{let M=[],L=!1;return y.offsetToIndices&&(M.push(I),L=!0),y.indicesToOffset&&(M.push(z),L=!0),y.broadcastedIndicesToOffset&&(Object.values(H).forEach(q=>M.push(q)),L=!0),y.set&&(M.push(Q),L=!0),y.setByIndices&&(M.push(D),L=!0),y.get&&(M.push(K),L=!0),y.getByIndices&&(M.push(j),L=!0),!s&&L&&M.unshift(`const ${v} = ${f.indices}(${r.join(",")});`,`const ${$} = ${f.indices}(${B.computeStrides(r).join(",")});`),M.join(`
`)},type:f,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:G,indices:x,indicesGet:R,indicesSet:N,set:(...M)=>{if(M.length!==a+1)throw new Error(`indices length must be ${a}`);let L=M[a];if(typeof L!="string")throw new Error("value must be string");let q=M.slice(0,a).map(m).join(",");return a===0?V("0u",L):a===1?V(q[0],L):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${q}, ${L})`)},setByOffset:V,setByIndices:(M,L)=>a<2?V(M,L):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${L});`),get:Y,getByOffset:O,getByIndices:ue,usage:n,name:e,strides:$,shape:v,rank:a}},P=(e,t,r,n=1)=>or(e,t,r,"input",n),J=(e,t,r,n=1)=>or(e,t,r,"output",n),Ns=(e,t,r)=>or(e,t,r,"atomicOutput",1),jn=(e,t,r,n=1)=>or(e,t,r,"internal",n),Ds=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Xt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*n}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${n})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",n=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${n}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:n}of this.uniforms)if(n&&n>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(n/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(n/4)}>`);else{let i=n==null||n===1?r:`vec${n}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Us=(e,t)=>new Ds(e,t)}),Ps,Kn,Ls,qs,Ws,Gs,We,Vs,Fs,yt=F(()=>{ne(),se(),Ee(),oe(),Ps=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Kn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ls=(e,t)=>B.sortBasedOnPerm(e,Kn(e.length,t)),qs=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Ws=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Gs=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},We=(e,t)=>{let r=e.dataType,n=e.dims.length,i=Kn(n,t),s=Ls(e.dims,i),a=e.dims,o=s,u=n<2||Gs(i,e.dims),d;if(u)return d=y=>{let w=P("input",r,a,4),v=J("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,v)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:h,newPerm:p}=Ws(e.dims,i),f=B.areEqual(p,[2,3,1]),m=B.areEqual(p,[3,1,2]);if(h.length===2||f||m){a=f?[h[0],h[1]*h[2]]:m?[h[0]*h[1],h[2]]:h,o=[a[1],a[0]];let y=16;return d=w=>{let v=P("a",r,a.length),$=J("output",r,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:w},...te(a,o)]}},getShaderSource:d}}return d=y=>{let w=P("a",r,a.length),v=J("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,v)}

  ${qs(i,n,w,v)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...te(a,o)]}},getShaderSource:d}},Vs=(e,t)=>{Ps(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},Fs=e=>_e({perm:e.perm})}),Hs,js,Ks,Xs,Ys,Zs,Qs,Js,eo,to,je,ro,no,io,ao,so,oo,uo,lo,co,po,Nm=F(()=>{ne(),se(),oe(),Yn(),yt(),Hs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},js={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ks={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ys=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Zs=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Qs=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},Js=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},eo=(e,t)=>{let r=[];if(!Js(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},to=(e,t,r,n,i,s,a)=>{let o=r[0].dims,u=B.size(s),d=B.size(a),h=P("_A",r[0].dataType,o),p=J("output",i,s),f=64;u===1&&(f=256);let m=`
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

          var bestValue = f32(${Ks[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Hs[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${js[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Xs[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},je=(e,t,r,n)=>{let i=e.inputs.length===1?r:Xn(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,y)=>y));let a=B.normalizeAxes(s,e.inputs[0].dims.length),o=a,u=e.inputs[0],d=eo(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(We(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Ys(o.length,u.dims.length));let[h,p]=Zs(u.dims,o),f=h;i.keepDims&&(f=Qs(h,a)),e.compute(to(t,i.cacheKey,[u],n,e.inputs[0].dataType,f,p),{inputs:[u]})},ro=(e,t)=>{je(e,"ReduceMeanShared",t,"mean")},no=(e,t)=>{je(e,"ReduceL1Shared",t,"l1")},io=(e,t)=>{je(e,"ReduceL2Shared",t,"l2")},ao=(e,t)=>{je(e,"ReduceLogSumExpShared",t,"logSumExp")},so=(e,t)=>{je(e,"ReduceMaxShared",t,"max")},oo=(e,t)=>{je(e,"ReduceMinShared",t,"min")},uo=(e,t)=>{je(e,"ReduceProdShared",t,"prod")},lo=(e,t)=>{je(e,"ReduceSumShared",t,"sum")},co=(e,t)=>{je(e,"ReduceSumSquareShared",t,"sumSquare")},po=(e,t)=>{je(e,"ReduceLogSumShared",t,"logSum")}}),Ke,ho,Dr,Xn,Xe,fo,mo,go,yo,_o,wo,bo,$o,vo,xo,Ye,So,To,Io,ko,Eo,Co,zo,Mo,Ao,Oo,Yn=F(()=>{ne(),se(),Ee(),oe(),Nm(),Ke=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ho=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Dr=(e,t,r,n,i,s,a=!1,o=!1)=>{let u=[],d=r[0].dims,h=d.length,p=B.normalizeAxes(i,h),f=!o&&p.length===0;d.forEach((w,v)=>{f||p.indexOf(v)>=0?a&&u.push(1):u.push(w)});let m=u.length,y=B.size(u);return{name:e,shaderCache:t,getShaderSource:w=>{let v=[],$=P("_A",r[0].dataType,h),b=J("output",s,m),I=n($,b,p),T=I[2];for(let k=0,z=0;k<h;k++)f||p.indexOf(k)>=0?(a&&z++,T=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
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
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...te(d,u)]})}},Xn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),_e({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Xe=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:Xn(i,r);e.compute(Dr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?ho:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},fo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},mo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},go=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},yo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},_o=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},wo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},bo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},$o=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},vo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},xo=(e,t)=>{Ke(e.inputs),Xe(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ye=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},So=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wo(e,t):ro(e,t)},To=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mo(e,t):no(e,t)},Io=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?go(e,t):io(e,t)},ko=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):ao(e,t)},Eo=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_o(e,t):so(e,t)},Co=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bo(e,t):oo(e,t)},zo=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$o(e,t):uo(e,t)},Mo=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vo(e,t):lo(e,t)},Ao=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xo(e,t):co(e,t)},Oo=(e,t)=>{Ye(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fo(e,t):po(e,t)}}),Zn,Ro,Bo,Qn,Dm=F(()=>{ne(),Ee(),Yn(),Zn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ro=(e,t)=>{Zn(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Dr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Bo=(e,t)=>{Zn(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Dr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Qn=e=>_e(e)}),No,Ur,Do,Uo,Po,ur,Lo,qo,Jn=F(()=>{ne(),se(),Wn(),oe(),No=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],h=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,f=p,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let y=d;if(p!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(a){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=a.dims[3])}let v=y+w,$=-1,b=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:v,maxSequenceLength:$,inputHiddenSize:h,hiddenSize:p,vHiddenSize:m,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ur=(e,t,r)=>t&&e?`
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
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Do=(e,t,r,n,i,s,a,o)=>{let u=ke(a?1:s),d=64,h=s/u;h<d&&(d=32);let p=Math.ceil(s/u/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:h},{type:12,data:p}],m=Me(e.dataType,u),y=Be(1,u),w=["type"];a&&w.push("type"),o&&w.push("type");let v=$=>{let b=J("x",e.dataType,e.dims,u),I=[b],T=a?P("seq_lens",a.dataType,a.dims):void 0;T&&I.push(T);let k=o?P("total_sequence_length_input",o.dataType,o.dims):void 0;k&&I.push(k);let z=Be(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(C).declareVariables(...I)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ur(T,k,!1)}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:w},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:f})}},Uo=(e,t,r,n,i,s,a,o,u)=>{let d=a+s.kvSequenceLength,h=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&n,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=p?[s.batchSize,f,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,w=s.scale===0?1/Math.sqrt(s.headSize):s.scale,v=ke(s.headSize),$=s.headSize/v,b=12,I={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},T=[{type:12,data:s.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:w},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],k=p&&n&&B.size(n.dims)>0,z=["type","type"];k&&z.push("type"),i&&z.push("type"),o&&z.push("type"),u&&z.push("type");let C=[{dims:h,dataType:t.dataType,gpuDataType:0}];p&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let x=R=>{let N=P("q",t.dataType,t.dims,v),H=P("key",r.dataType,r.dims,v),G=[N,H];if(k){let D=P("past_key",n.dataType,n.dims,v);G.push(D)}i&&G.push(P("attention_bias",i.dataType,i.dims));let V=o?P("seq_lens",o.dataType,o.dims):void 0;V&&G.push(V);let O=u?P("total_sequence_length_input",u.dataType,u.dims):void 0;O&&G.push(O);let j=J("output",t.dataType,h),K=[j];p&&K.push(J("present_key",t.dataType,m,v));let Y=Be(1,v),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${N.type.storage}, ${b*b}>;
  ${R.registerUniforms(ue).declareVariables(...G,...K)}
  ${R.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ur(V,O,!0)}
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
        output[outputIdx] = ${j.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${i!==void 0};${n!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:C,dispatchGroup:I,programUniforms:T}),getShaderSource:x}},Po=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let u=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,h=i.vHiddenSize*d,p=e>1&&n,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=p?[i.batchSize,f,u,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,h],w=12,v={x:Math.ceil(i.vHeadSize/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],b=p&&n&&B.size(n.dims)>0,I=["type","type"];b&&I.push("type"),a&&I.push("type"),o&&I.push("type");let T=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&T.push({dims:m,dataType:t.dataType,gpuDataType:0});let k=z=>{let C=P("probs",t.dataType,t.dims),x=P("v",r.dataType,r.dims),R=[C,x];b&&R.push(P("past_value",n.dataType,n.dims));let N=a?P("seq_lens",a.dataType,a.dims):void 0;a&&R.push(N);let H=o?P("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(H);let G=[J("output",t.dataType,y)];p&&G.push(J("present_value",t.dataType,m));let V=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${z.registerUniforms(V).declareVariables(...R,...G)}
  ${z.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ur(N,H,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:v,programUniforms:$}),getShaderSource:k}},ur=(e,t,r,n,i,s,a,o,u,d,h=void 0,p=void 0)=>{let f=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),m=f>1?a:void 0,y=f>1?o:void 0,w=f>1?d.pastSequenceLength:0,v=w+d.kvSequenceLength,$=u&&B.size(u.dims)>0?u:void 0,b=[t,r];m&&B.size(m.dims)>0&&b.push(m),$&&b.push($),h&&b.push(h),p&&b.push(p);let I=e.compute(Uo(f,t,r,m,$,d,w,h,p),{inputs:b,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Do(I,d.batchSize,d.numHeads,w,d.sequenceLength,v,h,p),{inputs:h&&p?[I,h,p]:[I],outputs:[]});let T=[I,n];y&&B.size(y.dims)>0&&T.push(y),h&&T.push(h),p&&T.push(p),e.compute(Po(f,I,n,y,d,w,h,p),{inputs:T,outputs:f>1?[0,2]:[0]})},Lo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=p=>{let f=J("output_q",u[0].dataType,r),m=J("output_k",u[0].dataType,r),y=J("output_v",u[0].dataType,r),w=P("input",u[0].dataType,u[0].dims),v=P("weight",u[1].dataType,u[1].dims),$=P("bias",u[2].dataType,u[2].dims),b=w.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:h},{inputs:u,outputs:[-1,-1,-1]})},qo=(e,t)=>{let r=No(e.inputs,t),[n,i,s]=Lo(e,r);return ur(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Wo,Go,Vo,Fo,Um=F(()=>{Ge(),ne(),se(),Ee(),oe(),Wo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,u)=>{if(o!==n[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Go=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?ke(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,u=B.size(s)/a,d=n,h=d?s.length:s,p=P("x",e[0].dataType,e[0].dims,a),f=P("scale",e[1].dataType,e[1].dims,o),m=P("bias",e[2].dataType,e[2].dims,o),y=P("inputMean",e[3].dataType,e[3].dims,o),w=P("inputVar",e[4].dataType,e[4].dims,o),v=J("y",e[0].dataType,h,a),$=()=>{let I="";if(n)I=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")I=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let T=1;T<f.rank;T++)I+=`cIndices[${T}] = outputIndices[${T}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},b=I=>`
  const epsilon = ${r};
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
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...te(s)]:[{type:12,data:u}]})}},Vo=e=>_e(e),Fo=(e,t)=>{let{inputs:r,outputCount:n}=e,i=Vo({...t,outputCount:n});if($e.webgpu.validateInputContent&&Wo(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Go(r,i))}}),Ho,jo,Ko,Pm=F(()=>{se(),oe(),Ho=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},jo=e=>{let t=e[0].dims,r=e[0].dims[2],n=B.size(t)/4,i=e[0].dataType,s=P("input",i,t,4),a=P("bias",i,[r],4),o=P("residual",i,t,4),u=J("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Ko=e=>{Ho(e.inputs),e.compute(jo(e.inputs))}}),Xo,ye,Yo,Zo,Qo,Jo,eu,tu,ru,nu,iu,au,su,ou,uu,lu,lr,du,Pr,cu,pu,hu,fu,mu,gu,yu,_u,wu,bu,$u,vu,xu,Su,Tu,Iu,ei,ku,ti,ri,Eu,Cu,zu,Mu,Au,Ou,ni=F(()=>{ne(),se(),Ee(),oe(),Xo=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=P("inputData",r,[o],4),h=J("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",u)}
  }`},ye=(e,t,r,n,i,s=e.dataType,a,o)=>{let u=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return a&&u.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Xo(d,B.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:u})}},Yo=e=>{e.compute(ye(e.inputs[0],"Abs","abs"))},Zo=e=>{e.compute(ye(e.inputs[0],"Acos","acos"))},Qo=e=>{e.compute(ye(e.inputs[0],"Acosh","acosh"))},Jo=e=>{e.compute(ye(e.inputs[0],"Asin","asin"))},eu=e=>{e.compute(ye(e.inputs[0],"Asinh","asinh"))},tu=e=>{e.compute(ye(e.inputs[0],"Atan","atan"))},ru=e=>{e.compute(ye(e.inputs[0],"Atanh","atanh"))},nu=e=>_e(e),iu=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ye(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},au=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return _e({min:t,max:r})},su=(e,t)=>{let r=t||au(e.inputs),n=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},ou=e=>{e.compute(ye(e.inputs[0],"Ceil","ceil"))},uu=e=>{e.compute(ye(e.inputs[0],"Cos","cos"))},lu=e=>{e.compute(ye(e.inputs[0],"Cosh","cosh"))},lr=e=>_e(e),du=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Pr=(e="f32")=>`
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
}`,cu=e=>{let t=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Pr(t)))},pu=e=>{e.compute(ye(e.inputs[0],"Exp","exp"))},hu=e=>{e.compute(ye(e.inputs[0],"Floor","floor"))},fu=e=>{let t=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Pr(t)))},mu=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},gu=e=>{e.compute(ye(e.inputs[0],"Not",t=>`!${t}`))},yu=e=>{e.compute(ye(e.inputs[0],"Neg",t=>`-${t}`))},_u=e=>{e.compute(ye(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},wu=e=>{let t=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},bu=e=>{e.compute(ye(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},$u=e=>_e(e),vu=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},xu=e=>{e.compute(ye(e.inputs[0],"Sin","sin"))},Su=e=>{e.compute(ye(e.inputs[0],"Sinh","sinh"))},Tu=e=>{e.compute(ye(e.inputs[0],"Sqrt","sqrt"))},Iu=e=>{e.compute(ye(e.inputs[0],"Tan","tan"))},ei=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ku=e=>{e.compute(ye(e.inputs[0],"Tanh",ei))},ti=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ei("v")};
}
`,ri=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Eu=e=>{let t=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"FastGelu",ri,ti(t),void 0,e.inputs[0].dataType))},Cu=(e,t)=>{let r=Be(e.inputs[0].dataType);return e.compute(ye(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},zu=e=>{e.compute(ye(e.inputs[0],"Log","log"))},Mu=(e,t)=>`
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
`,Au=e=>`quick_gelu_impl(${e})`,Ou=(e,t)=>{let r=Be(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"QuickGelu",Au,Mu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ru,Bu,Nu,Lm=F(()=>{se(),oe(),ni(),Ru=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Bu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=P("input",e[0].dataType,e[0].dims,4),n=P("bias",e[0].dataType,[e[0].dims[2]],4),i=J("output",e[0].dataType,t,4),s=B.size(t)/4,a=Me(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Pr(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Nu=e=>{Ru(e.inputs),e.compute(Bu(e.inputs))}}),Du,Uu,Ze,Pu,Lu,qu,Wu,Gu,Vu,Fu,Hu,ju,Ku,qm=F(()=>{ne(),se(),oe(),Du=(e,t,r,n,i,s,a,o,u,d,h,p)=>{let f,m;typeof o=="string"?f=m=(b,I)=>`${o}((${b}),(${I}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let y=J("outputData",h,n.length,4),w=P("aData",u,t.length,4),v=P("bData",d,r.length,4),$;if(i)if(s){let b=B.size(t)===1,I=B.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,k=r.length>0&&r[r.length-1]%4===0;b||I?$=y.setByOffset("global_idx",m(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),I?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):$=`
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
      }`},Uu=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),u=n.dims.map(Number),d=!B.areEqual(o,u),h=o,p=B.size(o),f=!1,m=!1,y=[d];if(d){let w=Kt.calcShape(o,u,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");h=w.slice(),p=B.size(h);let v=B.size(o)===1,$=B.size(u)===1,b=o.length>0&&o[o.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;y.push(v),y.push($),y.push(b),y.push(I);let T=1;for(let k=1;k<h.length;k++){let z=o[o.length-k],C=u[u.length-k];if(z===C)T*=z;else break}T%4===0?(m=!0,f=!0):(v||$||b||I)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Du(w,o,u,h,f,d,m,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:h,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(h)/4)},...te(o,u,h)]})}},Ze=(e,t,r,n,i,s)=>{e.compute(Uu(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},Pu=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Lu=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},qu=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Wu=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},Gu=e=>{let t=P("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},Vu=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},Fu=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Hu=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ju=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Ku=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Xu,Yu,Zu,Qu,Ju,el,Wm=F(()=>{ne(),se(),Ee(),oe(),Xu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((u,d)=>{if(d!==t&&u!==n.dims[d])throw new Error("non concat dimensions must match")})}})},Yu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Zu=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Qu=(e,t,r,n)=>{let i=B.size(r),s=new Array(e.length),a=new Array(e.length),o=0,u=[],d=[],h=[{type:12,data:i}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],s[w]=o,d.push(e[w].dims.length),a[w]=P(`input${w}`,n,d[w]),u.push("rank"),h.push({type:12,data:s[w]});for(let w=0;w<e.length;++w)h.push(...te(e[w].dims));h.push(...te(r));let p=J("output",n,r.length),f=p.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)w.registerUniform(`sizeInConcatAxis${v}`,"u32");return w.declareVariables(...a,p)})()}

  ${Yu(s.length,m)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Zu(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:y}},Ju=(e,t)=>{let r=e.inputs,n=r[0].dims,i=B.normalizeAxis(t.axis,n.length);Xu(r,i);let s=n.slice();s[i]=r.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let a=r.filter(o=>B.size(o.dims)>0);e.compute(Qu(a,i,s,r[0].dataType),{inputs:a})},el=e=>_e({axis:e.axis})}),At,Ot,Rt,ii,Bt=F(()=>{ne(),se(),At=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ot=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Rt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ii=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[vs,xs];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Oe,tl,ai=F(()=>{Oe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},tl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),rl,Gm=F(()=>{rl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),dr,si,oi=F(()=>{ne(),se(),oe(),Bt(),dr=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${ee(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ee(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},si=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a[a.length-2],d=o[o.length-1],h=a[a.length-1],p=ke(d),f=ke(h),m=ke(u),y=B.size(r)/p/m,w=e.length>2,v=n?n.slice(0,-2):r.slice(0,-2),$=[B.size(v),u,d],b=[{type:12,data:y},{type:12,data:u},{type:12,data:d},{type:12,data:h}];Ot(t,b),b.push(...te(v,a,o)),w&&b.push(...te(e[2].dims)),b.push(...te($));let I=T=>{let k=jn("batch_dims",e[0].dataType,v.length),z=P("a",e[0].dataType,a.length,f),C=P("b",e[1].dataType,o.length,p),x=J("output",e[0].dataType,$.length,p),R=Me(x.type.tensor),N=At(t,x.type.value,R),H=[z,C],G="";if(w){let j=i?p:1;H.push(P("bias",e[2].dataType,e[2].dims.length,j)),G=`${i?`value += bias[col / ${j}];`:`value += ${x.type.value}(bias[row + i]);`}`}let V=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Rt(t,V);let O=()=>{let j=`var a_data: ${z.type.value};`;for(let K=0;K<f;K++)j+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${p}];`;for(let K=0;K<m;K++){j+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${f}];`;for(let Y=0;Y<f;Y++)j+=`
            values[${K}] = fma(${C.type.value}(a_data${f===1?"":`[${Y}]`}), b_data${Y}, values[${K}]);
`}return j};return`
  ${T.registerUniforms(V).registerInternalVariables(k).declareVariables(...H,x)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${dr("a_indices",z,z.rank-2,k.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${dr("b_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${O()}
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${f};${m};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:I}}}),nl,il,ui,li,al,di,sl,Lr,ci=F(()=>{ne(),se(),oe(),Bt(),oi(),ai(),nl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,il=(e,t)=>e?`
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
        }`,ui=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],h=i?u:s,p=i?s:u,f=h/t[0],m=s/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${h/f}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

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
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${nl(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${il(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},li=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,al=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",di=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,u=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],p=i?d:s,f=i?s:d;if(!(f%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],y=p/t[0],w=s/t[1],v=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${li(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
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
      ${li(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${al(i)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${v}
  }
`},sl=(e,t,r,n,i=!1)=>{let[s,a,o,u]=n,d=Me(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Oe(e,d)} {
      var value = ${Oe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${dr("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Oe(e,d)} {
      var value = ${Oe(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${dr("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Oe(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Oe(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Lr=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,u=a.slice(0,-2),d=o.slice(0,-2),h=n?n.slice(0,-2):r.slice(0,-2),p=B.size(h),f=a[a.length-2],m=a[a.length-1],y=o[o.length-1],w=m%4===0&&y%4===0,v=f<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(y/$[0]/v[0]),Math.ceil(f/$[1]/v[1]),Math.ceil(p/$[2]/v[2])],I=w?4:1,T=[...u,f,m/I],k=T.length,z=[...d,m,y/I],C=z.length,x=[p,f,y/I],R=[{type:6,data:f},{type:6,data:y},{type:6,data:m}];Ot(t,R),R.push(...te(h,T,z));let N=["rank","rank"],H=e.length>2;H&&(R.push(...te(e[2].dims)),N.push("rank")),R.push(...te(x));let G=V=>{let O=h.length,j=jn("batchDims",e[0].dataType,O,1),K=Me(e[0].dataType),Y=P("a",e[0].dataType,k,I),ue=P("b",e[1].dataType,C,I),D=J("result",e[0].dataType,x.length,I),Q=[Y,ue];if(H){let re=i?I:1;Q.push(P("bias",e[2].dataType,e[2].dims.length,re))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Rt(t,M);let L=Me(D.type.tensor),q=At(t,D.type.value,L),W=sl(I,H,q,[j,Y,ue,D],i);return`
  ${V.registerUniforms(M).registerInternalVariables(j).declareVariables(...Q,D)}
  ${W}
  ${w?ui(v,$,K,j):di(v,$,K,j)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${t.activation};${w};${i}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:R}),getShaderSource:G}}}),ol,ul,Vm=F(()=>{ne(),ut(),oe(),Bt(),ai(),Gm(),ci(),ol=(e,t,r,n,i=!1,s,a=4,o=4,u=4,d="f32")=>{let h=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
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
    var resData = ${Oe(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(a)}
    }
    return resData;`,I=e?t&&n?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Oe(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Oe(a,d)}(0.0);`,T=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Oe(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Oe(o,d)}(0.0);`,k=Oe(u,d),z=Oe(e?a:o,d),C=Oe(e?o:a,d),x=At(s,k,d);return`
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
      ${tl(i)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ul=(e,t,r,n,i,s,a,o,u)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],p=r[0],f=d?r[2]:r[3],m=d?r[1]:r[2],y=d?r[3]:r[1],w=d&&(h%4===0||h%3===0)&&y%4===0,v=d?y:f*m,$=d?f*m:y,b=[8,8,1],I=n<=8?[4,1,1]:[4,4,1],T=[Math.ceil(v/b[0]/I[0]),Math.ceil($/b[1]/I[1]),Math.ceil(p/b[2]/I[2])];me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let k=w?d&&h%4!==0?3:4:1,z=b[1]*I[1],C=b[0]*I[0],x=Math.max(b[0]*k,b[1]),R=n%z===0,N=i%C===0,H=s%x===0,G=w?[k,4,4]:[1,1,1],V=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ot(t,V),V.push(...te(e[0].dims,e[1].dims));let O=["rank","rank"];a&&(V.push(...te(e[2].dims)),O.push("rank")),V.push(...te(r));let j=K=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Rt(t,Y);let ue=w?4:1,D=Me(e[0].dataType),Q=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${D}>`:D}) {
        result[flatIndex] = ${w?`vec4<${D}>`:D}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${D}>`:D}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,M=P("x",e[0].dataType,e[0].dims.length,k===3?1:k),L=P("w",e[1].dataType,e[1].dims.length,ue),q=[M,L],W=J("result",e[0].dataType,r.length,ue);if(a){let re=P("bias",e[2].dataType,e[2].dims.length,ue);q.push(re),Q+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${D}>`:D} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${rl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(Y).declareVariables(...q,W)}
        ${Q}
        ${ol(d,R,N,H,a,t,G[0],G[1],G[2],D)}
        ${w?ui(I,b,D,void 0,!d,x):di(I,b,D,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${w};${R};${N};${H};${z};${C};${x}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:V}),getShaderSource:j}}}),ll,pi,cr,dl,hi,cl,pl,hl,Fm=F(()=>{ne(),ut(),se(),oe(),Bt(),ai(),ll=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},pi=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),dl=(e,t,r,n=1)=>{let i=cr(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},hi=(e,t,r,n,i)=>{i==null&&(i=dl(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},cl=(e,t,r,n,i,s,a,o,u,d)=>{let h,p,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=hi([t,r,n,1],[o,u,d],1,[i,s,a],e);p=y[0],f=y[1],m=y[2]}else if(Array.isArray(e)){if(!e.every((w,v,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=hi([t,r,n,1],[o,u,d],1,[i,s,a],e[0]);p=y[0],f=y[1],m=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),f=Math.ceil(r/s),m=Math.ceil(n/a);let y=(p-1)*i+o-t,w=(f-1)*s+u-r,v=(m-1)*a+d-n,$=Math.floor(y/2),b=y-$,I=Math.floor(w/2),T=w-I,k=Math.floor(v/2),z=v-k;h={top:I,bottom:T,left:k,right:z,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:p,outHeight:f,outWidth:m}},pl=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,u,d,h,p;if(a==="channelsLast")[o,u,d,h,p]=e;else if(a==="channelsFirst")[o,p,u,d,h]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,,m,y,w]=t,[v,$,b]=pi(r),[I,T,k]=pi(n),z=cr(m,I),C=cr(y,T),x=cr(w,k),{padInfo:R,outDepth:N,outHeight:H,outWidth:G}=cl(i,u,d,h,v,$,b,z,C,x),V=s?f*p:f,O=[0,0,0,0,0];return a==="channelsFirst"?O=[o,V,N,H,G]:a==="channelsLast"&&(O=[o,N,H,G,V]),{batchSize:o,dataFormat:a,inDepth:u,inHeight:d,inWidth:h,inChannels:p,outDepth:N,outHeight:H,outWidth:G,outChannels:V,padInfo:R,strideDepth:v,strideHeight:$,strideWidth:b,filterDepth:m,filterHeight:y,filterWidth:w,effectiveFilterDepth:z,effectiveFilterHeight:C,effectiveFilterWidth:x,dilationDepth:I,dilationHeight:T,dilationWidth:k,inShape:e,outShape:O,filterShape:t}},hl=(e,t,r,n,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((v,$)=>$)},d=[Math.ceil(ll(u.x.map(v=>r[v]))/o[0]),1,1];me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let h=1,p=B.size(r),f=[{type:12,data:p},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ot(t,f),f.push(...te(e[0].dims,e[1].dims));let m=["rank","rank"],y=e.length===3;y&&(f.push(...te(e[2].dims)),m.push("rank")),f.push(...te(r));let w=v=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Rt(t,$);let b=1,I=Me(e[0].dataType),T=P("x",e[0].dataType,e[0].dims.length,h),k=P("W",e[1].dataType,e[1].dims.length,b),z=[T,k],C=J("result",e[0].dataType,r.length,b),x="";if(y){let H=P("bias",e[2].dataType,e[2].dims.length,b);z.push(H),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${a?ee("coords",4,5):ee("coords",1,5)}];
        }`}let R=Oe(h,I),N=At(t,R,I);return`
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
              let batch = ${ee("coords",0,T.rank)};
              let d2 = ${a?ee("coords",T.rank-1,T.rank):ee("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${a?ee("coords",1,T.rank):ee("coords",2,T.rank)},
              ${a?ee("coords",2,T.rank):ee("coords",3,T.rank)},
              ${a?ee("coords",3,T.rank):ee("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?ee("uniforms.x_shape",1,T.rank):ee("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${a?ee("uniforms.x_shape",2,T.rank):ee("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${a?ee("uniforms.x_shape",3,T.rank):ee("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${a?ee("uniforms.x_shape",4,T.rank):ee("uniforms.x_shape",1,T.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${h};${y}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:w}}}),fl,ml,Hm=F(()=>{ne(),se(),oe(),Bt(),fl=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],h=d/t.group,p=u&&h>=4?ke(d):1,f=B.size(r)/p,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Ot(t,m),m.push(...te(a,[o[0],o[1],o[2],o[3]/p]));let y=i?["rank","rank","rank"]:["rank","rank"];m.push(...te([r[0],r[1],r[2],r[3]/p]));let w=v=>{let $=J("output",e[0].dataType,r.length,p),b=Me($.type.tensor),I=At(t,$.type.value,b),T=P("x",e[0].dataType,a.length),k=P("w",e[1].dataType,o.length,p),z=[T,k];i&&z.push(P("b",e[2].dataType,e[2].dims,p));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Rt(t,C);let x=u?`
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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:w}},ml=(e,t,r,n)=>{let i=e.length>2,s=ke(r[3]),a=ke(r[2]),o=B.size(r)/s/a,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ot(t,p),p.push(...te(u,d,h));let f=(a-1)*t.strides[1]+d[1],m=y=>{let w=J("output",e[0].dataType,h.length,s),v=Me(w.type.tensor),$=At(t,w.type.value,v),b=P("x",e[0].dataType,u.length,s),I=P("w",e[1].dataType,d.length,s),T=[b,I];i&&T.push(P("b",e[2].dataType,e[2].dims,s));let k=i?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Rt(t,z),`
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:m}}}),gl,qr,yl,Wr,fi,mi,_l,wl,gi,jm=F(()=>{se(),Vm(),Fm(),ci(),Hm(),Bt(),oi(),yt(),gl=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,d=t[0],h=t.slice(2).map((f,m)=>f+(f-1)*(r[m]-1)),p=o.map((f,m)=>f+n[m]+n[m+u]).map((f,m)=>Math.floor((f-h[m]+i[m])/i[m]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},qr=[2,3,1,0],yl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Wr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Or.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},fi=e=>{let t=ii(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},mi=(e,t,r,n)=>{let i=r.format==="NHWC",s=gl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let z=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(We(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),z.push(C)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ml(z,r,s,n),{inputs:z}):e.compute(fl(z,r,s,n),{inputs:z});return}let a=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],h=t[1].dims[2],p=t[1].dims[3],f=s[i?1:2],m=s[i?2:3],y=s[i?3:1],w=i&&h===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if(w||h===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=s[0],C,x,R,N=[];if(i){let V=e.kernelCustomData.wT??e.compute(We(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),w){let O=o*u*d;C=t[0].reshape([1,z,O]),x=V.reshape([1,O,y]),R=[1,z,y]}else C=t[0].reshape([z,o*u,d]),x=V.reshape([1,d,y]),R=[z,f*m,y];N.push(C),N.push(x)}else C=t[0].reshape([z,d,o*u]),x=t[1].reshape([1,y,d]),R=[z,y,f*m],N.push(x),N.push(C);a&&N.push(t[2]);let H=R[2],G=N[0].dims[N[0].dims.length-1];H<8&&G<8?e.compute(si(N,r,s,R,i,n),{inputs:N}):e.compute(Lr(N,r,s,R,i,n),{inputs:N});return}let v=!0,$=e.kernelCustomData.wT??e.compute(We(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];a&&b.push(t[2]);let I=i?f*m:y,T=i?y:f*m,k=h*p*d;e.compute(ul(b,r,s,I,T,k,a,v,n),{inputs:b})},_l=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Wr({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);mi(e,n,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},wl=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Wr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=pl(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(hl(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},gi=(e,t)=>{if(yl(e.inputs,t),e.inputs[0].dims.length===3)_l(e,t);else if(e.inputs[0].dims.length===5)wl(e,e.inputs,t);else{let r=Wr(t,e.inputs);mi(e,e.inputs,r)}}}),bl,Km=F(()=>{ne(),ut(),se(),oe(),bl=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,u=o[2]/a,d=o[3],h=s?ke(u):1,p=s&&d===1&&u>=4,f=p?Math.floor(u/4)*4:Math.floor(u/h)*h,m=u-f,y=s?ke(d):1,w=s?d===1?h:y:1,v=B.size(i)/y,$=[Math.ceil(v/64),1,1];me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let b=["rank","rank"],I=[t.strides[0],t.strides[1]],T=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],k=[t.dilations[0],t.dilations[1]],z=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],C=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:v},{type:12,data:I},{type:12,data:T},{type:12,data:k},{type:12,data:z},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:d},...te(e[0].dims,e[1].dims)];n&&(x.push(...te(e[2].dims)),b.push("rank")),x.push(...te(i));let R=N=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Me(e[0].dataType),V=s?1:2,O=s?2:3,j=s?3:1,K=P("W",e[1].dataType,e[1].dims.length,w),Y=P("Dy",e[0].dataType,e[0].dims.length,h),ue=[Y,K];n&&ue.push(P("bias",e[2].dataType,[i[j]].length,y));let D=J("result",e[0].dataType,i.length,y),Q=()=>{let q="";if(p)h===4?q+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?q+=`
          dotProd = dotProd + dot(vec4<${G}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(q+=`
          dotProd = dotProd + dot(vec4<${G}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${G}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(q+=`
                  let xValue = ${s?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,h===1)q+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let W=0;W<h;W++)q+=`
            let wValue${W} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${W}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${W}] * wValue${W};`;return q},M=()=>{if(m===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let q="";if(h===1){q+="dotProd = dotProd";for(let W=0;W<m;W++)q+=`
            + ${Y.getByOffset(`x_offset + ${W}`)} * ${K.getByOffset(`w_offset + ${W}`)}`;q+=";"}else if(h===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);q+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return q},L=`
            let outputIndices = ${D.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${D.indicesGet("outputIndices",0)};
            let d1 = ${D.indicesGet("outputIndices",j)};
            let r = ${D.indicesGet("outputIndices",V)};
            let c = ${D.indicesGet("outputIndices",O)};
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
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:h}) {
                  ${Q()}
                  inputChannel = inputChannel + ${p?4:h};
                }
                ${M()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${D.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(H).declareVariables(...ue,D)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${w}${y}${p}${m}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:R}}}),$l,vl,xl,yi,Sl,Tl,_i,Il,kl,Xm=F(()=>{Km(),Bt(),yt(),$l=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,vl=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},xl=(e,t,r,n,i,s,a,o,u,d)=>{let h=e.length-2,p=d.length===0;u.length<h&&u.push(...Array(h-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let y=0,w=e.length-h-(o?1:0);y<h;++y,++w){let v=e[w],$=p?v*a[y]:d[y],b=$l(v,a[y],s[y],t[w],r[y],$);vl(b,n,s,y,y+h),p&&d.push(a[y]*(v-1)+u[y]+(t[w]-1)*r[y]+1-s[y]-s[y+h])}d.splice(0,0,f),d.splice(o?3:1,0,m)},yi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,f)=>p*f,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}xl(o,r,u,e.autoPad,e.group,i,d,n,a,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:u,strides:d}),h},Sl=e=>{let t=ii(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),h=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:h,outputShape:p,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Tl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},_i=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(bl(s,r,n),{inputs:s})},Il=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=yi({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:u},n);_i(e,n,d,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},kl=(e,t)=>{if(Tl(e.inputs,t),e.inputs[0].dims.length===3)Il(e,t);else{let r=yi(t,e.inputs);_i(e,e.inputs,r)}}}),El,Cl,zl,Ym=F(()=>{ne(),se(),Ee(),oe(),El=(e,t,r,n)=>{let i=B.size(t),s=t.length,a=P("input",e,s),o=J("output",e,s),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=B.normalizeAxis(u,s),h=p=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,m=ee("uniforms.input_shape","uniforms.axis",s),y=n.reverse?f+(n.exclusive?" + 1":""):"0",w=n.reverse?m:f+(n.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...te(t,t)]}),getShaderSource:h}},Cl=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(El(n,r,i,t),{inputs:[0]})},zl=e=>{let t=e.exclusive===1,r=e.reverse===1;return _e({exclusive:t,reverse:r})}}),Ml,Al,Ol,Rl,Bl,Zm=F(()=>{ne(),se(),Ee(),oe(),Ml=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Al=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Ol=(e,t)=>{let r,n,i,s,a,o,u=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";u?([r,n,i,s]=e.dims,a=h?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=h?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),f=p.dims.length,m=e.dataType,y=P("a",m,f),w=J("output",m,f),v=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Al(o,f,y,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=u?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],I=B.size(b),T=p.dims,k=B.sortBasedOnPerm(T,o);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...te(T,k)]}},getShaderSource:v}},Rl=(e,t)=>{Ml(e.inputs),e.compute(Ol(e.inputs[0],t))},Bl=e=>_e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Gr,pr,wi,Nl,Dl,Ul,Pl,bi,Ll,ql,Wl,Qm=F(()=>{ne(),se(),Ee(),oe(),Gr="[a-zA-Z]|\\.\\.\\.",pr="("+Gr+")+",wi="^"+pr+"$",Nl="("+pr+",)*"+pr,Dl="^"+Nl+"$",Ul=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Pl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Dl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(wi)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,o,a);this.lhs.push(u)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!n.match(RegExp(pr)))throw new Error("Invalid RHS");(i=n.match(RegExp(Gr,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(wi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Gr,"g")),d=new Ul(n);return u==null||u.forEach((h,p)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<a.length;m++){let y=String.fromCharCode(48+m);d.addSymbol(y,p+m),this.addSymbol(y,r[o++],n)}}else d.addSymbol(h,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[o++],n)}),d}},bi=e=>e+"_max",Ll=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,h)=>P(`input${h}`,t,d)),s=B.size(n),a=J("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let h=[],p="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",y=[],w=[],v=[],$=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,k)=>{var z;if(r.rhs.symbolToIndices.has(k)){let C=(z=r.rhs.symbolToIndices.get(k))==null?void 0:z[0];C!==void 0&&r.lhs.forEach((x,R)=>{if(T.inputIndices.includes(R)){let N=x.symbolToIndices.get(k);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(H=>{h.push(`${i[R].indicesSet(`input${R}Indices`,H,a.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,x)=>{if(T.inputIndices.includes(x)){let R=C.symbolToIndices.get(k);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(N=>{y.push(`${i[x].indicesSet(`input${x}Indices`,N,`${k}`)}`)}),$.push(`prod *= ${i[x].getByIndices(`input${x}Indices`)};`)}}),w.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${bi(k)}; ${k}++) {`),v.push("}")});let I=b?[...h,`let sum = ${i.map((T,k)=>T.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...h,f,...w,...y,p,...$,m,...v];return`
            ${d.registerUniforms(o.map(T=>({name:`${bi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((T,k)=>`var input${k}Indices: ${i[k].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>{var f;return{type:12,data:((f=r.symbolToInfo.get(p))==null?void 0:f.dimValue)||0}});d.push({type:12,data:s});let h=e.map((p,f)=>[...te(p)]).reduce((p,f)=>p.concat(f),d);return h.push(...te(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:u}},ql=(e,t)=>{let r=new Pl(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Ll(i,e.inputs[0].dataType,r,n))},Wl=e=>{let t=e.equation.replace(/\s+/g,"");return _e({equation:t})}}),Gl,$i,Vl,Fl,Hl,Jm=F(()=>{ne(),se(),oe(),Gl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},$i=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},Vl=(e,t)=>e.length>t.length?$i(e,t):$i(t,e),Fl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=Vl(t,r),i=e[0].dataType,s=i===9||B.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,u=Math.ceil(B.size(n)/o),d=p=>{let f=P("input",i,t.length,a),m=J("output",i,n.length,o),y;if(i===9){let w=(v,$,b="")=>`
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
    ${y}`},h=[{type:12,data:u},...te(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},Hl=e=>{Gl(e.inputs),e.compute(Fl(e.inputs),{inputs:[0]})}}),jl,Kl,eg=F(()=>{ne(),se(),oe(),ni(),jl=e=>{let t=e[0].dataType,r=B.size(e[0].dims),n=B.size(e[1].dims),i=n%4===0,s=a=>{let o=P("x",t,[1],4),u=P("bias",t,[1],4),d=J("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(h).declareVariables(o,u,d)}

    ${ti(Be(t))}

    ${a.mainStart(Xt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ri("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/Xt/4)}})}},Kl=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?Eu(e):e.compute(jl(e.inputs))}}),Xl,Yl,Zl,Ql,tg=F(()=>{ne(),se(),Ee(),oe(),Xl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Yl=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=B.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],u=e[0].dataType===9?4:1,d=Math.ceil(B.size(a)/u),h=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...te(e[0].dims,e[1].dims,a)],p=f=>{let m=P("data",e[0].dataType,e[0].dims.length,u),y=P("inputIndices",e[1].dataType,e[1].dims.length),w=J("output",e[0].dataType,a.length,u),v=b=>{let I=n.length,T=`var indicesIndices${b}  = ${y.type.indices}(0);`;for(let k=0;k<I;k++)T+=`${I>1?`indicesIndices${b}[${k}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${k}]`:`outputIndices${b}`};`;T+=`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:p}},Zl=e=>_e({axis:e.axis}),Ql=(e,t)=>{let r=e.inputs;Xl(r),e.compute(Yl(e.inputs,t))}}),Jl,ed,td,rg=F(()=>{ne(),se(),oe(),Jl=(e,t,r,n,i,s,a,o,u)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:u}],h=[s];d.push(...te(t.dims,h));let p=f=>{let m=P("indices_data",t.dataType,t.dims.length),y=J("input_slice_offsets_data",12,1,1),w=[m,y],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},ed=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=B.sizeToDimension(s,s.length-1),u=B.sizeFromDimension(n,t.batchDims+a),d=B.sizeToDimension(n,t.batchDims),h=B.sizeFromDimension(n,t.batchDims),p=o/d,f=new Array(a),m=u;for(let T=0;T<a;++T)f[a-1-T]=m,m*=n[t.batchDims+a-1-T];let y=Jl(e,r[1],f,t.batchDims,n,o,p,h,a),w=t.batchDims+a;if(w>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=s.slice(0,-1).concat(n.slice(w)),$=B.size(v),b=[{type:12,data:$},{type:12,data:u},...te(r[0].dims,y.dims,v)],I=T=>{let k=P("data",r[0].dataType,r[0].dims.length),z=P("slice_offsets",12,y.dims.length),C=J("output",r[0].dataType,v.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,z,C)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:I},{inputs:[r[0],y]})},td=e=>({batchDims:e.batch_dims,cacheKey:""})}),rd,nd,id,ad,ng=F(()=>{ne(),se(),Ee(),oe(),rd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===r?Math.ceil(o/n)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},nd=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=B.normalizeAxis(t.gatherAxis,i),a=B.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let u=B.size(o),d=e[2].dataType,h=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...te(...e.map((m,y)=>m.dims),o)],f=m=>{let y=P("data",e[0].dataType,e[0].dims.length),w=P("inputIndices",e[1].dataType,e[1].dims.length),v=P("scales",e[2].dataType,e[2].dims.length),$=e.length>3?P("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=J("output",d,o.length),I=[y,w,v];$&&I.push($);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(T).declareVariables(...I,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
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
          index_from_indices += ${r[s]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${n.length} - 1`)};
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
        let dequantized_data = ${Be(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,y)=>y!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},id=(e,t)=>{let r=e.inputs;rd(r,t),e.compute(nd(e.inputs,t))},ad=e=>_e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),sd,od,ud,ld,ig=F(()=>{ne(),se(),Ee(),oe(),sd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},od=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=B.normalizeAxis(t.axis,i),u=r[o],d=s.slice(0),h=B.size(d),p=P("input",n,i),f=P("indicesInput",a,s.length),m=J("output",n,d.length),y=[{type:12,data:h},{type:6,data:u},{type:12,data:o}];return y.push(...te(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w=>`
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
  }`}},ud=e=>_e({axis:e.axis}),ld=(e,t)=>{let r=e.inputs;sd(r),e.compute(od(e.inputs,t))}}),dd,cd,pd,hd,ag=F(()=>{ne(),se(),oe(),dd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},cd=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=$s.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(s/u),h=Math.ceil(i/u),p=!0,f=B.size(o),m=[{type:12,data:p?d:f},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(m.push(...te(e[2].dims)),y.push("rank")),m.push(...te(o));let w=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",T=P("a",e[0].dataType,e[0].dims),k=P("b",e[1].dataType,e[1].dims),z=T.type.value,C=null,x=[T,k];e.length===3&&(C=P("c",e[2].dataType,e[2].dims.length),x.push(C));let R=J("output",e[0].dataType,o.length);x.push(R);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
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
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${z}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},v=$=>{let b=P("a",e[0].dataType,e[0].dims),I=P("b",e[1].dataType,e[1].dims),T=null,k=[b,I];e.length===3&&(T=P("c",e[2].dataType,e[2].dims.length),k.push(T));let z=J("output",e[0].dataType,o.length);k.push(z);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",R="";t.transA&&t.transB?(R=`
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
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
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
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
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
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
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
      ${R}
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
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:m}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:w}},pd=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},hd=(e,t)=>{dd(e.inputs),e.compute(cd(e.inputs,t))}}),et,lt,Nt,Dt,fd,md,gd,yd,_d,wd,bd,$d,vd,xd,sg=F(()=>{ne(),se(),Ee(),oe(),[et,lt,Nt,Dt]=[0,1,2,3],fd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},md=`
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
`,gd=e=>`
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
`,yd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,_d=e=>`
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
`,wd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${et}] = batch;
     indices[${lt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Nt}] = u32(r);
            indices[${Dt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Nt}] = u32(clamp(r, 0, H - 1));
          indices[${Dt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Nt}] = gs_reflect(r, border[1], border[3]);
          indices[${Dt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,bd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${et}], indices[${lt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${et}], indices[${lt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${et}], indices[${lt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${et}], indices[${lt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${et}], indices[${lt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${et}], indices[${lt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,$d=(e,t)=>{let r=P("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=P("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[et,lt,Nt,Dt]=[0,3,1,2]);let a=J("output",e[0].dataType,s.length),o=r.type.value,u=B.size(s),d=[{type:12,data:u},...te(e[0].dims,n,s)],h=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${md}
  ${gd(o)}
  ${yd(t)}
  ${_d(t)}
  ${wd(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Nt}]);
      let W_in = i32(uniforms.x_shape[${Dt}]);

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
      var grid_indices = vec3<u32>(indices[${et}], indices[${Nt}], indices[${Dt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${bd(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let f=B.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:h}},vd=(e,t)=>{fd(e.inputs),e.compute($d(e.inputs,t))},xd=e=>_e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ne,Sd,Td,vi,Id,hr,kd,Ed=F(()=>{ne(),se(),Ee(),Wn(),Jn(),oe(),yt(),Ne=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Sd=(e,t)=>{let r=e[0],n=Ne(e,1),i=Ne(e,2),s=Ne(e,3),a=Ne(e,4),o=Ne(e,5),u=Ne(e,6),d=Ne(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],p=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=p,y=0,w=0,v=Math.floor(f/t.numHeads);if(u&&d&&B.size(u.dims)&&B.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=u.dims[2],w=u.dims[2]}else if(u&&B.size(u.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(n&&B.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(s&&B.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=y+m,I=0;if(a&&B.size(a.dims)>0){I=8;let C=a.dims;throw C.length===1?C[0]===h?I=1:C[0]===3*h+2&&(I=3):C.length===2&&C[0]===h&&C[1]===b&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,k=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=i.dims[1]*i.dims[3],T=!0}}let z=!1;if(a&&B.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:v,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:z,passPastInKv:T,qkvFormat:$}},Td=e=>_e({...e}),vi=_e({perm:[0,2,1,3]}),Id=(e,t,r,n,i,s,a)=>{let o=[n,i,s],u=B.size(o),d=[{type:12,data:u},{type:12,data:a},{type:12,data:s}],h=p=>{let f=J("qkv_with_bias",t.dataType,o),m=P("qkv",t.dataType,o),y=P("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(w).declareVariables(m,y,f)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},hr=(e,t,r,n,i,s,a,o)=>{let u=s;if(a&&B.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Id(e,s,a,t,n,r*i,o),u=u.reshape([t,n,r,i]),r===1||n===1?u:e.compute(We(u,vi.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,n,r,i])),r===1||n===1?u:e.compute(We(u,vi.perm),{inputs:[u],outputs:[-1]})[0]},kd=(e,t)=>{let r=Sd(e.inputs,t),n=e.inputs[0],i=Ne(e.inputs,1),s=Ne(e.inputs,2),a=Ne(e.inputs,3),o=Ne(e.inputs,4),u=Ne(e.inputs,5),d=Ne(e.inputs,6),h=Ne(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,f=hr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(p)return ur(e,f,i,s,o,void 0,d,h,u,r);if(!i||!s)throw new Error("key and value must be provided");let m=hr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=hr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);ur(e,f,m,y,o,void 0,d,h,u,r)}}),Cd,zd,Md,Ad,xi,Od,Rd,Bd=F(()=>{ne(),se(),Ee(),oe(),Cd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},zd=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),_e({numOutputs:n,axis:t.axis,splitSizes:r})},Md=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ee("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ad=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},xi=(e,t)=>{let r=e[0].dims,n=B.size(r),i=e[0].dataType,s=B.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=P("input",i,r.length),u=new Array(t.numOutputs),d=[],h=[],p=0,f=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],u[y]=p;let w=r.slice();w[s]=t.splitSizes[y],h.push(w),a[y]=J(`output${y}`,i,w.length),d.push({dims:h[y],dataType:e[0].dataType})}f.push({type:12,data:u},...te(r,...h));let m=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...a)}
  ${Md(u.length)}
  ${Ad(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ee("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f})}},Od=(e,t)=>{Cd(e.inputs);let r=e.inputs.length===1?t:zd(e.inputs,t);e.compute(xi(e.inputs,r),{inputs:[0]})},Rd=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return _e({axis:t,numOutputs:n,splitSizes:r})}}),Nd,Vr,Dd,Ud=F(()=>{ne(),se(),Ee(),oe(),Nd=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!B.areEqual(n.dims,[])&&!B.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!B.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],h=i.dims[0],p=B.sizeFromDimension(r.dims,1)/d,f=o===0?i.dims[1]*2:p/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(u!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Vr=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,h=e[2].dims[1],p=i===0?h*2:d/n,f=new Array(a,u,d/p,p-h),m=B.computeStrides(f),y=[{type:1,data:s},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...te(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=v=>{let $=P("input",e[0].dataType,e[0].dims.length),b=P("position_ids",e[1].dataType,e[1].dims.length),I=P("cos_cache",e[2].dataType,e[2].dims.length),T=P("sin_cache",e[3].dataType,e[3].dims.length),k=J("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${v.declareVariables($,b,I,T,k)}

        ${v.mainStart(Xt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",J("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:_e({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/Xt)},programUniforms:y})}},Dd=(e,t)=>{Nd(e.inputs,t),e.compute(Vr(e.inputs,t))}}),Pd,Ld,Si,qd,Wd,og=F(()=>{Ee(),ne(),Jn(),Ed(),Bd(),yt(),Ud(),oe(),Pd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],d=r.dims[1],h=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,f=0,m=!n||n.dims.length===0,y=Math.floor(m?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);m&&(h=y*t.numHeads);let w=s&&s.dims.length!==0,v=a&&a.dims.length!==0;if(w&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&v){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(w||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,I=!1,T=t.kvNumHeads?y*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],I=!0}}let k=e.length>4?e[5]:void 0;if(k){if(k.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=k.dims.reduce((C,x)=>C*x,1);if(z!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${z}.`);for(let C=0;C<k.dims.length;C++)if(k.dims[C]!==1&&k.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${k.dims[C]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:y,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:$}},Ld=_e({perm:[0,2,1,3]}),Si=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(We(n,Ld.perm),{inputs:[n],outputs:[-1]})[0]),n},qd=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=h=>{let p=P("seq_lens",r.dataType,r.dims),f=P("total_seq_lens",n.dataType,n.dims),m=J("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},Wd=(e,t)=>{var T;let r=Pd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=_e({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[f,m,y]=!i&&!s?e.compute(xi([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],w,v;if(t.doRotary){let k=e.compute(qd(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],z=e.inputs[7],C=e.inputs[8],x=_e({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,k,z,C],N=[-1];w=e.compute(Vr(R,x),{inputs:R,outputs:N})[0],R.splice(0,1,m);let H=_e({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});v=e.compute(Vr(R,H),{inputs:R,outputs:N})[0]}let $=hr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:f,void 0,0),b=Si(e,t.doRotary?v:m,r),I=Si(e,y,r);ur(e,$,b,I,void 0,void 0,a,o,void 0,r,u,d)}}),Ti,Gd,Vd,Fd,ug=F(()=>{ne(),se(),yt(),oe(),Ti=(e,t,r,n,i,s,a,o)=>{let u=ke(s),d=u===1?"f32":`vec${u}f`,h=u===1?"vec2f":`mat2x${u}f`,p=i*a,f=64;p===1&&(f=256);let m=[i,a,s/u],y=[i,a,2],w=["rank","type","type"],v=[];v.push(...te(m,y));let $=b=>{let I=P("x",t.dataType,3,u),T=P("scale",r.dataType,r.dims),k=P("bias",n.dataType,n.dims),z=J("output",1,3,2),C=[I,T,k,z];return`
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
      let sum_final = ${gt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${gt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:v}),getShaderSource:$},{inputs:[t,r,n],outputs:[-1]})[0]},Gd=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],u=B.sizeFromDimension(n,s),d=ke(u),h=B.size(i)/d,p=Ti(e,t[0],t[1],t[2],a,u,o,r.epsilon),f=[a,o,u/d],m=[a,o],y=["type","none"],w=v=>{let $=P("x",t[0].dataType,f.length,d),b=P("scale_shift",1,m.length,2),I=J("output",t[0].dataType,f.length,d),T=[$,b,I];return`
  ${v.registerUniform("output_size","u32").declareVariables(...T)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...te(f,m,f)]}),getShaderSource:w},{inputs:[t[0],p]})},Vd=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=B.sizeFromDimension(n,1)/a,u=ke(a),d=B.size(i)/u,h=[{type:12,data:o},{type:12,data:Math.floor(a/u)}],p=["type","type"],f=!1,m=[0,n.length-1];for(let $=0;$<n.length-2;$++)f=f||n[$+1]!==1,m.push($+1);f=f&&n[n.length-1]!==1;let y=f?e.compute(We(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},($,b)=>n[m[b]])),w=Ti(e,y,t[1],t[2],s,o,a,r.epsilon),v=$=>{let b=Me(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,T=C=>{let x=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${b}(${R}(scale.${x}))`;case 2:return`vec2<${b}>(${R}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${b}>(${R}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${u}`)}},k=P("input",t[0].dataType,t[0].dims,u),z=J("output",t[0].dataType,i,u);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:v},{inputs:[t[0],w]})},Fd=(e,t)=>{t.format==="NHWC"?Vd(e,e.inputs,t):Gd(e,e.inputs,t)}}),Hd,jd,Kd,lg=F(()=>{ne(),se(),oe(),Hd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},jd=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,u=B.normalizeAxis(t.axis,i.length),d=B.sizeToDimension(i,u),h=B.sizeFromDimension(i,u),p=B.size(s.dims),f=a?B.size(a.dims):0;if(p!==h||a&&f!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${f}`);let m=[];for(let k=0;k<i.length;++k)k<u?m.push(i[k]):m.push(1);let y=ke(h),w=["type","type"],v=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/y)},{type:1,data:t.epsilon}];a&&w.push("type");let $=r>1,b=r>2,I=k=>{let z=Me(e[0].dataType),C=[P("x",e[0].dataType,e[0].dims,y),P("scale",s.dataType,s.dims,y)];a&&C.push(P("bias",a.dataType,a.dims,y)),C.push(J("output",e[0].dataType,o,y)),$&&C.push(J("mean_data_output",1,m)),b&&C.push(J("inv_std_output",1,m));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(x).declareVariables(...C)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Hn("f32",y)};
    var mean_square_vector = ${Hn("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Yt(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${gt("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${gt("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Yt(z,y,"x[j + offset]")};
      let f32scale = ${Yt(z,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Yt(z,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:o,dataType:e[0].dataType}];return $&&T.push({dims:m,dataType:1}),b&&T.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:v}),getShaderSource:I}},Kd=(e,t)=>{Hd(e.inputs),e.compute(jd(e.inputs,t,e.outputCount))}}),Xd,Yd,dg=F(()=>{se(),oi(),ci(),Xd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Yd=e=>{Xd(e.inputs);let t=Kt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(si(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=B.size(e.inputs[0].dims.slice(0,-2)),a=B.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),u=e.inputs[1].reshape([1,n,r]),d=[1,s,r],h=[o,u];e.compute(Lr(h,{activation:""},t,d),{inputs:h})}else e.compute(Lr(e.inputs,{activation:""},t))}}}),Zd,Qd,Jd,ec,tc,cg=F(()=>{ne(),se(),Ee(),oe(),Zd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!B.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(u)!==d)throw new Error("zeroPoints input size error.")}},Qd=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),u=B.size(o),d=e[1].dims[2]/4,h=e[0].dataType,p=ke(t.k),f=ke(d),m=ke(a),y=o.concat([i,a]),w=i>1&&a/m%2===0?2:1,v=B.size(y)/m/w,$=64,b=[],I=[u,i,s/p],T=B.convertShape(e[1].dims).slice();T.splice(-1,1,d/f),b.push(...te(I)),b.push(...te(T)),b.push(...te(e[2].dims)),e.length===4&&b.push(...te(B.convertShape(e[3].dims)));let k=[u,i,a/m];b.push(...te(k));let z=C=>{let x=I.length,R=P("a",e[0].dataType,x,p),N=P("b",12,T.length,f),H=P("scales",e[2].dataType,e[2].dims.length),G=[R,N,H],V=e.length===4?P("zero_points",12,e[3].dims.length):void 0;V&&G.push(V);let O=k.length,j=J("output",e[0].dataType,O,m),K=Me(e[0].dataType),Y=(()=>{switch(p){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ue=Math.floor(32/t.bits),D=Math.floor(ue/8),Q=()=>{let q="";for(let W=0;W<D;W++){let re=W*t.bits*4,Te=re+t.bits;q+=`
          // reuse a data (pass ${W})
            var input_offset${W>0?W:""} = ${W===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${W>0?W:""}: ${Y};
            for (var j${W>0?W:""}: u32 = 0; j${W>0?W:""} < ${8/p}; j${W>0?W:""}++) {
              a_data${W>0?W:""}[j${W>0?W:""}] = ${R.getByOffset(`input_offset${W>0?W:""}`)};
              input_offset${W>0?W:""}++;
            }
          `;for(let ae=0;ae<m*w;ae++)q+=`
            b_value = ${f===1?`b${ae}_data`:`b${ae}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${W*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${re}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Te}u) & b_mask);`}
            b_quantized_values = ${Y}(${Array.from({length:4},(le,xe)=>`${K}(b_value_lower[${xe}]), ${K}(b_value_upper[${xe}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Y}(${Array.from({length:8},(le,xe)=>`(b_quantized_values[${xe}] - ${V?`zero_point${ae}`:"zero_point"}) * scale${ae}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${V?`zero_point${ae}`:"zero_point"}`).join(",")})) * scale${ae};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(ae/m)}]${m>1?`[${ae%m}]`:""} += ${Array.from({length:8/p},(le,xe)=>`${p===1?`a_data${W>0?W:""}[${xe}] * b_dequantized_values[${xe}]`:`dot(a_data${W>0?W:""}[${xe}], b_dequantized_values[${xe}])`}`).join(" + ")};
          `}return q},M=()=>{let q=`
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
            `;for(let W=0;W<m*w;W++)q+=`
            let scale${W} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${V?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${K}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return q},L=()=>{let q=`col_index = col * ${m};`;for(let W=0;W<m*w;W++)q+=`
            let b${W}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return q+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,q};return`
        var<workgroup> workgroup_shared: array<${j.type.value}, ${w*$}>;
        ${C.declareVariables(...G,j)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${j.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
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
                ${Q()}
                word_offset += ${ue/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${j.type.value} = ${j.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${j.setByIndices(`${j.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${m};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:z}},Jd=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),u=B.size(o),d=e[1].dims[2]/4,h=e[0].dataType,p=ke(t.k),f=ke(d),m=o.concat([i,a]),y=128,w=a%8===0?8:a%4===0?4:1,v=y/w,$=Math.floor(32/t.bits),b=v*f*$,I=b/p,T=b/t.blockSize,k=B.size(m)/w,z=[],C=[u,i,s/p],x=B.convertShape(e[1].dims).slice();x.splice(-1,1,d/f),z.push(...te(C)),z.push(...te(x)),z.push(...te(e[2].dims)),e.length===4&&z.push(...te(B.convertShape(e[3].dims)));let R=[u,i,a];z.push(...te(R));let N=H=>{let G=C.length,V=P("a",e[0].dataType,G,p),O=P("b",12,x.length,f),j=P("scales",e[2].dataType,e[2].dims.length),K=[V,O,j],Y=e.length===4?P("zero_points",12,e[3].dims.length):void 0;Y&&K.push(Y);let ue=R.length,D=J("output",e[0].dataType,ue),Q=Me(e[0].dataType),M=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Q}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Q}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Q}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Q}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
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
            ${Y?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Q}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Q}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${j.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let L=Math.floor($/8),q="";for(let W=0;W<L;W++){let re=W*t.bits*4,Te=re+t.bits;q+=`
              ${M()}
              {${t.bits===2?`
                let half_word = b_value >> ${W*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${re}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Q}>(${Array.from({length:4},(ae,le)=>`${Q}(b_value_lower[${le}]), ${Q}(b_value_upper[${le}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Q}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ae,le)=>`${`dot(a_data${le}, b_dequantized_values[${le}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return q})()}
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${v};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:h}],dispatchGroup:{x:k},programUniforms:z}),getShaderSource:N}},ec=(e,t)=>{Zd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Jd(e.inputs,t)):e.compute(Qd(e.inputs,t))},tc=e=>_e(e)}),rc,nc,ic,ac,sc,oc,uc,lc,dc,pg=F(()=>{ne(),se(),oe(),rc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},nc=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ee("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ee("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ee("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},ic=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ee("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ee("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ee("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ee("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},ac=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ee("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ee("uniforms.x_shape",i,t)})) {
                  k = i32(${ee("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ee("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},sc=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ee("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${ee("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ee("uniforms.x_shape",i,t)})) {
                  k -= i32(${ee("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ee("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},oc=(e,t,r)=>{switch(r.mode){case 0:return nc(e,t,r.pads.length);case 1:return ic(e,t,r.pads.length);case 2:return ac(e,t,r.pads.length);case 3:return sc(e,t,r.pads.length);default:throw new Error("Invalid mode")}},uc=(e,t)=>{let r=B.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=B.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...te(e[0].dims,r));let o=["rank"],u=d=>{let h=J("output",e[0].dataType,r.length),p=P("x",e[0].dataType,n.length),f=p.type.value,m=oc(h,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(r)/64)},programUniforms:s}),getShaderSource:u}},lc=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(r[u]),s[Number(o[u])+i]=Number(r[u+o.length])}else r.forEach((o,u)=>s[Number(u)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},dc=(e,t)=>{rc(e.inputs);let r=lc(e.inputs,t);e.compute(uc(e.inputs,r),{inputs:[0]})}}),fr,Ii,ki,Ei,Ci,cc,pc,zi,Mi,hc,fc,Ai,mc,gc,Oi,yc,_c,wc,bc,hg=F(()=>{Ge(),ne(),se(),oe(),fr=e=>{if($e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ii=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],d=t.pads.slice();Or.adjustPoolAttributes(r,i,a,o,u,d);let h=Or.computePoolOutputShape(r,i,o,u,a,d,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let f=h.slice();return f.push(f.splice(1,1)[0]),[p,n?f:h]},ki=(e,t)=>{let r=t.format==="NHWC",n=B.size(e),i=B.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],p=!!(d+h);s.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:h}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];f=!!(w+v),s.push({type:12,data:m},{type:12,data:y},{type:12,data:w},{type:12,data:v}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,h)=>d+h);return[s,a,!!u,!1,!1]}},Ei=(e,t,r,n,i,s,a,o,u,d,h,p)=>{let f=i.format==="NHWC",m=t.type.value,y=J("output",t.type.tensor,n);if(i.kernelShape.length<=2){let w="",v="",$="",b=r-(f?2:1);if(h?w=`
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
                }`,i.kernelShape.length===2){let I=r-(f?3:2);p?v=`
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
                  offsets[j] = offset / ${ee("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${ee("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ee("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${ee("uniforms.pads","j - 2u",v)};
                  ${$}
              }
              ${a}

              output[global_idx] = value;
            }`}},Ci=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,cc=e=>`${Ci(e)};${e.countIncludePad}`,pc=e=>`${Ci(e)};${e.storageOrder};${e.dilations}`,zi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Mi=(e,t,r,n)=>{let[i,s]=Ii(t,n,r),a=P("x",t.dataType,t.dims.length),o=a.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,p,f,m,y]=ki(s,i);h.push(...te(t.dims,s));let w=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${f};${m};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:h}),getShaderSource:v=>Ei(v,a,t.dims.length,s.length,i,u,d,0,p,f,m,y)}},hc=e=>{let t=e.count_include_pad!==0,r=zi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:cc(n)}},fc=(e,t)=>{fr(e.inputs),e.compute(Mi("AveragePool",e.inputs[0],!1,t))},Ai={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},mc=e=>{let t=e.format;return{format:t,...Ai,cacheKey:t}},gc=(e,t)=>{fr(e.inputs),e.compute(Mi("GlobalAveragePool",e.inputs[0],!0,t))},Oi=(e,t,r,n)=>{let[i,s]=Ii(t,n,r),a=`
      value = max(x_val, value);
    `,o="",u=P("x",t.dataType,t.dims.length),d=["rank"],[h,p,f,m,y]=ki(s,i);return h.push(...te(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${f};${m};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:h}),getShaderSource:w=>Ei(w,u,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,f,m,y)}},yc=(e,t)=>{fr(e.inputs),e.compute(Oi("MaxPool",e.inputs[0],!1,t))},_c=e=>{let t=e.storage_order,r=e.dilations,n=zi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:pc(i)}},wc=e=>{let t=e.format;return{format:t,...Ai,cacheKey:t}},bc=(e,t)=>{fr(e.inputs),e.compute(Oi("GlobalMaxPool",e.inputs[0],!0,t))}}),$c,vc,xc,Sc,fg=F(()=>{ne(),se(),Ee(),oe(),$c=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},vc=(e,t)=>{let r=B.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=B.size(s),u=n===3||n===2,d=u?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,p=e.length>2?e[2]:void 0,f=p?u?[Math.ceil(B.size(p.dims)/4)]:p.dims:void 0,m=h.length===0||h.length===1&&h[0]===1,y=m===!1&&h.length===1,w=ke(o),v=m&&(!u||w===4),$=v?w:1,b=v&&!u?w:1,I=P("input",u?12:n,d.length,b),T=P("scale",a,h.length),k=p?P("zero_point",u?12:n,f.length):void 0,z=J("output",a,s.length,$),C=[I,T];k&&C.push(k);let x=[d,h];p&&x.push(f);let R=[{type:12,data:o/$},{type:12,data:r},{type:12,data:t.blockSize},...te(...x,s)],N=H=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:R})}},xc=(e,t)=>{$c(e.inputs,t),e.compute(vc(e.inputs,t))},Sc=e=>_e({axis:e.axis,blockSize:e.blockSize})}),Tc,Ic,kc,mg=F(()=>{Ge(),ne(),oe(),Tc=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},Ic=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...te(s)],u=d=>{let h=J("output",n,s.length),p=h.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(f).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},kc=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),$e.webgpu.validateInputContent&&Tc(t,r,n),e.compute(Ic(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),Ec,Cc,zc,Mc,gg=F(()=>{ne(),se(),Ee(),oe(),Ec=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${t}, bitcast<${n}>(${r}));`:`
              ${i}bitcast<${n}>(oldValue) + (${r})${s}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${t}, bitcast<${n}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Cc=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(B.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],u=B.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:u},...te(e[1].dims,e[2].dims,i)],h=p=>{let f=P("indices",e[1].dataType,e[1].dims.length),m=P("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Ns("output",e[0].dataType,i.length):J("output",e[0].dataType,i.length,s);return`
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
    ${Ec(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h}},zc=e=>_e({reduction:e.reduction}),Mc=(e,t)=>{e.compute(Cc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ac,Oc,Rc,Ri,Bc,Nc,Dc,Uc,Pc,Lc,qc,Wc,Bi,Gc,Vc,Fc,Hc,jc,Kc,Xc,yg=F(()=>{ne(),se(),Ee(),oe(),Ac=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Oc=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},Rc=(e,t,r,n,i,s)=>{let[a,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>n.push(h)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ac(n,t),t.axes.length>0&&Oc(n,t.axes,d).forEach((h,p)=>n[p]=h)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Ri=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Bc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ri("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ri("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Nc=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Dc=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},Uc=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Pc=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Lc=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ee("uniforms.scales","i",n)};
        var roi_low = ${ee("uniforms.roi","i",i)};
        var roi_hi = ${ee("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ee("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,qc=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ee("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ee("uniforms.roi","i",s)};
          var roi_hi = ${ee("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",n.length)};
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
    }`,Wc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ee("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Bi=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Gc=(e,t,r,n,i)=>{let[s,a,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Bi(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${n?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
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
    }`},Vc=(e,t,r,n,i,s,a,o,u,d)=>{let h=r.length===2,[p,f]=h?[0,1]:[2,3],m=e.type.value,y=w=>{let v=w===p?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[w]},
        ${n[w]}, ${r[w]}, ${s[w]}, ${s[w]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${u};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${m} = originalIdx + ${m}(i);
          if (${v} < 0 || ${v} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${v} = max(0, min(${v}, ${r[w]} - 1));`};
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
    `},Fc=(e,t,r,n,i)=>{let[s,a,o,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Bi(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${a}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${u}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

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
    }`},Hc=(e,t,r,n,i,s)=>{let a=e.dims,o=Dc(s,t.axes,a.length),u=Uc(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((b,I)=>b===0?1:u[I]/b),t.keepAspectRatioPolicy!=="stretch"&&(u=Pc(a,d,t)));let h=J("output",e.dataType,u.length),p=P("input",e.dataType,a.length),f=B.size(u),m=a.length===u.length&&a.every((b,I)=>b===u[I]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,v=p.type.value,$=b=>`
      ${m?"":`
      ${Bc(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Wc(p,a)};
              ${Nc(t.nearestMode,r,v)};
              ${qc(p,h,a,u,d.length,o.length,y)};
              `;case"linear":return`
              ${Lc(h,a,u,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Gc(p,h,a,y,w)}`;if(a.length===3||a.length===5)return`${Fc(p,h,a,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Vc(p,h,a,u,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...te(a,u)]})}},jc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Kc=(e,t)=>{let r=[],n=[],i=[],s=jc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Rc(e.inputs,t,s,r,n,i),e.compute(Hc(e.inputs[0],t,s,r,n,i),{inputs:[0]})},Xc=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return _e({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),Yc,Zc,Qc,_g=F(()=>{ne(),se(),oe(),Yc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Zc=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=B.size(s),o=s,u=a,d=s.slice(-1)[0],h=n?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,f=e.length>4,m=n&&r>1,y=n&&r>2,w=r>3,v=64,$=ke(d),b=[{type:12,data:u},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],I=k=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[P("x",e[0].dataType,e[0].dims,$),P("skip",e[1].dataType,e[1].dims,$),P("gamma",e[2].dataType,e[2].dims,$)];p&&C.push(P("beta",e[3].dataType,e[3].dims,$)),f&&C.push(P("bias",e[4].dataType,e[4].dims,$)),C.push(J("output",e[0].dataType,o,$)),m&&C.push(J("mean_output",1,h)),y&&C.push(J("inv_std_output",1,h)),w&&C.push(J("input_skip_bias_sum",e[0].dataType,o,$));let x=Me(e[0].dataType),R=Me(1,$);return`

      ${k.registerUniforms(z).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${v}>;
      var<workgroup> sum_squared_shared : array<${R}, ${v}>;

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
          let f32_value = ${Yt(x,$,"value")};
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
        let mean = ${gt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${gt("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:o,dataType:e[0].dataType}];return r>1&&T.push({dims:h,dataType:1}),r>2&&T.push({dims:h,dataType:1}),r>3&&T.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${y};${w}`,inputDependencies:e.map((k,z)=>"type")},getShaderSource:I,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:b})}},Qc=(e,t)=>{Yc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Zc(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Jc,mr,ep,Ni,tp,rp,np,ip,wg=F(()=>{ne(),se(),Ee(),oe(),Jc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},mr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},ep=(e,t)=>{if(e.length>1){let r=mr(e,1),n=mr(e,2),i=mr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),_e({starts:r,ends:n,axes:i})}else return t},Ni=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},tp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
            let steps_i = ${ee("uniforms.steps","i",r.length)};
            let signs_i = ${ee("uniforms.signs","i",r.length)};
            let starts_i = ${ee("uniforms.starts","i",r.length)};
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
      }`,rp=(e,t)=>{let r=e[0].dims,n=B.size(r),i=t.axes.length>0?B.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=mr(e,4);s.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map(($,b)=>Ni($,b,r,i,s)),o=t.ends.map(($,b)=>Ni($,b,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let $=0;$<r.length;++$)i.includes($)||(a.splice($,0,0),o.splice($,0,r[$]),s.splice($,0,1));let u=s.map($=>Math.sign($));s.forEach(($,b,I)=>{if($<0){let T=(o[b]-a[b])/$,k=a[b],z=k+T*s[b];a[b]=z,o[b]=k,I[b]=-$}});let d=r.slice(0);i.forEach(($,b)=>{d[$]=Math.ceil((o[$]-a[$])/s[$])});let h={dims:d,dataType:e[0].dataType},p=J("output",e[0].dataType,d.length),f=P("input",e[0].dataType,e[0].dims.length),m=B.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],w=[{type:12,data:m},{type:12,data:a},{type:6,data:u},{type:12,data:s},...te(e[0].dims,d)],v=$=>`
      ${$.registerUniforms(y).declareVariables(f,p)}
        ${tp(f,p,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:w})}},np=(e,t)=>{Jc(e.inputs,t);let r=ep(e.inputs,t);e.compute(rp(e.inputs,r),{inputs:[0]})},ip=e=>{let t=e.starts,r=e.ends,n=e.axes;return _e({starts:t,ends:r,axes:n})}}),ap,sp,op,up,bg=F(()=>{ne(),se(),Ee(),yt(),oe(),ap=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},sp=(e,t)=>{let r=e.inputs[0],n=r.dims,i=B.size(n),s=n.length,a=B.normalizeAxis(t.axis,s),o=a<n.length-1,u,d=[];o?(d=Array.from({length:s},(C,x)=>x),d[a]=s-1,d[s-1]=a,u=e.compute(We(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let h=u.dims,p=h[s-1],f=i/p,m=ke(p),y=p/m,w=64;f===1&&(w=256);let v=(C,x)=>x===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:x===2?`max(${C}.x, ${C}.y)`:x===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=P("x",u.dataType,u.dims,m),b=J("result",u.dataType,u.dims,m),I=$.type.value,T=Me(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,k=C=>`
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
          rowSumShared = ${I}(${gt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${m};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:k},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(We(z,d),{inputs:[z]})},op=(e,t)=>{ap(e.inputs),sp(e,t)},up=e=>_e({axis:e.axis})}),Di,lp,dp,cp,pp,$g=F(()=>{ne(),se(),oe(),Di=e=>Array.from(e.getBigInt64Array(),Number),lp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Di(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},dp=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},cp=(e,t)=>{let r=e[0].dims,n=t??Di(e[1]),i=dp(r,n),s=B.size(i),a=e[0].dataType,o=P("input",a,r.length),u=J("output",a,i.length),d=h=>`
      const inputShape = ${o.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(o,u)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...te(e[0].dims,i)]}),getShaderSource:d}},pp=e=>{lp(e.inputs),e.compute(cp(e.inputs),{inputs:[0]})}}),hp,fp,mp,vg=F(()=>{ne(),se(),oe(),hp=(e,t,r,n,i)=>{let s=J("output_data",i,r.length,4),a=P("a_data",t[1].dataType,t[1].dims.length,4),o=P("b_data",t[2].dataType,t[2].dims.length,4),u=P("c_data",t[0].dataType,t[0].dims.length,4),d,h=(p,f,m)=>`select(${f}, ${p}, ${m})`;if(!n)d=s.setByOffset("global_idx",h(a.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(f,m,y="")=>{let w=`a_data[index_a${m}][component_a${m}]`,v=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
      }`},fp=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(B.areEqual(t,r)&&B.areEqual(r,n)),a=t,o=B.size(t);if(s){let d=Kt.calcShape(Kt.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=B.size(a)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>hp(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...te(n,t,r,a)]})}},mp=e=>{e.compute(fp(e.inputs))}}),gp,xg=F(()=>{Dm(),Jn(),Um(),Pm(),Lm(),qm(),Wm(),jm(),Xm(),Ym(),Zm(),Qm(),Jm(),eg(),tg(),rg(),ng(),ig(),ag(),sg(),og(),ug(),lg(),dg(),cg(),Ed(),pg(),hg(),fg(),mg(),gg(),Yn(),yg(),Ud(),_g(),wg(),bg(),Bd(),$g(),yt(),ni(),vg(),gp=new Map([["Abs",[Yo]],["Acos",[Zo]],["Acosh",[Qo]],["Add",[Pu]],["ArgMax",[Bo,Qn]],["ArgMin",[Ro,Qn]],["Asin",[Jo]],["Asinh",[eu]],["Atan",[tu]],["Atanh",[ru]],["Attention",[qo]],["AveragePool",[fc,hc]],["BatchNormalization",[Fo]],["BiasAdd",[Ko]],["BiasSplitGelu",[Nu]],["Cast",[iu,nu]],["Ceil",[ou]],["Clip",[su]],["Concat",[Ju,el]],["Conv",[gi,fi]],["ConvTranspose",[kl,Sl]],["Cos",[uu]],["Cosh",[lu]],["CumSum",[Cl,zl]],["DepthToSpace",[Rl,Bl]],["DequantizeLinear",[xc,Sc]],["Div",[Lu]],["Einsum",[ql,Wl]],["Elu",[du,lr]],["Equal",[qu]],["Erf",[cu]],["Exp",[pu]],["Expand",[Hl]],["FastGelu",[Kl]],["Floor",[hu]],["FusedConv",[gi,fi]],["Gather",[Ql,Zl]],["GatherElements",[ld,ud]],["GatherBlockQuantized",[id,ad]],["GatherND",[ed,td]],["Gelu",[fu]],["Gemm",[hd,pd]],["GlobalAveragePool",[gc,mc]],["GlobalMaxPool",[bc,wc]],["Greater",[Fu]],["GreaterOrEqual",[ju]],["GridSample",[vd,xd]],["GroupQueryAttention",[Wd]],["HardSigmoid",[vu,$u]],["InstanceNormalization",[Fd]],["LayerNormalization",[Kd]],["LeakyRelu",[mu,lr]],["Less",[Hu]],["LessOrEqual",[Ku]],["Log",[zu]],["MatMul",[Yd]],["MatMulNBits",[ec,tc]],["MaxPool",[yc,_c]],["Mul",[Wu]],["MultiHeadAttention",[kd,Td]],["Neg",[yu]],["Not",[gu]],["Pad",[dc]],["Pow",[Gu]],["QuickGelu",[Ou,lr]],["Range",[kc]],["Reciprocal",[_u]],["ReduceMin",[Co]],["ReduceMean",[So]],["ReduceMax",[Eo]],["ReduceSum",[Mo]],["ReduceProd",[zo]],["ReduceL1",[To]],["ReduceL2",[Io]],["ReduceLogSum",[Oo]],["ReduceLogSumExp",[ko]],["ReduceSumSquare",[Ao]],["Relu",[wu]],["Resize",[Kc,Xc]],["RotaryEmbedding",[Dd]],["ScatterND",[Mc,zc]],["Sigmoid",[bu]],["Sin",[xu]],["Sinh",[Su]],["Slice",[np,ip]],["SkipLayerNormalization",[Qc]],["Split",[Od,Rd]],["Sqrt",[Tu]],["Softmax",[op,up]],["Sub",[Vu]],["Tan",[Iu]],["Tanh",[ku]],["ThresholdedRelu",[Cu,lr]],["Tile",[pp]],["Transpose",[Vs,Fs]],["Where",[mp]]])}),yp,Sg=F(()=>{Ge(),ut(),oe(),yp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){Je(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,u),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Fe(e.programInfo.name)}dispose(){}build(e,t){Je(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Us(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});me("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Fe(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),_p={};Ht(_p,{WebGpuBackend:()=>vp});var wp,bp,$p,vp,Tg=F(()=>{Ge(),ne(),ut(),Ss(),Bm(),xg(),Sg(),wp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},bp=(e,t,r)=>{var i,s;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${wp(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,n},$p=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},vp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new $p(a),this.gpuDataManager=Rs(this),this.programManager=new yp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,On(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Je(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],a=s.kernelId,o=this.kernels.get(a),u=o.kernelType,d=o.kernelName,h=s.programName,p=s.inputTensorViews,f=s.outputTensorViews,m=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let w=Number(m-this.queryTimeBase),v=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map($=>({dims:$.dims,dataType:ot($.dataType)})),outputsMetadata:f.map($=>({dims:$.dims,dataType:ot($.dataType)})),kernelId:a,kernelType:u,kernelName:d,programName:h,startTime:w,endTime:v});else{let $="";p.forEach((I,T)=>{$+=`input[${T}]: [${I.dims}] | ${ot(I.dataType)}, `});let b="";f.forEach((I,T)=>{b+=`output[${T}]: [${I.dims}] | ${ot(I.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${d}|${h}" ${$}${b}start time: ${w} ns, execution time: ${v-w} ns`)}kr("GPU",`${h}::${m}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Fe()}run(e,t,r,n,i,s){Je(e.name);let a=[];for(let b=0;b<t.length;++b){let I=t[b].data;if(I===0)continue;let T=this.gpuDataManager.get(I);if(!T)throw new Error(`no GPU data for input: ${I}`);a.push(T)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),h=r.length===0?o.map((b,I)=>I):r;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let p=[],f=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(h[b])||h[b]<-3||h[b]>=s)throw new Error(`Invalid output index: ${h[b]}`);if(h[b]===-3)continue;let I=h[b]===-1,T=h[b]===-2,k=I||T?i(o[b].dataType,o[b].dims):n(h[b],o[b].dataType,o[b].dims);if(p.push(k),k.data===0)continue;let z=this.gpuDataManager.get(k.data);if(!z)throw new Error(`no GPU data for output: ${k.data}`);if(I&&this.temporaryData.push(z),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(z)}f.push(z)}if(a.length!==t.length||f.length!==p.length){if(f.length===0)return Fe(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let b=0,I=[];d.forEach(C=>{let x=typeof C.data=="number"?[C.data]:C.data;if(x.length===0)return;let R=C.type===10?2:4,N,H;C.type===10?(H=x.length>4?16:x.length>2?8:x.length*R,N=x.length>4?16:R*x.length):(H=x.length<=2?x.length*R:16,N=16),b=Math.ceil(b/H)*H,I.push(b);let G=C.type===10?8:4;b+=x.length>4?Math.ceil(x.length/G)*N:x.length*R});let T=16;b=Math.ceil(b/T)*T;let k=new ArrayBuffer(b);d.forEach((C,x)=>{let R=I[x],N=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(k,R,N.length).set(N);else if(C.type===12)new Uint32Array(k,R,N.length).set(N);else if(C.type===10)new Uint16Array(k,R,N.length).set(N);else if(C.type===1)new Float32Array(k,R,N.length).set(N);else throw new Error(`Unsupported uniform type: ${ot(C.type)}`)});let z=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,k,0,b),this.gpuDataManager.release(z.id),m={offset:0,size:b,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(u),w=y[1]===1&&y[2]===1,v=bp(e,t,w),$=this.programManager.getArtifact(v);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(v,$),me("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let I=d[b],T=I.type,k=typeof I.data=="number"?1:I.data.length,[z,C]=$.uniformVariablesInfo[b];if(T!==z||k!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${z} with size ${C}, got type ${T} with size ${k} in program "${$.programInfo.name}".`)}}if(me("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,a,f,y,m),Fe(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=gp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),me("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await Fn(this,e,t);return Rn(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),xp={};Ht(xp,{init:()=>Tp});var Fr,Sp,Tp,Ig=F(()=>{ne(),ut(),se(),Rm(),Fr=class cm{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new cm(this.module,this.dataType,this.data,t)}},Sp=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let u=0;u<a;u++){let d=Number(e.getValue(n*i++,s)),h=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,s)),f=[];for(let m=0;m<p;m++)f.push(Number(e.getValue(n*i++,s)));o.push(new Fr(e,d,h,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new Fr(this.module,u,this.output(o,d),d),s=(o,u)=>{let d=Mt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let h=d>0?this.backend.gpuDataManager.create(d).id:0;return new Fr(this.module,o,h,u)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},Tp=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Tg(),tr(_p)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,u,d,h=!1)=>{if(h)me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),a.memcpy(Number(o),Number(u));else{me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(u),p)}},async(o,u,d)=>{me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>a.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>a.releaseKernel(o),(o,u,d,h)=>{me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let p=new Sp(t,a,Number(u));return a.computeKernel(Number(o),p,h)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new zs(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,u,d,h)=>s.ensureTensor(a,o,u,d,h),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Ip,Ui,Pi,_t,kp,Li,Hr,qi,Wi,Gi,Vi,Fi,Hi,Ep=F(()=>{Ge(),Mm(),Am(),ne(),Et(),En(),fs(),Ip=(e,t)=>{ve()._OrtInit(e,t)!==0&&we("Can't initialize onnxruntime.")},Ui=async e=>{Ip(e.wasm.numThreads,Ar(e.logLevel))},Pi=async(e,t)=>{var n,i;(i=(n=ve()).asyncInit)==null||i.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(Ig(),tr(xp)).init;t==="webgpu"&&await s("webgpu",ve(),e,r),t==="webnn"&&await s("webnn",ve(),e)}},_t=new Map,kp=e=>{let t=ve(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&we("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Li=(e,t)=>{let r=ve(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&we("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let u=r.HEAP32[i/4];if(u===0)return[o,0];let d=r.HEAPU32[i/4+1],h=[];for(let p=0;p<d;p++){let f=Number(r.getValue(i+8+p*s,"*"));h.push(f!==0?r.UTF8ToString(f):Number(r.getValue(i+8+(p+d)*s,"*")))}return[o,u,h]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Hr=e=>{let t=ve(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},qi=async(e,t)=>{var p,f,m,y;let r,n,i=ve();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Hr(e);let s=0,a=0,o=0,u=[],d=[],h=[];try{if([a,u]=await hs(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let x=[];for(let R of t.externalData){let N=typeof R=="string"?R:R.path;x.push(An(typeof R=="string"?R:R.data).then(H=>{i.mountExternalData(N,H)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof x!="string"){let R=x,N=R==null?void 0:R.context,H=R==null?void 0:R.gpuDevice,G=R==null?void 0:R.deviceType,V=R==null?void 0:R.powerPreference;N?i.currentContext=N:H?i.currentContext=await i.webnnCreateMLContext(H):i.currentContext=await i.webnnCreateMLContext({deviceType:G,powerPreference:V})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),(p=i.webgpuOnCreateSession)==null||p.call(i,s),s===0&&we("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[w,v]=kp(s),$=!!(t!=null&&t.enableGraphCapture),b=[],I=[],T=[],k=[],z=[];for(let x=0;x<w;x++){let[R,N,H]=Li(s,x);R===0&&we("Can't get an input name."),d.push(R);let G=i.UTF8ToString(R);b.push(G),T.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:ot(N),shape:H})}for(let x=0;x<v;x++){let[R,N,H]=Li(s,x+w);R===0&&we("Can't get an output name."),h.push(R);let G=i.UTF8ToString(R);I.push(G),k.push(N===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:ot(N),shape:H});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){z.push("gpu-buffer");continue}let V=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[G])??"cpu",O=i.webnnIsGraphOutput;if(V==="cpu"&&O&&O(s,G)){z.push("ml-tensor-cpu-output");continue}if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if($&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);z.push(V)}}let C=null;return z.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&we("Can't create IO binding."),C={handle:o,outputPreferredLocations:z,outputPreferredLocationsEncoded:z.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>Mn(x))}),_t.set(s,[s,d,h,C,$,!1]),[s,b,I,T,k]}catch(w){throw d.forEach(v=>i._OrtFree(v)),h.forEach(v=>i._OrtFree(v)),o!==0&&i._OrtReleaseBinding(o)!==0&&we("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&we("Can't release session."),w}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&we("Can't release session options."),u.forEach(w=>i._free(w)),(y=i.unmountExternalData)==null||y.call(i)}},Wi=e=>{var u,d,h;let t=ve(),r=_t.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&we("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&we("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&we("Can't release session."),_t.delete(e)},Gi=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=ve(),u=o.PTR_SIZE,d=e[0],h=e[1],p=e[3],f=p,m,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let $=e[2].gpuBuffer;y=Mt(zt(d),h);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=b(n,s,$,y)}}else if(p==="ml-tensor"){let $=e[2].mlTensor;y=Mt(zt(d),h);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=b(n,$,zt(d),h)}else{let $=e[2];if(Array.isArray($)){y=u*$.length,m=o._malloc(y),r.push(m);for(let b=0;b<$.length;b++){if(typeof $[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(m+b*u,He($[b],r),"*")}}else{let b=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&b&&I){let T=o.UTF8ToString(i);if(b(n,T)||I(n,T)){let k=zt(d);y=Mt(k,h),f="ml-tensor";let z=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!z||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await z(n,k,h);C(x,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),m=x}else y=$.byteLength,m=o._malloc(y),r.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),m)}else y=$.byteLength,m=o._malloc(y),r.push(m),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),m)}}let w=o.stackSave(),v=o.stackAlloc(4*h.length);try{h.forEach((b,I)=>o.setValue(v+I*u,b,u===4?"i32":"i64"));let $=o._OrtCreateTensor(zt(d),m,y,v,h.length,Mn(f));$===0&&we(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push($)}finally{o.stackRestore(w)}},Vi=async(e,t,r,n,i,s)=>{var G,V,O,j;let a=ve(),o=a.PTR_SIZE,u=_t.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],h=u[1],p=u[2],f=u[3],m=u[4],y=u[5],w=t.length,v=n.length,$=0,b=[],I=[],T=[],k=[],z=[],C=a.stackSave(),x=a.stackAlloc(w*o),R=a.stackAlloc(w*o),N=a.stackAlloc(v*o),H=a.stackAlloc(v*o);try{[$,b]=us(s),It("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)await Gi(r[D],I,k,e,h[t[D]],t[D],m);for(let D=0;D<v;D++)await Gi(i[D],T,k,e,p[n[D]],w+n[D],m);kt("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)a.setValue(x+D*o,I[D],"*"),a.setValue(R+D*o,h[t[D]],"*");for(let D=0;D<v;D++)a.setValue(N+D*o,T[D],"*"),a.setValue(H+D*o,p[n[D]],"*");if(f&&!y){let{handle:D,outputPreferredLocations:Q,outputPreferredLocationsEncoded:M}=f;if(h.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${h.length}).`);It("wasm bindInputsOutputs");for(let L=0;L<w;L++){let q=t[L];await a._OrtBindInput(D,h[q],I[L])!==0&&we(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<v;L++){let q=n[L];(G=i[L])!=null&&G[3]?(z.push(T[L]),a._OrtBindOutput(D,p[q],T[L],0)!==0&&we(`Can't bind pre-allocated output[${L}] for session=${e}.`)):a._OrtBindOutput(D,p[q],0,M[q])!==0&&we(`Can't bind output[${L}] to ${Q[L]} for session=${e}.`)}kt("wasm bindInputsOutputs"),_t.set(e,[d,h,p,f,m,!0])}(V=a.jsepOnRunStart)==null||V.call(a,d),(O=a.webnnOnRunStart)==null||O.call(a,d);let K;f?K=await a._OrtRunWithBinding(d,f.handle,v,N,$):K=await a._OrtRun(d,R,x,w,H,v,N,$),K!==0&&we("failed to call OrtRun().");let Y=[],ue=[];It("wasm ProcessOutputTensor");for(let D=0;D<v;D++){let Q=Number(a.getValue(N+D*o,"*"));if(Q===T[D]||z.includes(T[D])){Y.push(i[D]),Q!==T[D]&&a._OrtReleaseTensor(Q)!==0&&we("Can't release tensor.");continue}let M=a.stackSave(),L=a.stackAlloc(4*o),q=!1,W,re=0;try{a._OrtGetTensorData(Q,L,L+o,L+2*o,L+3*o)!==0&&we(`Can't access output tensor data on index ${D}.`);let Te=o===4?"i32":"i64",ae=Number(a.getValue(L,Te));re=a.getValue(L+o,"*");let le=a.getValue(L+o*2,"*"),xe=Number(a.getValue(L+o*3,Te)),Ce=[];for(let ce=0;ce<xe;ce++)Ce.push(Number(a.getValue(le+ce*o,Te)));a._OrtFree(le)!==0&&we("Can't free memory for tensor dims.");let Ie=Ce.reduce((ce,ie)=>ce*ie,1);W=ot(ae);let Ue=f==null?void 0:f.outputPreferredLocations[n[D]];if(W==="string"){if(Ue==="gpu-buffer"||Ue==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ce=[];for(let ie=0;ie<Ie;ie++){let Re=a.getValue(re+ie*o,"*"),pt=a.getValue(re+(ie+1)*o,"*"),qt=ie===Ie-1?void 0:pt-Re;ce.push(a.UTF8ToString(Re,qt))}Y.push([W,Ce,ce,"cpu"])}else if(Ue==="gpu-buffer"&&Ie>0){let ce=a.jsepGetBuffer;if(!ce)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=ce(re),Re=Mt(ae,Ie);if(Re===void 0||!Cn(W))throw new Error(`Unsupported data type: ${W}`);q=!0,Y.push([W,Ce,{gpuBuffer:ie,download:a.jsepCreateDownloader(ie,Re,W),dispose:()=>{a._OrtReleaseTensor(Q)!==0&&we("Can't release tensor.")}},"gpu-buffer"])}else if(Ue==="ml-tensor"&&Ie>0){let ce=a.webnnEnsureTensor,ie=a.webnnIsGraphInputOutputTypeSupported;if(!ce||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Mt(ae,Ie)===void 0||!zn(W))throw new Error(`Unsupported data type: ${W}`);if(!ie(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let Re=await ce(e,re,ae,Ce,!1);q=!0,Y.push([W,Ce,{mlTensor:Re,download:a.webnnCreateMLTensorDownloader(re,W),dispose:()=>{a.webnnReleaseTensorId(re),a._OrtReleaseTensor(Q)}},"ml-tensor"])}else if(Ue==="ml-tensor-cpu-output"&&Ie>0){let ce=a.webnnCreateMLTensorDownloader(re,W)(),ie=Y.length;q=!0,ue.push((async()=>{let Re=[ie,await ce];return a.webnnReleaseTensorId(re),a._OrtReleaseTensor(Q),Re})()),Y.push([W,Ce,[],"cpu"])}else{let ce=Mr(W),ie=new ce(Ie);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(a.HEAPU8.subarray(re,re+ie.byteLength)),Y.push([W,Ce,ie,"cpu"])}}finally{a.stackRestore(M),W==="string"&&re&&a._free(re),q||a._OrtReleaseTensor(Q)}}f&&!m&&(a._OrtClearBoundOutputs(f.handle)!==0&&we("Can't clear bound outputs."),_t.set(e,[d,h,p,f,m,!1]));for(let[D,Q]of await Promise.all(ue))Y[D][2]=Q;return kt("wasm ProcessOutputTensor"),Y}finally{(j=a.webnnOnRunEnd)==null||j.call(a,d),a.stackRestore(C),I.forEach(K=>a._OrtReleaseTensor(K)),T.forEach(K=>a._OrtReleaseTensor(K)),k.forEach(K=>a._free(K)),$!==0&&a._OrtReleaseRunOptions($),b.forEach(K=>a._free(K))}},Fi=e=>{let t=ve(),r=_t.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&we("Can't get an profile file name."),t._OrtFree(i)},Hi=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),wt,De,Zt,gr,yr,jr,ji,Kr,Ut,Pt,Cp,zp,Mp,Ap,Op,Rp,Bp,Np,Dp=F(()=>{Ge(),Ep(),Et(),Sn(),wt=()=>!!$e.wasm.proxy&&typeof document<"u",Zt=!1,gr=!1,yr=!1,Kr=new Map,Ut=(e,t)=>{let r=Kr.get(e);r?r.push(t):Kr.set(e,[t])},Pt=()=>{if(Zt||!gr||yr||!De)throw new Error("worker not ready")},Cp=e=>{switch(e.data.type){case"init-wasm":Zt=!1,e.data.err?(yr=!0,ji[1](e.data.err)):(gr=!0,ji[0]()),jr&&(URL.revokeObjectURL(jr),jr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Kr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},zp=async()=>{if(!gr){if(Zt)throw new Error("multiple calls to 'initWasm()' detected.");if(yr)throw new Error("previous call to 'initWasm()' failed.");if(Zt=!0,wt())return new Promise((e,t)=>{De==null||De.terminate(),ns().then(([r,n])=>{try{De=n,De.onerror=s=>t(s),De.onmessage=Cp,ji=[e,t];let i={type:"init-wasm",in:$e};!i.in.wasm.wasmPaths&&(r||bn)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),De.postMessage(i),jr=r}catch(i){t(i)}},t)});try{await kn($e.wasm),await Ui($e),gr=!0}catch(e){throw yr=!0,e}finally{Zt=!1}}},Mp=async e=>{if(wt())return Pt(),new Promise((t,r)=>{Ut("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:$e}};De.postMessage(n)});await Pi($e,e)},Ap=async e=>wt()?(Pt(),new Promise((t,r)=>{Ut("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};De.postMessage(n,[e.buffer])})):Hr(e),Op=async(e,t)=>{if(wt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Pt(),new Promise((r,n)=>{Ut("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),De.postMessage(i,s)})}else return qi(e,t)},Rp=async e=>{if(wt())return Pt(),new Promise((t,r)=>{Ut("release",[t,r]);let n={type:"release",in:e};De.postMessage(n)});Wi(e)},Bp=async(e,t,r,n,i,s)=>{if(wt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Pt(),new Promise((a,o)=>{Ut("run",[a,o]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:n,options:s}};De.postMessage(d,Hi(u))})}else return Vi(e,t,r,n,i,s)},Np=async e=>{if(wt())return Pt(),new Promise((t,r)=>{Ut("end-profiling",[t,r]);let n={type:"end-profiling",in:e};De.postMessage(n)});Fi(e)}}),Ki,Up,Pp,kg=F(()=>{Ge(),Dp(),ne(),gn(),fs(),Ki=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Up=e=>{switch(e[3]){case"cpu":return new Le(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Cn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Le.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!zn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Le.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Pp=class{async fetchModelAndCopyToWasmMemory(e){return Ap(await An(e))}async loadModel(e,t){Je();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Op(r,t),Fe()}async dispose(){return Rp(this.sessionId)}async run(e,t,r){Je();let n=[],i=[];Object.entries(e).forEach(p=>{let f=p[0],m=p[1],y=this.inputNames.indexOf(f);if(y===-1)throw new Error(`invalid input '${f}'`);n.push(m),i.push(y)});let s=[],a=[];Object.entries(t).forEach(p=>{let f=p[0],m=p[1],y=this.outputNames.indexOf(f);if(y===-1)throw new Error(`invalid output '${f}'`);s.push(m),a.push(y)});let o=n.map((p,f)=>Ki(p,()=>`input "${this.inputNames[i[f]]}"`)),u=s.map((p,f)=>p?Ki(p,()=>`output "${this.outputNames[a[f]]}"`):null),d=await Bp(this.sessionId,i,o,a,u,r),h={};for(let p=0;p<d.length;p++)h[this.outputNames[a[p]]]=s[p]??Up(d[p]);return Fe(),h}startProfiling(){}endProfiling(){Np(this.sessionId)}}}),Lp={};Ht(Lp,{OnnxruntimeWebAssemblyBackend:()=>Yi,initializeFlags:()=>Xi,wasmBackend:()=>qp});var Xi,Yi,qp,Eg=F(()=>{Ge(),Dp(),kg(),Xi=()=>{(typeof $e.wasm.initTimeout!="number"||$e.wasm.initTimeout<0)&&($e.wasm.initTimeout=0);let e=$e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),$e.wasm.simd=!1),typeof $e.wasm.proxy!="boolean"&&($e.wasm.proxy=!1),typeof $e.wasm.trace!="boolean"&&($e.wasm.trace=!1),typeof $e.wasm.numThreads!="number"||!Number.isInteger($e.wasm.numThreads)||$e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)$e.wasm.numThreads=1;else{let t=typeof navigator>"u"?hm("node:os").cpus().length:navigator.hardwareConcurrency;$e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Yi=class{async init(e){Xi(),await zp(),await Mp(e)}async createInferenceSessionHandler(e,t){let r=new Pp;return await r.loadModel(e,t),r}},qp=new Yi});Ge(),Ge(),Ge();var Cg="1.27.0";{let e=(Eg(),tr(Lp)).wasmBackend;jt("webgpu",e,5),jt("webnn",e,5),jt("cpu",e,10),jt("wasm",e,10)}Object.defineProperty($e.versions,"web",{value:Cg,enumerable:!0});/**
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
 */const zg=114;function Mg(e,t,r){const n=Math.min(r/e,r/t),i=Math.round(e*n),s=Math.round(t*n);return{scale:n,padX:Math.floor((r-i)/2),padY:Math.floor((r-s)/2),resizedWidth:i,resizedHeight:s}}function Ag(e,t,r){const{width:n,height:i,channels:s,data:a}=e,o=new Uint8Array(t*r*3),u=n/t,d=i/r;for(let h=0;h<r;h++){const p=(h+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(p))),m=Math.min(i-1,f+1),y=Math.max(0,Math.min(1,p-f));for(let w=0;w<t;w++){const v=(w+.5)*u-.5,$=Math.max(0,Math.min(n-1,Math.floor(v))),b=Math.min(n-1,$+1),I=Math.max(0,Math.min(1,v-$)),T=(f*n+$)*s,k=(f*n+b)*s,z=(m*n+$)*s,C=(m*n+b)*s,x=(h*t+w)*3;for(let R=0;R<3;R++){const N=a[T+R]*(1-I)+a[k+R]*I,H=a[z+R]*(1-I)+a[C+R]*I;o[x+R]=Math.min(255,Math.max(0,Math.round(N*(1-y)+H*y)))}}}return o}function Og(e,t){const r=Mg(e.width,e.height,t),n=Ag(e,r.resizedWidth,r.resizedHeight),i=t*t,s=new Float32Array(3*i).fill(zg/255);for(let a=0;a<r.resizedHeight;a++){const o=(a+r.padY)*t+r.padX,u=a*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const h=(u+d)*3,p=o+d;s[p]=n[h]/255,s[i+p]=n[h+1]/255,s[2*i+p]=n[h+2]/255}}return{tensor:s,params:r}}function Rg(e,t,r,n){const i=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const o=e[a*6],u=e[a*6+1],d=e[a*6+2],h=e[a*6+3],p=e[a*6+4],f=e[a*6+5];if(p<r)continue;const m=Math.round(f);if(m<0||m>=n)continue;const y=(o-t.padX)/t.scale,w=(u-t.padY)/t.scale,v=(d-t.padX)/t.scale,$=(h-t.padY)/t.scale;i.push({classIndex:m,confidence:p,box:[Math.trunc(y),Math.trunc(w),Math.trunc(v-y),Math.trunc($-w)],boxFloat:[y,w,v-y,$-w]})}return i}function _r(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Wp(e){if(e.length===0)return Number.NaN;const t=[...e].sort((n,i)=>n-i),r=Math.floor(t.length/2);return t.length%2===1?t[r]:(t[r-1]+t[r])/2}function Gp(e,t){if(e.length===0)return Number.NaN;const r=[...e].sort((a,o)=>a-o),n=t/100*(r.length-1),i=Math.floor(n),s=Math.ceil(n);return i===s?r[i]:r[i]*(s-n)+r[s]*(n-i)}const Bg=.6,Ng=.8;function Vp(e,t,r){const n=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<r)continue;const o=(e[s*6]-t.padX)/t.scale,u=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,h=(e[s*6+3]-t.padY)/t.scale,p=_r((o+d)/2),f=_r((u+h)/2),m=_r((d-o+(h-u))/4);m>=1&&n.push({cx:p,cy:f,r:m})}return n}function Dg(e){const t=[];for(const r of[...e].sort((n,i)=>n.r-i.r)){const n=(Bg*r.r)**2;t.every(i=>(r.cx-i.cx)**2+(r.cy-i.cy)**2>n)&&t.push(r)}return t}function Ug(e){const t=[];for(const r of[...e].sort((n,i)=>i.r-n.r))t.every(n=>Math.hypot(r.cx-n.cx,r.cy-n.cy)>=Ng*(r.r+n.r))&&t.push(r);return t}function Pg(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Wp(e.map(r=>r.r))*1.5));return[...e].sort((r,n)=>{const i=Math.floor(r.cy/t),s=Math.floor(n.cy/t);return i!==s?i-s:r.cx-n.cx})}function Fp(e,t,r){const n=Vp(e,t,r);return n.length===0?[]:Pg(Ug(Dg(n)))}function Lg(e,t,r){return Vp(e,t,r)}function Hp(e,t,r){const n=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<r||n.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return n}const jp=["brown","grey","blue","green","yellow","red","purple"],qg={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Kp(e,t,r){return Rg(e,t,r,jp.length).map(n=>{const i=jp[n.classIndex];return{color:i,family:qg[i],box:n.box,confidence:n.confidence}})}const Wg=8,Gg=.8,Xp=1.25;function Vg(e){if(e.length<Wg)return[];const t=[],r=[];for(const a of e){const[,,o,u]=a.box;o>u*Xp?t.push(a):u>o*Xp&&r.push(a)}const[n,i,s]=t.length>=r.length?[t,r,"vertical"]:[r,t,"horizontal"];return n.length<Gg*e.length||i.length===0?[]:i.map(a=>({family:a.family,color:a.color,box:[...a.box],reason:`${a.color} banner sits ${s} while ${n.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const dt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function wr(e,t,r){const n=Math.max(e,t,r),i=Math.min(e,t,r),s=n-i,a=n===0?0:Math.round(255*s/n);if(s===0)return{h:0,s:a,v:n};let o;return n===e?o=60*(t-r)/s:n===t?o=120+60*(r-e)/s:o=240+60*(e-t)/s,o<0&&(o+=360),{h:Math.round(o/2),s:a,v:n}}const Fg=.42,Hg=22,jg=43,Kg=120,Xg=1.5,Yg=.72,Zg=110,Yp=3;function br(e,t,r){const{width:n,height:i,channels:s,data:a}=e;if(n<4||i<4)return 0;const o=Math.floor(n/2),u=Math.floor(i/2),d=Math.trunc(Math.min(n,i)*Fg);if(d<1)return 0;let h=0;for(let p=0;p<i;p++)for(let f=0;f<n;f++){if((f-o)**2+(p-u)**2>d*d)continue;const m=(p*n+f)*s,y=a[m],w=a[m+1],v=a[m+2];!t&&y>=250&&w>=250&&v>=250||(r(y,w,v),h+=1)}return h}function Qg(e){let t=0,r=0,n=0,i=br(e,!1,(s,a,o)=>{const u=wr(s,a,o);t+=u.h,r+=u.s,n+=u.v});return i===0&&(i=br(e,!0,(s,a,o)=>{const u=wr(s,a,o);t+=u.h,r+=u.s,n+=u.v})),i===0?null:{h:t/i,s:r/i,v:n/i}}function Jg(e){let t=0,r=0,n=br(e,!1,(s,a)=>{t+=s,r+=a});if(n===0&&(n=br(e,!0,(s,a)=>{t+=s,r+=a})),n===0)return null;const i=r/n;return i<=1e-6?null:t/n/i}function e0(e){let t=0;const r=br(e,!0,(n,i,s)=>{t+=wr(n,i,s).s});return r===0?null:t/r}function t0(e){const t=Qg(e);if(t===null||t.s<=Hg)return 1;if(t.s>=Kg){const r=Jg(e);return r!==null&&r>=Xg?6:3}return t.s>=jg?3:6}function r0(e,t){const r=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return r;const n=e.map(a=>a.r).sort((a,o)=>a-o);if(n[0]<=0||!(n[1]>=n[0]*1.12&&n[2]>=n[1]*1.12))return r;const i=[0,1,2].sort((a,o)=>e[a].r-e[o].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>s.get(a))}function n0(e,t){const r=[...t];if(e.length<Yp||t.length!==e.length)return r;const n=e.map(a=>e0(a)),i=n.filter(a=>a!==null);if(i.length<Yp)return r;const s=Wp(i);return s<=0||n.forEach((a,o)=>{a!==null&&r[o]!==1&&a<Yg*s&&a<Zg&&(r[o]=1)}),r}function Zp(e,t){const{cx:r,cy:n,r:i}=t,s=Math.max(0,r-i),a=Math.max(0,n-i),o=Math.min(e.width,r+i),u=Math.min(e.height,n+i),d=Math.max(0,o-s),h=Math.max(0,u-a),p=new Uint8Array(d*h*3);for(let f=0;f<h;f++)for(let m=0;m<d;m++){const y=(f*d+m)*3;if((m+s-r)**2+(f+a-n)**2<=i*i){const v=((f+a)*e.width+(m+s))*e.channels;p[y]=e.data[v],p[y+1]=e.data[v+1],p[y+2]=e.data[v+2]}else p[y]=255,p[y+1]=255,p[y+2]=255}return{width:d,height:h,channels:3,data:p}}function i0(e,t){const r=t.map(s=>Zp(e,s)),n=r.map(s=>t0(s)),i=r0(t,n);return n0(r,i)}function a0(e){const{width:t,height:r,channels:n,data:i}=e,s=new Uint8Array(t*r);for(let a=0,o=0;a<s.length;a++,o+=n)s[a]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:r,data:s}}function Qp(e,t,r){const n=new Uint8Array(t*r),i=e.width/t,s=e.height/r;for(let a=0;a<r;a++){const o=a*s,u=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const h=d*i,p=Math.min((d+1)*i,e.width);let f=0,m=0;for(let y=Math.floor(o);y<u;y++){const w=Math.min(y+1,u)-Math.max(y,o);if(!(w<=0))for(let v=Math.floor(h);v<p;v++){const $=Math.min(v+1,p)-Math.max(v,h);$<=0||(f+=e.data[y*e.width+v]*$*w,m+=$*w)}}n[a*t+d]=Math.min(255,Math.max(0,_r(f/m)))}}return{width:t,height:r,data:n}}function s0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const r=e.data.length;let n=0;for(;n<256&&t[n]===0;)n+=1;const i=new Uint8Array(r);if(n>=255||t[n]===r)return i.fill(n<256?n:0),{width:e.width,height:e.height,data:i};const s=255/(r-t[n]),a=new Uint8Array(256);let o=0;for(let u=n+1;u<256;u++)o+=t[u],a[u]=Math.min(255,Math.max(0,_r(o*s)));for(let u=0;u<r;u++)i[u]=a[e.data[u]];return{width:e.width,height:e.height,data:i}}function o0(e){const{width:t,height:r,data:n}=e,i=new Uint8Array(t*r);for(let s=0;s<r;s++)for(let a=0;a<t;a++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const h=a+d,p=s+u;if(!(h<0||h>=t||p<0||p>=r)&&n[p*t+h]===0){o=!1;break}}i[s*t+a]=o&&n[s*t+a]>0?255:0}return{width:t,height:r,data:i}}function u0(e){const{width:t,height:r,data:n}=e,i=new Uint8Array(t*r);for(let s=0;s<r;s++)for(let a=0;a<t;a++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const h=a+d,p=s+u;if(h>=0&&h<t&&p>=0&&p<r&&n[p*t+h]>0){o=!0;break}}i[s*t+a]=o?255:0}return{width:t,height:r,data:i}}function Zi(e){const{width:t,height:r,data:n}=e,i=new Int32Array(t*r),s=[],a=new Int32Array(t*r);let o=1;for(let u=0;u<n.length;u++){if(n[u]===0||i[u]!==0)continue;let d=0,h=0;a[h++]=u,i[u]=o;let p=0,f=0,m=0;for(;d<h;){const y=a[d++],w=y%t,v=y/t|0;p+=1,f+=w,m+=v;for(let $=-1;$<=1;$++)for(let b=-1;b<=1;b++){if(b===0&&$===0)continue;const I=w+b,T=v+$;if(I<0||I>=t||T<0||T>=r)continue;const k=T*t+I;n[k]>0&&i[k]===0&&(i[k]=o,a[h++]=k)}}s[o]={area:p,centroidX:f/p,centroidY:m/p},o+=1}return{labels:i,stats:s}}function l0(e,t,r){return Jp(Float32Array.from(e.data),e.width,t,r)}function Jp(e,t,r,n){const i=new Float32Array(t*t),s=t/2,a=-r*Math.PI/180,o=Math.cos(a),u=Math.sin(a);for(let d=0;d<t;d++)for(let h=0;h<t;h++){const p=h-s,f=d-s,m=o*p-u*f+s,y=u*p+o*f+s,w=Math.floor(m),v=Math.floor(y),$=m-w,b=y-v,I=(z,C)=>z>=0&&z<t&&C>=0&&C<t?e[C*t+z]:n,T=I(w,v)*(1-$)+I(w+1,v)*$,k=I(w,v+1)*(1-$)+I(w+1,v+1)*$;i[d*t+h]=T*(1-b)+k*b}return i}const d0=.9,c0=.34,p0=[.55,.6,.66,.72],h0=22,f0=88,m0=35,Qt=28,Qi=4,g0=Array.from({length:15},(e,t)=>-21+t*3),eh=[-2,0,2],y0=3,_0=.3;function w0(e){return e.templates.flatMap(({label:t,bits:r})=>{const n=Uint8Array.from(atob(r),i=>i.charCodeAt(0));return n.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(n)}]})}function b0(e){let t=e.width,r=-1,n=e.height,i=-1,s=0;for(let w=0;w<e.height;w++)for(let v=0;v<e.width;v++)e.data[w*e.width+v]>0&&(s+=1,t=Math.min(t,v),r=Math.max(r,v),n=Math.min(n,w),i=Math.max(i,w));if(s<8)return null;const a=r-t+1,o=i-n+1,u=Math.max(o,a),d=new Uint8Array(u*u),h=Math.floor((u-a)/2),p=Math.floor((u-o)/2);for(let w=0;w<o;w++)for(let v=0;v<a;v++)d[(w+p)*u+(v+h)]=e.data[(w+n)*e.width+(v+t)];const f=Qt-2*Qi,m=Qp({width:u,height:u,data:d},f,f),y=new Float32Array(Qt*Qt);for(let w=0;w<f;w++)for(let v=0;v<f;v++)y[(w+Qi)*Qt+(v+Qi)]=m.data[w*f+v]>110?1:0;return y}function $0(e,t){const{width:r,height:n,channels:i,data:s}=e,a=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(r,n)*c0);if(u<4)return null;const d=a-u,h=o-u,p=2*u,f=2*u;if(p<6||f<6)return null;const m=new Int16Array(p*f),y=new Int16Array(p*f),w=new Int16Array(p*f),v=new Uint8Array(p*f),$=[],b=Math.min(p,f)/2;for(let D=0;D<p;D++)for(let Q=0;Q<f;Q++){const M=((D+d)*r+(Q+h))*i,{h:L,s:q,v:W}=wr(s[M],s[M+1],s[M+2]),re=D*f+Q;m[re]=L,y[re]=q,w[re]=W,Math.sqrt((Q-f/2)**2+(D-p/2)**2)/b<=t&&(v[re]=1,$.push(W))}if($.length<16)return null;const I=Gp($,55);let T=0,k=0,z=0;const C=D=>m[D]>=h0&&m[D]<=f0&&y[D]>=m0,x=D=>w[D]>=I&&y[D]<=95&&!C(D)&&v[D]===1;for(let D=0;D<p*f;D++)v[D]===1&&(z+=1,w[D]>=130&&!C(D)&&(T+=1),x(D)&&(k+=1));const R=T>.5*z&&k<.15*z,N=new Uint8Array(p*f);if(R){const D=Gp($,45);for(let Q=0;Q<p*f;Q++)N[Q]=v[Q]===1&&w[Q]<=D?255:0}else for(let D=0;D<p*f;D++)N[D]=x(D)?255:0;const H={width:f,height:p,data:N},G=o0(H);let V=Zi(G),O=V;if(V.stats.length<=1&&(V=Zi(H),O=V,V.stats.length<=1))return null;const j=Math.min(p,f)/2;let K=0,Y=-1;for(let D=1;D<O.stats.length;D++){const Q=O.stats[D];if(Q===void 0)continue;const M=Math.hypot(Q.centroidX-f/2,Q.centroidY-p/2)/j,L=Q.area*(1-.6*Math.min(M,1));L>Y&&(Y=L,K=D)}if(K===0)return null;const ue=new Uint8Array(p*f);for(let D=0;D<p*f;D++)ue[D]=O.labels[D]===K?255:0;return b0(u0({width:f,height:p,data:ue}))}function v0(e,t,r,n,i,s){const a=Qt;let o=0,u=0;for(let d=0;d<a;d++){const h=d-s;if(!(h<0||h>=a))for(let p=0;p<a;p++){const f=p-i;if(f<0||f>=a)continue;const m=e[h*a+f];m!==0&&(u+=m,o+=m*r[d*a+p])}}return o/(u+n-o+1e-6)}function x0(e,t){const r=t.reduce((i,s)=>i+s,0);let n=-1;for(const i of g0){const s=i===0?e:Jp(e,Qt,i,0),a=s.reduce((o,u)=>o+u,0);for(const o of eh)for(const u of eh){const d=v0(s,a,t,r,o,u);d>n&&(n=d)}}return n}function S0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const r=[];for(const a of p0){const o=$0(e,a);if(o!==null)for(const{label:u,bits:d}of t)r.push([x0(o,d),u])}if(r.length===0)return[null,0];if(r.sort((a,o)=>o[0]-a[0]),r[0][0]<_0)return[null,0];const n=new Map;for(const[a,o]of r.slice(0,y0))n.set(o,(n.get(o)??0)+a);let i=0,s=-1;for(const[a,o]of n)o>s&&(s=o,i=a);return[i,r[0][0]]}const ct=48,T0=320;function I0(e){return["blank",...e.characters," "]}function k0(e,t,r){let n="";const i=[];for(let a=0;a<e.length;a++){const o=e[a];o!==0&&(a>0&&e[a-1]===o||(n+=r[o]??"",i.push(t[a])))}if(i.length===0)return["",0];const s=i.reduce((a,o)=>a+o,0)/i.length;return[n,s]}function E0(e,t){const r=Math.trunc(ct*t),n=e.width/e.height,i=Math.ceil(ct*n)>r?r:Math.ceil(ct*n),s=new Float32Array(3*ct*r),a=ct*r,o=e.width/i,u=e.height/ct;for(let d=0;d<ct;d++){const h=(d+.5)*u-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(h))),f=Math.min(e.height-1,p+1),m=Math.max(0,Math.min(1,h-p));for(let y=0;y<i;y++){const w=(y+.5)*o-.5,v=Math.max(0,Math.min(e.width-1,Math.floor(w))),$=Math.min(e.width-1,v+1),b=Math.max(0,Math.min(1,w-v));for(let I=0;I<3;I++){const T=2-I,k=(p*e.width+v)*e.channels+T,z=(p*e.width+$)*e.channels+T,C=(f*e.width+v)*e.channels+T,x=(f*e.width+$)*e.channels+T,R=e.data[k]*(1-b)+e.data[z]*b,N=e.data[C]*(1-b)+e.data[x]*b,H=R*(1-m)+N*m;s[I*a+d*r+y]=(H/255-.5)/.5}}}return{tensor:s,width:r}}const C0=62,z0=8,M0=5;function Ji(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function A0(e,t){const r=e.length,n=t.length;if(r===0||n===0)return 0;let i=new Int32Array(n+1),s=new Int32Array(n+1);for(let a=1;a<=r;a++){for(let o=1;o<=n;o++)s[o]=e[a-1]===t[o-1]?i[o-1]+1:Math.max(i[o],s[o-1]);[i,s]=[s,i]}return i[n]}function Xr(e,t){return e.length===0&&t.length===0?100:200*A0(e,t)/(e.length+t.length)}function th(e,t){const r=n=>n.split(/\s+/).filter(Boolean).sort().join(" ");return Xr(r(e),r(t))}function O0(e,t){const r=new Set(e.split(/\s+/).filter(Boolean)),n=new Set(t.split(/\s+/).filter(Boolean)),i=[...r].filter(h=>n.has(h)).sort(),s=[...r].filter(h=>!n.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=i.join(" "),u=[o,s.join(" ")].filter(Boolean).join(" "),d=[o,a.join(" ")].filter(Boolean).join(" ");return o.length>0&&(s.length===0||a.length===0)?100:Math.max(Xr(o,u),Xr(o,d),Xr(u,d))}function R0(e){const t=new Set,r=[];for(const n of e){const i=n.nameFr??n.name;for(const s of[Ji(i),Ji(n.name)])if(s)for(const a of[s,s.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),r.push({key:a,id:n.id,display:i,...n.kind!==void 0?{kind:n.kind}:{}}))}return r}function B0(e,t){const r=Ji(e);if(!r||t.length===0)return null;const i=R0(t).map(h=>({...h,score:O0(r,h.key)})).sort((h,p)=>p.score-h.score).slice(0,z0).filter(h=>h.score>=C0);if(i.length===0)return null;const s=i[0].score,a=i.filter(h=>s-h.score<=M0),o=[...new Set(r.split(/\s+/).filter(Boolean))].join(" ");let u=a[0],d=[th(o,u.key),u.score];for(const h of a.slice(1)){const p=[th(o,h.key),h.score];(p[0]>d[0]||p[0]===d[0]&&p[1]>d[1])&&(u=h,d=p)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const N0=2560,D0=.3,U0=.5,P0=1.6,L0=3,q0=5;function W0(e){const t=Math.min(1,N0/Math.max(e.width,e.height)),r=Math.max(32,Math.round(e.width*t/32)*32),n=Math.max(32,Math.round(e.height*t/32)*32),i=r*n,s=new Float32Array(3*i),a=e.width/r,o=e.height/n;for(let u=0;u<n;u++){const d=(u+.5)*o-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,h+1),f=Math.max(0,Math.min(1,d-h));for(let m=0;m<r;m++){const y=(m+.5)*a-.5,w=Math.max(0,Math.min(e.width-1,Math.floor(y))),v=Math.min(e.width-1,w+1),$=Math.max(0,Math.min(1,y-w));for(let b=0;b<3;b++){const I=2-b,T=(h*e.width+w)*e.channels+I,k=(h*e.width+v)*e.channels+I,z=(p*e.width+w)*e.channels+I,C=(p*e.width+v)*e.channels+I,x=e.data[T]*(1-$)+e.data[k]*$,R=e.data[z]*(1-$)+e.data[C]*$,N=x*(1-f)+R*f;s[b*i+u*r+m]=(N/255-.5)/.5}}}return{tensor:s,width:r,height:n}}function G0(e,t,r){const n=new Uint8Array(e.length);for(let i=0;i<r;i++){const s=i===r-1;for(let a=0;a<t;a++){const o=i*t+a;let u=e[o];if(a+1<t&&e[o+1]>u&&(u=e[o+1]),!s){const d=o+t;e[d]>u&&(u=e[d]),a+1<t&&e[d+1]>u&&(u=e[d+1])}n[o]=u}}return n}function V0(e){if(e.length<3)return e;const t=[...e].sort((s,a)=>s[0]-a[0]||s[1]-a[1]),r=(s,a,o)=>(a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0]),n=[];for(const s of t){for(;n.length>=2&&r(n[n.length-2],n[n.length-1],s)<=0;)n.pop();n.push(s)}const i=[];for(let s=t.length-1;s>=0;s--){const a=t[s];for(;i.length>=2&&r(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return n.pop(),i.pop(),n.concat(i)}function F0(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,r=1/0;for(let n=0;n<e.length;n++){const[i,s]=e[n],[a,o]=e[(n+1)%e.length],u=a-i,d=o-s,h=Math.hypot(u,d);if(h===0)continue;const p=u/h,f=d/h;let m=1/0,y=-1/0,w=1/0,v=-1/0;for(const[T,k]of e){const z=T*p+k*f,C=-T*f+k*p;z<m&&(m=z),z>y&&(y=z),C<w&&(w=C),C>v&&(v=C)}const $=y-m,b=v-w,I=$*b;if(I<r){r=I;const T=(m+y)/2,k=(w+v)/2;t={cx:T*p-k*f,cy:T*f+k*p,w:$,h:b,angle:Math.atan2(f,p)}}}return t}function H0(e,t,r,n){const i=Math.cos(n.angle),s=Math.sin(n.angle),a=n.w/2,o=n.h/2,u=Math.abs(a*i)+Math.abs(o*s),d=Math.abs(a*s)+Math.abs(o*i),h=Math.max(0,Math.floor(n.cx-u)),p=Math.min(t-1,Math.ceil(n.cx+u)),f=Math.max(0,Math.floor(n.cy-d)),m=Math.min(r-1,Math.ceil(n.cy+d));let y=0,w=0;for(let v=f;v<=m;v++)for(let $=h;$<=p;$++){const b=$-n.cx,I=v-n.cy,T=b*i+I*s,k=-b*s+I*i;Math.abs(T)<=a&&Math.abs(k)<=o&&(y+=e[v*t+$],w+=1)}return w===0?0:y/w}function j0(e){const t=Math.cos(e.angle),r=Math.sin(e.angle),n=e.w/2,i=e.h/2,a=[...[[e.cx+-n*t- -i*r,e.cy+-n*r+-i*t],[e.cx+n*t- -i*r,e.cy+n*r+-i*t],[e.cx+n*t-i*r,e.cy+n*r+i*t],[e.cx+-n*t-i*r,e.cy+-n*r+i*t]]].sort((w,v)=>w[0]-v[0]),[o,u,d,h]=a,[p,f]=o[1]<=u[1]?[o,u]:[u,o],[m,y]=d[1]<=h[1]?[d,h]:[h,d];return[[p[0],p[1]],[m[0],m[1]],[y[0],y[1]],[f[0],f[1]]]}function K0(e,t,r,n){const{width:i,height:s}=t;let a=new Uint8Array(i*s);for(let m=0;m<a.length;m++)a[m]=e[m]>D0?255:0;a=G0(a,i,s);const o={width:i,height:s,data:a},{labels:u}=Zi(o),d=new Map;for(let m=0;m<s;m++)for(let y=0;y<i;y++){const w=u[m*i+y];if(w===0)continue;let v=d.get(w);v===void 0&&(v=new Map,d.set(w,v));const $=v.get(m);$===void 0?v.set(m,[y,y]):(y<$[0]&&($[0]=y),y>$[1]&&($[1]=y))}const h=r/i,p=n/s,f=[];for(const[m,y]of d){const w=[];for(const[N,[H,G]]of y)w.push([H-.5,N-.5],[H-.5,N+.5],[G+.5,N-.5],[G+.5,N+.5]);const v=F0(V0(w));if(Math.min(v.w,v.h)<L0)continue;const $=H0(e,i,s,v);if($<U0)continue;const b=v.w*v.h*P0/(2*(v.w+v.h)),I={...v,w:v.w+2*b,h:v.h+2*b};if(Math.min(I.w,I.h)<q0+2)continue;const k=j0(I).map(([N,H])=>[Math.min(r,Math.max(0,Math.round(N*h))),Math.min(n,Math.max(0,Math.round(H*p)))]),z=k.map(N=>N[0]),C=k.map(N=>N[1]),x=Math.min(...z),R=Math.min(...C);f.push({quad:k,x,y:R,width:Math.max(...z)-x,height:Math.max(...C)-R,score:$})}return f.sort((m,y)=>y.score-m.score)}function X0(e,t){const[r,n,i,s]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(n[0]-r[0],n[1]-r[1]),Math.hypot(i[0]-s[0],i[1]-s[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(s[0]-r[0],s[1]-r[1]),Math.hypot(i[0]-n[0],i[1]-n[1])))),u=Y0([[0,0],[a,0],[a,o],[0,o]],[r,n,i,s]),d=new Uint8Array(a*o*e.channels);for(let p=0;p<o;p++)for(let f=0;f<a;f++){const m=u[6]*f+u[7]*p+u[8],y=(u[0]*f+u[1]*p+u[2])/m,w=(u[3]*f+u[4]*p+u[5])/m,v=Math.floor(y),$=Math.floor(w),b=y-v,I=w-$,T=Math.max(0,Math.min(e.width-1,v)),k=Math.max(0,Math.min(e.width-1,v+1)),z=Math.max(0,Math.min(e.height-1,$)),C=Math.max(0,Math.min(e.height-1,$+1));for(let x=0;x<e.channels;x++){const R=e.data[(z*e.width+T)*e.channels+x],N=e.data[(z*e.width+k)*e.channels+x],H=e.data[(C*e.width+T)*e.channels+x],G=e.data[(C*e.width+k)*e.channels+x],V=R*(1-b)+N*b,O=H*(1-b)+G*b;d[(p*a+f)*e.channels+x]=Math.round(V*(1-I)+O*I)}}const h={width:a,height:o,channels:e.channels,data:d};return o/a>=1.5?Yr(h,3):h}function Y0(e,t){const r=[],n=[];for(let i=0;i<4;i++){const[s,a]=e[i],[o,u]=t[i];r.push([s,a,1,0,0,0,-o*s,-o*a]),n.push(o),r.push([0,0,0,s,a,1,-u*s,-u*a]),n.push(u)}for(let i=0;i<8;i++){let s=i;for(let o=i+1;o<8;o++)Math.abs(r[o][i])>Math.abs(r[s][i])&&(s=o);[r[i],r[s]]=[r[s],r[i]],[n[i],n[s]]=[n[s],n[i]];const a=r[i][i];for(let o=i;o<8;o++)r[i][o]/=a;n[i]/=a;for(let o=0;o<8;o++){if(o===i)continue;const u=r[o][i];if(u!==0){for(let d=i;d<8;d++)r[o][d]-=u*r[i][d];n[o]-=u*n[i]}}}return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],1]}function Yr(e,t){const r=(t%4+4)%4;if(r===0)return e;const{width:n,height:i,channels:s,data:a}=e,o=r%2===0?n:i,u=r%2===0?i:n,d=new Uint8Array(o*u*s);for(let h=0;h<i;h++)for(let p=0;p<n;p++){let f,m;r===1?(f=i-1-h,m=p):r===2?(f=n-1-p,m=i-1-h):(f=h,m=n-1-p);const y=(h*n+p)*s,w=(m*o+f)*s;for(let v=0;v<s;v++)d[w+v]=a[y+v]}return{width:o,height:u,channels:s,data:d}}const Z0=5e3,Q0=.75,J0=15,ey=1.25,ty=2.4,ry=.003,ny=.85,iy=4,ay=2600,sy=2,rh=.3,nh=.1,ih=.012,oy=22,ah=.5,sh=.12;function ea(e,t){const r=new e.Mat(t.height,t.width,e.CV_8UC3),n=r.data,i=t.channels;for(let s=0,a=t.width*t.height;s<a;s++)n[s*3]=t.data[s*i],n[s*3+1]=t.data[s*i+1],n[s*3+2]=t.data[s*i+2];return r}function uy(e,t,r,n){const i=n.map(ae=>ae[0]),s=n.map(ae=>ae[1]),a=i.reduce((ae,le)=>ae+le,0)/i.length,o=s.reduce((ae,le)=>ae+le,0)/s.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...s)-Math.min(...s));if(u<4)return null;const d=u*iy,h=Math.max(0,Math.trunc(a-d)),p=Math.min(r.width,Math.trunc(a+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(r.height,Math.trunc(o+d));if(p-h<8||m-f<8)return null;const y=Math.max(r.width,r.height)<ay?sy:1,w=ea(e,r),v=ea(e,t),$=new e.Rect(h,f,p-h,m-f),b=w.roi($),I=new e.Mat;y!==1?e.resize(b,I,new e.Size(0,0),y,y,e.INTER_CUBIC):b.copyTo(I);const T=new e.Mat,k=new e.Mat;e.cvtColor(v,T,e.COLOR_RGB2GRAY),e.cvtColor(I,k,e.COLOR_RGB2GRAY);const z=new e.ORB(Z0),C=new e.KeyPointVector,x=new e.KeyPointVector,R=new e.Mat,N=new e.Mat,H=new e.Mat,G=[w,v,b,I,T,k,C,x,R,N,H],V=ae=>{for(const le of G)try{le.delete()}catch{}try{z.delete()}catch{}return ae};if(z.detectAndCompute(T,H,C,R),z.detectAndCompute(k,H,x,N),R.rows<8||N.rows<8)return V(null);const O=new e.BFMatcher(e.NORM_HAMMING),j=new e.DMatchVectorVector;O.knnMatch(R,N,j,2);const K=[],Y=[];for(let ae=0;ae<j.size();ae++){const le=j.get(ae);if(le.size()===2){const xe=le.get(0),Ce=le.get(1);if(xe.distance<Q0*Ce.distance){const Ie=C.get(xe.queryIdx).pt,Ue=x.get(xe.trainIdx).pt;K.push(Ie.x,Ie.y),Y.push(Ue.x,Ue.y)}}}if(j.delete(),O.delete(),K.length/2<8)return V(null);const ue=e.matFromArray(K.length/2,1,e.CV_32FC2,K),D=e.matFromArray(Y.length/2,1,e.CV_32FC2,Y),Q=new e.Mat,M=e.findHomography(ue,D,e.RANSAC,5,Q);let L=0;for(let ae=0;ae<Q.rows;ae++)L+=Q.data[ae];const q=M.rows===3?[...M.data64F]:null;if(ue.delete(),D.delete(),Q.delete(),M.delete(),q===null||L<J0)return V(null);const W=1/y,re=[[W,0,h],[0,W,f],[0,0,1]],Te=[0,1,2].map(ae=>[0,1,2].map(le=>re[ae][0]*q[le]+re[ae][1]*q[3+le]+re[ae][2]*q[6+le]));return V({H:Te,inliers:L})}function ly(e,t,r){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let n=0;for(let u=0;u<4;u++){const[d,h]=e[u],[p,f]=e[(u+1)%4];n+=d*f-p*h}const i=Math.abs(n/2)/(t*r);if(i<ry||i>ny)return!1;const s=e.map((u,d)=>{const h=e[(d+1)%4];return Math.hypot(h[0]-u[0],h[1]-u[1])}),a=Math.min(...s);if(a<1)return!1;const o=Math.max(...s)/a;return o>=ey&&o<=ty}function dy(e,t,r){const n=e[2][0]*t+e[2][1]*r+e[2][2];return[(e[0][0]*t+e[0][1]*r+e[0][2])/n,(e[1][0]*t+e[1][1]*r+e[1][2])/n]}function cy(e,t,r,n){const i=r.width,s=r.height,a=Math.max(8,Math.trunc(rh*i)),o=i+2*a,u=s+2*a;if(o*u>4e7)return null;const d=n.map(G=>[G[0],G[1],G[2]-a*(G[0]+G[1])+0]);for(let G=0;G<3;G++)d[G][2]=n[G][2]-a*n[G][0]-a*n[G][1];const h=ea(e,t),p=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(h,p,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(p,m,e.COLOR_RGB2Lab),h.delete(),f.delete();const y=m.data,w=Math.max(4,Math.trunc(a/3)),v=[[],[],[]],$=(G,V)=>{const O=(V*o+G)*3;v[0].push(y[O]),v[1].push(y[O+1]),v[2].push(y[O+2])};for(let G=0;G<u;G++)for(let V=0;V<o;V++)(G<w||G>=u-w||V<w||V>=o-w)&&$(V,G);const b=G=>{G.sort((O,j)=>O-j);const V=G.length>>1;return G.length%2?G[V]:(G[V-1]+G[V])/2},I=[b(v[0]),b(v[1]),b(v[2])],T=(G,V)=>{const O=(V*o+G)*3,j=y[O]-I[0],K=y[O+1]-I[1],Y=y[O+2]-I[2];return Math.sqrt(j*j+K*K+Y*Y)>oy},k=Math.max(6,Math.trunc(nh*i)),z=Math.max(6,Math.trunc(nh*s)),C=Math.max(2,Math.trunc(ih*i)),x=Math.max(2,Math.trunc(ih*s)),R=G=>{let V=0,O=0;for(const j of G)O=j?O+1:0,O>V&&(V=O);return V/Math.max(1,G.length)},N=G=>{let V,O,j,K,Y;if(G==="L"?(V=a,O=a+s,j=Math.max(0,a-C-k),K=Math.max(0,a-C),Y=!1):G==="R"?(V=a,O=a+s,j=a+i+C,K=Math.min(o,a+i+C+k),Y=!1):(V=Math.max(0,a-x-z),O=Math.max(0,a-x),j=a,K=a+i,Y=!0),O<=V||K<=j)return 0;const ue=[];if(Y)for(let D=j;D<K;D++){let Q=0;for(let M=V;M<O;M++)T(D,M)&&Q++;ue.push(Q/(O-V)>ah)}else for(let D=V;D<O;D++){let Q=0;for(let M=j;M<K;M++)T(M,D)&&Q++;ue.push(Q/(K-j)>ah)}return R(ue)},H={L:N("L"),R:N("R"),T:N("T")};return p.delete(),m.delete(),H}function py(e,t){if(e.length<4||t.length===0)return null;const r=e.map(w=>[w[0],w[1]]),n=Math.hypot(r[1][0]-r[0][0],r[1][1]-r[0][1]),i=Math.hypot(r[2][0]-r[3][0],r[2][1]-r[3][1]),s=.5*(n+i),a=rh*s;if(!(a>0))return null;const o=r.reduce((w,v)=>w+v[0],0)/r.length,u=r.reduce((w,v)=>w+v[1],0)/r.length,d={T:[0,1],R:[1,2],L:[0,3]},h=[...r];for(const w of["L","R","T"]){if(!t.includes(w))continue;const[v,$]=d[w],b=r[v],I=r[$];let T=-(I[1]-b[1]),k=I[0]-b[0];const z=(b[0]+I[0])/2,C=(b[1]+I[1])/2;T*(z-o)+k*(C-u)<0&&(T=-T,k=-k);const x=Math.hypot(T,k);x<=1e-6||(T=T/x*a,k=k/x*a,h.push([b[0]+T,b[1]+k],[I[0]+T,I[1]+k]))}const p=h.map(w=>w[0]),f=h.map(w=>w[1]),m=Math.round(Math.min(...p)),y=Math.round(Math.min(...f));return{x:m,y,width:Math.round(Math.max(...p))-m,height:Math.round(Math.max(...f))-y}}function hy(e,t,r,n){const i=uy(e,r,t,n);if(i===null)return null;const a=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([d,h])=>dy(i.H,d,h));if(!ly(a,t.width,t.height))return null;const o=cy(e,t,r,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=sh);return{built:Math.max(o.L,o.R,o.T)>=sh,footprint:a,overflow:u,inliers:i.inliers}}const oh=128,fy=.56,my=15,gy=.58,yy=70,_y=50,wy=.12,by=.2,$y=.1,vy=.17,uh=.15;function xy(e){const t=new Map;for(const[r,n]of Object.entries(e.templates)){const i=Uint8Array.from(atob(n),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(r,i)}return t}function lh(e,t){const{width:r,height:n,channels:i,data:s}=e,a=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(r,n)*.5*t);if(u<1)return e;const d=Math.max(0,a-u),h=Math.max(0,o-u),p=Math.min(r,a+u),f=Math.min(n,o+u),m=p-d,y=f-h,w=new Uint8Array(m*y*i);for(let v=0;v<y;v++){const $=((v+h)*r+d)*i;w.set(s.subarray($,$+m*i),v*m*i)}return{width:m,height:y,channels:i,data:w}}function Sy(e){const t=lh(e,fy),r=a0(t),n=Qp(r,oh,oh);return s0(n)}function Ty(e,t){const r=e.length;let n=0,i=0;for(let u=0;u<r;u++)n+=e[u],i+=t[u];n/=r,i/=r;let s=0,a=0,o=0;for(let u=0;u<r;u++){const d=e[u]-n,h=t[u]-i;s+=d*h,a+=d*d,o+=h*h}return s/(Math.sqrt(a*o)+1e-6)}function Iy(e){const t=new Map([["masonry",0],["strategy",0]]),r=lh(e,gy),{width:n,height:i,channels:s,data:a}=r,o=n*i||1;let u=0,d=0;for(let f=0;f<n*i;f++){const m=f*s,{h:y,s:w,v}=wr(a[m],a[m+1],a[m+2]);w>=yy&&v>=_y&&(y>=95&&y<=130&&(u+=1),(y<=8||y>=170)&&(d+=1))}const h=u/o,p=d/o;return h>=wy&&t.set("masonry",uh*Math.min(1,h/by)),p>=$y&&t.set("strategy",uh*Math.min(1,p/vy)),t}function ky(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const r=Sy(e);let n=0;for(const d of r.data)n+=d;const i=n/r.data.length,s=[];for(let d=0;d<360;d+=my)s.push(l0(r,d,i));const a=new Map;for(const[d,h]of t){let p=-1/0;for(const f of s){const m=Ty(f,h);m>p&&(p=m)}a.set(d,p)}for(const[d,h]of Iy(e))h>0&&a.has(d)&&a.set(d,a.get(d)+h);let o="",u=-1/0;for(const[d,h]of a)h>u&&(o=d,u=h);return[o,u]}const bt="/7wd-scorer/models/";let dh=!1;const Zr=new Map;function ch(){var e;dh||($e.wasm.wasmPaths="/7wd-scorer/ort/",$e.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,dh=!0)}const ta=new Set;function Ey(e){ch();let t=Zr.get(e);return t===void 0&&(t=ir.create(`${bt}${dt[e].onnx}`,{executionProviders:ta.has(e)?["wasm"]:["webgpu","wasm"]}),Zr.set(e,t),t.catch(()=>Zr.delete(e))),t}let ra=null,na=null;const Cy=.75,zy=4,My=.65,Ay=3e4;let ia=null;function Oy(){return ia===null&&(ia=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),ia}const ph=new Map;function Ry(e){let t=ph.get(e);return t===void 0&&(t=(async()=>{try{const r=await fetch(`${bt}wonder-refs/${e}.jpg`);if(!r.ok)return null;const n=await createImageBitmap(await r.blob()),s=new OffscreenCanvas(n.width,n.height).getContext("2d");s.drawImage(n,0,0);const a=s.getImageData(0,0,n.width,n.height);return{width:n.width,height:n.height,channels:4,data:new Uint8Array(a.data.buffer)}}catch{return null}})(),ph.set(e,t)),t}const By=.6,Ny=12,Dy=45e3;let aa=null;function Uy(){return aa===null&&(ch(),aa=(async()=>{try{const[e,t,r,n]=await Promise.all([ir.create(`${bt}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),ir.create(`${bt}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${bt}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${bt}wonder_names.json`).then(i=>i.ok?i.json():null)]);return r===null||n===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:I0(r),catalog:n.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),aa}async function Py(e,t){const r=Math.max(T0/ct,t.width/t.height),{tensor:n,width:i}=E0(t,r),s={[e.rec.inputNames[0]]:new Le("float32",n,[1,3,ct,i])},a=(await e.rec.run(s))[e.rec.outputNames[0]],[o,u,d]=a.dims,h=a.data,p=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let y=0,w=-1/0;const v=m*d;for(let $=0;$<d;$++){const b=h[v+$];b>w&&(w=b,y=$)}p[m]=y,f[m]=w}return k0(p,f,e.charset)}async function Ly(e,t){const r=await Uy();if(r===null)return{wonders:[],aborted:!1};const n=new Map,i=Date.now()+Dy;let s=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){s=!0;break}t(`wonder names: rotation ${a*90}°…`);const o=Yr(e,a),u=W0(o),d={[r.det.inputNames[0]]:new Le("float32",u.tensor,[1,3,u.height,u.width])},h=(await r.det.run(d))[r.det.outputNames[0]],p=K0(h.data,u,o.width,o.height).slice(0,Ny);console.debug(`[wonders-ocr] rot ${a*90}: ${p.length} det boxes`,p.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of p){if(Date.now()>i){s=!0;break e}const m=X0(o,f.quad);if(m.width<m.height*1.5)continue;const[y,w]=await Py(r,m);if(console.debug(`[wonders-ocr] rec "${y}" @${w.toFixed(2)}`),w<By||y.trim().length<zy)continue;const v=B0(y,r.catalog);if(console.debug("[wonders-ocr] fuzzy",v),v===null||v.confidence<Cy||v.kind!=="wonder")continue;const $=n.get(v.id);($===void 0||v.confidence>$.confidence)&&n.set(v.id,{id:v.id,name:v.name,confidence:v.confidence,nameBox:hh(f,a,e.width,e.height)})}}return{wonders:[...n.values()],aborted:s}}function hh(e,t,r,n){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const s=(p,f)=>i===1?[f,n-1-p]:i===2?[r-1-p,n-1-f]:[r-1-f,p],a=[s(e.x,e.y),s(e.x+e.width,e.y+e.height)],o=a.map(p=>p[0]),u=a.map(p=>p[1]),d=Math.min(...o),h=Math.min(...u);return{x:d,y:h,width:Math.max(...o)-d,height:Math.max(...u)-h}}function qy(){return na===null&&(na=fetch(`${bt}laurel_gallery.json`).then(async e=>e.ok?w0(await e.json()):[]).catch(()=>[])),na}function Wy(e,t,r,n){return Gy(e,t-n,r-n,2*n,2*n)}function Gy(e,t,r,n,i){const s=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(r)),o=Math.min(e.width,Math.round(t+n)),u=Math.min(e.height,Math.round(r+i)),d=Math.max(0,o-s),h=Math.max(0,u-a),p=new Uint8Array(d*h*3);for(let f=0;f<h;f++)for(let m=0;m<d;m++){const y=((f+a)*e.width+(m+s))*e.channels,w=(f*d+m)*3;p[w]=e.data[y],p[w+1]=e.data[y+1],p[w+2]=e.data[y+2]}return{width:d,height:h,channels:3,data:p}}function Vy(){return ra===null&&(ra=fetch(`${bt}token_templates.json`).then(async e=>e.ok?xy(await e.json()):new Map).catch(()=>new Map)),ra}async function fh(e){const t=await createImageBitmap(e);try{const n=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(n===null)throw new Error("OffscreenCanvas 2D context unavailable.");n.drawImage(t,0,0);const{data:i}=n.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Lt(e,t){const r=dt[e],{tensor:n,params:i}=Og(t,r.input),s=async()=>{const a=await Ey(e),o={[a.inputNames[0]]:new Le("float32",n,[1,3,r.input,r.input])};return{rows:(await a.run(o))[a.outputNames[0]].data,params:i}};try{return await s()}catch(a){if(ta.has(e))throw a;return ta.add(e),Zr.delete(e),await s()}}const Fy=6,Hy=2,jy=5,Ky=2;async function Xy(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},r=await fh(e),n=await Lt("banner",r),i=Kp(n.rows,n.params,dt.banner.conf);if(t.banners=i.length,i.length>=Fy)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await Lt("laurel",r),a=Hp(s.rows,s.params,dt.laurel.conf);if(t.laurels=a.length,a.length>=Hy)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const o=await Lt("coin",r),u=Fp(o.rows,o.params,dt.coin.conf);return t.coins=u.length,u.length>=jy?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Ky?{...t,kind:"board",confidence:.4}:t}function Yy(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function Zy(e,t,r,n){const i={},s=[],a=[],o=[],u=[],d=[];let h=0,p=0,f=0,m=0,y=0;for(const b of e){y+=1;const I=`${t} photo ${y}/${e.length}`;n(`${I}: reading pixels…`);const T=await fh(b);n(`${I}: card banners…`);const k=await Lt("banner",T),z=Kp(k.rows,k.params,dt.banner.conf);n(`${I}: progress tokens…`);const C=await Lt("token",T),x=await Vy(),R=[];for(const M of Lg(C.rows,C.params,dt.token.conf)){R.push({cx:M.cx,cy:M.cy,r:M.r});const[L,q]=ky(Zp(T,M),x);L===""?p+=1:o.some(W=>W.id===L)||o.push({id:L,center:[M.cx,M.cy],radius:M.r,confidence:Math.round(q*1e4)/1e4})}n(`${I}: coins…`);const N=await Lt("coin",T),H=Fp(N.rows,N.params,dt.coin.conf).filter(M=>!R.some(L=>(M.cx-L.cx)**2+(M.cy-L.cy)**2<=M.r*M.r)),G=i0(T,H),V=[];if(H.forEach((M,L)=>{const q=G[L];h+=q,V.push({denomination:q,center:[M.cx,M.cy],radius:M.r,denomSource:"colour"})}),V.length>=2){const M=V.map(q=>q.radius).sort((q,W)=>q-W),L=M.length%2===1?M[(M.length-1)/2]:(M[M.length/2-1]+M[M.length/2])/2;if(L>0)for(const q of V)q.radius/L>2&&(q.suspect=!0,q.suspectReason=`radius ${q.radius}px is ${(q.radius/L).toFixed(1)}x the photo's median coin radius — probably not a coin`)}a.push(...V),n(`${I}: wonder names…`);const O=await Ly(T,M=>n(`${I}: ${M}`)),j=[],K=Date.now()+Ay,Y=O.wonders.length>0?await Oy():null;for(const M of O.wonders){let L=null;if(Y!==null&&Date.now()<K){n(`${I}: registering ${M.name}…`);try{const q=await Ry(M.id);if(q!==null){const W=hy(Y,T,q,[[M.nameBox.x,M.nameBox.y],[M.nameBox.x+M.nameBox.width,M.nameBox.y],[M.nameBox.x+M.nameBox.width,M.nameBox.y+M.nameBox.height],[M.nameBox.x,M.nameBox.y+M.nameBox.height]]);if(W!==null){const re=W.footprint.map(xe=>xe[0]),Te=W.footprint.map(xe=>xe[1]),ae=Math.max(0,Math.round(Math.min(...re))),le=Math.max(0,Math.round(Math.min(...Te)));L={built:W.built,boundingBox:{x:ae,y:le,width:Math.min(T.width,Math.round(Math.max(...re)))-ae,height:Math.min(T.height,Math.round(Math.max(...Te)))-le},tuckRegion:py(W.footprint,W.overflow)}}}}catch(q){console.warn(`[wonders-reg] ${M.id} failed:`,q)}}if(L!==null){const q=L.tuckRegion??L.boundingBox;j.push({x0:q.x,y0:q.y,x1:q.x+q.width,y1:q.y+q.height})}else{const q=Math.max(8,M.nameBox.height),W=Math.round(M.nameBox.width*.15);j.push({x0:M.nameBox.x-W,y0:M.nameBox.y-q*2.5,x1:M.nameBox.x+M.nameBox.width+W,y1:M.nameBox.y+M.nameBox.height+q*2.5})}u.some(q=>q.id===M.id)||u.push({id:M.id,name:M.name,builtWithCardUnderneath:(L==null?void 0:L.built)??!0,boundingBox:(L==null?void 0:L.boundingBox)??{x:0,y:0,width:0,height:0},...L!=null&&L.tuckRegion?{tuckRegion:L.tuckRegion}:{},confidence:M.confidence})}O.aborted&&r.push({code:"LOW_CONFIDENCE",message:`${I}: the wonder-name read ran out of its time budget on this device — ${O.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`});const ue=[];for(const M of z){const L=M.box[0]+M.box[2]/2,q=M.box[1]+M.box[3]/2;if(j.some(re=>L>=re.x0&&L<=re.x1&&q>=re.y0&&q<=re.y1)){m+=1;continue}ue.push(M),i[M.family]=(i[M.family]??0)+1,f+=1}for(const M of Vg(ue))d.push(M);n(`${I}: laurels…`);const D=await qy(),Q=[];for(const M of[0,1,2,3]){const L=M===0?T:Yr(T,M),q=await Lt("laurel",L);for(const[W,re,Te,ae]of Hp(q.rows,q.params,dt.laurel.conf)){const le=hh({x:W,y:re,width:Te-W,height:ae-re},M,T.width,T.height),xe=le.x+le.width/2,Ce=le.y+le.height/2,Ie=.6*Math.max(le.width,le.height);Q.some(([ce,ie,Re,pt])=>{const qt=(ce+Re)/2,tt=(ie+pt)/2;return(xe-qt)**2+(Ce-tt)**2<Ie*Ie})||Q.push([le.x,le.y,le.x+le.width,le.y+le.height])}}for(const[M,L,q,W]of Q){const re=Math.trunc((M+q)/2),Te=Math.trunc((L+W)/2);if([...R,...H].some(ce=>(re-ce.cx)**2+(Te-ce.cy)**2<=ce.r*ce.r))continue;const le=Math.max(6,Math.trunc(Math.max(q-M,W-L)*d0)),xe=Wy(T,re,Te,le);let Ce=null,Ie=0;for(const ce of[0,1,2,3]){const ie=ce===0?xe:Yr(xe,ce),[Re,pt]=S0(ie,D);Re!==null&&pt>Ie&&(Ce=Re,Ie=pt)}Ce!==null&&Ie<My&&(Ce=null);const Ue=j.some(ce=>re>=ce.x0&&re<=ce.x1&&Te>=ce.y0&&Te<=ce.y1);s.push({value:Ce,valueRead:Ce!==null,center:[Math.round((M+q)/2),Math.round((L+W)/2)],boundingBox:{x:Math.trunc(M),y:Math.trunc(L),width:Math.trunc(q-M),height:Math.trunc(W-L)},confidence:Math.round(Ie*1e4)/1e4,excluded:Ue,photoIndex:y-1})}}m>0?r.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${m} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):f>0&&u.length===0&&r.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const w=i.guild??0;w>0&&r.push({code:"INCONSISTENT_STATE",message:`${t}: ${w} purple banner(s) counted but guild identification is server-only — pick the guild(s) in the review.`});const v=u.filter(b=>b.boundingBox.width===0);v.length>0?r.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${v.map(b=>b.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):u.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: ${u.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),r.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: on-device mode — ${u.length>0?"guilds are":"wonders and guilds are"} not identified yet: pick them in the review below.`+(p>0?` ${p} token disc(s) found but not identified — pick them too.`:"")}),o.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(b=>b.id).join(", ")+" — confirm in the review."}),a.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${h} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const $=s.filter(b=>b.valueRead);return{...Yy(),wonders:u,progressTokens:o,laurels:s,cardVictoryPoints:{value:$.reduce((b,I)=>b+(I.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-$.length,complete:s.length===$.length},cardCounts:{byFamily:i,source:f>0?"yolo":"none",tuckedExcluded:m,...d.length>0?{suspects:d}:{}},coins:{total:h,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function Qy(e,t){const r=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],n={left:null,right:null};for(const i of["left","right"]){const s=e[i];s.length>0&&(n[i]=await Zy(s,i,r,t))}return e.hasBoard&&r.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:n,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:r}}self.onmessage=e=>{const{id:t,kind:r}=e.data,n=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=r==="classify"?await Xy(e.data.file):await Qy(e.data.payload,n);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
