var G1=Object.defineProperty;var W1=(_t,wt,tn)=>wt in _t?G1(_t,wt,{enumerable:!0,configurable:!0,writable:!0,value:tn}):_t[wt]=tn;var qm=(_t,wt,tn)=>W1(_t,typeof wt!="symbol"?wt+"":wt,tn);(function(){"use strict";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var _t=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyNames,Vm=Object.prototype.hasOwnProperty,Fm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Y=(e,t)=>()=>(e&&(t=e(e=0)),t),nn=(e,t)=>{for(var n in t)_t(e,n,{get:t[n],enumerable:!0})},Hm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of tn(t))!Vm.call(e,i)&&i!==n&&_t(e,i,{get:()=>t[i],enumerable:!(r=wt(t,i))||r.enumerable});return e},hn=e=>Hm(_t({},"__esModule",{value:!0}),e),fn,Et,rn,Fa,Ha,ja=Y(()=>{fn=new Map,Et=[],rn=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=fn.get(e);if(r===void 0)fn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let i=Et.indexOf(e);i!==-1&&Et.splice(i,1);for(let a=0;a<Et.length;a++)if(fn.get(Et[a]).priority<=n){Et.splice(a,0,e);return}Et.push(e)}return}throw new TypeError("not a valid backend")},Fa=async e=>{let t=fn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return n||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ha=async e=>{let t=e.executionProviders||[],n=t.map(u=>typeof u=="string"?u:u.name),r=n.length===0?Et:n,i,a=[],s=new Set;for(let u of r){let d=await Fa(u);typeof d=="string"?a.push({name:u,err:d}):(i||(i=d),i===d&&s.add(u))}if(!i)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)n.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[i,new Proxy(e,{get:(u,d)=>d==="executionProviders"?o:Reflect.get(u,d)})]}}),jm=Y(()=>{ja()}),Ka,Km=Y(()=>{Ka="1.27.0"}),Ir,Pe,Xa=Y(()=>{Km(),Ir="warning",Pe={wasm:{},webgl:{},webgpu:{},versions:{common:Ka},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ir=e}},get logLevel(){return Ir}},Object.defineProperty(Pe,"logLevel",{enumerable:!0})}),Ee,Xm=Y(()=>{Xa(),Ee=Pe}),Ya,Za,Ym=Y(()=>{Ya=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext("2d");if(r!=null){let i,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,d;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*i,c=0,f=p,m=p*2,g=-1;s==="RGBA"?(c=0,f=p,m=p*2,g=p*3):s==="RGB"?(c=0,f=p,m=p*2):s==="RBG"&&(c=0,m=p,f=p*2);for(let _=0;_<a;_++)for(let b=0;b<i;b++){let x=(e.data[c++]-d[0])*u[0],$=(e.data[f++]-d[1])*u[1],T=(e.data[m++]-d[2])*u[2],S=g===-1?255:(e.data[g++]-d[3])*u[3];r.fillStyle="rgba("+x+","+$+","+T+","+S+")",r.fillRect(b,_,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Za=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(n!=null){let i,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],a=e.dims[1],s=e.dims[3]):(i=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let c=a*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,m=0,g=1,_=2,b=3,x=0,$=c,T=c*2,S=-1;o==="RGBA"?(x=0,$=c,T=c*2,S=c*3):o==="RGB"?(x=0,$=c,T=c*2):o==="RBG"&&(x=0,T=c,$=c*2),r=n.createImageData(i,a);for(let E=0;E<a*i;m+=f,g+=f,_+=f,b+=f,E++)r.data[m]=(e.data[x++]-p[0])*d[0],r.data[g]=(e.data[$++]-p[1])*d[1],r.data[_]=(e.data[T++]-p[2])*d[2],r.data[b]=S===-1?255:(e.data[S++]-p[3])*d[3]}else throw new Error("Can not access image data");return r}}),Un,Qa,Ja,es,ts,ns,Zm=Y(()=>{Er(),Un=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,s;typeof i.mean=="number"?a=[i.mean,i.mean,i.mean,i.mean]:a=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=n*r,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),c=4,f=0,m=1,g=2,_=3,b=0,x=d,$=d*2,T=-1;o==="RGB"&&(c=3,f=0,m=1,g=2,_=-1),u==="RGBA"?T=d*3:u==="RBG"?(b=0,$=d,x=d*2):u==="BGR"&&($=0,x=d,b=d*2);for(let S=0;S<d;S++,f+=c,g+=c,m+=c,_+=c)p[b++]=(e[f]+s[0])/a[0],p[x++]=(e[m]+s[1])/a[1],p[$++]=(e[g]+s[2])/a[2],T!==-1&&_!==-1&&(p[T++]=(e[_]+s[3])/a[3]);return u==="RGBA"?new je("float32",p,[1,4,n,r]):new je("float32",p,[1,3,n,r])},Qa=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(n){let p=u();p.width=e.width,p.height=e.height;let c=d(p);if(c!=null){let f=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=m}else o.tensorFormat="RGBA",o.height=f,o.width=m;c.drawImage(e,0,0),s=c.getImageData(0,0,m,f).data}else throw new Error("Can not access image data")}else if(r){let p,c;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,c=t.resizedWidth):(p=e.height,c=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=c,t!==void 0){let f=u();f.width=c,f.height=p;let m=d(f);if(m!=null)m.putImageData(e,0,0),s=m.getImageData(0,0,c,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let c=d(p);if(c!=null){let f=e.height,m=e.width;return c.drawImage(e,0,0,m,f),s=c.getImageData(0,0,m,f).data,o.height=f,o.width=m,Un(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,c)=>{let f=u(),m=d(f);if(!e||!m)return c();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{f.width=g.width,f.height=g.height,m.drawImage(g,0,0,f.width,f.height);let _=m.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,p(Un(_.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Un(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Ja=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t,s=[1,r,n,4];return new je({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:a})},es=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new je({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:r,download:i,dispose:a})},ts=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new je({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:r,download:i,dispose:a})},ns=(e,t,n)=>new je({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),Bt,mn,Tr,rs,Qm=Y(()=>{Bt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),mn=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Tr=!1,rs=()=>{if(!Tr){Tr=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<"u"&&n.from;e&&(Bt.set("int64",BigInt64Array),mn.set(BigInt64Array,"int64")),t&&(Bt.set("uint64",BigUint64Array),mn.set(BigUint64Array,"uint64")),r?(Bt.set("float16",n),mn.set(n,"float16")):Bt.set("float16",Uint16Array)}}}),is,as,Jm=Y(()=>{Er(),is=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},as=(e,t)=>{switch(e.location){case"cpu":return new je(e.type,e.data,t);case"cpu-pinned":return new je({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new je({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new je({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new je({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),je,Er=Y(()=>{Ym(),Zm(),Qm(),Jm(),je=class{constructor(e,t,n){rs();let r,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=Bt.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(r=e,o=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=Bt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",s=e;else if(u==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let u=mn.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let a=is(i);if(this.cpuData&&a!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Qa(e,t)}static fromTexture(e,t){return Ja(e,t)}static fromGpuBuffer(e,t){return es(e,t)}static fromMLTensor(e,t){return ts(e,t)}static fromPinnedBuffer(e,t,n){return ns(e,t,n)}toDataURL(e){return Ya(this,e)}toImageData(e){return Za(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return as(this,e)}}}),We,ss=Y(()=>{Er(),We=je}),Pn,kr,pt,et,Dt,Ut,os=Y(()=>{Xa(),Pn=(e,t)=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeStamp(`${e}::ORT::${t}`)},kr=(e,t)=>{var i;let n=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],r=!1;for(let a=0;a<n.length;a++){if(r&&!n[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${n[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Pn("CPU",s);return}n[a].includes("TRACE_FUNC")&&(r=!0)}},pt=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||kr("BEGIN",e)},et=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||kr("END",e)},Dt=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.time(`ORT::${e}`)},Ut=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeEnd(`ORT::${e}`)}}),us,eg=Y(()=>{ja(),ss(),os(),us=class Gm{constructor(t){this.handler=t}async run(t,n,r){pt(),Dt("InferenceSession.run");let i={},a={};if(typeof t!="object"||t===null||t instanceof We||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof We)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of n){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(n);for(let c of this.outputNames)if(p.indexOf(c)!==-1){let f=n[c];(f===null||f instanceof We)&&(d=!0,s=!1,i[c]=f)}if(d){if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else a=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,a),u={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof We?u[d]=p:u[d]=new We(p.type,p.data,p.dims)}return Ut("InferenceSession.run"),et(),u}async release(){return this.handler.dispose()}static async create(t,n,r,i){pt(),Dt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,c=0,f=t.byteLength;if(typeof n=="object"&&n!==null)s=n;else if(typeof n=="number"){if(c=n,!Number.isSafeInteger(c))throw new RangeError("'byteOffset' must be an integer.");if(c<0||c>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(f=t.byteLength-c,typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||c+f>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-c}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,c,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Ha(s),d=await o.createInferenceSessionHandler(a,u);return Ut("InferenceSession.create"),et(),new Gm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Pt,tg=Y(()=>{eg(),Pt=us}),ng=Y(()=>{}),rg=Y(()=>{}),ig=Y(()=>{}),ag=Y(()=>{}),sg={};nn(sg,{InferenceSession:()=>Pt,TRACE:()=>Pn,TRACE_EVENT_BEGIN:()=>Dt,TRACE_EVENT_END:()=>Ut,TRACE_FUNC_BEGIN:()=>pt,TRACE_FUNC_END:()=>et,Tensor:()=>We,env:()=>Ee,registerBackend:()=>rn});var Ye=Y(()=>{jm(),Xm(),tg(),ss(),ng(),rg(),os(),ig(),ag()}),Mr=Y(()=>{}),ls={};nn(ls,{default:()=>ds});var Cr,Ar,ds,og=Y(()=>{var e;Fp(),Lt(),Dr(),Cr="ort-wasm-proxy-worker",Ar=((e=globalThis.self)==null?void 0:e.name)===Cr,Ar&&(self.onmessage=t=>{let{type:n,in:r}=t.data;try{switch(n){case"init-wasm":Lr(r.wasm).then(()=>{Zi(r).then(()=>{postMessage({type:n})},i=>{postMessage({type:n,err:i})})},i=>{postMessage({type:n,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Qi(a,i).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})});break}case"copy-from":{let{buffer:i}=r,a=ir(i);postMessage({type:n,out:a});break}case"create":{let{model:i,options:a}=r;ea(i,a).then(s=>{postMessage({type:n,out:s})},s=>{postMessage({type:n,err:s})});break}case"release":ta(r),postMessage({type:n});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:o,options:u}=r;ra(i,a,s,o,new Array(o.length).fill(null),u).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:d},aa([...s,...d]))},d=>{postMessage({type:n,err:d})});break}case"end-profiling":ia(r),postMessage({type:n});break;default:}}catch(i){postMessage({type:n,err:i})}}),ds=Ar?null:t=>new Worker(t??Ke,{type:"module",name:Cr})}),cs={};nn(cs,{default:()=>hs});async function ps(e={}){var Pm,Lm;var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&((Pm=self.name)==null?void 0:Pm.startsWith("em-pthread"));t.mountExternalData=(l,h)=>{l.startsWith("./")&&(l=l.substring(2)),(t.Xc||(t.Xc=new Map)).set(l,h)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=l=>async(...h)=>{var w;try{if(t.Yc)throw Error("Session already started");let y=t.Yc={Kd:h[0],errors:[]},I=await l(...h);if(t.Yc!==y)throw Error("Session mismatch");(w=t.dd)==null||w.flush();let M=y.errors;if(0<M.length){let z=await Promise.all(M);if(z=z.filter(U=>U),0<z.length)throw Error(z.join(`
`))}return I}finally{t.Yc=null}};t.jsepInit=(l,h)=>{if(l==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=h;let w=t.dd;t.jsepRegisterBuffer=(y,I,M,z)=>w.registerBuffer(y,I,M,z),t.jsepGetBuffer=y=>w.getBuffer(y),t.jsepCreateDownloader=(y,I,M)=>w.createDownloader(y,I,M),t.jsepOnCreateSession=y=>{w.onCreateSession(y)},t.jsepOnReleaseSession=y=>{w.onReleaseSession(y)},t.jsepOnRunStart=y=>w.onRunStart(y),t.Id=(y,I)=>{w.upload(y,I)}}else if(l==="webnn"){let w=h[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=h.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=y=>w.onRunStart(y),t.webnnOnRunEnd=w.onRunEnd.bind(w),t.webnnOnReleaseSession=y=>{w.onReleaseSession(y)},t.webnnCreateMLTensorDownloader=(y,I)=>w.createMLTensorDownloader(y,I),t.webnnRegisterMLTensor=(y,I,M,z)=>w.registerMLTensor(y,I,M,z),t.webnnCreateMLContext=y=>w.createMLContext(y),t.webnnRegisterMLConstant=(y,I,M,z,U,Z)=>w.registerMLConstant(y,I,M,z,U,t.Xc,Z),t.webnnRegisterGraphInput=w.registerGraphInput.bind(w),t.webnnIsGraphInput=w.isGraphInput.bind(w),t.webnnRegisterGraphOutput=w.registerGraphOutput.bind(w),t.webnnIsGraphOutput=w.isGraphOutput.bind(w),t.webnnCreateTemporaryTensor=w.createTemporaryTensor.bind(w),t.webnnIsGraphInputOutputTypeSupported=w.isGraphInputOutputTypeSupported.bind(w)}};let s=()=>{let l=h=>(...w)=>{let y=gt;return w=h(...w),gt!=y?new Promise((I,M)=>{za={resolve:I,reject:M}}):w};(()=>{for(let h of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[h]=l(t[h])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,u,d=(l,h)=>{throw h},p=self.location.href,c="";if(n||r){try{c=new URL(".",p).href}catch{}r&&(u=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),o=async l=>{if(C(l))return new Promise((w,y)=>{var I=new XMLHttpRequest;I.open("GET",l,!0),I.responseType="arraybuffer",I.onload=()=>{I.status==200||I.status==0&&I.response?w(I.response):y(I.status)},I.onerror=y,I.send(null)});var h=await fetch(l,{credentials:"same-origin"});if(h.ok)return h.arrayBuffer();throw Error(h.status+" : "+h.url)}}var f,m,g,_,b,x,$=console.log.bind(console),T=console.error.bind(console),S=$,E=T,k=!1,C=l=>l.startsWith("file://");function v(){dt.buffer!=O.buffer&&X()}if(i){let l=function(h){try{var w=h.data,y=w.Sc;if(y==="load"){let I=[];self.onmessage=M=>I.push(M),x=()=>{postMessage({Sc:"loaded"});for(let M of I)l(M);self.onmessage=l};for(let M of w.xd)t[M]&&!t[M].proxy||(t[M]=(...z)=>{postMessage({Sc:"callHandler",wd:M,args:z})},M=="print"&&(S=t[M]),M=="printErr"&&(E=t[M]));dt=w.Od,X(),m=w.Pd,$e(),vr()}else if(y==="run"){(function(I){var M=(v(),q)[I+52>>>2>>>0];I=(v(),q)[I+56>>>2>>>0],Xf(M,M-I),ge(M)})(w.Rc),Da(w.Rc,0,0,1,0,0),ft(),Ma(w.Rc),R||(Wf(),R=!0);try{Ow(w.Md,w.bd)}catch(I){if(I!="unwind")throw I}}else w.target!=="setimmediate"&&(y==="checkMailbox"?R&&gr():y&&(E(`worker: received unknown command ${y}`),E(w)))}catch(I){throw Vf(),I}};var R=!1;self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=l}var O,F,L,G,A,q,j,K,oe,N,ee,W=!1;function X(){var l=dt.buffer;t.HEAP8=O=new Int8Array(l),L=new Int16Array(l),t.HEAPU8=F=new Uint8Array(l),G=new Uint16Array(l),t.HEAP32=A=new Int32Array(l),t.HEAPU32=q=new Uint32Array(l),j=new Float32Array(l),K=new Float64Array(l),oe=new BigInt64Array(l),N=new BigUint64Array(l)}function H(){W=!0,i?x():Tt.sb()}function V(l){throw E(l="Aborted("+l+")"),k=!0,l=new WebAssembly.RuntimeError(l+". Build with -sASSERTIONS for more info."),b==null||b(l),l}function le(){return{a:{ma:r1,gb:n1,g:Nw,J:Bw,f:Dw,o:Uw,h:Pw,ha:Lw,b:qw,T:Gw,Ha:tf,n:Ww,$:sf,Xa:of,Da:uf,Fa:lf,Ya:df,Va:cf,Oa:pf,Ua:hf,ka:ff,Ea:mf,Ba:gf,Wa:yf,Ca:_f,bb:Vw,ea:Fw,wa:Hw,ua:Kw,da:Yw,O:Zw,H:Qw,va:Jw,_:sb,xa:ob,Ra:ub,za:db,Ia:cb,sa:pb,fa:hb,Qa:Ma,_a:fb,R:_b,r:vb,c:Ea,hb:Sb,y:Ib,M:Tb,D:Eb,l:kb,s:Tf,ib:Mb,I:Cb,S:Ab,j:zb,u:Rb,q:Ob,k:Nb,La:Bb,Ma:Db,Na:Ub,Ja:Cf,Ka:Af,ta:zf,db:Lb,ab:Gb,v:Wb,aa:Vb,ga:Fb,$a:qb,W:Hb,Za:jb,Aa:Kb,F:Pb,U:Xb,la:$r,ya:Zb,fb:Yb,eb:Qb,Sa:Bf,Ta:Df,Ga:Ce,V:Uf,ja:Pf,Pa:Lf,ia:qf,kb:P1,na:O1,lb:U1,oa:R1,G:S1,e:o1,t:a1,w:i1,B:y1,mb:C1,K:$1,x:d1,pa:A1,Y:N1,ba:M1,nb:k1,ob:E1,P:_1,qa:T1,pb:I1,N:x1,Z:z1,d:s1,A:l1,m:u1,jb:L1,p:p1,z:h1,C:c1,E:f1,L:w1,qb:v1,Q:B1,ca:b1,X:D1,rb:g1,ra:m1,i:e1,a:dt,cb:_e}}}async function $e(){function l(y,I){var M=Tt=y.exports;y={};for(let[z,U]of Object.entries(M))typeof U=="function"?(M=mb(U),y[z]=M):y[z]=U;return Tt=y,Tt=(function(){var z=Tt,U=te=>me=>te(me)>>>0,Z=te=>()=>te()>>>0;return(z=Object.assign({},z)).tb=U(z.tb),z.Xb=Z(z.Xb),z.Zb=U(z.Zb),z.lc=U(z.lc),z.mc=Z(z.mc),z.qc=U(z.qc),z})(),Fe.push(Tt._b),Gf=(y=Tt).tb,Wf=y.ub,t._OrtInit=y.vb,t._OrtGetLastError=y.wb,t._OrtCreateSessionOptions=y.xb,t._OrtAppendExecutionProvider=y.yb,t._OrtAddFreeDimensionOverride=y.zb,t._OrtAddSessionConfigEntry=y.Ab,t._OrtReleaseSessionOptions=y.Bb,t._OrtCreateSession=y.Cb,t._OrtReleaseSession=y.Db,t._OrtGetInputOutputCount=y.Eb,t._OrtGetInputOutputMetadata=y.Fb,t._OrtFree=y.Gb,t._OrtCreateTensor=y.Hb,t._OrtGetTensorData=y.Ib,t._OrtReleaseTensor=y.Jb,t._OrtCreateRunOptions=y.Kb,t._OrtAddRunConfigEntry=y.Lb,t._OrtReleaseRunOptions=y.Mb,t._OrtCreateBinding=y.Nb,t._OrtBindInput=y.Ob,t._OrtBindOutput=y.Pb,t._OrtClearBoundOutputs=y.Qb,t._OrtReleaseBinding=y.Rb,t._OrtRunWithBinding=y.Sb,t._OrtRun=y.Tb,t._OrtEndProfiling=y.Ub,t._JsepOutput=y.Vb,t._JsepGetNodeName=y.Wb,xr=y.Xb,yt=t._free=y.Yb,Nn=t._malloc=y.Zb,Da=y.ac,Vf=y.bc,Ff=y.cc,Hf=y.dc,Ua=y.ec,jf=y.fc,Kf=y.gc,we=y.hc,Bn=y.ic,Xf=y.jc,ge=y.kc,Pa=y.lc,ye=y.mc,Yf=y.nc,La=y.oc,Zf=y.pc,Qf=y.qc,Jf=y.rc,qa=y.sc,em=y.tc,tm=y.uc,nm=y.vc,rm=y.wc,im=y.xc,am=y.yc,sm=y.zc,om=y.Ac,um=y.Bc,lm=y.Cc,dm=y.Dc,cm=y.Ec,pm=y.Fc,hm=y.Gc,fm=y.Hc,mm=y.Ic,gm=y.Jc,ym=y.Kc,_m=y.Lc,wm=y.Mc,bm=y.Nc,$m=y.Pc,xm=y.Qc,vm=y.$c,Sm=y.ad,Im=y.fd,Tm=y.jd,Em=y.kd,km=y.ld,Mm=y.md,Cm=y.nd,Am=y.od,zm=y.pd,Rm=y.qd,Om=y.vd,Nm=y.Td,Bm=y.Ud,Dm=y.Vd,Um=y.Wd,m=I,Tt}var h,w=le();return t.instantiateWasm?new Promise(y=>{t.instantiateWasm(w,(I,M)=>{y(l(I,M))})}):i?l(new WebAssembly.Instance(m,le()),m):(ee??(ee=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",c):c+"ort-wasm-simd-threaded.jsep.wasm":new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href),h=await(async function(y){var I=ee;if(!f&&!C(I))try{var M=fetch(I,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(M,y)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return(async function(z,U){try{var Z=await(async function(te){if(!f)try{var me=await o(te);return new Uint8Array(me)}catch{}if(te==ee&&f)te=new Uint8Array(f);else{if(!u)throw"both async and sync fetching of the wasm failed";te=u(te)}return te})(z);return await WebAssembly.instantiate(Z,U)}catch(te){E(`failed to asynchronously prepare wasm: ${te}`),V(te)}})(I,y)})(w),l(h.instance,h.module))}class ue{constructor(h){qm(this,"name","ExitStatus");this.message=`Program terminated with exit(${h})`,this.status=h}}var D=l=>{l.terminate(),l.onmessage=()=>{}},Q=[],J=0,ie=null,pe=l=>{De.length==0&&(lt(),ut(De[0]));var h=De.pop();if(!h)return 6;Oe.push(h),Ne[l.Rc]=h,h.Rc=l.Rc;var w={Sc:"run",Md:l.Ld,bd:l.bd,Rc:l.Rc};return h.postMessage(w,l.rd),0},ce=0,se=(l,h,...w)=>{var y,I=16*w.length,M=ye(),z=Pa(I),U=z>>>3;for(y of w)typeof y=="bigint"?((v(),oe)[U++>>>0]=1n,(v(),oe)[U++>>>0]=y):((v(),oe)[U++>>>0]=0n,(v(),K)[U++>>>0]=y);return l=Ff(l,0,I,z,h),ge(M),l};function _e(l){if(i)return se(0,1,l);if(g=l,!(0<ce)){for(var h of Oe)D(h);for(h of De)D(h);De=[],Oe=[],Ne={},k=!0}d(0,new ue(l))}function qe(l){if(i)return se(1,0,l);Ce(l)}var Ce=l=>{if(g=l,i)throw qe(l),"unwind";_e(l)},De=[],Oe=[],Fe=[],Ne={},Me=l=>{var h=l.Rc;delete Ne[h],De.push(l),Oe.splice(Oe.indexOf(l),1),l.Rc=0,Hf(h)};function ft(){Fe.forEach(l=>l())}var ut=l=>new Promise(h=>{l.onmessage=I=>{var M=I.data;if(I=M.Sc,M.Zc&&M.Zc!=xr()){var z=Ne[M.Zc];z?z.postMessage(M,M.rd):E(`Internal error! Worker sent a message "${I}" to target pthread ${M.Zc}, but that thread no longer exists!`)}else I==="checkMailbox"?gr():I==="spawnThread"?pe(M):I==="cleanupThread"?mr(()=>{Me(Ne[M.Nd])}):I==="loaded"?(l.loaded=!0,h(l)):M.target==="setimmediate"?l.postMessage(M):I==="uncaughtException"?l.onerror(M.error):I==="callHandler"?t[M.wd](...M.args):I&&E(`worker sent an unknown command ${I}`)},l.onerror=I=>{throw E(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var w,y=[];for(w of[])t.propertyIsEnumerable(w)&&y.push(w);l.postMessage({Sc:"load",xd:y,Od:dt,Pd:m})});function lt(){var l=new Worker((()=>{let h=URL;return self.location.href>"file:"&&self.location.href<"file;"?new h("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});De.push(l)}var dt,Ow=(l,h)=>{ce=0,l=qa(l,h),0<ce?g=l:Ua(l)},pr=[],hr=0;function Nw(l){var h=new va(l>>>=0);return(v(),O)[h.Tc+12>>>0]==0&&(Qh(h,!0),hr--),Jh(h,!1),pr.push(h),Qf(l)}var cn=0,Bw=()=>{we(0,0);var l=pr.pop();Yf(l.cd),cn=0};function Qh(l,h){h=h?1:0,(v(),O)[l.Tc+12>>>0]=h}function Jh(l,h){h=h?1:0,(v(),O)[l.Tc+13>>>0]=h}class va{constructor(h){this.cd=h,this.Tc=h-24}}var Sa=l=>{var h=cn;if(!h)return Bn(0),0;var w=new va(h);(v(),q)[w.Tc+16>>>2>>>0]=h;var y=(v(),q)[w.Tc+4>>>2>>>0];if(!y)return Bn(0),h;for(var I of l){if(I===0||I===y)break;if(Zf(I,y,w.Tc+16))return Bn(I),h}return Bn(y),h};function Dw(){return Sa([])}function Uw(l){return Sa([l>>>0])}function Pw(l,h,w,y){return Sa([l>>>0,h>>>0,w>>>0,y>>>0])}var Lw=()=>{var l=pr.pop();l||V("no exception to throw");var h=l.cd;throw(v(),O)[l.Tc+13>>>0]==0&&(pr.push(l),Jh(l,!0),Qh(l,!1),hr++),La(h),cn=h};function qw(l,h,w){var y=new va(l>>>=0);throw h>>>=0,w>>>=0,(v(),q)[y.Tc+16>>>2>>>0]=0,(v(),q)[y.Tc+4>>>2>>>0]=h,(v(),q)[y.Tc+8>>>2>>>0]=w,La(l),hr++,cn=l}var Gw=()=>hr;function ef(l,h,w,y){return i?se(2,1,l,h,w,y):tf(l,h,w,y)}function tf(l,h,w,y){if(l>>>=0,h>>>=0,w>>>=0,y>>>=0,!globalThis.SharedArrayBuffer)return 6;var I=[];return i&&I.length===0?ef(l,h,w,y):(l={Ld:w,Rc:l,bd:y,rd:I},i?(l.Sc="spawnThread",postMessage(l,I),0):pe(l))}function Ww(l){throw cn||(cn=l>>>0),cn}var nf=globalThis.TextDecoder&&new TextDecoder,rf=(l,h,w,y)=>{if(w=h+w,y)return w;for(;l[h]&&!(h>=w);)++h;return h},af=(l,h=0,w,y)=>{if(16<(w=rf(l,h>>>=0,w,y))-h&&l.buffer&&nf)return nf.decode(l.buffer instanceof ArrayBuffer?l.subarray(h,w):l.slice(h,w));for(y="";h<w;){var I=l[h++];if(128&I){var M=63&l[h++];if((224&I)==192)y+=String.fromCharCode((31&I)<<6|M);else{var z=63&l[h++];65536>(I=(240&I)==224?(15&I)<<12|M<<6|z:(7&I)<<18|M<<12|z<<6|63&l[h++])?y+=String.fromCharCode(I):(I-=65536,y+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else y+=String.fromCharCode(I)}return y},Be=(l,h,w)=>(l>>>=0)?af((v(),F),l,h,w):"";function sf(l,h,w){return i?se(3,1,l,h,w):0}function of(l,h){if(i)return se(4,1,l,h)}function uf(l,h){if(i)return se(5,1,l,h)}function lf(l,h,w){if(i)return se(6,1,l,h,w)}function df(l,h,w){return i?se(7,1,l,h,w):0}function cf(l,h){if(i)return se(8,1,l,h)}function pf(l,h,w){if(i)return se(9,1,l,h,w)}function hf(l,h,w,y){if(i)return se(10,1,l,h,w,y)}function ff(l,h,w,y){if(i)return se(11,1,l,h,w,y)}function mf(l,h,w,y){if(i)return se(12,1,l,h,w,y)}function gf(l){if(i)return se(13,1,l)}function yf(l,h){if(i)return se(14,1,l,h)}function _f(l,h,w){if(i)return se(15,1,l,h,w)}var Vw=()=>V(""),mt=l=>{l>>>=0;for(var h="";;){var w=(v(),F)[l++>>>0];if(!w)return h;h+=String.fromCharCode(w)}},Ia={},Ta={},pn=class extends Error{constructor(l){super(l),this.name="BindingError"}};function It(l,h,w={}){return(function(y,I,M={}){var z=I.name;if(!y)throw new pn(`type "${z}" must have a positive integer typeid pointer`);if(Ta.hasOwnProperty(y)){if(M.yd)return;throw new pn(`Cannot register type '${z}' twice`)}Ta[y]=I,Ia.hasOwnProperty(y)&&(I=Ia[y],delete Ia[y],I.forEach(U=>U()))})(l,h,w)}var wf=(l,h,w)=>{switch(h){case 1:return w?y=>(v(),O)[y>>>0]:y=>(v(),F)[y>>>0];case 2:return w?y=>(v(),L)[y>>>1>>>0]:y=>(v(),G)[y>>>1>>>0];case 4:return w?y=>(v(),A)[y>>>2>>>0]:y=>(v(),q)[y>>>2>>>0];case 8:return w?y=>(v(),oe)[y>>>3>>>0]:y=>(v(),N)[y>>>3>>>0];default:throw new TypeError(`invalid integer width (${h}): ${l}`)}};function Fw(l,h,w,y,I){l>>>=0,w>>>=0,h=mt(h>>>0);let M=z=>z;if(y=y===0n){let z=8*w;M=U=>BigInt.asUintN(z,U),I=M(I)}It(l,{name:h,Oc:M,Vc:(z,U)=>(typeof U=="number"&&(U=BigInt(U)),U),Uc:wf(h,w,!y),Wc:null})}function Hw(l,h,w,y){It(l>>>=0,{name:h=mt(h>>>0),Oc:function(I){return!!I},Vc:function(I,M){return M?w:y},Uc:function(I){return this.Oc((v(),F)[I>>>0])},Wc:null})}var bf=[],Jt=[0,1,,1,null,1,!0,1,!1,1];function Ea(l){9<(l>>>=0)&&--Jt[l+1]===0&&(Jt[l]=void 0,bf.push(l))}var Je=l=>{if(!l)throw new pn(`Cannot use deleted val. handle = ${l}`);return Jt[l]},ct=l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=bf.pop()||Jt.length;return Jt[h]=l,Jt[h+1]=1,h}};function ka(l){return this.Oc((v(),q)[l>>>2>>>0])}var jw={name:"emscripten::val",Oc:l=>{var h=Je(l);return Ea(l),h},Vc:(l,h)=>ct(h),Uc:ka,Wc:null};function Kw(l){return It(l>>>0,jw)}var Xw=(l,h)=>{switch(h){case 4:return function(w){return this.Oc((v(),j)[w>>>2>>>0])};case 8:return function(w){return this.Oc((v(),K)[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${l}`)}};function Yw(l,h,w){w>>>=0,It(l>>>=0,{name:h=mt(h>>>0),Oc:y=>y,Vc:(y,I)=>I,Uc:Xw(h,w),Wc:null})}function Zw(l,h,w,y,I){l>>>=0,w>>>=0,h=mt(h>>>0);let M=U=>U;if(y===0){var z=32-8*w;M=U=>U<<z>>>z,I=M(I)}It(l,{name:h,Oc:M,Vc:(U,Z)=>Z,Uc:wf(h,w,y!==0),Wc:null})}function Qw(l,h,w){function y(M){var z=(v(),q)[M>>>2>>>0];return M=(v(),q)[M+4>>>2>>>0],new I((v(),O).buffer,M,z)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];It(l>>>=0,{name:w=mt(w>>>0),Oc:y,Uc:y},{yd:!0})}var Rt=(l,h,w)=>{var y=(v(),F);if(h>>>=0,0<w){var I=h;w=h+w-1;for(var M=0;M<l.length;++M){var z=l.codePointAt(M);if(127>=z){if(h>=w)break;y[h++>>>0]=z}else if(2047>=z){if(h+1>=w)break;y[h++>>>0]=192|z>>6,y[h++>>>0]=128|63&z}else if(65535>=z){if(h+2>=w)break;y[h++>>>0]=224|z>>12,y[h++>>>0]=128|z>>6&63,y[h++>>>0]=128|63&z}else{if(h+3>=w)break;y[h++>>>0]=240|z>>18,y[h++>>>0]=128|z>>12&63,y[h++>>>0]=128|z>>6&63,y[h++>>>0]=128|63&z,M++}}y[h>>>0]=0,l=h-I}else l=0;return l},fr=l=>{for(var h=0,w=0;w<l.length;++w){var y=l.charCodeAt(w);127>=y?h++:2047>=y?h+=2:55296<=y&&57343>=y?(h+=4,++w):h+=3}return h};function Jw(l,h){It(l>>>=0,{name:h=mt(h>>>0),Oc(w){var y=(v(),q)[w>>>2>>>0];return y=Be(w+4,y,!0),yt(w),y},Vc(w,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var I=typeof y=="string";if(!(I||ArrayBuffer.isView(y)&&y.BYTES_PER_ELEMENT==1))throw new pn("Cannot pass non-string to std::string");var M=I?fr(y):y.length,z=Nn(4+M+1),U=z+4;return(v(),q)[z>>>2>>>0]=M,I?Rt(y,U,M+1):(v(),F).set(y,U>>>0),w!==null&&w.push(yt,z),z},Uc:ka,Wc(w){yt(w)}})}var $f=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,eb=(l,h,w)=>{if(l>>>=1,16<(h=rf((v(),G),l,h/2,w))-l&&$f)return $f.decode((v(),G).slice(l,h));for(w="";l<h;++l){var y=(v(),G)[l>>>0];w+=String.fromCharCode(y)}return w},tb=(l,h,w)=>{if(w??(w=2147483647),2>w)return 0;var y=h;w=(w-=2)<2*l.length?w/2:l.length;for(var I=0;I<w;++I){var M=l.charCodeAt(I);(v(),L)[h>>>1>>>0]=M,h+=2}return(v(),L)[h>>>1>>>0]=0,h-y},nb=l=>2*l.length,rb=(l,h,w)=>{var y="";l>>>=2;for(var I=0;!(I>=h/4);I++){var M=(v(),q)[l+I>>>0];if(!M&&!w)break;y+=String.fromCodePoint(M)}return y},ib=(l,h,w)=>{if(h>>>=0,w??(w=2147483647),4>w)return 0;var y=h;w=y+w-4;for(var I=0;I<l.length;++I){var M=l.codePointAt(I);if(65535<M&&I++,(v(),A)[h>>>2>>>0]=M,(h+=4)+4>w)break}return(v(),A)[h>>>2>>>0]=0,h-y},ab=l=>{for(var h=0,w=0;w<l.length;++w)65535<l.codePointAt(w)&&w++,h+=4;return h};function sb(l,h,w){if(l>>>=0,h>>>=0,w=mt(w>>>=0),h===2)var y=eb,I=tb,M=nb;else y=rb,I=ib,M=ab;It(l,{name:w,Oc:z=>{var U=(v(),q)[z>>>2>>>0];return U=y(z+4,U*h,!0),yt(z),U},Vc:(z,U)=>{if(typeof U!="string")throw new pn(`Cannot pass non-string to C++ string type ${w}`);var Z=M(U),te=Nn(4+Z+h);return(v(),q)[te>>>2>>>0]=Z/h,I(U,te+4,Z+h),z!==null&&z.push(yt,te),te},Uc:ka,Wc(z){yt(z)}})}function ob(l,h){It(l>>>=0,{zd:!0,name:h=mt(h>>>0),Oc:()=>{},Vc:()=>{}})}function ub(l){Da(l>>>0,!r,1,!n,131072,!1),ft()}var mr=l=>{if(!k)try{if(l(),!(0<ce))try{i?xr()&&Ua(g):Ce(g)}catch(h){h instanceof ue||h=="unwind"||d(0,h)}}catch(h){h instanceof ue||h=="unwind"||d(0,h)}},lb=!Atomics.waitAsync||((Lm=globalThis.navigator)==null?void 0:Lm.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ma(l){l>>>=0,lb||(Atomics.waitAsync((v(),A),l>>>2,l).value.then(gr),l+=128,Atomics.store((v(),A),l>>>2,1))}var gr=()=>mr(()=>{var l=xr();l&&(Ma(l),Kf())});function db(l,h){(l>>>=0)==h>>>0?setTimeout(gr):i?postMessage({Zc:l,Sc:"checkMailbox"}):(l=Ne[l])&&l.postMessage({Sc:"checkMailbox"})}var Ca=[];function cb(l,h,w,y,I){for(h>>>=0,I>>>=0,Ca.length=0,w=I>>>3,y=I+y>>>3;w<y;){var M;M=(v(),oe)[w++>>>0]?(v(),oe)[w++>>>0]:(v(),K)[w++>>>0],Ca.push(M)}return(h?Ga[h]:t1[l])(...Ca)}var pb=()=>{ce=0};function hb(l){l>>>=0,i?postMessage({Sc:"cleanupThread",Nd:l}):Me(Ne[l])}function fb(l){}var yr=l=>{try{l()}catch(h){V(h)}};function mb(l){var h=(...w)=>{_r.push(l);try{return l(...w)}finally{k||(_r.pop(),gt&&Ot===1&&_r.length===0&&(Ot=0,ce+=1,yr(Bm),typeof Fibers<"u"&&Fibers.Zd()))}};return Sf.set(l,h),h}var Ot=0,gt=null,xf=0,_r=[],Aa=new Map,vf=new Map,Sf=new Map,gb=0,za=null,yb=[],If=l=>(function(h){if(!k){if(Ot===0){var w=!1,y=!1;h((I=0)=>{if(!k&&(xf=I,w=!0,y)){Ot=2,yr(()=>Dm(gt)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),I=!1;try{var M=(function(){var Z=(v(),A)[gt+8>>>2>>>0];return Z=vf.get(Z),Z=Sf.get(Z),--ce,Z()})()}catch(Z){M=Z,I=!0}var z=!1;if(!gt){var U=za;U&&(za=null,(I?U.reject:U.resolve)(M),z=!0)}if(I&&!z)throw M}}),y=!0,w||(Ot=1,gt=(function(){var I=Nn(65548),M=I+12;if((v(),q)[I>>>2>>>0]=M,(v(),q)[I+4>>>2>>>0]=M+65536,M=_r[0],!Aa.has(M)){var z=gb++;Aa.set(M,z),vf.set(z,M)}return M=Aa.get(M),(v(),A)[I+8>>>2>>>0]=M,I})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),yr(()=>Nm(gt)))}else Ot===2?(Ot=0,yr(Um),yt(gt),gt=null,yb.forEach(mr)):V(`invalid state: ${Ot}`);return xf}})(h=>{l().then(h)});function _b(l){return l>>>=0,If(async()=>{var h=await Je(l);return ct(h)})}var Ra=[],wb=l=>{var h=Ra.length;return Ra.push(l),h},bb=(l,h)=>{for(var w=Array(l),y=0;y<l;++y){var I=y,M=(v(),q)[h+4*y>>>2>>>0],z=Ta[M];if(z===void 0)throw l=`parameter ${y}`,M=Gf(M),h=mt(M),yt(M),new pn(`${l} has unknown type ${h}`);w[I]=z}return w},$b=(l,h,w)=>{var y=[];return l=l(y,w),y.length&&((v(),q)[h>>>2>>>0]=ct(y)),l},xb={},wr=l=>{var h=xb[l];return h===void 0?mt(l):h};function vb(l,h,w){var[y,...I]=bb(l,h>>>0);h=y.Vc.bind(y);var M=I.map(Z=>Z.Uc.bind(Z));l--;var z={toValue:Je};switch(l=M.map((Z,te)=>{var me=`argFromPtr${te}`;return z[me]=Z,`${me}(args${te?"+"+8*te:""})`}),w){case 0:var U="toValue(handle)";break;case 2:U="new (toValue(handle))";break;case 3:U="";break;case 1:z.getStringOrSymbol=wr,U="toValue(handle)[getStringOrSymbol(methodName)]"}return U+=`(${l})`,y.zd||(z.toReturnWire=h,z.emval_returnValue=$b,U=`return emval_returnValue(toReturnWire, destructorsRef, ${U})`),U=`return function (handle, methodName, destructorsRef, args) {
  ${U}
  }`,w=new Function(Object.keys(z),U)(...Object.values(z)),U=`methodCaller<(${I.map(Z=>Z.name)}) => ${y.name}>`,wb(Object.defineProperty(w,"name",{value:U}))}function Sb(l,h){return h>>>=0,(l=Je(l>>>0))==Je(h)}function Ib(l){return(l>>>=0)?(l=wr(l),ct(globalThis[l])):ct(globalThis)}function Tb(l){return l=wr(l>>>0),ct(t[l])}function Eb(l,h){return h>>>=0,l=Je(l>>>0),h=Je(h),ct(l[h])}function kb(l){9<(l>>>=0)&&(Jt[l+1]+=1)}function Tf(l,h,w,y,I){return Ra[l>>>0](h>>>0,w>>>0,y>>>0,I>>>0)}function Mb(l,h,w,y,I){return Tf(l>>>0,h>>>0,w>>>0,y>>>0,I>>>0)}function Cb(){return ct([])}function Ab(l){l=Je(l>>>0);for(var h=Array(l.length),w=0;w<l.length;w++)h[w]=l[w];return ct(h)}function zb(l){return ct(wr(l>>>0))}function Rb(){return ct({})}function Ob(l){for(var h=Je(l>>>=0);h.length;){var w=h.pop();h.pop()(w)}Ea(l)}function Nb(l,h,w){h>>>=0,w>>>=0,l=Je(l>>>0),h=Je(h),w=Je(w),l[h]=w}function Bb(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),A)[h>>>2>>>0]=l.getUTCSeconds(),(v(),A)[h+4>>>2>>>0]=l.getUTCMinutes(),(v(),A)[h+8>>>2>>>0]=l.getUTCHours(),(v(),A)[h+12>>>2>>>0]=l.getUTCDate(),(v(),A)[h+16>>>2>>>0]=l.getUTCMonth(),(v(),A)[h+20>>>2>>>0]=l.getUTCFullYear()-1900,(v(),A)[h+24>>>2>>>0]=l.getUTCDay(),l=(l.getTime()-Date.UTC(l.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),A)[h+28>>>2>>>0]=l}var Ef=l=>l%4==0&&(l%100!=0||l%400==0),kf=[0,31,60,91,121,152,182,213,244,274,305,335],Mf=[0,31,59,90,120,151,181,212,243,273,304,334];function Db(l,h){l=-9007199254740992>l||9007199254740992<l?NaN:Number(l),h>>>=0,l=new Date(1e3*l),(v(),A)[h>>>2>>>0]=l.getSeconds(),(v(),A)[h+4>>>2>>>0]=l.getMinutes(),(v(),A)[h+8>>>2>>>0]=l.getHours(),(v(),A)[h+12>>>2>>>0]=l.getDate(),(v(),A)[h+16>>>2>>>0]=l.getMonth(),(v(),A)[h+20>>>2>>>0]=l.getFullYear()-1900,(v(),A)[h+24>>>2>>>0]=l.getDay();var w=(Ef(l.getFullYear())?kf:Mf)[l.getMonth()]+l.getDate()-1|0;(v(),A)[h+28>>>2>>>0]=w,(v(),A)[h+36>>>2>>>0]=-60*l.getTimezoneOffset(),w=new Date(l.getFullYear(),6,1).getTimezoneOffset();var y=new Date(l.getFullYear(),0,1).getTimezoneOffset();l=0|(w!=y&&l.getTimezoneOffset()==Math.min(y,w)),(v(),A)[h+32>>>2>>>0]=l}function Ub(l){l>>>=0;var h=new Date((v(),A)[l+20>>>2>>>0]+1900,(v(),A)[l+16>>>2>>>0],(v(),A)[l+12>>>2>>>0],(v(),A)[l+8>>>2>>>0],(v(),A)[l+4>>>2>>>0],(v(),A)[l>>>2>>>0],0),w=(v(),A)[l+32>>>2>>>0],y=h.getTimezoneOffset(),I=new Date(h.getFullYear(),6,1).getTimezoneOffset(),M=new Date(h.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(M,I);return 0>w?(v(),A)[l+32>>>2>>>0]=+(I!=M&&z==y):0<w!=(z==y)&&(I=Math.max(M,I),h.setTime(h.getTime()+6e4*((0<w?z:I)-y))),(v(),A)[l+24>>>2>>>0]=h.getDay(),w=(Ef(h.getFullYear())?kf:Mf)[h.getMonth()]+h.getDate()-1|0,(v(),A)[l+28>>>2>>>0]=w,(v(),A)[l>>>2>>>0]=h.getSeconds(),(v(),A)[l+4>>>2>>>0]=h.getMinutes(),(v(),A)[l+8>>>2>>>0]=h.getHours(),(v(),A)[l+12>>>2>>>0]=h.getDate(),(v(),A)[l+16>>>2>>>0]=h.getMonth(),(v(),A)[l+20>>>2>>>0]=h.getYear(),l=h.getTime(),BigInt(isNaN(l)?-1:l/1e3)}function Cf(l,h,w,y,I,M,z){return i?se(16,1,l,h,w,y,I,M,z):-52}function Af(l,h,w,y,I,M){if(i)return se(17,1,l,h,w,y,I,M)}var On={},Pb=()=>performance.timeOrigin+performance.now();function zf(l,h){if(i)return se(18,1,l,h);if(On[l]&&(clearTimeout(On[l].id),delete On[l]),!h)return 0;var w=setTimeout(()=>{delete On[l],mr(()=>jf(l,performance.timeOrigin+performance.now()))},h);return On[l]={id:w,Yd:h},0}function Lb(l,h,w,y){l>>>=0,h>>>=0,w>>>=0,y>>>=0;var I=new Date().getFullYear(),M=new Date(I,0,1).getTimezoneOffset();I=new Date(I,6,1).getTimezoneOffset();var z=Math.max(M,I);(v(),q)[l>>>2>>>0]=60*z,(v(),A)[h>>>2>>>0]=+(M!=I),l=(h=U=>{var Z=Math.abs(U);return`UTC${0<=U?"-":"+"}${String(Math.floor(Z/60)).padStart(2,"0")}${String(Z%60).padStart(2,"0")}`})(M),h=h(I),I<M?(Rt(l,w,17),Rt(h,y,17)):(Rt(l,y,17),Rt(h,w,17))}var qb=()=>Date.now();function Gb(l,h,w){return w>>>=0,0<=l&&3>=l?(l===0?l=Date.now():l=performance.timeOrigin+performance.now(),l=Math.round(1e6*l),(v(),oe)[w>>>3>>>0]=BigInt(l),0):28}var Oa=[],Rf=(l,h)=>{Oa.length=0;for(var w;w=(v(),F)[l++>>>0];){var y=w!=105;h+=(y&=w!=112)&&h%8?4:0,Oa.push(w==112?(v(),q)[h>>>2>>>0]:w==106?(v(),oe)[h>>>3>>>0]:w==105?(v(),A)[h>>>2>>>0]:(v(),K)[h>>>3>>>0]),h+=y?8:4}return Oa};function Wb(l,h,w){return l>>>=0,h=Rf(h>>>0,w>>>0),Ga[l](...h)}function Vb(l,h,w){return l>>>=0,h=Rf(h>>>0,w>>>0),Ga[l](...h)}var Fb=()=>{};function Hb(l,h){return E(Be(l>>>0,h>>>0))}var jb=()=>{throw ce+=1,"unwind"};function Kb(){return 4294901760}var Xb=()=>navigator.hardwareConcurrency,en={},br=l=>{var h;return(h=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(l))?+h[1]:(h=/:(\d+):\d+(?:\)|$)/.exec(l))?2147483648|+h[1]:0},Of=l=>{for(var h of l)(l=br(h))&&(en[l]=h)};function Yb(){var l=Error().stack.toString().split(`
`);return l[0]=="Error"&&l.shift(),Of(l),en.gd=br(l[3]),en.Jd=l,en.gd}function $r(l){if(!(l=en[l>>>0]))return 0;var h;if(h=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(l))l=h[1];else if(h=/^\s+at (.*) \(.*\)$/.exec(l))l=h[1];else{if(!(h=/^(.+?)@/.exec(l)))return 0;l=h[1]}yt($r.hd??0),h=fr(l)+1;var w=Nn(h);return w&&Rt(l,w,h),$r.hd=w,$r.hd}function Zb(l){l>>>=0;var h=(v(),F).length;if(l<=h||4294901760<l)return!1;for(var w=1;4>=w;w*=2){var y=h*(1+.2/w);y=Math.min(y,l+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(l,y)/65536))-dt.buffer.byteLength+65535)/65536|0;try{dt.grow(y),X();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}function Qb(l,h,w){if(l>>>=0,h>>>=0,en.gd==l)var y=en.Jd;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),Of(y);for(var I=3;y[I]&&br(y[I])!=l;)++I;for(l=0;l<w&&y[l+I];++l)(v(),A)[h+4*l>>>2>>>0]=br(y[l+I]);return l}var Na,Ba={},Nf=()=>{var y;if(!Na){var l,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((y=globalThis.navigator)==null?void 0:y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(l in Ba)Ba[l]===void 0?delete h[l]:h[l]=Ba[l];var w=[];for(l in h)w.push(`${l}=${h[l]}`);Na=w}return Na};function Bf(l,h){if(i)return se(19,1,l,h);l>>>=0,h>>>=0;var w,y=0,I=0;for(w of Nf()){var M=h+y;(v(),q)[l+I>>>2>>>0]=M,y+=Rt(w,M,1/0)+1,I+=4}return 0}function Df(l,h){if(i)return se(20,1,l,h);l>>>=0,h>>>=0;var w=Nf();for(var y of((v(),q)[l>>>2>>>0]=w.length,l=0,w))l+=fr(y)+1;return(v(),q)[h>>>2>>>0]=l,0}function Uf(l){return i?se(21,1,l):52}function Pf(l,h,w,y){return i?se(22,1,l,h,w,y):52}function Lf(l,h,w,y){return i?se(23,1,l,h,w,y):70}var Jb=[null,[],[]];function qf(l,h,w,y){if(i)return se(24,1,l,h,w,y);h>>>=0,w>>>=0,y>>>=0;for(var I=0,M=0;M<w;M++){var z=(v(),q)[h>>>2>>>0],U=(v(),q)[h+4>>>2>>>0];h+=8;for(var Z=0;Z<U;Z++){var te=l,me=(v(),F)[z+Z>>>0],xe=Jb[te];me===0||me===10?((te===1?S:E)(af(xe)),xe.length=0):xe.push(me)}I+=U}return(v(),q)[y>>>2>>>0]=I,0}function e1(l){return l>>>0}i||(function(){for(var l=t.numThreads-1;l--;)lt();Q.push(async()=>{var h=(async function(){if(!i)return Promise.all(De.map(ut))})();J++,await h,--J==0&&ie&&(h=ie,ie=null,h())})})(),i||(dt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),X()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>ye(),t.stackRestore=l=>ge(l),t.stackAlloc=l=>Pa(l),t.setValue=function(l,h,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":case"i8":(v(),O)[l>>>0]=h;break;case"i16":(v(),L)[l>>>1>>>0]=h;break;case"i32":(v(),A)[l>>>2>>>0]=h;break;case"i64":(v(),oe)[l>>>3>>>0]=BigInt(h);break;case"float":(v(),j)[l>>>2>>>0]=h;break;case"double":(v(),K)[l>>>3>>>0]=h;break;case"*":(v(),q)[l>>>2>>>0]=h;break;default:V(`invalid type for setValue: ${w}`)}},t.getValue=function(l,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return(v(),O)[l>>>0];case"i16":return(v(),L)[l>>>1>>>0];case"i32":return(v(),A)[l>>>2>>>0];case"i64":return(v(),oe)[l>>>3>>>0];case"float":return(v(),j)[l>>>2>>>0];case"double":return(v(),K)[l>>>3>>>0];case"*":return(v(),q)[l>>>2>>>0];default:V(`invalid type for getValue: ${h}`)}},t.UTF8ToString=Be,t.stringToUTF8=Rt,t.lengthBytesUTF8=fr;var Gf,Wf,xr,yt,Nn,Da,Vf,Ff,Hf,Ua,jf,Kf,we,Bn,Xf,ge,Pa,ye,Yf,La,Zf,Qf,Jf,qa,em,tm,nm,rm,im,am,sm,om,um,lm,dm,cm,pm,hm,fm,mm,gm,ym,_m,wm,bm,$m,xm,vm,Sm,Im,Tm,Em,km,Mm,Cm,Am,zm,Rm,Om,Nm,Bm,Dm,Um,Tt,t1=[_e,qe,ef,sf,of,uf,lf,df,cf,pf,hf,ff,mf,gf,yf,_f,Cf,Af,zf,Bf,Df,Uf,Pf,Lf,qf],Ga={1003524:(l,h,w,y,I)=>{if(t===void 0||!t.Xc)return 1;if((l=Be(Number(l>>>0))).startsWith("./")&&(l=l.substring(2)),!(l=t.Xc.get(l)))return 2;if(h=Number(h>>>0),w=Number(w>>>0),y=Number(y>>>0),h+w>l.byteLength)return 3;try{let M=l.subarray(h,h+w);switch(I){case 0:(v(),F).set(M,y>>>0);break;case 1:t.Qd?t.Qd(y,M):t.Id(y,M);break;default:return 4}return 0}catch{return 4}},1004348:(l,h,w)=>{t.td(l,(v(),F).subarray(h>>>0,h+w>>>0))},1004412:()=>t.Sd(),1004454:l=>{t.sd(l)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:l=>t.Ad(l),1004609:l=>t.Ed(l),1004641:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w),!0)},1004704:(l,h,w)=>{t.ed(Number(l),Number(h),Number(w))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:l=>{t.$b("Abs",l,void 0)},1004869:l=>{t.$b("Neg",l,void 0)},1004920:l=>{t.$b("Floor",l,void 0)},1004973:l=>{t.$b("Ceil",l,void 0)},1005025:l=>{t.$b("Reciprocal",l,void 0)},1005083:l=>{t.$b("Sqrt",l,void 0)},1005135:l=>{t.$b("Exp",l,void 0)},1005186:l=>{t.$b("Erf",l,void 0)},1005237:l=>{t.$b("Sigmoid",l,void 0)},1005292:(l,h,w)=>{t.$b("HardSigmoid",l,{alpha:h,beta:w})},1005371:l=>{t.$b("Log",l,void 0)},1005422:l=>{t.$b("Sin",l,void 0)},1005473:l=>{t.$b("Cos",l,void 0)},1005524:l=>{t.$b("Tan",l,void 0)},1005575:l=>{t.$b("Asin",l,void 0)},1005627:l=>{t.$b("Acos",l,void 0)},1005679:l=>{t.$b("Atan",l,void 0)},1005731:l=>{t.$b("Sinh",l,void 0)},1005783:l=>{t.$b("Cosh",l,void 0)},1005835:l=>{t.$b("Asinh",l,void 0)},1005888:l=>{t.$b("Acosh",l,void 0)},1005941:l=>{t.$b("Atanh",l,void 0)},1005994:l=>{t.$b("Tanh",l,void 0)},1006046:l=>{t.$b("Not",l,void 0)},1006097:(l,h,w)=>{t.$b("Clip",l,{min:h,max:w})},1006166:l=>{t.$b("Clip",l,void 0)},1006218:(l,h)=>{t.$b("Elu",l,{alpha:h})},1006276:l=>{t.$b("Gelu",l,void 0)},1006328:l=>{t.$b("Relu",l,void 0)},1006380:(l,h)=>{t.$b("LeakyRelu",l,{alpha:h})},1006444:(l,h)=>{t.$b("ThresholdedRelu",l,{alpha:h})},1006514:(l,h)=>{t.$b("Cast",l,{to:h})},1006572:l=>{t.$b("Add",l,void 0)},1006623:l=>{t.$b("Sub",l,void 0)},1006674:l=>{t.$b("Mul",l,void 0)},1006725:l=>{t.$b("Div",l,void 0)},1006776:l=>{t.$b("Pow",l,void 0)},1006827:l=>{t.$b("Equal",l,void 0)},1006880:l=>{t.$b("Greater",l,void 0)},1006935:l=>{t.$b("GreaterOrEqual",l,void 0)},1006997:l=>{t.$b("Less",l,void 0)},1007049:l=>{t.$b("LessOrEqual",l,void 0)},1007108:(l,h,w,y,I)=>{t.$b("ReduceMean",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1007283:(l,h,w,y,I)=>{t.$b("ReduceMax",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1007457:(l,h,w,y,I)=>{t.$b("ReduceMin",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1007631:(l,h,w,y,I)=>{t.$b("ReduceProd",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1007806:(l,h,w,y,I)=>{t.$b("ReduceSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1007980:(l,h,w,y,I)=>{t.$b("ReduceL1",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1008153:(l,h,w,y,I)=>{t.$b("ReduceL2",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1008326:(l,h,w,y,I)=>{t.$b("ReduceLogSum",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1008503:(l,h,w,y,I)=>{t.$b("ReduceSumSquare",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1008683:(l,h,w,y,I)=>{t.$b("ReduceLogSumExp",l,{keepDims:!!h,noopWithEmptyAxes:!!w,axes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1008863:l=>{t.$b("Where",l,void 0)},1008916:(l,h,w)=>{t.$b("Transpose",l,{perm:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[]})},1009040:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Be(w),format:y?"NHWC":"NCHW"})},1009173:(l,h,w,y)=>{t.$b("DepthToSpace",l,{blocksize:h,mode:Be(w),format:y?"NHWC":"NCHW"})},1009306:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae,Nt)=>{t.$b("ConvTranspose",l,{format:Z?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[I],pads:[M,z],strides:[U],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:me?Array.from((v(),A).subarray(Number(me)>>>0,Number(xe)>>>0)):[],outputShape:Te?Array.from((v(),A).subarray(Number(Te)>>>0,Number(Ae)>>>0)):[],activation:Be(Nt)})},1009739:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae)=>{t.$b("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[Z>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],outputShape:xe?Array.from((v(),A).subarray(Number(xe)>>>0,Number(Te)>>>0)):[],activation:Be(Ae)})},1010400:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae,Nt)=>{t.$b("ConvTranspose",l,{format:Z?"NHWC":"NCHW",autoPad:h,dilations:[w],group:y,kernelShape:[I],pads:[M,z],strides:[U],wIsConst:()=>!!(v(),O)[te>>>0],outputPadding:me?Array.from((v(),A).subarray(Number(me)>>>0,Number(xe)>>>0)):[],outputShape:Te?Array.from((v(),A).subarray(Number(Te)>>>0,Number(Ae)>>>0)):[],activation:Be(Nt)})},1010833:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae)=>{t.$b("ConvTranspose",l,{format:U?"NHWC":"NCHW",autoPad:h,dilations:Array.from((v(),A).subarray(Number(w)>>>0,(Number(w)>>>0)+2>>>0)),group:y,kernelShape:Array.from((v(),A).subarray(Number(I)>>>0,(Number(I)>>>0)+2>>>0)),pads:Array.from((v(),A).subarray(Number(M)>>>0,(Number(M)>>>0)+4>>>0)),strides:Array.from((v(),A).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),O)[Z>>>0],outputPadding:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],outputShape:xe?Array.from((v(),A).subarray(Number(xe)>>>0,Number(Te)>>>0)):[],activation:Be(Ae)})},1011494:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1011585:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae)=>{t.$b("AveragePool",l,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:xe?Array.from((v(),A).subarray(Number(xe)>>>0,Number(Te)>>>0)):[]})},1012064:(l,h)=>{t.$b("GlobalAveragePool",l,{format:h?"NHWC":"NCHW"})},1012155:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae)=>{t.$b("AveragePool",l,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:xe?Array.from((v(),A).subarray(Number(xe)>>>0,Number(Te)>>>0)):[]})},1012634:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1012721:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae)=>{t.$b("MaxPool",l,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:xe?Array.from((v(),A).subarray(Number(xe)>>>0,Number(Te)>>>0)):[]})},1013196:(l,h)=>{t.$b("GlobalMaxPool",l,{format:h?"NHWC":"NCHW"})},1013283:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae)=>{t.$b("MaxPool",l,{format:Ae?"NHWC":"NCHW",auto_pad:h,ceil_mode:w,count_include_pad:y,storage_order:I,dilations:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],kernel_shape:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],pads:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],strides:xe?Array.from((v(),A).subarray(Number(xe)>>>0,Number(Te)>>>0)):[]})},1013758:(l,h,w,y,I)=>{t.$b("Gemm",l,{alpha:h,beta:w,transA:y,transB:I})},1013862:l=>{t.$b("MatMul",l,void 0)},1013916:(l,h,w,y)=>{t.$b("ArgMax",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014024:(l,h,w,y)=>{t.$b("ArgMin",l,{keepDims:!!h,selectLastIndex:!!w,axis:y})},1014132:(l,h)=>{t.$b("Softmax",l,{axis:h})},1014195:(l,h)=>{t.$b("Concat",l,{axis:h})},1014255:(l,h,w,y,I)=>{t.$b("Split",l,{axis:h,numOutputs:w,splitSizes:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1014411:l=>{t.$b("Expand",l,void 0)},1014465:(l,h)=>{t.$b("Gather",l,{axis:Number(h)})},1014536:(l,h)=>{t.$b("GatherElements",l,{axis:Number(h)})},1014615:(l,h)=>{t.$b("GatherND",l,{batch_dims:Number(h)})},1014694:(l,h,w,y,I,M,z,U,Z,te,me)=>{t.$b("Resize",l,{antialias:h,axes:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],coordinateTransformMode:Be(I),cubicCoeffA:M,excludeOutside:z,extrapolationValue:U,keepAspectRatioPolicy:Be(Z),mode:Be(te),nearestMode:Be(me)})},1015056:(l,h,w,y,I,M,z)=>{t.$b("Slice",l,{starts:h?Array.from((v(),A).subarray(Number(h)>>>0,Number(w)>>>0)):[],ends:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[],axes:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[]})},1015320:l=>{t.$b("Tile",l,void 0)},1015372:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015486:(l,h,w)=>{t.$b("InstanceNormalization",l,{epsilon:h,format:w?"NHWC":"NCHW"})},1015600:l=>{t.$b("Range",l,void 0)},1015653:(l,h)=>{t.$b("Einsum",l,{equation:Be(h)})},1015734:(l,h,w,y,I)=>{t.$b("Pad",l,{mode:h,value:w,pads:y?Array.from((v(),A).subarray(Number(y)>>>0,Number(I)>>>0)):[]})},1015877:(l,h,w,y,I,M)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!I,trainingMode:!!y,format:M?"NHWC":"NCHW"})},1016046:(l,h,w,y,I,M)=>{t.$b("BatchNormalization",l,{epsilon:h,momentum:w,spatial:!!I,trainingMode:!!y,format:M?"NHWC":"NCHW"})},1016215:(l,h,w)=>{t.$b("CumSum",l,{exclusive:Number(h),reverse:Number(w)})},1016312:(l,h,w)=>{t.$b("DequantizeLinear",l,{axis:h,blockSize:w})},1016402:(l,h,w,y,I)=>{t.$b("GridSample",l,{align_corners:h,mode:Be(w),padding_mode:Be(y),format:I?"NHWC":"NCHW"})},1016572:(l,h,w,y,I)=>{t.$b("GridSample",l,{align_corners:h,mode:Be(w),padding_mode:Be(y),format:I?"NHWC":"NCHW"})},1016742:(l,h)=>{t.$b("ScatterND",l,{reduction:Be(h)})},1016827:(l,h,w,y,I,M,z,U,Z)=>{t.$b("Attention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:I,doRotary:M,qkvHiddenSizes:z?Array.from((v(),A).subarray(Number(U)>>>0,Number(U)+z>>>0)):[],pastPresentShareBuffer:!!Z})},1017099:l=>{t.$b("BiasAdd",l,void 0)},1017154:l=>{t.$b("BiasSplitGelu",l,void 0)},1017215:l=>{t.$b("FastGelu",l,void 0)},1017271:(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae,Nt,Wa)=>{t.$b("Conv",l,{format:xe?"NHWC":"NCHW",auto_pad:h,dilations:w?Array.from((v(),A).subarray(Number(w)>>>0,Number(y)>>>0)):[],group:I,kernel_shape:M?Array.from((v(),A).subarray(Number(M)>>>0,Number(z)>>>0)):[],pads:U?Array.from((v(),A).subarray(Number(U)>>>0,Number(Z)>>>0)):[],strides:te?Array.from((v(),A).subarray(Number(te)>>>0,Number(me)>>>0)):[],w_is_const:()=>!!(v(),O)[Number(Te)>>>0],activation:Be(Ae),activation_params:Nt?Array.from((v(),j).subarray(Number(Nt)>>>0,Number(Wa)>>>0)):[]})},1017855:l=>{t.$b("Gelu",l,void 0)},1017907:(l,h,w,y,I,M,z,U,Z)=>{t.$b("GroupQueryAttention",l,{numHeads:h,kvNumHeads:w,scale:y,softcap:I,doRotary:M,rotaryInterleaved:z,smoothSoftmax:U,localWindowSize:Z})},1018124:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018235:(l,h,w,y)=>{t.$b("LayerNormalization",l,{axis:h,epsilon:w,simplified:!!y})},1018346:(l,h,w,y,I,M)=>{t.$b("MatMulNBits",l,{k:h,n:w,accuracyLevel:y,bits:I,blockSize:M})},1018473:(l,h,w,y,I,M)=>{t.$b("MultiHeadAttention",l,{numHeads:h,isUnidirectional:w,maskFilterValue:y,scale:I,doRotary:M})},1018632:(l,h)=>{t.$b("QuickGelu",l,{alpha:h})},1018696:(l,h,w,y,I)=>{t.$b("RotaryEmbedding",l,{interleaved:!!h,numHeads:w,rotaryEmbeddingDim:y,scale:I})},1018835:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1018937:(l,h,w)=>{t.$b("SkipLayerNormalization",l,{epsilon:h,simplified:!!w})},1019039:(l,h,w,y)=>{t.$b("GatherBlockQuantized",l,{gatherAxis:h,quantizeAxis:w,blockSize:y})},1019160:l=>{t.Fd(l)},1019194:(l,h)=>t.Hd(Number(l),Number(h),t.Yc.Kd,t.Yc.errors)};function n1(l,h,w){return If(async()=>{await t.Dd(Number(l),Number(h),Number(w))})}function r1(){return typeof wasmOffsetConverter<"u"}function i1(l,h,w,y){var I=ye();try{return om(l,h,w,y)}catch(M){if(ge(I),M!==M+0)throw M;we(1,0)}}function a1(l,h,w){var y=ye();try{return rm(l,h,w)}catch(I){if(ge(y),I!==I+0)throw I;we(1,0)}}function s1(l){var h=ye();try{em(l)}catch(w){if(ge(h),w!==w+0)throw w;we(1,0)}}function o1(l,h){var w=ye();try{return qa(l,h)}catch(y){if(ge(w),y!==y+0)throw y;we(1,0)}}function u1(l,h,w){var y=ye();try{Jf(l,h,w)}catch(I){if(ge(y),I!==I+0)throw I;we(1,0)}}function l1(l,h){var w=ye();try{um(l,h)}catch(y){if(ge(w),y!==y+0)throw y;we(1,0)}}function d1(l,h,w,y,I,M,z){var U=ye();try{return am(l,h,w,y,I,M,z)}catch(Z){if(ge(U),Z!==Z+0)throw Z;we(1,0)}}function c1(l,h,w,y,I,M){var z=ye();try{tm(l,h,w,y,I,M)}catch(U){if(ge(z),U!==U+0)throw U;we(1,0)}}function p1(l,h,w,y){var I=ye();try{sm(l,h,w,y)}catch(M){if(ge(I),M!==M+0)throw M;we(1,0)}}function h1(l,h,w,y,I){var M=ye();try{nm(l,h,w,y,I)}catch(z){if(ge(M),z!==z+0)throw z;we(1,0)}}function f1(l,h,w,y,I,M,z){var U=ye();try{dm(l,h,w,y,I,M,z)}catch(Z){if(ge(U),Z!==Z+0)throw Z;we(1,0)}}function m1(l,h,w,y,I,M,z){var U=ye();try{cm(l,h,w,y,I,M,z)}catch(Z){if(ge(U),Z!==Z+0)throw Z;we(1,0)}}function g1(l,h,w,y,I,M,z,U){var Z=ye();try{mm(l,h,w,y,I,M,z,U)}catch(te){if(ge(Z),te!==te+0)throw te;we(1,0)}}function y1(l,h,w,y,I){var M=ye();try{return lm(l,h,w,y,I)}catch(z){if(ge(M),z!==z+0)throw z;we(1,0)}}function _1(l,h,w){var y=ye();try{return gm(l,h,w)}catch(I){if(ge(y),I!==I+0)throw I;we(1,0)}}function w1(l,h,w,y,I,M,z,U){var Z=ye();try{ym(l,h,w,y,I,M,z,U)}catch(te){if(ge(Z),te!==te+0)throw te;we(1,0)}}function b1(l,h,w,y,I,M,z,U,Z,te,me,xe){var Te=ye();try{pm(l,h,w,y,I,M,z,U,Z,te,me,xe)}catch(Ae){if(ge(Te),Ae!==Ae+0)throw Ae;we(1,0)}}function $1(l,h,w,y,I,M){var z=ye();try{return hm(l,h,w,y,I,M)}catch(U){if(ge(z),U!==U+0)throw U;we(1,0)}}function x1(l,h,w){var y=ye();try{return _m(l,h,w)}catch(I){if(ge(y),I!==I+0)throw I;return we(1,0),0n}}function v1(l,h,w,y,I,M,z,U,Z){var te=ye();try{im(l,h,w,y,I,M,z,U,Z)}catch(me){if(ge(te),me!==me+0)throw me;we(1,0)}}function S1(l){var h=ye();try{return wm(l)}catch(w){if(ge(h),w!==w+0)throw w;we(1,0)}}function I1(l,h){var w=ye();try{return Om(l,h)}catch(y){if(ge(w),y!==y+0)throw y;return we(1,0),0n}}function T1(l){var h=ye();try{return bm(l)}catch(w){if(ge(h),w!==w+0)throw w;return we(1,0),0n}}function E1(l,h,w,y){var I=ye();try{return Tm(l,h,w,y)}catch(M){if(ge(I),M!==M+0)throw M;we(1,0)}}function k1(l,h,w,y,I){var M=ye();try{return Em(l,h,w,y,I)}catch(z){if(ge(M),z!==z+0)throw z;we(1,0)}}function M1(l,h,w,y,I,M){var z=ye();try{return km(l,h,w,y,I,M)}catch(U){if(ge(z),U!==U+0)throw U;we(1,0)}}function C1(l,h,w,y,I,M){var z=ye();try{return Mm(l,h,w,y,I,M)}catch(U){if(ge(z),U!==U+0)throw U;we(1,0)}}function A1(l,h,w,y,I,M,z,U){var Z=ye();try{return fm(l,h,w,y,I,M,z,U)}catch(te){if(ge(Z),te!==te+0)throw te;we(1,0)}}function z1(l,h,w,y,I){var M=ye();try{return Cm(l,h,w,y,I)}catch(z){if(ge(M),z!==z+0)throw z;return we(1,0),0n}}function R1(l,h,w,y){var I=ye();try{return Am(l,h,w,y)}catch(M){if(ge(I),M!==M+0)throw M;we(1,0)}}function O1(l,h,w,y){var I=ye();try{return zm(l,h,w,y)}catch(M){if(ge(I),M!==M+0)throw M;we(1,0)}}function N1(l,h,w,y,I,M,z,U,Z,te,me,xe){var Te=ye();try{return Rm(l,h,w,y,I,M,z,U,Z,te,me,xe)}catch(Ae){if(ge(Te),Ae!==Ae+0)throw Ae;we(1,0)}}function B1(l,h,w,y,I,M,z,U,Z,te,me){var xe=ye();try{Sm(l,h,w,y,I,M,z,U,Z,te,me)}catch(Te){if(ge(xe),Te!==Te+0)throw Te;we(1,0)}}function D1(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae,Nt,Wa){var q1=ye();try{Im(l,h,w,y,I,M,z,U,Z,te,me,xe,Te,Ae,Nt,Wa)}catch(Va){if(ge(q1),Va!==Va+0)throw Va;we(1,0)}}function U1(l,h,w){var y=ye();try{return $m(l,h,w)}catch(I){if(ge(y),I!==I+0)throw I;we(1,0)}}function P1(l,h,w){var y=ye();try{return xm(l,h,w)}catch(I){if(ge(y),I!==I+0)throw I;we(1,0)}}function L1(l,h,w,y){var I=ye();try{vm(l,h,w,y)}catch(M){if(ge(I),M!==M+0)throw M;we(1,0)}}function vr(){if(0<J)ie=vr;else if(i)_==null||_(t),H();else{for(var l=Q;0<l.length;)l.shift()(t);0<J?ie=vr:(t.calledRun=!0,k||(H(),_==null||_(t)))}}return i||(Tt=await $e(),vr()),t.PTR_SIZE=4,W?t:new Promise((l,h)=>{_=l,b=h})}var hs,fs,ug=Y(()=>{var e,t;hs=ps,fs=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),fs&&ps()}),zr,Rr,ms,Ke,gs,Ln,ys,_s,Or,ws,Nr,bs,Br,$s,Dr=Y(()=>{Mr(),zr=typeof location>"u"?void 0:location.origin,Rr=self.location.href>"file:"&&self.location.href<"file;",ms=()=>{{if(Rr){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,zr).href}return self.location.href}},Ke=ms(),gs=()=>{if(Ke&&!Ke.startsWith("blob:"))return Ke.substring(0,Ke.lastIndexOf("/")+1)},Ln=(e,t)=>{try{let n=t??Ke;return(n?new URL(e,n):new URL(e)).origin===zr}catch{return!1}},ys=(e,t)=>{let n=t??Ke;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},_s=(e,t)=>`${t??"./"}${e}`,Or=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ws=async e=>(await import(e)).default,Nr=(og(),hn(ls)).default,bs=async()=>{if(!Ke)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ln(Ke))return[void 0,Nr()];let e=await Or(Ke);return[e,Nr(e)]},Br=(ug(),hn(cs)).default,$s=async(e,t,n,r)=>{let i=Br&&!(e||t);if(i)if(Ke)i=Ln(Ke)||r&&!n;else if(r&&!n)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,Br];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??ys(a,t),o=n&&s&&!Ln(s,t),u=o?await Or(s):s??_s(a,t);return[o?u:void 0,await ws(u)]}}}),Ur,qn,gn,Pr,xs,vs,Ss,Lr,ke,Lt=Y(()=>{Dr(),qn=!1,gn=!1,Pr=!1,xs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},vs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ss=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Lr=async e=>{if(qn)return Promise.resolve();if(gn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Pr)throw new Error("previous call to 'initializeWebAssembly()' failed.");gn=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ss())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!vs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=xs();n>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i=="string"?i:void 0,s=i==null?void 0:i.mjs,o=(s==null?void 0:s.href)??s,u=i==null?void 0:i.wasm,d=(u==null?void 0:u.href)??u,p=e.wasmBinary,[c,f]=await $s(o,a,n>1,!!p||!!d),m=!1,g=[];if(t>0&&g.push(new Promise(_=>{setTimeout(()=>{m=!0,_()},t)})),g.push(new Promise((_,b)=>{let x={numThreads:n};if(p)x.wasmBinary=p,x.locateFile=$=>$;else if(d||a)x.locateFile=$=>d??a+$;else if(o&&o.indexOf("blob:")!==0)x.locateFile=$=>new URL($,o).href;else if(c){let $=gs();$&&(x.locateFile=T=>$+T)}f(x).then($=>{gn=!1,qn=!0,Ur=$,_(),c&&URL.revokeObjectURL(c)},$=>{gn=!1,Pr=!0,b($)})})),await Promise.race(g),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(qn&&Ur)return Ur;throw new Error("WebAssembly is not initialized yet.")}}),tt,Gn,Ie,qr=Y(()=>{Lt(),tt=(e,t)=>{let n=ke(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Gn=(e,t,n,r)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([i,a])=>{let s=t?t+i:i;if(typeof a=="object")Gn(a,s+".",n,r);else if(typeof a=="string"||typeof a=="number")r(s,a.toString());else if(typeof a=="boolean")r(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Ie=e=>{let t=ke(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetLastError(i,i+r);let a=Number(t.getValue(i,r===4?"i32":"i64")),s=t.getValue(i+r,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Is,lg=Y(()=>{Lt(),qr(),Is=e=>{let t=ke(),n=0,r=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=tt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ie("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Gn(e.extra,"",new WeakSet,(s,o)=>{let u=tt(s,r),d=tt(o,r);t._OrtAddRunConfigEntry(n,u,d)!==0&&Ie(`Can't set a run config entry: ${s} - ${o}.`)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(s=>t._free(s)),a}}}),Ts,Es,ks,qt,Ms,Cs,dg=Y(()=>{Lt(),qr(),Ts=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Es=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ks=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},qt=(e,t,n,r)=>{let i=tt(t,r),a=tt(n,r);ke()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ie(`Can't set a session config entry: ${t} - ${n}.`)},Ms=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let a=typeof i=="string"?i:i.name,s=[];switch(a){case"webnn":if(a="WEBNN",qt(e,"session.disable_quant_qdq","1",n),qt(e,"session.disable_qdq_constant_folding","1",n),typeof i!="string"){let c=i==null?void 0:i.deviceType;c&&qt(e,"deviceType",c,n)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c!=null&&c.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);qt(e,"preferredLayout",c.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=tt(a,n),u=s.length,d=0,p=0;if(u>0){d=ke()._malloc(u*ke().PTR_SIZE),n.push(d),p=ke()._malloc(u*ke().PTR_SIZE),n.push(p);for(let c=0;c<u;c++)ke().setValue(d+c*ke().PTR_SIZE,s[c][0],"*"),ke().setValue(p+c*ke().PTR_SIZE,s[c][1],"*")}await ke()._OrtAppendExecutionProvider(e,o,d,p,u)!==0&&Ie(`Can't append execution provider: ${a}.`)}},Cs=async e=>{let t=ke(),n=0,r=[],i=e||{};ks(i);try{let a=Ts(i.graphOptimizationLevel??"all"),s=Es(i.executionMode??"sequential"),o=typeof i.logId=="string"?tt(i.logId,r):0,u=i.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof i.optimizedModelFilePath=="string"?tt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(a,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,u,d,p),n===0&&Ie("Can't create session options."),i.executionProviders&&await Ms(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);qt(n,"enableGraphCapture",i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[c,f]of Object.entries(i.freeDimensionOverrides)){if(typeof c!="string")throw new Error(`free dimension override name must be a string: ${c}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let m=tt(c,r);t._OrtAddFreeDimensionOverride(n,m,f)!==0&&Ie(`Can't set a free dimension override: ${c} - ${f}.`)}return i.extra!==void 0&&Gn(i.extra,"",new WeakSet,(c,f)=>{qt(n,c,f,r)}),[n,r]}catch(a){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ie("Can't release session options."),r.forEach(s=>t._free(s)),a}}}),Gt,bt,Wt,Wn,Vn,Gr,Wr,Vr,de=Y(()=>{Gt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},bt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Wt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((i,a)=>i*a,1);return n>0?Math.ceil(r*n):void 0},Wn=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Vn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Gr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Vr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Fr,As=Y(()=>{Mr(),Fr=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),a;try{a=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await i.read();if(o)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),zs,Rs,Os,Ns,Hr,Bs,be,$t=Y(()=>{de(),zs=["V","I","W","E","F"],Rs=(e,t)=>{console.log(`[${zs[e]},${new Date().toISOString()}]${t}`)},Hr=(e,t)=>{Os=e,Ns=t},Bs=(e,t)=>{let n=Vn(e),r=Vn(Os);n>=r&&Rs(n,typeof t=="function"?t():t)},be=(...e)=>{Ns&&Bs(...e)}}),Ds,an,B,Fn,Us,Ps,Ls,he=Y(()=>{Ds=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},an=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(r<2||i<2)return;let o=Ds.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=n?3:1;o<=a;o++){let u=r-o<0?1:e[r-o],d=i-o<0?1:t[i-o];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[a-o]=Math.max(u,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},B=class Sr{static size(t){return Sr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let r=t.length;if(r===0)return[];let i=new Array(r),a=r-1;for(;a>=0;){if(t[a]%n===0){i[a]=t[a]/n;break}if(n%t[a]!==0)throw new Error("cannot convert shape");i[a]=1,n/=t[a],a--}for(a--;a>=0;a--)i[a]=t[a];return i}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Sr.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Sr.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,r){let i=1;for(let a=n;a<r;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[a])}return i}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let r=new Array(n);r[n-1]=1,r[n-2]=t[n-1];for(let i=n-3;i>=0;--i)r[i]=r[i+1]*t[i+1];return r}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(r=>this.normalizeAxis(r,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(r=>t[r]):t.slice().reverse()}static padShape(t,n){let r=t.length;return t.map((i,a)=>i+n[a]+n[a+r])}static areEqual(t,n){return t.length!==n.length?!1:t.every((r,i)=>r===n[i])}},Fn=class Dn{static adjustPoolAttributes(t,n,r,i,a,s){if(!t&&r.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<n.length-2;o++)o>=r.length?r.push(n[o+2]):r[o]=n[o+2];for(let o=0;o<r.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=r[o]||s[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)Dn.adjustPadAndReturnShape(t[u+(s?1:2)],n[u],r[u],i[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,s,o){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let u=[n[0],n[1]];return Dn.computeShapeHelper(t,n,u,r,i,a,s,o),u}static computeConvOutputShape(t,n,r,i,a,s,o){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],n[0]];return Dn.computeShapeHelper(!1,t,u,r,i,a,s,o),u}static computeShapeHelper(t,n,r,i,a,s,o,u){if(t)for(let d=0;d<n.length-2;d++)r.push(1);else for(let d=0;d<n.length-2;d++)r.push(Dn.adjustPadAndReturnShape(n[d+2],i[d],a[d],s[d],o,d,d+n.length-2,u))}static adjustPadAndReturnShape(t,n,r,i,a,s,o,u){let d=r*(i-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+n-1)/n-1)*n+i-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-i)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/n+1)}},Us=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(r?(o=n[0],u=1):(o=n[1],u=0),n[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!an.isValidBroadcast(i,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Ps=-34028234663852886e22,Ls=34028234663852886e22}),jr,qs=Y(()=>{de(),jr=(e,t)=>new(Wn(t))(e)}),Kr,Xr,Yr,Gs,Zr,Ws,Qr,Jr,ei,Vs,Fs,cg=Y(()=>{de(),$t(),Kr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Xr=(e,t)=>{if(t==="int32")return e;let n=Kr.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Wn(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Yr=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let i=BigInt64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(r,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(r.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(r,Number);return new Uint8Array(i.buffer)}case"uint8":{if(r.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(r,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Gs=1,Zr=()=>Gs++,Ws=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Qr=(e,t)=>{let n=Kr.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,i)=>r*i)*n/8):0},Jr=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Qr(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Yr(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return new Uint8Array(n).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((r,i)=>r===n[i])}setIsDataConverted(e){this.isDataConverted=e}},ei=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=Ws.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);be("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Qr(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Xr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let r=(t=this.wrapper)!=null&&t.isDataConverted?Yr(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(r):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(r);return}else return r.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Vs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Zr();return this.tensorTrackersById.set(e,new ei(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=Zr(),s=new Jr({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ei(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,r,i,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,n)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let c=this.freeTensors.splice(d,1)[0];return c.sessionId=e,c}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let u=await o.createTensor({dataType:s??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Jr({sessionId:e,context:o,tensor:u,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Fs=(...e)=>new Vs(...e)}),yn,Hs,js,pg=Y(()=>{de(),Lt(),qs(),cg(),$t(),yn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Hs=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((i,a)=>i===r[a]&&e[i]===t[i])},js=class{constructor(e){this.tensorManager=Fs(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Hr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let n=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(n=>Hs(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(i=>i.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=yn.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=yn.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return jr(n,t)}}registerMLTensor(e,t,n,r){let i=yn.get(n);if(!i)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+n>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+n).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let c=Xr(new Uint8Array(d),"int64");p=new Int32Array(c.buffer),i.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(i,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=yn.get(Gt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>"u"?!1:n?!!(i!=null&&i.input.dataTypes.includes(r)):!!(i!=null&&i.output.dataTypes.includes(r))}flush(){}}}),ti=Y(()=>{}),ni,Hn,jn,Ks,Xs,ri,ii,Ys,Zs,hg=Y(()=>{$t(),ti(),ni=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Hn=[],jn=e=>Math.ceil(Number(e)/16)*16,Ks=e=>{for(let t=0;t<Hn.length;t++){let n=Hn[t];if(e<=n)return n}return Math.ceil(e/16)*16},Xs=1,ri=()=>Xs++,ii=async(e,t,n,r)=>{let i=jn(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,n)),u}else return new Uint8Array(o.slice(0,n))}finally{a.destroy()}},Ys=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ni)Hn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=jn(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(n,r,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=jn(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=ri();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ks(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(n);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:n,usage:t}):r=this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let s={id:ri(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await ii(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ni.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Zs=(...e)=>new Ys(...e)}),Qs,Se,Re=Y(()=>{Qs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Se=e=>new Qs(e)}),sn,Kn,Ue,Ge,ae,ze,ai,on,kt,re,_n,P,ne,Js,si,eo,to,fe=Y(()=>{de(),he(),sn=64,Kn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ue=(e,t=1)=>{let n=Kn(e,t);return typeof n=="string"?n:n[0]},Ge=(e,t=1)=>{let n=Kn(e,t);return typeof n=="string"?n:n[1]},ae=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:B.computeStrides(n)})}),t},ze=e=>e%4===0?4:e%2===0?2:1,ai=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,on=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,kt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,n,r)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,_n=(e,t,n,r,i)=>{let a=typeof n=="number",s=a?n:n.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Kn(t,i),p=typeof d=="string"?d:d[1],c=typeof d=="string"?d:d[0],f={indices:u,value:p,storage:c,tensor:t},m=W=>typeof W=="string"?W:`${W}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},_=a?"uniforms.":"",b=`${_}${e}_shape`,x=`${_}${e}_strides`,$="";for(let W=0;W<s-1;W++)$+=`
    let dim${W} = current / ${re(x,W,s)};
    let rest${W} = current % ${re(x,W,s)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;$+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=W=>(g.offsetToIndices=!0,s<2?W:`o2i_${e}(${W})`),E=[];if(s>=2)for(let W=s-1;W>=0;W--)E.push(`${re(x,W,s)} * (indices[${W}])`);let k=s<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=W=>(g.indicesToOffset=!0,s<2?W:`i2o_${e}(${W})`),v=(...W)=>s===0?"0u":`${f.indices}(${W.map(m).join(",")})`,R=(W,X)=>s<2?`${W}`:`${re(W,X,s)}`,O=(W,X,H)=>s<2?`${W}=${H};`:`${re(W,X,s)}=${H};`,F={},L=(W,X)=>{g.broadcastedIndicesToOffset=!0;let H=`${X.name}broadcastedIndicesTo${e}Offset`;if(H in F)return`${H}(${W})`;let V=[];for(let le=s-1;le>=0;le--){let $e=X.indicesGet("outputIndices",le+X.rank-s);V.push(`${R(x,le)} * (${$e} % ${R(b,le)})`)}return F[H]=`fn ${H}(outputIndices: ${X.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${H}(${W})`},G=(W,X)=>(()=>{if(f.storage===f.value)return`${e}[${W}]=${X};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${X}), select(0u, 0xFFFFFFFFu, ${X} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${X}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${X}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),A=W=>(()=>{if(f.storage===f.value)return`${e}[${W}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${W}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${W}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),q=s<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${p} {
    return ${A(`i2o_${e}(indices)`)};
  }`,j=s<2?"":(()=>{let W=o.map(H=>`d${H}: u32`).join(", "),X=o.map(H=>`d${H}`).join(", ");return`
  fn get_${e}(${W}) -> ${p} {
    return get_${e}ByIndices(${v(X)});
  }`})(),K=(...W)=>{if(W.length!==s)throw new Error(`indices length must be ${s}`);let X=W.map(m).join(",");return s===0?A("0u"):s===1?A(X[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${X})`)},oe=W=>s<2?A(W):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${W})`),N=s<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${p}) {
    ${G(`i2o_${e}(indices)`,"value")}
  }`,ee=s<2?"":(()=>{let W=o.map(H=>`d${H}: u32`).join(", "),X=o.map(H=>`d${H}`).join(", ");return`
  fn set_${e}(${W}, value: ${p}) {
    set_${e}ByIndices(${v(X)}, value);
  }`})();return{impl:()=>{let W=[],X=!1;return g.offsetToIndices&&(W.push(T),X=!0),g.indicesToOffset&&(W.push(k),X=!0),g.broadcastedIndicesToOffset&&(Object.values(F).forEach(H=>W.push(H)),X=!0),g.set&&(W.push(ee),X=!0),g.setByIndices&&(W.push(N),X=!0),g.get&&(W.push(j),X=!0),g.getByIndices&&(W.push(q),X=!0),!a&&X&&W.unshift(`const ${b} = ${f.indices}(${n.join(",")});`,`const ${x} = ${f.indices}(${B.computeStrides(n).join(",")});`),W.join(`
`)},type:f,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:L,indices:v,indicesGet:R,indicesSet:O,set:(...W)=>{if(W.length!==s+1)throw new Error(`indices length must be ${s}`);let X=W[s];if(typeof X!="string")throw new Error("value must be string");let H=W.slice(0,s).map(m).join(",");return s===0?G("0u",X):s===1?G(H[0],X):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${H}, ${X})`)},setByOffset:G,setByIndices:(W,X)=>s<2?G(W,X):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${X});`),get:K,getByOffset:A,getByIndices:oe,usage:r,name:e,strides:x,shape:b,rank:s}},P=(e,t,n,r=1)=>_n(e,t,n,"input",r),ne=(e,t,n,r=1)=>_n(e,t,n,"output",r),Js=(e,t,n)=>_n(e,t,n,"atomicOutput",1),si=(e,t,n,r=1)=>_n(e,t,n,"internal",r),eo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=sn){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},to=(e,t)=>new eo(e,t)}),no,oi,ro,io,ao,so,Xe,oo,uo,Mt=Y(()=>{de(),he(),Re(),fe(),no=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},oi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),ro=(e,t)=>B.sortBasedOnPerm(e,oi(e.length,t)),io=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let a=0;a<t;++a)i+=`a[${e[a]}]=i[${a}];`;return i+="return a;}"},ao=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},so=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Xe=(e,t)=>{let n=e.dataType,r=e.dims.length,i=oi(r,t),a=ro(e.dims,i),s=e.dims,o=a,u=r<2||so(i,e.dims),d;if(u)return d=g=>{let _=P("input",n,s,4),b=ne("output",n,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:d};let{newShape:p,newPerm:c}=ao(e.dims,i),f=B.areEqual(c,[2,3,1]),m=B.areEqual(c,[3,1,2]);if(p.length===2||f||m){s=f?[p[0],p[1]*p[2]]:m?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let g=16;return d=_=>{let b=P("a",n,s.length),x=ne("output",n,o.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:_},...ae(s,o)]}},getShaderSource:d}}return d=g=>{let _=P("a",n,s.length),b=ne("output",n,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(_,b)}

  ${io(i,r,_,b)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ae(s,o)]}},getShaderSource:d}},oo=(e,t)=>{no(e.inputs,t.perm),e.compute(Xe(e.inputs[0],t.perm))},uo=e=>Se({perm:e.perm})}),lo,co,po,ho,fo,mo,go,yo,_o,wo,nt,bo,$o,xo,vo,So,Io,To,Eo,ko,Mo,fg=Y(()=>{de(),he(),fe(),li(),Mt(),lo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},co={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},po={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ho={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},fo=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},mo=(e,t)=>{let n=[],r=e.length;for(let a=0;a<r;a++)t.indexOf(a)===-1&&n.push(e[a]);let i=t.map(a=>e[a]);return[n,i]},go=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},yo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},_o=(e,t)=>{let n=[];if(!yo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(r=>n.push(r))}return n},wo=(e,t,n,r,i,a,s)=>{let o=n[0].dims,u=B.size(a),d=B.size(s),p=P("_A",n[0].dataType,o),c=ne("output",i,a),f=64;u===1&&(f=256);let m=`
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

          var bestValue = f32(${po[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${lo[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${co[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${r==="mean"?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${ho[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},nt=(e,t,n,r)=>{let i=e.inputs.length===1?n:ui(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((m,g)=>g));let s=B.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],d=_o(o,e.inputs[0].dims.length);d.length>0&&(u=e.compute(Xe(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=fo(o.length,u.dims.length));let[p,c]=mo(u.dims,o),f=p;i.keepDims&&(f=go(p,s)),e.compute(wo(t,i.cacheKey,[u],r,e.inputs[0].dataType,f,c),{inputs:[u]})},bo=(e,t)=>{nt(e,"ReduceMeanShared",t,"mean")},$o=(e,t)=>{nt(e,"ReduceL1Shared",t,"l1")},xo=(e,t)=>{nt(e,"ReduceL2Shared",t,"l2")},vo=(e,t)=>{nt(e,"ReduceLogSumExpShared",t,"logSumExp")},So=(e,t)=>{nt(e,"ReduceMaxShared",t,"max")},Io=(e,t)=>{nt(e,"ReduceMinShared",t,"min")},To=(e,t)=>{nt(e,"ReduceProdShared",t,"prod")},Eo=(e,t)=>{nt(e,"ReduceSumShared",t,"sum")},ko=(e,t)=>{nt(e,"ReduceSumSquareShared",t,"sumSquare")},Mo=(e,t)=>{nt(e,"ReduceLogSumShared",t,"logSum")}}),rt,Co,Xn,ui,it,Ao,zo,Ro,Oo,No,Bo,Do,Uo,Po,Lo,at,qo,Go,Wo,Vo,Fo,Ho,jo,Ko,Xo,Yo,li=Y(()=>{de(),he(),Re(),fe(),fg(),rt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Co=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Xn=(e,t,n,r,i,a,s=!1,o=!1)=>{let u=[],d=n[0].dims,p=d.length,c=B.normalizeAxes(i,p),f=!o&&c.length===0;d.forEach((_,b)=>{f||c.indexOf(b)>=0?s&&u.push(1):u.push(_)});let m=u.length,g=B.size(u);return{name:e,shaderCache:t,getShaderSource:_=>{let b=[],x=P("_A",n[0].dataType,p),$=ne("output",a,m),T=r(x,$,c),S=T[2];for(let E=0,k=0;E<p;E++)f||c.indexOf(E)>=0?(s&&k++,S=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${x.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(b.push(`${x.indicesSet("input_indices",E,$.indicesGet("output_indices",k))};`),k++);return`

        ${_.registerUniform("output_size","u32").declareVariables(x,$)}

        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?$.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...ae(d,u)]})}},ui=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>n.push(Number(r))),Se({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},it=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:ui(i,n);e.compute(Xn(t,{hint:a.cacheKey,inputDependencies:["rank"]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Co:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Ao=(e,t)=>{rt(e.inputs),it(e,"ReduceLogSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},zo=(e,t)=>{rt(e.inputs),it(e,"ReduceL1",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},Ro=(e,t)=>{rt(e.inputs),it(e,"ReduceL2",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Oo=(e,t)=>{rt(e.inputs),it(e,"ReduceLogSumExp",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},No=(e,t)=>{rt(e.inputs),it(e,"ReduceMax",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},Bo=(e,t)=>{rt(e.inputs),it(e,"ReduceMean",t,(n,r,i)=>{let a=1;for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${a});`]})},Do=(e,t)=>{rt(e.inputs),it(e,"ReduceMin",t,(n,r,i)=>{let a=[];for(let s=0;s<n.rank;s++)(i.indexOf(s)>=0||i.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Uo=(e,t)=>{rt(e.inputs),it(e,"ReduceProd",t,(n,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},Po=(e,t)=>{rt(e.inputs),it(e,"ReduceSum",t,(n,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},Lo=(e,t)=>{rt(e.inputs),it(e,"ReduceSumSquare",t,(n,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},at=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?r*=e[a]:i*=e[a];return i<32&&r>1024},qo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bo(e,t):bo(e,t)},Go=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zo(e,t):$o(e,t)},Wo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ro(e,t):xo(e,t)},Vo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oo(e,t):vo(e,t)},Fo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):So(e,t)},Ho=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Do(e,t):Io(e,t)},jo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uo(e,t):To(e,t)},Ko=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):Eo(e,t)},Xo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lo(e,t):ko(e,t)},Yo=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ao(e,t):Mo(e,t)}}),di,Zo,Qo,ci,mg=Y(()=>{de(),Re(),li(),di=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Zo=(e,t)=>{di(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Xn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},Qo=(e,t)=>{di(e.inputs);let n=(r,i,a)=>{let s=[];for(let o=0;o<r.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Xn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},ci=e=>Se(e)}),Jo,Yn,eu,tu,nu,wn,ru,iu,pi=Y(()=>{de(),he(),ti(),fe(),Jo=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=n.dims[0],d=n.dims[1],p=n.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=i.dims[0]/3,f=c,m=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");c=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let g=d;if(c!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==c+f+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let _=0;if(s){if(f!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(_=s.dims[3])}let b=g+_,x=-1,$=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:_,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:x,inputHiddenSize:p,hiddenSize:c,vHiddenSize:m,headSize:Math.floor(c/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Yn=(e,t,n)=>t&&e?`
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
    `,eu=(e,t,n,r,i,a,s,o)=>{let u=ze(s?1:a),d=64,p=a/u;p<d&&(d=32);let c=Math.ceil(a/u/d),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:p},{type:12,data:c}],m=Ue(e.dataType,u),g=Ge(1,u),_=["type"];s&&_.push("type"),o&&_.push("type");let b=x=>{let $=ne("x",e.dataType,e.dims,u),T=[$],S=s?P("seq_lens",s.dataType,s.dims):void 0;S&&T.push(S);let E=o?P("total_sequence_length_input",o.dataType,o.dims):void 0;E&&T.push(E);let k=Ge(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${x.registerUniforms(C).declareVariables(...T)}
  ${x.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Yn(S,E,!1)}
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
        x[offset + i] = ${$.type.value}(${k}(1.0) / ${k}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${k}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${u}`,inputDependencies:_},getShaderSource:b,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},tu=(e,t,n,r,i,a,s,o,u)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],c=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,m=c?[a.batchSize,f,d,a.headSize]:void 0,g=a.nReps?a.nReps:1,_=a.scale===0?1/Math.sqrt(a.headSize):a.scale,b=ze(a.headSize),x=a.headSize/b,$=12,T={x:Math.ceil(d/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:_},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:g}],E=c&&r&&B.size(r.dims)>0,k=["type","type"];E&&k.push("type"),i&&k.push("type"),o&&k.push("type"),u&&k.push("type");let C=[{dims:p,dataType:t.dataType,gpuDataType:0}];c&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let v=R=>{let O=P("q",t.dataType,t.dims,b),F=P("key",n.dataType,n.dims,b),L=[O,F];if(E){let N=P("past_key",r.dataType,r.dims,b);L.push(N)}i&&L.push(P("attention_bias",i.dataType,i.dims));let G=o?P("seq_lens",o.dataType,o.dims):void 0;G&&L.push(G);let A=u?P("total_sequence_length_input",u.dataType,u.dims):void 0;A&&L.push(A);let q=ne("output",t.dataType,p),j=[q];c&&j.push(ne("present_key",t.dataType,m,b));let K=Ge(1,b),oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${O.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${O.type.storage}, ${$*$}>;
  ${R.registerUniforms(oe).declareVariables(...L,...j)}
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
    ${Yn(G,A,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${K}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&c?`
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${b};${i!==void 0};${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:C,dispatchGroup:T,programUniforms:S}),getShaderSource:v}},nu=(e,t,n,r,i,a,s=void 0,o=void 0)=>{let u=a+i.kvSequenceLength,d=i.nReps?i.nReps:1,p=i.vHiddenSize*d,c=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=c?[i.batchSize,f,u,i.headSize]:void 0,g=[i.batchSize,i.sequenceLength,p],_=12,b={x:Math.ceil(i.vHeadSize/_),y:Math.ceil(i.sequenceLength/_),z:i.batchSize*i.numHeads},x=[{type:12,data:i.sequenceLength},{type:12,data:u},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:d}],$=c&&r&&B.size(r.dims)>0,T=["type","type"];$&&T.push("type"),s&&T.push("type"),o&&T.push("type");let S=[{dims:g,dataType:t.dataType,gpuDataType:0}];c&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=k=>{let C=P("probs",t.dataType,t.dims),v=P("v",n.dataType,n.dims),R=[C,v];$&&R.push(P("past_value",r.dataType,r.dims));let O=s?P("seq_lens",s.dataType,s.dims):void 0;s&&R.push(O);let F=o?P("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(F);let L=[ne("output",t.dataType,g)];c&&L.push(ne("present_value",t.dataType,m));let G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;
  var<workgroup> tileQ: array<${C.type.value}, ${_*_}>;
  var<workgroup> tileV: array<${C.type.value}, ${_*_}>;
  ${k.registerUniforms(G).declareVariables(...R,...L)}
  ${k.mainStart([_,_,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Yn(O,F,!0)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:b,programUniforms:x}),getShaderSource:E}},wn=(e,t,n,r,i,a,s,o,u,d,p=void 0,c=void 0)=>{let f=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),m=f>1?s:void 0,g=f>1?o:void 0,_=f>1?d.pastSequenceLength:0,b=_+d.kvSequenceLength,x=u&&B.size(u.dims)>0?u:void 0,$=[t,n];m&&B.size(m.dims)>0&&$.push(m),x&&$.push(x),p&&$.push(p),c&&$.push(c);let T=e.compute(tu(f,t,n,m,x,d,_,p,c),{inputs:$,outputs:f>1?[-1,1]:[-1]})[0];e.compute(eu(T,d.batchSize,d.numHeads,_,d.sequenceLength,b,p,c),{inputs:p&&c?[T,p,c]:[T],outputs:[]});let S=[T,r];g&&B.size(g.dims)>0&&S.push(g),p&&S.push(p),c&&S.push(c),e.compute(nu(f,T,r,g,d,_,p,c),{inputs:S,outputs:f>1?[0,2]:[0]})},ru=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=c=>{let f=ne("output_q",u[0].dataType,n),m=ne("output_k",u[0].dataType,n),g=ne("output_v",u[0].dataType,n),_=P("input",u[0].dataType,u[0].dims),b=P("weight",u[1].dataType,u[1].dims),x=P("bias",u[2].dataType,u[2].dims),$=_.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${c.registerUniforms(T).declareVariables(_,b,x,f,m,g)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},iu=(e,t)=>{let n=Jo(e.inputs,t),[r,i,a]=ru(e,n);return wn(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),au,su,ou,uu,gg=Y(()=>{Ye(),de(),he(),Re(),fe(),au=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(r,i,a)=>{let s=i.length;if(s!==r.length)throw new Error(`${a}: num dimensions != ${s}`);i.forEach((o,u)=>{if(o!==r[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,"Invalid input scale"),n(e[2].dims,r,"Invalid input B"),n(e[3].dims,r,"Invalid input mean"),n(e[4].dims,r,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},su=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,s=r?ze(a[a.length-1]):1,o=i==="NHWC"&&a.length>1?s:1,u=B.size(a)/s,d=r,p=d?a.length:a,c=P("x",e[0].dataType,e[0].dims,s),f=P("scale",e[1].dataType,e[1].dims,o),m=P("bias",e[2].dataType,e[2].dims,o),g=P("inputMean",e[3].dataType,e[3].dims,o),_=P("inputVar",e[4].dataType,e[4].dims,o),b=ne("y",e[0].dataType,p,s),x=()=>{let T="";if(r)T=`let cOffset = ${a.length===1?"0u":i==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")T=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<f.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return T},$=T=>`
  const epsilon = ${n};
  ${T.registerUniform("outputSize","u32").declareVariables(c,f,m,g,_,b)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${_.getByOffset("cOffset")};
    let x = ${c.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ae(a)]:[{type:12,data:u}]})}},ou=e=>Se(e),uu=(e,t)=>{let{inputs:n,outputCount:r}=e,i=ou({...t,outputCount:r});if(Ee.webgpu.validateInputContent&&au(n,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(su(n,i))}}),lu,du,cu,yg=Y(()=>{he(),fe(),lu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},du=e=>{let t=e[0].dims,n=e[0].dims[2],r=B.size(t)/4,i=e[0].dataType,a=P("input",i,t,4),s=P("bias",i,[n],4),o=P("residual",i,t,4),u=ne("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:d=>`
  const channels = ${n}u / 4;
  ${d.declareVariables(a,s,o,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},cu=e=>{lu(e.inputs),e.compute(du(e.inputs))}}),pu,ve,hu,fu,mu,gu,yu,_u,wu,bu,$u,xu,vu,Su,Iu,Tu,bn,Eu,Zn,ku,Mu,Cu,Au,zu,Ru,Ou,Nu,Bu,Du,Uu,Pu,Lu,qu,Gu,Wu,hi,Vu,fi,mi,Fu,Hu,ju,Ku,Xu,Yu,gi=Y(()=>{de(),he(),Re(),fe(),pu=(e,t,n,r,i,a,s)=>{let o=Math.ceil(t/4),u="";typeof i=="string"?u=`${i}(a)`:u=i("a");let d=P("inputData",n,[o],4),p=ne("outputData",r,[o],4),c=[{name:"vec_size",type:"u32"}];return s&&c.push(...s),`
      ${e.registerUniforms(c).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},ve=(e,t,n,r,i,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>pu(d,B.size(e.dims),e.dataType,a,n,r,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(d[0].dims)/64/4)},programUniforms:u})}},hu=e=>{e.compute(ve(e.inputs[0],"Abs","abs"))},fu=e=>{e.compute(ve(e.inputs[0],"Acos","acos"))},mu=e=>{e.compute(ve(e.inputs[0],"Acosh","acosh"))},gu=e=>{e.compute(ve(e.inputs[0],"Asin","asin"))},yu=e=>{e.compute(ve(e.inputs[0],"Asinh","asinh"))},_u=e=>{e.compute(ve(e.inputs[0],"Atan","atan"))},wu=e=>{e.compute(ve(e.inputs[0],"Atanh","atanh"))},bu=e=>Se(e),$u=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ve(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},xu=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Se({min:t,max:n})},vu=(e,t)=>{let n=t||xu(e.inputs),r=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Su=e=>{e.compute(ve(e.inputs[0],"Ceil","ceil"))},Iu=e=>{e.compute(ve(e.inputs[0],"Cos","cos"))},Tu=e=>{e.compute(ve(e.inputs[0],"Cosh","cosh"))},bn=e=>Se(e),Eu=(e,t)=>{let n=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Zn=(e="f32")=>`
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
}`,ku=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Zn(t)))},Mu=e=>{e.compute(ve(e.inputs[0],"Exp","exp"))},Cu=e=>{e.compute(ve(e.inputs[0],"Floor","floor"))},Au=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Zn(t)))},zu=(e,t)=>{let n=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Ru=e=>{e.compute(ve(e.inputs[0],"Not",t=>`!${t}`))},Ou=e=>{e.compute(ve(e.inputs[0],"Neg",t=>`-${t}`))},Nu=e=>{e.compute(ve(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Bu=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},Du=e=>{e.compute(ve(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Uu=e=>Se(e),Pu=(e,t)=>{let n=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"HardSigmoid",r=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${r} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Lu=e=>{e.compute(ve(e.inputs[0],"Sin","sin"))},qu=e=>{e.compute(ve(e.inputs[0],"Sinh","sinh"))},Gu=e=>{e.compute(ve(e.inputs[0],"Sqrt","sqrt"))},Wu=e=>{e.compute(ve(e.inputs[0],"Tan","tan"))},hi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Vu=e=>{e.compute(ve(e.inputs[0],"Tanh",hi))},fi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${hi("v")};
}
`,mi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Fu=e=>{let t=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"FastGelu",mi,fi(t),void 0,e.inputs[0].dataType))},Hu=(e,t)=>{let n=Ge(e.inputs[0].dataType);return e.compute(ve(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${n}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},ju=e=>{e.compute(ve(e.inputs[0],"Log","log"))},Ku=(e,t)=>`
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
`,Xu=e=>`quick_gelu_impl(${e})`,Yu=(e,t)=>{let n=Ge(e.inputs[0].dataType);e.compute(ve(e.inputs[0],"QuickGelu",Xu,Ku(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Zu,Qu,Ju,_g=Y(()=>{he(),fe(),gi(),Zu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Qu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=P("input",e[0].dataType,e[0].dims,4),r=P("bias",e[0].dataType,[e[0].dims[2]],4),i=ne("output",e[0].dataType,t,4),a=B.size(t)/4,s=Ue(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(n,r,i)}

  ${Zn(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ju=e=>{Zu(e.inputs),e.compute(Qu(e.inputs))}}),el,tl,st,nl,rl,il,al,sl,ol,ul,ll,dl,cl,wg=Y(()=>{de(),he(),fe(),el=(e,t,n,r,i,a,s,o,u,d,p,c)=>{let f,m;typeof o=="string"?f=m=($,T)=>`${o}((${$}),(${T}))`:typeof o=="function"?f=m=o:(f=o.scalar,m=o.vector);let g=ne("outputData",p,r.length,4),_=P("aData",u,t.length,4),b=P("bData",d,n.length,4),x;if(i)if(a){let $=B.size(t)===1,T=B.size(n)===1,S=t.length>0&&t[t.length-1]%4===0,E=n.length>0&&n[n.length-1]%4===0;$||T?x=g.setByOffset("global_idx",m($?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"),T?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):x=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",m(s||S?_.getByOffset("offsetA / 4u"):`${_.type.value}(${_.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=g.setByOffset("global_idx",m(_.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(T,S,E="")=>{let k=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${g.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${_.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let offsetB${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${E}(${f(k,C)});
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
      }`},tl=(e,t,n,r,i,a,s=n.dataType)=>{let o=n.dims.map(Number),u=r.dims.map(Number),d=!B.areEqual(o,u),p=o,c=B.size(o),f=!1,m=!1,g=[d];if(d){let _=an.calcShape(o,u,!1);if(!_)throw new Error("Can't perform binary op on the given tensors");p=_.slice(),c=B.size(p);let b=B.size(o)===1,x=B.size(u)===1,$=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;g.push(b),g.push(x),g.push($),g.push(T);let S=1;for(let E=1;E<p.length;E++){let k=o[o.length-E],C=u[u.length-E];if(k===C)S*=k;else break}S%4===0?(m=!0,f=!0):(b||x||$||T)&&(f=!0)}else f=!0;return g.push(f),{name:e,shaderCache:{hint:t+g.map(_=>_.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:_=>el(_,o,u,p,f,d,m,i,n.dataType,r.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(p)/4)},...ae(o,u,p)]})}},st=(e,t,n,r,i,a)=>{e.compute(tl(t,i??"",e.inputs[0],e.inputs[1],n,r,a))},nl=e=>{st(e,"Add",(t,n)=>`${t}+${n}`)},rl=e=>{st(e,"Div",(t,n)=>`${t}/${n}`)},il=e=>{st(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},al=e=>{st(e,"Mul",(t,n)=>`${t}*${n}`)},sl=e=>{let t=P("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;st(e,"Pow",{scalar:(n,r)=>`pow_custom(${n},${r})`,vector:(n,r)=>`pow_vector_custom(${n},${r})`},`
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
      `)},ol=e=>{st(e,"Sub",(t,n)=>`${t}-${n}`)},ul=e=>{st(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},ll=e=>{st(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},dl=e=>{st(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},cl=e=>{st(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),pl,hl,fl,ml,gl,yl,bg=Y(()=>{de(),he(),Re(),fe(),pl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,r=e[n],i=r.dataType,a=r.dims.length;e.forEach((s,o)=>{if(o!==n){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==r.dims[d])throw new Error("non concat dimensions must match")})}})},hl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,fl=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset("global_idx",e[i].getByIndices("indices"));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},ml=(e,t,n,r)=>{let i=B.size(n),a=new Array(e.length),s=new Array(e.length),o=0,u=[],d=[],p=[{type:12,data:i}];for(let _=0;_<e.length;++_)o+=e[_].dims[t],a[_]=o,d.push(e[_].dims.length),s[_]=P(`input${_}`,r,d[_]),u.push("rank"),p.push({type:12,data:a[_]});for(let _=0;_<e.length;++_)p.push(...ae(e[_].dims));p.push(...ae(n));let c=ne("output",r,n.length),f=c.indicesGet("indices",t),m=Array.from(Array(a.length).keys()).map(_=>`uniforms.sizeInConcatAxis${_}`).join(","),g=_=>`

  ${(()=>{_.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)_.registerUniform(`sizeInConcatAxis${b}`,"u32");return _.declareVariables(...s,c)})()}

  ${hl(a.length,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${m});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${fl(s,c)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:g}},gl=(e,t)=>{let n=e.inputs,r=n[0].dims,i=B.normalizeAxis(t.axis,r.length);pl(n,i);let a=r.slice();a[i]=n.reduce((o,u)=>o+(u.dims.length>i?u.dims[i]:0),0);let s=n.filter(o=>B.size(o.dims)>0);e.compute(ml(s,i,a,n[0].dataType),{inputs:s})},yl=e=>Se({axis:e.axis})}),Vt,Ft,Ht,yi,jt=Y(()=>{de(),he(),Vt=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ft=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ht=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},yi=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t==="Clip"){let[n,r]=(e==null?void 0:e.activation_params)||[Ps,Ls];return{activation:t,clipMax:r,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),Le,_l,_i=Y(()=>{Le=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},_l=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),wl,$g=Y(()=>{wl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),$n,wi,bi=Y(()=>{de(),he(),fe(),jt(),$n=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((s,o)=>`
      if (${re(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,re(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},wi=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],d=o[o.length-1],p=s[s.length-1],c=ze(d),f=ze(p),m=ze(u),g=B.size(n)/c/m,_=e.length>2,b=r?r.slice(0,-2):n.slice(0,-2),x=[B.size(b),u,d],$=[{type:12,data:g},{type:12,data:u},{type:12,data:d},{type:12,data:p}];Ft(t,$),$.push(...ae(b,s,o)),_&&$.push(...ae(e[2].dims)),$.push(...ae(x));let T=S=>{let E=si("batch_dims",e[0].dataType,b.length),k=P("a",e[0].dataType,s.length,f),C=P("b",e[1].dataType,o.length,c),v=ne("output",e[0].dataType,x.length,c),R=Ue(v.type.tensor),O=Vt(t,v.type.value,R),F=[k,C],L="";if(_){let q=i?c:1;F.push(P("bias",e[2].dataType,e[2].dims.length,q)),L=`${i?`value += bias[col / ${q}];`:`value += ${v.type.value}(bias[row + i]);`}`}let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ht(t,G);let A=()=>{let q=`var a_data: ${k.type.value};`;for(let j=0;j<f;j++)q+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${c}];`;for(let j=0;j<m;j++){q+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${f}];`;for(let K=0;K<f;K++)q+=`
            values[${j}] = fma(${C.type.value}(a_data${f===1?"":`[${K}]`}), b_data${K}, values[${j}]);
`}return q};return`
  ${S.registerUniforms(G).registerInternalVariables(E).declareVariables(...F,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${k.type.indices};
    ${$n("a_indices",k,k.rank-2,E.rank,"batch_indices")}
    ${k.indicesSet("a_indices",k.rank-2,0)}
    ${k.indicesSet("a_indices",k.rank-1,0)}
    let a_offset = ${k.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${$n("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${A()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${L}
      ${O}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${c};${f};${m};${i}`,inputDependencies:_?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:T}}}),bl,$l,$i,xi,xl,vi,vl,Qn,Si=Y(()=>{de(),he(),fe(),jt(),bi(),_i(),bl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,$l=(e,t)=>e?`
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
        }`,$i=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=i?u:a,c=i?a:u,f=p/t[0],m=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
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
          ${bl(i,r)}
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

          ${$l(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},xi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,xl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",vi=(e,t,n="f32",r,i=!1,a=32,s=!1,o=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],c=i?d:a,f=i?a:d;if(!(f%t[1]===0&&c%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let m=f/t[1],g=c/t[0],_=a/t[1],b=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          ${xi(i,r)}
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
      ${xi(i,r)}
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
      ${xl(i)}
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
`},vl=(e,t,n,r,i=!1)=>{let[a,s,o,u]=r,d=Ue(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Le(e,d)} {
      var value = ${Le(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${$n("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Le(e,d)} {
      var value = ${Le(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${$n("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Le(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${Le(e,d)}(bias[row])`};`:""}
        ${n}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Qn=(e,t,n,r,i=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),d=o.slice(0,-2),p=r?r.slice(0,-2):n.slice(0,-2),c=B.size(p),f=s[s.length-2],m=s[s.length-1],g=o[o.length-1],_=m%4===0&&g%4===0,b=f<=8?[4,1,1]:[4,4,1],x=[8,8,1],$=[Math.ceil(g/x[0]/b[0]),Math.ceil(f/x[1]/b[1]),Math.ceil(c/x[2]/b[2])],T=_?4:1,S=[...u,f,m/T],E=S.length,k=[...d,m,g/T],C=k.length,v=[c,f,g/T],R=[{type:6,data:f},{type:6,data:g},{type:6,data:m}];Ft(t,R),R.push(...ae(p,S,k));let O=["rank","rank"],F=e.length>2;F&&(R.push(...ae(e[2].dims)),O.push("rank")),R.push(...ae(v));let L=G=>{let A=p.length,q=si("batchDims",e[0].dataType,A,1),j=Ue(e[0].dataType),K=P("a",e[0].dataType,E,T),oe=P("b",e[1].dataType,C,T),N=ne("result",e[0].dataType,v.length,T),ee=[K,oe];if(F){let le=i?T:1;ee.push(P("bias",e[2].dataType,e[2].dims.length,le))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ht(t,W);let X=Ue(N.type.tensor),H=Vt(t,N.type.value,X),V=vl(T,F,H,[q,K,oe,N],i);return`
  ${G.registerUniforms(W).registerInternalVariables(q).declareVariables(...ee,N)}
  ${V}
  ${_?$i(b,x,j,q):vi(b,x,j,q)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${_};${i}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:R}),getShaderSource:L}}}),Sl,Il,xg=Y(()=>{de(),$t(),fe(),jt(),_i(),$g(),Si(),Sl=(e,t,n,r,i=!1,a,s=4,o=4,u=4,d="f32")=>{let p=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},c=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=e?`
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
    var resData = ${Le(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${_}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,T=e?t&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Le(s,d)}(0.0);`:r&&n?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Le(s,d)}(0.0);`,S=e?r&&n?c(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${c(o)}
    }
    return ${Le(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${c(o)}
    }
    return ${Le(o,d)}(0.0);`,E=Le(u,d),k=Le(e?s:o,d),C=Le(e?o:s,d),v=Vt(a,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${k} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${_l(i)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Il=(e,t,n,r,i,a,s,o,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],c=n[0],f=d?n[2]:n[3],m=d?n[1]:n[2],g=d?n[3]:n[1],_=d&&(p%4===0||p%3===0)&&g%4===0,b=d?g:f*m,x=d?f*m:g,$=[8,8,1],T=r<=8?[4,1,1]:[4,4,1],S=[Math.ceil(b/$[0]/T[0]),Math.ceil(x/$[1]/T[1]),Math.ceil(c/$[2]/T[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=_?d&&p%4!==0?3:4:1,k=$[1]*T[1],C=$[0]*T[0],v=Math.max($[0]*E,$[1]),R=r%k===0,O=i%C===0,F=a%v===0,L=_?[E,4,4]:[1,1,1],G=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ft(t,G),G.push(...ae(e[0].dims,e[1].dims));let A=["rank","rank"];s&&(G.push(...ae(e[2].dims)),A.push("rank")),G.push(...ae(n));let q=j=>{let K=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ht(t,K);let oe=_?4:1,N=Ue(e[0].dataType),ee=`
      fn setOutputAtIndex(flatIndex : i32, value : ${_?`vec4<${N}>`:N}) {
        result[flatIndex] = ${_?`vec4<${N}>`:N}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${_?`vec4<${N}>`:N}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${_?"/ 4":""}, value);
      }`,W=P("x",e[0].dataType,e[0].dims.length,E===3?1:E),X=P("w",e[1].dataType,e[1].dims.length,oe),H=[W,X],V=ne("result",e[0].dataType,n.length,oe);if(s){let le=P("bias",e[2].dataType,e[2].dims.length,oe);H.push(le),ee+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${_?`vec4<${N}>`:N} {
          return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
        }`}return`
        ${wl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(K).declareVariables(...H,V)}
        ${ee}
        ${Sl(d,R,O,F,s,t,L[0],L[1],L[2],N)}
        ${_?$i(T,$,N,void 0,!d,v):vi(T,$,N,void 0,!d,v,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${_};${R};${O};${F};${k};${C};${v}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:u?u(n):n,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:G}),getShaderSource:q}}}),Tl,Ii,xn,El,Ti,kl,Ml,Cl,vg=Y(()=>{de(),$t(),he(),fe(),jt(),_i(),Tl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ii=e=>typeof e=="number"?[e,e,e]:e,xn=(e,t)=>t<=1?e:e+(e-1)*(t-1),El=(e,t,n,r=1)=>{let i=xn(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ti=(e,t,n,r,i)=>{i==null&&(i=El(e,t[0],r[0]));let a=[0,0,0,n];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*i)/r[s]+1));return a},kl=(e,t,n,r,i,a,s,o,u,d)=>{let p,c,f,m;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Ti([t,n,r,1],[o,u,d],1,[i,a,s],e);c=g[0],f=g[1],m=g[2]}else if(Array.isArray(e)){if(!e.every((_,b,x)=>_===x[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Ti([t,n,r,1],[o,u,d],1,[i,a,s],e[0]);c=g[0],f=g[1],m=g[2]}else if(e==="SAME_UPPER"){c=Math.ceil(t/i),f=Math.ceil(n/a),m=Math.ceil(r/s);let g=(c-1)*i+o-t,_=(f-1)*a+u-n,b=(m-1)*s+d-r,x=Math.floor(g/2),$=g-x,T=Math.floor(_/2),S=_-T,E=Math.floor(b/2),k=b-E;p={top:T,bottom:S,left:E,right:k,front:x,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:c,outHeight:f,outWidth:m}},Ml=(e,t,n,r,i,a=!1,s="channelsLast")=>{let o,u,d,p,c;if(s==="channelsLast")[o,u,d,p,c]=e;else if(s==="channelsFirst")[o,c,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[f,,m,g,_]=t,[b,x,$]=Ii(n),[T,S,E]=Ii(r),k=xn(m,T),C=xn(g,S),v=xn(_,E),{padInfo:R,outDepth:O,outHeight:F,outWidth:L}=kl(i,u,d,p,b,x,$,k,C,v),G=a?f*c:f,A=[0,0,0,0,0];return s==="channelsFirst"?A=[o,G,O,F,L]:s==="channelsLast"&&(A=[o,O,F,L,G]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:c,outDepth:O,outHeight:F,outWidth:L,outChannels:G,padInfo:R,strideDepth:b,strideHeight:x,strideWidth:$,filterDepth:m,filterHeight:g,filterWidth:_,effectiveFilterDepth:k,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:T,dilationHeight:S,dilationWidth:E,inShape:e,outShape:A,filterShape:t}},Cl=(e,t,n,r,i,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:n.map((b,x)=>x)},d=[Math.ceil(Tl(u.x.map(b=>n[b]))/o[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,c=B.size(n),f=[{type:12,data:c},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Ft(t,f),f.push(...ae(e[0].dims,e[1].dims));let m=["rank","rank"],g=e.length===3;g&&(f.push(...ae(e[2].dims)),m.push("rank")),f.push(...ae(n));let _=b=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ht(t,x);let $=1,T=Ue(e[0].dataType),S=P("x",e[0].dataType,e[0].dims.length,p),E=P("W",e[1].dataType,e[1].dims.length,$),k=[S,E],C=ne("result",e[0].dataType,n.length,$),v="";if(g){let F=P("bias",e[2].dataType,e[2].dims.length,$);k.push(F),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?re("coords",4,5):re("coords",1,5)}];
        }`}let R=Le(p,T),O=Vt(t,R,T);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${b.registerUniforms(x).declareVariables(...k,C)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,S.rank)};
              let d2 = ${s?re("coords",S.rank-1,S.rank):re("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?re("coords",1,S.rank):re("coords",2,S.rank)},
              ${s?re("coords",2,S.rank):re("coords",3,S.rank)},
              ${s?re("coords",3,S.rank):re("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?re("uniforms.x_shape",1,S.rank):re("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?re("uniforms.x_shape",2,S.rank):re("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?re("uniforms.x_shape",3,S.rank):re("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?re("uniforms.x_shape",4,S.rank):re("uniforms.x_shape",1,S.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${g}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:_}}}),Al,zl,Sg=Y(()=>{de(),he(),fe(),jt(),Al=(e,t,n,r)=>{let i=e.length>2,a=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",d=u?n[3]:n[1],p=d/t.group,c=u&&p>=4?ze(d):1,f=B.size(n)/c,m=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Ft(t,m),m.push(...ae(s,[o[0],o[1],o[2],o[3]/c]));let g=i?["rank","rank","rank"]:["rank","rank"];m.push(...ae([n[0],n[1],n[2],n[3]/c]));let _=b=>{let x=ne("output",e[0].dataType,n.length,c),$=Ue(x.type.tensor),T=Vt(t,x.type.value,$),S=P("x",e[0].dataType,s.length),E=P("w",e[1].dataType,o.length,c),k=[S,E];i&&k.push(P("b",e[2].dataType,e[2].dims,c));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ht(t,C);let v=u?`
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

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(C).declareVariables(...k,x)}

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
    ${T}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${c}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},zl=(e,t,n,r)=>{let i=e.length>2,a=ze(n[3]),s=ze(n[2]),o=B.size(n)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[n[0],n[1],n[2],n[3]/a],c=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ft(t,c),c.push(...ae(u,d,p));let f=(s-1)*t.strides[1]+d[1],m=g=>{let _=ne("output",e[0].dataType,p.length,a),b=Ue(_.type.tensor),x=Vt(t,_.type.value,b),$=P("x",e[0].dataType,u.length,a),T=P("w",e[1].dataType,d.length,a),S=[$,T];i&&S.push(P("b",e[2].dataType,e[2].dims,a));let E=i?"value += b[output_channel];":"",k=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ht(t,k),`
  ${g.registerUniforms(k).declareVariables(...S,_)}
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
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${x}
      ${_.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${f};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:m}}}),Rl,Jn,Ol,er,Ei,ki,Nl,Bl,Mi,Ig=Y(()=>{he(),xg(),vg(),Si(),Sg(),jt(),bi(),Mt(),Rl=(e,t,n,r,i,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,d=t[0],p=t.slice(2).map((f,m)=>f+(f-1)*(n[m]-1)),c=o.map((f,m)=>f+r[m]+r[m+u]).map((f,m)=>Math.floor((f-p[m]+i[m])/i[m]));return c.splice(0,0,s),c.splice(a?3:1,0,d),c},Jn=[2,3,1,0],Ol=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},er=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let a=2;a<t[1].dims.length;++a)n[a-2]===0&&(n[a-2]=t[1].dims[a]);let r=e.pads.slice();Fn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Ei=e=>{let t=yi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},ki=(e,t,n,r)=>{let i=n.format==="NHWC",a=Rl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let k=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(Xe(t[1],Jn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),k.push(C)}else k.push(t[1]);t.length===3&&k.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(zl(k,n,a,r),{inputs:k}):e.compute(Al(k,n,a,r),{inputs:k});return}let s=t.length===3,o=t[0].dims[i?1:2],u=t[0].dims[i?2:3],d=t[0].dims[i?3:1],p=t[1].dims[2],c=t[1].dims[3],f=a[i?1:2],m=a[i?2:3],g=a[i?3:1],_=i&&p===o&&c===u&&n.pads[0]===0&&n.pads[1]===0;if(_||p===1&&c===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let k=a[0],C,v,R,O=[];if(i){let G=e.kernelCustomData.wT??e.compute(Xe(t[1],Jn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),_){let A=o*u*d;C=t[0].reshape([1,k,A]),v=G.reshape([1,A,g]),R=[1,k,g]}else C=t[0].reshape([k,o*u,d]),v=G.reshape([1,d,g]),R=[k,f*m,g];O.push(C),O.push(v)}else C=t[0].reshape([k,d,o*u]),v=t[1].reshape([1,g,d]),R=[k,g,f*m],O.push(v),O.push(C);s&&O.push(t[2]);let F=R[2],L=O[0].dims[O[0].dims.length-1];F<8&&L<8?e.compute(wi(O,n,a,R,i,r),{inputs:O}):e.compute(Qn(O,n,a,R,i,r),{inputs:O});return}let b=!0,x=e.kernelCustomData.wT??e.compute(Xe(t[1],Jn),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let $=[t[0],x];s&&$.push(t[2]);let T=i?f*m:g,S=i?g:f*m,E=p*c*d;e.compute(Il($,n,a,T,S,E,s,b,r),{inputs:$})},Nl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=er({...t,pads:i,strides:a,dilations:s,kernelShape:o},r);ki(e,r,u,d=>n?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Bl=(e,t,n)=>{let r=n.format==="NHWC"?"channelsLast":"channelsFirst",i=er(n,t),a=n.autoPad==="NOTSET"?n.pads:n.autoPad,s=Ml(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Cl(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Mi=(e,t)=>{if(Ol(e.inputs,t),e.inputs[0].dims.length===3)Nl(e,t);else if(e.inputs[0].dims.length===5)Bl(e,e.inputs,t);else{let n=er(t,e.inputs);ki(e,e.inputs,n)}}}),Dl,Tg=Y(()=>{de(),$t(),he(),fe(),Dl=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,d=o[3],p=a?ze(u):1,c=a&&d===1&&u>=4,f=c?Math.floor(u/4)*4:Math.floor(u/p)*p,m=u-f,g=a?ze(d):1,_=a?d===1?p:g:1,b=B.size(i)/g,x=[Math.ceil(b/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let $=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],k=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:b},{type:12,data:T},{type:12,data:S},{type:12,data:E},{type:12,data:k},{type:6,data:C},{type:12,data:f},{type:12,data:u},{type:12,data:d},...ae(e[0].dims,e[1].dims)];r&&(v.push(...ae(e[2].dims)),$.push("rank")),v.push(...ae(i));let R=O=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],L=Ue(e[0].dataType),G=a?1:2,A=a?2:3,q=a?3:1,j=P("W",e[1].dataType,e[1].dims.length,_),K=P("Dy",e[0].dataType,e[0].dims.length,p),oe=[K,j];r&&oe.push(P("bias",e[2].dataType,[i[q]].length,g));let N=ne("result",e[0].dataType,i.length,g),ee=()=>{let H="";if(c)p===4?H+=`
        let xValue = ${K.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?H+=`
          dotProd = dotProd + dot(vec4<${L}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}), vec4<${L}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(H+=`
          dotProd = dotProd + dot(vec4<${L}>(${K.getByOffset("x_offset")}, ${K.getByOffset("x_offset + 1u")}, ${K.getByOffset("x_offset + 2u")}, ${K.getByOffset("x_offset + 3u")}), vec4<${L}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(H+=`
                  let xValue = ${a?K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):K.get("batch","inputChannel","idyR","idyC")};
        `,p===1)H+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${_}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<p;V++)H+=`
            let wValue${V} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return H},W=()=>{if(m===0)return"";if(!c)throw new Error(`packInputAs4 ${c} is not true.`);let H="";if(p===1){H+="dotProd = dotProd";for(let V=0;V<m;V++)H+=`
            + ${K.getByOffset(`x_offset + ${V}`)} * ${j.getByOffset(`w_offset + ${V}`)}`;H+=";"}else if(p===2){if(m!==2)throw new Error(`Invalid inputChannelsRemainder ${m}.`);H+=`
          let xValue = ${K.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return H},X=`
            let outputIndices = ${N.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${N.indicesGet("outputIndices",0)};
            let d1 = ${N.indicesGet("outputIndices",q)};
            let r = ${N.indicesGet("outputIndices",G)};
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
              let dyR = (${L}(dyRCorner) + ${L}(wR)) / ${L}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${L}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
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
                if (dyC < 0.0 || dyC >= ${L}(uniforms.Dy_shape[${A}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${c?`
                var x_offset = ${K.indicesToOffset(`${K.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${_};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${c?4:p}) {
                  ${ee()}
                  inputChannel = inputChannel + ${c?4:p};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${N.setByOffset("global_idx","value")};
          `;return`
    ${O.registerUniforms(F).declareVariables(...oe,N)}
      ${O.mainStart()}
      ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${X}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${_}${g}${c}${m}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:R}}}),Ul,Pl,Ll,Ci,ql,Gl,Ai,Wl,Vl,Eg=Y(()=>{Tg(),jt(),Mt(),Ul=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Pl=(e,t,n,r,i)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(n[r]=a,n[i]=e-a):t==="SAME_LOWER"&&(n[r]=e-a,n[i]=a)},Ll=(e,t,n,r,i,a,s,o,u,d)=>{let p=e.length-2,c=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let f=e[0],m=t[o?3:1]*i;for(let g=0,_=e.length-p-(o?1:0);g<p;++g,++_){let b=e[_],x=c?b*s[g]:d[g],$=Ul(b,s[g],a[g],t[_],n[g],x);Pl($,r,a,g,g+p),c&&d.push(s[g]*(b-1)+u[g]+(t[_]-1)*n[g]+1-a[g]-a[g+p])}d.splice(0,0,f),d.splice(o?3:1,0,m)},Ci=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((c,f)=>c*f,1)===0){n.length=0;for(let c=2;c<t[1].dims.length;++c)n.push(t[1].dims[c])}let r=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;u=new Array(c).fill(1)}let d=e.strides.slice();if(d.reduce((c,f)=>c+f,0)===0){let c=t[0].dims.length-2;d=new Array(c).fill(1)}Ll(o,n,u,e.autoPad,e.group,i,d,r,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:n,pads:i,outputPadding:s,outputShape:a,dilations:u,strides:d}),p},ql=e=>{let t=yi(e),n=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,c=e.outputShape;return{autoPad:r,format:n,dilations:i,group:a,kernelShape:s,outputPadding:p,outputShape:c,pads:o,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Gl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(n!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ai=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Xe(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Dl(a,n,r),{inputs:a})},Wl=(e,t)=>{let n=t.format==="NHWC",r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),i=[1].concat(i);let u=t.outputPadding;u=[0].concat(u);let d=Ci({...t,pads:o,strides:s,dilations:a,kernelShape:i,outputPadding:u},r);Ai(e,r,d,p=>n?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Vl=(e,t)=>{if(Gl(e.inputs,t),e.inputs[0].dims.length===3)Wl(e,t);else{let n=Ci(t,e.inputs);Ai(e,e.inputs,n)}}}),Fl,Hl,jl,kg=Y(()=>{de(),he(),Re(),fe(),Fl=(e,t,n,r)=>{let i=B.size(t),a=t.length,s=P("input",e,a),o=ne("output",e,a),u=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),d=B.normalizeAxis(u,a),p=c=>{let f=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,m=re("uniforms.input_shape","uniforms.axis",a),g=r.reverse?f+(r.exclusive?" + 1":""):"0",_=r.reverse?m:f+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ae(t,t)]}),getShaderSource:p}},Hl=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Fl(r,n,i,t),{inputs:[0]})},jl=e=>{let t=e.exclusive===1,n=e.reverse===1;return Se({exclusive:t,reverse:n})}}),Kl,Xl,Yl,Zl,Ql,Mg=Y(()=>{de(),he(),Re(),fe(),Kl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Xl=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let a=0;a<t;++a)i.push(n.indicesSet("a",e[a],`i[${a}]`));return i.push("return a;}"),i.join(`
`)},Yl=(e,t)=>{let n,r,i,a,s,o,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([n,r,i,a]=e.dims,s=p?[n,r,i,d,d,a/d**2]:[n,r,i,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[n,d,d,a/d**2,r,i]:[n,a/d**2,d,d,r,i],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=e.reshape(s),f=c.dims.length,m=e.dataType,g=P("a",m,f),_=ne("output",m,f),b=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(g,_)}

  ${Xl(o,f,g,_)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let $=u?[n,r*d,i*d,a/d**2]:[n,a/d**2,r*d,i*d],T=B.size($),S=c.dims,E=B.sortBasedOnPerm(S,o);return{outputs:[{dims:$,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ae(S,E)]}},getShaderSource:b}},Zl=(e,t)=>{Kl(e.inputs),e.compute(Yl(e.inputs[0],t))},Ql=e=>Se({blocksize:e.blocksize,mode:e.mode,format:e.format})}),tr,vn,zi,Jl,ed,td,nd,Ri,rd,id,ad,Cg=Y(()=>{de(),he(),Re(),fe(),tr="[a-zA-Z]|\\.\\.\\.",vn="("+tr+")+",zi="^"+vn+"$",Jl="("+vn+",)*"+vn,ed="^"+Jl+"$",td=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},nd=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,r]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(ed)))throw new Error("Invalid LHS term");if(n.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(zi)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(vn)))throw new Error("Invalid RHS");(i=r.match(RegExp(tr,"g")))==null||i.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,s=[],o=0;if(!e.match(RegExp(zi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(tr,"g")),d=new td(r);return u==null||u.forEach((p,c)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let f=i-u.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<s.length;m++){let g=String.fromCharCode(48+m);d.addSymbol(g,c+m),this.addSymbol(g,n[o++],r)}}else d.addSymbol(p,c+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,n[o++],r)}),d}},Ri=e=>e+"_max",rd=(e,t,n,r)=>{let i=e.map(d=>d.length).map((d,p)=>P(`input${p}`,t,d)),a=B.size(r),s=ne("output",t,r.length),o=[...n.symbolToInfo.keys()].filter(d=>!n.rhs.symbolToIndices.has(d)),u=d=>{let p=[],c="var prod = 1.0;",f="var sum = 0.0;",m="sum += prod;",g=[],_=[],b=[],x=[],$=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((S,E)=>{var k;if(n.rhs.symbolToIndices.has(E)){let C=(k=n.rhs.symbolToIndices.get(E))==null?void 0:k[0];C!==void 0&&n.lhs.forEach((v,R)=>{if(S.inputIndices.includes(R)){let O=v.symbolToIndices.get(E);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(F=>{p.push(`${i[R].indicesSet(`input${R}Indices`,F,s.indicesGet("outputIndices",C))}`)})}})}else n.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let R=C.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(O=>{g.push(`${i[v].indicesSet(`input${v}Indices`,O,`${E}`)}`)}),x.push(`prod *= ${i[v].getByIndices(`input${v}Indices`)};`)}}),_.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ri(E)}; ${E}++) {`),b.push("}")});let T=$?[...p,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...p,f,..._,...g,c,...x,m,...b];return`
            ${d.registerUniforms(o.map(S=>({name:`${Ri(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(c=>n.symbolToInfo.has(c)).map(c=>{var f;return{type:12,data:((f=n.symbolToInfo.get(c))==null?void 0:f.dimValue)||0}});d.push({type:12,data:a});let p=e.map((c,f)=>[...ae(c)]).reduce((c,f)=>c.concat(f),d);return p.push(...ae(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},id=(e,t)=>{let n=new nd(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((a,s)=>a.dims);e.compute(rd(i,e.inputs[0].dataType,n,r))},ad=e=>{let t=e.equation.replace(/\s+/g,"");return Se({equation:t})}}),sd,Oi,od,ud,ld,Ag=Y(()=>{de(),he(),fe(),sd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Oi=(e,t)=>{let n=e.length-t.length,r=[];for(let i=0;i<n;++i)r.push(e[i]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},od=(e,t)=>e.length>t.length?Oi(e,t):Oi(t,e),ud=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=od(t,n),i=e[0].dataType,a=i===9||B.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(B.size(r)/o),d=c=>{let f=P("input",i,t.length,s),m=ne("output",i,r.length,o),g;if(i===9){let _=(b,x,$="")=>`
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
    ${g}`},p=[{type:12,data:u},...ae(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},ld=e=>{sd(e.inputs),e.compute(ud(e.inputs),{inputs:[0]})}}),dd,cd,zg=Y(()=>{de(),he(),fe(),gi(),dd=e=>{let t=e[0].dataType,n=B.size(e[0].dims),r=B.size(e[1].dims),i=r%4===0,a=s=>{let o=P("x",t,[1],4),u=P("bias",t,[1],4),d=ne("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],c=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${u.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,f=i?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${c(0)}${c(1)}${c(2)}${c(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,u,d)}

    ${fi(Ge(t))}

    ${s.mainStart(sn)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",mi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/sn/4)}})}},cd=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?Fu(e):e.compute(dd(e.inputs))}}),pd,hd,fd,md,Rg=Y(()=>{de(),he(),Re(),fe(),pd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},hd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.axis,i),s=n.slice(0);s.splice(a,1,...r);let o=n[a],u=e[0].dataType===9?4:1,d=Math.ceil(B.size(s)/u),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ae(e[0].dims,e[1].dims,s)],c=f=>{let m=P("data",e[0].dataType,e[0].dims.length,u),g=P("inputIndices",e[1].dataType,e[1].dims.length),_=ne("output",e[0].dataType,s.length,u),b=$=>{let T=r.length,S=`var indicesIndices${$}  = ${g.type.indices}(0);`;for(let E=0;E<T;E++)S+=`${T>1?`indicesIndices${$}[${E}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${E}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${g.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${m.type.indices};
        `;for(let E=0,k=0;E<i;E++)E===a?(S+=`${i>1?`dataIndices${$}[${E}]`:`dataIndices${$}`} = u32(idx${$});`,k+=T):(S+=`${i>1?`dataIndices${$}[${E}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${k}]`:`outputIndices${$}`};`,k++);return S},x;if(e[0].dataType===9){let $=(T,S,E="")=>`
          let outputIndices${S} = ${_.offsetToIndices(`outputOffset + ${S}u`)};
          ${b(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${E}(${m.getByOffset(`index${S}`)}[component${S}]);
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:c}},fd=e=>Se({axis:e.axis}),md=(e,t)=>{let n=e.inputs;pd(n),e.compute(hd(e.inputs,t))}}),gd,yd,_d,Og=Y(()=>{de(),he(),fe(),gd=(e,t,n,r,i,a,s,o,u)=>{let d=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:12,data:u}],p=[a];d.push(...ae(t.dims,p));let c=f=>{let m=P("indices_data",t.dataType,t.dims.length),g=ne("input_slice_offsets_data",12,1,1),_=[m,g],b=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c},{inputs:[t],outputs:[-1]})[0]},yd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,s=a[a.length-1],o=B.sizeToDimension(a,a.length-1),u=B.sizeFromDimension(r,t.batchDims+s),d=B.sizeToDimension(r,t.batchDims),p=B.sizeFromDimension(r,t.batchDims),c=o/d,f=new Array(s),m=u;for(let S=0;S<s;++S)f[s-1-S]=m,m*=r[t.batchDims+s-1-S];let g=gd(e,n[1],f,t.batchDims,r,o,c,p,s),_=t.batchDims+s;if(_>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let b=a.slice(0,-1).concat(r.slice(_)),x=B.size(b),$=[{type:12,data:x},{type:12,data:u},...ae(n[0].dims,g.dims,b)],T=S=>{let E=P("data",n[0].dataType,n[0].dims.length),k=P("slice_offsets",12,g.dims.length),C=ne("output",n[0].dataType,b.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,k,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:b,dataType:i}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:$}),getShaderSource:T},{inputs:[n[0],g]})},_d=e=>({batchDims:e.batch_dims,cacheKey:""})}),wd,bd,$d,xd,Ng=Y(()=>{de(),he(),Re(),fe(),wd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((o,u)=>u===n?Math.ceil(o/r)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},bd=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.gatherAxis,i),s=B.normalizeAxis(t.quantizeAxis,i),o=n.slice(0);o.splice(a,1,...r);let u=B.size(o),d=e[2].dataType,p=e[0].dataType===22,c=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ae(...e.map((m,g)=>m.dims),o)],f=m=>{let g=P("data",e[0].dataType,e[0].dims.length),_=P("inputIndices",e[1].dataType,e[1].dims.length),b=P("scales",e[2].dataType,e[2].dims.length),x=e.length>3?P("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=ne("output",d,o.length),T=[g,_,b];x&&T.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...T,$)}
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
        let dequantized_data = ${Ge(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,g)=>g!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:f}},$d=(e,t)=>{let n=e.inputs;wd(n,t),e.compute(bd(e.inputs,t))},xd=e=>Se({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),vd,Sd,Id,Td,Bg=Y(()=>{de(),he(),Re(),fe(),vd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Sd=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,s=e[1].dataType,o=B.normalizeAxis(t.axis,i),u=n[o],d=a.slice(0),p=B.size(d),c=P("input",r,i),f=P("indicesInput",s,a.length),m=ne("output",r,d.length),g=[{type:12,data:p},{type:6,data:u},{type:12,data:o}];return g.push(...ae(n,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:_=>`
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
  }`}},Id=e=>Se({axis:e.axis}),Td=(e,t)=>{let n=e.inputs;vd(n),e.compute(Sd(e.inputs,t))}}),Ed,kd,Md,Cd,Dg=Y(()=>{de(),he(),fe(),Ed=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},kd=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,s]=Us.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[i,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),p=Math.ceil(i/u),c=!0,f=B.size(o),m=[{type:12,data:c?d:f},{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(m.push(...ae(e[2].dims)),g.push("rank")),m.push(...ae(o));let _=x=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=P("a",e[0].dataType,e[0].dims),E=P("b",e[1].dataType,e[1].dims),k=S.type.value,C=null,v=[S,E];e.length===3&&(C=P("c",e[2].dataType,e[2].dims.length),v.push(C));let R=ne("output",e[0].dataType,o.length);v.push(R);let O=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(O).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${k}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${T}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${k}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},b=x=>{let $=P("a",e[0].dataType,e[0].dims),T=P("b",e[1].dataType,e[1].dims),S=null,E=[$,T];e.length===3&&(S=P("c",e[2].dataType,e[2].dims.length),E.push(S));let k=ne("output",e[0].dataType,o.length);E.push(k);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",R="";t.transA&&t.transB?(R=`
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
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
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let O=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${u}>, ${u}>;
  ${x.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${k.type.value}(0);
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
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${k.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return c?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:m}),getShaderSource:b}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:_}},Md=e=>{let t=e.transA,n=e.transB,r=e.alpha,i=e.beta;return{transA:t,transB:n,alpha:r,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Cd=(e,t)=>{Ed(e.inputs),e.compute(kd(e.inputs,t))}}),ht,xt,Kt,Xt,Ad,zd,Rd,Od,Nd,Bd,Dd,Ud,Pd,Ld,Ug=Y(()=>{de(),he(),Re(),fe(),[ht,xt,Kt,Xt]=[0,1,2,3],Ad=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},zd=`
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
`,Rd=e=>`
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
`,Od=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Nd=e=>`
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
`,Bd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ht}] = batch;
     indices[${xt}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Kt}] = u32(r);
            indices[${Xt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Kt}] = u32(clamp(r, 0, H - 1));
          indices[${Xt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Kt}] = gs_reflect(r, border[1], border[3]);
          indices[${Xt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Dd=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ht}], indices[${xt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ht}], indices[${xt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ht}], indices[${xt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ht}], indices[${xt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ht}], indices[${xt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ht}], indices[${xt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ud=(e,t)=>{let n=P("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=P("grid",e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ht,xt,Kt,Xt]=[0,3,1,2]);let s=ne("output",e[0].dataType,a.length),o=n.type.value,u=B.size(a),d=[{type:12,data:u},...ae(e[0].dims,r,a)],p=c=>`
  ${c.registerUniform("output_size","u32").declareVariables(n,i,s)}
  ${zd}
  ${Rd(o)}
  ${Od(t)}
  ${Nd(t)}
  ${Bd(n,o,t)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Kt}]);
      let W_in = i32(uniforms.x_shape[${Xt}]);

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
      var grid_indices = vec3<u32>(indices[${ht}], indices[${Kt}], indices[${Xt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Dd(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:c=>{let f=B.size(a);return{outputs:[{dims:a,dataType:c[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:p}},Pd=(e,t)=>{Ad(e.inputs),e.compute(Ud(e.inputs,t))},Ld=e=>Se({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ve,qd,Gd,Ni,Wd,Sn,Vd,Fd=Y(()=>{de(),he(),Re(),ti(),pi(),fe(),Mt(),Ve=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,qd=(e,t)=>{let n=e[0],r=Ve(e,1),i=Ve(e,2),a=Ve(e,3),s=Ve(e,4),o=Ve(e,5),u=Ve(e,6),d=Ve(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=n.dims[0],c=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],m=c,g=0,_=0,b=Math.floor(f/t.numHeads);if(u&&d&&B.size(u.dims)&&B.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=u.dims[2],_=u.dims[2]}else if(u&&B.size(u.dims)||d&&B.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(r&&B.size(r.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,m=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,m=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,m=r.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=g+m,T=0;if(s&&B.size(s.dims)>0){T=8;let C=s.dims;throw C.length===1?C[0]===p?T=1:C[0]===3*p+2&&(T=3):C.length===2&&C[0]===p&&C[1]===$&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let k=!1;if(s&&B.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&B.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==c||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:$,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:f,vHiddenSize:E,headSize:b,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:k,passPastInKv:S,qkvFormat:x}},Gd=e=>Se({...e}),Ni=Se({perm:[0,2,1,3]}),Wd=(e,t,n,r,i,a,s)=>{let o=[r,i,a],u=B.size(o),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=c=>{let f=ne("qkv_with_bias",t.dataType,o),m=P("qkv",t.dataType,o),g=P("bias",n.dataType,o),_=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(m,g,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,n],outputs:[-1]})[0]},Sn=(e,t,n,r,i,a,s,o)=>{let u=a;if(s&&B.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Wd(e,a,s,t,r,n*i,o),u=u.reshape([t,r,n,i]),n===1||r===1?u:e.compute(Xe(u,Ni.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,r,n,i])),n===1||r===1?u:e.compute(Xe(u,Ni.perm),{inputs:[u],outputs:[-1]})[0]},Vd=(e,t)=>{let n=qd(e.inputs,t),r=e.inputs[0],i=Ve(e.inputs,1),a=Ve(e.inputs,2),s=Ve(e.inputs,3),o=Ve(e.inputs,4),u=Ve(e.inputs,5),d=Ve(e.inputs,6),p=Ve(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let c=i&&a&&i.dims.length===4&&a.dims.length===4,f=Sn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,s,0);if(c)return wn(e,f,i,a,o,void 0,d,p,u,n);if(!i||!a)throw new Error("key and value must be provided");let m=Sn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,s,n.hiddenSize),g=Sn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,s,2*n.hiddenSize);wn(e,f,m,g,o,void 0,d,p,u,n)}}),Hd,jd,Kd,Xd,Bi,Yd,Zd,Qd=Y(()=>{de(),he(),Re(),fe(),Hd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},jd=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>n.push(Number(i))),r=n.length),Se({numOutputs:r,axis:t.axis,splitSizes:n})},Kd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Xd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices("indices","input[global_idx]");t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Bi=(e,t)=>{let n=e[0].dims,r=B.size(n),i=e[0].dataType,a=B.normalizeAxis(t.axis,n.length),s=new Array(t.numOutputs),o=P("input",i,n.length),u=new Array(t.numOutputs),d=[],p=[],c=0,f=[{type:12,data:r}];for(let g=0;g<t.numOutputs;g++){c+=t.splitSizes[g],u[g]=c;let _=n.slice();_[a]=t.splitSizes[g],p.push(_),s[g]=ne(`output${g}`,i,_.length),d.push({dims:p[g],dataType:e[0].dataType})}f.push({type:12,data:u},...ae(n,...p));let m=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${Kd(u.length)}
  ${Xd(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${re("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Yd=(e,t)=>{Hd(e.inputs);let n=e.inputs.length===1?t:jd(e.inputs,t);e.compute(Bi(e.inputs,n),{inputs:[0]})},Zd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Se({axis:t,numOutputs:r,splitSizes:n})}}),Jd,nr,ec,tc=Y(()=>{de(),he(),Re(),fe(),Jd=(e,t)=>{let[n,r,i,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!B.areEqual(r.dims,[])&&!B.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(i.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=n.dims[0],d=n.dims[n.dims.length-2],p=i.dims[0],c=B.sizeFromDimension(n.dims,1)/d,f=o===0?i.dims[1]*2:c/s;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(d!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(f/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},nr=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,s=e[0].dims[0],o=B.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=o/u,p=e[2].dims[1],c=i===0?p*2:d/r,f=new Array(s,u,d/c,c-p),m=B.computeStrides(f),g=[{type:1,data:a},{type:12,data:f},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,c,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,c,u*c,1]}):[],...ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],_=b=>{let x=P("input",e[0].dataType,e[0].dims.length),$=P("position_ids",e[1].dataType,e[1].dims.length),T=P("cos_cache",e[2].dataType,e[2].dims.length),S=P("sin_cache",e[3].dataType,e[3].dims.length),E=ne("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${b.declareVariables(x,$,T,S,E)}

        ${b.mainStart(sn)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
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
            let re = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Se({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/sn)},programUniforms:g})}},ec=(e,t)=>{Jd(e.inputs,t),e.compute(nr(e.inputs,t))}}),nc,rc,Di,ic,ac,Pg=Y(()=>{Re(),de(),pi(),Fd(),Qd(),Mt(),tc(),fe(),nc=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],r=e[1],i=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=n.dims[0],d=n.dims[1],p=n.dims.length===3?o?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],c=d,f=0,m=!r||r.dims.length===0,g=Math.floor(m?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);m&&(p=g*t.numHeads);let _=a&&a.dims.length!==0,b=s&&s.dims.length!==0;if(_&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(_&&b){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=a.dims[2]}else if(_||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');c=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');c=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');c=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let $=0,T=!1,S=t.kvNumHeads?g*t.kvNumHeads:p;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(c!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(c!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let k=E.dims.reduce((C,v)=>C*v,1);if(k!==u)throw new Error(`seqlens_k must have batch_size (${u}) elements, got ${k}.`);for(let C=0;C<E.dims.length;C++)if(E.dims[C]!==1&&E.dims[C]!==u)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${u}), got dims[${C}] = ${E.dims[C]}.`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:c,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:g,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:x}},rc=Se({perm:[0,2,1,3]}),Di=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Xe(r,rc.perm),{inputs:[r],outputs:[-1]})[0]),r},ic=(e,t,n,r)=>{let i=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let c=P("seq_lens",n.dataType,n.dims),f=P("total_seq_lens",r.dataType,r.dims),m=ne("pos_ids",i,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:d}},ac=(e,t)=>{var S;let n=nc(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=n.kvNumHeads?n.kvNumHeads:n.numHeads,c=Se({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,p*n.headSize,p*n.headSize]}),[f,m,g]=!i&&!a?e.compute(Bi([r],c),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],_,b;if(t.doRotary){let E=e.compute(ic(n.batchSize,n.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],k=e.inputs[7],C=e.inputs[8],v=Se({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),R=[f,E,k,C],O=[-1];_=e.compute(nr(R,v),{inputs:R,outputs:O})[0],R.splice(0,1,m);let F=Se({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});b=e.compute(nr(R,F),{inputs:R,outputs:O})[0]}let x=Sn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?_:f,void 0,0),$=Di(e,t.doRotary?b:m,n),T=Di(e,g,n);wn(e,x,$,T,void 0,void 0,s,o,void 0,n,u,d)}}),Ui,sc,oc,uc,Lg=Y(()=>{de(),he(),Mt(),fe(),Ui=(e,t,n,r,i,a,s,o)=>{let u=ze(a),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,c=i*s,f=64;c===1&&(f=256);let m=[i,s,a/u],g=[i,s,2],_=["rank","type","type"],b=[];b.push(...ae(m,g));let x=$=>{let T=P("x",t.dataType,3,u),S=P("scale",n.dataType,n.dims),E=P("bias",r.dataType,r.dims),k=ne("output",1,3,2),C=[T,S,E,k];return`
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
      let value = ${d}(${T.get("batch","channel","h")});
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
      let sum_final = ${kt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${kt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:c},programUniforms:b}),getShaderSource:x},{inputs:[t,n,r],outputs:[-1]})[0]},sc=(e,t,n)=>{let r=t[0].dims,i=r,a=2,s=r[0],o=r[1],u=B.sizeFromDimension(r,a),d=ze(u),p=B.size(i)/d,c=Ui(e,t[0],t[1],t[2],s,u,o,n.epsilon),f=[s,o,u/d],m=[s,o],g=["type","none"],_=b=>{let x=P("x",t[0].dataType,f.length,d),$=P("scale_shift",1,m.length,2),T=ne("output",t[0].dataType,f.length,d),S=[x,$,T];return`
  ${b.registerUniform("output_size","u32").declareVariables(...S)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ae(f,m,f)]}),getShaderSource:_},{inputs:[t[0],c]})},oc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],s=r[r.length-1],o=B.sizeFromDimension(r,1)/s,u=ze(s),d=B.size(i)/u,p=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],c=["type","type"],f=!1,m=[0,r.length-1];for(let x=0;x<r.length-2;x++)f=f||r[x+1]!==1,m.push(x+1);f=f&&r[r.length-1]!==1;let g=f?e.compute(Xe(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(x,$)=>r[m[$]])),_=Ui(e,g,t[1],t[2],a,o,s,n.epsilon),b=x=>{let $=Ue(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,S=C=>{let v=C===0?"x":"y",R=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${R}(scale.${v}))`;case 2:return`vec2<${$}>(${R}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${$}>(${R}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${u}`)}},E=P("input",t[0].dataType,t[0].dims,u),k=ne("output",t[0].dataType,i,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${k.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:b},{inputs:[t[0],_]})},uc=(e,t)=>{t.format==="NHWC"?oc(e,e.inputs,t):sc(e,e.inputs,t)}}),lc,dc,cc,qg=Y(()=>{de(),he(),fe(),lc=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},dc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],s=!r&&e[2],o=i,u=B.normalizeAxis(t.axis,i.length),d=B.sizeToDimension(i,u),p=B.sizeFromDimension(i,u),c=B.size(a.dims),f=s?B.size(s.dims):0;if(c!==p||s&&f!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${c} and bias size of ${f}`);let m=[];for(let E=0;E<i.length;++E)E<u?m.push(i[E]):m.push(1);let g=ze(p),_=["type","type"],b=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/g)},{type:1,data:t.epsilon}];s&&_.push("type");let x=n>1,$=n>2,T=E=>{let k=Ue(e[0].dataType),C=[P("x",e[0].dataType,e[0].dims,g),P("scale",a.dataType,a.dims,g)];s&&C.push(P("bias",s.dataType,s.dims,g)),C.push(ne("output",e[0].dataType,o,g)),x&&C.push(ne("mean_data_output",1,m)),$&&C.push(ne("inv_std_output",1,m));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ai("f32",g)};
    var mean_square_vector = ${ai("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${on(k,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${kt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${kt("mean_square_vector",g)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${on(k,g,"x[j + offset]")};
      let f32scale = ${on(k,g,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${on(k,g,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return x&&S.push({dims:m,dataType:1}),$&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${n};${r}`,inputDependencies:_},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:b}),getShaderSource:T}},cc=(e,t)=>{lc(e.inputs),e.compute(dc(e.inputs,t,e.outputCount))}}),pc,hc,Gg=Y(()=>{he(),bi(),Si(),pc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},hc=e=>{pc(e.inputs);let t=an.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(wi(e.inputs,{activation:""},t));else{let i=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),s=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,a,r]),u=e.inputs[1].reshape([1,r,n]),d=[1,a,n],p=[o,u];e.compute(Qn(p,{activation:""},t,d),{inputs:p})}else e.compute(Qn(e.inputs,{activation:""},t))}}}),fc,mc,gc,yc,_c,Wg=Y(()=>{de(),he(),Re(),fe(),fc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!B.areEqual(s.dims,[t.n,i,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(B.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(u)!==d)throw new Error("zeroPoints input size error.")}},mc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=B.size(o),d=e[1].dims[2]/4,p=e[0].dataType,c=ze(t.k),f=ze(d),m=ze(s),g=o.concat([i,s]),_=i>1&&s/m%2===0?2:1,b=B.size(g)/m/_,x=64,$=[],T=[u,i,a/c],S=B.convertShape(e[1].dims).slice();S.splice(-1,1,d/f),$.push(...ae(T)),$.push(...ae(S)),$.push(...ae(e[2].dims)),e.length===4&&$.push(...ae(B.convertShape(e[3].dims)));let E=[u,i,s/m];$.push(...ae(E));let k=C=>{let v=T.length,R=P("a",e[0].dataType,v,c),O=P("b",12,S.length,f),F=P("scales",e[2].dataType,e[2].dims.length),L=[R,O,F],G=e.length===4?P("zero_points",12,e[3].dims.length):void 0;G&&L.push(G);let A=E.length,q=ne("output",e[0].dataType,A,m),j=Ue(e[0].dataType),K=(()=>{switch(c){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${c}-component is not supported.`)}})(),oe=Math.floor(32/t.bits),N=Math.floor(oe/8),ee=()=>{let H="";for(let V=0;V<N;V++){let le=V*t.bits*4,$e=le+t.bits;H+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${K};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/c}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${R.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let ue=0;ue<m*_;ue++)H+=`
            b_value = ${f===1?`b${ue}_data`:`b${ue}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${le}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${$e}u) & b_mask);`}
            b_quantized_values = ${K}(${Array.from({length:4},(D,Q)=>`${j}(b_value_lower[${Q}]), ${j}(b_value_upper[${Q}])`).join(", ")});
            b_dequantized_values = ${c===1?`${K}(${Array.from({length:8},(D,Q)=>`(b_quantized_values[${Q}] - ${G?`zero_point${ue}`:"zero_point"}) * scale${ue}`).join(", ")});`:`(b_quantized_values - ${K}(${Array(8).fill(`${G?`zero_point${ue}`:"zero_point"}`).join(",")})) * scale${ue};`};
            workgroup_shared[local_id.x * ${_} + ${Math.floor(ue/m)}]${m>1?`[${ue%m}]`:""} += ${Array.from({length:8/c},(D,Q)=>`${c===1?`a_data${V>0?V:""}[${Q}] * b_dequantized_values[${Q}]`:`dot(a_data${V>0?V:""}[${Q}], b_dequantized_values[${Q}])`}`).join(" + ")};
          `}return H},W=()=>{let H=`
            var col_index = col * ${m};
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
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let V=0;V<m*_;V++)H+=`
            let scale${V} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${G?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${G.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return H},X=()=>{let H=`col_index = col * ${m};`;for(let V=0;V<m*_;V++)H+=`
            let b${V}_data = ${O.getByIndices(`${O.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return H+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${K};
            var b_dequantized_values: ${K};`,H};return`
        var<workgroup> workgroup_shared: array<${q.type.value}, ${_*x}>;
        ${C.declareVariables(...L,q)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${q.offsetToIndices(`(global_idx / ${x}) * ${_}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/c};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${X()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${ee()}
                word_offset += ${oe/c};
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${c};${f};${m};${_};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:p}],dispatchGroup:{x:b},programUniforms:$}),getShaderSource:k}},gc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,s=t.n,o=n.slice(0,r-2),u=B.size(o),d=e[1].dims[2]/4,p=e[0].dataType,c=ze(t.k),f=ze(d),m=o.concat([i,s]),g=128,_=s%8===0?8:s%4===0?4:1,b=g/_,x=Math.floor(32/t.bits),$=b*f*x,T=$/c,S=$/t.blockSize,E=B.size(m)/_,k=[],C=[u,i,a/c],v=B.convertShape(e[1].dims).slice();v.splice(-1,1,d/f),k.push(...ae(C)),k.push(...ae(v)),k.push(...ae(e[2].dims)),e.length===4&&k.push(...ae(B.convertShape(e[3].dims)));let R=[u,i,s];k.push(...ae(R));let O=F=>{let L=C.length,G=P("a",e[0].dataType,L,c),A=P("b",12,v.length,f),q=P("scales",e[2].dataType,e[2].dims.length),j=[G,A,q],K=e.length===4?P("zero_points",12,e[3].dims.length):void 0;K&&j.push(K);let oe=R.length,N=ne("output",e[0].dataType,oe),ee=Ue(e[0].dataType),W=()=>{switch(c){case 1:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${c}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${N.type.value}, ${b}>, ${_}>;
        ${F.declareVariables(...j,N)}
        ${F.mainStart([b,_,1])}
          let output_indices = ${N.offsetToIndices(`workgroup_index * ${_}`)};
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
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
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
            let zero_point = ${ee}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ee}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${q.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/c};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?"b_data":"b_data[i]"};
              ${(()=>{let X=Math.floor(x/8),H="";for(let V=0;V<X;V++){let le=V*t.bits*4,$e=le+t.bits;H+=`
              ${W()}
              {${t.bits===2?`
                let half_word = b_value >> ${V*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${le}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${$e}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ee}>(${Array.from({length:4},(ue,D)=>`${ee}(b_value_lower[${D}]), ${ee}(b_value_upper[${D}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ee}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ue,D)=>`${`dot(a_data${D}, b_dequantized_values[${D}])`}`).join(" + ")};
              }
              word_offset += ${8/c};`}return H})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${_}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${N.setByIndices(`${N.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${c};${f};${b};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:E},programUniforms:k}),getShaderSource:O}},yc=(e,t)=>{fc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(gc(e.inputs,t)):e.compute(mc(e.inputs,t))},_c=e=>Se(e)}),wc,bc,$c,xc,vc,Sc,Ic,Tc,Ec,Vg=Y(()=>{de(),he(),fe(),wc=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},bc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
      `},$c=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},xc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},vc=(e,t,n)=>{let r="";for(let i=t-1;i>=0;--i)r+=`
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
          `},Sc=(e,t,n)=>{switch(n.mode){case 0:return bc(e,t,n.pads.length);case 1:return $c(e,t,n.pads.length);case 2:return xc(e,t,n.pads.length);case 3:return vc(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Ic=(e,t)=>{let n=B.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=B.size(n),a=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ae(e[0].dims,n));let o=["rank"],u=d=>{let p=ne("output",e[0].dataType,n.length),c=P("x",e[0].dataType,r.length),f=c.type.value,m=Sc(p,r.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?f:"f32"}),`
            ${d.registerUniforms(g).declareVariables(c,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(n)/64)},programUniforms:a}),getShaderSource:u}},Tc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(n[u]),a[Number(o[u])+i]=Number(n[u+o.length])}else n.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:r,pads:s}}else return t},Ec=(e,t)=>{wc(e.inputs);let n=Tc(e.inputs,t);e.compute(Ic(e.inputs,n),{inputs:[0]})}}),In,Pi,Li,qi,Gi,kc,Mc,Wi,Vi,Cc,Ac,Fi,zc,Rc,Hi,Oc,Nc,Bc,Dc,Fg=Y(()=>{Ye(),de(),he(),fe(),In=e=>{if(Ee.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Pi=(e,t,n)=>{let r=t.format==="NHWC",i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();Fn.adjustPoolAttributes(n,i,s,o,u,d);let p=Fn.computePoolOutputShape(n,i,o,u,s,d,t.autoPad),c=Object.assign({},t);a?Object.assign(c,{kernelShape:s,strides:o,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(c,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let f=p.slice();return f.push(f.splice(1,1)[0]),[c,r?f:p]},Li=(e,t)=>{let n=t.format==="NHWC",r=B.size(e),i=B.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],c=!!(d+p);a.push({type:12,data:o},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],_=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];f=!!(_+b),a.push({type:12,data:m},{type:12,data:g},{type:12,data:_},{type:12,data:b}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,c,f]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=B.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[a,s,!!u,!1,!1]}},qi=(e,t,n,r,i,a,s,o,u,d,p,c)=>{let f=i.format==="NHWC",m=t.type.value,g=ne("output",t.type.tensor,r);if(i.kernelShape.length<=2){let _="",b="",x="",$=n-(f?2:1);if(p?_=`
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
              ${s}

              output[global_idx] = value;
            }`}},Gi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,kc=e=>`${Gi(e)};${e.countIncludePad}`,Mc=e=>`${Gi(e)};${e.storageOrder};${e.dilations}`,Wi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Vi=(e,t,n,r)=>{let[i,a]=Pi(t,r,n),s=P("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,c,f,m,g]=Li(a,i);p.push(...ae(t.dims,a));let _=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:p}),getShaderSource:b=>qi(b,s,t.dims.length,a.length,i,u,d,0,c,f,m,g)}},Cc=e=>{let t=e.count_include_pad!==0,n=Wi(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...n,cacheKey:""};return{...r,cacheKey:kc(r)}},Ac=(e,t)=>{In(e.inputs),e.compute(Vi("AveragePool",e.inputs[0],!1,t))},Fi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},zc=e=>{let t=e.format;return{format:t,...Fi,cacheKey:t}},Rc=(e,t)=>{In(e.inputs),e.compute(Vi("GlobalAveragePool",e.inputs[0],!0,t))},Hi=(e,t,n,r)=>{let[i,a]=Pi(t,r,n),s=`
      value = max(x_val, value);
    `,o="",u=P("x",t.dataType,t.dims.length),d=["rank"],[p,c,f,m,g]=Li(a,i);return p.push(...ae(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${m};${g}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:p}),getShaderSource:_=>qi(_,u,t.dims.length,a.length,i,s,o,t.dataType===10?-65504:-1e5,c,f,m,g)}},Oc=(e,t)=>{In(e.inputs),e.compute(Hi("MaxPool",e.inputs[0],!1,t))},Nc=e=>{let t=e.storage_order,n=e.dilations,r=Wi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:n,...r,cacheKey:""};return{...i,cacheKey:Mc(i)}},Bc=e=>{let t=e.format;return{format:t,...Fi,cacheKey:t}},Dc=(e,t)=>{In(e.inputs),e.compute(Hi("GlobalMaxPool",e.inputs[0],!0,t))}}),Uc,Pc,Lc,qc,Hg=Y(()=>{de(),he(),Re(),fe(),Uc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,r)=>n===e[2].dims[r]).reduce((n,r)=>n&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,a)=>a===t.axis||i===e[0].dims[a]).reduce((i,a)=>i&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Pc=(e,t)=>{let n=B.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,s=e[1].dataType,o=B.size(a),u=r===3||r===2,d=u?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,c=e.length>2?e[2]:void 0,f=c?u?[Math.ceil(B.size(c.dims)/4)]:c.dims:void 0,m=p.length===0||p.length===1&&p[0]===1,g=m===!1&&p.length===1,_=ze(o),b=m&&(!u||_===4),x=b?_:1,$=b&&!u?_:1,T=P("input",u?12:r,d.length,$),S=P("scale",s,p.length),E=c?P("zero_point",u?12:r,f.length):void 0,k=ne("output",s,a.length,x),C=[T,S];E&&C.push(E);let v=[d,p];c&&v.push(f);let R=[{type:12,data:o/x},{type:12,data:n},{type:12,data:t.blockSize},...ae(...v,a)],O=F=>{let L=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(L).declareVariables(...C,k)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${k.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:g?`
            let scale_index = ${k.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?u?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:g?u?`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${k.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${u?i?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${k.setByOffset("global_idx",`${k.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:O,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/x/64),y:1,z:1},programUniforms:R})}},Lc=(e,t)=>{Uc(e.inputs,t),e.compute(Pc(e.inputs,t))},qc=e=>Se({axis:e.axis,blockSize:e.blockSize})}),Gc,Wc,Vc,jg=Y(()=>{Ye(),de(),fe(),Gc=(e,t,n)=>{let r=e===t,i=e<t&&n<0,a=e>t&&n>0;if(r||i||a)throw new Error("Range these inputs' contents are invalid.")},Wc=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],s=i,o=[{type:12,data:s},{type:r,data:e},{type:r,data:n},...ae(a)],u=d=>{let p=ne("output",r,a.length),c=p.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:c},{name:"delta",type:c}];return`
        ${d.registerUniforms(f).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${c}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Vc=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ee.webgpu.validateInputContent&&Gc(t,n,r),e.compute(Wc(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Fc,Hc,jc,Kc,Kg=Y(()=>{de(),he(),Re(),fe(),Fc=(e,t,n,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
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
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case"mul":return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Hc=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,s=Math.ceil(B.sizeToDimension(r,r.length-1)/a),o=r[r.length-1],u=B.sizeFromDimension(n,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...ae(e[1].dims,e[2].dims,i)],p=c=>{let f=P("indices",e[1].dataType,e[1].dims.length),m=P("updates",e[2].dataType,e[2].dims.length,a),g=t.reduction!=="none"&&t.reduction!==""?Js("output",e[0].dataType,i.length):ne("output",e[0].dataType,i.length,a);return`
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
    ${Fc(t.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},jc=e=>Se({reduction:e.reduction}),Kc=(e,t)=>{e.compute(Hc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Xc,Yc,Zc,ji,Qc,Jc,ep,tp,np,rp,ip,ap,Ki,sp,op,up,lp,dp,cp,pp,Xg=Y(()=>{de(),he(),Re(),fe(),Xc=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Yc=(e,t,n)=>{t.every(i=>i>=0&&i<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(n).fill(1);return t.forEach((i,a)=>r[i]=e[a]),r},Zc=(e,t,n,r,i,a)=>{let[s,o,u]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>r.push(p)),r.length!==0&&r.length!==d&&n>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Xc(r,t),t.axes.length>0&&Yc(r,t.axes,d).forEach((p,c)=>r[c]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>i.push(Number(p))),i.length!==0&&i.length!==d&&n>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof i<"u"&&r.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ji=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Qc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ji("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ji("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Jc=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ep=(e,t,n)=>{let r=new Array(n).fill(0).concat(new Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((a,s)=>{r[a]=i[s],r[s+n]=i[t.length+s]}),r):i},tp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(a=>i.push(a)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((a,s)=>i[a]=n[s])}else n.forEach(a=>i.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((a,s)=>Math.round(a*t[s]))}return i},np=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(a=>t[a]=r),n.axes.forEach(a=>i[a]=Math.round(e[a]*t[a]))):(t.fill(r,0,t.length),i.forEach((a,s)=>i[s]=Math.round(a*t[s]))),i},rp=(e,t,n,r,i)=>`
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
    }`,ip=(e,t,n,r,i,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${re("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${re("uniforms.roi","i",a)};
          var roi_hi = ${re("uniforms.roi",`i + ${n.length}`,a)};
          var input_shape_i = ${re("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",r.length)};
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
    }`,ap=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ki=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",sp=(e,t,n,r,i)=>{let[a,s,o,u]=n.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${n[o]} - 1))`)};
      ${Ki(e,u,a,2)}
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
    }`},op=(e,t,n,r,i,a,s,o,u,d)=>{let p=n.length===2,[c,f]=p?[0,1]:[2,3],m=e.type.value,g=_=>{let b=_===c?"row":"col";return`
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
    `},up=(e,t,n,r,i)=>{let[a,s,o,u,d]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${n[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${n[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${n[u]} - 1))`)};
      ${Ki(e,d,a,3)}
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
    }`},lp=(e,t,n,r,i,a)=>{let s=e.dims,o=ep(a,t.axes,s.length),u=tp(s,r,i,t.axes),d=r.slice();r.length===0&&(d=s.map(($,T)=>$===0?1:u[T]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=np(s,d,t)));let p=ne("output",e.dataType,u.length),c=P("input",e.dataType,s.length),f=B.size(u),m=s.length===u.length&&s.every(($,T)=>$===u[T]),g=t.coordinateTransformMode==="tf_crop_and_resize",_=t.extrapolationValue,b=c.type.value,x=$=>`
      ${m?"":`
      ${Qc(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ap(c,s)};
              ${Jc(t.nearestMode,n,b)};
              ${ip(c,p,s,u,d.length,o.length,g)};
              `;case"linear":return`
              ${rp(p,s,u,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${sp(c,p,s,g,_)}`;if(s.length===3||s.length===5)return`${up(c,p,s,g,_)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${op(c,p,s,u,d,o,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...ae(s,u)]})}},dp=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},cp=(e,t)=>{let n=[],r=[],i=[],a=dp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Zc(e.inputs,t,a,n,r,i),e.compute(lp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},pp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Se({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:d})}}),hp,fp,mp,Yg=Y(()=>{de(),he(),fe(),hp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},fp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,s=B.size(a),o=a,u=s,d=a.slice(-1)[0],p=r?a.slice(0,-1).concat(1):[],c=!i&&e.length>3,f=e.length>4,m=r&&n>1,g=r&&n>2,_=n>3,b=64,x=ze(d),$=[{type:12,data:u},{type:12,data:x},{type:12,data:d},{type:1,data:t.epsilon}],T=E=>{let k=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[P("x",e[0].dataType,e[0].dims,x),P("skip",e[1].dataType,e[1].dims,x),P("gamma",e[2].dataType,e[2].dims,x)];c&&C.push(P("beta",e[3].dataType,e[3].dims,x)),f&&C.push(P("bias",e[4].dataType,e[4].dims,x)),C.push(ne("output",e[0].dataType,o,x)),m&&C.push(ne("mean_output",1,p)),g&&C.push(ne("inv_std_output",1,p)),_&&C.push(ne("input_skip_bias_sum",e[0].dataType,o,x));let v=Ue(e[0].dataType),R=Ue(1,x);return`

      ${E.registerUniforms(k).declareVariables(...C)}
      var<workgroup> sum_shared : array<${R}, ${b}>;
      var<workgroup> sum_squared_shared : array<${R}, ${b}>;

      ${E.mainStart([b,1,1])}
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
          let f32_value = ${on(v,x,"value")};
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
        let mean = ${kt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${kt("square_sum",x)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${c?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return n>1&&S.push({dims:p,dataType:1}),n>2&&S.push({dims:p,dataType:1}),n>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${m};${g};${_}`,inputDependencies:e.map((E,k)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:$})}},mp=(e,t)=>{hp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(fp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),gp,Tn,yp,Xi,_p,wp,bp,$p,Zg=Y(()=>{de(),he(),Re(),fe(),gp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Tn=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>n.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>n.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},yp=(e,t)=>{if(e.length>1){let n=Tn(e,1),r=Tn(e,2),i=Tn(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Se({starts:n,ends:r,axes:i})}else return t},Xi=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},_p=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,wp=(e,t)=>{let n=e[0].dims,r=B.size(n),i=t.axes.length>0?B.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Tn(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(i.length).fill(1));let s=t.starts.map((x,$)=>Xi(x,$,n,i,a)),o=t.ends.map((x,$)=>Xi(x,$,n,i,a));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==n.length)for(let x=0;x<n.length;++x)i.includes(x)||(s.splice(x,0,0),o.splice(x,0,n[x]),a.splice(x,0,1));let u=a.map(x=>Math.sign(x));a.forEach((x,$,T)=>{if(x<0){let S=(o[$]-s[$])/x,E=s[$],k=E+S*a[$];s[$]=k,o[$]=E,T[$]=-x}});let d=n.slice(0);i.forEach((x,$)=>{d[x]=Math.ceil((o[x]-s[x])/a[x])});let p={dims:d,dataType:e[0].dataType},c=ne("output",e[0].dataType,d.length),f=P("input",e[0].dataType,e[0].dims.length),m=B.size(d),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],_=[{type:12,data:m},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ae(e[0].dims,d)],b=x=>`
      ${x.registerUniforms(g).declareVariables(f,c)}
        ${_p(f,c,n)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:_})}},bp=(e,t)=>{gp(e.inputs,t);let n=yp(e.inputs,t);e.compute(wp(e.inputs,n),{inputs:[0]})},$p=e=>{let t=e.starts,n=e.ends,r=e.axes;return Se({starts:t,ends:n,axes:r})}}),xp,vp,Sp,Ip,Qg=Y(()=>{de(),he(),Re(),Mt(),fe(),xp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},vp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=B.size(r),a=r.length,s=B.normalizeAxis(t.axis,a),o=s<r.length-1,u,d=[];o?(d=Array.from({length:a},(C,v)=>v),d[s]=a-1,d[a-1]=s,u=e.compute(Xe(n,d),{inputs:[n],outputs:[-1]})[0]):u=n;let p=u.dims,c=p[a-1],f=i/c,m=ze(c),g=c/m,_=64;f===1&&(_=256);let b=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=P("x",u.dataType,u.dims,m),$=ne("result",u.dataType,u.dims,m),T=x.type.value,S=Ue(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=C=>`
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
          rowSumShared = ${T}(${kt("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,k=e.compute({name:"Softmax",shaderCache:{hint:`${m};${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:g}]}),getShaderSource:E},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(Xe(k,d),{inputs:[k]})},Sp=(e,t)=>{xp(e.inputs),vp(e,t)},Ip=e=>Se({axis:e.axis})}),Yi,Tp,Ep,kp,Mp,Jg=Y(()=>{de(),he(),fe(),Yi=e=>Array.from(e.getBigInt64Array(),Number),Tp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Yi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ep=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},kp=(e,t)=>{let n=e[0].dims,r=t??Yi(e[1]),i=Ep(n,r),a=B.size(i),s=e[0].dataType,o=P("input",s,n.length),u=ne("output",s,i.length),d=p=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ae(e[0].dims,i)]}),getShaderSource:d}},Mp=e=>{Tp(e.inputs),e.compute(kp(e.inputs),{inputs:[0]})}}),Cp,Ap,zp,e0=Y(()=>{de(),he(),fe(),Cp=(e,t,n,r,i)=>{let a=ne("output_data",i,n.length,4),s=P("a_data",t[1].dataType,t[1].dims.length,4),o=P("b_data",t[2].dataType,t[2].dims.length,4),u=P("c_data",t[0].dataType,t[0].dims.length,4),d,p=(c,f,m)=>`select(${f}, ${c}, ${m})`;if(!r)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let c=(f,m,g="")=>{let _=`a_data[index_a${m}][component_a${m}]`,b=`b_data[index_b${m}][component_b${m}]`,x=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
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
      }`},Ap=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(B.areEqual(t,n)&&B.areEqual(n,r)),s=t,o=B.size(t);if(a){let d=an.calcShape(an.calcShape(t,n,!1),r,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=B.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Cp(d,e,s,a,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...ae(r,t,n,s)]})}},zp=e=>{e.compute(Ap(e.inputs))}}),Rp,t0=Y(()=>{mg(),pi(),gg(),yg(),_g(),wg(),bg(),Ig(),Eg(),kg(),Mg(),Cg(),Ag(),zg(),Rg(),Og(),Ng(),Bg(),Dg(),Ug(),Pg(),Lg(),qg(),Gg(),Wg(),Fd(),Vg(),Fg(),Hg(),jg(),Kg(),li(),Xg(),tc(),Yg(),Zg(),Qg(),Qd(),Jg(),Mt(),gi(),e0(),Rp=new Map([["Abs",[hu]],["Acos",[fu]],["Acosh",[mu]],["Add",[nl]],["ArgMax",[Qo,ci]],["ArgMin",[Zo,ci]],["Asin",[gu]],["Asinh",[yu]],["Atan",[_u]],["Atanh",[wu]],["Attention",[iu]],["AveragePool",[Ac,Cc]],["BatchNormalization",[uu]],["BiasAdd",[cu]],["BiasSplitGelu",[Ju]],["Cast",[$u,bu]],["Ceil",[Su]],["Clip",[vu]],["Concat",[gl,yl]],["Conv",[Mi,Ei]],["ConvTranspose",[Vl,ql]],["Cos",[Iu]],["Cosh",[Tu]],["CumSum",[Hl,jl]],["DepthToSpace",[Zl,Ql]],["DequantizeLinear",[Lc,qc]],["Div",[rl]],["Einsum",[id,ad]],["Elu",[Eu,bn]],["Equal",[il]],["Erf",[ku]],["Exp",[Mu]],["Expand",[ld]],["FastGelu",[cd]],["Floor",[Cu]],["FusedConv",[Mi,Ei]],["Gather",[md,fd]],["GatherElements",[Td,Id]],["GatherBlockQuantized",[$d,xd]],["GatherND",[yd,_d]],["Gelu",[Au]],["Gemm",[Cd,Md]],["GlobalAveragePool",[Rc,zc]],["GlobalMaxPool",[Dc,Bc]],["Greater",[ul]],["GreaterOrEqual",[dl]],["GridSample",[Pd,Ld]],["GroupQueryAttention",[ac]],["HardSigmoid",[Pu,Uu]],["InstanceNormalization",[uc]],["LayerNormalization",[cc]],["LeakyRelu",[zu,bn]],["Less",[ll]],["LessOrEqual",[cl]],["Log",[ju]],["MatMul",[hc]],["MatMulNBits",[yc,_c]],["MaxPool",[Oc,Nc]],["Mul",[al]],["MultiHeadAttention",[Vd,Gd]],["Neg",[Ou]],["Not",[Ru]],["Pad",[Ec]],["Pow",[sl]],["QuickGelu",[Yu,bn]],["Range",[Vc]],["Reciprocal",[Nu]],["ReduceMin",[Ho]],["ReduceMean",[qo]],["ReduceMax",[Fo]],["ReduceSum",[Ko]],["ReduceProd",[jo]],["ReduceL1",[Go]],["ReduceL2",[Wo]],["ReduceLogSum",[Yo]],["ReduceLogSumExp",[Vo]],["ReduceSumSquare",[Xo]],["Relu",[Bu]],["Resize",[cp,pp]],["RotaryEmbedding",[ec]],["ScatterND",[Kc,jc]],["Sigmoid",[Du]],["Sin",[Lu]],["Sinh",[qu]],["Slice",[bp,$p]],["SkipLayerNormalization",[mp]],["Split",[Yd,Zd]],["Sqrt",[Gu]],["Softmax",[Sp,Ip]],["Sub",[ol]],["Tan",[Wu]],["Tanh",[Vu]],["ThresholdedRelu",[Hu,bn]],["Tile",[Mp]],["Transpose",[oo,uo]],["Where",[zp]]])}),Op,n0=Y(()=>{Ye(),$t(),fe(),Op=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){pt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of n)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),et(e.programInfo.name)}dispose(){}build(e,t){pt(e.name);let n=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{n.features.has(d.feature)&&r.push(`enable ${d.extension};`)});let i=to(t,this.backend.device.limits),a=e.getShaderSource(i),s=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,o=n.createShaderModule({code:s,label:e.name});be("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=n.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return et(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,s=Math.ceil(Math.sqrt(a));if(s>i){if(s=Math.ceil(Math.cbrt(a)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Np={};nn(Np,{WebGpuBackend:()=>Pp});var Bp,Dp,Up,Pp,r0=Y(()=>{Ye(),de(),$t(),qs(),hg(),t0(),n0(),Bp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case"none":{n.push("");break}case"type":{n.push(`${i}`);break}case"rank":{let a=e[r].dims.length;n.push(`${i};${a}`);break}case"dims":{let a=e[r].dims.join(",");n.push(`${i};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return n.join("|")},Dp=(e,t,n)=>{var i,a;let r=e.name;return(i=e.shaderCache)!=null&&i.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+n+`:${Bp(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,r},Up=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Pp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=o=>t.features.has(o)&&n.push(o)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(r);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Up(s),this.gpuDataManager=Zs(this),this.programManager=new Op(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Hr(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;pt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=n[i],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,d=o.kernelName,p=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let _=Number(m-this.queryTimeBase),b=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(b))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:bt(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:bt(x.dataType)})),kernelId:s,kernelType:u,kernelName:d,programName:p,startTime:_,endTime:b});else{let x="";c.forEach((T,S)=>{x+=`input[${S}]: [${T.dims}] | ${bt(T.dataType)}, `});let $="";f.forEach((T,S)=>{$+=`output[${S}]: [${T.dims}] | ${bt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${d}|${p}" ${x}${$}start time: ${_} ns, execution time: ${b-_} ns`)}Pn("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),et()}run(e,t,n,r,i,a){pt(e.name);let s=[];for(let $=0;$<t.length;++$){let T=t[$].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);s.push(S)}let{outputs:o,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=n.length===0?o.map(($,T)=>T):n;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let c=[],f=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(p[$])||p[$]<-3||p[$]>=a)throw new Error(`Invalid output index: ${p[$]}`);if(p[$]===-3)continue;let T=p[$]===-1,S=p[$]===-2,E=T||S?i(o[$].dataType,o[$].dims):r(p[$],o[$].dataType,o[$].dims);if(c.push(E),E.data===0)continue;let k=this.gpuDataManager.get(E.data);if(!k)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(k),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(k)}f.push(k)}if(s.length!==t.length||f.length!==c.length){if(f.length===0)return et(e.name),c;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let $=0,T=[];d.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let R=C.type===10?2:4,O,F;C.type===10?(F=v.length>4?16:v.length>2?8:v.length*R,O=v.length>4?16:R*v.length):(F=v.length<=2?v.length*R:16,O=16),$=Math.ceil($/F)*F,T.push($);let L=C.type===10?8:4;$+=v.length>4?Math.ceil(v.length/L)*O:v.length*R});let S=16;$=Math.ceil($/S)*S;let E=new ArrayBuffer($);d.forEach((C,v)=>{let R=T[v],O=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,R,O.length).set(O);else if(C.type===12)new Uint32Array(E,R,O.length).set(O);else if(C.type===10)new Uint16Array(E,R,O.length).set(O);else if(C.type===1)new Float32Array(E,R,O.length).set(O);else throw new Error(`Unsupported uniform type: ${bt(C.type)}`)});let k=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(k.buffer,0,E,0,$),this.gpuDataManager.release(k.id),m={offset:0,size:$,buffer:k.buffer}}let g=this.programManager.normalizeDispatchGroupSize(u),_=g[1]===1&&g[2]===1,b=Dp(e,t,_),x=this.programManager.getArtifact(b);if(x||(x=this.programManager.build(e,g),this.programManager.setArtifact(b,x),be("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),d&&x.uniformVariablesInfo){if(d.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${d.length} in program "${x.programInfo.name}".`);for(let $=0;$<d.length;$++){let T=d[$],S=T.type,E=typeof T.data=="number"?1:T.data.length,[k,C]=x.uniformVariablesInfo[$];if(S!==k||E!==C)throw new Error(`Uniform variable ${$} mismatch: expect type ${k} with size ${C}, got type ${S} with size ${E} in program "${x.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:c};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(x,s,f,g,m),et(e.name),c}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Rp.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,s=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${d}`)),1}finally{u&&n.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),s=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await ii(this,e,t);return jr(r.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let i=this.getComputePassEncoder(),a=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Lp={};nn(Lp,{init:()=>Gp});var rr,qp,Gp,i0=Y(()=>{de(),$t(),he(),pg(),rr=class Wm{constructor(t,n,r,i){this.module=t,this.dataType=n,this.data=r,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=B.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(B.size(t)!==B.size(this.dims))throw new Error("Invalid new shape");return new Wm(this.module,this.dataType,this.data,t)}},qp=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*i++,a));let s=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,"*")),this.customDataSize=Number(e.getValue(r*i++,a));let o=[];for(let u=0;u<s;u++){let d=Number(e.getValue(r*i++,a)),p=Number(e.getValue(r*i++,"*")),c=Number(e.getValue(r*i++,a)),f=[];for(let m=0;m<c;m++)f.push(Number(e.getValue(r*i++,a)));o.push(new rr(e,d,p,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let n=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],i=(o,u,d)=>new rr(this.module,u,this.output(o,d),d),a=(o,u)=>{let d=Wt(o,u);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new rr(this.module,o,p,u)};return this.backend.run(e,n,r,i,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let r=this.module.PTR_SIZE,i=r===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*r);this.module.setValue(a,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(a+r*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(n)}}},Gp=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(r0(),hn(Np)).WebGpuBackend,s=new a;await s.initialize(n,r),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,d,p=!1)=>{if(p)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(o),Number(u));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let c=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(u),c)}},async(o,u,d)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(o,u,d)=>s.createKernel(o,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,d,p)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${u}`);let c=new qp(t,s,Number(u));return s.computeKernel(Number(o),c,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new js(n);i("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,d,p)=>a.ensureTensor(s,o,u,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!n.trace])}}}),Wp,Zi,Qi,Ct,Vp,Ji,ir,ea,ta,na,ra,ia,aa,Fp=Y(()=>{Ye(),lg(),dg(),de(),Lt(),qr(),As(),Wp=(e,t)=>{ke()._OrtInit(e,t)!==0&&Ie("Can't initialize onnxruntime.")},Zi=async e=>{Wp(e.wasm.numThreads,Vn(e.logLevel))},Qi=async(e,t)=>{var r,i;(i=(r=ke()).asyncInit)==null||i.call(r);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(i0(),hn(Lp)).init;t==="webgpu"&&await a("webgpu",ke(),e,n),t==="webnn"&&await a("webnn",ke(),e)}},Ct=new Map,Vp=e=>{let t=ke(),n=t.stackSave();try{let r=t.PTR_SIZE,i=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,i,i+r)!==0&&Ie("Can't get session input/output count.");let a=r===4?"i32":"i64";return[Number(t.getValue(i,a)),Number(t.getValue(i+r,a))]}finally{t.stackRestore(n)}},Ji=(e,t)=>{let n=ke(),r=n.stackSave(),i=0;try{let a=n.PTR_SIZE,s=n.stackAlloc(2*a);n._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Ie("Can't get session input/output metadata.");let o=Number(n.getValue(s,"*"));i=Number(n.getValue(s+a,"*"));let u=n.HEAP32[i/4];if(u===0)return[o,0];let d=n.HEAPU32[i/4+1],p=[];for(let c=0;c<d;c++){let f=Number(n.getValue(i+8+c*a,"*"));p.push(f!==0?n.UTF8ToString(f):Number(n.getValue(i+8+(c+d)*a,"*")))}return[o,u,p]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},ir=e=>{let t=ke(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},ea=async(e,t)=>{var c,f,m,g;let n,r,i=ke();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=ir(e);let a=0,s=0,o=0,u=[],d=[],p=[];try{if([s,u]=await Cs(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let v=[];for(let R of t.externalData){let O=typeof R=="string"?R:R.path;v.push(Fr(typeof R=="string"?R:R.data).then(F=>{i.mountExternalData(O,F)}))}await Promise.all(v)}for(let v of(t==null?void 0:t.executionProviders)??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let R=v,O=R==null?void 0:R.context,F=R==null?void 0:R.gpuDevice,L=R==null?void 0:R.deviceType,G=R==null?void 0:R.powerPreference;O?i.currentContext=O:F?i.currentContext=await i.webnnCreateMLContext(F):i.currentContext=await i.webnnCreateMLContext({deviceType:L,powerPreference:G})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,s),(c=i.webgpuOnCreateSession)==null||c.call(i,a),a===0&&Ie("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,b]=Vp(a),x=!!(t!=null&&t.enableGraphCapture),$=[],T=[],S=[],E=[],k=[];for(let v=0;v<_;v++){let[R,O,F]=Ji(a,v);R===0&&Ie("Can't get an input name."),d.push(R);let L=i.UTF8ToString(R);$.push(L),S.push(O===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:bt(O),shape:F})}for(let v=0;v<b;v++){let[R,O,F]=Ji(a,v+_);R===0&&Ie("Can't get an output name."),p.push(R);let L=i.UTF8ToString(R);T.push(L),E.push(O===0?{name:L,isTensor:!1}:{name:L,isTensor:!0,type:bt(O),shape:F});{if(x&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let G=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((m=t==null?void 0:t.preferredOutputLocation)==null?void 0:m[L])??"cpu",A=i.webnnIsGraphOutput;if(G==="cpu"&&A&&A(a,L)){k.push("ml-tensor-cpu-output");continue}if(G!=="cpu"&&G!=="cpu-pinned"&&G!=="gpu-buffer"&&G!=="ml-tensor")throw new Error(`Not supported preferred output location: ${G}.`);if(x&&G!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${G}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(G)}}let C=null;return k.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(a),o===0&&Ie("Can't create IO binding."),C={handle:o,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>Vr(v))}),Ct.set(a,[a,d,p,C,x,!1]),[a,$,T,S,E]}catch(_){throw d.forEach(b=>i._OrtFree(b)),p.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&Ie("Can't release IO binding."),a!==0&&i._OrtReleaseSession(a)!==0&&Ie("Can't release session."),_}finally{i._free(n),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&Ie("Can't release session options."),u.forEach(_=>i._free(_)),(g=i.unmountExternalData)==null||g.call(i)}},ta=e=>{var u,d,p;let t=ke(),n=Ct.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,s,o]=n;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Ie("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Ie("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),i.forEach(c=>t._OrtFree(c)),a.forEach(c=>t._OrtFree(c)),t._OrtReleaseSession(r)!==0&&Ie("Can't release session."),Ct.delete(e)},na=async(e,t,n,r,i,a,s=!1)=>{if(!e){t.push(0);return}let o=ke(),u=o.PTR_SIZE,d=e[0],p=e[1],c=e[3],f=c,m,g;if(d==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let x=e[2].gpuBuffer;g=Wt(Gt(d),p);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=$(r,a,x,g)}}else if(c==="ml-tensor"){let x=e[2].mlTensor;g=Wt(Gt(d),p);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=$(r,x,Gt(d),p)}else{let x=e[2];if(Array.isArray(x)){g=u*x.length,m=o._malloc(g),n.push(m);for(let $=0;$<x.length;$++){if(typeof x[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(m+$*u,tt(x[$],n),"*")}}else{let $=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(d!=="string"&&$&&T){let S=o.UTF8ToString(i);if($(r,S)||T(r,S)){let E=Gt(d);g=Wt(E,p),f="ml-tensor";let k=o.webnnCreateTemporaryTensor,C=o.webnnUploadTensor;if(!k||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await k(r,E,p);C(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),m=v}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}else g=x.byteLength,m=o._malloc(g),n.push(m),o.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,g),m)}}let _=o.stackSave(),b=o.stackAlloc(4*p.length);try{p.forEach(($,T)=>o.setValue(b+T*u,$,u===4?"i32":"i64"));let x=o._OrtCreateTensor(Gt(d),m,g,b,p.length,Vr(f));x===0&&Ie(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(x)}finally{o.stackRestore(_)}},ra=async(e,t,n,r,i,a)=>{var L,G,A,q;let s=ke(),o=s.PTR_SIZE,u=Ct.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],p=u[1],c=u[2],f=u[3],m=u[4],g=u[5],_=t.length,b=r.length,x=0,$=[],T=[],S=[],E=[],k=[],C=s.stackSave(),v=s.stackAlloc(_*o),R=s.stackAlloc(_*o),O=s.stackAlloc(b*o),F=s.stackAlloc(b*o);try{[x,$]=Is(a),Dt("wasm prepareInputOutputTensor");for(let N=0;N<_;N++)await na(n[N],T,E,e,p[t[N]],t[N],m);for(let N=0;N<b;N++)await na(i[N],S,E,e,c[r[N]],_+r[N],m);Ut("wasm prepareInputOutputTensor");for(let N=0;N<_;N++)s.setValue(v+N*o,T[N],"*"),s.setValue(R+N*o,p[t[N]],"*");for(let N=0;N<b;N++)s.setValue(O+N*o,S[N],"*"),s.setValue(F+N*o,c[r[N]],"*");if(f&&!g){let{handle:N,outputPreferredLocations:ee,outputPreferredLocationsEncoded:W}=f;if(p.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${p.length}).`);Dt("wasm bindInputsOutputs");for(let X=0;X<_;X++){let H=t[X];await s._OrtBindInput(N,p[H],T[X])!==0&&Ie(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<b;X++){let H=r[X];(L=i[X])!=null&&L[3]?(k.push(S[X]),s._OrtBindOutput(N,c[H],S[X],0)!==0&&Ie(`Can't bind pre-allocated output[${X}] for session=${e}.`)):s._OrtBindOutput(N,c[H],0,W[H])!==0&&Ie(`Can't bind output[${X}] to ${ee[X]} for session=${e}.`)}Ut("wasm bindInputsOutputs"),Ct.set(e,[d,p,c,f,m,!0])}(G=s.jsepOnRunStart)==null||G.call(s,d),(A=s.webnnOnRunStart)==null||A.call(s,d);let j;f?j=await s._OrtRunWithBinding(d,f.handle,b,O,x):j=await s._OrtRun(d,R,v,_,F,b,O,x),j!==0&&Ie("failed to call OrtRun().");let K=[],oe=[];Dt("wasm ProcessOutputTensor");for(let N=0;N<b;N++){let ee=Number(s.getValue(O+N*o,"*"));if(ee===S[N]||k.includes(S[N])){K.push(i[N]),ee!==S[N]&&s._OrtReleaseTensor(ee)!==0&&Ie("Can't release tensor.");continue}let W=s.stackSave(),X=s.stackAlloc(4*o),H=!1,V,le=0;try{s._OrtGetTensorData(ee,X,X+o,X+2*o,X+3*o)!==0&&Ie(`Can't access output tensor data on index ${N}.`);let $e=o===4?"i32":"i64",ue=Number(s.getValue(X,$e));le=s.getValue(X+o,"*");let D=s.getValue(X+o*2,"*"),Q=Number(s.getValue(X+o*3,$e)),J=[];for(let ce=0;ce<Q;ce++)J.push(Number(s.getValue(D+ce*o,$e)));s._OrtFree(D)!==0&&Ie("Can't free memory for tensor dims.");let ie=J.reduce((ce,se)=>ce*se,1);V=bt(ue);let pe=f==null?void 0:f.outputPreferredLocations[r[N]];if(V==="string"){if(pe==="gpu-buffer"||pe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ce=[];for(let se=0;se<ie;se++){let _e=s.getValue(le+se*o,"*"),qe=s.getValue(le+(se+1)*o,"*"),Ce=se===ie-1?void 0:qe-_e;ce.push(s.UTF8ToString(_e,Ce))}K.push([V,J,ce,"cpu"])}else if(pe==="gpu-buffer"&&ie>0){let ce=s.jsepGetBuffer;if(!ce)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=ce(le),_e=Wt(ue,ie);if(_e===void 0||!Gr(V))throw new Error(`Unsupported data type: ${V}`);H=!0,K.push([V,J,{gpuBuffer:se,download:s.jsepCreateDownloader(se,_e,V),dispose:()=>{s._OrtReleaseTensor(ee)!==0&&Ie("Can't release tensor.")}},"gpu-buffer"])}else if(pe==="ml-tensor"&&ie>0){let ce=s.webnnEnsureTensor,se=s.webnnIsGraphInputOutputTypeSupported;if(!ce||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Wt(ue,ie)===void 0||!Wr(V))throw new Error(`Unsupported data type: ${V}`);if(!se(e,V,!1))throw new Error(`preferredLocation "ml-tensor" for ${V} output is not supported by current WebNN Context.`);let _e=await ce(e,le,ue,J,!1);H=!0,K.push([V,J,{mlTensor:_e,download:s.webnnCreateMLTensorDownloader(le,V),dispose:()=>{s.webnnReleaseTensorId(le),s._OrtReleaseTensor(ee)}},"ml-tensor"])}else if(pe==="ml-tensor-cpu-output"&&ie>0){let ce=s.webnnCreateMLTensorDownloader(le,V)(),se=K.length;H=!0,oe.push((async()=>{let _e=[se,await ce];return s.webnnReleaseTensorId(le),s._OrtReleaseTensor(ee),_e})()),K.push([V,J,[],"cpu"])}else{let ce=Wn(V),se=new ce(ie);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(s.HEAPU8.subarray(le,le+se.byteLength)),K.push([V,J,se,"cpu"])}}finally{s.stackRestore(W),V==="string"&&le&&s._free(le),H||s._OrtReleaseTensor(ee)}}f&&!m&&(s._OrtClearBoundOutputs(f.handle)!==0&&Ie("Can't clear bound outputs."),Ct.set(e,[d,p,c,f,m,!1]));for(let[N,ee]of await Promise.all(oe))K[N][2]=ee;return Ut("wasm ProcessOutputTensor"),K}finally{(q=s.webnnOnRunEnd)==null||q.call(s,d),s.stackRestore(C),T.forEach(j=>s._OrtReleaseTensor(j)),S.forEach(j=>s._OrtReleaseTensor(j)),E.forEach(j=>s._free(j)),x!==0&&s._OrtReleaseRunOptions(x),$.forEach(j=>s._free(j))}},ia=e=>{let t=ke(),n=Ct.get(e);if(!n)throw new Error("invalid session id");let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ie("Can't get an profile file name."),t._OrtFree(i)},aa=e=>{let t=[];for(let n of e){let r=n[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),At,He,un,En,kn,ar,sa,sr,Yt,Zt,Hp,jp,Kp,Xp,Yp,Zp,Qp,Jp,eh=Y(()=>{Ye(),Fp(),Lt(),Dr(),At=()=>!!Ee.wasm.proxy&&typeof document<"u",un=!1,En=!1,kn=!1,sr=new Map,Yt=(e,t)=>{let n=sr.get(e);n?n.push(t):sr.set(e,[t])},Zt=()=>{if(un||!En||kn||!He)throw new Error("worker not ready")},Hp=e=>{switch(e.data.type){case"init-wasm":un=!1,e.data.err?(kn=!0,sa[1](e.data.err)):(En=!0,sa[0]()),ar&&(URL.revokeObjectURL(ar),ar=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=sr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},jp=async()=>{if(!En){if(un)throw new Error("multiple calls to 'initWasm()' detected.");if(kn)throw new Error("previous call to 'initWasm()' failed.");if(un=!0,At())return new Promise((e,t)=>{He==null||He.terminate(),bs().then(([n,r])=>{try{He=r,He.onerror=a=>t(a),He.onmessage=Hp,sa=[e,t];let i={type:"init-wasm",in:Ee};!i.in.wasm.wasmPaths&&(n||Rr)&&(i.in.wasm.wasmPaths={wasm:new URL("/7wd-scorer/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",self.location.href).href}),He.postMessage(i),ar=n}catch(i){t(i)}},t)});try{await Lr(Ee.wasm),await Zi(Ee),En=!0}catch(e){throw kn=!0,e}finally{un=!1}}},Kp=async e=>{if(At())return Zt(),new Promise((t,n)=>{Yt("init-ep",[t,n]);let r={type:"init-ep",in:{epName:e,env:Ee}};He.postMessage(r)});await Qi(Ee,e)},Xp=async e=>At()?(Zt(),new Promise((t,n)=>{Yt("copy-from",[t,n]);let r={type:"copy-from",in:{buffer:e}};He.postMessage(r,[e.buffer])})):ir(e),Yp=async(e,t)=>{if(At()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Zt(),new Promise((n,r)=>{Yt("create",[n,r]);let i={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),He.postMessage(i,a)})}else return ea(e,t)},Zp=async e=>{if(At())return Zt(),new Promise((t,n)=>{Yt("release",[t,n]);let r={type:"release",in:e};He.postMessage(r)});ta(e)},Qp=async(e,t,n,r,i,a)=>{if(At()){if(n.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Zt(),new Promise((s,o)=>{Yt("run",[s,o]);let u=n,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:a}};He.postMessage(d,aa(u))})}else return ra(e,t,n,r,i,a)},Jp=async e=>{if(At())return Zt(),new Promise((t,n)=>{Yt("end-profiling",[t,n]);let r={type:"end-profiling",in:e};He.postMessage(r)});ia(e)}}),oa,th,nh,a0=Y(()=>{Ye(),eh(),de(),Mr(),As(),oa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},th=e=>{switch(e[3]){case"cpu":return new We(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Gr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return We.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case"ml-tensor":{let t=e[0];if(!Wr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return We.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},nh=class{async fetchModelAndCopyToWasmMemory(e){return Xp(await Fr(e))}async loadModel(e,t){pt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Yp(n,t),et()}async dispose(){return Zp(this.sessionId)}async run(e,t,n){pt();let r=[],i=[];Object.entries(e).forEach(c=>{let f=c[0],m=c[1],g=this.inputNames.indexOf(f);if(g===-1)throw new Error(`invalid input '${f}'`);r.push(m),i.push(g)});let a=[],s=[];Object.entries(t).forEach(c=>{let f=c[0],m=c[1],g=this.outputNames.indexOf(f);if(g===-1)throw new Error(`invalid output '${f}'`);a.push(m),s.push(g)});let o=r.map((c,f)=>oa(c,()=>`input "${this.inputNames[i[f]]}"`)),u=a.map((c,f)=>c?oa(c,()=>`output "${this.outputNames[s[f]]}"`):null),d=await Qp(this.sessionId,i,o,s,u,n),p={};for(let c=0;c<d.length;c++)p[this.outputNames[s[c]]]=a[c]??th(d[c]);return et(),p}startProfiling(){}endProfiling(){Jp(this.sessionId)}}}),rh={};nn(rh,{OnnxruntimeWebAssemblyBackend:()=>la,initializeFlags:()=>ua,wasmBackend:()=>ih});var ua,la,ih,s0=Y(()=>{Ye(),eh(),a0(),ua=()=>{(typeof Ee.wasm.initTimeout!="number"||Ee.wasm.initTimeout<0)&&(Ee.wasm.initTimeout=0);let e=Ee.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ee.wasm.simd=!1),typeof Ee.wasm.proxy!="boolean"&&(Ee.wasm.proxy=!1),typeof Ee.wasm.trace!="boolean"&&(Ee.wasm.trace=!1),typeof Ee.wasm.numThreads!="number"||!Number.isInteger(Ee.wasm.numThreads)||Ee.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ee.wasm.numThreads=1;else{let t=typeof navigator>"u"?Fm("node:os").cpus().length:navigator.hardwareConcurrency;Ee.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},la=class{async init(e){ua(),await jp(),await Kp(e)}async createInferenceSessionHandler(e,t){let n=new nh;return await n.loadModel(e,t),n}},ih=new la});Ye(),Ye(),Ye();var o0="1.27.0";{let e=(s0(),hn(rh)).wasmBackend;rn("webgpu",e,5),rn("webnn",e,5),rn("cpu",e,10),rn("wasm",e,10)}Object.defineProperty(Ee.versions,"web",{value:o0,enumerable:!0});/**
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
 */const u0=114;function l0(e,t,n){const r=Math.min(n/e,n/t),i=Math.round(e*r),a=Math.round(t*r);return{scale:r,padX:Math.floor((n-i)/2),padY:Math.floor((n-a)/2),resizedWidth:i,resizedHeight:a}}function da(e,t,n){const{width:r,height:i,channels:a,data:s}=e,o=new Uint8Array(t*n*3),u=r/t,d=i/n;for(let p=0;p<n;p++){const c=(p+.5)*d-.5,f=Math.max(0,Math.min(i-1,Math.floor(c))),m=Math.min(i-1,f+1),g=Math.max(0,Math.min(1,c-f));for(let _=0;_<t;_++){const b=(_+.5)*u-.5,x=Math.max(0,Math.min(r-1,Math.floor(b))),$=Math.min(r-1,x+1),T=Math.max(0,Math.min(1,b-x)),S=(f*r+x)*a,E=(f*r+$)*a,k=(m*r+x)*a,C=(m*r+$)*a,v=(p*t+_)*3;for(let R=0;R<3;R++){const O=s[S+R]*(1-T)+s[E+R]*T,F=s[k+R]*(1-T)+s[C+R]*T;o[v+R]=Math.min(255,Math.max(0,Math.round(O*(1-g)+F*g)))}}}return o}function d0(e,t){const n=l0(e.width,e.height,t),r=da(e,n.resizedWidth,n.resizedHeight),i=t*t,a=new Float32Array(3*i).fill(u0/255);for(let s=0;s<n.resizedHeight;s++){const o=(s+n.padY)*t+n.padX,u=s*n.resizedWidth;for(let d=0;d<n.resizedWidth;d++){const p=(u+d)*3,c=o+d;a[c]=r[p]/255,a[i+c]=r[p+1]/255,a[2*i+c]=r[p+2]/255}}return{tensor:a,params:n}}function c0(e,t,n,r){const i=[],a=Math.floor(e.length/6);for(let s=0;s<a;s++){const o=e[s*6],u=e[s*6+1],d=e[s*6+2],p=e[s*6+3],c=e[s*6+4],f=e[s*6+5];if(c<n)continue;const m=Math.round(f);if(m<0||m>=r)continue;const g=(o-t.padX)/t.scale,_=(u-t.padY)/t.scale,b=(d-t.padX)/t.scale,x=(p-t.padY)/t.scale;i.push({classIndex:m,confidence:c,box:[Math.trunc(g),Math.trunc(_),Math.trunc(b-g),Math.trunc(x-_)],boxFloat:[g,_,b-g,x-_]})}return i}function Mn(e){const t=Math.floor(e);return e-t===.5?t%2===0?t:t+1:Math.round(e)}function ah(e){if(e.length===0)return Number.NaN;const t=[...e].sort((r,i)=>r-i),n=Math.floor(t.length/2);return t.length%2===1?t[n]:(t[n-1]+t[n])/2}function sh(e,t){if(e.length===0)return Number.NaN;const n=[...e].sort((s,o)=>s-o),r=t/100*(n.length-1),i=Math.floor(r),a=Math.ceil(r);return i===a?n[i]:n[i]*(a-r)+n[a]*(r-i)}const p0=.6,h0=.8;function oh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++){if(e[a*6+4]<n)continue;const o=(e[a*6]-t.padX)/t.scale,u=(e[a*6+1]-t.padY)/t.scale,d=(e[a*6+2]-t.padX)/t.scale,p=(e[a*6+3]-t.padY)/t.scale,c=Mn((o+d)/2),f=Mn((u+p)/2),m=Mn((d-o+(p-u))/4);m>=1&&r.push({cx:c,cy:f,r:m})}return r}function f0(e){const t=[];for(const n of[...e].sort((r,i)=>r.r-i.r)){const r=(p0*n.r)**2;t.every(i=>(n.cx-i.cx)**2+(n.cy-i.cy)**2>r)&&t.push(n)}return t}function m0(e){const t=[];for(const n of[...e].sort((r,i)=>i.r-r.r))t.every(r=>Math.hypot(n.cx-r.cx,n.cy-r.cy)>=h0*(n.r+r.r))&&t.push(n);return t}function g0(e){if(e.length===0)return[];const t=Math.max(1,Math.trunc(ah(e.map(n=>n.r))*1.5));return[...e].sort((n,r)=>{const i=Math.floor(n.cy/t),a=Math.floor(r.cy/t);return i!==a?i-a:n.cx-r.cx})}function uh(e,t,n){const r=oh(e,t,n);return r.length===0?[]:g0(m0(f0(r)))}function y0(e,t,n){return oh(e,t,n)}function lh(e,t,n){const r=[],i=Math.floor(e.length/6);for(let a=0;a<i;a++)e[a*6+4]<n||r.push([(e[a*6]-t.padX)/t.scale,(e[a*6+1]-t.padY)/t.scale,(e[a*6+2]-t.padX)/t.scale,(e[a*6+3]-t.padY)/t.scale]);return r}const dh=["brown","grey","blue","green","yellow","red","purple"],_0={brown:"raw",grey:"manufactured",blue:"civilian",green:"scientific",yellow:"commercial",red:"military",purple:"guild"};function ch(e,t,n){return c0(e,t,n,dh.length).map(r=>{const i=dh[r.classIndex];return{color:i,family:_0[i],box:r.box,confidence:r.confidence}})}const w0=8,b0=.8,ph=1.25;function $0(e){if(e.length<w0)return[];const t=[],n=[];for(const s of e){const[,,o,u]=s.box;o>u*ph?t.push(s):u>o*ph&&n.push(s)}const[r,i,a]=t.length>=n.length?[t,n,"vertical"]:[n,t,"horizontal"];return r.length<b0*e.length||i.length===0?[]:i.map(s=>({family:s.family,color:s.color,box:[...s.box],reason:`${s.color} banner sits ${a} while ${r.length}/${e.length} of the tableau faces the other way — probably a stray card poking into the frame`}))}const x0=2.25,hh=8;function v0(e){if(e.length<hh)return[];const t=e.map(c=>[c.box[0]+c.box[2]/2,c.box[1]+c.box[3]/2]),n=e.map(c=>Math.hypot(c.box[2],c.box[3])).sort((c,f)=>c-f),r=x0*n[Math.floor(n.length/2)],i=r*r,a=e.map((c,f)=>f),s=c=>{for(;a[c]!==c;)a[c]=a[a[c]],c=a[c];return c};for(let c=0;c<e.length;c++)for(let f=c+1;f<e.length;f++){const m=t[c][0]-t[f][0],g=t[c][1]-t[f][1];m*m+g*g<=i&&(a[s(c)]=s(f))}const o=new Map;for(let c=0;c<e.length;c++){const f=s(c);o.set(f,[...o.get(f)??[],c])}let u=[];for(const c of o.values())c.length>u.length&&(u=c);if(u.length<hh||u.length===e.length)return[];const d=new Set(u),p=e.map((c,f)=>f).filter(c=>!d.has(c));return p.map(c=>({family:e[c].family,color:e[c].color,box:[...e[c].box],reason:`${e[c].color} banner sits in a detached group of ${p.length}, away from the ${u.length}-card tableau — probably the draw/discard pile, not this player's city`}))}const vt={banner:{onnx:"banner_yolo.onnx",input:1280,conf:.5},coin:{onnx:"coin_yolo.onnx",input:1280,conf:.25},laurel:{onnx:"laurel_yolo.onnx",input:1280,conf:.25},token:{onnx:"token_yolo.onnx",input:1280,conf:.4}};function ot(e,t,n){const r=Math.max(e,t,n),i=Math.min(e,t,n),a=r-i,s=r===0?0:Math.round(255*a/r);if(a===0)return{h:0,s,v:r};let o;return r===e?o=60*(t-n)/a:r===t?o=120+60*(n-e)/a:o=240+60*(e-t)/a,o<0&&(o+=360),{h:Math.round(o/2),s,v:r}}const S0=.42,I0=22,T0=43,E0=120,k0=1.5,M0=.72,C0=110,fh=3;function Cn(e,t,n){const{width:r,height:i,channels:a,data:s}=e;if(r<4||i<4)return 0;const o=Math.floor(r/2),u=Math.floor(i/2),d=Math.trunc(Math.min(r,i)*S0);if(d<1)return 0;let p=0;for(let c=0;c<i;c++)for(let f=0;f<r;f++){if((f-o)**2+(c-u)**2>d*d)continue;const m=(c*r+f)*a,g=s[m],_=s[m+1],b=s[m+2];!t&&g>=250&&_>=250&&b>=250||(n(g,_,b),p+=1)}return p}function A0(e){let t=0,n=0,r=0,i=Cn(e,!1,(a,s,o)=>{const u=ot(a,s,o);t+=u.h,n+=u.s,r+=u.v});return i===0&&(i=Cn(e,!0,(a,s,o)=>{const u=ot(a,s,o);t+=u.h,n+=u.s,r+=u.v})),i===0?null:{h:t/i,s:n/i,v:r/i}}function z0(e){let t=0,n=0,r=Cn(e,!1,(a,s)=>{t+=a,n+=s});if(r===0&&(r=Cn(e,!0,(a,s)=>{t+=a,n+=s})),r===0)return null;const i=n/r;return i<=1e-6?null:t/r/i}function R0(e){let t=0;const n=Cn(e,!0,(r,i,a)=>{t+=ot(r,i,a).s});return n===0?null:t/n}function O0(e){const t=A0(e);if(t===null||t.s<=I0)return 1;if(t.s>=E0){const n=z0(e);return n!==null&&n>=k0?6:3}return t.s>=T0?3:6}function N0(e,t){const n=[...t];if(e.length!==3||t.length!==3||new Set(t).size===3&&t.every(s=>[1,3,6].includes(s)))return n;const r=e.map(s=>s.r).sort((s,o)=>s-o);if(r[0]<=0||!(r[1]>=r[0]*1.12&&r[2]>=r[1]*1.12))return n;const i=[0,1,2].sort((s,o)=>e[s].r-e[o].r),a=new Map([[i[0],1],[i[1],3],[i[2],6]]);return[0,1,2].map(s=>a.get(s))}function B0(e,t){const n=[...t];if(e.length<fh||t.length!==e.length)return n;const r=e.map(s=>R0(s)),i=r.filter(s=>s!==null);if(i.length<fh)return n;const a=ah(i);return a<=0||r.forEach((s,o)=>{s!==null&&n[o]!==1&&s<M0*a&&s<C0&&(n[o]=1)}),n}function mh(e,t){const{cx:n,cy:r,r:i}=t,a=Math.max(0,n-i),s=Math.max(0,r-i),o=Math.min(e.width,n+i),u=Math.min(e.height,r+i),d=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(d*p*3);for(let f=0;f<p;f++)for(let m=0;m<d;m++){const g=(f*d+m)*3;if((m+a-n)**2+(f+s-r)**2<=i*i){const b=((f+s)*e.width+(m+a))*e.channels;c[g]=e.data[b],c[g+1]=e.data[b+1],c[g+2]=e.data[b+2]}else c[g]=255,c[g+1]=255,c[g+2]=255}return{width:d,height:p,channels:3,data:c}}function D0(e,t){const n=t.map(a=>mh(e,a)),r=n.map(a=>O0(a)),i=N0(t,r);return B0(n,i)}function U0(e){const{width:t,height:n,channels:r,data:i}=e,a=new Uint8Array(t*n);for(let s=0,o=0;s<a.length;s++,o+=r)a[s]=i[o]*4899+i[o+1]*9617+i[o+2]*1868+8192>>14;return{width:t,height:n,data:a}}function gh(e,t,n){const r=new Uint8Array(t*n),i=e.width/t,a=e.height/n;for(let s=0;s<n;s++){const o=s*a,u=Math.min((s+1)*a,e.height);for(let d=0;d<t;d++){const p=d*i,c=Math.min((d+1)*i,e.width);let f=0,m=0;for(let g=Math.floor(o);g<u;g++){const _=Math.min(g+1,u)-Math.max(g,o);if(!(_<=0))for(let b=Math.floor(p);b<c;b++){const x=Math.min(b+1,c)-Math.max(b,p);x<=0||(f+=e.data[g*e.width+b]*x*_,m+=x*_)}}r[s*t+d]=Math.min(255,Math.max(0,Mn(f/m)))}}return{width:t,height:n,data:r}}function P0(e){const t=new Array(256).fill(0);for(const u of e.data)t[u]+=1;const n=e.data.length;let r=0;for(;r<256&&t[r]===0;)r+=1;const i=new Uint8Array(n);if(r>=255||t[r]===n)return i.fill(r<256?r:0),{width:e.width,height:e.height,data:i};const a=255/(n-t[r]),s=new Uint8Array(256);let o=0;for(let u=r+1;u<256;u++)o+=t[u],s[u]=Math.min(255,Math.max(0,Mn(o*a)));for(let u=0;u<n;u++)i[u]=s[e.data[u]];return{width:e.width,height:e.height,data:i}}function L0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!0;for(let u=-1;u<=1&&o;u++)for(let d=-1;d<=1;d++){const p=s+d,c=a+u;if(!(p<0||p>=t||c<0||c>=n)&&r[c*t+p]===0){o=!1;break}}i[a*t+s]=o&&r[a*t+s]>0?255:0}return{width:t,height:n,data:i}}function q0(e){const{width:t,height:n,data:r}=e,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let s=0;s<t;s++){let o=!1;for(let u=-1;u<=1&&!o;u++)for(let d=-1;d<=1;d++){const p=s+d,c=a+u;if(p>=0&&p<t&&c>=0&&c<n&&r[c*t+p]>0){o=!0;break}}i[a*t+s]=o?255:0}return{width:t,height:n,data:i}}function ca(e){const{width:t,height:n,data:r}=e,i=new Int32Array(t*n),a=[],s=new Int32Array(t*n);let o=1;for(let u=0;u<r.length;u++){if(r[u]===0||i[u]!==0)continue;let d=0,p=0;s[p++]=u,i[u]=o;let c=0,f=0,m=0;for(;d<p;){const g=s[d++],_=g%t,b=g/t|0;c+=1,f+=_,m+=b;for(let x=-1;x<=1;x++)for(let $=-1;$<=1;$++){if($===0&&x===0)continue;const T=_+$,S=b+x;if(T<0||T>=t||S<0||S>=n)continue;const E=S*t+T;r[E]>0&&i[E]===0&&(i[E]=o,s[p++]=E)}}a[o]={area:c,centroidX:f/c,centroidY:m/c},o+=1}return{labels:i,stats:a}}function G0(e,t,n){return yh(Float32Array.from(e.data),e.width,t,n)}function yh(e,t,n,r){const i=new Float32Array(t*t),a=t/2,s=-n*Math.PI/180,o=Math.cos(s),u=Math.sin(s);for(let d=0;d<t;d++)for(let p=0;p<t;p++){const c=p-a,f=d-a,m=o*c-u*f+a,g=u*c+o*f+a,_=Math.floor(m),b=Math.floor(g),x=m-_,$=g-b,T=(k,C)=>k>=0&&k<t&&C>=0&&C<t?e[C*t+k]:r,S=T(_,b)*(1-x)+T(_+1,b)*x,E=T(_,b+1)*(1-x)+T(_+1,b+1)*x;i[d*t+p]=S*(1-$)+E*$}return i}const W0=.9,V0=.34,F0=[.55,.6,.66,.72],H0=22,j0=88,K0=35,ln=28,pa=4,X0=Array.from({length:15},(e,t)=>-21+t*3),_h=[-2,0,2],Y0=3,Z0=.3;function Q0(e){return e.templates.flatMap(({label:t,bits:n})=>{const r=Uint8Array.from(atob(n),i=>i.charCodeAt(0));return r.length!==e.size*e.size?[]:[{label:t,bits:Float32Array.from(r)}]})}function J0(e){let t=e.width,n=-1,r=e.height,i=-1,a=0;for(let _=0;_<e.height;_++)for(let b=0;b<e.width;b++)e.data[_*e.width+b]>0&&(a+=1,t=Math.min(t,b),n=Math.max(n,b),r=Math.min(r,_),i=Math.max(i,_));if(a<8)return null;const s=n-t+1,o=i-r+1,u=Math.max(o,s),d=new Uint8Array(u*u),p=Math.floor((u-s)/2),c=Math.floor((u-o)/2);for(let _=0;_<o;_++)for(let b=0;b<s;b++)d[(_+c)*u+(b+p)]=e.data[(_+r)*e.width+(b+t)];const f=ln-2*pa,m=gh({width:u,height:u,data:d},f,f),g=new Float32Array(ln*ln);for(let _=0;_<f;_++)for(let b=0;b<f;b++)g[(_+pa)*ln+(b+pa)]=m.data[_*f+b]>110?1:0;return g}function ey(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(r/2),o=Math.floor(n/2),u=Math.trunc(Math.min(n,r)*V0);if(u<4)return null;const d=s-u,p=o-u,c=2*u,f=2*u;if(c<6||f<6)return null;const m=new Int16Array(c*f),g=new Int16Array(c*f),_=new Int16Array(c*f),b=new Uint8Array(c*f),x=[],$=Math.min(c,f)/2;for(let N=0;N<c;N++)for(let ee=0;ee<f;ee++){const W=((N+d)*n+(ee+p))*i,{h:X,s:H,v:V}=ot(a[W],a[W+1],a[W+2]),le=N*f+ee;m[le]=X,g[le]=H,_[le]=V,Math.sqrt((ee-f/2)**2+(N-c/2)**2)/$<=t&&(b[le]=1,x.push(V))}if(x.length<16)return null;const T=sh(x,55);let S=0,E=0,k=0;const C=N=>m[N]>=H0&&m[N]<=j0&&g[N]>=K0,v=N=>_[N]>=T&&g[N]<=95&&!C(N)&&b[N]===1;for(let N=0;N<c*f;N++)b[N]===1&&(k+=1,_[N]>=130&&!C(N)&&(S+=1),v(N)&&(E+=1));const R=S>.5*k&&E<.15*k,O=new Uint8Array(c*f);if(R){const N=sh(x,45);for(let ee=0;ee<c*f;ee++)O[ee]=b[ee]===1&&_[ee]<=N?255:0}else for(let N=0;N<c*f;N++)O[N]=v(N)?255:0;const F={width:f,height:c,data:O},L=L0(F);let G=ca(L),A=G;if(G.stats.length<=1&&(G=ca(F),A=G,G.stats.length<=1))return null;const q=Math.min(c,f)/2;let j=0,K=-1;for(let N=1;N<A.stats.length;N++){const ee=A.stats[N];if(ee===void 0)continue;const W=Math.hypot(ee.centroidX-f/2,ee.centroidY-c/2)/q,X=ee.area*(1-.6*Math.min(W,1));X>K&&(K=X,j=N)}if(j===0)return null;const oe=new Uint8Array(c*f);for(let N=0;N<c*f;N++)oe[N]=A.labels[N]===j?255:0;return J0(q0({width:f,height:c,data:oe}))}function ty(e,t,n,r,i,a){const s=ln;let o=0,u=0;for(let d=0;d<s;d++){const p=d-a;if(!(p<0||p>=s))for(let c=0;c<s;c++){const f=c-i;if(f<0||f>=s)continue;const m=e[p*s+f];m!==0&&(u+=m,o+=m*n[d*s+c])}}return o/(u+r-o+1e-6)}function ny(e,t){const n=t.reduce((i,a)=>i+a,0);let r=-1;for(const i of X0){const a=i===0?e:yh(e,ln,i,0),s=a.reduce((o,u)=>o+u,0);for(const o of _h)for(const u of _h){const d=ty(a,s,t,n,o,u);d>r&&(r=d)}}return r}function ry(e,t){if(t.length===0||Math.min(e.width,e.height)<8)return[null,0];const n=[];for(const s of F0){const o=ey(e,s);if(o!==null)for(const{label:u,bits:d}of t)n.push([ny(o,d),u])}if(n.length===0)return[null,0];if(n.sort((s,o)=>o[0]-s[0]),n[0][0]<Z0)return[null,0];const r=new Map;for(const[s,o]of n.slice(0,Y0))r.set(o,(r.get(o)??0)+s);let i=0,a=-1;for(const[s,o]of r)o>a&&(a=o,i=s);return[i,n[0][0]]}const iy=2560,ay=.3,sy=.5,oy=1.6,uy=3,ly=5;function dy(e){const t=Math.min(1,iy/Math.max(e.width,e.height)),n=Math.max(32,Math.round(e.width*t/32)*32),r=Math.max(32,Math.round(e.height*t/32)*32),i=n*r,a=new Float32Array(3*i),s=e.width/n,o=e.height/r;for(let u=0;u<r;u++){const d=(u+.5)*o-.5,p=Math.max(0,Math.min(e.height-1,Math.floor(d))),c=Math.min(e.height-1,p+1),f=Math.max(0,Math.min(1,d-p));for(let m=0;m<n;m++){const g=(m+.5)*s-.5,_=Math.max(0,Math.min(e.width-1,Math.floor(g))),b=Math.min(e.width-1,_+1),x=Math.max(0,Math.min(1,g-_));for(let $=0;$<3;$++){const T=2-$,S=(p*e.width+_)*e.channels+T,E=(p*e.width+b)*e.channels+T,k=(c*e.width+_)*e.channels+T,C=(c*e.width+b)*e.channels+T,v=e.data[S]*(1-x)+e.data[E]*x,R=e.data[k]*(1-x)+e.data[C]*x,O=v*(1-f)+R*f;a[$*i+u*n+m]=(O/255-.5)/.5}}}return{tensor:a,width:n,height:r}}function cy(e,t,n){const r=new Uint8Array(e.length);for(let i=0;i<n;i++){const a=i===n-1;for(let s=0;s<t;s++){const o=i*t+s;let u=e[o];if(s+1<t&&e[o+1]>u&&(u=e[o+1]),!a){const d=o+t;e[d]>u&&(u=e[d]),s+1<t&&e[d+1]>u&&(u=e[d+1])}r[o]=u}}return r}function py(e){if(e.length<3)return e;const t=[...e].sort((a,s)=>a[0]-s[0]||a[1]-s[1]),n=(a,s,o)=>(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0]),r=[];for(const a of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}const i=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],s)<=0;)i.pop();i.push(s)}return r.pop(),i.pop(),r.concat(i)}function hy(e){if(e.length===1)return{cx:e[0][0],cy:e[0][1],w:0,h:0,angle:0};let t=null,n=1/0;for(let r=0;r<e.length;r++){const[i,a]=e[r],[s,o]=e[(r+1)%e.length],u=s-i,d=o-a,p=Math.hypot(u,d);if(p===0)continue;const c=u/p,f=d/p;let m=1/0,g=-1/0,_=1/0,b=-1/0;for(const[S,E]of e){const k=S*c+E*f,C=-S*f+E*c;k<m&&(m=k),k>g&&(g=k),C<_&&(_=C),C>b&&(b=C)}const x=g-m,$=b-_,T=x*$;if(T<n){n=T;const S=(m+g)/2,E=(_+b)/2;t={cx:S*c-E*f,cy:S*f+E*c,w:x,h:$,angle:Math.atan2(f,c)}}}return t}function fy(e,t,n,r){const i=Math.cos(r.angle),a=Math.sin(r.angle),s=r.w/2,o=r.h/2,u=Math.abs(s*i)+Math.abs(o*a),d=Math.abs(s*a)+Math.abs(o*i),p=Math.max(0,Math.floor(r.cx-u)),c=Math.min(t-1,Math.ceil(r.cx+u)),f=Math.max(0,Math.floor(r.cy-d)),m=Math.min(n-1,Math.ceil(r.cy+d));let g=0,_=0;for(let b=f;b<=m;b++)for(let x=p;x<=c;x++){const $=x-r.cx,T=b-r.cy,S=$*i+T*a,E=-$*a+T*i;Math.abs(S)<=s&&Math.abs(E)<=o&&(g+=e[b*t+x],_+=1)}return _===0?0:g/_}function my(e){const t=Math.cos(e.angle),n=Math.sin(e.angle),r=e.w/2,i=e.h/2,s=[...[[e.cx+-r*t- -i*n,e.cy+-r*n+-i*t],[e.cx+r*t- -i*n,e.cy+r*n+-i*t],[e.cx+r*t-i*n,e.cy+r*n+i*t],[e.cx+-r*t-i*n,e.cy+-r*n+i*t]]].sort((_,b)=>_[0]-b[0]),[o,u,d,p]=s,[c,f]=o[1]<=u[1]?[o,u]:[u,o],[m,g]=d[1]<=p[1]?[d,p]:[p,d];return[[c[0],c[1]],[m[0],m[1]],[g[0],g[1]],[f[0],f[1]]]}function gy(e,t,n,r){const{width:i,height:a}=t;let s=new Uint8Array(i*a);for(let m=0;m<s.length;m++)s[m]=e[m]>ay?255:0;s=cy(s,i,a);const o={width:i,height:a,data:s},{labels:u}=ca(o),d=new Map;for(let m=0;m<a;m++)for(let g=0;g<i;g++){const _=u[m*i+g];if(_===0)continue;let b=d.get(_);b===void 0&&(b=new Map,d.set(_,b));const x=b.get(m);x===void 0?b.set(m,[g,g]):(g<x[0]&&(x[0]=g),g>x[1]&&(x[1]=g))}const p=n/i,c=r/a,f=[];for(const[m,g]of d){const _=[];for(const[O,[F,L]]of g)_.push([F-.5,O-.5],[F-.5,O+.5],[L+.5,O-.5],[L+.5,O+.5]);const b=hy(py(_));if(Math.min(b.w,b.h)<uy)continue;const x=fy(e,i,a,b);if(x<sy)continue;const $=b.w*b.h*oy/(2*(b.w+b.h)),T={...b,w:b.w+2*$,h:b.h+2*$};if(Math.min(T.w,T.h)<ly+2)continue;const E=my(T).map(([O,F])=>[Math.min(n,Math.max(0,Math.round(O*p))),Math.min(r,Math.max(0,Math.round(F*c)))]),k=E.map(O=>O[0]),C=E.map(O=>O[1]),v=Math.min(...k),R=Math.min(...C);f.push({quad:E,x:v,y:R,width:Math.max(...k)-v,height:Math.max(...C)-R,score:x})}return f.sort((m,g)=>g.score-m.score)}function yy(e,t){const[n,r,i,a]=t,s=Math.max(1,Math.round(Math.max(Math.hypot(r[0]-n[0],r[1]-n[1]),Math.hypot(i[0]-a[0],i[1]-a[1])))),o=Math.max(1,Math.round(Math.max(Math.hypot(a[0]-n[0],a[1]-n[1]),Math.hypot(i[0]-r[0],i[1]-r[1])))),u=_y([[0,0],[s,0],[s,o],[0,o]],[n,r,i,a]),d=new Uint8Array(s*o*e.channels);for(let c=0;c<o;c++)for(let f=0;f<s;f++){const m=u[6]*f+u[7]*c+u[8],g=(u[0]*f+u[1]*c+u[2])/m,_=(u[3]*f+u[4]*c+u[5])/m,b=Math.floor(g),x=Math.floor(_),$=g-b,T=_-x,S=Math.max(0,Math.min(e.width-1,b)),E=Math.max(0,Math.min(e.width-1,b+1)),k=Math.max(0,Math.min(e.height-1,x)),C=Math.max(0,Math.min(e.height-1,x+1));for(let v=0;v<e.channels;v++){const R=e.data[(k*e.width+S)*e.channels+v],O=e.data[(k*e.width+E)*e.channels+v],F=e.data[(C*e.width+S)*e.channels+v],L=e.data[(C*e.width+E)*e.channels+v],G=R*(1-$)+O*$,A=F*(1-$)+L*$;d[(c*s+f)*e.channels+v]=Math.round(G*(1-T)+A*T)}}const p={width:s,height:o,channels:e.channels,data:d};return o/s>=1.5?An(p,3):p}function _y(e,t){const n=[],r=[];for(let i=0;i<4;i++){const[a,s]=e[i],[o,u]=t[i];n.push([a,s,1,0,0,0,-o*a,-o*s]),r.push(o),n.push([0,0,0,a,s,1,-u*a,-u*s]),r.push(u)}for(let i=0;i<8;i++){let a=i;for(let o=i+1;o<8;o++)Math.abs(n[o][i])>Math.abs(n[a][i])&&(a=o);[n[i],n[a]]=[n[a],n[i]],[r[i],r[a]]=[r[a],r[i]];const s=n[i][i];for(let o=i;o<8;o++)n[i][o]/=s;r[i]/=s;for(let o=0;o<8;o++){if(o===i)continue;const u=n[o][i];if(u!==0){for(let d=i;d<8;d++)n[o][d]-=u*n[i][d];r[o]-=u*r[i]}}}return[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],1]}function An(e,t){const n=(t%4+4)%4;if(n===0)return e;const{width:r,height:i,channels:a,data:s}=e,o=n%2===0?r:i,u=n%2===0?i:r,d=new Uint8Array(o*u*a);for(let p=0;p<i;p++)for(let c=0;c<r;c++){let f,m;n===1?(f=i-1-p,m=c):n===2?(f=r-1-c,m=i-1-p):(f=p,m=r-1-c);const g=(p*r+c)*a,_=(m*o+f)*a;for(let b=0;b<a;b++)d[_+b]=s[g+b]}return{width:o,height:u,channels:a,data:d}}const wy=.6;(()=>{const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=Math.min(255,Math.round(Math.pow(t/255,wy)*255));return e})();const St=48,by=320;function $y(e){return["blank",...e.characters," "]}function xy(e,t,n){let r="";const i=[];for(let s=0;s<e.length;s++){const o=e[s];o!==0&&(s>0&&e[s-1]===o||(r+=n[o]??"",i.push(t[s])))}if(i.length===0)return["",0];const a=i.reduce((s,o)=>s+o,0)/i.length;return[r,a]}function vy(e,t){const n=Math.trunc(St*t),r=e.width/e.height,i=Math.ceil(St*r)>n?n:Math.ceil(St*r),a=new Float32Array(3*St*n),s=St*n,o=e.width/i,u=e.height/St;for(let d=0;d<St;d++){const p=(d+.5)*u-.5,c=Math.max(0,Math.min(e.height-1,Math.floor(p))),f=Math.min(e.height-1,c+1),m=Math.max(0,Math.min(1,p-c));for(let g=0;g<i;g++){const _=(g+.5)*o-.5,b=Math.max(0,Math.min(e.width-1,Math.floor(_))),x=Math.min(e.width-1,b+1),$=Math.max(0,Math.min(1,_-b));for(let T=0;T<3;T++){const S=2-T,E=(c*e.width+b)*e.channels+S,k=(c*e.width+x)*e.channels+S,C=(f*e.width+b)*e.channels+S,v=(f*e.width+x)*e.channels+S,R=e.data[E]*(1-$)+e.data[k]*$,O=e.data[C]*(1-$)+e.data[v]*$,F=R*(1-m)+O*m;a[T*s+d*n+g]=(F/255-.5)/.5}}}return{tensor:a,width:n}}const Sy=62,Iy=8,Ty=5;function ha(e){return e?e.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim():""}function Ey(e,t){const n=e.length,r=t.length;if(n===0||r===0)return 0;let i=new Int32Array(r+1),a=new Int32Array(r+1);for(let s=1;s<=n;s++){for(let o=1;o<=r;o++)a[o]=e[s-1]===t[o-1]?i[o-1]+1:Math.max(i[o],a[o-1]);[i,a]=[a,i]}return i[r]}function or(e,t){return e.length===0&&t.length===0?100:200*Ey(e,t)/(e.length+t.length)}function wh(e,t){const n=r=>r.split(/\s+/).filter(Boolean).sort().join(" ");return or(n(e),n(t))}function ky(e,t){const n=new Set(e.split(/\s+/).filter(Boolean)),r=new Set(t.split(/\s+/).filter(Boolean)),i=[...n].filter(p=>r.has(p)).sort(),a=[...n].filter(p=>!r.has(p)).sort(),s=[...r].filter(p=>!n.has(p)).sort(),o=i.join(" "),u=[o,a.join(" ")].filter(Boolean).join(" "),d=[o,s.join(" ")].filter(Boolean).join(" ");return o.length>0&&(a.length===0||s.length===0)?100:Math.max(or(o,u),or(o,d),or(u,d))}function My(e){const t=new Set,n=[];for(const r of e){const i=r.nameFr??r.name;for(const a of[ha(i),ha(r.name)])if(a)for(const s of[a,a.replace(/ /g,"")])s&&!t.has(s)&&(t.add(s),n.push({key:s,id:r.id,display:i,...r.kind!==void 0?{kind:r.kind}:{}}))}return n}function Cy(e,t){const n=ha(e);if(!n||t.length===0)return null;const i=My(t).map(p=>({...p,score:ky(n,p.key)})).sort((p,c)=>c.score-p.score).slice(0,Iy).filter(p=>p.score>=Sy);if(i.length===0)return null;const a=i[0].score,s=i.filter(p=>a-p.score<=Ty),o=[...new Set(n.split(/\s+/).filter(Boolean))].join(" ");let u=s[0],d=[wh(o,u.key),u.score];for(const p of s.slice(1)){const c=[wh(o,p.key),p.score];(c[0]>d[0]||c[0]===d[0]&&c[1]>d[1])&&(u=p,d=c)}return{id:u.id,name:u.display,...u.kind!==void 0?{kind:u.kind}:{},confidence:Math.round(u.score/100*1e4)/1e4}}const Ay=5e3,bh=.75,zy=15,Ry=1.25,Oy=2.4,Ny=.003,By=.85,Dy=4,$h=2600,xh=2,vh=.3,Sh=.1,Ih=.012,Uy=22,Th=.5,ur=.12;function Ze(e,t){const n=new e.Mat(t.height,t.width,e.CV_8UC3),r=n.data,i=t.channels;for(let a=0,s=t.width*t.height;a<s;a++)r[a*3]=t.data[a*i],r[a*3+1]=t.data[a*i+1],r[a*3+2]=t.data[a*i+2];return n}function Py(e,t,n,r){const i=r.map(ue=>ue[0]),a=r.map(ue=>ue[1]),s=i.reduce((ue,D)=>ue+D,0)/i.length,o=a.reduce((ue,D)=>ue+D,0)/a.length,u=Math.max(Math.max(...i)-Math.min(...i),Math.max(...a)-Math.min(...a));if(u<4)return null;const d=u*Dy,p=Math.max(0,Math.trunc(s-d)),c=Math.min(n.width,Math.trunc(s+d)),f=Math.max(0,Math.trunc(o-d)),m=Math.min(n.height,Math.trunc(o+d));if(c-p<8||m-f<8)return null;const g=Math.max(n.width,n.height)<$h?xh:1,_=Ze(e,n),b=Ze(e,t),x=new e.Rect(p,f,c-p,m-f),$=_.roi(x),T=new e.Mat;g!==1?e.resize($,T,new e.Size(0,0),g,g,e.INTER_CUBIC):$.copyTo(T);const S=new e.Mat,E=new e.Mat;e.cvtColor(b,S,e.COLOR_RGB2GRAY),e.cvtColor(T,E,e.COLOR_RGB2GRAY);const k=new e.ORB(Ay),C=new e.KeyPointVector,v=new e.KeyPointVector,R=new e.Mat,O=new e.Mat,F=new e.Mat,L=[_,b,$,T,S,E,C,v,R,O,F],G=ue=>{for(const D of L)try{D.delete()}catch{}try{k.delete()}catch{}return ue};if(k.detectAndCompute(S,F,C,R),k.detectAndCompute(E,F,v,O),R.rows<8||O.rows<8)return G(null);const A=new e.BFMatcher(e.NORM_HAMMING),q=new e.DMatchVectorVector;A.knnMatch(R,O,q,2);const j=[],K=[];for(let ue=0;ue<q.size();ue++){const D=q.get(ue);if(D.size()===2){const Q=D.get(0),J=D.get(1);if(Q.distance<bh*J.distance){const ie=C.get(Q.queryIdx).pt,pe=v.get(Q.trainIdx).pt;j.push(ie.x,ie.y),K.push(pe.x,pe.y)}}}if(q.delete(),A.delete(),j.length/2<8)return G(null);const oe=e.matFromArray(j.length/2,1,e.CV_32FC2,j),N=e.matFromArray(K.length/2,1,e.CV_32FC2,K),ee=new e.Mat,W=e.findHomography(oe,N,e.RANSAC,5,ee);let X=0;for(let ue=0;ue<ee.rows;ue++)X+=ee.data[ue];const H=W.rows===3?[...W.data64F]:null;if(oe.delete(),N.delete(),ee.delete(),W.delete(),H===null||X<zy)return G(null);const V=1/g,le=[[V,0,p],[0,V,f],[0,0,1]],$e=[0,1,2].map(ue=>[0,1,2].map(D=>le[ue][0]*H[D]+le[ue][1]*H[3+D]+le[ue][2]*H[6+D]));return G({H:$e,inliers:X})}function Eh(e,t,n){if(e.length!==4||e.some(u=>!Number.isFinite(u[0])||!Number.isFinite(u[1])))return!1;let r=0;for(let u=0;u<4;u++){const[d,p]=e[u],[c,f]=e[(u+1)%4];r+=d*f-c*p}const i=Math.abs(r/2)/(t*n);if(i<Ny||i>By)return!1;const a=e.map((u,d)=>{const p=e[(d+1)%4];return Math.hypot(p[0]-u[0],p[1]-u[1])}),s=Math.min(...a);if(s<1)return!1;const o=Math.max(...a)/s;return o>=Ry&&o<=Oy}function kh(e,t,n){const r=e[2][0]*t+e[2][1]*n+e[2][2];return[(e[0][0]*t+e[0][1]*n+e[0][2])/r,(e[1][0]*t+e[1][1]*n+e[1][2])/r]}function Mh(e,t,n,r){const i=n.width,a=n.height,s=Math.max(8,Math.trunc(vh*i)),o=i+2*s,u=a+2*s;if(o*u>4e7)return null;const d=r.map(L=>[L[0],L[1],L[2]-s*(L[0]+L[1])+0]);for(let L=0;L<3;L++)d[L][2]=r[L][2]-s*r[L][0]-s*r[L][1];const p=Ze(e,t),c=new e.Mat,f=e.matFromArray(3,3,e.CV_64F,d.flat());e.warpPerspective(p,c,f,new e.Size(o,u),e.WARP_INVERSE_MAP);const m=new e.Mat;e.cvtColor(c,m,e.COLOR_RGB2Lab),p.delete(),f.delete();const g=m.data,_=Math.max(4,Math.trunc(s/3)),b=[[],[],[]],x=(L,G)=>{const A=(G*o+L)*3;b[0].push(g[A]),b[1].push(g[A+1]),b[2].push(g[A+2])};for(let L=0;L<u;L++)for(let G=0;G<o;G++)(L<_||L>=u-_||G<_||G>=o-_)&&x(G,L);const $=L=>{L.sort((A,q)=>A-q);const G=L.length>>1;return L.length%2?L[G]:(L[G-1]+L[G])/2},T=[$(b[0]),$(b[1]),$(b[2])],S=(L,G)=>{const A=(G*o+L)*3,q=g[A]-T[0],j=g[A+1]-T[1],K=g[A+2]-T[2];return Math.sqrt(q*q+j*j+K*K)>Uy},E=Math.max(6,Math.trunc(Sh*i)),k=Math.max(6,Math.trunc(Sh*a)),C=Math.max(2,Math.trunc(Ih*i)),v=Math.max(2,Math.trunc(Ih*a)),R=L=>{let G=0,A=0;for(const q of L)A=q?A+1:0,A>G&&(G=A);return G/Math.max(1,L.length)},O=L=>{let G,A,q,j,K;if(L==="L"?(G=s,A=s+a,q=Math.max(0,s-C-E),j=Math.max(0,s-C),K=!1):L==="R"?(G=s,A=s+a,q=s+i+C,j=Math.min(o,s+i+C+E),K=!1):(G=Math.max(0,s-v-k),A=Math.max(0,s-v),q=s,j=s+i,K=!0),A<=G||j<=q)return 0;const oe=[];if(K)for(let N=q;N<j;N++){let ee=0;for(let W=G;W<A;W++)S(N,W)&&ee++;oe.push(ee/(A-G)>Th)}else for(let N=G;N<A;N++){let ee=0;for(let W=q;W<j;W++)S(W,N)&&ee++;oe.push(ee/(j-q)>Th)}return R(oe)},F={L:O("L"),R:O("R"),T:O("T")};return c.delete(),m.delete(),F}const Ly=6e3,qy=8,Gy=.5,Wy=.6;function Vy(e,t,n,r){if(n.size===0)return[];const i=Math.max(t.width,t.height)<$h?xh:1,a=Ze(e,t),s=new e.Mat;i!==1?e.resize(a,s,new e.Size(0,0),i,i,e.INTER_CUBIC):a.copyTo(s);const o=new e.Mat;e.cvtColor(s,o,e.COLOR_RGB2GRAY),a.delete(),s.delete();const u=new e.ORB(Ly),d=new e.Mat,p=new e.KeyPointVector,c=new e.Mat;u.detectAndCompute(o,d,p,c);const f=[],m=new e.BFMatcher(e.NORM_HAMMING);try{if(c.rows<8)return f;for(const[g,_]of n){if(r!==void 0&&Date.now()>r)break;const b=Ze(e,_),x=new e.Mat;e.cvtColor(b,x,e.COLOR_RGB2GRAY);const $=new e.KeyPointVector,T=new e.Mat;u.detectAndCompute(x,d,$,T);const S=[b,$,T],E=()=>{for(const $e of S)$e.delete();x.delete()};if(T.rows<8){E();continue}const k=new e.DMatchVectorVector;m.knnMatch(T,c,k,2);const C=[],v=[];for(let $e=0;$e<k.size();$e++){const ue=k.get($e);if(ue.size()===2){const D=ue.get(0);if(D.distance<bh*ue.get(1).distance){const Q=$.get(D.queryIdx).pt,J=p.get(D.trainIdx).pt;C.push(Q.x,Q.y),v.push(J.x,J.y)}}}if(k.delete(),C.length/2<8){E();continue}const R=e.matFromArray(C.length/2,1,e.CV_32FC2,C),O=e.matFromArray(v.length/2,1,e.CV_32FC2,v),F=new e.Mat,L=e.findHomography(R,O,e.RANSAC,5,F);let G=0;for(let $e=0;$e<F.rows;$e++)G+=F.data[$e];const A=L.rows===3?[...L.data64F]:null;if(R.delete(),O.delete(),F.delete(),L.delete(),A===null||G<qy){E();continue}const q=1/i,j=[[q*A[0],q*A[1],q*A[2]],[q*A[3],q*A[4],q*A[5]],[A[6],A[7],A[8]]],K=[[0,0],[_.width,0],[_.width,_.height],[0,_.height]].map(([$e,ue])=>kh(j,$e,ue));if(!Eh(K,t.width,t.height)){E();continue}const oe=Ze(e,t),N=e.matFromArray(3,3,e.CV_64F,j.flat()),ee=new e.Mat;e.warpPerspective(oe,ee,N,new e.Size(_.width,_.height),e.WARP_INVERSE_MAP);const W=new e.Mat;e.cvtColor(ee,W,e.COLOR_RGB2GRAY);const X=new e.Mat;e.matchTemplate(W,x,X,e.TM_CCOEFF_NORMED);const H=X.data32F[0];if(oe.delete(),N.delete(),ee.delete(),W.delete(),X.delete(),H<Gy){E();continue}const V=Mh(e,t,_,j),le=V===null?[]:Object.keys(V).filter($e=>V[$e]>=ur);f.push({id:g,confidence:Math.max(0,H),footprint:K,built:V!==null&&Math.max(V.L,V.R,V.T)>=ur,tuckRegion:Ch(K,le)}),E()}}finally{o.delete(),d.delete(),p.delete(),c.delete();try{u.delete(),m.delete()}catch{}}return f}function Ch(e,t){if(e.length<4||t.length===0)return null;const n=e.map(_=>[_[0],_[1]]),r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),i=Math.hypot(n[2][0]-n[3][0],n[2][1]-n[3][1]),a=.5*(r+i),s=vh*a;if(!(s>0))return null;const o=n.reduce((_,b)=>_+b[0],0)/n.length,u=n.reduce((_,b)=>_+b[1],0)/n.length,d={T:[0,1],R:[1,2],L:[0,3]},p=[...n];for(const _ of["L","R","T"]){if(!t.includes(_))continue;const[b,x]=d[_],$=n[b],T=n[x];let S=-(T[1]-$[1]),E=T[0]-$[0];const k=($[0]+T[0])/2,C=($[1]+T[1])/2;S*(k-o)+E*(C-u)<0&&(S=-S,E=-E);const v=Math.hypot(S,E);v<=1e-6||(S=S/v*s,E=E/v*s,p.push([$[0]+S,$[1]+E],[T[0]+S,T[1]+E]))}const c=p.map(_=>_[0]),f=p.map(_=>_[1]),m=Math.round(Math.min(...c)),g=Math.round(Math.min(...f));return{x:m,y:g,width:Math.round(Math.max(...c))-m,height:Math.round(Math.max(...f))-g}}function Fy(e,t,n,r){const i=Py(e,n,t,r);if(i===null)return null;const s=[[0,0],[n.width,0],[n.width,n.height],[0,n.height]].map(([d,p])=>kh(i.H,d,p));if(!Eh(s,t.width,t.height))return null;const o=Mh(e,t,n,i.H);if(o===null)return null;const u=Object.keys(o).filter(d=>o[d]>=ur);return{built:Math.max(o.L,o.R,o.T)>=ur,footprint:s,overflow:u,edgeScores:o,inliers:i.inliers}}const Hy=.3,jy=.3;function Ky(e,t){const n=e.filter(a=>a.edgeScores!==null);if(n.length===0)return[];const r=n.length>=2&&n.every(a=>{const{L:s,R:o,T:u}=a.edgeScores;return Math.min(s,o,u)>=Hy}),i=[];return e.forEach((a,s)=>{if(!a.built||a.edgeScores===null)return;const{L:o,R:u,T:d}=a.edgeScores,p=Math.max(o,u,d)<jy;if(!r&&!p)return;t.some(([f,m])=>f>=a.zone.x0&&f<=a.zone.x1&&m>=a.zone.y0&&m<=a.zone.y1)||i.push(s)}),i}const zn=120,Rn=179,Xy=1.3,Yy=3.6,Zy=.45,Qy=6e-4,Jy=.02,e_=6e3,t_=.78,n_=1.25,r_=2.4,i_=.05,a_=1.5,s_=.5,o_=.9,u_=150,l_=18,d_=34,c_=90,p_=130,h_=.13,f_=.15,lr="magistrates-guild",fa="merchants-guild";function m_(e,t){const n=Ze(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2HSV),n.delete();const i=new e.Mat(r.rows,r.cols,r.type(),[zn,30,40,0]),a=new e.Mat(r.rows,r.cols,r.type(),[Rn,255,205,255]),s=new e.Mat;e.inRange(r,i,a,s),r.delete(),i.delete(),a.delete();const o=new Uint8Array(s.data),u=e.getStructuringElement(e.MORPH_RECT,new e.Size(31,31)),d=new e.Mat;e.morphologyEx(s,d,e.MORPH_CLOSE,u),s.delete(),u.delete();const p=new e.Mat,c=new e.Mat,f=new e.Mat,m=e.connectedComponentsWithStats(d,p,c,f,8);d.delete(),p.delete(),f.delete();const g=t.width*t.height,_=[];for(let b=1;b<m;b++){const x=c.intAt(b,0),$=c.intAt(b,1),T=c.intAt(b,2),S=c.intAt(b,3),E=c.intAt(b,4),k=E/g;k<Qy||k>Jy||E/Math.max(T*S,1)<Zy||_.push({x,y:$,w:T,h:S})}return c.delete(),{blobs:_,mask:o,maskWidth:t.width}}function g_(e,t,n,r,i,a,s){const o=e,u=a,d=s,p=i;if(!p.gray){const H=Ze(e,r);p.gray=new o.Mat,o.cvtColor(H,p.gray,o.COLOR_RGB2GRAY),H.delete(),p.k=new o.KeyPointVector,p.d=new o.Mat;const V=new o.Mat;u.detectAndCompute(p.gray,V,p.k,p.d),V.delete()}const c=n,f=new o.Mat,m=new o.KeyPointVector,g=new o.Mat;u.detectAndCompute(c,f,m,g),f.delete();const _=H=>(m.delete(),g.delete(),H);if(p.d.rows<8||g.rows<8)return _(null);const b=new o.DMatchVectorVector;d.knnMatch(p.d,g,b,2);const x=[],$=[];for(let H=0;H<b.size();H++){const V=b.get(H);if(V.size()===2){const le=V.get(0);if(le.distance<t_*V.get(1).distance){const $e=p.k.get(le.queryIdx).pt,ue=m.get(le.trainIdx).pt;x.push($e.x,$e.y),$.push(ue.x,ue.y)}}}if(b.delete(),x.length/2<8)return _(null);const T=o.matFromArray(x.length/2,1,o.CV_32FC2,x),S=o.matFromArray($.length/2,1,o.CV_32FC2,$),E=new o.Mat,k=o.findHomography(T,S,o.RANSAC,5,E);if(T.delete(),S.delete(),E.delete(),k.rows!==3)return k.delete(),_(null);const C=[...k.data64F],v=(H,V)=>{const le=C[6]*H+C[7]*V+C[8];return[(C[0]*H+C[1]*V+C[2])/le,(C[3]*H+C[4]*V+C[5])/le]},R=[[0,0],[r.width,0],[r.width,r.height],[0,r.height]].map(([H,V])=>v(H,V));if(R.some(H=>!Number.isFinite(H[0])||!Number.isFinite(H[1])))return k.delete(),_(null);const O=R.map((H,V)=>{const le=R[(V+1)%4];return Math.hypot(le[0]-H[0],le[1]-H[1])}),F=Math.min(...O);if(F<1)return k.delete(),_(null);const L=Math.max(...O)/F;let G=0;for(let H=0;H<4;H++){const[V,le]=R[H],[$e,ue]=R[(H+1)%4];G+=V*ue-$e*le}const A=t,q=Math.abs(G/2)/(A.rows*A.cols);if(L<n_||L>r_||q<i_||q>a_)return k.delete(),_(null);const j=new o.Mat;o.warpPerspective(A,j,k,new o.Size(r.width,r.height),o.WARP_INVERSE_MAP),k.delete();const K=new o.Mat;o.cvtColor(j,K,o.COLOR_RGB2GRAY),j.delete();const oe=Math.trunc(r.height/2),N=K.roi(new o.Rect(0,0,r.width,oe)),ee=p.gray.roi(new o.Rect(0,0,r.width,oe)),W=new o.Mat;o.matchTemplate(N,ee,W,o.TM_CCOEFF_NORMED);const X=W.data32F[0];return N.delete(),ee.delete(),W.delete(),K.delete(),_(X)}function y_(e,t,n){let r,i;if(n===lr)r=fa,i=h_;else if(n===fa)r=lr,i=f_;else return null;const{x:a,y:s,w:o,h:u}=t;if(o<8||u<8)return null;const d=Math.trunc(o/2);let p=0,c=null;for(const[f,m]of[[0,d],[d,o]]){let g=0,_=0;for(let x=s;x<s+u;x++)for(let $=a+f;$<a+m;$++){const T=(x*e.width+$)*e.channels,{h:S,s:E,v:k}=ot(e.data[T],e.data[T+1],e.data[T+2]);if(S>=zn&&S<=Rn&&E>=30&&E<=170&&k<=170)continue;g++,(r===fa?S>=l_&&S<=d_&&E>=c_&&k>=p_:S>=95&&S<=130&&E>=80)&&_++}if(g<20)continue;const b=_/g;b>p&&(p=b,c={x:a+f,y:s,w:m-f,h:u})}return p>=i&&c!==null?{id:r,box:c}:null}const __=1.7,w_=140,b_=170,$_=.2,x_=.1,Ah=240,zh=80,Rh=60,v_=50,Oh="scientists-guild",Nh="tacticians-guild",dr=["shipowners-guild","merchants-guild","builders-guild","moneylenders-guild"];function S_(e,t,n){const{x:r,y:i,w:a,h:s}=n,o=new Float32Array(s);for(let S=0;S<s;S++){let E=0;for(let k=0;k<a;k++)e[(i+S)*t+r+k]>0&&E++;o[S]=E/a}const u=[];for(let S=0;S<s;S++)o[S]>.3&&u.push(S);if(u.length<5)return[];const d=u[0],p=u[u.length-1],c=p-d;if(c<5)return[];const f=a/c;if(f<Xy||f>Yy)return[];if(f>=__)return[{x:r,y:i+d,w:a,h:c}];const m=new Float32Array(s),g=.3*(8*.5-1)+.8,_=[];let b=0;for(let S=-4;S<=4;S++){const E=Math.exp(-(S*S)/(2*g*g));_.push(E),b+=E}for(let S=0;S<s;S++){let E=0;for(let k=-4;k<=4;k++){const C=Math.min(s-1,Math.max(0,S+k));E+=o[C]*_[k+4]}m[S]=E/b}const x=d+Math.trunc(c*.3),$=d+Math.trunc(c*.78);let T=d+Math.trunc(c/2);if($>x){let S=1/0;for(let E=x;E<$;E++)m[E]<S&&(S=m[E],T=E)}return[{x:r,y:i+d,w:a,h:T-d},{x:r,y:i+T,w:a,h:p-T}]}function I_(e,t){const n=Math.max(0,t.x),r=Math.max(0,t.y),i=Math.min(e.width,t.x+t.w),a=Math.min(e.height,t.y+t.h),s=Math.max(0,i-n),o=Math.max(0,a-r),u=new Uint8Array(s*o*3);for(let d=0;d<o;d++)for(let p=0;p<s;p++){const c=((r+d)*e.width+n+p)*e.channels,f=(d*s+p)*3;u[f]=e.data[c],u[f+1]=e.data[c+1],u[f+2]=e.data[c+2]}return{width:s,height:o,channels:3,data:u}}function T_(e){let t=0,n=0;for(let r=0,i=e.width*e.height;r<i;r++){const a=r*e.channels,{h:s,s:o,v:u}=ot(e.data[a],e.data[a+1],e.data[a+2]);o>=40&&u>=40&&u<=205&&(t++,s>=w_&&s<=b_&&n++)}return t===0?0:n/t}function E_(e){let t=0;const n=e.width*e.height;for(let r=0;r<n;r++){const i=r*e.channels,{h:a,s,v:o}=ot(e.data[i],e.data[i+1],e.data[i+2]);!(a>=zn&&a<=Rn)&&s>=70&&o>=50&&t++}return n===0?0:t/n}function Bh(e,t){const n=Ze(e,t),r=new e.Mat;e.resize(n,r,new e.Size(Ah,zh),0,0,e.INTER_AREA),n.delete();const i=new Uint8Array(r.data);return r.delete(),{width:Ah,height:zh,channels:3,data:i}}function k_(e){const t=e.width*e.height,n=[0,0,0];for(let a=0;a<t;a++){const s=a*e.channels;n[0]+=e.data[s],n[1]+=e.data[s+1],n[2]+=e.data[s+2]}n[0]/=t,n[1]/=t,n[2]/=t;const r=(n[0]+n[1]+n[2])/3,i=new Uint8Array(t*3);for(let a=0;a<t;a++){const s=a*e.channels;for(let o=0;o<3;o++){const u=n[o]>1e-6?r/n[o]:1;i[a*3+o]=Math.max(0,Math.min(255,Math.round(e.data[s+o]*u)))}}return{width:e.width,height:e.height,channels:3,data:i}}function Dh(e,t){const n=k_(t),r=n.width*n.height,i=new Uint8Array(r);let a=0;for(let g=0;g<r;g++){const _=g*3,{h:b,s:x,v:$}=ot(n.data[_],n.data[_+1],n.data[_+2]);!(b>=zn&&b<=Rn&&x>=30&&x<=170&&$<=170)&&$>=40&&(i[g]=1,a++)}const s=a<20,o=Ze(e,n),u=new e.Mat;e.cvtColor(o,u,e.COLOR_RGB2Lab),o.delete();const d=u.data;let p=0,c=0,f=0,m=0;for(let g=0;g<r;g++)!s&&i[g]===0||(p+=d[g*3]*100/255,c+=d[g*3+1]-128,f+=d[g*3+2]-128,m++);return u.delete(),m===0?[0,0,0]:[p/m,c/m,f/m]}function M_(e){let t=0,n=0,r=0,i=0,a=0;const s=e.width*e.height;for(let u=0;u<s;u++){const d=u*e.channels,{h:p,s:c,v:f}=ot(e.data[d],e.data[d+1],e.data[d+2]);p>=zn&&p<=Rn&&c>=30&&c<=170&&f<=170||(t++,c>=70&&f>=50&&(p>=95&&p<=130?n++:p>=35&&p<=92?r++:p<=10?i++:p>=15&&p<=34&&f>=80&&a++))}const o=Math.max(t,1);return{blue:n/o,green:r/o,red:i/o,gold:a/o}}function C_(e){const t=e.width*e.height,n={blue:0,green:0,red:0,gold:0,brown:0,grey:0};for(let r=0;r<t;r++){const i=r*e.channels,{h:a,s,v:o}=ot(e.data[i],e.data[i+1],e.data[i+2]);s>=Rh&&o>=v_?(a>=95&&a<=128&&n.blue++,a>=35&&a<=85&&n.green++,(a<=8||a>=170)&&n.red++,a>=18&&a<=34&&n.gold++,a>=4&&a<=17&&o<150&&n.brown++):s<Rh&&o>=70&&o<=235&&n.grey++}for(const r of Object.keys(n))n[r]/=t;return n}function A_(e,t){let n=0,r=0;for(let o=0;o<e.length;o++)n+=e[o],r+=t[o];n/=e.length,r/=t.length;let i=0,a=0,s=0;for(let o=0;o<e.length;o++){const u=e[o]-n,d=t[o]-r;i+=u*d,a+=u*u,s+=d*d}return i/(Math.sqrt(a*s)+1e-6)}function Uh(e,t){const n=Ze(e,t),r=new e.Mat;e.cvtColor(n,r,e.COLOR_RGB2GRAY),n.delete();const i=Float32Array.from(r.data);return r.delete(),i}function z_(e,t){const n=new Map,r=new Map;for(const[i,a]of t){const s=Bh(e,a);n.set(i,Uh(e,s)),dr.includes(i)&&r.set(i,Dh(e,s))}return{gray:n,warmLab:r}}function R_(e,t,n){const r=Bh(e,t),i=M_(r);if(i.blue>=.15&&i.blue>i.red&&i.blue>2*i.gold)return lr;if(i.green>=.08&&i.green>i.blue&&i.green>i.gold)return Oh;if(i.red>=.15&&i.red>i.blue&&i.red>1.5*i.gold)return Nh;const a=C_(r),s={blue:a.blue,green:a.green,red:a.red,gold:a.gold,browngrey:a.brown+a.grey};let o="blue";for(const d of Object.keys(s))s[d]>s[o]&&(o=d);if(s[o]<=0)return"";let u;if(o==="blue")u=lr;else if(o==="green")u=Oh;else if(o==="red")u=Nh;else{const d=Uh(e,r);let p="",c=-2;for(const f of dr){const m=n.gray.get(f);if(m===void 0)continue;const g=A_(d,m);g>c&&(c=g,p=f)}u=p||dr[0]}if(dr.includes(u)&&n.warmLab.size>0){const d=Dh(e,r);let p=u,c=1/0;for(const[f,m]of n.warmLab){const g=Math.hypot(d[0]-m[0],d[1]-m[1],d[2]-m[2]);g<c&&(c=g,p=f)}return p}return u}function O_(e,t,n,r,i){var _;const a=[],{blobs:s,mask:o,maskWidth:u}=m_(e,t);if(s.length===0||n.size===0)return a;const d=e,p=new d.ORB(e_),c=new d.BFMatcher(d.NORM_HAMMING),f=new Map;for(const b of n.keys())f.set(b,{});const m=Ze(e,t);let g=null;try{for(const b of s){if(r!==void 0&&Date.now()>r)break;const x=b.x+Math.trunc(b.w/2),$=b.y+Math.trunc(b.h/2),T=Math.max(u_,Math.trunc(o_*Math.max(b.w,b.h))),S=Math.max(0,x-T),E=Math.max(0,$-T),k=Math.min(t.width,x+T),C=Math.min(t.height,$+T);if(k-S<16||C-E<16)continue;const v=m.roi(new d.Rect(S,E,k-S,C-E)),R=new d.Mat;d.cvtColor(v,R,d.COLOR_RGB2GRAY);let O=null,F=-2;for(const[q,j]of n){if(r!==void 0&&Date.now()>r)break;const K=g_(e,v,R,j,f.get(q),p,c);K!==null&&K>F&&(F=K,O=q)}v.delete(),R.delete();const L=new Set;if(O!==null&&F>=s_){a.push({id:O,boundingBox:{x:b.x,y:b.y,width:b.w,height:b.h},confidence:1}),L.add(O);const q=y_(t,b,O);q&&(a.push({id:q.id,boundingBox:{x:q.box.x,y:q.box.y,width:q.box.w,height:q.box.h},confidence:.9}),L.add(q.id))}if(i===void 0||i.size===0)continue;const G=S_(o,u,b);if(G.length!==2)continue;const A=G.map(q=>I_(t,q));if(!A.some(q=>q.width*q.height===0||E_(q)<x_))for(let q=0;q<G.length;q++){const j=A[q];if(T_(j)<$_)continue;g===null&&(g=z_(e,i));const K=R_(e,j,g);if(K&&!L.has(K)){L.add(K);const oe=G[q];a.push({id:K,boundingBox:{x:oe.x,y:oe.y,width:oe.w,height:oe.h},confidence:1})}}}}finally{m.delete();for(const b of f.values()){const x=b;for(const $ of["gray","k","d"])try{(_=x[$])==null||_.delete()}catch{}}try{p.delete(),c.delete()}catch{}}return a}const Ph=128,N_=.56,B_=15,D_=.58,U_=70,P_=50,L_=.12,q_=.2,G_=.1,W_=.17,Lh=.15;function V_(e){const t=new Map;for(const[n,r]of Object.entries(e.templates)){const i=Uint8Array.from(atob(r),a=>a.charCodeAt(0));i.length===e.size*e.size&&t.set(n,i)}return t}function qh(e,t){const{width:n,height:r,channels:i,data:a}=e,s=Math.floor(n/2),o=Math.floor(r/2),u=Math.trunc(Math.min(n,r)*.5*t);if(u<1)return e;const d=Math.max(0,s-u),p=Math.max(0,o-u),c=Math.min(n,s+u),f=Math.min(r,o+u),m=c-d,g=f-p,_=new Uint8Array(m*g*i);for(let b=0;b<g;b++){const x=((b+p)*n+d)*i;_.set(a.subarray(x,x+m*i),b*m*i)}return{width:m,height:g,channels:i,data:_}}function F_(e){const t=qh(e,N_),n=U0(t),r=gh(n,Ph,Ph);return P0(r)}function H_(e,t){const n=e.length;let r=0,i=0;for(let u=0;u<n;u++)r+=e[u],i+=t[u];r/=n,i/=n;let a=0,s=0,o=0;for(let u=0;u<n;u++){const d=e[u]-r,p=t[u]-i;a+=d*p,s+=d*d,o+=p*p}return a/(Math.sqrt(s*o)+1e-6)}function j_(e){const t=new Map([["masonry",0],["strategy",0]]),n=qh(e,D_),{width:r,height:i,channels:a,data:s}=n,o=r*i||1;let u=0,d=0;for(let f=0;f<r*i;f++){const m=f*a,{h:g,s:_,v:b}=ot(s[m],s[m+1],s[m+2]);_>=U_&&b>=P_&&(g>=95&&g<=130&&(u+=1),(g<=8||g>=170)&&(d+=1))}const p=u/o,c=d/o;return p>=L_&&t.set("masonry",Lh*Math.min(1,p/q_)),c>=G_&&t.set("strategy",Lh*Math.min(1,c/W_)),t}function K_(e,t){if(t.size===0||e.width===0||e.height===0)return["",0];const n=F_(e);let r=0;for(const d of n.data)r+=d;const i=r/n.data.length,a=[];for(let d=0;d<360;d+=B_)a.push(G0(n,d,i));const s=new Map;for(const[d,p]of t){let c=-1/0;for(const f of a){const m=H_(f,p);m>c&&(c=m)}s.set(d,c)}for(const[d,p]of j_(e))p>0&&s.has(d)&&s.set(d,s.get(d)+p);let o="",u=-1/0;for(const[d,p]of s)p>u&&(o=d,u=p);return[o,u]}const zt=224,X_=512,Y_=[.485,.456,.406],Z_=[.229,.224,.225];function Q_(e){const t=atob(e.x),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Float32Array(n.buffer);if(r.length!==e.ids.length*e.dim)throw new Error(`token_embed_index: ${r.length} floats != ${e.ids.length}x${e.dim}`);return{dim:e.dim,ids:e.ids,x:r}}function J_(e){const t=da(e,zt,zt),n=zt*zt,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=(t[i*3+a]/255-Y_[a])/Z_[a];return r}function ew(e){const t=3*zt*zt,n=new Float32Array(4*t);for(let r=0;r<4;r++)n.set(J_(An(e,r)),r*t);return n}function tw(e,t=X_){const n=e.length/t,r=new Float32Array(t);for(let a=0;a<n;a++)for(let s=0;s<t;s++)r[s]+=e[a*t+s];let i=0;for(let a=0;a<t;a++)r[a]/=n,i+=r[a]*r[a];i=Math.max(Math.sqrt(i),1e-9);for(let a=0;a<t;a++)r[a]/=i;return r}function nw(e,t){let n=0,r=-2;for(let i=0;i<e.ids.length;i++){let a=0;const s=i*e.dim;for(let o=0;o<e.dim;o++)a+=e.x[s+o]*t[o];a>r&&(r=a,n=i)}return{id:e.ids[n],cosine:r}}const dn=96,rw=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"],iw=.45;function aw(e){const t=da(e,dn,dn),n=dn*dn,r=new Float32Array(3*n);for(let i=0;i<n;i++)for(let a=0;a<3;a++)r[a*n+i]=t[i*3+a]/255;return r}function sw(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);const n=e[t];return{id:n>=iw?rw[t]??"":"",prob:n}}const Qe="/7wd-scorer/models/";let Gh=!1;const cr=new Map;function Wh(){var e;Gh||(Ee.wasm.wasmPaths="/7wd-scorer/ort/",Ee.wasm.numThreads=globalThis.crossOriginIsolated?Math.max(1,(((e=globalThis.navigator)==null?void 0:e.hardwareConcurrency)??4)-2):1,Gh=!0)}const ma=new Set;function ow(e){Wh();let t=cr.get(e);return t===void 0&&(t=Pt.create(`${Qe}${vt[e].onnx}`,{executionProviders:ma.has(e)?["wasm"]:["webgpu","wasm"]}),cr.set(e,t),t.catch(()=>cr.delete(e))),t}let ga=null,ya=null;const uw=.75,lw=4,dw=.65,cw=3e4;let _a=null;function Vh(){return _a===null&&(_a=(async()=>{try{let e;return self.importScripts("/7wd-scorer/opencv/opencv.js"),e=self.cv,typeof(e==null?void 0:e.then)=="function"&&(e=await e),typeof(e==null?void 0:e.getBuildInformation)!="function"&&(e=await new Promise(t=>{e.onRuntimeInitialized=()=>t(e)})),e}catch(e){return console.warn("[wonders-reg] opencv.js load failed:",e),null}})()),_a}const Fh=new Map;function wa(e){let t=Fh.get(e);return t===void 0&&(t=(async()=>{try{const n=await fetch(`${Qe}${e}`);if(!n.ok)return null;const r=await createImageBitmap(await n.blob()),a=new OffscreenCanvas(r.width,r.height).getContext("2d");a.drawImage(r,0,0);const s=a.getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,channels:4,data:new Uint8Array(s.data.buffer)}}catch{return null}})(),Fh.set(e,t)),t}function Hh(e){return wa(`wonder-refs/${e}.jpg`)}const jh=["builders-guild","magistrates-guild","merchants-guild","moneylenders-guild","scientists-guild","shipowners-guild","tacticians-guild"];async function pw(){const e=new Map;for(const t of jh){const n=await wa(`guild-refs/${t}.jpg`);n!==null&&e.set(t,n)}return e}async function hw(){const e=new Map;for(const t of jh){const n=await wa(`guild-band-refs/${t}.png`);n!==null&&e.set(t,n)}return e}const fw=.6,mw=12,gw=45e3;let ba=null;function Kh(){return ba===null&&(Wh(),ba=(async()=>{try{const[e,t,n,r]=await Promise.all([Pt.create(`${Qe}ocr/ch_PP-OCRv4_det_infer.onnx`,{executionProviders:["webgpu","wasm"]}),Pt.create(`${Qe}ocr/ch_PP-OCRv4_rec_infer.onnx`,{executionProviders:["webgpu","wasm"]}),fetch(`${Qe}ocr_charset.json`).then(i=>i.ok?i.json():null),fetch(`${Qe}wonder_names.json`).then(i=>i.ok?i.json():null)]);return n===null||r===null?(console.warn("[wonders-ocr] charset/names asset missing"),null):{det:e,rec:t,charset:$y(n),catalog:r.entries}}catch(e){return console.warn("[wonders-ocr] bundle load failed:",e),null}})()),ba}async function yw(e,t){const n=Math.max(by/St,t.width/t.height),{tensor:r,width:i}=vy(t,n),a={[e.rec.inputNames[0]]:new We("float32",r,[1,3,St,i])},s=(await e.rec.run(a))[e.rec.outputNames[0]],[o,u,d]=s.dims,p=s.data,c=new Array(u),f=new Array(u);for(let m=0;m<u;m++){let g=0,_=-1/0;const b=m*d;for(let x=0;x<d;x++){const $=p[b+x];$>_&&(_=$,g=x)}c[m]=g,f[m]=_}return xy(c,f,e.charset)}async function _w(e,t){const n=await Kh();if(n===null)return{wonders:[],aborted:!1};const r=new Map,i=Date.now()+gw;let a=!1;e:for(const s of[0,1,2,3]){if(Date.now()>i){a=!0;break}t(`wonder names: rotation ${s*90}°…`,s/4);const o=An(e,s),u=dy(o),d={[n.det.inputNames[0]]:new We("float32",u.tensor,[1,3,u.height,u.width])},p=(await n.det.run(d))[n.det.outputNames[0]],c=gy(p.data,u,o.width,o.height).slice(0,mw);console.debug(`[wonders-ocr] rot ${s*90}: ${c.length} det boxes`,c.slice(0,5).map(f=>`${f.width}x${f.height}@${f.score.toFixed(2)}`));for(const f of c){if(Date.now()>i){a=!0;break e}const m=yy(o,f.quad);if(m.width<m.height*1.5)continue;const[g,_]=await yw(n,m);if(console.debug(`[wonders-ocr] rec "${g}" @${_.toFixed(2)}`),_<fw||g.trim().length<lw)continue;const b=Cy(g,n.catalog);if(console.debug("[wonders-ocr] fuzzy",b),b===null||b.confidence<uw||b.kind!=="wonder")continue;const x=r.get(b.id);(x===void 0||b.confidence>x.confidence)&&r.set(b.id,{id:b.id,name:b.name,confidence:b.confidence,nameBox:Xh(f,s,e.width,e.height)})}}return{wonders:[...r.values()],aborted:a}}function Xh(e,t,n,r){const i=(t%4+4)%4;if(i===0)return{x:e.x,y:e.y,width:e.width,height:e.height};const a=(c,f)=>i===1?[f,r-1-c]:i===2?[n-1-c,r-1-f]:[n-1-f,c],s=[a(e.x,e.y),a(e.x+e.width,e.y+e.height)],o=s.map(c=>c[0]),u=s.map(c=>c[1]),d=Math.min(...o),p=Math.min(...u);return{x:d,y:p,width:Math.max(...o)-d,height:Math.max(...u)-p}}function ww(){return ya===null&&(ya=fetch(`${Qe}laurel_gallery.json`).then(async e=>e.ok?Q0(await e.json()):[]).catch(()=>[])),ya}function bw(e,t,n,r){return Yh(e,t-r,n-r,2*r,2*r)}function Yh(e,t,n,r,i){const a=Math.max(0,Math.round(t)),s=Math.max(0,Math.round(n)),o=Math.min(e.width,Math.round(t+r)),u=Math.min(e.height,Math.round(n+i)),d=Math.max(0,o-a),p=Math.max(0,u-s),c=new Uint8Array(d*p*3);for(let f=0;f<p;f++)for(let m=0;m<d;m++){const g=((f+s)*e.width+(m+a))*e.channels,_=(f*d+m)*3;c[_]=e.data[g],c[_+1]=e.data[g+1],c[_+2]=e.data[g+2]}return{width:d,height:p,channels:3,data:c}}function $w(){return ga===null&&(ga=fetch(`${Qe}token_templates.json`).then(async e=>e.ok?V_(await e.json()):new Map).catch(()=>new Map)),ga}let $a=null;function xw(){return $a===null&&($a=(async()=>{try{const e=await fetch(`${Qe}token_embed_index.json`);if(!e.ok)return null;const t=Q_(await e.json());return{session:await Pt.create(`${Qe}token_embed.onnx`,{executionProviders:["wasm"]}),index:t}}catch{return null}})()),$a}const vw=.92;let xa=null;function Sw(){return xa===null&&(xa=(async()=>{try{return(await fetch(`${Qe}guild_classifier.onnx`,{method:"HEAD"})).ok?await Pt.create(`${Qe}guild_classifier.onnx`,{executionProviders:["wasm"]}):null}catch{return null}})()),xa}async function Iw(e,t){const n=await xw();if(n!==null)try{const r=ew(e),i=new We("float32",r,[4,3,zt,zt]),s=(await n.session.run({image:i}))[n.session.outputNames[0]].data,{id:o,cosine:u}=nw(n.index,tw(s));return u<vw?["",-1]:[o,u]}catch{}return K_(e,t)}async function Zh(e){const t=await createImageBitmap(e);try{const r=new OffscreenCanvas(t.width,t.height).getContext("2d",{willReadFrequently:!0});if(r===null)throw new Error("OffscreenCanvas 2D context unavailable.");r.drawImage(t,0,0);const{data:i}=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,channels:4,data:i}}finally{t.close()}}async function Qt(e,t){const n=vt[e],{tensor:r,params:i}=d0(t,n.input),a=async()=>{const s=await ow(e),o={[s.inputNames[0]]:new We("float32",r,[1,3,n.input,n.input])};return{rows:(await s.run(o))[s.outputNames[0]].data,params:i}};try{return await a()}catch(s){if(ma.has(e))throw s;return ma.add(e),cr.delete(e),await a()}}const Tw=6,Ew=2,kw=5,Mw=2;async function Cw(e){const t={kind:"unknown",confidence:0,banners:null,laurels:null,coins:null,pawnFound:!1},n=await Zh(e),r=await Qt("banner",n),i=ch(r.rows,r.params,vt.banner.conf);if(t.banners=i.length,i.length>=Tw)return{...t,kind:"player",confidence:Math.min(1,i.length/12)};const a=await Qt("laurel",n),s=lh(a.rows,a.params,vt.laurel.conf);if(t.laurels=s.length,s.length>=Ew)return{...t,kind:"player",confidence:Math.min(1,s.length/8)};const o=await Qt("coin",n),u=uh(o.rows,o.params,vt.coin.conf);return t.coins=u.length,u.length>=kw?{...t,kind:"player",confidence:.5}:t.banners!==null&&t.banners<=Mw?{...t,kind:"board",confidence:.4}:t}function Aw(){return{wonders:[],guilds:[],progressTokens:[],laurels:[],cardVictoryPoints:{value:0,laurelsKept:0,laurelsUnread:0,complete:!0},cardCounts:{byFamily:{},source:"none",tuckedExcluded:0},coins:{total:0,confidence:0,source:"none",coins:[]}}}async function zw(e,t,n,r,i=()=>{}){const a={},s=[],o=[],u=[],d=[],p=[],c=[];let f=0,m=0,g=0,_=0,b=0;for(const S of e){b+=1;const E=`${t} photo ${b}/${e.length}`;r(`${E}: reading pixels…`,.01);const k=await Zh(S);r(`${E}: card banners…`,.04);const C=await Qt("banner",k),v=ch(C.rows,C.params,vt.banner.conf);r(`${E}: progress tokens…`,.08);const R=await Qt("token",k),O=await $w(),F=[];for(const D of y0(R.rows,R.params,vt.token.conf)){F.push({cx:D.cx,cy:D.cy,r:D.r});const[Q,J]=await Iw(mh(k,D),O);Q===""&&J<0?F.pop():Q===""?m+=1:u.some(ie=>ie.id===Q)||u.push({id:Q,center:[D.cx,D.cy],radius:D.r,confidence:Math.round(J*1e4)/1e4})}r(`${E}: coins…`,.14);const L=await Qt("coin",k),G=uh(L.rows,L.params,vt.coin.conf).filter(D=>!F.some(Q=>(D.cx-Q.cx)**2+(D.cy-Q.cy)**2<=D.r*D.r)),A=D0(k,G),q=[];if(G.forEach((D,Q)=>{const J=A[Q];f+=J,q.push({denomination:J,center:[D.cx,D.cy],radius:D.r,denomSource:"colour"})}),q.length>=2){const D=q.map(J=>J.radius).sort((J,ie)=>J-ie),Q=D.length%2===1?D[(D.length-1)/2]:(D[D.length/2-1]+D[D.length/2])/2;if(Q>0)for(const J of q)J.radius/Q>2&&(J.suspect=!0,J.suspectReason=`radius ${J.radius}px is ${(J.radius/Q).toFixed(1)}x the photo's median coin radius — probably not a coin`)}o.push(...q),r(`${E}: wonder names…`,.2);const j=await _w(k,(D,Q)=>r(`${E}: ${D}`,.2+.35*(Q??0))),K=[],oe=Date.now()+cw,N=j.wonders.length>0?await Vh():null,ee=[];for(const D of j.wonders){let Q=null;if(N!==null&&Date.now()<oe){r(`${E}: registering ${D.name}…`,.6);try{const J=await Hh(D.id);if(J!==null){const ie=Fy(N,k,J,[[D.nameBox.x,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y],[D.nameBox.x+D.nameBox.width,D.nameBox.y+D.nameBox.height],[D.nameBox.x,D.nameBox.y+D.nameBox.height]]);if(ie!==null){const pe=ie.footprint.map(qe=>qe[0]),ce=ie.footprint.map(qe=>qe[1]),se=Math.max(0,Math.round(Math.min(...pe))),_e=Math.max(0,Math.round(Math.min(...ce)));Q={built:ie.built,boundingBox:{x:se,y:_e,width:Math.min(k.width,Math.round(Math.max(...pe)))-se,height:Math.min(k.height,Math.round(Math.max(...ce)))-_e},tuckRegion:Ch(ie.footprint,ie.overflow),edgeScores:ie.edgeScores}}}}catch(J){console.warn(`[wonders-reg] ${D.id} failed:`,J)}}if(Q!==null){const J=Q.tuckRegion??Q.boundingBox;K.push({x0:J.x,y0:J.y,x1:J.x+J.width,y1:J.y+J.height})}else{const J=Math.max(8,D.nameBox.height),ie=Math.round(D.nameBox.width*.15);K.push({x0:D.nameBox.x-ie,y0:D.nameBox.y-J*2.5,x1:D.nameBox.x+D.nameBox.width+ie,y1:D.nameBox.y+D.nameBox.height+J*2.5})}if(!d.some(J=>J.id===D.id)){const J={id:D.id,name:D.name,builtWithCardUnderneath:(Q==null?void 0:Q.built)??!0,boundingBox:(Q==null?void 0:Q.boundingBox)??{x:0,y:0,width:0,height:0},...Q!=null&&Q.tuckRegion?{tuckRegion:Q.tuckRegion}:{},confidence:D.confidence};d.push(J),ee.push({obj:J,edgeScores:(Q==null?void 0:Q.edgeScores)??null,zone:K[K.length-1]})}}const W=Ky(ee.map(D=>({built:D.obj.builtWithCardUnderneath,edgeScores:D.edgeScores,zone:D.zone})),v.map(D=>[D.box[0]+D.box[2]/2,D.box[1]+D.box[3]/2]));for(const D of W){const Q=ee[D];Q.obj.builtWithCardUnderneath=!1,n.push({code:"INCONSISTENT_STATE",message:`${t}: wonder '${Q.obj.id}' was NOT marked built — the card-under-wonder signal saturated on this surface and no tucked card banner supports it. Tick it in the review if it really was built.`})}if(v.length>0){const D=new Set(W);for(let Q=0;Q<ee.length;Q++){const J=ee[Q];if(D.has(Q)||!J.obj.builtWithCardUnderneath)continue;const ie=J.obj.tuckRegion;if(ie===void 0)continue;if(!v.some(ce=>{const se=ce.box[0]+ce.box[2]/2,_e=ce.box[1]+ce.box[3]/2;return se>=ie.x&&se<=ie.x+ie.width&&_e>=ie.y&&_e<=ie.y+ie.height})){const ce=J.obj;ce.builtWithCardUnderneath=!1,ce.suspect=!0,ce.suspectReason="built-unconfirmed"}}}if(j.aborted&&n.push({code:"LOW_CONFIDENCE",message:`${E}: the wonder-name read ran out of its time budget on this device — ${j.wonders.length} wonder(s) read before the cutoff; check the built-wonders list.`}),N!==null&&j.wonders.length>0&&Date.now()<oe)try{const D=await Kh(),Q=(D==null?void 0:D.catalog.filter(ie=>ie.kind==="wonder").map(ie=>ie.id))??[],J=new Map;for(const ie of Q)if(!d.some(pe=>pe.id===ie)){const pe=await Hh(ie);pe!==null&&J.set(ie,pe)}if(J.size>0){r(`${E}: searching occluded wonders…`,.7);const ie=Vy(N,k,J,oe);for(const pe of ie){const ce=pe.footprint.map(Ne=>Ne[0]),se=pe.footprint.map(Ne=>Ne[1]),_e=Math.max(0,Math.round(Math.min(...ce))),qe=Math.max(0,Math.round(Math.min(...se))),Ce={x:_e,y:qe,width:Math.min(k.width,Math.round(Math.max(...ce)))-_e,height:Math.min(k.height,Math.round(Math.max(...se)))-qe};if(d.some(Ne=>{const Me=Ne.boundingBox,ft=Math.max(0,Math.min(Me.x+Me.width,Ce.x+Ce.width)-Math.max(Me.x,Ce.x)),ut=Math.max(0,Math.min(Me.y+Me.height,Ce.y+Ce.height)-Math.max(Me.y,Ce.y)),lt=ft*ut,dt=Me.width*Me.height+Ce.width*Ce.height-lt;return dt>0&&lt/dt>Wy}))continue;const Oe=D==null?void 0:D.catalog.find(Ne=>Ne.id===pe.id);d.push({id:pe.id,name:(Oe==null?void 0:Oe.nameFr)??(Oe==null?void 0:Oe.name)??pe.id,builtWithCardUnderneath:pe.built,boundingBox:Ce,...pe.tuckRegion?{tuckRegion:pe.tuckRegion}:{},confidence:Math.round(pe.confidence*1e4)/1e4});const Fe=pe.tuckRegion??Ce;K.push({x0:Fe.x,y0:Fe.y,x1:Fe.x+Fe.width,y1:Fe.y+Fe.height})}}}catch(D){console.warn("[wonders-reg] discovery failed:",D)}const X=[];for(const D of v){const Q=D.box[0]+D.box[2]/2,J=D.box[1]+D.box[3]/2;if(K.some(pe=>Q>=pe.x0&&Q<=pe.x1&&J>=pe.y0&&J<=pe.y1)){_+=1;continue}X.push(D),a[D.family]=(a[D.family]??0)+1,g+=1}const H=$0(X),V=new Set(H.map(D=>D.box.join(",")));for(const D of v0(X))V.has(D.box.join(","))||H.push(D);for(const D of H)c.push(D);if(X.some(D=>D.family==="guild")){const D=await Sw();if(D!==null){r(`${E}: identifying guilds…`,.75);for(const Q of X)if(Q.family==="guild")try{const[J,ie,pe,ce]=Q.box,se=Yh(k,J,ie,pe,ce),_e=aw(se),qe={[D.inputNames[0]]:new We("float32",_e,[1,3,dn,dn])},De=(await D.run(qe))[D.outputNames[0]].data,{id:Oe,prob:Fe}=sw(De);Oe!==""&&!p.some(Ne=>Ne.id===Oe)&&p.push({id:Oe,boundingBox:{x:J,y:ie,width:pe,height:ce},confidence:Math.round(Fe*1e4)/1e4})}catch(J){console.warn("[guild-cls] failed:",J)}}else if(Date.now()<oe)try{const Q=N??await Vh();if(Q!==null){const J=await pw();if(J.size>0){r(`${E}: identifying guilds…`,.75);const ie=await hw();for(const pe of O_(Q,k,J,oe,ie))p.some(ce=>ce.id===pe.id)||p.push(pe)}}}catch(Q){console.warn("[guilds-reg] failed:",Q)}}r(`${E}: laurels…`,.8);const $e=await ww(),ue=[];for(const D of[0,1,2,3]){const Q=D===0?k:An(k,D),J=await Qt("laurel",Q);for(const[ie,pe,ce,se]of lh(J.rows,J.params,vt.laurel.conf)){const _e=Xh({x:ie,y:pe,width:ce-ie,height:se-pe},D,k.width,k.height),qe=_e.x+_e.width/2,Ce=_e.y+_e.height/2,De=.6*Math.max(_e.width,_e.height);ue.some(([Fe,Ne,Me,ft])=>{const ut=(Fe+Me)/2,lt=(Ne+ft)/2;return(qe-ut)**2+(Ce-lt)**2<De*De})||ue.push([_e.x,_e.y,_e.x+_e.width,_e.y+_e.height])}}for(const[D,Q,J,ie]of ue){const pe=Math.trunc((D+J)/2),ce=Math.trunc((Q+ie)/2);if([...F,...G].some(Me=>(pe-Me.cx)**2+(ce-Me.cy)**2<=Me.r*Me.r))continue;const _e=Math.max(6,Math.trunc(Math.max(J-D,ie-Q)*W0)),qe=bw(k,pe,ce,_e);let Ce=null,De=0;const Oe=new Map;for(const Me of[0,1,2,3]){const ft=Me===0?qe:An(qe,Me),[ut,lt]=ry(ft,$e);ut!==null&&(Oe.set(ut,Math.max(Oe.get(ut)??0,lt)),lt>De&&(Ce=ut,De=lt))}Ce!==null&&De<dw&&(Ce=null);const Fe=Ce!==null&&[...Oe.entries()].some(([Me,ft])=>Me!==Ce&&ft>=De-.1),Ne=K.some(Me=>pe>=Me.x0&&pe<=Me.x1&&ce>=Me.y0&&ce<=Me.y1);s.push({value:Ce,valueRead:Ce!==null,center:[Math.round((D+J)/2),Math.round((Q+ie)/2)],boundingBox:{x:Math.trunc(D),y:Math.trunc(Q),width:Math.trunc(J-D),height:Math.trunc(ie-Q)},confidence:Math.round(De*1e4)/1e4,excluded:Ne,photoIndex:b-1,...Fe?{suspect:!0,suspectReason:"orientation-ambiguous"}:{}})}i()}_>0?n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: ${_} banner(s) near a wonder were excluded as tucked/consumed (estimated footprint — the server uses the real card box); verify the per-colour counts.`}):g>0&&d.length===0&&n.push({code:"OVERLAPPING_OBJECTS",message:`${t}: no wonder was located on this photo, so a card tucked under a wonder may still be counted — verify the per-colour counts.`});const x=a.guild??0;x!==p.length?n.push({code:"INCONSISTENT_STATE",message:`${t}: ${x} purple banner(s) counted but ${p.length} guild(s) identified — reconcile in the review (stacked guilds or a missed identification).`}):p.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: guild(s) identified by their card art: `+p.map(S=>S.id).join(", ")+" — confirm in the review."});const $=d.filter(S=>S.boundingBox.width===0);$.length>0?n.push({code:"LOW_CONFIDENCE",message:`${t}: wonder(s) identified by name but NOT registered against their reference (${$.map(S=>S.name).join(", ")}) — their BUILT flag is a suggestion: unselect any that was not built.`}):d.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: ${d.length} wonder(s) registered — the BUILT flags were measured (card protruding underneath); confirm in the review.`}),m>0&&n.push({code:"UNRECOGNIZED_OBJECT",message:`${t}: ${m} token disc(s) found but not identified — pick them in the review below.`}),u.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: progress token(s) identified on-device: `+u.map(S=>S.id).join(", ")+" — confirm in the review."}),o.length>0&&n.push({code:"LOW_CONFIDENCE",message:`${t}: coins read as ${f} from ${o.length} tile(s) by their metal COLOUR (the embossed-digit reader is server-only) — confirm the total.`});const T=s.filter(S=>S.valueRead);return{...Aw(),wonders:d,guilds:p,progressTokens:u,laurels:s,cardVictoryPoints:{value:T.reduce((S,E)=>S+(E.value??0),0),laurelsKept:s.length,laurelsUnread:s.length-T.length,complete:s.length===T.length},cardCounts:{byFamily:a,source:g>0?"yolo":"none",tuckedExcluded:_,...c.length>0?{suspects:c}:{}},coins:{total:f,confidence:o.length>0?.5:0,source:o.length>0?"local-colour":"none",coins:o}}}async function Rw(e,t){const n=[{code:"LOW_CONFIDENCE",message:"On-device mode: card counts and laurel/token/coin COUNTS are detected locally; laurel values, wonders, guilds, token ids, coin totals and the pawn are entered in the review (those recognition stages are not ported to the browser yet)."}],r={left:null,right:null},i=e.left.length+e.right.length;let a=0;const s=(u,d=0)=>{t(u,i>0?Math.min(.99,(a+d)/i):void 0)},o=()=>{a+=1};for(const u of["left","right"]){const d=e[u];d.length>0&&(r[u]=await zw(d,u,n,s,o))}return e.hasBoard&&n.push({code:"MILITARY_PAWN_NOT_FOUND",message:"On-device mode cannot read the conflict pawn yet — set its position below."}),{imageId:e.imageId,players:r,militaryTrack:{conflictPawnPosition:0,found:!1,confidence:0},outcome:{type:"civilian"},confidence:.5,warnings:n}}self.onmessage=e=>{const{id:t,kind:n}=e.data,r=(i,a)=>{self.postMessage({id:t,progress:i,...a!==void 0?{fraction:a}:{}})};(async()=>{try{n==="recognize"&&r("starting the on-device engine…",0);const i=n==="classify"?await Cw(e.data.file):await Rw(e.data.payload,r);self.postMessage({id:t,ok:!0,result:i})}catch(i){self.postMessage({id:t,ok:!1,error:String(i)})}})()}})();
