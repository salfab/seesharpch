var Ib=Object.defineProperty;var Eb=(nt,it,Vt)=>it in nt?Ib(nt,it,{enumerable:!0,configurable:!0,writable:!0,value:Vt}):nt[it]=Vt;var Jf=(nt,it,Vt)=>Eb(nt,typeof it!="symbol"?it+"":it,Vt);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var nt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyNames,rm=Object.prototype.hasOwnProperty,nm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),q=(e,t)=>()=>(e&&(t=e(e=0)),t),Gt=(e,t)=>{for(var r in t)nt(e,r,{get:t[r],enumerable:!0})},im=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Vt(t))!rm.call(e,i)&&i!==r&&nt(e,i,{get:()=>t[i],enumerable:!(n=it(t,i))||n.enumerable});return e},Jt=e=>im(nt({},"__esModule",{value:!0}),e),er,pt,Ht,Ta,ka,Ia=q(()=>{er=new Map,pt=[],Ht=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let n=er.get(e);if(n===void 0)er.set(e,{backend:t,priority:r});else{if(n.priority>r)return;if(n.priority===r&&n.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=pt.indexOf(e);i!==-1&&pt.splice(i,1);for(let s=0;s<pt.length;s++)if(er.get(pt[s]).priority<=r){pt.splice(s,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},Ta=async e=>{let t=er.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(n){return r||(t.error=`${n}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ka=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),n=r.length===0?pt:r,i,s=[],a=new Set;for(let l of n){let d=await Ta(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),am=q(()=>{Ia()}),Ea,sm=q(()=>{Ea="1.27.0"}),cn,Ie,za=q(()=>{sm(),cn="warning",Ie={wasm:{},webgl:{},webgpu:{},versions:{common:Ea},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);cn=e}},get logLevel(){return cn}},Object.defineProperty(Ie,"logLevel",{enumerable:!0})}),_e,om=q(()=>{za(),_e=Ie}),Ca,Aa,um=q(()=>{Ca=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let n=r.getContext("2d");if(n!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let h=s*i,p=0,f=h,g=h*2,y=-1;a==="RGBA"?(p=0,f=h,g=h*2,y=h*3):a==="RGB"?(p=0,f=h,g=h*2):a==="RBG"&&(p=0,g=h,f=h*2);for(let b=0;b<s;b++)for(let $=0;$<i;$++){let w=(e.data[p++]-d[0])*l[0],v=(e.data[f++]-d[1])*l[1],k=(e.data[g++]-d[2])*l[2],T=y===-1?255:(e.data[y++]-d[3])*l[3];n.fillStyle="rgba("+w+","+v+","+k+","+T+")",n.fillRect($,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Aa=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(r!=null){let i,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],a=e.dims[3]):(i=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,h;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let p=s*i;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,g=0,y=1,b=2,$=3,w=0,v=p,k=p*2,T=-1;o==="RGBA"?(w=0,v=p,k=p*2,T=p*3):o==="RGB"?(w=0,v=p,k=p*2):o==="RBG"&&(w=0,k=p,v=p*2),n=r.createImageData(i,s);for(let E=0;E<s*i;g+=f,y+=f,b+=f,$+=f,E++)n.data[g]=(e.data[w++]-h[0])*d[0],n.data[y]=(e.data[v++]-h[1])*d[1],n.data[b]=(e.data[k++]-h[2])*d[2],n.data[$]=T===-1?255:(e.data[T++]-h[3])*d[3]}else throw new Error("Can not access image data");return n}}),Tr,Ma,Oa,Ra,Ba,Na,lm=q(()=>{hn(),Tr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:n}=t,i=t.norm??{mean:255,bias:0},s,a;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*n,h=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),p=4,f=0,g=1,y=2,b=3,$=0,w=d,v=d*2,k=-1;o==="RGB"&&(p=3,f=0,g=1,y=2,b=-1),l==="RGBA"?k=d*3:l==="RBG"?($=0,v=d,w=d*2):l==="BGR"&&(v=0,w=d,$=d*2);for(let T=0;T<d;T++,f+=p,y+=p,g+=p,b+=p)h[$++]=(e[f]+a[0])/s[0],h[w++]=(e[g]+a[1])/s[1],h[v++]=(e[y]+a[2])/s[2],k!==-1&&b!==-1&&(h[k++]=(e[b]+a[3])/s[3]);return l==="RGBA"?new Be("float32",h,[1,4,r,n]):new Be("float32",h,[1,3,r,n])},Ma=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,n=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let p=d(h);if(p!=null){let f=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=g}else o.tensorFormat="RGBA",o.height=f,o.width=g;p.drawImage(e,0,0),a=p.getImageData(0,0,g,f).data}else throw new Error("Can not access image data")}else if(n){let h,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,p=t.resizedWidth):(h=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=h,o.width=p,t!==void 0){let f=l();f.width=p,f.height=h;let g=d(f);if(g!=null)g.putImageData(e,0,0),a=g.getImageData(0,0,p,h).data;else throw new Error("Can not access image data")}else a=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let p=d(h);if(p!=null){let f=e.height,g=e.width;return p.drawImage(e,0,0,g,f),a=p.getImageData(0,0,g,f).data,o.height=f,o.width=g,Tr(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,p)=>{let f=l(),g=d(f);if(!e||!g)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{f.width=y.width,f.height=y.height,g.drawImage(y,0,0,f.width,f.height);let b=g.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,h(Tr(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Tr(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Oa=(e,t)=>{let{width:r,height:n,download:i,dispose:s}=t,a=[1,n,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:a,download:i,dispose:s})},Ra=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:n,download:i,dispose:s})},Ba=(e,t)=>{let{dataType:r,dims:n,download:i,dispose:s}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:n,download:i,dispose:s})},Na=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),xt,tr,pn,Da,dm=q(()=>{xt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),tr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),pn=!1,Da=()=>{if(!pn){pn=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,n=typeof r<"u"&&r.from;e&&(xt.set("int64",BigInt64Array),tr.set(BigInt64Array,"int64")),t&&(xt.set("uint64",BigUint64Array),tr.set(BigUint64Array,"uint64")),n?(xt.set("float16",r),tr.set(r,"float16")):xt.set("float16",Uint16Array)}}}),Ua,Pa,cm=q(()=>{hn(),Ua=e=>{let t=1;for(let r=0;r<e.length;r++){let n=e[r];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${r}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${n}`);t*=n}return t},Pa=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,hn=q(()=>{um(),lm(),dm(),cm(),Be=class{constructor(e,t,r){Da();let n,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,n=e.type,i=e.dims,e.location){case"cpu-pinned":{let a=xt.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(n=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=xt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${n} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")n="string",a=e;else if(l==="boolean")n="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(e);else{let l=tr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);n=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=a,this.dataLocation="cpu"}let s=Ua(i);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=i,this.size=s}static async fromImage(e,t){return Ma(e,t)}static fromTexture(e,t){return Oa(e,t)}static fromGpuBuffer(e,t){return Ra(e,t)}static fromMLTensor(e,t){return Ba(e,t)}static fromPinnedBuffer(e,t,r){return Na(e,t,r)}toDataURL(e){return Ca(this,e)}toImageData(e){return Aa(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Pa(this,e)}}}),Ne,La=q(()=>{hn(),Ne=Be}),kr,fn,Qe,Ge,St,Tt,qa=q(()=>{za(),kr=(e,t)=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeStamp(`${e}::ORT::${t}`)},fn=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],n=!1;for(let s=0;s<r.length;s++){if(n&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),kr("CPU",a);return}r[s].includes("TRACE_FUNC")&&(n=!0)}},Qe=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||fn("BEGIN",e)},Ge=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||fn("END",e)},St=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.time(`ORT::${e}`)},Tt=e=>{(typeof Ie.trace>"u"?!Ie.wasm.trace:!Ie.trace)||console.timeEnd(`ORT::${e}`)}}),Wa,pm=q(()=>{Ia(),La(),qa(),Wa=class em{constructor(t){this.handler=t}async run(t,r,n){Qe(),St("InferenceSession.run");let i={},s={};if(typeof t!="object"||t===null||t instanceof Ne||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ne)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(h.indexOf(p)!==-1){let f=r[p];(f===null||f instanceof Ne)&&(d=!0,a=!1,i[p]=f)}if(d){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let h=o[d];h instanceof Ne?l[d]=h:l[d]=new Ne(h.type,h.data,h.dims)}return Tt("InferenceSession.run"),Ge(),l}async release(){return this.handler.dispose()}static async create(t,r,n,i){Qe(),St("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,p=0,f=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(f=t.byteLength-p,typeof n=="number"){if(f=n,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||p+f>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-p}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,p,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await ka(a),d=await o.createInferenceSessionHandler(s,l);return Tt("InferenceSession.create"),Ge(),new em(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),rr,hm=q(()=>{pm(),rr=Wa}),fm=q(()=>{}),mm=q(()=>{}),gm=q(()=>{}),ym=q(()=>{}),_m={};Gt(_m,{InferenceSession:()=>rr,TRACE:()=>kr,TRACE_EVENT_BEGIN:()=>St,TRACE_EVENT_END:()=>Tt,TRACE_FUNC_BEGIN:()=>Qe,TRACE_FUNC_END:()=>Ge,Tensor:()=>Ne,env:()=>_e,registerBackend:()=>Ht});var We=q(()=>{am(),om(),hm(),La(),fm(),mm(),qa(),gm(),ym()}),mn=q(()=>{}),Va={};Gt(Va,{default:()=>Ga});var gn,yn,Ga,bm=q(()=>{var e;Tp(),kt(),xn(),gn="ort-wasm-proxy-worker",yn=((e=globalThis.self)==null?void 0:e.name)===gn,yn&&(self.onmessage=t=>{let{type:r,in:n}=t.data;try{switch(r){case"init-wasm":kn(n.wasm).then(()=>{Di(n).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=n;Ui(s,i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:i}=n,s=Hr(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=n;Li(i,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":qi(n),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:a,outputIndices:o,options:l}=n;Vi(i,s,a,o,new Array(o.length).fill(null),l).then(d=>{d.some(h=>h[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Hi([...a,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Gi(n),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),Ga=yn?null:t=>new Worker(t??De,{type:"module",name:gn})}),Ha={};Gt(Ha,{default:()=>ja});async function Fa(e={}){var Yf,Qf;var t=e,r=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,i=n&&((Yf=self.name)==null?void 0:Yf.startsWith("em-pthread"));t.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Xc||(t.Xc=new Map)).set(u,c)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=u=>async(...c)=>{var _;try{if(t.Yc)throw Error("Session already started");let m=t.Yc={Kd:c[0],errors:[]},S=await u(...c);if(t.Yc!==m)throw Error("Session mismatch");(_=t.dd)==null||_.flush();let I=m.errors;if(0<I.length){let A=await Promise.all(I);if(A=A.filter(N=>N),0<A.length)throw Error(A.join(`
`))}return S}finally{t.Yc=null}};t.jsepInit=(u,c)=>{if(u==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=c;let _=t.dd;t.jsepRegisterBuffer=(m,S,I,A)=>_.registerBuffer(m,S,I,A),t.jsepGetBuffer=m=>_.getBuffer(m),t.jsepCreateDownloader=(m,S,I)=>_.createDownloader(m,S,I),t.jsepOnCreateSession=m=>{_.onCreateSession(m)},t.jsepOnReleaseSession=m=>{_.onReleaseSession(m)},t.jsepOnRunStart=m=>_.onRunStart(m),t.Id=(m,S)=>{_.upload(m,S)}}else if(u==="webnn"){let _=c[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=m=>_.onRunStart(m),t.webnnOnRunEnd=_.onRunEnd.bind(_),t.webnnOnReleaseSession=m=>{_.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,S)=>_.createMLTensorDownloader(m,S),t.webnnRegisterMLTensor=(m,S,I,A)=>_.registerMLTensor(m,S,I,A),t.webnnCreateMLContext=m=>_.createMLContext(m),t.webnnRegisterMLConstant=(m,S,I,A,N,G)=>_.registerMLConstant(m,S,I,A,N,t.Xc,G),t.webnnRegisterGraphInput=_.registerGraphInput.bind(_),t.webnnIsGraphInput=_.isGraphInput.bind(_),t.webnnRegisterGraphOutput=_.registerGraphOutput.bind(_),t.webnnIsGraphOutput=_.isGraphOutput.bind(_),t.webnnCreateTemporaryTensor=_.createTemporaryTensor.bind(_),t.webnnIsGraphInputOutputTypeSupported=_.isGraphInputOutputTypeSupported.bind(_)}};let a=()=>{let u=c=>(..._)=>{let m=tt;return _=c(..._),tt!=m?new Promise((S,I)=>{pa={resolve:S,reject:I}}):_};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=u(t[c])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,l,d=(u,c)=>{throw c},h=self.location.href,p="";if(r||n){try{p=new URL(".",h).href}catch{}n&&(l=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async u=>{if(C(u))return new Promise((_,m)=>{var S=new XMLHttpRequest;S.open("GET",u,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?_(S.response):m(S.status)},S.onerror=m,S.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var f,g,y,b,$,w,v=console.log.bind(console),k=console.error.bind(console),T=v,E=k,z=!1,C=u=>u.startsWith("file://");function x(){bt.buffer!=M.buffer&&H()}if(i){let u=function(c){try{var _=c.data,m=_.Sc;if(m==="load"){let S=[];self.onmessage=I=>S.push(I),w=()=>{postMessage({Sc:"loaded"});for(let I of S)u(I);self.onmessage=u};for(let I of _.xd)t[I]&&!t[I].proxy||(t[I]=(...A)=>{postMessage({Sc:"callHandler",wd:I,args:A})},I=="print"&&(T=t[I]),I=="printErr"&&(E=t[I]));bt=_.Od,H(),g=_.Pd,Pe(),ln()}else if(m==="run"){(function(S){var I=(x(),X)[S+52>>>2>>>0];S=(x(),X)[S+56>>>2>>>0],of(I,I-S),oe(I)})(_.Rc),ya(_.Rc,0,0,1,0,0),oh(),la(_.Rc),R||(ef(),R=!0);try{by(_.Md,_.bd)}catch(S){if(S!="unwind")throw S}}else _.target!=="setimmediate"&&(m==="checkMailbox"?R&&tn():m&&(E(`worker: received unknown command ${m}`),E(_)))}catch(S){throw tf(),S}};var R=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}var M,P,V,F,O,X,j,Y,de,U,te,L=!1;function H(){var u=bt.buffer;t.HEAP8=M=new Int8Array(u),V=new Int16Array(u),t.HEAPU8=P=new Uint8Array(u),F=new Uint16Array(u),t.HEAP32=O=new Int32Array(u),t.HEAPU32=X=new Uint32Array(u),j=new Float32Array(u),Y=new Float64Array(u),de=new BigInt64Array(u),U=new BigUint64Array(u)}function Z(){L=!0,i?w():ct.sb()}function W(u){throw E(u="Aborted("+u+")"),z=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),$==null||$(u),u}function pe(){return{a:{ma:W_,gb:q_,g:wy,J:$y,f:vy,o:xy,h:Sy,ha:Ty,b:ky,T:Iy,Ha:hh,n:Ey,$:yh,Xa:_h,Da:bh,Fa:wh,Ya:$h,Va:vh,Oa:xh,Ua:Sh,ka:Th,Ea:kh,Ba:Ih,Wa:Eh,Ca:zh,bb:zy,ea:Cy,wa:Ay,ua:Oy,da:By,O:Ny,H:Dy,va:Uy,_:Hy,xa:Fy,Ra:jy,za:Xy,Ia:Zy,sa:Yy,fa:Qy,Qa:la,_a:Jy,R:n_,r:u_,c:oa,hb:l_,y:d_,M:c_,D:p_,l:h_,s:Dh,ib:f_,I:m_,S:g_,j:y_,u:__,q:b_,k:w_,La:$_,Ma:v_,Na:x_,Ja:qh,Ka:Wh,ta:Vh,db:T_,ab:I_,v:E_,aa:z_,ga:C_,$a:k_,W:A_,Za:M_,Aa:O_,F:S_,U:R_,la:on,ya:N_,fb:B_,eb:D_,Sa:jh,Ta:Kh,Ga:br,V:Xh,ja:Zh,Pa:Yh,ia:Qh,kb:Sb,na:bb,lb:xb,oa:_b,G:lb,e:F_,t:G_,w:V_,B:rb,mb,K:sb,x:X_,pa:gb,Y:wb,ba:fb,nb:hb,ob:pb,P:nb,qa:cb,pb:db,N:ob,Z:yb,d:H_,A:K_,m:j_,jb:Tb,p:Y_,z:Q_,C:Z_,E:J_,L:ib,qb:ub,Q:$b,ca:ab,X:vb,rb:tb,ra:eb,i:P_,a:bt,cb:qe}}}async function Pe(){function u(m,S){var I=ct=m.exports;m={};for(let[A,N]of Object.entries(I))typeof N=="function"?(I=e_(N),m[A]=I):m[A]=N;return ct=m,ct=(function(){var A=ct,N=K=>se=>K(se)>>>0,G=K=>()=>K()>>>0;return(A=Object.assign({},A)).tb=N(A.tb),A.Xb=G(A.Xb),A.Zb=N(A.Zb),A.lc=N(A.lc),A.mc=G(A.mc),A.qc=N(A.qc),A})(),ah.push(ct._b),Jh=(m=ct).tb,ef=m.ub,t._OrtInit=m.vb,t._OrtGetLastError=m.wb,t._OrtCreateSessionOptions=m.xb,t._OrtAppendExecutionProvider=m.yb,t._OrtAddFreeDimensionOverride=m.zb,t._OrtAddSessionConfigEntry=m.Ab,t._OrtReleaseSessionOptions=m.Bb,t._OrtCreateSession=m.Cb,t._OrtReleaseSession=m.Db,t._OrtGetInputOutputCount=m.Eb,t._OrtGetInputOutputMetadata=m.Fb,t._OrtFree=m.Gb,t._OrtCreateTensor=m.Hb,t._OrtGetTensorData=m.Ib,t._OrtReleaseTensor=m.Jb,t._OrtCreateRunOptions=m.Kb,t._OrtAddRunConfigEntry=m.Lb,t._OrtReleaseRunOptions=m.Mb,t._OrtCreateBinding=m.Nb,t._OrtBindInput=m.Ob,t._OrtBindOutput=m.Pb,t._OrtClearBoundOutputs=m.Qb,t._OrtReleaseBinding=m.Rb,t._OrtRunWithBinding=m.Sb,t._OrtRun=m.Tb,t._OrtEndProfiling=m.Ub,t._JsepOutput=m.Vb,t._JsepGetNodeName=m.Wb,un=m.Xb,rt=t._free=m.Yb,vr=t._malloc=m.Zb,ya=m.ac,tf=m.bc,rf=m.cc,nf=m.dc,_a=m.ec,af=m.fc,sf=m.gc,le=m.hc,xr=m.ic,of=m.jc,oe=m.kc,ba=m.lc,ue=m.mc,uf=m.nc,wa=m.oc,lf=m.pc,df=m.qc,cf=m.rc,$a=m.sc,pf=m.tc,hf=m.uc,ff=m.vc,mf=m.wc,gf=m.xc,yf=m.yc,_f=m.zc,bf=m.Ac,wf=m.Bc,$f=m.Cc,vf=m.Dc,xf=m.Ec,Sf=m.Fc,Tf=m.Gc,kf=m.Hc,If=m.Ic,Ef=m.Jc,zf=m.Kc,Cf=m.Lc,Af=m.Mc,Mf=m.Nc,Of=m.Pc,Rf=m.Qc,Bf=m.$c,Nf=m.ad,Df=m.fd,Uf=m.jd,Pf=m.kd,Lf=m.ld,qf=m.md,Wf=m.nd,Vf=m.od,Gf=m.pd,Hf=m.qd,Ff=m.vd,jf=m.Td,Kf=m.Ud,Xf=m.Vd,Zf=m.Wd,g=S,ct}var c,_=pe();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(_,(S,I)=>{m(u(S,I))})}):i?u(new WebAssembly.Instance(g,pe()),g):(te??(te=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),c=await(async function(m){var S=te;if(!f&&!C(S))try{var I=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,m)}catch(A){E(`wasm streaming compile failed: ${A}`),E("falling back to ArrayBuffer instantiation")}return(async function(A,N){try{var G=await(async function(K){if(!f)try{var se=await o(K);return new Uint8Array(se)}catch{}if(K==te&&f)K=new Uint8Array(f);else{if(!l)throw"both async and sync fetching of the wasm failed";K=l(K)}return K})(A);return await WebAssembly.instantiate(G,N)}catch(K){E(`failed to asynchronously prepare wasm: ${K}`),W(K)}})(S,m)})(_),u(c.instance,c.module))}class Se{constructor(c){Jf(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var Me=u=>{u.terminate(),u.onmessage=()=>{}},Oe=[],Le=0,Re=null,yt=u=>{_t.length==0&&(lh(),uh(_t[0]));var c=_t.pop();if(!c)return 6;wr.push(c),Lt[u.Rc]=c,c.Rc=u.Rc;var _={Sc:"run",Md:u.Ld,bd:u.bd,Rc:u.Rc};return c.postMessage(_,u.rd),0},we=0,ie=(u,c,..._)=>{var m,S=16*_.length,I=ue(),A=ba(S),N=A>>>3;for(m of _)typeof m=="bigint"?((x(),de)[N++>>>0]=1n,(x(),de)[N++>>>0]=m):((x(),de)[N++>>>0]=0n,(x(),Y)[N++>>>0]=m);return u=rf(u,0,S,A,c),oe(I),u};function qe(u){if(i)return ie(0,1,u);if(y=u,!(0<we)){for(var c of wr)Me(c);for(c of _t)Me(c);_t=[],wr=[],Lt={},z=!0}d(0,new Se(u))}function Zr(u){if(i)return ie(1,0,u);br(u)}var br=u=>{if(y=u,i)throw Zr(u),"unwind";qe(u)},_t=[],wr=[],ah=[],Lt={},sh=u=>{var c=u.Rc;delete Lt[c],_t.push(u),wr.splice(wr.indexOf(u),1),u.Rc=0,nf(c)};function oh(){ah.forEach(u=>u())}var uh=u=>new Promise(c=>{u.onmessage=S=>{var I=S.data;if(S=I.Sc,I.Zc&&I.Zc!=un()){var A=Lt[I.Zc];A?A.postMessage(I,I.rd):E(`Internal error! Worker sent a message "${S}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else S==="checkMailbox"?tn():S==="spawnThread"?yt(I):S==="cleanupThread"?en(()=>{sh(Lt[I.Nd])}):S==="loaded"?(u.loaded=!0,c(u)):I.target==="setimmediate"?u.postMessage(I):S==="uncaughtException"?u.onerror(I.error):S==="callHandler"?t[I.wd](...I.args):S&&E(`worker sent an unknown command ${S}`)},u.onerror=S=>{throw E(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var _,m=[];for(_ of[])t.propertyIsEnumerable(_)&&m.push(_);u.postMessage({Sc:"load",xd:m,Od:bt,Pd:g})});function lh(){var u=new Worker((()=>{let c=URL;return self.location.href>"file:"&&self.location.href<"file;"?new c("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});_t.push(u)}var bt,by=(u,c)=>{we=0,u=$a(u,c),0<we?y=u:_a(u)},Yr=[],Qr=0;function wy(u){var c=new na(u>>>=0);return(x(),M)[c.Tc+12>>>0]==0&&(dh(c,!0),Qr--),ch(c,!1),Yr.push(c),df(u)}var Yt=0,$y=()=>{le(0,0);var u=Yr.pop();uf(u.cd),Yt=0};function dh(u,c){c=c?1:0,(x(),M)[u.Tc+12>>>0]=c}function ch(u,c){c=c?1:0,(x(),M)[u.Tc+13>>>0]=c}class na{constructor(c){this.cd=c,this.Tc=c-24}}var ia=u=>{var c=Yt;if(!c)return xr(0),0;var _=new na(c);(x(),X)[_.Tc+16>>>2>>>0]=c;var m=(x(),X)[_.Tc+4>>>2>>>0];if(!m)return xr(0),c;for(var S of u){if(S===0||S===m)break;if(lf(S,m,_.Tc+16))return xr(S),c}return xr(m),c};function vy(){return ia([])}function xy(u){return ia([u>>>0])}function Sy(u,c,_,m){return ia([u>>>0,c>>>0,_>>>0,m>>>0])}var Ty=()=>{var u=Yr.pop();u||W("no exception to throw");var c=u.cd;throw(x(),M)[u.Tc+13>>>0]==0&&(Yr.push(u),ch(u,!0),dh(u,!1),Qr++),wa(c),Yt=c};function ky(u,c,_){var m=new na(u>>>=0);throw c>>>=0,_>>>=0,(x(),X)[m.Tc+16>>>2>>>0]=0,(x(),X)[m.Tc+4>>>2>>>0]=c,(x(),X)[m.Tc+8>>>2>>>0]=_,wa(u),Qr++,Yt=u}var Iy=()=>Qr;function ph(u,c,_,m){return i?ie(2,1,u,c,_,m):hh(u,c,_,m)}function hh(u,c,_,m){if(u>>>=0,c>>>=0,_>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var S=[];return i&&S.length===0?ph(u,c,_,m):(u={Ld:_,Rc:u,bd:m,rd:S},i?(u.Sc="spawnThread",postMessage(u,S),0):yt(u))}function Ey(u){throw Yt||(Yt=u>>>0),Yt}var fh=globalThis.TextDecoder&&new TextDecoder,mh=(u,c,_,m)=>{if(_=c+_,m)return _;for(;u[c]&&!(c>=_);)++c;return c},gh=(u,c=0,_,m)=>{if(16<(_=mh(u,c>>>=0,_,m))-c&&u.buffer&&fh)return fh.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,_):u.slice(c,_));for(m="";c<_;){var S=u[c++];if(128&S){var I=63&u[c++];if((224&S)==192)m+=String.fromCharCode((31&S)<<6|I);else{var A=63&u[c++];65536>(S=(240&S)==224?(15&S)<<12|I<<6|A:(7&S)<<18|I<<12|A<<6|63&u[c++])?m+=String.fromCharCode(S):(S-=65536,m+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else m+=String.fromCharCode(S)}return m},Te=(u,c,_)=>(u>>>=0)?gh((x(),P),u,c,_):"";function yh(u,c,_){return i?ie(3,1,u,c,_):0}function _h(u,c){if(i)return ie(4,1,u,c)}function bh(u,c){if(i)return ie(5,1,u,c)}function wh(u,c,_){if(i)return ie(6,1,u,c,_)}function $h(u,c,_){return i?ie(7,1,u,c,_):0}function vh(u,c){if(i)return ie(8,1,u,c)}function xh(u,c,_){if(i)return ie(9,1,u,c,_)}function Sh(u,c,_,m){if(i)return ie(10,1,u,c,_,m)}function Th(u,c,_,m){if(i)return ie(11,1,u,c,_,m)}function kh(u,c,_,m){if(i)return ie(12,1,u,c,_,m)}function Ih(u){if(i)return ie(13,1,u)}function Eh(u,c){if(i)return ie(14,1,u,c)}function zh(u,c,_){if(i)return ie(15,1,u,c,_)}var zy=()=>W(""),et=u=>{u>>>=0;for(var c="";;){var _=(x(),P)[u++>>>0];if(!_)return c;c+=String.fromCharCode(_)}},aa={},sa={},Qt=class extends Error{constructor(u){super(u),this.name="BindingError"}};function dt(u,c,_={}){return(function(m,S,I={}){var A=S.name;if(!m)throw new Qt(`type "${A}" must have a positive integer typeid pointer`);if(sa.hasOwnProperty(m)){if(I.yd)return;throw new Qt(`Cannot register type '${A}' twice`)}sa[m]=S,aa.hasOwnProperty(m)&&(S=aa[m],delete aa[m],S.forEach(N=>N()))})(u,c,_)}var Ch=(u,c,_)=>{switch(c){case 1:return _?m=>(x(),M)[m>>>0]:m=>(x(),P)[m>>>0];case 2:return _?m=>(x(),V)[m>>>1>>>0]:m=>(x(),F)[m>>>1>>>0];case 4:return _?m=>(x(),O)[m>>>2>>>0]:m=>(x(),X)[m>>>2>>>0];case 8:return _?m=>(x(),de)[m>>>3>>>0]:m=>(x(),U)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function Cy(u,c,_,m,S){u>>>=0,_>>>=0,c=et(c>>>0);let I=A=>A;if(m=m===0n){let A=8*_;I=N=>BigInt.asUintN(A,N),S=I(S)}dt(u,{name:c,Oc:I,Vc:(A,N)=>(typeof N=="number"&&(N=BigInt(N)),N),Uc:Ch(c,_,!m),Wc:null})}function Ay(u,c,_,m){dt(u>>>=0,{name:c=et(c>>>0),Oc:function(S){return!!S},Vc:function(S,I){return I?_:m},Uc:function(S){return this.Oc((x(),P)[S>>>0])},Wc:null})}var Ah=[],qt=[0,1,,1,null,1,!0,1,!1,1];function oa(u){9<(u>>>=0)&&--qt[u+1]===0&&(qt[u]=void 0,Ah.push(u))}var Ve=u=>{if(!u)throw new Qt(`Cannot use deleted val. handle = ${u}`);return qt[u]},Ye=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Ah.pop()||qt.length;return qt[c]=u,qt[c+1]=1,c}};function ua(u){return this.Oc((x(),X)[u>>>2>>>0])}var My={name:"emscripten::val",Oc:u=>{var c=Ve(u);return oa(u),c},Vc:(u,c)=>Ye(c),Uc:ua,Wc:null};function Oy(u){return dt(u>>>0,My)}var Ry=(u,c)=>{switch(c){case 4:return function(_){return this.Oc((x(),j)[_>>>2>>>0])};case 8:return function(_){return this.Oc((x(),Y)[_>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function By(u,c,_){_>>>=0,dt(u>>>=0,{name:c=et(c>>>0),Oc:m=>m,Vc:(m,S)=>S,Uc:Ry(c,_),Wc:null})}function Ny(u,c,_,m,S){u>>>=0,_>>>=0,c=et(c>>>0);let I=N=>N;if(m===0){var A=32-8*_;I=N=>N<<A>>>A,S=I(S)}dt(u,{name:c,Oc:I,Vc:(N,G)=>G,Uc:Ch(c,_,m!==0),Wc:null})}function Dy(u,c,_){function m(I){var A=(x(),X)[I>>>2>>>0];return I=(x(),X)[I+4>>>2>>>0],new S((x(),M).buffer,I,A)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];dt(u>>>=0,{name:_=et(_>>>0),Oc:m,Uc:m},{yd:!0})}var wt=(u,c,_)=>{var m=(x(),P);if(c>>>=0,0<_){var S=c;_=c+_-1;for(var I=0;I<u.length;++I){var A=u.codePointAt(I);if(127>=A){if(c>=_)break;m[c++>>>0]=A}else if(2047>=A){if(c+1>=_)break;m[c++>>>0]=192|A>>6,m[c++>>>0]=128|63&A}else if(65535>=A){if(c+2>=_)break;m[c++>>>0]=224|A>>12,m[c++>>>0]=128|A>>6&63,m[c++>>>0]=128|63&A}else{if(c+3>=_)break;m[c++>>>0]=240|A>>18,m[c++>>>0]=128|A>>12&63,m[c++>>>0]=128|A>>6&63,m[c++>>>0]=128|63&A,I++}}m[c>>>0]=0,u=c-S}else u=0;return u},Jr=u=>{for(var c=0,_=0;_<u.length;++_){var m=u.charCodeAt(_);127>=m?c++:2047>=m?c+=2:55296<=m&&57343>=m?(c+=4,++_):c+=3}return c};function Uy(u,c){dt(u>>>=0,{name:c=et(c>>>0),Oc(_){var m=(x(),X)[_>>>2>>>0];return m=Te(_+4,m,!0),rt(_),m},Vc(_,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var S=typeof m=="string";if(!(S||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new Qt("Cannot pass non-string to std::string");var I=S?Jr(m):m.length,A=vr(4+I+1),N=A+4;return(x(),X)[A>>>2>>>0]=I,S?wt(m,N,I+1):(x(),P).set(m,N>>>0),_!==null&&_.push(rt,A),A},Uc:ua,Wc(_){rt(_)}})}var Mh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Py=(u,c,_)=>{if(u>>>=1,16<(c=mh((x(),F),u,c/2,_))-u&&Mh)return Mh.decode((x(),F).slice(u,c));for(_="";u<c;++u){var m=(x(),F)[u>>>0];_+=String.fromCharCode(m)}return _},Ly=(u,c,_)=>{if(_??(_=2147483647),2>_)return 0;var m=c;_=(_-=2)<2*u.length?_/2:u.length;for(var S=0;S<_;++S){var I=u.charCodeAt(S);(x(),V)[c>>>1>>>0]=I,c+=2}return(x(),V)[c>>>1>>>0]=0,c-m},qy=u=>2*u.length,Wy=(u,c,_)=>{var m="";u>>>=2;for(var S=0;!(S>=c/4);S++){var I=(x(),X)[u+S>>>0];if(!I&&!_)break;m+=String.fromCodePoint(I)}return m},Vy=(u,c,_)=>{if(c>>>=0,_??(_=2147483647),4>_)return 0;var m=c;_=m+_-4;for(var S=0;S<u.length;++S){var I=u.codePointAt(S);if(65535<I&&S++,(x(),O)[c>>>2>>>0]=I,(c+=4)+4>_)break}return(x(),O)[c>>>2>>>0]=0,c-m},Gy=u=>{for(var c=0,_=0;_<u.length;++_)65535<u.codePointAt(_)&&_++,c+=4;return c};function Hy(u,c,_){if(u>>>=0,c>>>=0,_=et(_>>>=0),c===2)var m=Py,S=Ly,I=qy;else m=Wy,S=Vy,I=Gy;dt(u,{name:_,Oc:A=>{var N=(x(),X)[A>>>2>>>0];return N=m(A+4,N*c,!0),rt(A),N},Vc:(A,N)=>{if(typeof N!="string")throw new Qt(`Cannot pass non-string to C++ string type ${_}`);var G=I(N),K=vr(4+G+c);return(x(),X)[K>>>2>>>0]=G/c,S(N,K+4,G+c),A!==null&&A.push(rt,K),K},Uc:ua,Wc(A){rt(A)}})}function Fy(u,c){dt(u>>>=0,{zd:!0,name:c=et(c>>>0),Oc:()=>{},Vc:()=>{}})}function jy(u){ya(u>>>0,!n,1,!r,131072,!1),oh()}var en=u=>{if(!z)try{if(u(),!(0<we))try{i?un()&&_a(y):br(y)}catch(c){c instanceof Se||c=="unwind"||d(0,c)}}catch(c){c instanceof Se||c=="unwind"||d(0,c)}},Ky=!Atomics.waitAsync||((Qf=globalThis.navigator)==null?void 0:Qf.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function la(u){u>>>=0,Ky||(Atomics.waitAsync((x(),O),u>>>2,u).value.then(tn),u+=128,Atomics.store((x(),O),u>>>2,1))}var tn=()=>en(()=>{var u=un();u&&(la(u),sf())});function Xy(u,c){(u>>>=0)==c>>>0?setTimeout(tn):i?postMessage({Zc:u,Sc:"checkMailbox"}):(u=Lt[u])&&u.postMessage({Sc:"checkMailbox"})}var da=[];function Zy(u,c,_,m,S){for(c>>>=0,S>>>=0,da.length=0,_=S>>>3,m=S+m>>>3;_<m;){var I;I=(x(),de)[_++>>>0]?(x(),de)[_++>>>0]:(x(),Y)[_++>>>0],da.push(I)}return(c?va[c]:L_[u])(...da)}var Yy=()=>{we=0};function Qy(u){u>>>=0,i?postMessage({Sc:"cleanupThread",Nd:u}):sh(Lt[u])}function Jy(u){}var rn=u=>{try{u()}catch(c){W(c)}};function e_(u){var c=(..._)=>{nn.push(u);try{return u(..._)}finally{z||(nn.pop(),tt&&$t===1&&nn.length===0&&($t=0,we+=1,rn(Kf),typeof Fibers<"u"&&Fibers.Zd()))}};return Bh.set(u,c),c}var $t=0,tt=null,Oh=0,nn=[],ca=new Map,Rh=new Map,Bh=new Map,t_=0,pa=null,r_=[],Nh=u=>(function(c){if(!z){if($t===0){var _=!1,m=!1;c((S=0)=>{if(!z&&(Oh=S,_=!0,m)){$t=2,rn(()=>Xf(tt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),S=!1;try{var I=(function(){var G=(x(),O)[tt+8>>>2>>>0];return G=Rh.get(G),G=Bh.get(G),--we,G()})()}catch(G){I=G,S=!0}var A=!1;if(!tt){var N=pa;N&&(pa=null,(S?N.reject:N.resolve)(I),A=!0)}if(S&&!A)throw I}}),m=!0,_||($t=1,tt=(function(){var S=vr(65548),I=S+12;if((x(),X)[S>>>2>>>0]=I,(x(),X)[S+4>>>2>>>0]=I+65536,I=nn[0],!ca.has(I)){var A=t_++;ca.set(I,A),Rh.set(A,I)}return I=ca.get(I),(x(),O)[S+8>>>2>>>0]=I,S})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),rn(()=>jf(tt)))}else $t===2?($t=0,rn(Zf),rt(tt),tt=null,r_.forEach(en)):W(`invalid state: ${$t}`);return Oh}})(c=>{u().then(c)});function n_(u){return u>>>=0,Nh(async()=>{var c=await Ve(u);return Ye(c)})}var ha=[],i_=u=>{var c=ha.length;return ha.push(u),c},a_=(u,c)=>{for(var _=Array(u),m=0;m<u;++m){var S=m,I=(x(),X)[c+4*m>>>2>>>0],A=sa[I];if(A===void 0)throw u=`parameter ${m}`,I=Jh(I),c=et(I),rt(I),new Qt(`${u} has unknown type ${c}`);_[S]=A}return _},s_=(u,c,_)=>{var m=[];return u=u(m,_),m.length&&((x(),X)[c>>>2>>>0]=Ye(m)),u},o_={},an=u=>{var c=o_[u];return c===void 0?et(u):c};function u_(u,c,_){var[m,...S]=a_(u,c>>>0);c=m.Vc.bind(m);var I=S.map(G=>G.Uc.bind(G));u--;var A={toValue:Ve};switch(u=I.map((G,K)=>{var se=`argFromPtr${K}`;return A[se]=G,`${se}(args${K?"+"+8*K:""})`}),_){case 0:var N="toValue(handle)";break;case 2:N="new (toValue(handle))";break;case 3:N="";break;case 1:A.getStringOrSymbol=an,N="toValue(handle)[getStringOrSymbol(methodName)]"}return N+=`(${u})`,m.zd||(A.toReturnWire=c,A.emval_returnValue=s_,N=`return emval_returnValue(toReturnWire, destructorsRef, ${N})`),N=`return function (handle, methodName, destructorsRef, args) {
  ${N}
  }`,_=new Function(Object.keys(A),N)(...Object.values(A)),N=`methodCaller<(${S.map(G=>G.name)}) => ${m.name}>`,i_(Object.defineProperty(_,"name",{value:N}))}function l_(u,c){return c>>>=0,(u=Ve(u>>>0))==Ve(c)}function d_(u){return(u>>>=0)?(u=an(u),Ye(globalThis[u])):Ye(globalThis)}function c_(u){return u=an(u>>>0),Ye(t[u])}function p_(u,c){return c>>>=0,u=Ve(u>>>0),c=Ve(c),Ye(u[c])}function h_(u){9<(u>>>=0)&&(qt[u+1]+=1)}function Dh(u,c,_,m,S){return ha[u>>>0](c>>>0,_>>>0,m>>>0,S>>>0)}function f_(u,c,_,m,S){return Dh(u>>>0,c>>>0,_>>>0,m>>>0,S>>>0)}function m_(){return Ye([])}function g_(u){u=Ve(u>>>0);for(var c=Array(u.length),_=0;_<u.length;_++)c[_]=u[_];return Ye(c)}function y_(u){return Ye(an(u>>>0))}function __(){return Ye({})}function b_(u){for(var c=Ve(u>>>=0);c.length;){var _=c.pop();c.pop()(_)}oa(u)}function w_(u,c,_){c>>>=0,_>>>=0,u=Ve(u>>>0),c=Ve(c),_=Ve(_),u[c]=_}function $_(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(x(),O)[c>>>2>>>0]=u.getUTCSeconds(),(x(),O)[c+4>>>2>>>0]=u.getUTCMinutes(),(x(),O)[c+8>>>2>>>0]=u.getUTCHours(),(x(),O)[c+12>>>2>>>0]=u.getUTCDate(),(x(),O)[c+16>>>2>>>0]=u.getUTCMonth(),(x(),O)[c+20>>>2>>>0]=u.getUTCFullYear()-1900,(x(),O)[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(x(),O)[c+28>>>2>>>0]=u}var Uh=u=>u%4==0&&(u%100!=0||u%400==0),Ph=[0,31,60,91,121,152,182,213,244,274,305,335],Lh=[0,31,59,90,120,151,181,212,243,273,304,334];function v_(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),(x(),O)[c>>>2>>>0]=u.getSeconds(),(x(),O)[c+4>>>2>>>0]=u.getMinutes(),(x(),O)[c+8>>>2>>>0]=u.getHours(),(x(),O)[c+12>>>2>>>0]=u.getDate(),(x(),O)[c+16>>>2>>>0]=u.getMonth(),(x(),O)[c+20>>>2>>>0]=u.getFullYear()-1900,(x(),O)[c+24>>>2>>>0]=u.getDay();var _=(Uh(u.getFullYear())?Ph:Lh)[u.getMonth()]+u.getDate()-1|0;(x(),O)[c+28>>>2>>>0]=_,(x(),O)[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),_=new Date(u.getFullYear(),6,1).getTimezoneOffset();var m=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(_!=m&&u.getTimezoneOffset()==Math.min(m,_)),(x(),O)[c+32>>>2>>>0]=u}function x_(u){u>>>=0;var c=new Date((x(),O)[u+20>>>2>>>0]+1900,(x(),O)[u+16>>>2>>>0],(x(),O)[u+12>>>2>>>0],(x(),O)[u+8>>>2>>>0],(x(),O)[u+4>>>2>>>0],(x(),O)[u>>>2>>>0],0),_=(x(),O)[u+32>>>2>>>0],m=c.getTimezoneOffset(),S=new Date(c.getFullYear(),6,1).getTimezoneOffset(),I=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(I,S);return 0>_?(x(),O)[u+32>>>2>>>0]=+(S!=I&&A==m):0<_!=(A==m)&&(S=Math.max(I,S),c.setTime(c.getTime()+6e4*((0<_?A:S)-m))),(x(),O)[u+24>>>2>>>0]=c.getDay(),_=(Uh(c.getFullYear())?Ph:Lh)[c.getMonth()]+c.getDate()-1|0,(x(),O)[u+28>>>2>>>0]=_,(x(),O)[u>>>2>>>0]=c.getSeconds(),(x(),O)[u+4>>>2>>>0]=c.getMinutes(),(x(),O)[u+8>>>2>>>0]=c.getHours(),(x(),O)[u+12>>>2>>>0]=c.getDate(),(x(),O)[u+16>>>2>>>0]=c.getMonth(),(x(),O)[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function qh(u,c,_,m,S,I,A){return i?ie(16,1,u,c,_,m,S,I,A):-52}function Wh(u,c,_,m,S,I){if(i)return ie(17,1,u,c,_,m,S,I)}var $r={},S_=()=>performance.timeOrigin+performance.now();function Vh(u,c){if(i)return ie(18,1,u,c);if($r[u]&&(clearTimeout($r[u].id),delete $r[u]),!c)return 0;var _=setTimeout(()=>{delete $r[u],en(()=>af(u,performance.timeOrigin+performance.now()))},c);return $r[u]={id:_,Yd:c},0}function T_(u,c,_,m){u>>>=0,c>>>=0,_>>>=0,m>>>=0;var S=new Date().getFullYear(),I=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var A=Math.max(I,S);(x(),X)[u>>>2>>>0]=60*A,(x(),O)[c>>>2>>>0]=+(I!=S),u=(c=N=>{var G=Math.abs(N);return`UTC${0<=N?"-":"+"}${String(Math.floor(G/60)).padStart(2,"0")}${String(G%60).padStart(2,"0")}`})(I),c=c(S),S<I?(wt(u,_,17),wt(c,m,17)):(wt(u,m,17),wt(c,_,17))}var k_=()=>Date.now();function I_(u,c,_){return _>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),(x(),de)[_>>>3>>>0]=BigInt(u),0):28}var fa=[],Gh=(u,c)=>{fa.length=0;for(var _;_=(x(),P)[u++>>>0];){var m=_!=105;c+=(m&=_!=112)&&c%8?4:0,fa.push(_==112?(x(),X)[c>>>2>>>0]:_==106?(x(),de)[c>>>3>>>0]:_==105?(x(),O)[c>>>2>>>0]:(x(),Y)[c>>>3>>>0]),c+=m?8:4}return fa};function E_(u,c,_){return u>>>=0,c=Gh(c>>>0,_>>>0),va[u](...c)}function z_(u,c,_){return u>>>=0,c=Gh(c>>>0,_>>>0),va[u](...c)}var C_=()=>{};function A_(u,c){return E(Te(u>>>0,c>>>0))}var M_=()=>{throw we+=1,"unwind"};function O_(){return 4294901760}var R_=()=>navigator.hardwareConcurrency,Wt={},sn=u=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+c[1]:0},Hh=u=>{for(var c of u)(u=sn(c))&&(Wt[u]=c)};function B_(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Hh(u),Wt.gd=sn(u[3]),Wt.Jd=u,Wt.gd}function on(u){if(!(u=Wt[u>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(u))u=c[1];else{if(!(c=/^(.+?)@/.exec(u)))return 0;u=c[1]}rt(on.hd??0),c=Jr(u)+1;var _=vr(c);return _&&wt(u,_,c),on.hd=_,on.hd}function N_(u){u>>>=0;var c=(x(),P).length;if(u<=c||4294901760<u)return!1;for(var _=1;4>=_;_*=2){var m=c*(1+.2/_);m=Math.min(m,u+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(u,m)/65536))-bt.buffer.byteLength+65535)/65536|0;try{bt.grow(m),H();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}function D_(u,c,_){if(u>>>=0,c>>>=0,Wt.gd==u)var m=Wt.Jd;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),Hh(m);for(var S=3;m[S]&&sn(m[S])!=u;)++S;for(u=0;u<_&&m[u+S];++u)(x(),O)[c+4*u>>>2>>>0]=sn(m[u+S]);return u}var ma,ga={},Fh=()=>{var m;if(!ma){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((m=globalThis.navigator)==null?void 0:m.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in ga)ga[u]===void 0?delete c[u]:c[u]=ga[u];var _=[];for(u in c)_.push(`${u}=${c[u]}`);ma=_}return ma};function jh(u,c){if(i)return ie(19,1,u,c);u>>>=0,c>>>=0;var _,m=0,S=0;for(_ of Fh()){var I=c+m;(x(),X)[u+S>>>2>>>0]=I,m+=wt(_,I,1/0)+1,S+=4}return 0}function Kh(u,c){if(i)return ie(20,1,u,c);u>>>=0,c>>>=0;var _=Fh();for(var m of((x(),X)[u>>>2>>>0]=_.length,u=0,_))u+=Jr(m)+1;return(x(),X)[c>>>2>>>0]=u,0}function Xh(u){return i?ie(21,1,u):52}function Zh(u,c,_,m){return i?ie(22,1,u,c,_,m):52}function Yh(u,c,_,m){return i?ie(23,1,u,c,_,m):70}var U_=[null,[],[]];function Qh(u,c,_,m){if(i)return ie(24,1,u,c,_,m);c>>>=0,_>>>=0,m>>>=0;for(var S=0,I=0;I<_;I++){var A=(x(),X)[c>>>2>>>0],N=(x(),X)[c+4>>>2>>>0];c+=8;for(var G=0;G<N;G++){var K=u,se=(x(),P)[A+G>>>0],he=U_[K];se===0||se===10?((K===1?T:E)(gh(he)),he.length=0):he.push(se)}S+=N}return(x(),X)[m>>>2>>>0]=S,0}function P_(u){return u>>>0}i||(function(){for(var u=t.numThreads-1;u--;)lh();Oe.push(async()=>{var c=(async function(){if(!i)return Promise.all(_t.map(uh))})();Le++,await c,--Le==0&&Re&&(c=Re,Re=null,c())})})(),i||(bt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),H()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>ue(),t.stackRestore=u=>oe(u),t.stackAlloc=u=>ba(u),t.setValue=function(u,c,_="i8"){switch(_.endsWith("*")&&(_="*"),_){case"i1":case"i8":(x(),M)[u>>>0]=c;break;case"i16":(x(),V)[u>>>1>>>0]=c;break;case"i32":(x(),O)[u>>>2>>>0]=c;break;case"i64":(x(),de)[u>>>3>>>0]=BigInt(c);break;case"float":(x(),j)[u>>>2>>>0]=c;break;case"double":(x(),Y)[u>>>3>>>0]=c;break;case"*":(x(),X)[u>>>2>>>0]=c;break;default:W(`invalid type for setValue: ${_}`)}},t.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(x(),M)[u>>>0];case"i16":return(x(),V)[u>>>1>>>0];case"i32":return(x(),O)[u>>>2>>>0];case"i64":return(x(),de)[u>>>3>>>0];case"float":return(x(),j)[u>>>2>>>0];case"double":return(x(),Y)[u>>>3>>>0];case"*":return(x(),X)[u>>>2>>>0];default:W(`invalid type for getValue: ${c}`)}},t.UTF8ToString=Te,t.stringToUTF8=wt,t.lengthBytesUTF8=Jr;var Jh,ef,un,rt,vr,ya,tf,rf,nf,_a,af,sf,le,xr,of,oe,ba,ue,uf,wa,lf,df,cf,$a,pf,hf,ff,mf,gf,yf,_f,bf,wf,$f,vf,xf,Sf,Tf,kf,If,Ef,zf,Cf,Af,Mf,Of,Rf,Bf,Nf,Df,Uf,Pf,Lf,qf,Wf,Vf,Gf,Hf,Ff,jf,Kf,Xf,Zf,ct,L_=[qe,Zr,ph,yh,_h,bh,wh,$h,vh,xh,Sh,Th,kh,Ih,Eh,zh,qh,Wh,Vh,jh,Kh,Xh,Zh,Yh,Qh],va={1003524:(u,c,_,m,S)=>{if(t===void 0||!t.Xc)return 1;if((u=Te(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Xc.get(u)))return 2;if(c=Number(c>>>0),_=Number(_>>>0),m=Number(m>>>0),c+_>u.byteLength)return 3;try{let I=u.subarray(c,c+_);switch(S){case 0:(x(),P).set(I,m>>>0);break;case 1:t.Qd?t.Qd(m,I):t.Id(m,I);break;default:return 4}return 0}catch{return 4}},1004348:(u,c,_)=>{t.td(u,(x(),P).subarray(c>>>0,c+_>>>0))},1004412:()=>t.Sd(),1004454:u=>{t.sd(u)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:u=>t.Ad(u),1004609:u=>t.Ed(u),1004641:(u,c,_)=>{t.ed(Number(u),Number(c),Number(_),!0)},1004704:(u,c,_)=>{t.ed(Number(u),Number(c),Number(_))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:u=>{t.$b("Abs",u,void 0)},1004869:u=>{t.$b("Neg",u,void 0)},1004920:u=>{t.$b("Floor",u,void 0)},1004973:u=>{t.$b("Ceil",u,void 0)},1005025:u=>{t.$b("Reciprocal",u,void 0)},1005083:u=>{t.$b("Sqrt",u,void 0)},1005135:u=>{t.$b("Exp",u,void 0)},1005186:u=>{t.$b("Erf",u,void 0)},1005237:u=>{t.$b("Sigmoid",u,void 0)},1005292:(u,c,_)=>{t.$b("HardSigmoid",u,{alpha:c,beta:_})},1005371:u=>{t.$b("Log",u,void 0)},1005422:u=>{t.$b("Sin",u,void 0)},1005473:u=>{t.$b("Cos",u,void 0)},1005524:u=>{t.$b("Tan",u,void 0)},1005575:u=>{t.$b("Asin",u,void 0)},1005627:u=>{t.$b("Acos",u,void 0)},1005679:u=>{t.$b("Atan",u,void 0)},1005731:u=>{t.$b("Sinh",u,void 0)},1005783:u=>{t.$b("Cosh",u,void 0)},1005835:u=>{t.$b("Asinh",u,void 0)},1005888:u=>{t.$b("Acosh",u,void 0)},1005941:u=>{t.$b("Atanh",u,void 0)},1005994:u=>{t.$b("Tanh",u,void 0)},1006046:u=>{t.$b("Not",u,void 0)},1006097:(u,c,_)=>{t.$b("Clip",u,{min:c,max:_})},1006166:u=>{t.$b("Clip",u,void 0)},1006218:(u,c)=>{t.$b("Elu",u,{alpha:c})},1006276:u=>{t.$b("Gelu",u,void 0)},1006328:u=>{t.$b("Relu",u,void 0)},1006380:(u,c)=>{t.$b("LeakyRelu",u,{alpha:c})},1006444:(u,c)=>{t.$b("ThresholdedRelu",u,{alpha:c})},1006514:(u,c)=>{t.$b("Cast",u,{to:c})},1006572:u=>{t.$b("Add",u,void 0)},1006623:u=>{t.$b("Sub",u,void 0)},1006674:u=>{t.$b("Mul",u,void 0)},1006725:u=>{t.$b("Div",u,void 0)},1006776:u=>{t.$b("Pow",u,void 0)},1006827:u=>{t.$b("Equal",u,void 0)},1006880:u=>{t.$b("Greater",u,void 0)},1006935:u=>{t.$b("GreaterOrEqual",u,void 0)},1006997:u=>{t.$b("Less",u,void 0)},1007049:u=>{t.$b("LessOrEqual",u,void 0)},1007108:(u,c,_,m,S)=>{t.$b("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1007283:(u,c,_,m,S)=>{t.$b("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1007457:(u,c,_,m,S)=>{t.$b("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1007631:(u,c,_,m,S)=>{t.$b("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1007806:(u,c,_,m,S)=>{t.$b("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1007980:(u,c,_,m,S)=>{t.$b("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1008153:(u,c,_,m,S)=>{t.$b("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1008326:(u,c,_,m,S)=>{t.$b("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1008503:(u,c,_,m,S)=>{t.$b("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1008683:(u,c,_,m,S)=>{t.$b("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!_,axes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1008863:u=>{t.$b("Where",u,void 0)},1008916:(u,c,_)=>{t.$b("Transpose",u,{perm:c?Array.from((x(),O).subarray(Number(c)>>>0,Number(_)>>>0)):[]})},1009040:(u,c,_,m)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:Te(_),format:m?"NHWC":"NCHW"})},1009173:(u,c,_,m)=>{t.$b("DepthToSpace",u,{blocksize:c,mode:Te(_),format:m?"NHWC":"NCHW"})},1009306:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e,vt)=>{t.$b("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[_],group:m,kernelShape:[S],pads:[I,A],strides:[N],wIsConst:()=>!!(x(),M)[K>>>0],outputPadding:se?Array.from((x(),O).subarray(Number(se)>>>0,Number(he)>>>0)):[],outputShape:ye?Array.from((x(),O).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:Te(vt)})},1009739:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e)=>{t.$b("ConvTranspose",u,{format:N?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),O).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:m,kernelShape:Array.from((x(),O).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),M)[G>>>0],outputPadding:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:he?Array.from((x(),O).subarray(Number(he)>>>0,Number(ye)>>>0)):[],activation:Te($e)})},1010400:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e,vt)=>{t.$b("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[_],group:m,kernelShape:[S],pads:[I,A],strides:[N],wIsConst:()=>!!(x(),M)[K>>>0],outputPadding:se?Array.from((x(),O).subarray(Number(se)>>>0,Number(he)>>>0)):[],outputShape:ye?Array.from((x(),O).subarray(Number(ye)>>>0,Number($e)>>>0)):[],activation:Te(vt)})},1010833:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e)=>{t.$b("ConvTranspose",u,{format:N?"NHWC":"NCHW",autoPad:c,dilations:Array.from((x(),O).subarray(Number(_)>>>0,(Number(_)>>>0)+2>>>0)),group:m,kernelShape:Array.from((x(),O).subarray(Number(S)>>>0,(Number(S)>>>0)+2>>>0)),pads:Array.from((x(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from((x(),O).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(x(),M)[G>>>0],outputPadding:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:he?Array.from((x(),O).subarray(Number(he)>>>0,Number(ye)>>>0)):[],activation:Te($e)})},1011494:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1011585:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e)=>{t.$b("AveragePool",u,{format:$e?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:m,storage_order:S,dilations:I?Array.from((x(),O).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(G)>>>0)):[],pads:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((x(),O).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1012064:(u,c)=>{t.$b("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},1012155:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e)=>{t.$b("AveragePool",u,{format:$e?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:m,storage_order:S,dilations:I?Array.from((x(),O).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(G)>>>0)):[],pads:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((x(),O).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1012634:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1012721:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e)=>{t.$b("MaxPool",u,{format:$e?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:m,storage_order:S,dilations:I?Array.from((x(),O).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(G)>>>0)):[],pads:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((x(),O).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1013196:(u,c)=>{t.$b("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},1013283:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e)=>{t.$b("MaxPool",u,{format:$e?"NHWC":"NCHW",auto_pad:c,ceil_mode:_,count_include_pad:m,storage_order:S,dilations:I?Array.from((x(),O).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(G)>>>0)):[],pads:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:he?Array.from((x(),O).subarray(Number(he)>>>0,Number(ye)>>>0)):[]})},1013758:(u,c,_,m,S)=>{t.$b("Gemm",u,{alpha:c,beta:_,transA:m,transB:S})},1013862:u=>{t.$b("MatMul",u,void 0)},1013916:(u,c,_,m)=>{t.$b("ArgMax",u,{keepDims:!!c,selectLastIndex:!!_,axis:m})},1014024:(u,c,_,m)=>{t.$b("ArgMin",u,{keepDims:!!c,selectLastIndex:!!_,axis:m})},1014132:(u,c)=>{t.$b("Softmax",u,{axis:c})},1014195:(u,c)=>{t.$b("Concat",u,{axis:c})},1014255:(u,c,_,m,S)=>{t.$b("Split",u,{axis:c,numOutputs:_,splitSizes:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1014411:u=>{t.$b("Expand",u,void 0)},1014465:(u,c)=>{t.$b("Gather",u,{axis:Number(c)})},1014536:(u,c)=>{t.$b("GatherElements",u,{axis:Number(c)})},1014615:(u,c)=>{t.$b("GatherND",u,{batch_dims:Number(c)})},1014694:(u,c,_,m,S,I,A,N,G,K,se)=>{t.$b("Resize",u,{antialias:c,axes:_?Array.from((x(),O).subarray(Number(_)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Te(S),cubicCoeffA:I,excludeOutside:A,extrapolationValue:N,keepAspectRatioPolicy:Te(G),mode:Te(K),nearestMode:Te(se)})},1015056:(u,c,_,m,S,I,A)=>{t.$b("Slice",u,{starts:c?Array.from((x(),O).subarray(Number(c)>>>0,Number(_)>>>0)):[],ends:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[],axes:I?Array.from((x(),O).subarray(Number(I)>>>0,Number(A)>>>0)):[]})},1015320:u=>{t.$b("Tile",u,void 0)},1015372:(u,c,_)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:_?"NHWC":"NCHW"})},1015486:(u,c,_)=>{t.$b("InstanceNormalization",u,{epsilon:c,format:_?"NHWC":"NCHW"})},1015600:u=>{t.$b("Range",u,void 0)},1015653:(u,c)=>{t.$b("Einsum",u,{equation:Te(c)})},1015734:(u,c,_,m,S)=>{t.$b("Pad",u,{mode:c,value:_,pads:m?Array.from((x(),O).subarray(Number(m)>>>0,Number(S)>>>0)):[]})},1015877:(u,c,_,m,S,I)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:_,spatial:!!S,trainingMode:!!m,format:I?"NHWC":"NCHW"})},1016046:(u,c,_,m,S,I)=>{t.$b("BatchNormalization",u,{epsilon:c,momentum:_,spatial:!!S,trainingMode:!!m,format:I?"NHWC":"NCHW"})},1016215:(u,c,_)=>{t.$b("CumSum",u,{exclusive:Number(c),reverse:Number(_)})},1016312:(u,c,_)=>{t.$b("DequantizeLinear",u,{axis:c,blockSize:_})},1016402:(u,c,_,m,S)=>{t.$b("GridSample",u,{align_corners:c,mode:Te(_),padding_mode:Te(m),format:S?"NHWC":"NCHW"})},1016572:(u,c,_,m,S)=>{t.$b("GridSample",u,{align_corners:c,mode:Te(_),padding_mode:Te(m),format:S?"NHWC":"NCHW"})},1016742:(u,c)=>{t.$b("ScatterND",u,{reduction:Te(c)})},1016827:(u,c,_,m,S,I,A,N,G)=>{t.$b("Attention",u,{numHeads:c,isUnidirectional:_,maskFilterValue:m,scale:S,doRotary:I,qkvHiddenSizes:A?Array.from((x(),O).subarray(Number(N)>>>0,Number(N)+A>>>0)):[],pastPresentShareBuffer:!!G})},1017099:u=>{t.$b("BiasAdd",u,void 0)},1017154:u=>{t.$b("BiasSplitGelu",u,void 0)},1017215:u=>{t.$b("FastGelu",u,void 0)},1017271:(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e,vt,xa)=>{t.$b("Conv",u,{format:he?"NHWC":"NCHW",auto_pad:c,dilations:_?Array.from((x(),O).subarray(Number(_)>>>0,Number(m)>>>0)):[],group:S,kernel_shape:I?Array.from((x(),O).subarray(Number(I)>>>0,Number(A)>>>0)):[],pads:N?Array.from((x(),O).subarray(Number(N)>>>0,Number(G)>>>0)):[],strides:K?Array.from((x(),O).subarray(Number(K)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(x(),M)[Number(ye)>>>0],activation:Te($e),activation_params:vt?Array.from((x(),j).subarray(Number(vt)>>>0,Number(xa)>>>0)):[]})},1017855:u=>{t.$b("Gelu",u,void 0)},1017907:(u,c,_,m,S,I,A,N,G)=>{t.$b("GroupQueryAttention",u,{numHeads:c,kvNumHeads:_,scale:m,softcap:S,doRotary:I,rotaryInterleaved:A,smoothSoftmax:N,localWindowSize:G})},1018124:(u,c,_,m)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:_,simplified:!!m})},1018235:(u,c,_,m)=>{t.$b("LayerNormalization",u,{axis:c,epsilon:_,simplified:!!m})},1018346:(u,c,_,m,S,I)=>{t.$b("MatMulNBits",u,{k:c,n:_,accuracyLevel:m,bits:S,blockSize:I})},1018473:(u,c,_,m,S,I)=>{t.$b("MultiHeadAttention",u,{numHeads:c,isUnidirectional:_,maskFilterValue:m,scale:S,doRotary:I})},1018632:(u,c)=>{t.$b("QuickGelu",u,{alpha:c})},1018696:(u,c,_,m,S)=>{t.$b("RotaryEmbedding",u,{interleaved:!!c,numHeads:_,rotaryEmbeddingDim:m,scale:S})},1018835:(u,c,_)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!_})},1018937:(u,c,_)=>{t.$b("SkipLayerNormalization",u,{epsilon:c,simplified:!!_})},1019039:(u,c,_,m)=>{t.$b("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:_,blockSize:m})},1019160:u=>{t.Fd(u)},1019194:(u,c)=>t.Hd(Number(u),Number(c),t.Yc.Kd,t.Yc.errors)};function q_(u,c,_){return Nh(async()=>{await t.Dd(Number(u),Number(c),Number(_))})}function W_(){return typeof wasmOffsetConverter<"u"}function V_(u,c,_,m){var S=ue();try{return bf(u,c,_,m)}catch(I){if(oe(S),I!==I+0)throw I;le(1,0)}}function G_(u,c,_){var m=ue();try{return mf(u,c,_)}catch(S){if(oe(m),S!==S+0)throw S;le(1,0)}}function H_(u){var c=ue();try{pf(u)}catch(_){if(oe(c),_!==_+0)throw _;le(1,0)}}function F_(u,c){var _=ue();try{return $a(u,c)}catch(m){if(oe(_),m!==m+0)throw m;le(1,0)}}function j_(u,c,_){var m=ue();try{cf(u,c,_)}catch(S){if(oe(m),S!==S+0)throw S;le(1,0)}}function K_(u,c){var _=ue();try{wf(u,c)}catch(m){if(oe(_),m!==m+0)throw m;le(1,0)}}function X_(u,c,_,m,S,I,A){var N=ue();try{return yf(u,c,_,m,S,I,A)}catch(G){if(oe(N),G!==G+0)throw G;le(1,0)}}function Z_(u,c,_,m,S,I){var A=ue();try{hf(u,c,_,m,S,I)}catch(N){if(oe(A),N!==N+0)throw N;le(1,0)}}function Y_(u,c,_,m){var S=ue();try{_f(u,c,_,m)}catch(I){if(oe(S),I!==I+0)throw I;le(1,0)}}function Q_(u,c,_,m,S){var I=ue();try{ff(u,c,_,m,S)}catch(A){if(oe(I),A!==A+0)throw A;le(1,0)}}function J_(u,c,_,m,S,I,A){var N=ue();try{vf(u,c,_,m,S,I,A)}catch(G){if(oe(N),G!==G+0)throw G;le(1,0)}}function eb(u,c,_,m,S,I,A){var N=ue();try{xf(u,c,_,m,S,I,A)}catch(G){if(oe(N),G!==G+0)throw G;le(1,0)}}function tb(u,c,_,m,S,I,A,N){var G=ue();try{If(u,c,_,m,S,I,A,N)}catch(K){if(oe(G),K!==K+0)throw K;le(1,0)}}function rb(u,c,_,m,S){var I=ue();try{return $f(u,c,_,m,S)}catch(A){if(oe(I),A!==A+0)throw A;le(1,0)}}function nb(u,c,_){var m=ue();try{return Ef(u,c,_)}catch(S){if(oe(m),S!==S+0)throw S;le(1,0)}}function ib(u,c,_,m,S,I,A,N){var G=ue();try{zf(u,c,_,m,S,I,A,N)}catch(K){if(oe(G),K!==K+0)throw K;le(1,0)}}function ab(u,c,_,m,S,I,A,N,G,K,se,he){var ye=ue();try{Sf(u,c,_,m,S,I,A,N,G,K,se,he)}catch($e){if(oe(ye),$e!==$e+0)throw $e;le(1,0)}}function sb(u,c,_,m,S,I){var A=ue();try{return Tf(u,c,_,m,S,I)}catch(N){if(oe(A),N!==N+0)throw N;le(1,0)}}function ob(u,c,_){var m=ue();try{return Cf(u,c,_)}catch(S){if(oe(m),S!==S+0)throw S;return le(1,0),0n}}function ub(u,c,_,m,S,I,A,N,G){var K=ue();try{gf(u,c,_,m,S,I,A,N,G)}catch(se){if(oe(K),se!==se+0)throw se;le(1,0)}}function lb(u){var c=ue();try{return Af(u)}catch(_){if(oe(c),_!==_+0)throw _;le(1,0)}}function db(u,c){var _=ue();try{return Ff(u,c)}catch(m){if(oe(_),m!==m+0)throw m;return le(1,0),0n}}function cb(u){var c=ue();try{return Mf(u)}catch(_){if(oe(c),_!==_+0)throw _;return le(1,0),0n}}function pb(u,c,_,m){var S=ue();try{return Uf(u,c,_,m)}catch(I){if(oe(S),I!==I+0)throw I;le(1,0)}}function hb(u,c,_,m,S){var I=ue();try{return Pf(u,c,_,m,S)}catch(A){if(oe(I),A!==A+0)throw A;le(1,0)}}function fb(u,c,_,m,S,I){var A=ue();try{return Lf(u,c,_,m,S,I)}catch(N){if(oe(A),N!==N+0)throw N;le(1,0)}}function mb(u,c,_,m,S,I){var A=ue();try{return qf(u,c,_,m,S,I)}catch(N){if(oe(A),N!==N+0)throw N;le(1,0)}}function gb(u,c,_,m,S,I,A,N){var G=ue();try{return kf(u,c,_,m,S,I,A,N)}catch(K){if(oe(G),K!==K+0)throw K;le(1,0)}}function yb(u,c,_,m,S){var I=ue();try{return Wf(u,c,_,m,S)}catch(A){if(oe(I),A!==A+0)throw A;return le(1,0),0n}}function _b(u,c,_,m){var S=ue();try{return Vf(u,c,_,m)}catch(I){if(oe(S),I!==I+0)throw I;le(1,0)}}function bb(u,c,_,m){var S=ue();try{return Gf(u,c,_,m)}catch(I){if(oe(S),I!==I+0)throw I;le(1,0)}}function wb(u,c,_,m,S,I,A,N,G,K,se,he){var ye=ue();try{return Hf(u,c,_,m,S,I,A,N,G,K,se,he)}catch($e){if(oe(ye),$e!==$e+0)throw $e;le(1,0)}}function $b(u,c,_,m,S,I,A,N,G,K,se){var he=ue();try{Nf(u,c,_,m,S,I,A,N,G,K,se)}catch(ye){if(oe(he),ye!==ye+0)throw ye;le(1,0)}}function vb(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e,vt,xa){var kb=ue();try{Df(u,c,_,m,S,I,A,N,G,K,se,he,ye,$e,vt,xa)}catch(Sa){if(oe(kb),Sa!==Sa+0)throw Sa;le(1,0)}}function xb(u,c,_){var m=ue();try{return Of(u,c,_)}catch(S){if(oe(m),S!==S+0)throw S;le(1,0)}}function Sb(u,c,_){var m=ue();try{return Rf(u,c,_)}catch(S){if(oe(m),S!==S+0)throw S;le(1,0)}}function Tb(u,c,_,m){var S=ue();try{Bf(u,c,_,m)}catch(I){if(oe(S),I!==I+0)throw I;le(1,0)}}function ln(){if(0<Le)Re=ln;else if(i)b==null||b(t),Z();else{for(var u=Oe;0<u.length;)u.shift()(t);0<Le?Re=ln:(t.calledRun=!0,z||(Z(),b==null||b(t)))}}return i||(ct=await Pe(),ln()),t.PTR_SIZE=4,L?t:new Promise((u,c)=>{b=u,$=c})}var ja,Ka,wm=q(()=>{var e,t;ja=Fa,Ka=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Ka&&Fa()}),_n,bn,Xa,De,Za,Ir,Ya,Qa,wn,Ja,$n,es,vn,ts,xn=q(()=>{mn(),_n=typeof location>"u"?void 0:location.origin,bn=self.location.href>"file:"&&self.location.href<"file;",Xa=()=>{{if(bn){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,_n).href}return self.location.href}},De=Xa(),Za=()=>{if(De&&!De.startsWith("blob:"))return De.substring(0,De.lastIndexOf("/")+1)},Ir=(e,t)=>{try{let r=t??De;return(r?new URL(e,r):new URL(e)).origin===_n}catch{return!1}},Ya=(e,t)=>{let r=t??De;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Qa=(e,t)=>`${t??"./"}${e}`,wn=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ja=async e=>(await import(e)).default,$n=(bm(),Jt(Va)).default,es=async()=>{if(!De)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ir(De))return[void 0,$n()];let e=await wn(De);return[e,$n(e)]},vn=(wm(),Jt(Ha)).default,ts=async(e,t,r,n)=>{let i=vn&&!(e||t);if(i)if(De)i=Ir(De)||n&&!r;else if(n&&!r)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,vn];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??Ya(s,t),o=r&&a&&!Ir(a,t),l=o?await wn(a):a??Qa(s,t);return[o?l:void 0,await Ja(l)]}}}),Sn,Er,nr,Tn,rs,ns,is,kn,be,kt=q(()=>{xn(),Er=!1,nr=!1,Tn=!1,rs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ns=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},is=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},kn=async e=>{if(Er)return Promise.resolve();if(nr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Tn)throw new Error("previous call to 'initializeWebAssembly()' failed.");nr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!is())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ns())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=rs();r>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,a=i==null?void 0:i.mjs,o=(a==null?void 0:a.href)??a,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,h=e.wasmBinary,[p,f]=await ts(o,s,r>1,!!h||!!d),g=!1,y=[];if(t>0&&y.push(new Promise(b=>{setTimeout(()=>{g=!0,b()},t)})),y.push(new Promise((b,$)=>{let w={numThreads:r};if(h)w.wasmBinary=h,w.locateFile=v=>v;else if(d||s)w.locateFile=v=>d??s+v;else if(o&&o.indexOf("blob:")!==0)w.locateFile=v=>new URL(v,o).href;else if(p){let v=Za();v&&(w.locateFile=k=>v+k)}f(w).then(v=>{nr=!1,Er=!0,Sn=v,b(),p&&URL.revokeObjectURL(p)},v=>{nr=!1,Tn=!0,$(v)})})),await Promise.race(y),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},be=()=>{if(Er&&Sn)return Sn;throw new Error("WebAssembly is not initialized yet.")}}),He,zr,ge,In=q(()=>{kt(),He=(e,t)=>{let r=be(),n=r.lengthBytesUTF8(e)+1,i=r._malloc(n);return r.stringToUTF8(e,i,n),t.push(i),i},zr=(e,t,r,n)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let a=t?t+i:i;if(typeof s=="object")zr(s,a+".",r,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ge=e=>{let t=be(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetLastError(i,i+n);let s=Number(t.getValue(i,n===4?"i32":"i64")),a=t.getValue(i+n,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),as,$m=q(()=>{kt(),In(),as=e=>{let t=be(),r=0,n=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=He(e.tag,n)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&ge("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&zr(e.extra,"",new WeakSet,(a,o)=>{let l=He(a,n),d=He(o,n);t._OrtAddRunConfigEntry(r,l,d)!==0&&ge(`Can't set a run config entry: ${a} - ${o}.`)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),n.forEach(a=>t._free(a)),s}}}),ss,os,us,It,ls,ds,vm=q(()=>{kt(),In(),ss=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},os=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},us=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},It=(e,t,r,n)=>{let i=He(t,n),s=He(r,n);be()._OrtAddSessionConfigEntry(e,i,s)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},ls=async(e,t,r)=>{let n=t.executionProviders;for(let i of n){let s=typeof i=="string"?i:i.name,a=[];switch(s){case"webnn":if(s="WEBNN",It(e,"session.disable_quant_qdq","1",r),It(e,"session.disable_qdq_constant_folding","1",r),typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&It(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);It(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=He(s,r),l=a.length,d=0,h=0;if(l>0){d=be()._malloc(l*be().PTR_SIZE),r.push(d),h=be()._malloc(l*be().PTR_SIZE),r.push(h);for(let p=0;p<l;p++)be().setValue(d+p*be().PTR_SIZE,a[p][0],"*"),be().setValue(h+p*be().PTR_SIZE,a[p][1],"*")}await be()._OrtAppendExecutionProvider(e,o,d,h,l)!==0&&ge(`Can't append execution provider: ${s}.`)}},ds=async e=>{let t=be(),r=0,n=[],i=e||{};us(i);try{let s=ss(i.graphOptimizationLevel??"all"),a=os(i.executionMode??"sequential"),o=typeof i.logId=="string"?He(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof i.optimizedModelFilePath=="string"?He(i.optimizedModelFilePath,n):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,l,d,h),r===0&&ge("Can't create session options."),i.executionProviders&&await ls(r,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);It(r,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[p,f]of Object.entries(i.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let g=He(p,n);t._OrtAddFreeDimensionOverride(r,g,f)!==0&&ge(`Can't set a free dimension override: ${p} - ${f}.`)}return i.extra!==void 0&&zr(i.extra,"",new WeakSet,(p,f)=>{It(r,p,f,n)}),[r,n]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),n.forEach(a=>t._free(a)),s}}}),Et,at,zt,Cr,Ar,En,zn,Cn,re=q(()=>{Et=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},at=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},zt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],n=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(n*r):void 0},Cr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ar=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},En=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",zn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Cn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),An,cs=q(()=>{mn(),An=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),n=r?parseInt(r,10):0;if(n<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let l=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,n)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ps,hs,fs,ms,Mn,gs,ce,st=q(()=>{re(),ps=["V","I","W","E","F"],hs=(e,t)=>{console.log(`[${ps[e]},${new Date().toISOString()}]${t}`)},Mn=(e,t)=>{fs=e,ms=t},gs=(e,t)=>{let r=Ar(e),n=Ar(fs);r>=n&&hs(r,typeof t=="function"?t():t)},ce=(...e)=>{ms&&gs(...e)}}),ys,Ft,B,Mr,_s,bs,ws,ne=q(()=>{ys=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ft=class{static calcShape(e,t,r=!1){let n=e.length,i=t.length;if(n===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(n<2||i<2)return;let o=ys.calcMatMulShape([e[n-2],e[n-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=n-o<0?1:e[n-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let h=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(h>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,n=t.length;if(r>n)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[n-i])return!1;return!0}},B=class dn{static size(t){return dn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let n=t.length;if(n===0)return[];let i=new Array(n),s=n-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return dn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return dn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,n){let i=1;for(let s=r;s<n;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let n=new Array(r);n[r-1]=1,n[r-2]=t[r-1];for(let i=r-3;i>=0;--i)n[i]=n[i+1]*t[i+1];return n}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(n=>this.normalizeAxis(n,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(n=>t[n]):t.slice().reverse()}static padShape(t,r){let n=t.length;return t.map((i,s)=>i+r[s]+r[s+n])}static areEqual(t,r){return t.length!==r.length?!1:t.every((n,i)=>n===r[i])}},Mr=class Sr{static adjustPoolAttributes(t,r,n,i,s,a){if(!t&&n.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=n.length?n.push(r[o+2]):n[o]=r[o+2];for(let o=0;o<n.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<n.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<n.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<n.length;o++){if(n[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=n[o]||a[o+n.length]>=n[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,n,i,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Sr.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],n[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,n,i,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Sr.computeShapeHelper(t,r,l,n,i,s,a,o),l}static computeConvOutputShape(t,r,n,i,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Sr.computeShapeHelper(!1,t,l,n,i,s,a,o),l}static computeShapeHelper(t,r,n,i,s,a,o,l){if(t)for(let d=0;d<r.length-2;d++)n.push(1);else for(let d=0;d<r.length-2;d++)n.push(Sr.adjustPadAndReturnShape(r[d+2],i[d],s[d],a[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,n,i,s,a,o,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+i-t;return s[a]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),s[o]=h-s[a],Math.floor((t+h-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/r+1)}},_s=class{static getShapeOfGemmResult(e,t,r,n,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(n?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(i&&!Ft.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},bs=-34028234663852886e22,ws=34028234663852886e22}),On,$s=q(()=>{re(),On=(e,t)=>new(Cr(t))(e)}),Rn,Bn,Nn,vs,Dn,xs,Un,Pn,Ln,Ss,Ts,xm=q(()=>{re(),st(),Rn=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Bn=(e,t)=>{if(t==="int32")return e;let r=Rn.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let n=r/8;if(e.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=e.byteLength/n,s=new(Cr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let a=new Int32Array(i);for(let o=0;o<i;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Nn=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,n=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},vs=1,Dn=()=>vs++,xs=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Un=(e,t)=>{let r=Rn.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((n,i)=>n*i)*r/8):0},Pn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:n,dataType:i,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=n,this.dataType=i,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Un(this.dataType,this.tensorShape)}destroy(){ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Nn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((n,i)=>n===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Ln=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,n){let i=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=xs.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(n){if(this.wrapper.byteLength!==Un(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),n&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Bn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let n=(t=this.wrapper)!=null&&t.isDataConverted?Nn(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(n):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(n);return}else return n.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ss=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Dn();return this.tensorTrackersById.set(e,new Ln(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,n,i){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${n}, copyOld: ${i}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,n,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,n){let i=this.getMLContext(e),s=Dn(),a=new Pn({sessionId:e,context:i,tensor:t,dataType:r,shape:n});return this.tensorTrackersById.set(s,new Ln(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,n,i,s,a){let o=this.getMLContext(e);for(let[d,h]of this.freeTensors.entries())if(h.canReuseTensor(o,t,r)){ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let p=this.freeTensors.splice(d,1)[0];return p.sessionId=e,p}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:n,writable:i,readable:s});return new Pn({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ts=(...e)=>new Ss(...e)}),ir,ks,Is,Sm=q(()=>{re(),kt(),$s(),xm(),st(),ir=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ks=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length===n.length&&r.every((i,s)=>i===n[s]&&e[i]===t[i])},Is=class{constructor(e){this.tensorManager=Ts(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Mn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(n=>n.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:n}),n}}else if(e===void 0){let r=this.mlContextCache.findIndex(n=>n.options===void 0&&n.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let n=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:n}),n}}let t=this.mlContextCache.findIndex(r=>ks(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let n=this.mlContextCache.findIndex(i=>i.mlContext===t);n!==-1&&this.mlContextCache.splice(n,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,n,i){let s=ir.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,n,i)}async createTemporaryTensor(e,t,r){ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let n=ir.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,n,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!be().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return On(r,t)}}registerMLTensor(e,t,r,n){let i=ir.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,i,n);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${n}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,n,i,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=s.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,h;switch(i.dataType){case"float32":h=new Float32Array(d);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":h=new Int32Array(d);break;case"uint32":h=new Uint32Array(d);break;case"int64":if(a){let p=Bn(new Uint8Array(d),"int64");h=new Int32Array(p.buffer),i.dataType="int32"}else h=new BigInt64Array(d);break;case"uint64":h=new BigUint64Array(d);break;case"int8":h=new Int8Array(d);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),n.constant(i,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let n=ir.get(Et(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof n>"u"?!1:r?!!(i!=null&&i.input.dataTypes.includes(n)):!!(i!=null&&i.output.dataTypes.includes(n))}flush(){}}}),qn=q(()=>{}),Wn,Or,Rr,Es,zs,Vn,Gn,Cs,As,Tm=q(()=>{st(),qn(),Wn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Or=[],Rr=e=>Math.ceil(Number(e)/16)*16,Es=e=>{for(let t=0;t<Or.length;t++){let r=Or[t];if(e<=r)return r}return Math.ceil(e/16)*16},zs=1,Vn=()=>zs++,Gn=async(e,t,r,n)=>{let i=Rr(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Cs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Wn)Or.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,n=t.byteOffset,i=t.byteLength,s=Rr(i),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,n,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let n=this.storageCache.get(t);if(!n)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==n.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Rr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,n.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let n;if(r){if(n=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, buffer is the same, skip.`),n;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else n=Vn();return this.storageCache.set(n,{gpuData:{id:n,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${n}, registered.`),n}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Es(e),n,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?n=o.pop():n=this.backend.device.createBuffer({size:r,usage:t}):n=this.backend.device.createBuffer({size:r,usage:t})}else n=this.backend.device.createBuffer({size:r,usage:t});let a={id:Vn(),type:0,buffer:n};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Gn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Wn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},As=(...e)=>new Cs(...e)}),Ms,me,xe=q(()=>{Ms=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},me=e=>new Ms(e)}),jt,Br,ke,ze,ee,ve,Hn,Kt,ht,J,ar,D,Q,Os,Fn,Rs,Bs,ae=q(()=>{re(),ne(),jt=64,Br=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ke=(e,t=1)=>{let r=Br(e,t);return typeof r=="string"?r:r[0]},ze=(e,t=1)=>{let r=Br(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:B.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,Hn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Kt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ht=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,J=(e,t,r,n)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?n==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:n==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ar=(e,t,r,n,i)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Br(t,i),h=typeof d=="string"?d:d[1],p=typeof d=="string"?d:d[0],f={indices:l,value:h,storage:p,tensor:t},g=L=>typeof L=="string"?L:`${L}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",$=`${b}${e}_shape`,w=`${b}${e}_strides`,v="";for(let L=0;L<a-1;L++)v+=`
    let dim${L} = current / ${J(w,L,a)};
    let rest${L} = current % ${J(w,L,a)};
    indices[${L}] = dim${L};
    current = rest${L};
    `;v+=`indices[${a-1}] = current;`;let k=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${v}
    return indices;
  }`,T=L=>(y.offsetToIndices=!0,a<2?L:`o2i_${e}(${L})`),E=[];if(a>=2)for(let L=a-1;L>=0;L--)E.push(`${J(w,L,a)} * (indices[${L}])`);let z=a<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=L=>(y.indicesToOffset=!0,a<2?L:`i2o_${e}(${L})`),x=(...L)=>a===0?"0u":`${f.indices}(${L.map(g).join(",")})`,R=(L,H)=>a<2?`${L}`:`${J(L,H,a)}`,M=(L,H,Z)=>a<2?`${L}=${Z};`:`${J(L,H,a)}=${Z};`,P={},V=(L,H)=>{y.broadcastedIndicesToOffset=!0;let Z=`${H.name}broadcastedIndicesTo${e}Offset`;if(Z in P)return`${Z}(${L})`;let W=[];for(let pe=a-1;pe>=0;pe--){let Pe=H.indicesGet("outputIndices",pe+H.rank-a);W.push(`${R(w,pe)} * (${Pe} % ${R($,pe)})`)}return P[Z]=`fn ${Z}(outputIndices: ${H.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${Z}(${L})`},F=(L,H)=>(()=>{if(f.storage===f.value)return`${e}[${L}]=${H};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${L}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${L}]=vec2<u32>(u32(${H}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${L}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),O=L=>(()=>{if(f.storage===f.value)return`${e}[${L}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${L}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${L}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${L}] & 0xFFu), bool(${e}[${L}] & 0xFF00u), bool(${e}[${L}] & 0xFF0000u), bool(${e}[${L}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),X=a<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${h} {
    return ${O(`i2o_${e}(indices)`)};
  }`,j=a<2?"":(()=>{let L=o.map(Z=>`d${Z}: u32`).join(", "),H=o.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${L}) -> ${h} {
    return get_${e}ByIndices(${x(H)});
  }`})(),Y=(...L)=>{if(L.length!==a)throw new Error(`indices length must be ${a}`);let H=L.map(g).join(",");return a===0?O("0u"):a===1?O(H[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${H})`)},de=L=>a<2?O(L):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${L})`),U=a<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${h}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,te=a<2?"":(()=>{let L=o.map(Z=>`d${Z}: u32`).join(", "),H=o.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${L}, value: ${h}) {
    set_${e}ByIndices(${x(H)}, value);
  }`})();return{impl:()=>{let L=[],H=!1;return y.offsetToIndices&&(L.push(k),H=!0),y.indicesToOffset&&(L.push(z),H=!0),y.broadcastedIndicesToOffset&&(Object.values(P).forEach(Z=>L.push(Z)),H=!0),y.set&&(L.push(te),H=!0),y.setByIndices&&(L.push(U),H=!0),y.get&&(L.push(j),H=!0),y.getByIndices&&(L.push(X),H=!0),!s&&H&&L.unshift(`const ${$} = ${f.indices}(${r.join(",")});`,`const ${w} = ${f.indices}(${B.computeStrides(r).join(",")});`),L.join(`
`)},type:f,offsetToIndices:T,indicesToOffset:C,broadcastedIndicesToOffset:V,indices:x,indicesGet:R,indicesSet:M,set:(...L)=>{if(L.length!==a+1)throw new Error(`indices length must be ${a}`);let H=L[a];if(typeof H!="string")throw new Error("value must be string");let Z=L.slice(0,a).map(g).join(",");return a===0?F("0u",H):a===1?F(Z[0],H):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Z}, ${H})`)},setByOffset:F,setByIndices:(L,H)=>a<2?F(L,H):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${L}, ${H});`),get:Y,getByOffset:O,getByIndices:de,usage:n,name:e,strides:w,shape:$,rank:a}},D=(e,t,r,n=1)=>ar(e,t,r,"input",n),Q=(e,t,r,n=1)=>ar(e,t,r,"output",n),Os=(e,t,r)=>ar(e,t,r,"atomicOutput",1),Fn=(e,t,r,n=1)=>ar(e,t,r,"internal",n),Rs=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=jt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],n=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||n>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*n>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${n}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Bs=(e,t)=>new Rs(e,t)}),Ns,jn,Ds,Us,Ps,Ls,Ue,qs,Ws,ft=q(()=>{re(),ne(),xe(),ae(),Ns=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},jn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ds=(e,t)=>B.sortBasedOnPerm(e,jn(e.length,t)),Us=(e,t,r,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Ps=(e,t)=>{let r=[],n=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&n.push(t[i]);return{newShape:r,newPerm:n}},Ls=(e,t)=>{let r=0;for(let n=0;n<e.length;++n)if(t[e[n]]!==1){if(e[n]<r)return!1;r=e[n]}return!0},Ue=(e,t)=>{let r=e.dataType,n=e.dims.length,i=jn(n,t),s=Ds(e.dims,i),a=e.dims,o=s,l=n<2||Ls(i,e.dims),d;if(l)return d=y=>{let b=D("input",r,a,4),$=Q("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:h,newPerm:p}=Ps(e.dims,i),f=B.areEqual(p,[2,3,1]),g=B.areEqual(p,[3,1,2]);if(h.length===2||f||g){a=f?[h[0],h[1]*h[2]]:g?[h[0]*h[1],h[2]]:h,o=[a[1],a[0]];let y=16;return d=b=>{let $=D("a",r,a.length),w=Q("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables($,w)}
  var<workgroup> tile : array<array<${w.type.value}, ${y+1}>, ${y}>;
  ${b.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${$.getByIndices(`${$.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${w.setByIndices(`${w.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:b},...ee(a,o)]}},getShaderSource:d}}return d=y=>{let b=D("a",r,a.length),$=Q("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(b,$)}

  ${Us(i,n,b,$)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=B.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ee(a,o)]}},getShaderSource:d}},qs=(e,t)=>{Ns(e.inputs,t.perm),e.compute(Ue(e.inputs[0],t.perm))},Ws=e=>me({perm:e.perm})}),Vs,Gs,Hs,Fs,js,Ks,Xs,Zs,Ys,Qs,Fe,Js,eo,to,ro,no,io,ao,so,oo,uo,km=q(()=>{re(),ne(),ae(),Xn(),ft(),Vs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Gs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Hs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},js=(e,t)=>{let r=[];for(let n=t-e;n<t;++n)r.push(n);return r},Ks=(e,t)=>{let r=[],n=e.length;for(let s=0;s<n;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Xs=(e,t)=>{let r=e.length+t.length,n=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?n.push(e[i++]):n.push(1);return n},Zs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ys=(e,t)=>{let r=[];if(!Zs(e,t)){for(let n=0;n<t;++n)e.indexOf(n)===-1&&r.push(n);e.forEach(n=>r.push(n))}return r},Qs=(e,t,r,n,i,s,a)=>{let o=r[0].dims,l=B.size(s),d=B.size(a),h=D("_A",r[0].dataType,o),p=Q("output",i,s),f=64;l===1&&(f=256);let g=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,y=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,p)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hs[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Vs[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Gs[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${n==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Fs[n]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Fe=(e,t,r,n)=>{let i=e.inputs.length===1?r:Kn(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((g,y)=>y));let a=B.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=Ys(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ue(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=js(o.length,l.dims.length));let[h,p]=Ks(l.dims,o),f=h;i.keepDims&&(f=Xs(h,a)),e.compute(Qs(t,i.cacheKey,[l],n,e.inputs[0].dataType,f,p),{inputs:[l]})},Js=(e,t)=>{Fe(e,"ReduceMeanShared",t,"mean")},eo=(e,t)=>{Fe(e,"ReduceL1Shared",t,"l1")},to=(e,t)=>{Fe(e,"ReduceL2Shared",t,"l2")},ro=(e,t)=>{Fe(e,"ReduceLogSumExpShared",t,"logSumExp")},no=(e,t)=>{Fe(e,"ReduceMaxShared",t,"max")},io=(e,t)=>{Fe(e,"ReduceMinShared",t,"min")},ao=(e,t)=>{Fe(e,"ReduceProdShared",t,"prod")},so=(e,t)=>{Fe(e,"ReduceSumShared",t,"sum")},oo=(e,t)=>{Fe(e,"ReduceSumSquareShared",t,"sumSquare")},uo=(e,t)=>{Fe(e,"ReduceLogSumShared",t,"logSum")}}),je,lo,Nr,Kn,Ke,co,po,ho,fo,mo,go,yo,_o,bo,wo,Xe,$o,vo,xo,So,To,ko,Io,Eo,zo,Co,Xn=q(()=>{re(),ne(),xe(),ae(),km(),je=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},lo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Nr=(e,t,r,n,i,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,h=d.length,p=B.normalizeAxes(i,h),f=!o&&p.length===0;d.forEach((b,$)=>{f||p.indexOf($)>=0?a&&l.push(1):l.push(b)});let g=l.length,y=B.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let $=[],w=D("_A",r[0].dataType,h),v=Q("output",s,g),k=n(w,v,p),T=k[2];for(let E=0,z=0;E<h;E++)f||p.indexOf(E)>=0?(a&&z++,T=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${w.indicesSet("input_indices",E,`j${E}`)}
                  ${T}
                }`):($.push(`${w.indicesSet("input_indices",E,v.indicesGet("output_indices",z))};`),z++);return`

        ${b.registerUniform("output_size","u32").declareVariables(w,v)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${w.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${$.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${T}
          ${k[3]}
          ${k.length===4?v.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ee(d,l)]})}},Kn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ke=(e,t,r,n)=>{let i=e.inputs,s=i.length===1?r:Kn(i,r);e.compute(Nr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?lo:n,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},co=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},po=(e,t)=>{je(e.inputs),Ke(e,"ReduceL1",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ho=(e,t)=>{je(e.inputs),Ke(e,"ReduceL2",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},fo=(e,t)=>{je(e.inputs),Ke(e,"ReduceLogSumExp",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},mo=(e,t)=>{je(e.inputs),Ke(e,"ReduceMax",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},go=(e,t)=>{je(e.inputs),Ke(e,"ReduceMean",t,(r,n,i)=>{let s=1;for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${n.type.value}(sum / ${s});`]})},yo=(e,t)=>{je(e.inputs),Ke(e,"ReduceMin",t,(r,n,i)=>{let s=[];for(let a=0;a<r.rank;a++)(i.indexOf(a)>=0||i.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},_o=(e,t)=>{je(e.inputs),Ke(e,"ReduceProd",t,(r,n)=>[`var value = ${n.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},bo=(e,t)=>{je(e.inputs),Ke(e,"ReduceSum",t,(r,n)=>[`var value = ${n.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},wo=(e,t)=>{je(e.inputs),Ke(e,"ReduceSumSquare",t,(r,n)=>[`var t = ${n.type.value}(0); var value = ${n.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Xe=(e,t,r)=>{if(t.length===0)return r;let n=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?n*=e[s]:i*=e[s];return i<32&&n>1024},$o=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?go(e,t):Js(e,t)},vo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?po(e,t):eo(e,t)},xo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ho(e,t):to(e,t)},So=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fo(e,t):ro(e,t)},To=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mo(e,t):no(e,t)},ko=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):io(e,t)},Io=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_o(e,t):ao(e,t)},Eo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bo(e,t):so(e,t)},zo=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wo(e,t):oo(e,t)},Co=(e,t)=>{Xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?co(e,t):uo(e,t)}}),Zn,Ao,Mo,Yn,Im=q(()=>{re(),xe(),Xn(),Zn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ao=(e,t)=>{Zn(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Nr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Mo=(e,t)=>{Zn(e.inputs);let r=(n,i,s)=>{let a=[];for(let o=0;o<n.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Nr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Yn=e=>me(e)}),Oo,Dr,Ro,Bo,No,sr,Do,Uo,Qn=q(()=>{re(),ne(),qn(),ae(),Oo=(e,t)=>{let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],h=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=i.dims[0]/3,f=p,g=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let y=d;if(p!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==p+f+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(a){if(f!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=a.dims[3])}let $=y+b,w=-1,v=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:y,totalSequenceLength:$,maxSequenceLength:w,inputHiddenSize:h,hiddenSize:p,vHiddenSize:g,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Dr=(e,t,r)=>t&&e?`
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
    `,Ro=(e,t,r,n,i,s,a,o)=>{let l=ve(a?1:s),d=64,h=s/l;h<d&&(d=32);let p=Math.ceil(s/l/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:h},{type:12,data:p}],g=ke(e.dataType,l),y=ze(1,l),b=["type"];a&&b.push("type"),o&&b.push("type");let $=w=>{let v=Q("x",e.dataType,e.dims,l),k=[v],T=a?D("seq_lens",a.dataType,a.dims):void 0;T&&k.push(T);let E=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;E&&k.push(E);let z=ze(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${w.registerUniforms(C).declareVariables(...k)}
  ${w.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Dr(T,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${g};${l}`,inputDependencies:b},getShaderSource:$,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:f})}},Bo=(e,t,r,n,i,s,a,o,l)=>{let d=a+s.kvSequenceLength,h=[s.batchSize,s.numHeads,s.sequenceLength,d],p=e>1&&n,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,g=p?[s.batchSize,f,d,s.headSize]:void 0,y=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,$=ve(s.headSize),w=s.headSize/$,v=12,k={x:Math.ceil(d/v),y:Math.ceil(s.sequenceLength/v),z:s.batchSize*s.numHeads},T=[{type:12,data:s.sequenceLength},{type:12,data:w},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:y}],E=p&&n&&B.size(n.dims)>0,z=["type","type"];E&&z.push("type"),i&&z.push("type"),o&&z.push("type"),l&&z.push("type");let C=[{dims:h,dataType:t.dataType,gpuDataType:0}];p&&C.push({dims:g,dataType:t.dataType,gpuDataType:0});let x=R=>{let M=D("q",t.dataType,t.dims,$),P=D("key",r.dataType,r.dims,$),V=[M,P];if(E){let U=D("past_key",n.dataType,n.dims,$);V.push(U)}i&&V.push(D("attention_bias",i.dataType,i.dims));let F=o?D("seq_lens",o.dataType,o.dims):void 0;F&&V.push(F);let O=l?D("total_sequence_length_input",l.dataType,l.dims):void 0;O&&V.push(O);let X=Q("output",t.dataType,h),j=[X];p&&j.push(Q("present_key",t.dataType,g,$));let Y=ze(1,$),de=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${M.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${M.type.storage}, ${v*v}>;
  ${R.registerUniforms(de).declareVariables(...V,...j)}
  ${R.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Dr(F,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&p?`
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
      var sum: f32 = ${(()=>{switch($){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${$}`)}})()};
        output[outputIdx] = ${X.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${$};${i!==void 0};${n!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:C,dispatchGroup:k,programUniforms:T}),getShaderSource:x}},No=(e,t,r,n,i,s,a=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,h=i.vHiddenSize*d,p=e>1&&n,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=p?[i.batchSize,f,l,i.headSize]:void 0,y=[i.batchSize,i.sequenceLength,h],b=12,$={x:Math.ceil(i.vHeadSize/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},w=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],v=p&&n&&B.size(n.dims)>0,k=["type","type"];v&&k.push("type"),a&&k.push("type"),o&&k.push("type");let T=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&T.push({dims:g,dataType:t.dataType,gpuDataType:0});let E=z=>{let C=D("probs",t.dataType,t.dims),x=D("v",r.dataType,r.dims),R=[C,x];v&&R.push(D("past_value",n.dataType,n.dims));let M=a?D("seq_lens",a.dataType,a.dims):void 0;a&&R.push(M);let P=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(P);let V=[Q("output",t.dataType,y)];p&&V.push(Q("present_value",t.dataType,g));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${C.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${C.type.value}, ${b*b}>;
  ${z.registerUniforms(F).declareVariables(...R,...V)}
  ${z.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Dr(M,P,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&p?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:T,dispatchGroup:$,programUniforms:w}),getShaderSource:E}},sr=(e,t,r,n,i,s,a,o,l,d,h=void 0,p=void 0)=>{let f=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),g=f>1?a:void 0,y=f>1?o:void 0,b=f>1?d.pastSequenceLength:0,$=b+d.kvSequenceLength,w=l&&B.size(l.dims)>0?l:void 0,v=[t,r];g&&B.size(g.dims)>0&&v.push(g),w&&v.push(w),h&&v.push(h),p&&v.push(p);let k=e.compute(Bo(f,t,r,g,w,d,b,h,p),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Ro(k,d.batchSize,d.numHeads,b,d.sequenceLength,$,h,p),{inputs:h&&p?[k,h,p]:[k],outputs:[]});let T=[k,n];y&&B.size(y.dims)>0&&T.push(y),h&&T.push(h),p&&T.push(p),e.compute(No(f,k,n,y,d,b,h,p),{inputs:T,outputs:f>1?[0,2]:[0]})},Do=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],n=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=p=>{let f=Q("output_q",l[0].dataType,r),g=Q("output_k",l[0].dataType,r),y=Q("output_v",l[0].dataType,r),b=D("input",l[0].dataType,l[0].dims),$=D("weight",l[1].dataType,l[1].dims),w=D("bias",l[2].dataType,l[2].dims),v=b.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${v}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${v}, ${a*a}>;
  var<workgroup> tileWeightK: array<${v}, ${a*a}>;
  var<workgroup> tileWeightV: array<${v}, ${a*a}>;
  ${p.registerUniforms(k).declareVariables(b,$,w,f,g,y)}
  ${p.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Uo=(e,t)=>{let r=Oo(e.inputs,t),[n,i,s]=Do(e,r);return sr(e,n,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Po,Lo,qo,Wo,Em=q(()=>{We(),re(),ne(),xe(),ae(),Po=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(n,i,s)=>{let a=i.length;if(a!==n.length)throw new Error(`${s}: num dimensions != ${a}`);i.forEach((o,l)=>{if(o!==n[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let n=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,n,"Invalid input scale"),r(e[2].dims,n,"Invalid input B"),r(e[3].dims,n,"Invalid input mean"),r(e[4].dims,n,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Lo=(e,t)=>{let{epsilon:r,spatial:n,format:i}=t,s=e[0].dims,a=n?ve(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?a:1,l=B.size(s)/a,d=n,h=d?s.length:s,p=D("x",e[0].dataType,e[0].dims,a),f=D("scale",e[1].dataType,e[1].dims,o),g=D("bias",e[2].dataType,e[2].dims,o),y=D("inputMean",e[3].dataType,e[3].dims,o),b=D("inputVar",e[4].dataType,e[4].dims,o),$=Q("y",e[0].dataType,h,a),w=()=>{let k="";if(n)k=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")k=`
            ${$.indicesSet("outputIndices","0","0")}
            let cOffset = ${$.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let T=1;T<f.rank;T++)k+=`cIndices[${T}] = outputIndices[${T}];`;k+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return k},v=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(p,f,g,y,b,$)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${$.offsetToIndices(`global_idx * ${a}`)};
    ${w()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${$.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ee(s)]:[{type:12,data:l}]})}},qo=e=>me(e),Wo=(e,t)=>{let{inputs:r,outputCount:n}=e,i=qo({...t,outputCount:n});if(_e.webgpu.validateInputContent&&Po(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Lo(r,i))}}),Vo,Go,Ho,zm=q(()=>{ne(),ae(),Vo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Go=e=>{let t=e[0].dims,r=e[0].dims[2],n=B.size(t)/4,i=e[0].dataType,s=D("input",i,t,4),a=D("bias",i,[r],4),o=D("residual",i,t,4),l=Q("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Ho=e=>{Vo(e.inputs),e.compute(Go(e.inputs))}}),Fo,fe,jo,Ko,Xo,Zo,Yo,Qo,Jo,eu,tu,ru,nu,iu,au,su,or,ou,Ur,uu,lu,du,cu,pu,hu,fu,mu,gu,yu,_u,bu,wu,$u,vu,xu,Jn,Su,ei,ti,Tu,ku,Iu,Eu,zu,Cu,ri=q(()=>{re(),ne(),xe(),ae(),Fo=(e,t,r,n,i,s,a)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=D("inputData",r,[o],4),h=Q("outputData",n,[o],4),p=[{name:"vec_size",type:"u32"}];return a&&p.push(...a),`
      ${e.registerUniforms(p).declareVariables(d,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},fe=(e,t,r,n,i,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Fo(d,B.size(e.dims),e.dataType,s,r,n,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:l})}},jo=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},Ko=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},Xo=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},Zo=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},Yo=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},Qo=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},Jo=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},eu=e=>me(e),tu=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},ru=e=>{let t,r,n=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=n?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=n?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return me({min:t,max:r})},nu=(e,t)=>{let r=t||ru(e.inputs),n=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},iu=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},au=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},su=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},or=e=>me(e),ou=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ur=(e="f32")=>`
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
}`,uu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ur(t)))},lu=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},du=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},cu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ur(t)))},pu=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},hu=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},fu=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},mu=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},gu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},yu=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},_u=e=>me(e),bu=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",n=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${n} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},wu=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},$u=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},vu=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},xu=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},Jn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Su=e=>{e.compute(fe(e.inputs[0],"Tanh",Jn))},ei=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Jn("v")};
}
`,ti=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Tu=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",ti,ei(t),void 0,e.inputs[0].dataType))},ku=(e,t)=>{let r=ze(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",n=>`select(vec4<${r}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Iu=e=>{e.compute(fe(e.inputs[0],"Log","log"))},Eu=(e,t)=>`
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
`,zu=e=>`quick_gelu_impl(${e})`,Cu=(e,t)=>{let r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",zu,Eu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Au,Mu,Ou,Cm=q(()=>{ne(),ae(),ri(),Au=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Mu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),n=D("bias",e[0].dataType,[e[0].dims[2]],4),i=Q("output",e[0].dataType,t,4),s=B.size(t)/4,a=ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,n,i)}

  ${Ur(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ou=e=>{Au(e.inputs),e.compute(Mu(e.inputs))}}),Ru,Bu,Ze,Nu,Du,Uu,Pu,Lu,qu,Wu,Vu,Gu,Hu,Am=q(()=>{re(),ne(),ae(),Ru=(e,t,r,n,i,s,a,o,l,d,h,p)=>{let f,g;typeof o=="string"?f=g=(v,k)=>`${o}((${v}),(${k}))`:typeof o=="function"?f=g=o:(f=o.scalar,g=o.vector);let y=Q("outputData",h,n.length,4),b=D("aData",l,t.length,4),$=D("bData",d,r.length,4),w;if(i)if(s){let v=B.size(t)===1,k=B.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;v||k?w=y.setByOffset("global_idx",g(v?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),k?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"))):w=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",g(a||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||E?$.getByOffset("offsetB / 4u"):`${$.type.value}(${$.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else w=y.setByOffset("global_idx",g(b.getByOffset("global_idx"),$.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(k,T,E="")=>{let z=`aData[indexA${T}][componentA${T}]`,C=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${y.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let offsetB${T} = ${$.broadcastedIndicesToOffset(`outputIndices${T}`,y)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${k}[${T}] = ${E}(${f(z,C)});
          `};h===9?w=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:w=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,$,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${w}
      }`},Bu=(e,t,r,n,i,s,a=r.dataType)=>{let o=r.dims.map(Number),l=n.dims.map(Number),d=!B.areEqual(o,l),h=o,p=B.size(o),f=!1,g=!1,y=[d];if(d){let b=Ft.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),p=B.size(h);let $=B.size(o)===1,w=B.size(l)===1,v=o.length>0&&o[o.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;y.push($),y.push(w),y.push(v),y.push(k);let T=1;for(let E=1;E<h.length;E++){let z=o[o.length-E],C=l[l.length-E];if(z===C)T*=z;else break}T%4===0?(g=!0,f=!0):($||w||v||k)&&(f=!0)}else f=!0;return y.push(f),{name:e,shaderCache:{hint:t+y.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Ru(b,o,l,h,f,d,g,i,r.dataType,n.dataType,a,s),getRunData:()=>({outputs:[{dims:h,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(h)/4)},...ee(o,l,h)]})}},Ze=(e,t,r,n,i,s)=>{e.compute(Bu(t,i??"",e.inputs[0],e.inputs[1],r,n,s))},Nu=e=>{Ze(e,"Add",(t,r)=>`${t}+${r}`)},Du=e=>{Ze(e,"Div",(t,r)=>`${t}/${r}`)},Uu=e=>{Ze(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Pu=e=>{Ze(e,"Mul",(t,r)=>`${t}*${r}`)},Lu=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ze(e,"Pow",{scalar:(r,n)=>`pow_custom(${r},${n})`,vector:(r,n)=>`pow_vector_custom(${r},${n})`},`
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
      `)},qu=e=>{Ze(e,"Sub",(t,r)=>`${t}-${r}`)},Wu=e=>{Ze(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Vu=e=>{Ze(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Gu=e=>{Ze(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Hu=e=>{Ze(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Fu,ju,Ku,Xu,Zu,Yu,Mm=q(()=>{re(),ne(),xe(),ae(),Fu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,n=e[r],i=n.dataType,s=n.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},ju=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ku=(e,t)=>{let r=e.length,n=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?n.push(s):i===0?n.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?n.push(`else { ${s} }`):n.push(`else if (inputIndex == ${i}) { ${s} }`)}return n.join(`
`)},Xu=(e,t,r,n)=>{let i=B.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],h=[{type:12,data:i}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],s[b]=o,d.push(e[b].dims.length),a[b]=D(`input${b}`,n,d[b]),l.push("rank"),h.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)h.push(...ee(e[b].dims));h.push(...ee(r));let p=Q("output",n,r.length),f=p.indicesGet("indices",t),g=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),y=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let $=0;$<e.length;$++)b.registerUniform(`sizeInConcatAxis${$}`,"u32");return b.declareVariables(...a,p)})()}

  ${ju(s.length,g)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${g});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ku(a,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:y}},Zu=(e,t)=>{let r=e.inputs,n=r[0].dims,i=B.normalizeAxis(t.axis,n.length);Fu(r,i);let s=n.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let a=r.filter(o=>B.size(o.dims)>0);e.compute(Xu(a,i,s,r[0].dataType),{inputs:a})},Yu=e=>me({axis:e.axis})}),Ct,At,Mt,ni,Ot=q(()=>{re(),ne(),Ct=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},At=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Mt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ni=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,n]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:n}}else if(t==="Clip"){let[r,n]=(e==null?void 0:e.activation_params)||[bs,ws];return{activation:t,clipMax:n,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ee,Qu,ii=q(()=>{Ee=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Qu=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ju,Om=q(()=>{Ju=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ur,ai,si=q(()=>{re(),ne(),ae(),Ot(),ur=(e,t,r,n,i)=>{let s=n-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${J(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,J(i,o+s,n))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},ai=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],h=a[a.length-1],p=ve(d),f=ve(h),g=ve(l),y=B.size(r)/p/g,b=e.length>2,$=n?n.slice(0,-2):r.slice(0,-2),w=[B.size($),l,d],v=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:h}];At(t,v),v.push(...ee($,a,o)),b&&v.push(...ee(e[2].dims)),v.push(...ee(w));let k=T=>{let E=Fn("batch_dims",e[0].dataType,$.length),z=D("a",e[0].dataType,a.length,f),C=D("b",e[1].dataType,o.length,p),x=Q("output",e[0].dataType,w.length,p),R=ke(x.type.tensor),M=Ct(t,x.type.value,R),P=[z,C],V="";if(b){let X=i?p:1;P.push(D("bias",e[2].dataType,e[2].dims.length,X)),V=`${i?`value += bias[col / ${X}];`:`value += ${x.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Mt(t,F);let O=()=>{let X=`var a_data: ${z.type.value};`;for(let j=0;j<f;j++)X+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${p}];`;for(let j=0;j<g;j++){X+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${f}];`;for(let Y=0;Y<f;Y++)X+=`
            values[${j}] = fma(${C.type.value}(a_data${f===1?"":`[${Y}]`}), b_data${Y}, values[${j}]);
`}return X};return`
  ${T.registerUniforms(F).registerInternalVariables(E).declareVariables(...P,x)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${ur("a_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${ur("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${x.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${O()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${V}
      ${M}
      let cur_indices = ${x.type.indices}(batch, row + i, col);
      let offset = ${x.indicesToOffset("cur_indices")};
      ${x.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${f};${g};${i}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:v}),getShaderSource:k}}}),el,tl,oi,ui,rl,li,nl,Pr,di=q(()=>{re(),ne(),ae(),Ot(),si(),ii(),el=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,tl=(e,t)=>e?`
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
        }`,oi=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],h=i?l:s,p=i?s:l,f=h/t[0],g=s/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
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
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${el(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
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

          ${tl(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ui=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,rl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",li=(e,t,r="f32",n,i=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],h=e[0]*t[0],p=i?d:s,f=i?s:d;if(!(f%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let g=f/t[1],y=p/t[0],b=s/t[1],$=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${ui(i,n)}
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

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ui(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
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
      ${rl(i)}
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
    ${$}
  }
`},nl=(e,t,r,n,i=!1)=>{let[s,a,o,l]=n,d=ke(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${ur("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ee(e,d)} {
      var value = ${Ee(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ur("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ee(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Ee(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Pr=(e,t,r,n,i=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),h=n?n.slice(0,-2):r.slice(0,-2),p=B.size(h),f=a[a.length-2],g=a[a.length-1],y=o[o.length-1],b=g%4===0&&y%4===0,$=f<=8?[4,1,1]:[4,4,1],w=[8,8,1],v=[Math.ceil(y/w[0]/$[0]),Math.ceil(f/w[1]/$[1]),Math.ceil(p/w[2]/$[2])],k=b?4:1,T=[...l,f,g/k],E=T.length,z=[...d,g,y/k],C=z.length,x=[p,f,y/k],R=[{type:6,data:f},{type:6,data:y},{type:6,data:g}];At(t,R),R.push(...ee(h,T,z));let M=["rank","rank"],P=e.length>2;P&&(R.push(...ee(e[2].dims)),M.push("rank")),R.push(...ee(x));let V=F=>{let O=h.length,X=Fn("batchDims",e[0].dataType,O,1),j=ke(e[0].dataType),Y=D("a",e[0].dataType,E,k),de=D("b",e[1].dataType,C,k),U=Q("result",e[0].dataType,x.length,k),te=[Y,de];if(P){let pe=i?k:1;te.push(D("bias",e[2].dataType,e[2].dims.length,pe))}let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Mt(t,L);let H=ke(U.type.tensor),Z=Ct(t,U.type.value,H),W=nl(k,P,Z,[X,Y,de,U],i);return`
  ${F.registerUniforms(L).registerInternalVariables(X).declareVariables(...te,U)}
  ${W}
  ${b?oi($,w,j,X):li($,w,j,X)}
                   `};return{name:"MatMul",shaderCache:{hint:`${$};${t.activation};${b};${i}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:R}),getShaderSource:V}}}),il,al,Rm=q(()=>{re(),st(),ae(),Ot(),ii(),Om(),di(),il=(e,t,r,n,i=!1,s,a=4,o=4,l=4,d="f32")=>{let h=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},p=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
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
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",$=e?"row":"col",w=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${$} / outWidth;
    let outCol = ${$} % outWidth;

    let WRow = ${w} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${w} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${w} % inChannels;
    var resData = ${Ee(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${b}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(a)}
    }
    return resData;`,k=e?t&&n?`
    let col = colIn * ${a};
    ${v}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Ee(a,d)}(0.0);`:n&&r?`
    let col = colIn * ${a};
    ${v}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Ee(a,d)}(0.0);`,T=e?n&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ee(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ee(o,d)}(0.0);`,E=Ee(l,d),z=Ee(e?a:o,d),C=Ee(e?o:a,d),x=Ct(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?T:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Qu(i)}
      ${x}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},al=(e,t,r,n,i,s,a,o,l)=>{let d=t.format==="NHWC",h=d?e[0].dims[3]:e[0].dims[1],p=r[0],f=d?r[2]:r[3],g=d?r[1]:r[2],y=d?r[3]:r[1],b=d&&(h%4===0||h%3===0)&&y%4===0,$=d?y:f*g,w=d?f*g:y,v=[8,8,1],k=n<=8?[4,1,1]:[4,4,1],T=[Math.ceil($/v[0]/k[0]),Math.ceil(w/v[1]/k[1]),Math.ceil(p/v[2]/k[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let E=b?d&&h%4!==0?3:4:1,z=v[1]*k[1],C=v[0]*k[0],x=Math.max(v[0]*E,v[1]),R=n%z===0,M=i%C===0,P=s%x===0,V=b?[E,4,4]:[1,1,1],F=[{type:6,data:n},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];At(t,F),F.push(...ee(e[0].dims,e[1].dims));let O=["rank","rank"];a&&(F.push(...ee(e[2].dims)),O.push("rank")),F.push(...ee(r));let X=j=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Mt(t,Y);let de=b?4:1,U=ke(e[0].dataType),te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${U}>`:U}) {
        result[flatIndex] = ${b?`vec4<${U}>`:U}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${U}>`:U}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,L=D("x",e[0].dataType,e[0].dims.length,E===3?1:E),H=D("w",e[1].dataType,e[1].dims.length,de),Z=[L,H],W=Q("result",e[0].dataType,r.length,de);if(a){let pe=D("bias",e[2].dataType,e[2].dims.length,de);Z.push(pe),te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${U}>`:U} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Ju("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(Y).declareVariables(...Z,W)}
        ${te}
        ${il(d,R,M,P,a,t,V[0],V[1],V[2],U)}
        ${b?oi(k,v,U,void 0,!d,x):li(k,v,U,void 0,!d,x,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${R};${M};${P};${z};${C};${x}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:F}),getShaderSource:X}}}),sl,ci,lr,ol,pi,ul,ll,dl,Bm=q(()=>{re(),st(),ne(),ae(),Ot(),ii(),sl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ci=e=>typeof e=="number"?[e,e,e]:e,lr=(e,t)=>t<=1?e:e+(e-1)*(t-1),ol=(e,t,r,n=1)=>{let i=lr(t,n);return Math.floor((e[0]*(r-1)-r+i)/2)},pi=(e,t,r,n,i)=>{i==null&&(i=ol(e,t[0],n[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*i>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*i)/n[a]+1));return s},ul=(e,t,r,n,i,s,a,o,l,d)=>{let h,p,f,g;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=pi([t,r,n,1],[o,l,d],1,[i,s,a],e);p=y[0],f=y[1],g=y[2]}else if(Array.isArray(e)){if(!e.every((b,$,w)=>b===w[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=pi([t,r,n,1],[o,l,d],1,[i,s,a],e[0]);p=y[0],f=y[1],g=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/i),f=Math.ceil(r/s),g=Math.ceil(n/a);let y=(p-1)*i+o-t,b=(f-1)*s+l-r,$=(g-1)*a+d-n,w=Math.floor(y/2),v=y-w,k=Math.floor(b/2),T=b-k,E=Math.floor($/2),z=$-E;h={top:k,bottom:T,left:E,right:z,front:w,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:p,outHeight:f,outWidth:g}},ll=(e,t,r,n,i,s=!1,a="channelsLast")=>{let o,l,d,h,p;if(a==="channelsLast")[o,l,d,h,p]=e;else if(a==="channelsFirst")[o,p,l,d,h]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,,g,y,b]=t,[$,w,v]=ci(r),[k,T,E]=ci(n),z=lr(g,k),C=lr(y,T),x=lr(b,E),{padInfo:R,outDepth:M,outHeight:P,outWidth:V}=ul(i,l,d,h,$,w,v,z,C,x),F=s?f*p:f,O=[0,0,0,0,0];return a==="channelsFirst"?O=[o,F,M,P,V]:a==="channelsLast"&&(O=[o,M,P,V,F]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:h,inChannels:p,outDepth:M,outHeight:P,outWidth:V,outChannels:F,padInfo:R,strideDepth:$,strideHeight:w,strideWidth:v,filterDepth:g,filterHeight:y,filterWidth:b,effectiveFilterDepth:z,effectiveFilterHeight:C,effectiveFilterWidth:x,dilationDepth:k,dilationHeight:T,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},dl=(e,t,r,n,i,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map(($,w)=>w)},d=[Math.ceil(sl(l.x.map($=>r[$]))/o[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let h=1,p=B.size(r),f=[{type:12,data:p},{type:12,data:n},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];At(t,f),f.push(...ee(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(f.push(...ee(e[2].dims)),g.push("rank")),f.push(...ee(r));let b=$=>{let w=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Mt(t,w);let v=1,k=ke(e[0].dataType),T=D("x",e[0].dataType,e[0].dims.length,h),E=D("W",e[1].dataType,e[1].dims.length,v),z=[T,E],C=Q("result",e[0].dataType,r.length,v),x="";if(y){let P=D("bias",e[2].dataType,e[2].dims.length,v);z.push(P),x+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${a?J("coords",4,5):J("coords",1,5)}];
        }`}let R=Ee(h,k),M=Ct(t,R,k);return`
            ${x}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${$.registerUniforms(w).declareVariables(...z,C)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${J("coords",0,T.rank)};
              let d2 = ${a?J("coords",T.rank-1,T.rank):J("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${a?J("coords",1,T.rank):J("coords",2,T.rank)},
              ${a?J("coords",2,T.rank):J("coords",3,T.rank)},
              ${a?J("coords",3,T.rank):J("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?J("uniforms.x_shape",1,T.rank):J("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${a?J("uniforms.x_shape",2,T.rank):J("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${a?J("uniforms.x_shape",3,T.rank):J("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${a?J("uniforms.x_shape",4,T.rank):J("uniforms.x_shape",1,T.rank)};
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
              ${M}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${h};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:b}}}),cl,pl,Nm=q(()=>{re(),ne(),ae(),Ot(),cl=(e,t,r,n)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],h=d/t.group,p=l&&h>=4?ve(d):1,f=B.size(r)/p,g=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];At(t,g),g.push(...ee(a,[o[0],o[1],o[2],o[3]/p]));let y=i?["rank","rank","rank"]:["rank","rank"];g.push(...ee([r[0],r[1],r[2],r[3]/p]));let b=$=>{let w=Q("output",e[0].dataType,r.length,p),v=ke(w.type.tensor),k=Ct(t,w.type.value,v),T=D("x",e[0].dataType,a.length),E=D("w",e[1].dataType,o.length,p),z=[T,E];i&&z.push(D("b",e[2].dataType,e[2].dims,p));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Mt(t,C);let x=l?`
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
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${$.registerUniforms(C).declareVariables(...z,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${w.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${w.type.value} = ${w.type.value}(0);
    ${x}
    ${s}
    ${k}
    ${w.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:b}},pl=(e,t,r,n)=>{let i=e.length>2,s=ve(r[3]),a=ve(r[2]),o=B.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];At(t,p),p.push(...ee(l,d,h));let f=(a-1)*t.strides[1]+d[1],g=y=>{let b=Q("output",e[0].dataType,h.length,s),$=ke(b.type.tensor),w=Ct(t,b.type.value,$),v=D("x",e[0].dataType,l.length,s),k=D("w",e[1].dataType,d.length,s),T=[v,k];i&&T.push(D("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Mt(t,z),`
  ${y.registerUniforms(z).declareVariables(...T,b)}
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

    var x_vals: array<${v.type.value}, ${f}>;
    var values: array<${b.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${E}
      ${w}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:g}}}),hl,Lr,fl,qr,hi,fi,ml,gl,mi,Dm=q(()=>{ne(),Rm(),Bm(),di(),Nm(),Ot(),si(),ft(),hl=(e,t,r,n,i,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],h=t.slice(2).map((f,g)=>f+(f-1)*(r[g]-1)),p=o.map((f,g)=>f+n[g]+n[g+l]).map((f,g)=>Math.floor((f-h[g]+i[g])/i[g]));return p.splice(0,0,a),p.splice(s?3:1,0,d),p},Lr=[2,3,1,0],fl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[1]*t.group;if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let n=e.pads.slice();Mr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,n,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:n}),i},hi=e=>{let t=ni(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},fi=(e,t,r,n)=>{let i=r.format==="NHWC",s=hl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let z=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(Ue(t[1],Lr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),z.push(C)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(pl(z,r,s,n),{inputs:z}):e.compute(cl(z,r,s,n),{inputs:z});return}let a=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],h=t[1].dims[2],p=t[1].dims[3],f=s[i?1:2],g=s[i?2:3],y=s[i?3:1],b=i&&h===o&&p===l&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=s[0],C,x,R,M=[];if(i){let F=e.kernelCustomData.wT??e.compute(Ue(t[1],Lr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),b){let O=o*l*d;C=t[0].reshape([1,z,O]),x=F.reshape([1,O,y]),R=[1,z,y]}else C=t[0].reshape([z,o*l,d]),x=F.reshape([1,d,y]),R=[z,f*g,y];M.push(C),M.push(x)}else C=t[0].reshape([z,d,o*l]),x=t[1].reshape([1,y,d]),R=[z,y,f*g],M.push(x),M.push(C);a&&M.push(t[2]);let P=R[2],V=M[0].dims[M[0].dims.length-1];P<8&&V<8?e.compute(ai(M,r,s,R,i,n),{inputs:M}):e.compute(Pr(M,r,s,R,i,n),{inputs:M});return}let $=!0,w=e.kernelCustomData.wT??e.compute(Ue(t[1],Lr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=w);let v=[t[0],w];a&&v.push(t[2]);let k=i?f*g:y,T=i?y:f*g,E=h*p*d;e.compute(al(v,r,s,k,T,E,a,$,n),{inputs:v})},ml=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=qr({...t,pads:i,strides:s,dilations:a,kernelShape:o},n);fi(e,n,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},gl=(e,t,r)=>{let n=r.format==="NHWC"?"channelsLast":"channelsFirst",i=qr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=ll(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,n);e.compute(dl(t,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},mi=(e,t)=>{if(fl(e.inputs,t),e.inputs[0].dims.length===3)ml(e,t);else if(e.inputs[0].dims.length===5)gl(e,e.inputs,t);else{let r=qr(t,e.inputs);fi(e,e.inputs,r)}}}),yl,Um=q(()=>{re(),st(),ne(),ae(),yl=(e,t,r)=>{let n=e.length>2,i=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],h=s?ve(l):1,p=s&&d===1&&l>=4,f=p?Math.floor(l/4)*4:Math.floor(l/h)*h,g=l-f,y=s?ve(d):1,b=s?d===1?h:y:1,$=B.size(i)/y,w=[Math.ceil($/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${w}`);let v=["rank","rank"],k=[t.strides[0],t.strides[1]],T=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],z=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],C=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:$},{type:12,data:k},{type:12,data:T},{type:12,data:E},{type:12,data:z},{type:6,data:C},{type:12,data:f},{type:12,data:l},{type:12,data:d},...ee(e[0].dims,e[1].dims)];n&&(x.push(...ee(e[2].dims)),v.push("rank")),x.push(...ee(i));let R=M=>{let P=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:k.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=ke(e[0].dataType),F=s?1:2,O=s?2:3,X=s?3:1,j=D("W",e[1].dataType,e[1].dims.length,b),Y=D("Dy",e[0].dataType,e[0].dims.length,h),de=[Y,j];n&&de.push(D("bias",e[2].dataType,[i[X]].length,y));let U=Q("result",e[0].dataType,i.length,y),te=()=>{let Z="";if(p)h===4?Z+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?Z+=`
          dotProd = dotProd + dot(vec4<${V}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${V}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${V}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${V}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${s?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,h===1)Z+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let W=0;W<h;W++)Z+=`
            let wValue${W} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${W}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${W}] * wValue${W};`;return Z},L=()=>{if(g===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Z="";if(h===1){Z+="dotProd = dotProd";for(let W=0;W<g;W++)Z+=`
            + ${Y.getByOffset(`x_offset + ${W}`)} * ${j.getByOffset(`w_offset + ${W}`)}`;Z+=";"}else if(h===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);Z+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},H=`
            let outputIndices = ${U.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${U.indicesGet("outputIndices",0)};
            let d1 = ${U.indicesGet("outputIndices",X)};
            let r = ${U.indicesGet("outputIndices",F)};
            let c = ${U.indicesGet("outputIndices",O)};
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
                ${p?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:h}) {
                  ${te()}
                  inputChannel = inputChannel + ${p?4:h};
                }
                ${L()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${y}]`:""};
            ${U.setByOffset("global_idx","value")};
          `;return`
    ${M.registerUniforms(P).declareVariables(...de,U)}
      ${M.mainStart()}
      ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${H}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${b}${y}${p}${g}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:w[0],y:w[1],z:w[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:R}}}),_l,bl,wl,gi,$l,vl,yi,xl,Sl,Pm=q(()=>{Um(),Ot(),ft(),_l=(e,t,r,n,i,s)=>(e-1)*t+r+(n-1)*i+1-s,bl=(e,t,r,n,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[n]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[n]=e-s,r[i]=s)},wl=(e,t,r,n,i,s,a,o,l,d)=>{let h=e.length-2,p=d.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let f=e[0],g=t[o?3:1]*i;for(let y=0,b=e.length-h-(o?1:0);y<h;++y,++b){let $=e[b],w=p?$*a[y]:d[y],v=_l($,a[y],s[y],t[b],r[y],w);bl(v,n,s,y,y+h),p&&d.push(a[y]*($-1)+l[y]+(t[b]-1)*r[y]+1-s[y]-s[y+h])}d.splice(0,0,f),d.splice(o?3:1,0,g)},gi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,f)=>p*f,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let n=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(n?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let d=e.strides.slice();if(d.reduce((p,f)=>p+f,0)===0){let p=t[0].dims.length-2;d=new Array(p).fill(1)}wl(o,r,l,e.autoPad,e.group,i,d,n,a,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:i,outputPadding:a,outputShape:s,dilations:l,strides:d}),h},$l=e=>{let t=ni(e),r=e.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),h=e.outputPadding,p=e.outputShape;return{autoPad:n,format:r,dilations:i,group:s,kernelShape:a,outputPadding:h,outputShape:p,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},vl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],n=e[1].dims[0];if(r!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},yi=(e,t,r,n)=>{let i=e.kernelCustomData.wT??e.compute(Ue(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(yl(s,r,n),{inputs:s})},xl=(e,t)=>{let r=t.format==="NHWC",n=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&n.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=gi({...t,pads:o,strides:a,dilations:s,kernelShape:i,outputPadding:l},n);yi(e,n,d,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Sl=(e,t)=>{if(vl(e.inputs,t),e.inputs[0].dims.length===3)xl(e,t);else{let r=gi(t,e.inputs);yi(e,e.inputs,r)}}}),Tl,kl,Il,Lm=q(()=>{re(),ne(),xe(),ae(),Tl=(e,t,r,n)=>{let i=B.size(t),s=t.length,a=D("input",e,s),o=Q("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=B.normalizeAxis(l,s),h=p=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,g=J("uniforms.input_shape","uniforms.axis",s),y=n.reverse?f+(n.exclusive?" + 1":""):"0",b=n.reverse?g:f+(n.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ee(t,t)]}),getShaderSource:h}},kl=(e,t)=>{let r=e.inputs[0].dims,n=e.inputs[0].dataType,i=e.inputs[1];e.compute(Tl(n,r,i,t),{inputs:[0]})},Il=e=>{let t=e.exclusive===1,r=e.reverse===1;return me({exclusive:t,reverse:r})}}),El,zl,Cl,Al,Ml,qm=q(()=>{re(),ne(),xe(),ae(),El=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},zl=(e,t,r,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Cl=(e,t)=>{let r,n,i,s,a,o,l=t.format==="NHWC",d=t.blocksize,h=t.mode==="DCR";l?([r,n,i,s]=e.dims,a=h?[r,n,i,d,d,s/d**2]:[r,n,i,s/d**2,d,d],o=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,n,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=h?[r,d,d,s/d**2,n,i]:[r,s/d**2,d,d,n,i],o=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(a),f=p.dims.length,g=e.dataType,y=D("a",g,f),b=Q("output",g,f),$=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(y,b)}

  ${zl(o,f,y,b)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:w=>{let v=l?[r,n*d,i*d,s/d**2]:[r,s/d**2,n*d,i*d],k=B.size(v),T=p.dims,E=B.sortBasedOnPerm(T,o);return{outputs:[{dims:v,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...ee(T,E)]}},getShaderSource:$}},Al=(e,t)=>{El(e.inputs),e.compute(Cl(e.inputs[0],t))},Ml=e=>me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wr,dr,_i,Ol,Rl,Bl,Nl,bi,Dl,Ul,Pl,Wm=q(()=>{re(),ne(),xe(),ae(),Wr="[a-zA-Z]|\\.\\.\\.",dr="("+Wr+")+",_i="^"+dr+"$",Ol="("+dr+",)*"+dr,Rl="^"+Ol+"$",Bl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Nl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,n]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Rl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(_i)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,a);this.lhs.push(l)}),n==="")n+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!n.match(RegExp(dr)))throw new Error("Invalid RHS");(i=n.match(RegExp(Wr,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(n,!1,this.outputDims)}addSymbol(e,t,r){let n=this.symbolToInfo.get(e);if(n!==void 0){if(n.dimValue!==t&&n.count!==1)throw new Error("Dimension mismatch");n.count++,n.inputIndices.push(r)}else n={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,n)}processTerm(e,t,r,n=-1){let i=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(_i))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Wr,"g")),d=new Bl(n);return l==null||l.forEach((h,p)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=i-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<a.length;g++){let y=String.fromCharCode(48+g);d.addSymbol(y,p+g),this.addSymbol(y,r[o++],n)}}else d.addSymbol(h,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[o++],n)}),d}},bi=e=>e+"_max",Dl=(e,t,r,n)=>{let i=e.map(d=>d.length).map((d,h)=>D(`input${h}`,t,d)),s=B.size(n),a=Q("output",t,n.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let h=[],p="var prod = 1.0;",f="var sum = 0.0;",g="sum += prod;",y=[],b=[],$=[],w=[],v=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,E)=>{var z;if(r.rhs.symbolToIndices.has(E)){let C=(z=r.rhs.symbolToIndices.get(E))==null?void 0:z[0];C!==void 0&&r.lhs.forEach((x,R)=>{if(T.inputIndices.includes(R)){let M=x.symbolToIndices.get(E);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(P=>{h.push(`${i[R].indicesSet(`input${R}Indices`,P,a.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,x)=>{if(T.inputIndices.includes(x)){let R=C.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(M=>{y.push(`${i[x].indicesSet(`input${x}Indices`,M,`${E}`)}`)}),w.push(`prod *= ${i[x].getByIndices(`input${x}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${bi(E)}; ${E}++) {`),$.push("}")});let k=v?[...h,`let sum = ${i.map((T,E)=>T.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...h,f,...b,...y,p,...w,g,...$];return`
            ${d.registerUniforms(o.map(T=>({name:`${bi(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${i.map((T,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(p=>r.symbolToInfo.has(p)).map(p=>{var f;return{type:12,data:((f=r.symbolToInfo.get(p))==null?void 0:f.dimValue)||0}});d.push({type:12,data:s});let h=e.map((p,f)=>[...ee(p)]).reduce((p,f)=>p.concat(f),d);return h.push(...ee(n)),{outputs:[{dims:n,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:l}},Ul=(e,t)=>{let r=new Nl(e.inputs,t.equation),n=r.outputDims,i=e.inputs.map((s,a)=>s.dims);e.compute(Dl(i,e.inputs[0].dataType,r,n))},Pl=e=>{let t=e.equation.replace(/\s+/g,"");return me({equation:t})}}),Ll,wi,ql,Wl,Vl,Vm=q(()=>{re(),ne(),ae(),Ll=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;n<r.length&&i<t.length;++n,++i)if(r[n]!==t[i]&&r[n]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},wi=(e,t)=>{let r=e.length-t.length,n=[];for(let i=0;i<r;++i)n.push(e[i]);for(let i=0;i<t.length;++i)n.push(t[i]===1?e[i+r]:t[i]);return n},ql=(e,t)=>e.length>t.length?wi(e,t):wi(t,e),Wl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),n=ql(t,r),i=e[0].dataType,s=i===9||B.size(t)===1,a=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(B.size(n)/o),d=p=>{let f=D("input",i,t.length,a),g=Q("output",i,n.length,o),y;if(i===9){let b=($,w,v="")=>`
          let outputIndices${w} = ${g.offsetToIndices(`outputOffset + ${w}u`)};
          let offset${w} = ${f.broadcastedIndicesToOffset(`outputIndices${w}`,g)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${$}[${w}] = ${v}(${f.getByOffset(`index${w}`)}[component${w}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${f.getByOffset(`inputOffset / ${a}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(f,g)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},h=[{type:12,data:l},...ee(t,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},Vl=e=>{Ll(e.inputs),e.compute(Wl(e.inputs),{inputs:[0]})}}),Gl,Hl,Gm=q(()=>{re(),ne(),ae(),ri(),Gl=e=>{let t=e[0].dataType,r=B.size(e[0].dims),n=B.size(e[1].dims),i=n%4===0,s=a=>{let o=D("x",t,[1],4),l=D("bias",t,[1],4),d=Q("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${l.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,f=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(h).declareVariables(o,l,d)}

    ${ei(ze(t))}

    ${a.mainStart(jt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",ti("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(r/jt/4)}})}},Hl=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?Tu(e):e.compute(Gl(e.inputs))}}),Fl,jl,Kl,Xl,Hm=q(()=>{re(),ne(),xe(),ae(),Fl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},jl=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=B.normalizeAxis(t.axis,i),a=r.slice(0);a.splice(s,1,...n);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(B.size(a)/l),h=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...ee(e[0].dims,e[1].dims,a)],p=f=>{let g=D("data",e[0].dataType,e[0].dims.length,l),y=D("inputIndices",e[1].dataType,e[1].dims.length),b=Q("output",e[0].dataType,a.length,l),$=v=>{let k=n.length,T=`var indicesIndices${v}  = ${y.type.indices}(0);`;for(let E=0;E<k;E++)T+=`${k>1?`indicesIndices${v}[${E}]`:`indicesIndices${v}`} = ${a.length>1?`outputIndices${v}[uniforms.axis + ${E}]`:`outputIndices${v}`};`;T+=`
          var idx${v} = ${y.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${g.type.indices};
        `;for(let E=0,z=0;E<i;E++)E===s?(T+=`${i>1?`dataIndices${v}[${E}]`:`dataIndices${v}`} = u32(idx${v});`,z+=k):(T+=`${i>1?`dataIndices${v}[${E}]`:`dataIndices${v}`} = ${a.length>1?`outputIndices${v}[${z}]`:`outputIndices${v}`};`,z++);return T},w;if(e[0].dataType===9){let v=(k,T,E="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${$(T)};
          let offset${T} = ${g.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${k}[${T}] = ${E}(${g.getByOffset(`index${T}`)}[component${T}]);
        `;w=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else w=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${$("")};
      let value = ${g.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,b)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${w}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:p}},Kl=e=>me({axis:e.axis}),Xl=(e,t)=>{let r=e.inputs;Fl(r),e.compute(jl(e.inputs,t))}}),Zl,Yl,Ql,Fm=q(()=>{re(),ne(),ae(),Zl=(e,t,r,n,i,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:n},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],h=[s];d.push(...ee(t.dims,h));let p=f=>{let g=D("indices_data",t.dataType,t.dims.length),y=Q("input_slice_offsets_data",12,1,1),b=[g,y],$=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms($).declareVariables(...b)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Yl=(e,t)=>{let r=e.inputs,n=r[0].dims,i=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=B.sizeToDimension(s,s.length-1),l=B.sizeFromDimension(n,t.batchDims+a),d=B.sizeToDimension(n,t.batchDims),h=B.sizeFromDimension(n,t.batchDims),p=o/d,f=new Array(a),g=l;for(let T=0;T<a;++T)f[a-1-T]=g,g*=n[t.batchDims+a-1-T];let y=Zl(e,r[1],f,t.batchDims,n,o,p,h,a),b=t.batchDims+a;if(b>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let $=s.slice(0,-1).concat(n.slice(b)),w=B.size($),v=[{type:12,data:w},{type:12,data:l},...ee(r[0].dims,y.dims,$)],k=T=>{let E=D("data",r[0].dataType,r[0].dims.length),z=D("slice_offsets",12,y.dims.length),C=Q("output",r[0].dataType,$.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,z,C)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:$,dataType:i}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:v}),getShaderSource:k},{inputs:[r[0],y]})},Ql=e=>({batchDims:e.batch_dims,cacheKey:""})}),Jl,ed,td,rd,jm=q(()=>{re(),ne(),xe(),ae(),Jl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),n=t.blockSize,i=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/n)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ed=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r.length,s=B.normalizeAxis(t.gatherAxis,i),a=B.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...n);let l=B.size(o),d=e[2].dataType,h=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...ee(...e.map((g,y)=>g.dims),o)],f=g=>{let y=D("data",e[0].dataType,e[0].dims.length),b=D("inputIndices",e[1].dataType,e[1].dims.length),$=D("scales",e[2].dataType,e[2].dims.length),w=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=Q("output",d,o.length),k=[y,b,$];w&&k.push(w);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(T).declareVariables(...k,v)}
        ${g.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${n.length} - 1`)};
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
        let quantize_axis_index = ${$.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${$.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${$.getByIndices("scale_indices")};
        ${w?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${w.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${w.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(d)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,y)=>y!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:f}},td=(e,t)=>{let r=e.inputs;Jl(r,t),e.compute(ed(e.inputs,t))},rd=e=>me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),nd,id,ad,sd,Km=q(()=>{re(),ne(),xe(),ae(),nd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},id=(e,t)=>{let r=e[0].dims,n=e[0].dataType,i=r.length,s=e[1].dims,a=e[1].dataType,o=B.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),h=B.size(d),p=D("input",n,i),f=D("indicesInput",a,s.length),g=Q("output",n,d.length),y=[{type:12,data:h},{type:6,data:l},{type:12,data:o}];return y.push(...ee(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,f,g)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},ad=e=>me({axis:e.axis}),sd=(e,t)=>{let r=e.inputs;nd(r),e.compute(id(e.inputs,t))}}),od,ud,ld,dd,Xm=q(()=>{re(),ne(),ae(),od=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ud=(e,t)=>{let r=e[0].dims.slice(),n=e[1].dims.slice(),[i,s,a]=_s.getShapeOfGemmResult(r,t.transA,n,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),h=Math.ceil(i/l),p=!0,f=B.size(o),g=[{type:12,data:p?d:f},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(g.push(...ee(e[2].dims)),y.push("rank")),g.push(...ee(o));let b=w=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",T=D("a",e[0].dataType,e[0].dims),E=D("b",e[1].dataType,e[1].dims),z=T.type.value,C=null,x=[T,E];e.length===3&&(C=D("c",e[2].dataType,e[2].dims.length),x.push(C));let R=Q("output",e[0].dataType,o.length);x.push(R);let M=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${w.registerUniforms(M).declareVariables(...x)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${k}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${z}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},$=w=>{let v=D("a",e[0].dataType,e[0].dims),k=D("b",e[1].dataType,e[1].dims),T=null,E=[v,k];e.length===3&&(T=D("c",e[2].dataType,e[2].dims.length),E.push(T));let z=Q("output",e[0].dataType,o.length);E.push(z);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],x="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,x="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let M=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${w.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${w.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${x}
      }
      workgroupBarrier();
    }

    ${M}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*h},programUniforms:g}),getShaderSource:$}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:b}},ld=e=>{let t=e.transA,r=e.transB,n=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:n,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},dd=(e,t)=>{od(e.inputs),e.compute(ud(e.inputs,t))}}),Je,ot,Rt,Bt,cd,pd,hd,fd,md,gd,yd,_d,bd,wd,Zm=q(()=>{re(),ne(),xe(),ae(),[Je,ot,Rt,Bt]=[0,1,2,3],cd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},pd=`
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
`,hd=e=>`
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
`,fd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,md=e=>`
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
`,gd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Je}] = batch;
     indices[${ot}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Rt}] = u32(r);
            indices[${Bt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Rt}] = u32(clamp(r, 0, H - 1));
          indices[${Bt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Rt}] = gs_reflect(r, border[1], border[3]);
          indices[${Bt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,yd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Je}], indices[${ot}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Je}], indices[${ot}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Je}], indices[${ot}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Je}], indices[${ot}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Je}], indices[${ot}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Je}], indices[${ot}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,_d=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),n=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=D("grid",e[1].dataType,n.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Je,ot,Rt,Bt]=[0,3,1,2]);let a=Q("output",e[0].dataType,s.length),o=r.type.value,l=B.size(s),d=[{type:12,data:l},...ee(e[0].dims,n,s)],h=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,i,a)}
  ${pd}
  ${hd(o)}
  ${fd(t)}
  ${md(t)}
  ${gd(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Rt}]);
      let W_in = i32(uniforms.x_shape[${Bt}]);

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
      var grid_indices = vec3<u32>(indices[${Je}], indices[${Rt}], indices[${Bt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${yd(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let f=B.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:h}},bd=(e,t)=>{cd(e.inputs),e.compute(_d(e.inputs,t))},wd=e=>me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ce,$d,vd,$i,xd,cr,Sd,Td=q(()=>{re(),ne(),xe(),qn(),Qn(),ae(),ft(),Ce=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,$d=(e,t)=>{let r=e[0],n=Ce(e,1),i=Ce(e,2),s=Ce(e,3),a=Ce(e,4),o=Ce(e,5),l=Ce(e,6),d=Ce(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],p=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=p,y=0,b=0,$=Math.floor(f/t.numHeads);if(l&&d&&B.size(l.dims)&&B.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==$)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==$)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],b=l.dims[2]}else if(l&&B.size(l.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w;if(n&&B.size(n.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');w=2,g=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');w=5,g=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=0,g=n.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}if(s&&B.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=y+g,k=0;if(a&&B.size(a.dims)>0){k=8;let C=a.dims;throw C.length===1?C[0]===h?k=1:C[0]===3*h+2&&(k=3):C.length===2&&C[0]===h&&C[1]===v&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,E=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],T=!0}}let z=!1;if(a&&B.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==h||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:v,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:f,vHiddenSize:E,headSize:$,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:z,passPastInKv:T,qkvFormat:w}},vd=e=>me({...e}),$i=me({perm:[0,2,1,3]}),xd=(e,t,r,n,i,s,a)=>{let o=[n,i,s],l=B.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],h=p=>{let f=Q("qkv_with_bias",t.dataType,o),g=D("qkv",t.dataType,o),y=D("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(b).declareVariables(g,y,f)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},cr=(e,t,r,n,i,s,a,o)=>{let l=s;if(a&&B.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=xd(e,s,a,t,n,r*i,o),l=l.reshape([t,n,r,i]),r===1||n===1?l:e.compute(Ue(l,$i.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,n,r,i])),r===1||n===1?l:e.compute(Ue(l,$i.perm),{inputs:[l],outputs:[-1]})[0]},Sd=(e,t)=>{let r=$d(e.inputs,t),n=e.inputs[0],i=Ce(e.inputs,1),s=Ce(e.inputs,2),a=Ce(e.inputs,3),o=Ce(e.inputs,4),l=Ce(e.inputs,5),d=Ce(e.inputs,6),h=Ce(e.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let p=i&&s&&i.dims.length===4&&s.dims.length===4,f=cr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,n,a,0);if(p)return sr(e,f,i,s,o,void 0,d,h,l,r);if(!i||!s)throw new Error("key and value must be provided");let g=cr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,a,r.hiddenSize),y=cr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);sr(e,f,g,y,o,void 0,d,h,l,r)}}),kd,Id,Ed,zd,vi,Cd,Ad,Md=q(()=>{re(),ne(),xe(),ae(),kd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Id=(e,t)=>{let r=[],n=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),n=r.length),me({numOutputs:n,axis:t.axis,splitSizes:r})},Ed=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${J("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,zd=e=>{let t=e.length,r=[];for(let n=0;n<t;++n){let i=e[n].setByIndices("indices","input[global_idx]");t===1?r.push(i):n===0?r.push(`if (output_number == ${n}u) { ${i} }`):n===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},vi=(e,t)=>{let r=e[0].dims,n=B.size(r),i=e[0].dataType,s=B.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=D("input",i,r.length),l=new Array(t.numOutputs),d=[],h=[],p=0,f=[{type:12,data:n}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],l[y]=p;let b=r.slice();b[s]=t.splitSizes[y],h.push(b),a[y]=Q(`output${y}`,i,b.length),d.push({dims:h[y],dataType:e[0].dataType})}f.push({type:12,data:l},...ee(r,...h));let g=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Ed(l.length)}
  ${zd(a)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${J("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f})}},Cd=(e,t)=>{kd(e.inputs);let r=e.inputs.length===1?t:Id(e.inputs,t);e.compute(vi(e.inputs,r),{inputs:[0]})},Ad=e=>{let t=e.axis,r=e.splitSizes,n=e.numOutputs<0?r.length:e.numOutputs;if(n!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return me({axis:t,numOutputs:n,splitSizes:r})}}),Od,Vr,Rd,Bd=q(()=>{re(),ne(),xe(),ae(),Od=(e,t)=>{let[r,n,i,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!B.areEqual(n.dims,[])&&!B.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!B.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],h=i.dims[0],p=B.sizeFromDimension(r.dims,1)/d,f=o===0?i.dims[1]*2:p/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Vr=(e,t)=>{let{interleaved:r,numHeads:n,rotaryEmbeddingDim:i,scale:s}=t,a=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,h=e[2].dims[1],p=i===0?h*2:d/n,f=new Array(a,l,d/p,p-h),g=B.computeStrides(f),y=[{type:1,data:s},{type:12,data:f},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[o,d,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,l*p,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=$=>{let w=D("input",e[0].dataType,e[0].dims.length),v=D("position_ids",e[1].dataType,e[1].dims.length),k=D("cos_cache",e[2].dataType,e[2].dims.length),T=D("sin_cache",e[3].dataType,e[3].dims.length),E=Q("output",e[0].dataType,e[0].dims.length);return $.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${$.declareVariables(w,v,k,T,E)}

        ${$.mainStart(jt)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",Q("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${w.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${w.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${w.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${w.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",w.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/jt)},programUniforms:y})}},Rd=(e,t)=>{Od(e.inputs,t),e.compute(Vr(e.inputs,t))}}),Nd,Dd,xi,Ud,Pd,Ym=q(()=>{xe(),re(),Qn(),Td(),Md(),ft(),Bd(),ae(),Nd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],n=e[1],i=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],h=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=d,f=0,g=!n||n.dims.length===0,y=Math.floor(g?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);g&&(h=y*t.numHeads);let b=s&&s.dims.length!==0,$=a&&a.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&$){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(b||$)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let w=1;if(n&&n.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(r.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==t.numHeads||n.dims[3]!==2||n.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');p=n.dims[1]}else{if(n.dims[1]!==t.numHeads||n.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=n.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');w=3}let v=0,k=!1,T=t.kvNumHeads?y*t.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(p!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(p!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=E.dims.reduce((C,x)=>C*x,1);if(z!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${z}.`);for(let C=0;C<E.dims.length;C++)if(E.dims[C]!==1&&E.dims[C]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${C}] = ${E.dims[C]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:y,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:w}},Dd=me({perm:[0,2,1,3]}),xi=(e,t,r)=>{let n=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(n=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),n=e.compute(Ue(n,Dd.perm),{inputs:[n],outputs:[-1]})[0]),n},Ud=(e,t,r,n)=>{let i=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=h=>{let p=D("seq_lens",r.dataType,r.dims),f=D("total_seq_lens",n.dataType,n.dims),g=Q("pos_ids",i,a),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(y).declareVariables(p,f,g)}
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
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Pd=(e,t)=>{var T;let r=Nd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let n=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[f,g,y]=!i&&!s?e.compute(vi([n],p),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,s],b,$;if(t.doRotary){let E=e.compute(Ud(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],z=e.inputs[7],C=e.inputs[8],x=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,E,z,C],M=[-1];b=e.compute(Vr(R,x),{inputs:R,outputs:M})[0],R.splice(0,1,g);let P=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});$=e.compute(Vr(R,P),{inputs:R,outputs:M})[0]}let w=cr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:f,void 0,0),v=xi(e,t.doRotary?$:g,r),k=xi(e,y,r);sr(e,w,v,k,void 0,void 0,a,o,void 0,r,l,d)}}),Si,Ld,qd,Wd,Qm=q(()=>{re(),ne(),ft(),ae(),Si=(e,t,r,n,i,s,a,o)=>{let l=ve(s),d=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,p=i*a,f=64;p===1&&(f=256);let g=[i,a,s/l],y=[i,a,2],b=["rank","type","type"],$=[];$.push(...ee(g,y));let w=v=>{let k=D("x",t.dataType,3,l),T=D("scale",r.dataType,r.dims),E=D("bias",n.dataType,n.dims),z=Q("output",1,3,2),C=[k,T,E,z];return`
  var<workgroup> workgroup_shared : array<${h}, ${f}>;
  const workgroup_size = ${f}u;
  ${v.declareVariables(...C)}
  ${v.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${k.get("batch","channel","h")});
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
      let sum_final = ${ht("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ht("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${f}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:$}),getShaderSource:w},{inputs:[t,r,n],outputs:[-1]})[0]},Ld=(e,t,r)=>{let n=t[0].dims,i=n,s=2,a=n[0],o=n[1],l=B.sizeFromDimension(n,s),d=ve(l),h=B.size(i)/d,p=Si(e,t[0],t[1],t[2],a,l,o,r.epsilon),f=[a,o,l/d],g=[a,o],y=["type","none"],b=$=>{let w=D("x",t[0].dataType,f.length,d),v=D("scale_shift",1,g.length,2),k=Q("output",t[0].dataType,f.length,d),T=[w,v,k];return`
  ${$.registerUniform("output_size","u32").declareVariables(...T)}
  ${$.mainStart()}
  ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${w.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ee(f,g,f)]}),getShaderSource:b},{inputs:[t[0],p]})},qd=(e,t,r)=>{let n=t[0].dims,i=n,s=n[0],a=n[n.length-1],o=B.sizeFromDimension(n,1)/a,l=ve(a),d=B.size(i)/l,h=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],p=["type","type"],f=!1,g=[0,n.length-1];for(let w=0;w<n.length-2;w++)f=f||n[w+1]!==1,g.push(w+1);f=f&&n[n.length-1]!==1;let y=f?e.compute(Ue(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:n.length},(w,v)=>n[g[v]])),b=Si(e,y,t[1],t[2],s,o,a,r.epsilon),$=w=>{let v=ke(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,T=C=>{let x=C===0?"x":"y",R=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${v}(${R}(scale.${x}))`;case 2:return`vec2<${v}>(${R}(scale[0].${x}, scale[1].${x}))`;case 4:return`vec4<${v}>(${R}(scale[0].${x}, scale[1].${x}, scale[2].${x}, scale[3].${x}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=D("input",t[0].dataType,t[0].dims,l),z=Q("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${w.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:$},{inputs:[t[0],b]})},Wd=(e,t)=>{t.format==="NHWC"?qd(e,e.inputs,t):Ld(e,e.inputs,t)}}),Vd,Gd,Hd,Jm=q(()=>{re(),ne(),ae(),Vd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Gd=(e,t,r)=>{let n=t.simplified,i=e[0].dims,s=e[1],a=!n&&e[2],o=i,l=B.normalizeAxis(t.axis,i.length),d=B.sizeToDimension(i,l),h=B.sizeFromDimension(i,l),p=B.size(s.dims),f=a?B.size(a.dims):0;if(p!==h||a&&f!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${f}`);let g=[];for(let E=0;E<i.length;++E)E<l?g.push(i[E]):g.push(1);let y=ve(h),b=["type","type"],$=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/y)},{type:1,data:t.epsilon}];a&&b.push("type");let w=r>1,v=r>2,k=E=>{let z=ke(e[0].dataType),C=[D("x",e[0].dataType,e[0].dims,y),D("scale",s.dataType,s.dims,y)];a&&C.push(D("bias",a.dataType,a.dims,y)),C.push(Q("output",e[0].dataType,o,y)),w&&C.push(Q("mean_data_output",1,g)),v&&C.push(Q("inv_std_output",1,g));let x=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(x).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Hn("f32",y)};
    var mean_square_vector = ${Hn("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Kt(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ht("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ht("mean_square_vector",y)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Kt(z,y,"x[j + offset]")};
      let f32scale = ${Kt(z,y,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Kt(z,y,"bias[j]")}`:""}
      );
    }

    ${w?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:o,dataType:e[0].dataType}];return w&&T.push({dims:g,dataType:1}),v&&T.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${n}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:$}),getShaderSource:k}},Hd=(e,t)=>{Vd(e.inputs),e.compute(Gd(e.inputs,t,e.outputCount))}}),Fd,jd,eg=q(()=>{ne(),si(),di(),Fd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jd=e=>{Fd(e.inputs);let t=Ft.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],n=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&n<8)e.compute(ai(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=B.size(e.inputs[0].dims.slice(0,-2)),a=B.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&a===1){let o=e.inputs[0].reshape([1,s,n]),l=e.inputs[1].reshape([1,n,r]),d=[1,s,r],h=[o,l];e.compute(Pr(h,{activation:""},t,d),{inputs:h})}else e.compute(Pr(e.inputs,{activation:""},t))}}}),Kd,Xd,Zd,Yd,Qd,tg=q(()=>{re(),ne(),xe(),ae(),Kd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],n=r.dims.length;if(r.dims[n-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!B.areEqual(a.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(l)!==d)throw new Error("zeroPoints input size error.")}},Xd=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=B.size(o),d=e[1].dims[2]/4,h=e[0].dataType,p=ve(t.k),f=ve(d),g=ve(a),y=o.concat([i,a]),b=i>1&&a/g%2===0?2:1,$=B.size(y)/g/b,w=64,v=[],k=[l,i,s/p],T=B.convertShape(e[1].dims).slice();T.splice(-1,1,d/f),v.push(...ee(k)),v.push(...ee(T)),v.push(...ee(e[2].dims)),e.length===4&&v.push(...ee(B.convertShape(e[3].dims)));let E=[l,i,a/g];v.push(...ee(E));let z=C=>{let x=k.length,R=D("a",e[0].dataType,x,p),M=D("b",12,T.length,f),P=D("scales",e[2].dataType,e[2].dims.length),V=[R,M,P],F=e.length===4?D("zero_points",12,e[3].dims.length):void 0;F&&V.push(F);let O=E.length,X=Q("output",e[0].dataType,O,g),j=ke(e[0].dataType),Y=(()=>{switch(p){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${p}-component is not supported.`)}})(),de=Math.floor(32/t.bits),U=Math.floor(de/8),te=()=>{let Z="";for(let W=0;W<U;W++){let pe=W*t.bits*4,Pe=pe+t.bits;Z+=`
          // reuse a data (pass ${W})
            var input_offset${W>0?W:""} = ${W===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${W>0?W:""}: ${Y};
            for (var j${W>0?W:""}: u32 = 0; j${W>0?W:""} < ${8/p}; j${W>0?W:""}++) {
              a_data${W>0?W:""}[j${W>0?W:""}] = ${R.getByOffset(`input_offset${W>0?W:""}`)};
              input_offset${W>0?W:""}++;
            }
          `;for(let Se=0;Se<g*b;Se++)Z+=`
            b_value = ${f===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${W*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${pe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Pe}u) & b_mask);`}
            b_quantized_values = ${Y}(${Array.from({length:4},(Me,Oe)=>`${j}(b_value_lower[${Oe}]), ${j}(b_value_upper[${Oe}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Y}(${Array.from({length:8},(Me,Oe)=>`(b_quantized_values[${Oe}] - ${F?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${F?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Se/g)}]${g>1?`[${Se%g}]`:""} += ${Array.from({length:8/p},(Me,Oe)=>`${p===1?`a_data${W>0?W:""}[${Oe}] * b_dequantized_values[${Oe}]`:`dot(a_data${W>0?W:""}[${Oe}], b_dequantized_values[${Oe}])`}`).join(" + ")};
          `}return Z},L=()=>{let Z=`
            var col_index = col * ${g};
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
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let W=0;W<g*b;W++)Z+=`
            let scale${W} = ${P.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},H=()=>{let Z=`col_index = col * ${g};`;for(let W=0;W<g*b;W++)Z+=`
            let b${W}_data = ${M.getByIndices(`${M.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,Z};return`
        var<workgroup> workgroup_shared: array<${X.type.value}, ${b*w}>;
        ${C.declareVariables(...V,X)}
        ${C.mainStart([w,1,1])}
          let output_indices = ${X.offsetToIndices(`(global_idx / ${w}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${w}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${L()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${H()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${te()}
                word_offset += ${de/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${w}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${X.setByIndices(`${X.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${f};${g};${b};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:$},programUniforms:v}),getShaderSource:z}},Zd=(e,t)=>{let r=e[0].dims,n=r.length,i=r[n-2],s=t.k,a=t.n,o=r.slice(0,n-2),l=B.size(o),d=e[1].dims[2]/4,h=e[0].dataType,p=ve(t.k),f=ve(d),g=o.concat([i,a]),y=128,b=a%8===0?8:a%4===0?4:1,$=y/b,w=Math.floor(32/t.bits),v=$*f*w,k=v/p,T=v/t.blockSize,E=B.size(g)/b,z=[],C=[l,i,s/p],x=B.convertShape(e[1].dims).slice();x.splice(-1,1,d/f),z.push(...ee(C)),z.push(...ee(x)),z.push(...ee(e[2].dims)),e.length===4&&z.push(...ee(B.convertShape(e[3].dims)));let R=[l,i,a];z.push(...ee(R));let M=P=>{let V=C.length,F=D("a",e[0].dataType,V,p),O=D("b",12,x.length,f),X=D("scales",e[2].dataType,e[2].dims.length),j=[F,O,X],Y=e.length===4?D("zero_points",12,e[3].dims.length):void 0;Y&&j.push(Y);let de=R.length,U=Q("output",e[0].dataType,de),te=ke(e[0].dataType),L=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${k}>;
        var<workgroup> inter_results: array<array<${U.type.value}, ${$}>, ${b}>;
        ${P.declareVariables(...j,U)}
        ${P.mainStart([$,b,1])}
          let output_indices = ${U.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${T} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${k};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${k}; a_offset += ${y})
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
            let zero_point = ${te}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${te}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${X.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let H=Math.floor(w/8),Z="";for(let W=0;W<H;W++){let pe=W*t.bits*4,Pe=pe+t.bits;Z+=`
              ${L()}
              {${t.bits===2?`
                let half_word = b_value >> ${W*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${pe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Pe}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(Se,Me)=>`${te}(b_value_lower[${Me}]), ${te}(b_value_upper[${Me}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,Me)=>`${`dot(a_data${Me}, b_dequantized_values[${Me}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${U.type.value} = ${U.type.value}(0);
            for (var b = 0u; b < ${$}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${U.setByIndices(`${U.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${f};${$};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:h}],dispatchGroup:{x:E},programUniforms:z}),getShaderSource:M}},Yd=(e,t)=>{Kd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Zd(e.inputs,t)):e.compute(Xd(e.inputs,t))},Qd=e=>me(e)}),Jd,ec,tc,rc,nc,ic,ac,sc,oc,rg=q(()=>{re(),ne(),ae(),Jd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},ec=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
            k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${J("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${J("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},tc=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${J("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${J("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${J("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},rc=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${J("uniforms.x_shape",i,t)})) {
                  k = i32(${J("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${J("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},nc=(e,t,r)=>{let n="";for(let i=t-1;i>=0;--i)n+=`
                k = i32(${e.indicesGet("indices",i)}) - ${J("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${J("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${J("uniforms.x_shape",i,t)})) {
                  k -= i32(${J("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${J("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},ic=(e,t,r)=>{switch(r.mode){case 0:return ec(e,t,r.pads.length);case 1:return tc(e,t,r.pads.length);case 2:return rc(e,t,r.pads.length);case 3:return nc(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ac=(e,t)=>{let r=B.padShape(e[0].dims.slice(),t.pads),n=e[0].dims,i=B.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...ee(e[0].dims,r));let o=["rank"],l=d=>{let h=Q("output",e[0].dataType,r.length),p=D("x",e[0].dataType,n.length),f=p.type.value,g=ic(h,n.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:a?f:"f32"}),`
            ${d.registerUniforms(y).declareVariables(p,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(r)/64)},programUniforms:s}),getShaderSource:l}},sc=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),n=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:n,pads:a}}else return t},oc=(e,t)=>{Jd(e.inputs);let r=sc(e.inputs,t);e.compute(ac(e.inputs,r),{inputs:[0]})}}),pr,Ti,ki,Ii,Ei,uc,lc,zi,Ci,dc,cc,Ai,pc,hc,Mi,fc,mc,gc,yc,ng=q(()=>{We(),re(),ne(),ae(),pr=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ti=(e,t,r)=>{let n=t.format==="NHWC",i=e.dims.slice();n&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Mr.adjustPoolAttributes(r,i,a,o,l,d);let h=Mr.computePoolOutputShape(r,i,o,l,a,d,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let f=h.slice();return f.push(f.splice(1,1)[0]),[p,n?f:h]},ki=(e,t)=>{let r=t.format==="NHWC",n=B.size(e),i=B.size(t.kernelShape),s=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],p=!!(d+h);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:h}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],$=t.pads[t.pads.length-2];f=!!(b+$),s.push({type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:$}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,p,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,h)=>d+h);return[s,a,!!l,!1,!1]}},Ii=(e,t,r,n,i,s,a,o,l,d,h,p)=>{let f=i.format==="NHWC",g=t.type.value,y=Q("output",t.type.tensor,n);if(i.kernelShape.length<=2){let b="",$="",w="",v=r-(f?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let k=r-(f?3:2);p?$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:$=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,w=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${g}(${o});
              var pad = 0;
              ${$}
              ${b}
              ${w}
              ${a}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=i.kernelShape.length,$=i.pads.length,w="";return d?w=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:w=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${g}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${J("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${J("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${J("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${J("uniforms.pads","j - 2u",$)};
                  ${w}
              }
              ${a}

              output[global_idx] = value;
            }`}},Ei=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,uc=e=>`${Ei(e)};${e.countIncludePad}`,lc=e=>`${Ei(e)};${e.storageOrder};${e.dilations}`,zi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ci=(e,t,r,n)=>{let[i,s]=Ti(t,n,r),a=D("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[h,p,f,g,y]=ki(s,i);h.push(...ee(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${n.cacheKey};${f};${g};${y}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:h}),getShaderSource:$=>Ii($,a,t.dims.length,s.length,i,l,d,0,p,f,g,y)}},dc=e=>{let t=e.count_include_pad!==0,r=zi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:t,...r,cacheKey:""};return{...n,cacheKey:uc(n)}},cc=(e,t)=>{pr(e.inputs),e.compute(Ci("AveragePool",e.inputs[0],!1,t))},Ai={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},pc=e=>{let t=e.format;return{format:t,...Ai,cacheKey:t}},hc=(e,t)=>{pr(e.inputs),e.compute(Ci("GlobalAveragePool",e.inputs[0],!0,t))},Mi=(e,t,r,n)=>{let[i,s]=Ti(t,n,r),a=`
      value = max(x_val, value);
    `,o="",l=D("x",t.dataType,t.dims.length),d=["rank"],[h,p,f,g,y]=ki(s,i);return h.push(...ee(t.dims,s)),{name:e,shaderCache:{hint:`${n.cacheKey};${f};${g};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(s)/64)},programUniforms:h}),getShaderSource:b=>Ii(b,l,t.dims.length,s.length,i,a,o,t.dataType===10?-65504:-1e5,p,f,g,y)}},fc=(e,t)=>{pr(e.inputs),e.compute(Mi("MaxPool",e.inputs[0],!1,t))},mc=e=>{let t=e.storage_order,r=e.dilations,n=zi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...n,cacheKey:""};return{...i,cacheKey:lc(i)}},gc=e=>{let t=e.format;return{format:t,...Ai,cacheKey:t}},yc=(e,t)=>{pr(e.inputs),e.compute(Mi("GlobalMaxPool",e.inputs[0],!0,t))}}),_c,bc,wc,$c,ig=q(()=>{re(),ne(),xe(),ae(),_c=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,n)=>r===e[2].dims[n]).reduce((r,n)=>r&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],n=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/n)||t.blockSize>Math.ceil(r/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},bc=(e,t)=>{let r=B.normalizeAxis(t.axis,e[0].dims.length),n=e[0].dataType,i=n===3,s=e[0].dims,a=e[1].dataType,o=B.size(s),l=n===3||n===2,d=l?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,p=e.length>2?e[2]:void 0,f=p?l?[Math.ceil(B.size(p.dims)/4)]:p.dims:void 0,g=h.length===0||h.length===1&&h[0]===1,y=g===!1&&h.length===1,b=ve(o),$=g&&(!l||b===4),w=$?b:1,v=$&&!l?b:1,k=D("input",l?12:n,d.length,v),T=D("scale",a,h.length),E=p?D("zero_point",l?12:n,f.length):void 0,z=Q("output",a,s.length,w),C=[k,T];E&&C.push(E);let x=[d,h];p&&x.push(f);let R=[{type:12,data:o/w},{type:12,data:r},{type:12,data:t.blockSize},...ee(...x,s)],M=P=>{let V=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${P.registerUniforms(V).declareVariables(...C,z)}
      ${P.mainStart()}
          ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${w===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${T.getByOffset("0")}`:y?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:y?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:M,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/w/64),y:1,z:1},programUniforms:R})}},wc=(e,t)=>{_c(e.inputs,t),e.compute(bc(e.inputs,t))},$c=e=>me({axis:e.axis,blockSize:e.blockSize})}),vc,xc,Sc,ag=q(()=>{We(),re(),ae(),vc=(e,t,r)=>{let n=e===t,i=e<t&&r<0,s=e>t&&r>0;if(n||i||s)throw new Error("Range these inputs' contents are invalid.")},xc=(e,t,r,n)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],a=i,o=[{type:12,data:a},{type:n,data:e},{type:n,data:r},...ee(s)],l=d=>{let h=Q("output",n,s.length),p=h.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${d.registerUniforms(f).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},Sc=e=>{let t=0,r=0,n=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],n=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],n=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&vc(t,r,n),e.compute(xc(t,r,n,e.inputs[0].dataType),{inputs:[]})}}),Tc,kc,Ic,Ec,sg=q(()=>{re(),ne(),xe(),ae(),Tc=(e,t,r,n)=>{if(e!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${t}, bitcast<${n}>(${r}));`:`${i}min(bitcast<${n}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},kc=(e,t)=>{let r=e[0].dims,n=e[1].dims,i=r,s=1,a=Math.ceil(B.sizeToDimension(n,n.length-1)/s),o=n[n.length-1],l=B.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...ee(e[1].dims,e[2].dims,i)],h=p=>{let f=D("indices",e[1].dataType,e[1].dims.length),g=D("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?Os("output",e[0].dataType,i.length):Q("output",e[0].dataType,i.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,g,y)}
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
    ${Tc(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h}},Ic=e=>me({reduction:e.reduction}),Ec=(e,t)=>{e.compute(kc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),zc,Cc,Ac,Oi,Mc,Oc,Rc,Bc,Nc,Dc,Uc,Pc,Ri,Lc,qc,Wc,Vc,Gc,Hc,Fc,og=q(()=>{re(),ne(),xe(),ae(),zc=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Cc=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(r).fill(1);return t.forEach((i,s)=>n[i]=e[s]),n},Ac=(e,t,r,n,i,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(h=>n.push(h)),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");zc(n,t),t.axes.length>0&&Cc(n,t.axes,d).forEach((h,p)=>n[p]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Oi=(e,t,r,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${n}(big / (${r}));
  let fract = ${n}(big % (${r})) / ${n}(${r});
  return whole + fract;
`,Mc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Oi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Oi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Oc=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Rc=(e,t,r)=>{let n=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?n:e.slice();return t.length>0?(t.forEach((s,a)=>{n[s]=i[a],n[a+r]=i[t.length+a]}),n):i},Bc=(e,t,r,n)=>{let i=[];if(r.length>0)if(n.length>0){if(e.forEach(s=>i.push(s)),Math.max(...n)>e.length)throw new Error("axes is out of bound");n.forEach((s,a)=>i[s]=r[a])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,a)=>Math.round(s*t[a]))}return i},Nc=(e,t,r)=>{let n=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=n),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(n,0,t.length),i.forEach((s,a)=>i[a]=Math.round(s*t[a]))),i},Dc=(e,t,r,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${J("uniforms.scales","i",n)};
        var roi_low = ${J("uniforms.roi","i",i)};
        var roi_hi = ${J("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${J("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Uc=(e,t,r,n,i,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${J("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${J("uniforms.roi","i",s)};
          var roi_hi = ${J("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${J("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",n.length)};
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
    }`,Pc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${J("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ri=(e,t,r,n)=>e.rank>n?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Lc=(e,t,r,n,i)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Ri(e,l,s,2)}
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
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
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
    }`},qc=(e,t,r,n,i,s,a,o,l,d)=>{let h=r.length===2,[p,f]=h?[0,1]:[2,3],g=e.type.value,y=b=>{let $=b===p?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[b]},
        ${n[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${g} = originalIdx + ${g}(i);
          if (${$} < 0 || ${$} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${$} = max(0, min(${$}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${$})`)};
          data[i + 1] = ${b===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(p)};
    ${y(f)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Wc=(e,t,r,n,i)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Ri(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${a}];
      var height:${h} = originalIndices[${o}];
      var width:${h} = originalIndices[${l}];
      ${n?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
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
    }`},Vc=(e,t,r,n,i,s)=>{let a=e.dims,o=Rc(s,t.axes,a.length),l=Bc(a,n,i,t.axes),d=n.slice();n.length===0&&(d=a.map((v,k)=>v===0?1:l[k]/v),t.keepAspectRatioPolicy!=="stretch"&&(l=Nc(a,d,t)));let h=Q("output",e.dataType,l.length),p=D("input",e.dataType,a.length),f=B.size(l),g=a.length===l.length&&a.every((v,k)=>v===l[k]),y=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,$=p.type.value,w=v=>`
      ${g?"":`
      ${Mc(t.coordinateTransformMode,$)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Pc(p,a)};
              ${Oc(t.nearestMode,r,$)};
              ${Uc(p,h,a,l,d.length,o.length,y)};
              `;case"linear":return`
              ${Dc(h,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Lc(p,h,a,y,b)}`;if(a.length===3||a.length===5)return`${Wc(p,h,a,y,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${qc(p,h,a,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(p,h)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${g}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ee(a,l)]})}},Gc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Hc=(e,t)=>{let r=[],n=[],i=[],s=Gc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Ac(e.inputs,t,s,r,n,i),e.compute(Vc(e.inputs[0],t,s,r,n,i),{inputs:[0]})},Fc=e=>{let t=e.antialias,r=e.axes,n=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return me({antialias:t,axes:r,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),jc,Kc,Xc,ug=q(()=>{re(),ne(),ae(),jc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],n=e[2];if(t.dataType!==r.dataType||t.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Kc=(e,t,r,n)=>{let i=t.simplified,s=e[0].dims,a=B.size(s),o=s,l=a,d=s.slice(-1)[0],h=n?s.slice(0,-1).concat(1):[],p=!i&&e.length>3,f=e.length>4,g=n&&r>1,y=n&&r>2,b=r>3,$=64,w=ve(d),v=[{type:12,data:l},{type:12,data:w},{type:12,data:d},{type:1,data:t.epsilon}],k=E=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[D("x",e[0].dataType,e[0].dims,w),D("skip",e[1].dataType,e[1].dims,w),D("gamma",e[2].dataType,e[2].dims,w)];p&&C.push(D("beta",e[3].dataType,e[3].dims,w)),f&&C.push(D("bias",e[4].dataType,e[4].dims,w)),C.push(Q("output",e[0].dataType,o,w)),g&&C.push(Q("mean_output",1,h)),y&&C.push(Q("inv_std_output",1,h)),b&&C.push(Q("input_skip_bias_sum",e[0].dataType,o,w));let x=ke(e[0].dataType),R=ke(1,w);return`

      ${E.registerUniforms(z).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${$}>;
      var<workgroup> sum_squared_shared : array<${R}, ${$}>;

      ${E.mainStart([$,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${$};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${$};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${$-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":x+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Kt(x,w,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${$};
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
        let mean = ${ht("sum",w)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ht("square_sum",w)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${x}(mean)`}) *
            ${x}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:o,dataType:e[0].dataType}];return r>1&&T.push({dims:h,dataType:1}),r>2&&T.push({dims:h,dataType:1}),r>3&&T.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${w};${g};${y};${b}`,inputDependencies:e.map((E,z)=>"type")},getShaderSource:k,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:v})}},Xc=(e,t)=>{jc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Kc(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Zc,hr,Yc,Bi,Qc,Jc,ep,tp,lg=q(()=>{re(),ne(),xe(),ae(),Zc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},hr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(n=>r.push(Number(n)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(n=>r.push(Number(n)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Yc=(e,t)=>{if(e.length>1){let r=hr(e,1),n=hr(e,2),i=hr(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),me({starts:r,ends:n,axes:i})}else return t},Bi=(e,t,r,n,i)=>{let s=e;return e<0&&(s+=r[n[t]]),i[t]<0?Math.max(0,Math.min(s,r[n[t]]-1)):Math.max(0,Math.min(s,r[n[t]]))},Qc=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${J("uniforms.input_shape","i",r.length)};
            let steps_i = ${J("uniforms.steps","i",r.length)};
            let signs_i = ${J("uniforms.signs","i",r.length)};
            let starts_i = ${J("uniforms.starts","i",r.length)};
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
      }`,Jc=(e,t)=>{let r=e[0].dims,n=B.size(r),i=t.axes.length>0?B.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=hr(e,4);s.forEach(w=>w!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let a=t.starts.map((w,v)=>Bi(w,v,r,i,s)),o=t.ends.map((w,v)=>Bi(w,v,r,i,s));if(i.length!==a.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let w=0;w<r.length;++w)i.includes(w)||(a.splice(w,0,0),o.splice(w,0,r[w]),s.splice(w,0,1));let l=s.map(w=>Math.sign(w));s.forEach((w,v,k)=>{if(w<0){let T=(o[v]-a[v])/w,E=a[v],z=E+T*s[v];a[v]=z,o[v]=E,k[v]=-w}});let d=r.slice(0);i.forEach((w,v)=>{d[w]=Math.ceil((o[w]-a[w])/s[w])});let h={dims:d,dataType:e[0].dataType},p=Q("output",e[0].dataType,d.length),f=D("input",e[0].dataType,e[0].dims.length),g=B.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:g},{type:12,data:a},{type:6,data:l},{type:12,data:s},...ee(e[0].dims,d)],$=w=>`
      ${w.registerUniforms(y).declareVariables(f,p)}
        ${Qc(f,p,r)}
        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:b})}},ep=(e,t)=>{Zc(e.inputs,t);let r=Yc(e.inputs,t);e.compute(Jc(e.inputs,r),{inputs:[0]})},tp=e=>{let t=e.starts,r=e.ends,n=e.axes;return me({starts:t,ends:r,axes:n})}}),rp,np,ip,ap,dg=q(()=>{re(),ne(),xe(),ft(),ae(),rp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},np=(e,t)=>{let r=e.inputs[0],n=r.dims,i=B.size(n),s=n.length,a=B.normalizeAxis(t.axis,s),o=a<n.length-1,l,d=[];o?(d=Array.from({length:s},(C,x)=>x),d[a]=s-1,d[s-1]=a,l=e.compute(Ue(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,p=h[s-1],f=i/p,g=ve(p),y=p/g,b=64;f===1&&(b=256);let $=(C,x)=>x===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:x===2?`max(${C}.x, ${C}.y)`:x===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,w=D("x",l.dataType,l.dims,g),v=Q("result",l.dataType,l.dims,g),k=w.type.value,T=ke(l.dataType)==="f32"?`var threadMax = ${k}(-3.4028234663852886e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(w,v)}
      ${C.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
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
          rowMaxShared = ${k}(${$("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
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
          rowSumShared = ${k}(${ht("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${k}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${g};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:y}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Ue(z,d),{inputs:[z]})},ip=(e,t)=>{rp(e.inputs),np(e,t)},ap=e=>me({axis:e.axis})}),Ni,sp,op,up,lp,cg=q(()=>{re(),ne(),ae(),Ni=e=>Array.from(e.getBigInt64Array(),Number),sp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ni(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},op=(e,t)=>{let r=[];for(let n=0;n<e.length;++n)r.push(e[n]*t[n]);return r},up=(e,t)=>{let r=e[0].dims,n=t??Ni(e[1]),i=op(r,n),s=B.size(i),a=e[0].dataType,o=D("input",a,r.length),l=Q("output",a,i.length),d=h=>`
      const inputShape = ${o.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(o,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ee(e[0].dims,i)]}),getShaderSource:d}},lp=e=>{sp(e.inputs),e.compute(up(e.inputs),{inputs:[0]})}}),dp,cp,pp,pg=q(()=>{re(),ne(),ae(),dp=(e,t,r,n,i)=>{let s=Q("output_data",i,r.length,4),a=D("a_data",t[1].dataType,t[1].dims.length,4),o=D("b_data",t[2].dataType,t[2].dims.length,4),l=D("c_data",t[0].dataType,t[0].dims.length,4),d,h=(p,f,g)=>`select(${f}, ${p}, ${g})`;if(!n)d=s.setByOffset("global_idx",h(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(f,g,y="")=>{let b=`a_data[index_a${g}][component_a${g}]`,$=`b_data[index_b${g}][component_b${g}]`,w=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${s.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${a.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let offset_b${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let offset_c${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,s)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${f}[${g}] = ${y}(${h(b,$,w)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},cp=e=>{let t=e[1].dims,r=e[2].dims,n=e[0].dims,i=e[1].dataType,s=!(B.areEqual(t,r)&&B.areEqual(r,n)),a=t,o=B.size(t);if(s){let d=Ft.calcShape(Ft.calcShape(t,r,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=B.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>dp(d,e,a,s,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ee(n,t,r,a)]})}},pp=e=>{e.compute(cp(e.inputs))}}),hp,hg=q(()=>{Im(),Qn(),Em(),zm(),Cm(),Am(),Mm(),Dm(),Pm(),Lm(),qm(),Wm(),Vm(),Gm(),Hm(),Fm(),jm(),Km(),Xm(),Zm(),Ym(),Qm(),Jm(),eg(),tg(),Td(),rg(),ng(),ig(),ag(),sg(),Xn(),og(),Bd(),ug(),lg(),dg(),Md(),cg(),ft(),ri(),pg(),hp=new Map([["Abs",[jo]],["Acos",[Ko]],["Acosh",[Xo]],["Add",[Nu]],["ArgMax",[Mo,Yn]],["ArgMin",[Ao,Yn]],["Asin",[Zo]],["Asinh",[Yo]],["Atan",[Qo]],["Atanh",[Jo]],["Attention",[Uo]],["AveragePool",[cc,dc]],["BatchNormalization",[Wo]],["BiasAdd",[Ho]],["BiasSplitGelu",[Ou]],["Cast",[tu,eu]],["Ceil",[iu]],["Clip",[nu]],["Concat",[Zu,Yu]],["Conv",[mi,hi]],["ConvTranspose",[Sl,$l]],["Cos",[au]],["Cosh",[su]],["CumSum",[kl,Il]],["DepthToSpace",[Al,Ml]],["DequantizeLinear",[wc,$c]],["Div",[Du]],["Einsum",[Ul,Pl]],["Elu",[ou,or]],["Equal",[Uu]],["Erf",[uu]],["Exp",[lu]],["Expand",[Vl]],["FastGelu",[Hl]],["Floor",[du]],["FusedConv",[mi,hi]],["Gather",[Xl,Kl]],["GatherElements",[sd,ad]],["GatherBlockQuantized",[td,rd]],["GatherND",[Yl,Ql]],["Gelu",[cu]],["Gemm",[dd,ld]],["GlobalAveragePool",[hc,pc]],["GlobalMaxPool",[yc,gc]],["Greater",[Wu]],["GreaterOrEqual",[Gu]],["GridSample",[bd,wd]],["GroupQueryAttention",[Pd]],["HardSigmoid",[bu,_u]],["InstanceNormalization",[Wd]],["LayerNormalization",[Hd]],["LeakyRelu",[pu,or]],["Less",[Vu]],["LessOrEqual",[Hu]],["Log",[Iu]],["MatMul",[jd]],["MatMulNBits",[Yd,Qd]],["MaxPool",[fc,mc]],["Mul",[Pu]],["MultiHeadAttention",[Sd,vd]],["Neg",[fu]],["Not",[hu]],["Pad",[oc]],["Pow",[Lu]],["QuickGelu",[Cu,or]],["Range",[Sc]],["Reciprocal",[mu]],["ReduceMin",[ko]],["ReduceMean",[$o]],["ReduceMax",[To]],["ReduceSum",[Eo]],["ReduceProd",[Io]],["ReduceL1",[vo]],["ReduceL2",[xo]],["ReduceLogSum",[Co]],["ReduceLogSumExp",[So]],["ReduceSumSquare",[zo]],["Relu",[gu]],["Resize",[Hc,Fc]],["RotaryEmbedding",[Rd]],["ScatterND",[Ec,Ic]],["Sigmoid",[yu]],["Sin",[wu]],["Sinh",[$u]],["Slice",[ep,tp]],["SkipLayerNormalization",[Xc]],["Split",[Cd,Ad]],["Sqrt",[vu]],["Softmax",[ip,ap]],["Sub",[qu]],["Tan",[xu]],["Tanh",[Su]],["ThresholdedRelu",[ku,or]],["Tile",[lp]],["Transpose",[qs,Ws]],["Where",[pp]]])}),fp,fg=q(()=>{We(),st(),ae(),fp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,n,i){Qe(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:n};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...n),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(e.programInfo.name)}dispose(){}build(e,t){Qe(e.name);let r=this.backend.device,n=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&n.push(`enable ${d.extension};`)});let i=Bs(t,this.backend.device.limits),s=e.getShaderSource(i),a=`${n.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ge(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,n=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&n<=i)return[t,r,n];let s=t*r*n,a=Math.ceil(Math.sqrt(s));if(a>i){if(a=Math.ceil(Math.cbrt(s)),a>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),mp={};Gt(mp,{WebGpuBackend:()=>bp});var gp,yp,_p,bp,mg=q(()=>{We(),re(),st(),$s(),Tm(),hg(),fg(),gp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let n=0;n<e.length;++n){let i=e[n].dataType;switch(t[n]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[n].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[n].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[n]}`)}}return r.join("|")},yp=(e,t,r)=>{var i,s;let n=e.name;return(i=e.shaderCache)!=null&&i.hint&&(n+="["+e.shaderCache.hint+"]"),n+=":"+r+`:${gp(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,n},_p=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},bp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],n={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=o=>t.features.has(o)&&r.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(n);let s=t,a=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new _p(a),this.gpuDataManager=As(this),this.programManager=new fp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Mn(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Qe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var n;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],a=s.kernelId,o=this.kernels.get(a),l=o.kernelType,d=o.kernelName,h=s.programName,p=s.inputTensorViews,f=s.outputTensorViews,g=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let b=Number(g-this.queryTimeBase),$=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if((n=this.env.webgpu.profiling)!=null&&n.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(w=>({dims:w.dims,dataType:at(w.dataType)})),outputsMetadata:f.map(w=>({dims:w.dims,dataType:at(w.dataType)})),kernelId:a,kernelType:l,kernelName:d,programName:h,startTime:b,endTime:$});else{let w="";p.forEach((k,T)=>{w+=`input[${T}]: [${k.dims}] | ${at(k.dataType)}, `});let v="";f.forEach((k,T)=>{v+=`output[${T}]: [${k.dims}] | ${at(k.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${d}|${h}" ${w}${v}start time: ${b} ns, execution time: ${$-b} ns`)}kr("GPU",`${h}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ge()}run(e,t,r,n,i,s){Qe(e.name);let a=[];for(let v=0;v<t.length;++v){let k=t[v].data;if(k===0)continue;let T=this.gpuDataManager.get(k);if(!T)throw new Error(`no GPU data for input: ${k}`);a.push(T)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),h=r.length===0?o.map((v,k)=>k):r;if(h.length!==o.length)throw new Error(`Output size ${h.length} must be equal to ${o.length}.`);let p=[],f=[];for(let v=0;v<o.length;++v){if(!Number.isInteger(h[v])||h[v]<-3||h[v]>=s)throw new Error(`Invalid output index: ${h[v]}`);if(h[v]===-3)continue;let k=h[v]===-1,T=h[v]===-2,E=k||T?i(o[v].dataType,o[v].dims):n(h[v],o[v].dataType,o[v].dims);if(p.push(E),E.data===0)continue;let z=this.gpuDataManager.get(E.data);if(!z)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(z),T){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(z)}f.push(z)}if(a.length!==t.length||f.length!==p.length){if(f.length===0)return Ge(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(d){let v=0,k=[];d.forEach(C=>{let x=typeof C.data=="number"?[C.data]:C.data;if(x.length===0)return;let R=C.type===10?2:4,M,P;C.type===10?(P=x.length>4?16:x.length>2?8:x.length*R,M=x.length>4?16:R*x.length):(P=x.length<=2?x.length*R:16,M=16),v=Math.ceil(v/P)*P,k.push(v);let V=C.type===10?8:4;v+=x.length>4?Math.ceil(x.length/V)*M:x.length*R});let T=16;v=Math.ceil(v/T)*T;let E=new ArrayBuffer(v);d.forEach((C,x)=>{let R=k[x],M=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,R,M.length).set(M);else if(C.type===12)new Uint32Array(E,R,M.length).set(M);else if(C.type===10)new Uint16Array(E,R,M.length).set(M);else if(C.type===1)new Float32Array(E,R,M.length).set(M);else throw new Error(`Unsupported uniform type: ${at(C.type)}`)});let z=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,E,0,v),this.gpuDataManager.release(z.id),g={offset:0,size:v,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),b=y[1]===1&&y[2]===1,$=yp(e,t,b),w=this.programManager.getArtifact($);if(w||(w=this.programManager.build(e,y),this.programManager.setArtifact($,w),ce("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),d&&w.uniformVariablesInfo){if(d.length!==w.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${w.uniformVariablesInfo.length}, got ${d.length} in program "${w.programInfo.name}".`);for(let v=0;v<d.length;v++){let k=d[v],T=k.type,E=typeof k.data=="number"?1:k.data.length,[z,C]=w.uniformVariablesInfo[v];if(T!==z||E!==C)throw new Error(`Uniform variable ${v} mismatch: expect type ${z} with size ${C}, got type ${T} with size ${E} in program "${w.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:w.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run(w,a,f,y,g),Ge(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,n){let i=hp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:n,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let n=this.kernels.get(e);if(!n)throw new Error(`kernel not created: ${e}`);let i=n.kernelType,s=n.kernelName,a=n.kernelEntry,o=n.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,n){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),a=this.gpuDataManager.registerExternalBuffer(r,n,s);return i.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let n=await Gn(this,e,t);return On(n.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let n=0;n<r;n++){let i=this.getComputePassEncoder(),s=e[n];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[n]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),wp={};Gt(wp,{init:()=>vp});var Gr,$p,vp,gg=q(()=>{re(),st(),ne(),Sm(),Gr=class tm{constructor(t,r,n,i){this.module=t,this.dataType=r,this.data=n,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new tm(this.module,this.dataType,this.data,t)}},$p=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let n=e.PTR_SIZE,i=r/e.PTR_SIZE,s=n===4?"i32":"i64";this.opKernelContext=Number(e.getValue(n*i++,s));let a=Number(e.getValue(n*i++,s));this.outputCount=Number(e.getValue(n*i++,s)),this.customDataOffset=Number(e.getValue(n*i++,"*")),this.customDataSize=Number(e.getValue(n*i++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(n*i++,s)),h=Number(e.getValue(n*i++,"*")),p=Number(e.getValue(n*i++,s)),f=[];for(let g=0;g<p;g++)f.push(Number(e.getValue(n*i++,s)));o.push(new Gr(e,d,h,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,n=(t==null?void 0:t.outputs)??[],i=(o,l,d)=>new Gr(this.module,l,this.output(o,d),d),s=(o,l)=>{let d=zt(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let h=d>0?this.backend.gpuDataManager.create(d).id:0;return new Gr(this.module,o,h,l)};return this.backend.run(e,r,n,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let n=this.module.PTR_SIZE,i=n===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*n);this.module.setValue(s,t.length,i);for(let a=0;a<t.length;a++)this.module.setValue(s+n*(a+1),t[a],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(n){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(r)}}},vp=async(e,t,r,n)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(mg(),Jt(mp)).WebGpuBackend,a=new s;await a.initialize(r,n),i("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,h=!1)=>{if(h)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),p)}},async(o,l,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,h)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let p=new $p(t,a,Number(l));return a.computeKernel(Number(o),p,h)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Is(r);i("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,h)=>s.ensureTensor(a,o,l,d,h),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),xp,Di,Ui,mt,Sp,Pi,Hr,Li,qi,Wi,Vi,Gi,Hi,Tp=q(()=>{We(),$m(),vm(),re(),kt(),In(),cs(),xp=(e,t)=>{be()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},Di=async e=>{xp(e.wasm.numThreads,Ar(e.logLevel))},Ui=async(e,t)=>{var n,i;(i=(n=be()).asyncInit)==null||i.call(n);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(gg(),Jt(wp)).init;t==="webgpu"&&await s("webgpu",be(),e,r),t==="webnn"&&await s("webnn",be(),e)}},mt=new Map,Sp=e=>{let t=be(),r=t.stackSave();try{let n=t.PTR_SIZE,i=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,i,i+n)!==0&&ge("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+n,s))]}finally{t.stackRestore(r)}},Pi=(e,t)=>{let r=be(),n=r.stackSave(),i=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&ge("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));i=Number(r.getValue(a+s,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],h=[];for(let p=0;p<d;p++){let f=Number(r.getValue(i+8+p*s,"*"));h.push(f!==0?r.UTF8ToString(f):Number(r.getValue(i+8+(p+d)*s,"*")))}return[o,l,h]}finally{r.stackRestore(n),i!==0&&r._OrtFree(i)}},Hr=e=>{let t=be(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Li=async(e,t)=>{var p,f,g,y;let r,n,i=be();Array.isArray(e)?[r,n]=e:e.buffer===i.HEAPU8.buffer?[r,n]=[e.byteOffset,e.byteLength]:[r,n]=Hr(e);let s=0,a=0,o=0,l=[],d=[],h=[];try{if([a,l]=await ds(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let x=[];for(let R of t.externalData){let M=typeof R=="string"?R:R.path;x.push(An(typeof R=="string"?R:R.data).then(P=>{i.mountExternalData(M,P)}))}await Promise.all(x)}for(let x of(t==null?void 0:t.executionProviders)??[])if((typeof x=="string"?x:x.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof x!="string"){let R=x,M=R==null?void 0:R.context,P=R==null?void 0:R.gpuDevice,V=R==null?void 0:R.deviceType,F=R==null?void 0:R.powerPreference;M?i.currentContext=M:P?i.currentContext=await i.webnnCreateMLContext(P):i.currentContext=await i.webnnCreateMLContext({deviceType:V,powerPreference:F})}else i.currentContext=await i.webnnCreateMLContext();break}s=await i._OrtCreateSession(r,n,a),(p=i.webgpuOnCreateSession)==null||p.call(i,s),s===0&&ge("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[b,$]=Sp(s),w=!!(t!=null&&t.enableGraphCapture),v=[],k=[],T=[],E=[],z=[];for(let x=0;x<b;x++){let[R,M,P]=Pi(s,x);R===0&&ge("Can't get an input name."),d.push(R);let V=i.UTF8ToString(R);v.push(V),T.push(M===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:at(M),shape:P})}for(let x=0;x<$;x++){let[R,M,P]=Pi(s,x+b);R===0&&ge("Can't get an output name."),h.push(R);let V=i.UTF8ToString(R);k.push(V),E.push(M===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:at(M),shape:P});{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){z.push("gpu-buffer");continue}let F=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[V])??"cpu",O=i.webnnIsGraphOutput;if(F==="cpu"&&O&&O(s,V)){z.push("ml-tensor-cpu-output");continue}if(F!=="cpu"&&F!=="cpu-pinned"&&F!=="gpu-buffer"&&F!=="ml-tensor")throw new Error(`Not supported preferred output location: ${F}.`);if(w&&F!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${F}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);z.push(F)}}let C=null;return z.some(x=>x==="gpu-buffer"||x==="ml-tensor"||x==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(s),o===0&&ge("Can't create IO binding."),C={handle:o,outputPreferredLocations:z,outputPreferredLocationsEncoded:z.map(x=>x==="ml-tensor-cpu-output"?"ml-tensor":x).map(x=>Cn(x))}),mt.set(s,[s,d,h,C,w,!1]),[s,v,k,T,E]}catch(b){throw d.forEach($=>i._OrtFree($)),h.forEach($=>i._OrtFree($)),o!==0&&i._OrtReleaseBinding(o)!==0&&ge("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&ge("Can't release session."),b}finally{i._free(r),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&ge("Can't release session options."),l.forEach(b=>i._free(b)),(y=i.unmountExternalData)==null||y.call(i)}},qi=e=>{var l,d,h;let t=be(),r=mt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[n,i,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&ge("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(n)!==0&&ge("Can't release session."),mt.delete(e)},Wi=async(e,t,r,n,i,s,a=!1)=>{if(!e){t.push(0);return}let o=be(),l=o.PTR_SIZE,d=e[0],h=e[1],p=e[3],f=p,g,y;if(d==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let w=e[2].gpuBuffer;y=zt(Et(d),h);{let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=v(n,s,w,y)}}else if(p==="ml-tensor"){let w=e[2].mlTensor;y=zt(Et(d),h);let v=o.webnnRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=v(n,w,Et(d),h)}else{let w=e[2];if(Array.isArray(w)){y=l*w.length,g=o._malloc(y),r.push(g);for(let v=0;v<w.length;v++){if(typeof w[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(g+v*l,He(w[v],r),"*")}}else{let v=o.webnnIsGraphInput,k=o.webnnIsGraphOutput;if(d!=="string"&&v&&k){let T=o.UTF8ToString(i);if(v(n,T)||k(n,T)){let E=Et(d);y=zt(E,h),f="ml-tensor";let z=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!z||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let x=await z(n,E,h);C(x,new Uint8Array(w.buffer,w.byteOffset,w.byteLength)),g=x}else y=w.byteLength,g=o._malloc(y),r.push(g),o.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,y),g)}else y=w.byteLength,g=o._malloc(y),r.push(g),o.HEAPU8.set(new Uint8Array(w.buffer,w.byteOffset,y),g)}}let b=o.stackSave(),$=o.stackAlloc(4*h.length);try{h.forEach((v,k)=>o.setValue($+k*l,v,l===4?"i32":"i64"));let w=o._OrtCreateTensor(Et(d),g,y,$,h.length,Cn(f));w===0&&ge(`Can't create tensor for input/output. session=${n}, index=${s}.`),t.push(w)}finally{o.stackRestore(b)}},Vi=async(e,t,r,n,i,s)=>{var V,F,O,X;let a=be(),o=a.PTR_SIZE,l=mt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],h=l[1],p=l[2],f=l[3],g=l[4],y=l[5],b=t.length,$=n.length,w=0,v=[],k=[],T=[],E=[],z=[],C=a.stackSave(),x=a.stackAlloc(b*o),R=a.stackAlloc(b*o),M=a.stackAlloc($*o),P=a.stackAlloc($*o);try{[w,v]=as(s),St("wasm prepareInputOutputTensor");for(let U=0;U<b;U++)await Wi(r[U],k,E,e,h[t[U]],t[U],g);for(let U=0;U<$;U++)await Wi(i[U],T,E,e,p[n[U]],b+n[U],g);Tt("wasm prepareInputOutputTensor");for(let U=0;U<b;U++)a.setValue(x+U*o,k[U],"*"),a.setValue(R+U*o,h[t[U]],"*");for(let U=0;U<$;U++)a.setValue(M+U*o,T[U],"*"),a.setValue(P+U*o,p[n[U]],"*");if(f&&!y){let{handle:U,outputPreferredLocations:te,outputPreferredLocationsEncoded:L}=f;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);St("wasm bindInputsOutputs");for(let H=0;H<b;H++){let Z=t[H];await a._OrtBindInput(U,h[Z],k[H])!==0&&ge(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<$;H++){let Z=n[H];(V=i[H])!=null&&V[3]?(z.push(T[H]),a._OrtBindOutput(U,p[Z],T[H],0)!==0&&ge(`Can't bind pre-allocated output[${H}] for session=${e}.`)):a._OrtBindOutput(U,p[Z],0,L[Z])!==0&&ge(`Can't bind output[${H}] to ${te[H]} for session=${e}.`)}Tt("wasm bindInputsOutputs"),mt.set(e,[d,h,p,f,g,!0])}(F=a.jsepOnRunStart)==null||F.call(a,d),(O=a.webnnOnRunStart)==null||O.call(a,d);let j;f?j=await a._OrtRunWithBinding(d,f.handle,$,M,w):j=await a._OrtRun(d,R,x,b,P,$,M,w),j!==0&&ge("failed to call OrtRun().");let Y=[],de=[];St("wasm ProcessOutputTensor");for(let U=0;U<$;U++){let te=Number(a.getValue(M+U*o,"*"));if(te===T[U]||z.includes(T[U])){Y.push(i[U]),te!==T[U]&&a._OrtReleaseTensor(te)!==0&&ge("Can't release tensor.");continue}let L=a.stackSave(),H=a.stackAlloc(4*o),Z=!1,W,pe=0;try{a._OrtGetTensorData(te,H,H+o,H+2*o,H+3*o)!==0&&ge(`Can't access output tensor data on index ${U}.`);let Pe=o===4?"i32":"i64",Se=Number(a.getValue(H,Pe));pe=a.getValue(H+o,"*");let Me=a.getValue(H+o*2,"*"),Oe=Number(a.getValue(H+o*3,Pe)),Le=[];for(let we=0;we<Oe;we++)Le.push(Number(a.getValue(Me+we*o,Pe)));a._OrtFree(Me)!==0&&ge("Can't free memory for tensor dims.");let Re=Le.reduce((we,ie)=>we*ie,1);W=at(Se);let yt=f==null?void 0:f.outputPreferredLocations[n[U]];if(W==="string"){if(yt==="gpu-buffer"||yt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let ie=0;ie<Re;ie++){let qe=a.getValue(pe+ie*o,"*"),Zr=a.getValue(pe+(ie+1)*o,"*"),br=ie===Re-1?void 0:Zr-qe;we.push(a.UTF8ToString(qe,br))}Y.push([W,Le,we,"cpu"])}else if(yt==="gpu-buffer"&&Re>0){let we=a.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ie=we(pe),qe=zt(Se,Re);if(qe===void 0||!En(W))throw new Error(`Unsupported data type: ${W}`);Z=!0,Y.push([W,Le,{gpuBuffer:ie,download:a.jsepCreateDownloader(ie,qe,W),dispose:()=>{a._OrtReleaseTensor(te)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(yt==="ml-tensor"&&Re>0){let we=a.webnnEnsureTensor,ie=a.webnnIsGraphInputOutputTypeSupported;if(!we||!ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(zt(Se,Re)===void 0||!zn(W))throw new Error(`Unsupported data type: ${W}`);if(!ie(e,W,!1))throw new Error(`preferredLocation "ml-tensor" for ${W} output is not supported by current WebNN Context.`);let qe=await we(e,pe,Se,Le,!1);Z=!0,Y.push([W,Le,{mlTensor:qe,download:a.webnnCreateMLTensorDownloader(pe,W),dispose:()=>{a.webnnReleaseTensorId(pe),a._OrtReleaseTensor(te)}},"ml-tensor"])}else if(yt==="ml-tensor-cpu-output"&&Re>0){let we=a.webnnCreateMLTensorDownloader(pe,W)(),ie=Y.length;Z=!0,de.push((async()=>{let qe=[ie,await we];return a.webnnReleaseTensorId(pe),a._OrtReleaseTensor(te),qe})()),Y.push([W,Le,[],"cpu"])}else{let we=Cr(W),ie=new we(Re);new Uint8Array(ie.buffer,ie.byteOffset,ie.byteLength).set(a.HEAPU8.subarray(pe,pe+ie.byteLength)),Y.push([W,Le,ie,"cpu"])}}finally{a.stackRestore(L),W==="string"&&pe&&a._free(pe),Z||a._OrtReleaseTensor(te)}}f&&!g&&(a._OrtClearBoundOutputs(f.handle)!==0&&ge("Can't clear bound outputs."),mt.set(e,[d,h,p,f,g,!1]));for(let[U,te]of await Promise.all(de))Y[U][2]=te;return Tt("wasm ProcessOutputTensor"),Y}finally{(X=a.webnnOnRunEnd)==null||X.call(a,d),a.stackRestore(C),k.forEach(j=>a._OrtReleaseTensor(j)),T.forEach(j=>a._OrtReleaseTensor(j)),E.forEach(j=>a._free(j)),w!==0&&a._OrtReleaseRunOptions(w),v.forEach(j=>a._free(j))}},Gi=e=>{let t=be(),r=mt.get(e);if(!r)throw new Error("invalid session id");let n=r[0],i=t._OrtEndProfiling(n);i===0&&ge("Can't get an profile file name."),t._OrtFree(i)},Hi=e=>{let t=[];for(let r of e){let n=r[2];!Array.isArray(n)&&"buffer"in n&&t.push(n.buffer)}return t}}),gt,Ae,Xt,fr,mr,Fr,Fi,jr,Nt,Dt,kp,Ip,Ep,zp,Cp,Ap,Mp,Op,Rp=q(()=>{We(),Tp(),kt(),xn(),gt=()=>!!_e.wasm.proxy&&typeof document<"u",Xt=!1,fr=!1,mr=!1,jr=new Map,Nt=(e,t)=>{let r=jr.get(e);r?r.push(t):jr.set(e,[t])},Dt=()=>{if(Xt||!fr||mr||!Ae)throw new Error("worker not ready")},kp=e=>{switch(e.data.type){case"init-wasm":Xt=!1,e.data.err?(mr=!0,Fi[1](e.data.err)):(fr=!0,Fi[0]()),Fr&&(URL.revokeObjectURL(Fr),Fr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=jr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ip=async()=>{if(!fr){if(Xt)throw new Error("multiple calls to 'initWasm()' detected.");if(mr)throw new Error("previous call to 'initWasm()' failed.");if(Xt=!0,gt())return new Promise((e,t)=>{Ae==null||Ae.terminate(),es().then(([r,n])=>{try{Ae=n,Ae.onerror=s=>t(s),Ae.onmessage=kp,Fi=[e,t];let i={type:"init-wasm",in:_e};!i.in.wasm.wasmPaths&&(r||bn)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),Ae.postMessage(i),Fr=r}catch(i){t(i)}},t)});try{await kn(_e.wasm),await Di(_e),fr=!0}catch(e){throw mr=!0,e}finally{Xt=!1}}},Ep=async e=>{if(gt())return Dt(),new Promise((t,r)=>{Nt("init-ep",[t,r]);let n={type:"init-ep",in:{epName:e,env:_e}};Ae.postMessage(n)});await Ui(_e,e)},zp=async e=>gt()?(Dt(),new Promise((t,r)=>{Nt("copy-from",[t,r]);let n={type:"copy-from",in:{buffer:e}};Ae.postMessage(n,[e.buffer])})):Hr(e),Cp=async(e,t)=>{if(gt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Dt(),new Promise((r,n)=>{Nt("create",[r,n]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ae.postMessage(i,s)})}else return Li(e,t)},Ap=async e=>{if(gt())return Dt(),new Promise((t,r)=>{Nt("release",[t,r]);let n={type:"release",in:e};Ae.postMessage(n)});qi(e)},Mp=async(e,t,r,n,i,s)=>{if(gt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Dt(),new Promise((a,o)=>{Nt("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:n,options:s}};Ae.postMessage(d,Hi(l))})}else return Vi(e,t,r,n,i,s)},Op=async e=>{if(gt())return Dt(),new Promise((t,r)=>{Nt("end-profiling",[t,r]);let n={type:"end-profiling",in:e};Ae.postMessage(n)});Gi(e)}}),ji,Bp,Np,yg=q(()=>{We(),Rp(),re(),mn(),cs(),ji=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Bp=e=>{switch(e[3]){case"cpu":return new Ne(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!En(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:n,dispose:i}=e[2];return Ne.fromGpuBuffer(r,{dataType:t,dims:e[1],download:n,dispose:i})}case"ml-tensor":{let t=e[0];if(!zn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:n,dispose:i}=e[2];return Ne.fromMLTensor(r,{dataType:t,dims:e[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Np=class{async fetchModelAndCopyToWasmMemory(e){return zp(await An(e))}async loadModel(e,t){Qe();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Cp(r,t),Ge()}async dispose(){return Ap(this.sessionId)}async run(e,t,r){Qe();let n=[],i=[];Object.entries(e).forEach(p=>{let f=p[0],g=p[1],y=this.inputNames.indexOf(f);if(y===-1)throw new Error(`invalid input '${f}'`);n.push(g),i.push(y)});let s=[],a=[];Object.entries(t).forEach(p=>{let f=p[0],g=p[1],y=this.outputNames.indexOf(f);if(y===-1)throw new Error(`invalid output '${f}'`);s.push(g),a.push(y)});let o=n.map((p,f)=>ji(p,()=>`input "${this.inputNames[i[f]]}"`)),l=s.map((p,f)=>p?ji(p,()=>`output "${this.outputNames[a[f]]}"`):null),d=await Mp(this.sessionId,i,o,a,l,r),h={};for(let p=0;p<d.length;p++)h[this.outputNames[a[p]]]=s[p]??Bp(d[p]);return Ge(),h}startProfiling(){}endProfiling(){Op(this.sessionId)}}}),Dp={};Gt(Dp,{OnnxruntimeWebAssemblyBackend:()=>Xi,initializeFlags:()=>Ki,wasmBackend:()=>Up});var Ki,Xi,Up,_g=q(()=>{We(),Rp(),yg(),Ki=()=>{(typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0);let e=_e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),_e.wasm.simd=!1),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let t=typeof navigator>"u"?nm("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Xi=class{async init(e){Ki(),await Ip(),await Ep(e)}async createInferenceSessionHandler(e,t){let r=new Np;return await r.loadModel(e,t),r}},Up=new Xi});We(),We(),We();var bg="1.27.0";{let e=(_g(),Jt(Dp)).wasmBackend;Ht("webgpu",e,5),Ht("webnn",e,5),Ht("cpu",e,10),Ht("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:bg,enumerable:!0});/**
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
 */const wg=114;function $g(e,t,r){const n=Math.min(r/e,r/t),i=Math.round(e*n),s=Math.round(t*n);return{scale:n,padX:Math.floor((r-i)/2),padY:Math.floor((r-s)/2),resizedWidth:i,resizedHeight:s}}function vg(e,t,r){const{width:n,height:i,channels:s,data:a}=e,o=new Uint8Array(t*r*3),l=n/t,d=i/r;for(let h=0;h<r;h++){const p=(h+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(p))),g=Math.min(i-1,f+1),y=Math.max(0,Math.min(1,p-f));for(let b=0;b<t;b++){const $=(b+.5)*l-.5,w=Math.max(0,Math.min(n-1,Math.floor($))),v=Math.min(n-1,w+1),k=Math.max(0,Math.min(1,$-w)),T=(f*n+w)*s,E=(f*n+v)*s,z=(g*n+w)*s,C=(g*n+v)*s,x=(h*t+b)*3;for(let R=0;R<3;R++){const M=a[T+R]*(1-k)+a[E+R]*k,P=a[z+R]*(1-k)+a[C+R]*k;o[x+R]=Math.min(255,Math.max(0,Math.round(M*(1-y)+P*y)))}}}return o}function xg(e,t){const r=$g(e.width,e.height,t),n=vg(e,r.resizedWidth,r.resizedHeight),i=t*t,s=new Float32Array(3*i).fill(wg/255);for(let a=0;a<r.resizedHeight;a++){const o=(a+r.padY)*t+r.padX,l=a*r.resizedWidth;for(let d=0;d<r.resizedWidth;d++){const h=(l+d)*3,p=o+d;s[p]=n[h]/255,s[i+p]=n[h+1]/255,s[2*i+p]=n[h+2]/255}}return{tensor:s,params:r}}function Sg(e,t,r,n){const i=[],s=Math.floor(e.length/6);for(let a=0;a<s;a++){const o=e[a*6],l=e[a*6+1],d=e[a*6+2],h=e[a*6+3],p=e[a*6+4],f=e[a*6+5];if(p<r)continue;const g=Math.round(f);if(g<0||g>=n)continue;const y=(o-t.padX)/t.scale,b=(l-t.padY)/t.scale,$=(d-t.padX)/t.scale,w=(h-t.padY)/t.scale;i.push({classIndex:g,confidence:p,box:[Math.trunc(y),Math.trunc(b),Math.trunc($-y),Math.trunc(w-b)],boxFloat:[y,b,$-y,w-b]})}return i}function gr(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function Pp(e){if(e.length===0)return Number.NaN;const t=[...e].sort((n,i)=>n-i),r=Math.floor(t.length/2);return t.length%2===1?t[r]:(t[r-1]+t[r])/2}function Lp(e,t){if(e.length===0)return Number.NaN;const r=[...e].sort((a,o)=>a-o),n=t/100*(r.length-1),i=Math.floor(n),s=Math.ceil(n);return i===s?r[i]:r[i]*(s-n)+r[s]*(n-i)}const Tg=.6,kg=.8;function qp(e,t,r){const n=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++){if(e[s*6+4]<r)continue;const o=(e[s*6]-t.padX)/t.scale,l=(e[s*6+1]-t.padY)/t.scale,d=(e[s*6+2]-t.padX)/t.scale,h=(e[s*6+3]-t.padY)/t.scale,p=gr((o+d)/2),f=gr((l+h)/2),g=gr((d-o+(h-l))/4);g>=1&&n.push({cx:p,cy:f,r:g})}return n}function Ig(e){const t=[];for(const r of[...e].sort((n,i)=>n.r-i.r)){const n=(Tg*r.r)**2;t.every(i=>(r.cx-i.cx)**2+(r.cy-i.cy)**2>n)&&t.push(r)}return t}function Eg(e){const t=[];for(const r of[...e].sort((n,i)=>i.r-n.r))t.every(n=>Math.hypot(r.cx-n.cx,r.cy-n.cy)>=kg*(r.r+n.r))&&t.push(r);return t}function zg(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(Pp(e.map(r=>r.r))*1.5));return[...e].sort((r,n)=>{const i=Math.floor(r.cy/t),s=Math.floor(n.cy/t);return i!==s?i-s:r.cx-n.cx})}function Wp(e,t,r){const n=qp(e,t,r);return n.length===0?[]:zg(Eg(Ig(n)))}function Cg(e,t,r){return qp(e,t,r)}function Vp(e,t,r){const n=[],i=Math.floor(e.length/6);for(let s=0;s<i;s++)e[s*6+4]<r||n.push([(e[s*6]-t.padX)/t.scale,(e[s*6+1]-t.padY)/t.scale,(e[s*6+2]-t.padX)/t.scale,(e[s*6+3]-t.padY)/t.scale]);return n}const Gp=["brown","grey","blue","green","yellow","red","purple"],Ag={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function Hp(e,t,r){return Sg(e,t,r,Gp.length).map(n=>{const i=Gp[n.classIndex];return{color:i,family:Ag[i],box:n.box,confidence:n.confidence}})}const ut={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function yr(e,t,r){const n=Math.max(e,t,r),i=Math.min(e,t,r),s=n-i,a=n===0?0:Math.round(255*s/n);if(s===0)return{h:0,s:a,v:n};let o;return n===e?o=60*(t-r)/s:n===t?o=120+60*(r-e)/s:o=240+60*(e-t)/s,o<0&&(o+=360),{h:Math.round(o/2),s:a,v:n}}const Mg=.42,Og=22,Rg=43,Bg=120,Ng=1.5,Dg=.72,Ug=110,Fp=3;function _r(e,t,r){const{width:n,height:i,channels:s,data:a}=e;if(n<4||i<4)return 0;const o=Math.floor(n/2),l=Math.floor(i/2),d=Math.trunc(Math.min(n,i)*Mg);if(d<1)return 0;let h=0;for(let p=0;p<i;p++)for(let f=0;f<n;f++){if((f-o)**2+(p-l)**2>d*d)continue;const g=(p*n+f)*s,y=a[g],b=a[g+1],$=a[g+2];!t&&y>=250&&b>=250&&$>=250||(r(y,b,$),h+=1)}return h}function Pg(e){let t=0,r=0,n=0,i=_r(e,!1,(s,a,o)=>{const l=yr(s,a,o);t+=l.h,r+=l.s,n+=l.v});return i===0&&(i=_r(e,!0,(s,a,o)=>{const l=yr(s,a,o);t+=l.h,r+=l.s,n+=l.v})),i===0?null:{h:t/i,s:r/i,v:n/i}}function Lg(e){let t=0,r=0,n=_r(e,!1,(s,a)=>{t+=s,r+=a});if(n===0&&(n=_r(e,!0,(s,a)=>{t+=s,r+=a})),n===0)return null;const i=r/n;return i<=1e-6?null:t/n/i}function qg(e){let t=0;const r=_r(e,!0,(n,i,s)=>{t+=yr(n,i,s).s});return r===0?null:t/r}function Wg(e){const t=Pg(e);if(t===null||t.s<=Og)return 1;if(t.s>=Bg){const r=Lg(e);return r!==null&&r>=Ng?6:3}return t.s>=Rg?3:6}function Vg(e,t){const r=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(a=>[1,3,6].includes(a)))return r;const n=e.map(a=>a.r).sort((a,o)=>a-o);if(n[0]<=0||!(n[1]>=n[0]*1.12&&n[2]>=n[1]*1.12))return r;const i=[0,1,2].sort((a,o)=>e[a].r-e[o].r),s=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(a=>s.get(a))}function Gg(e,t){const r=[...t];if(e.length<Fp||t.length!==e.length)return r;const n=e.map(a=>qg(a)),i=n.filter(a=>a!==null);if(i.length<Fp)return r;const s=Pp(i);return s<=0||n.forEach((a,o)=>{a!==null&&r[o]!==1&&a<Dg*s&&a<Ug&&(r[o]=1)}),r}function jp(e,t){const{cx:r,cy:n,r:i}=t,s=Math.max(0,r-i),a=Math.max(0,n-i),o=Math.min(e.width,r+i),l=Math.min(e.height,n+i),d=Math.max(0,o-s),h=Math.max(0,l-a),p=new Uint8Array(d*h*3);for(let f=0;f<h;f++)for(let g=0;g<d;g++){const y=(f*d+g)*3;if((g+s-r)**2+(f+a-n)**2<=i*i){const $=((f+a)*e.width+(g+s))*e.channels;p[y]=e.data[$],p[y+1]=e.data[$+1],p[y+2]=e.data[$+2]}else p[y]=255,p[y+1]=255,p[y+2]=255}return{width:d,height:h,channels:3,data:p}}function Hg(e,t){const r=t.map(s=>jp(e,s)),n=r.map(s=>Wg(s)),i=Vg(t,n);return Gg(r,i)}function Fg(e){const{width:t,height:r,channels:n,data:i}=e,s=new Uint8Array(t*r);for(let a=0,o=0;a<s.length;a++,o+=n)s[a]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:r,data:s}}function Kp(e,t,r){const n=new Uint8Array(t*r),i=e.width/t,s=e.height/r;for(let a=0;a<r;a++){const o=a*s,l=Math.min((a+1)*s,e.height);for(let d=0;d<t;d++){const h=d*i,p=Math.min((d+1)*i,e.width);let f=0,g=0;for(let y=Math.floor(o);y<l;y++){const b=Math.min(y+1,l)-Math.max(y,o);if(!(b<=0))for(let $=Math.floor(h);$<p;$++){const w=Math.min($+1,p)-Math.max($,h);w<=0||(f+=e.data[y*e.width+$]*w*b,g+=w*b)}}n[a*t+d]=Math.min(255,Math.max(0,gr(f/g)))}}return{width:t,height:r,data:n}}function jg(e){const t=new Array(256).fill(0);for(const l of e.data)t[l]+=1;const r=e.data.length;let n=0;for(;n<256&&t[n]===0;)n+=1;const i=new Uint8Array(r);if(n>=255||t[n]===r)return i.fill(n<256?n:0),{width:e.width,height:e.height,data:i};const s=255/(r-t[n]),a=new Uint8Array(256);let o=0;for(let l=n+1;l<256;l++)o+=t[l],a[l]=Math.min(255,Math.max(0,gr(o*s)));for(let l=0;l<r;l++)i[l]=a[e.data[l]];return{width:e.width,height:e.height,data:i}}function Kg(e){const{width:t,height:r,data:n}=e,i=new Uint8Array(t*r);for(let s=0;s<r;s++)for(let a=0;a<t;a++){let o=!0;for(let l=-1;l<=1&&o;l++)for(let d=-1;d<=1;d++){const h=a+d,p=s+l;if(!(h<0||h>=t||p<0||p>=r)&&n[p*t+h]===0){o=!1;break}}i[s*t+a]=o&&n[s*t+a]>0?255:0}return{width:t,height:r,data:i}}function Xg(e){const{width:t,height:r,data:n}=e,i=new Uint8Array(t*r);for(let s=0;s<r;s++)for(let a=0;a<t;a++){let o=!1;for(let l=-1;l<=1&&!o;l++)for(let d=-1;d<=1;d++){const h=a+d,p=s+l;if(h>=0&&h<t&&p>=0&&p<r&&n[p*t+h]>0){o=!0;break}}i[s*t+a]=o?255:0}return{width:t,height:r,data:i}}function Zi(e){const{width:t,height:r,data:n}=e,i=new Int32Array(t*r),s=[],a=new Int32Array(t*r);let o=1;for(let l=0;l<n.length;l++){if(n[l]===0||i[l]!==0)continue;let d=0,h=0;a[h++]=l,i[l]=o;let p=0,f=0,g=0;for(;d<h;){const y=a[d++],b=y%t,$=y/t|0;p+=1,f+=b,g+=$;for(let w=-1;w<=1;w++)for(let v=-1;v<=1;v++){if(v===0&&w===0)continue;const k=b+v,T=$+w;if(k<0||k>=t||T<0||T>=r)continue;const E=T*t+k;n[E]>0&&i[E]===0&&(i[E]=o,a[h++]=E)}}s[o]={area:p,centroidX:f/p,centroidY:g/p},o+=1}return{labels:i,stats:s}}function Zg(e,t,r){return Xp(Float32Array.from(e.data),e.width,t,r)}function Xp(e,t,r,n){const i=new Float32Array(t*t),s=t/2,a=-r*Math.PI/180,o=Math.cos(a),l=Math.sin(a);for(let d=0;d<t;d++)for(let h=0;h<t;h++){const p=h-s,f=d-s,g=o*p-l*f+s,y=l*p+o*f+s,b=Math.floor(g),$=Math.floor(y),w=g-b,v=y-$,k=(z,C)=>z>=0&&z<t&&C>=0&&C<t?e[C*t+z]:n,T=k(b,$)*(1-w)+k(b+1,$)*w,E=k(b,$+1)*(1-w)+k(b+1,$+1)*w;i[d*t+h]=T*(1-v)+E*v}return i}const Yg=.9,Qg=.34,Jg=[.55,.6,.66,.72],e0=22,t0=88,r0=35,Zt=28,Yi=4,n0=Array.from({length:15},(e,t)=>-21+t*3),Zp=[-2,0,2],i0=3,a0=.3;function s0(e){return e.templates.flatMap(({label:t,bits:r})=>{const n=Uint8Array.from(atob(r),i=>i.charCodeAt(0));return n.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(n)}]})}function o0(e){let t=e.width,r=-1,n=e.height,i=-1,s=0;for(let b=0;b<e.height;b++)for(let $=0;$<e.width;$++)e.data[b*e.width+$]>0&&(s+=1,t=Math.min(t,$),r=Math.max(r,$),n=Math.min(n,b),i=Math.max(i,b));if(s<8)return null;const a=r-t+1,o=i-n+1,l=Math.max(o,a),d=new Uint8Array(l*l),h=Math.floor((l-a)/2),p=Math.floor((l-o)/2);for(let b=0;b<o;b++)for(let $=0;$<a;$++)d[(b+p)*l+($+h)]=e.data[(b+n)*e.width+($+t)];const f=Zt-2*Yi,g=Kp({width:l,height:l,data:d},f,f),y=new Float32Array(Zt*Zt);for(let b=0;b<f;b++)for(let $=0;$<f;$++)y[(b+Yi)*Zt+($+Yi)]=g.data[b*f+$]>110?1:0;return y}function u0(e,t){const{width:r,height:n,channels:i,data:s}=e,a=Math.floor(n/2),o=Math.floor(r/2),l=Math.trunc(Math.min(r,n)*Qg);if(l<4)return null;const d=a-l,h=o-l,p=2*l,f=2*l;if(p<6||f<6)return null;const g=new Int16Array(p*f),y=new Int16Array(p*f),b=new Int16Array(p*f),$=new Uint8Array(p*f),w=[],v=Math.min(p,f)/2;for(let U=0;U<p;U++)for(let te=0;te<f;te++){const L=((U+d)*r+(te+h))*i,{h:H,s:Z,v:W}=yr(s[L],s[L+1],s[L+2]),pe=U*f+te;g[pe]=H,y[pe]=Z,b[pe]=W,Math.sqrt((te-f/2)**2+(U-p/2)**2)/v<=t&&($[pe]=1,w.push(W))}if(w.length<16)return null;const k=Lp(w,55);let T=0,E=0,z=0;const C=U=>g[U]>=e0&&g[U]<=t0&&y[U]>=r0,x=U=>b[U]>=k&&y[U]<=95&&!C(U)&&$[U]===1;for(let U=0;U<p*f;U++)$[U]===1&&(z+=1,b[U]>=130&&!C(U)&&(T+=1),x(U)&&(E+=1));const R=T>.5*z&&E<.15*z,M=new Uint8Array(p*f);if(R){const U=Lp(w,45);for(let te=0;te<p*f;te++)M[te]=$[te]===1&&b[te]<=U?255:0}else for(let U=0;U<p*f;U++)M[U]=x(U)?255:0;const P={width:f,height:p,data:M},V=Kg(P);let F=Zi(V),O=F;if(F.stats.length<=1&&(F=Zi(P),O=F,F.stats.length<=1))return null;const X=Math.min(p,f)/2;let j=0,Y=-1;for(let U=1;U<O.stats.length;U++){const te=O.stats[U];if(te===void 0)continue;const L=Math.hypot(te.centroidX-f/2,te.centroidY-p/2)/X,H=te.area*(1-.6*Math.min(L,1));H>Y&&(Y=H,j=U)}if(j===0)return null;const de=new Uint8Array(p*f);for(let U=0;U<p*f;U++)de[U]=O.labels[U]===j?255:0;return o0(Xg({width:f,height:p,data:de}))}function l0(e,t,r,n,i,s){const a=Zt;let o=0,l=0;for(let d=0;d<a;d++){const h=d-s;if(!(h<0||h>=a))for(let p=0;p<a;p++){const f=p-i;if(f<0||f>=a)continue;const g=e[h*a+f];g!==0&&(l+=g,o+=g*r[d*a+p])}}return o/(l+n-o+1e-6)}function d0(e,t){const r=t.reduce((i,s)=>i+s,0);let n=-1;for(const i of n0){const s=i===0?e:Xp(e,Zt,i,0),a=s.reduce((o,l)=>o+l,0);for(const o of Zp)for(const l of Zp){const d=l0(s,a,t,r,o,l);d>n&&(n=d)}}return n}function c0(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const r=[];for(const a of Jg){const o=u0(e,a);if(o!==null)for(const{label:l,bits:d}of t)r.push([d0(o,d),l])}if(r.length===0)return[null,0];if(r.sort((a,o)=>o[0]-a[0]),r[0][0]<a0)return[null,0];const n=new Map;for(const[a,o]of r.slice(0,i0))n.set(o,(n.get(o)??0)+a);let i=0,s=-1;for(const[a,o]of n)o>s&&(s=o,i=a);return[i,r[0][0]]}const lt=48,p0=320;function h0(e){return["blank",...e.characters," "]}function f0(e,t,r){let n="";const i=[];for(let a=0;a<e.length;a++){const o=e[a];o!==0&&(a>0&&e[a-1]===o||(n+=r[o]??"",i.push(t[a])))}if(i.length===0)return["",0];const s=i.reduce((a,o)=>a+o,0)/i.length;return[n,s]}function m0(e,t){const r=Math.trunc(lt*t),n=e.width/e.height,i=Math.ceil(lt*n)>r?r:Math.ceil(lt*n),s=new Float32Array(3*lt*r),a=lt*r,o=e.width/i,l=e.height/lt;for(let d=0;d<lt;d++){const h=(d+.5)*l-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(h))),f=Math.min(e.height-1,p+1),g=Math.max(0,Math.min(1,h-p));for(let y=0;y<i;y++){const b=(y+.5)*o-.5,$=Math.max(0,Math.min(e.width-1,Math.floor(b))),w=Math.min(e.width-1,$+1),v=Math.max(0,Math.min(1,b-$));for(let k=0;k<3;k++){const T=2-k,E=(p*e.width+$)*e.channels+T,z=(p*e.width+w)*e.channels+T,C=(f*e.width+$)*e.channels+T,x=(f*e.width+w)*e.channels+T,R=e.data[E]*(1-v)+e.data[z]*v,M=e.data[C]*(1-v)+e.data[x]*v,P=R*(1-g)+M*g;s[k*a+d*r+y]=(P/255-.5)/.5}}}return{tensor:s,width:r}}const g0=62,y0=8,_0=5;function Qi(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function b0(e,t){const r=e.length,n=t.length;if(r===0||n===0)return 0;let i=new Int32Array(n+1),s=new Int32Array(n+1);for(let a=1;a<=r;a++){for(let o=1;o<=n;o++)s[o]=e[a-1]===t[o-1]?i[o-1]+1:Math.max(i[o],s[o-1]);[i,s]=[s,i]}return i[n]}function Kr(e,t){return e.length===0&&t.length===0?100:200*b0(e,t)/(e.length+t.length)}function Yp(e,t){const r=n=>n.split(/\s+/).filter(Boolean).sort().join(" ");return Kr(r(e),r(t))}function w0(e,t){const r=new Set(e.split(/\s+/).filter(Boolean)),n=new Set(t.split(/\s+/).filter(Boolean)),i=[...r].filter(h=>n.has(h)).sort(),s=[...r].filter(h=>!n.has(h)).sort(),a=[...n].filter(h=>!r.has(h)).sort(),o=i.join(" "),l=[o,s.join(" ")].filter(Boolean).join(" "),d=[o,a.join(" ")].filter(Boolean).join(" ");return o.length>0&&(s.length===0||a.length===0)?100:Math.max(Kr(o,l),Kr(o,d),Kr(l,d))}function $0(e){const t=new Set,r=[];for(const n of e){const i=n.nameFr??n.name;for(const s of[Qi(i),Qi(n.name)])if(s)for(const a of[s,s.replace(/ /g,"")])a&&!t.has(a)&&(t.add(a),r.push({key:a,id:n.id,display:i,...n.kind!==void 0?{kind:n.kind}:{}}))}return r}function v0(e,t){const r=Qi(e);if(!r||t.length===0)return null;const i=$0(t).map(h=>({...h,score:w0(r,h.key)})).sort((h,p)=>p.score-h.score).slice(0,y0).filter(h=>h.score>=g0);if(i.length===0)return null;const s=i[0].score,a=i.filter(h=>s-h.score<=_0),o=[...new Set(r.split(/\s+/).filter(Boolean))].join(" ");let l=a[0],d=[Yp(o,l.key),l.score];for(const h of a.slice(1)){const p=[Yp(o,h.key),h.score];(p[0]>d[0]||p[0]===d[0]&&p[1]>d[1])&&(l=h,d=p)}return{id:l.id,name:l.display,...l.kind!==void 0?{kind:l.kind}:{},confidence:Math.round(l.score/100*1e4)/1e4}}const x0=2560,S0=.3,T0=.5,k0=1.6,I0=3,E0=5;function z0(e){const t=Math.min(1,x0/Math.max(e.width,e.height)),r=Math.max(32,Math.round(e.width*t/32)*32),n=Math.max(32,Math.round(e.height*t/32)*32),i=r*n,s=new Float32Array(3*i),a=e.width/r,o=e.height/n;for(let l=0;l<n;l++){const d=(l+.5)*o-.5,h=Math.max(0,Math.min(e.height-1,Math.floor(d))),p=Math.min(e.height-1,h+1),f=Math.max(0,Math.min(1,d-h));for(let g=0;g<r;g++){const y=(g+.5)*a-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(y))),$=Math.min(e.width-1,b+1),w=Math.max(0,Math.min(1,y-b));for(let v=0;v<3;v++){const k=2-v,T=(h*e.width+b)*e.channels+k,E=(h*e.width+$)*e.channels+k,z=(p*e.width+b)*e.channels+k,C=(p*e.width+$)*e.channels+k,x=e.data[T]*(1-w)+e.data[E]*w,R=e.data[z]*(1-w)+e.data[C]*w,M=x*(1-f)+R*f;s[v*i+l*r+g]=(M/255-.5)/.5}}}return{tensor:s,width:r,height:n}}function C0(e,t,r){const n=new Uint8Array(e.length);for(let i=0;i<r;i++){const s=i===r-1;for(let a=0;a<t;a++){const o=i*t+a;let l=e[o];if(a+1<t&&e[o+1]>l&&(l=e[o+1]),!s){const d=o+t;e[d]>l&&(l=e[d]),a+1<t&&e[d+1]>l&&(l=e[d+1])}n[o]=l}}return n}function A0(e){if(e.length<3)return e;const t=[...e].sort((s,a)=>s[0]-a[0]||s[1]-a[1]),r=(s,a,o)=>(a[0]-s[0])*(o[1]-s[1])-(a[1]-s[1])*(o[0]-s[0]),n=[];for(const s of t){for(;n.length>=2&&r(n[n.length-2],n[n.length-1],s)<=0;)n.pop();n.push(s)}const i=[];for(let s=t.length-1;s>=0;s--){const a=t[s];for(;i.length>=2&&r(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}return n.pop(),i.pop(),n.concat(i)}function M0(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,r=1/0;for(let n=0;n<e.length;n++){const[i,s]=e[n],[a,o]=e[(n+1)%e.length],l=a-i,d=o-s,h=Math.hypot(l,d);if(h===0)continue;const p=l/h,f=d/h;let g=1/0,y=-1/0,b=1/0,$=-1/0;for(const[T,E]of e){const z=T*p+E*f,C=-T*f+E*p;z<g&&(g=z),z>y&&(y=z),C<b&&(b=C),C>$&&($=C)}const w=y-g,v=$-b,k=w*v;if(k<r){r=k;const T=(g+y)/2,E=(b+$)/2;t={cx:T*p-E*f,cy:T*f+E*p,w,h:v,angle:Math.atan2(f,p)}}}return t}function O0(e,t,r,n){const i=Math.cos(n.angle),s=Math.sin(n.angle),a=n.w/2,o=n.h/2,l=Math.abs(a*i)+Math.abs(o*s),d=Math.abs(a*s)+Math.abs(o*i),h=Math.max(0,Math.floor(n.cx-l)),p=Math.min(t-1,Math.ceil(n.cx+l)),f=Math.max(0,Math.floor(n.cy-d)),g=Math.min(r-1,Math.ceil(n.cy+d));let y=0,b=0;for(let $=f;$<=g;$++)for(let w=h;w<=p;w++){const v=w-n.cx,k=$-n.cy,T=v*i+k*s,E=-v*s+k*i;Math.abs(T)<=a&&Math.abs(E)<=o&&(y+=e[$*t+w],b+=1)}return b===0?0:y/b}function R0(e){const t=Math.cos(e.angle),r=Math.sin(e.angle),n=e.w/2,i=e.h/2,a=[...[[e.cx+-n*t- -i*r,e.cy+-n*r+-i*t],[e.cx+n*t- -i*r,e.cy+n*r+-i*t],[e.cx+n*t-i*r,e.cy+n*r+i*t],[e.cx+-n*t-i*r,e.cy+-n*r+i*t]]].sort((b,$)=>b[0]-$[0]),[o,l,d,h]=a,[p,f]=o[1]<=l[1]?[o,l]:[l,o],[g,y]=d[1]<=h[1]?[d,h]:[h,d];return[[p[0],p[1]],[g[0],g[1]],[y[0],y[1]],[f[0],f[1]]]}function B0(e,t,r,n){const{width:i,height:s}=t;let a=new Uint8Array(i*s);for(let g=0;g<a.length;g++)a[g]=e[g]>S0?255:0;a=C0(a,i,s);const o={width:i,height:s,data:a},{labels:l}=Zi(o),d=new Map;for(let g=0;g<s;g++)for(let y=0;y<i;y++){const b=l[g*i+y];if(b===0)continue;let $=d.get(b);$===void 0&&($=new Map,d.set(b,$));const w=$.get(g);w===void 0?$.set(g,[y,y]):(y<w[0]&&(w[0]=y),y>w[1]&&(w[1]=y))}const h=r/i,p=n/s,f=[];for(const[g,y]of d){const b=[];for(const[M,[P,V]]of y)b.push([P-.5,M-.5],[P-.5,M+.5],[V+.5,M-.5],[V+.5,M+.5]);const $=M0(A0(b));if(Math.min($.w,$.h)<I0)continue;const w=O0(e,i,s,$);if(w<T0)continue;const v=$.w*$.h*k0/(2*($.w+$.h)),k={...$,w:$.w+2*v,h:$.h+2*v};if(Math.min(k.w,k.h)<E0+2)continue;const E=R0(k).map(([M,P])=>[Math.min(r,Math.max(0,Math.round(M*h))),Math.min(n,Math.max(0,Math.round(P*p)))]),z=E.map(M=>M[0]),C=E.map(M=>M[1]),x=Math.min(...z),R=Math.min(...C);f.push({quad:E,x,y:R,width:Math.max(...z)-x,height:Math.max(...C)-R,score:w})}return f.sort((g,y)=>y.score-g.score)}function N0(e,t){const[r,n,i,s]=t,a=Math.max(1,Math.round(Math.max(Math.hypot(n[0]-r[0],n[1]-r[1]),Math.hypot(i[0]-s[0],i[1]-s[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(s[0]-r[0],s[1]-r[1]),Math.hypot(i[0]-n[0],i[1]-n[1])))),l=D0([[0,0],[a,0],[a,o],[0,o]],[r,n,i,s]),d=new Uint8Array(a*o*e.channels);for(let p=0;p<o;p++)for(let f=0;f<a;f++){const g=l[6]*f+l[7]*p+l[8],y=(l[0]*f+l[1]*p+l[2])/g,b=(l[3]*f+l[4]*p+l[5])/g,$=Math.floor(y),w=Math.floor(b),v=y-$,k=b-w,T=Math.max(0,Math.min(e.width-1,$)),E=Math.max(0,Math.min(e.width-1,$+1)),z=Math.max(0,Math.min(e.height-1,w)),C=Math.max(0,Math.min(e.height-1,w+1));for(let x=0;x<e.channels;x++){const R=e.data[(z*e.width+T)*e.channels+x],M=e.data[(z*e.width+E)*e.channels+x],P=e.data[(C*e.width+T)*e.channels+x],V=e.data[(C*e.width+E)*e.channels+x],F=R*(1-v)+M*v,O=P*(1-v)+V*v;d[(p*a+f)*e.channels+x]=Math.round(F*(1-k)+O*k)}}const h={width:a,height:o,channels:e.channels,data:d};return o/a>=1.5?Qp(h,3):h}function D0(e,t){const r=[],n=[];for(let i=0;i<4;i++){const[s,a]=e[i],[o,l]=t[i];r.push([s,a,1,0,0,0,-o*s,-o*a]),n.push(o),r.push([0,0,0,s,a,1,-l*s,-l*a]),n.push(l)}for(let i=0;i<8;i++){let s=i;for(let o=i+1;o<8;o++)Math.abs(r[o][i])>Math.abs(r[s][i])&&(s=o);[r[i],r[s]]=[r[s],r[i]],[n[i],n[s]]=[n[s],n[i]];const a=r[i][i];for(let o=i;o<8;o++)r[i][o]/=a;n[i]/=a;for(let o=0;o<8;o++){if(o===i)continue;const l=r[o][i];if(l!==0){for(let d=i;d<8;d++)r[o][d]-=l*r[i][d];n[o]-=l*n[i]}}}return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],1]}function Qp(e,t){const r=(t%4+4)%4;if(r===0)return e;const{width:n,height:i,channels:s,data:a}=e,o=r%2===0?n:i,l=r%2===0?i:n,d=new Uint8Array(o*l*s);for(let h=0;h<i;h++)for(let p=0;p<n;p++){let f,g;r===1?(f=i-1-h,g=p):r===2?(f=n-1-p,g=i-1-h):(f=h,g=n-1-p);const y=(h*n+p)*s,b=(g*o+f)*s;for(let $=0;$<s;$++)d[b+$]=a[y+$]}return{width:o,height:l,channels:s,data:d}}const Jp=128,U0=.56,P0=15,L0=.58,q0=70,W0=50,V0=.12,G0=.2,H0=.1,F0=.17,eh=.15;function j0(e){const t=new Map;for(const[r,n]of Object.entries(e.templates)){const i=Uint8Array.from(atob(n),s=>s.charCodeAt(0));i.length===e.size*e.size&&t.set(r,i)}return t}function th(e,t){const{width:r,height:n,channels:i,data:s}=e,a=Math.floor(r/2),o=Math.floor(n/2),l=Math.trunc(Math.min(r,n)*.5*t);if(l<1)return e;const d=Math.max(0,a-l),h=Math.max(0,o-l),p=Math.min(r,a+l),f=Math.min(n,o+l),g=p-d,y=f-h,b=new Uint8Array(g*y*i);for(let $=0;$<y;$++){const w=(($+h)*r+d)*i;b.set(s.subarray(w,w+g*i),$*g*i)}return{width:g,height:y,channels:i,data:b}}function K0(e){const t=th(e,U0),r=Fg(t),n=Kp(r,Jp,Jp);return jg(n)}function X0(e,t){const r=e.length;let n=0,i=0;for(let l=0;l<r;l++)n+=e[l],i+=t[l];n/=r,i/=r;let s=0,a=0,o=0;for(let l=0;l<r;l++){const d=e[l]-n,h=t[l]-i;s+=d*h,a+=d*d,o+=h*h}return s/(Math.sqrt(a*o)+1e-6)}function Z0(e){const t=new Map([["masonry",0],["strategy",0]]),r=th(e,L0),{width:n,height:i,channels:s,data:a}=r,o=n*i||1;let l=0,d=0;for(let f=0;f<n*i;f++){const g=f*s,{h:y,s:b,v:$}=yr(a[g],a[g+1],a[g+2]);b>=q0&&$>=W0&&(y>=95&&y<=130&&(l+=1),(y<=8||y>=170)&&(d+=1))}const h=l/o,p=d/o;return h>=V0&&t.set("masonry",eh*Math.min(1,h/G0)),p>=H0&&t.set("strategy",eh*Math.min(1,p/F0)),t}function Y0(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const r=K0(e);let n=0;for(const d of r.data)n+=d;const i=n/r.data.length,s=[];for(let d=0;d<360;d+=P0)s.push(Zg(r,d,i));const a=new Map;for(const[d,h]of t){let p=-1/0;for(const f of s){const g=X0(f,h);g>p&&(p=g)}a.set(d,p)}for(const[d,h]of Z0(e))h>0&&a.has(d)&&a.set(d,a.get(d)+h);let o="",l=-1/0;for(const[d,h]of a)h>l&&(o=d,l=h);return[o,l]}const Ut="/7wd-scorer/models/";let rh=!1;const Xr=new Map;function nh(){var e;rh||(_e.wasm.wasmPaths="/7wd-scorer/ort/",_e.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,rh=!0)}const Ji=new Set;function Q0(e){nh();let t=Xr.get(e);return t===void 0&&(t=rr.create(`${Ut}${ut[e].onnx}`,{executionProviders:Ji.has(e)?["wasm"]:["webgpu","wasm"]}),Xr.set(e,t),t.catch(()=>Xr.delete(e))),t}let ea=null,ta=null;const J0=.75,ey=4,ty=.6,ry=12,ny=45e3;let ra=null;function iy(){return ra===null&&(nh(),ra=(async()=>{try{const[e,t,r,n]=await Promise.all([rr.create(`${Ut}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),rr.create(`${Ut}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Ut}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Ut}wonder_names.json`).then(i=>i.ok?i.json():null)]);return r===null||n===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:h0(r),catalog:n.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),ra}async function ay(e,t){const r=Math.max(p0/lt,t.width/t.height),{tensor:n,width:i}=m0(t,r),s={[e.rec.inputNames[0]]:new Ne("float32",n,[1,3,lt,i])},a=(await e.rec.run(s))[e.rec.outputNames[0]],[o,l,d]=a.dims,h=a.data,p=new Array(l),f=new Array(l);for(let g=0;g<l;g++){let y=0,b=-1/0;const $=g*d;for(let w=0;w<d;w++){const v=h[$+w];v>b&&(b=v,y=w)}p[g]=y,f[g]=b}return f0(p,f,e.charset)}async function sy(e,t){const r=await iy();if(r===null)return{wonders:[],aborted:!1};const n=new Map,i=Date.now()+ny;let s=!1;e:for(const a of[0,1,2,3]){if(Date.now()>i){s=!0;break}t(`wonder names: rotation ${a*90}°…`);const o=Qp(e,a),l=z0(o),d={[r.det.inputNames[0]]:new Ne("float32",l.tensor,[1,3,l.height,l.width])},h=(await r.det.run(d))[r.det.outputNames[0]],p=B0(h.data,l,o.width,o.height).slice(0,ry);console.debug(`[wonders-ocr] rot ${a*90}: ${p.length} det boxes`,p.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of p){if(Date.now()>i){s=!0;break e}const g=N0(o,f.quad);if(g.width<g.height*1.5)continue;const[y,b]=await ay(r,g);if(console.debug(`[wonders-ocr] rec "${y}" @${b.toFixed(2)}`),b<ty||y.trim().length<ey)continue;const $=v0(y,r.catalog);if(console.debug("[wonders-ocr] fuzzy",$),$===null||$.confidence<J0||$.kind!=="wonder")continue;const w=n.get($.id);(w===void 0||$.confidence>w.confidence)&&n.set($.id,{id:$.id,name:$.name,confidence:$.confidence})}}return{wonders:[...n.values()],aborted:s}}function oy(){return ta===null&&(ta=fetch(`${Ut}laurel_gallery.json`).then(async e=>e.ok?s0(await e.json()):[]).catch(()=>[])),ta}function uy(e,t,r,n){return ly(e,t-n,r-n,2*n,2*n)}function ly(e,t,r,n,i){const s=Math.max(0,Math.round(t)),a=Math.max(0,Math.round(r)),o=Math.min(e.width,Math.round(t+n)),l=Math.min(e.height,Math.round(r+i)),d=Math.max(0,o-s),h=Math.max(0,l-a),p=new Uint8Array(d*h*3);for(let f=0;f<h;f++)for(let g=0;g<d;g++){const y=((f+a)*e.width+(g+s))*e.channels,b=(f*d+g)*3;p[b]=e.data[y],p[b+1]=e.data[y+1],p[b+2]=e.data[y+2]}return{width:d,height:h,channels:3,data:p}}function dy(){return ea===null&&(ea=fetch(`${Ut}token_templates.json`).then(async e=>e.ok?j0(await e.json()):new Map).catch(()=>new Map)),ea}async function ih(e){const t=await createImageBitmap(e);try{const n=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(n===null)throw new Error("OffscreenCanvas 2D context unavailable.");n.drawImage(t,0,0);const{data:i}=n.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Pt(e,t){const r=ut[e],{tensor:n,params:i}=xg(t,r.input),s=async()=>{const a=await Q0(e),o={[a.inputNames[0]]:new Ne("float32",n,[1,3,r.input,r.input])};return{rows:(await a.run(o))[a.outputNames[0]].data,params:i}};try{return await s()}catch(a){if(Ji.has(e))throw a;return Ji.add(e),Xr.delete(e),await s()}}const cy=6,py=2,hy=5,fy=2;async function my(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},r=await ih(e),n=await Pt("banner",r),i=Hp(n.rows,n.params,ut.banner.conf);if(t.banners=i.length,i.length>=cy)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const s=await Pt("laurel",r),a=Vp(s.rows,s.params,ut.laurel.conf);if(t.laurels=a.length,a.length>=py)return{...t,kind:"player",confidence:Math.min(1,a.length/8)};const o=await Pt("coin",r),l=Wp(o.rows,o.params,ut.coin.conf);return t.coins=l.length,l.length>=hy?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=fy?{...t,kind:"board",confidence:.4}:t}function gy(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function yy(e,t,r,n){const i={},s=[],a=[],o=[],l=[];let d=0,h=0,p=0,f=0;for(const y of e){f+=1;const b=`${t} photo ${f}/${e.length}`;n(`${b}: reading pixels…`);const $=await ih(y);n(`${b}: card banners…`);const w=await Pt("banner",$);for(const M of Hp(w.rows,w.params,ut.banner.conf))i[M.family]=(i[M.family]??0)+1,p+=1;n(`${b}: laurels…`);const v=await Pt("laurel",$),k=await oy();for(const[M,P,V,F]of Vp(v.rows,v.params,ut.laurel.conf)){const O=Math.trunc((M+V)/2),X=Math.trunc((P+F)/2),j=Math.max(6,Math.trunc(Math.max(V-M,F-P)*Yg)),[Y,de]=c0(uy($,O,X,j),k);s.push({value:Y,valueRead:Y!==null,center:[Math.round((M+V)/2),Math.round((P+F)/2)],boundingBox:{x:Math.trunc(M),y:Math.trunc(P),width:Math.trunc(V-M),height:Math.trunc(F-P)},confidence:Math.round(de*1e4)/1e4,excluded:!1,photoIndex:f-1})}n(`${b}: progress tokens…`);const T=await Pt("token",$),E=await dy();for(const M of Cg(T.rows,T.params,ut.token.conf)){const[P,V]=Y0(jp($,M),E);P!==""?o.push({id:P,center:[M.cx,M.cy],radius:M.r,confidence:Math.round(V*1e4)/1e4}):h+=1}n(`${b}: wonder names…`);const z=await sy($,M=>n(`${b}: ${M}`));for(const M of z.wonders)l.some(P=>P.id===M.id)||l.push({id:M.id,name:M.name,builtWithCardUnderneath:!0,boundingBox:{x:0,y:0,width:0,height:0},confidence:M.confidence});z.aborted&&r.push({code:"LOW_CONFIDENCE",message:`${b}: the wonder-name read ran out of its time budget on this device — ${z.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),n(`${b}: coins…`);const C=await Pt("coin",$),x=Wp(C.rows,C.params,ut.coin.conf),R=Hg($,x);x.forEach((M,P)=>{const V=R[P];d+=V,a.push({denomination:V,center:[M.cx,M.cy],radius:M.r,denomSource:"colour"})})}p>0&&r.push({code:"OVERLAPPING_OBJECTS",message:`${t}: on-device counts cannot yet exclude cards tucked under wonders — verify the per-colour counts.`}),l.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by their printed name: `+l.map(y=>y.name).join(", ")+" — the BUILT flag is a suggestion (the card-underneath check is server-only): unselect any wonder that was not built."}),r.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: on-device mode — ${l.length>0?"guilds are":"wonders and guilds are"} not identified yet: pick them in the review below.`+(h>0?` ${h} token disc(s) found but not identified — pick them too.`:"")}),o.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+o.map(y=>y.id).join(", ")+" — confirm in the review."}),a.length>0&&r.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${d} from ${a.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const g=s.filter(y=>y.valueRead);return{...gy(),wonders:l,progressTokens:o,laurels:s,cardVictoryPoints:{value:g.reduce((y,b)=>y+(b.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-g.length,complete:s.length===g.length},cardCounts:{byFamily:i,source:p>0?"yolo":"none",tuckedExcluded:0},coins:{total:d,confidence:a.length>0?.5:0,source:a.length>0?"local-colour":"none",coins:a}}}async function _y(e,t){const r=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],n={left:null,right:null};for(const i of["left","right"]){const s=e[i];s.length>0&&(n[i]=await yy(s,i,r,t))}return e.hasBoard&&r.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:n,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:r}}self.onmessage=e=>{const{id:t,kind:r}=e.data,n=i=>{self.postMessage({id:t,progress:i})};(async()=>{try{const i=r==="classify"?await my(e.data.file):await _y(e.data.payload,n);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
